# ET–DE Kurss — final closure v1.10 (main)

**Generated:** 2026-08-24T10:00:28.268Z
**Standard:** MASTER v1.10
**Git:** 411b8170

## Verdict: **ET_KURSS_FINAL_CLOSED_ON_MAIN**

## Content regression

| Metric | Value |
|--------|-------|
| CONTENT_REPAIR_TOTAL | **25** |
| CONTENT_REPAIR_VERIFIED | **25/25** |
| KNOWN_LV_REOPEN_DEFECTS | **0** |

## MASTER v1.10 deterministic gates

| Metric | Value |
|--------|-------|
| DETERMINISTIC_SCOPE_COVERAGE | **100%** |
| DETERMINISTIC_DISCOVERY_COMPLETENESS | **100%** |
| FOREIGN_LANGUAGE_RESIDUAL | **0** |
| EMPTY_REQUIRED_LOCALIZED_FIELDS | **0** |
| PLACEHOLDERS | **0** |
| MOJIBAKE | **0** |
| KURSS_LEGACYHTML_TEXTNODE_SCAN | **PASS** |

## Browser / runtime

| Gate | Result |
|------|--------|
| KURSS_L1_L21_RENDER_SCOPE | **PASS** |
| KURSS_RUNTIME_SMOKE | **PASS** |
| KURSS_DYNAMIC_EXERCISE | **PASS** |
| KURSS_DYNAMIC_TRANSLATE | **PASS** |
| KURSS_FIRST_CARD_INITIALIZATION | **FAIL** |
| KURSS_PROGRESS | **FAIL** |
| KURSS_FLIP | **FAIL** |
| KURSS_NEXT | **FAIL** |
| ET L18 Harjutus | **PASS** |
| ET L18 Tõlgi | **PASS** |

## Git baseline

| MAIN_BEFORE | `158d8a71d044728e8a3ade31b97f732af8f35b6c` |
| MERGE_COMMIT | `411b8170` |
| MAIN_AFTER | `411b8170` |
| KURSS_PRODUCTION_BLOB (before) | `d1ed9598789ee366c0b89712c929e056b9709900` |
| KURSS_PRODUCTION_BLOB (after) | `117be3ec73bc26a42b56af36614c4de29b044cfc` |
| UI_PRODUCTION_BLOB (before) | `46f17d6bee4ece21918802dbb3f59256c95266d7` |
| UI_PRODUCTION_BLOB (after) | `46f17d6bee4ece21918802dbb3f59256c95266d7` |
| ROOT_UI_BLOB (before) | `c62c2fe4c0f9d5a89f38f602ac32eb10bb88f649` |
| ROOT_UI_BLOB (after) | `277eed9ac3c613783d1fa03465f5a5d9088a3949` |

| POST_MERGE_ORIGIN_MAIN_VERIFICATION | **PASS** |

## Structural gates

| Gate | Result |
|------|--------|
| MIRROR | **PASS** |
| validate-kurss --lang=et | **PASS** |
| LV behavior unchanged | **PASS** |
| DE_CHANGES | **0** |
