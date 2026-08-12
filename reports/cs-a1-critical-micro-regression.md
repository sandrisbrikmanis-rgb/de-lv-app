# CS–DE A1 CRITICAL MICRO-REGRESSION

## KOPSAVILKUMS

- Audit type: CRITICAL MICRO-REGRESSION (read-only)
- Model: GPT-5.6 Luna
- Repair commit audited: `fd0926c3` (production state at `fb84f93b`)
- Production changes: 0
- **CS–DE A1 CRITICAL = CLOSED**

## COVERAGE

| Metrika | Vērtība |
|---|---|
| Changed cards expected (repair report) | 23 |
| Changed cards in repair data (unique) | 24 |
| Changed cards audited | 24/24 |
| FALSE_POSITIVE controls | 2/2 |
| Missing | 0 |
| Duplicate | 0 |

## CRITICAL VALIDATION (Luna)

| Status | Count |
|---|---|
| CONFIRMED_REAL | 4 |
| FALSE_POSITIVE | 1 |
| STALE | 9 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_OWNER_REVIEW | 11 |
| CONFIRMED_REAL CRITICAL | 0 |
| NEEDS_OWNER_REVIEW CRITICAL | 0 |

## REPAIR INTEGRITY

| Metrika | Vērtība |
|---|---|
| Expected repaired fields | 33 |
| Retained OWNER values | 33/33 |
| Reverted | 0 |
| DE changes (repair commit) | 0 |
| Unexpected changes | 0 |



## FALSE_POSITIVE CONTROLS

| Card | Field | Expected | Verified |
|---|---|---|---|
| a1-in | study.sectionAccents.examples[0].lv.purple[0] | Berlīnē | PASS (Berlīnē retained) |
| a1-Baum-74 | lv | Strom | PASS (Strom retained) |

## TECHNICAL

| Check | Result |
|---|---|
| cards | 702 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |

## LUNA FINDINGS

_Nav CONFIRMED_REAL CRITICAL atradumu._


## PASS CRITERIA

| Kritērijs | Rezultāts |
|---|---|
| CONFIRMED_REAL CRITICAL = 0 | PASS |
| NEEDS_OWNER_REVIEW CRITICAL = 0 | PASS |
| 33/33 OWNER values retained | PASS |
| DE changes = 0 | PASS |
| ID/order = PASS | PASS |
| syntax = PASS | PASS |
| mirror = PASS | PASS |

---

_Audita datums: 2026-08-11_
_Luna requests: 7, tokens: 59278_
