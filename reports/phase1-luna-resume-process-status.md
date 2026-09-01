# Phase 1 Luna Resume — Process Status (follow-up)

Captured: 2026-09-01T06:13 UTC

## Running process (do not interrupt)

| Field | Value |
|---|---|
| PID | `213805` |
| Parent | `213804` (sh wrapper) |
| Command | `node scripts/run-phase1-discovery.js --with-luna --resume-luna --resume-run-id phase1-2026-08-30T08-56-50-163Z-a8e1dec1 --all-groups --dataset all --all-langs` |
| CWD | `/workspace` |
| tmux session | `phase1-luna-resume` |
| Started (approx) | 2026-09-01T05:48 UTC |
| HEAD at start | `7ec7e924` (pre–R-AUTH-001; process uses code loaded at start) |
| Log | `/tmp/phase1-luna-resume-run2.log` |

## Progress snapshot

| Metric | Value |
|---|---|
| RUN_ID | `phase1-2026-08-30T08-56-50-163Z-a8e1dec1` |
| currentScopeId | `g2/a2/bs` (wall-clock failure scope #2) |
| realCalls (cumulative) | 6896 (+33 since resume start at 6863) |
| tokensUsed | 30,462,269 |
| retries | 52 |
| total checkpoints on disk | 6912+ |
| latest checkpoint | `g2_a2_bs/batch-57-*.json` @ 06:13 UTC |

## Resume continuation (if process stops)

After R-AUTH-001, any new resume invocation requires:

```bash
npm run i18n:content:phase1-discovery -- \
  --with-luna --resume-luna \
  --resume-run-id phase1-2026-08-30T08-56-50-163Z-a8e1dec1 \
  --approved-infra-head-sha <EXPLICIT_APPROVED_INFRA_HEAD_SHA> \
  --all-groups --dataset all --all-langs
```

Use clean worktree; `git checkout HEAD -- reports/` if discovery run dirtied report files.

## Safety

```text
SECOND_PARALLEL_RESUME = false
FRESH_LUNA_RUN = false
PRODUCTION_DIFF = 0
DE_DIFF = 0
```
