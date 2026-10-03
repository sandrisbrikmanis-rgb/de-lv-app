# FR–DE A1 pilns lingvistiskais audits (MASTER v1.12 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.12** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `a2a769e8600291411a7a66eab0483dd4659c9151` |
| **DATASET_PRODUCTION_BLOB** | `2ca27679188b52f50c5f4ebb335bac743fc6482c` |
| **WWW DATASET BLOB** | `2ca27679188b52f50c5f4ebb335bac743fc6482c` |
| **LAST FINAL CLOSURE MAIN SHA** | `null` |
| **LAST FINAL CLOSURE DATASET BLOB** | `null` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **FIRST_AUDIT_NO_CLOSURE_BASELINE** |
| **OWNER HISTORY AVAILABLE** | NO |
| **OWNER HISTORY FILES LOADED** | none |
| **OWNER APPROVED FIELDS TOTAL** | **0** |
| **OWNER APPROVED FIELDS CHECKED** | **0** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **0** |
| **OWNER APPROVED FIELDS DRIFTED** | **0** |
| **OWNER HISTORY GATE** | **N/A** |
| **OWNER HISTORY LOADED** | NO |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.12**
**Valodas lauks:** `lv` = franču teksts (projekta konvencija, nav latviešu valoda)
**Audita datums:** 2026-08-27
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **702** |
| Luna coverage | **100%** |
| Study | **124/134** |
| RAW findings | **808** |
| NEW_VALIDATED_REAL_FINDINGS | **412** |
| OWNER_BACKLOG_FINAL | **412** |
| PREVIOUSLY_SEEN_RAW | **396** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **412** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **702/702 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **0** |
| sectionAccents | **15** |
| LV remnants | **224** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 455 |
| Deterministic | 353 |
| OWNER_DECISION_CONFIRMED | 0 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **396** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **412** |
| OWNER_BACKLOG_FINAL | **412** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **N/A** |
| OWNER_HISTORY_GATE | **N/A** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 702/702 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **33** · HIGH: **494** · MEDIUM: **215** · LOW: **66**

#### FR-A1-0001
**Card ID:** STRUCT
**Field:** study.count
**CURRENT:** 124
**PROPOSED_FR:** 134
**Problēma:** Study count mismatch LV=134 FR=124
**DE konteksts:** —
**Smagums:** CRITICAL
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0002
**Card ID:** a1-Besuch-87
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Besuch
**DE konteksts:** Besuch
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0003
**Card ID:** a1-besuchen-89
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam besuchen
**DE konteksts:** besuchen
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0004
**Card ID:** a1-bitte
**Field:** study.tip.text
**CURRENT:** (tukšs)
**PROPOSED_FR:** (FR tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0005
**Card ID:** a1-bitte-study
**Field:** study.tip.text
**CURRENT:** (tukšs)
**PROPOSED_FR:** (FR tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0006
**Card ID:** a1-Fußball-218
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Fußball
**DE konteksts:** Fußball
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0007
**Card ID:** a1-ganz-219
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam ganz
**DE konteksts:** ganz
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0008
**Card ID:** a1-gefallen-225
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam gefallen
**DE konteksts:** gefallen
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0009
**Card ID:** a1-Geschichte-233
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Geschichte
**DE konteksts:** Geschichte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0010
**Card ID:** a1-Geschwister-234
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Geschwister
**DE konteksts:** Geschwister
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0011
**Card ID:** a1-Großeltern-251
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Großeltern
**DE konteksts:** Großeltern
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0012
**Card ID:** a1-Hand-267
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Hand
**DE konteksts:** Hand
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0013
**Card ID:** a1-hübsch-288
**Field:** study
**CURRENT:** (nav Study objekta)
**PROPOSED_FR:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam hübsch
**DE konteksts:** hübsch
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0014
**Card ID:** a1-sprechen-study
**Field:** entry[5].study.comparison[0].example
**CURRENT:** Wir sprechen über die Arbeit. – Nous parlons de travail.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0015
**Card ID:** a1-aber
**Field:** entry[21].study.comparison[0].example
**CURRENT:** Ich komme, aber später. – Je viendrai, mais plus tard.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0016
**Card ID:** a1-auch-study
**Field:** entry[48].study.important[0]
**CURRENT:** Ich auch wünsche Ihnen n’est pas le bon ordre des mots.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0017
**Card ID:** a1-auf
**Field:** entry[49].study.comparison[1].example
**CURRENT:** Ich hänge das Bild an die Wand. – J'accroche le tableau au mur.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0018
**Card ID:** a1-bei
**Field:** entry[78].study.comparison[1].example
**CURRENT:** Das Bild hängt an der Wand. – Le tableau est accroché au mur.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0019
**Card ID:** a1-bitte
**Field:** entry[93].study.explanation[5]
**CURRENT:** Bitte avec une lettre minuscule est un mot poli - cela signifie s'il vous plaît (Bitte schön !, Eine Tasse Kaffee, bitte).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0020
**Card ID:** a1-bitte
**Field:** entry[93].study.tip[0]
**CURRENT:** Petite bouchée = s'il te plaît (Bitte schön!, Kaffee, bitte). die Bitte avec une majuscule = demande (eine Bitte, meine Bitte).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0021
**Card ID:** a1-bitte
**Field:** entry[93].study.important[3]
**CURRENT:** Nepareizi : Die Bitte schön ! → Pareizi : Bitte schön !
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0022
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[0].meaning
**CURRENT:** lūdzu
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0023
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[0].example
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0024
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[1].meaning
**CURRENT:** lūgums
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0025
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[1].example
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0026
**Card ID:** a1-bitte-study
**Field:** entry[94].study.explanation[5]
**CURRENT:** Bitte avec une lettre minuscule est un mot poli - cela signifie s'il vous plaît (Bitte schön !, Eine Tasse Kaffee, bitte).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0027
**Card ID:** a1-bitte-study
**Field:** entry[94].study.tip[0]
**CURRENT:** Petite bouchée = s'il te plaît (Bitte schön!, Kaffee, bitte). die Bitte avec une majuscule = demande (eine Bitte, meine Bitte).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0028
**Card ID:** a1-bitte-study
**Field:** entry[94].study.important[3]
**CURRENT:** Nepareizi : Die Bitte schön ! → Pareizi : Bitte schön !
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0029
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[0].meaning
**CURRENT:** lūgums
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0030
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[0].example
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0031
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[1].meaning
**CURRENT:** lūdzu
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0032
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[1].example
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0033
**Card ID:** a1-bringen
**Field:** entry[111].study.comparison[4].meaning
**CURRENT:** paņemt
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0034
**Card ID:** a1-bringen
**Field:** entry[111].study.comparison[4].example
**CURRENT:** Ich nehme das Buch. – Es paņemu grāmatu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0035
**Card ID:** a1-ein
**Field:** entry[154].study.examples[3].lv
**CURRENT:** Bērns spēlējas.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0036
**Card ID:** a1-ein
**Field:** entry[154].study.comparison[0].meaning
**CURRENT:** vīriešu dzimte
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0037
**Card ID:** a1-ein
**Field:** entry[154].study.comparison[1].meaning
**CURRENT:** sieviešu dzimte
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0038
**Card ID:** a1-ein
**Field:** entry[154].study.comparison[3].meaning
**CURRENT:** akuzatīvs
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0039
**Card ID:** a1-eis
**Field:** entry[157].study.comparison[0].example
**CURRENT:** Ich esse ein Eis. = Es ēdu saldējumu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0040
**Card ID:** a1-eis
**Field:** entry[157].study.comparison[2].example
**CURRENT:** Das Wasser ist kalt. = Ūdens ir auksts.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0041
**Card ID:** a1-eis
**Field:** entry[157].study.comparison[3].example
**CURRENT:** Eis ist ein Dessert. = Saldējums ir deserts.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0042
**Card ID:** a1-erst
**Field:** entry[165].study.comparison[1].example
**CURRENT:** Zuerst frühstücken wir. = Vispirms mēs brokastojam.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0043
**Card ID:** a1-erst
**Field:** entry[165].study.comparison[2].example
**CURRENT:** Ich habe nur 5 Euro. = Man ir tikai 5 eiro.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0044
**Card ID:** a1-erst
**Field:** entry[165].study.comparison[3].example
**CURRENT:** Dann gehen wir nach Hause. = Tad mēs ejam mājās.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0045
**Card ID:** a1-es
**Field:** entry[167].study.comparison[0].example
**CURRENT:** Es regnet. – Līst.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0046
**Card ID:** a1-es
**Field:** entry[167].study.comparison[1].example
**CURRENT:** Ich lerne Deutsch. – Es mācos vācu valodu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0047
**Card ID:** a1-etwas
**Field:** entry[169].study.explanation[4]
**CURRENT:** Le plus important est de distinguer : etwas kaufen = acheter quelque chose, etwas müde = un peu fatigué.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0048
**Card ID:** a1-etwas
**Field:** entry[169].study.comparison[0].example
**CURRENT:** Ich brauche etwas. = Man kaut kas vajadzīgs.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0049
**Card ID:** a1-etwas
**Field:** entry[169].study.comparison[2].example
**CURRENT:** Ich bin ein bisschen müde. = Es esmu mazliet noguris.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0050
**Card ID:** a1-euch
**Field:** entry[170].study.comparison[0].example
**CURRENT:** Ihr seid freundlich. = Jūs esat draudzīgi.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0051
**Card ID:** a1-euch
**Field:** entry[170].study.comparison[1].example
**CURRENT:** Ich helfe euch. = Es jums palīdzu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0052
**Card ID:** a1-euch
**Field:** entry[170].study.comparison[2].example
**CURRENT:** Das ist euer Haus. = Tā ir jūsu māja.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0053
**Card ID:** a1-euch
**Field:** entry[170].study.info[0]
**CURRENT:** ihr = you (subject form of the sentence)
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0054
**Card ID:** a1-euch
**Field:** entry[170].study.info[1]
**CURRENT:** euch = you (where? form) / you (whom? form)
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0055
**Card ID:** a1-euch
**Field:** entry[170].study.info[2]
**CURRENT:** euer = your (possessive form)
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0056
**Card ID:** a1-euch
**Field:** entry[170].study.tip.example
**CURRENT:** I help you. = Ich helfe euch. i see you = Ich sehe euch. I'm telling you. = Ich erzähle euch.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0057
**Card ID:** a1-fahren
**Field:** entry[172].study.comparison[2].example
**CURRENT:** Er läuft schnell.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0058
**Card ID:** a1-fahren
**Field:** entry[172].study.important.text
**CURRENT:** Fahren ≠ tikai « braukt »
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0059
**Card ID:** a1-fahren
**Field:** entry[172].study.important.example
**CURRENT:** In German, the same verb often means: to drive • to drive • to take away depending on the context.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0060
**Card ID:** a1-fahren
**Field:** entry[172].study.accents.purple[0]
**CURRENT:** braukt
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0061
**Card ID:** a1-fahren
**Field:** entry[172].study.accents.purple[2]
**CURRENT:** vest
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0062
**Card ID:** a1-fahren
**Field:** entry[172].study.accents.purple[4]
**CURRENT:** aizvest
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0063
**Card ID:** a1-fahren
**Field:** entry[172].study.sectionAccents.comparison[2].example.yellow[0]
**CURRENT:** läuft
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0064
**Card ID:** a1-fahren
**Field:** entry[172].study.sectionAccents.important[0].text.purple[0]
**CURRENT:** braukt
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0065
**Card ID:** a1-fahren
**Field:** entry[172].study.sectionAccents.important[0].example.purple[0]
**CURRENT:** braukt
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0066
**Card ID:** a1-finden
**Field:** entry[187].study.comparison[0].example
**CURRENT:** Ich finde das gut. = Man tas šķiet labi.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0067
**Card ID:** a1-finden
**Field:** entry[187].study.comparison[1].example
**CURRENT:** Ich suche den Schlüssel. = Je cherche la clé.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0068
**Card ID:** a1-fuer
**Field:** entry[216].study.explanation[0]
**CURRENT:** Idée principale : für est une préposition qui régit toujours l'accusatif - généralement pour ou pour en letton.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0069
**Card ID:** a1-fuer
**Field:** entry[216].study.explanation[1]
**CURRENT:** Lorsqu'on parle de destinataire ou d'intention, für = pour (für dich = pour vous).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0070
**Card ID:** a1-fuer
**Field:** entry[216].study.explanation[2]
**CURRENT:** Lorsqu'on parle d'échange, de frais ou de motif, für = for (danke für das Geschenk = merci pour le cadeau).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0071
**Card ID:** a1-fuer
**Field:** entry[216].study.explanation[3]
**CURRENT:** Für nécessite toujours l'accusatif, quelle que soit sa signification.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0072
**Card ID:** a1-fuer
**Field:** entry[216].study.tip[0]
**CURRENT:** Für toujours + accusatif - quel que soit le sens.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0073
**Card ID:** a1-fuer
**Field:** entry[216].study.important[0]
**CURRENT:** Für + Akkusativ toujours, par exemple für mich, für dich, für das Kind.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0074
**Card ID:** a1-fuer
**Field:** entry[216].study.important[1]
**CURRENT:** Danke für / bezahlen für = 'pour', pas 'avant'.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0075
**Card ID:** a1-fuer
**Field:** entry[216].study.sectionAccents.tip[0].purple[0]
**CURRENT:** Für
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0076
**Card ID:** a1-fuer
**Field:** entry[216].study.sectionAccents.important[0].purple[0]
**CURRENT:** für
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0077
**Card ID:** a1-haben
**Field:** entry[261].study.comparison[0].example
**CURRENT:** Ich habe Zeit. = Man ir laiks.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0078
**Card ID:** a1-haben
**Field:** entry[261].study.comparison[1].example
**CURRENT:** Ich bin hier. = Es esmu šeit.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0079
**Card ID:** a1-haben
**Field:** entry[261].study.comparison[2].example
**CURRENT:** Ich bekomme ein Geschenk. = Es saņemu dāvanu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0080
**Card ID:** a1-haben
**Field:** entry[261].study.tip.text
**CURRENT:** Atceries : Ich habe → man ir.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0081
**Card ID:** a1-haben
**Field:** entry[261].study.sectionAccents.tip.left.purple[0]
**CURRENT:** man ir
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0082
**Card ID:** a1-halten
**Field:** entry[265].study.explanation[3]
**CURRENT:** Dans l'expression d'opinion, je halte das für..., cela signifie considérer comme.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0083
**Card ID:** a1-halten
**Field:** entry[265].study.comparison[0].example
**CURRENT:** Der Bus hält. = Autobuss pietur.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0084
**Card ID:** a1-halten
**Field:** entry[265].study.comparison[1].example
**CURRENT:** Ich nehme die Tasche. = Es ņemu somu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0085
**Card ID:** a1-halten
**Field:** entry[265].study.comparison[2].example
**CURRENT:** Bitte halten Sie an. = Lūdzu, apstājieties.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0086
**Card ID:** a1-halten
**Field:** entry[265].study.comparison[3].example
**CURRENT:** Ich denke, das ist richtig. = Es domāju, ka tas ir pareizi.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0087
**Card ID:** a1-halten
**Field:** entry[265].study.important[1]
**CURRENT:** Ich halte das für... est une expression d'opinion : "Je le considère comme...".
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0088
**Card ID:** a1-halten
**Field:** entry[265].study.sectionAccents.comparison[0].example.blue[0]
**CURRENT:** hält
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0089
**Card ID:** a1-halten
**Field:** entry[265].study.sectionAccents.tip.left.blue[1]
**CURRENT:** hält
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0090
**Card ID:** a1-heißen
**Field:** entry[276].study.comparison[1].example
**CURRENT:** Er nennt mich Tom. = Viņš mani sauc par Tomu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0091
**Card ID:** a1-heißen
**Field:** entry[276].study.comparison[2].example
**CURRENT:** Was bedeutet das? = Ko tas nozīmē?
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0092
**Card ID:** a1-heißen
**Field:** entry[276].study.comparison[4].meaning
**CURRENT:** zvanīt
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0093
**Card ID:** a1-hoeren-study
**Field:** entry[287].study.explanation[1]
**CURRENT:** Hören signifie avant tout : percevoir le son.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0094
**Card ID:** a1-hoeren-study
**Field:** entry[287].study.explanation[3]
**CURRENT:** Hören est utilisé pour les sons, la musique et ce qui est entendu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0095
**Card ID:** a1-hoeren-study
**Field:** entry[287].study.tip[1]
**CURRENT:** Utilisez hören lorsque le contexte correspond à ce sens.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0096
**Card ID:** a1-hoeren-study
**Field:** entry[287].study.important[0]
**CURRENT:** Hören = entendre/écouter un son.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0097
**Card ID:** a1-hoeren-study
**Field:** entry[287].study.sectionAccents.important[0].blue[0]
**CURRENT:** hören
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0098
**Card ID:** a1-im
**Field:** entry[293].study.important[2]
**CURRENT:** Avec des mois et des saisons : im März, im Herbst.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0099
**Card ID:** a1-können
**Field:** entry[319].study.id
**CURRENT:** a1-können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0100
**Card ID:** a1-können
**Field:** entry[319].study.explanation[0]
**CURRENT:** Idée principale : können signifie pouvoir ou savoir faire quelque chose.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0101
**Card ID:** a1-können
**Field:** entry[319].study.explanation[3]
**CURRENT:** Können est un verbe modal, donc le deuxième verbe vient généralement à la fin.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0102
**Card ID:** a1-können
**Field:** entry[319].study.comparison[0].word
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0103
**Card ID:** a1-können
**Field:** entry[319].study.comparison[0].example
**CURRENT:** Ich kann schwimmen. = Es protu peldēt.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0104
**Card ID:** a1-können
**Field:** entry[319].study.comparison[1].word
**CURRENT:** dürfen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0105
**Card ID:** a1-können
**Field:** entry[319].study.comparison[1].example
**CURRENT:** Darf ich gehen? = Vai drīkstu iet?
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0106
**Card ID:** a1-können
**Field:** entry[319].study.comparison[2].word
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0107
**Card ID:** a1-können
**Field:** entry[319].study.comparison[2].example
**CURRENT:** Ich muss lernen. = Man jāmācās.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0108
**Card ID:** a1-können
**Field:** entry[319].study.tip.text
**CURRENT:** Rappelez-vous : compétence/capacité → können.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0109
**Card ID:** a1-können
**Field:** entry[319].study.important[0]
**CURRENT:** Können n'est pas la même chose que dürfen. können = pouvoir/savoir, dürfen = être autorisé.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0110
**Card ID:** a1-können
**Field:** entry[319].study.important[1]
**CURRENT:** Dans une phrase avec können, le deuxième verbe vient souvent à la fin : Ich kann schwimmen.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0111
**Card ID:** a1-können
**Field:** entry[319].study.sectionAccents.comparison[0].word.green[0]
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0112
**Card ID:** a1-können
**Field:** entry[319].study.sectionAccents.comparison[1].word.green[0]
**CURRENT:** dürfen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0113
**Card ID:** a1-können
**Field:** entry[319].study.sectionAccents.comparison[2].word.green[0]
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0114
**Card ID:** a1-können
**Field:** entry[319].study.sectionAccents.tip.left.blue[0]
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0115
**Card ID:** a1-können
**Field:** entry[319].study.sectionAccents.important[0].purple[0]
**CURRENT:** Können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0116
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[0].example
**CURRENT:** Das kostet 5 Euro. = Tas maksā 5 eiro.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0117
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[1].example
**CURRENT:** Ich bezahle die Rechnung. = Es maksāju rēķinu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0118
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[2].example
**CURRENT:** Kann ich bar zahlen? = Vai varu maksāt skaidrā naudā?
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0119
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[3].example
**CURRENT:** Was kostet das Buch? = Cik maksā grāmata?
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0120
**Card ID:** a1-laden-study
**Field:** entry[349].study.explanation[3]
**CURRENT:** Pluriel : die Läden.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0121
**Card ID:** a1-laden-study
**Field:** entry[349].study.important[2]
**CURRENT:** Pluriel : die Läden.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0122
**Card ID:** a1-laden-study
**Field:** entry[349].study.sectionAccents.important[2].blue[0]
**CURRENT:** die Läden
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0123
**Card ID:** a1-laufen
**Field:** entry[357].study.comparison[0].example
**CURRENT:** Er läuft schnell.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0124
**Card ID:** a1-laufen
**Field:** entry[357].study.sectionAccents.comparison[0].example.blue[0]
**CURRENT:** läuft
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0125
**Card ID:** a1-laut
**Field:** entry[358].study.explanation[6]
**CURRENT:** Der Laut avec une majuscule et l'article der est un nom - cela signifie le son en tant que chose ou signal (Der Laut ist schön = le son est beau).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0126
**Card ID:** a1-laut-study
**Field:** entry[359].study.explanation[6]
**CURRENT:** Der Laut avec une majuscule et l'article der est un nom - cela signifie le son en tant que chose ou signal (Der Laut ist schön = le son est beau).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0127
**Card ID:** a1-mann
**Field:** entry[394].study.explanation[4]
**CURRENT:** Pluriel : die Männer.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0128
**Card ID:** a1-mann
**Field:** entry[394].study.important[2]
**CURRENT:** Pluriel : die Männer.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0129
**Card ID:** a1-mögen
**Field:** entry[413].study.id
**CURRENT:** a1-mögen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0130
**Card ID:** a1-mögen
**Field:** entry[413].study.explanation[0]
**CURRENT:** Idée principale : mögen signifie le plus souvent aimer quelque chose.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0131
**Card ID:** a1-mögen
**Field:** entry[413].study.explanation[2]
**CURRENT:** Möchte est une autre forme utilisée pour le désir poli : je voudrais.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0132
**Card ID:** a1-mögen
**Field:** entry[413].study.comparison[0].word
**CURRENT:** mögen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0133
**Card ID:** a1-mögen
**Field:** entry[413].study.comparison[1].word
**CURRENT:** möchte
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0134
**Card ID:** a1-mögen
**Field:** entry[413].study.comparison[1].example
**CURRENT:** Ich möchte Kaffee.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0135
**Card ID:** a1-mögen
**Field:** entry[413].study.important[0]
**CURRENT:** Mögen n'est pas un nom pour poli « je voudrais ». Möchte est généralement utilisé pour cela.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0136
**Card ID:** a1-mögen
**Field:** entry[413].study.sectionAccents.comparison[0].word.green[0]
**CURRENT:** mögen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0137
**Card ID:** a1-mögen
**Field:** entry[413].study.sectionAccents.comparison[1].word.green[0]
**CURRENT:** möchte
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0138
**Card ID:** a1-mögen
**Field:** entry[413].study.sectionAccents.comparison[1].example.red[0]
**CURRENT:** möchte
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0139
**Card ID:** a1-mögen
**Field:** entry[413].study.sectionAccents.important[0].purple[0]
**CURRENT:** Mögen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0140
**Card ID:** a1-mögen
**Field:** entry[413].study.sectionAccents.important[0].purple[1]
**CURRENT:** Mögen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0141
**Card ID:** a1-müssen
**Field:** entry[423].study.id
**CURRENT:** a1-müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0142
**Card ID:** a1-müssen
**Field:** entry[423].study.explanation[0]
**CURRENT:** Idée principale : müssen signifie faire quelque chose.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0143
**Card ID:** a1-müssen
**Field:** entry[423].study.explanation[1]
**CURRENT:** En letton, müssen est souvent traduit par « moi oui… », « toi oui… », « nous oui… ».
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0144
**Card ID:** a1-müssen
**Field:** entry[423].study.comparison[0].word
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0145
**Card ID:** a1-müssen
**Field:** entry[423].study.comparison[1].word
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0146
**Card ID:** a1-müssen
**Field:** entry[423].study.comparison[3].word
**CURRENT:** dürfen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0147
**Card ID:** a1-müssen
**Field:** entry[423].study.important[0]
**CURRENT:** Müssen est un verbe modal.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0148
**Card ID:** a1-müssen
**Field:** entry[423].study.sectionAccents.comparison[0].word.green[0]
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0149
**Card ID:** a1-müssen
**Field:** entry[423].study.sectionAccents.comparison[1].word.green[0]
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0150
**Card ID:** a1-müssen
**Field:** entry[423].study.sectionAccents.comparison[3].word.green[0]
**CURRENT:** dürfen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0151
**Card ID:** a1-müssen
**Field:** entry[423].study.sectionAccents.important[0].purple[0]
**CURRENT:** Müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0152
**Card ID:** a1-müssen
**Field:** entry[423].study.sectionAccents.important[0].purple[1]
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0153
**Card ID:** a1-nach
**Field:** entry[426].study.comparison[3].example
**CURRENT:** Vor dem Essen wasche ich die Hände.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0154
**Card ID:** a1-natuerlich
**Field:** entry[433].study.explanation[0]
**CURRENT:** Idée principale : natürlich comme adverbe signifie bien sûr, comme adjectif cela signifie naturel.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0155
**Card ID:** a1-natuerlich
**Field:** entry[433].study.explanation[1]
**CURRENT:** Dans une conversation, confirmant quelque chose, natürlich = bien sûr (Kommst du mit ? – Natürlich ! = Vous venez ? – Bien sûr !).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0156
**Card ID:** a1-natuerlich
**Field:** entry[433].study.explanation[2]
**CURRENT:** Lorsqu'on parle de nature, d'origine ou de qualités, natürlich = naturel (natürliche Schönheit = beauté naturelle).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0157
**Card ID:** a1-natuerlich
**Field:** entry[433].study.important[0]
**CURRENT:** Natürlich = bien sûr (adverbe, affirmation) OU naturel (adjectif).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0158
**Card ID:** a1-natuerlich
**Field:** entry[433].study.sectionAccents.important[0].purple[0]
**CURRENT:** natürlich
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0159
**Card ID:** a1-natuerlich
**Field:** entry[433].study.sectionAccents.important[0].purple[1]
**CURRENT:** natürlich
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0160
**Card ID:** a1-oder
**Field:** entry[459].study.comparison[3].example
**CURRENT:** Ich komme, aber später.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0161
**Card ID:** a1-probieren
**Field:** entry[482].study.explanation[3]
**CURRENT:** Ce n’est pas la même chose que prüfen, ce qui signifie vérifier plus attentivement.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0162
**Card ID:** a1-probieren
**Field:** entry[482].study.comparison[2].word
**CURRENT:** prüfen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0163
**Card ID:** a1-probieren
**Field:** entry[482].study.comparison[2].example
**CURRENT:** Ich prüfe die Rechnung.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0164
**Card ID:** a1-probieren
**Field:** entry[482].study.important[1]
**CURRENT:** Vérifier un document ou une facture est généralement prüfen.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0165
**Card ID:** a1-probieren
**Field:** entry[482].study.sectionAccents.comparison[2].word.green[0]
**CURRENT:** prüfen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0166
**Card ID:** a1-probieren
**Field:** entry[482].study.sectionAccents.comparison[2].example.red[0]
**CURRENT:** prüfe
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0167
**Card ID:** a1-schon-study
**Field:** entry[521].study.explanation[1]
**CURRENT:** Schön signifie principalement : quelque chose s'est déjà produit ou est en cours.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0168
**Card ID:** a1-sehen
**Field:** entry[539].study.comparison[3].word
**CURRENT:** hören
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0169
**Card ID:** a1-sehen
**Field:** entry[539].study.comparison[3].example
**CURRENT:** Ich höre Musik.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0170
**Card ID:** a1-sehen
**Field:** entry[539].study.important[1]
**CURRENT:** Ich sehe dich = es tevi redzu • Ich schaue den Film = es skatos filmu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0171
**Card ID:** a1-sehen
**Field:** entry[539].study.sectionAccents.comparison[3].word.green[0]
**CURRENT:** hören
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0172
**Card ID:** a1-sehen
**Field:** entry[539].study.sectionAccents.comparison[3].example.green[0]
**CURRENT:** höre
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0173
**Card ID:** a1-sein
**Field:** entry[542].study.comparison[2].example
**CURRENT:** Ich werde müde.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0174
**Card ID:** a1-sein
**Field:** entry[542].study.tip.text
**CURRENT:** Atceries : ich bin = es esmu • Du bist = tu esi.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0175
**Card ID:** a1-sein
**Field:** entry[542].study.sectionAccents.tip.left.purple[0]
**CURRENT:** es esmu
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0176
**Card ID:** a1-sich
**Field:** entry[547].study.explanation[3]
**CURRENT:** Important à noter au niveau A1 : ich wasche mich, er wäscht sich.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0177
**Card ID:** a1-sich
**Field:** entry[547].study.comparison[0].example
**CURRENT:** Er wäscht sich.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0178
**Card ID:** a1-sich
**Field:** entry[547].study.comparison[2].example
**CURRENT:** Du wäschst dich.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0179
**Card ID:** a1-sitzen
**Field:** entry[558].study.comparison[1].example
**CURRENT:** Er steht an der Tür.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0180
**Card ID:** a1-sollen
**Field:** entry[564].study.explanation[2]
**CURRENT:** Ce n'est pas aussi fort que le müssen.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0181
**Card ID:** a1-sollen
**Field:** entry[564].study.comparison[1].word
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0182
**Card ID:** a1-sollen
**Field:** entry[564].study.comparison[2].word
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0183
**Card ID:** a1-sollen
**Field:** entry[564].study.tip.text
**CURRENT:** Rappelez-vous : quelqu'un dit quoi faire → sollen • Doit être fait → müssen.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0184
**Card ID:** a1-sollen
**Field:** entry[564].study.important[1]
**CURRENT:** Sollen et müssen ne sont pas exactement les mêmes.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0185
**Card ID:** a1-sollen
**Field:** entry[564].study.sectionAccents.comparison[1].word.green[0]
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0186
**Card ID:** a1-sollen
**Field:** entry[564].study.sectionAccents.comparison[2].word.green[0]
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0187
**Card ID:** a1-sollen
**Field:** entry[564].study.sectionAccents.tip.left.red[0]
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0188
**Card ID:** a1-sollen
**Field:** entry[564].study.sectionAccents.important[1].red[0]
**CURRENT:** müssen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0189
**Card ID:** a1-über
**Field:** entry[608].study.id
**CURRENT:** a1-über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0190
**Card ID:** a1-über
**Field:** entry[608].study.explanation[0]
**CURRENT:** Idée principale : über signifie au-dessus ou environ selon le contexte.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0191
**Card ID:** a1-über
**Field:** entry[608].study.explanation[1]
**CURRENT:** Lorsqu'il s'agit d'emplacement, über signifie souvent au-dessus.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0192
**Card ID:** a1-über
**Field:** entry[608].study.explanation[2]
**CURRENT:** Lorsqu'il s'agit d'une conversation, d'un texte ou d'un sujet, über signifie environ.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0193
**Card ID:** a1-über
**Field:** entry[608].study.explanation[3]
**CURRENT:** En mouvement, über peut signifier fini.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0194
**Card ID:** a1-über
**Field:** entry[608].study.comparison[0].word
**CURRENT:** über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0195
**Card ID:** a1-über
**Field:** entry[608].study.comparison[0].example
**CURRENT:** Wir sprechen über das Wetter.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0196
**Card ID:** a1-über
**Field:** entry[608].study.comparison[3].example
**CURRENT:** Ich höre von dir.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0197
**Card ID:** a1-über
**Field:** entry[608].study.tip.text
**CURRENT:** Rappelez-vous : sujet de conversation → über • Au-dessus du tableau → über.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0198
**Card ID:** a1-über
**Field:** entry[608].study.important[0]
**CURRENT:** Über n'est pas seulement un nom de lieu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0199
**Card ID:** a1-über
**Field:** entry[608].study.important[1]
**CURRENT:** Sprechen über signifie « parler de ».
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0200
**Card ID:** a1-über
**Field:** entry[608].study.sectionAccents.comparison[0].word.green[0]
**CURRENT:** über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0201
**Card ID:** a1-über
**Field:** entry[608].study.sectionAccents.comparison[0].example.blue[0]
**CURRENT:** über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0202
**Card ID:** a1-über
**Field:** entry[608].study.sectionAccents.tip.left.blue[0]
**CURRENT:** über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0203
**Card ID:** a1-über
**Field:** entry[608].study.sectionAccents.important[0].purple[0]
**CURRENT:** Über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0204
**Card ID:** a1-um
**Field:** entry[611].study.comparison[3].word
**CURRENT:** für
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0205
**Card ID:** a1-um
**Field:** entry[611].study.comparison[3].example
**CURRENT:** Das ist für dich.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0206
**Card ID:** a1-um
**Field:** entry[611].study.sectionAccents.comparison[3].word.green[0]
**CURRENT:** für
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0207
**Card ID:** a1-um
**Field:** entry[611].study.sectionAccents.comparison[3].example.red[0]
**CURRENT:** für
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0208
**Card ID:** a1-unter
**Field:** entry[615].study.explanation[3]
**CURRENT:** C'est l'opposé d'über lorsqu'il s'agit de la direction haut/bas.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0209
**Card ID:** a1-unter
**Field:** entry[615].study.comparison[1].word
**CURRENT:** über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0210
**Card ID:** a1-unter
**Field:** entry[615].study.comparison[1].example
**CURRENT:** Die Lampe hängt über dem Tisch.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0211
**Card ID:** a1-unter
**Field:** entry[615].study.comparison[2].example
**CURRENT:** Zwischen den Häusern.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0212
**Card ID:** a1-unter
**Field:** entry[615].study.important[1]
**CURRENT:** Unter et über sont souvent opposés dans le sens du lieu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0213
**Card ID:** a1-unter
**Field:** entry[615].study.sectionAccents.comparison[1].word.green[0]
**CURRENT:** über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0214
**Card ID:** a1-unter
**Field:** entry[615].study.sectionAccents.comparison[1].example.red[0]
**CURRENT:** über
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0215
**Card ID:** a1-verstehen
**Field:** entry[621].study.explanation[2]
**CURRENT:** Ici, vous n'avez généralement pas besoin de « connaître » ou d'« enseigner » le letton. • Ils sont plus souvent können.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0216
**Card ID:** a1-verstehen
**Field:** entry[621].study.comparison[1].word
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0217
**Card ID:** a1-verstehen
**Field:** entry[621].study.tip.text
**CURRENT:** N'oubliez pas : comprendre le texte/la personne → verstehen • Savoir comment faire quelque chose → können.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0218
**Card ID:** a1-verstehen
**Field:** entry[621].study.sectionAccents.comparison[1].word.green[0]
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0219
**Card ID:** a1-verstehen
**Field:** entry[621].study.sectionAccents.tip.left.red[0]
**CURRENT:** können
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0220
**Card ID:** a1-vor
**Field:** entry[636].study.explanation[3]
**CURRENT:** En temps d'horloge, vor signifie « jusqu'à », par exemple fünf vor acht.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0221
**Card ID:** a1-was
**Field:** entry[644].study.important[2]
**CURRENT:** Was für (ein/eine) signifie quelqu'un/et demande une qualité ou un type (Was für ein Film ist das ? = De quel genre de film s'agit-il ?).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0222
**Card ID:** a1-was
**Field:** entry[644].study.sectionAccents.important[2].blue[0]
**CURRENT:** was für
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0223
**Card ID:** a1-werden
**Field:** entry[657].study.explanation[3]
**CURRENT:** Au niveau A1, la phrase la plus importante est Ich werde müde. = Je commence à être fatigué.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0224
**Card ID:** a1-werden
**Field:** entry[657].study.comparison[0].example
**CURRENT:** Ich werde müde.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0225
**Card ID:** a1-werden
**Field:** entry[657].study.comparison[1].example
**CURRENT:** Ich bin müde.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0226
**Card ID:** a1-werden
**Field:** entry[657].study.important[1]
**CURRENT:** Ich werde müde = je suis fatigué • Ich bin müde = je suis fatigué.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0227
**Card ID:** a1-wetter
**Field:** entry[658].study.comparison[0].example
**CURRENT:** Das Wetter ist schön.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0228
**Card ID:** a1-fernsehen
**Field:** entry[687].study.comparison[0].example
**CURRENT:** Ich sehe fern. = Es skatos televīziju.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0229
**Card ID:** a1-fernsehen
**Field:** entry[687].study.comparison[1].example
**CURRENT:** Im Fernsehen läuft ein Film. = Televīzijā rāda filmu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0230
**Card ID:** a1-fernsehen
**Field:** entry[687].study.comparison[2].example
**CURRENT:** Ich sehe einen Film. = Es redzu filmu.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0231
**Card ID:** a1-gemuese
**Field:** entry[692].study.explanation[0]
**CURRENT:** Idée principale : Les légumes en général. L'allemand n'a pas de forme plurielle pour *die Gemüse.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0232
**Card ID:** a1-gemuese
**Field:** entry[692].study.explanation[1]
**CURRENT:** Das Gemüse signifie principalement : les légumes en général.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0233
**Card ID:** a1-gemuese
**Field:** entry[692].study.tip[0]
**CURRENT:** Das Gemüse = légumes
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0234
**Card ID:** a1-gemuese
**Field:** entry[692].study.tip[1]
**CURRENT:** Utilisez das Gemüse lorsque le contexte correspond à ce sens.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0235
**Card ID:** a1-gemuese
**Field:** entry[692].study.important[0]
**CURRENT:** Nav pareizi : die Gemüse, die Obsts.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0236
**Card ID:** a1-gemuese
**Field:** entry[692].study.important[1]
**CURRENT:** Nepareizi : die Gemüse → Pareizi : das Gemüse
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0237
**Card ID:** a1-gemuese
**Field:** entry[692].study.important[2]
**CURRENT:** Das Gemüse = légumes (en général).
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0238
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Ich
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0239
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Er
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0240
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Sie
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0241
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Das
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0242
**Card ID:** a1-fahren
**Field:** study.sectionAccents (?)
**CURRENT:** läuft
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0243
**Card ID:** a1-fahren
**Field:** study.sectionAccents (?)
**CURRENT:** braukt
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0244
**Card ID:** a1-fuer
**Field:** study.sectionAccents (?)
**CURRENT:** Für
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0245
**Card ID:** a1-fuer
**Field:** study.sectionAccents (?)
**CURRENT:** für
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0246
**Card ID:** a1-fuer
**Field:** study.sectionAccents (examples)
**CURRENT:** pay
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0247
**Card ID:** a1-gross-study
**Field:** study.sectionAccents (explanation)
**CURRENT:** Main
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0248
**Card ID:** a1-haben
**Field:** study.sectionAccents (?)
**CURRENT:** man ir
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0249
**Card ID:** a1-halten
**Field:** study.sectionAccents (?)
**CURRENT:** hält
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0250
**Card ID:** a1-halten
**Field:** study.sectionAccents (examples)
**CURRENT:** consider
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0251
**Card ID:** a1-hoeren-study
**Field:** study.sectionAccents (?)
**CURRENT:** hören
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0252
**Card ID:** a1-kein
**Field:** study.sectionAccents (explanation)
**CURRENT:** Main
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0253
**Card ID:** a1-können
**Field:** study.sectionAccents (?)
**CURRENT:** können
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0254
**Card ID:** a1-können
**Field:** study.sectionAccents (?)
**CURRENT:** dürfen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0255
**Card ID:** a1-können
**Field:** study.sectionAccents (?)
**CURRENT:** müssen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0256
**Card ID:** a1-können
**Field:** study.sectionAccents (?)
**CURRENT:** Können
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0257
**Card ID:** a1-laden-study
**Field:** study.sectionAccents (?)
**CURRENT:** die Läden
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0258
**Card ID:** a1-lang
**Field:** study.sectionAccents (examples)
**CURRENT:** long
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0259
**Card ID:** a1-laufen
**Field:** study.sectionAccents (?)
**CURRENT:** läuft
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0260
**Card ID:** a1-liegen
**Field:** study.sectionAccents (examples)
**CURRENT:** phone
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0261
**Card ID:** a1-mögen
**Field:** study.sectionAccents (?)
**CURRENT:** mögen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0262
**Card ID:** a1-mögen
**Field:** study.sectionAccents (?)
**CURRENT:** möchte
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0263
**Card ID:** a1-mögen
**Field:** study.sectionAccents (?)
**CURRENT:** Mögen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0264
**Card ID:** a1-müssen
**Field:** study.sectionAccents (?)
**CURRENT:** müssen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0265
**Card ID:** a1-müssen
**Field:** study.sectionAccents (?)
**CURRENT:** können
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0266
**Card ID:** a1-müssen
**Field:** study.sectionAccents (?)
**CURRENT:** dürfen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0267
**Card ID:** a1-müssen
**Field:** study.sectionAccents (?)
**CURRENT:** Müssen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0268
**Card ID:** a1-natuerlich
**Field:** study.sectionAccents (?)
**CURRENT:** natürlich
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0269
**Card ID:** a1-neu
**Field:** study.sectionAccents (explanation)
**CURRENT:** Main
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0270
**Card ID:** a1-neu
**Field:** study.sectionAccents (examples)
**CURRENT:** phone
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0271
**Card ID:** a1-nur-study
**Field:** study.sectionAccents (examples)
**CURRENT:** just
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0272
**Card ID:** a1-probieren
**Field:** study.sectionAccents (?)
**CURRENT:** prüfen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0273
**Card ID:** a1-probieren
**Field:** study.sectionAccents (?)
**CURRENT:** prüfe
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0274
**Card ID:** a1-sehen
**Field:** study.sectionAccents (?)
**CURRENT:** hören
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0275
**Card ID:** a1-sehen
**Field:** study.sectionAccents (?)
**CURRENT:** höre
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0276
**Card ID:** a1-sein
**Field:** study.sectionAccents (?)
**CURRENT:** es esmu
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0277
**Card ID:** a1-sollen
**Field:** study.sectionAccents (?)
**CURRENT:** müssen
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0278
**Card ID:** a1-sollen
**Field:** study.sectionAccents (?)
**CURRENT:** können
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0279
**Card ID:** a1-über
**Field:** study.sectionAccents (?)
**CURRENT:** über
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0280
**Card ID:** a1-über
**Field:** study.sectionAccents (?)
**CURRENT:** Über
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0281
**Card ID:** a1-über
**Field:** study.sectionAccents (examples)
**CURRENT:** lamp
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0282
**Card ID:** a1-um
**Field:** study.sectionAccents (?)
**CURRENT:** für
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0283
**Card ID:** a1-unter
**Field:** study.sectionAccents (?)
**CURRENT:** über
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0284
**Card ID:** a1-unter
**Field:** study.sectionAccents (examples)
**CURRENT:** lamp
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0285
**Card ID:** a1-verstehen
**Field:** study.sectionAccents (?)
**CURRENT:** können
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0286
**Card ID:** a1-was
**Field:** study.sectionAccents (?)
**CURRENT:** was für
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0287
**Card ID:** a1-zum
**Field:** study.sectionAccents (examples)
**CURRENT:** are
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0288
**Card ID:** a1-obst
**Field:** study.sectionAccents (examples)
**CURRENT:** fruit
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0289
**Card ID:** a1-bis
**Field:** study.sectionAccents.comparison.example
**CURRENT:** bis dass
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "bis dass" nav atrodams sadaļā comparison
**DE konteksts:** bis
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0290
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** Wasser
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "Wasser" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0291
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** dich
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "dich" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0292
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** bringt
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "bringt" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0293
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** Buch
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "Buch" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0294
**Card ID:** a1-lernen-4
**Field:** frText
**CURRENT:** Pour apprendre
**PROPOSED_FR:** Apprendre
**Problēma:** « Pour apprendre » signifie « afin d'apprendre » et ajoute une notion de but absente de l'infinitif allemand.
**LV etalons (konteksts):** mācīties
**DE konteksts:** lernen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0295
**Card ID:** a1-anfangen-14
**Field:** frText
**CURRENT:** Pour commencer
**PROPOSED_FR:** Commencer
**Problēma:** « Pour commencer » signifie « afin de commencer » ; le lemme allemand correspond à « commencer ».
**LV etalons (konteksts):** sākt
**DE konteksts:** anfangen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0296
**Card ID:** a1-anders-15
**Field:** frText
**CURRENT:** Sinon
**PROPOSED_FR:** Autrement
**Problēma:** « Sinon » signifie « otherwise » ou « if not » ; « anders » signifie « autrement » ou « différemment ».
**LV etalons (konteksts):** citādi
**DE konteksts:** anders
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0297
**Card ID:** a1-anrufen-16
**Field:** frText
**CURRENT:** Pour appeler
**PROPOSED_FR:** Appeler
**Problēma:** « Pour appeler » ajoute une notion de but ; l'infinitif allemand correspond à « appeler ».
**LV etalons (konteksts):** zvanīt
**DE konteksts:** anrufen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0298
**Card ID:** a1-achten-22
**Field:** frText
**CURRENT:** A observer
**PROPOSED_FR:** Faire attention
**Problēma:** « A observer » signifie observer ; « achten » signifie faire attention. L'accent de « À » manque aussi.
**LV etalons (konteksts):** ievērot
**DE konteksts:** achten
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0299
**Card ID:** a1-ankommen-28
**Field:** frText
**CURRENT:** Pour arriver
**PROPOSED_FR:** Arriver
**Problēma:** « Pour arriver » signifie « afin d'arriver » ; le lemme allemand correspond à « arriver ».
**LV etalons (konteksts):** ierasties
**DE konteksts:** ankommen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0300
**Card ID:** a1-anziehen-30
**Field:** frText
**CURRENT:** Mettez
**PROPOSED_FR:** Mettre
**Problēma:** « Mettez » est un impératif à la 2e personne du pluriel, tandis que « anziehen » est un infinitif.
**LV etalons (konteksts):** uzvilkt
**DE konteksts:** anziehen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0301
**Card ID:** a1-anhalten-31
**Field:** frText
**CURRENT:** Pour arrêter
**PROPOSED_FR:** S'arrêter
**Problēma:** La source lettone indique l'action de s'arrêter ; « arrêter » sans pronom est transitif et change le sens.
**LV etalons (konteksts):** apstāties
**DE konteksts:** anhalten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0302
**Card ID:** a1-antworten-36
**Field:** frText
**CURRENT:** Pour répondre
**PROPOSED_FR:** Répondre
**Problēma:** « Pour répondre » ajoute une notion de but ; l'infinitif allemand correspond à « répondre ».
**LV etalons (konteksts):** atbildēt
**DE konteksts:** antworten
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0303
**Card ID:** a1-Arm-44
**Field:** frText
**CURRENT:** Main
**PROPOSED_FR:** Bras
**Problēma:** « Arm » signifie « bras » ; « main » correspond à l'allemand « Hand ».
**LV etalons (konteksts):** roka
**DE konteksts:** Arm
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0304
**Card ID:** a1-Ärztin-46
**Field:** frText
**CURRENT:** Un médecin
**PROPOSED_FR:** Une médecin
**Problēma:** « Ärztin » est explicitement féminin ; l'article masculin « un » ne respecte pas le genre.
**LV etalons (konteksts):** ārste
**DE konteksts:** Ärztin
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0305
**Card ID:** a1-aufmachen-50
**Field:** frText
**CURRENT:** Pour ouvrir
**PROPOSED_FR:** Ouvrir
**Problēma:** « Pour ouvrir » signifie « afin d'ouvrir » ; le lemme allemand correspond à « ouvrir ».
**LV etalons (konteksts):** atvērt
**DE konteksts:** aufmachen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0306
**Card ID:** a1-aufpassen-51
**Field:** frText
**CURRENT:** Sois prudent
**PROPOSED_FR:** Faire attention
**Problēma:** « Sois prudent » est un impératif adressé à une personne ; « aufpassen » est ici présenté à l'infinitif.
**LV etalons (konteksts):** uzmanīties
**DE konteksts:** aufpassen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0307
**Card ID:** a1-aufwärts-53
**Field:** frText
**CURRENT:** En haut
**PROPOSED_FR:** Vers le haut
**Problēma:** « En haut » indique une position ; « aufwärts » exprime une direction ascendante, « vers le haut ».
**LV etalons (konteksts):** uz augšu
**DE konteksts:** aufwärts
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0308
**Card ID:** a1-auf dem Bahnhof-59
**Field:** frText
**CURRENT:** A la gare
**PROPOSED_FR:** À la gare
**Problēma:** The French preposition requires a grave accent: « À ».
**LV etalons (konteksts):** stacijā
**DE konteksts:** auf dem Bahnhof
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0309
**Card ID:** a1-Bauch-73
**Field:** frText
**CURRENT:** Estomac
**PROPOSED_FR:** Ventre
**Problēma:** « Bauch » means belly or abdomen; « estomac » corresponds more closely to German « Magen ».
**LV etalons (konteksts):** vēders
**DE konteksts:** Bauch
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0310
**Card ID:** a1-beginnen-77
**Field:** frText
**CURRENT:** Pour commencer
**PROPOSED_FR:** Commencer
**Problēma:** The current phrase means « in order to begin »; the German infinitive is simply « commencer ».
**LV etalons (konteksts):** sākt
**DE konteksts:** beginnen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0311
**Card ID:** a1-bekommen-82
**Field:** frText
**CURRENT:** Pour recevoir
**PROPOSED_FR:** Recevoir
**Problēma:** The current phrase means « in order to receive »; the German infinitive is simply « recevoir ».
**LV etalons (konteksts):** saņemt
**DE konteksts:** bekommen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0312
**Card ID:** a1-besuchen-89
**Field:** frText
**CURRENT:** Pour assister • Pour visiter
**PROPOSED_FR:** Visiter
**Problēma:** The learner-facing field contains multiple translations; « assister » means attend, not visit.
**LV etalons (konteksts):** apmeklēt
**DE konteksts:** besuchen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0313
**Card ID:** a1-Brötchen-113
**Field:** frText
**CURRENT:** Un chignon
**PROPOSED_FR:** Un petit pain
**Problēma:** « Chignon » means a hair bun; « Brötchen » is a small bread roll.
**LV etalons (konteksts):** maizīte
**DE konteksts:** Brötchen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0314
**Card ID:** a1-Cousine-125
**Field:** frText
**CURRENT:** Cousin
**PROPOSED_FR:** Cousine
**Problēma:** Le nom français doit être au féminin pour correspondre à « Cousine ».
**LV etalons (konteksts):** māsīca
**DE konteksts:** Cousine
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0315
**Card ID:** a1-danken-127
**Field:** frText
**CURRENT:** Pour remercier
**PROPOSED_FR:** Remercier
**Problēma:** « Pour remercier » exprime un but, tandis que l’infinitif allemand signifie « remercier ».
**LV etalons (konteksts):** pateikties
**DE konteksts:** danken
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0316
**Card ID:** a1-dein-132
**Field:** frText
**CURRENT:** Le vôtre
**PROPOSED_FR:** Ton
**Problēma:** « Dein » est un déterminant possessif (« ton/ta/tes »), pas le pronom « le vôtre ».
**LV etalons (konteksts):** tavs
**DE konteksts:** dein
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0317
**Card ID:** a1-dürfen-150
**Field:** frText
**CURRENT:** Être autorisé
**PROPOSED_FR:** Avoir le droit de
**Problēma:** Le verbe modal « dürfen » exprime la permission ; « avoir le droit de » est l’équivalent direct.
**LV etalons (konteksts):** drīkstēt
**DE konteksts:** dürfen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0318
**Card ID:** a1-Ei-153
**Field:** frText
**CURRENT:** Un oeuf
**PROPOSED_FR:** Un œuf
**Problēma:** Le mot français s’écrit avec la ligature « œ » : « œuf ».
**LV etalons (konteksts):** ola
**DE konteksts:** Ei
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0319
**Card ID:** a1-Erde-164
**Field:** frText
**CURRENT:** Atterrir
**PROPOSED_FR:** Terre
**Problēma:** « Erde » signifie « terre », tandis que « atterrir » est le verbe allemand « landen ».
**LV etalons (konteksts):** zeme
**DE konteksts:** Erde
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0320
**Card ID:** a1-Esslöffel-168
**Field:** frText
**CURRENT:** Cuillerée à soupe
**PROPOSED_FR:** Cuillère à soupe
**Problēma:** « Cuillerée » désigne une quantité ; « Esslöffel » désigne l’ustensile, une cuillère à soupe.
**LV etalons (konteksts):** ēdamkarote
**DE konteksts:** Esslöffel
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0321
**Card ID:** a1-euer-171
**Field:** frText
**CURRENT:** Le vôtre
**PROPOSED_FR:** Votre
**Problēma:** « Euer » est un déterminant possessif (« votre »), pas le pronom « le vôtre ».
**LV etalons (konteksts):** jūsu
**DE konteksts:** euer
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0322
**Card ID:** a1-Fernseher-182
**Field:** frText
**CURRENT:** Télévision
**PROPOSED_FR:** Téléviseur
**Problēma:** Le terme allemand désigne l'appareil, tandis que « télévision » désigne surtout le média ou le service.
**LV etalons (konteksts):** televizors
**DE konteksts:** Fernseher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0323
**Card ID:** a1-fett-184
**Field:** frText
**CURRENT:** Graisse
**PROPOSED_FR:** Gras
**Problēma:** « Fett » est un adjectif allemand signifiant « gras » ; « graisse » est un nom français.
**LV etalons (konteksts):** trekns
**DE konteksts:** fett
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0324
**Card ID:** a1-Foto-195
**Field:** frText
**CURRENT:** Photographier
**PROPOSED_FR:** Photo
**Problēma:** « Foto » est un nom désignant une photographie ; « photographier » est le verbe correspondant.
**LV etalons (konteksts):** fotogrāfija
**DE konteksts:** Foto
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0325
**Card ID:** a1-frei-199
**Field:** frText
**CURRENT:** Gratuit
**PROPOSED_FR:** Libre
**Problēma:** « Frei » signifie ici « libre » ; « gratuit » ne couvre qu'un sens particulier de l'allemand.
**LV etalons (konteksts):** brīvs
**DE konteksts:** frei
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0326
**Card ID:** a1-Freundin-202
**Field:** frText
**CURRENT:** Petite amie
**PROPOSED_FR:** Amie
**Problēma:** « Freundin » peut signifier amie ou petite amie ; « petite amie » impose un sens amoureux absent du contexte allemand.
**LV etalons (konteksts):** draudzene
**DE konteksts:** Freundin
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0327
**Card ID:** a1-Fußball-218
**Field:** frText
**CURRENT:** Football américain
**PROPOSED_FR:** Football
**Problēma:** « Fußball » désigne le football, tandis que « football américain » désigne un autre sport.
**LV etalons (konteksts):** futbols
**DE konteksts:** Fußball
**Smagums:** CRITICAL
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0328
**Card ID:** a1-geboren-224
**Field:** frText
**CURRENT:** Est né
**PROPOSED_FR:** Né
**Problēma:** Le français actuel ajoute un verbe conjugué et un sujet masculin implicite ; l'allemand est un participe/adjectif seul.
**LV etalons (konteksts):** dzimis
**DE konteksts:** geboren
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0329
**Card ID:** a1-gefallen-225
**Field:** frText
**CURRENT:** Aimer
**PROPOSED_FR:** Plaire
**Problēma:** Dans ce sens, « gefallen » signifie « plaire » ; « aimer » ne rend pas la construction et le sens allemands.
**LV etalons (konteksts):** patikt
**DE konteksts:** gefallen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0330
**Card ID:** a1-Geschichte-233
**Field:** frText
**CURRENT:** Histoire • Histoire
**PROPOSED_FR:** Histoire
**Problēma:** Le champ learner-facing contient deux traductions séparées par une puce ; la répétition doit être supprimée.
**LV etalons (konteksts):** stāsts
**DE konteksts:** Geschichte
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0331
**Card ID:** a1-Gesicht-235
**Field:** frText
**CURRENT:** Affronter
**PROPOSED_FR:** Visage
**Problēma:** « Affronter » signifie faire face à, tandis que « Gesicht » signifie « visage ».
**LV etalons (konteksts):** seja
**DE konteksts:** Gesicht
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0332
**Card ID:** a1-Getränk-239
**Field:** frText
**CURRENT:** Un verre
**PROPOSED_FR:** Boisson
**Problēma:** « Getränk » signifie « boisson » ; « un verre » désigne le récipient ou son contenu servi.
**LV etalons (konteksts):** dzēriens
**DE konteksts:** Getränk
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0333
**Card ID:** a1-grüßen-257
**Field:** frText
**CURRENT:** Pour saluer
**PROPOSED_FR:** Saluer
**Problēma:** L’infinitif allemand « grüßen » se traduit directement par « saluer », sans « pour ».
**LV etalons (konteksts):** sveicināt
**DE konteksts:** grüßen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0334
**Card ID:** a1-halb-262
**Field:** frText
**CURRENT:** Côté
**PROPOSED_FR:** Demi
**Problēma:** « Halb » signifie « demi » ou « à moitié » ; « côté » signifie « Seite » en allemand.
**LV etalons (konteksts):** pus
**DE konteksts:** halb
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0335
**Card ID:** a1-Hälfte-263
**Field:** frText
**CURRENT:** Côté
**PROPOSED_FR:** Moitié
**Problēma:** « Hälfte » signifie « moitié », tandis que « côté » signifie « Seite » en allemand.
**LV etalons (konteksts):** puse
**DE konteksts:** Hälfte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0336
**Card ID:** a1-helfen-277
**Field:** frText
**CURRENT:** Pour aider
**PROPOSED_FR:** Aider
**Problēma:** L’infinitif allemand « helfen » se traduit directement par « aider », sans « pour ».
**LV etalons (konteksts):** palīdzēt
**DE konteksts:** helfen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0337
**Card ID:** a1-Herr-280
**Field:** frText
**CURRENT:** M
**PROPOSED_FR:** Monsieur
**Problēma:** « M » seul n’est pas une traduction française correcte de « Herr » ; le terme A1 attendu est « Monsieur ».
**LV etalons (konteksts):** kungs
**DE konteksts:** Herr
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0338
**Card ID:** a1-hübsch-288
**Field:** frText
**CURRENT:** Propre • Agréable
**PROPOSED_FR:** Joli
**Problēma:** Le champ contient plusieurs traductions ; « hübsch » signifie ici « joli ». Une seule forme est requise.
**LV etalons (konteksts):** glīts
**DE konteksts:** hübsch
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0339
**Card ID:** a1-hundert-289
**Field:** frText
**CURRENT:** Une centaine
**PROPOSED_FR:** Cent
**Problēma:** « Hundert » correspond au nombre exact « cent » ; « une centaine » signifie approximativement cent.
**LV etalons (konteksts):** simts
**DE konteksts:** hundert
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0340
**Card ID:** a1-ich-291
**Field:** frText
**CURRENT:** Moi
**PROPOSED_FR:** Je
**Problēma:** Le pronom sujet allemand « ich » se traduit par « je » ; « moi » est une forme tonique.
**LV etalons (konteksts):** es
**DE konteksts:** ich
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0341
**Card ID:** a1-jawohl-299
**Field:** frText
**CURRENT:** Exactement comme ça
**PROPOSED_FR:** Oui, absolument
**Problēma:** Jawohl exprime un oui affirmatif ou emphatique, pas « exactement comme ça ».
**LV etalons (konteksts):** tieši tā
**DE konteksts:** jawohl
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0342
**Card ID:** a1-jetzt-302
**Field:** frText
**CURRENT:** Maintenant • Actuellement
**PROPOSED_FR:** Maintenant
**Problēma:** Le séparateur « • » présente plusieurs traductions dans le champ destiné à l’apprenant; un choix est requis.
**LV etalons (konteksts):** tagad • pašlaik
**DE konteksts:** jetzt
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0343
**Card ID:** a1-kommen-318
**Field:** frText
**CURRENT:** A venir
**PROPOSED_FR:** Venir
**Problēma:** Le mot allemand est un infinitif; « à venir » est une locution et ne traduit pas directement venir.
**LV etalons (konteksts):** nākt
**DE konteksts:** kommen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0344
**Card ID:** a1-Honig-324
**Field:** frText
**CURRENT:** Chéri
**PROPOSED_FR:** Miel
**Problēma:** « Chéri » est un terme affectueux; le nom allemand signifie « miel ».
**LV etalons (konteksts):** medus
**DE konteksts:** Honig
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0345
**Card ID:** a1-Koch-340
**Field:** frText
**CURRENT:** Cuisiner
**PROPOSED_FR:** Cuisinier
**Problēma:** « Koch » est un nom désignant une personne; « cuisiner » est le verbe.
**LV etalons (konteksts):** pavārs
**DE konteksts:** Koch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0346
**Card ID:** a1-Köchin-341
**Field:** frText
**CURRENT:** Cuisiner
**PROPOSED_FR:** Cuisinière
**Problēma:** « Köchin » est le nom féminin de la cuisinière; « cuisiner » est le verbe.
**LV etalons (konteksts):** pavāre
**DE konteksts:** Köchin
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0347
**Card ID:** a1-Lehrerin-365
**Field:** frText
**CURRENT:** Un professeur
**PROPOSED_FR:** Une professeure
**Problēma:** Le nom allemand désigne une enseignante ; l’article et le genre français sont incorrects.
**LV etalons (konteksts):** skolotāja
**DE konteksts:** Lehrerin
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0348
**Card ID:** a1-lesen-369
**Field:** frText
**CURRENT:** A lire
**PROPOSED_FR:** Lire
**Problēma:** Le verbe allemand à l’infinitif doit être traduit par l’infinitif français, sans la préposition « à ».
**LV etalons (konteksts):** lasīt
**DE konteksts:** lesen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0349
**Card ID:** a1-links-380
**Field:** frText
**CURRENT:** Gauche • Gauche
**PROPOSED_FR:** Gauche
**Problēma:** Le séparateur « • » expose plusieurs traductions dans le champ apprenant ; le choix doit être validé.
**LV etalons (konteksts):** pa kreisi • kreisais
**DE konteksts:** links
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0350
**Card ID:** a1-Mai-389
**Field:** frText
**CURRENT:** Peut
**PROPOSED_FR:** Mai
**Problēma:** « Peut » est une forme du verbe pouvoir ; le mois allemand Mai se traduit par « mai ».
**LV etalons (konteksts):** maijs
**DE konteksts:** Mai
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0351
**Card ID:** a1-malen-391
**Field:** frText
**CURRENT:** Peindre • Peindre
**PROPOSED_FR:** Peindre
**Problēma:** Le séparateur « • » expose plusieurs traductions dans le champ apprenant ; le choix doit être validé.
**LV etalons (konteksts):** gleznot • krāsot
**DE konteksts:** malen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0352
**Card ID:** a1-Mandarine-393
**Field:** frText
**CURRENT:** Mandarin
**PROPOSED_FR:** Mandarine
**Problēma:** Le fruit « Mandarine » est féminin en français ; « Mandarin » désigne notamment une personne ou une langue.
**LV etalons (konteksts):** mandarīns
**DE konteksts:** Mandarine
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0353
**Card ID:** a1-mein-401
**Field:** frText
**CURRENT:** Le mien
**PROPOSED_FR:** Mon
**Problēma:** « Mein » est un possessif déterminant (« mon »), tandis que « le mien » signifie « mine » avec un nom omis.
**LV etalons (konteksts):** mans
**DE konteksts:** mein
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0354
**Card ID:** a1-mitnehmen-409
**Field:** frText
**CURRENT:** Emportez avec vous
**PROPOSED_FR:** Emporter
**Problēma:** « Emportez » est un impératif ; le mot allemand est un infinitif et se traduit ici par « emporter ».
**LV etalons (konteksts):** ņemt līdzi
**DE konteksts:** mitnehmen
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0355
**Card ID:** a1-Mittag-410
**Field:** frText
**CURRENT:** Déjeuner
**PROPOSED_FR:** Midi
**Problēma:** « Mittag » signifie midi ou milieu de la journée ; « déjeuner » désigne le repas de midi.
**LV etalons (konteksts):** pusdiena
**DE konteksts:** Mittag
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0356
**Card ID:** a1-Mütze-425
**Field:** frText
**CURRENT:** Chapeau
**PROPOSED_FR:** Bonnet
**Problēma:** « Mütze » désigne un bonnet ou une casquette, pas un chapeau au sens général.
**LV etalons (konteksts):** cepure
**DE konteksts:** Mütze
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0357
**Card ID:** a1-Natur-432
**Field:** frText
**CURRENT:** N
**PROPOSED_FR:** Nature
**Problēma:** Le texte français est tronqué et ne traduit pas le nom allemand.
**LV etalons (konteksts):** daba
**DE konteksts:** Natur
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0358
**Card ID:** a1-neben-434
**Field:** frText
**CURRENT:** Près de
**PROPOSED_FR:** À côté de
**Problēma:** « Neben » exprime principalement la position juste à côté de, plus précisément que « près de ».
**LV etalons (konteksts):** blakus
**DE konteksts:** neben
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0359
**Card ID:** a1-nennen-437
**Field:** frText
**CURRENT:** Pour nommer
**PROPOSED_FR:** Nommer
**Problēma:** « Pour nommer » ajoute un sens de but absent de l’infinitif allemand.
**LV etalons (konteksts):** nosaukt
**DE konteksts:** nennen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0360
**Card ID:** a1-nett-438
**Field:** frText
**CURRENT:** Bon
**PROPOSED_FR:** Gentil
**Problēma:** « Nett » signifie « gentil » ou « sympathique », tandis que « bon » signifie « gut » ou « good ».
**LV etalons (konteksts):** jauks
**DE konteksts:** nett
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0361
**Card ID:** a1-nicht-447
**Field:** frText
**CURRENT:** Non
**PROPOSED_FR:** Ne... pas
**Problēma:** « Nicht » exprime la négation, alors que « non » traduit « nein » ou une réponse négative.
**LV etalons (konteksts):** ne
**DE konteksts:** nicht
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0362
**Card ID:** a1-normal-452
**Field:** frText
**CURRENT:** Normale
**PROPOSED_FR:** Normal
**Problēma:** La forme française masculine non marquée correspondant au lemme allemand est « normal », pas « normale ».
**LV etalons (konteksts):** normāls
**DE konteksts:** normal
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0363
**Card ID:** a1-Nummer-455
**Field:** frText
**CURRENT:** Nombre
**PROPOSED_FR:** Numéro
**Problēma:** « Nummer » signifie « numéro » ; « nombre » correspond à « Zahl ».
**LV etalons (konteksts):** numurs
**DE konteksts:** Nummer
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0364
**Card ID:** a1-oben-458
**Field:** frText
**CURRENT:** Au-dessus de
**PROPOSED_FR:** En haut
**Problēma:** « Au-dessus de » est une préposition nécessitant un complément, tandis que « oben » est un adverbe.
**LV etalons (konteksts):** augšā
**DE konteksts:** oben
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0365
**Card ID:** a1-öffnen-460
**Field:** frText
**CURRENT:** Pour ouvrir
**PROPOSED_FR:** Ouvrir
**Problēma:** « Pour ouvrir » ajoute une notion de but absente de l'infinitif allemand « öffnen ».
**LV etalons (konteksts):** atvērt
**DE konteksts:** öffnen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0366
**Card ID:** a1-Pflanze-475
**Field:** frText
**CURRENT:** Usine
**PROPOSED_FR:** Plante
**Problēma:** « Pflanze » signifie « plante » ; « usine » signifie une factory et ne correspond pas au sens allemand.
**LV etalons (konteksts):** augs
**DE konteksts:** Pflanze
**Smagums:** CRITICAL
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0367
**Card ID:** a1-Post-480
**Field:** frText
**CURRENT:** E-mail
**PROPOSED_FR:** Poste
**Problēma:** « E-mail » signifie courrier électronique, pas « Post » au sens de poste ou courrier.
**LV etalons (konteksts):** pasts
**DE konteksts:** Post
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0368
**Card ID:** a1-Punkt-486
**Field:** frText
**CURRENT:** Indiquer
**PROPOSED_FR:** Point
**Problēma:** « Indiquer » signifie « angeben » ; le nom allemand « Punkt » se traduit par « point ».
**LV etalons (konteksts):** punkts
**DE konteksts:** Punkt
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0369
**Card ID:** a1-putzen-487
**Field:** frText
**CURRENT:** Pour nettoyer
**PROPOSED_FR:** Nettoyer
**Problēma:** « Pour nettoyer » signifie « afin de nettoyer » ; la fiche doit donner l’infinitif français.
**LV etalons (konteksts):** tīrīt
**DE konteksts:** putzen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0370
**Card ID:** a1-rechts-491
**Field:** frText
**CURRENT:** À droite • La droite
**PROPOSED_FR:** À droite
**Problēma:** Deux traductions distinctes sont séparées par « • » ; une décision de propriétaire est requise.
**LV etalons (konteksts):** pa labi • labais
**DE konteksts:** rechts
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0371
**Card ID:** a1-regnen-495
**Field:** frText
**CURRENT:** Il pleut
**PROPOSED_FR:** Pleuvoir
**Problēma:** « Il pleut » est une phrase conjuguée ; l’équivalent lexical de l’infinitif allemand est « pleuvoir ».
**LV etalons (konteksts):** līt
**DE konteksts:** regnen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0372
**Card ID:** a1-rufen-500
**Field:** frText
**CURRENT:** Pour appeler
**PROPOSED_FR:** Appeler
**Problēma:** « Pour appeler » signifie « afin d’appeler » ; la fiche doit donner l’infinitif français.
**LV etalons (konteksts):** saukt
**DE konteksts:** rufen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0373
**Card ID:** a1-sauber-508
**Field:** frText
**CURRENT:** Faire le ménage
**PROPOSED_FR:** Propre
**Problēma:** « Faire le ménage » est une locution verbale ; « sauber » est l’adjectif « propre ».
**LV etalons (konteksts):** tīrs
**DE konteksts:** sauber
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0374
**Card ID:** a1-schicken-511
**Field:** frText
**CURRENT:** Pour envoyer
**PROPOSED_FR:** Envoyer
**Problēma:** « Pour envoyer » signifie « afin d’envoyer » ; la fiche doit donner l’infinitif français.
**LV etalons (konteksts):** sūtīt
**DE konteksts:** schicken
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0375
**Card ID:** a1-schmecken-515
**Field:** frText
**CURRENT:** A déguster
**PROPOSED_FR:** Avoir bon goût
**Problēma:** « À déguster » signifie « à goûter » et ne traduit pas le verbe « schmecken » au sens de « avoir bon goût ».
**LV etalons (konteksts):** garšot
**DE konteksts:** schmecken
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0376
**Card ID:** a1-Schnee-517
**Field:** frText
**CURRENT:** Il va neiger
**PROPOSED_FR:** Neige
**Problēma:** « Il va neiger » signifie « Es wird schneien » ; le nom « Schnee » se traduit par « neige ».
**LV etalons (konteksts):** sniegs
**DE konteksts:** Schnee
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0377
**Card ID:** a1-schneien-518
**Field:** frText
**CURRENT:** Il neige
**PROPOSED_FR:** Neiger
**Problēma:** « Il neige » est une phrase conjuguée ; l’équivalent lexical de l’infinitif allemand est « neiger ».
**LV etalons (konteksts):** snigt
**DE konteksts:** schneien
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0378
**Card ID:** a1-Schüler-527
**Field:** frText
**CURRENT:** Un étudiant
**PROPOSED_FR:** Élève
**Problēma:** « Un étudiant » désigne généralement un étudiant de l’enseignement supérieur ; « Schüler » signifie « élève ».
**LV etalons (konteksts):** skolnieks
**DE konteksts:** Schüler
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0379
**Card ID:** a1-spät-569
**Field:** frText
**CURRENT:** En retard
**PROPOSED_FR:** Tard
**Problēma:** «Spät» signifie «tard»; «en retard» signifie être late ou retardé, avec une nuance différente.
**LV etalons (konteksts):** vēls
**DE konteksts:** spät
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0380
**Card ID:** a1-spielen-572
**Field:** frText
**CURRENT:** Pour jouer
**PROPOSED_FR:** Jouer
**Problēma:** Le français «pour jouer» ajoute une préposition et exprime un but; l’infinitif allemand se traduit par «jouer».
**LV etalons (konteksts):** spēlēt
**DE konteksts:** spielen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0381
**Card ID:** a1-suchen-584
**Field:** frText
**CURRENT:** Pour rechercher
**PROPOSED_FR:** Chercher
**Problēma:** «Pour rechercher» exprime le but et ne correspond pas à l’infinitif allemand isolé «suchen».
**LV etalons (konteksts):** meklēt
**DE konteksts:** suchen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0382
**Card ID:** a1-Teller-595
**Field:** frText
**CURRENT:** Plaque
**PROPOSED_FR:** Assiette
**Problēma:** Un «Teller» est une assiette; «plaque» désigne une plaque ou une surface plate, pas une assiette de table.
**LV etalons (konteksts):** šķīvis
**DE konteksts:** Teller
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0383
**Card ID:** a1-Tisch-599
**Field:** frText
**CURRENT:** Tableau
**PROPOSED_FR:** Table
**Problēma:** « Tableau » signifie picture/board; le sens correct de « Tisch » est « table ».
**LV etalons (konteksts):** galds
**DE konteksts:** Tisch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0384
**Card ID:** a1-Treppe-603
**Field:** frText
**CURRENT:** Escaliers
**PROPOSED_FR:** Escalier
**Problēma:** Le mot allemand est au singulier; « escalier » est l’équivalent français correspondant.
**LV etalons (konteksts):** kāpnes
**DE konteksts:** Treppe
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0385
**Card ID:** a1-versuchen-622
**Field:** frText
**CURRENT:** Pour essayer
**PROPOSED_FR:** Essayer
**Problēma:** « Pour essayer » signifie « in order to try »; l’infinitif allemand correspond à « essayer ».
**LV etalons (konteksts):** mēģināt
**DE konteksts:** versuchen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0386
**Card ID:** a1-vielleicht-624
**Field:** frText
**CURRENT:** Peut être
**PROPOSED_FR:** Peut-être
**Problēma:** L’adverbe français s’écrit avec un trait d’union.
**LV etalons (konteksts):** varbūt
**DE konteksts:** vielleicht
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0387
**Card ID:** a1-von-635
**Field:** frText
**CURRENT:** Depuis
**PROPOSED_FR:** De
**Problēma:** « Depuis » exprime une durée ou un point de départ temporel; « von » se traduit ici par « de ».
**LV etalons (konteksts):** no
**DE konteksts:** von
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0388
**Card ID:** a1-Vorname-637
**Field:** frText
**CURRENT:** Mot
**PROPOSED_FR:** Prénom
**Problēma:** « Mot » signifie word; « Vorname » désigne le prénom.
**LV etalons (konteksts):** vārds
**DE konteksts:** Vorname
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0389
**Card ID:** a1-waschen-645
**Field:** frText
**CURRENT:** Se laver
**PROPOSED_FR:** Laver
**Problēma:** « Se laver » est pronominal et signifie wash oneself; « waschen » est ici le verbe transitif « laver ».
**LV etalons (konteksts):** mazgāt
**DE konteksts:** waschen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0390
**Card ID:** a1-welcher-652
**Field:** frText
**CURRENT:** OMS
**PROPOSED_FR:** Lequel
**Problēma:** « OMS » est l’abréviation de l’Organisation mondiale de la santé; « welcher » signifie « lequel ».
**LV etalons (konteksts):** kurš
**DE konteksts:** welcher
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0391
**Card ID:** a1-Zimmer-665
**Field:** frText
**CURRENT:** Chambre
**PROPOSED_FR:** La chambre
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**LV etalons (konteksts):** istaba
**DE konteksts:** Zimmer
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0392
**Card ID:** a1-Zitrone-666
**Field:** frText
**CURRENT:** Citron
**PROPOSED_FR:** Le citron
**Problēma:** Le nom français est masculin et l’article défini manque dans la fiche.
**LV etalons (konteksts):** citrons
**DE konteksts:** Zitrone
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0393
**Card ID:** a1-Zucker-669
**Field:** frText
**CURRENT:** Sucre
**PROPOSED_FR:** Le sucre
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**LV etalons (konteksts):** cukurs
**DE konteksts:** Zucker
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0394
**Card ID:** a1-zumachen-673
**Field:** frText
**CURRENT:** Gros plan
**PROPOSED_FR:** Fermer
**Problēma:** « Gros plan » signifie close-up; zumachen signifie fermer.
**LV etalons (konteksts):** aiztaisīt
**DE konteksts:** zumachen
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0395
**Card ID:** a1-zurück-674
**Field:** frText
**CURRENT:** Dos
**PROPOSED_FR:** En arrière
**Problēma:** « Dos » est le nom d’une partie du corps; zurück est un adverbe signifiant en arrière.
**LV etalons (konteksts):** atpakaļ
**DE konteksts:** zurück
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0396
**Card ID:** a1-zweihundert-680
**Field:** frText
**CURRENT:** Deux cent
**PROPOSED_FR:** Deux cents
**Problēma:** « Cent » prend un s dans « deux cents » lorsqu’il n’est pas suivi d’un autre nombre.
**LV etalons (konteksts):** divsimt
**DE konteksts:** zweihundert
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0397
**Card ID:** a1-Zwiebel-683
**Field:** frText
**CURRENT:** Oignon
**PROPOSED_FR:** L’oignon
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**LV etalons (konteksts):** sīpols
**DE konteksts:** Zwiebel
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0398
**Card ID:** a1-Stadt-696
**Field:** frText
**CURRENT:** Ville
**PROPOSED_FR:** La ville
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**LV etalons (konteksts):** pilsēta
**DE konteksts:** Stadt
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0399
**Card ID:** a1-Staat-697
**Field:** frText
**CURRENT:** Pays
**PROPOSED_FR:** L’État
**Problēma:** Staat signifie « État »; « pays » correspond plutôt à Land ou Staat dans un autre sens contextuel.
**LV etalons (konteksts):** valsts
**DE konteksts:** Staat
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0400
**Card ID:** a1-sprechen-study
**Field:** study.examples[2].lv
**CURRENT:** Je parle allemand
**PROPOSED_FR:** Elle parle avec son professeur.
**Problēma:** La phrase française ne correspond ni au sujet ni au complément de la source.
**LV etalons (konteksts):** Viņa runā ar savu skolotāju.
**DE konteksts:** sprechen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0401
**Card ID:** a1-sprechen-study
**Field:** study.comparison[1].meaning
**CURRENT:** Raconter (un texte spécifique)
**PROPOSED_FR:** Dire (un texte précis)
**Problēma:** Raconter signifie narrer; le contraste attendu est dire, non raconter.
**LV etalons (konteksts):** pasacīt (konkrētu tekstu)
**DE konteksts:** sprechen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0402
**Card ID:** a1-klein-study
**Field:** study.examples[1].lv
**CURRENT:** La pièce est petite.
**PROPOSED_FR:** L'enfant est encore petit.
**Problēma:** La traduction reprend la phrase précédente au lieu de traduire l'enfant.
**LV etalons (konteksts):** Bērns vēl ir mazs.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0403
**Card ID:** a1-klein-study
**Field:** study.examples[2].lv
**CURRENT:** L'enfant est encore petit.
**PROPOSED_FR:** J'ai un petit sac.
**Problēma:** La traduction correspond à l'exemple précédent, pas au sac.
**LV etalons (konteksts):** Man ir maza soma.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0404
**Card ID:** a1-an
**Field:** study.translation
**CURRENT:** À • À • Présent
**PROPOSED_FR:** À
**Problēma:** Le champ learner-facing contient plusieurs traductions séparées; une décision éditoriale est requise.
**LV etalons (konteksts):** pie
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0405
**Card ID:** a1-an
**Field:** study.examples[0].lv
**CURRENT:** Sur le mur / sur le mur
**PROPOSED_FR:** Au mur / sur le mur
**Problēma:** Deux formulations distinctes sont séparées par une barre et la répétition semble accidentelle.
**LV etalons (konteksts):** pie sienas / uz sienas
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0406
**Card ID:** a1-an
**Field:** study.examples[1].lv
**CURRENT:** A la fenêtre
**PROPOSED_FR:** À la fenêtre
**Problēma:** La préposition française prend un accent grave.
**LV etalons (konteksts):** pie loga
**DE konteksts:** an
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0407
**Card ID:** a1-an
**Field:** study.tip.text
**CURRENT:** Atceries : tarte sienas/loga/malas → an.
**PROPOSED_FR:** À retenir : au mur/à la fenêtre/au bord → an.
**Problēma:** Le texte contient du letton et « tarte », qui n'est pas une traduction française correcte.
**LV etalons (konteksts):** Atceries: pie sienas/loga/malas → an.
**DE konteksts:** an
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0408
**Card ID:** a1-ab
**Field:** study.translation
**CURRENT:** Depuis
**PROPOSED_FR:** À partir de
**Problēma:** Ab indique un point de départ; depuis exprime généralement une durée écoulée.
**LV etalons (konteksts):** no
**DE konteksts:** ab
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0409
**Card ID:** a1-ab
**Field:** study.examples[0].lv
**CURRENT:** A partir d'aujourd'hui
**PROPOSED_FR:** À partir d'aujourd'hui
**Problēma:** La préposition À doit porter un accent grave.
**LV etalons (konteksts):** no šodienas
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0410
**Card ID:** a1-ab
**Field:** study.examples[1].lv
**CURRENT:** A partir de lundi
**PROPOSED_FR:** À partir de lundi
**Problēma:** La préposition À doit porter un accent grave.
**LV etalons (konteksts):** no pirmdienas
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0411
**Card ID:** a1-ab
**Field:** study.examples[2].lv
**CURRENT:** À partir de 8
**PROPOSED_FR:** À partir de 8 h
**Problēma:** L'heure est incomplète en français sans indication temporelle.
**LV etalons (konteksts):** no plkst. 8
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0412
**Card ID:** a1-ab
**Field:** study.comparison[2].meaning
**CURRENT:** De l'intérieur
**PROPOSED_FR:** À partir de l'intérieur
**Problēma:** La formulation actuelle traduit plutôt aus; elle ne présente pas le point de départ de ab.
**LV etalons (konteksts):** ārā no iekšienes
**DE konteksts:** ab
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0413
**Card ID:** a1-aber
**Field:** study.comparison[0].meaning
**CURRENT:** Contraire • Objection • Cependant
**PROPOSED_FR:** Cependant
**Problēma:** Le champ learner-facing contient plusieurs équivalents séparés par des puces.
**LV etalons (konteksts):** pretstats • iebilde • tomēr
**DE konteksts:** aber
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0414
**Card ID:** a1-aber
**Field:** study.comparison[1].meaning
**CURRENT:** Non • Mais
**PROPOSED_FR:** Pas…, mais…
**Problēma:** La structure française est incomplète et plusieurs éléments sont séparés par une puce.
**LV etalons (konteksts):** nevis • bet gan
**DE konteksts:** aber
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0415
**Card ID:** a1-aber
**Field:** study.tip.text
**CURRENT:** Atceries : pretstats/iebilde → aber.
**PROPOSED_FR:** À retenir : opposition/objection → aber.
**Problēma:** Le texte du champ français est entièrement en letton.
**LV etalons (konteksts):** Atceries: pretstats/iebilde → aber.
**DE konteksts:** aber
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0416
**Card ID:** a1-also
**Field:** study.comparison[0].meaning
**CURRENT:** Alors • Donc
**PROPOSED_FR:** Donc
**Problēma:** Le champ learner-facing contient plusieurs traductions séparées par une puce.
**LV etalons (konteksts):** tātad • līdz ar to
**DE konteksts:** also
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0417
**Card ID:** a1-also
**Field:** study.comparison[1].meaning
**CURRENT:** Aussi
**PROPOSED_FR:** Également
**Problēma:** Aussi en français signifie généralement auch; ce sens ne correspond pas à also allemand.
**LV etalons (konteksts):** arī
**DE konteksts:** also
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0418
**Card ID:** a1-also
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : conclusion → aussi.
**PROPOSED_FR:** À retenir : conclusion → donc.
**Problēma:** Le mot français « aussi » correspond à auch, pas à also dans ce contexte.
**LV etalons (konteksts):** Atceries: secinājums → also.
**DE konteksts:** also
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0419
**Card ID:** a1-auch-study
**Field:** study.examples[1].lv
**CURRENT:** Je viens aussi
**PROPOSED_FR:** Elle travaille aussi ici.
**Problēma:** La traduction ne correspond ni au sujet ni au verbe de la source.
**LV etalons (konteksts):** Viņa arī strādā šeit.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0420
**Card ID:** a1-auch-study
**Field:** study.examples[2].lv
**CURRENT:** Elle travaille également ici.
**PROPOSED_FR:** Je vous souhaite aussi une bonne journée.
**Problēma:** La phrase française traduit l'exemple précédent, pas le souhait de bonne journée.
**LV etalons (konteksts):** Es arī novēlu jums jauku dienu.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0421
**Card ID:** a1-auf
**Field:** study.translation
**CURRENT:** À
**PROPOSED_FR:** Sur / à
**Problēma:** Auf exprime notamment sur et certains déplacements vers; « à » seul est trop limité.
**LV etalons (konteksts):** uz
**DE konteksts:** auf
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0422
**Card ID:** a1-auf
**Field:** study.comparison[0].meaning
**CURRENT:** Vers (surface ou vers le haut)
**PROPOSED_FR:** Sur / vers le haut
**Problēma:** La formulation mélange deux valeurs et ne rend pas clairement la valeur de surface.
**LV etalons (konteksts):** uz (virsmas vai augšup)
**DE konteksts:** auf
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0423
**Card ID:** a1-auf
**Field:** study.comparison[1].meaning
**CURRENT:** À (surface verticale)
**PROPOSED_FR:** Sur (surface verticale)
**Problēma:** Pour une surface, le français emploie sur, non à.
**LV etalons (konteksts):** pie (vertikālas virsmas)
**DE konteksts:** auf
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0424
**Card ID:** a1-auf
**Field:** study.comparison[2].meaning
**CURRENT:** À l'intérieur
**PROPOSED_FR:** Sur / à
**Problēma:** « À l'intérieur » correspond plutôt à in; auf exprime une surface ou une direction selon le contexte.
**LV etalons (konteksts):** iekšā
**DE konteksts:** auf
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0425
**Card ID:** a1-aus
**Field:** study.translation
**CURRENT:** De • Sortie
**PROPOSED_FR:** De / hors de
**Problēma:** Le champ contient plusieurs traductions séparées par une puce; « sortie » est en outre un nom.
**LV etalons (konteksts):** no
**DE konteksts:** aus
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0426
**Card ID:** a1-aus
**Field:** study.comparison[2].meaning
**CURRENT:** À partir d'un point ou d'une heure
**PROPOSED_FR:** À partir d'un point ou d'un moment
**Problēma:** Cette définition correspond à ab, non à aus.
**LV etalons (konteksts):** sākot no punkta vai laika
**DE konteksts:** aus
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0427
**Card ID:** a1-aufs
**Field:** study.translation
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_FR:** Sur / vers
**Problēma:** Le champ contient plusieurs traductions et « où ? » est une question, pas un sens de aufs.
**LV etalons (konteksts):** uz
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0428
**Card ID:** a1-aufs
**Field:** study.examples[6].lv
**CURRENT:** Venez vite au bateau !
**PROPOSED_FR:** Montez vite sur le bateau !
**Problēma:** Aufs Boot indique le mouvement vers le bateau ou à bord, pas simplement « au bateau ».
**LV etalons (konteksts):** Kāp ātri laivā!
**DE konteksts:** aufs
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0429
**Card ID:** a1-aufs
**Field:** study.comparison[0].meaning
**CURRENT:** À un cas précis (Akk.)
**PROPOSED_FR:** Vers une chose précise (accusatif)
**Problēma:** Un cas grammatical n'est pas une chose; la définition doit expliquer la destination.
**LV etalons (konteksts):** uz konkrētu lietu (Akk.)
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0430
**Card ID:** a1-aufs
**Field:** study.comparison[2].meaning
**CURRENT:** Sur une surface verticale
**PROPOSED_FR:** Près d'une surface verticale
**Problēma:** Une surface verticale relève plutôt de an; aufs exprime une destination sur une surface.
**LV etalons (konteksts):** pie vertikālas virsmas
**DE konteksts:** aufs
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0431
**Card ID:** a1-aufs
**Field:** study.comparison[4].meaning
**CURRENT:** À/chez (qui ?)
**PROPOSED_FR:** Vers / chez quelqu'un
**Problēma:** Le champ contient plusieurs équivalents séparés par une barre.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0432
**Card ID:** a1-baden
**Field:** study.translation
**CURRENT:** Nager
**PROPOSED_FR:** Se baigner
**Problēma:** Baden signifie se baigner; nager correspond principalement à schwimmen.
**LV etalons (konteksts):** peldēties
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0433
**Card ID:** a1-baden
**Field:** study.examples[0].lv
**CURRENT:** Je vais nager
**PROPOSED_FR:** Je vais me baigner.
**Problēma:** La traduction française emploie nager au lieu de se baigner.
**LV etalons (konteksts):** es eju peldēties.
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0434
**Card ID:** a1-baden
**Field:** study.examples[1].lv
**CURRENT:** Nous allons nager dans le lac.
**PROPOSED_FR:** Nous allons nous baigner dans le lac.
**Problēma:** Le sens de baden est se baigner, non pratiquer la nage.
**LV etalons (konteksts):** mēs ejam peldēties ezerā.
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0435
**Card ID:** a1-baden
**Field:** study.examples[3].lv
**CURRENT:** Je vais nager tous les lundis.
**PROPOSED_FR:** Je me baigne tous les lundis.
**Problēma:** Le champ est rattaché à baden; la traduction doit employer se baigner.
**LV etalons (konteksts):** Es peldu katru pirmdienu.
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0436
**Card ID:** a1-baden
**Field:** study.comparison[0].meaning
**CURRENT:** Nager / être dans l'eau / se laver
**PROPOSED_FR:** Se baigner / être dans l'eau / se laver
**Problēma:** Le premier équivalent français traduit schwimmen, pas baden.
**LV etalons (konteksts):** peldēties / atrasties ūdenī / mazgāties
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0437
**Card ID:** a1-baden
**Field:** study.tip.text
**CURRENT:** N'oubliez pas : reposez-vous dans l'eau → baden • Mouvement de nage → schwimmen.
**PROPOSED_FR:** À retenir : se baigner dans l'eau → baden • Mouvement de nage → nager.
**Problēma:** Le mot allemand schwimmen reste dans le texte français et « reposez-vous » ne signifie pas se baigner.
**LV etalons (konteksts):** Atceries: atpūta ūdenī → baden; peldēšanas kustība → schwimmen.
**DE konteksts:** baden
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0438
**Card ID:** a1-bei
**Field:** study.translation
**CURRENT:** À
**PROPOSED_FR:** Chez / auprès de
**Problēma:** Bei se traduit selon le contexte par chez ou auprès de; « à » seul est trop vague.
**LV etalons (konteksts):** pie
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0439
**Card ID:** a1-bei
**Field:** study.comparison[1].meaning
**CURRENT:** Au mur, au bord, au rivage, au bord de la surface
**PROPOSED_FR:** Près du mur, au bord, près du rivage, au bord de la surface
**Problēma:** Au mur signifie généralement sur le mur; bei exprime ici la proximité.
**LV etalons (konteksts):** pie sienas, malas, krasta, virsmas malas
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0440
**Card ID:** a1-bei
**Field:** study.comparison[2].meaning
**CURRENT:** Qui va (direction)
**PROPOSED_FR:** Aller chez quelqu'un (direction)
**Problēma:** La formulation actuelle est agrammaticale et ne rend pas le sens directionnel.
**LV etalons (konteksts):** pie kāda dodas (virziens)
**DE konteksts:** bei
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0441
**Card ID:** a1-bei
**Field:** study.tip.text
**CURRENT:** N'oubliez pas : à personne/lieu/entreprise → bei.
**PROPOSED_FR:** À retenir : chez une personne, dans un lieu ou auprès d'une entreprise → bei.
**Problēma:** La suite « à personne/lieu/entreprise » est agrammaticale et trop elliptique.
**LV etalons (konteksts):** Atceries: pie cilvēka/vietas/uzņēmuma → bei.
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0442
**Card ID:** a1-bis
**Field:** study.examples[0].lv
**CURRENT:** J'attends votre arrivée.
**PROPOSED_FR:** J'attends ton arrivée.
**Problēma:** Le letton emploie le possessif informel « ta », mais le français utilise le vouvoiement.
**LV etalons (konteksts):** Es gaidu tavu ierašanos.
**DE konteksts:** bis
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0443
**Card ID:** a1-bis
**Field:** study.examples[3].lv
**CURRENT:** Pour l'instant je n'ai rien compris.
**PROPOSED_FR:** Jusqu'à présent, je n'ai rien compris.
**Problēma:** « Līdz šim » signifie « jusqu'à présent », et non « pour l'instant ».
**LV etalons (konteksts):** līdz šim es neko neesmu sapratis.
**DE konteksts:** bis
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0444
**Card ID:** a1-bitte
**Field:** study.examples[0].lv
**CURRENT:** S'il te plaît!
**PROPOSED_FR:** Une tasse de café, s'il vous plaît.
**Problēma:** La phrase française omet la demande de café présente dans la source.
**LV etalons (konteksts):** Vienu tasi kafijas, lūdzu.
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0445
**Card ID:** a1-bitte
**Field:** study.examples[1].lv
**CURRENT:** S'il te plaît!
**PROPOSED_FR:** Entrez, s'il vous plaît.
**Problēma:** La traduction omet l'instruction « entrez » présente dans la source.
**LV etalons (konteksts):** Lūdzu, nāc iekšā.
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0446
**Card ID:** a1-bitte
**Field:** study.comparison[0].meaning
**CURRENT:** lūdzu
**PROPOSED_FR:** S'il vous plaît
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0447
**Card ID:** a1-bitte
**Field:** study.comparison[1].meaning
**CURRENT:** lūgums
**PROPOSED_FR:** Demande
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**LV etalons (konteksts):** lūgums
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0448
**Card ID:** a1-bitte-study
**Field:** study.examples[1].lv
**CURRENT:** S'il te plaît!
**PROPOSED_FR:** Il exécute ma demande.
**Problēma:** La phrase française est une formule de politesse et ne traduit pas « il exécute ma demande ».
**LV etalons (konteksts):** Viņš izpilda manu lūgumu.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0449
**Card ID:** a1-bitte-study
**Field:** study.examples[2].lv
**CURRENT:** Une tasse de café, s'il vous plaît.
**PROPOSED_FR:** Elle a deux demandes.
**Problēma:** La traduction française ne correspond pas au sujet ni au nombre de demandes de la source.
**LV etalons (konteksts):** Viņai ir divi lūgumi.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0450
**Card ID:** a1-bitte-study
**Field:** study.comparison[0].meaning
**CURRENT:** lūgums
**PROPOSED_FR:** Demande
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**LV etalons (konteksts):** lūgums
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0451
**Card ID:** a1-bitte-study
**Field:** study.comparison[1].meaning
**CURRENT:** lūdzu
**PROPOSED_FR:** S'il vous plaît
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0452
**Card ID:** a1-bringen
**Field:** study.translation
**CURRENT:** À emporter • À emporter
**PROPOSED_FR:** Apporter
**Problēma:** Deux traductions identiques sont affichées ; une seule entrée française est nécessaire.
**LV etalons (konteksts):** atnest
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0453
**Card ID:** a1-bringen
**Field:** study.examples[0].lv
**CURRENT:** Apportez-moi de l'eau s'il vous plaît
**PROPOSED_FR:** Je t'apporte un livre.
**Problēma:** La phrase française demande de l'eau, tandis que la source dit « je t'apporte un livre ».
**LV etalons (konteksts):** Es tev atnesu grāmatu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0454
**Card ID:** a1-bringen
**Field:** study.examples[1].lv
**CURRENT:** Je te ramènerai à la maison
**PROPOSED_FR:** J'apporte le colis à la poste.
**Problēma:** La traduction française parle de ramener quelqu'un chez lui, pas d'apporter un colis à la poste.
**LV etalons (konteksts):** Es aiznesu paku uz pastu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0455
**Card ID:** a1-bringen
**Field:** study.examples[2].lv
**CURRENT:** Il emmène le livre à l'école.
**PROPOSED_FR:** J'emmène les enfants à l'école.
**Problēma:** Le sujet, l'objet et le nombre ne correspondent pas à la source.
**LV etalons (konteksts):** Es aizvedu bērnus uz skolu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0456
**Card ID:** a1-bringen
**Field:** study.comparison[0].meaning
**CURRENT:** Apporter/prendre/livrer
**PROPOSED_FR:** Apporter
**Problēma:** Le champ juxtapose plusieurs traductions et inclut des sens qui ne sont pas équivalents.
**LV etalons (konteksts):** atnest
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0457
**Card ID:** a1-bringen
**Field:** study.comparison[1].meaning
**CURRENT:** Prendre / prendre
**PROPOSED_FR:** Emporter
**Problēma:** La traduction est dupliquée et « prendre » ne rend pas précisément le sens de la source.
**LV etalons (konteksts):** aiznest
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0458
**Card ID:** a1-bringen
**Field:** study.comparison[2].meaning
**CURRENT:** Poursuivre/aller chercher
**PROPOSED_FR:** Emmener
**Problēma:** Les deux propositions ne correspondent pas au sens de transporter quelqu'un vers un lieu.
**LV etalons (konteksts):** aizvest
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0459
**Card ID:** a1-bringen
**Field:** study.comparison[3].meaning
**CURRENT:** A emporter et à apporter
**PROPOSED_FR:** Transporter
**Problēma:** La formulation est maladroite et ne traduit pas naturellement l'idée d'acheminer.
**LV etalons (konteksts):** nogādāt
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0460
**Card ID:** a1-bringen
**Field:** study.comparison[4].meaning
**CURRENT:** paņemt
**PROPOSED_FR:** Prendre
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**LV etalons (konteksts):** paņemt
**DE konteksts:** bringen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0461
**Card ID:** a1-bringen
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : passer à quelqu'un → bringen • Prends pour toi → nehmen.
**PROPOSED_FR:** Rappel : apporter à quelqu'un → bringen • prendre pour soi → nehmen.
**Problēma:** « Passer à quelqu'un » ne traduit pas clairement bringen dans ce contexte.
**LV etalons (konteksts):** Ja priekšmets nonāk pie citas personas vai citā vietā, vācu valodā ļoti bieži lieto bringen.
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0462
**Card ID:** a1-da
**Field:** study.examples[3].lv
**CURRENT:** Venez ici!
**PROPOSED_FR:** Viens ici !
**Problēma:** La source emploie l'impératif singulier informel ; « venez » est formel ou pluriel.
**LV etalons (konteksts):** nāc šeit!
**DE konteksts:** da
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0463
**Card ID:** a1-da
**Field:** study.comparison[0].meaning
**CURRENT:** Là • Ici • Ici (général)
**PROPOSED_FR:** Là
**Problēma:** Le champ contient plusieurs traductions distinctes ; le choix de la forme principale doit être validé.
**LV etalons (konteksts):** tur • te • šeit (vispārīgi)
**DE konteksts:** da
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0464
**Card ID:** a1-da
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : général là/te → da.
**PROPOSED_FR:** Rappel : en général, là → da.
**Problēma:** La barre oblique juxtapose plusieurs équivalents dans un champ learner-facing.
**LV etalons (konteksts):** Atceries: vispārīgs tur/te → da.
**DE konteksts:** da
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0465
**Card ID:** a1-das
**Field:** study.comparison[0].meaning
**CURRENT:** Il (article / pronom)
**PROPOSED_FR:** Le (article) / cela (pronom)
**Problēma:** « Das » ne se traduit pas par « il » ; il correspond à l'article neutre ou au pronom « cela » selon le contexte.
**LV etalons (konteksts):** tas (artikuls / vietniekvārds)
**DE konteksts:** das
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0466
**Card ID:** a1-das
**Field:** study.comparison[2].meaning
**CURRENT:** Qui • Lequel • Qui
**PROPOSED_FR:** Lequel • laquelle • que
**Problēma:** Les équivalents français sont incorrects ou répétés et plusieurs formes sont juxtaposées.
**LV etalons (konteksts):** kurš • kura • kuru
**DE konteksts:** das
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0467
**Card ID:** a1-das
**Field:** study.tip.text
**CURRENT:** Atceries : vidus dzimte → das • Ka → dass.
**PROPOSED_FR:** Rappel : neutre → das • que → dass.
**Problēma:** Le texte contient plusieurs mots lettons dans le champ français.
**LV etalons (konteksts):** Atceries: vidus dzimte → das; ka → dass.
**DE konteksts:** das
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0468
**Card ID:** a1-dass
**Field:** study.comparison[2].meaning
**CURRENT:** À
**PROPOSED_FR:** Pour que
**Problēma:** « Lai » exprime généralement le but, traduit ici par « pour que », et non par « à ».
**LV etalons (konteksts):** lai
**DE konteksts:** dass
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0469
**Card ID:** a1-dass
**Field:** study.comparison[3].meaning
**CURRENT:** Ou
**PROPOSED_FR:** Si
**Problēma:** Dans une proposition indirecte, « vai » correspond à « si », pas à la conjonction « ou ».
**LV etalons (konteksts):** vai
**DE konteksts:** dass
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0470
**Card ID:** a1-dass
**Field:** study.tip.text
**CURRENT:** Atceries : ka → dass.
**PROPOSED_FR:** Rappel : que → dass.
**Problēma:** Le champ français contient le mot letton « Atceries » et « ka ».
**LV etalons (konteksts):** Atceries: ka → dass.
**DE konteksts:** dass
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0471
**Card ID:** a1-der
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : masculin → convient.
**PROPOSED_FR:** Rappel : masculin → der.
**Problēma:** « Convient » ne traduit pas le lien grammatical entre masculin et der.
**LV etalons (konteksts):** Atceries: vīriešu dzimte → der.
**DE konteksts:** der
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0472
**Card ID:** a1-die
**Field:** study.examples[1].lv
**CURRENT:** Le chaton dort.
**PROPOSED_FR:** La chatte dort.
**Problēma:** « Kaķene » désigne une chatte ; « chaton » change l'âge et ne précise pas le sexe.
**LV etalons (konteksts):** kaķene guļ.
**DE konteksts:** die
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0473
**Card ID:** a1-die
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : féminin → mourir.
**PROPOSED_FR:** Rappel : féminin → die.
**Problēma:** « Mourir » est une traduction erronée de die dans ce contexte grammatical.
**LV etalons (konteksts):** Atceries: sieviešu dzimte → die.
**DE konteksts:** die
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0474
**Card ID:** a1-dieser
**Field:** study.examples[1].lv
**CURRENT:** J'aime ce chien
**PROPOSED_FR:** Je vois ce chien.
**Problēma:** Le verbe français « aimer » ne traduit pas le verbe source « voir ».
**LV etalons (konteksts):** Es redzu šo suni.
**DE konteksts:** dieser
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0475
**Card ID:** a1-dieser
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : this + masculin → dieser.
**PROPOSED_FR:** Rappel : ce + masculin → dieser.
**Problēma:** Le mot anglais « this » apparaît dans le champ français.
**LV etalons (konteksts):** Atceries: šis + vīriešu dzimte → dieser.
**DE konteksts:** dieser
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0476
**Card ID:** a1-ein
**Field:** study.translation
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_FR:** Article indéfini
**Problēma:** Le champ learner-facing juxtapose plusieurs sens distincts ; un choix principal est requis.
**LV etalons (konteksts):** nenoteiktais artikuls
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0477
**Card ID:** a1-ein
**Field:** study.examples[3].lv
**CURRENT:** Bērns spēlējas.
**PROPOSED_FR:** L'enfant joue.
**Problēma:** Le champ français reprend directement le texte letton.
**LV etalons (konteksts):** Bērns spēlējas.
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0478
**Card ID:** a1-ein
**Field:** study.comparison[0].meaning
**CURRENT:** vīriešu dzimte
**PROPOSED_FR:** masculin
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**LV etalons (konteksts):** vīriešu dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0479
**Card ID:** a1-ein
**Field:** study.comparison[1].meaning
**CURRENT:** sieviešu dzimte
**PROPOSED_FR:** féminin
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**LV etalons (konteksts):** sieviešu dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0480
**Card ID:** a1-ein
**Field:** study.comparison[2].meaning
**CURRENT:** vidus dzimte
**PROPOSED_FR:** neutre
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**LV etalons (konteksts):** vidus dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0481
**Card ID:** a1-ein
**Field:** study.comparison[3].meaning
**CURRENT:** akuzatīvs
**PROPOSED_FR:** accusatif
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**LV etalons (konteksts):** akuzatīvs
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0482
**Card ID:** a1-ein
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : quelqu'un/quelqu'un non spécifique → ein.
**PROPOSED_FR:** Rappel : ein n'est pas seulement « un » ; c'est souvent l'article indéfini.
**Problēma:** La formulation répète « quelqu'un » et ne décrit pas correctement l'emploi de ein.
**LV etalons (konteksts):** Atceries: ein nav tikai "viens". Bieži tas ir tikai nenoteiktais artikuls.
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0483
**Card ID:** a1-eis
**Field:** frMain
**CURRENT:** Glace • Glace
**PROPOSED_FR:** Glace • Glace
**Problēma:** Deux sens distincts sont séparés par « • » mais rendus par le même mot français; décision de présentation requise.
**LV etalons (konteksts):** ledus • saldējums
**DE konteksts:** Eis
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0484
**Card ID:** a1-eis
**Field:** study.translation
**CURRENT:** Glace • Glace
**PROPOSED_FR:** Glace • Glace
**Problēma:** Deux sens distincts sont séparés par « • » mais rendus par le même mot français; décision de présentation requise.
**LV etalons (konteksts):** ledus • saldējums
**DE konteksts:** Eis
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0485
**Card ID:** a1-erst
**Field:** frMain
**CURRENT:** Premier • Seulement
**PROPOSED_FR:** D'abord • Seulement
**Problēma:** Le premier sens adverbial de « erst » se traduit plus naturellement par « d'abord », et plusieurs traductions sont affichées.
**LV etalons (konteksts):** tikai
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0486
**Card ID:** a1-erst
**Field:** study.translation
**CURRENT:** Premier • Seulement
**PROPOSED_FR:** D'abord • Seulement
**Problēma:** « Premier » est adjectival; pour le sens temporel de « erst », « d'abord » convient mieux. Décision sur les sens multiples requise.
**LV etalons (konteksts):** tikai
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0487
**Card ID:** a1-erst
**Field:** study.examples[0].lv
**CURRENT:** Boire d’abord, puis conduire.
**PROPOSED_FR:** Étudie d’abord, puis joue.
**Problēma:** La phrase française ne correspond pas à la source: elle parle de boire et de conduire au lieu d'étudier et jouer.
**LV etalons (konteksts):** Vispirms mācies, pēc tam spēlējies.
**DE konteksts:** erst
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0488
**Card ID:** a1-erst
**Field:** study.tip.text
**CURRENT:** Atceries : laiks/skaits → erst • Daudzums → nur.
**PROPOSED_FR:** Rappelez-vous : le temps ou le nombre → erst • la quantité → nur.
**Problēma:** Le texte destiné à l'apprenant est en letton, avec des mots allemands non traduits dans l'explication française.
**LV etalons (konteksts):** Atceries: laiks/skaits → erst; daudzums → nur.
**DE konteksts:** erst
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0489
**Card ID:** a1-es
**Field:** study.translation
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_FR:** Il • Il • Forme impersonnelle
**Problēma:** Plusieurs traductions sont séparées par « • »; une décision de présentation est requise.
**LV etalons (konteksts):** tas
**DE konteksts:** es
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0490
**Card ID:** a1-es
**Field:** study.examples[0].lv
**CURRENT:** J'apprends l'allemand.
**PROPOSED_FR:** Il pleut.
**Problēma:** La traduction française ne correspond pas à « Il pleut » et introduit une action sans rapport.
**LV etalons (konteksts):** Līst.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0491
**Card ID:** a1-es
**Field:** study.examples[1].lv
**CURRENT:** Il est fatigué.
**PROPOSED_FR:** Il fait froid.
**Problēma:** « Il est fatigué » ne traduit pas la phrase source « Il fait froid ».
**LV etalons (konteksts):** Ir auksts.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0492
**Card ID:** a1-es
**Field:** study.examples[2].lv
**CURRENT:** Elle travaille ici.
**PROPOSED_FR:** L'enfant dort.
**Problēma:** La phrase française ne correspond ni au sujet ni à l'action de la source.
**LV etalons (konteksts):** Bērns guļ.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0493
**Card ID:** a1-es
**Field:** study.examples[3].lv
**CURRENT:** C'est mon livre.
**PROPOSED_FR:** Il est fatigué.
**Problēma:** « C'est mon livre » ne traduit pas « Il est fatigué ».
**LV etalons (konteksts):** Tas ir noguris.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0494
**Card ID:** a1-es
**Field:** study.comparison[0].meaning
**CURRENT:** tas • bezpersoniska forma
**PROPOSED_FR:** Il • forme impersonnelle
**Problēma:** Le champ français contient deux segments lettons non traduits.
**LV etalons (konteksts):** tas • bezpersoniska forma
**DE konteksts:** es
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0495
**Card ID:** a1-es
**Field:** study.comparison[1].meaning
**CURRENT:** es (persona)
**PROPOSED_FR:** es (personne)
**Problēma:** Le contenu français conserve « persona » en letton et le mot allemand sans explication française.
**LV etalons (konteksts):** es (persona)
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0496
**Card ID:** a1-etwas
**Field:** frMain
**CURRENT:** Quelque chose • Un peu
**PROPOSED_FR:** Quelque chose • Un peu
**Problēma:** Deux sens distincts sont présentés avec « • »; décision de présentation requise.
**LV etalons (konteksts):** kaut kas
**DE konteksts:** etwas
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0497
**Card ID:** a1-etwas
**Field:** study.translation
**CURRENT:** Quelque chose • Un peu
**PROPOSED_FR:** Quelque chose • Un peu
**Problēma:** Deux sens distincts sont présentés avec « • »; décision de présentation requise.
**LV etalons (konteksts):** kaut kas
**DE konteksts:** etwas
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0498
**Card ID:** a1-euch
**Field:** frMain
**CURRENT:** Vous • Vous
**PROPOSED_FR:** Vous • Vous
**Problēma:** Deux fonctions sont séparées par « • » mais ont la même forme française; décision de présentation requise.
**LV etalons (konteksts):** jūs • jums
**DE konteksts:** euch
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0499
**Card ID:** a1-euch
**Field:** study.translation
**CURRENT:** Vous • Vous
**PROPOSED_FR:** Vous • Vous
**Problēma:** Deux fonctions sont séparées par « • » mais ont la même forme française; décision de présentation requise.
**LV etalons (konteksts):** jūs • jums
**DE konteksts:** euch
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0500
**Card ID:** a1-euch
**Field:** study.examples[0].lv
**CURRENT:** Je te vois
**PROPOSED_FR:** Je vous vois
**Problēma:** « euch » est le pronom de deuxième personne du pluriel; « te » est singulier et informel.
**LV etalons (konteksts):** es redzu jūs.
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0501
**Card ID:** a1-euch
**Field:** study.examples[1].lv
**CURRENT:** Je t'aide
**PROPOSED_FR:** Je vous aide
**Problēma:** Le pronom français doit être « vous », correspondant au pluriel de « euch ».
**LV etalons (konteksts):** es jums palīdzu.
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0502
**Card ID:** a1-euch
**Field:** study.examples[2].lv
**CURRENT:** Je te donne un livre
**PROPOSED_FR:** Je vous donne un livre
**Problēma:** « te » est singulier; la source et « euch » exigent « vous ».
**LV etalons (konteksts):** es jums dodu grāmatu.
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0503
**Card ID:** a1-euch
**Field:** study.examples[3].lv
**CURRENT:** Je te remercie
**PROPOSED_FR:** Je vous remercie
**Problēma:** Le complément doit être le pluriel « vous », pas le singulier « te ».
**LV etalons (konteksts):** es jums pateicos.
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0504
**Card ID:** a1-euch
**Field:** study.examples[4].lv
**CURRENT:** Tu te souviens
**PROPOSED_FR:** Vous vous souvenez
**Problēma:** La traduction utilise « tu » alors que la source et le mot allemand indiquent le pluriel « vous ».
**LV etalons (konteksts):** jūs atceraties.
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0505
**Card ID:** a1-euch
**Field:** study.comparison[0].meaning
**CURRENT:** Toi
**PROPOSED_FR:** Vous
**Problēma:** « Toi » est singulier; « jūs » et « euch » correspondent ici à « vous ».
**LV etalons (konteksts):** jūs
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0506
**Card ID:** a1-euch
**Field:** study.comparison[1].meaning
**CURRENT:** Toi / à toi
**PROPOSED_FR:** Vous / à vous
**Problēma:** Les deux formes françaises sont au singulier, contrairement à la source plurielle.
**LV etalons (konteksts):** jūs / jums
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0507
**Card ID:** a1-euch
**Field:** study.comparison[2].meaning
**CURRENT:** Le vôtre
**PROPOSED_FR:** Le vôtre
**Problēma:** « Le vôtre » traduit un possessif, pas le pronom personnel « euch »; le sens de comparaison est incorrect.
**LV etalons (konteksts):** jūsu
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0508
**Card ID:** a1-fahren
**Field:** study.translation
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_FR:** Conduire • Aller en véhicule
**Problēma:** « Diriger » et « emporter » ne correspondent pas aux sens A1 de « fahren »; « aller en véhicule » est pertinent.
**LV etalons (konteksts):** braukt
**DE konteksts:** fahren
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0509
**Card ID:** a1-fahren
**Field:** study.examples[3].lv
**CURRENT:** Je te ramènerai à la maison
**PROPOSED_FR:** Je te ramène à la maison
**Problēma:** La source est au présent; le futur français « ramènerai » change le temps verbal.
**LV etalons (konteksts):** es tevi aizvedu mājās.
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0510
**Card ID:** a1-fahren
**Field:** study.important.text
**CURRENT:** Fahren ≠ tikai « braukt »
**PROPOSED_FR:** Fahren ≠ seulement « conduire »
**Problēma:** Le texte français contient les mots lettons « tikai » et « braukt ».
**LV etalons (konteksts):** fahren ≠ tikai “braukt”
**DE konteksts:** fahren
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0511
**Card ID:** a1-finden
**Field:** study.translation
**CURRENT:** Trouver • Considérer
**PROPOSED_FR:** Trouver • Trouver que
**Problēma:** Plusieurs traductions sont affichées; « considérer » n'est pas le rendu A1 naturel du sens d'opinion.
**LV etalons (konteksts):** atrast
**DE konteksts:** finden
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0512
**Card ID:** a1-finden
**Field:** study.examples[0].lv
**CURRENT:** Je ne trouve pas ma clé
**PROPOSED_FR:** Je trouve ma clé
**Problēma:** La négation française contredit la source, qui signifie « Je trouve ma clé ».
**LV etalons (konteksts):** Es atrodu savu atslēgu.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0513
**Card ID:** a1-finden
**Field:** study.examples[1].lv
**CURRENT:** Avez-vous trouvé votre téléphone
**PROPOSED_FR:** Je trouve cela bien
**Problēma:** La phrase française parle d'un téléphone et d'une question, sans rapport avec l'opinion de la source.
**LV etalons (konteksts):** Man tas šķiet labi.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0514
**Card ID:** a1-finden
**Field:** study.examples[2].lv
**CURRENT:** Cela me semble bon.
**PROPOSED_FR:** Que penses-tu du film ?
**Problēma:** La traduction française ne correspond pas à la question sur le film.
**LV etalons (konteksts):** ko tu domā par filmu?
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0515
**Card ID:** a1-finden
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : chose perdue → trouvée • Opinion → je trouve...
**PROPOSED_FR:** Rappelez-vous : objet perdu → trouver ; opinion → je trouve…
**Problēma:** « trouvée » est un participe passé alors que le conseil porte sur l'infinitif « finden »; la formulation est peu naturelle.
**LV etalons (konteksts):** Atceries: pazaudēta lieta → finden; viedoklis → ich finde...
**DE konteksts:** finden
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0516
**Card ID:** a1-frau
**Field:** frMain
**CURRENT:** Femme • Épouse
**PROPOSED_FR:** Femme • Épouse
**Problēma:** Deux sens distincts sont séparés par « • »; décision de présentation requise.
**LV etalons (konteksts):** sieviete
**DE konteksts:** Frau
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0517
**Card ID:** a1-frau
**Field:** study.translation
**CURRENT:** Femme • Épouse
**PROPOSED_FR:** Femme • Épouse
**Problēma:** Deux sens distincts sont séparés par « • »; décision de présentation requise.
**LV etalons (konteksts):** sieviete
**DE konteksts:** Frau
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0518
**Card ID:** a1-fuer
**Field:** frMain
**CURRENT:** Pour • Pour
**PROPOSED_FR:** Pour • Pour
**Problēma:** Deux fonctions sont séparées par « • » mais rendues par la même forme française; décision requise.
**LV etalons (konteksts):** priekš
**DE konteksts:** für
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0519
**Card ID:** a1-fuer
**Field:** study.translation
**CURRENT:** Pour • Pour
**PROPOSED_FR:** Pour • Pour
**Problēma:** Deux fonctions sont séparées par « • » mais rendues par la même forme française; décision requise.
**LV etalons (konteksts):** priekš
**DE konteksts:** für
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0520
**Card ID:** a1-gleich
**Field:** frMain
**CURRENT:** Immédiatement • Égal
**PROPOSED_FR:** Tout de suite • Égal
**Problēma:** Deux sens distincts sont séparés par « • »; décision de présentation requise.
**LV etalons (konteksts):** tūlīt
**DE konteksts:** gleich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0521
**Card ID:** a1-gleich
**Field:** study.translation
**CURRENT:** Immédiatement • Égal
**PROPOSED_FR:** Tout de suite • Égal
**Problēma:** Deux sens distincts sont séparés par « • »; décision de présentation requise.
**LV etalons (konteksts):** tūlīt
**DE konteksts:** gleich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0522
**Card ID:** a1-gross-study
**Field:** study.examples[1].lv
**CURRENT:** La maison est grande.
**PROPOSED_FR:** Berlin est une grande ville.
**Problēma:** La traduction française remplace Berlin et la ville par une maison.
**LV etalons (konteksts):** Berlīne ir liela pilsēta.
**DE konteksts:** groß
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0523
**Card ID:** a1-gut-study
**Field:** study.examples[1].lv
**CURRENT:** Comment vas-tu - ok, merci !
**PROPOSED_FR:** Comment vas-tu ? — Ça va bien, merci !
**Problēma:** La formulation française est peu naturelle et la ponctuation de la question est incorrecte.
**LV etalons (konteksts):** kā tev iet? – labi, paldies!
**DE konteksts:** gut
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0524
**Card ID:** a1-haben
**Field:** study.examples[0].lv
**CURRENT:** J'ai une voiture
**PROPOSED_FR:** J'ai une voiture.
**Problēma:** Il manque le point final dans la phrase d'exemple.
**LV etalons (konteksts):** man ir automašīna.
**DE konteksts:** haben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0525
**Card ID:** a1-haben
**Field:** study.examples[1].lv
**CURRENT:** As-tu le temps
**PROPOSED_FR:** As-tu le temps ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** vai tev ir laiks?
**DE konteksts:** haben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0526
**Card ID:** a1-haben
**Field:** study.examples[3].lv
**CURRENT:** Je l'ai fait
**PROPOSED_FR:** Je l'ai fait.
**Problēma:** Il manque le point final dans la phrase d'exemple.
**LV etalons (konteksts):** es to izdarīju.
**DE konteksts:** haben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0527
**Card ID:** a1-haben
**Field:** study.comparison[2].meaning
**CURRENT:** Pour recevoir
**PROPOSED_FR:** Recevoir
**Problēma:** Le français doit donner l'infinitif correspondant, sans la préposition « pour ».
**LV etalons (konteksts):** saņemt
**DE konteksts:** haben
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0528
**Card ID:** a1-haben
**Field:** study.comparison[3].meaning
**CURRENT:** Faire/faire
**PROPOSED_FR:** Faire
**Problēma:** Le champ contient deux traductions séparées par une barre oblique et répète le même mot.
**LV etalons (konteksts):** darīt / taisīt
**DE konteksts:** haben
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0529
**Card ID:** a1-haben
**Field:** study.tip.text
**CURRENT:** Atceries : Ich habe → man ir.
**PROPOSED_FR:** Retiens : Ich habe → j'ai.
**Problēma:** Le texte contient des segments lettons dans un champ français.
**LV etalons (konteksts):** Atceries: Ich habe → man ir.
**DE konteksts:** haben
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0530
**Card ID:** a1-halten
**Field:** frMain
**CURRENT:** Maintenir • Arrêter
**PROPOSED_FR:** Maintenir
**Problēma:** Le champ principal contient plusieurs traductions distinctes et nécessite une décision éditoriale.
**LV etalons (konteksts):** turēt
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0531
**Card ID:** a1-halten
**Field:** study.translation
**CURRENT:** Maintenir • Arrêter
**PROPOSED_FR:** Maintenir
**Problēma:** Le champ contient plusieurs traductions distinctes et nécessite une décision éditoriale.
**LV etalons (konteksts):** turēt
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0532
**Card ID:** a1-halten
**Field:** study.examples[2].lv
**CURRENT:** S'il te plaît, arrête
**PROPOSED_FR:** S'il vous plaît, arrêtez.
**Problēma:** Le letton emploie une forme polie/plurielle, mais le français est au tutoiement singulier.
**LV etalons (konteksts):** lūdzu, apstājieties.
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0533
**Card ID:** a1-halten
**Field:** study.comparison[0].meaning
**CURRENT:** Maintenir / arrêter
**PROPOSED_FR:** Maintenir
**Problēma:** Le champ contient plusieurs traductions séparées par une barre oblique.
**LV etalons (konteksts):** turēt • transportam arī pieturēt
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0534
**Card ID:** a1-halten
**Field:** study.comparison[2].meaning
**CURRENT:** Pour arrêter
**PROPOSED_FR:** S'arrêter • Arrêter
**Problēma:** « Pour arrêter » ne traduit pas les deux emplois verbaux indiqués par la source.
**LV etalons (konteksts):** apstāties • apturēt
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0535
**Card ID:** a1-halten
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : en main → halten • Transport → halte/arrêts.
**PROPOSED_FR:** Retiens : tenir un objet → halten ; s'arrêter → anhalten ; les transports s'arrêtent → hält.
**Problēma:** Le texte français est tronqué et ne reprend pas correctement les informations de la source.
**LV etalons (konteksts):** Atceries: priekšmetu turēt → halten; apstāties → anhalten; transports pietur → hält.
**DE konteksts:** halten
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0536
**Card ID:** a1-heißen
**Field:** frMain
**CURRENT:** Être appelé • Moyen
**PROPOSED_FR:** S'appeler • Signifier
**Problēma:** « Moyen » est une traduction erronée de l'emploi « signifier » de heißen.
**LV etalons (konteksts):** saukties
**DE konteksts:** heißen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0537
**Card ID:** a1-heißen
**Field:** study.translation
**CURRENT:** Être appelé • Moyen
**PROPOSED_FR:** S'appeler • Signifier
**Problēma:** « Moyen » est une traduction erronée de l'emploi « signifier » de heißen.
**LV etalons (konteksts):** saukties
**DE konteksts:** heißen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0538
**Card ID:** a1-heißen
**Field:** study.comparison[0].meaning
**CURRENT:** Être appelé / méchant
**PROPOSED_FR:** S'appeler / signifier
**Problēma:** « méchant » ne correspond pas au sens verbal de nozīmēt, qui signifie « signifier ».
**LV etalons (konteksts):** saukties / nozīmēt
**DE konteksts:** heißen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0539
**Card ID:** a1-heißen
**Field:** study.comparison[3].meaning
**CURRENT:** Appeler / appeler
**PROPOSED_FR:** Appeler
**Problēma:** Le champ contient plusieurs traductions séparées par une barre oblique et répète le même mot.
**LV etalons (konteksts):** saukt • pasaukt
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0540
**Card ID:** a1-heißen
**Field:** study.comparison[4].meaning
**CURRENT:** zvanīt
**PROPOSED_FR:** Téléphoner
**Problēma:** Le champ français contient un mot letton non traduit.
**LV etalons (konteksts):** zvanīt
**DE konteksts:** heißen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0541
**Card ID:** a1-heißen
**Field:** study.tip.text
**CURRENT:** Atceries : Ich heiße... → mani sauc...
**PROPOSED_FR:** Retiens : Ich heiße... → je m'appelle...
**Problēma:** Le texte contient des segments lettons dans un champ français.
**LV etalons (konteksts):** Atceries: Ich heiße... → mani sauc...
**DE konteksts:** heißen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0542
**Card ID:** a1-hoch-study
**Field:** study.examples[1].lv
**CURRENT:** La montagne est haute.
**PROPOSED_FR:** L'étagère mesure deux mètres de haut.
**Problēma:** La phrase française parle d'une montagne au lieu d'une étagère de deux mètres.
**LV etalons (konteksts):** plaukts ir divus metrus augsts.
**DE konteksts:** hoch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0543
**Card ID:** a1-ihr
**Field:** study.translation
**CURRENT:** Vous • Elle
**PROPOSED_FR:** Vous • Lui
**Problēma:** Pour le datif « ihr », « elle » doit être remplacé par le pronom complément « lui ».
**LV etalons (konteksts):** jūs • viņai
**DE konteksts:** ihr
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0544
**Card ID:** a1-ihr
**Field:** study.examples[0].lv
**CURRENT:** Viens-tu ce soir
**PROPOSED_FR:** Venez-vous ce soir ?
**Problēma:** Le letton emploie le pluriel/politesse, mais le français est au singulier informel.
**LV etalons (konteksts):** vai jūs nākat šovakar?
**DE konteksts:** ihr
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0545
**Card ID:** a1-ihr
**Field:** study.examples[2].lv
**CURRENT:** Où habites-tu
**PROPOSED_FR:** Où habitez-vous ?
**Problēma:** Le sujet letton est pluriel ou de politesse ; le français doit employer vous.
**LV etalons (konteksts):** kur jūs dzīvojat?
**DE konteksts:** ihr
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0546
**Card ID:** a1-ihr
**Field:** study.examples[4].lv
**CURRENT:** As-tu le temps
**PROPOSED_FR:** Avez-vous le temps ?
**Problēma:** Le letton emploie le pluriel ou la politesse, contrairement au tutoiement français.
**LV etalons (konteksts):** vai jums ir laiks?
**DE konteksts:** ihr
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0547
**Card ID:** a1-im
**Field:** study.examples[5].lv
**CURRENT:** Je suis allé à Vienne en janvier.
**PROPOSED_FR:** Je vais à Vienne en janvier.
**Problēma:** Le français passe au passé alors que la source exprime une action au présent.
**LV etalons (konteksts):** janvārī es braucu uz Vīni.
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0548
**Card ID:** a1-im
**Field:** study.comparison[0].meaning
**CURRENT:** A l'intérieur où ? (à qui ?)
**PROPOSED_FR:** À l'intérieur, où ? (datif)
**Problēma:** Le datif allemand n'est pas le sens « à qui ? » dans cette explication grammaticale.
**LV etalons (konteksts):** iekšā, kur? (kam?)
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0549
**Card ID:** a1-in
**Field:** study.translation
**CURRENT:** Dans
**PROPOSED_FR:** Dans • À
**Problēma:** La traduction omet l'emploi directionnel de in, rendu ici par « à » selon le contexte.
**LV etalons (konteksts):** iekšā • uz
**DE konteksts:** in
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0550
**Card ID:** a1-in
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : dans/dans → dans.
**PROPOSED_FR:** Retiens : à l'intérieur / dans un lieu → in.
**Problēma:** La formulation actuelle répète « dans » et n'explique pas clairement le mot allemand.
**LV etalons (konteksts):** Atceries: iekšā/telpā → in.
**DE konteksts:** in
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0551
**Card ID:** a1-ins
**Field:** study.comparison[0].meaning
**CURRENT:** Vers l'intérieur, où ? (Acc.)
**PROPOSED_FR:** Vers l'intérieur, où ? (accusatif)
**Problēma:** L'abréviation grammaticale devrait être cohérente en français.
**LV etalons (konteksts):** uz iekšu, kurp? (Akk.)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0552
**Card ID:** a1-ins
**Field:** study.comparison[1].meaning
**CURRENT:** A l'intérieur où ? (à qui ?)
**PROPOSED_FR:** À l'intérieur, où ? (datif)
**Problēma:** Il manque l'accent grave et l'annotation « à qui ? » est une explication grammaticale incorrecte.
**LV etalons (konteksts):** iekšā, kur? (kam?)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0553
**Card ID:** a1-jung
**Field:** study.translation
**CURRENT:** Jeune (à propos des gens)
**PROPOSED_FR:** Jeune
**Problēma:** Le français restreint à tort jung aux personnes ; le mot s'emploie aussi pour les animaux et les choses.
**LV etalons (konteksts):** jauns (par cilvēkiem)
**DE konteksts:** jung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0554
**Card ID:** a1-jung
**Field:** study.examples[4].lv
**CURRENT:** C'est un nouveau couple.
**PROPOSED_FR:** C'est un jeune couple.
**Problēma:** Dans « junges Paar », jung signifie « jeune », et non « nouveau ».
**LV etalons (konteksts):** tas ir jauns pāris.
**DE konteksts:** jung
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0555
**Card ID:** a1-kein
**Field:** study.translation
**CURRENT:** Personne • Rien
**PROPOSED_FR:** Aucun • Pas de
**Problēma:** Kein signifie « aucun/pas de » ; « personne/rien » correspondent à d'autres pronoms allemands.
**LV etalons (konteksts):** neviens • nekāds
**DE konteksts:** kein
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0556
**Card ID:** a1-kennen-study
**Field:** study.translation
**CURRENT:** Savoir
**PROPOSED_FR:** Connaître
**Problēma:** « Kennen » signifie connaître, tandis que « savoir » correspond à « wissen ».
**LV etalons (konteksts):** pazīt
**DE konteksts:** kennen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0557
**Card ID:** a1-kennen-study
**Field:** study.examples[1].lv
**CURRENT:** Connaissez-vous cette femme
**PROPOSED_FR:** Connaissez-vous cette femme ?
**Problēma:** Il manque le point d’interrogation final.
**LV etalons (konteksts):** vai jūs pazīstat šo sievieti?
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0558
**Card ID:** a1-kennen-study
**Field:** study.examples[4].lv
**CURRENT:** Connaître la sagesse
**PROPOSED_FR:** Connaître ; savoir
**Problēma:** « La sagesse » ne traduit pas « wissen » dans cette opposition lexicale.
**LV etalons (konteksts):** pazīt; wissen
**DE konteksts:** kennen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0559
**Card ID:** a1-kennen-study
**Field:** study.comparison[1].meaning
**CURRENT:** Connaître (fait, information)
**PROPOSED_FR:** Savoir (un fait, une information)
**Problēma:** Pour les faits et informations, le verbe français est « savoir », pas « connaître ».
**LV etalons (konteksts):** zināt (faktu, informāciju)
**DE konteksts:** kennen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0560
**Card ID:** a1-wissen-study
**Field:** study.examples[2].lv
**CURRENT:** Je connais la réponse.
**PROPOSED_FR:** Je sais la réponse.
**Problēma:** « Wissen » se traduit ici par « savoir » : on sait une réponse.
**LV etalons (konteksts):** es zinu atbildi.
**DE konteksts:** wissen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0561
**Card ID:** a1-wissen-study
**Field:** study.comparison[0].meaning
**CURRENT:** Connaître (fait, information)
**PROPOSED_FR:** Savoir (un fait, une information)
**Problēma:** Cette ligne décrit « wissen », qui signifie « savoir ».
**LV etalons (konteksts):** zināt (faktu, informāciju)
**DE konteksts:** wissen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0562
**Card ID:** a1-wissen-study
**Field:** study.comparison[1].meaning
**CURRENT:** Connaître (personne, lieu, chose)
**PROPOSED_FR:** Connaître (une personne, un lieu, une chose)
**Problēma:** Le sens est correct, mais les articles rendent l’énumération française complète et naturelle.
**LV etalons (konteksts):** pazīt (cilvēku, vietu, lietu)
**DE konteksts:** wissen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0563
**Card ID:** a1-können
**Field:** study.translation
**CURRENT:** Être capable de • Savoir
**PROPOSED_FR:** Être capable de • Savoir
**Problēma:** Deux traductions distinctes sont séparées par « • » ; validation éditoriale requise pour ce format.
**LV etalons (konteksts):** varēt • prast
**DE konteksts:** können
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0564
**Card ID:** a1-können
**Field:** study.comparison[2].meaning
**CURRENT:** Besoin / être oui-
**PROPOSED_FR:** Devoir
**Problēma:** « Besoin / être oui- » est incompréhensible et ne traduit pas le verbe modal correspondant.
**LV etalons (konteksts):** vajadzēt / būt jā-
**DE konteksts:** können
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0565
**Card ID:** a1-kosten
**Field:** study.translation
**CURRENT:** Payer
**PROPOSED_FR:** Coûter
**Problēma:** « Kosten » signifie coûter ; « payer » correspond à « bezahlen ».
**LV etalons (konteksts):** maksāt
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0566
**Card ID:** a1-kosten
**Field:** study.comparison[0].meaning
**CURRENT:** Payer (prix) • Combien
**PROPOSED_FR:** Coûter (un prix) • Combien ça coûte
**Problēma:** La traduction principale est erronée et deux sens sont séparés par « • » ; décision éditoriale requise.
**LV etalons (konteksts):** maksāt (cenu) • cik maksā
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0567
**Card ID:** a1-kosten
**Field:** study.comparison[1].meaning
**CURRENT:** Payer • Payer (argent)
**PROPOSED_FR:** Coûter • Payer (de l’argent)
**Problēma:** Deux traductions distinctes sont séparées par « • » et le contraste coûter/payer est absent.
**LV etalons (konteksts):** maksāt • samaksāt (naudu)
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0568
**Card ID:** a1-kosten
**Field:** study.comparison[2].meaning
**CURRENT:** Payer • Payer
**PROPOSED_FR:** Coûter • Payer
**Problēma:** Deux sens distincts sont séparés par « • », mais les deux entrées françaises sont identiques.
**LV etalons (konteksts):** maksāt • samaksāt
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0569
**Card ID:** a1-laden-study
**Field:** study.translation
**CURRENT:** Boutique
**PROPOSED_FR:** Magasin
**Problēma:** « Laden » signifie généralement « magasin » ; « boutique » est plus spécifique et plus étroit.
**LV etalons (konteksts):** veikals
**DE konteksts:** Laden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0570
**Card ID:** a1-land
**Field:** study.translation
**CURRENT:** Pays • Terrain
**PROPOSED_FR:** Pays • Terre
**Problēma:** Deux traductions sont séparées par « • » ; « terrain » ne correspond pas au sens général de « zeme ».
**LV etalons (konteksts):** valsts • zeme
**DE konteksts:** Land
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0571
**Card ID:** a1-land
**Field:** study.comparison[0].meaning
**CURRENT:** Pays/terre/campagne
**PROPOSED_FR:** Pays / terre / campagne
**Problēma:** Plusieurs sens distincts sont réunis dans un champ séparé par des barres obliques ; décision éditoriale requise.
**LV etalons (konteksts):** valsts / zeme / lauki
**DE konteksts:** Land
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0572
**Card ID:** a1-lang
**Field:** study.translation
**CURRENT:** Longue • Longue
**PROPOSED_FR:** Long • Long
**Problēma:** L’adjectif doit être au masculin pour le lemme, et les deux sens sont séparés par « • ».
**LV etalons (konteksts):** garš • ilgs
**DE konteksts:** lang
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0573
**Card ID:** a1-lang
**Field:** study.examples[5].lv
**CURRENT:** Toute la journée (en longueur).
**PROPOSED_FR:** Toute la journée.
**Problēma:** « En longueur » est un calque maladroit ; « toute la journée » exprime naturellement le sens.
**LV etalons (konteksts):** visu dienu (garumā).
**DE konteksts:** lang
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0574
**Card ID:** a1-lassen
**Field:** study.translation
**CURRENT:** Partir • Laisser
**PROPOSED_FR:** Laisser • Permettre
**Problēma:** « Partir » ne traduit pas « lassen » ici ; deux sens sont séparés par « • ».
**LV etalons (konteksts):** atstāt • ļaut
**DE konteksts:** lassen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0575
**Card ID:** a1-lassen
**Field:** study.comparison[0].meaning
**CURRENT:** Partir / laisser
**PROPOSED_FR:** Laisser / permettre
**Problēma:** « Partir » est erroné dans cette opposition et deux sens sont séparés par une barre oblique.
**LV etalons (konteksts):** atstāt / ļaut
**DE konteksts:** lassen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0576
**Card ID:** a1-lassen
**Field:** study.tip.text
**CURRENT:** Atceries : quelque chose reste → lassen • Quelqu'un est autorisé → lassen.
**PROPOSED_FR:** Rappelez-vous : quelque chose reste → lassen • Quelqu'un est autorisé → lassen.
**Problēma:** « Atceries » est un mot letton resté dans le texte français.
**LV etalons (konteksts):** Atceries: kaut kas paliek → lassen; kādam atļauj → lassen.
**DE konteksts:** lassen
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0577
**Card ID:** a1-laufen
**Field:** study.translation
**CURRENT:** Exécuter • Utiliser
**PROPOSED_FR:** Courir • Fonctionner
**Problēma:** « Laufen » signifie courir ou fonctionner, non « exécuter » ou « utiliser ».
**LV etalons (konteksts):** skriet • darboties
**DE konteksts:** laufen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0578
**Card ID:** a1-laufen
**Field:** study.comparison[0].meaning
**CURRENT:** Exécuter / exploiter
**PROPOSED_FR:** Courir / fonctionner
**Problēma:** Les deux sens sont séparés par une barre oblique et les traductions actuelles sont inadaptées.
**LV etalons (konteksts):** skriet / darboties
**DE konteksts:** laufen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0579
**Card ID:** a1-laufen
**Field:** study.comparison[1].meaning
**CURRENT:** Allez à pied
**PROPOSED_FR:** Marcher
**Problēma:** Une entrée lexicale doit être à l’infinitif ; « allez » est une forme impérative et change le registre.
**LV etalons (konteksts):** iet kājām
**DE konteksts:** laufen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0580
**Card ID:** a1-laufen
**Field:** study.comparison[3].meaning
**CURRENT:** Pour opérer
**PROPOSED_FR:** Fonctionner
**Problēma:** « Pour opérer » est une formulation maladroite et ne donne pas le lemme français attendu.
**LV etalons (konteksts):** darboties
**DE konteksts:** laufen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0581
**Card ID:** a1-legen
**Field:** study.comparison[1].meaning
**CURRENT:** Être / dormir
**PROPOSED_FR:** Se trouver / être allongé
**Problēma:** « Liegen » signifie se trouver ou être allongé, pas nécessairement dormir.
**LV etalons (konteksts):** atrasties / gulēt
**DE konteksts:** legen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0582
**Card ID:** a1-legen
**Field:** study.comparison[3].meaning
**CURRENT:** Asseyez-vous / asseyez-vous
**PROPOSED_FR:** Faire asseoir / s’asseoir
**Problēma:** Les deux sens sont identiques dans le texte actuel et sont séparés par une barre oblique.
**LV etalons (konteksts):** nosēdināt / apsēsties
**DE konteksts:** legen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0583
**Card ID:** a1-legen
**Field:** study.tip.text
**CURRENT:** Atceries : tu noliec → legen • Lieta jau atrodas → liegen.
**PROPOSED_FR:** Rappelez-vous : vous posez → legen • L’objet est déjà posé → liegen.
**Problēma:** Le champ contient plusieurs segments lettons non traduits en français.
**LV etalons (konteksts):** Atceries: tu noliec → legen; lieta jau atrodas → liegen.
**DE konteksts:** legen
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0584
**Card ID:** a1-leise-study
**Field:** study.translation
**CURRENT:** Calme
**PROPOSED_FR:** Silencieux
**Problēma:** « Leise » signifie silencieux ou doucement, tandis que « calme » signifie surtout tranquille.
**LV etalons (konteksts):** kluss
**DE konteksts:** leise
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0585
**Card ID:** a1-leise-study
**Field:** study.examples[1].lv
**CURRENT:** S'il te plaît, tais-toi
**PROPOSED_FR:** S'il te plaît, parle moins fort.
**Problēma:** « Tais-toi » signifie « shut up » et ne traduit pas une demande de parler doucement.
**LV etalons (konteksts):** lūdzu, esi kluss.
**DE konteksts:** leise
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0586
**Card ID:** a1-leise-study
**Field:** study.examples[2].lv
**CURRENT:** La musique est calme.
**PROPOSED_FR:** La musique est douce.
**Problēma:** Pour une musique « leise », « douce » est plus naturel que « calme ».
**LV etalons (konteksts):** mūzika ir klusa.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0587
**Card ID:** a1-liegen
**Field:** study.translation
**CURRENT:** Être • Dormir
**PROPOSED_FR:** Être situé ou être couché
**Problēma:** Deux traductions distinctes sont séparées par « • »; une décision éditoriale est requise.
**LV etalons (konteksts):** atrasties • gulēt
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0588
**Card ID:** a1-liegen
**Field:** study.examples[2].lv
**CURRENT:** Il dort au lit.
**PROPOSED_FR:** Il est couché dans son lit.
**Problēma:** « Liegen » signifie être allongé, non dormir; le français actuel suit le sens letton plutôt que l'allemand.
**LV etalons (konteksts):** viņš guļ gultā.
**DE konteksts:** liegen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0589
**Card ID:** a1-liegen
**Field:** study.comparison[0].meaning
**CURRENT:** Être / dormir
**PROPOSED_FR:** Être situé ou dormir
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** atrasties / gulēt
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0590
**Card ID:** a1-liegen
**Field:** study.comparison[1].meaning
**CURRENT:** Déposer
**PROPOSED_FR:** Déposer
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** nolikt
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0591
**Card ID:** a1-liegen
**Field:** study.comparison[2].meaning
**CURRENT:** Se tenir debout/être debout
**PROPOSED_FR:** Se tenir debout ou être debout
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** stāvēt / atrasties stāvus
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0592
**Card ID:** a1-liegen
**Field:** study.comparison[3].meaning
**CURRENT:** Être
**PROPOSED_FR:** Être
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** būt
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0593
**Card ID:** a1-machen
**Field:** study.translation
**CURRENT:** Faire • Faire
**PROPOSED_FR:** Faire
**Problēma:** Les deux traductions françaises sont identiques malgré des sens sources distincts; décision éditoriale requise.
**LV etalons (konteksts):** darīt • taisīt
**DE konteksts:** machen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0594
**Card ID:** a1-machen
**Field:** study.tip.text
**CURRENT:** Atceries : Était-ce machst du ? = Ko tu dari ?
**PROPOSED_FR:** Rappelez-vous : Was machst du ? = Que fais-tu ?
**Problēma:** Le champ contient du letton et la question allemande est mal traduite en français.
**LV etalons (konteksts):** Atceries: Was machst du? = Ko tu dari?
**DE konteksts:** machen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0595
**Card ID:** a1-mal
**Field:** study.translation
**CURRENT:** Temps
**PROPOSED_FR:** Fois
**Problēma:** Le nom allemand « Mal » se traduit ici par « fois », pas « temps ».
**LV etalons (konteksts):** reize
**DE konteksts:** Mal
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0596
**Card ID:** a1-mal
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : das Mal = temps (nom) • Mal sans article = particule familière.
**PROPOSED_FR:** Rappelez-vous : das Mal = fois (nom) • Mal sans article = particule familière.
**Problēma:** « Das Mal » signifie « la fois »; « temps » est une traduction erronée dans ce contexte.
**LV etalons (konteksts):** das Mal = reize
**DE konteksts:** Mal
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0597
**Card ID:** a1-mann
**Field:** study.translation
**CURRENT:** Homme • Mari
**PROPOSED_FR:** Homme ou mari
**Problēma:** Deux traductions distinctes sont séparées par « • »; une décision éditoriale est requise.
**LV etalons (konteksts):** vīrietis • vīrs
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0598
**Card ID:** a1-mit
**Field:** study.comparison[0].meaning
**CURRENT:** Avec / avec
**PROPOSED_FR:** Avec
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** ar / kopā ar
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0599
**Card ID:** a1-mit
**Field:** study.comparison[1].meaning
**CURRENT:** Sans
**PROPOSED_FR:** Sans
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** bez
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0600
**Card ID:** a1-mit
**Field:** study.comparison[2].meaning
**CURRENT:** Chez / chez quelqu'un
**PROPOSED_FR:** Chez quelqu'un
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** pie / pie kāda
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0601
**Card ID:** a1-mit
**Field:** study.comparison[3].meaning
**CURRENT:** À / à
**PROPOSED_FR:** À
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** uz / pie
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0602
**Card ID:** a1-mögen
**Field:** study.examples[1].lv
**CURRENT:** Aimez-vous le café
**PROPOSED_FR:** Aimes-tu le café ?
**Problēma:** Le letton emploie le singulier informel « tev »; « vous » ne correspond pas, et le point d'interrogation manque.
**LV etalons (konteksts):** vai tev garšo kafija?
**DE konteksts:** mögen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0603
**Card ID:** a1-mögen
**Field:** study.comparison[0].meaning
**CURRENT:** Aimer
**PROPOSED_FR:** Aimer
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** patikt
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0604
**Card ID:** a1-mögen
**Field:** study.comparison[1].meaning
**CURRENT:** Voudrais
**PROPOSED_FR:** Voudrais
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** gribētu
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0605
**Card ID:** a1-mögen
**Field:** study.comparison[2].meaning
**CURRENT:** Je veux
**PROPOSED_FR:** Je veux
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** gribēt
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0606
**Card ID:** a1-mögen
**Field:** study.comparison[3].meaning
**CURRENT:** Aimer
**PROPOSED_FR:** Aimer
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** mīlēt
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0607
**Card ID:** a1-morgen
**Field:** study.examples[5].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0608
**Card ID:** a1-morgen-study
**Field:** study.examples[1].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0609
**Card ID:** a1-morgen-study
**Field:** study.examples[2].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0610
**Card ID:** a1-morgen-study
**Field:** study.examples[3].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0611
**Card ID:** a1-müssen
**Field:** study.translation
**CURRENT:** Avoir besoin
**PROPOSED_FR:** Devoir
**Problēma:** « Müssen » exprime l'obligation et se traduit par « devoir », non « avoir besoin ».
**LV etalons (konteksts):** vajadzēt
**DE konteksts:** müssen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0612
**Card ID:** a1-müssen
**Field:** study.examples[1].lv
**CURRENT:** Vous devez attendre.
**PROPOSED_FR:** Tu dois attendre.
**Problēma:** Le letton utilise le singulier informel « tev »; le pronom français devrait être « tu ».
**LV etalons (konteksts):** tev jāgaida.
**DE konteksts:** müssen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0613
**Card ID:** a1-müssen
**Field:** study.comparison[0].meaning
**CURRENT:** Besoin / devoir faire
**PROPOSED_FR:** Devoir ou être obligé de faire
**Problēma:** « Besoin » ne traduit pas l'obligation exprimée par « müssen ».
**LV etalons (konteksts):** vajadzēt / būt jādara
**DE konteksts:** müssen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0614
**Card ID:** a1-müssen
**Field:** study.comparison[1].meaning
**CURRENT:** Pouvoir/savoir
**PROPOSED_FR:** Pouvoir ou savoir
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** varēt / prast
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0615
**Card ID:** a1-müssen
**Field:** study.comparison[3].meaning
**CURRENT:** Être autorisé
**PROPOSED_FR:** Être autorisé
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**LV etalons (konteksts):** drīkstēt
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0616
**Card ID:** a1-nach
**Field:** study.translation
**CURRENT:** À • Après
**PROPOSED_FR:** À ou après
**Problēma:** Deux traductions distinctes sont séparées par « • »; une décision éditoriale est requise.
**LV etalons (konteksts):** uz • pēc
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0617
**Card ID:** a1-nach
**Field:** study.comparison[0].meaning
**CURRENT:** À / après
**PROPOSED_FR:** À ou après
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** uz / pēc
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0618
**Card ID:** a1-nach
**Field:** study.comparison[1].meaning
**CURRENT:** À / à
**PROPOSED_FR:** À
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** uz / pie
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0619
**Card ID:** a1-nach
**Field:** study.comparison[2].meaning
**CURRENT:** Dans / vers le lieu avec l'article
**PROPOSED_FR:** Dans ou vers le lieu avec l'article
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** iekšā / uz vietu ar artikulu
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0620
**Card ID:** a1-nach
**Field:** study.comparison[3].meaning
**CURRENT:** Avant / devant
**PROPOSED_FR:** Avant ou devant
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**LV etalons (konteksts):** pirms / priekšā
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0621
**Card ID:** a1-natuerlich
**Field:** study.translation
**CURRENT:** Bien sûr • Naturel
**PROPOSED_FR:** Naturel
**Problēma:** Deux sens distincts sont proposés pour un même mot ; le choix du sens principal doit être validé.
**LV etalons (konteksts):** protams • dabisks
**DE konteksts:** natürlich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0622
**Card ID:** a1-natuerlich
**Field:** study.examples[2].lv
**CURRENT:** Bien sûr, je vais vous aider.
**PROPOSED_FR:** Bien sûr, je vais t'aider.
**Problēma:** Le letton emploie le tutoiement tev, mais la traduction française emploie vous.
**LV etalons (konteksts):** protams, es tev palīdzēšu.
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0623
**Card ID:** a1-nehmen
**Field:** study.examples[0].lv
**CURRENT:** Je pars en bus
**PROPOSED_FR:** Je prends le bus.
**Problēma:** La phrase signifie prendre le bus, et non partir en bus.
**LV etalons (konteksts):** es braucu ar autobusu.
**DE konteksts:** nehmen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0624
**Card ID:** a1-nehmen
**Field:** study.comparison[0].meaning
**CURRENT:** Prendre / prendre
**PROPOSED_FR:** Prendre / prendre
**Problēma:** Deux traductions séparées par une barre oblique sont proposées ; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** ņemt / paņemt
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0625
**Card ID:** a1-nehmen
**Field:** study.comparison[1].meaning
**CURRENT:** Apporter/prendre/livrer
**PROPOSED_FR:** Apporter / emporter / livrer
**Problēma:** Trois sens distincts sont séparés par des barres obliques ; le choix de présentation doit être validé.
**LV etalons (konteksts):** atnest / aiznest / nogādāt
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0626
**Card ID:** a1-nehmen
**Field:** study.comparison[2].meaning
**CURRENT:** Poursuivre/aller chercher
**PROPOSED_FR:** Aller chercher / apporter
**Problēma:** Deux sens distincts sont séparés par une barre oblique et le premier sens est mal traduit.
**LV etalons (konteksts):** aiziet pakaļ / atnest
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0627
**Card ID:** a1-nehmen
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : prenez pour vous → nehmen • Amener quelqu'un → amener.
**PROPOSED_FR:** Souviens-toi : prends pour toi → nehmen • apporte à quelqu'un → bringen.
**Problēma:** La seconde partie traduit bringen par amener, alors qu'il s'agit ici d'apporter quelque chose à quelqu'un.
**LV etalons (konteksts):** Atceries: paņem sev → nehmen; atnes kādam → bringen.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0628
**Card ID:** a1-neu
**Field:** study.examples[6].lv
**CURRENT:** Quoi de neuf
**PROPOSED_FR:** Quoi de neuf ?
**Problēma:** Le point d'interrogation manque dans cette question française.
**LV etalons (konteksts):** kas jauns?
**DE konteksts:** neu
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0629
**Card ID:** a1-nur-study
**Field:** study.examples[2].lv
**CURRENT:** Vous seul pouvez m'aider.
**PROPOSED_FR:** Toi seul peux m'aider.
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**LV etalons (konteksts):** tikai tu vari man palīdzēt.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0630
**Card ID:** a1-ob
**Field:** study.translation
**CURRENT:** Ou
**PROPOSED_FR:** Si
**Problēma:** La conjonction allemande ob signifie si dans une interrogation indirecte, et non ou.
**LV etalons (konteksts):** vai
**DE konteksts:** ob
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0631
**Card ID:** a1-ob
**Field:** study.examples[3].lv
**CURRENT:** Vous venez aujourd'hui ou demain ?
**PROPOSED_FR:** Tu viens aujourd'hui ou demain ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**LV etalons (konteksts):** vai tu nāksi šodien vai rīt?
**DE konteksts:** ob
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0632
**Card ID:** a1-ob
**Field:** study.comparison[0].meaning
**CURRENT:** Ou dans une question indirecte
**PROPOSED_FR:** Si dans une question indirecte
**Problēma:** Dans une question indirecte, vai se traduit par si, pas par ou.
**LV etalons (konteksts):** vai netiešā jautājumā
**DE konteksts:** ob
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0633
**Card ID:** a1-ob
**Field:** study.comparison[1].meaning
**CURRENT:** Ou choisissez entre les options
**PROPOSED_FR:** Ou dans un choix entre plusieurs options
**Problēma:** La formulation actuelle est un impératif incomplet et ne décrit pas clairement le sens comparé.
**LV etalons (konteksts):** vai izvēlē starp variantiem
**DE konteksts:** ob
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0634
**Card ID:** a1-oder
**Field:** study.examples[2].lv
**CURRENT:** Voulez-vous une pizza ou une salade
**PROPOSED_FR:** Tu veux une pizza ou une salade ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous et omet le point d'interrogation.
**LV etalons (konteksts):** vai tu gribi picu vai salātus?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0635
**Card ID:** a1-oder
**Field:** study.examples[3].lv
**CURRENT:** Vous viendrez, n'est-ce pas ?
**PROPOSED_FR:** Tu viendras, n'est-ce pas ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**LV etalons (konteksts):** tu nāksi, vai ne?
**DE konteksts:** oder
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0636
**Card ID:** a1-oder
**Field:** study.comparison[1].meaning
**CURRENT:** Ou dans une question indirecte
**PROPOSED_FR:** Si dans une question indirecte
**Problēma:** Dans une question indirecte, vai correspond à si et relève de ob, non de oder.
**LV etalons (konteksts):** vai netiešā jautājumā
**DE konteksts:** oder
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0637
**Card ID:** a1-passen
**Field:** study.translation
**CURRENT:** Ajustement • Ajustement
**PROPOSED_FR:** Aller • Convenir
**Problēma:** Ajustement est un nom ; passen est un verbe signifiant notamment aller ou convenir.
**LV etalons (konteksts):** derēt • piestāvēt
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0638
**Card ID:** a1-passen
**Field:** study.comparison[0].meaning
**CURRENT:** Ajustement / ajustement
**PROPOSED_FR:** Aller / aller à quelqu'un
**Problēma:** Deux sens sont séparés par une barre oblique et le nom ajustement ne traduit pas le verbe allemand.
**LV etalons (konteksts):** derēt / piestāvēt
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0639
**Card ID:** a1-passen
**Field:** study.comparison[1].meaning
**CURRENT:** Se tenir debout / se tenir debout
**PROPOSED_FR:** Aller à quelqu'un / être debout
**Problēma:** Les deux sens lettons sont confondus et la traduction actuelle répète le même sens.
**LV etalons (konteksts):** piestāvēt / stāvēt
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0640
**Card ID:** a1-passen
**Field:** study.comparison[3].meaning
**CURRENT:** Pour opérer
**PROPOSED_FR:** Fonctionner
**Problēma:** Darboties signifie fonctionner ici ; opérer ne convient pas à ce sens général.
**LV etalons (konteksts):** darboties
**DE konteksts:** passen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0641
**Card ID:** a1-passen
**Field:** study.tip.text
**CURRENT:** Atceries: Das passé. = Tas der.
**PROPOSED_FR:** Souviens-toi : Das passt. = Ça va.
**Problēma:** Le mot allemand passt est mal écrit passé et la phrase française contient un fragment letton.
**LV etalons (konteksts):** Atceries: Das passt. = Tas der.
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0642
**Card ID:** a1-probieren
**Field:** study.translation
**CURRENT:** A essayer • A déguster
**PROPOSED_FR:** Essayer • Goûter
**Problēma:** Les infinitifs français doivent être essayer et goûter ; deux sens distincts sont aussi proposés.
**LV etalons (konteksts):** izmēģināt • nogaršot
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0643
**Card ID:** a1-probieren
**Field:** study.comparison[1].meaning
**CURRENT:** Pour essayer
**PROPOSED_FR:** Essayer
**Problēma:** La préposition Pour n'est pas présente dans le sens nominal source et rend l'entrée moins adaptée à une liste de vocabulaire.
**LV etalons (konteksts):** mēģināt
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0644
**Card ID:** a1-probieren
**Field:** study.comparison[2].meaning
**CURRENT:** Pour vérifier
**PROPOSED_FR:** Vérifier
**Problēma:** La préposition Pour n'est pas nécessaire dans cette entrée lexicale.
**LV etalons (konteksts):** pārbaudīt
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0645
**Card ID:** a1-probieren
**Field:** study.comparison[3].meaning
**CURRENT:** A essayer
**PROPOSED_FR:** Essayer
**Problēma:** L'infinitif français doit être essayer, sans préposition dans cette liste de sens.
**LV etalons (konteksts):** pielaikot
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0646
**Card ID:** a1-reis
**Field:** study.examples[2].lv
**CURRENT:** Cuisinez-vous du riz ?
**PROPOSED_FR:** Tu cuisines du riz ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**LV etalons (konteksts):** vai tu gatavo rīsus?
**DE konteksts:** Reis
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0647
**Card ID:** a1-reis
**Field:** study.tip.text
**CURRENT:** N'oubliez pas : der Reis est au singulier en allemand, mais généralement riz en letton.
**PROPOSED_FR:** Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement rīsi en letton.
**Problēma:** La phrase actuelle affirme que riz est le terme letton, alors que le source donne rīsi.
**LV etalons (konteksts):** Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi.
**DE konteksts:** Reis
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0648
**Card ID:** a1-sagen-study
**Field:** study.examples[0].lv
**CURRENT:** Qu'est-ce que vous avez dit
**PROPOSED_FR:** Qu'est-ce que tu as dit ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous et omet le point d'interrogation.
**LV etalons (konteksts):** ko tu pateici?
**DE konteksts:** sagen
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0649
**Card ID:** a1-sagen-study
**Field:** study.comparison[0].meaning
**CURRENT:** Raconter (un texte spécifique)
**PROPOSED_FR:** Dire (un texte précis)
**Problēma:** Pasacīt signifie dire quelque chose de précis, pas raconter une histoire.
**LV etalons (konteksts):** pasacīt (konkrētu tekstu)
**DE konteksts:** sagen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0650
**Card ID:** a1-sagen-study
**Field:** study.comparison[1].meaning
**CURRENT:** Parler (langage, parler)
**PROPOSED_FR:** Parler (une langue, converser)
**Problēma:** La traduction actuelle est redondante et langage ne correspond pas à l'expression parler une langue.
**LV etalons (konteksts):** runāt (valodu, sarunāties)
**DE konteksts:** sagen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0651
**Card ID:** a1-schauen-study
**Field:** study.translation
**CURRENT:** Montre
**PROPOSED_FR:** Regarder
**Problēma:** Montre est un nom ou une forme de montrer ; schauen signifie regarder.
**LV etalons (konteksts):** skatīties
**DE konteksts:** schauen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0652
**Card ID:** a1-schwimmen
**Field:** study.comparison[1].meaning
**CURRENT:** Nager / être dans l'eau
**PROPOSED_FR:** Nager / être dans l'eau
**Problēma:** Deux sens distincts sont séparés par une barre oblique; le choix de présentation doit être validé par le propriétaire.
**LV etalons (konteksts):** peldēties / atrasties ūdenī
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0653
**Card ID:** a1-schwimmen
**Field:** study.comparison[2].meaning
**CURRENT:** Allez nager
**PROPOSED_FR:** Aller nager
**Problēma:** Dans une liste de sens, l'infinitif français est requis; « Allez nager » est un impératif formel.
**LV etalons (konteksts):** iet peldēt
**DE konteksts:** schwimmen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0654
**Card ID:** a1-sehen
**Field:** study.comparison[1].meaning
**CURRENT:** Montre
**PROPOSED_FR:** Regarder
**Problēma:** « Montre » signifie montrer ou une montre; il ne traduit pas le verbe letton « skatīties ».
**LV etalons (konteksts):** skatīties
**DE konteksts:** sehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0655
**Card ID:** a1-sehen
**Field:** study.comparison[2].meaning
**CURRENT:** Voir / regarder
**PROPOSED_FR:** Voir / regarder
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique; le format doit être validé par le propriétaire.
**LV etalons (konteksts):** apskatīt / skatīties
**DE konteksts:** sehen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0656
**Card ID:** a1-sehen
**Field:** study.comparison[3].meaning
**CURRENT:** Pour entendre
**PROPOSED_FR:** Entendre
**Problēma:** Le français actuel signifie « pour entendre » et ne correspond pas à l'infinitif demandé.
**LV etalons (konteksts):** dzirdēt
**DE konteksts:** sehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0657
**Card ID:** a1-sein
**Field:** study.tip.text
**CURRENT:** Atceries : ich bin = es esmu • Du bist = tu esi.
**PROPOSED_FR:** Rappelez-vous : ich bin = je suis • du bist = tu es.
**Problēma:** Le texte contient des éléments lettons (« Atceries », « es esmu », « tu esi ») dans le champ français.
**LV etalons (konteksts):** Atceries: ich bin = es esmu; du bist = tu esi.
**DE konteksts:** sein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0658
**Card ID:** a1-seite
**Field:** study.translation
**CURRENT:** Page • Côté
**PROPOSED_FR:** Page • Côté
**Problēma:** Deux sens distincts sont séparés par un point médian; le choix de présenter les deux sens doit être validé.
**LV etalons (konteksts):** lappuse • puse
**DE konteksts:** Seite
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0659
**Card ID:** a1-sich
**Field:** study.translation
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_FR:** Soi-même • À soi-même
**Problēma:** « sich » est un pronom réfléchi générique; « vous-même » le limite à la deuxième personne du pluriel.
**LV etalons (konteksts):** sevi • sev
**DE konteksts:** sich
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0660
**Card ID:** a1-sich
**Field:** study.examples[0].lv
**CURRENT:** Il prend un bain.
**PROPOSED_FR:** Il se lave.
**Problēma:** La phrase française signifie prendre un bain, tandis que la source signifie se laver.
**LV etalons (konteksts):** viņš mazgājas.
**DE konteksts:** sich
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0661
**Card ID:** a1-sich
**Field:** study.comparison[0].meaning
**CURRENT:** Moi/moi-même
**PROPOSED_FR:** Soi-même / à soi-même
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique; le format doit être validé.
**LV etalons (konteksts):** sevi / sev
**DE konteksts:** sich
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0662
**Card ID:** a1-sich
**Field:** study.comparison[1].meaning
**CURRENT:** Moi / moi-même à ich
**PROPOSED_FR:** Me / moi-même avec ich
**Problēma:** La préposition « à ich » est incorrecte et le pronom réfléchi doit être distingué du pronom objet.
**LV etalons (konteksts):** mani / sevi pie ich
**DE konteksts:** sich
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0663
**Card ID:** a1-sich
**Field:** study.comparison[2].meaning
**CURRENT:** Toi/moi-même à du
**PROPOSED_FR:** Te / toi-même avec du
**Problēma:** La construction « moi-même à du » est incorrecte et ne correspond pas au pronom lié à « du ».
**LV etalons (konteksts):** tevi / sevi pie du
**DE konteksts:** sich
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0664
**Card ID:** a1-sicher
**Field:** study.translation
**CURRENT:** Sûr • Certainement
**PROPOSED_FR:** Sûr • Certainement
**Problēma:** Deux sens distincts sont séparés par un point médian; validation éditoriale requise.
**LV etalons (konteksts):** drošs • noteikti
**DE konteksts:** sicher
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0665
**Card ID:** a1-sicher
**Field:** study.examples[1].lv
**CURRENT:** Vous venez demain - définitivement !
**PROPOSED_FR:** Vous venez demain ? — Certainement !
**Problēma:** « Définitivement » est peu naturel pour « certainement » dans cette réponse; la ponctuation de la question manque aussi.
**LV etalons (konteksts):** vai tu nāc rīt? – noteikti!
**DE konteksts:** sicher
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0666
**Card ID:** a1-sie-study
**Field:** study.translation
**CURRENT:** Ils/elle
**PROPOSED_FR:** Ils / elles
**Problēma:** Le second sujet est pluriel féminin; « elle » doit être remplacé par « elles ».
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sie
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0667
**Card ID:** a1-sie-study
**Field:** study.examples[5].lv
**CURRENT:** Tu cuisines s'il te plaît
**PROPOSED_FR:** Ils cuisinent, s'il vous plaît.
**Problēma:** Pour « sie » minuscule, « tu » est incompatible avec les référents allemands; il faut employer « ils » ou « elles ».
**LV etalons (konteksts):** jūs gatavojat, lūdzu.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0668
**Card ID:** a1-sie-study-2
**Field:** study.translation
**CURRENT:** Toi
**PROPOSED_FR:** Vous
**Problēma:** « Sie » majuscule est le pronom de politesse allemand et se traduit par « vous », non « toi ».
**LV etalons (konteksts):** jūs
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0669
**Card ID:** a1-sie-study-2
**Field:** study.examples[5].lv
**CURRENT:** Tu cuisines s'il te plaît
**PROPOSED_FR:** Vous cuisinez, s'il vous plaît.
**Problēma:** Le pronom français « tu » contredit le « Sie » allemand de politesse.
**LV etalons (konteksts):** jūs gatavojat, lūdzu.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0670
**Card ID:** a1-sitzen
**Field:** study.translation
**CURRENT:** S'asseoir
**PROPOSED_FR:** Être assis
**Problēma:** « Sitzen » décrit une position (« être assis »); « s'asseoir » décrit le mouvement pour prendre cette position.
**LV etalons (konteksts):** sēdēt
**DE konteksts:** sitzen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0671
**Card ID:** a1-sitzen
**Field:** study.comparison[0].meaning
**CURRENT:** S'asseoir
**PROPOSED_FR:** Être assis
**Problēma:** Le sens statique de « sēdēt » se traduit par « être assis », pas par l'action « s'asseoir ».
**LV etalons (konteksts):** sēdēt
**DE konteksts:** sitzen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0672
**Card ID:** a1-sitzen
**Field:** study.comparison[2].meaning
**CURRENT:** Dormir / s'allonger
**PROPOSED_FR:** Dormir / être couché
**Problēma:** « S'allonger » signifie prendre la position couchée; « atrasties guļus » signifie y être déjà.
**LV etalons (konteksts):** gulēt / atrasties guļus
**DE konteksts:** sitzen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0673
**Card ID:** a1-sitzen
**Field:** study.comparison[3].meaning
**CURRENT:** S'asseoir / s'asseoir
**PROPOSED_FR:** S'asseoir / faire asseoir
**Problēma:** « Nosēdināt » est causatif; il se traduit par « faire asseoir », pas par « s'asseoir ».
**LV etalons (konteksts):** apsēsties / nosēdināt
**DE konteksts:** sitzen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0674
**Card ID:** a1-sollen
**Field:** study.translation
**CURRENT:** Devrait
**PROPOSED_FR:** Devoir
**Problēma:** Le champ traduit un infinitif allemand; « devrait » est une forme conjuguée à la troisième personne.
**LV etalons (konteksts):** vajadzētu
**DE konteksts:** sollen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0675
**Card ID:** a1-sollen
**Field:** study.comparison[0].meaning
**CURRENT:** Devrait/devrait faire comme indiqué
**PROPOSED_FR:** Devoir selon une consigne
**Problēma:** Le champ contient deux formulations séparées par une barre oblique; présentation à valider.
**LV etalons (konteksts):** vajadzētu / jādara pēc norādes
**DE konteksts:** sollen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0676
**Card ID:** a1-stehen
**Field:** study.comparison[0].meaning
**CURRENT:** Se tenir debout/être debout
**PROPOSED_FR:** Se tenir debout / être debout
**Problēma:** Deux formulations distinctes sont séparées par une barre oblique; le format doit être validé.
**LV etalons (konteksts):** stāvēt / atrasties stāvus
**DE konteksts:** stehen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0677
**Card ID:** a1-stehen
**Field:** study.comparison[1].meaning
**CURRENT:** S'asseoir
**PROPOSED_FR:** Être assis
**Problēma:** « Sēdēt » décrit une position statique et se traduit par « être assis », non « s'asseoir ».
**LV etalons (konteksts):** sēdēt
**DE konteksts:** stehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0678
**Card ID:** a1-stehen
**Field:** study.comparison[2].meaning
**CURRENT:** Dormir / s'allonger
**PROPOSED_FR:** Dormir / être couché
**Problēma:** « Atrasties guļus » signifie être couché, tandis que « s'allonger » désigne le mouvement.
**LV etalons (konteksts):** gulēt / atrasties guļus
**DE konteksts:** stehen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0679
**Card ID:** a1-über
**Field:** study.translation
**CURRENT:** Fini • Pour
**PROPOSED_FR:** Au-dessus • À propos de
**Problēma:** « Fini » et « pour » ne correspondent pas aux sens principaux de « über » ici.
**LV etalons (konteksts):** virs • par
**DE konteksts:** über
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0680
**Card ID:** a1-über
**Field:** study.examples[1].lv
**CURRENT:** Nous parlons de temps.
**PROPOSED_FR:** Nous parlons du temps.
**Problēma:** « Parler du temps » est la formulation française naturelle pour parler de la météo.
**LV etalons (konteksts):** mēs runājam par laiku.
**DE konteksts:** über
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0681
**Card ID:** a1-über
**Field:** study.comparison[0].meaning
**CURRENT:** Au-dessus/au-dessus/à travers
**PROPOSED_FR:** Au-dessus / à propos de / à travers
**Problēma:** Plusieurs traductions distinctes sont séparées par « / »; la formulation contient aussi un doublon.
**LV etalons (konteksts):** virs / par / pāri
**DE konteksts:** über
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0682
**Card ID:** a1-über
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : sujet de conversation → über • Au-dessus du tableau → über.
**PROPOSED_FR:** Rappelez-vous : sujet de conversation → über • Au-dessus de la table → über.
**Problēma:** « Tableau » traduit mal « galda » dans cet exemple; il faut « table ».
**LV etalons (konteksts):** Atceries: tēma sarunā → über; virs galda → über.
**DE konteksts:** über
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0683
**Card ID:** a1-um
**Field:** study.translation
**CURRENT:** Vers • Heures
**PROPOSED_FR:** Vers • À (pour l’heure)
**Problēma:** « Heures » seul ne traduit pas la préposition « um » indiquant l’heure.
**LV etalons (konteksts):** ap • pulksten
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0684
**Card ID:** a1-um
**Field:** study.examples[2].lv
**CURRENT:** Il fait le tour du coin.
**PROPOSED_FR:** Il tourne au coin de la rue.
**Problēma:** « Faire le tour du coin » est peu naturel et ne rend pas clairement le déplacement au coin.
**LV etalons (konteksts):** viņš iet ap stūri.
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0685
**Card ID:** a1-um
**Field:** study.examples[3].lv
**CURRENT:** J'apprends à parler allemand.
**PROPOSED_FR:** J'apprends l'allemand pour pouvoir le parler.
**Problēma:** Le français actuel exprime seulement l'apprentissage, pas explicitement le but « pour parler allemand ».
**LV etalons (konteksts):** es mācos, lai runātu vāciski.
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0686
**Card ID:** a1-um
**Field:** study.comparison[0].meaning
**CURRENT:** À / vers / vers
**PROPOSED_FR:** À / autour de / pour
**Problēma:** Trois traductions distinctes sont séparées par « / »; décision de présentation requise.
**LV etalons (konteksts):** pulksten / ap / lai
**DE konteksts:** um
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0687
**Card ID:** a1-um
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : um acht = huit heures.
**PROPOSED_FR:** Rappelez-vous : um acht = à huit heures.
**Problēma:** L’heure française nécessite la préposition « à ».
**LV etalons (konteksts):** Atceries: um acht = pulksten astoņos.
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0688
**Card ID:** a1-unter
**Field:** study.examples[3].lv
**CURRENT:** Une lampe est suspendue au-dessus de la table.
**PROPOSED_FR:** Une lampe est suspendue sous la table.
**Problēma:** Le français contredit le sens allemand « unter »; « au-dessus » correspond à « über ».
**LV etalons (konteksts):** lampa karājas virs galda.
**DE konteksts:** unter
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0689
**Card ID:** a1-unter
**Field:** study.comparison[0].meaning
**CURRENT:** Sous / entre
**PROPOSED_FR:** Sous / entre
**Problēma:** Deux traductions distinctes sont séparées par « / »; décision de présentation requise.
**LV etalons (konteksts):** zem / starp
**DE konteksts:** unter
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0690
**Card ID:** a1-unter
**Field:** study.comparison[1].meaning
**CURRENT:** Plus / pour
**PROPOSED_FR:** Au-dessus / à propos de
**Problēma:** « Plus » ne traduit pas « virs » et « pour » ne traduit pas « par » dans ces contrastes.
**LV etalons (konteksts):** virs / par
**DE konteksts:** unter
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0691
**Card ID:** a1-unter
**Field:** study.tip.text
**CURRENT:** Atceries : zem galda → unter dem Tisch.
**PROPOSED_FR:** Rappelez-vous : sous la table → unter dem Tisch.
**Problēma:** Le texte actuel contient du letton au lieu du français.
**LV etalons (konteksts):** Atceries: zem galda → unter dem Tisch.
**DE konteksts:** unter
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0692
**Card ID:** a1-verstehen
**Field:** study.translation
**CURRENT:** Pour comprendre
**PROPOSED_FR:** Comprendre
**Problēma:** L’infinitif français « pour comprendre » ajoute un but absent du mot allemand.
**LV etalons (konteksts):** saprast
**DE konteksts:** verstehen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0693
**Card ID:** a1-verstehen
**Field:** study.examples[3].lv
**CURRENT:** Je peux parler allemand
**PROPOSED_FR:** Je comprends l'allemand.
**Problēma:** La phrase actuelle traduit « können », pas « verstehen ».
**LV etalons (konteksts):** es protu runāt vāciski.
**DE konteksts:** verstehen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0694
**Card ID:** a1-verstehen
**Field:** study.comparison[3].meaning
**CURRENT:** Savoir
**PROPOSED_FR:** Connaître
**Problēma:** « Pazīt » signifie « connaître », tandis que « savoir » traduit « zināt ».
**LV etalons (konteksts):** pazīt
**DE konteksts:** verstehen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0695
**Card ID:** a1-vom
**Field:** study.translation
**CURRENT:** Depuis
**PROPOSED_FR:** Du / de la
**Problēma:** « Vom » est la contraction de « von dem » et signifie généralement « du », non « depuis ».
**LV etalons (konteksts):** no
**DE konteksts:** vom
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0696
**Card ID:** a1-vor
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : avant l'heure, devant la place → vor.
**PROPOSED_FR:** Rappelez-vous : avant dans le temps, devant dans l'espace → vor.
**Problēma:** « Devant la place » ne rend pas l’opposition temps/espace du texte source.
**LV etalons (konteksts):** Atceries: pirms laikā, priekšā vietā → vor.
**DE konteksts:** vor
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0697
**Card ID:** a1-was
**Field:** study.translation
**CURRENT:** Qui • Quoi
**PROPOSED_FR:** Quoi
**Problēma:** « Was » signifie « quoi/que », pas « qui ».
**LV etalons (konteksts):** kas • ko
**DE konteksts:** was
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0698
**Card ID:** a1-was
**Field:** study.examples[1].lv
**CURRENT:** Ce qui s'est passé?
**PROPOSED_FR:** Qu'est-ce qui s'est passé ?
**Problēma:** La phrase actuelle est une proposition relative, pas une question française complète.
**LV etalons (konteksts):** Kas notika?
**DE konteksts:** was
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0699
**Card ID:** a1-was
**Field:** study.examples[5].lv
**CURRENT:** Quel est votre plat préféré ?
**PROPOSED_FR:** Quel est ton plat préféré ?
**Problēma:** Le tutoiement du texte source est remplacé sans justification par le vouvoiement.
**LV etalons (konteksts):** Kas ir tavs mīļākais ēdiens?
**DE konteksts:** was
**Smagums:** MEDIUM
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0700
**Card ID:** a1-was
**Field:** study.examples[6].lv
**CURRENT:** Qu'est-ce que vous avez dit
**PROPOSED_FR:** Qu'est-ce que tu as dit ?
**Problēma:** Le pronom ne correspond pas au tutoiement source et le point d'interrogation manque.
**LV etalons (konteksts):** Ko tu pasacīji?
**DE konteksts:** was
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0701
**Card ID:** a1-wenn
**Field:** study.comparison[1].meaning
**CURRENT:** Ou dans une question indirecte
**PROPOSED_FR:** Si dans une question indirecte
**Problēma:** « Vai » signifie ici « si », pas la conjonction « ou ».
**LV etalons (konteksts):** vai netiešā jautājumā
**DE konteksts:** wenn
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0702
**Card ID:** a1-wenn
**Field:** study.comparison[2].meaning
**CURRENT:** En cas de question
**PROPOSED_FR:** Dans une question avec « quand »
**Problēma:** La traduction actuelle perd la référence au mot interrogatif « quand ».
**LV etalons (konteksts):** kad jautājumā
**DE konteksts:** wenn
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0703
**Card ID:** a1-wenn
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : condition → wenn • La question "quand?" → veux.
**PROPOSED_FR:** Rappelez-vous : condition → wenn • La question « quand ? » → wann.
**Problēma:** « Veux » est le verbe français « vouloir » et remplace incorrectement le mot allemand « wann ».
**LV etalons (konteksts):** Atceries: nosacījums → wenn; jautājums “kad?” → wann.
**DE konteksts:** wenn
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0704
**Card ID:** a1-wer
**Field:** study.examples[0].lv
**CURRENT:** Qu'est-ce que c'est?
**PROPOSED_FR:** Qui est-ce ?
**Problēma:** « Qu'est-ce que c'est ? » correspond à « was », tandis que « wer » demande « qui ».
**LV etalons (konteksts):** Kas tas ir?
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0705
**Card ID:** a1-wer
**Field:** study.examples[2].lv
**CURRENT:** Qu'est-ce qui arrive aujourd'hui ?
**PROPOSED_FR:** Qui arrive aujourd'hui ?
**Problēma:** « Qu'est-ce qui » demande une chose; « wer » demande une personne.
**LV etalons (konteksts):** Kas šodien nāk?
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0706
**Card ID:** a1-wer
**Field:** study.examples[4].lv
**CURRENT:** Lequel d'entre vous parle allemand ?
**PROPOSED_FR:** Qui parmi vous parle allemand ?
**Problēma:** Avec « wer », « qui parmi vous » est plus fidèle que le pronom « lequel ».
**LV etalons (konteksts):** Kurš no jums runā vāciski?
**DE konteksts:** wer
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0707
**Card ID:** a1-werden
**Field:** study.examples[1].lv
**CURRENT:** Il fait froid.
**PROPOSED_FR:** Il se met à faire froid.
**Problēma:** La phrase actuelle décrit un état; « werden » exprime le changement d’état.
**LV etalons (konteksts):** kļūst auksti.
**DE konteksts:** werden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0708
**Card ID:** a1-werden
**Field:** study.examples[3].lv
**CURRENT:** Je suis fatigué
**PROPOSED_FR:** Je deviens fatigué.
**Problēma:** « Je suis fatigué » traduit « sein », pas « werden »; le sens allemand est incohérent avec la source.
**LV etalons (konteksts):** es esmu noguris.
**DE konteksts:** werden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0709
**Card ID:** a1-wetter
**Field:** study.examples[0].lv
**CURRENT:** Quelle heure est-il aujourd'hui ?
**PROPOSED_FR:** Quel temps fait-il aujourd'hui ?
**Problēma:** La phrase actuelle demande l'heure, alors que « Wetter » concerne la météo.
**LV etalons (konteksts):** kāds laiks šodien?
**DE konteksts:** Wetter
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0710
**Card ID:** a1-wetter
**Field:** study.examples[4].lv
**CURRENT:** Nous parlons de temps.
**PROPOSED_FR:** Nous parlons du temps.
**Problēma:** La tournure française naturelle est « parler du temps » pour parler de la météo.
**LV etalons (konteksts):** mēs runājam par laiku.
**DE konteksts:** Wetter
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0711
**Card ID:** a1-wie
**Field:** study.examples[1].lv
**CURRENT:** Quel est ton nom
**PROPOSED_FR:** Comment t'appelles-tu ?
**Problēma:** La question source demande comment la personne s'appelle; la version actuelle est moins fidèle et incomplète.
**LV etalons (konteksts):** kā tevi sauc?
**DE konteksts:** wie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0712
**Card ID:** a1-zu
**Field:** frMain
**CURRENT:** À • À
**PROPOSED_FR:** À
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zu
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0713
**Card ID:** a1-zu
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zu
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0714
**Card ID:** a1-zu
**Field:** study.comparison[0].meaning
**CURRENT:** À / à / aussi / infinitif
**PROPOSED_FR:** À / à / trop / infinitif
**Problēma:** In this contrast, Latvian pārāk corresponds to French trop, not aussi.
**LV etalons (konteksts):** uz / pie / pārāk / infinitīvs
**DE konteksts:** zu
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0715
**Card ID:** a1-zug
**Field:** study.comparison[1].meaning
**CURRENT:** Chemin de fer / voyager en train
**PROPOSED_FR:** Chemin de fer
**Problēma:** The comparison field lists distinct meanings with a separator; owner decision is required.
**LV etalons (konteksts):** dzelzceļš / braukšana ar vilcienu
**DE konteksts:** Zug
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0716
**Card ID:** a1-zum
**Field:** frMain
**CURRENT:** À • À
**PROPOSED_FR:** À
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0717
**Card ID:** a1-zum
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0718
**Card ID:** a1-zum
**Field:** study.comparison[0].meaning
**CURRENT:** À/chez (qui ?)
**PROPOSED_FR:** À
**Problēma:** The comparison field lists distinct translations with a separator; owner decision is required.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0719
**Card ID:** a1-zum
**Field:** study.comparison[1].meaning
**CURRENT:** À/à (famille de l'épouse)
**PROPOSED_FR:** À (féminin)
**Problēma:** Latvian siev. dzimte means feminine gender, not the wife's family.
**LV etalons (konteksts):** uz / pie (siev. dzimte)
**DE konteksts:** zum
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0720
**Card ID:** a1-zum
**Field:** study.comparison[2].meaning
**CURRENT:** À / à / aussi
**PROPOSED_FR:** À / à / trop
**Problēma:** In this contrast, Latvian pārāk corresponds to French trop, not aussi.
**LV etalons (konteksts):** uz / pie / pārāk
**DE konteksts:** zum
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0721
**Card ID:** a1-zum
**Field:** study.comparison[3].meaning
**CURRENT:** Vers (villes/pays)
**PROPOSED_FR:** Vers
**Problēma:** The comparison field contains separated alternatives/context labels; owner decision is required.
**LV etalons (konteksts):** uz (pilsētas/valstis)
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0722
**Card ID:** a1-fernsehen
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Fernsehen (ich sehe fougère) est utilisé pour l'action. Das Fernsehen est utilisé pour un programme ou un média télévisé.
**PROPOSED_FR:** Fernsehen (ich sehe fern) est utilisé pour l'action. Das Fernsehen est utilisé pour un programme ou un média télévisé.
**Problēma:** Fougère is an erroneous French substitution for the German word fern.
**LV etalons (konteksts):** Par darbību lieto fernsehen (ich sehe fern). Par TV programmu vai mediju lieto das Fernsehen.
**DE konteksts:** fernsehen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0723
**Card ID:** a1-fernsehen
**Field:** study.important.text
**CURRENT:** Fernsehen = verbe (ich sehe fougère). das Fernsehen = nom, singulier seulement.
**PROPOSED_FR:** Fernsehen = verbe (ich sehe fern). das Fernsehen = nom, singulier seulement.
**Problēma:** Fougère is an erroneous French substitution for the German word fern.
**LV etalons (konteksts):** fernsehen = darbības vārds (ich sehe fern). das Fernsehen = lietvārds, tikai vienskaitlis.
**DE konteksts:** fernsehen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0724
**Card ID:** a1-essen
**Field:** study.examples[1].lv
**CURRENT:** Que veux-tu manger
**PROPOSED_FR:** Que voulez-vous manger ?
**Problēma:** The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsistent; punctuation is also missing.
**LV etalons (konteksts):** ko jūs gribat ēst?
**DE konteksts:** essen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0725
**Card ID:** a1-essen-study
**Field:** frMain
**CURRENT:** Alimentation • Repas
**PROPOSED_FR:** Alimentation
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**LV etalons (konteksts):** ēdiens • maltīte
**DE konteksts:** Essen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0726
**Card ID:** a1-essen-study
**Field:** study.translation
**CURRENT:** Alimentation • Repas
**PROPOSED_FR:** Alimentation
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**LV etalons (konteksts):** ēdiens • maltīte
**DE konteksts:** Essen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0727
**Card ID:** a1-essen-study
**Field:** study.examples[1].lv
**CURRENT:** Que veux-tu manger
**PROPOSED_FR:** Que voulez-vous manger ?
**Problēma:** The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsistent; punctuation is also missing.
**LV etalons (konteksts):** ko jūs gribat ēst?
**DE konteksts:** Essen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0728
**Card ID:** a1-ferien
**Field:** study.examples[0].lv
**CURRENT:** Le week-end, nous allons à la mer.
**PROPOSED_FR:** Pendant les vacances, nous allons à la mer.
**Problēma:** Ferien means holidays, not specifically the weekend.
**LV etalons (konteksts):** Brīvdienās mēs braucam pie jūras.
**DE konteksts:** Ferien
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0729
**Card ID:** a1-ferien
**Field:** study.examples[2].lv
**CURRENT:** Que fais-tu en vacances
**PROPOSED_FR:** Que faites-vous pendant les vacances ?
**Problēma:** The Latvian source uses formal/plural jūs, so French tu is inconsistent; punctuation is also missing.
**LV etalons (konteksts):** ko jūs darāt brīvdienās?
**DE konteksts:** Ferien
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0730
**Card ID:** a1-ferien
**Field:** study.examples[3].lv
**CURRENT:** L'école est fermée les jours fériés.
**PROPOSED_FR:** L'école est fermée pendant les vacances scolaires.
**Problēma:** Jours fériés means public holidays, whereas Ferien here means school holidays.
**LV etalons (konteksts):** skola brīvdienās ir slēgta.
**DE konteksts:** Ferien
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0731
**Card ID:** a1-ferien
**Field:** study.comparison[0].meaning
**CURRENT:** Pause scolaire/études (dsk. uniquement)
**PROPOSED_FR:** Pause scolaire/études (au pluriel uniquement)
**Problēma:** The abbreviation dsk. is not French and should be replaced with a French grammatical label.
**LV etalons (konteksts):** skolas/studiju brīvlaiks (tikai dsk.)
**DE konteksts:** Ferien
**Smagums:** MEDIUM
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0732
**Card ID:** a1-ferien
**Field:** study.comparison[1].meaning
**CURRENT:** Congé du travail (uniquement tous)
**PROPOSED_FR:** Congé du travail (au singulier uniquement)
**Problēma:** Tous is incorrect here; the Latvian source specifies singular, which is au singulier in French.
**LV etalons (konteksts):** atvaļinājums no darba (tikai vsk.)
**DE konteksts:** Ferien
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0733
**Card ID:** a1-urlaub
**Field:** study.examples[2].lv
**CURRENT:** J'ai des vacances la semaine prochaine.
**PROPOSED_FR:** Je suis en vacances la semaine prochaine.
**Problēma:** French normally says être en vacances rather than avoir des vacances in this context.
**LV etalons (konteksts):** nākamnedēļ man ir atvaļinājums.
**DE konteksts:** Urlaub
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0734
**Card ID:** a1-urlaub
**Field:** study.comparison[0].meaning
**CURRENT:** Congé du travail (uniquement tous)
**PROPOSED_FR:** Congé du travail (au singulier uniquement)
**Problēma:** Tous is incorrect here; the Latvian source specifies singular, which is au singulier in French.
**LV etalons (konteksts):** atvaļinājums no darba (tikai vsk.)
**DE konteksts:** Urlaub
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0735
**Card ID:** a1-urlaub
**Field:** study.comparison[1].meaning
**CURRENT:** Pause scolaire/études (dsk. uniquement)
**PROPOSED_FR:** Pause scolaire/études (au pluriel uniquement)
**Problēma:** The abbreviation dsk. is not French and should be replaced with a French grammatical label.
**LV etalons (konteksts):** skolas/studiju brīvlaiks (dsk. tikai)
**DE konteksts:** Urlaub
**Smagums:** MEDIUM
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0736
**Card ID:** a1-uhr
**Field:** study.examples[0].lv
**CURRENT:** Il est huit (huit heures).
**PROPOSED_FR:** Il est huit heures.
**Problēma:** « Il est huit » est incomplet en français standard ; la parenthèse crée une formulation maladroite.
**LV etalons (konteksts):** Ir astoņi (pulksten astoņi).
**DE konteksts:** Uhr
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0737
**Card ID:** a1-uhr
**Field:** study.examples[1].lv
**CURRENT:** Il est huit (huit heures).
**PROPOSED_FR:** Il est huit heures.
**Problēma:** « Il est huit » est incomplet en français standard ; la parenthèse crée une formulation maladroite.
**LV etalons (konteksts):** ir astoņi (pulksten astoņi).
**DE konteksts:** Uhr
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0738
**Card ID:** a1-uhr
**Field:** study.examples[5].lv
**CURRENT:** Appareil/heure sur l'horloge • Die Zeit
**PROPOSED_FR:** Appareil ou heure sur l'horloge
**Problēma:** « Die Zeit » est un segment allemand résiduel dans un champ français.
**LV etalons (konteksts):** ierīce/laiks pulkstenī; die Zeit
**DE konteksts:** Uhr
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0739
**Card ID:** a1-zeit
**Field:** frMain
**CURRENT:** Temps (instant / période de temps)
**PROPOSED_FR:** Temps (instant ou période de temps)
**Problēma:** La barre oblique sépare deux sens dans le champ learner-facing ; une formulation unifiée est préférable.
**LV etalons (konteksts):** laiks (brīdis / laika posms)
**DE konteksts:** Zeit
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0740
**Card ID:** a1-zeit
**Field:** study.translation
**CURRENT:** Temps (instant / période de temps)
**PROPOSED_FR:** Temps (instant ou période de temps)
**Problēma:** La barre oblique sépare deux sens dans le champ learner-facing ; une formulation unifiée est préférable.
**LV etalons (konteksts):** laiks (brīdis / laika posms)
**DE konteksts:** Zeit
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0741
**Card ID:** a1-zeit
**Field:** study.examples[1].lv
**CURRENT:** Je n'ai pas le temps
**PROPOSED_FR:** Je n'ai pas le temps.
**Problēma:** Le point final manque dans cet exemple français.
**LV etalons (konteksts):** man nav laika.
**DE konteksts:** Zeit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0742
**Card ID:** a1-zeit
**Field:** study.examples[2].lv
**CURRENT:** As-tu le temps
**PROPOSED_FR:** As-tu le temps ?
**Problēma:** Le point d'interrogation manque dans cette question française.
**LV etalons (konteksts):** vai tev ir laiks?
**DE konteksts:** Zeit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0743
**Card ID:** a1-einmal
**Field:** frMain
**CURRENT:** Une fois • Une fois
**PROPOSED_FR:** Une fois
**Problēma:** La traduction est répétée deux fois, ce qui crée une entrée d'étude redondante.
**LV etalons (konteksts):** vienreiz • reiz
**DE konteksts:** einmal
**Smagums:** LOW
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0744
**Card ID:** a1-einmal
**Field:** study.translation
**CURRENT:** Une fois • Une fois
**PROPOSED_FR:** Une fois
**Problēma:** La traduction est répétée deux fois, ce qui crée une entrée d'étude redondante.
**LV etalons (konteksts):** vienreiz • reiz
**DE konteksts:** einmal
**Smagums:** LOW
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0745
**Card ID:** a1-einmal
**Field:** study.examples[0].lv
**CURRENT:** J'étais une fois à Berlin.
**PROPOSED_FR:** Je suis allé une fois à Berlin.
**Problēma:** « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite passée.
**LV etalons (konteksts):** es reiz biju Berlīnē.
**DE konteksts:** einmal
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0746
**Card ID:** a1-einmal
**Field:** study.examples[1].lv
**CURRENT:** J'étais une fois à Berlin.
**PROPOSED_FR:** Je suis allé une fois à Berlin.
**Problēma:** « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite passée.
**LV etalons (konteksts):** Es reiz biju Berlīnē.
**DE konteksts:** einmal
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0747
**Card ID:** a1-noch-mal
**Field:** study.examples[1].lv
**CURRENT:** Encore une fois s'il te plaît
**PROPOSED_FR:** Encore une fois, s'il vous plaît.
**Problēma:** La source est polie ; « te » est incohérent avec « s'il vous plaît », et la ponctuation manque.
**LV etalons (konteksts):** vēlreiz, lūdzu.
**DE konteksts:** noch mal
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0748
**Card ID:** a1-noch-mal
**Field:** study.examples[2].lv
**CURRENT:** Dis-le encore
**PROPOSED_FR:** Dis-le encore.
**Problēma:** Le point final manque dans cet exemple français.
**LV etalons (konteksts):** pasaki to vēlreiz.
**DE konteksts:** noch mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0749
**Card ID:** a1-an
**Field:** study.translation
**CURRENT:** À • À • Présent
**PROPOSED_FR:** À
**Problēma:** Main translation field shows 3 learner-facing candidates (À | À | Présent)
**DE konteksts:** an
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0750
**Card ID:** a1-aus
**Field:** study.translation
**CURRENT:** De • Sortie
**PROPOSED_FR:** De
**Problēma:** Main translation field shows 2 learner-facing candidates (De | Sortie)
**DE konteksts:** aus
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0751
**Card ID:** a1-aufs
**Field:** study.translation
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_FR:** Vers
**Problēma:** Main translation field shows 3 learner-facing candidates (Vers | Sur | Où ?)
**DE konteksts:** aufs
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0752
**Card ID:** a1-besuchen-89
**Field:** lv
**CURRENT:** Pour assister • Pour visiter
**PROPOSED_FR:** Pour assister
**Problēma:** Main translation field shows 2 learner-facing candidates (Pour assister | Pour visiter)
**DE konteksts:** besuchen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0753
**Card ID:** a1-bringen
**Field:** study.translation
**CURRENT:** À emporter • À emporter
**PROPOSED_FR:** À emporter
**Problēma:** Main translation field shows 2 learner-facing candidates (À emporter | À emporter)
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0754
**Card ID:** a1-ein
**Field:** study.translation
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_FR:** Article indéfini
**Problēma:** Main translation field shows 3 learner-facing candidates (Article indéfini | Un | Quelqu'un)
**DE konteksts:** ein
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0755
**Card ID:** a1-eis
**Field:** study.translation
**CURRENT:** Glace • Glace
**PROPOSED_FR:** Glace
**Problēma:** Main translation field shows 2 learner-facing candidates (Glace | Glace)
**DE konteksts:** Eis
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0756
**Card ID:** a1-erst
**Field:** study.translation
**CURRENT:** Premier • Seulement
**PROPOSED_FR:** Premier
**Problēma:** Main translation field shows 2 learner-facing candidates (Premier | Seulement)
**DE konteksts:** erst
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0757
**Card ID:** a1-es
**Field:** study.translation
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_FR:** Il
**Problēma:** Main translation field shows 3 learner-facing candidates (Il | Il | Forme impersonnelle)
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0758
**Card ID:** a1-etwas
**Field:** study.translation
**CURRENT:** Quelque chose • Un peu
**PROPOSED_FR:** Quelque chose
**Problēma:** Main translation field shows 2 learner-facing candidates (Quelque chose | Un peu)
**DE konteksts:** etwas
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0759
**Card ID:** a1-euch
**Field:** study.translation
**CURRENT:** Vous • Vous
**PROPOSED_FR:** Vous
**Problēma:** Main translation field shows 2 learner-facing candidates (Vous | Vous)
**DE konteksts:** euch
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0760
**Card ID:** a1-fahren
**Field:** study.translation
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_FR:** Conduire
**Problēma:** Main translation field shows 3 learner-facing candidates (Conduire | Diriger | Emporter)
**DE konteksts:** fahren
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0761
**Card ID:** a1-finden
**Field:** study.translation
**CURRENT:** Trouver • Considérer
**PROPOSED_FR:** Trouver
**Problēma:** Main translation field shows 2 learner-facing candidates (Trouver | Considérer)
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0762
**Card ID:** a1-frau
**Field:** study.translation
**CURRENT:** Femme • Épouse
**PROPOSED_FR:** Femme
**Problēma:** Main translation field shows 2 learner-facing candidates (Femme | Épouse)
**DE konteksts:** Frau
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0763
**Card ID:** a1-fuer
**Field:** study.translation
**CURRENT:** Pour • Pour
**PROPOSED_FR:** Pour
**Problēma:** Main translation field shows 2 learner-facing candidates (Pour | Pour)
**DE konteksts:** für
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0764
**Card ID:** a1-Geschichte-233
**Field:** lv
**CURRENT:** Histoire • Histoire
**PROPOSED_FR:** Histoire
**Problēma:** Main translation field shows 2 learner-facing candidates (Histoire | Histoire)
**DE konteksts:** Geschichte
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0765
**Card ID:** a1-gleich
**Field:** study.translation
**CURRENT:** Immédiatement • Égal
**PROPOSED_FR:** Immédiatement
**Problēma:** Main translation field shows 2 learner-facing candidates (Immédiatement | Égal)
**DE konteksts:** gleich
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0766
**Card ID:** a1-halten
**Field:** study.translation
**CURRENT:** Maintenir • Arrêter
**PROPOSED_FR:** Maintenir
**Problēma:** Main translation field shows 2 learner-facing candidates (Maintenir | Arrêter)
**DE konteksts:** halten
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0767
**Card ID:** a1-heißen
**Field:** study.translation
**CURRENT:** Être appelé • Moyen
**PROPOSED_FR:** Être appelé
**Problēma:** Main translation field shows 2 learner-facing candidates (Être appelé | Moyen)
**DE konteksts:** heißen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0768
**Card ID:** a1-hoeren-study
**Field:** study.translation
**CURRENT:** Entendre • Écouter
**PROPOSED_FR:** Entendre
**Problēma:** Main translation field shows 2 learner-facing candidates (Entendre | Écouter)
**DE konteksts:** hören
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0769
**Card ID:** a1-hübsch-288
**Field:** lv
**CURRENT:** Propre • Agréable
**PROPOSED_FR:** Propre
**Problēma:** Main translation field shows 2 learner-facing candidates (Propre | Agréable)
**DE konteksts:** hübsch
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0770
**Card ID:** a1-ihr
**Field:** study.translation
**CURRENT:** Vous • Elle
**PROPOSED_FR:** Vous
**Problēma:** Main translation field shows 2 learner-facing candidates (Vous | Elle)
**DE konteksts:** ihr
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0771
**Card ID:** a1-im
**Field:** study.translation
**CURRENT:** Dans • Où ?
**PROPOSED_FR:** Dans
**Problēma:** Main translation field shows 2 learner-facing candidates (Dans | Où ?)
**DE konteksts:** im
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0772
**Card ID:** a1-ins
**Field:** study.translation
**CURRENT:** Dans • Dans • Où ?
**PROPOSED_FR:** Dans
**Problēma:** Main translation field shows 3 learner-facing candidates (Dans | Dans | Où ?)
**DE konteksts:** ins
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0773
**Card ID:** a1-jetzt-302
**Field:** lv
**CURRENT:** Maintenant • Actuellement
**PROPOSED_FR:** Maintenant
**Problēma:** Main translation field shows 2 learner-facing candidates (Maintenant | Actuellement)
**DE konteksts:** jetzt
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0774
**Card ID:** a1-kein
**Field:** study.translation
**CURRENT:** Personne • Rien
**PROPOSED_FR:** Personne
**Problēma:** Main translation field shows 2 learner-facing candidates (Personne | Rien)
**DE konteksts:** kein
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0775
**Card ID:** a1-können
**Field:** study.translation
**CURRENT:** Être capable de • Savoir
**PROPOSED_FR:** Être capable de
**Problēma:** Main translation field shows 2 learner-facing candidates (Être capable de | Savoir)
**DE konteksts:** können
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0776
**Card ID:** a1-land
**Field:** study.translation
**CURRENT:** Pays • Terrain
**PROPOSED_FR:** Pays
**Problēma:** Main translation field shows 2 learner-facing candidates (Pays | Terrain)
**DE konteksts:** Land
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0777
**Card ID:** a1-lang
**Field:** study.translation
**CURRENT:** Longue • Longue
**PROPOSED_FR:** Longue
**Problēma:** Main translation field shows 2 learner-facing candidates (Longue | Longue)
**DE konteksts:** lang
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0778
**Card ID:** a1-lassen
**Field:** study.translation
**CURRENT:** Partir • Laisser
**PROPOSED_FR:** Partir
**Problēma:** Main translation field shows 2 learner-facing candidates (Partir | Laisser)
**DE konteksts:** lassen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0779
**Card ID:** a1-laufen
**Field:** study.translation
**CURRENT:** Exécuter • Utiliser
**PROPOSED_FR:** Exécuter
**Problēma:** Main translation field shows 2 learner-facing candidates (Exécuter | Utiliser)
**DE konteksts:** laufen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0780
**Card ID:** a1-liegen
**Field:** study.translation
**CURRENT:** Être • Dormir
**PROPOSED_FR:** Être
**Problēma:** Main translation field shows 2 learner-facing candidates (Être | Dormir)
**DE konteksts:** liegen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0781
**Card ID:** a1-links-380
**Field:** lv
**CURRENT:** Gauche • Gauche
**PROPOSED_FR:** Gauche
**Problēma:** Main translation field shows 2 learner-facing candidates (Gauche | Gauche)
**DE konteksts:** links
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0782
**Card ID:** a1-machen
**Field:** study.translation
**CURRENT:** Faire • Faire
**PROPOSED_FR:** Faire
**Problēma:** Main translation field shows 2 learner-facing candidates (Faire | Faire)
**DE konteksts:** machen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0783
**Card ID:** a1-malen-391
**Field:** lv
**CURRENT:** Peindre • Peindre
**PROPOSED_FR:** Peindre
**Problēma:** Main translation field shows 2 learner-facing candidates (Peindre | Peindre)
**DE konteksts:** malen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0784
**Card ID:** a1-mann
**Field:** study.translation
**CURRENT:** Homme • Mari
**PROPOSED_FR:** Homme
**Problēma:** Main translation field shows 2 learner-facing candidates (Homme | Mari)
**DE konteksts:** Mann
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0785
**Card ID:** a1-nach
**Field:** study.translation
**CURRENT:** À • Après
**PROPOSED_FR:** À
**Problēma:** Main translation field shows 2 learner-facing candidates (À | Après)
**DE konteksts:** nach
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0786
**Card ID:** a1-natuerlich
**Field:** study.translation
**CURRENT:** Bien sûr • Naturel
**PROPOSED_FR:** Bien sûr
**Problēma:** Main translation field shows 2 learner-facing candidates (Bien sûr | Naturel)
**DE konteksts:** natürlich
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0787
**Card ID:** a1-nehmen
**Field:** study.translation
**CURRENT:** Prendre • Prendre
**PROPOSED_FR:** Prendre
**Problēma:** Main translation field shows 2 learner-facing candidates (Prendre | Prendre)
**DE konteksts:** nehmen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0788
**Card ID:** a1-nur-study
**Field:** study.translation
**CURRENT:** Seulement • Seulement
**PROPOSED_FR:** Seulement
**Problēma:** Main translation field shows 2 learner-facing candidates (Seulement | Seulement)
**DE konteksts:** nur
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0789
**Card ID:** a1-oder
**Field:** study.translation
**CURRENT:** Ou • Ou
**PROPOSED_FR:** Ou
**Problēma:** Main translation field shows 2 learner-facing candidates (Ou | Ou)
**DE konteksts:** oder
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0790
**Card ID:** a1-passen
**Field:** study.translation
**CURRENT:** Ajustement • Ajustement
**PROPOSED_FR:** Ajustement
**Problēma:** Main translation field shows 2 learner-facing candidates (Ajustement | Ajustement)
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0791
**Card ID:** a1-probieren
**Field:** study.translation
**CURRENT:** A essayer • A déguster
**PROPOSED_FR:** A essayer
**Problēma:** Main translation field shows 2 learner-facing candidates (A essayer | A déguster)
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0792
**Card ID:** a1-rechts-491
**Field:** lv
**CURRENT:** À droite • La droite
**PROPOSED_FR:** À droite
**Problēma:** Main translation field shows 2 learner-facing candidates (À droite | La droite)
**DE konteksts:** rechts
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0793
**Card ID:** a1-seite
**Field:** study.translation
**CURRENT:** Page • Côté
**PROPOSED_FR:** Page
**Problēma:** Main translation field shows 2 learner-facing candidates (Page | Côté)
**DE konteksts:** Seite
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0794
**Card ID:** a1-sich
**Field:** study.translation
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_FR:** Vous-même
**Problēma:** Main translation field shows 2 learner-facing candidates (Vous-même | Pour vous-même)
**DE konteksts:** sich
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0795
**Card ID:** a1-sicher
**Field:** study.translation
**CURRENT:** Sûr • Certainement
**PROPOSED_FR:** Sûr
**Problēma:** Main translation field shows 2 learner-facing candidates (Sûr | Certainement)
**DE konteksts:** sicher
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0796
**Card ID:** a1-sie-study
**Field:** study.translation
**CURRENT:** Ils/elle
**PROPOSED_FR:** Ils
**Problēma:** Main translation field shows 2 learner-facing candidates (Ils | elle)
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0797
**Card ID:** a1-über
**Field:** study.translation
**CURRENT:** Fini • Pour
**PROPOSED_FR:** Fini
**Problēma:** Main translation field shows 2 learner-facing candidates (Fini | Pour)
**DE konteksts:** über
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0798
**Card ID:** a1-um
**Field:** study.translation
**CURRENT:** Vers • Heures
**PROPOSED_FR:** Vers
**Problēma:** Main translation field shows 2 learner-facing candidates (Vers | Heures)
**DE konteksts:** um
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0799
**Card ID:** a1-vor
**Field:** study.translation
**CURRENT:** Avant • Devant
**PROPOSED_FR:** Avant
**Problēma:** Main translation field shows 2 learner-facing candidates (Avant | Devant)
**DE konteksts:** vor
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0800
**Card ID:** a1-was
**Field:** study.translation
**CURRENT:** Qui • Quoi
**PROPOSED_FR:** Qui
**Problēma:** Main translation field shows 2 learner-facing candidates (Qui | Quoi)
**DE konteksts:** was
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0801
**Card ID:** a1-wenn
**Field:** study.translation
**CURRENT:** Si • Quand
**PROPOSED_FR:** Si
**Problēma:** Main translation field shows 2 learner-facing candidates (Si | Quand)
**DE konteksts:** wenn
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0802
**Card ID:** a1-wer
**Field:** study.translation
**CURRENT:** Qui • Qui
**PROPOSED_FR:** Qui
**Problēma:** Main translation field shows 2 learner-facing candidates (Qui | Qui)
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0803
**Card ID:** a1-wie
**Field:** study.translation
**CURRENT:** Comment • Combien
**PROPOSED_FR:** Comment
**Problēma:** Main translation field shows 2 learner-facing candidates (Comment | Combien)
**DE konteksts:** wie
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0804
**Card ID:** a1-zu
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À
**Problēma:** Main translation field shows 2 learner-facing candidates (À | À)
**DE konteksts:** zu
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0805
**Card ID:** a1-zum
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À
**Problēma:** Main translation field shows 2 learner-facing candidates (À | À)
**DE konteksts:** zum
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0806
**Card ID:** a1-essen-study
**Field:** study.translation
**CURRENT:** Alimentation • Repas
**PROPOSED_FR:** Alimentation
**Problēma:** Main translation field shows 2 learner-facing candidates (Alimentation | Repas)
**DE konteksts:** Essen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0807
**Card ID:** a1-zeit
**Field:** study.translation
**CURRENT:** Temps (instant / période de temps)
**PROPOSED_FR:** Temps (instant
**Problēma:** Main translation field shows 2 learner-facing candidates (Temps (instant | période de temps))
**DE konteksts:** Zeit
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0808
**Card ID:** a1-einmal
**Field:** study.translation
**CURRENT:** Une fois • Une fois
**PROPOSED_FR:** Une fois
**Problēma:** Main translation field shows 2 learner-facing candidates (Une fois | Une fois)
**DE konteksts:** einmal
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 134/134 | FAIL |
| sectionAccents | FAIL |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |
