# Recovery Lens · Presenter’s playbook

Siddharth Korampalli and Andrew Perlman · Track 1 · Hurricane preparedness and recovery

This is your speaking guide, separate from the app. Keep it beside the demo. Quoted paragraphs are words to say aloud. **PRESS** means an action; do not read the action instructions to the judges.

## 1. Prepare your screen

1. Open **Houston_Recovery_Lens.html**. Open this guide in a second window or on another device. If sharing your screen, share only the app window.
2. Refresh the app once. It starts on **Decision Room**, with **100** appointments, all four storm boxes checked, and **20** appointments per county.
3. Keep the browser near 100% zoom and scroll when necessary. Some controls and export buttons sit below the map. Avoid shrinking the page until labels are unreadable.
4. Decide who speaks and who clicks. Either person can do both; if presenting together, agree on the handoff before starting.
5. Keep the complete project ZIP available. Do not install software or retrain models during judging: the app already contains its data and works offline.
6. If motion distracts you, press **Pause animation** near the top of Decision Room. If it says **Reduced motion**, the device has already disabled effects.
7. Practice once, then refresh again. Clicking a tab preserves your settings; refreshing resets every screen.

**Your central idea:** “Can your recovery plan survive a different storm?” Lead with the Decision Room. The models and atlas support that decision.

## 2. The two-minute judging route

Use this route when time is limited. Do not try to show every feature. If running late, skip the damage clicks and close after the wind reveal.

### 0:00–0:20 · Establish the problem

**PRESS:** Start on **Decision Room**, budget **100**, all four scenarios checked. Point to the county map.

**SAY:** “We’re Siddharth and Andrew. Recovery Lens asks a practical question: can your recovery plan survive a different storm? Imagine a small recovery desk with 100 appointments. Historical storm footprints differ, so dividing those appointments equally is a choice we should test.”

### 0:20–0:40 · Compare a simple plan with the alternative

**PRESS:** Click **Equal**. Point to **Worst scenario alignment: 41.8%**. Click **✦ Stress-tested**, or **Apply stress-tested mix ↗**. The score becomes **59.2%**.

**SAY:** “Equal allocation overlaps the recorded county claim mix by 41.8 percent in its weakest historical scenario. The stress-tested mix raises that to 59.2 percent by balancing the weakest match across these storms. This measures historical distribution fit, not people helped.”

### 0:40–0:55 · Export the reasoning

**PRESS:** Scroll to **↓ Export decision receipt** and click once. Let it download; do not search for the file during the short pitch.

**SAY:** “We can question the assumptions and export the allocations, scenario scores, baseline comparisons, and limits together. The reasoning travels with the decision.”

### 0:55–1:20 · Reveal the wind-model result

**PRESS:** Click **Wind replay**. On a freshly refreshed app, the default is **Beryl**, **Harris**, **Jul 8, 12:00 AM**. Point to **30.6 mph**. Click **Reveal what happened →**. The recorded following-six-hour peak is **52.3 mph**.

**SAY:** “Our wind model uses current and earlier readings to estimate the following six-hour peak. Here is its estimate, and here is the recorded outcome. Across the Beryl development replay, average error is about 14 percent lower than persistence, but this example shows why severe peaks remain a weakness.”

### 1:20–1:45 · Show the separate damage experiment

**PRESS:** Click **Predict damage**. Keep **Hurricane Harvey (2017)**, **Harris**, **Zone X**, and coverage **250000**. Scroll to **Recorded depth code (0–10)**. Replace its value with **1**, then **4**.

**SAY:** “The damage experiment lets us vary recorded depth and coverage under historical storm conditions. We label depth as a code because the source leaves inches versus feet unresolved. This is a retrospective research experiment, not an advance damage forecast.”

### 1:45–2:00 · Close with the value and next step

**PRESS:** Click **Decision Room** to finish on the main screen. Do not refresh unless you want to reset the plan.

**SAY:** “Recovery Lens connects model evidence to a decision you can question, change, and document. Next we need verified recovery requests, resolved depth units, travel and urgency constraints, and issue-time forecast data before operational use.”

## 3. Detailed click-by-click rehearsal

These are extended-demo and follow-up instructions. They are not all part of the two-minute pitch.

### A. Decision Room · Compare the three strategies

**START:** Refresh. Leave budget **100** and all four scenarios checked.

**PRESS:** Click **Equal**. Scroll to **Compare the choices** if necessary.

**EXPECT:** Equal **41.8%**; Historical mix **37.3%**; Stress-tested **59.2%**. These figures apply to this exact 100-slot, four-scenario exercise.

**SAY:** “Pooling all historical claims is another simple strategy. The biggest storms dominate that pooled count, and it scores 37.3 percent on its weakest scenario here. The stress-tested objective instead balances the weakest match across the selected storms.”

**PRESS:** Click **✦ Stress-tested**.

**EXPECT:** Brazoria **5**, Fort Bend **1**, Galveston **36**, Harris **37**, Montgomery **21** appointments.

**SAY:** “This is the result of a deliberately limited objective. A county getting very few slots is a reason to inspect the assumptions, not a claim that it has little real need. An actual service plan needs minimum access, urgency, staffing, and uninsured demand constraints.”

**If asked about the method:** “A linear program maximizes the smallest distributional overlap across selected historical county claim mixes. It chooses continuous shares. Largest-remainder rounding converts those shares to whole appointments, and we recalculate the scores. We do not claim that the rounded integer plan is globally optimal.”

### B. Decision Room · Change the historical assumptions

**PRESS:** Uncheck **Nicholas**. Then click **✦ Stress-tested** again.

**EXPECT:** Three scenario bars remain; the plan and score can change. Unchecking a storm only re-evaluates the current plan. Pressing Stress-tested asks for a new allocation for that selection.

**SAY:** “Which historical footprints should the plan be robust against? Removing one changes the question, so we recalculate. This is a stress test against known scenarios, not proof of what the next storm will do.”

**RESET:** Check **Nicholas** again and click **Equal** or **✦ Stress-tested**. The app keeps at least one scenario selected.

### C. Decision Room · Edit the budget and a manual plan

**PRESS:** Replace **Appointment budget** with **150**. Click **Equal**. Each county now has **30** slots.

**PRESS:** Change Harris from **30** to **20**. There are now **10 unassigned** appointments. Change Brazoria from **30** to **40** to use those 10.

**EXPECT:** County labels, scenario bars, and the worst-score gauge update. The total cannot exceed 150. If the budget is already fully allocated, decrease one county before increasing another.

**SAY:** “We can compare a manual plan with the baselines and the optimized mix. Unassigned appointments count against alignment, and the controls prevent spending more than the budget.”

**RESET:** Enter budget **100**, confirm all four storms are checked, and click **Equal**. Refresh if you want every tab reset as well.

### D. Decision Room · Explain the score and open the receipt

**PRESS:** Open **What does ‘alignment’ mean? Read the math, assumptions, and limits.** near the bottom.

**SAY:** “For each county, we take the smaller of its appointment-budget share and its share of eligible historical claims. We add those overlaps, then report the weakest score across the selected storms. A perfect score would match the historical distribution exactly with the whole budget assigned.”

**PRESS:** Click **↓ Export decision receipt**. During the longer demo, open the downloaded **Recovery_Lens_Decision_Receipt.html**.

**EXPECT:** Budget, unassigned slots, county appointments, selected storm scores, baseline comparisons, method, limits, and an expandable **Complete calculation record**.

**SAY:** “This is a readable handoff that records what we assumed and why the plan scored as it did.”

Use the browser’s Print command inside the receipt to save it as a PDF if needed. Return to the app afterward.

### E. Wind replay · Reveal and move the cutoff

**PRESS:** Click **Wind replay**. Use **Beryl** and **Harris**. If you moved the cutoff earlier, refresh the app and reopen Wind replay to restore the exact default example.

**EXPECT:** **Jul 8, 12:00 AM**; estimate **30.6 mph**; carry-current-gust baseline **24.8 mph**. Future actuals are hidden.

**PRESS:** Click **Reveal what happened →**.

**EXPECT:** Recorded following-six-hour peak **52.3 mph**. The model is closer than persistence in this example, but both substantially underestimate the peak.

**SAY:** “Lower average error does not mean every estimate is reliable. The reveal makes this failure visible. We report the baseline and difficult windows rather than hiding them.”

**PRESS:** Use **Previous hour**, **Next hour**, or **Move the cutoff hour**. Moving the cutoff hides actuals again.

**SAY:** “The target is the maximum gust in the next six hourly observations. Inputs use the current hour and the previous six hours. Reanalysis reconstructs weather after an event, so this does not prove real-time warning performance.”

**OPTIONAL PRESS:** **Jump to 6h before recorded peak**. Explain that it uses the known historical peak for navigation; the model did not predict the peak’s timing. If a training-range warning appears, describe the labeled persistence fallback. Do not call it a safety guarantee.

### F. Predict damage · Change inputs and demonstrate bounds

**PRESS:** Click **Predict damage**. Select **Hurricane Harvey (2017)**, **Harris**, **Zone X**. Enter coverage **250000**. Enter depth code **1**, then **4**.

**EXPECT:** Approximately **$80,863** at code 1 and **$201,990** at code 4 in the current integrated model. If a future rebuild changes these values, read the actual screen rather than quoting old dollar figures.

**SAY:** “This shows how the fitted model responds to the recorded-depth scenario. Coverage is an insurance limit rather than a property-value measurement. The outcome is assessed building damage, not an insurance payout. The original depth units still need to be resolved.”

**PRESS:** Enter depth code **30**.

**EXPECT:** The message says it is using **10 recorded units**, the highest code in the exported grid. Click another field to show the value actually used.

**SAY:** “The interface does not extrapolate beyond its saved grid. It clamps unsupported inputs and explains which value it used.”

**PRESS:** Clear the coverage box. The app requests a number and retains the last valid estimate. Restore **250000**.

**PRESS:** Select **Hurricane Nicholas (2021)** and **Montgomery**.

**EXPECT:** **Not enough data**.

**SAY:** “The interface requires at least 50 retained depth-coded records in the selected storm, county, and flood-zone cohort. Sparse data should not look like a confident estimate.”

**RESET:** Harvey, Harris, Zone X, depth **3**, coverage **250000**.

### G. Predict damage · Explain the ZIP table honestly

**PRESS:** Point to **Harvey-weather replay on recorded claims** and scroll to its ZIP table.

**SAY:** “This replays Harvey weather on selected records using their recorded depths and coverage. The records can include repeated properties across storms. These totals are not predicted loss for every home and cannot tell an aid team whom to serve first.”

The interactive grid is fitted on all 54,000 retained records. It is different from the Beryl-excluded model used in the development check. Do not describe the ZIP table as a held-out forecast.

### H. Recovery atlas · Compare the observed record

**PRESS:** Click **Recovery atlas**. Select **Harris** and **All zones**. Click **Beryl**, then **Harvey**.

**EXPECT:** Harris median recorded assessed building damage is **$11,010** for Beryl and **$71,703** for Harvey under the displayed eligibility rules.

**SAY:** “These are observed amounts among eligible insured claims, not predictions for every home. The storms left different recorded recovery footprints, which motivates the Decision Room.”

The atlas contains **60,020** eligible records overall. The depth-coded experiment uses a smaller **54,000-record** subset. They are not contradictory counts.

**OPTIONAL PRESS:** Nicholas and Montgomery. Explain that zero eligible records in this dataset is not proof of no community need.

**RESET:** Beryl, Harris, All zones.

### I. Capacity plan · Show assumed requests and an impossible floor

**PRESS:** Click **Capacity plan**, then **Reset assumptions**. Change **Total appointment slots** from **100** to **150**.

**EXPECT:** Assigned slots change from 100 to 150 under the initial 200 assumed requests.

**SAY:** “This separate planner starts from assumed request counts. It tries a preferred county minimum and distributes remaining appointments according to unserved assumed requests. It never assigns a county more slots than its assumed requests.”

**PRESS:** Enter **3** total slots while leaving the preferred minimum at **5**. Point to the explicit county-floor shortfall warning.

**SAY:** “If a minimum is impossible, the interface exposes the conflict. A polished plan should not hide an impossible assumption.”

**PRESS:** Restore **150**. Optionally click **↓ Download capacity plan**. It exports assumptions, assignments, and unserved assumed requests. Click **Reset assumptions** afterward.

**Explain the difference:** Decision Room compares fixed-budget distributions with historical claim mixes. Capacity plan distributes appointments against assumed request counts and a preferred minimum. Neither establishes future need.

### J. Evidence · Show methods and failures

**PRESS:** Click **Evidence**. Show **Every storm and window is reported** for the wind experiment. Scroll to **Water-depth damage experiment** for the financial experiment.

**SAY:** “Wind and damage answer different questions, so we keep their evaluations separate and show the simple baselines. Their percentages must not be combined.”

If asked about the first damage model, open **Inspect the original financial model and claims-quality audit**.

**SAY:** “The earlier Ridge model collapsed to zero on Beryl and was rejected for use in the atlas. The added XGBoost experiment is separate and still has limitations. We keep the failed result available for inspection.”

## 4. Verified numbers and what they mean

| Result | Figure | Correct description |
| --- | --- | --- |
| Decision Room: 100 slots, four scenarios | Equal 41.8%; pooled history 37.3%; stress-tested 59.2% | Worst-scenario historical overlap, not accuracy or people served |
| Atlas | 60,020 records | Eligible insured single-family claim records |
| Damage experiment | 54,000 records | Eligibility plus retained raw depth codes 0–10 |
| Wind, Beryl replay | MAE 5.61 vs persistence 6.50 mph | About 13.8% lower error; development replay |
| Wind, three extra 2026 windows | MAE 3.53 vs persistence 3.68 mph | About 3.9% lower error; correlated observations |
| Wind, Beryl highest-gust tenth | MAE about 18.9 mph | Severe peaks remain difficult and tend to be underestimated |
| Damage, random 20% record check | MAE $45,440 vs median $56,263; R² 0.321 | About 19.2% lower MAE; records are not identified distinct homes |
| Damage, Beryl excluded from fitting | MAE $21,703 vs older-storm median $47,623 and zero $24,986; R² −0.374 | About 54.4% lower MAE versus that median; substantial weaknesses remain |
| Damage, Beryl mean | Estimate about $14,401 vs recorded about $24,986 | Do not claim it gets the overall level right |

**MAE** is average absolute error: the average size of the miss, in mph or dollars. A reduction in MAE is not “percent accurate.” **R²** uses squared error; negative Beryl R² means the model did worse than the Beryl test-set mean under that metric.

## 5. Prepared answers to likely judge questions

**What makes this different from a dashboard?**

“The main workflow is a decision rehearsal: a constraint, simple baselines, changeable scenarios, inspectable tradeoffs, and an export that carries the assumptions. Models and charts support the decision rather than being disconnected results.”

**Where is the AI?**

“Gradient boosting estimates the following-six-hour gust peak. XGBoost explores assessed building damage under recorded conditions. The appointment stress test is transparent linear optimization, not another machine-learning model.”

**Is it a live warning or operational allocation system?**

“No. Weather inputs are historical reanalysis. Real forecasting needs tests with data available at the original issue time. Actual recovery allocation needs verified local requests, urgency, and access constraints.”

**How did you avoid future information in the wind inputs?**

“Inputs are from the cutoff hour and the preceding six hours; the target starts in the next hour. Whole storms have separate roles. A perturbation check changed future weather and confirmed current features stayed unchanged. Reanalysis still differs from real-time data.”

**How was the wind model trained and checked?**

“Harvey and Imelda trained it; Nicholas selected the model. Beryl is a development replay. Three separately downloaded 2026 weather windows checked the frozen model after the candidate set and selection rule were fixed. Nearby points and overlapping windows are correlated, not thousands of independent storms.”

**Is Beryl an untouched final test?**

“No. It was already inspected during project development. The damage check excludes Beryl from fitting, but that does not make it a fresh final test. Independent validation is still needed.”

**Why use depth when its units are unresolved?**

“The contribution explores the signal in a recorded field using raw codes 0–10 under an explicit assumption. We do not treat those codes as verified feet or inches. Resolving source metadata is necessary before using it as a physical-depth tool.”

**Do the ZIP totals establish aid priority?**

“No. They aggregate replayed predictions over selected insured claim records, potentially including repeated properties, with no uninsured or population denominator. They are exploratory record summaries.”

**Why does the optimized plan give some counties so few slots?**

“The objective only measures historical overlap. Actual allocation needs minimum access, travel, staffing, urgency, and verified demand. The separate Capacity plan demonstrates a preferred minimum against assumed requests.”

**What failed?**

“The first financial model collapsed to zero on Beryl and was rejected. Severe wind peaks remain hard, and the added damage experiment still has negative Beryl R². We show these failures so the interface does not imply unsupported confidence.”

**What data did you use?**

“The organizer supplied flood-insurance claims, hourly storm weather, hurricane tracks, and county boundaries. Five counties have matched claims and weather. Four extra polygons lack matched data. The complete project retains the original extracts, cleaning rules, provenance, and model results, plus three additional weather windows.”

**Did you use AI assistance?**

“Yes. We used an AI coding assistant and can explain the data, baselines, model splits, planning assumptions, and limitations. We do not claim independent authorship or field validation.”

**What is your next concrete step?**

“Resolve depth units, obtain verified recovery requests and exposure data, add staffing and access constraints, evaluate issue-time forecasts and more independent severe storms, then test the workflow with a recovery organization.”

## 6. Recovery instructions if the demonstration goes wrong

| Situation | What to press | What to say |
| --- | --- | --- |
| Screen differs from the script | Refresh, then select the required tab | “I’ll reset the demo to its starting assumptions.” |
| Buttons are below the screen | Scroll down; keep text readable | Continue speaking while scrolling |
| No internet | Use the downloaded HTML | “The demo is self-contained and works offline.” |
| Not enough data appears | Return to Harvey, Harris, Zone X | “That is the sparse-cohort guard working.” |
| Number is out of range | Read the help message; click another field | “The app uses the nearest supported bound and explains it.” |
| A county cannot receive another slot | Reduce a different county or increase budget | “The plan cannot exceed the appointment budget.” |
| Download interrupts the flow | Return to the app; inspect it later | “The handoff has downloaded; we can inspect it after the pitch.” |
| Motion is distracting | Pause animation | “I’ll pause transitions so we can focus on the plan.” |
| You have 30 seconds left | Skip remaining tabs; use the close | “The key result is a plan we can compare, question, and document.” |

## 7. Keep the wording precise

- Say **historical alignment**, not **people helped** or **prediction accuracy**, for the Decision Room score.
- Say **lower average error than this baseline**, not **54% accurate** or **14% more accurate**.
- Say **claim records**, not **distinct homes**, when quoting counts and replay totals.
- Say **recorded depth code**, not **feet**, until the source units are resolved.
- Say **retrospective experiment** or **development replay**, not **real-time forecast** or **untouched final test**.
- Say **assumed appointment requests**, not **predicted demand**, in the Capacity plan.
- Do not invent user interviews, county partnerships, field validation, operational impact, or demonstrated service for uninsured residents.

## 8. Final rehearsal check

1. Can you explain Decision Room, Capacity plan, the wind model, and the damage experiment in one sentence each?
2. Can you compare Equal and Stress-tested, export a receipt, reveal Beryl, and change a damage input without searching?
3. Can you explain what 59.2% measures and why it is not a forecast?
4. Can you acknowledge ambiguous depth units and negative Beryl R² calmly?
5. Have you refreshed after practicing so the short-route examples match?

Finish with: **“A recovery decision you can question, change, and document.”**

## 9. Keeping the scope manageable

The app has six tabs, and nobody has to master all of them. Do not remove features before judging. Cutting tabs now risks breaking the demo and earns no points. Instead, split up what each person talks about.

| Person | Owns these tabs | Can point at, but does not need to explain in depth |
| --- | --- | --- |
| Siddharth | **Predict damage** (the XGBoost damage model, the estimator and the ZIP table) | Recovery atlas, since it uses the same claims |
| Andrew | **Decision Room**, **Wind replay**, **Capacity plan** | Evidence |
| Either | **Recovery atlas**, **Evidence** | These are supporting data and test results |

If a judge asks about a part the other person built, hand it over. This is a normal answer for a team:

**SAY:** “Andrew built that part, so he can take this one.” Or: “Siddharth built the damage model, so he can explain how it was tested.”

If a judge opens a tab nobody planned to show:

**SAY:** “That tab holds the supporting data and our test results. The main idea is the decision on the first screen.”

You only need three numbers memorized per person. Everything else is in Section 4 and in this glossary.

| Person | Number | What it means |
| --- | --- | --- |
| Siddharth | **19%** | The damage model's average miss is 19% smaller than the simple baseline's on claim records it never saw |
| Siddharth | **54%** | With Beryl left out of fitting, its average miss on Beryl was 54% smaller than the older-storm median guess |
| Siddharth | **Water depth** | The input that mattered most to the damage model |
| Andrew | **41.8% → 59.2%** | Worst-storm match for 100 appointments: equal split versus the stress-tested mix |
| Andrew | **13.8%** | Wind model's average miss on Beryl is 13.8% smaller than “the wind stays the same” |
| Andrew | **60,020** | Eligible single-family claim records behind the atlas |

## 10. Plain-English glossary

This section explains every term that appears in the app or in this guide, in plain words. The column on the right says how to describe it accurately, so it matches the wording rules in Section 7.

### Words about the data

| Term on screen | Plain English | Say it like this |
| --- | --- | --- |
| **Claim record** | One flood insurance claim from FEMA's National Flood Insurance Program: one house, one storm, and how much damage the inspector recorded | “claim records,” not “homes,” because the same house can appear in more than one storm |
| **Eligible claim records** | The claims we kept: single-family houses, one of the four storms, a known building damage amount, and coverage between $1 and $250,000 | “60,020 eligible claim records” |
| **54,000 records** (damage tab) | The eligible claims that also have a usable recorded water-depth value from 0 to 10 | “the claims with a recorded depth” |
| **Single-family / occupancy codes 1 and 11** | FEMA's codes for a regular house, as opposed to apartments or businesses | “single-family houses” |
| **Building damage** | Damage to the structure itself: walls, floors, wiring. Not furniture or belongings, and not the insurance payout | “assessed building damage” |
| **Coverage** | How much flood insurance the house had on the building, up to $250,000. It is an insurance limit, not the home's value | “building coverage” |
| **Recorded depth code** | How deep the water got inside the house, as written on the claim. The file does not state its unit; most values look like feet, but we have not verified that | “recorded depth,” and if asked: “the unit isn't stated, so we don't call it feet” |
| **Flood zone** | FEMA's map label for flood risk at the address | “flood zone” |
| **Zone X** | FEMA's “moderate to low risk” zone, where flood insurance is not required. About half of the eligible claims in these storms came from Zone X | “a share of claim records, not a flood probability” |
| **Zone AE** | FEMA's high-risk zone near rivers and bayous, where flood insurance is usually required for mortgages | “high-risk zone” |
| **County FIPS** | A five-digit government code for each county. We join tables on it so names and spelling do not cause mismatches | Only mention if asked about the data joins |
| **Supported counties** | Brazoria, Fort Bend, Galveston, Harris and Montgomery: the five with both claims and weather | “five counties with matched data” |
| **Gray / insufficient data counties** | Austin, Chambers, Liberty and Waller have map outlines but no matching claims or weather | “we show them as missing rather than guessing” |
| **Nominal USD** | Dollars as recorded at the time, with no adjustment for inflation | “not inflation-adjusted” |
| **Reanalysis / ERA5** | Historical weather rebuilt after the fact by combining past observations with a weather model. It is not what forecasters had in real time | “historical weather data” |
| **Open-Meteo** | The free weather service we downloaded the extra ERA5 weather from | “a public historical weather source” |
| **IBTrACS** | NOAA's database of hurricane tracks. The organizers supplied it | “hurricane track data” |
| **Rain total / peak gust** | The total rainfall and the strongest wind gust in a county during a storm's weather window | “the storm's rain and wind” |

### Words about testing models

| Term on screen | Plain English | Say it like this |
| --- | --- | --- |
| **Model** | A formula the computer learns from past examples so it can estimate new cases | |
| **Training / fitting** | The step where the model learns from examples | “the model learned from Harvey and Imelda” |
| **Baseline** | The simple guess the model has to beat, such as “always guess the typical damage” | “a simple baseline” |
| **Training median** | The middle damage value in the training data. Guessing it for every claim is the damage baseline | “the typical-damage guess” |
| **Always zero** | A second damage baseline that guesses $0 for every claim. It is surprisingly hard to beat on small storms where many claims are low | “it also beats guessing zero” |
| **Persistence** | The wind baseline: assume the strongest gust over the next six hours equals the gust right now | “assuming the wind stays the same” |
| **MAE (mean absolute error) / average error** | On average, how far off the estimate is, in dollars or mph. Lower is better | “average miss” |
| **“19% lower MAE” / “less error”** | The model's average miss is 19% smaller than the baseline's average miss | “19% less error than the baseline,” never “19% accurate” or “more accurate” |
| **R²** | A stricter score that punishes big misses heavily. 1 is perfect; 0 equals guessing the average of the test data; below 0 is worse than that | Only bring it up if asked |
| **Negative R² on Beryl** | On Beryl, the model made some large misses on individual claims, so under this strict score it did worse than guessing Beryl's own average | “it still has large misses on individual claims; more storms are the next step” |
| **Held out / holdout** | Data hidden from the model while it learned, used only for testing. This shows it is not just memorizing | “tested on records it never saw” |
| **Random 20% check** | We hid a random fifth of the claim records, trained on the rest, then tested on the hidden fifth | “a random holdout” |
| **Beryl excluded from fitting** | We trained without any Beryl claims, then tested on Beryl | “Beryl was left out of fitting.” Do not call it an untouched final test, since we looked at Beryl during development |
| **Development replay / development check** | A test we used while building the project. Useful, but not a sealed final exam | “a development check” |
| **Overfitting** | When a model memorizes its training examples and fails on new ones. Holdout tests check for it | |
| **Feature / input** | One piece of information the model uses, such as water depth or coverage | “input” |
| **Feature importance / strongest signal** | How much the model leaned on each input. Water depth was the biggest | “describes this model, not proof of cause” |
| **XGBoost** | A popular machine-learning method that builds many small decision trees, each one fixing the errors of the previous ones. Used for damage | “a gradient-boosted tree model” |
| **Gradient boosting / histogram gradient boosting** | The same idea of many small decision trees, used here for the wind model | “gradient boosting” |
| **Decision tree** | A flowchart of yes/no questions, like “is depth above 2?”, that ends in an estimate | |
| **Ridge regression** | A simpler straight-line model. One of the wind candidates, and the original rejected damage model | “a simpler linear model” |
| **Monotone constraint** | A rule we gave the damage model: more water or more coverage can never lower the estimate | “deeper water never lowers the estimate” |
| **Tweedie objective** | A setting for data with many small values and a few huge ones, like damage dollars | Only if asked |
| **Interpolation grid** | The demo stores model estimates at many depth and coverage points and blends the four nearest ones, so it runs instantly offline | “precomputed estimates, blended between points” |
| **Cohort / fewer than 50 records suppressed** | A county, storm and zone combination. If it has too few claims, the app refuses to estimate instead of guessing | “that's the sparse-data guard working” |
| **Clamped to the grid** | If you type a number outside the supported range, the app uses the nearest allowed value and says so | “it uses the nearest supported value and tells you” |

### Words about the wind replay

| Term on screen | Plain English | Say it like this |
| --- | --- | --- |
| **Cutoff hour** | The pretend “now.” The model only sees weather from this hour and the six before it | “the model can't see the future” |
| **Next six hours / t+1 to t+6** | The six hours after the cutoff, whose strongest gust the model estimates | |
| **Estimated peak gust** | The model's guess for the strongest gust in the next six hours | |
| **Reveal what happened** | Shows the real recorded gusts, so you can compare | |
| **Training / selection / development roles** | Harvey and Imelda taught the model; Nicholas picked the best candidate; Beryl checked it | “each storm had one job” |
| **Additional 2026 windows** | Three extra weather periods we downloaded after the model was frozen, as an outside check | “extra checks after the model was locked” |
| **Frozen model** | The model was locked before the extra checks, so they could not influence it | |
| **Residual / reference band** | The shaded band showing the typical miss size seen on Nicholas. Not a guarantee on another storm | “a typical-error band, not a guarantee” |
| **Persistence fallback** | When the current gust is stronger than anything in training, the app shows the persistence guess instead of trusting the model | “it falls back to the simple guess in extreme wind” |
| **Severe peaks / highest-gust tenth** | The strongest 10% of Beryl's wind windows, where the model missed by about 18.9 mph and guessed too low | “strong peaks remain hard” |
| **Correlated windows** | Overlapping hours and nearby counties are similar, so thousands of rows are not thousands of separate storms | “the row count overstates independent evidence” |
| **Causality / look-ahead check** | An automated test that changes future weather and confirms the model's inputs do not change | “we tested that no future data leaks in” |

### Words about the Decision Room and Capacity plan

| Term on screen | Plain English | Say it like this |
| --- | --- | --- |
| **Appointment budget** | How many recovery appointments the coordinator can hand out, 100 by default | |
| **Allocation / mix** | How those appointments are split across the five counties | “the plan” |
| **Historical stress scenarios** | Each past storm is a “what if the next storm looks like this one” test | “past storms as test cases” |
| **Historical fit / alignment / overlap** | How closely the plan's county split matches where that storm's claims actually came from, from 0% to 100% | “historical alignment,” never “accuracy” or “people helped” |
| **Worst scenario** | The past storm where the plan matched worst. The score shown is this one | “its weakest storm” |
| **Equal** | Give every county the same number of appointments | |
| **Historical mix / pooled history** | Split appointments by all four storms' claims added together | |
| **Stress-tested mix / maximin** | The split that makes the worst storm's match as high as possible | “the plan that holds up best in its worst storm” |
| **Linear programming / optimization** | A math method that finds the best split under the rules. It is not machine learning | “transparent optimization” |
| **Largest remainder rounding** | Turns fractional shares like 23.6 into whole appointments that still add up to the budget | “rounds to whole appointments fairly” |
| **Receipt / export** | A downloadable page recording the plan, the assumptions and the scores | “a record of the decision” |
| **Assumed appointment requests** | In Capacity plan, your own guess of how many people ask for help in each county. Not predicted need | “assumed requests” |
| **Preferred minimum / floor** | Every county gets at least this many appointments if the budget allows | |
| **Shortfall / unserved** | Requests that no appointment covers, or a floor the budget cannot meet | |

## 11. Simple one-line answers when a term comes up

**SAY:** “MAE is just our average miss. Lower means better.”

**SAY:** “The baseline is the simple guess we had to beat.”

**SAY:** “Held out means the model never saw that data while it learned.”

**SAY:** “Persistence means assuming the wind stays the way it is now.”

**SAY:** “Historical alignment is how well the plan matches where claims really came from in past storms. It is not people helped.”

**SAY:** “Recorded depth is the water depth written on the claim. The unit isn't stated, so we don't call it feet.”

**SAY:** “Negative R² means it still makes some big misses on individual claims in a new storm. More storms are our next step.”
