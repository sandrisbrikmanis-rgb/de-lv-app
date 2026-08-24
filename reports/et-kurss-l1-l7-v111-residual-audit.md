# ET–DE Kurss L1–L7 — v1.11 deterministic residual audit

**Generated:** 2026-08-24T10:34:00.884Z
**ORIGIN_MAIN_SHA:** `571124878bb889e5353d84bc5118806976670c31`
**Verdict:** **ET_KURSS_L1_L7_V111_NEEDS_OWNER_REVIEW**

## Metrics

| Metric | Value |
|--------|-------|
| L1_L7_LEARNER_TEXT_SCOPE_COVERAGE | **100%** |
| LEGACYHTML_TEXTNODE_SCAN | **PASS** |
| RAW_CANDIDATES (LV signals L1–L7) | **115** |
| REAL_LV_RESIDUAL | **21** |
| MIXED_LV_ET_RESIDUAL | **16** |
| FALSE_POSITIVE (phonetic) | **33** |
| OWNER_FINDINGS | **37** |
| PRODUCTION_CHANGES | **0** |

## Clarification vs prior closure

Prior closure reported `FOREIGN_LANGUAGE_RESIDUAL = 0` because the v1.10 scan **skipped** L1–L7 `legacyHtml` foreign-language detection (`skipLegacyForeign = lessonNum <= 7`).

This v1.11 granular text-node scan finds **37** validated learner-facing LV/mixed fragments in L1–L7 (not an estimate of ~10).

| Finding ID | Lesson | Field/path | Classification | CURRENT fragment | Status |
|------------|--------|------------|----------------|------------------|--------|
| ET-KURSS-L1L7-V111-0001 | L1 | kurssLesson1.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Latviešu valodā: Tu nāc. Vai tu nāc?… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0002 | L2 | kurssLesson2.legacyHtml → accordion:Hääldus → kurss-example … | REAL_LV_RESIDUAL | Vārdos arbeiten, zeichnen divskani ei izrunā apmēr… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0003 | L3 | kurssLesson3.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | vīriešu kārta — der… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0004 | L3 | kurssLesson3.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | sieviešu kārta — die… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0005 | L3 | kurssLesson3.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Daudzskaitlī noteiktais artikuls visām trim kārtām… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0006 | L3 | kurssLesson3.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | vīriešu kārta — ein… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0007 | L3 | kurssLesson3.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | sieviešu kārta — eine… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0008 | L4 | kurssLesson4.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | daudzskaitlī — sie… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0009 | L5 | kurssLesson5.legacyHtml → accordion:Hääldus → kurss-example … | REAL_LV_RESIDUAL | ß sauc par escet un izrunā kā latviešu s: groß (gr… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0010 | L5 | kurssLesson5.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Akuzatīvā jautājums ir wen? personām un was? priek… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0011 | L5 | kurssLesson5.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Daudz sieviešu kārtas vārdu atvasina ar galotni -i… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0012 | L6 | kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example … | MIXED_LV_ET_RESIDUAL | Piemēri: das Mädchen (mētchen), die Bänke (dī benk… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0013 | L6 | kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example … | MIXED_LV_ET_RESIDUAL | Piemēri: fünf, der Schlüssel (šlūsel).… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0014 | L6 | kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example … | REAL_LV_RESIDUAL | Divkāršots patskanis apzīmē garu patskani: leer (l… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0015 | L6 | kurssLesson6.legacyHtml → accordion:Hääldus → kurss-example … | REAL_LV_RESIDUAL | Divskani eu izrunā kā oi: neun (noin).… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0016 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Piemēri: hinlegen — er legt hin; aufmachen — er ma… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0017 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Skaitļa vārds viens ir visās trīs kārtās, ja to li… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0018 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Piemēri: ein Schüler — üks õpilane; eine Schülerin… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0019 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0020 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļ… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0021 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Norādāmais vietniekvārds tas latviešu valodā mainā… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0022 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Piemēri: tas ir veseris — das ist ein Hammer; see … | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0023 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Vīriešu un vidējās kārtas lietvārdi ar galotni -er… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0024 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Piemēri: der Hammer — die Hämmer; der Garten — die… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0025 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Sieviešu kārtas lietvārdi ar galotni -el, -er saav… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0026 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Piemēri: die Nadel — die Nadeln; die Feder — die F… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0027 | L6 | kurssLesson6.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Izņēmumi: die Mutter (māte) — die Mütter (emad); d… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0028 | L7 | kurssLesson7.legacyHtml → accordion:Hääldus → kurss-example … | MIXED_LV_ET_RESIDUAL | sch izrunā kā latviešu š: die Schaufel (dī šaufel)… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0029 | L7 | kurssLesson7.legacyHtml → accordion:Hääldus → kurss-example … | MIXED_LV_ET_RESIDUAL | Divskani äu izrunā kā latviešu oi: das Fräulein (d… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0030 | L7 | kurssLesson7.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Piemēri: antworte!, arbeite!, öffne!, zeichne!… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0031 | L7 | kurssLesson7.legacyHtml → accordion:Grammatika → kurss-examp… | REAL_LV_RESIDUAL | Pavēles forma 2. personā daudzskaitlī līdzinās tag… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0032 | L7 | kurssLesson7.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0033 | L7 | kurssLesson7.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Piemēri: antworten Sie!, arbeiten Sie!, öffnen Sie… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0034 | L7 | kurssLesson7.legacyHtml → accordion:Grammatika → kurss-examp… | MIXED_LV_ET_RESIDUAL | Darbības vārdam öffnen vieglākas izrunas dēļ 2. un… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0035 | L13 | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].table[… | REAL_LV_RESIDUAL | Vīriešu… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0036 | L16 | COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[… | REAL_LV_RESIDUAL | Vīriešu… | OWNER_DECISION_REQUIRED |
| ET-KURSS-L1L7-V111-0037 | L16 | COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[… | REAL_LV_RESIDUAL | Vīriešu… | OWNER_DECISION_REQUIRED |
