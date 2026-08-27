# ES Kurss — Lección 13 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 81
**LABOT:** 36 | **NELABOT:** 6 | **FALSE_POSITIVE:** 39 | **TECHNICAL_DEFER:** 0
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-DET-0208

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].title → kurss.sections.reading`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.sections.reading`
- Structure: Accordion section 1; raw: Texto / Lectura
- CURRENT: `Texto / lectura`
- NEW: `Texto / lectura`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0209

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].examples[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].examples[2]`
- Structure: Section[2] Gramática / items[1]
- DE: `er/sie/es kehrt sich um`
- CURRENT: `er/sie/es kehrt sich um`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- Pamatojums: Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

## ES-KURSS-LESSONS-DET-0210

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[3].examples[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[3].examples[2]`
- Structure: Section[2] Gramática / items[3]
- DE: `er/sie/es atmet`
- CURRENT: `er/sie/es atmet`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- Pamatojums: Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

## ES-KURSS-LESSONS-DET-0211

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MISSING_CONTENT
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].table[0][0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].table[0][0]`
- Structure: Section[2] Gramática / items[7]
- CURRENT: ``
- NEW: ``
- Owner decision: NELABOT: empty DE conjugation label field — renderer does not display native text.
- Pamatojums: Verified: exerciseConjugation DE-only form field; no learner-facing ES expected.

## ES-KURSS-LESSONS-DET-0212

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `kurss.sections.reading (section title display)`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.sections.reading`
- Structure: Section raw title: Texto / Lectura
- CURRENT: `Texto / lectura`
- NEW: `Texto / lectura`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0213

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `kurss.exerciseMeta.formDu`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formDu`
- Structure: Exercise UI label (shown when relevant)
- CURRENT: `Forma 1/3: du (singular)`
- NEW: `Forma 1/3: du (singular)`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0214

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `kurss.exerciseMeta.formIhr`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr`
- Structure: Exercise UI label (shown when relevant)
- CURRENT: `Formulario 2/3: Tú (plural)`
- NEW: `Formulario 2/3: Tú (plural)`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0215

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `kurss.exerciseMeta.formSie`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie`
- Structure: Exercise UI label (shown when relevant)
- CURRENT: `Forma 3/3: Sie (tratamiento formal)`
- NEW: `Forma 3/3: Sie (tratamiento formal)`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-LV2-0455

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `kurss.lessonItems.13.menuDesc (lesson header subtitle / menu)`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.lessonItems.13.menuDesc`
- Structure: Lección 13 header subtitle
- CURRENT: `Der Körper, partes del cuerpo, turnen y jeder.`
- NEW: `El cuerpo («Der Körper»), partes del cuerpo, gimnasia («turnen») y «jeder».`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El texto mezcla alemán y español sin marcar claramente qué términos son vocabulario alemán y presenta una enumeración poco natural. La propuesta conserva los términos alemanes como contenido pedagógico, pero aclara su función.

## ES-KURSS-LESSONS-LV2-0456

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.intro`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.intro`
- Structure: Lección 13 intro paragraph
- CURRENT: `Conferencia Trece: Der Körper, partes del cuerpo, ejercicio, verbos reflexivos y plural.`
- NEW: `Lección 13: «Der Körper», partes del cuerpo, gimnasia, verbos reflexivos y plural.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0457

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[0]`
- Structure: Section[0] Texto / lectura / items[0]
- DE: `Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.`
- CURRENT: `Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.`
- Proposed (audit): `El ser humano tiene una cabeza, un cuello, un tronco, dos brazos, dos manos, dos piernas y dos pies.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0458

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[1]`
- Structure: Section[0] Texto / lectura / items[1]
- DE: `Wie ist der Kopf? Der Kopf ist rund.`
- CURRENT: `Wie ist der Kopf? Der Kopf ist rund.`
- Proposed (audit): `¿Cómo es la cabeza? La cabeza es redonda.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0459

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[2]`
- Structure: Section[0] Texto / lectura / items[2]
- DE: `Der Hals ist kurz.`
- CURRENT: `Der Hals ist kurz.`
- Proposed (audit): `El cuello es corto.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0460

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[3]`
- Structure: Section[0] Texto / lectura / items[3]
- DE: `Der Rumpf ist lang.`
- CURRENT: `Der Rumpf ist lang.`
- Proposed (audit): `El tronco es largo.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0461

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[4]`
- Structure: Section[0] Texto / lectura / items[4]
- DE: `Der Arm ist auch lang.`
- CURRENT: `Der Arm ist auch lang.`
- Proposed (audit): `El brazo también es largo.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0462

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[5]`
- Structure: Section[0] Texto / lectura / items[5]
- DE: `Die Hand ist klein.`
- CURRENT: `Die Hand ist klein.`
- NEW: `La mano es pequeña.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0463

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[6]`
- Structure: Section[0] Texto / lectura / items[6]
- DE: `Das Bein ist dick.`
- CURRENT: `Das Bein ist dick.`
- NEW: `La pierna es gruesa.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0464

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[7]`
- Structure: Section[0] Texto / lectura / items[7]
- DE: `Der Fuß ist dünn.`
- CURRENT: `Der Fuß ist dünn.`
- NEW: `El pie es delgado.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0465

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[8]`
- Structure: Section[0] Texto / lectura / items[8]
- DE: `Die Brust ist vorn, aber der Rücken ist hinten.`
- CURRENT: `Die Brust ist vorn, aber der Rücken ist hinten.`
- NEW: `El pecho está delante, pero la espalda está detrás.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0466

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[9]`
- Structure: Section[0] Texto / lectura / items[9]
- DE: `Jede Hand hat fünf Finger.`
- CURRENT: `Jede Hand hat fünf Finger.`
- NEW: `Cada mano tiene cinco dedos.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0467

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[10]`
- Structure: Section[0] Texto / lectura / items[10]
- DE: `Beide Hände haben zehn Finger.`
- CURRENT: `Beide Hände haben zehn Finger.`
- NEW: `Ambas manos tienen diez dedos.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0468

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[11]`
- Structure: Section[0] Texto / lectura / items[11]
- DE: `Jeder Fuß hat fünf Zehen.`
- CURRENT: `Jeder Fuß hat fünf Zehen.`
- NEW: `Cada pie tiene cinco dedos del pie.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0469

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[12]`
- Structure: Section[0] Texto / lectura / items[12]
- DE: `Beide Füße haben zehn Zehen.`
- CURRENT: `Beide Füße haben zehn Zehen.`
- NEW: `Ambos pies tienen diez dedos del pie.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0470

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[13]`
- Structure: Section[0] Texto / lectura / items[13]
- DE: `Jeder Finger und jede Zehe haben einen Nagel.`
- CURRENT: `Jeder Finger und jede Zehe haben einen Nagel.`
- NEW: `Cada dedo y cada dedo del pie tienen una uña.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0471

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[14]`
- Structure: Section[0] Texto / lectura / items[14]
- DE: `Ich beschneide und reinige die Nägel oft.`
- CURRENT: `Ich beschneide und reinige die Nägel oft.`
- NEW: `Recorto y limpio las uñas a menudo.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

## ES-KURSS-LESSONS-LV2-0472

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[24]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[24]`
- Structure: Section[1] Nombres / items[24]
- DE: `jede`
- CURRENT: `jede — katra`
- Proposed (audit): `jede — cada una`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0473

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[25]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[25]`
- Structure: Section[1] Nombres / items[25]
- DE: `jedes`
- CURRENT: `jedes — katrs`
- Proposed (audit): `jedes — cada uno`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0474

- Status: **LABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[29]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[29]`
- Structure: Section[1] Nombres / items[29]
- DE: `der Nagel`
- CURRENT: `der Nagel — uña / clavo`
- NEW: `der Nagel — uña`
- Owner decision: LABOT: reduce to single main translation per audit proposal.
- Pamatojums: La barra combina dos significados distintos en un campo de aprendizaje. En este contexto corporal, debe usarse únicamente «uña».

## ES-KURSS-LESSONS-LV2-0475

- Status: **LABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[30]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[30]`
- Structure: Section[1] Nombres / items[30]
- DE: `die Nägel`
- CURRENT: `die Nägel — uñas / clavos`
- NEW: `die Nägel — uñas`
- Owner decision: LABOT: reduce to single main translation per audit proposal.
- Pamatojums: Combina dos traducciones distintas en un mismo campo mediante una barra. Debe seleccionarse la acepción correspondiente al contexto o separarse en entradas distintas.

## ES-KURSS-LESSONS-LV2-0476

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[31]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[31]`
- Structure: Section[1] Nombres / items[31]
- DE: `beschneiden`
- CURRENT: `beschneiden — apgriezt`
- Proposed (audit): `beschneiden — recortar`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0477

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text`
- Structure: Section[2] Gramática / items[0]
- CURRENT: `Algunos verbos con la vocal raíz a o au en la segunda y tercera persona del presente del singular tienen diéresis.`
- NEW: `Algunos verbos cuya raíz contiene a o au cambian estas vocales por ä o äu en la segunda y tercera persona del presente de indicativo singular.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La formulación «con la vocal raíz a o au» es poco natural y «tienen diéresis» describe de forma imprecisa el fenómeno: las vocales cambian a ä o äu en determinadas personas.

## ES-KURSS-LESSONS-LV2-0478

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading`
- Structure: Section[2] Gramática / items[5]
- CURRENT: `Verbos compuestos`
- NEW: `Verbos separables`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0479

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text`
- Structure: Section[2] Gramática / items[5]
- CURRENT: `Si la parte preposicional está acentuada, se separa en tiempo presente y va al final de la oración.`
- NEW: `Si el prefijo está acentuado, se separa en presente y se coloca al final de la oración.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0480

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text`
- Structure: Section[2] Gramática / items[6]
- CURRENT: `Si el prefijo no está acentuado, no está acentuado.`
- NEW: `Si el prefijo no está acentuado, no se separa.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La segunda parte repite «no está acentuado» y no expresa la regla gramatical. La explicación debe indicar que el prefijo permanece unido al verbo.

## ES-KURSS-LESSONS-LV2-0481

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text`
- Structure: Section[2] Gramática / items[7]
- CURRENT: `El pronombre jeder va en círculos como los artículos der / die / das.`
- NEW: `El pronombre «jeder» se declina como los artículos «der», «die» y «das».`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Va en círculos» es una traducción no idiomática y no transmite el concepto de declinación. Además, conviene conservar los términos alemanes entre comillas para identificar las formas.

## ES-KURSS-LESSONS-LV2-0482

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[2].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[2].wir`
- Structure: Section[4] Ejercicio / card[2] (wir)
- DE: `Wir machen dos Schritte.`
- CURRENT: `Wir machen dos Schritte.`
- NEW: `Wir machen zwei Schritte.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El ejemplo alemán contiene la palabra española «dos»; debe conservarse íntegramente en alemán.

## ES-KURSS-LESSONS-LV2-0483

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].er`
- Structure: Section[4] Ejercicio / card[3] (er)
- DE: `Er bleibt stehen.`
- CURRENT: `Er bleibt stehen.`
- Proposed (audit): `Él se queda de pie.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0484

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].wir`
- Structure: Section[4] Ejercicio / card[3] (wir)
- DE: `Wir bleiben stehen.`
- CURRENT: `Wir bleiben stehen.`
- Proposed (audit): `Nos quedamos de pie.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0485

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].ich`
- Structure: Section[4] Ejercicio / card[4] (ich)
- DE: `Ich kehre mich um.`
- CURRENT: `Ich kehre mich um.`
- Proposed (audit): `Me doy la vuelta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0486

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].er`
- Structure: Section[4] Ejercicio / card[4] (er)
- DE: `Er kehrt sich um.`
- CURRENT: `Er kehrt sich um.`
- Proposed (audit): `Él se da la vuelta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0487

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].wir`
- Structure: Section[4] Ejercicio / card[4] (wir)
- DE: `Wir kehren uns um.`
- CURRENT: `Wir kehren uns um.`
- Proposed (audit): `Nos damos la vuelta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0488

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].ich`
- Structure: Section[4] Ejercicio / card[5] (ich)
- DE: `Ich strecke einen Arm aus.`
- CURRENT: `Ich strecke einen Arm aus.`
- Proposed (audit): `Extiendo un brazo.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0489

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].er`
- Structure: Section[4] Ejercicio / card[5] (er)
- DE: `Er streckt einen Arm aus.`
- CURRENT: `Er streckt einen Arm aus.`
- Proposed (audit): `Él extiende un brazo.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0490

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].wir`
- Structure: Section[4] Ejercicio / card[5] (wir)
- DE: `Wir strecken einen Arm aus.`
- CURRENT: `Wir strecken einen Arm aus.`
- Proposed (audit): `Extendemos un brazo.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0491

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].ich`
- Structure: Section[4] Ejercicio / card[6] (ich)
- DE: `Ich strecke beide Arme aus.`
- CURRENT: `Ich strecke beide Arme aus.`
- Proposed (audit): `Extiendo ambos brazos.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0492

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].er`
- Structure: Section[4] Ejercicio / card[6] (er)
- DE: `Er streckt beide Arme aus.`
- CURRENT: `Er streckt beide Arme aus.`
- Proposed (audit): `Él extiende ambos brazos.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0493

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].wir`
- Structure: Section[4] Ejercicio / card[6] (wir)
- DE: `Wir strecken beide Arme aus.`
- CURRENT: `Wir strecken beide Arme aus.`
- Proposed (audit): `Extendemos ambos brazos.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0494

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].ich`
- Structure: Section[4] Ejercicio / card[7] (ich)
- DE: `Ich senske beide Arme.`
- CURRENT: `Ich senske beide Arme.`
- Proposed (audit): `Bajo ambos brazos.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0495

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].er`
- Structure: Section[4] Ejercicio / card[7] (er)
- DE: `Er sentkt beide Arme.`
- CURRENT: `Er sentkt beide Arme.`
- Proposed (audit): `Él baja ambos brazos.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0496

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].wir`
- Structure: Section[4] Ejercicio / card[7] (wir)
- DE: `Wir senten beide Arme.`
- CURRENT: `Wir senten beide Arme.`
- Proposed (audit): `Bajamos ambos brazos.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0497

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].ich`
- Structure: Section[4] Ejercicio / card[8] (ich)
- DE: `Ich drehe den Kopf nach links.`
- CURRENT: `Ich drehe den Kopf nach links.`
- Proposed (audit): `Giro la cabeza hacia la izquierda.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0498

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].er`
- Structure: Section[4] Ejercicio / card[8] (er)
- DE: `Er dreht den Kopf nach enlaces.`
- CURRENT: `Er dreht den Kopf nach enlaces.`
- Proposed (audit): `Él gira la cabeza hacia la izquierda.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0499

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].wir`
- Structure: Section[4] Ejercicio / card[8] (wir)
- DE: `Wir drehen den Kopf nach links.`
- CURRENT: `Wir drehen den Kopf nach links.`
- Proposed (audit): `Giramos la cabeza hacia la izquierda.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0500

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].ich`
- Structure: Section[4] Ejercicio / card[9] (ich)
- DE: `Ich drehe den Kopf nach rechts.`
- CURRENT: `Ich drehe den Kopf nach rechts.`
- Proposed (audit): `Giro la cabeza hacia la derecha.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0501

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].er`
- Structure: Section[4] Ejercicio / card[9] (er)
- DE: `Er dreht den Kopf nach rechts.`
- CURRENT: `Er dreht den Kopf nach rechts.`
- Proposed (audit): `Él gira la cabeza hacia la derecha.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0502

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].wir`
- Structure: Section[4] Ejercicio / card[9] (wir)
- DE: `Wir drehen den Kopf nach rechts.`
- CURRENT: `Wir drehen den Kopf nach rechts.`
- Proposed (audit): `Giramos la cabeza hacia la derecha.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0503

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].ich`
- Structure: Section[4] Ejercicio / card[10] (ich)
- DE: `Ich halte den Kopf gerade.`
- CURRENT: `Ich halte den Kopf gerade.`
- Proposed (audit): `Mantengo la cabeza recta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0504

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].er`
- Structure: Section[4] Ejercicio / card[10] (er)
- DE: `Er hält den Kopf gerade.`
- CURRENT: `Er hält den Kopf gerade.`
- Proposed (audit): `Él mantiene la cabeza recta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0505

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].wir`
- Structure: Section[4] Ejercicio / card[10] (wir)
- DE: `Wir halten den Kopf gerade.`
- CURRENT: `Wir halten den Kopf gerade.`
- Proposed (audit): `Mantenemos la cabeza recta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0506

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].ich`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].ich`
- Structure: Section[4] Ejercicio / card[11] (ich)
- DE: `Ich atme tief.`
- CURRENT: `Ich atme tief.`
- Proposed (audit): `Respiro profundamente.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0507

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].er`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].er`
- Structure: Section[4] Ejercicio / card[11] (er)
- DE: `Er atmet tief.`
- CURRENT: `Er atmet tief.`
- Proposed (audit): `Él respira profundamente.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0508

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].wir`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].wir`
- Structure: Section[4] Ejercicio / card[11] (wir)
- DE: `Wir atmen tief.`
- CURRENT: `Wir atmen tief.`
- Proposed (audit): `Respiramos profundamente.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0509

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[0].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[0].lv`
- Structure: Section[5] Traducir / card[0]
- DE: `Wie viele Arme hat der Mensch?`
- CURRENT: `¿Cuántas manos tiene una persona?`
- NEW: `¿Cuántos brazos tiene una persona?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Arme» significa «brazos», no «manos».

## ES-KURSS-LESSONS-LV2-0510

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[1].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[1].lv`
- Structure: Section[5] Traducir / card[1]
- DE: `Wie viele Beine hast du?`
- CURRENT: `cuantas piernas tienes`
- NEW: `¿Cuántas piernas tienes?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Faltan la mayúscula inicial, la tilde de «cuántas» y los signos de interrogación.

## ES-KURSS-LESSONS-LV2-0511

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[4].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[4].lv`
- Structure: Section[5] Traducir / card[4]
- DE: `Wie ist der Arm?`
- CURRENT: `¿Qué es una mano?`
- NEW: `¿Cómo es el brazo?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán pregunta «Wie ist der Arm?»; «Arm» significa «brazo» y «Wie ist» corresponde a «¿Cómo es?».

## ES-KURSS-LESSONS-LV2-0512

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[5].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[5].lv`
- Structure: Section[5] Traducir / card[5]
- DE: `Wie ist das Bein?`
- CURRENT: `¿Qué es la pierna?`
- NEW: `¿Cómo es la pierna?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Wie ist das Bein?» significa «¿Cómo es la pierna?», no «¿Qué es la pierna?».

## ES-KURSS-LESSONS-LV2-0513

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[6].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[6].lv`
- Structure: Section[5] Traducir / card[6]
- DE: `Der Arm ist klein, aber das Bein ist groß.`
- CURRENT: `La mano es pequeña, pero la pierna es grande.`
- NEW: `El brazo es pequeño, pero la pierna es grande.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Der Arm» significa «el brazo», no «la mano».

## ES-KURSS-LESSONS-LV2-0514

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[7].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[7].lv`
- Structure: Section[5] Traducir / card[7]
- DE: `Wo ist die Brust?`
- CURRENT: `donde esta el cofre`
- NEW: `¿Dónde está el pecho?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Brust» se refiere al pecho en este contexto, no a un cofre. También faltan tildes, mayúscula y signos de interrogación.

## ES-KURSS-LESSONS-LV2-0515

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[10].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[10].lv`
- Structure: Section[5] Traducir / card[10]
- DE: `Wie viele Finger hat die Hand?`
- CURRENT: `¿Cik pirkstu ir plaukstai?`
- NEW: `¿Cuántos dedos tiene la mano?`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El texto visible está en letón, no en español.

## ES-KURSS-LESSONS-LV2-0516

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[11].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[11].lv`
- Structure: Section[5] Traducir / card[11]
- DE: `Die Hand hat fünf Finger.`
- CURRENT: `Plaukstai ir pieci pirksti.`
- Proposed (audit): `La mano tiene cinco dedos.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0517

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv`
- Structure: Section[5] Traducir / card[14]
- DE: `Was hat der Finger?`
- CURRENT: `¿Kas ir pirkstam?`
- NEW: `¿Qué le pasa al dedo?`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El texto está en letón, no en español.

## ES-KURSS-LESSONS-LV2-0518

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv`
- Structure: Section[5] Traducir / card[15]
- DE: `Der Finger hat einen Nagel.`
- CURRENT: `Pirkstam ir regaña.`
- NEW: `El dedo tiene una uña.`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Contiene texto letón («Pirkstam ir») y «regaña» no corresponde al significado del ejemplo alemán.

## ES-KURSS-LESSONS-LV2-0519

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv`
- Structure: Section[5] Traducir / card[16]
- DE: `Was tust du?`
- CURRENT: `¿Ko tu dari?`
- NEW: `¿Qué haces?`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El texto está en letón, no en español.

## ES-KURSS-LESSONS-LV2-0520

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[17].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[17].lv`
- Structure: Section[5] Traducir / card[17]
- DE: `Ich beschneide und reinige die Nägel.`
- CURRENT: `Me corto y limpio las uñas.`
- NEW: `Me corto las uñas y las limpio.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Me corto» sin objeto significa que me corto a mí mismo; además, falta especificar que se cortan las uñas.

## ES-KURSS-LESSONS-LV2-0521

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[18].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[18].lv`
- Structure: Section[5] Traducir / card[18]
- DE: `Was tut Paul?`
- CURRENT: `Ko Paul dara?`
- Proposed (audit): `¿Qué hace Paul?`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0522

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv`
- Structure: Section[5] Traducir / card[22]
- DE: `Sie strecken beide Arme aus.`
- CURRENT: `Extienden ambas manos.`
- NEW: `Extienden ambos brazos.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El ejemplo alemán se refiere a los brazos, no a las manos.

## ES-KURSS-LESSONS-LV2-0523

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv`
- Structure: Section[5] Traducir / card[23]
- DE: `Sie senken beide Arme.`
- CURRENT: `Dejan caer ambas manos.`
- NEW: `Bajan ambos brazos.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El ejemplo alemán se refiere a bajar los brazos; «dejar caer las manos» cambia el significado.

## ES-KURSS-LESSONS-LV2-0524

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[29].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[29].lv`
- Structure: Section[5] Traducir / card[29]
- DE: `Robert, turne!`
- CURRENT: `Roberto, vingro!`
- Proposed (audit): `¡Roberto, haz gimnasia!`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0525

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv`
- Structure: Section[5] Traducir / card[31]
- DE: `Fräulein Müller, turnen Sie!`
- CURRENT: `¡Müller jaunkundze, vingrojiet!`
- NEW: `¡Señorita Müller, haga gimnasia!`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: La frase está en letón, salvo el apellido, y no está traducida al español.

## ES-KURSS-LESSONS-LV2-0526

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[32].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[32].lv`
- Structure: Section[5] Traducir / card[32]
- DE: `Machen Sie zwei Schritte, und dann bleiben Sie stehen!`
- CURRENT: `¡Da dos pasos y luego quédate de pie!`
- NEW: `¡Dé dos pasos y luego quédese de pie!`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El ejemplo usa tratamiento formal («Sie»), pero el español mezcla el imperativo de tú con el contexto formal.

## ES-KURSS-LESSONS-LV2-0527

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `kurss.exerciseMeta.chooseCasePlural`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural`
- Structure: Exercise UI label (shown when relevant)
- CURRENT: `¡Pon la conjugación correcta y hazlo en plural!`
- NEW: `¡Escribe la forma correcta y ponla en plural!`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Poner la conjugación» y «hazlo» resultan poco naturales y vagos en una instrucción de ejercicio.

