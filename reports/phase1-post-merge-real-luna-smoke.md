# Phase 1 Post-Merge Real-Luna Smoke Report

**Date:** 2026-08-30  
**PR merged:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/702  
**Task:** Controlled post-merge real-Luna smoke (not full discovery)

---

## 1. Merge identity

| Field | SHA / value |
|-------|-------------|
| `PRE_MERGE_MAIN_SHA` | `fc822e8db76af40740073d90cc51873c80037354` |
| `REVIEWED_CODE_SHA` | `18b069f8377fa30771bc1a7e7d22dc9e9ddb8041` |
| `FINAL_PR_HEAD_SHA` | `d31b62aeeb69468c7c4933b3c5fd827fbc2e2aa6` |
| `MERGE_COMMIT_SHA` | `cff197cbd3da8317b47042a52c3fa232b7c7a05c` |
| `POST_MERGE_MAIN_SHA` | `cff197cbd3da8317b47042a52c3fa232b7c7a05c` |
| `MERGE_METHOD` | **merge** (GitHub merge commit) |
| `PR_702_STATUS` | **MERGED** (2026-08-30T08:26:11Z) |

### Pre-merge drift check

`git diff --name-only 18b069f8..d31b62ae` → only `reports/phase1-luna-checkpoint-resume-owner-review.md` (allowed).

### Post-merge main verification

| Check | Result |
|-------|--------|
| `HEAD` = `origin/main` | **PASS** (`cff197cb`) |
| `WORKTREE` (tracked) | **CLEAN** (untracked temp smoke artifact only) |
| `PR_HEAD_ANCESTOR_OF_MAIN` | **PASS** (`d31b62ae` ancestor of `origin/main`) |

---

## 2. Pre-merge gates (recorded)

| Gate | Value |
|------|-------|
| `CODE_OWNER_VERDICT` | `OWNER_ACCEPTED_FOR_MERGE` |
| `R-CKPT-002` | `CLOSED` |
| PR mergeable | `true` |
| PR state | `open` → ready → merged |
| PR HEAD | `d31b62ae` |

`R-CKPT-001` and `R-CKPT-003` remain documented non-blocking (not repaired in this task).

---

## 3. Pre-smoke gates (on `main` @ `cff197cb`)

| Command | Exit | Result |
|---------|------|--------|
| `npm run i18n:content:phase0-exit` | **0** | `PHASE_0_COMPLETE` |
| `npm run test:phase1-dynamic-baseline-gate` | **0** | PASS |
| `npm run test:phase1-luna-checkpoint-resume` | **0** | PASS (94 assertions) |

| Gate | Result |
|------|--------|
| Phase 0 | **PASS** |
| `originMainSha` in phase0-exit | `cff197cbd3da8317b47042a52c3fa232b7c7a05c` (= `POST_MERGE_MAIN_SHA`) |
| `HEAD == origin/main` | **PASS** |
| Production diff | **0** |
| DE diff | **0** |
| Worktree (for smoke auth) | Restored to clean tracked state before smoke |

---

## 4. Controlled real-Luna smoke

**Command (exact):**

```bash
npm run i18n:content:phase1-real-luna-smoke
```

**Script:** `scripts/run-phase1-real-luna-smoke.js`

### Scope constraints (enforced by script)

| Parameter | Value |
|-----------|-------|
| `scopeId` | `g2/a1/et` |
| `objectsExpected` | **1** (`lunaObjectLimit: 1`) |
| `batchSize` | **1** |
| `model` | `gpt-5.6-luna` |
| `transport` | **REAL** |

### Smoke result (stdout JSON)

```json
{
  "verdict": "REAL_LUNA_SMOKE_PASS",
  "transport": "REAL",
  "model": "gpt-5.6-luna",
  "scopeId": "g2/a1/et",
  "objectsExpected": 1,
  "objectsReturned": 1,
  "realCalls": 1,
  "batches": 1,
  "retries": 0,
  "tokensUsed": 551,
  "missing": 0,
  "reason": null,
  "productionDiffClean": true,
  "deDiffClean": true
}
```

| Metric | Expected | Actual | Match |
|--------|----------|--------|-------|
| `verdict` | `REAL_LUNA_SMOKE_PASS` | `REAL_LUNA_SMOKE_PASS` | ✓ |
| `transport` | `REAL` | `REAL` | ✓ |
| `objectsExpected` | 1 | 1 | ✓ |
| `objectsReturned` | 1 | 1 | ✓ |
| `realCalls` | 1 | 1 | ✓ |
| `batches` | 1 | 1 | ✓ |
| `missing` | 0 | 0 | ✓ |
| `productionDiffClean` | true | true | ✓ |
| `deDiffClean` | true | true | ✓ |
| `exitCode` | 0 | **0** | ✓ |

**No scope expansion:** `realCalls ≤ 1`, `objectsExpected ≤ 1`.

### Smoke scope boundary (important)

This smoke validates **real transport**, **GPT-5.6 Luna availability**, **single-object request/response**, **baseline authorization**, and **production/DE diff safety** via `runLunaForScope` — **not** the full checkpoint/resume infrastructure under real transport.

Checkpoint/resume fail-closed behavior was proven in OWNER mock/fixture review (`18b069f8`). This smoke does **not** re-prove checkpoint write/skip/resume on REAL transport.

---

## 5. Post-smoke safety

| Check | Result |
|-------|--------|
| Tracked working-tree changes | **0** (after restoring incidental report writes) |
| Production changes (`data`, `www/data`, `languages`, `crowdin/content`) | **0** |
| DE changes | **0** |
| Translation changes | **0** |
| Secrets committed | **0** |
| Full discovery | **NOT_RUN** |

**Untracked temp artifact (not committed):** `reports/temp/phase1-luna/g2_a1_et/raw-batch-1.json` — raw API response from `writeRaw: true`; left in ignored temp path, not staged.

---

## 6. Prohibitions observed

| Prohibition | Status |
|-------------|--------|
| Full 318-scope discovery | **NOT_RUN** |
| `--all-groups --dataset all --all-langs` with Luna | **NOT_RUN** |
| Terra | **NOT_USED** |
| Second real-Luna retry | **NOT_RUN** (single call only) |
| Production/DE edits | **NONE** |
| Commit to `main` after merge | **NONE** (this report on separate branch) |

---

## 7. Final verdict

| Field | Value |
|-------|-------|
| **`PR_702_STATUS`** | **`MERGED`** |
| **`R-CKPT-002`** | **`CLOSED`** |
| **`POST_MERGE_REAL_LUNA_SMOKE`** | **`PASS`** |
| **`REAL_LUNA_CALLS`** | **1** |
| **`FULL_DISCOVERY`** | **`NOT_RUN`** |
| **`OPERATIONAL_VERDICT`** | **`READY_FOR_PHASE1_FULL_DISCOVERY_START_GATE`** |

**Note:** `READY_FOR_PHASE1_FULL_DISCOVERY_START_GATE` authorizes a **separate future task** to start full 318-scope discovery. It is **not** confirmation that full discovery has been executed.

---

## 8. Evidence paths

| Artifact | Path |
|----------|------|
| Smoke stdout capture | `/tmp/real-luna-smoke-out.json` |
| Raw response (untracked) | `reports/temp/phase1-luna/g2_a1_et/raw-batch-1.json` |
| This report | `reports/phase1-post-merge-real-luna-smoke.md` |
