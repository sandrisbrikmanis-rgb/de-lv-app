# FR–DE A1 POST-REPAIR pilns lingvistiskais audits (MASTER v1.12 · PR #683 HEAD)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.12** |
| **AUDIT MODE** | POST_REPAIR_FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `a2a769e8600291411a7a66eab0483dd4659c9151` |
| **DATASET_PRODUCTION_BLOB** | `80ff1d59f78f5ba5819bd6207be2609481f21cb2` |
| **WWW DATASET BLOB** | `80ff1d59f78f5ba5819bd6207be2609481f21cb2` |
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
| RAW findings | **535** |
| NEW_VALIDATED_REAL_FINDINGS | **40** |
| OWNER_BACKLOG_FINAL | **40** |
| PREVIOUSLY_SEEN_RAW | **440** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **40** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **702/702 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **55** |
| sectionAccents | **232** |
| LV remnants | **227** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 147 |
| Deterministic | 388 |
| OWNER_DECISION_CONFIRMED | 55 |
| OWNER_DECISION_REOPEN_REQUIRED | **4** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **440** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **40** |
| OWNER_BACKLOG_FINAL | **40** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **PASS** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 702/702 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **0** · HIGH: **331** · MEDIUM: **108** · LOW: **41**

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
**Card ID:** a1-sehen
**Field:** study.sectionAccents (examples)
**CURRENT:** Voyez
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0298
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
#### FR-A1-0299
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
#### FR-A1-0300
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
#### FR-A1-0301
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
#### FR-A1-0302
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
#### FR-A1-0303
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
#### FR-A1-0304
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
#### FR-A1-0305
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
#### FR-A1-0306
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
#### FR-A1-0307
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
#### FR-A1-0308
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
#### FR-A1-0309
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
#### FR-A1-0310
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
#### FR-A1-0311
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
#### FR-A1-0312
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
#### FR-A1-0313
**Card ID:** a1-vor
**Field:** study.sectionAccents (examples)
**CURRENT:** Après
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0314
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
#### FR-A1-0315
**Card ID:** a1-wenn
**Field:** study.sectionAccents (examples)
**CURRENT:** vous
**PROPOSED_FR:** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0316
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
#### FR-A1-0317
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
#### FR-A1-0318
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
#### FR-A1-0319
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
#### FR-A1-0320
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
#### FR-A1-0321
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
#### FR-A1-0322
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
#### FR-A1-0323
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
#### FR-A1-0324
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
#### FR-A1-0325
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
#### FR-A1-0326
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
#### FR-A1-0327
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
#### FR-A1-0328
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
#### FR-A1-0329
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
#### FR-A1-0330
**Card ID:** a1-also
**Field:** study.sectionAccents.tip.left
**CURRENT:** Rappelez
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "Rappelez" nav atrodams sadaļā tip
**DE konteksts:** also
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0331
**Card ID:** a1-auch
**Field:** study.sectionAccents.examples.lv
**CURRENT:** viens
**PROPOSED_FR:** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "viens" nav atrodams sadaļā examples
**DE konteksts:** auch
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### FR-A1-0332
**Card ID:** a1-telefonieren-594
**Field:** frText
**CURRENT:** Appeler au téléphone
**PROPOSED_FR:** Téléphoner
**Problēma:** « Appeler au téléphone » est compréhensible mais peu idiomatique comme équivalent lexical de « telefonieren ».
**LV etalons (konteksts):** zvanīt pa tālruni
**DE konteksts:** telefonieren
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0333
**Card ID:** a1-an
**Field:** study.translation
**CURRENT:** À • À • Présent
**PROPOSED_FR:** À
**Problēma:** Le champ contient plusieurs entrées et « Présent » n’est pas une traduction française de « an ».
**LV etalons (konteksts):** pie
**DE konteksts:** an
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0335
**Card ID:** a1-an
**Field:** study.comparison[1].meaning
**CURRENT:** Sur une surface horizontale
**PROPOSED_FR:** Sur une surface verticale
**Problēma:** « An » renvoie notamment à une position contre ou sur une surface verticale, non horizontale.
**LV etalons (konteksts):** uz horizontālas virsmas
**DE konteksts:** an
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0338
**Card ID:** a1-aus
**Field:** study.translation
**CURRENT:** De • Sortie
**PROPOSED_FR:** De
**Problēma:** Le point médian sépare plusieurs entrées et « Sortie » est une indication de sens, pas une traduction.
**LV etalons (konteksts):** no
**DE konteksts:** aus
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0339
**Card ID:** a1-aufs
**Field:** study.translation
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_FR:** Sur
**Problēma:** Le champ contient plusieurs traductions et « Où ? » n’est pas une traduction de « aufs ».
**LV etalons (konteksts):** uz
**DE konteksts:** aufs
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0342
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** Il nage très bien.
**PROPOSED_FR:** Il se baigne très bien.
**Problēma:** « Nager » traduit « schwimmen » ; « baden » signifie se baigner.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0345
**Card ID:** a1-bleiben
**Field:** study.comparison[1].meaning
**CURRENT:** Aller/partir à pied
**PROPOSED_FR:** Aller ou partir à pied
**Problēma:** Le champ combine deux traductions distinctes séparées par une barre oblique ; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** iet / doties prom kājām
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0346
**Card ID:** a1-bleiben
**Field:** study.comparison[2].meaning
**CURRENT:** Conduire / partir en transport
**PROPOSED_FR:** Conduire ou partir en transport
**Problēma:** Le champ combine deux traductions distinctes séparées par une barre oblique ; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** braukt / doties ar transportu
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0347
**Card ID:** a1-bringen
**Field:** study.translation
**CURRENT:** À emporter • À emporter
**PROPOSED_FR:** Apporter
**Problēma:** « À emporter » signifie prendre avec soi, non apporter ; la traduction est en outre dupliquée.
**LV etalons (konteksts):** atnest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0349
**Card ID:** a1-ein
**Field:** study.translation
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_FR:** Article indéfini • Un
**Problēma:** « Quelqu'un » traduit plutôt jemand, pas ein dans cet emploi.
**LV etalons (konteksts):** nenoteiktais artikuls
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0351
**Card ID:** a1-erst
**Field:** study.translation
**CURRENT:** Premier • Seulement
**PROPOSED_FR:** D'abord • Seulement
**Problēma:** « Premier » est adjectival; erst se traduit ici par l'adverbe « d'abord ».
**LV etalons (konteksts):** tikai
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0352
**Card ID:** a1-erst
**Field:** study.comparison[0].meaning
**CURRENT:** D'abord • Seulement
**PROPOSED_FR:** D'abord
**Problēma:** Le champ contient plusieurs traductions séparées par une puce; une décision éditoriale est requise.
**LV etalons (konteksts):** vispirms • tikai
**DE konteksts:** erst
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0353
**Card ID:** a1-erst
**Field:** study.comparison[1].meaning
**CURRENT:** D'abord • Au début
**PROPOSED_FR:** D'abord
**Problēma:** Le champ contient plusieurs traductions séparées par une puce; une décision éditoriale est requise.
**LV etalons (konteksts):** vispirms • sākumā
**DE konteksts:** erst
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0354
**Card ID:** a1-es
**Field:** study.translation
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_FR:** Il
**Problēma:** Le champ contient plusieurs traductions séparées par des puces; une décision éditoriale est requise.
**LV etalons (konteksts):** tas
**DE konteksts:** es
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0356
**Card ID:** a1-etwas
**Field:** study.translation
**CURRENT:** Quelque chose • Un peu
**PROPOSED_FR:** Quelque chose
**Problēma:** Le champ contient plusieurs traductions séparées par une puce; une décision éditoriale est requise.
**LV etalons (konteksts):** kaut kas
**DE konteksts:** etwas
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0357
**Card ID:** a1-etwas
**Field:** study.comparison[0].meaning
**CURRENT:** Quelque chose
**PROPOSED_FR:** Quelque chose / Un peu
**Problēma:** La source indique deux emplois, mais la traduction française n'en rend qu'un seul.
**LV etalons (konteksts):** kaut kas / nedaudz
**DE konteksts:** etwas
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0359
**Card ID:** a1-fahren
**Field:** study.translation
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_FR:** Conduire • Voyager en véhicule
**Problēma:** « Diriger » et « emporter » ne correspondent pas aux sens A1 principaux de fahren.
**LV etalons (konteksts):** braukt
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0360
**Card ID:** a1-fahren
**Field:** study.comparison[4].meaning
**CURRENT:** Emportez avec vous
**PROPOSED_FR:** Emporter avec soi
**Problēma:** Le comparatif demande un infinitif ou un groupe nominal, pas l'impératif « emportez ».
**LV etalons (konteksts):** paņemt līdzi
**DE konteksts:** fahren
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0361
**Card ID:** a1-finden
**Field:** study.translation
**CURRENT:** Trouver • Considérer
**PROPOSED_FR:** Trouver
**Problēma:** Le champ contient plusieurs traductions séparées par une puce; une décision éditoriale est requise.
**LV etalons (konteksts):** atrast
**DE konteksts:** finden
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0362
**Card ID:** a1-finden
**Field:** study.comparison[0].meaning
**CURRENT:** Trouver / penser
**PROPOSED_FR:** Trouver
**Problēma:** Le champ contient plusieurs traductions séparées par une barre oblique; une décision éditoriale est requise.
**LV etalons (konteksts):** atrast / uzskatīt
**DE konteksts:** finden
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0363
**Card ID:** a1-frau
**Field:** study.translation
**CURRENT:** Femme • Épouse
**PROPOSED_FR:** Femme
**Problēma:** Le champ contient plusieurs traductions séparées par une puce; une décision éditoriale est requise.
**LV etalons (konteksts):** sieviete
**DE konteksts:** Frau
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0364
**Card ID:** a1-ganz-study
**Field:** study.examples[3].lv
**CURRENT:** Le repas est assez bon.
**PROPOSED_FR:** Le repas est tout à fait bon.
**Problēma:** « assez bon » signifie plutôt bon, pas complètement bon comme « ganz » dans ce contexte.
**LV etalons (konteksts):** ēdiens ir diezgan labs.
**DE konteksts:** ganz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0365
**Card ID:** a1-geben
**Field:** study.examples[0].lv
**CURRENT:** Donne-moi le livre s'il te plaît
**PROPOSED_FR:** Donne-moi le livre, s'il te plaît.
**Problēma:** La phrase française nécessite une virgule d'incise et une ponctuation finale.
**LV etalons (konteksts):** iedod man, lūdzu, grāmatu.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Donner
**Statuss:** PENDING
#### FR-A1-0366
**Card ID:** a1-geben
**Field:** study.examples[1].lv
**CURRENT:** Je te donne mon numéro
**PROPOSED_FR:** Je te donne mon numéro.
**Problēma:** La phrase française nécessite une ponctuation finale.
**LV etalons (konteksts):** es tev dodu savu numuru.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Donner
**Statuss:** PENDING
#### FR-A1-0367
**Card ID:** a1-geben
**Field:** study.examples[2].lv
**CURRENT:** Je prends le livre
**PROPOSED_FR:** Je donne le livre.
**Problēma:** « Je prends » traduit nehmen, pas geben ; l'exemple contredit le mot allemand ciblé.
**LV etalons (konteksts):** es paņemu grāmatu.
**DE konteksts:** geben
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Donner
**Statuss:** PENDING
#### FR-A1-0368
**Card ID:** a1-geben
**Field:** study.examples[3].lv
**CURRENT:** Je reçois un cadeau
**PROPOSED_FR:** Je donne un cadeau.
**Problēma:** « Je reçois » traduit bekommen/erhalten, pas geben ; l'exemple contredit le mot allemand ciblé.
**LV etalons (konteksts):** es saņemu dāvanu.
**DE konteksts:** geben
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Donner
**Statuss:** PENDING
#### FR-A1-0369
**Card ID:** a1-geben
**Field:** study.tip.text
**CURRENT:** Rappelez-vous : donner → geben • Prends pour toi → nehmen.
**Problēma:** Le séparateur « • » présente plusieurs distinctions dans un champ apprenant ; décision éditoriale requise.
**LV etalons (konteksts):** Atceries: dot prom → geben; paņemt sev → nehmen.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0370
**Card ID:** a1-geschwister-study
**Field:** study.examples[0].lv
**CURRENT:** J'ai deux frères et sœurs.
**PROPOSED_FR:** J'ai deux frères ou deux sœurs.
**Problēma:** La formulation actuelle peut signifier deux frères et deux sœurs, au lieu de deux frères ou deux sœurs.
**LV etalons (konteksts):** man ir divi brāļi vai māsas.
**DE konteksts:** Geschwister
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0371
**Card ID:** a1-gleich
**Field:** study.translation
**CURRENT:** Immédiatement • Égal
**Problēma:** Deux traductions distinctes sont séparées par « • » ; le choix dépend du sens ciblé.
**LV etalons (konteksts):** tūlīt
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0372
**Card ID:** a1-halten
**Field:** study.translation
**CURRENT:** Maintenir • Arrêter
**Problēma:** Deux traductions distinctes sont séparées par « • » ; décision éditoriale requise.
**LV etalons (konteksts):** turēt
**DE konteksts:** halten
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0376
**Card ID:** a1-heißen
**Field:** study.translation
**CURRENT:** Être appelé • Moyen
**PROPOSED_FR:** S'appeler • Signifier
**Problēma:** La traduction contient plusieurs sens et « Moyen » ne correspond pas à heißen.
**LV etalons (konteksts):** saukties
**DE konteksts:** heißen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0378
**Card ID:** a1-hoeren-study
**Field:** study.translation
**CURRENT:** Entendre • Écouter
**PROPOSED_FR:** Entendre ou écouter
**Problēma:** Le champ contient plusieurs traductions séparées par une puce ; une décision éditoriale est requise.
**LV etalons (konteksts):** dzirdēt • klausīties
**DE konteksts:** hören
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0379
**Card ID:** a1-huebsch
**Field:** study.tip.text
**CURRENT:** hübsch décrit surtout une jolie apparence ; nett décrit une personne aimable.
**PROPOSED_FR:** hübsch décrit surtout une jolie apparence ; gentil décrit une personne aimable.
**Problēma:** « nett » est un terme allemand résiduel dans le texte français.
**LV etalons (konteksts):** Atceries: hübsch galvenokārt raksturo glītu izskatu, bet nett biežāk raksturo jauku cilvēku vai izturēšanos.
**DE konteksts:** hübsch
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0380
**Card ID:** a1-ihr
**Field:** study.translation
**CURRENT:** Vous • Elle
**PROPOSED_FR:** Vous • Lui • Son/sa/ses
**Problēma:** Les sens sont multiples ; « Elle » ne traduit pas le datif lui et omet le possessif son/sa/ses.
**LV etalons (konteksts):** jūs • viņai
**DE konteksts:** ihr
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0381
**Card ID:** a1-im
**Field:** study.translation
**CURRENT:** Dans • Où ?
**PROPOSED_FR:** Dans le/la • Au/à l'intérieur
**Problēma:** Le champ juxtapose plusieurs éléments et « Où ? » est une question grammaticale, pas une traduction.
**LV etalons (konteksts):** iekšā (-ā) • kur?
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0382
**Card ID:** a1-im
**Field:** study.comparison[2].meaning
**CURRENT:** Dans / vers (pas d'article)
**PROPOSED_FR:** Dans ou vers, sans article
**Problēma:** Deux sens sont séparés par une barre oblique ; une décision éditoriale est requise.
**LV etalons (konteksts):** iekšā / uz (bez artikula)
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0383
**Card ID:** a1-im
**Field:** study.comparison[3].meaning
**CURRENT:** A, où ? (à qui ?)
**PROPOSED_FR:** À, où ? (à qui ?)
**Problēma:** La préposition française « À » doit porter un accent grave.
**LV etalons (konteksts):** pie, kur? (kam?)
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0385
**Card ID:** a1-ins
**Field:** study.translation
**CURRENT:** Dans • Dans • Où ?
**PROPOSED_FR:** Dans le/la • Vers l'intérieur • Vers où ?
**Problēma:** Le champ répète « Dans » et mélange traductions et question grammaticale.
**LV etalons (konteksts):** iekšā • uz iekšu • kurp?
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0386
**Card ID:** a1-ins
**Field:** study.comparison[2].meaning
**CURRENT:** In / to (avec article indépendant)
**PROPOSED_FR:** Dans ou vers, avec article indépendant
**Problēma:** Deux sens sont séparés par une barre oblique ; une décision éditoriale est requise.
**LV etalons (konteksts):** iekšā / uz (ar patstāvīgu artikulu)
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0387
**Card ID:** a1-ins
**Field:** study.comparison[4].meaning
**CURRENT:** À/chez (qui ?)
**PROPOSED_FR:** À ou chez (qui ?)
**Problēma:** Deux traductions sont séparées par une barre oblique ; une décision éditoriale est requise.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0388
**Card ID:** a1-kein
**Field:** study.translation
**CURRENT:** Personne • Rien
**PROPOSED_FR:** Aucun • Pas de
**Problēma:** « kein » signifie aucun/pas de ; « personne » et « rien » correspondent plutôt à niemand/nichts.
**LV etalons (konteksts):** neviens • nekāds
**DE konteksts:** kein
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0389
**Card ID:** a1-kennen-study
**Field:** study.comparison[?].meaning
**CURRENT:** Connaître ; savoir
**PROPOSED_FR:** Connaître ou savoir
**Problēma:** Deux traductions distinctes sont séparées par un point-virgule ; une décision éditoriale est requise.
**LV etalons (konteksts):** pazīt; wissen
**DE konteksts:** kennen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0390
**Card ID:** a1-können
**Field:** study.translation
**CURRENT:** Être capable de • Savoir
**PROPOSED_FR:** Pouvoir • Savoir
**Problēma:** Le champ contient plusieurs traductions séparées par • ; la sélection finale doit être validée.
**LV etalons (konteksts):** varēt • prast
**DE konteksts:** können
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0394
**Card ID:** a1-land
**Field:** study.translation
**CURRENT:** Pays • Terrain
**PROPOSED_FR:** Pays • Terre
**Problēma:** Le champ contient plusieurs traductions séparées par • ; « terre » est l’équivalent français plus direct de zeme.
**LV etalons (konteksts):** valsts • zeme
**DE konteksts:** Land
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0396
**Card ID:** a1-lang
**Field:** study.translation
**CURRENT:** Longue • Longue
**PROPOSED_FR:** Long • Longtemps
**Problēma:** Les deux formes sont identiques et « longue » est genré au féminin ; la durée se traduit ici par « longtemps ».
**LV etalons (konteksts):** garš • ilgs
**DE konteksts:** lang
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0397
**Card ID:** a1-lassen
**Field:** study.translation
**CURRENT:** Partir • Laisser
**PROPOSED_FR:** Laisser • Permettre
**Problēma:** « Partir » ne traduit pas atstāt ; le champ mélange deux sens et doit distinguer laisser et permettre.
**LV etalons (konteksts):** atstāt • ļaut
**DE konteksts:** lassen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0399
**Card ID:** a1-lassen
**Field:** study.examples[3].lv
**CURRENT:** Laisse-moi tranquille!
**PROPOSED_FR:** Laisse-moi tranquille !
**Problēma:** En typographie française, une espace précède le point d’exclamation.
**LV etalons (konteksts):** liec mani mierā!
**DE konteksts:** lassen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0400
**Card ID:** a1-laufen
**Field:** study.translation
**CURRENT:** Exécuter • Utiliser
**PROPOSED_FR:** Courir • Fonctionner
**Problēma:** Les traductions actuelles ne correspondent pas aux sens de laufen dans les exemples.
**LV etalons (konteksts):** skriet • darboties
**DE konteksts:** laufen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0402
**Card ID:** a1-laufen
**Field:** study.comparison[2].meaning
**CURRENT:** Prendre le transport
**PROPOSED_FR:** Prendre les transports
**Problēma:** « Prendre le transport » est peu naturel en français ; l’expression usuelle est « prendre les transports ».
**LV etalons (konteksts):** braukt ar transportu
**DE konteksts:** laufen
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0404
**Card ID:** a1-liegen
**Field:** study.translation
**CURRENT:** Être • Dormir
**PROPOSED_FR:** Être allongé • Se trouver
**Problēma:** « Dormir » est incorrect pour liegen ; le champ doit distinguer la position allongée et la localisation.
**LV etalons (konteksts):** atrasties • gulēt
**DE konteksts:** liegen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0405
**Card ID:** a1-liegen
**Field:** study.examples[3].lv
**CURRENT:** J'ai posé le livre sur la table.
**PROPOSED_FR:** Le livre est posé sur la table.
**Problēma:** « J’ai posé » décrit l’action legen, tandis que liegen exprime l’état résultant.
**LV etalons (konteksts):** es nolieku grāmatu uz galda.
**DE konteksts:** liegen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0406
**Card ID:** a1-machen
**Field:** study.translation
**CURRENT:** Faire • Faire
**PROPOSED_FR:** Faire
**Problēma:** La traduction est répétée deux fois au lieu d'afficher une seule équivalence.
**LV etalons (konteksts):** darīt • taisīt
**DE konteksts:** machen
**Smagums:** MEDIUM
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0407
**Card ID:** a1-mann
**Field:** study.translation
**CURRENT:** Homme • Mari
**PROPOSED_FR:** Homme
**Problēma:** Deux sens distincts sont proposés dans le champ d'apprentissage; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** vīrietis • vīrs
**DE konteksts:** Mann
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0408
**Card ID:** a1-morgen
**Field:** study.examples[4].lv
**CURRENT:** Bonjour !
**PROPOSED_FR:** Demain !
**Problēma:** Le lemme allemand morgen signifie « demain »; cet exemple français traduit le matin, pas demain.
**LV etalons (konteksts):** labrīt!
**DE konteksts:** morgen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0413
**Card ID:** a1-müssen
**Field:** study.comparison[2].meaning
**CURRENT:** Je veux
**PROPOSED_FR:** Vouloir
**Problēma:** Le champ compare des infinitifs; « Je veux » est une forme conjuguée et ne correspond pas au format attendu.
**LV etalons (konteksts):** gribēt
**DE konteksts:** müssen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0414
**Card ID:** a1-nach
**Field:** study.translation
**CURRENT:** À • Après
**PROPOSED_FR:** À
**Problēma:** Deux sens distincts sont proposés dans le champ d'apprentissage; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** uz • pēc
**DE konteksts:** nach
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0415
**Card ID:** a1-natuerlich
**Field:** study.translation
**CURRENT:** Bien sûr • Naturel
**PROPOSED_FR:** Bien sûr
**Problēma:** Deux sens distincts sont proposés dans le champ d'apprentissage; une décision éditoriale est nécessaire.
**LV etalons (konteksts):** protams • dabisks
**DE konteksts:** natürlich
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0416
**Card ID:** a1-nehmen
**Field:** study.translation
**CURRENT:** Prendre • Prendre
**PROPOSED_FR:** Prendre
**Problēma:** La traduction est répétée deux fois au lieu d'afficher une seule équivalence.
**LV etalons (konteksts):** ņemt • paņemt
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0417
**Card ID:** a1-nehmen
**Field:** study.examples[2].lv
**CURRENT:** Je t'ai apporté un livre
**PROPOSED_FR:** Je t'ai apporté un livre.
**Problēma:** La phrase française ne comporte pas de ponctuation finale, contrairement aux autres exemples.
**LV etalons (konteksts):** es tev atnesu grāmatu.
**DE konteksts:** nehmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0418
**Card ID:** a1-nehmen
**Field:** study.examples[3].lv
**CURRENT:** Je t'emmènerai
**PROPOSED_FR:** Je t'emmènerai.
**Problēma:** La phrase française ne comporte pas de ponctuation finale, contrairement aux autres exemples.
**LV etalons (konteksts):** es tevi paņemšu.
**DE konteksts:** nehmen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0419
**Card ID:** a1-nehmen
**Field:** study.comparison[3].meaning
**CURRENT:** Emportez avec vous
**PROPOSED_FR:** Emporter avec soi
**Problēma:** Le champ contient des équivalents à l'infinitif; « Emportez » est un impératif conjugué.
**LV etalons (konteksts):** paņemt līdzi
**DE konteksts:** nehmen
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0420
**Card ID:** a1-neu
**Field:** study.tip.text
**CURRENT:** Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement rīsi en letton.
**PROPOSED_FR:** Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement « riz » en français.
**Problēma:** Le mot letton « rīsi » apparaît dans le texte français destiné à l'apprenant.
**LV etalons (konteksts):** Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi.
**DE konteksts:** neu
**Smagums:** MEDIUM
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0421
**Card ID:** a1-nur-study
**Field:** study.translation
**CURRENT:** Seulement • Seulement
**PROPOSED_FR:** Seulement
**Problēma:** Les deux traductions séparées par • sont identiques; la carte n'offre pas deux formulations distinctes.
**LV etalons (konteksts):** tikai • vienīgi
**DE konteksts:** nur
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0422
**Card ID:** a1-oder
**Field:** study.translation
**CURRENT:** Ou • Ou
**PROPOSED_FR:** Ou
**Problēma:** Les deux traductions séparées par • sont identiques; la carte n'offre pas deux formulations distinctes.
**LV etalons (konteksts):** vai • jeb
**DE konteksts:** oder
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0423
**Card ID:** a1-passen
**Field:** study.translation
**CURRENT:** Ajustement • Ajustement
**PROPOSED_FR:** Convenir • Aller à quelqu'un
**Problēma:** « Ajustement » est un nom et non la traduction verbale de passen; les deux sens sont en plus dupliqués.
**LV etalons (konteksts):** derēt • piestāvēt
**DE konteksts:** passen
**Smagums:** HIGH
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0424
**Card ID:** a1-probieren
**Field:** study.translation
**CURRENT:** A essayer • A déguster
**PROPOSED_FR:** Essayer • Goûter
**Problēma:** Les traductions doivent être des infinitifs français naturels; « A essayer » et « A déguster » sont des formulations fautives ici.
**LV etalons (konteksts):** izmēģināt • nogaršot
**DE konteksts:** probieren
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0425
**Card ID:** a1-probieren
**Field:** study.comparison[0].meaning
**CURRENT:** Goûter
**PROPOSED_FR:** Essayer / goûter
**Problēma:** « Goûter » ne couvre que le sens alimentaire et omet le sens général « essayer » de probieren.
**LV etalons (konteksts):** izmēģināt / nogaršot
**DE konteksts:** probieren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0428
**Card ID:** a1-seite
**Field:** frMain
**CURRENT:** Page • Côté
**PROPOSED_FR:** Page ou côté
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par • ; une décision éditoriale est requise.
**LV etalons (konteksts):** lappuse • puse
**DE konteksts:** Seite
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0429
**Card ID:** a1-seite
**Field:** study.translation
**CURRENT:** Page • Côté
**PROPOSED_FR:** Page ou côté
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par • ; une décision éditoriale est requise.
**LV etalons (konteksts):** lappuse • puse
**DE konteksts:** Seite
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0430
**Card ID:** a1-sich
**Field:** study.translation
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_FR:** Soi-même ou à soi-même
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par • ; une décision éditoriale est requise.
**LV etalons (konteksts):** sevi • sev
**DE konteksts:** sich
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0434
**Card ID:** a1-sich
**Field:** study.comparison[3].meaning
**CURRENT:** Lui
**PROPOSED_FR:** Lui-même
**Problēma:** Lui n'est pas un pronom réfléchi ; sich correspond ici à lui-même.
**LV etalons (konteksts):** viņu
**DE konteksts:** sich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0435
**Card ID:** a1-sicher
**Field:** study.translation
**CURRENT:** Sûr • Certainement
**PROPOSED_FR:** Sûr ou certainement
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par • ; une décision éditoriale est requise.
**LV etalons (konteksts):** drošs • noteikti
**DE konteksts:** sicher
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0436
**Card ID:** a1-sie-study
**Field:** frMain
**CURRENT:** Elle
**PROPOSED_FR:** Elle ou ils ou elles
**Problēma:** sie peut signifier elle ou ils/elles ; « Elle » seul est incomplet.
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sie
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0437
**Card ID:** a1-sie-study
**Field:** study.translation
**CURRENT:** Ils/elle
**PROPOSED_FR:** Elle ou ils ou elles
**Problēma:** La coordination est incohérente : le pluriel « Ils » est associé au singulier « elle ».
**LV etalons (konteksts):** viņi / viņas
**DE konteksts:** sie
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0441
**Card ID:** a1-sollen
**Field:** study.comparison[3].meaning
**CURRENT:** Je veux
**PROPOSED_FR:** Vouloir
**Problēma:** La source est le verbe gribēt ; « Je veux » est une forme personnelle et ne correspond pas au lemme.
**LV etalons (konteksts):** gribēt
**DE konteksts:** sollen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0444
**Card ID:** a1-über
**Field:** study.translation
**CURRENT:** Fini • Pour
**PROPOSED_FR:** Au-dessus ou à propos de
**Problēma:** « Fini » et « pour » ne traduisent pas les sens spatiaux et thématiques principaux de über.
**LV etalons (konteksts):** virs • par
**DE konteksts:** über
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0446
**Card ID:** a1-um
**Field:** study.translation
**CURRENT:** Vers • Heures
**PROPOSED_FR:** Autour de ou à (une heure)
**Problēma:** « Heures » n'est pas une traduction autonome de um dans l'expression temporelle.
**LV etalons (konteksts):** ap • pulksten
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0448
**Card ID:** a1-verstehen
**Field:** study.comparison[1].meaning
**CURRENT:** Pouvoir/savoir
**PROPOSED_FR:** Pouvoir ou savoir
**Problēma:** Deux traductions distinctes sont réunies par une barre oblique dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** varēt / prast
**DE konteksts:** verstehen
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0450
**Card ID:** a1-vom
**Field:** study.comparison[0].meaning
**CURRENT:** De (une chose précise, de qui ?)
**PROPOSED_FR:** D’une chose précise, de qui ?
**Problēma:** Après « de », l'article indéfini s'élide: « d'une », et la formulation devient grammaticalement complète.
**LV etalons (konteksts):** no (konkrēta lieta, kam?)
**DE konteksts:** vom
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0451
**Card ID:** a1-vom
**Field:** study.comparison[1].meaning
**CURRENT:** De (général)
**PROPOSED_FR:** De (en général)
**Problēma:** « De (général) » est elliptique et peu naturel en français; « en général » convient ici.
**LV etalons (konteksts):** no (vispārīgi)
**DE konteksts:** vom
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0452
**Card ID:** a1-vor
**Field:** frMain
**CURRENT:** Avant • Devant
**PROPOSED_FR:** Avant ou devant
**Problēma:** Le champ learner-facing contient deux traductions distinctes séparées par une puce; décision éditoriale requise.
**LV etalons (konteksts):** pirms • priekšā
**DE konteksts:** vor
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0453
**Card ID:** a1-vor
**Field:** study.translation
**CURRENT:** Avant • Devant
**PROPOSED_FR:** Avant ou devant
**Problēma:** Le champ learner-facing contient deux traductions distinctes séparées par une puce; décision éditoriale requise.
**LV etalons (konteksts):** pirms • priekšā
**DE konteksts:** vor
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0454
**Card ID:** a1-vor
**Field:** study.comparison[0].meaning
**CURRENT:** Avant / devant
**PROPOSED_FR:** Avant ou devant
**Problēma:** Deux équivalents distincts sont séparés par une barre oblique dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** pirms / priekšā
**DE konteksts:** vor
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0455
**Card ID:** a1-vor
**Field:** study.comparison[1].meaning
**CURRENT:** Après / à
**PROPOSED_FR:** Après ou à
**Problēma:** Deux équivalents distincts sont séparés par une barre oblique dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** pēc / uz
**DE konteksts:** vor
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0456
**Card ID:** a1-was
**Field:** study.translation
**CURRENT:** Qui • Quoi
**PROPOSED_FR:** Quoi
**Problēma:** Was signifie « quoi/que », jamais « qui »; la première traduction contredit le mot allemand.
**LV etalons (konteksts):** kas • ko
**DE konteksts:** was
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0457
**Card ID:** a1-wenn
**Field:** frMain
**CURRENT:** Si • Quand
**PROPOSED_FR:** Si ou quand
**Problēma:** Deux traductions distinctes sont séparées par une puce dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** ja • kad
**DE konteksts:** wenn
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0458
**Card ID:** a1-wenn
**Field:** study.translation
**CURRENT:** Si • Quand
**PROPOSED_FR:** Si ou quand
**Problēma:** Deux traductions distinctes sont séparées par une puce dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** ja • kad
**DE konteksts:** wenn
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0459
**Card ID:** a1-wenn
**Field:** study.comparison[0].meaning
**CURRENT:** Si/quand
**PROPOSED_FR:** Si ou quand
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** ja / kad
**DE konteksts:** wenn
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0460
**Card ID:** a1-wer
**Field:** frMain
**CURRENT:** Qui • Qui
**PROPOSED_FR:** Qui
**Problēma:** La traduction est répétée inutilement; wer possède ici un seul équivalent français: « qui ».
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0461
**Card ID:** a1-wer
**Field:** study.translation
**CURRENT:** Qui • Qui
**PROPOSED_FR:** Qui
**Problēma:** La traduction est répétée inutilement; wer possède ici un seul équivalent français: « qui ».
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0462
**Card ID:** a1-wer
**Field:** study.examples[1].lv
**CURRENT:** Qui es-tu
**PROPOSED_FR:** Qui es-tu ?
**Problēma:** La phrase interrogative doit se terminer par un point d'interrogation en français.
**LV etalons (konteksts):** Kas tu esi?
**DE konteksts:** wer
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0463
**Card ID:** a1-wer
**Field:** study.examples[3].lv
**CURRENT:** Qui est ton professeur
**PROPOSED_FR:** Qui est ton professeur ?
**Problēma:** La phrase interrogative doit se terminer par un point d'interrogation en français.
**LV etalons (konteksts):** Kas ir tava skolotāja?
**DE konteksts:** wer
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0464
**Card ID:** a1-werden
**Field:** study.comparison[3].meaning
**CURRENT:** Faire/faire
**PROPOSED_FR:** Faire / fabriquer
**Problēma:** La répétition de « faire » ne distingue pas les deux notions; « fabriquer » rend le second sens plus clairement.
**LV etalons (konteksts):** darīt / taisīt
**DE konteksts:** werden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0465
**Card ID:** a1-wie
**Field:** frMain
**CURRENT:** Comment • Combien
**PROPOSED_FR:** Comment ou combien
**Problēma:** Deux traductions distinctes sont séparées par une puce dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** kā • cik
**DE konteksts:** wie
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0466
**Card ID:** a1-wie
**Field:** study.translation
**CURRENT:** Comment • Combien
**PROPOSED_FR:** Comment ou combien
**Problēma:** Deux traductions distinctes sont séparées par une puce dans un champ destiné à l'apprenant.
**LV etalons (konteksts):** kā • cik
**DE konteksts:** wie
**Smagums:** LOW
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0467
**Card ID:** a1-zu
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** À
**Problēma:** La traduction est dupliquée et ne reflète pas clairement les usages distincts de zu.
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zu
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0469
**Card ID:** a1-zum
**Field:** study.translation
**CURRENT:** À • À
**PROPOSED_FR:** Au • Chez
**Problēma:** Les deux sens sont dupliqués; « zum » se rend notamment par « au » et, selon le contexte, « chez ».
**LV etalons (konteksts):** uz • pie
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0472
**Card ID:** a1-zum
**Field:** study.examples[3].lv
**CURRENT:** Venez manger !
**PROPOSED_FR:** Viens manger !
**Problēma:** Le letton emploie l'impératif singulier informel; « venez » est pluriel ou formel.
**LV etalons (konteksts):** nāc ēst!
**DE konteksts:** zum
**Smagums:** LOW
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0473
**Card ID:** a1-essen-study
**Field:** study.translation
**CURRENT:** Alimentation • Repas
**PROPOSED_FR:** Repas
**Problēma:** Deux traductions distinctes sont séparées par « • »; une formulation unique doit être choisie pour la fiche.
**LV etalons (konteksts):** ēdiens • maltīte
**DE konteksts:** Essen
**Smagums:** MEDIUM
**Kategorija:** MULTIPLE_TRANSLATIONS_DETECTED
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### FR-A1-0479
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
#### FR-A1-0481
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
#### FR-A1-0482
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
#### FR-A1-0484
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
#### FR-A1-0485
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
#### FR-A1-0486
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
#### FR-A1-0487
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
#### FR-A1-0488
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
#### FR-A1-0489
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
#### FR-A1-0490
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
#### FR-A1-0491
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
#### FR-A1-0492
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
#### FR-A1-0493
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
#### FR-A1-0494
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
#### FR-A1-0495
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
#### FR-A1-0496
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
#### FR-A1-0497
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
#### FR-A1-0498
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
#### FR-A1-0499
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
#### FR-A1-0500
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
#### FR-A1-0502
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
#### FR-A1-0503
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
#### FR-A1-0504
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
#### FR-A1-0505
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
#### FR-A1-0506
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
#### FR-A1-0507
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
#### FR-A1-0508
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
#### FR-A1-0509
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
#### FR-A1-0510
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
#### FR-A1-0511
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
#### FR-A1-0512
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
#### FR-A1-0513
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
#### FR-A1-0514
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
#### FR-A1-0515
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
#### FR-A1-0516
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
#### FR-A1-0517
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
#### FR-A1-0518
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
#### FR-A1-0519
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
#### FR-A1-0520
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
#### FR-A1-0521
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
#### FR-A1-0522
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
#### FR-A1-0523
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
#### FR-A1-0524
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
#### FR-A1-0526
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
#### FR-A1-0527
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
#### FR-A1-0528
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
#### FR-A1-0529
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
#### FR-A1-0530
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
#### FR-A1-0531
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
#### FR-A1-0532
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
#### FR-A1-0533
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
#### FR-A1-0534
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
#### FR-A1-0535
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
