# CS–DE A1 HIGH Final Micro-Repair #2

## Repair

- requested fields: **2**
- processed: **2/2**
- APPLIED: **2**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **0**

## Per-item results

| # | cardId | field | status | before | after |
|---|---|---|---|---|---|
| 1 | a1-können | study.explanation[0] | APPLIED | "Hlavní myšlenka: können znamená umět nebo vědět, jak něco udělat." | "Hlavní myšlenka: können znamená umět nebo moci něco udělat." |
| 2 | a1-laufen | csMain | APPLIED | "Běžet • Provozovat" | "Běžet • Fungovat" |

## Rationale

1. **a1-können** `study.explanation[0]` — corrected PIRMS prefix alignment for previously approved gala repair (#5).
2. **a1-laufen** `csMain` — synced with already-approved `study.translation` (`Běžet • Fungovat`).

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

## Scope protection

- PRE_EXISTING findings modified: **0**
- FALSE_POSITIVE modified: **0**
- NEEDS_OWNER_REVIEW modified without authorization: **0**
- structural-gap cards modified: **0**
- DE fields modified: **0**
- a1-in / Berlīnē: **unchanged**

_Applied: 2026-08-12_