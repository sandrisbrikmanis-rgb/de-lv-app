# PROJECT_LANGUAGE_MASTER_STANDARD — v1.7 → v1.8 update report

**Date:** 2026-08-20  
**Task:** Documentation-only MASTER standard update (no production changes)

---

## Git identity

| Field | Value |
|-------|-------|
| **MAIN_BASE_SHA** | `53a6abb159b72e89eddad635cfee64b2a3528ad0` |
| **WORK_BRANCH** | `cursor/master-v1-8-update-ba9e` |
| **HEAD_SHA** | `31aa0d1a` |
| **MASTER_OLD_VERSION** | **1.7** |
| **MASTER_NEW_VERSION** | **1.8** |

---

## Evidence basis (diagnostic, not encoded in MASTER)

ET–DE A1 discovery stability diagnostic (PR #605) on identical/near-identical production:

| Metric | Value |
|--------|------:|
| CURRENT_FINDINGS | 23 |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | 10 |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | 13 |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | 0 |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | YES |

MASTER v1.8 generalizes these into universal rules (§7.11–§7.19); Card IDs are not normative.

---

## Files changed

| File | Change |
|------|--------|
| `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md` | v1.7 → v1.8 · §7.11–§7.19 discovery stability · §11.9 · §15.2 · §17 workflow |
| `scripts/run-et-a1-full-audit.js` | Active MASTER ref v1.7 → v1.8 |
| `scripts/build-et-a1-owner-review.js` | v1.8 refs (7 locations) |
| `scripts/build-et-a1-pr603-owner-history-validation.js` | v1.8 refs |
| `scripts/audit-da-kurss-full.js` | Active MASTER ref v1.7 → v1.8 |
| `scripts/build-da-kurss-full-audit-github.js` | Active MASTER ref v1.7 → v1.8 |
| `scripts/build-da-kurss-owner-review.js` | v1.8 refs (4 locations) |

**Not changed (per task):** `data/**`, `www/data/**`, historical `reports/**` audit artifacts (except this update report).

---

## v1.7 requirements retained

All v1.7 sections remain in force unless explicitly extended by v1.8, including:

- Learning First
- DE STRICT READ-ONLY
- §7.9 authoritative production line + force-baseline prohibition
- §7.10 OWNER review artifacts (100% coverage gate)
- §11.8 OWNER history hard gate
- §15.1 agent non-bypass contract
- repair → main → re-audit sequence

**v1.7 REQUIREMENTS RETAINED = PASS**

---

## v1.8 requirements added

| Section / concept | Status |
|-------------------|--------|
| §7.11 NEW-TO-AUDIT ≠ NEW-PRODUCTION-ERROR | PRESENT |
| §7.11.1 Discovery root-cause categories | PRESENT |
| §7.12 RAW_AUDIT_HISTORY_GATE | PRESENT |
| §7.12.1 RAW candidate persistence | PRESENT |
| §7.13 SEMANTIC_FINDING_REGISTRY | PRESENT |
| §7.13.1 Path-family semantic deduplication | PRESENT |
| §7.14 Discovery reproducibility gate + DISCOVERY_CHURN_RATE | PRESENT |
| §7.14.1 Discovery churn stop rule | PRESENT |
| §7.15 Coverage disclaimer (OBJECT_COVERAGE / DISCOVERY_COMPLETENESS) | PRESENT |
| §7.16 PASS ≠ absolute correctness | PRESENT |
| §7.17 NEEDS_SOURCE_REVIEW_CARRY_FORWARD | PRESENT |
| §7.18 PRE_BACKLOG_HISTORY_GATE | PRESENT |
| §7.19 Audit completeness model | PRESENT |
| §11.9 OWNER_BACKLOG_FINAL validity metrics | PRESENT |
| §15.2 Agent discovery non-bypass contract | PRESENT |
| §7.8.3 baseline header discovery fields | PRESENT |
| §17 workflow discovery validation steps | PRESENT |
| Version 1.8 changelog in §20 | PRESENT |
| End marker `MASTER 1.8 --- END` | PRESENT |

---

## Validation

| Check | Result |
|-------|--------|
| MASTER_VERSION = 1.8 | PASS |
| v1.7 requirements retained | PASS |
| RAW_AUDIT_HISTORY_GATE | PRESENT |
| SEMANTIC_FINDING_REGISTRY | PRESENT |
| DISCOVERY_REPRODUCIBILITY_GATE | PRESENT |
| DISCOVERY_CHURN | PRESENT |
| COVERAGE_DISCLAIMER | PRESENT |
| NEEDS_SOURCE_REVIEW_CARRY_FORWARD | PRESENT |
| PRE_BACKLOG_HISTORY_GATE | PRESENT |
| OWNER_BACKLOG_VALIDITY (§11.9) | PRESENT |
| DISCOVERY_NON_BYPASS_CONTRACT (§15.2) | PRESENT |
| Competing MASTER documents | 0 |
| Broken active MASTER refs (scripts) | 0 |
| Production changes | 0 |
| DE / LV / ET / DA / other language data | 0 |

---

## DISCOVERY_TOOLING_GAPS_FOUND

READ-ONLY inventory of **active** audit scripts missing v1.8 mechanisms (tooling repair = separate task):

| Script | Missing capability |
|--------|-------------------|
| `scripts/run-et-a1-full-audit.js` | RAW audit history load; semantic finding registry; discovery churn; PRE_BACKLOG_HISTORY_GATE before OWNER-PREP; NEEDS_SOURCE_REVIEW carry-forward |
| `scripts/audit-et-a1-linguistic.js` | Cross-run RAW registry persistence; semantic-family dedup; reproducibility metadata export |
| `scripts/lib/openai-et-a1-audit.js` | Previous RAW history in audit context; semantic issue signature; deterministic sampling controls |
| `scripts/lib/et-a1-audit-helpers.js` | Semantic registry helpers; path-family matching |
| `scripts/lib/et-a1-owner-history.js` | RAW/validated audit history (OWNER-only today) |
| `scripts/build-et-a1-owner-review.js` | §11.9 backlog validity metrics; §7.18 filtered OWNER backlog; discovery churn header |
| `scripts/build-et-a1-pr603-owner-history-validation.js` | Generalized semantic registry (PR603-specific); discovery churn |
| `scripts/audit-da-kurss-full.js` | RAW history gate; semantic registry; discovery reproducibility |
| `scripts/build-da-kurss-owner-review.js` | §11.9 metrics; PRE_BACKLOG_HISTORY_GATE |
| `scripts/run-da-kurss-full-audit.js` | Same discovery-stability layer (if used as FULL_DISCOVERY orchestrator) |

**Note:** `scripts/audit-et-a1-discovery-stability-root-cause.js` implements forensic analysis but is diagnostic-only and not wired into production audit orchestrators.

---

## FINAL VERDICT

**MASTER_V1_8_UPDATE_COMPLETE**

Production changes = 0 · DE changes = 0 · Competing MASTER = 0
