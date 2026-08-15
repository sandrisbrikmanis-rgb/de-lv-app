# CS–DE B2 REPAIR — STUDY GROUP 03

## Scope
- Dataset: `B2`
- Study kartītes: nākamās 10 pēc Study Group 02
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-sich-erniedrigen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 2 | `b2-sich-erregen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 3 | `b2-sich-erweisen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 4 | `b2-sich-fassen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 5 | `b2-sich-fuegen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 6 | `b2-sich-genieren` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 7 | `b2-sich-gesellen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 8 | `b2-sich-gestalten` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 9 | `b2-sich-grauen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 10 | `b2-sich-herausbilden` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |

## OWNER validation note
- Visos 10 gadījumos audits identificē vienu un to pašu LV atlikumu `Vadība:` laukā `study.formsLabel`.
- Čehu Study rekcijas etiķete konsekventi ir `Vazba:`.
- DE saturs, pamatkartīšu `csText`, ID/order un pārējie Study lauki netiek mainīti.
- Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
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
