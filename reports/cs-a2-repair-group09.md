# CS–DE A2 Repair Group 09

COPY-ONLY repair from `scripts/cs-a2-repair-group09-spec.json`.

## Summary

| Metric | Value |
|---|---|
| requested | 50 |
| processed | 50/50 |
| APPLIED | 48 |
| ALREADY_CORRECT | 2 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| DE_MISMATCH_BLOCKED | 0 |

## Changed cards

a2-Nuss-1028, a2-nutzen, a2-offen, a2-Öffnungszeit-1038, a2-Öl-1039, a2-Olive-1040, a2-ordentlich-1044, a2-Ordnung-1046, a2-Osten-1048, a2-Pappbecher-1054, a2-Parfüm-1055, a2-passieren, a2-patient, a2-Pech-1065, a2-Pension-1066, a2-personal, a2-pflaster, a2-Portion-1100, a2-privat-1106, a2-pünktlich-1112, a2-Putzfrau-1114, a2-Quadrat-1115, a2-Qualität-1116, a2-Quittung-1118, a2-rad, a2-Radieschen-1121, a2-Rahm-1122, a2-rasen-study, a2-raten, a2-Raum-1131, a2-rechnen, a2-Rechnung-1133, a2-Recht-1134, a2-Rechte-1135, a2-Reich-1143, a2-reichen, a2-Reihe-1145, a2-reiten-1152, a2-Rennen-1154, a2-Reparatur-1157, a2-Rest-1160, a2-retten-1162, a2-Rezeption-1163, a2-riechen, a2-Rock-1168, a2-rodeln-1169, a2-rolle, a2-Ruhe-1179

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 28 |
| LV remnants (repaired cards) | 40 |
| regression findings documented | 68 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-nutzen | Použití |
| a2-offen | Otevřít, Uvolnit |
| a2-passieren | Měl |
| a2-pflaster | ielas |
| a2-rasen-study | Tráva |
| a2-raten | doporučíte, Můžete |
| a2-rechnen | Musíte |
| a2-reichen | Není, Pro, soli, Dost |
| a2-riechen | Psí, Něco, Cítit, Příjemná, Vonět |
| a2-rolle | Svitek |

## LV remnants (documented, not auto-fixed)

- a2-pflaster `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-pflaster `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-pflaster `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-pflaster `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[2]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[3]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[4]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[5]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[6]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[8]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[10]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[12]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[13]`: LV_DIACRITIC
- a2-pflaster `study.accents.blue[16]`: LV_DIACRITIC
- a2-pflaster `study.accents.green[0]`: LV_DIACRITIC
- a2-pflaster `study.accents.orange[0]`: LV_DIACRITIC
- a2-pflaster `study.accents.purple[0]`: LV_DIACRITIC
- a2-pflaster `study.accents.purple[2]`: LV_DIACRITIC
- a2-pflaster `study.accents.purple[4]`: LV_DIACRITIC
- a2-riechen `study.sectionAccents.tip[1].purple[0]`: LV_DIACRITIC
- a2-rolle `study.important.example`: LV_DIACRITIC
- a2-rolle `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-rolle `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-rolle `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-rolle `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-rolle `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-rolle `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[2]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[3]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[4]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[5]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[6]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[9]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[11]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[12]`: LV_DIACRITIC
- a2-rolle `study.accents.blue[13]`: LV_DIACRITIC
- a2-rolle `study.accents.purple[1]`: LV_DIACRITIC
- a2-rolle `study.accents.purple[2]`: LV_DIACRITIC
- a2-rolle `study.accents.purple[5]`: LV_DIACRITIC
- a2-rolle `study.accents.purple[6]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 401 | a2-Nuss-1028 | 1028 | APPLIED |
| 402 | a2-nutzen | 1029 | APPLIED |
| 403 | a2-obwohl-1035 | 1035 | ALREADY_CORRECT |
| 404 | a2-offen | 1037 | APPLIED |
| 405 | a2-Öffnungszeit-1038 | 1038 | APPLIED |
| 406 | a2-Öl-1039 | 1039 | APPLIED |
| 407 | a2-Olive-1040 | 1040 | APPLIED |
| 408 | a2-Orange-1043 | 1043 | ALREADY_CORRECT |
| 409 | a2-ordentlich-1044 | 1044 | APPLIED |
| 410 | a2-Ordnung-1046 | 1046 | APPLIED |
| 411 | a2-Osten-1048 | 1048 | APPLIED |
| 412 | a2-Pappbecher-1054 | 1054 | APPLIED |
| 413 | a2-Parfüm-1055 | 1055 | APPLIED |
| 414 | a2-passieren | 1062 | APPLIED |
| 415 | a2-patient | 1064 | APPLIED |
| 416 | a2-Pech-1065 | 1065 | APPLIED |
| 417 | a2-Pension-1066 | 1066 | APPLIED |
| 418 | a2-personal | 1068 | APPLIED |
| 419 | a2-pflaster | 1078 | APPLIED |
| 420 | a2-Portion-1100 | 1100 | APPLIED |
| 421 | a2-privat-1106 | 1106 | APPLIED |
| 422 | a2-pünktlich-1112 | 1112 | APPLIED |
| 423 | a2-Putzfrau-1114 | 1114 | APPLIED |
| 424 | a2-Quadrat-1115 | 1115 | APPLIED |
| 425 | a2-Qualität-1116 | 1116 | APPLIED |
| 426 | a2-Quittung-1118 | 1118 | APPLIED |
| 427 | a2-rad | 1119 | APPLIED |
| 428 | a2-Radieschen-1121 | 1121 | APPLIED |
| 429 | a2-Rahm-1122 | 1122 | APPLIED |
| 430 | a2-rasen-study | 1124 | APPLIED |
| 431 | a2-raten | 1126 | APPLIED |
| 432 | a2-Raum-1131 | 1131 | APPLIED |
| 433 | a2-rechnen | 1132 | APPLIED |
| 434 | a2-Rechnung-1133 | 1133 | APPLIED |
| 435 | a2-Recht-1134 | 1134 | APPLIED |
| 436 | a2-Rechte-1135 | 1135 | APPLIED |
| 437 | a2-Reich-1143 | 1143 | APPLIED |
| 438 | a2-reichen | 1144 | APPLIED |
| 439 | a2-Reihe-1145 | 1145 | APPLIED |
| 440 | a2-reiten-1152 | 1152 | APPLIED |
| 441 | a2-Rennen-1154 | 1154 | APPLIED |
| 442 | a2-Reparatur-1157 | 1157 | APPLIED |
| 443 | a2-Rest-1160 | 1160 | APPLIED |
| 444 | a2-retten-1162 | 1162 | APPLIED |
| 445 | a2-Rezeption-1163 | 1163 | APPLIED |
| 446 | a2-riechen | 1165 | APPLIED |
| 447 | a2-Rock-1168 | 1168 | APPLIED |
| 448 | a2-rodeln-1169 | 1169 | APPLIED |
| 449 | a2-rolle | 1172 | APPLIED |
| 450 | a2-Ruhe-1179 | 1179 | APPLIED |

## Branch

`cursor/cs-a2-repair-group09-6ea4`

_Generated: 2026-08-13T19:21:57.586Z_