# ET–DE Kurss — MASTER v1.11 full deterministic residual audit

**Generated:** 2026-08-24T10:33:24.157Z
**ORIGIN_MAIN_SHA:** `571124878bb889e5353d84bc5118806976670c31`
**MASTER_VERSION:** 1.11
**ET_KURSS_PRODUCTION_BLOB:** `117be3ec73bc26a42b56af36614c4de29b044cfc`

## Verdict: **ET_KURSS_V111_DETERMINISTIC_RESIDUAL_FAIL**

## Scope

| Metric | Value |
|--------|-------|
| Lessons scanned (L1–L21) | **21/21** |
| Learner text nodes scanned | **498** |
| DETERMINISTIC_SCOPE_COVERAGE | **100%** |
| DETERMINISTIC_DISCOVERY_COMPLETENESS | **100%** |
| LEGACYHTML_TEXTNODE_SCAN | **PASS** |

## Foreign-language residual (L1–L21)

| Metric | Value |
|--------|-------|
| RAW_CANDIDATES (LV signals) | **115** |
| REAL_LV_RESIDUAL | **21** |
| MIXED_LV_ET_RESIDUAL | **16** |
| FALSE_POSITIVE (phonetic hints) | **33** |
| RAW_UNCLASSIFIED | **45** |
| **FOREIGN_LANGUAGE_RESIDUAL** | **37** |
| L1–L7 foreign findings | **37** |

## Other deterministic gates

| Metric | Value |
|--------|-------|
| EMPTY_REQUIRED_LOCALIZED_FIELDS | **0** |
| PLACEHOLDERS | **0** |
| MOJIBAKE | **0** |
| MULTIPLE_TRANSLATION_CANDIDATES_RAW | **188** |
| MIRROR | **PASS** |
| validate-kurss --lang=et | **PASS** |
| DE_CHANGES | **0** |
| PRODUCTION_CHANGES | **0** |

## Foreign residual inventory (sample)

- **REAL_LV_RESIDUAL** · L1 · `kurssLesson1.legacyHtml → accordion:Grammatika → kurss-example → [14]`
  - Latviešu valodā: Tu nāc. Vai tu nāc?
- **REAL_LV_RESIDUAL** · L2 · `kurssLesson2.legacyHtml → accordion:Hääldus → kurss-example → [1]`
  - Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.
- **REAL_LV_RESIDUAL** · L3 · `kurssLesson3.legacyHtml → accordion:Grammatika → kurss-example → [4]`
  - vīriešu kārta — der
- **REAL_LV_RESIDUAL** · L3 · `kurssLesson3.legacyHtml → accordion:Grammatika → kurss-example → [5]`
  - sieviešu kārta — die
- **REAL_LV_RESIDUAL** · L3 · `kurssLesson3.legacyHtml → accordion:Grammatika → kurss-example → [7]`
  - Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.
- **REAL_LV_RESIDUAL** · L3 · `kurssLesson3.legacyHtml → accordion:Grammatika → kurss-example → [11]`
  - vīriešu kārta — ein
- **REAL_LV_RESIDUAL** · L3 · `kurssLesson3.legacyHtml → accordion:Grammatika → kurss-example → [12]`
  - sieviešu kārta — eine
- **REAL_LV_RESIDUAL** · L4 · `kurssLesson4.legacyHtml → accordion:Grammatika → kurss-example → [13]`
  - daudzskaitlī — sie
- **REAL_LV_RESIDUAL** · L5 · `kurssLesson5.legacyHtml → accordion:Hääldus → kurss-example → [2]`
  - ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **REAL_LV_RESIDUAL** · L5 · `kurssLesson5.legacyHtml → accordion:Grammatika → kurss-example → [1]`
  - Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.
- **REAL_LV_RESIDUAL** · L5 · `kurssLesson5.legacyHtml → accordion:Grammatika → kurss-example → [14]`
  - Daudz sieviešu kārtas vārdu atvasina ar galotni -in.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example → [1]`
  - Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example → [3]`
  - Piemēri: fünf, der Schlüssel (šlūsel).
- **REAL_LV_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example → [5]`
  - Divkāršots patskanis apzīmē garu patskani: leer (lēr).
- **REAL_LV_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example → [6]`
  - Divskani eu izrunā kā oi: neun (noin).
- **REAL_LV_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [1]`
  - Piemēri: hinlegen — er legt hin; aufmachen — er macht auf; anspitzen — er spitzt an.
- **REAL_LV_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [2]`
  - Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [3]`
  - Piemēri: ein Schüler — üks õpilane; eine Schülerin — üks õpilane (naine); ein Kind — üks laps.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [4]`
  - Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [5]`
  - Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
- **REAL_LV_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [6]`
  - Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [7]`
  - Piemēri: tas ir veseris — das ist ein Hammer; see on nõel — das ist eine Nadel; need on haamrid — das sind Hämmer; need on nõelad — das sind Nadeln.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [9]`
  - Vīriešu un vidējās kārtas lietvārdi ar galotni -er, -el, -en ei saa mitmuses sageli lõppu.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [10]`
  - Piemēri: der Hammer — die Hämmer; der Garten — die Gärten; das Fenster — die Fenster; das Messer — die Messer.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [11]`
  - Sieviešu kārtas lietvārdi ar galotni -el, -er saavad mitmuses lõpu -n.
- **REAL_LV_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [12]`
  - Piemēri: die Nadel — die Nadeln; die Feder — die Federn.
- **MIXED_LV_ET_RESIDUAL** · L6 · `kurssLesson6.legacyHtml → accordion:Grammatika → kurss-example → [13]`
  - Izņēmumi: die Mutter (māte) — die Mütter (emad); die Tochter (tütar) — die Töchter (tütred).
- **MIXED_LV_ET_RESIDUAL** · L7 · `kurssLesson7.legacyHtml → accordion:Hääldus → kurss-example → [1]`
  - sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **MIXED_LV_ET_RESIDUAL** · L7 · `kurssLesson7.legacyHtml → accordion:Hääldus → kurss-example → [2]`
  - Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).
- **MIXED_LV_ET_RESIDUAL** · L7 · `kurssLesson7.legacyHtml → accordion:Grammatika → kurss-example → [1]`
  - Piemēri: antworte!, arbeite!, öffne!, zeichne!
- **REAL_LV_RESIDUAL** · L7 · `kurssLesson7.legacyHtml → accordion:Grammatika → kurss-example → [3]`
  - Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.
- **MIXED_LV_ET_RESIDUAL** · L7 · `kurssLesson7.legacyHtml → accordion:Grammatika → kurss-example → [4]`
  - Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!
- **MIXED_LV_ET_RESIDUAL** · L7 · `kurssLesson7.legacyHtml → accordion:Grammatika → kurss-example → [6]`
  - Piemēri: antworten Sie!, arbeiten Sie!, öffnen Sie!, zeichnen Sie!, gehen Sie!, stehen Sie!, tun Sie!
- **MIXED_LV_ET_RESIDUAL** · L7 · `kurssLesson7.legacyHtml → accordion:Grammatika → kurss-example → [7]`
  - Darbības vārdam öffnen vieglākas izrunas dēļ 2. un 3. personā vienskaitlī un 2. personā daudzskaitlī starp celmu un galotni iesprauž e: du öffnest, er öffnet, ihr öffnet.
- **REAL_LV_RESIDUAL** · L13 · `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].table[0][1]`
  - Vīriešu
- **REAL_LV_RESIDUAL** · L16 · `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[0][1]`
  - Vīriešu
- **REAL_LV_RESIDUAL** · L16 · `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[0][1]`
  - Vīriešu


