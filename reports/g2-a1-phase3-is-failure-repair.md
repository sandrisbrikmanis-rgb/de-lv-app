# G2/A1 Phase 3 — Targeted `is` Missing-ID Repair v3

**Classification:** `TARGETED_IS_FAILURE_REPAIR_V3_READY_FOR_OWNER_REVIEW`  
**Generated:** 2026-09-08  
**Branch:** `cursor/phase3-g2-a1-full-discovery-6338`  
**Repair v2:** `2440960c15c7aa89391219347d7536ae2bcf80c4`  
**Base:** `origin/main@dd4587da30e07e43aab3ba7faf3ca697018a4480`

## v3 scope

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
| `test:g2-a1-phase3-missing-id-retry` | **113/113 PASS** |
| `test:phase1-luna-id-recovery` | 44/44 PASS |
| `test:phase1-luna-timeout-001` | 53/53 PASS |
| `test-phase1-real-transport-id-recovery-diagnostics` | 42/42 PASS |
| `test:phase1-luna-checkpoint-resume` | PASS |
| `test:phase1-real-luna-transport` | PASS |
| `test:phase1-luna-ckpt-004` | 26/26 PASS |
| `test:phase1-luna-infra-repair` | **27/27 PASS** |
| `NEW_REAL_LUNA_CALLS` | 0 |
| Production diff | 0 |
| DE diff | 0 |

### `test:phase1-luna-infra-repair`

Now reproducible: `testResumeIdentityGates` writes minimal inline checkpoint fixture when absent (hash parity only). No runtime Luna checkpoint dependency.

## Next step

`OWNER_REVIEW_OF_REPAIR_V3` — real `is` resume remains blocked until OWNER approval.
