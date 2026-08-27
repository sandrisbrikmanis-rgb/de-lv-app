# ES–DE Kurss Lessons — OWNER VIEW (group 12: findings 551–600)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 551 (ES Kurss Lessons)

**Finding:** 551
**Audit ID:** ES-KURSS-LESSONS-LV2-0300
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[1].lv`
**Field type:** `translateCard`
**DE (read-only):** Öffnet alle Fenster!
**CURRENT_ES:** Atveriet visus logus!
**PROPOSED_ES:** ¡Abrid todas las ventanas!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. El alemán es un imperativo plural.
**Reason:** El texto está en letón, no en español. El alemán es un imperativo plural.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 552 (ES Kurss Lessons)

**Finding:** 552
**Audit ID:** ES-KURSS-LESSONS-LV2-0301
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[9].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie spricht er?
**CURRENT_ES:** ¿Cómo habla?
**PROPOSED_ES:** ¿Cómo habla él?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán especifica que se pregunta por un sujeto masculino («er»); la versión española omite esa referencia y puede interpretarse también como «usted».
**Reason:** El alemán especifica que se pregunta por un sujeto masculino («er»); la versión española omite esa referencia y puede interpretarse también como «usted».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 553 (ES Kurss Lessons)

**Finding:** 553
**Audit ID:** ES-KURSS-LESSONS-LV2-0302
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[12].lv`
**Field type:** `translateCard`
**DE (read-only):** Die Schülerin liest laut und deutlich.
**CURRENT_ES:** El estudiante lee en voz alta y clara.
**PROPOSED_ES:** La estudiante lee en voz alta y con claridad.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El contexto alemán usa un sujeto femenino («die Schülerin»), no «el estudiante». Además, «clara» no expresa naturalmente el adverbio «deutlich» en esta coordinación.
**Reason:** El contexto alemán usa un sujeto femenino («die Schülerin»), no «el estudiante». Además, «clara» no expresa naturalmente el adverbio «deutlich» en esta coordinación.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 554 (ES Kurss Lessons)

**Finding:** 554
**Audit ID:** ES-KURSS-LESSONS-LV2-0303
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[13].lv`
**Field type:** `translateCard`
**DE (read-only):** Lies gut!
**CURRENT_ES:** Lasi labi!
**PROPOSED_ES:** ¡Lee bien!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. El alemán es un imperativo informal singular.
**Reason:** El texto está en letón, no en español. El alemán es un imperativo informal singular.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 555 (ES Kurss Lessons)

**Finding:** 555
**Audit ID:** ES-KURSS-LESSONS-LV2-0304
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[15].lv`
**Field type:** `translateCard`
**DE (read-only):** Lest gut!
**CURRENT_ES:** ¡Lasiet labí!
**PROPOSED_ES:** ¡Leed bien!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. El alemán corresponde a un imperativo plural o formal.
**Reason:** El texto está en letón, no en español. El alemán corresponde a un imperativo plural o formal.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 556 (ES Kurss Lessons)

**Finding:** 556
**Audit ID:** ES-KURSS-LESSONS-LV2-0306
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[18].lv`
**Field type:** `translateCard`
**DE (read-only):** Herr Lehrer, bitte, setzen Sie sich!
**CURRENT_ES:** Señor Maestro, ¡siéntese!
**PROPOSED_ES:** Señor profesor, ¡siéntese, por favor!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Señor Maestro» no es una forma natural de dirigirse a un docente en español. Además, se omite el matiz de cortesía de «bitte».
**Reason:** «Señor Maestro» no es una forma natural de dirigirse a un docente en español. Además, se omite el matiz de cortesía de «bitte».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 557 (ES Kurss Lessons)

**Finding:** 557
**Audit ID:** ES-KURSS-LESSONS-LV2-0308
**Lesson:** `lesson8`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Usa la forma correcta y forma el plural!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Poner la conjugación» y «hazlo en plural» resultan poco naturales y ambiguos en una instrucción de ejercicio.
**Reason:** «Poner la conjugación» y «hazlo en plural» resultan poco naturales y ambiguos en una instrucción de ejercicio.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 558 (ES Kurss Lessons)

**Finding:** 558
**Audit ID:** ES-KURSS-LESSONS-LV2-0310
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.intro`
**Field type:** `intro`
**DE (read-only):** —
**CURRENT_ES:** Novena conferencia: plural de sustantivos, pronombres demostrativos dieser/jener, ejercicios y traducción.
**PROPOSED_ES:** Novena lección: plural de sustantivos, pronombres demostrativos dieser/jener, ejercicios y traducción.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Conferencia» significa lecture/conference, no una unidad de un curso. El contexto identifica este contenido como la novena lección.
**Reason:** «Conferencia» significa lecture/conference, no una unidad de un curso. El contexto identifica este contenido como la novena lección.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 559 (ES Kurss Lessons)

**Finding:** 559
**Audit ID:** ES-KURSS-LESSONS-LV2-0311
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** sitzen (zicen)
**CURRENT_ES:** sitzen (zicen) — sentarse
**PROPOSED_ES:** sitzen (zicen) — estar sentado
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El verbo alemán sitzen significa «estar sentado»; «sentarse» corresponde normalmente a sich setzen.
**Reason:** El verbo alemán sitzen significa «estar sentado»; «sentarse» corresponde normalmente a sich setzen.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 560 (ES Kurss Lessons)

**Finding:** 560
**Audit ID:** ES-KURSS-LESSONS-LV2-0313
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** die Briefe
**CURRENT_ES:** die Briefe — letras
**PROPOSED_ES:** die Briefe — cartas
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Briefe es el plural de Brief, «carta»; «letras» se traduciría como Buchstaben.
**Reason:** Briefe es el plural de Brief, «carta»; «letras» se traduciría como Buchstaben.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 561 (ES Kurss Lessons)

**Finding:** 561
**Audit ID:** ES-KURSS-LESSONS-LV2-0315
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[3].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** Artikulu nelieto
**PROPOSED_ES:** No se utiliza el artículo
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El encabezado está en letón, no en español.
**Reason:** El encabezado está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 562 (ES Kurss Lessons)

**Finding:** 562
**Audit ID:** ES-KURSS-LESSONS-LV2-0317
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[0].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich nehme ein Heft.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 563 (ES Kurss Lessons)

**Finding:** 563
**Audit ID:** ES-KURSS-LESSONS-LV2-0318
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[0].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich nehme Hefte.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Haga clic para mostrar la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Reason:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 564 (ES Kurss Lessons)

**Finding:** 564
**Audit ID:** ES-KURSS-LESSONS-LV2-0319
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[1].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich öffne das Heft.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 565 (ES Kurss Lessons)

**Finding:** 565
**Audit ID:** ES-KURSS-LESSONS-LV2-0320
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[1].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich öffne die Hefte.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Haga clic para mostrar la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Reason:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 566 (ES Kurss Lessons)

**Finding:** 566
**Audit ID:** ES-KURSS-LESSONS-LV2-0321
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[2].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich nehme auch einen Bleistift.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 567 (ES Kurss Lessons)

**Finding:** 567
**Audit ID:** ES-KURSS-LESSONS-LV2-0322
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[2].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich nehme auch Bleistifte.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Haga clic para mostrar la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Reason:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 568 (ES Kurss Lessons)

**Finding:** 568
**Audit ID:** ES-KURSS-LESSONS-LV2-0323
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[3].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich spitze den Bleistift an.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 569 (ES Kurss Lessons)

**Finding:** 569
**Audit ID:** ES-KURSS-LESSONS-LV2-0324
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[3].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich spitze die Bleistifte an.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Haga clic para mostrar la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Reason:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 570 (ES Kurss Lessons)

**Finding:** 570
**Audit ID:** ES-KURSS-LESSONS-LV2-0325
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[4].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich setze mich und schreibe langsam.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 571 (ES Kurss Lessons)

**Finding:** 571
**Audit ID:** ES-KURSS-LESSONS-LV2-0326
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[4].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich setze mich und schreibe langsam.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Haga clic para mostrar la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Reason:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 572 (ES Kurss Lessons)

**Finding:** 572
**Audit ID:** ES-KURSS-LESSONS-LV2-0327
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[5].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich schreibe schnell.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 573 (ES Kurss Lessons)

**Finding:** 573
**Audit ID:** ES-KURSS-LESSONS-LV2-0328
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[5].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich schreibe schnell.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Haga clic para mostrar la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Reason:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 574 (ES Kurss Lessons)

**Finding:** 574
**Audit ID:** ES-KURSS-LESSONS-LV2-0329
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[6].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich mache das Heft zu.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 575 (ES Kurss Lessons)

**Finding:** 575
**Audit ID:** ES-KURSS-LESSONS-LV2-0330
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[6].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich mache die Hefte zu.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Haga clic para mostrar la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Reason:** «card» es un resto del inglés en un texto visible para el usuario; «tarjeta» es el término español adecuado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 576 (ES Kurss Lessons)

**Finding:** 576
**Audit ID:** ES-KURSS-LESSONS-LV2-0331
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[7].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich lege den Bleistift hin.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambie esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Reason:** «3ra» no es la forma recomendada para expresar el ordinal en español; además, conviene mantener el tratamiento formal usado en las instrucciones siguientes.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 577 (ES Kurss Lessons)

**Finding:** 577
**Audit ID:** ES-KURSS-LESSONS-LV2-0332
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[7].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich lege die Bleistifte hin.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Al hacer clic de nuevo, se muestra la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «Card» es un resto del inglés; en español debe usarse «tarjeta».
**Reason:** «Card» es un resto del inglés; en español debe usarse «tarjeta».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 578 (ES Kurss Lessons)

**Finding:** 578
**Audit ID:** ES-KURSS-LESSONS-LV2-0333
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[8].forms[0].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich sitze ruhig.
**CURRENT_ES:** Cambia esta oración a 3ra persona del singular.
**PROPOSED_ES:** Cambia esta oración a la tercera persona del singular.
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** La abreviatura «3ra» no es adecuada en este texto didáctico; debe escribirse «tercera».
**Reason:** La abreviatura «3ra» no es adecuada en este texto didáctico; debe escribirse «tercera».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 579 (ES Kurss Lessons)

**Finding:** 579
**Audit ID:** ES-KURSS-LESSONS-LV2-0334
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].cards[8].forms[3].task`
**Field type:** `exerciseFormTask`
**DE (read-only):** Ich sitze ruhig.
**CURRENT_ES:** Listo. El siguiente clic muestra la siguiente card.
**PROPOSED_ES:** Listo. Al hacer clic de nuevo, se muestra la siguiente tarjeta.
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** «Card» es un resto del inglés; en español debe usarse «tarjeta».
**Reason:** «Card» es un resto del inglés; en español debe usarse «tarjeta».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 580 (ES Kurss Lessons)

**Finding:** 580
**Audit ID:** ES-KURSS-LESSONS-LV2-0335
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[3].lv`
**Field type:** `translateCard`
**DE (read-only):** Was machen Sie?
**CURRENT_ES:** qué estás haciendo
**PROPOSED_ES:** ¿Qué está haciendo usted?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán usa «Sie», tratamiento formal de segunda persona; «estás» corresponde al tratamiento informal de «tú».
**Reason:** El alemán usa «Sie», tratamiento formal de segunda persona; «estás» corresponde al tratamiento informal de «tú».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 581 (ES Kurss Lessons)

**Finding:** 581
**Audit ID:** ES-KURSS-LESSONS-LV2-0336
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[6].lv`
**Field type:** `translateCard`
**DE (read-only):** Herr Lehrer, setzen Sie sich und lesen Sie!
**CURRENT_ES:** ¡Señor Maestro, siéntese y lea!
**PROPOSED_ES:** ¡Señor profesor, siéntese y lea!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Señor Maestro» resulta poco natural como tratamiento en español; «señor profesor» es la formulación habitual.
**Reason:** «Señor Maestro» resulta poco natural como tratamiento en español; «señor profesor» es la formulación habitual.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 582 (ES Kurss Lessons)

**Finding:** 582
**Audit ID:** ES-KURSS-LESSONS-LV2-0337
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[10].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie ist dieser Teller?
**CURRENT_ES:** ¿Qué es este plato?
**PROPOSED_ES:** ¿Cómo es este plato?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Wie ist» pregunta cómo es algo, no qué es; además, «Teller» significa «plato» en el sentido de vajilla, no una identificación del objeto.
**Reason:** «Wie ist» pregunta cómo es algo, no qué es; además, «Teller» significa «plato» en el sentido de vajilla, no una identificación del objeto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 583 (ES Kurss Lessons)

**Finding:** 583
**Audit ID:** ES-KURSS-LESSONS-LV2-0338
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[12].lv`
**Field type:** `translateCard`
**DE (read-only):** Sind die Briefe lang oder kurz?
**CURRENT_ES:** ¿Las letras son largas o cortas?
**PROPOSED_ES:** ¿Las cartas son largas o cortas?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Briefe» significa «cartas» en este contexto; «letras» sería «Buchstaben» en alemán.
**Reason:** «Briefe» significa «cartas» en este contexto; «letras» sería «Buchstaben» en alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 584 (ES Kurss Lessons)

**Finding:** 584
**Audit ID:** ES-KURSS-LESSONS-LV2-0339
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[13].lv`
**Field type:** `translateCard`
**DE (read-only):** Anna, spitz diesen Bleistift an!
**CURRENT_ES:** ¡Anna, afila ese lápiz!
**PROPOSED_ES:** ¡Anna, afila este lápiz!
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El demostrativo alemán «diesen» corresponde a «este», no a «ese».
**Reason:** El demostrativo alemán «diesen» corresponde a «este», no a «ese».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 585 (ES Kurss Lessons)

**Finding:** 585
**Audit ID:** ES-KURSS-LESSONS-LV2-0340
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[14].lv`
**Field type:** `translateCard`
**DE (read-only):** Herr Lehrer, bitte spitzen Sie diesen Bleistift an!
**CURRENT_ES:** ¡Maestro, por favor afile este lápiz!
**PROPOSED_ES:** ¡Profesor, por favor, afile este lápiz!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Maestro» como vocativo resulta menos natural en este contexto que «profesor»; también se recomienda la coma tras «por favor».
**Reason:** «Maestro» como vocativo resulta menos natural en este contexto que «profesor»; también se recomienda la coma tras «por favor».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 586 (ES Kurss Lessons)

**Finding:** 586
**Audit ID:** ES-KURSS-LESSONS-LV2-0341
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[15].lv`
**Field type:** `translateCard`
**DE (read-only):** Leg jenen Bleistift hin!
**CURRENT_ES:** ¡Deja ese lápiz!
**PROPOSED_ES:** ¡Pon ese lápiz ahí!
**Severity:** MEDIUM
**Category:** TRANSLATION
**Problem:** «Leg ... hin» indica colocar o poner el lápiz, mientras que «deja ese lápiz» suele significar no tocarlo o abandonarlo.
**Reason:** «Leg ... hin» indica colocar o poner el lápiz, mientras que «deja ese lápiz» suele significar no tocarlo o abandonarlo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 587 (ES Kurss Lessons)

**Finding:** 587
**Audit ID:** ES-KURSS-LESSONS-LV2-0342
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[16].lv`
**Field type:** `translateCard`
**DE (read-only):** Mach das Fenster zu!
**CURRENT_ES:** ¡Aiztaisi logu!
**PROPOSED_ES:** ¡Cierra la ventana!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español, y no traduce el contenido alemán para el usuario.
**Reason:** El texto está en letón, no en español, y no traduce el contenido alemán para el usuario.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 588 (ES Kurss Lessons)

**Finding:** 588
**Audit ID:** ES-KURSS-LESSONS-LV2-0343
**Lesson:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[17].lv`
**Field type:** `translateCard`
**DE (read-only):** Was macht das Mädchen endlich?
**CURRENT_ES:** Ko meitene beidzot dara?
**PROPOSED_ES:** ¿Qué hace finalmente la niña?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español, y no traduce el contenido alemán para el usuario.
**Reason:** El texto está en letón, no en español, y no traduce el contenido alemán para el usuario.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 589 (ES Kurss Lessons)

**Finding:** 589
**Audit ID:** ES-KURSS-LESSONS-LV2-0344
**Lesson:** `lesson9`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Usa la conjugación correcta y pon la frase en plural!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción didáctica.
**Reason:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción didáctica.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 590 (ES Kurss Lessons)

**Finding:** 590
**Audit ID:** ES-KURSS-LESSONS-LV2-0346
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.intro`
**Field type:** `intro`
**DE (read-only):** —
**CURRENT_ES:** Décima conferencia: sein, können, formas de mando, salud, edad y profesiones.
**PROPOSED_ES:** Lección décima: sein, können, formas del imperativo, salud, edad y profesiones.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** «Conferencia» no corresponde al contexto de una lección y «formas de mando» es una traducción poco natural e imprecisa de las formas del imperativo.
**Reason:** «Conferencia» no corresponde al contexto de una lección y «formas de mando» es una traducción poco natural e imprecisa de las formas del imperativo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 591 (ES Kurss Lessons)

**Finding:** 591
**Audit ID:** ES-KURSS-LESSONS-LV2-0349
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** sei gesund
**CURRENT_ES:** sei gesund — esi vesels!
**PROPOSED_ES:** sei gesund — ¡mantente sano!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La traducción contiene texto letón («esi vesels!») en lugar de español.
**Reason:** La traducción contiene texto letón («esi vesels!») en lugar de español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 592 (ES Kurss Lessons)

**Finding:** 592
**Audit ID:** ES-KURSS-LESSONS-LV2-0350
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** seid gesund
**CURRENT_ES:** seid gesund — esiet veseli!
**PROPOSED_ES:** seid gesund — ¡manteneos sanos!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La traducción contiene texto letón («esiet veseli!») en lugar de español.
**Reason:** La traducción contiene texto letón («esiet veseli!») en lugar de español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 593 (ES Kurss Lessons)

**Finding:** 593
**Audit ID:** ES-KURSS-LESSONS-LV2-0351
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** die Frau
**CURRENT_ES:** die Frau — mujer / esposa
**PROPOSED_ES:** die Frau — mujer o esposa, según el contexto
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS
**Problem:** La barra combina dos significados distintos sin indicar que la elección depende del contexto.
**Reason:** La barra combina dos significados distintos sin indicar que la elección depende del contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 594 (ES Kurss Lessons)

**Finding:** 594
**Audit ID:** ES-KURSS-LESSONS-LV2-0352
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Verbo auxiliar sein - estar desordenado. Por tanto, hay que aprenderlo bien.
**PROPOSED_ES:** El verbo auxiliar sein («ser/estar») es irregular. Por tanto, hay que aprenderlo bien.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Desordenado» no significa «irregular» en este contexto y además falta indicar el significado básico de sein como «ser/estar».
**Reason:** «Desordenado» no significa «irregular» en este contexto y además falta indicar el significado básico de sein como «ser/estar».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 595 (ES Kurss Lessons)

**Finding:** 595
**Audit ID:** ES-KURSS-LESSONS-LV2-0353
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Asimismo, el verbo auxiliar können (poder) tiene una declinación irregular.
**PROPOSED_ES:** Asimismo, el verbo modal können («poder») tiene una conjugación irregular.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** Los verbos se «conjugan», no se «declinan». Además, können se clasifica normalmente como verbo modal, no como verbo auxiliar.
**Reason:** Los verbos se «conjugan», no se «declinan». Además, können se clasifica normalmente como verbo modal, no como verbo auxiliar.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 596 (ES Kurss Lessons)

**Finding:** 596
**Audit ID:** ES-KURSS-LESSONS-LV2-0354
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[0].lv`
**Field type:** `translateCard`
**DE (read-only):** Bist du gesund?
**CURRENT_ES:** Vai tu esi vesels?
**PROPOSED_ES:** ¿Estás sano?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. Además, no traduce al español la pregunta alemana.
**Reason:** El texto está en letón, no en español. Además, no traduce al español la pregunta alemana.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 597 (ES Kurss Lessons)

**Finding:** 597
**Audit ID:** ES-KURSS-LESSONS-LV2-0355
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[2].lv`
**Field type:** `translateCard`
**DE (read-only):** Ist Paul gesund?
**CURRENT_ES:** Vai Paul ir vasijas?
**PROPOSED_ES:** ¿Está Paul sano?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. Debe traducirse al español la pregunta alemana.
**Reason:** El texto está en letón, no en español. Debe traducirse al español la pregunta alemana.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 598 (ES Kurss Lessons)

**Finding:** 598
**Audit ID:** ES-KURSS-LESSONS-LV2-0356
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[9].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie alt ist Adolf?
**CURRENT_ES:** ¿Cik vecs ir Adolfs?
**PROPOSED_ES:** ¿Cuántos años tiene Adolf?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** La pregunta está en letón, no en español.
**Reason:** La pregunta está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 599 (ES Kurss Lessons)

**Finding:** 599
**Audit ID:** ES-KURSS-LESSONS-LV2-0357
**Lesson:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[11].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer bist du?
**CURRENT_ES:** ¿Kas tu esi?
**PROPOSED_ES:** ¿Quién eres?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** La pregunta está en letón, no en español.
**Reason:** La pregunta está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 600 (ES Kurss Lessons)

**Finding:** 600
**Audit ID:** ES-KURSS-LESSONS-LV2-0358
**Lesson:** `lesson10`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Usa la conjugación correcta y transforma la frase al plural!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Pon la conjugación» y, especialmente, «hazlo» resultan poco naturales y vagos en una instrucción didáctica.
**Reason:** «Pon la conjugación» y, especialmente, «hazlo» resultan poco naturales y vagos en una instrucción didáctica.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
