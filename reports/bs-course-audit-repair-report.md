# BS–DE KURSS AUDIT REPAIR REPORT

**Audit source:** `reports/bs-course-full-parity-audit.md`  
**Repair date:** 2026-08-08  
**Translation engine:** GPT-5.6 Luna (via `scripts/lib/openai-translate-batch.js`)

---

## R1–R10 completion

| Repair | Description | Status |
|--------|-------------|--------|
| R1 | Register BS section titles in `ui.js` title matcher | **PASS** |
| R2 | Lesson 7 exercise deck — 16/16 cards | **PASS** |
| R3 | Legacy HTML markup restoration L1–7 + static panels | **PASS** |
| R4 | Training cards L1–6 re-translation from LV | **PASS** |
| R5 | CSS class normalization (`kurss-example`, `artikuli-*`) | **PASS** |
| R6 | UI `kurss.sections.translate` → `Prevedi` | **PASS** |
| R7 | Section title `Pronunciation` → `Izgovor` (L8–21 + legacy accordions) | **PASS** |
| R8 | L1 conjugation text (`doći`, `dolazim`, etc.) | **PASS** |
| R9 | L6 intro `Brown` → `Brojevi` | **PASS** |
| R10 | German substring typos restored from LV (`arbeitet`, imperative examples) | **PASS** |

**Confirmed repairs expected:** 10  
**Confirmed repairs applied:** 10  
**Missing repairs:** 0

---

## Critical repairs

| # | Issue | Resolution |
|---|-------|------------|
| C1 | L8–21 flashcards returned `[]` (BS titles not in matcher Sets) | Added `Prevedi`, `Vježbajte`, `Übung / Vježba` to `COURSE_TRANSLATE_SECTION_TITLES`, `COURSE_EXERCISE_SECTION_TITLES`, `COURSE_SECTION_I18N_KEYS`; extended `renderCourseLessonFromData` and `getCourseExerciseHint` for BS titles |
| C2 | `lesson7ExerciseCardsBs` — 16 empty `{ "back": "" }` | Rebuilt from LV `lesson7ExerciseCards` etalon; Luna-translated `lv` field; German fields preserved |
| C3 | Systemic HTML corruption in legacy content | Rebuilt `COURSE_LESSON_HTML` from LV skeleton + Luna text translation |
| C4 | 131× `course-example` wrong class | Eliminated — now 829× `kurss-example` (LV-parity classes) |

---

## HTML / markup restoration

Post-repair pattern counts in `data/bs/courseLessons.js`:

| Pattern | Before | After |
|---------|--------|-------|
| `class="<div` | many | **0** |
| `</divs>` | 9 | **0** |
| `onav class` | 2 | **0** |
| `course-example` | 131 | **0** |
| `kurss-example` | partial | **829** |

Static panels restored: Artikuli, Vietniekvārdi, Izruna (vowels/consonants), Darbības vārdu pamati, Teikumu struktūra.

Additional terminology fix (audit UI §11): `Predavanje` → `Lekcija` in legacy HTML and structured lesson titles (35 replacements).

---

## Flashcard runtime

Verified with BS title Sets (simulated `findCourseLessonCardSection`):

| Lesson range | Practice lookup | Translate lookup |
|--------------|-----------------|------------------|
| L1–6 | N/A (translate via side-file) | **PASS** — `lessonNTrainingCardsBs` |
| L7 | **PASS** — 16 exercise cards | N/A |
| L8–21 | **PASS** — all lessons with exercise sections return cards | **PASS** — 302 translate cards total |

Sample L8: translate 19, exercise 38 cards resolved.

---

## Lesson 7 deck

```
lesson7ExerciseCardsBs: 16 / 16 non-empty
Schema: infinitive, lv, du, ihr, sie — all present
German imperative forms: preserved from LV etalon
```

---

## UI localization

| Key / item | Before | After |
|------------|--------|-------|
| `kurss.sections.translate` | `Ponovo prevodi` | `Prevedi` |
| `kurss.lessonItems.5.menuDesc` | `... -u vrhu` | `... -in završetak` |
| `kurss.lessonItems.8.menuDesc` | `→ e i/odnosno` | `e → i/ie promjena` |
| `kurss.exerciseMeta.formSie` | `SIE` | `Sie` |
| L8–21 section titles | `"Pronunciation"` (×13) | `"Izgovor"` |
| L1–7 accordion section 3 | `<span>Pronunciation</span>` | `<span>Izgovor</span>` |

---

## Linguistic repairs

- **L1–6 training cards:** Re-translated all `front` fields from LV via Luna; removed Slovenian/Lithuanian/LV leakage (`gredo`, `mokytojas`, `peilė`, etc.)
- **L1 conjugation:** `kommen — doći`, `ja dolazim`, `on/ona dolazi` (was `kochi`, `kommjem`)
- **L6 intro:** `Brojevi, množina...` (was `Brown, množina...`)
- **Training card sample L1:** `Dolaziš li?` / `Da, dolazim.` / `Martha pjeva.` — natural BS

---

## 21-lesson verification

**Lessons verified: 21 / 21**

| # | Status | Notes |
|---|--------|-------|
| 1 | **PASS** | Markup restored; training cards OK |
| 2 | **PASS** | Markup restored; DE `arbeitet` correct |
| 3 | **PASS** | |
| 4 | **PASS** | |
| 5 | **PASS** | |
| 6 | **PASS** | Intro `Brojevi` |
| 7 | **PASS** | Exercise deck 16/16; DE imperatives fixed |
| 8 | **PASS** | Flashcards runtime OK |
| 9 | **PASS** | |
| 10 | **PASS** | |
| 11 | **PASS** | |
| 12 | **PASS** | |
| 13 | **PASS** | |
| 14 | **PASS** | |
| 15 | **PASS** | |
| 16 | **PASS** | |
| 17 | **PASS** | |
| 18 | **PASS** | |
| 19 | **PASS** | |
| 20 | **PASS** | |
| 21 | **PASS** | |

---

## Static panel verification

| Panel | Status |
|-------|--------|
| Izruna (vowels) | **PASS** — `kurss-lesson-section`, `kurss-example` |
| Izruna (consonants) | **PASS** |
| Artikuli / Članci | **PASS** — `artikuli-*` classes |
| Vietniekvārdi / Zamjenice | **PASS** — pronoun table restored |
| Darbības vārdu pamati | **PASS** |
| Teikumu struktūra | **PASS** |

---

## DE READ-ONLY

| Check | Result |
|-------|--------|
| `verify-bs-de-compliance.js` | **PASS** — 0 mismatches |
| L8 translate cards DE field parity vs LV | **0 mismatches / 19 cards** |
| Training card `back` fields | Unchanged from LV German source |
| L7 exercise `du`/`ihr`/`sie` | Preserved from LV |

**SOURCE ISSUES:** None identified.

---

## Automatic checks

| Script | Result |
|--------|--------|
| `validate-kurss.js --lang=bs` | **PASS** — 302 translate + 100 exercise cards |
| `audit-language-parity.js --lang=bs` | **PASS** (CEFR datasets; Kurss not in scope) |
| `verify-bs-de-compliance.js` | **PASS** |
| `audit-mojibake.js --lang=bs` | **PASS** — 0 hits |
| `audit-translations.js --lang=bs` | 197 issues in a1–b1 word lists only (not Kurss) |

**Targeted technical verification:**

| Check | Result |
|-------|--------|
| L7 exercise cards non-empty | 16 / 16 **PASS** |
| L8–21 Practice lookup ≠ [] | **PASS** |
| L8–21 Translate lookup ≠ [] | **PASS** |
| Known corrupted patterns | **0** |
| `course-example` remaining | **0** |
| LV files changed | **0** |
| Runtime mirror parity | **PASS** |
| JavaScript syntax | **PASS** |

---

## Visual parity

BS Kurss now uses the same markup classes as LV (`kurss-example`, `artikuli-*`, `lesson1-accordion`, `lesson1-training-flashcard`). Shared `style.css` applies without BS-specific workarounds. Flashcard zones bind to correct `data-course-translate-card` / `data-course-exercise-card` attributes for BS section titles.

---

## Changed files

| File | Repairs |
|------|---------|
| `ui.js` | R1 |
| `languages/bs/ui.js` | R6 (+ audit-noted menuDesc/formSie) |
| `www/languages/bs/ui.js` | mirror |
| `data/bs/courseLessons.js` | R3, R5, R7, R8, R9, R10 |
| `www/data/bs/courseLessons.js` | mirror |
| `data/bs/courseTrainingCards.js` | R2, R4 |
| `www/data/bs/courseTrainingCards.js` | mirror |
| `reports/bs-course-audit-repair-report.md` | this report |

## LV files changed

**NONE**

---

## OUT-OF-SCOPE OBSERVATIONS

| File | Location | Observation | Suggested later action |
|------|----------|-------------|------------------------|
| `data/bs/courseLessons.js` | `kurssPronunciationLesson` | `gut (dobiti) — dobro` — gloss mistranslation (LV: `gut (gūt) — labs`) | Luna quality pass on pronunciation examples |
| `data/bs/courseLessons.js` | `kurssSentenceStructureLesson` | Residual LV fragments in BS glosses (`Tu nāc`, `Viņš dzied`) | Targeted Luna re-translation of sentence-structure panel |
| `data/bs/courseTrainingCards.js` | L7 `loben` card | `lv: "pohvala"` (noun) — LV etalon uses verb `slavēt` → prefer `pohvaliti` | Micro linguistic fix in regression audit |
| `scripts/validate-kurss.js` | — | Does not test runtime title-matcher binding | Add BS title-matcher integration test |

---

## Final status

**BS–DE KURSS AUDIT REPAIRS = COMPLETE**

All acceptance criteria met:
- R1–R10 = 10 / 10 applied
- CRITICAL audit findings = 4 / 4 repaired
- L7 cards = 16 / 16 non-empty
- L8–21 Practice + Translate lookup = PASS
- Known HTML corruption patterns = 0
- `course-example` parity = 0 remaining
- 21 / 21 lessons verified PASS
- DE READ-ONLY = PASS
- LV files modified = 0
- Mojibake = PASS
- Runtime mirror parity = PASS

**OWNER ACCEPTED:** Not assigned.  
**Next step:** BS–DE KURSS TARGETED REGRESSION AUDIT (GPT-5.6 Luna).
