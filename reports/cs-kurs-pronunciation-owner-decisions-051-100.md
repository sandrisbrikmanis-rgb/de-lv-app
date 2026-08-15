# CS–DE Kurss Výslovnost — OWNER decisions 051–100

READ-ONLY documentation. **Production changes: 0**

## Summary

| Verdict | Count |
|---------|-------|
| LABOT (finding rows) | 42 |
| NELABOT | 7 (#054, #055, #056, #065, #066, #067, #070) |
| FALSE_POSITIVE | 1 (#084) |
| Deduplicated LABOT apply targets (this batch) | **38** |

## OWNER overrides vs Luna

- **#054–056:** NELABOT — sekcijas tēma (monoftongi vs divskaņi), ne kartītes teksts.
- **#065–067, #070:** NELABOT — piemēri paliek; ö/ü skaidrojums #068/#072.
- **#080:** OWNER īsāks ch skaidrojums nekā Luna.
- **#081:** žák, ne student.
- **#084:** FALSE_POSITIVE — špīlen garuma zīme.
- **#098:** Felix (féliks).
- **#099–100:** müstik/müte — saglabāt ü vizuāli.

## Duplicate targets (one apply per target)

| Primary | Duplicate rows | Target |
|---------|----------------|--------|
| 050 | 051 | `kurssPronunciationLesson/section[6]/example[0]` (051 in batch 001–050 map) |
| 063 | 064 | `section[8]/example[1]` |
| 085 | 086 | `kurssConsonantsLesson/section[3]/example[1]` |
| 088 | 089 | `kurssConsonantsLesson/section[3]/example[3]` |

## Apply map

Partial JSON: `reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-051-100.json`

**DE = 0**, **LV MASTER = 0**.
