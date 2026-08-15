# CS–DE B2 REPAIR — GROUP 34

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 33
- Aptuvenais ID diapazons: `1680–1729`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Spross-1680` | `csText` | `Bot. potomek • Střílet • Přel. potomstvo • Potomstvo` | `Bot. výhonek • Dzin • Přen. potomek • Ratolest` | LABOT |
| 2 | `b2-Spruchband-1682` | `csText` | `Transparentní • Plakát` | `Transparent • Plakát` | LABOT |
| 3 | `b2-Spuk-1683` | `csText` | `Přízrak • Přízrak • Přízrak` | `Přízrak • Strašidlo • Zjevení` | LABOT |
| 4 | `b2-spurlos-1684` | `csText` | `Beze stopy • Beze stopy` | `Beze stopy • Beze zprávy` | LABOT |
| 5 | `b2-starren-1694` | `csText` | `Dívej se pozorně • Mrkni` | `Upřeně se dívat • Zírat` | LABOT |
| 6 | `b2-starrköpfig-1695` | `csText` | `Tvrdohlavý • Tvrdohlavý` | `Tvrdohlavý • Umíněný` | LABOT |
| 7 | `b2-starrsinnig-1696` | `csText` | `Tvrdohlavý • Tvrdohlavý` | `Tvrdohlavý • Umíněný` | LABOT |
| 8 | `b2-streitbar-1708` | `csText` | `Argumentační` | `Svárný • Hádavý` | LABOT |
| 9 | `b2-Stripper-1711` | `csText` | `Striptérka` | `Striptér` | LABOT |
| 10 | `b2-stur-1717` | `csText` | `Tvrdohlavý • Tvrdohlavý` | `Umíněný • Tvrdohlavý` | LABOT |
| 11 | `b2-Tagegeld-1722` | `csText` | `Pracovní cesta na diety` | `Diety na pracovní cestu • Denní cestovní náhrada` | LABOT |
| 12 | `b2-tagen-1725` | `csText` | `Uspořádat sezení • Sezení` | `Zasedat • Konat zasedání` | LABOT |

## OWNER validation note
- `b2-Spross-1680`: pašreizējais `Střílet` ir darbības vārds un neatbilst lietvārda nozīmei `dzinums`; `Přel.` normalizēts uz čehu `Přen.`.
- `b2-Spruchband-1682`: `Transparentní` ir īpašības vārds; avota `transparents` šeit ir lietvārds `Transparent`.
- `b2-Stripper-1711`: vācu `Stripper` ir vīriešu dzimtes/personas apzīmējums, bet pašreizējais `Striptérka` ir sieviešu forma. `b2-Stripperin-1712` paliek sieviešu forma.
- `b2-streitbar-1708`: `Argumentační` nozīmē “argumentācijas/argumentatīvs”, nevis `ķildīgs`.
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
- LABOT mappings: `12`
- expected applied: `12/12`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
