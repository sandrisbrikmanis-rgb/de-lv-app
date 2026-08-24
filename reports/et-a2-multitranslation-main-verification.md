# ET–DE A2 Multi-translation — Main merge verification

**Generated:** 2026-08-24T14:48:30Z  
**Source PR:** [#649](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/649)  
**MASTER:** v1.12  
**MODE:** Merge verified A2 multi-translation OWNER apply (230 mappings)

## Final verdict

**ET_A2_MULTITRANSLATION_CLOSED_ON_MAIN**

---

## Git integration

| Field | SHA |
|-------|-----|
| **MAIN_BEFORE** | `569e6c34d4e04ccfb14ce945a0e37e26ad0f4d9e` |
| **PR_HEAD** | `32cf265fc2d9a7d79604f9f9d80bcb0471e6e4de` |
| **MERGE_COMMIT** | `eb2a0397abd2a28060a4b8b46e6289e4648a2c11` |
| **MAIN_AFTER** | `eb2a0397abd2a28060a4b8b46e6289e4648a2c11` |

| Blob | SHA |
|------|-----|
| **A2_PRODUCTION_BLOB_BEFORE** (`data/et/a2.js` on MAIN_BEFORE) | `fb906cb1d74aeab5c513f75926706728fb77a84f` |
| **A2_PRODUCTION_BLOB_AFTER** (`data/et/a2.js` on MAIN_AFTER) | `35c795f80093a92d1a416c522a5306950b3e6a32` |

Merge title: Merge pull request #649 from sandrisbrikmanis-rgb/cursor/et-de-a2-multitranslation-owner-apply-4a7c

---

## Pre-merge verify (PR #649 HEAD)

| Gate | Required | Result |
|------|----------|--------|
| OWNER mappings retained | 230/230 | **230/230** |
| CURRENT_VALUE_MISMATCH | 0 | **0** |
| MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE | 100% | **100%** |
| MULTI_TRANSLATION_SCAN_COVERAGE | 100% | **100%** |
| MAIN_TRANSLATION_COUNT_VIOLATIONS | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED | 0 | **0** |
| DE_CHANGES | 0 | **0** |
| Unexpected production changes (DE) | 0 | **0** |
| MIRROR | PASS | **PASS** |
| SYNTAX | PASS | **PASS** |
| STRUCTURE | PASS | **PASS** |
| ID_ORDER | PASS | **PASS** |
| §13 regression A–E | PASS | **PASS** |

`ET_A2_MULTITRANSLATION_PREMERGE_VERIFY = PASS`

---

## Post-merge verify (`origin/main` after merge)

Verified on merged production blob — not inferred from PR branch alone.

| Gate | Required | Result |
|------|----------|--------|
| A2_CARDS | 1640 | **1640** |
| APPLIED_VERIFIED | 230/230 | **230/230** |
| CURRENT_VALUE_MISMATCH | 0 | **0** |
| MAIN_TRANSLATION_COUNT_VIOLATIONS | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED | 0 | **0** |
| MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE | 100% | **100%** |
| MULTI_TRANSLATION_SCAN_COVERAGE | 100% | **100%** |
| DE_CHANGES | 0 | **0** |
| Unexpected production changes | 0 | **0** |
| SYNTAX | PASS | **PASS** |
| MIRROR | PASS | **PASS** |
| STRUCTURE | PASS | **PASS** |
| ID_ORDER | PASS | **PASS** |
| §13 regression A–E | PASS | **PASS** |

`ET_A2_MULTITRANSLATION_POSTMERGE_VERIFY = PASS`

---

## OWNER apply scope (on main)

| Batch | Mappings |
|-------|----------|
| Primary 228 | `reports/et-a2-multitranslation-owner-decisions-accepted-materialized.md` |
| Residual 2 | `reports/et-a2-multitranslation-residual-2-owner-accepted.md` |

Study explanation/examples/comparison untouched — only authorized main fields (`lv`, `study.translation`).

---

## Verification tooling

- `scripts/verify-et-a2-multitranslation-premerge.js`
- `scripts/verify-et-a2-multitranslation-postmerge.js`
- `reports/temp/et-a2-multitranslation-premerge-verify.json`
- `reports/temp/et-a2-multitranslation-postmerge-verify.json`
