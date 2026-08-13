# CS–DE A2 POST-REPAIR FULL AUDIT

## KOPSAVILKUMS

- **Linguistic audit model:** GPT-5.6 Luna
- **A2 production cards audited by Luna:** 1640/1640
- **Repair-target cards covered:** 629/629
- **Audit mode:** READ-ONLY
- **Baseline commit:** `b29203d3067c113c12a97d39fb377bcce4822b9a`
- **Current branch:** `cursor/cs-a2-post-repair-full-audit-6ea4`
- **Date:** 2026-08-13T19:52:44.058Z

| Metrika | Rezultāts |
|---|---|
| a2Total | 1640/1640 |
| repairTargetCards | 629/629 |
| exactTargetObjectMatches | 629/629 |
| partialMismatch | 0 |
| actuallyChangedCards | 619 |
| expectedChangedValues | 2012 |
| actualChangedValues | 2012 |
| missingExpectedChanges | 0 |
| unexpectedChanges | 0 |
| deChanges | 0 |
| CRITICAL | 1420 |
| HIGH | 561 |
| MEDIUM | 477 |
| LOW | 101 |
| SOURCE_DE_ISSUE | 0 |
| syntax | PASS |
| idOrder | PASS |
| structure | PASS |

## GALA STATUSS: CS–DE A2 POST-REPAIR AUDIT — FAIL

## 1. SCOPE RECONCILIATION

| Group | Requested | Found in spec | Exact target match | Mismatch |
|---|---:|---:|---:|---:|
| 01 | 50 | 50 | 50 | 0 |
| 02 | 50 | 50 | 50 | 0 |
| 03 | 50 | 50 | 50 | 0 |
| 04 | 50 | 50 | 50 | 0 |
| 05 | 50 | 50 | 50 | 0 |
| 06 | 50 | 50 | 50 | 0 |
| 07 | 50 | 50 | 50 | 0 |
| 08 | 50 | 50 | 50 | 0 |
| 09 | 50 | 50 | 50 | 0 |
| 10 | 50 | 50 | 50 | 0 |
| 11 | 50 | 50 | 50 | 0 |
| 12 | 50 | 50 | 50 | 0 |
| 13 | 29 | 29 | 29 | 0 |
| **TOTAL** | **629** | **629** | **629** | **0** |

## 2. TARGETOBJECT RECONCILIATION

| Status | Count |
|---|---:|
| EXACT_MATCH | 629 |
| PARTIAL_MATCH | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| UNEXPECTED_EXTRA_CHANGE | 0 |
| SPEC_MISSING | 0 |

## 3. PRECĪZS LABOJUMU SKAITS

| Metrika | Skaits |
|---|---:|
| Repair target cards (expected) | 629 |
| Repair target cards (in spec) | 629 |
| Actually changed cards | 619 |
| Expected changed values | 2012 |
| Actual changed values | 2012 |
| Exact expected changes applied | YES |
| Missing expected changes | 0 |
| Unexpected changes | 0 |

### By category (ACTUAL)
- lv: 482
- study.translation: 124
- study.examples[*].lv: 223
- study.explanation: 133
- study.comparison: 237
- study.tip: 76
- study.important: 125
- study.sectionAccents: 184
- study.other: 428

## 4. COMPOSER COPY-ONLY VALIDĀCIJA

| Metrika | Skaits |
|---|---:|
| SPECIFIED_CHANGE | 2012 |
| UNSPECIFIED_CHANGE | 0 |

## 5. DE READ-ONLY

**DE changes:** 0 (expected 0)

## 6. INTEGRITĀTE

- **a2Total:** 1640
- **expectedTotal:** 1640
- **duplicateIds:** 0
- **missingIds:** 0
- **syntax:** PASS
- **mirror:** PASS
- **idOrderPreserved:** PASS

## 7. DETERMINISTISKĀ VALIDĀCIJA (1640/1640)

- Findings: 1984
- Structural pass: PASS
- sectionAccents pass: FAIL
- Foreign remnants pass: FAIL

## 8. LINGVISTISKĀ VALIDĀCIJA — GPT-5.6 Luna (1640/1640)

- Model: gpt-5.6-luna
- Cards audited: 1640/1640
- Quality findings: 575
- API requests: 53
- Tokens: 817139

## 9. REGRESIJAS KLASIFIKĀCIJA

| Severity | Count |
|---|---:|
| CRITICAL | 1420 |
| HIGH | 561 |
| MEDIUM | 477 |
| LOW | 101 |
| SOURCE_DE_ISSUE | 0 |
| FALSE_POSITIVE | 0 |

### Sample regression findings (first 15)
- **a2-aufheben** [MEDIUM] study.sectionAccents.important: undefined
- **a2-aufheben** [MEDIUM] study.sectionAccents.important: undefined
- **a2-auflage** [MEDIUM] study.sectionAccents.important: undefined
- **a2-aufnahme** [MEDIUM] study.sectionAccents.important: undefined
- **a2-aufnahme** [MEDIUM] study.sectionAccents.important: undefined
- **a2-absteigen-15** [MEDIUM] csText: Vystoupit znamená hlavně vystoupit z dopravního prostředku; nepokrývá sestup ani ubytování v hotelu.
- **a2-Anlass-53** [MEDIUM] csText: Důvod pokrývá jen význam příčina; Anlass označuje také příležitost nebo událost.
- **a2-anordnen-60** [MEDIUM] csText: Nařídit vystihuje pouze význam vydat příkaz; anordnen znamená také uspořádat nebo rozmístit.
- **a2-Anordnung-61** [MEDIUM] csText: Nařízení pokrývá pouze význam příkaz; Anordnung označuje také uspořádání nebo rozmístění.
- **a2-anstreichen-66** [MEDIUM] csText: Natřít vystihuje pouze malování; anstreichen znamená také podtrhnout text.
- **a2-ärgerlich-83** [MEDIUM] csText: „Nepříjemný“ znamená unpleasant; německé ärgerlich znamená rozzlobený nebo otravný.
- **a2-aufbrechen-107** [MEDIUM] csText: Czech překlad uvádí jen význam „vyrazit“ a vynechává význam „násilně otevřít/vypáčit“.
- **a2-aufmuntern-131** [MEDIUM] csText: Povzbuzovat znamená průběžně povzbuzovat; německé aufmuntern vyjadřuje povzbuzení či rozveselení jako dokončený děj.
- **a2-aufziehen-151** [MEDIUM] csText: Překlad zachycuje jen význam vychovávat a vynechává běžný význam škádlit, uvedený i ve zdroji LV.
- **a2-ausbilden-156** [MEDIUM] csText: Trénovat se v češtině týká hlavně sportu; ausbilden znamená odborně školit nebo vycvičit.

---
**Production changes during audit:** 0
**Final status:** CS–DE A2 POST-REPAIR AUDIT — FAIL