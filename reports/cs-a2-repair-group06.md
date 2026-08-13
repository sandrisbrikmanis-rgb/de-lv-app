# CS–DE A2 Repair Group 06

COPY-ONLY repair from `scripts/cs-a2-repair-group06-spec.json`.

## Summary

| Metric | Value |
|---|---|
| requested | 50 |
| processed | 50/50 |
| APPLIED | 49 |
| ALREADY_CORRECT | 1 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| DE_MISMATCH_BLOCKED | 0 |

## Changed cards

a2-gar, a2-Gasse-558, a2-Gefühl-567, a2-Gegend-568, a2-gegenüber, a2-Geheimnis-571, a2-gehören, a2-gemeinsam-574, a2-genau, a2-gerade, a2-Gericht-581, a2-geschäft, a2-Geschmack-585, a2-Gesetz-587, a2-getrennt-590, a2-gewinnen, a2-gießen, a2-Glückwunsch-597, a2-gratis-602, a2-Grenze-604, a2-grund, a2-Gymnastik-613, a2-Haarschnitt-615, a2-Hackfleisch-617, a2-Hähnchen-621, a2-halt!-626, a2-hängen, a2-hart, a2-Hase-635, a2-Heim-648, a2-heizen-649, a2-her-652, a2-Herd-654, a2-herein-655, a2-herzlich-662, a2-hierher-664, a2-hin-667, a2-hinein-669, a2-hinfallen-671, a2-hinuntergehen-674, a2-holz, a2-Homepage-683, a2-Hosenbein-684, a2-Hosenträger-685, a2-Hundegebell-690, a2-Hunderasse-693, a2-hungern-695, a2-hüpfen-696, a2-indem

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 35 |
| LV remnants (repaired cards) | 81 |
| regression findings documented | 116 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-gehören | Fit |
| a2-gerade | Rovnou |
| a2-geschäft | Nakupovat |
| a2-gießen | Můžete, Nalijte, vody |
| a2-grund | Přízemí, iemesls, pamats, ezera dibens, problēmas, stingrs, dibens |
| a2-holz | Štípe, Koks, dzīvs koks, dzīvs, koks, Dzīvs |
| a2-indem | Učíte |

## LV remnants (documented, not auto-fixed)

- a2-gegenüber `study.sectionAccents.examples[5].lv.yellow[0]`: LV_DIACRITIC
- a2-gehören `study.important.example`: LV_DIACRITIC
- a2-gehören `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-gehören `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[2]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[3]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[4]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[5]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[8]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[10]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[11]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[13]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[14]`: LV_DIACRITIC
- a2-gehören `study.accents.blue[15]`: LV_DIACRITIC
- a2-gehören `study.accents.green[0]`: LV_DIACRITIC
- a2-gehören `study.accents.green[1]`: LV_DIACRITIC
- a2-gehören `study.accents.yellow[0]`: LV_DIACRITIC
- a2-gehören `study.accents.orange[0]`: LV_DIACRITIC
- a2-gehören `study.accents.orange[1]`: LV_DIACRITIC
- a2-gehören `study.accents.purple[0]`: LV_DIACRITIC
- a2-gehören `study.accents.purple[1]`: LV_DIACRITIC
- a2-gehören `study.accents.purple[2]`: LV_DIACRITIC
- a2-gehören `study.accents.purple[3]`: LV_DIACRITIC
- a2-gehören `study.accents.purple[4]`: LV_DIACRITIC
- a2-genau `study.important.example`: LV_DIACRITIC
- a2-genau `study.accents.green[0]`: LV_DIACRITIC
- a2-genau `study.accents.green[1]`: LV_DIACRITIC
- a2-genau `study.accents.green[2]`: LV_DIACRITIC
- a2-genau `study.accents.green[3]`: LV_DIACRITIC
- a2-genau `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-genau `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-geschäft `study.important.example`: LV_DIACRITIC
- a2-geschäft `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-geschäft `study.sectionAccents.important[0].text.yellow[0]`: LV_DIACRITIC
- a2-geschäft `study.sectionAccents.important[0].text.red[1]`: LV_DIACRITIC
- a2-geschäft `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-geschäft `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-geschäft `study.accents.blue[2]`: LV_DIACRITIC
- a2-geschäft `study.accents.blue[3]`: LV_DIACRITIC
- a2-geschäft `study.accents.blue[5]`: LV_DIACRITIC
- a2-geschäft `study.accents.blue[6]`: LV_DIACRITIC, LV_WORD
- a2-geschäft `study.accents.blue[7]`: LV_DIACRITIC
- a2-geschäft `study.accents.blue[9]`: LV_DIACRITIC
- a2-geschäft `study.accents.blue[10]`: LV_DIACRITIC
- a2-geschäft `study.accents.blue[12]`: LV_DIACRITIC
- a2-geschäft `study.accents.green[1]`: LV_DIACRITIC
- a2-geschäft `study.accents.yellow[1]`: LV_DIACRITIC, LV_WORD
- a2-geschäft `study.accents.purple[0]`: LV_DIACRITIC, LV_WORD
- a2-geschäft `study.accents.purple[1]`: LV_DIACRITIC, LV_WORD
- a2-geschäft `study.accents.purple[2]`: LV_DIACRITIC
- a2-geschäft `study.accents.purple[5]`: LV_DIACRITIC
- a2-grund `study.sectionAccents.tip.leftBlocks[0].text.yellow[3]`: LV_DIACRITIC
- a2-grund `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-grund `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-grund `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-grund `study.accents.blue[5]`: LV_DIACRITIC
- a2-grund `study.accents.blue[12]`: LV_DIACRITIC
- a2-grund `study.accents.blue[14]`: LV_DIACRITIC
- a2-grund `study.accents.blue[15]`: LV_DIACRITIC
- a2-grund `study.accents.green[4]`: LV_DIACRITIC
- a2-grund `study.accents.purple[4]`: LV_DIACRITIC
- a2-grund `study.accents.purple[6]`: LV_DIACRITIC
- a2-Gutschein-612 `lv`: PL_CHAR
- a2-holz `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-holz `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-holz `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-holz `study.sectionAccents.important[0].text.purple[0]`: LV_DIACRITIC
- a2-holz `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-holz `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-holz `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-holz `study.accents.blue[0]`: LV_DIACRITIC
- a2-holz `study.accents.blue[2]`: LV_DIACRITIC
- a2-holz `study.accents.blue[3]`: LV_DIACRITIC
- a2-holz `study.accents.blue[5]`: LV_DIACRITIC
- a2-holz `study.accents.blue[6]`: LV_DIACRITIC
- a2-holz `study.accents.blue[7]`: LV_DIACRITIC
- a2-holz `study.accents.green[0]`: LV_DIACRITIC
- a2-holz `study.accents.yellow[0]`: LV_DIACRITIC
- a2-holz `study.accents.purple[0]`: LV_DIACRITIC
- a2-holz `study.accents.purple[1]`: LV_DIACRITIC
- a2-holz `study.accents.purple[4]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 251 | a2-gar | 553 | APPLIED |
| 252 | a2-Gasse-558 | 558 | APPLIED |
| 253 | a2-Gefühl-567 | 567 | APPLIED |
| 254 | a2-Gegend-568 | 568 | APPLIED |
| 255 | a2-gegenüber | 570 | APPLIED |
| 256 | a2-Geheimnis-571 | 571 | APPLIED |
| 257 | a2-gehören | 572 | APPLIED |
| 258 | a2-gemeinsam-574 | 574 | APPLIED |
| 259 | a2-genau | 576 | APPLIED |
| 260 | a2-gerade | 580 | APPLIED |
| 261 | a2-Gericht-581 | 581 | APPLIED |
| 262 | a2-geschäft | 582 | APPLIED |
| 263 | a2-Geschmack-585 | 585 | APPLIED |
| 264 | a2-Gesetz-587 | 587 | APPLIED |
| 265 | a2-getrennt-590 | 590 | APPLIED |
| 266 | a2-gewinnen | 592 | APPLIED |
| 267 | a2-gießen | 595 | APPLIED |
| 268 | a2-Glückwunsch-597 | 597 | APPLIED |
| 269 | a2-gratis-602 | 602 | APPLIED |
| 270 | a2-Grenze-604 | 604 | APPLIED |
| 271 | a2-grund | 607 | APPLIED |
| 272 | a2-Gutschein-612 | 612 | ALREADY_CORRECT |
| 273 | a2-Gymnastik-613 | 613 | APPLIED |
| 274 | a2-Haarschnitt-615 | 615 | APPLIED |
| 275 | a2-Hackfleisch-617 | 617 | APPLIED |
| 276 | a2-Hähnchen-621 | 621 | APPLIED |
| 277 | a2-halt!-626 | 626 | APPLIED |
| 278 | a2-hängen | 632 | APPLIED |
| 279 | a2-hart | 634 | APPLIED |
| 280 | a2-Hase-635 | 635 | APPLIED |
| 281 | a2-Heim-648 | 648 | APPLIED |
| 282 | a2-heizen-649 | 649 | APPLIED |
| 283 | a2-her-652 | 652 | APPLIED |
| 284 | a2-Herd-654 | 654 | APPLIED |
| 285 | a2-herein-655 | 655 | APPLIED |
| 286 | a2-herzlich-662 | 662 | APPLIED |
| 287 | a2-hierher-664 | 664 | APPLIED |
| 288 | a2-hin-667 | 667 | APPLIED |
| 289 | a2-hinein-669 | 669 | APPLIED |
| 290 | a2-hinfallen-671 | 671 | APPLIED |
| 291 | a2-hinuntergehen-674 | 674 | APPLIED |
| 292 | a2-holz | 682 | APPLIED |
| 293 | a2-Homepage-683 | 683 | APPLIED |
| 294 | a2-Hosenbein-684 | 684 | APPLIED |
| 295 | a2-Hosenträger-685 | 685 | APPLIED |
| 296 | a2-Hundegebell-690 | 690 | APPLIED |
| 297 | a2-Hunderasse-693 | 693 | APPLIED |
| 298 | a2-hungern-695 | 695 | APPLIED |
| 299 | a2-hüpfen-696 | 696 | APPLIED |
| 300 | a2-indem | 703 | APPLIED |

## Branch

`cursor/cs-a2-repair-group06-6ea4`

_Generated: 2026-08-13T18:14:19.341Z_