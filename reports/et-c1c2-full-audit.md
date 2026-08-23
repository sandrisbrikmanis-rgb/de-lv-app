# ET–DE C1/C2 pilns lingvistiskais audits (MASTER v1.9 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.9** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `8123cf4aba7b8e19df030fefac7d89753b4c9d44` |
| **DATASET_PRODUCTION_BLOB** | `50629a755bb6baed8ce4f9f011bdeb4a4de85bda+2eacf17a02b19e53820c8bf285dec06263f9add9` |
| **WWW DATASET BLOB** | `50629a755bb6baed8ce4f9f011bdeb4a4de85bda+2eacf17a02b19e53820c8bf285dec06263f9add9` |
| **LAST FINAL CLOSURE MAIN SHA** | `N/A` |
| **LAST FINAL CLOSURE DATASET BLOB** | `N/A` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **FIRST_FULL_DISCOVERY** |
| **OWNER HISTORY AVAILABLE** | NO |
| **OWNER HISTORY FILES LOADED** | none |
| **OWNER APPROVED FIELDS TOTAL** | **0** |
| **OWNER APPROVED FIELDS CHECKED** | **0** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **0** |
| **OWNER APPROVED FIELDS DRIFTED** | **0** |
| **OWNER HISTORY GATE** | **N/A** |
| **OWNER HISTORY LOADED** | NO |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.9**
**Audita datums:** 2026-08-22
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **791** |
| Luna coverage | **100%** |
| Study | **19/19** |
| RAW findings | **131** |
| NEW_VALIDATED_REAL_FINDINGS | **131** |
| OWNER_BACKLOG_FINAL | **131** |
| PREVIOUSLY_SEEN_RAW | **0** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **131** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **791/791 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **0** |
| sectionAccents | **0** |
| LV remnants | **6** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 80 |
| Deterministic | 51 |
| OWNER_DECISION_CONFIRMED | 0 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **0** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **131** |
| OWNER_BACKLOG_FINAL | **131** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **N/A** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 791/791 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **2** · HIGH: **26** · MEDIUM: **95** · LOW: **8**

#### ET-C1C2-0001
**Card ID:** STRUCT-c1
**Field:** study.count
**CURRENT:** 16
**PROPOSED_ET:** 15
**Problēma:** C1: Study count mismatch LV=15 ET=16
**DE konteksts:** —
**Smagums:** CRITICAL
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0002
**Card ID:** STRUCT-c2
**Field:** study.count
**CURRENT:** 3
**PROPOSED_ET:** 1
**Problēma:** C2: Study count mismatch LV=1 ET=3
**DE konteksts:** —
**Smagums:** CRITICAL
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0003
**Card ID:** c1-gelegentlich
**Field:** entry[340].study.comparison[0].example
**CURRENT:** Er kommt gelegentlich. = Viņš reizēm atnāk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0004
**Card ID:** c1-gelegentlich
**Field:** entry[340].study.comparison[1].example
**CURRENT:** ein gelegentlicher Besuch = gadījuma apmeklējums
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0005
**Card ID:** c1-gelegentlich
**Field:** entry[340].study.comparison[2].example
**CURRENT:** gelegentlich des Festes = svētku sakarā
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0006
**Card ID:** c1-gelegentlich
**Field:** entry[340].study.comparison[3].example
**CURRENT:** Manchmal regnet es. = Reizēm līst.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0007
**Card ID:** c1-wahlberechtigt
**Field:** entry[543].study.comparison[0].example
**CURRENT:** Er ist wahlberechtigt. = Viņam ir vēlēšanu tiesības.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0008
**Card ID:** c1-wahlberechtigt
**Field:** entry[543].study.comparison[2].example
**CURRENT:** Der Wähler geht zur Wahl. = Vēlētājs iet uz vēlēšanām.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0009
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** v
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0010
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** õ
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0011
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** i
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0012
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** s
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0013
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** t
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0014
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** l
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0015
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** u
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0017
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** e
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0019
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** k
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0020
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** o
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0021
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** n
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0024
**Card ID:** c1-wettbewerb
**Field:** study.sectionAccents (examples)
**CURRENT:** r
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0039
**Card ID:** c1-voraussetzen
**Field:** study.sectionAccents (explanation)
**CURRENT:** voraus
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0040
**Card ID:** c1-aufrechterhalten
**Field:** study.sectionAccents (explanation)
**CURRENT:** erhält
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0041
**Card ID:** c1-aufrechterhalten
**Field:** study.sectionAccents (explanation)
**CURRENT:** auf
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0042
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** m
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0043
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** i
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0044
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** l
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0046
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** e
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0047
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** s
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0048
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:**  
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0049
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** o
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0051
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** a
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0061
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** k
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0062
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** u
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0065
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** p
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0068
**Card ID:** c2-inwiefern
**Field:** study.sectionAccents (examples)
**CURRENT:** j
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0070
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** k
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0071
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** u
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0072
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** i
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0073
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:**  
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0074
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** p
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0075
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** a
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0076
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** l
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0077
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** j
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0082
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** v
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0083
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** õ
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0084
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** r
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0085
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** d
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0086
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** m
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0090
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** e
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0091
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** s
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0093
**Card ID:** c2-inwieweit
**Field:** study.sectionAccents (examples)
**CURRENT:** o
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-C1C2-0097
**Card ID:** c1-Kinderschänder-30
**Field:** etText
**CURRENT:** lapse väärkohtleja
**PROPOSED_ET:** lasteahistaja
**Problēma:** Tähendus on liiga lai: Kinderschänder viitab lapse seksuaalsele väärkohtlejale, mitte üldiselt lapse väärkohtlejale.
**LV etalons (konteksts):** pedofils
**DE konteksts:** Kinderschänder
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0098
**Card ID:** c1-Kindesmisshandlung-31
**Field:** etText
**CURRENT:** lastevastane vägivald
**PROPOSED_ET:** laste väärkohtlemine
**Problēma:** Saksa mõiste hõlmab laste väärkohtlemist laiemalt; praegune vaste tähistab kitsamalt füüsilist vägivalda.
**LV etalons (konteksts):** vardarbība pret bērniem
**DE konteksts:** Kindesmisshandlung
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0099
**Card ID:** c1-Bergwanderung-41
**Field:** etText
**CURRENT:** mägiturism
**PROPOSED_ET:** mägimatk
**Problēma:** Mägiturism tähendab mägiturismi, kuid Bergwanderung on matk või jalgsiretk mägedes.
**LV etalons (konteksts):** kalnu tūrisms
**DE konteksts:** Bergwanderung
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0100
**Card ID:** c1-Beschäftigung-44
**Field:** etText
**CURRENT:** tegevusala
**PROPOSED_ET:** tegevus
**Problēma:** Tegevusala tähendab tegevusvaldkonda, mitte üldiselt tegevust, hõivatust või ametit.
**LV etalons (konteksts):** nodarbošanās
**DE konteksts:** Beschäftigung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0101
**Card ID:** c1-geschäftlich-71
**Field:** etText
**CURRENT:** äri-
**PROPOSED_ET:** äriline
**Problēma:** „Äri-“ on liitekujuline fragment, mitte iseseisev eestikeelne vaste omadussõnale „geschäftlich“.
**LV etalons (konteksts):** darījumu
**DE konteksts:** geschäftlich
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0102
**Card ID:** c1-Gewichtheben-78
**Field:** etText
**CURRENT:** tõstmine
**PROPOSED_ET:** tõstesport
**Problēma:** „Tõstmine“ on liiga üldine; „Gewichtheben“ tähendab konkreetset spordiala ehk tõstesporti.
**LV etalons (konteksts):** svarcelšana
**DE konteksts:** Gewichtheben
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0103
**Card ID:** c1-Hochzeitsreise-86
**Field:** etText
**CURRENT:** mesinädalate reis
**PROPOSED_ET:** pulmareis
**Problēma:** „Mesinädalate reis“ on arusaadav, kuid „Hochzeitsreise“ loomulik ja täpne vaste on „pulmareis“.
**LV etalons (konteksts):** kāzu ceļojums
**DE konteksts:** Hochzeitsreise
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0104
**Card ID:** c1-Kabelanschluss-92
**Field:** etText
**CURRENT:** kaabellevi liitumine
**PROPOSED_ET:** kaabeltelevisiooni ühendus
**Problēma:** „Kaabellevi liitumine“ tähistab pigem liitumisprotsessi; „Kabelanschluss“ on kaabeltelevisiooni ühendus.
**LV etalons (konteksts):** televīzijas kabeļpieslēgums
**DE konteksts:** Kabelanschluss
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0105
**Card ID:** c1-Kostenanschlag-99
**Field:** etText
**CURRENT:** kuluprognoos
**PROPOSED_ET:** kulude kalkulatsioon
**Problēma:** „Kuluprognoos“ tähendab kulude prognoosi; „Kostenanschlag“ on kulude kalkulatsioon või hinnang.
**LV etalons (konteksts):** izdevumu tāme
**DE konteksts:** Kostenanschlag
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0106
**Card ID:** c1-Rennen mit Hindernissen-131
**Field:** etText
**CURRENT:** tõkkejooks
**PROPOSED_ET:** takistusjooks
**Problēma:** Tõkkejooks tähendab konkreetselt tõkkejooksu; saksa väljend on üldisem takistusjooks.
**LV etalons (konteksts):** šķēršļu skrējiens
**DE konteksts:** Rennen mit Hindernissen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0107
**Card ID:** c1-Schlussverkauf-138
**Field:** etText
**CURRENT:** hooajalõpu allahindlus
**PROPOSED_ET:** lõppmüük
**Problēma:** Saksa sõna tähendab üldist lõpumüüki või tühjendusmüüki, mitte tingimata hooaja lõpu allahindlust.
**LV etalons (konteksts):** preču izpārdošana sezonas beigās par pazeminātām cenām
**DE konteksts:** Schlussverkauf
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0108
**Card ID:** c1-Strampelhöschen-153
**Field:** etText
**CURRENT:** imiku roomik
**PROPOSED_ET:** imiku sipupüksid
**Problēma:** Roomik tähendab roomavat looma või roomikuosa, mitte imikurõivast; saksa sõna tähistab beebi sipupükse.
**LV etalons (konteksts):** zīdaiņa rāpulītis
**DE konteksts:** Strampelhöschen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0109
**Card ID:** c1-Terminkalender-157
**Field:** etText
**CURRENT:** tähtajakalender
**PROPOSED_ET:** kohtumiste kalender
**Problēma:** Terminkalender tähendab eeskätt kohtumiste või kokkulepitud aegade kalendrit; tähtajakalender viitab tähtaegadele.
**LV etalons (konteksts):** piezīmju kalendārs
**DE konteksts:** Terminkalender
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0110
**Card ID:** c1-verantworten-168
**Field:** etText
**CURRENT:** vastutust võtma
**PROPOSED_ET:** vastutama
**Problēma:** Vastutust võtma tähendab vastutuse enda peale võtma; verantworten tähendab millegi eest vastutama.
**LV etalons (konteksts):** uzņemties atbildību par
**DE konteksts:** verantworten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0111
**Card ID:** c1-Verlegenheit-173
**Field:** etText
**CURRENT:** hämmeldus
**PROPOSED_ET:** piinlikkus
**Problēma:** Verlegenheit tähendab piinlikkust või ebamugavat olukorda; hämmeldus tähendab segadust või nõutust.
**LV etalons (konteksts):** apjukums
**DE konteksts:** Verlegenheit
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0112
**Card ID:** c1-Basisforschung-206
**Field:** etText
**CURRENT:** põhiuuring
**PROPOSED_ET:** alusuuring
**Problēma:** Basisforschung tähendab alusuuringut ehk fundamentaalset teadustööd; põhiuuring tähendab pigem peamist või keskset uuringut.
**LV etalons (konteksts):** pamatpētījums
**DE konteksts:** Basisforschung
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0113
**Card ID:** c1-Befangenheit-211
**Field:** etText
**CURRENT:** kimbatus • segadus
**PROPOSED_ET:** erapoolikus • kallutatus
**Problēma:** Befangenheit tähendab erapoolikust või kallutatust, mitte kimbatust ega segadust.
**LV etalons (konteksts):** samulsums • apmulsums
**DE konteksts:** Befangenheit
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0114
**Card ID:** c1-benachteiligen-220
**Field:** etText
**CURRENT:** kahjustama • kahju tekitama
**PROPOSED_ET:** ebasoodsasse olukorda seadma • diskrimineerima
**Problēma:** Sõna tähendab kellegi ebasoodsasse olukorda seadmist, mitte üldiselt kahjustamist või kahju tekitamist.
**LV etalons (konteksts):** kaitēt • nodarīt zaudējumus • nodarīt pāri
**DE konteksts:** benachteiligen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0115
**Card ID:** c1-bereitwillig-224
**Field:** etText
**CURRENT:** abivalmis • teenistusvalmis
**PROPOSED_ET:** vastutulelik • meelsasti nõus
**Problēma:** Bereitwillig tähendab valmisolekut ja vastutulelikkust; teenistusvalmis tähendab valmisolekut teenistuseks.
**LV etalons (konteksts):** gatavs pakalpot • pakalpīgs
**DE konteksts:** bereitwillig
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0116
**Card ID:** c1-Betriebskosten-236
**Field:** etText
**CURRENT:** ettevõtte ekspluatatsioonikulud • tootmiskulud
**PROPOSED_ET:** tegevuskulud • käituskulud
**Problēma:** Betriebskosten on tegevus- või käituskulud; tootmiskulud tähistavad kitsamalt tootmise kulusid.
**LV etalons (konteksts):** uzņēmuma ekspluatācijas izdevumi • ražošanas izdevumi
**DE konteksts:** Betriebskosten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0117
**Card ID:** c1-Beweismaterial-241
**Field:** etText
**CURRENT:** materiaalsed tõendid
**PROPOSED_ET:** tõendusmaterjal
**Problēma:** Beweismaterial tähendab tõendusmaterjali üldiselt; materiaalsed tõendid tähendab kitsamalt füüsilisi tõendeid.
**LV etalons (konteksts):** lietiskie pierādījumi
**DE konteksts:** Beweismaterial
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0118
**Card ID:** c1-bewerben, sich-242
**Field:** etText
**CURRENT:** kandideerima • püüdlema
**PROPOSED_ET:** kandideerima • avaldust esitama
**Problēma:** Sich bewerben tähendab kandideerima või avaldust esitama; püüdlema tähendab üldiselt millegi poole püüdlemist.
**LV etalons (konteksts):** pretendēt • kandidēt • censties • tiekties
**DE konteksts:** bewerben, sich
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0119
**Card ID:** c1-Computersprache-251
**Field:** etText
**CURRENT:** programmeerimiskeel
**PROPOSED_ET:** arvutikeel
**Problēma:** Computersprache on arvutikeel üldiselt; programmeerimiskeel on selle kitsam tähendus ja vastab pigem sõnale Programmiersprache.
**LV etalons (konteksts):** datorvaloda
**DE konteksts:** Computersprache
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0120
**Card ID:** c1-Dachgepäckträger-252
**Field:** etText
**CURRENT:** katuse pagasiraam
**PROPOSED_ET:** katusepagasiraam
**Problēma:** Eesti keeles kirjutatakse see liitsõnana kokku: katusepagasiraam.
**LV etalons (konteksts):** automašīnas jumta bagāžnieks
**DE konteksts:** Dachgepäckträger
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0121
**Card ID:** c1-Dienstleistung-266
**Field:** etText
**CURRENT:** olmeteenus
**PROPOSED_ET:** teenus
**Problēma:** Olmeteenus tähendab kodumajapidamisteenust, kuid saksa sõna on üldine „teenus“ või „teenuse osutamine“.
**LV etalons (konteksts):** sadzīves pakalpojums
**DE konteksts:** Dienstleistung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0122
**Card ID:** c1-dienstpflichtig-267
**Field:** etText
**CURRENT:** sõjaväeteenistuskohuslane
**PROPOSED_ET:** sõjaväeteenistuskohustuslik
**Problēma:** Praegune vaste on isikunimisõna, saksa sõna on omadussõna tähenduses „sõjaväeteenistuskohustuslik“.
**LV etalons (konteksts):** padots karadienestam
**DE konteksts:** dienstpflichtig
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0123
**Card ID:** c1-sich einschmeicheln-284
**Field:** etText
**CURRENT:** meelitama end sisse
**PROPOSED_ET:** end sisse pugema
**Problēma:** Praegune tõlge on arusaadav, kuid „end sisse pugema“ on eesti keeles loomulikum vaste tähendusele end kellegi poolehoidu pugeda.
**LV etalons (konteksts):** pieglai­moties • pielabināties
**DE konteksts:** sich einschmeicheln
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0124
**Card ID:** c1-Entziehungskur-303
**Field:** etText
**CURRENT:** võõrutusravi kuur
**PROPOSED_ET:** võõrutusravikuur
**Problēma:** „Ravikuur“ moodustab eesti keeles liitsõna; praegune lahkukirjutus on ebaloomulik ja ortograafiliselt vigane.
**LV etalons (konteksts):** ārstniecības kurss alkoholiķiem vai narkomāniem
**DE konteksts:** Entziehungskur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0125
**Card ID:** c1-Feuerwerkskörper-312
**Field:** etText
**CURRENT:** ilutulestikurakett
**PROPOSED_ET:** ilutulestikuvahend
**Problēma:** Praegune vaste tähendab konkreetsemalt ilutulestikuraketti, kuid saksa sõna on üldmõiste igasuguse ilutulestikuvahendi kohta.
**LV etalons (konteksts):** raķete uguņošanai
**DE konteksts:** Feuerwerkskörper
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0126
**Card ID:** c1-Fortbildungskurse-315
**Field:** etText
**CURRENT:** täienduskoolituskursused
**PROPOSED_ET:** täienduskursused
**Problēma:** „Täienduskoolituskursused” on tarbetult korduv ja ebaloomulik; saksa mõiste loomulik vaste on „täienduskursused”.
**LV etalons (konteksts):** kvalifikācijas paaugstināšanas kursi
**DE konteksts:** Fortbildungskurse
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0127
**Card ID:** c1-fortgeschritten-316
**Field:** etText
**CURRENT:** üsna hilises arengujärgus
**PROPOSED_ET:** edasijõudnud
**Problēma:** Praegune fraas on kitsas ja kohmakas kontekstivaste; sõnavarakaardil on loomulikum üldvaste „edasijõudnud”.
**LV etalons (konteksts):** samērā vēlā attīstības stadijā
**DE konteksts:** fortgeschritten
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0128
**Card ID:** c1-Gebrauchtwaren-325
**Field:** etText
**CURRENT:** kasutatud asjad
**PROPOSED_ET:** kasutatud kaubad
**Problēma:** „Waren” tähendab kaupu, mitte üldiselt asju; „kasutatud kaubad” vastab saksa sõna tähendusele täpsemalt.
**LV etalons (konteksts):** lietotas mantas
**DE konteksts:** Gebrauchtwaren
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0129
**Card ID:** c1-Geburtenrate-326
**Field:** etText
**CURRENT:** sündimuse tase
**PROPOSED_ET:** sündimus
**Problēma:** „Sündimuse tase” on arusaadav, kuid eesti keeles on selle demograafilise näitaja tavapärane vaste „sündimus”.
**LV etalons (konteksts):** dzimstības līmenis
**DE konteksts:** Geburtenrate
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0130
**Card ID:** c1-geistesschwach-337
**Field:** etText
**CURRENT:** vaimupuudega
**PROPOSED_ET:** vaimselt nõrk
**Problēma:** „Vaimupuudega” tähendab vaimupuudega inimest, mitte omadust „vaimselt nõrk”; praegune vaste muudab tähendust.
**LV etalons (konteksts):** garā vājš • plānprātīgs
**DE konteksts:** geistesschwach
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0131
**Card ID:** c1-Gemeineigentum-343
**Field:** etText
**CURRENT:** ühiskondlik omand
**PROPOSED_ET:** ühisomand
**Problēma:** „Gemeineigentum” tähendab ühisomandit; „ühiskondlik omand” viitab pigem avalikule või ühiskondlikule omandile.
**LV etalons (konteksts):** sabiedriskais īpašums
**DE konteksts:** Gemeineigentum
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0132
**Card ID:** c1-Geschäftshaus-358
**Field:** etText
**CURRENT:** kaubamaja
**PROPOSED_ET:** ärihoone
**Problēma:** Kaubamaja tähendab department store’i; Geschäftshaus tähendab äri- või ärikasutusega hoonet.
**LV etalons (konteksts):** tirdzniecības nams
**DE konteksts:** Geschäftshaus
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0133
**Card ID:** c1-gesetzlos-363
**Field:** etText
**CURRENT:** seadusevastane
**PROPOSED_ET:** seadusetu
**Problēma:** Seadusevastane tähendab pigem gesetzwidrig; gesetzlos tähendab seadusetut või seadust eiravat.
**LV etalons (konteksts):** nelikumīgs
**DE konteksts:** gesetzlos
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0134
**Card ID:** c1-Gewissensbisse-368
**Field:** etText
**CURRENT:** südametunnistuse piinad
**PROPOSED_ET:** süümepiinad
**Problēma:** Südametunnistuse piinad on arusaadav, kuid loomulik ja tavapärane vaste on süümepiinad.
**LV etalons (konteksts):** sirdsapziņas pārmetumi
**DE konteksts:** Gewissensbisse
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0135
**Card ID:** c1-gewissermaßen-369
**Field:** etText
**CURRENT:** teataval määral • omal moel • nii-öelda
**PROPOSED_ET:** teataval määral • teatud mõttes • nii-öelda
**Problēma:** Omal moel tähendab 'in one's own way', mitte 'gewissermaßen'; sobiv vaste on teatud mõttes.
**LV etalons (konteksts):** zināmā mērā • savā ziņā • tā sakot
**DE konteksts:** gewissermaßen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0136
**Card ID:** c1-Hausdurchsuchung-384
**Field:** etText
**CURRENT:** politseiläbiotsimine
**PROPOSED_ET:** politsei läbiotsimine
**Problēma:** Praegune kokku kirjutatud vorm on ortograafiliselt vigane; politsei ja läbiotsimine kirjutatakse eraldi.
**LV etalons (konteksts):** policijas kratīšana
**DE konteksts:** Hausdurchsuchung
**Smagums:** HIGH
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0137
**Card ID:** c1-sich hinreißen lassen-392
**Field:** etText
**CURRENT:** end kaasa haarata laskma
**PROPOSED_ET:** laskma end kaasa haarata
**Problēma:** Eestikeelne väljend on loomulikus sõnajärjes 'laskma end kaasa haarata'.
**LV etalons (konteksts):** aizrauties
**DE konteksts:** sich hinreißen lassen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0138
**Card ID:** c1-Industrieabwässer-394
**Field:** etText
**CURRENT:** tööstuslikud reoveed
**PROPOSED_ET:** tööstuslik reovesi
**Problēma:** Reovesi on eesti keeles tavaliselt loendamatu ainsus; mitmus 'reoveed' on siin ebaloomulik.
**LV etalons (konteksts):** rūpnieciskie notekūdeņi
**DE konteksts:** Industrieabwässer
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0139
**Card ID:** c1-Justiz-401
**Field:** etText
**CURRENT:** õigusemõistmine • justiits
**PROPOSED_ET:** õigusemõistmine • justiitssüsteem
**Problēma:** Justiits on kõnekeelne ja tähenduselt ebatäpne; siin sobib justiitssüsteem või õigusemõistmine.
**LV etalons (konteksts):** justīcija • tieslietas
**DE konteksts:** Justiz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0140
**Card ID:** c1-Kaution-404
**Field:** etText
**CURRENT:** tagatis • kautsjon • garantii
**PROPOSED_ET:** tagatis • kautsjon
**Problēma:** Garantii tähendab guarantee ega ole Kautioni vaste; Kaution on tagatis või kautsjon.
**LV etalons (konteksts):** ķīla • galvojums • drošības nauda • garantija
**DE konteksts:** Kaution
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0141
**Card ID:** c1-militärpflichtig-429
**Field:** etText
**CURRENT:** ajateenistuskohuslane
**PROPOSED_ET:** sõjaväekohustuslik
**Problēma:** Praegune sõna on nimisõna isiku kohta, kuid saksa lähteüksus on omadussõna „sõjaväekohustuslik“ ehk teenistuskohustusega.
**LV etalons (konteksts):** karaklausībai padots
**DE konteksts:** militärpflichtig
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0142
**Card ID:** c1-Parteifunktionär-440
**Field:** etText
**CURRENT:** parteitöötaja
**PROPOSED_ET:** parteifunktsionäär
**Problēma:** „Parteitöötaja“ tähendab üldiselt partei töötajat ega väljenda funktsionääri ehk parteiametniku tähendust.
**LV etalons (konteksts):** partijas darbinieks
**DE konteksts:** Parteifunktionär
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0143
**Card ID:** c1-Produktionskosten-446
**Field:** etText
**CURRENT:** tootmise omahind
**PROPOSED_ET:** tootmiskulud
**Problēma:** „Omahind“ tähendab omahinda või kulupõhist hinda, kuid Produktionskosten tähendab üldiselt tootmiskulusid.
**LV etalons (konteksts):** ražošanas pašizmaksa
**DE konteksts:** Produktionskosten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0144
**Card ID:** c1-rechtswidrig-452
**Field:** etText
**CURRENT:** ebaseaduslikult
**PROPOSED_ET:** ebaseaduslik
**Problēma:** Saksa lähteüksus on omadussõna, kuid „ebaseaduslikult“ on määrsõna; omadussõna on „ebaseaduslik“.
**LV etalons (konteksts):** nelikumīgi
**DE konteksts:** rechtswidrig
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0145
**Card ID:** c1-sanktionieren-461
**Field:** etText
**CURRENT:** toetama • sanktsioneerima
**PROPOSED_ET:** sanktsioneerima
**Problēma:** Toetama tähendab „unterstützen“ ja ei vasta saksa verbile „sanktionieren“.
**LV etalons (konteksts):** atbalstīt • sankcionēt
**DE konteksts:** sanktionieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0146
**Card ID:** c1-Sinnestäuschung-474
**Field:** etText
**CURRENT:** hallutsinatsioon
**PROPOSED_ET:** meelepett
**Problēma:** Sinnestäuschung on üldmõiste meelepette või illusiooni kohta, mitte ainult hallutsinatsioon.
**LV etalons (konteksts):** halucinācija
**DE konteksts:** Sinnestäuschung
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0147
**Card ID:** c1-synchronisieren-486
**Field:** etText
**CURRENT:** filmi dubleerima
**PROPOSED_ET:** sünkroniseerima
**Problēma:** „Filmi dubleerima“ tähendab filmi dubleerimist, mitte sünkroniseerimist.
**LV etalons (konteksts):** dublēt filmu
**DE konteksts:** synchronisieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0148
**Card ID:** c1-Transfusion-488
**Field:** etText
**CURRENT:** otsene vereülekanne inimeselt inimesele
**PROPOSED_ET:** vereülekanne
**Problēma:** Saksa „Transfusion“ on üldiselt vereülekanne; „otsene inimeselt inimesele“ lisab põhjendamatu kitsenduse.
**LV etalons (konteksts):** tieša asins pārliešana no viena cilvēka citam
**DE konteksts:** Transfusion
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0149
**Card ID:** c1-urteilen-499
**Field:** etText
**CURRENT:** otsustama • arutlema
**PROPOSED_ET:** hinnangut andma
**Problēma:** „Arutlema“ tähendab arutamist; see ei vasta „urteilen“ tähendusele „hinnangut andma“ või „otsust langetama“.
**LV etalons (konteksts):** spriest
**DE konteksts:** urteilen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0150
**Card ID:** c1-sich vervollkommnen-534
**Field:** etText
**CURRENT:** oma teadmisi täiendama
**PROPOSED_ET:** ennast täiustama
**Problēma:** Saksa refleksiivne verb tähendab enda täiustamist; praegune tõlge kitsendab tähenduse ainult teadmiste täiendamisele.
**LV etalons (konteksts):** papildināt savas zināšanas
**DE konteksts:** sich vervollkommnen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0151
**Card ID:** c1-Volksbefragung-537
**Field:** etText
**CURRENT:** üleriigiline küsitlus • referendum
**PROPOSED_ET:** üleriigiline küsitlus • rahvaküsitlus
**Problēma:** Volksbefragung on rahva küsitlus või konsultatsioon, mitte täpselt referendum; referendum tähistab siduvamat hääletust.
**LV etalons (konteksts):** visas tautas aptauja • referendums
**DE konteksts:** Volksbefragung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0152
**Card ID:** c2-konterkarieren-1
**Field:** etText
**CURRENT:** nurjama
**PROPOSED_ET:** vastu töötama
**Problēma:** „Nurjama” tähendab midagi ära rikkuma või vussi ajama, mitte vastutoimimist või vastutöötamist.
**LV etalons (konteksts):** izjaukt
**DE konteksts:** konterkarieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0153
**Card ID:** c2-Teilnehmerausweis-12
**Field:** etText
**CURRENT:** osaleja tunnistus
**PROPOSED_ET:** osalejakaart
**Problēma:** „Ausweis” on kaart või tõend isikuõiguse kohta, „tunnistus” tähendab eeskätt sertifikaati või diplomit.
**LV etalons (konteksts):** dalībnieka apliecība
**DE konteksts:** Teilnehmerausweis
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0154
**Card ID:** c2-Behandlungsraum-16
**Field:** etText
**CURRENT:** arsti kabinet
**PROPOSED_ET:** raviruum
**Problēma:** „Behandlungsraum” tähendab üldiselt raviruumi; „arsti kabinet” kitsendab tähenduse arsti kabinetiks.
**LV etalons (konteksts):** ārsta kabinets
**DE konteksts:** Behandlungsraum
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0155
**Card ID:** c2-Krankheitsüberträger-49
**Field:** etText
**CURRENT:** haiguse levitaja
**PROPOSED_ET:** haiguse edasikandja
**Problēma:** „Levitaja” tähendab haiguse levitajat, kuid Überträger on täpsemalt haiguse edasikandja või kandja.
**LV etalons (konteksts):** slimības pārnēsātājs
**DE konteksts:** Krankheitsüberträger
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0156
**Card ID:** c2-Straßenunterführung-67
**Field:** etText
**CURRENT:** jalakäijate tunnel
**PROPOSED_ET:** teealune tunnel
**Problēma:** Saksa sõna tähendab teealust läbipääsu, mitte jalakäijate tunnelit; praegune tõlge kitsendab ja muudab tähendust.
**LV etalons (konteksts):** gājēju tunelis
**DE konteksts:** Straßenunterführung
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0157
**Card ID:** c2-durchkreuzen-103
**Field:** etText
**CURRENT:** läbi kriipsutama • risti tõmbama • ristuma • nurjama
**PROPOSED_ET:** läbi kriipsutama • risti tõmbama • ületama • nurjama
**Problēma:** Ristuma tähendab ‘ristuma’ või ‘lõikuma’, mitte tegevust ‘ületama’ või ‘risti minema’.
**LV etalons (konteksts):** pārsvītrot • pārvilkt krustu • šķērsot • izjaukt
**DE konteksts:** durchkreuzen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0158
**Card ID:** c2-Durchschnittsleistung-106
**Field:** etText
**CURRENT:** keskpärane tulemus • keskmine tulemus
**PROPOSED_ET:** keskpärane sooritus • keskmine sooritus
**Problēma:** Leistung tähendab siin sooritust või jõudlust, mitte otseselt tulemust.
**LV etalons (konteksts):** viduvējs sniegums • caurmēra sniegums
**DE konteksts:** Durchschnittsleistung
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0159
**Card ID:** c2-Errungenschaft-117
**Field:** etText
**CURRENT:** saavutus • saavutis • võit
**PROPOSED_ET:** saavutus • saavutis • edusamm
**Problēma:** Võit tähendab eeskätt ‘Sieg’ ehk võitu, mitte saavutust või saavutist.
**LV etalons (konteksts):** sasniegums • ieguvums • guvums
**DE konteksts:** Errungenschaft
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0160
**Card ID:** c2-Gedächtnisschwäche-126
**Field:** etText
**CURRENT:** halb mälu
**PROPOSED_ET:** mälunõrkus
**Problēma:** Halb mälu tähendab ‘halb mälu’; Gedächtnisschwäche täpsem vaste on mälunõrkus.
**LV etalons (konteksts):** slikta atmiņa
**DE konteksts:** Gedächtnisschwäche
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0161
**Card ID:** c2-Geistesgegenwart-131
**Field:** etText
**CURRENT:** vaimne kohalolek
**PROPOSED_ET:** taibukus
**Problēma:** Geistesgegenwart tähendab vaimu kohalolu asemel taibukust või kiiret reageerimisvõimet.
**LV etalons (konteksts):** attapība
**DE konteksts:** Geistesgegenwart
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0162
**Card ID:** c2-Dorfgemeinschaft-136
**Field:** etText
**CURRENT:** külaelanikkond
**PROPOSED_ET:** külakogukond
**Problēma:** Külaelanikkond tähendab küla elanikkonda, Dorfgemeinschaft aga küla kogukonda.
**LV etalons (konteksts):** ciema iedzīvotāji
**DE konteksts:** Dorfgemeinschaft
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0163
**Card ID:** c2-Gewinnauszahlung-156
**Field:** etText
**CURRENT:** loteriivõidu väljamaksmine
**PROPOSED_ET:** kasumi või võidu väljamaksmine
**Problēma:** Estonian narrows the meaning to a lottery payout, while Gewinn can mean profit or winnings generally.
**LV etalons (konteksts):** loterijas laimesta izmaksa
**DE konteksts:** Gewinnauszahlung
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0164
**Card ID:** c2-Hausgemeinschaft-161
**Field:** etText
**CURRENT:** pereliikmed • majaelanikud
**PROPOSED_ET:** majaelanikud
**Problēma:** Hausgemeinschaft refers to people living in the same house; pereliikmed means family members and adds an incorrect meaning.
**LV etalons (konteksts):** ģimenes locekļi • mājas iedzīvotāji
**DE konteksts:** Hausgemeinschaft
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0165
**Card ID:** c2-Lebenserhaltungstrieb-170
**Field:** etText
**CURRENT:** elutahe
**PROPOSED_ET:** enesesäilitamisinstinkt
**Problēma:** Elutahe means will to live, whereas Trieb denotes an instinct or drive for self-preservation.
**LV etalons (konteksts):** dzīvības dziņa
**DE konteksts:** Lebenserhaltungstrieb
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0166
**Card ID:** c2-Meisterschaftsspiel-177
**Field:** etText
**CURRENT:** meistrivõistlused
**PROPOSED_ET:** meistrivõistluste mäng
**Problēma:** The German denotes a single championship match, while meistrivõistlused denotes the championship competition as a whole.
**LV etalons (konteksts):** meistarsacīkstes
**DE konteksts:** Meisterschaftsspiel
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0167
**Card ID:** c2-Preisausschreiben-187
**Field:** etText
**CURRENT:** võistlus
**PROPOSED_ET:** auhinnavõistlus
**Problēma:** Võistlus is too general and omits the defining element that prizes are awarded.
**LV etalons (konteksts):** konkurss
**DE konteksts:** Preisausschreiben
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0168
**Card ID:** c2-zugrunde, zu Grunde-206
**Field:** etText
**CURRENT:** põhiliselt
**PROPOSED_ET:** aluseks
**Problēma:** „Põhiliselt” tähendab „peamiselt”, mitte „aluseks” või „millegi aluseks olevana”.
**LV etalons (konteksts):** pamatā
**DE konteksts:** zugrunde, zu Grunde
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0169
**Card ID:** c1-gelegentlich
**Field:** study.translation
**CURRENT:** aeg-ajalt • juhuslik • seoses
**PROPOSED_ET:** aeg-ajalt • juhuslik
**Problēma:** „Seoses” tähendab „in Verbindung mit” ega ole tänapäeva eesti keeles „gelegentlich” üldtähenduses sobiv vaste.
**LV etalons (konteksts):** reizēm • gadījuma • sakarā ar
**DE konteksts:** gelegentlich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0170
**Card ID:** c1-gelegentlich
**Field:** study.comparison[2].meaning
**CURRENT:** seoses
**PROPOSED_ET:** aeg-ajalt
**Problēma:** „Seoses” ei vasta sõna „gelegentlich” põhitähendusele „aeg-ajalt; mõnikord”.
**LV etalons (konteksts):** sakarā ar
**DE konteksts:** gelegentlich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0171
**Card ID:** c1-beziehen-sich-beziehen-auf
**Field:** study.translation
**CURRENT:** seostama • käima millegi kohta
**PROPOSED_ET:** saama (nt pensioni) • millelegi viitama / millegi kohta käima
**Problēma:** „Beziehen” võib tähendada pensioni saamist; „sich beziehen auf” tähendab millelegi viitamist. Praegune vaste ajab tähendused segi.
**LV etalons (konteksts):** attiecināt • attiekties uz
**DE konteksts:** beziehen / sich beziehen auf
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0172
**Card ID:** c1-voraussetzen
**Field:** study.examples[1].lv
**CURRENT:** me eeldame põhiteadmisi.
**PROPOSED_ET:** Me eeldame põhiteadmisi.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** mēs pieņemam pamatzināšanas kā priekšnoteikumu.
**DE konteksts:** voraussetzen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0173
**Card ID:** c1-bewahren
**Field:** study.examples[2].lv
**CURRENT:** me säilitame traditsioone.
**PROPOSED_ET:** Me säilitame traditsioone.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** mēs saglabājam tradīcijas.
**DE konteksts:** bewahren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0174
**Card ID:** c1-aufrechterhalten
**Field:** study.examples[0].lv
**CURRENT:** Riik hoiab korda kehtivana.
**PROPOSED_ET:** Riik hoiab korda alal.
**Problēma:** Eesti keeles hoitakse korda alal; „kehtivana hoidma” ei sobi siin loomuliku kollokatsioonina.
**LV etalons (konteksts):** Valsts uztur kārtību spēkā.
**DE konteksts:** aufrechterhalten
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0175
**Card ID:** c1-aufrechterhalten
**Field:** study.examples[1].lv
**CURRENT:** tegevus tuleb hoida kehtivana.
**PROPOSED_ET:** Tegevust tuleb alal hoida.
**Problēma:** Tegevust ei hoita tavaliselt „kehtivana”; selle puhul on loomulikum „alal hoidma”.
**LV etalons (konteksts):** jāuztur darbība spēkā.
**DE konteksts:** aufrechterhalten
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-C1C2-0176
**Card ID:** c1-aufrechterhalten
**Field:** study.examples[2].lv
**CURRENT:** riik hoiab korda kehtivana.
**PROPOSED_ET:** Riik hoiab korda alal.
**Problēma:** Lisaks algustähele on „korda kehtivana hoidma” ebaloomulik; õige kollokatsioon on „korda alal hoidma”.
**LV etalons (konteksts):** valsts uztur kārtību spēkā.
**DE konteksts:** aufrechterhalten
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 19/19 | PASS |
| sectionAccents | PASS |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |
