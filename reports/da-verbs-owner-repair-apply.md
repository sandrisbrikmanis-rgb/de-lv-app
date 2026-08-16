# DA–DE Verbs — OWNER repair apply report

**Datums:** 2026-08-16  
**Metode:** COPY-ONLY pēc OWNER signed decisions (12/12 grupas)

## Avots

Visas grupas signed: `reports/da-verbs-owner-decisions-signed-group01..12.md`

## Apply rezultāts (kopā)

| Metrika | Vērtība |
|---------|--------:|
| Signed rows | **569/569** |
| LABOT rows | **561** |
| Unique `(verb, field)` apply | **497** |
| **Applied (kopā)** | **497** |
| Batch 1 (group01–06, 08–12) | 454 |
| Batch 2 (group07) | 43 |
| FALSE_POSITIVE (nav mainīts) | 4 |
| NELABOT (nav mainīts) | 2 |
| NEEDS_SOURCE_REVIEW (nav mainīts) | 2 |
| DE changes | **0** |
| Mirror | **PASS** |

## Group 07 (pēdējais apply)

| Metrika | Vērtība |
|---------|--------:|
| Findings | 301–350 (50) |
| LABOT | 49 |
| FALSE_POSITIVE | 1 (`DA-VERB-0349`) |
| Applied | **43** unique fields |

### OWNER piezīmes (group07)

- `DA-VERB-0320` (`schallen`): **At gjalde**
- `DA-VERB-0339`–`0343` (`scheren`): klippe/skære, nevis automātiski barbere sig
- `DA-VERB-0349` (`schlafen`): FALSE_POSITIVE — `At sove` jau pareizi

## Production

- `data/da/verbs.js` — **497** DA `.lv` lauki (kopā)
- `www/data/da/verbs.js` — mirror

**Nākamais sols:** targeted regression audit → closure
