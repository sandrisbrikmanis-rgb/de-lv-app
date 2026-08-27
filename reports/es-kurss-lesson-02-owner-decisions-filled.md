# ES Kurss — Lección 2 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 27
**LABOT:** 22 | **NELABOT:** 1 | **FALSE_POSITIVE:** 3 | **TECHNICAL_DEFER:** 1
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-STR-L02

- Status: **TECHNICAL_DEFER**
- Track: LEGACY_HTML_SYNC
- Category: STRUCTURE
- Severity: HIGH
- Source: structure
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson2`
- CURRENT: `inline:6561`
- Proposed (audit): `(align with LV MASTER structure)`
- Owner decision: TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- Pamatojums: Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

## ES-KURSS-LESSONS-DET-0020

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Legacy accordion summary
- CURRENT: `Diálogos/oraciones`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- Pamatojums: Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

## ES-KURSS-LESSONS-DET-0021

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `spielen`
- CURRENT: `spielen — jugar; jugar`
- NEW: `spielen — jugar; jugar`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0022

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- DE: `Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.`
- CURRENT: `Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.`
- NEW: `En las palabras arbeiten y zeichnen, el diptongo ei se pronuncia aproximadamente como el sonido letón de una e abierta, seguido de i.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0023

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- DE: `Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).`
- CURRENT: `Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).`
- NEW: `El grupo de consonantes sp se pronuncia como šp: spielen (špīlen).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0024

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- DE: `Darbības vārdā tun u izrunājams gari visās personās.`
- CURRENT: `Darbības vārdā tun u izrunājams gari visās personās.`
- NEW: `En el verbo tun, la u se pronuncia larga en todas las personas.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0025

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

## ES-KURSS-LESSONS-LV2-0040

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `nein`
- CURRENT: `nein — trabajar`
- NEW: `nein — no`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «nein» significa «no», no «trabajar».

## ES-KURSS-LESSONS-LV2-0041

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `nicht`
- CURRENT: `nicht — preguntar`
- NEW: `nicht — no`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «nicht» es el adverbio alemán de negación «no», mientras que «preguntar» corresponde a «fragen».

## ES-KURSS-LESSONS-LV2-0042

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `arbeiten`
- CURRENT: `arbeiten — was tut er? ¿Qué está haciendo?`
- NEW: `arbeiten — trabajar`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El campo contiene una frase alemana no traducida («was tut er?») y añade una pregunta ajena al significado de la palabra «arbeiten».

## ES-KURSS-LESSONS-LV2-0043

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `fragen`
- CURRENT: `fragen — ¿qué hacen ellos?`
- NEW: `fragen — preguntar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «fragen» significa «preguntar»; «¿qué hacen ellos?» corresponde a otra expresión alemana.

## ES-KURSS-LESSONS-LV2-0044

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `was tut er?`
- CURRENT: `was tut er? — responder`
- NEW: `was tut er? — ¿qué hace él?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Was tut er?» significa «¿qué hace él?», no «responder».

## ES-KURSS-LESSONS-LV2-0045

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `was tun sie?`
- CURRENT: `was tun sie? — calcular`
- NEW: `was tun sie? — ¿qué hacen ellos?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Was tun sie?» significa «¿qué hacen ellos?», no «calcular».

## ES-KURSS-LESSONS-LV2-0046

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `aber`
- CURRENT: `aber — dibujar`
- NEW: `aber — pero`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Aber» significa «pero»; «dibujar» no corresponde.

## ES-KURSS-LESSONS-LV2-0047

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Palabras
- DE: `antworten`
- CURRENT: `antworten — Marie`
- NEW: `antworten — responder`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Marie» no es la traducción de «antworten»; el verbo significa «responder».

## ES-KURSS-LESSONS-LV2-0051

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → course-example[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- DE: `nosotros rechnen`
- CURRENT: `nosotros rechnen`
- Proposed (audit): `wir rechnen`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0052

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-note[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- CURRENT: `En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa.`
- NEW: `En las oraciones interrogativas que comienzan con una palabra interrogativa, como «qué», «quién» o «por qué», el verbo va inmediatamente después de la palabra interrogativa.`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Hay repeticiones erróneas («¿qué?» y «¿por qué?») y «OMS» es un resto extranjero o una traducción incorrecta. La redacción también necesita naturalidad y puntuación.

## ES-KURSS-LESSONS-LV2-0053

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ORTHOGRAPHY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- CURRENT: `1Terminaciones con e`
- NEW: `1. Terminaciones con e`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Falta un espacio o signo de puntuación entre el número y el encabezado.

## ES-KURSS-LESSONS-LV2-0054

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- CURRENT: `2Palabra en cuestión`
- NEW: `2. Palabra interrogativa`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Falta separación después del número y «palabra en cuestión» no es una denominación natural ni precisa para este concepto gramatical.

## ES-KURSS-LESSONS-LV2-0055

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- Structure: Gramática
- CURRENT: `3Negación con nicht`
- NEW: `3. Negación con nicht`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Falta el espacio tras el número y la puntuación habitual de la numeración.

## ES-KURSS-LESSONS-LV2-0056

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson2TrainingCardsEs[1].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson2TrainingCardsEs[1].front`
- Structure: Lección 2 translate card 2/15
- DE: `Paul fragt.`
- CURRENT: `pregunta Pablo.`
- NEW: `Pablo pregunta.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El orden de palabras resulta poco natural en español y la oración comienza con minúscula.

## ES-KURSS-LESSONS-LV2-0057

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson2TrainingCardsEs[6].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson2TrainingCardsEs[6].front`
- Structure: Lección 2 translate card 7/15
- DE: `Nein, sie singen nicht, sie rechnen.`
- CURRENT: `No, no cantan, cuentan.`
- NEW: `No, no cantan, calculan.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán «rechnen» significa «calcular» o «hacer cuentas», no «contar» en el sentido habitual de «cuentan».

## ES-KURSS-LESSONS-LV2-0058

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson2TrainingCardsEs[8].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson2TrainingCardsEs[8].front`
- Structure: Lección 2 translate card 9/15
- DE: `Ich stehe und singe.`
- CURRENT: `Me paro y canto.`
- NEW: `Estoy de pie y canto.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Ich stehe» expresa estar de pie; «me paro» suele significar que me detengo o que me pongo de pie.

## ES-KURSS-LESSONS-LV2-0059

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson2TrainingCardsEs[9].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson2TrainingCardsEs[9].front`
- Structure: Lección 2 translate card 10/15
- DE: `Zeichnet ihr?`
- CURRENT: `¿Dibujas?`
- NEW: `¿Dibujan?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán «ihr» se refiere a la segunda persona plural, no a «tú».

## ES-KURSS-LESSONS-LV2-0060

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson2TrainingCardsEs[10].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson2TrainingCardsEs[10].front`
- Structure: Lección 2 translate card 11/15
- DE: `Ja, wir zeichnen, aber Marie spielt.`
- CURRENT: `Sí, empatamos, pero María juega.`
- NEW: `Sí, dibujamos, pero María juega.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Zeichnen» significa «dibujar»; «empatamos» no corresponde al significado alemán.

## ES-KURSS-LESSONS-LV2-0061

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson2TrainingCardsEs[11].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson2TrainingCardsEs[11].front`
- Structure: Lección 2 translate card 12/15
- DE: `Was tut ihr?`
- CURRENT: `qué estás haciendo`
- NEW: `qué están haciendo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán «ihr» es segunda persona plural; «estás» es singular.

## ES-KURSS-LESSONS-LV2-0062

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson2TrainingCardsEs[13].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson2TrainingCardsEs[13].front`
- Structure: Lección 2 translate card 14/15
- DE: `Wer geht?`
- CURRENT: `¿Qué está sucediendo?`
- NEW: `¿Quién se va?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Wer geht?» significa «¿Quién se va?» o «¿Quién va?», no «¿Qué está sucediendo?».

