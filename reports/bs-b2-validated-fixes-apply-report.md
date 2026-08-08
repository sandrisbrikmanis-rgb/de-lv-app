# BS–DE B2 — validated fixes apply report

**Datums:** 2026-08-08  
**OpenAI API requests:** 0  
**Helper script:** `scripts/apply-bs-b2-validated-fixes.js`

## Input

| Metrika | Skaits |
|---|---:|
| validated FIX expected | 1072 |
| manifest FIX found | 1072 |
| unique target cards | 947 |
| patch conflicts (manifest) | 0 |

## Apply

| Status | Count |
|---|---:|
| APPLIED | 1071 |
| ALREADY_FIXED | 1 |
| STALE_CURRENT_TEXT | 0 |
| PATCH_CONFLICT | 0 |
| NOT_FOUND | 0 |

## By severity

| Severity | Expected | Applied |
|---|---:|---:|
| CRITICAL | 13 | 13 |
| HIGH | 694 | 694 |
| MEDIUM | 347 | 346 |
| LOW | 18 | 18 |

## By validation method

| Method | Applied |
|---|---:|
| deterministic | 95 |
| Luna | 976 |

## Patterns

| Pattern | Applied |
|---|---:|
| formsLabel | 43 |
| cache_collision | 2 |
| EN remnants | 47 |
| ekavism | 50 |
| semantic | 745 |
| grammar | 184 |

## sectionAccents

| Metrika | Vērtība |
|---|---:|
| affected Study cards (post-apply sync) | 4 |
| accent updates | 4 |
| TECHNICAL findings after fix | 0 |

Post-apply `fix-bs-b2-section-accents.js` synced accents on: `b2-haube`, `b2-aendern`, `b2-wechseln`, `b2-foerdern`.

## Validation

| Check | Result |
|---|---|
| Syntax | PASS |
| UTF-8 / Mojibake | PASS / 0 |
| Card count | 2118 |
| Study count | 60 (standardStudy=15, minimalStudy=45) |
| ID parity | PASS |
| Structural parity | PASS |
| DE READ-ONLY | PASS |
| LV remnants | 0 |
| EN remnants | 0 |
| sectionAccents TECHNICAL | 0 |
| data ≡ www | PASS |

## Remaining manual/source scope

| Category | Count |
|---|---:|
| SOURCE_LV_ISSUE | 4 |
| DE_SOURCE_ISSUE | 1 |
| NEEDS_REVIEW | 2 |
| STALE_AFTER_AUDIT | 4 |
| NEW_POST_FIX_CANDIDATE | 0 |

Owner review pending: `reports/temp/bs-b2-owner-review-pending.json`

## Regression scope

Post-fix targeted regression scope: **947 cards**  
File: `reports/temp/bs-b2-post-fix-regression-scope.json`

## Notes

- 1 ALREADY_FIXED: `b2-These-1732` lv `Teza` → `Teza` (no-op).
- Card ID resolution handled manifest umlaut/index mismatches via `de` field lookup (e.g. `b2-sich-empören` → `b2-sich-empoeren`, `b2-durchschlagen-483` → `b2-durchschlagen-484`).
- Array `study.tip` / `study.important` patches applied via exact single-occurrence substring guard.

**BS–DE B2 VALIDATED FIXES = APPLIED**
