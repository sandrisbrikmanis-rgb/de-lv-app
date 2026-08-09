# GLOBAL MAIN INTEGRATION / RECONCILIATION AUDIT

**AUDITED MAIN SHA:** 6099c38cb7b8868e3877de9dc02132e677bf938b
**AUDIT MODE:** READ-ONLY
**Generated:** 2026-08-09T15:27:57.084Z

## Reconciliation matrix

| Language | Section | Expected repairs | MATCH | MISSING | SUPERSEDED | UNRESOLVED | Final status |
| -------- | ------- | ---------------: | ----: | ------: | ---------: | ---------: | ------------ |
| BS–DE | B2 | 1119 | 1119 | 0 | 0 | 0 | MATCH |
| BS–DE | B1 | 1042 | 1040 | 0 | 0 | 19 | NEEDS OWNER REVIEW |
| BS–DE | A2 | 10 | 10 | 0 | 0 | 0 | MATCH |
| BS–DE | A1 | 1031 | 2 | 0 | 0 | 0 | MATCH |
| BS–DE | C1 | 28 | 1 | 0 | 0 | 0 | MATCH |
| BS–DE | C2 | 34 | 34 | 0 | 0 | 0 | MATCH |
| BS–DE | VERBS | 82 | 82 | 0 | 0 | 0 | MATCH |
| BS–DE | KURSS | 53 | 21 | 0 | 0 | 0 | MATCH |
| EN–DE | A1 | 110 | 110 | 0 | 0 | 0 | MATCH |
| EN–DE | A2 | 83 | 83 | 0 | 0 | 0 | MATCH |
| EN–DE | KURSS | 0 | 3 | 0 | 0 | 0 | MATCH |

## EN–DE B1

OUT OF SCOPE — already reconciled / closure reconfirmed (`reports/en-b1-final-closure-reconfirmation.md`).

## Detailed findings (MISSING / UNRESOLVED / SUPERSEDED)

### B1-missing-b1-beschwerde-study.comparison[1].meaning

- LANGUAGE: BS–DE
- SECTION: B1
- FILE: data/bs/b1.js
- CARD / OBJECT ID: b1-beschwerde
- FIELD: study.comparison[1].meaning
- CLASSIFICATION: UNRESOLVED
- OWNER-APPROVED EXPECTED: Žalba / pritužba
- CURRENT MAIN: Tužba
- EVIDENCE: {"repairArtifact":"reports/temp/bs-b1-*-applied.json","report":"reports/bs-b1-final-medium-targeted-report.md"}
- ANALYSIS: Documented SOURCE_LV_ISSUE in final-medium cycle; not part of automated OWNER-approved apply set.
- RECOMMENDED NEXT ACTION: Confirm owner acceptance of current main value.

### B1-missing-b1-dank-study-study.comparison[4].meaning

- LANGUAGE: BS–DE
- SECTION: B1
- FILE: data/bs/b1.js
- CARD / OBJECT ID: b1-dank-study
- FIELD: study.comparison[4].meaning
- CLASSIFICATION: UNRESOLVED
- OWNER-APPROVED EXPECTED: Zahvala
- CURRENT MAIN: Zahvaliti se
- EVIDENCE: {"repairArtifact":"reports/temp/bs-b1-*-applied.json","report":"reports/bs-b1-final-medium-targeted-report.md"}
- ANALYSIS: Documented SOURCE_LV_ISSUE in final-medium cycle; not part of automated OWNER-approved apply set.
- RECOMMENDED NEXT ACTION: Confirm owner acceptance of current main value.

### b1-owner-manual-17

- LANGUAGE: BS–DE
- SECTION: B1
- FILE: data/bs/b1.js
- CARD / OBJECT ID: PR #307 owner manual
- FIELD: 17 repairs
- CLASSIFICATION: UNRESOLVED
- OWNER-APPROVED EXPECTED: 17 OWNER-approved manual fixes (PR #307)
- CURRENT MAIN: (no machine-readable repair manifest in reports/temp/)
- EVIDENCE: {"report":"reports/bs-b1-final-medium-targeted-report.md","repairArtifact":"reports/bs-b1-owner-manual-review.md","pr":"#307"}
- ANALYSIS: PR #307 documents 17/17 applied fixes but no per-item expected-value JSON exists in repo.
- RECOMMENDED NEXT ACTION: Export PR #307 repair manifest or verify manually against owner decisions.

## GLOBAL MAIN INTEGRATION / RECONCILIATION AUDIT

Audited main SHA: 6099c38cb7b8868e3877de9dc02132e677bf938b

Sections checked: 11/11

MATCH: 2505
MISSING: 0
SUPERSEDED: 0
UNRESOLVED: 19

### BS–DE
A1: MATCH
A2: MATCH
B1: NEEDS OWNER REVIEW
B2: MATCH
C1: MATCH
C2: MATCH
VERBS: MATCH
KURSS: MATCH

### EN–DE
A1: MATCH
A2: MATCH
KURSS: MATCH

### EN–DE B1
OUT OF SCOPE — already reconciled / closure reconfirmed

Production files modified: 0

FINAL GLOBAL VERDICT: NEEDS OWNER REVIEW