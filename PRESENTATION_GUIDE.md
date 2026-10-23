# Houston Recovery Lens Presentation Guide

## Two-minute walkthrough

**0:00 — The constraint.** “A recovery desk has 100 appointments. Dividing them equally feels reasonable, but Houston's storm footprints differ.” Show the Decision Room with all four scenarios selected.

**0:25 — The reveal.** “Equal allocation has 41.8% alignment in its weakest historical scenario. Pooling claim counts scores 37.3%; the largest storms dominate.” Click **Apply stress-tested mix**. “Balancing the weakest scenario raises the overlap to 59.2%.”

**0:55 — The tradeoff.** Uncheck Nicholas and apply the mix again. Show that different assumptions produce a different plan. “This is historical claim-mix overlap, not predicted demand or people helped.” Export the decision receipt, which records allocations, source counts, scenarios, baseline comparisons, formula, and limits.

**1:20 — The AI evidence.** Open Wind replay. Reveal the default Beryl outcome. “Our separate six-hour gust model uses current and past weather only. Its Beryl development replay error is about 14% below persistence, but severe peaks remain difficult.”

**1:45 — The close.** “Recovery Lens connects AI evidence to a decision you can question, change, and document. Before operational use, we need verified requests, urgency and travel constraints, and issue-time forecasts.”

## Explain the distinction

The allocation is transparent linear optimization; the wind replay is machine learning. Do not call the overlap score prediction accuracy or claim that a higher score means more people served. The linear program optimizes continuous shares, then the demo rounds to whole slots and recalculates scores. It does not claim the rounded plan is globally optimal among integer plans. Low allocations can be an artifact of the limited objective; actual service plans need additional constraints. Selected scenarios are known during optimization and evaluation.

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
- Introduce the team: Siddharth Korampalli and Andrew Perlman. No user validation has been invented.
- The supplied packet says to be ready by **4:30 p.m. Central on October 23, 2026** for a live demo and short pitch. Follow any updated organizer instructions.
- The GitHub repository is private and stores the project. It is not a hosted app URL. Present the local demo or your signed-in repository.

## Damage-model walkthrough

Open **Predict damage**. Keep Harvey, Harris and Zone X, then change the water depth from 1 to 4. Say: “Claims take weeks to arrive. Our XGBoost model estimates a home’s damage from water depth, coverage, flood zone and the storm’s weather. It has 19% less error than the baseline on homes it never saw, and more than 50% less on Beryl, a storm it never saw.” Point to the zip-code table: “If Harvey hit again, this is where recovery teams should look first.” If asked about limits: “It gets a new storm’s damage level right but is rough on single homes. More storms are our next step.”
