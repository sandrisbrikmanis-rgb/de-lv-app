# ES–DE Kurss Lessons — OWNER VIEW (group 09: findings 401–450)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 401 (ES Kurss Lessons)

**Finding:** 401
**Audit ID:** ES-KURSS-LESSONS-LV2-0086
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[22]`
**Field type:** `example`
**DE (read-only):** dünn
**CURRENT_ES:** dünn — alto
**PROPOSED_ES:** dünn — delgado
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «dünn» significa «delgado» o «fino», no «alto».
**Reason:** «dünn» significa «delgado» o «fino», no «alto».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 402 (ES Kurss Lessons)

**Finding:** 402
**Audit ID:** ES-KURSS-LESSONS-LV2-0087
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → course-example[0]`
**Field type:** `example`
**DE (read-only):** wer
**CURRENT_ES:** wer - qué
**PROPOSED_ES:** wer — quién
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «wer» pregunta por personas y significa «quién», no «qué».
**Reason:** «wer» pregunta por personas y significa «quién», no «qué».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 403 (ES Kurss Lessons)

**Finding:** 403
**Audit ID:** ES-KURSS-LESSONS-LV2-0091
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** Ja galotne
**CURRENT_ES:** Ja galotne -¿Ar qué? pregunta por temas.
**PROPOSED_ES:** Si la terminación es -…
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo mezcla letón con español y está truncado; la frase resultante no es una explicación gramatical válida.
**Reason:** El campo mezcla letón con español y está truncado; la frase resultante no es una explicación gramatical válida.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 404 (ES Kurss Lessons)

**Finding:** 404
**Audit ID:** ES-KURSS-LESSONS-LV2-0098
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[10]`
**Field type:** `example`
**DE (read-only):** der Tisch
**CURRENT_ES:** der Tisch — die Hefte
**PROPOSED_ES:** la mesa — los cuadernos
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible para el usuario contiene vocabulario alemán en lugar de su traducción al español.
**Reason:** El campo visible para el usuario contiene vocabulario alemán en lugar de su traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 405 (ES Kurss Lessons)

**Finding:** 405
**Audit ID:** ES-KURSS-LESSONS-LV2-0099
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[11]`
**Field type:** `example`
**DE (read-only):** die Bank
**CURRENT_ES:** die Bank — ein
**PROPOSED_ES:** el banco — un
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El ejemplo contiene alemán no traducido.
**Reason:** El ejemplo contiene alemán no traducido.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 406 (ES Kurss Lessons)

**Finding:** 406
**Audit ID:** ES-KURSS-LESSONS-LV2-0100
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[12]`
**Field type:** `example`
**DE (read-only):** das Heft
**CURRENT_ES:** das Heft — eine
**PROPOSED_ES:** el cuaderno — una
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El ejemplo contiene alemán no traducido.
**Reason:** El ejemplo contiene alemán no traducido.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 407 (ES Kurss Lessons)

**Finding:** 407
**Audit ID:** ES-KURSS-LESSONS-LV2-0105
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[17]`
**Field type:** `example`
**DE (read-only):** ein Tisch
**CURRENT_ES:** ein Tisch — Hans spielt, aber Marie singt.
**PROPOSED_ES:** una mesa — Hans juega, pero Marie canta.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene segmentos alemanes sin traducir.
**Reason:** El campo visible contiene segmentos alemanes sin traducir.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 408 (ES Kurss Lessons)

**Finding:** 408
**Audit ID:** ES-KURSS-LESSONS-LV2-0106
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[18]`
**Field type:** `example`
**DE (read-only):** ein Heft
**CURRENT_ES:** ein Heft — Hier hängt eine Karte.
**PROPOSED_ES:** un cuaderno — Aquí cuelga un mapa.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El ejemplo contiene alemán no traducido.
**Reason:** El ejemplo contiene alemán no traducido.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 409 (ES Kurss Lessons)

**Finding:** 409
**Audit ID:** ES-KURSS-LESSONS-LV2-0107
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[19]`
**Field type:** `example`
**DE (read-only):** Hans spielt, aber Marie singt.
**CURRENT_ES:** Hans spielt, aber Marie singt.
**PROPOSED_ES:** Hans juega, pero Marie canta.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene una oración alemana sin traducir.
**Reason:** El campo visible contiene una oración alemana sin traducir.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 410 (ES Kurss Lessons)

**Finding:** 410
**Audit ID:** ES-KURSS-LESSONS-LV2-0108
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[20]`
**Field type:** `example`
**DE (read-only):** Hier hängt eine Karte.
**CURRENT_ES:** Hier hängt eine Karte.
**PROPOSED_ES:** Aquí cuelga un mapa.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene una oración alemana sin traducir.
**Reason:** El campo visible contiene una oración alemana sin traducir.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 411 (ES Kurss Lessons)

**Finding:** 411
**Audit ID:** ES-KURSS-LESSONS-LV2-0111
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida.
**PROPOSED_ES:** En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce.
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** Se confunden «casos» y «géneros», falta el artículo español «artículo» y la última oración es poco natural.
**Reason:** Se confunden «casos» y «géneros», falta el artículo español «artículo» y la última oración es poco natural.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 412 (ES Kurss Lessons)

**Finding:** 412
**Audit ID:** ES-KURSS-LESSONS-LV2-0112
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[2]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** Sin artículos delante de nombres propios.
**PROPOSED_ES:** No se usan artículos delante de los nombres propios.
**Severity:** LOW
**Category:** ES_NATURALNESS
**Problem:** La versión actual es un fragmento telegráfico; la propuesta es más natural como nota gramatical.
**Reason:** La versión actual es un fragmento telegráfico; la propuesta es más natural como nota gramatical.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 413 (ES Kurss Lessons)

**Finding:** 413
**Audit ID:** ES-KURSS-LESSONS-LV2-0113
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[3]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** En una oración narrativa, el verbo ocupa el segundo lugar.
**PROPOSED_ES:** En una oración enunciativa, el verbo ocupa la segunda posición.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Narrativa» no corresponde al sentido gramatical de una oración declarativa/enunciativa.
**Reason:** «Narrativa» no corresponde al sentido gramatical de una oración declarativa/enunciativa.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 414 (ES Kurss Lessons)

**Finding:** 414
**Audit ID:** ES-KURSS-LESSONS-LV2-0114
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 1Sujeto de la oración
**PROPOSED_ES:** 1. Sujeto de la oración
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta un espacio o separador después del número.
**Reason:** Falta un espacio o separador después del número.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 415 (ES Kurss Lessons)

**Finding:** 415
**Audit ID:** ES-KURSS-LESSONS-LV2-0115
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 2Artículos
**PROPOSED_ES:** 2. Artículos
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta un espacio o separador después del número.
**Reason:** Falta un espacio o separador después del número.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 416 (ES Kurss Lessons)

**Finding:** 416
**Audit ID:** ES-KURSS-LESSONS-LV2-0116
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 3Sustantivos propios
**PROPOSED_ES:** 3. Sustantivos propios
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta un espacio o separador después del número.
**Reason:** Falta un espacio o separador después del número.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 417 (ES Kurss Lessons)

**Finding:** 417
**Audit ID:** ES-KURSS-LESSONS-LV2-0117
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 4Lugar del verbo
**PROPOSED_ES:** 4. Lugar del verbo
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta un espacio o separador después del número.
**Reason:** Falta un espacio o separador después del número.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 418 (ES Kurss Lessons)

**Finding:** 418
**Audit ID:** ES-KURSS-LESSONS-LV2-0118
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[0]`
**Field type:** `grammarSubtitle`
**DE (read-only):** Noteiktais artikuls
**CURRENT_ES:** Noteiktais artikuls
**PROPOSED_ES:** Artículo definido
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El subtítulo está en letón.
**Reason:** El subtítulo está en letón.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 419 (ES Kurss Lessons)

**Finding:** 419
**Audit ID:** ES-KURSS-LESSONS-LV2-0119
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[1]`
**Field type:** `grammarSubtitle`
**DE (read-only):** Nenoteiktais artikuls
**CURRENT_ES:** Nenoteiktais artikuls
**PROPOSED_ES:** Artículo indefinido
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El subtítulo está en letón.
**Reason:** El subtítulo está en letón.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 420 (ES Kurss Lessons)

**Finding:** 420
**Audit ID:** ES-KURSS-LESSONS-LV2-0120
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[0].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Rechnest du?
**CURRENT_ES:** ¿cuentas?
**PROPOSED_ES:** ¿Cuentas?
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** La primera palabra de una pregunta independiente debe comenzar con mayúscula.
**Reason:** La primera palabra de una pregunta independiente debe comenzar con mayúscula.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 421 (ES Kurss Lessons)

**Finding:** 421
**Audit ID:** ES-KURSS-LESSONS-LV2-0121
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[2].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Was steht dort?
**CURRENT_ES:** ¿Quién está parado ahí?
**PROPOSED_ES:** ¿Qué hay ahí?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Was steht dort? pregunta por una cosa, no por una persona; «quién» es incorrecto.
**Reason:** Was steht dort? pregunta por una cosa, no por una persona; «quién» es incorrecto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 422 (ES Kurss Lessons)

**Finding:** 422
**Audit ID:** ES-KURSS-LESSONS-LV2-0122
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[3].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Dort steht ein Tisch.
**CURRENT_ES:** Hay una mesa.
**PROPOSED_ES:** Allí hay una mesa.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La traducción omite el adverbio de lugar «dort».
**Reason:** La traducción omite el adverbio de lugar «dort».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 423 (ES Kurss Lessons)

**Finding:** 423
**Audit ID:** ES-KURSS-LESSONS-LV2-0123
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[4].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Was liegt hier?
**CURRENT_ES:** ¿Quién está aquí?
**PROPOSED_ES:** ¿Qué hay aquí?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Was liegt hier? pregunta por una cosa, no por una persona; «quién» es incorrecto.
**Reason:** Was liegt hier? pregunta por una cosa, no por una persona; «quién» es incorrecto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 424 (ES Kurss Lessons)

**Finding:** 424
**Audit ID:** ES-KURSS-LESSONS-LV2-0124
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[5].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Hier liegt ein Buch.
**CURRENT_ES:** Aquí está el libro.
**PROPOSED_ES:** Aquí hay un libro.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El original usa un artículo indefinido, pero la versión actual usa «el», que cambia el significado.
**Reason:** El original usa un artículo indefinido, pero la versión actual usa «el», que cambia el significado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 425 (ES Kurss Lessons)

**Finding:** 425
**Audit ID:** ES-KURSS-LESSONS-LV2-0125
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[8].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Was ist dünn?
**CURRENT_ES:** ¿Cuál es el plan?
**PROPOSED_ES:** ¿Qué es delgado?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La traducción no corresponde a Was ist dünn? y cambia completamente el significado.
**Reason:** La traducción no corresponde a Was ist dünn? y cambia completamente el significado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 426 (ES Kurss Lessons)

**Finding:** 426
**Audit ID:** ES-KURSS-LESSONS-LV2-0126
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[9].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Das Heft ist dünn.
**CURRENT_ES:** El buzón es delgado.
**PROPOSED_ES:** El cuaderno es delgado.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Heft significa «cuaderno», no «buzón».
**Reason:** Heft significa «cuaderno», no «buzón».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 427 (ES Kurss Lessons)

**Finding:** 427
**Audit ID:** ES-KURSS-LESSONS-LV2-0127
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[14].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Liegt dort ein Heft?
**CURRENT_ES:** ¿Hay/hay un cuaderno?
**PROPOSED_ES:** ¿Hay allí un cuaderno?
**Severity:** HIGH
**Category:** ES_NATURALNESS
**Problem:** La expresión «Hay/hay» es un duplicado y resulta antinatural; además, conviene reflejar el lugar indicado por dort.
**Reason:** La expresión «Hay/hay» es un duplicado y resulta antinatural; además, conviene reflejar el lugar indicado por dort.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 428 (ES Kurss Lessons)

**Finding:** 428
**Audit ID:** ES-KURSS-LESSONS-LV2-0128
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[15].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Ja, dort liegt ein Heft.
**CURRENT_ES:** Sí, hay un cuaderno.
**PROPOSED_ES:** Sí, allí hay un cuaderno.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La traducción omite el adverbio de lugar «dort».
**Reason:** La traducción omite el adverbio de lugar «dort».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 429 (ES Kurss Lessons)

**Finding:** 429
**Audit ID:** ES-KURSS-LESSONS-LV2-0129
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[0]`
**Field type:** `example`
**DE (read-only):** Paul kommt und nimmt einen Federhalter.
**CURRENT_ES:** Paul kommt und nimmt einen Federhalter.
**PROPOSED_ES:** Paul viene y toma un portaplumas.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español; el alemán debe conservarse en deContext.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español; el alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 430 (ES Kurss Lessons)

**Finding:** 430
**Audit ID:** ES-KURSS-LESSONS-LV2-0130
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** Er zeigt den Federhalter.
**CURRENT_ES:** Er zeigt den Federhalter.
**PROPOSED_ES:** Él muestra el portaplumas.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español; el alemán debe conservarse en deContext.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español; el alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 431 (ES Kurss Lessons)

**Finding:** 431
**Audit ID:** ES-KURSS-LESSONS-LV2-0131
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[2]`
**Field type:** `example`
**DE (read-only):** Wie ist der Federhalter?
**CURRENT_ES:** Er fragt: „Wie ist der Federhalter?“
**PROPOSED_ES:** Él pregunta: «¿Cómo es el portaplumas?»
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán sin traducir. La pregunta alemana debe permanecer como contexto alemán, no como texto español.
**Reason:** El campo visible contiene alemán sin traducir. La pregunta alemana debe permanecer como contexto alemán, no como texto español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 432 (ES Kurss Lessons)

**Finding:** 432
**Audit ID:** ES-KURSS-LESSONS-LV2-0132
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[3]`
**Field type:** `example`
**DE (read-only):** Der Federhalter ist schwarz.
**CURRENT_ES:** Olga antwortet: „Der Federhalter ist schwarz.“
**PROPOSED_ES:** Olga responde: «El portaplumas es negro.»
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Reason:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 433 (ES Kurss Lessons)

**Finding:** 433
**Audit ID:** ES-KURSS-LESSONS-LV2-0133
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[4]`
**Field type:** `example`
**DE (read-only):** Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.
**CURRENT_ES:** Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.
**PROPOSED_ES:** ¿Es blanco el portaplumas? No, el portaplumas no es blanco, es negro.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 434 (ES Kurss Lessons)

**Finding:** 434
**Audit ID:** ES-KURSS-LESSONS-LV2-0134
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[5]`
**Field type:** `example`
**DE (read-only):** Marie kommt und nimmt eine Feder.
**CURRENT_ES:** Marie kommt und nimmt eine Feder.
**PROPOSED_ES:** Marie viene y toma una pluma.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 435 (ES Kurss Lessons)

**Finding:** 435
**Audit ID:** ES-KURSS-LESSONS-LV2-0135
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[6]`
**Field type:** `example`
**DE (read-only):** Wie ist die Feder?
**CURRENT_ES:** Sie fragt: „Wie ist die Feder?“
**PROPOSED_ES:** Ella pregunta: «¿Cómo es la pluma?»
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Reason:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 436 (ES Kurss Lessons)

**Finding:** 436
**Audit ID:** ES-KURSS-LESSONS-LV2-0136
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[7]`
**Field type:** `example`
**DE (read-only):** Die Feder ist spitz.
**CURRENT_ES:** Olga antwortet: „Die Feder ist spitz.“
**PROPOSED_ES:** Olga responde: «La pluma es puntiaguda.»
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Reason:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 437 (ES Kurss Lessons)

**Finding:** 437
**Audit ID:** ES-KURSS-LESSONS-LV2-0137
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[8]`
**Field type:** `example`
**DE (read-only):** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
**CURRENT_ES:** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
**PROPOSED_ES:** ¿Es roma la pluma? No, la pluma no es roma, es puntiaguda.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 438 (ES Kurss Lessons)

**Finding:** 438
**Audit ID:** ES-KURSS-LESSONS-LV2-0138
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[9]`
**Field type:** `example`
**DE (read-only):** Was legt das Mädchen hin? Es legt die Feder hin.
**CURRENT_ES:** Was legt das Mädchen hin? Es legt die Feder hin.
**PROPOSED_ES:** ¿Qué coloca la niña? Coloca la pluma.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Reason:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 439 (ES Kurss Lessons)

**Finding:** 439
**Audit ID:** ES-KURSS-LESSONS-LV2-0139
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[10]`
**Field type:** `example`
**DE (read-only):** Was nimmst du? Ich nehme ein Messer.
**CURRENT_ES:** Was nimmst du? Ich nehme ein Messer.
**PROPOSED_ES:** ¿Qué tomas? Tomo un cuchillo.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 440 (ES Kurss Lessons)

**Finding:** 440
**Audit ID:** ES-KURSS-LESSONS-LV2-0140
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[11]`
**Field type:** `example`
**DE (read-only):** Wie ist das Messer? Das Messer ist scharf.
**CURRENT_ES:** Wie ist das Messer? Das Messer ist scharf.
**PROPOSED_ES:** ¿Cómo es el cuchillo? El cuchillo está afilado.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Reason:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 441 (ES Kurss Lessons)

**Finding:** 441
**Audit ID:** ES-KURSS-LESSONS-LV2-0141
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[12]`
**Field type:** `example`
**DE (read-only):** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
**CURRENT_ES:** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
**PROPOSED_ES:** ¿Está romo el cuchillo? No, no está romo, está afilado.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 442 (ES Kurss Lessons)

**Finding:** 442
**Audit ID:** ES-KURSS-LESSONS-LV2-0142
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[13]`
**Field type:** `example`
**DE (read-only):** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
**CURRENT_ES:** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
**PROPOSED_ES:** ¿Qué colocas? Coloco el cuchillo, la pluma y el portaplumas.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Reason:** El campo visible contiene alemán sin traducir en lugar de una traducción española.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 443 (ES Kurss Lessons)

**Finding:** 443
**Audit ID:** ES-KURSS-LESSONS-LV2-0143
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[14]`
**Field type:** `example`
**DE (read-only):** Dann gehe ich hinaus und arbeite.
**CURRENT_ES:** Dann gehe ich hinaus und arbeite.
**PROPOSED_ES:** Después salgo y trabajo.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Reason:** El campo visible contiene únicamente alemán en lugar de la traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 444 (ES Kurss Lessons)

**Finding:** 444
**Audit ID:** ES-KURSS-LESSONS-LV2-0145
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** er nimmt (nimt)
**CURRENT_ES:** er nimmt (nimt) — emplumado
**PROPOSED_ES:** er nimmt (nimt) — él toma
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La glosa «emplumado» es incorrecta; er nimmt significa «él toma».
**Reason:** La glosa «emplumado» es incorrecta; er nimmt significa «él toma».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 445 (ES Kurss Lessons)

**Finding:** 445
**Audit ID:** ES-KURSS-LESSONS-LV2-0147
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
**Field type:** `example`
**DE (read-only):** einen Federhalter
**CURRENT_ES:** einen Federhalter — negro
**PROPOSED_ES:** einen Federhalter — un portaplumas
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La glosa «negro» no corresponde a einen Federhalter, que significa «un portaplumas».
**Reason:** La glosa «negro» no corresponde a einen Federhalter, que significa «un portaplumas».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 446 (ES Kurss Lessons)

**Finding:** 446
**Audit ID:** ES-KURSS-LESSONS-LV2-0148
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
**Field type:** `example`
**DE (read-only):** zeigen
**CURRENT_ES:** zeigen — blanco
**PROPOSED_ES:** zeigen — mostrar
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La glosa «blanco» no corresponde al verbo zeigen, que significa «mostrar».
**Reason:** La glosa «blanco» no corresponde al verbo zeigen, que significa «mostrar».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 447 (ES Kurss Lessons)

**Finding:** 447
**Audit ID:** ES-KURSS-LESSONS-LV2-0149
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
**Field type:** `example`
**DE (read-only):** schwarz (švarc)
**CURRENT_ES:** schwarz (švarc) — pluma
**PROPOSED_ES:** schwarz (švarc) — negro
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La glosa «pluma» no corresponde a schwarz, que significa «negro».
**Reason:** La glosa «pluma» no corresponde a schwarz, que significa «negro».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 448 (ES Kurss Lessons)

**Finding:** 448
**Audit ID:** ES-KURSS-LESSONS-LV2-0150
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
**Field type:** `example`
**DE (read-only):** weiß (veis)
**CURRENT_ES:** weiß (veis) — pluma
**PROPOSED_ES:** weiß (veis) — blanco
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La glosa «pluma» no corresponde a weiß, que significa «blanco».
**Reason:** La glosa «pluma» no corresponde a weiß, que significa «blanco».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 449 (ES Kurss Lessons)

**Finding:** 449
**Audit ID:** ES-KURSS-LESSONS-LV2-0152
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
**Field type:** `example`
**DE (read-only):** eine Feder
**CURRENT_ES:** eine Feder — dejar
**PROPOSED_ES:** eine Feder — una pluma
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La glosa «dejar» no corresponde a eine Feder, que significa «una pluma».
**Reason:** La glosa «dejar» no corresponde a eine Feder, que significa «una pluma».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 450 (ES Kurss Lessons)

**Finding:** 450
**Audit ID:** ES-KURSS-LESSONS-LV2-0153
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
**Field type:** `example`
**DE (read-only):** spitz (špic)
**CURRENT_ES:** spitz (špic) — dejar
**PROPOSED_ES:** spitz (špic) — puntiagudo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La glosa «dejar» no corresponde a spitz, que significa «puntiagudo».
**Reason:** La glosa «dejar» no corresponde a spitz, que significa «puntiagudo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
