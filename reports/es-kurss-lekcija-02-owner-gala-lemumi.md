# ES Kurss — Lekcija 2 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 27 · **LABOT:** 11 · **NELABOT:** 12 · **FALSE_POSITIVE:** 3 · **TECHNICAL_DEFER:** 1

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L02 |  | COURSE_LESSON_DATA.kurssLesson2.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson2 | inline:6561 |  | **TECHNICAL_DEFER** | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0020 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | Diálogos/oraciones |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0021 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | spielen — jugar |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0022 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | En las palabras arbeiten y zeichnen, el diptongo ei se pronuncia aproximadamente como «ai». |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i. |
| ES-KURSS-LESSONS-DET-0023 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | Al inicio de una palabra o sílaba, sp se pronuncia «shp»: spielen (špīlen). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen). |
| ES-KURSS-LESSONS-DET-0024 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | En el verbo tun, la u se pronuncia larga en todas las personas. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Darbības vārdā tun u izrunājams gari visās personās. |
| ES-KURSS-LESSONS-DET-0025 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0040 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | nein — No |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: nein — trabajar |
| ES-KURSS-LESSONS-LV2-0041 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | nicht — No |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: nicht — preguntar |
| ES-KURSS-LESSONS-LV2-0042 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | arbeiten — trabajar |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: arbeiten — was tut er? ¿Qué está haciendo? |
| ES-KURSS-LESSONS-LV2-0043 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | fragen — preguntar |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: fragen — ¿qué hacen ellos? |
| ES-KURSS-LESSONS-LV2-0044 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | was tut er? — ¿Qué hace él? |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: was tut er? — responder |
| ES-KURSS-LESSONS-LV2-0045 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | was tun sie? — ¿Qué hacen ellos? |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: was tun sie? — calcular |
| ES-KURSS-LESSONS-LV2-0046 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | aber — pero |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: aber — dibujar |
| ES-KURSS-LESSONS-LV2-0047 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | antworten — responder |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: antworten — Marie |
| ES-KURSS-LESSONS-LV2-0051 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | nosotros rechnen |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0052 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa. | En las oraciones interrogativas que comienzan con una palabra interrogativa, como «qué», «quién» o «por qué», el verbo va inmediatamente después de la palabra interrogativa. | **LABOT** | Hay repeticiones erróneas («¿qué?» y «¿por qué?») y «OMS» es un resto extranjero o una traducción incorrecta. La redacción también necesita naturalidad y puntuación. |
| ES-KURSS-LESSONS-LV2-0053 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | 1Terminaciones con e | 1. Terminaciones con e | **LABOT** | Falta un espacio o signo de puntuación entre el número y el encabezado. |
| ES-KURSS-LESSONS-LV2-0054 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | 2Palabra en cuestión | 2. Palabra interrogativa | **LABOT** | Falta separación después del número y «palabra en cuestión» no es una denominación natural ni precisa para este concepto gramatical. |
| ES-KURSS-LESSONS-LV2-0055 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson2.legacyHtml | 3Negación con nicht | 3. Negación con nicht | **LABOT** | Falta el espacio tras el número y la puntuación habitual de la numeración. |
| ES-KURSS-LESSONS-LV2-0056 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[1].front | pregunta Pablo. | Pablo pregunta. | **LABOT** | El orden de palabras resulta poco natural en español y la oración comienza con minúscula. |
| ES-KURSS-LESSONS-LV2-0057 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[6].front | No, no cantan, cuentan. | No, no cantan, calculan. | **LABOT** | El alemán «rechnen» significa «calcular» o «hacer cuentas», no «contar» en el sentido habitual de «cuentan». |
| ES-KURSS-LESSONS-LV2-0058 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[8].front | Me paro y canto. | Estoy de pie y canto. | **LABOT** | «Ich stehe» expresa estar de pie; «me paro» suele significar que me detengo o que me pongo de pie. |
| ES-KURSS-LESSONS-LV2-0059 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[9].front | ¿Dibujas? | ¿Dibujan? | **LABOT** | El alemán «ihr» se refiere a la segunda persona plural, no a «tú». |
| ES-KURSS-LESSONS-LV2-0060 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[10].front | Sí, empatamos, pero María juega. | Sí, dibujamos, pero María juega. | **LABOT** | «Zeichnen» significa «dibujar»; «empatamos» no corresponde al significado alemán. |
| ES-KURSS-LESSONS-LV2-0061 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[11].front | qué estás haciendo | qué están haciendo | **LABOT** | El alemán «ihr» es segunda persona plural; «estás» es singular. |
| ES-KURSS-LESSONS-LV2-0062 | data/es/courseTrainingCards.js | lesson2TrainingCardsEs[13].front | ¿Qué está sucediendo? | ¿Quién se va? | **LABOT** | «Wer geht?» significa «¿Quién se va?» o «¿Quién va?», no «¿Qué está sucediendo?». |

## Cursor COPY/PASTE — tikai LABOT

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

## Obligātie apply vārti

- `CURRENT` jāsakrīt precīzi ar faktisko production vērtību.
- `CURRENT` neatbilstība = `SKIP`; aizliegts automātiski pārrakstīt vai atsvaidzināt `CURRENT`.
- Ierakstīt `NEW` precīzi, bez tulkošanas, pārfrāzēšanas vai cleanup.
- `NELABOT`, `FALSE_POSITIVE` un `TECHNICAL_DEFER` nedrīkst piemērot.
- DE puse ir STRICT READ-ONLY.
- Pēc apply: NEW exact-match, unexpected changes 0, syntax/mirror/parity PASS.
