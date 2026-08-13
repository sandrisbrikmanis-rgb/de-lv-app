# CS–DE A2 Repair Group 13

COPY-ONLY repair from `scripts/cs-a2-repair-group13-spec.json`.

## Summary

| Metric | Value |
|---|---|
| requested | 29 |
| processed | 29/29 |
| APPLIED | 29 |
| ALREADY_CORRECT | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| DE_MISMATCH_BLOCKED | 0 |

## Changed cards

a2-Werbung-1579, a2-werfen-1580, a2-wert, a2-Westen-1585, a2-wiegen, a2-Wild-1592, a2-winken-1596, a2-ziehen, a2-Ziel-1600, a2-Zopf-1604, a2-zubereiten-1606, a2-zunächst-1613, a2-zunehmen, a2-zurzeit, a2-sehen, a2-schauen, a2-hoeren, a2-sagen, a2-sprechen, a2-gross, a2-klein, a2-leise, a2-schon, a2-noch, a2-erst, a2-nur, a2-ueber, a2-gleich, a2-auch

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 26 |
| LV remnants (repaired cards) | 88 |
| regression findings documented | 114 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-wert | Cena |
| a2-ziehen | zde, Pohybovat, Odtáhnout, Pustit, pārvācamies, Berlīni |
| a2-zunehmen | zvýšil, Ztenčit, Zvýšení |
| a2-leise | Klid |
| a2-erst | jich |

## LV remnants (documented, not auto-fixed)

- a2-wert `study.important.example`: LV_DIACRITIC
- a2-wert `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-wert `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-wert `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-wert `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-wert `study.accents.purple[0]`: LV_DIACRITIC
- a2-wert `study.accents.purple[1]`: LV_DIACRITIC
- a2-wert `study.accents.purple[2]`: LV_DIACRITIC
- a2-wiegen `study.comparison[4].meaning`: PL_CHAR
- a2-wiegen `study.sectionAccents.comparison[3].meaning.purple[0]`: LV_DIACRITIC
- a2-wiegen `study.sectionAccents.comparison[4].meaning.purple[1]`: PL_CHAR
- a2-wiegen `study.accents.purple[0]`: LV_DIACRITIC
- a2-wiegen `study.accents.purple[1]`: LV_DIACRITIC
- a2-wiegen `study.accents.purple[2]`: LV_DIACRITIC
- a2-ziehen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-ziehen `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-ziehen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-ziehen `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-ziehen `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[1]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[2]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[3]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[4]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[5]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[6]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[8]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[13]`: LV_DIACRITIC
- a2-ziehen `study.accents.blue[15]`: LV_DIACRITIC
- a2-ziehen `study.accents.green[0]`: LV_DIACRITIC
- a2-ziehen `study.accents.green[2]`: LV_DIACRITIC
- a2-ziehen `study.accents.yellow[0]`: LV_DIACRITIC
- a2-ziehen `study.accents.yellow[1]`: LV_DIACRITIC
- a2-ziehen `study.accents.orange[0]`: LV_DIACRITIC
- a2-ziehen `study.accents.orange[1]`: LV_DIACRITIC
- a2-ziehen `study.accents.purple[0]`: LV_DIACRITIC
- a2-ziehen `study.accents.purple[1]`: LV_DIACRITIC
- a2-ziehen `study.accents.purple[2]`: LV_DIACRITIC
- a2-ziehen `study.accents.purple[3]`: LV_DIACRITIC
- a2-ziehen `study.accents.purple[4]`: LV_DIACRITIC
- a2-ziehen `study.accents.purple[5]`: LV_DIACRITIC
- a2-zunehmen `study.important.example`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-zunehmen `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[0]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[2]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[3]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[5]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[7]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[8]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[12]`: LV_DIACRITIC
- a2-zunehmen `study.accents.blue[16]`: LV_DIACRITIC
- a2-zunehmen `study.accents.green[0]`: LV_DIACRITIC
- a2-zunehmen `study.accents.green[1]`: LV_DIACRITIC
- a2-zunehmen `study.accents.orange[0]`: LV_DIACRITIC
- a2-zunehmen `study.accents.orange[1]`: LV_DIACRITIC
- a2-zunehmen `study.accents.orange[2]`: LV_DIACRITIC
- a2-zunehmen `study.accents.purple[0]`: LV_DIACRITIC
- a2-zunehmen `study.accents.purple[1]`: LV_DIACRITIC
- a2-zunehmen `study.accents.purple[2]`: LV_DIACRITIC
- a2-zunehmen `study.accents.purple[3]`: LV_DIACRITIC
- a2-zurzeit `study.important.example`: LV_DIACRITIC
- a2-zurzeit `study.sectionAccents.examples[1].lv.purple[0]`: LV_DIACRITIC
- a2-zurzeit `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-zurzeit `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-zurzeit `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[1]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[2]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[3]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[4]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[5]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[9]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[11]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[13]`: LV_DIACRITIC
- a2-zurzeit `study.accents.blue[16]`: LV_DIACRITIC
- a2-zurzeit `study.accents.green[0]`: LV_DIACRITIC
- a2-zurzeit `study.accents.purple[0]`: LV_DIACRITIC
- a2-zurzeit `study.accents.purple[1]`: LV_DIACRITIC
- a2-zurzeit `study.accents.purple[3]`: LV_DIACRITIC
- a2-zurzeit `study.accents.purple[4]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 29 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 601 | a2-Werbung-1579 | 1579 | APPLIED |
| 602 | a2-werfen-1580 | 1580 | APPLIED |
| 603 | a2-wert | 1583 | APPLIED |
| 604 | a2-Westen-1585 | 1585 | APPLIED |
| 605 | a2-wiegen | 1589 | APPLIED |
| 606 | a2-Wild-1592 | 1592 | APPLIED |
| 607 | a2-winken-1596 | 1596 | APPLIED |
| 608 | a2-ziehen | 1599 | APPLIED |
| 609 | a2-Ziel-1600 | 1600 | APPLIED |
| 610 | a2-Zopf-1604 | 1604 | APPLIED |
| 611 | a2-zubereiten-1606 | 1606 | APPLIED |
| 612 | a2-zunächst-1613 | 1613 | APPLIED |
| 613 | a2-zunehmen | 1614 | APPLIED |
| 614 | a2-zurzeit | 1618 | APPLIED |
| 615 | a2-sehen | 1622 | APPLIED |
| 616 | a2-schauen | 1623 | APPLIED |
| 617 | a2-hoeren | 1625 | APPLIED |
| 618 | a2-sagen | 1626 | APPLIED |
| 619 | a2-sprechen | 1627 | APPLIED |
| 620 | a2-gross | 1628 | APPLIED |
| 621 | a2-klein | 1630 | APPLIED |
| 622 | a2-leise | 1631 | APPLIED |
| 623 | a2-schon | 1632 | APPLIED |
| 624 | a2-noch | 1633 | APPLIED |
| 625 | a2-erst | 1634 | APPLIED |
| 626 | a2-nur | 1635 | APPLIED |
| 627 | a2-ueber | 1636 | APPLIED |
| 628 | a2-gleich | 1638 | APPLIED |
| 629 | a2-auch | 1639 | APPLIED |

## Branch

`cursor/cs-a2-repair-group13-6ea4`

_Generated: 2026-08-13T19:22:05.057Z_