# CS–DE B2 REPAIR — GROUP 15

## Scope

- Dataset: `B2`
- Kartītes: `701–750`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `701–750`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus, interpretācijas vai papildu cleanup pašam neveikt.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Erscheinung-703` | `csText` | `Fenomén • Vzhled • Vzhled • Vzhled` | `Jev • Objevení se • Zevnějšek • Vzhled` | LABOT |
| 2 | `b2-erschießen-704` | `csText` | `Střílet` | `Zastřelit` | LABOT |
| 3 | `b2-erschlagen-705` | `csText` | `Odklepnout` | `Utlouct • Usmrtit úderem` | LABOT |
| 4 | `b2-erschweren-708` | `csText` | `Ztížit • Ztížit` | `Ztížit • Učinit obtížnějším` | LABOT |
| 5 | `b2-ersparen-710` | `csText` | `Uložit • Uložit • Ušetřit • Ušetřit` | `Ušetřit • Naspořit • Odložit stranou • Ušetřit někoho něčeho` | LABOT |
| 6 | `b2-Ersparnis-711` | `csText` | `Úspory • Úspory` | `Úspora • Úspory` | LABOT |
| 7 | `b2-ersticken-713` | `csText` | `Dusit • Dusit • Dusit • Utlačovat • Utlačovat • Dusit • Dusit` | `Udusit • Zardousit • Potlačit • Utlačovat • Potlačovat • Udusit se • Zadusit se` | LABOT |
| 8 | `b2-sich erstrecken-714` | `csText` | `Roztáhnout • Roztáhnout • Natáhnout` | `Rozprostírat se • Sahat • Táhnout se` | LABOT |
| 9 | `b2-ertönen-716` | `csText` | `Ozývat se • Ozývat se` | `Zaznít • Rozeznít se` | LABOT |
| 10 | `b2-erträglich-718` | `csText` | `Snesitelný • Snesitelný` | `Snesitelný • Únosný` | LABOT |
| 11 | `b2-Erwägung-720` | `csText` | `Úvaha • Úvaha` | `Zvažování • Úvaha` | LABOT |
| 12 | `b2-erweisen-721` | `csText` | `Ukazovat • Ukazovat • Dělat` | `Prokázat • Ukázat • Projevit` | LABOT |
| 13 | `b2-sich-erweisen` | `csText` | `Ukázat být` | `Ukázat se jako • Prokázat se jako` | LABOT |
| 14 | `b2-Erwerb-723` | `csText` | `Výdělek • Zisk • Zisk` | `Výdělek • Zisk • Nabytí` | LABOT |
| 15 | `b2-erwerben-724` | `csText` | `Vydělat • Získat • Získat` | `Vydělat • Získat • Nabýt` | LABOT |
| 16 | `b2-erzielen-726` | `csText` | `Získat • Dosáhnout • Dosáhnout` | `Získat • Dosáhnout • Docílit` | LABOT |
| 17 | `b2-erzürnen-727` | `csText` | `Zlobit se` | `Rozhněvat • Rozzlobit` | LABOT |
| 18 | `b2-Esche-728` | `csText` | `Popel` | `Jasan` | LABOT |
| 19 | `b2-exklusiv-737` | `csText` | `Vyšetřován • Jemný • Šlechtický` | `Vybraný • Exkluzivní • Aristokratický` | LABOT |
| 20 | `b2-Export-740` | `csText` | `Exportovat • Exportovat` | `Export • Vývoz` | LABOT |
| 21 | `b2-exportieren-741` | `csText` | `Vyvážet • Vynášet` | `Exportovat • Vyvážet` | LABOT |
| 22 | `b2-exquisit-742` | `csText` | `Vyšetřovaný • Jemný` | `Vybraný • Vytříbený` | LABOT |
| 23 | `b2-Fabrikat-745` | `csText` | `Průmyslová výroba • Výrobek` | `Průmyslový výrobek • Výrobek` | LABOT |
| 24 | `b2-Fachabitur-746` | `csText` | `Absolvoval odbornou školu` | `Odborná maturita` | LABOT |
| 25 | `b2-fahl-749` | `csText` | `Tupý • Bledý` | `Matný • Bledý` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai kartīšu secību;
   - mainīt kartītes ārpus `701–750`;
   - veikt papildu stilistiskus vai lingvistiskus labojumus;
   - aizvietot šeit noteikto `NEW` ar Composer paša variantu.
5. Ja konkrētajai kartītei ir projekta mirror ieraksts, piemērot identisku apstiprināto CS izmaiņu abās mirror pusēs atbilstoši esošajai projekta struktūrai.

## Validation

- LABOT mappings: `25`
- expected applied: `25/25`
- `CURRENT_VALUE_MISMATCH`: `0`
- DE changes: `0`
- outside-scope production changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `701–750`.
Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
