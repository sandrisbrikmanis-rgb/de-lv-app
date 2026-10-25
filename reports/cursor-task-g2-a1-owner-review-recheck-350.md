# G2/A1 — real individual OWNER review of recheck-350 (INVALID repair)

## OWNER authorization

```text
OWNER_AUTHORIZATION = REQUIRED
OWNER_AUTHORIZATION_STATUS = PENDING
```

Repair the **invalid** `g2-a1-owner-recheck-350-decisions.csv` artifact by performing a genuine individual linguistic review of exactly **350** rows, split into **7** batches of **50** rows (`LRB-R350-001` … `LRB-R350-007`).

Follow `reports/g2-a1-three-tier-architecture.md` (Luna → anti-bulk → spot-check → OWNER APPROVED → Cursor merge).

This task is **review only**. It must not modify production, LV, DE, Crowdin, Luna, or any trusted prior ingest decisions. It must not ingest results until `cursor-task-g2-a1-owner-anti-bulk-audit.md` passes on every batch and on the merged R350 slice.

Do not start until `OWNER_AUTHORIZATION_STATUS = APPROVED` for the target batch in `reports/g2-a1-owner/status-index.json`.

If this instruction conflicts with `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`, STOP and report the exact conflict.

---

## 1. Binding identity

| Field | Expected value |
|---|---|
| Repo | `sandrisbrikmanis-rgb/de-lv-app` |
| Branch | `cursor/g2-a1-owner-review-batch-001` |
| PR | `#720` / `#721` — Draft, unmerged |
| Invalid artifact | `g2-a1-owner-recheck-350-decisions.csv` (or equivalent path on branch) |
| Invalid artifact status | `INVALID — NOT OWNER APPROVED` |
| Review scope | exactly **350** rows from the recheck set |
| Batch IDs | `LRB-R350-001` … `LRB-R350-007` |
| Rows per batch | **50** (last batch may be shorter only if input is <350) |
| OWNER source hash | `a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419` |

### Preflight

```bash
git fetch origin main cursor/g2-a1-owner-review-batch-001
git branch --show-current
git rev-parse HEAD
git status --short
git diff --cached --name-only
```

STOP if branch differs, PR is merged, or unrelated staged changes exist. Do not reset, checkout, clean, stash, or touch unrelated unstaged files.

---

## 2. Why the prior file is invalid

The previous `recheck-350` artifact is rejected because:

| Pattern | Count | Verdict |
|---------|------:|---------|
| `NELABOT` with only `OWNER_RECHECK_APPROVED_2026-09-09:` prefix + unchanged old note | 326 | bulk, not individual review |
| `LABOT` from single mechanical rule (`X • X` duplicate removal) | 24 | bulk, not individual review |
| Reproducible by one transform on all 350 rows | 350 | **FAIL** |

Do not copy, ingest, or “fix” that file with another bulk transform.

---

## 3. Authoritative input

Build the 350-row review input from the **committed** pending/quarantine baseline on the owner-review branch, not from the invalid recheck output.

Required sources (resolve exact paths from branch HEAD):

```text
reports/g2-a1-owner-review-7737-escalations-remaining.csv
reports/g2-a1-owner-review-5241-restored-pending.csv
reports/g2-a1-owner/quarantine/recheck-350-invalid.csv   (create in Phase 0 if missing)
```

Prove before split:

```text
RECHECK_350_INPUT_ROWS = 350
RECHECK_350_UNIQUE_STABLE_IDS = 350
MISSING = 0
EXTRA = 0
DUPLICATE_STABLE_IDS = 0
NON_OWNER_IDENTITY_MISMATCH = 0
```

If counts differ, classify:

```text
BLOCKED_G2_A1_RECHECK_350_SOURCE_INTEGRITY
```

---

## 4. Manifest-first rule (mandatory)

Before reviewing batch `LRB-R350-00N`, create:

```text
reports/g2-a1-owner/manifests/LRB-R350-00N-start.json
```

Required manifest fields:

```json
{
  "batch_id": "LRB-R350-001",
  "phase": "RECHECK_350_REPAIR",
  "input_csv_sha256": "<sha256 of batches-pending/LRB-R350-001-input.csv>",
  "input_row_count": 50,
  "finding_stable_ids": ["...", "..."],
  "created_at": "ISO-8601",
  "reviewer": "OWNER | CURSOR_AGENT",
  "provenance_policy": "INDIVIDUAL_LINGUISTIC_ONLY"
}
```

Rules:

- Manifest must be created **before** the reviewed decisions CSV.
- Ingest or audit must **reject** manifests generated from the reviewed output file.
- Each `finding_stable_id` in output must appear in the manifest list exactly once.

---

## 5. Review method (one batch per Cursor run)

Each Cursor session reviews **exactly one** `LRB-R350-00N` batch.

For **every row** examine at minimum:

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
```

### Allowed outcomes

**`LABOT`** only when all are true:

- production target is unambiguous;
- correct target-language value is known exactly;
- `owner_new` is non-empty and **differs** from `production_current`;
- DE and LV master remain untouched;
- `owner_note` states concrete evidence (not “duplicate removed by rule” alone).

**`NELABOT`** only when:

- `owner_new` is empty;
- `owner_note` gives a **new**, row-specific reason;
- note is **not** identical to the prior note with only a prefix added.

**`PENDING`** when evidence is insufficient. Leave decision/new blank and add precise unresolved reason.

### Forbidden patterns (auto-fail)

- Prefix-only approval: `OWNER_RECHECK_APPROVED_*:` + unchanged body
- Same `owner_note` template across >3 rows in one batch without row-specific evidence
- All `LABOT` values explainable by one regex/transform
- `provenance_type` missing or set to `AUTOMATIC_RULE` for this phase

Set on every decided row:

```text
provenance_type = INDIVIDUAL_LINGUISTIC
```

---

## 6. Outputs per batch

For each `LRB-R350-00N`:

```text
reports/g2-a1-owner/batches-pending/LRB-R350-00N-input.csv
reports/g2-a1-owner/manifests/LRB-R350-00N-start.json
reports/g2-a1-owner/batches-reviewed/LRB-R350-00N-decisions.csv
reports/g2-a1-owner/batches-reviewed/LRB-R350-00N-proof.json
```

After all 7 batches:

```text
reports/g2-a1-owner/consolidated/recheck-350-decisions-final.csv
reports/g2-a1-owner/consolidated/recheck-350-remaining-final.csv
reports/g2-a1-owner/consolidated/recheck-350-merge-proof.json
```

Supporting scripts (create if absent):

```text
scripts/split-g2-a1-owner-recheck-350-batches.js
scripts/merge-g2-a1-owner-recheck-350-batches.js
scripts/test-g2-a1-owner-recheck-350-batches.js
```

---

## 7. Mandatory gates (per batch)

```text
BATCH_ROW_COVERAGE = 50/50
UNIQUE_STABLE_IDS = 50
MISSING = 0
EXTRA = 0
DUPLICATE_ASSIGNMENTS = 0
IDENTITY_MISMATCH = 0
LABOT_WITHOUT_CHANGED_OWNER_NEW = 0
NELABOT_WITH_OWNER_NEW = 0
PREFIX_ONLY_NELABOT = 0
SINGLE_RULE_LABOT_PATTERN = 0
MANIFEST_BEFORE_OUTPUT = PASS
PROVENANCE_TYPE_INDIVIDUAL = 100%
PRODUCTION_DIFF = 0
LV_DIFF = 0
DE_DIFF = 0
CROWDIN_DIFF = 0
NEW_REAL_LUNA_CALLS = 0
```

Run `cursor-task-g2-a1-owner-anti-bulk-audit.md` after **each** batch and again on the merged R350 slice.

---

## 8. Git and PR

Commit only recheck-350 repair artifacts and scripts to `cursor/g2-a1-owner-review-batch-001`. Keep PR Draft. Do not write to `main`.

Suggested commit message:

```text
feat(g2-a1): real individual OWNER review recheck-350 batch LRB-R350-00N
```

One commit per reviewed batch is preferred for auditability.

---

## 9. Final classification

All 350 rows validly reviewed and anti-bulk PASS:

```text
CLASSIFICATION = G2_A1_RECHECK_350_REAL_INDIVIDUAL_REVIEW_COMPLETE
NEXT_STEP = MERGE_INTO_PENDING_5125_CONSOLIDATION_OR_INGEST_SLICE
```

Any bulk pattern or gate failure:

```text
CLASSIFICATION = BLOCKED_G2_A1_RECHECK_350_REAL_INDIVIDUAL_REVIEW
```

Final report must include: HEAD SHA, input/output SHA, per-batch distributions, anti-bulk results, manifest paths, changed files, PR Draft status.
