# Study dziļā pārbaude bez datu izmaiņām

Zars ir no #873 galvas `401bd0ca7035e57230e2cc831863bc52c546ebb6`. No #874 ir pārņemti tikai `scripts/audit-study-de-deep.js` un `reports/study-deep-and-accents/`. `data/` un `www/data/` nav mainīti. `sectionAccents` paliek kā #873.

#874 akcentu garuma izmaiņas šajā zarā nav. `reports/study-deep-and-accents/` ir tās atskaites kopija, nevis šī koka datu labojums.

## Dziļā pārbaude uz šī koka

`node scripts/audit-study-de-deep.js` salīdzina `comparison.word`, comparison piemēra vācu daļu, `examples.de`, variants vācu laukus, kartītes id un `study.id`.

| | TEXT | EXTRA | MISSING | ORDER |
|---|---:|---:|---:|---:|
| kopā | 0 | 0 | 0 | 0 |

31 valoda, līmeņi a1–c2 un visi lauki ir 0. Gadījumu saraksts ir tukšs.

| lauks | TEXT | EXTRA | MISSING | ORDER |
|---|---:|---:|---:|---:|
| comparison.word | 0 | 0 | 0 | 0 |
| comparison.example.de | 0 | 0 | 0 | 0 |
| examples.de | 0 | 0 | 0 | 0 |
| variants.article | 0 | 0 | 0 | 0 |
| variants.de | 0 | 0 | 0 | 0 |
| variants.plural | 0 | 0 | 0 | 0 |
| variants.example_de | 0 | 0 | 0 | 0 |
| id | 0 | 0 | 0 | 0 |
| study.id | 0 | 0 | 0 | 0 |
| card | 0 | 0 | 0 | 0 |

## Vārti

| pārbaude | rezultāts |
|---|---|
| git diff pret #873 | tikai `scripts/audit-study-de-deep.js` un `reports/` |
| git diff data www/data languages ui.js crowdin/content | tukšs |
| audit-study-de-deep | TEXT 0, EXTRA 0, MISSING 0, ORDER 0 |
| audit-de-consistency | TEXT 5414, MISSING 307, EXTRA 2, ORDER 0 |
| UNICODE_ONLY | 760 |

EXTRA 2 ir courseLessons, kā #873. A1–C2 EXTRA ir 0.

STAGE RESULT: PASS.

## Atvēršanai un lejupielādei

Blob saites ar pilnu komita SHA ir MANIFEST.md. Tās tiek ierakstītas pēc satura komita.
