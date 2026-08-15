# CS–DE B2 REPAIR — GROUP 25

## Scope
- Dataset: `B2`
- Kartītes: `1201–1250`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `1201–1250`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Kriegszustand-1203` | `csText` | `Stanné právo` | `Válečný stav` | LABOT |
| 2 | `b2-Laienkunst-1206` | `csText` | `Umělecká sebeaktivita` | `Amatérské umění • Umělecká zájmová činnost` | LABOT |
| 3 | `b2-Landenge-1209` | `csText` | `Šíje země` | `Pevninská šíje` | LABOT |
| 4 | `b2-Landung-1212` | `csText` | `Odstát • Přistání • Přistání` | `Vylodění • Výsadek • Přistání` | LABOT |
| 5 | `b2-Landzunge-1213` | `csText` | `Jazyk země` | `Pevninský výběžek • Mys` | LABOT |
| 6 | `b2-langfristig-1214` | `csText` | `Dlouhodobý • Dlouhodobý` | `Dlouhodobý • Trvalejší` | LABOT |
| 7 | `b2-lauern-1218` | `csText` | `Přitulit se` | `Číhat • Čekat v záloze` | LABOT |
| 8 | `b2-Laufsteg-1221` | `csText` | `Jazyk na módní přehlídce` | `Molo na módní přehlídce` | LABOT |
| 9 | `b2-Laufwerk-1222` | `csText` | `Motor • Motor` | `Mechanika • Pohon` | LABOT |
| 10 | `b2-Lehrstuhl-1228` | `csText` | `Oddělení` | `Katedra` | LABOT |
| 11 | `b2-Leichenhalle-1231` | `csText` | `Na hřbitově v kapli` | `Márnice • Smuteční síň` | LABOT |
| 12 | `b2-Leichtgewicht-1232` | `csText` | `Nízká hmotnost` | `Lehká váha` | LABOT |
| 13 | `b2-leichtsinnig-1234` | `csText` | `Povrchní` | `Lehkomyslný` | LABOT |
| 14 | `b2-leidlich-1236` | `csText` | `Snesitelný • Snesitelný • Napůl dobrý` | `Snesitelný • Přijatelný • Docela dobrý` | LABOT |
| 15 | `b2-Leistungslohn-1237` | `csText` | `Kusová platba` | `Úkolová mzda • Výkonová mzda` | LABOT |
| 16 | `b2-Leitfaden-1239` | `csText` | `Manuál` | `Příručka • Průvodce` | LABOT |
| 17 | `b2-liebkosten-1247` | `csText` | `Pohladit • Pohladit` | `Hladit • Mazlit se` | LABOT |
| 18 | `b2-liederlich-1248` | `csText` | `Nedbalý • Nedbalý` | `Ledabylý • Nedbalý` | LABOT |
| 19 | `b2-lindern-1249` | `csText` | `Uklidnit • Zmírnit bolest` | `Zmírnit • Ulevit od bolesti` | LABOT |
| 20 | `b2-lispeln-1250` | `csText` | `Sklouznout` | `Šišlat` | LABOT |

## OWNER validation note
- `b2-Laufsteg-1221` audita `PL_CHAR` flags nav reāls čehu rakstzīmju pārkāpums; kartīte tiek labota lingvistiskās nozīmes dēļ.
- `b2-leiden-study` ietilpst šajā 50 kartīšu secības blokā, bet tā pašreizējais `Dlouhá a těžká nemoc` atbilst LV avota nozīmei, tāpēc **NELABOT**.
- Kartītes bez mapping šajā diapazonā apzināti paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus `1201–1250` nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `20`
- expected applied: `20/20`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `1201–1250`.
