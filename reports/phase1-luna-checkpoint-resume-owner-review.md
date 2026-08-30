# Phase 1 Luna Checkpoint/Resume — Repeat Independent OWNER Review

**PR:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/702  
**Review date:** 2026-08-30  
**Review type:** Repeat independent OWNER review (read-only; no production/repair code changes)  
**Branch:** `cursor/phase1-luna-checkpoint-resume`

---

## 1. SHA identity gates (verified before review)

| Field | Expected | Actual | Match |
|-------|----------|--------|-------|
| `HEAD` / `EXPECTED_PR_HEAD_SHA` | `381c4e1bcfbe092b302fb8af6dedee09f54be349` | `381c4e1bcfbe092b302fb8af6dedee09f54be349` | ✓ |
| `origin/main` / `BASE_SHA` | `fc822e8db76af40740073d90cc51873c80037354` | `fc822e8db76af40740073d90cc51873c80037354` | ✓ |
| `REPAIR_CODE_SHA` (reference) | `d9303fe8d2e2c09ebe25ab2a0812fdb494a59474` | present in PR history | ✓ |
| Branch | `cursor/phase1-luna-checkpoint-resume` | `cursor/phase1-luna-checkpoint-resume` | ✓ |
| Worktree | CLEAN | CLEAN | ✓ |

No `BLOCKED_SHA_DRIFT`. Review executed against exact PR head.

| Field | Value |
|-------|-------|
| `REVIEWED_CODE_SHA` | `381c4e1bcfbe092b302fb8af6dedee09f54be349` |
| `REPORT_COMMIT_SHA` | `76b7978764c386e5a4807f27fdf48b94dbd8e797` |

---

## 2. Safety gates

| Check | Result |
|-------|--------|
| Production diff (`data`, `www/data`, `languages`, `crowdin/content`) | **0** |
| DE changes | **0** |
| Translation/content changes | **0** |
| Secrets in PR diff | **0** (only `skipApiKeyCheck` option wiring) |
| PR #699 changes | **0** |
| Real-Luna calls (this review session) | **0** |
| Terra calls | **0** |
| Full 318-scope discovery | **NOT_RUN** |
| PR modified in review | **owner report only** (`reports/phase1-luna-checkpoint-resume-owner-review.md`) |

---

## 3. Code trace: validation reference sources

### Call chain

```
prepareResumeContext (resume.js)
  → validateCheckpointIntegrity (resume.js)
      → listCheckpointFiles + readJsonFile per file
      → validateBatchCheckpoint (batch-checkpoint.js)  [per checkpoint]
  → (on success) resume proceeds with realCalls=0

createCheckpointHooks → shouldSkipBatch (runner.js)
  → loadConfirmedCheckpoints (batch-checkpoint.js)
      → validateBatchCheckpoint with cp-derived refs [self-referential at load]
  → shouldSkipBatch re-validates with independent refs (runner.js)
```

### Reference value provenance

| Field | `validateCheckpointIntegrity` (resume prep) | `shouldSkipBatch` (runtime skip) |
|-------|---------------------------------------------|----------------------------------|
| `expectedRunId` | **Independent** — `runId` argument | **Independent** — `runId` |
| `scopeId` | **Independent** — loop `scopeIds` | **Independent** — `scope.scopeId` |
| `batchIndex` | **Self-referential** — `cp.batchIndex` | **Independent** — loop `batchIndex` |
| `expectedIds` | **Self-referential** — `cp.expectedObjectIds` | **Independent** — `batch.map(getId)` |
| `expectedIdsHash` | Derived inside validator from `expectedIds` passed in | Derived from independent `expectedIds` |
| `requestInputHash` | **Self-referential** — `cp.requestInputHash` | **Independent** — `hashRequestInput(requestPayload)` |
| `batchId` | Not cross-checked vs filename or manifest batch plan | **Independent** — `stableBatchId(scopeId, batchIndex, expectedIds)` |
| `returnedObjectIds` | Compared only against `expectedIds` passed in (self-ref) | Same when skip path runs |

**Conclusion:** At `prepareResumeContext` time, checkpoint files are validated for **internal consistency**, not against **independently reconstructed batch identity** from manifest/scope/object inventory. A checkpoint can be fully self-consistent while describing a batch that never existed in the run's expected object universe.

`shouldSkipBatch` does use independent references at runtime, but that does **not** close the resume-prep fail-closed gap: `prepareResumeContext` can return `ok: true` while corrupt or substituted checkpoint files remain on disk.

### Key code (reviewed SHA)

```95:101:scripts/lib/phase1-luna-checkpoint/resume.js
      const validation = validateBatchCheckpoint(cp, {
        expectedRunId: runId,
        scopeId,
        batchIndex: cp.batchIndex,
        expectedIds: cp.expectedObjectIds,
        requestInputHash: cp.requestInputHash,
      });
```

```92:105:scripts/lib/phase1-luna-checkpoint/runner.js
    shouldSkipBatch({ batchIndex, batch, getId, requestPayload }) {
      ...
      const expectedIds = batch.map(getId);
      ...
      const validation = require("./batch-checkpoint").validateBatchCheckpoint(existing, {
        expectedRunId: runId,
        scopeId: scope.scopeId,
        batchIndex,
        expectedIds,
        requestInputHash: requestHash,
      });
```

---

## 4. Independent R-CKPT-002 reproduction harness

**Harness:** `/tmp/owner-rckpt002-independent-harness.js` (isolated; not committed)  
**Method:** Each scenario calls `prepareResumeContext` via fresh `initFreshRun` + injected checkpoint file(s).  
**Reviewed code SHA:** `381c4e1bcfbe092b302fb8af6dedee09f54be349`

### Corrupted-checkpoint matrix

| Scenario | Expected | `ok` | `code` | `realCalls` | Pass? |
|----------|----------|------|--------|-------------|-------|
| Invalid JSON | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Truncated JSON | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `expectedIdsHash` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Missing returned ID | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Extra returned ID | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Duplicate returned ID | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Schema mismatch | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| `status !== PASS` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `runId` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `scopeId` | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Wrong `batchIndex` | `CHECKPOINT_CORRUPT` | **true** | — | 0 | **✗** |
| Wrong `batchId` (filename) | `CHECKPOINT_CORRUPT` | **true** | — | 0 | **✗** |
| Mutated `expectedObjectIds` (hash mismatch) | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| Mutated `requestInputHash` alone | `CHECKPOINT_CORRUPT` | **true** | — | 0 | **✗** |
| Duplicate `batchId` in two files | `CHECKPOINT_CORRUPT` | false | `CHECKPOINT_CORRUPT` | 0 | ✓ |
| `.tmp` file | ignored | true | `OK` | 0 | ✓ |
| Fully valid checkpoint | OK | true | `OK` | 0 | ✓ |

**Matrix score:** 14/17 enforced at prep time. **3 scenarios fail fail-closed requirement** (wrong `batchIndex`, wrong filename/`batchId`, isolated `requestInputHash` tamper).

---

## 5. Critical self-consistent manipulation test (decisive)

**Attack:** Simultaneously set internally consistent fake universe:

- `expectedObjectIds` = `["FAKE-A","FAKE-B","FAKE-C"]`
- Recomputed `expectedIdsHash`, `requestInputHash`, `returnedObjectIds`, `rawResult.items`
- Recomputed `batchId` via `stableBatchId(scopeId, batchIndex, fakeIds)`
- `status: PASS`, all other fields aligned

**Result:**

| Field | Value |
|-------|-------|
| `ok` | **`true`** |
| `code` | *(none — prep authorized)* |
| `realCalls` | **0** |

**Interpretation:** R-CKPT-002 is **not fully closed**. Validation trusts checkpoint-local fields as the reference source. An attacker (or disk corruption) can substitute an entirely fabricated batch that never existed in the manifest object plan and still pass `prepareResumeContext`.

---

## 6. Existing test coverage audit: `testTamperedCheckpointBlocksResumePrep`

**Location:** `scripts/test-phase1-luna-checkpoint-resume.js` (not modified in this review)

| Question | Finding |
|----------|---------|
| Mutation scenarios executed | **1** composite tamper: `expectedIdsHash: "tampered-hash"` + `requestInputHash: "tampered-request"` |
| Matrix rows automated | **~2/17** (invalid hash combo; does not isolate single-field tampers) |
| Wrong `batchId` / filename tested? | **No** |
| Mutated `expectedObjectIds` (self-consistent) tested? | **No** |
| Self-consistent multi-field manipulation tested? | **No** |
| Link to real expected batch content from manifest/objects? | **No** — checkpoint is hand-written, not derived from `loadObjectsForScope` |

The repair test proves **inconsistent** tampering is blocked (hash fields disagree with `expectedObjectIds`). It does **not** prove protection against **self-consistent** substitution — the decisive R-CKPT-002 threat model.

**Suite assertion count:** 34 (all PASS at reviewed SHA).

---

## 7. Interrupt/resume regression (3-batch, separate instances)

Re-run via independent harness (`interruptResume()`):

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
| Continuous | `f25d22f0ec21ceae2e6315ca84451bb05654a1f2f99bf8750e4c187f6d04d7a0` |
| Interrupted + resumed | `f25d22f0ec21ceae2e6315ca84451bb05654a1f2f99bf8750e4c187f6d04d7a0` |
| **Match** | **✓** |

Interrupt/resume mechanics remain sound; the defect is isolated to resume-prep checkpoint integrity vs independent batch identity.

---

## 8. Mandatory regression commands (11)

| # | Command | Exit | Notes |
|---|---------|------|-------|
| 1 | `npm run test:phase1-luna-checkpoint-resume` | **0** | 34 assertions PASS |
| 2 | `npm run test:phase1-findings-validation` | **0** | PASS |
| 3 | `npm run test:phase1-coverage-gates` | **0** | PASS |
| 4 | `npm run test:phase1-f0-comp` | **124** | stdout: `PASS`; process did not exit within 90s (open handles after PASS) |
| 5 | `npm run test:phase1-real-luna-transport` | **124** | stdout: `PASS`; same hang-after-PASS behaviour |
| 6 | `npm run test:phase1-dynamic-baseline-gate` | **0** | PASS |
| 7 | `npm run i18n:content:phase0-exit` | **0** | `PHASE_0_COMPLETE` |
| 8 | `npm run i18n:content:phase1-discovery -- --help` | **0** | PASS |
| 9 | `npm run i18n:content:phase1-discovery -- --skip-luna --all-groups --dataset all --all-langs` | **0** | `lunaCalls: 0`, 320 scopes |
| 10 | `npm run i18n:content:phase1-exit` (run A) | **0** | PASS |
| 11 | `npm run i18n:content:phase1-exit` (run B) | **0** | PASS |

**Phase 1 exit determinism:** `diff` of JSON excluding `generatedAt` = **0** between consecutive runs. Only timestamp field differs.

**Note:** Commands 4–5 are pre-existing hang-after-PASS behaviour (unrelated to R-CKPT-002 verdict); functional assertions completed before timeout.

---

## 9. Repair IDs status

| ID | Summary | Status after repeat review | Blocks merge? |
|----|---------|---------------------------|---------------|
| **R-CKPT-001** | No disk read-back after atomic checkpoint rename | **OPEN** (unchanged) | No |
| **R-CKPT-002** | Resume prep validates checkpoints against self-referential fields; self-consistent fake batch passes `prepareResumeContext` | **STILL_OPEN** | **Yes** |
| **R-CKPT-003** | Progress `batchesExpected` / `objectsExpected` / `resumedBatches` incomplete | **OPEN** (unchanged, observability) | No |

### R-CKPT-002 repair claim vs independent proof

The repair report (`d9303fe8`) states full `validateBatchCheckpoint` is now invoked at prep time. **Confirmed:** it is invoked. **Not sufficient:** references passed in are still taken from the checkpoint under test, so the repair closes inconsistent tampering only, not independent-identity tampering.

**Required fix direction (informational — not implemented in this review):** At `validateCheckpointIntegrity`, reconstruct expected batch identity per scope from manifest + `loadObjectsForScope` (batching plan), then validate each checkpoint file against that independent plan (index, ids, request hash, filename=`{batchId}.json`).

---

## 10. OWNER verdict

| Field | Value |
|-------|-------|
| **`R-CKPT-002`** | **`STILL_OPEN`** |
| **`R-CKPT-001`** | OPEN (non-blocking) |
| **`R-CKPT-003`** | OPEN (non-blocking) |
| **`CODE_OWNER_VERDICT`** | **`OWNER_REVIEW_NEEDS_REPAIR`** |
| **`OPERATIONAL_VERDICT`** | **`BLOCKED`** |
| **`PR_STATUS`** | **`DRAFT`** |
| **`LUNA_CALLS`** | **0** |
| **`FULL_DISCOVERY`** | **NOT_RUN** |

**Rationale:** Independent harness proves self-consistent checkpoint manipulation returns `prepareResumeContext → ok: true`. Additional prep-time gaps: wrong `batchIndex`, wrong `batchId` filename, and isolated `requestInputHash` tamper also pass. Existing `testTamperedCheckpointBlocksResumePrep` does not cover these cases. Interrupt/resume determinism and broader regression suite remain healthy, but fail-closed resume authorization against checkpoint store substitution is **not** proven.

**After fix:** Re-run this OWNER matrix including the self-consistent manipulation test; expect `R-CKPT-002 = CLOSED`, `CODE_OWNER_VERDICT = OWNER_ACCEPTED_FOR_MERGE`, `OPERATIONAL_VERDICT = PENDING_POST_MERGE_REAL_SMOKE`.

---

## 11. Review evidence summary

```
EXPECTED_PR_HEAD_SHA = 381c4e1bcfbe092b302fb8af6dedee09f54be349
REPAIR_CODE_SHA      = d9303fe8d2e2c09ebe25ab2a0812fdb494a59474
BASE_SHA             = fc822e8db76af40740073d90cc51873c80037354
harnessSelfConsistent.ok = true  ← R-CKPT-002 NOT CLOSED
matrixFailCount      = 3/17 prep-time scenarios
continuousApiCalls   = 3
interruptedApiCalls  = 2
resumedApiCalls      = 2
skippedBatches       = 1
reconstructionHash   = f25d22f0ec21ceae2e6315ca84451bb05654a1f2f99bf8750e4c187f6d04d7a0
productionDiff       = 0
realLunaCalls        = 0
```

---

## 12. Artifacts

| Artifact | Path |
|----------|------|
| OWNER review (this file) | `reports/phase1-luna-checkpoint-resume-owner-review.md` |
| Independent harness (ephemeral) | `/tmp/owner-rckpt002-independent-harness.js` |
| Harness stdout | `/tmp/owner-harness-output.json` |
