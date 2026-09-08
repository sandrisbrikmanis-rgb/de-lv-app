# G2/A1 Phase 3 — Targeted `is` Missing-ID Repair v4 (test isolation)

**Classification:** `TARGETED_IS_FAILURE_REPAIR_V4_TEST_ISOLATION`  
**Generated:** 2026-09-08  
**Branch:** `cursor/phase3-g2-a1-full-discovery-6338`  
**Repair v3:** `6979b58af723442790623464e2f514238818ce5d`  
**Base:** `origin/main@dd4587da30e07e43aab3ba7faf3ca697018a4480`

## v4 scope (test-only)

Isolates `testResumeIdentityGates()` from production `reports/temp/phase1-luna-runs`. No Luna/transport/retry functional changes.

| Change | Detail |
|--------|--------|
| Temp RUNS_ROOT | `patchRunsRoot(tempRunsRoot())` with mandatory `finally` cleanup |
| Legacy parity fixture | Pinned `batch-0-42782e520ea0bf40` + hash `3100da1f…5575` (from r-ckpt-005 matrix) |
| Plan independence | Fixture `batchId`/`requestInputHash` are code constants; plan is computed separately and must match |
| reports/temp gate | SHA-256 listing hash identical before/after full test run (`1568` files, hash `f7f07b29…de4e`) |

## v3 scope (unchanged functional repair)

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
| `test:phase1-luna-infra-repair` | **32/32 PASS** |
| `reports/temp/**` listing hash | unchanged (`f7f07b29…de4e`) |
| `NEW_REAL_LUNA_CALLS` | 0 |
| Production diff | 0 |
| DE diff | 0 |
| Phase 3 checkpoint/findings/OWNER | 0 changes |

### `test:phase1-luna-infra-repair`

`testResumeIdentityGates()` uses mkdtemp temp RUNS_ROOT only. Legacy parity uses pinned fixture constants; plan alignment is verified independently. No reads/writes to `reports/temp/phase1-luna-runs`.

## Next step

`OWNER_REVIEW_OF_REPAIR_V4` — real `is` resume remains blocked until OWNER approval.
