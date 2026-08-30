# Phase 1 Luna Checkpoint / Resume — R-CKPT-002 Second Repair Report

**Branch:** `cursor/phase1-luna-checkpoint-resume`  
**PR:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/702  
**Date:** 2026-08-30

---

## 1. SHA identity

| Field | Value |
|-------|-------|
| `ORIGIN_MAIN_SHA` | `fc822e8db76af40740073d90cc51873c80037354` |
| `R-CKPT-002_SECOND_REPAIR_START_SHA` | `6ae1e2dec6bbefa7fcc127808dda84e6e533b760` |
| `R-CKPT-002_SECOND_REPAIR_END_SHA` | `44988cfb8703da476b11b5800e10412bc387fdb4` |

---

## 2. Root cause (repeat OWNER review finding)

First R-CKPT-002 repair invoked `validateBatchCheckpoint()` at resume prep, but passed **self-referential** references from the checkpoint under test:

```javascript
// BEFORE (self-referential — checkpoint validates itself)
validateBatchCheckpoint(cp, {
  expectedRunId: runId,
  scopeId,
  batchIndex: cp.batchIndex,
  expectedIds: cp.expectedObjectIds,
  requestInputHash: cp.requestInputHash,
});
```

A fully self-consistent fake batch (`FAKE-A/B/C` with aligned hashes) passed `prepareResumeContext` with `ok: true`.

---

## 3. Independent batch plan (canonical reconstruction)

**New modules:**

| File | Role |
|------|------|
| `scripts/lib/phase1-luna-checkpoint/batch-split.js` | Shared `splitObjectsIntoBatches()` — same algorithm as `runBatchedAdapter` |
| `scripts/lib/phase1-luna-checkpoint/batch-plan.js` | `buildExpectedBatchPlanForScope()` / `buildExpectedBatchPlanForScopes()` |

**Per `lunaApplicable` scope, plan derives from:**

- `objects = loadObjectsForScope(scope)`
- `getId = getObjectId`
- `batchSize = getBatchSizeForScope(scope)`
- `adapterName = adapterKey(scope.group, scope.dataset)`
- Batching via `splitObjectsIntoBatches` (shared with runner)

**Per batch, independently computed:**

| Field | Source |
|-------|--------|
| `scopeId` | scope |
| `batchIndex` | loop index |
| `expectedObjectIds` | `batch.map(getId)` |
| `expectedIdsHash` | `hashSortedList(expectedObjectIds)` |
| `requestPayload` | `{ scopeId, adapter, objects: batch }` |
| `requestInputHash` | `hashRequestInput(requestPayload)` |
| `batchId` | `stableBatchId(scopeId, batchIndex, expectedObjectIds)` |
| `expectedFilename` | `${batchId}.json` |

Manifest identity (scope hash, object inventory hash, batching config, prompt schema) is verified before checkpoint validation runs.

---

## 4. Repair — `validateCheckpointIntegrity` (AFTER)

For each checkpoint file:

1. JSON parse (fail → `CHECKPOINT_CORRUPT`)
2. Map `cp.batchId` to **independent** expected batch from plan (unmappable → `CHECKPOINT_CORRUPT`)
3. Verify `basename(file) === expectedBatch.expectedFilename`
4. Compare checkpoint fields against plan (`batchIndex`, `scopeId`, `expectedIdsHash`, `requestInputHash`, `expectedObjectIds`) — **never used as references**
5. `validateBatchCheckpoint(cp, { expectedRunId: manifest.runId, scopeId, batchIndex, expectedIds, requestInputHash })` from plan
6. Duplicate `batchId` detection per scope

```javascript
// AFTER (independent references)
validateBatchCheckpoint(cp, {
  expectedRunId: manifest.runId,
  scopeId: expectedBatch.scopeId,
  batchIndex: expectedBatch.batchIndex,
  expectedIds: expectedBatch.expectedObjectIds,
  requestInputHash: expectedBatch.requestInputHash,
});
```

**Forbidden as reference values:** `cp.batchIndex`, `cp.expectedObjectIds`, `cp.expectedIdsHash`, `cp.requestInputHash`, `cp.batchId` (compare only).

---

## 5. Changed files

| File | Change |
|------|--------|
| `scripts/lib/phase1-luna-checkpoint/batch-split.js` | **NEW** — shared batch splitting |
| `scripts/lib/phase1-luna-checkpoint/batch-plan.js` | **NEW** — independent batch plan builder |
| `scripts/lib/phase1-luna-checkpoint/resume.js` | Independent-plan checkpoint integrity validation |
| `scripts/lib/luna-adapter-runner.js` | Use `splitObjectsIntoBatches`; clear batch timeout timer after race |
| `scripts/test-phase1-luna-checkpoint-resume.js` | Full manipulation matrix (18 scenarios) + 3-batch interrupt/resume metrics |
| `reports/phase1-luna-checkpoint-resume-repair.md` | This update |

---

## 6. Automated manipulation matrix

All scenarios run via `testTamperedCheckpointBlocksResumePrep` + `testInterruptResumeThreeBatchMetrics`.  
**Suite:** 94 assertions PASS.

| Scenario | Expected | Result | `realCalls` |
|----------|----------|--------|-------------|
| Valid checkpoint | OK | **PASS** | 0 |
| Invalid JSON | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Truncated JSON | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Wrong `runId` | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Wrong `scopeId` | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Wrong `batchIndex` | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Wrong `batchId` (content) | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Wrong `batchId` (filename) | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Mutated `expectedObjectIds` | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Wrong `expectedIdsHash` | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Wrong `requestInputHash` | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Missing returned ID | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Extra returned ID | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Duplicate returned ID | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Schema mismatch | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| `status !== PASS` | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| Duplicate batch checkpoint | `CHECKPOINT_CORRUPT` | **PASS** | 0 |
| `.tmp` without rename | ignored | **PASS** | 0 |

### Decisive self-consistent fake batch

Manipulated: `expectedObjectIds`, `expectedIdsHash`, `returnedObjectIds`, `rawResult.items`, `batchIndex`, `requestInputHash`, `batchId`, filename — all internally aligned with `FAKE-A/B/C`.

| Field | Value |
|-------|-------|
| `ok` | **false** |
| `code` | **`CHECKPOINT_CORRUPT`** |
| `realCalls` | **0** |

---

## 7. Interrupt/resume regression (3-batch)

| Metric | Expected | Actual |
|--------|----------|--------|
| `continuousApiCalls` | 3 | **3** |
| `interruptedApiCalls` | 2 | **2** |
| `resumedApiCalls` | 2 | **2** |
| `skippedBatches` | 1 | **1** |
| `repeatedBatches` | 0 | **0** |
| `duplicateFindings` | 0 | **0** |
| `duplicateObjects` | 0 | **0** |
| Reconstruction hash match | yes | **yes** |

---

## 8. Exit 124 diagnosis (`test:phase1-f0-comp`, `test:phase1-real-luna-transport`)

| Environment | Prints PASS | Natural exit | Notes |
|-------------|-------------|--------------|-------|
| `origin/main` (`fc822e8d`) | yes | **0** (slow ~8 min combined) | Pre-existing: `runBatchedAdapter` left 180s `setTimeout` uncleared after `Promise.race` win |
| PR branch (before fix) | yes | **124** under 90–120s external timeout | Same root cause — timer kept event loop alive |
| PR branch (after fix) | yes | **0** (~127s) | `clearTimeout(timeoutId)` in `finally` after batch API race |

**Repair ID:** `R-ADAPTER-TIMEOUT-LEAK` — fixed in `luna-adapter-runner.js` (minimal `clearTimeout` in `finally`).

---

## 9. Mandatory regression commands

| # | Command | Natural exit |
|---|---------|--------------|
| 1 | `npm run test:phase1-luna-checkpoint-resume` | **0** (94 assertions) |
| 2 | `npm run test:phase1-findings-validation` | **0** |
| 3 | `npm run test:phase1-coverage-gates` | **0** |
| 4 | `npm run test:phase1-f0-comp` | **0** |
| 5 | `npm run test:phase1-real-luna-transport` | **0** |
| 6 | `npm run test:phase1-dynamic-baseline-gate` | **0** |
| 7 | `npm run i18n:content:phase0-exit` | **0** |
| 8 | `npm run i18n:content:phase1-discovery -- --help` | **0** |
| 9 | `npm run i18n:content:phase1-discovery -- --skip-luna --all-groups --dataset all --all-langs` | **0** (`lunaCalls: 0`) |
| 10–11 | `npm run i18n:content:phase1-exit` ×2 | **0** |

**Phase 1 exit determinism:** `diff <(jq 'del(.generatedAt)' run1) <(jq 'del(.generatedAt)' run2)` = **0** (after full skip-luna discovery).

---

## 10. Safety gates

| Check | Result |
|-------|--------|
| Production diff | **0** |
| DE changes | **0** |
| Translation diff | **0** |
| Secrets in diff | **0** |
| PR #699 changes | **0** |
| Real-Luna calls | **0** |
| Terra calls | **0** |
| Full discovery | **NOT_RUN** |

---

## 11. Open repair IDs (unchanged)

| ID | Status |
|----|--------|
| **R-CKPT-001** | OPEN — no disk read-back after atomic rename |
| **R-CKPT-002** | **REPAIRED_AND_VERIFIED** (second repair) |
| **R-CKPT-003** | OPEN — progress `batchesExpected`/`objectsExpected`/`resumedBatches` incomplete |

---

## 12. Verdict

| Field | Value |
|-------|-------|
| **`R-CKPT-002`** | **`REPAIRED_AND_VERIFIED`** |
| **`CODE_REPAIR_VERDICT`** | **`READY_FOR_REPEAT_OWNER_REVIEW`** |
| **`OPERATIONAL_VERDICT`** | **`BLOCKED_PENDING_OWNER_REVIEW`** |
| **`PR_STATUS`** | **`DRAFT`** |
| **`LUNA_CALLS`** | **0** |
| **`FULL_DISCOVERY`** | **NOT_RUN** |
