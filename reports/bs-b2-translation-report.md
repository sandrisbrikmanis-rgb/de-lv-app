# BS–DE B2 — initial translation report (GPT-5.6 Luna)

**Datums:** 2026-08-08  
**Modelis:** `gpt-5.6-luna`

## Source

| Loma | Ceļš |
|---|---|
| LV B2 avots (READ-ONLY) | `data/b2.js` |
| BS B2 mērķis | `data/bs/b2.js` |
| www mirror | `www/data/bs/b2.js` |

## Counts

| Metrika | Vērtība |
|---|---:|
| LV B2 kartītes | 2118 |
| BS B2 kartītes | 2118 |
| Iztulkotas kartītes | 2118 |
| Iztulkoti lauki (izmaiņu instances) | 2586 |
| Study kartītes | 60 |
| standardStudy | 15 |
| minimalStudy | 45 |
| Citi study tipi | 0 |

## Translation

| Metrika | Vērtība |
|---|---:|
| GPT model | `gpt-5.6-luna` |
| Pilot batch | **PASS** (2402 unikālās virknes; 67 tulkojamas; 1 API request; DE READ-ONLY saglabāts) |
| Batch kopā | 16 |
| Veiksmīgi batch | 16 |
| Neveiksmīgi batch | 0 |
| Retries | 0 |
| Resumed batch | 0 |
| Unikālās virknes | 2402 |
| Cache hits | 2336 |
| Jauni Luna tulkojumi | 66 |
| Vidējais batch izmērs | 4.1 virknes |

### sectionAccents sinhronizācija

| Metrika | Vērtība |
|---|---:|
| Termini pārbaudīti | 320 |
| Kartēti | 61 |
| Izņemti | 15 |
| Kartītes mainītas | 15 |

### Post-translation remnant fix

Pēc masveida tulkošanas tika konstatēti 44 study lauki ar LV/EN atlikumiem (`formsLabel`, `rektion`, `forms`, `flauschig`). Laboti ar `scripts/fix-bs-b2-lv-remnants.js` (bez jauniem API requestiem).

## Issues

| Tips | Skaits |
|---|---:|
| SOURCE_LV_ISSUE | 0 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_REVIEW | 0 |
| Neatrisināti tulkojuma lauki | 0 |

## Validation

| Check | Result |
|---|---|
| JS syntax | PASS |
| UTF-8 | PASS |
| mojibake | PASS (0) |
| Structural parity | PASS (2118/2118) |
| ID parity/order | PASS |
| DE READ-ONLY | PASS |
| Missing BS | 0 |
| LV remnants | 0 |
| EN remnants | 0 |
| sectionAccents TECHNICAL (B2) | 0 |
| data ≡ www | PASS |

### Study structure

| Check | Result |
|---|---|
| study structure parity | PASS |
| studyObjectNoRenderable (B2) | 2 (`sich verlaufen`, `verlaufen` — strukturāli no LV avota) |

## API usage report

| Metrika | Vērtība |
|---|---:|
| Model | `gpt-5.6-luna` |
| API requests | 16 |
| Successful requests | 16 |
| Failed requests | 0 |
| Retries | 0 |
| Input tokens | 7351 |
| Cached input tokens | 0 |
| Output tokens | 2708 |
| Reasoning tokens | 0 |
| Total tokens | 10059 |
| Estimated cost (USD) | $0.0073 |

## Mainītie / izveidotie faili

- `data/bs/b2.js` — pilns BS–DE B2 tulkojums
- `www/data/bs/b2.js` — web mirror (identisks)
- `scripts/generate-bs-b2-from-lv.js` — Luna batch ģenerators
- `scripts/fix-bs-b2-section-accents.js` — sectionAccents sinhronizācija
- `scripts/fix-bs-b2-lv-remnants.js` — LV/EN atlikumu labojums
- `reports/temp/bs-b2-translation-progress.json` — checkpoint
- `reports/temp/bs-b2-section-accents-fix-log.json` — sectionAccents žurnāls
- `scripts/.bs-b2-openai-translation-cache.json` — tulkošanas cache
- `scripts/.bs-b2-openai-stats.json` — API statistika

## Statuss

**BS–DE B2 INITIAL TRANSLATION = COMPLETE**

Šis NAV `AI AUDITED`, NAV `PRODUCTION READY`, NAV `FINAL – OWNER ACCEPTED`.

**NEKO CITU NEAIZTIKTS / NELABOTS** (īpaši BS B1 = FINAL – OWNER ACCEPTED, READ-ONLY).
