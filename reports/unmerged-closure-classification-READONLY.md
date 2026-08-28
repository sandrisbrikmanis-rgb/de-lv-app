# Unmerged closure candidate classification — READ-ONLY

**Generated:** 2026-08-28T18:23:22.558Z
**Mode:** READ_ONLY
**Raw candidates:** 90
**ACTIVE (D1 blocker):** 2
**NEEDS OWNER REVIEW:** 51

## Summary

| Category | Count | D1 blocks? |
|----------|------:|------------|
| INTEGRATED_HISTORICAL | 37 | no |
| CLOSED_SUPERSEDED | 0 | no |
| ACTIVE_UNMERGED_CLOSURE | 2 | **yes** |
| NEEDS_OWNER_REVIEW | 51 | no (OWNER) |

## Rules (deterministic)

1. PR merged → INTEGRATED_HISTORICAL
2. Branch tip ancestor of origin/main → INTEGRATED_HISTORICAL
3. No production blob diff vs origin/main → INTEGRATED_HISTORICAL
4. PR closed without merge → CLOSED_SUPERSEDED
5. Open non-draft PR with production blob diff → ACTIVE_UNMERGED_CLOSURE
6. Otherwise (draft PR, no PR, ambiguous) → NEEDS_OWNER_REVIEW

## ACTIVE unmerged closures (D1 blockers)

- `origin/cursor/cs-kurs-articles-full-audit-6850` — Open non-draft PR #528 with production content not on origin/main
  - PR: https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/528
  - Production files: data/cs/courseLessons.js, www/data/cs/courseLessons.js
- `origin/cursor/en-b1-critical-repair-6850` — Open non-draft PR #343 with production content not on origin/main
  - PR: https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/343
  - Production files: data/en/b1.js, www/data/en/b1.js

## NEEDS OWNER REVIEW (sample)

- `origin/cursor/audit-kurss-content-5a8d` — Open draft PR #123 with production content diff — OWNER review required
- `origin/cursor/cs-a1-critical-final-repair-6ea4` — Open draft PR #423 with production content diff — OWNER review required
- `origin/cursor/cs-a1-final-main-repair-batch04-final10-6ea4` — Open draft PR #456 with production content diff — OWNER review required
- `origin/cursor/cs-a1-final-main-repair-batch101-150-6ea4` — Open draft PR #455 with production content diff — OWNER review required
- `origin/cursor/cs-a1-final-main-repair-batch51-100-6ea4` — Open draft PR #454 with production content diff — OWNER review required
- `origin/cursor/cs-a1-final-missing-study-parity-repair-6ea4` — Open draft PR #458 with production content diff — OWNER review required
- `origin/cursor/cs-a1-final-post-repair-audit-6ea4` — Open draft PR #452 with production content diff — OWNER review required
- `origin/cursor/cs-a1-final-study-parity-sectionaccents-micro-repair-6ea4` — Open draft PR #459 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block01-6ea4` — Open draft PR #438 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block02-6ea4` — Open draft PR #439 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block03-6ea4` — Open draft PR #440 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block04-6ea4` — Open draft PR #441 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block05-6ea4` — Open draft PR #442 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block06-6ea4` — Open draft PR #443 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block07-6ea4` — Open draft PR #444 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block08-6ea4` — Open draft PR #445 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block09-6ea4` — Open draft PR #446 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block10-6ea4` — Open draft PR #447 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block11-6ea4` — Open draft PR #448 with production content diff — OWNER review required
- `origin/cursor/cs-a1-full-review-repair-block12-6ea4` — Open draft PR #449 with production content diff — OWNER review required
- `origin/cursor/cs-a1-high-final-closure-check-6ea4` — Open draft PR #436 with production content diff — OWNER review required
- `origin/cursor/cs-a1-high-final-micro-repair-02-6ea4` — Open draft PR #435 with production content diff — OWNER review required
- `origin/cursor/cs-a1-high-post-repair-audit-6ea4` — Open draft PR #432 with production content diff — OWNER review required
- `origin/cursor/cs-a1-high-regression-final-repair-6ea4` — Open draft PR #433 with production content diff — OWNER review required
- `origin/cursor/cs-a1-high-repair-block01-6ea4` — Open draft PR #426 with production content diff — OWNER review required
- … and 26 more (see JSON)

## Notes

- READ-ONLY — no branch delete, no merge.

