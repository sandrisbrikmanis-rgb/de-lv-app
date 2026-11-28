# G2/A1 — next-step documents and execution order

Current verified state:

```text
INGEST COMMIT = 1b2212f2
DECIDED = 14913
LABOT = 1476
NELABOT = 13437
PENDING = 7737
PRODUCTION APPLY = NOT RUN
PR #720 = DRAFT / UNMERGED
```

## Available tasks

1. `cursor-task-g2-a1-owner-review-7737-escalations.md`
   - reviews only the 7,737 unresolved findings;
   - does not modify production;
   - does not alter the existing 14,913 decisions.

2. `cursor-task-g2-a1-apply-1476-approved-corrections.md`
   - applies only the already approved 1,476 `LABOT` values;
   - excludes all 7,737 `PENDING` findings;
   - requires an all-or-nothing CURRENT-value gate before writes.

## Recommended order

For one consolidated A1 production apply:

```text
OWNER review 7,737 → consolidate all final decisions → one COPY-ONLY apply
```

For an immediate partial apply of already approved corrections:

```text
COPY-ONLY apply 1,476 → verify → continue OWNER review of 7,737
```

Do not run both tasks concurrently on the same branch. The second task must start from the verified final HEAD produced by the first task, or from the unchanged ingest HEAD `1b2212f2…` when it is run first.

The recommended project path is the first option because it produces one consolidated A1 apply and one final regression cycle.
