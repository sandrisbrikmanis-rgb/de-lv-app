# BS–DE C2 TRANSLATION REPORT

**Date:** 2026-08-08  
**Branch:** `cursor/bs-c2-translation-c1b5`  
**Model:** GPT-5.6 Luna (card-batched translation)

## Target file

`/workspace/data/bs/c2.js`

## Source

`/workspace/data/c2.js`

## Cards

| | Count |
|---|---:|
| LV | 219 |
| BS | 219 |

## Translated

219 / 219 (100%)

## Study cards

| Layout | Count |
|---|---:|
| standardStudy | 1 |
| comparisonStudy | 0 |
| minimalStudy | 0 |

## Structural parity

**PASS** — record count, order, fields, and layout match LV C2.

## DE READ-ONLY

**PASS** — all German fields (`de`, `de_article`, `de_plural`, examples) identical to LV C2.

## Unique IDs

**PASS** — study card `c2-gewichtseinheit` preserved.

## JavaScript syntax

**PASS**

## Mojibake

0 / 219

## Placeholders

0 / 219

## LV leftovers

0 / 219 (Latvian-specific diacritics ā ē ī ū ģ ķ ļ ņ)

## sectionAccents

**PASS** — C2 has no `sectionAccents` (matches LV etalon).

## Comparison highlights

**N/A** — no `comparisonStudy` cards in C2.

## Automatic checks

| Script | Result |
|---|---|
| `node scripts/audit-language-parity.js --lang=bs` | PASS |
| `node scripts/validate-study-design.js --lang=bs` (C2) | PASS (0 sectionAccentIssues) |
| `node scripts/verify-bs-de-compliance.js` | PASS |
| `node scripts/audit-mojibake.js --lang=bs` | PASS (0 hits) |
| `node scripts/audit-translations.js --lang=bs` (C2) | PASS (no C2 issues) |
| `node scripts/audit-study-cards.js --lang=bs` (C2) | WARNING — 0/1 per global standardStudy rules; LV etalon has same minimal study structure (no comparison/tip/important) |

## API statistics

| Metric | Value |
|---|---:|
| Requests | 9 |
| Total tokens | 16,335 |
| Estimated cost | ~$0.0166 |

## Potential DE source issues

**NONE**

## Warnings requiring later audit

1. **audit-study-cards C2 (0/1)** — Global `standardStudy` rules expect comparison/tip/important sections; LV C2 study card intentionally has only translation, explanation, and 3 examples. Per project convention: **WARNING only**, not a translation defect.
2. **`Unvoreingenommenheit`** — LV gloss `objektivitāte • neitralitāte` does not match German semantics (Unvoreingenommenheit = lack of bias/prejudice). Translated faithfully as `Objektivnost • Neutralnost`. Flagged as **SOURCE_LV_ISSUE** for owner backlog; DE not modified.

## Manual quality fixes applied

| Card | Fix |
|---|---|
| `konterkarieren` | `Rastaviti` → `Poremetiti` |
| `gesellschaftlich` | `Društveni • Društva` → `Društveni • Javni` |

## Changed files

- `data/bs/c2.js`
- `www/data/bs/c2.js`
- `reports/bs-c2-translation-report.md`

**NEKO CITU NETIKA MAINĪTS.**
