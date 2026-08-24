# ET–DE Teikumi (Sentences) Multi-translation — Main merge verification

**Generated:** 2026-08-24T16:35:00Z  
**Source PR:** [#659](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/659)  
**MASTER:** v1.12  
**MODE:** Merge verified Teikumi OWNER apply (120 LABOT mappings)

## Final verdict

**ET_TEIKUMI_MULTITRANSLATION_CLOSED_ON_MAIN**

---

## Git integration

| Field | SHA |
|-------|-----|
| **MAIN_BEFORE** | `0e627680bc9a8cffa442470c4c24ae973a690ebc` |
| **PR_HEAD** | `d5bd507d0e0196757e26c54433d4014487e9e251` |
| **MERGE_COMMIT** | `11a4b1d3f144e5748100e3738a391d1f4fc14b5f` |
| **MAIN_AFTER** | `11a4b1d3f144e5748100e3738a391d1f4fc14b5f` |

| Blob | SHA |
|------|-----|
| **TEIKUMI_PRODUCTION_BLOB_BEFORE** (`data/et/sentences.js` on MAIN_BEFORE) | `8f8f438086d0b72953e4424143691fc7167413bc` |
| **TEIKUMI_PRODUCTION_BLOB_AFTER** (`data/et/sentences.js` on MAIN_AFTER) | `23f78bb41038dc41ee99ff3a40a5ff765a83bf88` |

Merge title: Merge pull request #659 from sandrisbrikmanis-rgb/cursor/et-de-teikumi-multitranslation-owner-apply-4a7c

---

## Pre-merge verify (PR #659 HEAD)

| Gate | Required | Result |
|------|----------|--------|
| OWNER mappings | 120/120 | **120/120** |
| CURRENT_VALUE_MISMATCH | 0 | **0** |
| TEIKUMI_CARDS | 796 | **796** |
| MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE | 100% | **100%** |
| MULTI_TRANSLATION_SCAN_COVERAGE | 100% | **100%** |
| MAIN_TRANSLATION_COUNT_VIOLATIONS | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL | 0 | **0** |
| DE_CHANGES | 0 | **0** |
| MIRROR / SYNTAX / STRUCTURE / ID_ORDER | PASS | **PASS** |
| §13 regression A–E | PASS | **PASS** |

`ET_TEIKUMI_MULTITRANSLATION_PREMERGE_VERIFY = PASS`

Artifact: `reports/temp/et-sentences-multitranslation-premerge-verify.json`

---

## Post-merge verify (`origin/main` after merge)

Verified on merged production blob — not inferred from PR branch alone.

Command: `node scripts/verify-et-sentences-multitranslation-postmerge.js`

| Gate | Required | Result |
|------|----------|--------|
| TEIKUMI_CARDS | 796 | **796** |
| APPLIED_VERIFIED | 120/120 | **120/120** |
| CURRENT_VALUE_MISMATCH | 0 | **0** |
| MAIN_TRANSLATION_COUNT_VIOLATIONS | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED | 0 | **0** |
| PUNCTUATION_FALSE_SPLITS | 0 | **0** |
| MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE | 100% | **100%** |
| MULTI_TRANSLATION_SCAN_COVERAGE | 100% | **100%** (796 fields) |
| DE_CHANGES | 0 | **0** |
| UNEXPECTED_PRODUCTION_CHANGES | 0 | **0** |
| SYNTAX | PASS | **PASS** |
| MIRROR | PASS | **PASS** |
| STRUCTURE | PASS | **PASS** |
| ID_ORDER | PASS | **PASS** |
| §13 regression A–E | PASS | **PASS** |

`ET_TEIKUMI_MULTITRANSLATION_POSTMERGE_VERIFY = PASS`

Artifact: `reports/temp/et-sentences-multitranslation-postmerge-verify.json`

---

## OWNER apply scope (on main)

120 LABOT from `reports/et-teikumi-multitranslation-owner-decisions-accepted.md`:

- **40 written** — bullet `•` alternative translations collapsed to one OWNER phrase on `lv`
- **80 already matched** — comma punctuation false splits (`OWNER NEW = CURRENT`); scanner fix in `main-translation-field-inventory.js` treats comma-only Estonian (no `•`) as internal punctuation

Study explanation/examples/comparison untouched — only `lv` main fields. DE strict read-only.

---

## Verification tooling

- `scripts/verify-et-sentences-multitranslation-premerge.js`
- `scripts/verify-et-sentences-multitranslation-postmerge.js`
- `scripts/build-et-sentences-multitranslation-owner-materialize.js`
- `scripts/apply-et-sentences-multitranslation-owner-repair.js`
- `reports/temp/et-sentences-multitranslation-premerge-verify.json`
- `reports/temp/et-sentences-multitranslation-postmerge-verify.json`
