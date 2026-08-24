# ET–DE A1 Multi-translation — Main merge verification

**Generated:** 2026-08-24T14:09:00Z  
**Source PR:** [#647](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/647)  
**MASTER:** v1.12  
**MODE:** Merge verified A1 multi-translation OWNER apply only (61 mappings)

## Final verdict

**ET_A1_MULTITRANSLATION_CLOSED_ON_MAIN**

---

## Git integration

| Field | SHA |
|-------|-----|
| **MAIN_BEFORE** | `32b50f1c1cdc871eed4127fd67818ec8238df516` |
| **MERGE_COMMIT** | `fa7011e8dd0c975053c9c302ea875898dc9e63e8` |
| **MAIN_AFTER** | `fa7011e8dd0c975053c9c302ea875898dc9e63e8` |

Merge title: Merge PR #647: ET A1 multi-translation OWNER apply (61 mappings)

---

## Pre-merge verify (PR branch)

| Gate | Required | Result |
|------|----------|--------|
| REQUESTED OWNER mappings | 61 | **61** |
| APPLIED_VERIFIED | 61/61 | **61/61** |
| CURRENT_VALUE_MISMATCH | 0 | **0** |
| MAIN_TRANSLATION_COUNT_VIOLATIONS | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL | 0 | **0** |
| MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE | 100% | **100%** |
| FULL A1 scan | 702/702 | **702/702** |
| DE_CHANGES | 0 | **0** |
| SYNTAX | PASS | **PASS** |
| MIRROR | PASS | **PASS** |
| §13 regression A–E | PASS | **PASS** |

`ET_A1_MULTITRANSLATION_PREMERGE_VERIFY = PASS`

---

## Post-merge verify (`origin/main`)

| Gate | Required | Result |
|------|----------|--------|
| A1 cards | 702 | **702** |
| MAIN_TRANSLATION_COUNT_VIOLATIONS | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL | 0 | **0** |
| MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED | 0 | **0** |
| MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE | 100% | **100%** |
| MULTI_TRANSLATION_SCAN_COVERAGE | 100% | **100%** (702 fields scanned) |
| DE_CHANGES | 0 | **0** |
| SYNTAX | PASS | **PASS** |
| MIRROR | PASS | **PASS** |
| §13 regression A–E | PASS | **PASS** |

`ET_A1_MULTITRANSLATION_POSTMERGE_VERIFY = PASS`

---

## OWNER apply scope (on main)

| Batch | Authority | Mappings |
|-------|-----------|----------|
| Primary 59 | `reports/et-a1-multitranslation-owner-decisions-accepted.md` | 59 LABOT |
| Residual 2 | `reports/et-a1-multitranslation-residual-2-owner-accepted.md` | 2 LABOT (`es`, `heißen`) |

Study explanation/examples/comparison content was not rewritten — only authorized main translation fields (`study.translation` / `lv`).

---

## Reports on main

- [et-a1-multitranslation-owner-repair-apply.md](./et-a1-multitranslation-owner-repair-apply.md)
- [et-a1-multitranslation-residual-2-repair-apply.md](./et-a1-multitranslation-residual-2-repair-apply.md)
- [et-a1-multitranslation-targeted-regression.md](./et-a1-multitranslation-targeted-regression.md)

## Verification tooling

- `scripts/verify-et-a1-multitranslation-premerge.js`
- `scripts/verify-et-a1-multitranslation-postmerge.js`
- `reports/temp/et-a1-multitranslation-postmerge-verify.json`
