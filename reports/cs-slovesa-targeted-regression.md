# CS–DE Slovesa TARGETED REGRESSION AUDIT

**MODE:** READ-ONLY

## MODEL

GPT-5.6 Luna

## PREREQUISITE (OWNER repair reconciliation)

| Metric | Value |
|--------|------:|
| OWNER LABOT mappings | 468 |
| OWNER NEW exact | 468/468 |
| OWNER drift | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| VERB_NOT_FOUND | 0 |
| FIELD_NOT_FOUND | 0 |
| OWNER_MAPPING_CONFLICT | 0 |

**Prerequisite:** PASS

## TARGETED SCOPE

| Metric | Value |
|--------|------:|
| Target mappings | 468 |
| Target verbs | 149 |

## RAW → VALIDATED PIPELINE

| Metric | Value |
|--------|------:|
| OWNER mappings checked | 468/468 |
| Raw findings | 0 |
| Malformed filtered | 0 |
| FALSE_POSITIVE | 0 |
| SOURCE_DE_ISSUE | 0 |

## VALIDATED REAL FINDINGS

| Severity | Count |
|----------|------:|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |

## INTEGRITY

| Check | Result |
|-------|--------|
| Production changes | 0 |
| DE changes | 0 |
| CS production changes during regression | 0 |
| Unexpected production changes | 0 |
| Syntax | PASS |
| ID/order | PASS |
| Verb count | 189/189 |
| Forms intact | PASS |
| Mirror/parity | PASS |

## LUNA API

| Metric | Value |
|--------|------:|
| Requests | 3 |
| Tokens | 40484 |

## VERDICT

```text
VALIDATED REAL FINDINGS = 0
TARGETED REGRESSION = PASS
```

## SUMMARY

```text
Target mappings: 468
Target verbs: 149

OWNER NEW exact: 468/468
OWNER drift: 0

Luna requests: 3
Tokens: 40484

Raw findings: 0

Validated REAL: 0
FALSE_POSITIVE: 0
SOURCE_DE_ISSUE: 0

CRITICAL: 0
HIGH: 0
MEDIUM: 0
LOW: 0

DE changes: 0
CS production changes: 0
Unexpected changes: 0

Verb count: 189/189
Syntax: PASS
ID/order: PASS
Mirror/parity: PASS
```

Generated: 2026-08-15T12:35:33.206Z
Branch: `cursor/cs-slovesa-targeted-regression-audit-6ea4`
Audit commit: `d26e5ea285b2bd523428d8db524d64baed492e91`