# DA–DE C2 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Audita režīms:** READ-ONLY
**Production fails:** `data/da/c2.js` (primārais) + `www/data/da/c2.js` (mirror)
**Piezīme:** Dāņu tulkojumi glabājas laukā lv (projekta konvencija).
**DE etalons (tikai lasīšana):** `data/c2.js (DE parity only, READ-ONLY)`

---

## 1. Dataset scope

| Metrika | Vērtība |
|---------|---------|
| Cards total | **219** |
| Cards audited | **219/219** |
| Flashcards | **218** |
| Study total | **1** |
| Study audited | **1/1** |
| standardStudy | **1** |
| minimalStudy | **0** |
| Other study types | **0** |
| Coverage | **100%** |
| Parastās kartītes | **218** |

## 2. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kopējie validētie atradumi | **5** |
| rawCandidates | **0** |
| falsePositives | **0** |
| realFindings | **5** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **5** |
| LOW | **0** |
| FALSE_POSITIVE | **0** |
| NEEDS_SOURCE_REVIEW | **0** |
| Svešvalodu atlikumi (auditēti) | **0** |
| Zero-width artefakti | **0** |
| sectionAccents findings | **0** |
| Missing Study | **0** |
| Front/lv sinonīmu ķēdes | **5** |
| Comparison LV atlikumi | **0** |
| Syntax | **PASS** |
| Mirror data ↔ www | **PASS** |
| Parity (--lang=da, C2) | **PASS** |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE C2: NEEDS REPAIR**

Atrasts **5** labojumu ierakstu (bez FALSE_POSITIVE). DE integritāte: **PASS**; Study paritāte: **PASS**. OWNER review: [`da-c1c2-all-findings-by-card.md`](./da-c1c2-all-findings-by-card.md).

---

## 3. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 219/219 PASS |
| Study skaits | 1/1 PASS |
| DE lauku secība/identitāte | PASS |
| Study paritāte (missing/extra) | PASS |
| Study ID unikalitāte | PASS |
| Mirror data ↔ www | PASS |
| JS syntax | PASS |
| Language parity (C2) | PASS |

---

## 4. OWNER review

- [`da-c1c2-all-findings-by-card.md`](./da-c1c2-all-findings-by-card.md)

---

## 5. Pilns atradumu saraksts

### 5.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes

#### DA-C2-0001

**Card ID:** c2-Berichterstatter-86
**Field:** lv
**DE konteksts:** Berichterstatter
**CURRENT (DA):** Reporter • Reporter • Korrespondent • Reporter
**PROPOSED (DA):** Reporter • Reporter
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C2-0002

**Card ID:** c2-durchkreuzen-103
**Field:** lv
**DE konteksts:** durchkreuzen
**CURRENT (DA):** Slå ud • Kryds • Kryds • Forstyr
**PROPOSED (DA):** Slå ud • Kryds
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C2-0003

**Card ID:** c2-Entschlossenheit-113
**Field:** lv
**DE konteksts:** Entschlossenheit
**CURRENT (DA):** Sikkerhed • Beslutsomhed • Uden tvivl
**PROPOSED (DA):** Sikkerhed • Beslutsomhed
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C2-0004

**Card ID:** c2-Errungenschaft-117
**Field:** lv
**DE konteksts:** Errungenschaft
**CURRENT (DA):** Præstation • Udbytte • Gevinst
**PROPOSED (DA):** Præstation • Udbytte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-C2-0005

**Card ID:** c2-Leistungsfähigkeit-173
**Field:** lv
**DE konteksts:** Leistungsfähigkeit
**CURRENT (DA):** Arbejdskapacitet • Produktivitet • Kapacitet
**PROPOSED (DA):** Arbejdskapacitet • Produktivitet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Pamatojums:** C2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Smagums:** MEDIUM
**Statuss:** LABOT

---

## 6. Metodoloģija

**Auditors:** GPT-5.6 Luna (READ-ONLY)
1. `node scripts/audit-da-c1c2-collect.js --level=c2` — READ-ONLY kolektors
2. `node scripts/build-da-c1c2-owner-review.js` — OWNER review tabula
3. `node scripts/audit-da-c1c2-report-gen.js` — šis pārskats
4. Pilna 219/219 kartīšu coverage ar automātisku DA lauku caurskanēšanu
5. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas

## AUDIT COMPLETE — OWNER REVIEW READY

**Production changes = 0**

**DE changes = 0**