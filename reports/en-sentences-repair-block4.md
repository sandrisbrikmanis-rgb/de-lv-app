# EN–DE Teikumi — OWNER Repair Block 4/5

**Luna findings #151–200** — 47 mechanical replacements, 3 NELABOT unchanged.

## Rezultāts

| Metrika | Skaits |
| --- | ---: |
| Reviewed findings | 50/50 |
| LABOT applied | 47/47 |
| NELABOT unchanged | 3/3 |
| Unexpected production changes | 0 |
| DE changes | 0 |
| LV source changes | 0 |

## NELABOT (unchanged)

| cardId | Pašreizējais EN |
| --- | --- |
| `satze-471` | Free entry. |
| `satze-483` | Would you please be so kind? |
| `satze-626` | How much is the room per night? |

## SOURCE_LV_ISSUE (dokumentēts, LV nemainīts)

| cardId | DE | LV source | EN labojums |
| --- | --- | --- | --- |
| `satze-556` | Es ist sehr warm. | Ir ļoti karsti. | It is very hot. → **It is very warm.** |
| `satze-559` | Das Gewitter zieht vorüber. | Negaiss ir garām pagājis. | The storm has passed. → **The storm is passing.** |
| `satze-562` | Der Winter ist da, es hat geschneit. | Ziema ir klāt, naktī sniga. | Winter is here, it snowed at night. → **Winter is here. It has snowed.** |

## Special exact checks

| cardId | Expected | Status |
| --- | --- | --- |
| `satze-562` | Winter is here. It has snowed. | PASS |
| `satze-614` | There's a draught, please close the window! | PASS |
| `satze-569` | It is half past six. | PASS |
| `satze-599` | The train leaves at half past six. | PASS |
| `satze-497` | Zero-width spaces removed | PASS |

Semicolons: **0**

## Kumulatīvs OWNER statuss

| Bloks | Reviewed | Changed | NELABOT |
| --- | ---: | ---: | ---: |
| Block 1 | 50 | 44 | 6 |
| Block 2 | 50 | 45 | 5 |
| Block 3 | 50 | 50 | 0 |
| Block 4 | 50 | 47 | 3 |
| **Kopā** | **200/248** | **186** | **14** |

SOURCE_LV_ISSUE kumulatīvi: 6

## Artefakti

- `reports/temp/en-sentences-repair-block4-log.json`
- `reports/temp/apply-en-sentences-block4-repair.js`
