# BS–DE B2 — regression fixes apply report

**Datums:** 2026-08-08
**OpenAI API requests:** 0

## Input

| Metrika | Skaits |
|---|---:|
| regression findings | 67 |
| SOURCE_PENDING (not applied) | 6 |
| actual BS patch candidates | 67 |

## Apply

| Status | Count |
|---|---:|
| APPLIED | 67 |
| ALREADY_FIXED | 0 |
| STALE_CURRENT_TEXT | 0 |
| PATCH_CONFLICT | 0 |
| NOT_FOUND | 0 |
| SOURCE_PENDING | 6 |

## Severity applied

| Severity | Applied |
|---|---:|
| CRITICAL | 0 |
| HIGH | 5 |
| MEDIUM | 56 |
| LOW | 6 |

## Pattern applied

- semantic: 29
- grammar: 28
- en_remnant: 10

## Pending owner review

- SOURCE_LV_ISSUE total: 10
- DE_SOURCE_ISSUE: 1
- NEEDS_REVIEW: 2
- STALE_AFTER_AUDIT: 4
- NEW_POST_REGRESSION_FIX_CANDIDATE: 0

## Validation

- **syntax:** PASS
- **mirror:** PASS
- **deReadOnly:** PASS
- **parity:** PASS
- **cardCount:** 2118
- **studyCount:** 60
- **mojibake:** PASS
- **sectionAccentsTechnical:** 0

- post-apply verify ok/fail: 67/0
- verify scope cards: 42

**BS–DE B2 REGRESSION FIXES = APPLIED**
