# ET–DE B2 pilns lingvistiskais audits (MASTER v1.9 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.9** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `d1ea2b05bde9d5a7d2854c8b83e634a48179185c` |
| **DATASET_PRODUCTION_BLOB** | `96242867f69f39e421ddd8633811367b83386898` |
| **WWW DATASET BLOB** | `96242867f69f39e421ddd8633811367b83386898` |
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
**Audita datums:** 2026-08-23
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **2118** |
| Luna coverage | **100%** |
| Study | **64/60** |
| RAW findings | **389** |
| NEW_VALIDATED_REAL_FINDINGS | **389** |
| OWNER_BACKLOG_FINAL | **389** |
| PREVIOUSLY_SEEN_RAW | **0** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **389** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **2118/2118 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **0** |
| sectionAccents | **0** |
| LV remnants | **12** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 337 |
| Deterministic | 52 |
| OWNER_DECISION_CONFIRMED | 0 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **0** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **389** |
| OWNER_BACKLOG_FINAL | **389** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **N/A** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 2118/2118 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **5** · HIGH: **119** · MEDIUM: **244** · LOW: **21**

#### ET-B2-0001
**Card ID:** STRUCT
**Field:** study.count
**CURRENT:** 64
**PROPOSED_ET:** 60
**Problēma:** Study count mismatch LV=60 ET=64
**DE konteksts:** —
**Smagums:** CRITICAL
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0002
**Card ID:** b2-hochwasser
**Field:** entry[1145].study.comparison[0].example
**CURRENT:** Es gibt Hochwasser. = Ir plūdi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0003
**Card ID:** b2-hochwasser
**Field:** entry[1145].study.comparison[1].example
**CURRENT:** Die Überschwemmung zerstörte Häuser. = Plūdi izpostīja mājas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0004
**Card ID:** b2-hochwasser
**Field:** entry[1145].study.comparison[2].example
**CURRENT:** Der Pegel steigt. = Ūdens līmenis ceļas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0005
**Card ID:** b2-nachdruck
**Field:** entry[1349].study.comparison[0].example
**CURRENT:** Er legt Nachdruck auf die Frist. = Viņš uzsver termiņu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0006
**Card ID:** b2-nachdruck
**Field:** entry[1349].study.comparison[1].example
**CURRENT:** Der Nachdruck erschien im Frühjahr. = Atkārtotais izdevums iznāca pavasarī.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0007
**Card ID:** b2-nachdruck
**Field:** entry[1349].study.comparison[2].example
**CURRENT:** Unter Druck stehen = būt spiedienā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0008
**Card ID:** b2-zuweisen
**Field:** entry[2100].study.comparison[0].example
**CURRENT:** Er weist die Aufgabe zu. = Viņš piešķir uzdevumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0009
**Card ID:** b2-zuweisen
**Field:** entry[2100].study.comparison[1].example
**CURRENT:** Er gibt mir die Arbeit. = Viņš man dod darbu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0010
**Card ID:** b2-zuweisen
**Field:** entry[2100].study.comparison[2].example
**CURRENT:** Er verteilt die Aufgaben. = Viņš sadala uzdevumus.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0011
**Card ID:** b2-zuwider
**Field:** entry[2102].study.comparison[1].example
**CURRENT:** Es ist mir zuwider. = Man tas nepatīk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0012
**Card ID:** b2-anbieten
**Field:** entry[2113].study.comparison[0].example
**CURRENT:** Ich biete Hilfe an. = Es piedāvāju palīdzību.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0013
**Card ID:** b2-anbieten
**Field:** entry[2113].study.comparison[1].example
**CURRENT:** Er bietet viel Geld. = Viņš piedāvā daudz naudas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0014
**Card ID:** b2-genosse
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
#### ET-B2-0015
**Card ID:** b2-genosse
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
#### ET-B2-0016
**Card ID:** b2-genosse
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
#### ET-B2-0017
**Card ID:** b2-genosse
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
#### ET-B2-0019
**Card ID:** b2-genosse
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
#### ET-B2-0022
**Card ID:** b2-genosse
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
#### ET-B2-0027
**Card ID:** b2-genosse
**Field:** study.sectionAccents (examples)
**CURRENT:** g
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0035
**Card ID:** b2-genosse
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
#### ET-B2-0039
**Card ID:** b2-genossin
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
#### ET-B2-0040
**Card ID:** b2-genossin
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
#### ET-B2-0041
**Card ID:** b2-genossin
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
#### ET-B2-0042
**Card ID:** b2-genossin
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
#### ET-B2-0044
**Card ID:** b2-genossin
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
#### ET-B2-0047
**Card ID:** b2-genossin
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
#### ET-B2-0052
**Card ID:** b2-genossin
**Field:** study.sectionAccents (examples)
**CURRENT:** g
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0060
**Card ID:** b2-genossin
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
#### ET-B2-0064
**Card ID:** b2-neger
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
#### ET-B2-0065
**Card ID:** b2-neger
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
#### ET-B2-0067
**Card ID:** b2-neger
**Field:** study.sectionAccents (examples)
**CURRENT:** g
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0069
**Card ID:** b2-neger
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
#### ET-B2-0070
**Card ID:** b2-neger
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
#### ET-B2-0071
**Card ID:** b2-neger
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
#### ET-B2-0072
**Card ID:** b2-neger
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
#### ET-B2-0073
**Card ID:** b2-neger
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
#### ET-B2-0074
**Card ID:** b2-neger
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
#### ET-B2-0077
**Card ID:** b2-neger
**Field:** study.sectionAccents (examples)
**CURRENT:** h
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0079
**Card ID:** b2-neger
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
#### ET-B2-0080
**Card ID:** b2-neger
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
#### ET-B2-0083
**Card ID:** b2-neger
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
#### ET-B2-0091
**Card ID:** b2-pacht
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
#### ET-B2-0092
**Card ID:** b2-pacht
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
#### ET-B2-0093
**Card ID:** b2-pacht
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
#### ET-B2-0094
**Card ID:** b2-pacht
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
#### ET-B2-0095
**Card ID:** b2-pacht
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
#### ET-B2-0096
**Card ID:** b2-pacht
**Field:** study.sectionAccents (examples)
**CURRENT:** ü
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0102
**Card ID:** b2-pacht
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
#### ET-B2-0104
**Card ID:** b2-pacht
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
#### ET-B2-0106
**Card ID:** b2-pacht
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
#### ET-B2-0109
**Card ID:** b2-pacht
**Field:** study.sectionAccents (examples)
**CURRENT:** g
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-B2-0110
**Card ID:** b2-anbelangen-13
**Field:** etText
**CURRENT:** puudutama, käima kohta
**PROPOSED_ET:** puudutama
**Problēma:** „Käima kohta“ on selles tähenduses ebaloomulik ja vigane; „anbelangen“ tähendab eeskätt „puudutama“.
**LV etalons (konteksts):** attiekties uz
**DE konteksts:** anbelangen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0111
**Card ID:** b2-angehen-19
**Field:** etText
**CURRENT:** puudutama • pöörduma vastu
**PROPOSED_ET:** puudutama • vastu astuma
**Problēma:** „Pöörduma vastu“ ei ole ründamise või vastandumise tähenduses loomulik eesti vaste.
**LV etalons (konteksts):** attiekties • vērsties pret
**DE konteksts:** angehen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0112
**Card ID:** b2-Aktienkurs-21
**Field:** etText
**CURRENT:** aktsia kurss
**PROPOSED_ET:** aktsiakurss
**Problēma:** Eesti keeles kirjutatakse see liitsõnana: „aktsiakurss“.
**LV etalons (konteksts):** akcijas kurss
**DE konteksts:** Aktienkurs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0113
**Card ID:** b2-angeblich-28
**Field:** etText
**CURRENT:** justkui • näiliselt
**PROPOSED_ET:** väidetavalt • oletatav
**Problēma:** „Angeblich“ väljendab väidetavust, mitte lihtsalt „justkui“ või „näiliselt“.
**LV etalons (konteksts):** it kā • šķietami
**DE konteksts:** angeblich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0114
**Card ID:** b2-abbringen-36
**Field:** etText
**CURRENT:** ümber veenma • hoiatama • kõrvale juhtima
**PROPOSED_ET:** ümber veenma • ära hoidma • kõrvale juhtima
**Problēma:** „Hoiatama“ tähendab hoiatamist, mitte kellegi heidutamist või millegi ärahoidmist.
**LV etalons (konteksts):** atrunāt • atturēt • novirzīt
**DE konteksts:** abbringen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0115
**Card ID:** b2-abgesehen-44
**Field:** etText
**CURRENT:** kuigi • pealegi
**PROPOSED_ET:** välja arvatud • kõrvale jättes
**Problēma:** „Abgesehen“ tähendab „välja arvatud“ või „kõrvale jättes“, mitte „kuigi“.
**LV etalons (konteksts):** lai gan • turklāt
**DE konteksts:** abgesehen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0116
**Card ID:** b2-abgetan-46
**Field:** etText
**CURRENT:** lõpetatud • korraldatud
**PROPOSED_ET:** lõpetatud • lahendatud
**Problēma:** Teine vaste „korraldatud“ tähendab organiseeritud, mitte lõpetatud või lahendatud.
**LV etalons (konteksts):** izbeigts • nokārtots
**DE konteksts:** abgetan
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0117
**Card ID:** b2-abhören-49
**Field:** etText
**CURRENT:** kuulama • pealt kuulama
**PROPOSED_ET:** pealt kuulama • salaja pealt kuulama
**Problēma:** „Abhören“ tähendab sihipärast kuulamist või pealtkuulamist; üldine „kuulama“ on liiga lai.
**LV etalons (konteksts):** noklausīties • slepeni noklausīties
**DE konteksts:** abhören
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0118
**Card ID:** b2-ableiten-50
**Field:** etText
**CURRENT:** juhtima • kõrvale juhtima • tuletama
**PROPOSED_ET:** ära juhtima • kõrvale juhtima • tuletama
**Problēma:** Esimene vaste „juhtima“ ei väljenda vedeliku või energia ärajuhtimise tähendust.
**LV etalons (konteksts):** novadīt • novirzīt • atvasināt
**DE konteksts:** ableiten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0119
**Card ID:** b2-Abnutzung-52
**Field:** etText
**CURRENT:** kulumine • amortiseerumine • kulu
**PROPOSED_ET:** kulumine • amortiseerumine
**Problēma:** „Kulu” tähendab eeskätt kulu või tarbimist, mitte kulumist ega amortiseerumist.
**LV etalons (konteksts):** nolietošana • nolietošanās • nodilums
**DE konteksts:** Abnutzung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0120
**Card ID:** b2-Absatzmarkt-56
**Field:** etText
**CURRENT:** turustusturg
**PROPOSED_ET:** müügiturg
**Problēma:** „Müügiturg” on saksa Absatzmarkt loomulikum ja tavapärasem eestikeelne vaste.
**LV etalons (konteksts):** noieta tirgus
**DE konteksts:** Absatzmarkt
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0121
**Card ID:** b2-abtragen-71
**Field:** etText
**CURRENT:** ära kandma • kulutama (kandes) • lammutama
**PROPOSED_ET:** ära kandma • kulutama • lammutama
**Problēma:** Sulund „(kandes)” on ebaloomulik ja ei kuulu vaste tähendusse; „kulutama” katab kulumise tähenduse.
**LV etalons (konteksts):** aiznest • nonēsāt • nojaukt
**DE konteksts:** abtragen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0122
**Card ID:** b2-affig-80
**Field:** etText
**CURRENT:** silmatorkav • edev
**PROPOSED_ET:** afekteeritud • edvistav
**Problēma:** „Affig” tähendab ebaloomulikult edvistavat või afekteeritud, mitte lihtsalt silmatorkavat.
**LV etalons (konteksts):** uzkrītošs • iedomīgs
**DE konteksts:** affig
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0123
**Card ID:** b2-Anorak-87
**Field:** etText
**CURRENT:** kapuutsiga dressijakk
**PROPOSED_ET:** kapuutsiga jope
**Problēma:** „Dressijakk” tähendab spordidressi jakki; Anorak on üldisem kapuutsiga jope või tuulepluus.
**LV etalons (konteksts):** sportiska jaka ar kapuci
**DE konteksts:** Anorak
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0124
**Card ID:** b2-Aster-92
**Field:** etText
**CURRENT:** astra
**PROPOSED_ET:** aster
**Problēma:** Taime nimetus on eesti keeles „aster”; „astra” ei ole siin korrektne ainsuse nimetav kuju.
**LV etalons (konteksts):** astere
**DE konteksts:** Aster
**Smagums:** HIGH
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0125
**Card ID:** b2-Ausbeutung-96
**Field:** etText
**CURRENT:** ekspluatatsioon
**PROPOSED_ET:** ekspluateerimine
**Problēma:** Inimeste või ressursside ärakasutamise tähenduses on eesti keeles tavapärane „ekspluateerimine”.
**LV etalons (konteksts):** ekspluatācija
**DE konteksts:** Ausbeutung
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0126
**Card ID:** b2-Äußerlichkeit-103
**Field:** etText
**CURRENT:** väline sära
**PROPOSED_ET:** välisus • pealiskaudsus
**Problēma:** „Väline sära” tähendab välist hiilgust, kuid Äußerlichkeit tähendab välisust või pealiskaudsust.
**LV etalons (konteksts):** ārišķība
**DE konteksts:** Äußerlichkeit
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0127
**Card ID:** b2-Äußerung-104
**Field:** etText
**CURRENT:** väljendus • avaldumine • ilming
**PROPOSED_ET:** väljendus • avaldus • ütlus
**Problēma:** „Avaldumine” ja „ilming” ei tähenda tavaliselt inimese sõnalist väljendust või avaldust.
**LV etalons (konteksts):** izteikums • izpaudums • izpausme
**DE konteksts:** Äußerung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0128
**Card ID:** b2-aussetzen-105
**Field:** etText
**CURRENT:** eksponeerima • allutama • vastu vaidlema • astuma
**PROPOSED_ET:** ohustama • allutama • vastu vaidlema • välja panema
**Problēma:** „Eksponeerima” on peamiselt näitamiseks välja panema ning „astuma” ei anna neljandat tähendust edasi.
**LV etalons (konteksts):** izlikt • pakļaut • iebilst • stāties
**DE konteksts:** aussetzen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0129
**Card ID:** b2-aussichtslos-106
**Field:** etText
**CURRENT:** lootusetu • väljavaadeteta
**PROPOSED_ET:** lootusetu • väljavaatetu
**Problēma:** „Väljavaadeteta” ei ole loomulik eestikeelne vaste; tavapärane on „väljavaatetu”.
**LV etalons (konteksts):** bezcerīgs • bez izredzēm
**DE konteksts:** aussichtslos
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0130
**Card ID:** b2-ausstatten-108
**Field:** etText
**CURRENT:** varustama • vormistama
**PROPOSED_ET:** varustama • sisustama
**Problēma:** „Vormistama” tähendab dokumentide vormistamist, mitte millegi varustamist või sisustamist.
**LV etalons (konteksts):** apgādāt • noformēt
**DE konteksts:** ausstatten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0131
**Card ID:** b2-austragen-112
**Field:** etText
**CURRENT:** kandma • kohale toimetama • välja võitlema
**PROPOSED_ET:** laiali kandma • kohale toimetama • välja võitlema
**Problēma:** Üksi „kandma” on esimese tähenduse jaoks liiga üldine; siin on mõte midagi laiali kanda või levitada.
**LV etalons (konteksts):** iznēsāt • piegādāt • izcīnīt
**DE konteksts:** austragen
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0132
**Card ID:** b2-austreten-114
**Field:** etText
**CURRENT:** sisse tallama • maha tallama • välja astuma
**PROPOSED_ET:** välja tallama • maha tallama • välja astuma
**Problēma:** „Sisse tallama” tähendab millegi sisse või pinnasesse tallamist, mitte saksa austreten-vormi põhitähendust.
**LV etalons (konteksts):** izmīt • nomīt • izstāties
**DE konteksts:** austreten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0133
**Card ID:** b2-auswärtig-115
**Field:** etText
**CURRENT:** välismaine • välisasjade
**PROPOSED_ET:** välismaine • välisasjadega seotud
**Problēma:** „Välisasjade” on üksinda genitiivne sõnaühendi osa, mitte loomulik iseseisev eestikeelne vaste.
**LV etalons (konteksts):** ārzemju • ārlietu
**DE konteksts:** auswärtig
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0134
**Card ID:** b2-ausweisen-117
**Field:** etText
**CURRENT:** välja saatma • välja saatma • kinnitama • tõestama
**PROPOSED_ET:** välja saatma • välja tõrjuma • kinnitama • tõestama
**Problēma:** Kaks esimest vastet on identsed ega erista väljasaatmise ja väljatõrjumise tähendust.
**LV etalons (konteksts):** izraidīt • izsūtīt • apstiprināt • pierādīt
**DE konteksts:** ausweisen
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0135
**Card ID:** b2-auszeichnen-120
**Field:** etText
**CURRENT:** autasustama • andma • silma paistma
**PROPOSED_ET:** autasustama • esile tõstma • silma paistma
**Problēma:** Üldine „andma” ei väljenda tähendust „millegi poolest eristama või esile tõstma”.
**LV etalons (konteksts):** apbalvot • piešķirt • izcelties
**DE konteksts:** auszeichnen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0136
**Card ID:** b2-Schwebebalken-123
**Field:** etText
**CURRENT:** tasakaalupulk
**PROPOSED_ET:** võimlemispoom
**Problēma:** Schwebebalken on võimlemises standardterminina „võimlemispoom”, mitte „tasakaalupulk”.
**LV etalons (konteksts):** līdzsvara baļķis
**DE konteksts:** Schwebebalken
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0137
**Card ID:** b2-Blutbank-125
**Field:** etText
**CURRENT:** verevaru
**PROPOSED_ET:** verepank
**Problēma:** „Verevaru” tähendab verevaru, kuid Blutbank on asutus või süsteem ehk „verepank”.
**LV etalons (konteksts):** asins rezerves
**DE konteksts:** Blutbank
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0138
**Card ID:** b2-Baugrube-142
**Field:** etText
**CURRENT:** ehituskraav
**PROPOSED_ET:** ehituskaevik
**Problēma:** Baugrube on ehituseks rajatud süvend või kaevik; „ehituskraav” seostub pigem pika kraaviga.
**LV etalons (konteksts):** būvbedre
**DE konteksts:** Baugrube
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0139
**Card ID:** b2-bebauen-146
**Field:** etText
**CURRENT:** töötlema • hoonestama
**PROPOSED_ET:** harima • hoonestama
**Problēma:** Maa puhul tähendab bebauen eeskätt harima või hoonestama; „töötlema” on liiga üldine.
**LV etalons (konteksts):** apstrādāt • apbūvēt
**DE konteksts:** bebauen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0140
**Card ID:** b2-befallen-148
**Field:** etText
**CURRENT:** peale tulema • ründama
**PROPOSED_ET:** tabama • ründama
**Problēma:** „Peale tulema” ei ole loomulik vaste tähendusele „kedagi tabama või kedagi vallutama”.
**LV etalons (konteksts):** uznākt • uzbrukt
**DE konteksts:** befallen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0141
**Card ID:** b2-beispiellos-163
**Field:** etText
**CURRENT:** enneolematu • nähtamatu • võrreldamatu
**PROPOSED_ET:** enneolematu • enneolematu • võrreldamatu
**Problēma:** „Nähtamatu” tähendab nähtamatut, mitte enneolematut või pretsedenditut.
**LV etalons (konteksts):** nebijis • neredzēts • tāds, kas nav ne ar ko salīdzināms
**DE konteksts:** beispiellos
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0142
**Card ID:** b2-beistimmen-166
**Field:** etText
**CURRENT:** kaasa hääletama • toetama
**PROPOSED_ET:** nõustuma • heaks kiitma
**Problēma:** „Beistimmen” tähendab kellegagi nõustumist või millegi heakskiitmist, mitte kaasa hääletamist.
**LV etalons (konteksts):** piebalsot • atbalstīt
**DE konteksts:** beistimmen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0143
**Card ID:** b2-Straßenbelag-174
**Field:** etText
**CURRENT:** tänavakate
**PROPOSED_ET:** teekate
**Problēma:** Tee või tänava pinnakatte tavapärane eestikeelne termin on „teekate”.
**LV etalons (konteksts):** ielas klātne
**DE konteksts:** Straßenbelag
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0144
**Card ID:** b2-belästigen-177
**Field:** etText
**CURRENT:** koormama • pealetükkivalt käituma • peale suruma
**PROPOSED_ET:** häirima • tülitama • ahistama
**Problēma:** „Belästigen” tähendab häirima, tülitama või ahistama; „koormama” tähendab pigem koormamist.
**LV etalons (konteksts):** apgrūtināt • uzmākties • uzbāzties
**DE konteksts:** belästigen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0145
**Card ID:** b2-beleibt-181
**Field:** etText
**CURRENT:** täidlane • priske • täielik
**PROPOSED_ET:** täidlane • priske • tüse
**Problēma:** „Täielik” tähendab complete/full, mitte inimest kirjeldavat tüsedat või kogukat.
**LV etalons (konteksts):** tukls • brangs • pilnīgs
**DE konteksts:** beleibt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0146
**Card ID:** b2-beredt-189
**Field:** etText
**CURRENT:** jutukas
**PROPOSED_ET:** sõnaosav
**Problēma:** „Beredt” tähendab väljendusrikast või sõnaosavat, „jutukas” aga peamiselt palju rääkivat.
**LV etalons (konteksts):** runīgs
**DE konteksts:** beredt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0147
**Card ID:** b2-bergen-192
**Field:** etText
**CURRENT:** päästma • koristama saaki
**PROPOSED_ET:** päästma • saaki koristama
**Problēma:** Eestikeelne loomulikum sõnajärg on „saaki koristama”, mitte „koristama saaki”.
**LV etalons (konteksts):** glābt • izglābt • novākt ražu
**DE konteksts:** bergen
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0148
**Card ID:** b2-beruhen-198
**Field:** etText
**CURRENT:** asutatama • põhinema
**PROPOSED_ET:** põhinema
**Problēma:** „Asutatama” tähendab asutamist või rajamist, mitte millelgi põhine mist.
**LV etalons (konteksts):** dibināties • pamatoties
**DE konteksts:** beruhen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0149
**Card ID:** b2-beschimpfen-203
**Field:** etText
**CURRENT:** sõimama • halvustama • laimama
**PROPOSED_ET:** sõimama • halvustama • solvama
**Problēma:** „Laimama” tähendab kellegi kohta laimava info levitamist, mitte otseselt sõimamist või solvamist.
**LV etalons (konteksts):** nolamāt • nozākāt • noķengāt
**DE konteksts:** beschimpfen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0150
**Card ID:** b2-besessen-207
**Field:** etText
**CURRENT:** kinnisideeks muutunud • vaevatud • haaratud
**PROPOSED_ET:** kinnisideest haaratud • vaevatud • haaratud
**Problēma:** „Kinnisideeks muutunud” tähendab millekski kinnisideeks muutumist, mitte inimese kinnisideest haaratud olekut.
**LV etalons (konteksts):** apsēsts • apmāts • pārņemts
**DE konteksts:** besessen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0151
**Card ID:** b2-besiedeln-208
**Field:** etText
**CURRENT:** elanikke ümber asustama
**PROPOSED_ET:** asustama
**Problēma:** „Besiedeln” tähendab ala asustama; „ümber asustama” lisab saksa verbis puuduva ümberasustamise tähenduse.
**LV etalons (konteksts):** nometināt iedzīvotājus
**DE konteksts:** besiedeln
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0152
**Card ID:** b2-bestürzt-218
**Field:** etText
**CURRENT:** üllatunud • segaduses • hämmingus
**PROPOSED_ET:** vapustatud • segaduses • hämmeldunud
**Problēma:** „Bestürzt” väljendab tugevat vapustust või kohkumist, mitte lihtsalt üllatust.
**LV etalons (konteksts):** pārsteigts • samulsis • apmulsis • apjucis
**DE konteksts:** bestürzt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0153
**Card ID:** b2-beteuern-221
**Field:** etText
**CURRENT:** tõendama
**PROPOSED_ET:** kinnitama
**Problēma:** „Beteuern” tähendab millegi tungivalt või veendunult kinnitamist; „tõendama” tähendab tõestama.
**LV etalons (konteksts):** apliecināt
**DE konteksts:** beteuern
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0154
**Card ID:** b2-Betriebsrat-224
**Field:** etText
**CURRENT:** ettevõtte nõukogu
**PROPOSED_ET:** töönõukogu
**Problēma:** „Betriebsrat” on töötajate esindusorgan ehk töönõukogu, mitte ettevõtte juhtkonna või omanike nõukogu.
**LV etalons (konteksts):** uzņēmuma padome
**DE konteksts:** Betriebsrat
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0155
**Card ID:** b2-Betrug-225
**Field:** etText
**CURRENT:** pettus • mahhineerimine • võltsing • kelmus
**PROPOSED_ET:** pettus • petmine • kelmus
**Problēma:** „Võltsing” tähendab võltsitud eset või dokumenti, mitte üldiselt pettust, mida „Betrug” tähistab.
**LV etalons (konteksts):** krāpšana • mānīšana • viltus • blēdība
**DE konteksts:** Betrug
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0156
**Card ID:** b2-Beute-227
**Field:** etText
**CURRENT:** saak • võit • trofee
**PROPOSED_ET:** saak • saagis • trofee
**Problēma:** „Võit” tähendab eeskätt võitu, samas kui „Beute” tähendab saaki või röövsaaki.
**LV etalons (konteksts):** laupījums • guvums • trofeja
**DE konteksts:** Beute
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0157
**Card ID:** b2-bewähren-229
**Field:** etText
**CURRENT:** kaitsma • ära kaitsma • hoidma • päästma
**PROPOSED_ET:** ennast tõestama • end õigustama
**Problēma:** Praegused vasted tähendavad kaitsmist või päästmist; „bewähren” tähendab end tõestama või ennast õigustama.
**LV etalons (konteksts):** pierādīt sevi
**DE konteksts:** bewähren
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0158
**Card ID:** b2-bezähmen-237
**Field:** etText
**CURRENT:** nõiduma • lummama
**PROPOSED_ET:** taltsutama • ohjeldama
**Problēma:** Praegused vasted tähendavad nõidumist või lummamist; „bezähmen” tähendab taltsutama või ohjeldama.
**LV etalons (konteksts):** savaldīt
**DE konteksts:** bezähmen
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0159
**Card ID:** b2-Binnenhandel-251
**Field:** etText
**CURRENT:** siseturg
**PROPOSED_ET:** sisekaubandus
**Problēma:** „Binnenhandel” tähendab sisekaubandust; „siseturg” tähendab siseturgu, mis on teine mõiste.
**LV etalons (konteksts):** iekšējā tirdzniecība
**DE konteksts:** Binnenhandel
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0160
**Card ID:** b2-Blutkonserve-274
**Field:** etText
**CURRENT:** konserveeritud veri
**PROPOSED_ET:** verekonserv
**Problēma:** Eesti keeles on selle meditsiinilise mõiste loomulik vaste „verekonserv“, mitte sõnasõnaline „konserveeritud veri“.
**LV etalons (konteksts):** konservētas asinis
**DE konteksts:** Blutkonserve
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0161
**Card ID:** b2-Bodensatz-280
**Field:** etText
**CURRENT:** sete • pärme
**PROPOSED_ET:** sete • pärm
**Problēma:** Sõnavarakaardil peaks vaste olema algvormis; „pärme“ on partitiiv, samas kui mõiste vaste on „pärm“.
**LV etalons (konteksts):** nogulsnes • padibenes • mieles
**DE konteksts:** Bodensatz
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0162
**Card ID:** b2-Bootsmann-283
**Field:** etText
**CURRENT:** bootsman
**PROPOSED_ET:** pootsman
**Problēma:** Eestikeelne merendustermin on „pootsman“; kuju „bootsman“ ei vasta eesti õigekirjale.
**LV etalons (konteksts):** bocmanis
**DE konteksts:** Bootsmann
**Smagums:** HIGH
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0163
**Card ID:** b2-Borte-288
**Field:** etText
**CURRENT:** äärekivi
**PROPOSED_ET:** ääris
**Problēma:** „Äärekivi“ tähendab äärekivi või curb'i; Borte on dekoratiivne ääris, pael või kant.
**LV etalons (konteksts):** apmale
**DE konteksts:** Borte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0164
**Card ID:** b2-Brandschaden-292
**Field:** etText
**CURRENT:** tulekahjukahju
**PROPOSED_ET:** tulekahju tekitatud kahju
**Problēma:** „Tulekahjukahju“ on ebaloomulik ja tähenduslikult kohmakas liitsõna; mõte on tulekahju põhjustatud kahju.
**LV etalons (konteksts):** ugunsgrēka nodarītais zaudējums
**DE konteksts:** Brandschaden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0165
**Card ID:** b2-Brandanschlag-294
**Field:** etText
**CURRENT:** süütamine
**PROPOSED_ET:** süütamisrünnak
**Problēma:** „Süütamine“ tähendab tule süütamist, kuid Brandanschlag on sihilik süütamisrünnak või süütamisakt.
**LV etalons (konteksts):** ļaunprātīga dedzināšana
**DE konteksts:** Brandanschlag
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0166
**Card ID:** b2-Brandmal-295
**Field:** etText
**CURRENT:** põletus • põletusarm
**PROPOSED_ET:** põletusjälg • põletusarm
**Problēma:** Brandmal tähendab põletusjälge või -armi; „põletus“ üksi tähendab pigem põletust ennast.
**LV etalons (konteksts):** apdegums • apdeguma rēta
**DE konteksts:** Brandmal
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0167
**Card ID:** b2-Brettsegeln-301
**Field:** etText
**CURRENT:** purjelaud
**PROPOSED_ET:** purjelauasõit
**Problēma:** „Purjelaud“ on vahend ehk laud; Brettsegeln tähistab purjelauasõitu ehk windsurfing'u harrastamist.
**LV etalons (konteksts):** vindsērfings
**DE konteksts:** Brettsegeln
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0168
**Card ID:** b2-bürgerlich-321
**Field:** etText
**CURRENT:** kodanlik • kodanike • kodanlik
**PROPOSED_ET:** kodanlik • kodaniku- • kodanlik
**Problēma:** Teine vaste „kodanike” on mitmuse omastav, mitte omadussõna või korrektne liitsõna tüvi.
**LV etalons (konteksts):** pilsonisks • pilsoņu • buržuāzisks • buržuāzijas
**DE konteksts:** bürgerlich
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0169
**Card ID:** b2-Datei-356
**Field:** etText
**CURRENT:** kartoteek
**PROPOSED_ET:** fail
**Problēma:** Saksa „Datei” tähendab arvutifaili; „kartoteek” tähendab kaartide või kirjete registrit.
**LV etalons (konteksts):** kartotēka
**DE konteksts:** Datei
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0170
**Card ID:** b2-Datenträger-358
**Field:** etText
**CURRENT:** diskett
**PROPOSED_ET:** andmekandja
**Problēma:** Datenträger tähendab üldiselt andmekandjat, mitte ainult disketti.
**LV etalons (konteksts):** diskete
**DE konteksts:** Datenträger
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0171
**Card ID:** b2-Dealer-361
**Field:** etText
**CURRENT:** nartkootikumide illegaalne müüja
**PROPOSED_ET:** illegaalne narkootikumide müüja
**Problēma:** Sõnas nartkootikumide on kirjaviga ning eestikeelne sõnajärg on ebaloomulik.
**LV etalons (konteksts):** nelegāls narkotiku tirgotājs
**DE konteksts:** Dealer
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0172
**Card ID:** b2-dehnen-367
**Field:** etText
**CURRENT:** venitama • sirutama • venima • sirutuma • vinduma
**PROPOSED_ET:** venitama • sirutama • venima • sirutuma
**Problēma:** Vinduma tähendab virelema või vinduma, mitte venitama ega venima.
**LV etalons (konteksts):** stiept • staipīt • stiepties • staipīties • vilkties
**DE konteksts:** dehnen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0173
**Card ID:** b2-dementieren-374
**Field:** etText
**CURRENT:** teavet tagasi kutsuma
**PROPOSED_ET:** ümber lükkama • eitama
**Problēma:** Dementieren tähendab väidet või teadet ümber lükkama, mitte teavet tagasi kutsuma.
**LV etalons (konteksts):** atsaukt informāciju
**DE konteksts:** dementieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0174
**Card ID:** b2-derartig-380
**Field:** etText
**CURRENT:** selline • samasugune
**PROPOSED_ET:** selline • samasugune
**Problēma:** Sõnas samasugune on kirjaviga: puudu on täht a.
**LV etalons (konteksts):** tāds • šāds • tamlīdzīgi
**DE konteksts:** derartig
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0175
**Card ID:** b2-diejenige-397
**Field:** etText
**CURRENT:** nõnda
**PROPOSED_ET:** see
**Problēma:** Diejenige tähendab 'see (naissoost isik või asi)', mitte 'nõnda'.
**LV etalons (konteksts):** tā
**DE konteksts:** diejenige
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0176
**Card ID:** b2-dingen-402
**Field:** etText
**CURRENT:** sõlmima kokkulepet
**PROPOSED_ET:** palkama • tööle võtma
**Problēma:** Dingen tähendab kellegi palkamist või tööle võtmist, mitte lihtsalt kokkuleppe sõlmimist.
**LV etalons (konteksts):** līgt • salīgt
**DE konteksts:** dingen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0177
**Card ID:** b2-Dörrgemüse-421
**Field:** etText
**CURRENT:** kuivatatud juurviljad
**PROPOSED_ET:** kuivatatud köögiviljad
**Problēma:** Juurviljad tähendab eeskätt juurvilju, kuid saksa Gemüse hõlmab kõiki köögivilju.
**LV etalons (konteksts):** kaltēti dārzeņi
**DE konteksts:** Dörrgemüse
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0178
**Card ID:** b2-Dotterblume-428
**Field:** etText
**CURRENT:** tulikas
**PROPOSED_ET:** kullerkupp
**Problēma:** Dotterblume on kullerkupp; tulikas tähistab eesti keeles teist taime, võilillede sugukonna tulikat.
**LV etalons (konteksts):** purene
**DE konteksts:** Dotterblume
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0179
**Card ID:** b2-Dragee-429
**Field:** etText
**CURRENT:** draažee
**PROPOSED_ET:** dražee
**Problēma:** Eesti kirjakeeles on sõna kuju „dražee“, mitte „draažee“.
**LV etalons (konteksts):** dražeja
**DE konteksts:** Dragee
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0180
**Card ID:** b2-Drehung-439
**Field:** etText
**CURRENT:** pöörlemine • pöörde
**PROPOSED_ET:** pöörlemine • pööre
**Problēma:** Teine vaste peab olema nimetavas käändes; „pöörde“ on omastav vorm, mitte märksõna.
**LV etalons (konteksts):** griešanās • apgrieziens
**DE konteksts:** Drehung
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0181
**Card ID:** b2-Drossel-447
**Field:** etText
**CURRENT:** kuldnokk
**PROPOSED_ET:** rästas
**Problēma:** Drossel tähendab rästast; kuldnokk on teine linnuliik, starling.
**LV etalons (konteksts):** strazds
**DE konteksts:** Drossel
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0182
**Card ID:** b2-drosseln-448
**Field:** etText
**CURRENT:** kägistama • lämmatama
**PROPOSED_ET:** kägistama • lämmatama • piirama
**Problēma:** Lisaks lämmatamisele tähendab drosseln ka võimsuse, kiiruse või hulga vähendamist ja piiramist.
**LV etalons (konteksts):** žņaugt • apslāpēt
**DE konteksts:** drosseln
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0183
**Card ID:** b2-Dunst-466
**Field:** etText
**CURRENT:** aur • aurud • eritis • ummehtus • udu • sudu
**PROPOSED_ET:** aur • aurud • udu • sudu
**Problēma:** „eritis” tähendab eritist või väljutist, mitte saksa „Dunsti” ehk auru või udu.
**LV etalons (konteksts):** tvaiks • garaiņi • izgarojumi • tvans • migla • dūmaka
**DE konteksts:** Dunst
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0184
**Card ID:** b2-durchbringen-471
**Field:** etText
**CURRENT:** läbi viima • välja kannatama • saavutama • välja ravima • raiskama
**PROPOSED_ET:** läbi viima • läbi aitama • saavutama • välja ravima • raiskama
**Problēma:** „durchbringen” tähendab kellegi või millegi läbi aitamist; „välja kannatama” tähendab taluma.
**LV etalons (konteksts):** izdabūt cauri • iznest cauri • panākt • izārstēt • izšķērdēt
**DE konteksts:** durchbringen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0185
**Card ID:** b2-durchmachen-479
**Field:** etText
**CURRENT:** üle elama • välja võtma • lõpetama
**PROPOSED_ET:** üle elama • läbi tegema • lõpetama
**Problēma:** „välja võtma” tähendab välja võtma, mitte millegi läbielamist või läbimist.
**LV etalons (konteksts):** pārdzīvot • izņemt • pabeigt
**DE konteksts:** durchmachen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0186
**Card ID:** b2-durchsetzen-486
**Field:** etText
**CURRENT:** läbi viima • saavutama
**PROPOSED_ET:** läbi suruma • saavutama
**Problēma:** „durchsetzen” tähendab millegi läbisurumist või maksmapanekut; „läbi viima” tähendab ellu viima.
**LV etalons (konteksts):** izdabūt cauri • panākt
**DE konteksts:** durchsetzen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0187
**Card ID:** b2-Dürre-489
**Field:** etText
**CURRENT:** kuivus
**PROPOSED_ET:** põud
**Problēma:** „Dürre” tähendab põuda ehk pikaajalist sademete puudumist, mitte üldist kuivust.
**LV etalons (konteksts):** sausums
**DE konteksts:** Dürre
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0188
**Card ID:** b2-edel-497
**Field:** etText
**CURRENT:** õilis • ülev • aadlik
**PROPOSED_ET:** õilis • ülev • aadellik
**Problēma:** „aadlik” on nimisõna; omadussõnana on õige „aadellik”.
**LV etalons (konteksts):** cēls • cildens • dižciltīgs
**DE konteksts:** edel
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0189
**Card ID:** b2-Eheberatung-501
**Field:** etText
**CURRENT:** pereabi nõustamine
**PROPOSED_ET:** abielunõustamine
**Problēma:** „Eheberatung” tähendab abielu- või paarinõustamist; „pereabi nõustamine” on teise tähendusega.
**LV etalons (konteksts):** ģimenes konsultācija
**DE konteksts:** Eheberatung
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0190
**Card ID:** b2-Eheschließung-504
**Field:** etText
**CURRENT:** abielu • laulumine
**PROPOSED_ET:** abiellumine • laulatamine
**Problēma:** „laulumine” tähendab laulmist; abielu sõlmimise tähenduses on õiged „abiellumine” ja „laulatamine”.
**LV etalons (konteksts):** laulības • salaulāšanās
**DE konteksts:** Eheschließung
**Smagums:** HIGH
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0191
**Card ID:** b2-ehren-505
**Field:** etText
**CURRENT:** austama • lugu pidama • auhindama
**PROPOSED_ET:** austama • lugu pidama • au sees hoidma
**Problēma:** „auhindama” tähendab auhinna andmist, mitte austamist või au sees hoidmist.
**LV etalons (konteksts):** godāt • cienīt • godināt
**DE konteksts:** ehren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0192
**Card ID:** b2-ehrenamtlich-507
**Field:** etText
**CURRENT:** tasuta • auülesannet täites
**PROPOSED_ET:** vabatahtlikult • auameti korras
**Problēma:** „ehrenamtlich” tähendab vabatahtlikult või auameti korras, mitte lihtsalt tasuta.
**LV etalons (konteksts):** bez maksas • goda pienākumu izpildot
**DE konteksts:** ehrenamtlich
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0193
**Card ID:** b2-Ehrenpflicht-509
**Field:** etText
**CURRENT:** auülesanne
**PROPOSED_ET:** aukohustus
**Problēma:** Ehrenpflicht tähendab aukohustust; auülesanne viitab pigem aukohustuse asemel ülesandele.
**LV etalons (konteksts):** goda pienākums
**DE konteksts:** Ehrenpflicht
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0194
**Card ID:** b2-eigenhändig-524
**Field:** etText
**CURRENT:** isetehtud
**PROPOSED_ET:** oma käega tehtud
**Problēma:** Iset tehtud tähendab isetehtud või omavalmistatud; eigenhändig tähendab oma käega tehtud või isiklikult.
**LV etalons (konteksts):** pašrocīgs
**DE konteksts:** eigenhändig
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0195
**Card ID:** b2-einfassen-540
**Field:** etText
**CURRENT:** sisaldama • raamima • kinnitama
**PROPOSED_ET:** ääristama • raamima • ehtesse kinnitama
**Problēma:** Sisaldama tähendab sisaldama, mitte millegi ümber ääristamist; ehtetermin vajab täpsustust.
**LV etalons (konteksts):** ietvert • ierāmēt • iedarināt apkalumā
**DE konteksts:** einfassen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0196
**Card ID:** b2-einflussreich-541
**Field:** etText
**CURRENT:** mõjukas • muljetavaldav
**PROPOSED_ET:** mõjukas
**Problēma:** Muljetavaldav tähendab impressive, mitte mõjuvõimas; see on einflussreichi tähendusest erinev.
**LV etalons (konteksts):** ietekmīgs
**DE konteksts:** einflussreich
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0197
**Card ID:** b2-einfrieren-543
**Field:** etText
**CURRENT:** külmutama • sisse külmutama • katkestama
**PROPOSED_ET:** külmutama • peatama
**Problēma:** Sisse külmutama on ebaloomulik otsetõlge; raha või tegevuse puhul kasutatakse külmutama või peatama.
**LV etalons (konteksts):** sasaldēt • iesaldēt • pārtraukt
**DE konteksts:** einfrieren
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0198
**Card ID:** b2-eingehend-550
**Field:** etText
**CURRENT:** põhjalik • pisiasjaline • sissetulev
**PROPOSED_ET:** põhjalik • üksikasjalik • sissetulev
**Problēma:** Pisiasjaline on selles tähenduses ebaloomulikum; tavapärane vaste on üksikasjalik.
**LV etalons (konteksts):** pamatīgs • sīks • ienākošs
**DE konteksts:** eingehend
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0199
**Card ID:** b2-eingleisig-557
**Field:** etText
**CURRENT:** monorööpa-
**PROPOSED_ET:** üherööpmeline
**Problēma:** Monorööpa- tähendab monoraili ehk üherööpalist süsteemi; eingleisig tähendab ühe rööpapaariga või üherööpmelist.
**LV etalons (konteksts):** viensliežu-
**DE konteksts:** eingleisig
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0200
**Card ID:** b2-eingrenzen-558
**Field:** etText
**CURRENT:** piirama • eraldama
**PROPOSED_ET:** piirama • piiritlema
**Problēma:** „Eraldama” tähendab eraldamist, mitte tähenduse või ulatuse piiritlemist.
**LV etalons (konteksts):** ierobežot • norobežot
**DE konteksts:** eingrenzen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0201
**Card ID:** b2-Einigkeit-561
**Field:** etText
**CURRENT:** üksus • ühtsus • üksmeel
**PROPOSED_ET:** ühtsus • üksmeel
**Problēma:** „Üksus” tähendab eeskätt üksikut ühikut või struktuuriüksust, mitte üksmeelt või ühtsust.
**LV etalons (konteksts):** vienība • vienotība • vienprātība
**DE konteksts:** Einigkeit
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0202
**Card ID:** b2-einleiten-566
**Field:** etText
**CURRENT:** sisestama
**PROPOSED_ET:** sisse juhatama • algatama
**Problēma:** „Einleiten” tähendab millegi alustamist või sissejuhatamist; „sisestama” tähendab andmete sisestamist.
**LV etalons (konteksts):** ievadīt
**DE konteksts:** einleiten
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0203
**Card ID:** b2-einliefern-568
**Field:** etText
**CURRENT:** sisse tooma • kohale tooma
**PROPOSED_ET:** sisse andma • (haiglasse) toimetama
**Problēma:** „Einliefern” tähendab inimese või saadetise asutusse üleandmist, sageli haiglasse toimetamist.
**LV etalons (konteksts):** ievest • atvest
**DE konteksts:** einliefern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0204
**Card ID:** b2-einmachen-569
**Field:** etText
**CURRENT:** konserveerima • marineerima • keetma
**PROPOSED_ET:** konserveerima • marineerima • moosiks keetma
**Problēma:** Üldine „keetma” ei väljenda toidu säilitamiseks või moosiks valmistamist.
**LV etalons (konteksts):** iekonservēt • iemarinēt • ievārīt
**DE konteksts:** einmachen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0205
**Card ID:** b2-einüben-589
**Field:** etText
**CURRENT:** õppima • lavastama
**PROPOSED_ET:** harjutama • selgeks õppima
**Problēma:** „Einüben” tähendab harjutamist või millegi selgeks õppimist; „lavastama” tähendab lavastuse loomist.
**LV etalons (konteksts):** iemācīties • iestudēt
**DE konteksts:** einüben
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0206
**Card ID:** b2-eitel-605
**Field:** etText
**CURRENT:** auahne • ülbe • edev • pinnapealne • tühine • näidislik
**PROPOSED_ET:** edev • ennasttäis • asjatu • tühine
**Problēma:** „Auahne”, „ülbe”, „pinnapealne” ja „näidislik” ei vasta täpselt sõna põhitähendustele „edev” ja „asjatu”.
**LV etalons (konteksts):** godkārīgs • uzpūtīgs • iedomīgs • sekls • tukšs • ārišķīgs
**DE konteksts:** eitel
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0207
**Card ID:** b2-entbehren-616
**Field:** etText
**CURRENT:** läbi ajama • kannatama • puuduma
**PROPOSED_ET:** läbi ajama • ilma olema • puudust kannatama
**Problēma:** „Puuduma” tähendab puudulik olema, mitte millestki ilma olema või ilma hakkama saama.
**LV etalons (konteksts):** iztikt bez • pieciest • trūkt
**DE konteksts:** entbehren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0208
**Card ID:** b2-entehren-619
**Field:** etText
**CURRENT:** au röövima • häbistama
**PROPOSED_ET:** au teotama • häbistama
**Problēma:** „Au röövima” ei ole loomulik ega täpne eesti väljend; tähendus on kellegi au teotama või häbistama.
**LV etalons (konteksts):** laupīt godu • apkaunot
**DE konteksts:** entehren
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0209
**Card ID:** b2-enterben-621
**Field:** etText
**CURRENT:** pärandit ära võtma
**PROPOSED_ET:** pärandist ilma jätma
**Problēma:** Tähendus on arusaadav, kuid loomulikum ja täpsem vaste on „pärandist ilma jätma”.
**LV etalons (konteksts):** atņemt mantojumu
**DE konteksts:** enterben
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0210
**Card ID:** b2-entfallen-622
**Field:** etText
**CURRENT:** välja kukkuma • unustuma
**PROPOSED_ET:** ära jääma • välja langema • ununema
**Problēma:** „Välja kukkuma” tähendab füüsiliselt kukkumist ega vasta tavapärasele tähendusele „ära jääma” või „välja langema”.
**LV etalons (konteksts):** izkrist • aizmirsties
**DE konteksts:** entfallen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0211
**Card ID:** b2-entfalten-623
**Field:** etText
**CURRENT:** lahti keerama • lahti voltima • arendama • laiendama
**PROPOSED_ET:** lahti rullima • lahti voltima • arendama • laiendama
**Problēma:** „Lahti keerama” tähendab pigem lahti kruvimist; „entfalten” tähendab lahti rullima või lahti voltima.
**LV etalons (konteksts):** attīt • atlocīt • attīstīt • izvērst
**DE konteksts:** entfalten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0212
**Card ID:** b2-sich entfalten-624
**Field:** etText
**CURRENT:** avanema • vabanema • arenema • laienema
**PROPOSED_ET:** avanema • arenema • õitsele puhkema • välja kujunema
**Problēma:** „Vabanema” tähendab vabaks saama, mitte arenema või oma potentsiaali avaldama.
**LV etalons (konteksts):** atvērties • atraisīties • attīstīties • izvērsties
**DE konteksts:** sich entfalten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0213
**Card ID:** b2-enthüllen-630
**Field:** etText
**CURRENT:** avastama • avama
**PROPOSED_ET:** paljastama • avalikustama
**Problēma:** „Avastama” tähendab midagi esimest korda leidma ning „avama” avamist; mõte on paljastada või avalikustada.
**LV etalons (konteksts):** atklāt • atsegt
**DE konteksts:** enthüllen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0214
**Card ID:** b2-entmutigen-637
**Field:** etText
**CURRENT:** julgust võtma
**PROPOSED_ET:** julgust vähendama • heidutama
**Problēma:** „Julgust võtma” tähendab julgust koguma, seega on tähendus vastupidine sõnale „entmutigen”.
**LV etalons (konteksts):** atņemt drosmi
**DE konteksts:** entmutigen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0215
**Card ID:** b2-Entwerter-647
**Field:** etText
**CURRENT:** pilettempler
**PROPOSED_ET:** piletikomposter
**Problēma:** „Piletitempler” ei ole tavapärane eesti vaste; pileti kehtetuks tegemise seade on „piletikomposter”.
**LV etalons (konteksts):** kompostrs
**DE konteksts:** Entwerter
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0216
**Card ID:** b2-Erachten-660
**Field:** etText
**CURRENT:** mõtted • arusaam
**PROPOSED_ET:** arvamus • hinnang
**Problēma:** „Erachten” tähendab arvamust või hinnangut, mitte üldiselt mõtteid või arusaama.
**LV etalons (konteksts):** domas • ieskats
**DE konteksts:** Erachten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0217
**Card ID:** b2-Erbauer-662
**Field:** etText
**CURRENT:** kraana
**PROPOSED_ET:** ehitaja • rajaja
**Problēma:** „Kraana” tähendab tõsteseadet ega ole seotud ehitaja või rajajaga.
**LV etalons (konteksts):** cēlājs
**DE konteksts:** Erbauer
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0218
**Card ID:** b2-erbrechen-664
**Field:** etText
**CURRENT:** lahti murdma • sisse murdma
**PROPOSED_ET:** oksendama
**Problēma:** Praegused vasted tähendavad lahti või sisse murdma; „erbrechen” tähendab oksendama.
**LV etalons (konteksts):** vemt
**DE konteksts:** erbrechen
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0219
**Card ID:** b2-Erdrutsch-667
**Field:** etText
**CURRENT:** varing
**PROPOSED_ET:** maalihe
**Problēma:** „Varing” on üldine kokkuvarisemine; „Erdrutsch” täpne eesti vaste on „maalihe”.
**LV etalons (konteksts):** nogruvums
**DE konteksts:** Erdrutsch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0220
**Card ID:** b2-erlangen-682
**Field:** etText
**CURRENT:** ulatuma • saavutama • omandama
**PROPOSED_ET:** saavutama • omandama • kätte saama
**Problēma:** „Ulatuma” tähendab ulatuma või küündima, mitte millegi saavutamist või omandamist.
**LV etalons (konteksts):** aizsniegt • sasniegt • gūt • iegūt
**DE konteksts:** erlangen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0221
**Card ID:** b2-Erlass-683
**Field:** etText
**CURRENT:** korraldus • käsk • dekreet • vallandamine
**PROPOSED_ET:** korraldus • käsk • dekreet • võlast vabastamine
**Problēma:** Erlass tähendab määrust või korraldust; „vallandamine” on siin eksitav tähendus.
**LV etalons (konteksts):** rīkojums • pavēle • dekrēts • atlaišana
**DE konteksts:** Erlass
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0222
**Card ID:** b2-erlassen-684
**Field:** etText
**CURRENT:** väljastama • vallandama • vabastama
**PROPOSED_ET:** välja andma • vabastama • maha kandma
**Problēma:** Seaduse või võla kohta ei tähenda „erlassen” vallandamist; sobivad „välja andma” ja „maha kandma”.
**LV etalons (konteksts):** izdot • atlaist • atbrīvot
**DE konteksts:** erlassen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0223
**Card ID:** b2-erleiden-687
**Field:** etText
**CURRENT:** kannatama • üle elama • saama alistatud
**PROPOSED_ET:** kannatama • üle elama • lüüasaamist kannatama
**Problēma:** „Saama alistatud” on ebaloomulik ning tähendab pigem aktiivset alistamist, mitte kaotuse kannatamist.
**LV etalons (konteksts):** ciest • izciest • pārciest • tikt sakautam
**DE konteksts:** erleiden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0224
**Card ID:** b2-Eröffnung-695
**Field:** etText
**CURRENT:** avamine • avastamine • postkaart • teadaanne • avastus
**PROPOSED_ET:** avamine • pidulik avamine • avasõna
**Problēma:** „Avastamine”, „postkaart” ja „avastus” tähendavad discovery või postcard, mitte avamist.
**LV etalons (konteksts):** atvēršana • atklāšana • atklātne • paziņojums • atklājums
**DE konteksts:** Eröffnung
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0225
**Card ID:** b2-Erreger-700
**Field:** etText
**CURRENT:** haigustekitaja • viirus
**PROPOSED_ET:** haigustekitaja
**Problēma:** „Erreger” on üldmõiste haigustekitaja kohta ega tähenda tingimata viirust.
**LV etalons (konteksts):** slimības ierosinātājs • vīruss
**DE konteksts:** Erreger
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0226
**Card ID:** b2-ersehen-709
**Field:** etText
**CURRENT:** nägema • märkama
**PROPOSED_ET:** välja lugema • järeldama
**Problēma:** „Etwas ersehen” tähendab kontekstist välja lugemist või järeldamist, mitte lihtsalt nägemist või märkamist.
**LV etalons (konteksts):** redzēt • saskatīt
**DE konteksts:** ersehen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0227
**Card ID:** b2-ertönen-716
**Field:** etText
**CURRENT:** kõlama hakkama
**PROPOSED_ET:** kõlama • kostma
**Problēma:** „Kõlama hakkama” lisab algamise tähenduse; ertönen tähendab heli kõlamist või kostmist.
**LV etalons (konteksts):** atskanēt • ieskanēties
**DE konteksts:** ertönen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0228
**Card ID:** b2-Fachabitur-746
**Field:** etText
**CURRENT:** lõpetatud kutseõpe
**PROPOSED_ET:** erialane küpsustunnistus
**Problēma:** Fachabitur on erialane kõrgkooli sisseastumise kvalifikatsioon, mitte lõpetatud kutseõpe.
**LV etalons (konteksts):** pabeigta apmācība arodskolā
**DE konteksts:** Fachabitur
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0229
**Card ID:** b2-Fahrdamm-752
**Field:** etText
**CURRENT:** sõidutee • sillutis
**PROPOSED_ET:** sõidutee
**Problēma:** Fahrdamm tähendab sõiduteed, mitte üldiselt sillutist või teekattematerjali.
**LV etalons (konteksts):** ielas braucamā daļa • bruģis
**DE konteksts:** Fahrdamm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0230
**Card ID:** b2-fahrlässig-754
**Field:** etText
**CURRENT:** hooletu • pealiskaudne
**PROPOSED_ET:** hooletu
**Problēma:** Pealiskaudne tähendab „superficial” ega vasta saksa sõna tähendusele „hooletu/negligent”.
**LV etalons (konteksts):** neuzmanīgs • paviršs
**DE konteksts:** fahrlässig
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0231
**Card ID:** b2-Falke-755
**Field:** etText
**CURRENT:** kull
**PROPOSED_ET:** pistrik
**Problēma:** Kull tähendab eesti keeles hawk; Falke on pistrik ehk falcon.
**LV etalons (konteksts):** piekūns
**DE konteksts:** Falke
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0232
**Card ID:** b2-Faulbaum-771
**Field:** etText
**CURRENT:** toomingas
**PROPOSED_ET:** paakspuu
**Problēma:** Faulbaum on paakspuu; toomingas tähendab bird cherry ja on teine taim.
**LV etalons (konteksts):** ieva
**DE konteksts:** Faulbaum
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0233
**Card ID:** b2-Fessel-781
**Field:** etText
**CURRENT:** kett • ahelad
**PROPOSED_ET:** kett • köidik
**Problēma:** Teine vaste on mitmuses, kuigi saksa märksõna on ainsuses; „köidik” on täpsem ahela või köite vaste.
**LV etalons (konteksts):** ķēde • važas
**DE konteksts:** Fessel
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0234
**Card ID:** b2-Fetzen-786
**Field:** etText
**CURRENT:** räbalad
**PROPOSED_ET:** räbal • ribad
**Problēma:** Saksa märksõna on ainsuses; „räbalad” on ainult mitmus ja ei vasta märksõna põhivormile.
**LV etalons (konteksts):** skrandas • driska
**DE konteksts:** Fetzen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0235
**Card ID:** b2-fliederfarben-800
**Field:** etText
**CURRENT:** lilla värvi
**PROPOSED_ET:** sirelililla
**Problēma:** „Lilla värvi” on üldine purple, kuid „fliederfarben” tähendab täpsemalt sirelilillat ehk sireli värvi.
**LV etalons (konteksts):** ceriņu krāsā
**DE konteksts:** fliederfarben
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0236
**Card ID:** b2-Flussarm-811
**Field:** etText
**CURRENT:** hargjõgi
**PROPOSED_ET:** jõeharu
**Problēma:** „Hargjõgi” tähistab pigem harunenud jõge või jõeharu; saksa Flussarm täpne vaste on „jõeharu”.
**LV etalons (konteksts):** atteka
**DE konteksts:** Flussarm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0237
**Card ID:** b2-Flussbett-812
**Field:** etText
**CURRENT:** sängi (jõe)
**PROPOSED_ET:** jõesäng
**Problēma:** „Sängi” on käändevorm, mitte märksõna põhivorm; loomulik ja täpne vaste on liitsõna „jõesäng”.
**LV etalons (konteksts):** gultne
**DE konteksts:** Flussbett
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0238
**Card ID:** b2-freilich-831
**Field:** etText
**CURRENT:** muidugi • kahtlemata • aga • ainult
**PROPOSED_ET:** muidugi • kahtlemata • aga
**Problēma:** Freilich tähendab siin „muidugi/kahtlemata” või vastandavat „aga”, mitte iseseisvalt „ainult”.
**LV etalons (konteksts):** protams • bez šaubām • bet • tikai
**DE konteksts:** freilich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0239
**Card ID:** b2-freisprechen-834
**Field:** etText
**CURRENT:** õigustama
**PROPOSED_ET:** õigeks mõistma
**Problēma:** Õigustama tähendab põhjendama või õigustama; freisprechen tähendab süüdistatava õigeks mõistmist.
**LV etalons (konteksts):** attaisnot
**DE konteksts:** freisprechen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0240
**Card ID:** b2-fremdgehen-836
**Field:** etText
**CURRENT:** ebalojaalseks muutuma
**PROPOSED_ET:** truudust murdma
**Problēma:** Fremdgehen tähendab eelkõige suhtes truudusetu olema või abielu rikkuma, mitte üldiselt ebalojaalseks muutuma.
**LV etalons (konteksts):** kļūt neuzticīgam
**DE konteksts:** fremdgehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0241
**Card ID:** b2-friedfertig-837
**Field:** etText
**CURRENT:** rahumeelne • sallija
**PROPOSED_ET:** rahumeelne • rahuarmastav
**Problēma:** Sallija on salliv inimene; friedfertig tähendab rahumeelset või rahuarmastavat.
**LV etalons (konteksts):** miermīlīgs • saticīgs
**DE konteksts:** friedfertig
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0242
**Card ID:** b2-fristlos-838
**Field:** etText
**CURRENT:** tähtajatu
**PROPOSED_ET:** etteteatamistähtajata
**Problēma:** Fristlos tähendab etteteatamistähtajata või ilma tähtajata lõpetamist, mitte üldiselt tähtajatut.
**LV etalons (konteksts):** beztermiņa
**DE konteksts:** fristlos
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0243
**Card ID:** b2-Führernatur-847
**Field:** etText
**CURRENT:** liidritüüp • liider
**PROPOSED_ET:** liidri loomus • juhivõimed
**Problēma:** Führernatur tähistab juhi loomust või juhtimisomadusi, mitte lihtsalt liidrit ennast.
**LV etalons (konteksts):** līdera tips • līderis
**DE konteksts:** Führernatur
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0244
**Card ID:** b2-Funkstation-851
**Field:** etText
**CURRENT:** saatejaam
**PROPOSED_ET:** raadiojaam
**Problēma:** Funkstation on raadiojaam või raadiosidejaam; saatejaam viitab pigem ringhäälingu edastusjaamale.
**LV etalons (konteksts):** raidstacija
**DE konteksts:** Funkstation
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0245
**Card ID:** b2-Funkstörung-852
**Field:** etText
**CURRENT:** ülekandehäired
**PROPOSED_ET:** raadiosidehäire
**Problēma:** Funkstörung tähendab raadioside- või raadiohäiret; ülekandehäired on liiga üldine.
**LV etalons (konteksts):** traucējumi pārraidē
**DE konteksts:** Funkstörung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0246
**Card ID:** b2-Funktionär-854
**Field:** etText
**CURRENT:** aktivist • töötaja
**PROPOSED_ET:** funktsionäär
**Problēma:** Funktionär on ametnik või organisatsiooni funktsionäär, mitte üldiselt aktivist või töötaja.
**LV etalons (konteksts):** aktīvists • darbinieks
**DE konteksts:** Funktionär
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0247
**Card ID:** b2-Furche-855
**Field:** etText
**CURRENT:** vagu • kortsujoon
**PROPOSED_ET:** vagu • korts
**Problēma:** Kortsujoon on ebaloomulik; Furche tähistab kortsu või vagu.
**LV etalons (konteksts):** vaga • krunka • grumba
**DE konteksts:** Furche
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0248
**Card ID:** b2-gängig-863
**Field:** etText
**CURRENT:** käiv
**PROPOSED_ET:** levinud • tavapärane
**Problēma:** Gängig tähendab tavaliselt levinud, tavapärast või üldkasutatavat; käiv tähendab pigem töötavat või toimivat.
**LV etalons (konteksts):** ejošs
**DE konteksts:** gängig
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0249
**Card ID:** b2-Gasableser-870
**Field:** etText
**CURRENT:** gaasiarvesti
**PROPOSED_ET:** gaasinäidu lugeja
**Problēma:** Gasableser on gaasimõõtja näidu lugeja ehk inimene, mitte gaasiarvesti ise.
**LV etalons (konteksts):** gāzes skaitītājs
**DE konteksts:** Gasableser
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0250
**Card ID:** b2-gebrechlich-877
**Field:** etText
**CURRENT:** nõrk • kidur • vilets • vigane • vigadega
**PROPOSED_ET:** nõrk • kidur • vilets • põdur
**Problēma:** „Vigane” ja „vigadega” tähendavad defektset või vigadega, mitte füüsiliselt nõrka ja põdurat.
**LV etalons (konteksts):** vārgs • sanīcis • gaudens • kroplīgs • pilns vainām
**DE konteksts:** gebrechlich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0251
**Card ID:** b2-gedeihen-880
**Field:** etText
**CURRENT:** hästi õnnestuma • õnnestuma • õitsema
**PROPOSED_ET:** edenema • õitsema • hästi kasvama
**Problēma:** „Gedeihen” tähendab edenemist ja head kasvamist; „õnnestuma” tähendab peamiselt õnnestumist.
**LV etalons (konteksts):** labi padoties • izdoties • zelt • plaukt
**DE konteksts:** gedeihen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0252
**Card ID:** b2-gedenken-881
**Field:** etText
**CURRENT:** kavatsema • meenutama • mainima
**PROPOSED_ET:** kavatsema • meenutama • mälestama
**Problēma:** „Mainima” tähendab mainimist, mitte kellegi või millegi mälestamist, mis on „gedenken” keskne tähendus.
**LV etalons (konteksts):** būt nodomājušam • atcerēties • atminēties • pieminēt
**DE konteksts:** gedenken
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0253
**Card ID:** b2-Gefährte-884
**Field:** etText
**CURRENT:** liige
**PROPOSED_ET:** kaaslane • seltsiline
**Problēma:** „Gefährte” tähendab kaaslast või seltsilist; „liige” tähendab organisatsiooni või rühma liiget.
**LV etalons (konteksts):** biedrs
**DE konteksts:** Gefährte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0254
**Card ID:** b2-Gefallen-885
**Field:** etText
**CURRENT:** meeldivus
**PROPOSED_ET:** meeldimine • heameel
**Problēma:** „Gefallen” tähendab meeldimist või heameelt; „meeldivus” tähistab pigem meeldivat omadust.
**LV etalons (konteksts):** patikšana • patika
**DE konteksts:** Gefallen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0255
**Card ID:** b2-gefällig-886
**Field:** etText
**CURRENT:** meeldiv • teenistusvalmis • lahke
**PROPOSED_ET:** meeldiv • vastutulelik • lahke
**Problēma:** „Teenistusvalmis” tähendab teenistuseks valmis, mitte inimestele vastutulelikku või abivalmit.
**LV etalons (konteksts):** patīkams • pakalpīgs • iztapīgs • laipns
**DE konteksts:** gefällig
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0256
**Card ID:** b2-gelaunt-903
**Field:** etText
**CURRENT:** meeleolu
**PROPOSED_ET:** meeleolus
**Problēma:** Saksa „gelaunt” on omadussõna; „meeleolu” on nimisõna. Vastav eestikeelne omadussõnaline vaste on „meeleolus”.
**LV etalons (konteksts):** omā
**DE konteksts:** gelaunt
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0257
**Card ID:** b2-Geliebte-910
**Field:** etText
**CURRENT:** kallis • armastatud • lemmik
**PROPOSED_ET:** armastatu (mees) • kallim
**Problēma:** Meessoost nimisõnana tähendab „Geliebte” armastatut või kallimat; „lemmik” tähendab eeskätt lemmikut.
**LV etalons (konteksts):** mīļais • mīļotais • mīļākais
**DE konteksts:** Geliebte
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0258
**Card ID:** b2-Gemisch-918
**Field:** etText
**CURRENT:** segu • segamini • kokteil
**PROPOSED_ET:** segu • segum • kokteil
**Problēma:** „Segamini” on määrsõna või omadussõna, kuid saksa „Gemisch” ja teised vasted on nimisõnad.
**LV etalons (konteksts):** maisījums • sajaukums • mistrojums
**DE konteksts:** Gemisch
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0259
**Card ID:** b2-Gemüt-920
**Field:** etText
**CURRENT:** iseloom • loomus • mõtted
**PROPOSED_ET:** meel • loomus • iseloom
**Problēma:** „Gemüt” viitab inimese sisemisele loomusele või meelelaadile, mitte otseselt tema mõtetele.
**LV etalons (konteksts):** raksturs • daba • domas • prāti
**DE konteksts:** Gemüt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0260
**Card ID:** b2-geraten-935
**Field:** etText
**CURRENT:** sattuma • jõudma • alistuma • õnnestuma • loobuma
**PROPOSED_ET:** sattuma • õnnestuma
**Problēma:** „alistuma” ja „loobuma” tähendavad alistumist ja loobumist, mitte saksa verbi geraten põhitähendusi.
**LV etalons (konteksts):** nonākt • nokļūt • padoties • izdoties • atsisties
**DE konteksts:** geraten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0261
**Card ID:** b2-Geratewohl-936
**Field:** etText
**CURRENT:** hea õnn
**PROPOSED_ET:** juhus
**Problēma:** Geratewohl tähendab juhuslikkust või juhuse hooleks jätmist, mitte lihtsalt head õnne.
**LV etalons (konteksts):** laba laime
**DE konteksts:** Geratewohl
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0262
**Card ID:** b2-Gerede-938
**Field:** etText
**CURRENT:** jutt • kõned • kuulujutud
**PROPOSED_ET:** jutt • lobisemine • kuulujutud
**Problēma:** „kõned” tähendab kõnesid või telefonikõnesid, mitte Gerede tähenduses lobisemist ega tühja juttu.
**LV etalons (konteksts):** runāšana • runas • ļaužu valodas • tenkas
**DE konteksts:** Gerede
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0263
**Card ID:** b2-Gerippe-940
**Field:** etText
**CURRENT:** luukere • korjus • karkass
**PROPOSED_ET:** luukere • karkass
**Problēma:** „korjus” tähendab surnud looma või inimese keha, mitte luustikku ega karkassi.
**LV etalons (konteksts):** skelets • ģindenis • karkass
**DE konteksts:** Gerippe
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0264
**Card ID:** b2-Gesamtzahl-942
**Field:** etText
**CURRENT:** kogusumma
**PROPOSED_ET:** koguarv
**Problēma:** Gesamtzahl tähendab koguarvu ehk elementide koguhulka; „kogusumma” viitab summaarsele väärtusele.
**LV etalons (konteksts):** kopskaits
**DE konteksts:** Gesamtzahl
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0265
**Card ID:** b2-Geschwätz-950
**Field:** etText
**CURRENT:** lobisemine • valetamine • lobajutt
**PROPOSED_ET:** lobisemine • tühi jutt • lobajutt
**Problēma:** Geschwätz on lobisemine või tühi jutt; „valetamine” tähendab teadlikult ebatõe rääkimist.
**LV etalons (konteksts):** pļāpāšana • melošana • pļāpas
**DE konteksts:** Geschwätz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0266
**Card ID:** b2-Gesinnung-958
**Field:** etText
**CURRENT:** vaated • meeleolu
**PROPOSED_ET:** vaated • hoiak
**Problēma:** Gesinnung tähendab inimese hoiakuid, veendumusi või maailmavaadet; „meeleolu” tähendab emotsionaalset tuju.
**LV etalons (konteksts):** uzskati • noskaņojums
**DE konteksts:** Gesinnung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0267
**Card ID:** b2-Gestein-964
**Field:** etText
**CURRENT:** kaljurahn
**PROPOSED_ET:** kivim
**Problēma:** Gestein tähendab kivimit või kivimainet; „kaljurahn” on üksik suur kivimürakas.
**LV etalons (konteksts):** iezis
**DE konteksts:** Gestein
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0268
**Card ID:** b2-getüpfelt-969
**Field:** etText
**CURRENT:** punktiirjooneline
**PROPOSED_ET:** täpiline
**Problēma:** Getüpfelt tähendab täpilist või täppidega kaetud; „punktiirjooneline” kirjeldab katkendlikku joont.
**LV etalons (konteksts):** punktots
**DE konteksts:** getüpfelt
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0269
**Card ID:** b2-Gewässer-975
**Field:** etText
**CURRENT:** veed
**PROPOSED_ET:** veekogu
**Problēma:** Gewässer tähistab veekogu või veekogusid; „veed” on selles tähenduses liiga üldine ja vähem loomulik.
**LV etalons (konteksts):** ūdeņi
**DE konteksts:** Gewässer
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0270
**Card ID:** b2-gewieft-978
**Field:** etText
**CURRENT:** karastunud • kaval
**PROPOSED_ET:** kaval • nutikas
**Problēma:** Gewieft tähendab kavalat, nutikat või elukogenult osavat; „karastunud” tähendab pigem sitkeks muutunud või väljaõppinud.
**LV etalons (konteksts):** rūdīts • izmanīgs
**DE konteksts:** gewieft
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0271
**Card ID:** b2-Gewissheit-980
**Field:** etText
**CURRENT:** selgus • kindlus
**PROPOSED_ET:** kindlus • veendumus
**Problēma:** „Selgus“ tähendab eeskätt clarity, mitte certainty; „kindlus“ ja „veendumus“ vastavad saksa sõnale täpsemalt.
**LV etalons (konteksts):** skaidrība • drošība • noteiktība
**DE konteksts:** Gewissheit
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0272
**Card ID:** b2-Gezeiten-981
**Field:** etText
**CURRENT:** tõus-mõõn
**PROPOSED_ET:** tõus ja mõõn
**Problēma:** Eesti keeles kasutatakse selle nähtuse nimetuses loomulikult ühendit „tõus ja mõõn“, mitte sellist sidekriipsuga kuju.
**LV etalons (konteksts):** plūdmaiņas
**DE konteksts:** Gezeiten
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0273
**Card ID:** b2-Gipsverband-989
**Field:** etText
**CURRENT:** gipsplaastr
**PROPOSED_ET:** kipsiside
**Problēma:** „Gipsplaastr“ tähendab pigem kipsplaastrit; „Gipsverband“ on kipsiside või kipslahas.
**LV etalons (konteksts):** ģipša pārsējs
**DE konteksts:** Gipsverband
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0274
**Card ID:** b2-Glatze-995
**Field:** etText
**CURRENT:** paljas peanahk
**PROPOSED_ET:** kiilaspäisus
**Problēma:** „Paljas peanahk“ kirjeldab nähtavat peanahka, kuid „Glatze“ tähendab kiilaspäisust või kiilast pead.
**LV etalons (konteksts):** kails galvvidus
**DE konteksts:** Glatze
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0275
**Card ID:** b2-Stirnglatze-996
**Field:** etText
**CURRENT:** avatud laup
**PROPOSED_ET:** otsmiku kiilaspäisus
**Problēma:** „Avatud laup“ ei tähenda kiilaspäisust; sõna viitab juuksepiiri taandumisele või kiilaspäisusele otsmikul.
**LV etalons (konteksts):** atsegta piere
**DE konteksts:** Stirnglatze
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0276
**Card ID:** b2-Gleichnis-998
**Field:** etText
**CURRENT:** sarnasus
**PROPOSED_ET:** tähendamissõna • võrdum
**Problēma:** „Sarnasus“ tähendab similarity; „Gleichnis“ on tähendamissõna või võrdum.
**LV etalons (konteksts):** līdzība
**DE konteksts:** Gleichnis
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0277
**Card ID:** b2-gleiten-999
**Field:** etText
**CURRENT:** libisema • planeerima
**PROPOSED_ET:** libisema • liuglema
**Problēma:** „Planeerima“ tähendab planning; liikumist õhus või pinnal tähistab siin „liuglema“.
**LV etalons (konteksts):** slīdēt • planēt
**DE konteksts:** gleiten
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0278
**Card ID:** b2-gliedern-1001
**Field:** etText
**CURRENT:** jagama
**PROPOSED_ET:** liigendama • jaotama
**Problēma:** „Gliedern“ tähendab millegi liigendamist või struktureerimist; „jagama“ on liiga üldine ega anna seda tähendust täpselt edasi.
**LV etalons (konteksts):** sadalīt
**DE konteksts:** gliedern
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0279
**Card ID:** b2-gnädig-1008
**Field:** etText
**CURRENT:** armulik • austatud
**PROPOSED_ET:** armuline • halastav
**Problēma:** „Austatud“ tähendab respected, mitte gracious või merciful; teine vaste muudab tähenduse ebatäpseks.
**LV etalons (konteksts):** žēlīgs • cienīts
**DE konteksts:** gnädig
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0280
**Card ID:** b2-grauen-1022
**Field:** etText
**CURRENT:** kuduma
**PROPOSED_ET:** koitma
**Problēma:** „Kuduma“ tähendab weaving; „grauen“ tähenduses dawn on eesti keeles „koitma“.
**LV etalons (konteksts):** aust
**DE konteksts:** grauen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0281
**Card ID:** b2-Grußwort-1041
**Field:** etText
**CURRENT:** lühike ametlik kõne
**PROPOSED_ET:** tervituskõne
**Problēma:** Tõlge tähendab üldist lühikest ametlikku kõnet ega anna edasi tervituse või tervituskõne tähendust.
**LV etalons (konteksts):** īsa oficiāla uzruna
**DE konteksts:** Grußwort
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0282
**Card ID:** b2-Günstling-1044
**Field:** etText
**CURRENT:** lemmik • soositav
**PROPOSED_ET:** lemmik • soosik
**Problēma:** Soositav on omadussõna; Günstling on nimisõna inimese kohta, keda mõjukas isik soosib.
**LV etalons (konteksts):** favorīts • protežējamais
**DE konteksts:** Günstling
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0283
**Card ID:** b2-gurgeln-1045
**Field:** etText
**CURRENT:** kurku • suud loputama
**PROPOSED_ET:** kuristama • suud loputama
**Problēma:** Kurku on siinses tõlkes vigane sõnaühendi fragment; saksa verb tähendab kuristama.
**LV etalons (konteksts):** skalot rīkli • muti
**DE konteksts:** gurgeln
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0284
**Card ID:** b2-Güte-1048
**Field:** etText
**CURRENT:** heasüdamlikkus • kvaliteet • kasu
**PROPOSED_ET:** heasüdamlikkus • kvaliteet
**Problēma:** Kasu tähendab benefit/profit, mitte Güte tähendustena headus, heatahtlikkus või kvaliteet.
**LV etalons (konteksts):** labsirdība • kvalitāte • labums
**DE konteksts:** Güte
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0285
**Card ID:** b2-haaren-1053
**Field:** etText
**CURRENT:** sulgima (lindudel)
**PROPOSED_ET:** karva ajama • sulgima
**Problēma:** Praegune tõlge piirdub lindude sulgimisega; haaren tähendab üldiselt karvade või sulgede eraldumist.
**LV etalons (konteksts):** mest spalvu
**DE konteksts:** haaren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0286
**Card ID:** b2-Hängebrücke-1062
**Field:** etText
**CURRENT:** vantsild
**PROPOSED_ET:** rippsild
**Problēma:** Vantsild on tross-sild ehk cable-stayed bridge; Hängebrücke on ripp- ehk suspension bridge.
**LV etalons (konteksts):** vanšu tilts
**DE konteksts:** Hängebrücke
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0287
**Card ID:** b2-Hängsel-1063
**Field:** etText
**CURRENT:** õmmeldud riidepuu
**PROPOSED_ET:** õmmeldud riputusaas
**Problēma:** Riidepuu tähendab clothes hanger; Hängsel on rõivale õmmeldud riputusaas või aas.
**LV etalons (konteksts):** piešūtais drēbju pakaramais
**DE konteksts:** Hängsel
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0288
**Card ID:** b2-Harsch-1067
**Field:** etText
**CURRENT:** hangelumi
**PROPOSED_ET:** lumekoorik
**Problēma:** Harsch tähendab külmunud kõva lumekoorikut; hangelumi on tuule kuhjatud või hanges olev lumi.
**LV etalons (konteksts):** sērsna • apledojis sniegs
**DE konteksts:** Harsch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0289
**Card ID:** b2-Haushaltung-1071
**Field:** etText
**CURRENT:** majapidamisõpetus
**PROPOSED_ET:** majapidamine
**Problēma:** Majapidamisõpetus tähendab kodundusõpetust kui õppeainet; Haushaltung tähendab majapidamist või majapidamise korraldamist.
**LV etalons (konteksts):** mājturība
**DE konteksts:** Haushaltung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0290
**Card ID:** b2-Heilkunde-1081
**Field:** etText
**CURRENT:** ravi • meditsiin
**PROPOSED_ET:** arstiteadus • meditsiin
**Problēma:** Ravi tähendab treatment; Heilkunde viitab ravikunstile või meditsiiniteadusele kui valdkonnale.
**LV etalons (konteksts):** ārstniecība • medicīna
**DE konteksts:** Heilkunde
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0291
**Card ID:** b2-Heimkehr-1086
**Field:** etText
**CURRENT:** koju • kodumaale naasmine
**PROPOSED_ET:** kojutulek • kodumaale naasmine
**Problēma:** „Koju” tähendab suunda „koju”, mitte tagasipöördumist kui nimisõna.
**LV etalons (konteksts):** atgriešanās mājās • dzimtenē
**DE konteksts:** Heimkehr
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0292
**Card ID:** b2-Heimwerker-1087
**Field:** etText
**CURRENT:** kodune käsitööline
**PROPOSED_ET:** kodumeister
**Problēma:** „Kodune käsitööline” viitab pigem kodus käsitöö tegijale; Heimwerker on kodumeister või isetegija.
**LV etalons (konteksts):** mājamatnieks • mājmeistars
**DE konteksts:** Heimwerker
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0293
**Card ID:** b2-Hemmung-1092
**Field:** etText
**CURRENT:** takistus • viivitus
**PROPOSED_ET:** takistus • pidurdus
**Problēma:** „Viivitus” tähendab viivitust, kuid Hemmung tähendab siin pidurdust, tõrget või pärssimist.
**LV etalons (konteksts):** kavēklis • šķērslis • aizture
**DE konteksts:** Hemmung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0294
**Card ID:** b2-hingeben-1118
**Field:** etText
**CURRENT:** ära andma • laenuks andma
**PROPOSED_ET:** ära andma • pühenduma
**Problēma:** „Laenuks andma” tähendab välja laenama, kuid hingeben tähendab ka end millelegi pühendama või ohverdama.
**LV etalons (konteksts):** atdot • aizdot projām
**DE konteksts:** hingeben
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0295
**Card ID:** b2-Hinsicht-1121
**Field:** etText
**CURRENT:** teade
**PROPOSED_ET:** aspekt • seisukoht
**Problēma:** „Teade” tähendab sõnumit või teadet ega vasta Hinsicht tähendustele „aspekt” ja „seisukoht”.
**LV etalons (konteksts):** ziņa
**DE konteksts:** Hinsicht
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0296
**Card ID:** b2-Hinterhalt-1124
**Field:** etText
**CURRENT:** peidik
**PROPOSED_ET:** varitsus
**Problēma:** Hinterhalt on varitsus või varitsusrünnak; „peidik” tähendab peidupaika.
**LV etalons (konteksts):** slēpnis
**DE konteksts:** Hinterhalt
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0297
**Card ID:** b2-hinterziehen-1125
**Field:** etText
**CURRENT:** raha omastama • makse mitte tasuma
**PROPOSED_ET:** raha omastama • maksudest kõrvale hoidma
**Problēma:** Maksudest kõrvalehoidmine on tahtlik maksupettus, mitte lihtsalt maksete tasumata jätmine.
**LV etalons (konteksts):** piesavināties naudu • nenomaksāt nodokļus
**DE konteksts:** hinterziehen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0298
**Card ID:** b2-hitzig-1131
**Field:** etText
**CURRENT:** kuum • õhin • järsk • kiiresti vihastuv
**PROPOSED_ET:** kuum • tuline • äge • kiiresti vihastuv
**Problēma:** „Õhin” on nimisõna ega sobi omadussõnana; hitzig tähendab ka tulist või ägedat.
**LV etalons (konteksts):** karsts • dedzīgs • straujš • ātrs dusmās
**DE konteksts:** hitzig
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0299
**Card ID:** b2-hochwertig-1146
**Field:** etText
**CURRENT:** kõrgväärtuslik
**PROPOSED_ET:** kvaliteetne
**Problēma:** Tähendab eeskätt kvaliteetset või kõrgeklassilist, mitte lihtsalt kõrge väärtusega eset.
**LV etalons (konteksts):** augstvērtīgs
**DE konteksts:** hochwertig
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0300
**Card ID:** b2-holpern-1150
**Field:** etText
**CURRENT:** raputama • vappuma
**PROPOSED_ET:** hüplema • rappuma
**Problēma:** Holpern kirjeldab konarlikul pinnal hüplevat või rappuvat liikumist; raputama on enamasti transitiivne.
**LV etalons (konteksts):** kratīties • raustīties
**DE konteksts:** holpern
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0301
**Card ID:** b2-in flagranti-1158
**Field:** etText
**CURRENT:** tabama keelatud teo pealt
**PROPOSED_ET:** teolt tabama
**Problēma:** Eestikeelne püsiühend on „teolt tabama“; „keelatud teo pealt“ on ebaloomulik ja liiga sõnasõnaline.
**LV etalons (konteksts):** pieķert • darot kaut ko aizliegtu
**DE konteksts:** in flagranti
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0302
**Card ID:** b2-Kapazität-1168
**Field:** etText
**CURRENT:** tootlikkus • võimsus • maht
**PROPOSED_ET:** mahutavus • võimsus • suutlikkus
**Problēma:** Tootlikkus tähendab produktiivsust, mitte tavaliselt võimekust või maksimaalset mahutavust.
**LV etalons (konteksts):** ražotspēja • jauda • tilpums • ietilpība
**DE konteksts:** Kapazität
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0303
**Card ID:** b2-Karrierefrau-1174
**Field:** etText
**CURRENT:** karjääri tegev naine
**PROPOSED_ET:** karjäärinaine
**Problēma:** „Karjäärinaine“ on loomulik ja levinud vaste; praegune väljend on kohmakas.
**LV etalons (konteksts):** sieviete, kas taisa karjeru
**DE konteksts:** Karrierefrau
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0304
**Card ID:** b2-Kaufkraft-1175
**Field:** etText
**CURRENT:** raha • ka isiku ostujõud
**PROPOSED_ET:** ostujõud
**Problēma:** Kaufkraft tähendab ostujõudu, mitte raha; praegune esimene vaste on tähenduselt vale.
**LV etalons (konteksts):** naudas • arī personas pirktspēja
**DE konteksts:** Kaufkraft
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0305
**Card ID:** b2-Konsequenz-1192
**Field:** etText
**CURRENT:** järjekindlus • järjekord • järeldus • tagajärg
**PROPOSED_ET:** järjekindlus • järeldus • tagajärg
**Problēma:** „Järjekord” tähendab järjestust, mitte Konsequenz tähendust; ülejäänud vasted on sobivad.
**LV etalons (konteksts):** konsekvence • secība • secinājums • sekas
**DE konteksts:** Konsequenz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0306
**Card ID:** b2-korrumpieren-1199
**Field:** etText
**CURRENT:** altkäemaksu andma
**PROPOSED_ET:** ära ostma • korrumpeerima
**Problēma:** Praegune vaste tähendab altkäemaksu andmist; korrumpieren tähendab kellegi äraostmist või korrumpeerimist.
**LV etalons (konteksts):** piekukuļot
**DE konteksts:** korrumpieren
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0307
**Card ID:** b2-korrupt-1200
**Field:** etText
**CURRENT:** ostetav • altkäemaksuga mõjutatav
**PROPOSED_ET:** korruptne • äraostetav
**Problēma:** Praegused vasted tähendavad peamiselt äraostetavat, kuid korrupt hõlmab ka otseselt korrumpeerunud tähendust.
**LV etalons (konteksts):** pērkams • piekukuļojams
**DE konteksts:** korrupt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0308
**Card ID:** b2-Laie-1205
**Field:** etText
**CURRENT:** diletant
**PROPOSED_ET:** võhik • asjaarmastaja
**Problēma:** Laie tähendab mittespetsialisti või võhikut; „diletant” viitab pigem asjaarmastajale ja võib olla halvustav.
**LV etalons (konteksts):** diletants
**DE konteksts:** Laie
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0309
**Card ID:** b2-Laufwerk-1222
**Field:** etText
**CURRENT:** mootor • ajav jõud
**PROPOSED_ET:** mootor • ajam
**Problēma:** „Ajav jõud” tähendab edasiviivat jõudu; Laufwerk tähendab tehnilist ajamit või mehhanismi.
**LV etalons (konteksts):** dzinējs • dzinis
**DE konteksts:** Laufwerk
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0310
**Card ID:** b2-Lehrstuhl-1228
**Field:** etText
**CURRENT:** katedra
**PROPOSED_ET:** õppetool
**Problēma:** Ülikooli Lehrstuhl on õppetool või professuur; „katedra” tähendab pigem õppe- või teadusüksust.
**LV etalons (konteksts):** katedra
**DE konteksts:** Lehrstuhl
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0311
**Card ID:** b2-Leichenhalle-1231
**Field:** etText
**CURRENT:** kabel kalmistul
**PROPOSED_ET:** surnukuur
**Problēma:** Leichenhalle tähendab surnukuuri või surnusaali, mitte kalmistul asuvat kabelit.
**LV etalons (konteksts):** kapliča kapos
**DE konteksts:** Leichenhalle
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0312
**Card ID:** b2-lispeln-1250
**Field:** etText
**CURRENT:** sosistama • pudistama
**PROPOSED_ET:** susistama • pudistama
**Problēma:** „Sosistama” tähendab sosistamist; „susistama” tähistab kõnelemist susistades ehk š-iga.
**LV etalons (konteksts):** šļupstēt
**DE konteksts:** lispeln
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0313
**Card ID:** b2-Marssonde-1289
**Field:** etText
**CURRENT:** Marsi-sond
**PROPOSED_ET:** Marsisond
**Problēma:** Estoniakeelne liitsõna kirjutatakse kokku; sidekriips on siin põhjendamatu.
**LV etalons (konteksts):** marsa zonde
**DE konteksts:** Marssonde
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0314
**Card ID:** b2-maßlos-1296
**Field:** etText
**CURRENT:** mõõtmatu • lõputu
**PROPOSED_ET:** mõõdutundetu • piiritu
**Problēma:** Tähendus on pigem mõõdutundetu või ülemäärane, mitte sõna-sõnalt mõõtmatu või lõputu.
**LV etalons (konteksts):** neizmērojams • bezgalīgs
**DE konteksts:** maßlos
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0315
**Card ID:** b2-Meerenge-1301
**Field:** etText
**CURRENT:** merekitsus
**PROPOSED_ET:** väin
**Problēma:** Meerenge tähendab eesti keeles standardterminina väina; „merekitsus” ei ole loomulik vaste.
**LV etalons (konteksts):** jūras šaurums
**DE konteksts:** Meerenge
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0316
**Card ID:** b2-menschenscheu-1307
**Field:** etText
**CURRENT:** ebasotsiaalne • arg
**PROPOSED_ET:** inimpelglik • inimestest hoiduv
**Problēma:** „Arg” tähendab kartlikku või julgetut, mitte inimestest hoiduvat; põhitähendus on inimpelglik.
**LV etalons (konteksts):** nesabiedrisks • bikls
**DE konteksts:** menschenscheu
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0317
**Card ID:** b2-Milbe-1313
**Field:** etText
**CURRENT:** puuk
**PROPOSED_ET:** lest
**Problēma:** Milbe on lest; „puuk” tähendab puuki ehk teistsugust ämblikulaadset.
**LV etalons (konteksts):** ērce
**DE konteksts:** Milbe
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0318
**Card ID:** b2-militärfrei-1319
**Field:** etText
**CURRENT:** ajateenistuskõlbmatu
**PROPOSED_ET:** ajateenistusest vabastatud
**Problēma:** „Militärfrei” tähendab sõjaväeteenistusest vabastatut, mitte tingimata ajateenistuseks kõlbmatut.
**LV etalons (konteksts):** karaklausībai nepadots
**DE konteksts:** militärfrei
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0319
**Card ID:** b2-minderwertig-1322
**Field:** etText
**CURRENT:** vähene väärtusega
**PROPOSED_ET:** väheväärtuslik
**Problēma:** Praeguses vastes on käändeviga: „vähene väärtusega” ei ole korrektne ega loomulik eesti väljend.
**LV etalons (konteksts):** mazvērtīgs
**DE konteksts:** minderwertig
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0320
**Card ID:** b2-Müllentsorgung-1339
**Field:** etText
**CURRENT:** jäätmete hävitamine
**PROPOSED_ET:** jäätmete kõrvaldamine
**Problēma:** Entsorgung tähendab jäätmete kõrvaldamist või käitlemist, mitte tingimata nende hävitamist.
**LV etalons (konteksts):** atkritumu iznīcināšana
**DE konteksts:** Müllentsorgung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0321
**Card ID:** b2-namens-1361
**Field:** etText
**CURRENT:** eesnimeliselt • perekonnanimeliselt
**PROPOSED_ET:** nimel • nimega
**Problēma:** namens tähendab üldiselt „nimel” või „nimega”, mitte tingimata ees- ja perekonnanime järgi.
**LV etalons (konteksts):** vārdā • uzvārdā
**DE konteksts:** namens
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0322
**Card ID:** b2-Nesselfieber-1372
**Field:** etText
**CURRENT:** nõgesvõrk (haigus)
**PROPOSED_ET:** nõgestõbi
**Problēma:** Nesselfieber on eesti keeles „nõgestõbi” või „urtikaaria”; „nõgesvõrk” ei tähista seda haigust.
**LV etalons (konteksts):** nātrene
**DE konteksts:** Nesselfieber
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0323
**Card ID:** b2-neuerdings-1374
**Field:** etText
**CURRENT:** hiljuti • neil päevil • uuesti
**PROPOSED_ET:** hiljuti • neil päevil • viimasel ajal
**Problēma:** „uuesti” tähendab „again”, kuid neuerdings tähendab „hiljuti” või „viimasel ajal”.
**LV etalons (konteksts):** nesen • šais dienās • no jauna • atkal
**DE konteksts:** neuerdings
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0324
**Card ID:** b2-Niederschlag-1383
**Field:** etText
**CURRENT:** sademed
**PROPOSED_ET:** sademed • sete
**Problēma:** Niederschlag tähendab nii sademeid kui ka ladestist; „sademed” jätab teise põhitähenduse välja.
**LV etalons (konteksts):** nogulsnes • nokrišņi
**DE konteksts:** Niederschlag
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0325
**Card ID:** b2-Nutzeffekt-1391
**Field:** etText
**CURRENT:** kasuteguri koefitsient
**PROPOSED_ET:** kasutegur
**Problēma:** „Kasuteguri koefitsient” on eesti keeles tarbetult kordav; Nutzeffekt vastab terminile „kasutegur”.
**LV etalons (konteksts):** lietderības koeficients
**DE konteksts:** Nutzeffekt
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0326
**Card ID:** b2-Nutzholz-1392
**Field:** etText
**CURRENT:** kasutusmets
**PROPOSED_ET:** tarbepuit
**Problēma:** „Kasutusmets“ tähendab kasutamiseks majandatavat metsa, mitte kasutuseks mõeldud puitu ehk tarbepuitu.
**LV etalons (konteksts):** lietaskoki
**DE konteksts:** Nutzholz
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0327
**Card ID:** b2-Ölbohrung-1404
**Field:** etText
**CURRENT:** naftapuurauk
**PROPOSED_ET:** naftapuurimine
**Problēma:** „Naftapuurauk“ tähendab naftakaevu või puurauku; „Ölbohrung“ tähistab nafta puurimist kui tegevust.
**LV etalons (konteksts):** naftas urbums
**DE konteksts:** Ölbohrung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0328
**Card ID:** b2-Ölgewinnung-1405
**Field:** etText
**CURRENT:** naftatootmine
**PROPOSED_ET:** nafta ammutamine
**Problēma:** „Ölgewinnung“ tähendab nafta ammutamist või ekstraheerimist, mitte üldiselt naftatootmist.
**LV etalons (konteksts):** naftas ieguve
**DE konteksts:** Ölgewinnung
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0329
**Card ID:** b2-Ölpest-1407
**Field:** etText
**CURRENT:** vee ja ranniku naftareostus
**PROPOSED_ET:** naftareostus vees ja rannikul
**Problēma:** Praegune liitsõnaline väljend on ebaloomulik; tähendus on selgem kujul „naftareostus vees ja rannikul“.
**LV etalons (konteksts):** ūdens un piekrastes piesārņojums ar naftu
**DE konteksts:** Ölpest
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0330
**Card ID:** b2-Operator-1410
**Field:** etText
**CURRENT:** suurarvutite hooldusspetsialist
**PROPOSED_ET:** operaator
**Problēma:** Saksa „Operator“ on üldine operaator või seadme juht; praegune vaste piirab tähenduse ainult suurarvutite hooldajaks.
**LV etalons (konteksts):** lielu datoru apkalpes speciālists
**DE konteksts:** Operator
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0331
**Card ID:** b2-Pachtvertrag-1423
**Field:** etText
**CURRENT:** üürileping
**PROPOSED_ET:** rendileping
**Problēma:** „Pachtvertrag“ on eelkõige rendileping, eriti maa või ettevõtte kasutusse andmisel; „üürileping“ tähendab tavaliselt üürisuhet.
**LV etalons (konteksts):** nomas līgums
**DE konteksts:** Pachtvertrag
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0332
**Card ID:** b2-pachten-1424
**Field:** etText
**CURRENT:** üürima
**PROPOSED_ET:** rentima
**Problēma:** „Pachten“ tähendab maa, talu või ettevõtte rentimist; eesti keeles on selle täpsem vaste „rentima“.
**LV etalons (konteksts):** nomāt
**DE konteksts:** pachten
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0333
**Card ID:** b2-Pendelverkehr-1439
**Field:** etText
**CURRENT:** kohalik eeslinnaliiklus
**PROPOSED_ET:** pendelliiklus
**Problēma:** „Pendelverkehr“ tähendab regulaarset edasi-tagasi või shuttle-liiklust, mitte lihtsalt kohalikku eeslinnaliiklust.
**LV etalons (konteksts):** vietējā piepilsētas satiksme
**DE konteksts:** Pendelverkehr
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0334
**Card ID:** b2-Pfandschein-1445
**Field:** etText
**CURRENT:** pandimärk
**PROPOSED_ET:** pandipilet
**Problēma:** Pfandschein tähendab pandipiletit ehk pandimaja väljastatud tõendit; „pandimärk“ tähistab pigem pandi märgistust.
**LV etalons (konteksts):** ķīlu zīme
**DE konteksts:** Pfandschein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0335
**Card ID:** b2-Pilotstudie-1455
**Field:** etText
**CURRENT:** uurimissarja sissejuhatus
**PROPOSED_ET:** pilootuuring
**Problēma:** Pilotstudie on pilootuuring, mitte uurimissarja sissejuhatus.
**LV etalons (konteksts):** pētījumu sērijas ievads
**DE konteksts:** Pilotstudie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0336
**Card ID:** b2-Possen-1462
**Field:** etText
**CURRENT:** farss • naljamäng • jäme nali
**PROPOSED_ET:** jäme nali • tembutus
**Problēma:** „Der Possen“ tähendab üksikut jämedat nalja või tembutust, mitte farsši või naljamängu.
**LV etalons (konteksts):** farss • joku luga • rupjš joks
**DE konteksts:** Possen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0337
**Card ID:** b2-prägnant-1465
**Field:** etText
**CURRENT:** eredalt väljendunud
**PROPOSED_ET:** tabav • lühidalt ja selgelt väljendatud
**Problēma:** Prägnant tähendab eelkõige tabavat, lühikest ja selget väljendust; „eredalt väljendunud“ ei kata seda tähendust.
**LV etalons (konteksts):** spilgti izteikts
**DE konteksts:** prägnant
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0338
**Card ID:** b2-quittieren-1484
**Field:** etText
**CURRENT:** vastuvõtmist allkirjastama
**PROPOSED_ET:** kättesaamist kinnitama
**Problēma:** „Kättesaamist kinnitama“ on loomulikum ja katab saksa verbi tähenduse; praegune ühend on ebaloomulik.
**LV etalons (konteksts):** parakstīties par saņemšanu
**DE konteksts:** quittieren
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0339
**Card ID:** b2-ranzig-1492
**Field:** etText
**CURRENT:** hallitanud maitsega • kibedavõitu (koore, rasva, või kohta)
**PROPOSED_ET:** rääsunud • kibedavõitu (koore, rasva ja või kohta)
**Problēma:** Ranzig tähendab rääsunud, mitte hallitanud; esimene vaste annab toidu riknemise kohta teise tähenduse.
**LV etalons (konteksts):** sasmacis • rūgtens par krējumu • taukiem • sviestu
**DE konteksts:** ranzig
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0340
**Card ID:** b2-Regenfront-1512
**Field:** etText
**CURRENT:** vihmavöönd
**PROPOSED_ET:** vihmafront
**Problēma:** Regenfront tähendab meteoroloogilist vihmafronti; „vihmavöönd“ tähendab pigem vihmariba või -ala.
**LV etalons (konteksts):** lietus josla
**DE konteksts:** Regenfront
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0341
**Card ID:** b2-relevant-1519
**Field:** etText
**CURRENT:** märkimisväärne • tähtis
**PROPOSED_ET:** asjakohane • tähtis
**Problēma:** „Märkimisväärne“ tähendab tähelepanuväärset, mitte tingimata asjakohast või relevantset.
**LV etalons (konteksts):** nozīmīgs • svarīgs
**DE konteksts:** relevant
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0342
**Card ID:** b2-rücksichtslos-1532
**Field:** etText
**CURRENT:** hooletu • jäme • armutu
**PROPOSED_ET:** hoolimatu • jäme • armutu
**Problēma:** „Hooletu“ tähendab careless/negligent; rücksichtslos on eelkõige hoolimatu või teistega mittearvestav.
**LV etalons (konteksts):** neuzmanīgs • rupjš • nesaudzīgs
**DE konteksts:** rücksichtslos
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0343
**Card ID:** b2-rückständig-1533
**Field:** etText
**CURRENT:** hilinenud • maksega viivituses
**PROPOSED_ET:** mahajäänud • maksetega võlgnevuses
**Problēma:** „Hilinenud“ tähendab hiljaks jäänud, mitte mahajäänud; teine vaste vajab loomulikumat ja täpsemat sõnastust.
**LV etalons (konteksts):** atpalicis • nokavēts par maksājumu
**DE konteksts:** rückständig
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0344
**Card ID:** b2-sächlich-1544
**Field:** etText
**CURRENT:** gram. neutraalne sugu
**PROPOSED_ET:** gram. kesksugu
**Problēma:** Grammatilise termini „neuter“ eestikeelne vaste on „kesksugu“, mitte „neutraalne sugu“.
**LV etalons (konteksts):** ~es Geschlecht gram. • nekatrā dzimte
**DE konteksts:** sächlich
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0345
**Card ID:** b2-Sandbank-1548
**Field:** etText
**CURRENT:** madalik
**PROPOSED_ET:** liivamadal
**Problēma:** „Madalaik” on liiga üldine; Sandbank tähendab konkreetselt liivamadalat või liivast leetseljakut.
**LV etalons (konteksts):** sēklis
**DE konteksts:** Sandbank
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0346
**Card ID:** b2-Satellit-1551
**Field:** etText
**CURRENT:** poliitiline satelliit • astr. kaaslane
**PROPOSED_ET:** poliitiline satelliit • astronoomiline satelliit
**Problēma:** Astronoomiline „kaaslane” ei ole siin piisavalt täpne ega loomulik vaste sõnale Satellit.
**LV etalons (konteksts):** pol. satelīts • astr. pavadonis
**DE konteksts:** Satellit
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0347
**Card ID:** b2-Schadenersatz-1556
**Field:** etText
**CURRENT:** materiaalne hüvitis kahju eest
**PROPOSED_ET:** kahjuhüvitis
**Problēma:** Praegune väljend on arusaadav, kuid eesti õiguskeeles on loomulik ja täpne termin „kahjuhüvitis”.
**LV etalons (konteksts):** materiāla kompensācija par zaudējumiem
**DE konteksts:** Schadenersatz
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0348
**Card ID:** b2-Schaffen-1558
**Field:** etText
**CURRENT:** looming • teos • tegevus • loomine
**PROPOSED_ET:** looming • loometöö • tegevus • loomine
**Problēma:** „Teos” tähendab üksikut loodud kunstiteost, Schaffen aga loomingulist tegevust või loometööd.
**LV etalons (konteksts):** jaunrade • daiļrade • darbs • darbība • radīšana
**DE konteksts:** Schaffen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0349
**Card ID:** b2-Scheitel-1571
**Field:** etText
**CURRENT:** juuksejoon • lagi (pea)
**PROPOSED_ET:** juukselahk • pealagi
**Problēma:** „Juuksejoon” tähendab juuste piirjoont ehk juuksepiiri, mitte lahku või pealae keskosa.
**LV etalons (konteksts):** galvvidus • pauris • celiņš
**DE konteksts:** Scheitel
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0350
**Card ID:** b2-scheitern-1572
**Field:** etText
**CURRENT:** ebaõnnestuma • lagunema
**PROPOSED_ET:** ebaõnnestuma • luhtuma
**Problēma:** „Lagunema” tähendab füüsiliselt koost lagunemist; scheitern teises tähenduses tähendab nurjumist või luhtumist.
**LV etalons (konteksts):** piedzīvot neveiksmi • izjukt
**DE konteksts:** scheitern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0351
**Card ID:** b2-Schieber-1577
**Field:** etText
**CURRENT:** riiv • polt • spekulant
**PROPOSED_ET:** riiv • siiber • spekulant
**Problēma:** „Polt” tähendab polti, Schieber tehnilises tähenduses aga siibrit või liugklappi.
**LV etalons (konteksts):** aizbīdnis • bulta • spekulants
**DE konteksts:** Schieber
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0352
**Card ID:** b2-schlafwandeln-1583
**Field:** etText
**CURRENT:** olema unerändaja
**PROPOSED_ET:** unes kõndima
**Problēma:** Praegune vaste tähendab „olema unerändaja”, mitte tegevust „unes kõndima” ehk somnambuulselt kõndima.
**LV etalons (konteksts):** būt mēnessērdzīgam
**DE konteksts:** schlafwandeln
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0353
**Card ID:** b2-Schmuggel-1596
**Field:** etText
**CURRENT:** salakaup
**PROPOSED_ET:** salakaubandus
**Problēma:** Salakaup tähendab smugeldatud kaupa; Schmuggel tähendab salakaubandust või smugeldamist.
**LV etalons (konteksts):** kontrabanda
**DE konteksts:** Schmuggel
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0354
**Card ID:** b2-Schnappschuss-1597
**Field:** etText
**CURRENT:** hetkevõte fotol
**PROPOSED_ET:** hetktõmmis
**Problēma:** Hetkevõte fotol on arusaadav, kuid standardsem ja loomulikum vaste on hetktõmmis.
**LV etalons (konteksts):** momentuzņēmums fotogrāfijā
**DE konteksts:** Schnappschuss
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0355
**Card ID:** b2-Bittschrift-1602
**Field:** etText
**CURRENT:** palve
**PROPOSED_ET:** palvekiri
**Problēma:** Bittschrift on ametlik kirjalik palve või avaldus, mitte religioosne palve.
**LV etalons (konteksts):** lūgums
**DE konteksts:** Bittschrift
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0356
**Card ID:** b2-schrill-1603
**Field:** etText
**CURRENT:** kimeda • lõikav
**PROPOSED_ET:** kime • lõikav
**Problēma:** Kimeda on sõna kimeda käändevorm; omadussõna märksõnavorm on kime.
**LV etalons (konteksts):** spalgs • griezīgs
**DE konteksts:** schrill
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0357
**Card ID:** b2-schroff-1604
**Field:** etText
**CURRENT:** järsk • kalju • karm • terav • ebasõbralik
**PROPOSED_ET:** järsk • karm • terav • ebasõbralik
**Problēma:** Kalju on nimisõna ega tähenda siin schroff’i omadust; järsk katab tähenduse paremini.
**LV etalons (konteksts):** stāvs • kraujš • skarbs • ass • nelaipns
**DE konteksts:** schroff
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0358
**Card ID:** b2-Schuldschein-1606
**Field:** etText
**CURRENT:** võlakiri
**PROPOSED_ET:** võlatunnistus
**Problēma:** Schuldschein on võlatunnistus või võlakohustuse dokument, mitte vabalt kaubeldav võlakiri.
**LV etalons (konteksts):** parādzīme
**DE konteksts:** Schuldschein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0359
**Card ID:** b2-Schwarm-1612
**Field:** etText
**CURRENT:** kirg • vaimustus
**PROPOSED_ET:** parv • sülem
**Problēma:** Schwarm tähendab parve või sülemit; kirg ja vaimustus kirjeldavad pigem schwärmen tähendust.
**LV etalons (konteksts):** bars
**DE konteksts:** Schwarm
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0360
**Card ID:** b2-Schwarze-1615
**Field:** etText
**CURRENT:** tumedanahaline inimene
**PROPOSED_ET:** mustanahaline inimene
**Problēma:** Tumedanahaline tähendab üldiselt tumeda nahaga inimest; Schwarze viitab mustanahalisele inimesele.
**LV etalons (konteksts):** cilvēks ar melnu ādas krāsu
**DE konteksts:** Schwarze
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0361
**Card ID:** b2-Schwerathletik-1620
**Field:** etText
**CURRENT:** sp. tõstespordid
**PROPOSED_ET:** raskejõustik
**Problēma:** Schwerathletik hõlmab raskejõustikku laiemalt; tõstespordid on liiga kitsas ja mitmuses.
**LV etalons (konteksts):** sp. smagatlētika
**DE konteksts:** Schwerathletik
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0362
**Card ID:** b2-Seenot-1624
**Field:** etText
**CURRENT:** avariiolukord merel
**PROPOSED_ET:** hädaseisund merel
**Problēma:** Seenot tähendab merehäda või hädaseisundit merel, mitte ainult avariiolukorda.
**LV etalons (konteksts):** avārijas situācija uz jūras
**DE konteksts:** Seenot
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0363
**Card ID:** b2-Naturseide-1629
**Field:** etText
**CURRENT:** loomulik siid
**PROPOSED_ET:** looduslik siid
**Problēma:** Materjali puhul on loomulikum ja täpsem omadussõna looduslik, mitte loomulik.
**LV etalons (konteksts):** dabiskais zīds
**DE konteksts:** Naturseide
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0364
**Card ID:** b2-Selbstgefühl-1631
**Field:** etText
**CURRENT:** enesekindlus
**PROPOSED_ET:** eneseväärtustunne
**Problēma:** Selbstgefühl tähendab eneseväärtuse või enesetaju tunnet; enesekindlus on confidence.
**LV etalons (konteksts):** pašapziņīgums • pašapziņa
**DE konteksts:** Selbstgefühl
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0365
**Card ID:** b2-Sonderausgabe-1656
**Field:** etText
**CURRENT:** raamatu erilaadumine • ajalehe erinumber • margi eriväljalase
**PROPOSED_ET:** raamatu eriväljaanne • ajalehe erinumber • margi eriväljaanne
**Problēma:** „Erilaadumine” ei tähenda eriväljaannet; esimene vaste on väär ning „eriväljalase” on siin ebaloomulik.
**LV etalons (konteksts):** grāmatas speciālizdevums • laikraksta speciāl numurs • marku speciālizlaidums
**DE konteksts:** Sonderausgabe
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0366
**Card ID:** b2-Sorgenkind-1660
**Field:** etText
**CURRENT:** hoolealune laps
**PROPOSED_ET:** murelaps
**Problēma:** „Hoolealune laps” tähendab hooldusel olevat last, mitte murettekitavat või muret põhjustavat last.
**LV etalons (konteksts):** rūpju bērns
**DE konteksts:** Sorgenkind
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0367
**Card ID:** b2-spärlich-1666
**Field:** etText
**CURRENT:** tühine • ihne • harv
**PROPOSED_ET:** napp • hõre • vähene
**Problēma:** „Ihne” tähendab kitsi, mitte vähest või kasinat; „tühine” ei kata hästi tähendust „spärlich”.
**LV etalons (konteksts):** niecīgs • skops • rets
**DE konteksts:** spärlich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0368
**Card ID:** b2-Stahlwerk-1692
**Field:** etText
**CURRENT:** terasevalukoda
**PROPOSED_ET:** terasetehas
**Problēma:** „Terasevalukoda” tähendab terase valamise tehast ehk valukoda; „Stahlwerk” on üldisem terasetehas või terasetehas-kompleks.
**LV etalons (konteksts):** tēraudlietuve
**DE konteksts:** Stahlwerk
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0369
**Card ID:** b2-Strafanzeige-1705
**Field:** etText
**CURRENT:** kriminaalasja algatamine kellegi vastu
**PROPOSED_ET:** kuriteoteade
**Problēma:** Tähendab kriminaalasja algatamist, mitte kuriteoteadet või politseile esitatud avaldust.
**LV etalons (konteksts):** krimināllietas ierosināšana pret kādu
**DE konteksts:** Strafanzeige
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0370
**Card ID:** b2-streitbar-1708
**Field:** etText
**CURRENT:** tülinorija
**PROPOSED_ET:** tülivõimeline
**Problēma:** Praegune vaste on nimisõna „tülinorija“, kuid saksa märksõna on omadussõna.
**LV etalons (konteksts):** ķildīgs
**DE konteksts:** streitbar
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0371
**Card ID:** b2-Streitkräfte-1709
**Field:** etText
**CURRENT:** riigi kõik sõjalised organisatsioonid ja väed
**PROPOSED_ET:** relvajõud
**Problēma:** Saksa sõna tavapärane ja täpne eesti vaste on „relvajõud“; praegune on kohmakas ümberütlus.
**LV etalons (konteksts):** valsts visas militārās organizācijas un militārie spēki
**DE konteksts:** Streitkräfte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0372
**Card ID:** b2-Tagebau-1721
**Field:** etText
**CURRENT:** maavarade karjääripõline kaevandamine
**PROPOSED_ET:** pealmaakaevandamine
**Problēma:** Praegune liitsõnaühend on ebaloomulik; „pealmaakaevandamine“ on tavapärane vaste.
**LV etalons (konteksts):** derīgo izrakteņu atklātā ieguve
**DE konteksts:** Tagebau
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0373
**Card ID:** b2-Töpferscheibe-1736
**Field:** etText
**CURRENT:** pottsepakäi
**PROPOSED_ET:** potikeder
**Problēma:** Töpferscheibe tähendab eesti keeles „potikeder“; „pottsepakäi“ ei ole selle tähenduse tavapärane vaste.
**LV etalons (konteksts):** podnieka ripa
**DE konteksts:** Töpferscheibe
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0374
**Card ID:** b2-treuherzig-1750
**Field:** etText
**CURRENT:** südamlik
**PROPOSED_ET:** siiras ja lihtsameelne
**Problēma:** Südamlik tähendab peamiselt sooja ja südamlikku; treuherzig rõhutab siirust ja lihtsameelset usaldavust.
**LV etalons (konteksts):** valsirdīgs • sirsnīgs
**DE konteksts:** treuherzig
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0375
**Card ID:** b2-Triumphzug-1754
**Field:** etText
**CURRENT:** triumfirong
**PROPOSED_ET:** võidurongkäik
**Problēma:** Triumfirong on ebaloomulik ja võib tähendada triumfirongi; mõeldud on võidukat rongkäiku.
**LV etalons (konteksts):** triumfa gājiens
**DE konteksts:** Triumphzug
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0376
**Card ID:** b2-überhören-1769
**Field:** etText
**CURRENT:** hooletusest mitte kuulma • end mitte kuulvana teesklema
**PROPOSED_ET:** tähelepanematusest kuulmata jätma • kuulmatust teesklema
**Problēma:** Teine vaste on grammatikavigane; kuulvana tähendab kuuluvana, mitte kuulmist teeseldes.
**LV etalons (konteksts):** ne[sa]dzirdēt aiz neuzmanības • izlikties nedzirdam
**DE konteksts:** überhören
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0377
**Card ID:** b2-überlassen-1770
**Field:** etText
**CURRENT:** jätma kellegi otsustada • käsutusse jätma • valikut lubama
**PROPOSED_ET:** kellegi otsustada jätma • käsutusse jätma • valida laskma
**Problēma:** Valikut lubama on ebaloomulik; loomulikum vaste on valida laskma.
**LV etalons (konteksts):** atstāt kāda ziņā • rīcībā • atļaut izvēlēties
**DE konteksts:** überlassen
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0378
**Card ID:** b2-Übermüdung-1774
**Field:** etText
**CURRENT:** ülekurnatus
**PROPOSED_ET:** üleväsimus
**Problēma:** Ülekurnatus ei ole selles tähenduses loomulik ega tavapärane vaste; Übermüdung tähendab üleväsimust.
**LV etalons (konteksts):** pārgurums
**DE konteksts:** Übermüdung
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0379
**Card ID:** b2-überschätzen-1775
**Field:** etText
**CURRENT:** ümber hindama
**PROPOSED_ET:** üle hindama
**Problēma:** Ümber hindama tähendab uuesti hindama või ümber hindama; üle hindama tähendab millegi väärtust liiga suureks pidama.
**LV etalons (konteksts):** pārvērtēt
**DE konteksts:** überschätzen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0380
**Card ID:** b2-überschreiten-1776
**Field:** etText
**CURRENT:** üle minema • rikkuma
**PROPOSED_ET:** ületama • seadust rikkuma
**Problēma:** Üle minema on siin liiga ebatäpne ning rikkuma vajab seaduse konteksti.
**LV etalons (konteksts):** pāriet • pārkāpt
**DE konteksts:** überschreiten
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0381
**Card ID:** b2-umdenken-1787
**Field:** etText
**CURRENT:** arvamust olukorrast sõltuvalt muutma
**PROPOSED_ET:** ümber mõtlema
**Problēma:** Umdenken tähendab oma mõtteviisi või seisukoha muutmist, mitte tingimata olukorrast sõltuvat arvamuse muutmist.
**LV etalons (konteksts):** mainīt viedokli atkarībā no situācijas
**DE konteksts:** umdenken
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0382
**Card ID:** b2-umhören, sich-1791
**Field:** etText
**CURRENT:** kuulatlema
**PROPOSED_ET:** ringi küsitlema
**Problēma:** Kuulatlema tähendab tähelepanelikult kuulama; sich umhören tähendab teiste käest järele uurima või ringi küsitlema.
**LV etalons (konteksts):** apklausīties
**DE konteksts:** umhören, sich
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0383
**Card ID:** b2-umschließen-1797
**Field:** etText
**CURRENT:** sisse lülitama • hõlmama • ümbritsema
**PROPOSED_ET:** sulgema sisse • hõlmama • ümbritsema
**Problēma:** Sisse lülitama tähendab seadme aktiveerimist, mitte millegi sisse sulgemist või ümbritsemist.
**LV etalons (konteksts):** ieslēgt • aptvert • apņemt
**DE konteksts:** umschließen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0384
**Card ID:** b2-umschreiben-1798
**Field:** etText
**CURRENT:** kirjeldama
**PROPOSED_ET:** ümber sõnastama
**Problēma:** „Kirjeldama” ei väljenda peamist tähendust „ümber sõnastama” või „ümber kirjutama”; lisaks on vorm gerundiiv.
**LV etalons (konteksts):** aprakstīt
**DE konteksts:** umschreiben
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0385
**Card ID:** b2-umständlich-1803
**Field:** etText
**CURRENT:** väga pisike • liiga ulatuslik • koormav • keeruline
**PROPOSED_ET:** tülikas • liiga üksikasjalik • koormav • keeruline
**Problēma:** „Väga pisike” tähendab väga väikest, mitte tülikat või kohmakat; see on saksa omadussõna tähendusega vastuolus.
**LV etalons (konteksts):** ļoti sīks • pārāk plašs • apgrūtinošs • sarežģīts
**DE konteksts:** umständlich
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0386
**Card ID:** b2-unterbreiten-1835
**Field:** etText
**CURRENT:** selgitama • esitama
**PROPOSED_ET:** ette panema • esitama
**Problēma:** „Unterbreiten” tähendab ettepaneku, palve või dokumendi esitamist; „selgitama” tähendab seletama ja on siin vale vaste.
**LV etalons (konteksts):** paskaidrot • iesniegt
**DE konteksts:** unterbreiten
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0387
**Card ID:** b2-Untertan-1848
**Field:** etText
**CURRENT:** kodanik
**PROPOSED_ET:** alam
**Problēma:** „Untertan“ tähendab valitseja alamat, mitte kodanikku.
**LV etalons (konteksts):** pavalstnieks
**DE konteksts:** Untertan
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0388
**Card ID:** b2-untertauchen-1849
**Field:** etText
**CURRENT:** sukelduma • vee alla minema • kastma
**PROPOSED_ET:** sukelduma • vee alla minema • peitu minema
**Problēma:** „Kastma“ tähendab millegi vedelikku kastmist; „untertauchen“ võib tähendada ka peitu minemist.
**LV etalons (konteksts):** ienirt • palīst zem ūdens • iemērkt • iegremdēt
**DE konteksts:** untertauchen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0389
**Card ID:** b2-unüberlegt-1854
**Field:** etText
**CURRENT:** ettevaatamatu • kergemeelne
**PROPOSED_ET:** läbimõtlematu • kaalutlematu
**Problēma:** „Unüberlegt“ tähendab läbimõtlematut või kaalutlematut; praegused vasted tähendavad pigem ettevaatamatut ja kergemeelset.
**LV etalons (konteksts):** neapdomīgs • vieglprātīgs
**DE konteksts:** unüberlegt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0390
**Card ID:** b2-verbittert-1873
**Field:** etText
**CURRENT:** pettunud
**PROPOSED_ET:** kibestunud
**Problēma:** „Verbittert“ tähendab kibestunud või vimma täis; „pettunud“ tähendab enttäuscht ehk pettunud.
**LV etalons (konteksts):** sarūgtināts
**DE konteksts:** verbittert
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0391
**Card ID:** b2-Verdruss-1877
**Field:** etText
**CURRENT:** vastumeelsus • pettumus • tusk
**PROPOSED_ET:** meelehärm • pahameel • tusk
**Problēma:** „Verdruss“ tähendab pahameelt või meelehärmi; „pettumus“ tähendab pettumust, mitte tüdimust või pahameelt.
**LV etalons (konteksts):** nepatika • sarūgtinājums • īgnums
**DE konteksts:** Verdruss
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0392
**Card ID:** b2-sich verhören-1901
**Field:** etText
**CURRENT:** üle kuulama (proovi)
**PROPOSED_ET:** valesti kuulma
**Problēma:** Tähendab midagi valesti kuulma või mööda kuulma, mitte kedagi üle kuulama.
**LV etalons (konteksts):** pārklausīties
**DE konteksts:** sich verhören
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0393
**Card ID:** b2-verhüten-1902
**Field:** etText
**CURRENT:** ära hoidma • hoiduma
**PROPOSED_ET:** ära hoidma • rasestumisvastaseid vahendeid kasutama
**Problēma:** Teine tähendus viitab rasestumisvastastele vahenditele; „hoiduma” tähendab lihtsalt millestki hoidumist.
**LV etalons (konteksts):** novērst • izsargāties
**DE konteksts:** verhüten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0394
**Card ID:** b2-Verleih-1905
**Field:** etText
**CURRENT:** üür
**PROPOSED_ET:** laenutus • renditeenus
**Problēma:** „Verleih” tähendab laenutamist või renditeenust, mitte üksnes üüri kui tasu.
**LV etalons (konteksts):** noma
**DE konteksts:** Verleih
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0395
**Card ID:** b2-Vermächtnis-1906
**Field:** etText
**CURRENT:** testament
**PROPOSED_ET:** pärand
**Problēma:** „Vermächtnis” on pärand või annak; „testament” on dokument, millega pärand määratakse.
**LV etalons (konteksts):** testaments
**DE konteksts:** Vermächtnis
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0396
**Card ID:** b2-Vermögen-1908
**Field:** etText
**CURRENT:** omand
**PROPOSED_ET:** vara
**Problēma:** „Vermögen” tähendab üldiselt vara või varandust; „omand” tähistab pigem omandisuhet või omatud eset.
**LV etalons (konteksts):** īpašums
**DE konteksts:** Vermögen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0397
**Card ID:** b2-Vernehmung-1910
**Field:** etText
**CURRENT:** ülekuulamine politseis
**PROPOSED_ET:** ülekuulamine
**Problēma:** Saksa sõna ei piirdu politseis toimuva ülekuulamisega; „politseis” kitsendab tähendust põhjendamatult.
**LV etalons (konteksts):** nopratināšana policijā
**DE konteksts:** Vernehmung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0398
**Card ID:** b2-verkommen-1916
**Field:** etText
**CURRENT:** alla käima • kaduma
**PROPOSED_ET:** alla käima • manduma
**Problēma:** „Kaduma” tähendab kaduma või ära haihtuma, mitte allakäimist, mandumist või kõlbelist langust.
**LV etalons (konteksts):** panīkt • pagrimt • paklīst
**DE konteksts:** verkommen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0399
**Card ID:** b2-verkraften-1918
**Field:** etText
**CURRENT:** moraalset jõudu säilitama, et millestki ebameeldivast üle saada
**PROPOSED_ET:** välja kannatama • üle elama
**Problēma:** Praegune on ebaloomulik kirjeldus; verb tähendab millegi ebameeldiva talumist või üleelamist.
**LV etalons (konteksts):** uzturēt morālu spēku, lai pārvarētu kaut ko nepatīkamu
**DE konteksts:** verkraften
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0400
**Card ID:** b2-versagen-1934
**Field:** etText
**CURRENT:** keelduma • tagasi lükkama • mitte kuulama • teenimast keelduma • argaks jääma
**PROPOSED_ET:** ebaõnnestuma • üles ütlema • keelduma • tagasi lükkama • mitte kuuletuma
**Problēma:** Puudub põhitähendus „ebaõnnestuma” või „mitte toimima”; praegune loetelu keskendub üksnes keeldumisega seotud tähendustele.
**LV etalons (konteksts):** liegt • atteikt • noraidīt • neklausīt • atteikties kalpot • izrādīties gļēvam un nevarīgam
**DE konteksts:** versagen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0401
**Card ID:** b2-versöhnen-1940
**Field:** etText
**CURRENT:** leppima panema
**PROPOSED_ET:** lepitama
**Problēma:** „Leppima panema” on kohmakas; loomulik transitiivne vaste on „lepitama”.
**LV etalons (konteksts):** samierināt
**DE konteksts:** versöhnen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0402
**Card ID:** b2-verspielen-1942
**Field:** etText
**CURRENT:** kaotama (mängus)
**PROPOSED_ET:** mängides kaotama • maha mängima
**Problēma:** Sõna tähendab ka millegi hooletult kaotamist või maha mängimist, mitte ainult mängus kaotamist.
**LV etalons (konteksts):** paspēlēt • pazaudēt
**DE konteksts:** verspielen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0403
**Card ID:** b2-verstauchen-1945
**Field:** etText
**CURRENT:** nihestama
**PROPOSED_ET:** välja väänama
**Problēma:** „Verstauchen” tähendab liigese nikastamist või välja väänamist; „nihestama” tähendab liigese paigast nihutamist.
**LV etalons (konteksts):** izmežģīt
**DE konteksts:** verstauchen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0404
**Card ID:** b2-verweilen-1956
**Field:** etText
**CURRENT:** peatuma (mõttes)
**PROPOSED_ET:** peatuma • viibima
**Problēma:** Praegune vaste piirab tähenduse mõtisklemisega; saksa sõna tähendab üldiselt peatuma või viibima.
**LV etalons (konteksts):** pakavēties
**DE konteksts:** verweilen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0405
**Card ID:** b2-Verwüstung-1965
**Field:** etText
**CURRENT:** hävitamine
**PROPOSED_ET:** laastamine
**Problēma:** Hävitamine tähendab üldiselt hävitamist; Verwüstung viitab ulatuslikule laastamisele või hävingule.
**LV etalons (konteksts):** izpostīšana
**DE konteksts:** Verwüstung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0406
**Card ID:** b2-sich verzögern-1968
**Field:** etText
**CURRENT:** hilinema • venitama
**PROPOSED_ET:** hilinema • edasi lükkuma
**Problēma:** Venitama on transitiivne ja tähendab millegi viivitamist; refleksiivne saksa verb tähendab ise viibima või edasi lükkuma.
**LV etalons (konteksts):** aizkavēties • novilcināties
**DE konteksts:** sich verzögern
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0407
**Card ID:** b2-verzollen-1969
**Field:** etText
**CURRENT:** tolliima
**PROPOSED_ET:** tollima
**Problēma:** Eesti kirjakeeles on verbi korrektne kuju tollima, mitte tolliima.
**LV etalons (konteksts):** muitot
**DE konteksts:** verzollen
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0408
**Card ID:** b2-vollkommen-1980
**Field:** etText
**CURRENT:** täielik • täielikult • hoopis
**PROPOSED_ET:** täielik • täielikult • täiesti
**Problēma:** Hoopis tähendab pigem 'instead/quite', mitte 'completely'; see ei vasta siin saksa sõna määrsõnalisele tähendusele.
**LV etalons (konteksts):** pilnīgs • pilnīgi • pavisam
**DE konteksts:** vollkommen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0409
**Card ID:** b2-vollzählig-1982
**Field:** etText
**CURRENT:** täisarvuline
**PROPOSED_ET:** täielikus koosseisus
**Problēma:** Täisarvuline tähendab integer-valued; vollzählig tähendab täielikus arvus või täielikus koosseisus.
**LV etalons (konteksts):** pilnā skaitā esošs
**DE konteksts:** vollzählig
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0410
**Card ID:** b2-Vorbildung-1992
**Field:** etText
**CURRENT:** eelteadmised • valmisolek
**PROPOSED_ET:** eelteadmised • ettevalmistus
**Problēma:** Valmisolek tähendab readiness; Vorbildung tähendab varasemat haridust, ettevalmistust või eelteadmisi.
**LV etalons (konteksts):** priekšzināšanas • sagatavotība
**DE konteksts:** Vorbildung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0411
**Card ID:** b2-vornherein-2001
**Field:** etText
**CURRENT:** just alguses
**PROPOSED_ET:** algusest peale
**Problēma:** Von vornherein tähendab algusest peale või ette, mitte lihtsalt 'just alguses'.
**LV etalons (konteksts):** pašā sākumā
**DE konteksts:** vornherein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0412
**Card ID:** b2-vorsätzlich-2003
**Field:** etText
**CURRENT:** teadlik • tahtlik
**PROPOSED_ET:** tahtlik
**Problēma:** “Teadlik” tähendab teadlikku, mitte tingimata tahtlikku tegevust; “tahtlik” vastab saksa sõnale täpsemalt.
**LV etalons (konteksts):** apzināts • ar nolūku
**DE konteksts:** vorsätzlich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0413
**Card ID:** b2-Wählscheibe-2024
**Field:** etText
**CURRENT:** telefoni valikuketas
**PROPOSED_ET:** telefoni valimisketas
**Problēma:** “Valikuketas” tähendab valikuketast; telefoninumbri ketas on eesti keeles “valimisketas”.
**LV etalons (konteksts):** tālruņa ciparu ripa
**DE konteksts:** Wählscheibe
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0414
**Card ID:** b2-Warenausgabe-2031
**Field:** etText
**CURRENT:** ostude kontroll ja väljastamine
**PROPOSED_ET:** kauba väljastamine
**Problēma:** “Warenausgabe” tähendab kaupade väljastamist; ostude kontrollimine ei kuulu saksa sõna põhitähendusse.
**LV etalons (konteksts):** pirkumu kontrole un izsniegšana
**DE konteksts:** Warenausgabe
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0415
**Card ID:** b2-Wegstrecke-2039
**Field:** etText
**CURRENT:** teelõik • tükk
**PROPOSED_ET:** teelõik
**Problēma:** “Tükk” tähendab eset või osa üldiselt, kuid “Wegstrecke” on konkreetsemalt teelõik või läbitav vahemaa.
**LV etalons (konteksts):** ceļa posms • gabals
**DE konteksts:** Wegstrecke
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0416
**Card ID:** b2-Wehe-2041
**Field:** etText
**CURRENT:** luide • hang
**PROPOSED_ET:** sünnitusvalu • tuhu
**Problēma:** Saksa “Wehe” tähendab sünnitusvalu või emaka kokkutõmmet, mitte liivaluidet ega lumehangi.
**LV etalons (konteksts):** kāpa • kupena
**DE konteksts:** Wehe
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0417
**Card ID:** b2-Wehrpflicht-2043
**Field:** etText
**CURRENT:** ajateenistus
**PROPOSED_ET:** ajateenistuskohustus
**Problēma:** “Wehrpflicht” on kohustus teenida, “ajateenistus” aga teenistuse enda tähendus.
**LV etalons (konteksts):** karaklausība
**DE konteksts:** Wehrpflicht
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0418
**Card ID:** b2-Werkhalle-2055
**Field:** etText
**CURRENT:** tsehh
**PROPOSED_ET:** tootmishall
**Problēma:** Werkhalle tähendab tootmis- või tehasehalli; „tsehh” tähistab pigem tootmisüksust või töökoda.
**LV etalons (konteksts):** cehs
**DE konteksts:** Werkhalle
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0419
**Card ID:** b2-Windbeutel-2076
**Field:** etText
**CURRENT:** tuulelohe
**PROPOSED_ET:** tuuletasku
**Problēma:** „Tuulelohe” tähendab eesti keeles lohet ehk kite’i; Windbeutel on kreemitäidisega küpsetis ehk tuuletasku.
**LV etalons (konteksts):** vēja kūka
**DE konteksts:** Windbeutel
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0420
**Card ID:** b2-zürnen-2088
**Field:** etText
**CURRENT:** vihastama
**PROPOSED_ET:** vihastuma
**Problēma:** zürnen on intransitiivne ‘vihane olema’; „vihastama” tähendab tavaliselt kellegi vihaseks ajamist.
**LV etalons (konteksts):** dusmoties
**DE konteksts:** zürnen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0421
**Card ID:** b2-zuschneiden-2094
**Field:** etText
**CURRENT:** lõikama (lõikeks)
**PROPOSED_ET:** sobivasse mõõtu lõikama
**Problēma:** „Lõikama (lõikeks)” on ebaloomulik ja ebaselge; zuschneiden tähendab millegi mõõtu või kuju järgi lõikamist.
**LV etalons (konteksts):** piegriezt
**DE konteksts:** zuschneiden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0422
**Card ID:** b2-zutrauen-2097
**Field:** etText
**CURRENT:** ootama • võimeliseks pidama
**PROPOSED_ET:** võimeliseks pidama
**Problēma:** „Zutrauen” tähendab kellelegi võimekuse omistamist; „ootama” ei ole selle verbi tähendus.
**LV etalons (konteksts):** gaidīt • domāt spējīgu
**DE konteksts:** zutrauen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0423
**Card ID:** b2-Zuversicht-2098
**Field:** etText
**CURRENT:** usaldus
**PROPOSED_ET:** kindlustunne
**Problēma:** Zuversicht tähendab lootusrikast kindlustunnet või usku edusse, mitte lihtsalt usaldust.
**LV etalons (konteksts):** paļāvība
**DE konteksts:** Zuversicht
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0424
**Card ID:** b2-sich-abwenden
**Field:** study.translation
**CURRENT:** pöörduma millestki ära
**PROPOSED_ET:** millestki ära pöörduma
**Problēma:** Estonian word order is unnatural; the complement normally precedes ära pöörduma.
**LV etalons (konteksts):** novērsties no
**DE konteksts:** sich abwenden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0425
**Card ID:** b2-sich-einpraegen
**Field:** study.translation
**CURRENT:** meelde jätma
**PROPOSED_ET:** meelde jääma
**Problēma:** The reflexive German verb means to become firmly remembered, not to memorize something actively.
**LV etalons (konteksts):** iegaumēt
**DE konteksts:** sich einprägen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0426
**Card ID:** b2-sich-erweisen
**Field:** study.translation
**CURRENT:** osutuma milleks
**PROPOSED_ET:** osutuma millekski
**Problēma:** Üldises vastefraasis nõuab osutuma translatiivi: osutuma millekski.
**LV etalons (konteksts):** izrādīties par
**DE konteksts:** sich erweisen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0427
**Card ID:** b2-sich-fassen
**Field:** study.translation
**CURRENT:** haarama • end koguma • end valitsema
**PROPOSED_ET:** end koguma • end valitsema
**Problēma:** Haarama on tavalise fassen-verbi vaste, kuid sich fassen tähendab siin enese kogumist või valitsemist.
**LV etalons (konteksts):** sagrābt • saņemties • savaldīties
**DE konteksts:** sich fassen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0428
**Card ID:** b2-genosse
**Field:** study.translation
**CURRENT:** liige
**PROPOSED_ET:** seltsimees
**Problēma:** Genosse tähendab selles kasutuses eeskätt seltsimeest, mitte üldiselt mis tahes liiget.
**LV etalons (konteksts):** biedrs
**DE konteksts:** Genosse
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0429
**Card ID:** b2-genossin
**Field:** study.translation
**CURRENT:** liige (naine)
**PROPOSED_ET:** seltsimees (naine)
**Problēma:** Genossin on naissoost seltsimees; „liige” kaotab saksa sõna põhitähenduse.
**LV etalons (konteksts):** biedre • biedrene
**DE konteksts:** Genossin
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0430
**Card ID:** b2-sich-gestalten
**Field:** study.translation
**CURRENT:** kujunema milleks
**PROPOSED_ET:** kujunema
**Problēma:** Eesti põhisõnavaste on „kujunema”; „milleks” jätab vaste ebamääraseks ja mõjub siin ebaloomulikult.
**LV etalons (konteksts):** veidoties par
**DE konteksts:** sich gestalten
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0431
**Card ID:** b2-haube
**Field:** study.examples[2].lv
**CURRENT:** ta avab auto mootorikapoti.
**PROPOSED_ET:** ta avab auto kapoti.
**Problēma:** Eesti keeles nimetatakse auto mootorikatet tavaliselt lihtsalt kapotiks; „mootorikapott” on ebaharilik liitsõna.
**LV etalons (konteksts):** viņš atver automašīnas motora pārsegu.
**DE konteksts:** Haube
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0432
**Card ID:** b2-haube
**Field:** study.examples[3].lv
**CURRENT:** mootorikapott on katki.
**PROPOSED_ET:** auto kapott on katki.
**Problēma:** „Auto kapott” on loomulikum ja tavapärasem kui „mootorikapott”.
**LV etalons (konteksts):** motora pārsegs ir salauzts.
**DE konteksts:** Haube
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0433
**Card ID:** b2-haube
**Field:** study.examples[5].lv
**CURRENT:** pane kaas pajale kattena.
**PROPOSED_ET:** pane pajale kaas.
**Problēma:** „Kaas pajale kattena” on kohmakas; loomulik eestikeelne käsk on „pane pajale kaas”.
**LV etalons (konteksts):** uzliec vāku kā pārsegu uz katla.
**DE konteksts:** Haube
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0434
**Card ID:** b2-sich-herausbilden
**Field:** study.translation
**CURRENT:** välja kujunema milleks
**PROPOSED_ET:** välja kujunema
**Problēma:** „Sich herausbilden” vaste on „välja kujunema”; lisand „milleks” ei ole siin loomulik ega vajalik.
**LV etalons (konteksts):** izveidoties par
**DE konteksts:** sich herausbilden
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0435
**Card ID:** b2-sich-herausstellen
**Field:** study.translation
**CURRENT:** selguma milleks
**PROPOSED_ET:** osutuma millekski
**Problēma:** „Sich herausstellen” tähendab sageli millekski osutumist; praegune „selguma milleks” on ebatäpne ja kohmakas.
**LV etalons (konteksts):** izrādīties par
**DE konteksts:** sich herausstellen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0436
**Card ID:** b2-leiden-study
**Field:** study.translation
**CURRENT:** pikaajaline ja raske haigus
**PROPOSED_ET:** haigus • kannatused
**Problēma:** Leiden tähendab haigust või kannatusi, kuid mitte tingimata pikaajalist ja rasket haigust.
**LV etalons (konteksts):** ilga un smaga slimība
**DE konteksts:** Leiden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0437
**Card ID:** b2-neger
**Field:** study.translation
**CURRENT:** neeger
**PROPOSED_ET:** neeger (vananenud ja halvustav)
**Problēma:** Märksõna on vananenud ja rassistlikult halvustav; õppekaart vajab selle kasutusmärget.
**LV etalons (konteksts):** nēģeris
**DE konteksts:** Neger
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0438
**Card ID:** b2-sich-paaren
**Field:** study.translation
**CURRENT:** paarduma millegaga
**PROPOSED_ET:** paarituma
**Problēma:** Sich paaren tähendab eeskätt paarituma; praegune väljend on ebatäpne ja „millegagi” ei sobi.
**LV etalons (konteksts):** pāroties ar
**DE konteksts:** sich paaren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0439
**Card ID:** b2-sich-vereinigen
**Field:** study.translation
**CURRENT:** ühinema millegaga
**PROPOSED_ET:** ühinema millegagi
**Problēma:** Verb ühinema nõuab sihitise puhul kaassõnalist vormi millegagi, mitte millegaga.
**LV etalons (konteksts):** apvienoties ar
**DE konteksts:** sich vereinigen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0440
**Card ID:** b2-sich-versehen
**Field:** study.translation
**CURRENT:** eksima • varustama millegaga
**PROPOSED_ET:** eksima • varustama millegagi
**Problēma:** Väljend „varustama millegagi” nõuab indefiniitse asesõna vormi millegagi.
**LV etalons (konteksts):** aizmirst • aprīkot ar
**DE konteksts:** sich versehen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0441
**Card ID:** b2-sich-versoehnen
**Field:** study.translation
**CURRENT:** leppima millegaga
**PROPOSED_ET:** ära leppima kellegagi
**Problēma:** Sich versöhnen tähendab kellegagi ära leppima; millegagi leppima tähendab millegi aktsepteerimist.
**LV etalons (konteksts):** samierināties ar
**DE konteksts:** sich versöhnen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0442
**Card ID:** b2-sich-verstellen
**Field:** study.translation
**CURRENT:** teesklema keda
**PROPOSED_ET:** teesklema
**Problēma:** Küsimusõna keda ei sobi tõlkesse; sich verstellen tähendab siin teesklema või võltsilt käituma.
**LV etalons (konteksts):** uzdoties par
**DE konteksts:** sich verstellen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0443
**Card ID:** b2-zuwider
**Field:** study.examples[2].lv
**CURRENT:** see ei meeldi mulle / see kurvastab mind.
**PROPOSED_ET:** see ei meeldi mulle
**Problēma:** Zuwider sein tähendab mitte meeldima või vastumeelne olema, mitte tingimata kurvastama.
**LV etalons (konteksts):** tas man nepatīk / tas mani apbēdina.
**DE konteksts:** zuwider
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0444
**Card ID:** b2-zuwider
**Field:** study.comparison[3].meaning
**CURRENT:** vaidlema • mitte nõustuma
**PROPOSED_ET:** vastu vaidlema • mitte nõustuma
**Problēma:** Iebilst tähendab vastu vaidlema või vastuväiteid esitama; vaidlema on liiga üldine.
**LV etalons (konteksts):** iebilst • nepiekrist
**DE konteksts:** zuwider
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0445
**Card ID:** b2-aendern
**Field:** etMain
**CURRENT:** muutma • parandama
**PROPOSED_ET:** muutma
**Problēma:** Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandamisele või verbessern'ile.
**LV etalons (konteksts):** mainīt • labot
**DE konteksts:** ändern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-B2-0446
**Card ID:** b2-aendern
**Field:** study.translation
**CURRENT:** muutma • parandama
**PROPOSED_ET:** muutma
**Problēma:** Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandamisele või verbessern'ile.
**LV etalons (konteksts):** mainīt • labot
**DE konteksts:** ändern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 60/60 | FAIL |
| sectionAccents | PASS |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |
