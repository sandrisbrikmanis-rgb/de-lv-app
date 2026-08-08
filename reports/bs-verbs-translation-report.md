# BS–DE VERBS TRANSLATION REPORT

**Date:** 2026-08-08  
**Branch:** `cursor/bs-verbs-translation-c1b5`  
**Model:** GPT-5.6 Luna (verb-form batched translation with German context)

## Source

`/workspace/data/verbs.js`

## Target

`/workspace/data/bs/verbs.js`

## Runtime mirror

`/workspace/www/data/bs/verbs.js`

## LV verbs

189

## BS verbs

189

## Translated

945 / 945 (100% — 858 unique LV strings, 5 forms × 189 entries)

## Structural parity

**PASS** — record count, order, fields, and schema match LV verbs.

## ID parity

**PASS** — implicit index parity (189 entries, same order as LV).

## Order parity

**PASS**

## DE READ-ONLY

**PASS** — all German conjugation fields (`de`) identical to LV source across all 189 verbs and 5 form slots.

## JavaScript syntax

**PASS**

## LV leftovers

0 / 945

## Placeholders

0 / 945

## Mojibake

0 / 945 (2 Cyrillic-character corruptions in initial batch output corrected post-translation: `Pekаo` → `Pekao`)

## Bosnian diacritics

**PASS** — č, ć, đ, š, ž used correctly throughout.

## data/bs/verbs.js ≡ www/data/bs/verbs.js

**PASS**

## Automatic checks

| Script | Result |
|---|---|
| `node scripts/audit-language-parity.js --lang=bs` | PASS |
| `node scripts/verify-bs-de-compliance.js` | PASS |
| `node scripts/audit-mojibake.js --lang=bs` | PASS (0 hits) |
| `node scripts/audit-translations.js --lang=bs` | PASS (no verbs-specific issues; B2 card mismatches are pre-existing owner-accepted data) |
| `node --check data/bs/verbs.js` | PASS |
| `node --check www/data/bs/verbs.js` | PASS |

## Post-translation manual fixes

26 **imperfektKonjunktiv** entries where Luna initially produced Präteritum (`… je`) instead of Konjunktiv II (`… bi`) were corrected to natural Bosnian conditional forms, guided by German `er …te / er …e` slots (e.g. `sein` → `Bio bi`, `dürfen` → `On bi smio`, `stinken` → `Smrdjelo bi`).

## Translation approach

- LV `verbs.js` used as structural + semantic intent etalon.
- German lemma and form slot sent as context for each batch item.
- Verb-specific Luna instructions covered infinitive, present, past, conditional, and participle slots.
- Aspect, reflexivity, and natural Bosnian collocation evaluated per German meaning (not blind LV mirroring).
- `•` separator preserved for multi-variant participles; semicolons not used.

## Luna API usage

| Metric | Value |
|---|---:|
| API requests | 18 |
| Unique strings translated | 858 |
| Total tokens | 80,296 |
| Estimated cost (USD) | ~0.085 |

## Potential DE source issues

**NONE** — no German conjugation anomalies flagged during translation. (LV Konjunktiv II labels for some modals mirror Präteritum rather than true Konjunktiv; BS translations follow German form slots.)

## Changed files

- `data/bs/verbs.js`
- `www/data/bs/verbs.js`
- `reports/bs-verbs-translation-report.md`

## Next step

Separate **BS–DE VERBS FULL LINGUISTIC AUDIT** (semantic precision, aspect, reflexivity, DE ↔ BS form equivalence) — not in scope of this translation pass.
