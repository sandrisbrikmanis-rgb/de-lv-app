# G2/A1 all remaining OWNER review — final

`CLASSIFICATION = G2_A1_OWNER_REVIEW_COMPLETED_WITH_OWNER_ESCALATIONS`

## Result

- Coverage: 22,650/22,650 stable IDs and 232/232 batches (`BATCH-002…233`).
- `DECIDED`: 14,913 — `LABOT` 1,476 and `NELABOT` 13,437.
- `PENDING`: 7,737 — each has a concrete `OWNER_REVIEW_REQUIRED` note and no decision/new value.
- Exact corrections: every `LABOT` row has a non-empty, changed `owner_new`; no `NELABOT` row has `owner_new`.
- BATCH-001 remains outside this file: 100 prior `NELABOT`; 29 deferred target-language backlog entries remain preserved.

## Remaining escalations

| Mapping state | Count |
|---|---:|
| `EXPLICIT_FIELD_ALIAS` | 3,198 |
| `EXACT_FIELD` | 2,240 |
| `COMPOSITE_SCOPE_CAPTURED` | 1,939 |
| `CONFIRMED_FIELD_ABSENT` | 360 |

Largest unresolved language groups: `lb` 709, `is` 706, `fi` 668, `hr` 657, `nn` 637, and `nb` 558. The main blockers are exact native-language rewrites for contaminated values, composite scopes that cannot accept one scalar correction, and fields absent from the production schema.

## Integrity

- Second-pass coverage: 13512/13512; missing updates 0.
- Duplicate stable IDs: 0.
- OWNER notes populated: 22650/22,650.
- Production/LV/DE/Crowdin diff: 0/0/0/0.
- New real Luna calls: 0.
- Repaired input hash: `0d3b8fbb1aeed3a694c2301194d950a1034b91f2f376aca7a6a9b6f46588c1bb`.
- Final CSV SHA-256: `37fbe192699bfe2bc5738eaaf3622481ac2ed1335f995032666d2ba8033c25d0`.

`NEXT_STEP = INGEST_DECIDED_ROWS_AND_PRESERVE_7737_OWNER_ESCALATIONS`
