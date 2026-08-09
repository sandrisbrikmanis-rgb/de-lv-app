# EN–DE B2 — Consolidated Post-Repair Audit

**Date:** 2026-08-09
**Mode:** READ-ONLY (production changes = 0 in this audit)
**Branch:** cursor/en-b2-full-audit-6850
**PR:** #376

## Baseline

| Item | Value |
| --- | --- |
| Baseline commit | 496f377f |
| Safe repair commit | 422405e2 |
| Final audited commit | 187351738177a59438d78a5339fd9cd7e7d483ad |
| Files compared | data/en/b2.js, www/data/en/b2.js, data/b2.js |

## Actual repair coverage

| Metric | Count |
| --- | ---: |
| Actual changed cards | 768 |
| Actual changed EN fields | 854 |
| Expected repair entries | 899 |
| Exact matches | 899 |
| Not applied | 0 |
| Value mismatches | 0 |
| Unexpected production changes | 0 |

## Group coverage

| Repair stage | Expected/reviewed | Actually present in production |
| --- | ---: | ---: |
| SAFE pass | 488 | 488 |
| Group 1 | 49 approved / 1 KEEP | 0 (NOT APPLIED) |
| Group 2 | 50 APPLY / 0 KEEP | 50 |
| Group 3 | 50 APPLY / 0 KEEP | 50 |
| Group 4 | 50 APPLY / 0 KEEP | 50 |
| Group 5 | 50 APPLY / 0 KEEP | 50 |
| Group 6 | 48 APPLY / 2 KEEP | 48 |
| Group 7 | 50 APPLY / 0 KEEP | 50 |
| Group 8 | 49 APPLY / 1 KEEP | 49 |
| Group 9 | 45 APPLY / 5 KEEP | 45 |
| Group 10 | 19 APPLY / 1 KEEP | 19 |

## Group 1 deferred (not applied by design)

Group 1 reviewed 50 items (49 FIX recommendations + 1 KEEP). Production apply count: **0**. Deferred FIX recommendations remain unapplied: **49**.

## Preservation

| Check | Result |
| --- | --- |
| KEEP preservation | PASS |
| DE_SOURCE_ISSUE preservation | PASS |
| DE READ-ONLY | PASS |
| ID/order | PASS |
| Structural parity | PASS |
| data/www mirror | PASS |
| sectionAccents | FAIL (29 official issues) |
| mojibake | PASS |
| foreign-language remnants | 26 findings |

## formsLabel audit

| Label | Count |
| --- | ---: |
| Management: remaining | 0 |
| Government: remaining | 0 |
| Rection: present | 43 |

## Duplicate gloss audit

Trivial exact duplicates in bullet gloss lists: **155**

## Luna semantic regression

**Status:** NOT RUN — API unavailable

Luna targeted regression on all changed cards was not executed in this environment.

## Final verdict

## DETERMINISTIC PASS — LUNA REGRESSION PENDING
