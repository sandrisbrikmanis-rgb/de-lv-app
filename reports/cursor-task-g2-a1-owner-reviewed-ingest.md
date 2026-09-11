# G2/A1 — ingest individually reviewed OWNER decisions (post anti-bulk)

## OWNER authorization

```text
OWNER_AUTHORIZATION = REQUIRED
OWNER_AUTHORIZATION_STATUS = PENDING
INGEST_AUTHORIZATION = false
```

**Structural gates 1–3** must pass before ingest — see `reports/g2-a1-three-tier-architecture.md`.

Ingest consolidated individually reviewed OWNER decisions **only after**:

- anti-bulk audit PASS on every batch and consolidated merge;
- manifest-before-output verified for all batches;
- human OWNER sets `ingestApproved = true` in `reports/g2-a1-owner/status-index.json`.

This task is **ingest only**. It must not apply LABOT values to production language files (apply is structural gate 4 — separate phase).

If this instruction conflicts with `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`, STOP and report the exact conflict.

---

## 1. Binding identity

| Field | Expected value |
|---|---|
| Repo | `sandrisbrikmanis-rgb/de-lv-app` |
| Branch | `cursor/g2-a1-owner-review-batch-001` |
| PR | `#720` / `#721` — Draft, unmerged |
| Consolidated input | `reports/g2-a1-owner/consolidated/all-decisions-final.csv` |
| Remaining output | `reports/g2-a1-owner/consolidated/all-remaining-final.csv` |
| Anti-bulk proof | `reports/g2-a1-owner/consolidated/all-decisions-anti-bulk-proof.json` |
| OWNER source hash | `a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419` |

### Preflight

```bash
git fetch origin main cursor/g2-a1-owner-review-batch-001
git branch --show-current
git rev-parse HEAD
sha256sum reports/g2-a1-owner/consolidated/all-decisions-final.csv
node scripts/audit-g2-a1-owner-anti-bulk.js --input reports/g2-a1-owner/consolidated/all-decisions-final.csv ...
```

STOP if:

- anti-bulk proof missing or `pass != true`;
- branch/PR state wrong;
- attachment SHA differs from OWNER-authorized value;
- unrelated staged changes exist.

---

## 2. Preconditions (all required)

```text
ALL_LRB_BATCHES_REVIEWED = true
ALL_BATCH_ANTI_BULK = PASS
CONSOLIDATED_ANTI_BULK = PASS
RECHECK_350_STATUS != INVALID_UNMERGED
INVALID_RECHECK_350_INGESTED = false
AUTOMATIC_5241_REINGESTED_AS_OWNER = false
MANIFEST_SELF_REFERENCE = false
```

If recheck-350 repair is in scope, ingest only the **merged** consolidated file that includes valid R350 decisions, never the old invalid artifact alone.

---

## 3. Required ingest behavior

1. Reconcile consolidated decisions against the committed pending baseline using **every** non-OWNER identity column. Self-comparison forbidden.
2. Prove full coverage of the ingest scope (5,125 pending rows + any authorized recheck-350 repair rows), with unique `finding_stable_ids`.
3. For every `LABOT`: non-empty `owner_new` that differs from `production_current`; `provenance_type = INDIVIDUAL_LINGUISTIC`.
4. For every `NELABOT`: empty `owner_new`; row-specific `owner_note`; `provenance_type = INDIVIDUAL_LINGUISTIC`.
5. Preserve still-unresolved rows as `PENDING` with precise notes. Do not force closure.
6. Preserve trusted prior decisions (17,525 decided path), BATCH-001 100 NELABOT, and 29-entry deferred backlog.
7. **Do not apply** LABOT to `data/**` or `www/data/**`.
8. Emit ingest proof and tests that fail closed on identity drift, anti-bulk regression, provenance downgrade, or accidental production mutation.

---

## 4. Mandatory gates

```text
ANTI_BULK_PASS = true
ROW_COVERAGE = scope/scope
UNIQUE_STABLE_IDS = scope
MISSING = 0
EXTRA = 0
DUPLICATE_ASSIGNMENTS = 0
IDENTITY_MISMATCH = 0
LABOT_WITHOUT_CHANGED_OWNER_NEW = 0
NELABOT_WITH_OWNER_NEW = 0
PREFIX_ONLY_NELABOT = 0
UNPROVEN_PROVENANCE = 0
PREEXISTING_TRUSTED_DECISIONS_CHANGED = 0
BATCH_001_DECISIONS_CHANGED = 0
DEFERRED_BACKLOG_29_CLOSED = 0
PRODUCTION_DIFF = 0
LV_DIFF = 0
DE_DIFF = 0
CROWDIN_DIFF = 0
NEW_REAL_LUNA_CALLS = 0
```

Failure:

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_REVIEWED_INGEST
```

Success:

```text
CLASSIFICATION = G2_A1_OWNER_REVIEWED_INGEST_READY
NEXT_STEP = FINAL_COPY_ONLY_APPLY_AUTHORIZATION
```

---

## 5. Outputs

```text
reports/g2-a1-owner/ingest/ingest-proof.json
reports/g2-a1-owner/ingest/ingest-summary.md
reports/g2-a1-owner-review-individual-consolidated-ingest.csv
reports/g2-a1-owner-review-individual-pending-ingest.csv
scripts/ingest-g2-a1-owner-reviewed-consolidated.js
scripts/test-g2-a1-owner-reviewed-ingest.js
scripts/verify-g2-a1-owner-reviewed-post-ingest.js
```

Update `reports/g2-a1-owner/status-index.json`:

```text
consolidated_ingest_status = PASS
production_labot_apply_status = NOT_STARTED
```

---

## 6. Absolute prohibitions

- No write to `main`.
- No PR merge or Draft → Ready without OWNER closure authorization.
- No production/LV/DE/Crowdin modification.
- No LABOT apply in this task.
- No ingest of invalid `recheck-350` artifact.
- No manifest generated from ingest candidate used as proof.
- No Luna/model calls.

---

## 7. Git and PR

Commit only ingest scripts, proofs, and resulting CSV artifacts to `cursor/g2-a1-owner-review-batch-001`. Keep PR Draft.

Suggested commit message:

```text
feat(g2-a1): ingest individually reviewed OWNER decisions (anti-bulk verified)
```
