# MASTER 1.12 — Phase 1 Luna 98 Failures Infrastructure Repair

## Identity

| Field | Value |
|---|---|
| ORIGIN_MAIN_SHA | `6cfb96105f7f741f6052d20ee1d1e342f198fda2` |
| PR_704_HEAD_SHA | `059b9566ed125e9bfee67ca1dbb6d359138bf921` |
| REPAIR_BASE_SHA | `059b9566ed125e9bfee67ca1dbb6d359138bf921` |
| DISCOVERY_BASELINE_SHA | `6cfb96105f7f741f6052d20ee1d1e342f198fda2` |
| RUN_ID | `phase1-2026-08-30T08-56-50-163Z-a8e1dec1` |
| MODEL | `gpt-5.6-luna` |
| IMPLEMENTATION_SHA | `2a3aa67e472c383c4b65fc6a2371418e7e1d91d5` |
| FINAL_PR_HEAD_SHA | `2a3aa67e472c383c4b65fc6a2371418e7e1d91d5` |
| BRANCH | `cursor/phase1-luna-infra-repair-6338` |
| Draft PR | https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/705 |

## Root cause

### BATCH_WALL_CLOCK_EXCEEDED (90 scope failures)

`batchStart = Date.now()` was set once per scope before the batch loop in `scripts/lib/luna-adapter-runner.js`. G2 scopes run ~29 batches at ~30–40s each; cumulative elapsed time on later batches falsely exceeded the 10-minute `BATCH_WALL_CLOCK_MS` limit.

**Fix:** Per-batch `batchWallStart = Date.now()` reset inside the batch loop. Optional `batchWallClockMs` override for tests only.

### duplicate id: Gehalt (8 scope failures)

All `g2/b1/{cs,fi,it,lb,lv,nl,sl,sv}` — cards at indices 1027 and 1028 share `de: "Gehalt"` (das vs der). `entryId()` returns `card.de`, colliding in the same Luna batch. `parsePhase1LunaResponseStrict` rejects duplicate response ids.

**Fix:** Canonical Luna request id (`scopeId|idx:N|raw:Gehalt|src:b1.js`) via `scripts/lib/phase1-luna-checkpoint/object-identity.js`. Legacy ids frozen for checkpoint `expectedObjectIds`, `stableBatchId`, and `objectIdsHash`. Separate legacy checkpoint payload hash vs canonical Luna API payload.

## Changed infrastructure files

| File | Change |
|---|---|
| `scripts/lib/luna-adapter-runner.js` | Per-batch wall clock; dual checkpoint/Luna payloads |
| `scripts/lib/phase1-luna-checkpoint/object-identity.js` | **NEW** — canonical + legacy identity |
| `scripts/lib/phase1-luna-checkpoint/runner.js` | Canonical Luna serialize; legacy checkpoint serialize |
| `scripts/lib/phase1-luna-checkpoint/batch-checkpoint.js` | Positional returned-id validation; legacy id resolution |
| `scripts/lib/phase1-luna-checkpoint/findings.js` | Finding dedup uses `idx:N` canonical position |
| `scripts/lib/phase1-luna-checkpoint/manifest.js` | `getObjectId` → `getLegacyObjectId` |
| `scripts/lib/luna-g2-reuse.js` | Canonical serialize for Luna API |
| `scripts/build-phase1-luna-98-failures-audit.js` | **NEW** — read-only 98-failure audit |
| `scripts/test-phase1-luna-infra-repair.js` | **NEW** — 26 infra repair assertions |

## Before → After (pre-resume)

| Metric | Before | After (repair) |
|---|---:|---:|
| Luna attempted | 318 | 318 |
| Luna succeeded | 220 | 220 (pending resume) |
| Luna failed | 98 | 98 (pending resume) |
| Wall-clock failures | 90 | 90 (pending resume) |
| Duplicate-ID failures | 8 | 8 (pending resume) |
| Recalled completed batches | — | 0 (verified in tests) |
| Recalled completed objects | — | 0 (verified in tests) |

## Tests (all PASS)

| Command | Exit | Assertions |
|---|---|---|
| `npm run test:phase1-luna-infra-repair` | 0 | 26/26 |
| `npm run test:phase1-luna-checkpoint-resume` | 0 | 94 (R-CKPT-002) |
| `npm run test:phase1-f0-comp` | 0 | PASS |
| `npm run test:phase1-findings-validation` | 0 | PASS |
| `npm run test:phase1-coverage-gates` | 0 | PASS |
| `npm run test:phase1-dynamic-baseline-gate` | 0 | PASS |

## Safety

```text
PRODUCTION_DIFF = 0
DE_DIFF = 0
CROWDIN_CHANGES = 0
TRANSLATION_CHANGES = 0
RAW_API_COMMITTED = 0
CHECKPOINTS_COMMITTED = 0
SECRETS_COMMITTED = 0
FRESH_LUNA_RUNS = 0
```

## Resume command (authorized)

```bash
npm run i18n:content:phase1-discovery -- \
  --with-luna --resume-luna \
  --resume-run-id phase1-2026-08-30T08-56-50-163Z-a8e1dec1 \
  --all-groups --dataset all --all-langs
```

## Verdict

```text
PHASE_1_INFRA_REPAIR_COMPLETE (code + tests)
REAL_RESUME = IN_PROGRESS (tmux: phase1-luna-resume; first scope g2/a2/bg writing new checkpoints)
PHASE_1_EXIT = PENDING (after 318/318 resume completes)
PHASE_2_NOT_AUTHORIZED
```
