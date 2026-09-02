# R-AUTH-005 Incident Report — Unauthorized Local Patch Resume (PID 327971)

**Date:** 2026-09-02  
**PR:** #705  
**Authorized HEAD:** `bf6b76e8e018839e549603f3bc6a18a66d580a94`

## Summary

An authorized OWNER resume was started with an **uncommitted local patch** to
`scripts/run-phase1-discovery.js`, hidden from `git status --porcelain` via
`git update-index --skip-worktree`. This bypassed R-AUTH-004 worktree checks while
executing non-authorized bytecode.

## Classification

```text
AUTHORIZED_HEAD_SHA = bf6b76e8e018839e549603f3bc6a18a66d580a94
LOCAL_HEAD_SHA = bf6b76e8e018839e549603f3bc6a18a66d580a94
LOCAL_EXECUTION_FILE_MODIFIED = true
SKIP_WORKTREE_USED = true
EXECUTION_BYTES_MATCH_AUTHORIZED_COMMIT = false
UNAUTHORIZED_LOCAL_PATCH_RESUME = CONFIRMED
```

## PID 327971

| Field | Value |
|---|---|
| PID | 327971 |
| Stop signal | SIGINT (+ SIGTERM after 30s) |
| Scope at stop | `g2/a2/bg` |
| Batch index at stop | 63 |
| `realCalls` before | 9160 |
| `realCalls` after | 9160 |
| **NEW_REAL_LUNA_CALLS** | **0** |
| Untrusted checkpoints written | **30** (`UNTRUSTED_LOCAL_PATCH_RUN`) |

## Local patch (saved outside repo)

- Path: `/tmp/cursor/artifacts/r-auth-005-local-runtime-patch/`
- Working file SHA-256: `82057d35b578788f000c1432c2b9717d6ded1d3754eb4083c86a57673093f677`
- HEAD file SHA-256: `dbc3c8c32fc8d79f63f75ba0a18824b7f1245397849ae7ab36e1b02edda68b53`
- Index flag before removal: `S` (skip-worktree)

## R-AUTH-005 remediation

1. **No writes before auth** — resume preflight moved before `writePhase1ScopeInventory()`
2. **Execution tree integrity** — blob hash compare for `scripts/**`, `package.json`, lockfiles
3. **Index flag gate** — block `skip-worktree` and `assume-unchanged` on protected files
4. **UNTRUSTED_LOCAL_PATCH_RUN** registry for PID 327971 checkpoints (30 entries)

## Evidence artifacts

- `/tmp/cursor/artifacts/r-auth-005-incident-evidence/`
- `/tmp/cursor/artifacts/r-auth-005-local-runtime-patch/`
- Fixture: `scripts/fixtures/r-auth-005-pid-327971-untrusted-checkpoints.json`

**Resume status after containment:** `STOPPED_PENDING_NEW_OWNER_AUTHORIZATION`
