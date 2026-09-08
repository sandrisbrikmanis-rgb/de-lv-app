# G2/A1 Phase 3 — authorized `is` resume (V5)

**Classification:** `TARGETED_IS_FAILURE_REPAIR_V5_RESUME_COMPLETE`  
**Authorization:** `TARGETED_IS_FAILURE_REPAIR_V5_APPROVED`  
**Generated:** 2026-09-08T09:16:05Z

## Preflight (READ-ONLY)

| Check | Result |
|-------|--------|
| Checkpoint `progress.json` | PASS (30/31) |
| Findings files | PASS (30 cached) |
| Missing lang | `is` |
| Staging export | PASS (31 langs, 92101 values) |
| Production diff | 0 |
| Active discovery process | none |
| OpenAI key | configured |

## Resume

| Metric | Before | After | Delta |
|--------|--------|-------|-------|
| Completed langs | 30 | 31 | +1 (`is`) |
| Luna calls | 1520 | 1586 | +66 |
| Tokens | 6,663,032 | 6,902,605 | +239,573 |
| Retries | 20 | 36 | +16 |
| Scopes processed | 30/31 | 31/31 | +1 |
| Failures | — | [] | — |

**Command:** `npm run phase3:g2-a1:resume` (no `--fresh-luna`)

## Post-resume gates

| Gate | Status |
|------|--------|
| `is-findings.json` | created (691 findings) |
| Discovery classification | `G2_A1_PHASE3_FULL_DISCOVERY_NEEDS_OWNER_REVIEW` |
| Coverage | 100% (31/31) |
| Validated findings | 22,750 |
| OWNER-PREP generated | yes |
| OWNER artifact coverage | 100% |
| Production/DE diff | 0 |
| Exit code | 0 |

## Artifacts

- `reports/g2-a1-phase3-full-discovery.{md,json}`
- `reports/g2-a1-phase3-owner-*` (5 files)
- `reports/temp/g2-a1-phase3-luna-runs/` (checkpoint + 31 `*-findings.json`)
