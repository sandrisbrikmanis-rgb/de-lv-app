# CS–DE B2 REPAIR — GROUP 40

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 39
- Aptuvenais ID diapazons: `2009–2058`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-vortrefflich-2009` | `csText` | `Výborný • Výborný` | `Vynikající • Výborný` | LABOT |
| 2 | `b2-Vorwand-2012` | `csText` | `Záminka • Záminka` | `Záminka • Výmluva` | LABOT |
| 3 | `b2-Vorwurf-2014` | `csText` | `Vyčítat` | `Výčitka • Výtka` | LABOT |
| 4 | `b2-vorzeitig-2015` | `csText` | `Předčasný • Předčasný` | `Předčasný • Předčasně nastalý` | LABOT |
| 5 | `b2-vorzüglich-2016` | `csText` | `Výborný • Výborný` | `Vynikající • Výborný` | LABOT |
| 6 | `b2-Wacholder-2017` | `csText` | `Jedle • Jalovec` | `Jalovec • Jalovec obecný` | LABOT |
| 7 | `b2-Wade-2019` | `csText` | `Jikry` | `Lýtko` | LABOT |
| 8 | `b2-Wahlkampf-2022` | `csText` | `Volební bitva` | `Volební boj • Volební kampaň` | LABOT |
| 9 | `b2-Wählscheibe-2024` | `csText` | `Číselník telefonu` | `Otočný číselník telefonu` | LABOT |
| 10 | `b2-wahren-2025` | `csText` | `Uložit` | `Zachovat • Uchovat` | LABOT |
| 11 | `b2-Wall-2028` | `csText` | `Násep • Násep` | `Val • Násep` | LABOT |
| 12 | `b2-wanken-2030` | `csText` | `Grilování • Adj. kolísat` | `Vrávorat • Přen. kolísat` | LABOT |
| 13 | `b2-Warenausgabe-2031` | `csText` | `Kontrola nákupu a výdej` | `Kontrola nákupů a výdej zboží` | LABOT |
| 14 | `b2-Wasserwerfer-2036` | `csText` | `Policejní auto - vodní dělo` | `Policejní vozidlo – vodní dělo` | LABOT |
| 15 | `b2-weben-2037` | `csText` | `Vazba` | `Tkát` | LABOT |
| 16 | `b2-Wegstrecke-2039` | `csText` | `Úsek silnice • Kus` | `Úsek cesty • Úsek` | LABOT |
| 17 | `b2-Wehe-2041` | `csText` | `Duna • Kupena` | `Duna • Závěj` | LABOT |
| 18 | `b2-Wehrpflicht-2043` | `csText` | `Stanné právo` | `Branná povinnost • Povinná vojenská služba` | LABOT |
| 19 | `b2-Weib-2044` | `csText` | `Srov. ne žena` | `Hovor. hanl. žena` | LABOT |
| 20 | `b2-Weise-2046` | `csText` | `Moudrý muž` | `Mudrc` | LABOT |
| 21 | `b2-Weltlage-2049` | `csText` | `Mezinárodní situaci` | `Mezinárodní situace` | LABOT |
| 22 | `b2-Weltmacht-2050` | `csText` | `Velkou moc` | `Velmoc` | LABOT |
| 23 | `b2-Werkbank-2054` | `csText` | `Obráběcí stroj` | `Pracovní stůl • Dílenský ponk` | LABOT |
| 24 | `b2-Werkhalle-2055` | `csText` | `Dílna` | `Výrobní hala • Provozní hala` | LABOT |
| 25 | `b2-Werktätige-2057` | `csText` | `Ten pracovní` | `Pracující • Zaměstnanec` | LABOT |
| 26 | `b2-Werkteil-2058` | `csText` | `Detail` | `Součást • Díl` | LABOT |

## OWNER validation note
- `b2-Vorwahl-2011`: **NELABOT**. Audita `PL_CHAR` ir false positive; `Kód jiného města nebo země v telefonickém rozhovoru` satur korektu čehu `ó`.
- `b2-Wade-2019`: `Jikry` nozīmē zivju ikrus; vācu `Wade` šeit ir anatomiskais `lýtko`.
- `b2-Wacholder-2017`: `Jedle` ir egle/baltegle, nevis kadiķis; abas avota nozīmes normalizētas uz jalovca terminoloģiju.
- `b2-weben-2037`: pašreizējais `Vazba` ir lietvārds, bet DE/LV avots ir darbības vārds `aust`.
- `b2-Wehrpflicht-2043`: `Stanné právo` ir kara/ārkārtas tiesiskais režīms, nevis karaklausība.
- `b2-Weib-2044`: saglabāts avota sarunvalodas/nievājošais reģistrs.
- `b2-Werkbank-2054`: `Obráběcí stroj` ir darbgalds/mašīna, bet `Werkbank` ir darba galds/ponks.
- Kartītes bez mapping šajā blokā apzināti paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras LABOT izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. `NELABOT` ierakstu nemainīt.
5. DE laukus, ID/order un kartītes ārpus šī 50 kartīšu secības bloka nemainīt.
6. Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.
7. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
8. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `26`
- NELABOT: `1`
- expected applied: `26/26`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
