# A1 LRB RE_REVIEW binding + leaf conflict normalization

Generated: 2026-09-17T14:52:58.146Z

## Final classification

**`A1_LRB_OWNER_45_CONFLICT_RESOLUTION_COPY_PASTE_COMPLETE_AWAITING_VERIFICATION`**

```text
NEXT_ACTION: VERIFY_OWNER_45_COPY_PASTE_AND_PROCEED
RE_REVIEW_RANGE: LRB-001…LRB-041
```

## Validation gates

| Gate | Value |
|---|---:|
| semicolon_compound_conflict_keys | 0 |
| payload_vs_composite_comparisons | 0 |
| unresolved_without_exact_leaf_path | 0 |
| missing_post_owner_reconstruction | 0 |
| covered_lrb | 103/103 |
| re_review_range | LRB-001…LRB-041 |
| two_generation_proven | 41/41 |
| initial_vs_expanded_conflicts_001_041 | 0 |
| linguistic_decisions_generated | 0 |

## BEFORE → AFTER

| Metrika | Before | After |
|---|---:|---:|
| Payload-level konflikti | 437 | 0 |
| Semikola composite atslēgas | 112 | 0 |
| Precīzi leaf-level atkārtojumi | — | 7682 |
| Identiskas leaf gala vērtības | — | 2748 |
| Pierādīta secīga supersession | 38 | 44 |
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | — | 4890 |
| Reāli neatkarīgi OWNER leaf konflikti | 437 | 0 |
| Nepietiekams avots | 0 | 0 |
| Aptvertie LRB | 103/103 | 103/103 |

## Expanded standard (OWNER)

| Metrika | Skaits |
|---|---:|
| Agrākie daļējie pārskati | 361 |
| Atkārtoti pārskatītās kartītes (full composite) | 3034 |
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | 4890 |
| Pilnā kartīte aizstāj agrāko patch | 4890 |
| Konflikti starp diviem paplašinātā standarta Gala PASS | 0 |
| OWNER vēlreiz izšķiramie leaf lauki | 0 |

## Leaf metrics

| Metrika | Skaits |
|---|---:|
| IDENTICAL_FINAL_VALUE | 2748 |
| PROVEN_SEQUENTIAL_SUPERSESSION | 44 |
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | 4890 |
| INDEPENDENT_OWNER_CONFLICT | 0 |
| INSUFFICIENT_DECISION_SOURCE | 0 |

## LRB-042 FI

Manifest: `reports/g2-a1-owner/manifests/LRB-042-start.json` — dokumentēts FI pilna kartīšu remonts (50 finding rindas, daudzas ar composite `field_path`).

Detalizēta tabula: `lrb_042_fi_supersession_table` JSON artefaktā `A1-LRB-CONFLICT-CLASSIFICATION.json` (206 leaf ieraksti ar agrāko batch iesaisti).

## Proof

`A1-LRB-LEAF-NORMALIZATION-PROOF.json` — pre-owner SHA, patch, post_owner, leaf SHA (301 paraugi).

- Konflikta atslēga: `target_language + canonical_card_object_id + exact_leaf_field_path`
- Nav veikta konsolidācijas merge/apply vai jauni Gala PASS.

