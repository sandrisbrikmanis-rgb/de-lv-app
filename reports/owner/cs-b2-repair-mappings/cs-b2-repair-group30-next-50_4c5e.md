# CS–DE B2 REPAIR — GROUP 30

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 29
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-postlagernd-1463` | `csText` | `Na požádání` | `Poste restante • K vyzvednutí na poště` | LABOT |
| 2 | `b2-prägen-1464` | `csText` | `Razit peníze • Tlačit • Vnucovat • Tvořit • Dělat` | `Razit peníze • Otisknout • Vtisknout • Formovat • Vytvářet` | LABOT |
| 3 | `b2-prägnant-1465` | `csText` | `Živě vyjádřeno` | `Výstižný • Pregnantní` | LABOT |
| 4 | `b2-prämieren-1467` | `csText` | `Odměna` | `Ocenit • Odměnit` | LABOT |
| 5 | `b2-Quantität-1481` | `csText` | `Množství • Množství` | `Kvantita • Množství` | LABOT |
| 6 | `b2-quellen-1482` | `csText` | `Mokvat • Mokvat • Mokvat • Mokvat • Nabobtnat` | `Vytékat • Prýštit • Nasáknout • Promoknout • Nabobtnat` | LABOT |
| 7 | `b2-Quote-1485` | `csText` | `Kvóta` | `Kvóta` | NELABOT |
| 8 | `b2-Radierung-1487` | `csText` | `Broušení • Leptání` | `Lept • Ofort` | LABOT |
| 9 | `b2-Rain-1491` | `csText` | `Ježek` | `Mez • Hranice pole` | LABOT |
| 10 | `b2-ranzig-1492` | `csText` | `Žluklý • Hořký na smetanu • Tuk • Máslo` | `Žluklý • Hořký o smetaně • Tuku • Másle` | LABOT |
| 11 | `b2-rau-1493` | `csText` | `Hrubý • Hrubý • Hrubý • Chraplavý • Drsný • Nevlídný • Hrubý` | `Nerovný • Drsný • Hrubý • Chraplavý • Ostrý • Nevlídný • Neopracovaný` | LABOT |
| 12 | `b2-rechtlos-1498` | `csText` | `Nezákonný` | `Bezprávný • Bez práv` | LABOT |
| 13 | `b2-rechtmäßig-1499` | `csText` | `Právní` | `Zákonný • Oprávněný` | LABOT |
| 14 | `b2-rechtsfähig-1501` | `csText` | `Právní způsobilost` | `Právně způsobilý` | LABOT |
| 15 | `b2-Rechtsstaat-1502` | `csText` | `Stát právního státu` | `Právní stát` | LABOT |
| 16 | `b2-recken-1503` | `csText` | `Natáhnout • Natáhnout • Natáhnout • Natáhnout` | `Natahovat • Protahovat • Natahovat se • Protahovat se` | LABOT |
| 17 | `b2-redigieren-1505` | `csText` | `Upravit` | `Redigovat • Editovat` | LABOT |
| 18 | `b2-redselig-1506` | `csText` | `Upovídaný • Upovídaný` | `Hovorný • Upovídaný` | LABOT |
| 19 | `b2-Regenfront-1512` | `csText` | `Dešťová kapela` | `Dešťové pásmo • Dešťová fronta` | LABOT |

## OWNER validation note
- `b2-Quote-1485` (`Kvóta`) — **NELABOT**. Audita `PL_CHAR` ir false positive; `ó` ir korekts čehu burts.
- `b2-Rain-1491`: pašreizējais `Ježek` ir semantiski nepareizs vācu `Rain` nozīmei. DE lauks paliek READ-ONLY; labota tikai CS puse.
- Kartītes bez mapping šajā blokā apzināti paliek nemainītas.

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
- LABOT mappings: `18`
- NELABOT: `1`
- expected applied: `18/18`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
