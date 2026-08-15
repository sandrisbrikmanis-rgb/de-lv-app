# CS–DE B2 REPAIR — GROUP 24

## Scope
- Dataset: `B2`
- Kartītes: `1151–1200`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `1151–1200`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Honorar-1151` | `csText` | `Královské hodnosti` | `Honorář` | LABOT |
| 2 | `b2-Hypothek-1152` | `csText` | `Hypotéka • Hypotéka` | `Hypotéka • Zástavní právo` | LABOT |
| 3 | `b2-Illusion-1154` | `csText` | `Iluze • Iluze` | `Iluze • Klamná představa` | LABOT |
| 4 | `b2-Imker-1156` | `csText` | `Včelař • Včelař` | `Včelař • Chovatel včel` | LABOT |
| 5 | `b2-Import-1158` | `csText` | `Importovat • Importovat` | `Import • Dovoz` | LABOT |
| 6 | `b2-importieren-1159` | `csText` | `Dovážet • Dovážet` | `Importovat • Dovážet` | LABOT |
| 7 | `b2-Industrieausrüstung-1162` | `csText` | `Průmyslové zařízení • Průmyslové zařízení` | `Průmyslové zařízení • Průmyslová výbava` | LABOT |
| 8 | `b2-Industrieware-1163` | `csText` | `Průmyslové zboží • Průmyslové zboží` | `Průmyslové zboží • Průmyslový výrobek` | LABOT |
| 9 | `b2-inhaltslos-1165` | `csText` | `Prázdný • Bezvýznamný` | `Obsahově prázdný • Bezobsažný` | LABOT |
| 10 | `b2-Inland-1166` | `csText` | `Domácí • Vnitrozemí` | `Tuzemsko • Vnitrozemí` | LABOT |
| 11 | `b2-Innenminister-1167` | `csText` | `Ministr vnitra • Ministr vnitra` | `Ministr vnitra • Šéf resortu vnitra` | LABOT |
| 12 | `b2-Insektenvertilgungsmittel-1169` | `csText` | `Hubič hmyzu` | `Prostředek na hubení hmyzu • Insekticid` | LABOT |
| 13 | `b2-Intensivhaltung-1171` | `csText` | `Intenzivní chov hospodářských zvířat` | `Intenzivní chov zvířat` | LABOT |
| 14 | `b2-internieren-1173` | `csText` | `Internovat • Internovat` | `Internovat • Držet v internaci` | LABOT |
| 15 | `b2-Intrige-1176` | `csText` | `Intriky • Intriky` | `Intrika • Pleticha` | LABOT |
| 16 | `b2-Irrtum-1178` | `csText` | `Chyba • Chyba • Mylná představa` | `Omyl • Chyba • Mylná představa` | LABOT |
| 17 | `b2-Jauche-1180` | `csText` | `Močůvka • Močůvka` | `Kejda • Močůvka` | LABOT |
| 18 | `b2-Joch-1181` | `csText` | `Jho • Jho` | `Jho • Jařmo` | LABOT |
| 19 | `b2-Knochengewebe-1185` | `csText` | `Kostní tkáně` | `Kostní tkáň` | LABOT |
| 20 | `b2-Knochenmark-1186` | `csText` | `Kostní dřeně` | `Kostní dřeň` | LABOT |
| 21 | `b2-Kommunismus-1188` | `csText` | `Komunismu` | `Komunismus` | LABOT |
| 22 | `b2-kompatibel-1189` | `csText` | `Připojitelné` | `Kompatibilní • Slučitelný` | LABOT |
| 23 | `b2-Korps-1198` | `csText` | `Tělo` | `Sbor` | LABOT |
| 24 | `b2-korrupt-1200` | `csText` | `Koupitelný • Úplatný` | `Podplatitelný • Úplatný` | LABOT |

## OWNER validation note
- `b2-Hypnose-1153` (`Hypnóza`) paliek **NELABOT**. Audita `PL_CHAR` flags nav reāla kļūda: `ó` ir leģitīms čehu burts.
- Šajā grupā `Honorar-1151` atkārtojas no iepriekšējās robežas. COPY-ONLY izpildē current-value gate novērsīs dubultu pielietošanu, ja Group 23 jau ir piemērots.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus `1151–1200` nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `24`
- NELABOT: `1` (`b2-Hypnose-1153`)
- expected apply: `24/24` pret pirms-remonta baseline; ja Group 23 jau piemērots, `b2-Honorar-1151` drīkst būt vienīgais expected current-value mismatch
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `1151–1200`.
