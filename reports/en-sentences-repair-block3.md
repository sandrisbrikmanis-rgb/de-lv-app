# EN–DE Teikumi — OWNER Repair Block 3/5

**Luna findings #101–150** — 50 mechanical replacements, 0 NELABOT.

## Rezultāts

| Metrika | Skaits |
| --- | ---: |
| Reviewed findings | 50/50 |
| LABOT applied | 50/50 |
| NELABOT unchanged | 0 |
| Unexpected production changes | 0 |
| DE changes | 0 |
| LV source changes | 0 |

## SOURCE_LV_ISSUE (dokumentēts, LV nemainīts)

| cardId | DE | LV source | EN BEFORE → AFTER |
| --- | --- | --- | --- |
| `satze-379` | Vor allem. | Pirmkārt. • Vispirms | First of all. • First of all → **Above all. • Especially.** |
| `satze-414` | Ohne weiteres. | Tūlīt. • Nekavējoties | Immediately. • Immediately → **Without further ado. • Without difficulty.** |

## Special check

`satze-444` final EN: **There's a draught.** ✓ (not Luna "It pulls.")

## Verifikācija

| Pārbaude | Rezultāts |
| --- | --- |
| BEFORE match (pre-apply) | PASS — 0 mismatches |
| 50/50 replacements exact | PASS |
| satze-379 / satze-414 LV unchanged | PASS |
| DE READ-ONLY | PASS |
| Syntax / mirror / semicolons | PASS |

## Kumulatīvs OWNER statuss

| Bloks | Reviewed | Changed | NELABOT |
| --- | ---: | ---: | ---: |
| Block 1 | 50 | 44 | 6 |
| Block 2 | 50 | 45 | 5 |
| Block 3 | 50 | 50 | 0 |
| **Kopā** | **150/248** | **139** | **11** |

SOURCE_LV_ISSUE kumulatīvi: 3 (`satze-242`, `satze-379`, `satze-414`)

## Artefakti

- `reports/temp/en-sentences-repair-block3-log.json`
- `reports/temp/apply-en-sentences-block3-repair.js`

**Piezīme:** Bāzēts uz blocks 1–2 (`cursor/en-sentences-repair-block2-6850`).
