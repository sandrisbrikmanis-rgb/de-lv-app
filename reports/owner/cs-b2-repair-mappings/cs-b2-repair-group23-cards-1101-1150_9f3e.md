# CS–DE B2 REPAIR — GROUP 23

## Scope
- Dataset: `B2`
- Kartītes: `1101–1150`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `1101–1150`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Hirschkuh-1130` | `csText` | `Matka jelena` | `Laň` | LABOT |
| 2 | `b2-Hitzkopf-1132` | `csText` | `Horká hlava` | `Horká hlava • Prchlivec` | LABOT |
| 3 | `b2-Hobelbank-1136` | `csText` | `Hoblík` | `Hoblice` | LABOT |
| 4 | `b2-Hochachtung-1138` | `csText` | `Velký respekt` | `Velká úcta` | LABOT |
| 5 | `b2-Hochmut-1139` | `csText` | `Arogance • Arogance` | `Pýcha • Nadutost` | LABOT |
| 6 | `b2-hochmütig-1140` | `csText` | `Povýšený • Povýšený` | `Pyšný • Nadutý` | LABOT |
| 7 | `b2-Hochspannung-1141` | `csText` | `Vysokého napětí` | `Vysoké napětí` | LABOT |
| 8 | `b2-Hochverrat-1144` | `csText` | `Zrada` | `Velezrada` | LABOT |
| 9 | `b2-hochwertig-1146` | `csText` | `Vysoká hodnota` | `Vysoce kvalitní • Hodnotný` | LABOT |
| 10 | `b2-Hohn-1148` | `csText` | `Výsměch • Výsměch` | `Výsměch • Posměch` | LABOT |
| 11 | `b2-Honorar-1151` | `csText` | `Královské hodnosti` | `Honorář` | LABOT |

## OWNER validation note
- `b2-Hypnose-1153` neietilpst kartītēs `1101–1150`; tā būs nākamajā grupā.
- Audita `PL_CHAR` uz čehu `Hypnóza` pats par sevi nav pietiekams labojuma pamats, jo `ó` ir leģitīma čehu rakstzīme.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus `1101–1150` nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `11`
- expected applied: `11/11`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `1101–1150`.
