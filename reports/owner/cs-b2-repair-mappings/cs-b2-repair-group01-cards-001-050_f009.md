# CS–DE B2 REPAIR — GROUP 01

## Scope

- Dataset: `B2`
- Kartītes: `001–050`
- Pilnā audita findings šajā diapazonā: `23`
- Unikālas affected kartītes: `23`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `001–050`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus vai alternatīvus labojumus pašam neveidot.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-widersprechen-5` | `csText` | `Objekt` | `Odporovat` | LABOT |
| 2 | `b2-Akt-9` | `csText` | `Jednat • Dokument` | `Akt • Dokument` | LABOT |
| 3 | `b2-anbelangen-13` | `csText` | `Odkazovat` | `Týkat se` | LABOT |
| 4 | `b2-Anbau-15` | `csText` | `Rozšíření • Kultivace` | `Přístavba • Pěstování` | LABOT |
| 5 | `b2-anfertigen-16` | `csText` | `Dělat` | `Vyrobit` | LABOT |
| 6 | `b2-angebracht-18` | `csText` | `Vhodný • Vhodný` | `Vhodný • Připevněný` | LABOT |
| 7 | `b2-allerhand-22` | `csText` | `Všechny druhy • Různé` | `Všelijaký • Různý` | LABOT |
| 8 | `b2-anbrechen-25` | `csText` | `Začít • Hackovat` | `Začít • Načít` | LABOT |
| 9 | `b2-angeblich-28` | `csText` | `Jako by • Zřejmě` | `Údajně • Zřejmě` | LABOT |
| 10 | `b2-angeboren-29` | `csText` | `Kongenitální` | `Vrozený` | LABOT |
| 11 | `b2-angelegt-30` | `csText` | `Vytvořené • Investované` | `Vytvořený • Investovaný` | LABOT |
| 12 | `b2-angeordnet-31` | `csText` | `Určil • Nařídil` | `Stanovený • Nařízený` | LABOT |
| 13 | `b2-angehoben-32` | `csText` | `Zvýšené` | `Zvýšený` | LABOT |
| 14 | `b2-angegriffen-33` | `csText` | `Unavený • Napadl` | `Unavený • Napadený` | LABOT |
| 15 | `b2-abbringen-36` | `csText` | `Odradit • Odradit • Odvést` | `Odvrátit • Odradit • Odklonit` | LABOT |
| 16 | `b2-Abenteuerlust-39` | `csText` | `Touha po aféře` | `Touha po dobrodružství` | LABOT |
| 17 | `b2-abfällig-41` | `csText` | `Nepříznivý • Negativní • Špatný • Nesouhlasný` | `Pohrdavý • Znevažující • Hanlivý • Opovržlivý` | LABOT |
| 18 | `b2-abfertigen-42` | `csText` | `Poslat • Poslat pryč • Sloužit • Chovat se nevlídně` | `Vypravit • Poslat pryč • Odbavit • Chovat se nevlídně` | LABOT |
| 19 | `b2-abgesehen-44` | `csText` | `Ačkoli • Navíc` | `Kromě • Navíc` | LABOT |
| 20 | `b2-sich-abfinden` | `study.formsLabel` | `Vadība:` | `Vazba:` | LABOT |
| 21 | `b2-abgrenzen-47` | `csText` | `Vymezit se • Distancovat se` | `Vymezit • Distancovat se` | LABOT |
| 22 | `b2-abhören-49` | `csText` | `Odposlouchávat • Odposlouchávat` | `Poslouchat • Odposlouchávat` | LABOT |
| 23 | `b2-ableiten-50` | `csText` | `Vést • Odklonit • Odvodit` | `Odvést • Odklonit • Odvodit` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai secību;
   - mainīt kartītes ārpus `001–050`;
   - veikt papildu stilistiskus vai lingvistiskus labojumus;
   - aizvietot OWNER-prepared `NEW` ar Composer paša variantu.
5. Ja konkrētajai kartītei ir mirror ieraksts `data/www`, piemērot identisku apstiprināto CS izmaiņu abās pusēs atbilstoši projekta esošajai mirror struktūrai.
6. Pēc apply obligāti pārbaudīt:
   - requested mappings: `23`
   - processed: `23/23`
   - `CURRENT_VALUE_MISMATCH`: `0`
   - DE changes: `0`
   - outside-scope production changes: `0`
   - syntax: `PASS`
   - ID/order: `PASS`
   - mirror/parity: `PASS`

## Piezīme

Šis fails satur tikai pilnajā auditā identificētos labojamos objektus no B2 kartītēm `001–050`.
Pārējās kartītes šajā 50 kartīšu blokā nav jāmaina tikai tādēļ, ka tās ietilpst Group 01.
