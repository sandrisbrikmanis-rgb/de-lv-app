# ES Kurss — Lekcija 17 — OWNER gala lēmumi

**Main:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Atradumi:** 31 · **LABOT:** 13 · **NELABOT:** 15 · **FALSE_POSITIVE:** 3 · **TECHNICAL_DEFER:** 0 · **Rebased:** 1

## 1. Oriģinālais

| Audit ID | Path | Audita CURRENT | Audita statuss | Audita NEW |
|---|---|---|---|---|
| ES-KURSS-LESSONS-DET-0272 | kurss.lessonItems.17.menuDesc (lesson header subtitle / menu) | mit + Dativ, womit / mit wem y Umlaut. | NELABOT | mit + Dativ, womit / mit wem y Umlaut. |
| ES-KURSS-LESSONS-DET-0273 | COURSE_LESSON_DATA.kurssLesson17.intro | Decimoséptima conferencia: mit + Dativ, womit / mit wem y verbos con diéresis. | NELABOT | Decimoséptima conferencia: mit + Dativ, womit / mit wem y verbos con diéresis. |
| ES-KURSS-LESSONS-DET-0274 | COURSE_LESSON_DATA.kurssLesson17.sections[0].title → kurss.sections.reading | Texto / lectura | NELABOT | Texto / lectura |
| ES-KURSS-LESSONS-DET-0275 | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[7] | auffangen — atrapar / atrapar | NELABOT | auffangen — atrapar / atrapar |
| ES-KURSS-LESSONS-DET-0276 | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[14] | wischen — limpiar / limpiar | NELABOT | wischen — limpiar / limpiar |
| ES-KURSS-LESSONS-DET-0277 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].heading | mit wem? / womit? | NELABOT | mit wem? / womit? |
| ES-KURSS-LESSONS-DET-0278 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].text | La pregunta alemana "¿con qué?" expresado de dos maneras: mit wem? — ¿Sobre las personas, mujer? — sobre cosas/temas. | NELABOT | La pregunta alemana "¿con qué?" expresado de dos maneras: mit wem? — ¿Sobre las personas, mujer? — sobre cosas/temas. |
| ES-KURSS-LESSONS-DET-0279 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].heading | graben / fangen / auffangen | NELABOT | graben / fangen / auffangen |
| ES-KURSS-LESSONS-DET-0280 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[4].heading | helfen / werfen | FALSE_POSITIVE | helfen / werfen |
| ES-KURSS-LESSONS-DET-0281 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].heading | fegen / wischen | NELABOT | fegen / wischen |
| ES-KURSS-LESSONS-DET-0282 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].examples[2] | wischen / abwischen — limpiar con un paño / quitar el polvo | NELABOT | wischen / abwischen — limpiar con un paño / quitar el polvo |
| ES-KURSS-LESSONS-DET-0283 | kurss.sections.reading (section title display) | Texto / lectura | NELABOT | Texto / lectura |
| ES-KURSS-LESSONS-DET-0284 | kurss.exerciseMeta.formDu | Forma 1/3: du (singular) | NELABOT | Forma 1/3: du (singular) |
| ES-KURSS-LESSONS-DET-0285 | kurss.exerciseMeta.formIhr | Formulario 2/3: Tú (plural) | NELABOT | Formulario 2/3: Tú (plural) |
| ES-KURSS-LESSONS-DET-0286 | kurss.exerciseMeta.formSie | Forma 3/3: Sie (tratamiento formal) | NELABOT | Forma 3/3: Sie (tratamiento formal) |
| ES-KURSS-LESSONS-LV2-0656 | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[3] | womit — ar ko? | FALSE_POSITIVE | womit — ar ko? |
| ES-KURSS-LESSONS-LV2-0658 | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9] | der Schuldiener — asistente de escuela | LABOT | der Schuldiener — conserje de la escuela |
| ES-KURSS-LESSONS-LV2-0659 | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12] | die Diele — piso | LABOT | die Diele — vestíbulo |
| ES-KURSS-LESSONS-LV2-0662 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].text | Los verbos graben, fangen, auffangen tienen diéresis en la 2ª y 3ª persona del singular. | LABOT | En graben, fangen y auffangen, la vocal de la raíz cambia a ä en la 2.ª y 3.ª persona del singular. |
| ES-KURSS-LESSONS-LV2-0663 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text | Los verbos compuestos auffangen y abwischen llevan tilde en el prefijo. Por tanto, el prefijo presente se separa y se coloca al final de la frase. | LABOT | Los verbos compuestos auffangen y abwischen tienen un prefijo separable. Por tanto, el prefijo verbal se separa y se coloca al final de la oración. |
| ES-KURSS-LESSONS-LV2-0664 | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text | Fegen y wischen significan barrer, pero el uso es diferente. | LABOT | Fegen significa «barrer», mientras que wischen significa «limpiar o pasar un paño»; su uso es diferente. |
| ES-KURSS-LESSONS-LV2-0666 | COURSE_LESSON_DATA.kurssLesson17.sections[3].items[1] | En wieder, la e final es abierta. | LABOT | En wieder, la e final se pronuncia como una vocal neutra o reducida [ə]. |
| ES-KURSS-LESSONS-LV2-0667 | COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[4].prompt | Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein) | FALSE_POSITIVE | Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein) |
| ES-KURSS-LESSONS-LV2-0668 | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[2].lv | ¿Ko meitene noslauka? | LABOT | ¿Qué limpia la niña? |
| ES-KURSS-LESSONS-LV2-0669 | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[7].lv | ¿Está hablando con una amiga? | LABOT | ¿Está hablando con un amigo? |
| ES-KURSS-LESSONS-LV2-0670 | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv | Estoy sosteniendo una pala con la mano. | LABOT | Sostengo la pala con la mano. |
| ES-KURSS-LESSONS-LV2-0671 | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv | ¿Con quién trabajamos? | LABOT | ¿Con qué trabajamos? |
| ES-KURSS-LESSONS-LV2-0672 | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv | ¿Con qué va el hermano? | LABOT | ¿Con quién va el hermano? |
| ES-KURSS-LESSONS-LV2-0673 | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv | Un hermano va con su padre, con su madre, con su maestra, con su tío, con su prima, con su prima. | LABOT | El hermano va con su padre, con su madre, con su maestro, con su tío, con su primo y con su prima. |
| ES-KURSS-LESSONS-LV2-0674 | kurss.exerciseMeta.fillCase | Ejercicio I — Usa la conjugación correcta | LABOT | Ejercicio I — Usa el caso correcto |
| ES-KURSS-LESSONS-LV2-0675 | kurss.exerciseMeta.chooseCasePlural | ¡Pon la conjugación correcta y hazlo en plural! | LABOT | ¡Usa el caso correcto y ponlo en plural! |

## 2. izmaiņas

| Audit ID | Faktiskais main CURRENT | Rebased | OWNER izvērtējums |
|---|---|---|---|
| ES-KURSS-LESSONS-DET-0272 | mit + Dativ, womit / mit wem y Umlaut. | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0273 | Decimoséptima conferencia: mit + Dativ, womit / mit wem y verbos con diéresis. | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0274 | Texto / lectura | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0275 | auffangen — atrapar / atrapar | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0276 | wischen — limpiar / limpiar | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0277 | mit wem? / womit? | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0278 | La pregunta alemana "¿con qué?" expresado de dos maneras: mit wem? — ¿Sobre las personas, mujer? — sobre cosas/temas. | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0279 | graben / fangen / auffangen | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0280 | helfen / werfen | NĒ | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0281 | fegen / wischen | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0282 | wischen / abwischen — limpiar con un paño / quitar el polvo | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0283 | Texto / lectura | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0284 | Forma 1/3: du (singular) | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0285 | Formulario 2/3: Tú (plural) | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0286 | Forma 3/3: Sie (tratamiento formal) | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-LV2-0656 | womit — ar ko? | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0658 | der Schuldiener — asistente de escuela | NĒ | «Asistente de escuela» resulta poco natural y no refleja bien el sentido habitual de Schuldiener en este contexto. |
| ES-KURSS-LESSONS-LV2-0659 | die Diele — piso | NĒ | Die Diele se refiere normalmente a un vestíbulo, recibidor o pasillo de entrada; «piso» no corresponde a ese significado en este contexto. |
| ES-KURSS-LESSONS-LV2-0662 | Los verbos graben, fangen, auffangen tienen diéresis en la 2ª y 3ª persona del singular. | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0663 | Los verbos compuestos auffangen y abwischen llevan tilde en el prefijo. Por tanto, el prefijo presente se separa y se coloca al final de la frase. | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0664 | Fegen y wischen significan barrer, pero el uso es diferente. | NĒ | wischen no significa «barrer»; se refiere a limpiar pasando un paño, una mopa u otra superficie de limpieza. |
| ES-KURSS-LESSONS-LV2-0666 | En wieder, la e final es abierta. | NĒ | La e final de wieder no es una e abierta [ɛ], sino una vocal átona reducida, normalmente transcrita [ə]. |
| ES-KURSS-LESSONS-LV2-0667 | Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein) | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0668 | ¿Ko meitene noslauka? | NĒ | El texto está en letón, no en español. |
| ES-KURSS-LESSONS-LV2-0669 | ¿Está hablando con una amiga? | NĒ | El alemán usa «dem Freunde», que se refiere a un amigo masculino; el español actual indica una amiga. El ejemplo alemán se conserva tal como está para esta auditoría. |
| ES-KURSS-LESSONS-LV2-0670 | Estoy sosteniendo una pala con la mano. | NĒ | El alemán expresa una acción habitual o presente («Ich halte») y se refiere a la pala determinada («den Spaten»), mientras que el español usa una perífrasis progresiva y un artículo indefinido. |
| ES-KURSS-LESSONS-LV2-0671 | ¿Con quién trabajamos? | NĒ | «Womit» significa «con qué», no «con quién». |
| ES-KURSS-LESSONS-LV2-0672 | ¿Con qué va el hermano? | NĒ | «Mit wem» significa «con quién», no «con qué». |
| ES-KURSS-LESSONS-LV2-0673 | Un hermano va con su padre, con su madre, con su maestra, con su tío, con su tía, con su prima, con su prima. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Un hermano va con su padre, con su madre, con su maestra, con su tío, con su prima, con su prima. |
| ES-KURSS-LESSONS-LV2-0674 | Ejercicio I — Usa la conjugación correcta | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0675 | ¡Pon la conjugación correcta y hazlo en plural! | NĒ | ES grammar terminology must use artículo, not English article. |

## 3. Gala rezultāts

| Audit ID | File | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ES-KURSS-LESSONS-DET-0272 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonItems.17.menuDesc | mit + Dativ, womit / mit wem y Umlaut. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0273 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.intro | Decimoséptima conferencia: mit + Dativ, womit / mit wem y verbos con diéresis. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0274 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0275 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[7] | auffangen — atrapar / atrapar |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0276 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[14] | wischen — limpiar / limpiar |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0277 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].heading | mit wem? / womit? |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0278 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].text | La pregunta alemana "¿con qué?" expresado de dos maneras: mit wem? — ¿Sobre las personas, mujer? — sobre cosas/temas. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0279 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].heading | graben / fangen / auffangen |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0280 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[4].heading | helfen / werfen |  | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0281 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].heading | fegen / wischen |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0282 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].examples[2] | wischen / abwischen — limpiar con un paño / quitar el polvo |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0283 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0284 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formDu | Forma 1/3: du (singular) |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0285 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr | Formulario 2/3: Tú (plural) |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0286 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie | Forma 3/3: Sie (tratamiento formal) |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0656 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[3] | womit — ar ko? |  | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0658 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9] | der Schuldiener — asistente de escuela | der Schuldiener — conserje de la escuela | **LABOT** |
| ES-KURSS-LESSONS-LV2-0659 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12] | die Diele — piso | die Diele — vestíbulo | **LABOT** |
| ES-KURSS-LESSONS-LV2-0662 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].text | Los verbos graben, fangen, auffangen tienen diéresis en la 2ª y 3ª persona del singular. | En graben, fangen y auffangen, la vocal de la raíz cambia a ä en la 2.ª y 3.ª persona del singular. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0663 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text | Los verbos compuestos auffangen y abwischen llevan tilde en el prefijo. Por tanto, el prefijo presente se separa y se coloca al final de la frase. | Los verbos compuestos auffangen y abwischen tienen un prefijo separable. Por tanto, el prefijo verbal se separa y se coloca al final de la oración. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0664 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text | Fegen y wischen significan barrer, pero el uso es diferente. | Fegen significa «barrer», mientras que wischen significa «limpiar o pasar un paño»; su uso es diferente. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0666 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[3].items[1] | En wieder, la e final es abierta. | En wieder, la e final se pronuncia como una vocal neutra o reducida [ə]. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0667 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[4].prompt | Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein) |  | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0668 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[2].lv | ¿Ko meitene noslauka? | ¿Qué limpia la niña? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0669 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[7].lv | ¿Está hablando con una amiga? | ¿Está hablando con un amigo? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0670 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv | Estoy sosteniendo una pala con la mano. | Sostengo la pala con la mano. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0671 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv | ¿Con quién trabajamos? | ¿Con qué trabajamos? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0672 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv | ¿Con qué va el hermano? | ¿Con quién va el hermano? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0673 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv | Un hermano va con su padre, con su madre, con su maestra, con su tío, con su tía, con su prima, con su prima. |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0674 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase | Ejercicio I — Usa la conjugación correcta | Ejercicio I — Usa el caso correcto | **LABOT** |
| ES-KURSS-LESSONS-LV2-0675 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural | ¡Pon la conjugación correcta y hazlo en plural! | ¡Usa el caso correcto y ponlo en plural! | **LABOT** |

## Cursor COPY/PASTE targets

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0658",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9]",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9]",
    "current": "der Schuldiener — asistente de escuela",
    "new": "der Schuldiener — conserje de la escuela",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0659",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]",
    "current": "die Diele — piso",
    "new": "die Diele — vestíbulo",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0662",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].text",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].text",
    "current": "Los verbos graben, fangen, auffangen tienen diéresis en la 2ª y 3ª persona del singular.",
    "new": "En graben, fangen y auffangen, la vocal de la raíz cambia a ä en la 2.ª y 3.ª persona del singular.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0663",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text",
    "current": "Los verbos compuestos auffangen y abwischen llevan tilde en el prefijo. Por tanto, el prefijo presente se separa y se coloca al final de la frase.",
    "new": "Los verbos compuestos auffangen y abwischen tienen un prefijo separable. Por tanto, el prefijo verbal se separa y se coloca al final de la oración.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0664",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text",
    "current": "Fegen y wischen significan barrer, pero el uso es diferente.",
    "new": "Fegen significa «barrer», mientras que wischen significa «limpiar o pasar un paño»; su uso es diferente.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0666",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[3].items[1]",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[3].items[1]",
    "current": "En wieder, la e final es abierta.",
    "new": "En wieder, la e final se pronuncia como una vocal neutra o reducida [ə].",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0668",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[2].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[2].lv",
    "current": "¿Ko meitene noslauka?",
    "new": "¿Qué limpia la niña?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0669",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[7].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[7].lv",
    "current": "¿Está hablando con una amiga?",
    "new": "¿Está hablando con un amigo?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0670",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv",
    "current": "Estoy sosteniendo una pala con la mano.",
    "new": "Sostengo la pala con la mano.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0671",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv",
    "current": "¿Con quién trabajamos?",
    "new": "¿Con qué trabajamos?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0672",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv",
    "current": "¿Con qué va el hermano?",
    "new": "¿Con quién va el hermano?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0674",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase",
    "path": "kurss.exerciseMeta.fillCase",
    "current": "Ejercicio I — Usa la conjugación correcta",
    "new": "Ejercicio I — Usa el caso correcto",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0675",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural",
    "path": "kurss.exerciseMeta.chooseCasePlural",
    "current": "¡Pon la conjugación correcta y hazlo en plural!",
    "new": "¡Usa el caso correcto y ponlo en plural!",
    "status": "LABOT"
  }
]
```

COPY-ONLY: main faktiskajai vērtībai precīzi jāsakrīt ar `CURRENT`; neatbilstība = SKIP. DE laukus nemainīt.
