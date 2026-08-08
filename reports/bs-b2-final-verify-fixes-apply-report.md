# BS–DE B2 — final verify fixes apply report

**Datums:** 2026-08-08
**OpenAI API requests:** 0

## Input

- findings = 9
- cards = 5

## Apply

| Status | Count |
|---|---:|
| APPLIED | 9 |
| ALREADY_FIXED | 0 |
| STALE_CURRENT_TEXT | 0 |
| PATCH_CONFLICT | 0 |
| NOT_FOUND | 0 |

## Severity

| Severity | Applied |
|---|---:|
| MEDIUM | 8 |
| LOW | 1 |

## Cards

- **b2-durchbrennen-470**: lv (APPLIED)
- **b2-sich-hingeben**: study.rektion (APPLIED)
- **b2-sich-revanchieren**: study.rektion (APPLIED), study.explanation (APPLIED), study.forms (APPLIED)
- **b2-sich-verlaufen**: study.explanation (APPLIED)
- **b2-sich-verwundern**: study.rektion (APPLIED), study.explanation (APPLIED), study.forms (APPLIED)

## Validation

- syntax: PASS
- DE READ-ONLY: PASS
- sectionAccents TECHNICAL: 0
- data ≡ www: PASS
- card count: 2118
- study count: 60
- post-apply verify: 9/9
- sectionAccents updates: 2 (b2-sich-revanchieren, b2-sich-verwundern — stale red fragments removed)

**BS–DE B2 FINAL VERIFY FIXES = APPLIED**
