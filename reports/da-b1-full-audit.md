# DA–DE B1 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Production fails:** `data/da/b1.js` (primārais) + `www/data/da/b1.js` (mirror)
**Piezīme:** Dāņu tulkojumi glabājas laukā lv (projekta konvencija).
**DE etalons (tikai lasīšana):** `data/b1.js (DE parity only, READ-ONLY)`

---

## 1. Dataset scope

| Metrika | Vērtība |
|---------|---------|
| Cards total | **3367** |
| Cards audited | **3367/3367** |
| Study total | **324** |
| Study audited | **324/324** |
| Coverage | **100%** |
| Parastās kartītes | **3043** |

## 2. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kopējie validētie atradumi | **1575** |
| CRITICAL | **0** |
| HIGH | **717** |
| MEDIUM | **858** |
| LOW | **0** |
| FALSE_POSITIVE | **0** |
| DE_SOURCE_ISSUE | **0** |
| Svešvalodu atlikumi (auditēti) | **784** |
| Zero-width artefakti | **67** |
| sectionAccents findings | **798** |
| Missing Study | **0** |
| Front/lv sinonīmu ķēdes | **0** |
| Comparison LV atlikumi | **710** |
| Syntax | **PASS** |
| Mirror data ↔ www | **PASS** |
| Parity (--lang=da, B1) | **PASS** |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE B1: NEEDS REPAIR**

Atrasts **1575** labojumu ierakstu. DE integritāte: **PASS**; Study paritāte: **PASS**. OWNER review faili sagatavoti copy-only labojumiem.

---

## 3. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 3367/3367 PASS |
| Study skaits | 324/324 PASS |
| DE lauku secība/identitāte | PASS |
| Study paritāte (missing/extra) | PASS |
| Study ID unikalitāte | PASS |
| Mirror data ↔ www | PASS |
| JS syntax | PASS |
| Language parity (B1) | PASS |

---

## 4. OWNER review faili

- [`da-b1-owner-review-README.md`](./da-b1-owner-review-README.md)
- [`da-b1-owner-review-comparison-01.md`](./da-b1-owner-review-comparison-01.md)
- [`da-b1-owner-review-comparison-02.md`](./da-b1-owner-review-comparison-02.md)
- [`da-b1-owner-review-comparison-03.md`](./da-b1-owner-review-comparison-03.md)
- [`da-b1-owner-review-comparison-04.md`](./da-b1-owner-review-comparison-04.md)
- [`da-b1-owner-review-comparison-05.md`](./da-b1-owner-review-comparison-05.md)
- [`da-b1-owner-review-comparison-06.md`](./da-b1-owner-review-comparison-06.md)
- [`da-b1-owner-review-comparison-07.md`](./da-b1-owner-review-comparison-07.md)
- [`da-b1-owner-review-comparison-08.md`](./da-b1-owner-review-comparison-08.md)
- [`da-b1-owner-review-comparison-09.md`](./da-b1-owner-review-comparison-09.md)
- [`da-b1-owner-review-comparison-10.md`](./da-b1-owner-review-comparison-10.md)
- [`da-b1-owner-review-comparison-11.md`](./da-b1-owner-review-comparison-11.md)
- [`da-b1-owner-review-comparison-12.md`](./da-b1-owner-review-comparison-12.md)
- [`da-b1-owner-review-comparison-13.md`](./da-b1-owner-review-comparison-13.md)
- [`da-b1-owner-review-comparison-14.md`](./da-b1-owner-review-comparison-14.md)
- [`da-b1-owner-review-comparison-15.md`](./da-b1-owner-review-comparison-15.md)
- [`da-b1-owner-review-misc-01.md`](./da-b1-owner-review-misc-01.md)
- [`da-b1-owner-review-misc-02.md`](./da-b1-owner-review-misc-02.md)
- [`da-b1-owner-review-sectionaccents-01.md`](./da-b1-owner-review-sectionaccents-01.md)
- [`da-b1-owner-review-sectionaccents-02.md`](./da-b1-owner-review-sectionaccents-02.md)
- [`da-b1-owner-review-sectionaccents-03.md`](./da-b1-owner-review-sectionaccents-03.md)
- [`da-b1-owner-review-sectionaccents-04.md`](./da-b1-owner-review-sectionaccents-04.md)
- [`da-b1-owner-review-sectionaccents-05.md`](./da-b1-owner-review-sectionaccents-05.md)
- [`da-b1-owner-review-sectionaccents-06.md`](./da-b1-owner-review-sectionaccents-06.md)
- [`da-b1-owner-review-sectionaccents-07.md`](./da-b1-owner-review-sectionaccents-07.md)
- [`da-b1-owner-review-sectionaccents-08.md`](./da-b1-owner-review-sectionaccents-08.md)
- [`da-b1-owner-review-sectionaccents-09.md`](./da-b1-owner-review-sectionaccents-09.md)
- [`da-b1-owner-review-sectionaccents-10.md`](./da-b1-owner-review-sectionaccents-10.md)
- [`da-b1-owner-review-sectionaccents-11.md`](./da-b1-owner-review-sectionaccents-11.md)
- [`da-b1-owner-review-sectionaccents-12.md`](./da-b1-owner-review-sectionaccents-12.md)
- [`da-b1-owner-review-sectionaccents-13.md`](./da-b1-owner-review-sectionaccents-13.md)
- [`da-b1-owner-review-sectionaccents-14.md`](./da-b1-owner-review-sectionaccents-14.md)
- [`da-b1-owner-review-sectionaccents-15.md`](./da-b1-owner-review-sectionaccents-15.md)
- [`da-b1-owner-review-sectionaccents-16.md`](./da-b1-owner-review-sectionaccents-16.md)

Indekss: [`da-b1-owner-review-README.md`](./da-b1-owner-review-README.md)

---

## 5. Pilns atradumu saraksts

### 5.2 HIGH — LV atlikumi un obligātie lauki

#### DA-B1-0001

**Card ID:** b1-anbauen
**Field:** study.comparison[0].example
**DE konteksts:** anbauen
**CURRENT (DA):** Wir bauen Gemüse an. = Mēs audzējam dārzeņus.
**PROPOSED (DA):** Wir bauen Gemüse an. = Vi audzējam dārzeņus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0002

**Card ID:** b1-anbauen
**Field:** study.comparison[1].example
**DE konteksts:** anbauen
**CURRENT (DA):** Sie bauen ein Haus. = Viņi būvē māju.
**PROPOSED (DA):** Sie bauen ein Haus. = Viņi būvē māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0003

**Card ID:** b1-anbauen
**Field:** study.comparison[2].example
**DE konteksts:** anbauen
**CURRENT (DA):** Ich pflanze einen Baum. = Es stādu koku.
**PROPOSED (DA):** Ich pflanze einen Baum. = Jeg stādu koku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0005

**Card ID:** b1-angeben
**Field:** study.comparison[0].example
**DE konteksts:** angeben
**CURRENT (DA):** Bitte geben Sie den Namen an. = Lūdzu, norādiet vārdu.
**PROPOSED (DA):** Bitte geben Sie den Namen an. = Angiv venligst din adresse.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0006

**Card ID:** b1-angeben
**Field:** study.comparison[1].example
**DE konteksts:** angeben
**CURRENT (DA):** Nennen Sie bitte Ihren Namen. = Lūdzu, nosauciet savu vārdu.
**PROPOSED (DA):** Nennen Sie bitte Ihren Namen. = Lūdzu, nosauciet savu vārdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0007

**Card ID:** b1-angeben
**Field:** study.comparison[2].example
**DE konteksts:** angeben
**CURRENT (DA):** Er prahlt mit seinem Erfolg. = Viņš lielās ar saviem panākumiem.
**PROPOSED (DA):** Er prahlt mit seinem Erfolg. = Viņš lielās ar saviem panākumiem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0008

**Card ID:** b1-anbringen
**Field:** study.comparison[0].example
**DE konteksts:** anbringen
**CURRENT (DA):** Ich bringe ein Bild an. = Es piestiprinu attēlu.
**PROPOSED (DA):** Ich bringe ein Bild an. = Jeg piestiprinu attēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0009

**Card ID:** b1-anbringen
**Field:** study.comparison[1].example
**DE konteksts:** anbringen
**CURRENT (DA):** Wir stellen ein Regal auf. = Mēs uzstādām plauktu.
**PROPOSED (DA):** Wir stellen ein Regal auf. = Vi uzstādām plauktu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0010

**Card ID:** b1-anbringen
**Field:** study.comparison[2].example
**DE konteksts:** anbringen
**CURRENT (DA):** Wir befestigen das Schild an der Wand. = Mēs piestiprinām zīmi pie sienas.
**PROPOSED (DA):** Wir befestigen das Schild an der Wand. = Vi piestiprinām zīmi pie sienas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0013

**Card ID:** b1-abbauen
**Field:** study.comparison[0].example
**DE konteksts:** abbauen
**CURRENT (DA):** Die Firma baut Stellen ab. = Uzņēmums samazina darba vietu skaitu.
**PROPOSED (DA):** Die Firma baut Stellen ab. = Virksomheden reducerer antallet af arbejdspladser.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0014

**Card ID:** b1-abbauen
**Field:** study.comparison[1].example
**DE konteksts:** abbauen
**CURRENT (DA):** Wir bauen das Zelt auf. = Mēs uzceļam telti.
**PROPOSED (DA):** Wir bauen das Zelt auf. = Vi river teltet ned.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0015

**Card ID:** b1-abbauen
**Field:** study.comparison[2].example
**DE konteksts:** abbauen
**CURRENT (DA):** Wir reduzieren die Kosten. = Mēs samazinām izmaksas.
**PROPOSED (DA):** Wir reduzieren die Kosten. = Vi samazinām izmaksas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0019

**Card ID:** b1-abbrechen
**Field:** study.comparison[0].example
**DE konteksts:** abbrechen
**CURRENT (DA):** Er bricht den Kurs ab. = Viņš pārtrauc kursu.
**PROPOSED (DA):** Er bricht den Kurs ab. = Viņš pārtrauc kursu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0020

**Card ID:** b1-abbrechen
**Field:** study.comparison[1].example
**DE konteksts:** abbrechen
**CURRENT (DA):** Darf ich Sie kurz unterbrechen? = Vai drīkstu jūs īsi pārtraukt?
**PROPOSED (DA):** Darf ich Sie kurz unterbrechen? = Vai drīkstu jūs īsi pārtraukt?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0021

**Card ID:** b1-abbrechen
**Field:** study.comparison[2].example
**DE konteksts:** abbrechen
**CURRENT (DA):** Wir beenden die Arbeit. = Mēs pabeidzam darbu.
**PROPOSED (DA):** Wir beenden die Arbeit. = Vi pabeidzam darbu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0022

**Card ID:** b1-abdecken
**Field:** study.comparison[0].example
**DE konteksts:** abdecken
**CURRENT (DA):** Sie deckt den Tisch ab. = Viņa novāc galdu.
**PROPOSED (DA):** Sie deckt den Tisch ab. = Efter at have spist rydder han bordet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0023

**Card ID:** b1-abdecken
**Field:** study.comparison[1].example
**DE konteksts:** abdecken
**CURRENT (DA):** Ich decke den Tisch. = Es klāju galdu.
**PROPOSED (DA):** Ich decke den Tisch. = Jeg klāju galdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0024

**Card ID:** b1-abdecken
**Field:** study.comparison[2].example
**DE konteksts:** abdecken
**CURRENT (DA):** Ich decke das Kind zu. = Es apsedzu bērnu.
**PROPOSED (DA):** Ich decke das Kind zu. = Jeg apsedzu bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0025

**Card ID:** b1-abgehen
**Field:** study.comparison[0].example
**DE konteksts:** abgehen
**CURRENT (DA):** Der Zug geht ab. = Vilciens atiet.
**PROPOSED (DA):** Der Zug geht ab. = Toget afgår.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0026

**Card ID:** b1-abgehen
**Field:** study.comparison[1].example
**DE konteksts:** abgehen
**CURRENT (DA):** Sie geht weg. = Viņa aiziet prom.
**PROPOSED (DA):** Sie geht weg. = Hun aiziet væk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0027

**Card ID:** b1-abgehen
**Field:** study.comparison[2].example
**DE konteksts:** abgehen
**CURRENT (DA):** Mir fehlt nichts. = Man nekā netrūkst.
**PROPOSED (DA):** Mir fehlt nichts. = Jeg har nekā netrūkst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0028

**Card ID:** b1-ablegen
**Field:** study.comparison[0].example
**DE konteksts:** ablegen
**CURRENT (DA):** Sie legt die Prüfung ab. = Viņa kārto eksāmenu.
**PROPOSED (DA):** Sie legt die Prüfung ab. = Han tager en eksamen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0029

**Card ID:** b1-ablegen
**Field:** study.comparison[1].example
**DE konteksts:** ablegen
**CURRENT (DA):** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED (DA):** Ich lege das Buch auf den Tisch. = Jeg nolieku bogen uz galda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0030

**Card ID:** b1-abnehmen
**Field:** study.comparison[0].example
**DE konteksts:** abnehmen
**CURRENT (DA):** Ich nehme die Brille ab. = Es noņemu brilles.
**PROPOSED (DA):** Ich nehme die Brille ab. = Jeg noņemu brilles.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0031

**Card ID:** b1-abnehmen
**Field:** study.comparison[1].example
**DE konteksts:** abnehmen
**CURRENT (DA):** Er hat zugenommen. = Viņš ir pieņēmies svarā.
**PROPOSED (DA):** Er hat zugenommen. = Viņš er pieņēmies svarā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0032

**Card ID:** b1-abnehmen
**Field:** study.comparison[2].example
**DE konteksts:** abnehmen
**CURRENT (DA):** Sie nimmt mir das Handy weg. = Viņa man atņem telefonu.
**PROPOSED (DA):** Sie nimmt mir das Handy weg. = Hun man atņem telefonu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0033

**Card ID:** b1-absatz
**Field:** study.comparison[0].example
**DE konteksts:** Absatz
**CURRENT (DA):** Der Absatz ist kurz. = Rindkopa ir īsa.
**PROPOSED (DA):** Der Absatz ist kurz. = Rindkopa er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0034

**Card ID:** b1-absatz
**Field:** study.comparison[1].example
**DE konteksts:** Absatz
**CURRENT (DA):** Meine Ferse tut weh. = Man sāp papēdis.
**PROPOSED (DA):** Meine Ferse tut weh. = Jeg har sāp papēdis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0035

**Card ID:** b1-absatz
**Field:** study.comparison[2].example
**DE konteksts:** Absatz
**CURRENT (DA):** Dieser Abschnitt ist wichtig. = Šis posms ir svarīgs.
**PROPOSED (DA):** Dieser Abschnitt ist wichtig. = Šis posms er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0038

**Card ID:** b1-abschluss
**Field:** study.comparison[0].example
**DE konteksts:** Abschluss
**CURRENT (DA):** Der Abschluss ist wichtig. = Noslēgums ir svarīgs.
**PROPOSED (DA):** Der Abschluss ist wichtig. = Noslēgums er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0039

**Card ID:** b1-abschluss
**Field:** study.comparison[2].example
**DE konteksts:** Abschluss
**CURRENT (DA):** Die Prüfung beginnt morgen. = Eksāmens sākas rīt.
**PROPOSED (DA):** Die Prüfung beginnt morgen. = Eksāmens sāsom i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0040

**Card ID:** b1-abschnitt
**Field:** study.comparison[0].example
**DE konteksts:** Abschnitt
**CURRENT (DA):** Dieser Abschnitt ist wichtig. = Šis posms ir svarīgs.
**PROPOSED (DA):** Dieser Abschnitt ist wichtig. = Denne fase er svær.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0041

**Card ID:** b1-abschnitt
**Field:** study.comparison[1].example
**DE konteksts:** Abschnitt
**CURRENT (DA):** Der Absatz ist kurz. = Rindkopa ir īsa.
**PROPOSED (DA):** Der Absatz ist kurz. = Rindkopa er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0042

**Card ID:** b1-abschnitt
**Field:** study.comparison[2].example
**DE konteksts:** Abschnitt
**CURRENT (DA):** Die erste Phase ist vorbei. = Pirmā fāze ir beigusies.
**PROPOSED (DA):** Die erste Phase ist vorbei. = Pirmā fāze er beigusies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0044

**Card ID:** b1-anlage
**Field:** study.comparison[0].example
**DE konteksts:** Anlage
**CURRENT (DA):** Die Anlage ist modern. = Iekārta ir moderna.
**PROPOSED (DA):** Die Anlage ist modern. = Iekārta er moderna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0045

**Card ID:** b1-anlage
**Field:** study.comparison[1].example
**DE konteksts:** Anlage
**CURRENT (DA):** Das Gerät ist kaputt. = Ierīce ir sabojājusies.
**PROPOSED (DA):** Das Gerät ist kaputt. = Ierīce er sabojājusies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0046

**Card ID:** b1-anlage
**Field:** study.comparison[2].example
**DE konteksts:** Anlage
**CURRENT (DA):** Die Investition lohnt sich. = Ieguldījums atmaksājas.
**PROPOSED (DA):** Die Investition lohnt sich. = Ieguldījums atmaksājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0047

**Card ID:** b1-anschlag
**Field:** study.comparison[0].example
**DE konteksts:** Anschlag
**CURRENT (DA):** Die Polizei untersucht den Anschlag. = Policija izmeklē atentātu.
**PROPOSED (DA):** Die Polizei untersucht den Anschlag. = Politiet efterforsker attentatet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0048

**Card ID:** b1-anschlag
**Field:** study.comparison[1].example
**DE konteksts:** Anschlag
**CURRENT (DA):** Der Angriff kam plötzlich. = Uzbrukums sākās pēkšņi.
**PROPOSED (DA):** Der Angriff kam plötzlich. = Uzbrukums sākās pēkšņi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0049

**Card ID:** b1-anschlag
**Field:** study.comparison[2].example
**DE konteksts:** Anschlag
**CURRENT (DA):** Ich lese die Anzeige. = Es lasu sludinājumu.
**PROPOSED (DA):** Ich lese die Anzeige. = Jeg lasu sludinājumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0050

**Card ID:** b1-anschluss
**Field:** study.comparison[2].example
**DE konteksts:** Anschluss
**CURRENT (DA):** Ich habe Zugang zum Internet. = Man ir piekļuve internetam.
**PROPOSED (DA):** Ich habe Zugang zum Internet. = Jeg har er piekļuve internetam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0053

**Card ID:** b1-ansehen
**Field:** study.comparison[0].example
**DE konteksts:** Ansehen
**CURRENT (DA):** Er hat großes Ansehen. = Viņu ļoti ciena.
**PROPOSED (DA):** Er hat großes Ansehen. = Viņu ļoti ciena.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0054

**Card ID:** b1-ansehen
**Field:** study.comparison[1].example
**DE konteksts:** Ansehen
**CURRENT (DA):** Die Firma hat einen guten Ruf. = Uzņēmumam ir laba reputācija.
**PROPOSED (DA):** Die Firma hat einen guten Ruf. = Uzņēmumam er laba reputācija.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0055

**Card ID:** b1-antrag
**Field:** study.comparison[0].example
**DE konteksts:** Antrag
**CURRENT (DA):** Der Antrag wurde angenommen. = Iesniegums tika pieņemts.
**PROPOSED (DA):** Der Antrag wurde angenommen. = Ansøgningen blev afvist.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0056

**Card ID:** b1-antrag
**Field:** study.comparison[1].example
**DE konteksts:** Antrag
**CURRENT (DA):** Meine Bewerbung war erfolgreich. = Mans darba pieteikums bija veiksmīgs.
**PROPOSED (DA):** Meine Bewerbung war erfolgreich. = Mans darba pieteikums bija veiksmīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0058

**Card ID:** b1-auftrag
**Field:** study.comparison[1].example
**DE konteksts:** Auftrag
**CURRENT (DA):** Die Aufgabe ist schwer. = Uzdevums ir grūts.
**PROPOSED (DA):** Die Aufgabe ist schwer. = Uzdevums er grūts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0059

**Card ID:** b1-auftrag
**Field:** study.comparison[2].example
**DE konteksts:** Auftrag
**CURRENT (DA):** Die Bestellung kommt morgen. = Pasūtījums atnāks rīt.
**PROPOSED (DA):** Die Bestellung kommt morgen. = Pasūtījums atnāks i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0060

**Card ID:** b1-aufwand
**Field:** study.comparison[0].example
**DE konteksts:** Aufwand
**CURRENT (DA):** Der Aufwand ist hoch. = Pūles ir lielas.
**PROPOSED (DA):** Der Aufwand ist hoch. = Pūles er lielas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0061

**Card ID:** b1-aufwand
**Field:** study.comparison[1].example
**DE konteksts:** Aufwand
**CURRENT (DA):** Danke für deine Mühe. = Paldies par tavām pūlēm.
**PROPOSED (DA):** Danke für deine Mühe. = Paldies par tavām pūlēm.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0062

**Card ID:** b1-aufführen
**Field:** study.comparison[0].example
**DE konteksts:** aufführen
**CURRENT (DA):** Das Theater führt ein Stück auf. = Teātris uzved lugu.
**PROPOSED (DA):** Das Theater führt ein Stück auf. = Teatret opfører et nyt stykke.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0063

**Card ID:** b1-aufführen
**Field:** study.comparison[1].example
**DE konteksts:** aufführen
**CURRENT (DA):** Er führt das Gerät vor. = Viņš demonstrē ierīci.
**PROPOSED (DA):** Er führt das Gerät vor. = Viņš demonstrē ierīci.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0064

**Card ID:** b1-aufführen
**Field:** study.comparison[2].example
**DE konteksts:** aufführen
**CURRENT (DA):** Nennen Sie bitte Ihren Namen. = Lūdzu, nosauciet savu vārdu.
**PROPOSED (DA):** Nennen Sie bitte Ihren Namen. = Lūdzu, nosauciet savu vārdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0065

**Card ID:** b1-sich-aufhalten
**Field:** study.comparison[0].example
**DE konteksts:** sich aufhalten
**CURRENT (DA):** Ich halte mich im Hotel auf. = Es uzturos viesnīcā.
**PROPOSED (DA):** Ich halte mich im Hotel auf. = Jeg uzturos viesnīcā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0066

**Card ID:** b1-sich-aufhalten
**Field:** study.comparison[1].example
**DE konteksts:** sich aufhalten
**CURRENT (DA):** Ich bleibe zu Hause. = Es palieku mājās.
**PROPOSED (DA):** Ich bleibe zu Hause. = Jeg palieku hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0067

**Card ID:** b1-sich-aufhalten
**Field:** study.comparison[2].example
**DE konteksts:** sich aufhalten
**CURRENT (DA):** Der Stau hält uns auf. = Sastrēgums mūs aizkavē.
**PROPOSED (DA):** Der Stau hält uns auf. = Sastrēgums mūs aizkavē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0070

**Card ID:** b1-aussicht
**Field:** study.comparison[0].example
**DE konteksts:** Aussicht
**CURRENT (DA):** Die Aussicht auf Erfolg ist gut. = Izredzes uz panākumiem ir labas.
**PROPOSED (DA):** Die Aussicht auf Erfolg ist gut. = Chancerne for succes er gode.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0071

**Card ID:** b1-aussicht
**Field:** study.comparison[1].example
**DE konteksts:** Aussicht
**CURRENT (DA):** Der Blick aufs Meer ist schön. = Skats uz jūru ir skaists.
**PROPOSED (DA):** Der Blick aufs Meer ist schön. = Skats uz jūru er skaists.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0072

**Card ID:** b1-aussicht
**Field:** study.comparison[2].example
**DE konteksts:** Aussicht
**CURRENT (DA):** Die Chance ist groß. = Iespēja ir liela.
**PROPOSED (DA):** Die Chance ist groß. = Iespēja er liela.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0073

**Card ID:** b1-aussprache
**Field:** study.comparison[0].example
**DE konteksts:** Aussprache
**CURRENT (DA):** Die Aussprache ist schwer. = Izruna ir grūta.
**PROPOSED (DA):** Die Aussprache ist schwer. = Izruna er grūta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0074

**Card ID:** b1-aussprache
**Field:** study.comparison[1].example
**DE konteksts:** Aussprache
**CURRENT (DA):** Wir führen ein Gespräch. = Mēs sarunājamies.
**PROPOSED (DA):** Wir führen ein Gespräch. = Vi sarunājamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0079

**Card ID:** b1-ausüben
**Field:** study.comparison[0].example
**DE konteksts:** ausüben
**CURRENT (DA):** Sie übt den Beruf aus. = Viņa strādā profesijā.
**PROPOSED (DA):** Sie übt den Beruf aus. = Hun strādā profesijā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0080

**Card ID:** b1-ausüben
**Field:** study.comparison[2].example
**DE konteksts:** ausüben
**CURRENT (DA):** Das beeinflusst die Entscheidung. = Tas ietekmē lēmumu.
**PROPOSED (DA):** Das beeinflusst die Entscheidung. = Tas ietekmē lēmumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0082

**Card ID:** b1-auszug
**Field:** study.comparison[0].example
**DE konteksts:** Auszug
**CURRENT (DA):** Ich lese einen Auszug aus dem Buch. = Es lasu fragmentu no grāmatas.
**PROPOSED (DA):** Ich lese einen Auszug aus dem Buch. = Jeg har brug for et uddrag fra registeret.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0083

**Card ID:** b1-auszug
**Field:** study.comparison[1].example
**DE konteksts:** Auszug
**CURRENT (DA):** Der Umzug dauert zwei Tage. = Pārvākšanās ilgst divas dienas.
**PROPOSED (DA):** Der Umzug dauert zwei Tage. = Pārvākšanās ilgst divas dienas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0084

**Card ID:** b1-auszug
**Field:** study.comparison[2].example
**DE konteksts:** Auszug
**CURRENT (DA):** Die Zusammenfassung ist kurz. = Kopsavilkums ir īss.
**PROPOSED (DA):** Die Zusammenfassung ist kurz. = Kopsavilkums er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0087

**Card ID:** b1-bau
**Field:** study.comparison[0].example
**DE konteksts:** Bau
**CURRENT (DA):** Der Bau beginnt morgen. = Būvniecība sākas rīt.
**PROPOSED (DA):** Der Bau beginnt morgen. = Būvniecība sāsom i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0088

**Card ID:** b1-bau
**Field:** study.comparison[1].example
**DE konteksts:** Bau
**CURRENT (DA):** Das Gebäude ist neu. = Ēka ir jauna.
**PROPOSED (DA):** Das Gebäude ist neu. = Ēka er jauna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0089

**Card ID:** b1-bau
**Field:** study.comparison[2].example
**DE konteksts:** Bau
**CURRENT (DA):** Die Baustelle ist laut. = Būvlaukums ir skaļš.
**PROPOSED (DA):** Die Baustelle ist laut. = Būvlaukums er skaļš.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0094

**Card ID:** b1-becken
**Field:** study.comparison[0].example
**DE konteksts:** Becken
**CURRENT (DA):** Das Becken ist voll Wasser. = Baseins ir pilns ar ūdeni.
**PROPOSED (DA):** Das Becken ist voll Wasser. = Baseins er pilns ar ūdeni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0095

**Card ID:** b1-becken
**Field:** study.comparison[1].example
**DE konteksts:** Becken
**CURRENT (DA):** Das Schwimmbad ist geöffnet. = Peldbaseins ir atvērts.
**PROPOSED (DA):** Das Schwimmbad ist geöffnet. = Peldbaseins er atvērts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0096

**Card ID:** b1-becken
**Field:** study.comparison[2].example
**DE konteksts:** Becken
**CURRENT (DA):** Die Schüssel steht auf dem Tisch. = Bļoda stāv uz galda.
**PROPOSED (DA):** Die Schüssel steht auf dem Tisch. = Bļoda stāv uz galda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0101

**Card ID:** b1-bedeutend
**Field:** study.comparison[0].example
**DE konteksts:** bedeutend
**CURRENT (DA):** Das ist ein bedeutender Schritt. = Tas ir nozīmīgs solis.
**PROPOSED (DA):** Das ist ein bedeutender Schritt. = Dette er et vigtigt skridt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0102

**Card ID:** b1-bedeutend
**Field:** study.comparison[1].example
**DE konteksts:** bedeutend
**CURRENT (DA):** Das ist wichtig. = Tas ir svarīgi.
**PROPOSED (DA):** Das ist wichtig. = Tas er svarīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0103

**Card ID:** b1-bedeutend
**Field:** study.comparison[2].example
**DE konteksts:** bedeutend
**CURRENT (DA):** Es ist deutlich besser. = Tas ir ievērojami labāk.
**PROPOSED (DA):** Es ist deutlich besser. = Tas er ievērojami labāk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0107

**Card ID:** b1-sich-bedienen
**Field:** study.comparison[0].example
**DE konteksts:** sich bedienen
**CURRENT (DA):** Bedienen Sie sich! = Ņemiet paši!
**PROPOSED (DA):** Bedienen Sie sich! = Tag det gerne selv.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0108

**Card ID:** b1-sich-bedienen
**Field:** study.comparison[1].example
**DE konteksts:** sich bedienen
**CURRENT (DA):** Der Kellner bedient die Gäste. = Viesmīlis apkalpo viesus.
**PROPOSED (DA):** Der Kellner bedient die Gäste. = Viesmīlis apkalpo viesus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0111

**Card ID:** b1-behandeln
**Field:** study.comparison[0].example
**DE konteksts:** behandeln
**CURRENT (DA):** Der Arzt behandelt den Patienten. = Ārsts ārstē pacientu.
**PROPOSED (DA):** Der Arzt behandelt den Patienten. = En læge behandler en patient.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0112

**Card ID:** b1-behandeln
**Field:** study.comparison[1].example
**DE konteksts:** behandeln
**CURRENT (DA):** Die Medizin heilt die Krankheit. = Zāles izārstē slimību.
**PROPOSED (DA):** Die Medizin heilt die Krankheit. = Zāles izārstē slimību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0113

**Card ID:** b1-behandeln
**Field:** study.comparison[2].example
**DE konteksts:** behandeln
**CURRENT (DA):** Wir besprechen den Plan. = Mēs apspriežam plānu.
**PROPOSED (DA):** Wir besprechen den Plan. = Vi apspriežam plānu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0119

**Card ID:** b1-belegen
**Field:** study.comparison[0].example
**DE konteksts:** belegen
**CURRENT (DA):** Der Sitz ist belegt. = Sēdvieta ir aizņemta.
**PROPOSED (DA):** Der Sitz ist belegt. = Sēdvieta er aizņemta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0120

**Card ID:** b1-belegen
**Field:** study.comparison[1].example
**DE konteksts:** belegen
**CURRENT (DA):** Ich reserviere einen Tisch. = Es rezervēju galdiņu.
**PROPOSED (DA):** Ich reserviere einen Tisch. = Jeg rezervēju galdiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0121

**Card ID:** b1-belegen
**Field:** study.comparison[2].example
**DE konteksts:** belegen
**CURRENT (DA):** Das beweist nichts. = Tas neko nepierāda.
**PROPOSED (DA):** Das beweist nichts. = Tas neko nepierāda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0123

**Card ID:** b1-bemerken
**Field:** study.comparison[0].example
**DE konteksts:** bemerken
**CURRENT (DA):** Ich bemerke den Fehler. = Es pamanu kļūdu.
**PROPOSED (DA):** Ich bemerke den Fehler. = Jeg pamanu kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0124

**Card ID:** b1-bemerken
**Field:** study.comparison[1].example
**DE konteksts:** bemerken
**CURRENT (DA):** Ich merke, dass du müde bist. = Es ievēroju, ka tu esi noguris.
**PROPOSED (DA):** Ich merke, dass du müde bist. = Jeg ievēroju, ka tu esi noguris.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0125

**Card ID:** b1-bemerken
**Field:** study.comparison[2].example
**DE konteksts:** bemerken
**CURRENT (DA):** Ich merke mir das Wort. = Es iegaumēju šo vārdu.
**PROPOSED (DA):** Ich merke mir das Wort. = Jeg iegaumēju šo vārdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0129

**Card ID:** b1-sich-bemühen
**Field:** study.comparison[0].example
**DE konteksts:** sich bemühen
**CURRENT (DA):** Ich bemühe mich um eine Lösung. = Es cenšos atrast risinājumu.
**PROPOSED (DA):** Ich bemühe mich um eine Lösung. = Jeg prøver at komme til tiden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0130

**Card ID:** b1-sich-bemühen
**Field:** study.comparison[1].example
**DE konteksts:** sich bemühen
**CURRENT (DA):** Ich versuche es. = Es mēģinu.
**PROPOSED (DA):** Ich versuche es. = Jeg mēģinu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0131

**Card ID:** b1-sich-bemühen
**Field:** study.comparison[2].example
**DE konteksts:** sich bemühen
**CURRENT (DA):** Streng dich an! = Papūlies!
**PROPOSED (DA):** Streng dich an! = Papūlies!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0132

**Card ID:** b1-beraten
**Field:** study.comparison[0].example
**DE konteksts:** beraten
**CURRENT (DA):** Sie berät den Kunden. = Viņa konsultē klientu.
**PROPOSED (DA):** Sie berät den Kunden. = Hun konsultē klientu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0133

**Card ID:** b1-beraten
**Field:** study.comparison[1].example
**DE konteksts:** beraten
**CURRENT (DA):** Ich rate dir zu warten. = Es tev iesaku pagaidīt.
**PROPOSED (DA):** Ich rate dir zu warten. = Jeg tev iesaku pagaidīt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0134

**Card ID:** b1-beraten
**Field:** study.comparison[2].example
**DE konteksts:** beraten
**CURRENT (DA):** Wir besprechen das Thema. = Mēs apspriežam tēmu.
**PROPOSED (DA):** Wir besprechen das Thema. = Vi apspriežam tēmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0138

**Card ID:** b1-bereich
**Field:** study.comparison[0].example
**DE konteksts:** Bereich
**CURRENT (DA):** Dieser Bereich ist wichtig. = Šī joma ir svarīga.
**PROPOSED (DA):** Dieser Bereich ist wichtig. = Dette område er lukket.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0140

**Card ID:** b1-berichten
**Field:** study.comparison[0].example
**DE konteksts:** berichten
**CURRENT (DA):** Sie berichtet über das Projekt. = Viņa ziņo par projektu.
**PROPOSED (DA):** Sie berichtet über das Projekt. = Hun ziņo par projektu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0141

**Card ID:** b1-berichten
**Field:** study.comparison[1].example
**DE konteksts:** berichten
**CURRENT (DA):** Er erzählt eine Geschichte. = Viņš stāsta stāstu.
**PROPOSED (DA):** Er erzählt eine Geschichte. = Viņš stāsta stāstu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0142

**Card ID:** b1-berichten
**Field:** study.comparison[2].example
**DE konteksts:** berichten
**CURRENT (DA):** Die Polizei meldet den Unfall. = Policija paziņo par negadījumu.
**PROPOSED (DA):** Die Polizei meldet den Unfall. = Policija paziņo par negadījumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0145

**Card ID:** b1-sich-beruhigen
**Field:** study.comparison[1].example
**DE konteksts:** sich beruhigen
**CURRENT (DA):** Ich beruhige das Kind. = Es nomierinu bērnu.
**PROPOSED (DA):** Ich beruhige das Kind. = Jeg nomierinu bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0146

**Card ID:** b1-sich-beruhigen
**Field:** study.comparison[2].example
**DE konteksts:** sich beruhigen
**CURRENT (DA):** Ich entspanne mich. = Es atslābinos.
**PROPOSED (DA):** Ich entspanne mich. = Jeg atslābinos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0149

**Card ID:** b1-berühmtheit
**Field:** study.comparison[0].example
**DE konteksts:** Berühmtheit
**CURRENT (DA):** Er sucht Berühmtheit. = Viņš tiecas pēc slavas.
**PROPOSED (DA):** Er sucht Berühmtheit. = Viņš tiecas pēc slavas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0150

**Card ID:** b1-berühmtheit
**Field:** study.comparison[1].example
**DE konteksts:** Berühmtheit
**CURRENT (DA):** Sein Ruhm wächst. = Viņa slava aug.
**PROPOSED (DA):** Sein Ruhm wächst. = Hun slava aug.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0151

**Card ID:** b1-berühmtheit
**Field:** study.comparison[2].example
**DE konteksts:** Berühmtheit
**CURRENT (DA):** Sie ist ein Star. = Viņa ir zvaigzne.
**PROPOSED (DA):** Sie ist ein Star. = Hun er zvaigzne.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0153

**Card ID:** b1-beschließen
**Field:** study.comparison[0].example
**DE konteksts:** beschließen
**CURRENT (DA):** Der Rat beschließt neue Regeln. = Padome pieņem jaunus noteikumus.
**PROPOSED (DA):** Der Rat beschließt neue Regeln. = Bestyrelsen vedtager nye regler.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0154

**Card ID:** b1-beschließen
**Field:** study.comparison[1].example
**DE konteksts:** beschließen
**CURRENT (DA):** Ich entscheide mich morgen. = Es izlemšu rīt.
**PROPOSED (DA):** Ich entscheide mich morgen. = Jeg izlemšu i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0155

**Card ID:** b1-beschließen
**Field:** study.comparison[2].example
**DE konteksts:** beschließen
**CURRENT (DA):** Bitte schließen Sie die Tür. = Lūdzu, aizveriet durvis.
**PROPOSED (DA):** Bitte schließen Sie die Tür. = Lūdzu, aizveriet durvis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0158

**Card ID:** b1-beschwerde
**Field:** study.comparison[0].example
**DE konteksts:** Beschwerde
**CURRENT (DA):** Die Beschwerde ist berechtigt. = Sūdzība ir pamatota.
**PROPOSED (DA):** Die Beschwerde ist berechtigt. = Sūdzība er pamatota.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0159

**Card ID:** b1-beschwerde
**Field:** study.comparison[1].example
**DE konteksts:** Beschwerde
**CURRENT (DA):** Die Klage läuft noch. = Prasība vēl turpinās.
**PROPOSED (DA):** Die Klage läuft noch. = Prasība vēl turpinās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0160

**Card ID:** b1-beschwerde
**Field:** study.comparison[2].example
**DE konteksts:** Beschwerde
**CURRENT (DA):** Ich habe Schmerzen. = Man sāp.
**PROPOSED (DA):** Ich habe Schmerzen. = Jeg har sāp.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0163

**Card ID:** b1-besorgen
**Field:** study.comparison[0].example
**DE konteksts:** besorgen
**CURRENT (DA):** Ich besorge Brot. = Es sagādāju maizi.
**PROPOSED (DA):** Ich besorge Brot. = Jeg sagādāju maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0164

**Card ID:** b1-besorgen
**Field:** study.comparison[1].example
**DE konteksts:** besorgen
**CURRENT (DA):** Ich kaufe Brot. = Es pērku maizi.
**PROPOSED (DA):** Ich kaufe Brot. = Jeg pērku maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0165

**Card ID:** b1-besorgen
**Field:** study.comparison[2].example
**DE konteksts:** besorgen
**CURRENT (DA):** Ich kümmere mich um das Kind. = Es rūpējos par bērnu.
**PROPOSED (DA):** Ich kümmere mich um das Kind. = Jeg rūpējos par bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0168

**Card ID:** b1-bestehen
**Field:** study.comparison[0].example
**DE konteksts:** bestehen
**CURRENT (DA):** Das Problem besteht noch. = Problēma vēl pastāv.
**PROPOSED (DA):** Das Problem besteht noch. = Problemet eksisterer stadig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0169

**Card ID:** b1-bestehen
**Field:** study.comparison[1].example
**DE konteksts:** bestehen
**CURRENT (DA):** Das Team besteht aus fünf Personen. = Komanda sastāv no piecām personām.
**PROPOSED (DA):** Das Team besteht aus fünf Personen. = Holdet består af fem personer.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0170

**Card ID:** b1-bestehen
**Field:** study.comparison[2].example
**DE konteksts:** bestehen
**CURRENT (DA):** Er besteht auf seiner Meinung. = Viņš uzstāj uz savu viedokli.
**PROPOSED (DA):** Er besteht auf seiner Meinung. = Han insisterer på sin mening.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0177

**Card ID:** b1-bestimmen
**Field:** study.comparison[1].example
**DE konteksts:** bestimmen
**CURRENT (DA):** Wir entscheiden morgen. = Mēs izlemsim rīt.
**PROPOSED (DA):** Wir entscheiden morgen. = Vi izlemsim i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0178

**Card ID:** b1-bestimmen
**Field:** study.comparison[2].example
**DE konteksts:** bestimmen
**CURRENT (DA):** Wir legen den Termin fest. = Mēs oficiāli nosakām termiņu.
**PROPOSED (DA):** Wir legen den Termin fest. = Vi oficiāli nosakām termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0181

**Card ID:** b1-betrieb
**Field:** study.comparison[0].example
**DE konteksts:** Betrieb
**CURRENT (DA):** Der Betrieb läuft gut. = Uzņēmums darbojas labi.
**PROPOSED (DA):** Der Betrieb läuft gut. = Uzņēmums darbojas labi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0182

**Card ID:** b1-betrieb
**Field:** study.comparison[1].example
**DE konteksts:** Betrieb
**CURRENT (DA):** Die Firma sucht neue Mitarbeiter. = Firma meklē jaunus darbiniekus.
**PROPOSED (DA):** Die Firma sucht neue Mitarbeiter. = Firma meklē jaunus darbiniekus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0183

**Card ID:** b1-betrieb
**Field:** study.comparison[2].example
**DE konteksts:** Betrieb
**CURRENT (DA):** Die Fabrik produziert Möbel. = Rūpnīca ražo mēbeles.
**PROPOSED (DA):** Die Fabrik produziert Möbel. = Rūpnīca ražo mēbeles.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0185

**Card ID:** b1-bewegen
**Field:** study.comparison[2].example
**DE konteksts:** bewegen
**CURRENT (DA):** Wir verschieben den Tisch. = Mēs pārbīdām galdu.
**PROPOSED (DA):** Wir verschieben den Tisch. = Vi pārbīdām galdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0186

**Card ID:** b1-beziehen
**Field:** study.comparison[0].example
**DE konteksts:** beziehen
**CURRENT (DA):** Sie bezieht eine Rente. = Viņa saņem pensiju.
**PROPOSED (DA):** Sie bezieht eine Rente. = Hun får en lille pension.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0187

**Card ID:** b1-beziehen
**Field:** study.comparison[1].example
**DE konteksts:** beziehen
**CURRENT (DA):** Die Regel bezieht sich auf alle Schüler. = Noteikums attiecas uz visiem skolēniem.
**PROPOSED (DA):** Die Regel bezieht sich auf alle Schüler. = Reglen gælder for alle elever.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0188

**Card ID:** b1-beziehen
**Field:** study.comparison[2].example
**DE konteksts:** beziehen
**CURRENT (DA):** Wir ziehen morgen ein. = Mēs rīt ievācamies.
**PROPOSED (DA):** Wir ziehen morgen ein. = Vi i morgen ievācamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0192

**Card ID:** b1-bildschirm
**Field:** study.comparison[0].example
**DE konteksts:** Bildschirm
**CURRENT (DA):** Der Bildschirm leuchtet. = Ekrāns spīd.
**PROPOSED (DA):** Der Bildschirm leuchtet. = Ekrāns spīd.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0193

**Card ID:** b1-bieten
**Field:** study.comparison[0].example
**DE konteksts:** bieten
**CURRENT (DA):** Das Programm bietet viele Möglichkeiten. = Programma sniedz daudz iespēju.
**PROPOSED (DA):** Das Programm bietet viele Möglichkeiten. = Skolen tilbyder mange kurser.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0194

**Card ID:** b1-bieten
**Field:** study.comparison[1].example
**DE konteksts:** bieten
**CURRENT (DA):** Ich biete dir meine Hilfe an. = Es tev piedāvāju savu palīdzību.
**PROPOSED (DA):** Ich biete dir meine Hilfe an. = Jeg tev piedāvāju savu palīdzību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0196

**Card ID:** b1-blase
**Field:** study.comparison[0].example
**DE konteksts:** Blase
**CURRENT (DA):** Ich habe eine Blase am Fuß. = Man uz pēdas ir tulzna.
**PROPOSED (DA):** Ich habe eine Blase am Fuß. = Jeg har en vabel på foden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0197

**Card ID:** b1-blase
**Field:** study.comparison[1].example
**DE konteksts:** Blase
**CURRENT (DA):** Die Wunde heilt. = Brūce dzīst.
**PROPOSED (DA):** Die Wunde heilt. = Brūce dzīst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0200

**Card ID:** b1-block
**Field:** study.comparison[0].example
**DE konteksts:** Block
**CURRENT (DA):** Ich brauche einen Block. = Man vajag blociņu.
**PROPOSED (DA):** Ich brauche einen Block. = Jeg har vajag blociņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0201

**Card ID:** b1-block
**Field:** study.comparison[1].example
**DE konteksts:** Block
**CURRENT (DA):** Das Heft ist voll. = Burtnīca ir pilna.
**PROPOSED (DA):** Das Heft ist voll. = Burtnīca er pilna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0204

**Card ID:** b1-bloß
**Field:** study.comparison[0].example
**DE konteksts:** bloß
**CURRENT (DA):** Das ist bloß ein Beispiel. = Tas ir tikai piemērs.
**PROPOSED (DA):** Das ist bloß ein Beispiel. = Tas er tikai piemērs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0205

**Card ID:** b1-bloß
**Field:** study.comparison[1].example
**DE konteksts:** bloß
**CURRENT (DA):** Ich habe nur eine Frage. = Man ir tikai viens jautājums.
**PROPOSED (DA):** Ich habe nur eine Frage. = Jeg har er tikai viens jautājums.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0206

**Card ID:** b1-bloß
**Field:** study.comparison[2].example
**DE konteksts:** bloß
**CURRENT (DA):** Er ist nackt. = Viņš ir kails.
**PROPOSED (DA):** Er ist nackt. = Viņš er kails.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0208

**Card ID:** b1-bogen
**Field:** study.comparison[2].example
**DE konteksts:** Bogen
**CURRENT (DA):** Die Kurve ist scharf. = Līkums ir ass.
**PROPOSED (DA):** Die Kurve ist scharf. = Līkums er ass.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0209

**Card ID:** b1-botschaft
**Field:** study.comparison[0].example
**DE konteksts:** Botschaft
**CURRENT (DA):** Die Botschaft ist offen. = Vēstniecība ir atvērta.
**PROPOSED (DA):** Die Botschaft ist offen. = Vēstniecība er atvērta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0210

**Card ID:** b1-botschaft
**Field:** study.comparison[1].example
**DE konteksts:** Botschaft
**CURRENT (DA):** Ich habe eine Nachricht bekommen. = Es saņēmu ziņu.
**PROPOSED (DA):** Ich habe eine Nachricht bekommen. = Jeg saņēmu ziņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0211

**Card ID:** b1-botschaft
**Field:** study.comparison[2].example
**DE konteksts:** Botschaft
**CURRENT (DA):** Die Mitteilung ist kurz. = Paziņojums ir īss.
**PROPOSED (DA):** Die Mitteilung ist kurz. = Paziņojums er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0212

**Card ID:** b1-brand
**Field:** study.comparison[0].example
**DE konteksts:** Brand
**CURRENT (DA):** Der Brand ist gefährlich. = Ugunsgrēks ir bīstams.
**PROPOSED (DA):** Der Brand ist gefährlich. = Ugunsgrēks er bīstams.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0213

**Card ID:** b1-brand
**Field:** study.comparison[2].example
**DE konteksts:** Brand
**CURRENT (DA):** Diese Marke ist bekannt. = Šis zīmols ir pazīstams.
**PROPOSED (DA):** Diese Marke ist bekannt. = Šis zīmols er pazīstams.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0215

**Card ID:** b1-bund
**Field:** study.comparison[0].example
**DE konteksts:** Bund
**CURRENT (DA):** Der Bund entscheidet. = Federācija lemj.
**PROPOSED (DA):** Der Bund entscheidet. = Federācija lemj.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0216

**Card ID:** b1-bund
**Field:** study.comparison[1].example
**DE konteksts:** Bund
**CURRENT (DA):** Das Bündel ist schwer. = Saišķis ir smags.
**PROPOSED (DA):** Das Bündel ist schwer. = Saišķis er smags.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0217

**Card ID:** b1-bund
**Field:** study.comparison[2].example
**DE konteksts:** Bund
**CURRENT (DA):** Der Verein ist klein. = Biedrība ir maza.
**PROPOSED (DA):** Der Verein ist klein. = Biedrība er maza.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0221

**Card ID:** b1-dadurch
**Field:** study.comparison[0].example
**DE konteksts:** dadurch
**CURRENT (DA):** Dadurch wird es leichter. = Tādējādi tas kļūst vieglāk.
**PROPOSED (DA):** Dadurch wird es leichter. = Tādējādi det kļūst vieglāk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0222

**Card ID:** b1-dadurch
**Field:** study.comparison[1].example
**DE konteksts:** dadurch
**CURRENT (DA):** Deshalb bleibe ich zu Hause. = Tāpēc es palieku mājās.
**PROPOSED (DA):** Deshalb bleibe ich zu Hause. = Tāpēc es palieku hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0223

**Card ID:** b1-dadurch
**Field:** study.comparison[2].example
**DE konteksts:** dadurch
**CURRENT (DA):** Ich spare Geld, damit ich reisen kann. = Es krāju naudu, lai varētu ceļot.
**PROPOSED (DA):** Ich spare Geld, damit ich reisen kann. = Jeg krāju naudu, lai varētu ceļot.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0224

**Card ID:** b1-dagegen
**Field:** study.comparison[2].example
**DE konteksts:** dagegen
**CURRENT (DA):** Er bleibt, sie hingegen geht. = Viņš paliek, viņa turpretim iet.
**PROPOSED (DA):** Er bleibt, sie hingegen geht. = Viņš paliek, viņa turpretim iet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0225

**Card ID:** b1-daher
**Field:** study.comparison[0].example
**DE konteksts:** daher
**CURRENT (DA):** Es bin müde, daher gehe ich. = Esmu noguris, tāpēc eju.
**PROPOSED (DA):** Es bin müde, daher gehe ich. = Esmu noguris, tāpēc eju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0226

**Card ID:** b1-daher
**Field:** study.comparison[1].example
**DE konteksts:** daher
**CURRENT (DA):** Deshalb warten wir. = Tāpēc mēs gaidām.
**PROPOSED (DA):** Deshalb warten wir. = Tāpēc mēs gaidām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0227

**Card ID:** b1-daher
**Field:** study.comparison[2].example
**DE konteksts:** daher
**CURRENT (DA):** Er kommt von dort. = Viņš nāk no turienes.
**PROPOSED (DA):** Er kommt von dort. = Viņš nāk no turienes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0228

**Card ID:** b1-dahin
**Field:** study.comparison[2].example
**DE konteksts:** dahin
**CURRENT (DA):** Daher kommt das Problem. = No turienes nāk problēma.
**PROPOSED (DA):** Daher kommt das Problem. = No turienes nāk problēma.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0231

**Card ID:** b1-dank-study
**Field:** study.comparison[0].example
**DE konteksts:** Dank
**CURRENT (DA):** Herzlichen Dank! = Sirsnīgs paldies!
**PROPOSED (DA):** Herzlichen Dank! = Mange tak!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0232

**Card ID:** b1-dank-study
**Field:** study.comparison[1].example
**DE konteksts:** Dank
**CURRENT (DA):** Nein, danke. = Nē, paldies.
**PROPOSED (DA):** Nein, danke. = Nej tak
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0233

**Card ID:** b1-dank-study
**Field:** study.comparison[3].example
**DE konteksts:** Dank
**CURRENT (DA):** Vielen Dank für die Hilfe! = Liels paldies par palīdzību!
**PROPOSED (DA):** Vielen Dank für die Hilfe! = Mange tak!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0234

**Card ID:** b1-dank-study
**Field:** study.comparison[4].example
**DE konteksts:** Dank
**CURRENT (DA):** Ich bedanke mich bei Ihnen. = Es pateicos jums.
**PROPOSED (DA):** Ich bedanke mich bei Ihnen. = Jeg pateicos jums.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0238

**Card ID:** b1-daran
**Field:** study.comparison[0].example
**DE konteksts:** daran
**CURRENT (DA):** Ich denke daran. = Es domāju par to.
**PROPOSED (DA):** Ich denke daran. = Jeg tænker over det.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0239

**Card ID:** b1-daran
**Field:** study.comparison[2].example
**DE konteksts:** daran
**CURRENT (DA):** Ich beginne damit. = Es sāku ar to.
**PROPOSED (DA):** Ich beginne damit. = Jeg sāku ar to.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0240

**Card ID:** b1-darstellen
**Field:** study.comparison[0].example
**DE konteksts:** darstellen
**CURRENT (DA):** Die Tabelle stellt Daten dar. = Tabula attēlo datus.
**PROPOSED (DA):** Die Tabelle stellt Daten dar. = Tabula attēlo datus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0241

**Card ID:** b1-darstellen
**Field:** study.comparison[1].example
**DE konteksts:** darstellen
**CURRENT (DA):** Ich zeige dir das Bild. = Es tev rādu attēlu.
**PROPOSED (DA):** Ich zeige dir das Bild. = Jeg tev rādu attēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0242

**Card ID:** b1-darstellen
**Field:** study.comparison[2].example
**DE konteksts:** darstellen
**CURRENT (DA):** Ich stelle mich kurz vor. = Es īsi iepazīstinos.
**PROPOSED (DA):** Ich stelle mich kurz vor. = Jeg īsi iepazīstinos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0244

**Card ID:** b1-darunter
**Field:** study.comparison[0].example
**DE konteksts:** darunter
**CURRENT (DA):** Darunter sind viele Kinder. = To vidū ir daudz bērnu.
**PROPOSED (DA):** Darunter sind viele Kinder. = Der kom mange gæster, også børn.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0245

**Card ID:** b1-darunter
**Field:** study.comparison[2].example
**DE konteksts:** darunter
**CURRENT (DA):** Drei davon sind neu. = Trīs no tiem ir jauni.
**PROPOSED (DA):** Drei davon sind neu. = Trīs no tiem er jauni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0246

**Card ID:** b1-decken
**Field:** study.comparison[0].example
**DE konteksts:** decken
**CURRENT (DA):** Ich decke den Tisch. = Es klāju galdu.
**PROPOSED (DA):** Ich decke den Tisch. = Jeg dækkede bordet
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0247

**Card ID:** b1-decken
**Field:** study.comparison[1].example
**DE konteksts:** decken
**CURRENT (DA):** Deck den Kuchen ab. = Pārklāj kūku.
**PROPOSED (DA):** Deck den Kuchen ab. = Pārklāj kūku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0248

**Card ID:** b1-decken
**Field:** study.comparison[2].example
**DE konteksts:** decken
**CURRENT (DA):** Ich decke das Kind zu. = Es apsedzu bērnu.
**PROPOSED (DA):** Ich decke das Kind zu. = Jeg apsedzu bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0249

**Card ID:** b1-dienen
**Field:** study.comparison[0].example
**DE konteksts:** dienen
**CURRENT (DA):** Das dient als Beispiel. = Tas kalpo kā piemērs.
**PROPOSED (DA):** Das dient als Beispiel. = Tas kalpo kā piemērs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0250

**Card ID:** b1-dienen
**Field:** study.comparison[1].example
**DE konteksts:** dienen
**CURRENT (DA):** Ich helfe dir. = Es tev palīdzu.
**PROPOSED (DA):** Ich helfe dir. = Jeg tev palīdzu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0251

**Card ID:** b1-druck
**Field:** study.comparison[2].example
**DE konteksts:** Druck
**CURRENT (DA):** Das Drucken ist teuer. = Drukāšana ir dārga.
**PROPOSED (DA):** Das Drucken ist teuer. = Drukāšana er dārga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0254

**Card ID:** b1-durchfall
**Field:** study.comparison[1].example
**DE konteksts:** Durchfall
**CURRENT (DA):** Sie fällt durch. = Viņa izgāžas.
**PROPOSED (DA):** Sie fällt durch. = Hun izgāžas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0255

**Card ID:** b1-durchfall
**Field:** study.comparison[2].example
**DE konteksts:** Durchfall
**CURRENT (DA):** Ich habe Magenprobleme. = Man ir kuņģa problēmas.
**PROPOSED (DA):** Ich habe Magenprobleme. = Jeg har er kuņģa problēmas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0256

**Card ID:** b1-durchführen
**Field:** study.comparison[0].example
**DE konteksts:** durchführen
**CURRENT (DA):** Wir führen den Plan durch. = Mēs īstenojam plānu.
**PROPOSED (DA):** Wir führen den Plan durch. = Vi laver en inspektion.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0257

**Card ID:** b1-durchführen
**Field:** study.comparison[2].example
**DE konteksts:** durchführen
**CURRENT (DA):** Wir veranstalten ein Konzert. = Mēs rīkojam koncertu.
**PROPOSED (DA):** Wir veranstalten ein Konzert. = Vi rīkojam koncertu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0259

**Card ID:** b1-eher
**Field:** study.comparison[0].example
**DE konteksts:** eher
**CURRENT (DA):** Ich nehme eher Tee. = Es drīzāk ņemšu tēju.
**PROPOSED (DA):** Ich nehme eher Tee. = Jeg drīzāk ņemšu tēju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0260

**Card ID:** b1-eher
**Field:** study.comparison[1].example
**DE konteksts:** eher
**CURRENT (DA):** Früher war es anders. = Agrāk bija citādi.
**PROPOSED (DA):** Früher war es anders. = Agrāk bija citādi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0261

**Card ID:** b1-eher
**Field:** study.comparison[2].example
**DE konteksts:** eher
**CURRENT (DA):** Ich trinke lieber Kaffee. = Es labprātāk dzeru kafiju.
**PROPOSED (DA):** Ich trinke lieber Kaffee. = Jeg labprātāk dzeru kafiju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0264

**Card ID:** b1-eigen
**Field:** study.comparison[0].example
**DE konteksts:** eigen
**CURRENT (DA):** Das ist mein eigenes Auto. = Tā ir mana paša mašīna.
**PROPOSED (DA):** Das ist mein eigenes Auto. = Tā er mana paša mašīna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0269

**Card ID:** b1-eindruck
**Field:** study.comparison[0].example
**DE konteksts:** Eindruck
**CURRENT (DA):** Der Eindruck war positiv. = Iespaids bija pozitīvs.
**PROPOSED (DA):** Der Eindruck war positiv. = Iespaids bija pozitīvs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0270

**Card ID:** b1-eindruck
**Field:** study.comparison[1].example
**DE konteksts:** Eindruck
**CURRENT (DA):** Sie macht einen guten Eindruck. = Viņa atstāj labu iespaidu.
**PROPOSED (DA):** Sie macht einen guten Eindruck. = Filmen efterlod et stærkt indtryk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0272

**Card ID:** b1-einerlei
**Field:** study.comparison[2].example
**DE konteksts:** einerlei
**CURRENT (DA):** Er ist mir nicht gleichgültig. = Viņš man nav vienaldzīgs.
**PROPOSED (DA):** Er ist mir nicht gleichgültig. = Viņš man har ikke vienaldzīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0274

**Card ID:** b1-einerseits
**Field:** study.comparison[1].example
**DE konteksts:** einerseits
**CURRENT (DA):** Andererseits ist es teuer. = No otras puses, tas ir dārgi.
**PROPOSED (DA):** Andererseits ist es teuer. = På den ene side er lejligheden smuk, på den anden side er den dyr.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0275

**Card ID:** b1-einerseits
**Field:** study.comparison[2].example
**DE konteksts:** einerseits
**CURRENT (DA):** Es ist zwar schön, aber teuer. = Tas gan ir skaists, bet dārgs.
**PROPOSED (DA):** Es ist zwar schön, aber teuer. = På den ene side er lejligheden smuk, på den anden side er den dyr.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0276

**Card ID:** b1-einfahrt
**Field:** study.comparison[0].example
**DE konteksts:** Einfahrt
**CURRENT (DA):** Die Einfahrt ist frei. = Iebrauktuve ir brīva.
**PROPOSED (DA):** Die Einfahrt ist frei. = Iebrauktuve er brīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0277

**Card ID:** b1-einfahrt
**Field:** study.comparison[1].example
**DE konteksts:** Einfahrt
**CURRENT (DA):** Die Ausfahrt ist gesperrt. = Izbrauktuve ir slēgta.
**PROPOSED (DA):** Die Ausfahrt ist gesperrt. = Izbrauktuve er slēgta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0278

**Card ID:** b1-einfahrt
**Field:** study.comparison[2].example
**DE konteksts:** Einfahrt
**CURRENT (DA):** Die Auffahrt zur Autobahn ist voll. = Uzbrauktuve uz autobāni ir pilna.
**PROPOSED (DA):** Die Auffahrt zur Autobahn ist voll. = Uzbrauktuve uz autobāni er pilna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0283

**Card ID:** b1-einfarbig
**Field:** study.comparison[0].example
**DE konteksts:** einfarbig
**CURRENT (DA):** Das Hemd ist einfarbig. = Krekls ir vienkrāsains.
**PROPOSED (DA):** Das Hemd ist einfarbig. = Krekls er vienkrāsains.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0284

**Card ID:** b1-einfarbig
**Field:** study.comparison[1].example
**DE konteksts:** einfarbig
**CURRENT (DA):** Das Bild ist farbig. = Attēls ir krāsains.
**PROPOSED (DA):** Das Bild ist farbig. = Attēls er krāsains.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0287

**Card ID:** b1-einfluss
**Field:** study.comparison[0].example
**DE konteksts:** Einfluss
**CURRENT (DA):** Sein Einfluss ist groß. = Viņa ietekme ir liela.
**PROPOSED (DA):** Sein Einfluss ist groß. = Hun ietekme er liela.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0288

**Card ID:** b1-einfluss
**Field:** study.comparison[1].example
**DE konteksts:** Einfluss
**CURRENT (DA):** Das hat Einfluss auf den Preis. = Tas ietekmē cenu.
**PROPOSED (DA):** Das hat Einfluss auf den Preis. = Tas ietekmē cenu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0289

**Card ID:** b1-einfluss
**Field:** study.comparison[2].example
**DE konteksts:** Einfluss
**CURRENT (DA):** Die Wirkung ist stark. = Iedarbība ir spēcīga.
**PROPOSED (DA):** Die Wirkung ist stark. = Iedarbība er spēcīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0294

**Card ID:** b1-einführen
**Field:** study.comparison[0].example
**DE konteksts:** einführen
**CURRENT (DA):** Wir führen neue Regeln ein. = Mēs ieviešam jaunus noteikumus.
**PROPOSED (DA):** Wir führen neue Regeln ein. = Skolen indfører nye regler.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0295

**Card ID:** b1-einführen
**Field:** study.comparison[1].example
**DE konteksts:** einführen
**CURRENT (DA):** Wir importieren Kaffee. = Mēs importējam kafiju.
**PROPOSED (DA):** Wir importieren Kaffee. = Vi importējam kafiju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0296

**Card ID:** b1-einführen
**Field:** study.comparison[2].example
**DE konteksts:** einführen
**CURRENT (DA):** Ich stelle das Projekt vor. = Es prezentēju projektu.
**PROPOSED (DA):** Ich stelle das Projekt vor. = Jeg prezentēju projektu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0302

**Card ID:** b1-einführung
**Field:** study.comparison[0].example
**DE konteksts:** Einführung
**CURRENT (DA):** Die Einführung war hilfreich. = Ievads bija noderīgs.
**PROPOSED (DA):** Die Einführung war hilfreich. = Ievads bija noderīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0303

**Card ID:** b1-einführung
**Field:** study.comparison[1].example
**DE konteksts:** Einführung
**CURRENT (DA):** Die Einleitung ist kurz. = Ievads ir īss.
**PROPOSED (DA):** Die Einleitung ist kurz. = Ievads er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0304

**Card ID:** b1-einführung
**Field:** study.comparison[2].example
**DE konteksts:** Einführung
**CURRENT (DA):** Die Umsetzung dauert lange. = Īstenošana ilgst ilgi.
**PROPOSED (DA):** Die Umsetzung dauert lange. = Implementeringen af ​​det nye system tager lang tid.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0308

**Card ID:** b1-sich-eingewöhnen
**Field:** study.comparison[0].example
**DE konteksts:** sich eingewöhnen
**CURRENT (DA):** Ich gewöhne mich langsam ein. = Es lēnām pierodu.
**PROPOSED (DA):** Ich gewöhne mich langsam ein. = Jeg lēnām pierodu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0309

**Card ID:** b1-sich-eingewöhnen
**Field:** study.comparison[2].example
**DE konteksts:** sich eingewöhnen
**CURRENT (DA):** Er passt sich schnell an. = Viņš ātri pielāgojas.
**PROPOSED (DA):** Er passt sich schnell an. = Barnet vænner sig hurtigt til skolen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0310

**Card ID:** b1-sich-eingewöhnen
**Field:** study.sectionAccents.tip.leftBlocks[0].text.purple[2]
**DE konteksts:** sich eingewöhnen
**CURRENT (DA):** instead of
**PROPOSED (DA):** instead of
**Problēma:** Svešvalodu/artefaktu pazīmes: EN
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0315

**Card ID:** b1-einhalten
**Field:** study.comparison[0].example
**DE konteksts:** einhalten
**CURRENT (DA):** Wir halten die Frist ein. = Mēs ievērojam termiņu.
**PROPOSED (DA):** Wir halten die Frist ein. = Vi ievērojam termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0316

**Card ID:** b1-einhalten
**Field:** study.comparison[1].example
**DE konteksts:** einhalten
**CURRENT (DA):** Bitte beachten Sie die Hinweise. = Lūdzu, ņemiet vērā norādes.
**PROPOSED (DA):** Bitte beachten Sie die Hinweise. = Lūdzu, ņemiet vērā norādes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0317

**Card ID:** b1-einhalten
**Field:** study.comparison[2].example
**DE konteksts:** einhalten
**CURRENT (DA):** Er hält sein Versprechen. = Viņš tur solījumu.
**PROPOSED (DA):** Er hält sein Versprechen. = Viņš der solījumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0318

**Card ID:** b1-einheimisch
**Field:** study.comparison[0].example
**DE konteksts:** einheimisch
**CURRENT (DA):** Das ist eine einheimische Pflanze. = Tas ir vietējs augs.
**PROPOSED (DA):** Das ist eine einheimische Pflanze. = Tas er vietējs augs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0319

**Card ID:** b1-einheimisch
**Field:** study.comparison[1].example
**DE konteksts:** einheimisch
**CURRENT (DA):** Diese Art ist hier heimisch. = Šī suga šeit ir vietēja.
**PROPOSED (DA):** Diese Art ist hier heimisch. = Denne plante er hjemmehørende her.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0320

**Card ID:** b1-einheimisch
**Field:** study.comparison[2].example
**DE konteksts:** einheimisch
**CURRENT (DA):** Das ist ein ausländisches Produkt. = Tas ir ārzemju produkts.
**PROPOSED (DA):** Das ist ein ausländisches Produkt. = Tas er ārzemju produkts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0324

**Card ID:** b1-einheit
**Field:** study.comparison[0].example
**DE konteksts:** Einheit
**CURRENT (DA):** Diese Einheit ist wichtig. = Šī vienība ir svarīga.
**PROPOSED (DA):** Diese Einheit ist wichtig. = Šī vienība er svarīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0325

**Card ID:** b1-einheit
**Field:** study.comparison[1].example
**DE konteksts:** Einheit
**CURRENT (DA):** Kilogramm ist eine Maßeinheit. = Kilograms ir mērvienība.
**PROPOSED (DA):** Kilogramm ist eine Maßeinheit. = Kilograms er mērvienība.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0326

**Card ID:** b1-einheit
**Field:** study.comparison[2].example
**DE konteksts:** Einheit
**CURRENT (DA):** Das Kapitel ist kurz. = Nodaļa ir īsa.
**PROPOSED (DA):** Das Kapitel ist kurz. = Nodaļa er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0330

**Card ID:** b1-längeneinheit
**Field:** study.comparison[0].example
**DE konteksts:** Längeneinheit
**CURRENT (DA):** Meter ist eine Längeneinheit. = Metrs ir garuma mērvienība.
**PROPOSED (DA):** Meter ist eine Längeneinheit. = Meter er en længdeenhed.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0331

**Card ID:** b1-längeneinheit
**Field:** study.comparison[1].example
**DE konteksts:** Längeneinheit
**CURRENT (DA):** Kilogramm ist eine Gewichtseinheit. = Kilograms ir svara mērvienība.
**PROPOSED (DA):** Kilogramm ist eine Gewichtseinheit. = Kilograms er svara mērvienība.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0332

**Card ID:** b1-längeneinheit
**Field:** study.comparison[2].example
**DE konteksts:** Längeneinheit
**CURRENT (DA):** Sekunde ist eine Maßeinheit. = Sekunde ir mērvienība.
**PROPOSED (DA):** Sekunde ist eine Maßeinheit. = Sekunde er mērvienība.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0338

**Card ID:** b1-einholen
**Field:** study.comparison[0].example
**DE konteksts:** einholen
**CURRENT (DA):** Ich hole Rat ein. = Es lūdzu padomu.
**PROPOSED (DA):** Ich hole Rat ein. = Jeg lūdzu padomu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0339

**Card ID:** b1-einholen
**Field:** study.comparison[1].example
**DE konteksts:** einholen
**CURRENT (DA):** Ich hole das Kind ab. = Es aiziešu pakaļ bērnam.
**PROPOSED (DA):** Ich hole das Kind ab. = Jeg aiziešu pakaļ bērnam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0340

**Card ID:** b1-einholen
**Field:** study.comparison[2].example
**DE konteksts:** einholen
**CURRENT (DA):** Das Auto überholt uns. = Auto mūs apdzen.
**PROPOSED (DA):** Das Auto überholt uns. = Auto mūs apdzen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0344

**Card ID:** b1-einsatz
**Field:** study.comparison[0].example
**DE konteksts:** Einsatz
**CURRENT (DA):** Der Einsatz der Technik hilft uns. = Tehnikas izmantošana mums palīdz.
**PROPOSED (DA):** Der Einsatz der Technik hilft uns. = Brugen af ​​moderne teknologi sparer tid.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0345

**Card ID:** b1-einsatz
**Field:** study.comparison[1].example
**DE konteksts:** Einsatz
**CURRENT (DA):** Die Verwendung des Geräts ist einfach. = Ierīces lietošana ir vienkārša.
**PROPOSED (DA):** Die Verwendung des Geräts ist einfach. = Ierīces lietošana er vienkārša.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0346

**Card ID:** b1-einsatz
**Field:** study.comparison[2].example
**DE konteksts:** Einsatz
**CURRENT (DA):** Er verliert die Wette. = Viņš zaudē derības.
**PROPOSED (DA):** Er verliert die Wette. = Viņš zaudē derības.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0349

**Card ID:** b1-einsetzen
**Field:** study.comparison[0].example
**DE konteksts:** einsetzen
**CURRENT (DA):** Wir setzen die Software ein. = Mēs izmantojam programmatūru.
**PROPOSED (DA):** Wir setzen die Software ein. = Vi izmantojam programmatūru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0350

**Card ID:** b1-einsetzen
**Field:** study.comparison[2].example
**DE konteksts:** einsetzen
**CURRENT (DA):** Der Kurs beginnt morgen. = Kurss sākas rīt.
**PROPOSED (DA):** Der Kurs beginnt morgen. = Kurss sāsom i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0353

**Card ID:** b1-einstellen
**Field:** study.comparison[0].example
**DE konteksts:** einstellen
**CURRENT (DA):** Ich stelle den Wecker ein. = Es iestatu modinātāju.
**PROPOSED (DA):** Ich stelle den Wecker ein. = Jeg iestatu modinātāju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0354

**Card ID:** b1-einstellen
**Field:** study.comparison[1].example
**DE konteksts:** einstellen
**CURRENT (DA):** Die Firma stellt ihn an. = Firma viņu pieņem darbā.
**PROPOSED (DA):** Die Firma stellt ihn an. = Virksomheden ansætter tre nye medarbejdere.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0355

**Card ID:** b1-einstellen
**Field:** study.comparison[2].example
**DE konteksts:** einstellen
**CURRENT (DA):** Ich schalte das Licht aus. = Es izslēdzu gaismu.
**PROPOSED (DA):** Ich schalte das Licht aus. = Jeg izslēdzu gaismu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0357

**Card ID:** b1-eintreten
**Field:** study.comparison[0].example
**DE konteksts:** eintreten
**CURRENT (DA):** Treten Sie ein! = Ienāciet!
**PROPOSED (DA):** Treten Sie ein! = Ienāciet!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0358

**Card ID:** b1-eintreten
**Field:** study.comparison[1].example
**DE konteksts:** eintreten
**CURRENT (DA):** Bitte betreten Sie den Raum nicht. = Lūdzu, neieejiet telpā.
**PROPOSED (DA):** Bitte betreten Sie den Raum nicht. = Lūdzu, neieejiet telpā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0359

**Card ID:** b1-eintreten
**Field:** study.comparison[2].example
**DE konteksts:** eintreten
**CURRENT (DA):** Ich trete dem Verein bei. = Es iestājos biedrībā.
**PROPOSED (DA):** Ich trete dem Verein bei. = Jeg iestājos biedrībā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0362

**Card ID:** b1-einziehen
**Field:** study.comparison[0].example
**DE konteksts:** einziehen
**CURRENT (DA):** Wir ziehen in die Wohnung ein. = Mēs ievācamies dzīvoklī.
**PROPOSED (DA):** Wir ziehen in die Wohnung ein. = Vi flytter ind i den nye lejlighed i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0363

**Card ID:** b1-einziehen
**Field:** study.comparison[1].example
**DE konteksts:** einziehen
**CURRENT (DA):** Wir ziehen nächste Woche um. = Mēs nākamnedēļ pārvācamies.
**PROPOSED (DA):** Wir ziehen nächste Woche um. = Vi nākamnedēļ pārvācamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0364

**Card ID:** b1-einziehen
**Field:** study.comparison[2].example
**DE konteksts:** einziehen
**CURRENT (DA):** Sie zieht aus. = Viņa izvācas.
**PROPOSED (DA):** Sie zieht aus. = Hun izvācas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0368

**Card ID:** b1-empfangen
**Field:** study.comparison[0].example
**DE konteksts:** empfangen
**CURRENT (DA):** Wir empfangen ein Signal. = Mēs uztveram signālu.
**PROPOSED (DA):** Wir empfangen ein Signal. = Vi uztveram signālu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0371

**Card ID:** b1-entfernen
**Field:** study.comparison[0].example
**DE konteksts:** entfernen
**CURRENT (DA):** Entfernen Sie die Datei. = Izdzēsiet failu.
**PROPOSED (DA):** Entfernen Sie die Datei. = Izdzēsiet failu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0372

**Card ID:** b1-entfernen
**Field:** study.comparison[1].example
**DE konteksts:** entfernen
**CURRENT (DA):** Nimm das Glas weg. = Paņem glāzi nost.
**PROPOSED (DA):** Nimm das Glas weg. = Paņem glāzi nost.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0373

**Card ID:** b1-entfernen
**Field:** study.comparison[2].example
**DE konteksts:** entfernen
**CURRENT (DA):** Sie entfernt sich vom Bahnhof. = Viņa attālinās no stacijas.
**PROPOSED (DA):** Sie entfernt sich vom Bahnhof. = Hun attālinās no stacijas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0376

**Card ID:** b1-enthalten
**Field:** study.comparison[0].example
**DE konteksts:** enthalten
**CURRENT (DA):** Das Paket enthält Bücher. = Pakā ir grāmatas.
**PROPOSED (DA):** Das Paket enthält Bücher. = Pakā er grāmatas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0377

**Card ID:** b1-enthalten
**Field:** study.comparison[1].example
**DE konteksts:** enthalten
**CURRENT (DA):** Der Text beinhaltet Beispiele. = Teksts ietver piemērus.
**PROPOSED (DA):** Der Text beinhaltet Beispiele. = Teksts ietver piemērus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0382

**Card ID:** b1-entkommen
**Field:** study.comparison[0].example
**DE konteksts:** entkommen
**CURRENT (DA):** Er ist der Gefahr entkommen. = Viņš izbēga no briesmām.
**PROPOSED (DA):** Er ist der Gefahr entkommen. = Viņš izbēga no briesmām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0383

**Card ID:** b1-entkommen
**Field:** study.comparison[1].example
**DE konteksts:** entkommen
**CURRENT (DA):** Viele Menschen fliehen aus der Stadt. = Daudzi cilvēki bēg no pilsētas.
**PROPOSED (DA):** Viele Menschen fliehen aus der Stadt. = Daudzi cilvēki bēg no pilsēdet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0384

**Card ID:** b1-entkommen
**Field:** study.comparison[2].example
**DE konteksts:** entkommen
**CURRENT (DA):** Sie rettet sich aus dem Haus. = Viņa izglābjas no mājas.
**PROPOSED (DA):** Sie rettet sich aus dem Haus. = Hun izglābjas no mājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0386

**Card ID:** b1-entlassen
**Field:** study.comparison[0].example
**DE konteksts:** entlassen
**CURRENT (DA):** Sie wurde entlassen. = Viņa tika atlaista.
**PROPOSED (DA):** Sie wurde entlassen. = Patienten blev udskrevet fra hospitalet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0387

**Card ID:** b1-entlassen
**Field:** study.comparison[1].example
**DE konteksts:** entlassen
**CURRENT (DA):** Er kündigt den Vertrag. = Viņš uzteic līgumu.
**PROPOSED (DA):** Er kündigt den Vertrag. = Viņš uzteic līgumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0388

**Card ID:** b1-entlassen
**Field:** study.comparison[2].example
**DE konteksts:** entlassen
**CURRENT (DA):** Die Polizei lässt ihn frei. = Policija viņu palaiž brīvībā.
**PROPOSED (DA):** Die Polizei lässt ihn frei. = Policija viņu palaiž brīvībā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0390

**Card ID:** b1-entsprechen
**Field:** study.comparison[0].example
**DE konteksts:** entsprechen
**CURRENT (DA):** Das entspricht dem Plan. = Tas atbilst plānam.
**PROPOSED (DA):** Das entspricht dem Plan. = Tas atbilst plānam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0391

**Card ID:** b1-entsprechen
**Field:** study.comparison[1].example
**DE konteksts:** entsprechen
**CURRENT (DA):** Der Schlüssel passt nicht. = Atslēga neder.
**PROPOSED (DA):** Der Schlüssel passt nicht. = Atslēga neder.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0392

**Card ID:** b1-entsprechen
**Field:** study.comparison[2].example
**DE konteksts:** entsprechen
**CURRENT (DA):** Sie antwortet auf die Frage. = Viņa atbild uz jautājumu.
**PROPOSED (DA):** Sie antwortet auf die Frage. = Hun atbild uz jautājumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0394

**Card ID:** b1-entstehen
**Field:** study.comparison[0].example
**DE konteksts:** entstehen
**CURRENT (DA):** Ein Problem entsteht. = Rodas problēma.
**PROPOSED (DA):** Ein Problem entsteht. = Rodas problēma.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0395

**Card ID:** b1-entstehen
**Field:** study.comparison[1].example
**DE konteksts:** entstehen
**CURRENT (DA):** Sie schafft neue Arbeitsplätze. = Viņa rada jaunas darba vietas.
**PROPOSED (DA):** Sie schafft neue Arbeitsplätze. = Hun rada jaunas darba vietas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0397

**Card ID:** b1-erhalten
**Field:** study.comparison[0].example
**DE konteksts:** erhalten
**CURRENT (DA):** Ich erhalte einen Brief. = Es saņemu vēstuli.
**PROPOSED (DA):** Ich erhalte einen Brief. = Jeg saņemu vēstuli.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0398

**Card ID:** b1-erhalten
**Field:** study.comparison[1].example
**DE konteksts:** erhalten
**CURRENT (DA):** Ich bekomme Hilfe. = Es saņemu palīdzību.
**PROPOSED (DA):** Ich bekomme Hilfe. = Jeg saņemu palīdzību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0399

**Card ID:** b1-erhalten
**Field:** study.comparison[2].example
**DE konteksts:** erhalten
**CURRENT (DA):** Wir bewahren die Tradition. = Mēs saglabājam tradīciju.
**PROPOSED (DA):** Wir bewahren die Tradition. = Vi saglabājam tradīciju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0402

**Card ID:** b1-eröffnen
**Field:** study.comparison[0].example
**DE konteksts:** eröffnen
**CURRENT (DA):** Sie eröffnet ein Konto. = Viņa atver kontu.
**PROPOSED (DA):** Sie eröffnet ein Konto. = Banken åbner en ny konto.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0403

**Card ID:** b1-eröffnen
**Field:** study.comparison[2].example
**DE konteksts:** eröffnen
**CURRENT (DA):** Wir beginnen die Sitzung. = Mēs sākam sēdi.
**PROPOSED (DA):** Wir beginnen die Sitzung. = Vi begynder sēdi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0407

**Card ID:** b1-erscheinen
**Field:** study.comparison[0].example
**DE konteksts:** erscheinen
**CURRENT (DA):** Der Artikel erscheint morgen. = Raksts iznāks rīt.
**PROPOSED (DA):** Der Artikel erscheint morgen. = Raksts iznāks i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0408

**Card ID:** b1-erscheinen
**Field:** study.comparison[1].example
**DE konteksts:** erscheinen
**CURRENT (DA):** Er taucht plötzlich auf. = Viņš pēkšņi uzrodas.
**PROPOSED (DA):** Er taucht plötzlich auf. = Viņš pēkšņi uzrodas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0409

**Card ID:** b1-erscheinen
**Field:** study.comparison[2].example
**DE konteksts:** erscheinen
**CURRENT (DA):** Der Zug kommt an. = Vilciens pienāk.
**PROPOSED (DA):** Der Zug kommt an. = Toget pienāk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0412

**Card ID:** b1-ersetzen
**Field:** study.comparison[0].example
**DE konteksts:** ersetzen
**CURRENT (DA):** Das ersetzt die alte Lösung. = Tas aizstāj veco risinājumu.
**PROPOSED (DA):** Das ersetzt die alte Lösung. = Tas aizstāj veco risinājumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0413

**Card ID:** b1-ersetzen
**Field:** study.comparison[1].example
**DE konteksts:** ersetzen
**CURRENT (DA):** Wir tauschen das Teil aus. = Mēs nomainām detaļu.
**PROPOSED (DA):** Wir tauschen das Teil aus. = Vi nomainām detaļu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0414

**Card ID:** b1-ersetzen
**Field:** study.comparison[2].example
**DE konteksts:** ersetzen
**CURRENT (DA):** Die Firma entschädigt den Kunden. = Firma kompensē klientam.
**PROPOSED (DA):** Die Firma entschädigt den Kunden. = Firma kompensē klientam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0416

**Card ID:** b1-fassen
**Field:** study.comparison[0].example
**DE konteksts:** fassen
**CURRENT (DA):** Ich kann es nicht fassen. = Es to nespēju aptvert.
**PROPOSED (DA):** Ich kann es nicht fassen. = Jeg kan ikke vikle mit hoved om den tanke.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0417

**Card ID:** b1-fassen
**Field:** study.comparison[1].example
**DE konteksts:** fassen
**CURRENT (DA):** Er greift nach der Tasche. = Viņš sniedzas pēc somas.
**PROPOSED (DA):** Er greift nach der Tasche. = Viņš sniedzas pēc somas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0420

**Card ID:** b1-faul
**Field:** study.comparison[0].example
**DE konteksts:** faul
**CURRENT (DA):** Er ist faul. = Viņš ir slinks.
**PROPOSED (DA):** Er ist faul. = Viņš er slinks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0421

**Card ID:** b1-faul
**Field:** study.comparison[1].example
**DE konteksts:** faul
**CURRENT (DA):** Er wirkt heute träge. = Viņš šodien šķiet kūtrs.
**PROPOSED (DA):** Er wirkt heute träge. = Viņš šodien šķiet kūtrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0422

**Card ID:** b1-faul
**Field:** study.comparison[2].example
**DE konteksts:** faul
**CURRENT (DA):** Das Essen ist verdorben. = Ēdiens ir sabojājies.
**PROPOSED (DA):** Das Essen ist verdorben. = Ēdiens er sabojājies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0424

**Card ID:** b1-festhalten
**Field:** study.comparison[2].example
**DE konteksts:** festhalten
**CURRENT (DA):** Ich stelle einen Fehler fest. = Es konstatēju kļūdu.
**PROPOSED (DA):** Ich stelle einen Fehler fest. = Jeg konstatēju kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0426

**Card ID:** b1-festlegen
**Field:** study.comparison[0].example
**DE konteksts:** festlegen
**CURRENT (DA):** Wir legen den Plan fest. = Mēs nosakām plānu.
**PROPOSED (DA):** Wir legen den Plan fest. = Vi sætter en deadline.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0427

**Card ID:** b1-festlegen
**Field:** study.comparison[1].example
**DE konteksts:** festlegen
**CURRENT (DA):** Der Arzt bestimmt die Dosis. = Ārsts nosaka devu.
**PROPOSED (DA):** Der Arzt bestimmt die Dosis. = Ārsts nosaka devu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0428

**Card ID:** b1-festlegen
**Field:** study.comparison[2].example
**DE konteksts:** festlegen
**CURRENT (DA):** Ich stelle einen Fehler fest. = Es konstatēju kļūdu.
**PROPOSED (DA):** Ich stelle einen Fehler fest. = Jeg konstatēju kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0430

**Card ID:** b1-feststellen
**Field:** study.comparison[0].example
**DE konteksts:** feststellen
**CURRENT (DA):** Ich stelle einen Fehler fest. = Es konstatēju kļūdu.
**PROPOSED (DA):** Ich stelle einen Fehler fest. = Vi fandt en fejl i systemet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0431

**Card ID:** b1-feststellen
**Field:** study.comparison[1].example
**DE konteksts:** feststellen
**CURRENT (DA):** Wir legen den Termin fest. = Mēs nosakām termiņu.
**PROPOSED (DA):** Wir legen den Termin fest. = Vi nosakām termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0432

**Card ID:** b1-feststellen
**Field:** study.comparison[2].example
**DE konteksts:** feststellen
**CURRENT (DA):** Ich bemerke den Fehler. = Es pamanu kļūdu.
**PROPOSED (DA):** Ich bemerke den Fehler. = Jeg pamanu kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0437

**Card ID:** b1-folge
**Field:** study.comparison[1].example
**DE konteksts:** Folge
**CURRENT (DA):** Das ist die Konsequenz. = Tās ir sekas.
**PROPOSED (DA):** Das ist die Konsequenz. = Tās er sekas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0438

**Card ID:** b1-folge
**Field:** study.comparison[2].example
**DE konteksts:** Folge
**CURRENT (DA):** Die Episode ist kurz. = Epizode ir īsa.
**PROPOSED (DA):** Die Episode ist kurz. = Epizode er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0442

**Card ID:** b1-fördern
**Field:** study.comparison[0].example
**DE konteksts:** fördern
**CURRENT (DA):** Das fördert die Entwicklung. = Tas veicina attīstību.
**PROPOSED (DA):** Das fördert die Entwicklung. = Tas veicina attīstību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0443

**Card ID:** b1-fördern
**Field:** study.comparison[1].example
**DE konteksts:** fördern
**CURRENT (DA):** Sie fordert mehr Geld. = Viņa prasa vairāk naudas.
**PROPOSED (DA):** Sie fordert mehr Geld. = Hun prasa vairāk naudas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0444

**Card ID:** b1-fördern
**Field:** study.comparison[2].example
**DE konteksts:** fördern
**CURRENT (DA):** Wir unterstützen das Projekt. = Mēs atbalstām projektu.
**PROPOSED (DA):** Wir unterstützen das Projekt. = Vi atbalstām projektu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0446

**Card ID:** b1-fortfahren
**Field:** study.comparison[1].example
**DE konteksts:** fortfahren
**CURRENT (DA):** Wir machen morgen weiter. = Mēs rīt turpināsim.
**PROPOSED (DA):** Wir machen morgen weiter. = Vi i morgen turpināsim.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0447

**Card ID:** b1-fortfahren
**Field:** study.comparison[2].example
**DE konteksts:** fortfahren
**CURRENT (DA):** Er fährt weg. = Viņš aizbrauc.
**PROPOSED (DA):** Er fährt weg. = Viņš aizbrauc.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0448

**Card ID:** b1-fortfahren
**Field:** study.sectionAccents.tip.leftBlocks[0].text.purple[1]
**DE konteksts:** fortfahren
**CURRENT (DA):** aizbraukt prom
**PROPOSED (DA):** aizbraukt væk
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0449

**Card ID:** b1-fortfahren
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** fortfahren
**CURRENT (DA):** aizbraukt prom
**PROPOSED (DA):** FJERN «aizbraukt prom»
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0450

**Card ID:** b1-fressen
**Field:** study.comparison[0].example
**DE konteksts:** fressen
**CURRENT (DA):** Der Hund frisst. = Suns ēd.
**PROPOSED (DA):** Der Hund frisst. = Hunden spiser sin mad.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0451

**Card ID:** b1-fressen
**Field:** study.comparison[1].example
**DE konteksts:** fressen
**CURRENT (DA):** Ich esse Brot. = Es ēdu maizi.
**PROPOSED (DA):** Ich esse Brot. = Jeg ēdu maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0452

**Card ID:** b1-fressen
**Field:** study.comparison[2].example
**DE konteksts:** fressen
**CURRENT (DA):** Er verschlingt das Essen. = Viņš aprij ēdienu.
**PROPOSED (DA):** Er verschlingt das Essen. = Viņš aprij ēdienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0454

**Card ID:** b1-futter
**Field:** study.comparison[0].example
**DE konteksts:** Futter
**CURRENT (DA):** Das Futter ist teuer. = Barība ir dārga.
**PROPOSED (DA):** Das Futter ist teuer. = Barība er dārga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0455

**Card ID:** b1-futter
**Field:** study.comparison[1].example
**DE konteksts:** Futter
**CURRENT (DA):** Das Essen ist fertig. = Ēdiens ir gatavs.
**PROPOSED (DA):** Das Essen ist fertig. = Ēdiens er gatavs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0459

**Card ID:** b1-gebiet
**Field:** study.comparison[0].example
**DE konteksts:** Gebiet
**CURRENT (DA):** Das ist mein Gebiet. = Tā ir mana joma.
**PROPOSED (DA):** Das ist mein Gebiet. = Tā er mana joma.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0460

**Card ID:** b1-gebiet
**Field:** study.comparison[1].example
**DE konteksts:** Gebiet
**CURRENT (DA):** Dieser Bereich ist wichtig. = Šī joma ir svarīga.
**PROPOSED (DA):** Dieser Bereich ist wichtig. = Šī joma er svarīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0461

**Card ID:** b1-gebiet
**Field:** study.comparison[2].example
**DE konteksts:** Gebiet
**CURRENT (DA):** Die Gegend ist schön. = Apkārtne ir skaista.
**PROPOSED (DA):** Die Gegend ist schön. = Apkārtne er skaista.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0464

**Card ID:** b1-gehalt
**Field:** study.comparison[2].example
**DE konteksts:** Gehalt
**CURRENT (DA):** Sein Verdienst ist hoch. = Viņa ienākums ir augsts.
**PROPOSED (DA):** Sein Verdienst ist hoch. = Hans løn er høj.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0467

**Card ID:** b1-gelten
**Field:** study.comparison[0].example
**DE konteksts:** gelten
**CURRENT (DA):** Das Gesetz gilt überall. = Likums ir spēkā visur.
**PROPOSED (DA):** Das Gesetz gilt überall. = Likums er spēkā visur.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0468

**Card ID:** b1-gelten
**Field:** study.comparison[1].example
**DE konteksts:** gelten
**CURRENT (DA):** Sie gilt als Expertin. = Viņa tiek uzskatīta par eksperti.
**PROPOSED (DA):** Sie gilt als Expertin. = Hun tiek uzskatīta par eksperti.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0469

**Card ID:** b1-gelten
**Field:** study.comparison[2].example
**DE konteksts:** gelten
**CURRENT (DA):** Der Schlüssel passt nicht. = Atslēga neder.
**PROPOSED (DA):** Der Schlüssel passt nicht. = Atslēga neder.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0471

**Card ID:** b1-gemein
**Field:** study.comparison[1].example
**DE konteksts:** gemein
**CURRENT (DA):** Wir haben ein gemeinsames Ziel. = Mums ir kopīgs mērķis.
**PROPOSED (DA):** Wir haben ein gemeinsames Ziel. = Mums er kopīgs mērķis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0473

**Card ID:** b1-gerät
**Field:** study.comparison[0].example
**DE konteksts:** Gerät
**CURRENT (DA):** Das Gerät ist neu. = Ierīce ir jauna.
**PROPOSED (DA):** Das Gerät ist neu. = Ierīce er jauna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0474

**Card ID:** b1-gerät
**Field:** study.comparison[1].example
**DE konteksts:** Gerät
**CURRENT (DA):** Das Werkzeug liegt im Keller. = Instruments atrodas pagrabā.
**PROPOSED (DA):** Das Werkzeug liegt im Keller. = Instruments atrodas pagrabā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0475

**Card ID:** b1-gerät
**Field:** study.comparison[2].example
**DE konteksts:** Gerät
**CURRENT (DA):** Die Maschine läuft den ganzen Tag. = Iekārta darbojas visu dienu.
**PROPOSED (DA):** Die Maschine läuft den ganzen Tag. = Iekārta darbojas visu dienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0477

**Card ID:** b1-geschlecht
**Field:** study.comparison[0].example
**DE konteksts:** Geschlecht
**CURRENT (DA):** Das Geschlecht wird im Formular gefragt. = Veidlapā jautā dzimumu.
**PROPOSED (DA):** Das Geschlecht wird im Formular gefragt. = Statistikker skelnes efter køn.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0478

**Card ID:** b1-geschlecht
**Field:** study.comparison[1].example
**DE konteksts:** Geschlecht
**CURRENT (DA):** Das Genus ist feminin. = Dzimte ir sieviešu.
**PROPOSED (DA):** Das Genus ist feminin. = Dzimte er sieviešu.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0479

**Card ID:** b1-geschlecht
**Field:** study.comparison[2].example
**DE konteksts:** Geschlecht
**CURRENT (DA):** Diese Generation ist jung. = Šī paaudze ir jauna.
**PROPOSED (DA):** Diese Generation ist jung. = Šī paaudze er jauna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0481

**Card ID:** b1-gesellschaft
**Field:** study.comparison[0].example
**DE konteksts:** Gesellschaft
**CURRENT (DA):** Die Gesellschaft verändert sich. = Sabiedrība mainās.
**PROPOSED (DA):** Die Gesellschaft verändert sich. = Samfundet ændrer sig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0482

**Card ID:** b1-gesellschaft
**Field:** study.comparison[2].example
**DE konteksts:** Gesellschaft
**CURRENT (DA):** Die Gemeinschaft hilft einander. = Kopiena palīdz cita citai.
**PROPOSED (DA):** Die Gemeinschaft hilft einander. = Kopiena palīdz cita citai.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0485

**Card ID:** b1-gewinn
**Field:** study.comparison[0].example
**DE konteksts:** Gewinn
**CURRENT (DA):** Der Gewinn ist hoch. = Peļņa ir liela.
**PROPOSED (DA):** Der Gewinn ist hoch. = At vinde i lotteriet var stort.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0486

**Card ID:** b1-gewinn
**Field:** study.comparison[1].example
**DE konteksts:** Gewinn
**CURRENT (DA):** Der Umsatz steigt. = Apgrozījums aug.
**PROPOSED (DA):** Der Umsatz steigt. = Apgrozījums aug.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0488

**Card ID:** b1-gewiss
**Field:** study.comparison[2].example
**DE konteksts:** gewiss
**CURRENT (DA):** Er kommt bestimmt. = Viņš noteikti atnāks.
**PROPOSED (DA):** Er kommt bestimmt. = Viņš noteikti atnāks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0490

**Card ID:** b1-sich-gewöhnen
**Field:** study.comparison[0].example
**DE konteksts:** sich gewöhnen
**CURRENT (DA):** Ich gewöhne mich daran. = Es pie tā pierodu.
**PROPOSED (DA):** Ich gewöhne mich daran. = Jeg er ved at vænne mig til det nye job.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0491

**Card ID:** b1-sich-gewöhnen
**Field:** study.comparison[1].example
**DE konteksts:** sich gewöhnen
**CURRENT (DA):** Ich gewöhne das Kind daran. = Es pieradinu bērnu pie tā.
**PROPOSED (DA):** Ich gewöhne das Kind daran. = Jeg pieradinu bērnu pie tā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0492

**Card ID:** b1-sich-gewöhnen
**Field:** study.comparison[2].example
**DE konteksts:** sich gewöhnen
**CURRENT (DA):** Ich gewöhne mich langsam ein. = Es lēnām iedzīvojos.
**PROPOSED (DA):** Ich gewöhne mich langsam ein. = Jeg er ved at vænne mig til det nye job.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0493

**Card ID:** b1-gitter
**Field:** study.comparison[0].example
**DE konteksts:** Gitter
**CURRENT (DA):** Das Gitter schützt das Fenster. = Režģis aizsargā logu.
**PROPOSED (DA):** Das Gitter schützt das Fenster. = Der er en rist ved vinduet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0494

**Card ID:** b1-gitter
**Field:** study.comparison[1].example
**DE konteksts:** Gitter
**CURRENT (DA):** Halt dich am Geländer fest. = Turies pie margām.
**PROPOSED (DA):** Halt dich am Geländer fest. = Turies pie margām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0498

**Card ID:** b1-greifen
**Field:** study.comparison[0].example
**DE konteksts:** greifen
**CURRENT (DA):** Sie greift nach dem Glas. = Viņa sniedzas pēc glāzes.
**PROPOSED (DA):** Sie greift nach dem Glas. = Hun rækker ud efter glasset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0499

**Card ID:** b1-greifen
**Field:** study.comparison[2].example
**DE konteksts:** greifen
**CURRENT (DA):** Nimm bitte das Glas. = Paņem, lūdzu, glāzi.
**PROPOSED (DA):** Nimm bitte das Glas. = Paņem, lūdzu, glāzi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0502

**Card ID:** b1-griff
**Field:** study.comparison[0].example
**DE konteksts:** Griff
**CURRENT (DA):** Der Griff ist aus Metall. = Rokturis ir no metāla.
**PROPOSED (DA):** Der Griff ist aus Metall. = Rokturis er no metāla.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0503

**Card ID:** b1-griff
**Field:** study.comparison[1].example
**DE konteksts:** Griff
**CURRENT (DA):** Die Tasse hat einen Henkel. = Krūzei ir osa.
**PROPOSED (DA):** Die Tasse hat einen Henkel. = Krūzei er osa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0504

**Card ID:** b1-griff
**Field:** study.comparison[2].example
**DE konteksts:** Griff
**CURRENT (DA):** Sie greift nach dem Glas. = Viņa sniedzas pēc glāzes.
**PROPOSED (DA):** Sie greift nach dem Glas. = Hun sniedzas pēc glāzes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0508

**Card ID:** b1-gut
**Field:** study.comparison[1].example
**DE konteksts:** Gut
**CURRENT (DA):** Der Zug bringt Güter. = Vilciens ved preces.
**PROPOSED (DA):** Der Zug bringt Güter. = Toget ved preces.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0509

**Card ID:** b1-gut
**Field:** study.comparison[2].example
**DE konteksts:** Gut
**CURRENT (DA):** Das Essen ist gut. = Ēdiens ir labs.
**PROPOSED (DA):** Das Essen ist gut. = Ēdiens er labs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0511

**Card ID:** b1-handeln
**Field:** study.comparison[0].example
**DE konteksts:** handeln
**CURRENT (DA):** Wir müssen handeln. = Mums jārīkojas.
**PROPOSED (DA):** Wir müssen handeln. = Vi skal handle hurtigt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0512

**Card ID:** b1-handeln
**Field:** study.comparison[1].example
**DE konteksts:** handeln
**CURRENT (DA):** Ich arbeite im Büro. = Es strādāju birojā.
**PROPOSED (DA):** Ich arbeite im Büro. = Jeg strādāju birojā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0513

**Card ID:** b1-handeln
**Field:** study.comparison[2].example
**DE konteksts:** handeln
**CURRENT (DA):** Sie verkauft Brot. = Viņa pārdod maizi.
**PROPOSED (DA):** Sie verkauft Brot. = Hun pārdod maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0517

**Card ID:** b1-handgriff
**Field:** study.comparison[0].example
**DE konteksts:** Handgriff
**CURRENT (DA):** Ein Handgriff reicht. = Pietiek ar vienu paņēmienu.
**PROPOSED (DA):** Ein Handgriff reicht. = Pietiek ar vienu paņēmienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0518

**Card ID:** b1-handgriff
**Field:** study.comparison[1].example
**DE konteksts:** Handgriff
**CURRENT (DA):** Der Griff ist locker. = Rokturis ir vaļīgs.
**PROPOSED (DA):** Der Griff ist locker. = Rokturis er vaļīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0519

**Card ID:** b1-handgriff
**Field:** study.comparison[2].example
**DE konteksts:** Handgriff
**CURRENT (DA):** Die Handlung war falsch. = Rīcība bija nepareiza.
**PROPOSED (DA):** Die Handlung war falsch. = Rīcība bija nepareiza.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0521

**Card ID:** b1-hauen
**Field:** study.comparison[0].example
**DE konteksts:** hauen
**CURRENT (DA):** Er haut auf den Tisch. = Viņš sit pa galdu.
**PROPOSED (DA):** Er haut auf den Tisch. = Han slår knytnæven i bordet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0522

**Card ID:** b1-hauen
**Field:** study.comparison[1].example
**DE konteksts:** hauen
**CURRENT (DA):** Er schlägt den Ball. = Viņš sit bumbu.
**PROPOSED (DA):** Er schlägt den Ball. = Viņš sit bumbu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0523

**Card ID:** b1-hauen
**Field:** study.comparison[2].example
**DE konteksts:** hauen
**CURRENT (DA):** Sie hackt Gemüse. = Viņa kapā dārzeņus.
**PROPOSED (DA):** Sie hackt Gemüse. = Hun kapā dārzeņus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0526

**Card ID:** b1-haufen
**Field:** study.comparison[1].example
**DE konteksts:** Haufen
**CURRENT (DA):** Ein Stapel Bücher liegt auf dem Tisch. = Uz galda ir grāmatu kaudze.
**PROPOSED (DA):** Ein Stapel Bücher liegt auf dem Tisch. = Der ligger en stak papirer på bordet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0527

**Card ID:** b1-haufen
**Field:** study.comparison[2].example
**DE konteksts:** Haufen
**CURRENT (DA):** Eine Menge Leute wartet. = Gaidā daudz cilvēku.
**PROPOSED (DA):** Eine Menge Leute wartet. = Gaidā daudz cilvēku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0530

**Card ID:** b1-herausgeben
**Field:** study.comparison[0].example
**DE konteksts:** herausgeben
**CURRENT (DA):** Der Verlag gibt ein Buch heraus. = Izdevniecība izdod grāmatu.
**PROPOSED (DA):** Der Verlag gibt ein Buch heraus. = Forlaget udgiver en ny bog.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0531

**Card ID:** b1-herausgeben
**Field:** study.comparison[1].example
**DE konteksts:** herausgeben
**CURRENT (DA):** Er gibt viel Geld aus. = Viņš tērē daudz naudas.
**PROPOSED (DA):** Er gibt viel Geld aus. = Viņš tērē daudz naudas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0532

**Card ID:** b1-herausgeben
**Field:** study.comparison[2].example
**DE konteksts:** herausgeben
**CURRENT (DA):** Ich gebe das Buch zurück. = Es atdodu grāmatu atpakaļ.
**PROPOSED (DA):** Ich gebe das Buch zurück. = Jeg atdodu bogen atpakaļ.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0533

**Card ID:** b1-herkommen
**Field:** study.comparison[0].example
**DE konteksts:** herkommen
**CURRENT (DA):** Komm her! = Nāc šurp!
**PROPOSED (DA):** Komm her! = Nāc šurp!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0534

**Card ID:** b1-herkommen
**Field:** study.comparison[1].example
**DE konteksts:** herkommen
**CURRENT (DA):** Ich komme um acht. = Es nākšu astoņos.
**PROPOSED (DA):** Ich komme um acht. = Jeg nākšu astoņos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0535

**Card ID:** b1-herkommen
**Field:** study.comparison[2].example
**DE konteksts:** herkommen
**CURRENT (DA):** Ich gehe zum Arzt hin. = Es aizeju pie ārsta.
**PROPOSED (DA):** Ich gehe zum Arzt hin. = Jeg aizeju pie ārsta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0537

**Card ID:** b1-hinausgehen
**Field:** study.comparison[0].example
**DE konteksts:** hinausgehen
**CURRENT (DA):** Ich gehe hinaus. = Es izeju ārā.
**PROPOSED (DA):** Ich gehe hinaus. = Jeg går ud et stykke tid.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0538

**Card ID:** b1-hinausgehen
**Field:** study.comparison[1].example
**DE konteksts:** hinausgehen
**CURRENT (DA):** Komm bitte heraus! = Iznāc, lūdzu, ārā!
**PROPOSED (DA):** Komm bitte heraus! = Iznāc, lūdzu, ārā!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0539

**Card ID:** b1-hinausgehen
**Field:** study.comparison[2].example
**DE konteksts:** hinausgehen
**CURRENT (DA):** Wir gehen heute aus. = Mēs šodien ejam ārā.
**PROPOSED (DA):** Wir gehen heute aus. = Vi šodien ejam ārā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0542

**Card ID:** b1-hinweis
**Field:** study.comparison[0].example
**DE konteksts:** Hinweis
**CURRENT (DA):** Danke für den Hinweis. = Paldies par norādījumu.
**PROPOSED (DA):** Danke für den Hinweis. = Tak for instruktionen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0543

**Card ID:** b1-hinweis
**Field:** study.comparison[2].example
**DE konteksts:** Hinweis
**CURRENT (DA):** Die Warnung war wichtig. = Brīdinājums bija svarīgs.
**PROPOSED (DA):** Die Warnung war wichtig. = Brīdinājums bija svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0546

**Card ID:** b1-holen
**Field:** study.comparison[1].example
**DE konteksts:** holen
**CURRENT (DA):** Bring mir bitte Wasser. = Atnes man, lūdzu, ūdeni.
**PROPOSED (DA):** Bring mir bitte Wasser. = Atnes man, lūdzu, ūdeni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0547

**Card ID:** b1-holen
**Field:** study.comparison[2].example
**DE konteksts:** holen
**CURRENT (DA):** Nimm die Tasche. = Paņem somu.
**PROPOSED (DA):** Nimm die Tasche. = Paņem somu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0550

**Card ID:** b1-horchen
**Field:** study.comparison[0].example
**DE konteksts:** horchen
**CURRENT (DA):** Sie horcht an der Tür. = Viņa klausās pie durvīm.
**PROPOSED (DA):** Sie horcht an der Tür. = Hun lytter ved døren.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0551

**Card ID:** b1-horchen
**Field:** study.comparison[1].example
**DE konteksts:** horchen
**CURRENT (DA):** Ich höre Musik. = Es klausos mūziku.
**PROPOSED (DA):** Ich höre Musik. = Jeg klausos mūziku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0552

**Card ID:** b1-horchen
**Field:** study.comparison[2].example
**DE konteksts:** horchen
**CURRENT (DA):** Hör mir bitte zu. = Lūdzu, klausies manī.
**PROPOSED (DA):** Hör mir bitte zu. = Lūdzu, klausies manī.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0554

**Card ID:** b1-hupe
**Field:** study.comparison[0].example
**DE konteksts:** Hupe
**CURRENT (DA):** Die Hupe ist laut. = Signāltaure ir skaļa.
**PROPOSED (DA):** Die Hupe ist laut. = Signāltaure er skaļa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0555

**Card ID:** b1-hupe
**Field:** study.comparison[1].example
**DE konteksts:** Hupe
**CURRENT (DA):** Er hupt. = Viņš signalizē.
**PROPOSED (DA):** Er hupt. = Viņš signalizē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0556

**Card ID:** b1-hupe
**Field:** study.comparison[2].example
**DE konteksts:** Hupe
**CURRENT (DA):** Das Signal ist klar. = Signāls ir skaidrs.
**PROPOSED (DA):** Das Signal ist klar. = Signāls er skaidrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0557

**Card ID:** b1-hüten
**Field:** study.comparison[0].example
**DE konteksts:** hüten
**CURRENT (DA):** Sie hütet die Kinder. = Viņa pieskata bērnus.
**PROPOSED (DA):** Sie hütet die Kinder. = Hun passer børnene om eftermiddagen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0558

**Card ID:** b1-hüten
**Field:** study.comparison[1].example
**DE konteksts:** hüten
**CURRENT (DA):** Der Hund bewacht das Haus. = Suns apsargā māju.
**PROPOSED (DA):** Der Hund bewacht das Haus. = Suns apsargā māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0559

**Card ID:** b1-hüten
**Field:** study.comparison[2].example
**DE konteksts:** hüten
**CURRENT (DA):** Pass auf die Kinder auf. = Pieskati bērnus.
**PROPOSED (DA):** Pass auf die Kinder auf. = Pieskati bērnus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0563

**Card ID:** b1-innerhalb
**Field:** study.comparison[0].example
**DE konteksts:** innerhalb
**CURRENT (DA):** Innerhalb einer Woche. = Nedēļas laikā.
**PROPOSED (DA):** Innerhalb einer Woche. = Svar venligst inden for en uge.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0564

**Card ID:** b1-innerhalb
**Field:** study.comparison[1].example
**DE konteksts:** innerhalb
**CURRENT (DA):** Wir wohnen außerhalb der Stadt. = Mēs dzīvojam ārpus pilsētas.
**PROPOSED (DA):** Wir wohnen außerhalb der Stadt. = Vi dzīvojam ārpus pilsēdet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0565

**Card ID:** b1-innerhalb
**Field:** study.comparison[2].example
**DE konteksts:** innerhalb
**CURRENT (DA):** Ich bin in der Stadt. = Es esmu pilsētā.
**PROPOSED (DA):** Ich bin in der Stadt. = Jeg esmu pilsētā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0569

**Card ID:** b1-irren
**Field:** study.comparison[0].example
**DE konteksts:** sich irren
**CURRENT (DA):** Ich irre mich. = Es kļūdos.
**PROPOSED (DA):** Ich irre mich. = Jeg kļūdos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0570

**Card ID:** b1-irren
**Field:** study.comparison[1].example
**DE konteksts:** sich irren
**CURRENT (DA):** Ich habe mich getäuscht. = Es kļūdījos.
**PROPOSED (DA):** Ich habe mich getäuscht. = Jeg lavede en fejl i adressen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0571

**Card ID:** b1-irren
**Field:** study.comparison[2].example
**DE konteksts:** sich irren
**CURRENT (DA):** Wir haben uns verlaufen. = Mēs apmaldījāmies.
**PROPOSED (DA):** Wir haben uns verlaufen. = Vi apmaldījāmies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0573

**Card ID:** b1-jagen
**Field:** study.comparison[0].example
**DE konteksts:** jagen
**CURRENT (DA):** Der Hund jagt die Katze. = Suns dzen kaķi.
**PROPOSED (DA):** Der Hund jagt die Katze. = Hunden jager katten.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0574

**Card ID:** b1-jagen
**Field:** study.comparison[1].example
**DE konteksts:** jagen
**CURRENT (DA):** Die Polizei verfolgt den Täter. = Policija vajā vainīgo.
**PROPOSED (DA):** Die Polizei verfolgt den Täter. = Policija vajā vainīgo.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0575

**Card ID:** b1-jagen
**Field:** study.comparison[2].example
**DE konteksts:** jagen
**CURRENT (DA):** Ich muss mich beeilen. = Man jāsteidzas.
**PROPOSED (DA):** Ich muss mich beeilen. = Jeg har jāsteidzas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0577

**Card ID:** b1-jahrgang
**Field:** study.comparison[0].example
**DE konteksts:** Jahrgang
**CURRENT (DA):** Er ist Jahrgang 1995. = Viņš ir dzimis 1995. gadā.
**PROPOSED (DA):** Er ist Jahrgang 1995. = Han er født i 1995.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0578

**Card ID:** b1-jahrgang
**Field:** study.comparison[1].example
**DE konteksts:** Jahrgang
**CURRENT (DA):** Das Jahr hat zwölf Monate. = Gadā ir divpadsmit mēneši.
**PROPOSED (DA):** Das Jahr hat zwölf Monate. = Gadā er divpadsmit mēneši.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0579

**Card ID:** b1-jahrgang
**Field:** study.comparison[2].example
**DE konteksts:** Jahrgang
**CURRENT (DA):** Diese Generation reist viel. = Šī paaudze daudz ceļo.
**PROPOSED (DA):** Diese Generation reist viel. = Šī paaudze daudz ceļo.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0581

**Card ID:** b1-kehren
**Field:** study.comparison[0].example
**DE konteksts:** kehren
**CURRENT (DA):** Sie kehrt den Hof. = Viņa slauka pagalmu.
**PROPOSED (DA):** Sie kehrt den Hof. = Hun fejer gården.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0582

**Card ID:** b1-kehren
**Field:** study.comparison[1].example
**DE konteksts:** kehren
**CURRENT (DA):** Ich fege den Boden. = Es slauku grīdu.
**PROPOSED (DA):** Ich fege den Boden. = Jeg slauku grīdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0583

**Card ID:** b1-kehren
**Field:** study.comparison[2].example
**DE konteksts:** kehren
**CURRENT (DA):** Er kehrt nach Hause zurück. = Viņš atgriežas mājās.
**PROPOSED (DA):** Er kehrt nach Hause zurück. = Viņš atgriežas hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0585

**Card ID:** b1-kern
**Field:** study.comparison[0].example
**DE konteksts:** Kern
**CURRENT (DA):** Der Kern der Sache ist wichtig. = Lietas būtība ir svarīga.
**PROPOSED (DA):** Der Kern der Sache ist wichtig. = Pointen er enkel.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0586

**Card ID:** b1-kern
**Field:** study.comparison[1].example
**DE konteksts:** Kern
**CURRENT (DA):** Die Samen liegen auf der Erde. = Sēklas guļ uz zemes.
**PROPOSED (DA):** Die Samen liegen auf der Erde. = Sēklas guļ uz zemes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0587

**Card ID:** b1-kern
**Field:** study.comparison[2].example
**DE konteksts:** Kern
**CURRENT (DA):** Der Tisch steht im Mittelpunkt. = Galds stāv centrā.
**PROPOSED (DA):** Der Tisch steht im Mittelpunkt. = Galds stāv centrā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0591

**Card ID:** b1-kiefer
**Field:** study.comparison[0].example
**DE konteksts:** Kiefer
**CURRENT (DA):** Der Kiefer tut weh. = Žoklis sāp.
**PROPOSED (DA):** Der Kiefer tut weh. = Žoklis sāp.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0594

**Card ID:** b1-kippen
**Field:** study.comparison[0].example
**DE konteksts:** kippen
**CURRENT (DA):** Das Glas kippt um. = Glāze apgāžas.
**PROPOSED (DA):** Das Glas kippt um. = Glasset vælter.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0595

**Card ID:** b1-kippen
**Field:** study.comparison[1].example
**DE konteksts:** kippen
**CURRENT (DA):** Das Glas fällt auf den Boden. = Glāze krīt uz grīdas.
**PROPOSED (DA):** Das Glas fällt auf den Boden. = Glāze krīt uz grīdas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0596

**Card ID:** b1-kippen
**Field:** study.comparison[2].example
**DE konteksts:** kippen
**CURRENT (DA):** Dreh die Karte um. = Apgriez kartīti.
**PROPOSED (DA):** Dreh die Karte um. = Apgriez kartīti.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0600

**Card ID:** b1-klappen
**Field:** study.comparison[0].example
**DE konteksts:** klappen
**CURRENT (DA):** Alles hat geklappt. = Viss izdevās.
**PROPOSED (DA):** Alles hat geklappt. = Virkede alt?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0601

**Card ID:** b1-klappen
**Field:** study.comparison[2].example
**DE konteksts:** klappen
**CURRENT (DA):** Der Kuchen ist gelungen. = Kūka izdevās.
**PROPOSED (DA):** Der Kuchen ist gelungen. = Kūka izdevās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0604

**Card ID:** b1-knapp
**Field:** study.comparison[2].example
**DE konteksts:** knapp
**CURRENT (DA):** Die Antwort ist kurz. = Atbilde ir īsa.
**PROPOSED (DA):** Die Antwort ist kurz. = Atbilde er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0606

**Card ID:** b1-kommando
**Field:** study.comparison[1].example
**DE konteksts:** Kommando
**CURRENT (DA):** Der Befehl kam vom Chef. = Pavēle nāca no priekšnieka.
**PROPOSED (DA):** Der Befehl kam vom Chef. = Pavēle nāca no priekšnieka.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0607

**Card ID:** b1-kommando
**Field:** study.comparison[2].example
**DE konteksts:** Kommando
**CURRENT (DA):** Die Mannschaft spielt gut. = Komanda spēlē labi.
**PROPOSED (DA):** Die Mannschaft spielt gut. = Komanda spēlē labi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0613

**Card ID:** b1-kraftwerk
**Field:** study.comparison[0].example
**DE konteksts:** Kraftwerk
**CURRENT (DA):** Das Kraftwerk ist groß. = Spēkstacija ir liela.
**PROPOSED (DA):** Das Kraftwerk ist groß. = Spēkstacija er liela.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0614

**Card ID:** b1-kraftwerk
**Field:** study.comparison[1].example
**DE konteksts:** Kraftwerk
**CURRENT (DA):** Das Atomkraftwerk ist umstritten. = Atomspēkstacija ir pretrunīga.
**PROPOSED (DA):** Das Atomkraftwerk ist umstritten. = Atomspēkstacija er pretrunīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0615

**Card ID:** b1-kraftwerk
**Field:** study.comparison[2].example
**DE konteksts:** Kraftwerk
**CURRENT (DA):** Die Fabrik produziert Autos. = Fabrika ražo automašīnas.
**PROPOSED (DA):** Die Fabrik produziert Autos. = Fabrika ražo automašīnas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0617

**Card ID:** b1-kreuzen
**Field:** study.comparison[0].example
**DE konteksts:** kreuzen
**CURRENT (DA):** Die Wege kreuzen sich. = Ceļi krustojas.
**PROPOSED (DA):** Die Wege kreuzen sich. = Vejene krydser her.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0618

**Card ID:** b1-kreuzen
**Field:** study.comparison[1].example
**DE konteksts:** kreuzen
**CURRENT (DA):** Wir überqueren die Straße. = Mēs šķērsojam ielu.
**PROPOSED (DA):** Wir überqueren die Straße. = Vi šķērsojam ielu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0619

**Card ID:** b1-kreuzen
**Field:** study.comparison[2].example
**DE konteksts:** kreuzen
**CURRENT (DA):** Kreuzen Sie die Antwort an. = Atzīmējiet atbildi.
**PROPOSED (DA):** Kreuzen Sie die Antwort an. = Atzīmējiet atbildi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0625

**Card ID:** b1-kunde-2
**Field:** study.comparison[1].example
**DE konteksts:** Kunde
**CURRENT (DA):** Die Kundin fragt nach dem Preis. = Kliente jautā par cenu.
**PROPOSED (DA):** Die Kundin fragt nach dem Preis. = Kliente jautā par cenu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0626

**Card ID:** b1-kunde-2
**Field:** study.comparison[2].example
**DE konteksts:** Kunde
**CURRENT (DA):** Die Kunde kam spät. = Vēsts pienāca vēlu.
**PROPOSED (DA):** Die Kunde kam spät. = Vēsts pienāca vēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0629

**Card ID:** b1-kunde
**Field:** study.comparison[0].example
**DE konteksts:** Kunde
**CURRENT (DA):** Die Kunde kam spät. = Vēsts pienāca vēlu.
**PROPOSED (DA):** Die Kunde kam spät. = Vēsts pienāca vēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0630

**Card ID:** b1-kunde
**Field:** study.comparison[2].example
**DE konteksts:** Kunde
**CURRENT (DA):** Ich habe eine Nachricht bekommen. = Es saņēmu ziņu.
**PROPOSED (DA):** Ich habe eine Nachricht bekommen. = Jeg saņēmu ziņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0636

**Card ID:** b1-kündigen
**Field:** study.comparison[0].example
**DE konteksts:** kündigen
**CURRENT (DA):** Ich kündige den Vertrag. = Es laužu līgumu.
**PROPOSED (DA):** Ich kündige den Vertrag. = Jeg laužu līgumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0637

**Card ID:** b1-kündigen
**Field:** study.comparison[2].example
**DE konteksts:** kündigen
**CURRENT (DA):** Ich höre mit dem Kurs auf. = Es pārtraucu kursu.
**PROPOSED (DA):** Ich höre mit dem Kurs auf. = Jeg pārtraucu kursu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0644

**Card ID:** b1-kuppeln
**Field:** study.comparison[0].example
**DE konteksts:** kuppeln
**CURRENT (DA):** Der Fahrer kuppelt den Anhänger an. = Vadītājs piekabina piekabi.
**PROPOSED (DA):** Der Fahrer kuppelt den Anhänger an. = Chaufføren kobler anhængeren.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0645

**Card ID:** b1-kuppeln
**Field:** study.comparison[1].example
**DE konteksts:** kuppeln
**CURRENT (DA):** Das Kabel verbindet die Geräte. = Kabelis savieno ierīces.
**PROPOSED (DA):** Das Kabel verbindet die Geräte. = Kabelis savieno ierīces.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0646

**Card ID:** b1-kuppeln
**Field:** study.comparison[2].example
**DE konteksts:** kuppeln
**CURRENT (DA):** Ich schließe den Drucker an. = Es pieslēdzu printeri.
**PROPOSED (DA):** Ich schließe den Drucker an. = Jeg pieslēdzu printeri.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0651

**Card ID:** b1-kurs
**Field:** study.comparison[0].example
**DE konteksts:** Kurs
**CURRENT (DA):** Der Kurs beginnt morgen. = Kurss sākas rīt.
**PROPOSED (DA):** Der Kurs beginnt morgen. = Kurss sāsom i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0654

**Card ID:** b1-kürze
**Field:** study.comparison[0].example
**DE konteksts:** Kürze
**CURRENT (DA):** Die Kürze ist ein Vorteil. = Īsums ir priekšrocība.
**PROPOSED (DA):** Die Kürze ist ein Vorteil. = Īsums er priekšrocība.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0655

**Card ID:** b1-kürze
**Field:** study.comparison[1].example
**DE konteksts:** Kürze
**CURRENT (DA):** Der Zug kommt in Kürze. = Vilciens drīzumā pienāks.
**PROPOSED (DA):** Der Zug kommt in Kürze. = Toget kommer snart.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0656

**Card ID:** b1-kürze
**Field:** study.comparison[2].example
**DE konteksts:** Kürze
**CURRENT (DA):** Der Text ist kurz. = Teksts ir īss.
**PROPOSED (DA):** Der Text ist kurz. = Teksts er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0663

**Card ID:** b1-laden
**Field:** study.comparison[0].example
**DE konteksts:** laden
**CURRENT (DA):** Ich lade mein Handy. = Es uzlādēju telefonu.
**PROPOSED (DA):** Ich lade mein Handy. = Jeg skal oplade min telefon.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0664

**Card ID:** b1-laden
**Field:** study.comparison[1].example
**DE konteksts:** laden
**CURRENT (DA):** Sie lädt uns ein. = Viņa mūs ielūdz.
**PROPOSED (DA):** Sie lädt uns ein. = Hun mūs ielūdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0671

**Card ID:** b1-lager
**Field:** study.comparison[0].example
**DE konteksts:** Lager
**CURRENT (DA):** Die Waren sind im Lager. = Preces ir noliktavā.
**PROPOSED (DA):** Die Waren sind im Lager. = Varerne er på lager.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0672

**Card ID:** b1-lager
**Field:** study.comparison[1].example
**DE konteksts:** Lager
**CURRENT (DA):** Die Unterkunft ist sauber. = Naktsmītne ir tīra.
**PROPOSED (DA):** Die Unterkunft ist sauber. = Naktsmītne er tīra.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0677

**Card ID:** b1-hörer
**Field:** study.comparison[0].example
**DE konteksts:** Hörer
**CURRENT (DA):** Die Hörer rufen an. = Klausītāji zvana.
**PROPOSED (DA):** Die Hörer rufen an. = Klausītāji zvana.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0678

**Card ID:** b1-hörer
**Field:** study.comparison[1].example
**DE konteksts:** Hörer
**CURRENT (DA):** Die Zuhörer sitzen im Saal. = Klausītāji sēž zālē.
**PROPOSED (DA):** Die Zuhörer sitzen im Saal. = Klausītāji sēž zālē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0679

**Card ID:** b1-hörer
**Field:** study.comparison[2].example
**DE konteksts:** Hörer
**CURRENT (DA):** Ich brauche Kopfhörer. = Man vajag austiņas.
**PROPOSED (DA):** Ich brauche Kopfhörer. = Jeg har vajag austiņas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0686

**Card ID:** b1-inhalt
**Field:** study.comparison[1].example
**DE konteksts:** Inhalt
**CURRENT (DA):** Das Thema ist interessant. = Tēma ir interesanta.
**PROPOSED (DA):** Das Thema ist interessant. = Tēma er interesanta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0691

**Card ID:** b1-kante
**Field:** study.comparison[1].example
**DE konteksts:** Kante
**CURRENT (DA):** Am Rand steht ein Baum. = Malā stāv koks.
**PROPOSED (DA):** Am Rand steht ein Baum. = Malā stāv koks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0692

**Card ID:** b1-kante
**Field:** study.comparison[2].example
**DE konteksts:** Kante
**CURRENT (DA):** Die Grenze ist geschlossen. = Robeža ir slēgta.
**PROPOSED (DA):** Die Grenze ist geschlossen. = Robeža er slēgta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0697

**Card ID:** b1-kastanie
**Field:** study.comparison[1].example
**DE konteksts:** Kastanie
**CURRENT (DA):** Der Kastanienbaum ist alt. = Kastaņu koks ir vecs.
**PROPOSED (DA):** Der Kastanienbaum ist alt. = Kastaņu koks er vecs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0711

**Card ID:** b1-leisten
**Field:** study.comparison[0].example
**DE konteksts:** leisten
**CURRENT (DA):** Sie leistet gute Arbeit. = Viņa veic labu darbu.
**PROPOSED (DA):** Sie leistet gute Arbeit. = Hun gør et godt stykke arbejde.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0712

**Card ID:** b1-leisten
**Field:** study.comparison[2].example
**DE konteksts:** leisten
**CURRENT (DA):** Ich kann mir das leisten. = Es to varu atļauties.
**PROPOSED (DA):** Ich kann mir das leisten. = Det har jeg ikke råd til.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0718

**Card ID:** b1-leistung
**Field:** study.comparison[1].example
**DE konteksts:** Leistung
**CURRENT (DA):** Das Ergebnis ist positiv. = Rezultāts ir pozitīvs.
**PROPOSED (DA):** Das Ergebnis ist positiv. = Rezultāts er pozitīvs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0719

**Card ID:** b1-leistung
**Field:** study.comparison[2].example
**DE konteksts:** Leistung
**CURRENT (DA):** Die Kraft des Motors ist groß. = Motora spēks ir liels.
**PROPOSED (DA):** Die Kraft des Motors ist groß. = Motora spēks er liels.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0722

**Card ID:** b1-locker
**Field:** study.comparison[0].example
**DE konteksts:** locker
**CURRENT (DA):** Die Schraube ist locker. = Skrūve ir vaļīga.
**PROPOSED (DA):** Die Schraube ist locker. = Skruen er løs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0723

**Card ID:** b1-locker
**Field:** study.comparison[1].example
**DE konteksts:** locker
**CURRENT (DA):** Ein loser Knopf kann abfallen. = Vaļīga poga var nokrist.
**PROPOSED (DA):** Ein loser Knopf kann abfallen. = Vaļīga poga var nokrist.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0724

**Card ID:** b1-locker
**Field:** study.comparison[2].example
**DE konteksts:** locker
**CURRENT (DA):** Der Deckel sitzt fest. = Vāks turas stingri.
**PROPOSED (DA):** Der Deckel sitzt fest. = Vāks turas stingri.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0728

**Card ID:** b1-los
**Field:** study.comparison[0].example
**DE konteksts:** Los
**CURRENT (DA):** Jeder Teilnehmer zieht ein Los. = Katrs dalībnieks izvelk lozi.
**PROPOSED (DA):** Jeder Teilnehmer zieht ein Los. = Hver deltager trækker meget.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0729

**Card ID:** b1-los
**Field:** study.comparison[1].example
**DE konteksts:** Los
**CURRENT (DA):** Der Gewinn wird morgen ausgezahlt. = Laimests tiks izmaksāts rīt.
**PROPOSED (DA):** Der Gewinn wird morgen ausgezahlt. = Laimests tiks izmaksāts i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0732

**Card ID:** b1-löschen
**Field:** study.comparison[0].example
**DE konteksts:** löschen
**CURRENT (DA):** Bitte lösche die Datei. = Lūdzu, izdzēs failu.
**PROPOSED (DA):** Bitte lösche die Datei. = Slet venligst den gamle fil.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0733

**Card ID:** b1-löschen
**Field:** study.comparison[1].example
**DE konteksts:** löschen
**CURRENT (DA):** Schalte bitte den Computer aus. = Lūdzu, izslēdz datoru.
**PROPOSED (DA):** Schalte bitte den Computer aus. = Lūdzu, izslēdz datoru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0734

**Card ID:** b1-löschen
**Field:** study.comparison[2].example
**DE konteksts:** löschen
**CURRENT (DA):** Wir lösen das Problem. = Mēs atrisinām problēmu.
**PROPOSED (DA):** Wir lösen das Problem. = Vi atrisinām problēmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0738

**Card ID:** b1-lösen
**Field:** study.comparison[0].example
**DE konteksts:** lösen
**CURRENT (DA):** Wir lösen das Problem. = Mēs atrisinām problēmu.
**PROPOSED (DA):** Wir lösen das Problem. = Vi er nødt til at løse dette problem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0739

**Card ID:** b1-lösen
**Field:** study.comparison[2].example
**DE konteksts:** lösen
**CURRENT (DA):** Ich lösche die Datei. = Es izdzēšu failu.
**PROPOSED (DA):** Ich lösche die Datei. = Jeg izdzēšu failu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0743

**Card ID:** b1-lösung
**Field:** study.comparison[0].example
**DE konteksts:** Lösung
**CURRENT (DA):** Wir suchen eine Lösung. = Mēs meklējam risinājumu.
**PROPOSED (DA):** Wir suchen eine Lösung. = Vi leder efter en løsning på problemet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0744

**Card ID:** b1-lösung
**Field:** study.comparison[2].example
**DE konteksts:** Lösung
**CURRENT (DA):** Das Ergebnis ist gut. = Rezultāts ir labs.
**PROPOSED (DA):** Das Ergebnis ist gut. = Rezultāts er labs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0747

**Card ID:** b1-macht
**Field:** study.comparison[0].example
**DE konteksts:** Macht
**CURRENT (DA):** Die Partei kam an die Macht. = Partija nāca pie varas.
**PROPOSED (DA):** Die Partei kam an die Macht. = Partiet kom til magten.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0748

**Card ID:** b1-macht
**Field:** study.comparison[1].example
**DE konteksts:** Macht
**CURRENT (DA):** Er hat viel Kraft. = Viņam ir daudz spēka.
**PROPOSED (DA):** Er hat viel Kraft. = Viņam er daudz spēka.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0749

**Card ID:** b1-macht
**Field:** study.comparison[2].example
**DE konteksts:** Macht
**CURRENT (DA):** Sie hat Einfluss auf die Entscheidung. = Viņai ir ietekme uz lēmumu.
**PROPOSED (DA):** Sie hat Einfluss auf die Entscheidung. = Viņai er ietekme uz lēmumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0752

**Card ID:** b1-maß
**Field:** study.comparison[0].example
**DE konteksts:** Maß
**CURRENT (DA):** Alles hat sein Maß. = Visam ir savs mērs.
**PROPOSED (DA):** Alles hat sein Maß. = Alt har sit mål.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0753

**Card ID:** b1-maß
**Field:** study.comparison[1].example
**DE konteksts:** Maß
**CURRENT (DA):** Die Maße stimmen nicht. = Izmēri nesakrīt.
**PROPOSED (DA):** Die Maße stimmen nicht. = Izmēri nesakrīt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0754

**Card ID:** b1-maß
**Field:** study.comparison[2].example
**DE konteksts:** Maß
**CURRENT (DA):** Diese Maßnahme hilft. = Šis pasākums palīdz.
**PROPOSED (DA):** Diese Maßnahme hilft. = Šis pasākums palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0759

**Card ID:** b1-messe
**Field:** study.comparison[0].example
**DE konteksts:** Messe
**CURRENT (DA):** Wir besuchen die Messe. = Mēs apmeklējam izstādi.
**PROPOSED (DA):** Wir besuchen die Messe. = Vi apmeklējam izstādi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0760

**Card ID:** b1-messe
**Field:** study.comparison[1].example
**DE konteksts:** Messe
**CURRENT (DA):** Die Ausstellung zeigt moderne Kunst. = Izstāde rāda moderno mākslu.
**PROPOSED (DA):** Die Ausstellung zeigt moderne Kunst. = Izstāde rāda moderno mākslu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0765

**Card ID:** b1-nachdem
**Field:** study.comparison[0].example
**DE konteksts:** nachdem
**CURRENT (DA):** Nachdem ich gegessen hatte, ging ich schlafen. = Pēc tam kad biju paēdis, es gāju gulēt.
**PROPOSED (DA):** Nachdem ich gegessen hatte, ging ich schlafen. = Efter jeg havde spist gik jeg i seng.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0766

**Card ID:** b1-nachdem
**Field:** study.comparison[1].example
**DE konteksts:** nachdem
**CURRENT (DA):** Danach gingen wir nach Hause. = Pēc tam mēs devāmies mājās.
**PROPOSED (DA):** Danach gingen wir nach Hause. = Efter kurset var slut tog vi hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0770

**Card ID:** b1-nachfrage
**Field:** study.comparison[0].example
**DE konteksts:** Nachfrage
**CURRENT (DA):** Die Nachfrage ist groß. = Pieprasījums ir liels.
**PROPOSED (DA):** Die Nachfrage ist groß. = Pieprasījums er liels.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0771

**Card ID:** b1-nachfrage
**Field:** study.comparison[1].example
**DE konteksts:** Nachfrage
**CURRENT (DA):** Ich habe eine Frage. = Man ir jautājums.
**PROPOSED (DA):** Ich habe eine Frage. = Jeg har er jautājums.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0772

**Card ID:** b1-nachfrage
**Field:** study.comparison[2].example
**DE konteksts:** Nachfrage
**CURRENT (DA):** Das Angebot ist begrenzt. = Piedāvājums ir ierobežots.
**PROPOSED (DA):** Das Angebot ist begrenzt. = Piedāvājums er ierobežots.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0776

**Card ID:** b1-nachgeben
**Field:** study.comparison[0].example
**DE konteksts:** nachgeben
**CURRENT (DA):** Er gab nach. = Viņš piekāpās.
**PROPOSED (DA):** Er gab nach. = Viņš piekāpās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0777

**Card ID:** b1-nachgeben
**Field:** study.comparison[2].example
**DE konteksts:** nachgeben
**CURRENT (DA):** Sie gibt den Fehler zu. = Viņa atzīst kļūdu.
**PROPOSED (DA):** Sie gibt den Fehler zu. = Hun atzīst kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0781

**Card ID:** b1-neigen
**Field:** study.comparison[0].example
**DE konteksts:** neigen
**CURRENT (DA):** Er neigt zu Fehlern. = Viņam ir nosliece uz kļūdām.
**PROPOSED (DA):** Er neigt zu Fehlern. = Viņam er nosliece uz kļūdām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0782

**Card ID:** b1-neigen
**Field:** study.comparison[1].example
**DE konteksts:** neigen
**CURRENT (DA):** Der Zug nähert sich dem Bahnhof. = Vilciens tuvojas stacijai.
**PROPOSED (DA):** Der Zug nähert sich dem Bahnhof. = Toget tuvojas stacijai.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0783

**Card ID:** b1-neigen
**Field:** study.comparison[2].example
**DE konteksts:** neigen
**CURRENT (DA):** Er biegt den Draht. = Viņš loka stiepli.
**PROPOSED (DA):** Er biegt den Draht. = Viņš loka stiepli.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0787

**Card ID:** b1-neigung
**Field:** study.comparison[0].example
**DE konteksts:** Neigung
**CURRENT (DA):** Sie hat eine Neigung zur Musik. = Viņai ir tieksme uz mūziku.
**PROPOSED (DA):** Sie hat eine Neigung zur Musik. = Hun har en forkærlighed for musik.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0788

**Card ID:** b1-neigung
**Field:** study.comparison[1].example
**DE konteksts:** Neigung
**CURRENT (DA):** Sie hat Interesse an Kunst. = Viņai ir interese par mākslu.
**PROPOSED (DA):** Sie hat Interesse an Kunst. = Viņai er interese par mākslu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0789

**Card ID:** b1-neigung
**Field:** study.comparison[2].example
**DE konteksts:** Neigung
**CURRENT (DA):** Der Hang ist steil. = Nogāze ir stāva.
**PROPOSED (DA):** Der Hang ist steil. = Nogāze er stāva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0792

**Card ID:** b1-nerven
**Field:** study.comparison[1].example
**DE konteksts:** nerven
**CURRENT (DA):** Bitte nicht stören. = Lūdzu, netraucēt.
**PROPOSED (DA):** Bitte nicht stören. = Lūdzu, netraucēt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0796

**Card ID:** b1-nieder
**Field:** study.comparison[0].example
**DE konteksts:** nieder
**CURRENT (DA):** Der Baum liegt nieder. = Koks guļ zemē.
**PROPOSED (DA):** Der Baum liegt nieder. = Træet ligger på jorden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0797

**Card ID:** b1-nieder
**Field:** study.comparison[1].example
**DE konteksts:** nieder
**CURRENT (DA):** Ich warte unten. = Es gaidu lejā.
**PROPOSED (DA):** Ich warte unten. = Jeg gaidu lejā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0798

**Card ID:** b1-nieder
**Field:** study.comparison[2].example
**DE konteksts:** nieder
**CURRENT (DA):** Komm bitte herunter! = Lūdzu, nāc lejā!
**PROPOSED (DA):** Komm bitte herunter! = Lūdzu, nāc lejā!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0801

**Card ID:** b1-not
**Field:** study.comparison[0].example
**DE konteksts:** Not
**CURRENT (DA):** Sie leben in Not. = Viņi dzīvo trūkumā.
**PROPOSED (DA):** Sie leben in Not. = Viņi dzīvo trūkumā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0802

**Card ID:** b1-not
**Field:** study.comparison[1].example
**DE konteksts:** Not
**CURRENT (DA):** Es gibt keine Notwendigkeit. = Nav nepieciešamības.
**PROPOSED (DA):** Es gibt keine Notwendigkeit. = Nav nepieciešamības.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0803

**Card ID:** b1-not
**Field:** study.comparison[2].example
**DE konteksts:** Not
**CURRENT (DA):** Das ist ein Notfall. = Tas ir ārkārtas gadījums.
**PROPOSED (DA):** Das ist ein Notfall. = Tas er ārkārtas gadījums.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0808

**Card ID:** b1-nüchtern
**Field:** study.comparison[0].example
**DE konteksts:** nüchtern
**CURRENT (DA):** Der Fahrer ist nüchtern. = Vadītājs ir neiereibis.
**PROPOSED (DA):** Der Fahrer ist nüchtern. = Føreren må ikke være beruset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0809

**Card ID:** b1-nüchtern
**Field:** study.comparison[1].example
**DE konteksts:** nüchtern
**CURRENT (DA):** Er ist betrunken. = Viņš ir piedzēries.
**PROPOSED (DA):** Er ist betrunken. = Viņš er piedzēries.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0810

**Card ID:** b1-nüchtern
**Field:** study.comparison[2].example
**DE konteksts:** nüchtern
**CURRENT (DA):** Bleib sachlich. = Paliec lietišķs.
**PROPOSED (DA):** Bleib sachlich. = Paliec lietišķs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0815

**Card ID:** b1-objekt
**Field:** study.comparison[0].example
**DE konteksts:** Objekt
**CURRENT (DA):** Das Objekt wird verkauft. = Objekts tiek pārdots.
**PROPOSED (DA):** Das Objekt wird verkauft. = Objektet er til salg.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0816

**Card ID:** b1-objekt
**Field:** study.comparison[2].example
**DE konteksts:** Objekt
**CURRENT (DA):** Das Subjekt steht oft vorn. = Teikuma priekšmets bieži ir sākumā.
**PROPOSED (DA):** Das Subjekt steht oft vorn. = Teikuma priekšmets bieži er sākumā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0822

**Card ID:** b1-ohnmacht
**Field:** study.comparison[0].example
**DE konteksts:** Ohnmacht
**CURRENT (DA):** Sie fiel in Ohnmacht. = Viņa noģība.
**PROPOSED (DA):** Sie fiel in Ohnmacht. = Hun besvimede pludselig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0823

**Card ID:** b1-ohnmacht
**Field:** study.comparison[1].example
**DE konteksts:** Ohnmacht
**CURRENT (DA):** Die Bewusstlosigkeit dauerte nur kurz. = Bezsamaņa ilga tikai īsu brīdi.
**PROPOSED (DA):** Die Bewusstlosigkeit dauerte nur kurz. = Bezsamaņa ilga tikai īsu brīdi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0824

**Card ID:** b1-ohnmacht
**Field:** study.comparison[2].example
**DE konteksts:** Ohnmacht
**CURRENT (DA):** Er fühlt Machtlosigkeit. = Viņš jūt bezspēcību.
**PROPOSED (DA):** Er fühlt Machtlosigkeit. = Viņš jūt bezspēcību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0830

**Card ID:** b1-opfern
**Field:** study.comparison[0].example
**DE konteksts:** opfern
**CURRENT (DA):** Er opfert Zeit. = Viņš upurē laiku.
**PROPOSED (DA):** Er opfert Zeit. = Han ofrer meget tid på projektet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0831

**Card ID:** b1-opfern
**Field:** study.comparison[1].example
**DE konteksts:** opfern
**CURRENT (DA):** Sie spendet Geld. = Viņa ziedo naudu.
**PROPOSED (DA):** Sie spendet Geld. = Hun donerer penge til et godt formål.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0832

**Card ID:** b1-opfern
**Field:** study.comparison[2].example
**DE konteksts:** opfern
**CURRENT (DA):** Er setzt sich für Kinder ein. = Viņš iestājas par bērniem.
**PROPOSED (DA):** Er setzt sich für Kinder ein. = Viņš iestājas par bērniem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0836

**Card ID:** b1-orientieren
**Field:** study.comparison[0].example
**DE konteksts:** orientieren
**CURRENT (DA):** Ich orientiere mich in der Stadt. = Es orientējos pilsētā.
**PROPOSED (DA):** Ich orientiere mich in der Stadt. = Jeg kender godt min vej rundt i byen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0837

**Card ID:** b1-orientieren
**Field:** study.comparison[1].example
**DE konteksts:** orientieren
**CURRENT (DA):** Ich informiere mich über den Kurs. = Es iegūstu informāciju par kursu.
**PROPOSED (DA):** Ich informiere mich über den Kurs. = Jeg iegūstu informāciju par kursu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0838

**Card ID:** b1-orientieren
**Field:** study.comparison[2].example
**DE konteksts:** orientieren
**CURRENT (DA):** Wir richten uns nach dem Plan. = Mēs vadāmies pēc plāna.
**PROPOSED (DA):** Wir richten uns nach dem Plan. = Vi vadāmies pēc plāna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0843

**Card ID:** b1-periode
**Field:** study.comparison[0].example
**DE konteksts:** Periode
**CURRENT (DA):** Diese Periode dauerte drei Jahre. = Šis periods ilga trīs gadus.
**PROPOSED (DA):** Diese Periode dauerte drei Jahre. = Denne periode varede i tre år.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0844

**Card ID:** b1-periode
**Field:** study.comparison[1].example
**DE konteksts:** Periode
**CURRENT (DA):** Der Zeitraum ist kurz. = Laika posms ir īss.
**PROPOSED (DA):** Der Zeitraum ist kurz. = Laika posms er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0845

**Card ID:** b1-periode
**Field:** study.comparison[2].example
**DE konteksts:** Periode
**CURRENT (DA):** Sie hat ihre Regel. = Viņai ir mēnešreizes.
**PROPOSED (DA):** Sie hat ihre Regel. = Viņai er mēnešreizes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0847

**Card ID:** b1-pflegen
**Field:** study.comparison[0].example
**DE konteksts:** pflegen
**CURRENT (DA):** Sie pflegt ihre Mutter. = Viņa kopj savu māti.
**PROPOSED (DA):** Sie pflegt ihre Mutter. = Hun tager sig af sin mor derhjemme.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0848

**Card ID:** b1-pflegen
**Field:** study.comparison[1].example
**DE konteksts:** pflegen
**CURRENT (DA):** Er kümmert sich um das Kind. = Viņš rūpējas par bērnu.
**PROPOSED (DA):** Er kümmert sich um das Kind. = Viņš rūpējas par bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0849

**Card ID:** b1-pflegen
**Field:** study.comparison[2].example
**DE konteksts:** pflegen
**CURRENT (DA):** Ich putze die Küche. = Es tīru virtuvi.
**PROPOSED (DA):** Ich putze die Küche. = Jeg tīru virtuvi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0853

**Card ID:** b1-pochen
**Field:** study.comparison[0].example
**DE konteksts:** pochen
**CURRENT (DA):** Jemand pocht an die Tür. = Kāds klauvē pie durvīm.
**PROPOSED (DA):** Jemand pocht an die Tür. = Nogen banker højlydt på døren.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0854

**Card ID:** b1-pochen
**Field:** study.comparison[1].example
**DE konteksts:** pochen
**CURRENT (DA):** Er klopft an die Tür. = Viņš klauvē pie durvīm.
**PROPOSED (DA):** Er klopft an die Tür. = Viņš klauvē pie durvīm.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0855

**Card ID:** b1-pochen
**Field:** study.comparison[2].example
**DE konteksts:** pochen
**CURRENT (DA):** Sie besteht auf einer Antwort. = Viņa uzstāj uz atbildi.
**PROPOSED (DA):** Sie besteht auf einer Antwort. = Hun uzstāj uz atbildi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0861

**Card ID:** b1-posten
**Field:** study.comparison[0].example
**DE konteksts:** Posten
**CURRENT (DA):** Sie bekam einen neuen Posten. = Viņa ieguva jaunu amatu.
**PROPOSED (DA):** Sie bekam einen neuen Posten. = Hun fik en ny stilling i ministeriet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0862

**Card ID:** b1-posten
**Field:** study.comparison[1].example
**DE konteksts:** Posten
**CURRENT (DA):** Ich suche eine Stelle. = Es meklēju darbu.
**PROPOSED (DA):** Ich suche eine Stelle. = Jeg meklēju darbu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0863

**Card ID:** b1-posten
**Field:** study.comparison[2].example
**DE konteksts:** Posten
**CURRENT (DA):** Die Post ist geschlossen. = Pasts ir slēgts.
**PROPOSED (DA):** Die Post ist geschlossen. = Pasts er slēgts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0867

**Card ID:** b1-probe
**Field:** study.comparison[0].example
**DE konteksts:** Probe
**CURRENT (DA):** Die Probe beginnt um sechs. = Mēģinājums sākas sešos.
**PROPOSED (DA):** Die Probe beginnt um sechs. = Koncertøvelsen starter klokken seks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0868

**Card ID:** b1-probe
**Field:** study.comparison[1].example
**DE konteksts:** Probe
**CURRENT (DA):** Die Prüfung ist schwer. = Eksāmens ir grūts.
**PROPOSED (DA):** Die Prüfung ist schwer. = Eksāmens er grūts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0872

**Card ID:** b1-rang
**Field:** study.comparison[0].example
**DE konteksts:** Rang
**CURRENT (DA):** Er hat einen hohen Rang. = Viņam ir augsts rangs.
**PROPOSED (DA):** Er hat einen hohen Rang. = He has a high rank in the army.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0873

**Card ID:** b1-rang
**Field:** study.comparison[1].example
**DE konteksts:** Rang
**CURRENT (DA):** Wir sitzen in der dritten Reihe. = Mēs sēžam trešajā rindā.
**PROPOSED (DA):** Wir sitzen in der dritten Reihe. = Vi sēžam trešajā rindā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0877

**Card ID:** b1-rasen
**Field:** study.comparison[0].example
**DE konteksts:** rasen
**CURRENT (DA):** Das Auto rast. = Auto joņo.
**PROPOSED (DA):** Das Auto rast. = Bilen kører gennem byen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0878

**Card ID:** b1-rasen
**Field:** study.comparison[1].example
**DE konteksts:** rasen
**CURRENT (DA):** Ich fahre langsam. = Es braucu lēni.
**PROPOSED (DA):** Ich fahre langsam. = Jeg kører lēni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0879

**Card ID:** b1-rasen
**Field:** study.comparison[2].example
**DE konteksts:** rasen
**CURRENT (DA):** Der Sturm tobt. = Vētra plosās.
**PROPOSED (DA):** Der Sturm tobt. = Vētra plosās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0880

**Card ID:** b1-rasen
**Field:** study.sectionAccents.comparison[1].meaning.purple
**DE konteksts:** rasen
**CURRENT (DA):** braukt
**PROPOSED (DA):** braukt
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0881

**Card ID:** b1-rasen
**Field:** study.sectionAccents.important.red
**DE konteksts:** rasen
**CURRENT (DA):** braukt
**PROPOSED (DA):** braukt
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0884

**Card ID:** b1-rasen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** rasen
**CURRENT (DA):** braukt
**PROPOSED (DA):** FJERN «braukt»
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0887

**Card ID:** b1-rasen
**Field:** study.sectionAccents.important.red
**DE konteksts:** rasen
**CURRENT (DA):** braukt
**PROPOSED (DA):** FJERN «braukt»
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0888

**Card ID:** b1-rate
**Field:** study.comparison[2].example
**DE konteksts:** Rate
**CURRENT (DA):** Ratenzahlung ist möglich. = Nomaksa pa daļām ir iespējama.
**PROPOSED (DA):** Ratenzahlung ist möglich. = Nomaksa pa daļām er iespējama.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0890

**Card ID:** b1-räumen
**Field:** study.comparison[0].example
**DE konteksts:** räumen
**CURRENT (DA):** Die Polizei räumt die Straße. = Policija atbrīvo ielu.
**PROPOSED (DA):** Die Polizei räumt die Straße. = Politiet rydder gaden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0891

**Card ID:** b1-räumen
**Field:** study.comparison[1].example
**DE konteksts:** räumen
**CURRENT (DA):** Ich räume das Zimmer auf. = Es sakārtoju istabu.
**PROPOSED (DA):** Ich räume das Zimmer auf. = Jeg sakārtoju istabu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0892

**Card ID:** b1-räumen
**Field:** study.comparison[2].example
**DE konteksts:** räumen
**CURRENT (DA):** Wir verlassen das Haus. = Mēs atstājam māju.
**PROPOSED (DA):** Wir verlassen das Haus. = Vi atstājam māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0897

**Card ID:** b1-rausch
**Field:** study.comparison[0].example
**DE konteksts:** Rausch
**CURRENT (DA):** Er war im Rausch. = Viņš bija reibumā.
**PROPOSED (DA):** Er war im Rausch. = Han var beruset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0898

**Card ID:** b1-rausch
**Field:** study.comparison[2].example
**DE konteksts:** Rausch
**CURRENT (DA):** Sucht ist gefährlich. = Atkarība ir bīstama.
**PROPOSED (DA):** Sucht ist gefährlich. = Atkarība er bīstama.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0902

**Card ID:** b1-regeln
**Field:** study.comparison[0].example
**DE konteksts:** regeln
**CURRENT (DA):** Wir regeln das morgen. = Mēs to nokārtosim rīt.
**PROPOSED (DA):** Wir regeln das morgen. = Vi afgør det i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0903

**Card ID:** b1-regeln
**Field:** study.comparison[1].example
**DE konteksts:** regeln
**CURRENT (DA):** Sie organisiert die Reise. = Viņa organizē ceļojumu.
**PROPOSED (DA):** Sie organisiert die Reise. = Hun organizē ceļojumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0904

**Card ID:** b1-regeln
**Field:** study.comparison[2].example
**DE konteksts:** regeln
**CURRENT (DA):** Ich stelle die Heizung ein. = Es noregulēju apkuri.
**PROPOSED (DA):** Ich stelle die Heizung ein. = Jeg noregulēju apkuri.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0911

**Card ID:** b1-reißen
**Field:** study.comparison[0].example
**DE konteksts:** reißen
**CURRENT (DA):** Das Seil reißt. = Virve plīst.
**PROPOSED (DA):** Das Seil reißt. = Rebet knækker.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0912

**Card ID:** b1-reißen
**Field:** study.comparison[1].example
**DE konteksts:** reißen
**CURRENT (DA):** Wir reisen nach Berlin. = Mēs ceļojam uz Berlīni.
**PROPOSED (DA):** Wir reisen nach Berlin. = Vi ceļojam uz Berlīni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0913

**Card ID:** b1-reißen
**Field:** study.comparison[2].example
**DE konteksts:** reißen
**CURRENT (DA):** Der Ast bricht. = Zars lūzt.
**PROPOSED (DA):** Der Ast bricht. = Zars lūzt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0918

**Card ID:** b1-reizen
**Field:** study.comparison[0].example
**DE konteksts:** reizen
**CURRENT (DA):** Der Rauch reizt die Augen. = Dūmi kairina acis.
**PROPOSED (DA):** Der Rauch reizt die Augen. = Røg irriterer øjnene.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0919

**Card ID:** b1-reizen
**Field:** study.comparison[2].example
**DE konteksts:** reizen
**CURRENT (DA):** Das Angebot lockt viele Kunden. = Piedāvājums vilina daudz klientu.
**PROPOSED (DA):** Das Angebot lockt viele Kunden. = Piedāvājums vilina daudz klientu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0926

**Card ID:** b1-richten
**Field:** study.comparison[0].example
**DE konteksts:** richten
**CURRENT (DA):** Sie richtet den Blick nach vorn. = Viņa vērš skatienu uz priekšu.
**PROPOSED (DA):** Sie richtet den Blick nach vorn. = Hun ser fremad.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0927

**Card ID:** b1-richten
**Field:** study.comparison[2].example
**DE konteksts:** richten
**CURRENT (DA):** Urteile nicht zu schnell. = Nespried pārāk ātri.
**PROPOSED (DA):** Urteile nicht zu schnell. = Nespried pārāk ātri.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0933

**Card ID:** b1-rollen
**Field:** study.comparison[2].example
**DE konteksts:** rollen
**CURRENT (DA):** Er schiebt den Wagen. = Viņš stumj ratus.
**PROPOSED (DA):** Er schiebt den Wagen. = Viņš stumj ratus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0937

**Card ID:** b1-rösten
**Field:** study.comparison[0].example
**DE konteksts:** rösten
**CURRENT (DA):** Wir rösten Kaffee. = Mēs grauzdējam kafiju.
**PROPOSED (DA):** Wir rösten Kaffee. = Vi rister kaffe.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0938

**Card ID:** b1-rösten
**Field:** study.comparison[1].example
**DE konteksts:** rösten
**CURRENT (DA):** Ich brate Fleisch. = Es cepu gaļu.
**PROPOSED (DA):** Ich brate Fleisch. = Jeg cepu gaļu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0939

**Card ID:** b1-rösten
**Field:** study.comparison[2].example
**DE konteksts:** rösten
**CURRENT (DA):** Sie backt Brot. = Viņa cep maizi.
**PROPOSED (DA):** Sie backt Brot. = Hun cep maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0943

**Card ID:** b1-ruf-2
**Field:** study.comparison[0].example
**DE konteksts:** Ruf
**CURRENT (DA):** Ich hörte einen Ruf. = Es dzirdēju saucienu.
**PROPOSED (DA):** Ich hörte einen Ruf. = Jeg hørte et højt råb.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0944

**Card ID:** b1-ruf-2
**Field:** study.comparison[1].example
**DE konteksts:** Ruf
**CURRENT (DA):** Ich bekam einen Anruf. = Es saņēmu zvanu.
**PROPOSED (DA):** Ich bekam einen Anruf. = Jeg saņēmu zvanu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0948

**Card ID:** b1-ruhen
**Field:** study.comparison[0].example
**DE konteksts:** ruhen
**CURRENT (DA):** Das Verfahren ruht. = Process ir apturēts.
**PROPOSED (DA):** Das Verfahren ruht. = Processen er i øjeblikket suspenderet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0949

**Card ID:** b1-ruhen
**Field:** study.comparison[1].example
**DE konteksts:** ruhen
**CURRENT (DA):** Ich ruhe mich kurz aus. = Es īsu brīdi atpūšos.
**PROPOSED (DA):** Ich ruhe mich kurz aus. = Jeg īsu brīdi atpūšos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0950

**Card ID:** b1-ruhen
**Field:** study.comparison[2].example
**DE konteksts:** ruhen
**CURRENT (DA):** Das Kind schläft. = Bērns guļ.
**PROPOSED (DA):** Das Kind schläft. = Bērns guļ.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0957

**Card ID:** b1-rüsten
**Field:** study.comparison[0].example
**DE konteksts:** rüsten
**CURRENT (DA):** Wir rüsten uns für den Winter. = Mēs gatavojamies ziemai.
**PROPOSED (DA):** Wir rüsten uns für den Winter. = Vi gør klar til vinteren.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0958

**Card ID:** b1-rüsten
**Field:** study.comparison[1].example
**DE konteksts:** rüsten
**CURRENT (DA):** Ich bereite das Essen vor. = Es sagatavoju ēdienu.
**PROPOSED (DA):** Ich bereite das Essen vor. = Jeg sagatavoju ēdienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0959

**Card ID:** b1-rüsten
**Field:** study.comparison[2].example
**DE konteksts:** rüsten
**CURRENT (DA):** Der Staat rüstet auf. = Valsts bruņojas.
**PROPOSED (DA):** Der Staat rüstet auf. = Valsts bruņojas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0965

**Card ID:** b1-saat
**Field:** study.comparison[0].example
**DE konteksts:** Saat
**CURRENT (DA):** Die Saat geht auf. = Sējums dīgst.
**PROPOSED (DA):** Die Saat geht auf. = Volumenet spirer.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0966

**Card ID:** b1-saat
**Field:** study.comparison[1].example
**DE konteksts:** Saat
**CURRENT (DA):** Der Samen ist klein. = Sēkla ir maza.
**PROPOSED (DA):** Der Samen ist klein. = Sēkla er maza.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0967

**Card ID:** b1-saat
**Field:** study.comparison[2].example
**DE konteksts:** Saat
**CURRENT (DA):** Wir säen Weizen. = Mēs sējam kviešus.
**PROPOSED (DA):** Wir säen Weizen. = Vi sējam kviešus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0972

**Card ID:** b1-schale
**Field:** study.comparison[0].example
**DE konteksts:** Schale
**CURRENT (DA):** Die Schale der Orange ist dick. = Apelsīna miza ir bieza.
**PROPOSED (DA):** Die Schale der Orange ist dick. = Appelsinskal er tyk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0973

**Card ID:** b1-schale
**Field:** study.comparison[2].example
**DE konteksts:** Schale
**CURRENT (DA):** Die Schüssel ist leer. = Bļoda ir tukša.
**PROPOSED (DA):** Die Schüssel ist leer. = Bļoda er tukša.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0976

**Card ID:** b1-schicht
**Field:** study.comparison[0].example
**DE konteksts:** Schicht
**CURRENT (DA):** Eine Schicht Staub liegt dort. = Tur ir putekļu slānis.
**PROPOSED (DA):** Eine Schicht Staub liegt dort. = Der er et lag støv på gulvet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0977

**Card ID:** b1-schicht
**Field:** study.comparison[1].example
**DE konteksts:** Schicht
**CURRENT (DA):** Die Lage ist ernst. = Situācija ir nopietna.
**PROPOSED (DA):** Die Lage ist ernst. = Situācija er nopietna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0978

**Card ID:** b1-schicht
**Field:** study.comparison[2].example
**DE konteksts:** Schicht
**CURRENT (DA):** Schichtarbeit ist anstrengend. = Maiņu darbs ir nogurdinošs.
**PROPOSED (DA):** Schichtarbeit ist anstrengend. = Maiņu darbs er nogurdinošs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0985

**Card ID:** b1-schimmel
**Field:** study.comparison[0].example
**DE konteksts:** Schimmel
**CURRENT (DA):** An der Wand ist Schimmel. = Uz sienas ir pelējums.
**PROPOSED (DA):** An der Wand ist Schimmel. = Der er skimmelsvamp på væggen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0986

**Card ID:** b1-schimmel
**Field:** study.comparison[1].example
**DE konteksts:** Schimmel
**CURRENT (DA):** Der Pilz wächst im Wald. = Sēne aug mežā.
**PROPOSED (DA):** Der Pilz wächst im Wald. = Sēne aug mežā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0987

**Card ID:** b1-schimmel
**Field:** study.comparison[2].example
**DE konteksts:** Schimmel
**CURRENT (DA):** Das Pferd läuft schnell. = Zirgs skrien ātri.
**PROPOSED (DA):** Das Pferd läuft schnell. = Zirgs skrien ātri.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0991

**Card ID:** b1-schlag
**Field:** study.comparison[0].example
**DE konteksts:** Schlag
**CURRENT (DA):** Der Schlag traf ihn. = Sitiens viņam trāpīja.
**PROPOSED (DA):** Der Schlag traf ihn. = Slaget ramte ham i armen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0992

**Card ID:** b1-schlag
**Field:** study.comparison[1].example
**DE konteksts:** Schlag
**CURRENT (DA):** Der Stoß war stark. = Grūdiens bija stiprs.
**PROPOSED (DA):** Der Stoß war stark. = Grūdiens bija stiprs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0997

**Card ID:** b1-schleifen
**Field:** study.comparison[0].example
**DE konteksts:** schleifen
**CURRENT (DA):** Er schleift das Messer. = Viņš asina nazi.
**PROPOSED (DA):** Er schleift das Messer. = Han sliber kniven.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-0998

**Card ID:** b1-schleifen
**Field:** study.comparison[2].example
**DE konteksts:** schleifen
**CURRENT (DA):** Er zieht den Wagen. = Viņš velk ratus.
**PROPOSED (DA):** Er zieht den Wagen. = Viņš velk ratus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1003

**Card ID:** b1-schmelzen
**Field:** study.comparison[0].example
**DE konteksts:** schmelzen
**CURRENT (DA):** Der Schnee schmilzt. = Sniegs kūst.
**PROPOSED (DA):** Der Schnee schmilzt. = Sneen smelter i solen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1004

**Card ID:** b1-schmelzen
**Field:** study.comparison[1].example
**DE konteksts:** schmelzen
**CURRENT (DA):** Ich taue das Fleisch auf. = Es atkausēju gaļu.
**PROPOSED (DA):** Ich taue das Fleisch auf. = Jeg atkausēju gaļu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1005

**Card ID:** b1-schmelzen
**Field:** study.comparison[2].example
**DE konteksts:** schmelzen
**CURRENT (DA):** Das Wasser kocht. = Ūdens vārās.
**PROPOSED (DA):** Das Wasser kocht. = Ūdens vārās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1012

**Card ID:** b1-schmieren
**Field:** study.comparison[0].example
**DE konteksts:** schmieren
**CURRENT (DA):** Sie schmiert Butter aufs Brot. = Viņa smērē sviestu uz maizes.
**PROPOSED (DA):** Sie schmiert Butter aufs Brot. = Hun smører smør på brød.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1014

**Card ID:** b1-schmieren
**Field:** study.comparison[1].example
**DE konteksts:** schmieren
**CURRENT (DA):** Er streicht die Wand. = Viņš krāso sienu.
**PROPOSED (DA):** Er streicht die Wand. = Viņš krāso sienu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1015

**Card ID:** b1-schmieren
**Field:** study.comparison[2].example
**DE konteksts:** schmieren
**CURRENT (DA):** Ich öle die Kette. = Es eļļoju ķēdi.
**PROPOSED (DA):** Ich öle die Kette. = Jeg eļļoju ķēdi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1021

**Card ID:** b1-schmücken
**Field:** study.comparison[0].example
**DE konteksts:** schmücken
**CURRENT (DA):** Wir schmücken den Baum. = Mēs rotājam eglīti.
**PROPOSED (DA):** Wir schmücken den Baum. = Vi rotājam eglīti.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1022

**Card ID:** b1-schmücken
**Field:** study.comparison[1].example
**DE konteksts:** schmücken
**CURRENT (DA):** Sie dekoriert den Raum. = Viņa dekorē telpu.
**PROPOSED (DA):** Sie dekoriert den Raum. = Hun dekorē telpu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1023

**Card ID:** b1-schmücken
**Field:** study.comparison[2].example
**DE konteksts:** schmücken
**CURRENT (DA):** Er zieht sich warm an. = Viņš silti apģērbjas.
**PROPOSED (DA):** Er zieht sich warm an. = Viņš silti apģērbjas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1029

**Card ID:** b1-schnitt
**Field:** study.comparison[0].example
**DE konteksts:** Schnitt
**CURRENT (DA):** Der Schnitt ist tief. = Griezums ir dziļš.
**PROPOSED (DA):** Der Schnitt ist tief. = Snittet i hånden er dybt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1030

**Card ID:** b1-schnitt
**Field:** study.comparison[1].example
**DE konteksts:** Schnitt
**CURRENT (DA):** Der Durchschnitt ist hoch. = Vidējais rādītājs ir augsts.
**PROPOSED (DA):** Der Durchschnitt ist hoch. = Vidējais rādītājs er augsts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1031

**Card ID:** b1-schnitt
**Field:** study.comparison[2].example
**DE konteksts:** Schnitt
**CURRENT (DA):** Die Wunde blutet. = Brūce asiņo.
**PROPOSED (DA):** Die Wunde blutet. = Brūce asiņo.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1036

**Card ID:** b1-schuldig
**Field:** study.comparison[0].example
**DE konteksts:** schuldig
**CURRENT (DA):** Er ist schuldig. = Viņš ir vainīgs.
**PROPOSED (DA):** Er ist schuldig. = Han er skyldig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1037

**Card ID:** b1-schuldig
**Field:** study.comparison[1].example
**DE konteksts:** schuldig
**CURRENT (DA):** Das ist nicht meine Schuld. = Tā nav mana vaina.
**PROPOSED (DA):** Das ist nicht meine Schuld. = Tā har ikke mana vaina.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1038

**Card ID:** b1-schuldig
**Field:** study.comparison[2].example
**DE konteksts:** schuldig
**CURRENT (DA):** Sie ist unschuldig. = Viņa ir nevainīga.
**PROPOSED (DA):** Sie ist unschuldig. = Hun er nevainīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1043

**Card ID:** b1-schützen
**Field:** study.comparison[0].example
**DE konteksts:** schützen
**CURRENT (DA):** Die Jacke schützt vor Regen. = Jaka aizsargā no lietus.
**PROPOSED (DA):** Die Jacke schützt vor Regen. = Jakken beskytter mod regnen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1044

**Card ID:** b1-schützen
**Field:** study.comparison[1].example
**DE konteksts:** schützen
**CURRENT (DA):** Sie retten den Hund. = Viņi izglābj suni.
**PROPOSED (DA):** Sie retten den Hund. = Viņi izglābj suni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1045

**Card ID:** b1-schützen
**Field:** study.comparison[2].example
**DE konteksts:** schützen
**CURRENT (DA):** Er bewacht das Haus. = Viņš apsargā māju.
**PROPOSED (DA):** Er bewacht das Haus. = Viņš apsargā māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1051

**Card ID:** b1-schwanken
**Field:** study.comparison[0].example
**DE konteksts:** schwanken
**CURRENT (DA):** Die Preise schwanken. = Cenas svārstās.
**PROPOSED (DA):** Die Preise schwanken. = Priserne svinger meget.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1052

**Card ID:** b1-schwanken
**Field:** study.comparison[1].example
**DE konteksts:** schwanken
**CURRENT (DA):** Der Tisch wackelt. = Galds ļodzās.
**PROPOSED (DA):** Der Tisch wackelt. = Galds ļodzās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1057

**Card ID:** b1-senden
**Field:** study.comparison[0].example
**DE konteksts:** senden
**CURRENT (DA):** Ich sende eine Nachricht. = Es sūtu ziņu.
**PROPOSED (DA):** Ich sende eine Nachricht. = Jeg sender dig en besked.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1058

**Card ID:** b1-senden
**Field:** study.comparison[1].example
**DE konteksts:** senden
**CURRENT (DA):** Ich schicke dir das Foto. = Es tev nosūtu foto.
**PROPOSED (DA):** Ich schicke dir das Foto. = Jeg tev nosūtu foto.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1059

**Card ID:** b1-senden
**Field:** study.comparison[2].example
**DE konteksts:** senden
**CURRENT (DA):** Das Spiel wird übertragen. = Spēle tiek pārraidīta.
**PROPOSED (DA):** Das Spiel wird übertragen. = Spēle tiek pārraidīta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1065

**Card ID:** b1-senken
**Field:** study.comparison[0].example
**DE konteksts:** senken
**CURRENT (DA):** Die Firma senkt die Preise. = Uzņēmums pazemina cenas.
**PROPOSED (DA):** Die Firma senkt die Preise. = Virksomheden sænker priserne.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1066

**Card ID:** b1-senken
**Field:** study.comparison[1].example
**DE konteksts:** senken
**CURRENT (DA):** Die Preise sinken. = Cenas krītas.
**PROPOSED (DA):** Die Preise sinken. = Cenas krīdet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1067

**Card ID:** b1-senken
**Field:** study.comparison[2].example
**DE konteksts:** senken
**CURRENT (DA):** Er hebt die Hand. = Viņš paceļ roku.
**PROPOSED (DA):** Er hebt die Hand. = Viņš paceļ roku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1073

**Card ID:** b1-sinn
**Field:** study.comparison[0].example
**DE konteksts:** Sinn
**CURRENT (DA):** Das hat keinen Sinn. = Tam nav jēgas.
**PROPOSED (DA):** Das hat keinen Sinn. = Det giver ikke mening.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1074

**Card ID:** b1-sinn
**Field:** study.comparison[1].example
**DE konteksts:** Sinn
**CURRENT (DA):** Die Bedeutung ist klar. = Nozīme ir skaidra.
**PROPOSED (DA):** Die Bedeutung ist klar. = Nozīme er skaidra.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1075

**Card ID:** b1-sinn
**Field:** study.comparison[2].example
**DE konteksts:** Sinn
**CURRENT (DA):** Ich habe ein gutes Gefühl. = Man ir laba sajūta.
**PROPOSED (DA):** Ich habe ein gutes Gefühl. = Jeg har er laba sajūta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1081

**Card ID:** b1-sitz
**Field:** study.comparison[0].example
**DE konteksts:** Sitz
**CURRENT (DA):** Der Sitz ist frei. = Sēdeklis ir brīvs.
**PROPOSED (DA):** Der Sitz ist frei. = Sædet er gratis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1082

**Card ID:** b1-sitz
**Field:** study.comparison[1].example
**DE konteksts:** Sitz
**CURRENT (DA):** Der Platz ist frei. = Vieta ir brīva.
**PROPOSED (DA):** Der Platz ist frei. = Vieta er brīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1083

**Card ID:** b1-sitz
**Field:** study.comparison[2].example
**DE konteksts:** Sitz
**CURRENT (DA):** Der Standort ist gut. = Atrašanās vieta ir laba.
**PROPOSED (DA):** Der Standort ist gut. = Atrašanās vieta er laba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1088

**Card ID:** b1-sich-sorgen
**Field:** study.comparison[0].example
**DE konteksts:** sich sorgen
**CURRENT (DA):** Ich sorge mich um dich. = Es raizējos par tevi.
**PROPOSED (DA):** Ich sorge mich um dich. = Jeg er bekymret for min mor.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1089

**Card ID:** b1-sich-sorgen
**Field:** study.comparison[1].example
**DE konteksts:** sich sorgen
**CURRENT (DA):** Ich kümmere mich um das Kind. = Es rūpējos par bērnu.
**PROPOSED (DA):** Ich kümmere mich um das Kind. = Jeg rūpējos par bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1090

**Card ID:** b1-sich-sorgen
**Field:** study.comparison[2].example
**DE konteksts:** sich sorgen
**CURRENT (DA):** Das ist meine Sorge. = Tās ir manas rūpes.
**PROPOSED (DA):** Das ist meine Sorge. = Jeg er bekymret for min mor.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1103

**Card ID:** b1-spannung
**Field:** study.comparison[2].example
**DE konteksts:** Spannung
**CURRENT (DA):** Er hat viel Kraft. = Viņam ir daudz spēka.
**PROPOSED (DA):** Er hat viel Kraft. = Viņam er daudz spēka.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1107

**Card ID:** b1-speichern
**Field:** study.comparison[0].example
**DE konteksts:** speichern
**CURRENT (DA):** Ich speichere die Datei. = Es saglabāju failu.
**PROPOSED (DA):** Ich speichere die Datei. = Gem venligst filen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1108

**Card ID:** b1-speichern
**Field:** study.comparison[1].example
**DE konteksts:** speichern
**CURRENT (DA):** Ich spare Geld. = Es krāju naudu.
**PROPOSED (DA):** Ich spare Geld. = Jeg krāju naudu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1109

**Card ID:** b1-speichern
**Field:** study.comparison[2].example
**DE konteksts:** speichern
**CURRENT (DA):** Ich bewahre die Quittung auf. = Es glabāju čeku.
**PROPOSED (DA):** Ich bewahre die Quittung auf. = Jeg glabāju čeku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1115

**Card ID:** b1-sperren
**Field:** study.comparison[0].example
**DE konteksts:** sperren
**CURRENT (DA):** Die Straße ist gesperrt. = Iela ir slēgta.
**PROPOSED (DA):** Die Straße ist gesperrt. = Iela er slēgta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1116

**Card ID:** b1-sperren
**Field:** study.comparison[1].example
**DE konteksts:** sperren
**CURRENT (DA):** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED (DA):** Ich schließe die Tür ab. = Jeg aizslēdzu durvis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1128

**Card ID:** b1-spritzen
**Field:** study.comparison[0].example
**DE konteksts:** spritzen
**CURRENT (DA):** Wasser spritzt. = Ūdens šļakstās.
**PROPOSED (DA):** Wasser spritzt. = Vand sprøjter på gulvet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1129

**Card ID:** b1-spritzen
**Field:** study.comparison[1].example
**DE konteksts:** spritzen
**CURRENT (DA):** Ich gieße die Blumen. = Es laistu puķes.
**PROPOSED (DA):** Ich gieße die Blumen. = Jeg laistu puķes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1136

**Card ID:** b1-sprung
**Field:** study.comparison[0].example
**DE konteksts:** Sprung
**CURRENT (DA):** Der Sprung war weit. = Lēciens bija tāls.
**PROPOSED (DA):** Der Sprung war weit. = Springet var meget langt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1137

**Card ID:** b1-sprung
**Field:** study.comparison[1].example
**DE konteksts:** Sprung
**CURRENT (DA):** In der Wand ist ein Riss. = Sienā ir plaisa.
**PROPOSED (DA):** In der Wand ist ein Riss. = Sienā er plaisa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1138

**Card ID:** b1-sprung
**Field:** study.comparison[2].example
**DE konteksts:** Sprung
**CURRENT (DA):** Er springt hoch. = Viņš lec augstu.
**PROPOSED (DA):** Er springt hoch. = Viņš lec augstu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1143

**Card ID:** b1-stand
**Field:** study.comparison[0].example
**DE konteksts:** Stand
**CURRENT (DA):** Der Stand ist unklar. = Stāvoklis nav skaidrs.
**PROPOSED (DA):** Der Stand ist unklar. = Stāvoklis har ikke skaidrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1144

**Card ID:** b1-stand
**Field:** study.comparison[1].example
**DE konteksts:** Stand
**CURRENT (DA):** Der Zustand ist gut. = Stāvoklis ir labs.
**PROPOSED (DA):** Der Zustand ist gut. = Stāvoklis er labs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1145

**Card ID:** b1-stand
**Field:** study.comparison[2].example
**DE konteksts:** Stand
**CURRENT (DA):** Der Standort ist zentral. = Atrašanās vieta ir centrāla.
**PROPOSED (DA):** Der Standort ist zentral. = Atrašanās vieta er centrāla.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1152

**Card ID:** b1-stellung
**Field:** study.comparison[0].example
**DE konteksts:** Stellung
**CURRENT (DA):** Er sucht eine Stellung. = Viņš meklē darbu.
**PROPOSED (DA):** Er sucht eine Stellung. = Han søger nyt job.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1153

**Card ID:** b1-stellung
**Field:** study.comparison[1].example
**DE konteksts:** Stellung
**CURRENT (DA):** Wie ist der Stand? = Kāds ir stāvoklis?
**PROPOSED (DA):** Wie ist der Stand? = Kāds er stāvoklis?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1154

**Card ID:** b1-stellung
**Field:** study.comparison[2].example
**DE konteksts:** Stellung
**CURRENT (DA):** Die Stelle ist frei. = Darbavieta ir brīva.
**PROPOSED (DA):** Die Stelle ist frei. = Darbavieta er brīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1159

**Card ID:** b1-stift
**Field:** study.comparison[0].example
**DE konteksts:** Stift
**CURRENT (DA):** Hast du einen Stift? = Vai tev ir zīmulis?
**PROPOSED (DA):** Hast du einen Stift? = Har du en blyant
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1160

**Card ID:** b1-stift
**Field:** study.comparison[1].example
**DE konteksts:** Stift
**CURRENT (DA):** Der Bleistift ist spitz. = Zīmulis ir ass.
**PROPOSED (DA):** Der Bleistift ist spitz. = Zīmulis er ass.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1161

**Card ID:** b1-stift
**Field:** study.comparison[2].example
**DE konteksts:** Stift
**CURRENT (DA):** Der Kugelschreiber schreibt blau. = Pildspalva raksta zilā krāsā.
**PROPOSED (DA):** Der Kugelschreiber schreibt blau. = Pildspalva raksta zilā krāsā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1167

**Card ID:** b1-stillen
**Field:** study.comparison[0].example
**DE konteksts:** stillen
**CURRENT (DA):** Die Mutter stillt das Baby. = Māte zīda bērnu.
**PROPOSED (DA):** Die Mutter stillt das Baby. = En mor ammer sit barn.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1168

**Card ID:** b1-stillen
**Field:** study.comparison[1].example
**DE konteksts:** stillen
**CURRENT (DA):** Ich beruhige das Kind. = Es nomierinu bērnu.
**PROPOSED (DA):** Ich beruhige das Kind. = Jeg nomierinu bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1169

**Card ID:** b1-stillen
**Field:** study.comparison[2].example
**DE konteksts:** stillen
**CURRENT (DA):** Ich füttere das Baby. = Es baroju bērnu.
**PROPOSED (DA):** Ich füttere das Baby. = Jeg baroju bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1176

**Card ID:** b1-stoßen
**Field:** study.comparison[0].example
**DE konteksts:** stoßen
**CURRENT (DA):** Er stößt gegen die Tür. = Viņš atsitas pret durvīm.
**PROPOSED (DA):** Er stößt gegen die Tür. = Viņš atsitas pret durvīm.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1177

**Card ID:** b1-stoßen
**Field:** study.comparison[2].example
**DE konteksts:** stoßen
**CURRENT (DA):** Ich treffe ihn morgen. = Es viņu satikšu rīt.
**PROPOSED (DA):** Ich treffe ihn morgen. = Jeg viņu satikšu i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1185

**Card ID:** b1-streichen
**Field:** study.comparison[0].example
**DE konteksts:** streichen
**CURRENT (DA):** Der Termin wird gestrichen. = Termiņš tiek atcelts.
**PROPOSED (DA):** Der Termin wird gestrichen. = Termiņš tiek atcelts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1186

**Card ID:** b1-streichen
**Field:** study.comparison[1].example
**DE konteksts:** streichen
**CURRENT (DA):** Ich lösche die Datei. = Es dzēšu failu.
**PROPOSED (DA):** Ich lösche die Datei. = Jeg dzēšu failu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1187

**Card ID:** b1-streichen
**Field:** study.comparison[2].example
**DE konteksts:** streichen
**CURRENT (DA):** Das Kind malt ein Bild. = Bērns zīmē attēlu.
**PROPOSED (DA):** Das Kind malt ein Bild. = Bērns zīmē attēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1194

**Card ID:** b1-strom
**Field:** study.comparison[0].example
**DE konteksts:** Strom
**CURRENT (DA):** Der Strom ist weg. = Elektrības nav.
**PROPOSED (DA):** Der Strom ist weg. = Elektrības har ikke.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1195

**Card ID:** b1-strom
**Field:** study.comparison[2].example
**DE konteksts:** Strom
**CURRENT (DA):** Wir sparen Energie. = Mēs taupām enerģiju.
**PROPOSED (DA):** Wir sparen Energie. = Vi taupām enerģiju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1197

**Card ID:** b1-stürzen
**Field:** study.comparison[0].example
**DE konteksts:** stürzen
**CURRENT (DA):** Er stürzt zu Boden. = Viņš nokrīt zemē.
**PROPOSED (DA):** Er stürzt zu Boden. = Viņš nokrīt zemē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1198

**Card ID:** b1-stürzen
**Field:** study.comparison[1].example
**DE konteksts:** stürzen
**CURRENT (DA):** Das Glas fällt auf den Boden. = Glāze nokrīt uz grīdas.
**PROPOSED (DA):** Das Glas fällt auf den Boden. = Glāze nokrīt uz grīdas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1199

**Card ID:** b1-stürzen
**Field:** study.comparison[2].example
**DE konteksts:** stürzen
**CURRENT (DA):** Der Stuhl fällt um. = Krēsls apgāžas.
**PROPOSED (DA):** Der Stuhl fällt um. = Krēsls apgāžas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1207

**Card ID:** b1-szene
**Field:** study.comparison[0].example
**DE konteksts:** Szene
**CURRENT (DA):** Die Szene ist kurz. = Aina ir īsa.
**PROPOSED (DA):** Die Szene ist kurz. = Aina er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1208

**Card ID:** b1-szene
**Field:** study.comparison[1].example
**DE konteksts:** Szene
**CURRENT (DA):** Sie steht auf der Bühne. = Viņa stāv uz skatuves.
**PROPOSED (DA):** Sie steht auf der Bühne. = Hun stāv uz skatuves.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1209

**Card ID:** b1-szene
**Field:** study.comparison[2].example
**DE konteksts:** Szene
**CURRENT (DA):** Die Situation ist schwierig. = Situācija ir sarežģīta.
**PROPOSED (DA):** Die Situation ist schwierig. = Situācija er sarežģīta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1214

**Card ID:** b1-tau
**Field:** study.comparison[2].example
**DE konteksts:** Tau
**CURRENT (DA):** Der Nebel ist dicht. = Migla ir blīva.
**PROPOSED (DA):** Der Nebel ist dicht. = Migla er blīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1215

**Card ID:** b1-tauchen
**Field:** study.comparison[0].example
**DE konteksts:** tauchen
**CURRENT (DA):** Wir tauchen im See. = Mēs nirstam ezerā.
**PROPOSED (DA):** Wir tauchen im See. = Vi nirstam ezerā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1216

**Card ID:** b1-tauchen
**Field:** study.comparison[1].example
**DE konteksts:** tauchen
**CURRENT (DA):** Ich schwimme im See. = Es peldu ezerā.
**PROPOSED (DA):** Ich schwimme im See. = Jeg peldu ezerā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1217

**Card ID:** b1-tauchen
**Field:** study.comparison[2].example
**DE konteksts:** tauchen
**CURRENT (DA):** Ich tauche den Pinsel ein. = Es iemērcu otu.
**PROPOSED (DA):** Ich tauche den Pinsel ein. = Jeg iemērcu otu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1224

**Card ID:** b1-taufen
**Field:** study.comparison[0].example
**DE konteksts:** taufen
**CURRENT (DA):** Das Kind wird getauft. = Bērns tiek kristīts.
**PROPOSED (DA):** Das Kind wird getauft. = Barnet bliver døbt på søndag.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1225

**Card ID:** b1-taufen
**Field:** study.comparison[1].example
**DE konteksts:** taufen
**CURRENT (DA):** Wir nennen ihn Max. = Mēs viņu saucam par Maksu.
**PROPOSED (DA):** Wir nennen ihn Max. = Vi viņu saucam par Maksu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1226

**Card ID:** b1-taufen
**Field:** study.comparison[2].example
**DE konteksts:** taufen
**CURRENT (DA):** Sie heiraten im Mai. = Viņi precas maijā.
**PROPOSED (DA):** Sie heiraten im Mai. = Viņi precas maijā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1233

**Card ID:** b1-teilnehmen
**Field:** study.comparison[0].example
**DE konteksts:** teilnehmen
**CURRENT (DA):** Ich nehme am Kurs teil. = Es piedalos kursā.
**PROPOSED (DA):** Ich nehme am Kurs teil. = Jeg deltager i kurset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1234

**Card ID:** b1-teilnehmen
**Field:** study.comparison[1].example
**DE konteksts:** teilnehmen
**CURRENT (DA):** Machst du mit? = Vai tu piedalīsies?
**PROPOSED (DA):** Machst du mit? = Vai tu piedalīsies?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1235

**Card ID:** b1-teilnehmen
**Field:** study.comparison[2].example
**DE konteksts:** teilnehmen
**CURRENT (DA):** Ich besuche einen Kurs. = Es apmeklēju kursu.
**PROPOSED (DA):** Ich besuche einen Kurs. = Jeg apmeklēju kursu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1239

**Card ID:** b1-titel
**Field:** study.comparison[0].example
**DE konteksts:** Titel
**CURRENT (DA):** Der Titel ist bekannt. = Nosaukums ir zināms.
**PROPOSED (DA):** Der Titel ist bekannt. = Nosaukums er zināms.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1240

**Card ID:** b1-titel
**Field:** study.comparison[2].example
**DE konteksts:** Titel
**CURRENT (DA):** Wie ist der Name? = Kāds ir vārds?
**PROPOSED (DA):** Wie ist der Name? = Kāds er vārds?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1246

**Card ID:** b1-ton
**Field:** study.comparison[0].example
**DE konteksts:** Ton
**CURRENT (DA):** Der Ton ist laut. = Skaņa ir skaļa.
**PROPOSED (DA):** Der Ton ist laut. = Skaņa er skaļa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1247

**Card ID:** b1-ton
**Field:** study.comparison[1].example
**DE konteksts:** Ton
**CURRENT (DA):** Ihre Stimme ist ruhig. = Viņas balss ir mierīga.
**PROPOSED (DA):** Ihre Stimme ist ruhig. = Viņas balss er mierīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1248

**Card ID:** b1-ton
**Field:** study.comparison[2].example
**DE konteksts:** Ton
**CURRENT (DA):** Die Farbe ist hell. = Krāsa ir gaiša.
**PROPOSED (DA):** Die Farbe ist hell. = Krāsa er gaiša.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1257

**Card ID:** b1-trauen
**Field:** study.comparison[2].example
**DE konteksts:** trauen
**CURRENT (DA):** Traust du dich? = Vai tu uzdrīksties?
**PROPOSED (DA):** Traust du dich? = Vai tu uzdrīksties?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1270

**Card ID:** b1-trennen
**Field:** study.comparison[1].example
**DE konteksts:** trennen
**CURRENT (DA):** Ich kann die Farben unterscheiden. = Es varu atšķirt krāsas.
**PROPOSED (DA):** Ich kann die Farben unterscheiden. = Jeg varu atšķirt krāsas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1271

**Card ID:** b1-trennen
**Field:** study.comparison[2].example
**DE konteksts:** trennen
**CURRENT (DA):** Sie trennen sich. = Viņi šķiras.
**PROPOSED (DA):** Sie trennen sich. = Viņi šķiras.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1277

**Card ID:** b1-übergeben
**Field:** study.comparison[0].example
**DE konteksts:** übergeben
**CURRENT (DA):** Ich übergebe den Schlüssel. = Es nododu atslēgu.
**PROPOSED (DA):** Ich übergebe den Schlüssel. = Jeg giver dig nøglen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1278

**Card ID:** b1-übergeben
**Field:** study.comparison[1].example
**DE konteksts:** übergeben
**CURRENT (DA):** Ich gebe dir das Buch. = Es dodu tev grāmatu.
**PROPOSED (DA):** Ich gebe dir das Buch. = Jeg dodu tev bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1279

**Card ID:** b1-übergeben
**Field:** study.comparison[2].example
**DE konteksts:** übergeben
**CURRENT (DA):** Er muss sich übergeben. = Viņam jāvemj.
**PROPOSED (DA):** Er muss sich übergeben. = Han er syg, han skal kaste op.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1282

**Card ID:** b1-überholen
**Field:** study.comparison[0].example
**DE konteksts:** überholen
**CURRENT (DA):** Er überholt das Auto. = Viņš apdzen auto.
**PROPOSED (DA):** Er überholt das Auto. = En lastbil overhaler en bil.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1283

**Card ID:** b1-überholen
**Field:** study.comparison[1].example
**DE konteksts:** überholen
**CURRENT (DA):** Ich fahre am Haus vorbei. = Es pabraucu garām mājai.
**PROPOSED (DA):** Ich fahre am Haus vorbei. = Jeg pabraucu garām mājai.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1284

**Card ID:** b1-überholen
**Field:** study.comparison[2].example
**DE konteksts:** überholen
**CURRENT (DA):** Ich repariere den Motor. = Es remontēju motoru.
**PROPOSED (DA):** Ich repariere den Motor. = Jeg remontēju motoru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1291

**Card ID:** b1-übernehmen
**Field:** study.comparison[0].example
**DE konteksts:** übernehmen
**CURRENT (DA):** Ich übernehme die Aufgabe. = Es pārņemu uzdevumu.
**PROPOSED (DA):** Ich übernehme die Aufgabe. = Jeg overtager denne opgave.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1292

**Card ID:** b1-übernehmen
**Field:** study.comparison[1].example
**DE konteksts:** übernehmen
**CURRENT (DA):** Ich nehme das Buch. = Es ņemu grāmatu.
**PROPOSED (DA):** Ich nehme das Buch. = Jeg ņemu bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1293

**Card ID:** b1-übernehmen
**Field:** study.comparison[2].example
**DE konteksts:** übernehmen
**CURRENT (DA):** Ich bekomme eine Antwort. = Es saņemu atbildi.
**PROPOSED (DA):** Ich bekomme eine Antwort. = Jeg saņemu atbildi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1300

**Card ID:** b1-übersehen
**Field:** study.comparison[0].example
**DE konteksts:** übersehen
**CURRENT (DA):** Ich habe den Fehler übersehen. = Es nepamanīju kļūdu.
**PROPOSED (DA):** Ich habe den Fehler übersehen. = Jeg lagde ikke mærke til fejlen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1301

**Card ID:** b1-übersehen
**Field:** study.comparison[1].example
**DE konteksts:** übersehen
**CURRENT (DA):** Ich sehe das Haus. = Es redzu māju.
**PROPOSED (DA):** Ich sehe das Haus. = Jeg redzu māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1302

**Card ID:** b1-übersehen
**Field:** study.comparison[2].example
**DE konteksts:** übersehen
**CURRENT (DA):** Ich bemerke den Fehler. = Es pamanu kļūdu.
**PROPOSED (DA):** Ich bemerke den Fehler. = Jeg pamanu kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1308

**Card ID:** b1-umgehen
**Field:** study.comparison[0].example
**DE konteksts:** umgehen
**CURRENT (DA):** Er geht gut mit Kindern um. = Viņš labi apietas ar bērniem.
**PROPOSED (DA):** Er geht gut mit Kindern um. = Viņš labi apietas ar bērniem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1309

**Card ID:** b1-umgehen
**Field:** study.comparison[1].example
**DE konteksts:** umgehen
**CURRENT (DA):** Er behandelt sie freundlich. = Viņš pret viņu izturas laipni.
**PROPOSED (DA):** Er behandelt sie freundlich. = Viņš pret viņu izturas laipni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1310

**Card ID:** b1-umgehen
**Field:** study.comparison[2].example
**DE konteksts:** umgehen
**CURRENT (DA):** Ich vermeide Fehler. = Es izvairos no kļūdām.
**PROPOSED (DA):** Ich vermeide Fehler. = Jeg izvairos no kļūdām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1317

**Card ID:** b1-umschlag
**Field:** study.comparison[0].example
**DE konteksts:** Umschlag
**CURRENT (DA):** Der Brief ist im Umschlag. = Vēstule ir aploksnē.
**PROPOSED (DA):** Der Brief ist im Umschlag. = Brevet ligger i en konvolut.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1318

**Card ID:** b1-umschlag
**Field:** study.comparison[1].example
**DE konteksts:** Umschlag
**CURRENT (DA):** Der Brief ist lang. = Vēstule ir gara.
**PROPOSED (DA):** Der Brief ist lang. = Vēstule er gara.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1319

**Card ID:** b1-umschlag
**Field:** study.comparison[2].example
**DE konteksts:** Umschlag
**CURRENT (DA):** Der Bezug ist sauber. = Pārvalks ir tīrs.
**PROPOSED (DA):** Der Bezug ist sauber. = Pārvalks er tīrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1326

**Card ID:** b1-unterhalten
**Field:** study.comparison[0].example
**DE konteksts:** unterhalten
**CURRENT (DA):** Der Film unterhält uns. = Filma mūs izklaidē.
**PROPOSED (DA):** Der Film unterhält uns. = Filmen underholder publikum.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1327

**Card ID:** b1-unterhalten
**Field:** study.comparison[1].example
**DE konteksts:** unterhalten
**CURRENT (DA):** Wir unterhalten uns. = Mēs sarunājamies.
**PROPOSED (DA):** Wir unterhalten uns. = Vi sarunājamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1328

**Card ID:** b1-unterhalten
**Field:** study.comparison[2].example
**DE konteksts:** unterhalten
**CURRENT (DA):** Wir sprechen Deutsch. = Mēs runājam vāciski.
**PROPOSED (DA):** Wir sprechen Deutsch. = Vi runājam vāciski.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1334

**Card ID:** b1-untersuchung
**Field:** study.comparison[0].example
**DE konteksts:** Untersuchung
**CURRENT (DA):** Die Untersuchung beginnt. = Izmeklēšana sākas.
**PROPOSED (DA):** Die Untersuchung beginnt. = Izmeklēšana sāsom.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1335

**Card ID:** b1-untersuchung
**Field:** study.comparison[1].example
**DE konteksts:** Untersuchung
**CURRENT (DA):** Die Prüfung ist schwer. = Eksāmens ir grūts.
**PROPOSED (DA):** Die Prüfung ist schwer. = Eksāmens er grūts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1336

**Card ID:** b1-untersuchung
**Field:** study.comparison[2].example
**DE konteksts:** Untersuchung
**CURRENT (DA):** Die Forschung ist wichtig. = Pētniecība ir svarīga.
**PROPOSED (DA):** Die Forschung ist wichtig. = Pētniecība er svarīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1344

**Card ID:** b1-verändern
**Field:** study.comparison[0].example
**DE konteksts:** verändern
**CURRENT (DA):** Das verändert die Situation. = Tas maina situāciju.
**PROPOSED (DA):** Das verändert die Situation. = Tas maina situāciju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1345

**Card ID:** b1-verändern
**Field:** study.comparison[1].example
**DE konteksts:** verändern
**CURRENT (DA):** Ich ändere den Termin. = Es mainu termiņu.
**PROPOSED (DA):** Ich ändere den Termin. = Jeg mainu termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1346

**Card ID:** b1-verändern
**Field:** study.comparison[2].example
**DE konteksts:** verändern
**CURRENT (DA):** Alles verändert sich. = Viss mainās.
**PROPOSED (DA):** Alles verändert sich. = Byen ændrer sig hurtigt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1352

**Card ID:** b1-verband
**Field:** study.comparison[0].example
**DE konteksts:** Verband
**CURRENT (DA):** Der Verband ist sauber. = Pārsējs ir tīrs.
**PROPOSED (DA):** Der Verband ist sauber. = Pārsējs er tīrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1353

**Card ID:** b1-verband
**Field:** study.comparison[1].example
**DE konteksts:** Verband
**CURRENT (DA):** Der Verein hat viele Mitglieder. = Biedrībai ir daudz biedru.
**PROPOSED (DA):** Der Verein hat viele Mitglieder. = Biedrībai er daudz biedru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1355

**Card ID:** b1-verbindung
**Field:** study.comparison[1].example
**DE konteksts:** Verbindung
**CURRENT (DA):** Der Anschluss funktioniert. = Pieslēgums darbojas.
**PROPOSED (DA):** Der Anschluss funktioniert. = Pieslēgums darbojas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1356

**Card ID:** b1-verbindung
**Field:** study.comparison[2].example
**DE konteksts:** Verbindung
**CURRENT (DA):** Der Verband ist sauber. = Pārsējs ir tīrs.
**PROPOSED (DA):** Der Verband ist sauber. = Pārsējs er tīrs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1361

**Card ID:** b1-verbrennen
**Field:** study.comparison[0].example
**DE konteksts:** verbrennen
**CURRENT (DA):** Das Papier verbrennt. = Papīrs sadeg.
**PROPOSED (DA):** Das Papier verbrennt. = Papīrs sadeg.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1367

**Card ID:** b1-verderben
**Field:** study.comparison[0].example
**DE konteksts:** verderben
**CURRENT (DA):** Die Milch ist verdorben. = Piens ir sabojājies.
**PROPOSED (DA):** Die Milch ist verdorben. = Mælken er fordærvet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1368

**Card ID:** b1-verderben
**Field:** study.comparison[1].example
**DE konteksts:** verderben
**CURRENT (DA):** Er macht das Handy kaputt. = Viņš sabojā telefonu.
**PROPOSED (DA):** Er macht das Handy kaputt. = Viņš sabojā telefonu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1369

**Card ID:** b1-verderben
**Field:** study.comparison[2].example
**DE konteksts:** verderben
**CURRENT (DA):** Die Milch wird schlecht. = Piens sabojājas.
**PROPOSED (DA):** Die Milch wird schlecht. = Piens sabojājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1377

**Card ID:** b1-verfolgen
**Field:** study.comparison[0].example
**DE konteksts:** verfolgen
**CURRENT (DA):** Ich verfolge die Nachrichten. = Es sekoju līdzi ziņām.
**PROPOSED (DA):** Ich verfolge die Nachrichten. = Jeg følger nyhederne hver aften.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1378

**Card ID:** b1-verfolgen
**Field:** study.comparison[2].example
**DE konteksts:** verfolgen
**CURRENT (DA):** Ich beobachte die Straße. = Es vēroju ielu.
**PROPOSED (DA):** Ich beobachte die Straße. = Jeg vēroju ielu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1386

**Card ID:** b1-verhältnis
**Field:** study.comparison[0].example
**DE konteksts:** Verhältnis
**CURRENT (DA):** Das Verhältnis ist gut. = Attiecības ir labas.
**PROPOSED (DA):** Das Verhältnis ist gut. = Attiecības er labas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1387

**Card ID:** b1-verhältnis
**Field:** study.comparison[1].example
**DE konteksts:** Verhältnis
**CURRENT (DA):** Ihre Beziehung ist stabil. = Viņu attiecības ir stabilas.
**PROPOSED (DA):** Ihre Beziehung ist stabil. = Viņu attiecības er stabilas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1388

**Card ID:** b1-verhältnis
**Field:** study.comparison[2].example
**DE konteksts:** Verhältnis
**CURRENT (DA):** Der Anteil ist groß. = Daļa ir liela.
**PROPOSED (DA):** Der Anteil ist groß. = Daļa er liela.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1396

**Card ID:** b1-verlegen
**Field:** study.comparison[0].example
**DE konteksts:** verlegen
**CURRENT (DA):** Ich habe den Schlüssel verlegt. = Es nevaru atrast atslēgu.
**PROPOSED (DA):** Ich habe den Schlüssel verlegt. = Jeg har lagt nøglen et sted, og jeg kan ikke finde den.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1397

**Card ID:** b1-verlegen
**Field:** study.comparison[1].example
**DE konteksts:** verlegen
**CURRENT (DA):** Wir verschieben den Termin. = Mēs pārceļam termiņu.
**PROPOSED (DA):** Wir verschieben den Termin. = Vi pārceļam termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1398

**Card ID:** b1-verlegen
**Field:** study.comparison[2].example
**DE konteksts:** verlegen
**CURRENT (DA):** Ich verliere den Schlüssel. = Es pazaudēju atslēgu.
**PROPOSED (DA):** Ich verliere den Schlüssel. = Jeg pazaudēju nøgle.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1404

**Card ID:** b1-verletzen
**Field:** study.comparison[0].example
**DE konteksts:** verletzen
**CURRENT (DA):** Er verletzt sich. = Viņš savainojas.
**PROPOSED (DA):** Er verletzt sich. = Han skadede sit knæ, mens han dyrkede sport.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1405

**Card ID:** b1-verletzen
**Field:** study.comparison[1].example
**DE konteksts:** verletzen
**CURRENT (DA):** Er beleidigt mich. = Viņš mani apvaino.
**PROPOSED (DA):** Er beleidigt mich. = Viņš mani apvaino.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1406

**Card ID:** b1-verletzen
**Field:** study.comparison[2].example
**DE konteksts:** verletzen
**CURRENT (DA):** Er bricht die Regel. = Viņš pārkāpj noteikumu.
**PROPOSED (DA):** Er bricht die Regel. = Viņš pārkāpj noteikumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1414

**Card ID:** b1-versichern
**Field:** study.comparison[2].example
**DE konteksts:** versichern
**CURRENT (DA):** Ich bestätige den Termin. = Es apstiprinu termiņu.
**PROPOSED (DA):** Ich bestätige den Termin. = Jeg apstiprinu termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1421

**Card ID:** b1-vertreten
**Field:** study.comparison[0].example
**DE konteksts:** vertreten
**CURRENT (DA):** Sie vertritt die Firma. = Viņa pārstāv uzņēmumu.
**PROPOSED (DA):** Sie vertritt die Firma. = Hun repræsenterer virksomheden på udstillingen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1422

**Card ID:** b1-vertreten
**Field:** study.comparison[1].example
**DE konteksts:** vertreten
**CURRENT (DA):** Das ersetzt den alten Plan. = Tas aizstāj veco plānu.
**PROPOSED (DA):** Das ersetzt den alten Plan. = Tas aizstāj veco plānu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1423

**Card ID:** b1-vertreten
**Field:** study.comparison[2].example
**DE konteksts:** vertreten
**CURRENT (DA):** Die Grafik stellt Daten dar. = Grafiks attēlo datus.
**PROPOSED (DA):** Die Grafik stellt Daten dar. = Grafiks attēlo datus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1431

**Card ID:** b1-verwandte
**Field:** study.comparison[0].example
**DE konteksts:** Verwandte
**CURRENT (DA):** Er ist mein Verwandter. = Viņš ir mans radinieks.
**PROPOSED (DA):** Er ist mein Verwandter. = Viņš er mans radinieks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1432

**Card ID:** b1-verwandte
**Field:** study.comparison[1].example
**DE konteksts:** Verwandte
**CURRENT (DA):** Sie ist meine Verwandte. = Viņa ir mana radiniece.
**PROPOSED (DA):** Sie ist meine Verwandte. = Hun er mana radiniece.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1433

**Card ID:** b1-verwandte
**Field:** study.comparison[2].example
**DE konteksts:** Verwandte
**CURRENT (DA):** Meine Verwandten kommen. = Mani radinieki nāk.
**PROPOSED (DA):** Meine Verwandten kommen. = Mine slægtninge bor i Letland.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1434

**Card ID:** b1-verwandte-2
**Field:** study.comparison[0].example
**DE konteksts:** Verwandte
**CURRENT (DA):** Sie ist meine Verwandte. = Viņa ir mana radiniece.
**PROPOSED (DA):** Sie ist meine Verwandte. = Hun er mana radiniece.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1435

**Card ID:** b1-verwandte-2
**Field:** study.comparison[1].example
**DE konteksts:** Verwandte
**CURRENT (DA):** Er ist mein Verwandter. = Viņš ir mans radinieks.
**PROPOSED (DA):** Er ist mein Verwandter. = Viņš er mans radinieks.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1436

**Card ID:** b1-verwandte-2
**Field:** study.comparison[2].example
**DE konteksts:** Verwandte
**CURRENT (DA):** Meine Verwandten kommen. = Mani radinieki nāk.
**PROPOSED (DA):** Meine Verwandten kommen. = Mine slægtninge bor i Letland.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1437

**Card ID:** b1-vorkommen
**Field:** study.comparison[0].example
**DE konteksts:** vorkommen
**CURRENT (DA):** Das kommt oft vor. = Tas bieži gadās.
**PROPOSED (DA):** Das kommt oft vor. = Tas bieži gadās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1438

**Card ID:** b1-vorkommen
**Field:** study.comparison[2].example
**DE konteksts:** vorkommen
**CURRENT (DA):** Das scheint richtig. = Tas šķiet pareizi.
**PROPOSED (DA):** Das scheint richtig. = Tas šķiet pareizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1444

**Card ID:** b1-vorstellung
**Field:** study.comparison[0].example
**DE konteksts:** Vorstellung
**CURRENT (DA):** Die Vorstellung beginnt. = Izrāde sākas.
**PROPOSED (DA):** Die Vorstellung beginnt. = Showet starter klokken otte.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1445

**Card ID:** b1-vorstellung
**Field:** study.comparison[2].example
**DE konteksts:** Vorstellung
**CURRENT (DA):** Die Aufführung war gut. = Izrāde bija laba.
**PROPOSED (DA):** Die Aufführung war gut. = Izrāde bija laba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1451

**Card ID:** b1-vorziehen
**Field:** study.comparison[0].example
**DE konteksts:** vorziehen
**CURRENT (DA):** Ich ziehe Tee vor. = Es dodu priekšroku tējai.
**PROPOSED (DA):** Ich ziehe Tee vor. = Jeg dodu priekšroku tējai.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1452

**Card ID:** b1-vorziehen
**Field:** study.comparison[1].example
**DE konteksts:** vorziehen
**CURRENT (DA):** Ich bevorzuge Tee. = Es dodu priekšroku tējai.
**PROPOSED (DA):** Ich bevorzuge Tee. = Jeg dodu priekšroku tējai.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1453

**Card ID:** b1-vorziehen
**Field:** study.comparison[2].example
**DE konteksts:** vorziehen
**CURRENT (DA):** Wir verschieben den Termin. = Mēs pārceļam termiņu.
**PROPOSED (DA):** Wir verschieben den Termin. = Vi pārceļam termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1459

**Card ID:** b1-wache
**Field:** study.comparison[1].example
**DE konteksts:** Wache
**CURRENT (DA):** Der Wächter kontrolliert die Tür. = Sargs pārbauda durvis.
**PROPOSED (DA):** Der Wächter kontrolliert die Tür. = Sargs pārbauda durvis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1460

**Card ID:** b1-wache
**Field:** study.comparison[2].example
**DE konteksts:** Wache
**CURRENT (DA):** Der Hund wacht. = Suns sargā.
**PROPOSED (DA):** Der Hund wacht. = Suns sargā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1463

**Card ID:** b1-wachen
**Field:** study.comparison[0].example
**DE konteksts:** wachen
**CURRENT (DA):** Der Hund wacht. = Suns sargā.
**PROPOSED (DA):** Der Hund wacht. = Hunden vogter huset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1464

**Card ID:** b1-wachen
**Field:** study.comparison[2].example
**DE konteksts:** wachen
**CURRENT (DA):** Sie bewachen das Haus. = Viņi apsargā māju.
**PROPOSED (DA):** Sie bewachen das Haus. = Viņi apsargā māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1468

**Card ID:** b1-wagen
**Field:** study.comparison[0].example
**DE konteksts:** Wagen
**CURRENT (DA):** Der Wagen ist neu. = Automašīna ir jauna.
**PROPOSED (DA):** Der Wagen ist neu. = Automašīna er jauna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1469

**Card ID:** b1-wagen
**Field:** study.comparison[2].example
**DE konteksts:** Wagen
**CURRENT (DA):** Das Auto steht da. = Automašīna stāv tur.
**PROPOSED (DA):** Das Auto steht da. = Automašīna stāv der.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1473

**Card ID:** b1-wechsel
**Field:** study.comparison[0].example
**DE konteksts:** Wechsel
**CURRENT (DA):** Der Wechsel ist wichtig. = Maiņa ir svarīga.
**PROPOSED (DA):** Der Wechsel ist wichtig. = Maiņa er svarīga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1474

**Card ID:** b1-wechsel
**Field:** study.comparison[1].example
**DE konteksts:** Wechsel
**CURRENT (DA):** Die Änderung ist klein. = Izmaiņa ir maza.
**PROPOSED (DA):** Die Änderung ist klein. = Izmaiņa er maza.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1481

**Card ID:** b1-weder
**Field:** study.comparison[0].example
**DE konteksts:** weder
**CURRENT (DA):** Weder Kaffee noch Tee. = Nedz kafija, nedz tēja.
**PROPOSED (DA):** Weder Kaffee noch Tee. = Jeg drikker ikke kaffe eller te.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1482

**Card ID:** b1-weder
**Field:** study.comparison[1].example
**DE konteksts:** weder
**CURRENT (DA):** Entweder Tee oder Kaffee. = Vai nu tēja, vai kafija.
**PROPOSED (DA):** Entweder Tee oder Kaffee. = Vai nu tēja, om kafija.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1483

**Card ID:** b1-weder
**Field:** study.comparison[2].example
**DE konteksts:** weder
**CURRENT (DA):** Sowohl Tee als auch Kaffee. = Gan tēja, gan kafija.
**PROPOSED (DA):** Sowohl Tee als auch Kaffee. = Gan tēja, gan kafija.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1484

**Card ID:** b1-welle
**Field:** study.comparison[1].example
**DE konteksts:** Welle
**CURRENT (DA):** Die Wogen sind stark. = Viļņi ir spēcīgi.
**PROPOSED (DA):** Die Wogen sind stark. = Viļņi er spēcīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1485

**Card ID:** b1-welle
**Field:** study.comparison[2].example
**DE konteksts:** Welle
**CURRENT (DA):** Die Achse ist kaputt. = Ass ir salūzusi.
**PROPOSED (DA):** Die Achse ist kaputt. = Ass er salūzusi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1488

**Card ID:** b1-wenden
**Field:** study.comparison[1].example
**DE konteksts:** wenden
**CURRENT (DA):** Dreh den Schlüssel. = Pagriez atslēgu.
**PROPOSED (DA):** Dreh den Schlüssel. = Pagriez nøgle.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1489

**Card ID:** b1-wenden
**Field:** study.comparison[2].example
**DE konteksts:** wenden
**CURRENT (DA):** Ich wende mich an dich. = Es vēršos pie tevis.
**PROPOSED (DA):** Ich wende mich an dich. = Jeg vēršos pie tevis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1494

**Card ID:** b1-werben
**Field:** study.comparison[0].example
**DE konteksts:** werben
**CURRENT (DA):** Die Firma wirbt. = Uzņēmums reklamē.
**PROPOSED (DA):** Die Firma wirbt. = En virksomhed promoverer et nyt produkt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1495

**Card ID:** b1-werben
**Field:** study.comparison[2].example
**DE konteksts:** werben
**CURRENT (DA):** Ich reklamiere den Fehler. = Es iesniedzu pretenziju par kļūdu.
**PROPOSED (DA):** Ich reklamiere den Fehler. = Jeg indsender pretenziju par kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1500

**Card ID:** b1-werk
**Field:** study.comparison[0].example
**DE konteksts:** Werk
**CURRENT (DA):** Das Werk ist bekannt. = Darbs ir pazīstams.
**PROPOSED (DA):** Das Werk ist bekannt. = Forfatterens arbejde er kendt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1501

**Card ID:** b1-werk
**Field:** study.comparison[1].example
**DE konteksts:** Werk
**CURRENT (DA):** Die Arbeit ist schwer. = Darbs ir grūts.
**PROPOSED (DA):** Die Arbeit ist schwer. = Darbs er grūts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1502

**Card ID:** b1-werk
**Field:** study.comparison[2].example
**DE konteksts:** Werk
**CURRENT (DA):** Die Fabrik ist groß. = Rūpnīca ir liela.
**PROPOSED (DA):** Die Fabrik ist groß. = Rūpnīca er liela.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1507

**Card ID:** b1-zeugnis
**Field:** study.comparison[0].example
**DE konteksts:** Zeugnis
**CURRENT (DA):** Das Zeugnis ist gut. = Liecība ir laba.
**PROPOSED (DA):** Das Zeugnis ist gut. = Liecība er laba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1508

**Card ID:** b1-zeugnis
**Field:** study.comparison[1].example
**DE konteksts:** Zeugnis
**CURRENT (DA):** Ich brauche eine Bescheinigung. = Man vajag izziņu.
**PROPOSED (DA):** Ich brauche eine Bescheinigung. = Jeg har vajag izziņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1509

**Card ID:** b1-zeugnis
**Field:** study.comparison[2].example
**DE konteksts:** Zeugnis
**CURRENT (DA):** Der Zeuge spricht. = Liecinieks runā.
**PROPOSED (DA):** Der Zeuge spricht. = Liecinieks runā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1515

**Card ID:** b1-zugeben
**Field:** study.comparison[0].example
**DE konteksts:** zugeben
**CURRENT (DA):** Ich gebe es zu. = Es to atzīstu.
**PROPOSED (DA):** Ich gebe es zu. = Jeg to atzīstu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1516

**Card ID:** b1-zugeben
**Field:** study.comparison[1].example
**DE konteksts:** zugeben
**CURRENT (DA):** Gib Salz dazu. = Pievieno sāli.
**PROPOSED (DA):** Gib Salz dazu. = Tilsæt lidt mere salt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1517

**Card ID:** b1-zugeben
**Field:** study.comparison[2].example
**DE konteksts:** zugeben
**CURRENT (DA):** Er gesteht den Fehler. = Viņš atzīst kļūdu.
**PROPOSED (DA):** Er gesteht den Fehler. = Viņš atzīst kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1523

**Card ID:** b1-zünden
**Field:** study.comparison[0].example
**DE konteksts:** zünden
**CURRENT (DA):** Die Idee zündet. = Ideja nostrādā.
**PROPOSED (DA):** Die Idee zündet. = Ideja nostrādā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1529

**Card ID:** b1-zusammenhang
**Field:** study.comparison[0].example
**DE konteksts:** Zusammenhang
**CURRENT (DA):** Der Zusammenhang ist klar. = Sakarība ir skaidra.
**PROPOSED (DA):** Der Zusammenhang ist klar. = In context the sentence becomes clear.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1530

**Card ID:** b1-zusammenhang
**Field:** study.comparison[2].example
**DE konteksts:** Zusammenhang
**CURRENT (DA):** Der Kontext hilft. = Konteksts palīdz.
**PROPOSED (DA):** Der Kontext hilft. = Konteksts palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1535

**Card ID:** b1-beruf
**Field:** study.comparison[0].example
**DE konteksts:** Beruf
**CURRENT (DA):** Was bist du von Beruf? = Kāda ir tava profesija?
**PROPOSED (DA):** Was bist du von Beruf? = Hvad er dit erhverv
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1536

**Card ID:** b1-beruf
**Field:** study.comparison[2].example
**DE konteksts:** Beruf
**CURRENT (DA):** Er sucht einen Job. = Viņš meklē darbu.
**PROPOSED (DA):** Er sucht einen Job. = Hun leder efter et nyt erhverv.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1537

**Card ID:** b1-beruf
**Field:** study.comparison[3].example
**DE konteksts:** Beruf
**CURRENT (DA):** Sie macht eine Ausbildung. = Viņa mācās profesiju.
**PROPOSED (DA):** Sie macht eine Ausbildung. = Hun mācās profesiju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1538

**Card ID:** b1-beruf
**Field:** study.comparison[4].example
**DE konteksts:** Beruf
**CURRENT (DA):** Lesen ist eine schöne Beschäftigung. = Lasīšana ir patīkama nodarbošanās.
**PROPOSED (DA):** Lesen ist eine schöne Beschäftigung. = Lasīšana er patīkama nodarbošanās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1539

**Card ID:** b1-steuer
**Field:** study.comparison[1].example
**DE konteksts:** Steuer
**CURRENT (DA):** Das Steuer ist fest. = Stūre ir stingra. Plural: die Steuer.
**PROPOSED (DA):** Das Steuer ist fest. = He holds the steering wheel tightly.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1540

**Card ID:** b1-steuer
**Field:** study.comparison[2].example
**DE konteksts:** Steuer
**CURRENT (DA):** Die Abgabe ist fällig. = Nodeva ir jāmaksā.
**PROPOSED (DA):** Die Abgabe ist fällig. = Nodeva er jāmaksā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1541

**Card ID:** b1-steuer-2
**Field:** study.comparison[0].example
**DE konteksts:** Steuer
**CURRENT (DA):** Das Steuer ist fest. = Stūre ir stingra. Plural: die Steuer.
**PROPOSED (DA):** Das Steuer ist fest. = He holds the steering wheel tightly.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1542

**Card ID:** b1-steuer-2
**Field:** study.comparison[2].example
**DE konteksts:** Steuer
**CURRENT (DA):** Das Lenkrad ist warm. = Stūre ir silta.
**PROPOSED (DA):** Das Lenkrad ist warm. = Stūre er silta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1558

**Card ID:** b1-sich-befinden-study
**Field:** study.comparison[0].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Büro befindet sich im zweiten Stock. = Birojs atrodas otrajā stāvā.
**PROPOSED (DA):** Das Büro befindet sich im zweiten Stock. = Toilettet er på første sal.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1559

**Card ID:** b1-sich-befinden-study
**Field:** study.comparison[1].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Büro ist oben. = Birojs ir augšā.
**PROPOSED (DA):** Das Büro ist oben. = Birojs er augšā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1560

**Card ID:** b1-sich-befinden-study
**Field:** study.comparison[2].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Buch liegt auf dem Tisch. = Grāmata atrodas uz galda.
**PROPOSED (DA):** Das Buch liegt auf dem Tisch. = Bogen ligger på bordet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1561

**Card ID:** b1-sich-befinden-study
**Field:** study.comparison[3].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Das Auto steht vor dem Haus. = Auto stāv pie mājas.
**PROPOSED (DA):** Das Auto steht vor dem Haus. = Auto stāv pie mājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B1-1562

**Card ID:** b1-sich-befinden-study
**Field:** study.comparison[4].example
**DE konteksts:** sich befinden
**CURRENT (DA):** Ich fühle mich gut. = Es jūtos labi.
**PROPOSED (DA):** Ich fühle mich gut. = Jeg har det godt i dag
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

### 5.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes

#### DA-B1-0004

**Card ID:** b1-anbauen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** anbauen
**CURRENT (DA):** plant
**PROPOSED (DA):** FJERN «plant»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0011

**Card ID:** b1-anbringen
**Field:** study.sectionAccents.examples.lv.purple.[1][1]
**DE konteksts:** anbringen
**CURRENT (DA):** lamp
**PROPOSED (DA):** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0012

**Card ID:** b1-anbringen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][1]
**DE konteksts:** anbringen
**CURRENT (DA):** install
**PROPOSED (DA):** FJERN «install»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0016

**Card ID:** b1-abbauen
**Field:** study.sectionAccents.examples.lv.purple.[0][0]
**DE konteksts:** abbauen
**CURRENT (DA):** reduce
**PROPOSED (DA):** FJERN «reduce»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0017

**Card ID:** b1-abbauen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][0]
**DE konteksts:** abbauen
**CURRENT (DA):** Reduce
**PROPOSED (DA):** FJERN «Reduce»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0018

**Card ID:** b1-abbauen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** abbauen
**CURRENT (DA):** Reduce
**PROPOSED (DA):** FJERN «Reduce»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0036

**Card ID:** b1-absatz
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** Absatz
**CURRENT (DA):** period
**PROPOSED (DA):** FJERN «period»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0037

**Card ID:** b1-abschluss
**Field:** study.examples[0].lv
**DE konteksts:** Abschluss
**CURRENT (DA):** Afslutningen af ​​projektet var vellykket.
**PROPOSED (DA):** Afslutningen af projektet var vellykket.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0043

**Card ID:** b1-absetzen
**Field:** study.important.text
**DE konteksts:** absetzen
**CURRENT (DA):** Absetzen er ikke en generisk 'at sælge'. Betydningen af ​​salg er mere specifik i forretningssammenhæng.
**PROPOSED (DA):** Absetzen er ikke en generisk 'at sælge'. Betydningen af salg er mere specifik i forretningssammenhæng.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0051

**Card ID:** b1-anschluss
**Field:** study.sectionAccents.examples.lv.purple.[0][1]
**DE konteksts:** Anschluss
**CURRENT (DA):** missed
**PROPOSED (DA):** FJERN «missed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0052

**Card ID:** b1-anschluss
**Field:** study.sectionAccents.examples.lv.purple.[1][1]
**DE konteksts:** Anschluss
**CURRENT (DA):** missed
**PROPOSED (DA):** FJERN «missed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0057

**Card ID:** b1-antrag
**Field:** study.sectionAccents.comparison.meaning.purple.[0][1]
**DE konteksts:** Antrag
**CURRENT (DA):** Job
**PROPOSED (DA):** FJERN «Job»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0068

**Card ID:** b1-sich-aufhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sich aufhalten
**CURRENT (DA):** to stay
**PROPOSED (DA):** FJERN «to stay»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0069

**Card ID:** b1-sich-aufhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** sich aufhalten
**CURRENT (DA):** delay
**PROPOSED (DA):** FJERN «delay»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0075

**Card ID:** b1-aussprache
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Aussprache
**CURRENT (DA):** exchange of ideas
**PROPOSED (DA):** FJERN «exchange of ideas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0076

**Card ID:** b1-ausstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** ausstellen
**CURRENT (DA):** izsniegt
**PROPOSED (DA):** FJERN «izsniegt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0077

**Card ID:** b1-ausstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** ausstellen
**CURRENT (DA):** write out
**PROPOSED (DA):** FJERN «write out»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0078

**Card ID:** b1-ausstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** ausstellen
**CURRENT (DA):** to exhibit
**PROPOSED (DA):** FJERN «to exhibit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0081

**Card ID:** b1-ausüben
**Field:** study.sectionAccents.comparison.meaning.purple.[0][0]
**DE konteksts:** ausüben
**CURRENT (DA):** Implement
**PROPOSED (DA):** FJERN «Implement»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0085

**Card ID:** b1-auszug
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Auszug
**CURRENT (DA):** izraksts
**PROPOSED (DA):** FJERN «izraksts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0086

**Card ID:** b1-auszug
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Auszug
**CURRENT (DA):** moving out
**PROPOSED (DA):** FJERN «moving out»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0090

**Card ID:** b1-bau
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Bau
**CURRENT (DA):** construction
**PROPOSED (DA):** FJERN «construction»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0091

**Card ID:** b1-bau
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Bau
**CURRENT (DA):** celtne
**PROPOSED (DA):** FJERN «celtne»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0092

**Card ID:** b1-bau
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Bau
**CURRENT (DA):** at the construction site
**PROPOSED (DA):** FJERN «at the construction site»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0093

**Card ID:** b1-Baumwipfel-250
**Field:** lv
**DE konteksts:** Baumwipfel
**CURRENT (DA):** Toppen af ​​et træ
**PROPOSED (DA):** Toppen af et træ
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0097

**Card ID:** b1-becken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Becken
**CURRENT (DA):** in the pool
**PROPOSED (DA):** FJERN «in the pool»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0098

**Card ID:** b1-becken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Becken
**CURRENT (DA):** iegurnis
**PROPOSED (DA):** FJERN «iegurnis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0099

**Card ID:** b1-becken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Becken
**CURRENT (DA):** tvertne
**PROPOSED (DA):** FJERN «tvertne»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0100

**Card ID:** b1-becken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[3][0]
**DE konteksts:** Becken
**CURRENT (DA):** a bowl
**PROPOSED (DA):** FJERN «a bowl»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0104

**Card ID:** b1-bedeutend
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** bedeutend
**CURRENT (DA):** significant
**PROPOSED (DA):** FJERN «significant»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0105

**Card ID:** b1-bedeutend
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** bedeutend
**CURRENT (DA):** remarkable
**PROPOSED (DA):** FJERN «remarkable»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0106

**Card ID:** b1-bedeutend
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** bedeutend
**CURRENT (DA):** considerably
**PROPOSED (DA):** FJERN «considerably»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0109

**Card ID:** b1-sich-bedienen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sich bedienen
**CURRENT (DA):** take it yourself
**PROPOSED (DA):** FJERN «take it yourself»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0110

**Card ID:** b1-sich-bedienen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** sich bedienen
**CURRENT (DA):** apkalpot
**PROPOSED (DA):** FJERN «apkalpot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0114

**Card ID:** b1-behandeln
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** behandeln
**CURRENT (DA):** to treat
**PROPOSED (DA):** FJERN «to treat»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0115

**Card ID:** b1-behandeln
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** behandeln
**CURRENT (DA):** behave
**PROPOSED (DA):** FJERN «behave»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0116

**Card ID:** b1-behandeln
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** behandeln
**CURRENT (DA):** apspriest
**PROPOSED (DA):** FJERN «apspriest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0117

**Card ID:** b1-behandeln
**Field:** study.sectionAccents.important.purple.[0]
**DE konteksts:** behandeln
**CURRENT (DA):** process
**PROPOSED (DA):** FJERN «process»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0118

**Card ID:** b1-behandeln
**Field:** study.sectionAccents.important.purple.[1]
**DE konteksts:** behandeln
**CURRENT (DA):** result
**PROPOSED (DA):** FJERN «result»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0122

**Card ID:** b1-belegen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][1]
**DE konteksts:** belegen
**CURRENT (DA):** book
**PROPOSED (DA):** FJERN «book»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0126

**Card ID:** b1-bemerken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** bemerken
**CURRENT (DA):** error
**PROPOSED (DA):** FJERN «error»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0127

**Card ID:** b1-bemerken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** bemerken
**CURRENT (DA):** changes
**PROPOSED (DA):** FJERN «changes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0128

**Card ID:** b1-bemerken
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** bemerken
**CURRENT (DA):** faktu
**PROPOSED (DA):** FJERN «faktu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0135

**Card ID:** b1-beraten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** beraten
**CURRENT (DA):** eksperts
**PROPOSED (DA):** FJERN «eksperts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0136

**Card ID:** b1-beraten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** beraten
**CURRENT (DA):** grupa
**PROPOSED (DA):** FJERN «grupa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0137

**Card ID:** b1-beraten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** beraten
**CURRENT (DA):** people
**PROPOSED (DA):** FJERN «people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0139

**Card ID:** b1-bereich
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Bereich
**CURRENT (DA):** zona
**PROPOSED (DA):** FJERN «zona»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0143

**Card ID:** b1-berichten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** berichten
**CURRENT (DA):** notikumiem
**PROPOSED (DA):** FJERN «notikumiem»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0144

**Card ID:** b1-berichten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** berichten
**CURRENT (DA):** results
**PROPOSED (DA):** FJERN «results»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0147

**Card ID:** b1-sich-beruhigen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sich beruhigen
**CURRENT (DA):** will calm down
**PROPOSED (DA):** FJERN «will calm down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0148

**Card ID:** b1-sich-beruhigen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** sich beruhigen
**CURRENT (DA):** nomierini
**PROPOSED (DA):** FJERN «nomierini»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0152

**Card ID:** b1-berühmtheit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Berühmtheit
**CURRENT (DA):** celebrities
**PROPOSED (DA):** FJERN «celebrities»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0156

**Card ID:** b1-beschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** beschließen
**CURRENT (DA):** decision
**PROPOSED (DA):** FJERN «decision»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0157

**Card ID:** b1-beschließen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** beschließen
**CURRENT (DA):** to close
**PROPOSED (DA):** FJERN «to close»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0161

**Card ID:** b1-beschwerde
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Beschwerde
**CURRENT (DA):** complaint
**PROPOSED (DA):** FJERN «complaint»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0162

**Card ID:** b1-beschwerde
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Beschwerde
**CURRENT (DA):** kaites
**PROPOSED (DA):** FJERN «kaites»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0166

**Card ID:** b1-besorgen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** besorgen
**CURRENT (DA):** to get
**PROPOSED (DA):** FJERN «to get»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0167

**Card ID:** b1-besorgen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** besorgen
**CURRENT (DA):** arrange
**PROPOSED (DA):** FJERN «arrange»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0171

**Card ID:** b1-bestehen
**Field:** study.important.text
**DE konteksts:** bestehen
**CURRENT (DA):** Betydningen af ​​besten er meget ofte defineret af en præposition: aus, auf eller genstand for eksamen.
**PROPOSED (DA):** Betydningen af besten er meget ofte defineret af en præposition: aus, auf eller genstand for eksamen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0172

**Card ID:** b1-bestehen
**Field:** study.sectionAccents.examples.lv.purple.[0][3]
**DE konteksts:** bestehen
**CURRENT (DA):** insist
**PROPOSED (DA):** FJERN «insist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0173

**Card ID:** b1-bestehen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** bestehen
**CURRENT (DA):** Insist
**PROPOSED (DA):** FJERN «Insist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0174

**Card ID:** b1-bestehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** bestehen
**CURRENT (DA):** settle
**PROPOSED (DA):** FJERN «settle»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0175

**Card ID:** b1-bestehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** bestehen
**CURRENT (DA):** to consist of
**PROPOSED (DA):** FJERN «to consist of»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0176

**Card ID:** b1-bestehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** bestehen
**CURRENT (DA):** to insist
**PROPOSED (DA):** FJERN «to insist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0179

**Card ID:** b1-bestimmen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** bestimmen
**CURRENT (DA):** cenu
**PROPOSED (DA):** FJERN «cenu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0180

**Card ID:** b1-bestimmen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** bestimmen
**CURRENT (DA):** devu
**PROPOSED (DA):** FJERN «devu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0184

**Card ID:** b1-betrieb
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Betrieb
**CURRENT (DA):** company
**PROPOSED (DA):** FJERN «company»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0189

**Card ID:** b1-beziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** beziehen
**CURRENT (DA):** to receive
**PROPOSED (DA):** FJERN «to receive»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0190

**Card ID:** b1-beziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** beziehen
**CURRENT (DA):** move in
**PROPOSED (DA):** FJERN «move in»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0191

**Card ID:** b1-beziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** beziehen
**CURRENT (DA):** attiekties
**PROPOSED (DA):** FJERN «attiekties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0195

**Card ID:** b1-bieten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** bieten
**CURRENT (DA):** offers
**PROPOSED (DA):** FJERN «offers»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0198

**Card ID:** b1-blase
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Blase
**CURRENT (DA):** bladder
**PROPOSED (DA):** FJERN «bladder»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0199

**Card ID:** b1-blase
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Blase
**CURRENT (DA):** bubbles
**PROPOSED (DA):** FJERN «bubbles»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0202

**Card ID:** b1-block
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Block
**CURRENT (DA):** pad
**PROPOSED (DA):** FJERN «pad»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0203

**Card ID:** b1-block
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Block
**CURRENT (DA):** bloks
**PROPOSED (DA):** FJERN «bloks»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0207

**Card ID:** b1-bloß
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** bloß
**CURRENT (DA):** kails/pliks
**PROPOSED (DA):** FJERN «kails/pliks»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0214

**Card ID:** b1-brand
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Brand
**CURRENT (DA):** fire
**PROPOSED (DA):** FJERN «fire»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0218

**Card ID:** b1-bund
**Field:** study.important.text
**DE konteksts:** Bund
**CURRENT (DA):** Betydningen af ​​bundtet skal genkendes af objektet: Schlüssel, Kräuter, Briefe osv.
**PROPOSED (DA):** Betydningen af bundtet skal genkendes af objektet: Schlüssel, Kräuter, Briefe osv.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0219

**Card ID:** b1-bund
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Bund
**CURRENT (DA):** federation
**PROPOSED (DA):** FJERN «federation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0220

**Card ID:** b1-bund
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Bund
**CURRENT (DA):** bundle
**PROPOSED (DA):** FJERN «bundle»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0229

**Card ID:** b1-dahin
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** dahin
**CURRENT (DA):** movement
**PROPOSED (DA):** FJERN «movement»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0230

**Card ID:** b1-dahin
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** dahin
**CURRENT (DA):** location
**PROPOSED (DA):** FJERN «location»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0235

**Card ID:** b1-dank-study
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Dank
**CURRENT (DA):** atbildei
**PROPOSED (DA):** FJERN «atbildei»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0236

**Card ID:** b1-dank-study
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][1]
**DE konteksts:** Dank
**CURRENT (DA):** more formal
**PROPOSED (DA):** FJERN «more formal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0237

**Card ID:** b1-dank-study
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][1]
**DE konteksts:** Dank
**CURRENT (DA):** for gratitude
**PROPOSED (DA):** FJERN «for gratitude»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0243

**Card ID:** b1-darstellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** darstellen
**CURRENT (DA):** introduce yourself
**PROPOSED (DA):** FJERN «introduce yourself»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0252

**Card ID:** b1-druck
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Druck
**CURRENT (DA):** be under pressure
**PROPOSED (DA):** FJERN «be under pressure»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0253

**Card ID:** b1-druck
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Druck
**CURRENT (DA):** printing
**PROPOSED (DA):** FJERN «printing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0258

**Card ID:** b1-durchführen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** durchführen
**CURRENT (DA):** hold
**PROPOSED (DA):** FJERN «hold»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0262

**Card ID:** b1-eher
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** eher
**CURRENT (DA):** in the choice
**PROPOSED (DA):** FJERN «in the choice»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0263

**Card ID:** b1-eher
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** eher
**CURRENT (DA):** during
**PROPOSED (DA):** FJERN «during»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0265

**Card ID:** b1-einbrechen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einbrechen
**CURRENT (DA):** ielauzties
**PROPOSED (DA):** FJERN «ielauzties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0266

**Card ID:** b1-einbrechen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** einbrechen
**CURRENT (DA):** iebrukt
**PROPOSED (DA):** FJERN «iebrukt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0267

**Card ID:** b1-einbrechen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** einbrechen
**CURRENT (DA):** to join
**PROPOSED (DA):** FJERN «to join»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0268

**Card ID:** b1-eindeutig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** eindeutig
**CURRENT (DA):** there is no doubt
**PROPOSED (DA):** FJERN «there is no doubt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0271

**Card ID:** b1-eindruck
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Eindruck
**CURRENT (DA):** make a good impression
**PROPOSED (DA):** FJERN «make a good impression»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0273

**Card ID:** b1-einerlei
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einerlei
**CURRENT (DA):** more formal
**PROPOSED (DA):** FJERN «more formal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0279

**Card ID:** b1-einfahrt
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** Einfahrt
**CURRENT (DA):** Ramp
**PROPOSED (DA):** FJERN «Ramp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0280

**Card ID:** b1-einfahrt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Einfahrt
**CURRENT (DA):** iebraukt
**PROPOSED (DA):** FJERN «iebraukt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0281

**Card ID:** b1-einfahrt
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Einfahrt
**CURRENT (DA):** izbraukt
**PROPOSED (DA):** FJERN «izbraukt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0282

**Card ID:** b1-einfallen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einfallen
**CURRENT (DA):** comes to mind
**PROPOSED (DA):** FJERN «comes to mind»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0285

**Card ID:** b1-einfarbig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einfarbig
**CURRENT (DA):** one colour
**PROPOSED (DA):** FJERN «one colour»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0286

**Card ID:** b1-einfarbig
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** einfarbig
**CURRENT (DA):** many colours
**PROPOSED (DA):** FJERN «many colours»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0290

**Card ID:** b1-einfluss
**Field:** study.sectionAccents.examples.lv.purple.[0][2]
**DE konteksts:** Einfluss
**CURRENT (DA):** Social
**PROPOSED (DA):** FJERN «Social»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0291

**Card ID:** b1-einfluss
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Einfluss
**CURRENT (DA):** kurp?
**PROPOSED (DA):** FJERN «kurp?»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0292

**Card ID:** b1-einfügen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einfügen
**CURRENT (DA):** ievietot
**PROPOSED (DA):** FJERN «ievietot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0293

**Card ID:** b1-einfügen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** einfügen
**CURRENT (DA):** to fit in
**PROPOSED (DA):** FJERN «to fit in»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0297

**Card ID:** b1-einführen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][0]
**DE konteksts:** einführen
**CURRENT (DA):** Implement
**PROPOSED (DA):** FJERN «Implement»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0298

**Card ID:** b1-einführen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** einführen
**CURRENT (DA):** Introduce
**PROPOSED (DA):** FJERN «Introduce»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0299

**Card ID:** b1-einführen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** einführen
**CURRENT (DA):** metodi
**PROPOSED (DA):** FJERN «metodi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0300

**Card ID:** b1-einführen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[3][0]
**DE konteksts:** einführen
**CURRENT (DA):** preces
**PROPOSED (DA):** FJERN «preces»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0301

**Card ID:** b1-einführung
**Field:** study.examples[1].lv
**DE konteksts:** Einführung
**CURRENT (DA):** Implementeringen af ​​det nye system tager lang tid.
**PROPOSED (DA):** Implementeringen af det nye system tager lang tid.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0305

**Card ID:** b1-einführung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Einführung
**CURRENT (DA):** teksts
**PROPOSED (DA):** FJERN «teksts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0306

**Card ID:** b1-einführung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Einführung
**CURRENT (DA):** kurss
**PROPOSED (DA):** FJERN «kurss»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0307

**Card ID:** b1-einführung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[3][0]
**DE konteksts:** Einführung
**CURRENT (DA):** noteikumi
**PROPOSED (DA):** FJERN «noteikumi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0311

**Card ID:** b1-sich-eingewöhnen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][1]
**DE konteksts:** sich eingewöhnen
**CURRENT (DA):** Get
**PROPOSED (DA):** FJERN «Get»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0312

**Card ID:** b1-sich-eingewöhnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sich eingewöhnen
**CURRENT (DA):** at work
**PROPOSED (DA):** FJERN «at work»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0313

**Card ID:** b1-sich-eingewöhnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** sich eingewöhnen
**CURRENT (DA):** at school
**PROPOSED (DA):** FJERN «at school»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0314

**Card ID:** b1-sich-eingewöhnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** sich eingewöhnen
**CURRENT (DA):** instead of
**PROPOSED (DA):** FJERN «instead of»
**Problēma:** sectionAccents svešvalodu termins: EN
**Pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0321

**Card ID:** b1-einheimisch
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einheimisch
**CURRENT (DA):** augi
**PROPOSED (DA):** FJERN «augi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0322

**Card ID:** b1-einheimisch
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** einheimisch
**CURRENT (DA):** animals
**PROPOSED (DA):** FJERN «animals»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0323

**Card ID:** b1-einheimisch
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** einheimisch
**CURRENT (DA):** produkti
**PROPOSED (DA):** FJERN «produkti»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0327

**Card ID:** b1-einheit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Einheit
**CURRENT (DA):** unit of study
**PROPOSED (DA):** FJERN «unit of study»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0328

**Card ID:** b1-einheit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Einheit
**CURRENT (DA):** unit of measure
**PROPOSED (DA):** FJERN «unit of measure»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0329

**Card ID:** b1-einheit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Einheit
**CURRENT (DA):** modulis
**PROPOSED (DA):** FJERN «modulis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0333

**Card ID:** b1-längeneinheit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Längeneinheit
**CURRENT (DA):** garums
**PROPOSED (DA):** FJERN «garums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0334

**Card ID:** b1-längeneinheit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Längeneinheit
**CURRENT (DA):** unit
**PROPOSED (DA):** FJERN «unit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0335

**Card ID:** b1-längeneinheit
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Längeneinheit
**CURRENT (DA):** unit of length
**PROPOSED (DA):** FJERN «unit of length»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0336

**Card ID:** b1-einheitlich
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einheitlich
**CURRENT (DA):** for the same style
**PROPOSED (DA):** FJERN «for the same style»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0337

**Card ID:** b1-einheitlich
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** einheitlich
**CURRENT (DA):** order
**PROPOSED (DA):** FJERN «order»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0341

**Card ID:** b1-einholen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** einholen
**CURRENT (DA):** permission
**PROPOSED (DA):** FJERN «permission»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0342

**Card ID:** b1-einholen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[3][0]
**DE konteksts:** einholen
**CURRENT (DA):** runner
**PROPOSED (DA):** FJERN «runner»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0343

**Card ID:** b1-einsatz
**Field:** study.examples[0].lv
**DE konteksts:** Einsatz
**CURRENT (DA):** Brugen af ​​moderne teknologi sparer tid.
**PROPOSED (DA):** Brugen af moderne teknologi sparer tid.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0347

**Card ID:** b1-einsatz
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Einsatz
**CURRENT (DA):** involved
**PROPOSED (DA):** FJERN «involved»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0348

**Card ID:** b1-einsatz
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Einsatz
**CURRENT (DA):** izmantots
**PROPOSED (DA):** FJERN «izmantots»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0351

**Card ID:** b1-einsetzen
**Field:** study.sectionAccents.explanation.purple.[0]
**DE konteksts:** einsetzen
**CURRENT (DA):** involve
**PROPOSED (DA):** FJERN «involve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0352

**Card ID:** b1-einstellen
**Field:** study.examples[2].lv
**DE konteksts:** einstellen
**CURRENT (DA):** Udgivelsen af ​​avisen blev indstillet efter 50 år.
**PROPOSED (DA):** Udgivelsen af avisen blev indstillet efter 50 år.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0356

**Card ID:** b1-einstellen
**Field:** study.important.text
**DE konteksts:** einstellen
**CURRENT (DA):** Einstellen er ikke blot "sluk" • Betydningen af ​​afbrydelse refererer normalt til en handling, et problem eller en tjeneste.
**PROPOSED (DA):** Einstellen er ikke blot "sluk" • Betydningen af afbrydelse refererer normalt til en handling, et problem eller en tjeneste.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0360

**Card ID:** b1-eintreten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** eintreten
**CURRENT (DA):** in the room
**PROPOSED (DA):** FJERN «in the room»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0361

**Card ID:** b1-eintreten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** eintreten
**CURRENT (DA):** sekas
**PROPOSED (DA):** FJERN «sekas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0365

**Card ID:** b1-einziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** einziehen
**CURRENT (DA):** move in
**PROPOSED (DA):** FJERN «move in»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0366

**Card ID:** b1-einziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** einziehen
**CURRENT (DA):** collect
**PROPOSED (DA):** FJERN «collect»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0367

**Card ID:** b1-einziehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** einziehen
**CURRENT (DA):** ievilkt
**PROPOSED (DA):** FJERN «ievilkt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0369

**Card ID:** b1-empfangen
**Field:** study.tip.leftBlocks[0].text
**DE konteksts:** empfangen
**CURRENT (DA):** Empfangen af ​​en besked eller et signal • Empfangen = at modtage folk.
**PROPOSED (DA):** Empfangen af en besked eller et signal • Empfangen = at modtage folk.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0370

**Card ID:** b1-empfangen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** empfangen
**CURRENT (DA):** to admit
**PROPOSED (DA):** FJERN «to admit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0374

**Card ID:** b1-entfernen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** entfernen
**CURRENT (DA):** remove
**PROPOSED (DA):** FJERN «remove»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0375

**Card ID:** b1-entfernen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** entfernen
**CURRENT (DA):** moves away
**PROPOSED (DA):** FJERN «moves away»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0378

**Card ID:** b1-enthalten
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** enthalten
**CURRENT (DA):** Hold
**PROPOSED (DA):** FJERN «Hold»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0379

**Card ID:** b1-enthalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** enthalten
**CURRENT (DA):** inside
**PROPOSED (DA):** FJERN «inside»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0380

**Card ID:** b1-enthalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** enthalten
**CURRENT (DA):** included
**PROPOSED (DA):** FJERN «included»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0381

**Card ID:** b1-enthalten
**Field:** study.sectionAccents.important.purple.[0]
**DE konteksts:** enthalten
**CURRENT (DA):** hold
**PROPOSED (DA):** FJERN «hold»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0385

**Card ID:** b1-entkommen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** entkommen
**CURRENT (DA):** managed to escape
**PROPOSED (DA):** FJERN «managed to escape»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0389

**Card ID:** b1-entlassen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** entlassen
**CURRENT (DA):** choose by location
**PROPOSED (DA):** FJERN «choose by location»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0393

**Card ID:** b1-entsprechen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** entsprechen
**CURRENT (DA):** kam atbilst
**PROPOSED (DA):** FJERN «kam atbilst»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0396

**Card ID:** b1-entstehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** entstehen
**CURRENT (DA):** is formed during the process
**PROPOSED (DA):** FJERN «is formed during the process»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0400

**Card ID:** b1-erhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** erhalten
**CURRENT (DA):** to receive
**PROPOSED (DA):** FJERN «to receive»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0401

**Card ID:** b1-erhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** erhalten
**CURRENT (DA):** save
**PROPOSED (DA):** FJERN «save»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0404

**Card ID:** b1-eröffnen
**Field:** study.sectionAccents.comparison.meaning.purple.[0][2]
**DE konteksts:** eröffnen
**CURRENT (DA):** start
**PROPOSED (DA):** FJERN «start»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0405

**Card ID:** b1-eröffnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** eröffnen
**CURRENT (DA):** the exhibition
**PROPOSED (DA):** FJERN «the exhibition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0406

**Card ID:** b1-eröffnen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** eröffnen
**CURRENT (DA):** sit down
**PROPOSED (DA):** FJERN «sit down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0410

**Card ID:** b1-erscheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** erscheinen
**CURRENT (DA):** comes out
**PROPOSED (DA):** FJERN «comes out»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0411

**Card ID:** b1-erscheinen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** erscheinen
**CURRENT (DA):** ierodas
**PROPOSED (DA):** FJERN «ierodas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0415

**Card ID:** b1-ersetzen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** ersetzen
**CURRENT (DA):** takes the place of another thing
**PROPOSED (DA):** FJERN «takes the place of another thing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0418

**Card ID:** b1-fassen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** fassen
**CURRENT (DA):** satvert
**PROPOSED (DA):** FJERN «satvert»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0419

**Card ID:** b1-fassen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** fassen
**CURRENT (DA):** ietilpina
**PROPOSED (DA):** FJERN «ietilpina»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0423

**Card ID:** b1-faul
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** faul
**CURRENT (DA):** sapuvis
**PROPOSED (DA):** FJERN «sapuvis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0425

**Card ID:** b1-festhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** festhalten
**CURRENT (DA):** hold tight
**PROPOSED (DA):** FJERN «hold tight»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0429

**Card ID:** b1-festlegen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** festlegen
**CURRENT (DA):** set forward
**PROPOSED (DA):** FJERN «set forward»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0433

**Card ID:** b1-feststellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** feststellen
**CURRENT (DA):** faktu
**PROPOSED (DA):** FJERN «faktu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0434

**Card ID:** b1-feststellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** feststellen
**CURRENT (DA):** error
**PROPOSED (DA):** FJERN «error»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0435

**Card ID:** b1-feststellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** feststellen
**CURRENT (DA):** disease
**PROPOSED (DA):** FJERN «disease»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0436

**Card ID:** b1-feststellen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[4][0]
**DE konteksts:** feststellen
**CURRENT (DA):** cenu
**PROPOSED (DA):** FJERN «cenu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0439

**Card ID:** b1-folge
**Field:** study.sectionAccents.explanation.purple.[0]
**DE konteksts:** Folge
**CURRENT (DA):** result
**PROPOSED (DA):** FJERN «result»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0440

**Card ID:** b1-folge
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Folge
**CURRENT (DA):** series
**PROPOSED (DA):** FJERN «series»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0441

**Card ID:** b1-fördern
**Field:** study.explanation
**DE konteksts:** fördern
**CURRENT (DA):** Hovedidé: forden betyder at fremme udviklingen eller støtten af ​​en person, et projekt eller en proces. I industrien betyder det udvinding af mineraler som olie eller kul.
**PROPOSED (DA):** Hovedidé: forden betyder at fremme udviklingen eller støtten af en person, et projekt eller en proces. I industrien betyder det udvinding af mineraler som olie eller kul.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0445

**Card ID:** b1-fördern
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** fördern
**CURRENT (DA):** moves forward
**PROPOSED (DA):** FJERN «moves forward»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0453

**Card ID:** b1-fressen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** fressen
**CURRENT (DA):** rupji
**PROPOSED (DA):** FJERN «rupji»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0456

**Card ID:** b1-futter
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Futter
**CURRENT (DA):** odere
**PROPOSED (DA):** FJERN «odere»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0457

**Card ID:** b1-ganztaegig
**Field:** study.explanation[1]
**DE konteksts:** ganztägig
**CURRENT (DA):** Ganztägig beskriver varigheden af ​​begivenheder eller aktiviteter (in ganztägiger Ausflug = en udflugt, der varer hele dagen).
**PROPOSED (DA):** Ganztägig beskriver varigheden af begivenheder eller aktiviteter (in ganztägiger Ausflug = en udflugt, der varer hele dagen).
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0458

**Card ID:** b1-ganztaegig
**Field:** study.explanation[2]
**DE konteksts:** ganztägig
**CURRENT (DA):** Ikke at forveksle med betydningen af ​​'dag/24 timer' - på tysk er det runde om die Uhr, ikke meget tägig.
**PROPOSED (DA):** Ikke at forveksle med betydningen af 'dag/24 timer' - på tysk er det runde om die Uhr, ikke meget tägig.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0462

**Card ID:** b1-gebiet
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Gebiet
**CURRENT (DA):** teritorija
**PROPOSED (DA):** FJERN «teritorija»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0463

**Card ID:** b1-gehalt
**Field:** study.explanation
**DE konteksts:** Gehalt
**CURRENT (DA):** Hovedidé: das Gehalt betyder løn eller løn. Der Gehalt betyder på den anden side indhold - essensen af ​​et brev, en tale eller en kontrakt. Artiklen ændrer fuldstændig betydningen og flertallet.
**PROPOSED (DA):** Hovedidé: das Gehalt betyder løn eller løn. Der Gehalt betyder på den anden side indhold - essensen af et brev, en tale eller en kontrakt. Artiklen ændrer fuldstændig betydningen og flertallet.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0465

**Card ID:** b1-gehalt-2
**Field:** study.explanation
**DE konteksts:** Gehalt
**CURRENT (DA):** Hovedidé: der Gehalt betyder indhold - essensen af ​​et brev, en tale, en bog eller en kontrakt. På den anden side betyder das Gehalt løn. Flertal er die Gehalte, ikke die Gehälter.
**PROPOSED (DA):** Hovedidé: der Gehalt betyder indhold - essensen af et brev, en tale, en bog eller en kontrakt. På den anden side betyder das Gehalt løn. Flertal er die Gehalte, ikke die Gehälter.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0466

**Card ID:** b1-gehalt-2
**Field:** study.tip.leftBlocks[0].text
**DE konteksts:** Gehalt
**CURRENT (DA):** Om karakteren af ​​et brev, tale eller tekst - der Gehalt. For løn - das Gehalt.
**PROPOSED (DA):** Om karakteren af et brev, tale eller tekst - der Gehalt. For løn - das Gehalt.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0470

**Card ID:** b1-gelten
**Field:** study.important.text
**DE konteksts:** gelten
**CURRENT (DA):** Gelten handler ikke om en fysisk pasform som en nøgle eller en beklædningsgenstand • Det har normalt betydningen af ​​gyldighed eller omdømme.
**PROPOSED (DA):** Gelten handler ikke om en fysisk pasform som en nøgle eller en beklædningsgenstand • Det har normalt betydningen af gyldighed eller omdømme.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0472

**Card ID:** b1-gemein
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** gemein
**CURRENT (DA):** negative
**PROPOSED (DA):** FJERN «negative»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0476

**Card ID:** b1-gerät
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Gerät
**CURRENT (DA):** tehniska funkcija
**PROPOSED (DA):** FJERN «tehniska funkcija»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0480

**Card ID:** b1-geschlecht
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Geschlecht
**CURRENT (DA):** dzimums
**PROPOSED (DA):** FJERN «dzimums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0483

**Card ID:** b1-gesellschaft
**Field:** study.tip.leftBlocks[0].text
**DE konteksts:** Gesellschaft
**CURRENT (DA):** Lær først Gesellschaft som 'samfund' • Betydningen af ​​virksomheden og virksomheden fremgår af konteksten.
**PROPOSED (DA):** Lær først Gesellschaft som 'samfund' • Betydningen af virksomheden og virksomheden fremgår af konteksten.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0484

**Card ID:** b1-gesellschaft
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Gesellschaft
**CURRENT (DA):** konteksts
**PROPOSED (DA):** FJERN «konteksts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0487

**Card ID:** b1-gewinn
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Gewinn
**CURRENT (DA):** laimests
**PROPOSED (DA):** FJERN «laimests»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0489

**Card ID:** b1-gewiss
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** gewiss
**CURRENT (DA):** noteikts risks
**PROPOSED (DA):** FJERN «noteikts risks»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0495

**Card ID:** b1-gitter
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Gitter
**CURRENT (DA):** loga
**PROPOSED (DA):** FJERN «loga»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0496

**Card ID:** b1-gitter
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Gitter
**CURRENT (DA):** the door
**PROPOSED (DA):** FJERN «the door»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0497

**Card ID:** b1-gitter
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Gitter
**CURRENT (DA):** the cage
**PROPOSED (DA):** FJERN «the cage»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0500

**Card ID:** b1-greifen
**Field:** study.important.text
**DE konteksts:** greifen
**CURRENT (DA):** Nehmen betyder at tage • Greifen understreger mere bevægelsen af ​​at nå eller gribe.
**PROPOSED (DA):** Nehmen betyder at tage • Greifen understreger mere bevægelsen af at nå eller gribe.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0501

**Card ID:** b1-greifen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** greifen
**CURRENT (DA):** movement towards something
**PROPOSED (DA):** FJERN «movement towards something»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0505

**Card ID:** b1-griff
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Griff
**CURRENT (DA):** vieta
**PROPOSED (DA):** FJERN «vieta»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0506

**Card ID:** b1-griff
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Griff
**CURRENT (DA):** action
**PROPOSED (DA):** FJERN «action»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0507

**Card ID:** b1-griff
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Griff
**CURRENT (DA):** satver
**PROPOSED (DA):** FJERN «satver»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0510

**Card ID:** b1-gut
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Gut
**CURRENT (DA):** artikula
**PROPOSED (DA):** FJERN «artikula»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0514

**Card ID:** b1-handeln
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** handeln
**CURRENT (DA):** what to do
**PROPOSED (DA):** FJERN «what to do»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0515

**Card ID:** b1-handeln
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** handeln
**CURRENT (DA):** par ko ir teksts
**PROPOSED (DA):** FJERN «par ko ir teksts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0516

**Card ID:** b1-handeln
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** handeln
**CURRENT (DA):** tirgojas
**PROPOSED (DA):** FJERN «tirgojas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0520

**Card ID:** b1-handgriff
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Handgriff
**CURRENT (DA):** in the work process
**PROPOSED (DA):** FJERN «in the work process»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0524

**Card ID:** b1-hauen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** hauen
**CURRENT (DA):** trieciens
**PROPOSED (DA):** FJERN «trieciens»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0525

**Card ID:** b1-haufen
**Field:** study.examples[0].lv
**DE konteksts:** Haufen
**CURRENT (DA):** Der er en bunke sand i nærheden af ​​huset.
**PROPOSED (DA):** Der er en bunke sand i nærheden af huset.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0528

**Card ID:** b1-haufen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Haufen
**CURRENT (DA):** a messy pile
**PROPOSED (DA):** FJERN «a messy pile»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0529

**Card ID:** b1-haufen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Haufen
**CURRENT (DA):** neatly stacked
**PROPOSED (DA):** FJERN «neatly stacked»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0536

**Card ID:** b1-herkommen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** herkommen
**CURRENT (DA):** to here
**PROPOSED (DA):** FJERN «to here»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0540

**Card ID:** b1-hinausgehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** hinausgehen
**CURRENT (DA):** away outside
**PROPOSED (DA):** FJERN «away outside»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0541

**Card ID:** b1-hinausgehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** hinausgehen
**CURRENT (DA):** out here
**PROPOSED (DA):** FJERN «out here»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0544

**Card ID:** b1-hinweis
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Hinweis
**CURRENT (DA):** indicates
**PROPOSED (DA):** FJERN «indicates»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0545

**Card ID:** b1-hinweis
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Hinweis
**CURRENT (DA):** iesaka
**PROPOSED (DA):** FJERN «iesaka»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0548

**Card ID:** b1-holen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** holen
**CURRENT (DA):** leaving after
**PROPOSED (DA):** FJERN «leaving after»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0549

**Card ID:** b1-holen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** holen
**CURRENT (DA):** delivery to someone
**PROPOSED (DA):** FJERN «delivery to someone»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0553

**Card ID:** b1-horchen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** horchen
**CURRENT (DA):** slepeni
**PROPOSED (DA):** FJERN «slepeni»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0560

**Card ID:** b1-hüten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** hüten
**CURRENT (DA):** supervision
**PROPOSED (DA):** FJERN «supervision»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0561

**Card ID:** b1-hüten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** hüten
**CURRENT (DA):** protection
**PROPOSED (DA):** FJERN «protection»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0562

**Card ID:** b1-hüten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** hüten
**CURRENT (DA):** take care
**PROPOSED (DA):** FJERN «take care»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0566

**Card ID:** b1-innerhalb
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** innerhalb
**CURRENT (DA):** cities
**PROPOSED (DA):** FJERN «cities»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0567

**Card ID:** b1-innerhalb
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** innerhalb
**CURRENT (DA):** weeks
**PROPOSED (DA):** FJERN «weeks»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0568

**Card ID:** b1-innerhalb
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** innerhalb
**CURRENT (DA):** opportunity
**PROPOSED (DA):** FJERN «opportunity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0572

**Card ID:** b1-irren
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sich irren
**CURRENT (DA):** to be wrong
**PROPOSED (DA):** FJERN «to be wrong»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0576

**Card ID:** b1-jagen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** jagen
**CURRENT (DA):** goals
**PROPOSED (DA):** FJERN «goals»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0580

**Card ID:** b1-jahrgang
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Jahrgang
**CURRENT (DA):** people
**PROPOSED (DA):** FJERN «people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0584

**Card ID:** b1-kehren
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** kehren
**CURRENT (DA):** another word
**PROPOSED (DA):** FJERN «another word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0588

**Card ID:** b1-kern
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Kern
**CURRENT (DA):** in the fetus
**PROPOSED (DA):** FJERN «in the fetus»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0589

**Card ID:** b1-kern
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Kern
**CURRENT (DA):** in the case
**PROPOSED (DA):** FJERN «in the case»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0590

**Card ID:** b1-kern
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** Kern
**CURRENT (DA):** in the argument
**PROPOSED (DA):** FJERN «in the argument»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0592

**Card ID:** b1-kiefer
**Field:** study.important.text
**DE konteksts:** Kiefer
**CURRENT (DA):** Artiklen her er ikke en bagatel • Der og dø helt ændre betydningen af ​​et ord.
**PROPOSED (DA):** Artiklen her er ikke en bagatel • Der og dø helt ændre betydningen af et ord.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0593

**Card ID:** b1-kiefer
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Kiefer
**CURRENT (DA):** artikuls
**PROPOSED (DA):** FJERN «artikuls»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0597

**Card ID:** b1-kippen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** kippen
**CURRENT (DA):** a glass
**PROPOSED (DA):** FJERN «a glass»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0598

**Card ID:** b1-kippen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** kippen
**CURRENT (DA):** a chair
**PROPOSED (DA):** FJERN «a chair»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0599

**Card ID:** b1-kippen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[2][0]
**DE konteksts:** kippen
**CURRENT (DA):** the situation
**PROPOSED (DA):** FJERN «the situation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0602

**Card ID:** b1-klappen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** klappen
**CURRENT (DA):** izdosies
**PROPOSED (DA):** FJERN «izdosies»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0603

**Card ID:** b1-Klaue-1522
**Field:** lv
**DE konteksts:** Klaue
**CURRENT (DA):** Kloen af ​​en fugl eller et udyr
**PROPOSED (DA):** Kloen af en fugl eller et udyr
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0605

**Card ID:** b1-knapp
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** knapp
**CURRENT (DA):** not nearly enough
**PROPOSED (DA):** FJERN «not nearly enough»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0608

**Card ID:** b1-kommando
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Kommando
**CURRENT (DA):** command
**PROPOSED (DA):** FJERN «command»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0609

**Card ID:** b1-kommando
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Kommando
**CURRENT (DA):** command
**PROPOSED (DA):** FJERN «command»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0610

**Card ID:** b1-kommando
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** Kommando
**CURRENT (DA):** Order
**PROPOSED (DA):** FJERN «Order»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0611

**Card ID:** b1-kommando
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Kommando
**CURRENT (DA):** team in sports
**PROPOSED (DA):** FJERN «team in sports»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0612

**Card ID:** b1-koennen-study
**Field:** study.important[2]
**DE konteksts:** Können
**CURRENT (DA):** Mange tyske verber kan blive navneord med stort: ​​können → das Können.
**PROPOSED (DA):** Mange tyske verber kan blive navneord med stort: können → das Können.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0616

**Card ID:** b1-Krempe-1633
**Field:** lv
**DE konteksts:** Krempe
**CURRENT (DA):** Kanten af ​​hatten
**PROPOSED (DA):** Kanten af hatten
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0620

**Card ID:** b1-kreuzen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** kreuzen
**CURRENT (DA):** to cross
**PROPOSED (DA):** FJERN «to cross»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0621

**Card ID:** b1-kreuzen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** kreuzen
**CURRENT (DA):** to cross
**PROPOSED (DA):** FJERN «to cross»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0622

**Card ID:** b1-kreuzen
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** kreuzen
**CURRENT (DA):** we cross
**PROPOSED (DA):** FJERN «we cross»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0623

**Card ID:** b1-kreuzen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** kreuzen
**CURRENT (DA):** to mark
**PROPOSED (DA):** FJERN «to mark»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0624

**Card ID:** b1-kreuzen
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** kreuzen
**CURRENT (DA):** Mark it
**PROPOSED (DA):** FJERN «Mark it»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0627

**Card ID:** b1-kunde-2
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Kunde
**CURRENT (DA):** message
**PROPOSED (DA):** FJERN «message»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0628

**Card ID:** b1-kunde-2
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** Kunde
**CURRENT (DA):** The message
**PROPOSED (DA):** FJERN «The message»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0631

**Card ID:** b1-kunde
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Kunde
**CURRENT (DA):** message
**PROPOSED (DA):** FJERN «message»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0632

**Card ID:** b1-kunde
**Field:** study.sectionAccents.comparison.example.purple[0]
**DE konteksts:** Kunde
**CURRENT (DA):** The message
**PROPOSED (DA):** FJERN «The message»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0633

**Card ID:** b1-kunde
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Kunde
**CURRENT (DA):** message
**PROPOSED (DA):** FJERN «message»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0634

**Card ID:** b1-kunde
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** Kunde
**CURRENT (DA):** message
**PROPOSED (DA):** FJERN «message»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0635

**Card ID:** b1-kündigen
**Field:** study.examples[2].lv
**DE konteksts:** kündigen
**CURRENT (DA):** Vi bryder kontrakten i slutningen af ​​måneden.
**PROPOSED (DA):** Vi bryder kontrakten i slutningen af måneden.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0638

**Card ID:** b1-kündigen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** kündigen
**CURRENT (DA):** uzteikt
**PROPOSED (DA):** FJERN «uzteikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0639

**Card ID:** b1-kündigen
**Field:** study.sectionAccents.comparison.example.purple[0]
**DE konteksts:** kündigen
**CURRENT (DA):** break
**PROPOSED (DA):** FJERN «break»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0640

**Card ID:** b1-kündigen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** kündigen
**CURRENT (DA):** atlaist no darba
**PROPOSED (DA):** FJERN «atlaist no darba»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0641

**Card ID:** b1-kündigen
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** kündigen
**CURRENT (DA):** dismissed
**PROPOSED (DA):** FJERN «dismissed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0642

**Card ID:** b1-kündigen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** kündigen
**CURRENT (DA):** to stop
**PROPOSED (DA):** FJERN «to stop»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0643

**Card ID:** b1-kündigen
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** kündigen
**CURRENT (DA):** I stopped
**PROPOSED (DA):** FJERN «I stopped»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0647

**Card ID:** b1-kuppeln
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** kuppeln
**CURRENT (DA):** hook up
**PROPOSED (DA):** FJERN «hook up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0648

**Card ID:** b1-kuppeln
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** kuppeln
**CURRENT (DA):** savienot
**PROPOSED (DA):** FJERN «savienot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0649

**Card ID:** b1-kuppeln
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** kuppeln
**CURRENT (DA):** connect
**PROPOSED (DA):** FJERN «connect»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0650

**Card ID:** b1-kuppeln
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** kuppeln
**CURRENT (DA):** I connected
**PROPOSED (DA):** FJERN «I connected»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0652

**Card ID:** b1-kurs
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Kurs
**CURRENT (DA):** lesson
**PROPOSED (DA):** FJERN «lesson»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0653

**Card ID:** b1-kürze
**Field:** study.examples[0].lv
**DE konteksts:** Kürze
**CURRENT (DA):** Kortheden af ​​teksten er behagelig.
**PROPOSED (DA):** Kortheden af teksten er behagelig.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0657

**Card ID:** b1-kürze
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Kürze
**CURRENT (DA):** brevity
**PROPOSED (DA):** FJERN «brevity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0658

**Card ID:** b1-kürze
**Field:** study.sectionAccents.comparison.example.purple[0]
**DE konteksts:** Kürze
**CURRENT (DA):** Brevity
**PROPOSED (DA):** FJERN «Brevity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0659

**Card ID:** b1-kürze
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Kürze
**CURRENT (DA):** soon
**PROPOSED (DA):** FJERN «soon»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0660

**Card ID:** b1-kürze
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** Kürze
**CURRENT (DA):** soon
**PROPOSED (DA):** FJERN «soon»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0661

**Card ID:** b1-kürze
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Kürze
**CURRENT (DA):** short
**PROPOSED (DA):** FJERN «short»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0662

**Card ID:** b1-kürze
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** Kürze
**CURRENT (DA):** short
**PROPOSED (DA):** FJERN «short»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0665

**Card ID:** b1-laden
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** laden
**CURRENT (DA):** charge
**PROPOSED (DA):** FJERN «charge»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0666

**Card ID:** b1-laden
**Field:** study.sectionAccents.comparison.example.purple[0]
**DE konteksts:** laden
**CURRENT (DA):** I charged
**PROPOSED (DA):** FJERN «I charged»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0667

**Card ID:** b1-laden
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** laden
**CURRENT (DA):** to invite
**PROPOSED (DA):** FJERN «to invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0668

**Card ID:** b1-laden
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** laden
**CURRENT (DA):** invites
**PROPOSED (DA):** FJERN «invites»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0669

**Card ID:** b1-laden
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** laden
**CURRENT (DA):** piekraut
**PROPOSED (DA):** FJERN «piekraut»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0670

**Card ID:** b1-laden
**Field:** study.sectionAccents.important.purple.[0]
**DE konteksts:** laden
**CURRENT (DA):** Invite
**PROPOSED (DA):** FJERN «Invite»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0673

**Card ID:** b1-lager
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Lager
**CURRENT (DA):** noliktava
**PROPOSED (DA):** FJERN «noliktava»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0674

**Card ID:** b1-lager
**Field:** study.sectionAccents.comparison.example.purple[0]
**DE konteksts:** Lager
**CURRENT (DA):** in stock
**PROPOSED (DA):** FJERN «in stock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0675

**Card ID:** b1-lager
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Lager
**CURRENT (DA):** accommodation
**PROPOSED (DA):** FJERN «accommodation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0676

**Card ID:** b1-lager
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** Lager
**CURRENT (DA):** Accommodation
**PROPOSED (DA):** FJERN «Accommodation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0680

**Card ID:** b1-hörer
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Hörer
**CURRENT (DA):** the listener
**PROPOSED (DA):** FJERN «the listener»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0681

**Card ID:** b1-hörer
**Field:** study.sectionAccents.comparison.example.purple[0]
**DE konteksts:** Hörer
**CURRENT (DA):** Listeners
**PROPOSED (DA):** FJERN «Listeners»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0682

**Card ID:** b1-hörer
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Hörer
**CURRENT (DA):** listener in person
**PROPOSED (DA):** FJERN «listener in person»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0683

**Card ID:** b1-hörer
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** Hörer
**CURRENT (DA):** Listeners
**PROPOSED (DA):** FJERN «Listeners»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0684

**Card ID:** b1-hörer
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Hörer
**CURRENT (DA):** headphones
**PROPOSED (DA):** FJERN «headphones»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0685

**Card ID:** b1-hörer
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** Hörer
**CURRENT (DA):** headphones
**PROPOSED (DA):** FJERN «headphones»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0687

**Card ID:** b1-inhalt
**Field:** study.important
**DE konteksts:** Inhalt
**CURRENT (DA):** Betydningen af ​​volumen er teknisk • I hverdagen er der indhold oftest indhold.
**PROPOSED (DA):** Betydningen af volumen er teknisk • I hverdagen er der indhold oftest indhold.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0688

**Card ID:** b1-inhalt
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Inhalt
**CURRENT (DA):** topic
**PROPOSED (DA):** FJERN «topic»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0689

**Card ID:** b1-inhalt
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** Inhalt
**CURRENT (DA):** Topic
**PROPOSED (DA):** FJERN «Topic»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0690

**Card ID:** b1-kante
**Field:** study.explanation
**DE konteksts:** Kante
**CURRENT (DA):** Hovedidé: die Kante er kanten eller facetten af ​​et objekt. Det er ikke en almindelig territorial grænse, men en fysisk skarp eller klar kant.
**PROPOSED (DA):** Hovedidé: die Kante er kanten eller facetten af et objekt. Det er ikke en almindelig territorial grænse, men en fysisk skarp eller klar kant.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0693

**Card ID:** b1-kante
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** Kante
**CURRENT (DA):** On the side
**PROPOSED (DA):** FJERN «On the side»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0694

**Card ID:** b1-kante
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Kante
**CURRENT (DA):** border
**PROPOSED (DA):** FJERN «border»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0695

**Card ID:** b1-kante
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** Kante
**CURRENT (DA):** Border
**PROPOSED (DA):** FJERN «Border»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0696

**Card ID:** b1-kastanie
**Field:** study.examples[0].lv
**DE konteksts:** Kastanie
**CURRENT (DA):** Et kastanjetræ vokser i nærheden af ​​huset.
**PROPOSED (DA):** Et kastanjetræ vokser i nærheden af huset.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0698

**Card ID:** b1-kastanie
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Kastanie
**CURRENT (DA):** chestnut tree
**PROPOSED (DA):** FJERN «chestnut tree»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0699

**Card ID:** b1-kastanie
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** Kastanie
**CURRENT (DA):** Chestnut tree
**PROPOSED (DA):** FJERN «Chestnut tree»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0700

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** landen
**CURRENT (DA):** sit down
**PROPOSED (DA):** FJERN «sit down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0701

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.example.purple[0]
**DE konteksts:** landen
**CURRENT (DA):** sits down
**PROPOSED (DA):** FJERN «sits down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0702

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.word.green[1]
**DE konteksts:** landen
**CURRENT (DA):** ankommen
**PROPOSED (DA):** FJERN «ankommen»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0703

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** landen
**CURRENT (DA):** ierasties
**PROPOSED (DA):** FJERN «ierasties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0704

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.example.red[1]
**DE konteksts:** landen
**CURRENT (DA):** kommt an
**PROPOSED (DA):** FJERN «kommt an»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0705

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** landen
**CURRENT (DA):** ierodas
**PROPOSED (DA):** FJERN «ierodas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0706

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.word.green[2]
**DE konteksts:** landen
**CURRENT (DA):** anlegen
**PROPOSED (DA):** FJERN «anlegen»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0707

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** landen
**CURRENT (DA):** dock with a ship
**PROPOSED (DA):** FJERN «dock with a ship»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0708

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.example.red[2]
**DE konteksts:** landen
**CURRENT (DA):** legt
**PROPOSED (DA):** FJERN «legt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0709

**Card ID:** b1-landen
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** landen
**CURRENT (DA):** stops by
**PROPOSED (DA):** FJERN «stops by»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0710

**Card ID:** b1-laut-study
**Field:** study.explanation[0]
**DE konteksts:** Laut
**CURRENT (DA):** Hovedidé: Et navneord med en artikel passer til og skrives med stort. Betyder lyd som en ting, et signal eller lyden af ​​sprog.
**PROPOSED (DA):** Hovedidé: Et navneord med en artikel passer til og skrives med stort. Betyder lyd som en ting, et signal eller lyden af sprog.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0713

**Card ID:** b1-leisten
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** leisten
**CURRENT (DA):** veikt
**PROPOSED (DA):** FJERN «veikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0714

**Card ID:** b1-leisten
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** leisten
**CURRENT (DA):** paveikt
**PROPOSED (DA):** FJERN «paveikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0715

**Card ID:** b1-leisten
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** leisten
**CURRENT (DA):** I will do it
**PROPOSED (DA):** FJERN «I will do it»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0716

**Card ID:** b1-leisten
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** leisten
**CURRENT (DA):** to afford
**PROPOSED (DA):** FJERN «to afford»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0717

**Card ID:** b1-leisten
**Field:** study.sectionAccents.comparison.example.purple[2]
**DE konteksts:** leisten
**CURRENT (DA):** to afford
**PROPOSED (DA):** FJERN «to afford»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0720

**Card ID:** b1-leistung
**Field:** study.sectionAccents.comparison.meaning.purple.[0][1]
**DE konteksts:** Leistung
**CURRENT (DA):** Result
**PROPOSED (DA):** FJERN «Result»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0721

**Card ID:** b1-leistung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[1][0]
**DE konteksts:** Leistung
**CURRENT (DA):** jauda
**PROPOSED (DA):** FJERN «jauda»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0725

**Card ID:** b1-locker
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** locker
**CURRENT (DA):** loose
**PROPOSED (DA):** FJERN «loose»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0726

**Card ID:** b1-locker
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** locker
**CURRENT (DA):** open
**PROPOSED (DA):** FJERN «open»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0727

**Card ID:** b1-locker
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** locker
**CURRENT (DA):** stingrs
**PROPOSED (DA):** FJERN «stingrs»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0730

**Card ID:** b1-los
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Los
**CURRENT (DA):** likteni
**PROPOSED (DA):** FJERN «likteni»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0731

**Card ID:** b1-los
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Los
**CURRENT (DA):** loze
**PROPOSED (DA):** FJERN «loze»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0735

**Card ID:** b1-löschen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** löschen
**CURRENT (DA):** delete
**PROPOSED (DA):** FJERN «delete»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0736

**Card ID:** b1-löschen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** löschen
**CURRENT (DA):** turn off
**PROPOSED (DA):** FJERN «turn off»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0737

**Card ID:** b1-löschen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** löschen
**CURRENT (DA):** solve
**PROPOSED (DA):** FJERN «solve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0740

**Card ID:** b1-lösen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** lösen
**CURRENT (DA):** solve
**PROPOSED (DA):** FJERN «solve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0741

**Card ID:** b1-lösen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** lösen
**CURRENT (DA):** dissolve
**PROPOSED (DA):** FJERN «dissolve»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0742

**Card ID:** b1-lösen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** lösen
**CURRENT (DA):** delete
**PROPOSED (DA):** FJERN «delete»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0745

**Card ID:** b1-lösung
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Lösung
**CURRENT (DA):** the solution
**PROPOSED (DA):** FJERN «the solution»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0746

**Card ID:** b1-lösung
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Lösung
**CURRENT (DA):** result
**PROPOSED (DA):** FJERN «result»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0750

**Card ID:** b1-macht
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Macht
**CURRENT (DA):** vara
**PROPOSED (DA):** FJERN «vara»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0751

**Card ID:** b1-macht
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Macht
**CURRENT (DA):** strength
**PROPOSED (DA):** FJERN «strength»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0755

**Card ID:** b1-maß
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Maß
**CURRENT (DA):** mayor
**PROPOSED (DA):** FJERN «mayor»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0756

**Card ID:** b1-maß
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Maß
**CURRENT (DA):** dimensions
**PROPOSED (DA):** FJERN «dimensions»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0757

**Card ID:** b1-maß
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Maß
**CURRENT (DA):** event
**PROPOSED (DA):** FJERN «event»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0758

**Card ID:** b1-messe
**Field:** study.comparison[0].meaning
**DE konteksts:** Messe
**CURRENT (DA):** Udstilling, messe • ​​Messe i kirken
**PROPOSED (DA):** Udstilling, messe • Messe i kirken
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0761

**Card ID:** b1-messe
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Messe
**CURRENT (DA):** misi
**PROPOSED (DA):** FJERN «misi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0762

**Card ID:** b1-messe
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Messe
**CURRENT (DA):** exhibition
**PROPOSED (DA):** FJERN «exhibition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0763

**Card ID:** b1-messe
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Messe
**CURRENT (DA):** exhibition
**PROPOSED (DA):** FJERN «exhibition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0764

**Card ID:** b1-messe
**Field:** study.sectionAccents.tip.green
**DE konteksts:** Messe
**CURRENT (DA):** Companies
**PROPOSED (DA):** FJERN «Companies»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0767

**Card ID:** b1-nachdem
**Field:** study.important
**DE konteksts:** nachdem
**CURRENT (DA):** Efter nachdem går verbet som regel i slutningen af ​​sætningen: nachdem ich gegessen hatte.
**PROPOSED (DA):** Efter nachdem går verbet som regel i slutningen af sætningen: nachdem ich gegessen hatte.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0768

**Card ID:** b1-nachdem
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** nachdem
**CURRENT (DA):** after when
**PROPOSED (DA):** FJERN «after when»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0769

**Card ID:** b1-nachdem
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** nachdem
**CURRENT (DA):** after that
**PROPOSED (DA):** FJERN «after that»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0773

**Card ID:** b1-nachfrage
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Nachfrage
**CURRENT (DA):** request
**PROPOSED (DA):** FJERN «request»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0774

**Card ID:** b1-nachfrage
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Nachfrage
**CURRENT (DA):** question
**PROPOSED (DA):** FJERN «question»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0775

**Card ID:** b1-nachfrage
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Nachfrage
**CURRENT (DA):** offer
**PROPOSED (DA):** FJERN «offer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0778

**Card ID:** b1-nachgeben
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** nachgeben
**CURRENT (DA):** to give way
**PROPOSED (DA):** FJERN «to give way»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0779

**Card ID:** b1-nachgeben
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** nachgeben
**CURRENT (DA):** padoties
**PROPOSED (DA):** FJERN «padoties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0780

**Card ID:** b1-nachgeben
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** nachgeben
**CURRENT (DA):** to admit
**PROPOSED (DA):** FJERN «to admit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0784

**Card ID:** b1-neigen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** neigen
**CURRENT (DA):** nosliecei
**PROPOSED (DA):** FJERN «nosliecei»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0785

**Card ID:** b1-neigen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** neigen
**CURRENT (DA):** tuvoties
**PROPOSED (DA):** FJERN «tuvoties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0786

**Card ID:** b1-neigen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** neigen
**CURRENT (DA):** bend
**PROPOSED (DA):** FJERN «bend»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0790

**Card ID:** b1-neigung
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Neigung
**CURRENT (DA):** slope
**PROPOSED (DA):** FJERN «slope»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0791

**Card ID:** b1-neigung
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Neigung
**CURRENT (DA):** slope
**PROPOSED (DA):** FJERN «slope»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0793

**Card ID:** b1-nerven
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** nerven
**CURRENT (DA):** to annoy
**PROPOSED (DA):** FJERN «to annoy»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0794

**Card ID:** b1-nerven
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** nerven
**CURRENT (DA):** disturb
**PROPOSED (DA):** FJERN «disturb»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0795

**Card ID:** b1-nerven
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** nerven
**CURRENT (DA):** sadusmot
**PROPOSED (DA):** FJERN «sadusmot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0799

**Card ID:** b1-nieder
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** nieder
**CURRENT (DA):** at the bottom
**PROPOSED (DA):** FJERN «at the bottom»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0800

**Card ID:** b1-nieder
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** nieder
**CURRENT (DA):** lejup
**PROPOSED (DA):** FJERN «lejup»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0804

**Card ID:** b1-not
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Not
**CURRENT (DA):** deficiency
**PROPOSED (DA):** FJERN «deficiency»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0805

**Card ID:** b1-not
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Not
**CURRENT (DA):** necessity
**PROPOSED (DA):** FJERN «necessity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0806

**Card ID:** b1-not
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Not
**CURRENT (DA):** an emergency
**PROPOSED (DA):** FJERN «an emergency»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0807

**Card ID:** b1-not
**Field:** study.sectionAccents.tip.red
**DE konteksts:** Not
**CURRENT (DA):** the need
**PROPOSED (DA):** FJERN «the need»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0811

**Card ID:** b1-nüchtern
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** nüchtern
**CURRENT (DA):** on an empty stomach
**PROPOSED (DA):** FJERN «on an empty stomach»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0812

**Card ID:** b1-nüchtern
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** nüchtern
**CURRENT (DA):** drunk
**PROPOSED (DA):** FJERN «drunk»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0813

**Card ID:** b1-nüchtern
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** nüchtern
**CURRENT (DA):** practical
**PROPOSED (DA):** FJERN «practical»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0814

**Card ID:** b1-nüchtern
**Field:** study.sectionAccents.important.red
**DE konteksts:** nüchtern
**CURRENT (DA):** on an empty stomach
**PROPOSED (DA):** FJERN «on an empty stomach»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0817

**Card ID:** b1-objekt
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Objekt
**CURRENT (DA):** adder
**PROPOSED (DA):** FJERN «adder»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0818

**Card ID:** b1-objekt
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Objekt
**CURRENT (DA):** subject
**PROPOSED (DA):** FJERN «subject»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0819

**Card ID:** b1-objekt
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Objekt
**CURRENT (DA):** the subject of the sentence
**PROPOSED (DA):** FJERN «the subject of the sentence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0820

**Card ID:** b1-objekt
**Field:** study.sectionAccents.tip.red
**DE konteksts:** Objekt
**CURRENT (DA):** subjekts
**PROPOSED (DA):** FJERN «subjekts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0821

**Card ID:** b1-objekt
**Field:** study.sectionAccents.important.red
**DE konteksts:** Objekt
**CURRENT (DA):** adder
**PROPOSED (DA):** FJERN «adder»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0825

**Card ID:** b1-ohnmacht
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Ohnmacht
**CURRENT (DA):** impotence
**PROPOSED (DA):** FJERN «impotence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0826

**Card ID:** b1-ohnmacht
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Ohnmacht
**CURRENT (DA):** unconsciousness
**PROPOSED (DA):** FJERN «unconsciousness»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0827

**Card ID:** b1-ohnmacht
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Ohnmacht
**CURRENT (DA):** unconsciousness
**PROPOSED (DA):** FJERN «unconsciousness»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0828

**Card ID:** b1-ohnmacht
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Ohnmacht
**CURRENT (DA):** impotence
**PROPOSED (DA):** FJERN «impotence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0829

**Card ID:** b1-ohnmacht
**Field:** study.sectionAccents.important.red
**DE konteksts:** Ohnmacht
**CURRENT (DA):** nothing can be affected
**PROPOSED (DA):** FJERN «nothing can be affected»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0833

**Card ID:** b1-opfern
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** opfern
**CURRENT (DA):** to sacrifice
**PROPOSED (DA):** FJERN «to sacrifice»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0834

**Card ID:** b1-opfern
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** opfern
**CURRENT (DA):** ziedot
**PROPOSED (DA):** FJERN «ziedot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0835

**Card ID:** b1-opfern
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** opfern
**CURRENT (DA):** to join
**PROPOSED (DA):** FJERN «to join»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0839

**Card ID:** b1-orientieren
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** orientieren
**CURRENT (DA):** orient yourself
**PROPOSED (DA):** FJERN «orient yourself»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0840

**Card ID:** b1-orientieren
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** orientieren
**CURRENT (DA):** get information
**PROPOSED (DA):** FJERN «get information»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0841

**Card ID:** b1-orientieren
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** orientieren
**CURRENT (DA):** to be guided by
**PROPOSED (DA):** FJERN «to be guided by»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0842

**Card ID:** b1-orientieren
**Field:** study.sectionAccents.important.red
**DE konteksts:** orientieren
**CURRENT (DA):** reflexively
**PROPOSED (DA):** FJERN «reflexively»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0846

**Card ID:** b1-periode
**Field:** study.sectionAccents.examples.lv.purple.[0][0]
**DE konteksts:** Periode
**CURRENT (DA):** period
**PROPOSED (DA):** FJERN «period»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0850

**Card ID:** b1-pflegen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** pflegen
**CURRENT (DA):** kopt
**PROPOSED (DA):** FJERN «kopt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0851

**Card ID:** b1-pflegen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** pflegen
**CURRENT (DA):** take care of
**PROPOSED (DA):** FJERN «take care of»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0852

**Card ID:** b1-pflegen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** pflegen
**CURRENT (DA):** to clean
**PROPOSED (DA):** FJERN «to clean»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0856

**Card ID:** b1-pochen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** pochen
**CURRENT (DA):** insist
**PROPOSED (DA):** FJERN «insist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0857

**Card ID:** b1-pochen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** pochen
**CURRENT (DA):** to knock
**PROPOSED (DA):** FJERN «to knock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0858

**Card ID:** b1-pochen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** pochen
**CURRENT (DA):** to knock
**PROPOSED (DA):** FJERN «to knock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0859

**Card ID:** b1-pochen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** pochen
**CURRENT (DA):** insist on
**PROPOSED (DA):** FJERN «insist on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0860

**Card ID:** b1-pochen
**Field:** study.sectionAccents.important.red
**DE konteksts:** pochen
**CURRENT (DA):** to insist
**PROPOSED (DA):** FJERN «to insist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0864

**Card ID:** b1-posten
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Posten
**CURRENT (DA):** in the item
**PROPOSED (DA):** FJERN «in the item»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0865

**Card ID:** b1-posten
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Posten
**CURRENT (DA):** amats
**PROPOSED (DA):** FJERN «amats»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0866

**Card ID:** b1-posten
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Posten
**CURRENT (DA):** darba vieta
**PROPOSED (DA):** FJERN «darba vieta»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0869

**Card ID:** b1-probe
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Probe
**CURRENT (DA):** an attempt
**PROPOSED (DA):** FJERN «an attempt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0870

**Card ID:** b1-probe
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Probe
**CURRENT (DA):** inspection
**PROPOSED (DA):** FJERN «inspection»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0871

**Card ID:** b1-probe
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Probe
**CURRENT (DA):** exam
**PROPOSED (DA):** FJERN «exam»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0874

**Card ID:** b1-rang
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Rang
**CURRENT (DA):** on the balcony
**PROPOSED (DA):** FJERN «on the balcony»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0875

**Card ID:** b1-rang
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Rang
**CURRENT (DA):** rinda
**PROPOSED (DA):** FJERN «rinda»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0876

**Card ID:** b1-rang
**Field:** study.sectionAccents.important.red
**DE konteksts:** Rang
**CURRENT (DA):** In the theatre
**PROPOSED (DA):** FJERN «In the theatre»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0882

**Card ID:** b1-rasen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** rasen
**CURRENT (DA):** is raging
**PROPOSED (DA):** FJERN «is raging»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0883

**Card ID:** b1-rasen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** rasen
**CURRENT (DA):** to ionise
**PROPOSED (DA):** FJERN «to ionise»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0885

**Card ID:** b1-rasen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** rasen
**CURRENT (DA):** to rage
**PROPOSED (DA):** FJERN «to rage»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0886

**Card ID:** b1-rasen
**Field:** study.sectionAccents.tip.red
**DE konteksts:** rasen
**CURRENT (DA):** too big
**PROPOSED (DA):** FJERN «too big»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0889

**Card ID:** b1-rate
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Rate
**CURRENT (DA):** padoms
**PROPOSED (DA):** FJERN «padoms»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0893

**Card ID:** b1-räumen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** räumen
**CURRENT (DA):** sort out
**PROPOSED (DA):** FJERN «sort out»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0894

**Card ID:** b1-räumen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** räumen
**CURRENT (DA):** release
**PROPOSED (DA):** FJERN «release»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0895

**Card ID:** b1-räumen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** räumen
**CURRENT (DA):** arrange
**PROPOSED (DA):** FJERN «arrange»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0896

**Card ID:** b1-räumen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** räumen
**CURRENT (DA):** to leave
**PROPOSED (DA):** FJERN «to leave»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0899

**Card ID:** b1-rausch
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Rausch
**CURRENT (DA):** apreibumu
**PROPOSED (DA):** FJERN «apreibumu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0900

**Card ID:** b1-rausch
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Rausch
**CURRENT (DA):** reibums
**PROPOSED (DA):** FJERN «reibums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0901

**Card ID:** b1-rausch
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Rausch
**CURRENT (DA):** addiction
**PROPOSED (DA):** FJERN «addiction»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0905

**Card ID:** b1-regeln
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** regeln
**CURRENT (DA):** regulates
**PROPOSED (DA):** FJERN «regulates»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0906

**Card ID:** b1-regeln
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** regeln
**CURRENT (DA):** regulates
**PROPOSED (DA):** FJERN «regulates»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0907

**Card ID:** b1-regeln
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** regeln
**CURRENT (DA):** sort out
**PROPOSED (DA):** FJERN «sort out»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0908

**Card ID:** b1-regeln
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** regeln
**CURRENT (DA):** organise
**PROPOSED (DA):** FJERN «organise»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0909

**Card ID:** b1-regeln
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** regeln
**CURRENT (DA):** adjust
**PROPOSED (DA):** FJERN «adjust»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0910

**Card ID:** b1-regeln
**Field:** study.sectionAccents.important.red
**DE konteksts:** regeln
**CURRENT (DA):** adjustment
**PROPOSED (DA):** FJERN «adjustment»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0914

**Card ID:** b1-reißen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** reißen
**CURRENT (DA):** bursting
**PROPOSED (DA):** FJERN «bursting»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0915

**Card ID:** b1-reißen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** reißen
**CURRENT (DA):** to travel
**PROPOSED (DA):** FJERN «to travel»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0916

**Card ID:** b1-reißen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** reißen
**CURRENT (DA):** to break
**PROPOSED (DA):** FJERN «to break»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0917

**Card ID:** b1-reißen
**Field:** study.sectionAccents.important.yellow
**DE konteksts:** reißen
**CURRENT (DA):** objektu
**PROPOSED (DA):** FJERN «objektu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0920

**Card ID:** b1-reizen
**Field:** study.important
**DE konteksts:** reizen
**CURRENT (DA):** Oversættelsen af ​​reizen ændres i henhold til objektet, så slå altid op, hvad der er "reizen".
**PROPOSED (DA):** Oversættelsen af reizen ændres i henhold til objektet, så slå altid op, hvad der er "reizen".
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0921

**Card ID:** b1-reizen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** reizen
**CURRENT (DA):** to irritate
**PROPOSED (DA):** FJERN «to irritate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0922

**Card ID:** b1-reizen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** reizen
**CURRENT (DA):** to annoy
**PROPOSED (DA):** FJERN «to annoy»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0923

**Card ID:** b1-reizen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** reizen
**CURRENT (DA):** tempt
**PROPOSED (DA):** FJERN «tempt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0924

**Card ID:** b1-reizen
**Field:** study.sectionAccents.important.yellow
**DE konteksts:** reizen
**CURRENT (DA):** objekta
**PROPOSED (DA):** FJERN «objekta»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0925

**Card ID:** b1-richten
**Field:** study.comparison[0].meaning
**DE konteksts:** richten
**CURRENT (DA):** Direkte, adresse • ​​Dommer
**PROPOSED (DA):** Direkte, adresse • Dommer
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0928

**Card ID:** b1-richten
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** richten
**CURRENT (DA):** in court
**PROPOSED (DA):** FJERN «in court»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0929

**Card ID:** b1-richten
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** richten
**CURRENT (DA):** direct
**PROPOSED (DA):** FJERN «direct»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0930

**Card ID:** b1-richten
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** richten
**CURRENT (DA):** to send
**PROPOSED (DA):** FJERN «to send»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0931

**Card ID:** b1-richten
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** richten
**CURRENT (DA):** spriest
**PROPOSED (DA):** FJERN «spriest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0932

**Card ID:** b1-richten
**Field:** study.sectionAccents.important.red
**DE konteksts:** richten
**CURRENT (DA):** to send
**PROPOSED (DA):** FJERN «to send»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0934

**Card ID:** b1-rollen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** rollen
**CURRENT (DA):** ripot
**PROPOSED (DA):** FJERN «ripot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0935

**Card ID:** b1-rollen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** rollen
**CURRENT (DA):** griezties
**PROPOSED (DA):** FJERN «griezties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0936

**Card ID:** b1-rollen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** rollen
**CURRENT (DA):** stumt
**PROPOSED (DA):** FJERN «stumt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0940

**Card ID:** b1-rösten
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** rösten
**CURRENT (DA):** to toast
**PROPOSED (DA):** FJERN «to toast»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0941

**Card ID:** b1-rösten
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** rösten
**CURRENT (DA):** cept uz pannas
**PROPOSED (DA):** FJERN «cept uz pannas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0942

**Card ID:** b1-rösten
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** rösten
**CURRENT (DA):** bake in the oven
**PROPOSED (DA):** FJERN «bake in the oven»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0945

**Card ID:** b1-ruf-2
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Ruf
**CURRENT (DA):** reputation
**PROPOSED (DA):** FJERN «reputation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0946

**Card ID:** b1-ruf-2
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Ruf
**CURRENT (DA):** sauciens
**PROPOSED (DA):** FJERN «sauciens»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0947

**Card ID:** b1-ruf-2
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Ruf
**CURRENT (DA):** telefona zvans
**PROPOSED (DA):** FJERN «telefona zvans»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0951

**Card ID:** b1-ruhen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** ruhen
**CURRENT (DA):** suspended
**PROPOSED (DA):** FJERN «suspended»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0952

**Card ID:** b1-ruhen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** ruhen
**CURRENT (DA):** be at peace
**PROPOSED (DA):** FJERN «be at peace»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0953

**Card ID:** b1-ruhen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** ruhen
**CURRENT (DA):** to rest
**PROPOSED (DA):** FJERN «to rest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0954

**Card ID:** b1-ruhen
**Field:** study.sectionAccents.comparison.example.purple[1]
**DE konteksts:** ruhen
**CURRENT (DA):** I will rest
**PROPOSED (DA):** FJERN «I will rest»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0955

**Card ID:** b1-ruhen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** ruhen
**CURRENT (DA):** to sleep
**PROPOSED (DA):** FJERN «to sleep»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0956

**Card ID:** b1-ruhen
**Field:** study.sectionAccents.important.red
**DE konteksts:** ruhen
**CURRENT (DA):** more formally
**PROPOSED (DA):** FJERN «more formally»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0960

**Card ID:** b1-rüsten
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** rüsten
**CURRENT (DA):** arm
**PROPOSED (DA):** FJERN «arm»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0961

**Card ID:** b1-rüsten
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** rüsten
**CURRENT (DA):** sagatavoties
**PROPOSED (DA):** FJERN «sagatavoties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0962

**Card ID:** b1-rüsten
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** rüsten
**CURRENT (DA):** sagatavot
**PROPOSED (DA):** FJERN «sagatavot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0963

**Card ID:** b1-rüsten
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** rüsten
**CURRENT (DA):** armament
**PROPOSED (DA):** FJERN «armament»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0964

**Card ID:** b1-rüsten
**Field:** study.sectionAccents.tip.yellow
**DE konteksts:** rüsten
**CURRENT (DA):** equipment
**PROPOSED (DA):** FJERN «equipment»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0968

**Card ID:** b1-saat
**Field:** study.sectionAccents.examples.lv.purple.[0][0]
**DE konteksts:** Saat
**CURRENT (DA):** Volume
**PROPOSED (DA):** FJERN «Volume»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0969

**Card ID:** b1-saat
**Field:** study.sectionAccents.examples.lv.purple.[0][2]
**DE konteksts:** Saat
**CURRENT (DA):** Volume
**PROPOSED (DA):** FJERN «Volume»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0970

**Card ID:** b1-saat
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Saat
**CURRENT (DA):** volume
**PROPOSED (DA):** FJERN «volume»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0971

**Card ID:** b1-saat
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Saat
**CURRENT (DA):** sow
**PROPOSED (DA):** FJERN «sow»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0974

**Card ID:** b1-schale
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Schale
**CURRENT (DA):** bowl
**PROPOSED (DA):** FJERN «bowl»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0975

**Card ID:** b1-schale
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Schale
**CURRENT (DA):** a bowl
**PROPOSED (DA):** FJERN «a bowl»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0979

**Card ID:** b1-schicht
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Schicht
**CURRENT (DA):** in shift
**PROPOSED (DA):** FJERN «in shift»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0980

**Card ID:** b1-schicht
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Schicht
**CURRENT (DA):** layer
**PROPOSED (DA):** FJERN «layer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0981

**Card ID:** b1-schicht
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Schicht
**CURRENT (DA):** the situation
**PROPOSED (DA):** FJERN «the situation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0982

**Card ID:** b1-schicht
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Schicht
**CURRENT (DA):** shift work
**PROPOSED (DA):** FJERN «shift work»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0983

**Card ID:** b1-schicht
**Field:** study.sectionAccents.tip.red
**DE konteksts:** Schicht
**CURRENT (DA):** shift
**PROPOSED (DA):** FJERN «shift»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0984

**Card ID:** b1-schicht
**Field:** study.sectionAccents.important.red
**DE konteksts:** Schicht
**CURRENT (DA):** shift
**PROPOSED (DA):** FJERN «shift»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0988

**Card ID:** b1-schimmel
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Schimmel
**CURRENT (DA):** mold
**PROPOSED (DA):** FJERN «mold»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0989

**Card ID:** b1-schimmel
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Schimmel
**CURRENT (DA):** mushroom
**PROPOSED (DA):** FJERN «mushroom»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0990

**Card ID:** b1-schimmel
**Field:** study.sectionAccents.important.red
**DE konteksts:** Schimmel
**CURRENT (DA):** Zirga
**PROPOSED (DA):** FJERN «Zirga»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0993

**Card ID:** b1-schlag
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Schlag
**CURRENT (DA):** Lightning strike
**PROPOSED (DA):** FJERN «Lightning strike»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0994

**Card ID:** b1-schlag
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Schlag
**CURRENT (DA):** nosit
**PROPOSED (DA):** FJERN «nosit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0995

**Card ID:** b1-schlag
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Schlag
**CURRENT (DA):** a push
**PROPOSED (DA):** FJERN «a push»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0996

**Card ID:** b1-schlag
**Field:** study.sectionAccents.important.red
**DE konteksts:** Schlag
**CURRENT (DA):** kick
**PROPOSED (DA):** FJERN «kick»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-0999

**Card ID:** b1-schleifen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** schleifen
**CURRENT (DA):** velkas
**PROPOSED (DA):** FJERN «velkas»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1000

**Card ID:** b1-schleifen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** schleifen
**CURRENT (DA):** to grind
**PROPOSED (DA):** FJERN «to grind»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1001

**Card ID:** b1-schleifen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** schleifen
**CURRENT (DA):** to sharpen
**PROPOSED (DA):** FJERN «to sharpen»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1002

**Card ID:** b1-schleifen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** schleifen
**CURRENT (DA):** vilkt
**PROPOSED (DA):** FJERN «vilkt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1006

**Card ID:** b1-schmelzen
**Field:** study.sectionAccents.examples.lv.purple.[0][0]
**DE konteksts:** schmelzen
**CURRENT (DA):** melt
**PROPOSED (DA):** FJERN «melt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1007

**Card ID:** b1-schmelzen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** schmelzen
**CURRENT (DA):** melter
**PROPOSED (DA):** FJERN «melter»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1008

**Card ID:** b1-schmelzen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** schmelzen
**CURRENT (DA):** kust
**PROPOSED (DA):** FJERN «kust»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1009

**Card ID:** b1-schmelzen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** schmelzen
**CURRENT (DA):** thaw
**PROPOSED (DA):** FJERN «thaw»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1010

**Card ID:** b1-schmelzen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** schmelzen
**CURRENT (DA):** to boil
**PROPOSED (DA):** FJERN «to boil»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1011

**Card ID:** b1-schmelzen
**Field:** study.sectionAccents.tip.purple.[0]
**DE konteksts:** schmelzen
**CURRENT (DA):** melt
**PROPOSED (DA):** FJERN «melt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1013

**Card ID:** b1-schmieren
**Field:** study.comparison[1].meaning
**DE konteksts:** schmieren
**CURRENT (DA):** At blomstre, at male med bevægelsen af ​​en pensel
**PROPOSED (DA):** At blomstre, at male med bevægelsen af en pensel
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1016

**Card ID:** b1-schmieren
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** schmieren
**CURRENT (DA):** in the paw
**PROPOSED (DA):** FJERN «in the paw»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1017

**Card ID:** b1-schmieren
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** schmieren
**CURRENT (DA):** smear
**PROPOSED (DA):** FJERN «smear»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1018

**Card ID:** b1-schmieren
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** schmieren
**CURRENT (DA):** to paint
**PROPOSED (DA):** FJERN «to paint»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1019

**Card ID:** b1-schmieren
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** schmieren
**CURRENT (DA):** lubricate
**PROPOSED (DA):** FJERN «lubricate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1020

**Card ID:** b1-schmieren
**Field:** study.sectionAccents.tip.yellow
**DE konteksts:** schmieren
**CURRENT (DA):** sviests
**PROPOSED (DA):** FJERN «sviests»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1024

**Card ID:** b1-schmücken
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** schmücken
**CURRENT (DA):** decorates
**PROPOSED (DA):** FJERN «decorates»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1025

**Card ID:** b1-schmücken
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** schmücken
**CURRENT (DA):** to decorate
**PROPOSED (DA):** FJERN «to decorate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1026

**Card ID:** b1-schmücken
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** schmücken
**CURRENT (DA):** to decorate
**PROPOSED (DA):** FJERN «to decorate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1027

**Card ID:** b1-schmücken
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** schmücken
**CURRENT (DA):** get dressed
**PROPOSED (DA):** FJERN «get dressed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1028

**Card ID:** b1-schmücken
**Field:** study.sectionAccents.important.red
**DE konteksts:** schmücken
**CURRENT (DA):** to decorate
**PROPOSED (DA):** FJERN «to decorate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1032

**Card ID:** b1-schnitt
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Schnitt
**CURRENT (DA):** piegriezums
**PROPOSED (DA):** FJERN «piegriezums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1033

**Card ID:** b1-schnitt
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Schnitt
**CURRENT (DA):** assembly
**PROPOSED (DA):** FJERN «assembly»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1034

**Card ID:** b1-schnitt
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Schnitt
**CURRENT (DA):** the average
**PROPOSED (DA):** FJERN «the average»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1035

**Card ID:** b1-schnitt
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Schnitt
**CURRENT (DA):** a wound
**PROPOSED (DA):** FJERN «a wound»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1039

**Card ID:** b1-schuldig
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** schuldig
**CURRENT (DA):** owed
**PROPOSED (DA):** FJERN «owed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1040

**Card ID:** b1-schuldig
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** schuldig
**CURRENT (DA):** guilty
**PROPOSED (DA):** FJERN «guilty»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1041

**Card ID:** b1-schuldig
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** schuldig
**CURRENT (DA):** innocent
**PROPOSED (DA):** FJERN «innocent»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1042

**Card ID:** b1-schuldig
**Field:** study.sectionAccents.important.red
**DE konteksts:** schuldig
**CURRENT (DA):** owed
**PROPOSED (DA):** FJERN «owed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1046

**Card ID:** b1-schützen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** schützen
**CURRENT (DA):** must be protected
**PROPOSED (DA):** FJERN «must be protected»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1047

**Card ID:** b1-schützen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** schützen
**CURRENT (DA):** to protect
**PROPOSED (DA):** FJERN «to protect»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1048

**Card ID:** b1-schützen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** schützen
**CURRENT (DA):** save
**PROPOSED (DA):** FJERN «save»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1049

**Card ID:** b1-schützen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** schützen
**CURRENT (DA):** to guard
**PROPOSED (DA):** FJERN «to guard»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1050

**Card ID:** b1-schützen
**Field:** study.sectionAccents.important.red
**DE konteksts:** schützen
**CURRENT (DA):** dative
**PROPOSED (DA):** FJERN «dative»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1053

**Card ID:** b1-schwanken
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** schwanken
**CURRENT (DA):** in doubt
**PROPOSED (DA):** FJERN «in doubt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1054

**Card ID:** b1-schwanken
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** schwanken
**CURRENT (DA):** to fluctuate
**PROPOSED (DA):** FJERN «to fluctuate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1055

**Card ID:** b1-schwanken
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** schwanken
**CURRENT (DA):** to wobble
**PROPOSED (DA):** FJERN «to wobble»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1056

**Card ID:** b1-schwanken
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** schwanken
**CURRENT (DA):** to doubt
**PROPOSED (DA):** FJERN «to doubt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1060

**Card ID:** b1-senden
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** senden
**CURRENT (DA):** raida
**PROPOSED (DA):** FJERN «raida»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1061

**Card ID:** b1-senden
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** senden
**CURRENT (DA):** sent
**PROPOSED (DA):** FJERN «sent»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1062

**Card ID:** b1-senden
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** senden
**CURRENT (DA):** to send
**PROPOSED (DA):** FJERN «to send»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1063

**Card ID:** b1-senden
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** senden
**CURRENT (DA):** to send
**PROPOSED (DA):** FJERN «to send»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1064

**Card ID:** b1-senden
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** senden
**CURRENT (DA):** transmit
**PROPOSED (DA):** FJERN «transmit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1068

**Card ID:** b1-senken
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** senken
**CURRENT (DA):** noliec
**PROPOSED (DA):** FJERN «noliec»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1069

**Card ID:** b1-senken
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** senken
**CURRENT (DA):** pieklusiniet
**PROPOSED (DA):** FJERN «pieklusiniet»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1070

**Card ID:** b1-senken
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** senken
**CURRENT (DA):** to lower
**PROPOSED (DA):** FJERN «to lower»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1071

**Card ID:** b1-senken
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** senken
**CURRENT (DA):** kristies
**PROPOSED (DA):** FJERN «kristies»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1072

**Card ID:** b1-senken
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** senken
**CURRENT (DA):** pacelt
**PROPOSED (DA):** FJERN «pacelt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1076

**Card ID:** b1-sinn
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Sinn
**CURRENT (DA):** feeling
**PROPOSED (DA):** FJERN «feeling»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1077

**Card ID:** b1-sinn
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Sinn
**CURRENT (DA):** meaning
**PROPOSED (DA):** FJERN «meaning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1078

**Card ID:** b1-sinn
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Sinn
**CURRENT (DA):** meaning
**PROPOSED (DA):** FJERN «meaning»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1079

**Card ID:** b1-sinn
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Sinn
**CURRENT (DA):** feeling
**PROPOSED (DA):** FJERN «feeling»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1080

**Card ID:** b1-sinn
**Field:** study.sectionAccents.important.red
**DE konteksts:** Sinn
**CURRENT (DA):** feeling
**PROPOSED (DA):** FJERN «feeling»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1084

**Card ID:** b1-sitz
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Sitz
**CURRENT (DA):** residence
**PROPOSED (DA):** FJERN «residence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1085

**Card ID:** b1-sitz
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Sitz
**CURRENT (DA):** seat
**PROPOSED (DA):** FJERN «seat»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1086

**Card ID:** b1-sitz
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Sitz
**CURRENT (DA):** location
**PROPOSED (DA):** FJERN «location»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1087

**Card ID:** b1-sitz
**Field:** study.sectionAccents.important.red
**DE konteksts:** Sitz
**CURRENT (DA):** residence
**PROPOSED (DA):** FJERN «residence»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1091

**Card ID:** b1-sich-sorgen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** sich sorgen
**CURRENT (DA):** to worry
**PROPOSED (DA):** FJERN «to worry»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1092

**Card ID:** b1-sich-sorgen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** sich sorgen
**CURRENT (DA):** take care of
**PROPOSED (DA):** FJERN «take care of»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1093

**Card ID:** b1-sich-sorgen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** sich sorgen
**CURRENT (DA):** care
**PROPOSED (DA):** FJERN «care»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1094

**Card ID:** b1-sowie
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** sowie
**CURRENT (DA):** As soon as
**PROPOSED (DA):** FJERN «As soon as»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1095

**Card ID:** b1-sowie
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** sowie
**CURRENT (DA):** as well as
**PROPOSED (DA):** FJERN «as well as»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1096

**Card ID:** b1-sowie
**Field:** study.sectionAccents.comparison.word.green[1]
**DE konteksts:** sowie
**CURRENT (DA):** und
**PROPOSED (DA):** FJERN «und»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1097

**Card ID:** b1-sowie
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** sowie
**CURRENT (DA):** un
**PROPOSED (DA):** FJERN «un»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1098

**Card ID:** b1-sowie
**Field:** study.sectionAccents.comparison.example.red[1]
**DE konteksts:** sowie
**CURRENT (DA):** und
**PROPOSED (DA):** FJERN «und»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1099

**Card ID:** b1-sowie
**Field:** study.sectionAccents.comparison.word.green[2]
**DE konteksts:** sowie
**CURRENT (DA):** sobald
**PROPOSED (DA):** FJERN «sobald»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1100

**Card ID:** b1-sowie
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** sowie
**CURRENT (DA):** as soon as
**PROPOSED (DA):** FJERN «as soon as»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1101

**Card ID:** b1-sowie
**Field:** study.sectionAccents.comparison.example.red[2]
**DE konteksts:** sowie
**CURRENT (DA):** Sobald
**PROPOSED (DA):** FJERN «Sobald»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1102

**Card ID:** b1-sowie
**Field:** study.sectionAccents.important.red
**DE konteksts:** sowie
**CURRENT (DA):** as soon as
**PROPOSED (DA):** FJERN «as soon as»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1104

**Card ID:** b1-spannung
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Spannung
**CURRENT (DA):** Spriegums
**PROPOSED (DA):** FJERN «Spriegums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1105

**Card ID:** b1-spannung
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Spannung
**CURRENT (DA):** strength
**PROPOSED (DA):** FJERN «strength»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1106

**Card ID:** b1-spannung
**Field:** study.sectionAccents.important.red
**DE konteksts:** Spannung
**CURRENT (DA):** spriegums
**PROPOSED (DA):** FJERN «spriegums»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1110

**Card ID:** b1-speichern
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** speichern
**CURRENT (DA):** accumulate
**PROPOSED (DA):** FJERN «accumulate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1111

**Card ID:** b1-speichern
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** speichern
**CURRENT (DA):** save
**PROPOSED (DA):** FJERN «save»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1112

**Card ID:** b1-speichern
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** speichern
**CURRENT (DA):** to save
**PROPOSED (DA):** FJERN «to save»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1113

**Card ID:** b1-speichern
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** speichern
**CURRENT (DA):** to keep
**PROPOSED (DA):** FJERN «to keep»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1114

**Card ID:** b1-speichern
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** speichern
**CURRENT (DA):** save
**PROPOSED (DA):** FJERN «save»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1117

**Card ID:** b1-sperren
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** sperren
**CURRENT (DA):** closed
**PROPOSED (DA):** FJERN «closed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1118

**Card ID:** b1-sperren
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** sperren
**CURRENT (DA):** to block
**PROPOSED (DA):** FJERN «to block»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1119

**Card ID:** b1-sperren
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** sperren
**CURRENT (DA):** to lock
**PROPOSED (DA):** FJERN «to lock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1120

**Card ID:** b1-sperren
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** sperren
**CURRENT (DA):** to close
**PROPOSED (DA):** FJERN «to close»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1121

**Card ID:** b1-sperren
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sperren
**CURRENT (DA):** access
**PROPOSED (DA):** FJERN «access»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1122

**Card ID:** b1-sperren
**Field:** study.sectionAccents.important.red
**DE konteksts:** sperren
**CURRENT (DA):** to close
**PROPOSED (DA):** FJERN «to close»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1123

**Card ID:** b1-spitze
**Field:** study.examples[0].lv
**DE konteksts:** Spitze
**CURRENT (DA):** Spidsen af ​​blyanten er knækket.
**PROPOSED (DA):** Spidsen af blyanten er knækket.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1124

**Card ID:** b1-spitze
**Field:** study.examples[1].lv
**DE konteksts:** Spitze
**CURRENT (DA):** Vi stod på toppen af ​​en bakke.
**PROPOSED (DA):** Vi stod på toppen af en bakke.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1125

**Card ID:** b1-spitze
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Spitze
**CURRENT (DA):** under the leadership
**PROPOSED (DA):** FJERN «under the leadership»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1126

**Card ID:** b1-spitze
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Spitze
**CURRENT (DA):** punkts
**PROPOSED (DA):** FJERN «punkts»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1127

**Card ID:** b1-spitze
**Field:** study.sectionAccents.important.red
**DE konteksts:** Spitze
**CURRENT (DA):** under the leadership
**PROPOSED (DA):** FJERN «under the leadership»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1130

**Card ID:** b1-spritzen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** spritzen
**CURRENT (DA):** inject
**PROPOSED (DA):** FJERN «inject»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1131

**Card ID:** b1-spritzen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** spritzen
**CURRENT (DA):** to splash
**PROPOSED (DA):** FJERN «to splash»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1132

**Card ID:** b1-spritzen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** spritzen
**CURRENT (DA):** to water
**PROPOSED (DA):** FJERN «to water»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1133

**Card ID:** b1-spritzen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** spritzen
**CURRENT (DA):** to spray
**PROPOSED (DA):** FJERN «to spray»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1134

**Card ID:** b1-spritzen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** spritzen
**CURRENT (DA):** Splashes
**PROPOSED (DA):** FJERN «Splashes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1135

**Card ID:** b1-spritzen
**Field:** study.sectionAccents.important.red
**DE konteksts:** spritzen
**CURRENT (DA):** inject
**PROPOSED (DA):** FJERN «inject»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1139

**Card ID:** b1-sprung
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Sprung
**CURRENT (DA):** jump
**PROPOSED (DA):** FJERN «jump»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1140

**Card ID:** b1-sprung
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Sprung
**CURRENT (DA):** to jump
**PROPOSED (DA):** FJERN «to jump»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1141

**Card ID:** b1-sprung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Sprung
**CURRENT (DA):** jump
**PROPOSED (DA):** FJERN «jump»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1142

**Card ID:** b1-sprung
**Field:** study.sectionAccents.important.red
**DE konteksts:** Sprung
**CURRENT (DA):** plaisu
**PROPOSED (DA):** FJERN «plaisu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1146

**Card ID:** b1-stand
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Stand
**CURRENT (DA):** stends
**PROPOSED (DA):** FJERN «stends»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1147

**Card ID:** b1-stand
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Stand
**CURRENT (DA):** condition
**PROPOSED (DA):** FJERN «condition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1148

**Card ID:** b1-stand
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Stand
**CURRENT (DA):** condition
**PROPOSED (DA):** FJERN «condition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1149

**Card ID:** b1-stand
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Stand
**CURRENT (DA):** location
**PROPOSED (DA):** FJERN «location»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1150

**Card ID:** b1-stand
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Stand
**CURRENT (DA):** progresam
**PROPOSED (DA):** FJERN «progresam»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1151

**Card ID:** b1-stand
**Field:** study.sectionAccents.important.red
**DE konteksts:** Stand
**CURRENT (DA):** stends
**PROPOSED (DA):** FJERN «stends»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1155

**Card ID:** b1-stellung
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Stellung
**CURRENT (DA):** darba vietu
**PROPOSED (DA):** FJERN «darba vietu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1156

**Card ID:** b1-stellung
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Stellung
**CURRENT (DA):** condition
**PROPOSED (DA):** FJERN «condition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1157

**Card ID:** b1-stellung
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Stellung
**CURRENT (DA):** condition
**PROPOSED (DA):** FJERN «condition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1158

**Card ID:** b1-stellung
**Field:** study.sectionAccents.important.red
**DE konteksts:** Stellung
**CURRENT (DA):** darba vietu
**PROPOSED (DA):** FJERN «darba vietu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1162

**Card ID:** b1-stift
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Stift
**CURRENT (DA):** Tapa
**PROPOSED (DA):** FJERN «Tapa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1163

**Card ID:** b1-stift
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Stift
**CURRENT (DA):** pencil
**PROPOSED (DA):** FJERN «pencil»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1164

**Card ID:** b1-stift
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Stift
**CURRENT (DA):** pencil
**PROPOSED (DA):** FJERN «pencil»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1165

**Card ID:** b1-stift
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Stift
**CURRENT (DA):** writing
**PROPOSED (DA):** FJERN «writing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1166

**Card ID:** b1-stift
**Field:** study.sectionAccents.important.red
**DE konteksts:** Stift
**CURRENT (DA):** tapa
**PROPOSED (DA):** FJERN «tapa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1170

**Card ID:** b1-stillen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** stillen
**CURRENT (DA):** soothes
**PROPOSED (DA):** FJERN «soothes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1171

**Card ID:** b1-stillen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** stillen
**CURRENT (DA):** satisfied
**PROPOSED (DA):** FJERN «satisfied»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1172

**Card ID:** b1-stillen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** stillen
**CURRENT (DA):** to breastfeed
**PROPOSED (DA):** FJERN «to breastfeed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1173

**Card ID:** b1-stillen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** stillen
**CURRENT (DA):** calm down
**PROPOSED (DA):** FJERN «calm down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1174

**Card ID:** b1-stillen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** stillen
**CURRENT (DA):** barot
**PROPOSED (DA):** FJERN «barot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1175

**Card ID:** b1-stillen
**Field:** study.sectionAccents.tip.leftBlocks.text.blue.[1][0]
**DE konteksts:** stillen
**CURRENT (DA):** Durst stillen
**PROPOSED (DA):** FJERN «Durst stillen»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1178

**Card ID:** b1-stoßen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** stoßen
**CURRENT (DA):** crashed into
**PROPOSED (DA):** FJERN «crashed into»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1179

**Card ID:** b1-stoßen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** stoßen
**CURRENT (DA):** we bumped into
**PROPOSED (DA):** FJERN «we bumped into»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1180

**Card ID:** b1-stoßen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** stoßen
**CURRENT (DA):** push
**PROPOSED (DA):** FJERN «push»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1181

**Card ID:** b1-stoßen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** stoßen
**CURRENT (DA):** stumt
**PROPOSED (DA):** FJERN «stumt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1182

**Card ID:** b1-stoßen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** stoßen
**CURRENT (DA):** satikt
**PROPOSED (DA):** FJERN «satikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1183

**Card ID:** b1-stoßen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** stoßen
**CURRENT (DA):** a push
**PROPOSED (DA):** FJERN «a push»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1184

**Card ID:** b1-stoßen
**Field:** study.sectionAccents.important.red
**DE konteksts:** stoßen
**CURRENT (DA):** uzdurties
**PROPOSED (DA):** FJERN «uzdurties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1188

**Card ID:** b1-streichen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** streichen
**CURRENT (DA):** let's paint
**PROPOSED (DA):** FJERN «let's paint»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1189

**Card ID:** b1-streichen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** streichen
**CURRENT (DA):** caressed
**PROPOSED (DA):** FJERN «caressed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1190

**Card ID:** b1-streichen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** streichen
**CURRENT (DA):** delete
**PROPOSED (DA):** FJERN «delete»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1191

**Card ID:** b1-streichen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** streichen
**CURRENT (DA):** delete
**PROPOSED (DA):** FJERN «delete»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1192

**Card ID:** b1-streichen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** streichen
**CURRENT (DA):** to draw
**PROPOSED (DA):** FJERN «to draw»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1193

**Card ID:** b1-streichen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** streichen
**CURRENT (DA):** saraksta
**PROPOSED (DA):** FJERN «saraksta»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1196

**Card ID:** b1-strom
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Strom
**CURRENT (DA):** energy
**PROPOSED (DA):** FJERN «energy»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1200

**Card ID:** b1-stürzen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** stürzen
**CURRENT (DA):** knocked down
**PROPOSED (DA):** FJERN «knocked down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1201

**Card ID:** b1-stürzen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** stürzen
**CURRENT (DA):** overthrown
**PROPOSED (DA):** FJERN «overthrown»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1202

**Card ID:** b1-stürzen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** stürzen
**CURRENT (DA):** krist
**PROPOSED (DA):** FJERN «krist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1203

**Card ID:** b1-stürzen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** stürzen
**CURRENT (DA):** krist
**PROPOSED (DA):** FJERN «krist»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1204

**Card ID:** b1-stürzen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** stürzen
**CURRENT (DA):** fall over
**PROPOSED (DA):** FJERN «fall over»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1205

**Card ID:** b1-stürzen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** stürzen
**CURRENT (DA):** kritiens
**PROPOSED (DA):** FJERN «kritiens»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1206

**Card ID:** b1-stürzen
**Field:** study.sectionAccents.important.red
**DE konteksts:** stürzen
**CURRENT (DA):** overthrow the government
**PROPOSED (DA):** FJERN «overthrow the government»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1210

**Card ID:** b1-szene
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Szene
**CURRENT (DA):** scandal
**PROPOSED (DA):** FJERN «scandal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1211

**Card ID:** b1-szene
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Szene
**CURRENT (DA):** vidi
**PROPOSED (DA):** FJERN «vidi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1212

**Card ID:** b1-szene
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Szene
**CURRENT (DA):** the situation
**PROPOSED (DA):** FJERN «the situation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1213

**Card ID:** b1-szene
**Field:** study.sectionAccents.important.red
**DE konteksts:** Szene
**CURRENT (DA):** scandal
**PROPOSED (DA):** FJERN «scandal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1218

**Card ID:** b1-tauchen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** tauchen
**CURRENT (DA):** soak
**PROPOSED (DA):** FJERN «soak»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1219

**Card ID:** b1-tauchen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** tauchen
**CURRENT (DA):** nirt
**PROPOSED (DA):** FJERN «nirt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1220

**Card ID:** b1-tauchen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** tauchen
**CURRENT (DA):** to swim
**PROPOSED (DA):** FJERN «to swim»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1221

**Card ID:** b1-tauchen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** tauchen
**CURRENT (DA):** immerse
**PROPOSED (DA):** FJERN «immerse»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1222

**Card ID:** b1-tauchen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** tauchen
**CURRENT (DA):** Under water
**PROPOSED (DA):** FJERN «Under water»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1223

**Card ID:** b1-tauchen
**Field:** study.sectionAccents.important.red
**DE konteksts:** tauchen
**CURRENT (DA):** to swim
**PROPOSED (DA):** FJERN «to swim»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1227

**Card ID:** b1-taufen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** taufen
**CURRENT (DA):** nosauca
**PROPOSED (DA):** FJERN «nosauca»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1228

**Card ID:** b1-taufen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** taufen
**CURRENT (DA):** baptise
**PROPOSED (DA):** FJERN «baptise»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1229

**Card ID:** b1-taufen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** taufen
**CURRENT (DA):** saukt
**PROPOSED (DA):** FJERN «saukt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1230

**Card ID:** b1-taufen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** taufen
**CURRENT (DA):** get married
**PROPOSED (DA):** FJERN «get married»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1231

**Card ID:** b1-taufen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** taufen
**CURRENT (DA):** In the church
**PROPOSED (DA):** FJERN «In the church»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1232

**Card ID:** b1-taufen
**Field:** study.sectionAccents.important.red
**DE konteksts:** taufen
**CURRENT (DA):** to bet
**PROPOSED (DA):** FJERN «to bet»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1236

**Card ID:** b1-teilnehmen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** teilnehmen
**CURRENT (DA):** to participate
**PROPOSED (DA):** FJERN «to participate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1237

**Card ID:** b1-teilnehmen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** teilnehmen
**CURRENT (DA):** to participate
**PROPOSED (DA):** FJERN «to participate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1238

**Card ID:** b1-teilnehmen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** teilnehmen
**CURRENT (DA):** to visit
**PROPOSED (DA):** FJERN «to visit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1241

**Card ID:** b1-titel
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Titel
**CURRENT (DA):** tituls
**PROPOSED (DA):** FJERN «tituls»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1242

**Card ID:** b1-titel
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Titel
**CURRENT (DA):** word
**PROPOSED (DA):** FJERN «word»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1243

**Card ID:** b1-titel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** Titel
**CURRENT (DA):** For the book
**PROPOSED (DA):** FJERN «For the book»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1244

**Card ID:** b1-titel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]
**DE konteksts:** Titel
**CURRENT (DA):** dziesmai
**PROPOSED (DA):** FJERN «dziesmai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1245

**Card ID:** b1-titel
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** Titel
**CURRENT (DA):** filmai
**PROPOSED (DA):** FJERN «filmai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1249

**Card ID:** b1-ton
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Ton
**CURRENT (DA):** in tone
**PROPOSED (DA):** FJERN «in tone»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1250

**Card ID:** b1-ton
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Ton
**CURRENT (DA):** tonis
**PROPOSED (DA):** FJERN «tonis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1251

**Card ID:** b1-ton
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Ton
**CURRENT (DA):** the sound
**PROPOSED (DA):** FJERN «the sound»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1252

**Card ID:** b1-ton
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Ton
**CURRENT (DA):** colour
**PROPOSED (DA):** FJERN «colour»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1253

**Card ID:** b1-ton
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Ton
**CURRENT (DA):** skan
**PROPOSED (DA):** FJERN «skan»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1254

**Card ID:** b1-ton
**Field:** study.sectionAccents.important.blue
**DE konteksts:** Ton
**CURRENT (DA):** in einem Ton
**PROPOSED (DA):** FJERN «in einem Ton»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1255

**Card ID:** b1-ton
**Field:** study.sectionAccents.important.red
**DE konteksts:** Ton
**CURRENT (DA):** runas manieri
**PROPOSED (DA):** FJERN «runas manieri»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1256

**Card ID:** b1-trauen
**Field:** study.examples[1].lv
**DE konteksts:** trauen
**CURRENT (DA):** Jeg tror, ​​hun er klar til opgaven.
**PROPOSED (DA):** Jeg tror, hun er klar til opgaven.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1258

**Card ID:** b1-trauen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** trauen
**CURRENT (DA):** don't dare
**PROPOSED (DA):** FJERN «don't dare»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1259

**Card ID:** b1-trauen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** trauen
**CURRENT (DA):** to trust
**PROPOSED (DA):** FJERN «to trust»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1260

**Card ID:** b1-trauen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** trauen
**CURRENT (DA):** to trust
**PROPOSED (DA):** FJERN «to trust»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1261

**Card ID:** b1-trauen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** trauen
**CURRENT (DA):** to dare
**PROPOSED (DA):** FJERN «to dare»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1262

**Card ID:** b1-treiben
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** treiben
**CURRENT (DA):** dzen
**PROPOSED (DA):** FJERN «dzen»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1263

**Card ID:** b1-treiben
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** treiben
**CURRENT (DA):** nodarboties
**PROPOSED (DA):** FJERN «nodarboties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1264

**Card ID:** b1-treiben
**Field:** study.sectionAccents.comparison.word.green[1]
**DE konteksts:** treiben
**CURRENT (DA):** machen
**PROPOSED (DA):** FJERN «machen»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1265

**Card ID:** b1-treiben
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** treiben
**CURRENT (DA):** to do
**PROPOSED (DA):** FJERN «to do»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1266

**Card ID:** b1-treiben
**Field:** study.sectionAccents.comparison.word.green[2]
**DE konteksts:** treiben
**CURRENT (DA):** antreiben
**PROPOSED (DA):** FJERN «antreiben»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1267

**Card ID:** b1-treiben
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** treiben
**CURRENT (DA):** chase
**PROPOSED (DA):** FJERN «chase»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1268

**Card ID:** b1-treiben
**Field:** study.sectionAccents.comparison.example.green[2]
**DE konteksts:** treiben
**CURRENT (DA):** uns
**PROPOSED (DA):** FJERN «uns»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1269

**Card ID:** b1-treiben
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** treiben
**CURRENT (DA):** phrase
**PROPOSED (DA):** FJERN «phrase»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1272

**Card ID:** b1-trennen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** trennen
**CURRENT (DA):** broke up
**PROPOSED (DA):** FJERN «broke up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1273

**Card ID:** b1-trennen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** trennen
**CURRENT (DA):** to separate
**PROPOSED (DA):** FJERN «to separate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1274

**Card ID:** b1-trennen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** trennen
**CURRENT (DA):** distinguish
**PROPOSED (DA):** FJERN «distinguish»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1275

**Card ID:** b1-trennen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** trennen
**CURRENT (DA):** break up
**PROPOSED (DA):** FJERN «break up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1276

**Card ID:** b1-trennen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** trennen
**CURRENT (DA):** separately
**PROPOSED (DA):** FJERN «separately»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1280

**Card ID:** b1-übergeben
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** übergeben
**CURRENT (DA):** have to throw up
**PROPOSED (DA):** FJERN «have to throw up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1281

**Card ID:** b1-übergeben
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** übergeben
**CURRENT (DA):** dot
**PROPOSED (DA):** FJERN «dot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1285

**Card ID:** b1-überholen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** überholen
**CURRENT (DA):** under repair
**PROPOSED (DA):** FJERN «under repair»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1286

**Card ID:** b1-überholen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** überholen
**CURRENT (DA):** to overtake
**PROPOSED (DA):** FJERN «to overtake»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1287

**Card ID:** b1-überholen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** überholen
**CURRENT (DA):** pass by
**PROPOSED (DA):** FJERN «pass by»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1288

**Card ID:** b1-überholen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** überholen
**CURRENT (DA):** to repair
**PROPOSED (DA):** FJERN «to repair»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1289

**Card ID:** b1-überholen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** überholen
**CURRENT (DA):** surpasses
**PROPOSED (DA):** FJERN «surpasses»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1290

**Card ID:** b1-überholen
**Field:** study.sectionAccents.important.red
**DE konteksts:** überholen
**CURRENT (DA):** overhaul
**PROPOSED (DA):** FJERN «overhaul»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1294

**Card ID:** b1-übernehmen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** übernehmen
**CURRENT (DA):** takes on
**PROPOSED (DA):** FJERN «takes on»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1295

**Card ID:** b1-übernehmen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** übernehmen
**CURRENT (DA):** take over
**PROPOSED (DA):** FJERN «take over»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1296

**Card ID:** b1-übernehmen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** übernehmen
**CURRENT (DA):** to take
**PROPOSED (DA):** FJERN «to take»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1297

**Card ID:** b1-übernehmen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** übernehmen
**CURRENT (DA):** to receive
**PROPOSED (DA):** FJERN «to receive»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1298

**Card ID:** b1-übernehmen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** übernehmen
**CURRENT (DA):** responsibility
**PROPOSED (DA):** FJERN «responsibility»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1299

**Card ID:** b1-übernehmen
**Field:** study.sectionAccents.important.red
**DE konteksts:** übernehmen
**CURRENT (DA):** undertake
**PROPOSED (DA):** FJERN «undertake»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1303

**Card ID:** b1-übersehen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** übersehen
**CURRENT (DA):** to see again
**PROPOSED (DA):** FJERN «to see again»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1304

**Card ID:** b1-übersehen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** übersehen
**CURRENT (DA):** not notice
**PROPOSED (DA):** FJERN «not notice»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1305

**Card ID:** b1-übersehen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** übersehen
**CURRENT (DA):** to see
**PROPOSED (DA):** FJERN «to see»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1306

**Card ID:** b1-übersehen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** übersehen
**CURRENT (DA):** to notice
**PROPOSED (DA):** FJERN «to notice»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1307

**Card ID:** b1-übersehen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** übersehen
**CURRENT (DA):** not notice
**PROPOSED (DA):** FJERN «not notice»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1311

**Card ID:** b1-umgehen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** umgehen
**CURRENT (DA):** apejam
**PROPOSED (DA):** FJERN «apejam»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1312

**Card ID:** b1-umgehen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** umgehen
**CURRENT (DA):** apiet
**PROPOSED (DA):** FJERN «apiet»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1313

**Card ID:** b1-umgehen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** umgehen
**CURRENT (DA):** apieties
**PROPOSED (DA):** FJERN «apieties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1314

**Card ID:** b1-umgehen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** umgehen
**CURRENT (DA):** behave
**PROPOSED (DA):** FJERN «behave»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1315

**Card ID:** b1-umgehen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** umgehen
**CURRENT (DA):** avoid
**PROPOSED (DA):** FJERN «avoid»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1316

**Card ID:** b1-umgehen
**Field:** study.sectionAccents.important.red
**DE konteksts:** umgehen
**CURRENT (DA):** apiet
**PROPOSED (DA):** FJERN «apiet»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1320

**Card ID:** b1-umschlag
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Umschlag
**CURRENT (DA):** lid
**PROPOSED (DA):** FJERN «lid»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1321

**Card ID:** b1-umschlag
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Umschlag
**CURRENT (DA):** kompresi
**PROPOSED (DA):** FJERN «kompresi»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1322

**Card ID:** b1-umschlag
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Umschlag
**CURRENT (DA):** aploksne
**PROPOSED (DA):** FJERN «aploksne»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1323

**Card ID:** b1-umschlag
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Umschlag
**CURRENT (DA):** letter
**PROPOSED (DA):** FJERN «letter»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1324

**Card ID:** b1-umschlag
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Umschlag
**CURRENT (DA):** cover
**PROPOSED (DA):** FJERN «cover»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1325

**Card ID:** b1-umschlag
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Umschlag
**CURRENT (DA):** aploksne
**PROPOSED (DA):** FJERN «aploksne»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1329

**Card ID:** b1-unterhalten
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** unterhalten
**CURRENT (DA):** we talked
**PROPOSED (DA):** FJERN «we talked»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1330

**Card ID:** b1-unterhalten
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** unterhalten
**CURRENT (DA):** entertain
**PROPOSED (DA):** FJERN «entertain»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1331

**Card ID:** b1-unterhalten
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** unterhalten
**CURRENT (DA):** to talk
**PROPOSED (DA):** FJERN «to talk»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1332

**Card ID:** b1-unterhalten
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** unterhalten
**CURRENT (DA):** to speak
**PROPOSED (DA):** FJERN «to speak»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1333

**Card ID:** b1-unterhalten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** unterhalten
**CURRENT (DA):** entertain
**PROPOSED (DA):** FJERN «entertain»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1337

**Card ID:** b1-untersuchung
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Untersuchung
**CURRENT (DA):** Research
**PROPOSED (DA):** FJERN «Research»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1338

**Card ID:** b1-untersuchung
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Untersuchung
**CURRENT (DA):** investigation
**PROPOSED (DA):** FJERN «investigation»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1339

**Card ID:** b1-untersuchung
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Untersuchung
**CURRENT (DA):** exam
**PROPOSED (DA):** FJERN «exam»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1340

**Card ID:** b1-untersuchung
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Untersuchung
**CURRENT (DA):** research
**PROPOSED (DA):** FJERN «research»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1341

**Card ID:** b1-untersuchung
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[0][0]
**DE konteksts:** Untersuchung
**CURRENT (DA):** Doctor
**PROPOSED (DA):** FJERN «Doctor»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1342

**Card ID:** b1-untersuchung
**Field:** study.sectionAccents.tip.leftBlocks.text.green.[1][0]
**DE konteksts:** Untersuchung
**CURRENT (DA):** policija
**PROPOSED (DA):** FJERN «policija»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1343

**Card ID:** b1-untersuchung
**Field:** study.sectionAccents.important.red
**DE konteksts:** Untersuchung
**CURRENT (DA):** doctor's examination
**PROPOSED (DA):** FJERN «doctor's examination»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1347

**Card ID:** b1-verändern
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** verändern
**CURRENT (DA):** is changing
**PROPOSED (DA):** FJERN «is changing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1348

**Card ID:** b1-verändern
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** verändern
**CURRENT (DA):** to change
**PROPOSED (DA):** FJERN «to change»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1349

**Card ID:** b1-verändern
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** verändern
**CURRENT (DA):** to change
**PROPOSED (DA):** FJERN «to change»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1350

**Card ID:** b1-verändern
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** verändern
**CURRENT (DA):** to change
**PROPOSED (DA):** FJERN «to change»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1351

**Card ID:** b1-verändern
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** verändern
**CURRENT (DA):** different
**PROPOSED (DA):** FJERN «different»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1354

**Card ID:** b1-verband
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Verband
**CURRENT (DA):** society
**PROPOSED (DA):** FJERN «society»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1357

**Card ID:** b1-verbindung
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Verbindung
**CURRENT (DA):** saikne
**PROPOSED (DA):** FJERN «saikne»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1358

**Card ID:** b1-verbindung
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Verbindung
**CURRENT (DA):** connection
**PROPOSED (DA):** FJERN «connection»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1359

**Card ID:** b1-verbindung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Verbindung
**CURRENT (DA):** saikne
**PROPOSED (DA):** FJERN «saikne»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1360

**Card ID:** b1-verbrennen
**Field:** study.explanation
**DE konteksts:** verbrennen
**CURRENT (DA):** Hovedidé: verbrennen betyder at brænde eller brænde til det ødelæggende punkt. Med en kropsdel ​​betyder det at brænde.
**PROPOSED (DA):** Hovedidé: verbrennen betyder at brænde eller brænde til det ødelæggende punkt. Med en kropsdel betyder det at brænde.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1362

**Card ID:** b1-verbrennen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** verbrennen
**CURRENT (DA):** burned
**PROPOSED (DA):** FJERN «burned»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1363

**Card ID:** b1-verbrennen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** verbrennen
**CURRENT (DA):** to burn
**PROPOSED (DA):** FJERN «to burn»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1364

**Card ID:** b1-verbrennen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** verbrennen
**CURRENT (DA):** degt
**PROPOSED (DA):** FJERN «degt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1365

**Card ID:** b1-verbrennen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** verbrennen
**CURRENT (DA):** set fire to
**PROPOSED (DA):** FJERN «set fire to»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1366

**Card ID:** b1-verbrennen
**Field:** study.sectionAccents.important.red
**DE konteksts:** verbrennen
**CURRENT (DA):** to burn
**PROPOSED (DA):** FJERN «to burn»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1370

**Card ID:** b1-verderben
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** verderben
**CURRENT (DA):** broke down
**PROPOSED (DA):** FJERN «broke down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1371

**Card ID:** b1-verderben
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** verderben
**CURRENT (DA):** to spoil
**PROPOSED (DA):** FJERN «to spoil»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1372

**Card ID:** b1-verderben
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** verderben
**CURRENT (DA):** salauzt
**PROPOSED (DA):** FJERN «salauzt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1373

**Card ID:** b1-verderben
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** verderben
**CURRENT (DA):** to spoil
**PROPOSED (DA):** FJERN «to spoil»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1374

**Card ID:** b1-verderben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]
**DE konteksts:** verderben
**CURRENT (DA):** Food
**PROPOSED (DA):** FJERN «Food»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1375

**Card ID:** b1-verderben
**Field:** study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]
**DE konteksts:** verderben
**CURRENT (DA):** mood
**PROPOSED (DA):** FJERN «mood»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1376

**Card ID:** b1-verderben
**Field:** study.sectionAccents.important.red
**DE konteksts:** verderben
**CURRENT (DA):** broke down
**PROPOSED (DA):** FJERN «broke down»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1379

**Card ID:** b1-verfolgen
**Field:** study.sectionAccents.examples.lv.red[0]
**DE konteksts:** verfolgen
**CURRENT (DA):** chasing
**PROPOSED (DA):** FJERN «chasing»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1380

**Card ID:** b1-verfolgen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** verfolgen
**CURRENT (DA):** chasing after
**PROPOSED (DA):** FJERN «chasing after»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1381

**Card ID:** b1-verfolgen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** verfolgen
**CURRENT (DA):** follow up
**PROPOSED (DA):** FJERN «follow up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1382

**Card ID:** b1-verfolgen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** verfolgen
**CURRENT (DA):** sekot
**PROPOSED (DA):** FJERN «sekot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1383

**Card ID:** b1-verfolgen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** verfolgen
**CURRENT (DA):** to observe
**PROPOSED (DA):** FJERN «to observe»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1384

**Card ID:** b1-verfolgen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** verfolgen
**CURRENT (DA):** follow up
**PROPOSED (DA):** FJERN «follow up»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1385

**Card ID:** b1-verfolgen
**Field:** study.sectionAccents.important.red
**DE konteksts:** verfolgen
**CURRENT (DA):** pursue
**PROPOSED (DA):** FJERN «pursue»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1389

**Card ID:** b1-verhältnis
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Verhältnis
**CURRENT (DA):** ratio
**PROPOSED (DA):** FJERN «ratio»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1390

**Card ID:** b1-verhältnis
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Verhältnis
**CURRENT (DA):** circumstances
**PROPOSED (DA):** FJERN «circumstances»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1391

**Card ID:** b1-verhältnis
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Verhältnis
**CURRENT (DA):** relationship
**PROPOSED (DA):** FJERN «relationship»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1392

**Card ID:** b1-verhältnis
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Verhältnis
**CURRENT (DA):** relationship
**PROPOSED (DA):** FJERN «relationship»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1393

**Card ID:** b1-verhältnis
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Verhältnis
**CURRENT (DA):** part
**PROPOSED (DA):** FJERN «part»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1394

**Card ID:** b1-verhältnis
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Verhältnis
**CURRENT (DA):** to people
**PROPOSED (DA):** FJERN «to people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1395

**Card ID:** b1-verhältnis
**Field:** study.sectionAccents.important.red
**DE konteksts:** Verhältnis
**CURRENT (DA):** circumstances
**PROPOSED (DA):** FJERN «circumstances»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1399

**Card ID:** b1-verlegen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** verlegen
**CURRENT (DA):** nevaru to atrast
**PROPOSED (DA):** FJERN «nevaru to atrast»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1400

**Card ID:** b1-verlegen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** verlegen
**CURRENT (DA):** izdod
**PROPOSED (DA):** FJERN «izdod»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1401

**Card ID:** b1-verlegen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** verlegen
**CURRENT (DA):** to move
**PROPOSED (DA):** FJERN «to move»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1402

**Card ID:** b1-verlegen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** verlegen
**CURRENT (DA):** to move
**PROPOSED (DA):** FJERN «to move»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1403

**Card ID:** b1-verlegen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** verlegen
**CURRENT (DA):** to lose
**PROPOSED (DA):** FJERN «to lose»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1407

**Card ID:** b1-verletzen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** verletzen
**CURRENT (DA):** aizvainoja
**PROPOSED (DA):** FJERN «aizvainoja»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1408

**Card ID:** b1-verletzen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** verletzen
**CURRENT (DA):** violated
**PROPOSED (DA):** FJERN «violated»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1409

**Card ID:** b1-verletzen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** verletzen
**CURRENT (DA):** savainot
**PROPOSED (DA):** FJERN «savainot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1410

**Card ID:** b1-verletzen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** verletzen
**CURRENT (DA):** apvainot
**PROPOSED (DA):** FJERN «apvainot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1411

**Card ID:** b1-verletzen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** verletzen
**CURRENT (DA):** to violate
**PROPOSED (DA):** FJERN «to violate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1412

**Card ID:** b1-verletzen
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** verletzen
**CURRENT (DA):** savaino
**PROPOSED (DA):** FJERN «savaino»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1413

**Card ID:** b1-verletzen
**Field:** study.sectionAccents.important.red
**DE konteksts:** verletzen
**CURRENT (DA):** to violate
**PROPOSED (DA):** FJERN «to violate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1415

**Card ID:** b1-versichern
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** versichern
**CURRENT (DA):** confirmed
**PROPOSED (DA):** FJERN «confirmed»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1416

**Card ID:** b1-versichern
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** versichern
**CURRENT (DA):** to insure
**PROPOSED (DA):** FJERN «to insure»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1417

**Card ID:** b1-versichern
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** versichern
**CURRENT (DA):** to provide
**PROPOSED (DA):** FJERN «to provide»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1418

**Card ID:** b1-versichern
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** versichern
**CURRENT (DA):** confirm
**PROPOSED (DA):** FJERN «confirm»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1419

**Card ID:** b1-versichern
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** versichern
**CURRENT (DA):** to insure
**PROPOSED (DA):** FJERN «to insure»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1420

**Card ID:** b1-versichern
**Field:** study.sectionAccents.important.red
**DE konteksts:** versichern
**CURRENT (DA):** apliecinu
**PROPOSED (DA):** FJERN «apliecinu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1424

**Card ID:** b1-vertreten
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** vertreten
**CURRENT (DA):** aizvietoju
**PROPOSED (DA):** FJERN «aizvietoju»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1425

**Card ID:** b1-vertreten
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** vertreten
**CURRENT (DA):** defends
**PROPOSED (DA):** FJERN «defends»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1426

**Card ID:** b1-vertreten
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** vertreten
**CURRENT (DA):** to represent
**PROPOSED (DA):** FJERN «to represent»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1427

**Card ID:** b1-vertreten
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** vertreten
**CURRENT (DA):** to replace
**PROPOSED (DA):** FJERN «to replace»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1428

**Card ID:** b1-vertreten
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** vertreten
**CURRENT (DA):** to represent
**PROPOSED (DA):** FJERN «to represent»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1429

**Card ID:** b1-vertreten
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** vertreten
**CURRENT (DA):** on behalf of
**PROPOSED (DA):** FJERN «on behalf of»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1430

**Card ID:** b1-vertreten
**Field:** study.sectionAccents.important.red
**DE konteksts:** vertreten
**CURRENT (DA):** aizvietot
**PROPOSED (DA):** FJERN «aizvietot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1439

**Card ID:** b1-vorkommen
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** vorkommen
**CURRENT (DA):** it seems
**PROPOSED (DA):** FJERN «it seems»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1440

**Card ID:** b1-vorkommen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** vorkommen
**CURRENT (DA):** to happen
**PROPOSED (DA):** FJERN «to happen»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1441

**Card ID:** b1-vorkommen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** vorkommen
**CURRENT (DA):** notikt
**PROPOSED (DA):** FJERN «notikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1442

**Card ID:** b1-vorkommen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** vorkommen
**CURRENT (DA):** it seems
**PROPOSED (DA):** FJERN «it seems»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1443

**Card ID:** b1-vorkommen
**Field:** study.sectionAccents.important.red
**DE konteksts:** vorkommen
**CURRENT (DA):** separable
**PROPOSED (DA):** FJERN «separable»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1446

**Card ID:** b1-vorstellung
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Vorstellung
**CURRENT (DA):** imagines
**PROPOSED (DA):** FJERN «imagines»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1447

**Card ID:** b1-vorstellung
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Vorstellung
**CURRENT (DA):** the show
**PROPOSED (DA):** FJERN «the show»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1448

**Card ID:** b1-vorstellung
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Vorstellung
**CURRENT (DA):** the show
**PROPOSED (DA):** FJERN «the show»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1449

**Card ID:** b1-vorstellung
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Vorstellung
**CURRENT (DA):** the show
**PROPOSED (DA):** FJERN «the show»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1450

**Card ID:** b1-vorstellung
**Field:** study.sectionAccents.important.red
**DE konteksts:** Vorstellung
**CURRENT (DA):** darba intervija
**PROPOSED (DA):** FJERN «darba intervija»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1454

**Card ID:** b1-vorziehen
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** vorziehen
**CURRENT (DA):** we are moving
**PROPOSED (DA):** FJERN «we are moving»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1455

**Card ID:** b1-vorziehen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** vorziehen
**CURRENT (DA):** give preference
**PROPOSED (DA):** FJERN «give preference»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1456

**Card ID:** b1-vorziehen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** vorziehen
**CURRENT (DA):** give preference
**PROPOSED (DA):** FJERN «give preference»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1457

**Card ID:** b1-vorziehen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** vorziehen
**CURRENT (DA):** to move
**PROPOSED (DA):** FJERN «to move»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1458

**Card ID:** b1-vorziehen
**Field:** study.sectionAccents.important.red
**DE konteksts:** vorziehen
**CURRENT (DA):** separable
**PROPOSED (DA):** FJERN «separable»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1461

**Card ID:** b1-wache
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Wache
**CURRENT (DA):** iecirkni
**PROPOSED (DA):** FJERN «iecirkni»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1462

**Card ID:** b1-wache
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Wache
**CURRENT (DA):** to protect
**PROPOSED (DA):** FJERN «to protect»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1465

**Card ID:** b1-wachen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** wachen
**CURRENT (DA):** to protect
**PROPOSED (DA):** FJERN «to protect»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1466

**Card ID:** b1-wachen
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** wachen
**CURRENT (DA):** pamosties
**PROPOSED (DA):** FJERN «pamosties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1467

**Card ID:** b1-wachen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** wachen
**CURRENT (DA):** to guard
**PROPOSED (DA):** FJERN «to guard»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1470

**Card ID:** b1-wagen
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Wagen
**CURRENT (DA):** car
**PROPOSED (DA):** FJERN «car»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1471

**Card ID:** b1-wagen
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Wagen
**CURRENT (DA):** car
**PROPOSED (DA):** FJERN «car»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1472

**Card ID:** b1-wagen
**Field:** study.sectionAccents.comparison.meaning.purple[3]
**DE konteksts:** Wagen
**CURRENT (DA):** to dare
**PROPOSED (DA):** FJERN «to dare»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1475

**Card ID:** b1-wechsel
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Wechsel
**CURRENT (DA):** Exchange rate
**PROPOSED (DA):** FJERN «Exchange rate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1476

**Card ID:** b1-wechsel
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Wechsel
**CURRENT (DA):** shift
**PROPOSED (DA):** FJERN «shift»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1477

**Card ID:** b1-wechsel
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Wechsel
**CURRENT (DA):** a change
**PROPOSED (DA):** FJERN «a change»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1478

**Card ID:** b1-wechsel
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Wechsel
**CURRENT (DA):** to change
**PROPOSED (DA):** FJERN «to change»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1479

**Card ID:** b1-wechsel
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Wechsel
**CURRENT (DA):** changes
**PROPOSED (DA):** FJERN «changes»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1480

**Card ID:** b1-wechsel
**Field:** study.sectionAccents.important.red
**DE konteksts:** Wechsel
**CURRENT (DA):** exchange rate
**PROPOSED (DA):** FJERN «exchange rate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1486

**Card ID:** b1-welle
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Welle
**CURRENT (DA):** shaft
**PROPOSED (DA):** FJERN «shaft»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1487

**Card ID:** b1-welle
**Field:** study.sectionAccents.important.red
**DE konteksts:** Welle
**CURRENT (DA):** shaft
**PROPOSED (DA):** FJERN «shaft»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1490

**Card ID:** b1-wenden
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** wenden
**CURRENT (DA):** turns to
**PROPOSED (DA):** FJERN «turns to»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1491

**Card ID:** b1-wenden
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** wenden
**CURRENT (DA):** pagriezt
**PROPOSED (DA):** FJERN «pagriezt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1492

**Card ID:** b1-wenden
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** wenden
**CURRENT (DA):** pagriezt
**PROPOSED (DA):** FJERN «pagriezt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1493

**Card ID:** b1-wenden
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** wenden
**CURRENT (DA):** turn to
**PROPOSED (DA):** FJERN «turn to»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1496

**Card ID:** b1-werben
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** werben
**CURRENT (DA):** to obtain
**PROPOSED (DA):** FJERN «to obtain»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1497

**Card ID:** b1-werben
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** werben
**CURRENT (DA):** advertise
**PROPOSED (DA):** FJERN «advertise»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1498

**Card ID:** b1-werben
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** werben
**CURRENT (DA):** pieteikties
**PROPOSED (DA):** FJERN «pieteikties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1499

**Card ID:** b1-werben
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** werben
**CURRENT (DA):** advertises
**PROPOSED (DA):** FJERN «advertises»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1503

**Card ID:** b1-werk
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** Werk
**CURRENT (DA):** in the factory
**PROPOSED (DA):** FJERN «in the factory»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1504

**Card ID:** b1-werk
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** Werk
**CURRENT (DA):** factory
**PROPOSED (DA):** FJERN «factory»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1505

**Card ID:** b1-werk
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Werk
**CURRENT (DA):** result
**PROPOSED (DA):** FJERN «result»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1506

**Card ID:** b1-werk
**Field:** study.sectionAccents.important.red
**DE konteksts:** Werk
**CURRENT (DA):** factory
**PROPOSED (DA):** FJERN «factory»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1510

**Card ID:** b1-zeugnis
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Zeugnis
**CURRENT (DA):** knowledge
**PROPOSED (DA):** FJERN «knowledge»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1511

**Card ID:** b1-zeugnis
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Zeugnis
**CURRENT (DA):** testimony
**PROPOSED (DA):** FJERN «testimony»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1512

**Card ID:** b1-zeugnis
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** Zeugnis
**CURRENT (DA):** cognition
**PROPOSED (DA):** FJERN «cognition»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1513

**Card ID:** b1-zeugnis
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Zeugnis
**CURRENT (DA):** apliecina
**PROPOSED (DA):** FJERN «apliecina»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1514

**Card ID:** b1-zeugnis
**Field:** study.sectionAccents.important.red
**DE konteksts:** Zeugnis
**CURRENT (DA):** doctor's certificate
**PROPOSED (DA):** FJERN «doctor's certificate»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1518

**Card ID:** b1-zugeben
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** zugeben
**CURRENT (DA):** to admit
**PROPOSED (DA):** FJERN «to admit»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1519

**Card ID:** b1-zugeben
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** zugeben
**CURRENT (DA):** pievienot
**PROPOSED (DA):** FJERN «pievienot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1520

**Card ID:** b1-zugeben
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** zugeben
**CURRENT (DA):** confess
**PROPOSED (DA):** FJERN «confess»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1521

**Card ID:** b1-zugeben
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** zugeben
**CURRENT (DA):** admits
**PROPOSED (DA):** FJERN «admits»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1522

**Card ID:** b1-zugeben
**Field:** study.sectionAccents.important.red
**DE konteksts:** zugeben
**CURRENT (DA):** pievienot
**PROPOSED (DA):** FJERN «pievienot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1524

**Card ID:** b1-zünden
**Field:** study.sectionAccents.examples.lv.red[2]
**DE konteksts:** zünden
**CURRENT (DA):** worked
**PROPOSED (DA):** FJERN «worked»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1525

**Card ID:** b1-zünden
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** zünden
**CURRENT (DA):** aizdegties
**PROPOSED (DA):** FJERN «aizdegties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1526

**Card ID:** b1-zünden
**Field:** study.sectionAccents.comparison.meaning.purple[1]
**DE konteksts:** zünden
**CURRENT (DA):** set fire to
**PROPOSED (DA):** FJERN «set fire to»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1527

**Card ID:** b1-zünden
**Field:** study.sectionAccents.comparison.meaning.purple[2]
**DE konteksts:** zünden
**CURRENT (DA):** degt
**PROPOSED (DA):** FJERN «degt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1528

**Card ID:** b1-zünden
**Field:** study.sectionAccents.tip.red
**DE konteksts:** zünden
**CURRENT (DA):** darboties
**PROPOSED (DA):** FJERN «darboties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1531

**Card ID:** b1-zusammenhang
**Field:** study.sectionAccents.examples.lv.red[1]
**DE konteksts:** Zusammenhang
**CURRENT (DA):** in relation to
**PROPOSED (DA):** FJERN «in relation to»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1532

**Card ID:** b1-zusammenhang
**Field:** study.sectionAccents.comparison.meaning.purple[0]
**DE konteksts:** Zusammenhang
**CURRENT (DA):** relationship
**PROPOSED (DA):** FJERN «relationship»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1533

**Card ID:** b1-zusammenhang
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** Zusammenhang
**CURRENT (DA):** related
**PROPOSED (DA):** FJERN «related»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1534

**Card ID:** b1-beruf
**Field:** study.explanation
**DE konteksts:** Beruf
**CURRENT (DA):** Hovedidé: der Beruf betyder en persons erhverv eller faste arbejdsområde. Det besvarer spørgsmålet om, hvad man laver professionelt. die Arbeit er arbejde i almindelighed eller arbejde i særdeleshed. der Job er et mere afslappet ord for et job eller en arbejdsplads. Beskæftigelse er ikke hovedbetydn…
**PROPOSED (DA):** Hovedidé: der Beruf betyder en persons erhverv eller faste arbejdsområde. Det besvarer spørgsmålet om, hvad man laver professionelt. die Arbeit er arbejde i almindelighed eller arbejde i særdeleshed. der Job er et mere afslappet ord for et job eller en arbejdsplads. Beskæftigelse er ikke hovedbetydn…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1543

**Card ID:** b1-weil
**Field:** study.explanation[0]
**DE konteksts:** weil
**CURRENT (DA):** Hovedidé: Den mest almindelige årsag konjunktion. Efter weil er verbet i slutningen af ​​sætningen.
**PROPOSED (DA):** Hovedidé: Den mest almindelige årsag konjunktion. Efter weil er verbet i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1544

**Card ID:** b1-weil
**Field:** study.explanation[1]
**DE konteksts:** weil
**CURRENT (DA):** Weil betyder hovedsageligt: ​​forklar årsagen.
**PROPOSED (DA):** Weil betyder hovedsageligt: forklar årsagen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1545

**Card ID:** b1-weil
**Field:** study.tip[0]
**DE konteksts:** weil
**CURRENT (DA):** Den mest almindelige konjunktion af fornuft. Efter weil er verbet i slutningen af ​​sætningen.
**PROPOSED (DA):** Den mest almindelige konjunktion af fornuft. Efter weil er verbet i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1546

**Card ID:** b1-da
**Field:** study.explanation[0]
**DE konteksts:** da
**CURRENT (DA):** Hovedidé: Sammenhæng af fornuft, når årsagen allerede er kendt eller nævnt. Efter da er verbet i slutningen af ​​sætningen.
**PROPOSED (DA):** Hovedidé: Sammenhæng af fornuft, når årsagen allerede er kendt eller nævnt. Efter da er verbet i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1547

**Card ID:** b1-da
**Field:** study.explanation[1]
**DE konteksts:** da
**CURRENT (DA):** Da betyder hovedsageligt: ​​forklare en eller anden grund.
**PROPOSED (DA):** Da betyder hovedsageligt: forklare en eller anden grund.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1548

**Card ID:** b1-da
**Field:** study.explanation[4]
**DE konteksts:** da
**CURRENT (DA):** Begge kræver et verbum i slutningen af ​​sætningen.
**PROPOSED (DA):** Begge kræver et verbum i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1549

**Card ID:** b1-da
**Field:** study.tip[0]
**DE konteksts:** da
**CURRENT (DA):** Konjunktion af årsag, når årsagen allerede er kendt eller nævnt. Efter da er verbet i slutningen af ​​sætningen.
**PROPOSED (DA):** Konjunktion af årsag, når årsagen allerede er kendt eller nævnt. Efter da er verbet i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1550

**Card ID:** b1-obwohl
**Field:** study.explanation[0]
**DE konteksts:** obwohl
**CURRENT (DA):** Hovedidé: Introducerer den modsatte grund i hjælpeklausulen. Verbet er i slutningen af ​​sætningen.
**PROPOSED (DA):** Hovedidé: Introducerer den modsatte grund i hjælpeklausulen. Verbet er i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1551

**Card ID:** b1-obwohl
**Field:** study.explanation[1]
**DE konteksts:** obwohl
**CURRENT (DA):** Obwohl betyder hovedsageligt: ​​den modsatte grund.
**PROPOSED (DA):** Obwohl betyder hovedsageligt: den modsatte grund.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1552

**Card ID:** b1-obwohl
**Field:** study.tip[0]
**DE konteksts:** obwohl
**CURRENT (DA):** Introducerer den modsatte grund i hjælpeklausulen. Verbet er i slutningen af ​​sætningen.
**PROPOSED (DA):** Introducerer den modsatte grund i hjælpeklausulen. Verbet er i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1553

**Card ID:** b1-obwohl
**Field:** study.important[3]
**DE konteksts:** obwohl
**CURRENT (DA):** Introducerer den modsatte grund i hjælpeklausulen. Verbet er i slutningen af ​​sætningen.
**PROPOSED (DA):** Introducerer den modsatte grund i hjælpeklausulen. Verbet er i slutningen af sætningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1554

**Card ID:** b1-trotzdem
**Field:** study.explanation[1]
**DE konteksts:** trotzdem
**CURRENT (DA):** Trotzdem betyder hovedsageligt: ​​resultat trods.
**PROPOSED (DA):** Trotzdem betyder hovedsageligt: resultat trods.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1555

**Card ID:** b1-anstatt-zu
**Field:** study.explanation[1]
**DE konteksts:** anstatt ... zu
**CURRENT (DA):** I stedet for ... betyder zu hovedsageligt: ​​én handling erstatter en anden.
**PROPOSED (DA):** I stedet for ... betyder zu hovedsageligt: én handling erstatter en anden.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1556

**Card ID:** b1-ohne-zu
**Field:** study.explanation[1]
**DE konteksts:** ohne ... zu
**CURRENT (DA):** Ohne ... zu betyder hovedsageligt: ​​handlingen finder ikke sted.
**PROPOSED (DA):** Ohne ... zu betyder hovedsageligt: handlingen finder ikke sted.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1557

**Card ID:** b1-sich-befinden-study
**Field:** study.examples[3].lv
**DE konteksts:** sich befinden
**CURRENT (DA):** Skolen ligger ved siden af ​​parken.
**PROPOSED (DA):** Skolen ligger ved siden af parken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1563

**Card ID:** b1-sich-befinden-study
**Field:** study.sectionAccents.tip.leftBlocks.text.purple.[0][0]
**DE konteksts:** sich befinden
**CURRENT (DA):** atrasties
**PROPOSED (DA):** FJERN «atrasties»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1564

**Card ID:** b1-erbe
**Field:** study.explanation[1]
**DE konteksts:** Erbe
**CURRENT (DA):** Der Erbe betyder hovedsageligt: ​​mand.
**PROPOSED (DA):** Der Erbe betyder hovedsageligt: mand.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1565

**Card ID:** b1-erbe
**Field:** study.explanation[3]
**DE konteksts:** Erbe
**CURRENT (DA):** Das Erbe betyder hovedsageligt: ​​ting / værdi.
**PROPOSED (DA):** Das Erbe betyder hovedsageligt: ting / værdi.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1566

**Card ID:** b1-erbe-study
**Field:** study.explanation[1]
**DE konteksts:** Erbe
**CURRENT (DA):** Der Erbe betyder hovedsageligt: ​​mand.
**PROPOSED (DA):** Der Erbe betyder hovedsageligt: mand.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1567

**Card ID:** b1-erbe-study
**Field:** study.explanation[3]
**DE konteksts:** Erbe
**CURRENT (DA):** Das Erbe betyder hovedsageligt: ​​ting / værdi.
**PROPOSED (DA):** Das Erbe betyder hovedsageligt: ting / værdi.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1568

**Card ID:** b1-vertrauen
**Field:** study.explanation[1]
**DE konteksts:** Vertrauen
**CURRENT (DA):** Das Vertrauen betyder hovedsageligt: ​​følelse / forhold.
**PROPOSED (DA):** Das Vertrauen betyder hovedsageligt: følelse / forhold.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1569

**Card ID:** b1-vertrauen
**Field:** study.explanation[3]
**DE konteksts:** Vertrauen
**CURRENT (DA):** Vertrauen betyder hovedsageligt: ​​at tro på nogen.
**PROPOSED (DA):** Vertrauen betyder hovedsageligt: at tro på nogen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1570

**Card ID:** b1-vertrauen-study
**Field:** study.explanation[1]
**DE konteksts:** vertrauen
**CURRENT (DA):** Vertrauen betyder hovedsageligt: ​​følelse / relation.
**PROPOSED (DA):** Vertrauen betyder hovedsageligt: følelse / relation.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1571

**Card ID:** b1-vertrauen-study
**Field:** study.explanation[3]
**DE konteksts:** vertrauen
**CURRENT (DA):** Vertrauen betyder hovedsageligt: ​​at tro på nogen.
**PROPOSED (DA):** Vertrauen betyder hovedsageligt: at tro på nogen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1572

**Card ID:** b1-trotz
**Field:** study.explanation[1]
**DE konteksts:** Trotz
**CURRENT (DA):** Der Trotz betyder hovedsageligt: ​​stædig holdning.
**PROPOSED (DA):** Der Trotz betyder hovedsageligt: stædig holdning.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1573

**Card ID:** b1-trotz
**Field:** study.explanation[3]
**DE konteksts:** Trotz
**CURRENT (DA):** Trotz betyder hovedsageligt: ​​på trods af.
**PROPOSED (DA):** Trotz betyder hovedsageligt: på trods af.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1574

**Card ID:** b1-trotz-study
**Field:** study.explanation[1]
**DE konteksts:** trotz
**CURRENT (DA):** Trotz betyder hovedsageligt: ​​stædig holdning.
**PROPOSED (DA):** Trotz betyder hovedsageligt: stædig holdning.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B1-1575

**Card ID:** b1-trotz-study
**Field:** study.explanation[3]
**DE konteksts:** trotz
**CURRENT (DA):** Trotz betyder hovedsageligt: ​​på trods af.
**PROPOSED (DA):** Trotz betyder hovedsageligt: på trods af.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

---

## 6. Metodoloģija

1. `node scripts/audit-da-b1-collect.js` — READ-ONLY kolektors (DE etalons `data/b1.js`)
2. `node scripts/build-da-b1-owner-review-groups.js` — OWNER review batch faili
3. `node scripts/audit-da-b1-report-gen.js` — šis pārskats
4. Pilna 3367/3367 kartīšu coverage ar automātisku DA lauku caurskanēšanu
5. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas

**Production changes = 0**

**DE changes = 0**