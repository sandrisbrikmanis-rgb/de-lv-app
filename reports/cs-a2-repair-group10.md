# CS–DE A2 Repair Group 10

COPY-ONLY repair from `scripts/cs-a2-repair-group10-spec.json`.

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

a2-ruhig-1180, a2-rühren-1181, a2-Rundfunk-1182, a2-Saal-1184, a2-Sack-1185, a2-Sahne-1187, a2-Saison-1188, a2-salzen-1189, a2-sammeln, a2-satt-1193, a2-satz, a2-Sauerkraut-1196, a2-schade-1201, a2-Schal-1203, a2-schälen-1204, a2-schalten, a2-schätzen-1210, a2-scheinen, a2-schenken-1218, a2-Schild-1224, a2-Schlaf-1227, a2-schlagen-1228, a2-schlange, a2-schließen, a2-Schlips-1233, a2-schloss, a2-schriftlich-1251, a2-schuld, a2-Schürze-1258, a2-schwanger-1262, a2-schwer, a2-schwitzen-1270, a2-Seilspringen-1273, a2-seitdem-1274, a2-selten-1277, a2-Semmel-1278, a2-servieren-1282, a2-sich ausziehen-1288, a2-sich beeilen-1290, a2-sich-befinden, a2-sich erholen-1293, a2-sich frisieren-1296, a2-sich fühlen-1297, a2-sich setzen-1301, a2-sich-unterhalten, a2-sich vorbereiten-1311, a2-Sicherheit-1312, a2-Situation-1319, a2-sitzen

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 33 |
| LV remnants (repaired cards) | 168 |
| regression findings documented | 201 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-sammeln | Studenti |
| a2-schalten | Rozsvítil, Zhasl, Můžete |
| a2-scheinen | Podívat, Udělat |
| a2-schließen | Můžete, Blízký, Uzavřít |
| a2-schloss | paláci, slēdzene, pils, velosipēda slēdzene, durvju slēdzene, durvju |
| a2-schuld | vainīgs, esmu |
| a2-sich-befinden | Být |
| a2-sich-unterhalten | Bavte |
| a2-sitzen | Kam |

## LV remnants (documented, not auto-fixed)

- a2-Saison-1188 `lv`: PL_CHAR
- a2-satz `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-satz `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-satz `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-satz `study.accents.blue[3]`: LV_DIACRITIC
- a2-satz `study.accents.blue[5]`: LV_DIACRITIC
- a2-satz `study.accents.blue[6]`: LV_DIACRITIC
- a2-satz `study.accents.blue[7]`: LV_DIACRITIC
- a2-satz `study.accents.blue[8]`: LV_DIACRITIC
- a2-satz `study.accents.blue[11]`: LV_DIACRITIC
- a2-satz `study.accents.blue[13]`: LV_DIACRITIC
- a2-satz `study.accents.yellow[2]`: LV_DIACRITIC
- a2-satz `study.accents.purple[0]`: LV_DIACRITIC
- a2-satz `study.accents.purple[5]`: LV_DIACRITIC, LV_WORD
- a2-scheinen `study.important.example`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-scheinen `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-scheinen `study.accents.blue[2]`: LV_DIACRITIC
- a2-scheinen `study.accents.blue[5]`: LV_DIACRITIC
- a2-scheinen `study.accents.blue[7]`: LV_DIACRITIC
- a2-scheinen `study.accents.blue[11]`: LV_DIACRITIC
- a2-scheinen `study.accents.blue[14]`: LV_DIACRITIC
- a2-scheinen `study.accents.blue[15]`: LV_DIACRITIC
- a2-scheinen `study.accents.green[2]`: LV_DIACRITIC
- a2-scheinen `study.accents.orange[0]`: LV_DIACRITIC
- a2-scheinen `study.accents.purple[0]`: LV_DIACRITIC
- a2-scheinen `study.accents.purple[1]`: LV_DIACRITIC
- a2-scheinen `study.accents.purple[2]`: LV_DIACRITIC
- a2-scheinen `study.accents.purple[3]`: LV_DIACRITIC
- a2-scheinen `study.accents.purple[4]`: LV_DIACRITIC
- a2-schlange `study.important.example`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.tip.leftBlocks[1].text.orange[0]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-schlange `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-schlange `study.accents.blue[2]`: LV_DIACRITIC
- a2-schlange `study.accents.blue[5]`: LV_DIACRITIC
- a2-schlange `study.accents.blue[6]`: LV_DIACRITIC
- a2-schlange `study.accents.blue[9]`: LV_DIACRITIC
- a2-schlange `study.accents.blue[10]`: LV_DIACRITIC
- a2-schlange `study.accents.blue[11]`: LV_DIACRITIC
- a2-schlange `study.accents.blue[14]`: LV_DIACRITIC
- a2-schlange `study.accents.green[2]`: LV_DIACRITIC
- a2-schlange `study.accents.orange[0]`: LV_DIACRITIC
- a2-schlange `study.accents.purple[0]`: LV_DIACRITIC
- a2-schlange `study.accents.purple[1]`: LV_DIACRITIC
- a2-schlange `study.accents.purple[2]`: LV_DIACRITIC
- a2-schlange `study.accents.purple[3]`: LV_DIACRITIC
- a2-schlange `study.accents.purple[4]`: LV_DIACRITIC
- a2-schließen `lv`: LV_DIACRITIC
- a2-schließen `study.comparison[1].example`: LV_DIACRITIC
- a2-schließen `study.important.example`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.comparison[1].example.green[0]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.important[0].example.orange[1]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-schließen `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[2]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[3]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[5]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[6]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[7]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[8]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[12]`: LV_DIACRITIC
- a2-schließen `study.accents.blue[14]`: LV_DIACRITIC
- a2-schließen `study.accents.green[1]`: LV_DIACRITIC
- a2-schließen `study.accents.green[3]`: LV_DIACRITIC
- a2-schließen `study.accents.yellow[1]`: LV_DIACRITIC
- a2-schließen `study.accents.orange[0]`: LV_DIACRITIC
- a2-schließen `study.accents.orange[1]`: LV_DIACRITIC
- a2-schließen `study.accents.orange[2]`: LV_DIACRITIC
- a2-schließen `study.accents.purple[0]`: LV_DIACRITIC
- a2-schließen `study.accents.purple[1]`: LV_DIACRITIC
- a2-schließen `study.accents.purple[2]`: LV_DIACRITIC
- a2-schließen `study.accents.purple[3]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-schloss `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[4]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[5]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[6]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[7]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[8]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[9]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[10]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[11]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[13]`: LV_DIACRITIC
- a2-schloss `study.accents.blue[15]`: LV_DIACRITIC
- a2-schloss `study.accents.green[1]`: LV_DIACRITIC
- a2-schloss `study.accents.purple[0]`: LV_DIACRITIC
- a2-schloss `study.accents.purple[2]`: LV_DIACRITIC
- a2-schloss `study.accents.purple[3]`: LV_DIACRITIC
- a2-schloss `study.accents.purple[4]`: LV_DIACRITIC
- a2-schloss `study.accents.purple[7]`: LV_DIACRITIC
- a2-schuld `study.important.example`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-schuld `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-schuld `study.accents.blue[1]`: LV_DIACRITIC
- a2-schuld `study.accents.blue[3]`: LV_DIACRITIC
- a2-schuld `study.accents.blue[4]`: LV_DIACRITIC
- a2-schuld `study.accents.blue[8]`: LV_DIACRITIC
- a2-schuld `study.accents.blue[9]`: LV_DIACRITIC
- a2-schuld `study.accents.blue[12]`: LV_DIACRITIC
- a2-schuld `study.accents.blue[16]`: LV_DIACRITIC
- a2-schuld `study.accents.green[2]`: LV_DIACRITIC
- a2-schuld `study.accents.yellow[2]`: LV_DIACRITIC
- a2-schuld `study.accents.purple[0]`: LV_DIACRITIC
- a2-schuld `study.accents.purple[1]`: LV_DIACRITIC
- a2-schuld `study.accents.purple[2]`: LV_DIACRITIC
- a2-schuld `study.accents.purple[4]`: LV_DIACRITIC
- a2-schuld `study.accents.purple[5]`: LV_DIACRITIC
- a2-sich-befinden `study.important.example`: LV_DIACRITIC
- a2-sich-befinden `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-sich-befinden `study.accents.purple[3]`: LV_DIACRITIC
- a2-sich-befinden `study.accents.purple[4]`: LV_DIACRITIC
- a2-sich-unterhalten `study.important.example`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-sich-unterhalten `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.blue[2]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.blue[4]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.blue[5]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.blue[6]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.blue[7]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.blue[8]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.blue[12]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.green[0]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.orange[0]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.purple[0]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.purple[1]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.purple[2]`: LV_DIACRITIC
- a2-sich-unterhalten `study.accents.purple[3]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 451 | a2-ruhig-1180 | 1180 | APPLIED |
| 452 | a2-rühren-1181 | 1181 | APPLIED |
| 453 | a2-Rundfunk-1182 | 1182 | APPLIED |
| 454 | a2-Saal-1184 | 1184 | APPLIED |
| 455 | a2-Sack-1185 | 1185 | APPLIED |
| 456 | a2-Sahne-1187 | 1187 | APPLIED |
| 457 | a2-Saison-1188 | 1188 | APPLIED |
| 458 | a2-salzen-1189 | 1189 | APPLIED |
| 459 | a2-sammeln | 1190 | APPLIED |
| 460 | a2-satt-1193 | 1193 | APPLIED |
| 461 | a2-satz | 1194 | APPLIED |
| 462 | a2-Sauerkraut-1196 | 1196 | APPLIED |
| 463 | a2-schade-1201 | 1201 | APPLIED |
| 464 | a2-Schal-1203 | 1203 | APPLIED |
| 465 | a2-schälen-1204 | 1204 | APPLIED |
| 466 | a2-schalten | 1205 | APPLIED |
| 467 | a2-schätzen-1210 | 1210 | APPLIED |
| 468 | a2-scheinen | 1217 | APPLIED |
| 469 | a2-schenken-1218 | 1218 | APPLIED |
| 470 | a2-Schild-1224 | 1224 | APPLIED |
| 471 | a2-Schlaf-1227 | 1227 | APPLIED |
| 472 | a2-schlagen-1228 | 1228 | APPLIED |
| 473 | a2-schlange | 1229 | APPLIED |
| 474 | a2-schließen | 1230 | APPLIED |
| 475 | a2-Schlips-1233 | 1233 | APPLIED |
| 476 | a2-schloss | 1236 | APPLIED |
| 477 | a2-schriftlich-1251 | 1251 | APPLIED |
| 478 | a2-schuld | 1256 | APPLIED |
| 479 | a2-Schürze-1258 | 1258 | APPLIED |
| 480 | a2-schwanger-1262 | 1262 | APPLIED |
| 481 | a2-schwer | 1266 | APPLIED |
| 482 | a2-schwitzen-1270 | 1270 | APPLIED |
| 483 | a2-Seilspringen-1273 | 1273 | APPLIED |
| 484 | a2-seitdem-1274 | 1274 | APPLIED |
| 485 | a2-selten-1277 | 1277 | APPLIED |
| 486 | a2-Semmel-1278 | 1278 | APPLIED |
| 487 | a2-servieren-1282 | 1282 | APPLIED |
| 488 | a2-sich ausziehen-1288 | 1288 | APPLIED |
| 489 | a2-sich beeilen-1290 | 1290 | APPLIED |
| 490 | a2-sich-befinden | 1291 | APPLIED |
| 491 | a2-sich erholen-1293 | 1293 | APPLIED |
| 492 | a2-sich frisieren-1296 | 1296 | APPLIED |
| 493 | a2-sich fühlen-1297 | 1297 | APPLIED |
| 494 | a2-sich setzen-1301 | 1301 | APPLIED |
| 495 | a2-sich-unterhalten | 1305 | APPLIED |
| 496 | a2-sich verheiraten-1308 | 1308 | ALREADY_CORRECT |
| 497 | a2-sich vorbereiten-1311 | 1311 | APPLIED |
| 498 | a2-Sicherheit-1312 | 1312 | APPLIED |
| 499 | a2-Situation-1319 | 1319 | APPLIED |
| 500 | a2-sitzen | 1320 | APPLIED |

## Branch

`cursor/cs-a2-repair-group10-6ea4`

_Generated: 2026-08-13T19:21:59.443Z_