# B1 ET-DE translation — work in progress (NOT part of the final deliverable)

This directory is a temporary staging area for the B1 study-card translation
work described in the task. It is **not** part of the shipped app and will be
**deleted** once `data/et/b1.js` is fully complete and published.

## Contents

- `b1-study-cards.json` — all 324 original LV B1 study cards, extracted from `data/b1.js` (read-only source, untouched).
- `b1-simple-map.json` — LV→ET dictionary for the 3043 non-study B1 entries (already 100% complete and validated).
- `b1-study-progress.json` — accumulator of fully-translated study cards, keyed by `study.id`. Updated after every batch of 40 cards.
- `build-b1-study-batch.js` — reusable builder that assembles a full translated study object (explanation, examples, comparison, tip, important, sectionAccents) from a compact per-card translation object.

## Status

Batches completed: 190 / 324 study cards (58.6%).

## Process

Each batch translates 40 study cards completely (explanation, examples,
comparison, tip, important, sectionAccents), validates zero leftover Latvian
text and zero German-content drift, then appends the results to
`b1-study-progress.json` and commits to this branch.

Once all 324 cards are present in `b1-study-progress.json`, the final step
merges the 3043 already-translated simple entries with the 324 translated
study cards (preserving original order and IDs), writes `data/et/b1.js`,
runs full validation, and this `.b1-wip/` directory is deleted before the
branch is finalized.
