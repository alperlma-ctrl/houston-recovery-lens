# Decision Room: the distinctive workflow

Allocate a fixed appointment budget, stress-test it against four historical county claim distributions, compare equal and pooled-history baselines, and export a decision receipt. Default 100-slot worst-scenario overlap: equal 41.8%, pooled history 37.3%, rounded maximin 59.2%. These scores describe fit to selected historical mixes, not future demand, service outcomes, or independent model validation. The separate wind replay supplies the machine-learning experiment.

# Houston Recovery Lens

## Problem and user

A local recovery coordinator needs to understand two different time horizons: changing storm conditions over the next few hours and the historical scale of recovery afterward. Recovery Lens combines a testable wind-replay experiment, a county damage atlas, and a transparent appointment-capacity scenario.

## The finished demo

1. **Wind replay:** move the historical cutoff hour, inspect the estimated peak gust over the next six hours, compare with a persistence baseline, and reveal the recorded outcome.
2. **Recovery atlas:** compare observed assessed building damage among eligible insured claims across four storms and five counties. Inspect flood-zone cohorts, rainfall context, and sample support.
3. **Capacity plan:** edit assumed appointment requests and available slots, review an integer allocation, and export the assumptions and result together.

The complete demo works offline in a single HTML file and requires no paid API, installation, or account connection.

## Data and method

The organizer supplied 80,547 flood claim records, 3,960 hourly weather rows, hurricane tracks, and county boundaries. The claims analysis retains 60,020 eligible single-family records with known nonnegative building damage and building coverage of $1–$250,000. Weather-to-claim joins are validated as many-to-one by county and storm. Missing damage is never converted to zero.

The wind target is the maximum gust in hours **t+1 through t+6**. Thirteen inputs use the current hour and preceding six hours: gusts, wind, pressure trends, recent rainfall, direction, and reference coordinates. Whole storms remain separated:

- Fit on Harvey and Imelda: **2,160** hourly cutoff windows.
- Select the candidate on Nicholas: **660** windows.
- Replay Beryl: **900** windows, reported as a development check.
- Check the frozen model on three additional 2026 weather windows: **4,260** windows. These were downloaded after the candidate set and Nicholas selection rule were fixed.

Four candidates were compared: persistence, ridge regression, residual gradient boosting, and gradient boosting. Gradient boosting had the lowest Nicholas average error.

## Measured results

| Evaluation | Model average error | Persistence average error | Relative reduction |
| --- | ---: | ---: | ---: |
| Nicholas selection | 4.65 mph | 4.83 mph | 3.8% |
| Beryl development replay | 5.61 mph | 6.50 mph | 13.8% |
| Additional 2026 windows combined | 3.53 mph | 3.68 mph | 3.9% |

The additional windows each had lower average error than persistence. Gains are modest, and overlapping time windows and nearby county points are correlated. No statistical significance claim is made.

## Visible limits and safeguards

- This is a **retrospective reanalysis hindcast**, not an operational warning system or a test of forecasts issued before the storm.
- Beryl's highest-gust tenth of windows had **18.9 mph** average error and substantial underestimation. Current gusts beyond the training range trigger a labeled persistence fallback rather than a raw tree estimate, but this cannot detect every future extreme. Reported scores remain raw-model scores.
- Beryl was already inspected during project development. It is not described as an untouched final test.
- The three added 2026 names and dates come from the supplied track file; local impact and storm attribution were not independently verified. Their weather source and query parameters are recorded separately.
- Claims exclude uninsured or unreported losses. Their share in a flood zone is not a probability that a home floods. Damage summaries with fewer than 20 eligible records are suppressed in the demo.
- Capacity values are editable **assumed appointment requests**. The allocation is a transparent arithmetic scenario; it does not predict need or route emergency crews. Historical claim mix is optional and explicitly labeled as a scenario input.
- An earlier financial severity model failed by predicting zero for all Beryl claims. It remains documented and excluded from planning estimates.

## Verification and reproducibility

The project contains the original extracts, separately attributed additional weather, file hashes, timestamp and join checks, executed notebook, model objects, all evaluation outputs, and the complete browser source. A future-perturbation check verifies that changing future gust, pressure, and rain cannot change the current feature row. Allocation checks cover conservation, whole slots, demand caps, deterministic results, and edge cases.

## Next step toward real use

Evaluate archived issue-time forecasts on more independent severe storms, validate against suitable observations, and replace demand assumptions with locally verified requests and exposure information. Review the workflow with a recovery organization before operational use.

## Attribution

[Organizer folder](https://drive.google.com/drive/folders/1doFLc1xXvUDTBvoDg0wmebjGIaaCCy0a) and [dataset brief](https://docs.google.com/document/d/1n9FrZHastJOO1jy2f6X_PbYukTuAnrWgbJugyTK3lkw/edit). Additional weather: [Open-Meteo Historical Weather API](https://open-meteo.com/en/docs/historical-weather-api), Copernicus ERA5, CC BY 4.0. AI coding assistance was used and is disclosed in the presentation.
