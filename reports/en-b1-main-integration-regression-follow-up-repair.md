# EN–DE B1 MAIN INTEGRATION REGRESSION FOLLOW-UP REPAIR

**Generated:** 2026-08-09T14:32:39.694Z  
**Branch:** `cursor/en-b1-main-missing-repairs-integration-6850`  
**PR:** #371

## RESULT: EN–DE B1 MAIN INTEGRATION REGRESSION FOLLOW-UP REPAIR — COMPLETE

## Input

- Regression findings: **8**
- HIGH: **2** (meta-pedagogy)
- MEDIUM: **6** (sectionAccent technical)

## OWNER review

| Verdict | Count |
|---------|-------|
| Reviewed | 8/8 |
| LABOT | 8 |
| NELABOT | 0 |
| PENDING | 0 |

## Production repairs applied

| # | Card | Field | Action | OWNER FINAL |
|---|------|-------|--------|-------------|
| 1 | b1-entlassen | study.tip.leftBlocks[0].text | REPLACE | Firma entlässt, Krankenhaus entlässt, Gefängnis entlässt - choose the meaning by context. |
| 2 | b1-zeugnis | study.important.text | REPLACE | ärztliches Zeugnis is often a doctor's note or medical certificate, not a school certificate. |
| 3 | b1-berühmtheit | study.sectionAccents.examples[1].lv.purple[0] | REPLACE | late |
| 4–5 | b1-kurs | study.sectionAccents.tip.purple | REMOVE | (invalid tip-level accents removed) |
| 6–7 | b1-kastanie | study.sectionAccents.tip.purple | REMOVE | (invalid tip-level accents removed) |
| 8 | b1-beruf | study.sectionAccents.examples[1].lv.purple[0] | REPLACE | teacher |

- Logical findings repaired: **8/8**
- Physical fields changed: **6**
- Unique cards changed: **6**
- Mismatches: **0**
- Missing targets: **0**
- Unexpected repairs: **0**

## Meta-pedagogy

- b1-entlassen: **PASS** (no Latvian learner-context reference)
- b1-zeugnis: **PASS** (no Latvian learner-context reference)
- Remaining in-scope meta-pedagogy: **0**

## sectionAccents (in-scope regression)

- In-scope TECHNICAL findings: **6**
- Repaired: **6/6**
- Invalid in-scope targets remaining: **0**
- Global out-of-scope validator findings (B1): **4** (Absatz, bedeutend, belegen, einerlei — not repaired in this pass)

## Preservation

- Main reconciliation present: **1139/1139** (missing **0**, field/identity unresolved **0**)
- Regression authoritative finals: **214/214 PASS**
- Micro follow-up: **16/16 PASS**
- Full-string explanations: **14/14 PASS** (truncated explanations: **0**)
- SectionAccent cleanup: **24/24 PASS**

## Validation

| Check | Result |
|-------|--------|
| JavaScript syntax | PASS |
| Structural/schema parity | PASS |
| ID parity | PASS |
| Order parity | PASS |
| Card count | 3367 |
| Study objects | 324/324 |
| Mirror parity | PASS |
| UTF-8/mojibake | PASS |
| DE READ-ONLY | PASS |

## Diff scope

- Unrelated English changes: **0**
- DE changes: **0**
- Unexpected production changes: **0**

## Artifacts

- `reports/temp/en-b1-main-integration-regression-follow-up-repair.json`
- `reports/temp/en-b1-main-integration-regression-follow-up-repair-log.json`
- `reports/temp/apply-en-b1-main-integration-regression-follow-up-repair.js`
- `reports/temp/generate-en-b1-main-integration-regression-follow-up-verify.js`
- `reports/temp/en-b1-main-integration-regression-follow-up-micro-regression-manifest.json`

## Status

**MAIN INTEGRATION REGRESSION OWNER REVIEW:** COMPLETE  
**MAIN INTEGRATION REGRESSION FOLLOW-UP REPAIR:** COMPLETE  
**TARGETED MICRO-REGRESSION:** NOT STARTED  

**EN–DE B1 MAIN RECONCILIATION:** PASS  
**EN–DE B1 FINAL DATASET:** NOT YET CLOSED  

## Next

EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION — ALL 8 REPAIRS
