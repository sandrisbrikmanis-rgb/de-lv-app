# CS–DE A2 FINAL CLOSURE AUDIT

**MODE:** READ-ONLY

## MODEL

GPT-5.6 Luna

## COVERAGE

1640/1640

## BASELINE

| Field | Value |
|---|---|
| Branch | `cursor/cs-a2-final-closure-audit-6ea4` |
| HEAD SHA | `9cbc722aaaa92e209afd6a3ab9202baa7a6e5124` |
| Production file | `data/cs/a2.js` |
| Card count | 1640/1640 |
| Study objects | 231 |
| DE snapshot hash | `4307fd1ec333206de6c59ea86f02ea897759c50a8c3d429fc32584f3c25a2319` |

## PREREQUISITE — FINAL CLOSURE REPAIR GROUPS 01–05

**PASS**

| Metric | Value |
|---|---|
| Specifications | 5/5 |
| Final Closure targets | 205/205 |
| exact targetObject match | 205/205 |
| diverged | 0 |
| missing | 0 |

## REPAIR RECONCILIATION

- Final Closure targets: 205/205
- exact targetObject match: 205/205
- diverged: 0
- missing: 0

## DETERMINISTIC / LINGUISTIC AUDIT

| Metric | Value |
|---|---|
| raw candidates | 298 |
| false positives | 0 |
| validated real findings | 298 |

### Deterministic raw

| Severity | Count |
|---|---:|
| CRITICAL | 16 |
| HIGH | 23 |
| MEDIUM | 59 |
| LOW | 0 |

### GPT-5.6 Luna raw

| Severity | Count |
|---|---:|
| CRITICAL | 0 |
| HIGH | 38 |
| MEDIUM | 134 |
| LOW | 28 |

## VALIDATED SEVERITY

| Severity | Count |
|---|---:|
| CRITICAL | 16 |
| HIGH | 61 |
| MEDIUM | 193 |
| LOW | 28 |

## FOREIGN-LANGUAGE SWEEP

| Metric | Value |
|---|---|
| raw candidates | 36 |
| validated real remnants | 36 |
| false positives | 0 |

## SECTIONACCENTS

| Metric | Value |
|---|---|
| checked | 1640 |
| stale validated real | 59 |
| foreign validated real | 6 |
| false positives | 0 |

## PLACEHOLDERS

| Metric | Value |
|---|---|
| validated real | 0 |

## INTEGRITY

| Check | Result |
|---|---|
| Syntax | PASS |
| Import/load | PASS |
| Card count | 1640/1640 |
| ID uniqueness | PASS |
| ID/order | PASS |
| Structure | PASS |
| Study structure | PASS |
| sectionAccents structure | PASS |
| DE integrity | PASS |
| DE changes | 0 |
| Production changes during audit | 0 |

## CLOSURE DECISION

**A2 NOT CLOSED**

Luna coverage: 1640/1640
Luna API requests: 53
Luna tokens: 757153
Finding-level duplicates removed: 0
DE_SOURCE_ISSUE (non-repair): 0

Generated: 2026-08-14T15:56:15.392Z