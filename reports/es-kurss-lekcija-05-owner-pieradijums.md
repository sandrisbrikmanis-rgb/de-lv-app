# ES Kurss — Lekcija 5 — OWNER gala lēmumi

**Main:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Atradumi:** 32 · **LABOT:** 10 · **NELABOT:** 17 · **FALSE_POSITIVE:** 4 · **TECHNICAL_DEFER:** 1 · **Rebased:** 14

## 1. Oriģinālais

| Audit ID | Path | Audita CURRENT | Audita statuss | Audita NEW |
|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L05 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson5 | inline:6627 | TECHNICAL_DEFER |  |
| ES-KURSS-LESSONS-DET-0061 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[0]:Diálogos/oraciones (summary title) | Diálogos/oraciones | FALSE_POSITIVE | Diálogos/oraciones |
| ES-KURSS-LESSONS-DET-0062 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[1] | fragen (frāgen) — preguntar | NELABOT | fragen (frāgen) — preguntar |
| ES-KURSS-LESSONS-DET-0063 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[2] | der Lehrer (dēr lērer) — profesor | NELABOT | der Lehrer (dēr lērer) — profesor |
| ES-KURSS-LESSONS-DET-0064 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[3] | gut (gūt) — bueno | NELABOT | gut (gūt) — bueno |
| ES-KURSS-LESSONS-DET-0065 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[4] | wen (vēn) — qué | NELABOT | wen (vēn) — qué |
| ES-KURSS-LESSONS-DET-0066 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[6] | der Schüler (šūler) — estudiante | NELABOT | der Schüler (šūler) — estudiante |
| ES-KURSS-LESSONS-DET-0067 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[15] | artig (ārtich) — educado | NELABOT | artig (ārtich) — educado |
| ES-KURSS-LESSONS-DET-0068 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[17] | lieben (līben) — amar | NELABOT | lieben (līben) — amar |
| ES-KURSS-LESSONS-DET-0069 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[18] | der Vater (fāter) — padre | NELABOT | der Vater (fāter) — padre |
| ES-KURSS-LESSONS-DET-0070 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[0] | tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen). | LABOT | tz representa un sonido z doble y se pronuncia como z: sitzen (zicen). |
| ES-KURSS-LESSONS-DET-0071 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[1] | v vācu vārdos izrunā kā f: der Vater (fāter). | LABOT | La v en las palabras alemanas se pronuncia como f: der Vater (fāter). |
| ES-KURSS-LESSONS-DET-0072 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[2] | ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis). | LABOT | ß se llama Eszett y se pronuncia como la s letona: groß (grōs), weiß (veis). |
| ES-KURSS-LESSONS-DET-0073 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[0] | Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem. | LABOT | En alemán, en nominativo, la pregunta es wer? para las personas y was? para los objetos. |
| ES-KURSS-LESSONS-DET-0074 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[1] | Akuzatīvā jautājums ir wen? personām un was? priekšmetiem. | LABOT | En acusativo, la pregunta es wen? para las personas y was? para los objetos. |
| ES-KURSS-LESSONS-DET-0075 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[8] | er/sie/es sitzt | FALSE_POSITIVE | er/sie/es sitzt |
| ES-KURSS-LESSONS-DET-0076 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[14] | Daudz sieviešu kārtas vārdu atvasina ar galotni -die Lehrerin | LABOT | Muchos sustantivos femeninos se forman con la terminación -die Lehrerin. |
| ES-KURSS-LESSONS-DET-0077 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[17] | Stāstāmā teikumā darbības vārds stāv otrā vietā. | LABOT | En una oración enunciativa, el verbo ocupa el segundo lugar. |
| ES-KURSS-LESSONS-DET-0078 | kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | FALSE_POSITIVE | Lección {lesson} · Traducir: {current} / {total} |
| ES-KURSS-LESSONS-LV2-0190 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[5] | loben — elogio | LABOT | loben — elogiar |
| ES-KURSS-LESSONS-LV2-0191 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[12] | tadeln — pelt | FALSE_POSITIVE | tadeln — pelt |
| ES-KURSS-LESSONS-LV2-0192 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[13] | oder (ōder) — or | LABOT | oder (ōder) — o |
| ES-KURSS-LESSONS-LV2-0200 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-note[0] | En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?. | LABOT | En español, el nominativo responde a la pregunta «¿quién?» y el acusativo responde a la pregunta «¿qué?» |
| ES-KURSS-LESSONS-LV2-0201 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[4] | finalización -in | LABOT | Sufijo -in |
| ES-KURSS-LESSONS-LV2-0202 | COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → grammar-header[5] | Lugar del verbo | LABOT | Posición del verbo |
| ES-KURSS-LESSONS-LV2-0203 | lesson5TrainingCardsEs[0].front | ¿Qué ama el padre? | LABOT | ¿A quién ama el padre? |
| ES-KURSS-LESSONS-LV2-0204 | lesson5TrainingCardsEs[1].front | ¿Qué elogia el maestro? | LABOT | ¿A quién elogia la maestra? |
| ES-KURSS-LESSONS-LV2-0205 | lesson5TrainingCardsEs[2].front | que tomas | LABOT | ¿Qué tomas? |
| ES-KURSS-LESSONS-LV2-0206 | lesson5TrainingCardsEs[4].front | ¿Qué gana un maestro? | LABOT | ¿A quién reprende el maestro? |
| ES-KURSS-LESSONS-LV2-0207 | lesson5TrainingCardsEs[10].front | La niña toma una pluma, una pluma y un cuchillo. | LABOT | La niña toma el portaplumas, la pluma y el cuchillo. |
| ES-KURSS-LESSONS-LV2-0208 | lesson5TrainingCardsEs[11].front | Ella deja el cuchillo y la pluma. | LABOT | Ella deja el cuchillo y el portaplumas. |
| ES-KURSS-LESSONS-LV2-0209 | lesson5TrainingCardsEs[14].front | El niño es hablador. | LABOT | El niño es bien educado. |

## 2. izmaiņas

| Audit ID | Faktiskais main CURRENT | Rebased | OWNER izvērtējums |
|---|---|---|---|
| ES-KURSS-LESSONS-STR-L05 | inline:6627 | NĒ | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0061 | Diálogos/oraciones | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0062 | fragen (frāgen) — preguntar | NĒ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0063 | der Lehrer (dēr lērer) — el maestro | JĀ | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0064 | gut (gūt) — bien | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0065 | wen (vēn) — a quién | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0066 | der Schüler (šūler) — estudiante | NĒ | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0067 | artig (ārtich) — obediente | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0068 | lieben (līben) — amar | NĒ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0069 | der Vater (fāter) — padre | NĒ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0070 | La combinación tz se pronuncia «ts»: sitzen (zitsen). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen). |
| ES-KURSS-LESSONS-DET-0071 | En palabras alemanas, la v suele pronunciarse como f: der Vater (fāter). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: v vācu vārdos izrunā kā f: der Vater (fāter). |
| ES-KURSS-LESSONS-DET-0072 | La letra ß se llama Eszett y se pronuncia como s: groß (grōs), weiß (vais). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis). |
| ES-KURSS-LESSONS-DET-0073 | En nominativo se pregunta wer? por personas y was? por cosas. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem. |
| ES-KURSS-LESSONS-DET-0074 | En acusativo se pregunta wen? por personas y was? por cosas. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Akuzatīvā jautājums ir wen? personām un was? priekšmetiem. |
| ES-KURSS-LESSONS-DET-0075 | er/sie/es sitzt | NĒ | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0076 | Muchos sustantivos femeninos se forman con el sufijo -in: der Lehrer → die Lehrerin. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Daudz sieviešu kārtas vārdu atvasina ar galotni -die Lehrerin |
| ES-KURSS-LESSONS-DET-0077 | En una oración enunciativa, el verbo conjugado ocupa la segunda posición. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Stāstāmā teikumā darbības vārds stāv otrā vietā. |
| ES-KURSS-LESSONS-DET-0078 | Lección {lesson} · Traducir: {current} / {total} | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0190 | loben — elogiar | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: loben — elogio |
| ES-KURSS-LESSONS-LV2-0191 | tadeln — reprender | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0192 | oder (ōder) — o | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: oder (ōder) — or |
| ES-KURSS-LESSONS-LV2-0200 | En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?. | NĒ | Hay un punto incorrecto después del signo de cierre de interrogación. También conviene delimitar las preguntas como citas dentro de la oración. |
| ES-KURSS-LESSONS-LV2-0201 | finalización -in | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0202 | Lugar del verbo | NĒ | «Posición del verbo» es la formulación más natural en español para referirse a su ubicación en la oración. |
| ES-KURSS-LESSONS-LV2-0203 | ¿Qué ama el padre? | NĒ | El alemán «Wen» pregunta por una persona en acusativo, no por una cosa; en español corresponde «a quién». |
| ES-KURSS-LESSONS-LV2-0204 | ¿Qué elogia el maestro? | NĒ | «Wen» significa «a quién», no «qué», y «die Lehrerin» es «la maestra», no «el maestro». |
| ES-KURSS-LESSONS-LV2-0205 | que tomas | NĒ | El texto pretende ser una pregunta, pero carece de signos de interrogación y de mayúscula inicial. |
| ES-KURSS-LESSONS-LV2-0206 | ¿Qué gana un maestro? | NĒ | La frase no corresponde al alemán «Wen tadelt der Lehrer?», que pregunta a quién reprende el maestro. |
| ES-KURSS-LESSONS-LV2-0207 | La niña toma una pluma, una pluma y un cuchillo. | NĒ | El alemán distingue «Federhalter» (portaplumas) de «Feder» (pluma), pero el español repite «pluma» y pierde esa distinción léxica. |
| ES-KURSS-LESSONS-LV2-0208 | Ella deja el cuchillo y la pluma. | NĒ | «Federhalter» significa «portaplumas», no «pluma»; la traducción actual cambia el objeto mencionado. |
| ES-KURSS-LESSONS-LV2-0209 | El niño es hablador. | NĒ | El alemán «artig» significa «bien educado» o «obediente», no «hablador». |

## 3. Gala rezultāts

| Audit ID | File | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L05 |  | COURSE_LESSON_DATA.kurssLesson5.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson5 | inline:6627 |  | **TECHNICAL_DEFER** |
| ES-KURSS-LESSONS-DET-0061 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | Diálogos/oraciones |  | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0062 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | fragen (frāgen) — preguntar |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0063 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | der Lehrer (dēr lērer) — el maestro |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0064 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | gut (gūt) — bien |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0065 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | wen (vēn) — a quién |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0066 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | der Schüler (šūler) — estudiante |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0067 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | artig (ārtich) — obediente |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0068 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | lieben (līben) — amar |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0069 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | der Vater (fāter) — padre |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0070 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | La combinación tz se pronuncia «ts»: sitzen (zitsen). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0071 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En palabras alemanas, la v suele pronunciarse como f: der Vater (fāter). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0072 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | La letra ß se llama Eszett y se pronuncia como s: groß (grōs), weiß (vais). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0073 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En nominativo se pregunta wer? por personas y was? por cosas. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0074 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En acusativo se pregunta wen? por personas y was? por cosas. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0075 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | er/sie/es sitzt |  | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0076 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | Muchos sustantivos femeninos se forman con el sufijo -in: der Lehrer → die Lehrerin. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0077 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En una oración enunciativa, el verbo conjugado ocupa la segunda posición. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0078 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0190 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | loben — elogiar |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0191 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | tadeln — reprender |  | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0192 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | oder (ōder) — o |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0200 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | En español, el nominativo responde a la pregunta ¿quién? y el acusativo responde a la pregunta ¿qué?. | En español, el nominativo responde a la pregunta «¿quién?» y el acusativo responde a la pregunta «¿qué?» | **LABOT** |
| ES-KURSS-LESSONS-LV2-0201 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | finalización -in | Sufijo -in | **LABOT** |
| ES-KURSS-LESSONS-LV2-0202 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson5.legacyHtml | Lugar del verbo | Posición del verbo | **LABOT** |
| ES-KURSS-LESSONS-LV2-0203 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[0].front | ¿Qué ama el padre? | ¿A quién ama el padre? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0204 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[1].front | ¿Qué elogia el maestro? | ¿A quién elogia la maestra? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0205 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[2].front | que tomas | ¿Qué tomas? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0206 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[4].front | ¿Qué gana un maestro? | ¿A quién reprende el maestro? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0207 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[10].front | La niña toma una pluma, una pluma y un cuchillo. | La niña toma el portaplumas, la pluma y el cuchillo. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0208 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[11].front | Ella deja el cuchillo y la pluma. | Ella deja el cuchillo y el portaplumas. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0209 | data/es/courseTrainingCards.js | lesson5TrainingCardsEs[14].front | El niño es hablador. | El niño es bien educado. | **LABOT** |

## Cursor COPY/PASTE targets

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

COPY-ONLY: main faktiskajai vērtībai precīzi jāsakrīt ar `CURRENT`; neatbilstība = SKIP. DE laukus nemainīt.
