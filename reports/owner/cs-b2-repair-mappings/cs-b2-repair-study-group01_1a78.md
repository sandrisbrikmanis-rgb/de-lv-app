# CS–DE B2 REPAIR — STUDY GROUP 01

## Scope
- Dataset: `B2`
- Study kartītes: pirmās 10 ar apstiprināmiem Study findings pēc pamatkartīšu cikla
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Kartītes
1. `b2-sich-abfinden`
2. `b2-sich-abwenden`
3. `b2-sich-befassen`
4. `b2-sich-begnuegen`
5. `b2-sich-bemaechtigen`
6. `b2-sich-berufen`
7. `b2-sich-beschraenken`
8. `b2-sich-betaetigen`
9. `b2-sich-einlassen`
10. `b2-sich-einpraegen`

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-sich-abfinden` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 2 | `b2-sich-abwenden` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 3 | `b2-sich-befassen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 4 | `b2-sich-begnuegen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 5 | `b2-sich-bemaechtigen` | `study.rektion` | `+ piederības forma` | `+ 2. pád (genitiv)` | LABOT |
| 6 | `b2-sich-bemaechtigen` | `study.forms` | `+ piederības forma` | `+ 2. pád (genitiv)` | LABOT |
| 7 | `b2-sich-bemaechtigen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 8 | `b2-sich-berufen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 9 | `b2-sich-beschraenken` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 10 | `b2-sich-betaetigen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 11 | `b2-sich-einlassen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 12 | `b2-sich-einpraegen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |

## OWNER validation note
- `Vadība:` ir LV atlikums. Study kartīšu gramatiskās rekcijas etiķete čehu valodā ir `Vazba:`.
- `sich bemächtigen` vācu valodā pārvalda ģenitīvu; tāpēc LV atlikums `+ piederības forma` netiek burtiski tulkots, bet gramatiski precīzi lokalizēts kā `+ 2. pád (genitiv)`.
- Šajā blokā DE saturs netiek mainīts.
- Pamatkartīšu `csText` šajā Study blokā netiek atkārtoti labots.
- Nekādi citi Study lauki netiek mainīti bez atsevišķa mapping.

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
- LABOT mappings: `12`
- expected applied: `12/12`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- LV leftovers šajos mapping laukos pēc apply: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
