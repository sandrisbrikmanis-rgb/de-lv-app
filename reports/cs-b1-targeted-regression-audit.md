# CS–DE B1 TARGETED REGRESSION AUDIT

**MODE:** READ-ONLY

## MODEL

GPT-5.6 Luna

## REPAIR RECONCILIATION PREREQUISITE (Groups 07–32)

| Metric | Value |
|---|---|
| Groups applied | 26/26 |
| Residual OWNER-review cards | 1281/1281 |
| Exact targetObject match | 1281/1281 |
| CURRENT_VALUE_MISMATCH | 0 |
| diverged | 0 |
| missing | 0 |
| DE changes | 0 |
| unexpected production changes | 0 |

**Prerequisite:** PASS

## TARGETED SCOPE

Cards actually changed in B1 repair (Groups 01–32), derived from production diff vs pre-repair baseline.

| Metric | Value |
|---|---|
| Targeted cards | 1307 |
| Targeted cards audited | 1307/1307 |

## RAW → VALIDATED PIPELINE

| Metric | Value |
|---|---|
| Raw candidates | 1407 |
| False positives | 379 |
| OWNER_LOCK_CONFIRMED | 243 |
| OWNER_LOCK_REOPEN_REQUIRED | 3 |
| SOURCE_DE_ISSUE | 0 |

## VALIDATED REAL FINDINGS

| Severity | Count |
|---|---:|
| CRITICAL | 387 |
| HIGH | 314 |
| MEDIUM | 84 |
| LOW | 0 |

## FOREIGN LANGUAGE / PLACEHOLDERS / SECTIONACCENTS

| Metric | Value |
|---|---|
| Foreign remnants (validated) | 408 |
| Placeholders (validated) | 789 |
| Stale sectionAccents (validated) | 82 |
| Foreign sectionAccents (validated) | 397 |

## FULL B1 DETERMINISTIC INTEGRITY (3367/3367)

| Check | Result |
|---|---|
| Cards | 3367/3367 |
| ID uniqueness | PASS |
| ID/order | PASS |
| Syntax | PASS |
| Import/load | PASS |
| Structure | PASS |
| Study structure | PASS |
| sectionAccents structure | PASS |
| DE immutability | PASS |

## OUTSIDE-SCOPE IMMUTABILITY

| Metric | Value |
|---|---|
| Checked | 2060 |
| Unchanged | 2060 |
| Unexpected changes | 0 |

## LUNA API

| Metric | Value |
|---|---|
| Requests | 52 |
| Tokens | 714723 |

## CLOSURE VERDICT

**CS–DE B1 TARGETED REGRESSION — RESIDUAL REPAIR REQUIRED**

Generated: 2026-08-14T19:50:54.527Z
Branch: `cursor/cs-b1-targeted-regression-audit-6ea4`
Pre-repair baseline SHA: `f66e36e9ce74e2355d31c1fa5c728d23daca2337`
Audit commit: `082e43e7fd32b7b1808c789307ecca296697fc5f`
Residual cards: 116

Residual worklist: `/workspace/reports/temp/cs-b1-targeted-regression-residual-by-card.json`