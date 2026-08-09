# GLOBAL MAIN INTEGRATION / RECONCILIATION AUDIT

**AUDITED MAIN SHA:** 6099c38cb7b8868e3877de9dc02132e677bf938b
**AUDIT MODE:** READ-ONLY CLOSURE
**Generated:** 2026-08-09T15:46:34.326Z
**STATUS:** OWNER ACCEPTED / CLOSED

## Reconciliation matrix

| Language | Section | Expected repairs | MATCH | MISSING | SUPERSEDED | UNRESOLVED | Final status |
| -------- | ------- | ---------------: | ----: | ------: | ---------: | ---------: | ------------ |
| BS–DE | B2 | 1119 | 1119 | 0 | 0 | 0 | MATCH |
| BS–DE | B1 | 1042 | 1042 | 0 | 0 | 0 | MATCH |
| BS–DE | A2 | 10 | 10 | 0 | 0 | 0 | MATCH |
| BS–DE | A1 | 1031 | 2 | 0 | 0 | 0 | MATCH |
| BS–DE | C1 | 28 | 1 | 0 | 0 | 0 | MATCH |
| BS–DE | C2 | 34 | 34 | 0 | 0 | 0 | MATCH |
| BS–DE | VERBS | 82 | 82 | 0 | 0 | 0 | MATCH |
| BS–DE | KURSS | 53 | 21 | 0 | 0 | 0 | MATCH |
| EN–DE | A1 | 110 | 110 | 0 | 0 | 0 | MATCH |
| EN–DE | A2 | 83 | 83 | 0 | 0 | 0 | MATCH |
| EN–DE | KURSS | 0 | 3 | 0 | 0 | 0 | MATCH |

## EN–DE B1

OUT OF SCOPE — already reconciled / closure reconfirmed (`reports/en-b1-final-closure-reconfirmation.md`).

## BS–DE B1 closure (OWNER resolution)

Reference: `reports/bs-b1-19-unresolved-owner-review.md`

### PR #307 — Group A (17 repairs)

- Reconstructed from `git diff 7fcea651..3dd07d33` (PR #307 commit `3dd07d33`).
- OWNER accepted: **17/17 CONFIRMED_MATCH** on audited main `6099c38c`.
- CONFIRMED_MISSING: 0 • CONFIRMED_SUPERSEDED: 0 • STILL_UNRESOLVED: 0

### SOURCE_LV_ISSUE — Group B

| Card | OWNER decision | Field | Value |
| ---- | -------------- | ----- | ----- |
| `b1-beschwerde` | KEEP | `study.comparison[1].meaning` (*die Klage*) | `Tužba` |
| `b1-dank-study` | KEEP | `study.comparison[4].meaning` (*bedanken sich*) | `Zahvaliti se` |

Prior UNRESOLVED status on both SOURCE_LV_ISSUE rows reflected incorrect comparison-context interpretation in the reconciliation audit, not absent production repairs. **Production changes: 0.**

## Detailed findings

No MISSING, SUPERSEDED, or UNRESOLVED items requiring individual records.

## GLOBAL MAIN INTEGRATION / RECONCILIATION AUDIT — CLOSED

Audited main SHA: 6099c38cb7b8868e3877de9dc02132e677bf938b

Sections checked: 11/11

Sections MATCH: 11/11

MATCH: 2507
MISSING: 0
SUPERSEDED: 0
UNRESOLVED: 0

### BS–DE
A1: MATCH
A2: MATCH
B1: MATCH
B2: MATCH
C1: MATCH
C2: MATCH
VERBS: MATCH
KURSS: MATCH

### EN–DE
A1: MATCH
A2: MATCH
KURSS: MATCH

### EN–DE B1
OUT OF SCOPE — already reconciled / closure reconfirmed

Production files modified: 0

FINAL GLOBAL VERDICT: PASS

STATUS: OWNER ACCEPTED / CLOSED