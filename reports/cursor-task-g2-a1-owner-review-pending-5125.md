# G2/A1 — batched individual OWNER review of 5,125 remaining PENDING escalations

## OWNER authorization

```text
OWNER_AUTHORIZATION = REQUIRED
OWNER_AUTHORIZATION_STATUS = PENDING
```

Perform genuine individual OWNER review of the **5,125** remaining `PENDING` linguistic escalations using the **three-tier architecture** (`reports/g2-a1-three-tier-architecture.md`):

- **Luna** — translation only, one batch per session (max **50** rows);
- **anti-bulk script** — mandatory gate between Luna output and Cursor merge;
- **ChatGPT** — spot-check 15–20 rows per batch (supplement, not replacement for anti-bulk);
- **Cursor/Grok** — split, merge, verify only (no linguistic decisions);
- **OWNER (human)** — sets `owner_authorization_status = APPROVED` in `status-index.json` per batch.

This task must not modify production, LV, DE, Crowdin, or Luna state. It must not apply LABOT corrections.

Read `reports/g2-a1-three-tier-architecture.md` and `reports/g2-a1-owner-review-repair-master-sequence.md` first. If this instruction conflicts with `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`, STOP and report the exact conflict.

---

## 1. Binding identity

| Field | Expected value |
|---|---|
| Repo | `sandrisbrikmanis-rgb/de-lv-app` |
| Branch | `cursor/g2-a1-owner-review-batch-001` |
| PR | `#720` / `#721` — Draft, unmerged |
| Trusted ingest commit | prefix `1b2212f2` |
| Post-quarantine PENDING | **5,125** |
| Batch prefix | `LRB-###` (`LRB-001` … `LRB-103`) |
| Max rows per batch | **50** |
| OWNER source hash | `a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419` |

### Preflight

```bash
git fetch origin main cursor/g2-a1-owner-review-batch-001
git branch --show-current
git rev-parse HEAD
git status --short
git diff --cached --name-only
```

STOP if branch/HEAD/PR state is wrong or unrelated staged changes exist.

---

## 2. Authoritative baseline

Use committed post-quarantine pending state. Resolve from branch HEAD:

```text
reports/g2-a1-owner-review-7737-escalations-remaining.csv
reports/g2-a1-owner/status-index.json
reports/g2-a1-owner-review-individual-7737-pending-ingest.csv
```

Prove before split:

```text
PENDING_TOTAL = 5125
PENDING_UNIQUE_STABLE_IDS = 5125
MISSING = 0
EXTRA = 0
DUPLICATE_STABLE_IDS = 0
NON_OWNER_IDENTITY_MISMATCH = 0
PREEXISTING_17525_DECIDED_CHANGED = 0
BATCH_001_100_UNCHANGED = 0
DEFERRED_BACKLOG_29_CLOSED = 0
```

Failure:

```text
BLOCKED_G2_A1_PENDING_5125_SOURCE_INTEGRITY
```

---

## 3. Split phase (script only — no AI decisions)

Run (create script if missing):

```bash
node scripts/split-g2-a1-owner-pending-linguistic-batches.js \
  --input reports/g2-a1-owner-review-7737-escalations-remaining.csv \
  --out-dir reports/g2-a1-owner/batches-pending \
  --batch-prefix LRB \
  --batch-size 50
```

Expected:

```text
BATCH_COUNT = 103
ROWS_PER_BATCH = 50 (last batch = 25)
TOTAL_ROWS = 5125
```

Split must be deterministic and order-stable by `finding_stable_ids`. Do not split a `decision_target_key` across batches.

Also emit:

```text
reports/g2-a1-owner/batches-pending/index.json
```

---

## 4. Review phase (one `LRB-###` per Cursor session)

For batch `LRB-00N` only:

### Step A — manifest (before review)

Create `reports/g2-a1-owner/manifests/LRB-00N-start.json` from `batches-pending/LRB-00N-input.csv` SHA and exact `finding_stable_ids` list.

### Step B — individual review

Produce `reports/g2-a1-owner/batches-reviewed/LRB-00N-decisions.csv` with:

- all original non-OWNER columns preserved;
- `owner_status`, `owner_decision`, `owner_new`, `owner_note` filled per row;
- `provenance_type = INDIVIDUAL_LINGUISTIC` for every decided row;
- `PENDING` rows keep blank decision/new with precise note.

### Step C — batch proof

Write `reports/g2-a1-owner/batches-reviewed/LRB-00N-proof.json` with counts:

```text
LABOT
NELABOT
PENDING
provenance_individual_count
prefix_only_nelabot_count
single_rule_labot_count
```

### Step D — anti-bulk gate

Run `cursor-task-g2-a1-owner-anti-bulk-audit.md` on this batch. **Do not proceed** if FAIL.

### Review rules (same as recheck-350)

- No prefix-only `NELABOT`
- No mechanical duplicate-removal rule applied to all `LABOT` in batch
- No copying prior invalid recheck notes
- No closing rows merely to reduce PENDING count
- DE/LV untouched; production read-only

---

## 5. Merge phase (after each batch or at end)

```bash
node scripts/merge-g2-a1-owner-reviewed-batches.js \
  --reviewed-dir reports/g2-a1-owner/batches-reviewed \
  --pending-baseline reports/g2-a1-owner-review-7737-escalations-remaining.csv \
  --out reports/g2-a1-owner/consolidated/all-decisions-final.csv \
  --remaining-out reports/g2-a1-owner/consolidated/all-remaining-final.csv
```

Merge gates:

```text
REVIEWED_BATCH_COVERAGE = N/103
CONSOLIDATED_ROW_COVERAGE = 5125/5125
UNIQUE_STABLE_IDS = 5125
MISSING = 0
EXTRA = 0
DUPLICATE_ASSIGNMENTS = 0
IDENTITY_MISMATCH = 0
```

Update `reports/g2-a1-owner/status-index.json`:

```text
batches_reviewed
batches_anti_bulk_pass
pending_remaining
```

---

## 6. Protected state

Must remain unchanged during review:

- existing **17,525** decided rows from trusted ingest path;
- BATCH-001 audited 100 `NELABOT`;
- 29-entry `DEFERRED_TARGET_LANGUAGE_REVIEW` backlog;
- production / all `data/**` / `www/data/**` language files;
- LV master and all DE content;
- Crowdin files and Luna checkpoint.

```text
PRODUCTION_DIFF = 0
LV_DIFF = 0
DE_DIFF = 0
CROWDIN_DIFF = 0
NEW_REAL_LUNA_CALLS = 0
```

---

## 7. Mandatory tests

Create or extend:

```text
scripts/test-g2-a1-owner-pending-split.js
scripts/test-g2-a1-owner-reviewed-merge.js
scripts/test-g2-a1-owner-anti-bulk.js
```

Tests must prove:

1. split determinism and full 5,125 coverage;
2. per-batch identity integrity;
3. anti-bulk detection of prefix-only and single-rule patterns;
4. manifest created before output;
5. no mutation of pre-existing decided rows;
6. production/LV/DE/Crowdin diff = 0;
7. tampered SHA / row-order independence fails closed.

---

## 8. Git and PR

Commit per reviewed batch (preferred) to `cursor/g2-a1-owner-review-batch-001`. Keep PR Draft.

Suggested commit message:

```text
feat(g2-a1): individual OWNER review pending batch LRB-00N
```

---

## 9. Final classification

All 103 batches reviewed, merged, consolidated anti-bulk PASS:

```text
CLASSIFICATION = G2_A1_PENDING_5125_BATCHED_REVIEW_COMPLETE
NEXT_STEP = OWNER_REVIEWED_INGEST
```

Valid review with remainder still `PENDING`:

```text
CLASSIFICATION = G2_A1_PENDING_5125_BATCHED_REVIEW_COMPLETED_WITH_REMAINDER
NEXT_STEP = CONTINUE_LRB_BATCHES
```

Any failure:

```text
CLASSIFICATION = BLOCKED_G2_A1_PENDING_5125_BATCHED_REVIEW
```
