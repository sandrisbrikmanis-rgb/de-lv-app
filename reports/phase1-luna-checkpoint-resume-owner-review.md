# Phase 1 Luna Checkpoint/Resume — OWNER Review

**PR:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/702  
**Review date:** 2026-08-30  
**Reviewer:** Independent OWNER review (read-only, no code changes)

---

## 1. SHA identity (verified)

| Field | Expected | Actual | Match |
|-------|----------|--------|-------|
| `ORIGIN_MAIN_SHA` / `BASE_SHA` | `fc822e8db76af40740073d90cc51873c80037354` | `fc822e8db76af40740073d90cc51873c80037354` | ✓ |
| `REVIEWED_CODE_SHA` | `90a2c2854d5a938aa0682de1671f7691b23b2f06` | `90a2c2854d5a938aa0682de1671f7691b23b2f06` | ✓ |

Review performed against exact PR head. No SHA drift.

---

## 2. Diff scope (19 files, +2235 / −21)

| File | Change purpose | Allowed | Risk | Result |
|------|----------------|---------|------|--------|
| `scripts/lib/phase1-luna-checkpoint/*` (12 files) | Checkpoint store, manifest, lock, progress, resume, reconstruct | ✓ | Medium | **PASS** with R-CKPT-002 |
| `scripts/lib/luna-adapter-runner.js` | Checkpoint hooks, skip, heartbeat, interrupt | ✓ | Medium | **PASS** |
| `scripts/run-phase1-discovery.js` | `--fresh-luna` / `--resume-luna` integration | ✓ | Medium | **PASS** |
| `scripts/test-phase1-luna-checkpoint-resume.js` | Isolated unit tests | ✓ | Low | **PASS** |
| `package.json` | npm test script | ✓ | Low | **PASS** |
| `.gitignore` | Ignore run dirs / progress files | ✓ | Low | **PASS** |
| `reports/phase1-luna-checkpoint-resume-repair.md` | Repair report | ✓ | Low | **PASS** |

**Safety gates:**

| Check | Result |
|-------|--------|
| Production diff (`data`, `www/data`, `languages`, `crowdin/content`) | **0** |
| DE changes | **0** |
| Translation/content changes | **0** |
| Unexpected changes | **0** |
| Hardcoded baseline SHA in `scripts/**` | **0** |
| Secrets in diff | **0** |
| PR #699 changes | **0** |
| Real-Luna calls (review session) | **0** |
| Terra calls | **0** |
| Full discovery | **NOT RUN** |

---

## 3. Checkpoint code review (§4)

### Implemented PASS path sequence

```
Luna response
→ validateBatchResponse (ID coverage, duplicates, unexpected)
→ onBatchPass hook
→ buildBatchCheckpoint (normalized findings)
→ writeJsonAtomic (temp → fsync → rename)
→ validateBatchCheckpoint (in-memory, post-write)
→ batch marked PASS in adapter (only after onBatchPass returns)
→ progress heartbeat touch
```

### Verified behaviours

| Requirement | Result |
|-------------|--------|
| Partial response not saved as PASS | **PASS** — `validateBatchResponse` rejects |
| Missing object not saved as PASS | **PASS** |
| Duplicate object not saved as PASS | **PASS** |
| Unexpected object not saved as PASS | **PASS** |
| Malformed JSON not saved as PASS | **PASS** |
| Partial `.tmp` not promoted | **PASS** — `listCheckpointFiles` excludes `*.tmp` |
| Progress not advanced if checkpoint write fails | **PASS** — `onBatchPass` throws before batchOk |
| No API keys in checkpoint payload | **PASS** — grep + schema review |
| Deterministic `batchId` | **PASS** — `stableBatchId(scopeId, batchIndex, expectedIds)` |
| Single batch cannot produce two valid checkpoints | **PASS** — filename = `{batchId}.json` |

### Gaps

| ID | Finding | Severity |
|----|---------|----------|
| **R-CKPT-001** | `saveBatchCheckpoint` validates in-memory object after write; **no disk read-back** after atomic rename (spec §4 requires read-back validation) | Medium |
| **R-CKPT-002** | `validateCheckpointIntegrity` (resume prep) only checks `status === "PASS"` + JSON parse; **does not run full `validateBatchCheckpoint`**. Tampered PASS checkpoint with wrong hash / IDs passes `prepareResumeContext` (`ok: true`, `realCalls: 0`) | **High — fail-closed defect** |
| **R-CKPT-003** | Progress fields `batchesExpected`, `objectsExpected`, `scopesStarted` never populated; `resumedBatches` declared but never incremented | Low (observability) |

---

## 4. Run manifest review (§5)

Manifest includes all required identity fields: `runId`, `schemaVersion`, `discoveryBaselineSha`, `headSha`, `originMainSha`, `model`, `transport`, `cliScope`, `expectedScopeIds`, `scopeHash`, `objectIdsHash`, `batchingConfig`, `promptSchemaHash`, `startedAt`, `status`.

Identity mismatch → `RESUME_IDENTITY_MISMATCH`, `realCalls: 0` — **verified** (model/scope/baseline drift tests).

`run-phase1-discovery.js` passes `model: options.lunaModel || DEFAULT_MODEL` to `prepareResumeContext` — **PASS**.

No bypass path found for production resume (all gates in `authorizeWithLunaDiscovery` + `prepareResumeContext`).

---

## 5. Main interrupt/resume test (§6)

**Setup:** Synthetic 9-object scope, `batchSize=3` → BATCH-1/2/3.  
**Method:** Three separate orchestrator instances (fresh `createCheckpointHooks` loading from disk only). Process #2 interrupted via `INTERRUPTED` during BATCH-2 API call (after BATCH-1 checkpoint saved).

### API call table

| Batch | Before interrupt | Resume API calls | Final status |
|-------|------------------|------------------|--------------|
| BATCH-1 | PASS + checkpoint saved | **0** | SKIPPED_CONFIRMED |
| BATCH-2 | Started, no valid checkpoint | **1** | PASS |
| BATCH-3 | Not started | **1** | PASS |

### Metrics

| Metric | Expected | Actual | Match |
|--------|----------|--------|-------|
| Continuous API calls | 3 | **3** | ✓ |
| Interrupted process API calls | 2 | **2** | ✓ |
| Resume process API calls | 2 | **2** | ✓ |
| Confirmed batch repeated calls | 0 | **0** | ✓ |
| `skippedBatches` | 1 | **1** | ✓ |
| `repeatedBatches` | 0 | **0** | ✓ |
| `duplicateFindings` | 0 | **0** | ✓ |
| `duplicateObjects` | 0 | **0** | ✓ |
| Interrupted error code | INTERRUPTED | **INTERRUPTED** | ✓ |
| Checkpoints after interrupt | 1 (BATCH-1 only) | **1** | ✓ |

### Reconstruction hash

| Run | Hash |
|-----|------|
| Continuous | `83159727dd7292c69aa6ce94bc2c1313608d40d5806c073ab4d4c0f32e50e0bd` |
| Interrupted+resumed | `83159727dd7292c69aa6ce94bc2c1313608d40d5806c073ab4d4c0f32e50e0bd` |
| **Match** | **✓** |

---

## 6. Determinism comparison (§7)

| Compared field | Continuous | Resumed | Match |
|----------------|------------|---------|-------|
| Expected object IDs (all batches) | 9 | 9 | ✓ |
| Returned object IDs | 9 | 9 | ✓ |
| `findingStableId` set (sorted) | 3 entries | 3 entries | ✓ |
| Findings content hash | `83159727…` | `83159727…` | ✓ |
| `duplicateFindings` | 0 | 0 | ✓ |
| `duplicateObjects` | 0 | 0 | ✓ |
| `repeatedBatches` | 0 | 0 | ✓ |
| `objectsProcessed` | 9 | 9 | ✓ |
| Timestamps / PID / heartbeat | differ | differ | Allowed |

Full content hash match — not only object count.

---

## 7. Multi-interrupt scenarios (§8)

| Scenario | Result |
|----------|--------|
| Interrupt before first checkpoint | No checkpoint files; resume runs all batches — **PASS** (unit test) |
| Interrupt after one confirmed batch | **PASS** (main test above) |
| Interrupt during batch write | `.tmp` excluded; no PASS promoted — **PASS** |
| Interrupt after scope complete | All checkpoints present; resume `skippedBatches=3`, API calls=0 — **PASS** (unit test `testDeterministicRestarts`) |
| Two sequential resumes | Hash stable; `repeatedBatches=0` — **PASS** |
| Resume after all batches done | `skippedBatches > 0`, API calls=0 — **PASS** |

---

## 8. Corrupted checkpoint tests (§9)

| Scenario | Error code | Luna calls | Fail-closed |
|----------|------------|------------|-------------|
| Invalid JSON on disk | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Truncated file | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Temp file without rename | Ignored (not listed) | 0 | ✓ |
| PASS status + wrong hash (correct `batchId`) | **`prepareResumeContext` → `ok: true`** | 0 | **✗ R-CKPT-002** |
| PASS status + wrong `expectedIdsHash` | **`ok: true`** | 0 | **✗ R-CKPT-002** |
| Schema version mismatch at skip time | `CHECKPOINT_CORRUPT` thrown | 0 | ✓ (runtime) |
| Duplicate checkpoint same batchId | Second file ignored by `repeatedBatches` counter | 0 | Partial |

**Note:** Runtime `shouldSkipBatch` runs full `validateBatchCheckpoint` and throws `CHECKPOINT_CORRUPT` for corrupt confirmed batches. However resume **prep** does not block when tampered PASS files exist on disk — operator is not fail-closed at resume authorization.

---

## 9. Lock and parallelism (§10)

| Test | Result |
|------|--------|
| Second active run blocked | **PASS** — `PHASE1_RUN_ALREADY_ACTIVE` |
| Blocked process Luna calls | **0** |
| Lock uses PID + heartbeat + manifest status | **PASS** |
| Stale/uncertain lock → fail-closed | **PASS** (lines 64–74 `lock.js`) |
| Lock released only by owning PID | **PASS** — `releaseRunLock` checks `pid` |
| `--fresh-luna` + `--resume-luna` together | **PASS** — CLI exits 1, Luna calls 0 |

---

## 10. Baseline and authorization (§11)

On repair branch (`HEAD !== origin/main`):

| Gate | Result |
|------|--------|
| `authorizeWithLunaDiscovery()` | **BLOCKED** — `HEAD_NOT_AT_ORIGIN_MAIN` |
| Real Luna calls | **0** |
| `prepareResumeContext` with injected identity + `skipPhase0Check` | Works in tests |
| Production resume path requires HEAD on main | **PASS** — PR #701 gates preserved |

---

## 11. Heartbeat and progress (§12)

| Field | Populated after batch | Notes |
|-------|----------------------|-------|
| `skippedBatches` | ✓ | Incremented on resume skip |
| `realCalls` | ✓ | Not double-counted for skipped batches |
| `tokensUsed` | ✓ | Not double-counted |
| `batchesCompleted` | ✓ | Includes skipped |
| `lastSuccessfulBatchId` | ✓ | |
| `heartbeatAt` | ✓ | 15s interval during API wait |
| `batchesExpected` | ✗ | Always 0 — R-CKPT-003 |
| `objectsExpected` | ✗ | Always 0 — R-CKPT-003 |
| `resumedBatches` | ✗ | Never incremented — R-CKPT-003 |

Counters after resume are not double-counted for confirmed batches — **PASS**.

---

## 12. Fresh mode (§13)

| Requirement | Result |
|-------------|--------|
| New `runId` per `--fresh-luna` | **PASS** |
| Does not overwrite prior run | **PASS** |
| Does not delete old checkpoints | **PASS** |
| Blocks when active lock exists | **PASS** |
| `--fresh-luna` + `--resume-luna` blocked | **PASS** |

---

## 13. Mandatory regression tests (§14)

| Command | Exit | Result |
|---------|------|--------|
| `npm run test:phase1-findings-validation` | 0 | PASS |
| `npm run test:phase1-coverage-gates` | 0 | PASS |
| `npm run test:phase1-f0-comp` | 0 | PASS |
| `npm run test:phase1-real-luna-transport` | 0 | PASS |
| `npm run test:phase1-dynamic-baseline-gate` | 0 | PASS |
| `npm run test:phase1-luna-checkpoint-resume` | 0 | PASS (31 assertions) |
| `npm run i18n:content:phase0-exit` | 0 | PASS |
| `npm run i18n:content:phase1-discovery -- --help` | 0 | PASS |
| `npm run i18n:content:phase1-discovery -- --skip-luna --all-groups --dataset all --all-langs` | 0 | PASS, `lunaCalls: 0` |
| `npm run i18n:content:phase1-exit` ×2 | 0 | PASS, deterministic (`diff` empty) |

---

## 14. Repair IDs

| ID | Summary | Severity | Blocks merge? |
|----|---------|----------|---------------|
| **R-CKPT-001** | No disk read-back validation after atomic checkpoint rename | Medium | No |
| **R-CKPT-002** | `validateCheckpointIntegrity` does not run full checkpoint validation; tampered PASS files pass resume prep | **High** | **Yes** |
| **R-CKPT-003** | Progress `batchesExpected`/`objectsExpected`/`resumedBatches` not fully implemented | Low | No |

---

## 15. Risks (residual)

1. Post-merge real-Luna smoke still required before full 318-scope discovery.
2. R-CKPT-002 must be fixed before production resume can be trusted fail-closed at prep time.
3. Lock stale recovery requires operator judgment (by design — fail-closed).

---

## 16. OWNER verdict

| Verdict | Value |
|---------|-------|
| **`CODE_OWNER_VERDICT`** | **`OWNER_REVIEW_NEEDS_REPAIR`** |
| **`OPERATIONAL_VERDICT`** | **`BLOCKED`** |

**Rationale:** Core interrupt/resume mechanics, determinism, lock, fresh mode, and regression suite **PASS**. However **R-CKPT-002** violates §9 fail-closed requirement: tampered checkpoint files with `status: "PASS"` are not rejected at `prepareResumeContext`, allowing resume authorization when checkpoint store integrity is compromised. This must be repaired before merge.

**After R-CKPT-002 fix + re-review:** expect `OWNER_ACCEPTED_FOR_MERGE` / `PENDING_POST_MERGE_REAL_SMOKE`.

---

## 17. Review evidence summary

```
ORIGIN_MAIN_SHA     = fc822e8db76af40740073d90cc51873c80037354
REVIEWED_CODE_SHA   = 90a2c2854d5a938aa0682de1671f7691b23b2f06
continuousApiCalls  = 3
interruptedApiCalls = 2
resumedApiCalls     = 2
skippedBatches      = 1
repeatedBatches     = 0
duplicateFindings   = 0
reconstructionHash  = 83159727dd7292c69aa6ce94bc2c1313608d40d5806c073ab4d4c0f32e50e0bd (continuous == resumed)
productionDiff      = 0
realLunaCalls       = 0
```
