# CS–DE A2 Repair Group 11

COPY-ONLY repair from `scripts/cs-a2-repair-group11-spec.json`.

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

a2-setzen, a2-so viel-1324, a2-sobald, a2-Sohle-1327, a2-solange-1328, a2-sondern-1331, a2-Sonnenschein-1334, a2-sonst, a2-sortieren-1338, a2-spannend-1342, a2-sparen-1343, a2-Speck-1347, a2-Sport-1356, a2-springen-1359, a2-spülen-1360, a2-Staat-1361, a2-starten-1364, a2-stattfinden-1366, a2-stehen, a2-stellen, a2-stehen bleiben-1375, a2-steigen, a2-stelle, a2-steuern-1383, a2-stimmen, a2-stinken-1389, a2-stoff, a2-Straßenverkehr-1399, a2-streicheln-1401, a2-Streichholz-1402, a2-Tablett-1414, a2-tafel, a2-Tankstelle-1419, a2-Tannenbaum-1421, a2-Taschenbuch-1424, a2-tauschen-1426, a2-Teekanne-1430, a2-teil, a2-teilen-1432, a2-termin, a2-Thema-1440, a2-tief, a2-Tischler-1445, a2-toll, a2-Top-1450, a2-tragen, a2-Training-1461, a2-Traube-1464, a2-treffen

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 55 |
| LV remnants (repaired cards) | 195 |
| regression findings documented | 250 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-sobald | kdy, Zvuk |
| a2-steigen | Dostat, Vystupte |
| a2-stelle | Nestůjte, Přečtěte, Textový, fragment, fragments, meklēt, vietā, šajā |
| a2-stimmen | Fit, konstrukcí, tā ir, balsot, piekrist |
| a2-stoff | Podrobit, audums, viela, mācību viela |
| a2-tafel | Koupím, tāfele, tabula, ēdienkarte, šokolādes tāfelīte |
| a2-teil | Tato, detail |
| a2-termin | Zasedání |
| a2-tief | tichý, Nízkého, Klid |
| a2-treffen | Fit |

## LV remnants (documented, not auto-fixed)

- a2-sobald `study.important.example`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.tip.leftBlocks[0].text.yellow[5]`: LV_DIACRITIC, LV_WORD
- a2-sobald `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-sobald `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[1]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[2]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[3]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[4]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[5]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[7]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[9]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[10]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[12]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[13]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[14]`: LV_DIACRITIC
- a2-sobald `study.accents.blue[15]`: LV_DIACRITIC, LV_WORD
- a2-sobald `study.accents.green[0]`: LV_DIACRITIC
- a2-sobald `study.accents.green[1]`: LV_DIACRITIC
- a2-sobald `study.accents.orange[0]`: LV_DIACRITIC
- a2-sobald `study.accents.purple[0]`: LV_DIACRITIC
- a2-sobald `study.accents.purple[1]`: LV_DIACRITIC
- a2-sobald `study.accents.purple[2]`: LV_DIACRITIC
- a2-sobald `study.accents.purple[3]`: LV_DIACRITIC
- a2-sobald `study.accents.purple[6]`: LV_DIACRITIC
- a2-sonst `study.important.example`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC, LV_WORD
- a2-sonst `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.important[0].text.orange[0]`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-sonst `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-sonst `study.accents.blue[3]`: LV_DIACRITIC
- a2-sonst `study.accents.blue[4]`: LV_DIACRITIC
- a2-sonst `study.accents.blue[5]`: LV_DIACRITIC
- a2-sonst `study.accents.blue[6]`: LV_DIACRITIC
- a2-sonst `study.accents.blue[7]`: LV_DIACRITIC
- a2-sonst `study.accents.blue[12]`: LV_DIACRITIC
- a2-sonst `study.accents.green[0]`: LV_DIACRITIC
- a2-sonst `study.accents.green[1]`: LV_DIACRITIC
- a2-sonst `study.accents.orange[0]`: LV_DIACRITIC
- a2-sonst `study.accents.orange[1]`: LV_DIACRITIC
- a2-sonst `study.accents.purple[0]`: LV_DIACRITIC
- a2-sonst `study.accents.purple[1]`: LV_DIACRITIC
- a2-sonst `study.accents.purple[2]`: LV_DIACRITIC
- a2-sonst `study.accents.purple[3]`: LV_DIACRITIC
- a2-Stadion-1362 `lv`: PL_CHAR
- a2-steigen `study.important.example`: LV_DIACRITIC
- a2-steigen `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-steigen `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-steigen `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-steigen `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-steigen `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-steigen `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-steigen `study.accents.purple[0]`: LV_DIACRITIC
- a2-steigen `study.accents.purple[2]`: LV_DIACRITIC
- a2-steigen `study.accents.purple[4]`: LV_DIACRITIC
- a2-stelle `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-stelle `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-stelle `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-stelle `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-stelle `study.sectionAccents.important[0].example.red[6]`: LV_DIACRITIC
- a2-stelle `study.accents.blue[4]`: LV_DIACRITIC
- a2-stelle `study.accents.blue[5]`: LV_DIACRITIC
- a2-stelle `study.accents.blue[6]`: LV_DIACRITIC
- a2-stelle `study.accents.blue[7]`: LV_DIACRITIC
- a2-stelle `study.accents.blue[11]`: LV_DIACRITIC
- a2-stelle `study.accents.blue[14]`: LV_DIACRITIC
- a2-stelle `study.accents.blue[15]`: LV_DIACRITIC
- a2-stelle `study.accents.green[0]`: LV_DIACRITIC
- a2-stelle `study.accents.purple[3]`: LV_DIACRITIC
- a2-stelle `study.accents.purple[5]`: LV_DIACRITIC
- a2-stimmen `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-stimmen `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-stimmen `study.accents.purple[0]`: LV_DIACRITIC
- a2-stimmen `study.accents.purple[1]`: LV_DIACRITIC
- a2-stimmen `study.accents.purple[5]`: LV_DIACRITIC
- a2-stoff `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-stoff `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-stoff `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-stoff `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-stoff `study.accents.purple[2]`: LV_DIACRITIC
- a2-stoff `study.accents.purple[5]`: LV_DIACRITIC
- a2-tafel `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-tafel `study.sectionAccents.tip.leftBlocks[0].text.green[0]`: LV_DIACRITIC
- a2-tafel `study.sectionAccents.tip.leftBlocks[1].text.purple[1]`: LV_DIACRITIC
- a2-tafel `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-tafel `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-tafel `study.sectionAccents.important[0].example.purple[3]`: LV_DIACRITIC
- a2-tafel `study.accents.purple[0]`: LV_DIACRITIC
- a2-tafel `study.accents.purple[1]`: LV_DIACRITIC
- a2-tafel `study.accents.purple[2]`: LV_DIACRITIC
- a2-tafel `study.accents.purple[3]`: LV_DIACRITIC
- a2-tafel `study.accents.purple[4]`: LV_DIACRITIC
- a2-tafel `study.accents.green[1]`: LV_DIACRITIC
- a2-teil `study.important.example`: LV_DIACRITIC
- a2-teil `study.sectionAccents.tip.leftBlocks[0].text.green[0]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.tip.leftBlocks[1].text.orange[0]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC, LV_WORD
- a2-teil `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].text.green[0]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].text.orange[0]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].text.red[2]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].text.red[3]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].example.green[1]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-teil `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-teil `study.accents.blue[1]`: LV_DIACRITIC
- a2-teil `study.accents.blue[4]`: LV_DIACRITIC
- a2-teil `study.accents.blue[5]`: LV_DIACRITIC
- a2-teil `study.accents.blue[7]`: LV_DIACRITIC
- a2-teil `study.accents.blue[8]`: LV_DIACRITIC
- a2-teil `study.accents.blue[9]`: LV_DIACRITIC
- a2-teil `study.accents.blue[10]`: LV_DIACRITIC
- a2-teil `study.accents.blue[11]`: LV_DIACRITIC
- a2-teil `study.accents.blue[12]`: LV_DIACRITIC
- a2-teil `study.accents.blue[14]`: LV_DIACRITIC
- a2-teil `study.accents.blue[15]`: LV_DIACRITIC
- a2-teil `study.accents.green[3]`: LV_DIACRITIC
- a2-teil `study.accents.orange[1]`: LV_DIACRITIC
- a2-teil `study.accents.purple[0]`: LV_DIACRITIC
- a2-teil `study.accents.purple[1]`: LV_DIACRITIC
- a2-teil `study.accents.purple[2]`: LV_DIACRITIC
- a2-teil `study.accents.purple[4]`: LV_DIACRITIC
- a2-termin `study.important.example`: LV_DIACRITIC
- a2-termin `study.sectionAccents.tip.leftBlocks[0].text.green[0]`: LV_DIACRITIC
- a2-termin `study.sectionAccents.tip.leftBlocks[0].text.green[2]`: LV_DIACRITIC
- a2-termin `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-termin `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-termin `study.accents.purple[0]`: LV_DIACRITIC
- a2-termin `study.accents.purple[1]`: LV_DIACRITIC
- a2-termin `study.accents.purple[3]`: LV_DIACRITIC
- a2-termin `study.accents.purple[4]`: LV_DIACRITIC
- a2-tief `study.explanation`: PL_CHAR
- a2-tief `study.tip.leftBlocks[1].text`: PL_CHAR
- a2-tief `study.important.example`: LV_DIACRITIC
- a2-tief `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-tief `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-tief `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-tief `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-tief `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-tief `study.accents.purple[0]`: LV_DIACRITIC
- a2-tief `study.accents.purple[2]`: LV_DIACRITIC
- a2-tragen `study.important.example`: LV_DIACRITIC
- a2-tragen `study.accents.yellow[0]`: LV_DIACRITIC
- a2-tragen `study.accents.yellow[1]`: LV_DIACRITIC
- a2-tragen `study.accents.red[0]`: LV_DIACRITIC
- a2-tragen `study.accents.red[1]`: LV_DIACRITIC
- a2-tragen `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-tragen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-tragen `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-tragen `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-treffen `study.important.example`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.tip.leftBlocks[1].text.yellow[5]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-treffen `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[2]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[3]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[5]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[7]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[8]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[9]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[10]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[12]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[14]`: LV_DIACRITIC
- a2-treffen `study.accents.blue[15]`: LV_DIACRITIC
- a2-treffen `study.accents.green[1]`: LV_DIACRITIC
- a2-treffen `study.accents.green[3]`: LV_DIACRITIC
- a2-treffen `study.accents.yellow[0]`: LV_DIACRITIC
- a2-treffen `study.accents.yellow[2]`: LV_DIACRITIC
- a2-treffen `study.accents.orange[2]`: LV_DIACRITIC
- a2-treffen `study.accents.purple[0]`: LV_DIACRITIC
- a2-treffen `study.accents.purple[1]`: LV_DIACRITIC
- a2-treffen `study.accents.purple[2]`: LV_DIACRITIC
- a2-treffen `study.accents.purple[3]`: LV_DIACRITIC
- a2-treffen `study.accents.purple[4]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 501 | a2-setzen | 1321 | APPLIED |
| 502 | a2-so viel-1324 | 1324 | APPLIED |
| 503 | a2-sobald | 1325 | APPLIED |
| 504 | a2-Sohle-1327 | 1327 | APPLIED |
| 505 | a2-solange-1328 | 1328 | APPLIED |
| 506 | a2-sondern-1331 | 1331 | APPLIED |
| 507 | a2-Sonnenschein-1334 | 1334 | APPLIED |
| 508 | a2-sonst | 1336 | APPLIED |
| 509 | a2-sortieren-1338 | 1338 | APPLIED |
| 510 | a2-spannend-1342 | 1342 | APPLIED |
| 511 | a2-sparen-1343 | 1343 | APPLIED |
| 512 | a2-Speck-1347 | 1347 | APPLIED |
| 513 | a2-Sport-1356 | 1356 | APPLIED |
| 514 | a2-springen-1359 | 1359 | APPLIED |
| 515 | a2-spülen-1360 | 1360 | APPLIED |
| 516 | a2-Staat-1361 | 1361 | APPLIED |
| 517 | a2-Stadion-1362 | 1362 | ALREADY_CORRECT |
| 518 | a2-starten-1364 | 1364 | APPLIED |
| 519 | a2-stattfinden-1366 | 1366 | APPLIED |
| 520 | a2-stehen | 1373 | APPLIED |
| 521 | a2-stellen | 1374 | APPLIED |
| 522 | a2-stehen bleiben-1375 | 1375 | APPLIED |
| 523 | a2-steigen | 1378 | APPLIED |
| 524 | a2-stelle | 1380 | APPLIED |
| 525 | a2-steuern-1383 | 1383 | APPLIED |
| 526 | a2-stimmen | 1388 | APPLIED |
| 527 | a2-stinken-1389 | 1389 | APPLIED |
| 528 | a2-stoff | 1392 | APPLIED |
| 529 | a2-Straßenverkehr-1399 | 1399 | APPLIED |
| 530 | a2-streicheln-1401 | 1401 | APPLIED |
| 531 | a2-Streichholz-1402 | 1402 | APPLIED |
| 532 | a2-Tablett-1414 | 1414 | APPLIED |
| 533 | a2-tafel | 1416 | APPLIED |
| 534 | a2-Tankstelle-1419 | 1419 | APPLIED |
| 535 | a2-Tannenbaum-1421 | 1421 | APPLIED |
| 536 | a2-Taschenbuch-1424 | 1424 | APPLIED |
| 537 | a2-tauschen-1426 | 1426 | APPLIED |
| 538 | a2-Teekanne-1430 | 1430 | APPLIED |
| 539 | a2-teil | 1431 | APPLIED |
| 540 | a2-teilen-1432 | 1432 | APPLIED |
| 541 | a2-termin | 1438 | APPLIED |
| 542 | a2-Thema-1440 | 1440 | APPLIED |
| 543 | a2-tief | 1443 | APPLIED |
| 544 | a2-Tischler-1445 | 1445 | APPLIED |
| 545 | a2-toll | 1449 | APPLIED |
| 546 | a2-Top-1450 | 1450 | APPLIED |
| 547 | a2-tragen | 1458 | APPLIED |
| 548 | a2-Training-1461 | 1461 | APPLIED |
| 549 | a2-Traube-1464 | 1464 | APPLIED |
| 550 | a2-treffen | 1469 | APPLIED |

## Branch

`cursor/cs-a2-repair-group11-6ea4`

_Generated: 2026-08-13T19:22:01.300Z_