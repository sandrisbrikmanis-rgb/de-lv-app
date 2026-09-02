# Unmerged closure candidate classification — READ-ONLY

**Generated:** 2026-09-01T06:09:56.598Z
**Mode:** READ_ONLY
**Raw candidates:** 91
**ACTIVE (D1 blocker):** 0
**Unresolved NEEDS_OWNER_REVIEW (D1 blocker):** 0
**OWNER decisions applied:** 53

## Summary (after OWNER decisions)

| Category | Count | D1 blocks? |
|----------|------:|------------|
| INTEGRATED_HISTORICAL | 38 | no |
| CLOSED_SUPERSEDED | 53 | no |
| ACTIVE_UNMERGED_CLOSURE | 0 | **yes** |
| NEEDS_OWNER_REVIEW (unresolved) | 0 | **yes** |

## Rules (deterministic auto-classification)

1. PR merged → INTEGRATED_HISTORICAL
2. Branch tip ancestor of origin/main → INTEGRATED_HISTORICAL
3. No production blob diff vs origin/main → INTEGRATED_HISTORICAL
4. PR closed without merge → CLOSED_SUPERSEDED
5. Open non-draft PR with production blob diff → ACTIVE_UNMERGED_CLOSURE
6. Otherwise (draft PR, no PR, ambiguous) → NEEDS_OWNER_REVIEW

## F0-5 D1 gate (fail-closed)

PASS only when `activeUnmergedClosureCount === 0` **and** `unresolvedOwnerReviewCount === 0`.
Each unresolved candidate requires an OWNER decision in
`reports/unmerged-closure-owner-decisions.json` with one of:
`INTEGRATED_HISTORICAL`, `CLOSED_SUPERSEDED`, `ACTIVE_UNMERGED_CLOSURE`, `DOCUMENTED_EXCEPTION`.

**OWNER decisions file:** `unmerged-closure-owner-decisions.json`

## Auto-classification (before OWNER decisions)

| Category | Count |
|----------|------:|
| INTEGRATED_HISTORICAL | 38 |
| CLOSED_SUPERSEDED | 53 |
| ACTIVE_UNMERGED_CLOSURE | 0 |
| NEEDS_OWNER_REVIEW | 0 |

## Notes

- READ-ONLY — no branch delete, no merge.

