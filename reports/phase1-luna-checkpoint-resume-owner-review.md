# Phase 1 Luna Checkpoint/Resume — Final Repeat OWNER Review

**PR:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/702  
**Review date:** 2026-08-30  
**Review type:** Final independent OWNER review (read-only; report-only commit)  
**Branch:** `cursor/phase1-luna-checkpoint-resume`

---

## 1. SHA identity gates

| Field | Expected | Actual | Match |
|-------|----------|--------|-------|
| `HEAD` / `REVIEWED_CODE_SHA` / `FINAL_PR_HEAD_SHA` | `18b069f8377fa30771bc1a7e7d22dc9e9ddb8041` | `18b069f8377fa30771bc1a7e7d22dc9e9ddb8041` | ✓ |
| `origin/main` / `BASE_SHA` | `fc822e8db76af40740073d90cc51873c80037354` | `fc822e8db76af40740073d90cc51873c80037354` | ✓ |
| Branch | `cursor/phase1-luna-checkpoint-resume` | `cursor/phase1-luna-checkpoint-resume` | ✓ |
| Worktree | CLEAN | CLEAN | ✓ |

No `BLOCKED_SHA_DRIFT`.

| Field | Value |
|-------|-------|
| `REVIEWED_CODE_SHA` | `18b069f8377fa30771bc1a7e7d22dc9e9ddb8041` |
| `FINAL_PR_HEAD_SHA` | `18b069f8377fa30771bc1a7e7d22dc9e9ddb8041` |
| `R-CKPT-002_SECOND_REPAIR_END_SHA` | `44988cfb8703da476b11b5800e10412bc387fdb4` |
| `REPORT_COMMIT_SHA` | *(set at commit)* |

---

## 2. Safety gates

| Check | Result |
|-------|--------|
| Production diff (`data`, `www/data`, `languages`, `crowdin/content`) | **0** |
| DE changes | **0** |
| Translation/content changes | **0** |
| Secrets in PR diff | **0** |
| PR #699 changes | **0** |
| Real-Luna calls (this review session) | **0** |
| Terra calls | **0** |
| Full 318-scope discovery | **NOT_RUN** |
| Files modified in this review | **owner report only** |

---

## 3. Code trace — runner ↔ resume plan parity

### Call chain (verified at `18b069f8`)

```
runBatchedAdapter (luna-adapter-runner.js)
  → splitObjectsIntoBatches (batch-split.js)
  → payload { scopeId, adapter, objects: batch.map(serialize) }
  → createCheckpointHooks.shouldSkipBatch (runner.js)
      → validateBatchCheckpoint with loop batchIndex + batch.map(getId) + hashRequestInput(payload)
  → buildBatchCheckpoint → saveBatchCheckpoint

prepareResumeContext (resume.js)
  → validateManifestForResume (identity: scopeHash, objectIdsHash, batchingConfig, …)
  → buildExpectedBatchPlanForScopes (batch-plan.js)
      → loadObjectsForScope + getBatchSizeForScope + splitObjectsIntoBatches
  → validateCheckpointIntegrity
      → map cp.batchId → independent expected batch
      → validateBatchCheckpoint with plan-derived refs only
```

### Shared canonical inputs (runner execution ≡ resume validation)

| Dimension | Runner source | Resume/batch-plan source | Match |
|-----------|---------------|--------------------------|-------|
| Object order | `loadObjectsForScope(scope)` | `loadObjectsForScope(scope)` | ✓ |
| Batch size | `getBatchSizeForScope(scope)` | `getBatchSizeForScope(scope)` | ✓ |
| Split algorithm | `splitObjectsIntoBatches` | `splitObjectsIntoBatches` | ✓ |
| `adapterName` | `adapterKey(group, dataset)` | `adapterKey(group, dataset)` | ✓ |
| Serialization | `(obj) => obj` | `(obj) => obj` | ✓ |
| Request payload | `{ scopeId, adapter, objects }` | `buildRequestPayload(...)` identical shape | ✓ |
| `getId` | `getObjectId` | `getObjectId` | ✓ |
| `stableBatchId` | `hash.js` | `hash.js` | ✓ |
| `requestInputHash` | `hashRequestInput(payload)` | `hashRequestInput(requestPayload)` | ✓ |

**Independent plan alignment test** (`g2/a1/et`, 702 objects, 29 batches): `aligned: true`, `mismatches: []`.

---

## 4. Checkpoint field reference provenance

Resume-prep validation compares checkpoint fields **against** independent plan; never **from** checkpoint.

| Checkpoint field | Reference source | Uses `cp.*` as reference? |
|------------------|------------------|---------------------------|
| `runId` | Verified manifest (`manifest.runId`) | **No** |
| `scopeId` | Active Luna scope + plan (`expectedBatch.scopeId`) | **No** |
| `batchIndex` | Reconstructed batch plan | **No** |
| `expectedObjectIds` | Production object inventory via plan | **No** |
| `expectedIdsHash` | `hashSortedList(plan.expectedObjectIds)` | **No** |
| `requestInputHash` | `hashRequestInput(plan.requestPayload)` | **No** |
| `batchId` | `stableBatchId` from independent plan | **No** |
| Filename | `expectedBatch.expectedFilename` (`{batchId}.json`) | **No** |

Explicit field-equality checks in `validateCheckpointIntegrity` (lines 138–155 `resume.js`) reject drift even when internal checkpoint hashes appear self-consistent.

---

## 5. Independent OWNER manipulation matrix

**Harness:** `/tmp/owner-final-review-harness.js` (ephemeral)  
**Method:** Isolated `prepareResumeContext` per scenario; valid checkpoints built from `buildExpectedBatchPlanForScope`, not repair-test fixtures.

| Scenario | Expected | `ok` | `code` | `realCalls` | Pass |
|----------|----------|------|--------|-------------|------|
| Valid checkpoint | OK | true | OK | 0 | ✓ |
| Valid incomplete (no checkpoints) | OK | true | OK | 0 | ✓ |
| Invalid JSON | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Truncated JSON | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `runId` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `scopeId` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `batchIndex` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `batchId` (content) | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong filename | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Mutated `expectedObjectIds` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `expectedIdsHash` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `requestInputHash` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Missing returned ID | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Extra returned ID | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Duplicate returned ID | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Schema mismatch | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| `status !== PASS` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Duplicate checkpoint | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| `.tmp` file | ignored | true | OK | 0 | ✓ |

**Matrix score: 20/20 PASS.**

---

## 6. Decisive self-consistent fake batch (independent harness)

**Not** using repair-test fixture IDs. Owner harness uses `OWNER-FAKE-1/2/3`, `batchIndex=7`, all fields internally aligned.

| Field | Value |
|-------|-------|
| `ok` | **false** |
| `code` | **`CHECKPOINT_CORRUPT`** |
| `realCalls` | **0** |

**R-CKPT-002 closure criterion: PASS.** Checkpoint cannot validate itself.

---

## 7. Batch plan edge cases

| Case | Result |
|------|--------|
| One object → 1 batch | ✓ |
| Exactly one full batch (25) | ✓ |
| Full batch + 1 object → 2 batches | ✓ |
| Multiple full batches (75 → 3) | ✓ |
| Partial last batch (28 → 2) | ✓ |
| Empty object catalog → 0 batches | ✓ |
| Empty checkpoint directory | `ok: true` ✓ |
| Unplanned batch file | `CHECKPOINT_CORRUPT` ✓ |
| Two scopes (`et` + `lv`), both `batchIndex=0` | `ok: true` ✓ |
| Inventory drift (`objectIdsHash`) | `RESUME_IDENTITY_MISMATCH` (pre-checkpoint) ✓ |
| Batching config drift | `RESUME_IDENTITY_MISMATCH` (pre-checkpoint) ✓ |
| `lunaObjectLimit=4` run vs full-inventory resume plan | `CHECKPOINT_CORRUPT` ✓ |

**`lunaObjectLimit`:** Production `--resume-luna` does not pass `lunaObjectLimit` to `buildExpectedBatchPlanForScopes`. Limited test/smoke runs produce checkpoints that fail independent full-inventory plan — fail-closed. Not a production resume bypass.

---

## 8. Interrupt/resume regression (3 separate process instances)

Synthetic 9-object scope, `batchSize=3`, separate `initFreshRun` instances.

| Metric | Expected | Actual | Match |
|--------|----------|--------|-------|
| `continuousApiCalls` | 3 | **3** | ✓ |
| `interruptedApiCalls` | 2 | **2** | ✓ |
| `resumedApiCalls` | 2 | **2** | ✓ |
| `skippedBatches` | 1 | **1** | ✓ |
| `repeatedBatches` | 0 | **0** | ✓ |
| `duplicateFindings` | 0 | **0** | ✓ |
| `duplicateObjects` | 0 | **0** | ✓ |

### Reconstruction hash

| Run | SHA-256 |
|-----|---------|
| Continuous | `eb679fa1ca1f97e99b554dc55f974f87a3a65a26438fefe2fe274e8e1e379b19` |
| Interrupted + resumed | `eb679fa1ca1f97e99b554dc55f974f87a3a65a26438fefe2fe274e8e1e379b19` |
| **Match** | **IDENTICAL ✓** |

Repair suite (`testInterruptResumeThreeBatchMetrics`): 94 assertions PASS.

---

## 9. Exit 124 / open-handle verification

### Root cause (prior review)

`runBatchedAdapter` created `setTimeout(TIMEOUT_MS=180_000)` for `Promise.race` but did not `clearTimeout` when transport resolved first — event loop held ~180s per batch call.

### Fix at `18b069f8` (`luna-adapter-runner.js` lines 133–149)

```javascript
} finally {
  if (timeoutId) clearTimeout(timeoutId);
  if (heartbeatTimer) clearInterval(heartbeatTimer);
}
```

`finally` runs on: transport success, transport rejection, timeout, malformed response (retry loop), and per-attempt completion. Interrupt during in-flight call still clears timer when the race settles.

### Natural exit verification (no external timeout wrapper)

| Command | PASS printed | `NATURAL_EXIT_CODE` | `PROCESS_HANG` |
|---------|--------------|---------------------|----------------|
| `npm run test:phase1-f0-comp` | yes | **0** | **no** |
| `npm run test:phase1-real-luna-transport` | yes | **0** | **no** |

Exit 124 is **not** classified as PASS.

---

## 10. Mandatory regression commands (11)

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
| 10 | `npm run i18n:content:phase1-exit` (run A) | **0** |
| 11 | `npm run i18n:content:phase1-exit` (run B) | **0** |

**Phase 1 exit determinism:** `diff <(jq 'del(.generatedAt)' run1) <(jq 'del(.generatedAt)' run2)` = **0**.

---

## 11. Repair ID status

| ID | Summary | Status | Blocks merge? |
|----|---------|--------|---------------|
| **R-CKPT-002** | Independent batch-plan validation at resume prep; self-consistent fake batch blocked | **CLOSED** | No |
| **R-CKPT-001** | No disk read-back after atomic checkpoint rename | OPEN | No (observability hardening) |
| **R-CKPT-003** | Progress `batchesExpected`/`objectsExpected`/`resumedBatches` incomplete | OPEN | No (observability) |

No fail-closed or data-integrity risk identified tied to R-CKPT-001 or R-CKPT-003 in this review.

---

## 12. OWNER verdict

| Field | Value |
|-------|-------|
| **`R-CKPT-002`** | **`CLOSED`** |
| **`R-CKPT-001`** | OPEN (non-blocking) |
| **`R-CKPT-003`** | OPEN (non-blocking) |
| **`CODE_OWNER_VERDICT`** | **`OWNER_ACCEPTED_FOR_MERGE`** |
| **`OPERATIONAL_VERDICT`** | **`PENDING_POST_MERGE_REAL_SMOKE`** |
| **`PR_STATUS`** | **`DRAFT`** |
| **`LUNA_CALLS`** | **0** |
| **`FULL_DISCOVERY`** | **NOT_RUN** |

**Rationale:** At `18b069f8`, independent OWNER harness confirms all 20 manipulation scenarios, self-consistent fake batch rejection, runner/resume batch-plan parity (29 batches / 702 objects), edge-case fail-closed behavior, interrupt/resume determinism, natural exit 0 on all 11 mandatory commands, and exit-124 remediation. R-CKPT-002 is fully closed. Post-merge real-Luna smoke remains required before full 318-scope discovery.

---

## 13. Review evidence summary

```
REVIEWED_CODE_SHA     = 18b069f8377fa30771bc1a7e7d22dc9e9ddb8041
FINAL_PR_HEAD_SHA     = 18b069f8377fa30771bc1a7e7d22dc9e9ddb8041
matrixPass            = 20/20
fakeBatch.ok          = false
fakeBatch.code        = CHECKPOINT_CORRUPT
planAlignment         = true (29 batches, 702 objects)
continuousApiCalls    = 3
interruptedApiCalls   = 2
resumedApiCalls       = 2
skippedBatches        = 1
reconstructionHash    = eb679fa1ca1f97e99b554dc55f974f87a3a65a26438fefe2fe274e8e1e379b19
f0CompNaturalExit     = 0
transportNaturalExit  = 0
productionDiff        = 0
realLunaCalls         = 0
```

---

## 14. Artifacts

| Artifact | Path |
|----------|------|
| OWNER review (this file) | `reports/phase1-luna-checkpoint-resume-owner-review.md` |
| Independent harness (ephemeral) | `/tmp/owner-final-review-harness.js` |
| Harness stdout | `/tmp/owner-final-harness-out.json` |
