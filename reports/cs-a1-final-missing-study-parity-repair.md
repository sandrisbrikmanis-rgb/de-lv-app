# CS–DE A1 Final MISSING STUDY PARITY Repair

OWNER/ChatGPT authoritative Study content applied mechanically.

## Summary

| Metric | Value |
|---|---|
| requested cards | **14** |
| processed | **14/14** |
| FULL_STUDY_CREATED | **10** |
| FULL_STUDY_REPLACED | **4** |
| mapping mismatch | **0** |
| sectionAccent mismatch | **10** |
| MISSING_STUDY_PARITY before | **14** |
| MISSING_STUDY_PARITY after | **0** |

## Per-card results

| # | cardId | DE | action | status | hasStudy | sectionAccents |
|---|---|---|---|---|---|---|
| 1 | a1-Besuch-87 | Besuch | CREATE | FULL_STUDY_CREATED | true | 0 |
| 2 | a1-besuchen-89 | besuchen | CREATE | FULL_STUDY_CREATED | true | 2 |
| 3 | a1-bitte | bitte | REPLACE | FULL_STUDY_REPLACED | true | 0 |
| 4 | a1-bitte-study | Bitte | REPLACE | FULL_STUDY_REPLACED | true | 3 |
| 5 | a1-ein | ein | REPLACE | FULL_STUDY_REPLACED | true | 4 |
| 6 | a1-es | es | REPLACE | FULL_STUDY_REPLACED | true | 1 |
| 7 | a1-Fußball-218 | Fußball | CREATE | FULL_STUDY_CREATED | true | 0 |
| 8 | a1-ganz-219 | ganz | CREATE | FULL_STUDY_CREATED | true | 0 |
| 9 | a1-gefallen-225 | gefallen | CREATE | FULL_STUDY_CREATED | true | 0 |
| 10 | a1-Geschichte-233 | Geschichte | CREATE | FULL_STUDY_CREATED | true | 0 |
| 11 | a1-Geschwister-234 | Geschwister | CREATE | FULL_STUDY_CREATED | true | 0 |
| 12 | a1-Großeltern-251 | Großeltern | CREATE | FULL_STUDY_CREATED | true | 0 |
| 13 | a1-Hand-267 | Hand | CREATE | FULL_STUDY_CREATED | true | 0 |
| 14 | a1-hübsch-288 | hübsch | CREATE | FULL_STUDY_CREATED | true | 0 |

## Integrity

| Check | Result |
|---|---|
| DE changes | **0** |
| unexpected changes | **0** |
| cards | **702** |
| CS Study count before | **124** |
| CS Study count after | **134** |
| CS Study count increase | **+10** |
| ID uniqueness | **PASS** |
| ID/order | **PASS** |
| syntax | **PASS** |
| mirror | **PASS** |
| sectionAccents | **FAIL** |

## SECTION_ACCENT_TARGET_MISMATCH

OWNER-provided targets not found in Study text. Not auto-fixed per policy.

| cardId | path | target | section | section text |
|---|---|---|---|---|
| a1-besuchen-89 | sectionAccents.tip.left | navštívit | tip | Pamatujte: besuchen se používá přímo s osobou nebo místem, bez předložky. |
| a1-besuchen-89 | sectionAccents.tip.left | navštěvovat | tip | Pamatujte: besuchen se používá přímo s osobou nebo místem, bez předložky. |
| a1-bitte-study | sectionAccents.important[0] | die Bitten | important | Člen: die Bitte. |
| a1-bitte-study | sectionAccents.important[1] | Podstatné jméno | important | Množné číslo: die Bitten. |
| a1-bitte-study | sectionAccents.important[1] | velkým písmenem | important | Množné číslo: die Bitten. |
| a1-ein | sectionAccents.important[0] | neurčitý člen | important | ein – mužský rod v nominativu. |
| a1-ein | sectionAccents.important[1] | eine | important | ein – střední rod v nominativu. |
| a1-ein | sectionAccents.important[1] | ženský rod | important | ein – střední rod v nominativu. |
| a1-ein | sectionAccents.important[1] | akuzativ | important | ein – střední rod v nominativu. |
| a1-es | sectionAccents.important[1] | ich | important | Německé es často znamená „to“ nebo „ono“, případně se v češtině nepřekládá. |

_Applied: 2026-08-13_