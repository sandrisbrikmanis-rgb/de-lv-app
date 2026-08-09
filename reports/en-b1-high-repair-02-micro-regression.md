# EN–DE B1 HIGH REPAIR #2 — sectionAccents Cleanup + Micro-Regression

**Date:** 2026-08-09  
**Coverage:** 2/2 cards (`b1-beruf`, `b1-sich-befinden-study`)  
**Branch:** `cursor/en-b1-high-repair-02-6850`  
**Source findings:** `reports/en-b1-high-regression-02.md`, `reports/temp/en-b1-high-regression-02.json`

## Verdict

**EN–DE B1 HIGH REPAIR #2 MICRO-REGRESSION — PASS**

**EN–DE B1 HIGH REPAIR #2 — FULLY CLEAN — READY FOR HIGH OWNER REVIEW #3**

## Summary

```text
Cards repaired: 2/2
Original follow-up findings: 7
Findings repaired: 7/7
Micro-regression coverage: 2/2

CRITICAL: 0
HIGH: 0
MEDIUM: 0
LOW: 0

sectionAccents TECHNICAL: 0
sectionAccents PEDAGOGICAL: 0

Unexpected production changes: 0 (sectionAccents only)
Learner-facing EN changes: 0
DE changes: 0
```

## Root cause

Both cards use `study.important` as a flat object (`{ text, example }`), but `sectionAccents.important` still mirrored the old LV array shape (`important[0].text.*` / `important[0].example.*`). Accent targets pointed at nested paths that no longer matched visible learner-facing strings, producing 7 MEDIUM / sectionAccents TECHNICAL findings in regression #2.

## Original 7 findings (regression #2)

| # | Card | Old path | Stale target | Repair |
|---|------|----------|--------------|--------|
| 1 | `b1-sich-befinden-study` | `sectionAccents.important[0].example.blue[0]` | `befindet sich` | RESTRUCTURE → `sectionAccents.important.example.blue` |
| 2 | `b1-sich-befinden-study` | `sectionAccents.important[0].example.red[0]` | `fühle mich` | RESTRUCTURE → `sectionAccents.important.example.red` |
| 3 | `b1-beruf` | `sectionAccents.important[0].text.blue[0]` | `der Beruf` | RESTRUCTURE → `sectionAccents.important.blue` (`Beruf`) |
| 4 | `b1-beruf` | `sectionAccents.important[0].text.purple[1]` | `Der` | REMOVE (stale); replaced by `field of work` on text |
| 5 | `b1-beruf` | `sectionAccents.important[0].text.red[0]` | `Der` | REMOVE (no red on text) |
| 6 | `b1-beruf` | `sectionAccents.important[0].example.green[0]` | `Arbeit` | RESTRUCTURE → `sectionAccents.important.example.green` |
| 7 | `b1-beruf` | `sectionAccents.important[0].example.purple[1]` | `der` | REMOVE (stale); replaced by `work` on example |

## Applied `sectionAccents.important` (new structure)

### `b1-beruf`

```json
{
  "blue": "Beruf",
  "purple": ["profession", "field of work"],
  "example": {
    "blue": "Beruf",
    "green": "Arbeit",
    "purple": ["profession", "work"]
  }
}
```

Visible text unchanged:
- `What is your profession?`
- `I am a teacher.`
- `Beruf usually refers to a person's profession or field of work.`

### `b1-sich-befinden-study`

```json
{
  "blue": "sich befinden",
  "purple": ["Location"],
  "red": "feelings",
  "example": {
    "blue": "befindet sich",
    "red": "fühle mich",
    "purple": ["feel", "here"]
  }
}
```

Visible text unchanged:
- `To say “to feel,” use sich fühlen, not sich befinden.`
- `To lie / to be located`
- `I feel` (examples accent)

## Production files changed

| File | Change |
|------|--------|
| `data/en/b1.js` | `sectionAccents.important` on 2 cards |
| `www/data/en/b1.js` | mirror of `data/en/b1.js` |

**Read-only preserved:** `data/b1.js` (DE source) — unchanged.

## Validation

| Check | Result |
|-------|--------|
| JavaScript syntax | PASS |
| Total cards | 3367 |
| Structural parity | PASS |
| ID parity | PASS |
| Order parity | PASS |
| DE READ-ONLY | PASS |
| Mirror parity | PASS |
| Learner-facing EN changes | 0 |
| DE changes | 0 |

## Micro-regression scope

Full audit of content + all `sectionAccents` on both cards: CRITICAL/HIGH/MEDIUM/LOW, Latvian leftovers, malformed EN, DE lemma corruption, top-level/study contradiction, learner-facing EN consistency, sectionAccents TECHNICAL/PEDAGOGICAL.

## Artifacts

- `reports/temp/en-b1-high-repair-02-sectionaccents-log.json`
- `reports/temp/en-b1-high-repair-02-micro-regression.json`
- `reports/temp/en-b1-high-repair-02-sectionaccents.js`
- `reports/temp/en-b1-high-repair-02-micro-regression.js`

## HIGH cycle status

HIGH REPAIR #2 is fully clean for the repaired owner block. HIGH cycle remains **OPEN** (~423 unresolved HIGH cards). Do **not** mark `EN–DE B1 — OWNER ACCEPTED` or `EN–DE B1 — CLOSED`.

**Next step:** `EN–DE B1 HIGH OWNER REVIEW #3`
