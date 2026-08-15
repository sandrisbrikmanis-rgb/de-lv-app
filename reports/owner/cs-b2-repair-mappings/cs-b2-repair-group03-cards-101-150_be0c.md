# CS–DE B2 REPAIR — GROUP 03

## Scope

- Dataset: `B2`
- Kartītes: `101–150`
- Unikālas affected kartītes: `18`
- Exact mappings: `18`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `101–150`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus, interpretācijas vai papildu cleanup pašam neveikt.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Augenmaß-102` | `csText` | `Akumetr` | `Odhad • smysl pro míru` | LABOT |
| 2 | `b2-Äußerlichkeit-103` | `csText` | `Okázalost` | `Vnějškovost • zevnějšek` | LABOT |
| 3 | `b2-Äußerung-104` | `csText` | `Výpověď • Výraz • Výraz` | `Výpověď • projev` | LABOT |
| 4 | `b2-aussetzen-105` | `csText` | `Příspěvek • Předmět • Odporovat • Stát` | `Vystavit • podrobit • namítat • přerušit` | LABOT |
| 5 | `b2-aussichtslos-106` | `csText` | `Beznadějný • Bez vyhlídky` | `Beznadějný • Bez vyhlídek` | LABOT |
| 6 | `b2-ausspannen-107` | `csText` | `Odvázat • Odvézt partnera • Odpočívat` | `Vypráhnout • odloudit partnera • odpočívat` | LABOT |
| 7 | `b2-ausstatten-108` | `csText` | `Dodávat • Navrhovat` | `Vybavit • opatřit` | LABOT |
| 8 | `b2-ausstopfen-110` | `csText` | `Naplnit • Naplnit • Vycpat` | `Vyplnit • naplnit • vycpat` | LABOT |
| 9 | `b2-auswärtig-115` | `csText` | `Zahraniční • Zahraniční záležitosti` | `Zahraniční • zahraničněpolitický` | LABOT |
| 10 | `b2-ausweichend-116` | `csText` | `Vyhýbavý • Nejistý` | `Vyhýbavý • neurčitý` | LABOT |
| 11 | `b2-auswerfen-118` | `csText` | `Vyhodit • Vyhodit` | `Vyhodit • vyvrhnout` | LABOT |
| 12 | `b2-auswerten-119` | `csText` | `Hodnotit • Hodnotit` | `Vyhodnotit • analyzovat` | LABOT |
| 13 | `b2-auszeichnen-120` | `csText` | `Ocenění • Ocenění • Vyniknout` | `Ocenit • vyznamenat • vynikat` | LABOT |
| 14 | `b2-Auszeichnung-121` | `csText` | `Udělování • Ocenění • Čestný odznak` | `Vyznamenání • ocenění • čestný odznak` | LABOT |
| 15 | `b2-bändigen-124` | `csText` | `Omezit • Podmanit si` | `Zkrotit • ovládnout` | LABOT |
| 16 | `b2-Barren-136` | `csText` | `Přítoky` | `Bradla` | LABOT |
| 17 | `b2-Barrenturnen-137` | `csText` | `Cvičení na přítocích` | `Cvičení na bradlech` | LABOT |
| 18 | `b2-Bauwesen-145` | `csText` | `Stavba • Stavba` | `Stavebnictví` | LABOT |

## OWNER piezīme par `b2-bebauen-146`

Audits kartītei `b2-bebauen-146` norāda CRITICAL tulkojuma problēmu (`Proces • Stavět`), taču šajā avota izvilkumā pilna `Recommended CS` vērtība nav redzama. Tāpēc tā **nav iekļauta exact mapping sarakstā** un Composer to nedrīkst labot pēc minējuma.

Statuss šajā Group 03:
- `b2-bebauen-146`: **NEPIETIEK AVOTA DATU EXACT MAPPINGAM — SKIP**
- nekādu Composer paša variantu.

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai kartīšu secību;
   - mainīt kartītes ārpus `101–150`;
   - labot `b2-bebauen-146` bez OWNER exact mapping;
   - veikt papildu stilistiskus vai lingvistiskus labojumus;
   - aizvietot šeit noteikto `NEW` ar Composer paša variantu.
5. Ja konkrētajai kartītei ir projekta mirror ieraksts, piemērot identisku apstiprināto CS izmaiņu abās mirror pusēs atbilstoši esošajai projekta struktūrai.
6. Pēc apply obligāti pārbaudīt:
   - requested mappings: `18`
   - processed: `18/18`
   - `CURRENT_VALUE_MISMATCH`: `0`
   - `b2-bebauen-146`: unchanged
   - DE changes: `0`
   - outside-scope production changes: `0`
   - syntax: `PASS`
   - ID/order: `PASS`
   - mirror/parity: `PASS`

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `101–150`.
Pārējās kartītes šajā 50 kartīšu blokā netiek mainītas.
Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
