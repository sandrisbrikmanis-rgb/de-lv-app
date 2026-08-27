# ES Kurss — Lección 5 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 32
**LABOT:** 19 | **NELABOT:** 8 | **FALSE_POSITIVE:** 4 | **TECHNICAL_DEFER:** 1
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-STR-L05

- Status: **TECHNICAL_DEFER**
- Track: LEGACY_HTML_SYNC
- Category: STRUCTURE
- Severity: HIGH
- Source: structure
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson5`
- CURRENT: `inline:6627`
- Proposed (audit): `(align with LV MASTER structure)`
- Owner decision: TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- Pamatojums: Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

## ES-KURSS-LESSONS-DET-0061

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Legacy accordion summary
- CURRENT: `Diálogos/oraciones`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- Pamatojums: Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

## ES-KURSS-LESSONS-DET-0062

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `fragen (frāgen)`
- CURRENT: `fragen (frāgen) — preguntar`
- NEW: `fragen (frāgen) — preguntar`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0063

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `der Lehrer (dēr lērer)`
- CURRENT: `der Lehrer (dēr lērer) — profesor`
- NEW: `der Lehrer (dēr lērer) — profesor`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0064

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `gut (gūt)`
- CURRENT: `gut (gūt) — bueno`
- NEW: `gut (gūt) — bueno`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0065

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `wen (vēn)`
- CURRENT: `wen (vēn) — qué`
- NEW: `wen (vēn) — qué`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0066

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `der Schüler (šūler)`
- CURRENT: `der Schüler (šūler) — estudiante`
- NEW: `der Schüler (šūler) — estudiante`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0067

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `artig (ārtich)`
- CURRENT: `artig (ārtich) — educado`
- NEW: `artig (ārtich) — educado`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0068

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `lieben (līben)`
- CURRENT: `lieben (līben) — amar`
- NEW: `lieben (līben) — amar`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0069

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[18]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `der Vater (fāter)`
- CURRENT: `der Vater (fāter) — padre`
- NEW: `der Vater (fāter) — padre`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0070

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Pronunciación
- DE: `tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).`
- CURRENT: `tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).`
- NEW: `tz representa un sonido z doble y se pronuncia como z: sitzen (zicen).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0071

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Pronunciación
- DE: `v vācu vārdos izrunā kā f: der Vater (fāter).`
- CURRENT: `v vācu vārdos izrunā kā f: der Vater (fāter).`
- NEW: `La v en las palabras alemanas se pronuncia como f: der Vater (fāter).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0072

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Pronunciación
- DE: `ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).`
- CURRENT: `ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).`
- NEW: `ß se llama Eszett y se pronuncia como la s letona: groß (grōs), weiß (veis).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0073

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- DE: `Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.`
- CURRENT: `Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.`
- NEW: `En alemán, en nominativo, la pregunta es wer? para las personas y was? para los objetos.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0074

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- DE: `Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.`
- CURRENT: `Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.`
- NEW: `En acusativo, la pregunta es wen? para las personas y was? para los objetos.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0075

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- DE: `er/sie/es sitzt`
- CURRENT: `er/sie/es sitzt`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- Pamatojums: Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

## ES-KURSS-LESSONS-DET-0076

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- DE: `Daudz sieviešu kārtas vārdu atvasina ar galotni`
- CURRENT: `Daudz sieviešu kārtas vārdu atvasina ar galotni -die Lehrerin`
- NEW: `Muchos sustantivos femeninos se forman con la terminación -die Lehrerin.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0077

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- DE: `Stāstāmā teikumā darbības vārds stāv otrā vietā.`
- CURRENT: `Stāstāmā teikumā darbības vārds stāv otrā vietā.`
- NEW: `En una oración enunciativa, el verbo ocupa el segundo lugar.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0078

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

## ES-KURSS-LESSONS-LV2-0190

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `loben`
- CURRENT: `loben — elogio`
- NEW: `loben — elogiar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Loben» es un verbo («elogiar»), mientras que «elogio» es un sustantivo.

## ES-KURSS-LESSONS-LV2-0191

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `tadeln`
- CURRENT: `tadeln — pelt`
- Proposed (audit): `tadeln — reprender`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0192

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Palabras
- DE: `oder (ōder)`
- CURRENT: `oder (ōder) — or`
- NEW: `oder (ōder) — o`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: «or» es inglés; la traducción española de «oder» es «o».

## ES-KURSS-LESSONS-LV2-0200

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- CURRENT: `En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?.`
- NEW: `En español, el nominativo responde a la pregunta «¿quién?» y el acusativo responde a la pregunta «¿qué?»`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Hay un punto incorrecto después del signo de cierre de interrogación. También conviene delimitar las preguntas como citas dentro de la oración.

## ES-KURSS-LESSONS-LV2-0201

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- CURRENT: `finalización -in`
- NEW: `Sufijo -in`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0202

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: LOW
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- Structure: Gramática
- CURRENT: `Lugar del verbo`
- NEW: `Posición del verbo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Posición del verbo» es la formulación más natural en español para referirse a su ubicación en la oración.

## ES-KURSS-LESSONS-LV2-0203

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson5TrainingCardsEs[0].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson5TrainingCardsEs[0].front`
- Structure: Lección 5 translate card 1/16
- DE: `Wen liebt der Vater?`
- CURRENT: `¿Qué ama el padre?`
- NEW: `¿A quién ama el padre?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán «Wen» pregunta por una persona en acusativo, no por una cosa; en español corresponde «a quién».

## ES-KURSS-LESSONS-LV2-0204

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson5TrainingCardsEs[1].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson5TrainingCardsEs[1].front`
- Structure: Lección 5 translate card 2/16
- DE: `Wen lobt die Lehrerin?`
- CURRENT: `¿Qué elogia el maestro?`
- NEW: `¿A quién elogia la maestra?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Wen» significa «a quién», no «qué», y «die Lehrerin» es «la maestra», no «el maestro».

## ES-KURSS-LESSONS-LV2-0205

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson5TrainingCardsEs[2].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson5TrainingCardsEs[2].front`
- Structure: Lección 5 translate card 3/16
- DE: `Was nimmst du?`
- CURRENT: `que tomas`
- NEW: `¿Qué tomas?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El texto pretende ser una pregunta, pero carece de signos de interrogación y de mayúscula inicial.

## ES-KURSS-LESSONS-LV2-0206

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson5TrainingCardsEs[4].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson5TrainingCardsEs[4].front`
- Structure: Lección 5 translate card 5/16
- DE: `Wen tadelt der Lehrer?`
- CURRENT: `¿Qué gana un maestro?`
- NEW: `¿A quién reprende el maestro?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La frase no corresponde al alemán «Wen tadelt der Lehrer?», que pregunta a quién reprende el maestro.

## ES-KURSS-LESSONS-LV2-0207

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson5TrainingCardsEs[10].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson5TrainingCardsEs[10].front`
- Structure: Lección 5 translate card 11/16
- DE: `Das Mädchen nimmt den Federhalter, die Feder und das Messer.`
- CURRENT: `La niña toma una pluma, una pluma y un cuchillo.`
- NEW: `La niña toma el portaplumas, la pluma y el cuchillo.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán distingue «Federhalter» (portaplumas) de «Feder» (pluma), pero el español repite «pluma» y pierde esa distinción léxica.

## ES-KURSS-LESSONS-LV2-0208

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `lesson5TrainingCardsEs[11].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson5TrainingCardsEs[11].front`
- Structure: Lección 5 translate card 12/16
- DE: `Sie legt das Messer und den Federhalter hin.`
- CURRENT: `Ella deja el cuchillo y la pluma.`
- NEW: `Ella deja el cuchillo y el portaplumas.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Federhalter» significa «portaplumas», no «pluma»; la traducción actual cambia el objeto mencionado.

## ES-KURSS-LESSONS-LV2-0209

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson5TrainingCardsEs[14].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson5TrainingCardsEs[14].front`
- Structure: Lección 5 translate card 15/16
- DE: `Das Kind ist artig.`
- CURRENT: `El niño es hablador.`
- NEW: `El niño es bien educado.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán «artig» significa «bien educado» o «obediente», no «hablador».

