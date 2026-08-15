# CS–DE Kurss Výslovnost — OWNER decisions 101–150

READ-ONLY documentation. **Production changes: 0**

## Summary

| Verdict | Count |
|---------|-------|
| LABOT (finding rows) | 46 |
| NELABOT | 1 (#102) |
| FALSE_POSITIVE | 3 (#109, #124, #127) |
| Deduplicated LABOT apply targets (this batch) | **32** |

## OWNER overrides vs Luna

- **#102:** NELABOT — īss kopsavilkuma noteikums Qu→kv / ß→s kontekstā.
- **#109:** FALSE_POSITIVE — ī špīlen ir garuma zīme; reāls fix #110.
- **#110:** noņemt neredzamos simboli; špílen paliek.
- **#118:** sitzen (zicen), ne Luna cicen.
- **#124:** FALSE_POSITIVE — Mädchen (mētchen) pareizs.
- **#127:** FALSE_POSITIVE — garuma apzīmējumi; typo #128.
- **#134–135:** deutlich (dojtlich), ne doitlich.
- **#140–141:** saglabāt ü müller/bücher, ne miller/býcher.
- **#148–150:** Německé o — lokalizēta pedagoģiskā doma, ne LV uo.

## Duplicate targets (one apply per target)

| Primary | Duplicate rows |
|---------|----------------|
| 105 | 106 |
| 110 | 109 (FP, same target) |
| 119 | 120 |
| 121 | 122 |
| 128 | 127 (FP, same target) |
| 130 | 131 |
| 132 | 133 |
| 134 | 135 |
| 136 | 137 |
| 138 | 139 |
| 140 | 141 |
| 142 | 143 |
| 145 | 146, 147 |
| 148 | 149, 150 |

## Apply map

Partial JSON: `reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-101-150.json`

**DE = 0**, **LV MASTER = 0**.
