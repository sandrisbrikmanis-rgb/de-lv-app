# ES Kurss — Lekcija 13 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 81 · **LABOT:** 36 · **NELABOT:** 6 · **FALSE_POSITIVE:** 39 · **TECHNICAL_DEFER:** 0

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-DET-0208 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0209 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].examples[2] | er/sie/es kehrt sich um |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0210 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[3].examples[2] | er/sie/es atmet |  | **FALSE_POSITIVE** | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0211 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].table[0][0] |  |  | **NELABOT** | Verified: exerciseConjugation DE-only form field; no learner-facing ES expected. |
| ES-KURSS-LESSONS-DET-0212 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.sections.reading | Texto / lectura |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0213 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formDu | Forma 1/3: du (singular) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0214 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr | Formulario 2/3: Tú (plural) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0215 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie | Forma 3/3: Sie (tratamiento formal) |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-LV2-0455 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonItems.13.menuDesc | Der Körper, partes del cuerpo, turnen y jeder. | El cuerpo («Der Körper»), partes del cuerpo, gimnasia («turnen») y «jeder». | **LABOT** | El texto mezcla alemán y español sin marcar claramente qué términos son vocabulario alemán y presenta una enumeración poco natural. La propuesta conserva los términos alemanes como contenido pedagógico, pero aclara su función. |
| ES-KURSS-LESSONS-LV2-0456 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.intro | Conferencia Trece: Der Körper, partes del cuerpo, ejercicio, verbos reflexivos y plural. | Lección 13: «Der Körper», partes del cuerpo, gimnasia, verbos reflexivos y plural. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0457 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[0] | Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0458 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[1] | Wie ist der Kopf? Der Kopf ist rund. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0459 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[2] | Der Hals ist kurz. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0460 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[3] | Der Rumpf ist lang. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0461 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[4] | Der Arm ist auch lang. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0462 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[5] | Die Hand ist klein. | La mano es pequeña. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0463 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[6] | Das Bein ist dick. | La pierna es gruesa. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0464 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[7] | Der Fuß ist dünn. | El pie es delgado. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0465 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[8] | Die Brust ist vorn, aber der Rücken ist hinten. | El pecho está delante, pero la espalda está detrás. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0466 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[9] | Jede Hand hat fünf Finger. | Cada mano tiene cinco dedos. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0467 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[10] | Beide Hände haben zehn Finger. | Ambas manos tienen diez dedos. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0468 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[11] | Jeder Fuß hat fünf Zehen. | Cada pie tiene cinco dedos del pie. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0469 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[12] | Beide Füße haben zehn Zehen. | Ambos pies tienen diez dedos del pie. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0470 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[13] | Jeder Finger und jede Zehe haben einen Nagel. | Cada dedo y cada dedo del pie tienen una uña. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0471 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[0].items[14] | Ich beschneide und reinige die Nägel oft. | Recorto y limpio las uñas a menudo. | **LABOT** | El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse. |
| ES-KURSS-LESSONS-LV2-0472 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[1].items[24] | jede — katra |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0473 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[1].items[25] | jedes — katrs |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0474 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[1].items[29] | der Nagel — uña / clavo | der Nagel — uña | **LABOT** | La barra combina dos significados distintos en un campo de aprendizaje. En este contexto corporal, debe usarse únicamente «uña». |
| ES-KURSS-LESSONS-LV2-0475 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[1].items[30] | die Nägel — uñas / clavos | die Nägel — uñas | **LABOT** | Combina dos traducciones distintas en un mismo campo mediante una barra. Debe seleccionarse la acepción correspondiente al contexto o separarse en entradas distintas. |
| ES-KURSS-LESSONS-LV2-0476 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[1].items[31] | beschneiden — apgriezt |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0477 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text | Algunos verbos con la vocal raíz a o au en la segunda y tercera persona del presente del singular tienen diéresis. | Algunos verbos cuya raíz contiene a o au cambian estas vocales por ä o äu en la segunda y tercera persona del presente de indicativo singular. | **LABOT** | La formulación «con la vocal raíz a o au» es poco natural y «tienen diéresis» describe de forma imprecisa el fenómeno: las vocales cambian a ä o äu en determinadas personas. |
| ES-KURSS-LESSONS-LV2-0478 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading | Verbos compuestos | Verbos separables | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0479 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text | Si la parte preposicional está acentuada, se separa en tiempo presente y va al final de la oración. | Si el prefijo está acentuado, se separa en presente y se coloca al final de la oración. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0480 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text | Si el prefijo no está acentuado, no está acentuado. | Si el prefijo no está acentuado, no se separa. | **LABOT** | La segunda parte repite «no está acentuado» y no expresa la regla gramatical. La explicación debe indicar que el prefijo permanece unido al verbo. |
| ES-KURSS-LESSONS-LV2-0481 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text | El pronombre jeder va en círculos como los artículos der / die / das. | El pronombre «jeder» se declina como los artículos «der», «die» y «das». | **LABOT** | «Va en círculos» es una traducción no idiomática y no transmite el concepto de declinación. Además, conviene conservar los términos alemanes entre comillas para identificar las formas. |
| ES-KURSS-LESSONS-LV2-0482 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[2].wir | Wir machen dos Schritte. | Wir machen zwei Schritte. | **LABOT** | El ejemplo alemán contiene la palabra española «dos»; debe conservarse íntegramente en alemán. |
| ES-KURSS-LESSONS-LV2-0483 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].er | Er bleibt stehen. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0484 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[3].wir | Wir bleiben stehen. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0485 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].ich | Ich kehre mich um. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0486 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].er | Er kehrt sich um. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0487 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[4].wir | Wir kehren uns um. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0488 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].ich | Ich strecke einen Arm aus. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0489 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].er | Er streckt einen Arm aus. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0490 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[5].wir | Wir strecken einen Arm aus. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0491 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].ich | Ich strecke beide Arme aus. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0492 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].er | Er streckt beide Arme aus. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0493 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[6].wir | Wir strecken beide Arme aus. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0494 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].ich | Ich senske beide Arme. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0495 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].er | Er sentkt beide Arme. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0496 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[7].wir | Wir senten beide Arme. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0497 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].ich | Ich drehe den Kopf nach links. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0498 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].er | Er dreht den Kopf nach enlaces. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0499 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[8].wir | Wir drehen den Kopf nach links. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0500 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].ich | Ich drehe den Kopf nach rechts. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0501 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].er | Er dreht den Kopf nach rechts. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0502 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[9].wir | Wir drehen den Kopf nach rechts. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0503 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].ich | Ich halte den Kopf gerade. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0504 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].er | Er hält den Kopf gerade. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0505 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[10].wir | Wir halten den Kopf gerade. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0506 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].ich | Ich atme tief. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0507 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].er | Er atmet tief. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0508 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[11].wir | Wir atmen tief. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0509 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[0].lv | ¿Cuántas manos tiene una persona? | ¿Cuántos brazos tiene una persona? | **LABOT** | «Arme» significa «brazos», no «manos». |
| ES-KURSS-LESSONS-LV2-0510 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[1].lv | cuantas piernas tienes | ¿Cuántas piernas tienes? | **LABOT** | Faltan la mayúscula inicial, la tilde de «cuántas» y los signos de interrogación. |
| ES-KURSS-LESSONS-LV2-0511 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[4].lv | ¿Qué es una mano? | ¿Cómo es el brazo? | **LABOT** | El alemán pregunta «Wie ist der Arm?»; «Arm» significa «brazo» y «Wie ist» corresponde a «¿Cómo es?». |
| ES-KURSS-LESSONS-LV2-0512 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[5].lv | ¿Qué es la pierna? | ¿Cómo es la pierna? | **LABOT** | «Wie ist das Bein?» significa «¿Cómo es la pierna?», no «¿Qué es la pierna?». |
| ES-KURSS-LESSONS-LV2-0513 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[6].lv | La mano es pequeña, pero la pierna es grande. | El brazo es pequeño, pero la pierna es grande. | **LABOT** | «Der Arm» significa «el brazo», no «la mano». |
| ES-KURSS-LESSONS-LV2-0514 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[7].lv | donde esta el cofre | ¿Dónde está el pecho? | **LABOT** | «Brust» se refiere al pecho en este contexto, no a un cofre. También faltan tildes, mayúscula y signos de interrogación. |
| ES-KURSS-LESSONS-LV2-0515 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[10].lv | ¿Cik pirkstu ir plaukstai? | ¿Cuántos dedos tiene la mano? | **LABOT** | El texto visible está en letón, no en español. |
| ES-KURSS-LESSONS-LV2-0516 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[11].lv | Plaukstai ir pieci pirksti. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0517 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv | ¿Kas ir pirkstam? | ¿Qué le pasa al dedo? | **LABOT** | El texto está en letón, no en español. |
| ES-KURSS-LESSONS-LV2-0518 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv | Pirkstam ir regaña. | El dedo tiene una uña. | **LABOT** | Contiene texto letón («Pirkstam ir») y «regaña» no corresponde al significado del ejemplo alemán. |
| ES-KURSS-LESSONS-LV2-0519 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv | ¿Ko tu dari? | ¿Qué haces? | **LABOT** | El texto está en letón, no en español. |
| ES-KURSS-LESSONS-LV2-0520 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[17].lv | Me corto y limpio las uñas. | Me corto las uñas y las limpio. | **LABOT** | «Me corto» sin objeto significa que me corto a mí mismo; además, falta especificar que se cortan las uñas. |
| ES-KURSS-LESSONS-LV2-0521 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[18].lv | Ko Paul dara? |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0522 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv | Extienden ambas manos. | Extienden ambos brazos. | **LABOT** | El ejemplo alemán se refiere a los brazos, no a las manos. |
| ES-KURSS-LESSONS-LV2-0523 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv | Dejan caer ambas manos. | Bajan ambos brazos. | **LABOT** | El ejemplo alemán se refiere a bajar los brazos; «dejar caer las manos» cambia el significado. |
| ES-KURSS-LESSONS-LV2-0524 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[29].lv | Roberto, vingro! |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0525 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv | ¡Müller jaunkundze, vingrojiet! | ¡Señorita Müller, haga gimnasia! | **LABOT** | La frase está en letón, salvo el apellido, y no está traducida al español. |
| ES-KURSS-LESSONS-LV2-0526 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[32].lv | ¡Da dos pasos y luego quédate de pie! | ¡Dé dos pasos y luego quédese de pie! | **LABOT** | El ejemplo usa tratamiento formal («Sie»), pero el español mezcla el imperativo de tú con el contexto formal. |
| ES-KURSS-LESSONS-LV2-0527 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural | ¡Pon la conjugación correcta y hazlo en plural! | ¡Escribe la forma correcta y ponla en plural! | **LABOT** | «Poner la conjugación» y «hazlo» resultan poco naturales y vagos en una instrucción de ejercicio. |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0455",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.lessonItems.13.menuDesc",
    "path": "kurss.lessonItems.13.menuDesc (lesson header subtitle / menu)",
    "current": "Der Körper, partes del cuerpo, turnen y jeder.",
    "new": "El cuerpo («Der Körper»), partes del cuerpo, gimnasia («turnen») y «jeder».",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0456",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.intro",
    "path": "COURSE_LESSON_DATA.kurssLesson13.intro",
    "current": "Conferencia Trece: Der Körper, partes del cuerpo, ejercicio, verbos reflexivos y plural.",
    "new": "Lección 13: «Der Körper», partes del cuerpo, gimnasia, verbos reflexivos y plural.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0462",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[5]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[5]",
    "current": "Die Hand ist klein.",
    "new": "La mano es pequeña.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0463",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[6]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[6]",
    "current": "Das Bein ist dick.",
    "new": "La pierna es gruesa.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0464",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[7]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[7]",
    "current": "Der Fuß ist dünn.",
    "new": "El pie es delgado.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0465",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[8]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[8]",
    "current": "Die Brust ist vorn, aber der Rücken ist hinten.",
    "new": "El pecho está delante, pero la espalda está detrás.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0466",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[9]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[9]",
    "current": "Jede Hand hat fünf Finger.",
    "new": "Cada mano tiene cinco dedos.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0467",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[10]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[10]",
    "current": "Beide Hände haben zehn Finger.",
    "new": "Ambas manos tienen diez dedos.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0468",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[11]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[11]",
    "current": "Jeder Fuß hat fünf Zehen.",
    "new": "Cada pie tiene cinco dedos del pie.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0469",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[12]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[12]",
    "current": "Beide Füße haben zehn Zehen.",
    "new": "Ambos pies tienen diez dedos del pie.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0470",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[13]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[13]",
    "current": "Jeder Finger und jede Zehe haben einen Nagel.",
    "new": "Cada dedo y cada dedo del pie tienen una uña.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0471",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[14]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[0].items[14]",
    "current": "Ich beschneide und reinige die Nägel oft.",
    "new": "Recorto y limpio las uñas a menudo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0474",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[1].items[29]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[1].items[29]",
    "current": "der Nagel — uña / clavo",
    "new": "der Nagel — uña",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0475",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[1].items[30]",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[1].items[30]",
    "current": "die Nägel — uñas / clavos",
    "new": "die Nägel — uñas",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0477",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text",
    "current": "Algunos verbos con la vocal raíz a o au en la segunda y tercera persona del presente del singular tienen diéresis.",
    "new": "Algunos verbos cuya raíz contiene a o au cambian estas vocales por ä o äu en la segunda y tercera persona del presente de indicativo singular.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0478",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading",
    "current": "Verbos compuestos",
    "new": "Verbos separables",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0479",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text",
    "current": "Si la parte preposicional está acentuada, se separa en tiempo presente y va al final de la oración.",
    "new": "Si el prefijo está acentuado, se separa en presente y se coloca al final de la oración.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0480",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text",
    "current": "Si el prefijo no está acentuado, no está acentuado.",
    "new": "Si el prefijo no está acentuado, no se separa.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0481",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text",
    "current": "El pronombre jeder va en círculos como los artículos der / die / das.",
    "new": "El pronombre «jeder» se declina como los artículos «der», «die» y «das».",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0482",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[2].wir",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[4].cards[2].wir",
    "current": "Wir machen dos Schritte.",
    "new": "Wir machen zwei Schritte.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0509",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[0].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[0].lv",
    "current": "¿Cuántas manos tiene una persona?",
    "new": "¿Cuántos brazos tiene una persona?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0510",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[1].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[1].lv",
    "current": "cuantas piernas tienes",
    "new": "¿Cuántas piernas tienes?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0511",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[4].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[4].lv",
    "current": "¿Qué es una mano?",
    "new": "¿Cómo es el brazo?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0512",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[5].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[5].lv",
    "current": "¿Qué es la pierna?",
    "new": "¿Cómo es la pierna?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0513",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[6].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[6].lv",
    "current": "La mano es pequeña, pero la pierna es grande.",
    "new": "El brazo es pequeño, pero la pierna es grande.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0514",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[7].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[7].lv",
    "current": "donde esta el cofre",
    "new": "¿Dónde está el pecho?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0515",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[10].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[10].lv",
    "current": "¿Cik pirkstu ir plaukstai?",
    "new": "¿Cuántos dedos tiene la mano?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0517",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv",
    "current": "¿Kas ir pirkstam?",
    "new": "¿Qué le pasa al dedo?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0518",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv",
    "current": "Pirkstam ir regaña.",
    "new": "El dedo tiene una uña.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0519",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv",
    "current": "¿Ko tu dari?",
    "new": "¿Qué haces?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0520",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[17].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[17].lv",
    "current": "Me corto y limpio las uñas.",
    "new": "Me corto las uñas y las limpio.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0522",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv",
    "current": "Extienden ambas manos.",
    "new": "Extienden ambos brazos.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0523",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv",
    "current": "Dejan caer ambas manos.",
    "new": "Bajan ambos brazos.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0525",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv",
    "current": "¡Müller jaunkundze, vingrojiet!",
    "new": "¡Señorita Müller, haga gimnasia!",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0526",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[32].lv",
    "path": "COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[32].lv",
    "current": "¡Da dos pasos y luego quédate de pie!",
    "new": "¡Dé dos pasos y luego quédese de pie!",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0527",
    "file": "languages/es/ui.js",
    "field": "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural",
    "path": "kurss.exerciseMeta.chooseCasePlural",
    "current": "¡Pon la conjugación correcta y hazlo en plural!",
    "new": "¡Escribe la forma correcta y ponla en plural!",
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
