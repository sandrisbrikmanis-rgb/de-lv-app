# ES–DE UI vizuālo audita labojumi

**Datums:** 2026-08-25  
**Zars:** `cursor/es-ui-visual-full-audit-3141`  
**PR:** #661  
**Avots:** `reports/es-ui-visual-full-audit.md` (39 × LABOT)  
**Baseline pirms labojumiem:** `e040aaaba4ecc3228b0a77cfff5b9a6d10789528`

---

## Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| LABOT ieraksti kartēšanā | 39 |
| APPLIED | **39** |
| SKIP | **0** |
| NELABOT (nemainīti) | 12 |
| DE lauku izmaiņas | **0** |
| Citu valodu failu izmaiņas | **0** |
| Exact-match pēc labojuma | **39/39** |
| Runtime skati (ES–DE) | **59/59** |
| Curso lekcijas | **21/21** |
| LV/EN ES atlikumi | **0** |

---

## APPLIED (39/39)

| ID | Fails | CURRENT → NEW | Statuss |
|----|-------|---------------|---------|
| UI-1 | `languages/es/ui.js` | `Delaware` → `DE` | APPLIED |
| UI-2 | `languages/es/ui.js` | `MUCHOS` → `Pl.` | APPLIED |
| UI-3 | `languages/es/ui.js` | `la siguiente palabra` → `Siguiente palabra` | APPLIED |
| UI-4 | `languages/es/ui.js` | `Übung I - Usa la conjugación correcta` → `Ejercicio I — Usa la conjugación correcta` | APPLIED |
| UI-5 | `languages/es/ui.js` | `Übung II - traducir` → `Ejercicio II — Traducir` | APPLIED |
| UI-6 | `languages/es/ui.js` | `gramática` → `Gramática` | APPLIED |
| UI-7 | `languages/es/ui.js` | `pronunciación` → `Pronunciación` | APPLIED |
| UI-8 | `languages/es/ui.js` | `lecciones` → `Lecciones` | APPLIED |
| UI-9 | `languages/es/ui.js` | `cerrar el curso` → `Cerrar el curso` | APPLIED |
| UI-10 | `languages/es/ui.js` | `revisión semanal` → `Revisión semanal` | APPLIED |
| UI-11 | `languages/es/ui.js` | `el presente` → `Presente` | APPLIED |
| UI-12 | `languages/es/ui.js` | `escribe el infinitivo` → `Escribe el infinitivo` | APPLIED |
| UI-13 | `languages/es/ui.js` | `escribe la respuesta` → `Escribe la respuesta` | APPLIED |
| UI-14 | `languages/es/ui.js` | `para escuchar` → `Escuchar` | APPLIED |
| UI-15 | `languages/es/ui.js` | `mezclar los verbos` → `Mezclar los verbos` | APPLIED |
| UI-16 | `languages/es/ui.js` | `herramientas rápidas` → `Herramientas rápidas` | APPLIED |
| KEY-01 | `languages/es/ui.js` | (trūkst) → `splash.ariaLabel: Cargando` | APPLIED |
| KEY-02 | `languages/es/ui.js` | (trūkst) → `languageSelect.ariaLabel: Selección de idioma` | APPLIED |
| KEY-03 | `languages/es/ui.js` | (trūkst) → `menu.learningModes: Modos de aprendizaje` | APPLIED |
| KEY-04 | `languages/es/ui.js` | (trūkst) → `kurss.sections.words: Palabras` | APPLIED |
| KEY-05 | `languages/es/ui.js` | (trūkst) → `kurss.sections.names: Nombres` | APPLIED |
| KEY-06 | `languages/es/ui.js` | (trūkst) → `kurss.sections.reading: Texto / lectura` | APPLIED |
| KEY-07 | `languages/es/ui.js` | (trūkst) → `kurss.sections.dialogues: Diálogos / frases` | APPLIED |
| REG-17 | `ui.js` + `www/ui.js` | STUDY_MAIN_IDEA_PREFIXES + `Idea principal` | APPLIED |
| REG-18 | `ui.js` + `www/ui.js` | COURSE registry + `Traducir` | APPLIED |
| REG-19 | `ui.js` + `www/ui.js` | COURSE registry + `Ejercicio` | APPLIED |
| REG-20 | `ui.js` + `www/ui.js` | COURSE registry + `Ejercicio / Ejercicio` | APPLIED |
| REG-21 | `ui.js` + `www/ui.js` | COURSE registry + `Palabras` | APPLIED |
| REG-22 | `ui.js` + `www/ui.js` | COURSE registry + `Gramática` | APPLIED |
| REG-23 | `ui.js` + `www/ui.js` | COURSE registry + `Diálogo / teikumi` + `Diálogo / frases` | APPLIED |
| REG-24 | `ui.js` + `www/ui.js` | COURSE registry + `Izruná` + `Pronunciación` | APPLIED |
| REG-25 | `ui.js` + `www/ui.js` | COURSE registry + `Texto / Lectura` | APPLIED |
| REG-26 | `ui.js` + `www/ui.js` | COURSE registry + `Nombres` | APPLIED |
| DATA-27 | `data/es/courseLessons.js` | `Diálogo / teikumi` → `Diálogo / frases` (×5) | APPLIED |
| DATA-28 | `data/es/courseLessons.js` | `Izruná` → `Pronunciación` (×13) | APPLIED |
| DATA-29 | `data/es/courseLessons.js` | `Ejercicio / Ejercicio` → `Ejercicio` (×2) | APPLIED |
| COURSE-LV-01 | `data/es/courseLessons.js` | LV izrunas piezīme L14 → ES | APPLIED |
| COURSE-LV-02 | `data/es/courseLessons.js` | LV izrunas piezīme L15 → ES | APPLIED |
| COURSE-LV-03 | `data/es/courseLessons.js` | LV izrunas piezīme L11 → ES | APPLIED |

## SKIP (0)

Nav — visi 39 LABOT ieraksti tika piemēroti ar exact-match CURRENT.

## NELABOT (nemainīti, 12)

HTML-30 … HTML-40 (10), STYLE-01 — saskaņā ar audita kartējumu netika mainīti.

---

## Mainītie production faili

| Fails | Izmaiņu būtība |
|-------|----------------|
| `languages/es/ui.js` | 16 virkņu labojumi + 7 jaunas atslēgas |
| `www/languages/es/ui.js` | sinhronizēts ar `languages/es/ui.js` |
| `data/es/courseLessons.js` | 5+13+2 virsraksti, 3 izrunas piezīmes |
| `www/data/es/courseLessons.js` | sinhronizēts ar `data/es/courseLessons.js` |
| `ui.js` | `Idea principal` + spāņu kursa sekciju reģistri |
| `www/ui.js` | sinhronizēts ar `ui.js` |

---

## Verifikācija

| Pārbaude | Rezultāts |
|----------|-----------|
| 39/39 NEW exact-match | **PASS** |
| ES–DE runtime 59 skati | **PASS** (post-repair audit: runtime atradumi 28→11, tikai NELABOT/atlikuši) |
| Curso 21/21 | **PASS** |
| LV/EN ES atlikumi | **PASS** (0) |
| DE lauku izmaiņas diff | **PASS** (0) |
| Citu valodu faili | **PASS** (0) |
| Syntax (es ui + courseLessons) | **PASS** |
| www ↔ primārais slānis parity | **PASS** |
| Unexpected git changes | **PASS** (tikai plānotie faili) |
| `www/ui.js` reģistru paplašinājums | **PASS** — aditīvs; LV/EN/DA smoke bez ES atlikumiem |

### Post-repair ES runtime paraugs

```
title: Alemán • ES-DE
modeAria: Modos de aprendizaje
nextBtn: Siguiente palabra
lessonsOk: 21
```

---

## Piezīmes

- `ui.js` reģistru paplašinājumi ir **aditīvi** — esošās valodu sekcijas (LV, DA, EN u.c.) netika mainītas.
- `REG-23`/`REG-24` reģistrā saglabātas gan vecās (`teikumi`/`Izruná`), gan jaunās (`frases`/`Pronunciación`) kartēšanas atpakaļsaderībai.
- DE mācību saturs (`de`, `de_article`, piemēri) netika aiztikts.

---

*Ģenerēts: 2026-08-25 · Verifikācijas skripts: `scripts/verify-es-ui-visual-repair.js`*
