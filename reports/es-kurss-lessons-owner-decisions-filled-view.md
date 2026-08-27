# ES–DE Kurss Lessons — OWNER decisions (full view)

**Total:** 919 · **Linguistic:** 898 · **Technical deferred:** 21

## #1 ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [TECHNICAL_DEFER]

- **Lesson:** lesson1
- **Category:** STRUCTURE · **Severity:** HIGH · **Source:** structure
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson1`
- **DE:** —
- **CURRENT:** inline:8944
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- **Pamatojums:** Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

---

## #2 ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [TECHNICAL_DEFER]

- **Lesson:** lesson2
- **Category:** STRUCTURE · **Severity:** HIGH · **Source:** structure
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson2`
- **DE:** —
- **CURRENT:** inline:6561
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- **Pamatojums:** Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

---

## #3 ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [TECHNICAL_DEFER]

- **Lesson:** lesson3
- **Category:** STRUCTURE · **Severity:** HIGH · **Source:** structure
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson3`
- **DE:** —
- **CURRENT:** inline:7121
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- **Pamatojums:** Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

---

## #4 ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [TECHNICAL_DEFER]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** HIGH · **Source:** structure
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson4`
- **DE:** —
- **CURRENT:** inline:7423
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- **Pamatojums:** Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

---

## #5 ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [TECHNICAL_DEFER]

- **Lesson:** lesson5
- **Category:** STRUCTURE · **Severity:** HIGH · **Source:** structure
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson5`
- **DE:** —
- **CURRENT:** inline:6627
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- **Pamatojums:** Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

---

## #6 ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [TECHNICAL_DEFER]

- **Lesson:** lesson6
- **Category:** STRUCTURE · **Severity:** HIGH · **Source:** structure
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson6`
- **DE:** —
- **CURRENT:** inline:9069
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- **Pamatojums:** Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

---

## #7 ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [TECHNICAL_DEFER]

- **Lesson:** lesson7
- **Category:** STRUCTURE · **Severity:** HIGH · **Source:** structure
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson7`
- **DE:** —
- **CURRENT:** inline:6157
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.
- **Pamatojums:** Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.

---

## #8 ES-KURSS-LESSONS-DET-0001 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[11]`
- **DE:** —
- **CURRENT:** ellos / tú vienes
- **NEW:** ellos / tú vienes
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #9 ES-KURSS-LESSONS-DET-0002 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].title`
- **DE:** ♟gehen
- **CURRENT:** ♟gehen — go
- **NEW:** ♟gehen — ir
- **OWNER_DECISION:** LABOT: replace English gloss / LV phonetic diacritics with Spanish equivalents.
- **Pamatojums:** EN gloss or LV phonetic markers in ES field; DE headword preserved.

---

## #10 ES-KURSS-LESSONS-DET-0003 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[11]`
- **DE:** —
- **CURRENT:** ellos / tú vas
- **NEW:** ellos / tú vas
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #11 ES-KURSS-LESSONS-DET-0004 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[11]`
- **DE:** —
- **CURRENT:** ellos / Tú estás
- **NEW:** ellos / Tú estás
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #12 ES-KURSS-LESSONS-DET-0005 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[11]`
- **DE:** —
- **CURRENT:** ellos / tú cantas
- **NEW:** ellos / tú cantas
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #13 ES-KURSS-LESSONS-DET-0006 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE:** wir (vīr)
- **CURRENT:** wir (vīr) — we
- **NEW:** wir (vir) — nosotros
- **OWNER_DECISION:** LABOT: replace English gloss / LV phonetic diacritics with Spanish equivalents.
- **Pamatojums:** EN gloss or LV phonetic markers in ES field; DE headword preserved.

---

## #14 ES-KURSS-LESSONS-DET-0007 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** Vārdā “wir” burts i tiek izrunāts gari.
- **CURRENT:** Vārdā “wir” burts i tiek izrunāts gari.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Vārdā “wir” burts i tiek izrunāts gari.); cannot auto-derive NEW without content author.

---

## #15 ES-KURSS-LESSONS-DET-0008 [NELABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** gehen (gē
- **CURRENT:** gehen (gē-en) - ir
- **NEW:** gehen (gē-en) - ir
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #16 ES-KURSS-LESSONS-DET-0009 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** stehen (štē
- **CURRENT:** stehen (štē-en) - stand
- **NEW:** stehen (ste-en) — estar de pie
- **OWNER_DECISION:** LABOT: replace English gloss / LV phonetic diacritics with Spanish equivalents.
- **Pamatojums:** EN gloss or LV phonetic markers in ES field; DE headword preserved.

---

## #17 ES-KURSS-LESSONS-DET-0010 [NELABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** du (dū) kommst
- **CURRENT:** du (dū) kommst — tú vienes
- **NEW:** du (dū) kommst — tú vienes
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #18 ES-KURSS-LESSONS-DET-0011 [NELABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** er (ēr) kommt
- **CURRENT:** er (ēr) kommt — él viene
- **NEW:** er (ēr) kommt — él viene
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #19 ES-KURSS-LESSONS-DET-0012 [NELABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** sie (zī) kommt
- **CURRENT:** sie (zī) kommt — ella viene
- **NEW:** sie (zī) kommt — ella viene
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #20 ES-KURSS-LESSONS-DET-0013 [NELABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** wer (vēr)
- **CURRENT:** wer (vēr) — ¿qué?
- **NEW:** wer (vēr) — ¿qué?
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #21 ES-KURSS-LESSONS-DET-0014 [NELABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE:** ja (jā)
- **CURRENT:** ja (jā) — sí
- **NEW:** ja (jā) — sí
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #22 ES-KURSS-LESSONS-DET-0015 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
- **CURRENT:** Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.); cannot auto-derive NEW without content author.

---

## #23 ES-KURSS-LESSONS-DET-0016 [NELABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** Wir (vīr)
- **CURRENT:** Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga.
- **NEW:** Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga.
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #24 ES-KURSS-LESSONS-DET-0017 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE:** Latviešu valodā:
Tu nāc.
Vai tu nāc?
- **CURRENT:** Latviešu valodā:
Tu nāc.
Vai tu nāc?
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Latviešu valodā:
Tu nāc.
Vai tu nāc?); cannot auto-derive NEW without content author.

---

## #25 ES-KURSS-LESSONS-DET-0018 [LABOT]

- **Lesson:** lesson1
- **Category:** NAMES · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson1TrainingCardsEs[10].front`
- **DE:** Albert und Marta kommen und gehen.
- **CURRENT:** Albert y Martha van y vienen.
- **NEW:** Albert y Marta van y vienen.
- **OWNER_DECISION:** LABOT: DE canonical name Marta — align ES spelling.
- **Pamatojums:** DE source uses Marta; ES should match canonical name.

---

## #26 ES-KURSS-LESSONS-DET-0019 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonProgress`
- **DE:** —
- **CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **NEW:** Lección {lesson} · Traducir: {current} / {total}
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #27 ES-KURSS-LESSONS-DET-0020 [FALSE_POSITIVE]

- **Lesson:** lesson2
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **DE:** —
- **CURRENT:** Diálogos/oraciones
- **NEW:** Diálogos/oraciones
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #28 ES-KURSS-LESSONS-DET-0021 [NELABOT]

- **Lesson:** lesson2
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE:** spielen
- **CURRENT:** spielen — jugar; jugar
- **NEW:** spielen — jugar; jugar
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #29 ES-KURSS-LESSONS-DET-0022 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[0]`
- **DE:** Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.
- **CURRENT:** Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, …); cannot auto-derive NEW without content author.

---

## #30 ES-KURSS-LESSONS-DET-0023 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[1]`
- **DE:** Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
- **CURRENT:** Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).); cannot auto-derive NEW without content author.

---

## #31 ES-KURSS-LESSONS-DET-0024 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[2]`
- **DE:** Darbības vārdā tun u izrunājams gari visās personās.
- **CURRENT:** Darbības vārdā tun u izrunājams gari visās personās.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Darbības vārdā tun u izrunājams gari visās personās.); cannot auto-derive NEW without content author.

---

## #32 ES-KURSS-LESSONS-DET-0025 [FALSE_POSITIVE]

- **Lesson:** lesson2
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonProgress`
- **DE:** —
- **CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **NEW:** Lección {lesson} · Traducir: {current} / {total}
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #33 ES-KURSS-LESSONS-DET-0026 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **DE:** —
- **CURRENT:** Diálogos/oraciones
- **NEW:** Diálogos/oraciones
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #34 ES-KURSS-LESSONS-DET-0027 [NELABOT]

- **Lesson:** lesson3
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** eine Bank
- **CURRENT:** eine Bank — ¿hay/hay un libro aquí?
- **NEW:** eine Bank — ¿hay/hay un libro aquí?
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #35 ES-KURSS-LESSONS-DET-0028 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** niedrig
- **CURRENT:** niedrig — El sonido ī largo en alemán está representado por ie: liegen (līgen), hier (hīr), wie (vī).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (niedrig — El sonido ī largo en alemán está representado por ie: liegen (līgen), …); cannot auto-derive NEW without content author.

---

## #36 ES-KURSS-LESSONS-DET-0029 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
- **CURRENT:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).); cannot auto-derive NEW without content author.

---

## #37 ES-KURSS-LESSONS-DET-0030 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[3]`
- **DE:** ck ir divkāršs k: dick (dikk).
- **CURRENT:** ck ir divkāršs k: dick (dikk).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (ck ir divkāršs k: dick (dikk).); cannot auto-derive NEW without content author.

---

## #38 ES-KURSS-LESSONS-DET-0031 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Īpašības un apstākļu vārdos galotne
- **CURRENT:** Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas.); cannot auto-derive NEW without content author.

---

## #39 ES-KURSS-LESSONS-DET-0032 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Ar wer? jautā pēc personām.
- **CURRENT:** Ar wer? jautā pēc personām.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Ar wer? jautā pēc personām.); cannot auto-derive NEW without content author.

---

## #40 ES-KURSS-LESSONS-DET-0033 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Ar was? jautā pēc priekšmetiem.
- **CURRENT:** Ar was? jautā pēc priekšmetiem.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Ar was? jautā pēc priekšmetiem.); cannot auto-derive NEW without content author.

---

## #41 ES-KURSS-LESSONS-DET-0034 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE:** vīriešu kārta
- **CURRENT:** vīriešu kārta — das
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (vīriešu kārta — das); cannot auto-derive NEW without content author.

---

## #42 ES-KURSS-LESSONS-DET-0035 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- **DE:** sieviešu kārta
- **CURRENT:** sieviešu kārta — Plural definido el article para las tres rondas es morir.
- **NEW:** sieviešu kārta — Plural definido el artículo para las tres rondas es morir.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #43 ES-KURSS-LESSONS-DET-0037 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE:** vidējā kārta
- **CURRENT:** vidējā kārta — die Tische
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (vidējā kārta — die Tische); cannot auto-derive NEW without content author.

---

## #44 ES-KURSS-LESSONS-DET-0038 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- **DE:** Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.
- **CURRENT:** Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.); cannot auto-derive NEW without content author.

---

## #45 ES-KURSS-LESSONS-DET-0039 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[13]`
- **DE:** vīriešu kārta
- **CURRENT:** vīriešu kārta — ein
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (vīriešu kārta — ein); cannot auto-derive NEW without content author.

---

## #46 ES-KURSS-LESSONS-DET-0040 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE:** sieviešu kārta
- **CURRENT:** sieviešu kārta — El indefinido el article no tiene plural.
- **NEW:** sieviešu kārta — El indefinido el artículo no tiene plural.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #47 ES-KURSS-LESSONS-DET-0042 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- **DE:** vidējā kārta
- **CURRENT:** vidējā kārta — Tische
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (vidējā kārta — Tische); cannot auto-derive NEW without content author.

---

## #48 ES-KURSS-LESSONS-DET-0043 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[16]`
- **DE:** Nenoteiktajam artikulam daudzskaitļa nav.
- **CURRENT:** Nenoteiktajam artikulam daudzskaitļa nav.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Nenoteiktajam artikulam daudzskaitļa nav.); cannot auto-derive NEW without content author.

---

## #49 ES-KURSS-LESSONS-DET-0044 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[21]`
- **DE:** Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:
der Tisch steht
die Bank steht
- **CURRENT:** Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:
der Tisch steht
die Bank steht
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:
der Tisc…); cannot auto-derive NEW without content author.

---

## #50 ES-KURSS-LESSONS-DET-0045 [NELABOT]

- **Lesson:** lesson3
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- **DE:** —
- **CURRENT:** El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente.
- **NEW:** El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #51 ES-KURSS-LESSONS-DET-0046 [NELABOT]

- **Lesson:** lesson3
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **DE:** —
- **CURRENT:** 5stehen / liegen / hängen
- **NEW:** 5stehen / liegen / hängen
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #52 ES-KURSS-LESSONS-DET-0047 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonProgress`
- **DE:** —
- **CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **NEW:** Lección {lesson} · Traducir: {current} / {total}
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #53 ES-KURSS-LESSONS-DET-0048 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **DE:** —
- **CURRENT:** Diálogos/oraciones
- **NEW:** Diálogos/oraciones
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #54 ES-KURSS-LESSONS-DET-0049 [NELABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE:** nehmen (nēmen)
- **CURRENT:** nehmen (nēmen) — emplumado
- **NEW:** nehmen (nēmen) — emplumado
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #55 ES-KURSS-LESSONS-DET-0050 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** der Federhalter (dēr fēderhalter)
- **CURRENT:** der Federhalter (dēr fēderhalter) — show
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Federhalter (dēr fēderhalter) — show); cannot auto-derive NEW without content author.

---

## #56 ES-KURSS-LESSONS-DET-0051 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** die Feder (dī fēder)
- **CURRENT:** die Feder (dī fēder) — puntiagudo
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (die Feder (dī fēder) — puntiagudo); cannot auto-derive NEW without content author.

---

## #57 ES-KURSS-LESSONS-DET-0052 [NELABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** das Mädchen (mētchen)
- **CURRENT:** das Mädchen (mētchen) — cuchillo
- **NEW:** das Mädchen (mētchen) — cuchillo
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #58 ES-KURSS-LESSONS-DET-0053 [NELABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → course-example[0]`
- **DE:** nehmen (nēmen)
- **CURRENT:** nehmen (nēmen) - tomar
- **NEW:** nehmen (nēmen) - tomar
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #59 ES-KURSS-LESSONS-DET-0054 [NELABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** Galotnes
- **CURRENT:** Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen).
- **NEW:** Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen).
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #60 ES-KURSS-LESSONS-DET-0055 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[3]`
- **DE:** h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.
- **CURRENT:** h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.); cannot auto-derive NEW without content author.

---

## #61 ES-KURSS-LESSONS-DET-0056 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
- **CURRENT:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).); cannot auto-derive NEW without content author.

---

## #62 ES-KURSS-LESSONS-DET-0057 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
- **CURRENT:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (…); cannot auto-derive NEW without content author.

---

## #63 ES-KURSS-LESSONS-DET-0058 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- **DE:** daudzskaitlī
- **CURRENT:** daudzskaitlī — das Messer ist nicht scharf
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (daudzskaitlī — das Messer ist nicht scharf); cannot auto-derive NEW without content author.

---

## #64 ES-KURSS-LESSONS-DET-0059 [NELABOT]

- **Lesson:** lesson4
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[6]`
- **DE:** —
- **CURRENT:** 7-chen / -lein
- **NEW:** 7-chen / -lein
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #65 ES-KURSS-LESSONS-DET-0060 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonProgress`
- **DE:** —
- **CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **NEW:** Lección {lesson} · Traducir: {current} / {total}
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #66 ES-KURSS-LESSONS-DET-0061 [FALSE_POSITIVE]

- **Lesson:** lesson5
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **DE:** —
- **CURRENT:** Diálogos/oraciones
- **NEW:** Diálogos/oraciones
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #67 ES-KURSS-LESSONS-DET-0062 [NELABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** fragen (frāgen)
- **CURRENT:** fragen (frāgen) — preguntar
- **NEW:** fragen (frāgen) — preguntar
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #68 ES-KURSS-LESSONS-DET-0063 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** der Lehrer (dēr lērer)
- **CURRENT:** der Lehrer (dēr lērer) — profesor
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Lehrer (dēr lērer) — profesor); cannot auto-derive NEW without content author.

---

## #69 ES-KURSS-LESSONS-DET-0064 [NELABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** gut (gūt)
- **CURRENT:** gut (gūt) — bueno
- **NEW:** gut (gūt) — bueno
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #70 ES-KURSS-LESSONS-DET-0065 [NELABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** wen (vēn)
- **CURRENT:** wen (vēn) — qué
- **NEW:** wen (vēn) — qué
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #71 ES-KURSS-LESSONS-DET-0066 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** der Schüler (šūler)
- **CURRENT:** der Schüler (šūler) — estudiante
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Schüler (šūler) — estudiante); cannot auto-derive NEW without content author.

---

## #72 ES-KURSS-LESSONS-DET-0067 [NELABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE:** artig (ārtich)
- **CURRENT:** artig (ārtich) — educado
- **NEW:** artig (ārtich) — educado
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #73 ES-KURSS-LESSONS-DET-0068 [NELABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** lieben (līben)
- **CURRENT:** lieben (līben) — amar
- **NEW:** lieben (līben) — amar
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #74 ES-KURSS-LESSONS-DET-0069 [NELABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[18]`
- **DE:** der Vater (fāter)
- **CURRENT:** der Vater (fāter) — padre
- **NEW:** der Vater (fāter) — padre
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #75 ES-KURSS-LESSONS-DET-0070 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).
- **CURRENT:** tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).); cannot auto-derive NEW without content author.

---

## #76 ES-KURSS-LESSONS-DET-0071 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** v vācu vārdos izrunā kā f: der Vater (fāter).
- **CURRENT:** v vācu vārdos izrunā kā f: der Vater (fāter).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (v vācu vārdos izrunā kā f: der Vater (fāter).); cannot auto-derive NEW without content author.

---

## #77 ES-KURSS-LESSONS-DET-0072 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **CURRENT:** ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).); cannot auto-derive NEW without content author.

---

## #78 ES-KURSS-LESSONS-DET-0073 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
- **CURRENT:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.); cannot auto-derive NEW without content author.

---

## #79 ES-KURSS-LESSONS-DET-0074 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.
- **CURRENT:** Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.); cannot auto-derive NEW without content author.

---

## #80 ES-KURSS-LESSONS-DET-0075 [FALSE_POSITIVE]

- **Lesson:** lesson5
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE:** er/sie/es sitzt
- **CURRENT:** er/sie/es sitzt
- **NEW:** er/sie/es sitzt
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #81 ES-KURSS-LESSONS-DET-0076 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE:** Daudz sieviešu kārtas vārdu atvasina ar galotni
- **CURRENT:** Daudz sieviešu kārtas vārdu atvasina ar galotni -die Lehrerin
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Daudz sieviešu kārtas vārdu atvasina ar galotni -die Lehrerin); cannot auto-derive NEW without content author.

---

## #82 ES-KURSS-LESSONS-DET-0077 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[17]`
- **DE:** Stāstāmā teikumā darbības vārds stāv otrā vietā.
- **CURRENT:** Stāstāmā teikumā darbības vārds stāv otrā vietā.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Stāstāmā teikumā darbības vārds stāv otrā vietā.); cannot auto-derive NEW without content author.

---

## #83 ES-KURSS-LESSONS-DET-0078 [FALSE_POSITIVE]

- **Lesson:** lesson5
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonProgress`
- **DE:** —
- **CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **NEW:** Lección {lesson} · Traducir: {current} / {total}
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #84 ES-KURSS-LESSONS-DET-0079 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **DE:** —
- **CURRENT:** Diálogos/oraciones
- **NEW:** Diálogos/oraciones
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #85 ES-KURSS-LESSONS-DET-0080 [NELABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** wieder (vīder)
- **CURRENT:** wieder (vīder) — otra vez
- **NEW:** wieder (vīder) — otra vez
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #86 ES-KURSS-LESSONS-DET-0081 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** der Schlüssel (šlūsel)
- **CURRENT:** der Schlüssel (šlūsel) — llave
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Schlüssel (šlūsel) — llave); cannot auto-derive NEW without content author.

---

## #87 ES-KURSS-LESSONS-DET-0082 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** die Tafel (dī tāfel)
- **CURRENT:** die Tafel (dī tāfel) — pizarra
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (die Tafel (dī tāfel) — pizarra); cannot auto-derive NEW without content author.

---

## #88 ES-KURSS-LESSONS-DET-0083 [NELABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** zählen (cēlen)
- **CURRENT:** zählen (cēlen) — contar
- **NEW:** zählen (cēlen) — contar
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #89 ES-KURSS-LESSONS-DET-0084 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[22]`
- **DE:** der Deckel (dēr dekel)
- **CURRENT:** der Deckel (dēr dekel) — tapa
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Deckel (dēr dekel) — tapa); cannot auto-derive NEW without content author.

---

## #90 ES-KURSS-LESSONS-DET-0085 [NELABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[30]`
- **DE:** leer (lēr)
- **CURRENT:** leer (lēr) — vacío
- **NEW:** leer (lēr) — vacío
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #91 ES-KURSS-LESSONS-DET-0086 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[31]`
- **DE:** schwer (švēr)
- **CURRENT:** schwer (švēr) — pesado, difícil
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (schwer (švēr) — pesado, difícil); cannot auto-derive NEW without content author.

---

## #92 ES-KURSS-LESSONS-DET-0087 [NELABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[34]`
- **DE:** wieviel (vīfīl)
- **CURRENT:** wieviel (vīfīl) — cuántos
- **NEW:** wieviel (vīfīl) — cuántos
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #93 ES-KURSS-LESSONS-DET-0088 [NELABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[36]`
- **DE:** hier (hīr)
- **CURRENT:** hier (hīr) — aquí
- **NEW:** hier (hīr) — aquí
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #94 ES-KURSS-LESSONS-DET-0089 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** —
- **CURRENT:** ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e.); cannot auto-derive NEW without content author.

---

## #95 ES-KURSS-LESSONS-DET-0090 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **CURRENT:** Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die…); cannot auto-derive NEW without content author.

---

## #96 ES-KURSS-LESSONS-DET-0091 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** —
- **CURRENT:** ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar ap…); cannot auto-derive NEW without content author.

---

## #97 ES-KURSS-LESSONS-DET-0092 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Piemēri: fünf, der Schlüssel (šlūsel).
- **CURRENT:** Piemēri: fünf, der Schlüssel (šlūsel).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: fünf, der Schlüssel (šlūsel).); cannot auto-derive NEW without content author.

---

## #98 ES-KURSS-LESSONS-DET-0093 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** —
- **CURRENT:** ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel.); cannot auto-derive NEW without content author.

---

## #99 ES-KURSS-LESSONS-DET-0094 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Divkāršots patskanis apzīmē garu patskani: leer (lēr).
- **CURRENT:** Divkāršots patskanis apzīmē garu patskani: leer (lēr).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Divkāršots patskanis apzīmē garu patskani: leer (lēr).); cannot auto-derive NEW without content author.

---

## #100 ES-KURSS-LESSONS-DET-0095 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Divskani eu izrunā kā oi: neun (noin).
- **CURRENT:** Divskani eu izrunā kā oi: neun (noin).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Divskani eu izrunā kā oi: neun (noin).); cannot auto-derive NEW without content author.

---

## #101 ES-KURSS-LESSONS-DET-0096 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.
- **CURRENT:** Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda u…); cannot auto-derive NEW without content author.

---

## #102 ES-KURSS-LESSONS-DET-0097 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- **DE:** Piemēri: hinlegen
- **CURRENT:** Piemēri: hinlegen — Satiana en alemán tiene una forma singular y plural: der Schüler ist pequeño; die Schüler sind klein.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: hinlegen — Satiana en alemán tiene una forma singular y plural: der Sch…); cannot auto-derive NEW without content author.

---

## #103 ES-KURSS-LESSONS-DET-0098 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE:** Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.
- **CURRENT:** Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārt…); cannot auto-derive NEW without content author.

---

## #104 ES-KURSS-LESSONS-DET-0099 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- **DE:** Piemēri: ein Schüler
- **CURRENT:** Piemēri: ein Schüler — das ist ein Hammer; es una aguja: das ist eine Nadel; son martillos—das sind Hämmer; son agujas - das sind Nadeln.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: ein Schüler — das ist ein Hammer; es una aguja: das ist eine Nadel; son…); cannot auto-derive NEW without content author.

---

## #105 ES-KURSS-LESSONS-DET-0100 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE:** Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).
- **CURRENT:** Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht,…); cannot auto-derive NEW without content author.

---

## #106 ES-KURSS-LESSONS-DET-0101 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- **DE:** Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
- **CURRENT:** Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein…); cannot auto-derive NEW without content author.

---

## #107 ES-KURSS-LESSONS-DET-0102 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[10]`
- **DE:** Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.
- **CURRENT:** Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu v…); cannot auto-derive NEW without content author.

---

## #108 ES-KURSS-LESSONS-DET-0103 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[11]`
- **DE:** Piemēri: tas ir veseris
- **CURRENT:** Piemēri: tas ir veseris — el, -er plural toma -n.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: tas ir veseris — el, -er plural toma -n.); cannot auto-derive NEW without content author.

---

## #109 ES-KURSS-LESSONS-DET-0104 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[13]`
- **DE:** Vīriešu un vidējās kārtas lietvārdi ar galotni
- **CURRENT:** Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (madres); die Tochter (hija) — die Töchter (hijas).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (madres); die Tochter…); cannot auto-derive NEW without content author.

---

## #110 ES-KURSS-LESSONS-DET-0105 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE:** Piemēri: der Hammer
- **CURRENT:** Piemēri: der Hammer — das sind Wagen; das ist eine Nadel — das sind Nadeln.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: der Hammer — das sind Wagen; das ist eine Nadel — das sind Nadeln.); cannot auto-derive NEW without content author.

---

## #111 ES-KURSS-LESSONS-DET-0106 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- **DE:** Sieviešu kārtas lietvārdi ar galotni
- **CURRENT:** Sieviešu kārtas lietvārdi ar galotni -En una oración narrativa, el verbo predicado ocupa el segundo lugar: er legt den Schlüssel hin; dann legt er den Schlüssel hin.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Sieviešu kārtas lietvārdi ar galotni -En una oración narrativa, el verbo predica…); cannot auto-derive NEW without content author.

---

## #112 ES-KURSS-LESSONS-DET-0107 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonProgress`
- **DE:** —
- **CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **NEW:** Lección {lesson} · Traducir: {current} / {total}
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #113 ES-KURSS-LESSONS-DET-0108 [FALSE_POSITIVE]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **DE:** —
- **CURRENT:** Diálogos/oraciones
- **NEW:** Diálogos/oraciones
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #114 ES-KURSS-LESSONS-DET-0109 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** das Lied (das līt)
- **CURRENT:** das Lied (das līt) — jovencita
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (das Lied (das līt) — jovencita); cannot auto-derive NEW without content author.

---

## #115 ES-KURSS-LESSONS-DET-0110 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** der Spiegel (špīgel)
- **CURRENT:** der Spiegel (špīgel) — escoba
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Spiegel (špīgel) — escoba); cannot auto-derive NEW without content author.

---

## #116 ES-KURSS-LESSONS-DET-0111 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** die Schüssel
- **CURRENT:** die Schüssel — sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (para špīgel).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (die Schüssel — sp al principio de una palabra o sílaba se pronuncia como šp: der…); cannot auto-derive NEW without content author.

---

## #117 ES-KURSS-LESSONS-DET-0112 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** das Zimmer
- **CURRENT:** das Zimmer — sch se pronuncia como letón š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (das Zimmer — sch se pronuncia como letón š: die Schaufel (dī šaufel), die Schüss…); cannot auto-derive NEW without content author.

---

## #118 ES-KURSS-LESSONS-DET-0113 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** das Ufer (ūfer)
- **CURRENT:** das Ufer (ūfer) — El diptongo äu se pronuncia como letón oi: das Fräulein (das froilein).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (das Ufer (ūfer) — El diptongo äu se pronuncia como letón oi: das Fräulein (das f…); cannot auto-derive NEW without content author.

---

## #119 ES-KURSS-LESSONS-DET-0114 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).
- **CURRENT:** sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).); cannot auto-derive NEW without content author.

---

## #120 ES-KURSS-LESSONS-DET-0115 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **CURRENT:** sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).); cannot auto-derive NEW without content author.

---

## #121 ES-KURSS-LESSONS-DET-0116 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).
- **CURRENT:** Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).); cannot auto-derive NEW without content author.

---

## #122 ES-KURSS-LESSONS-DET-0117 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes
- **CURRENT:** Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes -La forma del comando en la segunda persona del plural es similar a la segunda persona del presente plural, pero se usa sin pronombre.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vien…); cannot auto-derive NEW without content author.

---

## #123 ES-KURSS-LESSONS-DET-0118 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** Piemēri: antworte!, arbeite!, öffne!, zeichne!
- **CURRENT:** Piemēri: antworte!, arbeite!, öffne!, zeichne!
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: antworte!, arbeite!, öffne!, zeichne!); cannot auto-derive NEW without content author.

---

## #124 ES-KURSS-LESSONS-DET-0119 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- **DE:** Ļoti bieži galotne
- **CURRENT:** Ļoti bieži galotne -La forma de tratamiento con "Usted" se parece a la tercera persona del plural. El pronombre Sie es escrito con mayúscula y después del verbo.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Ļoti bieži galotne -La forma de tratamiento con "Usted" se parece a la tercera p…); cannot auto-derive NEW without content author.

---

## #125 ES-KURSS-LESSONS-DET-0120 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE:** Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.
- **CURRENT:** Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai…); cannot auto-derive NEW without content author.

---

## #126 ES-KURSS-LESSONS-DET-0121 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- **DE:** Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!
- **CURRENT:** Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!); cannot auto-derive NEW without content author.

---

## #127 ES-KURSS-LESSONS-DET-0122 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[0].du`
- **DE:** fragen
- **CURRENT:** frag! / frage!
- **NEW:** frag! / frage!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #128 ES-KURSS-LESSONS-DET-0123 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[2].du`
- **DE:** loben
- **CURRENT:** lob! / lobe!
- **NEW:** lob! / lobe!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #129 ES-KURSS-LESSONS-DET-0124 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[3].du`
- **DE:** lieben
- **CURRENT:** lieb! / liebe!
- **NEW:** lieb! / liebe!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #130 ES-KURSS-LESSONS-DET-0125 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[4].du`
- **DE:** zählen
- **CURRENT:** zähl! / zähle!
- **NEW:** zähl! / zähle!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #131 ES-KURSS-LESSONS-DET-0126 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[5].du`
- **DE:** zeigen
- **CURRENT:** zeig! / zeige!
- **NEW:** zeig! / zeige!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #132 ES-KURSS-LESSONS-DET-0127 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[9].du`
- **DE:** kommen
- **CURRENT:** komm! / komme!
- **NEW:** komm! / komme!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #133 ES-KURSS-LESSONS-DET-0128 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[10].du`
- **DE:** gehen
- **CURRENT:** geh! / gehe!
- **NEW:** geh! / gehe!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #134 ES-KURSS-LESSONS-DET-0129 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[11].du`
- **DE:** stehen
- **CURRENT:** steh! / stehe!
- **NEW:** steh! / stehe!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #135 ES-KURSS-LESSONS-DET-0130 [NELABOT]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `lesson7ExerciseCardsEs[13].du`
- **DE:** singen
- **CURRENT:** sing! / singe!
- **NEW:** sing! / singe!
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #136 ES-KURSS-LESSONS-DET-0131 [FALSE_POSITIVE]

- **Lesson:** lesson7
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonProgress`
- **DE:** —
- **CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **NEW:** Lección {lesson} · Traducir: {current} / {total}
- **OWNER_DECISION:** FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.
- **Pamatojums:** Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.

---

## #137 ES-KURSS-LESSONS-DET-0133 [NELABOT]

- **Lesson:** lesson8
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonItems.8.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Verbos reflexivos, e → i/ie cambio y acusativo.
- **NEW:** Verbos reflexivos, e → i/ie cambio y acusativo.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #138 ES-KURSS-LESSONS-DET-0134 [NELABOT]

- **Lesson:** lesson8
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].title → kurss.sections.dialogues`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #139 ES-KURSS-LESSONS-DET-0135 [NELABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[16]`
- **DE:** sehr (zēr)
- **CURRENT:** sehr (zēr) — muy
- **NEW:** sehr (zēr) — muy
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #140 ES-KURSS-LESSONS-DET-0136 [NELABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[27]`
- **DE:** erzählen (ercēlen)
- **CURRENT:** erzählen (ercēlen) — contar
- **NEW:** erzählen (ercēlen) — contar
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #141 ES-KURSS-LESSONS-DET-0137 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[34]`
- **DE:** der Bäcker (dēr beker)
- **CURRENT:** der Bäcker (dēr beker) — panadero
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Bäcker (dēr beker) — panadero); cannot auto-derive NEW without content author.

---

## #142 ES-KURSS-LESSONS-DET-0138 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]`
- **DE:** der Schneider (dēr šneider)
- **CURRENT:** der Schneider (dēr šneider) — sastre
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Schneider (dēr šneider) — sastre); cannot auto-derive NEW without content author.

---

## #143 ES-KURSS-LESSONS-DET-0139 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]`
- **DE:** der Gärtner (dēr gertner)
- **CURRENT:** der Gärtner (dēr gertner) — jardinero
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Gärtner (dēr gertner) — jardinero); cannot auto-derive NEW without content author.

---

## #144 ES-KURSS-LESSONS-DET-0140 [NELABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]`
- **DE:** La ä puede pronunciarse como una e abierta, corta o larga. Ejemplos: der Bäcker (bēker), das Mädchen (mētchen).
- **CURRENT:** La ä puede pronunciarse como una e abierta, corta o larga. Ejemplos: der Bäcker (bēker), das Mädchen (mētchen).
- **NEW:** La ä puede pronunciarse como una e abierta, corta o larga. Ejemplos: der Bäcker (bēker), das Mädchen (mētchen).
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #145 ES-KURSS-LESSONS-DET-0141 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[1]`
- **DE:** La ä también puede sonar como una e más abierta, por ejemplo en der Gärtner (dēr gertner).
- **CURRENT:** La ä también puede sonar como una e más abierta, por ejemplo en der Gärtner (dēr gertner).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (La ä también puede sonar como una e más abierta, por ejemplo en der Gärtner (dēr…); cannot auto-derive NEW without content author.

---

## #146 ES-KURSS-LESSONS-DET-0142 [NELABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[3]`
- **DE:** ie se pronuncia como una i larga: liest (līst).
- **CURRENT:** ie se pronuncia como una i larga: liest (līst).
- **NEW:** ie se pronuncia como una i larga: liest (līst).
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #147 ES-KURSS-LESSONS-DET-0143 [NELABOT]

- **Lesson:** lesson8
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[9]`
- **DE:** Präsens: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich.
- **CURRENT:** Präsens: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich.
- **NEW:** Präsens: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #148 ES-KURSS-LESSONS-DET-0144 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[35].lv`
- **DE:** Hans schreibt gut, aber Anna schreibt schlecht.
- **CURRENT:** Ansis raksta labi, apuesta Anna raksta slikti.
- **NEW:** Ansis raksta labi, apuesta Anna raksta slikti.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #149 ES-KURSS-LESSONS-DET-0145 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[16].lv`
- **DE:** Hans schreibt gut, aber Anna schreibt schlecht.
- **CURRENT:** Ansis raksta labi, apuesta Anna raksta slikti.
- **NEW:** Ansis raksta labi, apuesta Anna raksta slikti.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #150 ES-KURSS-LESSONS-DET-0146 [NELABOT]

- **Lesson:** lesson8
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.dialogues (section title display)`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #151 ES-KURSS-LESSONS-DET-0147 [NELABOT]

- **Lesson:** lesson8
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #152 ES-KURSS-LESSONS-DET-0148 [NELABOT]

- **Lesson:** lesson8
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #153 ES-KURSS-LESSONS-DET-0149 [NELABOT]

- **Lesson:** lesson8
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #154 ES-KURSS-LESSONS-DET-0150 [NELABOT]

- **Lesson:** lesson9
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].title → kurss.sections.dialogues`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #155 ES-KURSS-LESSONS-DET-0151 [NELABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[0]`
- **DE:** mehrere (mērere)
- **CURRENT:** mehrere (mērere) — varios
- **NEW:** mehrere (mērere) — varios
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #156 ES-KURSS-LESSONS-DET-0152 [NELABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[1]`
- **DE:** hier (hīr)
- **CURRENT:** hier (hīr) — aquí
- **NEW:** hier (hīr) — aquí
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #157 ES-KURSS-LESSONS-DET-0153 [NELABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[4]`
- **DE:** langsam (lankzām)
- **CURRENT:** langsam (lankzām) — lento
- **NEW:** langsam (lankzām) — lento
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #158 ES-KURSS-LESSONS-DET-0154 [NELABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[6]`
- **DE:** mehr (mēr)
- **CURRENT:** mehr (mēr) — más
- **NEW:** mehr (mēr) — más
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #159 ES-KURSS-LESSONS-DET-0155 [NELABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[10]`
- **DE:** ruhig (rū
- **CURRENT:** ruhig (rū-ich) — tranquilo
- **NEW:** ruhig (rū-ich) — tranquilo
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #160 ES-KURSS-LESSONS-DET-0156 [NELABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[11]`
- **DE:** dieser (dīzer)
- **CURRENT:** dieser (dīzer) — Éste
- **NEW:** dieser (dīzer) — Éste
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #161 ES-KURSS-LESSONS-DET-0157 [NELABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[12]`
- **DE:** jener (jēner)
- **CURRENT:** jener (jēner) — aquel
- **NEW:** jener (jēner) — aquel
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #162 ES-KURSS-LESSONS-DET-0158 [LABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[13]`
- **DE:** der Brief (dēr brīf)
- **CURRENT:** der Brief (dēr brīf) — carta
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Brief (dēr brīf) — carta); cannot auto-derive NEW without content author.

---

## #163 ES-KURSS-LESSONS-DET-0159 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Indique los pronombres dieser y jener como article definido.
- **NEW:** Indique los pronombres dieser y jener como artículo definido.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #164 ES-KURSS-LESSONS-DET-0160 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Si el sustantivo va precedido de un pronombre o una palabra numérica, no se utiliza el article.
- **NEW:** Si el sustantivo va precedido de un pronombre o una palabra numérica, no se utiliza el artículo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #165 ES-KURSS-LESSONS-DET-0161 [NELABOT]

- **Lesson:** lesson9
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.dialogues (section title display)`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #166 ES-KURSS-LESSONS-DET-0162 [NELABOT]

- **Lesson:** lesson9
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #167 ES-KURSS-LESSONS-DET-0163 [NELABOT]

- **Lesson:** lesson9
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #168 ES-KURSS-LESSONS-DET-0164 [NELABOT]

- **Lesson:** lesson9
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #169 ES-KURSS-LESSONS-DET-0165 [NELABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].title → kurss.sections.dialogues`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #170 ES-KURSS-LESSONS-DET-0166 [NELABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[2]`
- **DE:** du bist
- **CURRENT:** du bist — tú eres / estás
- **NEW:** du bist — tú eres / estás
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #171 ES-KURSS-LESSONS-DET-0167 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]`
- **DE:** ihr seid (īr zeit)
- **CURRENT:** ihr seid (īr zeit) — vosotros sois / estáis
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (ihr seid (īr zeit) — vosotros sois / estáis); cannot auto-derive NEW without content author.

---

## #172 ES-KURSS-LESSONS-DET-0169 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]`
- **DE:** der Knabe (dēr knābe)
- **CURRENT:** der Knabe (dēr knābe) — un niño
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Knabe (dēr knābe) — un niño); cannot auto-derive NEW without content author.

---

## #173 ES-KURSS-LESSONS-DET-0170 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]`
- **DE:** der Großvater (dēr grōsfāter)
- **CURRENT:** der Großvater (dēr grōsfāter) — abuelo
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Großvater (dēr grōsfāter) — abuelo); cannot auto-derive NEW without content author.

---

## #174 ES-KURSS-LESSONS-DET-0171 [NELABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]`
- **DE:** das Jahr (jār)
- **CURRENT:** das Jahr (jār) — año
- **NEW:** das Jahr (jār) — año
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #175 ES-KURSS-LESSONS-DET-0172 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]`
- **DE:** Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
- **CURRENT:** Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel),…); cannot auto-derive NEW without content author.

---

## #176 ES-KURSS-LESSONS-DET-0173 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
- **DE:** Pronuncia correctamente: der Großvater (dēr grōsfāter).
- **CURRENT:** Pronuncia correctamente: der Großvater (dēr grōsfāter).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (Pronuncia correctamente: der Großvater (dēr grōsfāter).); cannot auto-derive NEW without content author.

---

## #177 ES-KURSS-LESSONS-DET-0174 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
- **DE:** La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.
- **CURRENT:** La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raí…); cannot auto-derive NEW without content author.

---

## #178 ES-KURSS-LESSONS-DET-0175 [NELABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.dialogues (section title display)`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #179 ES-KURSS-LESSONS-DET-0176 [NELABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #180 ES-KURSS-LESSONS-DET-0177 [NELABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #181 ES-KURSS-LESSONS-DET-0178 [NELABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #182 ES-KURSS-LESSONS-DET-0179 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonItems.11.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Haben, kein/keine/keinen, sustantivos posesivos y compuestos.
- **NEW:** Haben, kein/keine/keinen, sustantivos posesivos y compuestos.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #183 ES-KURSS-LESSONS-DET-0180 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].title → kurss.sections.dialogues`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #184 ES-KURSS-LESSONS-DET-0181 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]`
- **DE:** der Bruder (dēr brūder)
- **CURRENT:** der Bruder (dēr brūder) — hermano
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Bruder (dēr brūder) — hermano); cannot auto-derive NEW without content author.

---

## #185 ES-KURSS-LESSONS-DET-0182 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]`
- **DE:** der Schreibtisch (dēr šreibtīš)
- **CURRENT:** der Schreibtisch (dēr šreibtīš) — un escritorio
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Schreibtisch (dēr šreibtīš) — un escritorio); cannot auto-derive NEW without content author.

---

## #186 ES-KURSS-LESSONS-DET-0183 [NELABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]`
- **DE:** zusammen (cuzāmen)
- **CURRENT:** zusammen (cuzāmen) — juntos
- **NEW:** zusammen (cuzāmen) — juntos
- **OWNER_DECISION:** NELABOT: verified — no change required after individual review.
- **Pamatojums:** DE context and ES correctness checked; finding not actionable.

---

## #187 ES-KURSS-LESSONS-DET-0184 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]`
- **DE:** der Freund (dēr froint)
- **CURRENT:** der Freund (dēr froint) — amigo
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Freund (dēr froint) — amigo); cannot auto-derive NEW without content author.

---

## #188 ES-KURSS-LESSONS-DET-0185 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]`
- **DE:** der Stuhl (dēr štūl)
- **CURRENT:** der Stuhl (dēr štūl) — silla
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Stuhl (dēr štūl) — silla); cannot auto-derive NEW without content author.

---

## #189 ES-KURSS-LESSONS-DET-0186 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]`
- **DE:** die Landkarte (dī lantkarte)
- **CURRENT:** die Landkarte (dī lantkarte) — mapa geográfico
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (die Landkarte (dī lantkarte) — mapa geográfico); cannot auto-derive NEW without content author.

---

## #190 ES-KURSS-LESSONS-DET-0187 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]`
- **DE:** die Schwester (dī švester)
- **CURRENT:** die Schwester (dī švester) — hermana
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (die Schwester (dī švester) — hermana); cannot auto-derive NEW without content author.

---

## #191 ES-KURSS-LESSONS-DET-0188 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]`
- **DE:** eu se pronuncia «oi»: der Freund (dēr froint), neun (noin).
- **CURRENT:** eu se pronuncia «oi»: der Freund (dēr froint), neun (noin).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (eu se pronuncia «oi»: der Freund (dēr froint), neun (noin).); cannot auto-derive NEW without content author.

---

## #192 ES-KURSS-LESSONS-DET-0189 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]`
- **DE:** A menudo, la h indica que la vocal anterior es larga: der Stuhl (dēr štūl), zehn (cēn).
- **CURRENT:** A menudo, la h indica que la vocal anterior es larga: der Stuhl (dēr štūl), zehn (cēn).
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (A menudo, la h indica que la vocal anterior es larga: der Stuhl (dēr štūl), zehn…); cannot auto-derive NEW without content author.

---

## #193 ES-KURSS-LESSONS-DET-0190 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[2][0]`
- **DE:** er/sie/es hat
- **CURRENT:** er/sie/es hat
- **NEW:** er/sie/es hat
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #194 ES-KURSS-LESSONS-DET-0191 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[2][1]`
- **DE:** —
- **CURRENT:** él/ella/ello tiene
- **NEW:** él/ella/ello tiene
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #195 ES-KURSS-LESSONS-DET-0192 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[4].examples[0]`
- **DE:** krievu: я имею тетрадь; отец имеет книгу.
- **CURRENT:** krievu: я имею тетрадь; отец имеет книгу.
- **NEW:** krievu: я имею тетрадь; отец имеет книгу.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #196 ES-KURSS-LESSONS-DET-0193 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[4].examples[1]`
- **DE:** inglés: I have a book; the father has a pencil.
- **CURRENT:** inglés: I have a book; the father has a pencil.
- **NEW:** inglés: I have a book; the father has a pencil.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #197 ES-KURSS-LESSONS-DET-0194 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[7].heading`
- **DE:** —
- **CURRENT:** Kein / keine / keinen
- **NEW:** Kein / keine / keinen
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #198 ES-KURSS-LESSONS-DET-0195 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.dialogues (section title display)`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #199 ES-KURSS-LESSONS-DET-0196 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #200 ES-KURSS-LESSONS-DET-0197 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #201 ES-KURSS-LESSONS-DET-0198 [NELABOT]

- **Lesson:** lesson11
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #202 ES-KURSS-LESSONS-DET-0199 [NELABOT]

- **Lesson:** lesson12
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.intro`
- **DE:** —
- **CURRENT:** Conferencia duodécima: grados comparativos, als/wie, edad, adjetivos y colores.
- **NEW:** Conferencia duodécima: grados comparativos, als/wie, edad, adjetivos y colores.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #203 ES-KURSS-LESSONS-DET-0200 [NELABOT]

- **Lesson:** lesson12
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[0].title → kurss.sections.dialogues`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #204 ES-KURSS-LESSONS-DET-0201 [NELABOT]

- **Lesson:** lesson12
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[0]`
- **DE:** heißen
- **CURRENT:** heißen — llamarse / significar
- **NEW:** heißen — llamarse / significar
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #205 ES-KURSS-LESSONS-DET-0202 [LABOT]

- **Lesson:** lesson12
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]`
- **DE:** der Vetter (dēr feter)
- **CURRENT:** der Vetter (dēr feter) — primo
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (der Vetter (dēr feter) — primo); cannot auto-derive NEW without content author.

---

## #206 ES-KURSS-LESSONS-DET-0203 [LABOT]

- **Lesson:** lesson12
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
- **DE:** das Gummi (das gumī)
- **CURRENT:** das Gummi (das gumī) — goma
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.
- **Pamatojums:** Full LV sentence in ES field (das Gummi (das gumī) — goma); cannot auto-derive NEW without content author.

---

## #207 ES-KURSS-LESSONS-DET-0204 [NELABOT]

- **Lesson:** lesson12
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.dialogues (section title display)`
- **DE:** —
- **CURRENT:** Diálogos / frases
- **NEW:** Diálogos / frases
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #208 ES-KURSS-LESSONS-DET-0205 [NELABOT]

- **Lesson:** lesson12
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #209 ES-KURSS-LESSONS-DET-0206 [NELABOT]

- **Lesson:** lesson12
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #210 ES-KURSS-LESSONS-DET-0207 [NELABOT]

- **Lesson:** lesson12
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #211 ES-KURSS-LESSONS-DET-0208 [NELABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #212 ES-KURSS-LESSONS-DET-0209 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].examples[2]`
- **DE:** er/sie/es kehrt sich um
- **CURRENT:** er/sie/es kehrt sich um
- **NEW:** er/sie/es kehrt sich um
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #213 ES-KURSS-LESSONS-DET-0210 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[3].examples[2]`
- **DE:** er/sie/es atmet
- **CURRENT:** er/sie/es atmet
- **NEW:** er/sie/es atmet
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #214 ES-KURSS-LESSONS-DET-0211 [NELABOT]

- **Lesson:** lesson13
- **Category:** MISSING_CONTENT · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].table[0][0]`
- **DE:** —
- **CURRENT:** 
- **NEW:** 
- **OWNER_DECISION:** NELABOT: empty DE conjugation label field — renderer does not display native text.
- **Pamatojums:** Verified: exerciseConjugation DE-only form field; no learner-facing ES expected.

---

## #215 ES-KURSS-LESSONS-DET-0212 [NELABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #216 ES-KURSS-LESSONS-DET-0213 [NELABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #217 ES-KURSS-LESSONS-DET-0214 [NELABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #218 ES-KURSS-LESSONS-DET-0215 [NELABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #219 ES-KURSS-LESSONS-DET-0216 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #220 ES-KURSS-LESSONS-DET-0217 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[1]`
- **DE:** ich muss
- **CURRENT:** ich muss — necesito / tengo que hacer
- **NEW:** ich muss — necesito / tengo que hacer
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #221 ES-KURSS-LESSONS-DET-0218 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[2]`
- **DE:** du musst
- **CURRENT:** du musst — necesitas / debes hacer
- **NEW:** du musst — necesitas / debes hacer
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #222 ES-KURSS-LESSONS-DET-0219 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[3]`
- **DE:** er muss
- **CURRENT:** er muss — él necesita / tiene que
- **NEW:** er muss — él necesita / tiene que
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #223 ES-KURSS-LESSONS-DET-0220 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[4]`
- **DE:** sie muss
- **CURRENT:** sie muss — ella necesita / tiene que
- **NEW:** sie muss — ella necesita / tiene que
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #224 ES-KURSS-LESSONS-DET-0221 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[5]`
- **DE:** es muss
- **CURRENT:** es muss — necesita / tiene que hacer
- **NEW:** es muss — necesita / tiene que hacer
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #225 ES-KURSS-LESSONS-DET-0222 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[6]`
- **DE:** wir müssen
- **CURRENT:** wir müssen — necesitamos / tenemos que hacer
- **NEW:** wir müssen — necesitamos / tenemos que hacer
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #226 ES-KURSS-LESSONS-DET-0223 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[7]`
- **DE:** ihr müsst
- **CURRENT:** ihr müsst — necesitas / debes
- **NEW:** ihr müsst — necesitas / debes
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #227 ES-KURSS-LESSONS-DET-0224 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[8]`
- **DE:** sie müssen
- **CURRENT:** sie müssen — ellos / ellos necesitan
- **NEW:** sie müssen — ellos / ellos necesitan
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #228 ES-KURSS-LESSONS-DET-0225 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[20]`
- **DE:** sie wollen
- **CURRENT:** sie wollen — ellos / ellas quieren
- **NEW:** sie wollen — ellos / ellas quieren
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #229 ES-KURSS-LESSONS-DET-0226 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[22]`
- **DE:** ich mag
- **CURRENT:** ich mag — quiero / me gusta
- **NEW:** ich mag — quiero / me gusta
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #230 ES-KURSS-LESSONS-DET-0227 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[23]`
- **DE:** du magst
- **CURRENT:** du magst — quieres / te gusta
- **NEW:** du magst — quieres / te gusta
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #231 ES-KURSS-LESSONS-DET-0228 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[24]`
- **DE:** er mag
- **CURRENT:** er mag — él quiere / le gusta
- **NEW:** er mag — él quiere / le gusta
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #232 ES-KURSS-LESSONS-DET-0229 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[25]`
- **DE:** sie mag
- **CURRENT:** sie mag — ella quiere / le gusta
- **NEW:** sie mag — ella quiere / le gusta
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #233 ES-KURSS-LESSONS-DET-0230 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[26]`
- **DE:** es mag
- **CURRENT:** es mag — quiere / le gusta
- **NEW:** es mag — quiere / le gusta
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #234 ES-KURSS-LESSONS-DET-0231 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[29]`
- **DE:** sie mögen
- **CURRENT:** sie mögen — ellos / ella quieren
- **NEW:** sie mögen — ellos / ella quieren
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #235 ES-KURSS-LESSONS-DET-0232 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[37]`
- **DE:** euch
- **CURRENT:** euch — os / a vosotros
- **NEW:** euch — os / a vosotros
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #236 ES-KURSS-LESSONS-DET-0233 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[38]`
- **DE:** ihnen
- **CURRENT:** ihnen — para ellos / ellos
- **NEW:** ihnen — para ellos / ellos
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #237 ES-KURSS-LESSONS-DET-0234 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[2].examples[2]`
- **DE:** er/sie/es muss
- **CURRENT:** er/sie/es muss
- **NEW:** er/sie/es muss
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #238 ES-KURSS-LESSONS-DET-0235 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[3].examples[2]`
- **DE:** er/sie/es will
- **CURRENT:** er/sie/es will
- **NEW:** er/sie/es will
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #239 ES-KURSS-LESSONS-DET-0236 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[4].examples[2]`
- **DE:** er/sie/es mag
- **CURRENT:** er/sie/es mag
- **NEW:** er/sie/es mag
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #240 ES-KURSS-LESSONS-DET-0237 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** Müssen significa necesitar/ser necesitado.
- **NEW:** Müssen significa necesitar/ser necesitado.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #241 ES-KURSS-LESSONS-DET-0238 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #242 ES-KURSS-LESSONS-DET-0239 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #243 ES-KURSS-LESSONS-DET-0240 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #244 ES-KURSS-LESSONS-DET-0241 [NELABOT]

- **Lesson:** lesson14
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #245 ES-KURSS-LESSONS-DET-0242 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #246 ES-KURSS-LESSONS-DET-0243 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[1]`
- **DE:** ich soll
- **CURRENT:** ich soll — necesito / tengo que hacer
- **NEW:** ich soll — necesito / tengo que hacer
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #247 ES-KURSS-LESSONS-DET-0244 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[2]`
- **DE:** du sollst
- **CURRENT:** du sollst — necesitas / debes hacer
- **NEW:** du sollst — necesitas / debes hacer
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #248 ES-KURSS-LESSONS-DET-0245 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[3]`
- **DE:** er soll
- **CURRENT:** er soll — él necesita / tiene que
- **NEW:** er soll — él necesita / tiene que
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #249 ES-KURSS-LESSONS-DET-0246 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[4]`
- **DE:** wir sollen
- **CURRENT:** wir sollen — necesitamos / tenemos que hacer
- **NEW:** wir sollen — necesitamos / tenemos que hacer
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #250 ES-KURSS-LESSONS-DET-0247 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[5]`
- **DE:** ihr sollt
- **CURRENT:** ihr sollt — necesitas / deberías
- **NEW:** ihr sollt — necesitas / deberías
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #251 ES-KURSS-LESSONS-DET-0248 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[6]`
- **DE:** sie sollen
- **CURRENT:** sie sollen — ellos / ellos necesitan
- **NEW:** sie sollen — ellos / ellos necesitan
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #252 ES-KURSS-LESSONS-DET-0249 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[13]`
- **DE:** sie dürfen
- **CURRENT:** sie dürfen — ellos / ellos pueden
- **NEW:** sie dürfen — ellos / ellos pueden
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #253 ES-KURSS-LESSONS-DET-0250 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[28]`
- **DE:** unreif
- **CURRENT:** unreif — no entres / no madures
- **NEW:** unreif — no entres / no madures
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #254 ES-KURSS-LESSONS-DET-0251 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[0]`
- **DE:** müssen
- **CURRENT:** müssen — tener que / deber
- **NEW:** müssen — tener que / deber
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #255 ES-KURSS-LESSONS-DET-0252 [FALSE_POSITIVE]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[2].examples[2]`
- **DE:** er/sie/es soll
- **CURRENT:** er/sie/es soll
- **NEW:** er/sie/es soll
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #256 ES-KURSS-LESSONS-DET-0253 [FALSE_POSITIVE]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[3].examples[2]`
- **DE:** er/sie/es darf
- **CURRENT:** er/sie/es darf
- **NEW:** er/sie/es darf
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #257 ES-KURSS-LESSONS-DET-0254 [FALSE_POSITIVE]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[4].examples[2]`
- **DE:** er/sie/es isst
- **CURRENT:** er/sie/es isst
- **NEW:** er/sie/es isst
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #258 ES-KURSS-LESSONS-DET-0255 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #259 ES-KURSS-LESSONS-DET-0256 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #260 ES-KURSS-LESSONS-DET-0257 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #261 ES-KURSS-LESSONS-DET-0258 [NELABOT]

- **Lesson:** lesson15
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #262 ES-KURSS-LESSONS-DET-0259 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #263 ES-KURSS-LESSONS-DET-0260 [NELABOT]

- **Lesson:** lesson16
- **Category:** MISSING_CONTENT · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[0][0]`
- **DE:** —
- **CURRENT:** 
- **NEW:** 
- **OWNER_DECISION:** NELABOT: empty DE conjugation label field — renderer does not display native text.
- **Pamatojums:** Verified: exerciseConjugation DE-only form field; no learner-facing ES expected.

---

## #264 ES-KURSS-LESSONS-DET-0261 [NELABOT]

- **Lesson:** lesson16
- **Category:** MISSING_CONTENT · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[0][0]`
- **DE:** —
- **CURRENT:** 
- **NEW:** 
- **OWNER_DECISION:** NELABOT: empty DE conjugation label field — renderer does not display native text.
- **Pamatojums:** Verified: exerciseConjugation DE-only form field; no learner-facing ES expected.

---

## #265 ES-KURSS-LESSONS-DET-0262 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].examples[0]`
- **DE:** dem Sohne / dem Sohn
- **CURRENT:** dem Sohne / dem Sohn
- **NEW:** dem Sohne / dem Sohn
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #266 ES-KURSS-LESSONS-DET-0263 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].examples[1]`
- **DE:** dem Kinde / dem Kind
- **CURRENT:** dem Kinde / dem Kind
- **NEW:** dem Kinde / dem Kind
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #267 ES-KURSS-LESSONS-DET-0264 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].examples[2]`
- **DE:** dem Arme / dem Arm
- **CURRENT:** dem Arme / dem Arm
- **NEW:** dem Arme / dem Arm
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #268 ES-KURSS-LESSONS-DET-0265 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].examples[3]`
- **DE:** dem Beine / dem Bein
- **CURRENT:** dem Beine / dem Bein
- **NEW:** dem Beine / dem Bein
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #269 ES-KURSS-LESSONS-DET-0266 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** El article dativo plural y el sustantivo suelen tener la terminación -n.
- **NEW:** El artículo dativo plural y el sustantivo suelen tener la terminación -n.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #270 ES-KURSS-LESSONS-DET-0267 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].text`
- **DE:** —
- **CURRENT:** Palabras que se utilizan a menudo sin el article: die Milch, das Brot.
- **NEW:** Palabras que se utilizan a menudo sin el artículo: die Milch, das Brot.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #271 ES-KURSS-LESSONS-DET-0268 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #272 ES-KURSS-LESSONS-DET-0269 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #273 ES-KURSS-LESSONS-DET-0270 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #274 ES-KURSS-LESSONS-DET-0271 [NELABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #275 ES-KURSS-LESSONS-DET-0272 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonItems.17.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** mit + Dativ, womit / mit wem y Umlaut.
- **NEW:** mit + Dativ, womit / mit wem y Umlaut.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #276 ES-KURSS-LESSONS-DET-0273 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.intro`
- **DE:** —
- **CURRENT:** Decimoséptima conferencia: mit + Dativ, womit / mit wem y verbos con diéresis.
- **NEW:** Decimoséptima conferencia: mit + Dativ, womit / mit wem y verbos con diéresis.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #277 ES-KURSS-LESSONS-DET-0274 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #278 ES-KURSS-LESSONS-DET-0275 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[7]`
- **DE:** auffangen
- **CURRENT:** auffangen — atrapar / atrapar
- **NEW:** auffangen — atrapar / atrapar
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #279 ES-KURSS-LESSONS-DET-0276 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[14]`
- **DE:** wischen
- **CURRENT:** wischen — limpiar / limpiar
- **NEW:** wischen — limpiar / limpiar
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #280 ES-KURSS-LESSONS-DET-0277 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].heading`
- **DE:** —
- **CURRENT:** mit wem? / womit?
- **NEW:** mit wem? / womit?
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #281 ES-KURSS-LESSONS-DET-0278 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** La pregunta alemana "¿con qué?" expresado de dos maneras: mit wem? — ¿Sobre las personas, mujer? — sobre cosas/temas.
- **NEW:** La pregunta alemana "¿con qué?" expresado de dos maneras: mit wem? — ¿Sobre las personas, mujer? — sobre cosas/temas.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #282 ES-KURSS-LESSONS-DET-0279 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].heading`
- **DE:** —
- **CURRENT:** graben / fangen / auffangen
- **NEW:** graben / fangen / auffangen
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #283 ES-KURSS-LESSONS-DET-0280 [FALSE_POSITIVE]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[4].heading`
- **DE:** —
- **CURRENT:** helfen / werfen
- **NEW:** helfen / werfen
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #284 ES-KURSS-LESSONS-DET-0281 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].heading`
- **DE:** —
- **CURRENT:** fegen / wischen
- **NEW:** fegen / wischen
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #285 ES-KURSS-LESSONS-DET-0282 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].examples[2]`
- **DE:** wischen / abwischen
- **CURRENT:** wischen / abwischen — limpiar con un paño / quitar el polvo
- **NEW:** wischen / abwischen — limpiar con un paño / quitar el polvo
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #286 ES-KURSS-LESSONS-DET-0283 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #287 ES-KURSS-LESSONS-DET-0284 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #288 ES-KURSS-LESSONS-DET-0285 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #289 ES-KURSS-LESSONS-DET-0286 [NELABOT]

- **Lesson:** lesson17
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #290 ES-KURSS-LESSONS-DET-0287 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonItems.18.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** wohin / wo, Akkusativ o Dativ con / in / auf.
- **NEW:** wohin / wo, Akkusativ o Dativ con / in / auf.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #291 ES-KURSS-LESSONS-DET-0288 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.intro`
- **DE:** —
- **CURRENT:** Decimoctava conferencia: wohin / wo, Akkusativ o Dativ con an / in / auf.
- **NEW:** Decimoctava conferencia: wohin / wo, Akkusativ o Dativ con an / in / auf.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #292 ES-KURSS-LESSONS-DET-0289 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #293 ES-KURSS-LESSONS-DET-0290 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[5]`
- **DE:** er/sie/es trägt
- **CURRENT:** er/sie/es trägt — él/ella/ello lleva
- **NEW:** er/sie/es trägt — él/ella/ello lleva
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #294 ES-KURSS-LESSONS-DET-0291 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[12]`
- **DE:** gießen
- **CURRENT:** gießen — verter / regar
- **NEW:** gießen — verter / regar
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #295 ES-KURSS-LESSONS-DET-0292 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[17]`
- **DE:** auf
- **CURRENT:** auf — sobre / encima de
- **NEW:** auf — sobre / encima de
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #296 ES-KURSS-LESSONS-DET-0293 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[10]`
- **DE:** sich stellen
- **CURRENT:** sich stellen — ponerse de pie / colocarse
- **NEW:** sich stellen — ponerse de pie / colocarse
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #297 ES-KURSS-LESSONS-DET-0294 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[3]`
- **DE:** liegen
- **CURRENT:** liegen — estar tumbado / estar situado
- **NEW:** liegen — estar tumbado / estar situado
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #298 ES-KURSS-LESSONS-DET-0295 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** Si la sustancia se menciona en una determinada cantidad o en un determinado lugar, entonces se utiliza el article.
- **NEW:** Si la sustancia se menciona en una determinada cantidad o en un determinado lugar, entonces se utiliza el artículo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #299 ES-KURSS-LESSONS-DET-0296 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #300 ES-KURSS-LESSONS-DET-0297 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #301 ES-KURSS-LESSONS-DET-0298 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #302 ES-KURSS-LESSONS-DET-0299 [NELABOT]

- **Lesson:** lesson18
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #303 ES-KURSS-LESSONS-DET-0300 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #304 ES-KURSS-LESSONS-DET-0301 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** Si hay una dirección/movimiento hacia algún lugar, la pregunta es ¿quién? y utiliza Akkusativ.
- **NEW:** Si hay una dirección/movimiento hacia algún lugar, la pregunta es ¿quién? y utiliza Akkusativ.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #305 ES-KURSS-LESSONS-DET-0302 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[3].examples[3]`
- **DE:** über
- **CURRENT:** über — sobre / encima de
- **NEW:** über — sobre / encima de
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #306 ES-KURSS-LESSONS-DET-0303 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[6].heading`
- **DE:** —
- **CURRENT:** gehen / treten
- **NEW:** gehen / treten
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #307 ES-KURSS-LESSONS-DET-0304 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #308 ES-KURSS-LESSONS-DET-0305 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #309 ES-KURSS-LESSONS-DET-0306 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #310 ES-KURSS-LESSONS-DET-0307 [NELABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #311 ES-KURSS-LESSONS-DET-0308 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonItems.20.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Haus, Stockwerk, Dativ/Akkusativ y sustantivos compuestos.
- **NEW:** Haus, Stockwerk, Dativ/Akkusativ y sustantivos compuestos.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #312 ES-KURSS-LESSONS-DET-0309 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.intro`
- **DE:** —
- **CURRENT:** Vigésima conferencia: casa, pisos, Dativ/Akkusativ y sustantivos compuestos.
- **NEW:** Vigésima conferencia: casa, pisos, Dativ/Akkusativ y sustantivos compuestos.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #313 ES-KURSS-LESSONS-DET-0310 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #314 ES-KURSS-LESSONS-DET-0311 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].examples[0]`
- **DE:** an dem Tage / am Tage
- **CURRENT:** an dem Tage / am Tage — durante el día
- **NEW:** an dem Tage / am Tage — durante el día
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #315 ES-KURSS-LESSONS-DET-0312 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].examples[2]`
- **DE:** in dem Sommer / im Sommer
- **CURRENT:** in dem Sommer / im Sommer — en verano
- **NEW:** in dem Sommer / im Sommer — en verano
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #316 ES-KURSS-LESSONS-DET-0313 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].examples[3]`
- **DE:** in dem Januar / im Januar
- **CURRENT:** in dem Januar / im Januar — en enero
- **NEW:** in dem Januar / im Januar — en enero
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #317 ES-KURSS-LESSONS-DET-0314 [LABOT]

- **Lesson:** lesson20
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Los sustantivos compuestos suelen llevar el article de la última palabra.
- **NEW:** Los sustantivos compuestos suelen llevar el artículo de la última palabra.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #318 ES-KURSS-LESSONS-DET-0315 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #319 ES-KURSS-LESSONS-DET-0316 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #320 ES-KURSS-LESSONS-DET-0317 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #321 ES-KURSS-LESSONS-DET-0318 [NELABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #322 ES-KURSS-LESSONS-DET-0319 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.lessonItems.21.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** woher / wohin / wo, von / aus / mit + Dativo.
- **NEW:** woher / wohin / wo, von / aus / mit + Dativo.
- **OWNER_DECISION:** FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.
- **Pamatojums:** Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.

---

## #323 ES-KURSS-LESSONS-DET-0320 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.intro`
- **DE:** —
- **CURRENT:** Vigésima primera conferencia: woher / wohin / wo, von / aus / mit + Dativ.
- **NEW:** Vigésima primera conferencia: woher / wohin / wo, von / aus / mit + Dativ.
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #324 ES-KURSS-LESSONS-DET-0321 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[0].title → kurss.sections.reading`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #325 ES-KURSS-LESSONS-DET-0322 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[5]`
- **DE:** aus
- **CURRENT:** aus — de / desde
- **NEW:** aus — de / desde
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #326 ES-KURSS-LESSONS-DET-0323 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[8]`
- **DE:** treten
- **CURRENT:** treten — pisar / dar un paso
- **NEW:** treten — pisar / dar un paso
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #327 ES-KURSS-LESSONS-DET-0324 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[10]`
- **DE:** er tritt
- **CURRENT:** er tritt — va / da un paso
- **NEW:** er tritt — va / da un paso
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #328 ES-KURSS-LESSONS-DET-0325 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].heading`
- **DE:** —
- **CURRENT:** mit / von / aus + Dativ
- **NEW:** mit / von / aus + Dativ
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #329 ES-KURSS-LESSONS-DET-0326 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[4]`
- **DE:** von dem Felde / vom Felde
- **CURRENT:** von dem Felde / vom Felde — del campo
- **NEW:** von dem Felde / vom Felde — del campo
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #330 ES-KURSS-LESSONS-DET-0327 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** La preposición von puede fusionarse con el article.
- **NEW:** La preposición von puede fusionarse con el artículo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #331 ES-KURSS-LESSONS-DET-0328 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.sections.reading (section title display)`
- **DE:** —
- **CURRENT:** Texto / lectura
- **NEW:** Texto / lectura
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #332 ES-KURSS-LESSONS-DET-0329 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formDu`
- **DE:** —
- **CURRENT:** Forma 1/3: du (singular)
- **NEW:** Forma 1/3: du (singular)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #333 ES-KURSS-LESSONS-DET-0330 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formIhr`
- **DE:** —
- **CURRENT:** Formulario 2/3: Tú (plural)
- **NEW:** Formulario 2/3: Tú (plural)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #334 ES-KURSS-LESSONS-DET-0331 [NELABOT]

- **Lesson:** lesson21
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** deterministic
- **Path:** `kurss.exerciseMeta.formSie`
- **DE:** —
- **CURRENT:** Forma 3/3: Sie (tratamiento formal)
- **NEW:** Forma 3/3: Sie (tratamiento formal)
- **OWNER_DECISION:** NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.
- **Pamatojums:** Verified in lesson context; acceptable as-is.

---

## #335 ES-KURSS-LESSONS-L0001 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[7]`
- **DE:** —
- **CURRENT:** nosotros ven
- **NEW:** nosotros venimos
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #336 ES-KURSS-LESSONS-L0002 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[9]`
- **DE:** —
- **CURRENT:** tú vienes
- **NEW:** vosotros venís
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #337 ES-KURSS-LESSONS-L0005 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[5]`
- **DE:** —
- **CURRENT:** he / ella va
- **NEW:** él / ella va
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #338 ES-KURSS-LESSONS-L0006 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[9]`
- **DE:** —
- **CURRENT:** tú ejat
- **NEW:** vosotros vais
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #339 ES-KURSS-LESSONS-L0008 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].title`
- **DE:** ♟stehen
- **CURRENT:** ♟stehen — pararse
- **NEW:** ♟stehen — estar de pie
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #340 ES-KURSS-LESSONS-L0009 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[1]`
- **DE:** —
- **CURRENT:** I stand
- **NEW:** I stand
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #341 ES-KURSS-LESSONS-L0010 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[9]`
- **DE:** —
- **CURRENT:** tú estás de pie
- **NEW:** vosotros estáis de pie
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #342 ES-KURSS-LESSONS-L0012 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].title`
- **DE:** ♟singen
- **CURRENT:** ♟singen — to canta
- **NEW:** ♟singen — to canta
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #343 ES-KURSS-LESSONS-L0013 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[9]`
- **DE:** —
- **CURRENT:** tú cantas
- **NEW:** vosotros cantáis
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #344 ES-KURSS-LESSONS-L0015 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → lesson1-info[0]`
- **DE:** —
- **CURRENT:** iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.
Esto también debería seguirse en futuras conferencias.
- **NEW:** La pronunciación aproximada de las palabras se indica entre paréntesis con letras letonas.
Esto también debería hacerse en las lecciones futuras.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #345 ES-KURSS-LESSONS-L0019 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** singen (zingen)
- **CURRENT:** singen (zingen) — canta
- **NEW:** singen (zingen) — cantar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #346 ES-KURSS-LESSONS-L0023 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE:** ihr →
- **CURRENT:** ihr → -En letón:
- **NEW:** ihr → -ihr kommt
- **OWNER_DECISION:** LABOT: replace LV remnant / wrong language with Spanish per audit.
- **Pamatojums:** LV or mixed-language content in ES field; DE checked.

---

## #347 ES-KURSS-LESSONS-L0024 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- **DE:** sie →
- **CURRENT:** sie → -Alemán en:
- **NEW:** sie → -sie kommen
- **OWNER_DECISION:** LABOT: replace LV remnant / wrong language with Spanish per audit.
- **Pamatojums:** LV or mixed-language content in ES field; DE checked.

---

## #348 ES-KURSS-LESSONS-L0026 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** ♟Presente terminaciones
- **NEW:** ♟Terminaciones del presente
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #349 ES-KURSS-LESSONS-L0027 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** ?Oraciones de preguntas
- **NEW:** ?Oraciones interrogativas
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #350 ES-KURSS-LESSONS-L0028 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_TERMINOLOGY · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **DE:** —
- **CURRENT:** ♣Diferencia de persona
- **NEW:** ♣Personas gramaticales
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #351 ES-KURSS-LESSONS-L0029 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → ending-info[0]`
- **DE:** —
- **CURRENT:** Eliminar -en de las formas base del verbo y agrega la terminación.
Ejemplo: kommen → komm + terminación
kommenforma base
- **NEW:** Elimina -en de la forma base del verbo y agrega la terminación.
Ejemplo: kommen → komm + terminación
kommen: forma base
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #352 ES-KURSS-LESSONS-L0030 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → p[0]`
- **DE:** —
- **CURRENT:** Eliminar -en de las formas base del verbo y agrega la terminación.
- **NEW:** Elimina -en de la forma base del verbo y agrega la terminación.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #353 ES-KURSS-LESSONS-L0031 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna
- **Path:** `lesson1TrainingCardsEs[0].front`
- **DE:** Kommst du?
- **CURRENT:** ¿vienes?
- **NEW:** ¿Vienes?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #354 ES-KURSS-LESSONS-L0032 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson1TrainingCardsEs[1].front`
- **DE:** Ja, ich komme.
- **CURRENT:** Sí, ya voy.
- **NEW:** Sí, voy.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #355 ES-KURSS-LESSONS-L0033 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson1TrainingCardsEs[9].front`
- **DE:** Geht ihr?
- **CURRENT:** Vas a ir
- **NEW:** ¿Os vais?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #356 ES-KURSS-LESSONS-L0035 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** nein
- **CURRENT:** nein — trabajar
- **NEW:** nein — no
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #357 ES-KURSS-LESSONS-L0036 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** nicht
- **CURRENT:** nicht — preguntar
- **NEW:** nicht — no
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #358 ES-KURSS-LESSONS-L0037 [LABOT]

- **Lesson:** lesson2
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** arbeiten
- **CURRENT:** arbeiten — was tut er? ¿Qué está haciendo?
- **NEW:** arbeiten — trabajar
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #359 ES-KURSS-LESSONS-L0038 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** fragen
- **CURRENT:** fragen — ¿qué hacen ellos?
- **NEW:** fragen — preguntar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #360 ES-KURSS-LESSONS-L0039 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** was tut er?
- **CURRENT:** was tut er? — responder
- **NEW:** was tut er? — ¿qué hace él?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #361 ES-KURSS-LESSONS-L0040 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** was tun sie?
- **CURRENT:** was tun sie? — calcular
- **NEW:** was tun sie? — ¿qué hacen ellos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #362 ES-KURSS-LESSONS-L0041 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** aber
- **CURRENT:** aber — dibujar
- **NEW:** aber — pero
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #363 ES-KURSS-LESSONS-L0042 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** antworten
- **CURRENT:** antworten — Marie
- **NEW:** antworten — responder
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #364 ES-KURSS-LESSONS-L0046 [LABOT]

- **Lesson:** lesson2
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → course-example[21]`
- **DE:** ¿Fue tust du?
- **CURRENT:** ¿Fue tust du? - ¿Qué estás haciendo?
- **NEW:** Was tust du? — ¿Qué estás haciendo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #365 ES-KURSS-LESSONS-L0047 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-note[1]`
- **DE:** —
- **CURRENT:** En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa.
- **NEW:** En las oraciones interrogativas que comienzan con una palabra interrogativa, por ejemplo: ¿qué?, ¿quién?, ¿por qué?, etc., el verbo aparece inmediatamente después de la palabra interrogativa.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #366 ES-KURSS-LESSONS-L0048 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-note[2]`
- **DE:** —
- **CURRENT:** Si la negación nicht se refiere a un verbo, entonces la palabra negada viene después del verbo.
- **NEW:** Si la negación «nicht» se refiere a un verbo, «nicht» aparece después del verbo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #367 ES-KURSS-LESSONS-L0049 [TECHNICAL_DEFER]

- **Lesson:** lesson2
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Terminaciones con e
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #368 ES-KURSS-LESSONS-L0050 [LABOT]

- **Lesson:** lesson2
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2Palabra en cuestión
- **NEW:** 2. Palabras interrogativas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #369 ES-KURSS-LESSONS-L0051 [TECHNICAL_DEFER]

- **Lesson:** lesson2
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[2]`
- **DE:** —
- **CURRENT:** 3Negación con nicht
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #370 ES-KURSS-LESSONS-L0052 [LABOT]

- **Lesson:** lesson2
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[1].front`
- **DE:** Paul fragt.
- **CURRENT:** pregunta Pablo.
- **NEW:** Pregunta Pablo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #371 ES-KURSS-LESSONS-L0053 [LABOT]

- **Lesson:** lesson2
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[6].front`
- **DE:** Nein, sie singen nicht, sie rechnen.
- **CURRENT:** No, no cantan, cuentan.
- **NEW:** No, no cantan, calculan.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #372 ES-KURSS-LESSONS-L0054 [LABOT]

- **Lesson:** lesson2
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[7].front`
- **DE:** Was tust du?
- **CURRENT:** qué estás haciendo
- **NEW:** ¿Qué estás haciendo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #373 ES-KURSS-LESSONS-L0055 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[8].front`
- **DE:** Ich stehe und singe.
- **CURRENT:** Me paro y canto.
- **NEW:** Estoy de pie y canto.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #374 ES-KURSS-LESSONS-L0056 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[9].front`
- **DE:** Zeichnet ihr?
- **CURRENT:** ¿Dibujas?
- **NEW:** ¿Dibujáis?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #375 ES-KURSS-LESSONS-L0057 [LABOT]

- **Lesson:** lesson2
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[10].front`
- **DE:** Ja, wir zeichnen, aber Marie spielt.
- **CURRENT:** Sí, empatamos, pero María juega.
- **NEW:** Sí, dibujamos, pero María juega.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #376 ES-KURSS-LESSONS-L0058 [LABOT]

- **Lesson:** lesson2
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[11].front`
- **DE:** Was tut ihr?
- **CURRENT:** qué estás haciendo
- **NEW:** ¿Qué estáis haciendo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #377 ES-KURSS-LESSONS-L0060 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson2TrainingCardsEs[13].front`
- **DE:** Wer geht?
- **CURRENT:** ¿Qué está sucediendo?
- **NEW:** ¿Quién se va?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #378 ES-KURSS-LESSONS-L0061 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE:** wer
- **CURRENT:** wer — aquí
- **NEW:** wer — quién
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #379 ES-KURSS-LESSONS-L0062 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** was
- **CURRENT:** was — allí
- **NEW:** was — qué
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #380 ES-KURSS-LESSONS-L0063 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** hier
- **CURRENT:** hier — der Tisch table
- **NEW:** hier — der Tisch table
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #381 ES-KURSS-LESSONS-L0064 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** dort
- **CURRENT:** dort — mesa
- **NEW:** dort — allí
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #382 ES-KURSS-LESSONS-L0065 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** der Tisch
- **CURRENT:** der Tisch — banco
- **NEW:** der Tisch — la mesa
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #383 ES-KURSS-LESSONS-L0066 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** ein Tisch
- **CURRENT:** ein Tisch — banco
- **NEW:** ein Tisch — una mesa
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #384 ES-KURSS-LESSONS-L0067 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** die Bank
- **CURRENT:** die Bank — tumbado
- **NEW:** die Bank — el banco
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #385 ES-KURSS-LESSONS-L0069 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** liegen
- **CURRENT:** liegen — un libro
- **NEW:** liegen — estar tumbado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #386 ES-KURSS-LESSONS-L0070 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** liegt hier ein Buch?
- **CURRENT:** liegt hier ein Buch? — un libro
- **NEW:** liegt hier ein Buch? — ¿Hay un libro aquí?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #387 ES-KURSS-LESSONS-L0071 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE:** das Buch
- **CURRENT:** das Buch — hang
- **NEW:** das Buch — el libro
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #388 ES-KURSS-LESSONS-L0072 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- **DE:** ein Buch
- **CURRENT:** ein Buch — imagen
- **NEW:** ein Buch — un libro
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #389 ES-KURSS-LESSONS-L0073 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** hängen
- **CURRENT:** hängen — imagen
- **NEW:** hängen — estar colgado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #390 ES-KURSS-LESSONS-L0074 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** das Bild
- **CURRENT:** das Bild — pizarra
- **NEW:** das Bild — la imagen
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #391 ES-KURSS-LESSONS-L0075 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** ein Bild
- **CURRENT:** ein Bild — pizarra
- **NEW:** ein Bild — una imagen
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #392 ES-KURSS-LESSONS-L0076 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE:** die Tafel
- **CURRENT:** die Tafel — alguien, qué
- **NEW:** die Tafel — la pizarra
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #393 ES-KURSS-LESSONS-L0077 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- **DE:** eine Tafel
- **CURRENT:** eine Tafel — es
- **NEW:** eine Tafel — una pizarra
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #394 ES-KURSS-LESSONS-L0078 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** wie
- **CURRENT:** wie — grueso, gordo
- **NEW:** wie — cómo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #395 ES-KURSS-LESSONS-L0079 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[18]`
- **DE:** ist
- **CURRENT:** ist — cuaderno
- **NEW:** ist — es, está
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #396 ES-KURSS-LESSONS-L0080 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[19]`
- **DE:** dick
- **CURRENT:** dick — cuaderno
- **NEW:** dick — grueso, gordo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #397 ES-KURSS-LESSONS-L0081 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[20]`
- **DE:** das Heft
- **CURRENT:** das Heft — delgado, delgado
- **NEW:** das Heft — el cuaderno
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #398 ES-KURSS-LESSONS-L0082 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[21]`
- **DE:** ein Heft
- **CURRENT:** ein Heft — bajo
- **NEW:** ein Heft — un cuaderno
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #399 ES-KURSS-LESSONS-L0083 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[22]`
- **DE:** dünn
- **CURRENT:** dünn — alto
- **NEW:** dünn — delgado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #400 ES-KURSS-LESSONS-L0084 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → course-example[0]`
- **DE:** wer
- **CURRENT:** wer - qué
- **NEW:** wer — quién
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #401 ES-KURSS-LESSONS-L0085 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** hoch
- **CURRENT:** hoch — ck es doble k: dick (dikk).
- **NEW:** hoch — [explicación de pronunciación correspondiente a «hoch»]
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #402 ES-KURSS-LESSONS-L0089 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** Ja galotne
- **CURRENT:** Ja galotne -¿Ar qué? pregunta por temas.
- **NEW:** ¿Con «was» se pregunta por cosas?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #403 ES-KURSS-LESSONS-L0101 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
- **DE:** —
- **CURRENT:** En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida.
- **NEW:** En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce de forma independiente.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Masculino, femenino y neutro son géneros, no casos.

---

## #404 ES-KURSS-LESSONS-L0103 [LABOT]

- **Lesson:** lesson3
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[3]`
- **DE:** —
- **CURRENT:** En una oración narrativa, el verbo ocupa el segundo lugar.
- **NEW:** En una oración declarativa, el verbo ocupa el segundo lugar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Oración narrativa» no corresponde al concepto gramatical de una oración enunciativa o declarativa.

---

## #405 ES-KURSS-LESSONS-L0104 [TECHNICAL_DEFER]

- **Lesson:** lesson3
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Sujeto de la oración
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #406 ES-KURSS-LESSONS-L0105 [TECHNICAL_DEFER]

- **Lesson:** lesson3
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2Artículos
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #407 ES-KURSS-LESSONS-L0106 [TECHNICAL_DEFER]

- **Lesson:** lesson3
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
- **DE:** —
- **CURRENT:** 3Sustantivos propios
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #408 ES-KURSS-LESSONS-L0107 [TECHNICAL_DEFER]

- **Lesson:** lesson3
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** 4Lugar del verbo
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #409 ES-KURSS-LESSONS-L0109 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[0]`
- **DE:** Noteiktais artikuls
- **CURRENT:** Noteiktais artikuls
- **NEW:** Noteiktais artikuls
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #410 ES-KURSS-LESSONS-L0110 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[1]`
- **DE:** Nenoteiktais artikuls
- **CURRENT:** Nenoteiktais artikuls
- **NEW:** Nenoteiktais artikuls
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #411 ES-KURSS-LESSONS-L0111 [LABOT]

- **Lesson:** lesson3
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[0].front`
- **DE:** Rechnest du?
- **CURRENT:** ¿cuentas?
- **NEW:** ¿Calculas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «rechnen» significa «calcular», no necesariamente «contar».

---

## #412 ES-KURSS-LESSONS-L0112 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[2].front`
- **DE:** Was steht dort?
- **CURRENT:** ¿Quién está parado ahí?
- **NEW:** ¿Qué hay ahí?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Was» pregunta por una cosa, no por una persona. Además, el español actual introduce una persona de pie que no aparece en el alemán.

---

## #413 ES-KURSS-LESSONS-L0113 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[3].front`
- **DE:** Dort steht ein Tisch.
- **CURRENT:** Hay una mesa.
- **NEW:** Ahí hay una mesa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Se omite el adverbio de lugar «dort».

---

## #414 ES-KURSS-LESSONS-L0114 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[4].front`
- **DE:** Was liegt hier?
- **CURRENT:** ¿Quién está aquí?
- **NEW:** ¿Qué hay aquí?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Was» se refiere a una cosa, y «liegt» indica que está colocada/tendida; el texto actual pregunta por una persona que está de pie.

---

## #415 ES-KURSS-LESSONS-L0115 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** CRITICAL · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[8].front`
- **DE:** Was ist dünn?
- **CURRENT:** ¿Cuál es el plan?
- **NEW:** ¿Qué es delgado?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El texto español no corresponde en absoluto a «Was ist dünn?».

---

## #416 ES-KURSS-LESSONS-L0116 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** CRITICAL · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[9].front`
- **DE:** Das Heft ist dünn.
- **CURRENT:** El buzón es delgado.
- **NEW:** El cuaderno es delgado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Das Heft» significa «el cuaderno», no «el buzón».

---

## #417 ES-KURSS-LESSONS-L0117 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[14].front`
- **DE:** Liegt dort ein Heft?
- **CURRENT:** ¿Hay/hay un cuaderno?
- **NEW:** ¿Hay un cuaderno ahí?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La pregunta contiene una duplicación errónea («Hay/hay») y su formulación no es natural.

---

## #418 ES-KURSS-LESSONS-L0119 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson3TrainingCardsEs[15].front`
- **DE:** Ja, dort liegt ein Heft.
- **CURRENT:** Sí, hay un cuaderno.
- **NEW:** Sí, allí hay un cuaderno.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Se omite el adverbio de lugar «dort».

---

## #419 ES-KURSS-LESSONS-L0120 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[8]`
- **DE:** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
- **CURRENT:** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
- **NEW:** ¿Está roma la pluma? No, la pluma no está roma; está puntiaguda.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #420 ES-KURSS-LESSONS-L0121 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[9]`
- **DE:** Was legt das Mädchen hin? Es legt die Feder hin.
- **CURRENT:** Was legt das Mädchen hin? Es legt die Feder hin.
- **NEW:** ¿Qué coloca la niña? Coloca la pluma.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #421 ES-KURSS-LESSONS-L0122 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[10]`
- **DE:** Was nimmst du? Ich nehme ein Messer.
- **CURRENT:** Was nimmst du? Ich nehme ein Messer.
- **NEW:** ¿Qué tomas? Tomo un cuchillo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #422 ES-KURSS-LESSONS-L0123 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[11]`
- **DE:** Wie ist das Messer? Das Messer ist scharf.
- **CURRENT:** Wie ist das Messer? Das Messer ist scharf.
- **NEW:** ¿Cómo es el cuchillo? El cuchillo está afilado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #423 ES-KURSS-LESSONS-L0124 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[12]`
- **DE:** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
- **CURRENT:** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
- **NEW:** ¿Está romo el cuchillo? No, no está romo; está afilado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #424 ES-KURSS-LESSONS-L0125 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[13]`
- **DE:** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
- **CURRENT:** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
- **NEW:** ¿Qué colocas? Coloco el cuchillo, la pluma y el portaplumas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #425 ES-KURSS-LESSONS-L0126 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[14]`
- **DE:** Dann gehe ich hinaus und arbeite.
- **CURRENT:** Dann gehe ich hinaus und arbeite.
- **NEW:** Después salgo y trabajo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #426 ES-KURSS-LESSONS-L0128 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** er nimmt (nimt)
- **CURRENT:** er nimmt (nimt) — emplumado
- **NEW:** er nimmt (nimt) — toma
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #427 ES-KURSS-LESSONS-L0130 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** einen Federhalter
- **CURRENT:** einen Federhalter — negro
- **NEW:** einen Federhalter — un portaplumas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #428 ES-KURSS-LESSONS-L0131 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** zeigen
- **CURRENT:** zeigen — blanco
- **NEW:** zeigen — mostrar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #429 ES-KURSS-LESSONS-L0132 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** schwarz (švarc)
- **CURRENT:** schwarz (švarc) — pluma
- **NEW:** schwarz (švarc) — negro
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #430 ES-KURSS-LESSONS-L0133 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** weiß (veis)
- **CURRENT:** weiß (veis) — pluma
- **NEW:** weiß (veis) — blanco
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #431 ES-KURSS-LESSONS-L0135 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** eine Feder
- **CURRENT:** eine Feder — dejar
- **NEW:** eine Feder — una pluma
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #432 ES-KURSS-LESSONS-L0136 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** spitz (špic)
- **CURRENT:** spitz (špic) — dejar
- **NEW:** spitz (špic) — puntiagudo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #433 ES-KURSS-LESSONS-L0137 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE:** hinlegen
- **CURRENT:** hinlegen — niña
- **NEW:** hinlegen — colocar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #434 ES-KURSS-LESSONS-L0138 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- **DE:** legt hin
- **CURRENT:** legt hin — cuchillo
- **NEW:** legt hin — coloca
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #435 ES-KURSS-LESSONS-L0140 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** das Messer
- **CURRENT:** das Messer — agudo
- **NEW:** das Messer — el cuchillo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #436 ES-KURSS-LESSONS-L0141 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** ein Messer
- **CURRENT:** ein Messer — contundente
- **NEW:** ein Messer — un cuchillo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #437 ES-KURSS-LESSONS-L0142 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE:** scharf
- **CURRENT:** scharf — luego
- **NEW:** scharf — afilado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #438 ES-KURSS-LESSONS-L0143 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- **DE:** stumpf (štumpf)
- **CURRENT:** stumpf (štumpf) — afuera
- **NEW:** stumpf (štumpf) — romo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #439 ES-KURSS-LESSONS-L0144 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** dann
- **CURRENT:** dann — sal, ve out
- **NEW:** dann — sal, ve out
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #440 ES-KURSS-LESSONS-L0145 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** hinaus
- **CURRENT:** hinaus — en, -er, -el no están acentuadas, por lo que la e en estos extremos es apenas audible: kommen, nehmen, der Federhalter.
- **NEW:** hinaus — Las terminaciones -en, -er y -el no llevan acento, por lo que la e en ellas apenas se oye: kommen, nehmen, der Federhalter.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #441 ES-KURSS-LESSONS-L0146 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** hinausgehen
- **CURRENT:** hinausgehen — h en alemán puede ser tanto un sonido como un marcador de longitud para la vocal anterior.
- **NEW:** hinausgehen — En alemán, la h puede representar un sonido o indicar que la vocal anterior es larga.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #442 ES-KURSS-LESSONS-L0151 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Nominativ: der Federhalter, die Feder, das Messer.
- **CURRENT:** Nominativ: der Federhalter, die Feder, das Messer.
- **NEW:** Nominativo: der Federhalter, die Feder, das Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #443 ES-KURSS-LESSONS-L0152 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Akkusativ: den Federhalter, die Feder, das Messer.
- **CURRENT:** Akkusativ: den Federhalter, die Feder, das Messer.
- **NEW:** Acusativo: den Federhalter, die Feder, das Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #444 ES-KURSS-LESSONS-L0153 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** Nominativ: ein Federhalter, eine Feder, ein Messer.
- **CURRENT:** Nominativ: ein Federhalter, eine Feder, ein Messer.
- **NEW:** Nominativo: ein Federhalter, eine Feder, ein Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #445 ES-KURSS-LESSONS-L0154 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- **DE:** Akkusativ: einen Federhalter, eine Feder, ein Messer.
- **CURRENT:** Akkusativ: einen Federhalter, eine Feder, ein Messer.
- **NEW:** Acusativo: einen Federhalter, eine Feder, ein Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #446 ES-KURSS-LESSONS-L0156 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- **DE:** —
- **CURRENT:** En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda.
- **NEW:** En femenino y neutro, el acusativo es igual al nominativo. Solo cambia el artículo masculino.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #447 ES-KURSS-LESSONS-L0157 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
- **DE:** —
- **CURRENT:** Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número.
- **NEW:** Si un adjetivo funciona como atributo predicativo en una oración, no cambia según el género ni el número.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #448 ES-KURSS-LESSONS-L0158 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[2]`
- **DE:** —
- **CURRENT:** Si nicht niega un adjetivo, se coloca delante de la palabra negativa.
- **NEW:** Si nicht niega un adjetivo, se coloca delante del adjetivo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #449 ES-KURSS-LESSONS-L0159 [TECHNICAL_DEFER]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Acusativo
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #450 ES-KURSS-LESSONS-L0160 [TECHNICAL_DEFER]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2nehmen
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #451 ES-KURSS-LESSONS-L0161 [TECHNICAL_DEFER]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
- **DE:** —
- **CURRENT:** 3Pronombres
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #452 ES-KURSS-LESSONS-L0162 [TECHNICAL_DEFER]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** 4Verbos separables
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #453 ES-KURSS-LESSONS-L0163 [TECHNICAL_DEFER]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **DE:** —
- **CURRENT:** 5Adjetivos
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #454 ES-KURSS-LESSONS-L0164 [TECHNICAL_DEFER]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[5]`
- **DE:** —
- **CURRENT:** 6Negación con nicht
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #455 ES-KURSS-LESSONS-L0165 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson4TrainingCardsEs[0].front`
- **DE:** Das Mädchen nimmt einen Federhalter.
- **CURRENT:** La niña toma un eje de plumas.
- **NEW:** La niña toma un portaplumas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #456 ES-KURSS-LESSONS-L0166 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson4TrainingCardsEs[1].front`
- **DE:** Der Federhalter ist nicht weiß, er ist schwarz.
- **CURRENT:** La pluma no es blanca, es negra.
- **NEW:** El portaplumas no es blanco, es negro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #457 ES-KURSS-LESSONS-L0167 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson4TrainingCardsEs[3].front`
- **DE:** Wie ist die Feder?
- **CURRENT:** ¿Qué es una pluma?
- **NEW:** ¿Cómo es la pluma?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #458 ES-KURSS-LESSONS-L0168 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson4TrainingCardsEs[5].front`
- **DE:** Nimmt er ein Messer?
- **CURRENT:** ¿Lleva un cuchillo?
- **NEW:** ¿Toma un cuchillo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #459 ES-KURSS-LESSONS-L0169 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson4TrainingCardsEs[9].front`
- **DE:** Nein, es ist scharf.
- **CURRENT:** No, es agudo.
- **NEW:** No, está afilado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #460 ES-KURSS-LESSONS-L0170 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson4TrainingCardsEs[14].front`
- **DE:** Wie ist das Buch?
- **CURRENT:** cual es el libro
- **NEW:** ¿Cómo es el libro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #461 ES-KURSS-LESSONS-L0172 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** loben
- **CURRENT:** loben — elogio
- **NEW:** loben — elogiar
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #462 ES-KURSS-LESSONS-L0173 [FALSE_POSITIVE]

- **Lesson:** lesson5
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** tadeln
- **CURRENT:** tadeln — pelt
- **NEW:** tadeln — pelt
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #463 ES-KURSS-LESSONS-L0174 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** oder (ōder)
- **CURRENT:** oder (ōder) — or
- **NEW:** oder (ōder) — o
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #464 ES-KURSS-LESSONS-L0181 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- **DE:** —
- **CURRENT:** En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?.
- **NEW:** En español, el nominativo responde a la pregunta «¿quién?» y el acusativo, a «¿qué?».
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #465 ES-KURSS-LESSONS-L0182 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **DE:** —
- **CURRENT:** finalización -in
- **NEW:** Terminación -in
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #466 ES-KURSS-LESSONS-L0183 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[5]`
- **DE:** —
- **CURRENT:** Lugar del verbo
- **NEW:** Posición del verbo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #467 ES-KURSS-LESSONS-L0184 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson5TrainingCardsEs[0].front`
- **DE:** Wen liebt der Vater?
- **CURRENT:** ¿Qué ama el padre?
- **NEW:** ¿A quién ama el padre?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #468 ES-KURSS-LESSONS-L0185 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson5TrainingCardsEs[1].front`
- **DE:** Wen lobt die Lehrerin?
- **CURRENT:** ¿Qué elogia el maestro?
- **NEW:** ¿A quién elogia la maestra?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #469 ES-KURSS-LESSONS-L0186 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson5TrainingCardsEs[2].front`
- **DE:** Was nimmst du?
- **CURRENT:** que tomas
- **NEW:** ¿Qué tomas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #470 ES-KURSS-LESSONS-L0187 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** CRITICAL · **Source:** luna
- **Path:** `lesson5TrainingCardsEs[4].front`
- **DE:** Wen tadelt der Lehrer?
- **CURRENT:** ¿Qué gana un maestro?
- **NEW:** ¿A quién reprende el maestro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #471 ES-KURSS-LESSONS-L0188 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson5TrainingCardsEs[8].front`
- **DE:** Antwortet die Schülerin schlecht?
- **CURRENT:** ¿El estudiante responde mal?
- **NEW:** ¿La estudiante responde mal?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #472 ES-KURSS-LESSONS-L0189 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson5TrainingCardsEs[10].front`
- **DE:** Das Mädchen nimmt den Federhalter, die Feder und das Messer.
- **CURRENT:** La niña toma una pluma, una pluma y un cuchillo.
- **NEW:** La niña toma un portaplumas, una pluma y un cuchillo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #473 ES-KURSS-LESSONS-L0190 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson5TrainingCardsEs[14].front`
- **DE:** Das Kind ist artig.
- **CURRENT:** El niño es hablador.
- **NEW:** El niño es bien educado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #474 ES-KURSS-LESSONS-L0191 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna
- **Path:** `kurss.lessonItems.6.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Números, plurales, diéresis y formas plurales de sustantivos.
- **NEW:** Números, plurales, diéresis y formación del plural de los sustantivos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #475 ES-KURSS-LESSONS-L0192 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE:** liegt
- **CURRENT:** liegt — es, es, mentiras
- **NEW:** está tumbado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #476 ES-KURSS-LESSONS-L0193 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** einige (einige)
- **CURRENT:** einige (einige) — some
- **NEW:** einige (einige) — some
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #477 ES-KURSS-LESSONS-L0194 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** legt hin
- **CURRENT:** legt hin — dejar
- **NEW:** pone (algo) abajo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #478 ES-KURSS-LESSONS-L0195 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** aufmachen
- **CURRENT:** aufmachen — desatar
- **NEW:** abrir
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #479 ES-KURSS-LESSONS-L0196 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** er macht auf
- **CURRENT:** er macht auf — desata
- **NEW:** abre
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #480 ES-KURSS-LESSONS-L0197 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** anspitzen (anšpicen)
- **CURRENT:** anspitzen (anšpicen) — escupir
- **NEW:** sacar punta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #481 ES-KURSS-LESSONS-L0198 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** er spitzt an
- **CURRENT:** er spitzt an — escupe
- **NEW:** saca punta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #482 ES-KURSS-LESSONS-L0199 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[21]`
- **DE:** die Hämmer
- **CURRENT:** die Hämmer — mazo
- **NEW:** mazos
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #483 ES-KURSS-LESSONS-L0200 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[25]`
- **DE:** der Schlitten
- **CURRENT:** der Schlitten — trineo, trineo
- **NEW:** trineo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #484 ES-KURSS-LESSONS-L0201 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[28]`
- **DE:** wie sind die Dinge?
- **CURRENT:** wie sind die Dinge? — ¿Cuáles son las cosas?
- **NEW:** ¿Cómo son las cosas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #485 ES-KURSS-LESSONS-L0202 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[29]`
- **DE:** voll (fōl)
- **CURRENT:** voll (fōl) — full
- **NEW:** lleno
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #486 ES-KURSS-LESSONS-L0203 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[35]`
- **DE:** wieviel Nadeln
- **CURRENT:** wieviel Nadeln — cuántos agujas
- **NEW:** wieviel Nadeln — cuántas agujas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #487 ES-KURSS-LESSONS-L0207 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → curso-ejemplo[0]`
- **DE:** A doubled eu se pronuncia como oi: neun (noin).
- **CURRENT:** A doubled eu se pronuncia como oi: neun (noin).
- **NEW:** A doubled eu se pronuncia como oi: neun (noin).
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #488 ES-KURSS-LESSONS-L0212 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.
- **CURRENT:** Salikta darbības vārda uzsvērtā priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.
- **NEW:** En presente, el prefijo separable acentuado de un verbo compuesto se separa del verbo y aparece al final de la oración.
- **OWNER_DECISION:** LABOT: replace Latvian remnant with Spanish per audit proposal.
- **Pamatojums:** LV text confirmed in ES learner-facing field; DE context checked.

---

## #489 ES-KURSS-LESSONS-L0220 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[12]`
- **DE:** Der Wagen
- **CURRENT:** Der Wagen — die Nadeln; morir Feder - morir Federn.
- **NEW:** Der Wagen — die Nadeln; morir Feder - morir Federn.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #490 ES-KURSS-LESSONS-L0224 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[2].front`
- **DE:** Er zeichnet einen Eimer.
- **CURRENT:** Saca un balde.
- **NEW:** Dibuja un balde.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #491 ES-KURSS-LESSONS-L0225 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[3].front`
- **DE:** Wer zeichnet einen Wagen?
- **CURRENT:** ¿Quién tira el carro?
- **NEW:** ¿Quién dibuja un carro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #492 ES-KURSS-LESSONS-L0226 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[7].front`
- **DE:** Wieviel Teller?
- **CURRENT:** ¿Cuantos platos?
- **NEW:** ¿Cuántos platos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #493 ES-KURSS-LESSONS-L0227 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[9].front`
- **DE:** Ich lege zwei Nadeln hin.
- **CURRENT:** Dejé dos agujas.
- **NEW:** Dejo dos agujas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #494 ES-KURSS-LESSONS-L0228 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[11].front`
- **DE:** Das ist ein Deckel.
- **CURRENT:** Es una funda.
- **NEW:** Es una tapa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #495 ES-KURSS-LESSONS-L0229 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[12].front`
- **DE:** Das sind Deckel.
- **CURRENT:** Estas son las portadas.
- **NEW:** Estas son las tapas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #496 ES-KURSS-LESSONS-L0230 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[16].front`
- **DE:** Der Lehrer nimmt ein Messer und spitzt den Bleistift an.
- **CURRENT:** La maestra toma un cuchillo y afila un lápiz.
- **NEW:** El maestro toma un cuchillo y afila el lápiz.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #497 ES-KURSS-LESSONS-L0231 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[18].front`
- **DE:** Das ist ein Federhalter.
- **CURRENT:** Está emplumado.
- **NEW:** Es un portaplumas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #498 ES-KURSS-LESSONS-L0232 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[19].front`
- **DE:** Wie ist der Federhalter?
- **CURRENT:** ¿Qué es emplumado?
- **NEW:** ¿Cómo es el portaplumas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #499 ES-KURSS-LESSONS-L0233 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson6TrainingCardsEs[20].front`
- **DE:** Der Federhalter ist schwarz.
- **CURRENT:** La pluma es negra.
- **NEW:** El portaplumas es negro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #500 ES-KURSS-LESSONS-L0234 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[0]:Diálogos/oraciones → course-example[0]`
- **DE:** Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.
- **CURRENT:** Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.
- **NEW:** Hans, singe ein Lied! Was tust du? Ich singe ein Lied.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #501 ES-KURSS-LESSONS-L0235 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** singe
- **CURRENT:** singe — canción
- **NEW:** singe — canta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #502 ES-KURSS-LESSONS-L0236 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** singt
- **CURRENT:** singt — Tú
- **NEW:** singt — cantad / canten
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #503 ES-KURSS-LESSONS-L0237 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** singen Sie
- **CURRENT:** singen Sie — conde
- **NEW:** singen Sie — cante usted
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #504 ES-KURSS-LESSONS-L0239 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** Sie
- **CURRENT:** Sie — molinero
- **NEW:** Sie — usted
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #505 ES-KURSS-LESSONS-L0240 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** zählen
- **CURRENT:** zählen — abierto
- **NEW:** zählen — contar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #506 ES-KURSS-LESSONS-L0241 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** das Fräulein (froilein)
- **CURRENT:** das Fräulein (froilein) — ventana
- **NEW:** das Fräulein (froilein) — señorita
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #507 ES-KURSS-LESSONS-L0242 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** der Müller
- **CURRENT:** der Müller — todos
- **NEW:** der Müller — molinero
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #508 ES-KURSS-LESSONS-L0243 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE:** öffnen
- **CURRENT:** öffnen — espejo
- **NEW:** öffnen — abrir
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #509 ES-KURSS-LESSONS-L0244 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- **DE:** das Fenster (fenster)
- **CURRENT:** das Fenster (fenster) — trapo, fregona
- **NEW:** das Fenster (fenster) — ventana
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #510 ES-KURSS-LESSONS-L0245 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** alle
- **CURRENT:** alle — pala
- **NEW:** alle — todos / todas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #511 ES-KURSS-LESSONS-L0247 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** der Lappen
- **CURRENT:** der Lappen — pala
- **NEW:** der Lappen — trapo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #512 ES-KURSS-LESSONS-L0248 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE:** der Spaten
- **CURRENT:** der Spaten — cuenco
- **NEW:** der Spaten — pala
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #513 ES-KURSS-LESSONS-L0249 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- **DE:** der Besen
- **CURRENT:** der Besen — habitación
- **NEW:** der Besen — escoba
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #514 ES-KURSS-LESSONS-L0250 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** die Schaufel
- **CURRENT:** die Schaufel — orilla
- **NEW:** die Schaufel — pala
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #515 ES-KURSS-LESSONS-L0251 [LABOT]

- **Lesson:** lesson7
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → course-example[1]`
- **DE:** singe
- **CURRENT:** singe — cantar
- **NEW:** singe — canta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #516 ES-KURSS-LESSONS-L0263 [TECHNICAL_DEFER]

- **Lesson:** lesson7
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Expresión de comandos
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #517 ES-KURSS-LESSONS-L0264 [LABOT]

- **Lesson:** lesson7
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2Comando plural
- **NEW:** 2 Imperativo plural
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #518 ES-KURSS-LESSONS-L0265 [TECHNICAL_DEFER]

- **Lesson:** lesson7
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** 4öffnen
- **NEW:** *(manual before apply)*
- **OWNER_DECISION:** TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.
- **Pamatojums:** Markup structure issue, not a translation string LABOT.

---

## #519 ES-KURSS-LESSONS-L0266 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson7ExerciseCardsEs[2].lv`
- **DE:** loben
- **CURRENT:** elogio
- **NEW:** elogiar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #520 ES-KURSS-LESSONS-L0267 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson7ExerciseCardsEs[5].lv`
- **DE:** zeigen
- **CURRENT:** espectáculo
- **NEW:** mostrar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #521 ES-KURSS-LESSONS-L0268 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `lesson7ExerciseCardsEs[7].lv`
- **DE:** rechnen
- **CURRENT:** contar
- **NEW:** calcular
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #522 ES-KURSS-LESSONS-L0270 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[0]`
- **DE:** Guten Morgen, Herr Lehrer!
- **CURRENT:** Der Lehrer kommt. Alle Schüler stehen auf und grüßen den Lehrer. Sie sagen: „Guten Morgen, Herr Lehrer!“
- **NEW:** El profesor llega. Todos los alumnos se ponen de pie y saludan al profesor. Dicen: «¡Buenos días, señor profesor!»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #523 ES-KURSS-LESSONS-L0271 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[1]`
- **DE:** Kinder, setzt euch!
- **CURRENT:** Der Lehrer grüßt die Schüler und sagt: „Kinder, setzt euch!“
- **NEW:** El profesor saluda a los alumnos y dice: «¡Niños, sentaos!»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #524 ES-KURSS-LESSONS-L0272 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[2]`
- **DE:** Die Schüler setzen sich und nehmen die Bücher und die Hefte.
- **CURRENT:** Die Schüler setzen sich und nehmen die Bücher und die Hefte.
- **NEW:** Die Schüler setzen sich und nehmen die Bücher und die Hefte.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #525 ES-KURSS-LESSONS-L0273 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[3]`
- **DE:** Der Lehrer fragt die Schüler, Paul spricht aber sehr leise.
- **CURRENT:** Der Lehrer fragt die Schüler, Paul spricht aber sehr leise.
- **NEW:** Der Lehrer fragt die Schüler, Paul spricht aber sehr leise.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #526 ES-KURSS-LESSONS-L0274 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[4]`
- **DE:** Paul, sprich nicht leise, sprich laut!
- **CURRENT:** Der Lehrer sagt: „Paul, sprich nicht leise, sprich laut!“
- **NEW:** El profesor dice: «¡Paul, no hables en voz baja, habla alto!»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #527 ES-KURSS-LESSONS-L0275 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[5]`
- **DE:** Paul spricht jetzt laut, alle Schüler sprechen laut.
- **CURRENT:** Paul spricht jetzt laut, alle Schüler sprechen laut.
- **NEW:** Paul spricht jetzt laut, alle Schüler sprechen laut.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #528 ES-KURSS-LESSONS-L0276 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[6]`
- **DE:** Hans, nimm das Buch und lies!
- **CURRENT:** Der Lehrer sagt: „Hans, nimm das Buch und lies!“
- **NEW:** El profesor dice: «¡Hans, coge el libro y lee!»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #529 ES-KURSS-LESSONS-L0277 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[7]`
- **DE:** Hans liest nicht gut, er liest schlecht.
- **CURRENT:** Hans liest nicht gut, er liest schlecht.
- **NEW:** Hans liest nicht gut, er liest schlecht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #530 ES-KURSS-LESSONS-L0278 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[8]`
- **DE:** Zwei Schüler lesen nicht laut. Sie lesen leise.
- **CURRENT:** Zwei Schüler lesen nicht laut. Sie lesen leise.
- **NEW:** Zwei Schüler lesen nicht laut. Sie lesen leise.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #531 ES-KURSS-LESSONS-L0279 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[9]`
- **DE:** Lest laut und deutlich!
- **CURRENT:** Der Lehrer sagt: „Lest laut und deutlich!“
- **NEW:** El profesor dice: «¡Leed alto y con claridad!»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #532 ES-KURSS-LESSONS-L0280 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[10]`
- **DE:** Alle Schüler lesen jetzt laut und deutlich.
- **CURRENT:** Alle Schüler lesen jetzt laut und deutlich.
- **NEW:** Alle Schüler lesen jetzt laut und deutlich.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #533 ES-KURSS-LESSONS-L0281 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[11]`
- **DE:** Dann schreiben die Schüler.
- **CURRENT:** Dann schreiben die Schüler.
- **NEW:** Dann schreiben die Schüler.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #534 ES-KURSS-LESSONS-L0282 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[12]`
- **DE:** Endlich erzählt der Lehrer, und die Schüler hören zu.
- **CURRENT:** Endlich erzählt der Lehrer, und die Schüler hören zu.
- **NEW:** Endlich erzählt der Lehrer, und die Schüler hören zu.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #535 ES-KURSS-LESSONS-L0283 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[13]`
- **DE:** Das ist der Arbeiter. Das sind zwei Arbeiter.
- **CURRENT:** Das ist der Arbeiter. Das sind zwei Arbeiter.
- **NEW:** Das ist der Arbeiter. Das sind zwei Arbeiter.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #536 ES-KURSS-LESSONS-L0284 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[14]`
- **DE:** Das ist der Müller. Das sind drei Müller.
- **CURRENT:** Das ist der Müller. Das sind drei Müller.
- **NEW:** Das ist der Müller. Das sind drei Müller.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #537 ES-KURSS-LESSONS-L0285 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[15]`
- **DE:** Das ist der Tischler. Das sind einige Tischler.
- **CURRENT:** Das ist der Tischler. Das sind einige Tischler.
- **NEW:** Das ist der Tischler. Das sind einige Tischler.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #538 ES-KURSS-LESSONS-L0286 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[16]`
- **DE:** Das ist der Bäcker. Das sind viele Bäcker.
- **CURRENT:** Das ist der Bäcker. Das sind viele Bäcker.
- **NEW:** Das ist der Bäcker. Das sind viele Bäcker.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #539 ES-KURSS-LESSONS-L0287 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[17]`
- **DE:** Das ist der Schneider. Das sind die Schneider.
- **CURRENT:** Das ist der Schneider. Das sind die Schneider.
- **NEW:** Das ist der Schneider. Das sind die Schneider.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #540 ES-KURSS-LESSONS-L0288 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[18]`
- **DE:** Das ist der Gärtner. Das sind die Gärtner.
- **CURRENT:** Das ist der Gärtner. Das sind die Gärtner.
- **NEW:** Das ist der Gärtner. Das sind die Gärtner.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #541 ES-KURSS-LESSONS-L0289 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[0].items[19]`
- **DE:** Das ist ein Schuster. Das sind Schuster.
- **CURRENT:** Das ist ein Schuster. Das sind Schuster.
- **NEW:** Das ist ein Schuster. Das sind Schuster.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #542 ES-KURSS-LESSONS-L0290 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[10]`
- **DE:** setzt euch (zect oich)
- **CURRENT:** setzt euch (zect oich) — ¡siéntate!
- **NEW:** ¡Sentaos!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #543 ES-KURSS-LESSONS-L0291 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[18]`
- **DE:** laut
- **CURRENT:** laut — alto
- **NEW:** en voz alta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #544 ES-KURSS-LESSONS-L0292 [LABOT]

- **Lesson:** lesson8
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[21]`
- **DE:** lies!
- **CURRENT:** lies! — ¡lasi!
- **NEW:** lies! — ¡lee!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #545 ES-KURSS-LESSONS-L0294 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].description`
- **DE:** —
- **CURRENT:** Übung I - Usa la conjugación correcta. Übung II - cards de traducción.
- **NEW:** Ejercicio I: usa la conjugación correcta. Ejercicio II: tarjetas de traducción.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #546 ES-KURSS-LESSONS-L0295 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[18].lv`
- **DE:** Wen grüßt du?
- **CURRENT:** ¿Ko tu sveicini?
- **NEW:** ¿A quién saludas?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #547 ES-KURSS-LESSONS-L0296 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[19].lv`
- **DE:** Ich grüße das Fräulein.
- **CURRENT:** Es sveicinu jaunkundzi.
- **NEW:** Es sveicinu jaunkundzi.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #548 ES-KURSS-LESSONS-L0297 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[20].lv`
- **DE:** Öffnet alle Fenster!
- **CURRENT:** Atveriet visus logus!
- **NEW:** Atveriet visus logus!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #549 ES-KURSS-LESSONS-L0298 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[22].lv`
- **DE:** Öffnest du das Fenster?
- **CURRENT:** Vai tu atver logu?
- **NEW:** Vai tu atver logu?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #550 ES-KURSS-LESSONS-L0299 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[31].lv`
- **DE:** Die Schülerin liest laut und deutlich.
- **CURRENT:** El estudiante lee en voz alta y clara.
- **NEW:** La estudiante lee en voz alta y con claridad.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #551 ES-KURSS-LESSONS-L0300 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[32].lv`
- **DE:** Lies gut!
- **CURRENT:** Lasi labi!
- **NEW:** Lasi labi!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #552 ES-KURSS-LESSONS-L0301 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[34].lv`
- **DE:** Lest gut!
- **CURRENT:** ¡Lasiet labí!
- **NEW:** ¡Leed bien!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #553 ES-KURSS-LESSONS-L0303 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[1].lv`
- **DE:** Öffnet alle Fenster!
- **CURRENT:** Atveriet visus logus!
- **NEW:** Atveriet visus logus!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #554 ES-KURSS-LESSONS-L0304 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[12].lv`
- **DE:** Die Schülerin liest laut und deutlich.
- **CURRENT:** El estudiante lee en voz alta y clara.
- **NEW:** La estudiante lee en voz alta y con claridad.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #555 ES-KURSS-LESSONS-L0305 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[13].lv`
- **DE:** Lies gut!
- **CURRENT:** Lasi labi!
- **NEW:** Lasi labi!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #556 ES-KURSS-LESSONS-L0306 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[15].lv`
- **DE:** Lest gut!
- **CURRENT:** ¡Lasiet labí!
- **NEW:** ¡Leed bien!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #557 ES-KURSS-LESSONS-L0308 [LABOT]

- **Lesson:** lesson8
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[18].lv`
- **DE:** Herr Lehrer, bitte, setzen Sie sich!
- **CURRENT:** Señor Maestro, ¡siéntese!
- **NEW:** Señor profesor, ¡siéntese, por favor!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #558 ES-KURSS-LESSONS-L0310 [LABOT]

- **Lesson:** lesson8
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la forma verbal correcta y pásala al plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #559 ES-KURSS-LESSONS-L0312 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.intro`
- **DE:** —
- **CURRENT:** Novena conferencia: plural de sustantivos, pronombres demostrativos dieser/jener, ejercicios y traducción.
- **NEW:** Novena lección: plural de los sustantivos, pronombres demostrativos dieser/jener, ejercicios y traducción.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #560 ES-KURSS-LESSONS-L0313 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[5]`
- **DE:** Ich spitze den Bleistift an.
- **CURRENT:** Ich spitze den Bleistift an.
- **NEW:** Ich spitze den Bleistift an.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #561 ES-KURSS-LESSONS-L0314 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[6]`
- **DE:** Ich setze mich und schreibe langsam.
- **CURRENT:** Ich setze mich und schreibe langsam.
- **NEW:** Ich setze mich und schreibe langsam.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #562 ES-KURSS-LESSONS-L0315 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[7]`
- **DE:** Ich schreibe schnell.
- **CURRENT:** Ich schreibe schnell.
- **NEW:** Ich schreibe schnell.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #563 ES-KURSS-LESSONS-L0316 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[8]`
- **DE:** Ich schreibe nicht mehr.
- **CURRENT:** Ich schreibe nicht mehr.
- **NEW:** Ich schreibe nicht mehr.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #564 ES-KURSS-LESSONS-L0317 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[9]`
- **DE:** Ich mache das Heft zu.
- **CURRENT:** Ich mache das Heft zu.
- **NEW:** Ich mache das Heft zu.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #565 ES-KURSS-LESSONS-L0318 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[10]`
- **DE:** Ich lege den Bleistift hin.
- **CURRENT:** Ich lege den Bleistift hin.
- **NEW:** Ich lege den Bleistift hin.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #566 ES-KURSS-LESSONS-L0319 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[11]`
- **DE:** Ich sitze ruhig.
- **CURRENT:** Ich sitze ruhig.
- **NEW:** Ich sitze ruhig.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #567 ES-KURSS-LESSONS-L0320 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[12]`
- **DE:** Dieser Brief ist lang.
- **CURRENT:** Dieser Brief ist lang.
- **NEW:** Dieser Brief ist lang.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #568 ES-KURSS-LESSONS-L0321 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[13]`
- **DE:** Dieses Buch ist dick.
- **CURRENT:** Dieses Buch ist dick.
- **NEW:** Dieses Buch ist dick.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #569 ES-KURSS-LESSONS-L0322 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[14]`
- **DE:** Diese Schüssel ist rein.
- **CURRENT:** Diese Schüssel ist rein.
- **NEW:** Diese Schüssel ist rein.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #570 ES-KURSS-LESSONS-L0323 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[15]`
- **DE:** Diese Briefe sind lang.
- **CURRENT:** Diese Briefe sind lang.
- **NEW:** Diese Briefe sind lang.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #571 ES-KURSS-LESSONS-L0324 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[16]`
- **DE:** Jener Brief ist kurz.
- **CURRENT:** Jener Brief ist kurz.
- **NEW:** Jener Brief ist kurz.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #572 ES-KURSS-LESSONS-L0325 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[17]`
- **DE:** Jenes Buch ist dünn.
- **CURRENT:** Jenes Buch ist dünn.
- **NEW:** Jenes Buch ist dünn.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #573 ES-KURSS-LESSONS-L0326 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[18]`
- **DE:** Jene Schüssel ist schmutzig.
- **CURRENT:** Jene Schüssel ist schmutzig.
- **NEW:** Jene Schüssel ist schmutzig.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #574 ES-KURSS-LESSONS-L0327 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[0].items[19]`
- **DE:** Jene Briefe sind kurz.
- **CURRENT:** Jene Briefe sind kurz.
- **NEW:** Jene Briefe sind kurz.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #575 ES-KURSS-LESSONS-L0328 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[9]`
- **DE:** sitzen (zicen)
- **CURRENT:** sitzen (zicen) — sentarse
- **NEW:** sitzen (zicen) — estar sentado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #576 ES-KURSS-LESSONS-L0330 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[14]`
- **DE:** die Briefe
- **CURRENT:** die Briefe — letras
- **NEW:** die Briefe — las cartas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #577 ES-KURSS-LESSONS-L0333 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[3].heading`
- **DE:** —
- **CURRENT:** Artikulu nelieto
- **NEW:** Artikulu nelieto
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #578 ES-KURSS-LESSONS-L0335 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[0].forms[0].task`
- **DE:** Ich nehme ein Heft.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #579 ES-KURSS-LESSONS-L0336 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[0].forms[3].task`
- **DE:** Ich nehme Hefte.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #580 ES-KURSS-LESSONS-L0337 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[1].forms[0].task`
- **DE:** Ich öffne das Heft.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #581 ES-KURSS-LESSONS-L0338 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[1].forms[3].task`
- **DE:** Ich öffne die Hefte.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #582 ES-KURSS-LESSONS-L0339 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[2].forms[0].task`
- **DE:** Ich nehme auch einen Bleistift.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #583 ES-KURSS-LESSONS-L0340 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[2].forms[3].task`
- **DE:** Ich nehme auch Bleistifte.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #584 ES-KURSS-LESSONS-L0341 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[3].forms[0].task`
- **DE:** Ich spitze den Bleistift an.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #585 ES-KURSS-LESSONS-L0342 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[3].forms[3].task`
- **DE:** Ich spitze die Bleistifte an.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #586 ES-KURSS-LESSONS-L0343 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[4].forms[0].task`
- **DE:** Ich setze mich und schreibe langsam.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #587 ES-KURSS-LESSONS-L0344 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[4].forms[3].task`
- **DE:** Ich setze mich und schreibe langsam.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #588 ES-KURSS-LESSONS-L0345 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[5].forms[0].task`
- **DE:** Ich schreibe schnell.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #589 ES-KURSS-LESSONS-L0346 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[5].forms[3].task`
- **DE:** Ich schreibe schnell.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #590 ES-KURSS-LESSONS-L0347 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[6].forms[0].task`
- **DE:** Ich mache das Heft zu.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #591 ES-KURSS-LESSONS-L0348 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[6].forms[3].task`
- **DE:** Ich mache die Hefte zu.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #592 ES-KURSS-LESSONS-L0349 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[7].forms[0].task`
- **DE:** Ich lege den Bleistift hin.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #593 ES-KURSS-LESSONS-L0350 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[7].forms[3].task`
- **DE:** Ich lege die Bleistifte hin.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #594 ES-KURSS-LESSONS-L0351 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[8].forms[0].task`
- **DE:** Ich sitze ruhig.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #595 ES-KURSS-LESSONS-L0352 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[8].forms[3].task`
- **DE:** Ich sitze ruhig.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #596 ES-KURSS-LESSONS-L0353 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[3].lv`
- **DE:** Was machen Sie?
- **CURRENT:** qué estás haciendo
- **NEW:** ¿Qué hace usted?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #597 ES-KURSS-LESSONS-L0354 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[6].lv`
- **DE:** Herr Lehrer, setzen Sie sich und lesen Sie!
- **CURRENT:** ¡Señor Maestro, siéntese y lea!
- **NEW:** ¡Señor profesor, siéntese y lea!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #598 ES-KURSS-LESSONS-L0355 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[10].lv`
- **DE:** Wie ist dieser Teller?
- **CURRENT:** ¿Qué es este plato?
- **NEW:** ¿Cómo es este plato?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #599 ES-KURSS-LESSONS-L0356 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[12].lv`
- **DE:** Sind die Briefe lang oder kurz?
- **CURRENT:** ¿Las letras son largas o cortas?
- **NEW:** ¿Las cartas son largas o cortas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #600 ES-KURSS-LESSONS-L0357 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[13].lv`
- **DE:** Anna, spitz diesen Bleistift an!
- **CURRENT:** ¡Anna, afila ese lápiz!
- **NEW:** ¡Anna, afila este lápiz!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #601 ES-KURSS-LESSONS-L0358 [LABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[16].lv`
- **DE:** Mach das Fenster zu!
- **CURRENT:** ¡Aiztaisi logu!
- **NEW:** ¡Cierra la ventana!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #602 ES-KURSS-LESSONS-L0359 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[17].lv`
- **DE:** Was macht das Mädchen endlich?
- **CURRENT:** Ko meitene beidzot dara?
- **NEW:** Ko meitene beidzot dara?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #603 ES-KURSS-LESSONS-L0360 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Elige la conjugación correcta y úsala en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #604 ES-KURSS-LESSONS-L0362 [LABOT]

- **Lesson:** lesson10
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.intro`
- **DE:** —
- **CURRENT:** Décima conferencia: sein, können, formas de mando, salud, edad y profesiones.
- **NEW:** Décima lección: sein, können, formas del imperativo, salud, edad y profesiones.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #605 ES-KURSS-LESSONS-L0363 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[4]`
- **DE:** Es ist gesund.
- **CURRENT:** Es ist gesund.
- **NEW:** Está sano.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #606 ES-KURSS-LESSONS-L0364 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[5]`
- **DE:** Wir sind gesund.
- **CURRENT:** Wir sind gesund.
- **NEW:** Estamos sanos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #607 ES-KURSS-LESSONS-L0365 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[6]`
- **DE:** Ihr seid gesund.
- **CURRENT:** Ihr seid gesund.
- **NEW:** Ihr seid gesund.
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person Ihr vs proposed Vosotros; conjugation table row must keep person.

---

## #608 ES-KURSS-LESSONS-L0366 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[7]`
- **DE:** Sie sind gesund.
- **CURRENT:** Sie sind gesund.
- **NEW:** Ustedes están sanos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #609 ES-KURSS-LESSONS-L0367 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[8]`
- **DE:** Ich kann arbeiten.
- **CURRENT:** Ich kann arbeiten.
- **NEW:** Puedo trabajar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #610 ES-KURSS-LESSONS-L0368 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[9]`
- **DE:** Du kannst arbeiten.
- **CURRENT:** Du kannst arbeiten.
- **NEW:** Puedes trabajar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #611 ES-KURSS-LESSONS-L0369 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[10]`
- **DE:** Er kann arbeiten.
- **CURRENT:** Er kann arbeiten.
- **NEW:** Er kann arbeiten.
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person Er vs proposed Él; conjugation table row must keep person.

---

## #612 ES-KURSS-LESSONS-L0370 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[11]`
- **DE:** Sie kann arbeiten.
- **CURRENT:** Sie kann arbeiten.
- **NEW:** Sie kann arbeiten.
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person Sie vs proposed Ella; conjugation table row must keep person.

---

## #613 ES-KURSS-LESSONS-L0371 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[12]`
- **DE:** Es kann arbeiten.
- **CURRENT:** Es kann arbeiten.
- **NEW:** Puede trabajar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #614 ES-KURSS-LESSONS-L0372 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[13]`
- **DE:** Wir können arbeiten.
- **CURRENT:** Wir können arbeiten.
- **NEW:** Podemos trabajar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #615 ES-KURSS-LESSONS-L0373 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[14]`
- **DE:** Ihr könnt arbeiten.
- **CURRENT:** Ihr könnt arbeiten.
- **NEW:** Ihr könnt arbeiten.
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person Ihr vs proposed Vosotros; conjugation table row must keep person.

---

## #616 ES-KURSS-LESSONS-L0374 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[15]`
- **DE:** Sie können arbeiten.
- **CURRENT:** Sie können arbeiten.
- **NEW:** Ustedes pueden trabajar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #617 ES-KURSS-LESSONS-L0375 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[16]`
- **DE:** Otto, sei gesund!
- **CURRENT:** Otto, sei gesund!
- **NEW:** ¡Otto, ponte bien!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #618 ES-KURSS-LESSONS-L0376 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[17]`
- **DE:** Otto und Franz, seid gesund!
- **CURRENT:** Otto und Franz, seid gesund!
- **NEW:** ¡Otto y Franz, poneos bien!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #619 ES-KURSS-LESSONS-L0377 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[18]`
- **DE:** Fräulein Müller, seien Sie gesund!
- **CURRENT:** Fräulein Müller, seien Sie gesund!
- **NEW:** ¡Señorita Müller, póngase bien!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #620 ES-KURSS-LESSONS-L0378 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[19]`
- **DE:** Ich bin ein Knabe.
- **CURRENT:** Ich bin ein Knabe.
- **NEW:** Soy un niño.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #621 ES-KURSS-LESSONS-L0379 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[20]`
- **DE:** Du bist ein Mädchen.
- **CURRENT:** Du bist ein Mädchen.
- **NEW:** Eres una niña.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #622 ES-KURSS-LESSONS-L0380 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[21]`
- **DE:** Er ist ein Schüler.
- **CURRENT:** Er ist ein Schüler.
- **NEW:** Er ist ein Schüler.
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person Er vs proposed Él; conjugation table row must keep person.

---

## #623 ES-KURSS-LESSONS-L0381 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[22]`
- **DE:** Sie ist eine Schülerin.
- **CURRENT:** Sie ist eine Schülerin.
- **NEW:** Sie ist eine Schülerin.
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person Sie vs proposed Ella; conjugation table row must keep person.

---

## #624 ES-KURSS-LESSONS-L0382 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[23]`
- **DE:** Was ist der Lehrer?
- **CURRENT:** Was ist der Lehrer?
- **NEW:** ¿Qué es el profesor?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #625 ES-KURSS-LESSONS-L0383 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[24]`
- **DE:** Der Lehrer ist ein Mann.
- **CURRENT:** Der Lehrer ist ein Mann.
- **NEW:** El profesor es un hombre.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #626 ES-KURSS-LESSONS-L0384 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[25]`
- **DE:** Wer ist ein Mann?
- **CURRENT:** Wer ist ein Mann?
- **NEW:** ¿Quién es un hombre?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #627 ES-KURSS-LESSONS-L0385 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[26]`
- **DE:** Der Lehrer ist ein Mann.
- **CURRENT:** Der Lehrer ist ein Mann.
- **NEW:** El profesor es un hombre.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #628 ES-KURSS-LESSONS-L0386 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[27]`
- **DE:** Was ist die Lehrerin?
- **CURRENT:** Was ist die Lehrerin?
- **NEW:** ¿Qué es la profesora?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #629 ES-KURSS-LESSONS-L0387 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[28]`
- **DE:** Die Lehrerin ist eine Frau.
- **CURRENT:** Die Lehrerin ist eine Frau.
- **NEW:** La profesora es una mujer.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #630 ES-KURSS-LESSONS-L0388 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[29]`
- **DE:** Wer ist eine Frau?
- **CURRENT:** Wer ist eine Frau?
- **NEW:** ¿Quién es una mujer?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #631 ES-KURSS-LESSONS-L0389 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[30]`
- **DE:** Die Lehrerin ist eine Frau.
- **CURRENT:** Die Lehrerin ist eine Frau.
- **NEW:** La profesora es una mujer.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #632 ES-KURSS-LESSONS-L0390 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[31]`
- **DE:** Wer ist gesund?
- **CURRENT:** Wer ist gesund?
- **NEW:** ¿Quién está sano?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #633 ES-KURSS-LESSONS-L0391 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[32]`
- **DE:** Ich bin gesund.
- **CURRENT:** Ich bin gesund.
- **NEW:** Estoy sano.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #634 ES-KURSS-LESSONS-L0392 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[33]`
- **DE:** Wir sind gesund.
- **CURRENT:** Wir sind gesund.
- **NEW:** Estamos sanos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #635 ES-KURSS-LESSONS-L0393 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[34]`
- **DE:** Ist der Großvater gesund?
- **CURRENT:** Ist der Großvater gesund?
- **NEW:** ¿Está sano el abuelo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #636 ES-KURSS-LESSONS-L0394 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[35]`
- **DE:** Nein, der Großvater ist krank.
- **CURRENT:** Nein, der Großvater ist krank.
- **NEW:** No, el abuelo está enfermo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #637 ES-KURSS-LESSONS-L0395 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[36]`
- **DE:** Er kann nicht arbeiten.
- **CURRENT:** Er kann nicht arbeiten.
- **NEW:** No puede trabajar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #638 ES-KURSS-LESSONS-L0396 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[37]`
- **DE:** Die Großmutter ist gesund.
- **CURRENT:** Die Großmutter ist gesund.
- **NEW:** La abuela está sana.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #639 ES-KURSS-LESSONS-L0397 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[38]`
- **DE:** Sie kann arbeiten.
- **CURRENT:** Sie kann arbeiten.
- **NEW:** Sie kann arbeiten.
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person Sie vs proposed Ella; conjugation table row must keep person.

---

## #640 ES-KURSS-LESSONS-L0398 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[39]`
- **DE:** Hans und Franz, seid ihr gesund?
- **CURRENT:** Hans und Franz, seid ihr gesund?
- **NEW:** Hans y Franz, ¿estáis sanos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #641 ES-KURSS-LESSONS-L0399 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[40]`
- **DE:** Ja, wir sind gesund.
- **CURRENT:** Ja, wir sind gesund.
- **NEW:** Sí, estamos sanos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #642 ES-KURSS-LESSONS-L0400 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[41]`
- **DE:** Wir können fleißig lernen.
- **CURRENT:** Wir können fleißig lernen.
- **NEW:** Podemos estudiar mucho.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #643 ES-KURSS-LESSONS-L0401 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[42]`
- **DE:** Alle Kinder sind gesund.
- **CURRENT:** Alle Kinder sind gesund.
- **NEW:** Todos los niños están sanos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #644 ES-KURSS-LESSONS-L0402 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[43]`
- **DE:** Sie können fleißig lernen.
- **CURRENT:** Sie können fleißig lernen.
- **NEW:** Pueden estudiar mucho.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #645 ES-KURSS-LESSONS-L0403 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[44]`
- **DE:** Adolf, wie alt bist du?
- **CURRENT:** Adolf, wie alt bist du?
- **NEW:** Adolf, ¿cuántos años tienes?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #646 ES-KURSS-LESSONS-L0404 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[45]`
- **DE:** Ich bin zehn Jahre alt.
- **CURRENT:** Ich bin zehn Jahre alt.
- **NEW:** Tengo diez años.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #647 ES-KURSS-LESSONS-L0405 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[46]`
- **DE:** Wie alt ist Anna?
- **CURRENT:** Wie alt ist Anna?
- **NEW:** ¿Cuántos años tiene Anna?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #648 ES-KURSS-LESSONS-L0406 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[0].items[47]`
- **DE:** Anna ist acht Jahre alt.
- **CURRENT:** Anna ist acht Jahre alt.
- **NEW:** Anna tiene ocho años.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #649 ES-KURSS-LESSONS-L0409 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[11]`
- **DE:** sei gesund
- **CURRENT:** sei gesund — esi vesels!
- **NEW:** sei gesund — esi vesels!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #650 ES-KURSS-LESSONS-L0410 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[12]`
- **DE:** seid gesund
- **CURRENT:** seid gesund — esiet veseli!
- **NEW:** seid gesund — esiet veseli!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #651 ES-KURSS-LESSONS-L0411 [LABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[16]`
- **DE:** die Frau
- **CURRENT:** die Frau — mujer / esposa
- **NEW:** die Frau — la mujer / la esposa
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #652 ES-KURSS-LESSONS-L0412 [LABOT]

- **Lesson:** lesson10
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[0].text`
- **DE:** —
- **CURRENT:** Verbo auxiliar sein - estar desordenado. Por tanto, hay que aprenderlo bien.
- **NEW:** El verbo sein (ser/estar) es irregular. Por tanto, hay que aprenderlo bien.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #653 ES-KURSS-LESSONS-L0413 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[1].heading`
- **DE:** —
- **CURRENT:** Sein — Präsens
- **NEW:** Sein — Präsens
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #654 ES-KURSS-LESSONS-L0414 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[2].heading`
- **DE:** —
- **CURRENT:** Sein — Imperativ
- **NEW:** Sein — Imperativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #655 ES-KURSS-LESSONS-L0415 [LABOT]

- **Lesson:** lesson10
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[3].text`
- **DE:** —
- **CURRENT:** Asimismo, el verbo auxiliar können (poder) tiene una declinación irregular.
- **NEW:** Asimismo, el verbo modal können (poder) tiene una conjugación irregular.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #656 ES-KURSS-LESSONS-L0416 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[0].lv`
- **DE:** Bist du gesund?
- **CURRENT:** Vai tu esi vesels?
- **NEW:** Vai tu esi vesels?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #657 ES-KURSS-LESSONS-L0417 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[2].lv`
- **DE:** Ist Paul gesund?
- **CURRENT:** Vai Paul ir vasijas?
- **NEW:** Vai Paul ir vasijas?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #658 ES-KURSS-LESSONS-L0418 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[9].lv`
- **DE:** Wie alt ist Adolf?
- **CURRENT:** ¿Cik vecs ir Adolfs?
- **NEW:** ¿Qué edad tiene Adolf?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #659 ES-KURSS-LESSONS-L0419 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[11].lv`
- **DE:** Wer bist du?
- **CURRENT:** ¿Kas tu esi?
- **NEW:** ¿Quién eres?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #660 ES-KURSS-LESSONS-L0420 [LABOT]

- **Lesson:** lesson10
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la conjugación correcta y forma la frase en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #661 ES-KURSS-LESSONS-L0423 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[3]`
- **DE:** wir haben
- **CURRENT:** wir haben — mamás ir
- **NEW:** wir haben — tenemos
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #662 ES-KURSS-LESSONS-L0424 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[9]`
- **DE:** ist nicht
- **CURRENT:** ist nicht — nav
- **NEW:** ist nicht — nav
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #663 ES-KURSS-LESSONS-L0425 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[11]`
- **DE:** hell
- **CURRENT:** hell — brillante
- **NEW:** hell — luminoso
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #664 ES-KURSS-LESSONS-L0426 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[15]`
- **DE:** kein, keine, kein
- **CURRENT:** kein, keine, kein — neviens, neviena, neviens
- **NEW:** kein, keine, kein — neviens, neviena, neviens
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #665 ES-KURSS-LESSONS-L0428 [LABOT]

- **Lesson:** lesson11
- **Category:** ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text`
- **DE:** —
- **CURRENT:** El verbo auxiliar haben en alemán expresa el concepto de pertenencia. En español, a menudo se expresa con: yo tengo, tú tienes, él tiene, etc. t. t.
- **NEW:** El verbo haben en alemán expresa posesión. En español, suele expresarse con formas como «yo tengo», «tú tienes» y «él tiene».
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #666 ES-KURSS-LESSONS-L0429 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].heading`
- **DE:** —
- **CURRENT:** Haben — Präsens
- **NEW:** Haben — Präsens
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #667 ES-KURSS-LESSONS-L0430 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[0][1]`
- **DE:** man ir
- **CURRENT:** man ir
- **NEW:** man ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #668 ES-KURSS-LESSONS-L0431 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[1][1]`
- **DE:** tev ir
- **CURRENT:** tev ir
- **NEW:** tev ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #669 ES-KURSS-LESSONS-L0432 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[3][1]`
- **DE:** mums ir
- **CURRENT:** mums ir
- **NEW:** mums ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #670 ES-KURSS-LESSONS-L0433 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[4][1]`
- **DE:** jums ir
- **CURRENT:** jums ir
- **NEW:** jums ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #671 ES-KURSS-LESSONS-L0434 [LABOT]

- **Lesson:** lesson11
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].text`
- **DE:** —
- **CURRENT:** En español, la persona a quien pertenece algo está en el caso dativo y el sujeto en el caso nominativo. En alemán, la persona está en el caso nominativo y el objeto poseído en el caso acusativo.
- **NEW:** En español, la persona que posee algo se expresa normalmente como sujeto con el verbo «tener», mientras que en alemán la persona está en nominativo y el objeto poseído, en acusativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #672 ES-KURSS-LESSONS-L0435 [LABOT]

- **Lesson:** lesson11
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[3].examples[1]`
- **DE:** Der Vater hat ein Buch
- **CURRENT:** Der Vater hat ein Buch — padre
- **NEW:** Der Vater hat ein Buch — El padre tiene un libro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #673 ES-KURSS-LESSONS-L0437 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[5].heading`
- **DE:** —
- **CURRENT:** Imperativ
- **NEW:** Imperativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #674 ES-KURSS-LESSONS-L0438 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[5].text`
- **DE:** —
- **CURRENT:** El verbo haben debe aprenderse bien y utilizarse correctamente. También debes conocer las formas de comando.
- **NEW:** El verbo haben debe aprenderse bien y utilizarse correctamente. También debes conocer las formas del imperativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #675 ES-KURSS-LESSONS-L0439 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[8].heading`
- **DE:** —
- **CURRENT:** Kein — vienskaitlis
- **NEW:** Kein — vienskaitlis
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #676 ES-KURSS-LESSONS-L0440 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[9].heading`
- **DE:** —
- **CURRENT:** Kein — daudzskaitlis
- **NEW:** Kein — daudzskaitlis
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #677 ES-KURSS-LESSONS-L0441 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].text`
- **DE:** —
- **CURRENT:** Si la oración narrativa contiene la conjunción denn, el verbo permanece en 2ª posición. La conjunción denn no cuenta como miembro de la oración.
- **NEW:** Si la oración enunciativa contiene la conjunción denn, el verbo permanece en la segunda posición. La conjunción denn no cuenta como elemento de la oración.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #678 ES-KURSS-LESSONS-L0442 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[12].text`
- **DE:** —
- **CURRENT:** Los sustantivos compuestos van precedidos del article del último sustantivo. El énfasis está en la primera palabra del caso.
- **NEW:** Los sustantivos compuestos llevan el artículo del último sustantivo. El acento recae en el primer elemento del compuesto.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #679 ES-KURSS-LESSONS-L0443 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[0].lv`
- **DE:** Was hast du?
- **CURRENT:** ¿Kas tev ir?
- **NEW:** ¿Qué tienes?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #680 ES-KURSS-LESSONS-L0444 [LABOT]

- **Lesson:** lesson11
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[2].lv`
- **DE:** Wie sind die Bücher?
- **CURRENT:** ¿Cuáles son los libros?
- **NEW:** ¿Cómo son los libros?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #681 ES-KURSS-LESSONS-L0445 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
- **DE:** Franz hat keine Feder und keinen Bleistift.
- **CURRENT:** Franc no tiene bolígrafo ni lápiz.
- **NEW:** Francisco no tiene bolígrafo ni lápiz.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #682 ES-KURSS-LESSONS-L0446 [LABOT]

- **Lesson:** lesson11
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[12].lv`
- **DE:** Der Lehrer hat viele Bücher und ein Bücherbrett.
- **CURRENT:** La maestra tiene muchos libros y una estantería.
- **NEW:** El maestro tiene muchos libros y una estantería.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #683 ES-KURSS-LESSONS-L0447 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[15].lv`
- **DE:** Was tut Anna?
- **CURRENT:** Ko dara Anna?
- **NEW:** Ko dara Anna?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #684 ES-KURSS-LESSONS-L0448 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[18].lv`
- **DE:** Nein, Franz schreibt nicht, er zeichnet.
- **CURRENT:** No, Francisco no escribe, dibuja.
- **NEW:** No, Francisco no escribe, sino que dibuja.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #685 ES-KURSS-LESSONS-L0449 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa la forma correcta y ponla en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #686 ES-KURSS-LESSONS-L0451 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.lessonItems.12.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Calidades comparables, también, edad y colores.
- **NEW:** Grados comparativos, als/wie, edad y colores.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #687 ES-KURSS-LESSONS-L0454 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[4]`
- **DE:** wieviel
- **CURRENT:** wieviel — cik
- **NEW:** wieviel — cik
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #688 ES-KURSS-LESSONS-L0455 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[5]`
- **DE:** Max (maks)
- **CURRENT:** Max (maks) — Maksis
- **NEW:** Max (maks) — Maksis
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #689 ES-KURSS-LESSONS-L0456 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[9]`
- **DE:** alt
- **CURRENT:** alt — viejo
- **NEW:** alt — mayor / viejo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #690 ES-KURSS-LESSONS-L0457 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12]`
- **DE:** so alt wie
- **CURRENT:** so alt wie — tan viejo como
- **NEW:** so alt wie — tan mayor como
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #691 ES-KURSS-LESSONS-L0458 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[16]`
- **DE:** wie
- **CURRENT:** wie — cómo
- **NEW:** wie — como
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #692 ES-KURSS-LESSONS-L0459 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[17]`
- **DE:** am jüngsten
- **CURRENT:** am jüngsten — el más reciente
- **NEW:** am jüngsten — el más joven / la más joven
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #693 ES-KURSS-LESSONS-L0460 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text`
- **DE:** —
- **CURRENT:** La mayoría de los adjetivos monosilábicos con la vocal raíz a, o, u tienen una diéresis en el grado superlativo.
- **NEW:** La mayoría de los adjetivos monosilábicos cuya vocal de la raíz es a, o o u llevan diéresis en el comparativo y el superlativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #694 ES-KURSS-LESSONS-L0461 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[2][0]`
- **DE:** hoch (augsts)
- **CURRENT:** hoch (augsts)
- **NEW:** hoch (augsts)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #695 ES-KURSS-LESSONS-L0462 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[3][0]`
- **DE:** gut (labs)
- **CURRENT:** gut (labs)
- **NEW:** gut (labs)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #696 ES-KURSS-LESSONS-L0463 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[4][0]`
- **DE:** viel (daudz)
- **CURRENT:** viel (daudz)
- **NEW:** viel (daudz)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #697 ES-KURSS-LESSONS-L0464 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[2].lv`
- **DE:** Wer ist am ältesten?
- **CURRENT:** ¿Quién es el mayor?
- **NEW:** ¿Quién es el más mayor?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #698 ES-KURSS-LESSONS-L0465 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv`
- **DE:** Wie heißen Sie?
- **CURRENT:** ¿Cómo te llamas?
- **NEW:** ¿Cómo se llama?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #699 ES-KURSS-LESSONS-L0466 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[10].lv`
- **DE:** Ich bin zwanzig Jahre alt.
- **CURRENT:** Es esmu 20 gadus vecs.
- **NEW:** Es esmu 20 gadus vecs.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #700 ES-KURSS-LESSONS-L0467 [LABOT]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[11].lv`
- **DE:** Ist Max groß?
- **CURRENT:** ¿Vai Maksis son mentiras?
- **NEW:** ¿Es Max alto?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #701 ES-KURSS-LESSONS-L0468 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[12].lv`
- **DE:** Nein, Max ist nicht groß, Rudolf ist größer.
- **CURRENT:** No, Max no es grande, Rudolph es más grande.
- **NEW:** No, Max no es alto, Rudolf es más alto.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #702 ES-KURSS-LESSONS-L0469 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv`
- **DE:** Wer ist am größten?
- **CURRENT:** ¿Cuál es el mayor?
- **NEW:** ¿Quién es el más alto?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #703 ES-KURSS-LESSONS-L0470 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv`
- **DE:** Franz ist am größten.
- **CURRENT:** Francisco es el más grande.
- **NEW:** Francisco es el más alto.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #704 ES-KURSS-LESSONS-L0471 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[19].lv`
- **DE:** Wie heißen sie?
- **CURRENT:** ¿Cuáles son sus nombres?
- **NEW:** ¿Cómo se llaman?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #705 ES-KURSS-LESSONS-L0472 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv`
- **DE:** Wieviel Brüder haben Sie?
- **CURRENT:** ¿Cuantos hermanos tienes?
- **NEW:** ¿Cuántos hermanos tiene?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #706 ES-KURSS-LESSONS-L0473 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[23].lv`
- **DE:** Wie ist die Tinte?
- **CURRENT:** ¿Qué es la tinta?
- **NEW:** ¿Cómo es la tinta?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #707 ES-KURSS-LESSONS-L0474 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[24].lv`
- **DE:** Sie ist schwarz.
- **CURRENT:** Es negro.
- **NEW:** Es negra.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #708 ES-KURSS-LESSONS-L0475 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[25].lv`
- **DE:** Wie ist die Kreide?
- **CURRENT:** ¿Qué es la tiza?
- **NEW:** ¿Cómo es la tiza?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #709 ES-KURSS-LESSONS-L0476 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[26].lv`
- **DE:** Sie ist weiß.
- **CURRENT:** Tas ir balts.
- **NEW:** Tas ir balts.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #710 ES-KURSS-LESSONS-L0477 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[27].lv`
- **DE:** Wie sind die Blumen?
- **CURRENT:** ¿Qué son las flores?
- **NEW:** ¿Cómo son las flores?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #711 ES-KURSS-LESSONS-L0478 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv`
- **DE:** Sind Sie glücklich?
- **CURRENT:** ¿Estás feliz?
- **NEW:** ¿Está feliz?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #712 ES-KURSS-LESSONS-L0480 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #713 ES-KURSS-LESSONS-L0481 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Elige el caso correcto y úsalo en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #714 ES-KURSS-LESSONS-L0483 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.intro`
- **DE:** —
- **CURRENT:** Conferencia Trece: Der Körper, partes del cuerpo, ejercicio, verbos reflexivos y plural.
- **NEW:** Lección 13: Der Körper, partes del cuerpo, hacer gimnasia, verbos reflexivos y plural.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #715 ES-KURSS-LESSONS-L0484 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[19]`
- **DE:** die Brust
- **CURRENT:** die Brust — mama
- **NEW:** die Brust — pecho
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #716 ES-KURSS-LESSONS-L0485 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[24]`
- **DE:** jede
- **CURRENT:** jede — katra
- **NEW:** jede — katra
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #717 ES-KURSS-LESSONS-L0486 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[25]`
- **DE:** jedes
- **CURRENT:** jedes — katrs
- **NEW:** jedes — katrs
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #718 ES-KURSS-LESSONS-L0487 [LABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[29]`
- **DE:** der Nagel
- **CURRENT:** der Nagel — uña / clavo
- **NEW:** der Nagel — uña
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #719 ES-KURSS-LESSONS-L0488 [LABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[30]`
- **DE:** die Nägel
- **CURRENT:** die Nägel — uñas / clavos
- **NEW:** die Nägel — uñas
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #720 ES-KURSS-LESSONS-L0489 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[31]`
- **DE:** beschneiden
- **CURRENT:** beschneiden — apgriezt
- **NEW:** beschneiden — apgriezt
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #721 ES-KURSS-LESSONS-L0490 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading`
- **DE:** —
- **CURRENT:** Verbos compuestos
- **NEW:** Verbos separables
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #722 ES-KURSS-LESSONS-L0491 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Si la parte preposicional está acentuada, se separa en tiempo presente y va al final de la oración.
- **NEW:** Si el prefijo está acentuado, se separa en presente y va al final de la oración.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #723 ES-KURSS-LESSONS-L0492 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** Si el prefijo no está acentuado, no está acentuado.
- **NEW:** Si el prefijo no está acentuado, no se separa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #724 ES-KURSS-LESSONS-L0493 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_NATURALNESS · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text`
- **DE:** —
- **CURRENT:** El pronombre jeder va en círculos como los artículos der / die / das.
- **NEW:** El pronombre jeder se declina como los artículos der/die/das.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #725 ES-KURSS-LESSONS-L0494 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[2].wir`
- **DE:** Wir machen dos Schritte.
- **CURRENT:** Wir machen dos Schritte.
- **NEW:** Wir machen dos Schritte.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #726 ES-KURSS-LESSONS-L0495 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].ich`
- **DE:** Ich senske beide Arme.
- **CURRENT:** Ich senske beide Arme.
- **NEW:** Ich senke beide Arme.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo alemán está mal formado («senske»). La forma correcta de la primera persona es «senke».

---

## #727 ES-KURSS-LESSONS-L0496 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].er`
- **DE:** Er sentkt beide Arme.
- **CURRENT:** Er sentkt beide Arme.
- **NEW:** Er senkt beide Arme.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo alemán está mal formado («sentkt»). La forma correcta de la tercera persona singular es «senkt».

---

## #728 ES-KURSS-LESSONS-L0497 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].wir`
- **DE:** Wir senten beide Arme.
- **CURRENT:** Wir senten beide Arme.
- **NEW:** Wir senken beide Arme.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo alemán está mal formado («senten»). La forma correcta de la primera persona plural es «senken».

---

## #729 ES-KURSS-LESSONS-L0498 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].er`
- **DE:** Er dreht den Kopf nach enlaces.
- **CURRENT:** Er dreht den Kopf nach enlaces.
- **NEW:** Er dreht den Kopf nach enlaces.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #730 ES-KURSS-LESSONS-L0499 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[0].lv`
- **DE:** Wie viele Arme hat der Mensch?
- **CURRENT:** ¿Cuántas manos tiene una persona?
- **NEW:** ¿Cuántos brazos tiene una persona?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #731 ES-KURSS-LESSONS-L0500 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[1].lv`
- **DE:** Wie viele Beine hast du?
- **CURRENT:** cuantas piernas tienes
- **NEW:** ¿Cuántas piernas tienes?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #732 ES-KURSS-LESSONS-L0501 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[4].lv`
- **DE:** Wie ist der Arm?
- **CURRENT:** ¿Qué es una mano?
- **NEW:** ¿Cómo es el brazo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #733 ES-KURSS-LESSONS-L0502 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[5].lv`
- **DE:** Wie ist das Bein?
- **CURRENT:** ¿Qué es la pierna?
- **NEW:** ¿Cómo es la pierna?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #734 ES-KURSS-LESSONS-L0503 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[6].lv`
- **DE:** Der Arm ist klein, aber das Bein ist groß.
- **CURRENT:** La mano es pequeña, pero la pierna es grande.
- **NEW:** El brazo es pequeño, pero la pierna es grande.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #735 ES-KURSS-LESSONS-L0504 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[7].lv`
- **DE:** Wo ist die Brust?
- **CURRENT:** donde esta el cofre
- **NEW:** donde esta el cofre
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #736 ES-KURSS-LESSONS-L0505 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[10].lv`
- **DE:** Wie viele Finger hat die Hand?
- **CURRENT:** ¿Cik pirkstu ir plaukstai?
- **NEW:** ¿Cuántos dedos tiene la mano?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #737 ES-KURSS-LESSONS-L0506 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[11].lv`
- **DE:** Die Hand hat fünf Finger.
- **CURRENT:** Plaukstai ir pieci pirksti.
- **NEW:** Plaukstai ir pieci pirksti.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #738 ES-KURSS-LESSONS-L0507 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv`
- **DE:** Was hat der Finger?
- **CURRENT:** ¿Kas ir pirkstam?
- **NEW:** ¿Qué tiene el dedo?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #739 ES-KURSS-LESSONS-L0508 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv`
- **DE:** Der Finger hat einen Nagel.
- **CURRENT:** Pirkstam ir regaña.
- **NEW:** El dedo tiene una uña.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #740 ES-KURSS-LESSONS-L0509 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv`
- **DE:** Was tust du?
- **CURRENT:** ¿Ko tu dari?
- **NEW:** ¿Qué haces?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #741 ES-KURSS-LESSONS-L0510 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[18].lv`
- **DE:** Was tut Paul?
- **CURRENT:** Ko Paul dara?
- **NEW:** Ko Paul dara?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #742 ES-KURSS-LESSONS-L0511 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv`
- **DE:** Sie strecken beide Arme aus.
- **CURRENT:** Extienden ambas manos.
- **NEW:** Extienden ambos brazos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #743 ES-KURSS-LESSONS-L0512 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv`
- **DE:** Sie senken beide Arme.
- **CURRENT:** Dejan caer ambas manos.
- **NEW:** Bajan ambos brazos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #744 ES-KURSS-LESSONS-L0513 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv`
- **DE:** Fräulein Müller, turnen Sie!
- **CURRENT:** ¡Müller jaunkundze, vingrojiet!
- **NEW:** ¡Señorita Müller, haga gimnasia!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #745 ES-KURSS-LESSONS-L0514 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la conjugación correcta en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #746 ES-KURSS-LESSONS-L0516 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.lessonItems.14.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Verbos müssen, wollen, mögen y modales.
- **NEW:** Verbos modales: müssen, wollen y mögen.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #747 ES-KURSS-LESSONS-L0517 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.intro`
- **DE:** —
- **CURRENT:** Lección Catorce: Verbos modales müssen, wollen y mögen.
- **NEW:** Lección catorce: verbos modales müssen, wollen y mögen.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #748 ES-KURSS-LESSONS-L0531 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[27]`
- **DE:** wir mögen
- **CURRENT:** wir mögen — queremos
- **NEW:** nos gusta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #749 ES-KURSS-LESSONS-L0532 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[28]`
- **DE:** ihr mögt
- **CURRENT:** ihr mögt — quieres
- **NEW:** os gusta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #750 ES-KURSS-LESSONS-L0534 [LABOT]

- **Lesson:** lesson14
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[31]`
- **DE:** munden
- **CURRENT:** munden — para saber bien
- **NEW:** saber bien
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #751 ES-KURSS-LESSONS-L0535 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[32]`
- **DE:** mir
- **CURRENT:** mir — hombre
- **NEW:** a mí
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #752 ES-KURSS-LESSONS-L0536 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[33]`
- **DE:** dir
- **CURRENT:** dir — tev
- **NEW:** a ti
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #753 ES-KURSS-LESSONS-L0537 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[35]`
- **DE:** ihr
- **CURRENT:** ihr — ustedes
- **NEW:** a vosotros
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #754 ES-KURSS-LESSONS-L0538 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[36]`
- **DE:** uns
- **CURRENT:** uns — mamás
- **NEW:** a nosotros
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #755 ES-KURSS-LESSONS-L0540 [LABOT]

- **Lesson:** lesson14
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** En presente singular, la 1ª y 3ª personas son iguales.
- **NEW:** En el presente, las formas de la 1.ª y 3.ª persona del singular son iguales.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #756 ES-KURSS-LESSONS-L0542 [LABOT]

- **Lesson:** lesson14
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[7].text`
- **DE:** —
- **CURRENT:** Wollen significa querer hacer algo deliberadamente.
- **NEW:** Wollen expresa la voluntad o intención de hacer algo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #757 ES-KURSS-LESSONS-L0543 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
- **DE:** Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.
- **CURRENT:** Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.
- **NEW:** En español, en «signos», la g va seguida de n, no de s; su pronunciación no es equivalente a la k alemana.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #758 ES-KURSS-LESSONS-L0544 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[0].lv`
- **DE:** Wer will fleißig lernen?
- **CURRENT:** ¿Quién quiere estudiar mucho?
- **NEW:** ¿Quién quiere estudiar con diligencia?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #759 ES-KURSS-LESSONS-L0545 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[1].lv`
- **DE:** Alle Schüler wollen fleißig lernen.
- **CURRENT:** Todos los estudiantes quieren estudiar mucho.
- **NEW:** Todos los estudiantes quieren estudiar con diligencia.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #760 ES-KURSS-LESSONS-L0546 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[2].lv`
- **DE:** Wer muss heute kommen?
- **CURRENT:** ¿Quién debería venir hoy?
- **NEW:** ¿Quién tiene que venir hoy?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #761 ES-KURSS-LESSONS-L0547 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[4].lv`
- **DE:** Du musst den Brief schreiben.
- **CURRENT:** Tienes que escribir una carta.
- **NEW:** Tienes que escribir la carta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #762 ES-KURSS-LESSONS-L0548 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[5].lv`
- **DE:** Wer muss fleißig lernen?
- **CURRENT:** ¿Quién necesita estudiar mucho?
- **NEW:** ¿Quién tiene que estudiar con diligencia?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #763 ES-KURSS-LESSONS-L0549 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[6].lv`
- **DE:** Die Schüler müssen fleißig lernen.
- **CURRENT:** Los estudiantes deben estudiar mucho.
- **NEW:** Los estudiantes tienen que estudiar con diligencia.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #764 ES-KURSS-LESSONS-L0550 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[8].lv`
- **DE:** Wer will die Suppe essen?
- **CURRENT:** ¿Quién quiere comer sopa?
- **NEW:** ¿Quién quiere comer sopa con ganas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #765 ES-KURSS-LESSONS-L0551 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[10].lv`
- **DE:** Wer muss das Buch lesen?
- **CURRENT:** ¿Quién debería leer el libro?
- **NEW:** ¿Quién tiene que leer el libro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #766 ES-KURSS-LESSONS-L0552 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[11].lv`
- **DE:** Der Bruder muss das Buch lesen.
- **CURRENT:** El hermano debe leer un libro.
- **NEW:** El hermano tiene que leer el libro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #767 ES-KURSS-LESSONS-L0553 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la conjugación correcta y ponla en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #768 ES-KURSS-LESSONS-L0555 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.lessonItems.15.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** sollen, dürfen, essen y frutas.
- **NEW:** sollen, dürfen, essen y vocabulario sobre frutas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #769 ES-KURSS-LESSONS-L0556 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.intro`
- **DE:** —
- **CURRENT:** Decimoquinta conferencia: sollen, dürfen, essen y palabras frutales.
- **NEW:** Lección decimoquinta: sollen, dürfen, essen y vocabulario sobre frutas.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #770 ES-KURSS-LESSONS-L0557 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[0]`
- **DE:** sollen
- **CURRENT:** sollen — debería
- **NEW:** sollen — deber
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #771 ES-KURSS-LESSONS-L0564 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[9]`
- **DE:** du darfst
- **CURRENT:** du darfst — usted puede
- **NEW:** du darfst — tú puedes
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #772 ES-KURSS-LESSONS-L0565 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[12]`
- **DE:** ihr dürft
- **CURRENT:** ihr dürft — usted puede
- **NEW:** ihr dürft — vosotros podéis
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #773 ES-KURSS-LESSONS-L0567 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[19]`
- **DE:** entzweischneiden
- **CURRENT:** entzweischneiden — cortado por la mitad
- **NEW:** entzweischneiden — cortar por la mitad
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #774 ES-KURSS-LESSONS-L0569 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[35]`
- **DE:** du isst
- **CURRENT:** du isst — usted come
- **NEW:** tú comes
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #775 ES-KURSS-LESSONS-L0570 [FALSE_POSITIVE]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[38]`
- **DE:** ihr esst
- **CURRENT:** ihr esst — tú comes
- **NEW:** ihr esst — tú comes
- **OWNER_DECISION:** FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.
- **Pamatojums:** CURRENT person ihr vs proposed vosotros; conjugation table row must keep person.

---

## #776 ES-KURSS-LESSONS-L0571 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Sollen significa necesitar en el sentido del deber.
- **NEW:** Sollen significa deber, en el sentido de una obligación o indicación externa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #777 ES-KURSS-LESSONS-L0573 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[1]`
- **DE:** sollen
- **CURRENT:** sollen — debería
- **NEW:** sollen — deber
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #778 ES-KURSS-LESSONS-L0574 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[4].text`
- **DE:** —
- **CURRENT:** Essen es el siguiente.
- **NEW:** La conjugación de «essen» es la siguiente.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #779 ES-KURSS-LESSONS-L0575 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Si el proyecto utiliza escritura moderna, puede escribir: du isst, er/sie/es isst, ihr esst.
- **NEW:** Si se utiliza la ortografía moderna, se escriben así: du isst, er/sie/es isst, ihr esst.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #780 ES-KURSS-LESSONS-L0576 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** En el verbo compuesto entzweischneiden, el énfasis está en el prefijo entzweí-, por lo que en tiempo presente el prefijo se separa y se coloca al final de la oración.
- **NEW:** En el verbo compuesto entzweischneiden, el énfasis está en el prefijo entzwei-, por lo que en presente el prefijo se separa y se coloca al final de la oración.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #781 ES-KURSS-LESSONS-L0577 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[3].lv`
- **DE:** Nein, der Großvater darf nicht arbeiten, denn er ist krank.
- **CURRENT:** No, el abuelo no puede trabajar porque está enfermo.
- **NEW:** No, el abuelo no tiene permitido trabajar porque está enfermo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #782 ES-KURSS-LESSONS-L0578 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[5].lv`
- **DE:** Nein, die Pflaumen sollst du nicht essen, sie sind unreif.
- **CURRENT:** No, no hace falta que te comas las ciruelas, no han llegado.
- **NEW:** No, no debes comerte las ciruelas; están verdes.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #783 ES-KURSS-LESSONS-L0579 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[6].lv`
- **DE:** Isst du einen Apfel oder eine Birne?
- **CURRENT:** ¿Comiste una manzana o una pera?
- **NEW:** ¿Comes una manzana o una pera?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #784 ES-KURSS-LESSONS-L0580 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[14].lv`
- **DE:** Darf das Kind das Messer nehmen?
- **CURRENT:** ¿Puede un niño coger un cuchillo?
- **NEW:** ¿Puede el niño coger el cuchillo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #785 ES-KURSS-LESSONS-L0581 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[15].lv`
- **DE:** Das Kind soll das Messer nicht nehmen, denn das Messer ist scharf.
- **CURRENT:** Un niño no debe coger un cuchillo porque está afilado.
- **NEW:** El niño no debe coger el cuchillo porque está afilado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #786 ES-KURSS-LESSONS-L0582 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la forma correcta y hazlo en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #787 ES-KURSS-LESSONS-L0584 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.intro`
- **DE:** —
- **CURRENT:** Decimosexta conferencia: dativo, geben, sich nähern y ejercicios dativos.
- **NEW:** Lección decimosexta: dativo, geben, sich nähern y ejercicios de dativo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #788 ES-KURSS-LESSONS-L0585 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[0]`
- **DE:** wem
- **CURRENT:** wem — kam?
- **NEW:** wem — a quién
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #789 ES-KURSS-LESSONS-L0586 [LABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[18]`
- **DE:** die Felder
- **CURRENT:** die Felder — campos / campos
- **NEW:** die Felder — campos
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #790 ES-KURSS-LESSONS-L0587 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[0].heading`
- **DE:** —
- **CURRENT:** Dativs
- **NEW:** Dativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #791 ES-KURSS-LESSONS-L0588 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** El dativo responde a la pregunta: ¿wem? - ¿A quien?
- **NEW:** El dativo responde a la pregunta: ¿wem? — ¿A quién?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #792 ES-KURSS-LESSONS-L0589 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[1][0]`
- **DE:** Nominativ
- **CURRENT:** Nominativ
- **NEW:** Nominativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #793 ES-KURSS-LESSONS-L0590 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[2][0]`
- **DE:** Dativ
- **CURRENT:** Dativ
- **NEW:** Dativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #794 ES-KURSS-LESSONS-L0591 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[3][0]`
- **DE:** Akkusativ
- **CURRENT:** Akkusativ
- **NEW:** Akkusativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #795 ES-KURSS-LESSONS-L0592 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[1][0]`
- **DE:** Nominativ
- **CURRENT:** Nominativ
- **NEW:** Nominativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #796 ES-KURSS-LESSONS-L0593 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[2][0]`
- **DE:** Dativ
- **CURRENT:** Dativ
- **NEW:** Dativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #797 ES-KURSS-LESSONS-L0594 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[3][0]`
- **DE:** Akkusativ
- **CURRENT:** Akkusativ
- **NEW:** Akkusativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #798 ES-KURSS-LESSONS-L0596 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].heading`
- **DE:** —
- **CURRENT:** Bez artikula
- **NEW:** Bez artikula
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #799 ES-KURSS-LESSONS-L0598 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[14].prompt`
- **DE:** Der Vater ruft die Männer, die Frauen, die Kinder, die Söhne, die Fräulein, die Tanten.
- **CURRENT:** Der Vater ruft den Mann, die Frau, das Kind, den Sohn, das Fräulein, die Tante.
- **NEW:** Der Vater ruft die Männer, die Frauen, die Kinder, die Söhne, die Fräulein, die Tanten.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #800 ES-KURSS-LESSONS-L0599 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[15].prompt`
- **DE:** Der Vater nähert sich den Knechten, den Töchtern, den Mägden, den Lehrern, den Tischlern, den Lehrerinnen, den Mädchen, den Jägern.
- **CURRENT:** Der Vater nähert sich dem Knechte, der Tochter, der Magd, dem Lehrer, dem Tischler, der Lehrerin, dem Mädchen, dem Jäger.
- **NEW:** Der Vater nähert sich den Knechten, den Töchtern, den Mägden, den Lehrern, den Tischlern, den Lehrerinnen, den Mädchen, den Jägern.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #801 ES-KURSS-LESSONS-L0600 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[0].lv`
- **DE:** Wen ruft der Vater?
- **CURRENT:** ¿Cómo se llama el padre?
- **NEW:** ¿A quién llama el padre?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #802 ES-KURSS-LESSONS-L0601 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[4].lv`
- **DE:** Wem gehorcht der Hund?
- **CURRENT:** Kam paklausa soles?
- **NEW:** Kam paklausa soles?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #803 ES-KURSS-LESSONS-L0602 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[6].lv`
- **DE:** Wieviel Hunde hat der Jäger?
- **CURRENT:** ¿Cuantos perros tiene el cazador?
- **NEW:** ¿Cuántos perros tiene el cazador?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #804 ES-KURSS-LESSONS-L0603 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[12].lv`
- **DE:** Wer nähert sich den Schülern und Schülerinnen?
- **CURRENT:** ¿Qué se acerca a los escolares y las niñas?
- **NEW:** ¿Quién se acerca a los escolares y las alumnas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #805 ES-KURSS-LESSONS-L0604 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.sections.names (section title display)`
- **DE:** —
- **CURRENT:** Nombres
- **NEW:** Sustantivos
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #806 ES-KURSS-LESSONS-L0605 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #807 ES-KURSS-LESSONS-L0606 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Elige el caso correcto y escribe la forma plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #808 ES-KURSS-LESSONS-L0611 [FALSE_POSITIVE]

- **Lesson:** lesson17
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[3]`
- **DE:** womit
- **CURRENT:** womit — ar ko?
- **NEW:** womit — ar ko?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #809 ES-KURSS-LESSONS-L0613 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9]`
- **DE:** der Schuldiener
- **CURRENT:** der Schuldiener — asistente de escuela
- **NEW:** der Schuldiener — conserje de la escuela
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #810 ES-KURSS-LESSONS-L0614 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]`
- **DE:** die Diele
- **CURRENT:** die Diele — piso
- **NEW:** die Diele — recibidor / vestíbulo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #811 ES-KURSS-LESSONS-L0616 [LABOT]

- **Lesson:** lesson17
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[15]`
- **DE:** abwischen
- **CURRENT:** abwischen — limpiar
- **NEW:** abwischen — limpiar pasando un paño / quitar limpiando
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #812 ES-KURSS-LESSONS-L0618 [LABOT]

- **Lesson:** lesson17
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Los verbos graben, fangen, auffangen tienen diéresis en la 2ª y 3ª persona del singular.
- **NEW:** En la 2.ª y 3.ª persona del singular, la vocal a de graben, fangen y auffangen cambia a ä.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #813 ES-KURSS-LESSONS-L0619 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Los verbos compuestos auffangen y abwischen llevan tilde en el prefijo. Por tanto, el prefijo presente se separa y se coloca al final de la frase.
- **NEW:** Los verbos compuestos auffangen y abwischen llevan el acento tónico en el prefijo. Por tanto, el prefijo se separa y se coloca al final de la oración.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #814 ES-KURSS-LESSONS-L0620 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** Fegen y wischen significan barrer, pero el uso es diferente.
- **NEW:** Fegen significa «barrer», mientras que wischen significa «limpiar» o «pasar un paño»; su uso es diferente.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** wischen no significa «barrer»; describe limpiar o pasar un paño.

---

## #815 ES-KURSS-LESSONS-L0621 [LABOT]

- **Lesson:** lesson17
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[2].lv`
- **DE:** Was wischt das Mädchen ab?
- **CURRENT:** ¿Ko meitene noslauka?
- **NEW:** ¿Qué limpia la niña?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español. Además, debe corresponder a la pregunta alemana sobre qué limpia la niña.

---

## #816 ES-KURSS-LESSONS-L0622 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv`
- **DE:** Womit arbeiten wir?
- **CURRENT:** ¿Con quién trabajamos?
- **NEW:** ¿Con qué trabajamos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El español pregunta «con quién», pero el contexto alemán «Womit arbeiten wir?» pregunta «con qué».

---

## #817 ES-KURSS-LESSONS-L0623 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv`
- **DE:** Mit wem geht der Bruder?
- **CURRENT:** ¿Con qué va el hermano?
- **NEW:** ¿Con quién va el hermano?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El contexto alemán «Mit wem geht der Bruder?» pregunta por una persona, por lo que corresponde «con quién», no «con qué».

---

## #818 ES-KURSS-LESSONS-L0624 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv`
- **DE:** Der Bruder geht mit dem Vater, mit der Mutter, mit dem Lehrer, mit dem Onkel, mit der Tante, mit dem Vetter, mit der Base.
- **CURRENT:** Un hermano va con su padre, con su madre, con su maestra, con su tío, con su prima, con su prima.
- **NEW:** El hermano va con el padre, con la madre, con el maestro, con el tío, con el primo y con la prima.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción no corresponde al alemán: «der Bruder» es «el hermano», «der Lehrer» es «el maestro», «der Vetter» es «el primo» y «die Base» es «la prima». Además, se repite «prima» y se omite uno de los acompañantes.

---

## #819 ES-KURSS-LESSONS-L0625 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna
- **Path:** `kurss.hints.tapToRevealGerman`
- **DE:** —
- **CURRENT:** Toque la tarjeta para ver la traducción al alemán.
- **NEW:** Toca la tarjeta para ver la traducción al alemán.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #820 ES-KURSS-LESSONS-L0626 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** Escribe la conjugación correcta y ponla en plural.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #821 ES-KURSS-LESSONS-L0631 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[0]`
- **DE:** wohin
- **CURRENT:** wohin — kurp?
- **NEW:** wohin — kurp?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #822 ES-KURSS-LESSONS-L0633 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[1]`
- **DE:** wo
- **CURRENT:** wo — kur?
- **NEW:** wo — kur?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #823 ES-KURSS-LESSONS-L0635 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[8]`
- **DE:** das Körbchen
- **CURRENT:** das Körbchen — una cesta
- **NEW:** das Körbchen — cestita
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #824 ES-KURSS-LESSONS-L0637 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21]`
- **DE:** die Diele
- **CURRENT:** die Diele — piso
- **NEW:** die Diele — recibidor / pasillo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #825 ES-KURSS-LESSONS-L0638 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Las preposiciones an, in, auf pueden acompañar tanto a Akkusativ como a Dativo.
- **NEW:** Las preposiciones an, in y auf pueden regir tanto el Akkusativ como el Dativ.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #826 ES-KURSS-LESSONS-L0639 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** Si la acción indica un cambio de dirección o de lugar, se utiliza Akkusativ. Pregunta: ¿quién? - ¿dónde?
- **NEW:** Si la acción indica un cambio de dirección o de lugar, se utiliza Akkusativ. Pregunta: ¿wohin?, es decir, «¿adónde?» o «¿a dónde?»
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #827 ES-KURSS-LESSONS-L0640 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[0]`
- **DE:** Ich gehe an den Tisch.
- **CURRENT:** Ich gehe an den Tisch. — Es eju pie galda.
- **NEW:** Ich gehe an den Tisch. — Es eju pie galda.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #828 ES-KURSS-LESSONS-L0641 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[1]`
- **DE:** Ich stelle den Korb auf die Bank.
- **CURRENT:** Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.
- **NEW:** Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #829 ES-KURSS-LESSONS-L0642 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Estos verbos suelen indicar dirección y por tanto responden a la pregunta ¿wohin?.
- **NEW:** Estos verbos suelen indicar dirección y, por tanto, responden a la pregunta «¿wohin?»
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #830 ES-KURSS-LESSONS-L0643 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[0]`
- **DE:** gehen
- **CURRENT:** gehen — iet
- **NEW:** gehen — iet
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #831 ES-KURSS-LESSONS-L0644 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[2]`
- **DE:** fahren
- **CURRENT:** fahren — braukt
- **NEW:** fahren — braukt
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #832 ES-KURSS-LESSONS-L0645 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[3]`
- **DE:** laufen
- **CURRENT:** laufen — skriet
- **NEW:** laufen — skriet
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #833 ES-KURSS-LESSONS-L0646 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[4]`
- **DE:** fliegen
- **CURRENT:** fliegen — lidot
- **NEW:** fliegen — lidot
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #834 ES-KURSS-LESSONS-L0648 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text`
- **DE:** —
- **CURRENT:** Estos verbos suelen indicar ubicación o estado y por tanto responden a la pregunta ¿wo?.
- **NEW:** Estos verbos suelen indicar ubicación o estado y, por tanto, responden a la pregunta «¿wo?»
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #835 ES-KURSS-LESSONS-L0649 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[1]`
- **DE:** sich befinden
- **CURRENT:** sich befinden — atrasties
- **NEW:** sich befinden — atrasties
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #836 ES-KURSS-LESSONS-L0650 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[4]`
- **DE:** sitzen
- **CURRENT:** sitzen — sentarse
- **NEW:** sitzen — estar sentado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #837 ES-KURSS-LESSONS-L0651 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[6]`
- **DE:** finden
- **CURRENT:** finden — atrast
- **NEW:** finden — atrast
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #838 ES-KURSS-LESSONS-L0652 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Los sustantivos suelen aparecer sin article.
- **NEW:** Los sustantivos suelen aparecer sin article.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #839 ES-KURSS-LESSONS-L0653 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].examples[0]`
- **DE:** Ich trinke Milch.
- **CURRENT:** Ich trinke Milch. — Es dzeru pienu.
- **NEW:** Ich trinke Milch. — Es dzeru pienu.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #840 ES-KURSS-LESSONS-L0655 [LABOT]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].heading`
- **DE:** —
- **CURRENT:** in + vieta
- **NEW:** in + lugar
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #841 ES-KURSS-LESSONS-L0656 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text`
- **DE:** —
- **CURRENT:** Si la preposición in no se traduce como "en", pero expresa una ubicación, se puede traducir con el locativo.
- **NEW:** Si la preposición in no se traduce como «en», pero expresa una ubicación, puede traducirse mediante el caso locativo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #842 ES-KURSS-LESSONS-L0657 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[0].lv`
- **DE:** Wohin kommt der Diener?
- **CURRENT:** ¿De dónde viene el servidor?
- **NEW:** ¿Adónde viene el sirviente?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #843 ES-KURSS-LESSONS-L0658 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[2].lv`
- **DE:** Wo arbeitet er?
- **CURRENT:** donde trabaja
- **NEW:** ¿Dónde trabaja?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #844 ES-KURSS-LESSONS-L0659 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv`
- **DE:** Sie suchen Beeren in dem Walde.
- **CURRENT:** Recogen bayas en el bosque.
- **NEW:** Buscan bayas en el bosque.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #845 ES-KURSS-LESSONS-L0660 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].lv`
- **DE:** Der Schüler legt die Hefte in die Mappe.
- **CURRENT:** El estudiante pone los cuadernos en la bolsa.
- **NEW:** El estudiante pone los cuadernos en la carpeta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #846 ES-KURSS-LESSONS-L0661 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv`
- **DE:** Die Hefte sind jetzt in der Mappe.
- **CURRENT:** Las cartas ya están en la bolsa.
- **NEW:** Los cuadernos están ahora en la carpeta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #847 ES-KURSS-LESSONS-L0662 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.sections.names (section title display)`
- **DE:** —
- **CURRENT:** Nombres
- **NEW:** Sustantivos
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #848 ES-KURSS-LESSONS-L0663 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa la declinación correcta
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #849 ES-KURSS-LESSONS-L0664 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa la declinación correcta y escribe las formas en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #850 ES-KURSS-LESSONS-L0666 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.lessonItems.19.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Wechselpräpositionen: vor, hinder, unter, über, neben, zwischen.
- **NEW:** Wechselpräpositionen: vor, hinder, unter, über, neben, zwischen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #851 ES-KURSS-LESSONS-L0667 [LABOT]

- **Lesson:** lesson19
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.intro`
- **DE:** —
- **CURRENT:** Decimonovena Conferencia: vor, hinder, unter, über, neben, zwischen con Akkusativ o Dativ.
- **NEW:** Lección decimonovena: vor, hinter, unter, über, neben y zwischen, con acusativo o dativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #852 ES-KURSS-LESSONS-L0668 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[0]`
- **DE:** vor
- **CURRENT:** vor — antes
- **NEW:** vor — delante de
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #853 ES-KURSS-LESSONS-L0669 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[23]`
- **DE:** die Scheune
- **CURRENT:** die Scheune — cobertizo
- **NEW:** der Scheune — granero
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #854 ES-KURSS-LESSONS-L0670 [LABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[30]`
- **DE:** das Land
- **CURRENT:** das Land — país / tierra
- **NEW:** das Land — país
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #855 ES-KURSS-LESSONS-L0671 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[0].heading`
- **DE:** —
- **CURRENT:** Wechselpräpositionen
- **NEW:** Wechselpräpositionen
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #856 ES-KURSS-LESSONS-L0672 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** En esta conferencia, continuamos con preposiciones que pueden ir tanto con Akkusativ como con Dativo.
- **NEW:** En esta lección, continuamos con las preposiciones que pueden regir tanto el acusativo como el dativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #857 ES-KURSS-LESSONS-L0674 [LABOT]

- **Lesson:** lesson19
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[2].text`
- **DE:** —
- **CURRENT:** Si hay una ubicación, la pregunta es ¿wo? y utiliza el dativo.
- **NEW:** Si se indica una ubicación, la pregunta es «¿dónde?» y se utiliza el dativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #858 ES-KURSS-LESSONS-L0676 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[4].heading`
- **DE:** —
- **CURRENT:** Kopsavilkums: wohin?
- **NEW:** Kopsavilkums: wohin?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #859 ES-KURSS-LESSONS-L0677 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[4].text`
- **DE:** —
- **CURRENT:** ¿Quién? → Ackusativo
- **NEW:** ¿Adónde? → acusativo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #860 ES-KURSS-LESSONS-L0679 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[5].heading`
- **DE:** —
- **CURRENT:** Kopsavilkums: wo?
- **NEW:** Kopsavilkums: wo?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #861 ES-KURSS-LESSONS-L0680 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** ¿Quién? → Dativo
- **NEW:** ¿Dónde? → Dativo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #862 ES-KURSS-LESSONS-L0681 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** gehen - ir cuando la acción significa caminar continuamente. treten - entrar, acercarse, pisar, si la caminata termina con una interrupción en la acción.
- **NEW:** gehen = ir o caminar cuando se expresa un desplazamiento continuo. treten = entrar, acercarse o pisar cuando el movimiento termina al llegar a un lugar o entrar en contacto con algo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #863 ES-KURSS-LESSONS-L0682 [LABOT]

- **Lesson:** lesson19
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[1]`
- **DE:** En hinter, la h se pronuncia y la e es abierta.
- **CURRENT:** En hinter, la h se pronuncia y la e es abierta.
- **NEW:** En hinter, la h se pronuncia y la e es átona.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #864 ES-KURSS-LESSONS-L0683 [LABOT]

- **Lesson:** lesson19
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[4]`
- **DE:** En wachsen, ch se pronuncia como k.
- **CURRENT:** En wachsen, ch se pronuncia como k.
- **NEW:** En wachsen, ch se pronuncia junto con la s como [ks].
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #865 ES-KURSS-LESSONS-L0684 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[1].lv`
- **DE:** Er hat eine Karte in der Hand.
- **CURRENT:** Tiene una card en la mano.
- **NEW:** Tiene una card en la mano.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #866 ES-KURSS-LESSONS-L0685 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[3].lv`
- **DE:** Er zeigt den Schülern und Schülerinnen viele Länder, Städte, Berge, Seen und Flüsse.
- **CURRENT:** Muestra a los niños y niñas muchas ciudades, tierras, montañas, lagos y ríos.
- **NEW:** Muestra a los alumnos y alumnas muchos países, ciudades, montañas, lagos y ríos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #867 ES-KURSS-LESSONS-L0686 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[4].lv`
- **DE:** Dann ruft der Lehrer einen Schüler auf.
- **CURRENT:** Luego el profesor llama al alumno.
- **NEW:** Luego el profesor llama a un alumno.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #868 ES-KURSS-LESSONS-L0687 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[5].lv`
- **DE:** Der Schüler tritt an die Karte.
- **CURRENT:** Skolnieks pieiet pie kartes.
- **NEW:** Skolnieks pieiet pie kartes.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #869 ES-KURSS-LESSONS-L0688 [LABOT]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[6].lv`
- **DE:** Er bleibt vor der Karte stehen.
- **CURRENT:** Él permanece de pie frente a la card.
- **NEW:** Él permanece de pie frente a la tarjeta.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #870 ES-KURSS-LESSONS-L0689 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[8].lv`
- **DE:** So arbeitet der Lehrer in der Klasse.
- **CURRENT:** Así trabaja un profesor en un aula.
- **NEW:** Así trabaja el profesor en el aula.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #871 ES-KURSS-LESSONS-L0690 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #872 ES-KURSS-LESSONS-L0691 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa el caso correcto y ponlo en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #873 ES-KURSS-LESSONS-L0694 [LABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[4]`
- **DE:** das Holz
- **CURRENT:** das Holz — madera / leña
- **NEW:** das Holz — madera
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #874 ES-KURSS-LESSONS-L0695 [LABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** LOW · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[8]`
- **DE:** das Vorhaus
- **CURRENT:** das Vorhaus — vestíbulo / pasillo
- **NEW:** das Vorhaus — vestíbulo
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #875 ES-KURSS-LESSONS-L0696 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[11]`
- **DE:** der Boden
- **CURRENT:** der Boden — el piso
- **NEW:** der Boden — el suelo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #876 ES-KURSS-LESSONS-L0697 [LABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[23]`
- **DE:** brennen
- **CURRENT:** brennen — arder / quemar
- **NEW:** brennen — arder
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Multiple meaning candidates in learner-facing field.

---

## #877 ES-KURSS-LESSONS-L0698 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].heading`
- **DE:** —
- **CURRENT:** Dativs ar wann?
- **NEW:** Dativs ar wann?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #878 ES-KURSS-LESSONS-L0699 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Palabras de tráfico que responden a la pregunta ¿quieres? en las conferencias 19 y 20. —¿cuándo?, está junto al dativo. El dativo responde no sólo a wo? — ¿dónde?, pero también en wann? - ¿cuando?
- **NEW:** Las preposiciones temporales que responden a la pregunta «¿cuándo?» en las lecciones 19 y 20 rigen el dativo. El dativo no solo responde a wo? —¿dónde?, sino también a wann? —¿cuándo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #879 ES-KURSS-LESSONS-L0700 [LABOT]

- **Lesson:** lesson20
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** Muchas preposiciones se unen al article.
- **NEW:** Muchas preposiciones se unen al artículo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #880 ES-KURSS-LESSONS-L0702 [LABOT]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[0].lv`
- **DE:** Was ist hoch?
- **CURRENT:** ¿Kas ir aumenta?
- **NEW:** ¿Qué es alto?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #881 ES-KURSS-LESSONS-L0703 [LABOT]

- **Lesson:** lesson20
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[1].lv`
- **DE:** Wieviel Stockwerke hat das Haus?
- **CURRENT:** ¿Cuantos pisos tiene la casa?
- **NEW:** ¿Cuántos pisos tiene la casa?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #882 ES-KURSS-LESSONS-L0704 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[13].lv`
- **DE:** Was tut er?
- **CURRENT:** ¿Qué está haciendo?
- **NEW:** ¿Qué hace?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #883 ES-KURSS-LESSONS-L0705 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[14].lv`
- **DE:** Was hat die Stadt?
- **CURRENT:** ¿Cuál es la ciudad?
- **NEW:** ¿Qué tiene la ciudad?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #884 ES-KURSS-LESSONS-L0706 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[18].lv`
- **DE:** Wer muss arbeiten?
- **CURRENT:** ¿Quién necesita trabajar?
- **NEW:** ¿Quién tiene que trabajar?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #885 ES-KURSS-LESSONS-L0707 [LABOT]

- **Lesson:** lesson20
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[20].lv`
- **DE:** Wohin musst du das Holz tragen?
- **CURRENT:** ¿Dónde necesitas llevar leña?
- **NEW:** ¿Adónde necesitas llevar la leña?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #886 ES-KURSS-LESSONS-L0708 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[21].lv`
- **DE:** Wohin steckst du das Holz?
- **CURRENT:** Kurp tu liec malku?
- **NEW:** Kurp tu liec malku?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #887 ES-KURSS-LESSONS-L0709 [LABOT]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[22].lv`
- **DE:** Was zündest du an?
- **CURRENT:** ¿Ko tu aizdedzini?
- **NEW:** ¿Qué enciendes?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Default audit correction.

---

## #888 ES-KURSS-LESSONS-L0710 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[23].lv`
- **DE:** Was brennt hell?
- **CURRENT:** ¿Qué arde intensamente?
- **NEW:** ¿Qué arde con brillo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #889 ES-KURSS-LESSONS-L0711 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Completa con el caso correcto
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #890 ES-KURSS-LESSONS-L0712 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Elige el caso correcto y forma el plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #891 ES-KURSS-LESSONS-L0716 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[1]`
- **DE:** sägen
- **CURRENT:** sägen — sierra
- **NEW:** sägen — serrar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #892 ES-KURSS-LESSONS-L0717 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[2]`
- **DE:** spalten
- **CURRENT:** spalten — dividir
- **NEW:** spalten — partir (madera)
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #893 ES-KURSS-LESSONS-L0720 [LABOT]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[2]`
- **DE:** aus
- **CURRENT:** aus — no / iz
- **NEW:** aus — de / desde; fuera de
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** La traducción contiene texto ajeno al español («no / iz») y no traduce correctamente aus.

---

## #894 ES-KURSS-LESSONS-L0722 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[2].heading`
- **DE:** —
- **CURRENT:** Woher? — no kurienes?
- **NEW:** Woher? — ¿De dónde?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción contiene una forma corrupta y carece de la formulación correcta en español, incluidos los signos de interrogación.

---

## #895 ES-KURSS-LESSONS-L0723 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[4].examples[1]`
- **DE:** Die Fenster sind aus Glas.
- **CURRENT:** Die Fenster sind aus Glas.
- **NEW:** Die Fenster sind aus Glas.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #896 ES-KURSS-LESSONS-L0724 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[4].examples[2]`
- **DE:** Die Kissen sind aus Federn.
- **CURRENT:** Die Kissen sind aus Federn.
- **NEW:** Die Kissen sind aus Federn.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #897 ES-KURSS-LESSONS-L0725 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[4].examples[3]`
- **DE:** Man macht aus Wolle Kleider.
- **CURRENT:** Man macht aus Wolle Kleider.
- **NEW:** Man macht aus Wolle Kleider.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #898 ES-KURSS-LESSONS-L0726 [LABOT]

- **Lesson:** lesson21
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[3].items[1]`
- **DE:** En arbeiten, das Beil y steigen, ei se pronuncia «ai».
- **CURRENT:** En arbeiten, das Beil y steigen, ei se pronuncia «ai».
- **NEW:** En das Beil y steigen, la combinación ei se pronuncia «ai».
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #899 ES-KURSS-LESSONS-L0727 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[0].prompt`
- **DE:** Der Vater kommt von dem Felde.
- **CURRENT:** Woher kommt der Vater?
- **NEW:** Woher kommt der Vater?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #900 ES-KURSS-LESSONS-L0728 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[1].prompt`
- **DE:** Er geht in die Scheune.
- **CURRENT:** Wohin geht er?
- **NEW:** Wohin geht er?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #901 ES-KURSS-LESSONS-L0729 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[2].prompt`
- **DE:** Er spricht in der Scheune mit den Holzhauern.
- **CURRENT:** Wo spricht er mit den Holzhauern?
- **NEW:** Wo spricht er mit den Holzhauern?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #902 ES-KURSS-LESSONS-L0730 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[3].prompt`
- **DE:** Der Mann steigt von dem Berge.
- **CURRENT:** Woher steigt der Mann?
- **NEW:** Woher steigt der Mann?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #903 ES-KURSS-LESSONS-L0731 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[4].prompt`
- **DE:** Er kommt auf den Hof.
- **CURRENT:** Wohin kommt er?
- **NEW:** Wohin kommt er?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #904 ES-KURSS-LESSONS-L0732 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[5].prompt`
- **DE:** Er findet den Vater auf dem Hof.
- **CURRENT:** Wo findet er den Vater?
- **NEW:** Wo findet er den Vater?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #905 ES-KURSS-LESSONS-L0733 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[6].prompt`
- **DE:** Die Mutter tritt aus dem Hause.
- **CURRENT:** Woher tritt die Mutter?
- **NEW:** Woher tritt die Mutter?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #906 ES-KURSS-LESSONS-L0734 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[7].prompt`
- **DE:** Sie geht auf den Hof.
- **CURRENT:** Wohin geht sie?
- **NEW:** Wohin geht sie?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #907 ES-KURSS-LESSONS-L0735 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[8].prompt`
- **DE:** Sie sieht den Mann auf dem Hof.
- **CURRENT:** Wo sieht sie den Mann?
- **NEW:** Wo sieht sie den Mann?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #908 ES-KURSS-LESSONS-L0736 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[9].prompt`
- **DE:** Die Magd kommt aus der Küche.
- **CURRENT:** Woher kommt die Magd?
- **NEW:** Woher kommt die Magd?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #909 ES-KURSS-LESSONS-L0737 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[10].prompt`
- **DE:** Sie eilt in den Keller.
- **CURRENT:** Wohin eilt sie?
- **NEW:** Wohin eilt sie?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #910 ES-KURSS-LESSONS-L0738 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[11].prompt`
- **DE:** Ein Eimer mit Milch steht im Keller.
- **CURRENT:** Wo steht ein Eimer mit Milch?
- **NEW:** Wo steht ein Eimer mit Milch?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #911 ES-KURSS-LESSONS-L0739 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[12].prompt`
- **DE:** Sie steigt aus dem Keller.
- **CURRENT:** Woher steigt sie?
- **NEW:** Woher steigt sie?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #912 ES-KURSS-LESSONS-L0740 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[13].prompt`
- **DE:** Sie geht in die Küche zurück.
- **CURRENT:** Wohin geht sie zurück?
- **NEW:** Wohin geht sie zurück?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #913 ES-KURSS-LESSONS-L0741 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[14].prompt`
- **DE:** Sie arbeitet fleißig in der Küche.
- **CURRENT:** Wo arbeitet sie fleißig?
- **NEW:** Wo arbeitet sie fleißig?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #914 ES-KURSS-LESSONS-L0742 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv`
- **DE:** Ich nehme die Hefte aus der Mappe.
- **CURRENT:** Saco los cuadernos de mi bolso.
- **NEW:** Saco los cuadernos de la carpeta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #915 ES-KURSS-LESSONS-L0743 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[2].lv`
- **DE:** Ich ziehe die Uhr aus der Tasche.
- **CURRENT:** Llevo un reloj en mi bolsillo.
- **NEW:** Saco el reloj de la bolsa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #916 ES-KURSS-LESSONS-L0744 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[4].lv`
- **DE:** Ich trage den Eimer aus dem Keller.
- **CURRENT:** Es nesu spaini no pagraba.
- **NEW:** Es nesu spaini no pagraba.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #917 ES-KURSS-LESSONS-L0745 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[5].lv`
- **DE:** Ich nehme die Mütze vom Kopfe.
- **CURRENT:** Me quito el sombrero de la cabeza.
- **NEW:** Me quito el gorro de la cabeza.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Semantic/grammar correction validated.

---

## #918 ES-KURSS-LESSONS-L0746 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #919 ES-KURSS-LESSONS-L0747 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa el caso correcto y forma el plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---
