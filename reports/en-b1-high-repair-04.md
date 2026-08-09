# EN–DE B1 HIGH REPAIR #4

**Date:** 2026-08-09  
**Scope:** 25 owner-reviewed HIGH normal cards (OWNER verdict: LABOT 25/25)  
**Branch:** `cursor/en-b1-high-repair-04-6850`

## BIEGEN IDENTITY CHECK

```text
BIEGEN IDENTITY GATE: PASS

Raw Card ID: null (no study.id in production)
Suspicious audit ID: b1-bie­gen-440 (Unicode U+00AD soft hyphen in audit export only)
Unicode code points in suspicious ID: 98, 49, 45, 98, 105, 101, 173, 103, 101, 110, 45, 52, 52, 48
Normalized ID: b1-biegen-440
DE lemma: biegen
Card type: normal (production; audit export incorrectly showed standardStudy)
Current top-level lv (before repair): To put
Matching production cards: 1 (de=biegen, lv=To put, array index 440)
Mirror match: PASS
```

Repair applied: `lv` `To put` → `To bend` on production `biegen` card only. No ID, card type, or DE metadata changes.

**Note:** `beugen` is a separate card (also repaired to `To bend` independently).

## Production files changed

| File | Change |
|------|--------|
| `data/en/b1.js` | 25 × top-level `lv` |
| `www/data/en/b1.js` | mirror |

**READ-ONLY preserved:** `data/b1.js` — unchanged.

## Cards repaired: 25/25

| # | Card ID | DE | OLD | FINAL EN |
|---|---------|-----|-----|----------|
| 1 | `b1-Bestandteil-394` | Bestandteil | Ingredient | Component / part |
| 2 | `b1-betreiben-409` | betreiben | To lead | To run / operate |
| 3 | `b1-Beule-415` | Beule | Pun | Bump / dent |
| 4 | `b1-beugen-414` | beugen | To put | To bend |
| 5 | `b1-Bevölkerung-418` | Bevölkerung | Residents | Population |
| 6 | `b1-bewachen-420` | bewachen | To protect | To guard / watch over |
| 7 | `b1-bewirten-426` | bewirten | To tolerate | To host / serve guests |
| 8 | `b1-biegen-440` | biegen | To put | To bend |
| 9 | `b1-sich blamieren-453` | sich blamieren | Get confused | To embarrass oneself |
| 10 | `b1-Bombe-478` | Bombe | Ball | Bomb |
| 11 | `b1-Brathuhn-490` | Brathuhn | Fried chicken | Roast chicken |
| 12 | `b1-Brieftasche-505` | Brieftasche | Pocket briefcase | Wallet |
| 13 | `b1-desto-579` | desto | Because | The more ... the more ... / all the more |
| 14 | `b1-Dose-601` | Dose | Box | Can / tin |
| 15 | `b1-dritt-610` | dritt | Thirdly | Third |
| 16 | `b1-Durcheinander-624` | Durcheinander | Juku jukam • A mess | A muddle / a mess |
| 17 | `b1-ehemals-646` | ehemals | Earlier | Formerly |
| 18 | `b1-sich eignen-657` | sich eignen | To bet | To be suitable |
| 19 | `b1-einigermaßen-686` | einigermaßen | Half way | To some extent / more or less |
| 20 | `b1-einnehmen-695` | einnehmen | To conceive | To take / occupy |
| 21 | `b1-einschließen-703` | einschließen | To count | To include / enclose |
| 22 | `b1-erfordern-779` | erfordern | Ask for | To require |
| 23 | `b1-erfüllen-784` | erfüllen | To execute | To fulfil |
| 24 | `b1-sich erhalten-790` | sich erhalten | To preserve | To remain preserved / survive |
| 25 | `b1-Erklärung-795` | Erklärung | Notification | Explanation / statement |

## Validation

| Check | Result |
|-------|--------|
| JavaScript syntax | PASS |
| Total cards | 3367 |
| Structural / ID / order parity | PASS |
| IDs changed | 0 |
| DE READ-ONLY | PASS |
| Mirror parity | PASS |
| Top-level `lv` changed | 25 |
| Other fields changed | 0 |

## Scripts

- `reports/temp/en-b1-high-repair-04.js`
- `reports/temp/en-b1-high-regression-04.js`

## Status

`EN–DE B1 HIGH REPAIR #4 — COMPLETE — READY FOR HIGH OWNER REVIEW #5`

HIGH cycle remains **OPEN** (~348 unresolved HIGH cards).
