# FR–DE A1 POST-REPAIR pilns lingvistiskais audits (MASTER v1.12 · PR #683 HEAD)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.12** |
| **AUDIT MODE** | POST_REPAIR_FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `a2a769e8600291411a7a66eab0483dd4659c9151` |
| **DATASET_PRODUCTION_BLOB** | `0a22150352f93522f4ab1548f683c5830e32f7c5` |
| **WWW DATASET BLOB** | `0a22150352f93522f4ab1548f683c5830e32f7c5` |
| **LAST FINAL CLOSURE MAIN SHA** | `null` |
| **LAST FINAL CLOSURE DATASET BLOB** | `null` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **POST_REPAIR_PR683** |
| **OWNER HISTORY AVAILABLE** | YES |
| **OWNER HISTORY FILES LOADED** | fr-a1-owner-decisions-001-100-filled.md, fr-a1-owner-decisions-101-200-filled.md, fr-a1-owner-decisions-201-300-filled.md, fr-a1-owner-decisions-301-400-filled.md, fr-a1-owner-decisions-401-500-filled.md, fr-a1-owner-decisions-501-600-filled.md, fr-a1-owner-decisions-601-702-filled.md |
| **OWNER APPROVED FIELDS TOTAL** | **904** |
| **OWNER APPROVED FIELDS CHECKED** | **423** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **175** |
| **OWNER APPROVED FIELDS DRIFTED** | **248** |
| **OWNER HISTORY GATE** | **PASS** |
| **OWNER HISTORY LOADED** | YES (904 entries) |
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
| Study | **134/134** |
| RAW findings | **578** |
| NEW_VALIDATED_REAL_FINDINGS | **159** |
| OWNER_BACKLOG_FINAL | **159** |
| PREVIOUSLY_SEEN_RAW | **374** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **159** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **702/702 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **45** |
| sectionAccents | **199** |
| LV remnants | **227** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 195 |
| Deterministic | 383 |
| OWNER_DECISION_CONFIRMED | 45 |
| OWNER_DECISION_REOPEN_REQUIRED | **10** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **374** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **159** |
| OWNER_BACKLOG_FINAL | **159** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **PASS** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 702/702 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **0** · HIGH: **355** · MEDIUM: **146** · LOW: **32**

#### FR-A1-0001
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
#### FR-A1-0002
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
#### FR-A1-0003
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
#### FR-A1-0004
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
#### FR-A1-0005
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
#### FR-A1-0006
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
#### FR-A1-0007
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
#### FR-A1-0008
**Card ID:** a1-besuch
**Field:** entry[87].study.comparison[0].example
**CURRENT:** Danke für deinen Besuch. – Merci pour ta visite.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0009
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
#### FR-A1-0010
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
#### FR-A1-0011
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
#### FR-A1-0012
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
#### FR-A1-0013
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
#### FR-A1-0014
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
#### FR-A1-0015
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
#### FR-A1-0016
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
#### FR-A1-0017
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
#### FR-A1-0018
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
#### FR-A1-0019
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
#### FR-A1-0020
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
#### FR-A1-0021
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
#### FR-A1-0022
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
#### FR-A1-0023
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
#### FR-A1-0024
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
#### FR-A1-0025
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
#### FR-A1-0026
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
#### FR-A1-0027
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
#### FR-A1-0028
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
#### FR-A1-0029
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
#### FR-A1-0030
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
#### FR-A1-0031
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
#### FR-A1-0032
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
#### FR-A1-0033
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
#### FR-A1-0034
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
#### FR-A1-0035
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
#### FR-A1-0036
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
#### FR-A1-0037
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
#### FR-A1-0038
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
#### FR-A1-0039
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
#### FR-A1-0040
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
#### FR-A1-0041
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
#### FR-A1-0042
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
#### FR-A1-0043
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
#### FR-A1-0044
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
#### FR-A1-0045
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
#### FR-A1-0046
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
#### FR-A1-0047
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
#### FR-A1-0048
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
#### FR-A1-0049
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
#### FR-A1-0050
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
#### FR-A1-0051
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
#### FR-A1-0052
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
#### FR-A1-0053
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
#### FR-A1-0054
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
#### FR-A1-0055
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
#### FR-A1-0056
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
#### FR-A1-0057
**Card ID:** a1-fussball-study
**Field:** entry[218].study.explanation[2]
**CURRENT:** die Fußbälle désigne des ballons de football.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0058
**Card ID:** a1-fussball-study
**Field:** entry[218].study.important[0]
**CURRENT:** die Fußbälle = ballons de football.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0059
**Card ID:** a1-gefallen-study
**Field:** entry[225].study.comparison[0].example
**CURRENT:** Das gefällt mir. – Cela me plaît.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0060
**Card ID:** a1-gefallen-study
**Field:** entry[225].study.comparison[1].word
**CURRENT:** mögen
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0061
**Card ID:** a1-gefallen-study
**Field:** entry[225].study.tip[0]
**CURRENT:** À retenir : Das gefällt mir.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0062
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
#### FR-A1-0063
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
#### FR-A1-0064
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
#### FR-A1-0065
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
#### FR-A1-0066
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
#### FR-A1-0067
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
#### FR-A1-0068
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
#### FR-A1-0069
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
#### FR-A1-0070
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
#### FR-A1-0072
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
#### FR-A1-0073
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
#### FR-A1-0074
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
#### FR-A1-0075
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
#### FR-A1-0076
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
#### FR-A1-0077
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
#### FR-A1-0078
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
#### FR-A1-0079
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
#### FR-A1-0080
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
#### FR-A1-0081
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
#### FR-A1-0082
**Card ID:** a1-huebsch
**Field:** entry[288].study.explanation[0]
**CURRENT:** Idée principale : hübsch signifie joli ou agréable à regarder.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0083
**Card ID:** a1-huebsch
**Field:** entry[288].study.explanation[1]
**CURRENT:** hübsch décrit souvent l'apparence.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0084
**Card ID:** a1-huebsch
**Field:** entry[288].study.comparison[0].word
**CURRENT:** hübsch
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0085
**Card ID:** a1-huebsch
**Field:** entry[288].study.comparison[0].example
**CURRENT:** Das ist ein hübsches Kleid. – C'est une jolie robe.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0086
**Card ID:** a1-huebsch
**Field:** entry[288].study.comparison[1].word
**CURRENT:** schön
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0087
**Card ID:** a1-huebsch
**Field:** entry[288].study.comparison[1].example
**CURRENT:** Der Garten ist schön. – Le jardin est beau.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0088
**Card ID:** a1-huebsch
**Field:** entry[288].study.tip.text
**CURRENT:** hübsch décrit surtout une jolie apparence ; nett décrit une personne aimable.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0089
**Card ID:** a1-huebsch
**Field:** entry[288].study.important[0]
**CURRENT:** hübsch n'est pas une traduction universelle de gentil.
**PROPOSED_FR:** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0090
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
#### FR-A1-0091
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
#### FR-A1-0092
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
#### FR-A1-0093
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
#### FR-A1-0094
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
#### FR-A1-0095
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
#### FR-A1-0096
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
#### FR-A1-0097
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
#### FR-A1-0098
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
#### FR-A1-0099
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
#### FR-A1-0100
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
#### FR-A1-0101
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
#### FR-A1-0102
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
#### FR-A1-0103
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
#### FR-A1-0104
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
#### FR-A1-0105
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
#### FR-A1-0106
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
#### FR-A1-0107
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
#### FR-A1-0108
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
#### FR-A1-0109
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
#### FR-A1-0110
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
#### FR-A1-0111
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
#### FR-A1-0112
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
#### FR-A1-0113
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
#### FR-A1-0114
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
#### FR-A1-0115
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
#### FR-A1-0116
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
#### FR-A1-0117
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
#### FR-A1-0118
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
#### FR-A1-0119
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
#### FR-A1-0120
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
#### FR-A1-0121
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
#### FR-A1-0122
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
#### FR-A1-0123
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
#### FR-A1-0124
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
#### FR-A1-0125
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
#### FR-A1-0126
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
#### FR-A1-0127
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
#### FR-A1-0128
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
#### FR-A1-0129
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
#### FR-A1-0130
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
#### FR-A1-0131
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
#### FR-A1-0132
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
#### FR-A1-0133
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
#### FR-A1-0134
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
#### FR-A1-0135
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
#### FR-A1-0136
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
#### FR-A1-0137
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
#### FR-A1-0138
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
#### FR-A1-0139
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
#### FR-A1-0140
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
#### FR-A1-0141
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
#### FR-A1-0142
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
#### FR-A1-0143
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
#### FR-A1-0144
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
#### FR-A1-0145
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
#### FR-A1-0146
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
#### FR-A1-0147
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
#### FR-A1-0148
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
#### FR-A1-0149
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
#### FR-A1-0150
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
#### FR-A1-0151
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
#### FR-A1-0152
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
#### FR-A1-0153
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
#### FR-A1-0154
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
#### FR-A1-0155
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
#### FR-A1-0156
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
#### FR-A1-0157
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
#### FR-A1-0158
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
#### FR-A1-0160
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
#### FR-A1-0161
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
#### FR-A1-0162
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
#### FR-A1-0163
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
#### FR-A1-0164
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
#### FR-A1-0165
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
#### FR-A1-0166
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
#### FR-A1-0167
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
#### FR-A1-0168
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
#### FR-A1-0169
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
#### FR-A1-0170
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
#### FR-A1-0171
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
#### FR-A1-0172
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
#### FR-A1-0173
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
#### FR-A1-0174
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
#### FR-A1-0175
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
#### FR-A1-0176
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
#### FR-A1-0177
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
#### FR-A1-0178
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
#### FR-A1-0179
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
#### FR-A1-0180
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
#### FR-A1-0181
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
#### FR-A1-0182
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
#### FR-A1-0183
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
#### FR-A1-0184
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
#### FR-A1-0185
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
#### FR-A1-0186
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
#### FR-A1-0187
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
#### FR-A1-0188
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
#### FR-A1-0190
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
#### FR-A1-0191
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
#### FR-A1-0192
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
#### FR-A1-0193
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
#### FR-A1-0194
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
#### FR-A1-0195
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
#### FR-A1-0196
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
#### FR-A1-0197
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
#### FR-A1-0198
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
#### FR-A1-0199
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
#### FR-A1-0200
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
#### FR-A1-0201
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
#### FR-A1-0202
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
#### FR-A1-0203
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
#### FR-A1-0204
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
#### FR-A1-0205
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
#### FR-A1-0206
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
#### FR-A1-0207
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
#### FR-A1-0208
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
#### FR-A1-0209
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
#### FR-A1-0210
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
#### FR-A1-0211
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
#### FR-A1-0212
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
#### FR-A1-0213
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
#### FR-A1-0214
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
#### FR-A1-0215
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
#### FR-A1-0216
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
#### FR-A1-0217
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
#### FR-A1-0218
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
#### FR-A1-0219
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
#### FR-A1-0220
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
#### FR-A1-0221
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
#### FR-A1-0222
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
#### FR-A1-0223
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
#### FR-A1-0224
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
#### FR-A1-0225
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
#### FR-A1-0226
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
#### FR-A1-0227
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
#### FR-A1-0228
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
#### FR-A1-0229
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
#### FR-A1-0230
**Card ID:** a1-klein-study
**Field:** study.sectionAccents (examples)
**CURRENT:** pièce
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0231
**Card ID:** a1-klein-study
**Field:** study.sectionAccents (examples)
**CURRENT:** L'enfant
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0232
**Card ID:** a1-auch-study
**Field:** study.sectionAccents (examples)
**CURRENT:** viens
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0233
**Card ID:** a1-auch-study
**Field:** study.sectionAccents (examples)
**CURRENT:** Elle
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0234
**Card ID:** a1-aufs
**Field:** study.sectionAccents (examples)
**CURRENT:** Venez
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0235
**Card ID:** a1-baden
**Field:** study.sectionAccents (examples)
**CURRENT:** vais
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0236
**Card ID:** a1-besuch
**Field:** study.sectionAccents (?)
**CURRENT:** Missing sectionAccents present in LV
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Missing sectionAccents present in LV
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0237
**Card ID:** a1-besuchen
**Field:** study.sectionAccents (?)
**CURRENT:** Missing sectionAccents present in LV
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Missing sectionAccents present in LV
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0238
**Card ID:** a1-bringen
**Field:** study.sectionAccents (examples)
**CURRENT:** Apportez
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0239
**Card ID:** a1-bringen
**Field:** study.sectionAccents (examples)
**CURRENT:** ramènerai
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0240
**Card ID:** a1-da
**Field:** study.sectionAccents (examples)
**CURRENT:** Venez
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0241
**Card ID:** a1-dieser
**Field:** study.sectionAccents (examples)
**CURRENT:** J'aime
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0242
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
#### FR-A1-0243
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
#### FR-A1-0244
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
#### FR-A1-0245
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
#### FR-A1-0246
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
#### FR-A1-0247
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
#### FR-A1-0248
**Card ID:** a1-fahren
**Field:** study.sectionAccents (examples)
**CURRENT:** ramènerai
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0249
**Card ID:** a1-finden
**Field:** study.sectionAccents (examples)
**CURRENT:** Avez
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0250
**Card ID:** a1-finden
**Field:** study.sectionAccents (examples)
**CURRENT:** Cela
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0251
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
#### FR-A1-0252
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
#### FR-A1-0253
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
#### FR-A1-0254
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
#### FR-A1-0255
**Card ID:** a1-gross-study
**Field:** study.sectionAccents (examples)
**CURRENT:** maison
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0256
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
#### FR-A1-0257
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
#### FR-A1-0258
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
#### FR-A1-0259
**Card ID:** a1-hoch-study
**Field:** study.sectionAccents (examples)
**CURRENT:** montagne
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0260
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
#### FR-A1-0261
**Card ID:** a1-huebsch
**Field:** study.sectionAccents (?)
**CURRENT:** Missing sectionAccents present in LV
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Missing sectionAccents present in LV
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0262
**Card ID:** a1-ihr
**Field:** study.sectionAccents (examples)
**CURRENT:** Viens
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0263
**Card ID:** a1-ihr
**Field:** study.sectionAccents (examples)
**CURRENT:** habites
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0264
**Card ID:** a1-im
**Field:** study.sectionAccents (examples)
**CURRENT:** suis
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0265
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
#### FR-A1-0266
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
#### FR-A1-0267
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
#### FR-A1-0268
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
#### FR-A1-0269
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
#### FR-A1-0270
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
#### FR-A1-0271
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
#### FR-A1-0272
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
#### FR-A1-0273
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
#### FR-A1-0274
**Card ID:** a1-liegen
**Field:** study.sectionAccents (examples)
**CURRENT:** dort
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0275
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
#### FR-A1-0276
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
#### FR-A1-0277
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
#### FR-A1-0278
**Card ID:** a1-mögen
**Field:** study.sectionAccents (examples)
**CURRENT:** Aimez
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0279
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
#### FR-A1-0280
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
#### FR-A1-0281
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
#### FR-A1-0282
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
#### FR-A1-0283
**Card ID:** a1-müssen
**Field:** study.sectionAccents (examples)
**CURRENT:** Vous
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0284
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
#### FR-A1-0285
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
#### FR-A1-0286
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
#### FR-A1-0287
**Card ID:** a1-nur-study
**Field:** study.sectionAccents (examples)
**CURRENT:** Vous
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0288
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
#### FR-A1-0289
**Card ID:** a1-ob
**Field:** study.sectionAccents (examples)
**CURRENT:** Vous
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0290
**Card ID:** a1-oder
**Field:** study.sectionAccents (examples)
**CURRENT:** Vous
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0291
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
#### FR-A1-0292
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
#### FR-A1-0293
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
#### FR-A1-0294
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
#### FR-A1-0295
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
#### FR-A1-0296
**Card ID:** a1-sich
**Field:** study.sectionAccents (examples)
**CURRENT:** prend
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0297
**Card ID:** a1-sie-study
**Field:** study.sectionAccents (examples)
**CURRENT:** cuisines
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0298
**Card ID:** a1-sie-study-2
**Field:** study.sectionAccents (examples)
**CURRENT:** cuisines
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0299
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
#### FR-A1-0300
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
#### FR-A1-0301
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
#### FR-A1-0302
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
#### FR-A1-0303
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
#### FR-A1-0304
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
#### FR-A1-0305
**Card ID:** a1-um
**Field:** study.sectionAccents (examples)
**CURRENT:** fait
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0306
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
#### FR-A1-0307
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
#### FR-A1-0308
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
#### FR-A1-0309
**Card ID:** a1-verstehen
**Field:** study.sectionAccents (examples)
**CURRENT:** peux
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0310
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
#### FR-A1-0311
**Card ID:** a1-wer
**Field:** study.sectionAccents (examples)
**CURRENT:** Qu'est
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0312
**Card ID:** a1-wer
**Field:** study.sectionAccents (examples)
**CURRENT:** Lequel
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0313
**Card ID:** a1-werden
**Field:** study.sectionAccents (examples)
**CURRENT:** fait
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0314
**Card ID:** a1-werden
**Field:** study.sectionAccents (examples)
**CURRENT:** suis
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0315
**Card ID:** a1-wetter
**Field:** study.sectionAccents (examples)
**CURRENT:** Quelle
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0316
**Card ID:** a1-wie
**Field:** study.sectionAccents (examples)
**CURRENT:** Quel
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0317
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
#### FR-A1-0318
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
#### FR-A1-0319
**Card ID:** a1-urlaub
**Field:** study.sectionAccents (examples)
**CURRENT:** J'ai
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0320
**Card ID:** a1-uhr
**Field:** study.sectionAccents (examples)
**CURRENT:** Appareil/heure
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0321
**Card ID:** a1-einmal
**Field:** study.sectionAccents (examples)
**CURRENT:** J'étais
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0322
**Card ID:** a1-klein
**Field:** study.sectionAccents.examples.lv
**CURRENT:** pièce
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "pièce" nav atrodams sadaļā examples
**DE konteksts:** klein
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0323
**Card ID:** a1-klein
**Field:** study.sectionAccents.examples.lv
**CURRENT:** L'enfant
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "L'enfant" nav atrodams sadaļā examples
**DE konteksts:** klein
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0324
**Card ID:** a1-an
**Field:** study.sectionAccents.tip.left
**CURRENT:** sienas
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "sienas" nav atrodams sadaļā tip
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0325
**Card ID:** a1-an
**Field:** study.sectionAccents.tip.left
**CURRENT:** loga
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "loga" nav atrodams sadaļā tip
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0326
**Card ID:** a1-an
**Field:** study.sectionAccents.tip.left
**CURRENT:** malas
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "malas" nav atrodams sadaļā tip
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0327
**Card ID:** a1-du-149
**Field:** frText
**CURRENT:** Toi
**PROPOSED_FR:** Tu
**Problēma:** « du » est un pronom sujet allemand ; « toi » est une forme tonique française, pas le sujet neutre attendu.
**LV etalons (konteksts):** tu
**DE konteksts:** du
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0328
**Card ID:** a1-Filzstift-186
**Field:** frText
**CURRENT:** Stylo feutre
**PROPOSED_FR:** Stylo-feutre
**Problēma:** Le nom composé français s’écrit normalement avec un trait d’union : stylo-feutre.
**LV etalons (konteksts):** flomāsters
**DE konteksts:** Filzstift
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0329
**Card ID:** a1-an
**Field:** frMain
**CURRENT:** À • À • Présent
**PROPOSED_FR:** À
**Problēma:** Le champ learner-facing contient plusieurs traductions séparées par des puces; un choix éditorial est nécessaire.
**LV etalons (konteksts):** pie
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0330
**Card ID:** a1-an
**Field:** study.translation
**CURRENT:** À • À • Présent
**PROPOSED_FR:** À
**Problēma:** Le champ contient plusieurs traductions séparées par des puces; un choix éditorial est nécessaire.
**LV etalons (konteksts):** pie
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0332
**Card ID:** a1-ab
**Field:** study.comparison[1].meaning
**CURRENT:** De quelqu'un/quelque chose • Origine
**PROPOSED_FR:** De quelqu'un ou de quelque chose (origine)
**Problēma:** Le champ juxtapose plusieurs formulations avec une barre oblique et une puce.
**LV etalons (konteksts):** no kāda/kaut kā • izcelsme
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0336
**Card ID:** a1-aus
**Field:** frMain
**CURRENT:** De • Sortie
**PROPOSED_FR:** De
**Problēma:** Le champ learner-facing contient deux traductions distinctes séparées par une puce.
**LV etalons (konteksts):** no
**DE konteksts:** aus
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0337
**Card ID:** a1-aus
**Field:** study.translation
**CURRENT:** De • Sortie
**PROPOSED_FR:** De
**Problēma:** Le champ contient deux traductions distinctes séparées par une puce.
**LV etalons (konteksts):** no
**DE konteksts:** aus
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0338
**Card ID:** a1-aufs
**Field:** frMain
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_FR:** Vers
**Problēma:** Le champ learner-facing contient plusieurs traductions séparées par des puces.
**LV etalons (konteksts):** uz
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0339
**Card ID:** a1-aufs
**Field:** study.translation
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_FR:** Vers
**Problēma:** Le champ contient plusieurs traductions séparées par des puces.
**LV etalons (konteksts):** uz
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0340
**Card ID:** a1-aufs
**Field:** study.examples[4].lv
**CURRENT:** Il monte à cheval.
**PROPOSED_FR:** Il monte sur le cheval.
**Problēma:** « Monter à cheval » signifie pratiquer l'équitation, pas monter sur le cheval comme le précise la source.
**LV etalons (konteksts):** Viņš uzlec zirgam mugurā.
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0341
**Card ID:** a1-baden
**Field:** frMain
**CURRENT:** Nager
**PROPOSED_FR:** Se baigner
**Problēma:** « Nager » correspond à schwimmen; baden signifie ici « se baigner ».
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0342
**Card ID:** a1-baden
**Field:** study.comparison[3].meaning
**CURRENT:** Allez nager
**PROPOSED_FR:** Aller nager
**Problēma:** Dans une liste de significations, l'infinitif « aller nager » est requis, non l'impératif « allez nager ».
**LV etalons (konteksts):** iet peldēt
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0343
**Card ID:** a1-bei
**Field:** frMain
**CURRENT:** À
**PROPOSED_FR:** Chez
**Problēma:** « À » est trop vague et ne rend pas le sens principal de bei, notamment la présence chez quelqu'un.
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0344
**Card ID:** a1-bitte
**Field:** study.examples[2].lv
**CURRENT:** Une tasse de café, s'il vous plaît.
**PROPOSED_FR:** S'il vous plaît !
**Problēma:** La phrase française ajoute une tasse de café, absente de la source et du sens de « Lūdzu ! ».
**LV etalons (konteksts):** Lūdzu!
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0346
**Card ID:** a1-bleiben
**Field:** study.examples[3].lv
**CURRENT:** Je rentre à la maison
**PROPOSED_FR:** Je reste à la maison.
**Problēma:** « Je rentre » signifie que je vais ou retourne chez moi, contrairement à bleiben (« rester »).
**LV etalons (konteksts):** es eju mājās.
**DE konteksts:** bleiben
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Rester
**Statuss:** PENDING
#### FR-A1-0347
**Card ID:** a1-bringen
**Field:** study.translation
**CURRENT:** À emporter • À emporter
**PROPOSED_FR:** Apporter
**Problēma:** Le champ répète une expression qui signifie « à emporter » ; bringen se traduit ici par « apporter ».
**LV etalons (konteksts):** atnest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0348
**Card ID:** a1-da
**Field:** study.examples[1].lv
**CURRENT:** J'étais là
**PROPOSED_FR:** J'étais là.
**Problēma:** Il manque le point final à cette phrase française complète.
**LV etalons (konteksts):** es biju tur.
**DE konteksts:** da
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0351
**Card ID:** a1-dass
**Field:** study.comparison[1].meaning
**CURRENT:** Parce que • Parce que
**PROPOSED_FR:** Parce que
**Problēma:** Le champ contient deux éléments séparés par une puce, mais la traduction française est dupliquée.
**LV etalons (konteksts):** jo • tāpēc ka
**DE konteksts:** dass
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0352
**Card ID:** a1-ein
**Field:** frMain
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_FR:** Article indéfini
**Problēma:** Le champ contient plusieurs traductions distinctes et « Quelqu'un » ne traduit pas ein.
**LV etalons (konteksts):** nenoteiktais artikuls
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0353
**Card ID:** a1-ein
**Field:** study.translation
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_FR:** Article indéfini • Un
**Problēma:** Quelqu'un correspond à jemand, pas à ein.
**LV etalons (konteksts):** nenoteiktais artikuls
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0354
**Card ID:** a1-eis
**Field:** frMain
**CURRENT:** Glace • Glace
**PROPOSED_FR:** Glace
**Problēma:** Deux sens distincts sont présentés, mais la traduction française les rend identiques.
**LV etalons (konteksts):** ledus • saldējums
**DE konteksts:** Eis
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Glace
**Statuss:** PENDING
#### FR-A1-0355
**Card ID:** a1-eis
**Field:** study.translation
**CURRENT:** Glace • Glace
**PROPOSED_FR:** Glace
**Problēma:** Deux traductions distinctes sont séparées par une puce et ne sont pas différenciées en français.
**LV etalons (konteksts):** ledus • saldējums
**DE konteksts:** Eis
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0356
**Card ID:** a1-eis
**Field:** study.comparison[0].meaning
**CURRENT:** Glace / glace
**PROPOSED_FR:** Glace
**Problēma:** Le champ contient deux traductions distinctes séparées par une barre oblique.
**LV etalons (konteksts):** ledus / saldējums
**DE konteksts:** Eis
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0357
**Card ID:** a1-eis
**Field:** study.comparison[1].meaning
**CURRENT:** Il va neiger
**PROPOSED_FR:** Neige
**Problēma:** « Il va neiger » signifie qu'il neigera, tandis que sniegs signifie « neige » comme nom.
**LV etalons (konteksts):** sniegs
**DE konteksts:** Eis
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0359
**Card ID:** a1-erst
**Field:** study.translation
**CURRENT:** Premier • Seulement
**PROPOSED_FR:** D'abord • Seulement
**Problēma:** « Premier » est un adjectif; erst se traduit ici par « d'abord » ou « seulement » selon le contexte.
**LV etalons (konteksts):** tikai
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0360
**Card ID:** a1-erst
**Field:** study.comparison[0].meaning
**CURRENT:** Premier • Seulement
**PROPOSED_FR:** D'abord • Seulement
**Problēma:** « Premier » ne fonctionne pas comme traduction adverbiale de vispirms.
**LV etalons (konteksts):** vispirms • tikai
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0361
**Card ID:** a1-erst
**Field:** study.comparison[1].meaning
**CURRENT:** Premièrement • Au début
**PROPOSED_FR:** D'abord • Au début
**Problēma:** « Premièrement » traduit une énumération, pas le sens temporel de vispirms ici.
**LV etalons (konteksts):** vispirms • sākumā
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0362
**Card ID:** a1-es
**Field:** frMain
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_FR:** Il • Forme impersonnelle
**Problēma:** Le champ répète « Il » et présente plusieurs traductions séparées par des puces.
**LV etalons (konteksts):** tas
**DE konteksts:** es
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0363
**Card ID:** a1-es
**Field:** study.translation
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_FR:** Il • Forme impersonnelle
**Problēma:** Le champ répète « Il » et présente plusieurs traductions séparées par des puces.
**LV etalons (konteksts):** tas
**DE konteksts:** es
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0365
**Card ID:** a1-etwas
**Field:** study.translation
**CURRENT:** Quelque chose • Un peu
**PROPOSED_FR:** Quelque chose • Un peu
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par une puce.
**LV etalons (konteksts):** kaut kas
**DE konteksts:** etwas
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0366
**Card ID:** a1-etwas
**Field:** study.examples[1].lv
**CURRENT:** As-tu du temps
**PROPOSED_FR:** As-tu un peu de temps ?
**Problēma:** La traduction omet le sens quantitatif de nedaudz et la ponctuation interrogative.
**LV etalons (konteksts):** vai tev ir nedaudz laika?
**DE konteksts:** etwas
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0367
**Card ID:** a1-etwas
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : chose → quelque chose • Degré → légèrement.
**PROPOSED_FR:** Rappelez-vous : chose → quelque chose • Degré → un peu.
**Problēma:** « Légèrement » signifie slightly; « un peu » correspond directement au sens de nedaudz.
**LV etalons (konteksts):** pakāpe → nedaudz
**DE konteksts:** etwas
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0368
**Card ID:** a1-etwas
**Field:** study.comparison[0].meaning
**CURRENT:** Quelque chose / un peu
**PROPOSED_FR:** Quelque chose
**Problēma:** Le champ contient deux traductions distinctes séparées par une barre oblique.
**LV etalons (konteksts):** kaut kas / nedaudz
**DE konteksts:** etwas
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0369
**Card ID:** a1-euch
**Field:** study.translation
**CURRENT:** Vous • Vous
**PROPOSED_FR:** Vous
**Problēma:** Le champ répète « Vous » et présente plusieurs traductions séparées par une puce.
**LV etalons (konteksts):** jūs • jums
**DE konteksts:** euch
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0372
**Card ID:** a1-fahren
**Field:** frMain
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_FR:** Conduire
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par des puces.
**LV etalons (konteksts):** braukt
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0373
**Card ID:** a1-fahren
**Field:** study.translation
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_FR:** Conduire
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par des puces.
**LV etalons (konteksts):** braukt
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0374
**Card ID:** a1-fahren
**Field:** study.comparison[0].meaning
**CURRENT:** Prendre le transport
**PROPOSED_FR:** Voyager en véhicule
**Problēma:** « Prendre le transport » est peu naturel en français pour exprimer le déplacement en véhicule.
**LV etalons (konteksts):** braukt ar transportu
**DE konteksts:** fahren
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0375
**Card ID:** a1-fahren
**Field:** study.comparison[1].meaning
**CURRENT:** Allez à pied
**PROPOSED_FR:** Aller à pied
**Problēma:** L'impératif « Allez » ne convient pas à une entrée lexicale glossée par un infinitif.
**LV etalons (konteksts):** iet kājām
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0376
**Card ID:** a1-fahren
**Field:** study.comparison[2].meaning
**CURRENT:** Courir / partir
**PROPOSED_FR:** Courir / marcher
**Problēma:** « Partir » ne traduit pas iet dans le sens de marcher; le gloss doit rester cohérent avec la source.
**LV etalons (konteksts):** skriet / iet
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0377
**Card ID:** a1-fahren
**Field:** study.comparison[3].meaning
**CURRENT:** Apporter/livrer
**PROPOSED_FR:** Emmener
**Problēma:** Fahren ne signifie pas généralement « apporter/livrer »; pour des personnes, le sens est « emmener ».
**LV etalons (konteksts):** atnest / nogādāt
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0378
**Card ID:** a1-finden
**Field:** frMain
**CURRENT:** Trouver • Considérer
**PROPOSED_FR:** Trouver
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par une puce.
**LV etalons (konteksts):** atrast
**DE konteksts:** finden
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0379
**Card ID:** a1-finden
**Field:** study.translation
**CURRENT:** Trouver • Considérer
**PROPOSED_FR:** Trouver • Penser
**Problēma:** Dans le sens d'une opinion, finden se traduit naturellement par « trouver » ou « penser », pas « considérer ».
**LV etalons (konteksts):** atrast
**DE konteksts:** finden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0380
**Card ID:** a1-finden
**Field:** study.comparison[0].meaning
**CURRENT:** Trouver / considérer
**PROPOSED_FR:** Trouver / penser
**Problēma:** Le champ contient deux traductions distinctes séparées par une barre oblique.
**LV etalons (konteksts):** atrast / uzskatīt
**DE konteksts:** finden
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0381
**Card ID:** a1-frau
**Field:** study.translation
**CURRENT:** Femme • Épouse
**PROPOSED_FR:** Femme • Épouse
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par une puce.
**LV etalons (konteksts):** sieviete
**DE konteksts:** Frau
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0383
**Card ID:** a1-fuer
**Field:** study.translation
**CURRENT:** Pour • Pour
**PROPOSED_FR:** Pour
**Problēma:** Le champ répète « Pour » et présente plusieurs traductions séparées par une puce.
**LV etalons (konteksts):** priekš
**DE konteksts:** für
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0384
**Card ID:** a1-fuer
**Field:** study.examples[3].lv
**CURRENT:** Combien payez-vous pour une voiture ?
**PROPOSED_FR:** Combien paies-tu pour une voiture ?
**Problēma:** Le français emploie vous, alors que la source utilise le singulier informel tu.
**LV etalons (konteksts):** cik tu maksā par auto?
**DE konteksts:** für
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0385
**Card ID:** a1-geben
**Field:** study.examples[2].lv
**CURRENT:** Je prends le livre
**PROPOSED_FR:** Je donne le livre.
**Problēma:** Le français exprime prendre, alors que le mot allemand cible geben signifie donner.
**LV etalons (konteksts):** es paņemu grāmatu.
**DE konteksts:** geben
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Donner
**Statuss:** PENDING
#### FR-A1-0386
**Card ID:** a1-geben
**Field:** study.examples[3].lv
**CURRENT:** Je reçois un cadeau
**PROPOSED_FR:** Je donne un cadeau.
**Problēma:** Le français exprime recevoir, alors que le mot allemand cible geben signifie donner.
**LV etalons (konteksts):** es saņemu dāvanu.
**DE konteksts:** geben
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Donner
**Statuss:** PENDING
#### FR-A1-0387
**Card ID:** a1-geben
**Field:** study.comparison[2].meaning
**CURRENT:** Recevoir/obtenir
**PROPOSED_FR:** Recevoir ou obtenir
**Problēma:** Deux traductions distinctes sont réunies dans un champ learner-facing avec une barre oblique.
**LV etalons (konteksts):** saņemt / dabūt
**DE konteksts:** geben
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0388
**Card ID:** a1-geben
**Field:** study.comparison[3].meaning
**CURRENT:** Apporter/livrer
**PROPOSED_FR:** Apporter ou livrer
**Problēma:** Deux traductions distinctes sont réunies dans un champ learner-facing avec une barre oblique.
**LV etalons (konteksts):** atnest / nogādāt
**DE konteksts:** geben
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0389
**Card ID:** a1-gleich
**Field:** study.translation
**CURRENT:** Immédiatement • Égal
**PROPOSED_FR:** Immédiatement ou égal
**Problēma:** Deux sens distincts sont réunis dans le champ learner-facing avec une puce.
**LV etalons (konteksts):** tūlīt
**DE konteksts:** gleich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0390
**Card ID:** a1-halten
**Field:** study.translation
**CURRENT:** Maintenir • Arrêter
**PROPOSED_FR:** Maintenir ou arrêter
**Problēma:** Deux sens distincts sont réunis dans le champ learner-facing avec une puce.
**LV etalons (konteksts):** turēt
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0393
**Card ID:** a1-hand-study
**Field:** study.examples[2].lv
**CURRENT:** J'ai mal au bras.
**PROPOSED_FR:** J'ai mal à la main.
**Problēma:** Le français traduit bras, mais le mot allemand cible Hand signifie main.
**LV etalons (konteksts):** man sāp roka.
**DE konteksts:** Hand
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0394
**Card ID:** a1-heißen
**Field:** study.translation
**CURRENT:** Être appelé • Moyen
**PROPOSED_FR:** S'appeler
**Problēma:** La traduction contient plusieurs entrées et « Moyen » ne correspond pas au sens allemand heißen.
**LV etalons (konteksts):** saukties
**DE konteksts:** heißen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0395
**Card ID:** a1-hoeren-study
**Field:** study.translation
**CURRENT:** Entendre • Écouter
**PROPOSED_FR:** Entendre • Écouter
**Problēma:** Deux traductions distinctes sont proposées dans le champ d'apprentissage.
**LV etalons (konteksts):** dzirdēt • klausīties
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0396
**Card ID:** a1-ihr
**Field:** study.translation
**CURRENT:** Vous • Elle
**PROPOSED_FR:** Vous • Lui • Son/sa/ses
**Problēma:** « Elle » ne traduit pas le pronom indirect ni le possessif correspondant à ihr.
**LV etalons (konteksts):** jūs • viņai
**DE konteksts:** ihr
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0397
**Card ID:** a1-im
**Field:** study.translation
**CURRENT:** Dans • Où ?
**PROPOSED_FR:** Dans (le/la)
**Problēma:** « Où ? » est une question et non une traduction de la contraction allemande im.
**LV etalons (konteksts):** iekšā (-ā) • kur?
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0399
**Card ID:** a1-ins
**Field:** study.translation
**CURRENT:** Dans • Dans • Où ?
**PROPOSED_FR:** Dans • Vers l'intérieur
**Problēma:** « Où ? » ne traduit pas ins, qui exprime un mouvement vers l'intérieur.
**LV etalons (konteksts):** iekšā • uz iekšu • kurp?
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0400
**Card ID:** a1-ins
**Field:** study.examples[3].lv
**CURRENT:** Viens à la maison !
**PROPOSED_FR:** Entre dans la maison !
**Problēma:** Ins Haus indique l'entrée dans la maison, et non simplement la destination « à la maison ».
**LV etalons (konteksts):** nāc mājā!
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0401
**Card ID:** a1-kein
**Field:** study.translation
**CURRENT:** Personne • Rien
**PROPOSED_FR:** Aucun • Pas de
**Problēma:** Kein signifie « aucun/pas de » ; « personne/rien » correspondent plutôt à niemand/nichts.
**LV etalons (konteksts):** neviens • nekāds
**DE konteksts:** kein
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0402
**Card ID:** a1-kennen-study
**Field:** frMain
**CURRENT:** Savoir
**PROPOSED_FR:** Connaître
**Problēma:** Kennen se traduit par « connaître », tandis que « savoir » correspond à wissen.
**LV etalons (konteksts):** pazīt
**DE konteksts:** kennen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0403
**Card ID:** a1-kennen-study
**Field:** study.examples[2].lv
**CURRENT:** Où vous êtes-vous rencontré ?
**PROPOSED_FR:** Où vous êtes-vous rencontrés ?
**Problēma:** Avec « vous » sujet pluriel, le participe passé pronominal doit s'accorder au pluriel.
**LV etalons (konteksts):** kur jūs iepazināties?
**DE konteksts:** kennen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0405
**Card ID:** a1-wissen-study
**Field:** study.examples[1].lv
**CURRENT:** Comment tu sais ça ?
**PROPOSED_FR:** Comment le savez-vous ?
**Problēma:** Le français emploie « tu » alors que la source utilise la forme formelle/plurielle « vous ».
**LV etalons (konteksts):** no kurienes jūs to zināt?
**DE konteksts:** wissen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0406
**Card ID:** a1-können
**Field:** frMain
**CURRENT:** Être capable de • Savoir
**Problēma:** Deux traductions distinctes sont présentées dans le champ destiné à l'apprenant; décision éditoriale requise.
**DE konteksts:** können
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0407
**Card ID:** a1-können
**Field:** study.translation
**CURRENT:** Être capable de • Savoir
**Problēma:** Deux traductions distinctes sont présentées; décision éditoriale requise pour la présentation des sens.
**LV etalons (konteksts):** varēt • prast
**DE konteksts:** können
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0408
**Card ID:** a1-können
**Field:** study.comparison[0].meaning
**CURRENT:** Pouvoir/savoir
**Problēma:** Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
**LV etalons (konteksts):** varēt / prast
**DE konteksts:** können
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0409
**Card ID:** a1-kosten
**Field:** frMain
**CURRENT:** Payer
**PROPOSED_FR:** Coûter
**Problēma:** Kosten signifie « coûter », tandis que « payer » traduit zahlen.
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0410
**Card ID:** a1-kosten
**Field:** study.examples[4].lv
**CURRENT:** Je paie la facture
**PROPOSED_FR:** La facture coûte cher.
**Problēma:** La phrase française exprime payer, pas coûter; elle ne correspond pas au verbe allemand.
**LV etalons (konteksts):** es maksāju rēķinu.
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0411
**Card ID:** a1-kosten
**Field:** study.examples[5].lv
**CURRENT:** Puis-je payer en espèces
**PROPOSED_FR:** Est-ce que cela coûte cher ?
**Problēma:** La phrase française exprime payer, pas coûter; elle ne correspond pas au verbe allemand.
**LV etalons (konteksts):** vai varu maksāt skaidrā naudā?
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0412
**Card ID:** a1-kosten
**Field:** study.examples[6].lv
**CURRENT:** Il paie par carte.
**PROPOSED_FR:** Cela coûte cher.
**Problēma:** La phrase française exprime payer, pas coûter; elle ne correspond pas au verbe allemand.
**LV etalons (konteksts):** viņš maksā ar karti.
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0413
**Card ID:** a1-kosten
**Field:** study.examples[7].lv
**CURRENT:** Je vais payer maintenant
**PROPOSED_FR:** Cela coûtera cher.
**Problēma:** La phrase française exprime payer, pas coûter; elle ne correspond pas au verbe allemand.
**LV etalons (konteksts):** es samaksāšu tūlīt.
**DE konteksts:** kosten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0417
**Card ID:** a1-laden-study
**Field:** frMain
**CURRENT:** Boutique
**PROPOSED_FR:** Magasin
**Problēma:** « Boutique » est plus spécifique et ne correspond pas exactement au terme allemand général Laden.
**DE konteksts:** Laden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0418
**Card ID:** a1-land
**Field:** frMain
**CURRENT:** Pays • Terrain
**Problēma:** Deux traductions distinctes sont présentées dans le champ destiné à l'apprenant.
**DE konteksts:** Land
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0419
**Card ID:** a1-land
**Field:** study.translation
**CURRENT:** Pays • Terrain
**Problēma:** Deux traductions distinctes sont présentées; décision éditoriale requise.
**LV etalons (konteksts):** valsts • zeme
**DE konteksts:** Land
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0421
**Card ID:** a1-land
**Field:** study.comparison[3].meaning
**CURRENT:** Terre / planète
**Problēma:** Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
**LV etalons (konteksts):** zeme / planēta
**DE konteksts:** Land
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0422
**Card ID:** a1-lang
**Field:** frMain
**CURRENT:** Longue • Longue
**PROPOSED_FR:** Long • Longue
**Problēma:** La forme masculine « long » est requise pour le sens de « long » sans nom féminin exprimé.
**DE konteksts:** lang
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0423
**Card ID:** a1-lang
**Field:** study.translation
**CURRENT:** Longue • Longue
**PROPOSED_FR:** Long • Longue
**Problēma:** La forme masculine « long » est requise pour le premier sens; « longue » est féminine.
**LV etalons (konteksts):** garš • ilgs
**DE konteksts:** lang
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0424
**Card ID:** a1-lassen
**Field:** frMain
**CURRENT:** Partir • Laisser
**PROPOSED_FR:** Laisser • Permettre
**Problēma:** « Partir » traduit partir; lassen signifie ici laisser ou permettre.
**DE konteksts:** lassen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0425
**Card ID:** a1-lassen
**Field:** study.translation
**CURRENT:** Partir • Laisser
**PROPOSED_FR:** Laisser • Permettre
**Problēma:** Le premier sens est incorrect: lassen ne signifie pas « partir » dans cette entrée.
**LV etalons (konteksts):** atstāt • ļaut
**DE konteksts:** lassen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0427
**Card ID:** a1-laufen
**Field:** frMain
**CURRENT:** Exécuter • Utiliser
**PROPOSED_FR:** Courir • Fonctionner
**Problēma:** Laufen signifie « courir » ou « fonctionner »; « exécuter » et « utiliser » sont inadaptés ici.
**DE konteksts:** laufen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0428
**Card ID:** a1-laufen
**Field:** study.translation
**CURRENT:** Exécuter • Utiliser
**PROPOSED_FR:** Courir • Fonctionner
**Problēma:** Les deux traductions ne correspondent pas aux sens de laufen dans cette entrée.
**LV etalons (konteksts):** skriet • darboties
**DE konteksts:** laufen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0430
**Card ID:** a1-laut-study
**Field:** study.examples[1].lv
**CURRENT:** La musique est forte.
**Problēma:** L'exemple décrit l'adjectif « laut » et non le nom « Laut » de cette carte.
**LV etalons (konteksts):** mūzika ir skaļa.
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Le son
**Statuss:** PENDING
#### FR-A1-0431
**Card ID:** a1-laut-study
**Field:** study.examples[2].lv
**CURRENT:** Ne parle pas si fort !
**Problēma:** L'exemple décrit l'adjectif « laut » et non le nom « Laut » de cette carte.
**LV etalons (konteksts):** nerunā tik skaļi!
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Le son
**Statuss:** PENDING
#### FR-A1-0432
**Card ID:** a1-laut-study
**Field:** study.examples[3].lv
**CURRENT:** C'est très bruyant.
**Problēma:** L'exemple décrit l'adjectif « laut » et non le nom « Laut » de cette carte.
**LV etalons (konteksts):** tas ir ļoti skaļi.
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Le son
**Statuss:** PENDING
#### FR-A1-0433
**Card ID:** a1-legen
**Field:** study.examples[3].lv
**CURRENT:** Le livre est sur la table.
**Problēma:** L'exemple décrit liegen, être situé, et non legen, poser ou déposer.
**LV etalons (konteksts):** grāmata atrodas uz galda.
**DE konteksts:** legen
**Smagums:** MEDIUM
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0434
**Card ID:** a1-leise-study
**Field:** study.examples[0].lv
**CURRENT:** S'il vous plaît, restez silencieux.
**PROPOSED_FR:** S'il te plaît, reste silencieux.
**Problēma:** Le tutoiement singulier de la source exige « te » et l'impératif singulier « reste ».
**LV etalons (konteksts):** Lūdzu, esi kluss.
**DE konteksts:** leise
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0435
**Card ID:** a1-liegen
**Field:** frMain
**CURRENT:** Être • Dormir
**PROPOSED_FR:** Être allongé • Être situé
**Problēma:** Liegen signifie être allongé ou situé, pas simplement être ou dormir.
**DE konteksts:** liegen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0436
**Card ID:** a1-liegen
**Field:** study.translation
**CURRENT:** Être • Dormir
**PROPOSED_FR:** Être allongé • Être situé
**Problēma:** Liegen décrit une position ou un emplacement; « dormir » est un autre verbe allemand, schlafen.
**LV etalons (konteksts):** atrasties • gulēt
**DE konteksts:** liegen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0437
**Card ID:** a1-liegen
**Field:** study.examples[3].lv
**CURRENT:** J'ai posé le livre sur la table.
**Problēma:** L'exemple décrit legen, poser, et non liegen, être situé ou être allongé.
**LV etalons (konteksts):** es nolieku grāmatu uz galda.
**DE konteksts:** liegen
**Smagums:** MEDIUM
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0439
**Card ID:** a1-machen
**Field:** frMain
**CURRENT:** Faire • Faire
**PROPOSED_FR:** Faire
**Problēma:** The learner-facing field contains duplicated translations separated by •; the intended distinction requires an owner decision.
**LV etalons (konteksts):** darīt • taisīt
**DE konteksts:** machen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0440
**Card ID:** a1-machen
**Field:** study.translation
**CURRENT:** Faire • Faire
**PROPOSED_FR:** Faire
**Problēma:** The learner-facing field contains duplicated translations separated by •; the intended distinction requires an owner decision.
**LV etalons (konteksts):** darīt • taisīt
**DE konteksts:** machen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0441
**Card ID:** a1-mal
**Field:** frMain
**CURRENT:** Temps
**PROPOSED_FR:** Fois
**Problēma:** Mal means 'fois' when used as the noun for an occurrence, not 'temps' in this vocabulary context.
**LV etalons (konteksts):** reize
**DE konteksts:** Mal
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0442
**Card ID:** a1-mann
**Field:** study.translation
**CURRENT:** Homme • Mari
**PROPOSED_FR:** Homme
**Problēma:** The learner-facing field contains multiple meanings separated by •; the presentation of the senses requires an owner decision.
**LV etalons (konteksts):** vīrietis • vīrs
**DE konteksts:** Mann
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0443
**Card ID:** a1-morgen
**Field:** study.examples[1].lv
**CURRENT:** A demain !
**PROPOSED_FR:** À demain !
**Problēma:** The preposition à requires a grave accent in the fixed expression À demain.
**LV etalons (konteksts):** līdz rīt!
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0444
**Card ID:** a1-müssen
**Field:** frMain
**CURRENT:** Avoir besoin
**PROPOSED_FR:** Devoir
**Problēma:** Müssen expresses obligation or necessity and translates as devoir, not avoir besoin.
**LV etalons (konteksts):** vajadzēt
**DE konteksts:** müssen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0445
**Card ID:** a1-nach
**Field:** frMain
**CURRENT:** À • Après
**PROPOSED_FR:** À
**Problēma:** The learner-facing field contains multiple translations separated by •; the intended sense presentation requires an owner decision.
**LV etalons (konteksts):** uz • pēc
**DE konteksts:** nach
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0446
**Card ID:** a1-nach
**Field:** study.translation
**CURRENT:** À • Après
**PROPOSED_FR:** À
**Problēma:** The learner-facing field contains multiple translations separated by •; the intended sense presentation requires an owner decision.
**LV etalons (konteksts):** uz • pēc
**DE konteksts:** nach
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0447
**Card ID:** a1-natuerlich
**Field:** frMain
**CURRENT:** Bien sûr • Naturel
**PROPOSED_FR:** Bien sûr
**Problēma:** The learner-facing field contains multiple translations separated by •; the intended sense presentation requires an owner decision.
**LV etalons (konteksts):** protams • dabisks
**DE konteksts:** natürlich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0448
**Card ID:** a1-natuerlich
**Field:** study.translation
**CURRENT:** Bien sûr • Naturel
**PROPOSED_FR:** Bien sûr
**Problēma:** The learner-facing field contains multiple translations separated by •; the intended sense presentation requires an owner decision.
**LV etalons (konteksts):** protams • dabisks
**DE konteksts:** natürlich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0449
**Card ID:** a1-natuerlich
**Field:** study.examples[5].lv
**CURRENT:** C'est tout à fait naturel/normal.
**PROPOSED_FR:** C'est tout à fait naturel.
**Problēma:** The learner-facing field contains two alternatives separated by /; the intended translation requires an owner decision.
**LV etalons (konteksts):** tas ir pilnīgi dabiski/normāli.
**DE konteksts:** natürlich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0450
**Card ID:** a1-nehmen
**Field:** frMain
**CURRENT:** Prendre • Prendre
**PROPOSED_FR:** Prendre
**Problēma:** The learner-facing field contains duplicated translations separated by •; the intended distinction requires an owner decision.
**LV etalons (konteksts):** ņemt • paņemt
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0451
**Card ID:** a1-nehmen
**Field:** study.translation
**CURRENT:** Prendre • Prendre
**PROPOSED_FR:** Prendre
**Problēma:** The learner-facing field contains duplicated translations separated by •; the intended distinction requires an owner decision.
**LV etalons (konteksts):** ņemt • paņemt
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0452
**Card ID:** a1-noch-study
**Field:** study.examples[1].lv
**CURRENT:** Je suis toujours à la maison
**PROPOSED_FR:** Je suis toujours à la maison.
**Problēma:** La phrase doit se terminer par un point.
**LV etalons (konteksts):** es vēl esmu mājās.
**DE konteksts:** noch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Encore
**Statuss:** PENDING
#### FR-A1-0453
**Card ID:** a1-noch-study
**Field:** study.examples[2].lv
**CURRENT:** Es-tu toujours là
**PROPOSED_FR:** Es-tu toujours là ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** vai tu vēl esi šeit?
**DE konteksts:** noch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Encore
**Statuss:** PENDING
#### FR-A1-0454
**Card ID:** a1-nur-study
**Field:** study.translation
**CURRENT:** Seulement • Seulement
**PROPOSED_FR:** Seulement
**Problēma:** La traduction française est répétée deux fois, ce qui crée une carte redondante.
**LV etalons (konteksts):** tikai • vienīgi
**DE konteksts:** nur
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0455
**Card ID:** a1-ob
**Field:** frMain
**CURRENT:** Ou
**PROPOSED_FR:** Si
**Problēma:** Ob signifie « si » dans une proposition interrogative indirecte, et non « ou ».
**LV etalons (konteksts):** vai
**DE konteksts:** ob
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0456
**Card ID:** a1-ob
**Field:** study.comparison[2].meaning
**CURRENT:** Si/quand
**PROPOSED_FR:** Si
**Problēma:** Ob correspond à « si » et n'exprime pas « quand ».
**LV etalons (konteksts):** ja / kad
**DE konteksts:** ob
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0457
**Card ID:** a1-oder
**Field:** study.translation
**CURRENT:** Ou • Ou
**PROPOSED_FR:** Ou
**Problēma:** La traduction française est répétée deux fois, sans distinction utile pour l'apprenant.
**LV etalons (konteksts):** vai • jeb
**DE konteksts:** oder
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0458
**Card ID:** a1-oder
**Field:** study.comparison[0].meaning
**CURRENT:** Ou choisissez
**PROPOSED_FR:** Ou dans un choix
**Problēma:** « Ou choisissez » change le sens vers un impératif et ne traduit pas le libellé comparatif.
**LV etalons (konteksts):** vai izvēlē
**DE konteksts:** oder
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0459
**Card ID:** a1-passen
**Field:** frMain
**CURRENT:** Ajustement • Ajustement
**PROPOSED_FR:** Aller • Aller à quelqu'un
**Problēma:** « Ajustement » est un nom et ne traduit pas le verbe allemand passen.
**LV etalons (konteksts):** derēt • piestāvēt
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0460
**Card ID:** a1-passen
**Field:** study.translation
**CURRENT:** Ajustement • Ajustement
**PROPOSED_FR:** Aller • Aller à quelqu'un
**Problēma:** « Ajustement » est un nom et ne traduit pas le verbe allemand passen.
**LV etalons (konteksts):** derēt • piestāvēt
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0463
**Card ID:** a1-probieren
**Field:** study.translation
**CURRENT:** A essayer • A déguster
**PROPOSED_FR:** À essayer • À déguster
**Problēma:** La préposition « à » prend un accent grave dans ces expressions.
**LV etalons (konteksts):** izmēģināt • nogaršot
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0464
**Card ID:** a1-probieren
**Field:** study.examples[3].lv
**CURRENT:** Puis-je essayer la veste
**PROPOSED_FR:** Puis-je essayer la veste ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** vai es varu pielaikot jaku?
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0465
**Card ID:** a1-probieren
**Field:** study.comparison[0].meaning
**CURRENT:** Essayer / goûter
**PROPOSED_FR:** Goûter
**Problēma:** Le séparateur « / » présente plusieurs formulations dans un champ destiné à l'apprenant; une décision éditoriale est requise.
**LV etalons (konteksts):** izmēģināt / nogaršot
**DE konteksts:** probieren
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0466
**Card ID:** a1-schau​en-study
**Field:** frMain
**CURRENT:** Montre
**PROPOSED_FR:** Regarder
**Problēma:** « Montre » signifie « montre-moi » ou « montre » comme nom; le verbe allemand signifie « regarder ».
**LV etalons (konteksts):** skatīties
**DE konteksts:** schauen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0467
**Card ID:** a1-schauen-study
**Field:** study.examples[2].lv
**CURRENT:** Je regarde la télé
**PROPOSED_FR:** Je regarde la télé.
**Problēma:** La phrase doit se terminer par un point.
**LV etalons (konteksts):** es skatos televizoru.
**DE konteksts:** schauen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0468
**Card ID:** a1-schon-study
**Field:** study.examples[0].lv
**CURRENT:** Je suis déjà à la maison
**PROPOSED_FR:** Je suis déjà à la maison.
**Problēma:** La phrase doit se terminer par un point.
**LV etalons (konteksts):** es jau esmu mājās.
**DE konteksts:** schon
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Déjà
**Statuss:** PENDING
#### FR-A1-0469
**Card ID:** a1-schwimmen
**Field:** study.examples[0].lv
**CURRENT:** J'aime nager
**PROPOSED_FR:** J'aime nager.
**Problēma:** La phrase doit se terminer par un point.
**LV etalons (konteksts):** man patīk peldēt.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0470
**Card ID:** a1-schwimmen
**Field:** study.examples[3].lv
**CURRENT:** Je vais nager
**PROPOSED_FR:** Je vais nager.
**Problēma:** La phrase doit se terminer par un point.
**LV etalons (konteksts):** es eju peldēties.
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0471
**Card ID:** a1-schwimmen
**Field:** study.comparison[0].meaning
**CURRENT:** Nager comme mouvement ou sport
**PROPOSED_FR:** Nager
**Problēma:** Le champ contient plusieurs éléments explicatifs au lieu d'une formulation d'apprentissage concise.
**LV etalons (konteksts):** peldēt kā kustība vai sports
**DE konteksts:** schwimmen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0474
**Card ID:** a1-sein
**Field:** frMain
**CURRENT:** Ils/elle
**PROPOSED_FR:** Ils / elles
**Problēma:** « Elle » est au singulier et ne correspond pas à la source, qui indique deux formes plurielles.
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0475
**Card ID:** a1-sein
**Field:** study.translation
**CURRENT:** Ils/elle
**PROPOSED_FR:** Ils / elles
**Problēma:** « Elle » est au singulier et ne correspond pas à la source, qui indique deux formes plurielles.
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0476
**Card ID:** a1-seite
**Field:** frMain
**CURRENT:** Page • Côté
**PROPOSED_FR:** Page
**Problēma:** Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** lappuse • puse
**DE konteksts:** Seite
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0477
**Card ID:** a1-seite
**Field:** study.translation
**CURRENT:** Page • Côté
**PROPOSED_FR:** Page
**Problēma:** Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** lappuse • puse
**DE konteksts:** Seite
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0478
**Card ID:** a1-sich
**Field:** frMain
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_FR:** Soi-même • À soi-même
**Problēma:** « Sich » est un pronom réfléchi général, pas la forme de politesse « vous-même ».
**LV etalons (konteksts):** sevi • sev
**DE konteksts:** sich
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0479
**Card ID:** a1-sich
**Field:** study.translation
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_FR:** Soi-même • À soi-même
**Problēma:** « Sich » est un pronom réfléchi général, pas la forme de politesse « vous-même ».
**LV etalons (konteksts):** sevi • sev
**DE konteksts:** sich
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0480
**Card ID:** a1-sich
**Field:** study.examples[2].lv
**CURRENT:** Elle est heureuse.
**PROPOSED_FR:** Elle se réjouit.
**Problēma:** Le verbe français actuel exprime un état, tandis que la phrase source exprime une action de se réjouir.
**LV etalons (konteksts):** viņa priecājas.
**DE konteksts:** sich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0481
**Card ID:** a1-sicher
**Field:** frMain
**CURRENT:** Sûr • Certainement
**PROPOSED_FR:** Sûr
**Problēma:** Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** drošs • noteikti
**DE konteksts:** sicher
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0482
**Card ID:** a1-sicher
**Field:** study.translation
**CURRENT:** Sûr • Certainement
**PROPOSED_FR:** Sûr
**Problēma:** Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** drošs • noteikti
**DE konteksts:** sicher
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0483
**Card ID:** a1-sie-study
**Field:** frMain
**CURRENT:** Ils/elle
**PROPOSED_FR:** Elle / Ils / Elles
**Problēma:** La forme allemande « sie » peut être « elle », « ils » ou « elles » ; la forme féminine plurielle manque.
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sie
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0484
**Card ID:** a1-sie-study
**Field:** study.translation
**CURRENT:** Ils/elle
**PROPOSED_FR:** Elle / Ils / Elles
**Problēma:** La forme allemande « sie » peut être « elle », « ils » ou « elles » ; la forme féminine plurielle manque.
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sie
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0486
**Card ID:** a1-sie-study-2
**Field:** frMain
**CURRENT:** Toi
**PROPOSED_FR:** Vous
**Problēma:** Le pronom allemand formel « Sie » se traduit par « vous », pas par le tutoiement « toi ».
**LV etalons (konteksts):** jūs
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0487
**Card ID:** a1-sie-study-2
**Field:** study.examples[0].lv
**CURRENT:** Cuisinez, s'il vous plaît.
**PROPOSED_FR:** Vous cuisinez, s'il vous plaît.
**Problēma:** La phrase source est déclarative ; l'impératif français change le sens.
**LV etalons (konteksts):** Jūs gatavojat, lūdzu.
**DE konteksts:** Sie
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0488
**Card ID:** a1-sie-study-2
**Field:** study.examples[1].lv
**CURRENT:** Elle cuisine.
**PROPOSED_FR:** Vous cuisinez.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « elle ».
**LV etalons (konteksts):** viņa gatavo.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0489
**Card ID:** a1-sie-study-2
**Field:** study.examples[2].lv
**CURRENT:** Elle mange
**PROPOSED_FR:** Vous mangez.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « elle ».
**LV etalons (konteksts):** viņa ēd.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0490
**Card ID:** a1-sie-study-2
**Field:** study.examples[3].lv
**CURRENT:** Ils cuisinent.
**PROPOSED_FR:** Vous cuisinez.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « ils ».
**LV etalons (konteksts):** viņi gatavo.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0491
**Card ID:** a1-sie-study-2
**Field:** study.examples[4].lv
**CURRENT:** Ils jouent au football.
**PROPOSED_FR:** Vous jouez au football.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « ils ».
**LV etalons (konteksts):** viņi spēlē futbolu.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0493
**Card ID:** a1-sollen
**Field:** frMain
**CURRENT:** Devrait
**PROPOSED_FR:** Devoir
**Problēma:** « Devrait » est le conditionnel ; l'infinitif allemand « sollen » correspond ici à « devoir ».
**LV etalons (konteksts):** vajadzētu
**DE konteksts:** sollen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0496
**Card ID:** a1-über
**Field:** frMain
**CURRENT:** Fini • Pour
**PROPOSED_FR:** Au-dessus • À propos de
**Problēma:** « Fini » et « pour » ne correspondent pas aux sens principaux de « über » indiqués par la source.
**LV etalons (konteksts):** virs • par
**DE konteksts:** über
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0497
**Card ID:** a1-über
**Field:** study.translation
**CURRENT:** Fini • Pour
**PROPOSED_FR:** Au-dessus • À propos de
**Problēma:** « Fini » et « pour » ne correspondent pas aux sens principaux de « über » indiqués par la source.
**LV etalons (konteksts):** virs • par
**DE konteksts:** über
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0498
**Card ID:** a1-um
**Field:** frMain
**CURRENT:** Vers • Heures
**PROPOSED_FR:** Autour • À (pour l'heure)
**Problēma:** « Heures » n'est pas une traduction française autonome de la préposition allemande « um ».
**LV etalons (konteksts):** ap • pulksten
**DE konteksts:** um
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0499
**Card ID:** a1-um
**Field:** study.translation
**CURRENT:** Vers • Heures
**PROPOSED_FR:** Autour • À (pour l'heure)
**Problēma:** « Heures » n'est pas une traduction française autonome de la préposition allemande « um ».
**LV etalons (konteksts):** ap • pulksten
**DE konteksts:** um
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0500
**Card ID:** a1-um
**Field:** study.comparison[2].meaning
**CURRENT:** Autour du temps / contre
**PROPOSED_FR:** Vers cette heure / contre
**Problēma:** « Autour du temps » est une formulation non idiomatique pour exprimer une approximation temporelle.
**LV etalons (konteksts):** ap laiku / pret
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0501
**Card ID:** a1-um
**Field:** study.comparison[3].meaning
**CURRENT:** De/à propos d'une source
**PROPOSED_FR:** Pour / en faveur de
**Problēma:** Le français actuel exprime la provenance ou le sujet, pas le sens « pour / en faveur de ».
**LV etalons (konteksts):** priekš / par labu
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0502
**Card ID:** a1-verstehen
**Field:** frMain
**CURRENT:** Pour comprendre
**PROPOSED_FR:** Comprendre
**Problēma:** « Pour comprendre » means « pour comprendre » and does not translate the infinitive verstehen.
**LV etalons (konteksts):** saprast
**DE konteksts:** verstehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0503
**Card ID:** a1-verstehen
**Field:** study.comparison[0].meaning
**CURRENT:** Pour comprendre
**PROPOSED_FR:** Comprendre
**Problēma:** The comparison's primary meaning should be the infinitive « comprendre », not the purpose phrase « pour comprendre ».
**LV etalons (konteksts):** saprast
**DE konteksts:** verstehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0504
**Card ID:** a1-vom
**Field:** frMain
**CURRENT:** Depuis
**PROPOSED_FR:** Du / de la
**Problēma:** « Vom » generally means « du/de la » or « de », whereas « depuis » expresses duration or a starting point in time.
**LV etalons (konteksts):** no
**DE konteksts:** vom
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0505
**Card ID:** a1-vom
**Field:** study.comparison[0].meaning
**CURRENT:** De (une chose précise, pour qui ?)
**PROPOSED_FR:** De (une chose précise, de qui ?)
**Problēma:** The Latvian source indicates origin from a person, not the recipient « pour qui ? ».
**LV etalons (konteksts):** no (konkrēta lieta, kam?)
**DE konteksts:** vom
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0506
**Card ID:** a1-vor
**Field:** frMain
**CURRENT:** Avant • Devant
**PROPOSED_FR:** Avant et devant
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**LV etalons (konteksts):** pirms • priekšā
**DE konteksts:** vor
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0507
**Card ID:** a1-vor
**Field:** study.translation
**CURRENT:** Avant • Devant
**PROPOSED_FR:** Avant et devant
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**LV etalons (konteksts):** pirms • priekšā
**DE konteksts:** vor
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0508
**Card ID:** a1-was
**Field:** frMain
**CURRENT:** Qui • Quoi
**PROPOSED_FR:** Quoi
**Problēma:** German « was » means « quoi », not « qui »; « qui » translates wer.
**LV etalons (konteksts):** kas • ko
**DE konteksts:** was
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0509
**Card ID:** a1-was
**Field:** study.translation
**CURRENT:** Qui • Quoi
**PROPOSED_FR:** Quoi
**Problēma:** German « was » means « quoi », not « qui »; « qui » translates wer.
**LV etalons (konteksts):** kas • ko
**DE konteksts:** was
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0510
**Card ID:** a1-wenn
**Field:** frMain
**CURRENT:** Si • Quand
**PROPOSED_FR:** Si ou quand
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**LV etalons (konteksts):** ja • kad
**DE konteksts:** wenn
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0511
**Card ID:** a1-wenn
**Field:** study.translation
**CURRENT:** Si • Quand
**PROPOSED_FR:** Si ou quand
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**LV etalons (konteksts):** ja • kad
**DE konteksts:** wenn
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0513
**Card ID:** a1-zu
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À / chez / trop / de
**Problēma:** Bullets separate distinct meanings, but the current French repeats « à » and omits several meanings shown in the card.
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zu
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0516
**Card ID:** a1-fernsehen
**Field:** study.comparison[1].meaning
**CURRENT:** Télévision (médias)
**PROPOSED_FR:** Télévision (média)
**Problēma:** Dans ce sens, « média » est au singulier; « médias » désigne plusieurs médias.
**LV etalons (konteksts):** televīzija (medijs)
**DE konteksts:** fernsehen
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0517
**Card ID:** a1-essen-study
**Field:** study.translation
**CURRENT:** Alimentation • Repas
**PROPOSED_FR:** Repas
**Problēma:** Deux traductions distinctes sont proposées dans le champ destiné à l'apprenant; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** ēdiens • maltīte
**DE konteksts:** Essen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0522
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
#### FR-A1-0524
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
#### FR-A1-0525
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
#### FR-A1-0527
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
#### FR-A1-0528
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
#### FR-A1-0529
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
#### FR-A1-0530
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
#### FR-A1-0531
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
#### FR-A1-0532
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
#### FR-A1-0533
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
#### FR-A1-0534
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
#### FR-A1-0535
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
#### FR-A1-0536
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
#### FR-A1-0537
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
#### FR-A1-0538
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
#### FR-A1-0539
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
#### FR-A1-0540
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
#### FR-A1-0541
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
#### FR-A1-0542
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
#### FR-A1-0543
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
#### FR-A1-0545
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
#### FR-A1-0546
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
#### FR-A1-0547
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
#### FR-A1-0548
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
#### FR-A1-0549
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
#### FR-A1-0550
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
#### FR-A1-0551
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
#### FR-A1-0552
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
#### FR-A1-0553
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
#### FR-A1-0554
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
#### FR-A1-0555
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
#### FR-A1-0556
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
#### FR-A1-0557
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
#### FR-A1-0558
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
#### FR-A1-0559
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
#### FR-A1-0560
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
#### FR-A1-0561
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
#### FR-A1-0562
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
#### FR-A1-0563
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
#### FR-A1-0564
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
#### FR-A1-0565
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
#### FR-A1-0566
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
#### FR-A1-0567
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
#### FR-A1-0569
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
#### FR-A1-0570
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
#### FR-A1-0571
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
#### FR-A1-0572
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
#### FR-A1-0573
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
#### FR-A1-0574
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
#### FR-A1-0575
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
#### FR-A1-0576
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
#### FR-A1-0577
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
#### FR-A1-0578
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

| Study 134/134 | PASS |
| sectionAccents | FAIL |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |
