# Phase 1 Luna Checkpoint / Resume — Infrastructure Repair Report

**Verdict:** `PHASE1_CHECKPOINT_RESUME_READY_FOR_OWNER_REVIEW`  
**Date:** 2026-08-30  
**Branch:** `cursor/phase1-luna-checkpoint-resume`

---

## 1. SHA identity

| Field | Value |
|-------|-------|
| `REPAIR_BASELINE_SHA` | `fc822e8db76af40740073d90cc51873c80037354` |
| `origin/main` at repair start | `fc822e8db76af40740073d90cc51873c80037354` |
| `IMPLEMENTATION_SHA` | _(set at commit — see PR head)_ |
| Working tree at start | clean |

---

## 2. BEFORE → AFTER problem mapping

| Problem (before) | Root cause | After |
|------------------|------------|-------|
| Batch results only in process memory | `runBatchedAdapter` had no persistence | Atomic per-batch checkpoints under `reports/temp/phase1-luna-runs/{runId}/checkpoints/` |
| Final reports written only at run end | `writePhase1Reports()` at orchestrator exit | Deterministic reconstruction from validated checkpoints via `reconstructFromCheckpoints()` |
| Process interrupt loses completed batches | No resume state | `--resume-luna` + `--resume-run-id` skips PASS checkpoints (0 API calls) |
| No run identity binding | No manifest | Immutable `run-manifest.json` with scope/object/prompt hashes |
| Parallel full runs possible | No lock | `.active-lock.json` with PID, hostname, heartbeat — `PHASE1_RUN_ALREADY_ACTIVE` |
| `--fresh-luna` could overwrite evidence | Not implemented safely | `--fresh-luna` creates new `runId` + directory; old runs preserved |
| Progress not measurable mid-run | No progress file | Atomic `progress.json` with scopes/batches/objects/realCalls/tokens |
| Heartbeat missing during long API calls | No heartbeat | 15s heartbeat during batch wait + lock touch |

### Pre-repair flow (memory-only Luna path)

```
scope → batch → Luna request → validateBatchResponse (in-memory)
  → results[] in process → final matrix at end only
```

**Lost on interrupt:** in-flight batch, uncommitted `results[]`, aggregate stats.  
**Spec-defined but not wired:** `scripts/.phase1-luna-{scopeId}-progress.json`, `--resume-luna`, `--fresh-luna` (§5.3, §5.8).

**Reusable resume patterns elsewhere:** ET/ES/CS audit scripts (`--resume`, progress JSON under `scripts/.{module}-luna-progress.json`).

---

## 3. Changed files

| Path | Role |
|------|------|
| `scripts/lib/phase1-luna-checkpoint/*` | Checkpoint store, manifest, lock, progress, resume, reconstruct |
| `scripts/lib/luna-adapter-runner.js` | Checkpoint hooks, skip confirmed batches, heartbeat, interrupt |
| `scripts/run-phase1-discovery.js` | `--fresh-luna`, `--resume-luna`, `--resume-run-id`, checkpoint integration |
| `scripts/test-phase1-luna-checkpoint-resume.js` | Isolated tests A–D |
| `package.json` | `test:phase1-luna-checkpoint-resume` |
| `.gitignore` | `reports/temp/phase1-luna-runs/`, `scripts/.phase1-luna-*-progress.json` |

---

## 4. Checkpoint storage

**Root:** `reports/temp/phase1-luna-runs/{runId}/`

```
{runId}/
  run-manifest.json      # immutable identity
  progress.json          # atomic run progress
  checkpoints/
    {scopeId_escaped}/
      batch-{index}-{hash16}.json
```

**Lock:** `reports/temp/phase1-luna-runs/.active-lock.json`

---

## 5. Run manifest schema (v1.0.0)

Required fields: `runId`, `schemaVersion`, `discoveryBaselineSha`, `headSha`, `originMainSha`, `model`, `transport`, `cliScope`, `expectedScopeIds`, `scopeHash`, `objectIdsHash`, `objectCount`, `batchingConfig`, `promptSchemaHash`, `startedAt`, `status`.

Resume allowed only when all identity fields match → else `RESUME_IDENTITY_MISMATCH` (fail-closed, 0 Luna calls).

---

## 6. Batch checkpoint schema (v1.0.0)

`runId`, `scopeId`, `batchId`, `batchIndex`, `expectedObjectIds`, `expectedIdsHash`, `requestInputHash`, `returnedObjectIds`, `rawResult`, `normalizedFindings`, `attemptCount`, `tokensUsed`, `startedAt`, `endedAt`, `model`, `transport`, `status: PASS`.

**Write pattern:** temp file → fsync → atomic rename → post-write validation. Partial `.tmp` never promoted.

---

## 7. Lock mechanism

Fields: `runId`, `pid`, `hostname`, `runnerId`, `startedAt`, `heartbeatAt`, `baselineSha`, `command`.

Stale detection: PID alive **and** heartbeat &lt; 5 min **and** manifest `IN_PROGRESS`/`INTERRUPTED`. Uncertain → fail-closed.

---

## 8. Resume validation sequence

1. Dynamic `origin/main` fetch (via `resolvePhase1GitIdentity`)
2. HEAD === origin/main
3. Clean working tree
4. Production diff 0 / DE diff 0
5. Phase 0 PASS + evaluatedHeadSha match
6. Load + validate manifest
7. Checkpoint integrity scan
8. Identity hash compare (baseline, model, transport, scope, objects, prompt/batching)
9. Skip PASS batches only; continue first incomplete batch

---

## 9. Fail-closed scenarios (tested)

| Scenario | Code | Luna calls |
|----------|------|------------|
| HEAD ≠ origin/main | `HEAD_NOT_AT_ORIGIN_MAIN` | 0 |
| Baseline drift | `RESUME_IDENTITY_MISMATCH` | 0 |
| Model mismatch | `RESUME_IDENTITY_MISMATCH` | 0 |
| Transport mismatch | `RESUME_IDENTITY_MISMATCH` | 0 |
| Scope hash mismatch | `RESUME_IDENTITY_MISMATCH` | 0 |
| Object ID hash mismatch | `RESUME_IDENTITY_MISMATCH` | 0 |
| Prompt/schema mismatch | `RESUME_IDENTITY_MISMATCH` | 0 |
| Dirty working tree | `WORKING_TREE_DIRTY` | 0 |
| Active lock | `PHASE1_RUN_ALREADY_ACTIVE` | 0 |
| Corrupt checkpoint | `CHECKPOINT_CORRUPT` | 0 |

---

## 10. Test results

### A. Batch checkpoint — PASS
- Atomic save + post-write validation
- Partial/malformed/duplicate responses not saved as PASS

### B. Interrupt / resume — PASS
- Confirmed batches skipped (`repeatedBatches = 0`, resumed API calls = 0)
- `duplicateFindings = 0`

### C. Fail-closed identity — PASS

### D. Restart determinism — PASS
- Continuous vs interrupted reconstruction: same `objectsProcessed`, same findings keys

### E. Regressions — PASS

| Command | Result |
|---------|--------|
| `npm run test:phase1-findings-validation` | PASS |
| `npm run test:phase1-coverage-gates` | PASS |
| `npm run test:phase1-f0-comp` | PASS |
| `npm run test:phase1-real-luna-transport` | PASS |
| `npm run test:phase1-dynamic-baseline-gate` | PASS |
| `npm run test:phase1-luna-checkpoint-resume` | PASS (31 assertions) |
| `npm run i18n:content:phase0-exit` | PASS |
| `npm run i18n:content:phase1-discovery -- --help` | PASS (new flags present) |
| `npm run i18n:content:phase1-discovery -- --skip-luna --all-groups --dataset all --all-langs` | PASS, `lunaCalls: 0` |
| `npm run i18n:content:phase1-exit` ×2 | PASS, deterministic |

---

## 11. Safety gates

| Check | Result |
|-------|--------|
| Production diff | 0 |
| DE changes | 0 |
| Translation/content changes | 0 |
| Secrets committed | 0 |
| Full-discovery real Luna calls (this branch) | 0 |
| Terra calls | 0 |
| Hardcoded baseline SHA in `scripts/**` | 0 |

---

## 12. Known remaining risks

1. **Full 318-scope run not executed** on this branch (by design). Post-merge single-object real-Luna smoke still required.
2. **Lock on shared runner:** if host crashes without signal handler, operator must verify manifest/heartbeat before manual lock removal.
3. **`lunaObjectLimit` test slices** change batch composition — production full runs must use full object sets for identity hashes.
4. **OWNER review + merge** required before restarting full discovery.

---

## 13. Next steps (out of scope for this PR)

1. OWNER review of this infrastructure PR  
2. Merge to `main`  
3. Post-merge controlled real-Luna smoke (1 object)  
4. Only then: full 318-scope discovery with `--with-luna`

---

**Gala verdikts:** `PHASE1_CHECKPOINT_RESUME_READY_FOR_OWNER_REVIEW`
