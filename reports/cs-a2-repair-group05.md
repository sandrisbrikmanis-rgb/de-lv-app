# CS–DE A2 Repair Group 05

COPY-ONLY repair from `scripts/cs-a2-repair-group05-spec.json`.

## Summary

| Metric | Value |
|---|---|
| requested | 50 |
| processed | 50/50 |
| APPLIED | 50 |
| ALREADY_CORRECT | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| DE_MISMATCH_BLOCKED | 0 |

## Changed cards

a2-Erdgeschoss-417, a2-erfahren, a2-erinnern, a2-erkennen-423, a2-erklären-424, a2-erlauben-425, a2-ernst-427, a2-erreichen-428, a2-erwärmen-431, a2-erzählen-433, a2-etwa, a2-Europäer-441, a2-Fabrik-443, a2-fach, a2-Fahrer-449, a2-Fahrt-452, a2-fall, a2-fallen-456, a2-fangen-460, a2-färben-461, a2-Farm-463, a2-fegen-466, a2-fehlen, a2-Feier-468, a2-feiern-470, a2-Feiertag-471, a2-Fell-475, a2-fertig / bereit-479, a2-fest, a2-feuer, a2-Fichte-487, a2-Figur-489, a2-fischen-492, a2-Fliege-499, a2-Flugplatz-504, a2-Flur-505, a2-föhnen-507, a2-folgen, a2-formen-511, a2-frieren-527, a2-frisieren-529, a2-fröhlich-532, a2-führen, a2-Füllfederhalter-541, a2-funktionieren-542, a2-furchtbar-543, a2-Fußballspieler-545, a2-Fußboden-546, a2-Fußgänger-547, a2-gang

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 42 |
| LV remnants (repaired cards) | 16 |
| regression findings documented | 58 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-erfahren | Dostali |
| a2-etwa | Pak |
| a2-fach | Oddělení, Specialita, priekšmets, skapja |
| a2-fall | Pouzdro, Situaci, Gramatické, Podzim, tiesas lieta, dativu, lieta |
| a2-fehlen | tebou, Touha |
| a2-fest | stálý |
| a2-feuer | Oheň, Otevřený, uguns, liesma |
| a2-folgen | Postupujte |
| a2-führen | novest pie, sarunu |

## LV remnants (documented, not auto-fixed)

- a2-fach `study.accents.blue[16]`: LV_DIACRITIC
- a2-fach `study.accents.blue[17]`: LV_DIACRITIC
- a2-fach `study.accents.orange[0]`: LV_DIACRITIC
- a2-fach `study.accents.purple[0]`: LV_DIACRITIC, LV_WORD
- a2-fach `study.accents.purple[1]`: LV_DIACRITIC, LV_WORD
- a2-fach `study.accents.purple[2]`: LV_DIACRITIC
- a2-fach `study.accents.purple[3]`: LV_DIACRITIC
- a2-fach `study.accents.purple[4]`: LV_DIACRITIC, LV_WORD
- a2-führen `study.sectionAccents.comparison[0].meaning.purple[3]`: LV_WORD
- a2-führen `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_WORD
- a2-führen `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_WORD
- a2-führen `study.accents.blue[16]`: LV_WORD
- a2-führen `study.accents.green[1]`: LV_WORD
- a2-führen `study.accents.orange[2]`: LV_WORD
- a2-führen `study.accents.orange[3]`: LV_WORD
- a2-führen `study.accents.purple[2]`: LV_WORD

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 201 | a2-Erdgeschoss-417 | 417 | APPLIED |
| 202 | a2-erfahren | 418 | APPLIED |
| 203 | a2-erinnern | 420 | APPLIED |
| 204 | a2-erkennen-423 | 423 | APPLIED |
| 205 | a2-erklären-424 | 424 | APPLIED |
| 206 | a2-erlauben-425 | 425 | APPLIED |
| 207 | a2-ernst-427 | 427 | APPLIED |
| 208 | a2-erreichen-428 | 428 | APPLIED |
| 209 | a2-erwärmen-431 | 431 | APPLIED |
| 210 | a2-erzählen-433 | 433 | APPLIED |
| 211 | a2-etwa | 439 | APPLIED |
| 212 | a2-Europäer-441 | 441 | APPLIED |
| 213 | a2-Fabrik-443 | 443 | APPLIED |
| 214 | a2-fach | 444 | APPLIED |
| 215 | a2-Fahrer-449 | 449 | APPLIED |
| 216 | a2-Fahrt-452 | 452 | APPLIED |
| 217 | a2-fall | 455 | APPLIED |
| 218 | a2-fallen-456 | 456 | APPLIED |
| 219 | a2-fangen-460 | 460 | APPLIED |
| 220 | a2-färben-461 | 461 | APPLIED |
| 221 | a2-Farm-463 | 463 | APPLIED |
| 222 | a2-fegen-466 | 466 | APPLIED |
| 223 | a2-fehlen | 467 | APPLIED |
| 224 | a2-Feier-468 | 468 | APPLIED |
| 225 | a2-feiern-470 | 470 | APPLIED |
| 226 | a2-Feiertag-471 | 471 | APPLIED |
| 227 | a2-Fell-475 | 475 | APPLIED |
| 228 | a2-fertig / bereit-479 | 479 | APPLIED |
| 229 | a2-fest | 481 | APPLIED |
| 230 | a2-feuer | 484 | APPLIED |
| 231 | a2-Fichte-487 | 487 | APPLIED |
| 232 | a2-Figur-489 | 489 | APPLIED |
| 233 | a2-fischen-492 | 492 | APPLIED |
| 234 | a2-Fliege-499 | 499 | APPLIED |
| 235 | a2-Flugplatz-504 | 504 | APPLIED |
| 236 | a2-Flur-505 | 505 | APPLIED |
| 237 | a2-föhnen-507 | 507 | APPLIED |
| 238 | a2-folgen | 508 | APPLIED |
| 239 | a2-formen-511 | 511 | APPLIED |
| 240 | a2-frieren-527 | 527 | APPLIED |
| 241 | a2-frisieren-529 | 529 | APPLIED |
| 242 | a2-fröhlich-532 | 532 | APPLIED |
| 243 | a2-führen | 539 | APPLIED |
| 244 | a2-Füllfederhalter-541 | 541 | APPLIED |
| 245 | a2-funktionieren-542 | 542 | APPLIED |
| 246 | a2-furchtbar-543 | 543 | APPLIED |
| 247 | a2-Fußballspieler-545 | 545 | APPLIED |
| 248 | a2-Fußboden-546 | 546 | APPLIED |
| 249 | a2-Fußgänger-547 | 547 | APPLIED |
| 250 | a2-gang | 551 | APPLIED |

## Branch

`cursor/cs-a2-repair-group05-6ea4`

_Generated: 2026-08-13T18:14:12.341Z_