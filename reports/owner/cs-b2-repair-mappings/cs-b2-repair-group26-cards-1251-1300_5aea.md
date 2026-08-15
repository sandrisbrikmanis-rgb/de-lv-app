# CS–DE B2 REPAIR — GROUP 26

## Scope
- Dataset: `B2`
- Kartītes: `1251–1300`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `1251–1300`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-List-1251` | `csText` | `Podvod` | `Lest • Úskok` | LABOT |
| 2 | `b2-Litfaßsäule-1253` | `csText` | `Plakátová tyč` | `Plakátovací sloup` | LABOT |
| 3 | `b2-Lochband-1254` | `csText` | `Dokonalá` | `Děrná páska` | LABOT |
| 4 | `b2-Lösegeld-1258` | `csText` | `Výkupní poplatek` | `Výkupné` | LABOT |
| 5 | `b2-Losung-1259` | `csText` | `Slogan • Heslo` | `Heslo • Parola` | LABOT |
| 6 | `b2-Luftbad-1263` | `csText` | `Vzdušné plavání` | `Vzdušná lázeň` | LABOT |
| 7 | `b2-Luftaufnahme-1264` | `csText` | `Letecká fotografie • Letecká fotografie` | `Letecká fotografie • Letecký snímek` | LABOT |
| 8 | `b2-luftdicht-1265` | `csText` | `Prodyšný • Hermetický` | `Vzduchotěsný • Hermetický` | LABOT |
| 9 | `b2-Luftpost-1268` | `csText` | `Leteckou poštou` | `Letecká pošta` | LABOT |
| 10 | `b2-Luftgewehr-1269` | `csText` | `Vzduchová pistole` | `Vzduchovka • Pneumatická puška` | LABOT |
| 11 | `b2-Lustspiel-1271` | `csText` | `Komedie • Vtip hrát` | `Komedie • Veselohra` | LABOT |
| 12 | `b2-Machtantritt-1272` | `csText` | `Dostat se k moci` | `Nástup k moci` | LABOT |
| 13 | `b2-Magensäure-1275` | `csText` | `Žaludeční kyseliny` | `Žaludeční kyselina` | LABOT |
| 14 | `b2-Magister-1276` | `csText` | `Magisterský stupeň` | `Magistr` | LABOT |
| 15 | `b2-Mahd-1277` | `csText` | `Sklidil` | `Seč • Senoseč` | LABOT |
| 16 | `b2-Mahnschreiben-1281` | `csText` | `Připomínka` | `Upomínka • Upomínací dopis` | LABOT |
| 17 | `b2-Marine-1285` | `csText` | `Námořnictvo • Přímořská krajina` | `Válečné námořnictvo • Přímořská krajina` | LABOT |
| 18 | `b2-Mark-1286` | `csText` | `Kostní dřeně` | `Kostní dřeň` | LABOT |
| 19 | `b2-Marketing-1287` | `csText` | `Marketing • Obchod` | `Marketing • Tržní činnost` | LABOT |
| 20 | `b2-Marktlücke-1288` | `csText` | `Mezera na trhu` | `Mezera na trhu • Tržní nika` | LABOT |
| 21 | `b2-Marssonde-1289` | `csText` | `Sonda Mars` | `Sonda k Marsu • Marsovská sonda` | LABOT |
| 22 | `b2-Maskenbildner-1293` | `csText` | `Profesionální vizážistka a kadeřnice` | `Profesionální maskér a kadeřník` | LABOT |
| 23 | `b2-Matinée-1298` | `csText` | `Ranní show` | `Dopolední představení • Matiné` | LABOT |
| 24 | `b2-mehren-1303` | `csText` | `Násobit` | `Rozmnožovat • Zvyšovat` | LABOT |

## OWNER validation note
- Group 26 ir definēta pēc secības `1251–1300`; `b2-mehren-1303` ir 50. objekts šajā secības blokā, jo B2 ID numerācija nav pilnīgi nepārtraukta.
- Kartītes bez mapping apzināti paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus šī 50 kartīšu secības bloka nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `24`
- expected applied: `24/24`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme
Šis fails attiecas uz nākamo B2 50 kartīšu secības bloku pēc Group 25.
