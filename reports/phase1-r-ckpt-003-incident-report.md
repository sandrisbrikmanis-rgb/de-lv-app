# R-CKPT-003 — Untrusted Checkpoint Replacement Fix

**Date:** 2026-09-02  
**PR:** #705  
**Prior HEAD:** `1e59c821b3ed806b1ade9a8dd123019698189671`

## Root cause

```text
R_CKPT_003_ROOT_CAUSE = BATCH_ID_SCOPE_ID_PERMANENT_POISONING
```

At `1e59c821`, `isUntrustedLocalPatchCheckpoint(checkpoint, scopeId)` matched registry
entries by `batchId` + `scopeId` without verifying on-disk SHA-256. Authorized reruns that
rewrote the same batch file with corrected content were permanently classified
`UNTRUSTED_LOCAL_PATCH_RUN` because `batchId` never changes.

## Fix

- `UNTRUSTED_LOCAL_PATCH_RUN` only when checkpoint file SHA-256 matches `entriesBySha` registry
- Registry metadata (`scopeId`, `batchId`) must match for the matched SHA entry
- Removed object-only `batchId`/`scopeId` fallback path; `filePath` is required
- `shouldSkipBatch()` passes `filePath` to classifier via `checkpointFilePath()`

## Containment preserved

| Set | Count | Classification |
|---|---|---|
| PID 327971 original bytes | 30 | `UNTRUSTED_LOCAL_PATCH_RUN` (SHA registry) |
| PID 299833 checkpoints | 42 | `RESUMABLE_INVALID` (validation path, unchanged) |

Original untrusted bytes never become `VALID_PASS`. Corrected reruns with new SHA
may reach `VALID_PASS` and be skipped on subsequent resume.

## Test matrix (this repair)

| Command | Result |
|---|---|
| `npm run test:phase1-luna-ckpt-003` | 19/19 PASS |
| `npm run test:phase1-luna-resume-auth-005` | 18/18 PASS |
| `npm run test:phase1-luna-checkpoint-resume` | 94 PASS (R-CKPT-002) |
| `npm run test:phase1-luna-infra-repair` | PASS |
| `npm run test:phase1-luna-resume-auth` | PASS (R-AUTH-001) |
| `npm run test:phase1-luna-resume-auth-002` | 11/11 PASS |
| `npm run test:phase1-luna-resume-auth-003` | 27/27 PASS |
| `npm run test:phase1-luna-resume-auth-004` | 31/31 PASS |

```text
NEW_REAL_LUNA_CALLS = 0
PRODUCTION_DIFF = 0
DE_DIFF = 0
REAL_RESUME = STOPPED_PENDING_OWNER_AUTHORIZATION
```
