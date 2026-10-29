"""Reproduce StormReady's retrospective claim severity analysis.

Run from this folder: python train_model.py
Outputs contain aggregates and models, never claim-level coordinates.
"""
from pathlib import Path
import hashlib
import json
import platform
import warnings

import numpy as np
import pandas as pd
import sklearn
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import QuantileRegressor, Ridge
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error, median_absolute_error, r2_score
import joblib

ROOT = Path(__file__).resolve().parent
DATA = ROOT / 'data'
OUT = ROOT / 'results'
OUT.mkdir(exist_ok=True)
COUNTIES = {'48201':'Harris','48157':'Fort Bend','48339':'Montgomery','48039':'Brazoria','48167':'Galveston'}
STORMS = {'Hurricane Harvey':'Harvey', 'Tropical Storm Imelda':'Imelda', 'Tropical Storm Nicholas':'Nicholas', 'Hurricane Beryl':'Beryl'}
WEATHER_STORMS = {'Hurricane_Harvey_2017':'Harvey', 'Tropical_Storm_Imelda_2019':'Imelda', 'Hurricane_Nicholas_2021':'Nicholas', 'Hurricane_Beryl_2024':'Beryl'}
YEARS = {'Harvey':2017,'Imelda':2019,'Nicholas':2021,'Beryl':2024}
NUM = ['rain_total', 'gust_max', 'coverage']
CAT = ['county', 'zone']
FEATURES = NUM + CAT


def prepare():
    claims = pd.read_csv(DATA/'houston_fema_flood_claims_2017_present.csv', dtype={'countyCode':'string','reportedZipCode':'string'})
    weather = pd.read_csv(DATA/'houston_major_storms_hourly_weather.csv')
    weather['storm'] = weather.storm_event.map(WEATHER_STORMS)
    weather['county'] = weather.location.str.split(' (', regex=False).str[0]
    weather['time'] = pd.to_datetime(weather.time)
    assert not weather.duplicated(['storm','county','time']).any(), 'Duplicate weather hours'
    summary = weather.groupby(['storm','county'], as_index=False).agg(
        rain_total=('precipitation','sum'), gust_max=('wind_gusts_10m','max'),
        pressure_min=('surface_pressure','min'), soil_mean=('soil_moisture_0_to_7cm','mean'),
        hours=('time','size'), weather_start=('time','min'), weather_end=('time','max'))
    summary['weather_start'] = summary.weather_start.astype(str)
    summary['weather_end'] = summary.weather_end.astype(str)
    claims['storm'] = claims.floodEvent.map(STORMS)
    claims['county'] = claims.countyCode.map(COUNTIES)
    # Codes 1 and 11 both identify single-family residential structures.
    selected = claims[claims.storm.notna() & claims.county.notna() & claims.occupancyType.isin([1,11])].copy()
    raw_zone = selected.ratedFloodZone.fillna('UNKNOWN').astype(str).str.strip().str.upper()
    selected['zone'] = raw_zone.where(raw_zone.isin(['AE','X']), 'OTHER')
    selected['coverage'] = pd.to_numeric(selected.totalBuildingInsuranceCoverage, errors='coerce')
    selected['damage'] = pd.to_numeric(selected.buildingDamageAmount, errors='coerce')
    # Do not use depth, damage-related payouts, loss date, or storm name as model inputs.
    valid = selected.damage.notna() & np.isfinite(selected.damage) & (selected.damage >= 0)
    valid &= selected.coverage.notna() & selected.coverage.between(1,250000)
    model_df = selected[valid].merge(summary, on=['storm','county'], how='inner', validate='many_to_one')
    assert len(model_df) == valid.sum(), 'Weather join dropped or multiplied claims'
    assert not model_df[FEATURES+['damage']].isna().any().any()
    audit = {
        'raw_claims':len(claims), 'selected_single_family_claims':len(selected),
        'missing_damage_in_selected':int(selected.damage.isna().sum()),
        'negative_damage_in_selected':int((selected.damage<0).sum()),
        'out_of_scope_coverage_in_selected':int((~selected.coverage.between(1,250000)).sum()),
        'model_claims':len(model_df), 'weather_rows':len(weather), 'weather_groups':len(summary),
        'exact_duplicate_full_claim_rows':int(claims.duplicated().sum()),
        'notes':['No unique claim ID supplied; distinct properties and repeat claims cannot be verified.',
                 'Missing damage is excluded, never replaced with zero.',
                 'County FIPS standardized as five-character strings.',
                 'Only five counties have claims and weather; four other boundary counties have no model support.',
                 'Recorded claims are not the population of homes and do not measure flood probability.']}
    return claims, model_df, summary, weather, audit


def pipeline(estimator, scale=False):
    num = StandardScaler() if scale else 'passthrough'
    return Pipeline([('features', ColumnTransformer([('numeric',num,NUM),('category',OneHotEncoder(handle_unknown='ignore',sparse_output=False),CAT)])), ('model',estimator)])


def scores(y,p):
    return {'mae':float(mean_absolute_error(y,p)), 'median_absolute_error':float(median_absolute_error(y,p)), 'r2':float(r2_score(y,p))}


def clean_json(value):
    if isinstance(value,dict): return {str(k):clean_json(v) for k,v in value.items()}
    if isinstance(value,list): return [clean_json(v) for v in value]
    if isinstance(value,(np.integer,)): return int(value)
    if isinstance(value,(np.floating,)): return float(value) if np.isfinite(value) else None
    return value


def main():
    claims,df,weather,weather_hourly,audit=prepare()
    train=df[df.storm.isin(['Harvey','Imelda'])].copy()
    val=df[df.storm=='Nicholas'].copy()
    test=df[df.storm=='Beryl'].copy()
    assert set(train.storm).isdisjoint(set(val.storm)|set(test.storm))
    assert max(train.yearOfLoss) < min(val.yearOfLoss) < min(test.yearOfLoss)
    baseline=float(train.damage.median())
    # Prevent Harvey's many claim rows from overwhelming Imelda in fitting.
    weights=train.storm.map({s:len(train)/(2*n) for s,n in train.storm.value_counts().items()}).to_numpy()
    candidates={
        'Shallow decision tree':pipeline(DecisionTreeRegressor(max_depth=3,min_samples_leaf=250,criterion='squared_error',random_state=42)),
        'Linear ridge regression':pipeline(Ridge(alpha=100),scale=True),
    }
    validation=[]
    best_name='Training median baseline'; best_model=None
    best_val=mean_absolute_error(val.damage,np.full(len(val),baseline))
    validation.append({'model':best_name,**scores(val.damage,np.full(len(val),baseline))})
    for name,model in candidates.items():
        model.fit(train[FEATURES],train.damage,model__sample_weight=weights)
        pred=np.maximum(0,model.predict(val[FEATURES]))
        result={'model':name,**scores(val.damage,pred)}
        validation.append(result)
        if result['mae'] < best_val:
            best_name=name;best_model=model;best_val=result['mae']
    def predict(frame):
        return np.full(len(frame),baseline) if best_model is None else np.maximum(0,best_model.predict(frame[FEATURES]))
    # Test Beryl once, after selection on Nicholas. No test-based model tuning.
    val_pred=predict(val);test_pred=predict(test)
    baseline_test=scores(test.damage,np.full(len(test),baseline))
    model_test=scores(test.damage,test_pred)
    # Descriptive validation residual range only; no probabilistic guarantee.
    residual_low,residual_high=np.quantile(val.damage.to_numpy()-val_pred,[.1,.9])
    interval_coverage=float(np.mean((test.damage>=np.maximum(0,test_pred+residual_low)) & (test.damage<=np.maximum(0,test_pred+residual_high))))
    metrics={'selected_model':best_name,'selection_metric':'Nicholas 2021 mean absolute error',
        'train_storms':['Harvey 2017','Imelda 2019'],'validation_storm':'Nicholas 2021','test_storm':'Beryl 2024',
        'train_n':len(train),'validation_n':len(val),'test_n':len(test),'baseline_prediction':baseline,
        'validation_candidates':validation,'test_baseline':baseline_test,'test_model':model_test,
        'test_mae_improvement_pct':100*(1-model_test['mae']/baseline_test['mae']),
        'validation_residual_10th':float(residual_low),'validation_residual_90th':float(residual_high),
        'test_residual_band_coverage':interval_coverage,
        'test_zero_prediction_share':float(np.mean(test_pred==0)),
        'zero_prediction_baseline_mae':float(np.mean(test.damage)),
        'model_status':'REJECTED FOR PLANNING USE',
        'rejection_reason':'All Beryl predictions clipped to zero. The apparent median-baseline improvement does not demonstrate useful severity prediction. The demo uses observed historical aggregates only.',
        'features':FEATURES,'scope':'Assessed building damage in nominal USD among selected single-family insured claims with known damage and coverage of $1-$250,000.',
        'training_ranges':{c:[float(train[c].min()),float(train[c].max())] for c in NUM}}
    county_rows=[]
    for weather_row in weather.to_dict('records'):
        storm,county=weather_row['storm'],weather_row['county']
        g=df[(df.storm==storm)&(df.county==county)]
        row=dict(weather_row)
        row.update({'year':YEARS[storm],'claims':len(g),'median_damage':float(g.damage.median()) if len(g) else None,
                    'mean_damage':float(g.damage.mean()) if len(g) else None,'total_recorded_damage':float(g.damage.sum()),
                    'zone_x_claims':int((g.zone=='X').sum()),'zone_x_share':float((g.zone=='X').mean()) if len(g) else None})
        county_rows.append(row)
    # Archive fitted outputs for reproducibility, not a public planning feature.
    grid=[]
    for w in weather.to_dict('records'):
        for zone in ['X','AE','OTHER']:
            for coverage in range(50000,250001,10000):
                grid.append({**w,'zone':zone,'coverage':coverage})
    grid=pd.DataFrame(grid)
    grid['prediction']=predict(grid)
    grid['low']=np.maximum(0,grid.prediction+residual_low)
    grid['high']=np.maximum(grid.low,grid.prediction+residual_high)
    grid['out_of_training_weather_range']=(~grid.rain_total.between(*metrics['training_ranges']['rain_total']))|(~grid.gust_max.between(*metrics['training_ranges']['gust_max']))
    hourly=[]
    for (storm,county),g in weather_hourly.groupby(['storm','county']):
        # Downsample to six-hour blocks for plotting; sums preserve rainfall totals.
        g=g.sort_values('time').set_index('time')
        for time,b in g.resample('6h'):
            if len(b): hourly.append({'storm':storm,'county':county,'time':str(time),'rain':float(b.precipitation.sum()),'gust':float(b.wind_gusts_10m.max())})
    tracks=pd.read_csv(DATA/'tx_gulf_hurricane_tracks_1980_present.csv')
    track_summary={'rows':len(tracks),'unique_storms':int(tracks.SID.nunique()),'first_year':int(tracks.SEASON.min()),'last_year':int(tracks.SEASON.max())}
    zone_x=int((df.zone=='X').sum())
    cohorts=[]
    for (storm,county,zone),g in df.groupby(['storm','county','zone']):
        if len(g)>=20:
            cohorts.append({'storm':storm,'county':county,'zone':zone,'claims':len(g),
                'median':float(g.damage.median()),'q25':float(g.damage.quantile(.25)),
                'q75':float(g.damage.quantile(.75)),'total':float(g.damage.sum())})
    payload={'title':'Houston Recovery Lens','metrics':metrics,'audit':audit,'counties':COUNTIES,
        'storm_years':YEARS,'history':county_rows,
        'cohorts':cohorts,
        'hourly':hourly,'tracks_summary':track_summary,
        'insights':{'zone_x_claims':zone_x,'zone_x_share':zone_x/len(df)},
        'sources':{'folder':'https://drive.google.com/drive/folders/1doFLc1xXvUDTBvoDg0wmebjGIaaCCy0a',
                   'brief':'https://docs.google.com/document/d/1n9FrZHastJOO1jy2f6X_PbYukTuAnrWgbJugyTK3lkw/edit'},
        'limitations':['Four historical storms and five counties; many claims do not mean many independent storms.',
            'Weather is full-window historical reanalysis at one county reference point, not a forecast or a county-wide measurement.',
            'Storm windows differ in length; rainfall totals are window-specific scenario descriptors.',
            'Predictions are conditional on a recorded insured claim, not flood probability, total community losses, or a payout.',
            'The model excludes unreported damage, uninsured homes, missing damage labels, and coverage outside $1-$250,000.',
            'Amounts are nominal dollars without inflation adjustment; policy rules and coding changed over time.',
            'No outage target file was supplied, so no outage or restoration predictions are made.',
            'No property ID supplied, so the same property could appear in more than one storm.',
            'Unknown flood zones are included in OTHER; X is a recorded zone label and does not mean no flood risk.',
            'The candidate model failed the Beryl check and is not used to generate planning estimates.']}
    (OUT/'demo_data.json').write_text(json.dumps(clean_json(payload),indent=2,allow_nan=False),encoding='utf-8')
    (OUT/'metrics.json').write_text(json.dumps(clean_json(metrics),indent=2,allow_nan=False),encoding='utf-8')
    (OUT/'audit.json').write_text(json.dumps(clean_json(audit),indent=2),encoding='utf-8')
    grid[['storm','county','zone','coverage','prediction','low','high','out_of_training_weather_range']].to_csv(OUT/'rejected_model_predictions.csv',index=False)
    pd.DataFrame(county_rows).to_csv(OUT/'county_storm_summary.csv',index=False)
    # No rows are deduplicated without a unique claim ID: redacted rows can collide legitimately.
    manifest={'retrieved_date':'2026-10-23','source_folder':payload['sources']['folder'],
        'files':[{'name':p.relative_to(DATA).as_posix(),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in sorted(DATA.rglob('*')) if p.is_file()],
        'python':platform.python_version(),'numpy':np.__version__,'pandas':pd.__version__,'scikit_learn':sklearn.__version__}
    (OUT/'data_manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
    joblib.dump({'pipeline':best_model,'baseline':baseline,'features':FEATURES,'metrics':metrics},OUT/'trained_model.joblib')
    print(json.dumps(clean_json(metrics),indent=2))


if __name__=='__main__': main()
