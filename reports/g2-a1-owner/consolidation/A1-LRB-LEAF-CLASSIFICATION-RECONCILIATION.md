# A1 LRB leaf classification count reconciliation

Generated: 2026-09-17T14:38:10.584Z

## Gate

**`A1_LRB_LEAF_CLASSIFICATION_COUNTS_PASS`**

```text
NEXT_ACTION: OWNER_REVIEW_45_EXACT_LEAF_CONFLICTS
```

## Primary counts (mutually exclusive)

| Primary class | Count |
|---------------|------:|
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | 4890 |
| IDENTICAL_FINAL_VALUE | 2703 |
| PROVEN_SEQUENTIAL_SUPERSESSION | 44 |
| INDEPENDENT_OWNER_CONFLICT | 45 |
| INSUFFICIENT_DECISION_SOURCE | 0 |
| **Sum** | **7682** |
| total_unique_repeated_leaf_targets | 7682 |

sum(primary) === total_unique: **true**

## 362 phantom overcount

External rollup summed **8044** (4890+3058+51+45) vs primary sum **7682**.

- Delta **362** = phantom **355** IDENTICAL slots + **7** PROVEN slots from inflated summary lines, **not** duplicate primary assignments per leaf target.
- Each canonical leaf target has exactly one `primary_classification`.

## Unresolved list

| | SHA-256 |
|--|---------|
| before | `912ef5fe32607c0112bd24e81b87af41a42f1ce2415648ae2e178492991ea369` |
| after | `912ef5fe32607c0112bd24e81b87af41a42f1ce2415648ae2e178492991ea369` |
| file SHA unchanged | true |
| canonical conflict set unchanged | true |

Independent OWNER conflicts (primary): **45** (payload before: 437).

Full JSON: `A1-LRB-LEAF-CLASSIFICATION-RECONCILIATION.json`.
