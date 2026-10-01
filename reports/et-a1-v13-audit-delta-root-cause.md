# ET–DE A1 — v1.3 Audit Baseline / Deterministic Delta Root-Cause

**Mode:** READ-ONLY · production changes = 0

## Verdict: AUDIT_DELTA_EXPLAINED

171 findings vs closure 0/0/134 metrics **nav radušies jaunā kļūda uz identiska production**. v1.3 audits tika palaists uz **`origin/main` production** (`ead64260`), bet closure atskaites balstījās uz **audit branch production** (`2aaaef9f`) pēc 10 Study apply + sectionAccents repair + 177 OWNER repairs — **šīs izmaiņas nav merge uz main**.

| | Previous (closure) | Current (v1.3) |
|--|-------------------|------------------|
| Audit SHA | `8553c3ef2caa` | `72160fd246ce` |
| Branch | `cursor/et-de-a1-full-audit-ba9e` | `cursor/et-de-a1-full-audit-v13-ba9e` |
| MASTER | 1.1 | 1.3 |
| Production blob | `2aaaef9ff88b` | `ead642601c40` |
| **PRODUCTION_IDENTICAL** | | **NO** (83769 bytes diff) |

## Snapshot summary

| Metric | Previous | Current | Root cause |
|--------|----------|---------|------------|
| Study | 134/134 | 124/134 | **BASELINE_MISMATCH** — 10 Study on branch only |
| LV remnants | 0 | 46 | **BASELINE_MISMATCH** — OWNER repairs on branch only |
| sectionAccents | 0 | 41 | **BASELINE_MISMATCH** — auto-repair on branch only |
| RAW findings | 67 | 171 | Mixed baseline + Luna; **not 171 repair candidates** |

## 10 missing Study objects

| Card ID | DE | Classification |
|---------|-----|----------------|
| a1-besuch | Besuch | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-besuchen | besuchen | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-fussball-study | Fußball | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-ganz-study | ganz | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-gefallen-study | gefallen | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-geschichte-study | Geschichte | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-geschwister-study | Geschwister | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-grosseltern-study | Großeltern | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-hand-study | Hand | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |
| a1-huebsch | hübsch | REAL_PRODUCTION_CHANGE / BASELINE_MISMATCH |

## 171/171 classification

| Root cause | Count |
|------------|-------|
| REAL_NEW_PRODUCTION_DEFECT | **0** |
| OWNER_DECISION_CONFIRMED | **0** |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **31** |
| NEW_VALIDATED_REAL_FINDING | **0** |
| FALSE_POSITIVE_OR_STYLE_ONLY | **2** |
| VALIDATOR_RULE_CHANGE | **0** |
| BASELINE_MISMATCH | **138** |
| OTHER | **0** |
| **TOTAL** | **171** |

## Key metrics

PREVIOUS_PRODUCTION_SHA: 2aaaef9ff88be148fffd7cae97423d97a0aa3ded
CURRENT_PRODUCTION_SHA: ead642601c40f5949a3e92ae3f3cb32c7373b433
PRODUCTION_IDENTICAL: NO

RAW_FINDINGS: 171
OWNER_DECISION_CONFIRMED: 0
OWNER_DECISION_REOPEN_REQUIRED: 0
REPAIR_REGRESSION: 0
PRE_EXISTING_BUT_PREVIOUSLY_MISSED: 31
NEW_VALIDATED_REAL_FINDINGS: 0
FALSE_POSITIVE_OR_STYLE_ONLY: 2
VALIDATOR_RULE_CHANGE: 0
BASELINE_MISMATCH: 138

171/171 CLASSIFIED: YES
Production changes made by this task: 0
DE changes: 0

**FINAL VERDICT: AUDIT_DELTA_EXPLAINED**

Full matrix: `reports/temp/et-a1-v13-audit-delta-root-cause.json`