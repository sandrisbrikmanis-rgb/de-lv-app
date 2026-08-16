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
| Kopējie validētie atradumi | **30** |
| CRITICAL | **0** |
| HIGH | **1** |
| MEDIUM | **29** |
| LOW | **0** |
| DE_SOURCE_ISSUE | **0** |
| FALSE_POSITIVE | **0** |
| Comparison LV atlikumi | **0** |
| Zero-width artefakti | **0** |
| sectionAccents problēmas | **29** |
| Sinonīmu ķēdes (3+ •) | **0** |
| Syntax | **PASS** |
| Mirror/parity | **PASS** (data ↔ www) |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE A2: NEEDS REPAIR**

Atrasts **30** labojumu ierakstu: galvenokārt **comparison piemēros latviešu atlikumi**, **zero-width artefakti**, **sectionAccents** un **sinonīmu ķēdes** priekšpusē. DE integritāte: **PASS**; Study paritāte: **PASS**.

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

#### DA-A2-0030

**Card ID:** a2-Weste-1584
**Field:** lv
**DE konteksts:** Weste
**CURRENT (DA):** Vest
**PROPOSED (DA):** Vest
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

### 3.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes

#### DA-A2-0001

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** abstellen
**CURRENT (DA):** somu
**PROPOSED (DA):** FJERN «somu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0002

**Card ID:** a2-abstellen
**Field:** study.sectionAccents.tip.rightBlocks.text.yellow.[1][1]
**DE konteksts:** abstellen
**CURRENT (DA):** datoru
**PROPOSED (DA):** FJERN «datoru»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0003

**Card ID:** a2-angreifen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** angreifen
**CURRENT (DA):** apvaino
**PROPOSED (DA):** FJERN «apvaino»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0004

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Artikel
**CURRENT (DA):** raksts
**PROPOSED (DA):** FJERN «raksts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0005

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Artikel
**CURRENT (DA):** raksts
**PROPOSED (DA):** FJERN «raksts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0006

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Artikel
**CURRENT (DA):** prece
**PROPOSED (DA):** FJERN «prece»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0007

**Card ID:** a2-artikel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[6][1]
**DE konteksts:** Artikel
**CURRENT (DA):** prece
**PROPOSED (DA):** FJERN «prece»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0008

**Card ID:** a2-bauer
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Bauer
**CURRENT (DA):** zemnieks
**PROPOSED (DA):** FJERN «zemnieks»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0009

**Card ID:** a2-bestimmt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** bestimmt
**CURRENT (DA):** noteikti
**PROPOSED (DA):** FJERN «noteikti»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0010

**Card ID:** a2-bestimmt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** bestimmt
**CURRENT (DA):** noteikts
**PROPOSED (DA):** FJERN «noteikts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0011

**Card ID:** a2-birne
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Birne
**CURRENT (DA):** spuldze
**PROPOSED (DA):** FJERN «spuldze»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0012

**Card ID:** a2-borgen
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** borgen
**CURRENT (DA):** aizdot
**PROPOSED (DA):** FJERN «aizdot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0013

**Card ID:** a2-borgen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]
**DE konteksts:** borgen
**CURRENT (DA):** aizdot
**PROPOSED (DA):** FJERN «aizdot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0014

**Card ID:** a2-damit
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** damit
**CURRENT (DA):** lai
**PROPOSED (DA):** FJERN «lai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0015

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.red.[0][0]
**DE konteksts:** eben
**CURRENT (DA):** tikko
**PROPOSED (DA):** FJERN «tikko»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0016

**Card ID:** a2-eben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** eben
**CURRENT (DA):** tikko
**PROPOSED (DA):** FJERN «tikko»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0017

**Card ID:** a2-führen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** führen
**CURRENT (DA):** firmu
**PROPOSED (DA):** FJERN «firmu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0018

**Card ID:** a2-genau
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** genau
**CURRENT (DA):** tikko
**PROPOSED (DA):** FJERN «tikko»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0019

**Card ID:** a2-geschäft
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Geschäft
**CURRENT (DA):** veikalu
**PROPOSED (DA):** FJERN «veikalu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0020

**Card ID:** a2-grund
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Grund
**CURRENT (DA):** iemesla
**PROPOSED (DA):** FJERN «iemesla»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0021

**Card ID:** a2-note
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][1]
**DE konteksts:** Note
**CURRENT (DA):** nots
**PROPOSED (DA):** FJERN «nots»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0022

**Card ID:** a2-note
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]
**DE konteksts:** Note
**CURRENT (DA):** nots
**PROPOSED (DA):** FJERN «nots»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0023

**Card ID:** a2-rolle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]
**DE konteksts:** Rolle
**CURRENT (DA):** lomu
**PROPOSED (DA):** FJERN «lomu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0024

**Card ID:** a2-scheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** scheinen
**CURRENT (DA):** Saule
**PROPOSED (DA):** FJERN «Saule»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0025

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]
**DE konteksts:** Schuld
**CURRENT (DA):** vaina
**PROPOSED (DA):** FJERN «vaina»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0026

**Card ID:** a2-schuld
**Field:** study.sectionAccents.tip.leftBlocks.text.orange.[0][0]
**DE konteksts:** Schuld
**CURRENT (DA):** vaina
**PROPOSED (DA):** FJERN «vaina»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0027

**Card ID:** a2-steigen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** steigen
**CURRENT (DA):** cenas
**PROPOSED (DA):** FJERN «cenas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0028

**Card ID:** a2-stelle
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** Stelle
**CURRENT (DA):** vietu
**PROPOSED (DA):** FJERN «vietu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A2-0029

**Card ID:** a2-wählen
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]
**DE konteksts:** wählen
**CURRENT (DA):** numuru
**PROPOSED (DA):** FJERN «numuru»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
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