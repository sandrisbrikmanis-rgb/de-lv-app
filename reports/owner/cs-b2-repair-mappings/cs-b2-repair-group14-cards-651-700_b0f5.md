# CS–DE B2 REPAIR — GROUP 14

## Scope
- Dataset: `B2`
- Kartītes: `651–700`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `651–700`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-entziehen-651` | `csText` | `Odnést • Odvézt • Vyhnout se • Odtrhnout • Uniknout` | `Odejmout • Odtrhnout • Vyhnout se • Odpoutat se • Uniknout` | LABOT |
| 2 | `b2-entzückt-654` | `csText` | `Vzrušený` | `Nadšený • Okouzlený` | LABOT |
| 3 | `b2-entzünden-655` | `csText` | `Zapálit • Zapálit • Rozsvítit` | `Zapálit • Zažehnout • Rozsvítit` | LABOT |
| 4 | `b2-sich entzünden-656` | `csText` | `Vzplanout • Zapálit • Rozpálit` | `Vzplanout • Vznítit se • Zanítit se` | LABOT |
| 5 | `b2-Entzündung-657` | `csText` | `Zapálení • Zapálení • Zapálení` | `Zapálení • Vznícení • Zánět` | LABOT |
| 6 | `b2-Erachten-660` | `csText` | `Myšlenky • Vhled` | `Mínění • Názor` | LABOT |
| 7 | `b2-sich-erbarmen` | `csText` | `Smilovat se • Smilovat se` | `Smilovat se • Slitovat se` | LABOT |
| 8 | `b2-Erbauer-662` | `csText` | `Zvedák` | `Stavitel` | LABOT |
| 9 | `b2-erbrechen-664` | `csText` | `Rozbít • Rozsekat` | `Zvracet` | LABOT |
| 10 | `b2-erdrücken-666` | `csText` | `Potlačit • Potlačit` | `Rozdrtit • Udusit tlakem` | LABOT |
| 11 | `b2-Erdtrabant-669` | `csText` | `Zemský společník` | `Družice Země` | LABOT |
| 12 | `b2-ergiebig-674` | `csText` | `Plodný • Výnosný • Bohatý • Hojný • Plodný` | `Plodný • Výnosný • Bohatý • Hojný • Vydatný` | LABOT |
| 13 | `b2-erhaben-676` | `csText` | `Reliéf • Vypouklý • Velký • Velký • Vznešený • Vznešený • Vynikající` | `Reliéfní • Vypouklý • Velkolepý • Majestátní • Ušlechtilý • Vznešený • Vynikající` | LABOT |
| 14 | `b2-sich erheben-678` | `csText` | `Vstávat • Vstávat • Vstávat` | `Vstát • Zvednout se • Povstat` | LABOT |
| 15 | `b2-erlangen-682` | `csText` | `Dosáhnout • Dosáhnout • Získat • Získat` | `Dosáhnout • Dospět k • Získat • Nabýt` | LABOT |
| 16 | `b2-Erlass-683` | `csText` | `Nařídit • Nařídit • Nařídit • Propustit` | `Nařízení • Příkaz • Dekret • Prominutí` | LABOT |
| 17 | `b2-erlassen-684` | `csText` | `Vydat • Uvolnit • Uvolnit` | `Vydat • Prominout • Zprostit` | LABOT |
| 18 | `b2-erläutern-685` | `csText` | `Vysvětlit • Vysvětlit` | `Objasnit • Vysvětlit` | LABOT |
| 19 | `b2-erleiden-687` | `csText` | `Trpět • Snášet • Snášet • Být poražen` | `Utrpět • Vytrpět • Přestát • Utrpět porážku` | LABOT |
| 20 | `b2-erlöschen-688` | `csText` | `Zhasnout • Zhasnout • Pozbýt platnosti • Zaniknout` | `Vyhasnout • Zhasnout • Pozbýt platnosti • Zaniknout` | LABOT |
| 21 | `b2-ermächtigen-689` | `csText` | `Povolit` | `Zmocnit • Pověřit` | LABOT |
| 22 | `b2-ermitteln-691` | `csText` | `Zjistit • Zjistit` | `Zjistit • Vypátrat` | LABOT |
| 23 | `b2-erniedrigen-692` | `csText` | `Nižší • Ponížit` | `Snížit • Ponížit` | LABOT |
| 24 | `b2-Ernteertrag-694` | `csText` | `Plodina` | `Výnos sklizně • Úroda` | LABOT |
| 25 | `b2-Eröffnung-695` | `csText` | `Otevření • Objev • Pohlednice • Oznámení • Objev` | `Otevření • Zahájení • Odhalení • Oznámení • Objev` | LABOT |
| 26 | `b2-erörtern-696` | `csText` | `Diskutovat • Diskutovat` | `Rozebrat • Projednat` | LABOT |
| 27 | `b2-erpressen-697` | `csText` | `Vydírání` | `Vydírat` | LABOT |
| 28 | `b2-erregen-698` | `csText` | `Vzrušovat • Vzrušovat • Vyvolávat • Vyvolávat • Vzbudit` | `Znepokojit • Rozrušit • Vyvolat • Způsobit • Vzbudit` | LABOT |
| 29 | `b2-sich-erregen` | `csText` | `Starat se o` | `Rozčilovat se kvůli • Znepokojovat se kvůli` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. DE laukus, ID/order un kartītes ārpus `651–700` nemainīt.
4. Nekādu Composer paša tulkojumu, interpretācijas vai cleanup.
5. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
6. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `29`
- expected applied: `29/29`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `651–700`.
