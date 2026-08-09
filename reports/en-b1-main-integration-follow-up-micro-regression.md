# EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION

**Generated:** 2026-08-09T14:40:32.907Z
**Follow-up commit:** 4e462fab
**Pre-follow-up baseline:** b9b1491a

## EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION — COMPLETE

### Scope
- Repair findings: 8/8
- Physical repaired fields: 6/6
- Unique affected cards: 6/6
- Coverage: 100%

### Findings
- CRITICAL: 0
- HIGH: 0
- MEDIUM: 1
- LOW: 0

### Meta-pedagogy
- b1-entlassen: FAIL
- b1-zeugnis: PASS
- Remaining in-scope findings: 0

### sectionAccents
- b1-berühmtheit: PASS
- b1-kurs: PASS
- b1-kastanie: PASS
- b1-beruf: PASS
- New TECHNICAL findings: 1
- New PEDAGOGICAL findings: 0

### Main reconciliation
- Final authoritative mappings: 1139
- Present: 1139
- Missing: 0
- Unresolved: 0

### Previous repair preservation
- Regression finals: 214/214 PASS
- Micro follow-up: 16/16 PASS
- Full-string explanations: 14/14 PASS
- SectionAccent cleanup: 24/24 PASS

### Global validator
- Raw findings: 4
- In-scope new regressions: 0
- Known out-of-scope: 4
- Known false positives: 0
- Unexpected: 0

### Validation
- JavaScript syntax: PASS
- Structural/schema parity: PASS
- ID parity: PASS
- Order parity: PASS
- Card count: 3367
- Study objects: 324/324
- Mirror parity: PASS
- UTF-8/mojibake: PASS
- Suspicious Unicode: PASS
- DE READ-ONLY: PASS

### Diff
- Follow-up physical changes: 6
- Unique cards changed: 6
- Unrelated English changes: 0
- DE changes: 0
- Unexpected changes: 0

- Production changes during audit: 0

**MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION:**
FAIL

**MAIN INTEGRATION REGRESSION CHAIN:**
NOT CLOSED

**GLOBAL OUT-OF-SCOPE SECTIONACCENT BACKLOG:** 4 known out-of-scope sectionAccent issues

**EN–DE B1 FINAL DATASET:**
NOT YET READY FOR OWNER ACCEPTANCE RECONFIRMATION

### Created
- reports/en-b1-main-integration-follow-up-micro-regression.md
- reports/temp/en-b1-main-integration-follow-up-micro-regression.json
- reports/temp/en-b1-main-integration-follow-up-micro-regression-manifest.json
- reports/temp/generate-en-b1-main-integration-follow-up-micro-regression.js

**Commit:** 4e462fab
**PR:** #371

**Next:** EN–DE B1 MAIN INTEGRATION FOLLOW-UP REPAIR #2

## Detailed findings

### FOLLOW-UP MICRO-REGRESSION FINDING 1

Card ID: b1-entlassen
Production identity: b1-entlassen
Field: sectionAccents.tip.leftBlocks[0].text.purple[0]
CURRENT: choose by location
SEVERITY: MEDIUM
CATEGORY: SECTIONACCENT TECHNICAL
RECOMMENDED: Fix or remove invalid accent target "choose by location"
REASON: TARGET_MISMATCH on affected card after follow-up repair
OWNER VERDICT: PENDING
