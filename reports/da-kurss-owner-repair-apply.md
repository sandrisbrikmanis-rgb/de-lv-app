# DA–DE Kurss — OWNER repair apply report

**Branch:** `cursor/da-kurss-master-v11-audit-fffe`  
**Decisions:** `reports/da-kurss-owner-decisions-signed.md`  
**DE:** STRICT READ-ONLY (0 production DE file changes)

## OWNER decision summary

| Status | Count |
|--------|------:|
| LABOT | 48 |
| FALSE_POSITIVE | 19 |
| NELABOT | 6 |
| NEEDS_SOURCE_REVIEW | 22 |

## Apply results

| Track | Applied | Notes |
|-------|--------:|-------|
| Primary COPY-ONLY apply | **40** / 48 LABOT | `scripts/apply-da-kurss-owner-repair.js` |
| Residual fragment apply | **18** replacements | `scripts/apply-da-kurss-owner-repair-residual.js` (7 LABOT items with non-contiguous audit blocks) |
| Skipped | **1** | #31 `L0005` — audit Latvian fragment absent from live `kurssLesson3.legacyHtml` |

**Effective LABOT coverage:** 47 / 48 (98%)

## Files changed (DA only)

- `data/da/courseLessons.js`
- `www/data/da/courseLessons.js` (mirror)
- `data/da/courseTrainingCards.js` (2 training card fronts)
- `www/data/da/courseTrainingCards.js` (mirror)

## Regression gates

| Gate | Result |
|------|--------|
| `node --check` (DA lessons + training) | PASS |
| `validate-kurss.js --lang=da` | PASS |
| `data/` ↔ `www/` mirror | PASS |
| DE diff vs `main` | 0 |
| LV MASTER diff vs `main` | 0 |
| Mojibake audit | PASS |

## Residual / follow-up

- **#31 L0005:** OWNER LABOT text targets Latvian fragment not present in current lesson3 HTML — no safe COPY-ONLY anchor.
- **NEEDS_SOURCE_REVIEW (22):** not applied (whole legacyHtml lessons, transcription etalon items, Boden/Decke semantic mismatch).
- **FALSE_POSITIVE / NELABOT:** not applied per OWNER signed decisions.

## Post-repair re-audit (MASTER v1.1)

Pilns READ-ONLY audits pēc LABOT apply: [`reports/da-kurss-full-audit.md`](da-kurss-full-audit.md)

| Metrika | Pirms apply | Pēc apply |
|---------|------------:|----------:|
| Findings | 95 | **26** |
| CRITICAL | 17 | **0** |
| HIGH | 52 | **25** |
| Targeted regression (40 primary applies) | — | **PASS** |

Luna šajā run: heuristika (API key unavailable). Atlikušie 26 ietver 16 structure (lesson7 `.lv` — OWNER FALSE_POSITIVE) un ~10 deterministic/Luna atlikuši.
