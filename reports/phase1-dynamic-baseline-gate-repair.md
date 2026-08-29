# Phase 1 Dynamic Baseline Gate — Targeted Repair

**Date:** 2026-08-29  
**Baseline (`origin/main`):** `b55e44538567a69588481ef207b9853177b0719f`  
**Branch:** `cursor/phase1-dynamic-baseline-gate-repair`  
**Governing docs:** `MASTER_1.12_BINDING_WORK_AGREEMENT.md`, `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md`, PR #700 OWNER review

---

## 1. Problem (post-merge regression)

PR #700 merged real Luna transport with a **hardcoded** baseline SHA:

```js
const EXPECTED_BASELINE_SHA = "f933a854211997df6bd9328018d549afeebd2673";
```

After merge, `origin/main` advanced to `b55e44538567a69588481ef207b9853177b0719f`, causing:

| Symptom | Evidence |
|---------|----------|
| `test:phase1-real-luna-transport` FAIL on `main` | `BASELINE_SHA_MISMATCH` blocker |
| `--with-luna` blocked | `authorizeWithLunaDiscovery()` exit 1 |
| Post-merge real-call smoke blocked | `REAL_LUNA_SMOKE_BLOCKED` |

Replacing the constant with `b55e445…` is **explicitly forbidden** — would repeat after every merge.

---

## 2. Repair approach

### Removed

- `EXPECTED_BASELINE_SHA` constant
- `allowAnyBaselineSha` test bypass
- All hardcoded main/baseline commit SHA checks in `scripts/**` (**count after repair: 0**)

### Added: `scripts/lib/phase1-git-identity.js`

Dynamic, fail-closed resolver `resolvePhase1GitIdentity(deps)` returns:

| Field | Meaning |
|-------|---------|
| `headSha` | 40-char hex HEAD |
| `originMainSha` | 40-char hex `origin/main` after fetch |
| `headMatchesOriginMain` | `HEAD === origin/main` |
| `workingTreeClean` | `git status --porcelain` empty |
| `productionDiffClean` | production paths diff `0` vs `origin/main` |
| `deDiffClean` | DE paths diff `0` vs `origin/main` |
| `fetchStatus` | `PASS` / `FAIL` |

Dependency-injectable (`git`, `fetchOriginMain`, diff fns) — unit tests use **no network**.

### Updated: `scripts/lib/phase1-luna-authorize.js`

Authorization order (fail-closed):

1. Dynamic git identity (fetch, SHA match, clean tree, prod/DE diff)
2. Baseline gate (unmerged closure, etc.)
3. Phase 0 live evaluation on same HEAD (`evaluatedHeadSha` must match identity `headSha`)
4. API key configured
5. `--with-luna` only (caller responsibility)

### Updated: `scripts/run-phase0-exit-matrix.js`

- Returns `evaluatedHeadSha` captured at evaluation start
- Authorization fails with `PHASE_0_HEAD_SHA_MISMATCH` if checkout moves during evaluation

---

## 3. Fail-closed scenarios (tested)

| Scenario | Result |
|----------|--------|
| HEAD = current origin/main | PASS |
| origin/main advances, HEAD follows | PASS |
| HEAD stale, origin/main advanced | FAIL (`HEAD_NOT_AT_ORIGIN_MAIN`) |
| HEAD ahead of origin/main (feature branch) | FAIL |
| fetch fails | FAIL |
| origin/main SHA unresolvable | FAIL |
| HEAD SHA unresolvable | FAIL |
| SHA not 40-char hex | FAIL |
| working tree dirty / staged changes | FAIL |
| production diff ≠ 0 | FAIL |
| DE diff ≠ 0 | FAIL |
| Phase 0 FAIL | FAIL |
| Phase 0 evaluated SHA ≠ HEAD | FAIL |
| no API key | FAIL |
| no `--with-luna` | real calls 0 |
| any gate FAIL | real calls 0, no mock fallback |

---

## 4. Post-merge simulation test (mandatory)

`scripts/test-phase1-dynamic-baseline-gate.js` → `testPostMergeSimulation()`:

1. `origin/main = SHA_A`, `HEAD = SHA_A` → **PASS**
2. Merge: `origin/main = SHA_B`, `HEAD = SHA_B` → **PASS** (no code/constant change)
3. `HEAD` stays `SHA_A`, `origin/main = SHA_B` → **FAIL**

**Result:** **PASS**

---

## 5. Regression tests

| Command | Exit | Notes |
|---------|------|-------|
| `npm run test:phase1-findings-validation` | 0 | PASS |
| `npm run test:phase1-coverage-gates` | 0 | PASS |
| `npm run test:phase1-f0-comp` | 0 | PASS (796/796) |
| `npm run test:phase1-real-luna-transport` | 0 | PASS (includes gate suite) |
| `npm run test:phase1-dynamic-baseline-gate` | 0 | PASS |
| `npm run i18n:content:phase0-exit` | 0 | **PHASE_0_COMPLETE** |
| `npm run i18n:content:phase1-discovery -- --help` | 0 | PASS |
| `npm run i18n:content:phase1-discovery -- --skip-luna ...` | 0 | 320/320, `lunaCalls: 0` |
| `npm run i18n:content:phase1-exit` ×2 | 0 | determinism PASS |

Metrics: inventory **309/309**, multi-scan **309/309**, production diff **0**, DE **0**, secrets **0**.

---

## 6. Real-call policy (this PR)

Per repair spec: **no real API calls** on unmerged repair branch (`HEAD !== origin/main`).

- Transport verified via dependency injection only
- No authorization bypass, `--force`, or test backdoors added
- One-object real smoke deferred until **after merge to `main`**

---

## 7. Changed files

| File | Change |
|------|--------|
| `scripts/lib/phase1-git-identity.js` | **NEW** — dynamic resolver |
| `scripts/lib/phase1-luna-authorize.js` | Remove hardcoded SHA; use resolver |
| `scripts/run-phase0-exit-matrix.js` | `evaluatedHeadSha` |
| `scripts/test-phase1-dynamic-baseline-gate.js` | **NEW** — gate + simulation tests |
| `scripts/test-phase1-real-luna-transport.js` | DI-based auth tests; run gate suite |
| `package.json` | `test:phase1-dynamic-baseline-gate` script |

---

## 8. Residual risks

| ID | Severity | Risk | Mitigation |
|----|----------|------|------------|
| R-DBG-001 | Low | `--with-luna` requires clean tree on `main` (reports from prior runs block) | Document: reset/stash before real Luna on `main` |
| R-DBG-002 | Info | Real smoke not run in this PR | Run post-merge on `main` after OWNER review |

---

## 9. Verdict

**`DYNAMIC_BASELINE_GATE_READY_FOR_OWNER_REVIEW`**

---

## 10. Machine-readable summary

```json
{
  "baselineSha": "b55e44538567a69588481ef207b9853177b0719f",
  "hardcodedShaCountAfterRepair": 0,
  "dynamicResolverStatus": "IMPLEMENTED",
  "headEqualsOriginMainGateStatus": "PASS",
  "postMergeSimulationStatus": "PASS",
  "regressionTestsStatus": "PASS",
  "productionDiff": 0,
  "deChanges": 0,
  "unexpectedChanges": 0,
  "secrets": 0,
  "verdict": "DYNAMIC_BASELINE_GATE_READY_FOR_OWNER_REVIEW"
}
```
