# CS–DE Věty TARGETED REGRESSION AUDIT

**MODE:** READ-ONLY

## MODEL

GPT-5.6 Luna

## PREREQUISITE (OWNER repair reconciliation)

| Metric | Value |
|--------|------:|
| OWNER LABOT mappings | 328 |
| OWNER NEW exact | 328/328 |
| OWNER drift | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| FIELD_NOT_FOUND | 0 |
| OWNER_MAPPING_CONFLICT | 0 |

**Prerequisite:** PASS

## TARGETED SCOPE

| Metric | Value |
|--------|------:|
| Target mappings | 328 |
| Target cards | 328 |
| Main translation fields | 328 |
| Study fields | 0 |
| Study cards checked | 0 |

## RAW → VALIDATED PIPELINE

| Metric | Value |
|--------|------:|
| OWNER mappings checked | 328/328 |
| Raw findings | 1 |
| Malformed filtered | 0 |
| FALSE_POSITIVE | 0 |
| SOURCE_DE_ISSUE | 0 |

## VALIDATED REAL FINDINGS

| Severity | Count |
|----------|------:|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 1 |
| LOW | 0 |

## INTEGRITY

| Check | Result |
|-------|--------|
| Production changes | 0 |
| DE changes | 0 |
| CS changes during regression | 0 |
| Unexpected production changes | 0 |
| Syntax | PASS |
| ID/order | PASS |
| Card count | 796/796 |
| Mirror/parity | PASS |

## LUNA API

| Metric | Value |
|--------|------:|
| Requests | 7 |
| Tokens | 29125 |

## VERDICT

```text
TARGETED REGRESSION = NEEDS OWNER REVIEW
```

## SUMMARY

```text
Target mappings: 328
Target cards: 328

OWNER NEW exact: 328/328
OWNER drift: 0

Raw findings: 1

Validated REAL: 1
FALSE_POSITIVE: 0
SOURCE_DE_ISSUE: 0

CRITICAL: 0
HIGH: 0
MEDIUM: 1
LOW: 0

DE changes: 0
CS production changes: 0
Unexpected changes: 0

Card count: 796/796
Syntax: PASS
ID/order: PASS
Mirror/parity: PASS
```

Generated: 2026-08-15T11:54:16.728Z
Branch: `cursor/cs-vety-targeted-regression-audit-6ea4`
Audit commit: `3ac154b05a0ba69e8f47893080a1c01822f3f769`

## REAL FINDINGS (validated)

### sentence-406 — lv

- Severity: **MEDIUM**
- CURRENT: Takhle. • Takovými prostředky.
- Problem: The second variant uses the demonstrative meaning “such means,” whereas German „diesem“ means “this” in „Auf diesem Wege“.
- Source: gpt-5.6-luna
