# Houston Recovery Lens Presentation Guide

You are presenting a working historical data explorer with an honest model experiment. You do not need to explain every line of code. Focus on what the data means, what the demo does, and what testing revealed.

## Two minute pitch

“Houston's storms can leave very different recovery needs. We built Houston Recovery Lens to help people understand the building damage recorded after major storms.

“We used the organizer's flood insurance claims, hourly weather, and county boundaries. We cleaned the records and joined them by county and storm. Our final analysis covers about sixty thousand eligible single-family claim records across four storms and five counties.

“Here is Harris County after Beryl. The middle recorded building damage amount was about eleven thousand dollars per eligible claim. If I switch to Harvey, it was about seventy-two thousand dollars. These are historical comparisons among selected insured claims. They are not estimates for every home in Houston.

“The map lets us compare counties, and the flood-zone filter lets us examine more specific groups. The rainfall chart adds context. We can export the county comparison as a spreadsheet-friendly file.

“We also tested machine learning. We trained on Harvey and Imelda, selected a model using Nicholas, and held Beryl out for testing. The Beryl test exposed a failure: every prediction had collapsed to zero. A lower error against one weak baseline did not make the model useful, so we rejected it for planning use.

“The result is a working recovery explorer that keeps historical evidence separate from unreliable predictions. Our next steps would be more independent storms, property and exposure information, and a fresh storm test before offering forecasts.”

## Click by click demo

1. Open the demo, preferably on a laptop. Select **Explore storms**.
2. Start on **Beryl**, **Harris**, **All zones**. The observed median is **$11,010**, based on **866** eligible Harris records.
3. Click **Harvey**. Harris's observed median becomes **$71,703**, based on **38,920** eligible records.
4. Return to **Beryl**, then select **Zone X**. Explain that this is a subset of recorded claims, not a measure of flooding probability.
5. Click another county on the map. The county detail, rainfall chart, and comparison bars update together.
6. Click **Export county comparison** to demonstrate a usable output. It exports all-zone comparisons for that county across all four storms.
7. Open **Model evidence**. Point to the train/select/test roles and the rejected model result.

## Likely questions

**What problem does this solve?**

It makes historical recovery evidence easier to inspect and explain. A recovery team can compare the damage recorded after different storms and identify questions for outreach and further investigation.

**Where is the AI or data science?**

The project cleans and joins datasets, creates geographic and temporal summaries, fits two candidate prediction models, compares them against a baseline, and evaluates a later storm. Data analysis is the foundation of the final tool.

**Why is the model not used?**

All Beryl predictions were clipped to zero. Its average error matched an always-zero diagnostic. It did not pass a useful generalization check.

**Can this tell me my home is safe or what my insurer will pay?**

No. It summarizes historical assessed structural damage among selected insured claims. The data does not cover all properties, and damage is different from payout.

**What is the median?**

The middle amount. Half the eligible records have lower damage and half have higher damage.

**What is a baseline?**

A simple comparison method. Here, one baseline always predicts the middle damage amount from the training records. We also checked what always predicting zero would do.

**What is mean absolute error?**

The average size of a prediction's dollar error, counting overestimates and underestimates as positive differences.

**Why is the weather not a forecast?**

The supplied weather reconstructs what happened over the whole historical storm window. We did not have forecasts issued before each storm.

**Why are some county results hidden?**

The demo suppresses damage summaries with fewer than twenty eligible records. Four boundary counties have no matched claims and weather at all.

**Does Zone X mean no flood risk?**

No. It is a recorded zone label. We can see claims in that category, but the fraction of claims is not the chance that a home will flood.

**What would make the predictive model stronger?**

More independent storms, consistent property and exposure data, forecast-time inputs, stronger baselines, and another storm that has not been used for model development.

**Did you use AI assistance?**

“Yes. I used an AI coding assistant to help build the analysis and demo. I reviewed the results and can explain the data, testing, and limitations.”

## Before judging

- Open the demo in advance and keep the offline copy available.
- Practice the clicks once. Read the explanation of the failed model.
- Introduce the team: Siddharth Korampalli and Andrew Perlman.
- Present the historical explorer as the finished product and the prediction model as an evaluated experiment.
- Be ready by **4:30 p.m. Central on October 23, 2026**, according to the supplied packet. Follow any updated organizer instructions.

The packet describes a live demo and short pitch; it does not require an upload. The private hosted link is for your signed-in presentation. Use the offline copy if connectivity is unreliable.
