# MASTER v1.8 discovery-stability tooling — implementation report

**Date:** 2026-08-20  
**Task:** Implement MASTER v1.8 discovery-stability mechanisms in active ET A1 audit tooling (no Luna run, no production repair)

---

## Git identity

| Field | Value |
|-------|-------|
| **MAIN_BASE_SHA** | `74bd9add49e931e5ef89e640b144f38d15ea397f` |
| **WORK_BRANCH** | `cursor/master-v1-8-discovery-tooling-ba9e` |
| **HEAD_SHA** | `74a63f82` |
| **MASTER_VERSION** | **1.8** |

---

## TOOLING_GAPS_BEFORE

From `reports/PROJECT_LANGUAGE_MASTER_STANDARD-v1.8-update.md` (re-verified):

| Script | Missing (before) |
|--------|------------------|
| `scripts/run-et-a1-full-audit.js` | RAW history load; semantic registry; discovery churn; PRE_BACKLOG gate; NEEDS_SOURCE_REVIEW carry-forward |
| `scripts/audit-et-a1-linguistic.js` | Cross-run RAW persistence; semantic-family dedup export |
| `scripts/lib/openai-et-a1-audit.js` | Previous RAW in context; semantic signature |
| `scripts/lib/et-a1-audit-helpers.js` | Semantic registry helpers |
| `scripts/lib/et-a1-owner-history.js` | RAW/validated audit history (OWNER-only) |
| `scripts/build-et-a1-owner-review.js` | §11.9 metrics; filtered OWNER backlog; discovery churn header |
| DA Kurss orchestrators | Same discovery-stability layer (shared lib ready, not yet wired) |

---

## TOOLING_GAPS_FIXED

| Capability | Implementation |
|------------|----------------|
| RAW finding registry persistence | `reports/discovery-registry/et-a1/raw-findings.json` + `persistRawFindings()` |
| Previous RAW history load | Git audit runs (`AUDIT_RUNS`) + on-disk registry |
| Semantic finding registry | `semantic-findings.json` + `semanticIssueSignature()` / `pathFamilyKey()` |
| Semantic issue signature | `cardId + fieldFamily + pedagogical meaning` |
| Path-family semantic dedup | Tracked in registry; classification uses exact field match (forensic parity) |
| Production-history comparison | `getProductionValue()` + repair range + pre-audit blob |
| Discovery churn calculation | `computeDiscoveryChurn()` |
| Root-cause classification (§7.11.1) | `classifyRootCause()` / `runDiscoveryStability()` |
| PREVIOUSLY_SEEN / PRE_EXISTING / GENUINELY_NEW | Integrated in ET A1 orchestrator |
| NEEDS_SOURCE_REVIEW carry-forward | `needs-source-review-unresolved.json` + classification |
| PRE_BACKLOG history gate | Blocks OWNER-PREP when RAW/OWNER history not loaded |
| OWNER_BACKLOG_FINAL | Only reopen / genuinely new / regression / carry-forward |
| Coverage terminology | OBJECT_COVERAGE 100% + DISCOVERY_COMPLETENESS = NOT_GUARANTEED |
| ET A1 pipeline integration | `run-et-a1-full-audit.js`, `build-et-a1-owner-review.js` |
| Shared reusable library | `scripts/lib/discovery-stability.js` |
| Extended OWNER history | `scripts/lib/et-a1-owner-history.js` (v17 + PR603 sources) |

---

## TOOLING_GAPS_REMAINING

| Item | Status |
|------|--------|
| Luna prompt/context injection of prior RAW | Not in scope (no Luna run) |
| DA Kurss orchestrator wiring | Shared lib ready; separate integration task |
| Deterministic Luna sampling controls | Not changed |
| Live NEEDS_SOURCE_REVIEW seed from PR603 pending rows | Registry scaffold only; populated on next FULL_DISCOVERY |

---

## Validation matrix

| Check | Result |
|-------|--------|
| RAW_REGISTRY | **PASS** |
| SEMANTIC_REGISTRY | **PASS** |
| RAW_HISTORY_LOAD | **PASS** |
| SEMANTIC_DEDUP | **PASS** |
| DISCOVERY_CHURN | **PASS** |
| NEEDS_SOURCE_REVIEW_CARRY_FORWARD | **PASS** |
| OWNER_BACKLOG_GATE | **PASS** |
| ET_A1_HISTORICAL_RECONSTRUCTION | **PASS** |
| Production changes | **0** |
| DE changes | **0** |

---

## ET A1 PR #604 historical reconstruction (no Luna)

Regression fixture: `git show 5637d944:reports/temp/et-a1-full-audit.json`

| Metric | Expected | Actual |
|--------|----------|--------|
| CURRENT_FINDINGS | 23 | **23** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | 10 | **10** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | 13 | **13** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | 0 | **0** |
| OWNER_BACKLOG_FINAL | 0 | **0** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | YES | **YES** |

Run: `node scripts/test-et-a1-discovery-tooling-regression.js`  
Unit: `node scripts/test-discovery-stability-unit.js`

Semantic-family cards verified (`a1-im`, `a1-ins`, `a1-nehmen`, `a1-über`): none classified as GENUINELY_NEW.

---

## Files added/changed

| Path | Role |
|------|------|
| `scripts/lib/discovery-stability.js` | Shared MASTER v1.8 discovery-stability engine |
| `scripts/lib/et-a1-discovery-config.js` | ET A1 dataset config + regression expected values |
| `scripts/test-et-a1-discovery-tooling-regression.js` | PR #604 23/23 forensic regression |
| `scripts/test-discovery-stability-unit.js` | Churn, gates, carry-forward unit tests |
| `scripts/run-et-a1-full-audit.js` | v1.8 discovery layer + updated closure blob |
| `scripts/build-et-a1-owner-review.js` | PRE_BACKLOG gate + §11.9 metrics |
| `scripts/lib/et-a1-owner-history.js` | Extended OWNER sources (v17, PR603 sources) |
| `reports/discovery-registry/et-a1/*` | Registry schema + empty stores |

**Not changed:** `data/**`, `www/data/**`, OWNER accepted decisions, DE production.

---

## FINAL VERDICT

**MASTER_V1_8_DISCOVERY_TOOLING_COMPLETE**

Production changes = 0 · ET A1 23/23 reconstruction = PASS · OWNER_BACKLOG_FINAL for PR604 fixture = 0
