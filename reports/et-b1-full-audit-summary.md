# ET–DE B1 — audita kopsavilkums (MASTER v1.9)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.9** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `8123cf4aba7b8e19df030fefac7d89753b4c9d44` |
| **DATASET_PRODUCTION_BLOB** | `4981322cea91e522bfc32005b2c6d2516bafc88c` |
| **WWW DATASET BLOB** | `4981322cea91e522bfc32005b2c6d2516bafc88c` |
| **LAST FINAL CLOSURE MAIN SHA** | `N/A` |
| **LAST FINAL CLOSURE DATASET BLOB** | `N/A` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **FIRST_FULL_DISCOVERY** |
| **OWNER HISTORY AVAILABLE** | NO |
| **OWNER HISTORY FILES LOADED** | none |
| **OWNER APPROVED FIELDS TOTAL** | **0** |
| **OWNER APPROVED FIELDS CHECKED** | **0** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **0** |
| **OWNER APPROVED FIELDS DRIFTED** | **0** |
| **OWNER HISTORY GATE** | **N/A** |
| **OWNER HISTORY LOADED** | NO |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.9**
**Audita datums:** 2026-08-22
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **3367** |
| Luna coverage | **100%** |
| Study | **335/324** |
| RAW findings | **2738** |
| NEW_VALIDATED_REAL_FINDINGS | **2738** |
| OWNER_BACKLOG_FINAL | **2738** |
| PREVIOUSLY_SEEN_RAW | **0** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **2738** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **3367/3367 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **0** |
| sectionAccents | **17** |
| LV remnants | **714** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 384 |
| Deterministic | 2354 |
| OWNER_DECISION_CONFIRMED | 0 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **0** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **2738** |
| OWNER_BACKLOG_FINAL | **2738** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **N/A** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 3367/3367 does NOT mean all possible defects were found.

## 3. Validated findings

> Pilni findingi: [et-b1-full-audit-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-full-audit-GITHUB.md) (55 grupas).
