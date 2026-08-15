# CS–DE B2 REPAIR — GROUP 27

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 26
- Aptuvenais ID diapazons: `1304–1348` + `b2-nachdruck`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-meutern-1309` | `csText` | `Rebel • Rebel` | `Bouřit se • Vzbouřit se` | LABOT |
| 2 | `b2-Mieder-1310` | `csText` | `Punčochový pásek • Živůtek` | `Korzetový pás • Živůtek` | LABOT |
| 3 | `b2-Milbe-1313` | `csText` | `Klíště` | `Roztoč` | LABOT |
| 4 | `b2-mildern-1315` | `csText` | `Tišit bolest • Změkčit úsudek` | `Mírnit bolest • Zmírnit úsudek` | LABOT |
| 5 | `b2-Minderung-1321` | `csText` | `Zmenšující se` | `Snížení • Zmenšení` | LABOT |
| 6 | `b2-missbilligen-1324` | `csText` | `Neuznat za dobré • Vydělat` | `Neschvalovat • Odsoudit` | LABOT |
| 7 | `b2-missbrauchen-1325` | `csText` | `Zneužívání` | `Zneužít • Zneužívat` | LABOT |
| 8 | `b2-missfallen-1326` | `csText` | `Nelíbí` | `Nelíbit se` | LABOT |
| 9 | `b2-missglücken-1327` | `csText` | `Selhat • Selhat` | `Nevydařit se • Nezdařit se` | LABOT |
| 10 | `b2-missgönnen-1328` | `csText` | `Nepřát si • Bolet` | `Nepřát • Závidět` | LABOT |
| 11 | `b2-mitschuldig-1330` | `csText` | `Spoluvinník` | `Spoluvinný` | LABOT |
| 12 | `b2-Mittelsmann-1332` | `csText` | `Prostředníka mezi protivníky nebo partnery` | `Prostředník mezi protivníky nebo partnery` | LABOT |
| 13 | `b2-Mitwisser-1334` | `csText` | `Spoluspiklence` | `Zasvěcenec • Spoluvědoucí` | LABOT |
| 14 | `b2-Monatsschrift-1338` | `csText` | `Měsíční` | `Měsíčník` | LABOT |
| 15 | `b2-münden-1342` | `csText` | `Přitékat • Přitékat • Vycházet • Vytékat` | `Ústit • Vtékat • Vycházet • Vyústit` | LABOT |
| 16 | `b2-Muße-1343` | `csText` | `Volný čas • Volný čas` | `Volný čas • Chvíle volna` | LABOT |
| 17 | `b2-müßig-1344` | `csText` | `Nečinný • Nečinný` | `Nečinný • Zahálčivý` | LABOT |
| 18 | `b2-mutieren-1345` | `csText` | `Mluvit` | `Mutovat` | LABOT |
| 19 | `b2-Mystik-1346` | `csText` | `Mysticismus` | `Mystika` | LABOT |
| 20 | `b2-Nachbildung-1348` | `csText` | `Napodobenina • Napodobenina` | `Napodobenina • Imitace` | LABOT |
| 21 | `b2-nachdruck` | `csText` | `Důraz • Dotisk` | `Důraz` | LABOT |

## OWNER validation note
- `b2-Milbe-1313`: LV avots `ērce` šajā kontekstā nav labs semantiskais etalons vācu `Milbe`; DE lemma netiek mainīta. CS labojums tiek veikts uz korekto `Roztoč`.
- `b2-nachdruck`: LV avots šai kartītei satur tikai `uzsvērums`, tādēļ liekais `Dotisk` tiek noņemts.
- Kartītes bez mapping šajā 50 kartīšu blokā apzināti paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus šī 50 kartīšu secības bloka nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `21`
- expected applied: `21/21`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas uz nākamo B2 50 kartīšu secības bloku pēc Group 26.
