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
| Luna coverage | **skipped** |

> **Luna (GPT-5.6) nav palaists** (`--skip-luna` vai nav `OPENAI_API_KEY`). Šis ziņojums satur deterministisko slāni. Lai pabeigtu pilnu FULL_DISCOVERY ar Luna: `node scripts/run-et-c1c2-full-audit.js --fresh-luna`.
| Study | **19/19** |
| RAW findings | **51** |
| NEW_VALIDATED_REAL_FINDINGS | **51** |
| OWNER_BACKLOG_FINAL | **51** |
| PREVIOUSLY_SEEN_RAW | **0** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **51** |
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
| RAW LLM candidates | 0 |
| Deterministic | 51 |
| OWNER_DECISION_CONFIRMED | 0 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **0** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **51** |
| OWNER_BACKLOG_FINAL | **51** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **N/A** |
| OWNER_HISTORY_GATE | **N/A** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 791/791 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **2** · HIGH: **6** · MEDIUM: **43** · LOW: **0**

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
## 4. Deterministic gates

| Study 19/19 | PASS |
| sectionAccents | PASS |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |
