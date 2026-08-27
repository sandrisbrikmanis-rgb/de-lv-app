# ES Kurss — Lección 10 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 24
**LABOT:** 7 | **NELABOT:** 13 | **FALSE_POSITIVE:** 4 | **TECHNICAL_DEFER:** 0
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-DET-0165

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[0].title → kurss.sections.dialogues`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.sections.dialogues`
- Structure: Accordion section 1; raw: Diálogo / frases
- CURRENT: `Diálogos / frases`
- NEW: `Diálogos / frases`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0166

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[2]`
- Structure: Section[1] Palabras / items[2]
- DE: `du bist`
- CURRENT: `du bist — tú eres / estás`
- NEW: `du bist — tú eres / estás`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0167

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]`
- Structure: Section[1] Palabras / items[4]
- DE: `ihr seid (īr zeit)`
- CURRENT: `ihr seid (īr zeit) — vosotros sois / estáis`
- NEW: `ihr seid (īr zeit) — vosotros sois / estáis`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0169

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]`
- Structure: Section[1] Palabras / items[14]
- DE: `der Knabe (dēr knābe)`
- CURRENT: `der Knabe (dēr knābe) — un niño`
- NEW: `der Knabe (dēr knābe) — un niño`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0170

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]`
- Structure: Section[1] Palabras / items[17]
- DE: `der Großvater (dēr grōsfāter)`
- CURRENT: `der Großvater (dēr grōsfāter) — abuelo`
- NEW: `der Großvater (dēr grōsfāter) — abuelo`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0171

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]`
- Structure: Section[1] Palabras / items[22]
- DE: `das Jahr (jār)`
- CURRENT: `das Jahr (jār) — año`
- NEW: `das Jahr (jār) — año`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0172

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]`
- Structure: Section[2] Pronunciación / items[4]
- DE: `Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel), Schüler (šūler), Bücher (būcher).`
- CURRENT: `Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel), Schüler (šūler), Bücher (būcher).`
- NEW: `Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel), Schüler (šūler), Bücher (būcher).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0173

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
- Structure: Section[2] Pronunciación / items[7]
- DE: `Pronuncia correctamente: der Großvater (dēr grōsfāter).`
- CURRENT: `Pronuncia correctamente: der Großvater (dēr grōsfāter).`
- NEW: `Pronuncia correctamente: der Großvater (dēr grōsfāter).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0174

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
- Structure: Section[2] Pronunciación / items[9]
- DE: `La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.`
- CURRENT: `La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.`
- NEW: `La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0175

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `kurss.sections.dialogues (section title display)`
- File: `languages/es/ui.js`
- Field: `LANGUAGE_UI_STRINGS.kurss.sections.dialogues`
- Structure: Section raw title: Diálogo / frases
- CURRENT: `Diálogos / frases`
- NEW: `Diálogos / frases`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0176

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

## ES-KURSS-LESSONS-DET-0177

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

## ES-KURSS-LESSONS-DET-0178

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

## ES-KURSS-LESSONS-LV2-0346

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.intro`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.intro`
- Structure: Lección 10 intro paragraph
- CURRENT: `Décima conferencia: sein, können, formas de mando, salud, edad y profesiones.`
- NEW: `Lección décima: sein, können, formas del imperativo, salud, edad y profesiones.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Conferencia» no corresponde al contexto de una lección y «formas de mando» es una traducción poco natural e imprecisa de las formas del imperativo.

## ES-KURSS-LESSONS-LV2-0349

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[11]`
- Structure: Section[1] Palabras / items[11]
- DE: `sei gesund`
- CURRENT: `sei gesund — esi vesels!`
- Proposed (audit): `sei gesund — ¡mantente sano!`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0350

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[12]`
- Structure: Section[1] Palabras / items[12]
- DE: `seid gesund`
- CURRENT: `seid gesund — esiet veseli!`
- Proposed (audit): `seid gesund — ¡manteneos sanos!`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0351

- Status: **LABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[16]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[16]`
- Structure: Section[1] Palabras / items[16]
- DE: `die Frau`
- CURRENT: `die Frau — mujer / esposa`
- NEW: `die Frau — mujer o esposa, según el contexto`
- Owner decision: LABOT: reduce to single main translation per audit proposal.
- Pamatojums: La barra combina dos significados distintos sin indicar que la elección depende del contexto.

## ES-KURSS-LESSONS-LV2-0352

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[0].text`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[0].text`
- Structure: Section[3] Gramática / items[0]
- CURRENT: `Verbo auxiliar sein - estar desordenado. Por tanto, hay que aprenderlo bien.`
- NEW: `El verbo auxiliar sein («ser/estar») es irregular. Por tanto, hay que aprenderlo bien.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Desordenado» no significa «irregular» en este contexto y además falta indicar el significado básico de sein como «ser/estar».

## ES-KURSS-LESSONS-LV2-0353

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[3].text`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[3].text`
- Structure: Section[3] Gramática / items[3]
- CURRENT: `Asimismo, el verbo auxiliar können (poder) tiene una declinación irregular.`
- NEW: `Asimismo, el verbo modal können («poder») tiene una conjugación irregular.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0354

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[0].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[0].lv`
- Structure: Section[4] Traducir / card[0]
- DE: `Bist du gesund?`
- CURRENT: `Vai tu esi vesels?`
- Proposed (audit): `¿Estás sano?`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0355

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[2].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[2].lv`
- Structure: Section[4] Traducir / card[2]
- DE: `Ist Paul gesund?`
- CURRENT: `Vai Paul ir vasijas?`
- Proposed (audit): `¿Está Paul sano?`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0356

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[9].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[9].lv`
- Structure: Section[4] Traducir / card[9]
- DE: `Wie alt ist Adolf?`
- CURRENT: `¿Cik vecs ir Adolfs?`
- NEW: `¿Cuántos años tiene Adolf?`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: La pregunta está en letón, no en español.

## ES-KURSS-LESSONS-LV2-0357

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[11].lv`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[11].lv`
- Structure: Section[4] Traducir / card[11]
- DE: `Wer bist du?`
- CURRENT: `¿Kas tu esi?`
- NEW: `¿Quién eres?`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: La pregunta está en letón, no en español.

## ES-KURSS-LESSONS-LV2-0358

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
- NEW: `¡Usa la conjugación correcta y transforma la frase al plural!`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Pon la conjugación» y, especialmente, «hazlo» resultan poco naturales y vagos en una instrucción didáctica.

