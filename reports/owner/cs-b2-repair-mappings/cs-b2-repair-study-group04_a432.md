# CS–DE B2 REPAIR — STUDY GROUP 04

## Scope
- Dataset: `B2`
- Study kartītes: nākamās 10 pēc Study Group 03
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-sich-heraushalten` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 2 | `b2-sich-herausstellen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 3 | `b2-sich-hervortun` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 4 | `b2-sich-hingeben` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 5 | `b2-sich-paaren` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 6 | `b2-sich-revanchieren` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 7 | `b2-sich-scheren` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 8 | `b2-sich-vereinigen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 9 | `b2-sich-versehen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 10 | `b2-sich-versoehnen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |

## OWNER validation note
- Visos 10 gadījumos audits identificē LV atlikumu `Vadība:` laukā `study.formsLabel`.
- Čehu Study rekcijas etiķete konsekventi ir `Vazba:`.
- `b2-hoch-study` PL_CHAR atradumi šajā posmā netiek iekļauti: `anticyklóna` ir korekts čehu vārds ar `ó`, tātad tie ir validatora false positive, nevis šī COPY-ONLY remonta mappingi.
- DE saturs, pamatkartīšu `csText`, ID/order un pārējie Study lauki netiek mainīti.
- Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE STRICT READ-ONLY.
5. Ārpus šiem 10 mappingiem neko nemainīt.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.

## Validation
- Study kartītes: `10`
- LABOT mappings: `10`
- expected applied: `10/10`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- LV leftovers šajos mapping laukos pēc apply: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
