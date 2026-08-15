# CS–DE B2 REPAIR — GROUP 09

## Scope
- Dataset: `B2`
- Kartītes: `401–450`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `401–450`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Doppelzentner-417` | `csText` | `Centrum` | `Dvojitý cent • 100 kg` | LABOT |
| 2 | `b2-Dorn-418` | `csText` | `Trn • Bodnout` | `Trn • Osten` | LABOT |
| 3 | `b2-dornig-419` | `csText` | `Pichlavý • Pichlavý` | `Trnitý • Ostnatý` | LABOT |
| 4 | `b2-dörren-420` | `csText` | `Sušit • Sušit` | `Sušit • Vysoušet` | LABOT |
| 5 | `b2-Dosis-427` | `csText` | `Dávka • Dávka` | `Dóza • Dávka` | LABOT |
| 6 | `b2-Dotterblume-428` | `csText` | `Pulec` | `Blatouch` | LABOT |
| 7 | `b2-Dramatiker-432` | `csText` | `Dramatik • Hrát spisovatel` | `Dramatik • Autor divadelních her` | LABOT |
| 8 | `b2-Drang-433` | `csText` | `Pohon • Sklon` | `Nutkání • Sklon` | LABOT |
| 9 | `b2-drängen-434` | `csText` | `Tlačit • Tlačit • Spěchat • Spěchat • Povzbuzovat` | `Strkat • Tlačit • Popohánět • Pobízet • Naléhat` | LABOT |
| 10 | `b2-Dreck-435` | `csText` | `Hnůj • Špína • Bláto • Špína` | `Hnůj • Nečistota • Bláto • Svinstvo` | LABOT |
| 11 | `b2-Drehung-439` | `csText` | `Točit • Revoluce` | `Otáčení • Otočka` | LABOT |
| 12 | `b2-Dreisprung-440` | `csText` | `Trojitý skok` | `Trojskok` | LABOT |
| 13 | `b2-dreschen-441` | `csText` | `Vyšlehat obilí • Vyšlehat bílek` | `Mlátit obilí • Šlehat bílek` | LABOT |
| 14 | `b2-Dressman-442` | `csText` | `Model předvádějící na módních přehlídkách` | `Model předvádějící na módních přehlídkách` | NELABOT / FALSE POSITIVE |
| 15 | `b2-dringen-443` | `csText` | `Přitlačit • Rozbít • Zatlačit • Vloupat • Vyžadovat • Vyžadovat` | `Tlačit se • Prodírat se • Vtlačit se • Vniknout • Žádat • Požadovat` | LABOT |
| 16 | `b2-Drohung-445` | `csText` | `Hrozby` | `Hrozba` | LABOT |
| 17 | `b2-Drossel-447` | `csText` | `Špaček` | `Drozd` | LABOT |
| 18 | `b2-Nadeldrucker-449` | `csText` | `Digitální tiskárna` | `Jehličková tiskárna` | LABOT |
| 19 | `b2-Druckerei-450` | `csText` | `Typografie` | `Tiskárna` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. `b2-Dressman-442` nemainīt. Čehu tekstā nav poļu rakstzīmes; `PL_CHAR` ir FALSE POSITIVE.
4. DE laukus, ID/order un kartītes ārpus `401–450` nemainīt.
5. Nekādu Composer paša tulkojumu vai cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.

## Validation
- LABOT mappings: `18`
- NELABOT / FALSE POSITIVE: `1`
- expected applied: `18/18`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `401–450`.
