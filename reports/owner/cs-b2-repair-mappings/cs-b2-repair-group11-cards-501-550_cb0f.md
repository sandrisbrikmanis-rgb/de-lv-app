# CS–DE B2 REPAIR — GROUP 11

## Scope
- Dataset: `B2`
- Kartītes: `501–550`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `501–550`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Eheberatung-501` | `csText` | `Rodinné poradenství` | `Manželské poradenství` | LABOT |
| 2 | `b2-ehelich-502` | `csText` | `Manželství-` | `Manželský` | LABOT |
| 3 | `b2-Eheschließung-504` | `csText` | `Manželství • Manželství` | `Uzavření manželství • Sňatek` | LABOT |
| 4 | `b2-ehren-505` | `csText` | `Ctít • Ctít • Ctít` | `Ctít • Vážít si • Uctít` | LABOT |
| 5 | `b2-Ehrenamt-506` | `csText` | `Čestnou funkci` | `Čestná funkce` | LABOT |
| 6 | `b2-ehrenamtlich-507` | `csText` | `Zdarma • Při výkonu čestné povinnosti` | `Bezplatně • Při výkonu čestné funkce` | LABOT |
| 7 | `b2-Ehrenwort-514` | `csText` | `Čestný` | `Čestné slovo` | LABOT |
| 8 | `b2-ehrgeizig-515` | `csText` | `Chamtivý` | `Ctižádostivý` | LABOT |
| 9 | `b2-Ehrung-516` | `csText` | `Vyznamenání • Ceremonie vyznamenání` | `Uctění • Slavnostní uctění` | LABOT |
| 10 | `b2-Eifer-521` | `csText` | `Píle • Píle • Vášeň • Zápal • Dychtivost` | `Píle • Horlivost • Nadšení • Zápal • Dychtivost` | LABOT |
| 11 | `b2-eifrig-522` | `csText` | `Pilný • Pilný • Pilný • Horlivý` | `Pilný • Snaživý • Usilovný • Horlivý` | LABOT |
| 12 | `b2-Eigenart-523` | `csText` | `Zvláštnost • Originalita` | `Zvláštnost • Svéráz` | LABOT |
| 13 | `b2-eigenhändig-524` | `csText` | `Vlastní výroby` | `Vlastnoruční` | LABOT |
| 14 | `b2-Eigenliebe-525` | `csText` | `Sebeláska • Sobectví` | `Sebeláska • Egoismus` | LABOT |
| 15 | `b2-eigensinnig-526` | `csText` | `Tvrdohlavý • Tvrdohlavý` | `Umíněný • Tvrdohlavý` | LABOT |
| 16 | `b2-eigenwillig-528` | `csText` | `Svévolný • Zarputilý • Zatvrzelý • Suverénní` | `Svévolný • Umíněný • Tvrdohlavý • Svérázný` | LABOT |
| 17 | `b2-Eilbote-529` | `csText` | `Posel • Kurýr` | `Rychlý posel • Kurýr` | LABOT |
| 18 | `b2-Einbildung-534` | `csText` | `Fantazie • Fantazie • Fantazie • Domýšlivost • Domýšlivost` | `Představa • Představivost • Fantazie • Domýšlivost • Nadutost` | LABOT |
| 19 | `b2-einbürgern-535` | `csText` | `Přiznat právo občana • Zavést • Zakořenit` | `Udělit občanství • Zavést • Zakořenit` | LABOT |
| 20 | `b2-einbüßen-536` | `csText` | `Utrpí materiální ztráty` | `Utrpět materiální ztráty` | LABOT |
| 21 | `b2-eindringen-537` | `csText` | `Vtlačit • Vtrhnout • Vsáknout • Ponořit se do` | `Vniknout • Vtrhnout • Vsáknout • Ponořit se do` | LABOT |
| 22 | `b2-einfältig-539` | `csText` | `Svéprávný • Naivní` | `Prostomyslný • Naivní` | LABOT |
| 23 | `b2-einfassen-540` | `csText` | `Zahrnovat • Rám • Rám` | `Obklopit • Zarámovat • Vsadit do obruby` | LABOT |
| 24 | `b2-einflussreich-541` | `csText` | `Vlivný • Působivý` | `Vlivný` | LABOT |
| 25 | `b2-einfrieren-543` | `csText` | `Zmrazit • Zmrazit • Zastavit` | `Zmrazit • Zamrazit • Pozastavit` | LABOT |
| 26 | `b2-Einfuhr-544` | `csText` | `Úvod • Dovoz • Vnášení • Dovoz` | `Dovoz • Import • Dovážení • Importování` | LABOT |
| 27 | `b2-Eingabe-546` | `csText` | `Aplikace • Zadávání dat do počítače` | `Podání • Zadávání dat do počítače` | LABOT |
| 28 | `b2-eingebildet-547` | `csText` | `Namyšlený • Namyšlený` | `Domýšlivý • Nadutý` | LABOT |
| 29 | `b2-eingehen-549` | `csText` | `Vstoupit • Přijet • Vstoupit • Vstoupit • Zmenšit • Souhlasit • Vsadit` | `Vejít • Dorazit • Přijít • Srazit se • Zmenšit se • Souhlasit • Vsadit se` | LABOT |
| 30 | `b2-eingehend-550` | `csText` | `Důkladný • Drobný • Příchozí` | `Důkladný • Podrobný • Příchozí` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. DE laukus, ID/order un kartītes ārpus `501–550` nemainīt.
4. Nekādu Composer paša tulkojumu vai cleanup.
5. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
6. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `30`
- expected applied: `30/30`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `501–550`.
