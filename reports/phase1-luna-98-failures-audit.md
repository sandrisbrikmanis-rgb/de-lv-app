# Phase 1 Luna 98 Failures — Root-Cause Audit

RUN_ID: `phase1-2026-08-30T08-56-50-163Z-a8e1dec1`
DISCOVERY_BASELINE_SHA: `6cfb96105f7f741f6052d20ee1d1e342f198fda2`

## Summary

| Metric | Count |
|---|---:|
| ATTEMPTED | 318 |
| SUCCEEDED | 220 |
| FAILED | 98 |
| RESUMABLE | 98 |
| NON_RESUMABLE | 0 |
| WALL_CLOCK_FAILURES | 90 |
| DUPLICATE_ID_FAILURES | 8 |

## Root causes

### BATCH_WALL_CLOCK_EXCEEDED (90)

Scope-level batchStart accumulated wall-clock across all batches; later batches falsely exceeded 10m limit. Fixed: per-batch batchWallStart reset.

### duplicate id: Gehalt (8)

entryId(card)=card.de collided for das/der Gehalt at indices 1027/1028 in g2/b1. Fixed: canonical Luna request id includes scope+index+raw id.

## Per-scope failures

| scope | error | batches saved | failed batch | objects in failed batch | prior saved | resumable |
|---|---|---:|---:|---:|---|---|
| g2/a2/bg | BATCH_WALL_CLOCK_EXCEEDED | 33/66 | 33 | 25 | yes | yes |
| g2/a2/bs | BATCH_WALL_CLOCK_EXCEEDED | 36/66 | 36 | 25 | yes | yes |
| g2/a2/cs | BATCH_WALL_CLOCK_EXCEEDED | 46/66 | 46 | 25 | yes | yes |
| g2/a2/da | BATCH_WALL_CLOCK_EXCEEDED | 31/66 | 31 | 25 | yes | yes |
| g2/a2/en | BATCH_WALL_CLOCK_EXCEEDED | 34/66 | 34 | 25 | yes | yes |
| g2/a2/es | BATCH_WALL_CLOCK_EXCEEDED | 36/66 | 36 | 25 | yes | yes |
| g2/a2/et | BATCH_WALL_CLOCK_EXCEEDED | 38/66 | 38 | 25 | yes | yes |
| g2/a2/fi | BATCH_WALL_CLOCK_EXCEEDED | 36/66 | 36 | 25 | yes | yes |
| g2/a2/fr | BATCH_WALL_CLOCK_EXCEEDED | 18/66 | 18 | 25 | yes | yes |
| g2/a2/gr | BATCH_WALL_CLOCK_EXCEEDED | 32/66 | 32 | 25 | yes | yes |
| g2/a2/hr | BATCH_WALL_CLOCK_EXCEEDED | 30/66 | 30 | 25 | yes | yes |
| g2/a2/hu | BATCH_WALL_CLOCK_EXCEEDED | 30/66 | 30 | 25 | yes | yes |
| g2/a2/is | BATCH_WALL_CLOCK_EXCEEDED | 28/66 | 28 | 25 | yes | yes |
| g2/a2/it | BATCH_WALL_CLOCK_EXCEEDED | 34/66 | 34 | 25 | yes | yes |
| g2/a2/lb | BATCH_WALL_CLOCK_EXCEEDED | 45/66 | 45 | 25 | yes | yes |
| g2/a2/lt | BATCH_WALL_CLOCK_EXCEEDED | 30/66 | 30 | 25 | yes | yes |
| g2/a2/lv | BATCH_WALL_CLOCK_EXCEEDED | 34/66 | 34 | 25 | yes | yes |
| g2/a2/mk | BATCH_WALL_CLOCK_EXCEEDED | 25/66 | 25 | 25 | yes | yes |
| g2/a2/nb | BATCH_WALL_CLOCK_EXCEEDED | 31/66 | 31 | 25 | yes | yes |
| g2/a2/nl | BATCH_WALL_CLOCK_EXCEEDED | 40/66 | 40 | 25 | yes | yes |
| g2/a2/nn | BATCH_WALL_CLOCK_EXCEEDED | 30/66 | 30 | 25 | yes | yes |
| g2/a2/pl | BATCH_WALL_CLOCK_EXCEEDED | 26/66 | 26 | 25 | yes | yes |
| g2/a2/pt | BATCH_WALL_CLOCK_EXCEEDED | 34/66 | 34 | 25 | yes | yes |
| g2/a2/ro | BATCH_WALL_CLOCK_EXCEEDED | 27/66 | 27 | 25 | yes | yes |
| g2/a2/ru | BATCH_WALL_CLOCK_EXCEEDED | 27/66 | 27 | 25 | yes | yes |
| g2/a2/sk | BATCH_WALL_CLOCK_EXCEEDED | 26/66 | 26 | 25 | yes | yes |
| g2/a2/sl | BATCH_WALL_CLOCK_EXCEEDED | 43/66 | 43 | 25 | yes | yes |
| g2/a2/sq | BATCH_WALL_CLOCK_EXCEEDED | 31/66 | 31 | 25 | yes | yes |
| g2/a2/sr | BATCH_WALL_CLOCK_EXCEEDED | 29/66 | 29 | 25 | yes | yes |
| g2/a2/sv | BATCH_WALL_CLOCK_EXCEEDED | 37/66 | 37 | 25 | yes | yes |
| g2/a2/tr | BATCH_WALL_CLOCK_EXCEEDED | 27/66 | 27 | 25 | yes | yes |
| g2/a2/uk | BATCH_WALL_CLOCK_EXCEEDED | 30/66 | 30 | 25 | yes | yes |
| g2/b1/bg | BATCH_WALL_CLOCK_EXCEEDED | 25/135 | 25 | 25 | yes | yes |
| g2/b1/bs | BATCH_WALL_CLOCK_EXCEEDED | 33/135 | 33 | 25 | yes | yes |
| g2/b1/cs | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/da | BATCH_WALL_CLOCK_EXCEEDED | 32/135 | 32 | 25 | yes | yes |
| g2/b1/en | BATCH_WALL_CLOCK_EXCEEDED | 39/135 | 39 | 25 | yes | yes |
| g2/b1/es | BATCH_WALL_CLOCK_EXCEEDED | 35/135 | 35 | 25 | yes | yes |
| g2/b1/et | BATCH_WALL_CLOCK_EXCEEDED | 38/135 | 38 | 25 | yes | yes |
| g2/b1/fi | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/fr | BATCH_WALL_CLOCK_EXCEEDED | 29/135 | 29 | 25 | yes | yes |
| g2/b1/gr | BATCH_WALL_CLOCK_EXCEEDED | 30/135 | 30 | 25 | yes | yes |
| g2/b1/hr | BATCH_WALL_CLOCK_EXCEEDED | 33/135 | 33 | 25 | yes | yes |
| g2/b1/hu | BATCH_WALL_CLOCK_EXCEEDED | 31/135 | 31 | 25 | yes | yes |
| g2/b1/is | BATCH_WALL_CLOCK_EXCEEDED | 35/135 | 35 | 25 | yes | yes |
| g2/b1/it | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/lb | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/lt | BATCH_WALL_CLOCK_EXCEEDED | 34/135 | 34 | 25 | yes | yes |
| g2/b1/lv | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/mk | BATCH_WALL_CLOCK_EXCEEDED | 28/135 | 28 | 25 | yes | yes |
| g2/b1/nb | BATCH_WALL_CLOCK_EXCEEDED | 32/135 | 32 | 25 | yes | yes |
| g2/b1/nl | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/nn | BATCH_WALL_CLOCK_EXCEEDED | 33/135 | 33 | 25 | yes | yes |
| g2/b1/pl | BATCH_WALL_CLOCK_EXCEEDED | 27/135 | 27 | 25 | yes | yes |
| g2/b1/pt | BATCH_WALL_CLOCK_EXCEEDED | 35/135 | 35 | 25 | yes | yes |
| g2/b1/ro | BATCH_WALL_CLOCK_EXCEEDED | 29/135 | 29 | 25 | yes | yes |
| g2/b1/ru | BATCH_WALL_CLOCK_EXCEEDED | 35/135 | 35 | 25 | yes | yes |
| g2/b1/sk | BATCH_WALL_CLOCK_EXCEEDED | 33/135 | 33 | 25 | yes | yes |
| g2/b1/sl | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/sq | BATCH_WALL_CLOCK_EXCEEDED | 36/135 | 36 | 25 | yes | yes |
| g2/b1/sr | BATCH_WALL_CLOCK_EXCEEDED | 32/135 | 32 | 25 | yes | yes |
| g2/b1/sv | Luna response duplicate id: Gehalt | 41/135 | 41 | 25 | yes | yes |
| g2/b1/tr | BATCH_WALL_CLOCK_EXCEEDED | 29/135 | 29 | 25 | yes | yes |
| g2/b1/uk | BATCH_WALL_CLOCK_EXCEEDED | 27/135 | 27 | 25 | yes | yes |
| g2/b2/bg | BATCH_WALL_CLOCK_EXCEEDED | 29/85 | 29 | 25 | yes | yes |
| g2/b2/bs | BATCH_WALL_CLOCK_EXCEEDED | 31/85 | 31 | 25 | yes | yes |
| g2/b2/cs | BATCH_WALL_CLOCK_EXCEEDED | 36/85 | 36 | 25 | yes | yes |
| g2/b2/da | BATCH_WALL_CLOCK_EXCEEDED | 30/85 | 30 | 25 | yes | yes |
| g2/b2/en | BATCH_WALL_CLOCK_EXCEEDED | 37/85 | 37 | 25 | yes | yes |
| g2/b2/es | BATCH_WALL_CLOCK_EXCEEDED | 36/85 | 36 | 25 | yes | yes |
| g2/b2/et | BATCH_WALL_CLOCK_EXCEEDED | 34/85 | 34 | 25 | yes | yes |
| g2/b2/fi | BATCH_WALL_CLOCK_EXCEEDED | 37/85 | 37 | 25 | yes | yes |
| g2/b2/fr | BATCH_WALL_CLOCK_EXCEEDED | 31/85 | 31 | 25 | yes | yes |
| g2/b2/gr | BATCH_WALL_CLOCK_EXCEEDED | 37/85 | 37 | 25 | yes | yes |
| g2/b2/hr | BATCH_WALL_CLOCK_EXCEEDED | 37/85 | 37 | 25 | yes | yes |
| g2/b2/hu | BATCH_WALL_CLOCK_EXCEEDED | 33/85 | 33 | 25 | yes | yes |
| g2/b2/is | BATCH_WALL_CLOCK_EXCEEDED | 35/85 | 35 | 25 | yes | yes |
| g2/b2/it | BATCH_WALL_CLOCK_EXCEEDED | 41/85 | 41 | 25 | yes | yes |
| g2/b2/lb | BATCH_WALL_CLOCK_EXCEEDED | 41/85 | 41 | 25 | yes | yes |
| g2/b2/lt | BATCH_WALL_CLOCK_EXCEEDED | 32/85 | 32 | 25 | yes | yes |
| g2/b2/lv | BATCH_WALL_CLOCK_EXCEEDED | 43/85 | 43 | 25 | yes | yes |
| g2/b2/mk | BATCH_WALL_CLOCK_EXCEEDED | 30/85 | 30 | 25 | yes | yes |
| g2/b2/nb | BATCH_WALL_CLOCK_EXCEEDED | 35/85 | 35 | 25 | yes | yes |
| g2/b2/nl | BATCH_WALL_CLOCK_EXCEEDED | 37/85 | 37 | 25 | yes | yes |
| g2/b2/nn | BATCH_WALL_CLOCK_EXCEEDED | 33/85 | 33 | 25 | yes | yes |
| g2/b2/pl | BATCH_WALL_CLOCK_EXCEEDED | 27/85 | 27 | 25 | yes | yes |
| g2/b2/pt | BATCH_WALL_CLOCK_EXCEEDED | 31/85 | 31 | 25 | yes | yes |
| g2/b2/ro | BATCH_WALL_CLOCK_EXCEEDED | 26/85 | 26 | 25 | yes | yes |
| g2/b2/ru | BATCH_WALL_CLOCK_EXCEEDED | 29/85 | 29 | 25 | yes | yes |
| g2/b2/sk | BATCH_WALL_CLOCK_EXCEEDED | 28/85 | 28 | 25 | yes | yes |
| g2/b2/sl | BATCH_WALL_CLOCK_EXCEEDED | 37/85 | 37 | 25 | yes | yes |
| g2/b2/sq | BATCH_WALL_CLOCK_EXCEEDED | 32/85 | 32 | 25 | yes | yes |
| g2/b2/sr | BATCH_WALL_CLOCK_EXCEEDED | 29/85 | 29 | 25 | yes | yes |
| g2/b2/sv | BATCH_WALL_CLOCK_EXCEEDED | 38/85 | 38 | 25 | yes | yes |
| g2/b2/tr | BATCH_WALL_CLOCK_EXCEEDED | 27/85 | 27 | 25 | yes | yes |
| g2/b2/uk | BATCH_WALL_CLOCK_EXCEEDED | 25/85 | 25 | 25 | yes | yes |
| g1/sentences/bg | BATCH_WALL_CLOCK_EXCEEDED | 26/32 | 26 | 25 | yes | yes |
| g1/sentences/fr | BATCH_WALL_CLOCK_EXCEEDED | 27/32 | 27 | 25 | yes | yes |
