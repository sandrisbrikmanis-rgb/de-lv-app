# CS–DE B2 REPAIR — GROUP 16

## Scope

- Dataset: `B2`
- Kartītes: `751–800`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `751–800`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus, interpretācijas vai papildu cleanup pašam neveikt.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Fahndungsliste-751` | `csText` | `Hledaný seznam` | `Seznam hledaných osob` | LABOT |
| 2 | `b2-Fahrdamm-752` | `csText` | `Sjízdná část ulice • Chodník` | `Vozovka • Dláždění` | LABOT |
| 3 | `b2-fahrlässig-754` | `csText` | `Nedbalý • Nedbalý` | `Nedbalý • Neopatrný` | LABOT |
| 4 | `b2-Falke-755` | `csText` | `Jestřáb` | `Sokol` | LABOT |
| 5 | `b2-fälschen-758` | `csText` | `Předstírat` | `Padělat • Falšovat` | LABOT |
| 6 | `b2-Farbige-761` | `csText` | `Barevný muž` | `Člověk jiné než bílé barvy pleti` | LABOT |
| 7 | `b2-sich-fassen` | `csText` | `Zmocnit se • Přijmout • Zadržet` | `Vzchopit se • Sebrat se • Ovládnout se` | LABOT |
| 8 | `b2-Faulbaum-771` | `csText` | `Předvečer` | `Krušina olšová` | LABOT |
| 9 | `b2-fechten-772` | `csText` | `Oplocení` | `Šermovat` | LABOT |
| 10 | `b2-feilen-774` | `csText` | `Zklamat` | `Pilovat` | LABOT |
| 11 | `b2-Feingefühl-776` | `csText` | `Lahůdka • Takt` | `Citlivost • Takt` | LABOT |
| 12 | `b2-festigen-782` | `csText` | `Posílit • Posílit` | `Posílit • Upevnit` | LABOT |
| 13 | `b2-Fetzen-786` | `csText` | `Žaludek • Riziko` | `Cáry • Hadry` | LABOT |
| 14 | `b2-Finsternis-790` | `csText` | `Tma • Tma • Zatmění` | `Tma • Temnota • Zatmění` | LABOT |
| 15 | `b2-Flaum-796` | `csText` | `Dolů • Chmýří` | `Chmýří • Prachové peří` | LABOT |
| 16 | `b2-flechten-798` | `csText` | `Kroutit • Cop` | `Plést • Splétat` | LABOT |
| 17 | `b2-fleckig-799` | `csText` | `Skvrnitý • Flekatý • Strakatý • Kropenatý • Strakatý` | `Skvrnitý • Flekatý • Plamenný • Kropenatý • Strakatý` | LABOT |
| 18 | `b2-fliederfarben-800` | `csText` | `Lila barva` | `Šeříkový` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai kartīšu secību;
   - mainīt kartītes ārpus `751–800`;
   - veikt papildu stilistiskus vai lingvistiskus labojumus;
   - aizvietot šeit noteikto `NEW` ar Composer paša variantu.
5. Ja konkrētajai kartītei ir projekta mirror ieraksts, piemērot identisku apstiprināto CS izmaiņu abās mirror pusēs atbilstoši esošajai projekta struktūrai.

## Validation

- LABOT mappings: `18`
- expected applied: `18/18`
- `CURRENT_VALUE_MISMATCH`: `0`
- DE changes: `0`
- outside-scope production changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `751–800`.
Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
