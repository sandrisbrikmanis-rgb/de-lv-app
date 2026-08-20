# ET–DE A2 pilns lingvistiskais audits (MASTER v1.8 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.8** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `e0e062fb8fc9b5a4d7824bfb32595c913017f4ee` |
| **DATASET_PRODUCTION_BLOB** | `2719cd20af9e34466db0dc8036c8fb39b509d2d7` |
| **WWW DATASET BLOB** | `2719cd20af9e34466db0dc8036c8fb39b509d2d7` |
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

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.8**
**Audita datums:** 2026-08-20
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **1640** |
| Luna coverage | **skipped** |
| Study | **232/231** |
| RAW findings | **508** |
| NEW_VALIDATED_REAL_FINDINGS | **508** |
| OWNER_BACKLOG_FINAL | **508** |
| PREVIOUSLY_SEEN_RAW | **0** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **508** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **1640/1640 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **0** |
| sectionAccents | **857** |
| LV remnants | **476** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 0 |
| Deterministic | 508 |
| OWNER_DECISION_CONFIRMED | 0 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **0** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **508** |
| OWNER_BACKLOG_FINAL | **508** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **N/A** |
| OWNER_HISTORY_GATE | **N/A** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 1640/1640 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **1** · HIGH: **476** · MEDIUM: **31** · LOW: **0**

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
**Field:** entry[2].study.comparison[1].example
**CURRENT:** Ich fahre morgen weg. = Es rīt aizbraucu prom.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0003
**Card ID:** a2-abfahren
**Field:** entry[2].study.comparison[2].example
**CURRENT:** Wir fahren jetzt los. = Mēs tagad sākam braukt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0004
**Card ID:** a2-abfahren
**Field:** entry[2].study.comparison[3].example
**CURRENT:** Der Bus geht gleich ab. = Autobuss tūlīt atiet.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0005
**Card ID:** a2-abgeben
**Field:** entry[5].study.comparison[1].example
**CURRENT:** Ich gebe dir den Schlüssel. = Es tev dodu atslēgu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0006
**Card ID:** a2-abgeben
**Field:** entry[5].study.comparison[2].example
**CURRENT:** Ich gebe das Buch zurück. = Es atdodu grāmatu atpakaļ.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0007
**Card ID:** a2-abgeben
**Field:** entry[5].study.comparison[4].example
**CURRENT:** Ich verkaufe mein Fahrrad. = Es pārdodu savu velosipēdu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0008
**Card ID:** a2-absagen
**Field:** entry[11].study.comparison[0].example
**CURRENT:** Ich sage den Termin ab. = Es atceļu tikšanos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0009
**Card ID:** a2-absagen
**Field:** entry[11].study.comparison[1].example
**CURRENT:** Ich lehne das Angebot ab. = Es noraidu piedāvājumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0010
**Card ID:** a2-absagen
**Field:** entry[11].study.comparison[2].example
**CURRENT:** Ich kündige den Vertrag. = Es uzteicu līgumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0011
**Card ID:** a2-absagen
**Field:** entry[11].study.comparison[3].example
**CURRENT:** Ich storniere die Buchung. = Es atceļu rezervāciju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0012
**Card ID:** a2-absagen
**Field:** entry[11].study.comparison[4].example
**CURRENT:** Er sagt nein. = Viņš saka nē.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0013
**Card ID:** a2-abschließen
**Field:** entry[13].study.comparison[0].example
**CURRENT:** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0014
**Card ID:** a2-abschließen
**Field:** entry[13].study.comparison[3].example
**CURRENT:** Ich unterschreibe den Vertrag. = Es parakstu līgumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0015
**Card ID:** a2-abstellen
**Field:** entry[16].study.comparison[0].example
**CURRENT:** Ich stelle das Fahrrad ab. = Es novietoju velosipēdu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0016
**Card ID:** a2-abstellen
**Field:** entry[16].study.comparison[1].example
**CURRENT:** Ich schalte den Computer aus. = Es izslēdzu datoru.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0017
**Card ID:** a2-abstellen
**Field:** entry[16].study.comparison[2].example
**CURRENT:** Der Bus hält an. = Autobuss apstājas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0018
**Card ID:** a2-abstellen
**Field:** entry[16].study.comparison[3].example
**CURRENT:** Der Fahrer stoppt das Auto. = Vadītājs aptur auto.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0019
**Card ID:** a2-abstellen
**Field:** entry[16].study.comparison[4].example
**CURRENT:** Ich stelle die Tasche neben die Tür. = Es nolieku somu pie durvīm.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0020
**Card ID:** a2-angewandt
**Field:** entry[41].study.comparison[0].example
**CURRENT:** Diese Methode wird angewandt. = Šī metode tiek pielietota.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0021
**Card ID:** a2-angewandt
**Field:** entry[41].study.comparison[1].example
**CURRENT:** Das ist eine praktische Lösung. = Tas ir praktisks risinājums.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0022
**Card ID:** a2-angreifen
**Field:** entry[42].study.comparison[0].example
**CURRENT:** Der Hund greift an. = Suns uzbrūk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0023
**Card ID:** a2-angreifen
**Field:** entry[42].study.comparison[1].example
**CURRENT:** Die Gruppe attackiert ihn. = Grupa viņam uzbrūk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0024
**Card ID:** a2-angreifen
**Field:** entry[42].study.comparison[2].example
**CURRENT:** Er beleidigt mich. = Viņš mani apvaino.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0025
**Card ID:** a2-angreifen
**Field:** entry[42].study.comparison[3].example
**CURRENT:** Sie kritisiert den Vorschlag. = Viņa kritizē priekšlikumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0026
**Card ID:** a2-anhänger
**Field:** entry[44].study.comparison[1].example
**CURRENT:** Er ist ein Fan der Mannschaft. = Viņš ir komandas fans.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0027
**Card ID:** a2-anhänger
**Field:** entry[44].study.comparison[2].example
**CURRENT:** Sie hat viele Unterstützer. = Viņai ir daudz atbalstītāju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0028
**Card ID:** a2-anhänger
**Field:** entry[44].study.comparison[3].example
**CURRENT:** Der Wohnwagen steht am See. = Dzīvojamā piekabe stāv pie ezera.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0029
**Card ID:** a2-anheizen
**Field:** entry[45].study.comparison[0].example
**CURRENT:** Ich heize den Ofen an. = Es iekuru krāsni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0030
**Card ID:** a2-anheizen
**Field:** entry[45].study.comparison[1].example
**CURRENT:** Wir heizen die Wohnung. = Mēs apkurinām dzīvokli.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0031
**Card ID:** a2-anheizen
**Field:** entry[45].study.comparison[3].example
**CURRENT:** Das verschärft den Streit. = Tas saasina strīdu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0032
**Card ID:** a2-anlegen
**Field:** entry[55].study.comparison[1].example
**CURRENT:** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0033
**Card ID:** a2-anmelden
**Field:** entry[57].study.comparison[1].example
**CURRENT:** Melden Sie sich bitte an. = Lūdzu, piesakieties.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0034
**Card ID:** a2-anmelden
**Field:** entry[57].study.comparison[2].example
**CURRENT:** Ich registriere mein Konto. = Es reģistrēju savu kontu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0035
**Card ID:** a2-anmelden
**Field:** entry[57].study.comparison[3].example
**CURRENT:** Ich buche einen Termin. = Es rezervēju laiku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0036
**Card ID:** a2-anmelden
**Field:** entry[57].study.comparison[4].example
**CURRENT:** Ich melde das Problem. = Es ziņoju par problēmu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0037
**Card ID:** a2-anstecken
**Field:** entry[63].study.comparison[1].example
**CURRENT:** Der Schlüssel steckt im Schloss. = Atslēga ir slēdzenē.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0038
**Card ID:** a2-anstecken
**Field:** entry[63].study.comparison[3].example
**CURRENT:** Ich habe mich angesteckt. = Es inficējos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0039
**Card ID:** a2-anstellen
**Field:** entry[65].study.comparison[0].example
**CURRENT:** Die Firma stellt ihn an. = Firma viņu pieņem darbā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0040
**Card ID:** a2-anstellen
**Field:** entry[65].study.comparison[1].example
**CURRENT:** Wir stellen neue Leute ein. = Mēs pieņemam darbā jaunus cilvēkus.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0041
**Card ID:** a2-anstellen
**Field:** entry[65].study.comparison[2].example
**CURRENT:** Ich schalte das Licht an. = Es ieslēdzu gaismu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0042
**Card ID:** a2-anstellen
**Field:** entry[65].study.comparison[3].example
**CURRENT:** Ich stelle mich an. = Es nostājos rindā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0043
**Card ID:** a2-artikel
**Field:** entry[90].study.comparison[0].example
**CURRENT:** Der Artikel ist kurz. = Raksts ir īss.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0044
**Card ID:** a2-artikel
**Field:** entry[90].study.comparison[1].example
**CURRENT:** Der Zeitungsartikel ist neu. = Avīzes raksts ir jauns.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0045
**Card ID:** a2-artikel
**Field:** entry[90].study.comparison[2].example
**CURRENT:** Die Ware ist teuer. = Prece ir dārga.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0046
**Card ID:** a2-artikel
**Field:** entry[90].study.comparison[4].example
**CURRENT:** Der Paragraph ist wichtig. = Pants ir svarīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0047
**Card ID:** a2-aufheben
**Field:** entry[118].study.comparison[0].example
**CURRENT:** Ich hebe den Schlüssel auf. = Es paceļu atslēgu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0048
**Card ID:** a2-aufheben
**Field:** entry[118].study.comparison[1].example
**CURRENT:** Ich hebe die Hand. = Es paceļu roku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0049
**Card ID:** a2-aufheben
**Field:** entry[118].study.comparison[2].example
**CURRENT:** Wir sagen den Termin ab. = Mēs atceļam tikšanos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0050
**Card ID:** a2-auflage
**Field:** entry[127].study.comparison[0].example
**CURRENT:** Die Auflage ist hoch. = Tirāža ir liela.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0051
**Card ID:** a2-auflage
**Field:** entry[127].study.comparison[1].example
**CURRENT:** Die neue Ausgabe ist da. = Jaunais numurs ir klāt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0052
**Card ID:** a2-auflage
**Field:** entry[127].study.comparison[2].example
**CURRENT:** Das ist eine Bedingung. = Tas ir nosacījums.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0053
**Card ID:** a2-aufnahme
**Field:** entry[132].study.comparison[2].example
**CURRENT:** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0054
**Card ID:** a2-aufnahme
**Field:** entry[132].study.comparison[4].example
**CURRENT:** Die Aufnahmeprüfung ist morgen. = Iestājpārbaudījums ir rīt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0055
**Card ID:** a2-aufnehmen
**Field:** entry[133].study.comparison[1].example
**CURRENT:** Ich nehme das Buch. = Es ņemu grāmatu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0056
**Card ID:** a2-aufnehmen
**Field:** entry[133].study.comparison[2].example
**CURRENT:** Ich nehme das Angebot an. = Es pieņemu piedāvājumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0057
**Card ID:** a2-aufnehmen
**Field:** entry[133].study.comparison[3].example
**CURRENT:** Wir beginnen die Arbeit. = Mēs sākam darbu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0058
**Card ID:** a2-aufrichtig
**Field:** entry[138].study.comparison[0].example
**CURRENT:** Eine aufrichtige Entschuldigung. = Patiesa atvainošanās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0059
**Card ID:** a2-aufrichtig
**Field:** entry[138].study.comparison[1].example
**CURRENT:** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0060
**Card ID:** a2-aufrichtig
**Field:** entry[138].study.comparison[2].example
**CURRENT:** Herzliche Grüße. = Sirsnīgi sveicieni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0061
**Card ID:** a2-aufrichtig
**Field:** entry[138].study.comparison[3].example
**CURRENT:** Sie spricht offen. = Viņa runā atklāti.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0062
**Card ID:** a2-aufrufen
**Field:** entry[139].study.comparison[3].example
**CURRENT:** Er fordert uns auf. = Viņš mūs aicina.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0063
**Card ID:** a2-auftragen
**Field:** entry[146].study.comparison[0].example
**CURRENT:** Der Lehrer trägt eine Aufgabe auf. = Skolotājs uzdod uzdevumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0064
**Card ID:** a2-auftragen
**Field:** entry[146].study.comparison[1].example
**CURRENT:** Ich gebe dir das Buch. = Es tev dodu grāmatu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0065
**Card ID:** a2-auftragen
**Field:** entry[146].study.comparison[2].example
**CURRENT:** Wir streichen die Wand an. = Mēs krāsojam sienu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0066
**Card ID:** a2-auftragen
**Field:** entry[146].study.comparison[3].example
**CURRENT:** Der Kellner serviert das Essen. = Viesmīlis pasniedz ēdienu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0067
**Card ID:** a2-auftreten
**Field:** entry[147].study.comparison[0].example
**CURRENT:** Ein Fehler tritt auf. = Parādās kļūda.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0068
**Card ID:** a2-auftreten
**Field:** entry[147].study.comparison[1].example
**CURRENT:** Er erscheint um acht. = Viņš ierodas astoņos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0069
**Card ID:** a2-auftreten
**Field:** entry[147].study.comparison[2].example
**CURRENT:** Sie spielt im Theater. = Viņa spēlē teātrī.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0070
**Card ID:** a2-auftreten
**Field:** entry[147].study.comparison[3].example
**CURRENT:** Er verhält sich ruhig. = Viņš izturas mierīgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0071
**Card ID:** a2-aufwenden
**Field:** entry[149].study.comparison[1].example
**CURRENT:** Ich gebe viel Geld aus. = Es iztērēju daudz naudas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0072
**Card ID:** a2-aufwenden
**Field:** entry[149].study.comparison[2].example
**CURRENT:** Ich verbringe den Abend zu Hause. = Es pavadu vakaru mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0073
**Card ID:** a2-aufwenden
**Field:** entry[149].study.comparison[3].example
**CURRENT:** Wir investieren Zeit und Geld. = Mēs ieguldām laiku un naudu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0074
**Card ID:** a2-aufzeichnen
**Field:** entry[150].study.comparison[1].example
**CURRENT:** Das Kind zeichnet ein Haus. = Bērns zīmē māju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0075
**Card ID:** a2-aussteigen
**Field:** entry[159].study.comparison[0].example
**CURRENT:** Ich steige aus dem Bus aus. = Es izkāpju no autobusa.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0076
**Card ID:** a2-aussteigen
**Field:** entry[159].study.comparison[1].example
**CURRENT:** Ich steige in den Zug ein. = Es iekāpju vilcienā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0077
**Card ID:** a2-aussteigen
**Field:** entry[159].study.comparison[2].example
**CURRENT:** Wir steigen in Berlin um. = Mēs pārsēžamies Berlīnē.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0078
**Card ID:** a2-aussteigen
**Field:** entry[159].study.comparison[3].example
**CURRENT:** Er verlässt die Firma. = Viņš atstāj firmu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0079
**Card ID:** a2-auswählen
**Field:** entry[165].study.comparison[0].example
**CURRENT:** Ich wähle ein Bild aus. = Es izvēlos attēlu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0080
**Card ID:** a2-auswählen
**Field:** entry[165].study.comparison[2].example
**CURRENT:** Such dir ein Buch aus. = Izvēlies sev grāmatu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0081
**Card ID:** a2-auswählen
**Field:** entry[165].study.comparison[3].example
**CURRENT:** Ich entscheide morgen. = Es izlemšu rīt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0082
**Card ID:** a2-auswählen
**Field:** entry[165].study.comparison[4].example
**CURRENT:** Markieren Sie die richtige Antwort. = Atzīmējiet pareizo atbildi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0083
**Card ID:** a2-ausziehen
**Field:** entry[169].study.comparison[2].example
**CURRENT:** Wir ziehen nach Riga um. = Mēs pārceļamies uz Rīgu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0084
**Card ID:** a2-ausziehen
**Field:** entry[169].study.comparison[3].example
**CURRENT:** Das Kind zieht sich aus. = Bērns izģērbjas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0085
**Card ID:** a2-bahn
**Field:** entry[187].study.comparison[1].example
**CURRENT:** Der Zug fährt um acht Uhr ab. = Vilciens atiet astoņos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0086
**Card ID:** a2-bahn
**Field:** entry[187].study.comparison[3].example
**CURRENT:** Wir treffen uns am Bahnhof. = Mēs tiekamies stacijā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0087
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[1].example
**CURRENT:** Wir sitzen auf einer Bank. = Mēs sēžam uz soliņa. Plural: die Bänke.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0088
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[2].example
**CURRENT:** Die Bankfiliale ist geöffnet. = Bankas filiāle ir atvērta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0089
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[3].example
**CURRENT:** Wir sitzen auf der Parkbank. = Mēs sēžam uz parka soliņa.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0090
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[4].example
**CURRENT:** Das Schiff steckt auf einer Sandbank. = Kuģis ir uzsēdies uz sēkļa.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0091
**Card ID:** a2-bank
**Field:** entry[194].study.comparison[5].example
**CURRENT:** Ich sitze auf einem Stuhl. = Es sēžu uz krēsla.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0092
**Card ID:** a2-bauer
**Field:** entry[207].study.comparison[0].example
**CURRENT:** Der Bauer arbeitet auf dem Feld. = Zemnieks strādā uz lauka.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0093
**Card ID:** a2-bauer
**Field:** entry[207].study.comparison[1].example
**CURRENT:** Der Landwirt führt einen Hof. = Lauksaimnieks vada saimniecību.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0094
**Card ID:** a2-bauer
**Field:** entry[207].study.comparison[2].example
**CURRENT:** Wir besuchen einen Bauernhof. = Mēs apmeklējam lauku saimniecību.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0095
**Card ID:** a2-bauer
**Field:** entry[207].study.comparison[3].example
**CURRENT:** Die Dame ist eine starke Figur. = Dāma ir spēcīga figūra.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0096
**Card ID:** a2-bauer
**Field:** entry[207].study.comparison[4].example
**CURRENT:** Der Spielstein liegt auf dem Brett. = Spēles kauliņš atrodas uz galda.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0097
**Card ID:** a2-bedienen
**Field:** entry[213].study.comparison[0].example
**CURRENT:** Der Kellner bedient uns. = Viesmīlis mūs apkalpo.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0098
**Card ID:** a2-bedienen
**Field:** entry[213].study.comparison[2].example
**CURRENT:** Kannst du mir helfen? = Vai vari man palīdzēt?
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0099
**Card ID:** a2-bedienen
**Field:** entry[213].study.comparison[3].example
**CURRENT:** Sie serviert das Essen. = Viņa pasniedz ēdienu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0100
**Card ID:** a2-bedienen
**Field:** entry[213].study.comparison[4].example
**CURRENT:** Er steuert das Auto. = Viņš vada auto.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0101
**Card ID:** a2-bedienung
**Field:** entry[214].study.comparison[0].example
**CURRENT:** Die Bedienung ist freundlich. = Apkalpotājs ir laipns.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0102
**Card ID:** a2-bedienung
**Field:** entry[214].study.comparison[1].example
**CURRENT:** Der Kellner bringt die Rechnung. = Viesmīlis atnes rēķinu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0103
**Card ID:** a2-bedienung
**Field:** entry[214].study.comparison[2].example
**CURRENT:** Die Kellnerin fragt nach Getränken. = Viesmīle jautā par dzērieniem.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0104
**Card ID:** a2-bedienung
**Field:** entry[214].study.comparison[4].example
**CURRENT:** Das Personal hilft uns. = Personāls mums palīdz.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0105
**Card ID:** a2-behalten
**Field:** entry[221].study.comparison[0].example
**CURRENT:** Du kannst es behalten. = Tu vari to paturēt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0106
**Card ID:** a2-behalten
**Field:** entry[221].study.comparison[2].example
**CURRENT:** Ich merke mir die Nummer. = Es iegaumēju numuru.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0107
**Card ID:** a2-behalten
**Field:** entry[221].study.comparison[4].example
**CURRENT:** Ich bewahre die Quittung auf. = Es glabāju čeku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0108
**Card ID:** a2-beinahe
**Field:** entry[222].study.comparison[0].example
**CURRENT:** Ich hätte beinahe gelacht. = Es gandrīz sāku smieties.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0109
**Card ID:** a2-beinahe
**Field:** entry[222].study.comparison[1].example
**CURRENT:** Ich bin fast fertig. = Es esmu gandrīz gatavs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0110
**Card ID:** a2-beinahe
**Field:** entry[222].study.comparison[4].example
**CURRENT:** Wir haben es gerade noch geschafft. = Mēs vēl tik tikko paspējām.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0111
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[0].example
**CURRENT:** Das ist bekannt. = Tas ir zināms.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0112
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[1].example
**CURRENT:** Er ist berühmt. = Viņš ir slavens.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0113
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[2].example
**CURRENT:** Die Umgebung ist mir vertraut. = Apkārtne man ir pazīstama.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0114
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[3].example
**CURRENT:** Wir sind befreundet. = Mēs esam draugos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0115
**Card ID:** a2-bekannt
**Field:** entry[224].study.comparison[4].example
**CURRENT:** Der Täter ist unbekannt. = Vainīgais ir nezināms.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0116
**Card ID:** a2-bestellen
**Field:** entry[242].study.comparison[0].example
**CURRENT:** Ich bestelle Essen. = Es pasūtu ēdienu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0117
**Card ID:** a2-bestellen
**Field:** entry[242].study.comparison[1].example
**CURRENT:** Ich reserviere einen Tisch. = Es rezervēju galdiņu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0118
**Card ID:** a2-bestellen
**Field:** entry[242].study.comparison[2].example
**CURRENT:** Ich kaufe Brot. = Es pērku maizi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0119
**Card ID:** a2-bestellen
**Field:** entry[242].study.comparison[4].example
**CURRENT:** Ich bearbeite den Text. = Es apstrādāju tekstu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0120
**Card ID:** a2-bestimmt
**Field:** entry[244].study.comparison[2].example
**CURRENT:** Ich brauche ein konkretes Beispiel. = Man vajag konkrētu piemēru.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0121
**Card ID:** a2-bestimmt
**Field:** entry[244].study.comparison[3].example
**CURRENT:** Wir haben einen festen Termin. = Mums ir noteikts termiņš.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0122
**Card ID:** a2-bestimmt
**Field:** entry[244].study.comparison[4].example
**CURRENT:** Er kommt wahrscheinlich morgen. = Viņš droši vien atnāks rīt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0123
**Card ID:** a2-birne
**Field:** entry[255].study.comparison[0].example
**CURRENT:** Ich esse eine Birne. = Es ēdu bumbieri.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0124
**Card ID:** a2-birne
**Field:** entry[255].study.comparison[1].example
**CURRENT:** Die Glühbirne ist kaputt. = Spuldze ir saplīsusi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0125
**Card ID:** a2-birne
**Field:** entry[255].study.comparison[3].example
**CURRENT:** Birnen sind Obst. = Bumbieri ir augļi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0126
**Card ID:** a2-bitter
**Field:** entry[258].study.comparison[0].example
**CURRENT:** Der Kaffee ist bitter. = Kafija ir rūgta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0127
**Card ID:** a2-bitter
**Field:** entry[258].study.comparison[1].example
**CURRENT:** Die Zitrone ist sauer. = Citrons ir skābs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0128
**Card ID:** a2-bitter
**Field:** entry[258].study.comparison[3].example
**CURRENT:** Der Lehrer ist streng. = Skolotājs ir stingrs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0129
**Card ID:** a2-bitter
**Field:** entry[258].study.comparison[4].example
**CURRENT:** Der Geruch ist unangenehm. = Smarža ir nepatīkama.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0130
**Card ID:** a2-boden
**Field:** entry[272].study.comparison[0].example
**CURRENT:** Die Tasche liegt auf dem Boden. = Soma atrodas uz grīdas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0131
**Card ID:** a2-boden
**Field:** entry[272].study.comparison[1].example
**CURRENT:** Der Fußboden ist sauber. = Grīda ir tīra.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0132
**Card ID:** a2-boden
**Field:** entry[272].study.comparison[3].example
**CURRENT:** Das Haus steht auf festem Grund. = Māja stāv uz stingra pamata.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0133
**Card ID:** a2-borgen
**Field:** entry[276].study.comparison[0].example
**CURRENT:** Ich borge mir Geld. = Es aizņemos naudu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0134
**Card ID:** a2-borgen
**Field:** entry[276].study.comparison[1].example
**CURRENT:** Kannst du mir das Buch leihen? = Vai vari man aizdot grāmatu?
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0135
**Card ID:** a2-borgen
**Field:** entry[276].study.comparison[3].example
**CURRENT:** Ich gebe das Buch zurück. = Es atdodu grāmatu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0136
**Card ID:** a2-böse
**Field:** entry[277].study.comparison[0].example
**CURRENT:** Bist du böse auf mich? = Vai tu esi dusmīgs uz mani?
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0137
**Card ID:** a2-böse
**Field:** entry[277].study.comparison[2].example
**CURRENT:** Er ist zornig. = Viņš ir nikns.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0138
**Card ID:** a2-böse
**Field:** entry[277].study.comparison[4].example
**CURRENT:** Ich bin sauer. = Es esmu dusmīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0139
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[0].example
**CURRENT:** Das Kind ist brav. = Bērns ir paklausīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0140
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[1].example
**CURRENT:** Er ist ein guter Mensch. = Viņš ir labs cilvēks.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0141
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[2].example
**CURRENT:** Sie ist nett. = Viņa ir jauka.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0142
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[3].example
**CURRENT:** Der Verkäufer ist freundlich. = Pārdevējs ir laipns.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0143
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[4].example
**CURRENT:** Das Kind ist artig. = Bērns ir pieklājīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0144
**Card ID:** a2-brav
**Field:** entry[285].study.comparison[5].example
**CURRENT:** Der Hund ist gehorsam. = Suns ir paklausīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0145
**Card ID:** a2-brennen
**Field:** entry[289].study.comparison[2].example
**CURRENT:** Ich habe mich verbrannt. = Es apdedzinājos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0146
**Card ID:** a2-brennen
**Field:** entry[289].study.comparison[3].example
**CURRENT:** Die Feuerwehr löscht das Feuer. = Ugunsdzēsēji dzēš uguni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0147
**Card ID:** a2-dabei
**Field:** entry[315].study.comparison[0].example
**CURRENT:** Ich habe den Schlüssel dabei. = Man ir līdzi atslēga.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0148
**Card ID:** a2-dabei
**Field:** entry[315].study.comparison[1].example
**CURRENT:** Bist du morgen mit dabei? = Vai tu rīt arī piedalīsies?
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0149
**Card ID:** a2-dabei
**Field:** entry[315].study.comparison[3].example
**CURRENT:** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0150
**Card ID:** a2-dabei
**Field:** entry[315].study.comparison[4].example
**CURRENT:** Trotzdem komme ich. = Tomēr es nākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0151
**Card ID:** a2-dafür
**Field:** entry[318].study.comparison[1].example
**CURRENT:** Darum bleibe ich zu Hause. = Tāpēc es palieku mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0152
**Card ID:** a2-dafür
**Field:** entry[318].study.comparison[2].example
**CURRENT:** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0153
**Card ID:** a2-dafür
**Field:** entry[318].study.comparison[3].example
**CURRENT:** Ich bin dagegen. = Es esmu pret to.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0154
**Card ID:** a2-dafür
**Field:** entry[318].study.comparison[4].example
**CURRENT:** Das ist für das Kind. = Tas ir bērnam.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0155
**Card ID:** a2-damit
**Field:** entry[321].study.comparison[0].example
**CURRENT:** Ich lerne, damit ich bestehe. = Es mācos, lai nokārtotu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0156
**Card ID:** a2-damit
**Field:** entry[321].study.comparison[2].example
**CURRENT:** Ich lerne, um zu bestehen. = Es mācos, lai nokārtotu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0157
**Card ID:** a2-damit
**Field:** entry[321].study.comparison[3].example
**CURRENT:** Deshalb bleibe ich hier. = Tāpēc es palieku šeit.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0158
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[0].example
**CURRENT:** Herzlichen Dank! = Sirsnīgs paldies!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0159
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[1].example
**CURRENT:** Nein, danke. = Nē, paldies.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0160
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[3].example
**CURRENT:** Vielen Dank für die Hilfe! = Liels paldies par palīdzību!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0161
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[4].example
**CURRENT:** Ich bedanke mich bei Ihnen. = Es pateicos jums.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0162
**Card ID:** a2-darauf
**Field:** entry[324].study.comparison[1].example
**CURRENT:** Ich lege es auf das Buch. = Es lieku to uz grāmatas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0163
**Card ID:** a2-darauf
**Field:** entry[324].study.comparison[2].example
**CURRENT:** Danach gehe ich nach Hause. = Pēc tam es eju mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0164
**Card ID:** a2-darauf
**Field:** entry[324].study.comparison[3].example
**CURRENT:** Wir sprechen darüber. = Mēs runājam par to.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0165
**Card ID:** a2-darüber
**Field:** entry[325].study.comparison[0].example
**CURRENT:** Wir sprechen darüber. = Mēs runājam par to.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0166
**Card ID:** a2-darüber
**Field:** entry[325].study.comparison[1].example
**CURRENT:** Wir sprechen über das Problem. = Mēs runājam par problēmu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0167
**Card ID:** a2-darüber
**Field:** entry[325].study.comparison[3].example
**CURRENT:** Ich habe davon gehört. = Es par to dzirdēju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0168
**Card ID:** a2-darum
**Field:** entry[326].study.comparison[0].example
**CURRENT:** Darum bleibe ich hier. = Tāpēc es palieku šeit.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0169
**Card ID:** a2-darum
**Field:** entry[326].study.comparison[1].example
**CURRENT:** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0170
**Card ID:** a2-darum
**Field:** entry[326].study.comparison[2].example
**CURRENT:** Deswegen bin ich müde. = Tāpēc esmu noguris.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0171
**Card ID:** a2-darum
**Field:** entry[326].study.comparison[3].example
**CURRENT:** Wir sitzen um das Feuer. = Mēs sēžam ap uguni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0172
**Card ID:** a2-davor
**Field:** entry[329].study.comparison[0].example
**CURRENT:** Ich habe Angst davor. = Man ir bail no tā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0173
**Card ID:** a2-davor
**Field:** entry[329].study.comparison[1].example
**CURRENT:** Vor dem Haus steht ein Auto. = Mājas priekšā stāv auto.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0174
**Card ID:** a2-davor
**Field:** entry[329].study.comparison[2].example
**CURRENT:** Danach gehen wir. = Pēc tam mēs ejam.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0175
**Card ID:** a2-dazu
**Field:** entry[330].study.comparison[2].example
**CURRENT:** Ich war dabei. = Es biju klāt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0176
**Card ID:** a2-dazu
**Field:** entry[330].study.comparison[3].example
**CURRENT:** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0177
**Card ID:** a2-decke
**Field:** entry[331].study.comparison[1].example
**CURRENT:** Die Bettdecke ist weich. = Sega ir mīksta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0178
**Card ID:** a2-decke
**Field:** entry[331].study.comparison[4].example
**CURRENT:** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0179
**Card ID:** a2-denn
**Field:** entry[334].study.comparison[1].example
**CURRENT:** Ich bleibe, weil es regnet. = Es palieku, jo līst.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0180
**Card ID:** a2-denn
**Field:** entry[334].study.comparison[2].example
**CURRENT:** Dann gehen wir. = Tad mēs ejam.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0181
**Card ID:** a2-denn
**Field:** entry[334].study.comparison[3].example
**CURRENT:** Deshalb bleibe ich. = Tāpēc es palieku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0182
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[0].example
**CURRENT:** Das Buch ist dick. = Grāmata ir bieza.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0183
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[1].example
**CURRENT:** Das Essen ist fett. = Ēdiens ir trekns.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0184
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[2].example
**CURRENT:** Das Papier ist dünn. = Papīrs ir plāns.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0185
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[4].example
**CURRENT:** Er ist stark. = Viņš ir stiprs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0186
**Card ID:** a2-doch
**Field:** entry[346].study.comparison[0].example
**CURRENT:** Komm doch! = Nāc taču!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0187
**Card ID:** a2-doch
**Field:** entry[346].study.comparison[1].example
**CURRENT:** Ich will, aber ich kann nicht. = Es gribu, bet nevaru.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0188
**Card ID:** a2-doch
**Field:** entry[346].study.comparison[2].example
**CURRENT:** Es regnet, trotzdem gehe ich. = Līst, tomēr es eju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0189
**Card ID:** a2-doch
**Field:** entry[346].study.comparison[4].example
**CURRENT:** Kommst du? Nein. = Vai tu nāksi? Nē.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0190
**Card ID:** a2-doktor
**Field:** entry[347].study.comparison[0].example
**CURRENT:** Ich gehe zum Doktor. = Es eju pie ārsta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0191
**Card ID:** a2-doktor
**Field:** entry[347].study.comparison[1].example
**CURRENT:** Der Arzt hilft mir. = Ārsts man palīdz.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0192
**Card ID:** a2-doktor
**Field:** entry[347].study.comparison[2].example
**CURRENT:** Die Ärztin arbeitet hier. = Ārste strādā šeit.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0193
**Card ID:** a2-doktor
**Field:** entry[347].study.comparison[4].example
**CURRENT:** Die Praxis ist offen. = Ārsta prakse ir atvērta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0194
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[0].example
**CURRENT:** Das Papier ist dünn. = Papīrs ir plāns.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0195
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[1].example
**CURRENT:** Das Buch ist dick. = Grāmata ir bieza.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0196
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[3].example
**CURRENT:** Das Fleisch ist mager. = Gaļa ir liesa.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0197
**Card ID:** a2-dünn
**Field:** entry[364].study.comparison[4].example
**CURRENT:** Honig ist flüssig. = Medus ir šķidrs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0198
**Card ID:** a2-eben
**Field:** entry[369].study.comparison[0].example
**CURRENT:** Das ist eben so. = Tā tas vienkārši ir.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0199
**Card ID:** a2-eben
**Field:** entry[369].study.comparison[1].example
**CURRENT:** Ich bin gerade zu Hause. = Es tieši tagad esmu mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0200
**Card ID:** a2-eben
**Field:** entry[369].study.comparison[2].example
**CURRENT:** Ich habe ihn gerade eben gesehen. = Es viņu tikko redzēju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0201
**Card ID:** a2-ehrlich
**Field:** entry[377].study.comparison[0].example
**CURRENT:** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0202
**Card ID:** a2-ehrlich
**Field:** entry[377].study.comparison[2].example
**CURRENT:** Sie ist nett. = Viņa ir jauka.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0203
**Card ID:** a2-ehrlich
**Field:** entry[377].study.comparison[3].example
**CURRENT:** Er ist ein guter Mensch. = Viņš ir labs cilvēks.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0204
**Card ID:** a2-eigentlich
**Field:** entry[378].study.comparison[0].example
**CURRENT:** Eigentlich habe ich keine Zeit. = Patiesībā man nav laika.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0205
**Card ID:** a2-eigentlich
**Field:** entry[378].study.comparison[1].example
**CURRENT:** Das ist echt. = Tas ir īsts.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0206
**Card ID:** a2-eigentlich
**Field:** entry[378].study.comparison[3].example
**CURRENT:** Das ist wirklich gut. = Tas tiešām ir labi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0207
**Card ID:** a2-einladen
**Field:** entry[387].study.comparison[1].example
**CURRENT:** Ich lade das Handy. = Es lādēju telefonu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0208
**Card ID:** a2-einladen
**Field:** entry[387].study.comparison[3].example
**CURRENT:** Bring bitte Brot mit. = Paņem līdzi maizi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0209
**Card ID:** a2-einschalten
**Field:** entry[391].study.comparison[0].example
**CURRENT:** Ich schalte das Licht ein. = Es ieslēdzu gaismu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0210
**Card ID:** a2-einschalten
**Field:** entry[391].study.comparison[1].example
**CURRENT:** Schalte den Computer aus. = Izslēdz datoru.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0211
**Card ID:** a2-einschalten
**Field:** entry[391].study.comparison[2].example
**CURRENT:** Mach das Licht an. = Ieslēdz gaismu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0212
**Card ID:** a2-einschalten
**Field:** entry[391].study.comparison[3].example
**CURRENT:** Wir beziehen ihn ein. = Mēs viņu iesaistām.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0213
**Card ID:** a2-einschlafen
**Field:** entry[393].study.comparison[1].example
**CURRENT:** Ich schlafe acht Stunden. = Es guļu astoņas stundas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0214
**Card ID:** a2-einschlafen
**Field:** entry[393].study.comparison[3].example
**CURRENT:** Mein Bein wird taub. = Mana kāja kļūst nejutīga.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0215
**Card ID:** a2-einsteigen
**Field:** entry[394].study.comparison[0].example
**CURRENT:** Ich steige in den Zug ein. = Es iekāpju vilcienā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0216
**Card ID:** a2-einsteigen
**Field:** entry[394].study.comparison[1].example
**CURRENT:** Ich steige hier aus. = Es šeit izkāpju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0217
**Card ID:** a2-einsteigen
**Field:** entry[394].study.comparison[2].example
**CURRENT:** Wir steigen um. = Mēs pārsēžamies.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0218
**Card ID:** a2-eintritt
**Field:** entry[395].study.comparison[2].example
**CURRENT:** Ich habe eine Eintrittskarte. = Man ir ieejas biļete.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0219
**Card ID:** a2-eintritt
**Field:** entry[395].study.comparison[3].example
**CURRENT:** Ich trete dem Verein bei. = Es iestājos biedrībā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0220
**Card ID:** a2-erinnern
**Field:** entry[420].study.comparison[0].example
**CURRENT:** Erinnere mich bitte daran. = Lūdzu, atgādini man to.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0221
**Card ID:** a2-erinnern
**Field:** entry[420].study.comparison[3].example
**CURRENT:** Denk an den Schlüssel. = Atceries par atslēgu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0222
**Card ID:** a2-etwa
**Field:** entry[439].study.comparison[0].example
**CURRENT:** Das dauert etwa 20 Minuten. = Tas ilgst apmēram 20 minūtes.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0223
**Card ID:** a2-etwa
**Field:** entry[439].study.comparison[1].example
**CURRENT:** Das dauert ungefähr 20 Minuten. = Tas ilgst aptuveni 20 minūtes.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0224
**Card ID:** a2-etwa
**Field:** entry[439].study.comparison[3].example
**CURRENT:** Vielleicht kommt er. = Varbūt viņš atnāks.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0225
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[0].example
**CURRENT:** Das Fach ist leer. = Nodalījums ir tukšs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0226
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[1].example
**CURRENT:** Biologie ist ein Schulfach. = Bioloģija ir mācību priekšmets.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0227
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[2].example
**CURRENT:** Das Schrankfach ist klein. = Skapja nodalījums ir mazs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0228
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[3].example
**CURRENT:** Das ist mein Fachgebiet. = Tā ir mana specialitāte.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0229
**Card ID:** a2-fach
**Field:** entry[444].study.comparison[4].example
**CURRENT:** Mein Beruf ist Lehrer. = Mana profesija ir skolotājs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0230
**Card ID:** a2-fall
**Field:** entry[455].study.comparison[0].example
**CURRENT:** In diesem Fall komme ich. = Šajā gadījumā es nākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0231
**Card ID:** a2-fall
**Field:** entry[455].study.comparison[1].example
**CURRENT:** Der Unfall war schlimm. = Negadījums bija smags.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0232
**Card ID:** a2-fall
**Field:** entry[455].study.comparison[2].example
**CURRENT:** Die Situation ist schwierig. = Situācija ir grūta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0233
**Card ID:** a2-fall
**Field:** entry[455].study.comparison[3].example
**CURRENT:** Der Kasus ist wichtig. = Locījums ir svarīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0234
**Card ID:** a2-fehlen
**Field:** entry[467].study.comparison[0].example
**CURRENT:** Mir fehlt Geld. = Man trūkst naudas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0235
**Card ID:** a2-fehlen
**Field:** entry[467].study.comparison[2].example
**CURRENT:** Ich vermisse dich. = Man tevis pietrūkst.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0236
**Card ID:** a2-fehlen
**Field:** entry[467].study.comparison[3].example
**CURRENT:** Er ist abwesend. = Viņš nav klāt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0237
**Card ID:** a2-feuer
**Field:** entry[484].study.comparison[1].example
**CURRENT:** Der Brand ist groß. = Ugunsgrēks ir liels.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0238
**Card ID:** a2-feuer
**Field:** entry[484].study.comparison[3].example
**CURRENT:** Die Feuerwehr kommt. = Ugunsdzēsēji brauc.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0239
**Card ID:** a2-feuer
**Field:** entry[484].study.comparison[4].example
**CURRENT:** Die Soldaten geben Feuer. = Kareivji atklāj uguni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0240
**Card ID:** a2-folgen
**Field:** entry[508].study.comparison[1].example
**CURRENT:** Die Polizei verfolgt den Täter. = Policija vajā vainīgo.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0241
**Card ID:** a2-folgen
**Field:** entry[508].study.comparison[2].example
**CURRENT:** Das Kind gehorcht. = Bērns klausa.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0242
**Card ID:** a2-folgen
**Field:** entry[508].study.comparison[3].example
**CURRENT:** Befolgen Sie die Regeln. = Ievērojiet noteikumus.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0243
**Card ID:** a2-führen
**Field:** entry[539].study.comparison[0].example
**CURRENT:** Der Weg führt zum Bahnhof. = Ceļš ved uz staciju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0244
**Card ID:** a2-führen
**Field:** entry[539].study.comparison[1].example
**CURRENT:** Sie leitet die Firma. = Viņa vada firmu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0245
**Card ID:** a2-führen
**Field:** entry[539].study.comparison[2].example
**CURRENT:** Ich fahre nach Hause. = Es braucu mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0246
**Card ID:** a2-führen
**Field:** entry[539].study.comparison[3].example
**CURRENT:** Ich bringe dich nach Hause. = Es aizvedīšu tevi mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0247
**Card ID:** a2-führen
**Field:** entry[539].study.comparison[4].example
**CURRENT:** Das führt zu Problemen. = Tas noved pie problēmām.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0248
**Card ID:** a2-gehören
**Field:** entry[572].study.comparison[1].example
**CURRENT:** Er besitzt ein Auto. = Viņam pieder auto.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0249
**Card ID:** a2-genau
**Field:** entry[576].study.comparison[1].example
**CURRENT:** Das ist exakt ein Meter. = Tas ir precīzi viens metrs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0250
**Card ID:** a2-genau
**Field:** entry[576].study.comparison[2].example
**CURRENT:** Ich bin gerade zu Hause. = Es tieši tagad esmu mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0251
**Card ID:** a2-genau
**Field:** entry[576].study.comparison[3].example
**CURRENT:** Er war eben hier. = Viņš tikko bija šeit.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0252
**Card ID:** a2-gerade
**Field:** entry[580].study.comparison[0].example
**CURRENT:** Ich komme gerade. = Es tieši tagad nāku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0253
**Card ID:** a2-geschäft
**Field:** entry[582].study.comparison[3].example
**CURRENT:** Das Unternehmen wächst. = Uzņēmums aug.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0254
**Card ID:** a2-geschäft
**Field:** entry[582].study.comparison[4].example
**CURRENT:** Wir schließen einen Vertrag. = Mēs slēdzam līgumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0255
**Card ID:** a2-gewinnen
**Field:** entry[592].study.comparison[0].example
**CURRENT:** Wir gewinnen das Spiel. = Mēs uzvaram spēlē.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0256
**Card ID:** a2-gewinnen
**Field:** entry[592].study.comparison[2].example
**CURRENT:** Ich bekomme eine Nachricht. = Es saņemu ziņu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0257
**Card ID:** a2-gewinnen
**Field:** entry[592].study.comparison[3].example
**CURRENT:** Er verdient Geld. = Viņš pelna naudu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0258
**Card ID:** a2-gießen
**Field:** entry[595].study.comparison[0].example
**CURRENT:** Ich gieße die Blumen. = Es laistu puķes.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0259
**Card ID:** a2-gießen
**Field:** entry[595].study.comparison[1].example
**CURRENT:** Ich schenke Tee ein. = Es ieleju tēju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0260
**Card ID:** a2-gießen
**Field:** entry[595].study.comparison[2].example
**CURRENT:** Es regnet. = Līst.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0261
**Card ID:** a2-gießen
**Field:** entry[595].study.comparison[3].example
**CURRENT:** Er schüttet Wasser aus. = Viņš izlej ūdeni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0262
**Card ID:** a2-grund
**Field:** entry[607].study.comparison[0].example
**CURRENT:** Aus diesem Grund komme ich nicht. = Šī iemesla dēļ es nenākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0263
**Card ID:** a2-grund
**Field:** entry[607].study.comparison[1].example
**CURRENT:** Die Ursache ist unbekannt. = Cēlonis nav zināms.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0264
**Card ID:** a2-grund
**Field:** entry[607].study.comparison[2].example
**CURRENT:** Der Anlass war ein Fest. = Iemesls bija svētki.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0265
**Card ID:** a2-grund
**Field:** entry[607].study.comparison[3].example
**CURRENT:** Der Boden ist nass. = Grīda ir slapja.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0266
**Card ID:** a2-hängen
**Field:** entry[632].study.comparison[0].example
**CURRENT:** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0267
**Card ID:** a2-hängen
**Field:** entry[632].study.comparison[2].example
**CURRENT:** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0268
**Card ID:** a2-hängen
**Field:** entry[632].study.comparison[3].example
**CURRENT:** Wir hängen das Bild an die Wand. = Mēs piekaram attēlu pie sienas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0269
**Card ID:** a2-indem
**Field:** entry[703].study.comparison[0].example
**CURRENT:** Ich lerne, indem ich übe. = Es mācos, trenējoties.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0270
**Card ID:** a2-indem
**Field:** entry[703].study.comparison[1].example
**CURRENT:** Während ich koche, höre ich Musik. = Kamēr es gatavoju, klausos mūziku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0271
**Card ID:** a2-indem
**Field:** entry[703].study.comparison[2].example
**CURRENT:** Ich lerne, damit ich die Prüfung bestehe. = Es mācos, lai nokārtotu eksāmenu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0272
**Card ID:** a2-indem
**Field:** entry[703].study.comparison[3].example
**CURRENT:** Ich lerne, weil ich Deutsch brauche. = Es mācos, jo man vajag vācu valodu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0273
**Card ID:** a2-kaum
**Field:** entry[783].study.comparison[0].example
**CURRENT:** Ich habe kaum Zeit. = Man gandrīz nav laika.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0274
**Card ID:** a2-kaum
**Field:** entry[783].study.comparison[1].example
**CURRENT:** Ich bin fast fertig. = Es gandrīz esmu gatavs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0275
**Card ID:** a2-kaum
**Field:** entry[783].study.comparison[3].example
**CURRENT:** Sobald ich Zeit habe, rufe ich dich an. = Tiklīdz man būs laiks, es tev piezvanīšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0276
**Card ID:** a2-kleiden
**Field:** entry[810].study.comparison[0].example
**CURRENT:** Sie kleidet das Kind. = Viņa apģērbj bērnu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0277
**Card ID:** a2-kleiden
**Field:** entry[810].study.comparison[1].example
**CURRENT:** Er kleidet sich elegant. = Viņš ģērbjas eleganti.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0278
**Card ID:** a2-kleiden
**Field:** entry[810].study.comparison[2].example
**CURRENT:** Die Farbe kleidet dich. = Krāsa tev piestāv.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0279
**Card ID:** a2-kleiden
**Field:** entry[810].study.comparison[4].example
**CURRENT:** Sie trägt ein Kleid. = Viņa valkā kleitu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0280
**Card ID:** a2-kurz
**Field:** entry[855].study.comparison[0].example
**CURRENT:** Der Text ist kurz. = Teksts ir īss.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0281
**Card ID:** a2-kurz
**Field:** entry[855].study.comparison[1].example
**CURRENT:** kurz vor acht = īsi pirms astoņiem
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0282
**Card ID:** a2-kurz
**Field:** entry[855].study.comparison[2].example
**CURRENT:** kurz nach dem Essen = īsi pēc ēšanas
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0283
**Card ID:** a2-kurz
**Field:** entry[855].study.comparison[3].example
**CURRENT:** Ich komme bald. = Es drīz nākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0284
**Card ID:** a2-kurz
**Field:** entry[855].study.comparison[4].example
**CURRENT:** Der Weg ist lang. = Ceļš ir garš.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0285
**Card ID:** a2-lage
**Field:** entry[857].study.comparison[0].example
**CURRENT:** Die Lage ist schwierig. = Situācija ir sarežģīta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0286
**Card ID:** a2-lage
**Field:** entry[857].study.comparison[1].example
**CURRENT:** Die Situation ist ernst. = Situācija ir nopietna.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0287
**Card ID:** a2-lage
**Field:** entry[857].study.comparison[2].example
**CURRENT:** Der Standort ist gut. = Atrašanās vieta ir laba.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0288
**Card ID:** a2-lage
**Field:** entry[857].study.comparison[3].example
**CURRENT:** eine Schicht Farbe = viena krāsas kārta
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0289
**Card ID:** a2-leiden
**Field:** entry[877].study.comparison[0].example
**CURRENT:** Er leidet an Kopfschmerzen. = Viņš cieš no galvassāpēm.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0290
**Card ID:** a2-leiden
**Field:** entry[877].study.comparison[1].example
**CURRENT:** Sie leidet an Asthma. = Viņa slimo ar astmu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0291
**Card ID:** a2-leiden
**Field:** entry[877].study.comparison[2].example
**CURRENT:** Wir leiden unter der Hitze. = Mēs ciešam no karstuma.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0292
**Card ID:** a2-leiden
**Field:** entry[877].study.comparison[4].example
**CURRENT:** Er ist krank. = Viņš ir slims.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0293
**Card ID:** a2-leihen
**Field:** entry[878].study.comparison[1].example
**CURRENT:** Ich borge mir Geld. = Es aizņemos naudu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0294
**Card ID:** a2-leihen
**Field:** entry[878].study.comparison[2].example
**CURRENT:** Wir mieten ein Auto. = Mēs īrējam mašīnu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0295
**Card ID:** a2-leihen
**Field:** entry[878].study.comparison[3].example
**CURRENT:** Ich kaufe das Buch. = Es pērku grāmatu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0296
**Card ID:** a2-leiter
**Field:** entry[880].study.comparison[0].example
**CURRENT:** Der Leiter der Firma. = Uzņēmuma vadītājs. Plural: die Leiter.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0297
**Card ID:** a2-leiter
**Field:** entry[880].study.comparison[1].example
**CURRENT:** Ich steige auf die Leiter. = Es kāpju uz kāpnēm. Plural: die Leitern.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0298
**Card ID:** a2-leitung
**Field:** entry[881].study.comparison[0].example
**CURRENT:** Die Leitung ist kaputt. = Līnija ir bojāta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0299
**Card ID:** a2-leitung
**Field:** entry[881].study.comparison[1].example
**CURRENT:** Unter ihrer Führung läuft alles gut. = Viņas vadībā viss norit labi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0300
**Card ID:** a2-leitung
**Field:** entry[881].study.comparison[2].example
**CURRENT:** Das Kabel ist zu kurz. = Kabelis ir par īsu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0301
**Card ID:** a2-leitung
**Field:** entry[881].study.comparison[3].example
**CURRENT:** Die Telefonleitung ist frei. = Telefona līnija ir brīva.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0302
**Card ID:** a2-leitung
**Field:** entry[881].study.comparison[4].example
**CURRENT:** Die Wasserleitung tropft. = Ūdens caurule pil.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0303
**Card ID:** a2-merken
**Field:** entry[936].study.comparison[0].example
**CURRENT:** Ich merke den Fehler. = Es pamanu kļūdu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0304
**Card ID:** a2-merken
**Field:** entry[936].study.comparison[1].example
**CURRENT:** Merk dir das! = Iegaumē to!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0305
**Card ID:** a2-merken
**Field:** entry[936].study.comparison[2].example
**CURRENT:** Ich bemerke den Fehler. = Es pamanu kļūdu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0306
**Card ID:** a2-merken
**Field:** entry[936].study.comparison[4].example
**CURRENT:** Ich behalte die Nummer. = Es paturu numuru prātā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0307
**Card ID:** a2-mittel
**Field:** entry[951].study.comparison[0].example
**CURRENT:** ein Mittel gegen Husten = līdzeklis pret klepu
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0308
**Card ID:** a2-mittel
**Field:** entry[951].study.comparison[1].example
**CURRENT:** Das Medikament hilft. = Medikaments palīdz.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0309
**Card ID:** a2-mittel
**Field:** entry[951].study.comparison[2].example
**CURRENT:** Diese Methode ist einfach. = Šī metode ir vienkārša.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0310
**Card ID:** a2-mittel
**Field:** entry[951].study.comparison[4].example
**CURRENT:** finanzielle Mittel = finanšu līdzekļi
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0311
**Card ID:** a2-note
**Field:** entry[1019].study.comparison[0].example
**CURRENT:** Ich bekomme eine Note. = Es saņemu atzīmi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0312
**Card ID:** a2-note
**Field:** entry[1019].study.comparison[1].example
**CURRENT:** Die Schulnote ist gut. = Skolas atzīme ir laba.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0313
**Card ID:** a2-note
**Field:** entry[1019].study.comparison[2].example
**CURRENT:** Die Musiknote ist hoch. = Mūzikas nots ir augsta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0314
**Card ID:** a2-nutzen
**Field:** entry[1029].study.comparison[2].example
**CURRENT:** Wir verwenden dieses Wort. = Mēs izmantojam šo vārdu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0315
**Card ID:** a2-nutzen
**Field:** entry[1029].study.comparison[3].example
**CURRENT:** Nutze die Chance! = Izmanto iespēju!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0316
**Card ID:** a2-offen
**Field:** entry[1037].study.comparison[0].example
**CURRENT:** Die Tür ist offen. = Durvis ir vaļā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0317
**Card ID:** a2-offen
**Field:** entry[1037].study.comparison[1].example
**CURRENT:** Das Museum ist geöffnet. = Muzejs ir atvērts.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0318
**Card ID:** a2-offen
**Field:** entry[1037].study.comparison[2].example
**CURRENT:** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0319
**Card ID:** a2-offen
**Field:** entry[1037].study.comparison[3].example
**CURRENT:** Der Platz ist frei. = Vieta ir brīva.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0320
**Card ID:** a2-patient
**Field:** entry[1064].study.comparison[1].example
**CURRENT:** Die Patientin ruht sich aus. = Paciente atpūšas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0321
**Card ID:** a2-patient
**Field:** entry[1064].study.comparison[2].example
**CURRENT:** Der Kranke liegt im Bett. = Slimnieks guļ gultā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0322
**Card ID:** a2-personal
**Field:** entry[1068].study.comparison[0].example
**CURRENT:** Das Personal hilft. = Personāls palīdz.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0323
**Card ID:** a2-personal
**Field:** entry[1068].study.comparison[1].example
**CURRENT:** Der Mitarbeiter arbeitet hier. = Darbinieks šeit strādā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0324
**Card ID:** a2-personal
**Field:** entry[1068].study.comparison[2].example
**CURRENT:** Das ist persönlich. = Tas ir personīgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0325
**Card ID:** a2-riechen
**Field:** entry[1165].study.comparison[2].example
**CURRENT:** Es riecht nach Kaffee. = Smaržo pēc kafijas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0326
**Card ID:** a2-rolle
**Field:** entry[1172].study.comparison[0].example
**CURRENT:** Sie spielt eine Rolle. = Viņa spēlē lomu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0327
**Card ID:** a2-rolle
**Field:** entry[1172].study.comparison[1].example
**CURRENT:** Er hat die Hauptrolle. = Viņam ir galvenā loma.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0328
**Card ID:** a2-rolle
**Field:** entry[1172].study.comparison[2].example
**CURRENT:** Ich kaufe eine Papierrolle. = Es pērku papīra rulli.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0329
**Card ID:** a2-rolle
**Field:** entry[1172].study.comparison[3].example
**CURRENT:** Das hat keine Bedeutung. = Tam nav nozīmes.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0330
**Card ID:** a2-rolle
**Field:** entry[1172].study.comparison[4].example
**CURRENT:** Das ist ein Teil der Arbeit. = Tā ir daļa no darba.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0331
**Card ID:** a2-sammeln
**Field:** entry[1190].study.comparison[0].example
**CURRENT:** Briefmarken sammeln = krāt pastmarkas
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0332
**Card ID:** a2-sammeln
**Field:** entry[1190].study.comparison[1].example
**CURRENT:** Die Schüler sammeln sich. = Skolēni sapulcējas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0333
**Card ID:** a2-sammeln
**Field:** entry[1190].study.comparison[2].example
**CURRENT:** Ich hole Wasser. = Es atnesu ūdeni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0334
**Card ID:** a2-sammeln
**Field:** entry[1190].study.comparison[3].example
**CURRENT:** Ich hebe den Zettel auf. = Es paceļu zīmīti.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0335
**Card ID:** a2-satz
**Field:** entry[1194].study.comparison[0].example
**CURRENT:** Der Satz ist kurz. = Teikums ir īss.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0336
**Card ID:** a2-satz
**Field:** entry[1194].study.comparison[1].example
**CURRENT:** Der deutsche Satz ist richtig. = Vācu teikums ir pareizs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0337
**Card ID:** a2-satz
**Field:** entry[1194].study.comparison[2].example
**CURRENT:** Ein Satz Reifen ist teuer. = Riepu komplekts ir dārgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0338
**Card ID:** a2-satz
**Field:** entry[1194].study.comparison[4].example
**CURRENT:** Der Kaffeesatz bleibt im Glas. = Kafijas biezumi paliek glāzē.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0339
**Card ID:** a2-scheinen
**Field:** entry[1217].study.comparison[0].example
**CURRENT:** Die Sonne scheint. = Saule spīd.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0340
**Card ID:** a2-scheinen
**Field:** entry[1217].study.comparison[2].example
**CURRENT:** Er wirkt ruhig. = Viņš šķiet mierīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0341
**Card ID:** a2-scheinen
**Field:** entry[1217].study.comparison[3].example
**CURRENT:** Die Lampe leuchtet. = Lampa spīd.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0342
**Card ID:** a2-schlange
**Field:** entry[1229].study.comparison[1].example
**CURRENT:** Die Warteschlange ist lang. = Gaidīšanas rinda ir gara.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0343
**Card ID:** a2-schlange
**Field:** entry[1229].study.comparison[2].example
**CURRENT:** Die Stühle stehen in einer Reihe. = Krēsli stāv rindā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0344
**Card ID:** a2-schlange
**Field:** entry[1229].study.comparison[3].example
**CURRENT:** Eine Schlange ist ein Reptil. = Čūska ir rāpulis.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0345
**Card ID:** a2-schließen
**Field:** entry[1230].study.comparison[1].example
**CURRENT:** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0346
**Card ID:** a2-schließen
**Field:** entry[1230].study.comparison[3].example
**CURRENT:** Daraus folgere ich etwas. = No tā es kaut ko secinu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0347
**Card ID:** a2-schloss
**Field:** entry[1236].study.comparison[1].example
**CURRENT:** Die Burg steht auf dem Berg. = Pils stāv kalnā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0348
**Card ID:** a2-schloss
**Field:** entry[1236].study.comparison[2].example
**CURRENT:** Das Türschloss ist kaputt. = Durvju slēdzene ir salūzusi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0349
**Card ID:** a2-schloss
**Field:** entry[1236].study.comparison[3].example
**CURRENT:** Ich kaufe ein Fahrradschloss. = Es pērku velosipēda slēdzeni.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0350
**Card ID:** a2-schloss
**Field:** entry[1236].study.comparison[4].example
**CURRENT:** Der Schlüssel ist weg. = Atslēga ir pazudusi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0351
**Card ID:** a2-schuld
**Field:** entry[1256].study.comparison[0].example
**CURRENT:** Das ist meine Schuld. = Tā ir mana vaina.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0352
**Card ID:** a2-schuld
**Field:** entry[1256].study.comparison[1].example
**CURRENT:** Er hat Schulden. = Viņam ir parādi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0353
**Card ID:** a2-schuld
**Field:** entry[1256].study.comparison[2].example
**CURRENT:** Ich trage Verantwortung. = Es nesu atbildību.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0354
**Card ID:** a2-schuld
**Field:** entry[1256].study.comparison[3].example
**CURRENT:** Das war ein Fehler. = Tā bija kļūda.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0355
**Card ID:** a2-schuld
**Field:** entry[1256].study.comparison[4].example
**CURRENT:** Ich bin schuld. = Es esmu vainīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0356
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[0].example
**CURRENT:** Das Büro befindet sich im zweiten Stock. = Birojs atrodas otrajā stāvā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0357
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[1].example
**CURRENT:** Das Büro ist oben. = Birojs ir augšā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0358
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[2].example
**CURRENT:** Das Buch liegt auf dem Tisch. = Grāmata atrodas uz galda.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0359
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[3].example
**CURRENT:** Das Auto steht vor dem Haus. = Auto stāv pie mājas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0360
**Card ID:** a2-sich-befinden
**Field:** entry[1291].study.comparison[4].example
**CURRENT:** Ich fühle mich gut. = Es jūtos labi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0361
**Card ID:** a2-sich-unterhalten
**Field:** entry[1305].study.comparison[0].example
**CURRENT:** Wir unterhalten uns. = Mēs sarunājamies.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0362
**Card ID:** a2-sich-unterhalten
**Field:** entry[1305].study.comparison[1].example
**CURRENT:** Ich spreche Deutsch. = Es runāju vāciski.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0363
**Card ID:** a2-sich-unterhalten
**Field:** entry[1305].study.comparison[2].example
**CURRENT:** Wir reden viel. = Mēs daudz runājam.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0364
**Card ID:** a2-sich-unterhalten
**Field:** entry[1305].study.comparison[3].example
**CURRENT:** Wir amüsieren uns. = Mēs izklaidējamies.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0365
**Card ID:** a2-sobald
**Field:** entry[1325].study.comparison[0].example
**CURRENT:** Sobald er kommt, gehen wir. = Tiklīdz viņš atnāks, mēs iesim.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0366
**Card ID:** a2-sobald
**Field:** entry[1325].study.comparison[1].example
**CURRENT:** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0367
**Card ID:** a2-sobald
**Field:** entry[1325].study.comparison[2].example
**CURRENT:** Als ich Kind war, spielte ich viel. = Kad biju bērns, daudz spēlējos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0368
**Card ID:** a2-sobald
**Field:** entry[1325].study.comparison[3].example
**CURRENT:** Ich warte, bis du kommst. = Es gaidu, līdz tu atnāksi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0369
**Card ID:** a2-sobald
**Field:** entry[1325].study.comparison[4].example
**CURRENT:** Nachdem ich gegessen habe, gehe ich. = Pēc tam kad paēdu, es eju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0370
**Card ID:** a2-sonst
**Field:** entry[1336].study.comparison[0].example
**CURRENT:** Komm jetzt, sonst ist es zu spät. = Nāc tagad, citādi būs par vēlu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0371
**Card ID:** a2-sonst
**Field:** entry[1336].study.comparison[1].example
**CURRENT:** Ansonsten ist alles gut. = Citādi viss ir labi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0372
**Card ID:** a2-sonst
**Field:** entry[1336].study.comparison[2].example
**CURRENT:** Andernfalls rufe ich an. = Pretējā gadījumā es zvanīšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0373
**Card ID:** a2-sonst
**Field:** entry[1336].study.comparison[3].example
**CURRENT:** Normalerweise bin ich zu Hause. = Parasti es esmu mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0374
**Card ID:** a2-sonst
**Field:** entry[1336].study.comparison[4].example
**CURRENT:** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0375
**Card ID:** a2-steigen
**Field:** entry[1378].study.comparison[0].example
**CURRENT:** Die Preise steigen. = Cenas ceļas.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0376
**Card ID:** a2-steigen
**Field:** entry[1378].study.comparison[1].example
**CURRENT:** Ich steige in den Bus ein. = Es iekāpju autobusā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0377
**Card ID:** a2-steigen
**Field:** entry[1378].study.comparison[2].example
**CURRENT:** Ich steige aus. = Es izkāpju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0378
**Card ID:** a2-steigen
**Field:** entry[1378].study.comparison[3].example
**CURRENT:** Ich stehe um sieben auf. = Es pieceļos septiņos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0379
**Card ID:** a2-steigen
**Field:** entry[1378].study.comparison[4].example
**CURRENT:** Das Kind klettert auf den Baum. = Bērns rāpjas kokā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0380
**Card ID:** a2-stelle
**Field:** entry[1380].study.comparison[0].example
**CURRENT:** Ich suche eine Stelle. = Es meklēju darba vietu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0381
**Card ID:** a2-stelle
**Field:** entry[1380].study.comparison[3].example
**CURRENT:** Diese Textstelle ist wichtig. = Šis teksta fragments ir svarīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0382
**Card ID:** a2-stelle
**Field:** entry[1380].study.comparison[4].example
**CURRENT:** Die Wunde tut weh. = Brūce sāp.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0383
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[0].example
**CURRENT:** Das stimmt. = Tā ir / tas ir pareizi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0384
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[1].example
**CURRENT:** Ich stimme dir zu. = Es tev piekrītu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0385
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[2].example
**CURRENT:** Wir stimmen darüber ab. = Mēs par to balsojam.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0386
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[3].example
**CURRENT:** Wir wählen den Präsidenten. = Mēs vēlējam prezidentu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0387
**Card ID:** a2-stimmen
**Field:** entry[1388].study.comparison[4].example
**CURRENT:** Die Farbe passt. = Krāsa piestāv.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0388
**Card ID:** a2-stoff
**Field:** entry[1392].study.comparison[0].example
**CURRENT:** Der Stoff ist weich. = Audums ir mīksts.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0389
**Card ID:** a2-stoff
**Field:** entry[1392].study.comparison[1].example
**CURRENT:** Das Material ist stabil. = Materiāls ir izturīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0390
**Card ID:** a2-stoff
**Field:** entry[1392].study.comparison[2].example
**CURRENT:** Die Substanz ist gefährlich. = Viela ir bīstama.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0391
**Card ID:** a2-stoff
**Field:** entry[1392].study.comparison[3].example
**CURRENT:** Der Unterrichtsstoff ist schwer. = Mācību viela ir grūta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0392
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[0].example
**CURRENT:** Der Lehrer schreibt an die Tafel. = Skolotājs raksta uz tāfeles.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0393
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[1].example
**CURRENT:** Die Tabelle steht im Buch. = Tabula ir grāmatā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0394
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[2].example
**CURRENT:** Die Speisekarte liegt auf dem Tisch. = Ēdienkarte ir uz galda.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0395
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[3].example
**CURRENT:** Das Schild ist rot. = Zīme ir sarkana.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0396
**Card ID:** a2-tafel
**Field:** entry[1416].study.comparison[4].example
**CURRENT:** Eine Tafel Schokolade = šokolādes tāfelīte.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0397
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[0].example
**CURRENT:** Ein Teil fehlt. = Trūkst viena daļa.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0398
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[1].example
**CURRENT:** Der erste Teil ist leicht. = Pirmā daļa ir viegla.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0399
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[2].example
**CURRENT:** Das Ersatzteil ist teuer. = Rezerves detaļa ir dārga.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0400
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[3].example
**CURRENT:** Ich nehme ein Stück Kuchen. = Es ņemu kūkas gabalu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0401
**Card ID:** a2-teil
**Field:** entry[1431].study.comparison[4].example
**CURRENT:** Das ist eine gute Sache. = Tā ir laba lieta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0402
**Card ID:** a2-termin
**Field:** entry[1438].study.comparison[0].example
**CURRENT:** Ich habe einen Termin. = Man ir pieraksts / norunāts laiks.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0403
**Card ID:** a2-termin
**Field:** entry[1438].study.comparison[1].example
**CURRENT:** Das Treffen war nett. = Tikšanās bija jauka.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0404
**Card ID:** a2-termin
**Field:** entry[1438].study.comparison[2].example
**CURRENT:** Die Frist endet morgen. = Termiņš beidzas rīt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0405
**Card ID:** a2-termin
**Field:** entry[1438].study.comparison[3].example
**CURRENT:** Ich habe eine Verabredung. = Man ir sarunāta tikšanās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0406
**Card ID:** a2-termin
**Field:** entry[1438].study.comparison[4].example
**CURRENT:** Der Zeitpunkt ist wichtig. = Laika punkts ir svarīgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0407
**Card ID:** a2-tief
**Field:** entry[1443].study.comparison[0].example
**CURRENT:** Der See ist tief. = Ezers ir dziļš.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0408
**Card ID:** a2-tief
**Field:** entry[1443].study.comparison[3].example
**CURRENT:** Das Wasser ist flach. = Ūdens ir sekls.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0409
**Card ID:** a2-tragen
**Field:** entry[1458].study.comparison[2].example
**CURRENT:** Ich bringe dir das Buch. = Es tev atnesu grāmatu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0410
**Card ID:** a2-tragen
**Field:** entry[1458].study.comparison[3].example
**CURRENT:** Ich halte das Kind. = Es turu bērnu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0411
**Card ID:** a2-treffen
**Field:** entry[1469].study.comparison[0].example
**CURRENT:** Eine Entscheidung treffen = pieņemt lēmumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0412
**Card ID:** a2-treffen
**Field:** entry[1469].study.comparison[1].example
**CURRENT:** Wir treffen uns. = Mēs tiekamies.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0413
**Card ID:** a2-treffen
**Field:** entry[1469].study.comparison[2].example
**CURRENT:** Ich lerne ihn kennen. = Es ar viņu iepazīstos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0414
**Card ID:** a2-treffen
**Field:** entry[1469].study.comparison[3].example
**CURRENT:** Ich erreiche dich nicht. = Es nevaru tevi sazvanīt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0415
**Card ID:** a2-übrig
**Field:** entry[1488].study.comparison[1].example
**CURRENT:** Viel Essen bleibt übrig. = Daudz ēdiena paliek pāri.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0416
**Card ID:** a2-übrig
**Field:** entry[1488].study.comparison[2].example
**CURRENT:** Der Rest ist für morgen. = Atlikums ir rītdienai.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0417
**Card ID:** a2-übrig
**Field:** entry[1488].study.comparison[3].example
**CURRENT:** Die übrigen Gäste kommen später. = Pārējie viesi ieradīsies vēlāk.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0418
**Card ID:** a2-übrig
**Field:** entry[1488].study.comparison[4].example
**CURRENT:** Das ist unnötig. = Tas ir nevajadzīgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0419
**Card ID:** a2-übung
**Field:** entry[1489].study.comparison[0].example
**CURRENT:** Diese Übung ist leicht. = Šis vingrinājums ir viegls.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0420
**Card ID:** a2-übung
**Field:** entry[1489].study.comparison[2].example
**CURRENT:** Das Training beginnt um sechs. = Treniņš sākas sešos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0421
**Card ID:** a2-übung
**Field:** entry[1489].study.comparison[3].example
**CURRENT:** Die Aufgabe ist schwer. = Uzdevums ir grūts.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0422
**Card ID:** a2-übung
**Field:** entry[1489].study.comparison[4].example
**CURRENT:** In der Praxis ist es anders. = Praksē tas ir citādi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0423
**Card ID:** a2-umsonst
**Field:** entry[1492].study.comparison[0].example
**CURRENT:** Ich warte umsonst. = Es gaidu veltīgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0424
**Card ID:** a2-umsonst
**Field:** entry[1492].study.comparison[2].example
**CURRENT:** Das ist gratis. = Tas ir par brīvu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0425
**Card ID:** a2-umsonst
**Field:** entry[1492].study.comparison[3].example
**CURRENT:** Ich suche vergeblich. = Es meklēju veltīgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0426
**Card ID:** a2-verbinden
**Field:** entry[1511].study.comparison[1].example
**CURRENT:** Das verbindet sich mit Erinnerungen. = Tas saistās ar atmiņām.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0427
**Card ID:** a2-verbinden
**Field:** entry[1511].study.comparison[3].example
**CURRENT:** Ich schließe den Drucker an. = Es pieslēdzu printeri.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0428
**Card ID:** a2-verbinden
**Field:** entry[1511].study.comparison[4].example
**CURRENT:** Der Arzt verbindet die Wunde. = Ārsts pārsien brūci.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0429
**Card ID:** a2-verkehr
**Field:** entry[1517].study.comparison[0].example
**CURRENT:** Der Verkehr ist stark. = Satiksme ir intensīva.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0430
**Card ID:** a2-verkehr
**Field:** entry[1517].study.comparison[1].example
**CURRENT:** Der Straßenverkehr ist gefährlich. = Ceļu satiksme ir bīstama.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0431
**Card ID:** a2-verkehr
**Field:** entry[1517].study.comparison[2].example
**CURRENT:** Öffentlicher Verkehr ist praktisch. = Sabiedriskā satiksme ir praktiska.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0432
**Card ID:** a2-verkehr
**Field:** entry[1517].study.comparison[4].example
**CURRENT:** Bewegung ist gesund. = Kustība ir veselīga.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0433
**Card ID:** a2-viertel
**Field:** entry[1529].study.comparison[0].example
**CURRENT:** Ein Viertel ist genug. = Ceturtdaļa ir pietiekami.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0434
**Card ID:** a2-viertel
**Field:** entry[1529].study.comparison[2].example
**CURRENT:** Ein Drittel bleibt. = Trešdaļa paliek.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0435
**Card ID:** a2-viertel
**Field:** entry[1529].study.comparison[4].example
**CURRENT:** Das Quartier ist ruhig. = Kvartāls ir kluss.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0436
**Card ID:** a2-vorstellen
**Field:** entry[1544].study.comparison[0].example
**CURRENT:** Ich stelle dir meinen Freund vor. = Es tevi iepazīstinu ar draugu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0437
**Card ID:** a2-vorstellen
**Field:** entry[1544].study.comparison[1].example
**CURRENT:** Ich stelle mich vor. = Es stādos priekšā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0438
**Card ID:** a2-vorstellen
**Field:** entry[1544].study.comparison[2].example
**CURRENT:** Ich denke an dich. = Es domāju par tevi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0439
**Card ID:** a2-vorstellen
**Field:** entry[1544].study.comparison[3].example
**CURRENT:** Was meinst du? = Ko tu domā?
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0440
**Card ID:** a2-vorstellen
**Field:** entry[1544].study.comparison[4].example
**CURRENT:** Ich präsentiere den Plan. = Es prezentēju plānu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0441
**Card ID:** a2-wagen
**Field:** entry[1550].study.comparison[0].example
**CURRENT:** Der Wagen ist neu. = Automašīna ir jauna.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0442
**Card ID:** a2-wagen
**Field:** entry[1550].study.comparison[2].example
**CURRENT:** Das Auto steht da. = Automašīna stāv tur.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0443
**Card ID:** a2-wählen
**Field:** entry[1551].study.comparison[0].example
**CURRENT:** Ich wähle eine Nummer. = Es sastādu numuru.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0444
**Card ID:** a2-wählen
**Field:** entry[1551].study.comparison[1].example
**CURRENT:** Ich wähle ein Bild aus. = Es izvēlos attēlu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0445
**Card ID:** a2-wählen
**Field:** entry[1551].study.comparison[3].example
**CURRENT:** Wir stimmen ab. = Mēs balsojam.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0446
**Card ID:** a2-während
**Field:** entry[1553].study.comparison[0].example
**CURRENT:** Während ich arbeite, ist es ruhig. = Kamēr es strādāju, ir kluss.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0447
**Card ID:** a2-während
**Field:** entry[1553].study.comparison[1].example
**CURRENT:** Bei Regen bleiben wir zu Hause. = Lietus laikā paliekam mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0448
**Card ID:** a2-während
**Field:** entry[1553].study.comparison[2].example
**CURRENT:** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0449
**Card ID:** a2-während
**Field:** entry[1553].study.comparison[3].example
**CURRENT:** Solange du hier bist, bleibe ich. = Kamēr tu esi šeit, es palieku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0450
**Card ID:** a2-wahrscheinlich
**Field:** entry[1555].study.comparison[0].example
**CURRENT:** Er kommt wahrscheinlich. = Viņš droši vien atnāks.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0451
**Card ID:** a2-wahrscheinlich
**Field:** entry[1555].study.comparison[1].example
**CURRENT:** Vielleicht kommt er. = Varbūt viņš atnāks.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0452
**Card ID:** a2-wahrscheinlich
**Field:** entry[1555].study.comparison[3].example
**CURRENT:** Er kommt bestimmt. = Viņš noteikti atnāks.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0453
**Card ID:** a2-wahrscheinlich
**Field:** entry[1555].study.comparison[4].example
**CURRENT:** Das ist möglich. = Tas ir iespējams.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0454
**Card ID:** a2-wechseln
**Field:** entry[1564].study.comparison[2].example
**CURRENT:** Wir tauschen Plätze. = Mēs samaināmies vietām.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0455
**Card ID:** a2-wechseln
**Field:** entry[1564].study.comparison[3].example
**CURRENT:** Ich steige um. = Es pārsēžos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0456
**Card ID:** a2-wechseln
**Field:** entry[1564].study.comparison[4].example
**CURRENT:** Ich ändere den Plan. = Es mainu plānu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0457
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[0].example
**CURRENT:** Das ist viel wert. = Tas ir daudz vērts.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0458
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[1].example
**CURRENT:** Der Wert ist hoch. = Vērtība ir augsta.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0459
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[2].example
**CURRENT:** Das Auto ist teuer. = Auto ir dārgs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0460
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[3].example
**CURRENT:** Die Stadt ist sehenswert. = Pilsētu ir vērts redzēt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0461
**Card ID:** a2-wert
**Field:** entry[1583].study.comparison[4].example
**CURRENT:** Das ist wichtig. = Tas ir svarīgi.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0462
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
#### ET-A2-0463
**Card ID:** a2-wiegen
**Field:** entry[1589].study.comparison[1].example
**CURRENT:** Die Waage steht im Bad. = Svari stāv vannasistabā.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0464
**Card ID:** a2-wiegen
**Field:** entry[1589].study.comparison[2].example
**CURRENT:** Das Gewicht ist normal. = Svars ir normāls.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0465
**Card ID:** a2-wiegen
**Field:** entry[1589].study.comparison[3].example
**CURRENT:** Ich messe die Länge. = Es mēru garumu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0466
**Card ID:** a2-wiegen
**Field:** entry[1589].study.comparison[4].example
**CURRENT:** Der Wagen ist neu. = Automašīna ir jauna.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0467
**Card ID:** a2-ziehen
**Field:** entry[1599].study.comparison[0].example
**CURRENT:** Wir ziehen um. = Mēs pārvācamies.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0468
**Card ID:** a2-ziehen
**Field:** entry[1599].study.comparison[1].example
**CURRENT:** Ich ziehe um. = Es pārvācos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0469
**Card ID:** a2-ziehen
**Field:** entry[1599].study.comparison[4].example
**CURRENT:** Den Tee ziehen lassen. = Ļaut tējai ievilkties.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0470
**Card ID:** a2-zunehmen
**Field:** entry[1614].study.comparison[1].example
**CURRENT:** Ich nehme ab. = Es notievēju.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0471
**Card ID:** a2-zunehmen
**Field:** entry[1614].study.comparison[2].example
**CURRENT:** Die Stadt wächst. = Pilsēta aug.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0472
**Card ID:** a2-zunehmen
**Field:** entry[1614].study.comparison[3].example
**CURRENT:** Die Preise steigen. = Cenas kāpj.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0473
**Card ID:** a2-zunehmen
**Field:** entry[1614].study.comparison[4].example
**CURRENT:** Die Kosten erhöhen sich. = Izmaksas palielinās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0474
**Card ID:** a2-zurzeit
**Field:** entry[1618].study.comparison[0].example
**CURRENT:** Zurzeit bin ich beschäftigt. = Pašlaik esmu aizņemts.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0475
**Card ID:** a2-zurzeit
**Field:** entry[1618].study.comparison[2].example
**CURRENT:** Im Moment habe ich keine Zeit. = Šobrīd man nav laika.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0476
**Card ID:** a2-zurzeit
**Field:** entry[1618].study.comparison[3].example
**CURRENT:** Derzeit ist das nicht möglich. = Pašlaik tas nav iespējams.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0477
**Card ID:** a2-zurzeit
**Field:** entry[1618].study.comparison[4].example
**CURRENT:** Momentan bin ich krank. = Šobrīd esmu slims.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0478
**Card ID:** a2-abfahren
**Field:** study.sectionAccents (examples)
**CURRENT:** grupp
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0479
**Card ID:** a2-bauen
**Field:** study.sectionAccents (examples)
**CURRENT:** mudelit
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0480
**Card ID:** a2-job
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
#### ET-A2-0481
**Card ID:** a2-job
**Field:** study.sectionAccents (examples)
**CURRENT:** ö
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0486
**Card ID:** a2-job
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
#### ET-A2-0487
**Card ID:** a2-job
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
#### ET-A2-0488
**Card ID:** a2-job
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
#### ET-A2-0489
**Card ID:** a2-job
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
#### ET-A2-0491
**Card ID:** a2-kamm
**Field:** study.sectionAccents (examples)
**CURRENT:** harja
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0492
**Card ID:** a2-kamm
**Field:** study.sectionAccents (examples)
**CURRENT:** kammi
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0493
**Card ID:** a2-kamm
**Field:** study.sectionAccents (examples)
**CURRENT:** hari
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0494
**Card ID:** a2-lage
**Field:** study.sectionAccents (examples)
**CURRENT:** kiht
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0495
**Card ID:** a2-leitung
**Field:** study.sectionAccents (examples)
**CURRENT:** juhe
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0497
**Card ID:** a2-leitung
**Field:** study.sectionAccents (examples)
**CURRENT:** liin
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0499
**Card ID:** a2-leitung
**Field:** study.sectionAccents (examples)
**CURRENT:** toru
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0501
**Card ID:** a2-rechnen
**Field:** study.sectionAccents (explanation)
**CURRENT:** mit rechnen
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0502
**Card ID:** a2-satz
**Field:** study.sectionAccents (examples)
**CURRENT:** komplekti
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0503
**Card ID:** a2-satz
**Field:** study.sectionAccents (examples)
**CURRENT:** määr
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0505
**Card ID:** a2-satz
**Field:** study.sectionAccents (examples)
**CURRENT:** sete
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0507
**Card ID:** a2-schloss
**Field:** study.sectionAccents (examples)
**CURRENT:** lukku
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0508
**Card ID:** a2-wagen
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
#### ET-A2-0509
**Card ID:** a2-wagen
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
#### ET-A2-0510
**Card ID:** a2-wagen
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
#### ET-A2-0511
**Card ID:** a2-wagen
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
#### ET-A2-0516
**Card ID:** a2-wagen
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
#### ET-A2-0518
**Card ID:** a2-wagen
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
#### ET-A2-0522
**Card ID:** a2-wagen
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
#### ET-A2-0523
**Card ID:** a2-abfahren
**Field:** study.sectionAccents.comparison.example
**CURRENT:** Rong
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "Rong" nav atrodams sadaļā comparison
**DE konteksts:** abfahren
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0524
**Card ID:** a2-abfahren
**Field:** study.sectionAccents.comparison.example
**CURRENT:** väljub
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "väljub" nav atrodams sadaļā comparison
**DE konteksts:** abfahren
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0526
**Card ID:** a2-abfahren
**Field:** study.sectionAccents.comparison.example
**CURRENT:** sõidan
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "sõidan" nav atrodams sadaļā comparison
**DE konteksts:** abfahren
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0527
**Card ID:** a2-abfahren
**Field:** study.sectionAccents.comparison.example
**CURRENT:** ära
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "ära" nav atrodams sadaļā comparison
**DE konteksts:** abfahren
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 231/231 | FAIL |
| sectionAccents | FAIL |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |
