# CS–DE B2 REPAIR — GROUP 28

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 27
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-nachgiebig-1352` | `csText` | `Blahosklonný` | `Poddajný • Ústupný` | LABOT |
| 2 | `b2-Nährboden-1360` | `csText` | `Střední` | `Živná půda` | LABOT |
| 3 | `b2-namens-1361` | `csText` | `Ve jménu • V příjmení` | `Jménem • Příjmením` | LABOT |
| 4 | `b2-Neuauflage-1373` | `csText` | `Re • Přepracované vydání` | `Nové vydání • Přepracované vydání` | LABOT |
| 5 | `b2-neuerdings-1374` | `csText` | `Nedávno • V těchto dnech • Znovu • Znovu` | `Nedávno • V poslední době • Nově • Znovu` | LABOT |
| 6 | `b2-Neuerscheinung-1376` | `csText` | `Nové • Nové vydání` | `Novinka • Nové vydání` | LABOT |
| 7 | `b2-Neuerung-1377` | `csText` | `Upgrade` | `Inovace • Novinka` | LABOT |
| 8 | `b2-Nichtbeachtung-1379` | `csText` | `Ignorovat • Ignorovat` | `Nedodržení • Ignorování` | LABOT |
| 9 | `b2-nichtig-1380` | `csText` | `Prázdný • Prázdný • Maličkost • Bezvýznamný` | `Neplatný • Zrušený • Nicotný • Bezvýznamný` | LABOT |
| 10 | `b2-Niedergang-1381` | `csText` | `Západ slunce • Pokles • Pokles` | `Západ • Úpadek • Chátrání` | LABOT |
| 11 | `b2-Niederschlag-1383` | `csText` | `Sediment • Srážení` | `Usazenina • Srážky` | LABOT |
| 12 | `b2-normieren-1387` | `csText` | `Na příděl` | `Normovat • Standardizovat` | LABOT |
| 13 | `b2-Notstand-1389` | `csText` | `Katastrofální stav • Stav nouze` | `Katastrofální stav • Výjimečný stav` | LABOT |
| 14 | `b2-Notwehr-1390` | `csText` | `Potřebnou ochranu` | `Nutná obrana` | LABOT |
| 15 | `b2-Nutzeffekt-1391` | `csText` | `Poměr účinnosti` | `Koeficient účinnosti` | LABOT |
| 16 | `b2-Nutzholz-1392` | `csText` | `Soubory případů` | `Užitkové dřevo` | LABOT |
| 17 | `b2-Oberhand-1393` | `csText` | `Svrchovanost` | `Převaha • Navrch` | LABOT |
| 18 | `b2-obgleich-1395` | `csText` | `Ačkoli ačkoli` | `Ačkoli • Přestože` | LABOT |
| 19 | `b2-Ökosystem-1403` | `csText` | `Ekosystému` | `Ekosystém` | LABOT |

## OWNER validation note
- `b2-Vollnarkose-1365` (`Plná narkóza`) — **NELABOT**. `ó` ir korekts čehu burts; `PL_CHAR` ir false positive.
- `b2-Neger-1369` šajā repair grupā **NELABOT**: DE puse ir READ-ONLY, un dotais CS `Černoch` semantiski atveido avota nozīmi. Jebkura DE leksēmas modernizācija ir atsevišķs SOURCE_DE/OWNER jautājums, nevis CS copy-only remonts.
- Kartītes bez mapping šajā blokā paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus šī bloka nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `19`
- NELABOT: `2` dokumentēti
- expected applied: `19/19`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
