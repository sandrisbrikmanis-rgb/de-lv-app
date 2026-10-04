# Study dziļā pārbaude un akcenti

Bāze #873 `401bd0ca7035e57230e2cc831863bc52c546ebb6`. LV faili nav mainīti.

## Dziļā pārbaude

`scripts/audit-study-de-deep.js` salīdzina comparison.word, comparison piemēra vācu daļu, examples.de, variants vācu laukus, id un study.id.

| | TEXT | EXTRA | MISSING | ORDER |
|---|---:|---:|---:|---:|
| kopā | 0 | 0 | 0 | 0 |

Visi 31 valodu, visi līmeņi (a1, a2, b1, b2, c1, c2) un visi lauki ir 0. Gadījumu saraksts ir tukšs.

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

## Akcentu saturs

sectionAccents satur gan vācu terminus, gan tulkojuma vārdus.

| | skaits |
|---|---:|
| virknes ar burtiem | 643042 |
| vācu termini | 457470 |
| tulkojuma vārdi | 185487 |
| masīva ieraksti | 170391 |
| ieraksti ar tulkojumu | 93256 |
| ieraksti tikai ar vācu terminiem | 66535 |

Tulkojuma vārdi:

- bg a1 a1-besuch explanation (translation): apmeklējums
- bs a1 a1-sprechen-study explanation (translation): Govoriti
- cs a1 a1-sprechen-study explanation (translation): Hlavní
- da a1 a1-sprechen-study explanation (translation): Hovedidé
- en a1 a1-also examples (translation): It's
- es a1 a1-sprechen-study explanation (translation): hablar
- et a1 a1-an examples (translation): seina
- fi a1 a1-an examples (translation): seina
- fr a1 a1-sprechen-study explanation (translation): Idée
- gr a1 a1-sprechen-study explanation (translation): runāt

Tikai vācu ieraksti:

- bg a1 a1-sprechen-study examples: spreche
- bg a1 a1-klein-study examples: klein
- bg a1 a1-an examples: an
- bg a1 a1-ab examples: ab
- bg a1 a1-aber examples: aber
- bg a1 a1-also examples: also
- bg a1 a1-auch-study examples: auch
- bg a1 a1-auf examples: auf
- bg a1 a1-aus examples: aus
- bg a1 a1-aufs examples: aufs

Tāpēc LV sectionAccents masīvi netiek kopēti pāri esošajiem ierakstiem. Garums tiek izlīdzināts pret Study satura masīvu: garākie saīsināti, īsākie papildināti ar LV ierakstiem. Esošie ieraksti paliek.

## Garuma izlīdzināšana

| darbība | skaits |
|---|---:|
| shorten | 200 |
| pad | 718 |
| create | 368 |
| sasniedz satura garumu | 1135 |
| papildināts tikai līdz LV masīva galam | 151 |
| atstāts, LV masīvs jau tikpat īss | 4797 |
| nav LV masīva | 39 |
| faili | 74 |

Pēc izmaiņām 43866 sadaļās, kur LV masīvs ir, akcentu garums ir vienāds ar satura garumu. 4948 sadaļās LV akcentu masīvs ir īsāks par saturu, tāpēc garums paliek vienāds ar LV masīvu un ir īsāks par saturu. LV netiek mainīts un jauni akcentu ieraksti netiek izgudroti.

Saīsinātie:

- bg a1 a1-bringen examples: 4 → 3 (saturs 3)
- bg a1 a1-ein comparison: 6 → 4 (saturs 4)
- bg a1 a1-es examples: 6 → 4 (saturs 4)
- bg a1 a1-es comparison: 6 → 2 (saturs 2)
- bg a1 a1-finden comparison: 4 → 1 (saturs 1)
- bs a1 a1-bringen examples: 4 → 3 (saturs 3)
- bs a1 a1-ein comparison: 6 → 4 (saturs 4)
- bs a1 a1-es comparison: 6 → 2 (saturs 2)
- bs a1 a1-finden examples: 4 → 3 (saturs 3)
- bs a1 a1-finden comparison: 4 → 1 (saturs 1)

Papildinātie:

- bg a1 a1-bitte important: 1 → 2 (saturs 3)
- bg a1 a1-bitte-study important: 1 → 2 (saturs 3)
- bg a1 a1-halten important: 2 → 3 (saturs 3)
- bg a1 a1-hoch-study tip: 1 → 2 (saturs 2)
- bg a1 a1-hoch-study important: 1 → 2 (saturs 3)
- cs a1 a1-halten important: 2 → 3 (saturs 3)
- cs a1 a1-hoch-study tip: 1 → 2 (saturs 2)
- cs a1 a1-hoch-study important: 1 → 2 (saturs 3)
- da a1 a1-an important: 1 → 2 (saturs 2)
- da a1 a1-ab important: 1 → 2 (saturs 2)

Jaunie no LV:

- en a1 a1-es info: 0 → 2 (saturs 2)
- es a1 a1-es info: 0 → 2 (saturs 2)
- lb a1 a1-werden important: 0 → 2 (saturs 2)
- lb a1 a1-wetter tip: 0 → 2 (saturs 2)
- lb a1 a1-wetter important: 0 → 2 (saturs 2)
- lb a1 a1-wie tip: 0 → 2 (saturs 2)
- lb a1 a1-wie important: 0 → 3 (saturs 3)
- lb a1 a1-zu important: 0 → 2 (saturs 2)
- lb a1 a1-zug important: 0 → 2 (saturs 2)
- lb a1 a1-fernsehen-study tip: 0 → 1 (saturs 2)

Atstāti, jo LV masīvs ir īsāks par saturu:

- bg a1 a1-sprechen-study tip: akcents 1, saturs 2, LV 1
- bg a1 a1-sprechen-study important: akcents 1, saturs 2, LV 1
- bg a1 a1-klein-study tip: akcents 1, saturs 2, LV 1
- bg a1 a1-klein-study important: akcents 1, saturs 2, LV 1
- bg a1 a1-auch-study tip: akcents 1, saturs 2, LV 1
- bg a1 a1-auch-study important: akcents 1, saturs 3, LV 1
- bg a1 a1-bis important: akcents 1, saturs 3, LV 1
- bg a1 a1-bringen comparison: akcents 4, saturs 5, LV 4
- bg a1 a1-bringen important: akcents 2, saturs 3, LV 2
- bg a1 a1-ein examples: akcents 3, saturs 4, LV 3

Bez LV masīva:

- cs a1 a1-schauen-study comparison: akcents 2
- en a1 a1-sprechen-study comparison: akcents 2
- en a1 a1-ganz-study examples: akcents 4
- en a1 a1-ganz-study comparison: akcents 2
- en a1 a1-ganz-study tip: akcents 2
- en a1 a1-ganz-study important: akcents 2
- et a1 a1-euch examples: akcents 5
- et a1 a1-euch comparison: akcents 3
- et a1 a1-liter examples: akcents 2
- et a1 a1-liter comparison: akcents 3

## Vārti

Dziļā pārbaude: TEXT 0, EXTRA 0, MISSING 0, ORDER 0. audit-de-consistency: TEXT 5414, MISSING 307, EXTRA 2, ORDER 0. audit-lv-de-verify skaitļi sakrīt ar bāzi. node --check: 148 faili, kļūmes 0.

Akcentu garums nav vienāds ar satura garumu 4948 sadaļās. STAGE RESULT: PARTIAL.

## Atvēršanai un lejupielādei

Satura komits `c4661c37a5018e40be01b32e93b62a43a3534170`. Blob atver lapu, raw ir tiešā lejupielāde.

- [reports/study-deep-and-accents/SUMMARY.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/SUMMARY.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/SUMMARY.md)
- [reports/study-deep-and-accents/accent-changes.csv](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/accent-changes.csv) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/accent-changes.csv)
- [reports/study-deep-and-accents/accent-left-short.csv](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/accent-left-short.csv) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/accent-left-short.csv)
- [reports/study-deep-and-accents/accent-no-lv.csv](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/accent-no-lv.csv) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/accent-no-lv.csv)
- [reports/study-deep-and-accents/deep-audit.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/deep-audit.json) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/deep-audit.json)
- [reports/study-deep-and-accents/restore/README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/restore/README.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/restore/README.md)
- [reports/study-deep-and-accents/restore/part-01.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/restore/part-01.json) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/restore/part-01.json)
- [reports/study-deep-and-accents/restore/part-02.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/restore/part-02.json) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/restore/part-02.json)
- [reports/study-deep-and-accents/verification.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/verification.md) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/reports/study-deep-and-accents/verification.md)
- [scripts/align-study-accents.js](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/scripts/align-study-accents.js) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/scripts/align-study-accents.js)
- [scripts/audit-study-de-deep.js](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/scripts/audit-study-de-deep.js) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/scripts/audit-study-de-deep.js)
- [scripts/restore-study-accents.js](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/c4661c37a5018e40be01b32e93b62a43a3534170/scripts/restore-study-accents.js) · [raw](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/c4661c37a5018e40be01b32e93b62a43a3534170/scripts/restore-study-accents.js)

