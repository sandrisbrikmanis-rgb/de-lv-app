# ET–DE B1 — final OWNER repair apply

**Authority:** `reports/et-b1-final-owner-decisions.md` (post PR #626)
**Post-#626 MAIN:** `49277b9f620931b909cc82c6c92b33cb4c9711ff`
**DE:** STRICT READ-ONLY

## Summary

| Metric | Value |
|--------|-------|
| LINGUISTIC_REQUESTED | **4** |
| LINGUISTIC_APPLIED_VERIFIED | **0** |
| CURRENT_VALUE_MISMATCH | **4** |
| STUDY_REMOVE_REQUESTED | **11** |
| STUDY_REMOVE_VERIFIED | **0** |
| ET_STUDY_COUNT_BEFORE | **324** |
| ET_STUDY_COUNT_AFTER | **324** |
| LV_MASTER_STUDY_COUNT | **324** |
| DE_CHANGES | **0** |
| UNEXPECTED_CHANGES | **0** |
| MIRROR | **PASS** |
| SYNTAX | **PASS** |
| PRODUCTION_BLOB_BEFORE | **f78868bdeac0afa0f790e2f2b680b6e66939ad1f** |
| PRODUCTION_BLOB_AFTER | **f78868bdeac0afa0f790e2f2b680b6e66939ad1f** |

## Verdict

**ET_B1_FINAL_OWNER_REPAIR_FAIL**

## Mismatches / skips

| kind | auditId | cardId | detail |
|------|---------|--------|--------|
| CURRENT_VALUE_MISMATCH | ET-B1-4250 | b1-anrichten-133 | expected "tekitama", got "kahju tekitama" |
| CURRENT_VALUE_MISMATCH | ET-B1-4257 | b1-Begleitung-294 | expected "saatel", got "kaasamine" |
| CURRENT_VALUE_MISMATCH | ET-B1-4303 | b1-halbtags-1182 | expected "osaajaga", got "pool tööpäeva" |
| CURRENT_VALUE_MISMATCH | ET-B1-4317 | b1-Kapelle-1467 | expected "kapell", got "kabel" |
| MISSING_STUDY_CARD | b1-handarbeit | b1-handarbeit | study card not found |
| MISSING_STUDY_CARD | b1-handwerk | b1-handwerk | study card not found |
| MISSING_STUDY_CARD | b1-heran | b1-heran | study card not found |
| MISSING_STUDY_CARD | b1-herbei | b1-herbei | study card not found |
| MISSING_STUDY_CARD | b1-nation | b1-nation | study card not found |
| MISSING_STUDY_CARD | b1-rat | b1-rat | study card not found |
| MISSING_STUDY_CARD | b1-testen | b1-testen | study card not found |
| MISSING_STUDY_CARD | b1-überreden | b1-überreden | study card not found |
| MISSING_STUDY_CARD | b1-überzeugen | b1-überzeugen | study card not found |
| MISSING_STUDY_CARD | b1-vernunft | b1-vernunft | study card not found |
| MISSING_STUDY_CARD | b1-verstand | b1-verstand | study card not found |

## Linguistic apply log

| auditId | cardId | before | after | status |
|---------|--------|--------|-------|--------|
| ET-B1-4250 | b1-anrichten-133 | kahju tekitama |  | CURRENT_VALUE_MISMATCH |
| ET-B1-4257 | b1-Begleitung-294 | kaasamine |  | CURRENT_VALUE_MISMATCH |
| ET-B1-4303 | b1-halbtags-1182 | pool tööpäeva |  | CURRENT_VALUE_MISMATCH |
| ET-B1-4317 | b1-Kapelle-1467 | kabel |  | CURRENT_VALUE_MISMATCH |

## Study remove log

| studyId | index | de | status |
|---------|-------|-----|--------|
| b1-handarbeit | 1190 | Handarbeit | MISSING_CARD |
| b1-handwerk | 1197 | Handwerk | MISSING_CARD |
| b1-heran | 1245 | heran | MISSING_CARD |
| b1-herbei | 1249 | herbei | MISSING_CARD |
| b1-nation | 1964 | Nation | MISSING_CARD |
| b1-rat | 2224 | Rat | MISSING_CARD |
| b1-testen | 2883 | testen | MISSING_CARD |
| b1-überreden | 2956 | überreden | MISSING_CARD |
| b1-überzeugen | 2962 | überzeugen | MISSING_CARD |
| b1-vernunft | 3080 | Vernunft | MISSING_CARD |
| b1-verstand | 3115 | Verstand | MISSING_CARD |

_Applied: 2026-08-23T10:54:48.556Z_