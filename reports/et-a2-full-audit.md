# ET–DE A2 pilns lingvistiskais audits (MASTER v1.8 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.8** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `52b9733bb1e350705b7450ab04b8f358bf7cc5e1` |
| **DATASET_PRODUCTION_BLOB** | `827127a7c89046c843c9a94d6d2b6e62754f8e9c` |
| **WWW DATASET BLOB** | `827127a7c89046c843c9a94d6d2b6e62754f8e9c` |
| **LAST FINAL CLOSURE MAIN SHA** | `52b9733bb1e350705b7450ab04b8f358bf7cc5e1` |
| **LAST FINAL CLOSURE DATASET BLOB** | `827127a7c89046c843c9a94d6d2b6e62754f8e9c` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **2** |
| **BASELINE STATUS** | **MATCH_POST_PR613_MAIN** |
| **OWNER HISTORY AVAILABLE** | YES |
| **OWNER HISTORY FILES LOADED** | et-a2-owner-apply-map, et-a2-owner-decisions-accepted.md, accepted-groups |
| **OWNER APPROVED FIELDS TOTAL** | **315** |
| **OWNER APPROVED FIELDS CHECKED** | **315** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **88** |
| **OWNER APPROVED FIELDS DRIFTED** | **227** |
| **OWNER HISTORY GATE** | **PASS** |
| **OWNER HISTORY LOADED** | YES (466 entries) |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.8**
**Audita datums:** 2026-08-20
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **1640** |
| Luna coverage | **100%** |
| Study | **232/231** |
| RAW findings | **458** |
| NEW_VALIDATED_REAL_FINDINGS | **225** |
| OWNER_BACKLOG_FINAL | **225** |
| PREVIOUSLY_SEEN_RAW | **3** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **225** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **PARTIAL** |
| OBJECT_COVERAGE | **1640/1640 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **230** |
| sectionAccents | **0** |
| LV remnants | **232** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 225 |
| Deterministic | 233 |
| OWNER_DECISION_CONFIRMED | 230 |
| OWNER_DECISION_REOPEN_REQUIRED | **64** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **3** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **225** |
| OWNER_BACKLOG_FINAL | **225** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **PASS** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 1640/1640 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **4** · HIGH: **179** · MEDIUM: **37** · LOW: **8**

#### ET-A2-0001
**Card ID:** STRUCT
**Field:** study.count
**CURRENT:** 232
**PROPOSED_ET:** 231
**Problēma:** Study count mismatch LV=231 ET=232
**DE konteksts:** —
**Smagums:** CRITICAL
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0002
**Card ID:** a2-abfahren
**Field:** entry[2].study.comparison[3].example
**CURRENT:** Der Bus geht gleich ab. = Buss väljub kohe. saglabāta nemainīta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0003
**Card ID:** a2-abgeben
**Field:** entry[5].study.comparison[2].example
**CURRENT:** Ich gebe das Buch LV/atlikušās valodas zurück. = Ma annan raamatu tagasi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0004
**Card ID:** a2-abgeben
**Field:** entry[5].study.comparison[4].example
**CURRENT:** Ich verkaufe mein LV/atlikušās valodas Fahrrad. = Ma müün oma jalgratta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0005
**Card ID:** a2-absagen
**Field:** entry[11].study.comparison[3].example
**CURRENT:** Ich storniere die LV/atlikušās valodas Buchung. = Ma tühistan broneeringu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0006
**Card ID:** a2-absagen
**Field:** entry[11].study.comparison[4].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er sagt nein. = LV/atlikušās valodas Ta ütleb ei.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0007
**Card ID:** a2-abschließen
**Field:** entry[13].study.comparison[3].example
**CURRENT:** Ich unterschreibe LV/atlikušās valodas den Vertrag. = Ma fragments aizstāts ar allkirjastan lepingu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0008
**Card ID:** a2-abstellen
**Field:** entry[16].study.comparison[1].example
**CURRENT:** Ich schalte den Computer aus. = fragments aizstāts ar Ma lülitan arvuti välja.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0009
**Card ID:** a2-abstellen
**Field:** entry[16].study.comparison[3].example
**CURRENT:** Der Fahrer stoppt LV/atlikušās valodas das Auto. = Juht peatab auto. saglabāta nemainīta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0010
**Card ID:** a2-angewandt
**Field:** entry[41].study.comparison[0].example
**CURRENT:** wird angewandt. = fragments aizstāts ar Seda meetodit rakendatakse.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0011
**Card ID:** a2-angreifen
**Field:** entry[42].study.comparison[1].example
**CURRENT:** Die Gruppe attackiert ihn. = fragments aizstāts ar Rühm ründab teda. saglabāta nemainīta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0012
**Card ID:** a2-angreifen
**Field:** entry[42].study.comparison[2].example
**CURRENT:** Er beleidigt mich. = Ta solvab fragments aizstāts ar mind.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0013
**Card ID:** a2-angreifen
**Field:** entry[42].study.comparison[3].example
**CURRENT:** Sie kritisiert den Vorschlag. = fragments aizstāts ar Ta kritiseerib ettepanekut.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0014
**Card ID:** a2-anhänger
**Field:** entry[44].study.comparison[1].example
**CURRENT:** Er ist ein Fan der Mannschaft. = fragments aizstāts ar Ta on meeskonna fänn.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0015
**Card ID:** a2-anhänger
**Field:** entry[44].study.comparison[2].example
**CURRENT:** Sie hat viele Unterstützer. = fragments aizstāts ar Tal on palju toetajaid.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0016
**Card ID:** a2-anhänger
**Field:** entry[44].study.comparison[3].example
**CURRENT:** Der Wohnwagen steht am See. = fragments aizstāts ar Haagissuvila seisab järve ääres.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0017
**Card ID:** a2-anheizen
**Field:** entry[45].study.comparison[1].example
**CURRENT:** Wir heizen die Wohnung. = Me kütame korterit. saglabāta nemainīta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0018
**Card ID:** a2-anheizen
**Field:** entry[45].study.comparison[3].example
**CURRENT:** Das verschärft den Streit. = See fragments aizstāts ar teravdab tüli.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0019
**Card ID:** a2-anlegen
**Field:** entry[55].study.comparison[1].example
**CURRENT:** Ich lege das Buch LV/atlikušās valodas auf den Tisch. = fragments aizstāts ar Ma panen raamatu lauale.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0020
**Card ID:** a2-anmelden
**Field:** entry[57].study.comparison[1].example
**CURRENT:** Sie sich bitte an. = Palun registreeruge. saglabāta nemainīta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0022
**Card ID:** a2-anstellen
**Field:** entry[65].study.comparison[0].example
**CURRENT:** Die Firma stellt ihn an. = Firma võtab ta tööle. saglabāta nemainīta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0023
**Card ID:** a2-artikel
**Field:** entry[90].study.comparison[1].example
**CURRENT:** Der ist neu. = Zeitungsartikel dabisku ET; DE daļa Ajaleheartikkel on uus.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0024
**Card ID:** a2-artikel
**Field:** entry[90].study.comparison[4].example
**CURRENT:** Der Paragraph ist LV/atlikušās valodas wichtig. = Paragrahv on oluline.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0025
**Card ID:** a2-aufheben
**Field:** entry[118].study.comparison[0].example
**CURRENT:** Ich hebe den Schlüssel auf. = fragments aizstāts ar Ma korjan võtme üles.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0026
**Card ID:** a2-aufheben
**Field:** entry[118].study.comparison[1].example
**CURRENT:** Ich hebe die Hand. = Ma tõstan fragments aizstāts ar käe.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0027
**Card ID:** a2-auflage
**Field:** entry[127].study.comparison[0].example
**CURRENT:** Die Auflage ist hoch. = Tiraaž on fragments aizstāts ar suur.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0029
**Card ID:** a2-aufnahme
**Field:** entry[132].study.comparison[4].example
**CURRENT:** Die Aufnahmeprüfung LV/atlikušās ist morgen. = Sisseastumiseksam on homme.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0030
**Card ID:** a2-aufnehmen
**Field:** entry[133].study.comparison[1].example
**CURRENT:** Ich nehme das Buch. LV/atlikušās = Ma võtan raamatu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0031
**Card ID:** a2-aufrichtig
**Field:** entry[138].study.comparison[0].example
**CURRENT:** Entschuldigung. = Siiras vabandus. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0032
**Card ID:** a2-aufrichtig
**Field:** entry[138].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Herzliche Grüße. = LV/atlikušās Südamlikud tervitused.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0034
**Card ID:** a2-aufrufen
**Field:** entry[139].study.comparison[3].example
**CURRENT:** Er fordert uns auf. LV/atlikušās = Ta kutsub meid üles.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0038
**Card ID:** a2-ausziehen
**Field:** entry[169].study.comparison[3].example
**CURRENT:** Das Kind zieht sich LV/atlikušās aus. = Laps riietub lahti.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0039
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[2].example
**CURRENT:** Die Bankfiliale ist LV/atlikušās geöffnet. = Pangakontor on avatud.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0040
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[3].example
**CURRENT:** Wir sitzen auf der Parkbank. = Me istume pargipingil. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0041
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[5].example
**CURRENT:** Ich sitze auf einem LV/atlikušās Stuhl. = Ma istun toolil.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0042
**Card ID:** a2-bauer
**Field:** entry[207].study.comparison[2].example
**CURRENT:** Wir besuchen einen Bauernhof. = Me külastame talu. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0045
**Card ID:** a2-bedienen
**Field:** entry[213].study.comparison[0].example
**CURRENT:** Der Kellner bedient LV/atlikušās uns. = Kelner teenindab meid.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Kannst du mir das Buch leihen? = Kas sa saad mulle raamatu laenata?
**Statuss:** PENDING
#### ET-A2-0046
**Card ID:** a2-behalten
**Field:** entry[221].study.comparison[4].example
**CURRENT:** Ich bewahre die Quittung auf. = valodas Ma hoian kviitungi alles. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0047
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[0].example
**CURRENT:** Das ist bekannt. LV/atlikušās = See on teada.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0048
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[2].example
**CURRENT:** Die Umgebung ist LV/atlikušās mir vertraut. = valodas Ümbrus on mulle tuttav.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0049
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[3].example
**CURRENT:** Wir sind befreundet. = Me oleme sõbrad. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0050
**Card ID:** a2-bestellen
**Field:** entry[242].study.comparison[4].example
**CURRENT:** Ich bearbeite den Text. = Ma töötlen teksti. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Darum bleibe ich zu Hause. = Seepärast jään ma koju.
**Statuss:** PENDING
#### ET-A2-0052
**Card ID:** a2-boden
**Field:** entry[272].study.comparison[0].example
**CURRENT:** Die Tasche liegt LV/atlikušās auf dem Boden. = valodas Kott on põrandal.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0053
**Card ID:** a2-boden
**Field:** entry[272].study.comparison[1].example
**CURRENT:** Der Fußboden ist LV/atlikušās sauber. = Põrand on puhas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0056
**Card ID:** a2-böse
**Field:** entry[277].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist zornig. = LV/atlikušās Ta on vihane.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0057
**Card ID:** a2-böse
**Field:** entry[277].study.comparison[4].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Ich bin sauer. = LV/atlikušās Ma olen pahane.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Vielen Dank für die Hilfe! = Suur tänu abi eest!
**Statuss:** PENDING
#### ET-A2-0059
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[1].example
**CURRENT:** Er ist ein guter LV/atlikušās Mensch. = Ta on hea inimene.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Danach gehe ich nach Hause. = Pärast seda lähen ma koju.
**Statuss:** PENDING
#### ET-A2-0060
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Sie ist nett. = LV/atlikušās Ta on kena.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0061
**Card ID:** a2-dafür
**Field:** entry[318].study.comparison[3].example
**CURRENT:** Ich bin dagegen. LV/atlikušās = Ma olen selle vastu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0062
**Card ID:** a2-damit
**Field:** entry[321].study.comparison[0].example
**CURRENT:** Ich lerne, damit LV/atlikušās = õpin, et eksami sooritada.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0063
**Card ID:** a2-damit
**Field:** entry[321].study.comparison[2].example
**CURRENT:** Ich lerne, um zu LV/atlikušās bestehen. = Ma eksami sooritada. daļa saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0064
**Card ID:** a2-damit
**Field:** entry[321].study.comparison[3].example
**CURRENT:** ich hier. = valodas ma siia. daļa saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich war dabei. = Ma olin kohal.
**Statuss:** PENDING
#### ET-A2-0065
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[0].example
**CURRENT:** Dank! = Suur tänu! aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0066
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[1].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Nein, danke. = LV/atlikušās
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0067
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[4].example
**CURRENT:** Ich bedanke mich LV/atlikušās Ihnen. = Ma tänan teid.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0069
**Card ID:** a2-darüber
**Field:** entry[325].study.comparison[1].example
**CURRENT:** Wir sprechen Problem. = über das Me räägime probleemist. daļa saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0070
**Card ID:** a2-davor
**Field:** entry[329].study.comparison[0].example
**CURRENT:** Ich habe Angst davor. = Ma aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0071
**Card ID:** a2-davor
**Field:** entry[329].study.comparison[1].example
**CURRENT:** Auto. = steht ein Maja ees seisab daļa saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Er ist stark. = Ta on tugev.
**Statuss:** PENDING
#### ET-A2-0072
**Card ID:** a2-davor
**Field:** entry[329].study.comparison[2].example
**CURRENT:** wir. = Pärast seda läheme. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0074
**Card ID:** a2-decke
**Field:** entry[331].study.comparison[1].example
**CURRENT:** Die Bettdecke ist weich. = valodas aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0075
**Card ID:** a2-decke
**Field:** entry[331].study.comparison[4].example
**CURRENT:** Das Bild hängt an der Wand. = valodas seinal. daļa saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0076
**Card ID:** a2-denn
**Field:** entry[334].study.comparison[1].example
**CURRENT:** Ich bleibe, weil LV/atlikušās = jään, sest vihma sajab.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0077
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[0].example
**CURRENT:** Das Buch ist dick. = Raamat on paks. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0078
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[1].example
**CURRENT:** Das Essen ist fett. = Toit on on rasvane. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0079
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[2].example
**CURRENT:** Das Papier ist dünn. = Paber on valodas on õhuke. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0080
**Card ID:** a2-doch
**Field:** entry[346].study.comparison[0].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Komm doch! = LV/atlikušās Tule ometi!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0081
**Card ID:** a2-doch
**Field:** entry[346].study.comparison[4].example
**CURRENT:** Nein. = Kas sa tuled? Ei. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0082
**Card ID:** a2-doktor
**Field:** entry[347].study.comparison[1].example
**CURRENT:** Der Arzt hilft mir. = Arst aitab mind. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0083
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[0].example
**CURRENT:** Das Papier ist dünn. = Paber on valodas on õhuke. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0084
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[1].example
**CURRENT:** Das Buch ist dick. = Raamat on paks. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Mach das Licht an. = Pane tuli põlema!
**Statuss:** PENDING
#### ET-A2-0085
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[3].example
**CURRENT:** Das Fleisch ist mager. = Liha on valodas Liha on lahja. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0086
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[4].example
**CURRENT:** flüssig. = Mesi Mesi on vedel. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0089
**Card ID:** a2-eben
**Field:** entry[369].study.comparison[0].example
**CURRENT:** Das ist eben so. LV/atlikušās = Nii see lihtsalt on. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0090
**Card ID:** a2-eben
**Field:** entry[369].study.comparison[2].example
**CURRENT:** Ich habe ihn gesehen. = gerade eben Ma nägin teda just äsja. daļa saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0091
**Card ID:** a2-ehrlich
**Field:** entry[377].study.comparison[0].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist ehrlich. = LV/atlikušās Ta on aus.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0092
**Card ID:** a2-ehrlich
**Field:** entry[377].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Sie ist nett. = Ta LV/atlikušās on kena.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0093
**Card ID:** a2-eigentlich
**Field:** entry[378].study.comparison[1].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Das ist echt. = LV/atlikušās See on ehtne.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0094
**Card ID:** a2-einsteigen
**Field:** entry[394].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Wir steigen um. = LV/atlikušās Me istume ümber.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0095
**Card ID:** a2-erinnern
**Field:** entry[420].study.comparison[3].example
**CURRENT:** Schlüssel. = Mõtle võtmele. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0096
**Card ID:** a2-etwa
**Field:** entry[439].study.comparison[0].example
**CURRENT:** Das dauert etwa 20 LV/atlikušās Minuten. = See kestab umbes 20 minutit.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0097
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[0].example
**CURRENT:** Das Fach ist leer. LV/atlikušās = Lahter on tühi. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0098
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[3].example
**CURRENT:** Das ist mein Fachgebiet. = See on minu eriala. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0099
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[4].example
**CURRENT:** Lehrer. = Minu amet on õpetaja. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0101
**Card ID:** a2-fall
**Field:** entry[455].study.comparison[0].example
**CURRENT:** komme ich. = Sel juhul tulen ma. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0102
**Card ID:** a2-fall
**Field:** entry[455].study.comparison[1].example
**CURRENT:** Der Unfall war schlimm. = Õnnetus oli raske. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0103
**Card ID:** a2-fall
**Field:** entry[455].study.comparison[3].example
**CURRENT:** Der Kasus ist wichtig. = Kääne on oluline. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0104
**Card ID:** a2-fehlen
**Field:** entry[467].study.comparison[0].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Mir fehlt Geld. = LV/atlikušās Mul puudub raha.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0105
**Card ID:** a2-fehlen
**Field:** entry[467].study.comparison[2].example
**CURRENT:** Ich vermisse dich. LV/atlikušās = Ma igatsen sind. valodas
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0106
**Card ID:** a2-fehlen
**Field:** entry[467].study.comparison[3].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist abwesend. = LV/atlikušās
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0107
**Card ID:** a2-feuer
**Field:** entry[484].study.comparison[1].example
**CURRENT:** Der Brand ist groß. = Tulekahju on suur. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Aus diesem Grund komme ich nicht. = Sel põhjusel ma ei tule.
**Statuss:** PENDING
#### ET-A2-0108
**Card ID:** a2-feuer
**Field:** entry[484].study.comparison[3].example
**CURRENT:** Die Feuerwehr kommt. = Tuletõrje tuleb. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0109
**Card ID:** a2-feuer
**Field:** entry[484].study.comparison[4].example
**CURRENT:** Die Soldaten geben LV/atlikušās Feuer. = Sõdurid avavad tule. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0110
**Card ID:** a2-folgen
**Field:** entry[508].study.comparison[2].example
**CURRENT:** Das Kind gehorcht. LV/atlikušās = Laps kuulab sõna.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0111
**Card ID:** a2-folgen
**Field:** entry[508].study.comparison[3].example
**CURRENT:** Sie die Regeln. = Järgige reegleid. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0112
**Card ID:** a2-führen
**Field:** entry[539].study.comparison[3].example
**CURRENT:** Ich bringe dich nach Hause. = Ma viin su koju. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0114
**Card ID:** a2-gerade
**Field:** entry[580].study.comparison[0].example
**CURRENT:** Ich komme gerade. = Ma tulen praegu. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0115
**Card ID:** a2-gewinnen
**Field:** entry[592].study.comparison[0].example
**CURRENT:** Wir gewinnen das LV/atlikušās Spiel. = Me võidame mängu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0116
**Card ID:** a2-gewinnen
**Field:** entry[592].study.comparison[2].example
**CURRENT:** Ich bekomme eine LV/atlikušās Nachricht. = Ma saan sõnumi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0117
**Card ID:** a2-gießen
**Field:** entry[595].study.comparison[3].example
**CURRENT:** Er schüttet Wasser aus. = Ta valab vee välja. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0120
**Card ID:** a2-indem
**Field:** entry[703].study.comparison[0].example
**CURRENT:** Ich lerne, indem LV/atlikušās ich übe. = Ma õpin harjutades. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0121
**Card ID:** a2-indem
**Field:** entry[703].study.comparison[2].example
**CURRENT:** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0133
**Card ID:** a2-kurz
**Field:** entry[855].study.comparison[1].example
**CURRENT:** FOREIGN_REMNANT **LABOT** kurz vor acht = LV/atlikušās veidi enne kaheksat
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0134
**Card ID:** a2-lage
**Field:** entry[857].study.comparison[2].example
**CURRENT:** Der Standort ist LV/atlikušās gut. = Asukoht on hea.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0135
**Card ID:** a2-leiden
**Field:** entry[877].study.comparison[0].example
**CURRENT:** Er leidet an Kopfschmerzen. = valodas Tal on peavalu. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0136
**Card ID:** a2-leiden
**Field:** entry[877].study.comparison[2].example
**CURRENT:** Wir leiden unter LV/atlikušās der Hitze. = Me kannatame kuumuse käes.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0137
**Card ID:** a2-leiden
**Field:** entry[877].study.comparison[4].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist krank. = LV/atlikušās Ta on haige.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0140
**Card ID:** a2-leiter
**Field:** entry[880].study.comparison[0].example
**CURRENT:** Der Leiter der Firma. = Ettevõtte juht. Mitmus: die Leiter. saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0141
**Card ID:** a2-leitung
**Field:** entry[881].study.comparison[2].example
**CURRENT:** Das Kabel ist zu LV/atlikušās kurz. = Kaabel on liiga lühike.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Als ich Kind war, spielte ich viel. = Kui ma laps olin, mängisin palju.
**Statuss:** PENDING
#### ET-A2-0142
**Card ID:** a2-leitung
**Field:** entry[881].study.comparison[4].example
**CURRENT:** Die Wasserleitung LV/atlikušās tropft. = Veetoru tilgub.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0144
**Card ID:** a2-merken
**Field:** entry[936].study.comparison[1].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Merk dir das! = LV/atlikušās Jäta see meelde!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0145
**Card ID:** a2-mittel
**Field:** entry[951].study.comparison[0].example
**CURRENT:** Husten = köharohi aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0146
**Card ID:** a2-mittel
**Field:** entry[951].study.comparison[1].example
**CURRENT:** Das Medikament hilft. = Ravim aitab. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0147
**Card ID:** a2-mittel
**Field:** entry[951].study.comparison[2].example
**CURRENT:** einfach. = See meetod on lihtne. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0149
**Card ID:** a2-note
**Field:** entry[1019].study.comparison[1].example
**CURRENT:** Die Schulnote ist LV/atlikušās gut. = Koolihinne on hea.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0150
**Card ID:** a2-note
**Field:** entry[1019].study.comparison[2].example
**CURRENT:** Die Musiknote ist LV/atlikušās hoch. = Noot on kõrge.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0152
**Card ID:** a2-offen
**Field:** entry[1037].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist ehrlich. = LV/atlikušās Ta on aus.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0154
**Card ID:** a2-patient
**Field:** entry[1064].study.comparison[2].example
**CURRENT:** Der Kranke liegt im Bett. = Haige lamab voodis. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0155
**Card ID:** a2-rolle
**Field:** entry[1172].study.comparison[1].example
**CURRENT:** Er hat die Hauptrolle. = Tal on peaosa. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0156
**Card ID:** a2-satz
**Field:** entry[1194].study.comparison[1].example
**CURRENT:** Der deutsche Satz LV/atlikušās ist richtig. = Saksakeelne lause on õige.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0157
**Card ID:** a2-scheinen
**Field:** entry[1217].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er wirkt ruhig. = LV/atlikušās Ta näib rahulik.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0159
**Card ID:** a2-schlange
**Field:** entry[1229].study.comparison[1].example
**CURRENT:** Die Warteschlange LV/atlikušās ist lang. = Järjekord on pikk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0160
**Card ID:** a2-schlange
**Field:** entry[1229].study.comparison[2].example
**CURRENT:** Die Stühle stehen LV/atlikušās in einer Reihe. = valodas Toolid seisavad reas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0161
**Card ID:** a2-schloss
**Field:** entry[1236].study.comparison[3].example
**CURRENT:** Ich kaufe ein Fahrradschloss. = valodas Ma ostan jalgrattaluku. ET; DE daļa
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0162
**Card ID:** a2-schloss
**Field:** entry[1236].study.comparison[4].example
**CURRENT:** Der Schlüssel ist LV/atlikušās weg. = Võti on kadunud.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0163
**Card ID:** a2-schuld
**Field:** entry[1256].study.comparison[1].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Er hat Schulden. = LV/atlikušās Tal on võlad.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0164
**Card ID:** a2-schuld
**Field:** entry[1256].study.comparison[4].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Ich bin schuld. = LV/atlikušās Mina olen süüdi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0165
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[1].example
**CURRENT:** Das Büro ist oben. LV/atlikušās = Kontor on üleval.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0166
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[2].example
**CURRENT:** Das Buch liegt auf LV/atlikušās dem Tisch. = Raamat lebab laual.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0167
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[3].example
**CURRENT:** Das Auto steht vor LV/atlikušās dem Haus. = Auto seisab maja ees.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0168
**Card ID:** a2-sich-unterhalten
**Field:** entry[1305].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Wir reden viel. = LV/atlikušās Me räägime palju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0169
**Card ID:** a2-sich-unterhalten
**Field:** entry[1305].study.comparison[3].example
**CURRENT:** Wir amüsieren uns. LV/atlikušās = Me lõbutseme.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0171
**Card ID:** a2-sobald
**Field:** entry[1325].study.comparison[4].example
**CURRENT:** gehe ich. = gegessen habe, Pärast söömist lähen ära. ET; DE daļa
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Solange du hier bist, bleibe ich. = Niikaua kui sa siin oled, jään ma.
**Statuss:** PENDING
#### ET-A2-0173
**Card ID:** a2-sonst
**Field:** entry[1336].study.comparison[1].example
**CURRENT:** alles gut. = Muidu on kõik hästi. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich steige um. = Ma istun ümber.
**Statuss:** PENDING
#### ET-A2-0174
**Card ID:** a2-sonst
**Field:** entry[1336].study.comparison[2].example
**CURRENT:** ich an. = Vastasel juhul helistan. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0176
**Card ID:** a2-steigen
**Field:** entry[1378].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Ich steige aus. = LV/atlikušās Ma väljun.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0177
**Card ID:** a2-stelle
**Field:** entry[1380].study.comparison[0].example
**CURRENT:** Ich suche eine Stelle. = Ma otsin töökohta. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0178
**Card ID:** a2-stelle
**Field:** entry[1380].study.comparison[4].example
**CURRENT:** Die Wunde tut weh. LV/atlikušās = Haav valutab.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0180
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[1].example
**CURRENT:** Ich stimme dir zu. LV/atlikušās = Ma olen sinuga nõus.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0181
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[3].example
**CURRENT:** Wir wählen den Präsidenten. = Me valime presidendi. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Wir ziehen um. = Me kolime.
**Statuss:** PENDING
#### ET-A2-0182
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[4].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Die Farbe passt. = LV/atlikušās Värv sobib.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0183
**Card ID:** a2-stoff
**Field:** entry[1392].study.comparison[1].example
**CURRENT:** Das Material ist stabil. = Materjal on vastupidav. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0184
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[0].example
**CURRENT:** Der Lehrer Tafel. = schreibt an die Õpetaja kirjutab tahvlile. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0185
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[2].example
**CURRENT:** Die Speisekarte Tisch. = liegt auf dem Menüü on laual. ET; DE daļa
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0186
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[4].example
**CURRENT:** Schokolade = Tahvel šokolaadi. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0187
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[0].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Ein Teil fehlt. = LV/atlikušās Üks osa puudub.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0188
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[1].example
**CURRENT:** Der erste Teil ist LV/atlikušās leicht. = Esimene osa on lihtne.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0189
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[2].example
**CURRENT:** Das Ersatzteil ist LV/atlikušās teuer. = Varuosa on kallis.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0190
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[4].example
**CURRENT:** Das ist eine gute LV/atlikušās Sache. = See on hea asi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0191
**Card ID:** a2-termin
**Field:** entry[1438].study.comparison[4].example
**CURRENT:** Der Zeitpunkt ist LV/atlikušās wichtig. = Ajahetk on oluline.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0192
**Card ID:** a2-tief
**Field:** entry[1443].study.comparison[0].example
**CURRENT:** Der See ist tief. LV/atlikušās = Järv on sügav.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0194
**Card ID:** a2-Traube-1464
**Field:** entry[1464].lv
**CURRENT:** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami soor
**Statuss:** PENDING
#### ET-A2-0195
**Card ID:** a2-treffen
**Field:** entry[1469].study.comparison[3].example
**CURRENT:** Ich erreiche dich LV/atlikušās nicht. = Ma ei saa sind kätte. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0197
**Card ID:** a2-übrig
**Field:** entry[1488].study.comparison[1].example
**CURRENT:** übrig. = Palju toitu jääb üle. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0198
**Card ID:** a2-übrig
**Field:** entry[1488].study.comparison[2].example
**CURRENT:** Der Rest ist für morgen. = Ülejääk on homseks. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0199
**Card ID:** a2-übrig
**Field:** entry[1488].study.comparison[3].example
**CURRENT:** Die übrigen Gäste LV/atlikušās kommen später. = valodas Ülejäänud külalised tulevad aizstāts ar hiljem.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0201
**Card ID:** a2-umsonst
**Field:** entry[1492].study.comparison[2].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Das ist gratis. = LV/atlikušās See on tasuta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0202
**Card ID:** a2-verbinden
**Field:** entry[1511].study.comparison[3].example
**CURRENT:** Ich schließe den Drucker an. = Ma ühendan printeri. aizstāts ar
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0204
**Card ID:** a2-verkehr
**Field:** entry[1517].study.comparison[2].example
**CURRENT:** praktisch. = Verkehr ist Ühistransport on praktiline. saglabāta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0206
**Card ID:** a2-vorstellen
**Field:** entry[1544].study.comparison[3].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Was meinst du? = LV/atlikušās Mida sa arvad?
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0209
**Card ID:** a2-wählen
**Field:** entry[1551].study.comparison[3].example
**CURRENT:** FOREIGN_REMNANT **LABOT** Wir stimmen ab. = LV/atlikušās Me hääletame.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0211
**Card ID:** a2-wahrscheinlich
**Field:** entry[1555].study.comparison[4].example
**CURRENT:** Das ist möglich. LV/atlikušās möglich. = See on võimalik.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0213
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[1].example
**CURRENT:** Der Wert ist hoch. = Väärtus Väärtus on aizstāts ar ET;
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0214
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[3].example
**CURRENT:** Die Stadt ist sehenswert. = valodas Linn on vaatamist DE daļa
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0215
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[4].example
**CURRENT:** Das ist wichtig. LV/atlikušās wichtig. = See on oluline.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0216
**Card ID:** a2-Weste-1584
**Field:** entry[1584].lv
**CURRENT:** vest
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0217
**Card ID:** a2-wiegen
**Field:** entry[1589].study.comparison[2].example
**CURRENT:** Das Gewicht ist normal. = Kaal Kaal on aizstāts ar ET;
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0218
**Card ID:** a2-wiegen
**Field:** entry[1589].study.comparison[3].example
**CURRENT:** Ich messe die Länge. = Ma mõõdan aizstāts ar ET;
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0219
**Card ID:** a2-wiegen
**Field:** entry[1589].study.comparison[4].example
**CURRENT:** Der Wagen ist neu. = Auto on uus. aizstāts ar ET;
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0220
**Card ID:** a2-ziehen
**Field:** entry[1599].study.comparison[1].example
**CURRENT:** HIGH FOREIGN_REMNANT **LABOT** Ich ziehe um. = LV/atlikušās
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0222
**Card ID:** a2-ziehen
**Field:** entry[1599].study.comparison[4].example
**CURRENT:** lassen. = Lase teel tõmmata. aizstāts ar ET;
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0223
**Card ID:** a2-zunehmen
**Field:** entry[1614].study.comparison[1].example
**CURRENT:** HIGH FOREIGN_REMNANT **LABOT** Ich nehme ab. = LV/atlikušās alla.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0224
**Card ID:** a2-zunehmen
**Field:** entry[1614].study.comparison[3].example
**CURRENT:** Die Preise steigen. = Hinnad aizstāts ar ET;
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0225
**Card ID:** a2-zurzeit
**Field:** entry[1618].study.comparison[0].example
**CURRENT:** beschäftigt. = valodas Praegu olen DE daļa
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0226
**Card ID:** a2-zurzeit
**Field:** entry[1618].study.comparison[3].example
**CURRENT:** möglich. = Praegu pole see Praegu pole DE daļa
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0235
**Card ID:** a2-anordnen-60
**Field:** etText
**CURRENT:** käskima • korrastama
**PROPOSED_ET:** käskima • korraldama
**Problēma:** „korrastama” tähendab eeskätt korrastamist või puhastamist; anordnen teises tähenduses on korraldama või paigutama.
**LV etalons (konteksts):** pavēlēt • sakārtot
**DE konteksts:** anordnen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0236
**Card ID:** a2-auffordern-113
**Field:** etText
**CURRENT:** kutsuma
**PROPOSED_ET:** üles kutsuma
**Problēma:** „Auffordern“ tähendab üles kutsuma, nõudma või paluma; „kutsuma“ tähendab eeskätt kutsumist ega kata tähendust täpselt.
**LV etalons (konteksts):** aicināt
**DE konteksts:** auffordern
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0237
**Card ID:** a2-Ausverkauf-163
**Field:** etText
**CURRENT:** lõpumüük
**PROPOSED_ET:** väljamüük
**Problēma:** „Lõpumüük” tähendab kitsamalt lõpu- või likvideerimismüüki; üldisem vaste on „väljamüük”.
**LV etalons (konteksts):** izpārdošana
**DE konteksts:** Ausverkauf
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** muutma • ümber tegema
**Statuss:** PENDING
#### ET-A2-0238
**Card ID:** a2-Cafeteria-304
**Field:** etText
**CURRENT:** kafeteeria
**PROPOSED_ET:** kafeteria
**Problēma:** Estonian standard spelling is “kafeteria”; “kafeteeria” is an incorrect spelling.
**LV etalons (konteksts):** kafetērija
**DE konteksts:** Cafeteria
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** põhjus • puhk
**Statuss:** PENDING
#### ET-A2-0245
**Card ID:** a2-Humor-688
**Field:** etText
**CURRENT:** humoor
**PROPOSED_ET:** huumor
**Problēma:** Eestikeelne sõna on „huumor”; praegune kuju „humoor” on õigekirjaviga.
**LV etalons (konteksts):** humors
**DE konteksts:** Humor
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** enne kui
**Statuss:** PENDING
#### ET-A2-0247
**Card ID:** a2-jedoch-728
**Field:** etText
**CURRENT:** siiski
**PROPOSED_ET:** siiski
**Problēma:** The Estonian word is misspelled: the correct form is „siiski“, with š.
**LV etalons (konteksts):** tomēr
**DE konteksts:** jedoch
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** kahekordne • topelt
**Statuss:** PENDING
#### ET-A2-0248
**Card ID:** a2-jener-731
**Field:** etText
**CURRENT:** see
**PROPOSED_ET:** too
**Problēma:** jener refers to „that one“ and corresponds to Estonian „too“, while „see“ means „this“.
**LV etalons (konteksts):** tas
**DE konteksts:** jener
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** vabandama • vabandust paluma
**Statuss:** PENDING
#### ET-A2-0249
**Card ID:** a2-joggen-735
**Field:** etText
**CURRENT:** sörkjooksu tegema
**PROPOSED_ET:** sörkima
**Problēma:** The standard natural Estonian verb for joggen is „sörkima“; the current phrase is awkward.
**LV etalons (konteksts):** lēni skriet
**DE konteksts:** joggen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** kas ... või
**Statuss:** PENDING
#### ET-A2-0252
**Card ID:** a2-Kostüm-839
**Field:** etText
**CURRENT:** naiste kostüüm
**PROPOSED_ET:** kostüüm
**Problēma:** „Naiste kostüüm” tähendab naiste kostüümi või ülikonda, kuid saksa sõna on üldine „kostüüm”.
**LV etalons (konteksts):** sieviešu kostīms
**DE konteksts:** Kostüm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das Unternehmen wächst. = Ettevõte kasvab.
**Statuss:** PENDING
#### ET-A2-0253
**Card ID:** a2-Leder-871
**Field:** etText
**CURRENT:** töödeldud nahk
**PROPOSED_ET:** nahk
**Problēma:** Saksa „Leder” tähendab nahka üldiselt; „töödeldud nahk” lisab põhjendamatu tähenduspiirangu.
**LV etalons (konteksts):** izstrādāta āda
**DE konteksts:** Leder
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Wir schließen einen Vertrag. = valodas Me sõlmime lepingu.
**Statuss:** PENDING
#### ET-A2-0256
**Card ID:** a2-Neffe-1001
**Field:** etText
**CURRENT:** vennapoeg
**PROPOSED_ET:** venna- või õepoeg
**Problēma:** Saksa Neffe hõlmab nii venna kui ka õe poega; vennapoeg tähendab ainult venna poega.
**LV etalons (konteksts):** brāļadēls
**DE konteksts:** Neffe
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Er verdient Geld. = Ta teenib raha.
**Statuss:** PENDING
#### ET-A2-0257
**Card ID:** a2-Nichte-1009
**Field:** etText
**CURRENT:** vennatütar
**PROPOSED_ET:** venna- või õetütar
**Problēma:** Saksa Nichte hõlmab nii venna kui ka õe tütart; vennatütar tähendab ainult venna tütart.
**LV etalons (konteksts):** brāļameita
**DE konteksts:** Nichte
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich gieße die Blumen. = Ma kastan lilli.
**Statuss:** PENDING
#### ET-A2-0260
**Card ID:** a2-Rindfleisch-1166
**Field:** etText
**CURRENT:** loomaliha
**PROPOSED_ET:** veiseliha
**Problēma:** „Loomaliha” tähendab üldiselt loomaliha; „Rindfleisch” on täpsemalt veiseliha.
**LV etalons (konteksts):** liellopu gaļa
**DE konteksts:** Rindfleisch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Er schüttet Wasser aus. = Ta valab vee välja. aizstāts ar
**Statuss:** PENDING
#### ET-A2-0263
**Card ID:** a2-selten-1277
**Field:** etText
**CURRENT:** harv
**PROPOSED_ET:** harva
**Problēma:** German adverb 'selten' requires the Estonian adverb 'harva'; 'harv' is an adjective.
**LV etalons (konteksts):** rets
**DE konteksts:** selten
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der Anlass war ein Fest. = Põhjuseks oli pidu.
**Statuss:** PENDING
#### ET-A2-0264
**Card ID:** a2-so viel-1324
**Field:** etText
**CURRENT:** nii palju • kui palju
**PROPOSED_ET:** nii palju
**Problēma:** The first translation matches 'so viel'; 'kui palju' means 'how much' and changes the German meaning.
**LV etalons (konteksts):** tik daudz • cik
**DE konteksts:** so viel
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der Boden ist nass. = Põrand on märg.
**Statuss:** PENDING
#### ET-A2-0269
**Card ID:** a2-studieren-1407
**Field:** etText
**CURRENT:** õppima
**PROPOSED_ET:** ülikoolis õppima
**Problēma:** Õppima on liiga üldine; saksa studieren tähendab peamiselt ülikoolis õppimist.
**LV etalons (konteksts):** studēt
**DE konteksts:** studieren
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Musik. = koche, höre ich Süüa tehes kuulan ma muusikat.
**Statuss:** PENDING
#### ET-A2-0273
**Card ID:** a2-Wild-1592
**Field:** etText
**CURRENT:** ulukiliha
**PROPOSED_ET:** uluk
**Problēma:** Ulukiliha means game meat, while German Wild refers more broadly to wild game or game animals.
**LV etalons (konteksts):** medījums
**DE konteksts:** Wild
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich bin fast fertig. = Ma olen peaaegu valmis.
**Statuss:** PENDING
#### ET-A2-0280
**Card ID:** a2-anheizen
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Koos Ofen, Feuer või Grill tähendab anheizen kütma panema või tuld õhutama.
**PROPOSED_ET:** Koos Ofen, Feuer või Grill tähendab anheizen üles kütmist või tule õhutamist.
**Problēma:** Pärast „tähendab“ on siin vaja nimisõnalist vormi, mitte vigast ma-infinitiiviühendit.
**LV etalons (konteksts):** Ar Ofen, Feuer vai Grill anheizen nozīmē iekurt vai uzkurināt.
**DE konteksts:** anheizen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** FOREIGN_REMNANT **LABOT** kurz vor acht = LV/atlikušās veidi enne kaheksat
**Statuss:** PENDING
#### ET-A2-0281
**Card ID:** a2-anheizen
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Koos Stimmung, Diskussion või Streit tähendab see sageli olukorda teravdama.
**PROPOSED_ET:** Koos Stimmung, Diskussion või Streit tähendab see sageli olukorra teravdamist.
**Problēma:** Pärast „tähendab“ peab olema tegevuse nimisõnastatud vorm „olukorra teravdamist“.
**LV etalons (konteksts):** Ar Stimmung, Diskussion vai Streit tas bieži nozīmē saasināt situāciju.
**DE konteksts:** anheizen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Essen = veidi pärast sööki
**Statuss:** PENDING
#### ET-A2-0282
**Card ID:** a2-anheizen
**Field:** study.important.text
**CURRENT:** anheizen võib olla otsese või ülekantud tähendusega.
**PROPOSED_ET:** anheizen võib olla otseses või ülekantud tähenduses.
**Problēma:** Väljend „otseses tähenduses“ on siin korrektne ja loomulikum kui „otsese tähendusega“.
**LV etalons (konteksts):** anheizen var būt burtisks vai tēlains.
**DE konteksts:** anheizen
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich komme bald. = Ma tulen varsti.
**Statuss:** PENDING
#### ET-A2-0284
**Card ID:** a2-anlegen
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Arvutis tähendab Konto/Datei anlegen kontot/faili looma.
**PROPOSED_ET:** Arvutis tähendab Konto/Datei anlegen konto või faili loomist.
**Problēma:** Pärast „tähendab“ on vaja tegevuse nimisõnastatud vormi „loomist“.
**LV etalons (konteksts):** Datorā Konto/Datei anlegen nozīmē izveidot kontu/failu.
**DE konteksts:** anlegen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Lage ist schwierig. = Olukord on keeruline.
**Statuss:** PENDING
#### ET-A2-0285
**Card ID:** a2-anmelden
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Kursuse, testi või ürituse puhul tähendab anmelden tavaliselt end registreerima.
**PROPOSED_ET:** Kursuse, testi või ürituse puhul tähendab anmelden tavaliselt enda registreerumist.
**Problēma:** Pärast „tähendab“ on siin vaja nimisõnalist vormi „enda registreerumist“.
**LV etalons (konteksts):** Par kursu, testu vai pasākumu anmelden parasti nozīmē pieteikties.
**DE konteksts:** anmelden
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Situation ist ernst. = Olukord on tõsine.
**Statuss:** PENDING
#### ET-A2-0286
**Card ID:** a2-anmelden
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Arsti või asutuse puhul tähendab anmelden sageli end kirja panema või registreeruma.
**PROPOSED_ET:** Arsti või asutuse puhul tähendab anmelden sageli enda kirja panemist või registreerumist.
**Problēma:** Infinitiivide asemel on pärast „tähendab“ vaja nimisõnalisi vorme.
**LV etalons (konteksts):** Ar ārstu vai iestādi anmelden bieži nozīmē pierakstīties vai reģistrēties.
**DE konteksts:** anmelden
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der Standort ist LV/atlikušās gut. = Asukoht on hea.
**Statuss:** PENDING
#### ET-A2-0291
**Card ID:** a2-aschenputtel
**Field:** etMain
**CURRENT:** tuhkatriinu
**PROPOSED_ET:** tuhkatriinu
**Problēma:** EtMain on küll õige, kuid kaart on vastuolus vigase study.translation-väljaga.
**LV etalons (konteksts):** pelnrušķīte
**DE konteksts:** Aschenputtel
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** FOREIGN_REMNANT **LABOT** Er ist krank. = LV/atlikušās Ta on haige.
**Statuss:** PENDING
#### ET-A2-0293
**Card ID:** a2-aufheben
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Kui miski on maas, tähendab aufheben sageli üles tõstma.
**PROPOSED_ET:** Kui miski on maas, tähendab aufheben sageli üles tõstmist.
**Problēma:** Pärast „tähendab“ on vaja nimisõnalist vormi „üles tõstmist“.
**LV etalons (konteksts):** Ja kaut kas ir uz zemes, aufheben bieži nozīmē pacelt.
**DE konteksts:** aufheben
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Wir mieten ein Auto. = Me rendime auto.
**Statuss:** PENDING
#### ET-A2-0294
**Card ID:** a2-aufheben
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Kui jutt on reeglist või otsusest, tähendab aufheben tühistama.
**PROPOSED_ET:** Kui jutt on reeglist või otsusest, tähendab aufheben tühistamist.
**Problēma:** Pärast „tähendab“ on vaja nimisõnalist vormi „tühistamist“.
**LV etalons (konteksts):** Ja runa ir par noteikumu vai lēmumu, aufheben nozīmē atcelt.
**DE konteksts:** aufheben
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich kaufe das Buch. = Ma ostan valodas raamatu.
**Statuss:** PENDING
#### ET-A2-0297
**Card ID:** a2-aufnahme
**Field:** study.important.text
**CURRENT:** die Aufnahme ei ole ainult “fotograafia”. See võib olla ka salvestis, foto või vastuvõtmise protsess.
**PROPOSED_ET:** die Aufnahme ei ole ainult „foto“. See võib olla ka salvestis, foto või vastuvõtmise protsess.
**Problēma:** „Fotograafia“ tähendab fotokunsti või -tegemist, mitte üksikut fotot.
**LV etalons (konteksts):** die Aufnahme nav tikai “fotogrāfija”. Tas var būt arī ieraksts, fotoattēls vai uzņemšanas process.
**DE konteksts:** Aufnahme
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Leitung ist kaputt. = Liin on katki.
**Statuss:** PENDING
#### ET-A2-0301
**Card ID:** a2-aufrufen
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Koos Webseite, Datei või Programm tähendab aufrufen avama.
**PROPOSED_ET:** Veebilehe, faili või programmi puhul tähendab aufrufen „avama“.
**Problēma:** Saksa nimisõnad on eestikeelses lauses vääras vormis ning lause on ebaloomulik.
**LV etalons (konteksts):** Ar Webseite, Datei vai Programm aufrufen nozīmē atvērt.
**DE konteksts:** aufrufen
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Wasserleitung LV/atlikušās tropft. = Veetoru tilgub.
**Statuss:** PENDING
#### ET-A2-0302
**Card ID:** a2-aufrufen
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Koos Namen või Nummer tähendab see välja hüüdma; koos zu + Dativ tähendab see sageli üles kutsuma.
**PROPOSED_ET:** Nime või numbri puhul tähendab see „välja kutsuma“; koos zu + daativiga tähendab see sageli „üles kutsuma“.
**Problēma:** Lause sisaldab saksa nimisõnu ja saksakeelset käändetermineid eestikeelses vääras vormis.
**LV etalons (konteksts):** Ar Namen vai Nummer tas nozīmē izsaukt; ar zu + kam? tas bieži nozīmē aicināt.
**DE konteksts:** aufrufen
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich merke den Fehler. = Ma märkan viga.
**Statuss:** PENDING
#### ET-A2-0319
**Card ID:** a2-bitter
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valus, karm või terav.
**PROPOSED_ET:** Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valusat, karmi või teravat.
**Problēma:** Verb tähendama nõuab siin partitiivobjekti; omadussõnad peavad olema vastavas käändes.
**LV etalons (konteksts):** Par pieredzi, patiesību vai zaudējumu bitter bieži nozīmē sāpīgs, skarbs vai ass.
**DE konteksts:** bitter
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Patientin ruht sich aus. = valodas Patsient puhkab.
**Statuss:** PENDING
#### ET-A2-0325
**Card ID:** a2-dabei
**Field:** study.examples[3].lv
**CURRENT:** ta aitas ja õppis pealegi palju.
**PROPOSED_ET:** ta aitas ja õppis pealegi palju.
**Problēma:** Sõna „aitas“ on võõrkeelne või vigane remnant; eesti vaste on „aitas“.
**LV etalons (konteksts):** viņš palīdzēja un turklāt daudz iemācījās.
**DE konteksts:** dabei
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Sie spielt eine Rolle. = Ta mängib rolli.
**Statuss:** PENDING
#### ET-A2-0326
**Card ID:** a2-darauf
**Field:** study.examples[5].lv
**CURRENT:** veidi pärast seda tuli ta tagasi.
**PROPOSED_ET:** varsti pärast seda tuli ta tagasi.
**Problēma:** Ajalises väljendis on „varsti pärast seda“ loomulikum ja vastab paremini allika tähendusele.
**LV etalons (konteksts):** neilgi pēc tam viņš atgriezās.
**DE konteksts:** darauf
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Er hat die Hauptrolle. = Tal on peaosa. aizstāts ar
**Statuss:** PENDING
#### ET-A2-0327
**Card ID:** a2-darüber
**Field:** etMain
**CURRENT:** selle eest
**PROPOSED_ET:** selle kohta • selle kohal
**Problēma:** „Selle eest” tähendab dafür; darüber tähendab tavaliselt „selle kohta” või „selle kohal”.
**LV etalons (konteksts):** par to
**DE konteksts:** darüber
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich kaufe eine Papierrolle. = Ma valodas ostan paberirulli.
**Statuss:** PENDING
#### ET-A2-0337
**Card ID:** a2-ehrlich
**Field:** study.examples[4].lv
**CURRENT:** ta on tore.
**PROPOSED_ET:** ta on aus.
**Problēma:** „Tore” tähendab kena või meeldivat, mitte saksa ehrlich tähendust „aus”.
**LV etalons (konteksts):** viņš ir jauks.
**DE konteksts:** ehrlich
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der Kaffeesatz bleibt im Glas. = valodas Kohvipaks jääb klaasi.
**Statuss:** PENDING
#### ET-A2-0341
**Card ID:** a2-einsteigen
**Field:** study.examples[1].lv
**CURRENT:** palun, sisenege eest.
**PROPOSED_ET:** palun sisenege eesuksest.
**Problēma:** „Sisenege eest” on eesti keeles ebaloomulik; „eesuksest” väljendab sisenemiskohta selgelt.
**LV etalons (konteksts):** lūdzu, iekāpiet priekšā.
**DE konteksts:** einsteigen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Warteschlange LV/atlikušās ist lang. = Järjekord on pikk.
**Statuss:** PENDING
#### ET-A2-0348
**Card ID:** a2-gang
**Field:** study.translation
**CURRENT:** koridor • kõnnak • roog
**PROPOSED_ET:** koridor • kõnnak • käik
**Problēma:** For a meal, German Gang means a course; Estonian käik is the precise equivalent, not roog.
**LV etalons (konteksts):** gaitenis • gaita • ēdiena kārta
**DE konteksts:** Gang
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich kaufe ein Fahrradschloss. = valodas Ma ostan jalgrattaluku. ET; DE daļa
**Statuss:** PENDING
#### ET-A2-0349
**Card ID:** a2-gang
**Field:** study.examples[3].lv
**CURRENT:** menüüs on kolm rooga.
**PROPOSED_ET:** menüüs on kolm käiku.
**Problēma:** The example describes three meal courses, not simply three dishes.
**LV etalons (konteksts):** ēdienkartē ir trīs ēdiena kārtas.
**DE konteksts:** Gang
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der Schlüssel ist LV/atlikušās weg. = Võti on kadunud.
**Statuss:** PENDING
#### ET-A2-0350
**Card ID:** a2-gang
**Field:** study.examples[4].lv
**CURRENT:** esimene roog oli supp.
**PROPOSED_ET:** esimene käik oli supp.
**Problēma:** The example refers to the first course of a meal; käik is the precise Estonian term.
**LV etalons (konteksts):** pirmā ēdiena kārta bija zupa.
**DE konteksts:** Gang
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das ist meine Schuld. = See on minu süü.
**Statuss:** PENDING
#### ET-A2-0356
**Card ID:** a2-indem
**Field:** study.comparison[2].meaning
**CURRENT:** et
**PROPOSED_ET:** sellega, et
**Problēma:** „Et” väljendab siin pigem eesmärki, kuid indem näitab viisi; sobiv vaste on „sellega, et”.
**LV etalons (konteksts):** lai
**DE konteksts:** indem
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das Büro ist oben. LV/atlikušās = Kontor on üleval.
**Statuss:** PENDING
#### ET-A2-0393
**Card ID:** a2-rasen-study
**Field:** study.examples[2].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0394
**Card ID:** a2-rolle
**Field:** study.examples[3].lv
**CURRENT:** ich zu Hause.
**PROPOSED_ET:** Mul on kodus paberirull.
**Problēma:** Väli sisaldab saksakeelset katkist lauset ega tõlgi allikalauset ega sõna Rolle tähendust.
**LV etalons (konteksts):** man vajag papīra rulli.
**DE konteksts:** Rolle
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** ich zu Hause. = Tavaliselt olen ma kodus.
**Statuss:** PENDING
#### ET-A2-0397
**Card ID:** a2-schalten
**Field:** study.examples[3].lv
**CURRENT:** kas sa saad, palun, 2. kanalile lülitada?
**PROPOSED_ET:** Kas sa saad palun 2. kanalile ümber lülitada?
**Problēma:** Ümberlülitumise tähendus vajab verbiga lülitama loomulikku ühendit ümber lülitama.
**LV etalons (konteksts):** vai vari, lūdzu, pārslēgt uz 2. kanālu?
**DE konteksts:** schalten
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der erste Teil ist LV/atlikušās leicht. = Esimene osa on lihtne.
**Statuss:** PENDING
#### ET-A2-0401
**Card ID:** a2-schloss
**Field:** study.examples[1].lv
**CURRENT:** neuschwansteini loss on väga tuntud.
**PROPOSED_ET:** Neuschwansteini loss on väga tuntud.
**Problēma:** Lause alguses olev pärisnimi peab algama suure tähega.
**LV etalons (konteksts):** neišvānšteinas pils ir ļoti pazīstama.
**DE konteksts:** Schloss
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich habe einen Termin. = Mul on aeg kokku lepitud.
**Statuss:** PENDING
#### ET-A2-0402
**Card ID:** a2-sich-befinden
**Field:** study.examples[4].lv
**CURRENT:** ma tunnen end täna hästi.
**PROPOSED_ET:** ma asun täna siin.
**Problēma:** Praegune lause tähendab „sich fühlen”, mitte asukohta väljendavat „sich befinden”.
**LV etalons (konteksts):** es šodien jūtos labi.
**DE konteksts:** sich befinden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das Treffen war nett. = Kohtumine oli meeldiv.
**Statuss:** PENDING
#### ET-A2-0407
**Card ID:** a2-stelle
**Field:** study.comparison[4].meaning
**CURRENT:** haav
**PROPOSED_ET:** koht
**Problēma:** Haav tähendab eesti keeles Wunde, mitte Stelle; Stelle vastav tähendus on koht või paik.
**LV etalons (konteksts):** brūce
**DE konteksts:** Stelle
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das Wasser ist flach. = Vesi on madal.
**Statuss:** PENDING
#### ET-A2-0422
**Card ID:** a2-während
**Field:** study.examples[3].lv
**CURRENT:** ta räägib telefoniga, sel ajal kui ootab.
**PROPOSED_ET:** ta räägib telefoniga, samal ajal kui ta ootab.
**Problēma:** Kõrvallauses puudub loomulikult vajalik alus; korduv ta teeb lause grammatiliselt selgeks.
**LV etalons (konteksts):** viņa runā pa telefonu, kamēr gaida.
**DE konteksts:** während
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich warte umsonst. = Ma ootan asjata.
**Statuss:** PENDING
#### ET-A2-0426
**Card ID:** a2-wiegen
**Field:** study.examples[5].lv
**CURRENT:** auto seisab õues.
**PROPOSED_ET:** auto kaalub kaks tonni.
**Problēma:** Lause on grammatiliselt korrektne, kuid ei näitlikusta verbi wiegen tähendust „kaaluma“.
**LV etalons (konteksts):** automašīna stāv ārā.
**DE konteksts:** wiegen
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich schließe den Drucker an. = Ma ühendan printeri. aizstāts ar
**Statuss:** PENDING
#### ET-A2-0427
**Card ID:** a2-wiegen
**Field:** study.comparison[4].meaning
**CURRENT:** auto / vagun
**PROPOSED_ET:** kaaluma / kaal
**Problēma:** Võrdlus on sihitult seotud auto ja vaguniga ega aita eristada wiegen'i tähendusi ega vorme.
**LV etalons (konteksts):** automašīna / vagons
**DE konteksts:** wiegen
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der Arzt Wunde. = verbindet die Arst seob haava.
**Statuss:** PENDING
#### ET-A2-0437
**Card ID:** a2-gross
**Field:** study.examples[2].lv
**CURRENT:** ta on pikka kasvu.
**PROPOSED_ET:** Ta on pikka kasvu.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** viņš ir garš augumā.
**DE konteksts:** groß
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich denke an dich. = Ma mõtlen valodas sinu peale.
**Statuss:** PENDING
#### ET-A2-0439
**Card ID:** a2-hoch
**Field:** study.examples[2].lv
**CURRENT:** üür on kõrge.
**PROPOSED_ET:** Üür on kõrge.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** īre ir augsta.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich präsentiere den Plan. = Ma esitlen plaani.
**Statuss:** PENDING
#### ET-A2-0440
**Card ID:** a2-hoch
**Field:** study.examples[3].lv
**CURRENT:** müür on kõrge.
**PROPOSED_ET:** Müür on kõrge.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** siena ir augsta.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Der Wagen ist neu. = Auto on uus.
**Statuss:** PENDING
#### ET-A2-0441
**Card ID:** a2-hoch
**Field:** study.examples[4].lv
**CURRENT:** hinnad on kõrged.
**PROPOSED_ET:** Hinnad on kõrged.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** cenas ir augstas.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das Auto steht da. = Auto seisab seal.
**Statuss:** PENDING
#### ET-A2-0444
**Card ID:** a2-klein
**Field:** study.examples[3].lv
**CURRENT:** mul on väike kott.
**PROPOSED_ET:** Mul on väike kott.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** man ir maza soma.
**DE konteksts:** klein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** FOREIGN_REMNANT **LABOT** Wir stimmen ab. = LV/atlikušās Me hääletame.
**Statuss:** PENDING
#### ET-A2-0458
**Card ID:** a2-auch
**Field:** study.examples[1].lv
**CURRENT:** ma tulen ka.
**PROPOSED_ET:** Ma tulen ka.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** es arī nāku.
**DE konteksts:** auch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das Auto ist teuer. = Auto on kallis.
**Statuss:** PENDING
## 4. Deterministic gates

| Study 231/231 | FAIL |
| sectionAccents | PASS |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |
