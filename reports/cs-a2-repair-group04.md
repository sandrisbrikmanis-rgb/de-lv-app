# CS–DE A2 Repair Group 04

COPY-ONLY repair from `scripts/cs-a2-repair-group04-spec.json`.

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

a2-damit, a2-danach-322, study-der-dank, a2-darauf, a2-darüber, a2-darum, a2-davon, a2-davor, a2-dazu, a2-decke, a2-denn, a2-deshalb-338, a2-deswegen-339, a2-deutlich-340, a2-dick, a2-doch, a2-doktor, a2-doppelt-349, a2-Dorf-350, a2-dorthin-351, a2-draußen-352, a2-drehen, a2-dreißigste-354, a2-dreizehnte-356, a2-drüben-359, a2-drücken, a2-dünn, a2-durch, a2-e-mailen-368, a2-eben, a2-ebenso-371, a2-ebenso viel-372, a2-echt-373, a2-egal-374, a2-ehrlich, a2-eigentlich, a2-einander-381, a2-Eingang-383, a2-einige-384, a2-einladen, a2-einsam-390, a2-einschalten, a2-einschlafen, a2-einsteigen, a2-eintritt, a2-einverstanden-397, a2-Ellbogen-406, a2-enden-408, a2-eng, a2-entlang-414

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 138 |
| LV remnants (repaired cards) | 157 |
| regression findings documented | 295 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-damit | lai, par to, ar to, ar to / lai, Nejaukt |
| study-der-dank | Děkuji |
| a2-darauf | toho, Můžete, nozīmē, uz to, prieku, gaidu |
| a2-darüber | nad tím |
| a2-darum | proto, Proto |
| a2-davon | darber |
| a2-dazu | Přinesu |
| a2-denn | potom |
| a2-dick | stěnu, Tuk, předmětech, Čurák |
| a2-doch | Pojďte, Ale, Žádný, taču, bet, noguris, neesi, Esmu, gan |
| a2-doktor | Miller, Die |
| a2-drehen | Hlavní, schneiden, sich drehen, Nožem, Sich |
| a2-drücken | Klikněte, Tato |
| a2-dünn | Hlavní, papír, Hustý, Hubený |
| a2-durch | Hlavní, mit, dēļ, velkou |
| a2-eben | Byt, prostě |
| a2-ehrlich | pěkný, Das, ehrlich, Ehrlich, Aufrichtig, aufrichtig |
| a2-eigentlich | Nemovitý, Věrný |
| a2-einladen | Zatížení |
| a2-einschalten | Rozsvítil, Najmeme, Můžete, Ich, schalte, Licht, zapnout |
| a2-einschlafen | Hlavní, ruku, Moje, Ztuhla, taub, Mein, einschlafen, Einschlafen |
| a2-einsteigen | Změnit, nastoupit, do autobusu |
| a2-eintritt | Eintritt, muzeu, kině, Hlavní, Eingang |
| a2-eng | Hlavní |

## LV remnants (documented, not auto-fixed)

- a2-damit `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-damit `study.accents.blue[1]`: LV_DIACRITIC
- a2-damit `study.accents.blue[2]`: LV_DIACRITIC
- a2-damit `study.accents.blue[5]`: LV_DIACRITIC
- a2-damit `study.accents.blue[7]`: LV_DIACRITIC
- a2-damit `study.accents.blue[8]`: LV_DIACRITIC
- a2-damit `study.accents.blue[9]`: LV_DIACRITIC
- a2-damit `study.accents.purple[3]`: LV_DIACRITIC, LV_WORD
- study-der-dank `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- study-der-dank `study.sectionAccents.tip.leftBlocks[1].text.purple[1]`: LV_DIACRITIC
- a2-darauf `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-darauf `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_DIACRITIC
- a2-darauf `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC, LV_WORD
- a2-darauf `study.sectionAccents.important[0].text.red[2]`: LV_DIACRITIC
- a2-darauf `study.accents.blue[1]`: LV_DIACRITIC
- a2-darauf `study.accents.blue[2]`: LV_DIACRITIC
- a2-darauf `study.accents.blue[3]`: LV_DIACRITIC
- a2-darauf `study.accents.blue[4]`: LV_DIACRITIC
- a2-darauf `study.accents.blue[7]`: LV_DIACRITIC
- a2-darauf `study.accents.blue[10]`: LV_DIACRITIC
- a2-darauf `study.accents.blue[11]`: LV_DIACRITIC
- a2-darauf `study.accents.green[2]`: LV_DIACRITIC
- a2-darauf `study.accents.green[3]`: LV_DIACRITIC
- a2-darauf `study.accents.orange[0]`: LV_DIACRITIC
- a2-darauf `study.accents.orange[1]`: LV_DIACRITIC
- a2-darauf `study.accents.purple[0]`: LV_DIACRITIC
- a2-darauf `study.accents.purple[1]`: LV_DIACRITIC
- a2-darüber `study.important.example`: LV_DIACRITIC
- a2-darüber `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-darüber `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-darüber `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_DIACRITIC
- a2-darüber `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-darüber `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-darüber `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-darüber `study.accents.blue[1]`: LV_DIACRITIC
- a2-darüber `study.accents.blue[3]`: LV_DIACRITIC
- a2-darüber `study.accents.blue[7]`: LV_DIACRITIC
- a2-darüber `study.accents.blue[10]`: LV_DIACRITIC
- a2-darüber `study.accents.blue[14]`: LV_DIACRITIC
- a2-darüber `study.accents.green[0]`: LV_DIACRITIC
- a2-darüber `study.accents.green[2]`: LV_DIACRITIC
- a2-darüber `study.accents.green[3]`: LV_DIACRITIC
- a2-darüber `study.accents.green[4]`: LV_DIACRITIC
- a2-darüber `study.accents.purple[0]`: LV_DIACRITIC
- a2-darüber `study.accents.purple[1]`: LV_DIACRITIC
- a2-darüber `study.accents.purple[2]`: LV_DIACRITIC
- a2-darüber `study.accents.purple[3]`: LV_DIACRITIC
- a2-darum `study.important.example`: LV_DIACRITIC, LV_WORD
- a2-darum `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-darum `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-darum `study.accents.blue[2]`: LV_DIACRITIC
- a2-darum `study.accents.blue[3]`: LV_DIACRITIC
- a2-darum `study.accents.blue[4]`: LV_DIACRITIC
- a2-darum `study.accents.blue[11]`: LV_DIACRITIC
- a2-darum `study.accents.blue[14]`: LV_DIACRITIC
- a2-darum `study.accents.green[1]`: LV_DIACRITIC
- a2-darum `study.accents.purple[0]`: LV_DIACRITIC, LV_WORD
- a2-doch `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-doch `study.sectionAccents.tip.leftBlocks[0].text.yellow[5]`: LV_DIACRITIC, LV_WORD
- a2-doch `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC, LV_WORD
- a2-doch `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC, LV_WORD
- a2-doch `study.accents.blue[1]`: LV_DIACRITIC
- a2-doch `study.accents.blue[2]`: LV_DIACRITIC
- a2-doch `study.accents.blue[4]`: LV_DIACRITIC
- a2-doch `study.accents.blue[5]`: LV_DIACRITIC
- a2-doch `study.accents.blue[6]`: LV_DIACRITIC
- a2-doch `study.accents.blue[7]`: LV_DIACRITIC
- a2-doch `study.accents.blue[8]`: LV_DIACRITIC
- a2-doch `study.accents.blue[11]`: LV_DIACRITIC
- a2-doch `study.accents.blue[15]`: LV_DIACRITIC
- a2-doch `study.accents.blue[17]`: LV_DIACRITIC, LV_WORD
- a2-doch `study.accents.purple[0]`: LV_DIACRITIC
- a2-doch `study.accents.purple[1]`: LV_DIACRITIC
- a2-doch `study.accents.purple[5]`: LV_DIACRITIC
- a2-durch `study.sectionAccents.explanation.text.purple[3]`: LV_DIACRITIC
- a2-eben `study.important.example`: LV_DIACRITIC
- a2-eben `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_DIACRITIC
- a2-eben `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-eben `study.sectionAccents.important[0].text.orange[0]`: LV_DIACRITIC
- a2-eben `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-eben `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-eben `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-eben `study.accents.blue[0]`: LV_DIACRITIC
- a2-eben `study.accents.blue[2]`: LV_DIACRITIC
- a2-eben `study.accents.blue[3]`: LV_DIACRITIC
- a2-eben `study.accents.blue[6]`: LV_DIACRITIC
- a2-eben `study.accents.blue[15]`: LV_DIACRITIC
- a2-eben `study.accents.green[0]`: LV_DIACRITIC
- a2-eben `study.accents.orange[1]`: LV_DIACRITIC
- a2-eben `study.accents.purple[0]`: LV_DIACRITIC
- a2-eigentlich `study.important[1]`: PL_CHAR
- a2-einladen `study.important.example`: LV_DIACRITIC
- a2-einladen `study.sectionAccents.tip.leftBlocks[0].text.green[0]`: LV_DIACRITIC
- a2-einladen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-einladen `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_DIACRITIC
- a2-einladen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-einladen `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-einladen `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-einladen `study.accents.blue[1]`: LV_DIACRITIC
- a2-einladen `study.accents.blue[2]`: LV_DIACRITIC
- a2-einladen `study.accents.blue[6]`: LV_DIACRITIC
- a2-einladen `study.accents.blue[10]`: LV_DIACRITIC
- a2-einladen `study.accents.blue[15]`: LV_DIACRITIC
- a2-einladen `study.accents.green[1]`: LV_DIACRITIC
- a2-einladen `study.accents.green[3]`: LV_DIACRITIC
- a2-einladen `study.accents.orange[1]`: LV_DIACRITIC
- a2-einladen `study.accents.purple[0]`: LV_DIACRITIC
- a2-einladen `study.accents.purple[1]`: LV_DIACRITIC
- a2-einladen `study.accents.purple[2]`: LV_DIACRITIC
- a2-einladen `study.accents.purple[3]`: LV_DIACRITIC
- a2-einladen `study.accents.purple[4]`: LV_DIACRITIC
- a2-einschalten `study.important.example`: LV_DIACRITIC
- a2-einschalten `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-einschalten `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-einschalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-einschalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-einschalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-einschalten `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-einschalten `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-einschalten `study.accents.blue[2]`: LV_DIACRITIC
- a2-einschalten `study.accents.blue[3]`: LV_DIACRITIC
- a2-einschalten `study.accents.blue[5]`: LV_DIACRITIC
- a2-einschalten `study.accents.blue[6]`: LV_DIACRITIC
- a2-einschalten `study.accents.blue[7]`: LV_DIACRITIC
- a2-einschalten `study.accents.blue[13]`: LV_DIACRITIC
- a2-einschalten `study.accents.green[1]`: LV_DIACRITIC
- a2-einschalten `study.accents.green[2]`: LV_DIACRITIC
- a2-einschalten `study.accents.purple[0]`: LV_DIACRITIC
- a2-einschalten `study.accents.purple[1]`: LV_DIACRITIC
- a2-einschalten `study.accents.purple[2]`: LV_DIACRITIC
- a2-einschalten `study.accents.purple[3]`: LV_DIACRITIC
- a2-einsteigen `study.important.example`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.important[0].example.orange[1]`: LV_DIACRITIC
- a2-einsteigen `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[0]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[2]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[4]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[6]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[7]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[9]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[13]`: LV_DIACRITIC
- a2-einsteigen `study.accents.blue[16]`: LV_DIACRITIC
- a2-einsteigen `study.accents.green[0]`: LV_DIACRITIC
- a2-einsteigen `study.accents.green[2]`: LV_DIACRITIC
- a2-einsteigen `study.accents.orange[1]`: LV_DIACRITIC
- a2-einsteigen `study.accents.purple[0]`: LV_DIACRITIC
- a2-einsteigen `study.accents.purple[1]`: LV_DIACRITIC
- a2-einsteigen `study.accents.purple[2]`: LV_DIACRITIC
- a2-einsteigen `study.accents.purple[3]`: LV_DIACRITIC
- a2-einsteigen `study.accents.purple[4]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 151 | a2-damit | 321 | APPLIED |
| 152 | a2-danach-322 | 322 | APPLIED |
| 153 | study-der-dank | 323 | APPLIED |
| 154 | a2-darauf | 324 | APPLIED |
| 155 | a2-darüber | 325 | APPLIED |
| 156 | a2-darum | 326 | APPLIED |
| 157 | a2-davon | 328 | APPLIED |
| 158 | a2-davor | 329 | APPLIED |
| 159 | a2-dazu | 330 | APPLIED |
| 160 | a2-decke | 331 | APPLIED |
| 161 | a2-denn | 334 | APPLIED |
| 162 | a2-deshalb-338 | 338 | APPLIED |
| 163 | a2-deswegen-339 | 339 | APPLIED |
| 164 | a2-deutlich-340 | 340 | APPLIED |
| 165 | a2-dick | 341 | APPLIED |
| 166 | a2-doch | 346 | APPLIED |
| 167 | a2-doktor | 347 | APPLIED |
| 168 | a2-doppelt-349 | 349 | APPLIED |
| 169 | a2-Dorf-350 | 350 | APPLIED |
| 170 | a2-dorthin-351 | 351 | APPLIED |
| 171 | a2-draußen-352 | 352 | APPLIED |
| 172 | a2-drehen | 353 | APPLIED |
| 173 | a2-dreißigste-354 | 354 | APPLIED |
| 174 | a2-dreizehnte-356 | 356 | APPLIED |
| 175 | a2-drüben-359 | 359 | APPLIED |
| 176 | a2-drücken | 360 | APPLIED |
| 177 | a2-dünn | 364 | APPLIED |
| 178 | a2-durch | 365 | APPLIED |
| 179 | a2-e-mailen-368 | 368 | APPLIED |
| 180 | a2-eben | 369 | APPLIED |
| 181 | a2-ebenso-371 | 371 | APPLIED |
| 182 | a2-ebenso viel-372 | 372 | APPLIED |
| 183 | a2-echt-373 | 373 | APPLIED |
| 184 | a2-egal-374 | 374 | APPLIED |
| 185 | a2-ehrlich | 377 | APPLIED |
| 186 | a2-eigentlich | 378 | APPLIED |
| 187 | a2-einander-381 | 381 | APPLIED |
| 188 | a2-Eingang-383 | 383 | APPLIED |
| 189 | a2-einige-384 | 384 | APPLIED |
| 190 | a2-einladen | 387 | APPLIED |
| 191 | a2-einsam-390 | 390 | APPLIED |
| 192 | a2-einschalten | 391 | APPLIED |
| 193 | a2-einschlafen | 393 | APPLIED |
| 194 | a2-einsteigen | 394 | APPLIED |
| 195 | a2-eintritt | 395 | APPLIED |
| 196 | a2-einverstanden-397 | 397 | APPLIED |
| 197 | a2-Ellbogen-406 | 406 | APPLIED |
| 198 | a2-enden-408 | 408 | APPLIED |
| 199 | a2-eng | 410 | APPLIED |
| 200 | a2-entlang-414 | 414 | APPLIED |

## Branch

`cursor/cs-a2-repair-group04-6ea4`

_Generated: 2026-08-13T18:12:26.850Z_