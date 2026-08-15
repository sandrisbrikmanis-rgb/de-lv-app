# CS–DE B2 REPAIR — GROUP 06

## Scope

- Dataset: `B2`
- Kartītes: `251–300`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `251–300`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus, interpretācijas vai papildu cleanup pašam neveikt.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-bildend-257` | `csText` | `Nápaditý • Výchovný` | `Zobrazující • Vzdělávací` | LABOT |
| 2 | `b2-blähen-258` | `csText` | `Fouknout • Nafouknout • Nafouknout` | `Nadýmat • Nafouknout • Vzdout` | LABOT |
| 3 | `b2-sich blähen-259` | `csText` | `Nafouknout • Nafouknout` | `Nadouvat se • Vzdouvat se` | LABOT |
| 4 | `b2-Blasorchester-260` | `csText` | `Dechovka` | `Dechový orchestr` | LABOT |
| 5 | `b2-bleichen-263` | `csText` | `Balát • Balot • Bělit` | `Blednout • Vyblednout • Bělit` | LABOT |
| 6 | `b2-blenden-264` | `csText` | `Oslňovat • Oslňovat • Mást • Svádět` | `Oslňovat • Oslepit • Mást • Klamat` | LABOT |
| 7 | `b2-blödsinnig-271` | `csText` | `Šílený • Hloupý • Hloupý • Hloupý` | `Šílený • Slabomyslný • Pošetilý • Hloupý` | LABOT |
| 8 | `b2-Blutspender-278` | `csText` | `Dárce` | `Dárce krve` | LABOT |
| 9 | `b2-Bodenschätze-281` | `csText` | `Minerály` | `Nerostné suroviny` | LABOT |
| 10 | `b2-Bootsmann-283` | `csText` | `Lodník` | `Bocman` | LABOT |
| 11 | `b2-Bord-285` | `csText` | `Rada` | `Paluba • Bok lodi` | LABOT |
| 12 | `b2-Börse-287` | `csText` | `Burze cenných papírů` | `Burza cenných papírů` | LABOT |
| 13 | `b2-Borte-288` | `csText` | `Pohraniční` | `Lemovka • Ozdobný lem` | LABOT |
| 14 | `b2-Böschung-289` | `csText` | `Svah • Svah • Násep` | `Svah • Sráz • Násep` | LABOT |
| 15 | `b2-Bote-290` | `csText` | `Posel • Posel • Posel` | `Posel • Kurýr • Vyslanec` | LABOT |
| 16 | `b2-brach-291` | `csText` | `Syrový • Odložit` | `Neobdělávaný • Ležící ladem` | LABOT |
| 17 | `b2-Brandstätte-293` | `csText` | `Ohniště` | `Místo požáru` | LABOT |
| 18 | `b2-Brandmal-295` | `csText` | `Spálit • Spálit jizvu` | `Vypálená značka • Jizva po popálení` | LABOT |
| 19 | `b2-brauen-298` | `csText` | `Dělat pivo • Vařit` | `Vařit pivo • Pivovarsky vařit` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai kartīšu secību;
   - mainīt kartītes ārpus `251–300`;
   - veikt papildu stilistiskus vai lingvistiskus labojumus;
   - aizvietot šeit noteikto `NEW` ar Composer paša variantu.
5. Ja konkrētajai kartītei ir projekta mirror ieraksts, piemērot identisku apstiprināto CS izmaiņu abās mirror pusēs atbilstoši esošajai projekta struktūrai.
6. Pēc apply obligāti pārbaudīt:
   - requested mappings: `19`
   - processed: `19/19`
   - `CURRENT_VALUE_MISMATCH`: `0`
   - DE changes: `0`
   - outside-scope production changes: `0`
   - syntax: `PASS`
   - ID/order: `PASS`
   - mirror/parity: `PASS`

## Audita findings šajā grupā

Deterministiskā batch uzskaite `251–300` uzrāda `0` atsevišķus deterministiskos findings.

Šajā failā iekļautie 19 labojumi ir lingvistiski validēti no pašiem kartīšu DE / CS / LV avota pāriem. Composer tos tikai piemēro un pats neko nepievieno.

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `251–300`.
Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
