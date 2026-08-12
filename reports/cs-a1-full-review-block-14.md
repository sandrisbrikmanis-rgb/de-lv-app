# CS–DE A1 Full Review — Block 14 / Final (Findings 651–689)

**Classification-only block — no production changes.**

## Review coverage

- range: **FULL-A1-00651 … FULL-A1-00689**
- canonical findings reviewed: **39/39**
- **39/39 canonical findings classified**

## Summary

| Status | Count |
|--------|-------|
| **LABOT** | **0** |
| DEFERRED_STRUCTURAL_REVIEW | **2** |
| OWNER_OVERRIDE_FALSE_POSITIVE | **2** |
| STALE_ALREADY_FIXED | **11** |
| NEEDS_OWNER_REVIEW | **15** |
| FALSE_POSITIVE | **1** |
| FALSE_POSITIVE_CROSS_DATASET | **4** |
| CROSS_DATASET_CONTEXT_REVIEW | **4** |
| **Total** | **39** |

- production changes: **0**
- CS changes: **0**
- DE changes: **0**

## Integrity (verified, unchanged)

| Check | Result |
|-------|--------|
| cards | **702** |
| ID/order | **PASS** |
| syntax | **PASS** |
| mirror | **PASS** |
| DE READ-ONLY | **PASS** |
| production diff | **0** |

---

## Per-finding classification

| Finding | Card | Field / topic | Status | Notes |
|---------|------|---------------|--------|-------|
| FULL-A1-00651 | a1-hübsch-288 | study missing | DEFERRED_STRUCTURAL_REVIEW | CS has no Study; LV reference has Study |
| FULL-A1-00652 | a1-hübsch-288 | study.layout missing | DEFERRED_STRUCTURAL_REVIEW | Same cluster as 00651 |
| FULL-A1-00653 | a1-in | study.sectionAccents.examples[0].lv.purple[0] | OWNER_OVERRIDE_FALSE_POSITIVE | Current `Berlīnē` — explicit OWNER keep on lv accent target |
| FULL-A1-00654 | a1-in | examples[0].lv | STALE_ALREADY_FIXED | Current `Jsem v Berlíně` (Czech); raw `Berlīnē` superseded |
| FULL-A1-00655 | a1-in | sectionAccents detector | OWNER_OVERRIDE_FALSE_POSITIVE | `Berlīnē` at examples[0].lv.purple[0] is OWNER-approved |
| FULL-A1-00656 | a1-in | important accents | STALE_ALREADY_FIXED | important text uses `Berlíně`; stale detector vs current Czech text |
| FULL-A1-00657 | a1-land | study.explanation | STALE_ALREADY_FIXED | Explanation is Czech; raw foreign-reference finding superseded |
| FULL-A1-00658 | a1-land | comparison accent | STALE_ALREADY_FIXED | Stale sectionAccent detector; base comparison text is Czech |
| FULL-A1-00659 | a1-land | sectionAccents `planēta` | STALE_ALREADY_FIXED | Stale accent-detector finding; do not restore raw audit |
| FULL-A1-00660 | a1-Million-406 | lv | STALE_ALREADY_FIXED | Current `Milión` is Czech |
| FULL-A1-00661 | a1-Million-406 | lv (duplicate detector) | STALE_ALREADY_FIXED | Same root finding as 00660 |
| FULL-A1-00662 | a1-reis | study.explanation | STALE_ALREADY_FIXED | Current explanation is Czech |
| FULL-A1-00663 | a1-sitzen | sectionAccents `sēdēt` | NEEDS_OWNER_REVIEW | LV remnant still in production: explanation.purple |
| FULL-A1-00664 | a1-sitzen | sectionAccents `sēž` | NEEDS_OWNER_REVIEW | LV remnant still in production: explanation.purple |
| FULL-A1-00665 | a1-sitzen | sectionAccents cluster | NEEDS_OWNER_REVIEW | Stale accent cluster; main Study text is Czech |
| FULL-A1-00666 | a1-sitzen | sectionAccents cluster | NEEDS_OWNER_REVIEW | Same sitzen accent cluster |
| FULL-A1-00667 | a1-sitzen | sectionAccents cluster | NEEDS_OWNER_REVIEW | Same sitzen accent cluster |
| FULL-A1-00668 | a1-sitzen | sectionAccents cluster | NEEDS_OWNER_REVIEW | Same sitzen accent cluster |
| FULL-A1-00669 | a1-sitzen | sectionAccents cluster | NEEDS_OWNER_REVIEW | Same sitzen accent cluster |
| FULL-A1-00670 | a1-stehen | comparison accent | NEEDS_OWNER_REVIEW | LV `sēdēt` still in comparison.sectionAccents |
| FULL-A1-00671 | a1-stehen | sectionAccents cluster | NEEDS_OWNER_REVIEW | Stale accent cluster vs Czech base text |
| FULL-A1-00672 | a1-über | sectionAccents `tēma` | NEEDS_OWNER_REVIEW | LV `tēma` still in tip.sectionAccents |
| FULL-A1-00673 | a1-über | sectionAccents cluster | NEEDS_OWNER_REVIEW | Same über accent cluster |
| FULL-A1-00674 | a1-über | stale/wrong accent | NEEDS_OWNER_REVIEW | Stale detector; do not auto-restore raw audit |
| FULL-A1-00675 | a1-verstehen | study.explanation[2] | STALE_ALREADY_FIXED | Current text is Czech (`Lotyšštinu…`) |
| FULL-A1-00676 | a1-Zitrone-666 | lv | STALE_ALREADY_FIXED | Current `Citrón` is Czech |
| FULL-A1-00677 | a1-Zitrone-666 | lv (duplicate detector) | STALE_ALREADY_FIXED | Same root finding as 00676 |
| FULL-A1-00678 | a1-essen | accents `ēst` | NEEDS_OWNER_REVIEW | LV `ēst` still in study.accents.purple |
| FULL-A1-00679 | a1-essen | sectionAccents remnant | NEEDS_OWNER_REVIEW | LV accent remnant vs Czech Study text |
| FULL-A1-00680 | a1-essen | stale accent `ēst` | NEEDS_OWNER_REVIEW | Stale detector; accent not yet owner-authorized |
| FULL-A1-00681 | a1-essen | accent `esse` | FALSE_POSITIVE | `esse` is valid DE verb-form accent target, not stale LV |
| FULL-A1-00682 | bringen | cross-dataset A1 vs A2 | CROSS_DATASET_CONTEXT_REVIEW | A1 `Přinést • Odnést` vs A2 `Přinést • Doručit` — do not unify |
| FULL-A1-00683 | da | cross-dataset A1 vs B1 | FALSE_POSITIVE_CROSS_DATASET | Different `da` meanings across levels |
| FULL-A1-00684 | erst | cross-dataset A1 vs A2 | CROSS_DATASET_CONTEXT_REVIEW | Different contextual senses |
| FULL-A1-00685 | gleich | cross-dataset A1 vs A2 | FALSE_POSITIVE_CROSS_DATASET | Same senses, lexical order variant |
| FULL-A1-00686 | legen | cross-dataset A1 vs A2 | CROSS_DATASET_CONTEXT_REVIEW | `Položit` vs `Položit se` not auto-unifiable |
| FULL-A1-00687 | liegen | cross-dataset A1 vs A2 | FALSE_POSITIVE_CROSS_DATASET | Sense-order difference only |
| FULL-A1-00688 | Mal | cross-dataset A1 vs B1 | FALSE_POSITIVE_CROSS_DATASET | Different `Mal` senses/contexts |
| FULL-A1-00689 | über | cross-dataset A1 vs A2 | CROSS_DATASET_CONTEXT_REVIEW | Audit comparison does not prove A1 error |

---

## NEEDS_OWNER_REVIEW — unresolved production snapshot

These findings remain open. **No changes made in this block.**

| Finding(s) | Card | Field | Current value (snapshot) | Raw audit issue |
|------------|------|-------|--------------------------|-----------------|
| 00663–00669 | a1-sitzen | sectionAccents | `sēdēt`, `sēž` in explanation/comparison accents | LV remnants in accent targets |
| 00670–00671 | a1-stehen | sectionAccents | `sēdēt` in comparison accent | LV remnant in accent target |
| 00672–00674 | a1-über | sectionAccents | `tēma` in tip accents | LV remnant in accent target |
| 00678–00680 | a1-essen | accents / sectionAccents | `ēst` in accents.purple | LV remnant in accent target |

---

## Key rules applied

- No automatic cross-dataset unification
- No missing Study creation (`a1-hübsch-288` deferred to MISSING STUDY PARITY)
- No DE field changes
- No raw-audit value restoration
- Canonical finding = audit record, not automatic repair instruction

---

_Classified: 2026-08-12 — production changes: 0_
