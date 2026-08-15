# CS–DE B2 REPAIR — GROUP 29

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 28
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Ölpest-1407` | `csText` | `Znečištění vody a pobřežní ropou` | `Znečištění vody a pobřeží ropou` | LABOT |
| 2 | `b2-Operator-1410` | `csText` | `Specialista na velkou počítačovou posádku` | `Specialista obsluhy velkých počítačů` | LABOT |
| 3 | `b2-Order-1412` | `csText` | `Příkaz • Příkaz • Úkol` | `Nařízení • Rozkaz • Úkol` | LABOT |
| 4 | `b2-orientalisch-1418` | `csText` | `Orientální • Orientální • Orientální` | `Orientální • Východní • Z Orientu` | LABOT |
| 5 | `b2-Ortszeit-1420` | `csText` | `Místního času` | `Místní čas` | LABOT |
| 6 | `b2-Parole-1428` | `csText` | `Heslo • Slogan` | `Heslo • Slogan` | NELABOT |
| 7 | `b2-parteilich-1431` | `csText` | `Partyzánské • Strany` | `Stranický • Strany` | LABOT |
| 8 | `b2-Pendelverkehr-1439` | `csText` | `Místní dojíždějící dopravu` | `Místní příměstská doprava` | LABOT |
| 9 | `b2-Personalakte-1442` | `csText` | `Osobní záležitost` | `Osobní spis` | LABOT |
| 10 | `b2-pfänden-1444` | `csText` | `Popsat majetek • Zástava` | `Sepsat majetek • Zabavit` | LABOT |
| 11 | `b2-Pfandschein-1445` | `csText` | `Znamení zástavy` | `Zástavní lístek` | LABOT |
| 12 | `b2-pfuschen-1447` | `csText` | `Špatný • Nekvalifikovaný • Lajdácká práce` | `Pracovat špatně • Neodborně • Ledabyle` | LABOT |
| 13 | `b2-Pieper-1450` | `csText` | `Pager` | `Pager • Pípák` | LABOT |
| 14 | `b2-pikiert-1451` | `csText` | `Pohoršen • Pohoršen • Pobouřen` | `Uražený • Dotčený • Pobouřený` | LABOT |
| 15 | `b2-Pilotsendung-1454` | `csText` | `Otvírák série` | `Úvodní pořad série` | LABOT |
| 16 | `b2-Pilotstudie-1455` | `csText` | `Úvod do výzkumné série` | `Úvodní studie výzkumné série` | LABOT |
| 17 | `b2-Plateau-1457` | `csText` | `Plochý kopec` | `Náhorní plošina` | LABOT |

## OWNER validation note
- `b2-Parole-1428` paliek **NELABOT**: `Heslo • Slogan` ir pieņemams dotā LV `parole • lozungs` atveidojums.
- Kartītes bez mapping šajā blokā apzināti paliek nemainītas.
- DE puse netiek mainīta pat tad, ja atsevišķa vācu leksēma varētu prasīt atsevišķu SOURCE_DE/OWNER izvērtējumu.

## COPY-ONLY apply noteikumi
1. Pirms katras LABOT izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. `NELABOT` ierakstu nemainīt.
5. DE laukus, ID/order un kartītes ārpus šī 50 kartīšu secības bloka nemainīt.
6. Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.
7. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
8. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `16`
- NELABOT: `1`
- expected applied: `16/16`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
