# PROJECT_LANGUAGE_MASTER_STANDARD — v1.11 inheritance verification

**Generated:** 2026-08-24T10:20:00Z  
**Verdict:** **MASTER_V1_11_INHERITANCE_VERIFIED_PASS**

## Source lineage

| Field | Value |
|-------|-------|
| PR #641 (v1.10 authoritative) | `cursor/master-v110-standard-4a7c` |
| PR #641 v1.10 source SHA | `6b22ad124c2248bd9e3d9090b383f884c8e35d08` |
| PR #642 branch (pre-fix) | `dff9f8c0aca404de164528e8957d57ddc94b8fe7` |
| Reconstruction method | v1.10 baseline + v1.11 patch only (`scripts/merge-master-v111-from-v110.js`) |

**Lineage:** v1.9 → v1.10 (PR #641) → v1.11 (PR #642, reconstructed)

## Problem found (pre-correction)

PR #642 was initially built from **main (v1.9)** and **overwrote** v1.10 content:

- Missing §5.3 / §5.4 Kurss runtime + legacyHtml gates
- Missing §7.2 two-layer coverage + §7.2.1 full residual scan
- Missing §7.19 semantic ≠ deterministic model
- Missing §10 regression items 16–24
- **§11.11 / §11.12 displaced** — v1.10 deterministic/Kurss closure gates replaced by v1.11 multi-translation sections

## Correction performed

1. Restored full PR #641 v1.10 document as base
2. Applied **only** v1.11 additions:
   - §1.1.1–§1.1.9 OWNER multi-translation hard gate (§1.1 v1.10 retained)
   - §7.25 `MULTI_TRANSLATION_SCAN`
   - §10.1 multiple-translation OWNER lock regression
   - §11.13 `MULTI_TRANSLATION_RESIDUAL_SCAN` (new — no collision)
   - §11.14 v1.11 closure metrics (new — no collision)
   - §13 / §14 / changelog v1.11 supplements
3. Preserved v1.10 §11.11 deterministic completeness + §11.12 Kurss browser gates

## Rule inventory

| Metric | Value |
|--------|-------|
| V1_10_RULES_EXPECTED | **24** |
| V1_10_RULES_RETAINED | **24** |
| V1_10_RULES_MISSING | **0** |
| V1_10_RULES_WEAKENED | **0** |
| V1_11_NEW_RULES_EXPECTED | **14** |
| V1_11_NEW_RULES_PRESENT | **14** |
| SECTION_NUMBER_COLLISIONS | **0** |
| BROKEN_INTERNAL_REFERENCES | **0** |
| MASTER_SEMANTIC_REGRESSION | **0** |
| PRODUCTION_CHANGES | **0** |

## v1.10 retained anchors (sample)

- §1.1 Learning First — viena galvenā nozīme + separator scan
- §5.3 Kurss LIVE / RUNTIME + `SOURCE_DATA_EXISTS ≠ RUNTIME_RENDER_PASS`
- §5.4 legacyHtml granular text-node scan
- §7.2 semantic `NOT_GUARANTEED` + deterministic `100% REQUIRED`
- §7.2.1 `TARGETED_OWNER_REGRESSION ≠ FULL_DETERMINISTIC_RESIDUAL_SCAN`
- §7.19 semantic ≠ deterministic completeness
- §10 items 16–24 (full residual, Kurss runtime, legacyHtml)
- §11.11 DETERMINISTIC COMPLETENESS hard gate
- §11.12 KURSS LIVE / BROWSER hard gate
- §14 v1.10 closure metrics block

## v1.11 additions verified

- `TRANSLATION_COUNT = 1`, `MULTIPLE_TRANSLATIONS_DETECTED`, `OWNER_DECISION_REQUIRED`
- Detection/analysis/recommendation allowed; **FINAL SELECTION = OWNER ONLY**
- `SKIP_OWNER_DECISION_REQUIRED`, COPY-ONLY after exact OWNER CURRENT/NEW
- §7.25 `MULTI_TRANSLATION_SCAN` (100% ordinary flashcard scope)
- §11.13 post-repair `MULTI_TRANSLATION_RESIDUAL_SCAN`
- §11.14 unresolved multi-translation blocks `FINAL_CLOSED_ON_MAIN`
- `standardStudy` exception, normative `dauerhaft` example, §10.1 OWNER-lock regression

## Final document

| Field | Value |
|-------|-------|
| Path | `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md` |
| MASTER_VERSION | **1.11** |
| Document blob (SHA-1) | `4ae2758f1de3feed43841627b898a14ab2c931e9` |
| Lines | 3294 |

## Merge authorization

**MASTER_V1_11_INHERITANCE_VERIFIED_PASS** — PR #642 authorized to merge after this commit.
