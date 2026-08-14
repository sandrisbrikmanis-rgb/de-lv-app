# CS–DE A2 FINAL POST-REPAIR CLOSURE AUDIT

**MODE:** READ-ONLY

**LINGUISTIC MODEL:** GPT-5.6 Luna

**DATASET:** 1640/1640

**LUNA COVERAGE:** 1640/1640

**RESIDUAL REPAIR RECONCILIATION:** 277/277

**DE CHANGES:** 0

**PRODUCTION CHANGES:** 0

## DETERMINISTIC AUDIT

| Severity | Count |
|---|---:|
| CRITICAL | 219 |
| HIGH | 96 |
| MEDIUM | 33 |
| LOW | 0 |

## GPT-5.6 LUNA RAW

| Severity | Count |
|---|---:|
| CRITICAL | 2 |
| HIGH | 105 |
| MEDIUM | 190 |
| LOW | 52 |

## FINAL VALIDATED UNIQUE FINDINGS

| Severity | Count |
|---|---:|
| CRITICAL | 221 |
| HIGH | 201 |
| MEDIUM | 223 |
| LOW | 52 |

**SOURCE_DE_ISSUE:** 0
**FALSE_POSITIVE:** 0
**NEEDS_OWNER_REVIEW:** 0
**FOREIGN-LANGUAGE REMNANTS:** 248
**STALE SECTIONACCENTS:** 239

## VALIDATION

| Check | Result |
|---|---|
| SYNTAX | PASS |
| ID UNIQUENESS | PASS |
| ID/ORDER | PASS |
| STRUCTURE | PASS |
| DE READ-ONLY | PASS |
| OTHER LANGUAGES READ-ONLY | PASS |
| PRODUCTION CHANGES | 0 |

## OVERALL: FAIL

## CLOSURE STATUS: NOT CLOSED — FAIL

### Residual repair regression

- Residual repair cards checked: 277/277
- Cards still matching targetObject: 277
- Cards diverged from targetObject: 0

- Luna API requests: 53
- Luna tokens: 780330
- Final unique findings total: 697
- Finding-level duplicates removed: 0

Generated: 2026-08-14T14:24:09.431Z
Branch: `cursor/cs-a2-final-post-repair-closure-audit-6ea4`