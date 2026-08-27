# ES Kurss — Lekcija 5 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 32 · **LABOT:** 10 · **NELABOT:** 17 · **FALSE_POSITIVE:** 4 · **TECHNICAL_DEFER:** 1

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L05 |  | COURSE_LESSON_DATA.kurssLesson5.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson5 | inline:6627 |  | **TECHNICAL_DEFER** | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0061 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | Diálogos/oraciones |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0062 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | fragen (frāgen) — preguntar |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0063 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | der Lehrer (dēr lērer) — el maestro |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0064 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | gut (gūt) — bien |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0065 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | wen (vēn) — a quién |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0066 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | der Schüler (šūler) — estudiante |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0067 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | artig (ārtich) — obediente |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0068 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | lieben (līben) — amar |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0069 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | der Vater (fāter) — padre |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0070 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | La combinación tz se pronuncia «ts»: sitzen (zitsen). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen). |
| ES-KURSS-LESSONS-DET-0071 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En palabras alemanas, la v suele pronunciarse como f: der Vater (fāter). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: v vācu vārdos izrunā kā f: der Vater (fāter). |
| ES-KURSS-LESSONS-DET-0072 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | La letra ß se llama Eszett y se pronuncia como s: groß (grōs), weiß (vais). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis). |
| ES-KURSS-LESSONS-DET-0073 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En nominativo se pregunta wer? por personas y was? por cosas. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem. |
| ES-KURSS-LESSONS-DET-0074 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En acusativo se pregunta wen? por personas y was? por cosas. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Akuzatīvā jautājums ir wen? personām un was? priekšmetiem. |
| ES-KURSS-LESSONS-DET-0075 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | er/sie/es sitzt |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0076 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | Muchos sustantivos femeninos se forman con el sufijo -in: der Lehrer → die Lehrerin. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Daudz sieviešu kārtas vārdu atvasina ar galotni -die Lehrerin |
| ES-KURSS-LESSONS-DET-0077 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En una oración enunciativa, el verbo conjugado ocupa la segunda posición. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Stāstāmā teikumā darbības vārds stāv otrā vietā. |
| ES-KURSS-LESSONS-DET-0078 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0190 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | loben — elogiar |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: loben — elogio |
| ES-KURSS-LESSONS-LV2-0191 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | tadeln — reprender |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0192 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | oder (ōder) — o |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: oder (ōder) — or |
| ES-KURSS-LESSONS-LV2-0200 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?. | En español, el nominativo responde a la pregunta «¿quién?» y el acusativo responde a la pregunta «¿qué?» | **LABOT** | Hay un punto incorrecto después del signo de cierre de interrogación. También conviene delimitar las preguntas como citas dentro de la oración. |
| ES-KURSS-LESSONS-LV2-0201 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | finalización -in | Sufijo -in | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0202 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | Lugar del verbo | Posición del verbo | **LABOT** | «Posición del verbo» es la formulación más natural en español para referirse a su ubicación en la oración. |
| ES-KURSS-LESSONS-LV2-0203 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[0].front | ¿Qué ama el padre? | ¿A quién ama el padre? | **LABOT** | El alemán «Wen» pregunta por una persona en acusativo, no por una cosa; en español corresponde «a quién». |
| ES-KURSS-LESSONS-LV2-0204 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[1].front | ¿Qué elogia el maestro? | ¿A quién elogia la maestra? | **LABOT** | «Wen» significa «a quién», no «qué», y «die Lehrerin» es «la maestra», no «el maestro». |
| ES-KURSS-LESSONS-LV2-0205 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[2].front | que tomas | ¿Qué tomas? | **LABOT** | El texto pretende ser una pregunta, pero carece de signos de interrogación y de mayúscula inicial. |
| ES-KURSS-LESSONS-LV2-0206 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[4].front | ¿Qué gana un maestro? | ¿A quién reprende el maestro? | **LABOT** | La frase no corresponde al alemán «Wen tadelt der Lehrer?», que pregunta a quién reprende el maestro. |
| ES-KURSS-LESSONS-LV2-0207 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[10].front | La niña toma una pluma, una pluma y un cuchillo. | La niña toma el portaplumas, la pluma y el cuchillo. | **LABOT** | El alemán distingue «Federhalter» (portaplumas) de «Feder» (pluma), pero el español repite «pluma» y pierde esa distinción léxica. |
| ES-KURSS-LESSONS-LV2-0208 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[11].front | Ella deja el cuchillo y la pluma. | Ella deja el cuchillo y el portaplumas. | **LABOT** | «Federhalter» significa «portaplumas», no «pluma»; la traducción actual cambia el objeto mencionado. |
| ES-KURSS-LESSONS-LV2-0209 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[14].front | El niño es hablador. | El niño es bien educado. | **LABOT** | El alemán «artig» significa «bien educado» o «obediente», no «hablador». |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0200",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson5.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-note[0]",
    "current": "En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?.",
    "new": "En español, el nominativo responde a la pregunta «¿quién?» y el acusativo responde a la pregunta «¿qué?»",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0201",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson5.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[4]",
    "current": "finalización -in",
    "new": "Sufijo -in",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0202",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson5.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[5]",
    "current": "Lugar del verbo",
    "new": "Posición del verbo",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0203",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson5TrainingCardsEs[0].front",
    "path": "lesson5TrainingCardsEs[0].front",
    "current": "¿Qué ama el padre?",
    "new": "¿A quién ama el padre?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0204",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson5TrainingCardsEs[1].front",
    "path": "lesson5TrainingCardsEs[1].front",
    "current": "¿Qué elogia el maestro?",
    "new": "¿A quién elogia la maestra?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0205",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson5TrainingCardsEs[2].front",
    "path": "lesson5TrainingCardsEs[2].front",
    "current": "que tomas",
    "new": "¿Qué tomas?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0206",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson5TrainingCardsEs[4].front",
    "path": "lesson5TrainingCardsEs[4].front",
    "current": "¿Qué gana un maestro?",
    "new": "¿A quién reprende el maestro?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0207",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson5TrainingCardsEs[10].front",
    "path": "lesson5TrainingCardsEs[10].front",
    "current": "La niña toma una pluma, una pluma y un cuchillo.",
    "new": "La niña toma el portaplumas, la pluma y el cuchillo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0208",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson5TrainingCardsEs[11].front",
    "path": "lesson5TrainingCardsEs[11].front",
    "current": "Ella deja el cuchillo y la pluma.",
    "new": "Ella deja el cuchillo y el portaplumas.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0209",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson5TrainingCardsEs[14].front",
    "path": "lesson5TrainingCardsEs[14].front",
    "current": "El niño es hablador.",
    "new": "El niño es bien educado.",
    "status": "LABOT"
  }
]
```

## Obligātie apply vārti

- `CURRENT` jāsakrīt precīzi ar faktisko production vērtību.
- `CURRENT` neatbilstība = `SKIP`; aizliegts automātiski pārrakstīt vai atsvaidzināt `CURRENT`.
- Ierakstīt `NEW` precīzi, bez tulkošanas, pārfrāzēšanas vai cleanup.
- `NELABOT`, `FALSE_POSITIVE` un `TECHNICAL_DEFER` nedrīkst piemērot.
- DE puse ir STRICT READ-ONLY.
- Pēc apply: NEW exact-match, unexpected changes 0, syntax/mirror/parity PASS.
