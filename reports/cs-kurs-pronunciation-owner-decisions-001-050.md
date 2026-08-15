# CS–DE Kurss Výslovnost — OWNER decisions 001–050

READ-ONLY documentation. **Production changes: 0**

## Summary

| Verdict | Count |
|---------|-------|
| LABOT (finding rows) | 48 |
| NELABOT | 1 (#049) |
| FALSE_POSITIVE | 1 (#033) |
| Deduplicated LABOT apply targets | **41** |

## OWNER overrides vs Luna

- **#012/#013:** OWNER wording for ch / Ach-Laut / Ich-Laut (not fake Czech transcription).
- **#018:** `lekce 2` not `přednášky 2` (CS Kurss UI terminology).
- **#021:** `samohláskových zvuků` (OWNER) vs Luna `prvků`.
- **#026:** LABOT `špígel` — Luna reason about `sch` not authoritative.
- **#032:** `Ihn (ín)` not Luna `īn`.
- **#033:** FALSE_POSITIVE — `(hūn)` already present.
- **#042:** `tato / tito / tyto` without Luna `toto`.
- **#049:** NELABOT — acceptable beginner wording.

## Duplicate targets (one apply per target)

| Primary finding | Duplicate rows | Target |
|-----------------|----------------|--------|
| 002 | 003 | `section[0]/example[1]` |
| 004 | 005 | `section[0]/example[2]` |
| 006 | 007 | `section[0]/example[4]` |
| 030 | 031 | `section[3]/example[3]` |
| 040 | 041 | `section[5]/example[0]` |
| 044 | 045 | `section[5]/example[5]` |
| 046 | 047 | `section[5]/example[6]` |

## Apply map

Partial JSON: `reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-001-050.json`
