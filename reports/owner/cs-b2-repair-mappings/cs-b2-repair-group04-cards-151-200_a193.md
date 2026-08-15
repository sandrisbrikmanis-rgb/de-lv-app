# CS–DE B2 REPAIR — GROUP 04

## Scope

- Dataset: `B2`
- Kartītes: `151–200`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `151–200`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus, interpretācijas vai papildu cleanup pašam neveikt.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Beförderung-150` | `csText` | `Dodávka • Doprava • Propagace • Propagace` | `Doručení • Přeprava • Povýšení • Povýšení` | LABOT |
| 2 | `b2-Befugnis-151` | `csText` | `Práva • Autorita` | `Oprávnění • Pravomoc` | LABOT |
| 3 | `b2-begehren-152` | `csText` | `Požadovat • Požadovat • Mít rád • Bažit • Bažit` | `Žádat • Požadovat • Toužit po • Dychtit po • Prahnout po` | LABOT |
| 4 | `b2-begierig-153` | `csText` | `Touha` | `Dychtivý` | LABOT |
| 5 | `b2-begnadigen-154` | `csText` | `Mít slitování` | `Omilostnit` | LABOT |
| 6 | `b2-sich-begnuegen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 7 | `b2-begutachten-157` | `csText` | `Dávat zpětnou vazbu • Hodnotit` | `Posoudit • Ohodnotit` | LABOT |
| 8 | `b2-beharren-158` | `csText` | `Existovat • Zůstat` | `Trvat na • Setrvat` | LABOT |
| 9 | `b2-Beihilfe-161` | `csText` | `Státní příspěvek • Bonus` | `Státní příspěvek • Příplatek` | LABOT |
| 10 | `b2-beiläufig-162` | `csText` | `Náhodný • Náhodný • Mimochodem • Kolemjdoucí` | `Náhodný • Příležitostný • Mimochodem • Letmo` | LABOT |
| 11 | `b2-beispiellos-163` | `csText` | `Nebyl • Neviditelný • To, co není srovnatelné s ničím` | `Bezprecedentní • Nebývalý • Nesrovnatelný` | LABOT |
| 12 | `b2-beistimmen-166` | `csText` | `Schvalovat • Podporovat` | `Souhlasit • Podpořit` | LABOT |
| 13 | `b2-beizen-168` | `csText` | `Leptat • Špinit` | `Mořit • Bejcovat` | LABOT |
| 14 | `b2-bejahrt-170` | `csText` | `V mnoha letech` | `Letitý • Pokročilého věku` | LABOT |
| 15 | `b2-bekräftigen-172` | `csText` | `Potvrdit • Potvrdit` | `Potvrdit • Stvrdit` | LABOT |
| 16 | `b2-Straßenbelag-174` | `csText` | `Přítomnost na ulici` | `Povrch vozovky` | LABOT |
| 17 | `b2-belästigen-177` | `csText` | `Obtěžovat • Obtěžovat • Zapíchnout` | `Obtěžovat • Dotírat • Vnucovat se` | LABOT |
| 18 | `b2-beleibt-181` | `csText` | `Tlustý • Drahý • Plný` | `Tlustý • Statný • Plný` | LABOT |
| 19 | `b2-Belieben-183` | `csText` | `Měl rád • Mít rád • Chtít` | `Zalíbení • Libost • Vůle` | LABOT |
| 20 | `b2-sich-bemaechtigen` | `study.rektion` | `+ piederības forma` | `+ 2. pád` | LABOT |
| 21 | `b2-sich-bemaechtigen` | `study.forms` | `+ piederības forma` | `+ 2. pád` | LABOT |
| 22 | `b2-sich-bemaechtigen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 23 | `b2-Benennung-186` | `csText` | `Pojmenování • Pojmenování • Jméno` | `Pojmenování • Označení • Název` | LABOT |
| 24 | `b2-berechtigen-188` | `csText` | `Dát práva` | `Oprávnit` | LABOT |
| 25 | `b2-bergen-192` | `csText` | `Zachránit • Zachránit • Sklidit` | `Zachránit • Vyprostit • Sklidit` | LABOT |
| 26 | `b2-Bergmann-193` | `csText` | `Horník • Uhlíř` | `Horník • Uhelný horník` | LABOT |
| 27 | `b2-bersten-195` | `csText` | `Praskat • Praskat • Praskat • Praskat` | `Praskat • Popraskat • Roztrhnout se • Puknout` | LABOT |
| 28 | `b2-sich-berufen` | `csText` | `Odkazovat` | `Odvolávat se na` | LABOT |
| 29 | `b2-sich-berufen` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 30 | `b2-beruhen-198` | `csText` | `Být založen • Být založen` | `Spočívat • Zakládat se na` | LABOT |
| 31 | `b2-besänftigen-199` | `csText` | `Uklidnit • Uklidnit • Uklidnit • Utišit` | `Uklidnit • Zmírnit • Upokojit • Utišit` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai kartīšu secību;
   - mainīt kartītes ārpus `151–200`;
   - veikt papildu stilistiskus vai lingvistiskus labojumus;
   - aizvietot šeit noteikto `NEW` ar Composer paša variantu.
5. Ja konkrētajai kartītei ir projekta mirror ieraksts, piemērot identisku apstiprināto CS izmaiņu abās mirror pusēs atbilstoši esošajai projekta struktūrai.
6. Pēc apply obligāti pārbaudīt:
   - requested mappings: `31`
   - processed: `31/31`
   - `CURRENT_VALUE_MISMATCH`: `0`
   - DE changes: `0`
   - outside-scope production changes: `0`
   - syntax: `PASS`
   - ID/order: `PASS`
   - mirror/parity: `PASS`

## Audita pamatojums

Deterministiskais audits šim batch (`151–200`) uzrāda 5 findings. Tie koncentrējas 3 Study kartītēs:
- `b2-sich-begnuegen`
- `b2-sich-bemaechtigen`
- `b2-sich-berufen`

`b2-sich-bemaechtigen` satur 3 atsevišķus LV atlikumus (`rektion`, `forms`, `formsLabel`).

Papildus galvenie CS tulkojumi pārbaudīti pret failā saglabāto DE un LV avota pāri, un šajā failā iekļauti tikai OWNER sagatavotie exact labojumi.

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `151–200`.
Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
