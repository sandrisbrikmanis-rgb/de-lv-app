# EN–DE Teikumi — OWNER Repair Block 2/5

**Luna findings #51–100** — Mechanical OWNER mapping. 45 replacements, 5 NELABOT unchanged.

## Rezultāts

| Metrika | Skaits |
| --- | ---: |
| Reviewed findings | 50/50 |
| LABOT applied | 45/45 |
| NELABOT unchanged | 5/5 |
| Unexpected production changes | 0 |
| DE changes | 0 |
| LV source changes | 0 |

## NELABOT (unchanged)

| cardId | Piezīme |
| --- | --- |
| `satze-212` | Malformed Luna finding (empty fields) |
| `satze-216` | I have a request for you. |
| `satze-217` | Blow the trumpet. |
| `satze-263` | Keep it up! |
| `satze-264` | He doesn't like... |

## SOURCE_LV_ISSUE (dokumentēts, LV nemainīts)

| cardId | DE | LV source | EN BEFORE → AFTER |
| --- | --- | --- | --- |
| `satze-242` | von Haus aus | kopš bērnības • no pašiem sākumiem | Since childhood • From the very beginning → **By nature. • Originally.** |

LV `data/sentences.js` **nav mainīts** — tikai EN labots pēc DE source.

## Verifikācija

| Pārbaude | Rezultāts |
| --- | --- |
| BEFORE match (pre-apply) | PASS — 0 mismatches |
| 45/45 replacements exact | PASS |
| 5/5 NELABOT unchanged | PASS |
| satze-242 EN changed | PASS |
| satze-242 LV unchanged | PASS |
| DE READ-ONLY | PASS |
| Syntax | PASS |
| Mirror data = www | PASS |
| Semicolons | 0 |

## Kumulatīvs OWNER statuss

| Bloks | Reviewed | Changed | NELABOT |
| --- | ---: | ---: | ---: |
| Block 1 | 50 | 44 | 6 |
| Block 2 | 50 | 45 | 5 |
| **Kumulatīvi** | **100/248** | **89** | **11** |

SOURCE_LV_ISSUE atklāts: 1 (`satze-242`)

## Artefakti

- `reports/temp/en-sentences-repair-block2-log.json`
- `reports/temp/apply-en-sentences-block2-repair.js`

**Piezīme:** Šis bloks bāzēts uz Block 1 (`cursor/en-sentences-repair-block1-6850`).
