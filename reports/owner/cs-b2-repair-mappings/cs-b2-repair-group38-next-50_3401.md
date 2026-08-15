# CS–DE B2 REPAIR — GROUP 38

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 37
- Aptuvenais ID diapazons: `1899–1948`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Verhör-1899` | `csText` | `[z] výslechu` | `[Z] výslechu • Výslech` | LABOT |
| 2 | `b2-verhören-1900` | `csText` | `[z] dotazování` | `[Vy]slechnout • Vyslýchat` | LABOT |
| 3 | `b2-sich verhören-1901` | `csText` | `Poslouchej znovu` | `Přeslechnout se` | LABOT |
| 4 | `b2-Verlauf-1903` | `csText` | `Pokrok • Pokrok` | `Průběh • Vývoj` | LABOT |
| 5 | `b2-Vermerk-1907` | `csText` | `Poznámka • Označit` | `Poznámka • Záznam` | LABOT |
| 6 | `b2-Vermögen-1908` | `csText` | `Vlastnictví` | `Majetek` | LABOT |
| 7 | `b2-Vers-1912` | `csText` | `Článek` | `Verš` | LABOT |
| 8 | `b2-Versager-1913` | `csText` | `Poražený • Poražený` | `Poražený • Neúspěšný člověk` | LABOT |
| 9 | `b2-Versehen-1915` | `csText` | `Chyba • Revize` | `Chyba • Přehlédnutí` | LABOT |
| 10 | `b2-verkommen-1916` | `csText` | `Odmítnout • Potopit se • Zabloudit` | `Chátrat • Upadat • Zpustnout` | LABOT |
| 11 | `b2-verkörpern-1917` | `csText` | `Ztělesňující` | `Ztělesnit • Ztělesňovat` | LABOT |
| 12 | `b2-verkümmern-1919` | `csText` | `Odmítnout` | `Chřadnout • Zakrňovat` | LABOT |
| 13 | `b2-verkünden-1920` | `csText` | `Oznamovat • Oznamovat` | `Oznámit • Vyhlásit` | LABOT |
| 14 | `b2-vermehren-1922` | `csText` | `Množit se • Množit` | `Rozmnožovat • Zvětšovat` | LABOT |
| 15 | `b2-sich vermehren-1923` | `csText` | `Násobení` | `Rozmnožovat se • Množit se` | LABOT |
| 16 | `b2-vermögend-1927` | `csText` | `Bohatý • Živený` | `Majetný • Zámožný` | LABOT |
| 17 | `b2-verordnen-1930` | `csText` | `Určit • Nařídit • Med. podepsat` | `Stanovit • Nařídit • Med. předepsat` | LABOT |
| 18 | `b2-verpfänden-1931` | `csText` | `Slib` | `Zastavit • Dát do zástavy` | LABOT |
| 19 | `b2-verrenken-1933` | `csText` | `Vykloubit se` | `Vykloubit • Vymknout` | LABOT |
| 20 | `b2-versagen-1934` | `csText` | `Zapřít • Odmítnout • Odmítnout • Neuposlechnout • Odmítnout sloužit • Působit zbaběle a bezmocně` | `Selhat • Odepřít • Odmítnout • Neposlechnout • Vypovědět službu • Ukázat se jako zbabělý a bezmocný` | LABOT |
| 21 | `b2-sich-versehen` | `csText` | `Zapomenout • Vybavit se` | `Přehlédnout se • Opatřit se` | LABOT |
| 22 | `b2-versetzen-1936` | `csText` | `Hýbat • Hýbat` | `Přemístit • Přeložit` | LABOT |
| 23 | `b2-versöhnen-1940` | `csText` | `Smířit se` | `Smířit` | LABOT |
| 24 | `b2-verspielen-1942` | `csText` | `Hrát • Prohrát` | `Prohrát • Promarnit` | LABOT |
| 25 | `b2-verspotten-1943` | `csText` | `Promáčknout • Posměch` | `Zesměšnit • Vysmívat se` | LABOT |
| 26 | `b2-verständig-1944` | `csText` | `Příčetný • Rozumný` | `Rozvážný • Rozumný` | LABOT |
| 27 | `b2-verstauchen-1945` | `csText` | `Vykloubit se` | `Vymknout • Podvrtnout` | LABOT |

## OWNER validation note
- `b2-Verhör-1899` / `b2-verhören-1900`: saglabāta avota `[no]` prefiksa ideja, bet čehu forma normalizēta uz lietvārdu/darbības vārdu.
- `b2-sich verhören-1901`: `Poslouchej znovu` ir pavēles forma “klausies vēlreiz”, nevis `pārklausīties`.
- `b2-Vers-1912`: `Článek` ir “raksts/pants”, bet vācu `Vers` šajā avotā ir dzejas `pants` → `Verš`.
- `b2-verpfänden-1931`: `Slib` nozīmē “solījums”, nevis “ieķīlāt”.
- `b2-versöhnen-1940` un `b2-sich-versoehnen`: saglabāta transitīvā/refleksīvā atšķirība; refleksīvā kartīte paliek nemainīta.
- `b2-verstauchen-1945`: čehu `podvrtnout/vymknout` precīzāk atbilst sastiepuma/izmežģījuma nozīmei.
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
- LABOT mappings: `27`
- expected applied: `27/27`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
