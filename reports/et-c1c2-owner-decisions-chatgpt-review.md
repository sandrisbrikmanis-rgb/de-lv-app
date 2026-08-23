# ET–DE C1/C2 — ChatGPT OWNER review handoff

**Source:** PR #622 OWNER artifacts
**Scope:** C1/C2, 131 OWNER backlog findings
**Production changes:** 0
**DE:** STRICT READ-ONLY

## Important integrity note

This file intentionally does **not** pretend that all 131 findings have been OWNER-approved. The GitHub connector output available to ChatGPT truncates large OWNER VIEW payloads, so a binding accepted mapping must not be manufactured from incomplete rows.

The source OWNER artifact confirms:
- 131 OWNER backlog findings
- 791/791 object coverage
- structural findings for C1 (16 vs 15 Study) and C2 (3 vs 1 Study)
- FOREIGN_REMNANT findings ET-C1C2-0003..0008
- sectionAccents findings
- linguistic `etText` findings beginning at ET-C1C2-0097

## OWNER rules for the accepted mapping

1. Every one of the 131 source findings must appear exactly once.
2. Preserve exact `Audit ID`, `Card ID`, `Field/path`, and `CURRENT` from production.
3. Allowed statuses: `LABOT`, `NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW`.
4. `LABOT` requires an exact `NEW` value; Luna `PROPOSED_ET` is not automatically OWNER accepted.
5. Structural Study-count findings must be resolved by exact Card ID/object comparison against LV MASTER, not by count-only deletion.
6. FOREIGN_REMNANT rows require natural Estonian replacement while preserving the German side exactly.
7. sectionAccents must be synchronized to the final ET Study text/path; do not alter ET prose merely to satisfy accents.
8. DE fields are STRICT READ-ONLY.
9. No production apply until accepted mapping coverage is 131/131 with PENDING=0.
10. Apply must follow `REPAIR_APPLY_SAFETY_STANDARD.md`: exact CURRENT match, mismatch => SKIP, write-to-disk verification, mirror/syntax/ID verification, DE changes=0.

## Required accepted output

Create `reports/et-c1c2-owner-decisions-accepted.md` from the complete source OWNER artifacts. Gate before apply:

- SOURCE_FINDINGS = 131
- ACCEPTED_FINDINGS = 131
- MISSING_IDS = 0
- DUPLICATE_IDS = 0
- PENDING = 0
- LABOT_WITHOUT_EXACT_NEW = 0
- CURRENT_FROM_PRODUCTION = 131/131
- DE_CHANGES = 0

Only after these gates PASS may COPY-ONLY repair start.
