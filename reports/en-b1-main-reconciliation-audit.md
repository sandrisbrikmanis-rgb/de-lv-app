# EN–DE B1 MAIN RECONCILIATION AUDIT

**Generated:** 2026-08-09T14:48:19.356Z
**Main commit:** dcdc1f33b68f9eceafec5cfbb3febe40650a5814

## FINAL RESULT: EN–DE B1 MAIN RECONCILIATION: PASS

ALL APPROVED EN–DE B1 REPAIRS ARE PRESENT IN `main`

FINAL CLOSURE STATUS: NOT YET RECONFIRMED — TARGETED REGRESSION REQUIRED

## Baseline

- Initial FULL AUDIT: 3367/3367
- Initial repair candidates: 57
- 57 candidates reconciled in main: 42/57

## Workflow coverage

- Repair cycles discovered: 19
- Repair cycles reconciled: 19
- HIGH #1–#13 represented: 13/13
- Regression repair chain: PASS
- SectionAccent cleanup: PASS

## Repair reconciliation arithmetic

- OWNER-approved repair findings represented: 1245
- Final authoritative mappings: 1140
- Present in current main: 1140
- Missing from current main: 0
- Superseded by later approved repair: 0
- Field/identity unresolved: 0

## HIGH #1–#5 summary

| Cycle | Approved | Present in main | Missing | Superseded |
| --- | --- | --- | --- | --- |
| HIGH #1 | 59 | 49 | 2 | 8 |
| HIGH #2 | 26 | 26 | 0 | 0 |
| HIGH #3 | 25 | 25 | 0 | 0 |
| HIGH #4 | 25 | 25 | 0 | 0 |
| HIGH #5 | 24 | 24 | 0 | 0 |

## HIGH #6–#13 summary

| Cycle | Approved | Present in main | Missing | Superseded |
| --- | --- | --- | --- | --- |
| HIGH #6 | 25 | 25 | 0 | 0 |
| HIGH #7 | 24 | 24 | 0 | 0 |
| HIGH #8 | 50 | 50 | 0 | 0 |
| HIGH #9 | 50 | 50 | 0 | 0 |
| HIGH #10 | 123 | 112 | 10 | 1 |
| HIGH #11 | 167 | 151 | 6 | 5 |
| HIGH #12 | 179 | 164 | 2 | 10 |
| HIGH #13 | 149 | 140 | 3 | 6 |

## Regression / micro / sectionAccent

- Regression 214/214 in main: 200/200
- Micro-regression 16/16: 16/16
- SectionAccent 24/24: 24/24
- Full-string integrity (14 explanations): 14/14
- Truncated values in main: 0

## Current main validators

| Check | Result |
| --- | --- |
| javascript | PASS |
| auditLanguageParity | PASS |
| auditTranslations | PASS |
| auditMojibake | PASS |
| validateStudyDesign | FAIL |
| mirrorParity | PASS |
| deReadOnly | PASS |
| Cards | 3367 |
| Study objects | 324/324 |

## sectionAccents

- Raw validator findings: 0
- Known false positives: 0
- Validated real findings: 0
- Unexpected findings: 0

Production changes during audit: 0