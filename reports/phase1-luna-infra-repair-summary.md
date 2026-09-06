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
| IMPLEMENTATION_SHA | `7ec7e924c386dbbaffb235ab292a81745fe4b6d2` (pre–R-AUTH-001; see PR body for latest) |
| REPORT_COMMIT_SHA | (this commit) |
| FINAL_PR_HEAD_SHA | `SEE_PR_BODY` |
| BRANCH | `cursor/phase1-luna-infra-repair-6338` |
| Draft PR | https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/705 |

> **R-REPORT-001:** `FINAL_PR_HEAD_SHA` is maintained in PR #705 body after all commits land; committing a self-referential SHA here would be stale on the next commit.

## Root cause

### BATCH_WALL_CLOCK_EXCEEDED (90 scope failures)

`batchStart = Date.now()` was set once per scope before the batch loop in `scripts/lib/luna-adapter-runner.js`. G2 scopes run ~29 batches at ~30–40s each; cumulative elapsed time on later batches falsely exceeded the 10-minute `BATCH_WALL_CLOCK_MS` limit.

**Fix:** Per-batch `batchWallStart = Date.now()` reset inside the batch loop.

### duplicate id: Gehalt (8 scope failures)

All `g2/b1/{cs,fi,it,lb,lv,nl,sl,sv}` — cards at indices 1027 and 1028 share `de: "Gehalt"`. `entryId()` returns `card.de`, colliding in the same Luna batch.

**Fix:** Canonical Luna request id via `object-identity.js`; legacy checkpoint ids frozen.

## R-AUTH-001 (resume authorization)

Resume requires explicit `--approved-infra-head-sha <sha>`. `WORKING_TREE_DIRTY` always blocks. Phase 0 validated read-only from frozen `reports/phase0-exit.json` (no report rewrite).

## Tests

| Command | Status |
|---|---|
| `npm run test:phase1-luna-resume-auth` | R-AUTH-001 matrix |
| `npm run test:phase1-luna-infra-repair` | 26+ assertions |
| `npm run test:phase1-luna-checkpoint-resume` | 94 (R-CKPT-002) |
| Phase 0/1 regression suite | required PASS |

## Safety

```text
PRODUCTION_DIFF = 0
DE_DIFF = 0
FRESH_LUNA_RUNS = 0
CHECKPOINTS_COMMITTED = 0
```

## Resume command (authorized)

```bash
npm run i18n:content:phase1-discovery -- \
  --with-luna --resume-luna \
  --resume-run-id phase1-2026-08-30T08-56-50-163Z-a8e1dec1 \
  --approved-infra-head-sha <EXPLICIT_APPROVED_INFRA_HEAD_SHA> \
  --all-groups --dataset all --all-langs
```

## Verdict

See PR #705 body for current `REAL_RESUME` and Phase 1 exit status.
