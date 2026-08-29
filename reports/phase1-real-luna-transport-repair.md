# Phase 1 Real Luna Transport — Infrastructure Repair Report

**Generated:** 2026-08-29T11:15:00Z  
**Branch:** `cursor/phase1-real-luna-transport`  
**PR:** *(Draft — see push)*  
**Baseline (`origin/main`):** `f933a854211997df6bd9328018d549afeebd2673`  
**Blocked by (PR #699):** CLI `allowWithLuna=false`, mock-only transport, no OpenAI path

------------------------------------------------------------------------

## 1. SHA identity

| Field | Full SHA (40 chars) |
|-------|---------------------|
| `BASELINE_SHA` | `f933a854211997df6bd9328018d549afeebd2673` |
| `IMPLEMENTATION_SHA` | `e829b0e63c042579176b40f6a807f63789ad54b2` |
| `FINAL_PR_HEAD_SHA` | `e829b0e63c042579176b40f6a807f63789ad54b2` |

------------------------------------------------------------------------

## 2. Blockers BEFORE → AFTER

| Blocker (PR #699) | BEFORE | AFTER |
|-------------------|--------|-------|
| **B1** CLI `allowWithLuna: false` | `--with-luna` always threw / exit 1 | `authorizeWithLunaDiscovery()` gates; on PASS sets `allowWithLuna: true` + REAL transport |
| **B2** Mock-only `luna-transport.js` | Both branches returned mock | `createLunaTransport({ mode: 'mock' \| 'real' })` — explicit separation |
| **B3** No OpenAI path for Phase 1 | Adapters used mock DI only | `luna-phase1-openai.js` → `auditObjectsBatch()` via `openai` `responses.create`, model `gpt-5.6-luna`, strict JSON parsing |

------------------------------------------------------------------------

## 3. Changed files

| File | Change |
|------|--------|
| `scripts/lib/luna-phase1-openai.js` | **NEW** — real GPT-5.6 Luna client, strict response validation, secret redaction |
| `scripts/lib/luna-transport.js` | Mock + REAL transports; `transport=MOCK\|REAL` |
| `scripts/lib/phase1-luna-authorize.js` | **NEW** — Phase 0 exit + baseline + API key + production diff gates |
| `scripts/lib/luna-adapter-runner.js` | Duplicate ID detection; `lunaObjectLimit`; real/mock transport selection |
| `scripts/lib/luna-orchestrator.js` | Real transport wiring |
| `scripts/run-phase1-discovery.js` | CLI authorization; `lunaStats.transport=REAL\|MOCK`; token aggregation |
| `scripts/run-phase0-exit-matrix.js` | Export `runPhase0ExitEvaluation()` for authorize module |
| `scripts/run-phase1-real-luna-smoke.js` | **NEW** — controlled 1-object real-call smoke |
| `scripts/test-phase1-real-luna-transport.js` | **NEW** — mock/real DI/CLI/authorize tests |
| `package.json` | `test:phase1-real-luna-transport`, `i18n:content:phase1-real-luna-smoke` |
| `reports/phase1-real-luna-transport-repair.md` | This report |

------------------------------------------------------------------------

## 4. Mock / real mode table

| Mode | Trigger | API calls | `transport` | `realCalls` |
|------|---------|-----------|-------------|-------------|
| **NOT_RUN** | default / `--skip-luna` | 0 | `NOT_RUN` | 0 |
| **MOCK** | tests / `lunaMockIntegration` | 0 | `MOCK` | 0 |
| **REAL** | `--with-luna` after authorize PASS | > 0 | `REAL` | > 0 |

`--skip-luna` does not read or require `OPENAI_API_KEY`.

------------------------------------------------------------------------

## 5. CLI authorization gates (`--with-luna`)

All must PASS before REAL transport:

| Gate | Check |
|------|-------|
| Baseline SHA | `origin/main` = `f933a854…` |
| Baseline gate | `runBaselineGate().verdict === PASS` |
| Phase 0 exit | `runPhase0ExitEvaluation()` → `phase0Complete` + F0-1…F0-8 PASS |
| API key | `OPENAI_API_KEY` configured (never logged) |
| Production diff | `gitProductionDiffAgainstBaseline` clean |
| User intent | explicit `--with-luna` flag |

On FAIL: exit code **1**, `BLOCKED: <CODE>`, Luna calls **0**, no mock fallback.

------------------------------------------------------------------------

## 6. Test results

| Suite | Result |
|-------|--------|
| `npm run test:phase1-real-luna-transport` | **PASS** |
| `npm run test:phase1-findings-validation` | **PASS** |
| `npm run test:phase1-coverage-gates` | **PASS** |
| `npm run test:phase1-f0-comp` | **PASS** |
| `npm run i18n:content:phase0-exit` | **PASS** |
| `npm run i18n:content:phase1-discovery -- --skip-luna --all-groups --dataset all --all-langs` | **PASS** (320/320, lunaCalls=0) |
| `npm run i18n:content:phase1-exit` ×2 | **PASS** (deterministic) |

### Real transport tests (DI — no paid API in unit tests)

| Test | Result |
|------|--------|
| Request format / batch dispatch | **PASS** |
| Missing object → FAIL | **PASS** |
| Duplicate object → FAIL | **PASS** |
| Malformed JSON/schema → FAIL | **PASS** |
| Timeout → retry (no real wait in mock path) | **PASS** |
| Token + realCalls accounting | **PASS** |
| CLI `--with-luna` without API key → blocked | **PASS** |
| CLI `--skip-luna` → lunaCalls=0 | **PASS** |

------------------------------------------------------------------------

## 7. Controlled real-call smoke

**Command:** `npm run i18n:content:phase1-real-luna-smoke`

| Metric | Value |
|--------|-------|
| Verdict | **REAL_LUNA_SMOKE_PASS** |
| Scope | `g2/a1/et` |
| Objects | 1 (limited batch) |
| `transport` | **REAL** |
| Model | **gpt-5.6-luna** |
| `realCalls` | **1** |
| `batches` | **1** |
| `retries` | **0** |
| `objectsExpected` | **1** |
| `objectsReturned` | **1** |
| `tokensUsed` | **406** |
| missing / duplicates / malformed | **0** |
| API key in output | **no** (redaction helper) |
| Production diff | **0** |
| DE changes | **0** |

Raw response saved under `reports/temp/phase1-luna/` (not committed).

------------------------------------------------------------------------

## 8. Regression metrics (skip-Luna smoke)

| Metric | Value |
|--------|-------|
| Scope | **320/320** |
| Inventory | **309/309** |
| Multi-scan | **309/309** |
| G1 sentences `g1/sentences/da` | **796/796** |
| Luna real calls (skip-Luna) | **0** |
| Determinism | **PASS** |
| Production diff | **0** |
| DE changes | **0** |
| Unexpected changes | **0** (scripts + report only) |
| Secrets committed | **0** |

------------------------------------------------------------------------

## 9. Remaining risks

1. Full **318-scope** Luna discovery not run in this PR (by design).
2. Per-adapter prompt tuning may need dataset-specific refinement during full Phase 1 run.
3. API rate limits / cost at full scale — monitor `phase1-luna-stats.json` during discovery.
4. PR #699 remains historical BLOCKED record — unchanged.

------------------------------------------------------------------------

## 10. Final verdict

```
REAL_LUNA_INFRASTRUCTURE_READY_FOR_OWNER_REVIEW
```

Real transport implemented; unit/integration tests PASS; controlled real-call smoke PASS with `gpt-5.6-luna`, `realCalls=1`, full object coverage on 1-object batch.

**Not claimed:** Phase 1 discovery complete, OWNER_ACCEPTED, or full 318-scope Luna coverage.

------------------------------------------------------------------------

**Report:** `reports/phase1-real-luna-transport-repair.md`  
**Baseline:** `f933a854211997df6bd9328018d549afeebd2673`
