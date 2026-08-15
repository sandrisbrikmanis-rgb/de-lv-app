# CS–DE B2 REPAIR — STUDY GROUP 05 / FINAL

## Scope
- Dataset: `B2`
- Study kartītes: atlikušās 3 pēc Study Group 04
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-sich-verstellen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 2 | `b2-sich-verwundern` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 3 | `b2-sich-widersetzen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |

## OWNER validation note
- Šie ir pēdējie 3 `Vadība:` findings B2 audita failā.
- Čehu Study rekcijas etiķete: `Vazba:`.
- Pēc šo mappingu apply auditā vairs nav neviena `currentCs: "Vadība:"` finding.
- DE saturs, pamatkartīšu `csText`, ID/order un citi Study lauki netiek mainīti.
- Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE STRICT READ-ONLY.
5. Ārpus šiem 3 mappingiem neko nemainīt.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.

## Validation
- Study kartītes: `3`
- LABOT mappings: `3`
- expected applied: `3/3`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- remaining `Vadība:` audit findings after apply: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Next gate
Pēc šī apply neveikt jaunus patvaļīgus labojumus. Nākamais solis: B2 reconciliation / targeted regression pret pilno audita findings kopu, lai noteiktu atlikušos reālos findings un false positives.
