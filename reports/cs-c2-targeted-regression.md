# CS–DE C2 TARGETED REGRESSION AUDIT

**MODE:** READ-ONLY

## MODEL

GPT-5.6 Luna

## PREREQUISITE (OWNER repair reconciliation)

| Metric | Value |
|--------|------:|
| OWNER LABOT mappings | 75 |
| OWNER NEW exact | 75/75 |
| OWNER drift | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| FIELD_NOT_FOUND | 0 |
| OWNER_MAPPING_CONFLICT | 0 |

**Prerequisite:** PASS

## TARGETED SCOPE

| Metric | Value |
|--------|------:|
| Changed mappings | 75 |
| Unique changed cards | 75 |
| Main translation fields | 75 |
| Study fields | 0 |
| Study cards checked | 0 |

## RAW → VALIDATED PIPELINE

| Metric | Value |
|--------|------:|
| OWNER mappings checked | 75/75 |
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
| Syntax | PASS |
| ID/order | PASS |
| Card count | 219/219 |
| Mirror/parity | PASS |

## LUNA API

| Metric | Value |
|--------|------:|
| Requests | 2 |
| Tokens | 9823 |

## VERDICT

```text
VALIDATED REAL FINDINGS = 0
TARGETED REGRESSION = PASS
```

## SUMMARY

```text
OWNER mappings checked: 75/75
OWNER NEW exact: 75/75
Unique changed cards: 75
Study cards checked: 0

Raw findings: 0

Validated:
CRITICAL: 0
HIGH: 0
MEDIUM: 0
LOW: 0

FALSE_POSITIVE: 0
SOURCE_DE_ISSUE: 0

OWNER drift: 0
Production changes: 0
DE changes: 0

Syntax: PASS
ID/order: PASS
Card count: 219/219
Mirror/parity: PASS
```

Generated: 2026-08-15T10:03:12.056Z
Branch: `cursor/cs-c2-targeted-regression-audit-6ea4`
Audit commit: `294d310b2a848642adc9cde0df5762ddac1bab81`