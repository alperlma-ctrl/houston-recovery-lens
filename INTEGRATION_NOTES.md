# Pull request 1 integration

Integrated Siddharx's water-depth XGBoost experiment, Predict damage inputs, ZIP and county replay, build helper, dependency and team credits into the newer Decision Room project. The initial Decision Room, removed radar, remaining motion, dark number controls, wind replay, atlas and appointment planner remain.

Resolved overlapping app, generated HTML, requirements and documentation changes. The PR branch was based on an older project version. Separate `predict-ui.js` from the navigation and existing Decision Room modules. Keep the earlier rejected Ridge model clearly labeled.

Reproduced results: 54,000 retained depth-coded records; random-record MAE $45,440 versus training median $56,263; Beryl-excluded development MAE $21,703 versus median $47,623 and zero $24,986; Beryl R² -0.374. Small numerical differences from the branch output are recorded in the new metrics. The original PR metrics are preserved separately.

Corrected interpretation: the organizer's depth units remain ambiguous, records are not verified unique homes, full-storm weather makes the estimator retrospective, and the Harvey-weather ZIP replay cannot determine aid priority. Beryl was already inspected during project development. The all-record grid is not the held-out model. Cohorts require 50 retained depth-coded records to display an estimate.

Validation: 60 cohort combinations and 180 interpolation points, numerical bounds and blank input, sparse cohort suppression, 315 Decision Room allocation cases, browser controls and evidence, and byte-identical standalone rebuild from the complete demo sources.
