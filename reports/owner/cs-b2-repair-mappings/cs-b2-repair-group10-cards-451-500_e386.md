# CS–DE B2 REPAIR — GROUP 10

## Scope
- Dataset: `B2`
- Kartītes: `451–500`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `451–500`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Drucksache-454` | `csText` | `Bandrole • Tisk v poštovních zásilkách` | `Tiskovina • Tiskovina jako poštovní zásilka` | LABOT |
| 2 | `b2-düngen-462` | `csText` | `Oplodnit` | `Hnojit` | LABOT |
| 3 | `b2-dunkeln-464` | `csText` | `Stmívá se • Stmívá se` | `Tmavnout • Stmívat se` | LABOT |
| 4 | `b2-dünken-465` | `csText` | `Zdát se • Zdát se` | `Zdát se • Připadat` | LABOT |
| 5 | `b2-Dunst-466` | `csText` | `Pára • Výpary • Výpary • Pára • Mlha • Opar` | `Pára • Výpar • Zplodiny • Dusno • Mlha • Opar` | LABOT |
| 6 | `b2-durcharbeiten-467` | `csText` | `Rozvíjet • Pozorně číst • Pečlivě hníst` | `Propracovat • Důkladně přečíst • Důkladně prohníst` | LABOT |
| 7 | `b2-durchaus-468` | `csText` | `Docela • Úplně • Úplně` | `Docela • Naprosto • Zcela` | LABOT |
| 8 | `b2-durchbrechen-469` | `csText` | `Prorazit • Prorazit • Objevit se • Prorazit` | `Přelomit • Prorazit • Objevit se • Prolomit` | LABOT |
| 9 | `b2-durchbrennen-470` | `csText` | `Propálit • Propálit • Propálit • Vyhořet` | `Propálit skrz • Přepálit • Vyhořet • Přepálit se` | LABOT |
| 10 | `b2-durchbringen-471` | `csText` | `Projít • Pronést • Dosáhnout • Vyléčit • Plýtvat` | `Dostat skrz • Pronést skrz • Prosadit • Vyléčit • Promrhat` | LABOT |
| 11 | `b2-Durchbruch-472` | `csText` | `Protržení • Protržení přehrady` | `Průlom • Protržení hráze` | LABOT |
| 12 | `b2-durchdringen-473` | `csText` | `Prosadit se • Prorazit • Být zavalen` | `Pronikat • Prorazit • Být prostoupen` | LABOT |
| 13 | `b2-Durchfahrt-474` | `csText` | `Průchod • Průchod` | `Průjezd • Průjezd` | LABOT |
| 14 | `b2-Durchfuhr-475` | `csText` | `Procházející • Tranzit` | `Průvoz • Tranzit` | LABOT |
| 15 | `b2-Durchführung-476` | `csText` | `Prosadit něco • Dělat • Dělat • Provádět • Realizovat` | `Provedení skrz • Splnění • Provedení • Provádění • Realizace` | LABOT |
| 16 | `b2-durchgreifend-477` | `csText` | `Radikál` | `Radikální` | LABOT |
| 17 | `b2-durchmachen-479` | `csText` | `Přežít • Odstranit • Dokončit` | `Prožít • Vyjmout • Dokončit` | LABOT |
| 18 | `b2-Durchmesser-480` | `csText` | `Průměr • Průměr` | `Průměr • Diametr` | LABOT |
| 19 | `b2-Durchreise-482` | `csText` | `Procházející skrz` | `Průjezd` | LABOT |
| 20 | `b2-durchschlagen-484` | `csText` | `Přecedit • Prolít sítem • Prorazit • Prorazit díru` | `Přecedit • Protlačit sítem • Probít se • Prorazit díru` | LABOT |
| 21 | `b2-durchsehen-485` | `csText` | `Zkoumat • Zkoumat • Prohlížet` | `Prohlédnout • Zkontrolovat • Dívat se skrz` | LABOT |
| 22 | `b2-durchsetzen-486` | `csText` | `Projít • Dosáhnout` | `Prosadit • Dosáhnout` | LABOT |
| 23 | `b2-dürsten-490` | `csText` | `Žíznit • Mít žízeň • Mít žízeň` | `Žíznit • Mít žízeň • Toužit` | LABOT |
| 24 | `b2-ebenbürtig-493` | `csText` | `Ekvivalent` | `Rovnocenný` | LABOT |
| 25 | `b2-Eberesche-494` | `csText` | `Sirný mech • Jeřáb` | `Jeřáb ptačí • Jeřáb` | LABOT |
| 26 | `b2-ebnen-495` | `csText` | `Úroveň • Hladká` | `Vyrovnat • Uhladit` | LABOT |
| 27 | `b2-edel-497` | `csText` | `Vznešený • Vznešený • Vznešený` | `Ušlechtilý • Vznešený • Šlechtický` | LABOT |
| 28 | `b2-effektvoll-499` | `csText` | `Účinný` | `Efektní` | LABOT |
| 29 | `b2-Egge-500` | `csText` | `Brány` | `Brány` | NELABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. `b2-Egge-500` nemainīt: čehu `brány` ir pareizs lauksaimniecības termina ekvivalents DE `Egge`.
4. DE laukus, ID/order un kartītes ārpus `451–500` nemainīt.
5. Nekādu Composer paša tulkojumu vai cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.

## Validation
- LABOT mappings: `28`
- NELABOT: `1`
- expected applied: `28/28`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `451–500`.
