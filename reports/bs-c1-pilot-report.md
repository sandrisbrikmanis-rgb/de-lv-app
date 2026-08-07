# BS–DE C1 — GPT-5.6 Luna pilotprojekta atskaite

**Datums:** 2026-08-07  
**Modelis:** GPT-5.6 Luna (`gpt-5.6-luna`)  
**Statuss:** Pilotprojekts pabeigts

---

## 1. Kopsavilkums

BS–DE C1 izveidots no LV–DE etalona (`data/c1.js`) ar jauno batch tulkošanas arhitektūru. Vācu lauki ir READ-ONLY. Šis ir tehnisks eksperiments — pilns kvalitātes audits tiks veikts atsevišķi.

---

## 2. Izveidotie faili

| Fails | Darbība |
|---|---|
| `data/bs/c1.js` | Ģenerēts/atjaunināts |
| `www/data/bs/c1.js` | Sinhronizēts |
| `scripts/generate-bs-c1-from-lv.js` | Jauns |
| `scripts/lib/openai-translate-batch.js` | Jauns |
| `reports/bs-c1-pilot-report.md` | Jauns |
| `scripts/.bs-c1-openai-translation-cache.json` | Cache (gitignored) |
| `scripts/.bs-c1-openai-stats.json` | API statistika (gitignored) |

---

## 3. Datu apjoms

| Metrika | Vērtība |
|---|---:|
| C1 kartītes | 572 |
| Study kartītes | 15 |
| — standardStudy | 15 |
| Unikālās tulkojamās virknes | 754 |

---

## 4. API statistika

| Metrika | Vērtība |
|---|---:|
| Requestu skaits | 46 |
| Batch skaits | 23 (kartīšu grupas) |
| Vidējais batch izmērs | 12.6 virknes/request |
| Unikālās virknes | 754 |
| Keša trāpījumi (pirms API) | 464 |
| API tulkotās virknes | 290 |
| Retry (bojātu tulkojumu korekcija) | 23 |
| Input tokeni | 34 958 |
| Cached input tokeni | 4 563 |
| Output tokeni | 27 673 |
| Kopā tokeni | 62 631 |
| Aptuvenās izmaksas (USD) | $0.0631 |

**Piezīme:** 46 requesti ietver 23 retry mēģinājumus bojātu atsevišķu virkņu korekcijai (LV atlikumi pirmajā mēģinājumā). Bez retry būtu 23 batch requesti.

---

## 5. Salīdzinājums ar veco pieeju (A2)

| Metrika | Vecā pieeja (A2) | Jaunā pieeja (C1 pilot) |
|---|---:|---:|
| Modelis | GPT-5.5 | GPT-5.6 Luna |
| Requestu modelis | 1 virkne = 1 request | ~25 kartītes/batch (JSON) |
| Deduplikācija | Jā (starp-cache) | Jā (obligāta) |
| Lokālā normalizācija | Jā | Jā |
| Requesti (līdzīgs apjoms) | 290 (C1 ekvivalents) | 23–46 |
| Requestu samazinājums | — | **84–92%** |
| System prompt | Per-request instrukcijas | Viens fiksēts prompt (cache-friendly) |

### A2 atsauce (vecā pieeja)

- 8 200 unikālas virknes, 4 254 OpenAI requesti
- 8 paralēli workeri, 1 virkne/request

### C1 pilots (jaunā pieeja)

- 754 unikālas virknes, 464 cache hit, 290 API tulkojumi
- 23 kartīšu batchi × ~12 virknes = 46 requesti (ar retry)
- Aptuvenās izmaksas: **$0.06** visam C1

---

## 6. Validācija

| Pārbaude | Rezultāts |
|---|---|
| JavaScript sintakse | PASS |
| UTF-8 | PASS |
| Ierakstu skaits | 572 |
| ID / kartīšu secība | Nemainīta (LV etalons) |
| `data/bs/c1.js` ≡ `www/data/bs/c1.js` | PASS (identiski) |
| DE READ-ONLY | PASS |
| Valodu paritāte (`audit-language-parity`) | PASS |
| LV atlikumi BS datos | 0 |
| sectionAccents TECHNICAL (C1) | 28 issues — **gaida atsevišķu audit/fix posmu** |

---

## 7. Kvalitātes novērtējums (pilotam)

| Aspekts | Novērtējums |
|---|---|
| Galvenie tulkojumi (flashcard `lv`) | Pietiekami labi pilotam |
| Study saturs (15 kartītes) | Tulkošana veikta; sectionAccents nav sinhronizēti |
| DE integritāte | Pilnīga (0 mismatches) |
| LV atlikumi | 0 |

**Ieteikums:** GPT-5.6 Luna ar batching arhitektūru ir piemērota B1/B2/C2 ģenerēšanai. Pirms production ieteicams palaist `fix-bs-c1-section-accents.js` (jāizveido pēc A2 parauga) un pilnu auditu.

---

## 8. Secinājums

Pilotprojekts veiksmīgi izpildīts ar **GPT-5.6 Luna**. Batch tulkošana ar deduplikāciju un vienu system promptu būtiski samazina requestu skaitu un izmaksas salīdzinājumā ar A2 pieeju.

**NEKAS CITS NETIKA MAINĪTS.**
