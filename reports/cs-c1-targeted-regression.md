# CS–DE C1 TARGETED REGRESSION AUDIT

**MODE:** READ-ONLY

## MODEL

GPT-5.6 Luna

## PREREQUISITE (OWNER repair reconciliation)

| Metric | Value |
|--------|------:|
| OWNER LABOT mappings | 265 |
| OWNER NEW exact | 265/265 |
| OWNER drift | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| FIELD_NOT_FOUND | 0 |
| OWNER_MAPPING_CONFLICT | 0 |

**Prerequisite:** PASS

## TARGETED SCOPE

| Metric | Value |
|--------|------:|
| Changed mappings | 265 |
| Unique changed cards | 222 |
| Main translation fields | 208 |
| Study fields | 57 |
| Study cards checked | 14 |

## RAW → VALIDATED PIPELINE

| Metric | Value |
|--------|------:|
| OWNER mappings checked | 265/265 |
| Raw findings | 2 |
| Malformed filtered | 0 |
| FALSE_POSITIVE | 2 |
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
| Card count | 572/572 |
| Mirror/parity | PASS |

## LUNA API

| Metric | Value |
|--------|------:|
| Requests | 4 |
| Tokens | 33192 |

## VERDICT

```text
VALIDATED REAL FINDINGS = 0
TARGETED REGRESSION = PASS
```

## SUMMARY

```text
OWNER mappings checked: 265/265
OWNER NEW exact: 265/265
Unique changed cards: 222
Study cards checked: 14

Raw findings: 2

Validated:
CRITICAL: 0
HIGH: 0
MEDIUM: 0
LOW: 0

FALSE_POSITIVE: 2
SOURCE_DE_ISSUE: 0

OWNER drift: 0
Production changes: 0
DE changes: 0

Syntax: PASS
ID/order: PASS
Card count: 572/572
Mirror/parity: PASS
```

Generated: 2026-08-15T09:46:34.850Z
Branch: `cursor/cs-c1-targeted-regression-audit-6ea4`
Audit commit: `ab324d1a63b3cf9dffb5b4e0d2d379b7d55eeb8a`