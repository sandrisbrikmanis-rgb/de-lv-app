# EN–DE B1 HIGH REPAIR #6 — Targeted Regression

**Date:** 2026-08-09  
**Coverage:** 25/25 owner-reviewed cards (25 repaired)  
**Branch:** `cursor/en-b1-high-repair-06-6850`

## Verdict

**EN–DE B1 HIGH REPAIR #6 — TARGETED REGRESSION PASS**

**EN–DE B1 HIGH REPAIR #6 — COMPLETE — READY FOR HIGH OWNER REVIEW #7**

## Summary counts

```text
Cards owner-reviewed: 25
LABOT: 25
NELABOT: 0

Cards repaired: 25/25
Top-level lv fields repaired: 25/25
Cards regression-audited: 25/25

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

## Owner-decision aware

Owner-approved `/` multi-meaning strings not flagged:

- Halstuch → `Scarf / neckerchief`
- Handwerk → `Craft / trade`
- heiter → `Cheerful / merry`
- Herkunft → `Origin / background`
- höchstens → `At most / no more than`
- Holzscheit → `Log / piece of firewood`
- Holzspan → `Wood chip / wood shaving`
- Inbegriff → `Epitome / embodiment`
- Inland → `Domestic territory / home country`
- Irrtum → `Mistake / error`

Special gates preserved:

- Hammel → `Wether` (not Ram)
- hobeln → `To plane` (not plan)
- Inland false-friend repair applied (not NO-OP)

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

## Workflow reference

```text
Workflow unresolved HIGH before HIGH #6: 323
Workflow unresolved HIGH after HIGH #6: 298
```

## Artifacts

- `reports/temp/en-b1-high-regression-06.json`
- `reports/temp/en-b1-high-repair-06-log.json`
- `reports/temp/en-b1-high-regression-06.js`

## Next step

**EN–DE B1 HIGH OWNER REVIEW #7** (workflow unresolved HIGH remaining: 298)

Do **not** mark HIGH cycle CLOSED or B1 OWNER ACCEPTED.
