# EN–DE B1 HIGH REPAIR #7 — Targeted Regression

**Date:** 2026-08-09  
**Coverage:** 25/25 owner-reviewed cards (24 repaired + 1 NELABOT)  
**Branch:** `cursor/en-b1-high-repair-07-6850`

## Verdict

**EN–DE B1 HIGH REPAIR #7 — TARGETED REGRESSION PASS**

**EN–DE B1 HIGH REPAIR #7 — COMPLETE — READY FOR HIGH OWNER REVIEW #8**

## Summary counts

```text
Cards owner-reviewed: 25
LABOT: 24
NELABOT: 1

Cards repaired: 24/24
Top-level lv fields repaired: 24/24
Cards regression-audited: 25/25
NELABOT owner decisions preserved: 1/1

OWNER-RESOLVED findings: 0

CRITICAL: 0
HIGH: 0
MEDIUM: 0
LOW: 0

sectionAccents TECHNICAL: 0
sectionAccents PEDAGOGICAL: 0

FOLLOW-UP FINDINGS: 0
OUT-OF-SCOPE FINDINGS: 0
PRECONDITION MISMATCH: 0
Unexpected production changes: 0
IDs changed: 0
```

## NELABOT — owner-decision aware

```text
b1-Krüppel-1651
DE: Krüppel
EN: A cripple
OWNER VERDICT: NELABOT
Reason: OWNER accepted register-preserving translation
```

Not counted as open HIGH. Luna recommendation `A disabled person` not flagged.

## Owner-approved `/` strings preserved

Examples: `Hunting prey / game`, `Cable duct / cable conduit`, `Quay / wharf`, `Comrade / companion`, `Canteen / cafeteria`, `Card index / file index`, `End piece of bread / bread crust`, `To bowl / play skittles`, `Day nursery / childcare centre`, `Draft notebook / rough copy`, `To tie / knot`, `To caw / croak`, `Timetable / railway timetable`, `Crooked / bent`.

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
| IDs changed | 0 |

## Workflow

```text
Workflow unresolved HIGH before HIGH #7: 298
Workflow unresolved HIGH after HIGH #7: 273
```

## Next step

**EN–DE B1 HIGH OWNER REVIEW #8** (workflow reference: 273 unresolved HIGH)

Do **not** mark HIGH cycle CLOSED or B1 OWNER ACCEPTED.
