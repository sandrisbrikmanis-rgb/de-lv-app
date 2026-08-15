# CS–DE B2 REPAIR — GROUP 35

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 34
- Aptuvenais ID diapazons: `1735–1784`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-tönen-1735` | `csText` | `Znít • Tónovat • Dávat stín` | `Znít • Tónovat • Dát odstín` | LABOT |
| 2 | `b2-Tor-1737` | `csText` | `Blázen • Nelga` | `Hlupák • Prosťáček` | LABOT |
| 3 | `b2-totschießen-1740` | `csText` | `Střílet` | `Zastřelit` | LABOT |
| 4 | `b2-totschlagen-1741` | `csText` | `Odklepnout` | `Utlouct • Ubít` | LABOT |
| 5 | `b2-Trägerrakete-1744` | `csText` | `Odpalovací zařízení` | `Nosná raketa` | LABOT |
| 6 | `b2-Transvestit-1746` | `csText` | `Transvestita` | `Transvestita • Transvestit` | LABOT |
| 7 | `b2-treuherzig-1750` | `csText` | `Vydatný • Vydatný` | `Upřímný • Srdečný` | LABOT |
| 8 | `b2-treulos-1751` | `csText` | `Nespolehlivý • Nedůvěryhodný` | `Nevěrný • Nespolehlivý` | LABOT |
| 9 | `b2-Triebkraft-1752` | `csText` | `Hnací silou` | `Hnací síla` | LABOT |
| 10 | `b2-trügen-1757` | `csText` | `Trik • Oklamat` | `Klamat • Ošálit` | LABOT |
| 11 | `b2-trügerisch-1758` | `csText` | `Záludný • Záludný` | `Klamný • Zdánlivý` | LABOT |
| 12 | `b2-überbringen-1761` | `csText` | `Doručit zprávu • Pozdrav • Dopis • Dárek` | `Předat zprávu • Blahopřání • Dopis • Dárek` | LABOT |
| 13 | `b2-überfahren-1763` | `csText` | `Přejet • Lehce přejet` | `Přejet • Lehce přetřít štětcem` | LABOT |
| 14 | `b2-überführen-1767` | `csText` | `Přenést • Přenést se přes řeku` | `Převézt na druhou stranu • Přepravit přes řeku` | LABOT |
| 15 | `b2-überlassen-1770` | `csText` | `Ponechat někomu k dispozici • Dovolit si vybrat` | `Ponechat někomu na starost • K dispozici • Dovolit vybrat` | LABOT |
| 16 | `b2-Überlegung-1772` | `csText` | `Úvaha • Úvaha • Úvaha` | `Přemýšlení • Zvažování • Rozvaha` | LABOT |
| 17 | `b2-übermitteln-1773` | `csText` | `Doručit • Poslat dopis` | `Předat • Odeslat dopis` | LABOT |
| 18 | `b2-überschreiten-1776` | `csText` | `Projít • Přestoupit` | `Přejít • Překročit` | LABOT |
| 19 | `b2-übersichtlich-1777` | `csText` | `Průhledný` | `Přehledný` | LABOT |
| 20 | `b2-übertragen-1780` | `csText` | `Přenášet • Přenášet nakažlivé nemoci • Vysílat rádiem • [znovu] překládat` | `Přenášet • Přenášet nakažlivé nemoci • Vysílat rozhlasem • [Pře]kládat` | LABOT |
| 21 | `b2-übertreten-1781` | `csText` | `Porušit zákon • Přestoupit proti něčemu` | `Porušit zákon • Překročit něco` | LABOT |
| 22 | `b2-ultimativ-1783` | `csText` | `Konečný` | `Ultimativní` | LABOT |
| 23 | `b2-umarbeiten-1785` | `csText` | `Recyklovat • Předělat` | `Přepracovat • Předělat` | LABOT |

## OWNER validation note
- `b2-tönen-1735`: audita `PL_CHAR` uz `ó` ir false positive, bet kartītei ir reāls lingvistisks labojums `Dávat stín` → `Dát odstín`.
- `b2-Tor-1737`: `Nelga` nav čehu vārds; nozīme normalizēta uz dabisku čehu ekvivalentu.
- `b2-totschießen-1740` un `b2-totschlagen-1741`: pašreizējie CS varianti nepauž rezultātu “nogalināt/nošaut/nosist”.
- `b2-Trägerrakete-1744`: `Odpalovací zařízení` ir palaišanas iekārta, nevis nesējraķete.
- `b2-übersichtlich-1777`: `Průhledný` nozīmē caurspīdīgs, bet avota nozīme ir `pārskatāms`.
- `b2-umarbeiten-1785` ir nākamais secības objekts, kas noslēdz šo 50 kartīšu bloku; numerācija nav pilnīgi nepārtraukta.
- Kartītes bez mapping šajā blokā apzināti paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras LABOT izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus šī 50 kartīšu secības bloka nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `23`
- expected applied: `23/23`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
