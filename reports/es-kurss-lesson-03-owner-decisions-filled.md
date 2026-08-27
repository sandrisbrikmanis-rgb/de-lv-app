# ES Kurss — Lección 3 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 70
**LABOT:** 54 | **NELABOT:** 3 | **FALSE_POSITIVE:** 12 | **TECHNICAL_DEFER:** 1
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-STR-L03

- Status: **TECHNICAL_DEFER**
- Track: LEGACY_HTML_SYNC
- Category: STRUCTURE
- Severity: HIGH
- Source: structure
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson3`
- CURRENT: `inline:7121`
- Proposed (audit): `(align with LV MASTER structure)`
- Owner decision: TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- Pamatojums: Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

## ES-KURSS-LESSONS-DET-0026

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Legacy accordion summary
- CURRENT: `Diálogos/oraciones`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- Pamatojums: Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

## ES-KURSS-LESSONS-DET-0027

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `eine Bank`
- CURRENT: `eine Bank — ¿hay/hay un libro aquí?`
- NEW: `eine Bank — ¿hay/hay un libro aquí?`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0028

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Pronunciación
- DE: `niedrig`
- CURRENT: `niedrig — El sonido ī largo en alemán está representado por ie: liegen (līgen), hier (hīr), wie (vī).`
- NEW: `niedrig — En alemán, el sonido largo ī se representa mediante ie: liegen (līgen), hier (hīr), wie (vī).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0029

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Pronunciación
- DE: `Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).`
- CURRENT: `Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).`
- NEW: `En alemán, el sonido largo ī se representa mediante ie: liegen (līgen), hier (hīr), wie (vī).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0030

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Pronunciación
- DE: `ck ir divkāršs k: dick (dikk).`
- CURRENT: `ck ir divkāršs k: dick (dikk).`
- NEW: `ck representa una k doble: dick (dikk).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0031

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Īpašības un apstākļu vārdos galotne`
- CURRENT: `Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas.`
- NEW: `En los adjetivos y adverbios, la terminación es -e.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0032

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Ar wer? jautā pēc personām.`
- CURRENT: `Ar wer? jautā pēc personām.`
- NEW: `Con wer? se pregunta por personas.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0033

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Ar was? jautā pēc priekšmetiem.`
- CURRENT: `Ar was? jautā pēc priekšmetiem.`
- NEW: `Con was? se pregunta por objetos.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0034

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `vīriešu kārta`
- CURRENT: `vīriešu kārta — das`
- NEW: `masculino — das`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0035

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `sieviešu kārta`
- CURRENT: `sieviešu kārta — Plural definido el article para las tres rondas es morir.`
- NEW: `femenino — die`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0037

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `vidējā kārta`
- CURRENT: `vidējā kārta — die Tische`
- NEW: `neutro — die Tische`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0038

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.`
- CURRENT: `Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.`
- NEW: `En plural, el artículo definido para los tres géneros es die.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0039

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `vīriešu kārta`
- CURRENT: `vīriešu kārta — ein`
- NEW: `masculino — ein`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0040

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `sieviešu kārta`
- CURRENT: `sieviešu kārta — El indefinido el article no tiene plural.`
- NEW: `femenino — El artículo indefinido no tiene plural.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: correct ES gloss / pronunciation rule per DE source and LV structural template.
- Pamatojums: Semantic or pronunciation-section correction verified against DE/LV master.

## ES-KURSS-LESSONS-DET-0042

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `vidējā kārta`
- CURRENT: `vidējā kārta — Tische`
- NEW: `neutro — Tische`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0043

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[16]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Nenoteiktajam artikulam daudzskaitļa nav.`
- CURRENT: `Nenoteiktajam artikulam daudzskaitļa nav.`
- NEW: `El artículo indefinido no tiene plural.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0044

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[21]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv: der Tisch steht die Bank steht`
- CURRENT: `Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv: der Tisch steht die Bank steht`
- NEW: `En alemán, cuando se habla de objetos que están en posición vertical, se dice que el objeto está de pie: der Tisch steht die Bank steht`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0045

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente.`
- NEW: `El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente.`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0046

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `5stehen / liegen / hängen`
- NEW: `5stehen / liegen / hängen`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- Pamatojums: Verified in lesson context; acceptable as-is.

## ES-KURSS-LESSONS-DET-0047

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

## ES-KURSS-LESSONS-LV2-0064

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `wer`
- CURRENT: `wer — aquí`
- NEW: `wer — quién`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán «wer» significa «quién»; «aquí» corresponde a «hier» y no al término mostrado.

## ES-KURSS-LESSONS-LV2-0065

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `was`
- CURRENT: `was — allí`
- NEW: `was — qué`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «was» significa «qué», no «allí».

## ES-KURSS-LESSONS-LV2-0066

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `hier`
- CURRENT: `hier — der Tisch table`
- NEW: `hier — aquí`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «hier» significa «aquí»; además, «table» es un resto en inglés y no corresponde al ejemplo.

## ES-KURSS-LESSONS-LV2-0067

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `dort`
- CURRENT: `dort — mesa`
- NEW: `dort — allí`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «dort» significa «allí», no «mesa».

## ES-KURSS-LESSONS-LV2-0068

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `der Tisch`
- CURRENT: `der Tisch — banco`
- NEW: `der Tisch — la mesa`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «der Tisch» significa «la mesa», no «banco».

## ES-KURSS-LESSONS-LV2-0069

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `ein Tisch`
- CURRENT: `ein Tisch — banco`
- NEW: `ein Tisch — una mesa`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «ein Tisch» significa «una mesa», no «banco».

## ES-KURSS-LESSONS-LV2-0070

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `die Bank`
- CURRENT: `die Bank — tumbado`
- NEW: `die Bank — el banco`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «die Bank» significa «el banco»; «tumbado» corresponde a otro significado.

## ES-KURSS-LESSONS-LV2-0072

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `liegen`
- CURRENT: `liegen — un libro`
- NEW: `liegen — estar tumbado`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «liegen» es un verbo; significa «estar tumbado» o «estar colocado», no «un libro».

## ES-KURSS-LESSONS-LV2-0073

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `liegt hier ein Buch?`
- CURRENT: `liegt hier ein Buch? — un libro`
- NEW: `liegt hier ein Buch? — ¿Hay un libro aquí?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La traducción actual es incompleta y no traduce la pregunta alemana.

## ES-KURSS-LESSONS-LV2-0074

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `das Buch`
- CURRENT: `das Buch — hang`
- Proposed (audit): `das Buch — el libro`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0075

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `ein Buch`
- CURRENT: `ein Buch — imagen`
- NEW: `ein Buch — un libro`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «ein Buch» significa «un libro», no «imagen».

## ES-KURSS-LESSONS-LV2-0076

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `hängen`
- CURRENT: `hängen — imagen`
- NEW: `hängen — estar colgado`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «hängen» significa «estar colgado» o «colgar», no «imagen».

## ES-KURSS-LESSONS-LV2-0077

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `das Bild`
- CURRENT: `das Bild — pizarra`
- NEW: `das Bild — la imagen`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «das Bild» significa «la imagen» o «el cuadro», no «pizarra».

## ES-KURSS-LESSONS-LV2-0078

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `ein Bild`
- CURRENT: `ein Bild — pizarra`
- NEW: `ein Bild — una imagen`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «ein Bild» significa «una imagen», no «pizarra».

## ES-KURSS-LESSONS-LV2-0079

- Status: **LABOT**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `die Tafel`
- CURRENT: `die Tafel — alguien, qué`
- NEW: `die Tafel — la pizarra`
- Owner decision: LABOT: reduce to single main translation per audit proposal.
- Pamatojums: La traducción no corresponde a «die Tafel» y combina dos significados ajenos al ejemplo.

## ES-KURSS-LESSONS-LV2-0080

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `eine Tafel`
- CURRENT: `eine Tafel — es`
- NEW: `eine Tafel — una pizarra`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «eine Tafel» significa «una pizarra», no «es».

## ES-KURSS-LESSONS-LV2-0081

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `wie`
- CURRENT: `wie — grueso, gordo`
- NEW: `wie — cómo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «wie» significa «cómo»; «grueso» y «gordo» no corresponden a este ejemplo.

## ES-KURSS-LESSONS-LV2-0082

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[18]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `ist`
- CURRENT: `ist — cuaderno`
- NEW: `ist — es`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «ist» es la forma de tercera persona singular de «sein» y significa «es» o «está», no «cuaderno».

## ES-KURSS-LESSONS-LV2-0083

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[19]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `dick`
- CURRENT: `dick — cuaderno`
- NEW: `dick — grueso`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «dick» significa «grueso» o «gordo», no «cuaderno».

## ES-KURSS-LESSONS-LV2-0084

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[20]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `das Heft`
- CURRENT: `das Heft — delgado, delgado`
- NEW: `das Heft — el cuaderno`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «das Heft» significa «el cuaderno»; la traducción actual es incorrecta y repite innecesariamente el adjetivo.

## ES-KURSS-LESSONS-LV2-0085

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[21]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `ein Heft`
- CURRENT: `ein Heft — bajo`
- NEW: `ein Heft — un cuaderno`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «ein Heft» significa «un cuaderno», no «bajo».

## ES-KURSS-LESSONS-LV2-0086

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[22]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `dünn`
- CURRENT: `dünn — alto`
- NEW: `dünn — delgado`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «dünn» significa «delgado» o «fino», no «alto».

## ES-KURSS-LESSONS-LV2-0087

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → course-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Palabras
- DE: `wer`
- CURRENT: `wer - qué`
- NEW: `wer — quién`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «wer» pregunta por personas y significa «quién», no «qué».

## ES-KURSS-LESSONS-LV2-0091

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Ja galotne`
- CURRENT: `Ja galotne -¿Ar qué? pregunta por temas.`
- NEW: `Si la terminación es -…`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: El campo mezcla letón con español y está truncado; la frase resultante no es una explicación gramatical válida.

## ES-KURSS-LESSONS-LV2-0098

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `der Tisch`
- CURRENT: `der Tisch — die Hefte`
- Proposed (audit): `la mesa — los cuadernos`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0099

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `die Bank`
- CURRENT: `die Bank — ein`
- Proposed (audit): `el banco — un`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0100

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `das Heft`
- CURRENT: `das Heft — eine`
- Proposed (audit): `el cuaderno — una`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0105

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `ein Tisch`
- CURRENT: `ein Tisch — Hans spielt, aber Marie singt.`
- Proposed (audit): `una mesa — Hans juega, pero Marie canta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0106

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[18]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `ein Heft`
- CURRENT: `ein Heft — Hier hängt eine Karte.`
- Proposed (audit): `un cuaderno — Aquí cuelga un mapa.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0107

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[19]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Hans spielt, aber Marie singt.`
- CURRENT: `Hans spielt, aber Marie singt.`
- Proposed (audit): `Hans juega, pero Marie canta.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0108

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[20]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Hier hängt eine Karte.`
- CURRENT: `Hier hängt eine Karte.`
- Proposed (audit): `Aquí cuelga un mapa.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0111

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_TERMINOLOGY
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida.`
- NEW: `En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce.`
- Owner decision: LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- Pamatojums: ES grammar terminology must use artículo, not English article.

## ES-KURSS-LESSONS-LV2-0112

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: LOW
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `Sin artículos delante de nombres propios.`
- NEW: `No se usan artículos delante de los nombres propios.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La versión actual es un fragmento telegráfico; la propuesta es más natural como nota gramatical.

## ES-KURSS-LESSONS-LV2-0113

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `En una oración narrativa, el verbo ocupa el segundo lugar.`
- NEW: `En una oración enunciativa, el verbo ocupa la segunda posición.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Narrativa» no corresponde al sentido gramatical de una oración declarativa/enunciativa.

## ES-KURSS-LESSONS-LV2-0114

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `1Sujeto de la oración`
- NEW: `1. Sujeto de la oración`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Falta un espacio o separador después del número.

## ES-KURSS-LESSONS-LV2-0115

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `2Artículos`
- NEW: `2. Artículos`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Falta un espacio o separador después del número.

## ES-KURSS-LESSONS-LV2-0116

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `3Sustantivos propios`
- NEW: `3. Sustantivos propios`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Falta un espacio o separador después del número.

## ES-KURSS-LESSONS-LV2-0117

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- CURRENT: `4Lugar del verbo`
- NEW: `4. Lugar del verbo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Falta un espacio o separador después del número.

## ES-KURSS-LESSONS-LV2-0118

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Noteiktais artikuls`
- CURRENT: `Noteiktais artikuls`
- Proposed (audit): `Artículo definido`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0119

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- Structure: Gramática
- DE: `Nenoteiktais artikuls`
- CURRENT: `Nenoteiktais artikuls`
- Proposed (audit): `Artículo indefinido`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0120

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson3TrainingCardsEs[0].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[0].front`
- Structure: Lección 3 translate card 1/22
- DE: `Rechnest du?`
- CURRENT: `¿cuentas?`
- NEW: `¿Cuentas?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La primera palabra de una pregunta independiente debe comenzar con mayúscula.

## ES-KURSS-LESSONS-LV2-0121

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson3TrainingCardsEs[2].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[2].front`
- Structure: Lección 3 translate card 3/22
- DE: `Was steht dort?`
- CURRENT: `¿Quién está parado ahí?`
- NEW: `¿Qué hay ahí?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Was steht dort? pregunta por una cosa, no por una persona; «quién» es incorrecto.

## ES-KURSS-LESSONS-LV2-0122

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson3TrainingCardsEs[3].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[3].front`
- Structure: Lección 3 translate card 4/22
- DE: `Dort steht ein Tisch.`
- CURRENT: `Hay una mesa.`
- NEW: `Allí hay una mesa.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La traducción omite el adverbio de lugar «dort».

## ES-KURSS-LESSONS-LV2-0123

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson3TrainingCardsEs[4].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[4].front`
- Structure: Lección 3 translate card 5/22
- DE: `Was liegt hier?`
- CURRENT: `¿Quién está aquí?`
- NEW: `¿Qué hay aquí?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Was liegt hier? pregunta por una cosa, no por una persona; «quién» es incorrecto.

## ES-KURSS-LESSONS-LV2-0124

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `lesson3TrainingCardsEs[5].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[5].front`
- Structure: Lección 3 translate card 6/22
- DE: `Hier liegt ein Buch.`
- CURRENT: `Aquí está el libro.`
- NEW: `Aquí hay un libro.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El original usa un artículo indefinido, pero la versión actual usa «el», que cambia el significado.

## ES-KURSS-LESSONS-LV2-0125

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson3TrainingCardsEs[8].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[8].front`
- Structure: Lección 3 translate card 9/22
- DE: `Was ist dünn?`
- CURRENT: `¿Cuál es el plan?`
- NEW: `¿Qué es delgado?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La traducción no corresponde a Was ist dünn? y cambia completamente el significado.

## ES-KURSS-LESSONS-LV2-0126

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson3TrainingCardsEs[9].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[9].front`
- Structure: Lección 3 translate card 10/22
- DE: `Das Heft ist dünn.`
- CURRENT: `El buzón es delgado.`
- NEW: `El cuaderno es delgado.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Heft significa «cuaderno», no «buzón».

## ES-KURSS-LESSONS-LV2-0127

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson3TrainingCardsEs[14].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[14].front`
- Structure: Lección 3 translate card 15/22
- DE: `Liegt dort ein Heft?`
- CURRENT: `¿Hay/hay un cuaderno?`
- NEW: `¿Hay allí un cuaderno?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La expresión «Hay/hay» es un duplicado y resulta antinatural; además, conviene reflejar el lugar indicado por dort.

## ES-KURSS-LESSONS-LV2-0128

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson3TrainingCardsEs[15].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson3TrainingCardsEs[15].front`
- Structure: Lección 3 translate card 16/22
- DE: `Ja, dort liegt ein Heft.`
- CURRENT: `Sí, hay un cuaderno.`
- NEW: `Sí, allí hay un cuaderno.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La traducción omite el adverbio de lugar «dort».

