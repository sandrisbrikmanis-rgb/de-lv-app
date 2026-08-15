# CS–DE B2 REPAIR — GROUP 37

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 36
- Aptuvenais ID diapazons: `1844–1893`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-unterordnen-1845` | `csText` | `Podřízený • Předmět` | `Podřídit • Podrobit` | LABOT |
| 2 | `b2-Unterstellung-1847` | `csText` | `Pomlouvat` | `Pomluva • Křivé obvinění` | LABOT |
| 3 | `b2-Untertan-1848` | `csText` | `Občan` | `Poddaný` | LABOT |
| 4 | `b2-untertauchen-1849` | `csText` | `Potápět se • Ponořit se pod vodu • Ponořit se • Ponořit se` | `Ponořit se • Schovat se pod vodu • Ponořit • Potopit` | LABOT |
| 5 | `b2-unterwerfen-1851` | `csText` | `Podléhat` | `Podrobit • Podřídit` | LABOT |
| 6 | `b2-sich unterwerfen-1852` | `csText` | `Poslouchat` | `Podrobit se • Podřídit se` | LABOT |
| 7 | `b2-unüberlegt-1854` | `csText` | `Lehkomyslný • Lehkomyslný` | `Neuvážený • Lehkomyslný` | LABOT |
| 8 | `b2-unvermeidlich-1855` | `csText` | `Hrozící • Nevyhnutelný` | `Neodvratný • Nevyhnutelný` | LABOT |
| 9 | `b2-unwillkürlich-1858` | `csText` | `Bezděčný • Neúmyslný • Bezděčný` | `Bezděčný • Neúmyslný • Nevědomý` | LABOT |
| 10 | `b2-üppig-1861` | `csText` | `Hojný • Baculatý` | `Bohatý • Bujný` | LABOT |
| 11 | `b2-Urheber-1862` | `csText` | `Iniciátor • Iniciátor • Autor` | `Původce • Iniciátor • Autor` | LABOT |
| 12 | `b2-Urheberrecht-1863` | `csText` | `Copyright` | `Autorské právo` | LABOT |
| 13 | `b2-Urkunde-1864` | `csText` | `Dokument • Článek` | `Listina • Dokument` | LABOT |
| 14 | `b2-Ursprung-1865` | `csText` | `Původ • Původ • [před]počátek` | `Původ • Zdroj • [Pra]počátek` | LABOT |
| 15 | `b2-väterlich-1868` | `csText` | `Otcovský- • Otcovský` | `Otcův • Otcovský` | LABOT |
| 16 | `b2-verachten-1869` | `csText` | `Pohrdat • Pohrdat` | `Pohrdat • Opovrhovat` | LABOT |
| 17 | `b2-verbittert-1873` | `csText` | `Naštvaný` | `Zahořklý` | LABOT |
| 18 | `b2-verdünnen-1878` | `csText` | `Dělat ředidlo • Chem. zředit • Oslabit` | `Ztenčit • Chem. zředit • Oslabit` | LABOT |
| 19 | `b2-verehren-1879` | `csText` | `Ctít • Ctít • Počt. [to] dát pryč` | `Ctít • Vážit si • Hovor. [po]darovat` | LABOT |
| 20 | `b2-vereinigen-1880` | `csText` | `Spojit • Spojit` | `Sjednotit • Spojit` | LABOT |
| 21 | `b2-Vereinigung-1882` | `csText` | `Svazek • Společnost • Spojka` | `Svaz • Společnost • Spojení` | LABOT |
| 22 | `b2-vererben-1883` | `csText` | `Zanechat • Zdědit` | `Zanechat • Odkázat dědictvím` | LABOT |
| 23 | `b2-Verfall-1885` | `csText` | `Kolaps • Pokles • Pokles` | `Zhroucení • Úpadek • Chátrání` | LABOT |
| 24 | `b2-verfallen-1886` | `csText` | `Zhroucení • Zhroucení • Pokles • Potopa` | `Zhroutit se • Zřítit se • Upadat • Chátrat` | LABOT |
| 25 | `b2-Verfügung-1889` | `csText` | `Objednávka` | `Nařízení • Příkaz` | LABOT |
| 26 | `b2-verführen-1890` | `csText` | `Svést • Svést` | `Svést • Zlákat` | LABOT |
| 27 | `b2-vergeblich-1891` | `csText` | `Marný • Marný` | `Marný • Zbytečný` | LABOT |
| 28 | `b2-vergeuden-1893` | `csText` | `Plýtvat • Plýtvat` | `Promrhat • Plýtvat` | LABOT |

## OWNER validation note
- `b2-Unterstellung-1847`: pašreizējais `Pomlouvat` ir darbības vārds, bet DE lemma un LV avots ir lietvārds.
- `b2-Untertan-1848`: `Občan` ir “pilsonis”, nevis vēsturiskais/juridiskais `pavalstnieks`.
- `b2-unterwerfen-1851` un `b2-sich unterwerfen-1852`: saglabāta atšķirība starp transitīvo “pakļaut” un refleksīvo “pakļauties”.
- `b2-verbittert-1873`: `Naštvaný` ir “dusmīgs”; avota `sarūgtināts` šeit atbilst `Zahořklý`.
- `b2-vererben-1883`: `Zdědit` nozīmē “mantot”, bet avots ir “nodot mantojumā”.
- `b2-Verfügung-1889`: `Objednávka` ir “pasūtījums”, nevis `rīkojums`.
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
- LABOT mappings: `28`
- expected applied: `28/28`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
