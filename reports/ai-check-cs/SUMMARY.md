# Čehu AI pāru sagatavošana

STAGE RESULT: NEEDS OWNER REVIEW

Standarts: MASTER 1.20, `origin/main` `9b44e89506a66a39e6ca375d6106566396ef8f10`. Bāze: #881 satura commits `fdc3349e21961465c41dc0b2f6aed2cf93c3deed`. AI nav izsaukts. Tīkls nav lietots. Dati nav mainīti.

Ievade: A solis 8618 rindas, apgrieztā pārbaude 8618 rindas, `data/cs/{līmenis}.js` un LV glosas `data/{līmenis}.js`. Indeksi sakrīt.

## Pārklasifikācija

RECHECK_CONFIRMED daļas: 120. Ieraksti, kuros vismaz viena daļa pārgāja: 120.

- UNICODE: 98
- SPACE_HYPHEN: 1
- REFLEXIVE: 18
- DIACRITIC: 3

Salīdzinājums ir pret glabātajiem A ekvivalentiem (līdz 3 vārdiem). Apgriezti apstiprinātās daļas jau ir slēgtas un šeit netiek skaitītas. Brille → Brýle ir UNICODE, jo `Brýle` un glabātais `brýle` sakrīt pēc NFC un casefold.

### UNICODE

| level | index | de | cs daļa | ekvivalents |
|---|---:|---|---|---|
| a1 | 110 | Brille | Brýle | brýle brejle |
| a1 | 138 | Dienstag | Úterý | úterý úterek |
| a1 | 160 | Eltern | Rodiče | rodiče |
| a1 | 251 | Großeltern | Prarodiče | prarodiče |
| a1 | 489 | Radiergummi | Guma | guma na gumování |
| a2 | 26 | Aerobic | Aerobik | aerobik |
| a2 | 153 | Augentropfen | Oční kapky | oční kapky |
| a2 | 177 | Autounfall | Nehoda | automobilová nehoda |
| a2 | 248 | bevor | Než | dřív než |
| a2 | 274 | Bonbon | Bonbon | bonbon cukrátko |

### SPACE_HYPHEN

| level | index | de | cs daļa | ekvivalents |
|---|---:|---|---|---|
| a1 | 159 | E-Mail | E-mail | e - mail |

### REFLEXIVE

| level | index | de | cs daļa | ekvivalents |
|---|---:|---|---|---|
| a1 | 68 | baden | Koupat se | koupat |
| a1 | 646 | sich waschen | Mýt se | mýt |
| a2 | 108 | aufdrängen | Vnucovat se | vnucovat |
| a2 | 1125 | sich rasieren | Holit se | holit |
| b1 | 108 | sich amüsieren | Bavit se | bavit |
| b1 | 200 | sich aufregen | Rozčilovat se | rozčilovat |
| b1 | 765 | sich entwickeln | Rozvíjet se | rozvíjet |
| b1 | 1935 | mustern | Prohlížet si | prohlížet |
| b1 | 2042 | orientieren | Orientovat se | orientovat |
| b1 | 3054 | sich verbreiten | Šířit se | šířit |

### DIACRITIC

| level | index | de | cs daļa | ekvivalents |
|---|---:|---|---|---|
| c1 | 143 | Schwiegereltern | Tchán a tchyně | tchán a tchýně |
| c2 | 72 | sich verschlechtern | Zhoršovat se | zhořsovat |
| c2 | 187 | Preisausschreiben | Soutěž | soutěz o ceny |

## Mehāniskās klases

| klase | skaits | a1 | a2 | b1 | b2 | c1 | c2 |
|---|---:|---:|---:|---:|---:|---:|---:|
| ABBREVIATION_LEAK | 21 | 0 | 0 | 2 | 19 | 0 | 0 |
| FOREIGN_LETTERS | 3 | 0 | 0 | 0 | 3 | 0 | 0 |
| SCRIPT_MISMATCH | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| SAME_AS_LV | 50 | 8 | 9 | 15 | 16 | 1 | 1 |
| EXCLUDED_META | 4 | 4 | 0 | 0 | 0 | 0 | 0 |

Šīs čehu vārda daļas AI partijās nav. Tās ir `mechanical-flags.csv`.

## Pāri

Pāri: 4318. Vidējais LV nozīmju skaits pārī: 1.74. Unikāli ieraksti pāros: 3511. To vidējais k: 1.44. Ieraksti ar k ≥ 2: 1013.

| līmenis | pāri |
|---|---:|
| a1 | 101 |
| a2 | 364 |
| b1 | 1058 |
| b2 | 2192 |
| c1 | 435 |
| c2 | 168 |

Slīpsvītra paliek vienā vārdā. AI iet tikai daļa, ko neapstiprina A, apgrieztā pārbaude vai RECHECK_CONFIRMED un ko neizslēdz mehāniskais filtrs.

## Kontroles un partijas

Pozitīvās kontroles: 216. Negatīvās kontroles: 216. Pozitīvo kandidātu kopa: 4155. Sēkla: 20261006.

Pozitīvās pa līmeņiem: a1 28, a2 52, b1 104, b2 21, c1 8, c2 3.

Partijas: 24. Katrā ir 200 rindas, izņemot pēdējo, kurā ir 150.

Rindas partijā, pa failiem:

- batch-001.md: 200
- batch-002.md: 200
- batch-003.md: 200
- batch-004.md: 200
- batch-005.md: 200
- batch-006.md: 200
- batch-007.md: 200
- batch-008.md: 200
- batch-009.md: 200
- batch-010.md: 200
- batch-011.md: 200
- batch-012.md: 200
- batch-013.md: 200
- batch-014.md: 200
- batch-015.md: 200
- batch-016.md: 200
- batch-017.md: 200
- batch-018.md: 200
- batch-019.md: 200
- batch-020.md: 200
- batch-021.md: 200
- batch-022.md: 200
- batch-023.md: 200
- batch-024.md: 150

OWNER darbs: 24 partijas × 2 AI = 48 ielīmējumi. Cursor atbildes nesagatavo.

Kontroļu atslēga ir `control-key.csv`. Partiju failos tās nav.

