# ET–DE Kurss — Live / Runtime Reopen Audit

**Generated:** 2026-08-23T17:44:54.779Z
**Git:** 158d8a71
**Scope:** ET Kurss L1–L21 — rendered learner-facing content + runtime card/accordion binding simulation

## Verdict

**ET_KURSS_REOPEN — production-visible defects remain**

Prior closure `ET_KURSS_FINAL_CLOSED_ON_MAIN` is **not** restored. OWNER_BACKLOG_FINAL=0 does not prove live UI correctness.

## Summary

| Bucket | Count |
|--------|-------|
| CONTENT_REPAIR | 25 |
| SHARED_RENDERER_REPAIR | 1 |
| ET_RENDERER/DATA_REPAIR | 0 |
| **Total defects** | **26** |

## Live browser verification (Playwright)

| Lesson | Exercise deck @runtime | Translate deck @runtime | Card DOM empty |
|--------|-------------------------|-------------------------|----------------|
| L5 | n/a (legacy translate only) | 16 cards populated | translate OK |
| L18 | **0** (data has 8) | **0** (data has 18) | **Harjutus + Tõlgi blank** |

Browser confirmed L18 flashcard buttons have correct `data-course-*-card` + `data-lesson-id` attrs but `innerHTML` stays empty because `getExerciseMicroDeck` / `getCourseTranslateCards` return zero-length decks at runtime.

## Shared renderer notes

- Harjutus not in COURSE_EXERCISE_SECTION_TITLES — structural matcher covers ET exercise sections
- Tõlgi not in COURSE_TRANSLATE_SECTION_TITLES — structural matcher covers via translationCards type

## CONTENT_REPAIR

### L1 — Grammatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** ∞ Infinitiiv Tegusõna algvorm. Tavaliselt lõpeb infinitiiv lõpuga -en. kommen gehen stehen singen ♟ Oleviku lõpud i Eemalda tegusõna algvormist -en ja lisa lõpp. Näide: kommen → komm + lõpp kommen alg
- **Source file/path:** data/et/courseLessons.js → kurssLesson1.legacyHtml (accordion: Grammatika)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L2 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Sõnades ich, nicht, rechnen ja zeichnen hääldatakse häälikut ch pehmelt, umbes nagu eesti sõnades „tehnika“ ja „Friedrich“. Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e ska
- **Source file/path:** data/et/courseLessons.js → kurssLesson2.legacyHtml (accordion: Hääldus)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L3 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī). ck ir divkāršs k: dick (dikk). Omadus- ja määrsõnades kõlab lõpp -ig nagu kerge -ich: niedrig (niidrih). Ja galotne -ig lõp
- **Source file/path:** data/et/courseLessons.js → kurssLesson3.legacyHtml (accordion: Hääldus)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_GRAMMAR_FRAGMENT)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L3 — Grammatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** 1 Lause alus Lause alus vastab saksa keeles küsimusele wer? / was? ja seisab nominatiivis. Wer? küsib inimeste kohta. Ar was? jautā pēc priekšmetiem. Wer singt? — Sie singt. Was liegt hier? — Hier lie
- **Source file/path:** data/et/courseLessons.js → kurssLesson3.legacyHtml (accordion: Grammatika)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_GRAMMAR_FRAGMENT)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L4 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Galotnes -en, -er, -el on rõhutamata, seetõttu on e neis lõppudes nõrgalt kuuldav: kommen, nehmen, der Federhalter. h võib saksa keeles olla nii häälik kui ka eelneva vokaali pikkuse märk. Ja h ir gar
- **Source file/path:** data/et/courseLessons.js → kurssLesson4.legacyHtml (accordion: Hääldus)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L5 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** tz on kahekordne z-häälik ja seda hääldatakse nagu z-i: sitzen (zicen). v vācu vārdos izrunā kā f: der Vater (fāter). ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **Source file/path:** data/et/courseLessons.js → kurssLesson5.legacyHtml (accordion: Hääldus)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L5 — Grammatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Nominatiiv ja akusatiiv Eesti keeles vastab nominatiiv küsimusele kes/mis?, aga akusatiiv küsimusele keda/mida?. Saksa keeles on nominatiivis inimeste kohta küsimus wer? ja esemete kohta was?. Akuzatī
- **Source file/path:** data/et/courseLessons.js → kurssLesson5.legacyHtml (accordion: Grammatika)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_GRAMMAR_FRAGMENT)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L6 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** ä on vokaali a muutunud variant ning seda hääldatakse lühikese või pika kitsa e-na. Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter). ü ir patskaņa u p
- **Source file/path:** data/et/courseLessons.js → kurssLesson6.legacyHtml (accordion: Hääldus)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L6 — Grammatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Grammatika ja selgitused Liitverbi rõhuline eesliide eraldub olevikus verbist ja paikneb lause lõpus. Piemēri: hinlegen — er legt hin; aufmachen — er macht auf; anspitzen — er spitzt an. Skaitļa vārds
- **Source file/path:** data/et/courseLessons.js → kurssLesson6.legacyHtml (accordion: Grammatika)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L7 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Sõna või silbi alguses hääldatakse sp nagu šp: der Spiegel (dēr špīgel). sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel). Divskani äu izrunā kā latviešu oi: das Fräulein (d
- **Source file/path:** data/et/courseLessons.js → kurssLesson7.legacyHtml (accordion: Hääldus)
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L14 — Grammatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich will vorwärts kommen. — Es gribu tikt uz priekšu.
- **Source file/path:** data/et/courseLessons.js → kurssLesson14.sections[title=Grammatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_EXAMPLE_TRANSLATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L14 — Grammatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich mag die Suppe nicht essen. — Es negribu zupu ēst.
- **Source file/path:** data/et/courseLessons.js → kurssLesson14.sections[title=Grammatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_EXAMPLE_TRANSLATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L15 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm.
- **Source file/path:** data/et/courseLessons.js → kurssLesson15.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_EXAMPLE_TRANSLATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L16 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** die Wälder: ä izrunā kā šaurais īsais e.
- **Source file/path:** data/et/courseLessons.js → kurssLesson16.sections[title=Hääldus]
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L16 — Hääldus

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** die Bäuerinnen: äu izrunā kā oi.
- **Source file/path:** data/et/courseLessons.js → kurssLesson16.sections[title=Hääldus]
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_PRONUNCIATION_EXPLANATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich gehe an den Tisch. — Es eju pie galda.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_SENTENCE)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_SENTENCE)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_SENTENCE)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_SENTENCE)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich stehe an dem Tische. — Es stāvu pie galda.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_SENTENCE)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Der Korb steht auf der Bank. — Grozs stāv uz sola.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_SENTENCE)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Die Äpfel sind in dem Körbchen. — Āboli ir groziņā.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_EXAMPLE_TRANSLATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Das Wasser ist in dem Kruge. — Ūdens ir krūzē.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_EXAMPLE_TRANSLATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich trinke Milch. — Es dzeru pienu.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_EXAMPLE_TRANSLATION)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

### L18 — Gramatika

- **Defect type:** LV_REMNANT_OR_MIXED_LANGUAGE
- **Visible CURRENT:** Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.
- **Source file/path:** data/et/courseLessons.js → kurssLesson18.sections[title=Gramatika].examples
- **Root cause:** Learner-facing ET content still contains Latvian or LV-learner phrasing (LV_SENTENCE)
- **Required repair:** Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js

## SHARED_RENDERER_REPAIR

### L8–L21 (ET); all non-LV langs with localized Harjutus/Tõlgi-style section titles — Harjutus / Tõlgi dynamic training cards

- **Defect type:** RUNTIME_BLANK_DYNAMIC_CARDS
- **Visible CURRENT:** Flashcard buttons render with correct data-course-*-card + data-lesson-id attrs but innerHTML stays empty; flip/next/progress inoperative
- **Source file/path:** ui.js → findCourseLessonCardSection (line ~622) + getCourseExerciseCards / getCourseTranslateCards
- **Root cause:** findCourseLessonCardSection() calls arity-1 matchers with section.title only (matcher.length > 1 guard). matchesCourseExerciseSection / matchesCourseTranslateSection are arity-1, so structural card-shape matching never runs in deck resolution. Localized titles (Harjutus, Tõlgi, etc.) are not in title allowlists → getCourseExerciseCards() and getCourseTranslateCards() return [] while renderCourseLessonFromData still sets DOM attrs (PR #638 partial fix).
- **Affected lessons (ET):** L8, L9, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, L20, L21
- **Browser verified:** L18: exerciseDeckLen=0, translateDeckLen=0 with 8+18 cards in data; exInner/trInner empty
- **Required repair:** SHARED_RENDERER_REPAIR: fix findCourseLessonCardSection to pass full section to matchers (or add second dummy parameter). Re-init cards after fix. Do not add per-language title hacks.

## ET_RENDERER/DATA_REPAIR

_No findings in this bucket._

## Method

1. Loaded `data/et/courseLessons.js` and traced legacyHtml vs structured sections (legacyHtml wins in `renderCourseLessonFromData`).
2. Simulated dynamic-card DOM attrs via `kurss-dynamic-card-section-matchers.js` (same logic as post-PR #638 `ui.js`).
3. Scanned all learner-facing strings for LV diacritics and LV-learner phrasing.
4. Complemented with Playwright browser verification for L5 and L18 (see script output).

**No production repair applied in this audit pass.**
