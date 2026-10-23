"""Download hourly weather for the extra flood events in the organizer's claims file.

Run from the extracted project folder: python fetch_damage_weather.py
Writes data/external_damage/extra_storm_weather.csv and manifest.json.
Each window runs from four days before to two days after the busiest claim date.
"""
from pathlib import Path
import hashlib
import json
import urllib.parse
import urllib.request

import pandas as pd

ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'data' / 'external_damage'
OUT.mkdir(parents=True, exist_ok=True)
EVENTS = {
    'Texas Spring Flooding': 'Spring_Flooding_2024',
    'Tropical Storm Beta': 'Tropical_Storm_Beta_2020',
    '2026-06-Arthur-TS': 'Tropical_Storm_Arthur_2026',
    'June TS Alberto': 'Tropical_Storm_Alberto_2024',
    'Fall 2018 Texas Flooding': 'Fall_Flooding_2018',
    'Hurricane Laura': 'Hurricane_Laura_2020',
}
VARIABLES = ['precipitation', 'rain', 'surface_pressure', 'wind_speed_10m', 'wind_gusts_10m', 'soil_moisture_0_to_7cm']

weather = pd.read_csv(ROOT / 'data' / 'houston_major_storms_hourly_weather.csv')
locations = weather[['location', 'latitude', 'longitude']].drop_duplicates().reset_index(drop=True)
claims = pd.read_csv(ROOT / 'data' / 'houston_fema_flood_claims_2017_present.csv')
claims['date'] = pd.to_datetime(claims.dateOfLoss).dt.tz_localize(None).dt.normalize()

rows, manifest = [], []
for event, name in EVENTS.items():
    peak = claims[claims.floodEvent == event].date.value_counts().idxmax()
    start = (peak - pd.Timedelta(days=4)).strftime('%Y-%m-%d')
    end = (peak + pd.Timedelta(days=2)).strftime('%Y-%m-%d')
    params = {'latitude': ','.join(map(str, locations.latitude)), 'longitude': ','.join(map(str, locations.longitude)),
              'start_date': start, 'end_date': end, 'hourly': ','.join(VARIABLES), 'models': 'era5',
              'wind_speed_unit': 'mph', 'precipitation_unit': 'inch', 'timezone': 'America/Chicago'}
    url = 'https://archive-api.open-meteo.com/v1/archive?' + urllib.parse.urlencode(params)
    target = OUT / f'{name.lower()}_raw.json'
    if not target.exists():
        with urllib.request.urlopen(url, timeout=90) as response:
            target.write_bytes(response.read())
    raw = target.read_bytes()
    payload = json.loads(raw)
    assert isinstance(payload, list) and len(payload) == len(locations), 'unexpected response'
    for i, place in enumerate(payload):
        assert place['hourly_units']['wind_gusts_10m'] == 'mp/h' and place['hourly_units']['precipitation'] == 'inch'
        frame = pd.DataFrame(place['hourly'])
        frame['storm_event'] = name
        frame['location'] = locations.location[i]
        frame['latitude'] = locations.latitude[i]
        frame['longitude'] = locations.longitude[i]
        rows.append(frame)
    manifest.append({'claim_event': event, 'weather_event': name, 'peak_claim_date': peak.strftime('%Y-%m-%d'),
                     'start_date': start, 'end_date': end, 'url': url, 'retrieved_date': '2026-10-23',
                     'sha256': hashlib.sha256(raw).hexdigest(),
                     'attribution': 'Open-Meteo historical weather API; Copernicus ERA5 reanalysis; CC BY 4.0'})
    print('Retrieved', name, start, end, flush=True)

pd.concat(rows).to_csv(OUT / 'extra_storm_weather.csv', index=False)
(OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
print('Hourly rows:', sum(len(r) for r in rows))
