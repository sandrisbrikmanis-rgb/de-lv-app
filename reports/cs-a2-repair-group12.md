# CS–DE A2 Repair Group 12

COPY-ONLY repair from `scripts/cs-a2-repair-group12-spec.json`.

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

a2-trocken-1472, a2-trocknen-1473, a2-Trommel-1474, a2-Tüte-1481, a2-überraschen-1485, a2-Überschrift-1486, a2-übrig, a2-übung, a2-Ufer-1490, a2-umsonst, a2-umsteigen-1493, a2-umziehen-1495, a2-Untertasse-1507, a2-urlaub-study, a2-verbinden, a2-verbringen-1513, a2-verdienen-1514, a2-verkehr, a2-Verkehrsmittel-1519, a2-verlangen, a2-verlassen-1521, a2-verpassen-1522, a2-verschieden-1524, a2-verschwinden-1525, a2-verstecken-1527, a2-viertel, a2-vorbei-1535, a2-vorlesen-1539, a2-vorn, a2-vorstellen, a2-wach-1548, a2-wagen, a2-wählen, a2-wahr-1552, a2-während, a2-wahrscheinlich, a2-wandern-1556, a2-Ware-1557, a2-Waschbecken-1560, a2-Wäsche-1561, a2-wechseln, a2-wecken-1565, a2-Weg-1567, a2-weh-1570, a2-wehtun-1571, a2-weich gekocht-1573, a2-Weintraube-1574, a2-Weise-1575, a2-weit, a2-weiter-1578

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
| LV remnants (repaired cards) | 199 |
| regression findings documented | 234 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-übrig | Zůstaň, Váhy |
| a2-übung | Vyplňte, vingrinājums, vingrināties, treniņš |
| a2-umsonst | veltīgi, par velti, gaidu, kurss, velti |
| a2-urlaub-study | der Urlabe |
| a2-verbinden | nástěnné, Síto |
| a2-verkehr | Hromadnou, Hnutí |
| a2-viertel | Čtvrtletí, Strana |
| a2-vorstellen | Stát |
| a2-während | Pokud |
| a2-wahrscheinlich | asi |
| a2-wechseln | Přesun |

## LV remnants (documented, not auto-fixed)

- a2-übrig `study.important.example`: LV_DIACRITIC
- a2-übrig `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-übrig `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-übrig `study.sectionAccents.important[0].text.red[1]`: LV_DIACRITIC
- a2-übrig `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-übrig `study.accents.purple[1]`: LV_DIACRITIC
- a2-übrig `study.accents.purple[4]`: LV_DIACRITIC
- a2-übrig `study.accents.purple[5]`: LV_DIACRITIC
- a2-übung `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC, LV_WORD
- a2-übung `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC, LV_WORD
- a2-übung `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-übung `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-übung `study.accents.purple[0]`: LV_DIACRITIC, LV_WORD
- a2-übung `study.accents.purple[2]`: LV_DIACRITIC, LV_WORD
- a2-umsonst `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-umsonst `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-umsonst `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-umsonst `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[1]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[4]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[5]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[6]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[7]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[8]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[10]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[12]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[13]`: LV_DIACRITIC
- a2-umsonst `study.accents.blue[16]`: LV_DIACRITIC
- a2-umsonst `study.accents.green[1]`: LV_DIACRITIC
- a2-umsonst `study.accents.purple[0]`: LV_DIACRITIC
- a2-umsonst `study.accents.purple[1]`: LV_DIACRITIC
- a2-umsonst `study.accents.purple[3]`: LV_DIACRITIC
- a2-verbinden `study.important.example`: LV_DIACRITIC
- a2-verbinden `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-verbinden `study.sectionAccents.tip.leftBlocks[0].text.purple[1]`: LV_DIACRITIC
- a2-verbinden `study.sectionAccents.tip.leftBlocks[1].text.red[0]`: LV_DIACRITIC
- a2-verbinden `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-verbinden `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-verbinden `study.sectionAccents.important[0].example.purple[3]`: LV_DIACRITIC
- a2-verbinden `study.accents.purple[1]`: LV_DIACRITIC
- a2-verbinden `study.accents.purple[3]`: LV_DIACRITIC
- a2-verkehr `study.important.example`: LV_DIACRITIC
- a2-verkehr `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-verkehr `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-verkehr `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-verkehr `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-verkehr `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-verkehr `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-verkehr `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[1]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[6]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[7]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[8]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[9]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[10]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[14]`: LV_DIACRITIC
- a2-verkehr `study.accents.blue[16]`: LV_DIACRITIC
- a2-verkehr `study.accents.green[2]`: LV_DIACRITIC
- a2-verkehr `study.accents.purple[0]`: LV_DIACRITIC
- a2-verkehr `study.accents.purple[1]`: LV_DIACRITIC
- a2-verkehr `study.accents.purple[2]`: LV_DIACRITIC
- a2-verkehr `study.accents.purple[4]`: LV_DIACRITIC
- a2-viertel `study.important.example`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-viertel `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-viertel `study.accents.blue[4]`: LV_DIACRITIC
- a2-viertel `study.accents.blue[5]`: LV_DIACRITIC
- a2-viertel `study.accents.blue[7]`: LV_DIACRITIC
- a2-viertel `study.accents.blue[8]`: LV_DIACRITIC
- a2-viertel `study.accents.blue[9]`: LV_DIACRITIC
- a2-viertel `study.accents.blue[10]`: LV_DIACRITIC
- a2-viertel `study.accents.blue[11]`: LV_DIACRITIC
- a2-viertel `study.accents.yellow[1]`: LV_DIACRITIC
- a2-viertel `study.accents.orange[0]`: LV_DIACRITIC
- a2-viertel `study.accents.orange[1]`: LV_DIACRITIC
- a2-viertel `study.accents.purple[0]`: LV_DIACRITIC
- a2-viertel `study.accents.purple[1]`: LV_DIACRITIC
- a2-viertel `study.accents.purple[2]`: LV_DIACRITIC
- a2-viertel `study.accents.purple[3]`: LV_DIACRITIC
- a2-viertel `study.accents.purple[6]`: LV_DIACRITIC
- a2-vorn `study.note`: LV_DIACRITIC
- a2-vorstellen `study.important.example`: LV_DIACRITIC
- a2-vorstellen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-vorstellen `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-vorstellen `study.sectionAccents.tip.leftBlocks[0].text.yellow[3]`: LV_DIACRITIC
- a2-vorstellen `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-vorstellen `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-vorstellen `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[1]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[2]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[4]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[5]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[6]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[7]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[8]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[9]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[12]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[13]`: LV_DIACRITIC
- a2-vorstellen `study.accents.blue[14]`: LV_DIACRITIC
- a2-vorstellen `study.accents.green[1]`: LV_DIACRITIC
- a2-vorstellen `study.accents.green[2]`: LV_DIACRITIC
- a2-vorstellen `study.accents.green[3]`: LV_DIACRITIC
- a2-vorstellen `study.accents.yellow[0]`: LV_DIACRITIC
- a2-vorstellen `study.accents.orange[0]`: LV_DIACRITIC
- a2-vorstellen `study.accents.purple[0]`: LV_DIACRITIC
- a2-vorstellen `study.accents.purple[1]`: LV_DIACRITIC
- a2-vorstellen `study.accents.purple[2]`: LV_DIACRITIC
- a2-vorstellen `study.accents.purple[3]`: LV_DIACRITIC
- a2-vorstellen `study.accents.purple[5]`: LV_DIACRITIC
- a2-wagen `study.explanation`: PL_CHAR
- a2-wagen `study.comparison[1].meaning`: PL_CHAR
- a2-wagen `study.comparison[1].example`: PL_CHAR
- a2-wagen `study.sectionAccents.explanation.purple`: LV_DIACRITIC
- a2-wagen `study.sectionAccents.examples[0].lv.purple`: LV_DIACRITIC
- a2-wagen `study.sectionAccents.examples[1].lv.purple`: LV_DIACRITIC
- a2-wagen `study.sectionAccents.comparison[0].meaning.purple`: LV_DIACRITIC
- a2-wagen `study.sectionAccents.comparison[2].meaning.purple`: LV_DIACRITIC
- a2-wagen `study.sectionAccents.comparison[3].meaning.purple`: LV_DIACRITIC
- a2-wählen `study.important.example`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.important[0].text.orange[0]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.important[0].example.yellow[0]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.important[0].example.yellow[1]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-wählen `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[1]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[2]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[4]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[5]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[6]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[8]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[9]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[11]`: LV_DIACRITIC
- a2-wählen `study.accents.blue[16]`: LV_DIACRITIC
- a2-wählen `study.accents.yellow[0]`: LV_DIACRITIC
- a2-wählen `study.accents.yellow[2]`: LV_DIACRITIC
- a2-wählen `study.accents.orange[0]`: LV_DIACRITIC
- a2-wählen `study.accents.orange[1]`: LV_DIACRITIC
- a2-wählen `study.accents.purple[0]`: LV_DIACRITIC
- a2-wählen `study.accents.purple[1]`: LV_DIACRITIC
- a2-wählen `study.accents.purple[2]`: LV_DIACRITIC
- a2-während `study.important.example`: LV_DIACRITIC
- a2-während `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.tip.leftBlocks[0].text.yellow[3]`: LV_DIACRITIC
- a2-während `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-während `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-während `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-während `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-während `study.accents.blue[1]`: LV_DIACRITIC
- a2-während `study.accents.blue[2]`: LV_DIACRITIC
- a2-während `study.accents.blue[3]`: LV_DIACRITIC
- a2-während `study.accents.blue[4]`: LV_DIACRITIC
- a2-während `study.accents.blue[8]`: LV_DIACRITIC
- a2-während `study.accents.blue[9]`: LV_DIACRITIC
- a2-während `study.accents.blue[11]`: LV_DIACRITIC
- a2-während `study.accents.blue[12]`: LV_DIACRITIC
- a2-während `study.accents.blue[14]`: LV_DIACRITIC
- a2-während `study.accents.blue[16]`: LV_DIACRITIC, LV_WORD
- a2-während `study.accents.green[0]`: LV_DIACRITIC
- a2-während `study.accents.orange[0]`: LV_DIACRITIC
- a2-während `study.accents.orange[2]`: LV_DIACRITIC
- a2-während `study.accents.purple[0]`: LV_DIACRITIC
- a2-während `study.accents.purple[1]`: LV_DIACRITIC
- a2-während `study.accents.purple[2]`: LV_DIACRITIC
- a2-während `study.accents.purple[3]`: LV_DIACRITIC
- a2-wahrscheinlich `study.important.example`: LV_DIACRITIC
- a2-wahrscheinlich `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-wahrscheinlich `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-wahrscheinlich `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-wahrscheinlich `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-wahrscheinlich `study.accents.purple[2]`: LV_DIACRITIC
- a2-wechseln `study.important.example`: LV_DIACRITIC
- a2-wechseln `study.sectionAccents.examples[4].lv.green[0]`: LV_DIACRITIC
- a2-wechseln `study.sectionAccents.tip.leftBlocks[0].text.yellow[3]`: LV_DIACRITIC
- a2-wechseln `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-wechseln `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-wechseln `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-wechseln `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-wechseln `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-wechseln `study.accents.purple[0]`: LV_DIACRITIC
- a2-wechseln `study.accents.purple[1]`: LV_DIACRITIC
- a2-wechseln `study.accents.purple[2]`: LV_DIACRITIC
- a2-wechseln `study.accents.purple[3]`: LV_DIACRITIC
- a2-wechseln `study.accents.purple[4]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 551 | a2-trocken-1472 | 1472 | APPLIED |
| 552 | a2-trocknen-1473 | 1473 | APPLIED |
| 553 | a2-Trommel-1474 | 1474 | APPLIED |
| 554 | a2-Tüte-1481 | 1481 | APPLIED |
| 555 | a2-überraschen-1485 | 1485 | APPLIED |
| 556 | a2-Überschrift-1486 | 1486 | APPLIED |
| 557 | a2-übrig | 1488 | APPLIED |
| 558 | a2-übung | 1489 | APPLIED |
| 559 | a2-Ufer-1490 | 1490 | APPLIED |
| 560 | a2-umsonst | 1492 | APPLIED |
| 561 | a2-umsteigen-1493 | 1493 | APPLIED |
| 562 | a2-umziehen-1495 | 1495 | APPLIED |
| 563 | a2-Untertasse-1507 | 1507 | APPLIED |
| 564 | a2-urlaub-study | 1509 | APPLIED |
| 565 | a2-verbinden | 1511 | APPLIED |
| 566 | a2-verbringen-1513 | 1513 | APPLIED |
| 567 | a2-verdienen-1514 | 1514 | APPLIED |
| 568 | a2-verkehr | 1517 | APPLIED |
| 569 | a2-Verkehrsmittel-1519 | 1519 | APPLIED |
| 570 | a2-verlangen | 1520 | APPLIED |
| 571 | a2-verlassen-1521 | 1521 | APPLIED |
| 572 | a2-verpassen-1522 | 1522 | APPLIED |
| 573 | a2-verschieden-1524 | 1524 | APPLIED |
| 574 | a2-verschwinden-1525 | 1525 | APPLIED |
| 575 | a2-verstecken-1527 | 1527 | APPLIED |
| 576 | a2-viertel | 1529 | APPLIED |
| 577 | a2-vorbei-1535 | 1535 | APPLIED |
| 578 | a2-vorlesen-1539 | 1539 | APPLIED |
| 579 | a2-vorn | 1541 | APPLIED |
| 580 | a2-vorstellen | 1544 | APPLIED |
| 581 | a2-wach-1548 | 1548 | APPLIED |
| 582 | a2-wagen | 1550 | APPLIED |
| 583 | a2-wählen | 1551 | APPLIED |
| 584 | a2-wahr-1552 | 1552 | APPLIED |
| 585 | a2-während | 1553 | APPLIED |
| 586 | a2-wahrscheinlich | 1555 | APPLIED |
| 587 | a2-wandern-1556 | 1556 | APPLIED |
| 588 | a2-Ware-1557 | 1557 | APPLIED |
| 589 | a2-Waschbecken-1560 | 1560 | APPLIED |
| 590 | a2-Wäsche-1561 | 1561 | APPLIED |
| 591 | a2-wechseln | 1564 | APPLIED |
| 592 | a2-wecken-1565 | 1565 | APPLIED |
| 593 | a2-Weg-1567 | 1567 | APPLIED |
| 594 | a2-weh-1570 | 1570 | APPLIED |
| 595 | a2-wehtun-1571 | 1571 | APPLIED |
| 596 | a2-weich gekocht-1573 | 1573 | APPLIED |
| 597 | a2-Weintraube-1574 | 1574 | APPLIED |
| 598 | a2-Weise-1575 | 1575 | APPLIED |
| 599 | a2-weit | 1577 | APPLIED |
| 600 | a2-weiter-1578 | 1578 | APPLIED |

## Branch

`cursor/cs-a2-repair-group12-6ea4`

_Generated: 2026-08-13T19:22:03.275Z_