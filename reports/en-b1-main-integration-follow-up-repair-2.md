# EN–DE B1 MAIN INTEGRATION FOLLOW-UP REPAIR #2

**Generated:** 2026-08-09T14:48:33.339Z  
**Branch:** `cursor/en-b1-main-missing-repairs-integration-6850`  
**PR:** #371

## EN–DE B1 MAIN INTEGRATION FOLLOW-UP REPAIR #2 — COMPLETE

### Input

- Findings: **1**
- Card: **b1-entlassen**
- Field: `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`

### OWNER

| Verdict | Count |
|---------|-------|
| LABOT | 1 |
| NELABOT | 0 |
| PENDING | 0 |

### Repair

| | |
|---|---|
| CURRENT | `"choose by location"` |
| OWNER FINAL | `"context"` |
| Applied | 1/1 |
| Physical fields changed | 1 |
| Unique cards changed | 1 |

Tip learner-facing text **not modified**:

`Firma entlässt, Krankenhaus entlässt, Gefängnis entlässt - choose the meaning by context.`

### Verification

| Check | Result |
|-------|--------|
| Target exists | PASS |
| Pedagogical relevance | PASS |
| Stale target remaining | 0 |
| Capitalization | PASS |
| Occurrence count | PASS |

### Preservation

| Chain | Result |
|-------|--------|
| Main reconciliation missing | 0 |
| Main reconciliation unresolved | 0 |
| Final authoritative mappings | 1140/1140 present |
| Regression finals | 214/214 PASS |
| Micro follow-up | 16/16 PASS |
| Full-string explanations | 14/14 PASS |
| SectionAccent cleanup | 24/24 PASS |
| Prior 8 follow-up findings | 8/8 PASS |

### Validation

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

### Global out-of-scope backlog

Not repaired in this task (0):

- Absatz
- bedeutend
- belegen
- einerlei

### Diff scope

- Unrelated English changes: **0**
- DE changes: **0**
- Unexpected changes: **0**

### Status

**MAIN INTEGRATION FOLLOW-UP REPAIR #2:** COMPLETE  
**MICRO-REGRESSION #2:** NOT STARTED

**EN–DE B1 MAIN RECONCILIATION:** PASS  
**EN–DE B1 FINAL DATASET:** NOT YET CLOSED

### Next

EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2 — b1-entlassen ONLY

### Artifacts

- `reports/en-b1-main-integration-follow-up-repair-2.md`
- `reports/temp/en-b1-main-integration-follow-up-repair-2.json`
- `reports/temp/en-b1-main-integration-follow-up-repair-2-log.json`
- `reports/temp/en-b1-main-integration-follow-up-repair-2-verify.json`
- `reports/temp/apply-en-b1-main-integration-follow-up-repair-2.js`
- `reports/temp/generate-en-b1-main-integration-follow-up-repair-2-verify.js`
- `reports/temp/en-b1-main-integration-follow-up-micro-regression-2-manifest.json`
