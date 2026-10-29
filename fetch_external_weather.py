"""Download extra validation windows derived from organizer 2026 track dates.
Original organizer files remain unchanged. No claim data is transmitted.
"""
from pathlib import Path
import urllib.request, urllib.parse, json, hashlib
import pandas as pd

ROOT=Path(__file__).resolve().parent
w=pd.read_csv(ROOT/'data/houston_major_storms_hourly_weather.csv')
locations=w[['location','latitude','longitude']].drop_duplicates().reset_index(drop=True)
tracks=pd.read_csv(ROOT/'data/tx_gulf_hurricane_tracks_1980_present.csv')
chosen=tracks[tracks.SEASON==2026]
out=ROOT/'data/external_validation';out.mkdir(exist_ok=True)
variables=['temperature_2m','precipitation','rain','surface_pressure','wind_speed_10m','wind_speed_100m','wind_direction_10m','wind_gusts_10m','soil_moisture_0_to_7cm']
rows=[];manifest=[]
for (name,sid),g in chosen.groupby(['NAME','SID']):
    start=(pd.to_datetime(g.ISO_TIME).min()-pd.Timedelta(days=3)).strftime('%Y-%m-%d')
    end=(pd.to_datetime(g.ISO_TIME).max()+pd.Timedelta(days=3)).strftime('%Y-%m-%d')
    params={'latitude':','.join(map(str,locations.latitude)),'longitude':','.join(map(str,locations.longitude)),
            'start_date':start,'end_date':end,'hourly':','.join(variables),'models':'era5',
            'wind_speed_unit':'mph','precipitation_unit':'inch','timezone':'America/Chicago'}
    url='https://archive-api.open-meteo.com/v1/archive?'+urllib.parse.urlencode(params)
    target=out/(name.lower()+'_2026_raw.json')
    if not target.exists():
        with urllib.request.urlopen(url,timeout=90) as response:target.write_bytes(response.read())
    raw=target.read_bytes();payload=json.loads(raw)
    if not isinstance(payload,list) or len(payload)!=len(locations):raise ValueError('Unexpected location response')
    for i,p in enumerate(payload):
        assert p['hourly_units']['wind_gusts_10m']=='mp/h'
        assert p['hourly_units']['precipitation']=='inch'
        frame=pd.DataFrame(p['hourly'])
        frame['storm_event']=name.title()+'_2026_External'
        frame['location']=locations.iloc[i].location
        frame['latitude']=locations.iloc[i].latitude
        frame['longitude']=locations.iloc[i].longitude
        rows.append(frame)
    manifest.append({'name':name,'sid':sid,'start_date':start,'end_date':end,'url':url,
                     'retrieved_date':'2026-10-23','model':'ERA5','sha256':hashlib.sha256(raw).hexdigest(),
                     'attribution':'Open-Meteo historical weather API; Copernicus ERA5 reanalysis; CC BY 4.0',
                     'note':'Window selected from the supplied track file. Storm attribution and local impact not independently verified.'})
    print('Retrieved',name,start,end,flush=True)
pd.concat(rows).to_csv(out/'additional_storm_windows_2026.csv',index=False)
(out/'manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print('Additional hourly records:',sum(len(r) for r in rows),flush=True)
