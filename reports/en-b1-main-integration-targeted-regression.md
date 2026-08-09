# EN–DE B1 MAIN INTEGRATION TARGETED REGRESSION AUDIT

**Generated:** 2026-08-09T14:24:53.181Z
**Integration commit:** ae6294de
**Base commit:** 223d37f4

## RESULT: EN–DE B1 MAIN INTEGRATION TARGETED REGRESSION: FAIL — FOLLOW-UP REPAIR REQUIRED

## Scope
- Integration mappings: 178/183
- Physical changed fields: 177/177
- Unique affected cards: 142/142
- Coverage: 100%

## Findings
- CRITICAL: 0
- HIGH: 2
- MEDIUM: 6
- LOW: 0

## Language integrity
- LV learner leftovers: 0
- Meta-pedagogy leftovers: 2
- Truncated fields: 0

## sectionAccents (affected scope)
- New TECHNICAL: 6
- New PEDAGOGICAL: 0
- Current REAL in affected scope: 19
- Global raw findings: 0
- Global real findings: 0

## Identity / path
- Wrong identity repairs: 0
- Wrong path repairs: 0
- Additional deterministic mappings: 1/3 PASS
- Already-resolved entries preserved: 20/20 PASS

## Previous repair preservation
- Regression authoritative finals: 214/214 PASS
- Micro follow-up: 16/16 PASS
- Full-string explanations: 14/14 PASS
- SectionAccent cleanup: 24/24 PASS

## Validation
- javascript: PASS
- auditLanguageParity: PASS
- auditTranslations: PASS
- auditMojibake: PASS
- validateStudyDesign: FAIL
- mirrorParity: PASS
- deReadOnly: PASS
- Card count: 3367
- Study objects: 324/324

## Diff verification
- Physical changes: 177
- Unique cards changed: 142
- Unrelated English changes: 0
- DE changes: 0
- Unexpected production changes: 0

Production changes during audit: 0

**MAIN INTEGRATION TARGETED REGRESSION:** FAIL

**EN–DE B1 MAIN RECONCILIATION:** PASS

**EN–DE B1 FINAL DATASET:** NOT READY FOR CLOSURE

**Next:** EN–DE B1 MAIN INTEGRATION REGRESSION OWNER REVIEW / FOLLOW-UP REPAIR

## Detailed findings

### MAIN-INTEGRATION REGRESSION FINDING 1
- Card: b1-entlassen
- Field: Firma entlässt, Krankenhaus entlässt, Gefängnis entlässt - choose by location in Latvian.
- Severity: HIGH / META-PEDAGOGY
- Current: Firma entlässt, Krankenhaus entlässt, Gefängnis entlässt - choose by location in Latvian.
- Reason: Remaining Latvian meta-pedagogy in EN learner text (pre-existing)

### MAIN-INTEGRATION REGRESSION FINDING 2
- Card: b1-zeugnis
- Field: ärztliches Zeugnis is often a doctor's certificate in Latvian, not a school certificate.
- Severity: HIGH / META-PEDAGOGY
- Current: ärztliches Zeugnis is often a doctor's certificate in Latvian, not a school certificate.
- Reason: Remaining Latvian meta-pedagogy in EN learner text (pre-existing)

### MAIN-INTEGRATION REGRESSION FINDING 3
- Card: b1-berühmtheit
- Field: sectionAccents.examples[1].lv.purple[0]
- Severity: MEDIUM / SECTIONACCENT TECHNICAL
- Current: null
- Reason: New accent token "null" not found in target section text after integration

### MAIN-INTEGRATION REGRESSION FINDING 4
- Card: b1-kurs
- Field: sectionAccents.tip.purple[0]
- Severity: MEDIUM / SECTIONACCENT TECHNICAL
- Current: Lessons
- Reason: New accent token "Lessons" not found in target section text after integration

### MAIN-INTEGRATION REGRESSION FINDING 5
- Card: b1-kurs
- Field: sectionAccents.tip.purple[1]
- Severity: MEDIUM / SECTIONACCENT TECHNICAL
- Current: exchange rate
- Reason: New accent token "exchange rate" not found in target section text after integration

### MAIN-INTEGRATION REGRESSION FINDING 6
- Card: b1-kastanie
- Field: sectionAccents.tip.purple[0]
- Severity: MEDIUM / SECTIONACCENT TECHNICAL
- Current: Tree
- Reason: New accent token "Tree" not found in target section text after integration

### MAIN-INTEGRATION REGRESSION FINDING 7
- Card: b1-kastanie
- Field: sectionAccents.tip.purple[1]
- Severity: MEDIUM / SECTIONACCENT TECHNICAL
- Current: fruit
- Reason: New accent token "fruit" not found in target section text after integration

### MAIN-INTEGRATION REGRESSION FINDING 8
- Card: b1-beruf
- Field: sectionAccents.examples[1].lv.purple[0]
- Severity: MEDIUM / SECTIONACCENT TECHNICAL
- Current: profession
- Reason: New accent token "profession" not found in target section text after integration
