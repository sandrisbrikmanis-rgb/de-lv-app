# Phase 1 Specification — OWNER Review (READ-ONLY)

**Generated:** 2026-08-29T06:30:00Z  
**Reviewer:** Independent READ-ONLY audit (Cursor)  
**Document under review:** `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md`  
**Draft PR:** [#695](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/695)  
**Branch:** `cursor/phase1-discovery-spec-ab00`

---

## 1. Baseline

| Item | Value | Status |
|------|-------|--------|
| `ORIGIN_MAIN_SHA` | `0bf5767b0c667dbf56874e7027a5319d7c7fba90` | ✓ |
| `PR_695_HEAD_SHA` | `ef799ef740c35e30cb8095e60305ef613bddf37a` | ✓ |
| Active branch | `cursor/phase1-discovery-spec-ab00` | ✓ |
| PR #695 base | `main` | ✓ |
| Review target | PR #695 HEAD (spec file only) | ✓ |
| Working tree | Clean except 2 untracked pre-merge scripts (not in PR) | ✓ |
| Production diff vs `origin/main` | **0** (`data/`, `www/data/`, `languages/`) | ✓ |

PR #695 diff: **1 file only** — `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md` (+521 lines).

---

## 2. Sources reviewed

| Source | Purpose |
|--------|---------|
| `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md` | Primary review target |
| `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md` §D, §I, §J, §B |
| `docs_and_rules/PHASE_0_CROWDIN_DISCOVERY_SPEC.md` | Scope inheritance, F0 baseline |
| `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md` §1.1.10–1.1.13, §5.3–5.4, §7.6, §7.18, §7.25, §11.12 |
| `scripts/lib/content-discovery/discovery-scope.js` | Scope inventory authority |
| `scripts/lib/content-discovery/registry.js` | Current collector coverage |
| `scripts/lib/content-discovery/collectors/*.js` | Gap verification |
| `scripts/lib/main-translation-field-inventory.js` | Inventory semantics |
| `scripts/lib/openai-luna-full-audit.js` | Luna contract reference |
| `scripts/lib/content-crowdin-bridge/flatten-g1-training.js` | NOT_APPLICABLE langs |
| `reports/phase0-exit.json` | F0 baseline reference |

---

## 3. Scope formulas (reproducible)

Verified by executing `buildExpectedDiscoveryScopes(CONTENT_LANGUAGES, datasetsByGroup)` against repo at PR #695 HEAD:

```text
G2 = 6 levels × 32 langs = 192
G1 = 3 datasets × 32 langs = 96
G3 = 1 dataset × 32 langs = 32
EXPECTED_SCOPE = 320
UNIQUE_SCOPE_IDS = 320
DUPLICATES = 0
UNKNOWN_LANGUAGES = 0
UNKNOWN_GROUPS = 0
```

```text
NOT_APPLICABLE (TRAINING_NOT_APPLICABLE_LANGS = {lv, et}):
  - g1/training/lv  → embedded www/ui.js, no courseTrainingCards.js
  - g1/training/et  → no data/et/courseTrainingCards.js

LUNA_APPLICABLE = EXPECTED_SCOPE - NOT_APPLICABLE = 320 - 2 = 318  ✓
```

**Additional applicable-scope distinction (not in spec):**

```text
INVENTORY_APPLICABLE = non-lv scopes with existing production source
  = 31 langs × 10 datasets/lang - 1 (g1/training/et missing file)
  = 310 - 1 = 309

MULTI_SCAN_APPLICABLE = same as INVENTORY_APPLICABLE (per §4.1 LV column = —)
```

| Scope class | Count | Spec defines? |
|-------------|------:|:-------------:|
| Total | 320 | ✓ |
| NOT_APPLICABLE (structural/file) | 2 | ✓ |
| Luna applicable | 318 | ✓ |
| Inventory / multi-scan applicable | **309** | **✗** |

**Finding:** Spec §1.2 / F1-3 / F1-4 use "applicable scope" without distinguishing **318** (Luna) from **309** (inventory, excludes all `lang=lv` scopes per §4.1 table). Implementer could falsely PASS F1-3 at 309/309 while claiming 100% against wrong denominator 318.

---

## 4. F1-1…F1-9 gate review matrix

| Gate | Input | PASS criterion (spec) | Verifiable? | Artifacts | Dependencies | Review status |
|------|-------|----------------------|:-----------:|-----------|--------------|---------------|
| **F1-1** | `origin/main`, branch HEAD | Baseline PASS, DE=0, active closure=0 | ✓ Yes (reuse F0-5) | baseline header | git fetch | **PASS** — reuses proven F0 gate |
| **F1-2** | 320 scope objects | Deterministic discovery 320/320 | ✓ Yes | matrix `summary[]` length | F1-1 | **NEEDS REPAIR** — §1.2 allows "318+2 N/A" wording conflicts with F1-2 "320/320"; must define N/A rows count as processed |
| **F1-3** | Applicable scopes | MAIN_TRANSLATION_FIELD_INVENTORY 100% | ⚠ Partial | per-scope `inventoryCoverage` | F1-2, collectors | **NEEDS REPAIR** — denominator undefined (309 not 318); no per-scope PASS rule; `scanDatasetMainTranslations` returns hardcoded `"100%"` string without unmapped-field proof |
| **F1-4** | Applicable scopes | MULTI_TRANSLATION_SCAN 100% | ⚠ Partial | per-scope multi-scan stats | F1-2, P1-IMPL-1 | **NEEDS REPAIR** — same denominator issue; G1 verbs + G3 not implemented |
| **F1-5** | 318 Luna scopes | Luna 100% applicable | ⚠ Partial | `lunaProcessed`, `lunaObjects` | OPENAI_API_KEY, adapters | **NEEDS REPAIR** — no failed-batch/retry/timeout policy; partial response handling unspecified |
| **F1-6** | All findings | Validation, no schema errors | ✗ No | — | F1-2, F1-5 | **NEEDS REPAIR** — no validation schema, dedup rules, or classification completeness criterion |
| **F1-7** | Branch vs `origin/main` | Production diff = 0 | ✓ Yes | git diff | — | **NEEDS REPAIR** — criterion stated but forbidden paths not enumerated (§9 lists `languages/`; F1-7 does not) |
| **F1-8** | Findings count | OWNER-PREP if `TOTAL_FINDINGS > 0` | ⚠ Partial | `phase1-owner-prep/` | F1-6, PRE_BACKLOG | **NEEDS REPAIR** — triggers on raw count not validated findings; `phase1-full` schema undefined |
| **F1-9** | All prior gates | Consolidated report + JSON | ⚠ Partial | `phase1-exit.json/md` | F1-1…F1-8 | **NEEDS REPAIR** — must mandate embedding all gate results; template not specified |

### Gate detail notes

**F1-2:** Spec must state: `PROCESSED = 320` where 2 rows have `applicability=EXPECTED_NOT_APPLICABLE` and still appear in `summary[]`.

**F1-3:** MASTER §1.1.10 requires `UNMAPPED_MAIN_TRANSLATION_FIELDS = 0`. Spec must define inventory applicable = **309** (or justify including LV). Gate must fail if any applicable scope has `inventoryCoverage < 1.0` or `unmappedMainTranslationFields > 0`.

**F1-4:** MASTER §7.25 requires scan across all card types. G1 verbs (5 fields × 189 verbs) and G3 structured native paths are not covered by current `multi-translation.js`. Spec correctly lists gap but F1-4 cannot PASS until implemented.

**F1-5:** Must define:
- `lunaObjectsExpected` vs `lunaObjectsProcessed` per scope
- FAIL if any batch exhausts retries
- FAIL if malformed JSON not recovered
- Whether absent cards in Luna response (implicit PASS in `openai-luna-full-audit.js` L118–122) is allowed for Phase 1

**F1-6:** Must reference finding schema (§4.3) plus mandatory fields: `auditId`, `scopeId`, `source`, `category`, `severity`, `classificationStatus`. Unclassified findings → gate FAIL.

**F1-7:** Recommended explicit paths: `data/`, `www/data/`, `languages/`, `crowdin/content/` (if written).

**F1-8:** Should be `VALIDATED_FINDINGS > 0`, not raw `TOTAL_FINDINGS > 0` (includes FALSE_POSITIVE, STYLE_ONLY).

---

## 5. Infrastructure gaps review

| Gap (spec §4.2) | Repo verified | Complete? | Notes |
|-----------------|:-------------:|:---------:|-------|
| G1 verbs multi-translation | `multi-translation.js` exports only G2 + G1 sentences | ✓ listed | — |
| G3 inventory + multi-scan | No G3 collector | ✓ listed | — |
| G1 training inventory | Structural only in `registry.js` | ✓ listed | 30 langs with files |
| Luna in discovery | `run-content-discovery.js` has no `--with-luna` | ✓ listed | New `run-phase1-discovery.js` |
| Inventory coverage gate | Not implemented | ✓ listed | — |
| Luna coverage gate | Not implemented | ✓ listed | — |
| Phase 1 exit script | Not implemented | ✓ listed | — |
| OWNER-PREP `phase1-full` | Not in `audit-post-run.js` HOOKS | ✓ listed | — |

### Unlisted gaps (spec omission)

| ID | Gap | Severity |
|----|-----|----------|
| GAP-09 | **F1-6 findings validation module** — no file, no P1-IMPL step | HIGH |
| GAP-10 | **PRE_BACKLOG_HISTORY_GATE implementation** — referenced §8.3 but no P1-IMPL step | HIGH |
| GAP-11 | **G3 `legacyHtml` deterministic scan** — MASTER §5.4 requires full text-node scan; Phase 0 structural excludes `legacyHtml` from shape compare only | HIGH |
| GAP-12 | **`phase1-scope-inventory.json` generator** — defined §2.4 but not in P1-IMPL | MEDIUM |
| GAP-13 | **Deterministic ↔ Luna deduplication policy** — not defined | HIGH |
| GAP-14 | **G1 verbs inventory field paths** — `main-translation-field-inventory.js` is G2/sentence-oriented (`entry.lv`, `study.*`); verb inflected forms need separate inventory map | HIGH |
| GAP-15 | **`evaluateInventoryCoverage()` / `evaluateLunaCoverage()`** — named in gaps but no P1-IMPL owner | MEDIUM |

---

## 6. P1-IMPL-1…10 review matrix

| Step | Goal clear? | Files named? | Prerequisites | Verifiable output | Tests | Fail-safe | Order OK? | Status |
|------|:-----------:|:------------:|:-------------:|:-----------------:|:-----:|:---------:|:---------:|--------|
| P1-IMPL-1 | ✓ | Partial (collectors) | F0 complete | G1 verbs + G3 collectors | ✗ | ✗ | 1st | **NEEDS REPAIR** |
| P1-IMPL-2 | ✓ | "report generators" vague | — | repo-relative paths | ✗ | ✗ | 2nd | **NEEDS REPAIR** |
| P1-IMPL-3 | ✓ | Pattern refs only | P1-IMPL-1 | Luna adapters exist | ✗ | ✗ | After 1 | **NEEDS REPAIR** |
| P1-IMPL-4 | ✓ | `run-phase1-discovery.js` | 1–3 | orchestrator runs | ✗ | ✗ | After 3 | OK |
| P1-IMPL-5 | ✓ | `run-phase1-exit-matrix.js` | 4 | F1 gates | ✗ | ✗ | After 4 | OK |
| P1-IMPL-6 | ✓ | `phase1-full` hook | 5 | OWNER-PREP dir | ✗ | ✗ | After 5 | **NEEDS REPAIR** |
| P1-IMPL-7 | ✓ | `package.json` | 4–5 | npm scripts | ✗ | ✗ | After 5 | OK |
| P1-IMPL-8 | ✓ | — | 1–7 | 320/320 skip-luna | ✗ | ✗ | Before 9 | OK |
| P1-IMPL-9 | ✓ | — | 8 + Luna | 318/318 Luna | ✗ | ✗ | After 8 | OK |
| P1-IMPL-10 | ✓ | — | 9 | 2× exit determinism | ✗ | ✗ | Last | OK |

**Common P1-IMPL weakness:** No step includes explicit rollback, test command, or fail-safe (`--skip-luna` fallback). Steps GAP-09–15 are not mapped to any P1-IMPL item.

---

## 7. Luna execution contract review

| Requirement | Spec defines? | Repo reference | Status |
|-------------|:-------------:|----------------|--------|
| Applicable scope 318 | ✓ §5.2 | Verified | **PASS** |
| Model `gpt-5.6-luna` | ✓ §5.1 | `openai-luna-full-audit.js` | **PASS** |
| API `OPENAI_API_KEY` | ✓ §5.1 | Verified in env | **PASS** |
| Batch identification | Partial §5.3 | `batchLabel` in Luna lib | **NEEDS REPAIR** |
| Deterministic item coverage | Partial | Cards sent per batch | **NEEDS REPAIR** — no `lunaObjectsExpected` |
| Timeout policy | ✗ | — | **OWNER DECISION REQUIRED** |
| Retry policy | Partial (`--resume-luna`) | `retryReasons` in stats | **NEEDS REPAIR** — max retries, backoff, FAIL threshold |
| Partial response | ✗ | Implicit PASS for missing cards | **OWNER DECISION REQUIRED** |
| Malformed JSON | ✗ | Throws in `parseLunaFullAuditResponse` | **NEEDS REPAIR** — gate behavior on throw |
| Dedup deterministic+Luna | ✗ | — | **NEEDS REPAIR** |
| Token/cost accounting | ✗ | Stats exist in Luna lib | **NEEDS REPAIR** — not required in Phase 1 exit |
| Resume/idempotency | ✓ §5.3 | Progress files | **PASS** |
| Proof no item skipped | ✗ | — | **NEEDS REPAIR** |
| Batch size | "~25" approximate | G2 historical | **OWNER DECISION REQUIRED** |

### Luna batch size — OWNER DECISION REQUIRED (not approved by reviewer)

| Option | Pros | Cons |
|--------|------|------|
| A. Fixed 25 (G2 legacy) | Proven in prior audits | May be suboptimal for G1 sentences / G3 |
| B. Per-group defaults (G2=25, G1=50, G3=20) | Tuned to object size | More complex |
| C. Token-budget batches | Cost predictable | Harder to implement |

**Recommendation:** Spec should require recording `batchSize` per scope in matrix and allow OWNER-approved per-group defaults, not a single "~25".

---

## 8. G3 LIVE gate review

| Question | Spec answer | MASTER answer | Status |
|----------|-------------|---------------|--------|
| What does LIVE gate protect? | **Not defined** | §5.3 runtime render behavior; §11.12 browser closure | **OWNER DECISION REQUIRED** |
| Phase 1 includes LIVE? | **Not mentioned** | LIVE required for Kurss **closure** (Phase 3), not §D discovery | **OWNER DECISION REQUIRED** |
| Measurable PASS/FAIL? | — | `KURSS_RUNTIME_SMOKE`, `FLIP`, `NEXT`, etc. | — |
| Distinct translation values? | — | §5.3 structural binding rules | — |

**Analysis:** MASTER §D Phase 1 exit does **not** list LIVE gates. MASTER §B assigns LIVE to G3 **closure**. Spec is **consistent with §D** by omitting LIVE from Phase 1.

**However:** For a complete 320-scope "CURRENT state map" of G3, omitting `legacyHtml` scan (§5.4) and LIVE discovery may leave a documented gap. Spec should **explicitly defer** G3 LIVE to Phase 3 / closure with normative reference, not silent omission.

**Proposed spec addition (not applied in this review):**

> Phase 1 G3 scope covers deterministic `COURSE_LESSON_DATA` (L8–L21) + `legacyHtml` text-node scan per MASTER §5.4. **G3 LIVE/runtime gates (§5.3, §11.12) are OUT OF SCOPE for Phase 1** and remain Phase 3 closure requirements.

---

## 9. OWNER-PREP (`phase1-full`) review

| MASTER §7.6 requirement | Spec §8 includes? | Status |
|-------------------------|:-----------------:|--------|
| `owner-view.md` | Partial (item 1–4) | **NEEDS REPAIR** — no filename convention |
| `owner-decisions.md` | ✗ | **NEEDS REPAIR** |
| `owner-review-GITHUB.md` | ✓ item 6 | **PASS** |
| Audit ID per finding | ✗ | **NEEDS REPAIR** |
| Card/lesson/object ID | ✗ | **NEEDS REPAIR** |
| Field/path | ✗ | **NEEDS REPAIR** |
| CURRENT | ✗ | **NEEDS REPAIR** |
| Severity + category | Partial | **NEEDS REPAIR** |
| Evidence / DE context | ✗ | **NEEDS REPAIR** |
| PROPOSED as recommendation only | ✓ §8.4 | **PASS** |
| OWNER STATUS enum | ✗ | **NEEDS REPAIR** |
| Dedup key | ✗ | **NEEDS REPAIR** |
| Source + report artifact ref | ✗ | **NEEDS REPAIR** |
| No auto-apply | ✓ §8.4, §9 | **PASS** |
| PRE_BACKLOG_HISTORY_GATE | ✓ §8.3 | **NEEDS REPAIR** — no implementation |

**Recommended `phase1-full` finding stable ID:**

```text
{findingStableId} = {scopeId}|{cardId}|{fieldPath}|{category}|{source}
```

Dedup: MASTER §7.13 path-family dedup; spec must reference it.

---

## 10. Findings register

| Review ID | Severity | Spec section | Issue | Risk | Recommended fix | Status |
|-----------|----------|--------------|-------|------|-----------------|--------|
| R-001 | **CRITICAL** | §1.2, F1-3, F1-4 | "Applicable scope" conflates 318 (Luna) and 309 (inventory) | False PASS on coverage gates | Define `INVENTORY_APPLICABLE=309`, `LUNA_APPLICABLE=318`, `MULTI_SCAN_APPLICABLE=309` with separate denominators | OPEN |
| R-002 | **CRITICAL** | F1-6 | No findings validation schema or completeness rule | Unclassified findings, F1-8 misfire | Add §4.4 validation schema + F1-6 PASS = 100% classified, 0 schema errors | OPEN |
| R-003 | **CRITICAL** | F1-5 | Luna batch failure / malformed JSON gate behavior undefined | Silent partial coverage | Define: retry max N → scope FAIL; malformed JSON → scope FAIL; exit F1-5 FAIL | OPEN |
| R-004 | **HIGH** | §5, GAP-11 | G3 `legacyHtml` full text scan absent (MASTER §5.4) | Incomplete G3 discovery | Add collector requirement or explicit deferral with OWNER sign-off | OPEN |
| R-005 | **HIGH** | §8, F1-8 | OWNER-PREP triggered on `TOTAL_FINDINGS > 0` not validated | PREP for false positives | Use `VALIDATED_FINDINGS > 0` after F1-6 | OPEN |
| R-006 | **HIGH** | §8.2 | `phase1-full` package missing MASTER §7.6 field schema | Non-actionable OWNER-PREP | Map §7.6 fields to `phase1-owner-prep/` layout | OPEN |
| R-007 | **HIGH** | GAP-13 | No deterministic+Luna dedup policy | Duplicate backlog inflation | Add §4.5 dedup rules referencing MASTER §7.13 | OPEN |
| R-008 | **HIGH** | GAP-14 | G1 verbs inventory field map not specified | F1-3 false PASS via wrong fields | Document verb form paths in inventory collector spec | OPEN |
| R-009 | **HIGH** | F1-7 | Forbidden paths not enumerated in gate | Incomplete production safety | Align F1-7 with §9 paths + `crowdin/content/` if written | OPEN |
| R-010 | **HIGH** | P1-IMPL | Missing steps for F1-6, PRE_BACKLOG, scope inventory | Implementation cannot reach exit | Add P1-IMPL-1b…1d or expand steps | OPEN |
| R-011 | **MEDIUM** | F1-2, §1.2 | "318+2 N/A" vs "320/320" ambiguous | Reporting confusion | Standardize: `PROCESSED=320, N/A=2, APPLICABLE=318` | OPEN |
| R-012 | **MEDIUM** | §5.3 | Batch size "~25" not normative | Non-reproducible Luna runs | OWNER decision on per-group batch defaults | OPEN |
| R-013 | **MEDIUM** | §6.3 | Luna stochasticity acknowledged, no re-run acceptance | Indeterminate Phase 1 exit | Define: deterministic gates must match; Luna variance logged not gated (or OWNER rule) | OPEN |
| R-014 | **MEDIUM** | §14 | Crowdin export in Phase 1 table but not in exit gates | Scope creep ambiguity | Clarify optional vs required for F1 exit | OPEN |
| R-015 | **MEDIUM** | §2.4, P1-IMPL | `phase1-scope-inventory.json` not in impl plan | Missing artifact | Add to P1-IMPL-4 or P1-IMPL-5 | OPEN |
| R-016 | **LOW** | §13 | Status definitions vs header "AWAITING IMPLEMENTATION" | Documentation noise | Align header with `PHASE_1_NOT_STARTED` | OPEN |
| R-017 | **LOW** | §5.3 | `scopeKey` vs `scopeId` naming inconsistency | Parser confusion | Unify on `scopeId` format `g1/training/et` | OPEN |
| R-018 | **OWNER_DECISION** | §8.3 G3 LIVE | Phase 1 G3 LIVE/runtime scope | Over- or under-scoping | Explicitly IN or OUT of Phase 1 with MASTER cite | **OWNER ACCEPTED** |
| R-019 | **OWNER_DECISION** | §5.3 | Luna batch size policy | Cost/coverage tradeoff | Choose per-group defaults (see §7) | **OWNER ACCEPTED** |
| R-020 | **OWNER_DECISION** | F1-5 | Implicit PASS for cards absent from Luna response | Coverage vs cost | Allow (current lib) or require explicit PASS per card | **OWNER ACCEPTED** |
| R-021 | **OWNER_DECISION** | §5.3 | Luna timeout / max retry values | API cost, wall time | Define N, backoff, wall-clock limit | **OWNER ACCEPTED** |

---

## 11. Coverage matrix

| Review area | Expected | Reviewed | Findings | Status |
|-------------|----------|----------|----------|--------|
| Scope inventory | 100% | 100% | 1 (R-001, R-011) | **NEEDS REPAIR** |
| F1-1…F1-9 | 9 | 9 | 9 gates flagged | **NEEDS REPAIR** |
| Infrastructure gaps | 100% | 100% | 8 listed + 7 unlisted | **NEEDS REPAIR** |
| P1-IMPL-1…10 | 10 | 10 | 6 steps weak | **NEEDS REPAIR** |
| Luna contract | 100% | 100% | 8 gaps | **NEEDS REPAIR** |
| G3 LIVE gate | 100% | 100% | R-018 (+ related §8 analysis) | **OWNER DECISION REQUIRED** |
| OWNER-PREP | 100% | 100% | 3 gaps | **NEEDS REPAIR** |
| Artifact paths | 100% | 100% | 1 (portability ✓ in §7.3) | **PASS** |
| Safety boundaries | 100% | 100% | 1 (F1-7 paths) | **NEEDS REPAIR** |

**Overall review coverage:** 100% of required areas examined.

---

## 12. What the spec gets right

1. **320 scope math** — correct and reproducible from `discovery-scope.js`.
2. **NOT_APPLICABLE training scopes** — `g1/training/lv` and `g1/training/et` verified against `TRAINING_NOT_APPLICABLE_LANGS` and file existence.
3. **Luna applicable 318** — correct (320 − 2).
4. **Phase 0 → Phase 1 boundary** — correctly extends F0 with Luna; forbids apply/Phase 2.
5. **Infrastructure gaps table** — accurately reflects current `registry.js` / `multi-translation.js` state.
6. **Repo-relative path rule** §7.3 — addresses Phase 0 portability lesson.
7. **P1-IMPL defers discovery execution** — aligns with OWNER instruction.
8. **MASTER compliance map** §12 — largely accurate for §D scope.

---

## 13. Production diff proof

```bash
git diff --name-only origin/main...HEAD -- data www/data languages
# (empty)

git diff --stat origin/main...HEAD
# docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md | 521 +++++
```

**PRODUCTION_DIFF = 0** ✓

---

## 14. Verdict

```
VERDICT = OWNER_REVIEW_NEEDS_SPEC_REPAIR
```

### Rationale

| Criterion | Result |
|-----------|--------|
| Scope 320 proven | ✓ |
| Luna scope 318 proven | ✓ |
| F1-1…F1-9 complete and verifiable | ✗ (R-001–R-003, R-005, R-009, R-011) |
| P1-IMPL executable in order | ⚠ (missing steps R-010) |
| Unresolved CRITICAL | **3** (R-001, R-002, R-003) |
| Unresolved HIGH | **7** (R-004–R-010) |
| OWNER decisions blocking implementation | **4** (R-018, R-019, R-020, R-021) |
| Production diff = 0 | ✓ |

**OWNER_REVIEW_PASS is not granted.** Spec is a strong draft but requires repair before implementation authorization.

**This review does NOT authorize:**
- P1-IMPL execution
- 320-scope discovery
- Luna API calls
- PR #695 merge

### Recommended repair priority

1. **P0:** Fix applicable-scope denominators (R-001) and F1-6 validation schema (R-002)
2. **P0:** Define Luna failure gate behavior (R-003)
3. **P1:** OWNER decisions on G3 LIVE scope (R-018) and Luna batch/implicit-PASS (R-019–R-021)
4. **P1:** Complete OWNER-PREP schema (R-006) and G3 legacyHtml (R-004)
5. **P2:** P1-IMPL expansion, LOW doc fixes

---

## 15. Summary counts

| Metric | Value |
|--------|-------|
| CRITICAL findings | 3 |
| HIGH findings | 7 |
| MEDIUM findings | 5 |
| LOW findings | 2 |
| OWNER_DECISION_REQUIRED | 4 (R-018, R-019, R-020, R-021) |
| **Total findings** | **20** |

---

## 16. OWNER decisions applied (R-018…R-021)

| ID | Status | OWNER decision (binding) |
|----|--------|--------------------------|
| **R-018** | **OWNER ACCEPTED: OUT OF PHASE 1** | Phase 1 ietver deterministisku `COURSE_LESSON_DATA` discovery un pilnu G3 `legacyHtml` teksta mezglu skenēšanu (MASTER §5.4). Phase 1 **neietver** G3 LIVE/runtime testus, browser closure, FLIP/NEXT/runtime smoke vārtus — atlikts uz Phase 3 / G3 closure (MASTER §5.3, §11.12). |
| **R-019** | **OWNER ACCEPTED: PER-GROUP DEFAULTS** | Normatīvie noklusējumi: G2=`25`, G1=`50`, G3=`20`. Katram batch obligāti: `scopeId`, `batchId`, `batchSizeConfigured`, `objectsExpected`, `objectsReturned`, `attemptCount`. Batch izmēru nedrīkst mainīt izpildes laikā bez OWNER lēmuma. |
| **R-020** | **OWNER ACCEPTED: IMPLICIT PASS AIZLIEGTS** | Katram Luna objektam obligāts explicit rezultāts. Ja `objectsReturned !== objectsExpected` vai trūkst ID → batch nederīgs, retry (R-021), pēc izsmelšanas scope=`FAIL`, F1-5=`FAIL`. Trūkstošus objektus nedrīkst klasificēt kā PASS. |
| **R-021** | **OWNER ACCEPTED** | Timeout 180s; max 3 mēģinājumi/batch; retry ≤2 pēc sākotnējā; backoff 5s/15s; batch wall-clock 10min; malformed JSON/timeout/API/partial/coverage mismatch → retry; pēc 3. neveiksmes batch+scope=`FAIL`, F1-5=`FAIL`; aizliegts Phase 1 PASS ar nepilnu Luna coverage. |

---

## 17. Spec repair mapping (post-repair)

**Repair target:** `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md`  
**Historical verdict:** `OWNER_REVIEW_NEEDS_SPEC_REPAIR` (§14) — **nemainīts**.

| Review ID | Repair status | Repaired spec section(s) |
|-----------|:-------------:|--------------------------|
| R-001 | **MAPPED** | §1.2 Scope skaitītāji; §2.4 Scope klases; §1.4 F1-3/F1-4 denominatori |
| R-002 | **MAPPED** | §4.4 F1-6 findings validācijas shēma; §1.4 F1-6 |
| R-003 | **MAPPED** | §5.4 Timeout/retry/FAIL; §1.4 F1-5; §5.5 explicit coverage |
| R-004 | **MAPPED** | §3.1 G3 Phase 1 apjoms; §4.1 `legacyHtml` kolektors; §4.7; F0-COMP-2 |
| R-005 | **MAPPED** | §8.1 `VALIDATED_FINDINGS > 0`; §1.4 F1-8 |
| R-006 | **MAPPED** | §8.2–8.4 `phase1-full` OWNER-PREP shēma (MASTER §7.6) |
| R-007 | **MAPPED** | §4.3 Stable ID/dedupKey; §4.5 deduplikācija |
| R-008 | **MAPPED** | §4.6 G1 verbs inventory/multi-scan ceļi; F0-COMP-3 |
| R-009 | **MAPPED** | §9.1 F1-7 aizliegtie ceļi; §1.4 F1-7 |
| R-010 | **MAPPED** | §4.2 gaps → F0-COMP; §10 F0-COMP-1…15 (GAP-09…15) |
| R-011 | **MAPPED** | §1.2, §1.4 F1-2 `PROCESSED=320`; §7.2 matrica |
| R-012 | **MAPPED** | §5.3 batch politika (R-019 OWNER defaults) |
| R-013 | **MAPPED** | §5.9 Luna atkārtotas izpildes variance |
| R-014 | **MAPPED** | §14 Crowdin export = opcionāls, nav F1 exit vārts |
| R-015 | **MAPPED** | §2.5 scope inventārs; F0-COMP-7 |
| R-016 | **MAPPED** | Header statuss `PHASE_1_NOT_STARTED`; §13 |
| R-017 | **MAPPED** | §2.2 `scopeId` vienots; §5.3 progress faili |
| R-018 | **MAPPED** | §3.1 G3 LIVE OUT OF PHASE 1; §12 MASTER karte |
| R-019 | **MAPPED** | §5.3 per-group batch defaults + batch metadata |
| R-020 | **MAPPED** | §5.5 explicit rezultāts; §5.2 coverage; §1.4 F1-5 |
| R-021 | **MAPPED** | §5.4 timeout/retry/backoff/wall-clock; §1.4 F1-5 |

**Repair mapping summary:** `20/20 MAPPED` | **OWNER decisions applied:** `4/4` | **Unresolved:** `0`

---

## 18. OWNER phase alignment (MASTER §C–D)

**Date:** 2026-08-29  
**Scope:** Posmu salāgojums specifikācijā pēc repair; **ne** jauns review verdict.

| Item | OWNER position |
|------|----------------|
| **R-018…R-021** | **4/4 OWNER ACCEPTED** (skat. §16) |
| **Infrastruktūras soļi** | Bijušie `P1-IMPL-1…15` pārklasificēti par **`F0-COMP-1…15`** spec §10 |
| **Klasifikācija** | **Fāzes 0 infrastruktūras completion** pirms Fāzes 1 READ-ONLY discovery |
| **Atcelšana** | **Nekas nav atcelts** — visi 15 tehniskie darbi saglabāti (faili, testi, PASS/FAIL, fail-safe) |
| **MASTER §C–D** | Posmu konflikts **novērsts**: §C infrastruktūra = F0-COMP; §D discovery = Fāze 1 pēc `PHASE_0_INFRASTRUCTURE_COMPLETION = PASS` |
| **Fāze 1 režīms** | **READ-ONLY** nemainīts |
| **Vēsturiskais verdict** | `OWNER_REVIEW_NEEDS_SPEC_REPAIR` (§14) **paliek nemainīts** |

---

**Spec repair:** §17 mapping | **Phase alignment:** §18

---

## 19. Post-repair OWNER review (2026-08-29)

**Type:** Pilns READ-ONLY pēclabojumu review (vienots)  
**Document reviewed:** `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md`  
**Historical verdict (§14):** `OWNER_REVIEW_NEEDS_SPEC_REPAIR` — **nemainīts**

### 19.1 Review baseline

| Item | Value | Status |
|------|-------|--------|
| `ORIGIN_MAIN_SHA` | `0bf5767b0c667dbf56874e7027a5319d7c7fba90` | ✓ |
| `PR_695_HEAD_SHA` (reviewed) | `14b303eabc2b680d43eaa3f799dea18ef1833009` | ✓ |
| Branch | `cursor/phase1-discovery-spec-ab00` | ✓ |
| Base | `main` | ✓ |
| Spec lines | 1046 | ✓ |
| Production diff (`data/`, `www/data/`, `languages/`, `crowdin/content/`) | **0** | ✓ |

Scope counts verified via `buildExpectedDiscoveryScopes()`:

```text
EXPECTED_SCOPE = 320
NOT_APPLICABLE = 2
LUNA_APPLICABLE = 318
INVENTORY_APPLICABLE = 309
MULTI_SCAN_APPLICABLE = 309
```

### 19.2 Finding resolution matrix (`20/20`)

| ID | Sev. | Original issue | Post-repair status | Spec evidence |
|----|------|----------------|:------------------:|---------------|
| R-001 | CRITICAL | Scope denominator confusion (318 vs 309) | **RESOLVED** | §1.2, §2.4 — atsevišķi skaitītāji; aizliegts jaukt |
| R-002 | CRITICAL | F1-6 validation schema missing | **RESOLVED** | §4.4 — pilna shēma; `UNCLASSIFIED` → F1-6 FAIL |
| R-003 | CRITICAL | Luna failure/retry gate undefined | **RESOLVED** | §5.4, §5.5, §1.4 F1-5 |
| R-004 | HIGH | G3 `legacyHtml` scan absent | **RESOLVED** | §3.1, §4.1, §4.7, F0-COMP-2 |
| R-005 | HIGH | OWNER-PREP on `TOTAL_FINDINGS` | **RESOLVED** | §8.1 — `VALIDATED_FINDINGS > 0` |
| R-006 | HIGH | `phase1-full` OWNER-PREP schema incomplete | **RESOLVED** | §8.2–8.4 — MASTER §7.6 lauki |
| R-007 | HIGH | No dedup policy | **RESOLVED** | §4.3, §4.5 — stable ID, dedupKey, merge rules |
| R-008 | HIGH | G1 verbs inventory paths missing | **RESOLVED** | §4.6 — 5 verb forms × slug |
| R-009 | HIGH | F1-7 paths not enumerated | **RESOLVED** | §9.1 — 4 aizliegtie ceļi |
| R-010 | HIGH | GAP-09…15 bez impl soļiem | **RESOLVED** | §4.2, §10 F0-COMP-1…15 |
| R-011 | MEDIUM | F1-2 318+2 vs 320 ambiguity | **RESOLVED** | §1.4 F1-2 `PROCESSED=320`; N/A matricā |
| R-012 | MEDIUM | Batch size not normative | **RESOLVED** | §5.3 — G2=25, G1=50, G3=20 (R-019) |
| R-013 | MEDIUM | Luna re-run acceptance undefined | **RESOLVED** | §5.9 — deterministic gated; Luna churn logged |
| R-014 | MEDIUM | Crowdin export scope creep | **RESOLVED** | §14 — opcionāls, nav F1 exit vārts |
| R-015 | MEDIUM | scope inventory not in impl plan | **RESOLVED** | §2.5, F0-COMP-7 |
| R-016 | LOW | Status header inconsistency | **RESOLVED** | §13 statusi; `PHASE_1_NOT_STARTED` + F0 gate (§1 priekšnosacījums) |
| R-017 | LOW | `scopeKey` vs `scopeId` | **RESOLVED** | §2.2, §5.3 — tikai `scopeId` |
| R-018 | OWNER | G3 LIVE/runtime scope | **RESOLVED** | §3.1 — OUT OF PHASE 1; closure Phase 3 |
| R-019 | OWNER | Luna batch size policy | **RESOLVED** | §5.3 — per-group defaults + batch metadata |
| R-020 | OWNER | Implicit PASS for missing Luna items | **RESOLVED** | §5.5 — explicit rezultāts obligāts |
| R-021 | OWNER | Timeout/retry values | **RESOLVED** | §5.4 — 180s, 3 attempts, 5s/15s, 10min |

**Resolution summary:** `20/20 RESOLVED` | **OPEN:** `0` (CRITICAL/HIGH/MEDIUM/LOW)

### 19.3 OWNER decisions verification (`4/4`)

| ID | Decision | Spec location | Verified |
|----|----------|---------------|:--------:|
| R-018 | G3 LIVE/runtime **OUT OF PHASE 1**; `legacyHtml` + `COURSE_LESSON_DATA` **IN** | §3.1, §12 | ✓ |
| R-019 | Per-group batch: G2=25, G1=50, G3=20; batch metadata obligāts | §5.3 | ✓ |
| R-020 | **IMPLICIT PASS AIZLIEGTS**; coverage mismatch → retry → FAIL | §5.5, §1.4 F1-5 | ✓ |
| R-021 | Timeout 180s; max 3; backoff 5s/15s; wall-clock 10min | §5.4 | ✓ |

**OWNER decisions:** `4/4 ACCEPTED AND VERIFIED`

### 19.4 F1 gate completeness (F1-1…F1-9)

| Gate | Denominator | PASS/FAIL definēts | Implicit PASS aizliegts | Status |
|------|-------------|:------------------:|:-----------------------:|:------:|
| F1-1 | Baseline | ✓ | n/a | **PASS** |
| F1-2 | 320 | ✓ | n/a | **PASS** |
| F1-3 | 309 | ✓ | n/a | **PASS** |
| F1-4 | 309 | ✓ | n/a | **PASS** |
| F1-5 | 318 | ✓ | ✓ §5.5 | **PASS** |
| F1-6 | All findings | ✓ | ✓ `UNCLASSIFIED` aizliegts | **PASS** |
| F1-7 | Production paths | ✓ | n/a | **PASS** |
| F1-8 | `VALIDATED_FINDINGS` | ✓ | ✓ ne `TOTAL_FINDINGS` | **PASS** |
| F1-9 | F1-1…F1-8 | ✓ | n/a | **PASS** |

### 19.5 MASTER 1.12 compliance matrix

| MASTER | Requirement | Spec alignment | Conflicts |
|--------|-------------|:--------------:|:---------:|
| **§0** Konfliktu protokols | Stop on conflict | Spec nekonfliktē | **0** |
| **§C** Fāze 0 infrastruktūra | Bridge, inventory, multi-scan, orchestrators | F0-COMP-1…15 (§10) | **0** |
| **§D** Fāze 1 discovery | READ-ONLY, 100% coverage, production=0 | §1, §6, F1-1…F1-9 | **0** |
| **§I** Izpildes secība | F0 → F1 → F2 | §1 priekšnosacījums, §10→§6 | **0** |
| **§J** Aizliegumi | Nav apply/import/DE/repair | §9, §14 | **0** |
| **§7.6** OWNER-PREP | 3 faili, lauki, GitHub indekss | §8.2–8.4 | **0** |
| **§7.18** PRE_BACKLOG | Pirms OWNER-PREP | §8.5, F0-COMP-6 | **0** |
| **§5.3/§11.12** G3 LIVE | Closure only, ne discovery | §3.1 OUT OF PHASE 1 | **0** |

**MASTER conflicts:** `0`

### 19.6 F0-COMP / Fāzes 1 robeža

| Check | Result |
|-------|--------|
| `F0-COMP-1…15` definēti | **15/15** (§10.1–10.15) |
| `P1-IMPL-` atlikumi specifikācijā | **0** |
| Tehniskais saturs saglabāts (faili/tests/PASS/FAIL/fail-safe) | **15/15** ✓ |
| F0-COMP = Fāzes 0 infrastructure completion | ✓ §10, §4.2, §18 |
| `PHASE_0_INFRASTRUCTURE_COMPLETION` obligāts pirms F1 | ✓ §1, §6.2, §10 |
| Fāze 1 = READ-ONLY discovery tikai | ✓ §1, §9, §14 |
| Tulkošana / Crowdin import / apply | **Nav autorizēts** ✓ |
| G3 LIVE runtime Phase 1 | **OUT** ✓; obligāts G3 closure (MASTER §11.12) |

**F0-COMP / Fāzes 1 robeža:** **PASS**

### 19.7 Production diff proof

```bash
git diff --name-only origin/main...HEAD -- data www/data languages crowdin/content
# (empty)

git diff --stat origin/main...HEAD
# docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md | 1046 +++++
# reports/phase1-read-only-discovery-spec-owner-review.md | 437 +++++
```

**PRODUCTION_DIFF = 0** ✓

### 19.8 Post-repair verdict

```
VERDICT = OWNER_REVIEW_PASS
```

| Criterion | Result |
|-----------|--------|
| `20/20` findings RESOLVED | ✓ |
| `4/4` OWNER ACCEPTED AND VERIFIED | ✓ |
| MASTER conflicts | **0** |
| Unresolved CRITICAL/HIGH/MEDIUM/LOW | **0** |
| F0-COMP/Fāzes 1 boundary | **PASS** |
| Production diff = 0 | ✓ |
| Spec implementable without contradiction | ✓ |

**Authorized by this review:**

- Specifikācija ir gatava **F0-COMP-1…15** implementācijas uzdevumam (atsevišķs OWNER uzdevums).
- **Nav autorizēts:** F0-COMP izpilde, Fāzes 1 discovery, Luna API, production izmaiņas, PR merge.

**Nav autorizēts automātiski:** F0-COMP implementācija — vajadzīgs atsevišķs OWNER uzdevums.

---

**Review file:** `reports/phase1-read-only-discovery-spec-owner-review.md`  
**Draft PR:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/695  
**Post-repair verdict:** §19 — `OWNER_REVIEW_PASS`

---

## 20. OWNER batch hierarhijas precizējums (post-#688, F-007…F-009)

**Date:** 2026-08-29  
**Scope:** Saskaņošana starp MASTER `§7.31` un Phase 1 `§5.3` pēc PR #688 repair.

| Item | OWNER position |
|------|----------------|
| **R-019 (vēsturiskais)** | **Paliek nemainīts** — per-group defaults apstiprināti 2026-08-29 |
| **F-007…F-009** | **OWNER ACCEPTED** — normatīvā Luna batch hierarhija |
| **G2** | ordinary=25, `minimalStudy`=10, `standardStudy`=5 |
| **G1 sentences** | 25 pilni teikumu objekti |
| **G1 verbs** | 10 pilni verba objekti (5 formas nedalāmas) |
| **G1 courseTrainingCards** | 50 pilni training-card objekti |
| **G3 courseLessons** | 20 pilni lesson objekti |
| **Prioritāte** | Dataset-specific limits > grupas limits |
| **Vēsturiskie verdicti** | §14 un §19 **nemainīti** |

**Avots:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` §7.31; `PHASE_1_READ_ONLY_DISCOVERY_SPEC.md` §5.3.

---

**Post-repair verdict:** §19 — `OWNER_REVIEW_PASS` | **Batch alignment:** §20

---

## 21. OWNER tehniskais precizējums — F0-COMP-15 / Luna robeža

**Date:** 2026-08-29  
**Scope:** Iekšējo pretrunu novēršana starp F0 completion (F0-COMP-15) un Fāzes 1 discovery.

| Item | OWNER position |
|------|----------------|
| **F0-COMP-15** | Infrastruktūras smoke **bez** reāliem Luna API izsaukumiem |
| **Atļauts F0-COMP-15** | `--skip-luna` 320/320; inventory 309/309; multi-scan 309/309; adapteru mock/dry-run; `evaluateLunaCoverage()` ar sintētisku fixture; exit determinisms; Phase 0 regression |
| **F0-COMP-15 laikā** | `LUNA_CALLS = 0`; `F1-5 = NOT_RUN`; `LUNA_AUDIT_SCOPE_COVERAGE = NOT_RUN`; `PHASE_1_DISCOVERY = NOT_STARTED` |
| **`--with-luna`** | Tikai pēc `PHASE_0_COMPLETION_PASS`, atsevišķā Fāzes 1 uzdevumā |
| **Statusu secība** | `PHASE_0_INFRASTRUCTURE_COMPLETION_REQUIRED` → `PHASE_0_COMPLETION_PASS` → `PHASE_1_NOT_STARTED` → `PHASE_1_IN_PROGRESS` |
| **Exit JSON** | F0 completion piemērs: `F1-5=NOT_RUN`, `lunaAudit=NOT_RUN`, `lunaCalls=0`; Phase 1 complete piemērs: `F1-5=PASS`, `lunaAudit=318/318`, `lunaCalls > 0` |
| **Vēsturiskie verdicti** | §14, §19, §20 **nemainīti** |

**Avots:** `PHASE_1_READ_ONLY_DISCOVERY_SPEC.md` §6.1, §7.2, §10.15, §13.
