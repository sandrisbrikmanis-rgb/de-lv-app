# G2/A1 — final COPY-ONLY apply of approved LABOT corrections

## OWNER authorization

```text
OWNER_AUTHORIZATION = REQUIRED
OWNER_AUTHORIZATION_STATUS = PENDING
APPLY_AUTHORIZATION = false
```

**Structural gate 4 of 4** — see `reports/g2-a1-three-tier-architecture.md`.

Apply all approved `LABOT` target-language corrections to production `a1.js` files in **one consolidated COPY-ONLY operation**, after:

- individual OWNER review ingest is complete;
- `PENDING` linguistic escalations are closed (deferred 29-entry backlog excluded);
- human OWNER sets `applyApproved = true` in `reports/g2-a1-owner/status-index.json`.

Apply is the **last** phase. No automatic apply after translation or ingest.

If this instruction conflicts with `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`, STOP and report the exact conflict.

---

## 1. Binding identity

| Field | Expected value |
|---|---|
| Repo | `sandrisbrikmanis-rgb/de-lv-app` |
| Branch | `cursor/g2-a1-owner-review-batch-001` |
| PR | `#720` / `#721` — Draft until OWNER closure verified |
| Ingest proof | `reports/g2-a1-owner/ingest/ingest-proof.json` |
| Anti-bulk consolidated proof | `reports/g2-a1-owner/consolidated/all-decisions-anti-bulk-proof.json` |
| Apply mode | **COPY-ONLY** (target-language/native fields only) |

### Preflight

```bash
git fetch origin main cursor/g2-a1-owner-review-batch-001
git branch --show-current
git rev-parse HEAD
node scripts/verify-g2-a1-owner-reviewed-post-ingest.js
node scripts/audit-g2-a1-owner-anti-bulk.js --input reports/g2-a1-owner/consolidated/all-decisions-final.csv ...
```

STOP if post-ingest verify or anti-bulk audit fails.

---

## 2. Preconditions

```text
OWNER_REVIEWED_INGEST = PASS
PENDING_LINGUISTIC = 0
ANTI_BULK_CONSOLIDATED = PASS
DEFERRED_BACKLOG_29_CLOSED = 0
PARTIAL_UNAUTHORIZED_APPLY = false
```

Do **not** run this task while `recheck-350` invalid rows remain unreviewed or while consolidated anti-bulk is FAIL.

Recommended project path (from prior next-step analysis):

```text
OWNER review complete → consolidate → ingest → one COPY-ONLY apply → one regression cycle
```

Avoid a separate early apply of only the original 1,476 LABOT unless OWNER explicitly authorizes a frozen partial apply baseline.

---

## 3. Files that may change

COPY-ONLY apply may write only target-language/native fields in:

```text
data/{lang}/a1.js
www/data/{lang}/a1.js
```

for the 31 target languages in G2/A1 scope.

**Must not change:**

```text
data/a1.js                 (LV master)
any de / de_article / de_plural field
crowdin/content/**
reports/staging/**
OWNER decision artifacts
```

Use `scripts/lib/g2-a1-phase3/production-mapping.js` field alias map. Positional or fuzzy mapping forbidden.

---

## 4. Required apply behavior

1. Load all ingested `LABOT` rows with `provenance_type = INDIVIDUAL_LINGUISTIC`.
2. For each row, verify `production_current` still matches live file at apply time (all-or-nothing CURRENT-value gate).
3. Write only `owner_new` to the mapped target field.
4. Skip rows where CURRENT drifted; fail closed unless OWNER supplies a refreshed decision file.
5. Produce apply proof with per-file SHA before/after, changed field paths, and row coverage.
6. Run post-apply verify and i18n roundtrip tests.

```bash
node scripts/apply-g2-a1-owner-labot-copy-only.js
node scripts/verify-g2-a1-owner-labot-post-apply.js
npm run i18n:content:phase2-g2-a1:verify-roundtrip
```

---

## 5. Mandatory gates

```text
LABOT_ROW_COVERAGE = expected/expected
CURRENT_VALUE_MISMATCH = 0
DE_FIELDS_CHANGED = 0
LV_MASTER_CHANGED = 0
CROWDIN_CHANGED = 0
UNMAPPED_TARGETS = 0
PARTIAL_APPLY = false
POST_APPLY_VERIFY = PASS
ROUNDTRIP_VERIFY = PASS
```

Failure:

```text
CLASSIFICATION = BLOCKED_G2_A1_OWNER_LABOT_COPY_ONLY_APPLY
```

Success:

```text
CLASSIFICATION = G2_A1_OWNER_LABOT_COPY_ONLY_APPLY_COMPLETE
NEXT_STEP = FINAL_REGRESSION_AND_PR_READY_REVIEW
```

---

## 6. Outputs

```text
reports/g2-a1-owner/apply/apply-proof.json
reports/g2-a1-owner/apply/apply-summary.md
reports/g2-a1-owner/apply/changed-files.json
scripts/apply-g2-a1-owner-labot-copy-only.js
scripts/verify-g2-a1-owner-labot-post-apply.js
scripts/test-g2-a1-owner-labot-copy-only-apply.js
```

Update `reports/g2-a1-owner/status-index.json`:

```text
production_labot_apply_status = PASS
```

---

## 7. Absolute prohibitions

- No apply before ingest + anti-bulk PASS.
- No apply of automatic-rule or unproven decisions.
- No split apply across unauthorized commits without refreshed CURRENT gate.
- No modification of DE/LV/Crowdin.
- No merge to `main` without full verify PASS and OWNER PR-ready authorization.

---

## 8. Git and PR

Commit apply scripts, proofs, and changed `data/{lang}/a1.js` + `www/data/{lang}/a1.js` to the owner-review branch. Keep PR Draft until OWNER marks ready.

Suggested commit message:

```text
apply(g2-a1): COPY-ONLY LABOT corrections after individual OWNER closure
```

Final report must include: LABOT count applied, files changed, verify exit codes, HEAD SHA, PR status, remaining deferred backlog state.
