# CS–DE Kurss UI — OWNER review decisions (canonical)

**Source audit:** `reports/cs-kurs-ui-full-linguistic-audit.md`  
**Machine map:** `reports/temp/cs-kurs-ui-owner-apply-map.json`  
**Status:** OWNER review **COMPLETE** — 55/55 findings reviewed  
**Production apply:** **NOT YET** — use this file as sole authority for apply phase

---

## Verdict summary

| Category | LABOT | NELABOT | FALSE_POSITIVE |
|----------|-------|---------|----------------|
| Linguistic (52 numbered) | 51 | 1 | 0 |
| Functional/renderer (R1–R3) | 3 | 0 | 0 |
| **Total** | **54** | **1** | **0** |

**NELABOT:** `kurss.back` — `‹ Kurz` (already correct; do not change to Kurs)

---

## Global OWNER principles (apply phase)

1. **Kurs → Kurz** in product labels (`panelLabel`, `title`, `menu.course`, `progress.courseHeading`). **Not** `kurss.back`.
2. **Přednáška / Přednášky → Lekce** for course unit UI.
3. **Field-precise COPY-ONLY** — no global `Přednáška` string replace across repo.
4. Use **OWNER NEW** below — **not** Luna PROPOSED where they differ.
5. **No DE changes.** **No LV MASTER changes.**
6. Renderer fix: extend **universal** registries in `ui.js` / `www/ui.js` — **no** `if (lang === 'cs')`.

---

## OWNER overrides vs Luna PROPOSED

| Key | Luna PROPOSED | OWNER NEW |
|-----|---------------|-----------|
| `kurss.back` | ‹ Kurs | **NELABOT** — keep ‹ Kurz |
| `kurss.lessonProgress` | Lekce {lesson} · Překlad: {current} / {total} | **Lekce {lesson} · Přeloženo: {current} / {total}** |
| `kurss.exerciseMeta.formIhr` | Forma 2/3: Vy (množné číslo) | **Forma 2/3: vy (množné číslo)** |
| `kurss.lessonItems.7.menuDesc` | Imperativ, oslovení a množné číslo. | **Imperativ, způsob oslovení a množné číslo.** |
| Kurs labels | (Finding 2 suggested Kurz→Kurs) | **Kurs → Kurz** everywhere except `kurss.back` |

---

## Functional/renderer OWNER (R1–R3)

| ID | Issue | OWNER | Action |
|----|-------|-------|--------|
| R1 | `Přeložit` not in translate registry | LABOT | Add `Přeložit` to `COURSE_TRANSLATE_SECTION_TITLES` |
| R2 | `Cvičení` not in exercise registry | LABOT | Add `Cvičení` to `COURSE_EXERCISE_SECTION_TITLES` |
| R3 | `Übung / Cvičení` not in exercise registry | LABOT* | Add `Übung / Cvičení` **if still present in production section titles** |

**R3 precondition:** Current `data/cs/courseLessons.js` still uses `Übung / Cvičení` (lessons 8–9) and `kurss.sections.exerciseCombined` in ui.js is still `Übung / Cvičení`. Until a separate content OWNER pass removes `Übung` from section titles, registry **must** include `Übung / Cvičení` for functional parity. Do not permanently standardize `Übung` in UI without OWNER content decision.

---

## Linguistic COPY apply map (51 LABOT)

All changes in `languages/cs/ui.js` + mirror `www/languages/cs/ui.js`.

| # | Key | CURRENT | OWNER NEW |
|---|-----|---------|-----------|
| 1 | `kurss.panelLabel` | Kurs | Kurz |
| 1 | `kurss.title` | Kurs | Kurz |
| 1 | `menu.course` | Kurs | Kurz |
| 1 | `progress.courseHeading` | Kurs | Kurz |
| 2 | `kurss.back` | ‹ Kurz | **NELABOT** |
| 3 | `kurss.tipTitle` | Poradenství | Tip |
| 4 | `kurss.articles` | Články | Členy |
| 5 | `kurss.pronounsDesc` | Formy nominativ, akkusativ a dativ. | Tvary v nominativu, akuzativu a dativu. |
| 6 | `kurss.lessons` | Přednášky | Lekce |
| 7 | `kurss.lessonsDesc` | Výuka přednášek v sekvenčním pořadí od 1 do 21. | Lekce v pořadí od 1 do 21. |
| 8 | `kurss.verbBasicsDesc` | Osoby, tvary a obecná slovesa. | Osoby, tvary a běžná slovesa. |
| 9 | `kurss.pronounsSubtitle` | Nominativ, Akkusativ a Dativ - tvary zájmen. | Tvary zájmen v nominativu, akuzativu a dativu. |
| 10 | `kurss.vowelsSubtitle` | Samohlásky - dlouhé a krátké | Dlouhé a krátké samohlásky |
| 11 | `kurss.lessonsSubtitle` | Výuka přednášek v sekvenčním pořadí od 1 do 21. | Lekce v pořadí od 1 do 21. |
| 12 | `kurss.vowelsTitle` | Samohlásky - dlouhé a krátké | Dlouhé a krátké samohlásky |
| 13 | `kurss.consonantsDesc` | Nejdůležitější zvuky souhlásek pro začátečníky. | Nejdůležitější souhláskové zvuky pro začátečníky. |
| 14 | `kurss.lessonProgress` | Přednáška {lesson} · Přeložil: {current} / {total} | Lekce {lesson} · Přeloženo: {current} / {total} |
| 15 | `kurss.exerciseProgress` | Přednáška {lesson} · Cvičení | Lekce {lesson} · Cvičení |
| 16 | `kurss.cta.tapContinue` | Klepněte na pokračovat | Klepněte na tlačítko Pokračovat |
| 17 | `kurss.exerciseMeta.fillCase` | Übung I - Použijte správnou konjugaci | Cvičení I – použijte správný pád |
| 18 | `kurss.exerciseMeta.chooseCasePlural` | Dejte správnou konjugaci a udělejte z ní množné číslo! | Doplňte správný pád a vytvořte množné číslo! |
| 19 | `kurss.exerciseMeta.translate` | Übung II - přeložit | Cvičení II – překlad |
| 20 | `kurss.exerciseMeta.formDu` | Formulář 1/3: Vy (jednotné číslo) | Forma 1/3: Ty (jednotné číslo) |
| 21 | `kurss.exerciseMeta.formIhr` | Formulář 2/3: Vy (množné číslo) | Forma 2/3: vy (množné číslo) |
| 22 | `kurss.exerciseMeta.formSie` | Forma 3/3: Sie (slušná forma) | Forma 3/3: Sie (zdvořilá forma) |
| 23 | `kurss.lessonItems.1.title` | Přednáška 1 | Lekce 1 |
| 24 | `kurss.lessonItems.1.menuDesc` | Slovesa v přítomném čase, slova, gramatika a procvičování. | Slovesa v přítomném čase, slovíčka, gramatika a procvičování. |
| 25 | `kurss.lessonItems.2.title` | Přednáška 2 | Lekce 2 |
| 26 | `kurss.lessonItems.2.menuDesc` | Dialogy, slova, výslovnost, gramatika a překlad. | Dialogy, slovíčka, výslovnost, gramatika a překlad. |
| 27 | `kurss.lessonItems.3.title` | Přednáška 3 | Lekce 3 |
| 28 | `kurss.lessonItems.3.menuDesc` | Dialogy, slova, výslovnost, gramatika a překlad. | Dialogy, slovíčka, výslovnost, gramatika a překlad. |
| 29 | `kurss.lessonItems.4.title` | Přednáška 4 | Lekce 4 |
| 30 | `kurss.lessonItems.5.title` | Přednáška 5 | Lekce 5 |
| 31 | `kurss.lessonItems.5.menuDesc` | Wen?, akuzativ, sitzen, fragen a -in koncovka. | Wen?, akuzativ, sitzen, fragen a koncovka -in. |
| 32 | `kurss.lessonItems.6.title` | Přednáška 6 | Lekce 6 |
| 33 | `kurss.lessonItems.7.title` | Přednáška 7 | Lekce 7 |
| 34 | `kurss.lessonItems.7.menuDesc` | Imperativ, forma adresy a množné číslo. | Imperativ, způsob oslovení a množné číslo. |
| 35 | `kurss.lessonItems.8.title` | Přednáška 8 | Lekce 8 |
| 36 | `kurss.lessonItems.8.menuDesc` | Zvratná slovesa, e → i/ie záměna a akuzativ. | Zvratná slovesa, střídání e → i/ie a akuzativ. |
| 37 | `kurss.lessonItems.9.title` | Přednáška 9 | Lekce 9 |
| 38 | `kurss.lessonItems.10.title` | Přednáška 10 | Lekce 10 |
| 39 | `kurss.lessonItems.11.title` | Přednáška 11 | Lekce 11 |
| 40 | `kurss.lessonItems.11.menuDesc` | Haben, kein/keine/keinen, přivlastňovací a složená podstatná jména. | Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména. |
| 41 | `kurss.lessonItems.12.title` | Přednáška 12 | Lekce 12 |
| 42 | `kurss.lessonItems.12.menuDesc` | Srovnatelné stupně, als/wie, věk a barvy. | Stupňování, als/wie, věk a barvy. |
| 43 | `kurss.lessonItems.13.title` | Přednáška 13 | Lekce 13 |
| 44 | `kurss.lessonItems.14.title` | Přednáška 14 | Lekce 14 |
| 45 | `kurss.lessonItems.15.title` | Přednáška 15 | Lekce 15 |
| 46 | `kurss.lessonItems.16.title` | Přednáška 16 | Lekce 16 |
| 47 | `kurss.lessonItems.17.title` | Přednáška 17 | Lekce 17 |
| 48 | `kurss.lessonItems.18.title` | Přednáška 18 | Lekce 18 |
| 49 | `kurss.lessonItems.18.menuDesc` | Wohin / wo, Akkusativ nebo Dativ s / in / auf. | Wohin / wo, Akkusativ nebo Dativ s an / in / auf. |
| 50 | `kurss.lessonItems.19.title` | Přednáška 19 | Lekce 19 |
| 51 | `kurss.lessonItems.20.title` | Přednáška 20 | Lekce 20 |
| 52 | `kurss.lessonItems.21.title` | Přednáška 21 | Lekce 21 |

**Not in linguistic LABOT list (unchanged this pass):** `kurss.sections.exerciseCombined` (`Übung / Cvičení`), other `kurss.*` keys not listed above.

---

## Cursor apply task specification (next phase)

### Scope IN

1. Apply **51 LABOT** entries from JSON map to `languages/cs/ui.js`.
2. Mirror identical changes to `www/languages/cs/ui.js`.
3. Renderer: add to `ui.js` and `www/ui.js`:
   - `COURSE_TRANSLATE_SECTION_TITLES`: `Přeložit`
   - `COURSE_EXERCISE_SECTION_TITLES`: `Cvičení`, and `Übung / Cvičení` per R3 precondition
4. Post-apply verification:
   - All 55 findings accounted (51 applied + 1 NELABOT + 3 renderer)
   - `languages/cs/ui.js` ↔ `www/languages/cs/ui.js` sync
   - Functional smoke: `isCourseTranslateSection('Přeložit')`, `isCourseExerciseSection('Cvičení')` return true
   - No changes to `data/cs/courseLessons.js`, DE, or LV

### Scope OUT

- Content OWNER workflow (629/623)
- Global replace scripts
- Changing `kurss.sections.exerciseCombined` without separate OWNER decision
- DE / LV files

### Gates (apply completion)

| Gate | Expected |
|------|----------|
| OWNER map coverage | 55/55 |
| UI COPY fields applied | 51/51 LABOT |
| NELABOT preserved | `kurss.back` unchanged |
| Renderer registry | R1–R3 |
| DE changes | 0 |
| LV changes | 0 |
| primary ↔ www sync | PASS |

---

## Audit counting note

Report lists **52** numbered linguistic findings (includes deterministic `kurss.label-terminology` as Finding #1). Luna JSON `findingsCount: 51` excludes that deterministic entry. OWNER totals use **52 linguistic + 3 functional = 55**.
