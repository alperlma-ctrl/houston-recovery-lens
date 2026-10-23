# Houston Recovery Lens Presentation Guide

## Your two minute pitch

“A storm has two timelines: the next few hours of wind, and the months of recovery afterward. We built Recovery Lens to connect a short-term weather experiment with historical recovery evidence and a practical planning scenario.

“First, this is a replay of Beryl. At the selected hour, our model uses only current and earlier weather readings to estimate the peak gust over the following six hours. I can move the cutoff, compare with a simple persistence baseline, and reveal the recorded outcome.

“We trained on Harvey and Imelda and selected the model using Nicholas. On the Beryl development replay, average error was about five point six miles per hour, about fourteen percent lower than persistence. We then checked the frozen model on three additional 2026 weather windows. Average error was about three point five miles per hour, roughly four percent lower than persistence.

“These are retrospective results. Severe Beryl peaks remain difficult. When the current gust exceeds the training range, the demo labels a persistence fallback instead of trusting the tree model to extrapolate.

“Next, the recovery atlas compares observed building damage among sixty thousand eligible insured claim records. For Harris County, we can compare Beryl with Harvey and inspect a flood-zone cohort. These claims do not represent every home or every uninsured loss.

“Finally, the capacity planner turns editable assumed appointment requests into a whole-slot allocation. I can change capacity, review the county split, and export the assumptions with the plan.

“The demo works offline and the analysis is reproducible. Next we would test actual issue-time forecasts, more severe storms, and locally verified recovery requests before operational use.”

## Practice these clicks once

1. Open **OPEN_DEMO.html**. It starts on **Wind replay**, **Beryl**, **Harris**, July 8 at midnight.
2. Point to the estimated six-hour peak and the carry-current-gust baseline. Click **Reveal what happened**. Explain that this is a reconstructed historical record, and a model can be closer than a baseline while still having a large error.
3. Move the cutoff with the slider or arrow buttons. **Jump to 6h before recorded peak** is an explicitly historical navigation shortcut; it is not a prediction of when the peak occurs.
4. Open **Evidence**. Point to the separate training, selection, development replay, and added-window checks. Acknowledge the severe-peak weakness.
5. Open **Recovery atlas**. On Harris, compare **Beryl** and **Harvey**. Eligible Harris median building damage is $11,010 for Beryl and $71,703 for Harvey.
6. Open **Capacity plan**. Change the total appointment slots from 100 to 150. The assigned slots change while respecting the assumed request counts. Click **Download capacity plan**.
7. Finish with the next step: issue-time forecasting data and locally verified requests.

## Answers judges may ask for

**What is the AI doing?**

Gradient boosting combines small decision trees to learn patterns in recent wind, pressure, rainfall, direction, and reference location. Its target is the maximum gust in the following six hourly observations.

**What is persistence?**

A simple baseline that assumes the future peak equals the current gust. A more complex model needs to show a useful improvement over it.

**How did you avoid looking ahead?**

Every input is from the current hour or the preceding six hours. The target starts at the following hour. We separate whole storms rather than randomly mixing adjacent hours. We also changed future gust, pressure, and rain values in a test and confirmed that the current feature row did not change.

**Are these live forecasts?**

No. This is a retrospective hindcast using reanalysis, which reconstructs historical weather. The project has not demonstrated operational performance using forecasts or measurements available at the original issue time.

**Is Beryl an untouched final test?**

No. Beryl was already inspected during development, so we call it a development replay. The extra 2026 windows were downloaded after the model candidates and Nicholas selection rule were fixed, and their results were not used for tuning.

**What are the additional 2026 windows?**

Dates and names came from the organizer's tracks. We separately downloaded ERA5 weather for those windows at the same five county reference coordinates. They are labeled Arthur, Bertha, and Edouard 2026 windows. Their local impact and storm attribution were not independently verified, so we describe them as weather-window checks.

**What happens during severe wind?**

Beryl's highest-gust tenth of windows had about 18.9 mph average error and low estimates. The interface flags current gusts beyond the training maximum and uses a labeled persistence fallback there. That check cannot detect every future severe peak, and it is not a safety clearance. Reported model scores are for the raw fitted model, not an inflated claim for the interface fallback.

**Is the shaded band a confidence interval?**

It is the middle eighty percent of signed Nicholas validation errors added to the model estimate. It is a descriptive reference band with no guaranteed coverage on another storm. It is not applied to the persistence fallback.

**What does the recovery atlas measure?**

Assessed structural damage among selected single-family flood insurance claim records with known damage and coverage of $1–$250,000. It does not estimate flood probability, every household's damage, or insurance payout. Values are nominal dollars without inflation adjustment.

**What does the capacity planner optimize?**

It allocates appointment slots under user-specified capacity and request assumptions. It attempts a county floor, then distributes remaining slots proportionally using largest remainders. It is transparent arithmetic, not a learned prediction of need. Insurance records omit uninsured residents, so real demand must be verified separately.

**What happened to the earlier financial model?**

It predicted zero for all Beryl claims and was rejected. Its failed results remain visible in the evidence section. The atlas uses observed damage summaries instead.

**What makes this different from a map?**

It connects a cutoff-by-cutoff model experiment, a historical recovery atlas, and an exportable capacity plan. Judges can inspect the model's inputs, reveal outcomes, compare a baseline, change planning assumptions, and review the source.

**Did you use AI assistance?**

“Yes. I used an AI coding assistant to help build the project. I can explain the data, baseline, model split, replay results, planning assumptions, and limitations.” Do not claim that you wrote everything independently or that real users validated it if they have not.

## Before judging

- Practice the demo once and keep the standalone HTML file available offline.
- Keep the pitch close to two minutes. Use your own words rather than reading every metric.
- Introduce yourself and any actual teammates. No team names or user validation have been invented.
- The supplied packet says to be ready by **4:30 p.m. Central on October 23, 2026** for a live demo and short pitch. Follow any updated organizer instructions.
- The GitHub repository is private and stores the project. It is not a hosted app URL. Present the local demo or your signed-in repository.
