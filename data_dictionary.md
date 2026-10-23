# Hurricane Recovery Model (HRM) Data Dictionary

The original field descriptions are supplied by the organizer's Challenge 1 brief. Derived variables and analysis rules are documented below. The project preserves all four source files unchanged.

## Source files

| File | Rows | Purpose |
| --- | ---: | --- |
| houston_fema_flood_claims_2017_present.csv | 80,547 | Claim-level assessed building damage and policy context |
| houston_major_storms_hourly_weather.csv | 3,960 | Hourly weather for four storms and five county reference points |
| tx_gulf_hurricane_tracks_1980_present.csv | 2,784 | Historical track context; not used as claim labels or model features |
| greater_houston_counties.geojson | 9 features | County polygons for the map |

## Claims fields used

| Original field | Interpretation | Analysis rule |
| --- | --- | --- |
| floodEvent | Named flood event | Map Harvey, Imelda, Nicholas, and Beryl to normalized storm names; exclude unmatched events |
| countyCode | County FIPS | Read as a string and map five supported county codes |
| occupancyType | Occupancy coding | Keep codes 1 and 11 as single-family residential structures |
| buildingDamageAmount | Assessed structural damage, nominal USD | Target and historical outcome; keep known nonnegative amounts |
| totalBuildingInsuranceCoverage | Building insurance coverage, USD | Keep $1–$250,000; use as numeric model input |
| ratedFloodZone | Recorded rated flood-zone designation | Preserve X and AE as categories; group other and unknown values as OTHER |
| yearOfLoss | Loss year | Check chronological separation; never use as a model input |

Other supplied fields are dateOfLoss, state, reportedZipCode, latitude, longitude, waterDepth, netBuildingPaymentAmount, amountPaidOnBuildingClaim, contentsDamageAmount, netContentsPaymentAmount, and amountPaidOnContentsClaim. These remain in the source but are excluded from prediction features. Redacted coordinates are not property locations and are not exposed in the demo. Water-depth interpretation and units are not sufficiently resolved for this analysis; the original atlas and rejected Ridge experiment exclude it. The separate added XGBoost experiment retains raw codes 0–10 under an explicitly unverified units assumption; it is not a physical-depth forecast.

## Weather fields used

| Original field | Interpretation | Derived variable |
| --- | --- | --- |
| storm_event | Supplied storm identifier | Normalized storm name |
| location | County and reference town | County name before the parenthesis |
| time | Hourly local timestamp in the supplied extract | Weather-window boundaries and six-hour chart blocks |
| precipitation | Hourly precipitation in inches, according to the brief | rain_total: sum over the supplied window |
| wind_gusts_10m | Hourly modeled gust, mph, according to the brief | gust_max: maximum over the supplied window |
| surface_pressure | Surface pressure, hPa | pressure_min: contextual summary only |
| soil_moisture_0_to_7cm | Volumetric topsoil moisture | soil_mean: contextual summary only |

Other original weather fields are temperature_2m, rain, wind_speed_10m, wind_speed_100m, wind_direction_10m, latitude, and longitude. These are retained but not used by the selected feature set. The brief identifies the source as Open-Meteo ERA5 historical reanalysis. Actual raw extraction parameters were not supplied, so source units are taken from the organizer's brief rather than independently rederived.

## County and storm joins

| County | FIPS |
| --- | --- |
| Brazoria | 48039 |
| Fort Bend | 48157 |
| Galveston | 48167 |
| Harris | 48201 |
| Montgomery | 48339 |

| Claim event | Weather event | Analysis name |
| --- | --- | --- |
| Hurricane Harvey | Hurricane_Harvey_2017 | Harvey |
| Tropical Storm Imelda | Tropical_Storm_Imelda_2019 | Imelda |
| Tropical Storm Nicholas | Hurricane_Nicholas_2021 | Nicholas |
| Hurricane Beryl | Hurricane_Beryl_2024 | Beryl |

Names are explicitly mapped because the source labels differ. Weather is aggregated before joining claims using one row per storm and county. Join cardinality is asserted as many-to-one.

## Display definitions

- **Eligible claims:** records satisfying the event, county, occupancy, known damage, and coverage rules. This is not a count of all homes or a verified count of distinct properties.
- **Median damage:** the middle assessed damage among the displayed eligible records.
- **Recorded building damage:** the sum of assessed structural damage in eligible supplied records; not a community-wide loss estimate.
- **Middle 50 percent:** the 25th through 75th percentiles of observed claim damage; not a prediction confidence interval.
- **Zone X claim share:** X records divided by all eligible records for the selected storm; not a flood probability.
- **Rain in supplied window:** sum of hourly precipitation at the county reference location, using the full supplied storm window. Windows differ in duration.
- **Peak modeled gust:** maximum supplied gust at the same reference point and window.
- **MAE:** mean absolute error in nominal dollars per eligible claim.
- **R²:** performance relative to variation in the evaluation target; negative values indicate worse squared error than predicting that evaluation sample's own mean.

Damage summaries with fewer than twenty eligible records are suppressed in the demo. Historical sums and means are retained in analysis artifacts for reproducibility. The deployed or offline interface contains aggregates, with no individual claim coordinates.


## Six hour wind model additions

`train_wind_model.py` generates a row at each eligible hourly cutoff after six hours of history and before six hours of future labels. The target is the maximum `wind_gusts_10m` value in t+1 through t+6. Each input timestamp is at or before t. No storm identity, future weather, financial outcome, or whole-storm rainfall total enters this model.

| Feature | Meaning | Unit |
| --- | --- | --- |
| gust | Current 10 m gust | mph |
| wind | Current 10 m sustained wind | mph |
| wind100 | Current 100 m sustained wind | mph |
| pressure | Current surface pressure | hPa |
| pressure_change_3h | Current pressure minus pressure at t−3 | hPa |
| gust_change_3h | Current gust minus gust at t−3 | mph |
| gust_max_6h | Maximum gust from t−6 through t | mph |
| gust_mean_6h | Mean gust from t−6 through t | mph |
| rain_3h | Sum of precipitation at t−2, t−1, and t | inches |
| lat and lon | County reference coordinates | degrees |
| direction_sin and direction_cos | Circular encoding of current wind direction | unitless |

The original weather yields 3,720 causal samples: 2,160 training, 660 selection, and 900 Beryl development replay samples. Added weather yields 4,260 evaluation samples. Target windows overlap and county points are nearby; rows are correlated.

The separate additional-weather folder contains three raw multi-location JSON responses, a merged 4,440-row CSV, and a request/attribution manifest. Dates and names are derived from the organizer's 2026 tracks. Models, mph/inch units, and timezone are explicit in the requests. These are ERA5 weather-window checks; local storm impacts and attribution were not independently verified.

`wind_demo_data.json` contains rounded model estimates and reference outcomes for replay. `wind_hindcast_predictions.csv` retains full-precision numeric outputs. Model metrics use full precision. The UI hides future recorded gusts until revealed and does not use hidden future values to scale the unrevealed chart. Current gusts above the training maximum trigger a labeled persistence fallback; reported raw-model scores are not replaced with fallback scores.

The shaded wind reference band adds the 10th and 90th percentiles of Nicholas signed residuals. It is descriptive and has no coverage guarantee. It is not applied to fallback estimates.

## Appointment capacity scenario additions

- Assumed request values and available capacity are nonnegative whole numbers entered by the user.
- A preferred county floor is attempted, then unfilled capacity is distributed proportionally to remaining assumed demand using integer largest remainders.
- Allocations never exceed assumed requests; total assigned slots equal the smaller of capacity and total assumed requests.
- Exports retain scenario source, total capacity, preferred floor, assumed requests, allocations, and unserved requests.
- Historical claim-share scenarios are explicitly hypothetical. They do not estimate population, uninsured need, or actual appointment demand.

## Added damage experiment

`predict_model.py` uses `waterDepth`, log building insurance coverage, county, recorded zone, and full-storm rainfall/gust. Random claim-record and Beryl-excluded development checks are separate. `predict_data.json` includes county/storm/zone cohort sizes; the UI requires at least 50 retained records. The all-record fitted grid uses depths 0–10 and coverage $25,000–$250,000. Numeric inputs are clamped before bilinear interpolation. ZIP and county replay totals reuse each eligible claim record with Harvey weather and its recorded depth/coverage; records are not unique homes.
