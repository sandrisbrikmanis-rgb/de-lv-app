# CS–DE Kurss — OWNER decisions Group 05 (findings 201–218)

Avots: `reports/cs-kurss-owner-review-group05.md`

**DE = STRICT READ-ONLY.** Findings 201–217 ir konkrēti LV atlikumi CS slānī un ir apstiprināti labošanai.

| # | ID / path | OWNER status | CURRENT | NEW |
|---:|---|---|---|---|
| 201 | `kurssLesson20.sections[2].items[1].heading` | **LABOT** | Prievārds + artikuls | Předložka + člen |
| 202 | `kurssLesson20.sections[2].items[3].heading` | **LABOT** | Saliktie lietvārdi | Složená podstatná jména |
| 203 | `kurssLesson20.sections[2].items[4].heading` | **LABOT** | Salikto lietvārdu veidošana | Tvoření složených podstatných jmen |
| 204 | `kurssLesson20.sections[3].items[0]` | **LABOT** | Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št. | Ve slovech Stockwerk, Stein, Stadt, stecken se st vyslovuje jako št. |
| 205 | `kurssLesson20.sections[3].items[1]` | **LABOT** | Vārdos der Ofen, der Boden: o ir garš. | Ve slovech der Ofen, der Boden je o dlouhé. |
| 206 | `kurssLesson20.sections[3].items[2]` | **LABOT** | sch izrunā kā š: der Schornstein, der Mensch. | sch se vyslovuje jako š: der Schornstein, der Mensch. |
| 207 | `kurssLesson20.sections[3].items[3]` | **LABOT** | Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā. | Ve slovech das Haus, das Holz je h slyšitelné a vyslovuje se. |
| 208 | `kurssLesson20.sections[3].items[4]` | **LABOT** | Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā. | Ve slovech die Wohnung, wohnen označuje h délku a nevyslovuje se. |
| 209 | `kurssLesson20.sections[3].items[5]` | **LABOT** | Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-hláska [ç], která v češtině nemá přesný ekvivalent. | Ve slovech die Küche, die Dächer se ch vyslovuje jako německá hláska ich-Laut [ç], která v češtině nemá přesný ekvivalent. |
| 210 | `kurssLesson20.sections[3].items[6]` | **LABOT** | Vārdā das Vorhaus: v izrunā kā f. | Ve slově das Vorhaus se v vyslovuje jako f. |
| 211 | `kurssLesson21.sections[2].items[0].examples[3]` | **LABOT** | mit dem Mann — ar vīru | mit dem Mann — s mužem |
| 212 | `kurssLesson21.sections[2].items[1].examples[2]` | **LABOT** | Mūsdienu forma: vom Feld, vom Berg. | Současná forma: vom Feld, vom Berg. |
| 213 | `kurssLesson21.sections[2].items[4].heading` | **LABOT** | Materiāls | Materiál |
| 214 | `kurssLesson21.sections[3].items[0]` | **LABOT** | Vārdā die Axt: x izrunā kā ks. | Ve slově die Axt se x vyslovuje jako ks. |
| 215 | `kurssLesson21.sections[3].items[1]` | **LABOT** | Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai. | Ve slovech arbeiten, das Beil, steigen se ei vyslovuje jako ai. |
| 216 | `kurssLesson21.sections[3].items[2]` | **LABOT** | Vārdā die Scheune: eu izrunā kā oi. | Ve slově die Scheune se eu vyslovuje jako oi. |
| 217 | `kurssLesson21.sections[3].items[3]` | **LABOT** | Vārdā die Brücke: ck izrunā kā dubultu k. | Ve slově die Brücke se ck vyslovuje jako dvojité k. |

## Finding 218 — atsevišķs OWNER lēmums

- ID/path: `kurssArticlesLesson`
- Audita statuss: HIGH
- OWNER status: **LABOT**
- Iemesls: CS blokā ir jaukta kvalitāte un vismaz viens nepārprotams LV atlikums (`stol`). Tā kā finding aptver visu `kurssArticlesLesson` objektu, nevis vienu precīzu lauku, to **nedrīkst akli COPY-ONLY aizvietot ar vienu īsu NEW vērtību**.
- Lēmums: pilnībā lokalizēt `kurssArticlesLesson` CS native saturu no LV references uz dabisku čehu valodu, saglabājot visus DE fragmentus STRICT READ-ONLY, struktūru un secību.
- Īpaši redzamais labojums: `Der Tisch - stol` → `Der Tisch - stůl`.
- Pirms apply jāizveido precīzs field-level CURRENT → NEW mappings šim objektam; tikai pēc tam COPY-ONLY apply.

## Kopsavilkums

- LABOT: **18**
- NELABOT: **0**
- FALSE_POSITIVE: **0**
- Kopā: **18/18 OWNER izlemti**
- Findings 201–217: **17 gatavi tiešam field-level mapping apply**
- Finding 218: **LABOT, bet vispirms nepieciešams precīzs field-level mapping**
- Production changes: **0**
- DE changes: **0**

## Apply note

Pirms COPY-ONLY apply obligāti: `actual current value === CURRENT`; mismatch → **SKIP**.
Mainīt tikai norādīto CS native saturu. DE = STRICT READ-ONLY.