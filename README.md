# Houston Recovery Lens

Track 1 — Hurricane Preparedness and Recovery · Code[Coogs] AI Hackathon · October 23, 2026

**Team:** Siddharth Korampalli and Andrew Perlman

A working historical recovery explorer for Greater Houston. Compare assessed building damage among eligible single-family flood insurance claims after Harvey, Imelda, Nicholas, and Beryl. Explore counties, filter recorded flood zones, inspect rainfall, and export a county comparison.

## Start here

1. Open **OPEN_DEMO.html**, choose **Download raw file**, and open the downloaded file in your browser. It is a complete offline demo and needs no installation or API key.
2. Read **PRESENTATION_GUIDE.md** for the two-minute pitch, demo clicks, and judge questions.
3. Download **Houston_Recovery_Lens.zip** and extract it for the complete project: all four original organizer datasets, source code, executed notebook, fitted model, quality audit, metrics, and aggregate results.

This repository is private. Present from your signed-in account or the downloaded demo. A repository URL is not a hosted app URL.

## What the analysis found

The supplied claims extract contains 80,547 records. The analysis selects 60,020 eligible single-family records across four storms and five counties, retaining known nonnegative assessed building damage and building coverage of $1–$250,000. The weather extract has 3,960 hourly observations, summarized into 20 county/storm combinations. County and storm joins are checked for lost or duplicated claim rows.

Historical claim damage is not flood probability, total community loss, or an insurance payout. Amounts are nominal USD. Historical weather comes from one reference point per county and storm windows differ in duration. The demo suppresses damage summaries with fewer than 20 eligible claims.

## Model experiment and decision

We trained on Harvey and Imelda, selected among a baseline and two candidate models using Nicholas, and checked Beryl separately. Ridge regression had the lowest Nicholas validation error, but every Beryl prediction clipped to zero. Its $19,724 average absolute error matched an always-zero diagnostic, and its test R² was −0.626.

**That first model was rejected.** Its evidence screen reports the failure rather than presenting it as useful prediction.

## Final model: damage estimator

The first model left out water depth, the strongest signal for flood damage. The final model (`predict_model.py`) is an XGBoost regressor that uses water depth, building coverage, flood zone, county, and the storm's total rain and peak gust. It trains on 54,000 eligible single-family claims with a known water depth of 0–10 ft.

Three choices keep its estimates sensible:

- **Depth is limited to 0–10 ft.** Past 10 ft the depth field mixes in inches (counts spike at 12, 24, and 36) and a 99 placeholder.
- **More water or more coverage never lowers the estimate.** XGBoost's monotone constraints enforce this. Without them, 8 ft of water could show less damage than 4 ft.
- **A Tweedie objective keeps predictions above $0.** With plain squared error and the constraints, 31% of Beryl predictions dropped to $0.

| Test | Model error | Baseline error | Improvement |
| --- | ---: | ---: | ---: |
| 20% of homes held out | $45,440 | $56,263 | 19% |
| Beryl held out entirely | $21,700 | $47,623 | 54% |

On Beryl the model also beats always predicting $0 ($24,986) and predicts $0 for none of the homes, compared with 100% for the first model. Its typical Beryl prediction ($11,823) is in the range of the actual typical damage ($15,232). Ranking individual homes in a brand-new storm is still rough (R² −0.37), so the demo presents it as an estimate of damage levels, not an exact figure per home. The estimator shows no number for a storm and county with fewer than 50 claims.

The demo's **Predict damage** page uses this model for a one-home estimator and a "Harvey hit again" scenario that ranks zip codes by predicted total damage.

## Files for review

- `OPEN_DEMO.html` — one-file browser demo with all aggregate data embedded
- `analysis.ipynb` — notebook with six executed code cells and plain-language explanations
- `train_model.py` — reproducible cleaning, validated joins, training, selection, and testing of the first model
- `predict_model.py` — trains and tests the final damage estimator and writes `demo/predict.js`
- `demo/` — source for the browser demo; `python build_demo.py` combines it into `OPEN_DEMO.html`
- `results/predict_metrics.json` — test results for the final model
- `requirements.txt` — the Python package versions used
- `PRESENTATION_GUIDE.md` — pitch and judge questions
- `data_dictionary.md` — field meanings, filters, joins, and derived values
- `Houston_Recovery_Lens.zip` — the complete folder structure, original data, and results

To rerun the analysis, extract the complete project ZIP, open its `HoustonStormReady` folder, install its `requirements.txt` in Python 3.12, and run `python train_model.py`. To retrain the final model, copy `predict_model.py` into that folder and run `python predict_model.py`. The top-level source files here are provided for easy inspection; the full dataset and results are in the project ZIP. Do not treat the archived failed model as suitable for planning.

## Sources

[Organizer dataset folder](https://drive.google.com/drive/folders/1doFLc1xXvUDTBvoDg0wmebjGIaaCCy0a) · [Challenge 1 brief](https://docs.google.com/document/d/1n9FrZHastJOO1jy2f6X_PbYukTuAnrWgbJugyTK3lkw/edit)

The organizer's brief attributes claims to OpenFEMA NFIP, weather to Open-Meteo ERA5, tracks to NOAA IBTrACS, and county boundaries to the U.S. Census Bureau. Original file hashes and the quality audit are included in the project ZIP. Upstream extraction procedures were not independently reproduced. Hurricane tracks were inspected for context and are not used as extra damage labels.

AI coding assistance was used to build the project. The presentation explains the data, model testing, and limitations openly.
