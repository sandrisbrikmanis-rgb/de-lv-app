# CS–DE B2 REPAIR — GROUP 20

## Scope
- Dataset: `B2`
- Kartītes: `951–1000`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `951–1000`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Gespinst-951` | `csText` | `Pletení • Síť` | `Předivo • Pavučina` | LABOT |
| 2 | `b2-Gespött-952` | `csText` | `Výsměch • Posměch` | `Posměch • Terč posměchu` | LABOT |
| 3 | `b2-Gestade-954` | `csText` | `Pobřeží • Pobřeží` | `Břeh • Pobřeží` | LABOT |
| 4 | `b2-Geständnis-955` | `csText` | `Zpověď` | `Přiznání` | LABOT |
| 5 | `b2-Gestank-957` | `csText` | `Zápach • Zápach` | `Smrad • Zápach` | LABOT |
| 6 | `b2-Gestrüpp-966` | `csText` | `Keř` | `Křoví • Houští` | LABOT |
| 7 | `b2-Getriebe-968` | `csText` | `Motoru` | `Převodovka` | LABOT |
| 8 | `b2-Gewähr-970` | `csText` | `Jistota • Jistota • Záruka` | `Jistota • Ručení • Záruka` | LABOT |
| 9 | `b2-gewaltsam-972` | `csText` | `Silou • Silou` | `Násilím • Nuceně` | LABOT |
| 10 | `b2-Gewebe-976` | `csText` | `Tkanina • Tkanina` | `Tkanina • Tkáň` | LABOT |
| 11 | `b2-Gewerbe-977` | `csText` | `Pozice • Živnost • Stálá práce v oblasti obchodu nebo řemesel nebo poskytování služeb` | `Řemeslo • Živnost • Stálá práce v oblasti obchodu, řemesel nebo služeb` | LABOT |
| 12 | `b2-gewieft-978` | `csText` | `Temperovaný • Bystrý` | `Ostřílený • Vychytralý` | LABOT |
| 13 | `b2-Gewissheit-980` | `csText` | `Jasnost • Bezpečí • Jistota` | `Jasnost • Jistota • Určitost` | LABOT |
| 14 | `b2-raffgierig-986` | `csText` | `Kouzelná vazba` | `Chamtivý • Hrabivý` | LABOT |
| 15 | `b2-Glatze-995` | `csText` | `Holou hlavu` | `Pleš` | LABOT |
| 16 | `b2-gleichmütig-997` | `csText` | `Složený • Chladnokrevný` | `Vyrovnaný • Chladnokrevný` | LABOT |
| 17 | `b2-Gleichnis-998` | `csText` | `Podobnost` | `Podobenství • Přirovnání` | LABOT |
| 18 | `b2-gleiten-999` | `csText` | `Plachtit • Vznášet se` | `Klouzat • Plachtit` | LABOT |

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas: `actual current value === CURRENT`.
2. Exact match → `NEW`; mismatch → `CURRENT_VALUE_MISMATCH` un SKIP.
3. DE laukus, ID/order un kartītes ārpus `951–1000` nemainīt.
4. Nekādu Composer paša tulkojumu, interpretācijas vai cleanup.
5. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
6. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `18`
- expected applied: `18/18`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas tikai uz B2 kartītēm `951–1000`.
