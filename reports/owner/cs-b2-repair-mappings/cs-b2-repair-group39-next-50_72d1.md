# CS–DE B2 REPAIR — GROUP 39

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 38
- Aptuvenais ID diapazons: `1954–2003`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-verweigern-1955` | `csText` | `Popírat • Odmítat` | `Zapírat • Odmítat` | LABOT |
| 2 | `b2-verweilen-1956` | `csText` | `Poflakovat se` | `Pozdržet se • Setrvat` | LABOT |
| 3 | `b2-Verweis-1957` | `csText` | `Napomínat • Napomínat` | `Napomenutí • Důtka` | LABOT |
| 4 | `b2-verwickeln-1959` | `csText` | `Zmást • Adj. proplétat • Překážet` | `Zamotat • Přen. zaplést • Zatahovat` | LABOT |
| 5 | `b2-verwirren-1960` | `csText` | `Zmást • Zmást • Zmást` | `Pomíchat • Zamotat • Zmást` | LABOT |
| 6 | `b2-verwöhnen-1962` | `csText` | `Kazit • Kazit` | `Rozmazlovat • Hýčkat` | LABOT |
| 7 | `b2-sich-verwundern` | `csText` | `Divit se` | `Divit se něčemu • Podivovat se` | LABOT |
| 8 | `b2-sich verzögern-1968` | `csText` | `Zdržovat • Odkládat` | `Zpozdit se • Protahovat se` | LABOT |
| 9 | `b2-verzollen-1969` | `csText` | `K proclení` | `Proclít` | LABOT |
| 10 | `b2-verzweifeln-1970` | `csText` | `Vyšel ven` | `Zoufat si • Propadat zoufalství` | LABOT |
| 11 | `b2-verzweifelt-1971` | `csText` | `Zoufalý • Zoufalý • Plný zoufalství` | `Zoufalý • Beznadějný • Plný zoufalství` | LABOT |
| 12 | `b2-vollkommen-1980` | `csText` | `Úplný • Úplně • Úplně` | `Úplný • Dokonale • Docela` | LABOT |
| 13 | `b2-vollzählig-1982` | `csText` | `Existující v plném rozsahu` | `V plném počtu • Kompletní` | LABOT |
| 14 | `b2-Volumen-1984` | `csText` | `Hlasitost • Hlasitost` | `Objem • Kapacita` | LABOT |
| 15 | `b2-voran-1986` | `csText` | `Napřed • Před • U hlavy` | `Napřed • Vpředu • V čele` | LABOT |
| 16 | `b2-Vorbehalt-1989` | `csText` | `Stav` | `Podmínka • Výhrada` | LABOT |
| 17 | `b2-vorbestraft-1990` | `csText` | `S předchozím odsouzením` | `Trestaný • S předchozím odsouzením` | LABOT |
| 18 | `b2-Vorfall-1996` | `csText` | `Incident • Event` | `Příhoda • Událost` | LABOT |
| 19 | `b2-vorfristig-1997` | `csText` | `Předčasné • Předčasné` | `Předčasný • Před termínem` | LABOT |
| 20 | `b2-Vorliebe-1999` | `csText` | `Obzvláště oblíbený` | `Zvláštní obliba • Záliba` | LABOT |
| 21 | `b2-vornehmen-2000` | `csText` | `Učinit • Vykonat • Podstoupit • Zavázat se k něčemu` | `Udělat • Provést • Pustit se do • Něco si předsevzít` | LABOT |
| 22 | `b2-Vorrecht-2002` | `csText` | `Výsada • Výsada` | `Přednostní právo • Výsada` | LABOT |
| 23 | `b2-vorsätzlich-2003` | `csText` | `Úmyslně • Záměrně` | `Úmyslný • Záměrný` | LABOT |

## OWNER validation note
- `b2-verweigern-1955`: `Popírat` ir “noliegt”, bet avota `liegties` šeit precīzāk atbilst `Zapírat`; `Odmítat` saglabāts `atteikties`.
- `b2-Verweis-1957`: pašreizējās formas ir darbības vārdi, bet DE/LV avots ir lietvārdi `aizrādījums • rājiens`.
- `b2-verwöhnen-1962`: `Kazit` ir semantiski nepareizs `lutināt/izlutināt` atveidojums.
- `b2-verzweifeln-1970`: `Vyšel ven` nozīmē “izgāja ārā”; pilnīgi neatbilst `izmist`.
- `b2-Volumen-1984`: `Hlasitost` nozīmē skaļumu, nevis avota `apjoms • tilpums`.
- `b2-Vorbehalt-1989`: `Stav` = stāvoklis, nevis `nosacījums`.
- `b2-vorsätzlich-2003`: avota pirmais variants `apzināts` ir īpašības vārds, tāpēc CS normalizēts no adverbiem uz īpašības vārdiem.
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
- LABOT mappings: `23`
- expected applied: `23/23`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
