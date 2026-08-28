# Unmerged closure — OWNER view (53/53 READ-ONLY prep)

**Generated:** 2026-08-28T18:44:36.001Z
**MASTER:** 1.12
**ORIGIN_MAIN_SHA:** `93c372824359b00bd73d37ae3193bdf587118e75`
**PR #693 HEAD:** `7dd4d243ce81aa8762e4ee6d0dbd538a663b944f`
**Scope:** 53/53 · duplicates 0 · missing 0
**OWNER decisions:** 0/53 (all `resolvedCategory` null)
**Verdict:** NEEDS_OWNER_REVIEW

## PROPOSED summary (not OWNER decisions)

| PROPOSED_CATEGORY | Count |
|-------------------|------:|
| INTEGRATED_HISTORICAL | 0 |
| CLOSED_SUPERSEDED | 53 |
| ACTIVE_UNMERGED_CLOSURE | 0 |
| NEEDS_OWNER_REVIEW | 0 |

## Priority baseline comparisons

### PR #343 — `cursor/en-b1-critical-repair-6850`

- **PROPOSED:** CLOSED_SUPERSEDED
- **Reason:** origin/main has 22 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-09 07:51:14 +0000. Closure on main: reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md.
- **Baseline:** data/en/b1.js: main=f5794c205b26 branch=20180d22c8c5 match=false; www/data/en/b1.js: main=f5794c205b26 branch=20180d22c8c5 match=false
- **mergeable:** CONFLICTING
- **Main ahead commits (sample):** 3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync; 43adc669 Sync sectionAccents DE branches from LV-DE master; 018ca5c9 Sync all {LANG}-DE German content from LV-DE master
- **Closure on main:** reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md

### PR #528 — `cursor/cs-kurs-articles-full-audit-6850`

- **PROPOSED:** CLOSED_SUPERSEDED
- **Reason:** origin/main has 13 production commit(s) after branch tip (9ef1ad1b Luna micro-repair #3 (2/2) — CS-DE Kurss CLOSED). Main production last touched 2026-08-16 09:20:21 +0000. Branch production last touched 2026-08-15 19:37:21 +0000. Closure on main: reports/cs-kurss-final-closure.md.
- **Baseline:** data/cs/courseLessons.js: main=5411ac0dd812 branch=92fdc2c41830 match=false; www/data/cs/courseLessons.js: main=5411ac0dd812 branch=92fdc2c41830 match=false
- **mergeable:** CONFLICTING
- **Main ahead commits (sample):** 9ef1ad1b Luna micro-repair #3 (2/2) — CS-DE Kurss CLOSED; 34d29bec Luna micro-repair #2 (4/4) — closure still NOT CLOSED (2 MEDIUM findings); fe53262b Apply Luna micro-repair (7/7) — closure still NOT CLOSED (4 new Luna findings)
- **Closure on main:** reports/cs-kurss-final-closure.md

## All 53 candidates

### 1. `cursor/cs-kurs-articles-full-audit-6850` (ACTIVE_UNMERGED_CLOSURE)

| Field | Value |
|-------|-------|
| tipSha | `fd2178e22676bfedcc1b482ff7a1dd55323455be` |
| PR | [#528](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/528) |
| PR state / draft | OPEN / false |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-15T19:04:43Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/courseLessons.js, www/data/cs/courseLessons.js |
| reports/docs diff | reports/cs-kurs-articles-full-audit.md, reports/cs-kurs-articles-owner-apply-regression.md, reports/cs-kurs-articles-owner-apply.md, reports/cs-kurs-articles-owner-review-all-findings.md, reports/temp/cs-kurs-articles-audit/full-audit.json … |
| baseline comparison | data/cs/courseLessons.js: main=5411ac0dd812 branch=92fdc2c41830 match=false; www/data/cs/courseLessons.js: main=5411ac0dd812 branch=92fdc2c41830 match=false |
| main ahead (count) | 13 |
| closure metadata | reports/cs-kurss-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 13 production commit(s) after branch tip (9ef1ad1b Luna micro-repair #3 (2/2) — CS-DE Kurss CLOSED). Main production last touched 2026-08-16 09:20:21 +0000. Branch production last touched 2026-08-15 19:37:21 +0000. Closure on main: reports/cs-kurss-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 2. `cursor/en-b1-critical-repair-6850` (ACTIVE_UNMERGED_CLOSURE)

| Field | Value |
|-------|-------|
| tipSha | `272319f03e6db693db5bd0fdffe8e959b43acc79` |
| PR | [#343](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/343) |
| PR state / draft | OPEN / false |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-09T07:39:15Z / 2026-08-23T15:28:50Z |
| production diff | data/en/b1.js, www/data/en/b1.js |
| reports/docs diff | reports/en-b1-critical-micro-regression-1.md, reports/en-b1-critical-micro-regression-2.md, reports/en-b1-critical-regression-1.md, reports/en-b1-full-audit.md, reports/en-b1-luna-linguistic-audit.md … |
| baseline comparison | data/en/b1.js: main=f5794c205b26 branch=20180d22c8c5 match=false; www/data/en/b1.js: main=f5794c205b26 branch=20180d22c8c5 match=false |
| main ahead (count) | 22 |
| closure metadata | reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 22 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-09 07:51:14 +0000. Closure on main: reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 3. `cursor/audit-kurss-content-5a8d` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `bac9ca1ae442de030c959d6c571eaee9ca6b0eee` |
| PR | [#123](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/123) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-07-18T08:51:58Z / 2026-08-23T15:28:49Z |
| production diff | data/courseLessons.js, www/data/courseLessons.js |
| reports/docs diff | scripts/audit-kurss.js, scripts/fix-kurss-audit.js, scripts/kurss-audit-report.json |
| baseline comparison | data/courseLessons.js: main=04dcb1bfa48b branch=65b316d1e1aa match=false; www/data/courseLessons.js: main=04dcb1bfa48b branch=53f8ae5b2c0e match=false |
| main ahead (count) | 6 |
| closure metadata | reports/cs-kurss-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 6 production commit(s) after branch tip (018ca5c9 Sync all {LANG}-DE German content from LV-DE master). Main production last touched 2026-08-15 22:05:19 +0000. Branch production last touched 2026-07-18 08:51:43 +0000. Closure on main: reports/cs-kurss-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 4. `cursor/cs-a1-critical-final-repair-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `fb84f93b62cee22d47987c3295cd539d30d6883d` |
| PR | [#423](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/423) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-11T16:32:19Z / 2026-08-23T15:28:48Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-validation.md, reports/cs-a1-post-repair-audit.md, reports/temp/cs-a1-critical-validation.json, reports/temp/cs-a1-critical-validation/batch-01.json … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=bd8441b2e729 match=false; www/data/cs/a1.js: main=518407038a42 branch=bd8441b2e729 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-11 16:32:17 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 5. `cursor/cs-a1-final-main-repair-batch04-final10-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `cb5d5de485bbff7be410695bf12bd19631b9beb8` |
| PR | [#456](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/456) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-13T14:06:25Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-final-main-repair-batch51-100.md, reports/cs-a1-final-repair-block-03.md, reports/cs-a1-final-repair-block-04.md, scripts/apply-cs-a1-final-main-repair-batch04-final10.js, scripts/apply-cs-a1-final-main-repair-batch101-150.js … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=421e0529cfe9 match=false; www/data/cs/a1.js: main=518407038a42 branch=421e0529cfe9 match=false |
| main ahead (count) | 10 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 10 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-13 14:06:18 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 6. `cursor/cs-a1-final-main-repair-batch101-150-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `5cefdabe19428e5cb4e23c773e81f5319a87f74e` |
| PR | [#455](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/455) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-13T14:03:42Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-final-main-repair-batch51-100.md, reports/cs-a1-final-repair-block-03.md, scripts/apply-cs-a1-final-main-repair-batch101-150.js, scripts/apply-cs-a1-final-main-repair-batch51-100.js |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=7b2a4d3a4440 match=false; www/data/cs/a1.js: main=518407038a42 branch=7b2a4d3a4440 match=false |
| main ahead (count) | 10 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 10 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-13 14:03:35 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 7. `cursor/cs-a1-final-main-repair-batch51-100-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `41e6db4c08a24432ed613315afb85ae939191fb8` |
| PR | [#454](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/454) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-13T14:00:48Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-final-main-repair-batch51-100.md, scripts/apply-cs-a1-final-main-repair-batch51-100.js |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=fed381be1fe5 match=false; www/data/cs/a1.js: main=518407038a42 branch=fed381be1fe5 match=false |
| main ahead (count) | 10 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 10 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-13 14:00:46 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 8. `cursor/cs-a1-final-missing-study-parity-repair-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `39fed3ce220e3f1a05f0401058f6f4ba85aa3d3e` |
| PR | [#458](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/458) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-13T14:32:34Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-final-main-repair-batch51-100.md, reports/cs-a1-final-missing-study-parity-repair.md, reports/cs-a1-final-repair-block-03.md, reports/cs-a1-final-repair-block-04.md, reports/cs-a1-missing-study-parity-review.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=8b327d442e0d match=false; www/data/cs/a1.js: main=518407038a42 branch=8b327d442e0d match=false |
| main ahead (count) | 10 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 10 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-13 14:32:16 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 9. `cursor/cs-a1-final-post-repair-audit-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `d672651215eba6fb1b05c8046d38092a0591b7bf` |
| PR | [#452](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/452) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:58:59Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-final-post-repair-audit.md, reports/cs-a1-full-review-block-13.md, reports/cs-a1-full-review-block-14.md, reports/cs-a1-full-review-closure.md, reports/cs-a1-full-review-repair-block-01.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=69b995788f66 match=false; www/data/cs/a1.js: main=518407038a42 branch=69b995788f66 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:16:17 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 10. `cursor/cs-a1-final-study-parity-sectionaccents-micro-repair-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `698277bf7fe1ebc369155e2c419b5555173f91da` |
| PR | [#459](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/459) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-13T14:36:06Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-final-main-repair-batch51-100.md, reports/cs-a1-final-missing-study-parity-repair.md, reports/cs-a1-final-repair-block-03.md, reports/cs-a1-final-repair-block-04.md, reports/cs-a1-final-study-parity-sectionaccents-micro-repair.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=b175b1cd0ac5 match=false; www/data/cs/a1.js: main=518407038a42 branch=b175b1cd0ac5 match=false |
| main ahead (count) | 10 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 10 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-13 14:35:47 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 11. `cursor/cs-a1-full-review-repair-block01-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `08e9a8626b70832c81cb1fa6df36c73eb98ca284` |
| PR | [#438](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/438) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T15:42:19Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, scripts/apply-cs-a1-full-review-repair-block01.js |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=0b2299ec4a10 match=false; www/data/cs/a1.js: main=518407038a42 branch=0b2299ec4a10 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 15:42:10 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 12. `cursor/cs-a1-full-review-repair-block02-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `c09c4a763b07e37848908ae8d893e649ecc257ac` |
| PR | [#439](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/439) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T15:44:56Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, scripts/apply-cs-a1-full-review-repair-block01.js, scripts/apply-cs-a1-full-review-repair-block02.js |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=a71cf632602a match=false; www/data/cs/a1.js: main=518407038a42 branch=a71cf632602a match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 15:44:38 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 13. `cursor/cs-a1-full-review-repair-block03-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `5035ec4f992cd6788c153bfaf59a104b92b8268c` |
| PR | [#440](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/440) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T15:53:03Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, scripts/apply-cs-a1-full-review-repair-block01.js, scripts/apply-cs-a1-full-review-repair-block02.js … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=2665f115d167 match=false; www/data/cs/a1.js: main=518407038a42 branch=2665f115d167 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 15:52:53 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 14. `cursor/cs-a1-full-review-repair-block04-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `5245080aa16ce6a65674b84b1ce726a7aa9ca940` |
| PR | [#441](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/441) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T15:56:16Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, scripts/apply-cs-a1-full-review-repair-block01.js … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=b6b8f7bfedca match=false; www/data/cs/a1.js: main=518407038a42 branch=b6b8f7bfedca match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 15:56:04 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 15. `cursor/cs-a1-full-review-repair-block05-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `665a5d15f280e9dd592137092157926d5c94caf7` |
| PR | [#442](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/442) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T15:58:05Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=1ae767d00d91 match=false; www/data/cs/a1.js: main=518407038a42 branch=1ae767d00d91 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 15:57:54 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 16. `cursor/cs-a1-full-review-repair-block06-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `a84489535295850d300c047826ee593c7aaf51a0` |
| PR | [#443](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/443) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:00:40Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=e537caeec7c2 match=false; www/data/cs/a1.js: main=518407038a42 branch=e537caeec7c2 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:00:29 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 17. `cursor/cs-a1-full-review-repair-block07-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `3e5f40273fe74caed18b2355955fec4fdcc06e16` |
| PR | [#444](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/444) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:04:10Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=6948400d37fe match=false; www/data/cs/a1.js: main=518407038a42 branch=6948400d37fe match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:04:00 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 18. `cursor/cs-a1-full-review-repair-block08-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `bddf580440055e033568ccc4695ab52f6af8f75b` |
| PR | [#445](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/445) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:06:12Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=43ce9ce6c65e match=false; www/data/cs/a1.js: main=518407038a42 branch=43ce9ce6c65e match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:06:01 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 19. `cursor/cs-a1-full-review-repair-block09-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `2df1f0cf2c317b5916e4d75aba5b5f40202cd17e` |
| PR | [#446](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/446) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:08:09Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=a0095bae3915 match=false; www/data/cs/a1.js: main=518407038a42 branch=a0095bae3915 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:07:58 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 20. `cursor/cs-a1-full-review-repair-block10-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `1108ea918a656631a01e7293ed8c8c810747f544` |
| PR | [#447](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/447) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:11:30Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=607e3c29cf76 match=false; www/data/cs/a1.js: main=518407038a42 branch=607e3c29cf76 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:11:20 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 21. `cursor/cs-a1-full-review-repair-block11-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `9b59589c394d96a69c59abfb0b6eb33f310c3743` |
| PR | [#448](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/448) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:14:01Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=bf2916957061 match=false; www/data/cs/a1.js: main=518407038a42 branch=bf2916957061 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:13:50 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 22. `cursor/cs-a1-full-review-repair-block12-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `c559de98fb43547408813969da4e67374bc11109` |
| PR | [#449](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/449) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T16:16:27Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-full-review-repair-block-01.md, reports/cs-a1-full-review-repair-block-02.md, reports/cs-a1-full-review-repair-block-03.md, reports/cs-a1-full-review-repair-block-04.md, reports/cs-a1-full-review-repair-block-05.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=69b995788f66 match=false; www/data/cs/a1.js: main=518407038a42 branch=69b995788f66 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 16:16:17 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 23. `cursor/cs-a1-high-final-closure-check-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `9b3ebe3fd1c7d5a3268e02ba37376e85304016cb` |
| PR | [#436](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/436) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T15:14:46Z / 2026-08-23T15:28:48Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-final-closure-check.md, reports/cs-a1-high-final-micro-repair-02.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=6ed45dfed0bd match=false; www/data/cs/a1.js: main=518407038a42 branch=6ed45dfed0bd match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 15:07:18 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 24. `cursor/cs-a1-high-final-micro-repair-02-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `51b11f6951bc6270764100297984d747ad4af9b6` |
| PR | [#435](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/435) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T15:07:28Z / 2026-08-23T15:28:48Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-final-micro-repair-02.md, reports/cs-a1-high-micro-regression-02.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=6ed45dfed0bd match=false; www/data/cs/a1.js: main=518407038a42 branch=6ed45dfed0bd match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 15:07:18 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 25. `cursor/cs-a1-high-post-repair-audit-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `9c2947c86ae7d37454d46ebd8657aee16ffaa3d7` |
| PR | [#432](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/432) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-a1-high-repair-block06-6ea4 |
| created / updated | 2026-08-12T14:49:32Z / 2026-08-12T14:49:32Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-post-repair-audit.md, reports/cs-a1-high-repair-block-01.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=234a7f03c789 match=false; www/data/cs/a1.js: main=518407038a42 branch=234a7f03c789 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:37:10 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 26. `cursor/cs-a1-high-regression-final-repair-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `c14e9211244564860c08888a3c8ea37cbcc1ecfc` |
| PR | [#433](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/433) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-a1-high-post-repair-audit-6ea4 |
| created / updated | 2026-08-12T14:58:34Z / 2026-08-12T14:58:34Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-post-repair-audit.md, reports/cs-a1-high-regression-final-repair.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=6aeb99fcb42f match=false; www/data/cs/a1.js: main=518407038a42 branch=6aeb99fcb42f match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:58:25 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 27. `cursor/cs-a1-high-repair-block01-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `26138f92f0379cffaa93844aa258b83a418bed45` |
| PR | [#426](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/426) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T14:19:23Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-repair-block-01.md, reports/cs-a1-high-validation.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=d31687b706ea match=false; www/data/cs/a1.js: main=518407038a42 branch=d31687b706ea match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:19:14 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 28. `cursor/cs-a1-high-repair-block02-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `8dc45cfc8eca72f6e33307d5f8076039ac9b33fc` |
| PR | [#427](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/427) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-12T14:22:42Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-repair-block-01.md, reports/cs-a1-high-repair-block-02.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=5206dbcaa680 match=false; www/data/cs/a1.js: main=518407038a42 branch=5206dbcaa680 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:22:30 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 29. `cursor/cs-a1-high-repair-block03-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `a4fe739b08f270ef53ff50192a90e7729eacd43e` |
| PR | [#428](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/428) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-a1-high-repair-block02-6ea4 |
| created / updated | 2026-08-12T14:25:50Z / 2026-08-12T14:25:50Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-repair-block-01.md, reports/cs-a1-high-repair-block-02.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=7b002d372806 match=false; www/data/cs/a1.js: main=518407038a42 branch=7b002d372806 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:25:37 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 30. `cursor/cs-a1-high-repair-block04-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `b320920c298758f1b727e4905b3cf3450453b427` |
| PR | [#429](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/429) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-a1-high-repair-block03-6ea4 |
| created / updated | 2026-08-12T14:27:10Z / 2026-08-12T14:27:10Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-repair-block-01.md, reports/cs-a1-high-repair-block-02.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=1dad2f34f5e8 match=false; www/data/cs/a1.js: main=518407038a42 branch=1dad2f34f5e8 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:27:03 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 31. `cursor/cs-a1-high-repair-block05-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `1c813d16320e79bc39e4fe320740a137aece0ec5` |
| PR | [#430](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/430) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-a1-high-repair-block04-6ea4 |
| created / updated | 2026-08-12T14:33:20Z / 2026-08-12T14:33:20Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-repair-block-01.md, reports/cs-a1-high-repair-block-02.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=ea801609d50c match=false; www/data/cs/a1.js: main=518407038a42 branch=ea801609d50c match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:33:18 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 32. `cursor/cs-a1-high-repair-block06-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `3d134c9cb25625dfd3eb73800996630cff2aa826` |
| PR | [#431](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/431) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-a1-high-repair-block05-6ea4 |
| created / updated | 2026-08-12T14:37:06Z / 2026-08-12T14:37:12Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-critical-final-repair.md, reports/cs-a1-critical-micro-regression.md, reports/cs-a1-critical-validation.md, reports/cs-a1-high-repair-block-01.md, reports/cs-a1-high-repair-block-02.md … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=234a7f03c789 match=false; www/data/cs/a1.js: main=518407038a42 branch=234a7f03c789 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-12 14:37:10 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 33. `cursor/cs-a1-post-repair-audit-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `563b193f79d170bfc8039578d50597a9b55de3c2` |
| PR | [#421](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/421) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-11T15:54:13Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/a1.js, www/data/cs/a1.js |
| reports/docs diff | reports/cs-a1-post-repair-audit.md, reports/temp/cs-a1-post-repair-audit.json, reports/temp/cs-a1-post-repair-audit/batch-simple-001-050.json, reports/temp/cs-a1-post-repair-audit/batch-simple-051-100.json, reports/temp/cs-a1-post-repair-audit/batch-simple-101-150.json … |
| baseline comparison | data/cs/a1.js: main=518407038a42 branch=da1c5b506f88 match=false; www/data/cs/a1.js: main=518407038a42 branch=da1c5b506f88 match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-11 15:21:40 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 34. `cursor/cs-b1-final-2card-micro-repair-apply-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `566c275c4d4c28d107eda97c70007b6cdbd0bf1c` |
| PR | [#502](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/502) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-15T07:07:42Z / 2026-08-23T15:28:48Z |
| production diff | data/cs/b1.js, www/data/cs/b1.js |
| reports/docs diff | reports/cs-b1-final-2card-micro-repair-apply.md, reports/temp/cs-b1-final-2card-micro-repair-apply.json, scripts/apply-cs-b1-final-2card-micro-repair.js, scripts/cs-b1-final-2card-micro-repair-spec.json |
| baseline comparison | data/cs/b1.js: main=d3e4f45d83b3 branch=81710671a7fb match=false; www/data/cs/b1.js: main=d3e4f45d83b3 branch=81710671a7fb match=false |
| main ahead (count) | 3 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 3 production commit(s) after branch tip (43adc669 Sync sectionAccents DE branches from LV-DE master). Main production last touched 2026-08-16 06:48:47 +0000. Branch production last touched 2026-08-15 07:07:37 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 35. `cursor/cs-b1-final-micro-regression-closure-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `f45f531eee7956310a2de262249592c23eab63e6` |
| PR | [#503](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/503) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-b1-final-2card-micro-repair-apply-6ea4 |
| created / updated | 2026-08-15T07:10:57Z / 2026-08-15T07:10:57Z |
| production diff | data/cs/b1.js, www/data/cs/b1.js |
| reports/docs diff | reports/cs-b1-final-2card-micro-repair-apply.md, reports/cs-b1-final-micro-regression-closure.md, reports/temp/cs-b1-final-2card-micro-repair-apply.json, reports/temp/cs-b1-final-micro-regression-closure-run.log, reports/temp/cs-b1-final-micro-regression-closure.json … |
| baseline comparison | data/cs/b1.js: main=d3e4f45d83b3 branch=81710671a7fb match=false; www/data/cs/b1.js: main=d3e4f45d83b3 branch=81710671a7fb match=false |
| main ahead (count) | 3 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 3 production commit(s) after branch tip (43adc669 Sync sectionAccents DE branches from LV-DE master). Main production last touched 2026-08-16 06:48:47 +0000. Branch production last touched 2026-08-15 07:07:37 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 36. `cursor/cs-b2-final-closure-audit-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `6f798efc6781a0d7b76907fda52b8c76d0fb00a7` |
| PR | [#508](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/508) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-b2-targeted-regression-audit-6ea4 |
| created / updated | 2026-08-15T09:00:56Z / 2026-08-15T09:00:56Z |
| production diff | data/cs/b2.js, www/data/cs/b2.js |
| reports/docs diff | reports/cs-b2-25-card-not-found-reconciliation.md, reports/cs-b2-copy-only-repair-apply.md, reports/cs-b2-final-closure-audit.md, reports/cs-b2-owner-remap-microrepair-01.md, reports/cs-b2-targeted-regression-audit.md … |
| baseline comparison | data/cs/b2.js: main=990242606169 branch=eadad7b6fbba match=false; www/data/cs/b2.js: main=990242606169 branch=eadad7b6fbba match=false |
| main ahead (count) | 1 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 1 production commit(s) after branch tip (018ca5c9 Sync all {LANG}-DE German content from LV-DE master). Main production last touched 2026-08-15 22:05:19 +0000. Branch production last touched 2026-08-15 08:38:50 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 37. `cursor/cs-b2-owner-copy-only-repair-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `35e1301425f3800fdaceca7810c6c8af5b9d98f1` |
| PR | [#506](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/506) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | main |
| created / updated | 2026-08-15T08:25:48Z / 2026-08-23T15:28:47Z |
| production diff | data/cs/b2.js, www/data/cs/b2.js |
| reports/docs diff | reports/cs-b2-25-card-not-found-reconciliation.md, reports/cs-b2-copy-only-repair-apply.md, reports/cs-b2-owner-remap-microrepair-01.md, reports/owner/cs-b2-repair-mappings/cs-b2-repair-group01-cards-001-050_f009.md, reports/owner/cs-b2-repair-mappings/cs-b2-repair-group02-cards-051-100_3ae5.md … |
| baseline comparison | data/cs/b2.js: main=990242606169 branch=eadad7b6fbba match=false; www/data/cs/b2.js: main=990242606169 branch=eadad7b6fbba match=false |
| main ahead (count) | 1 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 1 production commit(s) after branch tip (018ca5c9 Sync all {LANG}-DE German content from LV-DE master). Main production last touched 2026-08-15 22:05:19 +0000. Branch production last touched 2026-08-15 08:38:50 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 38. `cursor/cs-b2-targeted-regression-audit-6ea4` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `e276650a10b556812483568c47a755657ccfae87` |
| PR | [#507](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/507) |
| PR state / draft | OPEN / true |
| mergeable | MERGEABLE |
| base | cursor/cs-b2-owner-copy-only-repair-6ea4 |
| created / updated | 2026-08-15T08:53:53Z / 2026-08-15T08:53:53Z |
| production diff | data/cs/b2.js, www/data/cs/b2.js |
| reports/docs diff | reports/cs-b2-25-card-not-found-reconciliation.md, reports/cs-b2-copy-only-repair-apply.md, reports/cs-b2-owner-remap-microrepair-01.md, reports/cs-b2-targeted-regression-audit.md, reports/owner/cs-b2-repair-mappings/cs-b2-repair-group01-cards-001-050_f009.md … |
| baseline comparison | data/cs/b2.js: main=990242606169 branch=eadad7b6fbba match=false; www/data/cs/b2.js: main=990242606169 branch=eadad7b6fbba match=false |
| main ahead (count) | 1 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 1 production commit(s) after branch tip (018ca5c9 Sync all {LANG}-DE German content from LV-DE master). Main production last touched 2026-08-15 22:05:19 +0000. Branch production last touched 2026-08-15 08:38:50 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 39. `cursor/da-kurss-full-luna-audit-fffe` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `be850b4fef08b4bbb07c5238223dc73a2a71eeef` |
| PR | [#579](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/579) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-18T14:20:20Z / 2026-08-23T15:28:47Z |
| production diff | data/da/courseLessons.js, data/da/courseTrainingCards.js, languages/da/ui.js, www/data/da/courseLessons.js, www/data/da/courseTrainingCards.js |
| reports/docs diff | reports/da-kurss-full-audit.md, reports/da-kurss-full-luna-audit-GITHUB.md, reports/da-kurss-full-luna-audit-README.md, reports/da-kurss-full-luna-owner-decisions-01-structure-lesson7.md, reports/da-kurss-full-luna-owner-decisions-02-static-html.md … |
| baseline comparison | data/da/courseLessons.js: main=1889b2c8559d branch=221842620972 match=false; data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=874306fcc1ac match=false; languages/da/ui.js: main=610d6cd9af76 branch=5138600bd276 match=false; www/data/da/courseLessons.js: main=1889b2c8559d branch=221842620972 match=false; www/data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=874306fcc1ac match=false |
| main ahead (count) | 2 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 2 production commit(s) after branch tip (25f9d003 DA Kurss: apply 9-object source review (55/55 LABOT fragments)). Main production last touched 2026-08-18 17:43:59 +0000. Branch production last touched 2026-08-18 14:40:12 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 40. `cursor/da-kurss-post-luna-owner-repair-fffe` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `222daa5f9849614ed366d3650ce55d9b3aa27007` |
| PR | [#581](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/581) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-18T15:15:11Z / 2026-08-23T15:28:47Z |
| production diff | data/da/courseLessons.js, data/da/courseTrainingCards.js, www/data/da/courseLessons.js, www/data/da/courseTrainingCards.js |
| reports/docs diff | reports/da-kurss-needs-source-review-GITHUB.md, reports/da-kurss-needs-source-review-README.md, reports/da-kurss-needs-source-review-decisions.md, reports/da-kurss-needs-source-review.md, reports/da-kurss-owner-decisions.md … |
| baseline comparison | data/da/courseLessons.js: main=1889b2c8559d branch=f633beb6a52a match=false; data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=880802ce0e41 match=false; www/data/da/courseLessons.js: main=1889b2c8559d branch=f633beb6a52a match=false; www/data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=880802ce0e41 match=false |
| main ahead (count) | 2 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 2 production commit(s) after branch tip (25f9d003 DA Kurss: apply 9-object source review (55/55 LABOT fragments)). Main production last touched 2026-08-18 17:43:59 +0000. Branch production last touched 2026-08-18 15:29:15 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 41. `cursor/da-kurss-post-luna-reaudit-fffe` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `38bb8af57f7cb5b50328001ef1d752bfdac890b0` |
| PR | [#580](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/580) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-18T15:00:22Z / 2026-08-23T15:28:47Z |
| production diff | data/da/courseLessons.js, data/da/courseTrainingCards.js, languages/da/ui.js, www/data/da/courseLessons.js, www/data/da/courseTrainingCards.js |
| reports/docs diff | reports/da-kurss-full-audit.md, reports/da-kurss-full-luna-audit-GITHUB.md, reports/da-kurss-full-luna-audit-README.md, reports/da-kurss-full-luna-owner-decisions-01-structure-lesson7.md, reports/da-kurss-full-luna-owner-decisions-02-static-html.md … |
| baseline comparison | data/da/courseLessons.js: main=1889b2c8559d branch=221842620972 match=false; data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=874306fcc1ac match=false; languages/da/ui.js: main=610d6cd9af76 branch=5138600bd276 match=false; www/data/da/courseLessons.js: main=1889b2c8559d branch=221842620972 match=false; www/data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=874306fcc1ac match=false |
| main ahead (count) | 2 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 2 production commit(s) after branch tip (25f9d003 DA Kurss: apply 9-object source review (55/55 LABOT fragments)). Main production last touched 2026-08-18 17:43:59 +0000. Branch production last touched 2026-08-18 14:40:12 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 42. `cursor/da-kurss-post-repair-full-luna-audit-fffe` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `6b43a6f87b2683f14fa5db41cf13a8412fdf33f3` |
| PR | [#582](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/582) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-18T15:44:35Z / 2026-08-23T15:28:47Z |
| production diff | data/da/courseLessons.js, data/da/courseTrainingCards.js, www/data/da/courseLessons.js, www/data/da/courseTrainingCards.js |
| reports/docs diff | reports/da-kurss-full-audit.md, reports/da-kurss-needs-source-review-GITHUB.md, reports/da-kurss-needs-source-review-README.md, reports/da-kurss-needs-source-review-decisions.md, reports/da-kurss-needs-source-review.md … |
| baseline comparison | data/da/courseLessons.js: main=1889b2c8559d branch=f633beb6a52a match=false; data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=880802ce0e41 match=false; www/data/da/courseLessons.js: main=1889b2c8559d branch=f633beb6a52a match=false; www/data/da/courseTrainingCards.js: main=a72ef6fd6117 branch=880802ce0e41 match=false |
| main ahead (count) | 2 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 2 production commit(s) after branch tip (25f9d003 DA Kurss: apply 9-object source review (55/55 LABOT fragments)). Main production last touched 2026-08-18 17:43:59 +0000. Branch production last touched 2026-08-18 15:29:15 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 43. `cursor/da-verbs-final-post-repair-owner-repair-fffe` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `c7e6e8a1fbcf87ca99a1e64b56843e8332756765` |
| PR | [#564](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/564) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-16T16:08:46Z / 2026-08-23T15:28:47Z |
| production diff | data/da/verbs.js, www/data/da/verbs.js |
| reports/docs diff | reports/da-verbs-final-post-repair-owner-repair-apply.md, reports/da-verbs-owner-decisions-final-post-repair-signed.md, reports/temp/da-verbs-final-post-repair-owner-apply-log.json, reports/temp/da-verbs-final-post-repair-owner-apply-map.json, scripts/apply-da-verbs-final-post-repair-owner-repair.js … |
| baseline comparison | data/da/verbs.js: main=9f55c75d4659 branch=f4ea29680769 match=false; www/data/da/verbs.js: main=9f55c75d4659 branch=f4ea29680769 match=false |
| main ahead (count) | 2 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 2 production commit(s) after branch tip (cb1456f5 Apply final post-repair micro OWNER repair (verb-119 Han skrev)). Main production last touched 2026-08-16 16:19:10 +0000. Branch production last touched 2026-08-16 16:08:39 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 44. `cursor/en-b1-high-repair-01-6850` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `48fbfa8ce6ffbc6414c9f877f3787f8342523976` |
| PR | [#345](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/345) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-09T08:11:07Z / 2026-08-23T15:28:48Z |
| production diff | data/en/b1.js, www/data/en/b1.js |
| reports/docs diff | reports/en-b1-critical-micro-regression-1.md, reports/en-b1-critical-micro-regression-2.md, reports/en-b1-critical-regression-1.md, reports/en-b1-full-audit.md, reports/en-b1-high-owner-review-01.md … |
| baseline comparison | data/en/b1.js: main=f5794c205b26 branch=1296ea24036b match=false; www/data/en/b1.js: main=f5794c205b26 branch=1296ea24036b match=false |
| main ahead (count) | 22 |
| closure metadata | reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 22 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-09 08:10:57 +0000. Closure on main: reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 45. `cursor/en-b1-high-repair-02-6850` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `51a9d9af34fa9c197358ce08dcb1b9e4cf36453d` |
| PR | [#347](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/347) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-09T08:23:39Z / 2026-08-23T15:28:48Z |
| production diff | data/en/b1.js, www/data/en/b1.js |
| reports/docs diff | reports/en-b1-critical-micro-regression-1.md, reports/en-b1-critical-micro-regression-2.md, reports/en-b1-critical-regression-1.md, reports/en-b1-full-audit.md, reports/en-b1-high-owner-review-01.md … |
| baseline comparison | data/en/b1.js: main=f5794c205b26 branch=49e5273d8b57 match=false; www/data/en/b1.js: main=f5794c205b26 branch=49e5273d8b57 match=false |
| main ahead (count) | 22 |
| closure metadata | reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 22 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-09 08:28:37 +0000. Closure on main: reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 46. `cursor/en-b1-high-repair-03-6850` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `45f51dac4e189424fd633683c7ef983538c20a50` |
| PR | [#349](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/349) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-09T08:38:55Z / 2026-08-23T15:28:48Z |
| production diff | data/en/b1.js, www/data/en/b1.js |
| reports/docs diff | reports/en-b1-critical-micro-regression-1.md, reports/en-b1-critical-micro-regression-2.md, reports/en-b1-critical-regression-1.md, reports/en-b1-full-audit.md, reports/en-b1-high-owner-review-01.md … |
| baseline comparison | data/en/b1.js: main=f5794c205b26 branch=e27f517d658f match=false; www/data/en/b1.js: main=f5794c205b26 branch=e27f517d658f match=false |
| main ahead (count) | 22 |
| closure metadata | reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 22 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-09 08:38:45 +0000. Closure on main: reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 47. `cursor/en-b1-high-repair-04-6850` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `adaf8c60b2c6ed6497d61c9e28601e1c0d303c7e` |
| PR | [#351](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/351) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-09T08:52:02Z / 2026-08-23T15:28:48Z |
| production diff | data/en/b1.js, www/data/en/b1.js |
| reports/docs diff | reports/en-b1-critical-micro-regression-1.md, reports/en-b1-critical-micro-regression-2.md, reports/en-b1-critical-regression-1.md, reports/en-b1-full-audit.md, reports/en-b1-high-owner-review-01.md … |
| baseline comparison | data/en/b1.js: main=f5794c205b26 branch=6335dd357fd4 match=false; www/data/en/b1.js: main=f5794c205b26 branch=6335dd357fd4 match=false |
| main ahead (count) | 22 |
| closure metadata | reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 22 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-09 08:51:54 +0000. Closure on main: reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 48. `cursor/en-b1-high-repair-05-6850` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `45f5464bdb548df6cb3acf0e5f083653a091e810` |
| PR | [#353](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/353) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-09T09:01:53Z / 2026-08-23T15:28:48Z |
| production diff | data/en/b1.js, www/data/en/b1.js |
| reports/docs diff | reports/en-b1-critical-micro-regression-1.md, reports/en-b1-critical-micro-regression-2.md, reports/en-b1-critical-regression-1.md, reports/en-b1-full-audit.md, reports/en-b1-high-owner-review-01.md … |
| baseline comparison | data/en/b1.js: main=f5794c205b26 branch=9e1232dcffad match=false; www/data/en/b1.js: main=f5794c205b26 branch=9e1232dcffad match=false |
| main ahead (count) | 22 |
| closure metadata | reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 22 production commit(s) after branch tip (3cd029c4 Apply approved EN A1/B1 and CS A1 native translations after DE sync). Main production last touched 2026-08-16 07:23:57 +0000. Branch production last touched 2026-08-09 09:01:48 +0000. Closure on main: reports/en-b1-final-closure-reconfirmation.md, reports/en-b1-final-closure.md. |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 49. `cursor/es-kurss-articles-visual-repair-3141` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `6388b04780fb239db216ab12754bcd08a6066096` |
| PR | [#669](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/669) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-26T13:01:31Z / 2026-08-26T13:01:31Z |
| production diff | data/es/courseLessons.js, www/data/es/courseLessons.js |
| reports/docs diff | reports/es-kurss-articles-visual-owner-apply.md, reports/es-kurss-articles-visual-owner-decisions.json, reports/es-kurss-articles-visual-owner-decisions.md, reports/es-kurss-articles-visual-repair-task.md, reports/es-kurss-articles-visual-repair-verification.md … |
| baseline comparison | data/es/courseLessons.js: main=5c833b89016c branch=de5ed0659733 match=false; www/data/es/courseLessons.js: main=5c833b89016c branch=de5ed0659733 match=false |
| main ahead (count) | 6 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 6 production commit(s) after branch tip (a202b473 ES Kurss L12-21: unified OWNER gala COPY-ONLY apply (204 unique targets)). Main production last touched 2026-08-27 10:50:23 +0000. Branch production last touched 2026-08-26 13:01:21 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 50. `cursor/es-kurss-pronouns-visual-repair-3141` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `a984da86998a916138874ac37de13900bd2f7296` |
| PR | [#670](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/670) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-26T13:15:29Z / 2026-08-26T13:15:29Z |
| production diff | data/es/courseLessons.js, languages/es/ui.js, www/data/es/courseLessons.js |
| reports/docs diff | reports/es-kurss-pronouns-visual-owner-apply.md, reports/es-kurss-pronouns-visual-owner-decisions.json, reports/es-kurss-pronouns-visual-owner-decisions.md, reports/es-kurss-pronouns-visual-repair-task.md, reports/es-kurss-pronouns-visual-repair-verification.md … |
| baseline comparison | data/es/courseLessons.js: main=5c833b89016c branch=f646a97eea46 match=false; languages/es/ui.js: main=ce5c2455b4be branch=4482613caf14 match=false; www/data/es/courseLessons.js: main=5c833b89016c branch=f646a97eea46 match=false |
| main ahead (count) | 7 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 7 production commit(s) after branch tip (a202b473 ES Kurss L12-21: unified OWNER gala COPY-ONLY apply (204 unique targets)). Main production last touched 2026-08-27 10:50:23 +0000. Branch production last touched 2026-08-26 13:15:14 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 51. `cursor/es-kurss-sentence-structure-visual-repair-3141` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `d8486d170d0ff6eda635a6d50ac01e030f10e80c` |
| PR | [#672](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/672) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-26T13:24:05Z / 2026-08-26T13:24:05Z |
| production diff | data/es/courseLessons.js, www/data/es/courseLessons.js |
| reports/docs diff | reports/es-kurss-sentence-structure-visual-owner-apply.md, reports/es-kurss-sentence-structure-visual-owner-decisions.json, reports/es-kurss-sentence-structure-visual-repair-task.md, reports/es-kurss-sentence-structure-visual-repair-verification.md, reports/temp/es-kurss-sentence-structure-visual-owner-apply-log.json … |
| baseline comparison | data/es/courseLessons.js: main=5c833b89016c branch=0ae23a116950 match=false; www/data/es/courseLessons.js: main=5c833b89016c branch=0ae23a116950 match=false |
| main ahead (count) | 6 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 6 production commit(s) after branch tip (a202b473 ES Kurss L12-21: unified OWNER gala COPY-ONLY apply (204 unique targets)). Main production last touched 2026-08-27 10:50:23 +0000. Branch production last touched 2026-08-26 13:23:52 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 52. `cursor/es-kurss-verb-basics-visual-repair-3141` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `4c0dd5cecff198d60860f40de30fa1683ee1cb63` |
| PR | [#671](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/671) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-26T13:21:42Z / 2026-08-26T13:21:42Z |
| production diff | data/es/courseLessons.js, languages/es/ui.js, www/data/es/courseLessons.js |
| reports/docs diff | reports/es-kurss-verb-basics-visual-owner-apply.md, reports/es-kurss-verb-basics-visual-owner-decisions.json, reports/es-kurss-verb-basics-visual-repair-task.md, reports/es-kurss-verb-basics-visual-repair-verification.md, reports/temp/es-kurss-verb-basics-visual-owner-apply-log.json … |
| baseline comparison | data/es/courseLessons.js: main=5c833b89016c branch=06092eb9a634 match=false; languages/es/ui.js: main=ce5c2455b4be branch=c6aecc213cee match=false; www/data/es/courseLessons.js: main=5c833b89016c branch=06092eb9a634 match=false |
| main ahead (count) | 7 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 7 production commit(s) after branch tip (a202b473 ES Kurss L12-21: unified OWNER gala COPY-ONLY apply (204 unique targets)). Main production last touched 2026-08-27 10:50:23 +0000. Branch production last touched 2026-08-26 13:21:27 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

### 53. `cursor/et-de-a1-full-audit-ba9e` (NEEDS_OWNER_REVIEW)

| Field | Value |
|-------|-------|
| tipSha | `ef3e74c46f4cf1570f0c79f235dc2431796ef670` |
| PR | [#586](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/586) |
| PR state / draft | OPEN / true |
| mergeable | CONFLICTING |
| base | main |
| created / updated | 2026-08-18T18:24:16Z / 2026-08-23T15:28:47Z |
| production diff | data/et/a1.js, www/data/et/a1.js |
| reports/docs diff | reports/et-a1-audit-stability-root-cause.md, reports/et-a1-full-audit.json, reports/et-a1-full-audit.md, reports/et-a1-missing-study-owner-decisions-accepted.md, reports/et-a1-missing-study-owner-decisions.md … |
| baseline comparison | data/et/a1.js: main=8d8e5252f0c4 branch=2aaaef9ff88b match=false; www/data/et/a1.js: main=8d8e5252f0c4 branch=2aaaef9ff88b match=false |
| main ahead (count) | 11 |
| closure metadata | (none found on main) |
| later merged PRs | (none matched) |
| **PROPOSED_CATEGORY** | **CLOSED_SUPERSEDED** |
| PROPOSED_REASON | origin/main has 11 production commit(s) after branch tip (9bf74548 ET A1: apply residual 2 multi-translation OWNER LABOT (es, heißen)). Main production last touched 2026-08-24 14:06:13 +0000. Branch production last touched 2026-08-19 15:42:47 +0000.  |
| OWNER resolvedCategory | _pending_ |
| OWNER reason | _pending_ |

## Notes

- READ-ONLY OWNER-PREP — no merge, close, delete, or apply.

