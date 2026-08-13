# CS–DE A2 POST-REPAIR FULL AUDIT

## KOPSAVILKUMS

- **Linguistic audit model:** GPT-5.6 Luna
- **A2 production cards audited by Luna:** 1640/1640
- **Repair-target cards covered:** 300/629
- **Audit mode:** READ-ONLY
- **Baseline commit:** `b29203d3067c113c12a97d39fb377bcce4822b9a`
- **Current branch:** `cursor/cs-a2-post-repair-full-audit-6ea4`
- **Date:** 2026-08-13T19:09:12.417Z

| Metrika | Rezultāts |
|---|---|
| a2Total | 1640/1640 |
| repairTargetCards | 300/629 |
| exactTargetObjectMatches | 300/629 |
| partialMismatch | 329 |
| actuallyChangedCards | 297 |
| expectedChangedValues | 1388 |
| actualChangedValues | 1388 |
| missingExpectedChanges | 0 |
| unexpectedChanges | 0 |
| deChanges | 0 |
| CRITICAL | 1452 |
| HIGH | 813 |
| MEDIUM | 532 |
| LOW | 110 |
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
| 07 | 50 | 0 (MISSING) | 0 | 50 |
| 08 | 50 | 0 (MISSING) | 0 | 50 |
| 09 | 50 | 0 (MISSING) | 0 | 50 |
| 10 | 50 | 0 (MISSING) | 0 | 50 |
| 11 | 50 | 0 (MISSING) | 0 | 50 |
| 12 | 50 | 0 (MISSING) | 0 | 50 |
| 13 | 29 | 0 (MISSING) | 0 | 29 |
| **TOTAL** | **629** | **300** | **300** | **329** |

**BLOCKER:** Remonta specifikācijas aptver tikai 300/629 kartītes. Trūkst Group 07–13 spec failu.

## 2. TARGETOBJECT RECONCILIATION

| Status | Count |
|---|---:|
| EXACT_MATCH | 300 |
| PARTIAL_MATCH | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| UNEXPECTED_EXTRA_CHANGE | 0 |
| SPEC_MISSING | 329 |

## 3. PRECĪZS LABOJUMU SKAITS

| Metrika | Skaits |
|---|---:|
| Repair target cards (expected) | 629 |
| Repair target cards (in spec) | 300 |
| Actually changed cards | 297 |
| Expected changed values | 1388 |
| Actual changed values | 1388 |
| Exact expected changes applied | YES |
| Missing expected changes | 0 |
| Unexpected changes | 0 |

### By category (ACTUAL)
- lv: 262
- study.translation: 80
- study.examples[*].lv: 104
- study.explanation: 88
- study.comparison: 121
- study.tip: 42
- study.important: 80
- study.sectionAccents: 184
- study.other: 427

## 4. COMPOSER COPY-ONLY VALIDĀCIJA

| Metrika | Skaits |
|---|---:|
| SPECIFIED_CHANGE | 1388 |
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

- Findings: 1949
- Structural pass: PASS
- sectionAccents pass: FAIL
- Foreign remnants pass: FAIL

## 8. LINGVISTISKĀ VALIDĀCIJA — GPT-5.6 Luna (1640/1640)

- Model: gpt-5.6-luna
- Cards audited: 1640/1640
- Quality findings: 958
- API requests: 53
- Tokens: 860017

## 9. REGRESIJAS KLASIFIKĀCIJA

| Severity | Count |
|---|---:|
| CRITICAL | 1452 |
| HIGH | 813 |
| MEDIUM | 532 |
| LOW | 110 |
| SOURCE_DE_ISSUE | 0 |
| FALSE_POSITIVE | 0 |

### Sample regression findings (first 15)
- **a2-aufheben** [MEDIUM] study.sectionAccents.important: undefined
- **a2-aufheben** [MEDIUM] study.sectionAccents.important: undefined
- **a2-auflage** [MEDIUM] study.sectionAccents.important: undefined
- **a2-aufnahme** [MEDIUM] study.sectionAccents.important: undefined
- **a2-aufnahme** [MEDIUM] study.sectionAccents.important: undefined
- **a2-absteigen-15** [MEDIUM] csText: Vystoupit neodpovídá významům „sestoupit“ a „ubytovat se v hotelu“.
- **a2-Anlass-53** [MEDIUM] csText: Důvod pokrývá pouze význam „Grund“; chybí význam „příležitost/událost“.
- **a2-anordnen-60** [MEDIUM] csText: Nařídit odpovídá pouze významu „přikázat“; chybí význam „uspořádat/rozvrhnout“.
- **a2-Anordnung-61** [MEDIUM] csText: Nařízení odpovídá pouze významu „příkaz“; chybí význam „uspořádání/rozvržení“.
- **a2-anstreichen-66** [MEDIUM] csText: Natřít odpovídá pouze významu „nabarvit“; chybí význam „podtrhnout“.
- **a2-ärgerlich-83** [MEDIUM] csText: Překlad zachycuje jen význam „kaitinošs“ a opomíjí význam „dusmīgs“ (naštvaný).
- **a2-Aufbau-106** [MEDIUM] csText: „Struktura“ pokrývá jen jeden význam; chybí význam budování nebo výstavby.
- **a2-aufbrechen-107** [MEDIUM] csText: Překlad zachycuje odchod, ale opomíjí význam „vylomit“ nebo násilně otevřít.
- **a2-aufspringen-142** [MEDIUM] csText: Překlad zachycuje pouze význam „vyskočit“, ale chybí význam „prudce se otevřít“.
- **a2-aufziehen-151** [MEDIUM] csText: Chybí běžný význam „škádlit/dobírat si“; uveden je jen význam vychovávat.

---
**Production changes during audit:** 0
**Final status:** CS–DE A2 POST-REPAIR AUDIT — FAIL