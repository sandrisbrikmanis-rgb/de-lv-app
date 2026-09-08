# G2/A1 Phase 3 — Targeted `is` Missing-ID Infrastructure Repair

**Classification:** `TARGETED_IS_FAILURE_REPAIR_READY_FOR_OWNER_REVIEW`  
**Generated:** 2026-09-08  
**Branch:** `cursor/phase3-g2-a1-full-discovery-6338`  
**Base:** `origin/main@dd4587da30e07e43aab3ba7faf3ca697018a4480`

## Proven root cause

| # | Finding |
|---|---------|
| 1 | `parsePhase1LunaResponseStrict()` throws `Luna response missing id` when any expected canonical ID is absent; C0 recovery does not run on count mismatch |
| 2 | `luna-transport.js` re-threw wrapped `Error` objects, dropping `code` and `idRecoveryDiagnostics` |
| 3 | `runBatchedAdapter()` retried the full batch instead of only unresolved canonical IDs |
| 4 | Partial successes were not preserved across retries |
| 5 | `run-g2-a1-phase3-full-discovery.js` skipped Luna stat accumulation on `result.ok === false` |
| 6 | Two distinct `is` failures (`idx:153/Ei`, `idx:107/braun`) confirm systemic behavior, not a single bad object |

## Repair summary

- **Opt-in:** `missingCanonicalIdRetry: true` (G2/A1 Phase 3 only)
- **Identity safety:** exact canonical ID match only; no positional or fuzzy mapping
- **Retry:** missing-only subset; deterministic sub-batch split; limit = 3 (`MAX_RETRIES`)
- **Fail-closed:** `BLOCKED_MISSING_CANONICAL_ID` after limit; no invented PASS/FINDING
- **Diagnostics:** `/tmp/cursor/artifacts/g2-a1-phase3-id-recovery/`
- **Resume command:** `npm run phase3:g2-a1:resume` → `--with-luna` (no `--fresh-luna`)

## Evidence

| Check | Result |
|-------|--------|
| Mock matrix (`test-g2-a1-phase3-missing-id-retry`) | 57/57 PASS |
| `test:phase1-luna-id-recovery` | 44/44 PASS |
| `test:phase1-luna-timeout-001` | 53/53 PASS |
| `test-phase1-real-transport-id-recovery-diagnostics` | 42/42 PASS |
| `test:phase1-luna-checkpoint-resume` | PASS |
| `test:phase1-real-luna-transport` | PASS |
| `test:phase1-luna-ckpt-004` | 26/26 PASS |
| `NEW_REAL_LUNA_CALLS` | 0 |
| Production diff | 0 |
| DE diff | 0 |

## Next step

`OWNER_REVIEW_OF_TARGETED_IS_FAILURE_REPAIR` — real `is` resume authorized only after OWNER approval in a separate task.
