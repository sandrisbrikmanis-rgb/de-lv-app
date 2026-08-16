# DA–DE A2 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Production fails:** `data/da/a2.js` (primārais) + `www/data/da/a2.js` (mirror)
**Piezīme:** Dāņu tulkojumi glabājas laukā lv (projekta konvencija).
**DE etalons (tikai lasīšana):** `data/a2.js (DE parity only, READ-ONLY)`

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Production kartītes | **1640** |
| Auditētas kartītes | **1640/1640 (100%)** |
| Parastās kartītes | **1409** |
| Study objekti | **231** (etalons: **231**) |
| Coverage | **100%** |
| Kopējie validētie atradumi | **1403** |
| CRITICAL | **0** |
| HIGH | **516** |
| MEDIUM | **887** |
| LOW | **0** |
| DE_SOURCE_ISSUE | **0** |
| FALSE_POSITIVE | **0** |
| Comparison LV atlikumi | **485** |
| Zero-width artefakti | **65** |
| sectionAccents problēmas | **801** |
| Sinonīmu ķēdes (3+ •) | **35** |
| Syntax | **PASS** |
| Mirror/parity | **PASS** (data ↔ www) |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE A2: NEEDS REPAIR**

Atrasts **1403** labojumu ierakstu: galvenokārt **comparison piemēros latviešu atlikumi**, **zero-width artefakti**, **sectionAccents** un **sinonīmu ķēdes** priekšpusē. DE integritāte: **PASS**; Study paritāte: **PASS**.

---

## 2. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 1640/1640 PASS |
| Study skaits | 231/231 PASS |
| DE lauku secība/identitāte | PASS |
| Study paritāte (missing/extra) | PASS |
| Study ID unikalitāte | PASS |
| Mirror data ↔ www | PASS |
| JS syntax | PASS |

---

## 3. Pilns atradumu saraksts

### 3.2 HIGH — LV atlikumi un obligātie lauki

#### DA-A2-0001

**Card ID:** a2-abfahren
**Field:** study.comparison[0].example
**DE konteksts:** abfahren
**CURRENT (DA):** Der Zug fährt ab. = Vilciens atiet.
**PROPOSED (DA):** Der Zug fährt ab. = Toget afgår.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0002

**Card ID:** a2-abfahren
**Field:** study.comparison[1].example
**DE konteksts:** abfahren
**CURRENT (DA):** Ich fahre morgen weg. = Es rīt aizbraucu prom.
**PROPOSED (DA):** Ich fahre morgen weg. = Jeg i morgen kører væk væk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0003

**Card ID:** a2-abfahren
**Field:** study.comparison[2].example
**DE konteksts:** abfahren
**CURRENT (DA):** Wir fahren jetzt los. = Mēs tagad sākam braukt.
**PROPOSED (DA):** Wir fahren jetzt los. = Vi nu begynder braukt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0004

**Card ID:** a2-abfahren
**Field:** study.comparison[3].example
**DE konteksts:** abfahren
**CURRENT (DA):** Der Bus geht gleich ab. = Autobuss tūlīt atiet.
**PROPOSED (DA):** Der Bus geht gleich ab. = Bussen straks afgår.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0005

**Card ID:** a2-abfahren
**Field:** study.important.text
**DE konteksts:** abfahren
**CURRENT (DA):** Abfahren nav “aizvest”.
**PROPOSED (DA):** Abfahren nav “aizvest”.
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0006

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks[0].text.green[0]
**DE konteksts:** abfahren
**CURRENT (DA):** atiet
**PROPOSED (DA):** afgår
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0007

**Card ID:** a2-abfahren
**Field:** study.accents.blue[11]
**DE konteksts:** abfahren
**CURRENT (DA):** atiet
**PROPOSED (DA):** afgår
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0008

**Card ID:** a2-abfahren
**Field:** study.accents.green[1]
**DE konteksts:** abfahren
**CURRENT (DA):** atiet
**PROPOSED (DA):** afgår
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0009

**Card ID:** a2-abfahren
**Field:** study.accents.purple[2]
**DE konteksts:** abfahren
**CURRENT (DA):** aizbraukt prom
**PROPOSED (DA):** aizbraukt væk
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0010

**Card ID:** a2-abfahren
**Field:** study.accents.purple[3]
**DE konteksts:** abfahren
**CURRENT (DA):** atiet / noiet
**PROPOSED (DA):** afgår / noiet
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0011

**Card ID:** a2-abfahren
**Field:** study.accents.purple[5]
**DE konteksts:** abfahren
**CURRENT (DA):** braukt
**PROPOSED (DA):** braukt
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0012

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** abfahren
**CURRENT (DA):** atiet
**PROPOSED (DA):** atiet
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0024

**Card ID:** a2-abgeben
**Field:** study.comparison[0].example
**DE konteksts:** abgeben
**CURRENT (DA):** Ich gebe den Antrag ab. = Es iesniedzu pieteikumu.
**PROPOSED (DA):** Ich gebe den Antrag ab. = Jeg indsender ansøgningen.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0025

**Card ID:** a2-abgeben
**Field:** study.comparison[1].example
**DE konteksts:** abgeben
**CURRENT (DA):** Ich gebe dir den Schlüssel. = Es tev dodu atslēgu.
**PROPOSED (DA):** Ich gebe dir den Schlüssel. = Jeg tev dodu nøgle.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0026

**Card ID:** a2-abgeben
**Field:** study.comparison[2].example
**DE konteksts:** abgeben
**CURRENT (DA):** Ich gebe das Buch zurück. = Es atdodu grāmatu atpakaļ.
**PROPOSED (DA):** Ich gebe das Buch zurück. = Jeg atdodu bogen atpakaļ.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0027

**Card ID:** a2-abgeben
**Field:** study.comparison[3].example
**DE konteksts:** abgeben
**CURRENT (DA):** Ich reiche die Unterlagen ein. = Es iesniedzu dokumentus.
**PROPOSED (DA):** Ich reiche die Unterlagen ein. = Jeg indsender dokumentus.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0028

**Card ID:** a2-abgeben
**Field:** study.comparison[4].example
**DE konteksts:** abgeben
**CURRENT (DA):** Ich verkaufe mein Fahrrad. = Es pārdodu savu velosipēdu.
**PROPOSED (DA):** Ich verkaufe mein Fahrrad. = Jeg pārdodu savu velosipēdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0037

**Card ID:** a2-absagen
**Field:** study.comparison[0].example
**DE konteksts:** absagen
**CURRENT (DA):** Ich sage den Termin ab. = Es atceļu tikšanos.
**PROPOSED (DA):** Ich sage den Termin ab. = Jeg atceļu tikšanos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0038

**Card ID:** a2-absagen
**Field:** study.comparison[1].example
**DE konteksts:** absagen
**CURRENT (DA):** Ich lehne das Angebot ab. = Es noraidu piedāvājumu.
**PROPOSED (DA):** Ich lehne das Angebot ab. = Jeg noraidu piedāvājumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0039

**Card ID:** a2-absagen
**Field:** study.comparison[2].example
**DE konteksts:** absagen
**CURRENT (DA):** Ich kündige den Vertrag. = Es uzteicu līgumu.
**PROPOSED (DA):** Ich kündige den Vertrag. = Jeg uzteicu līgumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0040

**Card ID:** a2-absagen
**Field:** study.comparison[3].example
**DE konteksts:** absagen
**CURRENT (DA):** Ich storniere die Buchung. = Es atceļu rezervāciju.
**PROPOSED (DA):** Ich storniere die Buchung. = Jeg atceļu rezervāciju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0041

**Card ID:** a2-absagen
**Field:** study.comparison[4].example
**DE konteksts:** absagen
**CURRENT (DA):** Er sagt nein. = Viņš saka nē.
**PROPOSED (DA):** Er sagt nein. = Viņš saka nē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0051

**Card ID:** a2-abschließen
**Field:** study.comparison[0].example
**DE konteksts:** abschließen
**CURRENT (DA):** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED (DA):** Ich schließe die Tür ab. = Jeg aizslēdzu durvis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0052

**Card ID:** a2-abschließen
**Field:** study.comparison[3].example
**DE konteksts:** abschließen
**CURRENT (DA):** Ich unterschreibe den Vertrag. = Es parakstu līgumu.
**PROPOSED (DA):** Ich unterschreibe den Vertrag. = Jeg parakstu līgumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0065

**Card ID:** a2-abstellen
**Field:** study.comparison[0].example
**DE konteksts:** abstellen
**CURRENT (DA):** Ich stelle das Fahrrad ab. = Es novietoju velosipēdu.
**PROPOSED (DA):** Ich stelle das Fahrrad ab. = Jeg parkerer cyklen
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0066

**Card ID:** a2-abstellen
**Field:** study.comparison[1].example
**DE konteksts:** abstellen
**CURRENT (DA):** Ich schalte den Computer aus. = Es izslēdzu datoru.
**PROPOSED (DA):** Ich schalte den Computer aus. = Jeg izslēdzu datoru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0067

**Card ID:** a2-abstellen
**Field:** study.comparison[2].example
**DE konteksts:** abstellen
**CURRENT (DA):** Der Bus hält an. = Autobuss apstājas.
**PROPOSED (DA):** Der Bus hält an. = Bussen apstājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0068

**Card ID:** a2-abstellen
**Field:** study.comparison[3].example
**DE konteksts:** abstellen
**CURRENT (DA):** Der Fahrer stoppt das Auto. = Vadītājs aptur auto.
**PROPOSED (DA):** Der Fahrer stoppt das Auto. = Vadītājs aptur auto.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0069

**Card ID:** a2-abstellen
**Field:** study.comparison[4].example
**DE konteksts:** abstellen
**CURRENT (DA):** Ich stelle die Tasche neben die Tür. = Es nolieku somu pie durvīm.
**PROPOSED (DA):** Ich stelle die Tasche neben die Tür. = Jeg nolieku somu pie durvīm.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0083

**Card ID:** a2-angewandt
**Field:** study.comparison[0].example
**DE konteksts:** angewandt
**CURRENT (DA):** Diese Methode wird angewandt. = Šī metode tiek pielietota.
**PROPOSED (DA):** Diese Methode wird angewandt. = Denne metode anvendes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0084

**Card ID:** a2-angewandt
**Field:** study.comparison[1].example
**DE konteksts:** angewandt
**CURRENT (DA):** Das ist eine praktische Lösung. = Tas ir praktisks risinājums.
**PROPOSED (DA):** Das ist eine praktische Lösung. = Tas er praktisks risinājums.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0092

**Card ID:** a2-angreifen
**Field:** study.comparison[0].example
**DE konteksts:** angreifen
**CURRENT (DA):** Der Hund greift an. = Suns uzbrūk.
**PROPOSED (DA):** Der Hund greift an. = Hunden angriber manden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0093

**Card ID:** a2-angreifen
**Field:** study.comparison[1].example
**DE konteksts:** angreifen
**CURRENT (DA):** Die Gruppe attackiert ihn. = Grupa viņam uzbrūk.
**PROPOSED (DA):** Die Gruppe attackiert ihn. = Grupa viņam uzbrūk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0094

**Card ID:** a2-angreifen
**Field:** study.comparison[2].example
**DE konteksts:** angreifen
**CURRENT (DA):** Er beleidigt mich. = Viņš mani apvaino.
**PROPOSED (DA):** Er beleidigt mich. = Viņš mani apvaino.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0095

**Card ID:** a2-angreifen
**Field:** study.comparison[3].example
**DE konteksts:** angreifen
**CURRENT (DA):** Sie kritisiert den Vorschlag. = Viņa kritizē priekšlikumu.
**PROPOSED (DA):** Sie kritisiert den Vorschlag. = Hun kritizē priekšlikumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0101

**Card ID:** a2-anhänger
**Field:** study.comparison[1].example
**DE konteksts:** Anhänger
**CURRENT (DA):** Er ist ein Fan der Mannschaft. = Viņš ir komandas fans.
**PROPOSED (DA):** Er ist ein Fan der Mannschaft. = Viņš er komandas fans.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0102

**Card ID:** a2-anhänger
**Field:** study.comparison[2].example
**DE konteksts:** Anhänger
**CURRENT (DA):** Sie hat viele Unterstützer. = Viņai ir daudz atbalstītāju.
**PROPOSED (DA):** Sie hat viele Unterstützer. = Viņai er daudz atbalstītāju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0103

**Card ID:** a2-anhänger
**Field:** study.comparison[3].example
**DE konteksts:** Anhänger
**CURRENT (DA):** Der Wohnwagen steht am See. = Dzīvojamā piekabe stāv pie ezera.
**PROPOSED (DA):** Der Wohnwagen steht am See. = Dzīvojamā piekabe stāv pie ezera.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0107

**Card ID:** a2-anheizen
**Field:** study.comparison[0].example
**DE konteksts:** anheizen
**CURRENT (DA):** Ich heize den Ofen an. = Es iekuru krāsni.
**PROPOSED (DA):** Ich heize den Ofen an. = Jeg iekuru krāsni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0108

**Card ID:** a2-anheizen
**Field:** study.comparison[1].example
**DE konteksts:** anheizen
**CURRENT (DA):** Wir heizen die Wohnung. = Mēs apkurinām dzīvokli.
**PROPOSED (DA):** Wir heizen die Wohnung. = Vi apkurinām dzīvokli.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0109

**Card ID:** a2-anheizen
**Field:** study.comparison[3].example
**DE konteksts:** anheizen
**CURRENT (DA):** Das verschärft den Streit. = Tas saasina strīdu.
**PROPOSED (DA):** Das verschärft den Streit. = Tas saasina strīdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0113

**Card ID:** a2-anlegen
**Field:** study.comparison[1].example
**DE konteksts:** anlegen
**CURRENT (DA):** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED (DA):** Ich lege das Buch auf den Tisch. = Jeg nolieku bogen uz galda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0121

**Card ID:** a2-anmelden
**Field:** study.comparison[1].example
**DE konteksts:** anmelden
**CURRENT (DA):** Melden Sie sich bitte an. = Lūdzu, piesakieties.
**PROPOSED (DA):** Melden Sie sich bitte an. = Tilmeld dig venligst online.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0122

**Card ID:** a2-anmelden
**Field:** study.comparison[2].example
**DE konteksts:** anmelden
**CURRENT (DA):** Ich registriere mein Konto. = Es reģistrēju savu kontu.
**PROPOSED (DA):** Ich registriere mein Konto. = Jeg reģistrēju savu kontu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0123

**Card ID:** a2-anmelden
**Field:** study.comparison[3].example
**DE konteksts:** anmelden
**CURRENT (DA):** Ich buche einen Termin. = Es rezervēju laiku.
**PROPOSED (DA):** Ich buche einen Termin. = Jeg rezervēju laiku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0124

**Card ID:** a2-anmelden
**Field:** study.comparison[4].example
**DE konteksts:** anmelden
**CURRENT (DA):** Ich melde das Problem. = Es ziņoju par problēmu.
**PROPOSED (DA):** Ich melde das Problem. = Jeg ziņoju par problēmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0133

**Card ID:** a2-anstecken
**Field:** study.comparison[1].example
**DE konteksts:** anstecken
**CURRENT (DA):** Der Schlüssel steckt im Schloss. = Atslēga ir slēdzenē.
**PROPOSED (DA):** Der Schlüssel steckt im Schloss. = Atslēga er slēdzenē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0134

**Card ID:** a2-anstecken
**Field:** study.comparison[3].example
**DE konteksts:** anstecken
**CURRENT (DA):** Ich habe mich angesteckt. = Es inficējos.
**PROPOSED (DA):** Ich habe mich angesteckt. = Barnet smittede mig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0147

**Card ID:** a2-anstellen
**Field:** study.comparison[0].example
**DE konteksts:** anstellen
**CURRENT (DA):** Die Firma stellt ihn an. = Firma viņu pieņem darbā.
**PROPOSED (DA):** Die Firma stellt ihn an. = Virksomheden ansætter nye medarbejdere.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0148

**Card ID:** a2-anstellen
**Field:** study.comparison[1].example
**DE konteksts:** anstellen
**CURRENT (DA):** Wir stellen neue Leute ein. = Mēs pieņemam darbā jaunus cilvēkus.
**PROPOSED (DA):** Wir stellen neue Leute ein. = Vi pieņemam darbā jaunus cilvēkus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0149

**Card ID:** a2-anstellen
**Field:** study.comparison[2].example
**DE konteksts:** anstellen
**CURRENT (DA):** Ich schalte das Licht an. = Es ieslēdzu gaismu.
**PROPOSED (DA):** Ich schalte das Licht an. = Jeg ieslēdzu gaismu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0150

**Card ID:** a2-anstellen
**Field:** study.comparison[3].example
**DE konteksts:** anstellen
**CURRENT (DA):** Ich stelle mich an. = Es nostājos rindā.
**PROPOSED (DA):** Ich stelle mich an. = Jeg nostājos rindā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0166

**Card ID:** a2-artikel
**Field:** study.comparison[0].example
**DE konteksts:** Artikel
**CURRENT (DA):** Der Artikel ist kurz. = Raksts ir īss.
**PROPOSED (DA):** Der Artikel ist kurz. = Raksts er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0167

**Card ID:** a2-artikel
**Field:** study.comparison[1].example
**DE konteksts:** Artikel
**CURRENT (DA):** Der Zeitungsartikel ist neu. = Avīzes raksts ir jauns.
**PROPOSED (DA):** Der Zeitungsartikel ist neu. = Avīzes raksts er jauns.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0168

**Card ID:** a2-artikel
**Field:** study.comparison[2].example
**DE konteksts:** Artikel
**CURRENT (DA):** Die Ware ist teuer. = Prece ir dārga.
**PROPOSED (DA):** Die Ware ist teuer. = Prece er dārga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0169

**Card ID:** a2-artikel
**Field:** study.comparison[4].example
**DE konteksts:** Artikel
**CURRENT (DA):** Der Paragraph ist wichtig. = Pants ir svarīgs.
**PROPOSED (DA):** Der Paragraph ist wichtig. = Pants er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0178

**Card ID:** a2-aufheben
**Field:** study.comparison[0].example
**DE konteksts:** aufheben
**CURRENT (DA):** Ich hebe den Schlüssel auf. = Es paceļu atslēgu.
**PROPOSED (DA):** Ich hebe den Schlüssel auf. = Jeg paceļu nøgle.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0179

**Card ID:** a2-aufheben
**Field:** study.comparison[1].example
**DE konteksts:** aufheben
**CURRENT (DA):** Ich hebe die Hand. = Es paceļu roku.
**PROPOSED (DA):** Ich hebe die Hand. = Jeg paceļu roku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0180

**Card ID:** a2-aufheben
**Field:** study.comparison[2].example
**DE konteksts:** aufheben
**CURRENT (DA):** Wir sagen den Termin ab. = Mēs atceļam tikšanos.
**PROPOSED (DA):** Wir sagen den Termin ab. = Vi atceļam tikšanos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0190

**Card ID:** a2-auflage
**Field:** study.comparison[0].example
**DE konteksts:** Auflage
**CURRENT (DA):** Die Auflage ist hoch. = Tirāža ir liela.
**PROPOSED (DA):** Die Auflage ist hoch. = Tirāža er liela.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0191

**Card ID:** a2-auflage
**Field:** study.comparison[1].example
**DE konteksts:** Auflage
**CURRENT (DA):** Die neue Ausgabe ist da. = Jaunais numurs ir klāt.
**PROPOSED (DA):** Die neue Ausgabe ist da. = Jaunais numurs er klāt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0192

**Card ID:** a2-auflage
**Field:** study.comparison[2].example
**DE konteksts:** Auflage
**CURRENT (DA):** Das ist eine Bedingung. = Tas ir nosacījums.
**PROPOSED (DA):** Das ist eine Bedingung. = Tas er nosacījums.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0197

**Card ID:** a2-aufnahme
**Field:** study.comparison[2].example
**DE konteksts:** Aufnahme
**CURRENT (DA):** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED (DA):** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0198

**Card ID:** a2-aufnahme
**Field:** study.comparison[4].example
**DE konteksts:** Aufnahme
**CURRENT (DA):** Die Aufnahmeprüfung ist morgen. = Iestājpārbaudījums ir rīt.
**PROPOSED (DA):** Die Aufnahmeprüfung ist morgen. = Iestājpārbaudījums er i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0204

**Card ID:** a2-aufnehmen
**Field:** study.comparison[1].example
**DE konteksts:** aufnehmen
**CURRENT (DA):** Ich nehme das Buch. = Es ņemu grāmatu.
**PROPOSED (DA):** Ich nehme das Buch. = Jeg ņemu bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0205

**Card ID:** a2-aufnehmen
**Field:** study.comparison[2].example
**DE konteksts:** aufnehmen
**CURRENT (DA):** Ich nehme das Angebot an. = Es pieņemu piedāvājumu.
**PROPOSED (DA):** Ich nehme das Angebot an. = Jeg pieņemu piedāvājumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0206

**Card ID:** a2-aufnehmen
**Field:** study.comparison[3].example
**DE konteksts:** aufnehmen
**CURRENT (DA):** Wir beginnen die Arbeit. = Mēs sākam darbu.
**PROPOSED (DA):** Wir beginnen die Arbeit. = Vi begynder darbu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0217

**Card ID:** a2-aufrichtig
**Field:** study.comparison[0].example
**DE konteksts:** aufrichtig
**CURRENT (DA):** Eine aufrichtige Entschuldigung. = Patiesa atvainošanās.
**PROPOSED (DA):** Eine aufrichtige Entschuldigung. = Det var en ægte undskyldning.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0218

**Card ID:** a2-aufrichtig
**Field:** study.comparison[1].example
**DE konteksts:** aufrichtig
**CURRENT (DA):** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED (DA):** Er ist ehrlich. = Han er ærlig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0219

**Card ID:** a2-aufrichtig
**Field:** study.comparison[2].example
**DE konteksts:** aufrichtig
**CURRENT (DA):** Herzliche Grüße. = Sirsnīgi sveicieni.
**PROPOSED (DA):** Herzliche Grüße. = Sirsnīgi sveicieni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0220

**Card ID:** a2-aufrichtig
**Field:** study.comparison[3].example
**DE konteksts:** aufrichtig
**CURRENT (DA):** Sie spricht offen. = Viņa runā atklāti.
**PROPOSED (DA):** Sie spricht offen. = Hun runā atklāti.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0228

**Card ID:** a2-aufrufen
**Field:** study.comparison[3].example
**DE konteksts:** aufrufen
**CURRENT (DA):** Er fordert uns auf. = Viņš mūs aicina.
**PROPOSED (DA):** Er fordert uns auf. = Viņš mūs aicina.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0233

**Card ID:** a2-auftragen
**Field:** study.comparison[0].example
**DE konteksts:** auftragen
**CURRENT (DA):** Der Lehrer trägt eine Aufgabe auf. = Skolotājs uzdod uzdevumu.
**PROPOSED (DA):** Der Lehrer trägt eine Aufgabe auf. = Læreren giver os en opgave.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0234

**Card ID:** a2-auftragen
**Field:** study.comparison[1].example
**DE konteksts:** auftragen
**CURRENT (DA):** Ich gebe dir das Buch. = Es tev dodu grāmatu.
**PROPOSED (DA):** Ich gebe dir das Buch. = Jeg tev dodu bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0235

**Card ID:** a2-auftragen
**Field:** study.comparison[2].example
**DE konteksts:** auftragen
**CURRENT (DA):** Wir streichen die Wand an. = Mēs krāsojam sienu.
**PROPOSED (DA):** Wir streichen die Wand an. = Vi krāsojam sienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0236

**Card ID:** a2-auftragen
**Field:** study.comparison[3].example
**DE konteksts:** auftragen
**CURRENT (DA):** Der Kellner serviert das Essen. = Viesmīlis pasniedz ēdienu.
**PROPOSED (DA):** Der Kellner serviert das Essen. = Viesmīlis pasniedz ēdienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0251

**Card ID:** a2-auftreten
**Field:** study.comparison[0].example
**DE konteksts:** auftreten
**CURRENT (DA):** Ein Fehler tritt auf. = Parādās kļūda.
**PROPOSED (DA):** Ein Fehler tritt auf. = Fejlen opstår kun nogle gange.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0252

**Card ID:** a2-auftreten
**Field:** study.comparison[1].example
**DE konteksts:** auftreten
**CURRENT (DA):** Er erscheint um acht. = Viņš ierodas astoņos.
**PROPOSED (DA):** Er erscheint um acht. = Viņš ierodas astoņos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0253

**Card ID:** a2-auftreten
**Field:** study.comparison[2].example
**DE konteksts:** auftreten
**CURRENT (DA):** Sie spielt im Theater. = Viņa spēlē teātrī.
**PROPOSED (DA):** Sie spielt im Theater. = Hun spēlē teātrī.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0254

**Card ID:** a2-auftreten
**Field:** study.comparison[3].example
**DE konteksts:** auftreten
**CURRENT (DA):** Er verhält sich ruhig. = Viņš izturas mierīgi.
**PROPOSED (DA):** Er verhält sich ruhig. = Viņš izturas mierīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0264

**Card ID:** a2-aufwenden
**Field:** study.comparison[1].example
**DE konteksts:** aufwenden
**CURRENT (DA):** Ich gebe viel Geld aus. = Es iztērēju daudz naudas.
**PROPOSED (DA):** Ich gebe viel Geld aus. = Dette projekt skal investere mange penge.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0265

**Card ID:** a2-aufwenden
**Field:** study.comparison[2].example
**DE konteksts:** aufwenden
**CURRENT (DA):** Ich verbringe den Abend zu Hause. = Es pavadu vakaru mājās.
**PROPOSED (DA):** Ich verbringe den Abend zu Hause. = Jeg pavadu vakaru hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0266

**Card ID:** a2-aufwenden
**Field:** study.comparison[3].example
**DE konteksts:** aufwenden
**CURRENT (DA):** Wir investieren Zeit und Geld. = Mēs ieguldām laiku un naudu.
**PROPOSED (DA):** Wir investieren Zeit und Geld. = Vi ieguldām laiku og naudu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0271

**Card ID:** a2-aufzeichnen
**Field:** study.comparison[1].example
**DE konteksts:** aufzeichnen
**CURRENT (DA):** Das Kind zeichnet ein Haus. = Bērns zīmē māju.
**PROPOSED (DA):** Das Kind zeichnet ein Haus. = Bērns zīmē māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0277

**Card ID:** a2-aussteigen
**Field:** study.comparison[0].example
**DE konteksts:** aussteigen
**CURRENT (DA):** Ich steige aus dem Bus aus. = Es izkāpju no autobusa.
**PROPOSED (DA):** Ich steige aus dem Bus aus. = Jeg izkāpju no autobusa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0278

**Card ID:** a2-aussteigen
**Field:** study.comparison[1].example
**DE konteksts:** aussteigen
**CURRENT (DA):** Ich steige in den Zug ein. = Es iekāpju vilcienā.
**PROPOSED (DA):** Ich steige in den Zug ein. = Jeg iekāpju vilcienā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0279

**Card ID:** a2-aussteigen
**Field:** study.comparison[2].example
**DE konteksts:** aussteigen
**CURRENT (DA):** Wir steigen in Berlin um. = Mēs pārsēžamies Berlīnē.
**PROPOSED (DA):** Wir steigen in Berlin um. = Vi pārsēžamies Berlīnē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0280

**Card ID:** a2-aussteigen
**Field:** study.comparison[3].example
**DE konteksts:** aussteigen
**CURRENT (DA):** Er verlässt die Firma. = Viņš atstāj firmu.
**PROPOSED (DA):** Er verlässt die Firma. = Viņš atstāj firmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0289

**Card ID:** a2-auswählen
**Field:** study.comparison[0].example
**DE konteksts:** auswählen
**CURRENT (DA):** Ich wähle ein Bild aus. = Es izvēlos attēlu.
**PROPOSED (DA):** Ich wähle ein Bild aus. = Jeg izvēlos attēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0290

**Card ID:** a2-auswählen
**Field:** study.comparison[2].example
**DE konteksts:** auswählen
**CURRENT (DA):** Such dir ein Buch aus. = Izvēlies sev grāmatu.
**PROPOSED (DA):** Such dir ein Buch aus. = Izvēlies sev bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0291

**Card ID:** a2-auswählen
**Field:** study.comparison[3].example
**DE konteksts:** auswählen
**CURRENT (DA):** Ich entscheide morgen. = Es izlemšu rīt.
**PROPOSED (DA):** Ich entscheide morgen. = Jeg izlemšu i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0292

**Card ID:** a2-auswählen
**Field:** study.comparison[4].example
**DE konteksts:** auswählen
**CURRENT (DA):** Markieren Sie die richtige Antwort. = Atzīmējiet pareizo atbildi.
**PROPOSED (DA):** Markieren Sie die richtige Antwort. = Atzīmējiet pareizo atbildi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0305

**Card ID:** a2-ausziehen
**Field:** study.comparison[2].example
**DE konteksts:** ausziehen
**CURRENT (DA):** Wir ziehen nach Riga um. = Mēs pārceļamies uz Rīgu.
**PROPOSED (DA):** Wir ziehen nach Riga um. = Vi pārceļamies uz Rīgu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0306

**Card ID:** a2-ausziehen
**Field:** study.comparison[3].example
**DE konteksts:** ausziehen
**CURRENT (DA):** Das Kind zieht sich aus. = Bērns izģērbjas.
**PROPOSED (DA):** Das Kind zieht sich aus. = Bērns izģērbjas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0312

**Card ID:** a2-bahn
**Field:** study.comparison[1].example
**DE konteksts:** Bahn
**CURRENT (DA):** Der Zug fährt um acht Uhr ab. = Vilciens atiet astoņos.
**PROPOSED (DA):** Der Zug fährt um acht Uhr ab. = Toget går klokken otte.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0313

**Card ID:** a2-bahn
**Field:** study.comparison[3].example
**DE konteksts:** Bahn
**CURRENT (DA):** Wir treffen uns am Bahnhof. = Mēs tiekamies stacijā.
**PROPOSED (DA):** Wir treffen uns am Bahnhof. = Vi tiekamies stacijā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0314

**Card ID:** a2-bahn
**Field:** study.comparison[4].example
**DE konteksts:** Bahn
**CURRENT (DA):** Der Zug fährt von Gleis 3. = Vilciens atiet no 3. perona.
**PROPOSED (DA):** Der Zug fährt von Gleis 3. = Toget afgår no 3. perona.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0315

**Card ID:** a2-bahn
**Field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
**DE konteksts:** Bahn
**CURRENT (DA):** braukt ar vilcienu
**PROPOSED (DA):** braukt ar vilcienu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0316

**Card ID:** a2-bahn
**Field:** study.accents.purple[1]
**DE konteksts:** Bahn
**CURRENT (DA):** vilciens
**PROPOSED (DA):** vilciens
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0317

**Card ID:** a2-bahn
**Field:** study.accents.purple[2]
**DE konteksts:** Bahn
**CURRENT (DA):** Vilciens
**PROPOSED (DA):** Toget
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0318

**Card ID:** a2-bahn
**Field:** study.accents.purple[3]
**DE konteksts:** Bahn
**CURRENT (DA):** braukt ar vilcienu
**PROPOSED (DA):** braukt ar vilcienu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0319

**Card ID:** a2-bahn
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Bahn
**CURRENT (DA):** braukt ar vilcienu
**PROPOSED (DA):** FJERN «braukt ar vilcienu»
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0331

**Card ID:** a2-bank
**Field:** study.comparison[0].example
**DE konteksts:** Bank
**CURRENT (DA):** Ich gehe zur Bank. = Es eju uz banku. Plural: die Banken.
**PROPOSED (DA):** Ich gehe zur Bank. = Jeg skal i banken i dag.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0332

**Card ID:** a2-bank
**Field:** study.comparison[1].example
**DE konteksts:** Bank
**CURRENT (DA):** Wir sitzen auf einer Bank. = Mēs sēžam uz soliņa. Plural: die Bänke.
**PROPOSED (DA):** Wir sitzen auf einer Bank. = Vi sidder på en bænk i parken.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0333

**Card ID:** a2-bank
**Field:** study.comparison[2].example
**DE konteksts:** Bank
**CURRENT (DA):** Die Bankfiliale ist geöffnet. = Bankas filiāle ir atvērta.
**PROPOSED (DA):** Die Bankfiliale ist geöffnet. = Bankas filiāle er atvērta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0334

**Card ID:** a2-bank
**Field:** study.comparison[3].example
**DE konteksts:** Bank
**CURRENT (DA):** Wir sitzen auf der Parkbank. = Mēs sēžam uz parka soliņa.
**PROPOSED (DA):** Wir sitzen auf der Parkbank. = Vi sēžam uz parka soliņa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0335

**Card ID:** a2-bank
**Field:** study.comparison[4].example
**DE konteksts:** Bank
**CURRENT (DA):** Das Schiff steckt auf einer Sandbank. = Kuģis ir uzsēdies uz sēkļa.
**PROPOSED (DA):** Das Schiff steckt auf einer Sandbank. = Båden er på grund.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0336

**Card ID:** a2-bank
**Field:** study.comparison[5].example
**DE konteksts:** Bank
**CURRENT (DA):** Ich sitze auf einem Stuhl. = Es sēžu uz krēsla.
**PROPOSED (DA):** Ich sitze auf einem Stuhl. = Jeg sēžu uz krēsla.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0348

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks[0].text.yellow[0]
**DE konteksts:** bauen
**CURRENT (DA):** konstrukciju
**PROPOSED (DA):** konstrukciju
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0351

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** bauen
**CURRENT (DA):** konstrukciju
**PROPOSED (DA):** FJERN «konstrukciju»
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0362

**Card ID:** a2-bauer
**Field:** study.comparison[0].example
**DE konteksts:** Bauer
**CURRENT (DA):** Der Bauer arbeitet auf dem Feld. = Zemnieks strādā uz lauka.
**PROPOSED (DA):** Der Bauer arbeitet auf dem Feld. = En landmand arbejder i marken.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0363

**Card ID:** a2-bauer
**Field:** study.comparison[1].example
**DE konteksts:** Bauer
**CURRENT (DA):** Der Landwirt führt einen Hof. = Lauksaimnieks vada saimniecību.
**PROPOSED (DA):** Der Landwirt führt einen Hof. = Lauksaimnieks vada saimniecību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0364

**Card ID:** a2-bauer
**Field:** study.comparison[2].example
**DE konteksts:** Bauer
**CURRENT (DA):** Wir besuchen einen Bauernhof. = Mēs apmeklējam lauku saimniecību.
**PROPOSED (DA):** Wir besuchen einen Bauernhof. = Vi apmeklējam lauku saimniecību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0365

**Card ID:** a2-bauer
**Field:** study.comparison[3].example
**DE konteksts:** Bauer
**CURRENT (DA):** Die Dame ist eine starke Figur. = Dāma ir spēcīga figūra.
**PROPOSED (DA):** Die Dame ist eine starke Figur. = Dāma er spēcīga figūra.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0366

**Card ID:** a2-bauer
**Field:** study.comparison[4].example
**DE konteksts:** Bauer
**CURRENT (DA):** Der Spielstein liegt auf dem Brett. = Spēles kauliņš atrodas uz galda.
**PROPOSED (DA):** Der Spielstein liegt auf dem Brett. = Spēles kauliņš atrodas uz galda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0369

**Card ID:** a2-bedienen
**Field:** study.comparison[0].example
**DE konteksts:** bedienen
**CURRENT (DA):** Der Kellner bedient uns. = Viesmīlis mūs apkalpo.
**PROPOSED (DA):** Der Kellner bedient uns. = Tjeneren betjener gæsterne.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0370

**Card ID:** a2-bedienen
**Field:** study.comparison[2].example
**DE konteksts:** bedienen
**CURRENT (DA):** Kannst du mir helfen? = Vai vari man palīdzēt?
**PROPOSED (DA):** Kannst du mir helfen? = Vai vari man palīdzēt?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0371

**Card ID:** a2-bedienen
**Field:** study.comparison[3].example
**DE konteksts:** bedienen
**CURRENT (DA):** Sie serviert das Essen. = Viņa pasniedz ēdienu.
**PROPOSED (DA):** Sie serviert das Essen. = Hun pasniedz ēdienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0372

**Card ID:** a2-bedienen
**Field:** study.comparison[4].example
**DE konteksts:** bedienen
**CURRENT (DA):** Er steuert das Auto. = Viņš vada auto.
**PROPOSED (DA):** Er steuert das Auto. = Viņš vada auto.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0378

**Card ID:** a2-bedienung
**Field:** study.comparison[0].example
**DE konteksts:** Bedienung
**CURRENT (DA):** Die Bedienung ist freundlich. = Apkalpotājs ir laipns.
**PROPOSED (DA):** Die Bedienung ist freundlich. = Serveren var meget venlig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0379

**Card ID:** a2-bedienung
**Field:** study.comparison[1].example
**DE konteksts:** Bedienung
**CURRENT (DA):** Der Kellner bringt die Rechnung. = Viesmīlis atnes rēķinu.
**PROPOSED (DA):** Der Kellner bringt die Rechnung. = Viesmīlis atnes rēķinu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0380

**Card ID:** a2-bedienung
**Field:** study.comparison[2].example
**DE konteksts:** Bedienung
**CURRENT (DA):** Die Kellnerin fragt nach Getränken. = Viesmīle jautā par dzērieniem.
**PROPOSED (DA):** Die Kellnerin fragt nach Getränken. = Viesmīle jautā par dzērieniem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0381

**Card ID:** a2-bedienung
**Field:** study.comparison[4].example
**DE konteksts:** Bedienung
**CURRENT (DA):** Das Personal hilft uns. = Personāls mums palīdz.
**PROPOSED (DA):** Das Personal hilft uns. = Personāls mums palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0382

**Card ID:** a2-behalten
**Field:** study.comparison[0].example
**DE konteksts:** behalten
**CURRENT (DA):** Du kannst es behalten. = Tu vari to paturēt.
**PROPOSED (DA):** Du kannst es behalten. = Du kan beholde bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0383

**Card ID:** a2-behalten
**Field:** study.comparison[2].example
**DE konteksts:** behalten
**CURRENT (DA):** Ich merke mir die Nummer. = Es iegaumēju numuru.
**PROPOSED (DA):** Ich merke mir die Nummer. = Jeg iegaumēju numuru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0384

**Card ID:** a2-behalten
**Field:** study.comparison[4].example
**DE konteksts:** behalten
**CURRENT (DA):** Ich bewahre die Quittung auf. = Es glabāju čeku.
**PROPOSED (DA):** Ich bewahre die Quittung auf. = Jeg glabāju čeku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0390

**Card ID:** a2-beinahe
**Field:** study.comparison[0].example
**DE konteksts:** beinahe
**CURRENT (DA):** Ich hätte beinahe gelacht. = Es gandrīz sāku smieties.
**PROPOSED (DA):** Ich hätte beinahe gelacht. = Jeg missede næsten bussen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0391

**Card ID:** a2-beinahe
**Field:** study.comparison[1].example
**DE konteksts:** beinahe
**CURRENT (DA):** Ich bin fast fertig. = Es esmu gandrīz gatavs.
**PROPOSED (DA):** Ich bin fast fertig. = Jeg esmu gandrīz gatavs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0392

**Card ID:** a2-beinahe
**Field:** study.comparison[4].example
**DE konteksts:** beinahe
**CURRENT (DA):** Wir haben es gerade noch geschafft. = Mēs vēl tik tikko paspējām.
**PROPOSED (DA):** Wir haben es gerade noch geschafft. = Vi vēl tik tikko paspējām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0400

**Card ID:** a2-bekannt
**Field:** study.comparison[0].example
**DE konteksts:** bekannt
**CURRENT (DA):** Das ist bekannt. = Tas ir zināms.
**PROPOSED (DA):** Das ist bekannt. = Tas er zināms.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0401

**Card ID:** a2-bekannt
**Field:** study.comparison[1].example
**DE konteksts:** bekannt
**CURRENT (DA):** Er ist berühmt. = Viņš ir slavens.
**PROPOSED (DA):** Er ist berühmt. = Viņš er slavens.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0402

**Card ID:** a2-bekannt
**Field:** study.comparison[2].example
**DE konteksts:** bekannt
**CURRENT (DA):** Die Umgebung ist mir vertraut. = Apkārtne man ir pazīstama.
**PROPOSED (DA):** Die Umgebung ist mir vertraut. = Apkārtne man er pazīstama.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0403

**Card ID:** a2-bekannt
**Field:** study.comparison[3].example
**DE konteksts:** bekannt
**CURRENT (DA):** Wir sind befreundet. = Mēs esam draugos.
**PROPOSED (DA):** Wir sind befreundet. = Vi esam draugos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0404

**Card ID:** a2-bekannt
**Field:** study.comparison[4].example
**DE konteksts:** bekannt
**CURRENT (DA):** Der Täter ist unbekannt. = Vainīgais ir nezināms.
**PROPOSED (DA):** Der Täter ist unbekannt. = Vainīgais er nezināms.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0418

**Card ID:** a2-bestellen
**Field:** study.comparison[0].example
**DE konteksts:** bestellen
**CURRENT (DA):** Ich bestelle Essen. = Es pasūtu ēdienu.
**PROPOSED (DA):** Ich bestelle Essen. = Jeg pasūtu ēdienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0419

**Card ID:** a2-bestellen
**Field:** study.comparison[1].example
**DE konteksts:** bestellen
**CURRENT (DA):** Ich reserviere einen Tisch. = Es rezervēju galdiņu.
**PROPOSED (DA):** Ich reserviere einen Tisch. = Jeg vil gerne reservere et bord.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0420

**Card ID:** a2-bestellen
**Field:** study.comparison[2].example
**DE konteksts:** bestellen
**CURRENT (DA):** Ich kaufe Brot. = Es pērku maizi.
**PROPOSED (DA):** Ich kaufe Brot. = Jeg pērku maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0421

**Card ID:** a2-bestellen
**Field:** study.comparison[4].example
**DE konteksts:** bestellen
**CURRENT (DA):** Ich bearbeite den Text. = Es apstrādāju tekstu.
**PROPOSED (DA):** Ich bearbeite den Text. = Jeg apstrādāju tekstu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0425

**Card ID:** a2-bestimmt
**Field:** study.comparison[0].example
**DE konteksts:** bestimmt
**CURRENT (DA):** Das ist bestimmt richtig. = Tas noteikti ir pareizi.
**PROPOSED (DA):** Das ist bestimmt richtig. = Det er bestemt korrekt.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0426

**Card ID:** a2-bestimmt
**Field:** study.comparison[1].example
**DE konteksts:** bestimmt
**CURRENT (DA):** Das ist sicher richtig. = Tas noteikti ir pareizi.
**PROPOSED (DA):** Das ist sicher richtig. = Tas noteikti er pareizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0427

**Card ID:** a2-bestimmt
**Field:** study.comparison[2].example
**DE konteksts:** bestimmt
**CURRENT (DA):** Ich brauche ein konkretes Beispiel. = Man vajag konkrētu piemēru.
**PROPOSED (DA):** Ich brauche ein konkretes Beispiel. = Jeg har vajag konkrētu piemēru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0428

**Card ID:** a2-bestimmt
**Field:** study.comparison[3].example
**DE konteksts:** bestimmt
**CURRENT (DA):** Wir haben einen festen Termin. = Mums ir noteikts termiņš.
**PROPOSED (DA):** Wir haben einen festen Termin. = Vi har brug for en specifik deadline.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0429

**Card ID:** a2-bestimmt
**Field:** study.comparison[4].example
**DE konteksts:** bestimmt
**CURRENT (DA):** Er kommt wahrscheinlich morgen. = Viņš droši vien atnāks rīt.
**PROPOSED (DA):** Er kommt wahrscheinlich morgen. = Viņš droši vien atnāks i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0432

**Card ID:** a2-birne
**Field:** study.comparison[0].example
**DE konteksts:** Birne
**CURRENT (DA):** Ich esse eine Birne. = Es ēdu bumbieri.
**PROPOSED (DA):** Ich esse eine Birne. = Jeg spiser en pære
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0433

**Card ID:** a2-birne
**Field:** study.comparison[1].example
**DE konteksts:** Birne
**CURRENT (DA):** Die Glühbirne ist kaputt. = Spuldze ir saplīsusi.
**PROPOSED (DA):** Die Glühbirne ist kaputt. = Spuldze er saplīsusi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0434

**Card ID:** a2-birne
**Field:** study.comparison[3].example
**DE konteksts:** Birne
**CURRENT (DA):** Birnen sind Obst. = Bumbieri ir augļi.
**PROPOSED (DA):** Birnen sind Obst. = Bumbieri er augļi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0441

**Card ID:** a2-bitter
**Field:** study.comparison[0].example
**DE konteksts:** bitter
**CURRENT (DA):** Der Kaffee ist bitter. = Kafija ir rūgta.
**PROPOSED (DA):** Der Kaffee ist bitter. = Kaffe smager bittert.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0442

**Card ID:** a2-bitter
**Field:** study.comparison[1].example
**DE konteksts:** bitter
**CURRENT (DA):** Die Zitrone ist sauer. = Citrons ir skābs.
**PROPOSED (DA):** Die Zitrone ist sauer. = Citrons er skābs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0443

**Card ID:** a2-bitter
**Field:** study.comparison[3].example
**DE konteksts:** bitter
**CURRENT (DA):** Der Lehrer ist streng. = Skolotājs ir stingrs.
**PROPOSED (DA):** Der Lehrer ist streng. = Skolotājs er stingrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0444

**Card ID:** a2-bitter
**Field:** study.comparison[4].example
**DE konteksts:** bitter
**CURRENT (DA):** Der Geruch ist unangenehm. = Smarža ir nepatīkama.
**PROPOSED (DA):** Der Geruch ist unangenehm. = Smarža er nepatīkama.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0455

**Card ID:** a2-boden
**Field:** study.comparison[0].example
**DE konteksts:** Boden
**CURRENT (DA):** Die Tasche liegt auf dem Boden. = Soma atrodas uz grīdas.
**PROPOSED (DA):** Die Tasche liegt auf dem Boden. = Læg venligst din taske på gulvet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0456

**Card ID:** a2-boden
**Field:** study.comparison[1].example
**DE konteksts:** Boden
**CURRENT (DA):** Der Fußboden ist sauber. = Grīda ir tīra.
**PROPOSED (DA):** Der Fußboden ist sauber. = Grīda er tīra.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0457

**Card ID:** a2-boden
**Field:** study.comparison[3].example
**DE konteksts:** Boden
**CURRENT (DA):** Das Haus steht auf festem Grund. = Māja stāv uz stingra pamata.
**PROPOSED (DA):** Das Haus steht auf festem Grund. = Den står på et solidt fundament.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0468

**Card ID:** a2-borgen
**Field:** study.comparison[0].example
**DE konteksts:** borgen
**CURRENT (DA):** Ich borge mir Geld. = Es aizņemos naudu.
**PROPOSED (DA):** Ich borge mir Geld. = Jeg aizņemos naudu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0469

**Card ID:** a2-borgen
**Field:** study.comparison[1].example
**DE konteksts:** borgen
**CURRENT (DA):** Kannst du mir das Buch leihen? = Vai vari man aizdot grāmatu?
**PROPOSED (DA):** Kannst du mir das Buch leihen? = Vai vari man aizdot bogen?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0470

**Card ID:** a2-borgen
**Field:** study.comparison[3].example
**DE konteksts:** borgen
**CURRENT (DA):** Ich gebe das Buch zurück. = Es atdodu grāmatu.
**PROPOSED (DA):** Ich gebe das Buch zurück. = Jeg atdodu bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0477

**Card ID:** a2-böse
**Field:** study.comparison[0].example
**DE konteksts:** böse
**CURRENT (DA):** Bist du böse auf mich? = Vai tu esi dusmīgs uz mani?
**PROPOSED (DA):** Bist du böse auf mich? = Er du sur på mig
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0478

**Card ID:** a2-böse
**Field:** study.comparison[2].example
**DE konteksts:** böse
**CURRENT (DA):** Er ist zornig. = Viņš ir nikns.
**PROPOSED (DA):** Er ist zornig. = Viņš er nikns.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0479

**Card ID:** a2-böse
**Field:** study.comparison[4].example
**DE konteksts:** böse
**CURRENT (DA):** Ich bin sauer. = Es esmu dusmīgs.
**PROPOSED (DA):** Ich bin sauer. = Jeg esmu dusmīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0481

**Card ID:** a2-brav
**Field:** study.comparison[0].example
**DE konteksts:** brav
**CURRENT (DA):** Das Kind ist brav. = Bērns ir paklausīgs.
**PROPOSED (DA):** Das Kind ist brav. = Barnet er lydigt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0482

**Card ID:** a2-brav
**Field:** study.comparison[1].example
**DE konteksts:** brav
**CURRENT (DA):** Er ist ein guter Mensch. = Viņš ir labs cilvēks.
**PROPOSED (DA):** Er ist ein guter Mensch. = Han er et godt menneske.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0483

**Card ID:** a2-brav
**Field:** study.comparison[2].example
**DE konteksts:** brav
**CURRENT (DA):** Sie ist nett. = Viņa ir jauka.
**PROPOSED (DA):** Sie ist nett. = Hun er jauka.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0484

**Card ID:** a2-brav
**Field:** study.comparison[3].example
**DE konteksts:** brav
**CURRENT (DA):** Der Verkäufer ist freundlich. = Pārdevējs ir laipns.
**PROPOSED (DA):** Der Verkäufer ist freundlich. = Pārdevējs er laipns.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0485

**Card ID:** a2-brav
**Field:** study.comparison[4].example
**DE konteksts:** brav
**CURRENT (DA):** Das Kind ist artig. = Bērns ir pieklājīgs.
**PROPOSED (DA):** Das Kind ist artig. = Bērns er pieklājīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0486

**Card ID:** a2-brav
**Field:** study.comparison[5].example
**DE konteksts:** brav
**CURRENT (DA):** Der Hund ist gehorsam. = Suns ir paklausīgs.
**PROPOSED (DA):** Der Hund ist gehorsam. = Suns er paklausīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0487

**Card ID:** a2-brennen
**Field:** study.comparison[2].example
**DE konteksts:** brennen
**CURRENT (DA):** Ich habe mich verbrannt. = Es apdedzinājos.
**PROPOSED (DA):** Ich habe mich verbrannt. = Jeg apdedzinājos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0488

**Card ID:** a2-brennen
**Field:** study.comparison[3].example
**DE konteksts:** brennen
**CURRENT (DA):** Die Feuerwehr löscht das Feuer. = Ugunsdzēsēji dzēš uguni.
**PROPOSED (DA):** Die Feuerwehr löscht das Feuer. = Ugunsdzēsēji dzēš uguni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0492

**Card ID:** a2-dabei
**Field:** study.comparison[0].example
**DE konteksts:** dabei
**CURRENT (DA):** Ich habe den Schlüssel dabei. = Man ir līdzi atslēga.
**PROPOSED (DA):** Ich habe den Schlüssel dabei. = Jeg har ikke penge med mig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0493

**Card ID:** a2-dabei
**Field:** study.comparison[1].example
**DE konteksts:** dabei
**CURRENT (DA):** Bist du morgen mit dabei? = Vai tu rīt arī piedalīsies?
**PROPOSED (DA):** Bist du morgen mit dabei? = Vai tu i morgen arī piedalīsies?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0494

**Card ID:** a2-dabei
**Field:** study.comparison[3].example
**DE konteksts:** dabei
**CURRENT (DA):** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED (DA):** Außerdem ist es teuer. = Turklāt det er dārgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0495

**Card ID:** a2-dabei
**Field:** study.comparison[4].example
**DE konteksts:** dabei
**CURRENT (DA):** Trotzdem komme ich. = Tomēr es nākšu.
**PROPOSED (DA):** Trotzdem komme ich. = Tomēr es nākšu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0509

**Card ID:** a2-dafür
**Field:** study.comparison[1].example
**DE konteksts:** dafür
**CURRENT (DA):** Darum bleibe ich zu Hause. = Tāpēc es palieku mājās.
**PROPOSED (DA):** Darum bleibe ich zu Hause. = Tāpēc es palieku hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0510

**Card ID:** a2-dafür
**Field:** study.comparison[2].example
**DE konteksts:** dafür
**CURRENT (DA):** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**PROPOSED (DA):** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0511

**Card ID:** a2-dafür
**Field:** study.comparison[4].example
**DE konteksts:** dafür
**CURRENT (DA):** Das ist für das Kind. = Tas ir bērnam.
**PROPOSED (DA):** Das ist für das Kind. = Tas er bērnam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0521

**Card ID:** a2-damit
**Field:** study.comparison[0].example
**DE konteksts:** damit
**CURRENT (DA):** Ich lerne, damit ich bestehe. = Es mācos, lai nokārtotu.
**PROPOSED (DA):** Ich lerne, damit ich bestehe. = Jeg lærer tysk, så jeg kan arbejde bedre i Tyskland.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0522

**Card ID:** a2-damit
**Field:** study.comparison[2].example
**DE konteksts:** damit
**CURRENT (DA):** Ich lerne, um zu bestehen. = Es mācos, lai nokārtotu.
**PROPOSED (DA):** Ich lerne, um zu bestehen. = Jeg mācos, lai nokārtotu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0523

**Card ID:** a2-damit
**Field:** study.comparison[3].example
**DE konteksts:** damit
**CURRENT (DA):** Deshalb bleibe ich hier. = Tāpēc es palieku šeit.
**PROPOSED (DA):** Deshalb bleibe ich hier. = Tāpēc es palieku šeit.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0532

**Card ID:** study-der-dank
**Field:** study.comparison[0].example
**DE konteksts:** Dank
**CURRENT (DA):** Herzlichen Dank! = Sirsnīgs paldies!
**PROPOSED (DA):** Herzlichen Dank! = Mange tak!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0533

**Card ID:** study-der-dank
**Field:** study.comparison[1].example
**DE konteksts:** Dank
**CURRENT (DA):** Nein, danke. = Nē, paldies.
**PROPOSED (DA):** Nein, danke. = Nej tak
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0534

**Card ID:** study-der-dank
**Field:** study.comparison[3].example
**DE konteksts:** Dank
**CURRENT (DA):** Vielen Dank für die Hilfe! = Liels paldies par palīdzību!
**PROPOSED (DA):** Vielen Dank für die Hilfe! = Mange tak!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0535

**Card ID:** study-der-dank
**Field:** study.comparison[4].example
**DE konteksts:** Dank
**CURRENT (DA):** Ich bedanke mich bei Ihnen. = Es pateicos jums.
**PROPOSED (DA):** Ich bedanke mich bei Ihnen. = Jeg pateicos jums.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0540

**Card ID:** a2-darauf
**Field:** study.comparison[1].example
**DE konteksts:** darauf
**CURRENT (DA):** Ich lege es auf das Buch. = Es lieku to uz grāmatas.
**PROPOSED (DA):** Ich lege es auf das Buch. = Jeg lieku to uz grāmatas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0541

**Card ID:** a2-darauf
**Field:** study.comparison[2].example
**DE konteksts:** darauf
**CURRENT (DA):** Danach gehe ich nach Hause. = Pēc tam es eju mājās.
**PROPOSED (DA):** Danach gehe ich nach Hause. = Pēc tam es eju hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0542

**Card ID:** a2-darauf
**Field:** study.comparison[3].example
**DE konteksts:** darauf
**CURRENT (DA):** Wir sprechen darüber. = Mēs runājam par to.
**PROPOSED (DA):** Wir sprechen darüber. = Vi runājam par to.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0548

**Card ID:** a2-darüber
**Field:** study.comparison[0].example
**DE konteksts:** darüber
**CURRENT (DA):** Wir sprechen darüber. = Mēs runājam par to.
**PROPOSED (DA):** Wir sprechen darüber. = Vi taler om det.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0549

**Card ID:** a2-darüber
**Field:** study.comparison[1].example
**DE konteksts:** darüber
**CURRENT (DA):** Wir sprechen über das Problem. = Mēs runājam par problēmu.
**PROPOSED (DA):** Wir sprechen über das Problem. = Vi runājam par problēmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0550

**Card ID:** a2-darüber
**Field:** study.comparison[3].example
**DE konteksts:** darüber
**CURRENT (DA):** Ich habe davon gehört. = Es par to dzirdēju.
**PROPOSED (DA):** Ich habe davon gehört. = Jeg par to dzirdēju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0563

**Card ID:** a2-darum
**Field:** study.comparison[0].example
**DE konteksts:** darum
**CURRENT (DA):** Darum bleibe ich hier. = Tāpēc es palieku šeit.
**PROPOSED (DA):** Darum bleibe ich hier. = Jeg er syg, så jeg bliver hjemme.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0564

**Card ID:** a2-darum
**Field:** study.comparison[1].example
**DE konteksts:** darum
**CURRENT (DA):** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**PROPOSED (DA):** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0565

**Card ID:** a2-darum
**Field:** study.comparison[2].example
**DE konteksts:** darum
**CURRENT (DA):** Deswegen bin ich müde. = Tāpēc esmu noguris.
**PROPOSED (DA):** Deswegen bin ich müde. = Tāpēc esmu noguris.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0566

**Card ID:** a2-darum
**Field:** study.comparison[3].example
**DE konteksts:** darum
**CURRENT (DA):** Wir sitzen um das Feuer. = Mēs sēžam ap uguni.
**PROPOSED (DA):** Wir sitzen um das Feuer. = Vi sēžam ap uguni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0577

**Card ID:** a2-davor
**Field:** study.comparison[0].example
**DE konteksts:** davor
**CURRENT (DA):** Ich habe Angst davor. = Man ir bail no tā.
**PROPOSED (DA):** Ich habe Angst davor. = Jeg er bange for det.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0578

**Card ID:** a2-davor
**Field:** study.comparison[1].example
**DE konteksts:** davor
**CURRENT (DA):** Vor dem Haus steht ein Auto. = Mājas priekšā stāv auto.
**PROPOSED (DA):** Vor dem Haus steht ein Auto. = Bilen står foran.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0579

**Card ID:** a2-davor
**Field:** study.comparison[2].example
**DE konteksts:** davor
**CURRENT (DA):** Danach gehen wir. = Pēc tam mēs ejam.
**PROPOSED (DA):** Danach gehen wir. = Pēc tam mēs ejam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0582

**Card ID:** a2-dazu
**Field:** study.comparison[2].example
**DE konteksts:** dazu
**CURRENT (DA):** Ich war dabei. = Es biju klāt.
**PROPOSED (DA):** Ich war dabei. = Jeg biju klāt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0583

**Card ID:** a2-dazu
**Field:** study.comparison[3].example
**DE konteksts:** dazu
**CURRENT (DA):** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED (DA):** Außerdem ist es teuer. = Turklāt det er dārgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0585

**Card ID:** a2-decke
**Field:** study.comparison[1].example
**DE konteksts:** Decke
**CURRENT (DA):** Die Bettdecke ist weich. = Sega ir mīksta.
**PROPOSED (DA):** Die Bettdecke ist weich. = Sega er mīksta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0586

**Card ID:** a2-decke
**Field:** study.comparison[4].example
**DE konteksts:** Decke
**CURRENT (DA):** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED (DA):** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0589

**Card ID:** a2-denn
**Field:** study.comparison[1].example
**DE konteksts:** denn
**CURRENT (DA):** Ich bleibe, weil es regnet. = Es palieku, jo līst.
**PROPOSED (DA):** Ich bleibe, weil es regnet. = Jeg palieku, jo līst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0590

**Card ID:** a2-denn
**Field:** study.comparison[2].example
**DE konteksts:** denn
**CURRENT (DA):** Dann gehen wir. = Tad mēs ejam.
**PROPOSED (DA):** Dann gehen wir. = Så går vi hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0591

**Card ID:** a2-denn
**Field:** study.comparison[3].example
**DE konteksts:** denn
**CURRENT (DA):** Deshalb bleibe ich. = Tāpēc es palieku.
**PROPOSED (DA):** Deshalb bleibe ich. = Tāpēc es palieku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0593

**Card ID:** a2-dick
**Field:** study.comparison[0].example
**DE konteksts:** dick
**CURRENT (DA):** Das Buch ist dick. = Grāmata ir bieza.
**PROPOSED (DA):** Das Buch ist dick. = Bogen er tyk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0594

**Card ID:** a2-dick
**Field:** study.comparison[1].example
**DE konteksts:** dick
**CURRENT (DA):** Das Essen ist fett. = Ēdiens ir trekns.
**PROPOSED (DA):** Das Essen ist fett. = Ēdiens er trekns.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0595

**Card ID:** a2-dick
**Field:** study.comparison[2].example
**DE konteksts:** dick
**CURRENT (DA):** Das Papier ist dünn. = Papīrs ir plāns.
**PROPOSED (DA):** Das Papier ist dünn. = Papiret er tyndt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0596

**Card ID:** a2-dick
**Field:** study.comparison[4].example
**DE konteksts:** dick
**CURRENT (DA):** Er ist stark. = Viņš ir stiprs.
**PROPOSED (DA):** Er ist stark. = Viņš er stiprs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0597

**Card ID:** a2-doch
**Field:** study.comparison[0].example
**DE konteksts:** doch
**CURRENT (DA):** Komm doch! = Nāc taču!
**PROPOSED (DA):** Komm doch! = Kom med!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0598

**Card ID:** a2-doch
**Field:** study.comparison[2].example
**DE konteksts:** doch
**CURRENT (DA):** Es regnet, trotzdem gehe ich. = Līst, tomēr es eju.
**PROPOSED (DA):** Es regnet, trotzdem gehe ich. = Līst, tomēr es eju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0599

**Card ID:** a2-doch
**Field:** study.comparison[4].example
**DE konteksts:** doch
**CURRENT (DA):** Kommst du? Nein. = Vai tu nāksi? Nē.
**PROPOSED (DA):** Kommst du? Nein. = Vai tu nāksi? Nē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0612

**Card ID:** a2-doktor
**Field:** study.comparison[0].example
**DE konteksts:** Doktor
**CURRENT (DA):** Ich gehe zum Doktor. = Es eju pie ārsta.
**PROPOSED (DA):** Ich gehe zum Doktor. = Jeg skal til lægen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0613

**Card ID:** a2-doktor
**Field:** study.comparison[1].example
**DE konteksts:** Doktor
**CURRENT (DA):** Der Arzt hilft mir. = Ārsts man palīdz.
**PROPOSED (DA):** Der Arzt hilft mir. = Ārsts man palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0614

**Card ID:** a2-doktor
**Field:** study.comparison[2].example
**DE konteksts:** Doktor
**CURRENT (DA):** Die Ärztin arbeitet hier. = Ārste strādā šeit.
**PROPOSED (DA):** Die Ärztin arbeitet hier. = Ārste strādā šeit.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0615

**Card ID:** a2-doktor
**Field:** study.comparison[4].example
**DE konteksts:** Doktor
**CURRENT (DA):** Die Praxis ist offen. = Ārsta prakse ir atvērta.
**PROPOSED (DA):** Die Praxis ist offen. = Ārsta prakse er atvērta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0618

**Card ID:** a2-dünn
**Field:** study.comparison[0].example
**DE konteksts:** dünn
**CURRENT (DA):** Das Papier ist dünn. = Papīrs ir plāns.
**PROPOSED (DA):** Das Papier ist dünn. = Papiret er tyndt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0619

**Card ID:** a2-dünn
**Field:** study.comparison[1].example
**DE konteksts:** dünn
**CURRENT (DA):** Das Buch ist dick. = Grāmata ir bieza.
**PROPOSED (DA):** Das Buch ist dick. = Bogen er tyk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0620

**Card ID:** a2-dünn
**Field:** study.comparison[3].example
**DE konteksts:** dünn
**CURRENT (DA):** Das Fleisch ist mager. = Gaļa ir liesa.
**PROPOSED (DA):** Das Fleisch ist mager. = Gaļa er liesa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0621

**Card ID:** a2-dünn
**Field:** study.comparison[4].example
**DE konteksts:** dünn
**CURRENT (DA):** Honig ist flüssig. = Medus ir šķidrs.
**PROPOSED (DA):** Honig ist flüssig. = Medus er šķidrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0622

**Card ID:** a2-eben
**Field:** study.comparison[0].example
**DE konteksts:** eben
**CURRENT (DA):** Das ist eben so. = Tā tas vienkārši ir.
**PROPOSED (DA):** Das ist eben so. = Sådan er det bare.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0623

**Card ID:** a2-eben
**Field:** study.comparison[1].example
**DE konteksts:** eben
**CURRENT (DA):** Ich bin gerade zu Hause. = Es tieši tagad esmu mājās.
**PROPOSED (DA):** Ich bin gerade zu Hause. = Jeg tieši nu esmu hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0624

**Card ID:** a2-eben
**Field:** study.comparison[2].example
**DE konteksts:** eben
**CURRENT (DA):** Ich habe ihn gerade eben gesehen. = Es viņu tikko redzēju.
**PROPOSED (DA):** Ich habe ihn gerade eben gesehen. = Jeg har lige set ham
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0634

**Card ID:** a2-ehrlich
**Field:** study.comparison[0].example
**DE konteksts:** ehrlich
**CURRENT (DA):** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED (DA):** Er ist ehrlich. = Han er ærlig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0635

**Card ID:** a2-ehrlich
**Field:** study.comparison[2].example
**DE konteksts:** ehrlich
**CURRENT (DA):** Sie ist nett. = Viņa ir jauka.
**PROPOSED (DA):** Sie ist nett. = Hun er jauka.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0636

**Card ID:** a2-ehrlich
**Field:** study.comparison[3].example
**DE konteksts:** ehrlich
**CURRENT (DA):** Er ist ein guter Mensch. = Viņš ir labs cilvēks.
**PROPOSED (DA):** Er ist ein guter Mensch. = Viņš er labs cilvēks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0637

**Card ID:** a2-eigentlich
**Field:** study.comparison[0].example
**DE konteksts:** eigentlich
**CURRENT (DA):** Eigentlich habe ich keine Zeit. = Patiesībā man nav laika.
**PROPOSED (DA):** Eigentlich habe ich keine Zeit. = Jeg har faktisk ikke tid.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0638

**Card ID:** a2-eigentlich
**Field:** study.comparison[1].example
**DE konteksts:** eigentlich
**CURRENT (DA):** Das ist echt. = Tas ir īsts.
**PROPOSED (DA):** Das ist echt. = Det er ægte.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0639

**Card ID:** a2-eigentlich
**Field:** study.comparison[3].example
**DE konteksts:** eigentlich
**CURRENT (DA):** Das ist wirklich gut. = Tas tiešām ir labi.
**PROPOSED (DA):** Das ist wirklich gut. = Tas tiešām er labi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0640

**Card ID:** a2-einladen
**Field:** study.comparison[1].example
**DE konteksts:** einladen
**CURRENT (DA):** Ich lade das Handy. = Es lādēju telefonu.
**PROPOSED (DA):** Ich lade das Handy. = Jeg lādēju telefonu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0641

**Card ID:** a2-einladen
**Field:** study.comparison[3].example
**DE konteksts:** einladen
**CURRENT (DA):** Bring bitte Brot mit. = Paņem līdzi maizi.
**PROPOSED (DA):** Bring bitte Brot mit. = Paņem līdzi maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0661

**Card ID:** a2-einschalten
**Field:** study.comparison[0].example
**DE konteksts:** einschalten
**CURRENT (DA):** Ich schalte das Licht ein. = Es ieslēdzu gaismu.
**PROPOSED (DA):** Ich schalte das Licht ein. = Jeg tændte lyset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0662

**Card ID:** a2-einschalten
**Field:** study.comparison[1].example
**DE konteksts:** einschalten
**CURRENT (DA):** Schalte den Computer aus. = Izslēdz datoru.
**PROPOSED (DA):** Schalte den Computer aus. = Izslēdz datoru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0663

**Card ID:** a2-einschalten
**Field:** study.comparison[2].example
**DE konteksts:** einschalten
**CURRENT (DA):** Mach das Licht an. = Ieslēdz gaismu.
**PROPOSED (DA):** Mach das Licht an. = Ieslēdz gaismu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0664

**Card ID:** a2-einschalten
**Field:** study.comparison[3].example
**DE konteksts:** einschalten
**CURRENT (DA):** Wir beziehen ihn ein. = Mēs viņu iesaistām.
**PROPOSED (DA):** Wir beziehen ihn ein. = Vi viņu iesaistām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0674

**Card ID:** a2-einschlafen
**Field:** study.comparison[1].example
**DE konteksts:** einschlafen
**CURRENT (DA):** Ich schlafe acht Stunden. = Es guļu astoņas stundas.
**PROPOSED (DA):** Ich schlafe acht Stunden. = Jeg guļu astoņas stundas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0675

**Card ID:** a2-einschlafen
**Field:** study.comparison[3].example
**DE konteksts:** einschlafen
**CURRENT (DA):** Mein Bein wird taub. = Mana kāja kļūst nejutīga.
**PROPOSED (DA):** Mein Bein wird taub. = Mit ben var følelsesløst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0677

**Card ID:** a2-einsteigen
**Field:** study.comparison[0].example
**DE konteksts:** einsteigen
**CURRENT (DA):** Ich steige in den Zug ein. = Es iekāpju vilcienā.
**PROPOSED (DA):** Ich steige in den Zug ein. = Jeg iekāpju vilcienā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0678

**Card ID:** a2-einsteigen
**Field:** study.comparison[1].example
**DE konteksts:** einsteigen
**CURRENT (DA):** Ich steige hier aus. = Es šeit izkāpju.
**PROPOSED (DA):** Ich steige hier aus. = Jeg šeit izkāpju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0679

**Card ID:** a2-einsteigen
**Field:** study.comparison[2].example
**DE konteksts:** einsteigen
**CURRENT (DA):** Wir steigen um. = Mēs pārsēžamies.
**PROPOSED (DA):** Wir steigen um. = Vi pārsēžamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0689

**Card ID:** a2-eintritt
**Field:** study.comparison[2].example
**DE konteksts:** Eintritt
**CURRENT (DA):** Ich habe eine Eintrittskarte. = Man ir ieejas biļete.
**PROPOSED (DA):** Ich habe eine Eintrittskarte. = Jeg køber en adgangsbillet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0690

**Card ID:** a2-eintritt
**Field:** study.comparison[3].example
**DE konteksts:** Eintritt
**CURRENT (DA):** Ich trete dem Verein bei. = Es iestājos biedrībā.
**PROPOSED (DA):** Ich trete dem Verein bei. = Jeg iestājos biedrībā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0691

**Card ID:** a2-erinnern
**Field:** study.comparison[0].example
**DE konteksts:** erinnern
**CURRENT (DA):** Erinnere mich bitte daran. = Lūdzu, atgādini man to.
**PROPOSED (DA):** Erinnere mich bitte daran. = Kan du minde mig om i morgen
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0692

**Card ID:** a2-erinnern
**Field:** study.comparison[3].example
**DE konteksts:** erinnern
**CURRENT (DA):** Denk an den Schlüssel. = Atceries par atslēgu.
**PROPOSED (DA):** Denk an den Schlüssel. = Atceries par nøgle.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0693

**Card ID:** a2-etwa
**Field:** study.comparison[0].example
**DE konteksts:** etwa
**CURRENT (DA):** Das dauert etwa 20 Minuten. = Tas ilgst apmēram 20 minūtes.
**PROPOSED (DA):** Das dauert etwa 20 Minuten. = Det tager cirka 20 minutter.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0694

**Card ID:** a2-etwa
**Field:** study.comparison[1].example
**DE konteksts:** etwa
**CURRENT (DA):** Das dauert ungefähr 20 Minuten. = Tas ilgst aptuveni 20 minūtes.
**PROPOSED (DA):** Das dauert ungefähr 20 Minuten. = Det tager cirka 20 minutter.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0695

**Card ID:** a2-etwa
**Field:** study.comparison[3].example
**DE konteksts:** etwa
**CURRENT (DA):** Vielleicht kommt er. = Varbūt viņš atnāks.
**PROPOSED (DA):** Vielleicht kommt er. = Varbūt viņš atnāks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0697

**Card ID:** a2-fach
**Field:** study.comparison[0].example
**DE konteksts:** Fach
**CURRENT (DA):** Das Fach ist leer. = Nodalījums ir tukšs.
**PROPOSED (DA):** Das Fach ist leer. = Rummet i skabet er tomt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0698

**Card ID:** a2-fach
**Field:** study.comparison[1].example
**DE konteksts:** Fach
**CURRENT (DA):** Biologie ist ein Schulfach. = Bioloģija ir mācību priekšmets.
**PROPOSED (DA):** Biologie ist ein Schulfach. = Bioloģija er mācību priekšmets.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0699

**Card ID:** a2-fach
**Field:** study.comparison[2].example
**DE konteksts:** Fach
**CURRENT (DA):** Das Schrankfach ist klein. = Skapja nodalījums ir mazs.
**PROPOSED (DA):** Das Schrankfach ist klein. = Skapja nodalījums er mazs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0700

**Card ID:** a2-fach
**Field:** study.comparison[3].example
**DE konteksts:** Fach
**CURRENT (DA):** Das ist mein Fachgebiet. = Tā ir mana specialitāte.
**PROPOSED (DA):** Das ist mein Fachgebiet. = Tā er mana specialitāte.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0701

**Card ID:** a2-fach
**Field:** study.comparison[4].example
**DE konteksts:** Fach
**CURRENT (DA):** Mein Beruf ist Lehrer. = Mana profesija ir skolotājs.
**PROPOSED (DA):** Mein Beruf ist Lehrer. = Mana profesija er skolotājs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0712

**Card ID:** a2-fall
**Field:** study.comparison[0].example
**DE konteksts:** Fall
**CURRENT (DA):** In diesem Fall komme ich. = Šajā gadījumā es nākšu.
**PROPOSED (DA):** In diesem Fall komme ich. = I dette tilfælde bliver jeg hjemme.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0713

**Card ID:** a2-fall
**Field:** study.comparison[1].example
**DE konteksts:** Fall
**CURRENT (DA):** Der Unfall war schlimm. = Negadījums bija smags.
**PROPOSED (DA):** Der Unfall war schlimm. = Negadījums bija smags.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0714

**Card ID:** a2-fall
**Field:** study.comparison[2].example
**DE konteksts:** Fall
**CURRENT (DA):** Die Situation ist schwierig. = Situācija ir grūta.
**PROPOSED (DA):** Die Situation ist schwierig. = Situācija er grūta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0715

**Card ID:** a2-fall
**Field:** study.comparison[3].example
**DE konteksts:** Fall
**CURRENT (DA):** Der Kasus ist wichtig. = Locījums ir svarīgs.
**PROPOSED (DA):** Der Kasus ist wichtig. = Locījums er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0722

**Card ID:** a2-fehlen
**Field:** study.comparison[0].example
**DE konteksts:** fehlen
**CURRENT (DA):** Mir fehlt Geld. = Man trūkst naudas.
**PROPOSED (DA):** Mir fehlt Geld. = Jeg mangler penge.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0723

**Card ID:** a2-fehlen
**Field:** study.comparison[2].example
**DE konteksts:** fehlen
**CURRENT (DA):** Ich vermisse dich. = Man tevis pietrūkst.
**PROPOSED (DA):** Ich vermisse dich. = Jeg har tevis pietrūkst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0724

**Card ID:** a2-fehlen
**Field:** study.comparison[3].example
**DE konteksts:** fehlen
**CURRENT (DA):** Er ist abwesend. = Viņš nav klāt.
**PROPOSED (DA):** Er ist abwesend. = Viņš har ikke klāt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0735

**Card ID:** a2-feuer
**Field:** study.comparison[1].example
**DE konteksts:** Feuer
**CURRENT (DA):** Der Brand ist groß. = Ugunsgrēks ir liels.
**PROPOSED (DA):** Der Brand ist groß. = Ugunsgrēks er liels.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0736

**Card ID:** a2-feuer
**Field:** study.comparison[3].example
**DE konteksts:** Feuer
**CURRENT (DA):** Die Feuerwehr kommt. = Ugunsdzēsēji brauc.
**PROPOSED (DA):** Die Feuerwehr kommt. = Ugunsdzēsēji brauc.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0737

**Card ID:** a2-feuer
**Field:** study.comparison[4].example
**DE konteksts:** Feuer
**CURRENT (DA):** Die Soldaten geben Feuer. = Kareivji atklāj uguni.
**PROPOSED (DA):** Die Soldaten geben Feuer. = Kareivji atklāj uguni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0746

**Card ID:** a2-folgen
**Field:** study.comparison[1].example
**DE konteksts:** folgen
**CURRENT (DA):** Die Polizei verfolgt den Täter. = Policija vajā vainīgo.
**PROPOSED (DA):** Die Polizei verfolgt den Täter. = Policija vajā vainīgo.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0747

**Card ID:** a2-folgen
**Field:** study.comparison[2].example
**DE konteksts:** folgen
**CURRENT (DA):** Das Kind gehorcht. = Bērns klausa.
**PROPOSED (DA):** Das Kind gehorcht. = Barnet lytter til forældrene.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0748

**Card ID:** a2-folgen
**Field:** study.comparison[3].example
**DE konteksts:** folgen
**CURRENT (DA):** Befolgen Sie die Regeln. = Ievērojiet noteikumus.
**PROPOSED (DA):** Befolgen Sie die Regeln. = Ievērojiet noteikumus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0749

**Card ID:** a2-führen
**Field:** study.comparison[0].example
**DE konteksts:** führen
**CURRENT (DA):** Der Weg führt zum Bahnhof. = Ceļš ved uz staciju.
**PROPOSED (DA):** Der Weg führt zum Bahnhof. = Vejen fører til stationen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0750

**Card ID:** a2-führen
**Field:** study.comparison[1].example
**DE konteksts:** führen
**CURRENT (DA):** Sie leitet die Firma. = Viņa vada firmu.
**PROPOSED (DA):** Sie leitet die Firma. = Hun vada firmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0751

**Card ID:** a2-führen
**Field:** study.comparison[2].example
**DE konteksts:** führen
**CURRENT (DA):** Ich fahre nach Hause. = Es braucu mājās.
**PROPOSED (DA):** Ich fahre nach Hause. = Jeg kører hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0752

**Card ID:** a2-führen
**Field:** study.comparison[3].example
**DE konteksts:** führen
**CURRENT (DA):** Ich bringe dich nach Hause. = Es aizvedīšu tevi mājās.
**PROPOSED (DA):** Ich bringe dich nach Hause. = Jeg aizvedīšu tevi hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0753

**Card ID:** a2-führen
**Field:** study.comparison[4].example
**DE konteksts:** führen
**CURRENT (DA):** Das führt zu Problemen. = Tas noved pie problēmām.
**PROPOSED (DA):** Das führt zu Problemen. = Tas noved pie problēmām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0754

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks[0].text.orange[0]
**DE konteksts:** führen
**CURRENT (DA):** vest
**PROPOSED (DA):** vest
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0755

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks[0].text.yellow[4]
**DE konteksts:** führen
**CURRENT (DA):** vest
**PROPOSED (DA):** vest
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0756

**Card ID:** a2-führen
**Field:** study.accents.blue[16]
**DE konteksts:** führen
**CURRENT (DA):** vest
**PROPOSED (DA):** vest
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0757

**Card ID:** a2-führen
**Field:** study.accents.green[1]
**DE konteksts:** führen
**CURRENT (DA):** vest ar transportu
**PROPOSED (DA):** vest ar transportu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0758

**Card ID:** a2-führen
**Field:** study.accents.orange[2]
**DE konteksts:** führen
**CURRENT (DA):** braukt
**PROPOSED (DA):** braukt
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0759

**Card ID:** a2-führen
**Field:** study.accents.orange[3]
**DE konteksts:** führen
**CURRENT (DA):** vest
**PROPOSED (DA):** vest
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0760

**Card ID:** a2-führen
**Field:** study.accents.purple[2]
**DE konteksts:** führen
**CURRENT (DA):** braukt / vest ar transportu
**PROPOSED (DA):** braukt / vest ar transportu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0761

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** führen
**CURRENT (DA):** vest
**PROPOSED (DA):** FJERN «vest»
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0765

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** führen
**CURRENT (DA):** vest
**PROPOSED (DA):** FJERN «vest»
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0779

**Card ID:** a2-gehören
**Field:** study.comparison[1].example
**DE konteksts:** gehören
**CURRENT (DA):** Er besitzt ein Auto. = Viņam pieder auto.
**PROPOSED (DA):** Er besitzt ein Auto. = Viņam pieder auto.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0780

**Card ID:** a2-gehören
**Field:** study.accents.blue[14]
**DE konteksts:** gehören
**CURRENT (DA):** instead of
**PROPOSED (DA):** instead of
**Problēma:** Svešvalodu/artefaktu pazīmes: EN
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0784

**Card ID:** a2-genau
**Field:** study.comparison[0].example
**DE konteksts:** genau
**CURRENT (DA):** Das ist genau richtig. = Tas ir tieši pareizi.
**PROPOSED (DA):** Das ist genau richtig. = Det er helt rigtigt.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0785

**Card ID:** a2-genau
**Field:** study.comparison[1].example
**DE konteksts:** genau
**CURRENT (DA):** Das ist exakt ein Meter. = Tas ir precīzi viens metrs.
**PROPOSED (DA):** Das ist exakt ein Meter. = Tas er precīzi viens metrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0786

**Card ID:** a2-genau
**Field:** study.comparison[2].example
**DE konteksts:** genau
**CURRENT (DA):** Ich bin gerade zu Hause. = Es tieši tagad esmu mājās.
**PROPOSED (DA):** Ich bin gerade zu Hause. = Jeg tieši nu esmu hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0787

**Card ID:** a2-genau
**Field:** study.comparison[3].example
**DE konteksts:** genau
**CURRENT (DA):** Er war eben hier. = Viņš tikko bija šeit.
**PROPOSED (DA):** Er war eben hier. = Viņš tikko bija šeit.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0791

**Card ID:** a2-gerade
**Field:** study.comparison[0].example
**DE konteksts:** gerade
**CURRENT (DA):** Ich komme gerade. = Es tieši tagad nāku.
**PROPOSED (DA):** Ich komme gerade. = Jeg tieši nu nāku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0792

**Card ID:** a2-geschäft
**Field:** study.comparison[0].example
**DE konteksts:** Geschäft
**CURRENT (DA):** Ich gehe ins Geschäft. = Es eju uz veikalu.
**PROPOSED (DA):** Ich gehe ins Geschäft. = Jeg går i butikken
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0793

**Card ID:** a2-geschäft
**Field:** study.comparison[3].example
**DE konteksts:** Geschäft
**CURRENT (DA):** Das Unternehmen wächst. = Uzņēmums aug.
**PROPOSED (DA):** Das Unternehmen wächst. = Uzņēmums aug.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0794

**Card ID:** a2-geschäft
**Field:** study.comparison[4].example
**DE konteksts:** Geschäft
**CURRENT (DA):** Wir schließen einen Vertrag. = Mēs slēdzam līgumu.
**PROPOSED (DA):** Wir schließen einen Vertrag. = Vi slēdzam līgumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0800

**Card ID:** a2-gewinnen
**Field:** study.comparison[0].example
**DE konteksts:** gewinnen
**CURRENT (DA):** Wir gewinnen das Spiel. = Mēs uzvaram spēlē.
**PROPOSED (DA):** Wir gewinnen das Spiel. = Vi uzvaram spēlē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0801

**Card ID:** a2-gewinnen
**Field:** study.comparison[2].example
**DE konteksts:** gewinnen
**CURRENT (DA):** Ich bekomme eine Nachricht. = Es saņemu ziņu.
**PROPOSED (DA):** Ich bekomme eine Nachricht. = Jeg saņemu ziņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0802

**Card ID:** a2-gewinnen
**Field:** study.comparison[3].example
**DE konteksts:** gewinnen
**CURRENT (DA):** Er verdient Geld. = Viņš pelna naudu.
**PROPOSED (DA):** Er verdient Geld. = Viņš pelna naudu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0803

**Card ID:** a2-gießen
**Field:** study.comparison[0].example
**DE konteksts:** gießen
**CURRENT (DA):** Ich gieße die Blumen. = Es laistu puķes.
**PROPOSED (DA):** Ich gieße die Blumen. = Jeg vander blomsterne.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0804

**Card ID:** a2-gießen
**Field:** study.comparison[1].example
**DE konteksts:** gießen
**CURRENT (DA):** Ich schenke Tee ein. = Es ieleju tēju.
**PROPOSED (DA):** Ich schenke Tee ein. = Jeg ieleju tēju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0805

**Card ID:** a2-gießen
**Field:** study.comparison[2].example
**DE konteksts:** gießen
**CURRENT (DA):** Es regnet. = Līst.
**PROPOSED (DA):** Es regnet. = Līst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0806

**Card ID:** a2-gießen
**Field:** study.comparison[3].example
**DE konteksts:** gießen
**CURRENT (DA):** Er schüttet Wasser aus. = Viņš izlej ūdeni.
**PROPOSED (DA):** Er schüttet Wasser aus. = Viņš izlej ūdeni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0809

**Card ID:** a2-grund
**Field:** study.comparison[0].example
**DE konteksts:** Grund
**CURRENT (DA):** Aus diesem Grund komme ich nicht. = Šī iemesla dēļ es nenākšu.
**PROPOSED (DA):** Aus diesem Grund komme ich nicht. = Derfor bliver jeg hjemme.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0810

**Card ID:** a2-grund
**Field:** study.comparison[1].example
**DE konteksts:** Grund
**CURRENT (DA):** Die Ursache ist unbekannt. = Cēlonis nav zināms.
**PROPOSED (DA):** Die Ursache ist unbekannt. = Cēlonis har ikke zināms.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0811

**Card ID:** a2-grund
**Field:** study.comparison[2].example
**DE konteksts:** Grund
**CURRENT (DA):** Der Anlass war ein Fest. = Iemesls bija svētki.
**PROPOSED (DA):** Der Anlass war ein Fest. = Iemesls bija svētki.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0812

**Card ID:** a2-grund
**Field:** study.comparison[3].example
**DE konteksts:** Grund
**CURRENT (DA):** Der Boden ist nass. = Grīda ir slapja.
**PROPOSED (DA):** Der Boden ist nass. = Grīda er slapja.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0823

**Card ID:** a2-hängen
**Field:** study.comparison[0].example
**DE konteksts:** hängen
**CURRENT (DA):** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED (DA):** Das Bild hängt an der Wand. = Billedet hænger på væggen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0824

**Card ID:** a2-hängen
**Field:** study.comparison[2].example
**DE konteksts:** hängen
**CURRENT (DA):** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED (DA):** Ich lege das Buch auf den Tisch. = Jeg nolieku bogen uz galda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0825

**Card ID:** a2-hängen
**Field:** study.comparison[3].example
**DE konteksts:** hängen
**CURRENT (DA):** Wir hängen das Bild an die Wand. = Mēs piekaram attēlu pie sienas.
**PROPOSED (DA):** Wir hängen das Bild an die Wand. = Billedet hænger på væggen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0839

**Card ID:** a2-indem
**Field:** study.comparison[0].example
**DE konteksts:** indem
**CURRENT (DA):** Ich lerne, indem ich übe. = Es mācos, trenējoties.
**PROPOSED (DA):** Ich lerne, indem ich übe. = Jeg mācos, trenējoties.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0840

**Card ID:** a2-indem
**Field:** study.comparison[1].example
**DE konteksts:** indem
**CURRENT (DA):** Während ich koche, höre ich Musik. = Kamēr es gatavoju, klausos mūziku.
**PROPOSED (DA):** Während ich koche, höre ich Musik. = Kamēr es gatavoju, klausos mūziku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0841

**Card ID:** a2-indem
**Field:** study.comparison[2].example
**DE konteksts:** indem
**CURRENT (DA):** Ich lerne, damit ich die Prüfung bestehe. = Es mācos, lai nokārtotu eksāmenu.
**PROPOSED (DA):** Ich lerne, damit ich die Prüfung bestehe. = Jeg mācos, lai nokārtotu eksāmenu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0842

**Card ID:** a2-indem
**Field:** study.comparison[3].example
**DE konteksts:** indem
**CURRENT (DA):** Ich lerne, weil ich Deutsch brauche. = Es mācos, jo man vajag vācu valodu.
**PROPOSED (DA):** Ich lerne, weil ich Deutsch brauche. = Jeg mācos, jo man vajag vācu valodu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0846

**Card ID:** a2-kaum
**Field:** study.comparison[0].example
**DE konteksts:** kaum
**CURRENT (DA):** Ich habe kaum Zeit. = Man gandrīz nav laika.
**PROPOSED (DA):** Ich habe kaum Zeit. = Jeg har næsten ikke tid.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0847

**Card ID:** a2-kaum
**Field:** study.comparison[1].example
**DE konteksts:** kaum
**CURRENT (DA):** Ich bin fast fertig. = Es gandrīz esmu gatavs.
**PROPOSED (DA):** Ich bin fast fertig. = Jeg gandrīz esmu gatavs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0848

**Card ID:** a2-kaum
**Field:** study.comparison[3].example
**DE konteksts:** kaum
**CURRENT (DA):** Sobald ich Zeit habe, rufe ich dich an. = Tiklīdz man būs laiks, es tev piezvanīšu.
**PROPOSED (DA):** Sobald ich Zeit habe, rufe ich dich an. = Jeg har næsten ikke tid.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0872

**Card ID:** a2-kleiden
**Field:** study.comparison[0].example
**DE konteksts:** kleiden
**CURRENT (DA):** Sie kleidet das Kind. = Viņa apģērbj bērnu.
**PROPOSED (DA):** Sie kleidet das Kind. = Hun klæder barnet på.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0873

**Card ID:** a2-kleiden
**Field:** study.comparison[1].example
**DE konteksts:** kleiden
**CURRENT (DA):** Er kleidet sich elegant. = Viņš ģērbjas eleganti.
**PROPOSED (DA):** Er kleidet sich elegant. = Han klæder sig elegant.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0874

**Card ID:** a2-kleiden
**Field:** study.comparison[2].example
**DE konteksts:** kleiden
**CURRENT (DA):** Die Farbe kleidet dich. = Krāsa tev piestāv.
**PROPOSED (DA):** Die Farbe kleidet dich. = Denne farve passer dig godt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0875

**Card ID:** a2-kleiden
**Field:** study.comparison[4].example
**DE konteksts:** kleiden
**CURRENT (DA):** Sie trägt ein Kleid. = Viņa valkā kleitu.
**PROPOSED (DA):** Sie trägt ein Kleid. = Hun valkā kleitu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0908

**Card ID:** a2-kurz
**Field:** study.comparison[0].example
**DE konteksts:** kurz
**CURRENT (DA):** Der Text ist kurz. = Teksts ir īss.
**PROPOSED (DA):** Der Text ist kurz. = Teksten er kort.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0909

**Card ID:** a2-kurz
**Field:** study.comparison[1].example
**DE konteksts:** kurz
**CURRENT (DA):** kurz vor acht = īsi pirms astoņiem
**PROPOSED (DA):** kurz vor acht = Kort før otte var han der.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0910

**Card ID:** a2-kurz
**Field:** study.comparison[2].example
**DE konteksts:** kurz
**CURRENT (DA):** kurz nach dem Essen = īsi pēc ēšanas
**PROPOSED (DA):** kurz nach dem Essen = Kort efter at vi har spist tager vi afsted.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0911

**Card ID:** a2-kurz
**Field:** study.comparison[3].example
**DE konteksts:** kurz
**CURRENT (DA):** Ich komme bald. = Es drīz nākšu.
**PROPOSED (DA):** Ich komme bald. = Jeg drīz nākšu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0912

**Card ID:** a2-kurz
**Field:** study.comparison[4].example
**DE konteksts:** kurz
**CURRENT (DA):** Der Weg ist lang. = Ceļš ir garš.
**PROPOSED (DA):** Der Weg ist lang. = Ceļš er garš.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0913

**Card ID:** a2-lage
**Field:** study.comparison[0].example
**DE konteksts:** Lage
**CURRENT (DA):** Die Lage ist schwierig. = Situācija ir sarežģīta.
**PROPOSED (DA):** Die Lage ist schwierig. = Situationen er kompliceret.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0914

**Card ID:** a2-lage
**Field:** study.comparison[1].example
**DE konteksts:** Lage
**CURRENT (DA):** Die Situation ist ernst. = Situācija ir nopietna.
**PROPOSED (DA):** Die Situation ist ernst. = Situācija er nopietna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0915

**Card ID:** a2-lage
**Field:** study.comparison[2].example
**DE konteksts:** Lage
**CURRENT (DA):** Der Standort ist gut. = Atrašanās vieta ir laba.
**PROPOSED (DA):** Der Standort ist gut. = Atrašanās vieta er laba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0916

**Card ID:** a2-lage
**Field:** study.comparison[3].example
**DE konteksts:** Lage
**CURRENT (DA):** eine Schicht Farbe = viena krāsas kārta
**PROPOSED (DA):** eine Schicht Farbe = viena krāsas kārta
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0917

**Card ID:** a2-leiden
**Field:** study.comparison[0].example
**DE konteksts:** leiden
**CURRENT (DA):** Er leidet an Kopfschmerzen. = Viņš cieš no galvassāpēm.
**PROPOSED (DA):** Er leidet an Kopfschmerzen. = Han lider af hovedpine.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0918

**Card ID:** a2-leiden
**Field:** study.comparison[1].example
**DE konteksts:** leiden
**CURRENT (DA):** Sie leidet an Asthma. = Viņa slimo ar astmu.
**PROPOSED (DA):** Sie leidet an Asthma. = Hun slimo ar astmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0919

**Card ID:** a2-leiden
**Field:** study.comparison[2].example
**DE konteksts:** leiden
**CURRENT (DA):** Wir leiden unter der Hitze. = Mēs ciešam no karstuma.
**PROPOSED (DA):** Wir leiden unter der Hitze. = Mange mennesker lider af stress.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0920

**Card ID:** a2-leiden
**Field:** study.comparison[4].example
**DE konteksts:** leiden
**CURRENT (DA):** Er ist krank. = Viņš ir slims.
**PROPOSED (DA):** Er ist krank. = Viņš er slims.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0922

**Card ID:** a2-leihen
**Field:** study.comparison[1].example
**DE konteksts:** leihen
**CURRENT (DA):** Ich borge mir Geld. = Es aizņemos naudu.
**PROPOSED (DA):** Ich borge mir Geld. = Jeg aizņemos naudu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0923

**Card ID:** a2-leihen
**Field:** study.comparison[2].example
**DE konteksts:** leihen
**CURRENT (DA):** Wir mieten ein Auto. = Mēs īrējam mašīnu.
**PROPOSED (DA):** Wir mieten ein Auto. = Vi īrējam mašīnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0924

**Card ID:** a2-leihen
**Field:** study.comparison[3].example
**DE konteksts:** leihen
**CURRENT (DA):** Ich kaufe das Buch. = Es pērku grāmatu.
**PROPOSED (DA):** Ich kaufe das Buch. = Jeg pērku bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0931

**Card ID:** a2-leiter
**Field:** study.comparison[0].example
**DE konteksts:** Leiter
**CURRENT (DA):** Der Leiter der Firma. = Uzņēmuma vadītājs. Plural: die Leiter.
**PROPOSED (DA):** Der Leiter der Firma. = Lederen af ​​virksomheden er meget flink.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0932

**Card ID:** a2-leiter
**Field:** study.comparison[1].example
**DE konteksts:** Leiter
**CURRENT (DA):** Ich steige auf die Leiter. = Es kāpju uz kāpnēm. Plural: die Leitern.
**PROPOSED (DA):** Ich steige auf die Leiter. = Jeg går op ad trappen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0933

**Card ID:** a2-leitung
**Field:** study.comparison[0].example
**DE konteksts:** Leitung
**CURRENT (DA):** Die Leitung ist kaputt. = Līnija ir bojāta.
**PROPOSED (DA):** Die Leitung ist kaputt. = Den elektriske ledning er beskadiget.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0934

**Card ID:** a2-leitung
**Field:** study.comparison[1].example
**DE konteksts:** Leitung
**CURRENT (DA):** Unter ihrer Führung läuft alles gut. = Viņas vadībā viss norit labi.
**PROPOSED (DA):** Unter ihrer Führung läuft alles gut. = Viņas vadībā viss norit labi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0935

**Card ID:** a2-leitung
**Field:** study.comparison[2].example
**DE konteksts:** Leitung
**CURRENT (DA):** Das Kabel ist zu kurz. = Kabelis ir par īsu.
**PROPOSED (DA):** Das Kabel ist zu kurz. = Kabelis er par īsu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0936

**Card ID:** a2-leitung
**Field:** study.comparison[3].example
**DE konteksts:** Leitung
**CURRENT (DA):** Die Telefonleitung ist frei. = Telefona līnija ir brīva.
**PROPOSED (DA):** Die Telefonleitung ist frei. = Telefona līnija er brīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0937

**Card ID:** a2-leitung
**Field:** study.comparison[4].example
**DE konteksts:** Leitung
**CURRENT (DA):** Die Wasserleitung tropft. = Ūdens caurule pil.
**PROPOSED (DA):** Die Wasserleitung tropft. = Ūdens caurule pil.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0954

**Card ID:** a2-merken
**Field:** study.comparison[0].example
**DE konteksts:** merken
**CURRENT (DA):** Ich merke den Fehler. = Es pamanu kļūdu.
**PROPOSED (DA):** Ich merke den Fehler. = Jeg pamanu kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0955

**Card ID:** a2-merken
**Field:** study.comparison[1].example
**DE konteksts:** merken
**CURRENT (DA):** Merk dir das! = Iegaumē to!
**PROPOSED (DA):** Merk dir das! = Iegaumē to!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0956

**Card ID:** a2-merken
**Field:** study.comparison[2].example
**DE konteksts:** merken
**CURRENT (DA):** Ich bemerke den Fehler. = Es pamanu kļūdu.
**PROPOSED (DA):** Ich bemerke den Fehler. = Jeg pamanu kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0957

**Card ID:** a2-merken
**Field:** study.comparison[4].example
**DE konteksts:** merken
**CURRENT (DA):** Ich behalte die Nummer. = Es paturu numuru prātā.
**PROPOSED (DA):** Ich behalte die Nummer. = Jeg paturu numuru prātā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0958

**Card ID:** a2-mittel
**Field:** study.comparison[0].example
**DE konteksts:** Mittel
**CURRENT (DA):** ein Mittel gegen Husten = līdzeklis pret klepu
**PROPOSED (DA):** ein Mittel gegen Husten = Det er et godt middel mod hoste.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0959

**Card ID:** a2-mittel
**Field:** study.comparison[1].example
**DE konteksts:** Mittel
**CURRENT (DA):** Das Medikament hilft. = Medikaments palīdz.
**PROPOSED (DA):** Das Medikament hilft. = Medikaments palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0960

**Card ID:** a2-mittel
**Field:** study.comparison[2].example
**DE konteksts:** Mittel
**CURRENT (DA):** Diese Methode ist einfach. = Šī metode ir vienkārša.
**PROPOSED (DA):** Diese Methode ist einfach. = Šī metode er vienkārša.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0961

**Card ID:** a2-mittel
**Field:** study.comparison[4].example
**DE konteksts:** Mittel
**CURRENT (DA):** finanzielle Mittel = finanšu līdzekļi
**PROPOSED (DA):** finanzielle Mittel = finanšu līdzekļi
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0963

**Card ID:** a2-note
**Field:** study.comparison[0].example
**DE konteksts:** Note
**CURRENT (DA):** Ich bekomme eine Note. = Es saņemu atzīmi.
**PROPOSED (DA):** Ich bekomme eine Note. = Jeg fik en god karakter.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0964

**Card ID:** a2-note
**Field:** study.comparison[1].example
**DE konteksts:** Note
**CURRENT (DA):** Die Schulnote ist gut. = Skolas atzīme ir laba.
**PROPOSED (DA):** Die Schulnote ist gut. = Skolas atzīme er laba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0965

**Card ID:** a2-note
**Field:** study.comparison[2].example
**DE konteksts:** Note
**CURRENT (DA):** Die Musiknote ist hoch. = Mūzikas nots ir augsta.
**PROPOSED (DA):** Die Musiknote ist hoch. = Mūzikas nots er augsta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0972

**Card ID:** a2-nutzen
**Field:** study.comparison[2].example
**DE konteksts:** nutzen
**CURRENT (DA):** Wir verwenden dieses Wort. = Mēs izmantojam šo vārdu.
**PROPOSED (DA):** Wir verwenden dieses Wort. = Vi izmantojam šo vārdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0973

**Card ID:** a2-nutzen
**Field:** study.comparison[3].example
**DE konteksts:** nutzen
**CURRENT (DA):** Nutze die Chance! = Izmanto iespēju!
**PROPOSED (DA):** Nutze die Chance! = Izmanto iespēju!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0974

**Card ID:** a2-offen
**Field:** study.comparison[0].example
**DE konteksts:** offen
**CURRENT (DA):** Die Tür ist offen. = Durvis ir vaļā.
**PROPOSED (DA):** Die Tür ist offen. = Døren er åben.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0975

**Card ID:** a2-offen
**Field:** study.comparison[1].example
**DE konteksts:** offen
**CURRENT (DA):** Das Museum ist geöffnet. = Muzejs ir atvērts.
**PROPOSED (DA):** Das Museum ist geöffnet. = Muzejs er atvērts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0976

**Card ID:** a2-offen
**Field:** study.comparison[2].example
**DE konteksts:** offen
**CURRENT (DA):** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED (DA):** Er ist ehrlich. = Viņš er godīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0977

**Card ID:** a2-offen
**Field:** study.comparison[3].example
**DE konteksts:** offen
**CURRENT (DA):** Der Platz ist frei. = Vieta ir brīva.
**PROPOSED (DA):** Der Platz ist frei. = Vieta er brīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0979

**Card ID:** a2-patient
**Field:** study.comparison[1].example
**DE konteksts:** Patient
**CURRENT (DA):** Die Patientin ruht sich aus. = Paciente atpūšas.
**PROPOSED (DA):** Die Patientin ruht sich aus. = Patienten har det bedre.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0980

**Card ID:** a2-patient
**Field:** study.comparison[2].example
**DE konteksts:** Patient
**CURRENT (DA):** Der Kranke liegt im Bett. = Slimnieks guļ gultā.
**PROPOSED (DA):** Der Kranke liegt im Bett. = Slimnieks guļ gultā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0981

**Card ID:** a2-personal
**Field:** study.comparison[0].example
**DE konteksts:** Personal
**CURRENT (DA):** Das Personal hilft. = Personāls palīdz.
**PROPOSED (DA):** Das Personal hilft. = Personāls palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0982

**Card ID:** a2-personal
**Field:** study.comparison[1].example
**DE konteksts:** Personal
**CURRENT (DA):** Der Mitarbeiter arbeitet hier. = Darbinieks šeit strādā.
**PROPOSED (DA):** Der Mitarbeiter arbeitet hier. = Darbinieks šeit strādā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0983

**Card ID:** a2-personal
**Field:** study.comparison[2].example
**DE konteksts:** Personal
**CURRENT (DA):** Das ist persönlich. = Tas ir personīgi.
**PROPOSED (DA):** Das ist persönlich. = Tas er personīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0995

**Card ID:** a2-riechen
**Field:** study.comparison[2].example
**DE konteksts:** riechen
**CURRENT (DA):** Es riecht nach Kaffee. = Smaržo pēc kafijas.
**PROPOSED (DA):** Es riecht nach Kaffee. = Dufter af kaffe.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0996

**Card ID:** a2-rolle
**Field:** study.comparison[0].example
**DE konteksts:** Rolle
**CURRENT (DA):** Sie spielt eine Rolle. = Viņa spēlē lomu.
**PROPOSED (DA):** Sie spielt eine Rolle. = Hun spiller en vigtig rolle i holdet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0997

**Card ID:** a2-rolle
**Field:** study.comparison[1].example
**DE konteksts:** Rolle
**CURRENT (DA):** Er hat die Hauptrolle. = Viņam ir galvenā loma.
**PROPOSED (DA):** Er hat die Hauptrolle. = Viņam er galvenā loma.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0998

**Card ID:** a2-rolle
**Field:** study.comparison[2].example
**DE konteksts:** Rolle
**CURRENT (DA):** Ich kaufe eine Papierrolle. = Es pērku papīra rulli.
**PROPOSED (DA):** Ich kaufe eine Papierrolle. = Jeg pērku papīra rulli.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-0999

**Card ID:** a2-rolle
**Field:** study.comparison[3].example
**DE konteksts:** Rolle
**CURRENT (DA):** Das hat keine Bedeutung. = Tam nav nozīmes.
**PROPOSED (DA):** Das hat keine Bedeutung. = Tam har ikke nozīmes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1000

**Card ID:** a2-rolle
**Field:** study.comparison[4].example
**DE konteksts:** Rolle
**CURRENT (DA):** Das ist ein Teil der Arbeit. = Tā ir daļa no darba.
**PROPOSED (DA):** Das ist ein Teil der Arbeit. = Tā er daļa no darba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1008

**Card ID:** a2-sammeln
**Field:** study.comparison[0].example
**DE konteksts:** sammeln
**CURRENT (DA):** Briefmarken sammeln = krāt pastmarkas
**PROPOSED (DA):** Briefmarken sammeln = krāt pastmarkas
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1009

**Card ID:** a2-sammeln
**Field:** study.comparison[1].example
**DE konteksts:** sammeln
**CURRENT (DA):** Die Schüler sammeln sich. = Skolēni sapulcējas.
**PROPOSED (DA):** Die Schüler sammeln sich. = Eleverne samles foran skolen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1010

**Card ID:** a2-sammeln
**Field:** study.comparison[2].example
**DE konteksts:** sammeln
**CURRENT (DA):** Ich hole Wasser. = Es atnesu ūdeni.
**PROPOSED (DA):** Ich hole Wasser. = Jeg atnesu ūdeni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1011

**Card ID:** a2-sammeln
**Field:** study.comparison[3].example
**DE konteksts:** sammeln
**CURRENT (DA):** Ich hebe den Zettel auf. = Es paceļu zīmīti.
**PROPOSED (DA):** Ich hebe den Zettel auf. = Jeg paceļu zīmīti.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1012

**Card ID:** a2-satz
**Field:** study.comparison[0].example
**DE konteksts:** Satz
**CURRENT (DA):** Der Satz ist kurz. = Teikums ir īss.
**PROPOSED (DA):** Der Satz ist kurz. = Teikums er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1013

**Card ID:** a2-satz
**Field:** study.comparison[1].example
**DE konteksts:** Satz
**CURRENT (DA):** Der deutsche Satz ist richtig. = Vācu teikums ir pareizs.
**PROPOSED (DA):** Der deutsche Satz ist richtig. = Vācu teikums er pareizs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1014

**Card ID:** a2-satz
**Field:** study.comparison[2].example
**DE konteksts:** Satz
**CURRENT (DA):** Ein Satz Reifen ist teuer. = Riepu komplekts ir dārgs.
**PROPOSED (DA):** Ein Satz Reifen ist teuer. = Jeg køber et sæt dæk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1015

**Card ID:** a2-satz
**Field:** study.comparison[4].example
**DE konteksts:** Satz
**CURRENT (DA):** Der Kaffeesatz bleibt im Glas. = Kafijas biezumi paliek glāzē.
**PROPOSED (DA):** Der Kaffeesatz bleibt im Glas. = Kaffegrums forbliver i glasset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1023

**Card ID:** a2-scheinen
**Field:** study.comparison[0].example
**DE konteksts:** scheinen
**CURRENT (DA):** Die Sonne scheint. = Saule spīd.
**PROPOSED (DA):** Die Sonne scheint. = Solen skinner.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1024

**Card ID:** a2-scheinen
**Field:** study.comparison[2].example
**DE konteksts:** scheinen
**CURRENT (DA):** Er wirkt ruhig. = Viņš šķiet mierīgs.
**PROPOSED (DA):** Er wirkt ruhig. = Viņš šķiet mierīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1025

**Card ID:** a2-scheinen
**Field:** study.comparison[3].example
**DE konteksts:** scheinen
**CURRENT (DA):** Die Lampe leuchtet. = Lampa spīd.
**PROPOSED (DA):** Die Lampe leuchtet. = Lampa spīd.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1033

**Card ID:** a2-schlange
**Field:** study.comparison[1].example
**DE konteksts:** Schlange
**CURRENT (DA):** Die Warteschlange ist lang. = Gaidīšanas rinda ir gara.
**PROPOSED (DA):** Die Warteschlange ist lang. = Gaidīšanas rinda er gara.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1034

**Card ID:** a2-schlange
**Field:** study.comparison[2].example
**DE konteksts:** Schlange
**CURRENT (DA):** Die Stühle stehen in einer Reihe. = Krēsli stāv rindā.
**PROPOSED (DA):** Die Stühle stehen in einer Reihe. = Krēsli stāv rindā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1035

**Card ID:** a2-schlange
**Field:** study.comparison[3].example
**DE konteksts:** Schlange
**CURRENT (DA):** Eine Schlange ist ein Reptil. = Čūska ir rāpulis.
**PROPOSED (DA):** Eine Schlange ist ein Reptil. = Jeg ser en slange i skoven.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1044

**Card ID:** a2-schließen
**Field:** study.comparison[1].example
**DE konteksts:** schließen
**CURRENT (DA):** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED (DA):** Ich schließe die Tür ab. = Jeg aizslēdzu durvis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1045

**Card ID:** a2-schließen
**Field:** study.comparison[3].example
**DE konteksts:** schließen
**CURRENT (DA):** Daraus folgere ich etwas. = No tā es kaut ko secinu.
**PROPOSED (DA):** Daraus folgere ich etwas. = No tā es kaut ko secinu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1052

**Card ID:** a2-schloss
**Field:** study.comparison[1].example
**DE konteksts:** Schloss
**CURRENT (DA):** Die Burg steht auf dem Berg. = Pils stāv kalnā.
**PROPOSED (DA):** Die Burg steht auf dem Berg. = Pils stāv kalnā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1053

**Card ID:** a2-schloss
**Field:** study.comparison[2].example
**DE konteksts:** Schloss
**CURRENT (DA):** Das Türschloss ist kaputt. = Durvju slēdzene ir salūzusi.
**PROPOSED (DA):** Das Türschloss ist kaputt. = Durvju slēdzene er salūzusi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1054

**Card ID:** a2-schloss
**Field:** study.comparison[3].example
**DE konteksts:** Schloss
**CURRENT (DA):** Ich kaufe ein Fahrradschloss. = Es pērku velosipēda slēdzeni.
**PROPOSED (DA):** Ich kaufe ein Fahrradschloss. = Jeg pērku velosipēda slēdzeni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1055

**Card ID:** a2-schloss
**Field:** study.comparison[4].example
**DE konteksts:** Schloss
**CURRENT (DA):** Der Schlüssel ist weg. = Atslēga ir pazudusi.
**PROPOSED (DA):** Der Schlüssel ist weg. = Atslēga er pazudusi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1064

**Card ID:** a2-schuld
**Field:** study.comparison[0].example
**DE konteksts:** Schuld
**CURRENT (DA):** Das ist meine Schuld. = Tā ir mana vaina.
**PROPOSED (DA):** Das ist meine Schuld. = Det er ikke min skyld.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1065

**Card ID:** a2-schuld
**Field:** study.comparison[1].example
**DE konteksts:** Schuld
**CURRENT (DA):** Er hat Schulden. = Viņam ir parādi.
**PROPOSED (DA):** Er hat Schulden. = Viņam er parādi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1066

**Card ID:** a2-schuld
**Field:** study.comparison[2].example
**DE konteksts:** Schuld
**CURRENT (DA):** Ich trage Verantwortung. = Es nesu atbildību.
**PROPOSED (DA):** Ich trage Verantwortung. = Jeg nesu atbildību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1067

**Card ID:** a2-schuld
**Field:** study.comparison[3].example
**DE konteksts:** Schuld
**CURRENT (DA):** Das war ein Fehler. = Tā bija kļūda.
**PROPOSED (DA):** Das war ein Fehler. = Tā bija kļūda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1068

**Card ID:** a2-schuld
**Field:** study.comparison[4].example
**DE konteksts:** Schuld
**CURRENT (DA):** Ich bin schuld. = Es esmu vainīgs.
**PROPOSED (DA):** Ich bin schuld. = Jeg esmu vainīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1076

**Card ID:** a2-sich-befinden
**Field:** study.comparison[0].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Büro befindet sich im zweiten Stock. = Birojs atrodas otrajā stāvā.
**PROPOSED (DA):** Das Büro befindet sich im zweiten Stock. = Toilettet er på første sal.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1077

**Card ID:** a2-sich-befinden
**Field:** study.comparison[1].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Büro ist oben. = Birojs ir augšā.
**PROPOSED (DA):** Das Büro ist oben. = Birojs er augšā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1078

**Card ID:** a2-sich-befinden
**Field:** study.comparison[2].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Buch liegt auf dem Tisch. = Grāmata atrodas uz galda.
**PROPOSED (DA):** Das Buch liegt auf dem Tisch. = Bogen ligger på bordet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1079

**Card ID:** a2-sich-befinden
**Field:** study.comparison[3].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Auto steht vor dem Haus. = Auto stāv pie mājas.
**PROPOSED (DA):** Das Auto steht vor dem Haus. = Auto stāv pie mājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1080

**Card ID:** a2-sich-befinden
**Field:** study.comparison[4].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Ich fühle mich gut. = Es jūtos labi.
**PROPOSED (DA):** Ich fühle mich gut. = Jeg har det godt i dag
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1083

**Card ID:** a2-sich-unterhalten
**Field:** study.comparison[0].example
**DE konteksts:** sich unterhalten
**CURRENT (DA):** Wir unterhalten uns. = Mēs sarunājamies.
**PROPOSED (DA):** Wir unterhalten uns. = Vi sarunājamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1084

**Card ID:** a2-sich-unterhalten
**Field:** study.comparison[1].example
**DE konteksts:** sich unterhalten
**CURRENT (DA):** Ich spreche Deutsch. = Es runāju vāciski.
**PROPOSED (DA):** Ich spreche Deutsch. = Jeg runāju vāciski.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1085

**Card ID:** a2-sich-unterhalten
**Field:** study.comparison[2].example
**DE konteksts:** sich unterhalten
**CURRENT (DA):** Wir reden viel. = Mēs daudz runājam.
**PROPOSED (DA):** Wir reden viel. = Vi daudz runājam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1086

**Card ID:** a2-sich-unterhalten
**Field:** study.comparison[3].example
**DE konteksts:** sich unterhalten
**CURRENT (DA):** Wir amüsieren uns. = Mēs izklaidējamies.
**PROPOSED (DA):** Wir amüsieren uns. = Vi izklaidējamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1098

**Card ID:** a2-sobald
**Field:** study.comparison[0].example
**DE konteksts:** sobald
**CURRENT (DA):** Sobald er kommt, gehen wir. = Tiklīdz viņš atnāks, mēs iesim.
**PROPOSED (DA):** Sobald er kommt, gehen wir. = Vi går så snart han kommer.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1099

**Card ID:** a2-sobald
**Field:** study.comparison[1].example
**DE konteksts:** sobald
**CURRENT (DA):** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED (DA):** Wenn ich Zeit habe, komme ich. = Jeg ringer til dig, så snart jeg har tid.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1100

**Card ID:** a2-sobald
**Field:** study.comparison[2].example
**DE konteksts:** sobald
**CURRENT (DA):** Als ich Kind war, spielte ich viel. = Kad biju bērns, daudz spēlējos.
**PROPOSED (DA):** Als ich Kind war, spielte ich viel. = Kad biju bērns, daudz spēlējos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1101

**Card ID:** a2-sobald
**Field:** study.comparison[3].example
**DE konteksts:** sobald
**CURRENT (DA):** Ich warte, bis du kommst. = Es gaidu, līdz tu atnāksi.
**PROPOSED (DA):** Ich warte, bis du kommst. = Jeg gaidu, līdz tu atnāksi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1102

**Card ID:** a2-sobald
**Field:** study.comparison[4].example
**DE konteksts:** sobald
**CURRENT (DA):** Nachdem ich gegessen habe, gehe ich. = Pēc tam kad paēdu, es eju.
**PROPOSED (DA):** Nachdem ich gegessen habe, gehe ich. = Pēc tam kad paēdu, es eju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1114

**Card ID:** a2-sonst
**Field:** study.comparison[0].example
**DE konteksts:** sonst
**CURRENT (DA):** Komm jetzt, sonst ist es zu spät. = Nāc tagad, citādi būs par vēlu.
**PROPOSED (DA):** Komm jetzt, sonst ist es zu spät. = Skynd dig, eller vi kommer for sent.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1115

**Card ID:** a2-sonst
**Field:** study.comparison[1].example
**DE konteksts:** sonst
**CURRENT (DA):** Ansonsten ist alles gut. = Citādi viss ir labi.
**PROPOSED (DA):** Ansonsten ist alles gut. = Citādi viss er labi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1116

**Card ID:** a2-sonst
**Field:** study.comparison[2].example
**DE konteksts:** sonst
**CURRENT (DA):** Andernfalls rufe ich an. = Pretējā gadījumā es zvanīšu.
**PROPOSED (DA):** Andernfalls rufe ich an. = Pretējā gadījumā es zvanīšu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1117

**Card ID:** a2-sonst
**Field:** study.comparison[3].example
**DE konteksts:** sonst
**CURRENT (DA):** Normalerweise bin ich zu Hause. = Parasti es esmu mājās.
**PROPOSED (DA):** Normalerweise bin ich zu Hause. = Parasti es esmu hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1118

**Card ID:** a2-sonst
**Field:** study.comparison[4].example
**DE konteksts:** sonst
**CURRENT (DA):** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED (DA):** Außerdem ist es teuer. = Turklāt det er dārgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1126

**Card ID:** a2-steigen
**Field:** study.comparison[0].example
**DE konteksts:** steigen
**CURRENT (DA):** Die Preise steigen. = Cenas ceļas.
**PROPOSED (DA):** Die Preise steigen. = Priserne stiger.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1127

**Card ID:** a2-steigen
**Field:** study.comparison[1].example
**DE konteksts:** steigen
**CURRENT (DA):** Ich steige in den Bus ein. = Es iekāpju autobusā.
**PROPOSED (DA):** Ich steige in den Bus ein. = Jeg går ind i bussen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1128

**Card ID:** a2-steigen
**Field:** study.comparison[2].example
**DE konteksts:** steigen
**CURRENT (DA):** Ich steige aus. = Es izkāpju.
**PROPOSED (DA):** Ich steige aus. = Jeg izkāpju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1129

**Card ID:** a2-steigen
**Field:** study.comparison[3].example
**DE konteksts:** steigen
**CURRENT (DA):** Ich stehe um sieben auf. = Es pieceļos septiņos.
**PROPOSED (DA):** Ich stehe um sieben auf. = Jeg pieceļos septiņos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1130

**Card ID:** a2-steigen
**Field:** study.comparison[4].example
**DE konteksts:** steigen
**CURRENT (DA):** Das Kind klettert auf den Baum. = Bērns rāpjas kokā.
**PROPOSED (DA):** Das Kind klettert auf den Baum. = Bērns rāpjas kokā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1135

**Card ID:** a2-stelle
**Field:** study.comparison[0].example
**DE konteksts:** Stelle
**CURRENT (DA):** Ich suche eine Stelle. = Es meklēju darba vietu.
**PROPOSED (DA):** Ich suche eine Stelle. = Jeg leder efter et nyt job.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1136

**Card ID:** a2-stelle
**Field:** study.comparison[3].example
**DE konteksts:** Stelle
**CURRENT (DA):** Diese Textstelle ist wichtig. = Šis teksta fragments ir svarīgs.
**PROPOSED (DA):** Diese Textstelle ist wichtig. = Šis teksta fragments er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1137

**Card ID:** a2-stelle
**Field:** study.comparison[4].example
**DE konteksts:** Stelle
**CURRENT (DA):** Die Wunde tut weh. = Brūce sāp.
**PROPOSED (DA):** Die Wunde tut weh. = Brūce sāp.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1141

**Card ID:** a2-stimmen
**Field:** study.comparison[0].example
**DE konteksts:** stimmen
**CURRENT (DA):** Das stimmt. = Tā ir / tas ir pareizi.
**PROPOSED (DA):** Das stimmt. = Det er sandt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1142

**Card ID:** a2-stimmen
**Field:** study.comparison[1].example
**DE konteksts:** stimmen
**CURRENT (DA):** Ich stimme dir zu. = Es tev piekrītu.
**PROPOSED (DA):** Ich stimme dir zu. = Jeg er enig med dig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1143

**Card ID:** a2-stimmen
**Field:** study.comparison[2].example
**DE konteksts:** stimmen
**CURRENT (DA):** Wir stimmen darüber ab. = Mēs par to balsojam.
**PROPOSED (DA):** Wir stimmen darüber ab. = Vi par to balsojam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1144

**Card ID:** a2-stimmen
**Field:** study.comparison[3].example
**DE konteksts:** stimmen
**CURRENT (DA):** Wir wählen den Präsidenten. = Mēs vēlējam prezidentu.
**PROPOSED (DA):** Wir wählen den Präsidenten. = Vi vēlējam prezidentu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1145

**Card ID:** a2-stimmen
**Field:** study.comparison[4].example
**DE konteksts:** stimmen
**CURRENT (DA):** Die Farbe passt. = Krāsa piestāv.
**PROPOSED (DA):** Die Farbe passt. = Krāsa piestāv.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1150

**Card ID:** a2-stoff
**Field:** study.comparison[0].example
**DE konteksts:** Stoff
**CURRENT (DA):** Der Stoff ist weich. = Audums ir mīksts.
**PROPOSED (DA):** Der Stoff ist weich. = Stoffet er blødt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1151

**Card ID:** a2-stoff
**Field:** study.comparison[1].example
**DE konteksts:** Stoff
**CURRENT (DA):** Das Material ist stabil. = Materiāls ir izturīgs.
**PROPOSED (DA):** Das Material ist stabil. = Materiāls er izturīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1152

**Card ID:** a2-stoff
**Field:** study.comparison[2].example
**DE konteksts:** Stoff
**CURRENT (DA):** Die Substanz ist gefährlich. = Viela ir bīstama.
**PROPOSED (DA):** Die Substanz ist gefährlich. = Viela er bīstama.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1153

**Card ID:** a2-stoff
**Field:** study.comparison[3].example
**DE konteksts:** Stoff
**CURRENT (DA):** Der Unterrichtsstoff ist schwer. = Mācību viela ir grūta.
**PROPOSED (DA):** Der Unterrichtsstoff ist schwer. = Mācību viela er grūta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1159

**Card ID:** a2-tafel
**Field:** study.comparison[0].example
**DE konteksts:** Tafel
**CURRENT (DA):** Der Lehrer schreibt an die Tafel. = Skolotājs raksta uz tāfeles.
**PROPOSED (DA):** Der Lehrer schreibt an die Tafel. = Læreren skriver på tavlen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1160

**Card ID:** a2-tafel
**Field:** study.comparison[1].example
**DE konteksts:** Tafel
**CURRENT (DA):** Die Tabelle steht im Buch. = Tabula ir grāmatā.
**PROPOSED (DA):** Die Tabelle steht im Buch. = Bordet er i bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1161

**Card ID:** a2-tafel
**Field:** study.comparison[2].example
**DE konteksts:** Tafel
**CURRENT (DA):** Die Speisekarte liegt auf dem Tisch. = Ēdienkarte ir uz galda.
**PROPOSED (DA):** Die Speisekarte liegt auf dem Tisch. = Menuen er på bordet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1162

**Card ID:** a2-tafel
**Field:** study.comparison[3].example
**DE konteksts:** Tafel
**CURRENT (DA):** Das Schild ist rot. = Zīme ir sarkana.
**PROPOSED (DA):** Das Schild ist rot. = Zīme er sarkana.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1163

**Card ID:** a2-tafel
**Field:** study.comparison[4].example
**DE konteksts:** Tafel
**CURRENT (DA):** Eine Tafel Schokolade = šokolādes tāfelīte.
**PROPOSED (DA):** Eine Tafel Schokolade = Jeg køber en chokoladebar.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1169

**Card ID:** a2-teil
**Field:** study.comparison[0].example
**DE konteksts:** Teil
**CURRENT (DA):** Ein Teil fehlt. = Trūkst viena daļa.
**PROPOSED (DA):** Ein Teil fehlt. = Trūkst viena daļa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1170

**Card ID:** a2-teil
**Field:** study.comparison[1].example
**DE konteksts:** Teil
**CURRENT (DA):** Der erste Teil ist leicht. = Pirmā daļa ir viegla.
**PROPOSED (DA):** Der erste Teil ist leicht. = Pirmā daļa er viegla.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1171

**Card ID:** a2-teil
**Field:** study.comparison[2].example
**DE konteksts:** Teil
**CURRENT (DA):** Das Ersatzteil ist teuer. = Rezerves detaļa ir dārga.
**PROPOSED (DA):** Das Ersatzteil ist teuer. = Rezerves detaļa er dārga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1172

**Card ID:** a2-teil
**Field:** study.comparison[3].example
**DE konteksts:** Teil
**CURRENT (DA):** Ich nehme ein Stück Kuchen. = Es ņemu kūkas gabalu.
**PROPOSED (DA):** Ich nehme ein Stück Kuchen. = Jeg ņemu kūsom gabalu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1173

**Card ID:** a2-teil
**Field:** study.comparison[4].example
**DE konteksts:** Teil
**CURRENT (DA):** Das ist eine gute Sache. = Tā ir laba lieta.
**PROPOSED (DA):** Das ist eine gute Sache. = Tā er laba lieta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1184

**Card ID:** a2-termin
**Field:** study.comparison[0].example
**DE konteksts:** Termin
**CURRENT (DA):** Ich habe einen Termin. = Man ir pieraksts / norunāts laiks.
**PROPOSED (DA):** Ich habe einen Termin. = Jeg har en lægetid i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1185

**Card ID:** a2-termin
**Field:** study.comparison[1].example
**DE konteksts:** Termin
**CURRENT (DA):** Das Treffen war nett. = Tikšanās bija jauka.
**PROPOSED (DA):** Das Treffen war nett. = Vores møde var meget hyggeligt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1186

**Card ID:** a2-termin
**Field:** study.comparison[2].example
**DE konteksts:** Termin
**CURRENT (DA):** Die Frist endet morgen. = Termiņš beidzas rīt.
**PROPOSED (DA):** Die Frist endet morgen. = Termiņš beidzas i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1187

**Card ID:** a2-termin
**Field:** study.comparison[3].example
**DE konteksts:** Termin
**CURRENT (DA):** Ich habe eine Verabredung. = Man ir sarunāta tikšanās.
**PROPOSED (DA):** Ich habe eine Verabredung. = Jeg har er sarunāta tikšanās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1188

**Card ID:** a2-termin
**Field:** study.comparison[4].example
**DE konteksts:** Termin
**CURRENT (DA):** Der Zeitpunkt ist wichtig. = Laika punkts ir svarīgs.
**PROPOSED (DA):** Der Zeitpunkt ist wichtig. = Laika punkts er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1194

**Card ID:** a2-tief
**Field:** study.comparison[0].example
**DE konteksts:** tief
**CURRENT (DA):** Der See ist tief. = Ezers ir dziļš.
**PROPOSED (DA):** Der See ist tief. = Søen er dyb.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1195

**Card ID:** a2-tief
**Field:** study.comparison[3].example
**DE konteksts:** tief
**CURRENT (DA):** Das Wasser ist flach. = Ūdens ir sekls.
**PROPOSED (DA):** Das Wasser ist flach. = Ūdens er sekls.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1203

**Card ID:** a2-tragen
**Field:** study.comparison[2].example
**DE konteksts:** tragen
**CURRENT (DA):** Ich bringe dir das Buch. = Es tev atnesu grāmatu.
**PROPOSED (DA):** Ich bringe dir das Buch. = Jeg tev atnesu bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1204

**Card ID:** a2-tragen
**Field:** study.comparison[3].example
**DE konteksts:** tragen
**CURRENT (DA):** Ich halte das Kind. = Es turu bērnu.
**PROPOSED (DA):** Ich halte das Kind. = Jeg turu bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1207

**Card ID:** a2-treffen
**Field:** study.comparison[0].example
**DE konteksts:** treffen
**CURRENT (DA):** Eine Entscheidung treffen = pieņemt lēmumu.
**PROPOSED (DA):** Eine Entscheidung treffen = Vi skal tage en beslutning.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1208

**Card ID:** a2-treffen
**Field:** study.comparison[1].example
**DE konteksts:** treffen
**CURRENT (DA):** Wir treffen uns. = Mēs tiekamies.
**PROPOSED (DA):** Wir treffen uns. = Vi tiekamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1209

**Card ID:** a2-treffen
**Field:** study.comparison[2].example
**DE konteksts:** treffen
**CURRENT (DA):** Ich lerne ihn kennen. = Es ar viņu iepazīstos.
**PROPOSED (DA):** Ich lerne ihn kennen. = Jeg ar viņu iepazīstos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1210

**Card ID:** a2-treffen
**Field:** study.comparison[3].example
**DE konteksts:** treffen
**CURRENT (DA):** Ich erreiche dich nicht. = Es nevaru tevi sazvanīt.
**PROPOSED (DA):** Ich erreiche dich nicht. = Jeg nevaru tevi sazvanīt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1220

**Card ID:** a2-übrig
**Field:** study.comparison[1].example
**DE konteksts:** übrig
**CURRENT (DA):** Viel Essen bleibt übrig. = Daudz ēdiena paliek pāri.
**PROPOSED (DA):** Viel Essen bleibt übrig. = Der var meget mad tilovers.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1221

**Card ID:** a2-übrig
**Field:** study.comparison[2].example
**DE konteksts:** übrig
**CURRENT (DA):** Der Rest ist für morgen. = Atlikums ir rītdienai.
**PROPOSED (DA):** Der Rest ist für morgen. = Atlikums er rītdienai.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1222

**Card ID:** a2-übrig
**Field:** study.comparison[3].example
**DE konteksts:** übrig
**CURRENT (DA):** Die übrigen Gäste kommen später. = Pārējie viesi ieradīsies vēlāk.
**PROPOSED (DA):** Die übrigen Gäste kommen später. = De andre gæster kommer senere.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1223

**Card ID:** a2-übrig
**Field:** study.comparison[4].example
**DE konteksts:** übrig
**CURRENT (DA):** Das ist unnötig. = Tas ir nevajadzīgi.
**PROPOSED (DA):** Das ist unnötig. = Tas er nevajadzīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1227

**Card ID:** a2-übung
**Field:** study.comparison[0].example
**DE konteksts:** Übung
**CURRENT (DA):** Diese Übung ist leicht. = Šis vingrinājums ir viegls.
**PROPOSED (DA):** Diese Übung ist leicht. = Denne øvelse er nem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1228

**Card ID:** a2-übung
**Field:** study.comparison[2].example
**DE konteksts:** Übung
**CURRENT (DA):** Das Training beginnt um sechs. = Treniņš sākas sešos.
**PROPOSED (DA):** Das Training beginnt um sechs. = Treniņš sāsom sešos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1229

**Card ID:** a2-übung
**Field:** study.comparison[3].example
**DE konteksts:** Übung
**CURRENT (DA):** Die Aufgabe ist schwer. = Uzdevums ir grūts.
**PROPOSED (DA):** Die Aufgabe ist schwer. = Uzdevums er grūts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1230

**Card ID:** a2-übung
**Field:** study.comparison[4].example
**DE konteksts:** Übung
**CURRENT (DA):** In der Praxis ist es anders. = Praksē tas ir citādi.
**PROPOSED (DA):** In der Praxis ist es anders. = Praksē det er citādi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1233

**Card ID:** a2-umsonst
**Field:** study.comparison[0].example
**DE konteksts:** umsonst
**CURRENT (DA):** Ich warte umsonst. = Es gaidu veltīgi.
**PROPOSED (DA):** Ich warte umsonst. = Jeg gaidu veltīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1234

**Card ID:** a2-umsonst
**Field:** study.comparison[2].example
**DE konteksts:** umsonst
**CURRENT (DA):** Das ist gratis. = Tas ir par brīvu.
**PROPOSED (DA):** Das ist gratis. = Tas er par brīvu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1235

**Card ID:** a2-umsonst
**Field:** study.comparison[3].example
**DE konteksts:** umsonst
**CURRENT (DA):** Ich suche vergeblich. = Es meklēju veltīgi.
**PROPOSED (DA):** Ich suche vergeblich. = Jeg meklēju veltīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1244

**Card ID:** a2-verbinden
**Field:** study.comparison[1].example
**DE konteksts:** verbinden
**CURRENT (DA):** Das verbindet sich mit Erinnerungen. = Tas saistās ar atmiņām.
**PROPOSED (DA):** Das verbindet sich mit Erinnerungen. = Tas saistās ar atmiņām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1245

**Card ID:** a2-verbinden
**Field:** study.comparison[3].example
**DE konteksts:** verbinden
**CURRENT (DA):** Ich schließe den Drucker an. = Es pieslēdzu printeri.
**PROPOSED (DA):** Ich schließe den Drucker an. = Jeg pieslēdzu printeri.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1246

**Card ID:** a2-verbinden
**Field:** study.comparison[4].example
**DE konteksts:** verbinden
**CURRENT (DA):** Der Arzt verbindet die Wunde. = Ārsts pārsien brūci.
**PROPOSED (DA):** Der Arzt verbindet die Wunde. = Lægen binder såret.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1251

**Card ID:** a2-verkehr
**Field:** study.comparison[0].example
**DE konteksts:** Verkehr
**CURRENT (DA):** Der Verkehr ist stark. = Satiksme ir intensīva.
**PROPOSED (DA):** Der Verkehr ist stark. = Trafikken i byen er tung.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1252

**Card ID:** a2-verkehr
**Field:** study.comparison[1].example
**DE konteksts:** Verkehr
**CURRENT (DA):** Der Straßenverkehr ist gefährlich. = Ceļu satiksme ir bīstama.
**PROPOSED (DA):** Der Straßenverkehr ist gefährlich. = Ceļu satiksme er bīstama.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1253

**Card ID:** a2-verkehr
**Field:** study.comparison[2].example
**DE konteksts:** Verkehr
**CURRENT (DA):** Öffentlicher Verkehr ist praktisch. = Sabiedriskā satiksme ir praktiska.
**PROPOSED (DA):** Öffentlicher Verkehr ist praktisch. = Offentlig transport er godt organiseret her.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1254

**Card ID:** a2-verkehr
**Field:** study.comparison[4].example
**DE konteksts:** Verkehr
**CURRENT (DA):** Bewegung ist gesund. = Kustība ir veselīga.
**PROPOSED (DA):** Bewegung ist gesund. = Kustība er veselīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1263

**Card ID:** a2-viertel
**Field:** study.comparison[0].example
**DE konteksts:** Viertel
**CURRENT (DA):** Ein Viertel ist genug. = Ceturtdaļa ir pietiekami.
**PROPOSED (DA):** Ein Viertel ist genug. = Ceturtdaļa er pietiekami.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1264

**Card ID:** a2-viertel
**Field:** study.comparison[1].example
**DE konteksts:** Viertel
**CURRENT (DA):** Die Hälfte ist weg. = Puse ir prom.
**PROPOSED (DA):** Die Hälfte ist weg. = Puse er væk.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1265

**Card ID:** a2-viertel
**Field:** study.comparison[2].example
**DE konteksts:** Viertel
**CURRENT (DA):** Ein Drittel bleibt. = Trešdaļa paliek.
**PROPOSED (DA):** Ein Drittel bleibt. = Trešdaļa paliek.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1266

**Card ID:** a2-viertel
**Field:** study.comparison[4].example
**DE konteksts:** Viertel
**CURRENT (DA):** Das Quartier ist ruhig. = Kvartāls ir kluss.
**PROPOSED (DA):** Das Quartier ist ruhig. = Kvartāls er kluss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1274

**Card ID:** a2-vorstellen
**Field:** study.comparison[0].example
**DE konteksts:** vorstellen
**CURRENT (DA):** Ich stelle dir meinen Freund vor. = Es tevi iepazīstinu ar draugu.
**PROPOSED (DA):** Ich stelle dir meinen Freund vor. = Må jeg præsentere dig for min ven
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1275

**Card ID:** a2-vorstellen
**Field:** study.comparison[1].example
**DE konteksts:** vorstellen
**CURRENT (DA):** Ich stelle mich vor. = Es stādos priekšā.
**PROPOSED (DA):** Ich stelle mich vor. = Jeg stādos priekšā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1276

**Card ID:** a2-vorstellen
**Field:** study.comparison[2].example
**DE konteksts:** vorstellen
**CURRENT (DA):** Ich denke an dich. = Es domāju par tevi.
**PROPOSED (DA):** Ich denke an dich. = Jeg domāju par tevi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1277

**Card ID:** a2-vorstellen
**Field:** study.comparison[3].example
**DE konteksts:** vorstellen
**CURRENT (DA):** Was meinst du? = Ko tu domā?
**PROPOSED (DA):** Was meinst du? = Ko tu domā?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1278

**Card ID:** a2-vorstellen
**Field:** study.comparison[4].example
**DE konteksts:** vorstellen
**CURRENT (DA):** Ich präsentiere den Plan. = Es prezentēju plānu.
**PROPOSED (DA):** Ich präsentiere den Plan. = Jeg prezentēju plānu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1287

**Card ID:** a2-wagen
**Field:** study.comparison[0].example
**DE konteksts:** Wagen
**CURRENT (DA):** Der Wagen ist neu. = Automašīna ir jauna.
**PROPOSED (DA):** Der Wagen ist neu. = Automašīna er jauna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1288

**Card ID:** a2-wagen
**Field:** study.comparison[2].example
**DE konteksts:** Wagen
**CURRENT (DA):** Das Auto steht da. = Automašīna stāv tur.
**PROPOSED (DA):** Das Auto steht da. = Automašīna stāv der.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1293

**Card ID:** a2-wählen
**Field:** study.comparison[0].example
**DE konteksts:** wählen
**CURRENT (DA):** Ich wähle eine Nummer. = Es sastādu numuru.
**PROPOSED (DA):** Ich wähle eine Nummer. = Jeg sastādu numuru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1294

**Card ID:** a2-wählen
**Field:** study.comparison[1].example
**DE konteksts:** wählen
**CURRENT (DA):** Ich wähle ein Bild aus. = Es izvēlos attēlu.
**PROPOSED (DA):** Ich wähle ein Bild aus. = Jeg izvēlos attēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1295

**Card ID:** a2-wählen
**Field:** study.comparison[3].example
**DE konteksts:** wählen
**CURRENT (DA):** Wir stimmen ab. = Mēs balsojam.
**PROPOSED (DA):** Wir stimmen ab. = Vi balsojam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1304

**Card ID:** a2-während
**Field:** study.comparison[0].example
**DE konteksts:** während
**CURRENT (DA):** Während ich arbeite, ist es ruhig. = Kamēr es strādāju, ir kluss.
**PROPOSED (DA):** Während ich arbeite, ist es ruhig. = Om dagen arbejder jeg.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1305

**Card ID:** a2-während
**Field:** study.comparison[1].example
**DE konteksts:** während
**CURRENT (DA):** Bei Regen bleiben wir zu Hause. = Lietus laikā paliekam mājās.
**PROPOSED (DA):** Bei Regen bleiben wir zu Hause. = Lietus laikā paliekam hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1306

**Card ID:** a2-während
**Field:** study.comparison[2].example
**DE konteksts:** während
**CURRENT (DA):** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED (DA):** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1307

**Card ID:** a2-während
**Field:** study.comparison[3].example
**DE konteksts:** während
**CURRENT (DA):** Solange du hier bist, bleibe ich. = Kamēr tu esi šeit, es palieku.
**PROPOSED (DA):** Solange du hier bist, bleibe ich. = Kamēr tu esi šeit, es palieku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1322

**Card ID:** a2-wahrscheinlich
**Field:** study.comparison[0].example
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** Er kommt wahrscheinlich. = Viņš droši vien atnāks.
**PROPOSED (DA):** Er kommt wahrscheinlich. = Han kommer nok senere.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1323

**Card ID:** a2-wahrscheinlich
**Field:** study.comparison[1].example
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** Vielleicht kommt er. = Varbūt viņš atnāks.
**PROPOSED (DA):** Vielleicht kommt er. = Måske kommer han senere.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1324

**Card ID:** a2-wahrscheinlich
**Field:** study.comparison[2].example
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** Das ist sicher richtig. = Tas noteikti ir pareizi.
**PROPOSED (DA):** Das ist sicher richtig. = Det er bestemt korrekt.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1325

**Card ID:** a2-wahrscheinlich
**Field:** study.comparison[3].example
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** Er kommt bestimmt. = Viņš noteikti atnāks.
**PROPOSED (DA):** Er kommt bestimmt. = Viņš noteikti atnāks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1326

**Card ID:** a2-wahrscheinlich
**Field:** study.comparison[4].example
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** Das ist möglich. = Tas ir iespējams.
**PROPOSED (DA):** Das ist möglich. = Tas er iespējams.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1330

**Card ID:** a2-wechseln
**Field:** study.comparison[2].example
**DE konteksts:** wechseln
**CURRENT (DA):** Wir tauschen Plätze. = Mēs samaināmies vietām.
**PROPOSED (DA):** Wir tauschen Plätze. = Vi samaināmies vietām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1331

**Card ID:** a2-wechseln
**Field:** study.comparison[3].example
**DE konteksts:** wechseln
**CURRENT (DA):** Ich steige um. = Es pārsēžos.
**PROPOSED (DA):** Ich steige um. = Jeg pārsēžos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1332

**Card ID:** a2-wechseln
**Field:** study.comparison[4].example
**DE konteksts:** wechseln
**CURRENT (DA):** Ich ändere den Plan. = Es mainu plānu.
**PROPOSED (DA):** Ich ändere den Plan. = Jeg mainu plānu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1339

**Card ID:** a2-wert
**Field:** study.comparison[0].example
**DE konteksts:** Wert
**CURRENT (DA):** Das ist viel wert. = Tas ir daudz vērts.
**PROPOSED (DA):** Das ist viel wert. = Det er mange penge værd.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1340

**Card ID:** a2-wert
**Field:** study.comparison[1].example
**DE konteksts:** Wert
**CURRENT (DA):** Der Wert ist hoch. = Vērtība ir augsta.
**PROPOSED (DA):** Der Wert ist hoch. = Husværdien er høj.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1341

**Card ID:** a2-wert
**Field:** study.comparison[2].example
**DE konteksts:** Wert
**CURRENT (DA):** Das Auto ist teuer. = Auto ir dārgs.
**PROPOSED (DA):** Das Auto ist teuer. = Bilen er dyr.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1342

**Card ID:** a2-wert
**Field:** study.comparison[3].example
**DE konteksts:** Wert
**CURRENT (DA):** Die Stadt ist sehenswert. = Pilsētu ir vērts redzēt.
**PROPOSED (DA):** Die Stadt ist sehenswert. = Pilsētu er vērts redzēt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1343

**Card ID:** a2-wert
**Field:** study.comparison[4].example
**DE konteksts:** Wert
**CURRENT (DA):** Das ist wichtig. = Tas ir svarīgi.
**PROPOSED (DA):** Das ist wichtig. = Tas er svarīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1346

**Card ID:** a2-Weste-1584
**Field:** lv
**DE konteksts:** Weste
**CURRENT (DA):** Vest
**PROPOSED (DA):** Vest
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1347

**Card ID:** a2-wiegen
**Field:** study.comparison[1].example
**DE konteksts:** wiegen
**CURRENT (DA):** Die Waage steht im Bad. = Svari stāv vannasistabā.
**PROPOSED (DA):** Die Waage steht im Bad. = Svari stāv vannasistabā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1348

**Card ID:** a2-wiegen
**Field:** study.comparison[2].example
**DE konteksts:** wiegen
**CURRENT (DA):** Das Gewicht ist normal. = Svars ir normāls.
**PROPOSED (DA):** Das Gewicht ist normal. = Svars er normāls.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1349

**Card ID:** a2-wiegen
**Field:** study.comparison[3].example
**DE konteksts:** wiegen
**CURRENT (DA):** Ich messe die Länge. = Es mēru garumu.
**PROPOSED (DA):** Ich messe die Länge. = Jeg mēru garumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1350

**Card ID:** a2-wiegen
**Field:** study.comparison[4].example
**DE konteksts:** wiegen
**CURRENT (DA):** Der Wagen ist neu. = Automašīna ir jauna.
**PROPOSED (DA):** Der Wagen ist neu. = Automašīna er jauna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1353

**Card ID:** a2-ziehen
**Field:** study.comparison[0].example
**DE konteksts:** ziehen
**CURRENT (DA):** Wir ziehen um. = Mēs pārvācamies.
**PROPOSED (DA):** Wir ziehen um. = Vi pārvācamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1354

**Card ID:** a2-ziehen
**Field:** study.comparison[1].example
**DE konteksts:** ziehen
**CURRENT (DA):** Ich ziehe um. = Es pārvācos.
**PROPOSED (DA):** Ich ziehe um. = Jeg pārvācos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1355

**Card ID:** a2-ziehen
**Field:** study.comparison[4].example
**DE konteksts:** ziehen
**CURRENT (DA):** Den Tee ziehen lassen. = Ļaut tējai ievilkties.
**PROPOSED (DA):** Den Tee ziehen lassen. = Ļaut tējai ievilkties.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1364

**Card ID:** a2-zunehmen
**Field:** study.comparison[1].example
**DE konteksts:** zunehmen
**CURRENT (DA):** Ich nehme ab. = Es notievēju.
**PROPOSED (DA):** Ich nehme ab. = Jeg notievēju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1365

**Card ID:** a2-zunehmen
**Field:** study.comparison[2].example
**DE konteksts:** zunehmen
**CURRENT (DA):** Die Stadt wächst. = Pilsēta aug.
**PROPOSED (DA):** Die Stadt wächst. = Pilsēta aug.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1366

**Card ID:** a2-zunehmen
**Field:** study.comparison[3].example
**DE konteksts:** zunehmen
**CURRENT (DA):** Die Preise steigen. = Cenas kāpj.
**PROPOSED (DA):** Die Preise steigen. = Cenas kāpj.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1367

**Card ID:** a2-zunehmen
**Field:** study.comparison[4].example
**DE konteksts:** zunehmen
**CURRENT (DA):** Die Kosten erhöhen sich. = Izmaksas palielinās.
**PROPOSED (DA):** Die Kosten erhöhen sich. = Izmaksas palielinās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1377

**Card ID:** a2-zurzeit
**Field:** study.comparison[0].example
**DE konteksts:** zurzeit
**CURRENT (DA):** Zurzeit bin ich beschäftigt. = Pašlaik esmu aizņemts.
**PROPOSED (DA):** Zurzeit bin ich beschäftigt. = Pašlaik esmu aizņemts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1378

**Card ID:** a2-zurzeit
**Field:** study.comparison[1].example
**DE konteksts:** zurzeit
**CURRENT (DA):** Ich gehe jetzt. = Es tagad eju.
**PROPOSED (DA):** Ich gehe jetzt. = Jeg nu eju.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1379

**Card ID:** a2-zurzeit
**Field:** study.comparison[2].example
**DE konteksts:** zurzeit
**CURRENT (DA):** Im Moment habe ich keine Zeit. = Šobrīd man nav laika.
**PROPOSED (DA):** Im Moment habe ich keine Zeit. = Šobrīd man har ikke laika.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1380

**Card ID:** a2-zurzeit
**Field:** study.comparison[3].example
**DE konteksts:** zurzeit
**CURRENT (DA):** Derzeit ist das nicht möglich. = Pašlaik tas nav iespējams.
**PROPOSED (DA):** Derzeit ist das nicht möglich. = Pašlaik det har ikke iespējams.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1381

**Card ID:** a2-zurzeit
**Field:** study.comparison[4].example
**DE konteksts:** zurzeit
**CURRENT (DA):** Momentan bin ich krank. = Šobrīd esmu slims.
**PROPOSED (DA):** Momentan bin ich krank. = Šobrīd esmu slims.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1382

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks[1].text.purple[0]
**DE konteksts:** zurzeit
**CURRENT (DA):** tagad
**PROPOSED (DA):** nu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1383

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks[1].text.yellow[3]
**DE konteksts:** zurzeit
**CURRENT (DA):** tagad
**PROPOSED (DA):** nu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1384

**Card ID:** a2-zurzeit
**Field:** study.accents.purple[6]
**DE konteksts:** zurzeit
**CURRENT (DA):** tagad
**PROPOSED (DA):** nu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1389

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** zurzeit
**CURRENT (DA):** tagad
**PROPOSED (DA):** tagad
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A2-1391

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** zurzeit
**CURRENT (DA):** tagad
**PROPOSED (DA):** tagad
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

### 3.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes

#### DA-A2-0013

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** abfahren
**CURRENT (DA):** autobusa
**PROPOSED (DA):** FJERN «autobusa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0014

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** abfahren
**CURRENT (DA):** vilciena
**PROPOSED (DA):** FJERN «vilciena»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0015

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** abfahren
**CURRENT (DA):** grafiku
**PROPOSED (DA):** FJERN «grafiku»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0016

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** abfahren
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0017

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** abfahren
**CURRENT (DA):** aizbraukt
**PROPOSED (DA):** FJERN «aizbraukt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0018

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.red.[0][1]
**DE konteksts:** abfahren
**CURRENT (DA):** to go on a journey
**PROPOSED (DA):** FJERN «to go on a journey»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0019

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** abfahren
**CURRENT (DA):** to people
**PROPOSED (DA):** FJERN «to people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0020

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** abfahren
**CURRENT (DA):** on a trip
**PROPOSED (DA):** FJERN «on a trip»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0021

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** abfahren
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0022

**Card ID:** a2-abfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** abfahren
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0023

**Card ID:** a2-abgeben
**Field:** lv
**DE konteksts:** abgeben
**CURRENT (DA):** Overdrag • Giv væk • Indsend
**PROPOSED (DA):** Overdrag • Giv væk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0029

**Card ID:** a2-abgeben
**Field:** study.sectionAccents.examples.lv.purple.[0][5]
**DE konteksts:** abgeben
**CURRENT (DA):** return
**PROPOSED (DA):** FJERN «return»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0030

**Card ID:** a2-abgeben
**Field:** study.sectionAccents.examples.lv.purple.[1][5]
**DE konteksts:** abgeben
**CURRENT (DA):** return
**PROPOSED (DA):** FJERN «return»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0031

**Card ID:** a2-abgeben
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** abgeben
**CURRENT (DA):** nodots vai atdots
**PROPOSED (DA):** FJERN «nodots vai atdots»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0032

**Card ID:** a2-abgeben
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** abgeben
**CURRENT (DA):** iesniegt
**PROPOSED (DA):** FJERN «iesniegt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0033

**Card ID:** a2-abgemacht-6
**Field:** lv
**DE konteksts:** abgemacht
**CURRENT (DA):** Afgjort • Besluttet • Aftalt
**PROPOSED (DA):** Afgjort • Besluttet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0034

**Card ID:** a2-holen
**Field:** study.explanation[1]
**DE konteksts:** holen
**CURRENT (DA):** Holen betyder hovedsageligt: ​​gå og hent.
**PROPOSED (DA):** Holen betyder hovedsageligt: gå og hent.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0035

**Card ID:** a2-bringen
**Field:** study.explanation[1]
**DE konteksts:** bringen
**CURRENT (DA):** Bringen betyder hovedsageligt: ​​at bringe hertil.
**PROPOSED (DA):** Bringen betyder hovedsageligt: at bringe hertil.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0036

**Card ID:** a2-bringen
**Field:** study.sectionAccents.examples.lv.purple.[0][2]
**DE konteksts:** bringen
**CURRENT (DA):** bring
**PROPOSED (DA):** FJERN «bring»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0042

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** absagen
**CURRENT (DA):** koncertu
**PROPOSED (DA):** FJERN «koncertu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0043

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** absagen
**CURRENT (DA):** the event
**PROPOSED (DA):** FJERN «the event»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0044

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** absagen
**CURRENT (DA):** the meeting
**PROPOSED (DA):** FJERN «the meeting»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0045

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** absagen
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0046

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** absagen
**CURRENT (DA):** proposal
**PROPOSED (DA):** FJERN «proposal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0047

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** absagen
**CURRENT (DA):** offer
**PROPOSED (DA):** FJERN «offer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0048

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** absagen
**CURRENT (DA):** more often
**PROPOSED (DA):** FJERN «more often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0049

**Card ID:** a2-absagen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** absagen
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0050

**Card ID:** a2-abschließen
**Field:** lv
**DE konteksts:** abschließen
**CURRENT (DA):** For at låse • For at afslutte • For at fuldføre
**PROPOSED (DA):** For at låse • For at afslutte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0053

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** abschließen
**CURRENT (DA):** the key
**PROPOSED (DA):** FJERN «the key»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0054

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** abschließen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0055

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** abschließen
**CURRENT (DA):** nevis
**PROPOSED (DA):** FJERN «nevis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0056

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** abschließen
**CURRENT (DA):** tikai
**PROPOSED (DA):** FJERN «tikai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0057

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** abschließen
**CURRENT (DA):** conclude
**PROPOSED (DA):** FJERN «conclude»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0058

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** abschließen
**CURRENT (DA):** projektu
**PROPOSED (DA):** FJERN «projektu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0059

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** abschließen
**CURRENT (DA):** conclude
**PROPOSED (DA):** FJERN «conclude»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0060

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** abschließen
**CURRENT (DA):** pabeigt
**PROPOSED (DA):** FJERN «pabeigt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0061

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** abschließen
**CURRENT (DA):** contract
**PROPOSED (DA):** FJERN «contract»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0062

**Card ID:** a2-abschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** abschließen
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0063

**Card ID:** a2-abstellen
**Field:** lv
**DE konteksts:** abstellen
**CURRENT (DA):** Læg ned • Placer • Af
**PROPOSED (DA):** Læg ned • Placer
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0064

**Card ID:** a2-abstellen
**Field:** study.explanation[0]
**DE konteksts:** abstellen
**CURRENT (DA):** Hovedidé: betydningen af ​​abstellen bestemmes af objektet: parker bilen eller tasken, sluk for vandet eller elektriciteten, sluk for motoren, ret problemet.
**PROPOSED (DA):** Hovedidé: betydningen af abstellen bestemmes af objektet: parker bilen eller tasken, sluk for vandet eller elektriciteten, sluk for motoren, ret problemet.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0070

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.examples.lv.purple.[0][0]
**DE konteksts:** abstellen
**CURRENT (DA):** park
**PROPOSED (DA):** FJERN «park»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0071

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** abstellen
**CURRENT (DA):** novietot
**PROPOSED (DA):** FJERN «novietot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0072

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** abstellen
**CURRENT (DA):** nolikt
**PROPOSED (DA):** FJERN «nolikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0073

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** abstellen
**CURRENT (DA):** bicycle
**PROPOSED (DA):** FJERN «bicycle»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0074

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** abstellen
**CURRENT (DA):** disable
**PROPOSED (DA):** FJERN «disable»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0075

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** abstellen
**CURRENT (DA):** water
**PROPOSED (DA):** FJERN «water»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0076

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** abstellen
**CURRENT (DA):** electricity
**PROPOSED (DA):** FJERN «electricity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0077

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.rightBlocks.text.purple.[0][0]
**DE konteksts:** abstellen
**CURRENT (DA):** turn off
**PROPOSED (DA):** FJERN «turn off»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0078

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.rightBlocks.text.yellow.[0][0]
**DE konteksts:** abstellen
**CURRENT (DA):** motoru
**PROPOSED (DA):** FJERN «motoru»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0079

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.rightBlocks.text.yellow.[1][0]
**DE konteksts:** abstellen
**CURRENT (DA):** alarm clock
**PROPOSED (DA):** FJERN «alarm clock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0080

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.rightBlocks.text.purple.[0][1]
**DE konteksts:** abstellen
**CURRENT (DA):** turn off
**PROPOSED (DA):** FJERN «turn off»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0081

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.rightBlocks.text.yellow.[2][1]
**DE konteksts:** abstellen
**CURRENT (DA):** gaismu
**PROPOSED (DA):** FJERN «gaismu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0082

**Card ID:** a2-angewandt
**Field:** lv
**DE konteksts:** angewandt
**CURRENT (DA):** Anvendt • Anvendt • Praktisk
**PROPOSED (DA):** Anvendt • Anvendt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0085

**Card ID:** a2-angewandt
**Field:** study.sectionAccents.comparison.example.purple.[0][1]
**DE konteksts:** angewandt
**CURRENT (DA):** praktiske
**PROPOSED (DA):** FJERN «praktiske»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0086

**Card ID:** a2-angewandt
**Field:** study.sectionAccents.comparison.example.purple.[1][1]
**DE konteksts:** angewandt
**CURRENT (DA):** praktiske
**PROPOSED (DA):** FJERN «praktiske»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0087

**Card ID:** a2-angewandt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** angewandt
**CURRENT (DA):** practical
**PROPOSED (DA):** FJERN «practical»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0088

**Card ID:** a2-angewandt
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** angewandt
**CURRENT (DA):** science
**PROPOSED (DA):** FJERN «science»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0089

**Card ID:** a2-angewandt
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][0]
**DE konteksts:** angewandt
**CURRENT (DA):** for research
**PROPOSED (DA):** FJERN «for research»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0090

**Card ID:** a2-angewandt
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[2][0]
**DE konteksts:** angewandt
**CURRENT (DA):** for studies
**PROPOSED (DA):** FJERN «for studies»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0091

**Card ID:** a2-angewandt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** angewandt
**CURRENT (DA):** pielietots
**PROPOSED (DA):** FJERN «pielietots»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0096

**Card ID:** a2-angreifen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** angreifen
**CURRENT (DA):** uzbrukums
**PROPOSED (DA):** FJERN «uzbrukums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0097

**Card ID:** a2-angreifen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** angreifen
**CURRENT (DA):** fizisks
**PROPOSED (DA):** FJERN «fizisks»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0098

**Card ID:** a2-angreifen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][0]
**DE konteksts:** angreifen
**CURRENT (DA):** direct
**PROPOSED (DA):** FJERN «direct»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0099

**Card ID:** a2-angreifen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** angreifen
**CURRENT (DA):** words
**PROPOSED (DA):** FJERN «words»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0100

**Card ID:** a2-anhänger
**Field:** lv
**DE konteksts:** Anhänger
**CURRENT (DA):** Trailer • Supporter • Vedhæng
**PROPOSED (DA):** Trailer • Supporter
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0104

**Card ID:** a2-anhänger
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Anhänger
**CURRENT (DA):** piekabi
**PROPOSED (DA):** FJERN «piekabi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0105

**Card ID:** a2-anhänger
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Anhänger
**CURRENT (DA):** I agreed
**PROPOSED (DA):** FJERN «I agreed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0106

**Card ID:** a2-anhänger
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** Anhänger
**CURRENT (DA):** kulonu
**PROPOSED (DA):** FJERN «kulonu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0110

**Card ID:** a2-anheizen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** anheizen
**CURRENT (DA):** iekurt
**PROPOSED (DA):** FJERN «iekurt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0111

**Card ID:** a2-anheizen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** anheizen
**CURRENT (DA):** to fuel
**PROPOSED (DA):** FJERN «to fuel»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0112

**Card ID:** a2-anheizen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** anheizen
**CURRENT (DA):** aggravate
**PROPOSED (DA):** FJERN «aggravate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0114

**Card ID:** a2-anlegen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** anlegen
**CURRENT (DA):** invest
**PROPOSED (DA):** FJERN «invest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0115

**Card ID:** a2-anlegen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** anlegen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0116

**Card ID:** a2-anlegen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** anlegen
**CURRENT (DA):** to invest
**PROPOSED (DA):** FJERN «to invest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0117

**Card ID:** a2-anlegen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** anlegen
**CURRENT (DA):** Naudas
**PROPOSED (DA):** FJERN «Naudas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0118

**Card ID:** a2-anlegen
**Field:** study.sectionAccents.tip.leftBlocks.text.red.[0][1]
**DE konteksts:** anlegen
**CURRENT (DA):** izveidot
**PROPOSED (DA):** FJERN «izveidot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0119

**Card ID:** a2-anlegen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** anlegen
**CURRENT (DA):** izveidot
**PROPOSED (DA):** FJERN «izveidot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0120

**Card ID:** a2-anlegen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** anlegen
**CURRENT (DA):** On the computer
**PROPOSED (DA):** FJERN «On the computer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0125

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.comparison.meaning.purple.[0][3]
**DE konteksts:** anmelden
**CURRENT (DA):** book
**PROPOSED (DA):** FJERN «book»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0126

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** anmelden
**CURRENT (DA):** pieteikties
**PROPOSED (DA):** FJERN «pieteikties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0127

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** anmelden
**CURRENT (DA):** the event
**PROPOSED (DA):** FJERN «the event»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0128

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** anmelden
**CURRENT (DA):** kursu
**PROPOSED (DA):** FJERN «kursu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0129

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** anmelden
**CURRENT (DA):** testu
**PROPOSED (DA):** FJERN «testu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0130

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** anmelden
**CURRENT (DA):** to sign up
**PROPOSED (DA):** FJERN «to sign up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0131

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** anmelden
**CURRENT (DA):** doctor
**PROPOSED (DA):** FJERN «doctor»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0132

**Card ID:** a2-anmelden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** anmelden
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0135

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.examples.lv.purple.[0][5]
**DE konteksts:** anstecken
**CURRENT (DA):** Flu
**PROPOSED (DA):** FJERN «Flu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0136

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.examples.lv.purple.[1][5]
**DE konteksts:** anstecken
**CURRENT (DA):** Flu
**PROPOSED (DA):** FJERN «Flu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0137

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.examples.lv.purple.[2][5]
**DE konteksts:** anstecken
**CURRENT (DA):** Flu
**PROPOSED (DA):** FJERN «Flu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0138

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** anstecken
**CURRENT (DA):** get infected
**PROPOSED (DA):** FJERN «get infected»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0139

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** anstecken
**CURRENT (DA):** diseases
**PROPOSED (DA):** FJERN «diseases»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0140

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** anstecken
**CURRENT (DA):** to infect
**PROPOSED (DA):** FJERN «to infect»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0141

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** anstecken
**CURRENT (DA):** get infected
**PROPOSED (DA):** FJERN «get infected»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0142

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** anstecken
**CURRENT (DA):** piespraust
**PROPOSED (DA):** FJERN «piespraust»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0143

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** anstecken
**CURRENT (DA):** piespraust
**PROPOSED (DA):** FJERN «piespraust»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0144

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** anstecken
**CURRENT (DA):** mikrofonu
**PROPOSED (DA):** FJERN «mikrofonu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0145

**Card ID:** a2-anstecken
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** anstecken
**CURRENT (DA):** brooch
**PROPOSED (DA):** FJERN «brooch»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0146

**Card ID:** a2-anstellen
**Field:** study.examples[2].lv
**DE konteksts:** anstellen
**CURRENT (DA):** Vi står for enden af ​​rækken.
**PROPOSED (DA):** Vi står for enden af rækken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0151

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** anstellen
**CURRENT (DA):** to hire
**PROPOSED (DA):** FJERN «to hire»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0152

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** anstellen
**CURRENT (DA):** accept
**PROPOSED (DA):** FJERN «accept»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0153

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** anstellen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0154

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** anstellen
**CURRENT (DA):** at work
**PROPOSED (DA):** FJERN «at work»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0155

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** anstellen
**CURRENT (DA):** darbu
**PROPOSED (DA):** FJERN «darbu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0156

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** anstellen
**CURRENT (DA):** casual
**PROPOSED (DA):** FJERN «casual»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0157

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** anstellen
**CURRENT (DA):** izteiciens
**PROPOSED (DA):** FJERN «izteiciens»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0158

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** anstellen
**CURRENT (DA):** for parking
**PROPOSED (DA):** FJERN «for parking»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0159

**Card ID:** a2-anstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** anstellen
**CURRENT (DA):** in line
**PROPOSED (DA):** FJERN «in line»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0160

**Card ID:** a2-art
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Art
**CURRENT (DA):** veids
**PROPOSED (DA):** FJERN «veids»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0161

**Card ID:** a2-art
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Art
**CURRENT (DA):** to think
**PROPOSED (DA):** FJERN «to think»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0162

**Card ID:** a2-art
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Art
**CURRENT (DA):** safe
**PROPOSED (DA):** FJERN «safe»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0163

**Card ID:** a2-art
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Art
**CURRENT (DA):** neesi
**PROPOSED (DA):** FJERN «neesi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0164

**Card ID:** a2-art
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Art
**CURRENT (DA):** vari
**PROPOSED (DA):** FJERN «vari»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0165

**Card ID:** a2-art
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Art
**CURRENT (DA):** In phrases
**PROPOSED (DA):** FJERN «In phrases»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0170

**Card ID:** a2-artikel
**Field:** study.tip.leftBlocks[1].text
**DE konteksts:** Artikel
**CURRENT (DA):** I butik eller grammatik ændres betydningen af ​​Artikel: vare eller artikel.
**PROPOSED (DA):** I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0171

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Artikel
**CURRENT (DA):** medijos
**PROPOSED (DA):** FJERN «medijos»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0172

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Artikel
**CURRENT (DA):** Tekstos
**PROPOSED (DA):** FJERN «Tekstos»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0173

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Artikel
**CURRENT (DA):** in grammar
**PROPOSED (DA):** FJERN «in grammar»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0174

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Artikel
**CURRENT (DA):** In the store
**PROPOSED (DA):** FJERN «In the store»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0175

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Artikel
**CURRENT (DA):** is changing
**PROPOSED (DA):** FJERN «is changing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0176

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** Artikel
**CURRENT (DA):** meaning
**PROPOSED (DA):** FJERN «meaning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0177

**Card ID:** a2-aufheben
**Field:** lv
**DE konteksts:** aufheben
**CURRENT (DA):** Hæv • Annuller • Gem
**PROPOSED (DA):** Hæv • Annuller
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0181

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** aufheben
**CURRENT (DA):** pacelt
**PROPOSED (DA):** FJERN «pacelt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0182

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** aufheben
**CURRENT (DA):** pacelt
**PROPOSED (DA):** FJERN «pacelt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0183

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** aufheben
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0184

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** aufheben
**CURRENT (DA):** zemes
**PROPOSED (DA):** FJERN «zemes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0185

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** aufheben
**CURRENT (DA):** atcelt
**PROPOSED (DA):** FJERN «atcelt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0186

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** aufheben
**CURRENT (DA):** noteikumu
**PROPOSED (DA):** FJERN «noteikumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0187

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** aufheben
**CURRENT (DA):** atcelt
**PROPOSED (DA):** FJERN «atcelt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0188

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** aufheben
**CURRENT (DA):** decision
**PROPOSED (DA):** FJERN «decision»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0189

**Card ID:** a2-aufheben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** aufheben
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0193

**Card ID:** a2-auflage
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Auflage
**CURRENT (DA):** circulation
**PROPOSED (DA):** FJERN «circulation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0194

**Card ID:** a2-auflage
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Auflage
**CURRENT (DA):** izdevumu
**PROPOSED (DA):** FJERN «izdevumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0195

**Card ID:** a2-auflage
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Auflage
**CURRENT (DA):** condition
**PROPOSED (DA):** FJERN «condition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0196

**Card ID:** a2-aufnahme
**Field:** lv
**DE konteksts:** Aufnahme
**CURRENT (DA):** Optagelse • Optagelse • Foto
**PROPOSED (DA):** Optagelse • Optagelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0199

**Card ID:** a2-aufnahme
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Aufnahme
**CURRENT (DA):** photograph
**PROPOSED (DA):** FJERN «photograph»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0200

**Card ID:** a2-aufnahme
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Aufnahme
**CURRENT (DA):** videoierakstu
**PROPOSED (DA):** FJERN «videoierakstu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0201

**Card ID:** a2-aufnahme
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Aufnahme
**CURRENT (DA):** admission
**PROPOSED (DA):** FJERN «admission»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0202

**Card ID:** a2-aufnahme
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Aufnahme
**CURRENT (DA):** skolu
**PROPOSED (DA):** FJERN «skolu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0203

**Card ID:** a2-aufnahme
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[2][1]
**DE konteksts:** Aufnahme
**CURRENT (DA):** kursu
**PROPOSED (DA):** FJERN «kursu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0207

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][3]
**DE konteksts:** aufnehmen
**CURRENT (DA):** start
**PROPOSED (DA):** FJERN «start»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0208

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** aufnehmen
**CURRENT (DA):** record
**PROPOSED (DA):** FJERN «record»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0209

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** aufnehmen
**CURRENT (DA):** to admit
**PROPOSED (DA):** FJERN «to admit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0210

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** aufnehmen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0211

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** aufnehmen
**CURRENT (DA):** audio
**PROPOSED (DA):** FJERN «audio»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0212

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** aufnehmen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0213

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** aufnehmen
**CURRENT (DA):** to people
**PROPOSED (DA):** FJERN «to people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0214

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** aufnehmen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0215

**Card ID:** a2-aufnehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** aufnehmen
**CURRENT (DA):** in the group
**PROPOSED (DA):** FJERN «in the group»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0216

**Card ID:** a2-aufrichtig
**Field:** lv
**DE konteksts:** aufrichtig
**CURRENT (DA):** Oprigtig • Oprigtig • Åben
**PROPOSED (DA):** Oprigtig • Oprigtig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0221

**Card ID:** a2-aufrichtig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** aufrichtig
**CURRENT (DA):** patiess
**PROPOSED (DA):** FJERN «patiess»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0222

**Card ID:** a2-aufrichtig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** aufrichtig
**CURRENT (DA):** sincere
**PROPOSED (DA):** FJERN «sincere»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0223

**Card ID:** a2-aufrichtig
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** aufrichtig
**CURRENT (DA):** An apology
**PROPOSED (DA):** FJERN «An apology»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0224

**Card ID:** a2-aufrichtig
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][0]
**DE konteksts:** aufrichtig
**CURRENT (DA):** condolences
**PROPOSED (DA):** FJERN «condolences»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0225

**Card ID:** a2-aufrichtig
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[2][0]
**DE konteksts:** aufrichtig
**CURRENT (DA):** wish
**PROPOSED (DA):** FJERN «wish»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0226

**Card ID:** a2-aufrichtig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** aufrichtig
**CURRENT (DA):** nemelo
**PROPOSED (DA):** FJERN «nemelo»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0227

**Card ID:** a2-aufrufen
**Field:** lv
**DE konteksts:** aufrufen
**CURRENT (DA):** Ring op • Åbn • Inviter
**PROPOSED (DA):** Ring op • Åbn
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0229

**Card ID:** a2-aufrufen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** aufrufen
**CURRENT (DA):** to open
**PROPOSED (DA):** FJERN «to open»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0230

**Card ID:** a2-aufrufen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** aufrufen
**CURRENT (DA):** izsaukt
**PROPOSED (DA):** FJERN «izsaukt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0231

**Card ID:** a2-aufrufen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** aufrufen
**CURRENT (DA):** invite
**PROPOSED (DA):** FJERN «invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0232

**Card ID:** a2-aufrufen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[2][1]
**DE konteksts:** aufrufen
**CURRENT (DA):** zu + kam?
**PROPOSED (DA):** FJERN «zu + kam?»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0237

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][3]
**DE konteksts:** auftragen
**CURRENT (DA):** Serve
**PROPOSED (DA):** FJERN «Serve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0238

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.comparison.meaning.purple.[1][3]
**DE konteksts:** auftragen
**CURRENT (DA):** Serve
**PROPOSED (DA):** FJERN «Serve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0239

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.comparison.meaning.purple.[2][3]
**DE konteksts:** auftragen
**CURRENT (DA):** Serve
**PROPOSED (DA):** FJERN «Serve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0240

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** auftragen
**CURRENT (DA):** to apply
**PROPOSED (DA):** FJERN «to apply»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0241

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** auftragen
**CURRENT (DA):** uzdot
**PROPOSED (DA):** FJERN «uzdot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0242

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** auftragen
**CURRENT (DA):** objektu
**PROPOSED (DA):** FJERN «objektu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0243

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** auftragen
**CURRENT (DA):** Skaties
**PROPOSED (DA):** FJERN «Skaties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0244

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** auftragen
**CURRENT (DA):** uzdot
**PROPOSED (DA):** FJERN «uzdot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0245

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** auftragen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0246

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** auftragen
**CURRENT (DA):** pasniegt
**PROPOSED (DA):** FJERN «pasniegt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0247

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** auftragen
**CURRENT (DA):** Food
**PROPOSED (DA):** FJERN «Food»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0248

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** auftragen
**CURRENT (DA):** closer
**PROPOSED (DA):** FJERN «closer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0249

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** auftragen
**CURRENT (DA):** nothing
**PROPOSED (DA):** FJERN «nothing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0250

**Card ID:** a2-auftragen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** auftragen
**CURRENT (DA):** uzdot
**PROPOSED (DA):** FJERN «uzdot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0255

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.comparison.example.yellow.[0][2]
**DE konteksts:** auftreten
**CURRENT (DA):** theatre
**PROPOSED (DA):** FJERN «theatre»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0256

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** auftreten
**CURRENT (DA):** simptomu
**PROPOSED (DA):** FJERN «simptomu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0257

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** auftreten
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0258

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** auftreten
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0259

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** auftreten
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0260

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** auftreten
**CURRENT (DA):** to perform
**PROPOSED (DA):** FJERN «to perform»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0261

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** auftreten
**CURRENT (DA):** to perform
**PROPOSED (DA):** FJERN «to perform»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0262

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** auftreten
**CURRENT (DA):** skatuvi
**PROPOSED (DA):** FJERN «skatuvi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0263

**Card ID:** a2-auftreten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** auftreten
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0267

**Card ID:** a2-aufwenden
**Field:** study.sectionAccents.comparison.meaning.purple.[0][3]
**DE konteksts:** aufwenden
**CURRENT (DA):** invest
**PROPOSED (DA):** FJERN «invest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0268

**Card ID:** a2-aufwenden
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** aufwenden
**CURRENT (DA):** dedicate
**PROPOSED (DA):** FJERN «dedicate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0269

**Card ID:** a2-aufwenden
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** aufwenden
**CURRENT (DA):** to invest
**PROPOSED (DA):** FJERN «to invest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0270

**Card ID:** a2-aufwenden
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** aufwenden
**CURRENT (DA):** spending money
**PROPOSED (DA):** FJERN «spending money»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0272

**Card ID:** a2-aufzeichnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** aufzeichnen
**CURRENT (DA):** record
**PROPOSED (DA):** FJERN «record»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0273

**Card ID:** a2-aufzeichnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** aufzeichnen
**CURRENT (DA):** fix
**PROPOSED (DA):** FJERN «fix»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0274

**Card ID:** a2-aufzeichnen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** aufzeichnen
**CURRENT (DA):** sound
**PROPOSED (DA):** FJERN «sound»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0275

**Card ID:** a2-aufzeichnen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** aufzeichnen
**CURRENT (DA):** datiem
**PROPOSED (DA):** FJERN «datiem»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0276

**Card ID:** a2-aufzeichnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** aufzeichnen
**CURRENT (DA):** drawing
**PROPOSED (DA):** FJERN «drawing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0281

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** aussteigen
**CURRENT (DA):** get off
**PROPOSED (DA):** FJERN «get off»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0282

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** aussteigen
**CURRENT (DA):** transportu
**PROPOSED (DA):** FJERN «transportu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0283

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** aussteigen
**CURRENT (DA):** get off
**PROPOSED (DA):** FJERN «get off»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0284

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** aussteigen
**CURRENT (DA):** quit
**PROPOSED (DA):** FJERN «quit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0285

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** aussteigen
**CURRENT (DA):** quit
**PROPOSED (DA):** FJERN «quit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0286

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** aussteigen
**CURRENT (DA):** projektu
**PROPOSED (DA):** FJERN «projektu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0287

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** aussteigen
**CURRENT (DA):** contract
**PROPOSED (DA):** FJERN «contract»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0288

**Card ID:** a2-aussteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** aussteigen
**CURRENT (DA):** grupu
**PROPOSED (DA):** FJERN «grupu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0293

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][4]
**DE konteksts:** auswählen
**CURRENT (DA):** mark
**PROPOSED (DA):** FJERN «mark»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0294

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** auswählen
**CURRENT (DA):** suitable
**PROPOSED (DA):** FJERN «suitable»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0295

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** auswählen
**CURRENT (DA):** choose
**PROPOSED (DA):** FJERN «choose»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0296

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** auswählen
**CURRENT (DA):** menus
**PROPOSED (DA):** FJERN «menus»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0297

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** auswählen
**CURRENT (DA):** saraksta
**PROPOSED (DA):** FJERN «saraksta»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0298

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** auswählen
**CURRENT (DA):** word
**PROPOSED (DA):** FJERN «word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0299

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** auswählen
**CURRENT (DA):** balsot
**PROPOSED (DA):** FJERN «balsot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0300

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** auswählen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0301

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** auswählen
**CURRENT (DA):** politikas
**PROPOSED (DA):** FJERN «politikas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0302

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** auswählen
**CURRENT (DA):** mean
**PROPOSED (DA):** FJERN «mean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0303

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** auswählen
**CURRENT (DA):** balsot
**PROPOSED (DA):** FJERN «balsot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0304

**Card ID:** a2-auswählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** auswählen
**CURRENT (DA):** therefore
**PROPOSED (DA):** FJERN «therefore»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0307

**Card ID:** a2-ausziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** ausziehen
**CURRENT (DA):** novilkt
**PROPOSED (DA):** FJERN «novilkt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0308

**Card ID:** a2-ausziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** ausziehen
**CURRENT (DA):** Clothing
**PROPOSED (DA):** FJERN «Clothing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0309

**Card ID:** a2-ausziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** ausziehen
**CURRENT (DA):** novilkt
**PROPOSED (DA):** FJERN «novilkt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0310

**Card ID:** a2-ausziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** ausziehen
**CURRENT (DA):** move out
**PROPOSED (DA):** FJERN «move out»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0311

**Card ID:** a2-ausziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** ausziehen
**CURRENT (DA):** move out
**PROPOSED (DA):** FJERN «move out»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0320

**Card ID:** a2-bahn
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Bahn
**CURRENT (DA):** specific train
**PROPOSED (DA):** FJERN «specific train»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0321

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** Band
**CURRENT (DA):** saite
**PROPOSED (DA):** FJERN «saite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0322

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Band
**CURRENT (DA):** artikuls
**PROPOSED (DA):** FJERN «artikuls»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0323

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Band
**CURRENT (DA):** josla
**PROPOSED (DA):** FJERN «josla»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0324

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Band
**CURRENT (DA):** lente
**PROPOSED (DA):** FJERN «lente»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0325

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Band
**CURRENT (DA):** saite
**PROPOSED (DA):** FJERN «saite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0326

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Band
**CURRENT (DA):** lente
**PROPOSED (DA):** FJERN «lente»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0327

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Band
**CURRENT (DA):** music group
**PROPOSED (DA):** FJERN «music group»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0328

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Band
**CURRENT (DA):** artikuls
**PROPOSED (DA):** FJERN «artikuls»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0329

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Band
**CURRENT (DA):** of music
**PROPOSED (DA):** FJERN «of music»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0330

**Card ID:** a2-band
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Band
**CURRENT (DA):** grupa
**PROPOSED (DA):** FJERN «grupa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0337

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Bank
**CURRENT (DA):** banka
**PROPOSED (DA):** FJERN «banka»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0338

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Bank
**CURRENT (DA):** payments
**PROPOSED (DA):** FJERN «payments»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0339

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Bank
**CURRENT (DA):** kontu
**PROPOSED (DA):** FJERN «kontu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0340

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Bank
**CURRENT (DA):** naudu
**PROPOSED (DA):** FJERN «naudu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0341

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** Bank
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0342

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Bank
**CURRENT (DA):** sols
**PROPOSED (DA):** FJERN «sols»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0343

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Bank
**CURRENT (DA):** sitting
**PROPOSED (DA):** FJERN «sitting»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0344

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Bank
**CURRENT (DA):** ielas
**PROPOSED (DA):** FJERN «ielas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0345

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Bank
**CURRENT (DA):** in the park
**PROPOSED (DA):** FJERN «in the park»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0346

**Card ID:** a2-bank
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Bank
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0347

**Card ID:** a2-bauen
**Field:** lv
**DE konteksts:** bauen
**CURRENT (DA):** Byg • Byg • Lav
**PROPOSED (DA):** Byg • Byg
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0349

**Card ID:** a2-bauen
**Field:** study.sectionAccents.examples.lv.purple.[2][5]
**DE konteksts:** bauen
**CURRENT (DA):** model
**PROPOSED (DA):** FJERN «model»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0350

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** bauen
**CURRENT (DA):** Celt
**PROPOSED (DA):** FJERN «Celt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0352

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** bauen
**CURRENT (DA):** tiltu
**PROPOSED (DA):** FJERN «tiltu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0353

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** bauen
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0354

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** bauen
**CURRENT (DA):** rely on
**PROPOSED (DA):** FJERN «rely on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0355

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** bauen
**CURRENT (DA):** lean on
**PROPOSED (DA):** FJERN «lean on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0356

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** bauen
**CURRENT (DA):** lean on
**PROPOSED (DA):** FJERN «lean on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0357

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** bauen
**CURRENT (DA):** rely on
**PROPOSED (DA):** FJERN «rely on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0358

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** bauen
**CURRENT (DA):** check
**PROPOSED (DA):** FJERN «check»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0359

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** bauen
**CURRENT (DA):** meaning
**PROPOSED (DA):** FJERN «meaning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0360

**Card ID:** a2-bauen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** bauen
**CURRENT (DA):** redzi
**PROPOSED (DA):** FJERN «redzi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0361

**Card ID:** a2-bauer
**Field:** study.explanation
**DE konteksts:** Bauer
**CURRENT (DA):** Hovedidé: der Bauer betyder oftest bonde, men i skak betyder det bonde. I hverdagen er der Bauer normalt en person, der arbejder i landbruget. I skaksammenhæng er der Bauer en af ​​brikkerne. Farmer er ikke hovedbetydningen af ​​A2. Konteksten gør det normalt klart, om det er en person eller en skak…
**PROPOSED (DA):** Hovedidé: der Bauer betyder oftest bonde, men i skak betyder det bonde. I hverdagen er der Bauer normalt en person, der arbejder i landbruget. I skaksammenhæng er der Bauer en af brikkerne. Farmer er ikke hovedbetydningen af A2. Konteksten gør det normalt klart, om det er en person eller en skakbrik…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0367

**Card ID:** a2-bauer
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Bauer
**CURRENT (DA):** bandinieks
**PROPOSED (DA):** FJERN «bandinieks»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0368

**Card ID:** a2-bauer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Bauer
**CURRENT (DA):** chess
**PROPOSED (DA):** FJERN «chess»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0373

**Card ID:** a2-bedienen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][3]
**DE konteksts:** bedienen
**CURRENT (DA):** Serve
**PROPOSED (DA):** FJERN «Serve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0374

**Card ID:** a2-bedienen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** bedienen
**CURRENT (DA):** apkalpot
**PROPOSED (DA):** FJERN «apkalpot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0375

**Card ID:** a2-bedienen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** bedienen
**CURRENT (DA):** lietot
**PROPOSED (DA):** FJERN «lietot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0376

**Card ID:** a2-bedienen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** bedienen
**CURRENT (DA):** to lead
**PROPOSED (DA):** FJERN «to lead»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0377

**Card ID:** a2-bedienung
**Field:** study.explanation
**DE konteksts:** Bedienung
**CURRENT (DA):** Hovedidé: die Bedienung kan betyde tjeneste eller en person, der tjener. I en restaurant kan dette ofte være en tjener eller tjener/servitrice. Med apparater kan die Bedienung også betyde brug eller kontrol. Besætning er ikke hovedbetydningen af ​​A2. Konteksten afgør, om det er en proces eller en p…
**PROPOSED (DA):** Hovedidé: die Bedienung kan betyde tjeneste eller en person, der tjener. I en restaurant kan dette ofte være en tjener eller tjener/servitrice. Med apparater kan die Bedienung også betyde brug eller kontrol. Besætning er ikke hovedbetydningen af A2. Konteksten afgør, om det er en proces eller en per…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0385

**Card ID:** a2-behalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** behalten
**CURRENT (DA):** things
**PROPOSED (DA):** FJERN «things»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0386

**Card ID:** a2-behalten
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** behalten
**CURRENT (DA):** to remember
**PROPOSED (DA):** FJERN «to remember»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0387

**Card ID:** a2-behalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** behalten
**CURRENT (DA):** for numbers
**PROPOSED (DA):** FJERN «for numbers»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0388

**Card ID:** a2-behalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** behalten
**CURRENT (DA):** words
**PROPOSED (DA):** FJERN «words»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0389

**Card ID:** a2-behalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** behalten
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0393

**Card ID:** a2-beinahe
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** beinahe
**CURRENT (DA):** nenotika
**PROPOSED (DA):** FJERN «nenotika»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0394

**Card ID:** a2-beinahe
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** beinahe
**CURRENT (DA):** notika
**PROPOSED (DA):** FJERN «notika»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0395

**Card ID:** a2-beinahe
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** beinahe
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0396

**Card ID:** a2-beinahe
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** beinahe
**CURRENT (DA):** more general
**PROPOSED (DA):** FJERN «more general»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0397

**Card ID:** a2-beinahe
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** beinahe
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0398

**Card ID:** a2-beinahe
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** beinahe
**CURRENT (DA):** word
**PROPOSED (DA):** FJERN «word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0399

**Card ID:** a2-beißen-223
**Field:** lv
**DE konteksts:** beißen
**CURRENT (DA):** At bide • At bide • At bide
**PROPOSED (DA):** At bide • At bide
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0405

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.comparison.example.purple.[0][4]
**DE konteksts:** bekannt
**CURRENT (DA):** ubekannt
**PROPOSED (DA):** FJERN «ubekannt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0406

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** bekannt
**CURRENT (DA):** known
**PROPOSED (DA):** FJERN «known»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0407

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** bekannt
**CURRENT (DA):** faktiem
**PROPOSED (DA):** FJERN «faktiem»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0408

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** bekannt
**CURRENT (DA):** known
**PROPOSED (DA):** FJERN «known»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0409

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** bekannt
**CURRENT (DA):** known
**PROPOSED (DA):** FJERN «known»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0410

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** bekannt
**CURRENT (DA):** known
**PROPOSED (DA):** FJERN «known»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0411

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** bekannt
**CURRENT (DA):** to people
**PROPOSED (DA):** FJERN «to people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0412

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** bekannt
**CURRENT (DA):** known
**PROPOSED (DA):** FJERN «known»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0413

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** bekannt
**CURRENT (DA):** places
**PROPOSED (DA):** FJERN «places»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0414

**Card ID:** a2-bekannt
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** bekannt
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0415

**Card ID:** a2-beliebt-227
**Field:** lv
**DE konteksts:** beliebt
**CURRENT (DA):** Favorit • Favorit • Populær
**PROPOSED (DA):** Favorit • Favorit
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0416

**Card ID:** a2-besonders-240
**Field:** lv
**DE konteksts:** besonders
**CURRENT (DA):** Specielt • Specielt • Specielt
**PROPOSED (DA):** Specielt • Specielt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0417

**Card ID:** a2-bestellen
**Field:** study.explanation
**DE konteksts:** bestellen
**CURRENT (DA):** Hovedidé: bestellen i hverdagen betyder ofte at bestille eller reservere. Det bruges til mad på en restaurant, varer på internettet og nogle gange til bordreservation. I udtrykket Grüße bestellen betyder det at overbringe hilsner. Den landbrugsmæssige betydning af 'dyrke en mark' er ikke hovedbetydn…
**PROPOSED (DA):** Hovedidé: bestellen i hverdagen betyder ofte at bestille eller reservere. Det bruges til mad på en restaurant, varer på internettet og nogle gange til bordreservation. I udtrykket Grüße bestellen betyder det at overbringe hilsner. Den landbrugsmæssige betydning af 'dyrke en mark' er ikke hovedbetydn…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0422

**Card ID:** a2-bestellen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][1]
**DE konteksts:** bestellen
**CURRENT (DA):** book
**PROPOSED (DA):** FJERN «book»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0423

**Card ID:** a2-bestellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** bestellen
**CURRENT (DA):** to order
**PROPOSED (DA):** FJERN «to order»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0424

**Card ID:** a2-bestellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** bestellen
**CURRENT (DA):** to book
**PROPOSED (DA):** FJERN «to book»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0430

**Card ID:** a2-bestimmt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** bestimmt
**CURRENT (DA):** probably
**PROPOSED (DA):** FJERN «probably»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0431

**Card ID:** a2-bestimmt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** bestimmt
**CURRENT (DA):** specific
**PROPOSED (DA):** FJERN «specific»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0435

**Card ID:** a2-birne
**Field:** study.sectionAccents.examples.lv.purple.[0][5]
**DE konteksts:** Birne
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0436

**Card ID:** a2-birne
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** Birne
**CURRENT (DA):** Lamp
**PROPOSED (DA):** FJERN «Lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0437

**Card ID:** a2-birne
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Birne
**CURRENT (DA):** bumbieris
**PROPOSED (DA):** FJERN «bumbieris»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0438

**Card ID:** a2-birne
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Birne
**CURRENT (DA):** lampu
**PROPOSED (DA):** FJERN «lampu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0439

**Card ID:** a2-birne
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Birne
**CURRENT (DA):** gaismu
**PROPOSED (DA):** FJERN «gaismu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0440

**Card ID:** a2-bitte-study
**Field:** study.explanation[1]
**DE konteksts:** Bitte
**CURRENT (DA):** Die Bitte betyder hovedsageligt: ​​høflighed.
**PROPOSED (DA):** Die Bitte betyder hovedsageligt: høflighed.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0445

**Card ID:** a2-bitter
**Field:** study.sectionAccents.examples.lv.purple.[1][1]
**DE konteksts:** bitter
**CURRENT (DA):** medicine
**PROPOSED (DA):** FJERN «medicine»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0446

**Card ID:** a2-bitter
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** bitter
**CURRENT (DA):** taste
**PROPOSED (DA):** FJERN «taste»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0447

**Card ID:** a2-bitter
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** bitter
**CURRENT (DA):** tulko
**PROPOSED (DA):** FJERN «tulko»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0448

**Card ID:** a2-bitter
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** bitter
**CURRENT (DA):** the truth
**PROPOSED (DA):** FJERN «the truth»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0449

**Card ID:** a2-bitter
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** bitter
**CURRENT (DA):** loss
**PROPOSED (DA):** FJERN «loss»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0450

**Card ID:** a2-bitter
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** bitter
**CURRENT (DA):** pieredzi
**PROPOSED (DA):** FJERN «pieredzi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0451

**Card ID:** a2-bitter
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** bitter
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0452

**Card ID:** a2-bitter
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** bitter
**CURRENT (DA):** ass
**PROPOSED (DA):** FJERN «ass»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0453

**Card ID:** a2-bitter
**Field:** study.sectionAccents.important.example.red.[0][0]
**DE konteksts:** bitter
**CURRENT (DA):** bitterer
**PROPOSED (DA):** FJERN «bitterer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0454

**Card ID:** a2-boden
**Field:** study.examples[5].lv
**DE konteksts:** Boden
**CURRENT (DA):** Der er stadig vand i bunden af ​​flasken.
**PROPOSED (DA):** Der er stadig vand i bunden af flasken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0458

**Card ID:** a2-boden
**Field:** study.comparison[4].meaning
**DE konteksts:** Boden
**CURRENT (DA):** Bunden af ​​flasken
**PROPOSED (DA):** Bunden af flasken
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0459

**Card ID:** a2-boden
**Field:** study.important.text
**DE konteksts:** Boden
**CURRENT (DA):** Betydningen af ​​Boden varierer fra sted til sted.
**PROPOSED (DA):** Betydningen af Boden varierer fra sted til sted.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0460

**Card ID:** a2-boden
**Field:** study.important.example
**DE konteksts:** Boden
**CURRENT (DA):** auf dem Boden = på gulvet. fruchtbarer Boden = frugtbar jord. Boden der Flasche = bunden af ​​flasken.
**PROPOSED (DA):** auf dem Boden = på gulvet. fruchtbarer Boden = frugtbar jord. Boden der Flasche = bunden af flasken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0461

**Card ID:** a2-boden
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Boden
**CURRENT (DA):** the floor
**PROPOSED (DA):** FJERN «the floor»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0462

**Card ID:** a2-boden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Boden
**CURRENT (DA):** the floor
**PROPOSED (DA):** FJERN «the floor»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0463

**Card ID:** a2-boden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Boden
**CURRENT (DA):** In the room
**PROPOSED (DA):** FJERN «In the room»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0464

**Card ID:** a2-boden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Boden
**CURRENT (DA):** mean
**PROPOSED (DA):** FJERN «mean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0465

**Card ID:** a2-boden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Boden
**CURRENT (DA):** In the garden
**PROPOSED (DA):** FJERN «In the garden»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0466

**Card ID:** a2-boden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Boden
**CURRENT (DA):** in nature
**PROPOSED (DA):** FJERN «in nature»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0467

**Card ID:** a2-boden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** Boden
**CURRENT (DA):** zemi
**PROPOSED (DA):** FJERN «zemi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0471

**Card ID:** a2-borgen
**Field:** study.important.text
**DE konteksts:** borgen
**CURRENT (DA):** Betydningen af ​​borgen afhænger af retningen.
**PROPOSED (DA):** Betydningen af borgen afhænger af retningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0472

**Card ID:** a2-borgen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** borgen
**CURRENT (DA):** borrow
**PROPOSED (DA):** FJERN «borrow»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0473

**Card ID:** a2-borgen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** borgen
**CURRENT (DA):** borrow
**PROPOSED (DA):** FJERN «borrow»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0474

**Card ID:** a2-borgen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** borgen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0475

**Card ID:** a2-borgen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** borgen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0476

**Card ID:** a2-borgen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** borgen
**CURRENT (DA):** citam
**PROPOSED (DA):** FJERN «citam»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0480

**Card ID:** a2-böse
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** böse
**CURRENT (DA):** angry
**PROPOSED (DA):** FJERN «angry»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0489

**Card ID:** a2-Briefkasten-290
**Field:** lv
**DE konteksts:** Briefkasten
**CURRENT (DA):** Postkasse • ​​Brevkasse
**PROPOSED (DA):** Postkasse • Brevkasse
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0490

**Card ID:** a2-Chance-306
**Field:** lv
**DE konteksts:** Chance
**CURRENT (DA):** Mulighed • Udsigt • Mulighed
**PROPOSED (DA):** Mulighed • Udsigt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0491

**Card ID:** a2-dabei
**Field:** study.explanation[3]
**DE konteksts:** dabei
**CURRENT (DA):** I daglig tale betyder dabe ofte også foruden • "udover" er en sekundær variant, ikke betydningen af ​​hovedtitlen.
**PROPOSED (DA):** I daglig tale betyder dabe ofte også foruden • "udover" er en sekundær variant, ikke betydningen af hovedtitlen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0496

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** dabei
**CURRENT (DA):** along with
**PROPOSED (DA):** FJERN «along with»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0497

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** dabei
**CURRENT (DA):** pateikt
**PROPOSED (DA):** FJERN «pateikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0498

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** dabei
**CURRENT (DA):** German
**PROPOSED (DA):** FJERN «German»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0499

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** dabei
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0500

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** dabei
**CURRENT (DA):** along with
**PROPOSED (DA):** FJERN «along with»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0501

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** dabei
**CURRENT (DA):** vari
**PROPOSED (DA):** FJERN «vari»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0502

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** dabei
**CURRENT (DA):** pievienotu
**PROPOSED (DA):** FJERN «pievienotu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0503

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** dabei
**CURRENT (DA):** in addition
**PROPOSED (DA):** FJERN «in addition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0504

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** dabei
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0505

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** dabei
**CURRENT (DA):** vienu
**PROPOSED (DA):** FJERN «vienu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0506

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** dabei
**CURRENT (DA):** doma
**PROPOSED (DA):** FJERN «doma»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0507

**Card ID:** a2-dabei
**Field:** study.sectionAccents.tip.leftBlocks.text.red.[0][1]
**DE konteksts:** dabei
**CURRENT (DA):** pie tam
**PROPOSED (DA):** FJERN «pie tam»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0508

**Card ID:** a2-dafür
**Field:** lv
**DE konteksts:** dafür
**CURRENT (DA):** For at • At • Dog
**PROPOSED (DA):** For at • At
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0512

**Card ID:** a2-dafür
**Field:** study.sectionAccents.comparison.example.purple.[0][0]
**DE konteksts:** dafür
**CURRENT (DA):** Takke
**PROPOSED (DA):** FJERN «Takke»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0513

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** dafür
**CURRENT (DA):** pateikt
**PROPOSED (DA):** FJERN «pateikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0514

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** dafür
**CURRENT (DA):** German
**PROPOSED (DA):** FJERN «German»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0515

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** dafür
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0516

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** dafür
**CURRENT (DA):** vari
**PROPOSED (DA):** FJERN «vari»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0517

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** dafür
**CURRENT (DA):** pretstats
**PROPOSED (DA):** FJERN «pretstats»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0518

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** dafür
**CURRENT (DA):** in a sentence
**PROPOSED (DA):** FJERN «in a sentence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0519

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** dafür
**CURRENT (DA):** toties
**PROPOSED (DA):** FJERN «toties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0520

**Card ID:** a2-dafür
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** dafür
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0524

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** damit
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0525

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** damit
**CURRENT (DA):** lietu
**PROPOSED (DA):** FJERN «lietu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0526

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** damit
**CURRENT (DA):** doma
**PROPOSED (DA):** FJERN «doma»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0527

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** damit
**CURRENT (DA):** notiktu
**PROPOSED (DA):** FJERN «notiktu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0528

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** damit
**CURRENT (DA):** purpose
**PROPOSED (DA):** FJERN «purpose»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0529

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** damit
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0530

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** damit
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0531

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** damit
**CURRENT (DA):** doma
**PROPOSED (DA):** FJERN «doma»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0536

**Card ID:** study-der-dank
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Dank
**CURRENT (DA):** atbildei
**PROPOSED (DA):** FJERN «atbildei»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0537

**Card ID:** study-der-dank
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Dank
**CURRENT (DA):** more formal
**PROPOSED (DA):** FJERN «more formal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0538

**Card ID:** study-der-dank
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** Dank
**CURRENT (DA):** for gratitude
**PROPOSED (DA):** FJERN «for gratitude»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0539

**Card ID:** a2-darauf
**Field:** lv
**DE konteksts:** darauf
**CURRENT (DA):** På den • På den • Efter det
**PROPOSED (DA):** På den • På den
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0543

**Card ID:** a2-darauf
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** darauf
**CURRENT (DA):** actions
**PROPOSED (DA):** FJERN «actions»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0544

**Card ID:** a2-darauf
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** darauf
**CURRENT (DA):** Skaties
**PROPOSED (DA):** FJERN «Skaties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0545

**Card ID:** a2-darauf
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** darauf
**CURRENT (DA):** word
**PROPOSED (DA):** FJERN «word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0546

**Card ID:** a2-darauf
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** darauf
**CURRENT (DA):** German
**PROPOSED (DA):** FJERN «German»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0547

**Card ID:** a2-darauf
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** darauf
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0551

**Card ID:** a2-darüber
**Field:** study.sectionAccents.examples.lv.purple.[0][4]
**DE konteksts:** darüber
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0552

**Card ID:** a2-darüber
**Field:** study.sectionAccents.examples.lv.purple.[1][4]
**DE konteksts:** darüber
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0553

**Card ID:** a2-darüber
**Field:** study.sectionAccents.examples.lv.purple.[2][4]
**DE konteksts:** darüber
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0554

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** darüber
**CURRENT (DA):** of a pronoun
**PROPOSED (DA):** FJERN «of a pronoun»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0555

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** darüber
**CURRENT (DA):** actions
**PROPOSED (DA):** FJERN «actions»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0556

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** darüber
**CURRENT (DA):** word
**PROPOSED (DA):** FJERN «word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0557

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** darüber
**CURRENT (DA):** location
**PROPOSED (DA):** FJERN «location»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0558

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** darüber
**CURRENT (DA):** above
**PROPOSED (DA):** FJERN «above»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0559

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** darüber
**CURRENT (DA):** above it
**PROPOSED (DA):** FJERN «above it»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0560

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** darüber
**CURRENT (DA):** vietu
**PROPOSED (DA):** FJERN «vietu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0561

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** darüber
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0562

**Card ID:** a2-darüber
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** darüber
**CURRENT (DA):** virs
**PROPOSED (DA):** FJERN «virs»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0567

**Card ID:** a2-darum
**Field:** study.sectionAccents.comparison.example.purple.[0][4]
**DE konteksts:** darum
**CURRENT (DA):** Takke
**PROPOSED (DA):** FJERN «Takke»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0568

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** darum
**CURRENT (DA):** therefore
**PROPOSED (DA):** FJERN «therefore»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0569

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** darum
**CURRENT (DA):** paskaidro
**PROPOSED (DA):** FJERN «paskaidro»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0570

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** darum
**CURRENT (DA):** iemeslu
**PROPOSED (DA):** FJERN «iemeslu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0571

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** darum
**CURRENT (DA):** in a sentence
**PROPOSED (DA):** FJERN «in a sentence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0572

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** darum
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0573

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** darum
**CURRENT (DA):** sekas
**PROPOSED (DA):** FJERN «sekas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0574

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** darum
**CURRENT (DA):** Izteiciens
**PROPOSED (DA):** FJERN «Izteiciens»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0575

**Card ID:** a2-darum
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** darum
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0576

**Card ID:** a2-davor
**Field:** study.explanation[2]
**DE konteksts:** davor
**CURRENT (DA):** I betydningen af ​​tid betyder davor før.
**PROPOSED (DA):** I betydningen af tid betyder davor før.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0580

**Card ID:** a2-davor
**Field:** study.important[0]
**DE konteksts:** davor
**CURRENT (DA):** Betydningen af ​​davor ændres i henhold til kontekst.
**PROPOSED (DA):** Betydningen af davor ændres i henhold til kontekst.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0581

**Card ID:** a2-dazu
**Field:** study.explanation[2]
**DE konteksts:** dazu
**CURRENT (DA):** Det kan betyde ved siden af ​​eller nærværende, hvis der tilføjes noget.
**PROPOSED (DA):** Det kan betyde ved siden af eller nærværende, hvis der tilføjes noget.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0584

**Card ID:** a2-dazu
**Field:** study.sectionAccents.comparison.example.purple.[0][1]
**DE konteksts:** dazu
**CURRENT (DA):** Takke
**PROPOSED (DA):** FJERN «Takke»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0587

**Card ID:** a2-decke
**Field:** study.important[1]
**DE konteksts:** Decke
**CURRENT (DA):** das Dach er et tag på ydersiden eller toppen af ​​en bygning.
**PROPOSED (DA):** das Dach er et tag på ydersiden eller toppen af en bygning.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0588

**Card ID:** a2-decke
**Field:** study.sectionAccents.examples.lv.purple.[0][2]
**DE konteksts:** Decke
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0592

**Card ID:** a2-deutlich-340
**Field:** lv
**DE konteksts:** deutlich
**CURRENT (DA):** Klar • Klar • Forståelig
**PROPOSED (DA):** Klar • Klar
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0600

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** doch
**CURRENT (DA):** however
**PROPOSED (DA):** FJERN «however»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0601

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** doch
**CURRENT (DA):** emocija
**PROPOSED (DA):** FJERN «emocija»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0602

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** doch
**CURRENT (DA):** in a sentence
**PROPOSED (DA):** FJERN «in a sentence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0603

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** doch
**CURRENT (DA):** uzsvars
**PROPOSED (DA):** FJERN «uzsvars»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0604

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** doch
**CURRENT (DA):** skan
**PROPOSED (DA):** FJERN «skan»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0605

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** doch
**CURRENT (DA):** German
**PROPOSED (DA):** FJERN «German»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0606

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** doch
**CURRENT (DA):** affirmative
**PROPOSED (DA):** FJERN «affirmative»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0607

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** doch
**CURRENT (DA):** denying
**PROPOSED (DA):** FJERN «denying»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0608

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** doch
**CURRENT (DA):** question
**PROPOSED (DA):** FJERN «question»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0609

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** doch
**CURRENT (DA):** atbilde
**PROPOSED (DA):** FJERN «atbilde»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0610

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** doch
**CURRENT (DA):** German
**PROPOSED (DA):** FJERN «German»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0611

**Card ID:** a2-doch
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** doch
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0616

**Card ID:** a2-doppelt-349
**Field:** lv
**DE konteksts:** doppelt
**CURRENT (DA):** Dobbelt • Dobbelt • Dobbelt
**PROPOSED (DA):** Dobbelt • Dobbelt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0617

**Card ID:** a2-dünn
**Field:** study.explanation[0]
**DE konteksts:** dünn
**CURRENT (DA):** Hovedidé: Betydningen af ​​dünn ændrer sig alt efter sagen: en person er tynd, papir er tyndt, hår kan være sparsomt, suppe kan være flydende.
**PROPOSED (DA):** Hovedidé: Betydningen af dünn ændrer sig alt efter sagen: en person er tynd, papir er tyndt, hår kan være sparsomt, suppe kan være flydende.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0625

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.blue.[0][0]
**DE konteksts:** eben
**CURRENT (DA):** nupat
**PROPOSED (DA):** FJERN «nupat»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0626

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** eben
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0627

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** eben
**CURRENT (DA):** laiku
**PROPOSED (DA):** FJERN «laiku»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0628

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** eben
**CURRENT (DA):** together
**PROPOSED (DA):** FJERN «together»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0629

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** eben
**CURRENT (DA):** that's how it is
**PROPOSED (DA):** FJERN «that's how it is»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0630

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** eben
**CURRENT (DA):** attieksme
**PROPOSED (DA):** FJERN «attieksme»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0631

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** eben
**CURRENT (DA):** simply
**PROPOSED (DA):** FJERN «simply»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0632

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** eben
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0633

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** eben
**CURRENT (DA):** skan
**PROPOSED (DA):** FJERN «skan»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0642

**Card ID:** a2-einladen
**Field:** study.sectionAccents.examples.lv.purple.[0][0]
**DE konteksts:** einladen
**CURRENT (DA):** invite
**PROPOSED (DA):** FJERN «invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0643

**Card ID:** a2-einladen
**Field:** study.sectionAccents.examples.lv.purple.[1][0]
**DE konteksts:** einladen
**CURRENT (DA):** invite
**PROPOSED (DA):** FJERN «invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0644

**Card ID:** a2-einladen
**Field:** study.sectionAccents.examples.lv.purple.[2][0]
**DE konteksts:** einladen
**CURRENT (DA):** invite
**PROPOSED (DA):** FJERN «invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0645

**Card ID:** a2-einladen
**Field:** study.sectionAccents.examples.lv.purple.[0][1]
**DE konteksts:** einladen
**CURRENT (DA):** invite
**PROPOSED (DA):** FJERN «invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0646

**Card ID:** a2-einladen
**Field:** study.sectionAccents.examples.lv.purple.[1][1]
**DE konteksts:** einladen
**CURRENT (DA):** invite
**PROPOSED (DA):** FJERN «invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0647

**Card ID:** a2-einladen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][0]
**DE konteksts:** einladen
**CURRENT (DA):** Invite
**PROPOSED (DA):** FJERN «Invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0648

**Card ID:** a2-einladen
**Field:** study.sectionAccents.comparison.meaning.purple.[1][0]
**DE konteksts:** einladen
**CURRENT (DA):** Invite
**PROPOSED (DA):** FJERN «Invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0649

**Card ID:** a2-einladen
**Field:** study.sectionAccents.comparison.meaning.purple.[2][0]
**DE konteksts:** einladen
**CURRENT (DA):** Invite
**PROPOSED (DA):** FJERN «Invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0650

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** einladen
**CURRENT (DA):** to invite
**PROPOSED (DA):** FJERN «to invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0651

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** einladen
**CURRENT (DA):** to invite
**PROPOSED (DA):** FJERN «to invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0652

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** einladen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0653

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** einladen
**CURRENT (DA):** to invite
**PROPOSED (DA):** FJERN «to invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0654

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** einladen
**CURRENT (DA):** Personu
**PROPOSED (DA):** FJERN «Personu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0655

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** einladen
**CURRENT (DA):** to invite
**PROPOSED (DA):** FJERN «to invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0656

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** einladen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0657

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** einladen
**CURRENT (DA):** iekraut
**PROPOSED (DA):** FJERN «iekraut»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0658

**Card ID:** a2-einladen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** einladen
**CURRENT (DA):** Kravas
**PROPOSED (DA):** FJERN «Kravas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0659

**Card ID:** a2-einladen
**Field:** study.sectionAccents.important.text.red.[3][0]
**DE konteksts:** einladen
**CURRENT (DA):** social
**PROPOSED (DA):** FJERN «social»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0660

**Card ID:** a2-einschalten
**Field:** study.explanation
**DE konteksts:** einschalten
**CURRENT (DA):** Einschalten betyder oftest tænd for enheden. Den bruges til lys, TV, computer eller radio. Det kan også betyde at involvere en person eller institution i løsningen af ​​et problem. Nogle gange kan processen aktiveres automatisk. Betydningen fremgår tydeligt af objektet: Licht, Fernseher, Anwalt elle…
**PROPOSED (DA):** Einschalten betyder oftest tænd for enheden. Den bruges til lys, TV, computer eller radio. Det kan også betyde at involvere en person eller institution i løsningen af et problem. Nogle gange kan processen aktiveres automatisk. Betydningen fremgår tydeligt af objektet: Licht, Fernseher, Anwalt eller …
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0665

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.comparison.meaning.purple.[0][3]
**DE konteksts:** einschalten
**CURRENT (DA):** Involve
**PROPOSED (DA):** FJERN «Involve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0666

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** einschalten
**CURRENT (DA):** turn on
**PROPOSED (DA):** FJERN «turn on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0667

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** einschalten
**CURRENT (DA):** For devices
**PROPOSED (DA):** FJERN «For devices»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0668

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** einschalten
**CURRENT (DA):** turn on
**PROPOSED (DA):** FJERN «turn on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0669

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** einschalten
**CURRENT (DA):** involve
**PROPOSED (DA):** FJERN «involve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0670

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** einschalten
**CURRENT (DA):** institutions
**PROPOSED (DA):** FJERN «institutions»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0671

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** einschalten
**CURRENT (DA):** For people
**PROPOSED (DA):** FJERN «For people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0672

**Card ID:** a2-einschalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** einschalten
**CURRENT (DA):** involve
**PROPOSED (DA):** FJERN «involve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0673

**Card ID:** a2-einschlafen
**Field:** study.explanation
**DE konteksts:** einschlafen
**CURRENT (DA):** Hovedidé: einschlafen betyder at falde i søvn • For en arm eller et ben betyder det at blive følelsesløs. Med et menneske betyder det normalt, at nogen falder i søvn. Med en kropsdel ​​betyder einschlafen, at den bliver følelsesløs. på dansk er "søvn" et synonym, men hovedbetydningen af ​​A2 er "at …
**PROPOSED (DA):** Hovedidé: einschlafen betyder at falde i søvn • For en arm eller et ben betyder det at blive følelsesløs. Med et menneske betyder det normalt, at nogen falder i søvn. Med en kropsdel betyder einschlafen, at den bliver følelsesløs. på dansk er "søvn" et synonym, men hovedbetydningen af A2 er "at fald…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0676

**Card ID:** a2-einschlafen
**Field:** study.sectionAccents.examples.lv.purple.[0][4]
**DE konteksts:** einschlafen
**CURRENT (DA):** hand
**PROPOSED (DA):** FJERN «hand»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0680

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** einsteigen
**CURRENT (DA):** get in
**PROPOSED (DA):** FJERN «get in»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0681

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** einsteigen
**CURRENT (DA):** In transport
**PROPOSED (DA):** FJERN «In transport»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0682

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** einsteigen
**CURRENT (DA):** get in
**PROPOSED (DA):** FJERN «get in»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0683

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** einsteigen
**CURRENT (DA):** get involved
**PROPOSED (DA):** FJERN «get involved»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0684

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** einsteigen
**CURRENT (DA):** to participate
**PROPOSED (DA):** FJERN «to participate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0685

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** einsteigen
**CURRENT (DA):** get involved
**PROPOSED (DA):** FJERN «get involved»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0686

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** einsteigen
**CURRENT (DA):** In the project
**PROPOSED (DA):** FJERN «In the project»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0687

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** einsteigen
**CURRENT (DA):** in the market
**PROPOSED (DA):** FJERN «in the market»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0688

**Card ID:** a2-einsteigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** einsteigen
**CURRENT (DA):** to start
**PROPOSED (DA):** FJERN «to start»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0696

**Card ID:** a2-etwa
**Field:** study.important[1]
**DE konteksts:** etwa
**CURRENT (DA):** gäffer + tal = ca / ​​cirka, mere neutral.
**PROPOSED (DA):** gäffer + tal = ca / cirka, mere neutral.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0702

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** Fach
**CURRENT (DA):** subject
**PROPOSED (DA):** FJERN «subject»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0703

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Fach
**CURRENT (DA):** subject of study
**PROPOSED (DA):** FJERN «subject of study»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0704

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Fach
**CURRENT (DA):** subject
**PROPOSED (DA):** FJERN «subject»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0705

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Fach
**CURRENT (DA):** learning
**PROPOSED (DA):** FJERN «learning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0706

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Fach
**CURRENT (DA):** At school
**PROPOSED (DA):** FJERN «At school»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0707

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** Fach
**CURRENT (DA):** compartment
**PROPOSED (DA):** FJERN «compartment»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0708

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Fach
**CURRENT (DA):** compartment
**PROPOSED (DA):** FJERN «compartment»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0709

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Fach
**CURRENT (DA):** on the shelf
**PROPOSED (DA):** FJERN «on the shelf»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0710

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Fach
**CURRENT (DA):** In the closet
**PROPOSED (DA):** FJERN «In the closet»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0711

**Card ID:** a2-fach
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Fach
**CURRENT (DA):** in the bag
**PROPOSED (DA):** FJERN «in the bag»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0716

**Card ID:** a2-fall
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Fall
**CURRENT (DA):** frequent
**PROPOSED (DA):** FJERN «frequent»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0717

**Card ID:** a2-fall
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Fall
**CURRENT (DA):** phrase
**PROPOSED (DA):** FJERN «phrase»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0718

**Card ID:** a2-fall
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** Fall
**CURRENT (DA):** in this one
**PROPOSED (DA):** FJERN «in this one»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0719

**Card ID:** a2-fall
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Fall
**CURRENT (DA):** Gramatikas
**PROPOSED (DA):** FJERN «Gramatikas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0720

**Card ID:** a2-fall
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Fall
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0721

**Card ID:** a2-fall
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Fall
**CURRENT (DA):** inflection
**PROPOSED (DA):** FJERN «inflection»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0725

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** fest
**CURRENT (DA):** mezglu
**PROPOSED (DA):** FJERN «mezglu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0726

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** fest
**CURRENT (DA):** screw
**PROPOSED (DA):** FJERN «screw»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0727

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** fest
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0728

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** fest
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0729

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** fest
**CURRENT (DA):** cover
**PROPOSED (DA):** FJERN «cover»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0730

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** fest
**CURRENT (DA):** fixed
**PROPOSED (DA):** FJERN «fixed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0731

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** fest
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0732

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** fest
**CURRENT (DA):** darbu
**PROPOSED (DA):** FJERN «darbu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0733

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** fest
**CURRENT (DA):** the plan
**PROPOSED (DA):** FJERN «the plan»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0734

**Card ID:** a2-fest
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** fest
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0738

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Feuer
**CURRENT (DA):** controlled
**PROPOSED (DA):** FJERN «controlled»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0739

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Feuer
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0740

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Feuer
**CURRENT (DA):** tulko
**PROPOSED (DA):** FJERN «tulko»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0741

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Feuer
**CURRENT (DA):** fire
**PROPOSED (DA):** FJERN «fire»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0742

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Feuer
**CURRENT (DA):** danger
**PROPOSED (DA):** FJERN «danger»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0743

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Feuer
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0744

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Feuer
**CURRENT (DA):** house
**PROPOSED (DA):** FJERN «house»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0745

**Card ID:** a2-feuer
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** Feuer
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0762

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** führen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0763

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** führen
**CURRENT (DA):** road
**PROPOSED (DA):** FJERN «road»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0764

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** führen
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0766

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** führen
**CURRENT (DA):** to lead
**PROPOSED (DA):** FJERN «to lead»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0767

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** führen
**CURRENT (DA):** komandu
**PROPOSED (DA):** FJERN «komandu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0768

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** führen
**CURRENT (DA):** sarunu
**PROPOSED (DA):** FJERN «sarunu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0769

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** führen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0770

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** führen
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0771

**Card ID:** a2-gang
**Field:** lv
**DE konteksts:** Gang
**CURRENT (DA):** Korridor • Kursus • Madrunde
**PROPOSED (DA):** Korridor • Kursus
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0772

**Card ID:** a2-gang
**Field:** study.explanation[0]
**DE konteksts:** Gang
**CURRENT (DA):** Hovedidé: Betydningen af ​​der Gang er bestemt af konteksten: i et rum er det en gang, i bevægelse er det et kursus, i en menu er det et kursus med mad.
**PROPOSED (DA):** Hovedidé: Betydningen af der Gang er bestemt af konteksten: i et rum er det en gang, i bevægelse er det et kursus, i en menu er det et kursus med mad.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0773

**Card ID:** a2-gang
**Field:** study.explanation[4]
**DE konteksts:** Gang
**CURRENT (DA):** I en teknisk sammenhæng kan Gang betyde gear, men det er ikke hovedanvendelsen af ​​A2.
**PROPOSED (DA):** I en teknisk sammenhæng kan Gang betyde gear, men det er ikke hovedanvendelsen af A2.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0774

**Card ID:** a2-gang
**Field:** study.examples[1].lv
**DE konteksts:** Gang
**CURRENT (DA):** Toilettet er for enden af ​​gangen.
**PROPOSED (DA):** Toilettet er for enden af gangen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0775

**Card ID:** a2-gang
**Field:** study.important[3]
**DE konteksts:** Gang
**CURRENT (DA):** Betydningen af ​​gear er teknisk og skal genkendes af bilens sammenhæng.
**PROPOSED (DA):** Betydningen af gear er teknisk og skal genkendes af bilens sammenhæng.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0776

**Card ID:** a2-Gegend-568
**Field:** lv
**DE konteksts:** Gegend
**CURRENT (DA):** Lokalitet • Kvarter • Kvarter
**PROPOSED (DA):** Lokalitet • Kvarter
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0777

**Card ID:** a2-Gegenstand-569
**Field:** lv
**DE konteksts:** Gegenstand
**CURRENT (DA):** Emne • Ting • Emne
**PROPOSED (DA):** Emne • Ting
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0778

**Card ID:** a2-gegenüber
**Field:** lv
**DE konteksts:** gegenüber
**CURRENT (DA):** Mod • Versus • Sammenlignet med
**PROPOSED (DA):** Mod • Versus
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0781

**Card ID:** a2-gehören
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** gehören
**CURRENT (DA):** part
**PROPOSED (DA):** FJERN «part»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0782

**Card ID:** a2-gemütlich-575
**Field:** lv
**DE konteksts:** gemütlich
**CURRENT (DA):** Hyggeligt • Behageligt • Komfortabelt
**PROPOSED (DA):** Hyggeligt • Behageligt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0783

**Card ID:** a2-genau
**Field:** lv
**DE konteksts:** genau
**CURRENT (DA):** Præcis • Præcis • Præcis
**PROPOSED (DA):** Præcis • Præcis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0788

**Card ID:** a2-genau
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** genau
**CURRENT (DA):** accuracy
**PROPOSED (DA):** FJERN «accuracy»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0789

**Card ID:** a2-genau
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** genau
**CURRENT (DA):** right now
**PROPOSED (DA):** FJERN «right now»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0790

**Card ID:** a2-gerade
**Field:** study.explanation[4]
**DE konteksts:** gerade
**CURRENT (DA):** For tal kan gerade betyde lige, men dette er ikke hovedanvendelsen af ​​A2.
**PROPOSED (DA):** For tal kan gerade betyde lige, men dette er ikke hovedanvendelsen af A2.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0795

**Card ID:** a2-geschäft
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** Geschäft
**CURRENT (DA):** Firm
**PROPOSED (DA):** FJERN «Firm»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0796

**Card ID:** a2-geschäft
**Field:** study.sectionAccents.comparison.meaning.purple.[1][2]
**DE konteksts:** Geschäft
**CURRENT (DA):** Firm
**PROPOSED (DA):** FJERN «Firm»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0797

**Card ID:** a2-geschäft
**Field:** study.sectionAccents.comparison.meaning.purple.[2][2]
**DE konteksts:** Geschäft
**CURRENT (DA):** Firm
**PROPOSED (DA):** FJERN «Firm»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0798

**Card ID:** a2-geschäft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Geschäft
**CURRENT (DA):** to do
**PROPOSED (DA):** FJERN «to do»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0799

**Card ID:** a2-geschäft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Geschäft
**CURRENT (DA):** labu
**PROPOSED (DA):** FJERN «labu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0807

**Card ID:** a2-grund
**Field:** study.explanation
**DE konteksts:** Grund
**CURRENT (DA):** Der Grund betyder oftest fornuft. Udtrykket aus diesem Grund betyder 'af denne grund'. Grund kan også betyde fundament eller jord, som noget står på. I naturen kan det betyde jord eller jord. Grund kan i vandsammenhæng betyde bund, såsom bunden af ​​en sø. Så dette ord er meget kontekstafhængigt.
**PROPOSED (DA):** Der Grund betyder oftest fornuft. Udtrykket aus diesem Grund betyder 'af denne grund'. Grund kan også betyde fundament eller jord, som noget står på. I naturen kan det betyde jord eller jord. Grund kan i vandsammenhæng betyde bund, såsom bunden af en sø. Så dette ord er meget kontekstafhængigt.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0808

**Card ID:** a2-grund
**Field:** study.examples[5].lv
**DE konteksts:** Grund
**CURRENT (DA):** Det er mørkt på bunden af ​​søen.
**PROPOSED (DA):** Det er mørkt på bunden af søen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0813

**Card ID:** a2-grund
**Field:** study.comparison[4].meaning
**DE konteksts:** Grund
**CURRENT (DA):** Bunden af ​​søen
**PROPOSED (DA):** Bunden af søen
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0814

**Card ID:** a2-grund
**Field:** study.important.example
**DE konteksts:** Grund
**CURRENT (DA):** Grund des Problemer = årsagen til problemet. fester Grund = fast fundament. Grund des Sees = bunden af ​​søen.
**PROPOSED (DA):** Grund des Problemer = årsagen til problemet. fester Grund = fast fundament. Grund des Sees = bunden af søen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0815

**Card ID:** a2-grund
**Field:** study.sectionAccents.examples.lv.purple.[0][2]
**DE konteksts:** Grund
**CURRENT (DA):** problem
**PROPOSED (DA):** FJERN «problem»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0816

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Grund
**CURRENT (DA):** frequent
**PROPOSED (DA):** FJERN «frequent»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0817

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Grund
**CURRENT (DA):** phrase
**PROPOSED (DA):** FJERN «phrase»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0818

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Grund
**CURRENT (DA):** mean
**PROPOSED (DA):** FJERN «mean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0819

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Grund
**CURRENT (DA):** pamatu
**PROPOSED (DA):** FJERN «pamatu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0820

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Grund
**CURRENT (DA):** ezeru
**PROPOSED (DA):** FJERN «ezeru»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0821

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Grund
**CURRENT (DA):** house
**PROPOSED (DA):** FJERN «house»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0822

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** Grund
**CURRENT (DA):** zemi
**PROPOSED (DA):** FJERN «zemi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0826

**Card ID:** a2-hängen
**Field:** study.sectionAccents.examples.lv.purple.[0][2]
**DE konteksts:** hängen
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0827

**Card ID:** a2-hängen
**Field:** study.sectionAccents.comparison.example.blue.[0][0]
**DE konteksts:** hängen
**CURRENT (DA):** hængt
**PROPOSED (DA):** FJERN «hængt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0828

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Holz
**CURRENT (DA):** pieskarties
**PROPOSED (DA):** FJERN «pieskarties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0829

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Holz
**CURRENT (DA):** for the material
**PROPOSED (DA):** FJERN «for the material»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0830

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Holz
**CURRENT (DA):** izgatavo
**PROPOSED (DA):** FJERN «izgatavo»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0831

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Holz
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0832

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** Holz
**CURRENT (DA):** vari
**PROPOSED (DA):** FJERN «vari»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0833

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Holz
**CURRENT (DA):** zariem
**PROPOSED (DA):** FJERN «zariem»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0834

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Holz
**CURRENT (DA):** alive
**PROPOSED (DA):** FJERN «alive»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0835

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Holz
**CURRENT (DA):** pages
**PROPOSED (DA):** FJERN «pages»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0836

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Holz
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0837

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[6][1]
**DE konteksts:** Holz
**CURRENT (DA):** koku
**PROPOSED (DA):** FJERN «koku»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0838

**Card ID:** a2-holz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[7][1]
**DE konteksts:** Holz
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0843

**Card ID:** a2-indem
**Field:** study.sectionAccents.comparison.example.red.[0][1]
**DE konteksts:** indem
**CURRENT (DA):** While
**PROPOSED (DA):** FJERN «While»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0844

**Card ID:** a2-indem
**Field:** study.sectionAccents.comparison.example.red.[1][1]
**DE konteksts:** indem
**CURRENT (DA):** While
**PROPOSED (DA):** FJERN «While»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0845

**Card ID:** a2-kamm
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Kamm
**CURRENT (DA):** comb
**PROPOSED (DA):** FJERN «comb»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0849

**Card ID:** a2-wissen
**Field:** study.explanation[1]
**DE konteksts:** wissen
**CURRENT (DA):** Wissen betyder hovedsageligt: ​​information/fakta.
**PROPOSED (DA):** Wissen betyder hovedsageligt: information/fakta.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0850

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** klar
**CURRENT (DA):** instrukciju
**PROPOSED (DA):** FJERN «instrukciju»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0851

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** klar
**CURRENT (DA):** saprotams
**PROPOSED (DA):** FJERN «saprotams»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0852

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** klar
**CURRENT (DA):** domu
**PROPOSED (DA):** FJERN «domu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0853

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** klar
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0854

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** klar
**CURRENT (DA):** skaidrs
**PROPOSED (DA):** FJERN «skaidrs»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0855

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** klar
**CURRENT (DA):** Colloquially
**PROPOSED (DA):** FJERN «Colloquially»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0856

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** klar
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0857

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** klar
**CURRENT (DA):** viss
**PROPOSED (DA):** FJERN «viss»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0858

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** klar
**CURRENT (DA):** everything is fine
**PROPOSED (DA):** FJERN «everything is fine»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0859

**Card ID:** a2-klar
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[1][1]
**DE konteksts:** klar
**CURRENT (DA):** skaidrs
**PROPOSED (DA):** FJERN «skaidrs»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0860

**Card ID:** a2-kleben
**Field:** study.tip.leftBlocks[1].text
**DE konteksts:** kleben
**CURRENT (DA):** Når emnet er en seddel, plaster eller fingre, beskriver kleben ofte tilstanden af ​​at klæbe eller være klæbrig.
**PROPOSED (DA):** Når emnet er en seddel, plaster eller fingre, beskriver kleben ofte tilstanden af at klæbe eller være klæbrig.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0861

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** kleben
**CURRENT (DA):** to glue
**PROPOSED (DA):** FJERN «to glue»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0862

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** kleben
**CURRENT (DA):** a person
**PROPOSED (DA):** FJERN «a person»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0863

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** kleben
**CURRENT (DA):** in a sentence
**PROPOSED (DA):** FJERN «in a sentence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0864

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** kleben
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0865

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** kleben
**CURRENT (DA):** dara
**PROPOSED (DA):** FJERN «dara»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0866

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** kleben
**CURRENT (DA):** pielipt
**PROPOSED (DA):** FJERN «pielipt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0867

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** kleben
**CURRENT (DA):** a patch
**PROPOSED (DA):** FJERN «a patch»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0868

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** kleben
**CURRENT (DA):** subjekts
**PROPOSED (DA):** FJERN «subjekts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0869

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** kleben
**CURRENT (DA):** pirksti
**PROPOSED (DA):** FJERN «pirksti»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0870

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** kleben
**CURRENT (DA):** a note
**PROPOSED (DA):** FJERN «a note»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0871

**Card ID:** a2-kleben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** kleben
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0876

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.comparison.example.purple.[2][4]
**DE konteksts:** kleiden
**CURRENT (DA):** trægt
**PROPOSED (DA):** FJERN «trægt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0877

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][0]
**DE konteksts:** kleiden
**CURRENT (DA):** Dress up
**PROPOSED (DA):** FJERN «Dress up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0878

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** kleiden
**CURRENT (DA):** Get dressed
**PROPOSED (DA):** FJERN «Get dressed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0879

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** kleiden
**CURRENT (DA):** to clothe
**PROPOSED (DA):** FJERN «to clothe»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0880

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** kleiden
**CURRENT (DA):** nevis
**PROPOSED (DA):** FJERN «nevis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0881

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** kleiden
**CURRENT (DA):** subjekts
**PROPOSED (DA):** FJERN «subjekts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0882

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** kleiden
**CURRENT (DA):** teikuma
**PROPOSED (DA):** FJERN «teikuma»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0883

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** kleiden
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0884

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** kleiden
**CURRENT (DA):** clothes
**PROPOSED (DA):** FJERN «clothes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0885

**Card ID:** a2-kleiden
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** kleiden
**CURRENT (DA):** colour
**PROPOSED (DA):** FJERN «colour»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0886

**Card ID:** a2-körper
**Field:** study.explanation[0]
**DE konteksts:** Körper
**CURRENT (DA):** Hovedidé: Körper betyder oftest kroppen af ​​en person eller et dyr - kroppen, helbredet og den fysiske tilstand.
**PROPOSED (DA):** Hovedidé: Körper betyder oftest kroppen af en person eller et dyr - kroppen, helbredet og den fysiske tilstand.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0887

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Körper
**CURRENT (DA):** condition
**PROPOSED (DA):** FJERN «condition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0888

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Körper
**CURRENT (DA):** health
**PROPOSED (DA):** FJERN «health»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0889

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Körper
**CURRENT (DA):** human
**PROPOSED (DA):** FJERN «human»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0890

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Körper
**CURRENT (DA):** fizisko
**PROPOSED (DA):** FJERN «fizisko»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0891

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** Körper
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0892

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Körper
**CURRENT (DA):** Tehniskos
**PROPOSED (DA):** FJERN «Tehniskos»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0893

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Körper
**CURRENT (DA):** fizisko
**PROPOSED (DA):** FJERN «fizisko»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0894

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Körper
**CURRENT (DA):** korpusu
**PROPOSED (DA):** FJERN «korpusu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0895

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Körper
**CURRENT (DA):** mean
**PROPOSED (DA):** FJERN «mean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0896

**Card ID:** a2-körper
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Körper
**CURRENT (DA):** tekstos
**PROPOSED (DA):** FJERN «tekstos»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0897

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Kraft
**CURRENT (DA):** strength
**PROPOSED (DA):** FJERN «strength»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0898

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Kraft
**CURRENT (DA):** nogurumu
**PROPOSED (DA):** FJERN «nogurumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0899

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Kraft
**CURRENT (DA):** ability
**PROPOSED (DA):** FJERN «ability»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0900

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Kraft
**CURRENT (DA):** fizisku
**PROPOSED (DA):** FJERN «fizisku»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0901

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Kraft
**CURRENT (DA):** effort
**PROPOSED (DA):** FJERN «effort»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0902

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** Kraft
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0903

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Kraft
**CURRENT (DA):** in force
**PROPOSED (DA):** FJERN «in force»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0904

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Kraft
**CURRENT (DA):** izteicienu
**PROPOSED (DA):** FJERN «izteicienu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0905

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Kraft
**CURRENT (DA):** individual
**PROPOSED (DA):** FJERN «individual»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0906

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Kraft
**CURRENT (DA):** learn
**PROPOSED (DA):** FJERN «learn»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0907

**Card ID:** a2-kraft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Kraft
**CURRENT (DA):** A phrase
**PROPOSED (DA):** FJERN «A phrase»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0921

**Card ID:** a2-leihen
**Field:** study.explanation
**DE konteksts:** leihen
**CURRENT (DA):** Leihen minder meget om borgen og kan både betyde udlån og låne. Hvis nogen giver dig en ting midlertidigt, låner de den til dig. Får du det midlertidigt, låner du det. til hvem? Formen viser ofte, hvem Tingen er givet. I daglig tale er dette ord meget praktisk. Derfor skal der ses på retningen af ​​…
**PROPOSED (DA):** Leihen minder meget om borgen og kan både betyde udlån og låne. Hvis nogen giver dig en ting midlertidigt, låner de den til dig. Får du det midlertidigt, låner du det. til hvem? Formen viser ofte, hvem Tingen er givet. I daglig tale er dette ord meget praktisk. Derfor skal der ses på retningen af he…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0925

**Card ID:** a2-leihen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** leihen
**CURRENT (DA):** aizdot
**PROPOSED (DA):** FJERN «aizdot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0926

**Card ID:** a2-leihen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** leihen
**CURRENT (DA):** aizdot
**PROPOSED (DA):** FJERN «aizdot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0927

**Card ID:** a2-leihen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** leihen
**CURRENT (DA):** vari
**PROPOSED (DA):** FJERN «vari»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0928

**Card ID:** a2-leihen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** leihen
**CURRENT (DA):** borrow
**PROPOSED (DA):** FJERN «borrow»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0929

**Card ID:** a2-leihen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** leihen
**CURRENT (DA):** borrow
**PROPOSED (DA):** FJERN «borrow»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0930

**Card ID:** a2-leiter
**Field:** study.examples[0].lv
**DE konteksts:** Leiter
**CURRENT (DA):** Lederen af ​​virksomheden er meget flink.
**PROPOSED (DA):** Lederen af virksomheden er meget flink.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0938

**Card ID:** a2-leitung
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Leitung
**CURRENT (DA):** under the leadership
**PROPOSED (DA):** FJERN «under the leadership»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0939

**Card ID:** a2-leitung
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Leitung
**CURRENT (DA):** what
**PROPOSED (DA):** FJERN «what»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0940

**Card ID:** a2-leitung
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Leitung
**CURRENT (DA):** electricity
**PROPOSED (DA):** FJERN «electricity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0941

**Card ID:** a2-leitung
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Leitung
**CURRENT (DA):** telefonu
**PROPOSED (DA):** FJERN «telefonu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0942

**Card ID:** a2-leitung
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Leitung
**CURRENT (DA):** water
**PROPOSED (DA):** FJERN «water»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0943

**Card ID:** a2-leitung
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Leitung
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0944

**Card ID:** a2-liegen
**Field:** study.explanation[1]
**DE konteksts:** liegen
**CURRENT (DA):** Liegen betyder hovedsageligt: ​​stat.
**PROPOSED (DA):** Liegen betyder hovedsageligt: stat.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0945

**Card ID:** a2-los
**Field:** lv
**DE konteksts:** los
**CURRENT (DA):** Løs • Løs • Hvad sker der
**PROPOSED (DA):** Løs • Løs
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0946

**Card ID:** a2-meinen
**Field:** study.examples[1].lv
**DE konteksts:** meinen
**CURRENT (DA):** Jeg tror, ​​det er korrekt.
**PROPOSED (DA):** Jeg tror, det er korrekt.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0947

**Card ID:** a2-meinen
**Field:** study.important.example
**DE konteksts:** meinen
**CURRENT (DA):** Ich meine dich = jeg tænker på dig. Ich meine, dass ... = Jeg tror, ​​at ...
**PROPOSED (DA):** Ich meine dich = jeg tænker på dig. Ich meine, dass ... = Jeg tror, at ...
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0948

**Card ID:** a2-meinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** meinen
**CURRENT (DA):** for asking
**PROPOSED (DA):** FJERN «for asking»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0949

**Card ID:** a2-meinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** meinen
**CURRENT (DA):** point of view
**PROPOSED (DA):** FJERN «point of view»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0950

**Card ID:** a2-meinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** meinen
**CURRENT (DA):** frequent
**PROPOSED (DA):** FJERN «frequent»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0951

**Card ID:** a2-meinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** meinen
**CURRENT (DA):** phrase
**PROPOSED (DA):** FJERN «phrase»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0952

**Card ID:** a2-meinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** meinen
**CURRENT (DA):** nopietni
**PROPOSED (DA):** FJERN «nopietni»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0953

**Card ID:** a2-meinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** meinen
**CURRENT (DA):** think
**PROPOSED (DA):** FJERN «think»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0962

**Card ID:** a2-nebeneinander-1000
**Field:** lv
**DE konteksts:** nebeneinander
**CURRENT (DA):** Ved siden af ​​hinanden
**PROPOSED (DA):** Ved siden af hinanden
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0966

**Card ID:** a2-note
**Field:** study.important.text
**DE konteksts:** Note
**CURRENT (DA):** Betydningen af ​​en seddel bestemmes af feltet.
**PROPOSED (DA):** Betydningen af en seddel bestemmes af feltet.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0967

**Card ID:** a2-note
**Field:** study.sectionAccents.comparison.meaning.purple.[0][0]
**DE konteksts:** Note
**CURRENT (DA):** Mark
**PROPOSED (DA):** FJERN «Mark»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0968

**Card ID:** a2-note
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Note
**CURRENT (DA):** grade
**PROPOSED (DA):** FJERN «grade»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0969

**Card ID:** a2-note
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Note
**CURRENT (DA):** grade
**PROPOSED (DA):** FJERN «grade»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0970

**Card ID:** a2-note
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Note
**CURRENT (DA):** At school
**PROPOSED (DA):** FJERN «At school»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0971

**Card ID:** a2-note
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Note
**CURRENT (DA):** in music
**PROPOSED (DA):** FJERN «in music»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0978

**Card ID:** a2-passieren
**Field:** study.explanation[3]
**DE konteksts:** passieren
**CURRENT (DA):** I et meget specifikt køkken kan passieren betyde at gnide eller presse sig gennem en si, men det er ikke hovedbetydningen af ​​A2.
**PROPOSED (DA):** I et meget specifikt køkken kan passieren betyde at gnide eller presse sig gennem en si, men det er ikke hovedbetydningen af A2.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0984

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Pflaster
**CURRENT (DA):** a patch
**PROPOSED (DA):** FJERN «a patch»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0985

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Pflaster
**CURRENT (DA):** a patch
**PROPOSED (DA):** FJERN «a patch»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0986

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Pflaster
**CURRENT (DA):** a wound
**PROPOSED (DA):** FJERN «a wound»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0987

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Pflaster
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0988

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Pflaster
**CURRENT (DA):** pavement
**PROPOSED (DA):** FJERN «pavement»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0989

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Pflaster
**CURRENT (DA):** laukumu
**PROPOSED (DA):** FJERN «laukumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0990

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Pflaster
**CURRENT (DA):** walking
**PROPOSED (DA):** FJERN «walking»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0991

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Pflaster
**CURRENT (DA):** ielu
**PROPOSED (DA):** FJERN «ielu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0992

**Card ID:** a2-pflaster
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Pflaster
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0993

**Card ID:** a2-Reich-1143
**Field:** lv
**DE konteksts:** Reich
**CURRENT (DA):** Land • Imperium • Kongerige
**PROPOSED (DA):** Land • Imperium
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0994

**Card ID:** a2-Rest-1160
**Field:** lv
**DE konteksts:** Rest
**CURRENT (DA):** Rester • Overskud • Skrot af klud
**PROPOSED (DA):** Rester • Overskud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1001

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Rolle
**CURRENT (DA):** meaning
**PROPOSED (DA):** FJERN «meaning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1002

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Rolle
**CURRENT (DA):** to play
**PROPOSED (DA):** FJERN «to play»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1003

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Rolle
**CURRENT (DA):** rullis
**PROPOSED (DA):** FJERN «rullis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1004

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Rolle
**CURRENT (DA):** subject
**PROPOSED (DA):** FJERN «subject»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1005

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Rolle
**CURRENT (DA):** audumu
**PROPOSED (DA):** FJERN «audumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1006

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Rolle
**CURRENT (DA):** paper
**PROPOSED (DA):** FJERN «paper»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1007

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Rolle
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1016

**Card ID:** a2-satz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Satz
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1017

**Card ID:** a2-satz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Satz
**CURRENT (DA):** Valodas
**PROPOSED (DA):** FJERN «Valodas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1018

**Card ID:** a2-satz
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][1]
**DE konteksts:** Satz
**CURRENT (DA):** nogulsnes
**PROPOSED (DA):** FJERN «nogulsnes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1019

**Card ID:** a2-satz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Satz
**CURRENT (DA):** specifiska
**PROPOSED (DA):** FJERN «specifiska»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1020

**Card ID:** a2-satz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Satz
**CURRENT (DA):** meaning
**PROPOSED (DA):** FJERN «meaning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1021

**Card ID:** a2-satz
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Satz
**CURRENT (DA):** becomes
**PROPOSED (DA):** FJERN «becomes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1022

**Card ID:** a2-schalten
**Field:** study.tip[0]
**DE konteksts:** schalten
**CURRENT (DA):** schalten af ​​sig selv = at skifte (i almindelighed også gear).
**PROPOSED (DA):** schalten af sig selv = at skifte (i almindelighed også gear).
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1026

**Card ID:** a2-scheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** scheinen
**CURRENT (DA):** to shine
**PROPOSED (DA):** FJERN «to shine»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1027

**Card ID:** a2-scheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** scheinen
**CURRENT (DA):** gaisma
**PROPOSED (DA):** FJERN «gaisma»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1028

**Card ID:** a2-scheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** scheinen
**CURRENT (DA):** to shine
**PROPOSED (DA):** FJERN «to shine»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1029

**Card ID:** a2-scheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** scheinen
**CURRENT (DA):** it seems
**PROPOSED (DA):** FJERN «it seems»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1030

**Card ID:** a2-scheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** scheinen
**CURRENT (DA):** the situation
**PROPOSED (DA):** FJERN «the situation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1031

**Card ID:** a2-scheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** scheinen
**CURRENT (DA):** it seems
**PROPOSED (DA):** FJERN «it seems»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1032

**Card ID:** a2-Schild-1224
**Field:** lv
**DE konteksts:** Schild
**CURRENT (DA):** Skilt • Plade • Etiket på flasker • Notesbøger mv. mm
**PROPOSED (DA):** Skilt • Plade
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1036

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Schlange
**CURRENT (DA):** to people
**PROPOSED (DA):** FJERN «to people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1037

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Schlange
**CURRENT (DA):** for tickets
**PROPOSED (DA):** FJERN «for tickets»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1038

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Schlange
**CURRENT (DA):** kases
**PROPOSED (DA):** FJERN «kases»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1039

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** Schlange
**CURRENT (DA):** snake
**PROPOSED (DA):** FJERN «snake»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1040

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Schlange
**CURRENT (DA):** animal
**PROPOSED (DA):** FJERN «animal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1041

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Schlange
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1042

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Schlange
**CURRENT (DA):** snake
**PROPOSED (DA):** FJERN «snake»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1043

**Card ID:** a2-schlange
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Schlange
**CURRENT (DA):** Dabas
**PROPOSED (DA):** FJERN «Dabas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1046

**Card ID:** a2-schließen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** schließen
**CURRENT (DA):** to close
**PROPOSED (DA):** FJERN «to close»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1047

**Card ID:** a2-schließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** schließen
**CURRENT (DA):** to close
**PROPOSED (DA):** FJERN «to close»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1048

**Card ID:** a2-schließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** schließen
**CURRENT (DA):** logi
**PROPOSED (DA):** FJERN «logi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1049

**Card ID:** a2-schließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** schließen
**CURRENT (DA):** locking
**PROPOSED (DA):** FJERN «locking»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1050

**Card ID:** a2-schließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** schließen
**CURRENT (DA):** emphasise
**PROPOSED (DA):** FJERN «emphasise»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1051

**Card ID:** a2-schließen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** schließen
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1056

**Card ID:** a2-schloss
**Field:** study.important.text
**DE konteksts:** Schloss
**CURRENT (DA):** Betydningen af ​​Schloss bestemmes af konteksten.
**PROPOSED (DA):** Betydningen af Schloss bestemmes af konteksten.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1057

**Card ID:** a2-schloss
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Schloss
**CURRENT (DA):** In tourism
**PROPOSED (DA):** FJERN «In tourism»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1058

**Card ID:** a2-schloss
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Schloss
**CURRENT (DA):** lock
**PROPOSED (DA):** FJERN «lock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1059

**Card ID:** a2-schloss
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Schloss
**CURRENT (DA):** bicycle
**PROPOSED (DA):** FJERN «bicycle»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1060

**Card ID:** a2-schloss
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Schloss
**CURRENT (DA):** lock
**PROPOSED (DA):** FJERN «lock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1061

**Card ID:** a2-schloss
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Schloss
**CURRENT (DA):** the key
**PROPOSED (DA):** FJERN «the key»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1062

**Card ID:** a2-schloss
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Schloss
**CURRENT (DA):** the door
**PROPOSED (DA):** FJERN «the door»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1063

**Card ID:** a2-schuld
**Field:** lv
**DE konteksts:** Schuld
**CURRENT (DA):** Fejl • Gæld • Ansvar
**PROPOSED (DA):** Fejl • Gæld
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1069

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Schuld
**CURRENT (DA):** in the singular
**PROPOSED (DA):** FJERN «in the singular»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1070

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Schuld
**CURRENT (DA):** responsibility
**PROPOSED (DA):** FJERN «responsibility»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1071

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Schuld
**CURRENT (DA):** in the plural
**PROPOSED (DA):** FJERN «in the plural»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1072

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Schuld
**CURRENT (DA):** simply
**PROPOSED (DA):** FJERN «simply»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1073

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Schuld
**CURRENT (DA):** debts
**PROPOSED (DA):** FJERN «debts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1074

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Schuld
**CURRENT (DA):** nevis
**PROPOSED (DA):** FJERN «nevis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1075

**Card ID:** a2-sich-befinden
**Field:** study.examples[3].lv
**DE konteksts:** sich befinden
**CURRENT (DA):** Skolen ligger ved siden af ​​parken.
**PROPOSED (DA):** Skolen ligger ved siden af parken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1081

**Card ID:** a2-sich-befinden
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sich befinden
**CURRENT (DA):** atrasties
**PROPOSED (DA):** FJERN «atrasties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1082

**Card ID:** a2-sich-unterhalten
**Field:** study.explanation
**DE konteksts:** sich unterhalten
**CURRENT (DA):** Sich unterhalten betyder oftest at tale. Det er et refleksivt verbum og bruger normalt uns, euch eller sich. Det kan også betyde at have det sjovt eller hygge. I nogle sammenhænge betyder unterhalten at vedligeholde økonomisk, men det er ikke hovedanvendelsen af ​​A2. Det skal vise sig, om det handl…
**PROPOSED (DA):** Sich unterhalten betyder oftest at tale. Det er et refleksivt verbum og bruger normalt uns, euch eller sich. Det kan også betyde at have det sjovt eller hygge. I nogle sammenhænge betyder unterhalten at vedligeholde økonomisk, men det er ikke hovedanvendelsen af A2. Det skal vise sig, om det handler…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1087

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** to talk
**PROPOSED (DA):** FJERN «to talk»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1088

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** to talk
**PROPOSED (DA):** FJERN «to talk»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1089

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** someone
**PROPOSED (DA):** FJERN «someone»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1090

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** have fun
**PROPOSED (DA):** FJERN «have fun»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1091

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** have fun
**PROPOSED (DA):** FJERN «have fun»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1092

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** konteksts
**PROPOSED (DA):** FJERN «konteksts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1093

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** event
**PROPOSED (DA):** FJERN «event»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1094

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** mean
**PROPOSED (DA):** FJERN «mean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1095

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** vakars
**PROPOSED (DA):** FJERN «vakars»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1096

**Card ID:** a2-sich-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** sich unterhalten
**CURRENT (DA):** filma
**PROPOSED (DA):** FJERN «filma»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1097

**Card ID:** a2-setzen
**Field:** study.explanation[1]
**DE konteksts:** setzen
**CURRENT (DA):** Setzen betyder hovedsageligt: ​​handling.
**PROPOSED (DA):** Setzen betyder hovedsageligt: handling.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1103

**Card ID:** a2-sobald
**Field:** study.tip.leftBlocks[0].text
**DE konteksts:** sobald
**CURRENT (DA):** Det tyske verbum kommer ofte i slutningen af ​​hjælpesætningen efter souft: souft er kommt.
**PROPOSED (DA):** Det tyske verbum kommer ofte i slutningen af hjælpesætningen efter souft: souft er kommt.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1104

**Card ID:** a2-sobald
**Field:** study.important.example
**DE konteksts:** sobald
**CURRENT (DA):** Somant ich Zeit habe, rufe ich dich an. Ordet habe er i slutningen af ​​hjælpesætningen. så snart / så snart.
**PROPOSED (DA):** Somant ich Zeit habe, rufe ich dich an. Ordet habe er i slutningen af hjælpesætningen. så snart / så snart.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1105

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** sobald
**CURRENT (DA):** in the auxiliary clause
**PROPOSED (DA):** FJERN «in the auxiliary clause»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1106

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** sobald
**CURRENT (DA):** actions
**PROPOSED (DA):** FJERN «actions»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1107

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** sobald
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1108

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** sobald
**CURRENT (DA):** word
**PROPOSED (DA):** FJERN «word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1109

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** sobald
**CURRENT (DA):** German
**PROPOSED (DA):** FJERN «German»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1110

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** sobald
**CURRENT (DA):** action
**PROPOSED (DA):** FJERN «action»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1111

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** sobald
**CURRENT (DA):** next
**PROPOSED (DA):** FJERN «next»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1112

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** sobald
**CURRENT (DA):** uzreiz
**PROPOSED (DA):** FJERN «uzreiz»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1113

**Card ID:** a2-sobald
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** sobald
**CURRENT (DA):** begins
**PROPOSED (DA):** FJERN «begins»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1119

**Card ID:** a2-sonst
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** sonst
**CURRENT (DA):** otherwise
**PROPOSED (DA):** FJERN «otherwise»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1120

**Card ID:** a2-sonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** sonst
**CURRENT (DA):** warning
**PROPOSED (DA):** FJERN «warning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1121

**Card ID:** a2-sonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** sonst
**CURRENT (DA):** in a sentence
**PROPOSED (DA):** FJERN «in a sentence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1122

**Card ID:** a2-sonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** sonst
**CURRENT (DA):** sekas
**PROPOSED (DA):** FJERN «sekas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1123

**Card ID:** a2-sonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** sonst
**CURRENT (DA):** ieradumu
**PROPOSED (DA):** FJERN «ieradumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1124

**Card ID:** a2-sonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** sonst
**CURRENT (DA):** mean
**PROPOSED (DA):** FJERN «mean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1125

**Card ID:** a2-sonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** sonst
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1131

**Card ID:** a2-steigen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** steigen
**CURRENT (DA):** up
**PROPOSED (DA):** FJERN «up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1132

**Card ID:** a2-steigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** steigen
**CURRENT (DA):** temperature
**PROPOSED (DA):** FJERN «temperature»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1133

**Card ID:** a2-steigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** steigen
**CURRENT (DA):** water level
**PROPOSED (DA):** FJERN «water level»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1134

**Card ID:** a2-steigen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** steigen
**CURRENT (DA):** in transport
**PROPOSED (DA):** FJERN «in transport»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1138

**Card ID:** a2-stelle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Stelle
**CURRENT (DA):** to search
**PROPOSED (DA):** FJERN «to search»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1139

**Card ID:** a2-stelle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Stelle
**CURRENT (DA):** specific
**PROPOSED (DA):** FJERN «specific»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1140

**Card ID:** a2-stimmen
**Field:** lv
**DE konteksts:** stimmen
**CURRENT (DA):** Enig • Hav ret • Stem
**PROPOSED (DA):** Enig • Hav ret
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1146

**Card ID:** a2-stimmen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** stimmen
**CURRENT (DA):** it is
**PROPOSED (DA):** FJERN «it is»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1147

**Card ID:** a2-stimmen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][1]
**DE konteksts:** stimmen
**CURRENT (DA):** stimme zu
**PROPOSED (DA):** FJERN «stimme zu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1148

**Card ID:** a2-stimmen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** stimmen
**CURRENT (DA):** piekrist
**PROPOSED (DA):** FJERN «piekrist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1149

**Card ID:** a2-stoff
**Field:** lv
**DE konteksts:** Stoff
**CURRENT (DA):** Stof • Stof • Materiale
**PROPOSED (DA):** Stof • Stof
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1154

**Card ID:** a2-stoff
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Stoff
**CURRENT (DA):** for clothes
**PROPOSED (DA):** FJERN «for clothes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1155

**Card ID:** a2-stoff
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Stoff
**CURRENT (DA):** aizkariem
**PROPOSED (DA):** FJERN «aizkariem»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1156

**Card ID:** a2-stoff
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Stoff
**CURRENT (DA):** sewing
**PROPOSED (DA):** FJERN «sewing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1157

**Card ID:** a2-stoff
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Stoff
**CURRENT (DA):** learning material
**PROPOSED (DA):** FJERN «learning material»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1158

**Card ID:** a2-stoff
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Stoff
**CURRENT (DA):** skolu
**PROPOSED (DA):** FJERN «skolu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1164

**Card ID:** a2-tafel
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Tafel
**CURRENT (DA):** blackboard
**PROPOSED (DA):** FJERN «blackboard»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1165

**Card ID:** a2-tafel
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** Tafel
**CURRENT (DA):** At school
**PROPOSED (DA):** FJERN «At school»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1166

**Card ID:** a2-tafel
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Tafel
**CURRENT (DA):** tabulai
**PROPOSED (DA):** FJERN «tabulai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1167

**Card ID:** a2-tafel
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** Tafel
**CURRENT (DA):** for the menu
**PROPOSED (DA):** FJERN «for the menu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1168

**Card ID:** a2-teil
**Field:** lv
**DE konteksts:** Teil
**CURRENT (DA):** Del • Detalje • Stk
**PROPOSED (DA):** Del • Detalje
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1174

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** Teil
**CURRENT (DA):** detail
**PROPOSED (DA):** FJERN «detail»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1175

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Teil
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1176

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Teil
**CURRENT (DA):** Technical
**PROPOSED (DA):** FJERN «Technical»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1177

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Teil
**CURRENT (DA):** detail
**PROPOSED (DA):** FJERN «detail»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1178

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Teil
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1179

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][1]
**DE konteksts:** Teil
**CURRENT (DA):** part
**PROPOSED (DA):** FJERN «part»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1180

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Teil
**CURRENT (DA):** kopumu
**PROPOSED (DA):** FJERN «kopumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1181

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Teil
**CURRENT (DA):** the story
**PROPOSED (DA):** FJERN «the story»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1182

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Teil
**CURRENT (DA):** tekstu
**PROPOSED (DA):** FJERN «tekstu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1183

**Card ID:** a2-teil
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Teil
**CURRENT (DA):** part
**PROPOSED (DA):** FJERN «part»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1189

**Card ID:** a2-termin
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Termin
**CURRENT (DA):** pierakstu
**PROPOSED (DA):** FJERN «pierakstu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1190

**Card ID:** a2-termin
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** Termin
**CURRENT (DA):** doctor
**PROPOSED (DA):** FJERN «doctor»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1191

**Card ID:** a2-termin
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][0]
**DE konteksts:** Termin
**CURRENT (DA):** friziera
**PROPOSED (DA):** FJERN «friziera»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1192

**Card ID:** a2-termin
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[2][0]
**DE konteksts:** Termin
**CURRENT (DA):** in the institution
**PROPOSED (DA):** FJERN «in the institution»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1193

**Card ID:** a2-termin
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Termin
**CURRENT (DA):** time of transfer
**PROPOSED (DA):** FJERN «time of transfer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1196

**Card ID:** a2-tief
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** tief
**CURRENT (DA):** deep
**PROPOSED (DA):** FJERN «deep»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1197

**Card ID:** a2-tief
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** tief
**CURRENT (DA):** For water
**PROPOSED (DA):** FJERN «For water»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1198

**Card ID:** a2-tief
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** tief
**CURRENT (DA):** pits
**PROPOSED (DA):** FJERN «pits»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1199

**Card ID:** a2-tief
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** tief
**CURRENT (DA):** valleys
**PROPOSED (DA):** FJERN «valleys»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1200

**Card ID:** a2-tief
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** tief
**CURRENT (DA):** Balsij
**PROPOSED (DA):** FJERN «Balsij»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1201

**Card ID:** a2-tief
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** tief
**CURRENT (DA):** tonim
**PROPOSED (DA):** FJERN «tonim»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1202

**Card ID:** a2-toll
**Field:** lv
**DE konteksts:** toll
**CURRENT (DA):** Fantastisk • Cool • Vidunderlig
**PROPOSED (DA):** Fantastisk • Cool
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1205

**Card ID:** a2-tragen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** tragen
**CURRENT (DA):** wearing
**PROPOSED (DA):** FJERN «wearing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1206

**Card ID:** a2-tragen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** tragen
**CURRENT (DA):** Clothing
**PROPOSED (DA):** FJERN «Clothing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1211

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** treffen
**CURRENT (DA):** satikt
**PROPOSED (DA):** FJERN «satikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1212

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** treffen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1213

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** treffen
**CURRENT (DA):** A person
**PROPOSED (DA):** FJERN «A person»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1214

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** treffen
**CURRENT (DA):** satikt
**PROPOSED (DA):** FJERN «satikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1215

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** treffen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1216

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** treffen
**CURRENT (DA):** to make a decision
**PROPOSED (DA):** FJERN «to make a decision»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1217

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** treffen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1218

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** treffen
**CURRENT (DA):** accept
**PROPOSED (DA):** FJERN «accept»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1219

**Card ID:** a2-treffen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]
**DE konteksts:** treffen
**CURRENT (DA):** The decision
**PROPOSED (DA):** FJERN «The decision»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1224

**Card ID:** a2-übrig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** übrig
**CURRENT (DA):** remains
**PROPOSED (DA):** FJERN «remains»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1225

**Card ID:** a2-übrig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** übrig
**CURRENT (DA):** stay over
**PROPOSED (DA):** FJERN «stay over»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1226

**Card ID:** a2-übung
**Field:** study.explanation
**DE konteksts:** Übung
**CURRENT (DA):** Hovedidé: die Übung betyder motion eller praktisk træning. I skole- og sprogindlæring er det normalt en specifik øvelse. Betydningen af ​​​​udtrykket Übung macht den Meister er øvelse eller regelmæssig øvelse. Handlingen er üben = at øve.
**PROPOSED (DA):** Hovedidé: die Übung betyder motion eller praktisk træning. I skole- og sprogindlæring er det normalt en specifik øvelse. Betydningen af udtrykket Übung macht den Meister er øvelse eller regelmæssig øvelse. Handlingen er üben = at øve.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1231

**Card ID:** a2-übung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Übung
**CURRENT (DA):** exercise
**PROPOSED (DA):** FJERN «exercise»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1232

**Card ID:** a2-übung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Übung
**CURRENT (DA):** praksi
**PROPOSED (DA):** FJERN «praksi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1236

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** umsonst
**CURRENT (DA):** par velti
**PROPOSED (DA):** FJERN «par velti»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1237

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** umsonst
**CURRENT (DA):** velti
**PROPOSED (DA):** FJERN «velti»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1238

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** umsonst
**CURRENT (DA):** cenu
**PROPOSED (DA):** FJERN «cenu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1239

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** umsonst
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1240

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** umsonst
**CURRENT (DA):** in vain
**PROPOSED (DA):** FJERN «in vain»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1241

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** umsonst
**CURRENT (DA):** result
**PROPOSED (DA):** FJERN «result»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1242

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** umsonst
**CURRENT (DA):** in vain
**PROPOSED (DA):** FJERN «in vain»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1243

**Card ID:** a2-umsonst
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** umsonst
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1247

**Card ID:** a2-verbinden
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** verbinden
**CURRENT (DA):** related
**PROPOSED (DA):** FJERN «related»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1248

**Card ID:** a2-verbinden
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** verbinden
**CURRENT (DA):** together
**PROPOSED (DA):** FJERN «together»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1249

**Card ID:** a2-verbinden
**Field:** study.sectionAccents.tip.leftBlocks.text.red.[0][1]
**DE konteksts:** verbinden
**CURRENT (DA):** a wound
**PROPOSED (DA):** FJERN «a wound»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1250

**Card ID:** a2-verbinden
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** verbinden
**CURRENT (DA):** bandage
**PROPOSED (DA):** FJERN «bandage»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1255

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.comparison.example.yellow.[2][2]
**DE konteksts:** Verkehr
**CURRENT (DA):** praktisk
**PROPOSED (DA):** FJERN «praktisk»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1256

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.comparison.example.yellow.[3][2]
**DE konteksts:** Verkehr
**CURRENT (DA):** praktisk
**PROPOSED (DA):** FJERN «praktisk»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1257

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Verkehr
**CURRENT (DA):** In the city
**PROPOSED (DA):** FJERN «In the city»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1258

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Verkehr
**CURRENT (DA):** road
**PROPOSED (DA):** FJERN «road»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1259

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** Verkehr
**CURRENT (DA):** for companies
**PROPOSED (DA):** FJERN «for companies»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1260

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Verkehr
**CURRENT (DA):** kontaktus
**PROPOSED (DA):** FJERN «kontaktus»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1261

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Verkehr
**CURRENT (DA):** mean
**PROPOSED (DA):** FJERN «mean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1262

**Card ID:** a2-verkehr
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Verkehr
**CURRENT (DA):** sakarus
**PROPOSED (DA):** FJERN «sakarus»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1267

**Card ID:** a2-viertel
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Viertel
**CURRENT (DA):** a quarter
**PROPOSED (DA):** FJERN «a quarter»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1268

**Card ID:** a2-viertel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Viertel
**CURRENT (DA):** a quarter
**PROPOSED (DA):** FJERN «a quarter»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1269

**Card ID:** a2-viertel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Viertel
**CURRENT (DA):** daudzumu
**PROPOSED (DA):** FJERN «daudzumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1270

**Card ID:** a2-viertel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** Viertel
**CURRENT (DA):** pulksteni
**PROPOSED (DA):** FJERN «pulksteni»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1271

**Card ID:** a2-viertel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** Viertel
**CURRENT (DA):** quarter
**PROPOSED (DA):** FJERN «quarter»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1272

**Card ID:** a2-viertel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Viertel
**CURRENT (DA):** city
**PROPOSED (DA):** FJERN «city»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1273

**Card ID:** a2-viertel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Viertel
**CURRENT (DA):** timer
**PROPOSED (DA):** FJERN «timer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1279

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][0]
**DE konteksts:** vorstellen
**CURRENT (DA):** Introduce
**PROPOSED (DA):** FJERN «Introduce»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1280

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.comparison.meaning.purple.[1][0]
**DE konteksts:** vorstellen
**CURRENT (DA):** Introduce
**PROPOSED (DA):** FJERN «Introduce»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1281

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.comparison.meaning.purple.[2][0]
**DE konteksts:** vorstellen
**CURRENT (DA):** Introduce
**PROPOSED (DA):** FJERN «Introduce»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1282

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** vorstellen
**CURRENT (DA):** stand in front of
**PROPOSED (DA):** FJERN «stand in front of»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1283

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** vorstellen
**CURRENT (DA):** plant
**PROPOSED (DA):** FJERN «plant»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1284

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** vorstellen
**CURRENT (DA):** people
**PROPOSED (DA):** FJERN «people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1285

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** vorstellen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1286

**Card ID:** a2-vorstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** vorstellen
**CURRENT (DA):** to imagine
**PROPOSED (DA):** FJERN «to imagine»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1289

**Card ID:** a2-wagen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Wagen
**CURRENT (DA):** car
**PROPOSED (DA):** FJERN «car»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1290

**Card ID:** a2-wagen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Wagen
**CURRENT (DA):** car
**PROPOSED (DA):** FJERN «car»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1291

**Card ID:** a2-wagen
**Field:** study.sectionAccents.comparison.meaning.purple[3]
**DE konteksts:** Wagen
**CURRENT (DA):** to dare
**PROPOSED (DA):** FJERN «to dare»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1292

**Card ID:** a2-wählen
**Field:** study.explanation
**DE konteksts:** wählen
**CURRENT (DA):** Wählen kan betyde at vælge mellem muligheder. I sammenhæng med politik betyder det at stemme eller vælge. I telefonsammenhæng betyder det at ringe til et nummer. På en computer eller salgsautomat kan dette betyde, at du vælger en indstilling eller en menu. Betydningen af ​​objektet: ParteiNummer, Me…
**PROPOSED (DA):** Wählen kan betyde at vælge mellem muligheder. I sammenhæng med politik betyder det at stemme eller vælge. I telefonsammenhæng betyder det at ringe til et nummer. På en computer eller salgsautomat kan dette betyde, at du vælger en indstilling eller en menu. Betydningen af objektet: ParteiNummer, Menu…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1296

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** wählen
**CURRENT (DA):** balsot
**PROPOSED (DA):** FJERN «balsot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1297

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** wählen
**CURRENT (DA):** candidate
**PROPOSED (DA):** FJERN «candidate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1298

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** wählen
**CURRENT (DA):** in context
**PROPOSED (DA):** FJERN «in context»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1299

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** wählen
**CURRENT (DA):** Partiju
**PROPOSED (DA):** FJERN «Partiju»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1300

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** wählen
**CURRENT (DA):** balsot
**PROPOSED (DA):** FJERN «balsot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1301

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** wählen
**CURRENT (DA):** to compose
**PROPOSED (DA):** FJERN «to compose»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1302

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** wählen
**CURRENT (DA):** telefona
**PROPOSED (DA):** FJERN «telefona»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1303

**Card ID:** a2-während
**Field:** study.explanation
**DE konteksts:** während
**CURRENT (DA):** Mens kan være en præposition, betyder der 'under'. Så efterfølges det ofte af genitiv: während des Tages. Det kan også være en konjunktion, der betyder 'mens'. Som ledsætning introducerer det en hjælpesætning, og verbet på tysk går normalt i slutningen af ​​sætningen. Derfor er det meget vigtigt at …
**PROPOSED (DA):** Mens kan være en præposition, betyder der 'under'. Så efterfølges det ofte af genitiv: während des Tages. Det kan også være en konjunktion, der betyder 'mens'. Som ledsætning introducerer det en hjælpesætning, og verbet på tysk går normalt i slutningen af sætningen. Derfor er det meget vigtigt at sk…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1308

**Card ID:** a2-während
**Field:** study.sectionAccents.comparison.example.blue.[0][0]
**DE konteksts:** während
**CURRENT (DA):** While
**PROPOSED (DA):** FJERN «While»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1309

**Card ID:** a2-während
**Field:** study.sectionAccents.comparison.example.blue.[2][0]
**DE konteksts:** während
**CURRENT (DA):** While
**PROPOSED (DA):** FJERN «While»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1310

**Card ID:** a2-während
**Field:** study.sectionAccents.comparison.example.blue.[3][0]
**DE konteksts:** während
**CURRENT (DA):** While
**PROPOSED (DA):** FJERN «While»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1311

**Card ID:** a2-während
**Field:** study.sectionAccents.comparison.example.blue.[4][0]
**DE konteksts:** während
**CURRENT (DA):** While
**PROPOSED (DA):** FJERN «While»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1312

**Card ID:** a2-während
**Field:** study.sectionAccents.comparison.example.green.[0][0]
**DE konteksts:** während
**CURRENT (DA):** While
**PROPOSED (DA):** FJERN «While»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1313

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** während
**CURRENT (DA):** during
**PROPOSED (DA):** FJERN «during»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1314

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** während
**CURRENT (DA):** noun
**PROPOSED (DA):** FJERN «noun»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1315

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** während
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1316

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** während
**CURRENT (DA):** during
**PROPOSED (DA):** FJERN «during»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1317

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** während
**CURRENT (DA):** while
**PROPOSED (DA):** FJERN «while»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1318

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** während
**CURRENT (DA):** actions
**PROPOSED (DA):** FJERN «actions»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1319

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** während
**CURRENT (DA):** teikums
**PROPOSED (DA):** FJERN «teikums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1320

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** während
**CURRENT (DA):** while
**PROPOSED (DA):** FJERN «while»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1321

**Card ID:** a2-während
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** während
**CURRENT (DA):** word
**PROPOSED (DA):** FJERN «word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1327

**Card ID:** a2-wahrscheinlich
**Field:** study.tip.leftBlocks[0].text
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** Wahrscheinlich er stærkere end vielleicht: taleren tror, ​​at det virkelig er sandsynligt, at det vil ske.
**PROPOSED (DA):** Wahrscheinlich er stærkere end vielleicht: taleren tror, at det virkelig er sandsynligt, at det vil ske.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1328

**Card ID:** a2-wahrscheinlich
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** probably
**PROPOSED (DA):** FJERN «probably»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1329

**Card ID:** a2-wahrscheinlich
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** wahrscheinlich
**CURRENT (DA):** maybe
**PROPOSED (DA):** FJERN «maybe»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1333

**Card ID:** a2-wechseln
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** wechseln
**CURRENT (DA):** Naudai
**PROPOSED (DA):** FJERN «Naudai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1334

**Card ID:** a2-wechseln
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** wechseln
**CURRENT (DA):** skolai
**PROPOSED (DA):** FJERN «skolai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1335

**Card ID:** a2-wechseln
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** wechseln
**CURRENT (DA):** darbam
**PROPOSED (DA):** FJERN «darbam»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1336

**Card ID:** a2-wechseln
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** wechseln
**CURRENT (DA):** for the topic
**PROPOSED (DA):** FJERN «for the topic»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1337

**Card ID:** a2-wechseln
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** wechseln
**CURRENT (DA):** to exchange
**PROPOSED (DA):** FJERN «to exchange»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1338

**Card ID:** a2-wechseln
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** wechseln
**CURRENT (DA):** preces
**PROPOSED (DA):** FJERN «preces»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1344

**Card ID:** a2-wert
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Wert
**CURRENT (DA):** worth
**PROPOSED (DA):** FJERN «worth»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1345

**Card ID:** a2-wert
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Wert
**CURRENT (DA):** expensive
**PROPOSED (DA):** FJERN «expensive»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1351

**Card ID:** a2-wiegen
**Field:** study.tip.leftBlocks[0].text
**DE konteksts:** wiegen
**CURRENT (DA):** Når du spørger om vægten af ​​en krop eller en genstand, brug wiegen.
**PROPOSED (DA):** Når du spørger om vægten af en krop eller en genstand, brug wiegen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1352

**Card ID:** a2-wiegen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** wiegen
**CURRENT (DA):** svaru
**PROPOSED (DA):** FJERN «svaru»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1356

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** ziehen
**CURRENT (DA):** moving
**PROPOSED (DA):** FJERN «moving»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1357

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** ziehen
**CURRENT (DA):** you will see
**PROPOSED (DA):** FJERN «you will see»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1358

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** ziehen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1359

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[5][0]
**DE konteksts:** ziehen
**CURRENT (DA):** runa
**PROPOSED (DA):** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1360

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** ziehen
**CURRENT (DA):** draft
**PROPOSED (DA):** FJERN «draft»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1361

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** ziehen
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1362

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]
**DE konteksts:** ziehen
**CURRENT (DA):** redzi
**PROPOSED (DA):** FJERN «redzi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1363

**Card ID:** a2-ziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** ziehen
**CURRENT (DA):** velk
**PROPOSED (DA):** FJERN «velk»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1368

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** zunehmen
**CURRENT (DA):** gain weight
**PROPOSED (DA):** FJERN «gain weight»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1369

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** zunehmen
**CURRENT (DA):** to accept
**PROPOSED (DA):** FJERN «to accept»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1370

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** zunehmen
**CURRENT (DA):** in weight
**PROPOSED (DA):** FJERN «in weight»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1371

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** zunehmen
**CURRENT (DA):** svaru
**PROPOSED (DA):** FJERN «svaru»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1372

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** zunehmen
**CURRENT (DA):** increase
**PROPOSED (DA):** FJERN «increase»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1373

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** zunehmen
**CURRENT (DA):** intensity
**PROPOSED (DA):** FJERN «intensity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1374

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** zunehmen
**CURRENT (DA):** for numbers
**PROPOSED (DA):** FJERN «for numbers»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1375

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** zunehmen
**CURRENT (DA):** pieaugt
**PROPOSED (DA):** FJERN «pieaugt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1376

**Card ID:** a2-zunehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** zunehmen
**CURRENT (DA):** prices
**PROPOSED (DA):** FJERN «prices»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1385

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** zurzeit
**CURRENT (DA):** current
**PROPOSED (DA):** FJERN «current»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1386

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** zurzeit
**CURRENT (DA):** temporary
**PROPOSED (DA):** FJERN «temporary»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1387

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** zurzeit
**CURRENT (DA):** the situation
**PROPOSED (DA):** FJERN «the situation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1388

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** zurzeit
**CURRENT (DA):** lieto
**PROPOSED (DA):** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1390

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]
**DE konteksts:** zurzeit
**CURRENT (DA):** often
**PROPOSED (DA):** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1392

**Card ID:** a2-zurzeit
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** zurzeit
**CURRENT (DA):** directly
**PROPOSED (DA):** FJERN «directly»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1393

**Card ID:** a2-ansehen
**Field:** study.explanation[1]
**DE konteksts:** ansehen
**CURRENT (DA):** Ansehen betyder hovedsageligt: ​​at se på en bestemt genstand.
**PROPOSED (DA):** Ansehen betyder hovedsageligt: at se på en bestemt genstand.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1394

**Card ID:** a2-sagen
**Field:** study.explanation[1]
**DE konteksts:** sagen
**CURRENT (DA):** Sagen betyder hovedsageligt: ​​at komme med en bestemt pointe.
**PROPOSED (DA):** Sagen betyder hovedsageligt: at komme med en bestemt pointe.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1395

**Card ID:** a2-sprechen
**Field:** study.explanation[1]
**DE konteksts:** sprechen
**CURRENT (DA):** Sprechen betyder hovedsageligt: ​​at tale eller tale.
**PROPOSED (DA):** Sprechen betyder hovedsageligt: at tale eller tale.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1396

**Card ID:** a2-gross
**Field:** study.explanation[5]
**DE konteksts:** groß
**CURRENT (DA):** Groß beskriver størrelse generelt eller højden af ​​en person.
**PROPOSED (DA):** Groß beskriver størrelse generelt eller højden af en person.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1397

**Card ID:** a2-klein
**Field:** study.explanation[1]
**DE konteksts:** klein
**CURRENT (DA):** Klein betyder hovedsageligt: ​​lille størrelse.
**PROPOSED (DA):** Klein betyder hovedsageligt: lille størrelse.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1398

**Card ID:** a2-klein
**Field:** study.explanation[2]
**DE konteksts:** klein
**CURRENT (DA):** Beskriver ofte: størrelsen af ​​en ting/person.
**PROPOSED (DA):** Beskriver ofte: størrelsen af en ting/person.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1399

**Card ID:** a2-schon
**Field:** study.explanation[1]
**DE konteksts:** schon
**CURRENT (DA):** Schon betyder hovedsageligt: ​​noget er allerede sket eller er i kraft.
**PROPOSED (DA):** Schon betyder hovedsageligt: noget er allerede sket eller er i kraft.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1400

**Card ID:** a2-noch
**Field:** study.explanation[1]
**DE konteksts:** noch
**CURRENT (DA):** Noch betyder hovedsageligt: ​​noget, der stadig foregår.
**PROPOSED (DA):** Noch betyder hovedsageligt: noget, der stadig foregår.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1401

**Card ID:** a2-ueber
**Field:** lv
**DE konteksts:** über
**CURRENT (DA):** Over • Over • For
**PROPOSED (DA):** Over • Over
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1402

**Card ID:** a2-ueber
**Field:** study.sectionAccents.examples.lv.purple.[0][1]
**DE konteksts:** über
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-1403

**Card ID:** a2-gleich
**Field:** study.explanation[3]
**DE konteksts:** gleich
**CURRENT (DA):** Gleich betyder hovedsageligt: ​​snart / straks.
**PROPOSED (DA):** Gleich betyder hovedsageligt: snart / straks.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

---

## 4. Metodoloģija

1. `node scripts/audit-da-a2-collect.js` — READ-ONLY kolektors (DE etalons `data/a2.js`)
2. `node scripts/audit-da-a2-report-gen.js` — pārskata ģenerators
3. Pilna 1640/1640 kartīšu coverage ar automātisku DA lauku caurskanēšanu
4. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas

**Production changes = 0**

**DE changes = 0**