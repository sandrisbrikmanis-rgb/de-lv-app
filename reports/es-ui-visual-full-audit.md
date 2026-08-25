# ES–DE UI — pilns vizuālais audits (READ-ONLY)

**Datums:** 2026-08-25
**Režīms:** READ-ONLY vizuālais audits (bez production izmaiņām)
**Repozitorijs:** sandrisbrikmanis-rgb/de-lv-app
**Baseline SHA:** `8249b46f4d0cc751301f87d51ffe623c98a7c992`
**Runtime:** https://sandrisbrikmanis-rgb.github.io/de-lv-app/
**Audita rīks:** `scripts/audit-es-ui-visual-full.js` (Playwright, desktop 1280×900 + mobile iPhone 13)

---

## Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Pārbaudītie skati (unikāli) | **59** |
| A1–C2 līmeņi + režīmi (Easy/Normal/Intense) | **7 grupas × 3 režīmi** |
| Curso apakšsadaļas | izruna, artikuli, vietniekvārdi, 21 lekcija |
| Frases (Sätze) | detail + 3 režīmi |
| Verbos | detail skats |
| Modāļi | info (¿Cómo funciona?) |
| Viewporti | desktop + mobile |
| Unikālie atradumi (statiskie + atslēgas) | **51** |
| LABOT | **39** |
| NELABOT | **12** |
| Production izmaiņas | **0** |

### Gala rezultāts

## **ES UI VIZUALAIS AUDITS: ATRASTI DEFEKTI**

Lielākā daļa galvenās navigācijas ES režīmā ir spāniski, bet **kursa sekciju renderer reģistri neatpazīst spāņu nosaukumus** (L8–21 tulkojumu/vingrinājumu kartītes var nesalūzt pareizi), **study kartēs trūkst «Idea principal» prefiksa**, **vairākās UI virknēs ir kļūdas vai majuskulas**, un **kursa datos (L8–L17) ir latviešu/prasmju valodu atlikumi**.

---

## 1. Pārklājums

| Apgabals | Desktop | Mobile | Rezultāts |
|----------|---------|--------|-----------|
| Sākuma izvēlne | ✓ | ✓ | PASS ar piezīmēm |
| A1–C2 kartīšu skati | ✓ | ✓ | PASS ar piezīmēm |
| Frases | ✓ | ✓ | PASS |
| Verbos | ✓ | ✓ | PASS |
| Curso izvēlne | ✓ | ✓ | PASS ar piezīmēm |
| Curso apakšsadaļas | ✓ | ✓ | PASS |
| Curso lekcijas 1–21 | ✓ | ✓ | DEFEKTS — jaukti nosaukumi, LV atlikumi |
| Info modālis | ✓ | ✓ | PASS |
| aria/title | ✓ | ✓ | DEFEKTS — trūkstošas atslēgas |

<details><summary>Pilns skatu saraksts (59)</summary>

- curso-articles
- curso-lesson-1
- curso-lesson-10
- curso-lesson-11
- curso-lesson-12
- curso-lesson-13
- curso-lesson-14
- curso-lesson-15
- curso-lesson-16
- curso-lesson-17
- curso-lesson-18
- curso-lesson-19
- curso-lesson-2
- curso-lesson-20
- curso-lesson-21
- curso-lesson-3
- curso-lesson-4
- curso-lesson-5
- curso-lesson-6
- curso-lesson-7
- curso-lesson-8
- curso-lesson-9
- curso-lessons-list
- curso-lessons-menu
- curso-menu
- curso-pronouns
- curso-pronunciation
- group-A1-detail
- group-A1-info-modal
- group-A1-mode-0
- group-A1-mode-1
- group-A1-mode-2
- group-A2-detail
- group-A2-mode-0
- group-A2-mode-1
- group-A2-mode-2
- group-B1-detail
- group-B1-mode-0
- group-B1-mode-1
- group-B1-mode-2
- group-B2-detail
- group-B2-mode-0
- group-B2-mode-1
- group-B2-mode-2
- group-C1-detail
- group-C1-mode-0
- group-C1-mode-1
- group-C1-mode-2
- group-C2-detail
- group-C2-mode-0
- group-C2-mode-1
- group-C2-mode-2
- group-Sätze-detail
- group-Sätze-mode-0
- group-Sätze-mode-1
- group-Sätze-mode-2
- home-menu
- splash-or-home
- verbs-detail

</details>

---

## 2. Atradumi

| ID | UI vieta | CURRENT | Ieteiktais spāņu teksts | Statuss |
|----|----------|---------|-------------------------|---------|
| COURSE-LV-01 | Curso › L14 › Izruná › pronunciation note | Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai. | Del mismo modo, en español la g ante s en «signos» suena más cercana a una k. | LABOT |
| COURSE-LV-02 | Curso › L15 › Izruná › pronunciation note | Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif. | Recuerda: el diptongo ei en alemán se pronuncia como ai: reif, unreif. | LABOT |
| COURSE-LV-03 | Curso › L8–L17 › Izruná sekcijas | z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer). | La z suena como la c española: Franz (frans), das Zimmer (tsimer). | LABOT |
| DATA-27 | data/es/courseLessons.js › section title | Diálogo / teikumi | Diálogo / frases | LABOT |
| DATA-28 | data/es/courseLessons.js › section title | Izruná | Pronunciación | LABOT |
| DATA-29 | data/es/courseLessons.js › section title | Ejercicio / Ejercicio | Ejercicio | LABOT |
| HTML-30 | www/index.html (hardcoded fallback) | Palaišana | Carga (splash.ariaLabel via i18n) | NELABOT |
| HTML-31 | www/index.html (hardcoded fallback) | Valodas izvēle | Selección de idioma (languageSelect via i18n) | NELABOT |
| HTML-32 | www/index.html (hardcoded fallback) | Sprache wählen | Elegir idioma | NELABOT |
| HTML-33 | www/index.html (hardcoded fallback) | Deutsch lernen | Aprender alemán | NELABOT |
| HTML-34 | www/index.html (hardcoded fallback) | Vācu Valoda • LV-DE | Alemán • ES-DE (app.title via i18n) | NELABOT |
| HTML-35 | www/index.html (hardcoded fallback) | Atgriezties galvenajā izvēlnē | Volver al menú principal | NELABOT |
| HTML-36 | www/index.html (hardcoded fallback) | Kā tas strādā? | ¿Cómo funciona? | NELABOT |
| HTML-37 | www/index.html (hardcoded fallback) | Problemātiskie vārdi | Palabras problemáticas | NELABOT |
| HTML-38 | www/index.html (hardcoded fallback) | Nevajadzīgie vārdi | Palabras innecesarias | NELABOT |
| HTML-39 | www/index.html (hardcoded fallback) | Pareizrakstība | Ortografía | NELABOT |
| HTML-40 | www/index.html (hardcoded fallback) | Automātiska izruna ieslēgta | Pronunciación automática activada | NELABOT |
| KEY-01 | languages/es/ui.js › splash.ariaLabel | (trūkst atslēgas — fallback «Loading») | Cargando | LABOT |
| KEY-02 | languages/es/ui.js › languageSelect.ariaLabel | (trūkst atslēgas — rāda «languageSelect.ariaLabel») | Selección de idioma | LABOT |
| KEY-03 | languages/es/ui.js › menu.learningModes | (trūkst atslēgas — rāda «menu.learningModes») | Modos de aprendizaje | LABOT |
| KEY-04 | languages/es/ui.js › kurss.sections.words | (trūkst atslēgas) | Palabras | LABOT |
| KEY-05 | languages/es/ui.js › kurss.sections.names | (trūkst atslēgas) | Nombres | LABOT |
| KEY-06 | languages/es/ui.js › kurss.sections.reading | (trūkst atslēgas) | Texto / lectura | LABOT |
| KEY-07 | languages/es/ui.js › kurss.sections.dialogues | (trūkst atslēgas) | Diálogos / frases | LABOT |
| REG-17 | www/ui.js › STUDY_MAIN_IDEA_PREFIXES | Nav «Idea principal» | Pievienot «Idea principal» prefiksu study kartēm | LABOT |
| REG-18 | www/ui.js › COURSE_* registry (missing «Traducir») | Sekcija «Traducir» nav reģistrā | Pievienot «Traducir» COURSE_SECTION_I18N_KEYS + COURSE_TRANSLATE_SECTION_TITLES | LABOT |
| REG-19 | www/ui.js › COURSE_* registry (missing «Ejercicio») | Sekcija «Ejercicio» nav reģistrā | Pievienot «Ejercicio» COURSE_SECTION_I18N_KEYS + COURSE_EXERCISE_SECTION_TITLES | LABOT |
| REG-20 | www/ui.js › COURSE_* registry (missing «Ejercicio / Ejercicio») | Sekcija «Ejercicio / Ejercicio» nav reģistrā | Pievienot «Ejercicio / Ejercicio» COURSE_SECTION_I18N_KEYS + COURSE_EXERCISE_SECTION_TITLES | LABOT |
| REG-21 | www/ui.js › COURSE_* registry (missing «Palabras») | Sekcija «Palabras» nav reģistrā | Pievienot «Palabras» COURSE_SECTION_I18N_KEYS | LABOT |
| REG-22 | www/ui.js › COURSE_* registry (missing «Gramática») | Sekcija «Gramática» nav reģistrā | Pievienot «Gramática» COURSE_SECTION_I18N_KEYS | LABOT |
| REG-23 | www/ui.js › COURSE_* registry (missing «Diálogo / teikumi») | Sekcija «Diálogo / teikumi» nav reģistrā | Pievienot «Diálogo / teikumi» COURSE_SECTION_I18N_KEYS | LABOT |
| REG-24 | www/ui.js › COURSE_* registry (missing «Izruná») | Sekcija «Izruná» nav reģistrā | Pievienot «Izruná» COURSE_SECTION_I18N_KEYS | LABOT |
| REG-25 | www/ui.js › COURSE_* registry (missing «Texto / Lectura») | Sekcija «Texto / Lectura» nav reģistrā | Pievienot «Texto / Lectura» COURSE_SECTION_I18N_KEYS | LABOT |
| REG-26 | www/ui.js › COURSE_* registry (missing «Nombres») | Sekcija «Nombres» nav reģistrā | Pievienot «Nombres» COURSE_SECTION_I18N_KEYS | LABOT |
| STYLE-01 | languages/es/ui.js › hints/card vs kurss.hints | «Haga clic» (kartītes) vs «Toca» / «Toque» (kurss) | Vienot stilu: «Toca» (tū) visur | NELABOT |
| UI-1 | languages/es/ui.js › study.table.german | Delaware | DE | LABOT |
| UI-10 | languages/es/ui.js › buttons.weeklyReview | revisión semanal | Revisión semanal | LABOT |
| UI-11 | languages/es/ui.js › verb.present | el presente | Presente | LABOT |
| UI-12 | languages/es/ui.js › verb.writeInfinitive | escribe el infinitivo | Escribe el infinitivo | LABOT |
| UI-13 | languages/es/ui.js › spelling.writeAnswer | escribe la respuesta | Escribe la respuesta | LABOT |
| UI-14 | languages/es/ui.js › buttons.listen | para escuchar | Escuchar | LABOT |
| UI-15 | languages/es/ui.js › buttons.shuffleVerbs | mezclar los verbos | Mezclar los verbos | LABOT |
| UI-16 | languages/es/ui.js › nav.quickTools | herramientas rápidas | Herramientas rápidas | LABOT |
| UI-2 | languages/es/ui.js › study.minimal.pluralLabel | MUCHOS | Pl. | LABOT |
| UI-3 | languages/es/ui.js › buttons.next | la siguiente palabra | Siguiente palabra | LABOT |
| UI-4 | languages/es/ui.js › kurss.exerciseMeta.fillCase | Übung I - Usa la conjugación correcta | Ejercicio I — Usa la conjugación correcta | LABOT |
| UI-5 | languages/es/ui.js › kurss.exerciseMeta.translate | Übung II - traducir | Ejercicio II — Traducir | LABOT |
| UI-6 | languages/es/ui.js › kurss.sections.grammar | gramática | Gramática | LABOT |
| UI-7 | languages/es/ui.js › kurss.pronunciation | pronunciación | Pronunciación | LABOT |
| UI-8 | languages/es/ui.js › kurss.lessons | lecciones | Lecciones | LABOT |
| UI-9 | languages/es/ui.js › kurss.closeCourse | cerrar el curso | Cerrar el curso | LABOT |

### Runtime apstiprinātie defekti (izvēlētie)

| Teksts | Vieta | Ieteikums | Statuss |
|--------|-------|-----------|---------|
| Diálogo / teikumi | Curso L8–L12 sekciju virsraksti | Diálogo / frases | LABOT |
| Izruná | Curso L8–L21 sekciju virsraksti | Pronunciación | LABOT |
| Ejercicio / Ejercicio | Curso L8–L12 | Ejercicio | LABOT |
| la siguiente palabra | A1–C2, Frases, Verbos — poga #nextBtn | Siguiente palabra | LABOT |
| Delaware | Study kartes — tabulas galvene DE | DE | LABOT |
| MUCHOS | Study minimalStudy — plurāla etiķete | Pl. | LABOT |
| Übung I / Übung II | Kursa vingrinājumu meta | Ejercicio I / Ejercicio II | LABOT |
| menu.learningModes | #modeButtons aria-label | Modos de aprendizaje | LABOT |
| languageSelect.ariaLabel | #appLanguageScreen aria-label | Selección de idioma | LABOT |

---

## 3. Kritiskie renderer defekti

### REG-STUDY — «Idea principal» prefikss

- **UI vieta:** Study kartes A1–C2 ar `Idea principal:` skaidrojumos
- **CURRENT:** `STUDY_MAIN_IDEA_PREFIXES` nesatur `Idea principal`
- **Ieteikums:** Pievienot `Idea principal` masīvam `www/ui.js`
- **Statuss:** LABOT

### REG-COURSE — Spāņu kursa sekcijas

- **UI vieta:** Curso L8–21 — `Traducir`, `Ejercicio`, `Palabras`, `Gramática`, u.c.
- **CURRENT:** `COURSE_SECTION_I18N_KEYS`, `COURSE_TRANSLATE_SECTION_TITLES`, `COURSE_EXERCISE_SECTION_TITLES` nesatur spāņu variantus
- **Ieteikums:** Paplašināt reģistrus ar: `Traducir`, `Ejercicio`, `Ejercicio / Ejercicio`, `Palabras`, `Gramática`, `Diálogo / frases`, `Pronunciación`, `Texto / Lectura`, `Nombres`
- **Statuss:** LABOT

---

## 4. NELABOT pozīcijas

| ID | Pamatojums |
|----|------------|
| HTML-* | `www/index.html` satur LV/DE fallback; lielākā daļa tiek pārrakstīta ar `applyLocalizedStaticUi()` pēc ES izvēles. |
| STYLE-01 | «Haga clic» vs «Toca» — stilistiska variācija, abi ir pareizi spāniski. |

---

## 5. Metodoloģija

1. Vides pārbaude: repo `sandrisbrikmanis-rgb/de-lv-app`, origin pareizs, vide nav tmp/agent_temp.
2. Runtime audits: Playwright pret production un lokālo kodu bāzi.
3. Statiskā analīze: `languages/es/ui.js` vs `languages/en/ui.js` atslēgu paritāte, `www/ui.js` renderer reģistri, `data/es/courseLessons.js`.
4. Vācu mācību vārdi, piemēri un teikumi **nav** uzskatīti par kļūdām.
5. Production faili **nav** mainīti.

---

*Ģenerēts: 2026-08-25T06:11:42.372Z · Atradumu kopskaits: 51 (LABOT: 39, NELABOT: 12)*