# ES Kurss — Lekcija 18 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 42 · **LABOT:** 19 · **NELABOT:** 11 · **FALSE_POSITIVE:** 12 · **TECHNICAL_DEFER:** 0

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-DET-0287 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonItems.18.menuDesc | wohin / wo, Akkusativ o Dativ con / in / auf. |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0288 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.intro | Decimoctava conferencia: wohin / wo, Akkusativ o Dativ con an / in / auf. |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0289 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0290 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[1].items[5] | er/sie/es trägt — él/ella/ello lleva |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0291 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[1].items[12] | gießen — verter / regar |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0292 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[1].items[17] | auf — sobre / encima de |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0293 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[10] | sich stellen — ponerse de pie / colocarse |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0294 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[3] | liegen — estar tumbado / estar situado |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0295 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[6].text | Si la sustancia se menciona en una determinada cantidad o en un determinado lugar, entonces se utiliza el article. | Si la sustancia se menciona en una determinada cantidad o en un determinado lugar, entonces se utiliza el artículo. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-DET-0296 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0297 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formDu | Forma 1/3: du (singular) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0298 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr | Formulario 2/3: Tú (plural) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0299 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie | Forma 3/3: Sie (tratamiento formal) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-LV2-0679 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[1].items[0] | wohin — kurp? |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0680 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[1].items[1] | wo — kur? |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0681 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[1].items[8] | das Körbchen — una cesta | das Körbchen — cestita | **LABOT** | «Körbchen» es un diminutivo; «una cesta» omite ese matiz y además introduce un artículo innecesario en una entrada de vocabulario. |
| ES-KURSS-LESSONS-LV2-0683 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21] | die Diele — piso | die Diele — recibidor | **LABOT** | Diele significa «recibidor» o «vestíbulo», no «piso» en este contexto. |
| ES-KURSS-LESSONS-LV2-0684 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text | Las preposiciones an, in, auf pueden acompañar tanto a Akkusativ como a Dativo. | Las preposiciones an, in y auf pueden acompañar tanto al acusativo como al dativo. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0685 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text | Si la acción indica un cambio de dirección o de lugar, se utiliza Akkusativ. Pregunta: ¿quién? - ¿dónde? | Si la acción indica un cambio de dirección o de lugar, se utiliza el acusativo. Pregunta: ¿adónde? | **LABOT** | ¿Quién? significa «who» y ¿dónde? significa «where»; la pregunta correspondiente a wohin? es «¿adónde?». |
| ES-KURSS-LESSONS-LV2-0686 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[0] | Ich gehe an den Tisch. — Es eju pie galda. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0687 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[1] | Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0688 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text | Estos verbos suelen indicar dirección y por tanto responden a la pregunta ¿wohin?. | Estos verbos suelen indicar dirección y, por tanto, responden a la pregunta ¿wohin? | **LABOT** | No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas. |
| ES-KURSS-LESSONS-LV2-0689 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[0] | gehen — iet |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0690 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[2] | fahren — braukt |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0691 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[3] | laufen — skriet |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0692 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[4] | fliegen — lidot |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0694 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text | Estos verbos suelen indicar ubicación o estado y por tanto responden a la pregunta ¿wo?. | Estos verbos suelen indicar ubicación o estado y, por tanto, responden a la pregunta ¿wo? | **LABOT** | No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas. |
| ES-KURSS-LESSONS-LV2-0695 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[1] | sich befinden — atrasties |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0697 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[4] | sitzen — sentarse | sitzen — estar sentado | **LABOT** | «Sitzen» describe estar sentado; «sentarse» expresa la acción de adoptar esa posición. |
| ES-KURSS-LESSONS-LV2-0698 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[6] | finden — atrast |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0699 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text | Los sustantivos suelen aparecer sin article. | Los sustantivos suelen aparecer sin artículo. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0700 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].examples[0] | Ich trinke Milch. — Es dzeru pienu. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0702 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].heading | in + vieta | in + ubicación | **LABOT** | «vieta» es letón, no español. |
| ES-KURSS-LESSONS-LV2-0703 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text | Si la preposición in no se traduce como "en", pero expresa una ubicación, se puede traducir con el locativo. | Si la preposición in no se traduce como «en», sino que expresa una ubicación, se utiliza el dativo. | **LABOT** | En alemán, la ubicación estática con «in» se construye con dativo; «locativo» no es el caso gramatical pertinente en esta explicación. |
| ES-KURSS-LESSONS-LV2-0704 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[0].lv | ¿De dónde viene el servidor? | ¿Adónde va el criado? | **LABOT** | La pregunta alemana «Wohin kommt der Diener?» pregunta por el destino, no por el origen. Además, «Diener» corresponde aquí a «criado» o «sirviente», no necesariamente a «servidor». |
| ES-KURSS-LESSONS-LV2-0705 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[2].lv | donde trabaja | ¿Dónde trabaja? | **LABOT** | El alemán «Wo arbeitet er?» es una pregunta directa. La versión actual es una subordinada relativa y omite los signos de interrogación. |
| ES-KURSS-LESSONS-LV2-0706 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv | Recogen bayas en el bosque. | Buscan bayas en el bosque. | **LABOT** | «Suchen» significa «buscar», no «recoger». La traducción actual cambia la acción descrita. |
| ES-KURSS-LESSONS-LV2-0707 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[9].lv | La madre pone la cesta en el armario. | La madre pone la cesta sobre el armario. | **LABOT** | El alemán indica que la cesta se coloca encima del armario (auf den Schrank), no dentro del armario. |
| ES-KURSS-LESSONS-LV2-0708 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].lv | El estudiante pone los cuadernos en la bolsa. | El estudiante pone los cuadernos en la carpeta. | **LABOT** | Mappe significa «carpeta» o «portafolios» en este contexto, no «bolsa». |
| ES-KURSS-LESSONS-LV2-0709 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv | Las cartas ya están en la bolsa. | Los cuadernos ya están en la carpeta. | **LABOT** | El ejemplo alemán habla de cuadernos (Hefte) que están en una carpeta (Mappe); «cartas» y «bolsa» cambian ambos significados. |
| ES-KURSS-LESSONS-LV2-0710 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase | Ejercicio I — Usa la conjugación correcta | Ejercicio I — Usa el caso correcto | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0711 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural | ¡Pon la conjugación correcta y hazlo en plural! | ¡Usa el caso correcto y escribe la respuesta en plural! | **LABOT** | ES grammar terminology must use artículo, not English article. |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-DET-0295",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[6].text",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[6].text",
    "current": "Si la sustancia se menciona en una determinada cantidad o en un determinado lugar, entonces se utiliza el article.",
    "new": "Si la sustancia se menciona en una determinada cantidad o en un determinado lugar, entonces se utiliza el artículo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0681",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[1].items[8]",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[1].items[8]",
    "current": "das Körbchen — una cesta",
    "new": "das Körbchen — cestita",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0683",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21]",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21]",
    "current": "die Diele — piso",
    "new": "die Diele — recibidor",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0684",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text",
    "current": "Las preposiciones an, in, auf pueden acompañar tanto a Akkusativ como a Dativo.",
    "new": "Las preposiciones an, in y auf pueden acompañar tanto al acusativo como al dativo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0685",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text",
    "current": "Si la acción indica un cambio de dirección o de lugar, se utiliza Akkusativ. Pregunta: ¿quién? - ¿dónde?",
    "new": "Si la acción indica un cambio de dirección o de lugar, se utiliza el acusativo. Pregunta: ¿adónde?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0688",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text",
    "current": "Estos verbos suelen indicar dirección y por tanto responden a la pregunta ¿wohin?.",
    "new": "Estos verbos suelen indicar dirección y, por tanto, responden a la pregunta ¿wohin?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0694",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text",
    "current": "Estos verbos suelen indicar ubicación o estado y por tanto responden a la pregunta ¿wo?.",
    "new": "Estos verbos suelen indicar ubicación o estado y, por tanto, responden a la pregunta ¿wo?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0697",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[4]",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[4]",
    "current": "sitzen — sentarse",
    "new": "sitzen — estar sentado",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0699",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text",
    "current": "Los sustantivos suelen aparecer sin article.",
    "new": "Los sustantivos suelen aparecer sin artículo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0702",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].heading",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].heading",
    "current": "in + vieta",
    "new": "in + ubicación",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0703",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text",
    "current": "Si la preposición in no se traduce como \"en\", pero expresa una ubicación, se puede traducir con el locativo.",
    "new": "Si la preposición in no se traduce como «en», sino que expresa una ubicación, se utiliza el dativo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0704",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[0].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[0].lv",
    "current": "¿De dónde viene el servidor?",
    "new": "¿Adónde va el criado?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0705",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[2].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[2].lv",
    "current": "donde trabaja",
    "new": "¿Dónde trabaja?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0706",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv",
    "current": "Recogen bayas en el bosque.",
    "new": "Buscan bayas en el bosque.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0707",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[9].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[9].lv",
    "current": "La madre pone la cesta en el armario.",
    "new": "La madre pone la cesta sobre el armario.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0708",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].lv",
    "current": "El estudiante pone los cuadernos en la bolsa.",
    "new": "El estudiante pone los cuadernos en la carpeta.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0709",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv",
    "current": "Las cartas ya están en la bolsa.",
    "new": "Los cuadernos ya están en la carpeta.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0710",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase",
    "path": "kurss.exerciseMeta.fillCase",
    "current": "Ejercicio I — Usa la conjugación correcta",
    "new": "Ejercicio I — Usa el caso correcto",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0711",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural",
    "path": "kurss.exerciseMeta.chooseCasePlural",
    "current": "¡Pon la conjugación correcta y hazlo en plural!",
    "new": "¡Usa el caso correcto y escribe la respuesta en plural!",
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
