# G2/A1 — ingest reviewed OWNER decisions for BATCH-002…233

## OWNER authorization

```text
G2_A1_OWNER_REVIEW_ALL_REMAINING_DECISIONS_INGEST_APPROVED
```

Ingest the attached OWNER review file without modifying `main`, production, LV, DE, Crowdin, or Luna state.

Authoritative attachment:

```text
g2-a1-owner-review-all-remaining-decisions-final.csv
```

Expected attachment SHA-256:

```text
37fbe192699bfe2bc5738eaaf3622481ac2ed1335f995032666d2ba8033c25d0
```

## Binding identity

```text
Repo: sandrisbrikmanis-rgb/de-lv-app
Branch: cursor/g2-a1-owner-review-batch-001
PR: #720 (must remain Draft and unmerged)
Expected repaired HEAD prefix: edad2f36
OWNER source hash: a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419
Repaired batch input hash: 0d3b8fbb1aeed3a694c2301194d950a1034b91f2f376aca7a6a9b6f46588c1bb
Rows: 22,650
Batches: BATCH-002…233 (232)
```

Read `MASTER_1.12_BINDING_WORK_AGREEMENT.md` first. If it conflicts with this task, STOP and report the exact conflict.

## Preflight

```bash
git fetch origin main cursor/g2-a1-owner-review-batch-001
git branch --show-current
git rev-parse HEAD
git rev-parse origin/main
git status --short
git diff --cached --name-only
sha256sum g2-a1-owner-review-all-remaining-decisions-final.csv
```

STOP if the branch is not `cursor/g2-a1-owner-review-batch-001`, HEAD does not start with `edad2f36`, the attachment hash differs, or unrelated staged changes exist. Do not stash, reset, clean, checkout, or touch unrelated unstaged files.

## Required ingest behavior

1. Reconcile all 22,650 rows against the repaired BATCH-002…233 baseline using every non-OWNER identity column. Self-comparison is forbidden.
2. Prove 22,650 unique `finding_stable_ids`, no missing/extra ID, no duplicate assignment, and exact 232-batch coverage.
3. Ingest exactly:

```text
DECIDED = 14,913
LABOT = 1,476
NELABOT = 13,437
PENDING = 7,737
```

4. For every `LABOT`, require non-empty `owner_new`. For every `NELABOT`, require empty `owner_new`.
5. Preserve all 7,737 `PENDING` rows unchanged as unresolved OWNER escalations. Each must retain its `OWNER_REVIEW_REQUIRED` note and blank decision/new fields.
6. Preserve BATCH-001's previously audited 100 `NELABOT` decisions and the separate 29-entry `DEFERRED_TARGET_LANGUAGE_REVIEW` backlog. Do not close or convert those 29 entries.
7. This task is ingest only. Do not apply the 1,476 corrections to production or any language file.
8. Generate a consolidated ingest proof and tests that fail closed on identity mismatch, missing/extra/duplicate IDs, invalid OWNER field combinations, source-hash drift, repaired-input-hash drift, accidental PENDING closure, or mutation of BATCH-001/backlog.

## Mandatory gates

```text
ROW_COVERAGE = 22650/22650
BATCH_COVERAGE = 232/232
UNIQUE_STABLE_IDS = 22650
MISSING = 0
EXTRA = 0
DUPLICATE_ASSIGNMENTS = 0
IDENTITY_MISMATCH = 0
DECIDED = 14913
LABOT = 1476
NELABOT = 13437
PENDING = 7737
LABOT_WITHOUT_OWNER_NEW = 0
NELABOT_WITH_OWNER_NEW = 0
PENDING_WITH_DECISION_OR_NEW = 0
BATCH_001_DECISIONS_CHANGED = 0
DEFERRED_BACKLOG_29_CLOSED = 0
PRODUCTION_DIFF = 0
LV_DIFF = 0
DE_DIFF = 0
CROWDIN_DIFF = 0
NEW_REAL_LUNA_CALLS = 0
```

If any gate fails:

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_REVIEW_ALL_REMAINING_INGEST
```

If all gates pass:

```text
CLASSIFICATION = G2_A1_OWNER_REVIEW_ALL_REMAINING_INGEST_READY
NEXT_STEP = OWNER_REVIEW_7737_ESCALATIONS_OR_SEPARATE_APPLY_AUTHORIZATION
```

## Absolute prohibitions

- No write to `main`.
- No merge and no change of PR #720 from Draft.
- No production/LV/DE/Crowdin modification.
- No apply of `LABOT` corrections in this task.
- No automatic decision for the 7,737 PENDING rows.
- No Luna/model calls for reclassification.
- No deletion, fuzzy merge, positional mapping, stash, reset, checkout, or clean.
- No unrelated commit.

If all gates pass, commit only the ingest scripts/tests and resulting decision/proof artifacts to `cursor/g2-a1-owner-review-batch-001`, push that branch, and keep PR #720 Draft.
