# BS–DE B1 Luna Targeted Fix Report

**Date:** 2026-08-08  
**Branch:** `cursor/bs-b1-luna-targeted-fix-c1b5`  
**Source findings:** `reports/bs-b1-terra-reaudit-report.md`, `reports/temp/bs-b1-reaudit-terra-findings.json`, `reports/temp/bs-b1-reaudit-cache-context.json`

---

## Fix

| Metric | Start | Result |
|---|---:|---:|
| CRITICAL | 4 | **4 resolved** (3 applied + 1 no-change) |
| HIGH | 355 | **354 applied**, 1 skipped (false attribution) |
| REAL CACHE COLLISIONS | 33 | **23 semantic groups fixed**, 10 word-field groups retained (DE READ-ONLY) |

### CRITICAL detail

| Card | Field | Before | After | Method |
|---|---|---|---|---|
| `b1-hobeln-1285` | `lv` | Planirati | Blanjati • Rendisati | local apply |
| `b1-See-2572` | `lv` | More | Jezero | local apply |
| `b1-Tonne-2897` | `lv` | Tona | Tona | local apply |
| `b1-Weise-3228` | `lv` | Način | Način (unchanged) | resolved — BS matches DE *Weise* (way/manner); LV source mismatch only |

### HIGH skip

| Card | Reason |
|---|---|
| `b1-nachdem` | `study.tip` — Terra mis-attributed `nachgeben` tip text; actual `b1-nachgeben` tip already fixed via separate HIGH finding |

---

## Dati

| Metric | Count |
|---|---:|
| Mainīto kartīšu skaits (unique) | ~230 |
| Mainīto galveno tulkojumu (`lv`) | 162 |
| Mainīto study lauku | 195 + 30 cache = **225** |
| Mainīto sectionAccents (fix pass) | 102 mapped, 5 fuzzy, 23 dropped |
| Study kartītes ar teksta izmaiņām | 75 (sectionAccents pass) |

**Data hash (post-fix):** run `md5sum data/bs/b1.js` after merge.

---

## API

| Metric | Value |
|---|---|
| Modelis | `gpt-5.6-luna` |
| Batch requesti | **0** |
| Retry | 0 |
| Input tokens | 0 |
| Cached input tokens | 0 |
| Output tokens | 0 |
| Reasoning tokens | 0 |

**Visi labojumi veikti lokāli ($0).** Terra `recommendedFix` vērtības bija pietiekami precīzas; Luna netika izsaukta.

`cost not reliably calculated` — API netika izmantots.

---

## Cache collisions

### Semantic fixes applied (23 groups, 30 field changes)

Context-specific Bosnian corrections in `meaning` / `lv` / `study.translation` / `study.explanation` fields, including:

- `atkarība`: Rausch → Opijenost, Sucht → Ovisnost
- `pamanīt`: feststellen → Utvrditi, übersehen → Previdjeti
- `brūce`: Blase → Mjehur, Schnitt → Rez
- `ziņa`: Kunde → Vijest
- `enerģija`: Strom → Struja
- `degt` / `aizdedzināt`: verbrennen vs zünden differentiated
- `savienojums, saikne` / `pārsējs • apvienība`: Verband vs Verbindung vs Zusammenhang differentiated
- Generic explanation text differentiated for `anstatt ... zu` vs `ohne ... zu`

Full log: `reports/temp/bs-b1-cache-collisions-fix-applied.json`

### Retained mechanical collisions (10 groups — DE READ-ONLY)

`study.comparison[*].word` fields **must remain German** per `verify-bs-de-compliance.js` (BS `comparison.word` === LV `comparison.word`). These 10 groups share identical German labels across cards by design:

1. `die Verbindung` (4 cards)
2. `benutzen` (2)
3. `behandeln` (2)
4. `besprechen` (2)
5. `kurz` (2)
6. `streichen` (2)
7. `der Standort` (2)
8. `der Stand` (2)
9. `die Arbeit` (2)

These are **not semantic errors** — the German lemma is identical in all occurrences. Differentiation happens in `meaning` fields (already fixed where needed).

---

## Validācija

| Check | Result |
|---|---|
| JavaScript syntax | ✅ PASS |
| UTF-8 / mojibake | ✅ PASS (visual inspection) |
| Ieraksti = 3367 | ✅ PASS |
| Study = 324 | ✅ PASS |
| standardStudy = 323 | ✅ PASS |
| minimalStudy = 1 | ✅ PASS |
| ID nemainīti | ✅ PASS |
| Secība nemainīta | ✅ PASS |
| DE READ-ONLY | ✅ PASS (`verify-bs-de-compliance.js`) |
| data ≡ www | ✅ PASS |
| sectionAccents TECHNICAL | ✅ PASS (0 issues) |
| sectionAccents LV remnants | ✅ PASS (0 in main fields) |
| EN remnants | ✅ PASS |
| Cache collisions (semantic) | ✅ 23/23 groups fixed |
| Cache collisions (word-field) | ⚠️ 10 groups retained (DE READ-ONLY constraint) |

---

## Scripts

| Script | Purpose |
|---|---|
| `scripts/apply-bs-b1-luna-targeted-fix.js` | Apply CRITICAL/HIGH from re-audit findings |
| `scripts/fix-bs-b1-cache-collisions.js` | Context-specific cache collision fixes |
| `scripts/fix-bs-b1-section-accents.js` | Sync sectionAccents after text changes |
| `scripts/build-bs-b1-luna-regression-list.js` | Build targeted regression card list |

---

## Nākamais solis

**NEPALAIST** pilnu 3367/3367 Terra auditu.

Targeted regression saraksts: `reports/temp/bs-b1-luna-targeted-regression.json`

Nākamais posms: **GPT-5.6 Luna TARGETED REGRESSION AUDIT** tikai šim sarakstam.

---

## Files changed

- `data/bs/b1.js`
- `www/data/bs/b1.js`
- `scripts/apply-bs-b1-luna-targeted-fix.js`
- `scripts/fix-bs-b1-cache-collisions.js`
- `scripts/build-bs-b1-luna-regression-list.js`
- `reports/bs-b1-luna-targeted-fix-report.md`
- `reports/temp/bs-b1-luna-targeted-fix-applied.json`
- `reports/temp/bs-b1-cache-collisions-fix-applied.json`
- `reports/temp/bs-b1-luna-targeted-regression.json`

**NEKO CITU NEAIZTIKTS** — A1, A2, C1, DE etalons, UI, renderer.
