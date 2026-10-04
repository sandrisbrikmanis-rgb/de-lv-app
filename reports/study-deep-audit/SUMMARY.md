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

Satura komits `e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e`. Blob atver lapu, raw ir tiešā lejupielāde.

- [reports/study-deep-and-accents/MANIFEST.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/MANIFEST.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/MANIFEST.md)
- [reports/study-deep-and-accents/SUMMARY.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/SUMMARY.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/SUMMARY.md)
- [reports/study-deep-and-accents/accent-changes.csv](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/accent-changes.csv) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/accent-changes.csv)
- [reports/study-deep-and-accents/accent-left-short.csv](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/accent-left-short.csv) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/accent-left-short.csv)
- [reports/study-deep-and-accents/accent-no-lv.csv](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/accent-no-lv.csv) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/accent-no-lv.csv)
- [reports/study-deep-and-accents/deep-audit.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/deep-audit.json) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/deep-audit.json)
- [reports/study-deep-and-accents/restore/README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/restore/README.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/restore/README.md)
- [reports/study-deep-and-accents/restore/part-01.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/restore/part-01.json) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/restore/part-01.json)
- [reports/study-deep-and-accents/restore/part-02.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/restore/part-02.json) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/restore/part-02.json)
- [reports/study-deep-and-accents/verification.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/verification.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-and-accents/verification.md)
- [reports/study-deep-audit/SUMMARY.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-audit/SUMMARY.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/reports/study-deep-audit/SUMMARY.md)
- [scripts/audit-study-de-deep.js](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/scripts/audit-study-de-deep.js) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/e9e43dc65e78b130460dd0ae9f2c6ec0f6cefa2e/scripts/audit-study-de-deep.js)

