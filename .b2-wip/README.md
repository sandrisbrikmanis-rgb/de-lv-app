# B2 ET-DE translation — work in progress (NOT part of the final deliverable)

This directory is a temporary staging area for the B2 study-card and
vocabulary translation work, following the exact same process used for B1.
It is **not** part of the shipped app and will be **deleted** once
`data/et/b2.js` is fully complete and published.

## Contents

- `b2-study-cards.json` — all 60 original LV B2 study cards, extracted from `data/b2.js` (read-only source, untouched).
- `b2-simple-map.json` — LV→ET dictionary for the 2058 non-study B2 entries (2025 unique LV keys). **Complete.**
- `b2-study-progress.json` — accumulator of fully-translated study cards, keyed by `study.id`. (to be created)
- `build-b2-study-batch.js` — reusable builder adapted from the B1 script.

## Status

- Simple vocabulary (2058 entries / 2025 unique LV keys): **100% complete.**
- Study cards (60 total: 45 `minimalStudy` + 15 `standardStudy`): in progress.

## Process

Same as B1: translate study cards batch by batch, validate zero leftover
Latvian text and zero German-content drift, then merge into
`b2-study-progress.json`. Once complete, merge with the simple map,
preserving original order and IDs, write `data/et/b2.js`, run full
validation, sync to `www/data/et/`, and delete this `.b2-wip/` directory.
