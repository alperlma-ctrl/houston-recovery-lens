"""Train the damage estimator and export its results for the demo.

Run from this folder: python predict_model.py
Writes demo/predict.js and results/predict_metrics.json.
"""
from pathlib import Path
import json

import numpy as np
import pandas as pd
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import KFold, train_test_split
from xgboost import XGBRegressor

ROOT = Path(__file__).resolve().parent
DATA = ROOT / 'data'
COUNTIES = {'48201': 'Harris', '48157': 'Fort Bend', '48339': 'Montgomery', '48039': 'Brazoria', '48167': 'Galveston'}
STORMS = {'Hurricane Harvey': 'Harvey', 'Tropical Storm Imelda': 'Imelda', 'Tropical Storm Nicholas': 'Nicholas', 'Hurricane Beryl': 'Beryl'}
WEATHER_STORMS = {'Hurricane_Harvey_2017': 'Harvey', 'Tropical_Storm_Imelda_2019': 'Imelda', 'Hurricane_Nicholas_2021': 'Nicholas', 'Hurricane_Beryl_2024': 'Beryl'}
# extra flood events from the same claims file; weather comes from fetch_damage_weather.py
EXTRA_STORMS = {'Texas Spring Flooding': 'Spring 2024', 'Tropical Storm Beta': 'Beta', '2026-06-Arthur-TS': 'Arthur',
                'June TS Alberto': 'Alberto', 'Fall 2018 Texas Flooding': 'Fall 2018', 'Hurricane Laura': 'Laura'}
EXTRA_WEATHER = {'Spring_Flooding_2024': 'Spring 2024', 'Tropical_Storm_Beta_2020': 'Beta', 'Tropical_Storm_Arthur_2026': 'Arthur',
                 'Tropical_Storm_Alberto_2024': 'Alberto', 'Fall_Flooding_2018': 'Fall 2018', 'Hurricane_Laura_2020': 'Laura'}
FEATURES = ['depth', 'log_coverage', 'rain_total', 'gust_max', 'lat', 'lon', 'zone', 'county']
# zips with this many claim records get their own choice in the demo; the rest use their county
DEMO_ZIP_MIN = 200


def load():
    claims = pd.read_csv(DATA / 'houston_fema_flood_claims_2017_present.csv', dtype={'countyCode': 'string', 'reportedZipCode': 'string'})
    weather = pd.read_csv(DATA / 'houston_major_storms_hourly_weather.csv')
    weather['storm'] = weather.storm_event.map(WEATHER_STORMS)
    extra = pd.read_csv(DATA / 'external_damage' / 'extra_storm_weather.csv')
    extra['storm'] = extra.storm_event.map(EXTRA_WEATHER)
    weather = pd.concat([weather, extra], ignore_index=True)
    weather['county'] = weather.location.str.split(' (', regex=False).str[0]
    summary = weather.groupby(['storm', 'county'], as_index=False).agg(
        rain_total=('precipitation', 'sum'), gust_max=('wind_gusts_10m', 'max'))

    # same eligible claims as the explorer, plus a known water depth
    claims['storm'] = claims.floodEvent.map({**STORMS, **EXTRA_STORMS})
    claims['county'] = claims.countyCode.map(COUNTIES)
    df = claims[claims.storm.notna() & claims.county.notna() & claims.occupancyType.isin([1, 11])].copy()
    zone = df.ratedFloodZone.fillna('UNKNOWN').astype(str).str.strip().str.upper()
    df['zone'] = zone.where(zone.isin(['AE', 'X']), 'OTHER')
    df['coverage'] = pd.to_numeric(df.totalBuildingInsuranceCoverage, errors='coerce')
    df['damage'] = pd.to_numeric(df.buildingDamageAmount, errors='coerce')
    df['depth'] = pd.to_numeric(df.waterDepth, errors='coerce')
    df = df[df.damage.notna() & (df.damage >= 0) & df.coverage.between(1, 250000)]
    # Retain raw depth codes 0..10 as an explicit modeling assumption.
    # The organizer labels the field inches/feet; physical units remain unresolved.
    df = df[df.depth.notna() & df.depth.between(0, 10)]
    df['log_coverage'] = np.log1p(df.coverage)
    df['lat'] = pd.to_numeric(df.latitude, errors='coerce')
    df['lon'] = pd.to_numeric(df.longitude, errors='coerce')
    df['zip'] = df.reportedZipCode.astype(str)
    df = df.merge(summary, on=['storm', 'county'], how='inner', validate='many_to_one')
    return df.reset_index(drop=True), summary


def zip_history(train):
    # average damage per zip in the training storms, pulled toward the overall average when a zip has few claims
    prior, k = train.damage.mean(), 30
    g = train.groupby('zip').damage.agg(['sum', 'count'])
    return (g['sum'] + prior * k) / (g['count'] + k), prior


def add_zip_history(train, test):
    # training rows get out-of-fold values so the model can't just memorize its own claims
    train, test = train.copy(), test.copy()
    train['zip_mean'] = 0.0
    for a, b in KFold(5, shuffle=True, random_state=0).split(train):
        hist, prior = zip_history(train.iloc[a])
        train.iloc[b, train.columns.get_loc('zip_mean')] = train.zip.iloc[b].map(hist).fillna(prior).values
    hist, prior = zip_history(train)
    test['zip_mean'] = test.zip.map(hist).fillna(prior)
    return train, test


def features(frame):
    X = pd.get_dummies(frame[FEATURES + ['zip_mean']], columns=['zone', 'county']).astype(float)
    for col in ['zone_AE', 'zone_OTHER', 'zone_X'] + ['county_' + c for c in COUNTIES.values()]:
        if col not in X:
            X[col] = 0.0
    return X[sorted(X.columns)]


def new_model():
    # predicts the share of coverage that was damaged (0 to 1); more water should never lower it
    # this beat predicting dollars in experiments.py, mostly by fixing the low totals on unseen storms
    return XGBRegressor(n_estimators=400, max_depth=5, learning_rate=0.05, subsample=0.8, colsample_bytree=0.8,
                        objective='reg:logistic', monotone_constraints={'depth': 1}, random_state=42, n_jobs=2)


def fit(train):
    model = new_model()
    model.fit(features(train), (train.damage / train.coverage).clip(0, 1))
    return model


def predict_dollars(model, frame):
    return model.predict(features(frame)).clip(0) * frame.coverage.values


def test_result(train, test):
    train, test = add_zip_history(train, test)
    pred = predict_dollars(fit(train), test)
    baseline = np.full(len(test), train.damage.median())
    base_mae = mean_absolute_error(test.damage, baseline)
    model_mae = mean_absolute_error(test.damage, pred)
    return {'train_n': len(train), 'test_n': len(test), 'baseline_mae': base_mae, 'model_mae': model_mae,
            'improvement_pct': 100 * (1 - model_mae / base_mae), 'r2': r2_score(test.damage, pred),
            'zero_share': float(np.mean(pred == 0)), 'zero_baseline_mae': float(np.mean(np.abs(test.damage))),
            'test_mean_damage': float(test.damage.mean()), 'mean_prediction': float(pred.mean()),
            'total_error_pct': 100 * (pred.sum() / test.damage.sum() - 1)}


def storm_tests(df):
    # hold out each storm in turn and train on all the others
    rows = []
    for storm in df.storm.value_counts().index:
        r = test_result(df[df.storm != storm], df[df.storm == storm])
        rows.append({'storm': storm, 'test_n': r['test_n'], 'model_mae': r['model_mae'], 'baseline_mae': r['baseline_mae'],
                     'zero_baseline_mae': r['zero_baseline_mae'], 'improvement_pct': r['improvement_pct'],
                     'r2': r['r2'], 'total_error_pct': r['total_error_pct']})
    return rows


def main():
    df, summary = load()

    # Random claim-record split; unique homes cannot be identified.
    train, test = train_test_split(df, test_size=0.2, random_state=42)
    mixed = test_result(train, test)
    # Beryl excluded from fitting, but already inspected during project development.
    unseen = test_result(df[df.storm != 'Beryl'], df[df.storm == 'Beryl'])

    per_storm = storm_tests(df)
    others = [r for r in per_storm if r['storm'] != 'Harvey']
    four = df[df.storm.isin(STORMS.values())]
    four_storm = [r for r in storm_tests(four) if r['storm'] != 'Harvey']
    weighted = lambda rows: 100 * (1 - sum(r['model_mae'] * r['test_n'] for r in rows) / sum(r['baseline_mae'] * r['test_n'] for r in rows))
    storm_summary = {'storms': len(per_storm), 'beat_baseline': sum(r['improvement_pct'] > 0 for r in per_storm),
                     'improvement_pct_excl_harvey': weighted(others),
                     'four_storm_improvement_pct_excl_harvey': weighted(four_storm)}

    trained, _ = add_zip_history(df, df.head(1))
    model = fit(trained)
    hist, _ = zip_history(df)
    df['zip_mean'] = df.zip.map(hist)
    importance = pd.Series(model.feature_importances_, index=features(df.head(1)).columns)
    grouped = {'Water depth': importance['depth'], 'Home coverage': importance['log_coverage'],
               'Storm rain & wind': importance['rain_total'] + importance['gust_max'],
               'Location & zip history': importance['lat'] + importance['lon'] + importance['zip_mean'],
               'Flood zone': importance.filter(like='zone_').sum(), 'County': importance.filter(like='county_').sum()}

    # demo places: each busy zip, plus a typical home for each county
    counts = df.groupby('zip').size()
    places = []
    for z in sorted(counts[counts >= DEMO_ZIP_MIN].index):
        rows = df[df.zip == z]
        places.append({'place': z, 'county': rows.county.mode()[0], 'lat': rows.lat.median(), 'lon': rows.lon.median(), 'zip_mean': hist[z]})
    for county, rows in df.groupby('county'):
        places.append({'place': '', 'county': county, 'lat': rows.lat.median(), 'lon': rows.lon.median(), 'zip_mean': rows.damage.mean()})

    # grid for the demo's estimator, which blends between adjacent recorded depth codes; physical units are unresolved
    depths = list(range(0, 11))
    coverages = [25000, 50000, 75000, 100000, 150000, 200000, 250000]
    rows = []
    for w in summary[summary.storm.isin(STORMS.values())].to_dict('records'):
        for place in places:
            if place['county'] != w['county']:
                continue
            for zone in ['X', 'AE', 'OTHER']:
                for depth in depths:
                    for coverage in coverages:
                        rows.append({**w, **place, 'zone': zone, 'depth': depth, 'coverage': coverage, 'log_coverage': np.log1p(coverage)})
    grid = pd.DataFrame(rows)
    grid['prediction'] = predict_dollars(model, grid)
    # one list of predictions per storm/place/zone, ordered depth first, then coverage
    grid_values = {}
    for (storm, place, county, zone), g in grid.groupby(['storm', 'place', 'county', 'zone'], sort=False):
        grid_values['|'.join([storm, place or county, zone])] = [int(round(v)) for v in g.prediction]

    # scenario: every eligible home gets Harvey's weather for its county
    scenario = df.drop(columns=['rain_total', 'gust_max']).merge(
        summary[summary.storm == 'Harvey'].drop(columns='storm'), on='county')
    scenario['prediction'] = predict_dollars(model, scenario)
    zips = scenario.groupby('reportedZipCode').agg(
        county=('county', lambda s: s.mode()[0]), homes=('prediction', 'size'),
        average=('prediction', 'mean'), total=('prediction', 'sum')).reset_index()
    zips = zips[zips.homes >= 20].sort_values('total', ascending=False)
    counties = scenario.groupby('county').agg(homes=('prediction', 'size'), average=('prediction', 'mean'),
                                              total=('prediction', 'sum')).reset_index().sort_values('total', ascending=False)

    payload = {
        'eligible_n': len(df), 'mixed_test': mixed, 'unseen_storm_test': unseen,
        'storm_tests': per_storm, 'storm_summary': storm_summary,
        'scope': {'depth': 'Raw recorded code 0..10; inches/feet ambiguity unresolved', 'evaluation': 'Retrospective development checks; random rows are not distinct homes', 'scenario': 'Reuses recorded depth and coverage with Harvey weather; repeats can occur; demo ZIP history uses all retained records', 'selection': '24 variants compared on these repeatedly inspected development checks; not untouched final tests', 'chronology': 'Event holdouts may fit later events; not chronological forecasts', 'target': 'Damage/coverage clipped to 0..1; assessed damage can exceed coverage', 'zip_history': 'Evaluation encodings use fitting rows only; training OOF splits are random rows, not event/property groups'},
        'cohort_counts': df.groupby(['storm','county','zone']).size().rename('claims').reset_index().to_dict('records'),
        'importance': {k: float(v) for k, v in sorted(grouped.items(), key=lambda kv: -kv[1])},
        'depths': depths, 'coverages': coverages,
        'grid': grid_values,
        'demo_zips': [{'zip': p['place'], 'county': p['county'], 'records': int(counts[p['place']])} for p in places if p['place']],
        'zips': [{'zip': r.reportedZipCode, 'county': r.county, 'records': int(r.homes), 'average': float(r.average), 'total': float(r.total)}
                 for r in zips.head(10).itertuples()],
        'counties': [{'county': r.county, 'records': int(r.homes), 'average': float(r.average), 'total': float(r.total)}
                     for r in counties.itertuples()],
    }
    model.save_model(ROOT / 'results' / 'predict_model.ubj')
    (ROOT / 'results' / 'predict_data.json').write_text(json.dumps(payload), encoding='utf-8')
    (ROOT / 'demo' / 'predict.js').write_text('window.PREDICT_DATA=' + json.dumps(payload) + ';\n', encoding='utf-8')
    (ROOT / 'results' / 'predict_metrics.json').write_text(json.dumps({k: payload[k] for k in ['eligible_n', 'mixed_test', 'unseen_storm_test', 'storm_tests', 'storm_summary', 'importance', 'scope']}, indent=2), encoding='utf-8')
    print(json.dumps({k: payload[k] for k in ['eligible_n', 'mixed_test', 'unseen_storm_test', 'storm_summary', 'importance']}, indent=2))
    print(payload['zips'][:5])


if __name__ == '__main__':
    main()


