# A1 LRB target conflict classification

Generated: 2026-09-16T18:02:09.579Z

## Final classification

**`A1_LRB_TARGET_CONFLICT_CLASSIFICATION_BLOCKED`**

```text
NEXT_ACTION: OWNER_RESOLVE_EXACT_LIST
```

## Metrics

| Metrika | Skaits |
|---|---:|
| Kopējie atkārtotie gala mērķi | 723 |
| IDENTICAL_FINAL_VALUE | 248 |
| PROVEN_SEQUENTIAL_SUPERSESSION | 38 |
| CORRECTION_HISTORY_ONLY | 0 |
| CANONICAL_ALIAS_DUPLICATE | 0 |
| INDEPENDENT_OWNER_CONFLICT | 437 |
| INSUFFICIENT_DECISION_SOURCE | 0 |
| Aptvertie LRB | 103/103 |
| Avoti ar pārbaudītu SHA | 103 |
| Neatrisinātie konflikti | 437 |

## Notes

- Gala mērķa atslēga: `target_language + canonical_card_object_id + canonical_field_path` (segmentu normalizācija no `g2-a1-audit-key-resolver` LEGACY_SEGMENT_ALIASES).
- LRB-093…103: lēmumi no `owner-approved-overrides` / `gala-cards` + `input.csv`, ja nav `*-decisions.csv`.
- Inventāra `GALA_TARGET_CONFLICT` pāru skaits (tikai CSV, nekanoniska atslēga): 475.
- Šajā uzdevumā nav veikta konsolidācijas zara izveide, merge vai apply.

