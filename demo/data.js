window.RECOVERY_DATA={
  "title": "Houston Recovery Lens",
  "metrics": {
    "selected_model": "Linear ridge regression",
    "selection_metric": "Nicholas 2021 mean absolute error",
    "train_storms": [
      "Harvey 2017",
      "Imelda 2019"
    ],
    "validation_storm": "Nicholas 2021",
    "test_storm": "Beryl 2024",
    "train_n": 58229,
    "validation_n": 169,
    "test_n": 1622,
    "baseline_prediction": 68509.0,
    "validation_candidates": [
      {
        "model": "Training median baseline",
        "mae": 58345.18343195266,
        "median_absolute_error": 64238.0,
        "r2": -15.037640512203026
      },
      {
        "model": "Shallow decision tree",
        "mae": 33864.91049514341,
        "median_absolute_error": 36071.72810532202,
        "r2": -4.997588500240277
      },
      {
        "model": "Linear ridge regression",
        "mae": 10559.600239784966,
        "median_absolute_error": 4840.0,
        "r2": -0.4409796481685968
      }
    ],
    "test_baseline": {
      "mae": 51050.07829839704,
      "median_absolute_error": 60366.0,
      "r2": -3.831803490386765
    },
    "test_model": {
      "mae": 19724.149815043158,
      "median_absolute_error": 8452.0,
      "r2": -0.6263684330112018
    },
    "test_mae_improvement_pct": 61.363135038203275,
    "validation_residual_10th": 0.0,
    "validation_residual_90th": 28054.000000000004,
    "test_residual_band_coverage": 0.7404438964241677,
    "test_zero_prediction_share": 1.0,
    "zero_prediction_baseline_mae": 19724.149815043158,
    "model_status": "REJECTED FOR PLANNING USE",
    "rejection_reason": "All Beryl predictions clipped to zero. The apparent median-baseline improvement does not demonstrate useful severity prediction. The demo uses observed historical aggregates only.",
    "features": [
      "rain_total",
      "gust_max",
      "coverage",
      "county",
      "zone"
    ],
    "scope": "Assessed building damage in nominal USD among selected single-family insured claims with known damage and coverage of $1-$250,000.",
    "training_ranges": {
      "rain_total": [
        5.495,
        23.783
      ],
      "gust_max": [
        36.0,
        61.7
      ],
      "coverage": [
        300.0,
        250000.0
      ]
    }
  },
  "audit": {
    "raw_claims": 80547,
    "selected_single_family_claims": 66992,
    "missing_damage_in_selected": 6941,
    "negative_damage_in_selected": 0,
    "out_of_scope_coverage_in_selected": 426,
    "model_claims": 60020,
    "weather_rows": 3960,
    "weather_groups": 20,
    "exact_duplicate_full_claim_rows": 0,
    "notes": [
      "No unique claim ID supplied; distinct properties and repeat claims cannot be verified.",
      "Missing damage is excluded, never replaced with zero.",
      "County FIPS standardized as five-character strings.",
      "Only five counties have claims and weather; four other boundary counties have no model support.",
      "Recorded claims are not the population of homes and do not measure flood probability."
    ]
  },
  "counties": {
    "48201": "Harris",
    "48157": "Fort Bend",
    "48339": "Montgomery",
    "48039": "Brazoria",
    "48167": "Galveston"
  },
  "storm_years": {
    "Harvey": 2017,
    "Imelda": 2019,
    "Nicholas": 2021,
    "Beryl": 2024
  },
  "history": [
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "rain_total": 6.206,
      "gust_max": 76.7,
      "pressure_min": 989.9,
      "soil_mean": 0.43281770833333333,
      "hours": 192,
      "weather_start": "2024-07-05",
      "weather_end": "2024-07-12 23:00:00",
      "year": 2024,
      "claims": 211,
      "median_damage": 8200.0,
      "mean_damage": 17214.83886255924,
      "total_recorded_damage": 3632331.0,
      "zone_x_claims": 60,
      "zone_x_share": 0.2843601895734597
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "rain_total": 6.607,
      "gust_max": 76.7,
      "pressure_min": 979.7,
      "soil_mean": 0.43149479166666665,
      "hours": 192,
      "weather_start": "2024-07-05",
      "weather_end": "2024-07-12 23:00:00",
      "year": 2024,
      "claims": 75,
      "median_damage": 13753.0,
      "mean_damage": 29387.106666666667,
      "total_recorded_damage": 2204033.0,
      "zone_x_claims": 71,
      "zone_x_share": 0.9466666666666667
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "rain_total": 5.2,
      "gust_max": 86.8,
      "pressure_min": 999.3,
      "soil_mean": 0.0,
      "hours": 192,
      "weather_start": "2024-07-05",
      "weather_end": "2024-07-12 23:00:00",
      "year": 2024,
      "claims": 450,
      "median_damage": 5818.0,
      "mean_damage": 14470.664444444445,
      "total_recorded_damage": 6511799.0,
      "zone_x_claims": 24,
      "zone_x_share": 0.05333333333333334
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "rain_total": 5.748,
      "gust_max": 78.7,
      "pressure_min": 988.8,
      "soil_mean": 0.42626562500000004,
      "hours": 192,
      "weather_start": "2024-07-05",
      "weather_end": "2024-07-12 23:00:00",
      "year": 2024,
      "claims": 866,
      "median_damage": 11009.5,
      "mean_damage": 22273.741339491917,
      "total_recorded_damage": 19289060.0,
      "zone_x_claims": 483,
      "zone_x_share": 0.5577367205542725
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "rain_total": 5.409,
      "gust_max": 67.1,
      "pressure_min": 982.8,
      "soil_mean": 0.30959375,
      "hours": 192,
      "weather_start": "2024-07-05",
      "weather_end": "2024-07-12 23:00:00",
      "year": 2024,
      "claims": 20,
      "median_damage": 7588.5,
      "mean_damage": 17767.4,
      "total_recorded_damage": 355348.0,
      "zone_x_claims": 18,
      "zone_x_share": 0.9
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "rain_total": 17.479,
      "gust_max": 51.0,
      "pressure_min": 999.8,
      "soil_mean": 0.44193750000000004,
      "hours": 288,
      "weather_start": "2017-08-23",
      "weather_end": "2017-09-03 23:00:00",
      "year": 2017,
      "claims": 4151,
      "median_damage": 64335.0,
      "mean_damage": 69802.1235846784,
      "total_recorded_damage": 289748615.0,
      "zone_x_claims": 1205,
      "zone_x_share": 0.2902914960250542
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "rain_total": 16.972,
      "gust_max": 51.0,
      "pressure_min": 998.8,
      "soil_mean": 0.45063888888888887,
      "hours": 288,
      "weather_start": "2017-08-23",
      "weather_end": "2017-09-03 23:00:00",
      "year": 2017,
      "claims": 2697,
      "median_damage": 85983.0,
      "mean_damage": 95646.9021134594,
      "total_recorded_damage": 257959695.0,
      "zone_x_claims": 1930,
      "zone_x_share": 0.7156099369670004
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "rain_total": 20.313,
      "gust_max": 61.7,
      "pressure_min": 996.9,
      "soil_mean": 0.2350590277777778,
      "hours": 288,
      "weather_start": "2017-08-23",
      "weather_end": "2017-09-03 23:00:00",
      "year": 2017,
      "claims": 6942,
      "median_damage": 65761.5,
      "mean_damage": 77790.60746182657,
      "total_recorded_damage": 540022397.0,
      "zone_x_claims": 3331,
      "zone_x_share": 0.4798329011812158
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "rain_total": 21.658,
      "gust_max": 57.0,
      "pressure_min": 1000.4,
      "soil_mean": 0.4634652777777778,
      "hours": 288,
      "weather_start": "2017-08-23",
      "weather_end": "2017-09-03 23:00:00",
      "year": 2017,
      "claims": 38920,
      "median_damage": 71702.5,
      "mean_damage": 93289.29614594039,
      "total_recorded_damage": 3630819406.0,
      "zone_x_claims": 19195,
      "zone_x_share": 0.493191161356629
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "rain_total": 23.783,
      "gust_max": 53.9,
      "pressure_min": 996.4,
      "soil_mean": 0.33500694444444445,
      "hours": 288,
      "weather_start": "2017-08-23",
      "weather_end": "2017-09-03 23:00:00",
      "year": 2017,
      "claims": 1991,
      "median_damage": 84474.0,
      "mean_damage": 96496.14665996986,
      "total_recorded_damage": 192123828.0,
      "zone_x_claims": 891,
      "zone_x_share": 0.44751381215469616
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "rain_total": 6.785,
      "gust_max": 36.0,
      "pressure_min": 1007.0,
      "soil_mean": 0.4559404761904762,
      "hours": 168,
      "weather_start": "2019-09-16",
      "weather_end": "2019-09-22 23:00:00",
      "year": 2019,
      "claims": 23,
      "median_damage": 11750.0,
      "mean_damage": 19396.17391304348,
      "total_recorded_damage": 446112.0,
      "zone_x_claims": 14,
      "zone_x_share": 0.6086956521739131
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "rain_total": 5.495,
      "gust_max": 39.6,
      "pressure_min": 1003.9,
      "soil_mean": 0.45160119047619046,
      "hours": 168,
      "weather_start": "2019-09-16",
      "weather_end": "2019-09-22 23:00:00",
      "year": 2019,
      "claims": 13,
      "median_damage": 10914.0,
      "mean_damage": 27436.846153846152,
      "total_recorded_damage": 356679.0,
      "zone_x_claims": 13,
      "zone_x_share": 1.0
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "rain_total": 10.016,
      "gust_max": 42.7,
      "pressure_min": 1009.0,
      "soil_mean": 0.2658214285714286,
      "hours": 168,
      "weather_start": "2019-09-16",
      "weather_end": "2019-09-22 23:00:00",
      "year": 2019,
      "claims": 27,
      "median_damage": 5589.0,
      "mean_damage": 11593.481481481482,
      "total_recorded_damage": 313024.0,
      "zone_x_claims": 6,
      "zone_x_share": 0.2222222222222222
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "rain_total": 13.088,
      "gust_max": 49.7,
      "pressure_min": 1003.5,
      "soil_mean": 0.4610178571428571,
      "hours": 168,
      "weather_start": "2019-09-16",
      "weather_end": "2019-09-22 23:00:00",
      "year": 2019,
      "claims": 2722,
      "median_damage": 37832.0,
      "mean_damage": 42758.111682586336,
      "total_recorded_damage": 116387580.0,
      "zone_x_claims": 1665,
      "zone_x_share": 0.6116825863335783
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "rain_total": 6.296,
      "gust_max": 36.0,
      "pressure_min": 1000.8,
      "soil_mean": 0.3398809523809524,
      "hours": 168,
      "weather_start": "2019-09-16",
      "weather_end": "2019-09-22 23:00:00",
      "year": 2019,
      "claims": 743,
      "median_damage": 52188.0,
      "mean_damage": 59616.189771197845,
      "total_recorded_damage": 44294829.0,
      "zone_x_claims": 454,
      "zone_x_share": 0.6110363391655451
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "rain_total": 4.086,
      "gust_max": 61.7,
      "pressure_min": 1000.0,
      "soil_mean": 0.4297013888888889,
      "hours": 144,
      "weather_start": "2021-09-12",
      "weather_end": "2021-09-17 23:00:00",
      "year": 2021,
      "claims": 52,
      "median_damage": 4377.5,
      "mean_damage": 10084.5,
      "total_recorded_damage": 524394.0,
      "zone_x_claims": 10,
      "zone_x_share": 0.19230769230769232
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "rain_total": 3.497,
      "gust_max": 57.7,
      "pressure_min": 998.1,
      "soil_mean": 0.4303680555555556,
      "hours": 144,
      "weather_start": "2021-09-12",
      "weather_end": "2021-09-17 23:00:00",
      "year": 2021,
      "claims": 2,
      "median_damage": 0.0,
      "mean_damage": 0.0,
      "total_recorded_damage": 0.0,
      "zone_x_claims": 2,
      "zone_x_share": 1.0
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "rain_total": 5.153,
      "gust_max": 67.1,
      "pressure_min": 1003.7,
      "soil_mean": 0.22915972222222225,
      "hours": 144,
      "weather_start": "2021-09-12",
      "weather_end": "2021-09-17 23:00:00",
      "year": 2021,
      "claims": 86,
      "median_damage": 5429.0,
      "mean_damage": 11673.89534883721,
      "total_recorded_damage": 1003955.0,
      "zone_x_claims": 13,
      "zone_x_share": 0.1511627906976744
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "rain_total": 5.195,
      "gust_max": 51.9,
      "pressure_min": 1001.3,
      "soil_mean": 0.4397986111111111,
      "hours": 144,
      "weather_start": "2021-09-12",
      "weather_end": "2021-09-17 23:00:00",
      "year": 2021,
      "claims": 29,
      "median_damage": 2463.0,
      "mean_damage": 8946.344827586207,
      "total_recorded_damage": 259444.0,
      "zone_x_claims": 14,
      "zone_x_share": 0.4827586206896552
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "rain_total": 2.967,
      "gust_max": 43.8,
      "pressure_min": 998.3,
      "soil_mean": 0.27472222222222226,
      "hours": 144,
      "weather_start": "2021-09-12",
      "weather_end": "2021-09-17 23:00:00",
      "year": 2021,
      "claims": 0,
      "median_damage": null,
      "mean_damage": null,
      "total_recorded_damage": 0.0,
      "zone_x_claims": 0,
      "zone_x_share": null
    }
  ],
  "cohorts": [
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "zone": "AE",
      "claims": 65,
      "median": 9977.0,
      "q25": 2603.0,
      "q75": 33442.0,
      "total": 1432867.0
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "zone": "OTHER",
      "claims": 86,
      "median": 8118.5,
      "q25": 3356.0,
      "q75": 17546.75,
      "total": 1043605.0
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "zone": "X",
      "claims": 60,
      "median": 8208.0,
      "q25": 0.0,
      "q75": 26959.0,
      "total": 1155859.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "zone": "X",
      "claims": 71,
      "median": 11560.0,
      "q25": 76.0,
      "q75": 58672.0,
      "total": 2096769.0
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "zone": "AE",
      "claims": 292,
      "median": 6846.0,
      "q25": 2693.25,
      "q75": 25816.75,
      "total": 4659755.0
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "zone": "OTHER",
      "claims": 134,
      "median": 4426.0,
      "q25": 2146.5,
      "q75": 12193.25,
      "total": 1473790.0
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "zone": "X",
      "claims": 24,
      "median": 6697.0,
      "q25": 941.25,
      "q75": 20084.75,
      "total": 378254.0
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "zone": "AE",
      "claims": 331,
      "median": 11832.0,
      "q25": 1920.5,
      "q75": 36590.5,
      "total": 7262089.0
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "zone": "OTHER",
      "claims": 52,
      "median": 15928.0,
      "q25": 5107.5,
      "q75": 46922.5,
      "total": 1588560.0
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "zone": "X",
      "claims": 483,
      "median": 8970.0,
      "q25": 318.0,
      "q75": 35225.0,
      "total": 10438411.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "zone": "AE",
      "claims": 2538,
      "median": 70919.5,
      "q25": 27261.75,
      "q75": 104251.5,
      "total": 186024472.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "zone": "OTHER",
      "claims": 408,
      "median": 49149.0,
      "q25": 14805.5,
      "q75": 81813.0,
      "total": 23212581.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "zone": "X",
      "claims": 1205,
      "median": 57957.0,
      "q25": 19339.0,
      "q75": 83791.0,
      "total": 80511562.0
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "zone": "AE",
      "claims": 563,
      "median": 87824.0,
      "q25": 36900.5,
      "q75": 129788.0,
      "total": 53642977.0
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "zone": "OTHER",
      "claims": 204,
      "median": 46479.0,
      "q25": 33741.0,
      "q75": 84866.0,
      "total": 15252205.0
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "zone": "X",
      "claims": 1930,
      "median": 92367.5,
      "q25": 26254.25,
      "q75": 143565.25,
      "total": 189064513.0
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "zone": "AE",
      "claims": 2215,
      "median": 79063.0,
      "q25": 28569.0,
      "q75": 133656.5,
      "total": 203620946.0
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "zone": "OTHER",
      "claims": 1396,
      "median": 65068.5,
      "q25": 24741.0,
      "q75": 107589.5,
      "total": 106001044.0
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "zone": "X",
      "claims": 3331,
      "median": 60555.0,
      "q25": 24878.0,
      "q75": 95718.5,
      "total": 230400407.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "zone": "AE",
      "claims": 18735,
      "median": 76435.0,
      "q25": 43270.0,
      "q75": 131985.0,
      "total": 1818044991.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "zone": "OTHER",
      "claims": 990,
      "median": 55763.5,
      "q25": 36185.5,
      "q75": 86988.75,
      "total": 69701758.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "zone": "X",
      "claims": 19195,
      "median": 67803.0,
      "q25": 30209.0,
      "q75": 124784.5,
      "total": 1743072657.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "zone": "AE",
      "claims": 976,
      "median": 104918.0,
      "q25": 63870.25,
      "q75": 150965.25,
      "total": 111916325.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "zone": "OTHER",
      "claims": 124,
      "median": 52479.5,
      "q25": 31488.75,
      "q75": 86489.0,
      "total": 7848375.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "zone": "X",
      "claims": 891,
      "median": 68927.0,
      "q25": 33446.0,
      "q75": 107395.0,
      "total": 72359128.0
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "zone": "AE",
      "claims": 919,
      "median": 42756.0,
      "q25": 20642.0,
      "q75": 64803.5,
      "total": 43127372.0
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "zone": "OTHER",
      "claims": 138,
      "median": 32215.0,
      "q25": 12754.0,
      "q75": 50869.75,
      "total": 4674364.0
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "zone": "X",
      "claims": 1665,
      "median": 35201.0,
      "q25": 12878.0,
      "q75": 58019.0,
      "total": 68585844.0
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "zone": "AE",
      "claims": 196,
      "median": 67441.0,
      "q25": 34204.25,
      "q75": 94824.0,
      "total": 13282122.0
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "zone": "OTHER",
      "claims": 93,
      "median": 34552.0,
      "q25": 15147.0,
      "q75": 56777.0,
      "total": 3536797.0
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "zone": "X",
      "claims": 454,
      "median": 51523.5,
      "q25": 29312.0,
      "q75": 78401.75,
      "total": 27475910.0
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "zone": "OTHER",
      "claims": 27,
      "median": 5996.0,
      "q25": 2367.5,
      "q75": 10887.0,
      "total": 255255.0
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "zone": "AE",
      "claims": 52,
      "median": 6578.0,
      "q25": 3123.0,
      "q75": 19204.75,
      "total": 703776.0
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "zone": "OTHER",
      "claims": 21,
      "median": 3544.0,
      "q25": 1431.0,
      "q75": 10249.0,
      "total": 174255.0
    }
  ],
  "hourly": [
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-05 00:00:00",
      "rain": 0.0,
      "gust": 10.1
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-05 06:00:00",
      "rain": 0.0,
      "gust": 13.0
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-05 12:00:00",
      "rain": 0.028,
      "gust": 18.1
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-05 18:00:00",
      "rain": 0.0,
      "gust": 18.6
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-06 00:00:00",
      "rain": 0.0,
      "gust": 11.0
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-06 06:00:00",
      "rain": 0.008,
      "gust": 14.5
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-06 12:00:00",
      "rain": 0.208,
      "gust": 25.9
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-06 18:00:00",
      "rain": 0.0,
      "gust": 15.9
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-07 00:00:00",
      "rain": 0.0,
      "gust": 12.8
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-07 06:00:00",
      "rain": 0.095,
      "gust": 27.5
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-07 12:00:00",
      "rain": 0.338,
      "gust": 34.4
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-07 18:00:00",
      "rain": 0.338,
      "gust": 36.2
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-08 00:00:00",
      "rain": 2.843,
      "gust": 72.0
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-08 06:00:00",
      "rain": 1.344,
      "gust": 76.7
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-08 12:00:00",
      "rain": 0.008,
      "gust": 47.9
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-08 18:00:00",
      "rain": 0.0,
      "gust": 17.9
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-09 00:00:00",
      "rain": 0.0,
      "gust": 10.3
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-09 06:00:00",
      "rain": 0.024,
      "gust": 19.5
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-09 12:00:00",
      "rain": 0.228,
      "gust": 22.6
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-09 18:00:00",
      "rain": 0.016,
      "gust": 13.6
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-10 00:00:00",
      "rain": 0.0,
      "gust": 7.6
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-10 06:00:00",
      "rain": 0.0,
      "gust": 12.5
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-10 12:00:00",
      "rain": 0.30200000000000005,
      "gust": 22.4
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-10 18:00:00",
      "rain": 0.008,
      "gust": 9.4
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-11 00:00:00",
      "rain": 0.0,
      "gust": 4.3
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-11 06:00:00",
      "rain": 0.043,
      "gust": 9.4
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-11 12:00:00",
      "rain": 0.197,
      "gust": 12.5
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-11 18:00:00",
      "rain": 0.008,
      "gust": 10.7
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-12 00:00:00",
      "rain": 0.028,
      "gust": 8.9
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-12 06:00:00",
      "rain": 0.0,
      "gust": 10.7
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-12 12:00:00",
      "rain": 0.142,
      "gust": 14.5
    },
    {
      "storm": "Beryl",
      "county": "Brazoria",
      "time": "2024-07-12 18:00:00",
      "rain": 0.0,
      "gust": 6.7
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-05 00:00:00",
      "rain": 0.0,
      "gust": 13.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-05 06:00:00",
      "rain": 0.0,
      "gust": 13.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-05 12:00:00",
      "rain": 0.0,
      "gust": 12.3
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-05 18:00:00",
      "rain": 0.0,
      "gust": 17.4
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-06 00:00:00",
      "rain": 0.0,
      "gust": 15.4
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-06 06:00:00",
      "rain": 0.043,
      "gust": 11.9
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-06 12:00:00",
      "rain": 0.788,
      "gust": 23.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-06 18:00:00",
      "rain": 0.036000000000000004,
      "gust": 11.2
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-07 00:00:00",
      "rain": 0.0,
      "gust": 9.4
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-07 06:00:00",
      "rain": 0.036000000000000004,
      "gust": 24.8
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-07 12:00:00",
      "rain": 0.5870000000000001,
      "gust": 32.2
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-07 18:00:00",
      "rain": 0.072,
      "gust": 32.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-08 00:00:00",
      "rain": 1.7439999999999998,
      "gust": 60.2
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-08 06:00:00",
      "rain": 2.4330000000000003,
      "gust": 76.7
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-08 12:00:00",
      "rain": 0.181,
      "gust": 51.9
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-08 18:00:00",
      "rain": 0.0,
      "gust": 23.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-09 00:00:00",
      "rain": 0.0,
      "gust": 6.7
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-09 06:00:00",
      "rain": 0.05499999999999999,
      "gust": 15.7
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-09 12:00:00",
      "rain": 0.02,
      "gust": 17.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-09 18:00:00",
      "rain": 0.0,
      "gust": 12.1
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-10 00:00:00",
      "rain": 0.0,
      "gust": 7.8
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-10 06:00:00",
      "rain": 0.0,
      "gust": 13.4
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-10 12:00:00",
      "rain": 0.016,
      "gust": 20.4
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-10 18:00:00",
      "rain": 0.0,
      "gust": 14.5
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-11 00:00:00",
      "rain": 0.0,
      "gust": 4.3
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-11 06:00:00",
      "rain": 0.028,
      "gust": 12.3
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-11 12:00:00",
      "rain": 0.248,
      "gust": 23.5
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-11 18:00:00",
      "rain": 0.044,
      "gust": 8.3
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-12 00:00:00",
      "rain": 0.0,
      "gust": 4.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-12 06:00:00",
      "rain": 0.02,
      "gust": 8.5
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-12 12:00:00",
      "rain": 0.14999999999999997,
      "gust": 19.0
    },
    {
      "storm": "Beryl",
      "county": "Fort Bend",
      "time": "2024-07-12 18:00:00",
      "rain": 0.10600000000000001,
      "gust": 13.4
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-05 00:00:00",
      "rain": 0.004,
      "gust": 20.4
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-05 06:00:00",
      "rain": 0.0,
      "gust": 14.3
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-05 12:00:00",
      "rain": 0.0,
      "gust": 14.8
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-05 18:00:00",
      "rain": 0.0,
      "gust": 18.6
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-06 00:00:00",
      "rain": 0.0,
      "gust": 16.1
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-06 06:00:00",
      "rain": 0.0,
      "gust": 21.0
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-06 12:00:00",
      "rain": 0.008,
      "gust": 28.2
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-06 18:00:00",
      "rain": 0.0,
      "gust": 16.8
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-07 00:00:00",
      "rain": 0.016,
      "gust": 21.5
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-07 06:00:00",
      "rain": 0.181,
      "gust": 31.1
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-07 12:00:00",
      "rain": 0.34700000000000003,
      "gust": 34.2
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-07 18:00:00",
      "rain": 0.3,
      "gust": 37.8
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-08 00:00:00",
      "rain": 1.437,
      "gust": 67.8
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-08 06:00:00",
      "rain": 2.174,
      "gust": 86.8
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-08 12:00:00",
      "rain": 0.05900000000000001,
      "gust": 70.0
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-08 18:00:00",
      "rain": 0.0,
      "gust": 27.7
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-09 00:00:00",
      "rain": 0.0,
      "gust": 15.7
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-09 06:00:00",
      "rain": 0.028,
      "gust": 25.9
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-09 12:00:00",
      "rain": 0.10600000000000001,
      "gust": 15.2
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-09 18:00:00",
      "rain": 0.0,
      "gust": 17.4
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-10 00:00:00",
      "rain": 0.0,
      "gust": 12.1
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-10 06:00:00",
      "rain": 0.008,
      "gust": 16.8
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-10 12:00:00",
      "rain": 0.07,
      "gust": 13.0
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-10 18:00:00",
      "rain": 0.0,
      "gust": 12.8
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-11 00:00:00",
      "rain": 0.008,
      "gust": 8.3
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-11 06:00:00",
      "rain": 0.26,
      "gust": 10.1
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-11 12:00:00",
      "rain": 0.0,
      "gust": 10.3
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-11 18:00:00",
      "rain": 0.008,
      "gust": 10.3
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-12 00:00:00",
      "rain": 0.071,
      "gust": 15.9
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-12 06:00:00",
      "rain": 0.111,
      "gust": 20.6
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-12 12:00:00",
      "rain": 0.004,
      "gust": 11.9
    },
    {
      "storm": "Beryl",
      "county": "Galveston",
      "time": "2024-07-12 18:00:00",
      "rain": 0.0,
      "gust": 11.2
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-05 00:00:00",
      "rain": 0.0,
      "gust": 13.4
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-05 06:00:00",
      "rain": 0.0,
      "gust": 14.1
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-05 12:00:00",
      "rain": 0.0,
      "gust": 13.9
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-05 18:00:00",
      "rain": 0.0,
      "gust": 16.1
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-06 00:00:00",
      "rain": 0.0,
      "gust": 9.4
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-06 06:00:00",
      "rain": 0.028,
      "gust": 12.5
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-06 12:00:00",
      "rain": 0.847,
      "gust": 21.3
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-06 18:00:00",
      "rain": 0.07100000000000001,
      "gust": 14.3
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-07 00:00:00",
      "rain": 0.0,
      "gust": 9.8
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-07 06:00:00",
      "rain": 0.02,
      "gust": 23.7
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-07 12:00:00",
      "rain": 0.30800000000000005,
      "gust": 29.3
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-07 18:00:00",
      "rain": 0.044000000000000004,
      "gust": 29.5
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-08 00:00:00",
      "rain": 1.0270000000000001,
      "gust": 51.5
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-08 06:00:00",
      "rain": 1.949,
      "gust": 78.7
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-08 12:00:00",
      "rain": 0.251,
      "gust": 62.2
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-08 18:00:00",
      "rain": 0.0,
      "gust": 28.0
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-09 00:00:00",
      "rain": 0.0,
      "gust": 7.4
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-09 06:00:00",
      "rain": 0.004,
      "gust": 12.8
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-09 12:00:00",
      "rain": 0.0,
      "gust": 13.2
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-09 18:00:00",
      "rain": 0.0,
      "gust": 8.3
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-10 00:00:00",
      "rain": 0.0,
      "gust": 4.9
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-10 06:00:00",
      "rain": 0.0,
      "gust": 11.6
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-10 12:00:00",
      "rain": 0.008,
      "gust": 20.8
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-10 18:00:00",
      "rain": 0.0,
      "gust": 13.2
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-11 00:00:00",
      "rain": 0.0,
      "gust": 5.8
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-11 06:00:00",
      "rain": 0.012,
      "gust": 11.0
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-11 12:00:00",
      "rain": 0.39399999999999996,
      "gust": 13.2
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-11 18:00:00",
      "rain": 0.095,
      "gust": 6.5
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-12 00:00:00",
      "rain": 0.0,
      "gust": 2.7
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-12 06:00:00",
      "rain": 0.45000000000000007,
      "gust": 13.0
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-12 12:00:00",
      "rain": 0.24,
      "gust": 13.6
    },
    {
      "storm": "Beryl",
      "county": "Harris",
      "time": "2024-07-12 18:00:00",
      "rain": 0.0,
      "gust": 11.9
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-05 00:00:00",
      "rain": 0.0,
      "gust": 14.5
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-05 06:00:00",
      "rain": 0.0,
      "gust": 14.1
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-05 12:00:00",
      "rain": 0.0,
      "gust": 12.1
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-05 18:00:00",
      "rain": 0.181,
      "gust": 29.8
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-06 00:00:00",
      "rain": 0.0,
      "gust": 16.1
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-06 06:00:00",
      "rain": 0.004,
      "gust": 11.0
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-06 12:00:00",
      "rain": 0.292,
      "gust": 23.5
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-06 18:00:00",
      "rain": 0.0,
      "gust": 15.0
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-07 00:00:00",
      "rain": 0.0,
      "gust": 6.9
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-07 06:00:00",
      "rain": 0.0,
      "gust": 16.1
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-07 12:00:00",
      "rain": 0.276,
      "gust": 25.3
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-07 18:00:00",
      "rain": 0.016,
      "gust": 24.2
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-08 00:00:00",
      "rain": 0.196,
      "gust": 30.2
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-08 06:00:00",
      "rain": 3.7100000000000004,
      "gust": 67.1
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-08 12:00:00",
      "rain": 0.17800000000000002,
      "gust": 53.9
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-08 18:00:00",
      "rain": 0.0,
      "gust": 37.1
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-09 00:00:00",
      "rain": 0.0,
      "gust": 7.6
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-09 06:00:00",
      "rain": 0.0,
      "gust": 11.4
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-09 12:00:00",
      "rain": 0.0,
      "gust": 17.0
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-09 18:00:00",
      "rain": 0.0,
      "gust": 9.8
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-10 00:00:00",
      "rain": 0.0,
      "gust": 6.0
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-10 06:00:00",
      "rain": 0.0,
      "gust": 11.9
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-10 12:00:00",
      "rain": 0.0,
      "gust": 14.1
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-10 18:00:00",
      "rain": 0.0,
      "gust": 9.6
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-11 00:00:00",
      "rain": 0.0,
      "gust": 6.9
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-11 06:00:00",
      "rain": 0.016,
      "gust": 10.3
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-11 12:00:00",
      "rain": 0.067,
      "gust": 23.0
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-11 18:00:00",
      "rain": 0.012,
      "gust": 12.8
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-12 00:00:00",
      "rain": 0.0,
      "gust": 4.9
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-12 06:00:00",
      "rain": 0.449,
      "gust": 12.3
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-12 12:00:00",
      "rain": 0.004,
      "gust": 12.3
    },
    {
      "storm": "Beryl",
      "county": "Montgomery",
      "time": "2024-07-12 18:00:00",
      "rain": 0.008,
      "gust": 15.4
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-23 00:00:00",
      "rain": 0.0,
      "gust": 6.3
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-23 06:00:00",
      "rain": 0.28,
      "gust": 19.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-23 12:00:00",
      "rain": 0.126,
      "gust": 19.9
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-23 18:00:00",
      "rain": 0.0,
      "gust": 11.2
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-24 00:00:00",
      "rain": 0.024,
      "gust": 7.2
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-24 06:00:00",
      "rain": 0.0,
      "gust": 18.1
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-24 12:00:00",
      "rain": 0.004,
      "gust": 24.8
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-24 18:00:00",
      "rain": 0.02,
      "gust": 24.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-25 00:00:00",
      "rain": 0.091,
      "gust": 22.8
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-25 06:00:00",
      "rain": 0.492,
      "gust": 31.8
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-25 12:00:00",
      "rain": 0.512,
      "gust": 40.5
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-25 18:00:00",
      "rain": 0.47300000000000003,
      "gust": 45.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-26 00:00:00",
      "rain": 0.8190000000000001,
      "gust": 47.9
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-26 06:00:00",
      "rain": 0.8059999999999999,
      "gust": 46.3
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-26 12:00:00",
      "rain": 0.357,
      "gust": 38.5
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-26 18:00:00",
      "rain": 1.288,
      "gust": 31.1
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-27 00:00:00",
      "rain": 2.078,
      "gust": 40.9
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-27 06:00:00",
      "rain": 0.5740000000000001,
      "gust": 36.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-27 12:00:00",
      "rain": 0.213,
      "gust": 31.8
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-27 18:00:00",
      "rain": 0.249,
      "gust": 28.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-28 00:00:00",
      "rain": 0.051000000000000004,
      "gust": 26.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-28 06:00:00",
      "rain": 0.09100000000000003,
      "gust": 22.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-28 12:00:00",
      "rain": 1.408,
      "gust": 41.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-28 18:00:00",
      "rain": 3.075,
      "gust": 48.5
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-29 00:00:00",
      "rain": 1.697,
      "gust": 41.2
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-29 06:00:00",
      "rain": 1.493,
      "gust": 44.1
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-29 12:00:00",
      "rain": 0.8230000000000001,
      "gust": 51.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-29 18:00:00",
      "rain": 0.34299999999999997,
      "gust": 49.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-30 00:00:00",
      "rain": 0.0,
      "gust": 33.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-30 06:00:00",
      "rain": 0.0,
      "gust": 34.9
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-30 12:00:00",
      "rain": 0.0,
      "gust": 36.7
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-30 18:00:00",
      "rain": 0.0,
      "gust": 26.8
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-31 00:00:00",
      "rain": 0.0,
      "gust": 10.7
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-31 06:00:00",
      "rain": 0.0,
      "gust": 18.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-31 12:00:00",
      "rain": 0.0,
      "gust": 20.4
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-08-31 18:00:00",
      "rain": 0.0,
      "gust": 15.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-01 00:00:00",
      "rain": 0.0,
      "gust": 8.1
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-01 06:00:00",
      "rain": 0.0,
      "gust": 11.4
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-01 12:00:00",
      "rain": 0.004,
      "gust": 15.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-01 18:00:00",
      "rain": 0.008,
      "gust": 11.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-02 00:00:00",
      "rain": 0.0,
      "gust": 5.6
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-02 06:00:00",
      "rain": 0.004,
      "gust": 10.7
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-02 12:00:00",
      "rain": 0.008,
      "gust": 10.7
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-02 18:00:00",
      "rain": 0.0,
      "gust": 11.0
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-03 00:00:00",
      "rain": 0.0,
      "gust": 4.9
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-03 06:00:00",
      "rain": 0.012,
      "gust": 10.5
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-03 12:00:00",
      "rain": 0.052000000000000005,
      "gust": 15.9
    },
    {
      "storm": "Harvey",
      "county": "Brazoria",
      "time": "2017-09-03 18:00:00",
      "rain": 0.004,
      "gust": 13.0
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-23 00:00:00",
      "rain": 0.0,
      "gust": 8.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-23 06:00:00",
      "rain": 0.004,
      "gust": 14.3
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-23 12:00:00",
      "rain": 0.29100000000000004,
      "gust": 22.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-23 18:00:00",
      "rain": 0.0,
      "gust": 17.9
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-24 00:00:00",
      "rain": 0.0,
      "gust": 8.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-24 06:00:00",
      "rain": 0.004,
      "gust": 13.9
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-24 12:00:00",
      "rain": 0.028,
      "gust": 22.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-24 18:00:00",
      "rain": 0.02,
      "gust": 22.4
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-25 00:00:00",
      "rain": 0.004,
      "gust": 19.7
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-25 06:00:00",
      "rain": 0.63,
      "gust": 31.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-25 12:00:00",
      "rain": 0.486,
      "gust": 37.4
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-25 18:00:00",
      "rain": 0.306,
      "gust": 43.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-26 00:00:00",
      "rain": 0.5439999999999999,
      "gust": 45.4
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-26 06:00:00",
      "rain": 0.826,
      "gust": 44.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-26 12:00:00",
      "rain": 0.299,
      "gust": 37.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-26 18:00:00",
      "rain": 1.858,
      "gust": 37.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-27 00:00:00",
      "rain": 1.102,
      "gust": 51.0
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-27 06:00:00",
      "rain": 0.719,
      "gust": 44.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-27 12:00:00",
      "rain": 0.965,
      "gust": 26.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-27 18:00:00",
      "rain": 0.8049999999999999,
      "gust": 26.2
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-28 00:00:00",
      "rain": 0.127,
      "gust": 25.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-28 06:00:00",
      "rain": 1.847,
      "gust": 45.4
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-28 12:00:00",
      "rain": 1.327,
      "gust": 45.6
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-28 18:00:00",
      "rain": 2.051,
      "gust": 46.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-29 00:00:00",
      "rain": 0.9490000000000001,
      "gust": 37.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-29 06:00:00",
      "rain": 0.52,
      "gust": 44.3
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-29 12:00:00",
      "rain": 1.023,
      "gust": 48.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-29 18:00:00",
      "rain": 0.21300000000000002,
      "gust": 36.9
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-30 00:00:00",
      "rain": 0.0,
      "gust": 30.6
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-30 06:00:00",
      "rain": 0.0,
      "gust": 35.6
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-30 12:00:00",
      "rain": 0.0,
      "gust": 36.9
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-30 18:00:00",
      "rain": 0.0,
      "gust": 23.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-31 00:00:00",
      "rain": 0.0,
      "gust": 12.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-31 06:00:00",
      "rain": 0.0,
      "gust": 20.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-31 12:00:00",
      "rain": 0.0,
      "gust": 22.6
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-08-31 18:00:00",
      "rain": 0.0,
      "gust": 15.0
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-01 00:00:00",
      "rain": 0.0,
      "gust": 6.9
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-01 06:00:00",
      "rain": 0.0,
      "gust": 8.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-01 12:00:00",
      "rain": 0.004,
      "gust": 10.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-01 18:00:00",
      "rain": 0.0,
      "gust": 11.6
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-02 00:00:00",
      "rain": 0.0,
      "gust": 6.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-02 06:00:00",
      "rain": 0.008,
      "gust": 9.4
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-02 12:00:00",
      "rain": 0.012,
      "gust": 8.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-02 18:00:00",
      "rain": 0.0,
      "gust": 9.8
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-03 00:00:00",
      "rain": 0.0,
      "gust": 5.1
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-03 06:00:00",
      "rain": 0.0,
      "gust": 8.5
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-03 12:00:00",
      "rain": 0.0,
      "gust": 13.4
    },
    {
      "storm": "Harvey",
      "county": "Fort Bend",
      "time": "2017-09-03 18:00:00",
      "rain": 0.0,
      "gust": 12.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-23 00:00:00",
      "rain": 0.0,
      "gust": 11.6
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-23 06:00:00",
      "rain": 0.535,
      "gust": 11.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-23 12:00:00",
      "rain": 0.047,
      "gust": 15.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-23 18:00:00",
      "rain": 0.138,
      "gust": 16.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-24 00:00:00",
      "rain": 0.012,
      "gust": 11.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-24 06:00:00",
      "rain": 0.024,
      "gust": 19.2
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-24 12:00:00",
      "rain": 0.008,
      "gust": 31.5
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-24 18:00:00",
      "rain": 0.012,
      "gust": 32.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-25 00:00:00",
      "rain": 0.149,
      "gust": 34.4
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-25 06:00:00",
      "rain": 0.886,
      "gust": 46.8
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-25 12:00:00",
      "rain": 0.49200000000000005,
      "gust": 48.8
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-25 18:00:00",
      "rain": 0.28,
      "gust": 52.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-26 00:00:00",
      "rain": 0.326,
      "gust": 53.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-26 06:00:00",
      "rain": 1.0779999999999998,
      "gust": 51.2
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-26 12:00:00",
      "rain": 0.5429999999999999,
      "gust": 51.0
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-26 18:00:00",
      "rain": 0.819,
      "gust": 43.8
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-27 00:00:00",
      "rain": 0.433,
      "gust": 48.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-27 06:00:00",
      "rain": 2.6689999999999996,
      "gust": 50.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-27 12:00:00",
      "rain": 0.626,
      "gust": 42.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-27 18:00:00",
      "rain": 0.504,
      "gust": 42.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-28 00:00:00",
      "rain": 0.34700000000000003,
      "gust": 43.6
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-28 06:00:00",
      "rain": 0.40900000000000003,
      "gust": 40.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-28 12:00:00",
      "rain": 0.383,
      "gust": 34.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-28 18:00:00",
      "rain": 2.2430000000000003,
      "gust": 47.4
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-29 00:00:00",
      "rain": 2.849,
      "gust": 45.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-29 06:00:00",
      "rain": 0.9479999999999998,
      "gust": 53.2
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-29 12:00:00",
      "rain": 1.263,
      "gust": 61.7
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-29 18:00:00",
      "rain": 0.8350000000000001,
      "gust": 61.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-30 00:00:00",
      "rain": 1.288,
      "gust": 55.7
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-30 06:00:00",
      "rain": 0.095,
      "gust": 46.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-30 12:00:00",
      "rain": 0.012,
      "gust": 43.4
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-30 18:00:00",
      "rain": 0.0,
      "gust": 32.2
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-31 00:00:00",
      "rain": 0.0,
      "gust": 19.9
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-31 06:00:00",
      "rain": 0.0,
      "gust": 22.6
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-31 12:00:00",
      "rain": 0.0,
      "gust": 23.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-08-31 18:00:00",
      "rain": 0.0,
      "gust": 18.6
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-01 00:00:00",
      "rain": 0.0,
      "gust": 11.6
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-01 06:00:00",
      "rain": 0.0,
      "gust": 14.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-01 12:00:00",
      "rain": 0.0,
      "gust": 14.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-01 18:00:00",
      "rain": 0.0,
      "gust": 9.4
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-02 00:00:00",
      "rain": 0.0,
      "gust": 4.3
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-02 06:00:00",
      "rain": 0.02,
      "gust": 14.5
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-02 12:00:00",
      "rain": 0.004,
      "gust": 14.8
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-02 18:00:00",
      "rain": 0.0,
      "gust": 10.5
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-03 00:00:00",
      "rain": 0.0,
      "gust": 3.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-03 06:00:00",
      "rain": 0.016,
      "gust": 11.6
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-03 12:00:00",
      "rain": 0.016,
      "gust": 18.1
    },
    {
      "storm": "Harvey",
      "county": "Galveston",
      "time": "2017-09-03 18:00:00",
      "rain": 0.004,
      "gust": 16.3
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-23 00:00:00",
      "rain": 0.0,
      "gust": 7.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-23 06:00:00",
      "rain": 0.031,
      "gust": 15.7
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-23 12:00:00",
      "rain": 0.024,
      "gust": 16.6
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-23 18:00:00",
      "rain": 0.004,
      "gust": 14.3
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-24 00:00:00",
      "rain": 0.0,
      "gust": 6.7
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-24 06:00:00",
      "rain": 0.0,
      "gust": 12.3
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-24 12:00:00",
      "rain": 0.016,
      "gust": 19.9
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-24 18:00:00",
      "rain": 0.0,
      "gust": 24.8
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-25 00:00:00",
      "rain": 0.004,
      "gust": 17.7
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-25 06:00:00",
      "rain": 0.898,
      "gust": 31.5
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-25 12:00:00",
      "rain": 0.378,
      "gust": 35.6
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-25 18:00:00",
      "rain": 0.22399999999999998,
      "gust": 39.4
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-26 00:00:00",
      "rain": 0.595,
      "gust": 41.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-26 06:00:00",
      "rain": 1.4170000000000003,
      "gust": 34.9
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-26 12:00:00",
      "rain": 0.9570000000000001,
      "gust": 37.1
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-26 18:00:00",
      "rain": 1.9030000000000002,
      "gust": 40.5
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-27 00:00:00",
      "rain": 0.7270000000000001,
      "gust": 38.3
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-27 06:00:00",
      "rain": 2.512,
      "gust": 38.7
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-27 12:00:00",
      "rain": 0.6140000000000001,
      "gust": 27.5
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-27 18:00:00",
      "rain": 1.186,
      "gust": 30.6
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-28 00:00:00",
      "rain": 0.123,
      "gust": 28.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-28 06:00:00",
      "rain": 0.76,
      "gust": 39.4
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-28 12:00:00",
      "rain": 0.417,
      "gust": 43.6
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-28 18:00:00",
      "rain": 2.354,
      "gust": 40.5
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-29 00:00:00",
      "rain": 0.9850000000000001,
      "gust": 35.6
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-29 06:00:00",
      "rain": 1.565,
      "gust": 38.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-29 12:00:00",
      "rain": 2.913,
      "gust": 57.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-29 18:00:00",
      "rain": 0.59,
      "gust": 46.3
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-30 00:00:00",
      "rain": 0.063,
      "gust": 34.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-30 06:00:00",
      "rain": 0.275,
      "gust": 36.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-30 12:00:00",
      "rain": 0.067,
      "gust": 38.9
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-30 18:00:00",
      "rain": 0.004,
      "gust": 26.4
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-31 00:00:00",
      "rain": 0.0,
      "gust": 17.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-31 06:00:00",
      "rain": 0.0,
      "gust": 20.8
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-31 12:00:00",
      "rain": 0.0,
      "gust": 22.8
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-08-31 18:00:00",
      "rain": 0.0,
      "gust": 17.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-01 00:00:00",
      "rain": 0.0,
      "gust": 6.3
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-01 06:00:00",
      "rain": 0.0,
      "gust": 11.9
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-01 12:00:00",
      "rain": 0.016,
      "gust": 14.3
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-01 18:00:00",
      "rain": 0.0,
      "gust": 13.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-02 00:00:00",
      "rain": 0.0,
      "gust": 5.4
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-02 06:00:00",
      "rain": 0.004,
      "gust": 9.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-02 12:00:00",
      "rain": 0.028,
      "gust": 9.2
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-02 18:00:00",
      "rain": 0.004,
      "gust": 11.4
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-03 00:00:00",
      "rain": 0.0,
      "gust": 5.8
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-03 06:00:00",
      "rain": 0.0,
      "gust": 8.5
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-03 12:00:00",
      "rain": 0.0,
      "gust": 13.0
    },
    {
      "storm": "Harvey",
      "county": "Harris",
      "time": "2017-09-03 18:00:00",
      "rain": 0.0,
      "gust": 13.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-23 00:00:00",
      "rain": 0.0,
      "gust": 7.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-23 06:00:00",
      "rain": 0.0,
      "gust": 13.6
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-23 12:00:00",
      "rain": 0.087,
      "gust": 19.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-23 18:00:00",
      "rain": 0.0,
      "gust": 13.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-24 00:00:00",
      "rain": 0.0,
      "gust": 7.8
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-24 06:00:00",
      "rain": 0.004,
      "gust": 13.2
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-24 12:00:00",
      "rain": 0.004,
      "gust": 17.2
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-24 18:00:00",
      "rain": 0.024,
      "gust": 24.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-25 00:00:00",
      "rain": 0.0,
      "gust": 14.3
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-25 06:00:00",
      "rain": 0.35500000000000004,
      "gust": 18.6
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-25 12:00:00",
      "rain": 0.263,
      "gust": 27.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-25 18:00:00",
      "rain": 0.118,
      "gust": 28.6
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-26 00:00:00",
      "rain": 0.264,
      "gust": 34.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-26 06:00:00",
      "rain": 2.0,
      "gust": 34.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-26 12:00:00",
      "rain": 1.846,
      "gust": 34.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-26 18:00:00",
      "rain": 0.49300000000000005,
      "gust": 40.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-27 00:00:00",
      "rain": 0.645,
      "gust": 40.5
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-27 06:00:00",
      "rain": 1.5899999999999999,
      "gust": 32.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-27 12:00:00",
      "rain": 2.475,
      "gust": 30.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-27 18:00:00",
      "rain": 1.826,
      "gust": 41.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-28 00:00:00",
      "rain": 4.91,
      "gust": 53.9
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-28 06:00:00",
      "rain": 0.457,
      "gust": 40.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-28 12:00:00",
      "rain": 0.591,
      "gust": 45.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-28 18:00:00",
      "rain": 0.826,
      "gust": 31.1
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-29 00:00:00",
      "rain": 0.353,
      "gust": 28.9
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-29 06:00:00",
      "rain": 1.252,
      "gust": 35.8
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-29 12:00:00",
      "rain": 1.665,
      "gust": 40.9
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-29 18:00:00",
      "rain": 0.166,
      "gust": 33.3
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-30 00:00:00",
      "rain": 0.6849999999999999,
      "gust": 34.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-30 06:00:00",
      "rain": 0.579,
      "gust": 32.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-30 12:00:00",
      "rain": 0.24100000000000002,
      "gust": 30.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-30 18:00:00",
      "rain": 0.02,
      "gust": 28.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-31 00:00:00",
      "rain": 0.0,
      "gust": 15.9
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-31 06:00:00",
      "rain": 0.0,
      "gust": 19.2
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-31 12:00:00",
      "rain": 0.0,
      "gust": 22.8
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-08-31 18:00:00",
      "rain": 0.0,
      "gust": 15.9
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-01 00:00:00",
      "rain": 0.0,
      "gust": 6.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-01 06:00:00",
      "rain": 0.0,
      "gust": 10.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-01 12:00:00",
      "rain": 0.02,
      "gust": 13.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-01 18:00:00",
      "rain": 0.0,
      "gust": 7.6
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-02 00:00:00",
      "rain": 0.0,
      "gust": 6.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-02 06:00:00",
      "rain": 0.004,
      "gust": 7.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-02 12:00:00",
      "rain": 0.012,
      "gust": 9.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-02 18:00:00",
      "rain": 0.008,
      "gust": 9.6
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-03 00:00:00",
      "rain": 0.0,
      "gust": 6.0
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-03 06:00:00",
      "rain": 0.0,
      "gust": 7.4
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-03 12:00:00",
      "rain": 0.0,
      "gust": 10.7
    },
    {
      "storm": "Harvey",
      "county": "Montgomery",
      "time": "2017-09-03 18:00:00",
      "rain": 0.0,
      "gust": 10.1
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-16 00:00:00",
      "rain": 0.0,
      "gust": 8.7
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-16 06:00:00",
      "rain": 0.048,
      "gust": 25.5
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-16 12:00:00",
      "rain": 0.391,
      "gust": 36.0
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-16 18:00:00",
      "rain": 0.118,
      "gust": 23.5
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-17 00:00:00",
      "rain": 0.113,
      "gust": 12.8
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-17 06:00:00",
      "rain": 0.363,
      "gust": 18.6
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-17 12:00:00",
      "rain": 1.1970000000000003,
      "gust": 27.5
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-17 18:00:00",
      "rain": 0.8320000000000001,
      "gust": 30.4
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-18 00:00:00",
      "rain": 0.949,
      "gust": 23.3
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-18 06:00:00",
      "rain": 1.284,
      "gust": 18.3
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-18 12:00:00",
      "rain": 0.598,
      "gust": 20.6
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-18 18:00:00",
      "rain": 0.063,
      "gust": 15.9
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-19 00:00:00",
      "rain": 0.0,
      "gust": 18.6
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-19 06:00:00",
      "rain": 0.30300000000000005,
      "gust": 22.4
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-19 12:00:00",
      "rain": 0.06,
      "gust": 23.5
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-19 18:00:00",
      "rain": 0.012,
      "gust": 20.6
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-20 00:00:00",
      "rain": 0.012,
      "gust": 17.7
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-20 06:00:00",
      "rain": 0.063,
      "gust": 23.0
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-20 12:00:00",
      "rain": 0.27099999999999996,
      "gust": 24.4
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-20 18:00:00",
      "rain": 0.008,
      "gust": 21.3
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-21 00:00:00",
      "rain": 0.0,
      "gust": 14.1
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-21 06:00:00",
      "rain": 0.008,
      "gust": 19.0
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-21 12:00:00",
      "rain": 0.02,
      "gust": 22.4
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-21 18:00:00",
      "rain": 0.0,
      "gust": 20.4
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-22 00:00:00",
      "rain": 0.0,
      "gust": 12.1
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-22 06:00:00",
      "rain": 0.016,
      "gust": 14.3
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-22 12:00:00",
      "rain": 0.052000000000000005,
      "gust": 21.3
    },
    {
      "storm": "Imelda",
      "county": "Brazoria",
      "time": "2019-09-22 18:00:00",
      "rain": 0.004,
      "gust": 18.8
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-16 00:00:00",
      "rain": 0.0,
      "gust": 6.9
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-16 06:00:00",
      "rain": 0.012,
      "gust": 27.7
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-16 12:00:00",
      "rain": 0.04,
      "gust": 36.9
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-16 18:00:00",
      "rain": 0.024,
      "gust": 28.0
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-17 00:00:00",
      "rain": 0.08,
      "gust": 14.8
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-17 06:00:00",
      "rain": 0.7440000000000001,
      "gust": 13.9
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-17 12:00:00",
      "rain": 0.39699999999999996,
      "gust": 25.7
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-17 18:00:00",
      "rain": 1.6100000000000003,
      "gust": 37.4
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-18 00:00:00",
      "rain": 0.4190000000000001,
      "gust": 39.6
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-18 06:00:00",
      "rain": 0.5030000000000001,
      "gust": 34.2
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-18 12:00:00",
      "rain": 0.064,
      "gust": 19.0
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-18 18:00:00",
      "rain": 0.016,
      "gust": 14.8
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-19 00:00:00",
      "rain": 0.008,
      "gust": 16.1
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-19 06:00:00",
      "rain": 0.575,
      "gust": 21.0
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-19 12:00:00",
      "rain": 0.536,
      "gust": 17.0
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-19 18:00:00",
      "rain": 0.028,
      "gust": 19.2
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-20 00:00:00",
      "rain": 0.0,
      "gust": 17.7
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-20 06:00:00",
      "rain": 0.016,
      "gust": 20.6
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-20 12:00:00",
      "rain": 0.29100000000000004,
      "gust": 26.6
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-20 18:00:00",
      "rain": 0.028,
      "gust": 20.1
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-21 00:00:00",
      "rain": 0.0,
      "gust": 12.5
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-21 06:00:00",
      "rain": 0.0,
      "gust": 19.5
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-21 12:00:00",
      "rain": 0.028,
      "gust": 20.8
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-21 18:00:00",
      "rain": 0.0,
      "gust": 19.5
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-22 00:00:00",
      "rain": 0.0,
      "gust": 12.1
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-22 06:00:00",
      "rain": 0.016,
      "gust": 13.9
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-22 12:00:00",
      "rain": 0.052000000000000005,
      "gust": 21.5
    },
    {
      "storm": "Imelda",
      "county": "Fort Bend",
      "time": "2019-09-22 18:00:00",
      "rain": 0.008,
      "gust": 17.2
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-16 00:00:00",
      "rain": 0.0,
      "gust": 19.2
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-16 06:00:00",
      "rain": 0.088,
      "gust": 34.9
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-16 12:00:00",
      "rain": 0.697,
      "gust": 42.7
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-16 18:00:00",
      "rain": 0.11100000000000002,
      "gust": 30.2
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-17 00:00:00",
      "rain": 0.189,
      "gust": 26.8
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-17 06:00:00",
      "rain": 0.85,
      "gust": 36.5
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-17 12:00:00",
      "rain": 0.6920000000000002,
      "gust": 41.8
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-17 18:00:00",
      "rain": 1.528,
      "gust": 38.9
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-18 00:00:00",
      "rain": 2.453,
      "gust": 41.4
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-18 06:00:00",
      "rain": 1.548,
      "gust": 28.6
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-18 12:00:00",
      "rain": 0.476,
      "gust": 23.5
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-18 18:00:00",
      "rain": 0.11800000000000001,
      "gust": 34.0
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-19 00:00:00",
      "rain": 0.051,
      "gust": 30.4
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-19 06:00:00",
      "rain": 0.485,
      "gust": 29.8
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-19 12:00:00",
      "rain": 0.44,
      "gust": 28.6
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-19 18:00:00",
      "rain": 0.02,
      "gust": 26.6
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-20 00:00:00",
      "rain": 0.0,
      "gust": 27.1
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-20 06:00:00",
      "rain": 0.15000000000000002,
      "gust": 23.9
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-20 12:00:00",
      "rain": 0.028,
      "gust": 28.2
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-20 18:00:00",
      "rain": 0.012,
      "gust": 24.4
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-21 00:00:00",
      "rain": 0.0,
      "gust": 24.2
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-21 06:00:00",
      "rain": 0.008,
      "gust": 23.7
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-21 12:00:00",
      "rain": 0.024,
      "gust": 23.9
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-21 18:00:00",
      "rain": 0.0,
      "gust": 23.5
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-22 00:00:00",
      "rain": 0.004,
      "gust": 25.9
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-22 06:00:00",
      "rain": 0.004,
      "gust": 24.4
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-22 12:00:00",
      "rain": 0.036000000000000004,
      "gust": 23.3
    },
    {
      "storm": "Imelda",
      "county": "Galveston",
      "time": "2019-09-22 18:00:00",
      "rain": 0.004,
      "gust": 22.4
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-16 00:00:00",
      "rain": 0.0,
      "gust": 6.7
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-16 06:00:00",
      "rain": 0.008,
      "gust": 27.7
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-16 12:00:00",
      "rain": 0.048,
      "gust": 32.4
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-16 18:00:00",
      "rain": 0.059,
      "gust": 30.6
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-17 00:00:00",
      "rain": 0.14200000000000002,
      "gust": 15.7
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-17 06:00:00",
      "rain": 1.468,
      "gust": 18.8
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-17 12:00:00",
      "rain": 0.879,
      "gust": 26.8
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-17 18:00:00",
      "rain": 1.9460000000000002,
      "gust": 49.7
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-18 00:00:00",
      "rain": 1.299,
      "gust": 41.4
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-18 06:00:00",
      "rain": 2.2009999999999996,
      "gust": 24.2
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-18 12:00:00",
      "rain": 0.138,
      "gust": 24.6
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-18 18:00:00",
      "rain": 0.129,
      "gust": 14.5
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-19 00:00:00",
      "rain": 0.382,
      "gust": 20.6
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-19 06:00:00",
      "rain": 2.085,
      "gust": 28.0
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-19 12:00:00",
      "rain": 1.2169999999999996,
      "gust": 19.2
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-19 18:00:00",
      "rain": 0.42100000000000004,
      "gust": 20.1
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-20 00:00:00",
      "rain": 0.008,
      "gust": 16.1
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-20 06:00:00",
      "rain": 0.22799999999999998,
      "gust": 17.9
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-20 12:00:00",
      "rain": 0.213,
      "gust": 25.1
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-20 18:00:00",
      "rain": 0.051000000000000004,
      "gust": 21.7
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-21 00:00:00",
      "rain": 0.0,
      "gust": 12.8
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-21 06:00:00",
      "rain": 0.0,
      "gust": 19.9
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-21 12:00:00",
      "rain": 0.012,
      "gust": 21.9
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-21 18:00:00",
      "rain": 0.008,
      "gust": 21.5
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-22 00:00:00",
      "rain": 0.004,
      "gust": 14.1
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-22 06:00:00",
      "rain": 0.07800000000000001,
      "gust": 14.5
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-22 12:00:00",
      "rain": 0.056,
      "gust": 20.6
    },
    {
      "storm": "Imelda",
      "county": "Harris",
      "time": "2019-09-22 18:00:00",
      "rain": 0.008,
      "gust": 20.4
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-16 00:00:00",
      "rain": 0.0,
      "gust": 5.4
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-16 06:00:00",
      "rain": 0.0,
      "gust": 20.1
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-16 12:00:00",
      "rain": 0.048,
      "gust": 27.5
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-16 18:00:00",
      "rain": 0.0,
      "gust": 19.7
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-17 00:00:00",
      "rain": 0.012,
      "gust": 13.4
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-17 06:00:00",
      "rain": 0.606,
      "gust": 36.0
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-17 12:00:00",
      "rain": 0.261,
      "gust": 34.9
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-17 18:00:00",
      "rain": 0.347,
      "gust": 27.1
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-18 00:00:00",
      "rain": 0.32699999999999996,
      "gust": 17.9
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-18 06:00:00",
      "rain": 1.3810000000000002,
      "gust": 20.6
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-18 12:00:00",
      "rain": 0.233,
      "gust": 18.8
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-18 18:00:00",
      "rain": 0.095,
      "gust": 17.2
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-19 00:00:00",
      "rain": 0.8190000000000001,
      "gust": 12.3
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-19 06:00:00",
      "rain": 0.362,
      "gust": 21.0
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-19 12:00:00",
      "rain": 0.197,
      "gust": 29.5
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-19 18:00:00",
      "rain": 0.5670000000000001,
      "gust": 17.7
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-20 00:00:00",
      "rain": 0.012,
      "gust": 13.4
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-20 06:00:00",
      "rain": 0.21700000000000003,
      "gust": 21.7
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-20 12:00:00",
      "rain": 0.236,
      "gust": 26.2
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-20 18:00:00",
      "rain": 0.083,
      "gust": 21.5
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-21 00:00:00",
      "rain": 0.0,
      "gust": 13.4
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-21 06:00:00",
      "rain": 0.008,
      "gust": 15.0
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-21 12:00:00",
      "rain": 0.02,
      "gust": 20.1
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-21 18:00:00",
      "rain": 0.004,
      "gust": 17.9
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-22 00:00:00",
      "rain": 0.0,
      "gust": 12.8
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-22 06:00:00",
      "rain": 0.224,
      "gust": 14.3
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-22 12:00:00",
      "rain": 0.217,
      "gust": 16.3
    },
    {
      "storm": "Imelda",
      "county": "Montgomery",
      "time": "2019-09-22 18:00:00",
      "rain": 0.02,
      "gust": 14.5
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-12 00:00:00",
      "rain": 0.0,
      "gust": 10.5
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-12 06:00:00",
      "rain": 0.004,
      "gust": 16.6
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-12 12:00:00",
      "rain": 0.036000000000000004,
      "gust": 23.5
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-12 18:00:00",
      "rain": 0.036000000000000004,
      "gust": 19.0
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-13 00:00:00",
      "rain": 0.185,
      "gust": 16.8
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-13 06:00:00",
      "rain": 0.27799999999999997,
      "gust": 31.1
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-13 12:00:00",
      "rain": 0.533,
      "gust": 37.4
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-13 18:00:00",
      "rain": 2.102,
      "gust": 61.7
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-14 00:00:00",
      "rain": 0.745,
      "gust": 55.3
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-14 06:00:00",
      "rain": 0.07100000000000001,
      "gust": 38.0
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-14 12:00:00",
      "rain": 0.02,
      "gust": 37.1
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-14 18:00:00",
      "rain": 0.0,
      "gust": 25.3
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-15 00:00:00",
      "rain": 0.0,
      "gust": 15.9
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-15 06:00:00",
      "rain": 0.004,
      "gust": 22.1
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-15 12:00:00",
      "rain": 0.008,
      "gust": 25.1
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-15 18:00:00",
      "rain": 0.004,
      "gust": 13.4
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-16 00:00:00",
      "rain": 0.0,
      "gust": 14.1
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-16 06:00:00",
      "rain": 0.004,
      "gust": 14.1
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-16 12:00:00",
      "rain": 0.028,
      "gust": 15.7
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-16 18:00:00",
      "rain": 0.0,
      "gust": 8.5
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-17 00:00:00",
      "rain": 0.0,
      "gust": 5.6
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-17 06:00:00",
      "rain": 0.004,
      "gust": 13.0
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-17 12:00:00",
      "rain": 0.024,
      "gust": 13.4
    },
    {
      "storm": "Nicholas",
      "county": "Brazoria",
      "time": "2021-09-17 18:00:00",
      "rain": 0.0,
      "gust": 7.2
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-12 00:00:00",
      "rain": 0.0,
      "gust": 9.4
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-12 06:00:00",
      "rain": 0.0,
      "gust": 15.9
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-12 12:00:00",
      "rain": 0.0,
      "gust": 21.9
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-12 18:00:00",
      "rain": 0.012,
      "gust": 21.9
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-13 00:00:00",
      "rain": 0.126,
      "gust": 13.9
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-13 06:00:00",
      "rain": 0.325,
      "gust": 20.6
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-13 12:00:00",
      "rain": 0.217,
      "gust": 31.1
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-13 18:00:00",
      "rain": 1.2510000000000001,
      "gust": 48.1
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-14 00:00:00",
      "rain": 1.402,
      "gust": 57.7
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-14 06:00:00",
      "rain": 0.084,
      "gust": 31.5
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-14 12:00:00",
      "rain": 0.012,
      "gust": 32.4
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-14 18:00:00",
      "rain": 0.0,
      "gust": 24.4
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-15 00:00:00",
      "rain": 0.0,
      "gust": 16.3
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-15 06:00:00",
      "rain": 0.004,
      "gust": 22.6
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-15 12:00:00",
      "rain": 0.008,
      "gust": 24.2
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-15 18:00:00",
      "rain": 0.008,
      "gust": 15.4
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-16 00:00:00",
      "rain": 0.0,
      "gust": 11.6
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-16 06:00:00",
      "rain": 0.016,
      "gust": 13.9
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-16 12:00:00",
      "rain": 0.008,
      "gust": 16.6
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-16 18:00:00",
      "rain": 0.0,
      "gust": 11.4
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-17 00:00:00",
      "rain": 0.0,
      "gust": 6.3
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-17 06:00:00",
      "rain": 0.0,
      "gust": 9.6
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-17 12:00:00",
      "rain": 0.024,
      "gust": 11.4
    },
    {
      "storm": "Nicholas",
      "county": "Fort Bend",
      "time": "2021-09-17 18:00:00",
      "rain": 0.0,
      "gust": 9.2
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-12 00:00:00",
      "rain": 0.0,
      "gust": 21.5
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-12 06:00:00",
      "rain": 0.024,
      "gust": 24.4
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-12 12:00:00",
      "rain": 0.06000000000000001,
      "gust": 29.3
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-12 18:00:00",
      "rain": 0.336,
      "gust": 23.5
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-13 00:00:00",
      "rain": 0.173,
      "gust": 26.6
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-13 06:00:00",
      "rain": 0.20900000000000002,
      "gust": 33.6
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-13 12:00:00",
      "rain": 0.44799999999999995,
      "gust": 41.4
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-13 18:00:00",
      "rain": 1.713,
      "gust": 67.1
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-14 00:00:00",
      "rain": 1.73,
      "gust": 67.1
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-14 06:00:00",
      "rain": 0.17,
      "gust": 61.5
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-14 12:00:00",
      "rain": 0.032,
      "gust": 28.6
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-14 18:00:00",
      "rain": 0.0,
      "gust": 27.5
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-15 00:00:00",
      "rain": 0.0,
      "gust": 23.5
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-15 06:00:00",
      "rain": 0.004,
      "gust": 27.7
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-15 12:00:00",
      "rain": 0.028,
      "gust": 30.4
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-15 18:00:00",
      "rain": 0.106,
      "gust": 28.9
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-16 00:00:00",
      "rain": 0.012,
      "gust": 28.6
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-16 06:00:00",
      "rain": 0.016,
      "gust": 22.6
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-16 12:00:00",
      "rain": 0.012,
      "gust": 16.8
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-16 18:00:00",
      "rain": 0.008,
      "gust": 15.7
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-17 00:00:00",
      "rain": 0.0,
      "gust": 11.0
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-17 06:00:00",
      "rain": 0.024,
      "gust": 12.3
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-17 12:00:00",
      "rain": 0.048,
      "gust": 12.8
    },
    {
      "storm": "Nicholas",
      "county": "Galveston",
      "time": "2021-09-17 18:00:00",
      "rain": 0.0,
      "gust": 10.7
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-12 00:00:00",
      "rain": 0.0,
      "gust": 10.7
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-12 06:00:00",
      "rain": 0.0,
      "gust": 16.1
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-12 12:00:00",
      "rain": 0.008,
      "gust": 22.1
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-12 18:00:00",
      "rain": 0.075,
      "gust": 21.5
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-13 00:00:00",
      "rain": 0.339,
      "gust": 15.0
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-13 06:00:00",
      "rain": 0.45999999999999996,
      "gust": 21.7
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-13 12:00:00",
      "rain": 0.36600000000000005,
      "gust": 29.1
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-13 18:00:00",
      "rain": 1.1139999999999999,
      "gust": 50.8
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-14 00:00:00",
      "rain": 2.233,
      "gust": 51.9
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-14 06:00:00",
      "rain": 0.3430000000000001,
      "gust": 31.5
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-14 12:00:00",
      "rain": 0.177,
      "gust": 28.9
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-14 18:00:00",
      "rain": 0.008,
      "gust": 27.3
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-15 00:00:00",
      "rain": 0.0,
      "gust": 18.3
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-15 06:00:00",
      "rain": 0.008,
      "gust": 23.3
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-15 12:00:00",
      "rain": 0.012,
      "gust": 23.7
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-15 18:00:00",
      "rain": 0.004,
      "gust": 18.6
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-16 00:00:00",
      "rain": 0.0,
      "gust": 12.3
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-16 06:00:00",
      "rain": 0.008,
      "gust": 15.4
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-16 12:00:00",
      "rain": 0.02,
      "gust": 13.2
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-16 18:00:00",
      "rain": 0.004,
      "gust": 12.5
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-17 00:00:00",
      "rain": 0.0,
      "gust": 5.6
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-17 06:00:00",
      "rain": 0.0,
      "gust": 12.3
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-17 12:00:00",
      "rain": 0.012,
      "gust": 12.8
    },
    {
      "storm": "Nicholas",
      "county": "Harris",
      "time": "2021-09-17 18:00:00",
      "rain": 0.004,
      "gust": 8.7
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-12 00:00:00",
      "rain": 0.0,
      "gust": 10.1
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-12 06:00:00",
      "rain": 0.0,
      "gust": 13.4
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-12 12:00:00",
      "rain": 0.0,
      "gust": 23.7
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-12 18:00:00",
      "rain": 0.028,
      "gust": 21.5
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-13 00:00:00",
      "rain": 0.272,
      "gust": 12.5
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-13 06:00:00",
      "rain": 0.354,
      "gust": 15.0
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-13 12:00:00",
      "rain": 0.28,
      "gust": 24.4
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-13 18:00:00",
      "rain": 0.371,
      "gust": 28.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-14 00:00:00",
      "rain": 1.137,
      "gust": 43.8
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-14 06:00:00",
      "rain": 0.37000000000000005,
      "gust": 36.0
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-14 12:00:00",
      "rain": 0.119,
      "gust": 28.9
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-14 18:00:00",
      "rain": 0.016,
      "gust": 25.5
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-15 00:00:00",
      "rain": 0.0,
      "gust": 17.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-15 06:00:00",
      "rain": 0.0,
      "gust": 25.7
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-15 12:00:00",
      "rain": 0.004,
      "gust": 24.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-15 18:00:00",
      "rain": 0.0,
      "gust": 13.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-16 00:00:00",
      "rain": 0.0,
      "gust": 11.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-16 06:00:00",
      "rain": 0.004,
      "gust": 19.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-16 12:00:00",
      "rain": 0.008,
      "gust": 14.5
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-16 18:00:00",
      "rain": 0.0,
      "gust": 10.3
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-17 00:00:00",
      "rain": 0.0,
      "gust": 5.1
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-17 06:00:00",
      "rain": 0.004,
      "gust": 13.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-17 12:00:00",
      "rain": 0.0,
      "gust": 13.2
    },
    {
      "storm": "Nicholas",
      "county": "Montgomery",
      "time": "2021-09-17 18:00:00",
      "rain": 0.0,
      "gust": 6.5
    }
  ],
  "tracks_summary": {
    "rows": 2784,
    "unique_storms": 57,
    "first_year": 1980,
    "last_year": 2026
  },
  "insights": {
    "zone_x_claims": 29399,
    "zone_x_share": 0.48982005998000666
  },
  "sources": {
    "folder": "https://drive.google.com/drive/folders/1doFLc1xXvUDTBvoDg0wmebjGIaaCCy0a",
    "brief": "https://docs.google.com/document/d/1n9FrZHastJOO1jy2f6X_PbYukTuAnrWgbJugyTK3lkw/edit"
  },
  "limitations": [
    "Four historical storms and five counties; many claims do not mean many independent storms.",
    "Weather is full-window historical reanalysis at one county reference point, not a forecast or a county-wide measurement.",
    "Storm windows differ in length; rainfall totals are window-specific scenario descriptors.",
    "Predictions are conditional on a recorded insured claim, not flood probability, total community losses, or a payout.",
    "The model excludes unreported damage, uninsured homes, missing damage labels, and coverage outside $1-$250,000.",
    "Amounts are nominal dollars without inflation adjustment; policy rules and coding changed over time.",
    "No outage target file was supplied, so no outage or restoration predictions are made.",
    "No property ID supplied, so the same property could appear in more than one storm.",
    "Unknown flood zones are included in OTHER; X is a recorded zone label and does not mean no flood risk.",
    "The candidate model failed the Beryl check and is not used to generate planning estimates."
  ]
};
window.COUNTY_GEOJSON={
"type": "FeatureCollection",
"name": "greater_houston_counties",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": "48339", "GEO_ID": "0500000US48339", "STATE": "48", "COUNTY": "339", "NAME": "Montgomery", "LSAD": "County", "CENSUSAREA": 1041.735, "county_name": "Montgomery" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -95.096708, 30.167214 ], [ -95.264013, 30.032217 ], [ -95.505125, 30.145153 ], [ -95.551421, 30.170606 ], [ -95.65543, 30.108994 ], [ -95.80333, 30.090096 ], [ -95.804306, 30.24557 ], [ -95.804351, 30.3378 ], [ -95.83024, 30.630284 ], [ -95.598971, 30.509002 ], [ -95.359156, 30.504369 ], [ -95.308395, 30.40575 ], [ -95.165897, 30.344976 ], [ -95.096708, 30.167214 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48015", "GEO_ID": "0500000US48015", "STATE": "48", "COUNTY": "015", "NAME": "Austin", "LSAD": "County", "CENSUSAREA": 646.508, "county_name": "Austin" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -96.62198, 30.044283 ], [ -96.292849, 30.09615 ], [ -96.146052, 30.070224 ], [ -96.084541, 30.005137 ], [ -96.122754, 29.968545 ], [ -96.121313, 29.841963 ], [ -96.049234, 29.803187 ], [ -96.032711, 29.727944 ], [ -96.02485, 29.602877 ], [ -96.088912, 29.601658 ], [ -96.175422, 29.633806 ], [ -96.259226, 29.668912 ], [ -96.344476, 29.830147 ], [ -96.413283, 29.824985 ], [ -96.569844, 29.961516 ], [ -96.62198, 30.044283 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48039", "GEO_ID": "0500000US48039", "STATE": "48", "COUNTY": "039", "NAME": "Brazoria", "LSAD": "County", "CENSUSAREA": 1357.701, "county_name": "Brazoria" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -95.424118, 29.580233 ], [ -95.297409, 29.596514 ], [ -95.216422, 29.55608 ], [ -95.216788, 29.554643 ], [ -95.217702, 29.549503 ], [ -95.217794, 29.548449 ], [ -95.219169, 29.541283 ], [ -95.219395, 29.539122 ], [ -95.219813, 29.536757 ], [ -95.220748, 29.532688 ], [ -95.221212, 29.529137 ], [ -95.221862, 29.526521 ], [ -95.223994, 29.514422 ], [ -95.225168, 29.503974 ], [ -95.229732, 29.480714 ], [ -95.231803, 29.472607 ], [ -95.233081, 29.465566 ], [ -95.056528, 29.199934 ], [ -95.119271, 29.077844 ], [ -95.122525, 29.074 ], [ -95.125134, 29.067321 ], [ -95.191391, 29.02309 ], [ -95.238924, 28.988644 ], [ -95.272266, 28.961546 ], [ -95.297147, 28.934073 ], [ -95.309704, 28.928262 ], [ -95.353451, 28.898145 ], [ -95.376979, 28.87616 ], [ -95.38239, 28.866348 ], [ -95.416174, 28.859482 ], [ -95.439594, 28.859022 ], [ -95.486769, 28.836287 ], [ -95.507041, 28.824755 ], [ -95.567708, 28.829758 ], [ -95.67955, 28.965734 ], [ -95.764937, 28.967359 ], [ -95.770446, 29.06621 ], [ -95.84631, 29.107799 ], [ -95.874028, 29.229702 ], [ -95.841948, 29.258707 ], [ -95.847656, 29.26259 ], [ -95.752866, 29.324503 ], [ -95.654355, 29.290945 ], [ -95.579598, 29.340129 ], [ -95.549994, 29.438439 ], [ -95.462503, 29.43924 ], [ -95.443224, 29.510214 ], [ -95.424118, 29.580233 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48291", "GEO_ID": "0500000US48291", "STATE": "48", "COUNTY": "291", "NAME": "Liberty", "LSAD": "County", "CENSUSAREA": 1158.417, "county_name": "Liberty" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -95.165897, 30.344976 ], [ -95.03246, 30.404091 ], [ -95.024589, 30.406903 ], [ -94.849414, 30.493553 ], [ -94.777341, 30.489002 ], [ -94.732732, 30.490066 ], [ -94.603159, 30.130904 ], [ -94.44491, 30.113015 ], [ -94.445096, 30.110966 ], [ -94.442235, 29.889538 ], [ -94.98146, 29.884276 ], [ -94.985364, 29.972279 ], [ -95.031179, 29.993324 ], [ -95.096708, 30.167214 ], [ -95.165897, 30.344976 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48157", "GEO_ID": "0500000US48157", "STATE": "48", "COUNTY": "157", "NAME": "Fort Bend", "LSAD": "County", "CENSUSAREA": 861.481, "county_name": "Fort Bend" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -95.688349, 29.710862 ], [ -95.687994, 29.710667 ], [ -95.687082, 29.710078 ], [ -95.610025, 29.66699 ], [ -95.537948, 29.633282 ], [ -95.44697, 29.590978 ], [ -95.440415, 29.588065 ], [ -95.435618, 29.585633 ], [ -95.424118, 29.580233 ], [ -95.443224, 29.510214 ], [ -95.462503, 29.43924 ], [ -95.549994, 29.438439 ], [ -95.579598, 29.340129 ], [ -95.654355, 29.290945 ], [ -95.752866, 29.324503 ], [ -95.847656, 29.26259 ], [ -95.8796, 29.266761 ], [ -95.894468, 29.31498 ], [ -95.94681, 29.333433 ], [ -95.937434, 29.358086 ], [ -95.97343, 29.411445 ], [ -96.060676, 29.476473 ], [ -96.044596, 29.562238 ], [ -96.088912, 29.601658 ], [ -96.02485, 29.602877 ], [ -96.032711, 29.727944 ], [ -95.82622, 29.78828 ], [ -95.688349, 29.710862 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48201", "GEO_ID": "0500000US48201", "STATE": "48", "COUNTY": "201", "NAME": "Harris", "LSAD": "County", "CENSUSAREA": 1703.478, "county_name": "Harris" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -95.688349, 29.710862 ], [ -95.82622, 29.78828 ], [ -95.960733, 30.163415 ], [ -95.80333, 30.090096 ], [ -95.65543, 30.108994 ], [ -95.551421, 30.170606 ], [ -95.505125, 30.145153 ], [ -95.264013, 30.032217 ], [ -95.096708, 30.167214 ], [ -95.031179, 29.993324 ], [ -94.985364, 29.972279 ], [ -94.98146, 29.884276 ], [ -94.908654, 29.825181 ], [ -94.931154, 29.673874 ], [ -94.934167, 29.678682 ], [ -94.936089, 29.692704 ], [ -94.942681, 29.697778 ], [ -94.965963, 29.70033 ], [ -94.972666, 29.68487 ], [ -94.988924, 29.672202 ], [ -95.005398, 29.659366 ], [ -95.005648, 29.658985 ], [ -95.006381, 29.657871 ], [ -95.007623, 29.65598 ], [ -95.011025, 29.650803 ], [ -95.011683, 29.649802 ], [ -95.01272, 29.647088 ], [ -95.013777, 29.644322 ], [ -95.015636, 29.639457 ], [ -95.0156, 29.639285 ], [ -95.013623, 29.62979 ], [ -95.013499, 29.629194 ], [ -95.01166, 29.627768 ], [ -95.000781, 29.619331 ], [ -95.00046, 29.619082 ], [ -94.999481, 29.618323 ], [ -94.999082, 29.618014 ], [ -94.988871, 29.610095 ], [ -94.984831, 29.604361 ], [ -94.982936, 29.60167 ], [ -94.982706, 29.601344 ], [ -94.982855, 29.601103 ], [ -94.982923, 29.600992 ], [ -94.988993, 29.591155 ], [ -95.00767, 29.574257 ], [ -95.016145, 29.559336 ], [ -95.016353, 29.55897 ], [ -95.016627, 29.558487 ], [ -95.016672, 29.558388 ], [ -95.018253, 29.554885 ], [ -95.018198, 29.554618 ], [ -95.018191, 29.554584 ], [ -95.163927, 29.498051 ], [ -95.216422, 29.55608 ], [ -95.297409, 29.596514 ], [ -95.424118, 29.580233 ], [ -95.435618, 29.585633 ], [ -95.440415, 29.588065 ], [ -95.44697, 29.590978 ], [ -95.537948, 29.633282 ], [ -95.610025, 29.66699 ], [ -95.687082, 29.710078 ], [ -95.687994, 29.710667 ], [ -95.688349, 29.710862 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48473", "GEO_ID": "0500000US48473", "STATE": "48", "COUNTY": "473", "NAME": "Waller", "LSAD": "County", "CENSUSAREA": 513.43, "county_name": "Waller" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -95.871864, 30.241108 ], [ -95.842138, 30.243445 ], [ -95.804872, 30.245645 ], [ -95.804306, 30.24557 ], [ -95.80333, 30.090096 ], [ -95.960733, 30.163415 ], [ -95.82622, 29.78828 ], [ -96.032711, 29.727944 ], [ -96.049234, 29.803187 ], [ -96.121313, 29.841963 ], [ -96.122754, 29.968545 ], [ -96.084541, 30.005137 ], [ -96.146052, 30.070224 ], [ -96.191418, 30.134669 ], [ -96.15901, 30.206613 ], [ -96.093165, 30.225187 ], [ -95.872022, 30.241097 ], [ -95.871864, 30.241108 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48071", "GEO_ID": "0500000US48071", "STATE": "48", "COUNTY": "071", "NAME": "Chambers", "LSAD": "County", "CENSUSAREA": 597.137, "county_name": "Chambers" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -94.370866, 29.55507 ], [ -94.371828, 29.597178 ], [ -94.408992, 29.597467 ], [ -94.412771, 29.572612 ], [ -94.511086, 29.542971 ], [ -94.522421, 29.545672 ], [ -94.523743, 29.545987 ], [ -94.526336, 29.552634 ], [ -94.532021, 29.558379 ], [ -94.541108, 29.567561 ], [ -94.542532, 29.569 ], [ -94.546385, 29.572048 ], [ -94.553988, 29.573882 ], [ -94.570006, 29.572232 ], [ -94.570593, 29.571878 ], [ -94.570867, 29.571713 ], [ -94.578211, 29.567281 ], [ -94.593518, 29.561319 ], [ -94.610147, 29.556947 ], [ -94.618028, 29.554875 ], [ -94.621819, 29.553878 ], [ -94.621953, 29.553843 ], [ -94.62589, 29.552808 ], [ -94.682706, 29.539825 ], [ -94.689353, 29.538306 ], [ -94.691625, 29.537787 ], [ -94.718276, 29.533547 ], [ -94.740699, 29.525858 ], [ -94.755514, 29.524776 ], [ -94.757689, 29.524617 ], [ -94.757788, 29.524626 ], [ -94.757883, 29.524635 ], [ -94.767246, 29.525523 ], [ -94.768676, 29.525659 ], [ -94.769418, 29.525988 ], [ -94.769573, 29.526057 ], [ -94.77084, 29.526618 ], [ -94.774571, 29.528271 ], [ -94.774798, 29.528372 ], [ -94.779674, 29.530533 ], [ -94.779708, 29.530548 ], [ -94.779831, 29.530602 ], [ -94.780938, 29.531093 ], [ -94.783296, 29.535314 ], [ -94.784034, 29.536635 ], [ -94.786512, 29.541073 ], [ -94.786649, 29.541319 ], [ -94.78954, 29.546494 ], [ -94.790605, 29.548401 ], [ -94.779439, 29.549472 ], [ -94.771053, 29.548439 ], [ -94.755237, 29.562782 ], [ -94.734626, 29.584046 ], [ -94.708741, 29.625226 ], [ -94.693154, 29.694453 ], [ -94.692434, 29.70361 ], [ -94.695317, 29.723052 ], [ -94.724616, 29.774766 ], [ -94.735271, 29.785433 ], [ -94.740919, 29.787081 ], [ -94.771512, 29.773889 ], [ -94.792238, 29.767433 ], [ -94.816085, 29.75671 ], [ -94.851108, 29.721373 ], [ -94.865007, 29.695337 ], [ -94.867438, 29.678768 ], [ -94.872551, 29.67125 ], [ -94.893107, 29.661336 ], [ -94.915413, 29.656614 ], [ -94.921318, 29.658178 ], [ -94.931154, 29.673874 ], [ -94.908654, 29.825181 ], [ -94.98146, 29.884276 ], [ -94.442235, 29.889538 ], [ -94.357976, 29.887464 ], [ -94.354163, 29.561459 ], [ -94.370866, 29.55507 ] ] ] } },
{ "type": "Feature", "properties": { "id": "48167", "GEO_ID": "0500000US48167", "STATE": "48", "COUNTY": "167", "NAME": "Galveston", "LSAD": "County", "CENSUSAREA": 378.358, "county_name": "Galveston" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -94.370866, 29.55507 ], [ -94.500807, 29.505367 ], [ -94.594853, 29.467903 ], [ -94.631084, 29.451464 ], [ -94.670389, 29.43078 ], [ -94.694158, 29.415632 ], [ -94.708473, 29.403049 ], [ -94.723959, 29.383268 ], [ -94.731047, 29.369141 ], [ -94.744834, 29.369158 ], [ -94.761491, 29.361883 ], [ -94.778691, 29.361483 ], [ -94.782356, 29.364266 ], [ -94.783131, 29.375642 ], [ -94.766848, 29.393489 ], [ -94.7541, 29.401 ], [ -94.723818, 29.426536 ], [ -94.706365, 29.436805 ], [ -94.686386, 29.466509 ], [ -94.681541, 29.471389 ], [ -94.6724, 29.476843 ], [ -94.665853, 29.478401 ], [ -94.656737, 29.478033 ], [ -94.645948, 29.473769 ], [ -94.628217, 29.475986 ], [ -94.608557, 29.483345 ], [ -94.594211, 29.492127 ], [ -94.59544, 29.507669 ], [ -94.591407, 29.513858 ], [ -94.580274, 29.525295 ], [ -94.566674, 29.531988 ], [ -94.55399, 29.529559 ], [ -94.546994, 29.524379 ], [ -94.532348, 29.5178 ], [ -94.511045, 29.51965 ], [ -94.495025, 29.525031 ], [ -94.503429, 29.54325 ], [ -94.509487, 29.54259 ], [ -94.511086, 29.542971 ], [ -94.412771, 29.572612 ], [ -94.408992, 29.597467 ], [ -94.371828, 29.597178 ], [ -94.370866, 29.55507 ] ] ], [ [ [ -95.223994, 29.514422 ], [ -95.221862, 29.526521 ], [ -95.221212, 29.529137 ], [ -95.220748, 29.532688 ], [ -95.219813, 29.536757 ], [ -95.219395, 29.539122 ], [ -95.219169, 29.541283 ], [ -95.217794, 29.548449 ], [ -95.217702, 29.549503 ], [ -95.216788, 29.554643 ], [ -95.216422, 29.55608 ], [ -95.163927, 29.498051 ], [ -95.018191, 29.554584 ], [ -95.016889, 29.548303 ], [ -95.015165, 29.539989 ], [ -95.013378, 29.537822 ], [ -94.999581, 29.521093 ], [ -94.981916, 29.511141 ], [ -94.958443, 29.505013 ], [ -94.934876, 29.501079 ], [ -94.933483, 29.500847 ], [ -94.933039, 29.500773 ], [ -94.909898, 29.49691 ], [ -94.909465, 29.496838 ], [ -94.913385, 29.487254 ], [ -94.925914, 29.469047 ], [ -94.930861, 29.450504 ], [ -94.919401, 29.448031 ], [ -94.8908, 29.433432 ], [ -94.8873, 29.415132 ], [ -94.886536, 29.366386 ], [ -94.894234, 29.338 ], [ -94.893994, 29.30817 ], [ -94.886536, 29.297826 ], [ -94.875952, 29.293015 ], [ -94.865126, 29.293977 ], [ -94.84973, 29.297345 ], [ -94.824953, 29.306005 ], [ -94.822547, 29.321882 ], [ -94.822307, 29.344254 ], [ -94.810696, 29.353435 ], [ -94.784895, 29.335535 ], [ -94.779995, 29.334935 ], [ -94.777064, 29.336811 ], [ -94.745529, 29.334235 ], [ -94.744945, 29.33641 ], [ -94.73132, 29.338066 ], [ -94.72253, 29.331446 ], [ -94.731082, 29.331833 ], [ -94.769695, 29.304936 ], [ -94.786095, 29.290737 ], [ -94.803695, 29.279237 ], [ -95.026219, 29.148064 ], [ -95.081773, 29.111222 ], [ -95.110484, 29.088224 ], [ -95.119271, 29.077844 ], [ -95.056528, 29.199934 ], [ -95.233081, 29.465566 ], [ -95.231803, 29.472607 ], [ -95.229732, 29.480714 ], [ -95.225168, 29.503974 ], [ -95.223994, 29.514422 ] ] ] ] } }
]
}
;
