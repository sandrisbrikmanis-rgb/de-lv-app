# FR–DE A1 POST-REPAIR pilns lingvistiskais audits (MASTER v1.12 · PR #683 HEAD)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.12** |
| **AUDIT MODE** | POST_REPAIR_FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `a2a769e8600291411a7a66eab0483dd4659c9151` |
| **DATASET_PRODUCTION_BLOB** | `c191724a8aa642e97b17ff881f7ccfb0b6d5c361` |
| **WWW DATASET BLOB** | `c191724a8aa642e97b17ff881f7ccfb0b6d5c361` |
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
| RAW findings | **543** |
| NEW_VALIDATED_REAL_FINDINGS | **63** |
| OWNER_BACKLOG_FINAL | **63** |
| PREVIOUSLY_SEEN_RAW | **426** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **63** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **702/702 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **54** |
| sectionAccents | **224** |
| LV remnants | **227** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 158 |
| Deterministic | 385 |
| OWNER_DECISION_CONFIRMED | 54 |
| OWNER_DECISION_REOPEN_REQUIRED | **1** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **426** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **63** |
| OWNER_BACKLOG_FINAL | **63** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **PASS** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 702/702 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **0** · HIGH: **343** · MEDIUM: **106** · LOW: **40**

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
**Card ID:** a1-bitte
**Field:** study.sectionAccents (examples)
**CURRENT:** Une
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0239
**Card ID:** a1-bleiben
**Field:** study.sectionAccents (examples)
**CURRENT:** rentre
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0240
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
#### FR-A1-0241
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
#### FR-A1-0242
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
#### FR-A1-0243
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
#### FR-A1-0244
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
#### FR-A1-0245
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
#### FR-A1-0246
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
#### FR-A1-0247
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
#### FR-A1-0248
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
#### FR-A1-0249
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
#### FR-A1-0250
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
#### FR-A1-0251
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
#### FR-A1-0252
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
#### FR-A1-0253
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
#### FR-A1-0254
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
#### FR-A1-0255
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
#### FR-A1-0256
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
#### FR-A1-0257
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
#### FR-A1-0258
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
#### FR-A1-0259
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
#### FR-A1-0260
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
#### FR-A1-0261
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
#### FR-A1-0262
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
#### FR-A1-0263
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
#### FR-A1-0264
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
#### FR-A1-0265
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
#### FR-A1-0266
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
#### FR-A1-0267
**Card ID:** a1-ins
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
#### FR-A1-0268
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
#### FR-A1-0269
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
#### FR-A1-0270
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
#### FR-A1-0271
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
#### FR-A1-0272
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
#### FR-A1-0273
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
#### FR-A1-0274
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
#### FR-A1-0275
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
#### FR-A1-0276
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
#### FR-A1-0277
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
#### FR-A1-0278
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
#### FR-A1-0279
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
#### FR-A1-0280
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
#### FR-A1-0281
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
#### FR-A1-0282
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
#### FR-A1-0283
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
#### FR-A1-0284
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
#### FR-A1-0285
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
#### FR-A1-0286
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
#### FR-A1-0287
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
#### FR-A1-0288
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
#### FR-A1-0289
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
#### FR-A1-0290
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
#### FR-A1-0291
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
#### FR-A1-0292
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
#### FR-A1-0293
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
#### FR-A1-0294
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
#### FR-A1-0295
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
#### FR-A1-0296
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
#### FR-A1-0297
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
#### FR-A1-0298
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
#### FR-A1-0299
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
#### FR-A1-0300
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
#### FR-A1-0301
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
#### FR-A1-0302
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
#### FR-A1-0303
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
#### FR-A1-0304
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
#### FR-A1-0305
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
#### FR-A1-0306
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
#### FR-A1-0307
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
#### FR-A1-0308
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
#### FR-A1-0309
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
#### FR-A1-0310
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
#### FR-A1-0311
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
#### FR-A1-0312
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
#### FR-A1-0313
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
#### FR-A1-0314
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
#### FR-A1-0315
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
#### FR-A1-0316
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
#### FR-A1-0317
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
#### FR-A1-0318
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
#### FR-A1-0319
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
#### FR-A1-0320
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
#### FR-A1-0321
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
#### FR-A1-0322
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
#### FR-A1-0323
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
#### FR-A1-0324
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
#### FR-A1-0325
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
#### FR-A1-0326
**Card ID:** a1-an
**Field:** study.sectionAccents.tip.left
**CURRENT:** Atceries
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "Atceries" nav atrodams sadaļā tip
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0327
**Card ID:** a1-aber
**Field:** study.sectionAccents.tip.left
**CURRENT:** pretstats
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "pretstats" nav atrodams sadaļā tip
**DE konteksts:** aber
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0328
**Card ID:** a1-aber
**Field:** study.sectionAccents.tip.left
**CURRENT:** iebilde
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "iebilde" nav atrodams sadaļā tip
**DE konteksts:** aber
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0329
**Card ID:** a1-fünfzehnte-213
**Field:** frText
**CURRENT:** Le quinzième
**PROPOSED_FR:** Quinzième
**Problēma:** L’article défini ajoute une détermination absente du mot allemand donné seul.
**LV etalons (konteksts):** piecpadsmitais
**DE konteksts:** fünfzehnte
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0330
**Card ID:** a1-fünfzigste-215
**Field:** frText
**CURRENT:** Le cinquantième
**PROPOSED_FR:** Cinquantième
**Problēma:** L’article défini ajoute une détermination absente du mot allemand donné seul.
**LV etalons (konteksts):** piecdesmitais
**DE konteksts:** fünfzigste
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0332
**Card ID:** a1-so-559
**Field:** frText
**CURRENT:** Donc
**PROPOSED_FR:** Ainsi
**Problēma:** « Donc » signifie « therefore », tandis que l’allemand « so » signifie ici « ainsi/de cette manière ».
**LV etalons (konteksts):** tā
**DE konteksts:** so
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0333
**Card ID:** a1-Text-597
**Field:** frText
**CURRENT:** Texte
**PROPOSED_FR:** Texte
**Problēma:** Le mot allemand est au singulier ; le français actuel est au pluriel.
**LV etalons (konteksts):** teksts
**DE konteksts:** Text
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0334
**Card ID:** a1-an
**Field:** study.translation
**CURRENT:** À • À • Présent
**PROPOSED_FR:** À
**Problēma:** Le champ contient plusieurs traductions et « Présent », qui ne correspond pas au sens de la préposition allemande an.
**LV etalons (konteksts):** pie
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0336
**Card ID:** a1-an
**Field:** study.comparison[1].meaning
**CURRENT:** Sur une surface horizontale
**PROPOSED_FR:** À une surface verticale
**Problēma:** Une surface horizontale correspond normalement à auf, non à an.
**LV etalons (konteksts):** uz horizontālas virsmas
**DE konteksts:** an
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0337
**Card ID:** a1-an
**Field:** study.comparison[2].meaning
**CURRENT:** À une personne ou à un lieu
**PROPOSED_FR:** À proximité d'une surface ou d'un bord
**Problēma:** La référence à une personne ou à un lieu correspond plutôt à bei ou zu.
**LV etalons (konteksts):** pie personas vai vietas
**DE konteksts:** an
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0338
**Card ID:** a1-ab
**Field:** frMain
**CURRENT:** Depuis
**PROPOSED_FR:** À partir de
**Problēma:** Ab indique un point de départ, alors que « depuis » exprime généralement une durée commencée dans le passé.
**LV etalons (konteksts):** no
**DE konteksts:** ab
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0339
**Card ID:** a1-ab
**Field:** study.comparison[1].meaning
**CURRENT:** De quelqu'un ou de quelque chose (origine)
**PROPOSED_FR:** À partir d'un point ou d'un moment
**Problēma:** L'origine depuis une personne ou une chose relève plutôt de von ou aus, pas du sens principal de ab.
**LV etalons (konteksts):** no kāda/kaut kā • izcelsme
**DE konteksts:** ab
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0342
**Card ID:** a1-auf
**Field:** study.comparison[2].meaning
**CURRENT:** Sur (surface verticale)
**PROPOSED_FR:** Sur une surface
**Problēma:** Une surface verticale correspond normalement à an, pas au sens général de auf.
**LV etalons (konteksts):** pie (vertikālas virsmas)
**DE konteksts:** auf
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Sur / à
**Statuss:** PENDING
#### FR-A1-0343
**Card ID:** a1-auf
**Field:** study.comparison[3].meaning
**CURRENT:** Sur / à
**PROPOSED_FR:** Sur une surface ou vers le haut
**Problēma:** « À l'intérieur » ne traduit pas auf ; le champ contient en plus une alternative non spécifiée.
**LV etalons (konteksts):** iekšā
**DE konteksts:** auf
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0344
**Card ID:** a1-aus
**Field:** study.translation
**CURRENT:** De • Sortie
**PROPOSED_FR:** De l'intérieur
**Problēma:** Le champ contient deux traductions séparées par une puce, et « Sortie » est un nom plutôt qu'une traduction prépositionnelle.
**LV etalons (konteksts):** no
**DE konteksts:** aus
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0345
**Card ID:** a1-aus
**Field:** study.comparison[1].meaning
**CURRENT:** De la personne, du lieu, de la surface
**PROPOSED_FR:** D'un lieu ou de l'intérieur d'une chose
**Problēma:** L'origine d'une personne se traduit plutôt par von ; aus exprime surtout la sortie ou l'origine depuis un lieu.
**LV etalons (konteksts):** no personas, vietas, virsmas
**DE konteksts:** aus
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0347
**Card ID:** a1-aufs
**Field:** study.translation
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_FR:** Sur
**Problēma:** Le champ contient plusieurs traductions et « Où ? », qui est une question de lieu, pas le sens de aufs.
**LV etalons (konteksts):** uz
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0349
**Card ID:** a1-aufs
**Field:** study.comparison[3].meaning
**CURRENT:** Vers l'intérieur
**PROPOSED_FR:** Sur une surface ou vers le haut
**Problēma:** Aufs signifie auf das, généralement « sur le » ou « vers le », et non « vers l'intérieur ».
**LV etalons (konteksts):** uz iekšu (iekš telpas)
**DE konteksts:** aufs
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0351
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** Il nage très bien.
**PROPOSED_FR:** Il se baigne très bien.
**Problēma:** « Il nage très bien » traduit schwimmen, alors que baden signifie se baigner.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0352
**Card ID:** a1-baden
**Field:** study.comparison[2].meaning
**CURRENT:** Prendre une douche
**PROPOSED_FR:** Se baigner
**Problēma:** Prendre une douche correspond à duschen, pas à baden.
**LV etalons (konteksts):** mazgāties dušā
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0357
**Card ID:** a1-bringen
**Field:** frMain
**CURRENT:** À emporter • À emporter
**PROPOSED_FR:** Apporter
**Problēma:** « À emporter » signifie take-away/emporter, pas « bringen » ; la traduction correcte est « apporter ».
**LV etalons (konteksts):** atnest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0358
**Card ID:** a1-bringen
**Field:** study.translation
**CURRENT:** À emporter • À emporter
**PROPOSED_FR:** Apporter
**Problēma:** « À emporter » signifie take-away/emporter, pas « bringen » ; la traduction correcte est « apporter ».
**LV etalons (konteksts):** atnest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0361
**Card ID:** a1-die
**Field:** study.examples[2].lv
**CURRENT:** Le professeur explique.
**PROPOSED_FR:** La professeure explique.
**Problēma:** La source désigne une enseignante et l’article allemand est féminin ; le français doit employer le féminin.
**LV etalons (konteksts):** skolotāja skaidro.
**DE konteksts:** die
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0362
**Card ID:** a1-ein
**Field:** study.translation
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_FR:** Article indéfini (« un ») ou quelqu’un, selon le contexte
**Problēma:** Le champ juxtapose plusieurs sens distincts avec des puces; une formulation contextuelle est préférable.
**LV etalons (konteksts):** nenoteiktais artikuls
**DE konteksts:** ein
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0363
**Card ID:** a1-erst
**Field:** study.translation
**CURRENT:** Premier • Seulement
**PROPOSED_FR:** D'abord • Seulement
**Problēma:** « Premier » est un adjectif; le sens adverbial de erst est « d'abord » dans cet emploi.
**LV etalons (konteksts):** tikai
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0364
**Card ID:** a1-es
**Field:** study.translation
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_FR:** Il, notamment dans les tournures impersonnelles
**Problēma:** Le champ répète « Il » et mélange traduction et fonction grammaticale avec des puces.
**LV etalons (konteksts):** tas
**DE konteksts:** es
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0365
**Card ID:** a1-etwas
**Field:** study.translation
**CURRENT:** Quelque chose • Un peu
**PROPOSED_FR:** Quelque chose ou un peu, selon le contexte
**Problēma:** Deux sens distincts sont présentés avec une puce; une indication de contexte est plus claire.
**LV etalons (konteksts):** kaut kas
**DE konteksts:** etwas
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0366
**Card ID:** a1-etwas
**Field:** study.comparison[0].meaning
**CURRENT:** Quelque chose
**PROPOSED_FR:** Quelque chose ou un peu
**Problēma:** La traduction française omet le second sens indiqué par la source: « nedaudz », soit « un peu ».
**LV etalons (konteksts):** kaut kas / nedaudz
**DE konteksts:** etwas
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0367
**Card ID:** a1-fahren
**Field:** study.translation
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_FR:** Conduire • Voyager en véhicule • Emmener
**Problēma:** « Diriger » et « emporter » ne correspondent pas aux sens usuels de fahren dans ces exemples.
**LV etalons (konteksts):** braukt
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0368
**Card ID:** a1-finden
**Field:** study.translation
**CURRENT:** Trouver • Considérer
**PROPOSED_FR:** Trouver • Penser
**Problēma:** Dans le sens d'une opinion, finden se traduit ici par « penser » ou « trouver », non par « considérer ».
**LV etalons (konteksts):** atrast
**DE konteksts:** finden
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0369
**Card ID:** a1-geben
**Field:** study.comparison[1].meaning
**CURRENT:** Prendre / prendre
**PROPOSED_FR:** Prendre
**Problēma:** The slash separates a duplicated French translation; simplify or confirm the intended comparison wording.
**LV etalons (konteksts):** ņemt / paņemt
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0370
**Card ID:** a1-gleich
**Field:** study.translation
**CURRENT:** Immédiatement • Égal
**PROPOSED_FR:** Immédiatement ou égal
**Problēma:** The bullet combines two distinct meanings; owner review is needed to choose the intended learner-facing format.
**LV etalons (konteksts):** tūlīt
**DE konteksts:** gleich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0371
**Card ID:** a1-halten
**Field:** study.translation
**CURRENT:** Maintenir • Arrêter
**PROPOSED_FR:** Tenir ou arrêter
**Problēma:** The bullet combines distinct meanings; owner review is needed for the learner-facing translation.
**LV etalons (konteksts):** turēt
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0375
**Card ID:** a1-heißen
**Field:** study.translation
**CURRENT:** Être appelé • Moyen
**PROPOSED_FR:** S'appeler • Signifier
**Problēma:** The second meaning is « signifier », not « moyen »; the German verb also means « s'appeler ».
**LV etalons (konteksts):** saukties
**DE konteksts:** heißen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0376
**Card ID:** a1-hoeren-study
**Field:** frMain
**CURRENT:** Entendre • Écouter
**PROPOSED_FR:** Entendre
**Problēma:** Learner-facing field contains multiple translations separated by •; owner decision is required.
**LV etalons (konteksts):** dzirdēt • klausīties
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0377
**Card ID:** a1-hoeren-study
**Field:** study.translation
**CURRENT:** Entendre • Écouter
**PROPOSED_FR:** Entendre
**Problēma:** Learner-facing field contains multiple translations separated by •; owner decision is required.
**LV etalons (konteksts):** dzirdēt • klausīties
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0378
**Card ID:** a1-ihr
**Field:** frMain
**CURRENT:** Vous • Elle
**PROPOSED_FR:** Vous • Lui
**Problēma:** In the dative use, « ihr » means « lui », not the nominative pronoun « elle ».
**LV etalons (konteksts):** jūs • viņai
**DE konteksts:** ihr
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0379
**Card ID:** a1-ihr
**Field:** study.translation
**CURRENT:** Vous • Elle
**PROPOSED_FR:** Vous • Lui
**Problēma:** In the dative use, « ihr » means « lui », not the nominative pronoun « elle ».
**LV etalons (konteksts):** jūs • viņai
**DE konteksts:** ihr
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0380
**Card ID:** a1-im
**Field:** frMain
**CURRENT:** Dans • Où ?
**PROPOSED_FR:** Dans • Au
**Problēma:** « Im » is a contraction of « in dem », not the question word « où ».
**LV etalons (konteksts):** iekšā (-ā) • kur?
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0381
**Card ID:** a1-im
**Field:** study.translation
**CURRENT:** Dans • Où ?
**PROPOSED_FR:** Dans • Au
**Problēma:** « Im » is a contraction of « in dem », not the question word « où ».
**LV etalons (konteksts):** iekšā (-ā) • kur?
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0383
**Card ID:** a1-ins
**Field:** frMain
**CURRENT:** Dans • Dans • Où ?
**PROPOSED_FR:** Dans • Vers l'intérieur
**Problēma:** « Ins » expresses movement into a place; « où ? » is not a translation.
**LV etalons (konteksts):** iekšā • uz iekšu • kurp?
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0384
**Card ID:** a1-ins
**Field:** study.translation
**CURRENT:** Dans • Dans • Où ?
**PROPOSED_FR:** Dans • Vers l'intérieur
**Problēma:** « Ins » expresses movement into a place; « où ? » is not a translation.
**LV etalons (konteksts):** iekšā • uz iekšu • kurp?
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0385
**Card ID:** a1-kein
**Field:** study.translation
**CURRENT:** Personne • Rien
**PROPOSED_FR:** Aucun • Pas de
**Problēma:** « Kein » means « aucun » or « pas de », not the pronouns « personne » and « rien ».
**LV etalons (konteksts):** neviens • nekāds
**DE konteksts:** kein
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0387
**Card ID:** a1-können
**Field:** study.translation
**CURRENT:** Être capable de • Savoir
**PROPOSED_FR:** Pouvoir
**Problēma:** Le champ contient plusieurs équivalents; le choix de la traduction principale doit être validé par le propriétaire.
**LV etalons (konteksts):** varēt • prast
**DE konteksts:** können
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0391
**Card ID:** a1-kosten
**Field:** study.comparison[3].meaning
**CURRENT:** Combien ça coûte...?
**PROPOSED_FR:** Combien ça coûte ?
**Problēma:** La formulation contient une ponctuation multiple et doit être normalisée pour l’apprenant.
**LV etalons (konteksts):** cik maksā...?
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0392
**Card ID:** a1-lang
**Field:** study.translation
**CURRENT:** Longue • Longue
**PROPOSED_FR:** Long • Longue
**Problēma:** « Longue » est féminin dans les deux cas; la forme masculine de base doit apparaître aussi.
**LV etalons (konteksts):** garš • ilgs
**DE konteksts:** lang
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0393
**Card ID:** a1-lassen
**Field:** study.translation
**CURRENT:** Partir • Laisser
**PROPOSED_FR:** Laisser • Permettre
**Problēma:** « Partir » signifie aller away; lassen correspond ici à « laisser » ou « permettre ».
**LV etalons (konteksts):** atstāt • ļaut
**DE konteksts:** lassen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0395
**Card ID:** a1-laufen
**Field:** study.translation
**CURRENT:** Exécuter • Utiliser
**PROPOSED_FR:** Courir • Fonctionner
**Problēma:** « Exécuter » et « utiliser » ne traduisent pas les sens courir et fonctionner de laufen ici.
**LV etalons (konteksts):** skriet • darboties
**DE konteksts:** laufen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0397
**Card ID:** a1-liegen
**Field:** study.translation
**CURRENT:** Être • Dormir
**PROPOSED_FR:** Être allongé • Se trouver
**Problēma:** Liegen signifie être allongé ou se trouver, pas « dormir »; « être » seul est trop général.
**LV etalons (konteksts):** atrasties • gulēt
**DE konteksts:** liegen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0398
**Card ID:** a1-land
**Field:** study.translation
**CURRENT:** Pays • Terrain
**PROPOSED_FR:** Pays
**Problēma:** Deux traductions distinctes sont séparées par une puce; une décision éditoriale est requise.
**LV etalons (konteksts):** valsts • zeme
**DE konteksts:** Land
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0400
**Card ID:** a1-leise-study
**Field:** frMain
**CURRENT:** Calme
**PROPOSED_FR:** Silencieux
**Problēma:** « Calme » signifie surtout paisible; leise correspond ici à « silencieux » ou « doucement ».
**LV etalons (konteksts):** kluss
**DE konteksts:** leise
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0401
**Card ID:** a1-lauten-study
**Field:** study.translation
**CURRENT:** Le son
**PROPOSED_FR:** Le son
**Problēma:** Aucune traduction multiple détectée.
**LV etalons (konteksts):** skaņa
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0402
**Card ID:** a1-machen
**Field:** study.translation
**CURRENT:** Faire • Faire
**PROPOSED_FR:** Faire
**Problēma:** Le champ contient deux traductions distinctes séparées par « • », mais elles sont identiques en français.
**LV etalons (konteksts):** darīt • taisīt
**DE konteksts:** machen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0403
**Card ID:** a1-machen
**Field:** study.examples[0].lv
**CURRENT:** Que fais-tu
**PROPOSED_FR:** Que fais-tu ?
**Problēma:** La question française doit comporter un point d'interrogation.
**LV etalons (konteksts):** ko tu dari?
**DE konteksts:** machen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0404
**Card ID:** a1-machen
**Field:** study.examples[2].lv
**CURRENT:** Nous faisons des pizzas.
**PROPOSED_FR:** Nous faisons une pizza.
**Problēma:** Le contexte letton est au singulier ; « une pizza » correspond mieux à l'exemple source.
**LV etalons (konteksts):** mēs taisām picu.
**DE konteksts:** machen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0405
**Card ID:** a1-mal
**Field:** study.examples[3].lv
**CURRENT:** Encore une fois s'il vous plaît !
**PROPOSED_FR:** Encore une fois, s'il vous plaît !
**Problēma:** Une virgule est requise après le groupe introductif « Encore une fois ».
**LV etalons (konteksts):** vēl vienu reizi, lūdzu!
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0406
**Card ID:** a1-mann
**Field:** study.translation
**CURRENT:** Homme • Mari
**PROPOSED_FR:** Homme • Mari
**Problēma:** Deux traductions distinctes sont explicitement séparées par « • » ; une décision éditoriale est requise.
**LV etalons (konteksts):** vīrietis • vīrs
**DE konteksts:** Mann
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0407
**Card ID:** a1-mit
**Field:** study.examples[0].lv
**CURRENT:** Je viens avec toi
**PROPOSED_FR:** Je viens avec toi.
**Problēma:** La phrase française doit se terminer par un point.
**LV etalons (konteksts):** es nāku ar tevi.
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0408
**Card ID:** a1-mögen
**Field:** study.examples[0].lv
**CURRENT:** J'aime la musique
**PROPOSED_FR:** J'aime la musique.
**Problēma:** La phrase française doit se terminer par un point.
**LV etalons (konteksts):** man patīk mūzika.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0409
**Card ID:** a1-mögen
**Field:** study.examples[3].lv
**CURRENT:** Je voudrais du café
**PROPOSED_FR:** Je voudrais du café.
**Problēma:** La phrase française doit se terminer par un point.
**LV etalons (konteksts):** es gribētu kafiju.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0410
**Card ID:** a1-morgen
**Field:** study.examples[2].lv
**CURRENT:** Je viens demain
**PROPOSED_FR:** Je viens demain.
**Problēma:** La phrase française doit se terminer par un point.
**LV etalons (konteksts):** es nāku rīt.
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0411
**Card ID:** a1-morgen
**Field:** study.examples[3].lv
**CURRENT:** Demain c'est lundi
**PROPOSED_FR:** Demain, c'est lundi.
**Problēma:** Il manque la virgule après l'adverbe placé en tête et le point final.
**LV etalons (konteksts):** rīt ir pirmdiena.
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0412
**Card ID:** a1-morgen
**Field:** study.examples[4].lv
**CURRENT:** Bonjour!
**PROPOSED_FR:** Bonjour !
**Problēma:** En typographie française, une espace précède le point d'exclamation.
**LV etalons (konteksts):** labrīt!
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0413
**Card ID:** a1-morgen-study
**Field:** study.translation
**CURRENT:** Le matin
**PROPOSED_FR:** Le matin
**Problēma:** Le champ contient plusieurs traductions séparées par « • » dans la structure attendue, mais aucune n'est visible ici.
**LV etalons (konteksts):** rīts
**DE konteksts:** Morgen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0417
**Card ID:** a1-müssen
**Field:** study.examples[0].lv
**CURRENT:** Je dois y aller
**PROPOSED_FR:** Je dois y aller.
**Problēma:** La phrase française doit se terminer par un point.
**LV etalons (konteksts):** man jāiet.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0418
**Card ID:** a1-müssen
**Field:** study.examples[3].lv
**CURRENT:** Je dois travailler aujourd'hui
**PROPOSED_FR:** Je dois travailler aujourd'hui.
**Problēma:** La phrase française doit se terminer par un point.
**LV etalons (konteksts):** man šodien jāstrādā.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0419
**Card ID:** a1-nach
**Field:** study.translation
**CURRENT:** À • Après
**PROPOSED_FR:** À • Après
**Problēma:** Deux traductions distinctes sont séparées par « • » ; ce format nécessite une décision éditoriale.
**LV etalons (konteksts):** uz • pēc
**DE konteksts:** nach
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0420
**Card ID:** a1-natuerlich
**Field:** study.translation
**CURRENT:** Bien sûr • Naturel
**PROPOSED_FR:** Bien sûr • Naturel
**Problēma:** Deux traductions distinctes sont séparées par « • » ; ce format nécessite une décision éditoriale.
**LV etalons (konteksts):** protams • dabisks
**DE konteksts:** natürlich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0421
**Card ID:** a1-natuerlich
**Field:** study.examples[0].lv
**CURRENT:** Viens-tu avec moi ? - bien sûr!
**PROPOSED_FR:** Viens-tu avec moi ? – Bien sûr !
**Problēma:** Il faut une majuscule après le tiret, un tiret cadratin et une espace avant le point d'exclamation.
**LV etalons (konteksts):** vai nāc līdzi? – protams!
**DE konteksts:** natürlich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0422
**Card ID:** a1-nehmen
**Field:** study.translation
**CURRENT:** Prendre • Prendre
**PROPOSED_FR:** Prendre
**Problēma:** Le champ contient deux traductions distinctes séparées par « • », mais elles sont identiques en français.
**LV etalons (konteksts):** ņemt • paņemt
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0423
**Card ID:** a1-nur-study
**Field:** frMain
**CURRENT:** Seulement • Seulement
**PROPOSED_FR:** Seulement
**Problēma:** Deux équivalents distincts sont présentés, mais le français répète le même mot. Validation éditoriale nécessaire.
**LV etalons (konteksts):** tikai • vienīgi
**DE konteksts:** nur
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0424
**Card ID:** a1-nur-study
**Field:** study.translation
**CURRENT:** Seulement • Seulement
**PROPOSED_FR:** Seulement
**Problēma:** Deux équivalents distincts sont présentés, mais le français répète le même mot. Validation éditoriale nécessaire.
**LV etalons (konteksts):** tikai • vienīgi
**DE konteksts:** nur
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0425
**Card ID:** a1-oder
**Field:** frMain
**CURRENT:** Ou • Ou
**PROPOSED_FR:** Ou
**Problēma:** Deux équivalents distincts sont présentés, mais le français répète le même mot. Validation éditoriale nécessaire.
**LV etalons (konteksts):** vai • jeb
**DE konteksts:** oder
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0426
**Card ID:** a1-oder
**Field:** study.translation
**CURRENT:** Ou • Ou
**PROPOSED_FR:** Ou
**Problēma:** Deux équivalents distincts sont présentés, mais le français répète le même mot. Validation éditoriale nécessaire.
**LV etalons (konteksts):** vai • jeb
**DE konteksts:** oder
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0427
**Card ID:** a1-passen
**Field:** study.translation
**CURRENT:** Ajustement • Ajustement
**PROPOSED_FR:** Convenir • Aller (à quelqu'un)
**Problēma:** Ajustement est un nom, alors que passen est un verbe; les deux équivalents français sont aussi répétés.
**LV etalons (konteksts):** derēt • piestāvēt
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0428
**Card ID:** a1-probieren
**Field:** frMain
**CURRENT:** A essayer • A déguster
**PROPOSED_FR:** À essayer • À déguster
**Problēma:** La préposition à prend un accent grave dans ces deux expressions françaises.
**LV etalons (konteksts):** izmēģināt • nogaršot
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0429
**Card ID:** a1-probieren
**Field:** study.translation
**CURRENT:** A essayer • A déguster
**PROPOSED_FR:** À essayer • À déguster
**Problēma:** La préposition à prend un accent grave dans ces deux expressions françaises.
**LV etalons (konteksts):** izmēģināt • nogaršot
**DE konteksts:** probieren
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0431
**Card ID:** a1-sehen
**Field:** study.examples[1].lv
**CURRENT:** Voyez-vous cette voiture
**PROPOSED_FR:** Vois-tu cette voiture ?
**Problēma:** Le français emploie le vouvoiement, alors que la source indique le tutoiement singulier.
**LV etalons (konteksts):** vai tu redzi to auto?
**DE konteksts:** sehen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0432
**Card ID:** a1-seite
**Field:** study.translation
**CURRENT:** Page • Côté
**PROPOSED_FR:** Page (côté)
**Problēma:** Deux traductions distinctes sont séparées par une puce ; une validation éditoriale est nécessaire pour le format.
**LV etalons (konteksts):** lappuse • puse
**DE konteksts:** Seite
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0433
**Card ID:** a1-sich
**Field:** study.translation
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_FR:** Soi-même
**Problēma:** Le pronom français est indûment limité au vouvoiement et deux sens sont séparés par une puce.
**LV etalons (konteksts):** sevi • sev
**DE konteksts:** sich
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0437
**Card ID:** a1-sicher
**Field:** study.translation
**CURRENT:** Sûr • Certainement
**PROPOSED_FR:** Sûr (certainement)
**Problēma:** Deux sens distincts sont séparés par une puce ; une validation éditoriale est nécessaire pour le format.
**LV etalons (konteksts):** drošs • noteikti
**DE konteksts:** sicher
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0438
**Card ID:** a1-sie-study
**Field:** frMain
**CURRENT:** Elle
**PROPOSED_FR:** Ils ou elles
**Problēma:** La source indique un pronom personnel pluriel, pas le singulier féminin « elle ».
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0439
**Card ID:** a1-sie-study
**Field:** study.translation
**CURRENT:** Ils/elle
**PROPOSED_FR:** Ils ou elles
**Problēma:** Le singulier « elle » contredit la source plurielle et deux formes sont séparées par une barre oblique.
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0441
**Card ID:** a1-über
**Field:** study.translation
**CURRENT:** Fini • Pour
**PROPOSED_FR:** Au-dessus ou à propos de
**Problēma:** Les deux traductions sont séparées par une puce et « fini » ainsi que « pour » ne conviennent pas à über.
**LV etalons (konteksts):** virs • par
**DE konteksts:** über
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0443
**Card ID:** a1-über
**Field:** study.comparison[3].meaning
**CURRENT:** De/à propos d'une source
**PROPOSED_FR:** De ou à propos d'une source
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique ; le format doit être validé.
**LV etalons (konteksts):** no / par no kāda avota
**DE konteksts:** über
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0444
**Card ID:** a1-um
**Field:** study.translation
**CURRENT:** Vers • Heures
**PROPOSED_FR:** Autour ou à (une heure)
**Problēma:** Le second élément n'est pas une traduction française complète et les deux sens sont séparés par une puce.
**LV etalons (konteksts):** ap • pulksten
**DE konteksts:** um
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0446
**Card ID:** a1-um
**Field:** study.comparison[1].meaning
**CURRENT:** Par jour / à
**PROPOSED_FR:** Par jour ou à
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique ; le format doit être validé.
**LV etalons (konteksts):** dienā / pie
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0447
**Card ID:** a1-um
**Field:** study.comparison[2].meaning
**CURRENT:** Vers cette heure / contre
**PROPOSED_FR:** Vers cette heure ou contre
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique ; le format doit être validé.
**LV etalons (konteksts):** ap laiku / pret
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0450
**Card ID:** a1-verstehen
**Field:** study.examples[0].lv
**CURRENT:** Je te comprends
**PROPOSED_FR:** Je te comprends.
**Problēma:** La phrase française correcte doit se terminer par un point.
**LV etalons (konteksts):** es tevi saprotu.
**DE konteksts:** verstehen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0451
**Card ID:** a1-verstehen
**Field:** study.examples[1].lv
**CURRENT:** Comprenez-vous l'allemand
**PROPOSED_FR:** Comprenez-vous l'allemand ?
**Problēma:** Il manque le point d'interrogation final, avec l'espacement typographique français.
**LV etalons (konteksts):** vai tu saproti vāciski?
**DE konteksts:** verstehen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0453
**Card ID:** a1-vom
**Field:** study.comparison[0].meaning
**CURRENT:** De (une chose précise, de qui ?)
**PROPOSED_FR:** De, pour une chose précise ou une personne précise
**Problēma:** Le champ juxtapose plusieurs explications et nécessite une décision éditoriale.
**LV etalons (konteksts):** no (konkrēta lieta, kam?)
**DE konteksts:** vom
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0454
**Card ID:** a1-vom
**Field:** study.comparison[2].meaning
**CURRENT:** De l'intérieur / origine
**PROPOSED_FR:** De l'intérieur ou origine
**Problēma:** Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
**LV etalons (konteksts):** no iekšienes / izcelsme
**DE konteksts:** vom
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0455
**Card ID:** a1-vom
**Field:** study.comparison[3].meaning
**CURRENT:** À partir de (heure/lieu)
**PROPOSED_FR:** À partir de (heure ou lieu)
**Problēma:** Deux contextes distincts sont séparés par une barre oblique.
**LV etalons (konteksts):** sākot no (laiks/vieta)
**DE konteksts:** vom
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0456
**Card ID:** a1-vor
**Field:** study.translation
**CURRENT:** Avant • Devant
**PROPOSED_FR:** Avant dans le temps ou devant dans l'espace
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par un point médian.
**LV etalons (konteksts):** pirms • priekšā
**DE konteksts:** vor
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0457
**Card ID:** a1-vor
**Field:** study.examples[3].lv
**CURRENT:** Après avoir mangé, nous partons nous promener.
**PROPOSED_FR:** Avant de manger, nous partons nous promener.
**Problēma:** « Après » correspond à nach, tandis que vor signifie « avant ».
**LV etalons (konteksts):** pēc ēšanas mēs ejam pastaigāties.
**DE konteksts:** vor
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0458
**Card ID:** a1-was
**Field:** study.translation
**CURRENT:** Qui • Quoi
**PROPOSED_FR:** Quoi
**Problēma:** Was signifie « quoi », pas « qui » ; « qui » correspond à wer.
**LV etalons (konteksts):** kas • ko
**DE konteksts:** was
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0459
**Card ID:** a1-was
**Field:** study.examples[0].lv
**CURRENT:** Qu'est-ce que c'est?
**PROPOSED_FR:** Qu'est-ce que c'est ?
**Problēma:** Il manque l'espace typographique avant le point d'interrogation en français.
**LV etalons (konteksts):** Kas tas ir?
**DE konteksts:** was
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0460
**Card ID:** a1-was
**Field:** study.examples[2].lv
**CURRENT:** Que fais-tu en ce moment
**PROPOSED_FR:** Que fais-tu en ce moment ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** Ko tu tagad dari?
**DE konteksts:** was
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0461
**Card ID:** a1-was
**Field:** study.examples[3].lv
**CURRENT:** Que veux-tu boire
**PROPOSED_FR:** Que veux-tu boire ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** Ko tu vēlies dzert?
**DE konteksts:** was
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0462
**Card ID:** a1-wenn
**Field:** study.translation
**CURRENT:** Si • Quand
**PROPOSED_FR:** Si pour une condition ou quand dans le temps
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par un point médian.
**LV etalons (konteksts):** ja • kad
**DE konteksts:** wenn
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0463
**Card ID:** a1-wenn
**Field:** study.examples[0].lv
**CURRENT:** Si vous avez le temps, passez nous voir.
**PROPOSED_FR:** Si tu as le temps, passe nous voir.
**Problēma:** Le tutoiement letton « tev » est traduit par un vouvoiement français incohérent.
**LV etalons (konteksts):** ja tev ir laiks, iegriezies.
**DE konteksts:** wenn
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0464
**Card ID:** a1-wie
**Field:** study.translation
**CURRENT:** Comment • Combien
**PROPOSED_FR:** Comment ou combien, selon le contexte
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par un point médian.
**LV etalons (konteksts):** kā • cik
**DE konteksts:** wie
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0465
**Card ID:** a1-wie
**Field:** study.examples[0].lv
**CURRENT:** Comment vas-tu
**PROPOSED_FR:** Comment vas-tu ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** kā tev iet?
**DE konteksts:** wie
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0466
**Card ID:** a1-wie
**Field:** study.examples[2].lv
**CURRENT:** Combien ça coûte
**PROPOSED_FR:** Combien ça coûte ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** cik tas maksā?
**DE konteksts:** wie
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0467
**Card ID:** a1-wie
**Field:** study.examples[3].lv
**CURRENT:** Quel âge as-tu
**PROPOSED_FR:** Quel âge as-tu ?
**Problēma:** Il manque le point d'interrogation final.
**LV etalons (konteksts):** cik tev gadu?
**DE konteksts:** wie
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0468
**Card ID:** a1-wie
**Field:** study.examples[4].lv
**CURRENT:** Combien de temps dure le film?
**PROPOSED_FR:** Combien de temps dure le film ?
**Problēma:** Il manque l'espace typographique avant le point d'interrogation.
**LV etalons (konteksts):** cik ilgi ilgst filma?
**DE konteksts:** wie
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0469
**Card ID:** a1-zu
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À • Chez • Trop • Devant un infinitif
**Problēma:** La traduction duplique « à » et omet les sens « chez », « trop » et l'infinitif.
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zu
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0471
**Card ID:** a1-zu
**Field:** study.comparison[1].meaning
**CURRENT:** Vers avec les villes/pays
**PROPOSED_FR:** Vers avec les villes ou les pays
**Problēma:** Deux catégories de lieux sont séparées par une barre oblique.
**LV etalons (konteksts):** uz ar pilsētām/valstīm
**DE konteksts:** zu
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0472
**Card ID:** a1-zu
**Field:** study.comparison[2].meaning
**CURRENT:** Dans/vers un lieu
**PROPOSED_FR:** Dans ou vers un lieu
**Problēma:** Deux sens distincts sont séparés par une barre oblique.
**LV etalons (konteksts):** iekšā / uz vietu
**DE konteksts:** zu
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0473
**Card ID:** a1-zu
**Field:** study.comparison[3].meaning
**CURRENT:** Chez quelqu'un / au travail
**PROPOSED_FR:** Chez quelqu'un ou au travail
**Problēma:** Deux emplois distincts sont séparés par une barre oblique.
**LV etalons (konteksts):** pie kāda / pie darba
**DE konteksts:** zu
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0475
**Card ID:** a1-zug
**Field:** study.examples[1].lv
**CURRENT:** Je voyage en train
**PROPOSED_FR:** Je voyage en train.
**Problēma:** La phrase française correcte doit se terminer par un point.
**LV etalons (konteksts):** es braucu ar vilcienu.
**DE konteksts:** Zug
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0476
**Card ID:** a1-zum
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À ou chez
**Problēma:** Les deux traductions françaises sont identiques et ne distinguent pas les sens « à » et « chez ».
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0480
**Card ID:** a1-essen-study
**Field:** study.translation
**CURRENT:** Alimentation • Repas
**PROPOSED_FR:** Alimentation ou repas
**Problēma:** Le champ learner-facing présente plusieurs traductions distinctes séparées par un point médian ; décision du propriétaire requise.
**LV etalons (konteksts):** ēdiens • maltīte
**DE konteksts:** Essen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0486
**Card ID:** a1-einmal
**Field:** study.translation
**CURRENT:** Une fois • Une fois
**PROPOSED_FR:** Une fois
**Problēma:** La traduction française est répétée deux fois au lieu d'une seule entrée.
**LV etalons (konteksts):** vienreiz • reiz
**DE konteksts:** einmal
**Smagums:** LOW
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0487
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
#### FR-A1-0489
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
#### FR-A1-0490
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
#### FR-A1-0492
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
#### FR-A1-0493
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
#### FR-A1-0494
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
#### FR-A1-0495
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
#### FR-A1-0496
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
#### FR-A1-0497
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
#### FR-A1-0498
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
#### FR-A1-0499
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
#### FR-A1-0500
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
#### FR-A1-0501
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
#### FR-A1-0502
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
#### FR-A1-0503
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
#### FR-A1-0504
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
#### FR-A1-0505
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
#### FR-A1-0506
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
#### FR-A1-0507
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
#### FR-A1-0508
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
#### FR-A1-0510
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
#### FR-A1-0511
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
#### FR-A1-0512
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
#### FR-A1-0513
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
#### FR-A1-0514
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
#### FR-A1-0515
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
#### FR-A1-0516
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
#### FR-A1-0517
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
#### FR-A1-0518
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
#### FR-A1-0519
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
#### FR-A1-0520
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
#### FR-A1-0521
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
#### FR-A1-0522
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
#### FR-A1-0523
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
#### FR-A1-0524
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
#### FR-A1-0525
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
#### FR-A1-0526
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
#### FR-A1-0527
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
#### FR-A1-0528
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
#### FR-A1-0529
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
#### FR-A1-0530
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
#### FR-A1-0531
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
#### FR-A1-0532
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
#### FR-A1-0534
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
#### FR-A1-0535
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
#### FR-A1-0536
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
#### FR-A1-0537
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
#### FR-A1-0538
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
#### FR-A1-0539
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
#### FR-A1-0540
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
#### FR-A1-0541
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
#### FR-A1-0542
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
#### FR-A1-0543
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
