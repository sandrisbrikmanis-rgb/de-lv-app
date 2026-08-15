# CS–DE B2 REPAIR — GROUP 12

## Scope
- Dataset: `B2`
- Kartītes: `551–600`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `551–600`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Eingemachte-551` | `csText` | `Džem • Konzervované ovoce` | `Zavařenina • Konzervované ovoce` | LABOT |
| 2 | `b2-eingerechnet-552` | `csText` | `Počítaný • Připsaný • Přidaný` | `Započítaný • Zahrnutý • Připočtený` | LABOT |
| 3 | `b2-Eingeständnis-553` | `csText` | `Zpověď` | `Přiznání` | LABOT |
| 4 | `b2-eingewurzelt-556` | `csText` | `Zakořeněné` | `Zakořeněný` | LABOT |
| 5 | `b2-eingleisig-557` | `csText` | `Jednokolejka` | `Jednokolejný` | LABOT |
| 6 | `b2-einhüllen-560` | `csText` | `Omotat • Svinout • Omotat` | `Zabalit • Zavinout • Zahálit` | LABOT |
| 7 | `b2-Einigkeit-561` | `csText` | `Jednotka • Jednota • Shoda` | `Jednota • Sjednocenost • Shoda` | LABOT |
| 8 | `b2-einkassieren-562` | `csText` | `Sbírat` | `Inkásovat • Vybírat` | LABOT |
| 9 | `b2-Einklang-563` | `csText` | `Dohoda` | `Soulad` | LABOT |
| 10 | `b2-einkleiden-564` | `csText` | `Oblékat se • Oblékat` | `Obléci • Odít` | LABOT |
| 11 | `b2-sich-einlassen` | `csText` | `Vpustit dovnitř` | `Pouštět se do` | LABOT |
| 12 | `b2-einleiten-566` | `csText` | `Vstoupit` | `Uvést • Zahájit` | LABOT |
| 13 | `b2-einliefern-568` | `csText` | `Přivést • Přivést` | `Dopravit • Přivézt` | LABOT |
| 14 | `b2-einmachen-569` | `csText` | `Konzervovat • Marinovat • Vařit` | `Konzervovat • Nakládat • Zavařovat` | LABOT |
| 15 | `b2-einrechnen-572` | `csText` | `Počítat • Počítat` | `Započítat • Zahrnout` | LABOT |
| 16 | `b2-Einschnitt-575` | `csText` | `Zářez • Řez • Obracet • Zářez` | `Zářez • Řez • Zlom • Vryp` | LABOT |
| 17 | `b2-einsichtig-579` | `csText` | `Rozumný • Rozumný` | `Rozumný • Chápavý` | LABOT |
| 18 | `b2-Einspruch-581` | `csText` | `Námitka • Námitka • Protest` | `Námitka • Výhrada • Protest` | LABOT |
| 19 | `b2-einstimmig-583` | `csText` | `Jednomyslný • Jednomyslný` | `Jednomyslný • Jednohlasný` | LABOT |
| 20 | `b2-eintauchen-585` | `csText` | `Ponořit • Ponořit • Ponořit • Ponořit` | `Namočit • Ponořit • Potopit • Ponořit se` | LABOT |
| 21 | `b2-eintönig-586` | `csText` | `Monotónní • Monotónní • Monotónní` | `Jednotvárný • Fádní • Monotónní` | LABOT |
| 22 | `b2-Eintracht-587` | `csText` | `Konsensus • Shoda • Harmonie • Kompatibilita` | `Jednota • Shoda • Svornost • Soulad` | LABOT |
| 23 | `b2-einträglich-588` | `csText` | `Ziskový • Ziskový` | `Výnosný • Rentabilní` | LABOT |
| 24 | `b2-einweichen-592` | `csText` | `Dip` | `Namočit` | LABOT |
| 25 | `b2-einweihen-593` | `csText` | `Slavnostně prozradit • Svěřit tajemství` | `Slavnostně otevřít • Zasvětit do tajemství` | LABOT |
| 26 | `b2-einwilligen-595` | `csText` | `Souhlasit • Být v klidu` | `Souhlasit • Svolit` | LABOT |
| 27 | `b2-Eisgang-602` | `csText` | `Chůze po ledu` | `Chod ledu • Pohyb ledových ker` | LABOT |
| 28 | `b2-Eissegeln-604` | `csText` | `Plavba s ledovými jachtami` | `Jízda na ledových jachtách` | LABOT |
| 29 | `b2-eitel-605` | `csText` | `Namyšlený • Namyšlený • Namyšlený • Mělký • Prázdný • Okázalý` | `Marnivý • Nadutý • Domýšlivý • Povrchní • Prázdný • Okázalý` | LABOT |
| 30 | `b2-Ekel-606` | `csText` | `Hnus • Hnus` | `Odpor • Hnus` | LABOT |
| 31 | `b2-Elster-608` | `csText` | `Škytavka` | `Straka` | LABOT |
| 32 | `b2-Empfangschef-609` | `csText` | `Správce hotelu` | `Vedoucí recepce` | LABOT |

## OWNER validation note
- `b2-eintönig-586` má deterministický `PL_CHAR` finding, ale znak `ó` je v češtině legitimní. Samotný `PL_CHAR` důvod je FALSE POSITIVE; kartička se přesto opravuje kvůli lingvistické redundanci.
- `b2-Einschreiben-577` není v tomto bloku měněn. Jeho současný význam `Doporučený dopis nebo balík` odpovídá LV referenci.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. DE laukus, ID/order un kartītes ārpus `551–600` nemainīt.
4. Nekādu Composer paša tulkojumu vai cleanup.
5. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
6. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `32`
- expected applied: `32/32`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `551–600`.
