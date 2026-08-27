# ES Kurss — Lekcija 12 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 35 · **LABOT:** 16 · **NELABOT:** 9 · **FALSE_POSITIVE:** 10 · **TECHNICAL_DEFER:** 0

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-DET-0199 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.intro | Conferencia duodécima: grados comparativos, als/wie, edad, adjetivos y colores. |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0200 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.dialogues | Diálogos / frases |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0201 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[0] | heißen — llamarse / significar |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0202 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13] | der Vetter (dēr feter) — primo |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0203 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23] | das Gummi (das gumī) — goma |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0204 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.dialogues | Diálogos / frases |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0205 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formDu | Forma 1/3: du (singular) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0206 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr | Formulario 2/3: Tú (plural) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0207 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie | Forma 3/3: Sie (tratamiento formal) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-LV2-0426 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonItems.12.menuDesc | Calidades comparables, también, edad y colores. | Grados comparativos, als/wie, edad y colores. | **LABOT** | «Calidades comparables» no traduce correctamente el tema de los grados comparativos, y «también» sustituye indebidamente los términos alemanes als/wie. |
| ES-KURSS-LESSONS-LV2-0429 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[4] | wieviel — cik |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0430 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[5] | Max (maks) — Maksis |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0431 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[9] | alt — viejo | alt — mayor (al hablar de la edad) | **LABOT** | «Viejo» es posible en otros contextos, pero en esta lección sobre la edad puede inducir a traducir de forma poco natural las expresiones personales de edad. |
| ES-KURSS-LESSONS-LV2-0432 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12] | so alt wie — tan viejo como | so alt wie — de la misma edad que | **LABOT** | «Tan viejo como» suena despectivo o se refiere a objetos envejecidos; para personas y edades, «de la misma edad que» es más natural y preciso. |
| ES-KURSS-LESSONS-LV2-0433 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[16] | wie — cómo | wie — como | **LABOT** | En este contexto de comparación, wie significa «como», no «cómo». |
| ES-KURSS-LESSONS-LV2-0434 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[1].items[17] | am jüngsten — el más reciente | am jüngsten — el más joven | **LABOT** | am jüngsten es el superlativo de jung y significa «el más joven»; «el más reciente» corresponde a otra acepción. |
| ES-KURSS-LESSONS-LV2-0435 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[3].items[0].heading | Komparativ |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0436 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text | La mayoría de los adjetivos monosilábicos con la vocal raíz a, o, u tienen una diéresis en el grado superlativo. | La mayoría de los adjetivos monosilábicos cuya vocal raíz es a, o, u tienen una diéresis en el comparativo. | **LABOT** | La regla descrita corresponde al comparativo, no al superlativo. Además, «cuya vocal raíz es» resulta más natural y preciso que «con la vocal raíz». |
| ES-KURSS-LESSONS-LV2-0437 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[3].items[3].heading | Superlativ |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0438 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[1][0] | nah (tuvs) |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0439 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[2][0] | hoch (augsts) |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0440 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[3][0] | gut (labs) |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0441 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[4][0] | viel (daudz) |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0442 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv | ¿Cómo te llamas? | ¿Cómo se llama usted? | **LABOT** | El español usa el trato informal («te»), mientras que el contexto alemán usa la forma formal «Sie». |
| ES-KURSS-LESSONS-LV2-0443 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[10].lv | Es esmu 20 gadus vecs. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0444 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[11].lv | ¿Vai Maksis son mentiras? | ¿Es Max alto? | **LABOT** | La frase contiene texto letón («Vai Maksis») y una traducción española sin sentido («son mentiras»). El contexto alemán pregunta si Max es alto. |
| ES-KURSS-LESSONS-LV2-0445 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv | ¿Cuál es el mayor? | ¿Cuál es el más grande? | **LABOT** | En este contexto, «größten» significa «más grande», no «mayor», que normalmente se interpreta como de más edad. |
| ES-KURSS-LESSONS-LV2-0446 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv | ¿Cuantos hermanos tienes? | ¿Cuántos hermanos tiene? | **LABOT** | Falta la tilde en «Cuántos». Además, el alemán usa el tratamiento formal «Sie», por lo que «tiene» refleja mejor el contexto. |
| ES-KURSS-LESSONS-LV2-0447 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[23].lv | ¿Qué es la tinta? | ¿Cómo es la tinta? | **LABOT** | «Wie ist die Tinte?» pregunta por cómo es la tinta, no por qué es o qué es. |
| ES-KURSS-LESSONS-LV2-0448 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[24].lv | Es negro. | Es negra. | **LABOT** | «Sie» se refiere a «die Tinte», que es un sustantivo femenino en español: «la tinta». |
| ES-KURSS-LESSONS-LV2-0449 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[25].lv | ¿Qué es la tiza? | ¿Cómo es la tiza? | **LABOT** | «Wie ist die Kreide?» pregunta por una característica de la tiza, no por su identidad o definición. |
| ES-KURSS-LESSONS-LV2-0450 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[26].lv | Tas ir balts. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0451 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[27].lv | ¿Qué son las flores? | ¿Cómo son las flores? | **LABOT** | «Wie sind die Blumen?» pregunta por las características de las flores, no por qué son o qué son. |
| ES-KURSS-LESSONS-LV2-0452 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv | ¿Estás feliz? | ¿Está feliz? | **LABOT** | El alemán usa «Sie», tratamiento formal singular en este contexto; «estás» corresponde al tratamiento informal «du». |
| ES-KURSS-LESSONS-LV2-0453 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural | ¡Pon la conjugación correcta y hazlo en plural! | ¡Usa la conjugación correcta y ponlo en plural! | **LABOT** | «Pon la conjugación» resulta poco natural en español; normalmente se «usa» o se «escribe» una conjugación, mientras que lo que se pone en plural es la respuesta o la forma. |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0426",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.lessonItems.12.menuDesc",
    "path": "kurss.lessonItems.12.menuDesc (lesson header subtitle / menu)",
    "current": "Calidades comparables, también, edad y colores.",
    "new": "Grados comparativos, als/wie, edad y colores.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0431",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[9]",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[9]",
    "current": "alt — viejo",
    "new": "alt — mayor (al hablar de la edad)",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0432",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12]",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12]",
    "current": "so alt wie — tan viejo como",
    "new": "so alt wie — de la misma edad que",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0433",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[16]",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[16]",
    "current": "wie — cómo",
    "new": "wie — como",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0434",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[17]",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[1].items[17]",
    "current": "am jüngsten — el más reciente",
    "new": "am jüngsten — el más joven",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0436",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text",
    "current": "La mayoría de los adjetivos monosilábicos con la vocal raíz a, o, u tienen una diéresis en el grado superlativo.",
    "new": "La mayoría de los adjetivos monosilábicos cuya vocal raíz es a, o, u tienen una diéresis en el comparativo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0442",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv",
    "current": "¿Cómo te llamas?",
    "new": "¿Cómo se llama usted?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0444",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[11].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[11].lv",
    "current": "¿Vai Maksis son mentiras?",
    "new": "¿Es Max alto?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0445",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv",
    "current": "¿Cuál es el mayor?",
    "new": "¿Cuál es el más grande?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0446",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv",
    "current": "¿Cuantos hermanos tienes?",
    "new": "¿Cuántos hermanos tiene?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0447",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[23].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[23].lv",
    "current": "¿Qué es la tinta?",
    "new": "¿Cómo es la tinta?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0448",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[24].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[24].lv",
    "current": "Es negro.",
    "new": "Es negra.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0449",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[25].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[25].lv",
    "current": "¿Qué es la tiza?",
    "new": "¿Cómo es la tiza?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0451",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[27].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[27].lv",
    "current": "¿Qué son las flores?",
    "new": "¿Cómo son las flores?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0452",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv",
    "current": "¿Estás feliz?",
    "new": "¿Está feliz?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0453",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural",
    "path": "kurss.exerciseMeta.chooseCasePlural",
    "current": "¡Pon la conjugación correcta y hazlo en plural!",
    "new": "¡Usa la conjugación correcta y ponlo en plural!",
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
