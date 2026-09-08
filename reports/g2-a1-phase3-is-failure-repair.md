# G2/A1 Phase 3 — Targeted `is` Missing-ID Repair v2

**Classification:** `TARGETED_IS_FAILURE_REPAIR_V2_READY_FOR_OWNER_REVIEW`  
**Generated:** 2026-09-08  
**Branch:** `cursor/phase3-g2-a1-full-discovery-6338`  
**Repair v1:** `124e7b70383695c5a6b72ab6d394400d576faecf`  
**Base:** `origin/main@dd4587da30e07e43aab3ba7faf3ca697018a4480`

## Owner verdict addressed

Prior verdict: `OWNER_REVIEW_NEEDS_REPAIR` — three safety blockers fixed in v2.

## Blocker fixes (proven)

| ID | v1 defect | v2 fix | Proof |
|----|-----------|--------|-------|
| R-IS-001 | First duplicate item accepted | Frequency-based acceptance (`count===1` only); duplicates fully rejected and retried; persistent → `BLOCKED_DUPLICATE_CANONICAL_ID` | test07, dup-persist |
| R-IS-002 | Transport catch emptied pending without retry | `subBatch` enqueued to `nextPending` on transient error; validated items preserved | transient: calls=2 retries=1 PASS; persistent: calls=3 BLOCKED |
| R-IS-003 | All expected + extra unexpected could PASS | Immediate `BLOCKED_UNEXPECTED_CANONICAL_ID` | test08b |

## v1 claims corrected

v1 incorrectly stated duplicate/unexpected IDs were fully rejected. v2 implements and tests:

- duplicate → reject all instances, retry expected ID, fail-closed after limit
- unexpected extra when all expected present → hard block (no silent PASS)

## Statistics

- Each additional transport call after the first increments `stats.retries`
- Tokens from failed responses preserved (`77 * MAX_RETRIES` proven)
- `returnedItemCount` = raw response item count (not unique accepted count)
- `lunaStats.failures` = current run only; `failureHistory` preserved separately

## Evidence

| Check | Result |
|-------|--------|
| `test:g2-a1-phase3-missing-id-retry` | **91/91 PASS** |
| `test:phase1-luna-id-recovery` | 44/44 PASS |
| `test:phase1-luna-timeout-001` | 53/53 PASS |
| `test-phase1-real-transport-id-recovery-diagnostics` | 42/42 PASS |
| `test:phase1-luna-checkpoint-resume` | PASS |
| `test:phase1-real-luna-transport` | PASS |
| `test:phase1-luna-ckpt-004` | 26/26 PASS |
| `test:phase1-luna-infra-repair` | ENOENT — missing runtime fixture (see below) |
| `NEW_REAL_LUNA_CALLS` | 0 |
| Production diff | 0 |
| DE diff | 0 |

### `test:phase1-luna-infra-repair` ENOENT

Missing path (not changed in this PR):

`reports/temp/phase1-luna-runs/phase1-2026-08-30T08-56-50-163Z-a8e1dec1/checkpoints/g2_a1_et/batch-0-42782e520ea0bf40.json`

This is a hardcoded legacy RUN_ID checkpoint from `scripts/test-phase1-luna-infra-repair.js:294` that must exist on disk from a prior phase1 Luna run. The cloud snapshot has an empty `reports/temp/phase1-luna-runs/` directory. `scripts/test-phase1-luna-infra-repair.js` has **no diff** vs repair v1 commit.

## Next step

`OWNER_REVIEW_OF_REPAIR_V2` — real `is` resume remains blocked until OWNER approval.
