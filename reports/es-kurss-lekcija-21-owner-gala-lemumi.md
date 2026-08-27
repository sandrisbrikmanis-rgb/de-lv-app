# ES Kurss — Lekcija 21 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 28 · **LABOT:** 13 · **NELABOT:** 11 · **FALSE_POSITIVE:** 4 · **TECHNICAL_DEFER:** 0

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-DET-0319 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonItems.21.menuDesc | woher / wohin / wo, von / aus / mit + Dativo. |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0320 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.intro | Vigésima primera conferencia: woher / wohin / wo, von / aus / mit + Dativ. |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0321 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0322 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[1].items[5] | aus — de / desde |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0323 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[1].items[8] | treten — pisar / dar un paso |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0324 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[1].items[10] | er tritt — va / da un paso |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0325 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].heading | mit / von / aus + Dativ |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0326 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[4] | von dem Felde / vom Felde — del campo |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0327 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[2].items[1].text | La preposición von puede fusionarse con el article. | La preposición von puede fusionarse con el artículo. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-DET-0328 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0329 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formDu | Forma 1/3: du (singular) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0330 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr | Formulario 2/3: Tú (plural) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0331 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie | Forma 3/3: Sie (tratamiento formal) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-LV2-0799 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[1].items[1] | sägen — sierra | sägen — serrar | **LABOT** | «sägen» es un verbo alemán; «sierra» es un sustantivo español. La traducción verbal correcta en este contexto es «serrar». |
| ES-KURSS-LESSONS-LV2-0800 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[1].items[2] | spalten — dividir | spalten — partir | **LABOT** | Aunque «dividir» puede ser una traducción general, para la acción de partir madera «partir» es la opción natural y precisa en español. |
| ES-KURSS-LESSONS-LV2-0804 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[2] | aus — no / iz | aus — de / desde | **LABOT** | La traducción contiene texto corrupto o restos no españoles («no / iz») y no transmite el significado de la preposición alemana. |
| ES-KURSS-LESSONS-LV2-0806 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[2].items[2].heading | Woher? — no kurienes? | Woher? — ¿De dónde? | **LABOT** | «kurienes» no es una palabra española y la pregunta carece de la puntuación interrogativa inicial. |
| ES-KURSS-LESSONS-LV2-0807 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[13].prompt | Wohin geht sie zurück? |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0808 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[4].cards[14].prompt | Wo arbeitet sie fleißig? |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0809 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[0].lv | Todos los cuadernos están en la bolsa. | Todos los cuadernos están en la carpeta. | **LABOT** | Mappe significa «carpeta» o «portafolios», no «bolsa». |
| ES-KURSS-LESSONS-LV2-0810 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv | Saco los cuadernos de mi bolso. | Saco los cuadernos de la carpeta. | **LABOT** | El alemán indica Mappe («carpeta»), no Tasche/bolso; además, «mi» no aparece en el contexto alemán. |
| ES-KURSS-LESSONS-LV2-0811 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[2].lv | Llevo un reloj en mi bolsillo. | Saco el reloj del bolso. | **LABOT** | El español actual expresa llevar un reloj en el bolsillo, mientras que el alemán expresa sacar el reloj de una Tasche. |
| ES-KURSS-LESSONS-LV2-0812 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[3].lv | En el sótano hay un cubo de leche. | En el sótano hay un cubo con leche. | **LABOT** | Eimer mit Milch indica un cubo que contiene leche; «cubo de leche» puede interpretarse como un cubo destinado a la leche. |
| ES-KURSS-LESSONS-LV2-0813 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[4].lv | Es nesu spaini no pagraba. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0814 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[5].lv | Me quito el sombrero de la cabeza. | Me quito el gorro de la cabeza. | **LABOT** | Mütze corresponde a «gorro» o «gorra», no a «sombrero». |
| ES-KURSS-LESSONS-LV2-0815 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[8].lv | La partitura está en el piano. | Las partituras están sobre el piano. | **LABOT** | Noten es plural y, en este contexto, se refiere a partituras o notas musicales colocadas sobre el piano. |
| ES-KURSS-LESSONS-LV2-0816 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase | Ejercicio I — Usa la conjugación correcta | Ejercicio I — Usa el caso correcto | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0817 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural | ¡Pon la conjugación correcta y hazlo en plural! | ¡Pon el caso correcto y hazlo en plural! | **LABOT** | ES grammar terminology must use artículo, not English article. |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-DET-0327",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[2].items[1].text",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[2].items[1].text",
    "current": "La preposición von puede fusionarse con el article.",
    "new": "La preposición von puede fusionarse con el artículo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0799",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[1].items[1]",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[1].items[1]",
    "current": "sägen — sierra",
    "new": "sägen — serrar",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0800",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[1].items[2]",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[1].items[2]",
    "current": "spalten — dividir",
    "new": "spalten — partir",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0804",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[2]",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[2]",
    "current": "aus — no / iz",
    "new": "aus — de / desde",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0806",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[2].items[2].heading",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[2].items[2].heading",
    "current": "Woher? — no kurienes?",
    "new": "Woher? — ¿De dónde?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0809",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[0].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[0].lv",
    "current": "Todos los cuadernos están en la bolsa.",
    "new": "Todos los cuadernos están en la carpeta.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0810",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv",
    "current": "Saco los cuadernos de mi bolso.",
    "new": "Saco los cuadernos de la carpeta.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0811",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[2].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[2].lv",
    "current": "Llevo un reloj en mi bolsillo.",
    "new": "Saco el reloj del bolso.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0812",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[3].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[3].lv",
    "current": "En el sótano hay un cubo de leche.",
    "new": "En el sótano hay un cubo con leche.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0814",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[5].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[5].lv",
    "current": "Me quito el sombrero de la cabeza.",
    "new": "Me quito el gorro de la cabeza.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0815",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[8].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[8].lv",
    "current": "La partitura está en el piano.",
    "new": "Las partituras están sobre el piano.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0816",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase",
    "path": "kurss.exerciseMeta.fillCase",
    "current": "Ejercicio I — Usa la conjugación correcta",
    "new": "Ejercicio I — Usa el caso correcto",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0817",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural",
    "path": "kurss.exerciseMeta.chooseCasePlural",
    "current": "¡Pon la conjugación correcta y hazlo en plural!",
    "new": "¡Pon el caso correcto y hazlo en plural!",
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
