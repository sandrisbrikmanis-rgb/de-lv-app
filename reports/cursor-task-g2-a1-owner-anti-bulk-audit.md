# G2/A1 — mandatory anti-bulk OWNER audit gate

## OWNER authorization

```text
G2_A1_OWNER_ANTI_BULK_AUDIT_GATE_ENABLED
```

Run the anti-bulk audit on **one reviewed batch** or on a **consolidated merge candidate** before any ingest or OWNER approval claim.

This gate exists because technical CSV integrity (SHA, row count, identity columns) does not detect fake OWNER review. The `recheck-350` incident must never repeat.

If this instruction conflicts with `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`, STOP and report the exact conflict.

---

## 1. When to run

| Trigger | Input | Required result |
|---------|-------|-----------------|
| After each `LRB-###` batch review | `batches-reviewed/LRB-###-decisions.csv` | PASS before merge |
| After recheck-350 merge | `consolidated/recheck-350-decisions-final.csv` | PASS before ingest slice |
| Before consolidated ingest | `consolidated/all-decisions-final.csv` | PASS before ingest |
| On any claimed `APPROVED` OWNER artifact | attached CSV | PASS or BLOCK |

**Never skip this gate** because quarantine/verify/post-ingest tests passed on repository state.

---

## 2. Binding checks

### A. Prefix-only NELABOT (recheck-350 pattern)

FAIL if `owner_decision = NELABOT` and `owner_note` matches:

```text
^OWNER_RECHECK_APPROVED_[0-9-]+:\s*(.+)$
```

and group 1 equals a prior note field (`owner_note_before`, prior ingest note, or discovery note) after normalization.

Also FAIL if >5% of `NELABOT` rows in the file share the same note body after stripping a common prefix.

### B. Single-rule LABOT (duplicate-bullet pattern)

FAIL if all `LABOT` rows' `owner_new` values are explainable by **one** deterministic transform from `production_current`, including but not limited to:

- remove repeated bullet segment `X • X` → `X`;
- trim whitespace only;
- case-only change;
- copy `proposed` verbatim without row-specific justification in `owner_note`.

Heuristic gate:

```text
if LABOT_COUNT > 0 and UNIQUE_TRANSFORM_RULES == 1:
  SINGLE_RULE_LABOT_PATTERN = FAIL
```

### C. Full-file reproducibility

FAIL if an audit script can regenerate ≥95% of decided rows from the input using ≤2 global rules without reading `owner_note` content.

### D. Provenance typing

FAIL if any decided row lacks `provenance_type` or has:

```text
provenance_type in { AUTOMATIC_RULE, UNPROVEN, QUARANTINE, INVALID }
```

for a file claiming individual linguistic OWNER review.

Require:

```text
provenance_type = INDIVIDUAL_LINGUISTIC
```

for every `LABOT` and `NELABOT` in linguistic review phases.

### E. Manifest independence

FAIL if the only manifest for the batch:

- was generated from the reviewed output CSV; or
- has `input_csv_sha256` equal to output SHA; or
- lacks `finding_stable_ids` captured before review.

PASS only when `manifests/LRB-###-start.json` predates output and matches input SHA.

### F. Note quality minimum

FAIL if `owner_note` is empty for decided rows.

FAIL if `owner_note` length < 12 characters for `LABOT` unless row is a trivial scalar equality already documented in `reason`.

FAIL if the same `owner_note` string appears on >3 rows unless they share the same `decision_target_key` class and note explicitly references that shared class.

---

## 3. Script contract

Implement or run:

```bash
node scripts/audit-g2-a1-owner-anti-bulk.js \
  --input reports/g2-a1-owner/batches-reviewed/LRB-001-decisions.csv \
  --manifest reports/g2-a1-owner/manifests/LRB-001-start.json \
  --baseline reports/g2-a1-owner/batches-pending/LRB-001-input.csv \
  --out reports/g2-a1-owner/batches-reviewed/LRB-001-anti-bulk-proof.json
```

Exit codes:

- `0` = PASS
- `1` = FAIL (fail closed)

Proof JSON must include:

```json
{
  "pass": true,
  "classification": "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS",
  "input_sha256": "...",
  "output_sha256": "...",
  "manifest_sha256": "...",
  "row_count": 50,
  "prefix_only_nelabot": 0,
  "single_rule_labot_pattern": false,
  "reproducible_bulk_transform": false,
  "unproven_provenance": 0,
  "individual_linguistic": 50,
  "duplicate_note_collisions": 0
}
```

---

## 4. Mandatory gates

```text
PREFIX_ONLY_NELABOT = 0
SINGLE_RULE_LABOT_PATTERN = false
REPRODUCIBLE_BULK_TRANSFORM = false
UNPROVEN_PROVENANCE = 0
MANIFEST_INDEPENDENCE = PASS
DECIDED_WITHOUT_NOTE = 0
INDIVIDUAL_LINGUISTIC_COVERAGE = 100%
```

Any failure:

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_ANTI_BULK_AUDIT
INGEST_ALLOWED = false
OWNER_APPROVED_CLAIM_ALLOWED = false
```

---

## 5. Absolute prohibitions

- Do not auto-repair failing rows inside this task; return FAIL and require new individual review.
- Do not downgrade failures to warnings.
- Do not ingest on FAIL even if SHA/row-count gates pass.
- Do not generate manifest from output and re-run audit in the same session.

---

## 6. Tests

```text
scripts/test-g2-a1-owner-anti-bulk.js
```

Must include fixtures for:

1. valid individual batch (PASS);
2. recheck-350-style prefix-only NELABOT (FAIL);
3. single-rule LABOT duplicate removal (FAIL);
4. self-referential manifest (FAIL);
5. missing `provenance_type` (FAIL).

---

## 7. Final classification

```text
CLASSIFICATION = G2_A1_OWNER_ANTI_BULK_AUDIT_PASS
NEXT_STEP = MERGE_OR_INGEST_AUTHORIZED_FOR_THIS_ARTIFACT_ONLY
```

or

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_ANTI_BULK_AUDIT
NEXT_STEP = RE_REVIEW_BATCH_WITH_REAL_INDIVIDUAL_DECISIONS
```
