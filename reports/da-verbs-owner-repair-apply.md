# DA–DE Verbs — OWNER repair apply report

**Datums:** 2026-08-16  
**Metode:** COPY-ONLY pēc OWNER signed decisions (11/12 grupas)

## Avots

| Grupa | Findings | Fails |
|-------|----------|-------|
| group01–06 | 1–300 | `da-verbs-owner-decisions-signed-group01..06.md` |
| **group07** | **301–350** | **NAV augšupielādēts — nav apply** |
| group08–12 | 351–569 | `da-verbs-owner-decisions-signed-group08..12.md` |

## Apply rezultāts

| Metrika | Vērtība |
|---------|--------:|
| Signed rows | **519/519** (bez group07) |
| LABOT rows | **512** |
| Unique `(verb, field)` apply | **454** |
| Applied | **454** |
| Skipped (CURRENT mismatch) | **0** |
| Failed | **0** |
| FALSE_POSITIVE | **3** (nav mainīts) |
| NELABOT | **2** (nav mainīts) |
| NEEDS_SOURCE_REVIEW | **2** (nav mainīts) |
| DE changes | **0** |
| Mirror | **PASS** |

## Nav apply (gaida OWNER)

- **Group 07** (50 findings, `verb-95`–`verb-109` diapazons): decisions vēl **PENDING**
- **NEEDS_SOURCE_REVIEW:** `DA-VERB-0081`, `DA-VERB-0094` (DE Konjunktiv II avots)

## Production

- `data/da/verbs.js` — **454** DA `.lv` lauki
- `www/data/da/verbs.js` — mirror

**Nākamais sols:** group07 OWNER decisions → apply → targeted regression audit → closure
