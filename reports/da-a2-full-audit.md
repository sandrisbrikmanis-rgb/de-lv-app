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
| Kopējie validētie atradumi | **0** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| LOW | **0** |
| DE_SOURCE_ISSUE | **0** |
| FALSE_POSITIVE | **0** |
| Comparison LV atlikumi | **0** |
| Zero-width artefakti | **0** |
| sectionAccents problēmas | **0** |
| Sinonīmu ķēdes (3+ •) | **0** |
| Syntax | **PASS** |
| Mirror/parity | **PASS** (data ↔ www) |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE A2: PASS**

Nav kritisku vai augsta smaguma atradumu. DE integritāte un struktūra atbilst etalonam.

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

---

## 4. Metodoloģija

1. `node scripts/audit-da-a2-collect.js` — READ-ONLY kolektors (DE etalons `data/a2.js`)
2. `node scripts/audit-da-a2-report-gen.js` — pārskata ģenerators
3. Pilna 1640/1640 kartīšu coverage ar automātisku DA lauku caurskanēšanu
4. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas

**Production changes = 0**

**DE changes = 0**