# ES Kurss — Lección 1 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 45
**LABOT:** 30 | **NELABOT:** 7 | **FALSE_POSITIVE:** 7 | **TECHNICAL_DEFER:** 1
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-STR-L01

- Status: **TECHNICAL_DEFER**
- Track: LEGACY_HTML_SYNC
- Category: STRUCTURE
- Severity: HIGH
- Source: structure
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson1`
- CURRENT: `inline:8944`
- Proposed (audit): `(align with LV MASTER structure)`
- Owner decision: TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- Pamatojums: Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

## ES-KURSS-LESSONS-DET-0001

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 1
- CURRENT: `ellos / tú vienes`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- Pamatojums: Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

## ES-KURSS-LESSONS-DET-0002

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].title`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente
- DE: `♟gehen`
- CURRENT: `♟gehen — go`
- NEW: `♟gehen — ir`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: replace English gloss / LV phonetic diacritics with Spanish equivalents.
- Pamatojums: EN gloss or LV phonetic markers in ES field; DE headword preserved.

## ES-KURSS-LESSONS-DET-0003

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 2
- CURRENT: `ellos / tú vas`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- Pamatojums: Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

## ES-KURSS-LESSONS-DET-0004

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 3
- CURRENT: `ellos / Tú estás`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- Pamatojums: Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

## ES-KURSS-LESSONS-DET-0005

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 4
- CURRENT: `ellos / tú cantas`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- Pamatojums: Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

## ES-KURSS-LESSONS-DET-0006

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `wir (vīr)`
- CURRENT: `wir (vīr) — we`
- NEW: `wir (vir) — nosotros`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: replace English gloss / LV phonetic diacritics with Spanish equivalents.
- Pamatojums: EN gloss or LV phonetic markers in ES field; DE headword preserved.

## ES-KURSS-LESSONS-DET-0007

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `Vārdā “wir” burts i tiek izrunāts gari.`
- CURRENT: `Vārdā “wir” burts i tiek izrunāts gari.`
- NEW: `En la palabra “wir”, la letra i se pronuncia larga.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0008

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `gehen (gē`
- CURRENT: `gehen (gē-en) - ir`
- NEW: `gehen (gē-en) - ir`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0009

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `stehen (štē`
- CURRENT: `stehen (štē-en) - stand`
- NEW: `stehen (ste-en) — estar de pie`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: replace English gloss / LV phonetic diacritics with Spanish equivalents.
- Pamatojums: EN gloss or LV phonetic markers in ES field; DE headword preserved.

## ES-KURSS-LESSONS-DET-0010

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `du (dū) kommst`
- CURRENT: `du (dū) kommst — tú vienes`
- NEW: `du (dū) kommst — tú vienes`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0011

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `er (ēr) kommt`
- CURRENT: `er (ēr) kommt — él viene`
- NEW: `er (ēr) kommt — él viene`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0012

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `sie (zī) kommt`
- CURRENT: `sie (zī) kommt — ella viene`
- NEW: `sie (zī) kommt — ella viene`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0013

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `wer (vēr)`
- CURRENT: `wer (vēr) — ¿qué?`
- NEW: `wer (vēr) — ¿qué?`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0014

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `ja (jā)`
- CURRENT: `ja (jā) — sí`
- NEW: `ja (jā) — sí`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0015

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Pronunciación
- DE: `Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.`
- CURRENT: `Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.`
- NEW: `En las lecciones se proporciona la pronunciación correcta de las palabras, representada con letras letonas.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0016

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Pronunciación
- DE: `Wir (vīr)`
- CURRENT: `Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga.`
- NEW: `Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0017

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- DE: `Latviešu valodā: Tu nāc. Vai tu nāc?`
- CURRENT: `Latviešu valodā: Tu nāc. Vai tu nāc?`
- NEW: `Du kommst. — Vienes. Kommst du? — ¿Vienes?`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0018

- Status: **LABOT**
- Track: LINGUISTIC
- Category: NAMES
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `lesson1TrainingCardsEs[10].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson1TrainingCardsEs[10].front`
- Structure: Lección 1 translate card 11/11
- DE: `Albert und Marta kommen und gehen.`
- CURRENT: `Albert y Martha van y vienen.`
- NEW: `Albert y Marta van y vienen.`
- Owner decision: LABOT: DE canonical name Marta — align ES spelling.
- Pamatojums: DE source uses Marta; ES should match canonical name.

## ES-KURSS-LESSONS-DET-0019

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

## ES-KURSS-LESSONS-LV2-0001

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 1
- CURRENT: `nosotros ven`
- NEW: `nosotros venimos`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La forma verbal no concuerda con el sujeto «nosotros»; la primera persona plural de «venir» es «venimos».

## ES-KURSS-LESSONS-LV2-0002

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 1
- CURRENT: `tú vienes`
- NEW: `vosotros venís`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La forma corresponde a la segunda persona plural alemana (ihr), no a «tú»; además, esta entrada duplica la forma de la segunda persona singular.

## ES-KURSS-LESSONS-LV2-0005

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 2
- CURRENT: `he / ella va`
- NEW: `él / ella va`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «he» es un error ortográfico/ de texto; el pronombre masculino correcto es «él».

## ES-KURSS-LESSONS-LV2-0006

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 2
- CURRENT: `tú ejat`
- NEW: `vosotros vais`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: «ejat» no es una forma española y parece texto extranjero o corrupto. La entrada debe expresar la segunda persona plural correspondiente.

## ES-KURSS-LESSONS-LV2-0008

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].title`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente
- DE: `♟stehen`
- CURRENT: `♟stehen — pararse`
- NEW: `♟stehen — estar de pie`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «pararse» suele significar ponerse de pie o detenerse, mientras que «stehen» en este paradigma significa «estar de pie».

## ES-KURSS-LESSONS-LV2-0009

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 3
- CURRENT: `I stand`
- Proposed (audit): `yo estoy de pie`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0010

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 3
- CURRENT: `tú estás de pie`
- NEW: `vosotros estáis de pie`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Esta posición corresponde a la segunda persona plural alemana (ihr), pero el texto usa el pronombre singular «tú».

## ES-KURSS-LESSONS-LV2-0012

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].title`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente
- DE: `♟singen`
- CURRENT: `♟singen — to canta`
- Proposed (audit): `♟singen — cantar`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0013

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Verbos en presente / verb card 4
- CURRENT: `tú cantas`
- NEW: `vosotros cantáis`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La forma corresponde a la segunda persona plural alemana (ihr), no a «tú»; «vosotros cantáis» mantiene la concordancia.

## ES-KURSS-LESSONS-LV2-0015

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → lesson1-info[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- CURRENT: `iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas. Esto también debería seguirse en futuras conferencias.`
- NEW: `La pronunciación aproximada de las palabras se indica entre paréntesis con letras letonas. Esto también debería seguirse en futuras lecciones.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Contiene el error tipográfico «iEl La» y «conferencias» no es natural en el contexto de un curso; debe decir «lecciones».

## ES-KURSS-LESSONS-LV2-0019

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Palabras
- DE: `singen (zingen)`
- CURRENT: `singen (zingen) — canta`
- NEW: `singen (zingen) — cantar`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Las demás entradas presentan los verbos en infinitivo; «canta» es una forma conjugada y rompe la coherencia terminológica.

## ES-KURSS-LESSONS-LV2-0023

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- DE: `ich →`
- CURRENT: `ich → -ich komme`
- NEW: `ich → ich komme`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Hay un guion espurio pegado al ejemplo alemán, que altera la presentación de la correspondencia.

## ES-KURSS-LESSONS-LV2-0024

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- DE: `du →`
- CURRENT: `du → -du kommst`
- NEW: `du → du kommst`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Hay un guion espurio pegado al ejemplo alemán.

## ES-KURSS-LESSONS-LV2-0025

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- DE: `er / sie →`
- CURRENT: `er / sie → -er kommt`
- NEW: `er / sie → er kommt`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Hay un guion espurio pegado al ejemplo alemán.

## ES-KURSS-LESSONS-LV2-0026

- Status: **LABOT**
- Track: LINGUISTIC
- Category: STRUCTURE
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- DE: `wir →`
- CURRENT: `wir → -wir kommen`
- NEW: `wir → wir kommen`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: Hay un guion espurio pegado al ejemplo alemán.

## ES-KURSS-LESSONS-LV2-0027

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- DE: `ihr →`
- CURRENT: `ihr → -En letón:`
- NEW: `ihr → ihr kommt`
- Owner decision: LABOT: replace Latvian remnant with Spanish per audit proposal.
- Pamatojums: LV text confirmed in ES learner-facing field; DE context checked.

## ES-KURSS-LESSONS-LV2-0028

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: CRITICAL
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- DE: `sie →`
- CURRENT: `sie → -Alemán en:`
- NEW: `sie → sie kommen`
- Owner decision: LABOT: replace Latvian remnant with Spanish per audit proposal.
- Pamatojums: LV text confirmed in ES learner-facing field; DE context checked.

## ES-KURSS-LESSONS-LV2-0030

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- CURRENT: `♟Presente terminaciones`
- NEW: `♟ Terminaciones del presente`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El orden de las palabras no es natural en español; debe decir «Terminaciones del presente».

## ES-KURSS-LESSONS-LV2-0031

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- CURRENT: `?Oraciones de preguntas`
- NEW: `?Oraciones interrogativas`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0032

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- CURRENT: `♣Diferencia de persona`
- NEW: `♣Diferencias según la persona`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Diferencia de persona» suena poco natural y ambiguo como encabezado gramatical.

## ES-KURSS-LESSONS-LV2-0033

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → ending-info[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- CURRENT: `Eliminar -en de las formas base del verbo y agrega la terminación. Ejemplo: kommen → komm + terminación kommenforma base`
- NEW: `Eliminar -en de la forma básica del verbo y añadir la terminación. Ejemplo: kommen → komm + terminación kommen: forma básica`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»), «formas base» no es la formulación más natural y la última línea carece de espacio y separador.

## ES-KURSS-LESSONS-LV2-0034

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → ending-info[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- Structure: Gramática
- CURRENT: `Elimina -en del infinitivo y añade la terminación personal. Ejemplo: kommen → komm- + terminación.`
- NEW: `Eliminar -en de la forma básica del verbo y añadir la terminación.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»); además, «forma básica» es más natural que «formas base» en este contexto.

## ES-KURSS-LESSONS-LV2-0035

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: LOW
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson1TrainingCardsEs[0].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson1TrainingCardsEs[0].front`
- Structure: Lección 1 translate card 1/11
- DE: `Kommst du?`
- CURRENT: `¿vienes?`
- NEW: `¿Vienes?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Como oración independiente, debe escribirse con mayúscula inicial.

## ES-KURSS-LESSONS-LV2-0036

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `lesson1TrainingCardsEs[5].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson1TrainingCardsEs[5].front`
- Structure: Lección 1 translate card 6/11
- DE: `Ja, sie gehen.`
- CURRENT: `Sí, van.`
- NEW: `Sí, se van.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La respuesta no conserva el valor pronominal de «Se van?»; «Sí, van» sugiere que van a algún lugar, no necesariamente que se marchan.

## ES-KURSS-LESSONS-LV2-0037

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson1TrainingCardsEs[9].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson1TrainingCardsEs[9].front`
- Structure: Lección 1 translate card 10/11
- DE: `Geht ihr?`
- CURRENT: `Vas a ir`
- NEW: `¿Vais?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El texto actual es una afirmación en segunda persona singular y expresa una perífrasis de futuro, mientras que el contexto alemán es una pregunta dirigida a varias personas.

