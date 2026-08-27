# ES–DE Kurss Lessons — OWNER decisions (full view)

**Total:** 993 · **Linguistic:** 986 · **Technical deferred:** 7

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
- **NEW:** En la palabra “wir”, la letra i se pronuncia larga.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** En las lecciones se proporciona la pronunciación correcta de las palabras, representada con letras letonas.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** En letón:
Tu nāc.
Vai tu nāc?
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** En las palabras arbeiten y zeichnen, el diptongo ei se pronuncia aproximadamente como el sonido letón de una e abierta, seguido de i.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #30 ES-KURSS-LESSONS-DET-0023 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[1]`
- **DE:** Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
- **CURRENT:** Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
- **NEW:** El grupo de consonantes sp se pronuncia como šp: spielen (špīlen).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #31 ES-KURSS-LESSONS-DET-0024 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[2]`
- **DE:** Darbības vārdā tun u izrunājams gari visās personās.
- **CURRENT:** Darbības vārdā tun u izrunājams gari visās personās.
- **NEW:** En el verbo tun, la u se pronuncia larga en todas las personas.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** niedrig — En alemán, el sonido largo ī se representa mediante ie: liegen (līgen), hier (hīr), wie (vī).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #36 ES-KURSS-LESSONS-DET-0029 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
- **CURRENT:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
- **NEW:** En alemán, el sonido largo ī se representa mediante ie: liegen (līgen), hier (hīr), wie (vī).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #37 ES-KURSS-LESSONS-DET-0030 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[3]`
- **DE:** ck ir divkāršs k: dick (dikk).
- **CURRENT:** ck ir divkāršs k: dick (dikk).
- **NEW:** ck representa una k doble: dick (dikk).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #38 ES-KURSS-LESSONS-DET-0031 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Īpašības un apstākļu vārdos galotne
- **CURRENT:** Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas.
- **NEW:** En los adjetivos y adverbios, la terminación es -e.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #39 ES-KURSS-LESSONS-DET-0032 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Ar wer? jautā pēc personām.
- **CURRENT:** Ar wer? jautā pēc personām.
- **NEW:** Con wer? se pregunta por personas.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #40 ES-KURSS-LESSONS-DET-0033 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Ar was? jautā pēc priekšmetiem.
- **CURRENT:** Ar was? jautā pēc priekšmetiem.
- **NEW:** Con was? se pregunta por objetos.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #41 ES-KURSS-LESSONS-DET-0034 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE:** vīriešu kārta
- **CURRENT:** vīriešu kārta — das
- **NEW:** masculino — das
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** neutro — die Tische
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #44 ES-KURSS-LESSONS-DET-0038 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- **DE:** Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.
- **CURRENT:** Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.
- **NEW:** En plural, el artículo definido para los tres géneros es die.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #45 ES-KURSS-LESSONS-DET-0039 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[13]`
- **DE:** vīriešu kārta
- **CURRENT:** vīriešu kārta — ein
- **NEW:** masculino — ein
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** neutro — Tische
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #48 ES-KURSS-LESSONS-DET-0043 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[16]`
- **DE:** Nenoteiktajam artikulam daudzskaitļa nav.
- **CURRENT:** Nenoteiktajam artikulam daudzskaitļa nav.
- **NEW:** El artículo indefinido no tiene plural.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** En alemán, cuando se habla de objetos que están en posición vertical, se dice que el objeto está de pie:
der Tisch steht
die Bank steht
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Federhalter (dēr fēderhalter) — portaplumas
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #56 ES-KURSS-LESSONS-DET-0051 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** die Feder (dī fēder)
- **CURRENT:** die Feder (dī fēder) — puntiagudo
- **NEW:** die Feder (dī fēder) — puntiagudo
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** En alemán, h puede representar tanto un sonido como una marca de longitud de la vocal precedente.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #61 ES-KURSS-LESSONS-DET-0056 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
- **CURRENT:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
- **NEW:** Si h es una marca de longitud, no se pronuncia como sonido: nehmen (nēmen).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #62 ES-KURSS-LESSONS-DET-0057 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
- **CURRENT:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
- **NEW:** Si a una vocal le sigue una sola consonante, la vocal se pronuncia larga: die (dī) Feder (fēder), den (dēn).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #63 ES-KURSS-LESSONS-DET-0058 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- **DE:** daudzskaitlī
- **CURRENT:** daudzskaitlī — das Messer ist nicht scharf
- **NEW:** en plural — das Messer ist nicht scharf
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Lehrer (dēr lērer) — profesor
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Schüler (šūler) — estudiante
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** tz representa un sonido z doble y se pronuncia como z: sitzen (zicen).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #76 ES-KURSS-LESSONS-DET-0071 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** v vācu vārdos izrunā kā f: der Vater (fāter).
- **CURRENT:** v vācu vārdos izrunā kā f: der Vater (fāter).
- **NEW:** La v en las palabras alemanas se pronuncia como f: der Vater (fāter).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #77 ES-KURSS-LESSONS-DET-0072 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **CURRENT:** ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **NEW:** ß se llama Eszett y se pronuncia como la s letona: groß (grōs), weiß (veis).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #78 ES-KURSS-LESSONS-DET-0073 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
- **CURRENT:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
- **NEW:** En alemán, en nominativo, la pregunta es wer? para las personas y was? para los objetos.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #79 ES-KURSS-LESSONS-DET-0074 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.
- **CURRENT:** Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.
- **NEW:** En acusativo, la pregunta es wen? para las personas y was? para los objetos.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** Muchos sustantivos femeninos se forman con la terminación -die Lehrerin.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #82 ES-KURSS-LESSONS-DET-0077 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[17]`
- **DE:** Stāstāmā teikumā darbības vārds stāv otrā vietā.
- **CURRENT:** Stāstāmā teikumā darbības vārds stāv otrā vietā.
- **NEW:** En una oración enunciativa, el verbo ocupa el segundo lugar.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Schlüssel (šlūsel) — llave
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #87 ES-KURSS-LESSONS-DET-0082 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** die Tafel (dī tāfel)
- **CURRENT:** die Tafel (dī tāfel) — pizarra
- **NEW:** die Tafel (dī tāfel) — pizarra
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Deckel (dēr dekel) — tapa
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** schwer (švēr) — pesado, difícil
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** ä es una modificación de la vocal a y se pronuncia como una e breve o larga y cerrada.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #95 ES-KURSS-LESSONS-DET-0090 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **CURRENT:** Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **NEW:** Ejemplos: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #96 ES-KURSS-LESSONS-DET-0091 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** —
- **CURRENT:** ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i.
- **NEW:** ü es una modificación de la vocal u. Para pronunciarla, hay que redondear mucho los labios e intentar pronunciar i con los labios redondeados.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #97 ES-KURSS-LESSONS-DET-0092 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** Piemēri: fünf, der Schlüssel (šlūsel).
- **CURRENT:** Piemēri: fünf, der Schlüssel (šlūsel).
- **NEW:** Ejemplos: fünf, der Schlüssel (šlūsel).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #98 ES-KURSS-LESSONS-DET-0093 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** —
- **CURRENT:** ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel.
- **NEW:** ö se pronuncia con los labios redondeados, intentando pronunciar e: der Löffel.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #99 ES-KURSS-LESSONS-DET-0094 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Divkāršots patskanis apzīmē garu patskani: leer (lēr).
- **CURRENT:** Divkāršots patskanis apzīmē garu patskani: leer (lēr).
- **NEW:** Una vocal doble representa una vocal larga: leer (lēr).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #100 ES-KURSS-LESSONS-DET-0095 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Divskani eu izrunā kā oi: neun (noin).
- **CURRENT:** Divskani eu izrunā kā oi: neun (noin).
- **NEW:** El diptongo eu se pronuncia como oi: neun (noin).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #101 ES-KURSS-LESSONS-DET-0096 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.
- **CURRENT:** Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.
- **NEW:** En presente, el prefijo tónico de un verbo compuesto se separa del verbo y aparece al final de la oración.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #102 ES-KURSS-LESSONS-DET-0097 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- **DE:** Piemēri: hinlegen
- **CURRENT:** Piemēri: hinlegen — Satiana en alemán tiene una forma singular y plural: der Schüler ist pequeño; die Schüler sind klein.
- **NEW:** Ejemplo: hinlegen
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #103 ES-KURSS-LESSONS-DET-0098 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE:** Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.
- **CURRENT:** Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.
- **NEW:** El numeral «uno» adopta tres formas cuando se usa con un sustantivo: en masculino, ein; en femenino, eine; y en neutro, ein.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #104 ES-KURSS-LESSONS-DET-0099 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- **DE:** Piemēri: ein Schüler
- **CURRENT:** Piemēri: ein Schüler — das ist ein Hammer; es una aguja: das ist eine Nadel; son martillos—das sind Hämmer; son agujas - das sind Nadeln.
- **NEW:** Ejemplos: ein Schüler — das ist ein Hammer; es una aguja: das ist eine Nadel; son martillos—das sind Hämmer; son agujas - das sind Nadeln.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #105 ES-KURSS-LESSONS-DET-0100 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE:** Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).
- **CURRENT:** Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).
- **NEW:** Números: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #106 ES-KURSS-LESSONS-DET-0101 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- **DE:** Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
- **CURRENT:** Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
- **NEW:** El pronombre en alemán tiene formas de singular y plural: der Schüler ist klein; die Schüler sind klein.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #107 ES-KURSS-LESSONS-DET-0102 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[10]`
- **DE:** Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.
- **CURRENT:** Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.
- **NEW:** El pronombre demostrativo «tas» en letón cambia según el número y el género, mientras que en alemán se utiliza una sola forma: das.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #108 ES-KURSS-LESSONS-DET-0103 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[11]`
- **DE:** Piemēri: tas ir veseris
- **CURRENT:** Piemēri: tas ir veseris — el, -er plural toma -n.
- **NEW:** Ejemplos: esto es un martillo — el plural en -er toma -n.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #109 ES-KURSS-LESSONS-DET-0104 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[13]`
- **DE:** Vīriešu un vidējās kārtas lietvārdi ar galotni
- **CURRENT:** Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (madres); die Tochter (hija) — die Töchter (hijas).
- **NEW:** Sustantivos masculinos y neutros con la terminación -die Mütter (madres); die Tochter (hija) — die Töchter (hijas).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #110 ES-KURSS-LESSONS-DET-0105 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE:** Piemēri: der Hammer
- **CURRENT:** Piemēri: der Hammer — das sind Wagen; das ist eine Nadel — das sind Nadeln.
- **NEW:** Ejemplos: der Hammer — das sind Wagen; das ist eine Nadel — das sind Nadeln.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #111 ES-KURSS-LESSONS-DET-0106 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- **DE:** Sieviešu kārtas lietvārdi ar galotni
- **CURRENT:** Sieviešu kārtas lietvārdi ar galotni -En una oración narrativa, el verbo predicado ocupa el segundo lugar: er legt den Schlüssel hin; dann legt er den Schlüssel hin.
- **NEW:** Sustantivos femeninos con la terminación -. En una oración narrativa, el verbo predicado ocupa el segundo lugar: er legt den Schlüssel hin; dann legt er den Schlüssel hin.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** das Lied (das līt) — jovencita
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #115 ES-KURSS-LESSONS-DET-0110 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** der Spiegel (špīgel)
- **CURRENT:** der Spiegel (špīgel) — escoba
- **NEW:** der Spiegel (špīgel) — escoba
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #116 ES-KURSS-LESSONS-DET-0111 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** die Schüssel
- **CURRENT:** die Schüssel — sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (para špīgel).
- **NEW:** die Schüssel — sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (para špīgel).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #117 ES-KURSS-LESSONS-DET-0112 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE:** das Zimmer
- **CURRENT:** das Zimmer — sch se pronuncia como letón š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **NEW:** das Zimmer — sch se pronuncia como la letra letona š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #118 ES-KURSS-LESSONS-DET-0113 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE:** das Ufer (ūfer)
- **CURRENT:** das Ufer (ūfer) — El diptongo äu se pronuncia como letón oi: das Fräulein (das froilein).
- **NEW:** das Ufer (ūfer) — El diptongo äu se pronuncia como el diptongo letón oi: das Fräulein (das froilein).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #119 ES-KURSS-LESSONS-DET-0114 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE:** sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).
- **CURRENT:** sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).
- **NEW:** sp al principio de una palabra o sílaba se pronuncia como el letón š: der Spiegel (dēr špīgel).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #120 ES-KURSS-LESSONS-DET-0115 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **CURRENT:** sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **NEW:** sch se pronuncia como la letra letona š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #121 ES-KURSS-LESSONS-DET-0116 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).
- **CURRENT:** Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).
- **NEW:** El diptongo äu se pronuncia como el diptongo letón oi: das Fräulein (das froilein).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #122 ES-KURSS-LESSONS-DET-0117 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes
- **CURRENT:** Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes -La forma del comando en la segunda persona del plural es similar a la segunda persona del presente plural, pero se usa sin pronombre.
- **NEW:** La forma imperativa en la 2.ª persona del singular corresponde a la 2.ª persona del singular del verbo, sin la terminación personal.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #123 ES-KURSS-LESSONS-DET-0118 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** Piemēri: antworte!, arbeite!, öffne!, zeichne!
- **CURRENT:** Piemēri: antworte!, arbeite!, öffne!, zeichne!
- **NEW:** Ejemplos: antworte!, arbeite!, öffne!, zeichne!
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #124 ES-KURSS-LESSONS-DET-0119 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- **DE:** Ļoti bieži galotne
- **CURRENT:** Ļoti bieži galotne -La forma de tratamiento con "Usted" se parece a la tercera persona del plural. El pronombre Sie es escrito con mayúscula y después del verbo.
- **NEW:** Muy a menudo, la forma de tratamiento con «Usted» se parece a la tercera persona del plural. El pronombre Sie se escribe con mayúscula y va después del verbo.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #125 ES-KURSS-LESSONS-DET-0120 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE:** Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.
- **CURRENT:** Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.
- **NEW:** La forma imperativa en la 2.ª persona del plural se parece a la 2.ª persona del plural del presente, pero se utiliza sin pronombre.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #126 ES-KURSS-LESSONS-DET-0121 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- **DE:** Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!
- **CURRENT:** Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!
- **NEW:** Ejemplos: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Bäcker (dēr beker) — panadero
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #142 ES-KURSS-LESSONS-DET-0138 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]`
- **DE:** der Schneider (dēr šneider)
- **CURRENT:** der Schneider (dēr šneider) — sastre
- **NEW:** der Schneider (dēr šneider) — sastre
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #143 ES-KURSS-LESSONS-DET-0139 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]`
- **DE:** der Gärtner (dēr gertner)
- **CURRENT:** der Gärtner (dēr gertner) — jardinero
- **NEW:** der Gärtner (dēr gertner) — jardinero
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** La ä también puede sonar como una e más abierta, por ejemplo en der Gärtner (dēr gertner).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Brief (dēr brīf) — carta
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** ihr seid (īr zeit) — vosotros sois / estáis
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #172 ES-KURSS-LESSONS-DET-0169 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]`
- **DE:** der Knabe (dēr knābe)
- **CURRENT:** der Knabe (dēr knābe) — un niño
- **NEW:** der Knabe (dēr knābe) — un niño
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #173 ES-KURSS-LESSONS-DET-0170 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]`
- **DE:** der Großvater (dēr grōsfāter)
- **CURRENT:** der Großvater (dēr grōsfāter) — abuelo
- **NEW:** der Großvater (dēr grōsfāter) — abuelo
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #176 ES-KURSS-LESSONS-DET-0173 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
- **DE:** Pronuncia correctamente: der Großvater (dēr grōsfāter).
- **CURRENT:** Pronuncia correctamente: der Großvater (dēr grōsfāter).
- **NEW:** Pronuncia correctamente: der Großvater (dēr grōsfāter).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #177 ES-KURSS-LESSONS-DET-0174 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
- **DE:** La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.
- **CURRENT:** La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.
- **NEW:** La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Bruder (dēr brūder) — hermano
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #185 ES-KURSS-LESSONS-DET-0182 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]`
- **DE:** der Schreibtisch (dēr šreibtīš)
- **CURRENT:** der Schreibtisch (dēr šreibtīš) — un escritorio
- **NEW:** der Schreibtisch (dēr šreibtīš) — un escritorio
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Freund (dēr froint) — amigo
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #188 ES-KURSS-LESSONS-DET-0185 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]`
- **DE:** der Stuhl (dēr štūl)
- **CURRENT:** der Stuhl (dēr štūl) — silla
- **NEW:** der Stuhl (dēr štūl) — silla
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #189 ES-KURSS-LESSONS-DET-0186 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]`
- **DE:** die Landkarte (dī lantkarte)
- **CURRENT:** die Landkarte (dī lantkarte) — mapa geográfico
- **NEW:** die Landkarte (dī lantkarte) — mapa geográfico
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #190 ES-KURSS-LESSONS-DET-0187 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]`
- **DE:** die Schwester (dī švester)
- **CURRENT:** die Schwester (dī švester) — hermana
- **NEW:** die Schwester (dī švester) — hermana
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #191 ES-KURSS-LESSONS-DET-0188 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]`
- **DE:** eu se pronuncia «oi»: der Freund (dēr froint), neun (noin).
- **CURRENT:** eu se pronuncia «oi»: der Freund (dēr froint), neun (noin).
- **NEW:** eu se pronuncia «oi»: der Freund (dēr froint), neun (noin).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #192 ES-KURSS-LESSONS-DET-0189 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]`
- **DE:** A menudo, la h indica que la vocal anterior es larga: der Stuhl (dēr štūl), zehn (cēn).
- **CURRENT:** A menudo, la h indica que la vocal anterior es larga: der Stuhl (dēr štūl), zehn (cēn).
- **NEW:** A menudo, la h indica que la vocal anterior es larga: der Stuhl (dēr štūl), zehn (cēn).
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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
- **NEW:** der Vetter (dēr feter) — primo
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

---

## #206 ES-KURSS-LESSONS-DET-0203 [LABOT]

- **Lesson:** lesson12
- **Category:** FOREIGN_REMNANT · **Severity:** HIGH · **Source:** deterministic
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
- **DE:** das Gummi (das gumī)
- **CURRENT:** das Gummi (das gumī) — goma
- **NEW:** das Gummi (das gumī) — goma
- **OWNER_DECISION:** LABOT: Spanish rewrite of LV legacy prose (Luna translation).
- **Pamatojums:** LV remnant replaced with natural Spanish; German examples preserved.

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

## #335 ES-KURSS-LESSONS-LV2-0001 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[7]`
- **DE:** —
- **CURRENT:** nosotros ven
- **NEW:** nosotros venimos
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La forma verbal no concuerda con el sujeto «nosotros»; la primera persona plural de «venir» es «venimos».

---

## #336 ES-KURSS-LESSONS-LV2-0002 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[9]`
- **DE:** —
- **CURRENT:** tú vienes
- **NEW:** vosotros venís
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La forma corresponde a la segunda persona plural alemana (ihr), no a «tú»; además, esta entrada duplica la forma de la segunda persona singular.

---

## #337 ES-KURSS-LESSONS-LV2-0005 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[5]`
- **DE:** —
- **CURRENT:** he / ella va
- **NEW:** él / ella va
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «he» es un error ortográfico/ de texto; el pronombre masculino correcto es «él».

---

## #338 ES-KURSS-LESSONS-LV2-0006 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[9]`
- **DE:** —
- **CURRENT:** tú ejat
- **NEW:** vosotros vais
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** «ejat» no es una forma española y parece texto extranjero o corrupto. La entrada debe expresar la segunda persona plural correspondiente.

---

## #339 ES-KURSS-LESSONS-LV2-0008 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].title`
- **DE:** ♟stehen
- **CURRENT:** ♟stehen — pararse
- **NEW:** ♟stehen — estar de pie
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «pararse» suele significar ponerse de pie o detenerse, mientras que «stehen» en este paradigma significa «estar de pie».

---

## #340 ES-KURSS-LESSONS-LV2-0009 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[1]`
- **DE:** —
- **CURRENT:** I stand
- **NEW:** I stand
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #341 ES-KURSS-LESSONS-LV2-0010 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[9]`
- **DE:** —
- **CURRENT:** tú estás de pie
- **NEW:** vosotros estáis de pie
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Esta posición corresponde a la segunda persona plural alemana (ihr), pero el texto usa el pronombre singular «tú».

---

## #342 ES-KURSS-LESSONS-LV2-0012 [FALSE_POSITIVE]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].title`
- **DE:** ♟singen
- **CURRENT:** ♟singen — to canta
- **NEW:** ♟singen — to canta
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #343 ES-KURSS-LESSONS-LV2-0013 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[9]`
- **DE:** —
- **CURRENT:** tú cantas
- **NEW:** vosotros cantáis
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La forma corresponde a la segunda persona plural alemana (ihr), no a «tú»; «vosotros cantáis» mantiene la concordancia.

---

## #344 ES-KURSS-LESSONS-LV2-0015 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → lesson1-info[0]`
- **DE:** —
- **CURRENT:** iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.
Esto también debería seguirse en futuras conferencias.
- **NEW:** La pronunciación aproximada de las palabras se indica entre paréntesis con letras letonas.
Esto también debería seguirse en futuras lecciones.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Contiene el error tipográfico «iEl La» y «conferencias» no es natural en el contexto de un curso; debe decir «lecciones».

---

## #345 ES-KURSS-LESSONS-LV2-0019 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** singen (zingen)
- **CURRENT:** singen (zingen) — canta
- **NEW:** singen (zingen) — cantar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Las demás entradas presentan los verbos en infinitivo; «canta» es una forma conjugada y rompe la coherencia terminológica.

---

## #346 ES-KURSS-LESSONS-LV2-0023 [LABOT]

- **Lesson:** lesson1
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** ich →
- **CURRENT:** ich → -ich komme
- **NEW:** ich → ich komme
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Hay un guion espurio pegado al ejemplo alemán, que altera la presentación de la correspondencia.

---

## #347 ES-KURSS-LESSONS-LV2-0024 [LABOT]

- **Lesson:** lesson1
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- **DE:** du →
- **CURRENT:** du → -du kommst
- **NEW:** du → du kommst
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Hay un guion espurio pegado al ejemplo alemán.

---

## #348 ES-KURSS-LESSONS-LV2-0025 [LABOT]

- **Lesson:** lesson1
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE:** er / sie →
- **CURRENT:** er / sie → -er kommt
- **NEW:** er / sie → er kommt
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Hay un guion espurio pegado al ejemplo alemán.

---

## #349 ES-KURSS-LESSONS-LV2-0026 [LABOT]

- **Lesson:** lesson1
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- **DE:** wir →
- **CURRENT:** wir → -wir kommen
- **NEW:** wir → wir kommen
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Hay un guion espurio pegado al ejemplo alemán.

---

## #350 ES-KURSS-LESSONS-LV2-0027 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE:** ihr →
- **CURRENT:** ihr → -En letón:
- **NEW:** ihr → ihr kommt
- **OWNER_DECISION:** LABOT: replace Latvian remnant with Spanish per audit proposal.
- **Pamatojums:** LV text confirmed in ES learner-facing field; DE context checked.

---

## #351 ES-KURSS-LESSONS-LV2-0028 [LABOT]

- **Lesson:** lesson1
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- **DE:** sie →
- **CURRENT:** sie → -Alemán en:
- **NEW:** sie → sie kommen
- **OWNER_DECISION:** LABOT: replace Latvian remnant with Spanish per audit proposal.
- **Pamatojums:** LV text confirmed in ES learner-facing field; DE context checked.

---

## #352 ES-KURSS-LESSONS-LV2-0030 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** ♟Presente terminaciones
- **NEW:** ♟ Terminaciones del presente
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El orden de las palabras no es natural en español; debe decir «Terminaciones del presente».

---

## #353 ES-KURSS-LESSONS-LV2-0031 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** ?Oraciones de preguntas
- **NEW:** ?Oraciones interrogativas
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #354 ES-KURSS-LESSONS-LV2-0032 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **DE:** —
- **CURRENT:** ♣Diferencia de persona
- **NEW:** ♣Diferencias según la persona
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Diferencia de persona» suena poco natural y ambiguo como encabezado gramatical.

---

## #355 ES-KURSS-LESSONS-LV2-0033 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → ending-info[0]`
- **DE:** —
- **CURRENT:** Eliminar -en de las formas base del verbo y agrega la terminación.
Ejemplo: kommen → komm + terminación
kommenforma base
- **NEW:** Eliminar -en de la forma básica del verbo y añadir la terminación.
Ejemplo: kommen → komm + terminación
kommen: forma básica
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»), «formas base» no es la formulación más natural y la última línea carece de espacio y separador.

---

## #356 ES-KURSS-LESSONS-LV2-0034 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → p[0]`
- **DE:** —
- **CURRENT:** Eliminar -en de las formas base del verbo y agrega la terminación.
- **NEW:** Eliminar -en de la forma básica del verbo y añadir la terminación.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»); además, «forma básica» es más natural que «formas base» en este contexto.

---

## #357 ES-KURSS-LESSONS-LV2-0035 [LABOT]

- **Lesson:** lesson1
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `lesson1TrainingCardsEs[0].front`
- **DE:** Kommst du?
- **CURRENT:** ¿vienes?
- **NEW:** ¿Vienes?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Como oración independiente, debe escribirse con mayúscula inicial.

---

## #358 ES-KURSS-LESSONS-LV2-0036 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson1TrainingCardsEs[5].front`
- **DE:** Ja, sie gehen.
- **CURRENT:** Sí, van.
- **NEW:** Sí, se van.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La respuesta no conserva el valor pronominal de «Se van?»; «Sí, van» sugiere que van a algún lugar, no necesariamente que se marchan.

---

## #359 ES-KURSS-LESSONS-LV2-0037 [LABOT]

- **Lesson:** lesson1
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson1TrainingCardsEs[9].front`
- **DE:** Geht ihr?
- **CURRENT:** Vas a ir
- **NEW:** ¿Vais?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El texto actual es una afirmación en segunda persona singular y expresa una perífrasis de futuro, mientras que el contexto alemán es una pregunta dirigida a varias personas.

---

## #360 ES-KURSS-LESSONS-LV2-0040 [LABOT]

- **Lesson:** lesson2
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** nein
- **CURRENT:** nein — trabajar
- **NEW:** nein — no
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «nein» significa «no», no «trabajar».

---

## #361 ES-KURSS-LESSONS-LV2-0041 [LABOT]

- **Lesson:** lesson2
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** nicht
- **CURRENT:** nicht — preguntar
- **NEW:** nicht — no
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «nicht» es el adverbio alemán de negación «no», mientras que «preguntar» corresponde a «fragen».

---

## #362 ES-KURSS-LESSONS-LV2-0042 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** arbeiten
- **CURRENT:** arbeiten — was tut er? ¿Qué está haciendo?
- **NEW:** arbeiten — trabajar
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo contiene una frase alemana no traducida («was tut er?») y añade una pregunta ajena al significado de la palabra «arbeiten».

---

## #363 ES-KURSS-LESSONS-LV2-0043 [LABOT]

- **Lesson:** lesson2
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** fragen
- **CURRENT:** fragen — ¿qué hacen ellos?
- **NEW:** fragen — preguntar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «fragen» significa «preguntar»; «¿qué hacen ellos?» corresponde a otra expresión alemana.

---

## #364 ES-KURSS-LESSONS-LV2-0044 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** was tut er?
- **CURRENT:** was tut er? — responder
- **NEW:** was tut er? — ¿qué hace él?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Was tut er?» significa «¿qué hace él?», no «responder».

---

## #365 ES-KURSS-LESSONS-LV2-0045 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** was tun sie?
- **CURRENT:** was tun sie? — calcular
- **NEW:** was tun sie? — ¿qué hacen ellos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Was tun sie?» significa «¿qué hacen ellos?», no «calcular».

---

## #366 ES-KURSS-LESSONS-LV2-0046 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** aber
- **CURRENT:** aber — dibujar
- **NEW:** aber — pero
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Aber» significa «pero»; «dibujar» no corresponde.

---

## #367 ES-KURSS-LESSONS-LV2-0047 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** antworten
- **CURRENT:** antworten — Marie
- **NEW:** antworten — responder
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Marie» no es la traducción de «antworten»; el verbo significa «responder».

---

## #368 ES-KURSS-LESSONS-LV2-0051 [FALSE_POSITIVE]

- **Lesson:** lesson2
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → course-example[11]`
- **DE:** nosotros rechnen
- **CURRENT:** nosotros rechnen
- **NEW:** nosotros rechnen
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #369 ES-KURSS-LESSONS-LV2-0052 [LABOT]

- **Lesson:** lesson2
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-note[1]`
- **DE:** —
- **CURRENT:** En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa.
- **NEW:** En las oraciones interrogativas que comienzan con una palabra interrogativa, como «qué», «quién» o «por qué», el verbo va inmediatamente después de la palabra interrogativa.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Hay repeticiones erróneas («¿qué?» y «¿por qué?») y «OMS» es un resto extranjero o una traducción incorrecta. La redacción también necesita naturalidad y puntuación.

---

## #370 ES-KURSS-LESSONS-LV2-0053 [LABOT]

- **Lesson:** lesson2
- **Category:** ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Terminaciones con e
- **NEW:** 1. Terminaciones con e
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta un espacio o signo de puntuación entre el número y el encabezado.

---

## #371 ES-KURSS-LESSONS-LV2-0054 [LABOT]

- **Lesson:** lesson2
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2Palabra en cuestión
- **NEW:** 2. Palabra interrogativa
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta separación después del número y «palabra en cuestión» no es una denominación natural ni precisa para este concepto gramatical.

---

## #372 ES-KURSS-LESSONS-LV2-0055 [LABOT]

- **Lesson:** lesson2
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[2]`
- **DE:** —
- **CURRENT:** 3Negación con nicht
- **NEW:** 3. Negación con nicht
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta el espacio tras el número y la puntuación habitual de la numeración.

---

## #373 ES-KURSS-LESSONS-LV2-0056 [LABOT]

- **Lesson:** lesson2
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson2TrainingCardsEs[1].front`
- **DE:** Paul fragt.
- **CURRENT:** pregunta Pablo.
- **NEW:** Pablo pregunta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El orden de palabras resulta poco natural en español y la oración comienza con minúscula.

---

## #374 ES-KURSS-LESSONS-LV2-0057 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson2TrainingCardsEs[6].front`
- **DE:** Nein, sie singen nicht, sie rechnen.
- **CURRENT:** No, no cantan, cuentan.
- **NEW:** No, no cantan, calculan.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «rechnen» significa «calcular» o «hacer cuentas», no «contar» en el sentido habitual de «cuentan».

---

## #375 ES-KURSS-LESSONS-LV2-0058 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson2TrainingCardsEs[8].front`
- **DE:** Ich stehe und singe.
- **CURRENT:** Me paro y canto.
- **NEW:** Estoy de pie y canto.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Ich stehe» expresa estar de pie; «me paro» suele significar que me detengo o que me pongo de pie.

---

## #376 ES-KURSS-LESSONS-LV2-0059 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson2TrainingCardsEs[9].front`
- **DE:** Zeichnet ihr?
- **CURRENT:** ¿Dibujas?
- **NEW:** ¿Dibujan?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «ihr» se refiere a la segunda persona plural, no a «tú».

---

## #377 ES-KURSS-LESSONS-LV2-0060 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson2TrainingCardsEs[10].front`
- **DE:** Ja, wir zeichnen, aber Marie spielt.
- **CURRENT:** Sí, empatamos, pero María juega.
- **NEW:** Sí, dibujamos, pero María juega.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Zeichnen» significa «dibujar»; «empatamos» no corresponde al significado alemán.

---

## #378 ES-KURSS-LESSONS-LV2-0061 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson2TrainingCardsEs[11].front`
- **DE:** Was tut ihr?
- **CURRENT:** qué estás haciendo
- **NEW:** qué están haciendo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «ihr» es segunda persona plural; «estás» es singular.

---

## #379 ES-KURSS-LESSONS-LV2-0062 [LABOT]

- **Lesson:** lesson2
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson2TrainingCardsEs[13].front`
- **DE:** Wer geht?
- **CURRENT:** ¿Qué está sucediendo?
- **NEW:** ¿Quién se va?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wer geht?» significa «¿Quién se va?» o «¿Quién va?», no «¿Qué está sucediendo?».

---

## #380 ES-KURSS-LESSONS-LV2-0064 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE:** wer
- **CURRENT:** wer — aquí
- **NEW:** wer — quién
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «wer» significa «quién»; «aquí» corresponde a «hier» y no al término mostrado.

---

## #381 ES-KURSS-LESSONS-LV2-0065 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** was
- **CURRENT:** was — allí
- **NEW:** was — qué
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «was» significa «qué», no «allí».

---

## #382 ES-KURSS-LESSONS-LV2-0066 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** hier
- **CURRENT:** hier — der Tisch table
- **NEW:** hier — aquí
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «hier» significa «aquí»; además, «table» es un resto en inglés y no corresponde al ejemplo.

---

## #383 ES-KURSS-LESSONS-LV2-0067 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** dort
- **CURRENT:** dort — mesa
- **NEW:** dort — allí
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «dort» significa «allí», no «mesa».

---

## #384 ES-KURSS-LESSONS-LV2-0068 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** der Tisch
- **CURRENT:** der Tisch — banco
- **NEW:** der Tisch — la mesa
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «der Tisch» significa «la mesa», no «banco».

---

## #385 ES-KURSS-LESSONS-LV2-0069 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** ein Tisch
- **CURRENT:** ein Tisch — banco
- **NEW:** ein Tisch — una mesa
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ein Tisch» significa «una mesa», no «banco».

---

## #386 ES-KURSS-LESSONS-LV2-0070 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** die Bank
- **CURRENT:** die Bank — tumbado
- **NEW:** die Bank — el banco
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «die Bank» significa «el banco»; «tumbado» corresponde a otro significado.

---

## #387 ES-KURSS-LESSONS-LV2-0072 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** liegen
- **CURRENT:** liegen — un libro
- **NEW:** liegen — estar tumbado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «liegen» es un verbo; significa «estar tumbado» o «estar colocado», no «un libro».

---

## #388 ES-KURSS-LESSONS-LV2-0073 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** liegt hier ein Buch?
- **CURRENT:** liegt hier ein Buch? — un libro
- **NEW:** liegt hier ein Buch? — ¿Hay un libro aquí?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción actual es incompleta y no traduce la pregunta alemana.

---

## #389 ES-KURSS-LESSONS-LV2-0074 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE:** das Buch
- **CURRENT:** das Buch — hang
- **NEW:** das Buch — hang
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #390 ES-KURSS-LESSONS-LV2-0075 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- **DE:** ein Buch
- **CURRENT:** ein Buch — imagen
- **NEW:** ein Buch — un libro
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ein Buch» significa «un libro», no «imagen».

---

## #391 ES-KURSS-LESSONS-LV2-0076 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** hängen
- **CURRENT:** hängen — imagen
- **NEW:** hängen — estar colgado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «hängen» significa «estar colgado» o «colgar», no «imagen».

---

## #392 ES-KURSS-LESSONS-LV2-0077 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** das Bild
- **CURRENT:** das Bild — pizarra
- **NEW:** das Bild — la imagen
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «das Bild» significa «la imagen» o «el cuadro», no «pizarra».

---

## #393 ES-KURSS-LESSONS-LV2-0078 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** ein Bild
- **CURRENT:** ein Bild — pizarra
- **NEW:** ein Bild — una imagen
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ein Bild» significa «una imagen», no «pizarra».

---

## #394 ES-KURSS-LESSONS-LV2-0079 [LABOT]

- **Lesson:** lesson3
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE:** die Tafel
- **CURRENT:** die Tafel — alguien, qué
- **NEW:** die Tafel — la pizarra
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La traducción no corresponde a «die Tafel» y combina dos significados ajenos al ejemplo.

---

## #395 ES-KURSS-LESSONS-LV2-0080 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- **DE:** eine Tafel
- **CURRENT:** eine Tafel — es
- **NEW:** eine Tafel — una pizarra
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «eine Tafel» significa «una pizarra», no «es».

---

## #396 ES-KURSS-LESSONS-LV2-0081 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** wie
- **CURRENT:** wie — grueso, gordo
- **NEW:** wie — cómo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «wie» significa «cómo»; «grueso» y «gordo» no corresponden a este ejemplo.

---

## #397 ES-KURSS-LESSONS-LV2-0082 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[18]`
- **DE:** ist
- **CURRENT:** ist — cuaderno
- **NEW:** ist — es
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ist» es la forma de tercera persona singular de «sein» y significa «es» o «está», no «cuaderno».

---

## #398 ES-KURSS-LESSONS-LV2-0083 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[19]`
- **DE:** dick
- **CURRENT:** dick — cuaderno
- **NEW:** dick — grueso
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «dick» significa «grueso» o «gordo», no «cuaderno».

---

## #399 ES-KURSS-LESSONS-LV2-0084 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[20]`
- **DE:** das Heft
- **CURRENT:** das Heft — delgado, delgado
- **NEW:** das Heft — el cuaderno
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «das Heft» significa «el cuaderno»; la traducción actual es incorrecta y repite innecesariamente el adjetivo.

---

## #400 ES-KURSS-LESSONS-LV2-0085 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[21]`
- **DE:** ein Heft
- **CURRENT:** ein Heft — bajo
- **NEW:** ein Heft — un cuaderno
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ein Heft» significa «un cuaderno», no «bajo».

---

## #401 ES-KURSS-LESSONS-LV2-0086 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[22]`
- **DE:** dünn
- **CURRENT:** dünn — alto
- **NEW:** dünn — delgado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «dünn» significa «delgado» o «fino», no «alto».

---

## #402 ES-KURSS-LESSONS-LV2-0087 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → course-example[0]`
- **DE:** wer
- **CURRENT:** wer - qué
- **NEW:** wer — quién
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «wer» pregunta por personas y significa «quién», no «qué».

---

## #403 ES-KURSS-LESSONS-LV2-0091 [LABOT]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE:** Ja galotne
- **CURRENT:** Ja galotne -¿Ar qué? pregunta por temas.
- **NEW:** Si la terminación es -…
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo mezcla letón con español y está truncado; la frase resultante no es una explicación gramatical válida.

---

## #404 ES-KURSS-LESSONS-LV2-0098 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[10]`
- **DE:** der Tisch
- **CURRENT:** der Tisch — die Hefte
- **NEW:** der Tisch — die Hefte
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #405 ES-KURSS-LESSONS-LV2-0099 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[11]`
- **DE:** die Bank
- **CURRENT:** die Bank — ein
- **NEW:** die Bank — ein
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #406 ES-KURSS-LESSONS-LV2-0100 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[12]`
- **DE:** das Heft
- **CURRENT:** das Heft — eine
- **NEW:** das Heft — eine
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #407 ES-KURSS-LESSONS-LV2-0105 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[17]`
- **DE:** ein Tisch
- **CURRENT:** ein Tisch — Hans spielt, aber Marie singt.
- **NEW:** ein Tisch — Hans spielt, aber Marie singt.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #408 ES-KURSS-LESSONS-LV2-0106 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[18]`
- **DE:** ein Heft
- **CURRENT:** ein Heft — Hier hängt eine Karte.
- **NEW:** ein Heft — Hier hängt eine Karte.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #409 ES-KURSS-LESSONS-LV2-0107 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[19]`
- **DE:** Hans spielt, aber Marie singt.
- **CURRENT:** Hans spielt, aber Marie singt.
- **NEW:** Hans spielt, aber Marie singt.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #410 ES-KURSS-LESSONS-LV2-0108 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[20]`
- **DE:** Hier hängt eine Karte.
- **CURRENT:** Hier hängt eine Karte.
- **NEW:** Hier hängt eine Karte.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #411 ES-KURSS-LESSONS-LV2-0111 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
- **DE:** —
- **CURRENT:** En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida.
- **NEW:** En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #412 ES-KURSS-LESSONS-LV2-0112 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[2]`
- **DE:** —
- **CURRENT:** Sin artículos delante de nombres propios.
- **NEW:** No se usan artículos delante de los nombres propios.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La versión actual es un fragmento telegráfico; la propuesta es más natural como nota gramatical.

---

## #413 ES-KURSS-LESSONS-LV2-0113 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[3]`
- **DE:** —
- **CURRENT:** En una oración narrativa, el verbo ocupa el segundo lugar.
- **NEW:** En una oración enunciativa, el verbo ocupa la segunda posición.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Narrativa» no corresponde al sentido gramatical de una oración declarativa/enunciativa.

---

## #414 ES-KURSS-LESSONS-LV2-0114 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Sujeto de la oración
- **NEW:** 1. Sujeto de la oración
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta un espacio o separador después del número.

---

## #415 ES-KURSS-LESSONS-LV2-0115 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2Artículos
- **NEW:** 2. Artículos
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta un espacio o separador después del número.

---

## #416 ES-KURSS-LESSONS-LV2-0116 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
- **DE:** —
- **CURRENT:** 3Sustantivos propios
- **NEW:** 3. Sustantivos propios
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta un espacio o separador después del número.

---

## #417 ES-KURSS-LESSONS-LV2-0117 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** 4Lugar del verbo
- **NEW:** 4. Lugar del verbo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta un espacio o separador después del número.

---

## #418 ES-KURSS-LESSONS-LV2-0118 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[0]`
- **DE:** Noteiktais artikuls
- **CURRENT:** Noteiktais artikuls
- **NEW:** Noteiktais artikuls
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #419 ES-KURSS-LESSONS-LV2-0119 [FALSE_POSITIVE]

- **Lesson:** lesson3
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[1]`
- **DE:** Nenoteiktais artikuls
- **CURRENT:** Nenoteiktais artikuls
- **NEW:** Nenoteiktais artikuls
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #420 ES-KURSS-LESSONS-LV2-0120 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[0].front`
- **DE:** Rechnest du?
- **CURRENT:** ¿cuentas?
- **NEW:** ¿Cuentas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La primera palabra de una pregunta independiente debe comenzar con mayúscula.

---

## #421 ES-KURSS-LESSONS-LV2-0121 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[2].front`
- **DE:** Was steht dort?
- **CURRENT:** ¿Quién está parado ahí?
- **NEW:** ¿Qué hay ahí?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Was steht dort? pregunta por una cosa, no por una persona; «quién» es incorrecto.

---

## #422 ES-KURSS-LESSONS-LV2-0122 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[3].front`
- **DE:** Dort steht ein Tisch.
- **CURRENT:** Hay una mesa.
- **NEW:** Allí hay una mesa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción omite el adverbio de lugar «dort».

---

## #423 ES-KURSS-LESSONS-LV2-0123 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[4].front`
- **DE:** Was liegt hier?
- **CURRENT:** ¿Quién está aquí?
- **NEW:** ¿Qué hay aquí?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Was liegt hier? pregunta por una cosa, no por una persona; «quién» es incorrecto.

---

## #424 ES-KURSS-LESSONS-LV2-0124 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[5].front`
- **DE:** Hier liegt ein Buch.
- **CURRENT:** Aquí está el libro.
- **NEW:** Aquí hay un libro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El original usa un artículo indefinido, pero la versión actual usa «el», que cambia el significado.

---

## #425 ES-KURSS-LESSONS-LV2-0125 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[8].front`
- **DE:** Was ist dünn?
- **CURRENT:** ¿Cuál es el plan?
- **NEW:** ¿Qué es delgado?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción no corresponde a Was ist dünn? y cambia completamente el significado.

---

## #426 ES-KURSS-LESSONS-LV2-0126 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[9].front`
- **DE:** Das Heft ist dünn.
- **CURRENT:** El buzón es delgado.
- **NEW:** El cuaderno es delgado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Heft significa «cuaderno», no «buzón».

---

## #427 ES-KURSS-LESSONS-LV2-0127 [LABOT]

- **Lesson:** lesson3
- **Category:** ES_NATURALNESS · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[14].front`
- **DE:** Liegt dort ein Heft?
- **CURRENT:** ¿Hay/hay un cuaderno?
- **NEW:** ¿Hay allí un cuaderno?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La expresión «Hay/hay» es un duplicado y resulta antinatural; además, conviene reflejar el lugar indicado por dort.

---

## #428 ES-KURSS-LESSONS-LV2-0128 [LABOT]

- **Lesson:** lesson3
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson3TrainingCardsEs[15].front`
- **DE:** Ja, dort liegt ein Heft.
- **CURRENT:** Sí, hay un cuaderno.
- **NEW:** Sí, allí hay un cuaderno.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción omite el adverbio de lugar «dort».

---

## #429 ES-KURSS-LESSONS-LV2-0129 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[0]`
- **DE:** Paul kommt und nimmt einen Federhalter.
- **CURRENT:** Paul kommt und nimmt einen Federhalter.
- **NEW:** Paul kommt und nimmt einen Federhalter.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #430 ES-KURSS-LESSONS-LV2-0130 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[1]`
- **DE:** Er zeigt den Federhalter.
- **CURRENT:** Er zeigt den Federhalter.
- **NEW:** Er zeigt den Federhalter.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #431 ES-KURSS-LESSONS-LV2-0131 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[2]`
- **DE:** Wie ist der Federhalter?
- **CURRENT:** Er fragt: „Wie ist der Federhalter?“
- **NEW:** Él pregunta: «¿Cómo es el portaplumas?»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo visible contiene alemán sin traducir. La pregunta alemana debe permanecer como contexto alemán, no como texto español.

---

## #432 ES-KURSS-LESSONS-LV2-0132 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[3]`
- **DE:** Der Federhalter ist schwarz.
- **CURRENT:** Olga antwortet: „Der Federhalter ist schwarz.“
- **NEW:** Olga responde: «El portaplumas es negro.»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo visible contiene alemán sin traducir en lugar de una traducción española.

---

## #433 ES-KURSS-LESSONS-LV2-0133 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[4]`
- **DE:** Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.
- **CURRENT:** Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.
- **NEW:** Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #434 ES-KURSS-LESSONS-LV2-0134 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[5]`
- **DE:** Marie kommt und nimmt eine Feder.
- **CURRENT:** Marie kommt und nimmt eine Feder.
- **NEW:** Marie kommt und nimmt eine Feder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #435 ES-KURSS-LESSONS-LV2-0135 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[6]`
- **DE:** Wie ist die Feder?
- **CURRENT:** Sie fragt: „Wie ist die Feder?“
- **NEW:** Ella pregunta: «¿Cómo es la pluma?»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo visible contiene alemán sin traducir en lugar de una traducción española.

---

## #436 ES-KURSS-LESSONS-LV2-0136 [LABOT]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[7]`
- **DE:** Die Feder ist spitz.
- **CURRENT:** Olga antwortet: „Die Feder ist spitz.“
- **NEW:** Olga responde: «La pluma es puntiaguda.»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo visible contiene alemán sin traducir en lugar de una traducción española.

---

## #437 ES-KURSS-LESSONS-LV2-0137 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[8]`
- **DE:** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
- **CURRENT:** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
- **NEW:** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #438 ES-KURSS-LESSONS-LV2-0138 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[9]`
- **DE:** Was legt das Mädchen hin? Es legt die Feder hin.
- **CURRENT:** Was legt das Mädchen hin? Es legt die Feder hin.
- **NEW:** Was legt das Mädchen hin? Es legt die Feder hin.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #439 ES-KURSS-LESSONS-LV2-0139 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[10]`
- **DE:** Was nimmst du? Ich nehme ein Messer.
- **CURRENT:** Was nimmst du? Ich nehme ein Messer.
- **NEW:** Was nimmst du? Ich nehme ein Messer.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #440 ES-KURSS-LESSONS-LV2-0140 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[11]`
- **DE:** Wie ist das Messer? Das Messer ist scharf.
- **CURRENT:** Wie ist das Messer? Das Messer ist scharf.
- **NEW:** Wie ist das Messer? Das Messer ist scharf.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #441 ES-KURSS-LESSONS-LV2-0141 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[12]`
- **DE:** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
- **CURRENT:** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
- **NEW:** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #442 ES-KURSS-LESSONS-LV2-0142 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[13]`
- **DE:** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
- **CURRENT:** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
- **NEW:** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #443 ES-KURSS-LESSONS-LV2-0143 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[14]`
- **DE:** Dann gehe ich hinaus und arbeite.
- **CURRENT:** Dann gehe ich hinaus und arbeite.
- **NEW:** Dann gehe ich hinaus und arbeite.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #444 ES-KURSS-LESSONS-LV2-0145 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE:** er nimmt (nimt)
- **CURRENT:** er nimmt (nimt) — emplumado
- **NEW:** er nimmt (nimt) — él toma
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «emplumado» es incorrecta; er nimmt significa «él toma».

---

## #445 ES-KURSS-LESSONS-LV2-0147 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** einen Federhalter
- **CURRENT:** einen Federhalter — negro
- **NEW:** einen Federhalter — un portaplumas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «negro» no corresponde a einen Federhalter, que significa «un portaplumas».

---

## #446 ES-KURSS-LESSONS-LV2-0148 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** zeigen
- **CURRENT:** zeigen — blanco
- **NEW:** zeigen — mostrar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «blanco» no corresponde al verbo zeigen, que significa «mostrar».

---

## #447 ES-KURSS-LESSONS-LV2-0149 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** schwarz (švarc)
- **CURRENT:** schwarz (švarc) — pluma
- **NEW:** schwarz (švarc) — negro
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «pluma» no corresponde a schwarz, que significa «negro».

---

## #448 ES-KURSS-LESSONS-LV2-0150 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** weiß (veis)
- **CURRENT:** weiß (veis) — pluma
- **NEW:** weiß (veis) — blanco
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «pluma» no corresponde a weiß, que significa «blanco».

---

## #449 ES-KURSS-LESSONS-LV2-0152 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** eine Feder
- **CURRENT:** eine Feder — dejar
- **NEW:** eine Feder — una pluma
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «dejar» no corresponde a eine Feder, que significa «una pluma».

---

## #450 ES-KURSS-LESSONS-LV2-0153 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** spitz (špic)
- **CURRENT:** spitz (špic) — dejar
- **NEW:** spitz (špic) — puntiagudo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «dejar» no corresponde a spitz, que significa «puntiagudo».

---

## #451 ES-KURSS-LESSONS-LV2-0154 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE:** hinlegen
- **CURRENT:** hinlegen — niña
- **NEW:** hinlegen — colocar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «niña» no corresponde al verbo hinlegen, que significa «colocar» o «poner».

---

## #452 ES-KURSS-LESSONS-LV2-0155 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- **DE:** legt hin
- **CURRENT:** legt hin — cuchillo
- **NEW:** legt hin — coloca
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa «cuchillo» no corresponde a legt hin, que significa «coloca» o «pone».

---

## #453 ES-KURSS-LESSONS-LV2-0157 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** das Messer
- **CURRENT:** das Messer — agudo
- **NEW:** das Messer — cuchillo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «das Messer» significa «el cuchillo»; «agudo» corresponde a «scharf» en otro registro.

---

## #454 ES-KURSS-LESSONS-LV2-0158 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** ein Messer
- **CURRENT:** ein Messer — contundente
- **NEW:** ein Messer — un cuchillo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ein Messer» significa «un cuchillo», no «contundente».

---

## #455 ES-KURSS-LESSONS-LV2-0159 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE:** scharf
- **CURRENT:** scharf — luego
- **NEW:** scharf — agudo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En este contexto, «scharf» significa «agudo» o «afilado», no «luego».

---

## #456 ES-KURSS-LESSONS-LV2-0160 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- **DE:** stumpf (štumpf)
- **CURRENT:** stumpf (štumpf) — afuera
- **NEW:** stumpf (štumpf) — contundente
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «stumpf» significa «contundente» o «romo», no «afuera».

---

## #457 ES-KURSS-LESSONS-LV2-0161 [FALSE_POSITIVE]

- **Lesson:** lesson4
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** dann
- **CURRENT:** dann — sal, ve out
- **NEW:** dann — sal, ve out
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #458 ES-KURSS-LESSONS-LV2-0162 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE:** hinaus
- **CURRENT:** hinaus — en, -er, -el no están acentuadas, por lo que la e en estos extremos es apenas audible: kommen, nehmen, der Federhalter.
- **NEW:** hinaus — Las terminaciones -en, -er y -el no llevan acento, por lo que la e en estas terminaciones apenas se oye: kommen, nehmen, der Federhalter.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Estos extremos» es una traducción poco natural; conviene hablar de terminaciones. También falta concordancia clara con el sustantivo implícito «terminaciones».

---

## #459 ES-KURSS-LESSONS-LV2-0167 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE:** Nominativ: der Federhalter, die Feder, das Messer.
- **CURRENT:** Nominativ: der Federhalter, die Feder, das Messer.
- **NEW:** Nominativo: der Federhalter, die Feder, das Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #460 ES-KURSS-LESSONS-LV2-0168 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE:** Akkusativ: den Federhalter, die Feder, das Messer.
- **CURRENT:** Akkusativ: den Federhalter, die Feder, das Messer.
- **NEW:** Acusativo: den Federhalter, die Feder, das Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #461 ES-KURSS-LESSONS-LV2-0169 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
- **DE:** Nominativ: ein Federhalter, eine Feder, ein Messer.
- **CURRENT:** Nominativ: ein Federhalter, eine Feder, ein Messer.
- **NEW:** Nominativo: ein Federhalter, eine Feder, ein Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #462 ES-KURSS-LESSONS-LV2-0170 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
- **DE:** Akkusativ: einen Federhalter, eine Feder, ein Messer.
- **CURRENT:** Akkusativ: einen Federhalter, eine Feder, ein Messer.
- **NEW:** Acusativo: einen Federhalter, eine Feder, ein Messer.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #463 ES-KURSS-LESSONS-LV2-0172 [LABOT]

- **Lesson:** lesson4
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- **DE:** —
- **CURRENT:** En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda.
- **NEW:** En los géneros femenino y neutro, el acusativo es igual que el nominativo. Solo cambia el masculino.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Los hombres» y «cambian de ronda» son traducciones erróneas y alteran el sentido gramatical; debe hablarse del género masculino y del cambio de forma.

---

## #464 ES-KURSS-LESSONS-LV2-0173 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
- **DE:** —
- **CURRENT:** Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número.
- **NEW:** Si un adjetivo forma parte del predicado de una oración, no cambia según el caso ni el número.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La formulación actual es tautológica y «en orden» no expresa el concepto gramatical previsto. La redacción propuesta es clara y natural.

---

## #465 ES-KURSS-LESSONS-LV2-0174 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[2]`
- **DE:** —
- **CURRENT:** Si nicht niega un adjetivo, se coloca delante de la palabra negativa.
- **NEW:** Si nicht niega un adjetivo, se coloca delante del adjetivo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «La palabra negativa» es impreciso y parece indicar que nicht va delante de una palabra que ya es negativa; debe mencionarse directamente el adjetivo negado.

---

## #466 ES-KURSS-LESSONS-LV2-0175 [LABOT]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Acusativo
- **NEW:** 1. Acusativo
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta separación entre el número y el título; la presentación resulta difícil de leer.

---

## #467 ES-KURSS-LESSONS-LV2-0176 [LABOT]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2nehmen
- **NEW:** 2. nehmen
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta separación entre el número y el término alemán.

---

## #468 ES-KURSS-LESSONS-LV2-0177 [LABOT]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
- **DE:** —
- **CURRENT:** 3Pronombres
- **NEW:** 3. Pronombres
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta separación entre el número y el título.

---

## #469 ES-KURSS-LESSONS-LV2-0178 [LABOT]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** 4Verbos separables
- **NEW:** 4. Verbos separables
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta separación entre el número y el título.

---

## #470 ES-KURSS-LESSONS-LV2-0179 [LABOT]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **DE:** —
- **CURRENT:** 5Adjetivos
- **NEW:** 5. Adjetivos
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta separación entre el número y el título.

---

## #471 ES-KURSS-LESSONS-LV2-0180 [LABOT]

- **Lesson:** lesson4
- **Category:** STRUCTURE · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[5]`
- **DE:** —
- **CURRENT:** 6Negación con nicht
- **NEW:** 6. Negación con nicht
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta separación entre el número y el título; «nicht» puede conservarse como término gramatical alemán.

---

## #472 ES-KURSS-LESSONS-LV2-0182 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson4TrainingCardsEs[0].front`
- **DE:** Das Mädchen nimmt einen Federhalter.
- **CURRENT:** La niña toma un eje de plumas.
- **NEW:** La niña toma un portaplumas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Eje de plumas» no corresponde a «Federhalter», que significa «portaplumas» o «portalápices» según el contexto.

---

## #473 ES-KURSS-LESSONS-LV2-0183 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson4TrainingCardsEs[1].front`
- **DE:** Der Federhalter ist nicht weiß, er ist schwarz.
- **CURRENT:** La pluma no es blanca, es negra.
- **NEW:** El portaplumas no es blanco, es negro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán se refiere a un «Federhalter», no a una pluma; también deben concordar el género y el adjetivo.

---

## #474 ES-KURSS-LESSONS-LV2-0184 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson4TrainingCardsEs[3].front`
- **DE:** Wie ist die Feder?
- **CURRENT:** ¿Qué es una pluma?
- **NEW:** ¿Cómo es la pluma?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wie ist die Feder?» pregunta por las características de la pluma («cómo es»), no por su identidad o definición.

---

## #475 ES-KURSS-LESSONS-LV2-0185 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson4TrainingCardsEs[5].front`
- **DE:** Nimmt er ein Messer?
- **CURRENT:** ¿Lleva un cuchillo?
- **NEW:** ¿Toma un cuchillo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Nimmt» significa «toma», no «lleva» en este contexto.

---

## #476 ES-KURSS-LESSONS-LV2-0186 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson4TrainingCardsEs[9].front`
- **DE:** Nein, es ist scharf.
- **CURRENT:** No, es agudo.
- **NEW:** No, está afilado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Para un cuchillo, «afilado» es la expresión natural en español; «agudo» no es la opción idiomática habitual en este contexto.

---

## #477 ES-KURSS-LESSONS-LV2-0187 [LABOT]

- **Lesson:** lesson4
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson4TrainingCardsEs[13].front`
- **DE:** Olga zeigt ein Buch.
- **CURRENT:** Olga muestra el libro.
- **NEW:** Olga muestra un libro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa el artículo indefinido («ein Buch»), mientras que la traducción usa el definido («el libro»).

---

## #478 ES-KURSS-LESSONS-LV2-0188 [LABOT]

- **Lesson:** lesson4
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson4TrainingCardsEs[14].front`
- **DE:** Wie ist das Buch?
- **CURRENT:** cual es el libro
- **NEW:** ¿Cómo es el libro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Faltan los signos de interrogación y la tilde de «cuál», pero además «cuál» no traduce «Wie ist»; la pregunta debe ser «¿Cómo es el libro?».

---

## #479 ES-KURSS-LESSONS-LV2-0190 [LABOT]

- **Lesson:** lesson5
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE:** loben
- **CURRENT:** loben — elogio
- **NEW:** loben — elogiar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Loben» es un verbo («elogiar»), mientras que «elogio» es un sustantivo.

---

## #480 ES-KURSS-LESSONS-LV2-0191 [FALSE_POSITIVE]

- **Lesson:** lesson5
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** tadeln
- **CURRENT:** tadeln — pelt
- **NEW:** tadeln — pelt
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #481 ES-KURSS-LESSONS-LV2-0192 [LABOT]

- **Lesson:** lesson5
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
- **DE:** oder (ōder)
- **CURRENT:** oder (ōder) — or
- **NEW:** oder (ōder) — o
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** «or» es inglés; la traducción española de «oder» es «o».

---

## #482 ES-KURSS-LESSONS-LV2-0200 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- **DE:** —
- **CURRENT:** En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?.
- **NEW:** En español, el nominativo responde a la pregunta «¿quién?» y el acusativo responde a la pregunta «¿qué?»
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Hay un punto incorrecto después del signo de cierre de interrogación. También conviene delimitar las preguntas como citas dentro de la oración.

---

## #483 ES-KURSS-LESSONS-LV2-0201 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_TERMINOLOGY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **DE:** —
- **CURRENT:** finalización -in
- **NEW:** Sufijo -in
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #484 ES-KURSS-LESSONS-LV2-0202 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[5]`
- **DE:** —
- **CURRENT:** Lugar del verbo
- **NEW:** Posición del verbo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Posición del verbo» es la formulación más natural en español para referirse a su ubicación en la oración.

---

## #485 ES-KURSS-LESSONS-LV2-0203 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson5TrainingCardsEs[0].front`
- **DE:** Wen liebt der Vater?
- **CURRENT:** ¿Qué ama el padre?
- **NEW:** ¿A quién ama el padre?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «Wen» pregunta por una persona en acusativo, no por una cosa; en español corresponde «a quién».

---

## #486 ES-KURSS-LESSONS-LV2-0204 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson5TrainingCardsEs[1].front`
- **DE:** Wen lobt die Lehrerin?
- **CURRENT:** ¿Qué elogia el maestro?
- **NEW:** ¿A quién elogia la maestra?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wen» significa «a quién», no «qué», y «die Lehrerin» es «la maestra», no «el maestro».

---

## #487 ES-KURSS-LESSONS-LV2-0205 [LABOT]

- **Lesson:** lesson5
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson5TrainingCardsEs[2].front`
- **DE:** Was nimmst du?
- **CURRENT:** que tomas
- **NEW:** ¿Qué tomas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El texto pretende ser una pregunta, pero carece de signos de interrogación y de mayúscula inicial.

---

## #488 ES-KURSS-LESSONS-LV2-0206 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson5TrainingCardsEs[4].front`
- **DE:** Wen tadelt der Lehrer?
- **CURRENT:** ¿Qué gana un maestro?
- **NEW:** ¿A quién reprende el maestro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La frase no corresponde al alemán «Wen tadelt der Lehrer?», que pregunta a quién reprende el maestro.

---

## #489 ES-KURSS-LESSONS-LV2-0207 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson5TrainingCardsEs[10].front`
- **DE:** Das Mädchen nimmt den Federhalter, die Feder und das Messer.
- **CURRENT:** La niña toma una pluma, una pluma y un cuchillo.
- **NEW:** La niña toma el portaplumas, la pluma y el cuchillo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán distingue «Federhalter» (portaplumas) de «Feder» (pluma), pero el español repite «pluma» y pierde esa distinción léxica.

---

## #490 ES-KURSS-LESSONS-LV2-0208 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson5TrainingCardsEs[11].front`
- **DE:** Sie legt das Messer und den Federhalter hin.
- **CURRENT:** Ella deja el cuchillo y la pluma.
- **NEW:** Ella deja el cuchillo y el portaplumas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Federhalter» significa «portaplumas», no «pluma»; la traducción actual cambia el objeto mencionado.

---

## #491 ES-KURSS-LESSONS-LV2-0209 [LABOT]

- **Lesson:** lesson5
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson5TrainingCardsEs[14].front`
- **DE:** Das Kind ist artig.
- **CURRENT:** El niño es hablador.
- **NEW:** El niño es bien educado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «artig» significa «bien educado» o «obediente», no «hablador».

---

## #492 ES-KURSS-LESSONS-LV2-0210 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE:** liegt
- **CURRENT:** liegt — es, es, mentiras
- **NEW:** liegt — está / se encuentra
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La glosa española está corrompida: mezcla repeticiones de «es» con «mentiras» y no traduce correctamente el verbo alemán «liegt» en este contexto.

---

## #493 ES-KURSS-LESSONS-LV2-0211 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** einige (einige)
- **CURRENT:** einige (einige) — some
- **NEW:** einige (einige) — some
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #494 ES-KURSS-LESSONS-LV2-0212 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** hinlegen
- **CURRENT:** hinlegen — poner abajo
- **NEW:** hinlegen — poner algo tumbado / dejar algo tumbado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Poner abajo» es una traducción literal poco natural y no expresa bien el sentido de «hinlegen», que consiste en colocar o dejar algo en posición horizontal.

---

## #495 ES-KURSS-LESSONS-LV2-0213 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** aufmachen
- **CURRENT:** aufmachen — desatar
- **NEW:** aufmachen — abrir
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** aufmachen significa «abrir», no «desatar».

---

## #496 ES-KURSS-LESSONS-LV2-0214 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** er macht auf
- **CURRENT:** er macht auf — desata
- **NEW:** er macht auf — abre
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** er macht auf significa «abre»; «desata» no corresponde al verbo alemán.

---

## #497 ES-KURSS-LESSONS-LV2-0215 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** anspitzen (anšpicen)
- **CURRENT:** anspitzen (anšpicen) — escupir
- **NEW:** anspitzen (anšpicen) — sacar punta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** anspitzen significa «sacar punta» o «afilar», no «escupir».

---

## #498 ES-KURSS-LESSONS-LV2-0216 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** er spitzt an
- **CURRENT:** er spitzt an — escupe
- **NEW:** er spitzt an — saca punta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** er spitzt an significa «saca punta» o «afila», no «escupe».

---

## #499 ES-KURSS-LESSONS-LV2-0217 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[20]`
- **DE:** der Hammer
- **CURRENT:** der Hammer — mazo
- **NEW:** der Hammer — martillo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción general de der Hammer es «martillo»; «mazo» designa una herramienta más específica.

---

## #500 ES-KURSS-LESSONS-LV2-0218 [LABOT]

- **Lesson:** lesson6
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[21]`
- **DE:** die Hämmer
- **CURRENT:** die Hämmer — mazo
- **NEW:** die Hämmer — martillos
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El plural alemán requiere la traducción «martillos»; además, «mazo» no es la traducción general de Hammer.

---

## #501 ES-KURSS-LESSONS-LV2-0219 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[25]`
- **DE:** der Schlitten
- **CURRENT:** der Schlitten — trineo, trineo
- **NEW:** der Schlitten — trineo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción «trineo» aparece duplicada.

---

## #502 ES-KURSS-LESSONS-LV2-0220 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[28]`
- **DE:** wie sind die Dinge?
- **CURRENT:** wie sind die Dinge? — ¿Cuáles son las cosas?
- **NEW:** wie sind die Dinge? — ¿Cómo están las cosas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La pregunta alemana se refiere al estado o situación de las cosas («¿Cómo están las cosas?»), no a identificar cuáles son.

---

## #503 ES-KURSS-LESSONS-LV2-0221 [LABOT]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[29]`
- **DE:** voll (fōl)
- **CURRENT:** voll (fōl) — full
- **NEW:** voll (fōl) — lleno
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** «full» es un resto de inglés; el texto visible debe estar en español.

---

## #504 ES-KURSS-LESSONS-LV2-0223 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_GRAMMAR · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[35]`
- **DE:** wieviel Nadeln
- **CURRENT:** wieviel Nadeln — cuántos agujas
- **NEW:** wieviel Nadeln — cuántas agujas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Agujas es un sustantivo femenino plural, por lo que el interrogativo debe concordar como «cuántas».

---

## #505 ES-KURSS-LESSONS-LV2-0227 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → curso-ejemplo[0]`
- **DE:** A doubled eu se pronuncia como oi: neun (noin).
- **CURRENT:** A doubled eu se pronuncia como oi: neun (noin).
- **NEW:** A doubled eu se pronuncia como oi: neun (noin).
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #506 ES-KURSS-LESSONS-LV2-0240 [FALSE_POSITIVE]

- **Lesson:** lesson6
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[12]`
- **DE:** Der Wagen
- **CURRENT:** Der Wagen — die Nadeln; morir Feder - morir Federn.
- **NEW:** Der Wagen — die Nadeln; morir Feder - morir Federn.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #507 ES-KURSS-LESSONS-LV2-0244 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[2].front`
- **DE:** Er zeichnet einen Eimer.
- **CURRENT:** Saca un balde.
- **NEW:** Dibuja un balde.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán indica que el personaje dibuja un cubo, no que lo saque.

---

## #508 ES-KURSS-LESSONS-LV2-0245 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[3].front`
- **DE:** Wer zeichnet einen Wagen?
- **CURRENT:** ¿Quién tira el carro?
- **NEW:** ¿Quién dibuja un carro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «zeichnet» significa «dibuja», mientras que «tira» cambia el significado a «arrastra» o «lanza».

---

## #509 ES-KURSS-LESSONS-LV2-0246 [LABOT]

- **Lesson:** lesson6
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[7].front`
- **DE:** Wieviel Teller?
- **CURRENT:** ¿Cuantos platos?
- **NEW:** ¿Cuántos platos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Cuántos» lleva tilde en esta pregunta.

---

## #510 ES-KURSS-LESSONS-LV2-0247 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[9].front`
- **DE:** Ich lege zwei Nadeln hin.
- **CURRENT:** Dejé dos agujas.
- **NEW:** Coloco dos agujas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán está en presente y expresa colocar algo, no dejarlo en pasado.

---

## #511 ES-KURSS-LESSONS-LV2-0248 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[11].front`
- **DE:** Das ist ein Deckel.
- **CURRENT:** Es una funda.
- **NEW:** Es una tapa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Deckel» significa «tapa», no «funda».

---

## #512 ES-KURSS-LESSONS-LV2-0249 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[12].front`
- **DE:** Das sind Deckel.
- **CURRENT:** Estas son las portadas.
- **NEW:** Estas son las tapas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El plural alemán «Deckel» corresponde a «tapas», no a «portadas».

---

## #513 ES-KURSS-LESSONS-LV2-0250 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[16].front`
- **DE:** Der Lehrer nimmt ein Messer und spitzt den Bleistift an.
- **CURRENT:** La maestra toma un cuchillo y afila un lápiz.
- **NEW:** El maestro toma un cuchillo y afila un lápiz.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa «der Lehrer», masculino; «la maestra» no coincide con el contexto alemán.

---

## #514 ES-KURSS-LESSONS-LV2-0251 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[18].front`
- **DE:** Das ist ein Federhalter.
- **CURRENT:** Está emplumado.
- **NEW:** Es un portaplumas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Federhalter» es un portaplumas, no algo que esté emplumado.

---

## #515 ES-KURSS-LESSONS-LV2-0252 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[19].front`
- **DE:** Wie ist der Federhalter?
- **CURRENT:** ¿Qué es emplumado?
- **NEW:** ¿Cómo es el portaplumas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La frase española no corresponde al significado de «Wie ist der Federhalter?». «Emplumado» significa con plumas, mientras que «Federhalter» es «portaplumas».

---

## #516 ES-KURSS-LESSONS-LV2-0253 [LABOT]

- **Lesson:** lesson6
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson6TrainingCardsEs[20].front`
- **DE:** Der Federhalter ist schwarz.
- **CURRENT:** La pluma es negra.
- **NEW:** El portaplumas es negro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Federhalter» significa «portaplumas», no «pluma».

---

## #517 ES-KURSS-LESSONS-LV2-0254 [LABOT]

- **Lesson:** lesson7
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[0]:Diálogos/oraciones → course-example[0]`
- **DE:** Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.
- **CURRENT:** Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.
- **NEW:** Hans, singe ein Lied! Was tust du? Ich singe ein Lied.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El ejemplo alemán contiene una frase en español. Los ejemplos de esta sección deben permanecer íntegramente en alemán.

---

## #518 ES-KURSS-LESSONS-LV2-0255 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE:** singe
- **CURRENT:** singe — canción
- **NEW:** singe — canta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «singe» es la forma imperativa de «singen» para la segunda persona singular: «canta», no «canción».

---

## #519 ES-KURSS-LESSONS-LV2-0256 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE:** singt
- **CURRENT:** singt — Tú
- **NEW:** singt — cantad (vosotros)
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En este contexto, «singt» es el imperativo plural informal y corresponde a «cantad», no a «Tú».

---

## #520 ES-KURSS-LESSONS-LV2-0257 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE:** singen Sie
- **CURRENT:** singen Sie — conde
- **NEW:** singen Sie — cante usted
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «singen Sie» es el imperativo formal de «singen»: «cante usted»; «conde» no tiene relación semántica.

---

## #521 ES-KURSS-LESSONS-LV2-0259 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE:** Sie
- **CURRENT:** Sie — molinero
- **NEW:** Sie — usted (forma formal)
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Sie» es el pronombre formal «usted» o «ustedes», según el contexto; «molinero» es una traducción incorrecta.

---

## #522 ES-KURSS-LESSONS-LV2-0260 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE:** zählen
- **CURRENT:** zählen — abierto
- **NEW:** zählen — contar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «zählen» significa «contar», mientras que «abierto» corresponde a otro significado.

---

## #523 ES-KURSS-LESSONS-LV2-0261 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE:** das Fräulein (froilein)
- **CURRENT:** das Fräulein (froilein) — ventana
- **NEW:** das Fräulein (froilein) — la señorita
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «das Fräulein» significa «la señorita», no «ventana».

---

## #524 ES-KURSS-LESSONS-LV2-0262 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE:** der Müller
- **CURRENT:** der Müller — todos
- **NEW:** der Müller — Müller (apellido)
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En los ejemplos, «Müller» es un apellido. «Todos» no corresponde a este término.

---

## #525 ES-KURSS-LESSONS-LV2-0263 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE:** öffnen
- **CURRENT:** öffnen — espejo
- **NEW:** öffnen — abrir
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «öffnen» es el verbo «abrir», no «espejo».

---

## #526 ES-KURSS-LESSONS-LV2-0264 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
- **DE:** das Fenster (fenster)
- **CURRENT:** das Fenster (fenster) — trapo, fregona
- **NEW:** das Fenster (fenster) — la ventana
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «das Fenster» significa «la ventana»; «trapo, fregona» son traducciones incorrectas.

---

## #527 ES-KURSS-LESSONS-LV2-0265 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE:** alle
- **CURRENT:** alle — pala
- **NEW:** alle — todos/todas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «alle» significa «todos» o «todas» según el sustantivo, no «pala».

---

## #528 ES-KURSS-LESSONS-LV2-0267 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE:** der Lappen
- **CURRENT:** der Lappen — pala
- **NEW:** der Lappen — trapo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Der Lappen» significa «el trapo», no «la pala».

---

## #529 ES-KURSS-LESSONS-LV2-0268 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE:** der Spaten
- **CURRENT:** der Spaten — cuenco
- **NEW:** der Spaten — pala
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Der Spaten» significa «la pala», no «el cuenco».

---

## #530 ES-KURSS-LESSONS-LV2-0269 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
- **DE:** der Besen
- **CURRENT:** der Besen — habitación
- **NEW:** der Besen — escoba
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Der Besen» significa «la escoba», no «la habitación».

---

## #531 ES-KURSS-LESSONS-LV2-0270 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE:** die Schaufel
- **CURRENT:** die Schaufel — orilla
- **NEW:** die Schaufel — pala
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Die Schaufel» significa «la pala», no «la orilla».

---

## #532 ES-KURSS-LESSONS-LV2-0279 [LABOT]

- **Lesson:** lesson7
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
- **DE:** —
- **CURRENT:** 1Expresión de comandos
- **NEW:** 1. Imperativo
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta un separador entre el número y el título; además, «imperativo» es el término gramatical más preciso.

---

## #533 ES-KURSS-LESSONS-LV2-0280 [LABOT]

- **Lesson:** lesson7
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
- **DE:** —
- **CURRENT:** 2Comando plural
- **NEW:** 2. Imperativo plural
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta un separador entre el número y el título, y «imperativo plural» es una denominación gramatical más natural que «comando plural».

---

## #534 ES-KURSS-LESSONS-LV2-0281 [LABOT]

- **Lesson:** lesson7
- **Category:** STRUCTURE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
- **DE:** —
- **CURRENT:** 4öffnen
- **NEW:** 4. öffnen
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Falta un separador entre el número y el ejemplo alemán. El término alemán debe conservarse.

---

## #535 ES-KURSS-LESSONS-LV2-0282 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `lesson7ExerciseCardsEs[2].lv`
- **DE:** loben
- **CURRENT:** elogio
- **NEW:** elogiar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «loben» es un infinitivo que significa «elogiar»; «elogio» es un sustantivo.

---

## #536 ES-KURSS-LESSONS-LV2-0283 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson7ExerciseCardsEs[5].lv`
- **DE:** zeigen
- **CURRENT:** espectáculo
- **NEW:** mostrar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Espectáculo» es un sustantivo y no corresponde al verbo alemán «zeigen», que significa «mostrar».

---

## #537 ES-KURSS-LESSONS-LV2-0284 [LABOT]

- **Lesson:** lesson7
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `lesson7ExerciseCardsEs[7].lv`
- **DE:** rechnen
- **CURRENT:** contar
- **NEW:** calcular
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Contar» corresponde normalmente a «zählen», mientras que el verbo alemán «rechnen» significa «calcular» o «hacer cuentas».

---

## #538 ES-KURSS-LESSONS-LV2-0286 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[10]`
- **DE:** setzt euch (zect oich)
- **CURRENT:** setzt euch (zect oich) — ¡siéntate!
- **NEW:** setzt euch (zect oich) — ¡sentaos!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán es un imperativo plural informal dirigido a varias personas, mientras que «¡siéntate!» es singular.

---

## #539 ES-KURSS-LESSONS-LV2-0287 [LABOT]

- **Lesson:** lesson8
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[7]`
- **DE:** En el imperativo singular de estos verbos, la e también cambia a i o ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **CURRENT:** En el imperativo singular de estos verbos, la e también cambia a i o ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **NEW:** En el imperativo singular de estos verbos, la e cambia a i o ie: Paul, sprich! Lies! En plural: Paul und Hans, lest und sprecht!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La explicación se refiere al imperativo singular, pero después mezcla ejemplos del imperativo plural. Esto puede confundir al estudiante sobre qué formas presentan el cambio vocálico.

---

## #540 ES-KURSS-LESSONS-LV2-0288 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].description`
- **DE:** —
- **CURRENT:** Übung I - Usa la conjugación correcta. Übung II - cards de traducción.
- **NEW:** Ejercicio I: usa la conjugación correcta. Ejercicio II: tarjetas de traducción.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto contiene el término alemán «Übung» y el término inglés «cards» en una instrucción que debe estar íntegramente en español.

---

## #541 ES-KURSS-LESSONS-LV2-0289 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[18].lv`
- **DE:** Wen grüßt du?
- **CURRENT:** ¿Ko tu sveicini?
- **NEW:** ¿A quién saludas?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español. Además, no presenta la traducción española de la pregunta alemana.

---

## #542 ES-KURSS-LESSONS-LV2-0290 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[19].lv`
- **DE:** Ich grüße das Fräulein.
- **CURRENT:** Es sveicinu jaunkundzi.
- **NEW:** Es sveicinu jaunkundzi.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #543 ES-KURSS-LESSONS-LV2-0291 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[20].lv`
- **DE:** Öffnet alle Fenster!
- **CURRENT:** Atveriet visus logus!
- **NEW:** Atveriet visus logus!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #544 ES-KURSS-LESSONS-LV2-0292 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[22].lv`
- **DE:** Öffnest du das Fenster?
- **CURRENT:** Vai tu atver logu?
- **NEW:** Vai tu atver logu?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #545 ES-KURSS-LESSONS-LV2-0293 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[28].lv`
- **DE:** Wie spricht er?
- **CURRENT:** ¿Cómo habla?
- **NEW:** ¿Cómo habla él?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán especifica que se pregunta por un sujeto masculino («er»); la versión española omite esa referencia y puede interpretarse también como «usted».

---

## #546 ES-KURSS-LESSONS-LV2-0294 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[31].lv`
- **DE:** Die Schülerin liest laut und deutlich.
- **CURRENT:** El estudiante lee en voz alta y clara.
- **NEW:** La estudiante lee en voz alta y con claridad.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El contexto alemán usa un sujeto femenino («die Schülerin»), no «el estudiante». Además, «clara» no expresa naturalmente el adverbio «deutlich» en esta coordinación.

---

## #547 ES-KURSS-LESSONS-LV2-0295 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[32].lv`
- **DE:** Lies gut!
- **CURRENT:** Lasi labi!
- **NEW:** Lasi labi!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #548 ES-KURSS-LESSONS-LV2-0296 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[34].lv`
- **DE:** Lest gut!
- **CURRENT:** ¡Lasiet labí!
- **NEW:** ¡Leed bien!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español. El alemán corresponde a un imperativo plural o formal.

---

## #549 ES-KURSS-LESSONS-LV2-0298 [LABOT]

- **Lesson:** lesson8
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[37].lv`
- **DE:** Herr Lehrer, bitte, setzen Sie sich!
- **CURRENT:** Señor Maestro, ¡siéntese!
- **NEW:** Señor profesor, ¡siéntese, por favor!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Señor Maestro» no es una forma natural de dirigirse a un docente en español. Además, se omite el matiz de cortesía de «bitte».

---

## #550 ES-KURSS-LESSONS-LV2-0299 [LABOT]

- **Lesson:** lesson8
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[0].lv`
- **DE:** Grüße den Lehrer und die Lehrerin!
- **CURRENT:** Saludar al maestro y a la maestra.
- **NEW:** ¡Saluda al profesor y a la profesora!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán es una orden en imperativo («Grüße»), mientras que el infinitivo actual no conserva esa función. «Profesor/profesora» es más natural en este contexto educativo.

---

## #551 ES-KURSS-LESSONS-LV2-0300 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[1].lv`
- **DE:** Öffnet alle Fenster!
- **CURRENT:** Atveriet visus logus!
- **NEW:** Atveriet visus logus!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #552 ES-KURSS-LESSONS-LV2-0301 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[9].lv`
- **DE:** Wie spricht er?
- **CURRENT:** ¿Cómo habla?
- **NEW:** ¿Cómo habla él?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán especifica que se pregunta por un sujeto masculino («er»); la versión española omite esa referencia y puede interpretarse también como «usted».

---

## #553 ES-KURSS-LESSONS-LV2-0302 [LABOT]

- **Lesson:** lesson8
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[12].lv`
- **DE:** Die Schülerin liest laut und deutlich.
- **CURRENT:** El estudiante lee en voz alta y clara.
- **NEW:** La estudiante lee en voz alta y con claridad.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El contexto alemán usa un sujeto femenino («die Schülerin»), no «el estudiante». Además, «clara» no expresa naturalmente el adverbio «deutlich» en esta coordinación.

---

## #554 ES-KURSS-LESSONS-LV2-0303 [FALSE_POSITIVE]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[13].lv`
- **DE:** Lies gut!
- **CURRENT:** Lasi labi!
- **NEW:** Lasi labi!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #555 ES-KURSS-LESSONS-LV2-0304 [LABOT]

- **Lesson:** lesson8
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[15].lv`
- **DE:** Lest gut!
- **CURRENT:** ¡Lasiet labí!
- **NEW:** ¡Leed bien!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español. El alemán corresponde a un imperativo plural o formal.

---

## #556 ES-KURSS-LESSONS-LV2-0306 [LABOT]

- **Lesson:** lesson8
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[18].lv`
- **DE:** Herr Lehrer, bitte, setzen Sie sich!
- **CURRENT:** Señor Maestro, ¡siéntese!
- **NEW:** Señor profesor, ¡siéntese, por favor!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Señor Maestro» no es una forma natural de dirigirse a un docente en español. Además, se omite el matiz de cortesía de «bitte».

---

## #557 ES-KURSS-LESSONS-LV2-0308 [LABOT]

- **Lesson:** lesson8
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa la forma correcta y forma el plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Poner la conjugación» y «hazlo en plural» resultan poco naturales y ambiguos en una instrucción de ejercicio.

---

## #558 ES-KURSS-LESSONS-LV2-0310 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.intro`
- **DE:** —
- **CURRENT:** Novena conferencia: plural de sustantivos, pronombres demostrativos dieser/jener, ejercicios y traducción.
- **NEW:** Novena lección: plural de sustantivos, pronombres demostrativos dieser/jener, ejercicios y traducción.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Conferencia» significa lecture/conference, no una unidad de un curso. El contexto identifica este contenido como la novena lección.

---

## #559 ES-KURSS-LESSONS-LV2-0311 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[9]`
- **DE:** sitzen (zicen)
- **CURRENT:** sitzen (zicen) — sentarse
- **NEW:** sitzen (zicen) — estar sentado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El verbo alemán sitzen significa «estar sentado»; «sentarse» corresponde normalmente a sich setzen.

---

## #560 ES-KURSS-LESSONS-LV2-0313 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[14]`
- **DE:** die Briefe
- **CURRENT:** die Briefe — letras
- **NEW:** die Briefe — cartas
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Briefe es el plural de Brief, «carta»; «letras» se traduciría como Buchstaben.

---

## #561 ES-KURSS-LESSONS-LV2-0315 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[3].heading`
- **DE:** —
- **CURRENT:** Artikulu nelieto
- **NEW:** Artikulu nelieto
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #562 ES-KURSS-LESSONS-LV2-0317 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[0].forms[0].task`
- **DE:** Ich nehme ein Heft.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #563 ES-KURSS-LESSONS-LV2-0318 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[0].forms[3].task`
- **DE:** Ich nehme Hefte.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #564 ES-KURSS-LESSONS-LV2-0319 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[1].forms[0].task`
- **DE:** Ich öffne das Heft.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #565 ES-KURSS-LESSONS-LV2-0320 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[1].forms[3].task`
- **DE:** Ich öffne die Hefte.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #566 ES-KURSS-LESSONS-LV2-0321 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[2].forms[0].task`
- **DE:** Ich nehme auch einen Bleistift.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #567 ES-KURSS-LESSONS-LV2-0322 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[2].forms[3].task`
- **DE:** Ich nehme auch Bleistifte.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #568 ES-KURSS-LESSONS-LV2-0323 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[3].forms[0].task`
- **DE:** Ich spitze den Bleistift an.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #569 ES-KURSS-LESSONS-LV2-0324 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[3].forms[3].task`
- **DE:** Ich spitze die Bleistifte an.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #570 ES-KURSS-LESSONS-LV2-0325 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[4].forms[0].task`
- **DE:** Ich setze mich und schreibe langsam.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #571 ES-KURSS-LESSONS-LV2-0326 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[4].forms[3].task`
- **DE:** Ich setze mich und schreibe langsam.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #572 ES-KURSS-LESSONS-LV2-0327 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[5].forms[0].task`
- **DE:** Ich schreibe schnell.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #573 ES-KURSS-LESSONS-LV2-0328 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[5].forms[3].task`
- **DE:** Ich schreibe schnell.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #574 ES-KURSS-LESSONS-LV2-0329 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[6].forms[0].task`
- **DE:** Ich mache das Heft zu.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #575 ES-KURSS-LESSONS-LV2-0330 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[6].forms[3].task`
- **DE:** Ich mache die Hefte zu.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #576 ES-KURSS-LESSONS-LV2-0331 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[7].forms[0].task`
- **DE:** Ich lege den Bleistift hin.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambie esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.

---

## #577 ES-KURSS-LESSONS-LV2-0332 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[7].forms[3].task`
- **DE:** Ich lege die Bleistifte hin.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #578 ES-KURSS-LESSONS-LV2-0333 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[8].forms[0].task`
- **DE:** Ich sitze ruhig.
- **CURRENT:** Cambia esta oración a 3ra persona del singular.
- **NEW:** Cambia esta oración a la tercera persona del singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La abreviatura «3ra» no es adecuada en este texto didáctico; debe escribirse «tercera».

---

## #579 ES-KURSS-LESSONS-LV2-0334 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[8].forms[3].task`
- **DE:** Ich sitze ruhig.
- **CURRENT:** Listo. El siguiente clic muestra la siguiente card.
- **NEW:** Listo. El siguiente clic muestra la siguiente card.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #580 ES-KURSS-LESSONS-LV2-0335 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[3].lv`
- **DE:** Was machen Sie?
- **CURRENT:** qué estás haciendo
- **NEW:** ¿Qué está haciendo usted?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa «Sie», tratamiento formal de segunda persona; «estás» corresponde al tratamiento informal de «tú».

---

## #581 ES-KURSS-LESSONS-LV2-0336 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[6].lv`
- **DE:** Herr Lehrer, setzen Sie sich und lesen Sie!
- **CURRENT:** ¡Señor Maestro, siéntese y lea!
- **NEW:** ¡Señor profesor, siéntese y lea!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Señor Maestro» resulta poco natural como tratamiento en español; «señor profesor» es la formulación habitual.

---

## #582 ES-KURSS-LESSONS-LV2-0337 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[10].lv`
- **DE:** Wie ist dieser Teller?
- **CURRENT:** ¿Qué es este plato?
- **NEW:** ¿Cómo es este plato?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wie ist» pregunta cómo es algo, no qué es; además, «Teller» significa «plato» en el sentido de vajilla, no una identificación del objeto.

---

## #583 ES-KURSS-LESSONS-LV2-0338 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[12].lv`
- **DE:** Sind die Briefe lang oder kurz?
- **CURRENT:** ¿Las letras son largas o cortas?
- **NEW:** ¿Las cartas son largas o cortas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Briefe» significa «cartas» en este contexto; «letras» sería «Buchstaben» en alemán.

---

## #584 ES-KURSS-LESSONS-LV2-0339 [LABOT]

- **Lesson:** lesson9
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[13].lv`
- **DE:** Anna, spitz diesen Bleistift an!
- **CURRENT:** ¡Anna, afila ese lápiz!
- **NEW:** ¡Anna, afila este lápiz!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El demostrativo alemán «diesen» corresponde a «este», no a «ese».

---

## #585 ES-KURSS-LESSONS-LV2-0340 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[14].lv`
- **DE:** Herr Lehrer, bitte spitzen Sie diesen Bleistift an!
- **CURRENT:** ¡Maestro, por favor afile este lápiz!
- **NEW:** ¡Profesor, por favor, afile este lápiz!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Maestro» como vocativo resulta menos natural en este contexto que «profesor»; también se recomienda la coma tras «por favor».

---

## #586 ES-KURSS-LESSONS-LV2-0341 [LABOT]

- **Lesson:** lesson9
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[15].lv`
- **DE:** Leg jenen Bleistift hin!
- **CURRENT:** ¡Deja ese lápiz!
- **NEW:** ¡Pon ese lápiz ahí!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Leg ... hin» indica colocar o poner el lápiz, mientras que «deja ese lápiz» suele significar no tocarlo o abandonarlo.

---

## #587 ES-KURSS-LESSONS-LV2-0342 [LABOT]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[16].lv`
- **DE:** Mach das Fenster zu!
- **CURRENT:** ¡Aiztaisi logu!
- **NEW:** ¡Cierra la ventana!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español, y no traduce el contenido alemán para el usuario.

---

## #588 ES-KURSS-LESSONS-LV2-0343 [FALSE_POSITIVE]

- **Lesson:** lesson9
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[17].lv`
- **DE:** Was macht das Mädchen endlich?
- **CURRENT:** Ko meitene beidzot dara?
- **NEW:** Ko meitene beidzot dara?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #589 ES-KURSS-LESSONS-LV2-0344 [LABOT]

- **Lesson:** lesson9
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa la conjugación correcta y pon la frase en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción didáctica.

---

## #590 ES-KURSS-LESSONS-LV2-0346 [LABOT]

- **Lesson:** lesson10
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.intro`
- **DE:** —
- **CURRENT:** Décima conferencia: sein, können, formas de mando, salud, edad y profesiones.
- **NEW:** Lección décima: sein, können, formas del imperativo, salud, edad y profesiones.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Conferencia» no corresponde al contexto de una lección y «formas de mando» es una traducción poco natural e imprecisa de las formas del imperativo.

---

## #591 ES-KURSS-LESSONS-LV2-0349 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[11]`
- **DE:** sei gesund
- **CURRENT:** sei gesund — esi vesels!
- **NEW:** sei gesund — esi vesels!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #592 ES-KURSS-LESSONS-LV2-0350 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[12]`
- **DE:** seid gesund
- **CURRENT:** seid gesund — esiet veseli!
- **NEW:** seid gesund — esiet veseli!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #593 ES-KURSS-LESSONS-LV2-0351 [LABOT]

- **Lesson:** lesson10
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[16]`
- **DE:** die Frau
- **CURRENT:** die Frau — mujer / esposa
- **NEW:** die Frau — mujer o esposa, según el contexto
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La barra combina dos significados distintos sin indicar que la elección depende del contexto.

---

## #594 ES-KURSS-LESSONS-LV2-0352 [LABOT]

- **Lesson:** lesson10
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[0].text`
- **DE:** —
- **CURRENT:** Verbo auxiliar sein - estar desordenado. Por tanto, hay que aprenderlo bien.
- **NEW:** El verbo auxiliar sein («ser/estar») es irregular. Por tanto, hay que aprenderlo bien.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Desordenado» no significa «irregular» en este contexto y además falta indicar el significado básico de sein como «ser/estar».

---

## #595 ES-KURSS-LESSONS-LV2-0353 [LABOT]

- **Lesson:** lesson10
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[3].text`
- **DE:** —
- **CURRENT:** Asimismo, el verbo auxiliar können (poder) tiene una declinación irregular.
- **NEW:** Asimismo, el verbo modal können («poder») tiene una conjugación irregular.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #596 ES-KURSS-LESSONS-LV2-0354 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[0].lv`
- **DE:** Bist du gesund?
- **CURRENT:** Vai tu esi vesels?
- **NEW:** Vai tu esi vesels?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #597 ES-KURSS-LESSONS-LV2-0355 [FALSE_POSITIVE]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[2].lv`
- **DE:** Ist Paul gesund?
- **CURRENT:** Vai Paul ir vasijas?
- **NEW:** Vai Paul ir vasijas?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #598 ES-KURSS-LESSONS-LV2-0356 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[9].lv`
- **DE:** Wie alt ist Adolf?
- **CURRENT:** ¿Cik vecs ir Adolfs?
- **NEW:** ¿Cuántos años tiene Adolf?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** La pregunta está en letón, no en español.

---

## #599 ES-KURSS-LESSONS-LV2-0357 [LABOT]

- **Lesson:** lesson10
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[11].lv`
- **DE:** Wer bist du?
- **CURRENT:** ¿Kas tu esi?
- **NEW:** ¿Quién eres?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** La pregunta está en letón, no en español.

---

## #600 ES-KURSS-LESSONS-LV2-0358 [LABOT]

- **Lesson:** lesson10
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa la conjugación correcta y transforma la frase al plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Pon la conjugación» y, especialmente, «hazlo» resultan poco naturales y vagos en una instrucción didáctica.

---

## #601 ES-KURSS-LESSONS-LV2-0361 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[0]`
- **DE:** Ich habe einen Bruder.
- **CURRENT:** Ich habe einen Bruder.
- **NEW:** Ich habe einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #602 ES-KURSS-LESSONS-LV2-0362 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[1]`
- **DE:** Du hast einen Bruder.
- **CURRENT:** Du hast einen Bruder.
- **NEW:** Du hast einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #603 ES-KURSS-LESSONS-LV2-0363 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[2]`
- **DE:** Er hat einen Bruder.
- **CURRENT:** Er hat einen Bruder.
- **NEW:** Er hat einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #604 ES-KURSS-LESSONS-LV2-0364 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[3]`
- **DE:** Sie hat einen Bruder.
- **CURRENT:** Sie hat einen Bruder.
- **NEW:** Sie hat einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #605 ES-KURSS-LESSONS-LV2-0365 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[4]`
- **DE:** Es hat einen Bruder.
- **CURRENT:** Es hat einen Bruder.
- **NEW:** Es hat einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #606 ES-KURSS-LESSONS-LV2-0366 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[5]`
- **DE:** Wir haben einen Bruder.
- **CURRENT:** Wir haben einen Bruder.
- **NEW:** Wir haben einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #607 ES-KURSS-LESSONS-LV2-0367 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[6]`
- **DE:** Ihr habt einen Bruder.
- **CURRENT:** Ihr habt einen Bruder.
- **NEW:** Ihr habt einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #608 ES-KURSS-LESSONS-LV2-0368 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[7]`
- **DE:** Sie haben einen Bruder.
- **CURRENT:** Sie haben einen Bruder.
- **NEW:** Sie haben einen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #609 ES-KURSS-LESSONS-LV2-0369 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[8]`
- **DE:** Ich habe keinen Bruder.
- **CURRENT:** Ich habe keinen Bruder.
- **NEW:** Ich habe keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #610 ES-KURSS-LESSONS-LV2-0370 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[9]`
- **DE:** Du hast keinen Bruder.
- **CURRENT:** Du hast keinen Bruder.
- **NEW:** Du hast keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #611 ES-KURSS-LESSONS-LV2-0371 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[10]`
- **DE:** Er hat keinen Bruder.
- **CURRENT:** Er hat keinen Bruder.
- **NEW:** Er hat keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #612 ES-KURSS-LESSONS-LV2-0372 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[11]`
- **DE:** Sie hat keinen Bruder.
- **CURRENT:** Sie hat keinen Bruder.
- **NEW:** Sie hat keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #613 ES-KURSS-LESSONS-LV2-0373 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[12]`
- **DE:** Es hat keinen Bruder.
- **CURRENT:** Es hat keinen Bruder.
- **NEW:** Es hat keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #614 ES-KURSS-LESSONS-LV2-0374 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[13]`
- **DE:** Wir haben keinen Bruder.
- **CURRENT:** Wir haben keinen Bruder.
- **NEW:** Wir haben keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #615 ES-KURSS-LESSONS-LV2-0375 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[14]`
- **DE:** Ihr habt keinen Bruder.
- **CURRENT:** Ihr habt keinen Bruder.
- **NEW:** Ihr habt keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #616 ES-KURSS-LESSONS-LV2-0376 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[15]`
- **DE:** Sie haben keinen Bruder.
- **CURRENT:** Sie haben keinen Bruder.
- **NEW:** Sie haben keinen Bruder.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #617 ES-KURSS-LESSONS-LV2-0377 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[16]`
- **DE:** Ich habe ein Zimmer.
- **CURRENT:** Ich habe ein Zimmer.
- **NEW:** Ich habe ein Zimmer.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #618 ES-KURSS-LESSONS-LV2-0378 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[17]`
- **DE:** Das Zimmer ist nicht groß, aber es ist hell und warm.
- **CURRENT:** Das Zimmer ist nicht groß, aber es ist hell und warm.
- **NEW:** Das Zimmer ist nicht groß, aber es ist hell und warm.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #619 ES-KURSS-LESSONS-LV2-0379 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[18]`
- **DE:** Das Zimmer hat ein Fenster.
- **CURRENT:** Das Zimmer hat ein Fenster.
- **NEW:** Das Zimmer hat ein Fenster.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #620 ES-KURSS-LESSONS-LV2-0380 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[19]`
- **DE:** Das Fenster ist breit.
- **CURRENT:** Das Fenster ist breit.
- **NEW:** Das Fenster ist breit.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #621 ES-KURSS-LESSONS-LV2-0381 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[20]`
- **DE:** Du hast einen Schreibtisch.
- **CURRENT:** Du hast einen Schreibtisch.
- **NEW:** Du hast einen Schreibtisch.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #622 ES-KURSS-LESSONS-LV2-0382 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[21]`
- **DE:** Da liegen drei Bücher.
- **CURRENT:** Da liegen drei Bücher.
- **NEW:** Da liegen drei Bücher.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #623 ES-KURSS-LESSONS-LV2-0383 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[22]`
- **DE:** Anna hat einen Federhalter, eine Feder und einen Bleistift.
- **CURRENT:** Anna hat einen Federhalter, eine Feder und einen Bleistift.
- **NEW:** Anna hat einen Federhalter, eine Feder und einen Bleistift.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #624 ES-KURSS-LESSONS-LV2-0384 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[23]`
- **DE:** Franz, schreibst du auch?
- **CURRENT:** Anna schreibt und fragt: „Franz, schreibst du auch?“
- **NEW:** Anna escribe y pregunta: «Franz, ¿tú también escribes?»
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo visible para el usuario conserva el alemán en lugar de la traducción al español.

---

## #625 ES-KURSS-LESSONS-LV2-0385 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[24]`
- **DE:** Ich kann nicht schreiben. Ich habe kein Heft, keine Feder und keinen Bleistift.
- **CURRENT:** Franz antwortet: „Ich kann nicht schreiben. Ich habe kein Heft, keine Feder und keinen Bleistift.“
- **NEW:** Franz responde: «No sé escribir. No tengo ningún cuaderno, ninguna pluma ni ningún lápiz».
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo visible para el usuario conserva el alemán en lugar de la traducción al español.

---

## #626 ES-KURSS-LESSONS-LV2-0386 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[25]`
- **DE:** Nimm dieses Heft und diesen Bleistift. Wir arbeiten zusammen.
- **CURRENT:** Anna sagt: „Nimm dieses Heft und diesen Bleistift. Wir arbeiten zusammen.“
- **NEW:** Anna dice: «Coge este cuaderno y este lápiz. Trabajamos juntos».
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El campo visible para el usuario conserva el alemán en lugar de la traducción al español.

---

## #627 ES-KURSS-LESSONS-LV2-0387 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[26]`
- **DE:** Anna und Franz arbeiten oft zusammen.
- **CURRENT:** Anna und Franz arbeiten oft zusammen.
- **NEW:** Anna und Franz arbeiten oft zusammen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #628 ES-KURSS-LESSONS-LV2-0388 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[27]`
- **DE:** Sie sind Freunde.
- **CURRENT:** Sie sind Freunde.
- **NEW:** Sie sind Freunde.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #629 ES-KURSS-LESSONS-LV2-0389 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[28]`
- **DE:** Was hast du?
- **CURRENT:** Was hast du?
- **NEW:** Was hast du?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #630 ES-KURSS-LESSONS-LV2-0390 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[29]`
- **DE:** Ich habe einen Schrank, einen Tisch und zwei Stühle.
- **CURRENT:** Ich habe einen Schrank, einen Tisch und zwei Stühle.
- **NEW:** Ich habe einen Schrank, einen Tisch und zwei Stühle.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #631 ES-KURSS-LESSONS-LV2-0391 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[30]`
- **DE:** Was habt ihr?
- **CURRENT:** Was habt ihr?
- **NEW:** Was habt ihr?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #632 ES-KURSS-LESSONS-LV2-0392 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[31]`
- **DE:** Wir haben eine Tischlampe, ein Bücherbrett und eine Landkarte.
- **CURRENT:** Wir haben eine Tischlampe, ein Bücherbrett und eine Landkarte.
- **NEW:** Wir haben eine Tischlampe, ein Bücherbrett und eine Landkarte.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #633 ES-KURSS-LESSONS-LV2-0393 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[32]`
- **DE:** Wer ist glücklich?
- **CURRENT:** Wer ist glücklich?
- **NEW:** Wer ist glücklich?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #634 ES-KURSS-LESSONS-LV2-0394 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[33]`
- **DE:** Ich bin glücklich, denn ich habe einen Vater und eine Mutter.
- **CURRENT:** Ich bin glücklich, denn ich habe einen Vater und eine Mutter.
- **NEW:** Ich bin glücklich, denn ich habe einen Vater und eine Mutter.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #635 ES-KURSS-LESSONS-LV2-0395 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[34]`
- **DE:** Wir sind glücklich, denn wir haben Brüder und Schwestern.
- **CURRENT:** Wir sind glücklich, denn wir haben Brüder und Schwestern.
- **NEW:** Wir sind glücklich, denn wir haben Brüder und Schwestern.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #636 ES-KURSS-LESSONS-LV2-0396 [LABOT]

- **Lesson:** lesson11
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[3]`
- **DE:** wir haben
- **CURRENT:** wir haben — mamás ir
- **NEW:** wir haben — nosotros tenemos
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción al español es incorrecta y no corresponde al significado del alemán.

---

## #637 ES-KURSS-LESSONS-LV2-0397 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[9]`
- **DE:** ist nicht
- **CURRENT:** ist nicht — nav
- **NEW:** ist nicht — nav
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #638 ES-KURSS-LESSONS-LV2-0398 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[11]`
- **DE:** hell
- **CURRENT:** hell — brillante
- **NEW:** hell — luminoso
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Brillante» es posible, pero para describir una habitación o un espacio «luminoso» es la traducción más natural de «hell».

---

## #639 ES-KURSS-LESSONS-LV2-0399 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[15]`
- **DE:** kein, keine, kein
- **CURRENT:** kein, keine, kein — neviens, neviena, neviens
- **NEW:** kein, keine, kein — neviens, neviena, neviens
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #640 ES-KURSS-LESSONS-LV2-0400 [LABOT]

- **Lesson:** lesson11
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[2]`
- **DE:** La z suena como la c española: Franz (frans), das Zimmer (tsimer).
- **CURRENT:** La z suena como la c española: Franz (frans), das Zimmer (tsimer).
- **NEW:** La z suena como «ts»: Franz (frans), das Zimmer (tsimer).
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La z alemana representa normalmente el sonido /ts/, que no equivale al sonido de la c española. La formulación actual puede inducir a una pronunciación incorrecta.

---

## #641 ES-KURSS-LESSONS-LV2-0401 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text`
- **DE:** —
- **CURRENT:** El verbo auxiliar haben en alemán expresa el concepto de pertenencia. En español, a menudo se expresa con: yo tengo, tú tienes, él tiene, etc. t. t.
- **NEW:** El verbo alemán haben expresa posesión. En español, suele traducirse como «tener»: yo tengo, tú tienes, él tiene, etc.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #642 ES-KURSS-LESSONS-LV2-0402 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].heading`
- **DE:** —
- **CURRENT:** Haben — Präsens
- **NEW:** Haben — Präsens
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #643 ES-KURSS-LESSONS-LV2-0403 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[0][1]`
- **DE:** man ir
- **CURRENT:** man ir
- **NEW:** man ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #644 ES-KURSS-LESSONS-LV2-0404 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[1][1]`
- **DE:** tev ir
- **CURRENT:** tev ir
- **NEW:** tev ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #645 ES-KURSS-LESSONS-LV2-0405 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[3][1]`
- **DE:** mums ir
- **CURRENT:** mums ir
- **NEW:** mums ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #646 ES-KURSS-LESSONS-LV2-0406 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[1].table[4][1]`
- **DE:** jums ir
- **CURRENT:** jums ir
- **NEW:** jums ir
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #647 ES-KURSS-LESSONS-LV2-0407 [LABOT]

- **Lesson:** lesson11
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].text`
- **DE:** —
- **CURRENT:** En español, la persona a quien pertenece algo está en el caso dativo y el sujeto en el caso nominativo. En alemán, la persona está en el caso nominativo y el objeto poseído en el caso acusativo.
- **NEW:** En español, la persona que posee algo es el sujeto y lo poseído funciona como complemento directo. En alemán, la persona está en nominativo y el objeto poseído, en acusativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La explicación atribuye al español una construcción dativa que no corresponde al uso normal de «tener» y puede inducir a error sobre las funciones sintácticas en ambas lenguas.

---

## #648 ES-KURSS-LESSONS-LV2-0408 [LABOT]

- **Lesson:** lesson11
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[3].examples[1]`
- **DE:** Der Vater hat ein Buch
- **CURRENT:** Der Vater hat ein Buch — padre
- **NEW:** Der Vater hat ein Buch — El padre tiene un libro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción española está incompleta: solo aparece «padre» y se omiten el artículo, el verbo y el objeto.

---

## #649 ES-KURSS-LESSONS-LV2-0410 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[5].heading`
- **DE:** —
- **CURRENT:** Imperativ
- **NEW:** Imperativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #650 ES-KURSS-LESSONS-LV2-0411 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[5].text`
- **DE:** —
- **CURRENT:** El verbo haben debe aprenderse bien y utilizarse correctamente. También debes conocer las formas de comando.
- **NEW:** El verbo haben debe aprenderse bien y utilizarse correctamente. También debes conocer las formas del imperativo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #651 ES-KURSS-LESSONS-LV2-0412 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[0]`
- **DE:** habe Geduld!
- **CURRENT:** habe Geduld! — ¡ten paciencia!
- **NEW:** habe Geduld! — ¡Ten paciencia!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción española es correcta, pero, al iniciar una oración independiente después del guion, corresponde escribir «Ten» con mayúscula.

---

## #652 ES-KURSS-LESSONS-LV2-0413 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[1]`
- **DE:** habt Geduld!
- **CURRENT:** habt Geduld! — ¡tened paciencia!
- **NEW:** habt Geduld! — ¡Tened paciencia!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción española es correcta, pero, al iniciar una oración independiente después del guion, corresponde escribir «Tened» con mayúscula.

---

## #653 ES-KURSS-LESSONS-LV2-0414 [LABOT]

- **Lesson:** lesson11
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[7].text`
- **DE:** —
- **CURRENT:** La doble negación de la lengua española no se expresa en alemán con la palabra negativa kein. La palabra negativa kein sólo se sitúa delante del sustantivo.
- **NEW:** La negación española con «no» y «ningún/ninguna» suele expresarse en alemán con kein. Kein es un determinante negativo que se coloca delante del sustantivo y se declina según el género, el número y el caso.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La formulación presenta como «doble negación» una construcción de concordancia negativa y afirma de forma demasiado restrictiva que kein solo aparece delante de un sustantivo.

---

## #654 ES-KURSS-LESSONS-LV2-0415 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[8].heading`
- **DE:** —
- **CURRENT:** Kein — vienskaitlis
- **NEW:** Kein — vienskaitlis
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #655 ES-KURSS-LESSONS-LV2-0416 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[9].heading`
- **DE:** —
- **CURRENT:** Kein — daugiskaitlis
- **NEW:** Kein — daugiskaitlis
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #656 ES-KURSS-LESSONS-LV2-0417 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].text`
- **DE:** —
- **CURRENT:** Si la oración narrativa contiene la conjunción denn, el verbo permanece en 2ª posición. La conjunción denn no cuenta como miembro de la oración.
- **NEW:** Si la oración contiene la conjunción denn, el verbo permanece en segunda posición. La conjunción denn no cuenta como elemento de la oración.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Oración narrativa» y «miembro de la oración» son expresiones poco naturales en este contexto. «Segunda posición» y «elemento de la oración» resultan más claros y adecuados.

---

## #657 ES-KURSS-LESSONS-LV2-0418 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[12].text`
- **DE:** —
- **CURRENT:** Los sustantivos compuestos van precedidos del article del último sustantivo. El énfasis está en la primera palabra del caso.
- **NEW:** Los sustantivos compuestos llevan el artículo del último sustantivo. El acento recae en la primera parte.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #658 ES-KURSS-LESSONS-LV2-0419 [LABOT]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[0].lv`
- **DE:** Was hast du?
- **CURRENT:** ¿Kas tev ir?
- **NEW:** ¿Qué tienes?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español.

---

## #659 ES-KURSS-LESSONS-LV2-0420 [LABOT]

- **Lesson:** lesson11
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[2].lv`
- **DE:** Wie sind die Bücher?
- **CURRENT:** ¿Cuáles son los libros?
- **NEW:** ¿Cómo son los libros?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wie sind die Bücher?» pregunta por las características de los libros, no por cuáles son.

---

## #660 ES-KURSS-LESSONS-LV2-0421 [LABOT]

- **Lesson:** lesson11
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
- **DE:** Franz hat keine Feder und keinen Bleistift.
- **CURRENT:** Franc no tiene bolígrafo ni lápiz.
- **NEW:** Franz no tiene pluma ni lápiz.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El nombre «Franc» no corresponde al nombre alemán «Franz» del contexto. Además, «Feder» se refiere aquí a una pluma, no a un bolígrafo.

---

## #661 ES-KURSS-LESSONS-LV2-0422 [LABOT]

- **Lesson:** lesson11
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[12].lv`
- **DE:** Der Lehrer hat viele Bücher und ein Bücherbrett.
- **CURRENT:** La maestra tiene muchos libros y una estantería.
- **NEW:** El maestro tiene muchos libros y una estantería.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El contexto alemán usa «der Lehrer», que corresponde a un maestro, no a una maestra.

---

## #662 ES-KURSS-LESSONS-LV2-0423 [FALSE_POSITIVE]

- **Lesson:** lesson11
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[15].lv`
- **DE:** Was tut Anna?
- **CURRENT:** Ko dara Anna?
- **NEW:** Ko dara Anna?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #663 ES-KURSS-LESSONS-LV2-0424 [LABOT]

- **Lesson:** lesson11
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la forma conjugada correcta y ponla en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Pon la conjugación» resulta poco natural en español y «hazlo» tiene un referente ambiguo. La recomendación hace explícita la acción solicitada.

---

## #664 ES-KURSS-LESSONS-LV2-0426 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.lessonItems.12.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Calidades comparables, también, edad y colores.
- **NEW:** Grados comparativos, als/wie, edad y colores.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Calidades comparables» no traduce correctamente el tema de los grados comparativos, y «también» sustituye indebidamente los términos alemanes als/wie.

---

## #665 ES-KURSS-LESSONS-LV2-0429 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[4]`
- **DE:** wieviel
- **CURRENT:** wieviel — cik
- **NEW:** wieviel — cik
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #666 ES-KURSS-LESSONS-LV2-0430 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[5]`
- **DE:** Max (maks)
- **CURRENT:** Max (maks) — Maksis
- **NEW:** Max (maks) — Maksis
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #667 ES-KURSS-LESSONS-LV2-0431 [LABOT]

- **Lesson:** lesson12
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[9]`
- **DE:** alt
- **CURRENT:** alt — viejo
- **NEW:** alt — mayor (al hablar de la edad)
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Viejo» es posible en otros contextos, pero en esta lección sobre la edad puede inducir a traducir de forma poco natural las expresiones personales de edad.

---

## #668 ES-KURSS-LESSONS-LV2-0432 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12]`
- **DE:** so alt wie
- **CURRENT:** so alt wie — tan viejo como
- **NEW:** so alt wie — de la misma edad que
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Tan viejo como» suena despectivo o se refiere a objetos envejecidos; para personas y edades, «de la misma edad que» es más natural y preciso.

---

## #669 ES-KURSS-LESSONS-LV2-0433 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[16]`
- **DE:** wie
- **CURRENT:** wie — cómo
- **NEW:** wie — como
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En este contexto de comparación, wie significa «como», no «cómo».

---

## #670 ES-KURSS-LESSONS-LV2-0434 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[17]`
- **DE:** am jüngsten
- **CURRENT:** am jüngsten — el más reciente
- **NEW:** am jüngsten — el más joven
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** am jüngsten es el superlativo de jung y significa «el más joven»; «el más reciente» corresponde a otra acepción.

---

## #671 ES-KURSS-LESSONS-LV2-0435 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[0].heading`
- **DE:** —
- **CURRENT:** Komparativ
- **NEW:** Komparativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #672 ES-KURSS-LESSONS-LV2-0436 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text`
- **DE:** —
- **CURRENT:** La mayoría de los adjetivos monosilábicos con la vocal raíz a, o, u tienen una diéresis en el grado superlativo.
- **NEW:** La mayoría de los adjetivos monosilábicos cuya vocal raíz es a, o, u tienen una diéresis en el comparativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La regla descrita corresponde al comparativo, no al superlativo. Además, «cuya vocal raíz es» resulta más natural y preciso que «con la vocal raíz».

---

## #673 ES-KURSS-LESSONS-LV2-0437 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[3].heading`
- **DE:** —
- **CURRENT:** Superlativ
- **NEW:** Superlativ
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #674 ES-KURSS-LESSONS-LV2-0438 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[1][0]`
- **DE:** nah (tuvs)
- **CURRENT:** nah (tuvs)
- **NEW:** nah (tuvs)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #675 ES-KURSS-LESSONS-LV2-0439 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[2][0]`
- **DE:** hoch (augsts)
- **CURRENT:** hoch (augsts)
- **NEW:** hoch (augsts)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #676 ES-KURSS-LESSONS-LV2-0440 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[3][0]`
- **DE:** gut (labs)
- **CURRENT:** gut (labs)
- **NEW:** gut (labs)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #677 ES-KURSS-LESSONS-LV2-0441 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[4][0]`
- **DE:** viel (daudz)
- **CURRENT:** viel (daudz)
- **NEW:** viel (daudz)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #678 ES-KURSS-LESSONS-LV2-0442 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv`
- **DE:** Wie heißen Sie?
- **CURRENT:** ¿Cómo te llamas?
- **NEW:** ¿Cómo se llama usted?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El español usa el trato informal («te»), mientras que el contexto alemán usa la forma formal «Sie».

---

## #679 ES-KURSS-LESSONS-LV2-0443 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[10].lv`
- **DE:** Ich bin zwanzig Jahre alt.
- **CURRENT:** Es esmu 20 gadus vecs.
- **NEW:** Es esmu 20 gadus vecs.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #680 ES-KURSS-LESSONS-LV2-0444 [LABOT]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[11].lv`
- **DE:** Ist Max groß?
- **CURRENT:** ¿Vai Maksis son mentiras?
- **NEW:** ¿Es Max alto?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** La frase contiene texto letón («Vai Maksis») y una traducción española sin sentido («son mentiras»). El contexto alemán pregunta si Max es alto.

---

## #681 ES-KURSS-LESSONS-LV2-0445 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv`
- **DE:** Wer ist am größten?
- **CURRENT:** ¿Cuál es el mayor?
- **NEW:** ¿Cuál es el más grande?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En este contexto, «größten» significa «más grande», no «mayor», que normalmente se interpreta como de más edad.

---

## #682 ES-KURSS-LESSONS-LV2-0446 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv`
- **DE:** Wieviel Brüder haben Sie?
- **CURRENT:** ¿Cuantos hermanos tienes?
- **NEW:** ¿Cuántos hermanos tiene?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta la tilde en «Cuántos». Además, el alemán usa el tratamiento formal «Sie», por lo que «tiene» refleja mejor el contexto.

---

## #683 ES-KURSS-LESSONS-LV2-0447 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[23].lv`
- **DE:** Wie ist die Tinte?
- **CURRENT:** ¿Qué es la tinta?
- **NEW:** ¿Cómo es la tinta?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wie ist die Tinte?» pregunta por cómo es la tinta, no por qué es o qué es.

---

## #684 ES-KURSS-LESSONS-LV2-0448 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[24].lv`
- **DE:** Sie ist schwarz.
- **CURRENT:** Es negro.
- **NEW:** Es negra.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Sie» se refiere a «die Tinte», que es un sustantivo femenino en español: «la tinta».

---

## #685 ES-KURSS-LESSONS-LV2-0449 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[25].lv`
- **DE:** Wie ist die Kreide?
- **CURRENT:** ¿Qué es la tiza?
- **NEW:** ¿Cómo es la tiza?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wie ist die Kreide?» pregunta por una característica de la tiza, no por su identidad o definición.

---

## #686 ES-KURSS-LESSONS-LV2-0450 [FALSE_POSITIVE]

- **Lesson:** lesson12
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[26].lv`
- **DE:** Sie ist weiß.
- **CURRENT:** Tas ir balts.
- **NEW:** Tas ir balts.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #687 ES-KURSS-LESSONS-LV2-0451 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[27].lv`
- **DE:** Wie sind die Blumen?
- **CURRENT:** ¿Qué son las flores?
- **NEW:** ¿Cómo son las flores?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wie sind die Blumen?» pregunta por las características de las flores, no por qué son o qué son.

---

## #688 ES-KURSS-LESSONS-LV2-0452 [LABOT]

- **Lesson:** lesson12
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv`
- **DE:** Sind Sie glücklich?
- **CURRENT:** ¿Estás feliz?
- **NEW:** ¿Está feliz?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa «Sie», tratamiento formal singular en este contexto; «estás» corresponde al tratamiento informal «du».

---

## #689 ES-KURSS-LESSONS-LV2-0453 [LABOT]

- **Lesson:** lesson12
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa la conjugación correcta y ponlo en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Pon la conjugación» resulta poco natural en español; normalmente se «usa» o se «escribe» una conjugación, mientras que lo que se pone en plural es la respuesta o la forma.

---

## #690 ES-KURSS-LESSONS-LV2-0455 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.lessonItems.13.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Der Körper, partes del cuerpo, turnen y jeder.
- **NEW:** El cuerpo («Der Körper»), partes del cuerpo, gimnasia («turnen») y «jeder».
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El texto mezcla alemán y español sin marcar claramente qué términos son vocabulario alemán y presenta una enumeración poco natural. La propuesta conserva los términos alemanes como contenido pedagógico, pero aclara su función.

---

## #691 ES-KURSS-LESSONS-LV2-0456 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.intro`
- **DE:** —
- **CURRENT:** Conferencia Trece: Der Körper, partes del cuerpo, ejercicio, verbos reflexivos y plural.
- **NEW:** Lección 13: «Der Körper», partes del cuerpo, gimnasia, verbos reflexivos y plural.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #692 ES-KURSS-LESSONS-LV2-0457 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[0]`
- **DE:** Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.
- **CURRENT:** Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.
- **NEW:** Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #693 ES-KURSS-LESSONS-LV2-0458 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[1]`
- **DE:** Wie ist der Kopf? Der Kopf ist rund.
- **CURRENT:** Wie ist der Kopf? Der Kopf ist rund.
- **NEW:** Wie ist der Kopf? Der Kopf ist rund.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #694 ES-KURSS-LESSONS-LV2-0459 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[2]`
- **DE:** Der Hals ist kurz.
- **CURRENT:** Der Hals ist kurz.
- **NEW:** Der Hals ist kurz.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #695 ES-KURSS-LESSONS-LV2-0460 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[3]`
- **DE:** Der Rumpf ist lang.
- **CURRENT:** Der Rumpf ist lang.
- **NEW:** Der Rumpf ist lang.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #696 ES-KURSS-LESSONS-LV2-0461 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[4]`
- **DE:** Der Arm ist auch lang.
- **CURRENT:** Der Arm ist auch lang.
- **NEW:** Der Arm ist auch lang.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #697 ES-KURSS-LESSONS-LV2-0462 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[5]`
- **DE:** Die Hand ist klein.
- **CURRENT:** Die Hand ist klein.
- **NEW:** La mano es pequeña.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #698 ES-KURSS-LESSONS-LV2-0463 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[6]`
- **DE:** Das Bein ist dick.
- **CURRENT:** Das Bein ist dick.
- **NEW:** La pierna es gruesa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #699 ES-KURSS-LESSONS-LV2-0464 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[7]`
- **DE:** Der Fuß ist dünn.
- **CURRENT:** Der Fuß ist dünn.
- **NEW:** El pie es delgado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #700 ES-KURSS-LESSONS-LV2-0465 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[8]`
- **DE:** Die Brust ist vorn, aber der Rücken ist hinten.
- **CURRENT:** Die Brust ist vorn, aber der Rücken ist hinten.
- **NEW:** El pecho está delante, pero la espalda está detrás.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #701 ES-KURSS-LESSONS-LV2-0466 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[9]`
- **DE:** Jede Hand hat fünf Finger.
- **CURRENT:** Jede Hand hat fünf Finger.
- **NEW:** Cada mano tiene cinco dedos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #702 ES-KURSS-LESSONS-LV2-0467 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[10]`
- **DE:** Beide Hände haben zehn Finger.
- **CURRENT:** Beide Hände haben zehn Finger.
- **NEW:** Ambas manos tienen diez dedos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #703 ES-KURSS-LESSONS-LV2-0468 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[11]`
- **DE:** Jeder Fuß hat fünf Zehen.
- **CURRENT:** Jeder Fuß hat fünf Zehen.
- **NEW:** Cada pie tiene cinco dedos del pie.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #704 ES-KURSS-LESSONS-LV2-0469 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[12]`
- **DE:** Beide Füße haben zehn Zehen.
- **CURRENT:** Beide Füße haben zehn Zehen.
- **NEW:** Ambos pies tienen diez dedos del pie.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #705 ES-KURSS-LESSONS-LV2-0470 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[13]`
- **DE:** Jeder Finger und jede Zehe haben einen Nagel.
- **CURRENT:** Jeder Finger und jede Zehe haben einen Nagel.
- **NEW:** Cada dedo y cada dedo del pie tienen una uña.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #706 ES-KURSS-LESSONS-LV2-0471 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[14]`
- **DE:** Ich beschneide und reinige die Nägel oft.
- **CURRENT:** Ich beschneide und reinige die Nägel oft.
- **NEW:** Recorto y limpio las uñas a menudo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.

---

## #707 ES-KURSS-LESSONS-LV2-0472 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[24]`
- **DE:** jede
- **CURRENT:** jede — katra
- **NEW:** jede — katra
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #708 ES-KURSS-LESSONS-LV2-0473 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[25]`
- **DE:** jedes
- **CURRENT:** jedes — katrs
- **NEW:** jedes — katrs
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #709 ES-KURSS-LESSONS-LV2-0474 [LABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[29]`
- **DE:** der Nagel
- **CURRENT:** der Nagel — uña / clavo
- **NEW:** der Nagel — uña
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La barra combina dos significados distintos en un campo de aprendizaje. En este contexto corporal, debe usarse únicamente «uña».

---

## #710 ES-KURSS-LESSONS-LV2-0475 [LABOT]

- **Lesson:** lesson13
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[30]`
- **DE:** die Nägel
- **CURRENT:** die Nägel — uñas / clavos
- **NEW:** die Nägel — uñas
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** Combina dos traducciones distintas en un mismo campo mediante una barra. Debe seleccionarse la acepción correspondiente al contexto o separarse en entradas distintas.

---

## #711 ES-KURSS-LESSONS-LV2-0476 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[31]`
- **DE:** beschneiden
- **CURRENT:** beschneiden — apgriezt
- **NEW:** beschneiden — apgriezt
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #712 ES-KURSS-LESSONS-LV2-0477 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Algunos verbos con la vocal raíz a o au en la segunda y tercera persona del presente del singular tienen diéresis.
- **NEW:** Algunos verbos cuya raíz contiene a o au cambian estas vocales por ä o äu en la segunda y tercera persona del presente de indicativo singular.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La formulación «con la vocal raíz a o au» es poco natural y «tienen diéresis» describe de forma imprecisa el fenómeno: las vocales cambian a ä o äu en determinadas personas.

---

## #713 ES-KURSS-LESSONS-LV2-0478 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading`
- **DE:** —
- **CURRENT:** Verbos compuestos
- **NEW:** Verbos separables
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #714 ES-KURSS-LESSONS-LV2-0479 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Si la parte preposicional está acentuada, se separa en tiempo presente y va al final de la oración.
- **NEW:** Si el prefijo está acentuado, se separa en presente y se coloca al final de la oración.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #715 ES-KURSS-LESSONS-LV2-0480 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_GRAMMAR · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** Si el prefijo no está acentuado, no está acentuado.
- **NEW:** Si el prefijo no está acentuado, no se separa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La segunda parte repite «no está acentuado» y no expresa la regla gramatical. La explicación debe indicar que el prefijo permanece unido al verbo.

---

## #716 ES-KURSS-LESSONS-LV2-0481 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_NATURALNESS · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text`
- **DE:** —
- **CURRENT:** El pronombre jeder va en círculos como los artículos der / die / das.
- **NEW:** El pronombre «jeder» se declina como los artículos «der», «die» y «das».
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Va en círculos» es una traducción no idiomática y no transmite el concepto de declinación. Además, conviene conservar los términos alemanes entre comillas para identificar las formas.

---

## #717 ES-KURSS-LESSONS-LV2-0482 [LABOT]

- **Lesson:** lesson13
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[2].wir`
- **DE:** Wir machen dos Schritte.
- **CURRENT:** Wir machen dos Schritte.
- **NEW:** Wir machen zwei Schritte.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo alemán contiene la palabra española «dos»; debe conservarse íntegramente en alemán.

---

## #718 ES-KURSS-LESSONS-LV2-0483 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].er`
- **DE:** Er bleibt stehen.
- **CURRENT:** Er bleibt stehen.
- **NEW:** Er bleibt stehen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #719 ES-KURSS-LESSONS-LV2-0484 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].wir`
- **DE:** Wir bleiben stehen.
- **CURRENT:** Wir bleiben stehen.
- **NEW:** Wir bleiben stehen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #720 ES-KURSS-LESSONS-LV2-0485 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].ich`
- **DE:** Ich kehre mich um.
- **CURRENT:** Ich kehre mich um.
- **NEW:** Ich kehre mich um.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #721 ES-KURSS-LESSONS-LV2-0486 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].er`
- **DE:** Er kehrt sich um.
- **CURRENT:** Er kehrt sich um.
- **NEW:** Er kehrt sich um.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #722 ES-KURSS-LESSONS-LV2-0487 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].wir`
- **DE:** Wir kehren uns um.
- **CURRENT:** Wir kehren uns um.
- **NEW:** Wir kehren uns um.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #723 ES-KURSS-LESSONS-LV2-0488 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].ich`
- **DE:** Ich strecke einen Arm aus.
- **CURRENT:** Ich strecke einen Arm aus.
- **NEW:** Ich strecke einen Arm aus.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #724 ES-KURSS-LESSONS-LV2-0489 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].er`
- **DE:** Er streckt einen Arm aus.
- **CURRENT:** Er streckt einen Arm aus.
- **NEW:** Er streckt einen Arm aus.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #725 ES-KURSS-LESSONS-LV2-0490 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].wir`
- **DE:** Wir strecken einen Arm aus.
- **CURRENT:** Wir strecken einen Arm aus.
- **NEW:** Wir strecken einen Arm aus.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #726 ES-KURSS-LESSONS-LV2-0491 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].ich`
- **DE:** Ich strecke beide Arme aus.
- **CURRENT:** Ich strecke beide Arme aus.
- **NEW:** Ich strecke beide Arme aus.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #727 ES-KURSS-LESSONS-LV2-0492 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].er`
- **DE:** Er streckt beide Arme aus.
- **CURRENT:** Er streckt beide Arme aus.
- **NEW:** Er streckt beide Arme aus.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #728 ES-KURSS-LESSONS-LV2-0493 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].wir`
- **DE:** Wir strecken beide Arme aus.
- **CURRENT:** Wir strecken beide Arme aus.
- **NEW:** Wir strecken beide Arme aus.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #729 ES-KURSS-LESSONS-LV2-0494 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].ich`
- **DE:** Ich senske beide Arme.
- **CURRENT:** Ich senske beide Arme.
- **NEW:** Ich senske beide Arme.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #730 ES-KURSS-LESSONS-LV2-0495 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].er`
- **DE:** Er sentkt beide Arme.
- **CURRENT:** Er sentkt beide Arme.
- **NEW:** Er sentkt beide Arme.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #731 ES-KURSS-LESSONS-LV2-0496 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].wir`
- **DE:** Wir senten beide Arme.
- **CURRENT:** Wir senten beide Arme.
- **NEW:** Wir senten beide Arme.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #732 ES-KURSS-LESSONS-LV2-0497 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].ich`
- **DE:** Ich drehe den Kopf nach links.
- **CURRENT:** Ich drehe den Kopf nach links.
- **NEW:** Ich drehe den Kopf nach links.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #733 ES-KURSS-LESSONS-LV2-0498 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].er`
- **DE:** Er dreht den Kopf nach enlaces.
- **CURRENT:** Er dreht den Kopf nach enlaces.
- **NEW:** Er dreht den Kopf nach enlaces.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #734 ES-KURSS-LESSONS-LV2-0499 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].wir`
- **DE:** Wir drehen den Kopf nach links.
- **CURRENT:** Wir drehen den Kopf nach links.
- **NEW:** Wir drehen den Kopf nach links.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #735 ES-KURSS-LESSONS-LV2-0500 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].ich`
- **DE:** Ich drehe den Kopf nach rechts.
- **CURRENT:** Ich drehe den Kopf nach rechts.
- **NEW:** Ich drehe den Kopf nach rechts.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #736 ES-KURSS-LESSONS-LV2-0501 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].er`
- **DE:** Er dreht den Kopf nach rechts.
- **CURRENT:** Er dreht den Kopf nach rechts.
- **NEW:** Er dreht den Kopf nach rechts.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #737 ES-KURSS-LESSONS-LV2-0502 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].wir`
- **DE:** Wir drehen den Kopf nach rechts.
- **CURRENT:** Wir drehen den Kopf nach rechts.
- **NEW:** Wir drehen den Kopf nach rechts.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #738 ES-KURSS-LESSONS-LV2-0503 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].ich`
- **DE:** Ich halte den Kopf gerade.
- **CURRENT:** Ich halte den Kopf gerade.
- **NEW:** Ich halte den Kopf gerade.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #739 ES-KURSS-LESSONS-LV2-0504 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].er`
- **DE:** Er hält den Kopf gerade.
- **CURRENT:** Er hält den Kopf gerade.
- **NEW:** Er hält den Kopf gerade.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #740 ES-KURSS-LESSONS-LV2-0505 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].wir`
- **DE:** Wir halten den Kopf gerade.
- **CURRENT:** Wir halten den Kopf gerade.
- **NEW:** Wir halten den Kopf gerade.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #741 ES-KURSS-LESSONS-LV2-0506 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].ich`
- **DE:** Ich atme tief.
- **CURRENT:** Ich atme tief.
- **NEW:** Ich atme tief.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #742 ES-KURSS-LESSONS-LV2-0507 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].er`
- **DE:** Er atmet tief.
- **CURRENT:** Er atmet tief.
- **NEW:** Er atmet tief.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #743 ES-KURSS-LESSONS-LV2-0508 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].wir`
- **DE:** Wir atmen tief.
- **CURRENT:** Wir atmen tief.
- **NEW:** Wir atmen tief.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #744 ES-KURSS-LESSONS-LV2-0509 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[0].lv`
- **DE:** Wie viele Arme hat der Mensch?
- **CURRENT:** ¿Cuántas manos tiene una persona?
- **NEW:** ¿Cuántos brazos tiene una persona?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Arme» significa «brazos», no «manos».

---

## #745 ES-KURSS-LESSONS-LV2-0510 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[1].lv`
- **DE:** Wie viele Beine hast du?
- **CURRENT:** cuantas piernas tienes
- **NEW:** ¿Cuántas piernas tienes?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Faltan la mayúscula inicial, la tilde de «cuántas» y los signos de interrogación.

---

## #746 ES-KURSS-LESSONS-LV2-0511 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[4].lv`
- **DE:** Wie ist der Arm?
- **CURRENT:** ¿Qué es una mano?
- **NEW:** ¿Cómo es el brazo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán pregunta «Wie ist der Arm?»; «Arm» significa «brazo» y «Wie ist» corresponde a «¿Cómo es?».

---

## #747 ES-KURSS-LESSONS-LV2-0512 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[5].lv`
- **DE:** Wie ist das Bein?
- **CURRENT:** ¿Qué es la pierna?
- **NEW:** ¿Cómo es la pierna?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wie ist das Bein?» significa «¿Cómo es la pierna?», no «¿Qué es la pierna?».

---

## #748 ES-KURSS-LESSONS-LV2-0513 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[6].lv`
- **DE:** Der Arm ist klein, aber das Bein ist groß.
- **CURRENT:** La mano es pequeña, pero la pierna es grande.
- **NEW:** El brazo es pequeño, pero la pierna es grande.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Der Arm» significa «el brazo», no «la mano».

---

## #749 ES-KURSS-LESSONS-LV2-0514 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[7].lv`
- **DE:** Wo ist die Brust?
- **CURRENT:** donde esta el cofre
- **NEW:** ¿Dónde está el pecho?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Brust» se refiere al pecho en este contexto, no a un cofre. También faltan tildes, mayúscula y signos de interrogación.

---

## #750 ES-KURSS-LESSONS-LV2-0515 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[10].lv`
- **DE:** Wie viele Finger hat die Hand?
- **CURRENT:** ¿Cik pirkstu ir plaukstai?
- **NEW:** ¿Cuántos dedos tiene la mano?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto visible está en letón, no en español.

---

## #751 ES-KURSS-LESSONS-LV2-0516 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[11].lv`
- **DE:** Die Hand hat fünf Finger.
- **CURRENT:** Plaukstai ir pieci pirksti.
- **NEW:** Plaukstai ir pieci pirksti.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #752 ES-KURSS-LESSONS-LV2-0517 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv`
- **DE:** Was hat der Finger?
- **CURRENT:** ¿Kas ir pirkstam?
- **NEW:** ¿Qué le pasa al dedo?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español.

---

## #753 ES-KURSS-LESSONS-LV2-0518 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv`
- **DE:** Der Finger hat einen Nagel.
- **CURRENT:** Pirkstam ir regaña.
- **NEW:** El dedo tiene una uña.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Contiene texto letón («Pirkstam ir») y «regaña» no corresponde al significado del ejemplo alemán.

---

## #754 ES-KURSS-LESSONS-LV2-0519 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv`
- **DE:** Was tust du?
- **CURRENT:** ¿Ko tu dari?
- **NEW:** ¿Qué haces?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español.

---

## #755 ES-KURSS-LESSONS-LV2-0520 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[17].lv`
- **DE:** Ich beschneide und reinige die Nägel.
- **CURRENT:** Me corto y limpio las uñas.
- **NEW:** Me corto las uñas y las limpio.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Me corto» sin objeto significa que me corto a mí mismo; además, falta especificar que se cortan las uñas.

---

## #756 ES-KURSS-LESSONS-LV2-0521 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[18].lv`
- **DE:** Was tut Paul?
- **CURRENT:** Ko Paul dara?
- **NEW:** Ko Paul dara?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #757 ES-KURSS-LESSONS-LV2-0522 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv`
- **DE:** Sie strecken beide Arme aus.
- **CURRENT:** Extienden ambas manos.
- **NEW:** Extienden ambos brazos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo alemán se refiere a los brazos, no a las manos.

---

## #758 ES-KURSS-LESSONS-LV2-0523 [LABOT]

- **Lesson:** lesson13
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv`
- **DE:** Sie senken beide Arme.
- **CURRENT:** Dejan caer ambas manos.
- **NEW:** Bajan ambos brazos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo alemán se refiere a bajar los brazos; «dejar caer las manos» cambia el significado.

---

## #759 ES-KURSS-LESSONS-LV2-0524 [FALSE_POSITIVE]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[29].lv`
- **DE:** Robert, turne!
- **CURRENT:** Roberto, vingro!
- **NEW:** Roberto, vingro!
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #760 ES-KURSS-LESSONS-LV2-0525 [LABOT]

- **Lesson:** lesson13
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv`
- **DE:** Fräulein Müller, turnen Sie!
- **CURRENT:** ¡Müller jaunkundze, vingrojiet!
- **NEW:** ¡Señorita Müller, haga gimnasia!
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** La frase está en letón, salvo el apellido, y no está traducida al español.

---

## #761 ES-KURSS-LESSONS-LV2-0526 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[32].lv`
- **DE:** Machen Sie zwei Schritte, und dann bleiben Sie stehen!
- **CURRENT:** ¡Da dos pasos y luego quédate de pie!
- **NEW:** ¡Dé dos pasos y luego quédese de pie!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo usa tratamiento formal («Sie»), pero el español mezcla el imperativo de tú con el contexto formal.

---

## #762 ES-KURSS-LESSONS-LV2-0527 [LABOT]

- **Lesson:** lesson13
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la forma correcta y ponla en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Poner la conjugación» y «hazlo» resultan poco naturales y vagos en una instrucción de ejercicio.

---

## #763 ES-KURSS-LESSONS-LV2-0529 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.lessonItems.14.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Verbos müssen, wollen, mögen y modales.
- **NEW:** Verbos modales müssen, wollen y mögen.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La formulación actual es redundante y poco natural: presenta los verbos como «modales» y vuelve a añadir «modales» al final.

---

## #764 ES-KURSS-LESSONS-LV2-0530 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[2]`
- **DE:** Er muss lernen, denn er will vorwärts kommen.
- **CURRENT:** Er muss lernen, denn er will vorwärts kommen.
- **NEW:** Er muss lernen, denn er will vorwärts kommen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #765 ES-KURSS-LESSONS-LV2-0531 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[3]`
- **DE:** Sie muss lernen, denn sie will vorwärts kommen.
- **CURRENT:** Sie muss lernen, denn sie will vorwärts kommen.
- **NEW:** Sie muss lernen, denn sie will vorwärts kommen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #766 ES-KURSS-LESSONS-LV2-0532 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[4]`
- **DE:** Es muss lernen, denn es will vorwärts kommen.
- **CURRENT:** Es muss lernen, denn es will vorwärts kommen.
- **NEW:** Es muss lernen, denn es will vorwärts kommen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #767 ES-KURSS-LESSONS-LV2-0533 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[5]`
- **DE:** Wir müssen lernen, denn wir wollen vorwärts kommen.
- **CURRENT:** Wir müssen lernen, denn wir wollen vorwärts kommen.
- **NEW:** Wir müssen lernen, denn wir wollen vorwärts kommen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #768 ES-KURSS-LESSONS-LV2-0534 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[6]`
- **DE:** Ihr müsst lernen, denn ihr wollt vorwärts kommen.
- **CURRENT:** Ihr müsst lernen, denn ihr wollt vorwärts kommen.
- **NEW:** Ihr müsst lernen, denn ihr wollt vorwärts kommen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #769 ES-KURSS-LESSONS-LV2-0535 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[7]`
- **DE:** Sie müssen lernen, denn sie wollen vorwärts kommen.
- **CURRENT:** Sie müssen lernen, denn sie wollen vorwärts kommen.
- **NEW:** Sie müssen lernen, denn sie wollen vorwärts kommen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #770 ES-KURSS-LESSONS-LV2-0536 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[8]`
- **DE:** Ich mag die Suppe nicht essen, denn sie mundet mir nicht.
- **CURRENT:** Ich mag die Suppe nicht essen, denn sie mundet mir nicht.
- **NEW:** Ich mag die Suppe nicht essen, denn sie mundet mir nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #771 ES-KURSS-LESSONS-LV2-0537 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[9]`
- **DE:** Du magst die Suppe nicht essen, denn sie mundet dir nicht.
- **CURRENT:** Du magst die Suppe nicht essen, denn sie mundet dir nicht.
- **NEW:** Du magst die Suppe nicht essen, denn sie mundet dir nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #772 ES-KURSS-LESSONS-LV2-0538 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[10]`
- **DE:** Er mag die Suppe nicht essen, denn sie mundet ihm nicht.
- **CURRENT:** Er mag die Suppe nicht essen, denn sie mundet ihm nicht.
- **NEW:** Er mag die Suppe nicht essen, denn sie mundet ihm nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #773 ES-KURSS-LESSONS-LV2-0539 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[11]`
- **DE:** Sie mag die Suppe nicht essen, denn sie mundet ihr nicht.
- **CURRENT:** Sie mag die Suppe nicht essen, denn sie mundet ihr nicht.
- **NEW:** Sie mag die Suppe nicht essen, denn sie mundet ihr nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #774 ES-KURSS-LESSONS-LV2-0540 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[12]`
- **DE:** Es mag die Suppe nicht essen, denn sie mundet ihm nicht.
- **CURRENT:** Es mag die Suppe nicht essen, denn sie mundet ihm nicht.
- **NEW:** Es mag die Suppe nicht essen, denn sie mundet ihm nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #775 ES-KURSS-LESSONS-LV2-0541 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[13]`
- **DE:** Wir mögen die Suppe nicht essen, denn sie mundet uns nicht.
- **CURRENT:** Wir mögen die Suppe nicht essen, denn sie mundet uns nicht.
- **NEW:** Wir mögen die Suppe nicht essen, denn sie mundet uns nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #776 ES-KURSS-LESSONS-LV2-0542 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[14]`
- **DE:** Ihr mögt die Suppe nicht essen, denn sie mundet euch nicht.
- **CURRENT:** Ihr mögt die Suppe nicht essen, denn sie mundet euch nicht.
- **NEW:** Ihr mögt die Suppe nicht essen, denn sie mundet euch nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #777 ES-KURSS-LESSONS-LV2-0543 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[15]`
- **DE:** Sie mögen die Suppe nicht essen, denn sie mundet ihnen nicht.
- **CURRENT:** Sie mögen die Suppe nicht essen, denn sie mundet ihnen nicht.
- **NEW:** Sie mögen die Suppe nicht essen, denn sie mundet ihnen nicht.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #778 ES-KURSS-LESSONS-LV2-0552 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[17]`
- **DE:** es will
- **CURRENT:** es will — ello quiere
- **NEW:** es will — quiere
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Ello resulta poco natural e innecesario como sujeto en español en esta entrada verbal.

---

## #779 ES-KURSS-LESSONS-LV2-0559 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[27]`
- **DE:** wir mögen
- **CURRENT:** wir mögen — queremos
- **NEW:** wir mögen — nos gusta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wir mögen» significa «nos gusta» o «nos gustan», no «queremos».

---

## #780 ES-KURSS-LESSONS-LV2-0560 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[28]`
- **DE:** ihr mögt
- **CURRENT:** ihr mögt — quieres
- **NEW:** ihr mögt — os gusta
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Ihr mögt» corresponde a la segunda persona plural y significa «os gusta» o «os gustan», no «quieres».

---

## #781 ES-KURSS-LESSONS-LV2-0562 [LABOT]

- **Lesson:** lesson14
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[31]`
- **DE:** munden
- **CURRENT:** munden — para saber bien
- **NEW:** munden — saber bien
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Para saber bien» expresa finalidad («in order to taste good»), no el significado léxico de «munden», que es «saber bien».

---

## #782 ES-KURSS-LESSONS-LV2-0563 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[32]`
- **DE:** mir
- **CURRENT:** mir — hombre
- **NEW:** mir — a mí
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El pronombre dativo alemán «mir» significa «a mí», no «hombre».

---

## #783 ES-KURSS-LESSONS-LV2-0564 [FALSE_POSITIVE]

- **Lesson:** lesson14
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[33]`
- **DE:** dir
- **CURRENT:** dir — tev
- **NEW:** dir — tev
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #784 ES-KURSS-LESSONS-LV2-0565 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[35]`
- **DE:** ihr
- **CURRENT:** ihr — ustedes
- **NEW:** ihr — a ella
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En esta serie de pronombres dativos, «ihr» significa «a ella», no «ustedes».

---

## #785 ES-KURSS-LESSONS-LV2-0566 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[36]`
- **DE:** uns
- **CURRENT:** uns — mamás
- **NEW:** uns — a nosotros
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El pronombre dativo «uns» significa «a nosotros», no «mamás».

---

## #786 ES-KURSS-LESSONS-LV2-0568 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** En presente singular, la 1ª y 3ª personas son iguales.
- **NEW:** En presente, las formas de la 1.ª y 3.ª persona del singular son iguales.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «En presente singular» resulta poco natural y la frase debe especificar que se trata de las formas del singular. También se recomienda la abreviatura normativa «1.ª» y «3.ª».

---

## #787 ES-KURSS-LESSONS-LV2-0570 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[7].text`
- **DE:** —
- **CURRENT:** Wollen significa querer hacer algo deliberadamente.
- **NEW:** Wollen expresa la voluntad o la intención de hacer algo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Hacer algo deliberadamente» introduce un matiz de acción intencionada que no corresponde necesariamente a wollen y hace que la explicación suene poco natural.

---

## #788 ES-KURSS-LESSONS-LV2-0571 [LABOT]

- **Lesson:** lesson14
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[8].text`
- **DE:** —
- **CURRENT:** Mögen expresa un deseo o agrado.
- **NEW:** Mögen expresa agrado o preferencia.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Mögen se usa principalmente para expresar que algo gusta o resulta agradable. Presentarlo como expresión de «deseo» puede confundirlo con wollen o con möchte.

---

## #789 ES-KURSS-LESSONS-LV2-0572 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[8].examples[0]`
- **DE:** Ich mag die Suppe nicht essen.
- **CURRENT:** Ich mag die Suppe nicht essen. — No quiero comer la sopa.
- **NEW:** Ich mag die Suppe nicht essen. — No me gusta comer la sopa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción «no quiero» presenta mögen como equivalente directo de wollen. En este ejemplo, mögen expresa que no gusta comer la sopa, aunque la frase alemana puede implicar reticencia.

---

## #790 ES-KURSS-LESSONS-LV2-0573 [LABOT]

- **Lesson:** lesson14
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
- **DE:** Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.
- **CURRENT:** Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.
- **NEW:** Del mismo modo, en español, la g de «signos» puede sonar más cercana a una k.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En «signos», la g no está ante s, sino ante n. La formulación actual describe incorrectamente la posición de la letra y puede inducir a una regla fonética equivocada.

---

## #791 ES-KURSS-LESSONS-LV2-0574 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[0].lv`
- **DE:** Wer will fleißig lernen?
- **CURRENT:** ¿Quién quiere estudiar mucho?
- **NEW:** ¿Quién quiere estudiar con mucho empeño?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Fleißig significa «con diligencia», «con empeño» o «aplicadamente», no simplemente «mucho», que expresa cantidad.

---

## #792 ES-KURSS-LESSONS-LV2-0575 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[1].lv`
- **DE:** Alle Schüler wollen fleißig lernen.
- **CURRENT:** Todos los estudiantes quieren estudiar mucho.
- **NEW:** Todos los estudiantes quieren estudiar con mucho empeño.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción de fleißig como «mucho» pierde el sentido de estudiar diligentemente o con empeño.

---

## #793 ES-KURSS-LESSONS-LV2-0576 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[2].lv`
- **DE:** Wer muss heute kommen?
- **CURRENT:** ¿Quién debería venir hoy?
- **NEW:** ¿Quién tiene que venir hoy?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Muss expresa obligación («tener que»), mientras que «debería» suele expresar recomendación, posibilidad o una obligación atenuada.

---

## #794 ES-KURSS-LESSONS-LV2-0577 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[4].lv`
- **DE:** Du musst den Brief schreiben.
- **CURRENT:** Tienes que escribir una carta.
- **NEW:** Tienes que escribir la carta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa el artículo definido den. «Una carta» cambia la referencia de una carta concreta a cualquier carta.

---

## #795 ES-KURSS-LESSONS-LV2-0578 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[5].lv`
- **DE:** Wer muss fleißig lernen?
- **CURRENT:** ¿Quién necesita estudiar mucho?
- **NEW:** ¿Quién tiene que estudiar con mucho empeño?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Muss expresa obligación («tener que»), no únicamente necesidad. Además, fleißig indica diligencia o empeño, no cantidad de estudio.

---

## #796 ES-KURSS-LESSONS-LV2-0579 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[6].lv`
- **DE:** Die Schüler müssen fleißig lernen.
- **CURRENT:** Los estudiantes deben estudiar mucho.
- **NEW:** Los estudiantes tienen que estudiar con mucho empeño.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Deben» puede ser una traducción válida de müssen, pero «mucho» no reproduce fleißig, que significa «con diligencia» o «con empeño».

---

## #797 ES-KURSS-LESSONS-LV2-0580 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[10].lv`
- **DE:** Wer muss das Buch lesen?
- **CURRENT:** ¿Quién debería leer el libro?
- **NEW:** ¿Quién tiene que leer el libro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «muss» expresa obligación («tener que»), no una obligación hipotética o recomendación («debería»).

---

## #798 ES-KURSS-LESSONS-LV2-0581 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[11].lv`
- **DE:** Der Bruder muss das Buch lesen.
- **CURRENT:** El hermano debe leer un libro.
- **NEW:** El hermano tiene que leer el libro.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa «das Buch» («el libro»), mientras que «un libro» cambia el sentido; además, «muss» se traduce más precisamente como «tiene que» en este contexto.

---

## #799 ES-KURSS-LESSONS-LV2-0582 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[12].lv`
- **DE:** Ich mag nicht singen.
- **CURRENT:** No quiero cantar.
- **NEW:** No me gusta cantar.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Ich mag nicht singen» significa que no gusta cantar, no que no se quiera cantar.

---

## #800 ES-KURSS-LESSONS-LV2-0583 [LABOT]

- **Lesson:** lesson14
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[13].lv`
- **DE:** Der Vater muss einen Tisch kaufen.
- **CURRENT:** Papá tiene que comprar una mesa.
- **NEW:** El padre tiene que comprar una mesa.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «Der Vater» corresponde a «el padre»; «papá» añade un registro familiar que no está expresado en el original.

---

## #801 ES-KURSS-LESSONS-LV2-0584 [LABOT]

- **Lesson:** lesson14
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la conjugación correcta y pon la frase en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción didáctica; conviene especificar que la frase debe ponerse en plural.

---

## #802 ES-KURSS-LESSONS-LV2-0586 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.intro`
- **DE:** —
- **CURRENT:** Decimoquinta conferencia: sollen, dürfen, essen y palabras frutales.
- **NEW:** Decimoquinta lección: sollen, dürfen, essen y palabras sobre frutas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Conferencia» no corresponde al tipo de contenido y «palabras frutales» no es una expresión natural para referirse a vocabulario sobre frutas.

---

## #803 ES-KURSS-LESSONS-LV2-0587 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[0]`
- **DE:** sollen
- **CURRENT:** sollen — debería
- **NEW:** sollen — deber
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La forma de diccionario sollen se traduce aquí como «deber» o «tener que»; «debería» es una forma condicional y no corresponde a la entrada del verbo.

---

## #804 ES-KURSS-LESSONS-LV2-0594 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[9]`
- **DE:** du darfst
- **CURRENT:** du darfst — usted puede
- **NEW:** du darfst — tú puedes
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** du corresponde a «tú», no a «usted». La traducción actual cambia la persona y el registro del pronombre.

---

## #805 ES-KURSS-LESSONS-LV2-0595 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[12]`
- **DE:** ihr dürft
- **CURRENT:** ihr dürft — usted puede
- **NEW:** ihr dürft — vosotros podéis
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** ihr es la segunda persona plural informal y no corresponde a «usted», que es singular y formal.

---

## #806 ES-KURSS-LESSONS-LV2-0597 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[19]`
- **DE:** entzweischneiden
- **CURRENT:** entzweischneiden — cortado por la mitad
- **NEW:** entzweischneiden — cortar por la mitad
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La entrada alemana es un infinitivo; la traducción española debe mantener el infinitivo. «Cortado» es un participio.

---

## #807 ES-KURSS-LESSONS-LV2-0599 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[35]`
- **DE:** du isst
- **CURRENT:** du isst — usted come
- **NEW:** du isst — tú comes
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «du» es el pronombre informal de segunda persona singular y corresponde a «tú», no a «usted».

---

## #808 ES-KURSS-LESSONS-LV2-0600 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[38]`
- **DE:** ihr esst
- **CURRENT:** ihr esst — tú comes
- **NEW:** ihr esst — vosotros coméis
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ihr» es la segunda persona plural informal y corresponde a «vosotros», no a «tú».

---

## #809 ES-KURSS-LESSONS-LV2-0601 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Sollen significa necesitar en el sentido del deber.
- **NEW:** Sollen expresa deber u obligación, normalmente por indicación de otra persona.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Sollen» no significa principalmente «necesitar»; esa traducción confunde el verbo modal con «müssen» y la redacción española resulta poco natural.

---

## #810 ES-KURSS-LESSONS-LV2-0603 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_GRAMMAR · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[1]`
- **DE:** sollen
- **CURRENT:** sollen — debería
- **NEW:** sollen — deber
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Sollen» está en infinitivo, mientras que «debería» es una forma condicional de tercera persona singular. La traducción debe mantener la forma léxica del infinitivo.

---

## #811 ES-KURSS-LESSONS-LV2-0604 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Dürfen significa estar permitido. En Dürfen, la vocal raíz es a en singular y ü en plural.
- **NEW:** Dürfen significa «tener permiso». En el verbo dürfen, la vocal del radical es a en singular y ü en plural.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #812 ES-KURSS-LESSONS-LV2-0605 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[4].text`
- **DE:** —
- **CURRENT:** Essen es el siguiente.
- **NEW:** El verbo essen se conjuga así:
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La frase actual es poco natural y no expresa claramente que a continuación se presenta la conjugación del verbo.

---

## #813 ES-KURSS-LESSONS-LV2-0606 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Si el proyecto utiliza escritura moderna, puede escribir: du isst, er/sie/es isst, ihr esst.
- **NEW:** Con la ortografía moderna, se escriben las formas: du isst, er/sie/es isst, ihr esst.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Si el proyecto utiliza escritura moderna» introduce innecesariamente un proyecto y suena poco natural. La redacción debe referirse directamente a la ortografía y presentar las formas como ejemplos.

---

## #814 ES-KURSS-LESSONS-LV2-0607 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** En el verbo compuesto entzweischneiden, el énfasis está en el prefijo entzweí-, por lo que en tiempo presente el prefijo se separa y se coloca al final de la oración.
- **NEW:** En el verbo entzweischneiden, el énfasis recae en el prefijo separable entzwei-, por lo que, en presente, este se separa y se coloca al final de la oración.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #815 ES-KURSS-LESSONS-LV2-0608 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[5].lv`
- **DE:** Nein, die Pflaumen sollst du nicht essen, sie sind unreif.
- **CURRENT:** No, no hace falta que te comas las ciruelas, no han llegado.
- **NEW:** No, no debes comerte las ciruelas; están verdes.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Sollst du nicht essen» expresa prohibición u obligación negativa («no debes comer»), no falta de necesidad. «Sie sind unreif» significa que están verdes o inmaduras, no que «no han llegado».

---

## #816 ES-KURSS-LESSONS-LV2-0609 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[6].lv`
- **DE:** Isst du einen Apfel oder eine Birne?
- **CURRENT:** ¿Comiste una manzana o una pera?
- **NEW:** ¿Comes una manzana o una pera?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Isst du» está en presente, mientras que «comiste» está en pretérito.

---

## #817 ES-KURSS-LESSONS-LV2-0610 [LABOT]

- **Lesson:** lesson15
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[10].lv`
- **DE:** Wer muss lernen?
- **CURRENT:** ¿Quién necesita estudiar?
- **NEW:** ¿Quién tiene que estudiar?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Muss» expresa obligación («tener que»), mientras que «necesita» expresa necesidad y no reproduce con precisión el valor modal del alemán.

---

## #818 ES-KURSS-LESSONS-LV2-0611 [LABOT]

- **Lesson:** lesson15
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Escribe la forma verbal correcta y úsala en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción de ejercicio. La propuesta indica con claridad qué debe hacer el alumno.

---

## #819 ES-KURSS-LESSONS-LV2-0613 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.intro`
- **DE:** —
- **CURRENT:** Decimosexta conferencia: dativo, geben, sich nähern y ejercicios dativos.
- **NEW:** Decimosexta lección: el dativo, geben, sich nähern y ejercicios sobre el dativo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #820 ES-KURSS-LESSONS-LV2-0614 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[0]`
- **DE:** Wem schenkt der Vater ein Buch?
- **CURRENT:** Wem schenkt der Vater ein Buch?
- **NEW:** ¿A quién le regala el padre un libro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #821 ES-KURSS-LESSONS-LV2-0615 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[1]`
- **DE:** Der Vater schenkt dem Sohne ein Buch.
- **CURRENT:** Der Vater schenkt dem Sohne ein Buch.
- **NEW:** El padre le regala un libro al hijo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #822 ES-KURSS-LESSONS-LV2-0616 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[2]`
- **DE:** Der Vater schenkt den Söhnen Bücher.
- **CURRENT:** Der Vater schenkt den Söhnen Bücher.
- **NEW:** El padre les regala libros a los hijos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #823 ES-KURSS-LESSONS-LV2-0617 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[3]`
- **DE:** Wem nähert sich die Mutter?
- **CURRENT:** Wem nähert sich die Mutter?
- **NEW:** ¿A quién se acerca la madre?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #824 ES-KURSS-LESSONS-LV2-0618 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[4]`
- **DE:** Die Mutter nähert sich der Tochter.
- **CURRENT:** Die Mutter nähert sich der Tochter.
- **NEW:** La madre se acerca a la hija.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #825 ES-KURSS-LESSONS-LV2-0619 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[5]`
- **DE:** Die Mutter nähert sich den Töchtern.
- **CURRENT:** Die Mutter nähert sich den Töchtern.
- **NEW:** La madre se acerca a las hijas.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #826 ES-KURSS-LESSONS-LV2-0620 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[6]`
- **DE:** Wem gibt die Magd Brot und Milch?
- **CURRENT:** Wem gibt die Magd Brot und Milch?
- **NEW:** ¿A quién le da la criada pan y leche?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #827 ES-KURSS-LESSONS-LV2-0621 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[7]`
- **DE:** Die Magd gibt dem Kinde Brot und Milch.
- **CURRENT:** Die Magd gibt dem Kinde Brot und Milch.
- **NEW:** La criada le da pan y leche al niño.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #828 ES-KURSS-LESSONS-LV2-0622 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[8]`
- **DE:** Die Magd gibt den Kindern Brot und Milch.
- **CURRENT:** Die Magd gibt den Kindern Brot und Milch.
- **NEW:** La criada les da pan y leche a los niños.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #829 ES-KURSS-LESSONS-LV2-0623 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[9]`
- **DE:** Wem gehorchen die Kinder?
- **CURRENT:** Wem gehorchen die Kinder?
- **NEW:** ¿A quién obedecen los niños?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #830 ES-KURSS-LESSONS-LV2-0624 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[10]`
- **DE:** Sie gehorchen den Eltern.
- **CURRENT:** Sie gehorchen den Eltern.
- **NEW:** Obedecen a sus padres.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #831 ES-KURSS-LESSONS-LV2-0625 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[11]`
- **DE:** Wem gehorcht der Hund?
- **CURRENT:** Wem gehorcht der Hund?
- **NEW:** ¿A quién obedece el perro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #832 ES-KURSS-LESSONS-LV2-0626 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[12]`
- **DE:** Der Hund gehorcht dem Knechte.
- **CURRENT:** Der Hund gehorcht dem Knechte.
- **NEW:** El perro obedece al criado.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #833 ES-KURSS-LESSONS-LV2-0627 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[13]`
- **DE:** Wem gehören die Felder, die Wiesen und die Wälder?
- **CURRENT:** Wem gehören die Felder, die Wiesen und die Wälder?
- **NEW:** ¿A quién pertenecen los campos, los prados y los bosques?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #834 ES-KURSS-LESSONS-LV2-0628 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[14]`
- **DE:** Die Felder, die Wiesen und die Wälder gehören den Bauern und den Bäuerinnen.
- **CURRENT:** Die Felder, die Wiesen und die Wälder gehören den Bauern und den Bäuerinnen.
- **NEW:** Los campos, los prados y los bosques pertenecen a los agricultores y las agricultoras.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #835 ES-KURSS-LESSONS-LV2-0629 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[15]`
- **DE:** Wem folgt der Hund?
- **CURRENT:** Wem folgt der Hund?
- **NEW:** ¿A quién sigue el perro?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #836 ES-KURSS-LESSONS-LV2-0630 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[16]`
- **DE:** Der Hund folgt dem Jäger.
- **CURRENT:** Der Hund folgt dem Jäger.
- **NEW:** El perro sigue al cazador.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #837 ES-KURSS-LESSONS-LV2-0631 [LABOT]

- **Lesson:** lesson16
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[17]`
- **DE:** Der Hund ist dem Jäger treu.
- **CURRENT:** Der Hund ist dem Jäger treu.
- **NEW:** El perro es fiel al cazador.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.

---

## #838 ES-KURSS-LESSONS-LV2-0632 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[0]`
- **DE:** wem
- **CURRENT:** wem — kam?
- **NEW:** wem — kam?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #839 ES-KURSS-LESSONS-LV2-0633 [LABOT]

- **Lesson:** lesson16
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[18]`
- **DE:** die Felder
- **CURRENT:** die Felder — campos / campos
- **NEW:** die Felder — campos
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La barra combina dos traducciones idénticas y redundantes en un campo dirigido al alumno.

---

## #840 ES-KURSS-LESSONS-LV2-0634 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[0].heading`
- **DE:** —
- **CURRENT:** Dativs
- **NEW:** Dativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #841 ES-KURSS-LESSONS-LV2-0635 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** El dativo responde a la pregunta: ¿wem? - ¿A quien?
- **NEW:** El dativo responde a la pregunta: ¿wem? — ¿A quién?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta la tilde en «quién». Se conserva «wem?» porque es el ejemplo alemán que se está explicando.

---

## #842 ES-KURSS-LESSONS-LV2-0636 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[1][0]`
- **DE:** Nominativ
- **CURRENT:** Nominativ
- **NEW:** Nominativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #843 ES-KURSS-LESSONS-LV2-0637 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[2][0]`
- **DE:** Dativ
- **CURRENT:** Dativ
- **NEW:** Dativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #844 ES-KURSS-LESSONS-LV2-0638 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[3][0]`
- **DE:** Akkusativ
- **CURRENT:** Akkusativ
- **NEW:** Acusativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #845 ES-KURSS-LESSONS-LV2-0639 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[1][0]`
- **DE:** Nominativ
- **CURRENT:** Nominativ
- **NEW:** Nominativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #846 ES-KURSS-LESSONS-LV2-0640 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[2][0]`
- **DE:** Dativ
- **CURRENT:** Dativ
- **NEW:** Dativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #847 ES-KURSS-LESSONS-LV2-0641 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[3][0]`
- **DE:** Akkusativ
- **CURRENT:** Akkusativ
- **NEW:** Acusativo
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #848 ES-KURSS-LESSONS-LV2-0642 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_NATURALNESS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Los sustantivos masculinos y neutros en dativo singular pueden llevar la terminación -e. Hoy en día, este final suele descartarse.
- **NEW:** Los sustantivos masculinos y neutros en dativo singular pueden llevar la terminación -e. Hoy en día, esta terminación suele omitirse.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Este final» resulta poco natural y menos preciso en este contexto; «esta terminación» y «omitirse» son formulaciones más idiomáticas para describir una terminación gramatical.

---

## #849 ES-KURSS-LESSONS-LV2-0644 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].heading`
- **DE:** —
- **CURRENT:** Bez artikula
- **NEW:** Bez artikula
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #850 ES-KURSS-LESSONS-LV2-0646 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[0].lv`
- **DE:** Wen ruft der Vater?
- **CURRENT:** ¿Cómo se llama el padre?
- **NEW:** ¿A quién llama el padre?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La traducción actual pregunta por el nombre del padre, pero la frase alemana pregunta a quién llama el padre.

---

## #851 ES-KURSS-LESSONS-LV2-0647 [FALSE_POSITIVE]

- **Lesson:** lesson16
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[4].lv`
- **DE:** Wem gehorcht der Hund?
- **CURRENT:** Kam paklausa soles?
- **NEW:** Kam paklausa soles?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #852 ES-KURSS-LESSONS-LV2-0648 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[6].lv`
- **DE:** Wieviel Hunde hat der Jäger?
- **CURRENT:** ¿Cuantos perros tiene el cazador?
- **NEW:** ¿Cuántos perros tiene el cazador?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta la tilde en el interrogativo «cuántos».

---

## #853 ES-KURSS-LESSONS-LV2-0649 [LABOT]

- **Lesson:** lesson16
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[12].lv`
- **DE:** Wer nähert sich den Schülern und Schülerinnen?
- **CURRENT:** ¿Qué se acerca a los escolares y las niñas?
- **NEW:** ¿Quién se acerca a los alumnos y las alumnas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa «Wer» («quién»), no «qué», porque pregunta por personas. «Escolares» también resulta menos preciso aquí que «alumnos y alumnas».

---

## #854 ES-KURSS-LESSONS-LV2-0650 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.hints.tapToRevealGerman`
- **DE:** —
- **CURRENT:** Toque la tarjeta para ver la traducción al alemán.
- **NEW:** Toca la tarjeta para ver la traducción al alemán.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El tratamiento formal «Toque» es inconsistente con el tono informal de la indicación relacionada «Toca la tarjeta».

---

## #855 ES-KURSS-LESSONS-LV2-0651 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #856 ES-KURSS-LESSONS-LV2-0652 [LABOT]

- **Lesson:** lesson16
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa el caso correcto y ponlo en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #857 ES-KURSS-LESSONS-LV2-0656 [FALSE_POSITIVE]

- **Lesson:** lesson17
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[3]`
- **DE:** womit
- **CURRENT:** womit — ar ko?
- **NEW:** womit — ar ko?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #858 ES-KURSS-LESSONS-LV2-0658 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9]`
- **DE:** der Schuldiener
- **CURRENT:** der Schuldiener — asistente de escuela
- **NEW:** der Schuldiener — conserje de la escuela
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Asistente de escuela» resulta poco natural y no refleja bien el sentido habitual de Schuldiener en este contexto.

---

## #859 ES-KURSS-LESSONS-LV2-0659 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]`
- **DE:** die Diele
- **CURRENT:** die Diele — piso
- **NEW:** die Diele — vestíbulo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Die Diele se refiere normalmente a un vestíbulo, recibidor o pasillo de entrada; «piso» no corresponde a ese significado en este contexto.

---

## #860 ES-KURSS-LESSONS-LV2-0662 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Los verbos graben, fangen, auffangen tienen diéresis en la 2ª y 3ª persona del singular.
- **NEW:** En graben, fangen y auffangen, la vocal de la raíz cambia a ä en la 2.ª y 3.ª persona del singular.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #861 ES-KURSS-LESSONS-LV2-0663 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Los verbos compuestos auffangen y abwischen llevan tilde en el prefijo. Por tanto, el prefijo presente se separa y se coloca al final de la frase.
- **NEW:** Los verbos compuestos auffangen y abwischen tienen un prefijo separable. Por tanto, el prefijo verbal se separa y se coloca al final de la oración.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #862 ES-KURSS-LESSONS-LV2-0664 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** Fegen y wischen significan barrer, pero el uso es diferente.
- **NEW:** Fegen significa «barrer», mientras que wischen significa «limpiar o pasar un paño»; su uso es diferente.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** wischen no significa «barrer»; se refiere a limpiar pasando un paño, una mopa u otra superficie de limpieza.

---

## #863 ES-KURSS-LESSONS-LV2-0666 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[1]`
- **DE:** En wieder, la e final es abierta.
- **CURRENT:** En wieder, la e final es abierta.
- **NEW:** En wieder, la e final se pronuncia como una vocal neutra o reducida [ə].
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La e final de wieder no es una e abierta [ɛ], sino una vocal átona reducida, normalmente transcrita [ə].

---

## #864 ES-KURSS-LESSONS-LV2-0667 [FALSE_POSITIVE]

- **Lesson:** lesson17
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[4].prompt`
- **DE:** Der Knecht hilft diesem Tischler, jener Frau, dem Fräulein.
- **CURRENT:** Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein)
- **NEW:** Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein)
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #865 ES-KURSS-LESSONS-LV2-0668 [LABOT]

- **Lesson:** lesson17
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[2].lv`
- **DE:** Was wischt das Mädchen ab?
- **CURRENT:** ¿Ko meitene noslauka?
- **NEW:** ¿Qué limpia la niña?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** El texto está en letón, no en español.

---

## #866 ES-KURSS-LESSONS-LV2-0669 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[7].lv`
- **DE:** Spricht sie mit dem Freunde?
- **CURRENT:** ¿Está hablando con una amiga?
- **NEW:** ¿Está hablando con un amigo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa «dem Freunde», que se refiere a un amigo masculino; el español actual indica una amiga. El ejemplo alemán se conserva tal como está para esta auditoría.

---

## #867 ES-KURSS-LESSONS-LV2-0670 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv`
- **DE:** Ich halte den Spaten mit der Hand.
- **CURRENT:** Estoy sosteniendo una pala con la mano.
- **NEW:** Sostengo la pala con la mano.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán expresa una acción habitual o presente («Ich halte») y se refiere a la pala determinada («den Spaten»), mientras que el español usa una perífrasis progresiva y un artículo indefinido.

---

## #868 ES-KURSS-LESSONS-LV2-0671 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv`
- **DE:** Womit arbeiten wir?
- **CURRENT:** ¿Con quién trabajamos?
- **NEW:** ¿Con qué trabajamos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Womit» significa «con qué», no «con quién».

---

## #869 ES-KURSS-LESSONS-LV2-0672 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv`
- **DE:** Mit wem geht der Bruder?
- **CURRENT:** ¿Con qué va el hermano?
- **NEW:** ¿Con quién va el hermano?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Mit wem» significa «con quién», no «con qué».

---

## #870 ES-KURSS-LESSONS-LV2-0673 [LABOT]

- **Lesson:** lesson17
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv`
- **DE:** Der Bruder geht mit dem Vater, mit der Mutter, mit dem Lehrer, mit dem Onkel, mit der Tante, mit dem Vetter, mit der Base.
- **CURRENT:** Un hermano va con su padre, con su madre, con su maestra, con su tío, con su prima, con su prima.
- **NEW:** El hermano va con su padre, con su madre, con su maestro, con su tío, con su primo y con su prima.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Hay varios desajustes: «Der Bruder» es «el hermano», «der Lehrer» es masculino («el maestro»), y «der Vetter» y «die Base» corresponden a «el primo» y «la prima». Además, la traducción repite «prima» y pierde la distinción del alemán.

---

## #871 ES-KURSS-LESSONS-LV2-0674 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #872 ES-KURSS-LESSONS-LV2-0675 [LABOT]

- **Lesson:** lesson17
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa el caso correcto y ponlo en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #873 ES-KURSS-LESSONS-LV2-0679 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[0]`
- **DE:** wohin
- **CURRENT:** wohin — kurp?
- **NEW:** wohin — kurp?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #874 ES-KURSS-LESSONS-LV2-0680 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[1]`
- **DE:** wo
- **CURRENT:** wo — kur?
- **NEW:** wo — kur?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #875 ES-KURSS-LESSONS-LV2-0681 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[8]`
- **DE:** das Körbchen
- **CURRENT:** das Körbchen — una cesta
- **NEW:** das Körbchen — cestita
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Körbchen» es un diminutivo; «una cesta» omite ese matiz y además introduce un artículo innecesario en una entrada de vocabulario.

---

## #876 ES-KURSS-LESSONS-LV2-0683 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21]`
- **DE:** die Diele
- **CURRENT:** die Diele — piso
- **NEW:** die Diele — recibidor
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Diele significa «recibidor» o «vestíbulo», no «piso» en este contexto.

---

## #877 ES-KURSS-LESSONS-LV2-0684 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Las preposiciones an, in, auf pueden acompañar tanto a Akkusativ como a Dativo.
- **NEW:** Las preposiciones an, in y auf pueden acompañar tanto al acusativo como al dativo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #878 ES-KURSS-LESSONS-LV2-0685 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** Si la acción indica un cambio de dirección o de lugar, se utiliza Akkusativ. Pregunta: ¿quién? - ¿dónde?
- **NEW:** Si la acción indica un cambio de dirección o de lugar, se utiliza el acusativo. Pregunta: ¿adónde?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** ¿Quién? significa «who» y ¿dónde? significa «where»; la pregunta correspondiente a wohin? es «¿adónde?».

---

## #879 ES-KURSS-LESSONS-LV2-0686 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[0]`
- **DE:** Ich gehe an den Tisch.
- **CURRENT:** Ich gehe an den Tisch. — Es eju pie galda.
- **NEW:** Ich gehe an den Tisch. — Es eju pie galda.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #880 ES-KURSS-LESSONS-LV2-0687 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[1]`
- **DE:** Ich stelle den Korb auf die Bank.
- **CURRENT:** Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.
- **NEW:** Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #881 ES-KURSS-LESSONS-LV2-0688 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text`
- **DE:** —
- **CURRENT:** Estos verbos suelen indicar dirección y por tanto responden a la pregunta ¿wohin?.
- **NEW:** Estos verbos suelen indicar dirección y, por tanto, responden a la pregunta ¿wohin?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas.

---

## #882 ES-KURSS-LESSONS-LV2-0689 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[0]`
- **DE:** gehen
- **CURRENT:** gehen — iet
- **NEW:** gehen — iet
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #883 ES-KURSS-LESSONS-LV2-0690 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[2]`
- **DE:** fahren
- **CURRENT:** fahren — braukt
- **NEW:** fahren — braukt
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #884 ES-KURSS-LESSONS-LV2-0691 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[3]`
- **DE:** laufen
- **CURRENT:** laufen — skriet
- **NEW:** laufen — skriet
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #885 ES-KURSS-LESSONS-LV2-0692 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[4]`
- **DE:** fliegen
- **CURRENT:** fliegen — lidot
- **NEW:** fliegen — lidot
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #886 ES-KURSS-LESSONS-LV2-0694 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_ORTHOGRAPHY · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text`
- **DE:** —
- **CURRENT:** Estos verbos suelen indicar ubicación o estado y por tanto responden a la pregunta ¿wo?.
- **NEW:** Estos verbos suelen indicar ubicación o estado y, por tanto, responden a la pregunta ¿wo?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas.

---

## #887 ES-KURSS-LESSONS-LV2-0695 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[1]`
- **DE:** sich befinden
- **CURRENT:** sich befinden — atrasties
- **NEW:** sich befinden — atrasties
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #888 ES-KURSS-LESSONS-LV2-0697 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[4]`
- **DE:** sitzen
- **CURRENT:** sitzen — sentarse
- **NEW:** sitzen — estar sentado
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Sitzen» describe estar sentado; «sentarse» expresa la acción de adoptar esa posición.

---

## #889 ES-KURSS-LESSONS-LV2-0698 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[6]`
- **DE:** finden
- **CURRENT:** finden — atrast
- **NEW:** finden — atrast
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #890 ES-KURSS-LESSONS-LV2-0699 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** Los sustantivos suelen aparecer sin article.
- **NEW:** Los sustantivos suelen aparecer sin artículo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #891 ES-KURSS-LESSONS-LV2-0700 [FALSE_POSITIVE]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].examples[0]`
- **DE:** Ich trinke Milch.
- **CURRENT:** Ich trinke Milch. — Es dzeru pienu.
- **NEW:** Ich trinke Milch. — Es dzeru pienu.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #892 ES-KURSS-LESSONS-LV2-0702 [LABOT]

- **Lesson:** lesson18
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].heading`
- **DE:** —
- **CURRENT:** in + vieta
- **NEW:** in + ubicación
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** «vieta» es letón, no español.

---

## #893 ES-KURSS-LESSONS-LV2-0703 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text`
- **DE:** —
- **CURRENT:** Si la preposición in no se traduce como "en", pero expresa una ubicación, se puede traducir con el locativo.
- **NEW:** Si la preposición in no se traduce como «en», sino que expresa una ubicación, se utiliza el dativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En alemán, la ubicación estática con «in» se construye con dativo; «locativo» no es el caso gramatical pertinente en esta explicación.

---

## #894 ES-KURSS-LESSONS-LV2-0704 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[0].lv`
- **DE:** Wohin kommt der Diener?
- **CURRENT:** ¿De dónde viene el servidor?
- **NEW:** ¿Adónde va el criado?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La pregunta alemana «Wohin kommt der Diener?» pregunta por el destino, no por el origen. Además, «Diener» corresponde aquí a «criado» o «sirviente», no necesariamente a «servidor».

---

## #895 ES-KURSS-LESSONS-LV2-0705 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[2].lv`
- **DE:** Wo arbeitet er?
- **CURRENT:** donde trabaja
- **NEW:** ¿Dónde trabaja?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «Wo arbeitet er?» es una pregunta directa. La versión actual es una subordinada relativa y omite los signos de interrogación.

---

## #896 ES-KURSS-LESSONS-LV2-0706 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv`
- **DE:** Sie suchen Beeren in dem Walde.
- **CURRENT:** Recogen bayas en el bosque.
- **NEW:** Buscan bayas en el bosque.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Suchen» significa «buscar», no «recoger». La traducción actual cambia la acción descrita.

---

## #897 ES-KURSS-LESSONS-LV2-0707 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[9].lv`
- **DE:** Die Mutter stellt den Korb auf den Schrank.
- **CURRENT:** La madre pone la cesta en el armario.
- **NEW:** La madre pone la cesta sobre el armario.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán indica que la cesta se coloca encima del armario (auf den Schrank), no dentro del armario.

---

## #898 ES-KURSS-LESSONS-LV2-0708 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].lv`
- **DE:** Der Schüler legt die Hefte in die Mappe.
- **CURRENT:** El estudiante pone los cuadernos en la bolsa.
- **NEW:** El estudiante pone los cuadernos en la carpeta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Mappe significa «carpeta» o «portafolios» en este contexto, no «bolsa».

---

## #899 ES-KURSS-LESSONS-LV2-0709 [LABOT]

- **Lesson:** lesson18
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv`
- **DE:** Die Hefte sind jetzt in der Mappe.
- **CURRENT:** Las cartas ya están en la bolsa.
- **NEW:** Los cuadernos ya están en la carpeta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El ejemplo alemán habla de cuadernos (Hefte) que están en una carpeta (Mappe); «cartas» y «bolsa» cambian ambos significados.

---

## #900 ES-KURSS-LESSONS-LV2-0710 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #901 ES-KURSS-LESSONS-LV2-0711 [LABOT]

- **Lesson:** lesson18
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa el caso correcto y escribe la respuesta en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #902 ES-KURSS-LESSONS-LV2-0713 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.lessonItems.19.menuDesc (lesson header subtitle / menu)`
- **DE:** —
- **CURRENT:** Wechselpräpositionen: vor, hinder, unter, über, neben, zwischen.
- **NEW:** Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La preposición alemana «hinter» aparece escrita incorrectamente como «hinder».

---

## #903 ES-KURSS-LESSONS-LV2-0714 [LABOT]

- **Lesson:** lesson19
- **Category:** TRANSLATION · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.intro`
- **DE:** —
- **CURRENT:** Decimonovena Conferencia: vor, hinder, unter, über, neben, zwischen con Akkusativ o Dativ.
- **NEW:** Lección 19: vor, hinter, unter, über, neben y zwischen con acusativo o dativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Conferencia» no es natural para una lección del curso; «Akkusativ» y «Dativ» son términos alemanes que deben traducirse como «acusativo» y «dativo». Además, «hinder» contiene un error ortográfico.

---

## #904 ES-KURSS-LESSONS-LV2-0715 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[11]`
- **DE:** Der Eimer steht unter der Bank.
- **CURRENT:** Der Eimer steht unter der Bank.
- **NEW:** Der Eimer steht unter der Bank.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #905 ES-KURSS-LESSONS-LV2-0716 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[12]`
- **DE:** Wohin hängt der Vater das Bild?
- **CURRENT:** Wohin hängt der Vater das Bild?
- **NEW:** Wohin hängt der Vater das Bild?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #906 ES-KURSS-LESSONS-LV2-0717 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[13]`
- **DE:** Er hängt das Bild über das Klavier.
- **CURRENT:** Er hängt das Bild über das Klavier.
- **NEW:** Er hängt das Bild über das Klavier.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #907 ES-KURSS-LESSONS-LV2-0718 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[14]`
- **DE:** Wo hängt das Bild?
- **CURRENT:** Wo hängt das Bild?
- **NEW:** Wo hängt das Bild?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #908 ES-KURSS-LESSONS-LV2-0719 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[15]`
- **DE:** Das Bild hängt über dem Klavier.
- **CURRENT:** Das Bild hängt über dem Klavier.
- **NEW:** Das Bild hängt über dem Klavier.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #909 ES-KURSS-LESSONS-LV2-0720 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[16]`
- **DE:** Wohin setzt sich der Knabe?
- **CURRENT:** Wohin setzt sich der Knabe?
- **NEW:** Wohin setzt sich der Knabe?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #910 ES-KURSS-LESSONS-LV2-0721 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[17]`
- **DE:** Er setzt sich neben den Großvater und die Großmutter.
- **CURRENT:** Er setzt sich neben den Großvater und die Großmutter.
- **NEW:** Er setzt sich neben den Großvater und die Großmutter.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #911 ES-KURSS-LESSONS-LV2-0722 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[18]`
- **DE:** Wo sitzt er?
- **CURRENT:** Wo sitzt er?
- **NEW:** Wo sitzt er?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #912 ES-KURSS-LESSONS-LV2-0723 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[19]`
- **DE:** Er sitzt neben dem Großvater und der Großmutter.
- **CURRENT:** Er sitzt neben dem Großvater und der Großmutter.
- **NEW:** Er sitzt neben dem Großvater und der Großmutter.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #913 ES-KURSS-LESSONS-LV2-0724 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[20]`
- **DE:** Wohin stellt die Magd den Stuhl?
- **CURRENT:** Wohin stellt die Magd den Stuhl?
- **NEW:** Wohin stellt die Magd den Stuhl?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #914 ES-KURSS-LESSONS-LV2-0725 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[21]`
- **DE:** Sie stellt den Stuhl zwischen das Klavier und den Spiegel.
- **CURRENT:** Sie stellt den Stuhl zwischen das Klavier und den Spiegel.
- **NEW:** Sie stellt den Stuhl zwischen das Klavier und den Spiegel.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #915 ES-KURSS-LESSONS-LV2-0726 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[22]`
- **DE:** Wo steht der Stuhl?
- **CURRENT:** Wo steht der Stuhl?
- **NEW:** Wo steht der Stuhl?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #916 ES-KURSS-LESSONS-LV2-0727 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[0].items[23]`
- **DE:** Der Stuhl steht zwischen dem Klavier und dem Spiegel.
- **CURRENT:** Der Stuhl steht zwischen dem Klavier und dem Spiegel.
- **NEW:** Der Stuhl steht zwischen dem Klavier und dem Spiegel.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #917 ES-KURSS-LESSONS-LV2-0728 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[0]`
- **DE:** vor
- **CURRENT:** vor — antes
- **NEW:** vor — delante de
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En este contexto espacial, vor significa «delante de», no «antes».

---

## #918 ES-KURSS-LESSONS-LV2-0729 [LABOT]

- **Lesson:** lesson19
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[30]`
- **DE:** das Land
- **CURRENT:** das Land — país / tierra
- **NEW:** das Land — país
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La barra combina dos significados distintos en un campo destinado a una equivalencia léxica. En este contexto, «país» es la traducción adecuada; «tierra» corresponde a otro uso.

---

## #919 ES-KURSS-LESSONS-LV2-0730 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[0].heading`
- **DE:** —
- **CURRENT:** Wechselpräpositionen
- **NEW:** Wechselpräpositionen
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #920 ES-KURSS-LESSONS-LV2-0731 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** En esta conferencia, continuamos con preposiciones que pueden ir tanto con Akkusativ como con Dativo.
- **NEW:** En esta lección, continuamos con las preposiciones que pueden regir tanto acusativo como dativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Conferencia» resulta poco natural para una unidad de un curso. Además, «regir acusativo o dativo» es una formulación gramatical más precisa en español.

---

## #921 ES-KURSS-LESSONS-LV2-0733 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[2].text`
- **DE:** —
- **CURRENT:** Si hay una ubicación, la pregunta es ¿wo? y utiliza el dativo.
- **NEW:** Si se indica una ubicación, la pregunta es «¿dónde?» y se utiliza el dativo.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Wo?» es una palabra alemana que quedó sin traducir; en español corresponde a «¿dónde?».

---

## #922 ES-KURSS-LESSONS-LV2-0735 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[4].heading`
- **DE:** —
- **CURRENT:** Kopsavilkums: wohin?
- **NEW:** Kopsavilkums: wohin?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #923 ES-KURSS-LESSONS-LV2-0736 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[4].text`
- **DE:** —
- **CURRENT:** ¿Quién? → Ackusativo
- **NEW:** ¿Adónde? → Acusativo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La pregunta está mal traducida: «wohin?» significa «¿adónde?», no «¿quién?». «Ackusativo» además contiene una grafía incorrecta y no es la denominación española.

---

## #924 ES-KURSS-LESSONS-LV2-0737 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[5].heading`
- **DE:** —
- **CURRENT:** Kopsavilkums: wo?
- **NEW:** Kopsavilkums: wo?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #925 ES-KURSS-LESSONS-LV2-0738 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[5].text`
- **DE:** —
- **CURRENT:** ¿Quién? → Dativo
- **NEW:** ¿Dónde? → Dativo
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La pregunta alemana «wo?» significa «¿dónde?», no «¿quién?».

---

## #926 ES-KURSS-LESSONS-LV2-0739 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_NATURALNESS · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[6].text`
- **DE:** —
- **CURRENT:** gehen - ir cuando la acción significa caminar continuamente. treten - entrar, acercarse, pisar, si la caminata termina con una interrupción en la acción.
- **NEW:** gehen = ir, cuando la acción indica un desplazamiento continuo. treten = entrar, acercarse o pisar, cuando el desplazamiento termina con una interrupción de la acción.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La redacción es poco natural y presenta una construcción defectuosa («pisar, si...»). También conviene separar claramente las definiciones de ambos verbos.

---

## #927 ES-KURSS-LESSONS-LV2-0740 [LABOT]

- **Lesson:** lesson19
- **Category:** PEDAGOGICAL_ISSUE · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[4]`
- **DE:** En wachsen, ch se pronuncia como k.
- **CURRENT:** En wachsen, ch se pronuncia como k.
- **NEW:** En wachsen, ch se pronuncia como la «j» española.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En «wachsen», la combinación «ch» no se pronuncia como «k»; corresponde al sonido fricativo velar alemán, que puede aproximarse a la «j» española.

---

## #928 ES-KURSS-LESSONS-LV2-0741 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[1].lv`
- **DE:** Er hat eine Karte in der Hand.
- **CURRENT:** Tiene una card en la mano.
- **NEW:** Tiene una card en la mano.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #929 ES-KURSS-LESSONS-LV2-0742 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[3].lv`
- **DE:** Er zeigt den Schülern und Schülerinnen viele Länder, Städte, Berge, Seen und Flüsse.
- **CURRENT:** Muestra a los niños y niñas muchas ciudades, tierras, montañas, lagos y ríos.
- **NEW:** Muestra a los alumnos y alumnas muchos países, ciudades, montañas, lagos y ríos.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Länder» significa «países», no «tierras», y el orden de la enumeración alemana comienza por países. «Alumnos y alumnas» refleja mejor «Schülern und Schülerinnen» en este contexto escolar.

---

## #930 ES-KURSS-LESSONS-LV2-0743 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[4].lv`
- **DE:** Dann ruft der Lehrer einen Schüler auf.
- **CURRENT:** Luego el profesor llama al alumno.
- **NEW:** Luego el profesor llama a un alumno.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa «einen Schüler», indefinido («a un alumno»), mientras que el texto español usa un referente definido.

---

## #931 ES-KURSS-LESSONS-LV2-0744 [FALSE_POSITIVE]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[5].lv`
- **DE:** Der Schüler tritt an die Karte.
- **CURRENT:** Skolnieks pieiet pie kartes.
- **NEW:** Skolnieks pieiet pie kartes.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #932 ES-KURSS-LESSONS-LV2-0745 [LABOT]

- **Lesson:** lesson19
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[6].lv`
- **DE:** Er bleibt vor der Karte stehen.
- **CURRENT:** Él permanece de pie frente a la card.
- **NEW:** Él se queda de pie frente al mapa.
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** «card» es un resto de inglés. En este contexto, «Karte» se refiere al mapa, y «se queda de pie» resulta más natural que «permanece de pie».

---

## #933 ES-KURSS-LESSONS-LV2-0746 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[7].lv`
- **DE:** Er nennt und zeigt dem Lehrer die Städte, die Berge und die Flüsse.
- **CURRENT:** Nombra y muestra al maestro ciudades, montañas y ríos.
- **NEW:** Nombra las ciudades, las montañas y los ríos y se los muestra al profesor.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La construcción «muestra al maestro ciudades...» es poco natural y omite los artículos definidos presentes en el contexto alemán. La propuesta hace explícita la referencia de los pronombres.

---

## #934 ES-KURSS-LESSONS-LV2-0747 [LABOT]

- **Lesson:** lesson19
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[8].lv`
- **DE:** So arbeitet der Lehrer in der Klasse.
- **CURRENT:** Así trabaja un profesor en un aula.
- **NEW:** Así trabaja el profesor en el aula.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa artículos definidos («der Lehrer», «der Klasse»); «un profesor en un aula» cambia el sentido a una referencia indefinida.

---

## #935 ES-KURSS-LESSONS-LV2-0748 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #936 ES-KURSS-LESSONS-LV2-0749 [LABOT]

- **Lesson:** lesson19
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Elige el caso correcto y hazlo en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #937 ES-KURSS-LESSONS-LV2-0753 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[0]`
- **DE:** Dieses Haus ist hoch.
- **CURRENT:** Dieses Haus ist hoch.
- **NEW:** Dieses Haus ist hoch.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #938 ES-KURSS-LESSONS-LV2-0754 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[1]`
- **DE:** Es hat drei Stockwerke.
- **CURRENT:** Es hat drei Stockwerke.
- **NEW:** Es hat drei Stockwerke.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #939 ES-KURSS-LESSONS-LV2-0755 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[2]`
- **DE:** In den Mauern sind Fenster und Türen.
- **CURRENT:** In den Mauern sind Fenster und Türen.
- **NEW:** In den Mauern sind Fenster und Türen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #940 ES-KURSS-LESSONS-LV2-0756 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[3]`
- **DE:** Die Mauern sind aus Stein.
- **CURRENT:** Die Mauern sind aus Stein.
- **NEW:** Die Mauern sind aus Stein.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #941 ES-KURSS-LESSONS-LV2-0757 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[4]`
- **DE:** Die Wände und Türen sind aus Holz.
- **CURRENT:** Die Wände und Türen sind aus Holz.
- **NEW:** Die Wände und Türen sind aus Holz.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #942 ES-KURSS-LESSONS-LV2-0758 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[5]`
- **DE:** Die Fenster sind aus Glas.
- **CURRENT:** Die Fenster sind aus Glas.
- **NEW:** Die Fenster sind aus Glas.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #943 ES-KURSS-LESSONS-LV2-0759 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[6]`
- **DE:** In dem Hause sind zehn Wohnungen.
- **CURRENT:** In dem Hause sind zehn Wohnungen.
- **NEW:** In dem Hause sind zehn Wohnungen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #944 ES-KURSS-LESSONS-LV2-0760 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[7]`
- **DE:** Jede Wohnung hat drei Zimmer, ein Vorhaus und eine Küche.
- **CURRENT:** Jede Wohnung hat drei Zimmer, ein Vorhaus und eine Küche.
- **NEW:** Jede Wohnung hat drei Zimmer, ein Vorhaus und eine Küche.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #945 ES-KURSS-LESSONS-LV2-0761 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[8]`
- **DE:** Unter dem Dache ist der Boden.
- **CURRENT:** Unter dem Dache ist der Boden.
- **NEW:** Unter dem Dache ist der Boden.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #946 ES-KURSS-LESSONS-LV2-0762 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[9]`
- **DE:** Unter dem Hause ist der Keller.
- **CURRENT:** Unter dem Hause ist der Keller.
- **NEW:** Unter dem Hause ist der Keller.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #947 ES-KURSS-LESSONS-LV2-0763 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[10]`
- **DE:** Auf dem Dache sind drei Schornsteine.
- **CURRENT:** Auf dem Dache sind drei Schornsteine.
- **NEW:** Auf dem Dache sind drei Schornsteine.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #948 ES-KURSS-LESSONS-LV2-0764 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[11]`
- **DE:** Der Schornsteinfeger steigt aufs Dach und reinigt die Schornsteine.
- **CURRENT:** Der Schornsteinfeger steigt aufs Dach und reinigt die Schornsteine.
- **NEW:** Der Schornsteinfeger steigt aufs Dach und reinigt die Schornsteine.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #949 ES-KURSS-LESSONS-LV2-0765 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[12]`
- **DE:** Die Stadt hat viele Häuser.
- **CURRENT:** Die Stadt hat viele Häuser.
- **NEW:** Die Stadt hat viele Häuser.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #950 ES-KURSS-LESSONS-LV2-0766 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[13]`
- **DE:** In den Häusern sind viele Wohnungen.
- **CURRENT:** In den Häusern sind viele Wohnungen.
- **NEW:** In den Häusern sind viele Wohnungen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #951 ES-KURSS-LESSONS-LV2-0767 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[14]`
- **DE:** In den Wohnungen leben viele Menschen.
- **CURRENT:** In den Wohnungen leben viele Menschen.
- **NEW:** In den Wohnungen leben viele Menschen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #952 ES-KURSS-LESSONS-LV2-0768 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[15]`
- **DE:** Alle Menschen arbeiten.
- **CURRENT:** Alle Menschen arbeiten.
- **NEW:** Alle Menschen arbeiten.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #953 ES-KURSS-LESSONS-LV2-0769 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[16]`
- **DE:** Alle Menschen müssen arbeiten.
- **CURRENT:** Alle Menschen müssen arbeiten.
- **NEW:** Alle Menschen müssen arbeiten.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #954 ES-KURSS-LESSONS-LV2-0770 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[17]`
- **DE:** Wir wohnen in dem vierten Stockwerk.
- **CURRENT:** Wir wohnen in dem vierten Stockwerk.
- **NEW:** Wir wohnen in dem vierten Stockwerk.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #955 ES-KURSS-LESSONS-LV2-0771 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[18]`
- **DE:** Ich muss das Holz in das vierte Stockwerk tragen.
- **CURRENT:** Ich muss das Holz in das vierte Stockwerk tragen.
- **NEW:** Ich muss das Holz in das vierte Stockwerk tragen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #956 ES-KURSS-LESSONS-LV2-0772 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[19]`
- **DE:** Ich bringe das Holz in die Küche.
- **CURRENT:** Ich bringe das Holz in die Küche.
- **NEW:** Ich bringe das Holz in die Küche.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #957 ES-KURSS-LESSONS-LV2-0773 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[0].items[20]`
- **DE:** Ich stecke das Holz in den Ofen.
- **CURRENT:** Ich stecke das Holz in den Ofen.
- **NEW:** Ich stecke das Holz in den Ofen.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #958 ES-KURSS-LESSONS-LV2-0774 [LABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[4]`
- **DE:** das Holz
- **CURRENT:** das Holz — madera / leña
- **NEW:** das Holz — madera
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La barra combina dos sentidos distintos. Para una ficha léxica básica conviene elegir una traducción principal; «leña» puede tratarse por separado si es el sentido contextual relevante.

---

## #959 ES-KURSS-LESSONS-LV2-0775 [LABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[8]`
- **DE:** das Vorhaus
- **CURRENT:** das Vorhaus — vestíbulo / pasillo
- **NEW:** das Vorhaus — vestíbulo
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La barra combina dos traducciones distintas. Conviene seleccionar una equivalencia principal para evitar presentar alternativas no diferenciadas.

---

## #960 ES-KURSS-LESSONS-LV2-0776 [LABOT]

- **Lesson:** lesson20
- **Category:** MULTIPLE_TRANSLATIONS · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[23]`
- **DE:** brennen
- **CURRENT:** brennen — arder / quemar
- **NEW:** brennen — arder
- **OWNER_DECISION:** LABOT: reduce to single main translation per audit proposal.
- **Pamatojums:** La barra combina sentidos que dependen de la transitividad: «arder» y «quemar» no son equivalentes en todos los contextos. Debe seleccionarse un sentido principal o explicarse la diferencia.

---

## #961 ES-KURSS-LESSONS-LV2-0777 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[24]`
- **DE:** licht
- **CURRENT:** licht — luz
- **NEW:** licht — claro / luminoso
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** En el contexto «licht und hell», «licht» funciona como adjetivo y significa «claro» o «luminoso», no el sustantivo «luz».

---

## #962 ES-KURSS-LESSONS-LV2-0778 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].heading`
- **DE:** —
- **CURRENT:** Dativs ar wann?
- **NEW:** Dativs ar wann?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #963 ES-KURSS-LESSONS-LV2-0779 [LABOT]

- **Lesson:** lesson20
- **Category:** TRANSLATION · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].text`
- **DE:** —
- **CURRENT:** Palabras de tráfico que responden a la pregunta ¿quieres? en las conferencias 19 y 20. —¿cuándo?, está junto al dativo. El dativo responde no sólo a wo? — ¿dónde?, pero también en wann? - ¿cuando?
- **NEW:** Las expresiones temporales que responden a la pregunta «¿cuándo?» en las lecciones 19 y 20 se construyen con dativo. El dativo responde no solo a «wo?» («¿dónde?»), sino también a «wann?» («¿cuándo?»).
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El texto contiene varias traducciones erróneas o antinaturales («palabras de tráfico», «¿quieres?», «conferencias») y una construcción incomprensible. Además, «¿cuando?» debe llevar tilde; las formas alemanas «wo?» y «wann?» pueden mantenerse como terminología de la explicación.

---

## #964 ES-KURSS-LESSONS-LV2-0780 [LABOT]

- **Lesson:** lesson20
- **Category:** ES_TERMINOLOGY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[1].text`
- **DE:** —
- **CURRENT:** Muchas preposiciones se unen al article.
- **NEW:** Muchas preposiciones se unen al artículo.
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #965 ES-KURSS-LESSONS-LV2-0782 [LABOT]

- **Lesson:** lesson20
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[5]`
- **DE:** En die Küche y die Dächer, ch se pronuncia como el ich
- **CURRENT:** En die Küche y die Dächer, ch se pronuncia como el ich-Laut alemán.
- **NEW:** En die Küche y die Dächer, ch se pronuncia como el sonido ich del alemán.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «ich-Laut» es una denominación alemana incrustada en una frase en español y resulta poco natural para el alumno; conviene expresar el término fonético en español.

---

## #966 ES-KURSS-LESSONS-LV2-0783 [LABOT]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[0].lv`
- **DE:** Was ist hoch?
- **CURRENT:** ¿Kas ir aumenta?
- **NEW:** ¿Qué es alto?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** Contiene texto letón («Kas ir») mezclado con español y no expresa correctamente la pregunta alemana «Was ist hoch?».

---

## #967 ES-KURSS-LESSONS-LV2-0784 [LABOT]

- **Lesson:** lesson20
- **Category:** ES_ORTHOGRAPHY · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[1].lv`
- **DE:** Wieviel Stockwerke hat das Haus?
- **CURRENT:** ¿Cuantos pisos tiene la casa?
- **NEW:** ¿Cuántos pisos tiene la casa?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Falta la tilde en el interrogativo «cuántos».

---

## #968 ES-KURSS-LESSONS-LV2-0785 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[4].lv`
- **DE:** Woraus sind die Türen?
- **CURRENT:** ¿De qué está hecha la puerta?
- **NEW:** ¿De qué están hechas las puertas?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán usa plural («die Türen»), mientras que el español usa singular («la puerta»).

---

## #969 ES-KURSS-LESSONS-LV2-0786 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[6].lv`
- **DE:** Wo sind zehn Wohnungen?
- **CURRENT:** ¿Dónde están los diez apartamentos?
- **NEW:** ¿Dónde hay diez apartamentos?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El artículo definido «los» añade una referencia específica que no aparece en el alemán «zehn Wohnungen».

---

## #970 ES-KURSS-LESSONS-LV2-0787 [LABOT]

- **Lesson:** lesson20
- **Category:** TRANSLATION · **Severity:** LOW · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[7].lv`
- **DE:** Was hat jede Wohnung?
- **CURRENT:** ¿Qué hay en cada apartamento?
- **NEW:** ¿Qué tiene cada apartamento?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** La formulación actual pregunta qué hay dentro de cada apartamento; el alemán «Was hat jede Wohnung?» pregunta qué tiene cada apartamento.

---

## #971 ES-KURSS-LESSONS-LV2-0788 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[11].lv`
- **DE:** Wohin steigt der Schornsteinfeger?
- **CURRENT:** ¿Adónde va el deshollinador?
- **NEW:** ¿Adónde sube el deshollinador?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Steigt» expresa subir o trepar, no simplemente ir; la traducción actual pierde ese matiz.

---

## #972 ES-KURSS-LESSONS-LV2-0789 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[14].lv`
- **DE:** Was hat die Stadt?
- **CURRENT:** ¿Cuál es la ciudad?
- **NEW:** ¿Qué tiene la ciudad?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «¿Cuál es la ciudad?» significa «Which is the city?» y no corresponde a «Was hat die Stadt?» («¿Qué tiene la ciudad?»).

---

## #973 ES-KURSS-LESSONS-LV2-0790 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[18].lv`
- **DE:** Wer muss arbeiten?
- **CURRENT:** ¿Quién necesita trabajar?
- **NEW:** ¿Quién tiene que trabajar?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Muss arbeiten» expresa obligación («tener que trabajar»), no necesidad personal («necesitar trabajar»).

---

## #974 ES-KURSS-LESSONS-LV2-0791 [FALSE_POSITIVE]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[21].lv`
- **DE:** Wohin steckst du das Holz?
- **CURRENT:** Kurp tu liec malku?
- **NEW:** Kurp tu liec malku?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #975 ES-KURSS-LESSONS-LV2-0792 [LABOT]

- **Lesson:** lesson20
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[22].lv`
- **DE:** Was zündest du an?
- **CURRENT:** ¿Ko tu aizdedzini?
- **NEW:** ¿Qué enciendes?
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** La palabra «Ko» y el resto de la frase pertenecen al letón; no es texto español.

---

## #976 ES-KURSS-LESSONS-LV2-0793 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[23].lv`
- **DE:** Was brennt hell?
- **CURRENT:** ¿Qué arde intensamente?
- **NEW:** ¿Qué arde con fuerza?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán «brennt hell» se refiere a arder brillantemente o con una llama viva; «intensamente» no reproduce exactamente ese matiz.

---

## #977 ES-KURSS-LESSONS-LV2-0794 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El identificador y el contexto indican que el ejercicio trata del caso gramatical, no de la conjugación verbal.

---

## #978 ES-KURSS-LESSONS-LV2-0795 [LABOT]

- **Lesson:** lesson20
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Usa el caso correcto y ponlo en plural!
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «Conjugación» no corresponde a un ejercicio de casos; además, la formulación propuesta expresa de forma más precisa la tarea.

---

## #979 ES-KURSS-LESSONS-LV2-0799 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[1]`
- **DE:** sägen
- **CURRENT:** sägen — sierra
- **NEW:** sägen — serrar
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «sägen» es un verbo alemán; «sierra» es un sustantivo español. La traducción verbal correcta en este contexto es «serrar».

---

## #980 ES-KURSS-LESSONS-LV2-0800 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_NATURALNESS · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[2]`
- **DE:** spalten
- **CURRENT:** spalten — dividir
- **NEW:** spalten — partir
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Aunque «dividir» puede ser una traducción general, para la acción de partir madera «partir» es la opción natural y precisa en español.

---

## #981 ES-KURSS-LESSONS-LV2-0804 [LABOT]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** CRITICAL · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[2]`
- **DE:** aus
- **CURRENT:** aus — no / iz
- **NEW:** aus — de / desde
- **OWNER_DECISION:** LABOT: apply proposedEs per audit.
- **Pamatojums:** La traducción contiene texto corrupto o restos no españoles («no / iz») y no transmite el significado de la preposición alemana.

---

## #982 ES-KURSS-LESSONS-LV2-0806 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_ORTHOGRAPHY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[2].heading`
- **DE:** —
- **CURRENT:** Woher? — no kurienes?
- **NEW:** Woher? — ¿De dónde?
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** «kurienes» no es una palabra española y la pregunta carece de la puntuación interrogativa inicial.

---

## #983 ES-KURSS-LESSONS-LV2-0807 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[13].prompt`
- **DE:** Sie geht in die Küche zurück.
- **CURRENT:** Wohin geht sie zurück?
- **NEW:** Wohin geht sie zurück?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #984 ES-KURSS-LESSONS-LV2-0808 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[14].prompt`
- **DE:** Sie arbeitet fleißig in der Küche.
- **CURRENT:** Wo arbeitet sie fleißig?
- **NEW:** Wo arbeitet sie fleißig?
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #985 ES-KURSS-LESSONS-LV2-0809 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[0].lv`
- **DE:** Alle Hefte sind in der Mappe.
- **CURRENT:** Todos los cuadernos están en la bolsa.
- **NEW:** Todos los cuadernos están en la carpeta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Mappe significa «carpeta» o «portafolios», no «bolsa».

---

## #986 ES-KURSS-LESSONS-LV2-0810 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv`
- **DE:** Ich nehme die Hefte aus der Mappe.
- **CURRENT:** Saco los cuadernos de mi bolso.
- **NEW:** Saco los cuadernos de la carpeta.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El alemán indica Mappe («carpeta»), no Tasche/bolso; además, «mi» no aparece en el contexto alemán.

---

## #987 ES-KURSS-LESSONS-LV2-0811 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[2].lv`
- **DE:** Ich ziehe die Uhr aus der Tasche.
- **CURRENT:** Llevo un reloj en mi bolsillo.
- **NEW:** Saco el reloj del bolso.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** El español actual expresa llevar un reloj en el bolsillo, mientras que el alemán expresa sacar el reloj de una Tasche.

---

## #988 ES-KURSS-LESSONS-LV2-0812 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[3].lv`
- **DE:** Ein Eimer mit Milch steht im Keller.
- **CURRENT:** En el sótano hay un cubo de leche.
- **NEW:** En el sótano hay un cubo con leche.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Eimer mit Milch indica un cubo que contiene leche; «cubo de leche» puede interpretarse como un cubo destinado a la leche.

---

## #989 ES-KURSS-LESSONS-LV2-0813 [FALSE_POSITIVE]

- **Lesson:** lesson21
- **Category:** FOREIGN_LEFTOVER · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[4].lv`
- **DE:** Ich trage den Eimer aus dem Keller.
- **CURRENT:** Es nesu spaini no pagraba.
- **NEW:** Es nesu spaini no pagraba.
- **OWNER_DECISION:** FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.
- **Pamatojums:** Field contains German pedagogical notation acceptable in ES Kurss context.

---

## #990 ES-KURSS-LESSONS-LV2-0814 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[5].lv`
- **DE:** Ich nehme die Mütze vom Kopfe.
- **CURRENT:** Me quito el sombrero de la cabeza.
- **NEW:** Me quito el gorro de la cabeza.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Mütze corresponde a «gorro» o «gorra», no a «sombrero».

---

## #991 ES-KURSS-LESSONS-LV2-0815 [LABOT]

- **Lesson:** lesson21
- **Category:** SEMANTIC_MISMATCH · **Severity:** MEDIUM · **Source:** luna-v2
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[8].lv`
- **DE:** Die Noten liegen auf dem Klavier.
- **CURRENT:** La partitura está en el piano.
- **NEW:** Las partituras están sobre el piano.
- **OWNER_DECISION:** LABOT: apply audit proposedEs — verified against DE context and lesson semantics.
- **Pamatojums:** Noten es plural y, en este contexto, se refiere a partituras o notas musicales colocadas sobre el piano.

---

## #992 ES-KURSS-LESSONS-LV2-0816 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.fillCase`
- **DE:** —
- **CURRENT:** Ejercicio I — Usa la conjugación correcta
- **NEW:** Ejercicio I — Usa el caso correcto
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---

## #993 ES-KURSS-LESSONS-LV2-0817 [LABOT]

- **Lesson:** lesson21
- **Category:** ES_TERMINOLOGY · **Severity:** HIGH · **Source:** luna-v2
- **Path:** `kurss.exerciseMeta.chooseCasePlural`
- **DE:** —
- **CURRENT:** ¡Pon la conjugación correcta y hazlo en plural!
- **NEW:** ¡Pon el caso correcto y hazlo en plural!
- **OWNER_DECISION:** LABOT: replace English 'article' with Spanish 'artículo' in grammar text.
- **Pamatojums:** ES grammar terminology must use artículo, not English article.

---
