# ES Kurss — Lección 7 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 46
**LABOT:** 34 | **NELABOT:** 9 | **FALSE_POSITIVE:** 2 | **TECHNICAL_DEFER:** 1
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-STR-L07

- Status: **TECHNICAL_DEFER**
- Track: LEGACY_HTML_SYNC
- Category: STRUCTURE
- Severity: HIGH
- Source: structure
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson7`
- CURRENT: `inline:6157`
- Proposed (audit): `(align with LV MASTER structure)`
- Owner decision: TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- Pamatojums: Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

## ES-KURSS-LESSONS-DET-0108

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Legacy accordion summary
- CURRENT: `Diálogos/oraciones`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- Pamatojums: Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

## ES-KURSS-LESSONS-DET-0109

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `das Lied (das līt)`
- CURRENT: `das Lied (das līt) — jovencita`
- NEW: `das Lied (das līt) — canción`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0110

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `der Spiegel (špīgel)`
- CURRENT: `der Spiegel (špīgel) — escoba`
- NEW: `der Spiegel (špīgel) — espejo`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0111

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Pronunciación
- DE: `die Schüssel`
- CURRENT: `die Schüssel — sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (para špīgel).`
- NEW: `sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (dēr špīgel).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0112

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Pronunciación
- DE: `das Zimmer`
- CURRENT: `das Zimmer — sch se pronuncia como letón š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).`
- NEW: `sch se pronuncia como š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0113

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Pronunciación
- DE: `das Ufer (ūfer)`
- CURRENT: `das Ufer (ūfer) — El diptongo äu se pronuncia como letón oi: das Fräulein (das froilein).`
- NEW: `El diptongo äu se pronuncia como oi: das Fräulein (das froilein).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0114

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).`
- CURRENT: `sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).`
- NEW: `sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (dēr špīgel).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0115

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).`
- CURRENT: `sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).`
- NEW: `sch se pronuncia como š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0116

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).`
- CURRENT: `Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).`
- NEW: `El diptongo äu se pronuncia como oi: das Fräulein (das froilein).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0117

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes`
- CURRENT: `Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes -La forma del comando en la segunda persona del plural es similar a la segunda persona del presente plural, pero se usa sin pronombre.`
- NEW: `La forma imperativa en la 2.ª persona del singular corresponde a la 2.ª persona del singular del verbo, sin la terminación personal.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0118

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `Piemēri: antworte!, arbeite!, öffne!, zeichne!`
- CURRENT: `Piemēri: antworte!, arbeite!, öffne!, zeichne!`
- NEW: `Ejemplos: antworte!, arbeite!, öffne!, zeichne!`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0119

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `Ļoti bieži galotne`
- CURRENT: `Ļoti bieži galotne -La forma de tratamiento con "Usted" se parece a la tercera persona del plural. El pronombre Sie es escrito con mayúscula y después del verbo.`
- NEW: `Muy a menudo, la forma de tratamiento con «Usted» se parece a la tercera persona del plural. El pronombre Sie se escribe con mayúscula y va después del verbo.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0120

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.`
- CURRENT: `Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.`
- NEW: `La forma imperativa en la 2.ª persona del plural se parece a la 2.ª persona del plural del presente, pero se utiliza sin pronombre.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0121

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- DE: `Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!`
- CURRENT: `Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!`
- NEW: `Ejemplos: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0122

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[0].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[0].du`
- Structure: Lección 7 imperative du form, card 1
- DE: `fragen`
- CURRENT: `frag! / frage!`
- NEW: `frag! / frage!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0123

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[2].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[2].du`
- Structure: Lección 7 imperative du form, card 3
- DE: `loben`
- CURRENT: `lob! / lobe!`
- NEW: `lob! / lobe!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0124

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[3].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[3].du`
- Structure: Lección 7 imperative du form, card 4
- DE: `lieben`
- CURRENT: `lieb! / liebe!`
- NEW: `lieb! / liebe!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0125

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[4].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[4].du`
- Structure: Lección 7 imperative du form, card 5
- DE: `zählen`
- CURRENT: `zähl! / zähle!`
- NEW: `zähl! / zähle!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0126

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[5].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[5].du`
- Structure: Lección 7 imperative du form, card 6
- DE: `zeigen`
- CURRENT: `zeig! / zeige!`
- NEW: `zeig! / zeige!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0127

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[9].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[9].du`
- Structure: Lección 7 imperative du form, card 10
- DE: `kommen`
- CURRENT: `komm! / komme!`
- NEW: `komm! / komme!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0128

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[10].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[10].du`
- Structure: Lección 7 imperative du form, card 11
- DE: `gehen`
- CURRENT: `geh! / gehe!`
- NEW: `geh! / gehe!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0129

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[11].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[11].du`
- Structure: Lección 7 imperative du form, card 12
- DE: `stehen`
- CURRENT: `steh! / stehe!`
- NEW: `steh! / stehe!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0130

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[13].du`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[13].du`
- Structure: Lección 7 imperative du form, card 14
- DE: `singen`
- CURRENT: `sing! / singe!`
- NEW: `sing! / singe!`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0131

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `kurss.lessonProgress`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.lessonProgress`
- Structure: Translate progress template
- CURRENT: `Lección {lesson} · Traducir: {current} / {total}`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- Pamatojums: Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

## ES-KURSS-LESSONS-LV2-0254

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[0]:Diálogos/oraciones → course-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.`
- CURRENT: `Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.`
- NEW: `Hans, singe ein Lied! Was tust du? Ich singe ein Lied.`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El ejemplo alemán contiene una frase en español. Los ejemplos de esta sección deben permanecer íntegramente en alemán.

## ES-KURSS-LESSONS-LV2-0255

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `singe`
- CURRENT: `singe — canción`
- NEW: `singe — canta`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «singe» es la forma imperativa de «singen» para la segunda persona singular: «canta», no «canción».

## ES-KURSS-LESSONS-LV2-0256

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `singt`
- CURRENT: `singt — Tú`
- NEW: `singt — cantad (vosotros)`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: En este contexto, «singt» es el imperativo plural informal y corresponde a «cantad», no a «Tú».

## ES-KURSS-LESSONS-LV2-0257

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `singen Sie`
- CURRENT: `singen Sie — conde`
- NEW: `singen Sie — cante usted`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «singen Sie» es el imperativo formal de «singen»: «cante usted»; «conde» no tiene relación semántica.

## ES-KURSS-LESSONS-LV2-0259

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `Sie`
- CURRENT: `Sie — molinero`
- NEW: `Sie — usted (forma formal)`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Sie» es el pronombre formal «usted» o «ustedes», según el contexto; «molinero» es una traducción incorrecta.

## ES-KURSS-LESSONS-LV2-0260

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `zählen`
- CURRENT: `zählen — abierto`
- NEW: `zählen — contar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «zählen» significa «contar», mientras que «abierto» corresponde a otro significado.

## ES-KURSS-LESSONS-LV2-0261

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `das Fräulein (froilein)`
- CURRENT: `das Fräulein (froilein) — ventana`
- NEW: `das Fräulein (froilein) — la señorita`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «das Fräulein» significa «la señorita», no «ventana».

## ES-KURSS-LESSONS-LV2-0262

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `der Müller`
- CURRENT: `der Müller — todos`
- NEW: `der Müller — Müller (apellido)`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: En los ejemplos, «Müller» es un apellido. «Todos» no corresponde a este término.

## ES-KURSS-LESSONS-LV2-0263

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `öffnen`
- CURRENT: `öffnen — espejo`
- NEW: `öffnen — abrir`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «öffnen» es el verbo «abrir», no «espejo».

## ES-KURSS-LESSONS-LV2-0264

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `das Fenster (fenster)`
- CURRENT: `das Fenster (fenster) — trapo, fregona`
- NEW: `das Fenster (fenster) — la ventana`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «das Fenster» significa «la ventana»; «trapo, fregona» son traducciones incorrectas.

## ES-KURSS-LESSONS-LV2-0265

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `alle`
- CURRENT: `alle — pala`
- NEW: `alle — todos/todas`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «alle» significa «todos» o «todas» según el sustantivo, no «pala».

## ES-KURSS-LESSONS-LV2-0267

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `der Lappen`
- CURRENT: `der Lappen — pala`
- NEW: `der Lappen — trapo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Der Lappen» significa «el trapo», no «la pala».

## ES-KURSS-LESSONS-LV2-0268

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `der Spaten`
- CURRENT: `der Spaten — cuenco`
- NEW: `der Spaten — pala`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Der Spaten» significa «la pala», no «el cuenco».

## ES-KURSS-LESSONS-LV2-0269

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `der Besen`
- CURRENT: `der Besen — habitación`
- NEW: `der Besen — escoba`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Der Besen» significa «la escoba», no «la habitación».

## ES-KURSS-LESSONS-LV2-0270

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Palabras
- DE: `die Schaufel`
- CURRENT: `die Schaufel — orilla`
- NEW: `die Schaufel — pala`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Die Schaufel» significa «la pala», no «la orilla».

## ES-KURSS-LESSONS-LV2-0279

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- CURRENT: `1Expresión de comandos`
- NEW: `1. Imperativo`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta un separador entre el número y el título; además, «imperativo» es el término gramatical más preciso.

## ES-KURSS-LESSONS-LV2-0280

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- CURRENT: `2Comando plural`
- NEW: `2. Imperativo plural`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta un separador entre el número y el título, y «imperativo plural» es una denominación gramatical más natural que «comando plural».

## ES-KURSS-LESSONS-LV2-0281

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- Structure: Gramática
- CURRENT: `4öffnen`
- NEW: `4. öffnen`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta un separador entre el número y el ejemplo alemán. El término alemán debe conservarse.

## ES-KURSS-LESSONS-LV2-0282

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[2].lv`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[2].lv`
- Structure: Lección 7 imperative exercise 3/16
- DE: `loben`
- CURRENT: `elogio`
- NEW: `elogiar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán «loben» es un infinitivo que significa «elogiar»; «elogio» es un sustantivo.

## ES-KURSS-LESSONS-LV2-0283

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[5].lv`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[5].lv`
- Structure: Lección 7 imperative exercise 6/16
- DE: `zeigen`
- CURRENT: `espectáculo`
- NEW: `mostrar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Espectáculo» es un sustantivo y no corresponde al verbo alemán «zeigen», que significa «mostrar».

## ES-KURSS-LESSONS-LV2-0284

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson7ExerciseCardsEs[7].lv`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson7ExerciseCardsEs[7].lv`
- Structure: Lección 7 imperative exercise 8/16
- DE: `rechnen`
- CURRENT: `contar`
- NEW: `calcular`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Contar» corresponde normalmente a «zählen», mientras que el verbo alemán «rechnen» significa «calcular» o «hacer cuentas».

