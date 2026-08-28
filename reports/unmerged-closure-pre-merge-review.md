# Unmerged closure — pre-merge review

**Generated:** 2026-08-28T19:41:40.525Z
**VERDICT:** READY_FOR_MERGE

## Baseline

| Key | Value |
|-----|-------|
| ORIGIN_MAIN_SHA | `93c372824359b00bd73d37ae3193bdf587118e75` |
| PR #693 HEAD | `b789acf2289042ba390130210bfd03dae24a7869` |
| PRE_APPLY_HEAD | `effe90149ddca51a51943ba2a0ecdac2460e5f71` |
| APPLY_COMMIT_SHA | `2732131c5146b0e58d0aad4daf1e9bea9789a7b7` |
| BASE_BRANCH | main |
| PR_STATE | OPEN |
| MERGEABLE | MERGEABLE |
| MERGE_CONFLICTS | 0 |

## Apply verification (independent)

| Metric | Value |
|--------|------:|
| RAW_MAPPING_ROWS | 2937 |
| UNIQUE_TARGET_FIELDS | 963 |
| APPLIED_VERIFIED | 963/963 |
| RAW_MAPPING_VERIFIED | 2937/2937 |
| FINAL_VALUE_MISMATCH | 0 |
| FAILED | 0 |
| EN_B1_UNIQUE | 16 |
| CS_B2_UNIQUE | 947 |

## Production diff scope

| Check | Value |
|-------|------:|
| UNEXPECTED_PRODUCTION_FILES | 0 |
| UNEXPECTED_PRODUCTION_FIELDS | 0 |
| DE_CHANGES | 0 |
| CARD_ADDITIONS | 0 |
| CARD_DELETIONS | 0 |
| ORDER_CHANGES | 0 |

## Technical gates

| Gate | Status |
|------|--------|
| MIRROR_EN_B1 | PASS |
| MIRROR_CS_B2 | PASS |
| MIRROR_MISMATCH | 0 |
| SYNTAX | PASS |
| IMPORT_LOAD | PASS |
| ID_UNIQUENESS | PASS |
| ID_ORDER | PASS |
| STRUCTURE | PASS |
| EN_PARITY | PASS |
| CS_PARITY | PASS |
| STUDY | PASS |
| PLACEHOLDERS | NOT_APPLICABLE |
| HTML | NOT_APPLICABLE |

## OWNER decisions

| Metric | Value |
|--------|------:|
| OWNER_REVIEWED | 53/53 |
| OWNER_PENDING | 0 |
| CLOSED_SUPERSEDED | 43 |
| NEEDS_REPAIR | 9 |
| FALSE_POSITIVE | 1 |

## CS B2 full lv verification

| Metric | Value |
|--------|------:|
| Total CS B2 fields | 947 |
| CS B2 lv fields | 898 |
| CS B2 study fields | 49 |
| Verified | 947/947 |
| Failures | 0 |
| CURRENT remnants | 0 |

## Git & PR

| Check | Value |
|-------|-------|
| GIT_STATUS | CLEAN |
| FAILING_CHECKS | 0 |
| PENDING_CHECKS | 0 |
| MERGE | NOT_PERFORMED |
| PHASE_1 | FORBIDDEN |
