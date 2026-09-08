# G2/A1 Phase 3 — Targeted `is` Missing-ID Repair v5 (lock preservation)

**Classification:** `TARGETED_IS_FAILURE_REPAIR_V5_LOCK_PRESERVATION`  
**Generated:** 2026-09-08  
**Branch:** `cursor/phase3-g2-a1-full-discovery-6338`  
**Repair v4:** `6cf95a5b5997613c166d77781cda2a92c713fa53`  
**Base:** `origin/main@dd4587da30e07e43aab3ba7faf3ca697018a4480`

## v5 scope (test-only)

Hardens `patchRunsRoot()` lock handling. No Luna/transport/retry functional changes.

| Change | Detail |
|--------|--------|
| Lock deletion forbidden | `saved.activeLockPath` is never unlinked on patch or restore |
| Cleanup scope | `restore()` deletes only `tmpRoot` contents via `fs.rmSync(tmpRoot)` |
| Sentinel lock test | `testPatchRunsRootPreservesOriginalLock` — lock exists before/during/after patch; content identical after restore |
| Owner auth cleanup | Authorization files stored under test `tmpRoot/owner-auth` (removed with restore) |
| reports/temp gate | SHA-256 listing hash unchanged (`1568` files, `f7f07b29…de4e`) |

## v4 scope (test isolation)

Preserves full canonical-ID validation metadata through partial parser and transport layers. No change to opt-in scope (`missingCanonicalIdRetry` remains G2/A1 Phase 3 only).

## Metadata preservation (v3)

| Field | v2 gap | v3 fix |
|-------|--------|--------|
| `duplicateIds` | Lost when transport returned accepted-only items | Passed via `canonicalIdValidation` |
| `unexpectedIds` | Lost in transport round-trip | Preserved end-to-end |
| `itemsWithoutId` | Lost | Preserved |
| `returnedItemCount` | Could reflect accepted count only | Raw `items.length` from API response |
| `blockedReason` | Could be dropped | Preserved through transport + adapter |

`resolveCanonicalIdValidation()` reuses transport metadata instead of re-validating truncated item arrays.

## Parse error token handling

- Invalid JSON / malformed responses attach `usage` and `tokensUsed` to thrown error
- Runner catch path adds tokens **exactly once** (success path unchanged)
- Proven: invalid JSON ×3 → `calls=3`, `retries=2`, `tokens=33`

## E2E `createRealLunaTransport` proofs

| Case | Result | Evidence |
|------|--------|----------|
| All expected + unexpected extra | `BLOCKED_UNEXPECTED_CANONICAL_ID` | `returnedItemCount=4`, diagnostics preserve unexpected ID |
| Duplicate expected ID | PASS after retry | No copy accepted on first response; retry unresolved only; `returnedItemCount=3` on duplicate attempt |

## Invalid JSON tests

| Case | calls | retries | tokens | result |
|------|-------|---------|--------|--------|
| Invalid then valid | 2 | 1 | 22 | PASS |
| Invalid all 3 | 3 | 2 | 33 | BLOCKED |

## Evidence

| Check | Result |
|-------|--------|
| `test:g2-a1-phase3-missing-id-retry` | **111/111 PASS** |
| `test:phase1-luna-id-recovery` | 44/44 PASS |
| `test:phase1-luna-timeout-001` | 53/53 PASS |
| `test-phase1-real-transport-id-recovery-diagnostics` | 42/42 PASS |
| `test:phase1-luna-checkpoint-resume` | PASS |
| `test:phase1-real-luna-transport` | PASS |
| `test:phase1-luna-ckpt-004` | 26/26 PASS |
| `test:phase1-luna-infra-repair` | **41/41 PASS** |
| `reports/temp/**` listing hash | unchanged (`f7f07b29…de4e`) |
| Sentinel lock preservation | before/during/after patch + identical content after restore |
| `NEW_REAL_LUNA_CALLS` | 0 |
| Production diff | 0 |
| DE diff | 0 |
| Phase 3 checkpoint/findings/OWNER | 0 changes |

### `test:phase1-luna-infra-repair`

`patchRunsRoot()` never deletes the original `.active-lock.json`. `restore()` removes only the temp RUNS_ROOT tree. Owner authorization files live under test `tmpRoot`.

## Next step

`OWNER_REVIEW_OF_REPAIR_V5` — real `is` resume remains blocked until OWNER approval.
