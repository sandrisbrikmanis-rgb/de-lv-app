# ET–DE C1/C2 — final NSR closure

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9

## Merge record (PR #629)

| Field | SHA |
|-------|-----|
| MAIN_BEFORE | `d1ea2b05bde9d5a7d2854c8b83e634a48179185c` |
| MERGE_COMMIT | `69360f44223e50815c1f8de2169909b1830fdb26` |
| MAIN_AFTER (closure base) | `69360f44223e50815c1f8de2169909b1830fdb26` |
| C1_PRODUCTION_BLOB_BEFORE | `d72c3f635504feb1bd69bd8f4241a53ad35c475d` |
| C2_PRODUCTION_BLOB_BEFORE | `5a74596d0d9f9f4448000c110572e367268b3e43` |
| C1_PRODUCTION_BLOB_AFTER | `9ff5e1bffe0a41a4762ae1c3033a5cfda8144f51` |
| C2_PRODUCTION_BLOB_AFTER | `b23529c27039d14df239a3ee235256f8254d95a9` |

## sectionAccents

| Metric | Value |
|--------|-------|
| RAW_BEFORE | **4** |
| DEDUPED_TARGETS_BEFORE | **4** |
| APPLIED_REPAIRS | **12** |
| OWNER_DECISION_REQUIRED | **0** |
| RAW_AFTER | **0** |
| DEDUPED_AFTER | **0** |

## Study-count NSR

| Card | Classification | Action |
|------|----------------|--------|
| c1-wettbewerb (Wettbewerb) | TRUE_EXTRA_STUDY | REMOVED_STUDY |
| c2-inwiefern (inwiefern) | TRUE_EXTRA_STUDY | REMOVED_STUDY |
| c2-inwieweit (inwieweit) | TRUE_EXTRA_STUDY | REMOVED_STUDY |

| C1 studies final | **15** (expected 15) |
| C2 studies final | **1** (expected 1) |

## OWNER retention

| OWNER LABOT retained | **76/76** |
| NELABOT retained | **3/3** |
| FALSE_POSITIVE retained | **7/7** |

## Gates

| DE changes | **0** |
| ET prose changes (excl. sectionAccents) | **0** |
| Mirror C1 | **PASS** |
| Mirror C2 | **PASS** |
| Syntax | **PASS** |

## FINAL VERDICT: **ET_C1C2_FINAL_NSR_CLOSURE_PASS**

### Study removal evidence

- **c1-wettbewerb**: LV MASTER C1 has Wettbewerb card without study; ET-only standardStudy.
- **c2-inwiefern**: LV MASTER C2 has only Gewichtseinheit study; inwiefern has no LV study counterpart.
- **c2-inwieweit**: LV MASTER C2 has only Gewichtseinheit study; inwieweit has no LV study counterpart.

### sectionAccents dedup targets (before)

- c1-wettbewerb · sectionAccents.tip (1 raw terms)
- c1-aufrechterhalten · sectionAccents.examples[0].lv (1 raw terms)
- c1-aufrechterhalten · sectionAccents.examples[1].lv (1 raw terms)
- c1-aufrechterhalten · sectionAccents.examples[2].lv (1 raw terms)
