# BS–DE KURSS FULL PARITY AUDIT

**Audit date:** 2026-08-08  
**Mode:** AUDIT ONLY — no data, CSS, renderer, or LV files modified  
**Data modifications:** NONE  
**LV files modified:** NONE  
**BS files modified:** NONE  

**Final status:** **BS–DE KURSS PARITY AUDIT = REPAIRS REQUIRED**

---

## Architecture discovered

### Load path (verified by tracing code)

```
index.html (#kurssPanel, kurssLesson1–21, static kurss* panels)
  → launch.js (language selection)
  → languages/data-loader.js (AppDataLoader)
  → languages/bs/data/manifest.js
      datasets.courseLessons → ./data/bs/courseLessons.js
      (+ auto-loads ./data/bs/courseTrainingCards.js when courseLessons loads)
  → ui.js (shared Kurss renderer for all languages)
  → languages/bs/ui.js (kurss.* UI strings via AppI18n)
  → style.css (shared design)
```

### Data sources by Kurss area

| Area | LV etalon | BS implementation | Format |
|------|-----------|-------------------|--------|
| Main menu | `languages/lv/ui.js` `kurss.*` | `languages/bs/ui.js` `kurss.*` | i18n keys |
| Izruna (Pronunciation) menu | `ui.js` + `COURSE_LESSON_HTML.kurssPronunciationLesson` etc. | Same renderer; BS HTML from `data/bs/courseLessons.js` `COURSE_LESSON_HTML` | legacy HTML string |
| Artikuli | `COURSE_LESSON_HTML.kurssArticlesLesson` | BS override in `data/bs/courseLessons.js` | legacy HTML |
| Vietniekvārdi (Pronouns) | `COURSE_LESSON_HTML.kurssPronounsLesson` | BS override | legacy HTML |
| Darbības vārdu pamati | `COURSE_LESSON_HTML.kurssVerbBasicsLesson` | BS override | legacy HTML |
| Teikumu struktūra | `COURSE_LESSON_HTML.kurssSentenceStructureLesson` | BS override | legacy HTML |
| Lekcijas 1–7 | `COURSE_LESSON_HTML` + embedded flashcard markup in HTML; LV cards hardcoded in `ui.js` | `legacyHtml` in `data/bs/courseLessons.js`; cards in `data/bs/courseTrainingCards.js` | legacy HTML + side-file cards |
| Lekcijas 8–21 | `COURSE_LESSON_DATA.kurssLessonN.sections[]` with `cards` arrays | Same structure in `data/bs/courseLessons.js` | structured sections |
| L1–6 flashcards (Practice/Translate) | `lessonNTrainingCards` in `ui.js` (LV text) | `lessonNTrainingCardsBs` in `data/bs/courseTrainingCards.js`; loaded via `getCourseTranslateCards()` `lang === "bs"` branch | side-file |
| L7 exercise flashcards | `lesson7ExerciseCards` in `ui.js` | `lesson7ExerciseCardsBs` in `data/bs/courseTrainingCards.js` via `getExerciseSourceCards()` | side-file |
| L8–21 flashcards | `sections` with titles `Pārtulko` / `Vingrinājums` / `Übung / Vingrinājums`; resolved by `findCourseLessonCardSection()` using **LV/LT title Sets** in `ui.js` | Same `sections` shape but titles `Prevedi` / `Vježbajte` / `Übung / Vježba` — **not in renderer title Sets** | structured data (runtime broken) |

### Renderer flashcard resolution (`ui.js`)

```537:546:ui.js
const COURSE_TRANSLATE_SECTION_TITLES = new Set(["Pārtulko", "Išversk"]);
const COURSE_EXERCISE_SECTION_TITLES = new Set(["Vingrinājums", "Pratimas", "Übung / Vingrinājums", "Übung / Pratimas"]);
```

```1904:1906:ui.js
if (isCourseTranslateSection(section.title)) {
  attr = 'data-course-translate-card data-lesson-id="' + escapeHtml(lesson.id || "") + '"';
}
```

BS section titles (`Prevedi`, `Vježbajte`, `Übung / Vježba`) are absent from these Sets and from `COURSE_SECTION_I18N_KEYS` (lines 527–535). Cards exist in BS data but the shared renderer cannot bind them for lessons 8–21.

### Mirror parity

`data/bs/courseLessons.js` ≡ `www/data/bs/courseLessons.js` (byte-identical).  
`data/bs/courseTrainingCards.js` present; www mirror not separately checked but loaded from `data/bs/` path.

---

## LV reference integrity

**LV files modified:** NONE

All LV sources used read-only:

- `data/courseLessons.js`
- `languages/lv/ui.js`
- `ui.js`, `style.css`, `index.html`

### SOURCE / LV REFERENCE OBSERVATION

- LV lessons 1–7 use `COURSE_LESSON_HTML` legacy strings; lessons 8–21 use structured `sections`. BS mirrors this split correctly at the data-shape level.
- LV `ui.js` `kurss.sections.translate` = `"Pārtulko"`; BS equivalent should be `"Prevedi"` but `languages/bs/ui.js` has `"Ponovo prevodi"` (see UI section).

---

## Structural parity

### Top-level Kurss menu

| Check | LV | BS | Status |
|-------|----|----|--------|
| Main sections (Izruna, Artikuli, Vietniekvārdi, Lekcijas, Verb basics, Sentence structure) | 6 | 6 | PASS |
| Lesson menu items | 21 | 21 | PASS |
| Lesson IDs | `kurssLesson1`–`kurssLesson21` | Same | PASS |
| `COURSE_LESSON_HTML` keys | 13 | 13 (identical set) | PASS |

### Lessons 8–21 section counts

All 14 lessons: LV section count = BS section count (5 or 6 per lesson). Section **order** matches LV etalon. Section **titles** differ by design (BS native language) but map 1:1 semantically.

### Lessons 1–7 format

| Lesson | LV format | BS format | Section parity |
|--------|-----------|-----------|----------------|
| 1–7 | `COURSE_LESSON_HTML` legacy | `legacyHtml` property | Structural intent matches; HTML content severely corrupted in BS (see markup section) |

### Flashcard data presence (static)

| Range | Translate cards in data | Exercise cards in data |
|-------|------------------------|------------------------|
| L1–6 | `courseTrainingCards.js` (11/15/22/16/16/21) | L7 only in side-file |
| L7 exercise | — | 16 objects, all `{ "back": "" }` only |
| L8–21 | 302 total in `sections` | 100 total in `sections` |

`node scripts/validate-kurss.js --lang=bs` reports: **302 translate, 100 exercise cards** — data exists; runtime binding is the failure point.

---

## 21-lesson verification

**Lessons reviewed: 21 / 21**

| # | Status | Primary issues |
|---|--------|----------------|
| 1 | **FINDINGS** | Legacy HTML corruption (`class="<div`, `course-example`); conjugation text errors (`kochi`, `kommjem`); training cards wrong/leaked (Slovenian `gredo`, etc.) |
| 2 | **FINDINGS** | Legacy HTML corruption; training cards Slovenian/Croatian leakage (`pojejo`, `konjejojo`) |
| 3 | **FINDINGS** | Legacy HTML corruption (`Pav komment. class=`, `</divs>`); training cards Lithuanian leakage (`Sąsiuvinis`, `Lesene klopi`) |
| 4 | **FINDINGS** | Legacy HTML corruption (`</divs>`, broken quotes); training cards partially corrupted |
| 5 | **FINDINGS** | Legacy HTML corruption; training card `Ką bara mokytojas?` (Lithuanian) |
| 6 | **FINDINGS** | Legacy HTML corruption; training cards `mokytojas`, `peilė`, `svinčnik` (LV/LT leakage) |
| 7 | **FINDINGS** | Legacy HTML corruption; **16/16 exercise cards empty**; mixed DE/BS in dialog section |
| 8 | **FINDINGS** | Section data OK; **flashcards broken at runtime** (title matcher); hardcoded `"Pronunciation"` section title |
| 9 | **FINDINGS** | Section data OK; flashcards broken at runtime |
| 10 | **FINDINGS** | Section data OK; translate flashcards broken; no exercise section (matches LV) |
| 11 | **FINDINGS** | Same as L10 |
| 12 | **FINDINGS** | Same as L10 |
| 13 | **FINDINGS** | Section data OK; both flashcard types broken at runtime |
| 14 | **FINDINGS** | Translate flashcards broken at runtime |
| 15 | **FINDINGS** | Translate flashcards broken at runtime |
| 16 | **FINDINGS** | Both flashcard types broken at runtime |
| 17 | **FINDINGS** | Both flashcard types broken at runtime |
| 18 | **FINDINGS** | Both flashcard types broken at runtime |
| 19 | **FINDINGS** | Both flashcard types broken at runtime |
| 20 | **FINDINGS** | Both flashcard types broken at runtime |
| 21 | **FINDINGS** | Both flashcard types broken at runtime |

**Summary:** 0 PASS · 21 FINDINGS

---

## HTML / markup findings

### Pattern counts in `data/bs/courseLessons.js`

| Pattern | Count | Severity | Cause |
|---------|-------|----------|-------|
| `course-example` (should be `kurss-example`) | **131** | HIGH | Wrong CSS class during translation/export; breaks example-card styling |
| `class="<div` (nested broken open tag) | **~hundreds** (in legacy HTML) | CRITICAL | HTML attribute/class conflation during string translation |
| `</divs>` | **9** | CRITICAL | Corrupted closing tag |
| `onav class` | **2** | CRITICAL | Broken pronoun line (`Sie - ona` → `onav class=`) |
| `</>` | **3** | CRITICAL | Orphan/stray closing fragment |
| `mouth class` / `kurles` | **1+** | CRITICAL | Consonants lesson: `Fledermaus` line shattered |
| `articles-info` (LV uses `artikuli-info`) | **4** | MEDIUM | Mixed class namespace |
| `course-lesson-section` / `course-examples` | multiple | MEDIUM | LV uses `kurss-lesson-section` / `kurss-examples` in pronunciation |

### Representative examples

**Artikuli** (`kurssArticlesLesson`):
- `class="<div class=\"kurss-example\">` — visible broken markup in rendered cards
- `Chesto DER` — non-word (corruption of “Često”)

**Vietniekvārdi** (`kurssPronounsLesson`):
- `Sie - onav class=\"div>` — pronoun table destroyed
- Mix of `course-example` and `kurss-example` in same section

**Lekcija 3** (`legacyHtml`):
- `Pav komment. class=\"<div class=\"kurss-example\">` — German sentence + markup fused

**Lekcija 4**:
- `</divs><div „Wie ist der Federhalter?“` — broken tag + wrong quote entity

**Lekcija 7**:
- Unclosed `<p>` in intro; `course-example` with raw mixed DE/BS: `Hanse, pjevaj! sta radis Ich singe ein Lied.`

**Root cause (assessment):** Automated LV→BS translation treated HTML attribute strings as translatable text, producing literal fragments (`class=`, `div>`, `onav`) in user-visible content. This is a **data-layer** defect, not CSS or a separate BS renderer.

---

## Design parity

| Aspect | LV | BS | Cause |
|--------|----|----|-------|
| Container / accordion | `lesson1-accordion`, `kurss-example` | Same class names intended; BS often has `course-example` or broken `class="<div` | **A) data/HTML** |
| Colored example cards | `kurss-example` styled in `style.css` | 131× `course-example` + broken wrappers → missing/wrong card chrome | **A) data/HTML** |
| Artikuli blocks | `artikuli-block`, `artikuli-grid` | `articles-block`, `articles-grid`, `articles-info` | **A) data/HTML** — wrong class namespace |
| Section titles in L8–21 | Localized via `kurss.sections.*` when internal key matches | `"Pronunciation"` hardcoded English in 14 lessons | **D) localization** in data titles |
| Flashcard container | `lesson1-training-wrap` / `lesson1-training-flashcard` | Renderer emits same markup when cards resolve; BS L8–21 cards don't resolve | **C) renderer** title matcher + **A) data** titles |
| Typography / spacing | Shared CSS | Would match if markup/classes were correct | **F) combination** — fix structure first, not new BS CSS |

**Conclusion:** LV `style.css` already provides correct design. BS does **not** need a separate CSS track; it needs structural/markup parity restoration in data (and renderer title registration for BS section keys).

---

## Flashcard system parity

### Practice / section 5 (Vježbajte / Übung)

| Check | LV | BS | Status |
|-------|----|----|--------|
| Data source L1–6 | N/A (translate only in section 5 for L1–6) | Side-file | L7 exercise separate |
| Data source L7 | `lesson7ExerciseCards` in `ui.js` | `lesson7ExerciseCardsBs` — **16 empty objects** | **CRITICAL FAIL** |
| Data source L8–21 | `sections` titled `Vingrinājums` / `Übung / Vingrinājums` | `sections` titled `Vježbajte` / `Übung / Vježba` — cards present | Data OK |
| `getExerciseSourceCards()` / `findCourseLessonCardSection()` | Matches LV titles | Does **not** match BS titles → returns `[]` (except L8 partial: first `cards` section) | **CRITICAL FAIL** |
| `renderCourseLessonFromData` attribute | `data-course-exercise-card` when title matches | `Prevedi`/`Vježbajte` don't match → wrong/missing handlers | **CRITICAL FAIL** |
| Reveal / next / progress | Works on LV | Empty deck or wrong handler on BS L7–L21 | **CRITICAL FAIL** |

### Translate / section 6 (Prevedi / Pārtulko)

| Check | LV | BS | Status |
|-------|----|----|--------|
| L1–6 data | `lessonNTrainingCards` in `ui.js` | `lessonNTrainingCardsBs` — loads via explicit `bs` branch | **Partial PASS** (cards load but many fronts are wrong/leaked) |
| L8–21 data | `sections` `Pārtulko` cards | `sections` `Prevedi` cards (302 total) | Data OK |
| `getCourseTranslateCards()` L8–21 | `findCourseLessonCardSection(..., isCourseTranslateSection)` | `Prevedi` ∉ Set → **returns []** | **CRITICAL FAIL** |
| `data-course-translate-card` binding | Set when `isCourseTranslateSection(title)` | Never set for `Prevedi` | **CRITICAL FAIL** |
| Click handler | `handleCourseTranslateCardClick` | Not wired for BS L8–21 translate sections | **CRITICAL FAIL** |
| LV fallback | N/A | No LV fallback for L8–21 (correct BS data exists but unused) | N/A |

### Lesson 7 exercise detail

```425:474:data/bs/courseTrainingCards.js
window.lesson7ExerciseCardsBs = [
  { "back": "" },
  // ... 16 entries, all only "back": ""
];
```

LV etalon cards include `infinitive`, `lv`, `du`, `ihr`, `sie` fields. BS deck is structurally invalid — renderer receives empty challenges.

---

## UI localization

**Scope:** `languages/lv/ui.js` vs `languages/bs/ui.js` — `kurss` block only.

### Key parity

Both files define a full `kurss` object including:
- Panel labels, menu, tips, section titles, hints, CTA, exerciseMeta, **21 lessonItems**

No missing top-level `kurss.*` keys detected in BS relative to LV structure.

### Issues found

| Severity | Key / location | Current BS | Recommended BS | Reason |
|----------|----------------|------------|----------------|--------|
| MEDIUM | `kurss.sections.translate` | `Ponovo prevodi` | `Prevedi` | Means “translate again”, not “translate”; mismatches lesson section title and LV semantics |
| MEDIUM | `kurss.lessonItems.5.menuDesc` | `... -u vrhu` | `... na kraju riječi` (or similar) | Corrupted / meaningless (`-u vrhu` ≈ “on top”) |
| MEDIUM | `kurss.lessonItems.8.menuDesc` | `→ e i/odnosno` | Proper BS grammar term for e→i/ie | Technical token leakage |
| LOW | `kurss.exerciseMeta.formSie` | `SIE (ljubazni obrazac)` | `Sie (ljubazni oblik)` | English “SIE” vs German “Sie” |
| MEDIUM | `data/bs/courseLessons.js` section titles L8–L21 | `"Pronunciation"` (×14) | `Izgovor` | Hardcoded English in data, not via i18n |
| LOW | Legacy HTML h3 | `Predavanje N` | `Lekcija N` | UI menu says `Lekcija` but legacy body says `Predavanje` |
| INFORMATIONAL | `kurss.lessonProgress` | `Prevodi:` | OK if `sections.translate` fixed | Consistent with translate label |

No mojibake in `languages/bs/ui.js` kurss block.

---

## BS linguistic audit

Audit performed against BS course content (all 21 lessons + static panels + training cards). Severity uses project scale. Samples below; full lesson HTML contains additional MEDIUM/LOW issues.

### CRITICAL / HIGH linguistic & pedagogical samples

| Sev | Location | Current BS | Recommended BS | Reason |
|-----|----------|------------|----------------|--------|
| HIGH | L1 `legacyHtml` verb card | `Kommen - kochi` | `Kommen — doći` | Meaningless token `kochi` |
| HIGH | L1 conjugation | `Ja kommjem` | `Ja dolazim` | Non-word |
| HIGH | L1 conjugation | `On/ona kommje` | `On/ona dolazi` | Non-word |
| HIGH | `lesson1TrainingCardsBs` [0] | `Griješiš li?` → `Kommst du?` | `Dolaziš li?` → `Kommst du?` | Wrong meaning (sin vs come) |
| HIGH | `lesson1TrainingCardsBs` [1] | `Da, hajde.` → `Ja, ich komme.` | `Da, dolazim.` → `Ja, ich komme.` | Wrong reply |
| HIGH | `lesson1TrainingCardsBs` [4–5] | `Šta znači S?` / `Da, gredo.` | `Idu li?` / `Da, idu.` | Nonsense; `gredo` is Slovenian |
| HIGH | `lesson2TrainingCardsBs` [6] | `Ne, ne pojejo, nego konjejojo.` | `Ne, ne pjevaju, nego računaju.` | Slovenian forms |
| HIGH | `lesson3TrainingCardsBs` [10] | `Sąsiuvinis plonas.` | `Sveska je tanka.` | Lithuanian |
| HIGH | `lesson5TrainingCardsBs` | `Ką bara mokytojas?` | `Šta radi učiteljica?` | Lithuanian |
| HIGH | `lesson6TrainingCardsBs` | `Mokytojas ima peilė je varen svinčnik.` | `Učitelj uzima nož i oštri olovku.` | Lithuanian/LV lexical leakage |
| HIGH | Artikuli intro | `...najloje učiti...` / `Chesto DER` | `...najbolje učiti...` / `Često DER` | Typos / corruption |
| HIGH | Pronunciation | `Gut (dobiti) - dobro` | `gut (gut) — dobro` | Wrong gloss for `gut` |
| HIGH | Pronunciation | `Koliba (hūt) - šešir` | `Hut (hūt) — šešir` | Wrong headword (`Koliba` = hut/cabin) |
| HIGH | L6 intro | `Brown, množina...` | `Brojevi, množina...` | `Brown` is English/LV corruption for “numbers” |
| MEDIUM | L7 intro | `Imperativ izraz, oblik obradnja i mzvina` | `Imperativ, oblik obraćanja i množina` | Corrupted terms |
| MEDIUM | Pronouns | `Akuzativ - šta?` | `Akuzativ — koga/šta?` | Incomplete case label |
| MEDIUM | Multiple lessons | `Je li` + German verb (`Je li steht dort?`) | Bosnian prompt + German sentence split correctly | Calque of Latvian “Vai …?” pattern applied inside German quotes |

### Croatian/Serbian forms to avoid (examples found)

- `gredo`, `pojejo`, `konjejojo` (Slovenian/Croatian influence) in training cards  
- Prefer BS: `idemo/idu`, `pjevaju`, `računaju`

### Lessons 8–21 structured content

Native-language **dialog summaries and grammar explanations** are generally in Bosnian and structurally present. Spot checks did not find DE field corruption in translate cards (L8: 19/19 DE backs match LV). Remaining issues are mostly terminology consistency and the hardcoded `"Pronunciation"` section title.

---

## DE READ-ONLY verification

| Scope | Method | Result |
|-------|--------|--------|
| CEFR word lists (a1–c2), sentences, verbs | `node scripts/verify-bs-de-compliance.js` | **PASS** — 0 DE mismatches |
| Kurss L8 translate cards (sample) | Field `de`/`back` compare LV vs BS | **0 mismatches / 19 cards** |
| Kurss L1–7 legacy HTML German sentences | Visual inspection | German dialogue text largely preserved; some typos introduced in BS HTML (`er arbeitt`, `Pav komment`) — these are **in German substrings inside BS data**, not BS→DE translation changes |
| Kurss L8–21 exercise/translate card DE fields | Structural compare | No systematic DE substitution found in card objects |

**Note:** A few German typos appear inside corrupted HTML strings (e.g. `arbeitt`). These are **BS data quality issues** affecting displayed German, not intentional DE edits. Flagged as HIGH in repair spec; do not “fix” by editing LV.

### SOURCE ISSUE (LV/DE source)

None confirmed requiring LV edit for Kurss scope. German typos in BS copies should be repaired against LV German source strings during BS repair cycle.

---

## Automatic checks

| Script | Command | Kurss-relevant result |
|--------|---------|----------------------|
| `validate-kurss.js` | `--lang=bs` | **PASS** — 302 translate + 100 exercise cards in L8–21; L1–6 + L7 side-file present |
| `audit-language-parity.js` | `--lang=bs` | **PASS** for a1–c2 word lists (not Kurss-specific) |
| `verify-bs-de-compliance.js` | (default) | **PASS** for DE fields in word datasets |
| `audit-mojibake.js` | `--lang=bs` | **PASS** — 0 hits in scanned files |
| `audit-translations.js` | `--lang=bs` | **197 issues** — all in `data/bs/a1.js`–`b1.js` etc., **not Kurss files** |

### Gaps in existing scripts

- `validate-kurss.js` does **not** test runtime section-title matching in `ui.js`
- No script detects `class="<div` / `course-example` HTML corruption
- No script validates `lesson7ExerciseCardsBs` field schema
- No script compares BS training-card front text against LV semantic equivalents
- `audit-language-parity.js` does not include `courseLessons.js`

**JavaScript syntax:** `data/bs/courseLessons.js` and `data/bs/courseTrainingCards.js` load without syntax errors (Node vm).  
**UTF-8:** No mojibake detected.  
**Duplicate lesson IDs:** None.

---

## Findings summary

### CRITICAL: 4

1. BS L8–21 translate flashcards non-functional — `Prevedi` not in `COURSE_TRANSLATE_SECTION_TITLES` / `getCourseTranslateCards()` returns `[]`
2. BS L8–21 exercise flashcards non-functional — `Vježbajte` / `Übung / Vježba` not in `COURSE_EXERCISE_SECTION_TITLES`
3. `lesson7ExerciseCardsBs` — 16/16 cards empty (no `infinitive`, `lv`, conjugation fields)
4. Systemic HTML corruption in BS legacy content (`class="<div`, `</divs>`, `onav class`, etc.) across L1–7 and static panels — renderer receives invalid markup

### HIGH: 8

1. 131× `course-example` instead of `kurss-example` — design parity broken
2. Training cards L1–6: widespread wrong fronts + Slovenian/Lithuanian/LV leakage
3. `renderCourseLessonFromData` does not assign `data-course-translate-card` to `Prevedi` sections
4. Artikuli/Vietniekvārdi/Pronunciation static panels structurally broken (wrong class namespaces + fused markup)
5. L1–7 conjugation and vocabulary text pedagogically wrong (`kochi`, `kommjem`, etc.)
6. German substring typos in BS HTML (`arbeitt`, fused sentences in L7)
7. `COURSE_SECTION_I18N_KEYS` missing BS internal title keys — section labels won't localize in legacy accordions
8. L8 special-case in `getExerciseSourceCards` may bind first `cards` section only — fragile if section order changes

### MEDIUM: 6

1. `kurss.sections.translate` = `Ponovo prevodi` (wrong meaning)
2. Hardcoded English `"Pronunciation"` in 14 lesson section titles
3. `Predavanje` vs `Lekcija` terminology split (HTML vs UI)
4. Mixed `articles-*` vs `artikuli-*` classes
5. Several `menuDesc` strings corrupted (`-u vrhu`, `→ e`)
6. Pronunciation gloss errors (`Gut (dobiti)`, `Koliba` for `Hut`)

### LOW: 3

1. `exerciseMeta.formSie` uses `SIE` not `Sie`
2. Minor typos (`najloje`, `Chesto`)
3. Inconsistent `Je li` calques in German dialogue prompts

### SOURCE ISSUES: 0

(No LV etalon defects requiring LV edit identified in Kurss scope.)

### INFORMATIONAL: 2

1. `validate-kurss.js --lang=bs` passes despite runtime flashcard failure — script gap
2. `data/bs/courseLessons.js` www mirror is in sync

---

## CONFIRMED REPAIRS

*Specification for next repair cycle only — **not applied in this audit**.*

### R1 — Renderer: register BS section titles (CRITICAL)

| Field | Value |
|-------|-------|
| file | `ui.js` |
| location | `COURSE_TRANSLATE_SECTION_TITLES`, `COURSE_EXERCISE_SECTION_TITLES`, `COURSE_SECTION_I18N_KEYS` |
| current | Sets contain only LV/LT titles |
| recommended | Add `Prevedi`, `Vježbajte`, `Übung / Vježba` (and any other BS internal titles used in data) |
| reason | Restore flashcard resolution for BS L8–21 without a separate BS renderer |

### R2 — Lesson 7 exercise cards (CRITICAL)

| Field | Value |
|-------|-------|
| file | `data/bs/courseTrainingCards.js` + `www` mirror |
| lesson | 7 / exercise section |
| current | 16× `{ "back": "" }` |
| recommended | Full cards matching LV `lesson7ExerciseCards` schema: `infinitive`, `lv`, `du`, `ihr`, `sie` with BS `lv` text |
| reason | Imperative practice deck is empty |

### R3 — Legacy HTML markup restoration L1–7 + static panels (CRITICAL)

| Field | Value |
|-------|-------|
| file | `data/bs/courseLessons.js` (`COURSE_LESSON_HTML`, `legacyHtml` L1–7) |
| current | `class="<div`, `course-example`, `</divs>`, `onav class`, etc. |
| recommended | Restore LV-parity markup with `kurss-example`, `artikuli-*`, valid HTML — translate **text nodes only** |
| reason | Invalid markup breaks layout and shows raw HTML fragments to users |

### R4 — Training cards L1–6 full re-translation (HIGH)

| Field | Value |
|-------|-------|
| file | `data/bs/courseTrainingCards.js` |
| current | Mixed BS/Slovenian/Lithuanian/nonsense fronts |
| recommended | Re-translate all fronts from LV `lessonNTrainingCards` etalon; preserve `back` DE unchanged |
| reason | Pedagogically incorrect flashcard prompts |

### R5 — CSS class normalization (HIGH)

| Field | Value |
|-------|-------|
| file | `data/bs/courseLessons.js` |
| current | 131× `course-example`, `course-lesson-section`, `articles-*` |
| recommended | `kurss-example`, `kurss-lesson-section`, `artikuli-*` per LV etalon |
| reason | Design parity via shared `style.css` |

### R6 — UI localization fixes (MEDIUM)

| Field | Value |
|-------|-------|
| file | `languages/bs/ui.js` |
| key | `kurss.sections.translate` |
| current | `Ponovo prevodi` |
| recommended | `Prevedi` |
| reason | Match section title and LV semantics |

### R7 — Section title localization (MEDIUM)

| Field | Value |
|-------|-------|
| file | `data/bs/courseLessons.js` |
| lesson | 8–21 sections |
| current | `"title": "Pronunciation"` |
| recommended | Use internal key `Izruna` or Bosnian `Izgovor` consistent with `kurss.pronunciation` |
| reason | Remove hardcoded English from BS data |

### R8 — L1 conjugation text (HIGH)

| Field | Value |
|-------|-------|
| file | `data/bs/courseLessons.js` |
| lesson | 1 / section 1 |
| current | `Kommen - kochi`, `Ja kommjem`, `On/ona kommje` |
| recommended | `Kommen — doći`, `Ja dolazim`, `On/ona dolazi` (and audit all verb cards) |
| reason | Core grammar introduction is incorrect |

### R9 — L6 intro typo (HIGH)

| Field | Value |
|-------|-------|
| file | `data/bs/courseLessons.js` |
| lesson | 6 intro |
| current | `Brown, množina...` |
| recommended | `Brojevi, množina...` |
| reason | `Brown` is not Bosnian for “numbers” |

### R10 — German substring typos in BS HTML (HIGH)

| Field | Value |
|-------|-------|
| file | `data/bs/courseLessons.js` |
| lesson | 2 (and others) |
| current | `er arbeitt` |
| recommended | `er arbeitet` (match LV DE source) |
| reason | DE READ-ONLY — restore from LV etalon German, not re-translate |

---

*End of audit report.*
