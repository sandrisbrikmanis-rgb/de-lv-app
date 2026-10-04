# Verifikācijas skaitļi

STAGE RESULT: PARTIAL

Datums: 2026-10-04. Bāze: origin/main f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d.

## Diff

| mērs | vērtība |
|---|---:|
| faili data un www/data | 192 |
| pievienotās rindas | 448 |
| dzēstās rindas | 128 |
| rindas, kas nav de_plural | 0 |
| 64 × N | 448 |
| identitātes nesakritības | 0 |

128 dzēšanas ir `"de_plural": null` aizstāšana. 64 failos ir dzēšana, 128 rindas. No tām 4 ir LV A2 (`data/a2.js` un `www/data/a2.js`, pa 2). 124 ir mērķvalodu faili, kuros lauks jau bija.

## de-consistency

| mērs | pirms | pēc |
|---|---:|---:|
| MISMATCHES | 7593 | 7593 |
| de_plural MISMATCH | 12 | 12 |
| CHECKED_FIELDS | 2386054 | 2386364 |
| lvAnomalies | 618 | 611 |
| COVERAGE | 99.5396 | 99.5397 |

12 ir tikai B2 indekss 1443 Pfahlbau, valodas et fi is nb nn sv, koki data un www, lang vērtība `die Pfahlbauten`, LV vērtība tukša.

## lv-de-verify

| mērs | pirms | pēc |
|---|---:|---:|
| OBSERVATION | 500 | 493 |
| EMPTY_PLURAL lietvārds | 500 | 493 |
| EMPTY_PLURAL kolonna | 4082 | 4075 |
| FINDING | 80 | 80 |
| NEEDS_SOURCE_REVIEW | 7164 | 7164 |
| REVIEW | 52 | 52 |
| PLURAL_STEM_CHECK | 21 | 21 |
| CASE_AND_WHITESPACE | 0 | 0 |
| SAME_LV | 53 | 53 |
| DIFFERENT_LV | 27 | 27 |
| indikācija | 9 | 8 |

A1 EMPTY_PLURAL 413 → 410. A2 804 → 801. B1 1498 → 1497. B2, C1, C2 bez izmaiņas.

## plural-source-check, kešs

Nemainītā atlase pēc aizpildes: 499 rindas.

| kategorija | pirms (506) | pēc (499) |
|---|---:|---:|
| CONSISTENT | 291 | 291 |
| MISSING_PLURAL_IN_DATA | 65 | 58 |
| NEEDS_SOURCE_REVIEW | 54 | 54 |
| NOT_IN_SOURCE | 51 | 51 |
| AMBIGUOUS | 17 | 17 |
| REVIEW_RARE_PLURAL | 16 | 16 |
| DUDEN_FORMAL_ONLY | 10 | 10 |
| SOURCES_DISAGREE | 1 | 1 |
| PLURAL_FORM_MISMATCH | 1 | 1 |

Septiņi aizpildītie ieraksti atkārtotā salīdzinājumā: CONSISTENT 2 (Urlaub, Wiedersehen), NEEDS_SOURCE_REVIEW 5 (Ende, Morgen, Wäsche, Werbung, Schaden). CONSISTENT +7 nav sasniegts.

Jaunu Duden pieprasījumu nav. 4491 lemmu plāns nav palaists.
