# EN–DE B2 Full Linguistic & Quality Audit

**Audit date:** 2026-08-09
**Mode:** READ-ONLY — no production data modified
**Audited files:** `data/en/b2.js`, mirror `www/data/en/b2.js`
**Master reference:** `data/b2.js` (LV–DE etalon / DE READ-ONLY source)
**Standards:** LANGUAGE_AUDIT_STANDARD, APP_QUALITY_STANDARD, STUDY_CARD_RULES, COMPARISON_STUDY_RULES, UI_UX_VISUAL_COLOR_RULES

---

## Scope

| Metric | Value |
| --- | ---: |
| Cards expected | **2118** |
| Cards audited | **2118** |
| Study cards (LV master) | **60** |
| Study cards (EN) | **60** |
| Normal flashcards | **2058** |
| standardStudy | **15** |
| minimalStudy | **45** |
| comparisonStudy | **0** |

---

## Severity summary

- CRITICAL: **0**
- HIGH: **1**
- MEDIUM: **0**
- LOW: **2**
- WARNING: **0**
- DE SOURCE ISSUE: **0**

**Total findings (incl. LOW/documentation):** **3**

---

## Deterministic validation

| Check | Result |
| --- | --- |
| JavaScript syntax (node --check) | **PASS** |
| data/en/b2.js ≡ www mirror | **PASS** |
| Record count vs LV master (2118) | **PASS** |
| Study count parity (60/60) | **PASS** |
| DE READ-ONLY (German fields) | **PASS** (0 issues) |
| Structural parity (order/layout/fields) | **PASS** |
| Mojibake scan | **PASS** |
| audit-language-parity --lang=en (B2 row) | **PASS** |
| validate-study-design B2 sectionAccentIssues | **0** (TECHNICAL) |
| validate-study-design studyObjectNoRenderable | **2** (minimalStudy) |
| LV remnants in learner fields | **1** |
| Semicolons in translation fields | **0** |
| sectionAccents heuristic issues | **0** |
| Main translation scan (OK/WARNING/ERROR) | **906/1212/0** |

---

## Full findings list

| Level | Severity | Type | Card ID | DE | Current EN | Recommended EN | Field | Reason |
|---|---|---|---|---|---|---|---|---|
| B2 | HIGH | LV leftover text | b2-bieten | bieten | Ko vieta/programma sniedz: bieten. | Rewrite for English learners (remove Latvian references/words) | entry[2112].study.important[1] | Latvian word or diacritics found in EN learner-language field. |
| B2 | LOW | minimalStudy no renderable | b2-sich verlaufen | sich verlaufen | layout=minimalStudy | Documented minimalStudy — verify renderer accepts layout | study.layout | validate-study-design reports studyObjectNoRenderable for minimalStudy cards (expected for some B2 minimal cards). |
| B2 | LOW | minimalStudy no renderable | b2-verlaufen | verlaufen | layout=minimalStudy | Documented minimalStudy — verify renderer accepts layout | study.layout | validate-study-design reports studyObjectNoRenderable for minimalStudy cards (expected for some B2 minimal cards). |


---

## Notes

- EN dataset uses legacy field name `lv` for English learner-language text (project convention).
- `minimalStudy` cards flagged as `studyObjectNoRenderable` by validate-study-design are documented as LOW severity — verify against renderer policy for B2 minimal cards.
- Capitalization heuristic warnings on English fronts (e.g. "To agree") are not auto-listed unless flagged ERROR.
- This audit is deterministic/heuristic per LANGUAGE_AUDIT_STANDARD §5; native-speaker linguistic sampling (~5%) is recommended separately for MEDIUM/LOW naturalness issues not caught by rules.

---

## GALA VERDICT

### EN–DE B2 — REPAIRS REQUIRED

**Findings listed:** **3**

Next step: OWNER REVIEW → DETERMINISTIC REPAIR → TARGETED REGRESSION AUDIT

---

## Machine-readable artefacts

- `reports/en-b2-full-audit.md`
- `reports/temp/en-b2-audit-data.json`
- `reports/temp/en-b2-findings-consolidated.json`
- `reports/temp/en-b2-full-audit-collect.js`
- `reports/temp/generate-en-b2-audit-report.js`
