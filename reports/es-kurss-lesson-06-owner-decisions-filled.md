# ES Kurss — Lección 6 OWNER decisions (filled)

**Source HEAD:** `8667069a3e04581be529b9c8bfda832647e90930`
**Aggregate authority:** `reports/es-kurss-lessons-owner-decisions-filled.json`
**Decision count:** 55
**LABOT:** 40 | **NELABOT:** 9 | **FALSE_POSITIVE:** 5 | **TECHNICAL_DEFER:** 1
**Status:** OWNER_FILLED

## ES-KURSS-LESSONS-STR-L06

- Status: **TECHNICAL_DEFER**
- Track: LEGACY_HTML_SYNC
- Category: STRUCTURE
- Severity: HIGH
- Source: structure
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson6`
- CURRENT: `inline:9069`
- Proposed (audit): `(align with LV MASTER structure)`
- Owner decision: TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- Pamatojums: Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

## ES-KURSS-LESSONS-DET-0079

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: MULTIPLE_TRANSLATIONS
- Severity: MEDIUM
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Legacy accordion summary
- CURRENT: `Diálogos/oraciones`
- Proposed (audit): `(OWNER_DECISION_REQUIRED: choose single main translation)`
- Owner decision: FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- Pamatojums: Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

## ES-KURSS-LESSONS-DET-0080

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `wieder (vīder)`
- CURRENT: `wieder (vīder) — otra vez`
- NEW: `wieder (vīder) — otra vez`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0081

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `der Schlüssel (šlūsel)`
- CURRENT: `der Schlüssel (šlūsel) — llave`
- NEW: `der Schlüssel (šlūsel) — llave`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0082

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `die Tafel (dī tāfel)`
- CURRENT: `die Tafel (dī tāfel) — pizarra`
- NEW: `die Tafel (dī tāfel) — pizarra`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0083

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `zählen (cēlen)`
- CURRENT: `zählen (cēlen) — contar`
- NEW: `zählen (cēlen) — contar`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0084

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[22]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `der Deckel (dēr dekel)`
- CURRENT: `der Deckel (dēr dekel) — tapa`
- NEW: `der Deckel (dēr dekel) — tapa`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0085

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[30]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `leer (lēr)`
- CURRENT: `leer (lēr) — vacío`
- NEW: `leer (lēr) — vacío`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0086

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[31]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `schwer (švēr)`
- CURRENT: `schwer (švēr) — pesado, difícil`
- NEW: `schwer (švēr) — pesado, difícil`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: phonetic notation already follows ES Kurss standard (macron/š); FOREIGN_REMNANT was false positive.
- Pamatojums: Pedagogical transcription per kurssPronunciationLesson; no ES text change needed.

## ES-KURSS-LESSONS-DET-0087

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[34]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `wieviel (vīfīl)`
- CURRENT: `wieviel (vīfīl) — cuántos`
- NEW: `wieviel (vīfīl) — cuántos`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0088

- Status: **NELABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[36]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `hier (hīr)`
- CURRENT: `hier (hīr) — aquí`
- NEW: `hier (hīr) — aquí`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: NELABOT: verified — no change required after individual review.
- Pamatojums: DE context and ES correctness checked; finding not actionable.

## ES-KURSS-LESSONS-DET-0089

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Pronunciación
- CURRENT: `ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e.`
- NEW: `ä es una modificación de la vocal a y se pronuncia como una e breve o larga y cerrada.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0090

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Pronunciación
- DE: `Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).`
- CURRENT: `Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).`
- NEW: `Ejemplos: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0091

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Pronunciación
- CURRENT: `ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i.`
- NEW: `ü es una modificación de la vocal u. Para pronunciarla, hay que redondear mucho los labios e intentar pronunciar i con los labios redondeados.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0092

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Piemēri: fünf, der Schlüssel (šlūsel).`
- CURRENT: `Piemēri: fünf, der Schlüssel (šlūsel).`
- NEW: `Ejemplos: fünf, der Schlüssel (šlūsel).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0093

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- CURRENT: `ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel.`
- NEW: `ö se pronuncia con los labios redondeados, intentando pronunciar e: der Löffel.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0094

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Divkāršots patskanis apzīmē garu patskani: leer (lēr).`
- CURRENT: `Divkāršots patskanis apzīmē garu patskani: leer (lēr).`
- NEW: `Una vocal doble representa una vocal larga: leer (lēr).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0095

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Divskani eu izrunā kā oi: neun (noin).`
- CURRENT: `Divskani eu izrunā kā oi: neun (noin).`
- NEW: `El diptongo eu se pronuncia como oi: neun (noin).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0096

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.`
- CURRENT: `Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.`
- NEW: `En presente, el prefijo tónico de un verbo compuesto se separa del verbo y aparece al final de la oración.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0097

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Piemēri: hinlegen`
- CURRENT: `Piemēri: hinlegen — Satiana en alemán tiene una forma singular y plural: der Schüler ist pequeño; die Schüler sind klein.`
- NEW: `Ejemplo: hinlegen`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0098

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.`
- CURRENT: `Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.`
- NEW: `El numeral «uno» adopta tres formas cuando se usa con un sustantivo: en masculino, ein; en femenino, eine; y en neutro, ein.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0099

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Piemēri: ein Schüler`
- CURRENT: `Piemēri: ein Schüler — das ist ein Hammer; es una aguja: das ist eine Nadel; son martillos—das sind Hämmer; son agujas - das sind Nadeln.`
- NEW: `Ejemplos: ein Schüler — das ist ein Hammer; es una aguja: das ist eine Nadel; son martillos—das sind Hämmer; son agujas - das sind Nadeln.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0100

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).`
- CURRENT: `Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).`
- NEW: `Números: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0101

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.`
- CURRENT: `Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.`
- NEW: `El pronombre en alemán tiene formas de singular y plural: der Schüler ist klein; die Schüler sind klein.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0102

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[10]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.`
- CURRENT: `Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.`
- NEW: `El pronombre demostrativo «tas» en letón cambia según el número y el género, mientras que en alemán se utiliza una sola forma: das.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0103

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[11]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Piemēri: tas ir veseris`
- CURRENT: `Piemēri: tas ir veseris — el, -er plural toma -n.`
- NEW: `Ejemplos: esto es un martillo — el plural en -er toma -n.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0104

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[13]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Vīriešu un vidējās kārtas lietvārdi ar galotni`
- CURRENT: `Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (madres); die Tochter (hija) — die Töchter (hijas).`
- NEW: `Sustantivos masculinos y neutros con la terminación -die Mütter (madres); die Tochter (hija) — die Töchter (hijas).`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0105

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Piemēri: der Hammer`
- CURRENT: `Piemēri: der Hammer — das sind Wagen; das ist eine Nadel — das sind Nadeln.`
- NEW: `Ejemplos: der Hammer — das sind Wagen; das ist eine Nadel — das sind Nadeln.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0106

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_REMNANT
- Severity: HIGH
- Source: deterministic
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Sieviešu kārtas lietvārdi ar galotni`
- CURRENT: `Sieviešu kārtas lietvārdi ar galotni -En una oración narrativa, el verbo predicado ocupa el segundo lugar: er legt den Schlüssel hin; dann legt er den Schlüssel hin.`
- NEW: `Sustantivos femeninos con la terminación -. En una oración narrativa, el verbo predicado ocupa el segundo lugar: er legt den Schlüssel hin; dann legt er den Schlüssel hin.`
- Proposed (audit): `(OWNER: Spanish replacement per DE/LV meaning)`
- Owner decision: LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- Pamatojums: LV remnant replaced with natural Spanish; German examples preserved.

## ES-KURSS-LESSONS-DET-0107

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

## ES-KURSS-LESSONS-LV2-0210

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `liegt`
- CURRENT: `liegt — es, es, mentiras`
- NEW: `liegt — está / se encuentra`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La glosa española está corrompida: mezcla repeticiones de «es» con «mentiras» y no traduce correctamente el verbo alemán «liegt» en este contexto.

## ES-KURSS-LESSONS-LV2-0211

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `einige (einige)`
- CURRENT: `einige (einige) — some`
- Proposed (audit): `einige (einige) — algunos, algunas`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0212

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `hinlegen`
- CURRENT: `hinlegen — poner abajo`
- NEW: `hinlegen — poner algo tumbado / dejar algo tumbado`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Poner abajo» es una traducción literal poco natural y no expresa bien el sentido de «hinlegen», que consiste en colocar o dejar algo en posición horizontal.

## ES-KURSS-LESSONS-LV2-0213

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `aufmachen`
- CURRENT: `aufmachen — desatar`
- NEW: `aufmachen — abrir`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: aufmachen significa «abrir», no «desatar».

## ES-KURSS-LESSONS-LV2-0214

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `er macht auf`
- CURRENT: `er macht auf — desata`
- NEW: `er macht auf — abre`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: er macht auf significa «abre»; «desata» no corresponde al verbo alemán.

## ES-KURSS-LESSONS-LV2-0215

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `anspitzen (anšpicen)`
- CURRENT: `anspitzen (anšpicen) — escupir`
- NEW: `anspitzen (anšpicen) — sacar punta`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: anspitzen significa «sacar punta» o «afilar», no «escupir».

## ES-KURSS-LESSONS-LV2-0216

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `er spitzt an`
- CURRENT: `er spitzt an — escupe`
- NEW: `er spitzt an — saca punta`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: er spitzt an significa «saca punta» o «afila», no «escupe».

## ES-KURSS-LESSONS-LV2-0217

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: MEDIUM
- Source: luna-v2
- Change tag: NEW_IN_V2
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[20]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `der Hammer`
- CURRENT: `der Hammer — mazo`
- NEW: `der Hammer — martillo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La traducción general de der Hammer es «martillo»; «mazo» designa una herramienta más específica.

## ES-KURSS-LESSONS-LV2-0218

- Status: **LABOT**
- Track: LINGUISTIC
- Category: TRANSLATION
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[21]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `die Hämmer`
- CURRENT: `die Hämmer — mazo`
- NEW: `die Hämmer — martillos`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El plural alemán requiere la traducción «martillos»; además, «mazo» no es la traducción general de Hammer.

## ES-KURSS-LESSONS-LV2-0219

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_NATURALNESS
- Severity: LOW
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[25]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `der Schlitten`
- CURRENT: `der Schlitten — trineo, trineo`
- NEW: `der Schlitten — trineo`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La traducción «trineo» aparece duplicada.

## ES-KURSS-LESSONS-LV2-0220

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[28]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `wie sind die Dinge?`
- CURRENT: `wie sind die Dinge? — ¿Cuáles son las cosas?`
- NEW: `wie sind die Dinge? — ¿Cómo están las cosas?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La pregunta alemana se refiere al estado o situación de las cosas («¿Cómo están las cosas?»), no a identificar cuáles son.

## ES-KURSS-LESSONS-LV2-0221

- Status: **LABOT**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[29]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `voll (fōl)`
- CURRENT: `voll (fōl) — full`
- NEW: `voll (fōl) — lleno`
- Owner decision: LABOT: apply proposedEs per audit.
- Pamatojums: «full» es un resto de inglés; el texto visible debe estar en español.

## ES-KURSS-LESSONS-LV2-0223

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_GRAMMAR
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[35]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Palabras
- DE: `wieviel Nadeln`
- CURRENT: `wieviel Nadeln — cuántos agujas`
- NEW: `wieviel Nadeln — cuántas agujas`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: Agujas es un sustantivo femenino plural, por lo que el interrogativo debe concordar como «cuántas».

## ES-KURSS-LESSONS-LV2-0227

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → curso-ejemplo[0]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Pronunciación
- DE: `A doubled eu se pronuncia como oi: neun (noin).`
- CURRENT: `A doubled eu se pronuncia como oi: neun (noin).`
- Proposed (audit): `El diptongo eu se pronuncia como «oi»: neun (noin).`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0240

- Status: **FALSE_POSITIVE**
- Track: LINGUISTIC
- Category: FOREIGN_LEFTOVER
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[12]`
- File: `data/es/courseLessons.js`
- Field: `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- Structure: Gramática
- DE: `Der Wagen`
- CURRENT: `Der Wagen — die Nadeln; morir Feder - morir Federn.`
- Proposed (audit): `Der Wagen; die Nadeln; die Feder — die Federn.`
- Owner decision: FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- Pamatojums: Field contains German pedagogical notation acceptable in ES Kurss context.

## ES-KURSS-LESSONS-LV2-0244

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[2].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[2].front`
- Structure: Lección 6 translate card 3/21
- DE: `Er zeichnet einen Eimer.`
- CURRENT: `Saca un balde.`
- NEW: `Dibuja un balde.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán indica que el personaje dibuja un cubo, no que lo saque.

## ES-KURSS-LESSONS-LV2-0245

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[3].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[3].front`
- Structure: Lección 6 translate card 4/21
- DE: `Wer zeichnet einen Wagen?`
- CURRENT: `¿Quién tira el carro?`
- NEW: `¿Quién dibuja un carro?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «zeichnet» significa «dibuja», mientras que «tira» cambia el significado a «arrastra» o «lanza».

## ES-KURSS-LESSONS-LV2-0246

- Status: **LABOT**
- Track: LINGUISTIC
- Category: ES_ORTHOGRAPHY
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[7].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[7].front`
- Structure: Lección 6 translate card 8/21
- DE: `Wieviel Teller?`
- CURRENT: `¿Cuantos platos?`
- NEW: `¿Cuántos platos?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Cuántos» lleva tilde en esta pregunta.

## ES-KURSS-LESSONS-LV2-0247

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson6TrainingCardsEs[9].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[9].front`
- Structure: Lección 6 translate card 10/21
- DE: `Ich lege zwei Nadeln hin.`
- CURRENT: `Dejé dos agujas.`
- NEW: `Coloco dos agujas.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán está en presente y expresa colocar algo, no dejarlo en pasado.

## ES-KURSS-LESSONS-LV2-0248

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[11].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[11].front`
- Structure: Lección 6 translate card 12/21
- DE: `Das ist ein Deckel.`
- CURRENT: `Es una funda.`
- NEW: `Es una tapa.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Deckel» significa «tapa», no «funda».

## ES-KURSS-LESSONS-LV2-0249

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[12].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[12].front`
- Structure: Lección 6 translate card 13/21
- DE: `Das sind Deckel.`
- CURRENT: `Estas son las portadas.`
- NEW: `Estas son las tapas.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El plural alemán «Deckel» corresponde a «tapas», no a «portadas».

## ES-KURSS-LESSONS-LV2-0250

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: MEDIUM
- Source: luna-v2
- Change tag: RE_EVALUATED
- Path: `lesson6TrainingCardsEs[16].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[16].front`
- Structure: Lección 6 translate card 17/21
- DE: `Der Lehrer nimmt ein Messer und spitzt den Bleistift an.`
- CURRENT: `La maestra toma un cuchillo y afila un lápiz.`
- NEW: `El maestro toma un cuchillo y afila un lápiz.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: El alemán usa «der Lehrer», masculino; «la maestra» no coincide con el contexto alemán.

## ES-KURSS-LESSONS-LV2-0251

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[18].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[18].front`
- Structure: Lección 6 translate card 19/21
- DE: `Das ist ein Federhalter.`
- CURRENT: `Está emplumado.`
- NEW: `Es un portaplumas.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Federhalter» es un portaplumas, no algo que esté emplumado.

## ES-KURSS-LESSONS-LV2-0252

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[19].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[19].front`
- Structure: Lección 6 translate card 20/21
- DE: `Wie ist der Federhalter?`
- CURRENT: `¿Qué es emplumado?`
- NEW: `¿Cómo es el portaplumas?`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: La frase española no corresponde al significado de «Wie ist der Federhalter?». «Emplumado» significa con plumas, mientras que «Federhalter» es «portaplumas».

## ES-KURSS-LESSONS-LV2-0253

- Status: **LABOT**
- Track: LINGUISTIC
- Category: SEMANTIC_MISMATCH
- Severity: HIGH
- Source: luna-v2
- Change tag: UNCHANGED
- Path: `lesson6TrainingCardsEs[20].front`
- File: `data/es/courseTrainingCards.js`
- Field: `lesson6TrainingCardsEs[20].front`
- Structure: Lección 6 translate card 21/21
- DE: `Der Federhalter ist schwarz.`
- CURRENT: `La pluma es negra.`
- NEW: `El portaplumas es negro.`
- Owner decision: LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- Pamatojums: «Federhalter» significa «portaplumas», no «pluma».

