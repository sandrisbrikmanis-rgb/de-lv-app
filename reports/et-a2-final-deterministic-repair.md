# ET–DE A2 — final deterministic repair

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**MAIN_BASE_SHA:** `62a2cb078b59713287d8723dba0259795df408a9`
**WORK_BRANCH:** `cursor/et-de-a2-final-deterministic-repair-4a7c`
**PRODUCTION_BLOB_BEFORE:** `8cba00c21d6811b998a0340248e04f21fa6f1296`
**PRODUCTION_BLOB_AFTER:** `fb906cb1d74aeab5c513f75926706728fb77a84f`

## Blocker inventory

| RAW_DETERMINISTIC_BLOCKERS | **66** |
| DEDUPED_REPAIR_TARGETS | **64** |

## Gates

| Gate | Before | After |
|------|--------|-------|
| SECTIONACCENTS | **4** | **0** |
| LV_REMNANTS_RAW | **59** | **0** |
| STRUCTURAL | **FAIL** | **PASS** |
| GERMAN_INTEGRITY | **PASS** | **PASS** |

## Apply

| APPLIED_VERIFIED (LV artifacts) | **59** |
| CURRENT_VALUE_MISMATCH | **0** |
| sectionAccents auto-fixed | **75** |
| DE_CHANGES | **0** |
| MIRROR | **PASS** |
| SYNTAX | **PASS** |

## FALSE_POSITIVE (checker/tooling only)

- `a2-Weste-1584` · `lv=vest` — valid ET gloss; removed `vest` from LV_WORDS regex
- `a2-wagen` germanIntegrity — sectionAccents scalar/array normalization in collect
