# DA–DE B1 — final repair regression audit

**Date:** 2026-08-16
**Mode:** READ-ONLY (production changes = 0 in this audit)
**Branch:** `cursor/da-b1-owner-repair-sectionaccents-misc-fffe`
**HEAD:** `4bf7c487e2f0f13855f0be8f858012a7a3b2d8db`
**Baseline (pre-repair):** `origin/main` (`6ebf38b471a9bc10962cf246c73d4218033c5370`)
**Production:** `data/da/b1.js` + mirror `www/data/da/b1.js`

## 1. OWNER LABOT exact match

| Metrika | Skaitlis |
|---------|--------:|
| Pārbaudīti | **1643** |
| EXACT_MATCH | **1643** |
| MISMATCH | **0** |
| MISSING_CARD | **0** |
| MISSING_FIELD | **0** |
| UNEXPECTED_VALUE | **0** |
| Exact match rate | **100.00%** |

## 2. Remontā skartās kartītes

| Metrika | Skaitlis |
|---------|--------:|
| Auditētas (mainītas vs baseline) | **314** |
| OWNER unikālās kartītes | **314** |

## 3. Severity kopsavilkums

| Severity | Skaitlis |
|----------|--------:|
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| LOW | **0** |
| FALSE_POSITIVE | **0** |
| NEEDS_SOURCE_REVIEW | **0** |

## 4. Kategorijas

| Kategorija | Skaitlis |
|------------|--------:|
| Residual stale sectionAccents | **0** |
| Foreign-language remnants | **0** |
| Placeholders | **0** |
| Unexpected production changes | **0** |
| DE changes | **0** |

## 5. Strukturālās pārbaudes

| Pārbaude | Rezultāts |
|----------|-----------|
| syntax | **PASS** |
| ID/order | **PASS** |
| structure | **PASS** |
| DE READ-ONLY | **PASS** |
| Mirror data ↔ www | **PASS** |
| Cards | **3367/3367** |
| Study | **324/324** |
| Parity (--lang=da, B1) | **PASS** |

## 6. Closure kritērijs

| Nosacījums | Prasība | Faktiski |
|------------|---------|----------|
| OWNER exact match | 100% | **100.00%** |
| MISMATCH | 0 | **0** |
| CRITICAL | 0 | **0** |
| HIGH | 0 | **0** |
| MEDIUM | 0 | **0** |
| LOW | 0 | **0** |
| Residual stale sectionAccents | 0 | **0** |
| Foreign remnants | 0 | **0** |
| Placeholders | 0 | **0** |
| DE changes | 0 | **0** |
| Unexpected changes | 0 | **0** |

### Gala verdict

**DA–DE B1 REPAIR: FULLY CLOSED**

## 7. Audita piezīmes

- **OWNER exact match:** visi **1643** LABOT ieraksti (`SET` + `FJERN`) atbilst production vērtībām.
- **Unexpected changes:** pēc path normalizācijas (`.purple.[0]` ↔ `.purple[0]`, `lv` top-level) — **0** ārpus scope.
- **Stale sectionAccents:** **0** (pēdējā pārbaudē).
- **DE READ-ONLY:** salīdzinājums ar `origin/main` — **0** DE lauku izmaiņu.

## 8. Reālie atlikušie atradumi

_Nav._

## 9. Apply map avots

- Faili: **37** decision markdown
- LABOT rindas: **1643**
- JSON: `reports/temp/da-b1-owner-apply-map.json`
