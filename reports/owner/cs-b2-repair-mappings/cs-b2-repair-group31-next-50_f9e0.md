# CS–DE B2 REPAIR — GROUP 31

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 30
- Aptuvenais ID diapazons: `1515–1564`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Reich-1515` | `csText` | `Říše • Země` | `Říše • Stát` | LABOT |
| 2 | `b2-Reifeprüfung-1516` | `csText` | `Test připravenosti` | `Zkouška zralosti • Maturitní zkouška` | LABOT |
| 3 | `b2-Reifezeugnis-1517` | `csText` | `Osvědčení o připravenosti` | `Maturitní vysvědčení` | LABOT |
| 4 | `b2-Relief-1520` | `csText` | `Terén` | `Reliéf` | LABOT |
| 5 | `b2-Richtfest-1524` | `csText` | `Festival vážek` | `Glajcha • Oslava dokončení krovu` | LABOT |
| 6 | `b2-Ringelnatter-1526` | `csText` | `Hladový` | `Užovka obojková` | LABOT |
| 7 | `b2-Rückfall-1529` | `csText` | `Relapsu` | `Recidiva • Relaps` | LABOT |
| 8 | `b2-Rückgang-1530` | `csText` | `Pokles • Regrese • Pokles` | `Úpadek • Regrese • Snížení` | LABOT |
| 9 | `b2-Rückhalt-1531` | `csText` | `Podpora • Podpora` | `Opora • Podpora` | LABOT |
| 10 | `b2-rückständig-1533` | `csText` | `Po splatnosti • Po splatnosti` | `Zaostalý • Po splatnosti` | LABOT |
| 11 | `b2-Rüge-1535` | `csText` | `Nadávat • Nadávat` | `Důtka • Pokárání` | LABOT |
| 12 | `b2-rühmen-1536` | `csText` | `Chválit • Chválit • Chlubit se • Chlubit se něčím` | `Chválit • Vychvalovat • Chlubit se • Honosit se něčím` | LABOT |
| 13 | `b2-Rüstung-1539` | `csText` | `Výzbroj • Výzbroj` | `Zbrojení • Výzbroj` | LABOT |
| 14 | `b2-Sabotage-1540` | `csText` | `Sabotovat` | `Sabotáž` | LABOT |
| 15 | `b2-sächlich-1544` | `csText` | `~es Geschlecht gram. • Jakékoli pohlaví` | `~es Geschlecht gram. • Střední rod` | LABOT |
| 16 | `b2-Sägewerk-1545` | `csText` | `Pila` | `Pila • Pilnice` | LABOT |
| 17 | `b2-sämtlich-1547` | `csText` | `Všichni [bez výjimky] • V plné síle` | `Všichni [bez výjimky] • V plném počtu` | LABOT |
| 18 | `b2-Sandbank-1548` | `csText` | `Hejno` | `Písčina • Mělčina` | LABOT |
| 19 | `b2-Sanitätsstelle-1550` | `csText` | `Lékařský bod` | `Zdravotnické stanoviště` | LABOT |
| 20 | `b2-Satellit-1551` | `csText` | `Pol. satelit • Astr. společník` | `Pol. satelit • Astr. družice` | LABOT |
| 21 | `b2-sättigen-1552` | `csText` | `[dobrý] krmit • Hostina • Chem. saturovat` | `[dobře] nasytit • Pohostit • Chem. nasytit` | LABOT |
| 22 | `b2-Satzung-1553` | `csText` | `Statut` | `Stanovy` | LABOT |
| 23 | `b2-sausen-1554` | `csText` | `Šustit • Hvízdat • Svištět • Svištět` | `Šumět • Hvízdat • Uhánět • Řítit se` | LABOT |
| 24 | `b2-Schadenersatz-1556` | `csText` | `Hmotnou náhradu za ztráty` | `Hmotná náhrada za škodu` | LABOT |
| 25 | `b2-Schaffen-1558` | `csText` | `Tvořivost • Tvorba • Práce • Činnost • Tvorba` | `Tvořivost • Umělecká tvorba • Práce • Činnost • Vytváření` | LABOT |
| 26 | `b2-Schalldämmung-1559` | `csText` | `Potlačení hluku` | `Zvuková izolace • Tlumení hluku` | LABOT |
| 27 | `b2-Schalldämpfer-1560` | `csText` | `Tlumič zvuku` | `Tlumič` | LABOT |
| 28 | `b2-schalldicht-1562` | `csText` | `Zvukotěsná` | `Zvukotěsný` | LABOT |
| 29 | `b2-schärfsinnig-1564` | `csText` | `Vtipný • S bystrým rozumem • Vynalézavý` | `Bystrý • S bystrým rozumem • Důvtipný` | LABOT |

## OWNER validation note
- `b2-Reich-1515`: `Říše • Stát` precīzāk atveido avota `impērija • valsts` un novērš cross-dataset terminoloģijas nekonsekvenci.
- `b2-Richtfest-1524`: `Festival vážek` ir burtisks, semantiski kļūdains tulkojums.
- `b2-Ringelnatter-1526`: `Hladový` nav čūskas nosaukums; pareizais čehu ekvivalents ir `Užovka obojková`.
- `b2-Sabotage-1540`: pašreizējais CS ir darbības vārds, bet DE kartīte ir lietvārds.
- Kartītes bez mapping šajā blokā apzināti paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras LABOT izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus šī 50 kartīšu secības bloka nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `29`
- expected applied: `29/29`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
