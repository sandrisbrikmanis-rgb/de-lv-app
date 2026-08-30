# Phase 1 Luna Checkpoint / Resume — Infrastructure Repair Report

**Branch:** `cursor/phase1-luna-checkpoint-resume`  
**PR:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/702  
**Date:** 2026-08-30

---

## 1. SHA identity

| Field | Value |
|-------|-------|
| `REPAIR_BASELINE_SHA` / `ORIGIN_MAIN_SHA` | `fc822e8db76af40740073d90cc51873c80037354` |
| `INITIAL_IMPLEMENTATION_SHA` | `90a2c2854d5a938aa0682de1671f7691b23b2f06` |
| `OWNER_REVIEW_SHA` | `cef6e8dd2452b220e69f3ecb57094190c9d1af16` |
| `R-CKPT-002_REPAIR_START_SHA` | `cef6e8dd2452b220e69f3ecb57094190c9d1af16` |
| `R-CKPT-002_REPAIR_END_SHA` | _(set at commit — see PR head)_ |

---

## 2. R-CKPT-002 root cause and repair

### Root cause

`validateCheckpointIntegrity()` in `scripts/lib/phase1-luna-checkpoint/resume.js` only verified:

- JSON parse success
- `status === "PASS"`

It did **not** invoke `validateBatchCheckpoint()` with full hash/ID/schema checks. Tampered checkpoint files with `status: "PASS"` but wrong `expectedIdsHash`, missing returned IDs, or schema mismatch passed `prepareResumeContext()` (`ok: true`, `realCalls: 0`) — violating fail-closed §9.

### Repair (R-CKPT-002)

`validateCheckpointIntegrity()` now:

1. Reads each checkpoint file from disk
2. Runs full `validateBatchCheckpoint()` with `expectedRunId`, `scopeId`, `batchIndex`, `expectedObjectIds`, `requestInputHash`
3. Detects duplicate `batchId` per scope (`DUPLICATE_BATCH_CHECKPOINT`)
4. Returns `CHECKPOINT_CORRUPT` with issue list — `prepareResumeContext` blocks with `realCalls: 0`

### Changed files (R-CKPT-002 repair pass)

| File | Change |
|------|--------|
| `scripts/lib/phase1-luna-checkpoint/resume.js` | Full checkpoint validation in `validateCheckpointIntegrity` |
| `scripts/test-phase1-luna-checkpoint-resume.js` | Added `testTamperedCheckpointBlocksResumePrep` |
| `reports/phase1-luna-checkpoint-resume-repair.md` | This update |

### BEFORE → AFTER (R-CKPT-002)

| Scenario | BEFORE | AFTER |
|----------|--------|-------|
| Tampered PASS + wrong hash | `prepareResumeContext` → `ok: true` | `CHECKPOINT_CORRUPT`, `realCalls: 0` |
| Missing returned ID in checkpoint | `ok: true` | `CHECKPOINT_CORRUPT`, `realCalls: 0` |
| Schema version mismatch | `ok: true` | `CHECKPOINT_CORRUPT`, `realCalls: 0` |
| Invalid JSON on disk | `CHECKPOINT_CORRUPT` | `CHECKPOINT_CORRUPT` (unchanged) |
| Valid checkpoint only | `ok: true` | `ok: true` (unchanged) |
| Temp file without rename | ignored (not listed) | ignored (not listed) |

---

## 3. Corrupted checkpoint test table

`prepareResumeContext` results (isolated harness, `realCalls` per scenario):

| Scenario | `prepareResumeContext` code | `ok` | `realCalls` |
|----------|----------------------------|------|-------------|
| Invalid JSON | `CHECKPOINT_CORRUPT` | false | **0** |
| Truncated file | `CHECKPOINT_CORRUPT` | false | **0** |
| Wrong `expectedIdsHash` | `CHECKPOINT_CORRUPT` | false | **0** |
| Missing returned ID | `CHECKPOINT_CORRUPT` | false | **0** |
| Schema version mismatch | `CHECKPOINT_CORRUPT` | false | **0** |
| `status !== PASS` | `CHECKPOINT_CORRUPT` | false | **0** |
| Temp without atomic rename | `OK` | true | **0** (file not listed) |
| Valid checkpoint only | `OK` | true | **0** |
| Tampered hash (unit test) | `CHECKPOINT_CORRUPT` | false | **0** |

---

## 4. Open repair items status

| ID | Status | Notes |
|----|--------|-------|
| **R-CKPT-002** | **REPAIRED_AND_VERIFIED** | Full `validateBatchCheckpoint` at resume prep; 34 test assertions PASS |
| **R-CKPT-001** | **OPEN (non-blocking)** | No disk read-back after atomic rename; in-memory post-write validation only |
| **R-CKPT-003** | **OPEN (non-blocking)** | `batchesExpected`/`objectsExpected`/`resumedBatches` not fully populated in progress |

---

## 5. Mandatory command exit codes

| Command | Exit |
|---------|------|
| `npm run test:phase1-luna-checkpoint-resume` | **0** (34 assertions) |
| `npm run test:phase1-findings-validation` | **0** |
| `npm run test:phase1-coverage-gates` | **0** |
| `npm run test:phase1-f0-comp` | **0** |
| `npm run test:phase1-real-luna-transport` | **0** |
| `npm run test:phase1-dynamic-baseline-gate` | **0** |
| `npm run i18n:content:phase0-exit` | **0** |
| `npm run i18n:content:phase1-discovery -- --help` | **0** |
| `npm run i18n:content:phase1-discovery -- --skip-luna --all-groups --dataset all --all-langs` | **0**, `lunaCalls: 0` |
| `npm run i18n:content:phase1-exit` (run 1) | **0** |
| `npm run i18n:content:phase1-exit` (run 2) | **0** |
| Phase 1 exit determinism (`diff` run1 vs run2) | **0** (identical) |

---

## 6. Safety gates

| Check | Result |
|-------|--------|
| Production diff (`data`, `www/data`, `languages`, `crowdin/content`) | **0** |
| DE changes | **0** |
| Translation/content changes | **0** |
| Unexpected changes | **0** |
| Secrets in diff | **0** |
| PR #699 changes | **0** |
| Real-Luna calls | **0** |
| Terra calls | **0** |
| Full 318-scope discovery | **NOT RUN** |
| Hardcoded baseline SHA in `scripts/**` | **0** |

---

## 7. Original infrastructure (initial repair pass)

### Problem mapping (memory-only → checkpoint/resume)

| Problem | After |
|---------|-------|
| Batch results only in memory | Atomic checkpoints under `reports/temp/phase1-luna-runs/{runId}/` |
| No resume | `--resume-luna` / `--resume-run-id` |
| No run identity | `run-manifest.json` with scope/object/prompt hashes |
| Parallel runs | `.active-lock.json` → `PHASE1_RUN_ALREADY_ACTIVE` |
| Fresh run overwrites | `--fresh-luna` creates new `runId`; old runs preserved |

### Full changed file list (cumulative PR)

| Path | Role |
|------|------|
| `scripts/lib/phase1-luna-checkpoint/*` | Checkpoint store, manifest, lock, progress, resume, reconstruct |
| `scripts/lib/luna-adapter-runner.js` | Checkpoint hooks, skip, heartbeat |
| `scripts/run-phase1-discovery.js` | CLI integration |
| `scripts/test-phase1-luna-checkpoint-resume.js` | Isolated tests |
| `package.json`, `.gitignore` | Test script + ignore paths |
| `reports/phase1-luna-checkpoint-resume-repair.md` | This report |
| `reports/phase1-luna-checkpoint-resume-owner-review.md` | Prior OWNER review (needs repeat) |

---

## 8. Gala verdikts (repair pass)

| Field | Value |
|-------|-------|
| `R-CKPT-002` | **REPAIRED_AND_VERIFIED** |
| `CODE_REPAIR_VERDICT` | **READY_FOR_REPEAT_OWNER_REVIEW** |
| `OPERATIONAL_VERDICT` | **BLOCKED_PENDING_OWNER_REVIEW** |
| `PR_STATUS` | **DRAFT** |
| `LUNA_CALLS` | **0** |
| `FULL_DISCOVERY` | **NOT_RUN** |

**Note:** `OWNER_ACCEPTED_FOR_MERGE` requires a new independent OWNER review against the post-repair PR HEAD. Not self-granted.

---

## 9. Next steps

1. Independent repeat OWNER review on updated PR HEAD  
2. If PASS → merge  
3. Post-merge single-object real-Luna smoke  
4. Only then — full 318-scope discovery
