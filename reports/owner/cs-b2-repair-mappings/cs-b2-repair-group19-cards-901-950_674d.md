# CS–DE B2 REPAIR — GROUP 19

## Scope
- Dataset: `B2`
- Kartītes: `901–950`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `901–950`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Geldentwertung-902` | `csText` | `Znehodnocení peněz` | `Znehodnocení měny` | LABOT |
| 2 | `b2-Geldschein-903` | `csText` | `Bankovka • Bankovka` | `Bankovka • Papírové platidlo` | LABOT |
| 3 | `b2-Gelege-906` | `csText` | `Zdivo` | `Snůška vajec` | LABOT |
| 4 | `b2-Geliebte-910` | `csText` | `Milovaný • Milovaný • Milenec` | `Milovaný • Miláček • Milenec` | LABOT |
| 5 | `b2-Geltung-912` | `csText` | `Význam • Význam` | `Význam • Platnost` | LABOT |
| 6 | `b2-Gemahl-913` | `csText` | `Manžel • Manžel` | `Manžel • Choť` | LABOT |
| 7 | `b2-Gemahlin-914` | `csText` | `Manželka • Manžel` | `Manželka • Choť` | LABOT |
| 8 | `b2-gemäß-915` | `csText` | `Po • Podle • Podle toho` | `Podle • V souladu s • V souladu s tím` | LABOT |
| 9 | `b2-Gemisch-918` | `csText` | `Směs • Směs • Směs` | `Směs • Míšenina • Směsice` | LABOT |
| 10 | `b2-Gemüsebau-919` | `csText` | `Okopaniny • Zeleninové plodiny` | `Pěstování okopanin • Zelinářství` | LABOT |
| 11 | `b2-Gemüt-920` | `csText` | `Charakter • Příroda • Myšlenky • Mysl` | `Povaha • Přirozenost • Myšlenky • Mysl` | LABOT |
| 12 | `b2-gemütvoll-921` | `csText` | `Teplý • Útulný` | `Srdečný • Útulný` | LABOT |
| 13 | `b2-genesen-925` | `csText` | `Uzdravit se • Uzdravit se` | `Uzdravit se • Zotavit se` | LABOT |
| 14 | `b2-Genesung-926` | `csText` | `Zotavení • Zotavení` | `Uzdravení • Zotavení` | LABOT |
| 15 | `b2-Genosse-929` | `csText` | `Členem` | `Soudruh • Druh` | LABOT |
| 16 | `b2-Genossin-930` | `csText` | `Člen • Člen` | `Soudružka • Družka` | LABOT |
| 17 | `b2-geraten-935` | `csText` | `Dorazit • Dostat se • Vzdát se • Uspět • Zasáhnout` | `Dostat se • Ocitnout se • Poddat se • Podařit se • Narazit` | LABOT |
| 18 | `b2-Geratewohl-936` | `csText` | `Hodně štěstí` | `Naslepo • Nazdařbůh` | LABOT |
| 19 | `b2-geräuschlos-937` | `csText` | `Tiše • Tiše • Bez hluku` | `Tiše • Neslyšně • Bez hluku` | LABOT |
| 20 | `b2-Gerede-938` | `csText` | `Mluvení • Řeč • Lidový jazyk • Drby` | `Mluvení • Řeči • Řeči lidí • Drby` | LABOT |
| 21 | `b2-gerinnen-939` | `csText` | `Srážet se • Ztuhnout • Ztuhnout • Ztuhnout • Zmrznout` | `Srážet se • Srazit se • Zhrudkovatět • Ztuhnout • Zmrznout` | LABOT |
| 22 | `b2-Gerippe-940` | `csText` | `Kostra • Tělo • Kostra` | `Kostra • Kostlivec • Kostra konstrukce` | LABOT |
| 23 | `b2-Gesamtzahl-942` | `csText` | `Celkový` | `Celkový počet` | LABOT |
| 24 | `b2-Geschiedene-946` | `csText` | `Rozvod` | `Rozvedený muž` | LABOT |
| 25 | `b2-Geschöpf-947` | `csText` | `Stvoření • Stvoření • Bytost` | `Tvor • Stvoření • Bytost` | LABOT |
| 26 | `b2-Geschwätz-950` | `csText` | `Klábosit • Lhát • Klábosit` | `Klábosení • Lhaní • Tláchání` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. DE laukus, ID/order un kartītes ārpus `901–950` nemainīt.
4. Nekādu Composer paša tulkojumu, interpretācijas vai cleanup.
5. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
6. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `26`
- expected applied: `26/26`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `901–950`.
