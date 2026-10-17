# Translation leakage kopsavilkums

Šis audits klasificē tulkojumu sakritības. Tas nepiedāvā pareizo tulkojumu un nemaina datus.

STAGE RESULT: PARTIAL. data/www: IDENTICAL. Ieraksti: 8618.

## Stingrās grupas

- fi+is+nb+nn+sv: pāru summa 73510
- bg+hr+mk+ru+sr: pāru summa 57789
- it+lb+nl+pt: pāru summa 29741
- pl+sk+sq+tr: pāru summa 22983

## A1 pret A2–C2, ≥ 20 procentpunkti

| valoda | rādītājs | A1 % | A2–C2 % | pp |
|---|---|---:|---:|---:|
| sl | SAME_AS_LV_CASEFOLD | 1.28 | 99.77 | -98.49 |
| lb | FAMILY_COPY_STRICT | 10.11 | 92.82 | -82.71 |
| lb | SAME_AS_LV_CASEFOLD | 8.26 | 89.21 | -80.95 |
| sq | FAMILY_COPY_STRICT | 13.25 | 91.34 | -78.09 |
| tr | FAMILY_COPY_STRICT | 13.82 | 91.38 | -77.56 |
| pl | FAMILY_COPY_STRICT | 8.97 | 83.31 | -74.33 |
| sl | LV_DIACRITIC | 1.42 | 71.46 | -70.03 |
| sl | MARKER_LEAK | 1.42 | 71.46 | -70.03 |
| nl | FAMILY_COPY_STRICT | 32.76 | 95.58 | -62.81 |
| lb | LV_DIACRITIC | 6.84 | 67.79 | -60.95 |
| sk | FAMILY_COPY_STRICT | 22.08 | 81.44 | -59.36 |
| lb | MARKER_LEAK | 5.98 | 65.04 | -59.06 |
| it | SAME_AS_LV_CASEFOLD | 24.50 | 81.02 | -56.52 |
| it | LV_DIACRITIC | 12.39 | 63.39 | -50.99 |
| it | MARKER_LEAK | 9.83 | 60.46 | -50.63 |
| ru | FAMILY_COPY_STRICT | 15.10 | 59.87 | -44.77 |
| it | FAMILY_COPY_STRICT | 47.86 | 90.72 | -42.85 |
| sk | MARKER_LEAK | 0.00 | 34.93 | -34.93 |
| pt | LV_DIACRITIC | 8.26 | 41.88 | -33.62 |
| pt | MARKER_LEAK | 6.70 | 38.62 | -31.92 |
| nl | MARKER_LEAK | 37.18 | 68.00 | -30.82 |
| hr | MARKER_LEAK | 64.96 | 94.77 | -29.82 |
| hr | SCRIPT_MISMATCH | 64.96 | 94.77 | -29.82 |
| nl | LV_DIACRITIC | 41.60 | 70.94 | -29.35 |
| sr | MARKER_LEAK | 32.76 | 5.45 | 27.31 |
| sr | SCRIPT_MISMATCH | 32.76 | 5.45 | 27.31 |
| bg | FAMILY_COPY_STRICT | 66.38 | 92.72 | -26.34 |
| sq | MARKER_LEAK | 2.56 | 26.81 | -24.24 |
| sl | FAMILY_COPY_STRICT | 23.22 | 0.00 | 23.22 |
| bs | FAMILY_COPY_STRICT | 23.93 | 2.48 | 21.45 |
| pt | SAME_AS_LV_CASEFOLD | 16.95 | 37.92 | -20.97 |

INCONSISTENT_DUPLICATE pāri: 53. Augstākais % DIFFERENT: sl.

Pilnās tabulas ir reports/translation-leakage.md. Rindu saraksts ir reports/translation-leakage-hits/.

