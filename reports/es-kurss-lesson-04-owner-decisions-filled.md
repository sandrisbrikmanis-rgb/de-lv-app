# ES Kurss — Lección 4 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 64
**LABOT:** 44 | **NELABOT:** 5 | **FALSE_POSITIVE:** 14 | **TECHNICAL_DEFER:** 1
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-STR-L04

- Status: **TECHNICAL_DEFER**
- Track: LEGACY_HTML_SYNC
- Category: STRUCTURE
- Severity: HIGH
- Source: structure
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson4`
- CURRENT: `inline:7423`
- Proposed (audit): `(align with LV MASTER structure)`
- Owner decision: TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- Pamatojums: Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

## ES-KURSS-LESSONS-DET-0048

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Legacy accordion summary
- CURRENT: `Diálogos/oraciones`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- Pamatojums: Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

## ES-KURSS-LESSONS-DET-0049

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `nehmen (nēmen)`
- CURRENT: `nehmen (nēmen) — emplumado`
- NEW: `nehmen (nēmen) — emplumado`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0050

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `der Federhalter (dēr fēderhalter)`
- CURRENT: `der Federhalter (dēr fēderhalter) — show`
- NEW: `der Federhalter (dēr fēderhalter) — portaplumas`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0051

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `die Feder (dī fēder)`
- CURRENT: `die Feder (dī fēder) — puntiagudo`
- NEW: `die Feder (dī fēder) — pluma`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0052

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `das Mädchen (mētchen)`
- CURRENT: `das Mädchen (mētchen) — cuchillo`
- NEW: `das Mädchen (mētchen) — cuchillo`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0053

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → course-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `nehmen (nēmen)`
- CURRENT: `nehmen (nēmen) - tomar`
- NEW: `nehmen (nēmen) - tomar`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0054

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Pronunciación
- DE: `Galotnes`
- CURRENT: `Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen).`
- NEW: `Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0055

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Pronunciación
- DE: `h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.`
- CURRENT: `h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.`
- NEW: `En alemán, h puede representar tanto un sonido como una marca de longitud de la vocal precedente.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0056

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- DE: `Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).`
- CURRENT: `Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).`
- NEW: `Si h es una marca de longitud, no se pronuncia como sonido: nehmen (nēmen).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0057

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- DE: `Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).`
- CURRENT: `Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).`
- NEW: `Si a una vocal le sigue una sola consonante, la vocal se pronuncia larga: die (dī) Feder (fēder), den (dēn).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0058

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- DE: `daudzskaitlī`
- CURRENT: `daudzskaitlī — das Messer ist nicht scharf`
- NEW: `en plural — das Messer ist nicht scharf`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0059

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `7-chen / -lein`
- NEW: `7-chen / -lein`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0060

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

## ES-KURSS-LESSONS-LV2-0129

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Paul kommt und nimmt einen Federhalter.`
- CURRENT: `Paul kommt und nimmt einen Federhalter.`
- Proposed (audit): `Paul viene y toma un portaplumas.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0130

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Er zeigt den Federhalter.`
- CURRENT: `Er zeigt den Federhalter.`
- Proposed (audit): `Él muestra el portaplumas.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0131

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Wie ist der Federhalter?`
- CURRENT: `Er fragt: „Wie ist der Federhalter?“`
- NEW: `Él pregunta: «¿Cómo es el portaplumas?»`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El campo visible contiene alemán sin traducir. La pregunta alemana debe permanecer como contexto alemán, no como texto español.

## ES-KURSS-LESSONS-LV2-0132

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Der Federhalter ist schwarz.`
- CURRENT: `Olga antwortet: „Der Federhalter ist schwarz.“`
- NEW: `Olga responde: «El portaplumas es negro.»`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El campo visible contiene alemán sin traducir en lugar de una traducción española.

## ES-KURSS-LESSONS-LV2-0133

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.`
- CURRENT: `Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.`
- Proposed (audit): `¿Es blanco el portaplumas? No, el portaplumas no es blanco, es negro.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0134

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Marie kommt und nimmt eine Feder.`
- CURRENT: `Marie kommt und nimmt eine Feder.`
- Proposed (audit): `Marie viene y toma una pluma.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0135

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Wie ist die Feder?`
- CURRENT: `Sie fragt: „Wie ist die Feder?“`
- NEW: `Ella pregunta: «¿Cómo es la pluma?»`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El campo visible contiene alemán sin traducir en lugar de una traducción española.

## ES-KURSS-LESSONS-LV2-0136

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Die Feder ist spitz.`
- CURRENT: `Olga antwortet: „Die Feder ist spitz.“`
- NEW: `Olga responde: «La pluma es puntiaguda.»`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El campo visible contiene alemán sin traducir en lugar de una traducción española.

## ES-KURSS-LESSONS-LV2-0137

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.`
- CURRENT: `Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.`
- Proposed (audit): `¿Es roma la pluma? No, la pluma no es roma, es puntiaguda.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0138

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Was legt das Mädchen hin? Es legt die Feder hin.`
- CURRENT: `Was legt das Mädchen hin? Es legt die Feder hin.`
- Proposed (audit): `¿Qué coloca la niña? Coloca la pluma.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0139

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Was nimmst du? Ich nehme ein Messer.`
- CURRENT: `Was nimmst du? Ich nehme ein Messer.`
- Proposed (audit): `¿Qué tomas? Tomo un cuchillo.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0140

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Wie ist das Messer? Das Messer ist scharf.`
- CURRENT: `Wie ist das Messer? Das Messer ist scharf.`
- Proposed (audit): `¿Cómo es el cuchillo? El cuchillo está afilado.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0141

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.`
- CURRENT: `Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.`
- Proposed (audit): `¿Está romo el cuchillo? No, no está romo, está afilado.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0142

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.`
- CURRENT: `Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.`
- Proposed (audit): `¿Qué colocas? Coloco el cuchillo, la pluma y el portaplumas.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0143

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Diálogos/oraciones
- DE: `Dann gehe ich hinaus und arbeite.`
- CURRENT: `Dann gehe ich hinaus und arbeite.`
- Proposed (audit): `Después salgo y trabajo.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0145

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `er nimmt (nimt)`
- CURRENT: `er nimmt (nimt) — emplumado`
- NEW: `er nimmt (nimt) — él toma`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «emplumado» es incorrecta; er nimmt significa «él toma».

## ES-KURSS-LESSONS-LV2-0147

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `einen Federhalter`
- CURRENT: `einen Federhalter — negro`
- NEW: `einen Federhalter — un portaplumas`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «negro» no corresponde a einen Federhalter, que significa «un portaplumas».

## ES-KURSS-LESSONS-LV2-0148

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `zeigen`
- CURRENT: `zeigen — blanco`
- NEW: `zeigen — mostrar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «blanco» no corresponde al verbo zeigen, que significa «mostrar».

## ES-KURSS-LESSONS-LV2-0149

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `schwarz (švarc)`
- CURRENT: `schwarz (švarc) — pluma`
- NEW: `schwarz (švarc) — negro`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «pluma» no corresponde a schwarz, que significa «negro».

## ES-KURSS-LESSONS-LV2-0150

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `weiß (veis)`
- CURRENT: `weiß (veis) — pluma`
- NEW: `weiß (veis) — blanco`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «pluma» no corresponde a weiß, que significa «blanco».

## ES-KURSS-LESSONS-LV2-0152

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `eine Feder`
- CURRENT: `eine Feder — dejar`
- NEW: `eine Feder — una pluma`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «dejar» no corresponde a eine Feder, que significa «una pluma».

## ES-KURSS-LESSONS-LV2-0153

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `spitz (špic)`
- CURRENT: `spitz (špic) — dejar`
- NEW: `spitz (špic) — puntiagudo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «dejar» no corresponde a spitz, que significa «puntiagudo».

## ES-KURSS-LESSONS-LV2-0154

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `hinlegen`
- CURRENT: `hinlegen — niña`
- NEW: `hinlegen — colocar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «niña» no corresponde al verbo hinlegen, que significa «colocar» o «poner».

## ES-KURSS-LESSONS-LV2-0155

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `legt hin`
- CURRENT: `legt hin — cuchillo`
- NEW: `legt hin — coloca`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa «cuchillo» no corresponde a legt hin, que significa «coloca» o «pone».

## ES-KURSS-LESSONS-LV2-0157

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `das Messer`
- CURRENT: `das Messer — agudo`
- NEW: `das Messer — cuchillo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «das Messer» significa «el cuchillo»; «agudo» corresponde a «scharf» en otro registro.

## ES-KURSS-LESSONS-LV2-0158

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `ein Messer`
- CURRENT: `ein Messer — contundente`
- NEW: `ein Messer — un cuchillo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «ein Messer» significa «un cuchillo», no «contundente».

## ES-KURSS-LESSONS-LV2-0159

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `scharf`
- CURRENT: `scharf — luego`
- NEW: `scharf — agudo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: En este contexto, «scharf» significa «agudo» o «afilado», no «luego».

## ES-KURSS-LESSONS-LV2-0160

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `stumpf (štumpf)`
- CURRENT: `stumpf (štumpf) — afuera`
- NEW: `stumpf (štumpf) — contundente`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «stumpf» significa «contundente» o «romo», no «afuera».

## ES-KURSS-LESSONS-LV2-0161

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Palabras
- DE: `dann`
- CURRENT: `dann — sal, ve out`
- Proposed (audit): `dann — entonces`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0162

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Pronunciación
- DE: `hinaus`
- CURRENT: `hinaus — en, -er, -el no están acentuadas, por lo que la e en estos extremos es apenas audible: kommen, nehmen, der Federhalter.`
- NEW: `hinaus — Las terminaciones -en, -er y -el no llevan acento, por lo que la e en estas terminaciones apenas se oye: kommen, nehmen, der Federhalter.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Estos extremos» es una traducción poco natural; conviene hablar de terminaciones. También falta concordancia clara con el sustantivo implícito «terminaciones».

## ES-KURSS-LESSONS-LV2-0167

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- DE: `Nominativ: der Federhalter, die Feder, das Messer.`
- CURRENT: `Nominativ: der Federhalter, die Feder, das Messer.`
- NEW: `Nominativo: der Federhalter, die Feder, das Messer.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0168

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- DE: `Akkusativ: den Federhalter, die Feder, das Messer.`
- CURRENT: `Akkusativ: den Federhalter, die Feder, das Messer.`
- NEW: `Acusativo: den Federhalter, die Feder, das Messer.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0169

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- DE: `Nominativ: ein Federhalter, eine Feder, ein Messer.`
- CURRENT: `Nominativ: ein Federhalter, eine Feder, ein Messer.`
- NEW: `Nominativo: ein Federhalter, eine Feder, ein Messer.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0170

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- DE: `Akkusativ: einen Federhalter, eine Feder, ein Messer.`
- CURRENT: `Akkusativ: einen Federhalter, eine Feder, ein Messer.`
- NEW: `Acusativo: einen Federhalter, eine Feder, ein Messer.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0172

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda.`
- NEW: `En los géneros femenino y neutro, el acusativo es igual que el nominativo. Solo cambia el masculino.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Los hombres» y «cambian de ronda» son traducciones erróneas y alteran el sentido gramatical; debe hablarse del género masculino y del cambio de forma.

## ES-KURSS-LESSONS-LV2-0173

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número.`
- NEW: `Si un adjetivo forma parte del predicado de una oración, no cambia según el caso ni el número.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La formulación actual es tautológica y «en orden» no expresa el concepto gramatical previsto. La redacción propuesta es clara y natural.

## ES-KURSS-LESSONS-LV2-0174

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `Si nicht niega un adjetivo, se coloca delante de la palabra negativa.`
- NEW: `Si nicht niega un adjetivo, se coloca delante del adjetivo.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «La palabra negativa» es impreciso y parece indicar que nicht va delante de una palabra que ya es negativa; debe mencionarse directamente el adjetivo negado.

## ES-KURSS-LESSONS-LV2-0175

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `1Acusativo`
- NEW: `1. Acusativo`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta separación entre el número y el título; la presentación resulta difícil de leer.

## ES-KURSS-LESSONS-LV2-0176

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `2nehmen`
- NEW: `2. nehmen`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta separación entre el número y el término alemán.

## ES-KURSS-LESSONS-LV2-0177

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `3Pronombres`
- NEW: `3. Pronombres`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta separación entre el número y el título.

## ES-KURSS-LESSONS-LV2-0178

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `4Verbos separables`
- NEW: `4. Verbos separables`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta separación entre el número y el título.

## ES-KURSS-LESSONS-LV2-0179

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `5Adjetivos`
- NEW: `5. Adjetivos`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta separación entre el número y el título.

## ES-KURSS-LESSONS-LV2-0180

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- Structure: Gramática
- CURRENT: `6Negación con nicht`
- NEW: `6. Negación con nicht`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Falta separación entre el número y el título; «nicht» puede conservarse como término gramatical alemán.

## ES-KURSS-LESSONS-LV2-0182

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson4TrainingCardsEs[0].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson4TrainingCardsEs[0].front`
- Structure: Lección 4 translate card 1/16
- DE: `Das Mädchen nimmt einen Federhalter.`
- CURRENT: `La niña toma un eje de plumas.`
- NEW: `La niña toma un portaplumas.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Eje de plumas» no corresponde a «Federhalter», que significa «portaplumas» o «portalápices» según el contexto.

## ES-KURSS-LESSONS-LV2-0183

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson4TrainingCardsEs[1].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson4TrainingCardsEs[1].front`
- Structure: Lección 4 translate card 2/16
- DE: `Der Federhalter ist nicht weiß, er ist schwarz.`
- CURRENT: `La pluma no es blanca, es negra.`
- NEW: `El portaplumas no es blanco, es negro.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán se refiere a un «Federhalter», no a una pluma; también deben concordar el género y el adjetivo.

## ES-KURSS-LESSONS-LV2-0184

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson4TrainingCardsEs[3].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson4TrainingCardsEs[3].front`
- Structure: Lección 4 translate card 4/16
- DE: `Wie ist die Feder?`
- CURRENT: `¿Qué es una pluma?`
- NEW: `¿Cómo es la pluma?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Wie ist die Feder?» pregunta por las características de la pluma («cómo es»), no por su identidad o definición.

## ES-KURSS-LESSONS-LV2-0185

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson4TrainingCardsEs[5].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson4TrainingCardsEs[5].front`
- Structure: Lección 4 translate card 6/16
- DE: `Nimmt er ein Messer?`
- CURRENT: `¿Lleva un cuchillo?`
- NEW: `¿Toma un cuchillo?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Nimmt» significa «toma», no «lleva» en este contexto.

## ES-KURSS-LESSONS-LV2-0186

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson4TrainingCardsEs[9].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson4TrainingCardsEs[9].front`
- Structure: Lección 4 translate card 10/16
- DE: `Nein, es ist scharf.`
- CURRENT: `No, es agudo.`
- NEW: `No, está afilado.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Para un cuchillo, «afilado» es la expresión natural en español; «agudo» no es la opción idiomática habitual en este contexto.

## ES-KURSS-LESSONS-LV2-0187

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `lesson4TrainingCardsEs[13].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson4TrainingCardsEs[13].front`
- Structure: Lección 4 translate card 14/16
- DE: `Olga zeigt ein Buch.`
- CURRENT: `Olga muestra el libro.`
- NEW: `Olga muestra un libro.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán usa el artículo indefinido («ein Buch»), mientras que la traducción usa el definido («el libro»).

## ES-KURSS-LESSONS-LV2-0188

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson4TrainingCardsEs[14].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson4TrainingCardsEs[14].front`
- Structure: Lección 4 translate card 15/16
- DE: `Wie ist das Buch?`
- CURRENT: `cual es el libro`
- NEW: `¿Cómo es el libro?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Faltan los signos de interrogación y la tilde de «cuál», pero además «cuál» no traduce «Wie ist»; la pregunta debe ser «¿Cómo es el libro?».

