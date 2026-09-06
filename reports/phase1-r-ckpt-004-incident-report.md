# R-CKPT-004 — Canonical-to-Legacy ID Mapping Fix

**Date:** 2026-09-02  
**PR:** #705  
**Prior HEAD:** `e04622ef93773c1483611da0bb81380ab7bf001d`  
**Contained PID:** `1491461`

## Root cause

```text
R_CKPT_004_ROOT_CAUSE = CANONICAL_RESPONSE_ID_NOT_MAPPED_TO_LEGACY_CHECKPOINT_ID
INVALID_PASS_WRITE_ALLOWED = true
```

`buildLunaRequestPayload()` replaces legacy IDs with canonical Luna IDs. OpenAI strict
parser returns canonical `id` + `status` only (no `rawCardId`). `buildBatchCheckpoint()`
called `resolveLegacyObjectId(item)` which could not map canonical IDs → `unknown`.
`saveBatchCheckpoint()` validated only against the checkpoint's own fields, allowing
invalid PASS writes.

## Fix

- `buildCanonicalToLegacyIdMap()` + `mapResponseItemsToLegacyIds()` before checkpoint build
- `returnedObjectIds` derived from request map, not response auxiliary fields
- `saveBatchCheckpoint(checkpoint, externalContext)` blocks invalid writes
- `UNTRUSTED_ID_MAPPING_RUN` SHA registry for 15 PID 1491461 checkpoints

## PID 1491461 incident

| Metric | Value |
|---|---|
| PRE_RESUME_REAL_CALLS | 9160 |
| POST_STOP_REAL_CALLS | 9162 |
| NEW_REAL_LUNA_CALLS | 2 |
| NEW_VALID_PASS_CHECKPOINTS | 0 |
| NEW_RESUMABLE_INVALID_CHECKPOINTS | 15 |
| UNTRUSTED_ID_MAPPING_CHECKPOINTS | 15 |

## Test matrix

| Command | Result |
|---|---|
| `test:phase1-luna-ckpt-004` | 26/26 PASS |
| `test:phase1-luna-ckpt-003` | 19/19 PASS |
| `test:phase1-luna-resume-auth-005` | 19/19 PASS |
| `test:phase1-luna-checkpoint-resume` | 94 PASS |
| `test:phase1-luna-infra-repair` | 27/27 PASS |
| R-AUTH-001/002/003/004 | PASS |

```text
NEW_REAL_LUNA_CALLS_DURING_REPAIR = 0
PRODUCTION_DIFF = 0
DE_DIFF = 0
REAL_RESUME = STOPPED_PENDING_OWNER_AUTHORIZATION
```
