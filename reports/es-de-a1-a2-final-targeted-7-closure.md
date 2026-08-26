# ES–DE A1+A2 — final targeted 7 closure

**HEAD:** `24aec91c`
**Commit:** `24aec91c`
**Branch:** `cursor/es-de-a1-a2-owner-apply-001-200-3141`
**PR:** #664

## 13 target apply table

| # | ID | Card | Field | Kind | Status |
|--:|----|------|-------|------|--------|
| 1 | `ES-A1A2-TARGETED7-0001-L` | `a1-hand-study` | `study.examples[2].lv` | linguistic | PASS |
| 2 | `ES-A1A2-TARGETED7-0002-L` | `a1-kosten` | `study.examples[4].lv` | linguistic | PASS |
| 3 | `ES-A1A2-TARGETED7-0002-A` | `a1-kosten` | `study.sectionAccents.examples[4].lv.purple[0]` | accent | PASS |
| 4 | `ES-A1A2-TARGETED7-0003-L` | `a1-morgen-study` | `study.examples[3].lv` | linguistic | PASS |
| 5 | `ES-A1A2-TARGETED7-0003-A` | `a1-morgen-study` | `study.sectionAccents.examples[3].lv.purple[0]` | accent | PASS |
| 6 | `ES-A1A2-TARGETED7-0004-L` | `a2-becher` | `study.examples[2].lv` | linguistic | PASS |
| 7 | `ES-A1A2-TARGETED7-0004-A` | `a2-becher` | `study.sectionAccents.examples[2].lv.purple[0]` | accent | PASS |
| 8 | `ES-A1A2-TARGETED7-0005-L` | `a2-schloss` | `study.comparison[4].meaning` | linguistic | PASS |
| 9 | `ES-A1A2-TARGETED7-0005-A` | `a2-schloss` | `study.sectionAccents.comparison[4].meaning.purple` | accent | PASS |
| 10 | `ES-A1A2-TARGETED7-0006-L` | `a2-absagen` | `study.examples[2].lv` | linguistic | PASS |
| 11 | `ES-A1A2-TARGETED7-0006-A` | `a2-absagen` | `study.sectionAccents.examples[2].lv.purple` | accent | PASS |
| 12 | `ES-A1A2-TARGETED7-0007-L` | `a2-tafel` | `study.examples[1].lv` | linguistic | PASS |
| 13 | `ES-A1A2-TARGETED7-0007-A` | `a2-tafel` | `study.sectionAccents.examples[1].lv.purple[0]` | accent | PASS |

## Septiņi lingvistiskie lēmumi

| Card | Field | NEW | Deterministic | Luna |
|------|-------|-----|:-------------:|:----:|
| `a1-hand-study` | `study.examples[2].lv` | `Me duele el brazo.` | PASS | PASS |
| `a1-kosten` | `study.examples[4].lv` | `Pago la cuenta.` | PASS | PASS |
| `a1-morgen-study` | `study.examples[3].lv` | `Mañana es lunes.` | PASS | PASS |
| `a2-becher` | `study.examples[2].lv` | `Por favor, desecha el vaso de cartón.` | PASS | PASS |
| `a2-schloss` | `study.comparison[4].meaning` | `la llave` | PASS | PASS |
| `a2-absagen` | `study.examples[2].lv` | `Canceló su participación.` | PASS | PASS |
| `a2-tafel` | `study.examples[1].lv` | `Por favor, limpia la pizarra.` | PASS | PASS |

## Seši dependent accent targeti

| Card | Field | NEW accent | Fragment in NEW | Status |
|------|-------|------------|:---------------:|:------:|
| `a1-kosten` | `study.sectionAccents.examples[4].lv.purple[0]` | `"Pago"` | YES | PASS |
| `a1-morgen-study` | `study.sectionAccents.examples[3].lv.purple[0]` | `"Mañana"` | YES | PASS |
| `a2-becher` | `study.sectionAccents.examples[2].lv.purple[0]` | `"Por"` | YES | PASS |
| `a2-schloss` | `study.sectionAccents.comparison[4].meaning.purple` | `["la llave"]` | YES | PASS |
| `a2-absagen` | `study.sectionAccents.examples[2].lv.purple` | `["Canceló","participación"]` | YES | PASS |
| `a2-tafel` | `study.sectionAccents.examples[1].lv.purple[0]` | `"Por"` | YES | PASS |

## Šaurā Luna regresija (7 lingvistiskie lauki)

| Metrika | Vērtība |
|---------|--------:|
| Requested | **7** |
| Luna processed | **7/7** |
| Coverage | **100%** |
| In-scope REAL | **0** |
| OWNER_REVIEW_REQUIRED | **0** |
| FALSE_POSITIVE | **0** |
| OUT_OF_SCOPE | **0** |

## Retention kopsavilkums

| Slānis | Rezultāts |
|--------|----------:|
| Targeted 7 apply | **13/13** |
| Final micro OWNER | **237/237** |
| Iepriekšējais gala OWNER | **575/575** |
| Luna OWNER | **1208/1208** |
| Foreign LABOT | **537/537** |
| Foreign NELABOT | **37/37** |
| Jaunās Study | **10/10** |

## Tehniskās pārbaudes

| Pārbaude | Rezultāts |
|----------|----------:|
| A1 kartītes | **702/702** |
| A2 kartītes | **1640/1640** |
| A1 Study | **134/134** |
| A2 Study | **231/231** |
| DE changes | **0** |
| Mirror | **PASS** |
| Syntax | **PASS** |
| ID/order | **PASS** |

## Kurss — ārpus tvēruma

**Course/Kurss nav auditēts vai labots šajā closure un paliek atsevišķs darba tvērums.**

- `data/es/courseLessons.js` nav šī closure tvērumā
- `data/es/courseTrainingCards.js` nav šī closure tvērumā
- A1+A2 closure nenozīmē visas ES valodas closure

## PR #664 merge-readiness

- Ready: **YES**
- State: OPEN
- Mergeable: MERGEABLE
- Failed checks: 0

## FINAL VERDICT: **PASS — ES–DE A1+A2 OWNER ACCEPTED / READY TO MERGE**

_Šis verdicts attiecas tikai uz ES–DE A1+A2. Course/Kurss paliek atsevišķs darba tvērums._
