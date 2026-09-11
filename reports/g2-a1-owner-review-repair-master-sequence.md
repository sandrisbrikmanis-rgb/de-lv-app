# G2/A1 — OWNER review repair master sequence

**Classification:** `G2_A1_OWNER_REVIEW_REPAIR_SEQUENCE_ACTIVE`
**Governing docs:** `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`

## Why this sequence exists

Technical ingest gates (SHA, row coverage, identity) can pass while OWNER artifacts remain invalid. The `recheck-350` incident proved that bulk transforms — prefix-only `NELABOT`, single-rule `LABOT`, self-generated manifests — must be blocked **before** ingest and **before** COPY-ONLY apply.

This sequence replaces “one large AI session closes N rows” with:

```text
manifest (start) → split → individual batch review → anti-bulk audit → merge → ingest → final COPY-ONLY apply
```

## Current verified baseline (PR #721 family)

Use the committed state on `cursor/g2-a1-owner-review-batch-001` / PR `#720`–`#721`, not mutable working files alone.

| Metric | Value |
|--------|------:|
| Total decision rows (BATCH-002…233) | 22,650 |
| Trusted first ingest (`1b2212f2`) DECIDED | 14,913 |
| Trusted first ingest PENDING | 7,737 |
| After individual linguistic ingest DECIDED | 17,525 |
| Remaining PENDING (post-quarantine) | 5,125 |
| Trusted LABOT not yet applied | 1,476+ |
| `recheck-350` decisions file | **INVALID — do not ingest** |
| `5241` automatic rule decisions | **QUARANTINE — restored to PENDING** |
| Production COPY-ONLY (Crowdin baseline) | done on `main` |
| LABOT production apply | **NOT RUN** |

## Absolute prohibitions (all phases)

- No ingest of `g2-a1-owner-recheck-350-decisions.csv` or any derivative until real individual review passes anti-bulk audit.
- No manifest generated from the ingest candidate and then used as OWNER proof.
- No COPY-ONLY apply until consolidated OWNER closure or explicit OWNER authorization for a frozen partial apply.
- No write to `main`, LV master, DE fields, Crowdin, or Luna state during review phases.
- No rule-based bulk default for linguistic escalation rows.
- No AI session may review more than **one** `LRB-###` batch (max 50 rows) per task run.

## Directory layout (binding)

```text
reports/g2-a1-owner/
├── status-index.json
├── quarantine/
│   ├── recheck-350-invalid.csv
│   └── automatic-5241-restored-pending.csv
├── manifests/
│   └── LRB-001-start.json … LRB-###-start.json
├── batches-pending/
│   └── LRB-001-input.csv … LRB-###-input.csv
├── batches-reviewed/
│   ├── LRB-001-decisions.csv
│   └── LRB-001-proof.json
├── consolidated/
│   ├── all-decisions-final.csv
│   └── all-remaining-final.csv
└── ingest/
    ├── ingest-proof.json
    └── ingest-summary.md
```

Scripts (create or extend under `scripts/lib/g2-a1-phase3/`):

```text
scripts/split-g2-a1-owner-pending-linguistic-batches.js
scripts/merge-g2-a1-owner-reviewed-batches.js
scripts/audit-g2-a1-owner-anti-bulk.js
scripts/ingest-g2-a1-owner-reviewed-consolidated.js
scripts/apply-g2-a1-owner-labot-copy-only.js
scripts/test-g2-a1-owner-anti-bulk.js
scripts/test-g2-a1-owner-reviewed-ingest.js
scripts/verify-g2-a1-owner-labot-post-apply.js
```

## Phase map

| Phase | Task document | Scope | Output |
|-------|---------------|-------|--------|
| **0** | (status only) | Mark invalid/quarantine artifacts | `status-index.json`, quarantine CSVs |
| **A** | `cursor-task-g2-a1-owner-review-recheck-350.md` | 350 INVALID rows → 7×50 real review | `LRB-R350-###` reviewed batches |
| **B** | `cursor-task-g2-a1-owner-review-pending-5125.md` | Split + review 5,125 PENDING | `LRB-001…LRB-103` reviewed batches |
| **C** | `cursor-task-g2-a1-owner-anti-bulk-audit.md` | Mandatory gate on every reviewed batch + consolidated merge | `anti-bulk-proof.json` PASS |
| **D** | `cursor-task-g2-a1-owner-reviewed-ingest.md` | Ingest only after Phase C PASS | consolidated ingest proof |
| **E** | `cursor-task-g2-a1-owner-final-copy-only-apply.md` | Single LABOT apply after OWNER closure | production verify |

## Recommended execution order

```text
Phase 0  → quarantine invalid artifacts
Phase A  → recheck 350 (7 batches) → anti-bulk each → merge R350 slice
Phase B  → pending 5125 (103 batches of 50) → anti-bulk each → merge
Phase C  → consolidated anti-bulk on full merge
Phase D  → ingest
Phase E  → one COPY-ONLY apply + roundtrip verify
```

Do **not** run Phase E until Phase D reports `PENDING = 0` for linguistic escalations (29-entry deferred backlog excluded).

## Per-batch workflow (repeat for every `LRB-###`)

```text
1. OWNER or tooling creates manifests/LRB-###-start.json from committed pending input SHA
2. split script writes batches-pending/LRB-###-input.csv (≤50 rows)
3. One Cursor task reviews exactly that batch → batches-reviewed/LRB-###-decisions.csv
4. anti-bulk audit on the batch → FAIL closed on bulk patterns
5. merge script appends to consolidated working set
6. Continue until all batches complete
```

## Status index (required fields)

`reports/g2-a1-owner/status-index.json` must track at minimum:

```json
{
  "classification": "G2_A1_OWNER_REVIEW_REPAIR_SEQUENCE_ACTIVE",
  "trusted_ingest_commit": "1b2212f2",
  "pending_total": 5125,
  "recheck_350_status": "INVALID_NEEDS_REAL_INDIVIDUAL_REVIEW",
  "automatic_5241_status": "QUARANTINE_RESTORED_TO_PENDING",
  "batches_total": 103,
  "batches_reviewed": 0,
  "batches_anti_bulk_pass": 0,
  "consolidated_ingest_status": "NOT_STARTED",
  "production_labot_apply_status": "NOT_STARTED"
}
```

Update this file at the end of every phase. Never claim `OWNER_READY` unless anti-bulk + ingest + verify gates all pass in the same run.

## Task documents in this repair pack

1. `reports/cursor-task-g2-a1-owner-review-recheck-350.md`
2. `reports/cursor-task-g2-a1-owner-review-pending-5125.md`
3. `reports/cursor-task-g2-a1-owner-anti-bulk-audit.md`
4. `reports/cursor-task-g2-a1-owner-reviewed-ingest.md`
5. `reports/cursor-task-g2-a1-owner-final-copy-only-apply.md`

## Final success classification

Only when all phases complete:

```text
CLASSIFICATION = G2_A1_OWNER_REVIEW_REPAIR_COMPLETE
PENDING_LINGUISTIC = 0
ANTI_BULK = PASS
INGEST = PASS
LABOT_APPLY = PASS
POST_APPLY_VERIFY = PASS
```

Any bulk-pattern detection, provenance self-reference, or partial apply without authorization:

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_REVIEW_REPAIR
```
