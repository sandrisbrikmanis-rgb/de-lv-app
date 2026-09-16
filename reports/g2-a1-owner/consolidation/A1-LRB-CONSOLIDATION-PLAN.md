# A1 LRB consolidation plan (inventory only)

Generated: 2026-09-16T17:45:41.422Z

## Stream heads (GitHub)

| Stream | Range | Cumulative branch | HEAD SHA |
|--------|-------|-------------------|----------|
| PC1 | LRB-001…032 | `cursor/lrb-032-owner-authorization-6530` | `ce559ac31478e7738a6c9a8b95a3c9c478575f0d` |
| PC2 (aa66) | LRB-033…072 | `cursor/lrb-072-owner-authorization-aa66` | `03937a5149ac020ed24968f2e5d5438c85112a4f` |
| PC2 (ed35) | LRB-073…103 | `cursor/lrb-103-owner-review-pc2` | `26c4acec768b05cd3348fa4bd14e865574c4cfa1` |

`origin/main`: `f36014e0d77a9a43740b3ad114ab845a64e11ebf`

### Merge-base / topology

- PC1 → PC2 aa66: **stacked** (`032-6530` ancestor of `072-aa66`); merge-base = `ce559ac31478e7738a6c9a8b95a3c9c478575f0d`
- PC2 aa66 → PC2 ed35: **not stacked**; merge-base = `f36014e0d77a9a43740b3ad114ab845a64e11ebf` (= `origin/main`)
- LRB-032 (PC1/6530) → LRB-033 (PC2/aa66): sequential. LRB-072 (aa66) vs LRB-073 (ed35): parallel from origin/main (not git-stacked).

## Inventory classification

**`A1_LRB_CONSOLIDATION_INVENTORY_BLOCKED`**

## Recommended integration order (no execution in this phase)

1. Freeze-read PC1 cumulative head `cursor/lrb-032-owner-authorization-6530` (`ce559ac31478e7738a6c9a8b95a3c9c478575f0d`).
2. Rebase/cherry-pick stack onto consolidation branch following per-batch tips `LRB-001…032` (bdda/6530) — verify each `*-decisions.csv` + gala evidence.
3. Apply PC2 aa66 segment `LRB-033…072` from `cursor/lrb-072-owner-authorization-aa66` (`03937a5149ac020ed24968f2e5d5438c85112a4f`) — sequential on top of PC1.
4. Integrate PC2 ed35 segment `LRB-073…103` from per-batch `ed35` tips (073–092) plus `cursor/lrb-103-owner-review-pc2` for LRB-103 — **requires new git stack** bridging `072-aa66` and `073-ed35` (currently parallel from main).
5. Run consolidated anti-bulk + residual gates before any ingest/apply.

## Blockers summary

- Missing batch branches: LRB-093, LRB-094, LRB-095, LRB-096, LRB-097, LRB-098, LRB-099, LRB-100, LRB-101, LRB-102
- Batches with blockers: 15
- Field-target divergences (cross-batch): undefined
- Missing `*-linguistic-gala-pass-proof.json` (legacy batches use owner-auth proof): 93 batches

## Next action

```text
NEXT_ACTION: RESOLVE_LISTED_BLOCKERS
```

