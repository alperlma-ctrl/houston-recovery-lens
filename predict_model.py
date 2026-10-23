"""Train the damage estimator and export its results for the demo.

Run from this folder: python predict_model.py
Writes demo/predict.js and results/predict_metrics.json.
"""
from pathlib import Path
import json

import numpy as np
import pandas as pd
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor

ROOT = Path(__file__).resolve().parent
DATA = ROOT / 'data'
COUNTIES = {'48201': 'Harris', '48157': 'Fort Bend', '48339': 'Montgomery', '48039': 'Brazoria', '48167': 'Galveston'}
STORMS = {'Hurricane Harvey': 'Harvey', 'Tropical Storm Imelda': 'Imelda', 'Tropical Storm Nicholas': 'Nicholas', 'Hurricane Beryl': 'Beryl'}
WEATHER_STORMS = {'Hurricane_Harvey_2017': 'Harvey', 'Tropical_Storm_Imelda_2019': 'Imelda', 'Hurricane_Nicholas_2021': 'Nicholas', 'Hurricane_Beryl_2024': 'Beryl'}
FEATURES = ['depth', 'log_coverage', 'rain_total', 'gust_max', 'zone', 'county']


def load():
    claims = pd.read_csv(DATA / 'houston_fema_flood_claims_2017_present.csv', dtype={'countyCode': 'string', 'reportedZipCode': 'string'})
    weather = pd.read_csv(DATA / 'houston_major_storms_hourly_weather.csv')
    weather['storm'] = weather.storm_event.map(WEATHER_STORMS)
    weather['county'] = weather.location.str.split(' (', regex=False).str[0]
    summary = weather.groupby(['storm', 'county'], as_index=False).agg(
        rain_total=('precipitation', 'sum'), gust_max=('wind_gusts_10m', 'max'))

    # same eligible claims as the explorer, plus a known water depth
    claims['storm'] = claims.floodEvent.map(STORMS)
    claims['county'] = claims.countyCode.map(COUNTIES)
    df = claims[claims.storm.notna() & claims.county.notna() & claims.occupancyType.isin([1, 11])].copy()
    zone = df.ratedFloodZone.fillna('UNKNOWN').astype(str).str.strip().str.upper()
    df['zone'] = zone.where(zone.isin(['AE', 'X']), 'OTHER')
    df['coverage'] = pd.to_numeric(df.totalBuildingInsuranceCoverage, errors='coerce')
    df['damage'] = pd.to_numeric(df.buildingDamageAmount, errors='coerce')
    df['depth'] = pd.to_numeric(df.waterDepth, errors='coerce')
    df = df[df.damage.notna() & (df.damage >= 0) & df.coverage.between(1, 250000)]
    # past 10 ft the field mixes in inches (spikes at 12, 24, 36) and the 99 placeholder
    df = df[df.depth.notna() & df.depth.between(0, 10)]
    df['log_coverage'] = np.log1p(df.coverage)
    df = df.merge(summary, on=['storm', 'county'], how='inner', validate='many_to_one')
    return df, summary


def features(frame):
    X = pd.get_dummies(frame[FEATURES], columns=['zone', 'county']).astype(float)
    for col in ['zone_AE', 'zone_OTHER', 'zone_X'] + ['county_' + c for c in COUNTIES.values()]:
        if col not in X:
            X[col] = 0.0
    return X[sorted(X.columns)]


def new_model():
    # more water or more coverage should never lower the estimate
    # tweedie keeps predictions above $0, which squared error did not on Beryl
    return XGBRegressor(n_estimators=400, max_depth=5, learning_rate=0.05, subsample=0.8, colsample_bytree=0.8,
                        objective='reg:tweedie', tweedie_variance_power=1.5,
                        monotone_constraints={'depth': 1, 'log_coverage': 1}, random_state=42)


def test_result(train, test):
    model = new_model()
    model.fit(features(train), train.damage)
    pred = model.predict(features(test)).clip(0)
    baseline = np.full(len(test), train.damage.median())
    base_mae = mean_absolute_error(test.damage, baseline)
    model_mae = mean_absolute_error(test.damage, pred)
    return {'train_n': len(train), 'test_n': len(test), 'baseline_mae': base_mae, 'model_mae': model_mae,
            'improvement_pct': 100 * (1 - model_mae / base_mae), 'r2': r2_score(test.damage, pred),
            'zero_share': float(np.mean(pred == 0))}


def main():
    df, summary = load()

    # test 1: homes the model never saw, from the same four storms
    train, test = train_test_split(df, test_size=0.2, random_state=42)
    mixed = test_result(train, test)
    # test 2: a whole storm the model never saw
    unseen = test_result(df[df.storm != 'Beryl'], df[df.storm == 'Beryl'])

    model = new_model()
    model.fit(features(df), df.damage)
    importance = pd.Series(model.feature_importances_, index=features(df.head(1)).columns)
    grouped = {'Water depth': importance['depth'], 'Home coverage': importance['log_coverage'],
               'Storm rain & wind': importance['rain_total'] + importance['gust_max'],
               'Flood zone': importance.filter(like='zone_').sum(), 'County': importance.filter(like='county_').sum()}

    # grid for the demo's estimator, which blends between whole feet since claims only record whole feet
    depths = list(range(0, 11))
    coverages = [25000, 50000, 75000, 100000, 150000, 200000, 250000]
    rows = []
    for w in summary.to_dict('records'):
        for zone in ['X', 'AE', 'OTHER']:
            for depth in depths:
                for coverage in coverages:
                    rows.append({**w, 'zone': zone, 'depth': depth, 'coverage': coverage, 'log_coverage': np.log1p(coverage)})
    grid = pd.DataFrame(rows)
    grid['prediction'] = model.predict(features(grid)).clip(0)

    # scenario: every eligible home gets Harvey's weather for its county
    scenario = df.drop(columns=['rain_total', 'gust_max']).merge(
        summary[summary.storm == 'Harvey'].drop(columns='storm'), on='county')
    scenario['prediction'] = model.predict(features(scenario)).clip(0)
    zips = scenario.groupby('reportedZipCode').agg(
        county=('county', lambda s: s.mode()[0]), homes=('prediction', 'size'),
        average=('prediction', 'mean'), total=('prediction', 'sum')).reset_index()
    zips = zips[zips.homes >= 20].sort_values('total', ascending=False)
    counties = scenario.groupby('county').agg(homes=('prediction', 'size'), average=('prediction', 'mean'),
                                              total=('prediction', 'sum')).reset_index().sort_values('total', ascending=False)

    payload = {
        'eligible_n': len(df), 'mixed_test': mixed, 'unseen_storm_test': unseen,
        'importance': {k: float(v) for k, v in sorted(grouped.items(), key=lambda kv: -kv[1])},
        'depths': depths, 'coverages': coverages,
        'grid': [[r.storm, r.county, r.zone, r.depth, r.coverage, round(float(r.prediction))] for r in grid.itertuples()],
        'zips': [{'zip': r.reportedZipCode, 'county': r.county, 'homes': int(r.homes), 'average': float(r.average), 'total': float(r.total)}
                 for r in zips.head(10).itertuples()],
        'counties': [{'county': r.county, 'homes': int(r.homes), 'average': float(r.average), 'total': float(r.total)}
                     for r in counties.itertuples()],
    }
    (ROOT / 'demo' / 'predict.js').write_text('window.PREDICT_DATA=' + json.dumps(payload) + ';\n', encoding='utf-8')
    (ROOT / 'results' / 'predict_metrics.json').write_text(json.dumps({k: payload[k] for k in ['eligible_n', 'mixed_test', 'unseen_storm_test', 'importance']}, indent=2), encoding='utf-8')
    print(json.dumps({k: payload[k] for k in ['eligible_n', 'mixed_test', 'unseen_storm_test', 'importance']}, indent=2))
    print(payload['zips'][:5])


if __name__ == '__main__':
    main()
