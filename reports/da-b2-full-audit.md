# DA–DE B2 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Audita režīms:** READ-ONLY
**Production fails:** `data/da/b2.js` (primārais) + `www/data/da/b2.js` (mirror)
**Piezīme:** Dāņu tulkojumi glabājas laukā lv (projekta konvencija).
**DE etalons (tikai lasīšana):** `data/b2.js (DE parity only, READ-ONLY)`

---

## 1. Dataset scope

| Metrika | Vērtība |
|---------|---------|
| Cards total | **2118** |
| Cards audited | **2118/2118** |
| Flashcards | **2058** |
| Study total | **60** |
| Study audited | **60/60** |
| standardStudy | **15** |
| minimalStudy | **45** |
| Other study types | **0** |
| Coverage | **100%** |
| Parastās kartītes | **2058** |

## 2. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kopējie validētie atradumi | **345** |
| CRITICAL | **0** |
| HIGH | **12** |
| MEDIUM | **333** |
| LOW | **0** |
| FALSE_POSITIVE | **0** |
| DE_SOURCE_ISSUE | **0** |
| Svešvalodu atlikumi (auditēti) | **21** |
| Zero-width artefakti | **9** |
| sectionAccents findings | **0** |
| Missing Study | **0** |
| Front/lv sinonīmu ķēdes | **324** |
| Comparison LV atlikumi | **12** |
| Syntax | **PASS** |
| Mirror data ↔ www | **PASS** |
| Parity (--lang=da, B1) | **PASS** |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE B2: NEEDS REPAIR**

Atrasts **345** labojumu ierakstu. DE integritāte: **PASS**; Study paritāte: **PASS**. OWNER review faili sagatavoti copy-only labojumiem.

---

## 3. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 2118/2118 PASS |
| Study skaits | 60/60 PASS |
| DE lauku secība/identitāte | PASS |
| Study paritāte (missing/extra) | PASS |
| Study ID unikalitāte | PASS |
| Mirror data ↔ www | PASS |
| JS syntax | PASS |
| Language parity (B1) | PASS |

---

## 4. OWNER review faili

- [`da-b2-owner-review-01.md`](./da-b2-owner-review-01.md)
- [`da-b2-owner-review-02.md`](./da-b2-owner-review-02.md)
- [`da-b2-owner-review-03.md`](./da-b2-owner-review-03.md)
- [`da-b2-owner-review-04.md`](./da-b2-owner-review-04.md)
- [`da-b2-owner-review-05.md`](./da-b2-owner-review-05.md)
- [`da-b2-owner-review-06.md`](./da-b2-owner-review-06.md)
- [`da-b2-owner-review-07.md`](./da-b2-owner-review-07.md)
- [`da-b2-owner-review-08.md`](./da-b2-owner-review-08.md)
- [`da-b2-owner-review-README.md`](./da-b2-owner-review-README.md)

Indekss: [`da-b2-owner-review-README.md`](./da-b2-owner-review-README.md)

---

## 5. Pilns atradumu saraksts

### 5.2 HIGH — LV atlikumi un obligātie lauki

#### DA-B2-0223

**Card ID:** b2-hochwasser
**Field:** study.comparison[0].example
**DE konteksts:** Hochwasser
**CURRENT (DA):** Es gibt Hochwasser. = Ir plūdi.
**PROPOSED (DA):** Es gibt Hochwasser. = Efter regnen er der en oversvømmelse.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0224

**Card ID:** b2-hochwasser
**Field:** study.comparison[1].example
**DE konteksts:** Hochwasser
**CURRENT (DA):** Die Überschwemmung zerstörte Häuser. = Plūdi izpostīja mājas.
**PROPOSED (DA):** Die Überschwemmung zerstörte Häuser. = Plūdi izpostīja mājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0225

**Card ID:** b2-hochwasser
**Field:** study.comparison[2].example
**DE konteksts:** Hochwasser
**CURRENT (DA):** Der Pegel steigt. = Ūdens līmenis ceļas.
**PROPOSED (DA):** Der Pegel steigt. = Ūdens līmenis ceļas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0237

**Card ID:** b2-nachdruck
**Field:** study.comparison[0].example
**DE konteksts:** Nachdruck
**CURRENT (DA):** Er legt Nachdruck auf die Frist. = Viņš uzsver termiņu.
**PROPOSED (DA):** Er legt Nachdruck auf die Frist. = Han understreger deadline.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0238

**Card ID:** b2-nachdruck
**Field:** study.comparison[1].example
**DE konteksts:** Nachdruck
**CURRENT (DA):** Der Nachdruck erschien im Frühjahr. = Atkārtotais izdevums iznāca pavasarī.
**PROPOSED (DA):** Der Nachdruck erschien im Frühjahr. = Et genoptryk af romanen udkom i foråret.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0239

**Card ID:** b2-nachdruck
**Field:** study.comparison[2].example
**DE konteksts:** Nachdruck
**CURRENT (DA):** Unter Druck stehen = būt spiedienā.
**PROPOSED (DA):** Unter Druck stehen = būt spiedienā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0334

**Card ID:** b2-zuweisen
**Field:** study.comparison[0].example
**DE konteksts:** zuweisen
**CURRENT (DA):** Er weist die Aufgabe zu. = Viņš piešķir uzdevumu.
**PROPOSED (DA):** Er weist die Aufgabe zu. = Chefen giver ham en ny opgave.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0335

**Card ID:** b2-zuweisen
**Field:** study.comparison[1].example
**DE konteksts:** zuweisen
**CURRENT (DA):** Er gibt mir die Arbeit. = Viņš man dod darbu.
**PROPOSED (DA):** Er gibt mir die Arbeit. = Viņš man dod darbu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0336

**Card ID:** b2-zuweisen
**Field:** study.comparison[2].example
**DE konteksts:** zuweisen
**CURRENT (DA):** Er verteilt die Aufgaben. = Viņš sadala uzdevumus.
**PROPOSED (DA):** Er verteilt die Aufgaben. = Viņš sadala uzdevumus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0338

**Card ID:** b2-zuwider
**Field:** study.comparison[1].example
**DE konteksts:** zuwider
**CURRENT (DA):** Es ist mir zuwider. = Man tas nepatīk.
**PROPOSED (DA):** Es ist mir zuwider. = Jeg har det nepatīk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0341

**Card ID:** b2-anbieten
**Field:** study.comparison[0].example
**DE konteksts:** anbieten
**CURRENT (DA):** Ich biete Hilfe an. = Es piedāvāju palīdzību.
**PROPOSED (DA):** Ich biete Hilfe an. = Jeg tilbyder dig min hjælp.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-B2-0342

**Card ID:** b2-anbieten
**Field:** study.comparison[1].example
**DE konteksts:** anbieten
**CURRENT (DA):** Er bietet viel Geld. = Viņš piedāvā daudz naudas.
**PROPOSED (DA):** Er bietet viel Geld. = Viņš piedāvā daudz naudas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Smagums:** HIGH
**Statuss:** LABOT

### 5.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes

#### DA-B2-0001

**Card ID:** b2-abbringen-36
**Field:** lv
**DE konteksts:** abbringen
**CURRENT (DA):** Fraråde • Fraråde • Aflede
**PROPOSED (DA):** Fraråde • Fraråde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0002

**Card ID:** b2-abfällig-41
**Field:** lv
**DE konteksts:** abfällig
**CURRENT (DA):** Ugunstig • Negativ • Dårlig • Misbilligende
**PROPOSED (DA):** Ugunstig • Negativ
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0003

**Card ID:** b2-abfertigen-42
**Field:** lv
**DE konteksts:** abfertigen
**CURRENT (DA):** Send • Send afsted • Servér • Behandl uvenligt
**PROPOSED (DA):** Send • Send afsted
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0004

**Card ID:** b2-ableiten-50
**Field:** lv
**DE konteksts:** ableiten
**CURRENT (DA):** Bly • Afled • Udled
**PROPOSED (DA):** Bly • Afled
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0005

**Card ID:** b2-Abnutzung-52
**Field:** lv
**DE konteksts:** Abnutzung
**CURRENT (DA):** Nedslidning • Nedslidning • Nedslidning
**PROPOSED (DA):** Nedslidning • Nedslidning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0006

**Card ID:** b2-abschlagen-59
**Field:** lv
**DE konteksts:** abschlagen
**CURRENT (DA):** Skær ned • Afvis • Frastød • Afvis
**PROPOSED (DA):** Skær ned • Afvis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0007

**Card ID:** b2-absondern-63
**Field:** lv
**DE konteksts:** absondern
**CURRENT (DA):** Separat • Separat • Isolere
**PROPOSED (DA):** Separat • Separat
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0008

**Card ID:** b2-abtragen-71
**Field:** lv
**DE konteksts:** abtragen
**CURRENT (DA):** Carry away • Carry away • Nedriv
**PROPOSED (DA):** Carry away • Carry away
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0009

**Card ID:** b2-abtreten-72
**Field:** lv
**DE konteksts:** abtreten
**CURRENT (DA):** Træk tilbage • Giv • Forlad
**PROPOSED (DA):** Træk tilbage • Giv
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0010

**Card ID:** b2-Anmut-85
**Field:** lv
**DE konteksts:** Anmut
**CURRENT (DA):** Tiltrækningskraft • Skønhed • Ynde
**PROPOSED (DA):** Tiltrækningskraft • Skønhed
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0011

**Card ID:** b2-Äußerung-104
**Field:** lv
**DE konteksts:** Äußerung
**CURRENT (DA):** Ytring • Udtryk • Udtryk
**PROPOSED (DA):** Ytring • Udtryk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0012

**Card ID:** b2-aussetzen-105
**Field:** lv
**DE konteksts:** aussetzen
**CURRENT (DA):** Indlæg • Emne • Opponere • Stå
**PROPOSED (DA):** Indlæg • Emne
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0013

**Card ID:** b2-ausspannen-107
**Field:** lv
**DE konteksts:** ausspannen
**CURRENT (DA):** At udløse • At tage en partner fra sig • At hvile
**PROPOSED (DA):** At udløse • At tage en partner fra sig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0014

**Card ID:** b2-ausstopfen-110
**Field:** lv
**DE konteksts:** ausstopfen
**CURRENT (DA):** At udfylde • At udfylde • At fylde ud
**PROPOSED (DA):** At udfylde • At udfylde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0015

**Card ID:** b2-ausströmen-111
**Field:** lv
**DE konteksts:** ausströmen
**CURRENT (DA):** Ooze • Udstråle • Udstråle
**PROPOSED (DA):** Ooze • Udstråle
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0016

**Card ID:** b2-austragen-112
**Field:** lv
**DE konteksts:** austragen
**CURRENT (DA):** Bær • Lever • Vind
**PROPOSED (DA):** Bær • Lever
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0017

**Card ID:** b2-austreten-114
**Field:** lv
**DE konteksts:** austreten
**CURRENT (DA):** Smid ud • Lej • Afslut
**PROPOSED (DA):** Smid ud • Lej
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0018

**Card ID:** b2-ausweisen-117
**Field:** lv
**DE konteksts:** ausweisen
**CURRENT (DA):** Udvis • Send ud • Bekræft • Bevis
**PROPOSED (DA):** Udvis • Send ud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0019

**Card ID:** b2-auszeichnen-120
**Field:** lv
**DE konteksts:** auszeichnen
**CURRENT (DA):** Pris • Pris • Skil dig ud
**PROPOSED (DA):** Pris • Pris
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0020

**Card ID:** b2-Auszeichnung-121
**Field:** lv
**DE konteksts:** Auszeichnung
**CURRENT (DA):** Tildeling • Pris • Hæderstegn
**PROPOSED (DA):** Tildeling • Pris
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0021

**Card ID:** b2-Beförderung-150
**Field:** lv
**DE konteksts:** Beförderung
**CURRENT (DA):** Levering • Transport • Kampagne • Kampagne
**PROPOSED (DA):** Levering • Transport
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0022

**Card ID:** b2-begehren-152
**Field:** lv
**DE konteksts:** begehren
**CURRENT (DA):** Efterspørgsel • Efterspørgsel • Kan lide • Begær • Begær
**PROPOSED (DA):** Efterspørgsel • Efterspørgsel
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0023

**Card ID:** b2-begünstigen-156
**Field:** lv
**DE konteksts:** begünstigen
**CURRENT (DA):** Fremme • Facilitere • Beskytte • Støtte
**PROPOSED (DA):** Fremme • Facilitere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0024

**Card ID:** b2-beiläufig-162
**Field:** lv
**DE konteksts:** beiläufig
**CURRENT (DA):** Utilsigtet • Afslappet • Forresten • Forbigående
**PROPOSED (DA):** Utilsigtet • Afslappet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0025

**Card ID:** b2-beispiellos-163
**Field:** lv
**DE konteksts:** beispiellos
**CURRENT (DA):** Ikke været • Uset • Det der ikke kan sammenlignes med noget som helst
**PROPOSED (DA):** Ikke været • Uset
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0026

**Card ID:** b2-belästigen-177
**Field:** lv
**DE konteksts:** belästigen
**CURRENT (DA):** Generer • Gider • Stik ind
**PROPOSED (DA):** Generer • Gider
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0027

**Card ID:** b2-beleibt-181
**Field:** lv
**DE konteksts:** beleibt
**CURRENT (DA):** Fed • Kære • Fyldig
**PROPOSED (DA):** Fed • Kære
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0028

**Card ID:** b2-Belieben-183
**Field:** lv
**DE konteksts:** Belieben
**CURRENT (DA):** Synes om • Synes om • Ønsker
**PROPOSED (DA):** Synes om • Synes om
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0029

**Card ID:** b2-Benennung-186
**Field:** lv
**DE konteksts:** Benennung
**CURRENT (DA):** Navngivning • Navngivning • Navn
**PROPOSED (DA):** Navngivning • Navngivning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0030

**Card ID:** b2-bergen-192
**Field:** lv
**DE konteksts:** bergen
**CURRENT (DA):** Gem • Redning • Høst
**PROPOSED (DA):** Gem • Redning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0031

**Card ID:** b2-bersten-195
**Field:** lv
**DE konteksts:** bersten
**CURRENT (DA):** At knække • At knække • At briste • At briste
**PROPOSED (DA):** At knække • At knække
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0032

**Card ID:** b2-besänftigen-199
**Field:** lv
**DE konteksts:** besänftigen
**CURRENT (DA):** Rolig • Formilde • Formilde • Stilhed
**PROPOSED (DA):** Rolig • Formilde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0033

**Card ID:** b2-Besatzung-200
**Field:** lv
**DE konteksts:** Besatzung
**CURRENT (DA):** Kommando • Besætning • Besætning • Besættelsesmilitære enheder
**PROPOSED (DA):** Kommando • Besætning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0034

**Card ID:** b2-beschimpfen-203
**Field:** lv
**DE konteksts:** beschimpfen
**CURRENT (DA):** At forbande • At stjæle • At fange
**PROPOSED (DA):** At forbande • At stjæle
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0035

**Card ID:** b2-Beschützer-205
**Field:** lv
**DE konteksts:** Beschützer
**CURRENT (DA):** Beskytter • Vagt • Forsvarer
**PROPOSED (DA):** Beskytter • Vagt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0036

**Card ID:** b2-beschwören-206
**Field:** lv
**DE konteksts:** beschwören
**CURRENT (DA):** At sværge • At sværge • At bede meget
**PROPOSED (DA):** At sværge • At sværge
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0037

**Card ID:** b2-besessen-207
**Field:** lv
**DE konteksts:** besessen
**CURRENT (DA):** Besat • Overvældet • Overvældet
**PROPOSED (DA):** Besat • Overvældet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0038

**Card ID:** b2-Bestand-211
**Field:** lv
**DE konteksts:** Bestand
**CURRENT (DA):** Sammensætning • Inventar • Lager
**PROPOSED (DA):** Sammensætning • Inventar
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0039

**Card ID:** b2-bestärken-213
**Field:** lv
**DE konteksts:** bestärken
**CURRENT (DA):** At styrke • At styrke • At styrke
**PROPOSED (DA):** At styrke • At styrke
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0040

**Card ID:** b2-bestreiten-217
**Field:** lv
**DE konteksts:** bestreiten
**CURRENT (DA):** Tvist • Løn • Dækning
**PROPOSED (DA):** Tvist • Løn
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0041

**Card ID:** b2-bestürzt-218
**Field:** lv
**DE konteksts:** bestürzt
**CURRENT (DA):** Overrasket • Forvirret • Forvirret • Forvirret
**PROPOSED (DA):** Overrasket • Forvirret
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0042

**Card ID:** b2-Betäubung-220
**Field:** lv
**DE konteksts:** Betäubung
**CURRENT (DA):** Bedøvelse • Stupor • Narkose • Anæstesi
**PROPOSED (DA):** Bedøvelse • Stupor
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0043

**Card ID:** b2-Betrug-225
**Field:** lv
**DE konteksts:** Betrug
**CURRENT (DA):** Svindel • Fup • Falsk • Svindel
**PROPOSED (DA):** Svindel • Fup
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0044

**Card ID:** b2-Beute-227
**Field:** lv
**DE konteksts:** Beute
**CURRENT (DA):** Bytte • Gevinst • Trofæ
**PROPOSED (DA):** Bytte • Gevinst
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0045

**Card ID:** b2-bewähren-229
**Field:** lv
**DE konteksts:** bewähren
**CURRENT (DA):** At beskytte • At beskytte • At beskytte • At gemme
**PROPOSED (DA):** At beskytte • At beskytte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0046

**Card ID:** b2-bewährt-230
**Field:** lv
**DE konteksts:** bewährt
**CURRENT (DA):** Testet • Sikker • Pålidelig
**PROPOSED (DA):** Testet • Sikker
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0047

**Card ID:** b2-Bewerbung-234
**Field:** lv
**DE konteksts:** Bewerbung
**CURRENT (DA):** Ansøgning • Ansøgningsskema • Sæt af indsendte dokumenter
**PROPOSED (DA):** Ansøgning • Ansøgningsskema
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0048

**Card ID:** b2-bewilligen-235
**Field:** lv
**DE konteksts:** bewilligen
**CURRENT (DA):** Tillad • Tildel • Bevilling
**PROPOSED (DA):** Tillad • Tildel
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0049

**Card ID:** b2-Bezug-239
**Field:** lv
**DE konteksts:** Bezug
**CURRENT (DA):** Forhold • Tilslutning • Dæksel
**PROPOSED (DA):** Forhold • Tilslutning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0050

**Card ID:** b2-bezwingen-241
**Field:** lv
**DE konteksts:** bezwingen
**CURRENT (DA):** Overvinde • Nederlag • Beherske
**PROPOSED (DA):** Overvinde • Nederlag
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0051

**Card ID:** b2-bisweilen-244
**Field:** lv
**DE konteksts:** bisweilen
**CURRENT (DA):** Nogle gange • Nogle gange • Til tider
**PROPOSED (DA):** Nogle gange • Nogle gange
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0052

**Card ID:** b2-bildlich-246
**Field:** lv
**DE konteksts:** bildlich
**CURRENT (DA):** Billedlig • Fantasifuld • Figurativ
**PROPOSED (DA):** Billedlig • Fantasifuld
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0053

**Card ID:** b2-Bildnis-247
**Field:** lv
**DE konteksts:** Bildnis
**CURRENT (DA):** Efternavn • Portræt • Billede
**PROPOSED (DA):** Efternavn • Portræt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0054

**Card ID:** b2-Bindung-249
**Field:** lv
**DE konteksts:** Bindung
**CURRENT (DA):** Binding • Forbindelse • Kemisk binding • Bond • Remme • Følelsesmæssig binding
**PROPOSED (DA):** Binding • Forbindelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0055

**Card ID:** b2-blähen-258
**Field:** lv
**DE konteksts:** blähen
**CURRENT (DA):** At blæse • At puste op • At puste op
**PROPOSED (DA):** At blæse • At puste op
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0056

**Card ID:** b2-bleichen-263
**Field:** lv
**DE konteksts:** bleichen
**CURRENT (DA):** Balat • Balot • Blegemiddel
**PROPOSED (DA):** Balat • Balot
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0057

**Card ID:** b2-blenden-264
**Field:** lv
**DE konteksts:** blenden
**CURRENT (DA):** Blænde • Blænde • Forvirre • Vildlede
**PROPOSED (DA):** Blænde • Blænde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0058

**Card ID:** b2-blödsinnig-271
**Field:** lv
**DE konteksts:** blödsinnig
**CURRENT (DA):** Vanvittig • Tåbelig • Tåbelig • Dumt
**PROPOSED (DA):** Vanvittig • Tåbelig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0059

**Card ID:** b2-Blutalkohol-275
**Field:** lv
**DE konteksts:** Blutalkohol
**CURRENT (DA):** Mængden af ​​alkohol i blodet
**PROPOSED (DA):** Mængden af alkohol i blodet
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0060

**Card ID:** b2-Bodensatz-280
**Field:** lv
**DE konteksts:** Bodensatz
**CURRENT (DA):** Sediment • Afskum • Gær
**PROPOSED (DA):** Sediment • Afskum
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0061

**Card ID:** b2-Böschung-289
**Field:** lv
**DE konteksts:** Böschung
**CURRENT (DA):** Skråning • Skråning • Skrænt
**PROPOSED (DA):** Skråning • Skråning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0062

**Card ID:** b2-Bote-290
**Field:** lv
**DE konteksts:** Bote
**CURRENT (DA):** Messenger • Messenger • Messenger
**PROPOSED (DA):** Messenger • Messenger
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0063

**Card ID:** b2-Buckel-310
**Field:** lv
**DE konteksts:** Buckel
**CURRENT (DA):** Pukkel • Kage • Ryg
**PROPOSED (DA):** Pukkel • Kage
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0064

**Card ID:** b2-Bügel-311
**Field:** lv
**DE konteksts:** Bügel
**CURRENT (DA):** Håndtag • Bøjle • Tøjbøjle • Trin
**PROPOSED (DA):** Håndtag • Bøjle
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0065

**Card ID:** b2-bürgerlich-321
**Field:** lv
**DE konteksts:** bürgerlich
**CURRENT (DA):** Civic • Borgere • Borgerlig • Borgerlig
**PROPOSED (DA):** Civic • Borgere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0066

**Card ID:** b2-Damm-340
**Field:** lv
**DE konteksts:** Damm
**CURRENT (DA):** Dæmning • Dæmning • Jernbanedæmning
**PROPOSED (DA):** Dæmning • Dæmning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0067

**Card ID:** b2-dämmern-341
**Field:** lv
**DE konteksts:** dämmern
**CURRENT (DA):** I skumringen • Det bliver mørkt • Det gryer • Lyset sveder
**PROPOSED (DA):** I skumringen • Det bliver mørkt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0068

**Card ID:** b2-Dämmerung-342
**Field:** lv
**DE konteksts:** Dämmerung
**CURRENT (DA):** Twilight • Twilight • Dawn • Dawn
**PROPOSED (DA):** Twilight • Twilight
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0069

**Card ID:** b2-dämpfen-344
**Field:** lv
**DE konteksts:** dämpfen
**CURRENT (DA):** Til tavshed • At kvæle • At dampe • At stuve • At røre
**PROPOSED (DA):** Til tavshed • At kvæle
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0070

**Card ID:** b2-Darstellung-353
**Field:** lv
**DE konteksts:** Darstellung
**CURRENT (DA):** Afbildning • Afbildning • Omrids
**PROPOSED (DA):** Afbildning • Afbildning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0071

**Card ID:** b2-Defizit-365
**Field:** lv
**DE konteksts:** Defizit
**CURRENT (DA):** Mangel • Knaphed • Underskud
**PROPOSED (DA):** Mangel • Knaphed
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0072

**Card ID:** b2-dehnbar-366
**Field:** lv
**DE konteksts:** dehnbar
**CURRENT (DA):** Strækbar • Strækbar • Strækbar
**PROPOSED (DA):** Strækbar • Strækbar
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0073

**Card ID:** b2-dehnen-367
**Field:** lv
**DE konteksts:** dehnen
**CURRENT (DA):** At strække • At strække • At strække • At strække • At trække
**PROPOSED (DA):** At strække • At strække
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0074

**Card ID:** b2-denkbar-377
**Field:** lv
**DE konteksts:** denkbar
**CURRENT (DA):** Formodet • Tænkeligt • Muligt
**PROPOSED (DA):** Formodet • Tænkeligt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0075

**Card ID:** b2-deplaziert-378
**Field:** lv
**DE konteksts:** deplaziert
**CURRENT (DA):** Upassende • Ude af sted • Uden for tid
**PROPOSED (DA):** Upassende • Ude af sted
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0076

**Card ID:** b2-derartig-380
**Field:** lv
**DE konteksts:** derartig
**CURRENT (DA):** Sådan • Sådan • Lignende
**PROPOSED (DA):** Sådan • Sådan
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0077

**Card ID:** b2-deuten-382
**Field:** lv
**DE konteksts:** deuten
**CURRENT (DA):** Forklar • Oversæt • Angiv
**PROPOSED (DA):** Forklar • Oversæt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0078

**Card ID:** b2-Deutung-383
**Field:** lv
**DE konteksts:** Deutung
**CURRENT (DA):** Forklaring • Oversættelse • Forklaring • Oversættelse
**PROPOSED (DA):** Forklaring • Oversættelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0079

**Card ID:** b2-Diele-398
**Field:** lv
**DE konteksts:** Diele
**CURRENT (DA):** Gulv • Board • Vestibule
**PROPOSED (DA):** Gulv • Board
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0080

**Card ID:** b2-donnern-413
**Field:** lv
**DE konteksts:** donnern
**CURRENT (DA):** Tordenbrøl • Rumble • Rumble
**PROPOSED (DA):** Tordenbrøl • Rumble
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0081

**Card ID:** b2-drängen-434
**Field:** lv
**DE konteksts:** drängen
**CURRENT (DA):** Skub • Skub • Skynd dig • Skynd dig • Opmuntre
**PROPOSED (DA):** Skub • Skub
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0082

**Card ID:** b2-Dreck-435
**Field:** lv
**DE konteksts:** Dreck
**CURRENT (DA):** Møg • Snavs • Mudder • Snavs
**PROPOSED (DA):** Møg • Snavs
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0083

**Card ID:** b2-dringen-443
**Field:** lv
**DE konteksts:** dringen
**CURRENT (DA):** At trykke • At bryde • At skubbe ind • At bryde ind • At kræve • At kræve
**PROPOSED (DA):** At trykke • At bryde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0084

**Card ID:** b2-dumpf-457
**Field:** lv
**DE konteksts:** dumpf
**CURRENT (DA):** Hul • Dæmpet • Indelukket • Kvælende • Tung • Undertrykt • Undertrykkende
**PROPOSED (DA):** Hul • Dæmpet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0085

**Card ID:** b2-Dünkel-463
**Field:** lv
**DE konteksts:** Dünkel
**CURRENT (DA):** Forfængelighed • Indbildsk • Arrogance
**PROPOSED (DA):** Forfængelighed • Indbildsk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0086

**Card ID:** b2-Dunst-466
**Field:** lv
**DE konteksts:** Dunst
**CURRENT (DA):** Damp • Røg • Røg • Damp • Tåge • Dis
**PROPOSED (DA):** Damp • Røg
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0087

**Card ID:** b2-durcharbeiten-467
**Field:** lv
**DE konteksts:** durcharbeiten
**CURRENT (DA):** Udvikle • Læs omhyggeligt • Ælt omhyggeligt
**PROPOSED (DA):** Udvikle • Læs omhyggeligt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0088

**Card ID:** b2-durchaus-468
**Field:** lv
**DE konteksts:** durchaus
**CURRENT (DA):** Helt • Helt • Helt
**PROPOSED (DA):** Helt • Helt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0089

**Card ID:** b2-durchbrechen-469
**Field:** lv
**DE konteksts:** durchbrechen
**CURRENT (DA):** Gennembrud • Gennembrud • Fremtræde • Gennembrud
**PROPOSED (DA):** Gennembrud • Gennembrud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0090

**Card ID:** b2-durchbrennen-470
**Field:** lv
**DE konteksts:** durchbrennen
**CURRENT (DA):** Brænd igennem • Brænd igennem • Brænd ud • Brænd ud
**PROPOSED (DA):** Brænd igennem • Brænd igennem
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0091

**Card ID:** b2-durchbringen-471
**Field:** lv
**DE konteksts:** durchbringen
**CURRENT (DA):** Kom igennem • Bring igennem • Opnå • Cure • Spild
**PROPOSED (DA):** Kom igennem • Bring igennem
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0092

**Card ID:** b2-durchdringen-473
**Field:** lv
**DE konteksts:** durchdringen
**CURRENT (DA):** Skub igennem • Brække igennem • Bliv overvældet
**PROPOSED (DA):** Skub igennem • Brække igennem
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0093

**Card ID:** b2-Durchführung-476
**Field:** lv
**DE konteksts:** Durchführung
**CURRENT (DA):** At sætte noget igennem • At gøre • At gøre • Udføre • At realisere
**PROPOSED (DA):** At sætte noget igennem • At gøre
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0094

**Card ID:** b2-durchmachen-479
**Field:** lv
**DE konteksts:** durchmachen
**CURRENT (DA):** Overlev • Fjern • Afslut
**PROPOSED (DA):** Overlev • Fjern
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0095

**Card ID:** b2-durchschlagen-484
**Field:** lv
**DE konteksts:** durchschlagen
**CURRENT (DA):** Si • Før gennem en sigte • Slå igennem • Slå et hul
**PROPOSED (DA):** Si • Før gennem en sigte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0096

**Card ID:** b2-durchsehen-485
**Field:** lv
**DE konteksts:** durchsehen
**CURRENT (DA):** Undersøg • Undersøg • Se igennem
**PROPOSED (DA):** Undersøg • Undersøg
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0097

**Card ID:** b2-dürr-488
**Field:** lv
**DE konteksts:** dürr
**CURRENT (DA):** Tør • Udtørret • Visen • Mager
**PROPOSED (DA):** Tør • Udtørret
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0098

**Card ID:** b2-dürsten-490
**Field:** lv
**DE konteksts:** dürsten
**CURRENT (DA):** At tørste • At være tørst • At være tørst
**PROPOSED (DA):** At tørste • At være tørst
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0099

**Card ID:** b2-edel-497
**Field:** lv
**DE konteksts:** edel
**CURRENT (DA):** Noble • Sublim • Noble
**PROPOSED (DA):** Noble • Sublim
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0100

**Card ID:** b2-ehren-505
**Field:** lv
**DE konteksts:** ehren
**CURRENT (DA):** Ære • Respekt • Ære
**PROPOSED (DA):** Ære • Respekt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0101

**Card ID:** b2-Eifer-521
**Field:** lv
**DE konteksts:** Eifer
**CURRENT (DA):** Flid • Flid • Passion • Iver • Iver
**PROPOSED (DA):** Flid • Flid
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0102

**Card ID:** b2-eifrig-522
**Field:** lv
**DE konteksts:** eifrig
**CURRENT (DA):** Flittig • Flittig • Flittig • Ivrig
**PROPOSED (DA):** Flittig • Flittig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0103

**Card ID:** b2-eigenwillig-528
**Field:** lv
**DE konteksts:** eigenwillig
**CURRENT (DA):** Vilkårlig • Genstridig • Genstridig • Anmassende
**PROPOSED (DA):** Vilkårlig • Genstridig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0104

**Card ID:** b2-Einbildung-534
**Field:** lv
**DE konteksts:** Einbildung
**CURRENT (DA):** Fancy • Fantasi • Fantasi • Indbildsk • Indbildsk
**PROPOSED (DA):** Fancy • Fantasi
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0105

**Card ID:** b2-einbürgern-535
**Field:** lv
**DE konteksts:** einbürgern
**CURRENT (DA):** Giv en borgers ret • At introducere • At slå rod
**PROPOSED (DA):** Giv en borgers ret • At introducere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0106

**Card ID:** b2-eindringen-537
**Field:** lv
**DE konteksts:** eindringen
**CURRENT (DA):** Skub ind • Break in • Soak in • Dyk ned i
**PROPOSED (DA):** Skub ind • Break in
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0107

**Card ID:** b2-einfassen-540
**Field:** lv
**DE konteksts:** einfassen
**CURRENT (DA):** Inkluder • Ramme • Ramme
**PROPOSED (DA):** Inkluder • Ramme
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0108

**Card ID:** b2-einfrieren-543
**Field:** lv
**DE konteksts:** einfrieren
**CURRENT (DA):** Frys • Frys • Stop
**PROPOSED (DA):** Frys • Frys
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0109

**Card ID:** b2-Einfuhr-544
**Field:** lv
**DE konteksts:** Einfuhr
**CURRENT (DA):** Introduktion • Import • Indbringelse • Import
**PROPOSED (DA):** Introduktion • Import
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0110

**Card ID:** b2-eingehen-549
**Field:** lv
**DE konteksts:** eingehen
**CURRENT (DA):** Indtast • Ankomst • Indtast • Indtast • Krymp • Enig • Bet
**PROPOSED (DA):** Indtast • Ankomst
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0111

**Card ID:** b2-eingehend-550
**Field:** lv
**DE konteksts:** eingehend
**CURRENT (DA):** Grundig • Smålig • Indgående
**PROPOSED (DA):** Grundig • Smålig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0112

**Card ID:** b2-eingerechnet-552
**Field:** lv
**DE konteksts:** eingerechnet
**CURRENT (DA):** Optalt • Krediteret • Tilføjet
**PROPOSED (DA):** Optalt • Krediteret
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0113

**Card ID:** b2-einhüllen-560
**Field:** lv
**DE konteksts:** einhüllen
**CURRENT (DA):** Wrap • Coil • Wrap
**PROPOSED (DA):** Wrap • Coil
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0114

**Card ID:** b2-Einigkeit-561
**Field:** lv
**DE konteksts:** Einigkeit
**CURRENT (DA):** Enhed • Enhed • Konsensus
**PROPOSED (DA):** Enhed • Enhed
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0115

**Card ID:** b2-einmachen-569
**Field:** lv
**DE konteksts:** einmachen
**CURRENT (DA):** Konserver • Mariner • Kog op
**PROPOSED (DA):** Konserver • Mariner
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0116

**Card ID:** b2-Einschnitt-575
**Field:** lv
**DE konteksts:** Einschnitt
**CURRENT (DA):** Indsnit • Klip • Drej • Hak
**PROPOSED (DA):** Indsnit • Klip
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0117

**Card ID:** b2-Einspruch-581
**Field:** lv
**DE konteksts:** Einspruch
**CURRENT (DA):** Indsigelse • Indsigelse • Protest
**PROPOSED (DA):** Indsigelse • Indsigelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0118

**Card ID:** b2-eintauchen-585
**Field:** lv
**DE konteksts:** eintauchen
**CURRENT (DA):** Dip • Dip • Fordyb • Dyk
**PROPOSED (DA):** Dip • Dip
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0119

**Card ID:** b2-eintönig-586
**Field:** lv
**DE konteksts:** eintönig
**CURRENT (DA):** Monoton • Monoton • Monoton
**PROPOSED (DA):** Monoton • Monoton
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0120

**Card ID:** b2-Eintracht-587
**Field:** lv
**DE konteksts:** Eintracht
**CURRENT (DA):** Konsensus • Aftale • Harmoni • Kompatibilitet
**PROPOSED (DA):** Konsensus • Aftale
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0121

**Card ID:** b2-eitel-605
**Field:** lv
**DE konteksts:** eitel
**CURRENT (DA):** Indbildsk • Indbildsk • Indbildsk • Overfladisk • Tom • Prangende
**PROPOSED (DA):** Indbildsk • Indbildsk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0122

**Card ID:** b2-Empörung-614
**Field:** lv
**DE konteksts:** Empörung
**CURRENT (DA):** Forargelse • Oprør • Mytteri
**PROPOSED (DA):** Forargelse • Oprør
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0123

**Card ID:** b2-emsig-615
**Field:** lv
**DE konteksts:** emsig
**CURRENT (DA):** Flittig • Livlig • Aktiv
**PROPOSED (DA):** Flittig • Livlig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0124

**Card ID:** b2-entbehren-616
**Field:** lv
**DE konteksts:** entbehren
**CURRENT (DA):** Undgå • Udholde • Mangel
**PROPOSED (DA):** Undgå • Udholde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0125

**Card ID:** b2-entbinden-617
**Field:** lv
**DE konteksts:** entbinden
**CURRENT (DA):** Slip • Slip • Fødsel
**PROPOSED (DA):** Slip • Slip
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0126

**Card ID:** b2-Entbindung-618
**Field:** lv
**DE konteksts:** Entbindung
**CURRENT (DA):** Frigivelse • Udfrielse • Fødsel
**PROPOSED (DA):** Frigivelse • Udfrielse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0127

**Card ID:** b2-entfalten-623
**Field:** lv
**DE konteksts:** entfalten
**CURRENT (DA):** Slap af • Fold ud • Udvikle • Fold ud
**PROPOSED (DA):** Slap af • Fold ud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0128

**Card ID:** b2-sich entfalten-624
**Field:** lv
**DE konteksts:** sich entfalten
**CURRENT (DA):** Åbne op • Løsne • Udvikle • Fold ud
**PROPOSED (DA):** Åbne op • Løsne
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0129

**Card ID:** b2-entflammen-625
**Field:** lv
**DE konteksts:** entflammen
**CURRENT (DA):** At tænde • At tænde • At ophidse • At antænde
**PROPOSED (DA):** At tænde • At tænde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0130

**Card ID:** b2-entkräften-632
**Field:** lv
**DE konteksts:** entkräften
**CURRENT (DA):** Afmagre • Svække • Modbevise • Vælte
**PROPOSED (DA):** Afmagre • Svække
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0131

**Card ID:** b2-entlegen-636
**Field:** lv
**DE konteksts:** entlegen
**CURRENT (DA):** Fjernbetjening • Fjernbetjening • Fjern
**PROPOSED (DA):** Fjernbetjening • Fjernbetjening
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0132

**Card ID:** b2-entnehmen-638
**Field:** lv
**DE konteksts:** entnehmen
**CURRENT (DA):** Tage • Tage • Tage ud • Afslutte
**PROPOSED (DA):** Tage • Tage
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0133

**Card ID:** b2-Entspannung-643
**Field:** lv
**DE konteksts:** Entspannung
**CURRENT (DA):** Afslapning • Afspænding • Reduktion af spændinger
**PROPOSED (DA):** Afslapning • Afspænding
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0134

**Card ID:** b2-entstellen-644
**Field:** lv
**DE konteksts:** entstellen
**CURRENT (DA):** At forvrænge • At flippe ud • At forvrænge
**PROPOSED (DA):** At forvrænge • At flippe ud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0135

**Card ID:** b2-entweichen-645
**Field:** lv
**DE konteksts:** entweichen
**CURRENT (DA):** Bevæg dig væk • Undslippe • Træk tilbage • Udgå
**PROPOSED (DA):** Bevæg dig væk • Undslippe
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0136

**Card ID:** b2-Entwurf-649
**Field:** lv
**DE konteksts:** Entwurf
**CURRENT (DA):** Udkast • Skitse • Projekt
**PROPOSED (DA):** Udkast • Skitse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0137

**Card ID:** b2-entwurzeln-650
**Field:** lv
**DE konteksts:** entwurzeln
**CURRENT (DA):** Udrydde • Udrydde • Udrydde fuldstændigt
**PROPOSED (DA):** Udrydde • Udrydde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0138

**Card ID:** b2-entziehen-651
**Field:** lv
**DE konteksts:** entziehen
**CURRENT (DA):** Tag • Væk • Undgå • Bryd væk • Undslip
**PROPOSED (DA):** Tag • Væk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0139

**Card ID:** b2-entzückend-653
**Field:** lv
**DE konteksts:** entzückend
**CURRENT (DA):** Vidunderlig • Dejlig • Charmerende
**PROPOSED (DA):** Vidunderlig • Dejlig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0140

**Card ID:** b2-entzünden-655
**Field:** lv
**DE konteksts:** entzünden
**CURRENT (DA):** At antænde • At antænde • At tænde
**PROPOSED (DA):** At antænde • At antænde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0141

**Card ID:** b2-sich entzünden-656
**Field:** lv
**DE konteksts:** sich entzünden
**CURRENT (DA):** At antænde • At tænde op • At tænde op
**PROPOSED (DA):** At antænde • At tænde op
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0142

**Card ID:** b2-Entzündung-657
**Field:** lv
**DE konteksts:** Entzündung
**CURRENT (DA):** Ignition • Ignition • Inflammation
**PROPOSED (DA):** Ignition • Ignition
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0143

**Card ID:** b2-ergiebig-674
**Field:** lv
**DE konteksts:** ergiebig
**CURRENT (DA):** Frugtbar • Rentabel • Rig • Rigelig • Produktiv
**PROPOSED (DA):** Frugtbar • Rentabel
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0144

**Card ID:** b2-erhaben-676
**Field:** lv
**DE konteksts:** erhaben
**CURRENT (DA):** Relief • Konveks • Fantastisk • Fantastisk • Højt • Sublim • Fremragende
**PROPOSED (DA):** Relief • Konveks
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0145

**Card ID:** b2-erheben-677
**Field:** lv
**DE konteksts:** erheben
**CURRENT (DA):** Raise • Raise • Raise • Protest
**PROPOSED (DA):** Raise • Raise
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0146

**Card ID:** b2-sich erheben-678
**Field:** lv
**DE konteksts:** sich erheben
**CURRENT (DA):** Rise up • Rise up • Rise up
**PROPOSED (DA):** Rise up • Rise up
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0147

**Card ID:** b2-erlangen-682
**Field:** lv
**DE konteksts:** erlangen
**CURRENT (DA):** At nå • At opnå • At få • At opnå
**PROPOSED (DA):** At nå • At opnå
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0148

**Card ID:** b2-Erlass-683
**Field:** lv
**DE konteksts:** Erlass
**CURRENT (DA):** Ordre • Ordre • Dekret • Afskedigelse
**PROPOSED (DA):** Ordre • Ordre
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0149

**Card ID:** b2-erlassen-684
**Field:** lv
**DE konteksts:** erlassen
**CURRENT (DA):** Problem • Frigivelse • Frigivelse
**PROPOSED (DA):** Problem • Frigivelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0150

**Card ID:** b2-erleiden-687
**Field:** lv
**DE konteksts:** erleiden
**CURRENT (DA):** Lide • Udholde • Udholde • Bliv besejret
**PROPOSED (DA):** Lide • Udholde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0151

**Card ID:** b2-erlöschen-688
**Field:** lv
**DE konteksts:** erlöschen
**CURRENT (DA):** Sluk • Sluk • Ophører med at være gyldig • Udløber
**PROPOSED (DA):** Sluk • Sluk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0152

**Card ID:** b2-Eröffnung-695
**Field:** lv
**DE konteksts:** Eröffnung
**CURRENT (DA):** Åbning • Discovery • Postkort • Annoncering • Discovery
**PROPOSED (DA):** Åbning • Discovery
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0153

**Card ID:** b2-erregen-698
**Field:** lv
**DE konteksts:** erregen
**CURRENT (DA):** At ophidse • At ophidse • At forårsage • At forårsage • At ophidse
**PROPOSED (DA):** At ophidse • At ophidse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0154

**Card ID:** b2-Erscheinung-703
**Field:** lv
**DE konteksts:** Erscheinung
**CURRENT (DA):** Fænomen • Udseende • Udseende • Udseende
**PROPOSED (DA):** Fænomen • Udseende
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0155

**Card ID:** b2-erschüttern-707
**Field:** lv
**DE konteksts:** erschüttern
**CURRENT (DA):** At ryste • At chokere • At underminere
**PROPOSED (DA):** At ryste • At chokere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0156

**Card ID:** b2-ersparen-710
**Field:** lv
**DE konteksts:** ersparen
**CURRENT (DA):** At spare • At spare • At spare • At spare
**PROPOSED (DA):** At spare • At spare
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0157

**Card ID:** b2-ersticken-713
**Field:** lv
**DE konteksts:** ersticken
**CURRENT (DA):** Kvæles • Kvæles • Kvæles • Undertrykke • Undertrykke • Kvæles • Kvæles
**PROPOSED (DA):** Kvæles • Kvæles
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0158

**Card ID:** b2-sich erstrecken-714
**Field:** lv
**DE konteksts:** sich erstrecken
**CURRENT (DA):** Spred ud • Stræk ud • Stræk ud
**PROPOSED (DA):** Spred ud • Stræk ud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0159

**Card ID:** b2-erweisen-721
**Field:** lv
**DE konteksts:** erweisen
**CURRENT (DA):** Vis • Vis • Gør
**PROPOSED (DA):** Vis • Vis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0160

**Card ID:** b2-Erwerb-723
**Field:** lv
**DE konteksts:** Erwerb
**CURRENT (DA):** Indtjening • Overskud • Gevinst
**PROPOSED (DA):** Indtjening • Overskud
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0161

**Card ID:** b2-erwerben-724
**Field:** lv
**DE konteksts:** erwerben
**CURRENT (DA):** Tjen • Få • Erhverv
**PROPOSED (DA):** Tjen • Få
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0162

**Card ID:** b2-erzielen-726
**Field:** lv
**DE konteksts:** erzielen
**CURRENT (DA):** At opnå • At opnå • At opnå
**PROPOSED (DA):** At opnå • At opnå
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0163

**Card ID:** b2-exklusiv-737
**Field:** lv
**DE konteksts:** exklusiv
**CURRENT (DA):** Undersøgt • Fin • Aristokratisk
**PROPOSED (DA):** Undersøgt • Fin
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0164

**Card ID:** b2-Exot-738
**Field:** lv
**DE konteksts:** Exot
**CURRENT (DA):** Eksotisk person • Plante • Dyr
**PROPOSED (DA):** Eksotisk person • Plante
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0165

**Card ID:** b2-sich-fassen
**Field:** lv
**DE konteksts:** sich fassen
**CURRENT (DA):** At gribe • At modtage • At tilbageholde
**PROPOSED (DA):** At gribe • At modtage
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0166

**Card ID:** b2-Fassung-769
**Field:** lv
**DE konteksts:** Fassung
**CURRENT (DA):** Ramme • Konvolut • Ordlyd
**PROPOSED (DA):** Ramme • Konvolut
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0167

**Card ID:** b2-Feingefühl-776
**Field:** lv
**DE konteksts:** Feingefühl
**CURRENT (DA):** Delikatesse • ​​Takt
**PROPOSED (DA):** Delikatesse • Takt
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0168

**Card ID:** b2-Finsternis-790
**Field:** lv
**DE konteksts:** Finsternis
**CURRENT (DA):** Mørke • Mørke • Formørkelse
**PROPOSED (DA):** Mørke • Mørke
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0169

**Card ID:** b2-Firmeninhaber-791
**Field:** lv
**DE konteksts:** Firmeninhaber
**CURRENT (DA):** Ejeren af ​​virksomheden
**PROPOSED (DA):** Ejeren af virksomheden
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0170

**Card ID:** b2-fleckig-799
**Field:** lv
**DE konteksts:** fleckig
**CURRENT (DA):** Plettet • Plettet • Plettet • Plettet • Plettet
**PROPOSED (DA):** Plettet • Plettet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0171

**Card ID:** b2-flimmern-801
**Field:** lv
**DE konteksts:** flimmern
**CURRENT (DA):** Twinkle • Twinkle • Twinkle • Twinkle • Twinkle
**PROPOSED (DA):** Twinkle • Twinkle
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0172

**Card ID:** b2-flüchtig-805
**Field:** lv
**DE konteksts:** flüchtig
**CURRENT (DA):** Flygtig • Overfladisk • Flygtig • Flygtig • Kortvarig
**PROPOSED (DA):** Flygtig • Overfladisk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0173

**Card ID:** b2-formell-817
**Field:** lv
**DE konteksts:** formell
**CURRENT (DA):** Korrekt • Høflig • Formel • Stiv
**PROPOSED (DA):** Korrekt • Høflig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0174

**Card ID:** b2-fortschaffen-821
**Field:** lv
**DE konteksts:** fortschaffen
**CURRENT (DA):** Skabe væk • Take away • Take away
**PROPOSED (DA):** Skabe væk • Take away
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0175

**Card ID:** b2-freilich-831
**Field:** lv
**DE konteksts:** freilich
**CURRENT (DA):** Selvfølgelig • Ingen tvivl • Men • Kun
**PROPOSED (DA):** Selvfølgelig • Ingen tvivl
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0176

**Card ID:** b2-Furche-855
**Field:** lv
**DE konteksts:** Furche
**CURRENT (DA):** Fure • Rynke • Rynke
**PROPOSED (DA):** Fure • Rynke
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0177

**Card ID:** b2-Gebot-876
**Field:** lv
**DE konteksts:** Gebot
**CURRENT (DA):** Kommando • Krav • Befaling
**PROPOSED (DA):** Kommando • Krav
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0178

**Card ID:** b2-gebrechlich-877
**Field:** lv
**DE konteksts:** gebrechlich
**CURRENT (DA):** Svag • Visnet • Gauden • Forkrøblet • Fuld af fejl
**PROPOSED (DA):** Svag • Visnet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0179

**Card ID:** b2-gedämpft-878
**Field:** lv
**DE konteksts:** gedämpft
**CURRENT (DA):** Dæmpet • Lyddæmpet • Dæmpet
**PROPOSED (DA):** Dæmpet • Lyddæmpet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0180

**Card ID:** b2-gedeihen-880
**Field:** lv
**DE konteksts:** gedeihen
**CURRENT (DA):** Gør det godt • Få succes • Trives • Trives
**PROPOSED (DA):** Gør det godt • Få succes
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0181

**Card ID:** b2-gedenken-881
**Field:** lv
**DE konteksts:** gedenken
**CURRENT (DA):** At være sindet • At huske • At huske • At nævne
**PROPOSED (DA):** At være sindet • At huske
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0182

**Card ID:** b2-gefällig-886
**Field:** lv
**DE konteksts:** gefällig
**CURRENT (DA):** Behagelig • Forpligtende • Imødekommende • Venlig
**PROPOSED (DA):** Behagelig • Forpligtende
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0183

**Card ID:** b2-Gefüge-890
**Field:** lv
**DE konteksts:** Gefüge
**CURRENT (DA):** Struktur • Struktur • Tilslutning • Splejsning
**PROPOSED (DA):** Struktur • Struktur
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0184

**Card ID:** b2-Gegensatz-894
**Field:** lv
**DE konteksts:** Gegensatz
**CURRENT (DA):** Modsat • Kontrast • Modsigelse
**PROPOSED (DA):** Modsat • Kontrast
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0185

**Card ID:** b2-gehörig-896
**Field:** lv
**DE konteksts:** gehörig
**CURRENT (DA):** Tilhøre • Tilhøre • Ordentlig • Tilhørende
**PROPOSED (DA):** Tilhøre • Tilhøre
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0186

**Card ID:** b2-geläufig-902
**Field:** lv
**DE konteksts:** geläufig
**CURRENT (DA):** Kendt • Velkendt • Vanlig • Flydende • Flydende
**PROPOSED (DA):** Kendt • Velkendt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0187

**Card ID:** b2-gelegen-908
**Field:** lv
**DE konteksts:** gelegen
**CURRENT (DA):** Praktisk • Praktisk • Praktisk • Afsondret
**PROPOSED (DA):** Praktisk • Praktisk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0188

**Card ID:** b2-Geliebte-910
**Field:** lv
**DE konteksts:** Geliebte
**CURRENT (DA):** Elskede • Elskede • Elsker
**PROPOSED (DA):** Elskede • Elskede
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0189

**Card ID:** b2-gemäß-915
**Field:** lv
**DE konteksts:** gemäß
**CURRENT (DA):** Efter • Ifølge • Følgelig
**PROPOSED (DA):** Efter • Ifølge
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0190

**Card ID:** b2-Gemisch-918
**Field:** lv
**DE konteksts:** Gemisch
**CURRENT (DA):** En blanding • En blanding • En blanding
**PROPOSED (DA):** En blanding • En blanding
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0191

**Card ID:** b2-Gemüt-920
**Field:** lv
**DE konteksts:** Gemüt
**CURRENT (DA):** Karakter • Natur • Tanker • Sind
**PROPOSED (DA):** Karakter • Natur
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0192

**Card ID:** b2-geraten-935
**Field:** lv
**DE konteksts:** geraten
**CURRENT (DA):** Ankommer • Kom til • Giv op • Lykkes • Hit
**PROPOSED (DA):** Ankommer • Kom til
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0193

**Card ID:** b2-geräuschlos-937
**Field:** lv
**DE konteksts:** geräuschlos
**CURRENT (DA):** Stille • Stille • Uden støj
**PROPOSED (DA):** Stille • Stille
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0194

**Card ID:** b2-Gerede-938
**Field:** lv
**DE konteksts:** Gerede
**CURRENT (DA):** Tale • Tale • Folkesproget • Sladder
**PROPOSED (DA):** Tale • Tale
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0195

**Card ID:** b2-gerinnen-939
**Field:** lv
**DE konteksts:** gerinnen
**CURRENT (DA):** At koagulere • At størkne • At størkne • At størkne • At fryse
**PROPOSED (DA):** At koagulere • At størkne
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0196

**Card ID:** b2-Gerippe-940
**Field:** lv
**DE konteksts:** Gerippe
**CURRENT (DA):** Skelet • Krop • Ramme
**PROPOSED (DA):** Skelet • Krop
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0197

**Card ID:** b2-Geschehnis-945
**Field:** lv
**DE konteksts:** Geschehnis
**CURRENT (DA):** Hændelse • Sag • Hændelse
**PROPOSED (DA):** Hændelse • Sag
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0198

**Card ID:** b2-Geschöpf-947
**Field:** lv
**DE konteksts:** Geschöpf
**CURRENT (DA):** Væsen • Væsen • Væren
**PROPOSED (DA):** Væsen • Væsen
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0199

**Card ID:** b2-Geschwätz-950
**Field:** lv
**DE konteksts:** Geschwätz
**CURRENT (DA):** Snadder • Lyver • Snadder
**PROPOSED (DA):** Snadder • Lyver
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0200

**Card ID:** b2-geschwind-952
**Field:** lv
**DE konteksts:** geschwind
**CURRENT (DA):** Hurtig • Kvik • Kvik
**PROPOSED (DA):** Hurtig • Kvik
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0201

**Card ID:** b2-Geselle-955
**Field:** lv
**DE konteksts:** Geselle
**CURRENT (DA):** Zellis • Hjælper • Fyr • Håndværker, der bestod eksamen efter skoletid
**PROPOSED (DA):** Zellis • Hjælper
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0202

**Card ID:** b2-Gestell-965
**Field:** lv
**DE konteksts:** Gestell
**CURRENT (DA):** Stativ • Støtteben • Chassis
**PROPOSED (DA):** Stativ • Støtteben
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0203

**Card ID:** b2-Gewähr-970
**Field:** lv
**DE konteksts:** Gewähr
**CURRENT (DA):** Sikkerhed • Kaution • Garanti
**PROPOSED (DA):** Sikkerhed • Kaution
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0204

**Card ID:** b2-Gewerbe-977
**Field:** lv
**DE konteksts:** Gewerbe
**CURRENT (DA):** Stilling • Handel • Fast arbejde inden for handel eller håndværk eller levering af tjenesteydelser
**PROPOSED (DA):** Stilling • Handel
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0205

**Card ID:** b2-Gewissheit-980
**Field:** lv
**DE konteksts:** Gewissheit
**CURRENT (DA):** Klarhed • Sikkerhed • Sikkerhed
**PROPOSED (DA):** Klarhed • Sikkerhed
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0206

**Card ID:** b2-gierig-982
**Field:** lv
**DE konteksts:** gierig
**CURRENT (DA):** Ivrig • Begærlig • Grådig
**PROPOSED (DA):** Ivrig • Begærlig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0207

**Card ID:** b2-Glied-1000
**Field:** lv
**DE konteksts:** Glied
**CURRENT (DA):** Medlem • Lemme • Kædemedlem • Link
**PROPOSED (DA):** Medlem • Lemme
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0208

**Card ID:** b2-glimmen-1002
**Field:** lv
**DE konteksts:** glimmen
**CURRENT (DA):** At gløde • At gløde • At ulme
**PROPOSED (DA):** At gløde • At gløde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0209

**Card ID:** b2-glühen-1004
**Field:** lv
**DE konteksts:** glühen
**CURRENT (DA):** At gløde • At brænde • At brænde • At brænde
**PROPOSED (DA):** At gløde • At brænde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0210

**Card ID:** b2-Glut-1005
**Field:** lv
**DE konteksts:** Glut
**CURRENT (DA):** Glød • Glød • Fantastisk varme
**PROPOSED (DA):** Glød • Glød
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0211

**Card ID:** b2-grässlich-1021
**Field:** lv
**DE konteksts:** grässlich
**CURRENT (DA):** Forfærdeligt • Forfærdeligt • Ulækkert • Nasty
**PROPOSED (DA):** Forfærdeligt • Forfærdeligt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0212

**Card ID:** b2-Grenzbereich-1032
**Field:** lv
**DE konteksts:** Grenzbereich
**CURRENT (DA):** Grænsestribe • Grænsezone • Territorium på begge sider af grænsen
**PROPOSED (DA):** Grænsestribe • Grænsezone
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0213

**Card ID:** b2-Grimm-1033
**Field:** lv
**DE konteksts:** Grimm
**CURRENT (DA):** Stor vrede • Raseri • Vrede
**PROPOSED (DA):** Stor vrede • Raseri
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0214

**Card ID:** b2-Guss-1046
**Field:** lv
**DE konteksts:** Guss
**CURRENT (DA):** Støbning • Hældning • Regnskyl
**PROPOSED (DA):** Støbning • Hældning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0215

**Card ID:** b2-Güte-1048
**Field:** lv
**DE konteksts:** Güte
**CURRENT (DA):** Venlighed • Kvalitet • Fordel
**PROPOSED (DA):** Venlighed • Kvalitet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0216

**Card ID:** b2-hemmen-1091
**Field:** lv
**DE konteksts:** hemmen
**CURRENT (DA):** Hinder • Forsinkelse • Bremse
**PROPOSED (DA):** Hinder • Forsinkelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0217

**Card ID:** b2-Hemmung-1092
**Field:** lv
**DE konteksts:** Hemmung
**CURRENT (DA):** Hindring • Forhindring • Forsinkelse
**PROPOSED (DA):** Hindring • Forhindring
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0218

**Card ID:** b2-herb-1103
**Field:** lv
**DE konteksts:** herb
**CURRENT (DA):** Bitter • Sur • Sur
**PROPOSED (DA):** Bitter • Sur
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0219

**Card ID:** b2-hervorrufen-1106
**Field:** lv
**DE konteksts:** hervorrufen
**CURRENT (DA):** Fremkald • Årsag • Opret • Væk
**PROPOSED (DA):** Fremkald • Årsag
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0220

**Card ID:** b2-hetzen-1112
**Field:** lv
**DE konteksts:** hetzen
**CURRENT (DA):** Spark • Incite • Chase • Hit
**PROPOSED (DA):** Spark • Incite
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0221

**Card ID:** b2-hitzig-1131
**Field:** lv
**DE konteksts:** hitzig
**CURRENT (DA):** Varm • Glødende • Fremhævd • Hurtig til vrede
**PROPOSED (DA):** Varm • Glødende
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0222

**Card ID:** b2-Höchstleistung-1143
**Field:** lv
**DE konteksts:** Höchstleistung
**CURRENT (DA):** Højeste præstation • Største kraft • Rekord
**PROPOSED (DA):** Højeste præstation • Største kraft
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0226

**Card ID:** b2-Investition-1164
**Field:** lv
**DE konteksts:** Investition
**CURRENT (DA):** Investering • Investering • Kapitalinvestering • Investering
**PROPOSED (DA):** Investering • Investering
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0227

**Card ID:** b2-Kapazität-1168
**Field:** lv
**DE konteksts:** Kapazität
**CURRENT (DA):** Produktionskapacitet • Kapacitet • Volumen • Kapacitet
**PROPOSED (DA):** Produktionskapacitet • Kapacitet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0228

**Card ID:** b2-Klasse-1180
**Field:** lv
**DE konteksts:** Klasse
**CURRENT (DA):** Social klasse • ​​Klasse • ​​Kategori
**PROPOSED (DA):** Social klasse • ​​Klasse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0229

**Card ID:** b2-Klasse-1180
**Field:** lv
**DE konteksts:** Klasse
**CURRENT (DA):** Social klasse • ​​Klasse • ​​Kategori
**PROPOSED (DA):** Social klasse • Klasse • Kategori
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0230

**Card ID:** b2-Konsequenz-1192
**Field:** lv
**DE konteksts:** Konsequenz
**CURRENT (DA):** Konsistens • Sekvens • Konklusion • Konsekvens
**PROPOSED (DA):** Konsistens • Sekvens
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0231

**Card ID:** b2-Konzept-1197
**Field:** lv
**DE konteksts:** Konzept
**CURRENT (DA):** Koncept • Udkast • Plan
**PROPOSED (DA):** Koncept • Udkast
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0232

**Card ID:** b2-Landung-1212
**Field:** lv
**DE konteksts:** Landung
**CURRENT (DA):** Stand-off • Landing • Landing
**PROPOSED (DA):** Stand-off • Landing
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0233

**Card ID:** b2-leidlich-1236
**Field:** lv
**DE konteksts:** leidlich
**CURRENT (DA):** Tolerabel • Tolerabel • Halvgod
**PROPOSED (DA):** Tolerabel • Tolerabel
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0234

**Card ID:** b2-mächtig-1274
**Field:** lv
**DE konteksts:** mächtig
**CURRENT (DA):** Mægtig • Stærk • Kæmpe
**PROPOSED (DA):** Mægtig • Stærk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0235

**Card ID:** b2-mulmig-1341
**Field:** lv
**DE konteksts:** mulmig
**CURRENT (DA):** Utryg • Usikker • Frygtelig
**PROPOSED (DA):** Utryg • Usikker
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0236

**Card ID:** b2-münden-1342
**Field:** lv
**DE konteksts:** münden
**CURRENT (DA):** Flow ind • Flow in • Gå ud • Kør ud
**PROPOSED (DA):** Flow ind • Flow in
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0240

**Card ID:** b2-nachdrücklich-1350
**Field:** lv
**DE konteksts:** nachdrücklich
**CURRENT (DA):** Eftertrykkelig • Kraftig • Overbevisende • Kraftig • Overbevisende
**PROPOSED (DA):** Eftertrykkelig • Kraftig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0241

**Card ID:** b2-nachträglich-1357
**Field:** lv
**DE konteksts:** nachträglich
**CURRENT (DA):** Senere • Yderligere • Senere • For tillæg
**PROPOSED (DA):** Senere • Yderligere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0242

**Card ID:** b2-neuerdings-1374
**Field:** lv
**DE konteksts:** neuerdings
**CURRENT (DA):** For nylig • Disse dage • Igen • Igen
**PROPOSED (DA):** For nylig • Disse dage
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0243

**Card ID:** b2-nichtig-1380
**Field:** lv
**DE konteksts:** nichtig
**CURRENT (DA):** Ugyldig • Ugyldig • Bagatell • Ubetydelig
**PROPOSED (DA):** Ugyldig • Ugyldig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0244

**Card ID:** b2-Niedergang-1381
**Field:** lv
**DE konteksts:** Niedergang
**CURRENT (DA):** Solnedgang • Afvis • Afvis
**PROPOSED (DA):** Solnedgang • Afvis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0245

**Card ID:** b2-niederlegen-1382
**Field:** lv
**DE konteksts:** niederlegen
**CURRENT (DA):** Læg ned • Stop arbejdet • Gå i strejke
**PROPOSED (DA):** Læg ned • Stop arbejdet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0246

**Card ID:** b2-Order-1412
**Field:** lv
**DE konteksts:** Order
**CURRENT (DA):** Ordre • Kommando • Opgave
**PROPOSED (DA):** Ordre • Kommando
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0247

**Card ID:** b2-orientalisch-1418
**Field:** lv
**DE konteksts:** orientalisch
**CURRENT (DA):** Orientalsk • Orientalsk • Orientalsk
**PROPOSED (DA):** Orientalsk • Orientalsk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0248

**Card ID:** b2-pfuschen-1447
**Field:** lv
**DE konteksts:** pfuschen
**CURRENT (DA):** Dårlig • Ufaglært • Slasket arbejde
**PROPOSED (DA):** Dårlig • Ufaglært
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0249

**Card ID:** b2-pikiert-1451
**Field:** lv
**DE konteksts:** pikiert
**CURRENT (DA):** Fornærmet • Fornærmet • Forarget
**PROPOSED (DA):** Fornærmet • Fornærmet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0250

**Card ID:** b2-Posse-1461
**Field:** lv
**DE konteksts:** Posse
**CURRENT (DA):** Farce • Joke leg • Grove joke
**PROPOSED (DA):** Farce • Joke leg
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0251

**Card ID:** b2-Possen-1462
**Field:** lv
**DE konteksts:** Possen
**CURRENT (DA):** Farce • Joke leg • Grove joke
**PROPOSED (DA):** Farce • Joke leg
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0252

**Card ID:** b2-prägen-1464
**Field:** lv
**DE konteksts:** prägen
**CURRENT (DA):** At præge penge • At trykke • At påtvinge • At danne • At lave
**PROPOSED (DA):** At præge penge • At trykke
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0253

**Card ID:** b2-provisorisch-1476
**Field:** lv
**DE konteksts:** provisorisch
**CURRENT (DA):** Foreløbig • Midlertidig • For en tid
**PROPOSED (DA):** Foreløbig • Midlertidig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0254

**Card ID:** b2-quellen-1482
**Field:** lv
**DE konteksts:** quellen
**CURRENT (DA):** Ooze • Ooze • Drench • Drench • Svulme
**PROPOSED (DA):** Ooze • Ooze
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0255

**Card ID:** b2-ranzig-1492
**Field:** lv
**DE konteksts:** ranzig
**CURRENT (DA):** Harsk • Bitter til fløde • Fedt • Smør
**PROPOSED (DA):** Harsk • Bitter til fløde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0256

**Card ID:** b2-rau-1493
**Field:** lv
**DE konteksts:** rau
**CURRENT (DA):** Ru • Ru • Grov • Hæs • Barsk • Uvenlig • Rå
**PROPOSED (DA):** Ru • Ru
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0257

**Card ID:** b2-recken-1503
**Field:** lv
**DE konteksts:** recken
**CURRENT (DA):** At strække • At strække • At strække • At strække
**PROPOSED (DA):** At strække • At strække
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0258

**Card ID:** b2-rege-1508
**Field:** lv
**DE konteksts:** rege
**CURRENT (DA):** Levende • Livlig • Bevægende • Aktiv
**PROPOSED (DA):** Levende • Livlig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0259

**Card ID:** b2-Regung-1513
**Field:** lv
**DE konteksts:** Regung
**CURRENT (DA):** Bevægelse • Følelsesbølge • Tilbøjelighed
**PROPOSED (DA):** Bevægelse • Følelsesbølge
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0260

**Card ID:** b2-Rückgang-1530
**Field:** lv
**DE konteksts:** Rückgang
**CURRENT (DA):** Fald • Regression • Fald
**PROPOSED (DA):** Fald • Regression
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0261

**Card ID:** b2-rücksichtslos-1532
**Field:** lv
**DE konteksts:** rücksichtslos
**CURRENT (DA):** Skødesløs • Uhøflig • Nådesløs
**PROPOSED (DA):** Skødesløs • Uhøflig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0262

**Card ID:** b2-rühmen-1536
**Field:** lv
**DE konteksts:** rühmen
**CURRENT (DA):** At rose • At glorificere • At prale • At prale af noget
**PROPOSED (DA):** At rose • At glorificere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0263

**Card ID:** b2-Sachlage-1543
**Field:** lv
**DE konteksts:** Sachlage
**CURRENT (DA):** Tilstand • Omstændigheder • Situation
**PROPOSED (DA):** Tilstand • Omstændigheder
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0264

**Card ID:** b2-sättigen-1552
**Field:** lv
**DE konteksts:** sättigen
**CURRENT (DA):** [godt] foder • Fest • Chem. mætte
**PROPOSED (DA):** [godt] foder • Fest
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0265

**Card ID:** b2-sausen-1554
**Field:** lv
**DE konteksts:** sausen
**CURRENT (DA):** Raslen • Fløjte • Swish • Swish
**PROPOSED (DA):** Raslen • Fløjte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0266

**Card ID:** b2-Schaffen-1558
**Field:** lv
**DE konteksts:** Schaffen
**CURRENT (DA):** Kreativitet • Skabelse • Arbejde • Aktivitet • Skabelse
**PROPOSED (DA):** Kreativitet • Skabelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0267

**Card ID:** b2-schärfsinnig-1564
**Field:** lv
**DE konteksts:** schärfsinnig
**CURRENT (DA):** Vittig • Med et skarpt sind • Ressourcestærk
**PROPOSED (DA):** Vittig • Med et skarpt sind
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0268

**Card ID:** b2-scheiden-1569
**Field:** lv
**DE konteksts:** scheiden
**CURRENT (DA):** [un]separate • Separate • Separate • Sich sch. lassen • Break up • Break up
**PROPOSED (DA):** [un]separate • Separate
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0269

**Card ID:** b2-Scheitel-1571
**Field:** lv
**DE konteksts:** Scheitel
**CURRENT (DA):** Hoved • Slæb • Sti
**PROPOSED (DA):** Hoved • Slæb
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0270

**Card ID:** b2-Schieber-1577
**Field:** lv
**DE konteksts:** Schieber
**CURRENT (DA):** Bolt • Pil • Spekulant
**PROPOSED (DA):** Bolt • Pil
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0271

**Card ID:** b2-Schöpfung-1600
**Field:** lv
**DE konteksts:** Schöpfung
**CURRENT (DA):** Skabelse • Skabelse • Arbejde
**PROPOSED (DA):** Skabelse • Skabelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0272

**Card ID:** b2-schroff-1604
**Field:** lv
**DE konteksts:** schroff
**CURRENT (DA):** Stejl • Brændt • Barsk • Skarp • Uvenlig
**PROPOSED (DA):** Stejl • Brændt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0273

**Card ID:** b2-schwärmen-1613
**Field:** lv
**DE konteksts:** schwärmen
**CURRENT (DA):** Bliv begejstret • Rave • Drøm
**PROPOSED (DA):** Bliv begejstret • Rave
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0274

**Card ID:** b2-schwinden-1623
**Field:** lv
**DE konteksts:** schwinden
**CURRENT (DA):** [minske] • [dis]appear • Fade away
**PROPOSED (DA):** [minske] • [dis]appear
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0275

**Card ID:** b2-Sonderausgabe-1656
**Field:** lv
**DE konteksts:** Sonderausgabe
**CURRENT (DA):** Særudgave af en bog • Særudgivelse af avis • Særudgivelse af frimærker
**PROPOSED (DA):** Særudgave af en bog • Særudgivelse af avis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0276

**Card ID:** b2-Spaltung-1665
**Field:** lv
**DE konteksts:** Spaltung
**CURRENT (DA):** Splitting • [sa]splitting • [sa]splitting
**PROPOSED (DA):** Splitting • [sa]splitting
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0277

**Card ID:** b2-spärlich-1666
**Field:** lv
**DE konteksts:** spärlich
**CURRENT (DA):** Sjælden • Nærig • Sjælden
**PROPOSED (DA):** Sjælden • Nærig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0278

**Card ID:** b2-Spott-1673
**Field:** lv
**DE konteksts:** Spott
**CURRENT (DA):** Hån • Tænder • Onde vittighed
**PROPOSED (DA):** Hån • Tænder
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0279

**Card ID:** b2-sprengen-1678
**Field:** lv
**DE konteksts:** sprengen
**CURRENT (DA):** [on]blast • Drys • Vand
**PROPOSED (DA):** [on]blast • Drys
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0280

**Card ID:** b2-Spross-1680
**Field:** lv
**DE konteksts:** Spross
**CURRENT (DA):** Bot. scion • Skyd • Trans. afkom • Afkom
**PROPOSED (DA):** Bot. scion • Skyd
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0281

**Card ID:** b2-Spruch-1681
**Field:** lv
**DE konteksts:** Spruch
**CURRENT (DA):** Udtryk • Aforisme • Jur. dom
**PROPOSED (DA):** Udtryk • Aforisme
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0282

**Card ID:** b2-Spuk-1683
**Field:** lv
**DE konteksts:** Spuk
**CURRENT (DA):** Spøgelse • Spøgelse • Tilsynekomst
**PROPOSED (DA):** Spøgelse • Spøgelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0283

**Card ID:** b2-starr-1693
**Field:** lv
**DE konteksts:** starr
**CURRENT (DA):** Bevægelig • Følelsesløs • Stiv
**PROPOSED (DA):** Bevægelig • Følelsesløs
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0284

**Card ID:** b2-tönen-1735
**Field:** lv
**DE konteksts:** tönen
**CURRENT (DA):** At lyde • At tone • At give en skygge
**PROPOSED (DA):** At lyde • At tone
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0285

**Card ID:** b2-überbringen-1761
**Field:** lv
**DE konteksts:** überbringen
**CURRENT (DA):** Lever en besked • En hilsen • Et brev • En gave
**PROPOSED (DA):** Lever en besked • En hilsen
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0286

**Card ID:** b2-übergehen-1768
**Field:** lv
**DE konteksts:** übergehen
**CURRENT (DA):** Overse • Ignorer • Udelad
**PROPOSED (DA):** Overse • Ignorer
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0287

**Card ID:** b2-Überlegung-1772
**Field:** lv
**DE konteksts:** Überlegung
**CURRENT (DA):** Refleksion • Overvejelse • Overvejelse
**PROPOSED (DA):** Refleksion • Overvejelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0288

**Card ID:** b2-übertragen-1780
**Field:** lv
**DE konteksts:** übertragen
**CURRENT (DA):** Sende • Overføre smitsomme sygdomme • Udsende via radio • [re]oversætte
**PROPOSED (DA):** Sende • Overføre smitsomme sygdomme
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0289

**Card ID:** b2-umfassen-1788
**Field:** lv
**DE konteksts:** umfassen
**CURRENT (DA):** At omfatte • At omfavne • At omfavne
**PROPOSED (DA):** At omfatte • At omfavne
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0290

**Card ID:** b2-umkreisen-1793
**Field:** lv
**DE konteksts:** umkreisen
**CURRENT (DA):** Surround • Belejring • Hover • Launch • Circle
**PROPOSED (DA):** Surround • Belejring
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0291

**Card ID:** b2-umschließen-1797
**Field:** lv
**DE konteksts:** umschließen
**CURRENT (DA):** Slå • Encompass • Encompass til
**PROPOSED (DA):** Slå • Encompass
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0292

**Card ID:** b2-Umschwung-1800
**Field:** lv
**DE konteksts:** Umschwung
**CURRENT (DA):** Vende • Pause • Pludselig ændring • Vende • Vende
**PROPOSED (DA):** Vende • Pause
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0293

**Card ID:** b2-umständlich-1803
**Field:** lv
**DE konteksts:** umständlich
**CURRENT (DA):** Meget detaljeret • For bred • Byrdefuld • Kompliceret
**PROPOSED (DA):** Meget detaljeret • For bred
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0294

**Card ID:** b2-unbedacht-1812
**Field:** lv
**DE konteksts:** unbedacht
**CURRENT (DA):** Tankeløs • Forhastet • Uforsigtig
**PROPOSED (DA):** Tankeløs • Forhastet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0295

**Card ID:** b2-unbewusst-1821
**Field:** lv
**DE konteksts:** unbewusst
**CURRENT (DA):** Ubevidst • Instinktiv • Utilsigtet • Utilsigtet
**PROPOSED (DA):** Ubevidst • Instinktiv
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0296

**Card ID:** b2-unentgeltlich-1824
**Field:** lv
**DE konteksts:** unentgeltlich
**CURRENT (DA):** Uden kompensation • Gratis • For ingenting
**PROPOSED (DA):** Uden kompensation • Gratis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0297

**Card ID:** b2-Unfug-1827
**Field:** lv
**DE konteksts:** Unfug
**CURRENT (DA):** Misgerning • Fravær • Uanstændig handling
**PROPOSED (DA):** Misgerning • Fravær
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0298

**Card ID:** b2-ungerade-1829
**Field:** lv
**DE konteksts:** ungerade
**CURRENT (DA):** Ikke helt lige • Skæv • Ulige
**PROPOSED (DA):** Ikke helt lige • Skæv
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0299

**Card ID:** b2-unnütz-1833
**Field:** lv
**DE konteksts:** unnütz
**CURRENT (DA):** Ubrugelig • Unødvendig • Forgæves
**PROPOSED (DA):** Ubrugelig • Unødvendig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0300

**Card ID:** b2-Untergang-1838
**Field:** lv
**DE konteksts:** Untergang
**CURRENT (DA):** Afvis • Afvis • Demise • Kollaps
**PROPOSED (DA):** Afvis • Afvis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0301

**Card ID:** b2-Unterhalt-1840
**Field:** lv
**DE konteksts:** Unterhalt
**CURRENT (DA):** Forsyning • Forsyning • Forsyning
**PROPOSED (DA):** Forsyning • Forsyning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0302

**Card ID:** b2-Unterlage-1843
**Field:** lv
**DE konteksts:** Unterlage
**CURRENT (DA):** Permanent • Måtte • Pad • Support • Data • Dokumentation
**PROPOSED (DA):** Permanent • Måtte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0303

**Card ID:** b2-untertauchen-1849
**Field:** lv
**DE konteksts:** untertauchen
**CURRENT (DA):** At dykke • At dyppe under vand • At dyppe • At dykke
**PROPOSED (DA):** At dykke • At dyppe under vand
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0304

**Card ID:** b2-unwillkürlich-1858
**Field:** lv
**DE konteksts:** unwillkürlich
**CURRENT (DA):** Ubevidst • Utilsigtet • Ubevidst
**PROPOSED (DA):** Ubevidst • Utilsigtet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0305

**Card ID:** b2-Urheber-1862
**Field:** lv
**DE konteksts:** Urheber
**CURRENT (DA):** Initiativtager • Initiativtager • Forfatter
**PROPOSED (DA):** Initiativtager • Initiativtager
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0306

**Card ID:** b2-Ursprung-1865
**Field:** lv
**DE konteksts:** Ursprung
**CURRENT (DA):** Oprindelse • Oprindelse • [før]begyndelse
**PROPOSED (DA):** Oprindelse • Oprindelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0307

**Card ID:** b2-veranlassen-1872
**Field:** lv
**DE konteksts:** veranlassen
**CURRENT (DA):** Årsag • Igangsætte • Opmuntre
**PROPOSED (DA):** Årsag • Igangsætte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0308

**Card ID:** b2-Verdruss-1877
**Field:** lv
**DE konteksts:** Verdruss
**CURRENT (DA):** Kan ikke lide • Skuffelse • Irritation
**PROPOSED (DA):** Kan ikke lide • Skuffelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0309

**Card ID:** b2-verdünnen-1878
**Field:** lv
**DE konteksts:** verdünnen
**CURRENT (DA):** Gør tyndere • Chem. fortyndes • Svækkes
**PROPOSED (DA):** Gør tyndere • Chem. fortyndes
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0310

**Card ID:** b2-verehren-1879
**Field:** lv
**DE konteksts:** verehren
**CURRENT (DA):** Ære • Respekt • Komp. [at] give væk
**PROPOSED (DA):** Ære • Respekt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0311

**Card ID:** b2-Vereinigung-1882
**Field:** lv
**DE konteksts:** Vereinigung
**CURRENT (DA):** Fagforening • Samfund • Kobling
**PROPOSED (DA):** Fagforening • Samfund
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0312

**Card ID:** b2-Verfahren-1884
**Field:** lv
**DE konteksts:** Verfahren
**CURRENT (DA):** Adfærd • Adfærd • Teknik • Metode • Jur. proces • Sag
**PROPOSED (DA):** Adfærd • Adfærd
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0313

**Card ID:** b2-Verfall-1885
**Field:** lv
**DE konteksts:** Verfall
**CURRENT (DA):** Skjul sammen • Afvis • Afvis
**PROPOSED (DA):** Skjul sammen • Afvis
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0314

**Card ID:** b2-verfallen-1886
**Field:** lv
**DE konteksts:** verfallen
**CURRENT (DA):** Collapse • Collapse • Decline • Synk
**PROPOSED (DA):** Collapse • Collapse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0315

**Card ID:** b2-verfügen-1888
**Field:** lv
**DE konteksts:** verfügen
**CURRENT (DA):** Bestem • Kommando • Tildel
**PROPOSED (DA):** Bestem • Kommando
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0316

**Card ID:** b2-verkommen-1916
**Field:** lv
**DE konteksts:** verkommen
**CURRENT (DA):** At afslå • At synke • At gå på afveje
**PROPOSED (DA):** At afslå • At synke
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0317

**Card ID:** b2-vermitteln-1926
**Field:** lv
**DE konteksts:** vermitteln
**CURRENT (DA):** Formidle • Anskaffe • Fremme
**PROPOSED (DA):** Formidle • Anskaffe
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0318

**Card ID:** b2-verordnen-1930
**Field:** lv
**DE konteksts:** verordnen
**CURRENT (DA):** Bestem • Ordre • Med. at underskrive
**PROPOSED (DA):** Bestem • Ordre
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0319

**Card ID:** b2-versagen-1934
**Field:** lv
**DE konteksts:** versagen
**CURRENT (DA):** Benægte • Afvise • Afvise • Ulydige • Nægte at tjene • Fremstå fej og magtesløs
**PROPOSED (DA):** Benægte • Afvise
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0320

**Card ID:** b2-Vertretung-1952
**Field:** lv
**DE konteksts:** Vertretung
**CURRENT (DA):** Substitution • Substitution • Repræsentation • Repræsentere
**PROPOSED (DA):** Substitution • Substitution
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0321

**Card ID:** b2-verwickeln-1959
**Field:** lv
**DE konteksts:** verwickeln
**CURRENT (DA):** At forvirre • Adj. flette ind • Interfere
**PROPOSED (DA):** At forvirre • Adj. flette ind
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0322

**Card ID:** b2-verwirren-1960
**Field:** lv
**DE konteksts:** verwirren
**CURRENT (DA):** At forvirre • Forvirre • Forvirre
**PROPOSED (DA):** At forvirre • Forvirre
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0323

**Card ID:** b2-verzweifelt-1971
**Field:** lv
**DE konteksts:** verzweifelt
**CURRENT (DA):** Desperat • Desperate • Fuld af fortvivlelse
**PROPOSED (DA):** Desperat • Desperate
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0324

**Card ID:** b2-vollkommen-1980
**Field:** lv
**DE konteksts:** vollkommen
**CURRENT (DA):** Komplet • Helt • Helt
**PROPOSED (DA):** Komplet • Helt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0325

**Card ID:** b2-voran-1986
**Field:** lv
**DE konteksts:** voran
**CURRENT (DA):** Foran • Foran • Ved hovedet
**PROPOSED (DA):** Foran • Foran
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0326

**Card ID:** b2-vornehmen-2000
**Field:** lv
**DE konteksts:** vornehmen
**CURRENT (DA):** At gøre • At præstere • At påtage sig • At forpligte sig til noget
**PROPOSED (DA):** At gøre • At præstere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0327

**Card ID:** b2-Vorspiel-2004
**Field:** lv
**DE konteksts:** Vorspiel
**CURRENT (DA):** Prolog • Præludium • Ouverture
**PROPOSED (DA):** Prolog • Præludium
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0328

**Card ID:** b2-Vorsprung-2005
**Field:** lv
**DE konteksts:** Vorsprung
**CURRENT (DA):** Fremtræden • Overhøjhed • Overlegenhed
**PROPOSED (DA):** Fremtræden • Overhøjhed
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0329

**Card ID:** b2-Vorstand-2006
**Field:** lv
**DE konteksts:** Vorstand
**CURRENT (DA):** Bestyrelse • Chef • Ledelse • Chef
**PROPOSED (DA):** Bestyrelse • Chef
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0330

**Card ID:** b2-vortragen-2008
**Field:** lv
**DE konteksts:** vortragen
**CURRENT (DA):** Foredrag • Optræde • Recitere • Spil
**PROPOSED (DA):** Foredrag • Optræde
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0331

**Card ID:** b2-Wesen-2060
**Field:** lv
**DE konteksts:** Wesen
**CURRENT (DA):** Væsen • Skabning • Essens • Natur
**PROPOSED (DA):** Væsen • Skabning
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0332

**Card ID:** b2-wiedergeben-2073
**Field:** lv
**DE konteksts:** wiedergeben
**CURRENT (DA):** Give • Reproducere • Reproducere
**PROPOSED (DA):** Give • Reproducere
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0333

**Card ID:** b2-winden-2077
**Field:** lv
**DE konteksts:** winden
**CURRENT (DA):** Twist • Twist • Flet
**PROPOSED (DA):** Twist • Twist
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0337

**Card ID:** b2-zuwider
**Field:** lv
**DE konteksts:** zuwider
**CURRENT (DA):** Mod • Modsat • Kan ikke lide
**PROPOSED (DA):** Mod • Modsat
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** B2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0339

**Card ID:** b2-bieten
**Field:** study.explanation[1]
**DE konteksts:** bieten
**CURRENT (DA):** Bieten betyder hovedsageligt: ​​at give mulighed / fordel.
**PROPOSED (DA):** Bieten betyder hovedsageligt: at give mulighed / fordel.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0340

**Card ID:** b2-bieten
**Field:** study.explanation[3]
**DE konteksts:** bieten
**CURRENT (DA):** Bieten betyder hovedsageligt: ​​at give en mulighed.
**PROPOSED (DA):** Bieten betyder hovedsageligt: at give en mulighed.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0343

**Card ID:** b2-fordern
**Field:** study.explanation[1]
**DE konteksts:** fordern
**CURRENT (DA):** Fordern betyder hovedsageligt: ​​at kræve / at kræve.
**PROPOSED (DA):** Fordern betyder hovedsageligt: at kræve / at kræve.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0344

**Card ID:** b2-fordern
**Field:** study.explanation[3]
**DE konteksts:** fordern
**CURRENT (DA):** Fordern betyder hovedsageligt: ​​at kræve en standard.
**PROPOSED (DA):** Fordern betyder hovedsageligt: at kræve en standard.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-B2-0345

**Card ID:** b2-foerdern
**Field:** study.explanation[5]
**DE konteksts:** fördern
**CURRENT (DA):** Fordern betyder hovedsageligt: ​​udvikle talent.
**PROPOSED (DA):** Fordern betyder hovedsageligt: udvikle talent.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Smagums:** MEDIUM
**Statuss:** LABOT

---

## 6. Metodoloģija

1. `node scripts/audit-da-b2-collect.js` — READ-ONLY kolektors (DE etalons `data/b2.js`)
2. `node scripts/build-da-b2-owner-review-groups.js` — OWNER review batch faili
3. `node scripts/audit-da-b2-report-gen.js` — šis pārskats
4. Pilna 2118/2118 kartīšu coverage ar automātisku DA lauku caurskanēšanu
5. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas

**Production changes = 0**

**DE changes = 0**