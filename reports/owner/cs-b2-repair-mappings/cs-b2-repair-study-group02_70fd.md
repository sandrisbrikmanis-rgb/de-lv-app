# CS–DE B2 REPAIR — STUDY GROUP 02

## Scope
- Dataset: `B2`
- Study kartītes: nākamās 10 Study kartītes pēc Study Group 01
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Kartītes
1. `b2-sich-einschleichen`
2. `b2-sich-einschraenken`
3. `b2-sich-empfehlen`
4. `b2-sich-empoeren`
5. `b2-sich-enthalten`
6. `b2-sich-entledigen`
7. `b2-sich-entruesten`
8. `b2-sich-entsinnen`
9. `b2-sich-erbarmen`
10. `b2-sich-ergeben`

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-sich-einschleichen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 2 | `b2-sich-einschraenken` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 3 | `b2-sich-empfehlen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 4 | `b2-sich-empoeren` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 5 | `b2-sich-enthalten` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 6 | `b2-sich-entledigen` | `study.rektion` | `+ piederības forma` | `+ 2. pád (genitiv)` | LABOT |
| 7 | `b2-sich-entledigen` | `study.forms` | `+ piederības forma` | `+ 2. pád (genitiv)` | LABOT |
| 8 | `b2-sich-entledigen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 9 | `b2-sich-entruesten` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 10 | `b2-sich-entsinnen` | `study.rektion` | `+ piederības forma` | `+ 2. pád (genitiv)` | LABOT |
| 11 | `b2-sich-entsinnen` | `study.forms` | `+ piederības forma` | `+ 2. pád (genitiv)` | LABOT |
| 12 | `b2-sich-entsinnen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 13 | `b2-sich-erbarmen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 14 | `b2-sich-ergeben` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |

## OWNER validation note
- `Vadība:` ir LV atlikums. Čehu Study rekcijas etiķete: `Vazba:`.
- `sich entledigen` un `sich entsinnen` vācu rekcijā pārvalda ģenitīvu; `+ piederības forma` lokalizēts kā `+ 2. pád (genitiv)`.
- Netiek mainīts DE saturs, pamatkartīšu `csText`, ID/order vai citi Study lauki.
- Šis ir exact mapping bloks, nevis Composer lingvistiskās interpretācijas uzdevums.

## COPY-ONLY apply noteikumi
1. Pirms katras LABOT izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus šī Study bloka nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- Study kartītes: `10`
- LABOT mappings: `14`
- expected applied: `14/14`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- LV leftovers šajos mapping laukos pēc apply: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
