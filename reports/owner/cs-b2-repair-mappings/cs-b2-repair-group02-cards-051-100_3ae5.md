# CS–DE B2 REPAIR — GROUP 02

## Scope

- Dataset: `B2`
- Kartītes: `051–100`
- Unikālas affected kartītes: `19`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `051–100`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus, interpretācijas vai papildu cleanup pašam neveikt.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Absatzmarkt-56` | `csText` | `Outletový trh` | `Odbytový trh` | LABOT |
| 2 | `b2-abschieben-58` | `csText` | `Odstrčit • Zapudit` | `Odstrčit • Vyhostit` | LABOT |
| 3 | `b2-abschlagen-59` | `csText` | `Pokácet • Odrazit • Odrazit • Odmítnout` | `Useknout • Odrazit • Odrazit • Odmítnout` | LABOT |
| 4 | `b2-abschleppen-60` | `csText` | `Odstranit auto` | `Odtáhnout auto` | LABOT |
| 5 | `b2-absondern-63` | `csText` | `Oddělit • Oddělit • Izolovat` | `Vylučovat • Oddělit • Izolovat` | LABOT |
| 6 | `b2-abstimmen-66` | `csText` | `Volit • Souhlasit` | `Hlasovat • Koordinovat` | LABOT |
| 7 | `b2-Absturz-69` | `csText` | `Padat • Padat` | `Pád • Havárie` | LABOT |
| 8 | `b2-abtragen-71` | `csText` | `Odnést • Odnést • Zbořit` | `Odnést • Obrousit • Zbořit` | LABOT |
| 9 | `b2-abtreten-72` | `csText` | `Stáhnout • Dát • Odejít` | `Odstoupit • Předat • Odejít` | LABOT |
| 10 | `b2-abwenden-75` | `csText` | `Zabránit` | `Odvrátit` | LABOT |
| 11 | `b2-Affäre-76` | `csText` | `Aféra • Román` | `Aféra • Milostný poměr` | LABOT |
| 12 | `b2-sich-abwenden` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 13 | `b2-Abzweigung-78` | `csText` | `Větev • Větev` | `Odbočka • Odbočka` | LABOT |
| 14 | `b2-Andeutung-83` | `csText` | `Nápověda • Indikace` | `Náznak • Indicie` | LABOT |
| 15 | `b2-Areal-89` | `csText` | `Rozsah` | `Oblast` | LABOT |
| 16 | `b2-ausbeuten-95` | `csText` | `Zneužít` | `Vykořisťovat` | LABOT |
| 17 | `b2-Ausbeutung-96` | `csText` | `Operace` | `Vykořisťování` | LABOT |
| 18 | `b2-sich aufdrängen-98` | `csText` | `Obtěžovat` | `Vnucovat se` | LABOT |
| 19 | `b2-Aufruf-99` | `csText` | `Zvolání • Pozvání` | `Zvolání • Výzva` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai kartīšu secību;
   - mainīt kartītes ārpus `051–100`;
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

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `051–100`.
Pārējās kartītes šajā 50 kartīšu blokā netiek mainītas.
Pēc Group 02 apply turpināt pēc A2/B1 remonta principa; Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
