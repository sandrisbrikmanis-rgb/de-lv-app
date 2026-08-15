# CS–DE B2 REPAIR — GROUP 13

## Scope
- Dataset: `B2`
- Kartītes: `601–650`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `601–650`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Eisgang-602` | `csText` | `Chůze po ledu` | `Chod ledu • Pohyb ledových ker` | LABOT |
| 2 | `b2-Eissegeln-604` | `csText` | `Plavba s ledovými jachtami` | `Jízda na ledových jachtách` | LABOT |
| 3 | `b2-eitel-605` | `csText` | `Namyšlený • Namyšlený • Namyšlený • Mělký • Prázdný • Okázalý` | `Marnivý • Nadutý • Domýšlivý • Povrchní • Prázdný • Okázalý` | LABOT |
| 4 | `b2-Ekel-606` | `csText` | `Hnus • Hnus` | `Odpor • Hnus` | LABOT |
| 5 | `b2-Elster-608` | `csText` | `Škytavka` | `Straka` | LABOT |
| 6 | `b2-Empfangschef-609` | `csText` | `Správce hotelu` | `Vedoucí recepce` | LABOT |
| 7 | `b2-sich-empfehlen` | `csText` | `Být doporučeno` | `Doporučovat se • Být doporučeníhodný` | LABOT |
| 8 | `b2-Empörung-614` | `csText` | `Pobouření • Vzpoura • Vzpoura` | `Pobouření • Vzpoura • Povstání` | LABOT |
| 9 | `b2-entbehren-616` | `csText` | `Obejít se bez • Vydržet • Nedostatek` | `Postrádat • Obejít se bez • Strádat` | LABOT |
| 10 | `b2-Entbindung-618` | `csText` | `Propustit • Vysvobození • Porod` | `Propuštění • Zproštění • Porod` | LABOT |
| 11 | `b2-entehren-619` | `csText` | `Okrást čest • Potupa` | `Zbavit cti • Zneuctít` | LABOT |
| 12 | `b2-entfallen-622` | `csText` | `Vypadnout • Zapomenout` | `Odpadnout • Vypadnout z paměti` | LABOT |
| 13 | `b2-entfalten-623` | `csText` | `Odvinout • Rozvinout • Rozvinout • Rozvinout` | `Rozvinout • Rozložit • Rozvíjet • Rozvinout` | LABOT |
| 14 | `b2-sich entfalten-624` | `csText` | `Otevřít • Uvolnit • Rozvinout • Rozvinout` | `Rozvinout se • Uvolnit se • Rozvíjet se • Rozvinout se` | LABOT |
| 15 | `b2-entflammen-625` | `csText` | `Zapálit • Zapálit • Vzrušit • Vzplanout` | `Zapálit • Zažehnout • Nadchnout • Vzplanout` | LABOT |
| 16 | `b2-entführen-626` | `csText` | `Odnést • Unést` | `Odvést • Unést` | LABOT |
| 17 | `b2-entkräften-632` | `csText` | `Zbavit síly • Oslabit • Vyvrátit • Převrátit` | `Zbavit síly • Oslabit • Vyvrátit • Zpochybnit` | LABOT |
| 18 | `b2-entladen-633` | `csText` | `Vyložit • Vyložit` | `Vyložit • Vybít` | LABOT |
| 19 | `b2-entlarven-634` | `csText` | `Vystavit` | `Odhalit • Demaskovat` | LABOT |
| 20 | `b2-sich-entledigen` | `csText` | `Zbavit se • Zbavit se` | `Zbavit se • Oprostit se od` | LABOT |
| 21 | `b2-entlegen-636` | `csText` | `Vzdálený • Vzdálený • Vzdálený` | `Odlehlý • Odloučený • Vzdálený` | LABOT |
| 22 | `b2-entmutigen-637` | `csText` | `Sebrat odvahu` | `Vzít odvahu • Odrazovat` | LABOT |
| 23 | `b2-entnehmen-638` | `csText` | `Vzít • Vzít • Vyjmout • Uzavřít` | `Vzít • Odebrat • Vyjmout • Usoudit` | LABOT |
| 24 | `b2-sich-entruesten` | `csText` | `Zlobit se • Vzbouřit se` | `Rozhořčit se • Pobouřit se` | LABOT |
| 25 | `b2-entsagen-640` | `csText` | `Vzdát se • Vzdát se` | `Zříci se • Vzdát se` | LABOT |
| 26 | `b2-sich-entsinnen` | `csText` | `Pamatovat • Pamatovat si` | `Vzpomenout si • Rozpomenout se` | LABOT |
| 27 | `b2-Entspannung-643` | `csText` | `Relaxace • Relaxace • Snížení napětí` | `Uvolnění • Relaxace • Snížení napětí` | LABOT |
| 28 | `b2-entstellen-644` | `csText` | `Pokřivit • Vyšinout • Pokřivit` | `Znetvořit • Zohavit • Zkreslit` | LABOT |
| 29 | `b2-entweichen-645` | `csText` | `Vzdálit se • Uniknout • Ustoupit • Vyzařovat` | `Vzdálit se • Uniknout • Ustoupit • Unikat` | LABOT |
| 30 | `b2-entwerfen-646` | `csText` | `Odlévat • Obrys` | `Navrhnout • Načrtnout` | LABOT |
| 31 | `b2-entwurzeln-650` | `csText` | `Vykořenit • Vyhubit • Zcela vymýtit` | `Vykořenit • Vymýtit • Zcela odstranit` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. DE laukus, ID/order un kartītes ārpus `601–650` nemainīt.
4. Nekādu Composer paša tulkojumu, pārvērtēšanas vai cleanup.
5. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
6. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `31`
- expected applied: `31/31`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `601–650`.
