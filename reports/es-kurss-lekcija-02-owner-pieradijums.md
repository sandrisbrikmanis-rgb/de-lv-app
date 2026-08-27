# ES Kurss — Lekcija 2 — OWNER gala lēmumi

**Main:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Atradumi:** 27 · **LABOT:** 11 · **NELABOT:** 12 · **FALSE_POSITIVE:** 3 · **TECHNICAL_DEFER:** 1 · **Rebased:** 12

## 1. Oriģinālais

| Audit ID | Path | Audita CURRENT | Audita statuss | Audita NEW |
|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L02 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson2 | inline:6561 | TECHNICAL_DEFER |  |
| ES-KURSS-LESSONS-DET-0020 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[0]:Diálogos/oraciones (summary title) | Diálogos/oraciones | FALSE_POSITIVE | Diálogos/oraciones |
| ES-KURSS-LESSONS-DET-0021 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[0] | spielen — jugar; jugar | NELABOT | spielen — jugar; jugar |
| ES-KURSS-LESSONS-DET-0022 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[0] | Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i. | LABOT | En las palabras arbeiten y zeichnen, el diptongo ei se pronuncia aproximadamente como el sonido letón de una e abierta, seguido de i. |
| ES-KURSS-LESSONS-DET-0023 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[1] | Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen). | LABOT | El grupo de consonantes sp se pronuncia como šp: spielen (špīlen). |
| ES-KURSS-LESSONS-DET-0024 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[2] | Darbības vārdā tun u izrunājams gari visās personās. | LABOT | En el verbo tun, la u se pronuncia larga en todas las personas. |
| ES-KURSS-LESSONS-DET-0025 | kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | FALSE_POSITIVE | Lección {lesson} · Traducir: {current} / {total} |
| ES-KURSS-LESSONS-LV2-0040 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[1] | nein — trabajar | LABOT | nein — no |
| ES-KURSS-LESSONS-LV2-0041 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[2] | nicht — preguntar | LABOT | nicht — no |
| ES-KURSS-LESSONS-LV2-0042 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[3] | arbeiten — was tut er? ¿Qué está haciendo? | LABOT | arbeiten — trabajar |
| ES-KURSS-LESSONS-LV2-0043 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[4] | fragen — ¿qué hacen ellos? | LABOT | fragen — preguntar |
| ES-KURSS-LESSONS-LV2-0044 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[5] | was tut er? — responder | LABOT | was tut er? — ¿qué hace él? |
| ES-KURSS-LESSONS-LV2-0045 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[6] | was tun sie? — calcular | LABOT | was tun sie? — ¿qué hacen ellos? |
| ES-KURSS-LESSONS-LV2-0046 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[7] | aber — dibujar | LABOT | aber — pero |
| ES-KURSS-LESSONS-LV2-0047 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[8] | antworten — Marie | LABOT | antworten — responder |
| ES-KURSS-LESSONS-LV2-0051 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → course-example[11] | nosotros rechnen | FALSE_POSITIVE | nosotros rechnen |
| ES-KURSS-LESSONS-LV2-0052 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-note[1] | En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa. | LABOT | En las oraciones interrogativas que comienzan con una palabra interrogativa, como «qué», «quién» o «por qué», el verbo va inmediatamente después de la palabra interrogativa. |
| ES-KURSS-LESSONS-LV2-0053 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[0] | 1Terminaciones con e | LABOT | 1. Terminaciones con e |
| ES-KURSS-LESSONS-LV2-0054 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[1] | 2Palabra en cuestión | LABOT | 2. Palabra interrogativa |
| ES-KURSS-LESSONS-LV2-0055 | COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[2] | 3Negación con nicht | LABOT | 3. Negación con nicht |
| ES-KURSS-LESSONS-LV2-0056 | lesson2TrainingCardsEs[1].front | pregunta Pablo. | LABOT | Pablo pregunta. |
| ES-KURSS-LESSONS-LV2-0057 | lesson2TrainingCardsEs[6].front | No, no cantan, cuentan. | LABOT | No, no cantan, calculan. |
| ES-KURSS-LESSONS-LV2-0058 | lesson2TrainingCardsEs[8].front | Me paro y canto. | LABOT | Estoy de pie y canto. |
| ES-KURSS-LESSONS-LV2-0059 | lesson2TrainingCardsEs[9].front | ¿Dibujas? | LABOT | ¿Dibujan? |
| ES-KURSS-LESSONS-LV2-0060 | lesson2TrainingCardsEs[10].front | Sí, empatamos, pero María juega. | LABOT | Sí, dibujamos, pero María juega. |
| ES-KURSS-LESSONS-LV2-0061 | lesson2TrainingCardsEs[11].front | qué estás haciendo | LABOT | qué están haciendo |
| ES-KURSS-LESSONS-LV2-0062 | lesson2TrainingCardsEs[13].front | ¿Qué está sucediendo? | LABOT | ¿Quién se va? |

## 2. izmaiņas

| Audit ID | Faktiskais main CURRENT | Rebased | OWNER izvērtējums |
|---|---|---|---|
| ES-KURSS-LESSONS-STR-L02 | inline:6561 | NĒ | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0020 | Diálogos/oraciones | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0021 | spielen — jugar | JĀ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0022 | En las palabras arbeiten y zeichnen, el diptongo ei se pronuncia aproximadamente como «ai». | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i. |
| ES-KURSS-LESSONS-DET-0023 | Al inicio de una palabra o sílaba, sp se pronuncia «shp»: spielen (špīlen). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen). |
| ES-KURSS-LESSONS-DET-0024 | En el verbo tun, la u se pronuncia larga en todas las personas. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Darbības vārdā tun u izrunājams gari visās personās. |
| ES-KURSS-LESSONS-DET-0025 | Lección {lesson} · Traducir: {current} / {total} | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0040 | nein — No | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: nein — trabajar |
| ES-KURSS-LESSONS-LV2-0041 | nicht — No | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: nicht — preguntar |
| ES-KURSS-LESSONS-LV2-0042 | arbeiten — trabajar | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: arbeiten — was tut er? ¿Qué está haciendo? |
| ES-KURSS-LESSONS-LV2-0043 | fragen — preguntar | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: fragen — ¿qué hacen ellos? |
| ES-KURSS-LESSONS-LV2-0044 | was tut er? — ¿Qué hace él? | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: was tut er? — responder |
| ES-KURSS-LESSONS-LV2-0045 | was tun sie? — ¿Qué hacen ellos? | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: was tun sie? — calcular |
| ES-KURSS-LESSONS-LV2-0046 | aber — pero | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: aber — dibujar |
| ES-KURSS-LESSONS-LV2-0047 | antworten — responder | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: antworten — Marie |
| ES-KURSS-LESSONS-LV2-0051 | nosotros rechnen | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0052 | En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa. | NĒ | Hay repeticiones erróneas («¿qué?» y «¿por qué?») y «OMS» es un resto extranjero o una traducción incorrecta. La redacción también necesita naturalidad y puntuación. |
| ES-KURSS-LESSONS-LV2-0053 | 1Terminaciones con e | NĒ | Falta un espacio o signo de puntuación entre el número y el encabezado. |
| ES-KURSS-LESSONS-LV2-0054 | 2Palabra en cuestión | NĒ | Falta separación después del número y «palabra en cuestión» no es una denominación natural ni precisa para este concepto gramatical. |
| ES-KURSS-LESSONS-LV2-0055 | 3Negación con nicht | NĒ | Falta el espacio tras el número y la puntuación habitual de la numeración. |
| ES-KURSS-LESSONS-LV2-0056 | pregunta Pablo. | NĒ | El orden de palabras resulta poco natural en español y la oración comienza con minúscula. |
| ES-KURSS-LESSONS-LV2-0057 | No, no cantan, cuentan. | NĒ | El alemán «rechnen» significa «calcular» o «hacer cuentas», no «contar» en el sentido habitual de «cuentan». |
| ES-KURSS-LESSONS-LV2-0058 | Me paro y canto. | NĒ | «Ich stehe» expresa estar de pie; «me paro» suele significar que me detengo o que me pongo de pie. |
| ES-KURSS-LESSONS-LV2-0059 | ¿Dibujas? | NĒ | El alemán «ihr» se refiere a la segunda persona plural, no a «tú». |
| ES-KURSS-LESSONS-LV2-0060 | Sí, empatamos, pero María juega. | NĒ | «Zeichnen» significa «dibujar»; «empatamos» no corresponde al significado alemán. |
| ES-KURSS-LESSONS-LV2-0061 | qué estás haciendo | NĒ | El alemán «ihr» es segunda persona plural; «estás» es singular. |
| ES-KURSS-LESSONS-LV2-0062 | ¿Qué está sucediendo? | NĒ | «Wer geht?» significa «¿Quién se va?» o «¿Quién va?», no «¿Qué está sucediendo?». |

## 3. Gala rezultāts

| Audit ID | File | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L02 |  | COURSE_LESSON_DATA.kurssLesson2.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson2 | inline:6561 |  | **TECHNICAL_DEFER** |
| ES-KURSS-LESSONS-DET-0020 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | Diálogos/oraciones | Diálogos/oraciones | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0021 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | spielen — jugar | spielen — jugar; jugar | **NELABOT** |
| ES-KURSS-LESSONS-DET-0022 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | En las palabras arbeiten y zeichnen, el diptongo ei se pronuncia aproximadamente como «ai». |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0023 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | Al inicio de una palabra o sílaba, sp se pronuncia «shp»: spielen (špīlen). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0024 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | En el verbo tun, la u se pronuncia larga en todas las personas. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0025 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | Lección {lesson} · Traducir: {current} / {total} | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0040 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | nein — No |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0041 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | nicht — No |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0042 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | arbeiten — trabajar |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0043 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | fragen — preguntar |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0044 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | was tut er? — ¿Qué hace él? |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0045 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | was tun sie? — ¿Qué hacen ellos? |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0046 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | aber — pero |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0047 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | antworten — responder |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0051 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | nosotros rechnen | nosotros rechnen | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0052 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa. | En las oraciones interrogativas que comienzan con una palabra interrogativa, como «qué», «quién» o «por qué», el verbo va inmediatamente después de la palabra interrogativa. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0053 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | 1Terminaciones con e | 1. Terminaciones con e | **LABOT** |
| ES-KURSS-LESSONS-LV2-0054 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | 2Palabra en cuestión | 2. Palabra interrogativa | **LABOT** |
| ES-KURSS-LESSONS-LV2-0055 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | 3Negación con nicht | 3. Negación con nicht | **LABOT** |
| ES-KURSS-LESSONS-LV2-0056 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[1].front | pregunta Pablo. | Pablo pregunta. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0057 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[6].front | No, no cantan, cuentan. | No, no cantan, calculan. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0058 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[8].front | Me paro y canto. | Estoy de pie y canto. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0059 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[9].front | ¿Dibujas? | ¿Dibujan? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0060 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[10].front | Sí, empatamos, pero María juega. | Sí, dibujamos, pero María juega. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0061 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[11].front | qué estás haciendo | qué están haciendo | **LABOT** |
| ES-KURSS-LESSONS-LV2-0062 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[13].front | ¿Qué está sucediendo? | ¿Quién se va? | **LABOT** |

## Cursor COPY/PASTE targets

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0052",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-note[1]",
    "current": "En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa.",
    "new": "En las oraciones interrogativas que comienzan con una palabra interrogativa, como «qué», «quién» o «por qué», el verbo va inmediatamente después de la palabra interrogativa.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0053",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[0]",
    "current": "1Terminaciones con e",
    "new": "1. Terminaciones con e",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0054",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[1]",
    "current": "2Palabra en cuestión",
    "new": "2. Palabra interrogativa",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0055",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[2]",
    "current": "3Negación con nicht",
    "new": "3. Negación con nicht",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0056",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson2TrainingCardsEs[1].front",
    "path": "lesson2TrainingCardsEs[1].front",
    "current": "pregunta Pablo.",
    "new": "Pablo pregunta.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0057",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson2TrainingCardsEs[6].front",
    "path": "lesson2TrainingCardsEs[6].front",
    "current": "No, no cantan, cuentan.",
    "new": "No, no cantan, calculan.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0058",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson2TrainingCardsEs[8].front",
    "path": "lesson2TrainingCardsEs[8].front",
    "current": "Me paro y canto.",
    "new": "Estoy de pie y canto.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0059",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson2TrainingCardsEs[9].front",
    "path": "lesson2TrainingCardsEs[9].front",
    "current": "¿Dibujas?",
    "new": "¿Dibujan?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0060",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson2TrainingCardsEs[10].front",
    "path": "lesson2TrainingCardsEs[10].front",
    "current": "Sí, empatamos, pero María juega.",
    "new": "Sí, dibujamos, pero María juega.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0061",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson2TrainingCardsEs[11].front",
    "path": "lesson2TrainingCardsEs[11].front",
    "current": "qué estás haciendo",
    "new": "qué están haciendo",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0062",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson2TrainingCardsEs[13].front",
    "path": "lesson2TrainingCardsEs[13].front",
    "current": "¿Qué está sucediendo?",
    "new": "¿Quién se va?",
    "status": "LABOT"
  }
]
```

COPY-ONLY: main faktiskajai vērtībai precīzi jāsakrīt ar `CURRENT`; neatbilstība = SKIP. DE laukus nemainīt.
