# CS–DE B2 REPAIR — GROUP 08

## Scope

- Dataset: `B2`
- Kartītes: `351–400`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `351–400`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Daune-360` | `csText` | `Dolů` | `Chmýří` | LABOT |
| 2 | `b2-Defizit-365` | `csText` | `Nedostatek • Nedostatek • Deficit` | `Nedostatek • Schodek • Deficit` | LABOT |
| 3 | `b2-dehnbar-366` | `csText` | `Roztažitelný • Roztažitelný • Roztahovací` | `Roztažitelný • Natahovací • Pružný` | LABOT |
| 4 | `b2-dehnen-367` | `csText` | `Natahovat • Natahovat • Natahovat • Natahovat • Táhnout` | `Natahovat • Protahovat • Natahovat se • Protahovat se • Táhnout se` | LABOT |
| 5 | `b2-Delikt-373` | `csText` | `Zločin • Porušování zákona` | `Trestný čin • Porušení zákona` | LABOT |
| 6 | `b2-dementieren-374` | `csText` | `Stáhnout informace` | `Dementovat • Odvolat informaci` | LABOT |
| 7 | `b2-Demission-375` | `csText` | `Rezignace • Rezignace` | `Odstoupení z funkce • Demise` | LABOT |
| 8 | `b2-deplaziert-378` | `csText` | `Nevhodný • Nemístný • Nečasový` | `Nevhodný • Nemístný • Nevčasný` | LABOT |
| 9 | `b2-deponieren-379` | `csText` | `Záloha • Záloha` | `Deponovat • Uložit` | LABOT |
| 10 | `b2-derartig-380` | `csText` | `Takový • Takový • Podobný` | `Takový • Tohoto druhu • Podobný` | LABOT |
| 11 | `b2-derjenige-381` | `csText` | `Že` | `Ten` | LABOT |
| 12 | `b2-deuten-382` | `csText` | `Vysvětlit • Přeložit • Naznačit` | `Vyložit • Interpretovat • Naznačit` | LABOT |
| 13 | `b2-Deutung-383` | `csText` | `Vysvětlení • Překlad • Vysvětlení • Překlad` | `Výklad • Interpretace • Vysvětlení • Výklad` | LABOT |
| 14 | `b2-Devisenbörse-385` | `csText` | `Směnárna` | `Devizová burza` | LABOT |
| 15 | `b2-Devisenkurs-386` | `csText` | `Kurz` | `Devizový kurz` | LABOT |
| 16 | `b2-Morddezernat-388` | `csText` | `Kriminální oddělení` | `Oddělení vražd` | LABOT |
| 17 | `b2-Dia-389` | `csText` | `Skluzavka` | `Diapozitiv` | LABOT |
| 18 | `b2-Diagnose-390` | `csText` | `Diagnóza` | `Diagnóza` | NELABOT / FALSE POSITIVE |
| 19 | `b2-dichten-393` | `csText` | `Zpívat • Zpívat` | `Básnit • Skládat básně` | LABOT |
| 20 | `b2-diejenige-397` | `csText` | `Tak` | `Ta` | LABOT |
| 21 | `b2-dienstlich-400` | `csText` | `Servisní pozice` | `Služební • Úřední` | LABOT |

## COPY-ONLY apply noteikumi

1. `actual current value === CURRENT` pirms katras izmaiņas.
2. Exact match → rakstīt `NEW`.
3. Nesakrīt → `CURRENT_VALUE_MISMATCH` → SKIP.
4. `b2-Diagnose-390` **nemainīt**. Čehu `Diagnóza` ir pareiza forma; deterministiskais `PL_CHAR` findings ir FALSE POSITIVE.
5. Nedrīkst mainīt DE laukus, ID/order, kartītes ārpus `351–400` vai veikt papildu cleanup.
6. Mirror pusē piemērot tikai identiskās apstiprinātās CS izmaiņas.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation

- LABOT mappings: `20`
- NELABOT / FALSE POSITIVE: `1`
- expected applied: `20/20`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `351–400`.
