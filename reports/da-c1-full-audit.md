# DA–DE C1 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Audita režīms:** READ-ONLY
**Production fails:** `data/da/c1.js` (primārais) + `www/data/da/c1.js` (mirror)
**Piezīme:** Dāņu tulkojumi glabājas laukā lv (projekta konvencija).
**DE etalons (tikai lasīšana):** `data/c1.js (DE parity only, READ-ONLY)`

---

## 1. Dataset scope

| Metrika | Vērtība |
|---------|---------|
| Cards total | **572** |
| Cards audited | **572/572** |
| Flashcards | **557** |
| Study total | **15** |
| Study audited | **15/15** |
| standardStudy | **15** |
| minimalStudy | **0** |
| Other study types | **0** |
| Coverage | **100%** |
| Parastās kartītes | **557** |

## 2. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kopējie validētie atradumi | **43** |
| rawCandidates | **22** |
| falsePositives | **0** |
| realFindings | **43** |
| CRITICAL | **0** |
| HIGH | **6** |
| MEDIUM | **37** |
| LOW | **0** |
| FALSE_POSITIVE | **0** |
| NEEDS_SOURCE_REVIEW | **0** |
| Svešvalodu atlikumi (auditēti) | **10** |
| Zero-width artefakti | **4** |
| sectionAccents findings | **1** |
| Missing Study | **0** |
| Front/lv sinonīmu ķēdes | **32** |
| Comparison LV atlikumi | **6** |
| Syntax | **PASS** |
| Mirror data ↔ www | **PASS** |
| Parity (--lang=da, C1) | **PASS** |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE C1: NEEDS REPAIR**

Atrasts **43** labojumu ierakstu (bez FALSE_POSITIVE). DE integritāte: **PASS**; Study paritāte: **PASS**. OWNER review: [`da-c1c2-all-findings-by-card.md`](./da-c1c2-all-findings-by-card.md).

---

## 3. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 572/572 PASS |
| Study skaits | 15/15 PASS |
| DE lauku secība/identitāte | PASS |
| Study paritāte (missing/extra) | PASS |
| Study ID unikalitāte | PASS |
| Mirror data ↔ www | PASS |
| JS syntax | PASS |
| Language parity (C1) | PASS |

---

## 4. OWNER review

- [`da-c1c2-all-findings-by-card.md`](./da-c1c2-all-findings-by-card.md)

---

## 5. Pilns atradumu saraksts

### 5.2 HIGH — LV atlikumi un obligātie lauki

#### DA-C1-0022

**Card ID:** c1-gelegentlich
**Field:** study.comparison[0].example
**DE konteksts:** gelegentlich
**CURRENT (DA):** Er kommt gelegentlich. = Viņš reizēm atnāk.
**PROPOSED (DA):** Er kommt gelegentlich. = Han kigger forbi nogle gange.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-C1-0023

**Card ID:** c1-gelegentlich
**Field:** study.comparison[1].example
**DE konteksts:** gelegentlich
**CURRENT (DA):** ein gelegentlicher Besuch = gadījuma apmeklējums
**PROPOSED (DA):** ein gelegentlicher Besuch = Et lejlighedsvis besøg er nok.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-C1-0024

**Card ID:** c1-gelegentlich
**Field:** study.comparison[2].example
**DE konteksts:** gelegentlich
**CURRENT (DA):** gelegentlich des Festes = svētku sakarā
**PROPOSED (DA):** gelegentlich des Festes = Der blev holdt tale i anledning af højtiden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-C1-0025

**Card ID:** c1-gelegentlich
**Field:** study.comparison[3].example
**DE konteksts:** gelegentlich
**CURRENT (DA):** Manchmal regnet es. = Reizēm līst.
**PROPOSED (DA):** Manchmal regnet es. = Reizēm līst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-C1-0040

**Card ID:** c1-wahlberechtigt
**Field:** study.comparison[0].example
**DE konteksts:** wahlberechtigt
**CURRENT (DA):** Er ist wahlberechtigt. = Viņam ir vēlēšanu tiesības.
**PROPOSED (DA):** Er ist wahlberechtigt. = Viņam er vēlēšanu tiesības.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-C1-0041

**Card ID:** c1-wahlberechtigt
**Field:** study.comparison[2].example
**DE konteksts:** wahlberechtigt
**CURRENT (DA):** Der Wähler geht zur Wahl. = Vēlētājs iet uz vēlēšanām.
**PROPOSED (DA):** Der Wähler geht zur Wahl. = Vēlētājs iet uz vēlēšanām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

### 5.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes

#### DA-C1-0001

**Card ID:** c1-wahl
**Field:** study.explanation
**DE konteksts:** Wahl
**CURRENT (DA):** Die Wahl kan betyde et valg mellem muligheder. I politisk sammenhæng betyder Wahl valg. Det kan også betyde, at man stemmer selv. Udtrykket eine Wahl treffen betyder at træffe et valg. zur Wahl gehen betyder at gå til valg. Konteksten af ​​en politik eller personlig beslutning viser den korrekte bet…
**PROPOSED (DA):** Die Wahl kan betyde et valg mellem muligheder. I politisk sammenhæng betyder Wahl valg. Det kan også betyde, at man stemmer selv. Udtrykket eine Wahl treffen betyder at træffe et valg. zur Wahl gehen betyder at gå til valg. Konteksten af en politik eller personlig beslutning viser den korrekte betyd…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL/BS/ET/LT/UK/RU atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0002

**Card ID:** c1-Abgeordnete-197
**Field:** lv
**DE konteksts:** Abgeordnete
**CURRENT (DA):** Suppleant • Repræsentant • Delegeret
**PROPOSED (DA):** Suppleant • Repræsentant
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0003

**Card ID:** c1-beanspruchen-208
**Field:** lv
**DE konteksts:** beanspruchen
**CURRENT (DA):** Kræv • Krav • Være belastet
**PROPOSED (DA):** Kræv • Krav
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0004

**Card ID:** c1-bedingungslos-210
**Field:** lv
**DE konteksts:** bedingungslos
**CURRENT (DA):** Ubetinget • Ubetinget • Uden forbehold • Uden betingelser
**PROPOSED (DA):** Ubetinget • Ubetinget
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0005

**Card ID:** c1-beklagen-217
**Field:** lv
**DE konteksts:** beklagen
**CURRENT (DA):** Fortrydelse • Sorg • Sørge • Beklage • Klag
**PROPOSED (DA):** Fortrydelse • Sorg
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0006

**Card ID:** c1-benachteiligen-220
**Field:** lv
**DE konteksts:** benachteiligen
**CURRENT (DA):** Skade • Forårsage skade • Skade
**PROPOSED (DA):** Skade • Forårsage skade
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0007

**Card ID:** c1-Berufung-227
**Field:** lv
**DE konteksts:** Berufung
**CURRENT (DA):** Opkald • Tilbøjelighed • Appel
**PROPOSED (DA):** Opkald • Tilbøjelighed
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0008

**Card ID:** c1-Beschaffenheit-229
**Field:** lv
**DE konteksts:** Beschaffenheit
**CURRENT (DA):** Kvalitet • Natur • Essens
**PROPOSED (DA):** Kvalitet • Natur
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0009

**Card ID:** c1-Bescheinigung-231
**Field:** lv
**DE konteksts:** Bescheinigung
**CURRENT (DA):** Reference • Certifikat • Attestation • Attestation
**PROPOSED (DA):** Reference • Certifikat
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0010

**Card ID:** c1-beschlagnahmen-232
**Field:** lv
**DE konteksts:** beschlagnahmen
**CURRENT (DA):** Beslaglægge • Konfiskere • Ekspropriere
**PROPOSED (DA):** Beslaglægge • Konfiskere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0011

**Card ID:** c1-beträchtlich-235
**Field:** lv
**DE konteksts:** beträchtlich
**CURRENT (DA):** Betydelig • Ganske stor • Betydelig
**PROPOSED (DA):** Betydelig • Ganske stor
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0012

**Card ID:** c1-bewerben, sich-242
**Field:** lv
**DE konteksts:** bewerben, sich
**CURRENT (DA):** Ansøg • Løb • Stræb • Aspire
**PROPOSED (DA):** Ansøg • Løb
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0013

**Card ID:** c1-dauerhaft-255
**Field:** lv
**DE konteksts:** dauerhaft
**CURRENT (DA):** Holdbar • Lang • Holdbar
**PROPOSED (DA):** Holdbar • Lang
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0014

**Card ID:** c1-dazwischenkommen-256
**Field:** lv
**DE konteksts:** dazwischenkommen
**CURRENT (DA):** At ske • At ske mellem • At gribe ind
**PROPOSED (DA):** At ske • At ske mellem
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0015

**Card ID:** c1-ehrenhaft-277
**Field:** lv
**DE konteksts:** ehrenhaft
**CURRENT (DA):** Ærlig • Ærlig • Respektabel
**PROPOSED (DA):** Ærlig • Ærlig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0016

**Card ID:** c1-Einlage-282
**Field:** lv
**DE konteksts:** Einlage
**CURRENT (DA):** Bidrag • Depositum • Bilag til brevet
**PROPOSED (DA):** Bidrag • Depositum
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0017

**Card ID:** c1-einreden-283
**Field:** lv
**DE konteksts:** einreden
**CURRENT (DA):** Fortæl • Insister • Prøv at overbevise
**PROPOSED (DA):** Fortæl • Insister
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0018

**Card ID:** c1-Einverständnis-288
**Field:** lv
**DE konteksts:** Einverständnis
**CURRENT (DA):** Forståelse • Konsensus • Samtykke
**PROPOSED (DA):** Forståelse • Konsensus
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0019

**Card ID:** c1-entschlossen-300
**Field:** lv
**DE konteksts:** entschlossen
**CURRENT (DA):** Determined • Determined • Urokkelig
**PROPOSED (DA):** Determined • Determined
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0020

**Card ID:** c1-festgesetzt-309
**Field:** lv
**DE konteksts:** festgesetzt
**CURRENT (DA):** Bestemt • Betinget • Fastlagt
**PROPOSED (DA):** Bestemt • Betinget
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0021

**Card ID:** c1-gelegentlich
**Field:** lv
**DE konteksts:** gelegentlich
**CURRENT (DA):** Nogle gange • Anledning • Pga
**PROPOSED (DA):** Nogle gange • Anledning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0026

**Card ID:** c1-geringschätzig-354
**Field:** lv
**DE konteksts:** geringschätzig
**CURRENT (DA):** Hånlig • Foragtelig • Foragtelig
**PROPOSED (DA):** Hånlig • Foragtelig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0027

**Card ID:** c1-gewissermaßen-369
**Field:** lv
**DE konteksts:** gewissermaßen
**CURRENT (DA):** Til en vis grad • I en vis forstand • Så at sige
**PROPOSED (DA):** Til en vis grad • I en vis forstand
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0028

**Card ID:** c1-herunterkommen-390
**Field:** lv
**DE konteksts:** herunterkommen
**CURRENT (DA):** Kom ned • Forfald • Forfald • Synk
**PROPOSED (DA):** Kom ned • Forfald
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0029

**Card ID:** c1-Kaution-404
**Field:** lv
**DE konteksts:** Kaution
**CURRENT (DA):** Pant • Kaution • Kaution • Garanti
**PROPOSED (DA):** Pant • Kaution
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0030

**Card ID:** c1-Liebeserklärung-419
**Field:** lv
**DE konteksts:** Liebeserklärung
**CURRENT (DA):** Opdagelsen af ​​kærlighed
**PROPOSED (DA):** Opdagelsen af kærlighed
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL/BS/ET/LT/UK/RU atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0031

**Card ID:** c1-Nachschlagewerk-430
**Field:** lv
**DE konteksts:** Nachschlagewerk
**CURRENT (DA):** Referencelitteratur • Ordbog • Encyklopædi
**PROPOSED (DA):** Referencelitteratur • Ordbog
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0032

**Card ID:** c1-Oppositionsführer-435
**Field:** lv
**DE konteksts:** Oppositionsführer
**CURRENT (DA):** Lederen af ​​oppositionen
**PROPOSED (DA):** Lederen af oppositionen
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL/BS/ET/LT/UK/RU atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0033

**Card ID:** c1-Spitzenleistung-479
**Field:** lv
**DE konteksts:** Spitzenleistung
**CURRENT (DA):** Rekord • Højeste præstation • Tekn. maksimal effekt
**PROPOSED (DA):** Rekord • Højeste præstation
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0034

**Card ID:** c1-Überschuss-493
**Field:** lv
**DE konteksts:** Überschuss
**CURRENT (DA):** Resten • Overskud • Afvikling
**PROPOSED (DA):** Resten • Overskud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0035

**Card ID:** c1-veranschlagen-502
**Field:** lv
**DE konteksts:** veranschlagen
**CURRENT (DA):** Beregn • Beregn • Lav et skøn
**PROPOSED (DA):** Beregn • Beregn
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0036

**Card ID:** c1-verdrießlich-503
**Field:** lv
**DE konteksts:** verdrießlich
**CURRENT (DA):** Ubehagelig • Irriteret • Irriteret
**PROPOSED (DA):** Ubehagelig • Irriteret
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0037

**Card ID:** c1-Vergünstigung-508
**Field:** lv
**DE konteksts:** Vergünstigung
**CURRENT (DA):** Fordel • Privilegium • Aflastning
**PROPOSED (DA):** Fordel • Privilegium
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0038

**Card ID:** c1-verschlossen-522
**Field:** lv
**DE konteksts:** verschlossen
**CURRENT (DA):** Låst • Lukket • Trans. lukket • Selvforsynet
**PROPOSED (DA):** Låst • Lukket
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0039

**Card ID:** c1-Vollversammlung-538
**Field:** lv
**DE konteksts:** Vollversammlung
**CURRENT (DA):** Plenum • Generalforsamling • Generalforsamling
**PROPOSED (DA):** Plenum • Generalforsamling
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C1 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0042

**Card ID:** c1-wahlberechtigt
**Field:** study.sectionAccents.examples.lv.purple.[0][0]
**DE konteksts:** wahlberechtigt
**CURRENT (DA):** All
**PROPOSED (DA):** FJERN «All»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C1-0043

**Card ID:** c1-voraussetzen
**Field:** study.explanation[1]
**DE konteksts:** voraussetzen
**CURRENT (DA):** Voraussetzen betyder hovedsageligt: ​​at betragte som grundlag.
**PROPOSED (DA):** Voraussetzen betyder hovedsageligt: at betragte som grundlag.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL/BS/ET/LT/UK/RU atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

---

## 6. Metodoloģija

**Auditors:** GPT-5.6 Luna (READ-ONLY)
1. `node scripts/audit-da-c1c2-collect.js --level=c1` — READ-ONLY kolektors
2. `node scripts/build-da-c1c2-owner-review.js` — OWNER review tabula
3. `node scripts/audit-da-c1c2-report-gen.js` — šis pārskats
4. Pilna 572/572 kartīšu coverage ar automātisku DA lauku caurskanēšanu
5. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas

## AUDIT COMPLETE — OWNER REVIEW READY

**Production changes = 0**

**DE changes = 0**