# A1 LRB-001…103 consolidated OWNER mapping

Generated: 2026-09-18T16:40:59.849Z

## Status

**`A1_LRB_001_103_CONSOLIDATION_CORRECTION_3_COMPLETE_AWAITING_OWNER_VERIFICATION`**

```text
NEXT_ACTION: OWNER_VERIFY_CONSOLIDATED_MAPPING
```

| Gate | Value |
|------|------:|
| origin/main | `f36014e0d77a9a43740b3ad114ab845a64e11ebf` |
| generation base SHA | `a6a8e8d1751aa017980d50fa6f65a626c07d22fd` |
| malformed_leaf_paths | 0 |
| unauthorized_empty_values | 0 |
| invalid_card_schema_count | 0 |
| superseded_values_selected | 473 |
| LRB coverage | 103/103 |
| linguistically_closed | 103/103 |
| PENDING | 0 |
| unresolved_owner_conflicts | 0 |
| owner_45_applied | 45/45 |
| unique final leaf keys | 35345 |
| full post-owner cards | 3734 |
| initial batch rows traced | 4968 |
| duplicate_final_keys | 0 |
| missing_final_values | 0 |
| DE change targets | 0 |
| not_apply_mapped_rows_total | 186 |
| owner_review_required | 0 |
| dropped_baseline_leaf_fields | 0 |

## Metrics reconciliation

| Metric | Count |
|--------|------:|
| Finding rows (inventory) | 4968 |
| Audit leaf decisions (total) | 35345 |
| Apply-eligible leaf decisions | 34321 |
| Audit-only leaf delta | 1024 |
| Finding rows not in apply mapping | 186 |
| RECONSTRUCTION_FAILED finding rows | 7 |
| APPLY_ELIGIBLE (not-apply file) | 30 |
| OWNER_CONFIRMED_NO_CHANGE | 149 |
| AUDIT_ONLY_NO_TARGET | 0 |
| RECONSTRUCTION_FAILED | 7 |
| OWNER_REVIEW_REQUIRED | 0 |

## Artifacts

- `reports/g2-a1-owner/consolidation/final/A1-LRB-001-103-CONSOLIDATED-OWNER-DECISIONS.json` (or parts)
- `reports/g2-a1-owner/consolidation/final/A1-LRB-001-103-CONSOLIDATED-OWNER-MANIFEST.json`
- `reports/g2-a1-owner/consolidation/final/A1-LRB-001-103-CONSOLIDATION-PROOF.json`
- `reports/g2-a1-owner/consolidation/final/A1-LRB-001-103-PRODUCTION-APPLY-PLAN.json`
- `reports/g2-a1-owner/consolidation/final/A1-LRB-001-103-NOT-APPLY-MAPPED-OWNER-DECISIONS.json`
- `reports/g2-a1-owner/consolidation/final/A1-LRB-001-103-OWNER-REVIEW-REQUIRED.json`

Production apply **not executed** in this task.
