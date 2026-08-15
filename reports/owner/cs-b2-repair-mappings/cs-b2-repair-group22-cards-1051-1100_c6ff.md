# CS–DE B2 REPAIR — GROUP 22

## Scope
- Dataset: `B2`
- Kartītes: `1051–1100`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `1051–1100`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Heldentat-1090` | `csText` | `Výkon` | `Hrdinský čin` | LABOT |
| 2 | `b2-Hemmung-1092` | `csText` | `Překážka • Překážka • Zdržení` | `Zábrana • Překážka • Zdržení` | LABOT |
| 3 | `b2-henken-1093` | `csText` | `Jednou • Oběsit člověka` | `Věšet • Oběsit člověka` | LABOT |
| 4 | `b2-herabsetzen-1094` | `csText` | `Snížit • Snížit` | `Snížit • Znevažovat` | LABOT |
| 5 | `b2-herantreten-1096` | `csText` | `Přístup` | `Přistoupit • Přiblížit se` | LABOT |
| 6 | `b2-heraufkommen-1097` | `csText` | `Vstát • Vstát` | `Vyjít nahoru • Dostat se nahoru` | LABOT |
| 7 | `b2-sich-herausbilden` | `csText` | `Formovat do` | `Vyvinout se v • Vytvořit se jako` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus `1051–1100` nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `7`
- expected applied: `7/7`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `1051–1100`.
