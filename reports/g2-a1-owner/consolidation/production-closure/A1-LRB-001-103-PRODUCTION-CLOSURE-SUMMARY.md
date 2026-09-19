# A1 LRB 001–103 — production closure audit

## Classification

`A1_LRB_001_103_PRODUCTION_CLOSURE_AUDIT_BLOCKED`

**NEXT_ACTION:** `RESOLVE_EXACT_CLOSURE_BLOCKERS`

| Metric | Value |
|--------|------:|
| origin/main | `260f3bd08476c0f9149092e2d5a4a51be3feb850` |
| Production file-set SHA | `0a14ddc3a066cfe47bafb5e9b762d96ca66aca81ad77d7e20a5218dd234d543e` |
| LRB coverage | 103/103 |
| Finding rows (expanded) | 4968/4968 |
| OWNER card keys | 234/234 |
| Unique production slots | 233 |
| OWNER leaf matches | 4787/4787 |
| Full card matches | 234/234 |
| Changed production files | 46 |
| Unresolved alias conflicts | 0 |
| PROVEN_IDENTICAL_ALIAS (finding rows) | 1 |

Finding alias correction #1: repeated `primary_leaf_target_key` rows are no longer classified as alias; only reconciliation-proven dual–owner-card slots qualify.

Read-only audit; production not modified.
