"""Causal six-hour peak gust hindcast; whole-storm validation.

Inputs are current/past reanalysis values. This is a research hindcast,
not a live warning system or a test of forecasts issued before a storm.
"""
from pathlib import Path
import json,hashlib
import numpy as np
import pandas as pd
import joblib
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.linear_model import Ridge
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_absolute_error,mean_squared_error
from sklearn.inspection import permutation_importance

ROOT=Path(__file__).resolve().parent
OUT=ROOT/'results';OUT.mkdir(exist_ok=True)
FEATURES=['gust','wind','wind100','pressure','pressure_change_3h','gust_change_3h',
          'gust_max_6h','gust_mean_6h','rain_3h','lat','lon','direction_sin','direction_cos']
STORM_NAMES={'Hurricane_Harvey_2017':'Harvey','Tropical_Storm_Imelda_2019':'Imelda',
             'Hurricane_Nicholas_2021':'Nicholas','Hurricane_Beryl_2024':'Beryl',
             'Arthur_2026_External':'Arthur 2026 window','Bertha_2026_External':'Bertha 2026 window',
             'Edouard_2026_External':'Edouard 2026 window'}

def make_samples(weather):
    rows=[]
    for (storm,location),group in weather.groupby(['storm_event','location']):
        g=group.sort_values('time').reset_index(drop=True).copy()
        times=pd.to_datetime(g.time)
        assert (times.diff().dropna()==pd.Timedelta(hours=1)).all(), 'Nonhourly or duplicate rows'
        numeric=['wind_gusts_10m','wind_speed_10m','wind_speed_100m','surface_pressure',
                 'precipitation','latitude','longitude','wind_direction_10m']
        assert not g[numeric].isna().any().any(), 'Missing weather inputs or labels'
        for t in range(6,len(g)-6):
            past=g.iloc[t-6:t+1];current=g.iloc[t];future=g.iloc[t+1:t+7]
            assert past.time.max()<=current.time<future.time.min()
            rows.append({'storm':STORM_NAMES[storm],'storm_id':storm,'county':location.split(' (')[0],
                'time':current.time,'target_start':future.iloc[0].time,'target_end':future.iloc[-1].time,
                'gust':float(current.wind_gusts_10m),'wind':float(current.wind_speed_10m),
                'wind100':float(current.wind_speed_100m),'pressure':float(current.surface_pressure),
                'pressure_change_3h':float(current.surface_pressure-g.iloc[t-3].surface_pressure),
                'gust_change_3h':float(current.wind_gusts_10m-g.iloc[t-3].wind_gusts_10m),
                'gust_max_6h':float(past.wind_gusts_10m.max()),'gust_mean_6h':float(past.wind_gusts_10m.mean()),
                'rain_3h':float(past.tail(3).precipitation.sum()),'lat':float(current.latitude),'lon':float(current.longitude),
                'direction_sin':float(np.sin(np.radians(current.wind_direction_10m))),
                'direction_cos':float(np.cos(np.radians(current.wind_direction_10m))),
                'target':float(future.wind_gusts_10m.max())})
    return pd.DataFrame(rows)

def model_specs():
    settings=dict(max_iter=120,max_leaf_nodes=7,min_samples_leaf=25,l2_regularization=10,learning_rate=.06,random_state=42)
    return {'Persistence':None,'Ridge':make_pipeline(StandardScaler(),Ridge(alpha=30)),
            'Residual gradient boosting':HistGradientBoostingRegressor(**settings),
            'Gradient boosting':HistGradientBoostingRegressor(**settings)}

def predict(model,name,frame):
    if model is None:return frame.gust.to_numpy()
    p=model.predict(frame[FEATURES])
    if name=='Residual gradient boosting':p=p+frame.gust.to_numpy()
    return np.maximum(0,p)

def evaluate(frame,prediction):
    truth=frame.target.to_numpy();base=frame.gust.to_numpy()
    mae=float(mean_absolute_error(truth,prediction));bmae=float(mean_absolute_error(truth,base))
    peak=truth>=float(np.quantile(truth,.9))
    return {'n':len(frame),'mae_mph':mae,'rmse_mph':float(mean_squared_error(truth,prediction)**.5),
            'persistence_mae_mph':bmae,'improvement_pct':100*(1-mae/bmae),
            'peak_decile_mae_mph':float(mean_absolute_error(truth[peak],prediction[peak])),
            'peak_decile_mean_bias_mph':float(np.mean(prediction[peak]-truth[peak])),
            'observed_max_mph':float(np.max(truth)),'prediction_max_mph':float(np.max(prediction))}

def main():
    original=pd.read_csv(ROOT/'data/houston_major_storms_hourly_weather.csv')
    original_samples=make_samples(original)
    train=original_samples[original_samples.storm.isin(['Harvey','Imelda'])]
    validation=original_samples[original_samples.storm=='Nicholas']
    assert set(train.storm).isdisjoint(set(validation.storm))
    candidates=model_specs();records=[]
    for name,model in candidates.items():
        if model is not None:
            target=train.target-train.gust if name=='Residual gradient boosting' else train.target
            model.fit(train[FEATURES],target)
        p=predict(model,name,validation)
        records.append({'model':name,'mae_mph':float(mean_absolute_error(validation.target,p))})
    choice=min(records,key=lambda r:r['mae_mph'])['model'];model=candidates[choice]
    # All hyperparameters and choice are fixed by Nicholas, before extra-window evaluation.
    selection={'selected_model':choice,'validation':records,'features':FEATURES,
               'train_storms':['Harvey 2017','Imelda 2019'],'selection_storm':'Nicholas 2021',
               'hyperparameters':model.get_params() if model is not None else {}}
    (OUT/'wind_model_selection.json').write_text(json.dumps(selection,indent=2),encoding='utf-8')
    joblib.dump({'model':model,'name':choice,'features':FEATURES},OUT/'wind_model.joblib')
    artifact_sha=hashlib.sha256((OUT/'wind_model.joblib').read_bytes()).hexdigest()
    val_pred=predict(model,choice,validation)
    qlo,qhi=np.quantile(validation.target-val_pred,[.1,.9])
    extra_path=ROOT/'data/external_validation/additional_storm_windows_2026.csv'
    extra=pd.read_csv(extra_path)
    extra_samples=make_samples(extra)
    all_samples=pd.concat([original_samples,extra_samples],ignore_index=True)
    all_samples['prediction']=predict(model,choice,all_samples)
    all_samples['band_low']=np.maximum(0,all_samples.prediction+qlo)
    all_samples['band_high']=np.maximum(all_samples.band_low,all_samples.prediction+qhi)
    train_max=float(train.gust.max())
    all_samples['outside_training_gust_range']=all_samples.gust>train_max
    evaluation=[]
    for storm,frame in all_samples.groupby('storm',sort=False):
        result={'storm':storm,**evaluate(frame,frame.prediction.to_numpy())}
        result['role']='Training' if storm in ['Harvey','Imelda'] else 'Validation' if storm=='Nicholas' else 'Development replay' if storm=='Beryl' else 'Additional frozen-model check'
        result['residual_band_coverage']=float(np.mean((frame.target>=frame.band_low)&(frame.target<=frame.band_high)))
        evaluation.append(result)
    ext=all_samples[all_samples.storm.str.contains('2026 window')]
    external_result=evaluate(ext,ext.prediction.to_numpy())
    importance=[]
    if model is not None:
        p=permutation_importance(model,validation[FEATURES],validation.target,n_repeats=3,random_state=42,scoring='neg_mean_absolute_error')
        importance=[{'feature':FEATURES[i],'mae_increase_mph':float(p.importances_mean[i])} for i in np.argsort(p.importances_mean)[::-1]]
    scores={'target':'Maximum gust in the following six hourly observations (t+1 through t+6)',
            'input_window':'Current hour plus preceding six hours; no future weather enters the features.',
            'units':'mph','selected_model':choice,'train_n':len(train),'validation_n':len(validation),
            'validation_candidates':records,'evaluations':evaluation,'external_2026_combined':external_result,
            'training_max_current_gust_mph':train_max,'validation_residual_q10_mph':float(qlo),'validation_residual_q90_mph':float(qhi),
            'importance':importance[:7],'model_sha256':artifact_sha,
            'interpretation':'Retrospective reanalysis hindcast; not an operational forecast or warning system.',
            'evaluation_note':'Beryl was inspected during earlier project work and is a development replay. Additional 2026 windows were downloaded only after the candidate set and Nicholas selection rule were fixed. No external-window results are used for tuning.',
            'dependence_note':'Overlapping six-hour labels and nearby county reference points are correlated. Row counts are not independent storm sample sizes.',
            'extra_window_note':'2026 window names and dates come from organizer tracks. Local impact and storm attribution were not independently verified.'}
    (OUT/'wind_metrics.json').write_text(json.dumps(scores,indent=2),encoding='utf-8')
    all_samples.to_csv(OUT/'wind_hindcast_predictions.csv',index=False)
    series=[]
    combined=pd.concat([original,extra],ignore_index=True)
    for (storm,location),g in combined.groupby(['storm_event','location']):
        g=g.sort_values('time')
        series.append({'storm':STORM_NAMES[storm],'county':location.split(' (')[0],
                       'time':g.time.tolist(),'gust':[round(float(v),2) for v in g.wind_gusts_10m]})
    fields=['storm','county','time','target_start','target_end','gust','pressure','pressure_change_3h',
            'gust_change_3h','target','prediction','band_low','band_high','outside_training_gust_range']
    records=all_samples[fields].copy()
    for c in records.select_dtypes(include='number').columns:records[c]=records[c].round(3)
    payload={'metrics':scores,'samples':records.to_dict('records'),'series':series,
             'scope':'Research replay using organizer weather plus separately downloaded ERA5 windows.',
             'attribution_url':'https://open-meteo.com/en/docs/historical-weather-api'}
    (OUT/'wind_demo_data.json').write_text(json.dumps(payload,separators=(',',':'),allow_nan=False),encoding='utf-8')
    assert all_samples[FEATURES+['target','prediction']].notna().all().all()
    assert (all_samples.target_start>all_samples.time).all()
    print(json.dumps({'selection':choice,'validation':scores['validation_candidates'],'evaluations':evaluation,'external':external_result},indent=2))

if __name__=='__main__':main()
