# CS–DE A2 Repair Group 08

COPY-ONLY repair from `scripts/cs-a2-repair-group08-spec.json`.

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

a2-lebendig-867, a2-Leder-871, a2-leeren-873, a2-leiden, a2-leihen, a2-leiter, a2-leitung, a2-leuchten-884, a2-lieber-885, a2-liegen, a2-legen, a2-Lippenstift-893, a2-loben-895, a2-los, a2-losfahren-900, a2-Lüge-903, a2-Lust-905, a2-männlich-911, a2-Mappe-913, a2-Markt-916, a2-Medikament-924, a2-Medizin-925, a2-meinen, a2-Meister-931, a2-merken, a2-mieten-940, a2-mischen-943, a2-Mitglied-947, a2-mittel, a2-Möbel-954, a2-möglich-958, a2-monatlich-960, a2-Muster-971, a2-na-gut, a2-nachdenken-978, a2-nagel, a2-nah-990, a2-näher-993, a2-Nahrungsmittel-995, a2-naschen-997, a2-nervös-1004, a2-nicken-1011, a2-niedlich-1012, a2-niesen-1015, a2-Norden-1018, a2-note, a2-Notizbuch-1023, a2-nu-1024

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 29 |
| LV remnants (repaired cards) | 99 |
| regression findings documented | 128 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-leihen | Můžete, Nájem, nopirkt, laiku |
| a2-leiter | Jdu, Vyjděte |
| a2-leitung | Olovo |
| a2-meinen | Věřím, myšlenku |
| a2-merken | Všimli, Zapamatovat, Mám |
| a2-mittel | Lék |
| a2-nagel | Stříhal |
| a2-note | Značka |

## LV remnants (documented, not auto-fixed)

- a2-leihen `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-leihen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-leihen `study.accents.blue[1]`: LV_DIACRITIC
- a2-leihen `study.accents.blue[2]`: LV_DIACRITIC
- a2-leihen `study.accents.blue[3]`: LV_DIACRITIC
- a2-leihen `study.accents.blue[4]`: LV_DIACRITIC
- a2-leihen `study.accents.blue[10]`: LV_DIACRITIC
- a2-leihen `study.accents.blue[15]`: LV_DIACRITIC
- a2-leihen `study.accents.blue[16]`: LV_DIACRITIC
- a2-leihen `study.accents.green[0]`: LV_DIACRITIC
- a2-leihen `study.accents.green[1]`: LV_DIACRITIC
- a2-leihen `study.accents.orange[1]`: LV_DIACRITIC
- a2-leihen `study.accents.purple[0]`: LV_DIACRITIC
- a2-leihen `study.accents.purple[1]`: LV_DIACRITIC
- a2-leihen `study.accents.purple[2]`: LV_DIACRITIC
- a2-leihen `study.accents.purple[3]`: LV_DIACRITIC
- a2-leitung `study.important.example`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.tip.leftBlocks[0].text.yellow[3]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].text.green[0]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].text.orange[0]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].text.red[3]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].text.red[4]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-leitung `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-leitung `study.accents.blue[3]`: LV_DIACRITIC
- a2-leitung `study.accents.blue[4]`: LV_DIACRITIC
- a2-leitung `study.accents.blue[9]`: LV_DIACRITIC
- a2-leitung `study.accents.blue[10]`: LV_DIACRITIC
- a2-leitung `study.accents.blue[11]`: LV_DIACRITIC
- a2-leitung `study.accents.blue[12]`: LV_DIACRITIC
- a2-leitung `study.accents.blue[13]`: LV_DIACRITIC
- a2-leitung `study.accents.green[2]`: LV_DIACRITIC
- a2-leitung `study.accents.orange[1]`: LV_DIACRITIC
- a2-leitung `study.accents.purple[0]`: LV_DIACRITIC
- a2-leitung `study.accents.purple[2]`: LV_DIACRITIC
- a2-leitung `study.accents.purple[4]`: LV_DIACRITIC
- a2-meinen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-meinen `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-meinen `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_DIACRITIC
- a2-meinen `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-meinen `study.accents.blue[1]`: LV_DIACRITIC
- a2-meinen `study.accents.blue[3]`: LV_DIACRITIC
- a2-meinen `study.accents.blue[5]`: LV_DIACRITIC
- a2-meinen `study.accents.blue[6]`: LV_DIACRITIC
- a2-meinen `study.accents.blue[11]`: LV_DIACRITIC
- a2-meinen `study.accents.blue[12]`: LV_DIACRITIC
- a2-meinen `study.accents.blue[15]`: LV_DIACRITIC
- a2-meinen `study.accents.green[0]`: LV_DIACRITIC
- a2-meinen `study.accents.yellow[0]`: LV_DIACRITIC
- a2-meinen `study.accents.yellow[2]`: LV_DIACRITIC
- a2-meinen `study.accents.orange[0]`: LV_DIACRITIC
- a2-meinen `study.accents.orange[1]`: LV_DIACRITIC
- a2-meinen `study.accents.purple[0]`: LV_DIACRITIC
- a2-meinen `study.accents.purple[1]`: LV_DIACRITIC
- a2-meinen `study.accents.purple[2]`: LV_DIACRITIC
- a2-meinen `study.accents.purple[3]`: LV_DIACRITIC
- a2-Mode-955 `lv`: PL_CHAR
- a2-na-gut `study.tip.example`: LV_DIACRITIC
- a2-na-gut `study.sectionAccents.tip.right.purple[0]`: LV_DIACRITIC
- a2-nervös-1004 `lv`: PL_CHAR
- a2-note `study.translation`: PL_CHAR
- a2-note `study.comparison[4].meaning`: PL_CHAR
- a2-note `study.comparison[4].example`: PL_CHAR
- a2-note `study.important.example`: LV_DIACRITIC
- a2-note `study.sectionAccents.comparison[4].meaning.purple[0]`: PL_CHAR
- a2-note `study.sectionAccents.comparison[4].meaning.purple[1]`: PL_CHAR
- a2-note `study.sectionAccents.comparison[4].meaning.purple[2]`: PL_CHAR
- a2-note `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-note `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-note `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-note `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-note `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-note `study.sectionAccents.important[0].text.red[1]`: LV_DIACRITIC
- a2-note `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-note `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-note `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-note `study.accents.blue[1]`: LV_DIACRITIC
- a2-note `study.accents.blue[5]`: LV_DIACRITIC
- a2-note `study.accents.blue[6]`: LV_DIACRITIC
- a2-note `study.accents.blue[7]`: LV_DIACRITIC
- a2-note `study.accents.blue[8]`: LV_DIACRITIC
- a2-note `study.accents.blue[9]`: LV_DIACRITIC
- a2-note `study.accents.blue[10]`: LV_DIACRITIC
- a2-note `study.accents.blue[11]`: LV_DIACRITIC
- a2-note `study.accents.blue[12]`: LV_DIACRITIC
- a2-note `study.accents.blue[14]`: LV_DIACRITIC
- a2-note `study.accents.green[2]`: LV_DIACRITIC
- a2-note `study.accents.orange[0]`: LV_DIACRITIC
- a2-note `study.accents.purple[0]`: LV_DIACRITIC
- a2-note `study.accents.purple[1]`: LV_DIACRITIC
- a2-note `study.accents.purple[2]`: LV_DIACRITIC
- a2-note `study.accents.purple[3]`: LV_DIACRITIC
- a2-note `study.accents.purple[4]`: LV_DIACRITIC
- a2-note `study.accents.red[1]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 351 | a2-lebendig-867 | 867 | APPLIED |
| 352 | a2-Leder-871 | 871 | APPLIED |
| 353 | a2-leeren-873 | 873 | APPLIED |
| 354 | a2-Leid-876 | 876 | ALREADY_CORRECT |
| 355 | a2-leiden | 877 | APPLIED |
| 356 | a2-leihen | 878 | APPLIED |
| 357 | a2-leiter | 880 | APPLIED |
| 358 | a2-leitung | 881 | APPLIED |
| 359 | a2-leuchten-884 | 884 | APPLIED |
| 360 | a2-lieber-885 | 885 | APPLIED |
| 361 | a2-liegen | 889 | APPLIED |
| 362 | a2-legen | 890 | APPLIED |
| 363 | a2-Lippenstift-893 | 893 | APPLIED |
| 364 | a2-loben-895 | 895 | APPLIED |
| 365 | a2-los | 899 | APPLIED |
| 366 | a2-losfahren-900 | 900 | APPLIED |
| 367 | a2-Lüge-903 | 903 | APPLIED |
| 368 | a2-Lust-905 | 905 | APPLIED |
| 369 | a2-männlich-911 | 911 | APPLIED |
| 370 | a2-Mappe-913 | 913 | APPLIED |
| 371 | a2-Markt-916 | 916 | APPLIED |
| 372 | a2-Medikament-924 | 924 | APPLIED |
| 373 | a2-Medizin-925 | 925 | APPLIED |
| 374 | a2-meinen | 928 | APPLIED |
| 375 | a2-Meister-931 | 931 | APPLIED |
| 376 | a2-merken | 936 | APPLIED |
| 377 | a2-mieten-940 | 940 | APPLIED |
| 378 | a2-mischen-943 | 943 | APPLIED |
| 379 | a2-Mitglied-947 | 947 | APPLIED |
| 380 | a2-mittel | 951 | APPLIED |
| 381 | a2-Möbel-954 | 954 | APPLIED |
| 382 | a2-Mode-955 | 955 | ALREADY_CORRECT |
| 383 | a2-möglich-958 | 958 | APPLIED |
| 384 | a2-monatlich-960 | 960 | APPLIED |
| 385 | a2-Muster-971 | 971 | APPLIED |
| 386 | a2-na-gut | 975 | APPLIED |
| 387 | a2-nachdenken-978 | 978 | APPLIED |
| 388 | a2-nagel | 989 | APPLIED |
| 389 | a2-nah-990 | 990 | APPLIED |
| 390 | a2-näher-993 | 993 | APPLIED |
| 391 | a2-Nahrungsmittel-995 | 995 | APPLIED |
| 392 | a2-naschen-997 | 997 | APPLIED |
| 393 | a2-nervös-1004 | 1004 | APPLIED |
| 394 | a2-nicken-1011 | 1011 | APPLIED |
| 395 | a2-niedlich-1012 | 1012 | APPLIED |
| 396 | a2-niesen-1015 | 1015 | APPLIED |
| 397 | a2-Norden-1018 | 1018 | APPLIED |
| 398 | a2-note | 1019 | APPLIED |
| 399 | a2-Notizbuch-1023 | 1023 | APPLIED |
| 400 | a2-nu-1024 | 1024 | APPLIED |

## Branch

`cursor/cs-a2-repair-group08-6ea4`

_Generated: 2026-08-13T19:21:55.850Z_