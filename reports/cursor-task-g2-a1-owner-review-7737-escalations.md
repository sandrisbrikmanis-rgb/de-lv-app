# G2/A1 — OWNER review of 7,737 remaining escalations

## OWNER authorization

```text
G2_A1_OWNER_REVIEW_7737_ESCALATIONS_APPROVED
```

Perform a complete, evidence-based review of the 7,737 remaining `PENDING` findings from BATCH-002…233.

This task is review and decision consolidation only. It must not modify production, LV, DE, Crowdin, or Luna state and must not apply any correction.

If this instruction conflicts with `MASTER_1.12_BINDING_WORK_AGREEMENT.md`, STOP and report the exact conflict.

---

## 1. Binding identity

| Field | Expected value |
|---|---|
| Repo | `sandrisbrikmanis-rgb/de-lv-app` |
| Branch | `cursor/g2-a1-owner-review-batch-001` |
| PR | `#720` — Draft, unmerged |
| Ingest commit | prefix `1b2212f2` |
| OWNER source hash | `a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419` |
| Repaired batch input hash | `0d3b8fbb1aeed3a694c2301194d950a1034b91f2f376aca7a6a9b6f46588c1bb` |
| Ingested rows | 22,650 |
| Already decided | 14,913 |
| Review scope | exactly 7,737 `PENDING` rows |
| Pending source SHA-256 | `750299e3602769e59a0951f7adbbecdbb4968c09638afbd91025385f4b533414` |

Before work:

```bash
git fetch origin main cursor/g2-a1-owner-review-batch-001
git branch --show-current
git rev-parse HEAD
git rev-parse origin/main
git status --short
git diff --cached --name-only
```

STOP if the branch differs, HEAD does not start with `1b2212f2`, PR #720 is merged/not Draft, or unrelated staged changes exist. Do not reset, checkout, clean, stash, or touch unrelated unstaged files.

---

## 2. Authoritative baseline

Use the committed ingest state at commit `1b2212f2…`, not the mutable working files as their own comparison baseline.

Resolve the committed locations of:

```text
g2-a1-owner-review-all-remaining-decisions-final.csv
g2-a1-owner-review-needs-owner-final.csv
reports/g2-a1-phase3-owner-review-all-batches/BATCH-002.csv … BATCH-233.csv
reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv
ingest proof and index produced by commit 1b2212f2
```

Before review prove:

```text
TOTAL_ROWS = 22650
DECIDED = 14913
LABOT = 1476
NELABOT = 13437
PENDING = 7737
PENDING_UNIQUE_STABLE_IDS = 7737
PENDING_SET_MISSING = 0
PENDING_SET_EXTRA = 0
PENDING_DUPLICATES = 0
PENDING_IDENTITY_MISMATCH = 0
BATCH_COVERAGE = 232/232
```

Every identity comparison must cover every non-OWNER column. Self-comparison is forbidden.

If any gate fails:

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_REVIEW_7737_SOURCE_INTEGRITY
```

and do not begin review.

---

## 3. Review method

Review all 7,737 rows individually or in deterministic batches of no more than 100 decision targets. Parallel review is allowed only if:

- every stable ID is assigned exactly once;
- a decision target or source cluster is never split between reviewers;
- each reviewer writes only to its allocated output;
- final consolidation rejects missing, extra, duplicate, or conflicting decisions;
- no rule-based bulk default is used.

For every row examine at least:

```text
finding_stable_ids
decision_target_key
languages
production_file
card_object_id
field_path
lv_source
de_reference
discovery_current
production_current
proposed
raw_category
canonical_bucket
reason
severity
conflict_status
post_crowdin_state
mapping_resolution
existing owner_note
```

Use stable slug/ID and explicit field mapping only. Positional or fuzzy mapping is forbidden.

### Allowed outcomes

`LABOT` is allowed only when all are true:

- the exact production target exists and is unambiguous;
- the correct target-language value is known exactly;
- `owner_new` is non-empty and differs from `production_current`;
- the value does not alter DE or the authoritative LV master;
- the note records concrete evidence for the correction.

`NELABOT` is allowed only when:

- `owner_new` is empty;
- the note gives a concrete reason why the current value must remain unchanged or why the finding is invalid/non-actionable.

Keep the row `PENDING` when evidence is insufficient, the scope is composite, the field is absent, the correction depends on an LV-source decision, or more than one defensible target-language value remains. A PENDING row must retain blank decision/new fields and receive a precise unresolved reason.

Do not force all 7,737 rows closed merely to reach zero PENDING.

---

## 4. Protected state

The following must remain unchanged:

- the existing 1,476 `LABOT` decisions;
- the existing 13,437 `NELABOT` decisions;
- BATCH-001's 100 audited `NELABOT` decisions;
- the separate 29-entry `DEFERRED_TARGET_LANGUAGE_REVIEW` backlog;
- production and every language file;
- the authoritative LV master and all DE content;
- Crowdin files/state;
- Luna checkpoint and call counters;
- the original discovery and OWNER source artifacts.

Required invariants:

```text
PREEXISTING_14913_DECISIONS_CHANGED = 0
BATCH_001_DECISIONS_CHANGED = 0
DEFERRED_BACKLOG_29_CLOSED = 0
PRODUCTION_DIFF = 0
LV_DIFF = 0
DE_DIFF = 0
CROWDIN_DIFF = 0
NEW_REAL_LUNA_CALLS = 0
```

---

## 5. Outputs

Create deterministic review artifacts with repository-consistent paths and names, including at minimum:

```text
reports/g2-a1-owner-review-7737-escalations-decisions.csv
reports/g2-a1-owner-review-7737-escalations-remaining.csv
reports/g2-a1-owner-review-7737-escalations-proof.json
reports/g2-a1-owner-review-7737-escalations-summary.md
scripts/consolidate-g2-a1-owner-review-7737-escalations.js
scripts/test-g2-a1-owner-review-7737-escalations.js
```

The decisions CSV must retain every original non-OWNER field and add only reviewed OWNER values. The remaining CSV must be an exact subset of rows still `PENDING` after review.

Do not overwrite the committed ingest baseline or original input attachments.

---

## 6. Mandatory tests

Tests must prove:

1. input coverage `7737/7737`;
2. unique stable IDs `7737`;
3. missing/extra/duplicate/identity mismatch all `0`;
4. every input row has exactly one output state;
5. all reviewed `LABOT` rows have non-empty changed `owner_new`;
6. every reviewed `NELABOT` row has empty `owner_new`;
7. every remaining `PENDING` row has blank decision/new and a precise note;
8. no two rows assign different `owner_new` values to one decision target;
9. no fuzzy or positional mapping;
10. pre-existing 14,913 decisions remain byte-for-byte equivalent in OWNER fields;
11. BATCH-001 and the 29-entry backlog remain unchanged;
12. production/LV/DE/Crowdin diff = 0;
13. Luna checkpoint is unchanged and real Luna calls = 0;
14. output is deterministic and independent of input row order;
15. tampered source hashes or identities fail closed.

---

## 7. Git and PR

If every gate passes, commit only the review scripts/tests and new review artifacts to:

```text
cursor/g2-a1-owner-review-batch-001
```

Suggested commit message:

```text
feat(g2-a1): review remaining OWNER escalations
```

Push only this branch. PR #720 must remain Draft and unmerged. Never write to `main`.

---

## 8. Final classification

If all 7,737 rows receive valid final decisions:

```text
CLASSIFICATION = G2_A1_OWNER_REVIEW_7737_ESCALATIONS_COMPLETE
NEXT_STEP = CONSOLIDATE_ALL_OWNER_DECISIONS_AND_PREPARE_SINGLE_COPY_ONLY_APPLY
```

If review is valid but some rows must remain unresolved:

```text
CLASSIFICATION = G2_A1_OWNER_REVIEW_7737_ESCALATIONS_COMPLETED_WITH_REMAINDER
NEXT_STEP = OWNER_REVIEW_REMAINING_ESCALATIONS
```

Any coverage, identity, mutation, or test failure:

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_REVIEW_7737_ESCALATIONS
```

The final report must include all source/HEAD hashes, input and output distributions, unresolved reasons by category/language/mapping state, all invariant results, test results, changed files, commit SHA, push status, PR Draft status, and next step.
