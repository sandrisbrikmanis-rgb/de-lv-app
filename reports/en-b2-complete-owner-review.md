# EN–DE B2 — Complete owner review (consolidated)

**Date:** 2026-08-09
**Mode:** READ-ONLY — OWNER REVIEW PREPARATION

**Production changes:** 0
**Production integrity:** PASS
**DE READ-ONLY:** PASS

---

## Coverage

| Source | Count |
| --- | ---: |
| Luna full-audit candidates (total) | 1019 |
| Previously completed CRITICAL review | 10 |
| Remaining Luna HIGH/MEDIUM/LOW reviewed | 1009 |
| Deterministic-only additions | 1 |
| Duplicates removed in consolidation | 0 |
| **Final unique owner-review findings** | **1020** |

## Consolidated status

| Status | Count |
| --- | ---: |
| FIX | 957 |
| KEEP | 43 |
| DE_SOURCE_ISSUE | 19 |
| NEEDS_OWNER_REVIEW | 1 |
| **TOTAL UNIQUE** | **1020** |

## Consolidated validated severity

| Validated severity | Count |
| --- | ---: |
| CRITICAL | 10 |
| HIGH | 461 |
| MEDIUM | 431 |
| LOW | 75 |
| NONE | 43 |
| **TOTAL UNIQUE** | **1020** |

---

# OWNER DECISIONS REQUIRED


### b2-Rain-1491 — Rain

- **Field:** lv
- **Current EN:** Hedgehog
- **Issue:** Status NEEDS_OWNER_REVIEW for exact replacement among valid agricultural EN terms. Provisional recommendation: Field margin strip. Reject Luna Hedge (semantically inaccurate for Rain). Reject keeping Hedgehog.
- **Option A:** Hedgehog
- **Option B:** Hedge
- **Recommendation:** Field margin strip
- **Owner question:** Choose standard flashcard gloss: Field margin strip vs Balk vs Field boundary strip vs Headland (latter less precise for Rain).

---

## NON-LINGUISTIC / RENDERER NOTES

- **b2-sich verlaufen** (sich verlaufen): minimalStudy flagged studyObjectNoRenderable by validate-study-design (renderer policy, LOW). Not a linguistic FIX unless Luna flagged EN text.
- **b2-verlaufen** (verlaufen): minimalStudy flagged studyObjectNoRenderable by validate-study-design (renderer policy, LOW). Luna additionally flagged linguistic issues on study.translation/explanation.

---

## Artefacts

- `reports/en-b2-complete-owner-review.md`
- `reports/temp/en-b2-complete-owner-review.json`
- `reports/en-b2-remaining-owner-review.md`
- `reports/temp/en-b2-remaining-owner-review.json`
- `reports/en-b2-critical-owner-review.md`
- `reports/temp/en-b2-approved-repair-candidates.json`
