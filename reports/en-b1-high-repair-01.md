# EN–DE B1 HIGH REPAIR #1

**Date:** 2026-08-09  
**Scope:** 25 owner-reviewed HIGH cards (OWNER verdict: LABOT 25/25)  
**Branch:** `cursor/en-b1-high-repair-01-6850`

## Production files changed

| File | Change |
|------|--------|
| `data/en/b1.js` | 25-card learner-facing EN + sectionAccents repairs |
| `www/data/en/b1.js` | Mirror of `data/en/b1.js` |

**READ-ONLY preserved:** `data/b1.js` (DE source) — unchanged.

## Cards repaired: 25/25

| # | Card ID | Fields repaired |
|---|---------|-----------------|
| 1 | `b1-abhängen` | `study.translation`, `study.important.text`, `sectionAccents.examples[2].lv.purple` |
| 2 | `b1-abschnitt` | `study.important.text`, `sectionAccents.important.purple` |
| 3 | `b1-antrag` | `study.important.text`, `sectionAccents.examples[0].lv.purple` |
| 4 | `b1-berichten` | `study.important.text`, `sectionAccents.tip.leftBlocks[0].text.purple`, `sectionAccents.important.purple` |
| 5 | `b1-blase` | `study.explanation`, `study.important.text`, `sectionAccents.explanation.purple`, `sectionAccents.tip.leftBlocks[0].text.purple` |
| 6 | `b1-bloß` | `study.explanation`, `sectionAccents.tip.leftBlocks[0].text.purple` |
| 7 | `b1-entlassen` | `study.explanation`, `study.tip.leftBlocks[0].text`, `study.important.text`, `sectionAccents.explanation.purple`, `sectionAccents.tip.leftBlocks[0].text.purple` |
| 8 | `b1-fördern` | `study.explanation`, `study.important.text`, `sectionAccents.tip.leftBlocks[0].text.purple`, `sectionAccents.important.purple` |
| 9 | `b1-handeln` | `study.comparison[0].meaning`, `sectionAccents.tip.leftBlocks[0].text.purple` |
| 10 | `b1-hort` | `study.explanation[3]`, `sectionAccents.explanation.purple` |
| 11 | `b1-jagen` | `study.important.text`, `sectionAccents.tip.leftBlocks[0].text.purple`, `sectionAccents.important.purple` |
| 12 | `b1-kader` | `study.explanation[3]`, `study.tip[1]`, `study.examples[1].lv`, `study.examples[3].lv`, removed `sectionAccents.explanation.purple`, `sectionAccents.important[0].purple`, `sectionAccents.examples[3].lv.purple` |
| 13 | `b1-kern` | `study.explanation`, `study.important.text`, `sectionAccents.tip.leftBlocks[0].text.purple`, `sectionAccents.important.purple` |
| 14 | `b1-kommando` | `study.explanation`, `study.important`, `sectionAccents.important.purple`, `sectionAccents.comparison[0].example.purple`, `sectionAccents.comparison[2].example.purple` |
| 15 | `b1-kurs` | `study.explanation`, `study.important`, `study.tip`, `sectionAccents.important.purple`, `sectionAccents.comparison[*].meaning.purple`, `sectionAccents.comparison[*].example.purple`, `sectionAccents.tip.purple` |
| 16 | `b1-kastanie` | `study.tip`, `study.important`, `sectionAccents.comparison[0].meaning.purple`, `sectionAccents.comparison[2].meaning.purple`, `sectionAccents.comparison[*].example.purple`, `sectionAccents.tip.purple` |
| 17 | `b1-rasen` | `study.translation`, `study.explanation`, `study.tip`, `sectionAccents.explanation.purple`, `sectionAccents.comparison[1].meaning.purple`, `sectionAccents.comparison[0].meaning.purple`, `sectionAccents.important.red`, `sectionAccents.examples[2].lv.red`, `sectionAccents.tip.red` |
| 18 | `b1-schale` | `study.important`, `study.tip`, `sectionAccents.comparison[1].meaning.purple`, `sectionAccents.comparison[0].meaning.purple` |
| 19 | `b1-schlag` | `study.explanation`, `study.important`, `study.comparison[0].meaning`, `sectionAccents.examples[2].lv.red`, `sectionAccents.comparison[0].meaning.purple`, `sectionAccents.examples[1].lv.red`, `sectionAccents.comparison[2].meaning.purple`, `sectionAccents.important.red` |
| 20 | `b1-senken` | `study.explanation`, `study.important`, `sectionAccents.examples[2].lv.red`, `sectionAccents.comparison[1].meaning.purple`, `sectionAccents.examples[1].lv.red`, `sectionAccents.comparison[2].meaning.purple` |
| 21 | `b1-sich-sorgen` | `study.explanation`, `study.important`, `study.comparison[2].meaning`, `sectionAccents.comparison[2].meaning.purple` |
| 22 | `b1-stellung` | `study.comparison[0].meaning`, `sectionAccents.examples[1].lv.red`, `sectionAccents.important.red`, `sectionAccents.comparison[0].meaning.purple`, `sectionAccents.comparison[1].meaning.purple`, `sectionAccents.comparison[2].meaning.purple` |
| 23 | `b1-tank` | `study.important.text`, `sectionAccents.examples[2].lv.red`, `sectionAccents.comparison[*].meaning.purple`, `sectionAccents.tip.leftBlocks[0].text.purple` |
| 24 | `b1-teilnehmen` | `study.explanation`, `study.important.text`, `study.tip.leftBlocks[0].text`, `sectionAccents.tip.blue`, `sectionAccents.tip.red`, `sectionAccents.comparison[1].meaning.purple` |
| 25 | `b1-verlegen` | `study.important.text`, `study.examples[0].lv`, `study.examples[1].lv`, `sectionAccents.examples[1].lv.red`, `sectionAccents.examples[2].lv.red`, `sectionAccents.important.purple`, `sectionAccents.comparison[0].meaning.purple`, `sectionAccents.comparison[1].meaning.purple` |

## Owner-approved FINAL EN applied

All learner-facing text changes use the exact owner-approved FINAL strings from HIGH OWNER REVIEW #1. No alternative translations were invented.

## SectionAccents follow-up

After learner-facing text updates, sectionAccents on all 25 cards were checked for:

- English-only targets (except intentional DE example highlights)
- Exact-substring validity
- No Latvian leftovers
- No stale targets after text changes

Additional sectionAccents fixes were applied only where stale or Latvian targets remained on these 25 cards.

## Validation snapshot

| Check | Result |
|-------|--------|
| JavaScript syntax | PASS |
| Total cards | 3367 |
| Structural parity | PASS |
| ID parity | PASS |
| Order parity | PASS |
| DE READ-ONLY (`data/b1.js`) | PASS |
| Mirror parity (`data/en/b1.js` ↔ `www/data/en/b1.js`) | PASS |
| Unexpected production changes | 0 |

## Scripts

- `reports/temp/en-b1-high-repair-01.js` — primary deterministic repair
- `reports/temp/en-b1-high-repair-01-accents.js` — sectionAccents consistency pass

## Status

`EN–DE B1 HIGH REPAIR #1 — COMPLETE — READY FOR NEXT HIGH OWNER REVIEW`
