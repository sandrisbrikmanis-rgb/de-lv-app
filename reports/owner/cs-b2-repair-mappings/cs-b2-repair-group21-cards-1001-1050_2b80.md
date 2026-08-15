# CS–DE B2 REPAIR — GROUP 21

## Scope
- Dataset: `B2`
- Kartītes: `1001–1050`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `1001–1050`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-grauen-1022` | `csText` | `Vazba` | `Šedivět` | LABOT |
| 2 | `b2-grell-1027` | `csText` | `Brilantní • Oslnivý` | `Křiklavý • Oslnivý` | LABOT |
| 3 | `b2-grinsen-1034` | `csText` | `Usmívat se` | `Šklebit se • Cenit zuby` | LABOT |
| 4 | `b2-Großmacht-1035` | `csText` | `Velkou moc` | `Velmoc` | LABOT |
| 5 | `b2-Großmut-1036` | `csText` | `Štědrost` | `Velkorysost • Ušlechtilost` | LABOT |
| 6 | `b2-großmütig-1037` | `csText` | `Štědrý` | `Velkorysý • Ušlechtilý` | LABOT |
| 7 | `b2-Grundrecht-1039` | `csText` | `Základní práva` | `Základní právo` | LABOT |
| 8 | `b2-Gunst-1043` | `csText` | `Laskavost` | `Přízeň • Náklonnost` | LABOT |
| 9 | `b2-Günstling-1044` | `csText` | `Oblíbený • Chráněnec` | `Oblíbenec • Chráněnec` | LABOT |
| 10 | `b2-gurgeln-1045` | `csText` | `Kloktat • Ústa` | `Kloktat • Vyplachovat ústa` | LABOT |
| 11 | `b2-Gutachten-1047` | `csText` | `Zpětná vazba • Názor odborníka` | `Posudek • Odborné stanovisko` | LABOT |
| 12 | `b2-Güte-1048` | `csText` | `Laskavost • Kvalita • Prospěch` | `Dobrota • Kvalita • Jakost` | LABOT |
| 13 | `b2-gutheißen-1051` | `csText` | `Uznat jako dobré` | `Schválit • Odsouhlasit` | LABOT |
| 14 | `b2-gutmütig-1052` | `csText` | `Laskavého srdce` | `Dobrosrdečný` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → rakstīt `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus `1001–1050` nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `14`
- expected applied: `14/14`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `1001–1050`.
