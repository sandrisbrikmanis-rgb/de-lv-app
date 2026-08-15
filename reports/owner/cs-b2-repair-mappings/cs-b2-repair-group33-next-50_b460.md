# CS–DE B2 REPAIR — GROUP 33

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 32
- Aptuvenais ID diapazons: `1625–1674`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Seemacht-1625` | `csText` | `Mořská [velká] síla` | `Námořní [vel]moc` | LABOT |
| 2 | `b2-Segelflieger-1626` | `csText` | `Kluzák` | `Pilot kluzáku • Plachtař` | LABOT |
| 3 | `b2-Sehkraft-1628` | `csText` | `Zrak • Schopnost vidět` | `Zrak • Schopnost vidění` | LABOT |
| 4 | `b2-selbstlos-1634` | `csText` | `Nezištný • Nezištný` | `Nezištný • Obětavý` | LABOT |
| 5 | `b2-sensibel-1639` | `csText` | `Citlivý • Citlivý` | `Citlivý • Vnímavý` | LABOT |
| 6 | `b2-sickern-1643` | `csText` | `Kapat • Sát` | `Prosakovat • Vsakovat se` | LABOT |
| 7 | `b2-siegreich-1644` | `csText` | `Korunován vítězstvími` | `Vítězný • Úspěšný` | LABOT |
| 8 | `b2-Sorgenkind-1660` | `csText` | `Pečovat o dítě` | `Problémové dítě • Dítě působící starosti` | LABOT |
| 9 | `b2-Sorgerecht-1662` | `csText` | `Právo na péči` | `Právo péče o dítě • Rodičovská péče` | LABOT |
| 10 | `b2-sozialistisch-1664` | `csText` | `Socialista` | `Socialistický` | LABOT |
| 11 | `b2-Spaltung-1665` | `csText` | `Štípání • [sa]štípání • [sa]štípání` | `Štěpení • Rozštěpení • Rozkol` | LABOT |
| 12 | `b2-spärlich-1666` | `csText` | `Skrovný • Skoupý • Vzácný` | `Skrovný • Chudý • Řídký` | LABOT |
| 13 | `b2-Sperma-1667` | `csText` | `Spermie` | `Sperma` | LABOT |
| 14 | `b2-spezifisch-1668` | `csText` | `Konkrétní` | `Specifický` | LABOT |
| 15 | `b2-Sphäre-1669` | `csText` | `Koule • Plocha` | `Sféra • Oblast` | LABOT |
| 16 | `b2-Spießbürger-1671` | `csText` | `Rezidentním občanem` | `Maloměšťák • Šosák` | LABOT |
| 17 | `b2-spionieren-1672` | `csText` | `Špehovat • Špehovat` | `Špehovat • Vyzvídat` | LABOT |
| 18 | `b2-Spott-1673` | `csText` | `Výsměch • Kousání • Zlý vtip` | `Výsměch • Posměch • Zlý vtip` | LABOT |
| 19 | `b2-spötteln-1674` | `csText` | `Ironizovat` | `Ironizovat • Posmívat se` | LABOT |

## OWNER validation note
- `b2-Segelflieger-1626`: pašreizējais `Kluzák` apzīmē lidaparātu, bet vācu lemma apzīmē cilvēku — planieristu.
- `b2-Segelflugzeug-1627: Kluzák` paliek **NELABOT** — tas ir korekts lidaparāta nosaukums.
- `b2-Sperma-1667`: pašreizējais `Spermie` nozīmē spermatozoīdus, nevis spermu.
- `b2-sozialistisch-1664`: pašreizējais `Socialista` ir lietvārds/persona, bet lemma ir īpašības vārds.
- `b2-Spießbürger-1671`: pašreizējā forma ir gramatiski un semantiski neatbilstoša.
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
- LABOT mappings: `19`
- expected applied: `19/19`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
