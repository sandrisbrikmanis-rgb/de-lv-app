# ES Kurss — Lekcija 1 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 45 · **LABOT:** 15 · **NELABOT:** 22 · **FALSE_POSITIVE:** 7 · **TECHNICAL_DEFER:** 1

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L01 |  | COURSE_LESSON_DATA.kurssLesson1.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson1 | inline:8944 |  | **TECHNICAL_DEFER** | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0001 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas vienen |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0002 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟gehen — ir |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ♟gehen — go |
| ES-KURSS-LESSONS-DET-0003 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas van |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0004 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas están de pie |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0005 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas cantan |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0006 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wir (vīr) — nosotros |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wir (vīr) — we |
| ES-KURSS-LESSONS-DET-0007 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | En la palabra «wir», la vocal i se pronuncia larga. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vārdā “wir” burts i tiek izrunāts gari. |
| ES-KURSS-LESSONS-DET-0008 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | gehen (gē-en) — ir |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0009 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | stehen (štē-en) — estar de pie |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: stehen (štē-en) - stand |
| ES-KURSS-LESSONS-DET-0010 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | du (dū) kommst — tú vienes |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0011 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | er (ēr) kommt — él viene |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0012 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | sie (zī) kommt — ella viene |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0013 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wer (vēr) — ¿quién? |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0014 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ja (jā) — Sí |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0015 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | En las lecciones se indica la pronunciación aproximada de las palabras entre paréntesis. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās. |
| ES-KURSS-LESSONS-DET-0016 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wir (vīr) — nosotros |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0017 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | En español:<br>Tú vienes.<br>¿Vienes? |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Latviešu valodā:<br>Tu nāc.<br>Vai tu nāc? |
| ES-KURSS-LESSONS-DET-0018 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[10].front | Albert y Martha van y vienen. | Albert y Marta van y vienen. | **LABOT** | DE source uses Marta; ES should match canonical name. |
| ES-KURSS-LESSONS-DET-0019 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0001 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | nosotros venimos |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: nosotros ven |
| ES-KURSS-LESSONS-LV2-0002 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros venís |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú vienes |
| ES-KURSS-LESSONS-LV2-0005 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | he / ella va | él / ella va | **LABOT** | «he» es un error ortográfico/ de texto; el pronombre masculino correcto es «él». |
| ES-KURSS-LESSONS-LV2-0006 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros vais |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú ejat |
| ES-KURSS-LESSONS-LV2-0008 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟stehen — estar de pie |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ♟stehen — pararse |
| ES-KURSS-LESSONS-LV2-0009 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | yo estoy de pie |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0010 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros estáis de pie |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú estás de pie |
| ES-KURSS-LESSONS-LV2-0012 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟singen — cantar |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0013 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros cantáis |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú cantas |
| ES-KURSS-LESSONS-LV2-0015 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.<br>Esto también debería seguirse en futuras conferencias. | La pronunciación aproximada de las palabras se indica entre paréntesis mediante una transcripción adaptada al español.\nEste criterio debe mantenerse también en las lecciones posteriores. | **LABOT** | Contiene el error tipográfico «iEl La» y «conferencias» no es natural en el contexto de un curso; debe decir «lecciones». |
| ES-KURSS-LESSONS-LV2-0019 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | singen (zingen) — cantar |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: singen (zingen) — canta |
| ES-KURSS-LESSONS-LV2-0023 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ich → -ich komme | ich → ich komme | **LABOT** | Hay un guion espurio pegado al ejemplo alemán, que altera la presentación de la correspondencia. |
| ES-KURSS-LESSONS-LV2-0024 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | du → -du kommst | du → du kommst | **LABOT** | Hay un guion espurio pegado al ejemplo alemán. |
| ES-KURSS-LESSONS-LV2-0025 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | er / sie → -er kommt | er / sie → er kommt | **LABOT** | Hay un guion espurio pegado al ejemplo alemán. |
| ES-KURSS-LESSONS-LV2-0026 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wir → -wir kommen | wir → wir kommen | **LABOT** | Hay un guion espurio pegado al ejemplo alemán. |
| ES-KURSS-LESSONS-LV2-0027 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ihr → -En letón: | ihr → ihr kommt | **LABOT** | LV text confirmed in ES learner-facing field; DE context checked. |
| ES-KURSS-LESSONS-LV2-0028 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | sie → -Alemán en: | sie → sie kommen | **LABOT** | LV text confirmed in ES learner-facing field; DE context checked. |
| ES-KURSS-LESSONS-LV2-0030 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟Presente terminaciones | ♟ Terminaciones del presente | **LABOT** | El orden de las palabras no es natural en español; debe decir «Terminaciones del presente». |
| ES-KURSS-LESSONS-LV2-0031 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ?Oraciones de preguntas | ?Oraciones interrogativas | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0032 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♣Diferencia de persona | ♣Diferencias según la persona | **LABOT** | «Diferencia de persona» suena poco natural y ambiguo como encabezado gramatical. |
| ES-KURSS-LESSONS-LV2-0033 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | Elimina -en del infinitivo y añade la terminación personal.<br>Ejemplo: kommen → komm- + terminación.<br>kommen = infinitivo. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Eliminar -en de las formas base del verbo y agrega la terminación.<br>Ejemplo: kommen → komm + terminación<br>kommenforma base |
| ES-KURSS-LESSONS-LV2-0034 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | Elimina -en del infinitivo y añade la terminación personal. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Eliminar -en de las formas base del verbo y agrega la terminación. |
| ES-KURSS-LESSONS-LV2-0035 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[0].front | ¿vienes? | ¿Vienes? | **LABOT** | Como oración independiente, debe escribirse con mayúscula inicial. |
| ES-KURSS-LESSONS-LV2-0036 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[5].front | Sí, van. | Sí, se van. | **LABOT** | La respuesta no conserva el valor pronominal de «Se van?»; «Sí, van» sugiere que van a algún lugar, no necesariamente que se marchan. |
| ES-KURSS-LESSONS-LV2-0037 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[9].front | Vas a ir | ¿Vais? | **LABOT** | El texto actual es una afirmación en segunda persona singular y expresa una perífrasis de futuro, mientras que el contexto alemán es una pregunta dirigida a varias personas. |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-DET-0018",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[10].front",
    "path": "lesson1TrainingCardsEs[10].front",
    "current": "Albert y Martha van y vienen.",
    "new": "Albert y Marta van y vienen.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0005",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[5]",
    "current": "he / ella va",
    "new": "él / ella va",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0015",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → lesson1-info[0]",
    "current": "iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.\nEsto también debería seguirse en futuras conferencias.",
    "new": "La pronunciación aproximada de las palabras se indica entre paréntesis mediante una transcripción adaptada al español.\\nEste criterio debe mantenerse también en las lecciones posteriores.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0023",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[4]",
    "current": "ich → -ich komme",
    "new": "ich → ich komme",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0024",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[5]",
    "current": "du → -du kommst",
    "new": "du → du kommst",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0025",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[6]",
    "current": "er / sie → -er kommt",
    "new": "er / sie → er kommt",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0026",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[7]",
    "current": "wir → -wir kommen",
    "new": "wir → wir kommen",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0027",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[8]",
    "current": "ihr → -En letón:",
    "new": "ihr → ihr kommt",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0028",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[9]",
    "current": "sie → -Alemán en:",
    "new": "sie → sie kommen",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0030",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[1]",
    "current": "♟Presente terminaciones",
    "new": "♟ Terminaciones del presente",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0031",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[3]",
    "current": "?Oraciones de preguntas",
    "new": "?Oraciones interrogativas",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0032",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[4]",
    "current": "♣Diferencia de persona",
    "new": "♣Diferencias según la persona",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0035",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[0].front",
    "path": "lesson1TrainingCardsEs[0].front",
    "current": "¿vienes?",
    "new": "¿Vienes?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0036",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[5].front",
    "path": "lesson1TrainingCardsEs[5].front",
    "current": "Sí, van.",
    "new": "Sí, se van.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0037",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[9].front",
    "path": "lesson1TrainingCardsEs[9].front",
    "current": "Vas a ir",
    "new": "¿Vais?",
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
