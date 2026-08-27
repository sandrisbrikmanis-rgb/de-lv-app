# ES–DE Kurss Lessons — OWNER VIEW (group 08: findings 351–400)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 351 (ES Kurss Lessons)

**Finding:** 351
**Audit ID:** ES-KURSS-LESSONS-LV2-0028
**Lesson:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
**Field type:** `example`
**DE (read-only):** sie →
**CURRENT_ES:** sie → -Alemán en:
**PROPOSED_ES:** sie → sie kommen
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** Contiene texto residual («Alemán en») en lugar del ejemplo alemán esperado.
**Reason:** Contiene texto residual («Alemán en») en lugar del ejemplo alemán esperado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 352 (ES Kurss Lessons)

**Finding:** 352
**Audit ID:** ES-KURSS-LESSONS-LV2-0030
**Lesson:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** ♟Presente terminaciones
**PROPOSED_ES:** ♟ Terminaciones del presente
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** El orden de las palabras no es natural en español; debe decir «Terminaciones del presente».
**Reason:** El orden de las palabras no es natural en español; debe decir «Terminaciones del presente».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 353 (ES Kurss Lessons)

**Finding:** 353
**Audit ID:** ES-KURSS-LESSONS-LV2-0031
**Lesson:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** ?Oraciones de preguntas
**PROPOSED_ES:** ?Oraciones interrogativas
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** «Oraciones de preguntas» es comprensible, pero no es la denominación gramatical natural en español; «oraciones interrogativas» es el término estándar.
**Reason:** «Oraciones de preguntas» es comprensible, pero no es la denominación gramatical natural en español; «oraciones interrogativas» es el término estándar.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 354 (ES Kurss Lessons)

**Finding:** 354
**Audit ID:** ES-KURSS-LESSONS-LV2-0032
**Lesson:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** ♣Diferencia de persona
**PROPOSED_ES:** ♣Diferencias según la persona
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Diferencia de persona» suena poco natural y ambiguo como encabezado gramatical.
**Reason:** «Diferencia de persona» suena poco natural y ambiguo como encabezado gramatical.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 355 (ES Kurss Lessons)

**Finding:** 355
**Audit ID:** ES-KURSS-LESSONS-LV2-0033
**Lesson:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → ending-info[0]`
**Field type:** `grammarInfo`
**DE (read-only):** —
**CURRENT_ES:** Eliminar -en de las formas base del verbo y agrega la terminación.
Ejemplo: kommen → komm + terminación
kommenforma base
**PROPOSED_ES:** Eliminar -en de la forma básica del verbo y añadir la terminación.
Ejemplo: kommen → komm + terminación
kommen: forma básica
**Severity:** HIGH
**Category:** ES_GRAMMAR
**Problem:** La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»), «formas base» no es la formulación más natural y la última línea carece de espacio y separador.
**Reason:** La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»), «formas base» no es la formulación más natural y la última línea carece de espacio y separador.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 356 (ES Kurss Lessons)

**Finding:** 356
**Audit ID:** ES-KURSS-LESSONS-LV2-0034
**Lesson:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → p[0]`
**Field type:** `paragraph`
**DE (read-only):** —
**CURRENT_ES:** Eliminar -en de las formas base del verbo y agrega la terminación.
**PROPOSED_ES:** Eliminar -en de la forma básica del verbo y añadir la terminación.
**Severity:** MEDIUM
**Category:** ES_GRAMMAR
**Problem:** La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»); además, «forma básica» es más natural que «formas base» en este contexto.
**Reason:** La instrucción mezcla infinitivo («Eliminar») con imperativo («agrega»); además, «forma básica» es más natural que «formas base» en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 357 (ES Kurss Lessons)

**Finding:** 357
**Audit ID:** ES-KURSS-LESSONS-LV2-0035
**Lesson:** `lesson1`
**Path:** `lesson1TrainingCardsEs[0].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Kommst du?
**CURRENT_ES:** ¿vienes?
**PROPOSED_ES:** ¿Vienes?
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** Como oración independiente, debe escribirse con mayúscula inicial.
**Reason:** Como oración independiente, debe escribirse con mayúscula inicial.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 358 (ES Kurss Lessons)

**Finding:** 358
**Audit ID:** ES-KURSS-LESSONS-LV2-0036
**Lesson:** `lesson1`
**Path:** `lesson1TrainingCardsEs[5].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Ja, sie gehen.
**CURRENT_ES:** Sí, van.
**PROPOSED_ES:** Sí, se van.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La respuesta no conserva el valor pronominal de «Se van?»; «Sí, van» sugiere que van a algún lugar, no necesariamente que se marchan.
**Reason:** La respuesta no conserva el valor pronominal de «Se van?»; «Sí, van» sugiere que van a algún lugar, no necesariamente que se marchan.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 359 (ES Kurss Lessons)

**Finding:** 359
**Audit ID:** ES-KURSS-LESSONS-LV2-0037
**Lesson:** `lesson1`
**Path:** `lesson1TrainingCardsEs[9].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Geht ihr?
**CURRENT_ES:** Vas a ir
**PROPOSED_ES:** ¿Vais?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El texto actual es una afirmación en segunda persona singular y expresa una perífrasis de futuro, mientras que el contexto alemán es una pregunta dirigida a varias personas.
**Reason:** El texto actual es una afirmación en segunda persona singular y expresa una perífrasis de futuro, mientras que el contexto alemán es una pregunta dirigida a varias personas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 360 (ES Kurss Lessons)

**Finding:** 360
**Audit ID:** ES-KURSS-LESSONS-LV2-0040
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** nein
**CURRENT_ES:** nein — trabajar
**PROPOSED_ES:** nein — no
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** «nein» significa «no», no «trabajar».
**Reason:** «nein» significa «no», no «trabajar».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 361 (ES Kurss Lessons)

**Finding:** 361
**Audit ID:** ES-KURSS-LESSONS-LV2-0041
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
**Field type:** `example`
**DE (read-only):** nicht
**CURRENT_ES:** nicht — preguntar
**PROPOSED_ES:** nicht — no
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** «nicht» es el adverbio alemán de negación «no», mientras que «preguntar» corresponde a «fragen».
**Reason:** «nicht» es el adverbio alemán de negación «no», mientras que «preguntar» corresponde a «fragen».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 362 (ES Kurss Lessons)

**Finding:** 362
**Audit ID:** ES-KURSS-LESSONS-LV2-0042
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
**Field type:** `example`
**DE (read-only):** arbeiten
**CURRENT_ES:** arbeiten — was tut er? ¿Qué está haciendo?
**PROPOSED_ES:** arbeiten — trabajar
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene una frase alemana no traducida («was tut er?») y añade una pregunta ajena al significado de la palabra «arbeiten».
**Reason:** El campo contiene una frase alemana no traducida («was tut er?») y añade una pregunta ajena al significado de la palabra «arbeiten».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 363 (ES Kurss Lessons)

**Finding:** 363
**Audit ID:** ES-KURSS-LESSONS-LV2-0043
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
**Field type:** `example`
**DE (read-only):** fragen
**CURRENT_ES:** fragen — ¿qué hacen ellos?
**PROPOSED_ES:** fragen — preguntar
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** «fragen» significa «preguntar»; «¿qué hacen ellos?» corresponde a otra expresión alemana.
**Reason:** «fragen» significa «preguntar»; «¿qué hacen ellos?» corresponde a otra expresión alemana.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 364 (ES Kurss Lessons)

**Finding:** 364
**Audit ID:** ES-KURSS-LESSONS-LV2-0044
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
**Field type:** `example`
**DE (read-only):** was tut er?
**CURRENT_ES:** was tut er? — responder
**PROPOSED_ES:** was tut er? — ¿qué hace él?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Was tut er?» significa «¿qué hace él?», no «responder».
**Reason:** «Was tut er?» significa «¿qué hace él?», no «responder».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 365 (ES Kurss Lessons)

**Finding:** 365
**Audit ID:** ES-KURSS-LESSONS-LV2-0045
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
**Field type:** `example`
**DE (read-only):** was tun sie?
**CURRENT_ES:** was tun sie? — calcular
**PROPOSED_ES:** was tun sie? — ¿qué hacen ellos?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Was tun sie?» significa «¿qué hacen ellos?», no «calcular».
**Reason:** «Was tun sie?» significa «¿qué hacen ellos?», no «calcular».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 366 (ES Kurss Lessons)

**Finding:** 366
**Audit ID:** ES-KURSS-LESSONS-LV2-0046
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
**Field type:** `example`
**DE (read-only):** aber
**CURRENT_ES:** aber — dibujar
**PROPOSED_ES:** aber — pero
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Aber» significa «pero»; «dibujar» no corresponde.
**Reason:** «Aber» significa «pero»; «dibujar» no corresponde.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 367 (ES Kurss Lessons)

**Finding:** 367
**Audit ID:** ES-KURSS-LESSONS-LV2-0047
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
**Field type:** `example`
**DE (read-only):** antworten
**CURRENT_ES:** antworten — Marie
**PROPOSED_ES:** antworten — responder
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Marie» no es la traducción de «antworten»; el verbo significa «responder».
**Reason:** «Marie» no es la traducción de «antworten»; el verbo significa «responder».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 368 (ES Kurss Lessons)

**Finding:** 368
**Audit ID:** ES-KURSS-LESSONS-LV2-0051
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → course-example[11]`
**Field type:** `example`
**DE (read-only):** nosotros rechnen
**CURRENT_ES:** nosotros rechnen
**PROPOSED_ES:** wir rechnen
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El pronombre español «nosotros» sustituye indebidamente al pronombre alemán. Los ejemplos alemanes deben permanecer íntegramente en alemán.
**Reason:** El pronombre español «nosotros» sustituye indebidamente al pronombre alemán. Los ejemplos alemanes deben permanecer íntegramente en alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 369 (ES Kurss Lessons)

**Finding:** 369
**Audit ID:** ES-KURSS-LESSONS-LV2-0052
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-note[1]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** En oraciones interrogativas que comienzan con la palabra interrogativa, por ejemplo: ¿qué? ¿qué? ¿OMS? ¿por qué? ¿por qué? etc., el verbo está inmediatamente después de la palabra interrogativa.
**PROPOSED_ES:** En las oraciones interrogativas que comienzan con una palabra interrogativa, como «qué», «quién» o «por qué», el verbo va inmediatamente después de la palabra interrogativa.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** Hay repeticiones erróneas («¿qué?» y «¿por qué?») y «OMS» es un resto extranjero o una traducción incorrecta. La redacción también necesita naturalidad y puntuación.
**Reason:** Hay repeticiones erróneas («¿qué?» y «¿por qué?») y «OMS» es un resto extranjero o una traducción incorrecta. La redacción también necesita naturalidad y puntuación.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 370 (ES Kurss Lessons)

**Finding:** 370
**Audit ID:** ES-KURSS-LESSONS-LV2-0053
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[0]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 1Terminaciones con e
**PROPOSED_ES:** 1. Terminaciones con e
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**Problem:** Falta un espacio o signo de puntuación entre el número y el encabezado.
**Reason:** Falta un espacio o signo de puntuación entre el número y el encabezado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 371 (ES Kurss Lessons)

**Finding:** 371
**Audit ID:** ES-KURSS-LESSONS-LV2-0054
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[1]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 2Palabra en cuestión
**PROPOSED_ES:** 2. Palabra interrogativa
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** Falta separación después del número y «palabra en cuestión» no es una denominación natural ni precisa para este concepto gramatical.
**Reason:** Falta separación después del número y «palabra en cuestión» no es una denominación natural ni precisa para este concepto gramatical.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 372 (ES Kurss Lessons)

**Finding:** 372
**Audit ID:** ES-KURSS-LESSONS-LV2-0055
**Lesson:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → grammar-header[2]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 3Negación con nicht
**PROPOSED_ES:** 3. Negación con nicht
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta el espacio tras el número y la puntuación habitual de la numeración.
**Reason:** Falta el espacio tras el número y la puntuación habitual de la numeración.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 373 (ES Kurss Lessons)

**Finding:** 373
**Audit ID:** ES-KURSS-LESSONS-LV2-0056
**Lesson:** `lesson2`
**Path:** `lesson2TrainingCardsEs[1].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Paul fragt.
**CURRENT_ES:** pregunta Pablo.
**PROPOSED_ES:** Pablo pregunta.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** El orden de palabras resulta poco natural en español y la oración comienza con minúscula.
**Reason:** El orden de palabras resulta poco natural en español y la oración comienza con minúscula.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 374 (ES Kurss Lessons)

**Finding:** 374
**Audit ID:** ES-KURSS-LESSONS-LV2-0057
**Lesson:** `lesson2`
**Path:** `lesson2TrainingCardsEs[6].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Nein, sie singen nicht, sie rechnen.
**CURRENT_ES:** No, no cantan, cuentan.
**PROPOSED_ES:** No, no cantan, calculan.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «rechnen» significa «calcular» o «hacer cuentas», no «contar» en el sentido habitual de «cuentan».
**Reason:** El alemán «rechnen» significa «calcular» o «hacer cuentas», no «contar» en el sentido habitual de «cuentan».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 375 (ES Kurss Lessons)

**Finding:** 375
**Audit ID:** ES-KURSS-LESSONS-LV2-0058
**Lesson:** `lesson2`
**Path:** `lesson2TrainingCardsEs[8].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Ich stehe und singe.
**CURRENT_ES:** Me paro y canto.
**PROPOSED_ES:** Estoy de pie y canto.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Ich stehe» expresa estar de pie; «me paro» suele significar que me detengo o que me pongo de pie.
**Reason:** «Ich stehe» expresa estar de pie; «me paro» suele significar que me detengo o que me pongo de pie.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 376 (ES Kurss Lessons)

**Finding:** 376
**Audit ID:** ES-KURSS-LESSONS-LV2-0059
**Lesson:** `lesson2`
**Path:** `lesson2TrainingCardsEs[9].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Zeichnet ihr?
**CURRENT_ES:** ¿Dibujas?
**PROPOSED_ES:** ¿Dibujan?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «ihr» se refiere a la segunda persona plural, no a «tú».
**Reason:** El alemán «ihr» se refiere a la segunda persona plural, no a «tú».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 377 (ES Kurss Lessons)

**Finding:** 377
**Audit ID:** ES-KURSS-LESSONS-LV2-0060
**Lesson:** `lesson2`
**Path:** `lesson2TrainingCardsEs[10].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Ja, wir zeichnen, aber Marie spielt.
**CURRENT_ES:** Sí, empatamos, pero María juega.
**PROPOSED_ES:** Sí, dibujamos, pero María juega.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Zeichnen» significa «dibujar»; «empatamos» no corresponde al significado alemán.
**Reason:** «Zeichnen» significa «dibujar»; «empatamos» no corresponde al significado alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 378 (ES Kurss Lessons)

**Finding:** 378
**Audit ID:** ES-KURSS-LESSONS-LV2-0061
**Lesson:** `lesson2`
**Path:** `lesson2TrainingCardsEs[11].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Was tut ihr?
**CURRENT_ES:** qué estás haciendo
**PROPOSED_ES:** qué están haciendo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «ihr» es segunda persona plural; «estás» es singular.
**Reason:** El alemán «ihr» es segunda persona plural; «estás» es singular.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 379 (ES Kurss Lessons)

**Finding:** 379
**Audit ID:** ES-KURSS-LESSONS-LV2-0062
**Lesson:** `lesson2`
**Path:** `lesson2TrainingCardsEs[13].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Wer geht?
**CURRENT_ES:** ¿Qué está sucediendo?
**PROPOSED_ES:** ¿Quién se va?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Wer geht?» significa «¿Quién se va?» o «¿Quién va?», no «¿Qué está sucediendo?».
**Reason:** «Wer geht?» significa «¿Quién se va?» o «¿Quién va?», no «¿Qué está sucediendo?».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 380 (ES Kurss Lessons)

**Finding:** 380
**Audit ID:** ES-KURSS-LESSONS-LV2-0064
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
**Field type:** `example`
**DE (read-only):** wer
**CURRENT_ES:** wer — aquí
**PROPOSED_ES:** wer — quién
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «wer» significa «quién»; «aquí» corresponde a «hier» y no al término mostrado.
**Reason:** El alemán «wer» significa «quién»; «aquí» corresponde a «hier» y no al término mostrado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 381 (ES Kurss Lessons)

**Finding:** 381
**Audit ID:** ES-KURSS-LESSONS-LV2-0065
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** was
**CURRENT_ES:** was — allí
**PROPOSED_ES:** was — qué
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «was» significa «qué», no «allí».
**Reason:** «was» significa «qué», no «allí».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 382 (ES Kurss Lessons)

**Finding:** 382
**Audit ID:** ES-KURSS-LESSONS-LV2-0066
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
**Field type:** `example`
**DE (read-only):** hier
**CURRENT_ES:** hier — der Tisch table
**PROPOSED_ES:** hier — aquí
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «hier» significa «aquí»; además, «table» es un resto en inglés y no corresponde al ejemplo.
**Reason:** «hier» significa «aquí»; además, «table» es un resto en inglés y no corresponde al ejemplo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 383 (ES Kurss Lessons)

**Finding:** 383
**Audit ID:** ES-KURSS-LESSONS-LV2-0067
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
**Field type:** `example`
**DE (read-only):** dort
**CURRENT_ES:** dort — mesa
**PROPOSED_ES:** dort — allí
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «dort» significa «allí», no «mesa».
**Reason:** «dort» significa «allí», no «mesa».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 384 (ES Kurss Lessons)

**Finding:** 384
**Audit ID:** ES-KURSS-LESSONS-LV2-0068
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
**Field type:** `example`
**DE (read-only):** der Tisch
**CURRENT_ES:** der Tisch — banco
**PROPOSED_ES:** der Tisch — la mesa
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «der Tisch» significa «la mesa», no «banco».
**Reason:** «der Tisch» significa «la mesa», no «banco».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 385 (ES Kurss Lessons)

**Finding:** 385
**Audit ID:** ES-KURSS-LESSONS-LV2-0069
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
**Field type:** `example`
**DE (read-only):** ein Tisch
**CURRENT_ES:** ein Tisch — banco
**PROPOSED_ES:** ein Tisch — una mesa
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «ein Tisch» significa «una mesa», no «banco».
**Reason:** «ein Tisch» significa «una mesa», no «banco».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 386 (ES Kurss Lessons)

**Finding:** 386
**Audit ID:** ES-KURSS-LESSONS-LV2-0070
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
**Field type:** `example`
**DE (read-only):** die Bank
**CURRENT_ES:** die Bank — tumbado
**PROPOSED_ES:** die Bank — el banco
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «die Bank» significa «el banco»; «tumbado» corresponde a otro significado.
**Reason:** «die Bank» significa «el banco»; «tumbado» corresponde a otro significado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 387 (ES Kurss Lessons)

**Finding:** 387
**Audit ID:** ES-KURSS-LESSONS-LV2-0072
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
**Field type:** `example`
**DE (read-only):** liegen
**CURRENT_ES:** liegen — un libro
**PROPOSED_ES:** liegen — estar tumbado
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «liegen» es un verbo; significa «estar tumbado» o «estar colocado», no «un libro».
**Reason:** «liegen» es un verbo; significa «estar tumbado» o «estar colocado», no «un libro».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 388 (ES Kurss Lessons)

**Finding:** 388
**Audit ID:** ES-KURSS-LESSONS-LV2-0073
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
**Field type:** `example`
**DE (read-only):** liegt hier ein Buch?
**CURRENT_ES:** liegt hier ein Buch? — un libro
**PROPOSED_ES:** liegt hier ein Buch? — ¿Hay un libro aquí?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La traducción actual es incompleta y no traduce la pregunta alemana.
**Reason:** La traducción actual es incompleta y no traduce la pregunta alemana.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 389 (ES Kurss Lessons)

**Finding:** 389
**Audit ID:** ES-KURSS-LESSONS-LV2-0074
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
**Field type:** `example`
**DE (read-only):** das Buch
**CURRENT_ES:** das Buch — hang
**PROPOSED_ES:** das Buch — el libro
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «das Buch» significa «el libro»; «hang» es un resto en inglés.
**Reason:** «das Buch» significa «el libro»; «hang» es un resto en inglés.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 390 (ES Kurss Lessons)

**Finding:** 390
**Audit ID:** ES-KURSS-LESSONS-LV2-0075
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
**Field type:** `example`
**DE (read-only):** ein Buch
**CURRENT_ES:** ein Buch — imagen
**PROPOSED_ES:** ein Buch — un libro
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «ein Buch» significa «un libro», no «imagen».
**Reason:** «ein Buch» significa «un libro», no «imagen».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 391 (ES Kurss Lessons)

**Finding:** 391
**Audit ID:** ES-KURSS-LESSONS-LV2-0076
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
**Field type:** `example`
**DE (read-only):** hängen
**CURRENT_ES:** hängen — imagen
**PROPOSED_ES:** hängen — estar colgado
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «hängen» significa «estar colgado» o «colgar», no «imagen».
**Reason:** «hängen» significa «estar colgado» o «colgar», no «imagen».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 392 (ES Kurss Lessons)

**Finding:** 392
**Audit ID:** ES-KURSS-LESSONS-LV2-0077
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
**Field type:** `example`
**DE (read-only):** das Bild
**CURRENT_ES:** das Bild — pizarra
**PROPOSED_ES:** das Bild — la imagen
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «das Bild» significa «la imagen» o «el cuadro», no «pizarra».
**Reason:** «das Bild» significa «la imagen» o «el cuadro», no «pizarra».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 393 (ES Kurss Lessons)

**Finding:** 393
**Audit ID:** ES-KURSS-LESSONS-LV2-0078
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
**Field type:** `example`
**DE (read-only):** ein Bild
**CURRENT_ES:** ein Bild — pizarra
**PROPOSED_ES:** ein Bild — una imagen
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «ein Bild» significa «una imagen», no «pizarra».
**Reason:** «ein Bild» significa «una imagen», no «pizarra».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 394 (ES Kurss Lessons)

**Finding:** 394
**Audit ID:** ES-KURSS-LESSONS-LV2-0079
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
**Field type:** `example`
**DE (read-only):** die Tafel
**CURRENT_ES:** die Tafel — alguien, qué
**PROPOSED_ES:** die Tafel — la pizarra
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS
**Problem:** La traducción no corresponde a «die Tafel» y combina dos significados ajenos al ejemplo.
**Reason:** La traducción no corresponde a «die Tafel» y combina dos significados ajenos al ejemplo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 395 (ES Kurss Lessons)

**Finding:** 395
**Audit ID:** ES-KURSS-LESSONS-LV2-0080
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
**Field type:** `example`
**DE (read-only):** eine Tafel
**CURRENT_ES:** eine Tafel — es
**PROPOSED_ES:** eine Tafel — una pizarra
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «eine Tafel» significa «una pizarra», no «es».
**Reason:** «eine Tafel» significa «una pizarra», no «es».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 396 (ES Kurss Lessons)

**Finding:** 396
**Audit ID:** ES-KURSS-LESSONS-LV2-0081
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
**Field type:** `example`
**DE (read-only):** wie
**CURRENT_ES:** wie — grueso, gordo
**PROPOSED_ES:** wie — cómo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «wie» significa «cómo»; «grueso» y «gordo» no corresponden a este ejemplo.
**Reason:** «wie» significa «cómo»; «grueso» y «gordo» no corresponden a este ejemplo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 397 (ES Kurss Lessons)

**Finding:** 397
**Audit ID:** ES-KURSS-LESSONS-LV2-0082
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[18]`
**Field type:** `example`
**DE (read-only):** ist
**CURRENT_ES:** ist — cuaderno
**PROPOSED_ES:** ist — es
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «ist» es la forma de tercera persona singular de «sein» y significa «es» o «está», no «cuaderno».
**Reason:** «ist» es la forma de tercera persona singular de «sein» y significa «es» o «está», no «cuaderno».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 398 (ES Kurss Lessons)

**Finding:** 398
**Audit ID:** ES-KURSS-LESSONS-LV2-0083
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[19]`
**Field type:** `example`
**DE (read-only):** dick
**CURRENT_ES:** dick — cuaderno
**PROPOSED_ES:** dick — grueso
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «dick» significa «grueso» o «gordo», no «cuaderno».
**Reason:** «dick» significa «grueso» o «gordo», no «cuaderno».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 399 (ES Kurss Lessons)

**Finding:** 399
**Audit ID:** ES-KURSS-LESSONS-LV2-0084
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[20]`
**Field type:** `example`
**DE (read-only):** das Heft
**CURRENT_ES:** das Heft — delgado, delgado
**PROPOSED_ES:** das Heft — el cuaderno
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «das Heft» significa «el cuaderno»; la traducción actual es incorrecta y repite innecesariamente el adjetivo.
**Reason:** «das Heft» significa «el cuaderno»; la traducción actual es incorrecta y repite innecesariamente el adjetivo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 400 (ES Kurss Lessons)

**Finding:** 400
**Audit ID:** ES-KURSS-LESSONS-LV2-0085
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[21]`
**Field type:** `example`
**DE (read-only):** ein Heft
**CURRENT_ES:** ein Heft — bajo
**PROPOSED_ES:** ein Heft — un cuaderno
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «ein Heft» significa «un cuaderno», no «bajo».
**Reason:** «ein Heft» significa «un cuaderno», no «bajo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
