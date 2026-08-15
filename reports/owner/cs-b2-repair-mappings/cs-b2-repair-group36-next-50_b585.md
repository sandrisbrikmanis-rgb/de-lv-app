# CS–DE B2 REPAIR — GROUP 36

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 35
- Aptuvenais ID diapazons: `1789–1838`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Umfeld-1789` | `csText` | `Prostředí sociální • Politický` | `Sociální prostředí • Politické prostředí` | LABOT |
| 2 | `b2-umhören, sich-1791` | `csText` | `Poslouchat` | `Popovídat se • Vyptat se` | LABOT |
| 3 | `b2-Umlaufbahn-1795` | `csText` | `Obíhat` | `Oběžná dráha • Orbita` | LABOT |
| 4 | `b2-umschließen-1797` | `csText` | `Zapnout • Obsáhnout • Obsáhnout` | `Uzavřít • Zahrnout • Obklopit` | LABOT |
| 5 | `b2-Umschwung-1800` | `csText` | `Obrat • Zlom • Náhlá změna • Obrat • Obrat` | `Obrat • Zlom • Náhlá změna • Převrat • Zvrat` | LABOT |
| 6 | `b2-Umsicht-1801` | `csText` | `Opatrnost • Opatrnost` | `Opatrnost • Rozvaha` | LABOT |
| 7 | `b2-umsiedeln-1802` | `csText` | `Být násilně přemístěn do jiného místa bydliště` | `Násilně přemístit do jiného bydliště` | LABOT |
| 8 | `b2-umwandeln-1805` | `csText` | `Převést • Převést` | `Přeměnit • Změnit` | LABOT |
| 9 | `b2-umwickeln-1806` | `csText` | `Obalit • Obalit` | `Omotat • Zabalit` | LABOT |
| 10 | `b2-unangebracht-1807` | `csText` | `Mimo místo` | `Nevhodný • Nemístný` | LABOT |
| 11 | `b2-unanständig-1808` | `csText` | `Nezdvořilý • Špatně se choval` | `Neslušný • Nevychovaný` | LABOT |
| 12 | `b2-unaufhörlich-1809` | `csText` | `Nepřetržitý • Nepřetržitý` | `Nepřetržitý • Neustálý` | LABOT |
| 13 | `b2-unbebaut-1811` | `csText` | `Neobdělaný pro půdu • Nezast` | `Neobdělaný o půdě • Nezastavěný` | LABOT |
| 14 | `b2-unbedacht-1812` | `csText` | `Bezmyšlenkovitě • Zbrklý • Nerozvážný` | `Neuvážený • Zbrklý • Nerozvážný` | LABOT |
| 15 | `b2-unbegründet-1814` | `csText` | `Neopodstatněný • Neopodstatněný` | `Bezdůvodný • Neopodstatněný` | LABOT |
| 16 | `b2-unberechenbar-1818` | `csText` | `Nevyčíslitelné` | `Nevypočitatelný` | LABOT |
| 17 | `b2-undenkbar-1822` | `csText` | `Nepředstavitelné` | `Nepředstavitelný` | LABOT |
| 18 | `b2-unentbehrlich-1823` | `csText` | `Nutné` | `Nezbytný • Nepostradatelný` | LABOT |
| 19 | `b2-unerträglich-1826` | `csText` | `Nesnesitelný • Nesnesitelný` | `Nesnesitelný • Neúnosný` | LABOT |
| 20 | `b2-Unfug-1827` | `csText` | `Prohřešek • Nepřítomnost • Oplzlý čin` | `Neplecha • Nesmysl • Pohoršlivé jednání` | LABOT |
| 21 | `b2-Union-1830` | `csText` | `Svaz • Svaz` | `Svaz • Unie` | LABOT |
| 22 | `b2-unmenschlich-1832` | `csText` | `Nelidský • Nelidský` | `Nelidský • Nehumánní` | LABOT |
| 23 | `b2-unterbreiten-1835` | `csText` | `Vysvětlit • Přítomný` | `Vysvětlit • Předložit` | LABOT |
| 24 | `b2-unterdrücken-1836` | `csText` | `Potlačit • Potlačit` | `Utlačovat • Potlačit` | LABOT |
| 25 | `b2-Untergang-1838` | `csText` | `Úpadek • Úpadek • Zánik • Zhroucení` | `Západ • Zapadání • Zánik • Zhroucení` | LABOT |

## OWNER validation note
- `b2-Umlaufbahn-1795`: pašreizējais `Obíhat` ir darbības vārds, bet DE lemma ir lietvārds `orbīta`.
- `b2-umsiedeln-1802`: pašreizējā CS forma ir pasīva (`būt pārvietotam`), bet avota nozīme ir aktīva `pārvietot`.
- `b2-unbebaut-1811`: pašreizējais `Nezast` ir acīmredzami aprauts/nepilnīgs teksts.
- `b2-Unfug-1827`: `Nepřítomnost` neatbilst avota `nebūšana`; nozīmes normalizētas dabiskā čehu valodā.
- `b2-unterbreiten-1835`: `Přítomný` nozīmē “klātesošs”, nevis `iesniegt/předložit`.
- `b2-Untergang-1838`: pirmās divas avota nozīmes ir `riets • norietēšana`; pašreizējais `Úpadek • Úpadek` tās neatveido.
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
- LABOT mappings: `25`
- expected applied: `25/25`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
