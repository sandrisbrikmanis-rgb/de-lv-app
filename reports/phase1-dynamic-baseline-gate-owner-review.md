# Phase 1 Dynamic Baseline Gate — Independent OWNER Review

**Review type:** READ-ONLY OWNER review (no code/infrastructure changes)  
**Date:** 2026-08-29  
**Governing docs:** `MASTER_1.12_BINDING_WORK_AGREEMENT.md`, `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md`, PR #700 post-merge FAIL evidence, `reports/phase1-dynamic-baseline-gate-repair.md`  
**PR:** [#701](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/701) — `fix(phase1): dynamic baseline gate for real Luna authorization`  
**PR status at review:** OPEN, Draft, base `main`, not merged

---

## 1. SHA identity

| Field | SHA / status |
|-------|----------------|
| **EXPECTED_BASELINE_SHA** | `b55e44538567a69588481ef207b9853177b0719f` |
| **ORIGIN_MAIN_SHA** (verified `git fetch origin`) | `b55e44538567a69588481ef207b9853177b0719f` ✓ |
| **REVIEWED_CODE_SHA** (PR #701 HEAD at review start) | `0eb5d1eba0288afff7606ec959d02c4d3cceba4d` ✓ |
| **PR_701_HEAD_SHA** (GitHub `headRefOid`) | `0eb5d1eba0288afff7606ec959d02c4d3cceba4d` ✓ |

**HEAD match:** PASS — review proceeded.

| Field | SHA |
|-------|-----|
| **REPORT_COMMIT_SHA** | `9bfcec86` (report-only commit) |
| **FINAL_PR_HEAD_SHA** | `9bfcec86` |

---

## 2. Diff review (7 files, +715 / −45)

Baseline: `b55e44538567a69588481ef207b9853177b0719f` → HEAD: `0eb5d1eba0288afff7606ec959d02c4d3cceba4d`

| File | Atļautais mērķis | Faktiskās izmaiņas | Statuss |
|------|------------------|-------------------|---------|
| `scripts/lib/phase1-git-identity.js` | **NEW** — dynamic git identity resolver | Fetch, SHA validation, HEAD===origin/main, clean tree, prod/DE diff; DI for tests | **PASS** |
| `scripts/lib/phase1-luna-authorize.js` | Remove hardcoded SHA; use resolver | `EXPECTED_BASELINE_SHA` removed; `allowAnyBaselineSha` removed; identity-first gate | **PASS** |
| `scripts/run-phase0-exit-matrix.js` | Phase 0 SHA binding | `evaluatedHeadSha` from live `git rev-parse HEAD` at eval start | **PASS** |
| `scripts/test-phase1-dynamic-baseline-gate.js` | **NEW** — fail-closed + post-merge simulation | 17 scenarios, all DI (no network) | **PASS** |
| `scripts/test-phase1-real-luna-transport.js` | Update auth tests | DI-based `gitIdentity`; runs gate suite | **PASS** |
| `package.json` | Wire `test:phase1-dynamic-baseline-gate` | One script line | **PASS** |
| `reports/phase1-dynamic-baseline-gate-repair.md` | Implementation evidence | Repair report | **PASS** |

**Scope proof:**

| Check | Result |
|-------|--------|
| Changes limited to git identity / auth / Phase 0 SHA / tests / report | ✓ |
| Hardcoded baseline SHA under `scripts/**` | **0** (`rg EXPECTED_BASELINE_SHA f933a854 b55e445 allowAnyBaseline` → 0 in changed code) |
| New SHA allowlist | **0** |
| `--force` / `allowAnyBaselineSha` / env bypass / test backdoor in PR diff | **0** |
| production diff (PR vs `origin/main`) | **0** |
| DE changes | **0** |
| unexpected changes (non-scripts/package/reports) | **0** |
| secrets in PR diff | **0** (test fixture `sk-test-injected-key-for-gate-only` in gate test only) |

---

## 3. Dynamic resolver review (`phase1-git-identity.js`)

| Requirement | Evidence | Status |
|-------------|----------|--------|
| `git fetch origin main` (or fallback `git fetch origin`) | `fetchOriginMain()` via injectable `fetchFn`; exit code → `fetchStatus` | **PASS** |
| Fetch failure → FAIL | `GIT_FETCH_FAILED` blocker | **PASS** |
| Resolve `origin/main` SHA | `git rev-parse origin/main`; unresolved → `ORIGIN_MAIN_SHA_UNRESOLVED` | **PASS** |
| Resolve `HEAD` SHA | `git rev-parse HEAD`; unresolved → `HEAD_SHA_UNRESOLVED` | **PASS** |
| 40-char hex SHA required | `SHA40_HEX` regex; `ORIGIN_MAIN_SHA_INVALID` / `HEAD_SHA_INVALID` | **PASS** |
| `HEAD === origin/main` required | `HEAD_NOT_AT_ORIGIN_MAIN` when mismatch | **PASS** |
| Clean working tree | `git status --porcelain` empty; else `WORKING_TREE_DIRTY` | **PASS** |
| Staged changes = 0 | Porcelain `M ` prefix caught (`testStagedChangesDirty`) | **PASS** |
| Unstaged changes = 0 | Porcelain ` M` / `MM` caught by same check | **PASS** |
| Untracked files = 0 | Porcelain `??` caught by same check (no separate test; behavior verified in code) | **PASS** |
| Production diff = 0 | `gitProductionDiffAgainstBaseline`; `PRODUCTION_DIFF_NONZERO` | **PASS** |
| DE diff = 0 | `gitDeDiffAgainstBaseline`; `DE_DIFF_NONZERO` | **PASS** |
| Fail-closed | `pass: blockers.length === 0` | **PASS** |
| No API on failure | Resolver has no Luna/OpenAI calls | **PASS** |
| DI for tests | `deps.git`, `deps.fetchOriginMain`, `deps.originMainSha`, etc. | **PASS** |
| Unit tests no real network | All gate tests use `skipFetch: true` + injected deps | **PASS** |
| Shell command safety | Fixed command strings only; no user input interpolation | **PASS** |

**Resolver status:** **PASS (fail-closed)**

---

## 4. Authorization review (`phase1-luna-authorize.js`)

Gate order (all must PASS for `authorizeWithLunaDiscovery().pass`):

1. `resolvePhase1GitIdentity()` — fetch, SHAs, HEAD match, clean tree, prod/DE diff
2. `runBaselineGate()` — unmerged closure, DE on branch, etc.
3. `runPhase0ExitEvaluation({ writeReports: false })` — live Phase 0
4. `evaluatedHeadSha === identity.headSha` — `PHASE_0_HEAD_SHA_MISMATCH` on drift
5. `phase0Complete` + all F0 gates PASS
6. `OPENAI_API_KEY` configured
7. `--with-luna` (caller: `run-phase1-discovery.js` main only)

| Failure mode | Result | Verified |
|--------------|--------|----------|
| Any gate FAIL | `pass: false`, `blocker` set | DI tests ✓ |
| No mock fallback | No catch-to-mock in authorize | Code review ✓ |
| Repair branch `HEAD !== origin/main` | `HEAD_NOT_AT_ORIGIN_MAIN` | Live check: `head=0eb5d1eb`, `origin=b55e4453` → **BLOCKED** ✓ |
| CLI bypass | `run-phase1-discovery.js` has no `gitIdentity` / skip flags | Grep ✓ |

**Authorization status:** **PASS (fail-closed)**

---

## 5. Phase 0 SHA binding (`run-phase0-exit-matrix.js`)

| Requirement | Finding | Status |
|-------------|---------|--------|
| `evaluatedHeadSha` from actual checkout | `git rev-parse HEAD` at evaluation start | **PASS** |
| Not hardcoded | Live git call | **PASS** |
| Passed to authorization | `phase0.evaluatedHeadSha` compared to `identity.headSha` | **PASS** |
| F0-1…F0-8 logic unchanged | Only return wrapper adds `evaluatedHeadSha`; `evaluateExitCriteria` untouched | **PASS** |
| No stale report as sole truth | `writeReports: false` for auth path runs live eval | **PASS** |
| SHA mismatch → FAIL | `testAuthorizePhase0HeadMismatch` → `PHASE_0_HEAD_SHA_MISMATCH` | **PASS** |
| No cyclic self-PASS | Auth reads Phase 0; Phase 0 does not call auth | **PASS** |

**Phase 0 SHA binding status:** **PASS**

---

## 6. Fail-closed test matrix

Executed via `npm run test:phase1-dynamic-baseline-gate` + `npm run test:phase1-real-luna-transport`:

| Scenario | Expected | Result |
|----------|----------|--------|
| HEAD = origin/main | PASS | **PASS** |
| HEAD ≠ origin/main | FAIL | **PASS** (`HEAD_NOT_AT_ORIGIN_MAIN`) |
| Feature branch ahead of main | FAIL | **PASS** |
| Stale HEAD after new merge | FAIL | **PASS** (simulation step 3) |
| Fetch error | FAIL | **PASS** |
| Invalid origin/main SHA | FAIL | **PASS** |
| Invalid HEAD SHA | FAIL | **PASS** |
| Dirty working tree | FAIL | **PASS** |
| Staged changes | FAIL | **PASS** |
| Unstaged / untracked (porcelain) | FAIL | **PASS** (code path; staged test proves porcelain gate) |
| Production diff ≠ 0 | FAIL | **PASS** |
| DE diff ≠ 0 | FAIL | **PASS** |
| Phase 0 FAIL | FAIL | **PASS** |
| evaluatedHeadSha mismatch | FAIL | **PASS** |
| No API key | FAIL | **PASS** |
| No `--with-luna` | real calls 0 | **PASS** (`testCliSkipLunaZeroCalls`) |
| Any gate FAIL | real calls 0, no mock fallback | **PASS** |

---

## 7. Post-merge simulation review

`testPostMergeSimulation()` in `test-phase1-dynamic-baseline-gate.js`:

| Step | Action | Result |
|------|--------|--------|
| 1 | `origin/main = SHA_A`, `HEAD = SHA_A` | **PASS** |
| 2 | Merge: `origin/main = SHA_B`, `HEAD = SHA_B` | **PASS** (no code/constant change) |
| 3 | `HEAD = SHA_A`, `origin/main = SHA_B` | **FAIL** (`HEAD_NOT_AT_ORIGIN_MAIN`) |

**Additional proof:**

- SHA_A / SHA_B are synthetic test constants (`aaaa…` / `bbbb…`), not production allowlist
- Same `resolvePhase1GitIdentity()` logic for both SHAs
- `testAuthorizeFullPass` exercises full authorization path with injected identity (not resolver-only)
- No code change required after simulated merge

**Post-merge simulation status:** **PASS**

---

## 8. Regression tests

All executed on `REVIEWED_CODE_SHA` `0eb5d1eba0288afff7606ec959d02c4d3cceba4d`:

| Command | Exit | Result |
|---------|------|--------|
| `npm run test:phase1-findings-validation` | 0 | **PASS** |
| `npm run test:phase1-coverage-gates` | 0 | **PASS** |
| `npm run test:phase1-f0-comp` | 0 | **PASS** (796/796) |
| `npm run test:phase1-real-luna-transport` | 0 | **PASS** |
| `npm run test:phase1-dynamic-baseline-gate` | 0 | **PASS** |
| `npm run i18n:content:phase0-exit` | 0 | **PHASE_0_COMPLETE** |
| `npm run i18n:content:phase1-discovery -- --help` | 0 | **PASS** |
| `npm run i18n:content:phase1-discovery -- --skip-luna ...` | 0 | **320/320**, `lunaCalls: 0` |
| `npm run i18n:content:phase1-exit` ×2 | 0 | **PASS** (determinism) |

| Metric | Expected | Observed |
|--------|----------|----------|
| Scope | 320/320 | **320/320** |
| Inventory | 309/309 | **309/309** |
| Multi-scan | 309/309 | **309/309** |
| G1 sentences | 796/796 | **796/796** |
| Skip-Luna real calls | 0 | **0** |
| production diff | 0 | **0** |
| DE changes | 0 | **0** |
| secrets | 0 | **0** |

**No real Luna API calls** in this review (per spec).

---

## 9. Repair-branch authorization (expected behavior)

On unmerged PR #701 (`HEAD=0eb5d1eb` ≠ `origin/main=b55e4453`):

```json
{ "pass": false, "blocker": "HEAD_NOT_AT_ORIGIN_MAIN" }
```

This is **correct and expected** — not a review FAIL.

---

## 10. Risks

| ID | Severity | Risk | Mitigation |
|----|----------|------|------------|
| R-DBG-003 | Low | `--with-luna` on `main` requires clean working tree (report artifacts block) | Document stash/reset before real Luna |
| R-DBG-004 | Info | Real smoke not run until post-merge on `main` | `OPERATIONAL_VERDICT` remains pending |

No repair mapping required.

---

## 11. Final verdicts

### Code OWNER verdict

# `CODE_OWNER_VERDICT = OWNER_ACCEPTED_FOR_MERGE`

### Operational verdict

# `OPERATIONAL_VERDICT = PENDING_POST_MERGE_REAL_SMOKE`

Real Luna is **not** claimed fully post-merge verified until one-object smoke runs on `main` after PR #701 merge.

PR #701 remains **Draft** per review instructions. PR #699 unchanged (OPEN, Draft).

---

## 12. Machine-readable summary

```json
{
  "ORIGIN_MAIN_SHA": "b55e44538567a69588481ef207b9853177b0719f",
  "REVIEWED_CODE_SHA": "0eb5d1eba0288afff7606ec959d02c4d3cceba4d",
  "hardcodedShaCount": 0,
  "resolverStatus": "PASS",
  "authorizationStatus": "PASS",
  "phase0ShaBindingStatus": "PASS",
  "postMergeSimulationStatus": "PASS",
  "regressionTestsStatus": "PASS",
  "productionDiff": 0,
  "deChanges": 0,
  "unexpectedChanges": 0,
  "secrets": 0,
  "CODE_OWNER_VERDICT": "OWNER_ACCEPTED_FOR_MERGE",
  "OPERATIONAL_VERDICT": "PENDING_POST_MERGE_REAL_SMOKE",
  "pr701": { "state": "OPEN", "isDraft": true, "merged": false }
}
```
