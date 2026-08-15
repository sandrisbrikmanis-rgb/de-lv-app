# CS–DE B2 REPAIR — GROUP 18

## Scope
- Dataset: `B2`
- Kartītes: `851–900`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `851–900`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Fürsprache-857` | `csText` | `Přesvědčování • Obhajitelné dobré jméno` | `Přímluva • Dobré slovo na něčí podporu` | LABOT |
| 2 | `b2-gängig-863` | `csText` | `Chůze` | `Běžný • Obvyklý` | LABOT |
| 3 | `b2-Garbe-865` | `csText` | `Svazek • Svazek` | `Snop • Svazeček` | LABOT |
| 4 | `b2-Garde-866` | `csText` | `Hlídat` | `Garda` | LABOT |
| 5 | `b2-Garnknäuel-868` | `csText` | `Kus` | `Klubko příze` | LABOT |
| 6 | `b2-Gasableser-870` | `csText` | `Plynoměr` | `Odečítač plynoměru` | LABOT |
| 7 | `b2-Gastarbeiter-871` | `csText` | `Hostující pracovník` | `Zahraniční pracovník` | LABOT |
| 8 | `b2-Gattung-874` | `csText` | `Druh • Plemeno` | `Druh • Rod` | LABOT |
| 9 | `b2-Gebärde-875` | `csText` | `Gesto • Rys` | `Gesto • Výraz` | LABOT |
| 10 | `b2-Gebot-876` | `csText` | `Příkaz • Požadavek • Příkaz` | `Příkaz • Požadavek • Přikázání` | LABOT |
| 11 | `b2-gebrechlich-877` | `csText` | `Slabý • Seschlý • Gauden • Zmrzačený • Plný chyb` | `Vetchý • Sešlý • Chatrný • Zmrzačený • Plný vad` | LABOT |
| 12 | `b2-gedämpft-878` | `csText` | `Tlumený • Tlumený • Tlumený` | `Dušený • Tlumený • Potlačený` | LABOT |
| 13 | `b2-gedeihen-880` | `csText` | `Dělat dobře • Uspět • Prosperovat • Prosperovat` | `Dařit se • Podařit se • Vzkvétat • Prosperovat` | LABOT |
| 14 | `b2-gedenken-881` | `csText` | `Mít na mysli • Pamatovat • Pamatovat • Zmínit se` | `Mít v úmyslu • Pamatovat • Vzpomínat • Připomínat` | LABOT |
| 15 | `b2-Gefährte-884` | `csText` | `Členem` | `Druh • Společník` | LABOT |
| 16 | `b2-Gefallen-885` | `csText` | `Zálibu • Rád` | `Zalíbení • Libost` | LABOT |
| 17 | `b2-gefällig-886` | `csText` | `Příjemný • Vstřícný • Vstřícný • Milý` | `Příjemný • Ochotný • Úslužný • Milý` | LABOT |
| 18 | `b2-Gefäß-887` | `csText` | `Céva • Céva` | `Nádoba • Céva` | LABOT |
| 19 | `b2-Gefecht-888` | `csText` | `Bitva • Bitva` | `Bitva • Boj` | LABOT |
| 20 | `b2-Gefolge-889` | `csText` | `Doprovod • Doprovod` | `Družina • Doprovod` | LABOT |
| 21 | `b2-Gefüge-890` | `csText` | `Struktūra • Uzbūve • Savienojums • Salaidums` | `Struktura • Stavba • Spojení • Sestava` | LABOT |
| 22 | `b2-Gegenrede-893` | `csText` | `Prohlášení • Námitka` | `Námitka • Oponování` | LABOT |
| 23 | `b2-Gegensatz-894` | `csText` | `Protiklad • Protiklad • Rozpor` | `Protiklad • Kontrast • Rozpor` | LABOT |
| 24 | `b2-Amtsgeheimnis-895` | `csText` | `Tajemství úřadu` | `Úřední tajemství` | LABOT |
| 25 | `b2-gehörig-896` | `csText` | `Náležet • Náležet • Patřičný • Slušivý` | `Náležitý • Příslušný • Patřičný • Slušný` | LABOT |
| 26 | `b2-Geiselnahme-897` | `csText` | `Braní rukojmích` | `Braní rukojmí` | LABOT |
| 27 | `b2-Geländelauf-900` | `csText` | `Cross country` | `Přespolní běh` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. DE laukus, ID/order un kartītes ārpus `851–900` nemainīt.
4. Nekādu Composer paša tulkojumu, interpretācijas vai cleanup.
5. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
6. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `27`
- expected applied: `27/27`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `851–900`.
