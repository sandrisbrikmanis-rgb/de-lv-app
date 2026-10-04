# Tukšo DE lauku pieraksts

STAGE RESULT: PASS

Bāze ir origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`. Avots ir `window` masīva vm ielāde no `data/` un `www/data/`. Skripts ir `scripts/audit-de-empty-representation.js`. Tas neizmaina datus, `languages/`, `ui.js` un esošos `scripts/`.

Tukšuma klases: `empty` ir `""`; `null` ir vērtība null; `missing` ir lauks, kura objektā nav; `whitespace` ir ne-tukša virkne, kurai `trim()` atgriež `""`; `undefined` ir lauks ar vērtību undefined; `other` ir cits tips; `present` ir pārējā ne-tukšā virkne.

## LV skaits

LV ieraksti pa līmeņiem: A1 702, A2 1640, B1 3367, B2 2118, C1 572, C2 219. Summa 8618.

| lauks | empty | null | missing | whitespace | undefined | other | present |
|---|---:|---:|---:|---:|---:|---:|---:|
| de | 0 | 0 | 0 | 0 | 0 | 0 | 8618 |
| de_article | 0 | 0 | 3582 | 0 | 0 | 0 | 5036 |
| de_plural | 0 | 41 | 4041 | 0 | 0 | 0 | 4536 |
| level | 0 | 0 | 0 | 0 | 0 | 0 | 8618 |

Valodu katalogs `data/` ir bg, bs, cs, da, en, es, et, fi, fr, gr, hr, hu, is, it, lb, lt, mk, nb, nl, nn, pl, pt, ro, ru, sk, sl, sq, sr, sv, tr, uk. Sakritība ar 31 valodu sarakstu: jā.
Trūkstoši faili: 0.
Garuma atšķirības pret LV: 0.
`lv-compare.csv` rindas, kur lauka klase atšķiras no LV: 12.
`tree-compare.csv` rindas, kur `data` un `www/data` klase atšķiras: 0.
Whitespace trāpījumi: 0.

| dataset | de_article missing | de_article present | de_plural null | de_plural missing | de_plural present |
|---|---:|---:|---:|---:|---:|
| A1 | 363 | 339 | 1 | 412 | 289 |
| A2 | 687 | 953 | 10 | 794 | 836 |
| B1 | 1369 | 1998 | 18 | 1480 | 1869 |
| B2 | 948 | 1170 | 12 | 1097 | 1009 |
| C1 | 184 | 388 | 0 | 219 | 353 |
| C2 | 31 | 188 | 0 | 39 | 180 |

`""`, whitespace, undefined un other šūnas, kas nav 0: 0. `de` vai `level` rindas, kur present nav vienāds ar records: 0.
LV `de_plural` null indeksi ir `null-indexes.csv` (41). `www/data` sakrīt ar `data` pa klasēm, tāpēc tie paši indeksi ir abos kokos.
Vienīgā atšķirība no LV ir `kind-diffs.csv`: 12 rindas. Katrā ir viens B2 indekss, kur LV `de_plural` ir missing un mērķa valodā present.
A1 LV `de` empty ir 0, null 0, missing 0. Pilnā tabula valoda × dataset × lauks ir `counts.csv`.

## Koda vietas

`languages/**/*.js` un `www/languages/**/*.js`: 0 rindas ar `de_article` vai `de_plural`.
Koda rindas kopā, bez šī audita skripta: 781.
Neklasificētas: 0. Rindas, kur null vai undefined kļūst par tekstu vai met kļūdu: 23.

| klase | rindas |
|---|---:|
| assign_other | 8 |
| comment_or_doc | 7 |
| compare | 3 |
| copy_if_defined | 134 |
| copy_if_truthy | 25 |
| copy_raw | 47 |
| delete | 11 |
| falsy_test | 72 |
| filter_boolean | 2 |
| json_nullish | 20 |
| method_truthy_guard | 4 |
| name_or_literal | 331 |
| or_empty_string | 23 |
| or_null_value | 47 |
| search_bump | 2 |
| string_if_defined | 2 |
| string_truthy_guard | 10 |
| template_mixed | 1 |
| template_or_empty | 12 |
| template_truthy_guard | 20 |

Probe rezultāti ir `probes.csv`. `String(value || "")` no `""`, null un undefined dod `""`. `String(value)` no null dod tekstu null, no undefined dod tekstu undefined. Šablons `${value}` dara to pašu. `value.replace` uz null un undefined met TypeError. `JSON.stringify(value ?? null)` no `""` dod `"\"\""`, no null un undefined dod tekstu null. `[value].filter(Boolean)` visas trīs vērtības izmet. `.startsWith` un `.sort` uz šo lauku vērtībām kodā nav. `.startsWith` ir tikai uz lauka vārda literāļa.

Teksta vai TypeError rindas:

- `scripts/apply-cs-a2-final-closure-repair-v2-groups01-03.js:50` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-a2-final-closure-repair-v3-groups01-03.js:50` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-b1-final-2card-micro-repair.js:47` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-b1-repair-groups01-06.js:53` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-b1-repair-groups07-32.js:66` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-b1-targeted-regression-residual-groups01-03.js:49` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-c1-3-mismatch-micro-repair.js:98` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-c1-owner-copy-only.js:50` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/apply-cs-c2-owner-copy-only.js:50` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/audit-bs-b1-luna-regression-2-report.js:224` template_mixed text_null=yes text_undefined=yes throws=no
- `scripts/audit-cs-a2-v3-targeted-final-closure.js:95` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/audit-cs-b1-final-micro-regression-closure.js:98` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/audit-cs-b1-targeted-regression.js:100` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/audit-cs-c1-final-closure.js:64` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/audit-cs-c1-targeted-regression.js:83` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/audit-cs-c2-final-closure.js:43` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/audit-cs-c2-targeted-regression.js:89` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/lib/content-discovery/collectors/de-compliance.js:14` string_if_defined text_null=yes text_undefined=no throws=no
- `scripts/lib/content-discovery/collectors/de-compliance.js:15` string_if_defined text_null=yes text_undefined=no throws=no
- `scripts/run-cs-a2-final-closure-audit-v2.js:71` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/run-cs-a2-final-closure-audit.js:71` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/validate-cs-a2-final-main-integration.js:42` json_nullish text_null=yes text_undefined=no throws=no
- `scripts/validate-cs-b1-final-main-integration.js:44` json_nullish text_null=yes text_undefined=no throws=no

`ui.js` un `www/ui.js` lasa lauku caur `String(x || "")`, `normalizeIdText`, falsy `if` vai `.filter(Boolean)`. Šajās rindās `""`, null un undefined nepaliek teksts null vai undefined un nemet kļūdu. `www/wordRain.js` `normalizeText` ir `String(value || "").trim()`.

## Hashes

- `counts.csv` 6806eac2d0cb9a2d4746d7141831f777305904ab32c46fbb10872eae44e6efd0
- `lv-compare.csv` 94a6db67dccffe9c89019f4e66e5a60006b1e05e5173acb0b25e604f23b4e2b2
- `tree-compare.csv` f9f951034775accb7f56a2b5bd5308a05422297ef72ae87debaabd887d6d81d1
- `whitespace.csv` 6b8ee4ed134cceade05ab69eb00c41fcdb1ab89ad0d5447f4c90fc6a1162ef4b
- `length.csv` d1fb3e5e0e6ae72d19c957b31c3f8b2237bc985fe17779c812915579db802ba8
- `code-sites.csv` 247d9721c1ab3b521752dcb23935c53c410c50c6792da01a51701e0cc2e6160c
- `probes.csv` 6a01e3179c7e7630077a6cfa7a7e9e196f0dd901bce6fd9240f165acba125192
- `null-indexes.csv` 1e9a902f69eb1b5611b669b36bcc76605b1590ad6ee67695667326600aaf70f5
- `kind-diffs.csv` 07d195c3ab23d6ff34c0fdd459132cbba5ab7b9b5459b3ecc2f4482a00e9a073
