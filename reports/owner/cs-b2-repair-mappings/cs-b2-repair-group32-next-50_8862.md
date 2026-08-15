# CS–DE B2 REPAIR — GROUP 32

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 31
- Aptuvenais ID diapazons: `1565–1614`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-schaudern-1566` | `csText` | `Být zděšen • [se] otřást` | `Děsit se • [Za]třást se` | LABOT |
| 2 | `b2-scheiden-1569` | `csText` | `[ne]oddělit • Oddělit • Oddělit • Sich sch. lassen • Rozbít • Rozbít` | `[Roz]dělit • Oddělit • Rozloučit • Sich sch. lassen • Rozejít se • Rozvést se` | LABOT |
| 3 | `b2-Scheidewand-1570` | `csText` | `Septum` | `Příčka • Dělicí stěna` | LABOT |
| 4 | `b2-Scheitel-1571` | `csText` | `Hlava • Vlek • Cesta` | `Temeno • Vršek hlavy • Pěšinka` | LABOT |
| 5 | `b2-schelmisch-1573` | `csText` | `Rozdělující` | `Šelmovský • Rozpustilý` | LABOT |
| 6 | `b2-schelten-1574` | `csText` | `Bart • Bart` | `Hubovat • Nadávat` | LABOT |
| 7 | `b2-Schieber-1577` | `csText` | `Blesk • Šíp • Spekulant` | `Zástrčka • Šoupátko • Spekulant` | LABOT |
| 8 | `b2-Schiffbruch-1579` | `csText` | `Katastrofa ztroskotání lodi` | `Ztroskotání lodi • Lodní katastrofa` | LABOT |
| 9 | `b2-schillern-1581` | `csText` | `Duhový • Koupat se v různých barvách` | `Třpytit se • Hrát různými barvami` | LABOT |
| 10 | `b2-schlafwandeln-1583` | `csText` | `Být zasažen měsícem` | `Být náměsíčný • Chodit ze spaní` | LABOT |
| 11 | `b2-Schlaganfall-1584` | `csText` | `Ochrnutí` | `Mrtvice • Cévní mozková příhoda` | LABOT |
| 12 | `b2-Schleudersitz-1587` | `csText` | `Sedadlo katapultu letadla` | `Katapultovací sedadlo letadla` | LABOT |
| 13 | `b2-Schmach-1590` | `csText` | `Hanba • Hanba` | `Hanba • Potupa` | LABOT |
| 14 | `b2-Schmarotzer-1591` | `csText` | `Žravý • Parazit` | `Příživník • Parazit` | LABOT |
| 15 | `b2-Schmerzensgeld-1593` | `csText` | `Bolestné peníze` | `Bolestné • Odškodnění za újmu` | LABOT |
| 16 | `b2-schmollen-1595` | `csText` | `Oblékání` | `Trucovat • Mračit se` | LABOT |
| 17 | `b2-Schnappschuss-1597` | `csText` | `Snímek na fotografii` | `Momentka • Momentní snímek` | LABOT |
| 18 | `b2-Schöpfung-1600` | `csText` | `Tvorba • Tvorba • Prac` | `Stvoření • Výtvor • Dílo` | LABOT |
| 19 | `b2-schreiten-1601` | `csText` | `Chůze • Jít` | `Kráčet • Jít` | LABOT |
| 20 | `b2-schrill-1603` | `csText` | `Ostrý • Ostrý` | `Pronikavý • Ječivý` | LABOT |
| 21 | `b2-schroff-1604` | `csText` | `Strmý • Strmý • Drsný • Ostrý • Nevlídný` | `Strmý • Příkrý • Drsný • Ostrý • Nevlídný` | LABOT |
| 22 | `b2-Schutzimpfung-1609` | `csText` | `Ochranné roubování` | `Ochranné očkování` | LABOT |
| 23 | `b2-Schwarm-1612` | `csText` | `Vášeň • Vytržení` | `Hejno • Roj` | LABOT |
| 24 | `b2-schwärmen-1613` | `csText` | `Vzrušovat • Řádit • Snít` | `Nadchnout se • Horovat • Snít` | LABOT |
| 25 | `b2-Schwarzarbeit-1614` | `csText` | `Nelegální práci, za kterou se neplatí žádné daně` | `Nelegální práce, za kterou se neplatí žádné daně` | LABOT |

## OWNER validation note
- `b2-Scheidewand-1570`: `Septum` ir pārāk šaurs medicīnisks ekvivalents dotajam vispārīgajam `starpsiena`.
- `b2-Schlaganfall-1584`: `Ochrnutí` nozīmē paralīzi, nevis insultu.
- `b2-Schmuggel-1596: Pašování` paliek **NELABOT** — semantiski korekts.
- `b2-Schwarm-1612`: pašreizējais `Vášeň • Vytržení` neatbilst avota `bars`; labots uz `Hejno • Roj`.
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
- LABOT mappings: `25`
- expected applied: `25/25`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
