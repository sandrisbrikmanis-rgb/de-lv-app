# ES–DE Kurss Lessons — OWNER VIEW (group 09: findings 401–450)

**Auditors:** GPT-5.6 Luna + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit.md` / `reports/temp/es-kurss-lessons-full-audit.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 401 (ES Kurss Lessons)

**Finding:** 401
**Audit ID:** ES-KURSS-LESSONS-L0085
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** hoch
**CURRENT_ES:** hoch — ck es doble k: dick (dikk).
**PROPOSED_ES:** hoch — [explicación de pronunciación correspondiente a «hoch»]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 402 (ES Kurss Lessons)

**Finding:** 402
**Audit ID:** ES-KURSS-LESSONS-L0089
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** Ja galotne
**CURRENT_ES:** Ja galotne -¿Ar qué? pregunta por temas.
**PROPOSED_ES:** ¿Con «was» se pregunta por cosas?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 403 (ES Kurss Lessons)

**Finding:** 403
**Audit ID:** ES-KURSS-LESSONS-L0101
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida.
**PROPOSED_ES:** En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce de forma independiente.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Masculino, femenino y neutro son géneros, no casos.
**Reason:** Masculino, femenino y neutro son géneros, no casos.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 404 (ES Kurss Lessons)

**Finding:** 404
**Audit ID:** ES-KURSS-LESSONS-L0103
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[3]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** En una oración narrativa, el verbo ocupa el segundo lugar.
**PROPOSED_ES:** En una oración declarativa, el verbo ocupa el segundo lugar.
**Severity:** MEDIUM
**Category:** TRANSLATION
**Problem:** «Oración narrativa» no corresponde al concepto gramatical de una oración enunciativa o declarativa.
**Reason:** «Oración narrativa» no corresponde al concepto gramatical de una oración enunciativa o declarativa.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 405 (ES Kurss Lessons)

**Finding:** 405
**Audit ID:** ES-KURSS-LESSONS-L0104
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 1Sujeto de la oración
**PROPOSED_ES:** 1. Sujeto de la oración
**Severity:** MEDIUM
**Category:** STRUCTURE
**Problem:** Falta un espacio o separador entre el número y el encabezado.
**Reason:** Falta un espacio o separador entre el número y el encabezado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 406 (ES Kurss Lessons)

**Finding:** 406
**Audit ID:** ES-KURSS-LESSONS-L0105
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 2Artículos
**PROPOSED_ES:** 2. Artículos
**Severity:** MEDIUM
**Category:** STRUCTURE
**Problem:** Falta un espacio o separador entre el número y el encabezado.
**Reason:** Falta un espacio o separador entre el número y el encabezado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 407 (ES Kurss Lessons)

**Finding:** 407
**Audit ID:** ES-KURSS-LESSONS-L0106
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[2]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 3Sustantivos propios
**PROPOSED_ES:** 3. Sustantivos propios
**Severity:** MEDIUM
**Category:** STRUCTURE
**Problem:** Falta un espacio o separador entre el número y el encabezado.
**Reason:** Falta un espacio o separador entre el número y el encabezado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 408 (ES Kurss Lessons)

**Finding:** 408
**Audit ID:** ES-KURSS-LESSONS-L0107
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 4Lugar del verbo
**PROPOSED_ES:** 4. Lugar del verbo
**Severity:** MEDIUM
**Category:** STRUCTURE
**Problem:** Falta un espacio o separador entre el número y el encabezado.
**Reason:** Falta un espacio o separador entre el número y el encabezado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 409 (ES Kurss Lessons)

**Finding:** 409
**Audit ID:** ES-KURSS-LESSONS-L0109
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[0]`
**Field type:** `grammarSubtitle`
**DE (read-only):** Noteiktais artikuls
**CURRENT_ES:** Noteiktais artikuls
**PROPOSED_ES:** Artículo definido
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El subtítulo está en letón y contiene además un término no español.
**Reason:** El subtítulo está en letón y contiene además un término no español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 410 (ES Kurss Lessons)

**Finding:** 410
**Audit ID:** ES-KURSS-LESSONS-L0110
**Lesson:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[1]`
**Field type:** `grammarSubtitle`
**DE (read-only):** Nenoteiktais artikuls
**CURRENT_ES:** Nenoteiktais artikuls
**PROPOSED_ES:** Artículo indefinido
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El subtítulo está en letón y contiene además un término no español.
**Reason:** El subtítulo está en letón y contiene además un término no español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 411 (ES Kurss Lessons)

**Finding:** 411
**Audit ID:** ES-KURSS-LESSONS-L0111
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[0].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Rechnest du?
**CURRENT_ES:** ¿cuentas?
**PROPOSED_ES:** ¿Calculas?
**Severity:** MEDIUM
**Category:** TRANSLATION
**Problem:** El alemán «rechnen» significa «calcular», no necesariamente «contar».
**Reason:** El alemán «rechnen» significa «calcular», no necesariamente «contar».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 412 (ES Kurss Lessons)

**Finding:** 412
**Audit ID:** ES-KURSS-LESSONS-L0112
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[2].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Was steht dort?
**CURRENT_ES:** ¿Quién está parado ahí?
**PROPOSED_ES:** ¿Qué hay ahí?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Was» pregunta por una cosa, no por una persona. Además, el español actual introduce una persona de pie que no aparece en el alemán.
**Reason:** «Was» pregunta por una cosa, no por una persona. Además, el español actual introduce una persona de pie que no aparece en el alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 413 (ES Kurss Lessons)

**Finding:** 413
**Audit ID:** ES-KURSS-LESSONS-L0113
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[3].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Dort steht ein Tisch.
**CURRENT_ES:** Hay una mesa.
**PROPOSED_ES:** Ahí hay una mesa.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** Se omite el adverbio de lugar «dort».
**Reason:** Se omite el adverbio de lugar «dort».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 414 (ES Kurss Lessons)

**Finding:** 414
**Audit ID:** ES-KURSS-LESSONS-L0114
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[4].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Was liegt hier?
**CURRENT_ES:** ¿Quién está aquí?
**PROPOSED_ES:** ¿Qué hay aquí?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Was» se refiere a una cosa, y «liegt» indica que está colocada/tendida; el texto actual pregunta por una persona que está de pie.
**Reason:** «Was» se refiere a una cosa, y «liegt» indica que está colocada/tendida; el texto actual pregunta por una persona que está de pie.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 415 (ES Kurss Lessons)

**Finding:** 415
**Audit ID:** ES-KURSS-LESSONS-L0115
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[8].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Was ist dünn?
**CURRENT_ES:** ¿Cuál es el plan?
**PROPOSED_ES:** ¿Qué es delgado?
**Severity:** CRITICAL
**Category:** SEMANTIC_MISMATCH
**Problem:** El texto español no corresponde en absoluto a «Was ist dünn?».
**Reason:** El texto español no corresponde en absoluto a «Was ist dünn?».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 416 (ES Kurss Lessons)

**Finding:** 416
**Audit ID:** ES-KURSS-LESSONS-L0116
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[9].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Das Heft ist dünn.
**CURRENT_ES:** El buzón es delgado.
**PROPOSED_ES:** El cuaderno es delgado.
**Severity:** CRITICAL
**Category:** SEMANTIC_MISMATCH
**Problem:** «Das Heft» significa «el cuaderno», no «el buzón».
**Reason:** «Das Heft» significa «el cuaderno», no «el buzón».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 417 (ES Kurss Lessons)

**Finding:** 417
**Audit ID:** ES-KURSS-LESSONS-L0117
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[14].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Liegt dort ein Heft?
**CURRENT_ES:** ¿Hay/hay un cuaderno?
**PROPOSED_ES:** ¿Hay un cuaderno ahí?
**Severity:** HIGH
**Category:** ES_GRAMMAR
**Problem:** La pregunta contiene una duplicación errónea («Hay/hay») y su formulación no es natural.
**Reason:** La pregunta contiene una duplicación errónea («Hay/hay») y su formulación no es natural.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 418 (ES Kurss Lessons)

**Finding:** 418
**Audit ID:** ES-KURSS-LESSONS-L0119
**Lesson:** `lesson3`
**Path:** `lesson3TrainingCardsEs[15].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Ja, dort liegt ein Heft.
**CURRENT_ES:** Sí, hay un cuaderno.
**PROPOSED_ES:** Sí, allí hay un cuaderno.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** Se omite el adverbio de lugar «dort».
**Reason:** Se omite el adverbio de lugar «dort».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 419 (ES Kurss Lessons)

**Finding:** 419
**Audit ID:** ES-KURSS-LESSONS-L0120
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[8]`
**Field type:** `example`
**DE (read-only):** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
**CURRENT_ES:** Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.
**PROPOSED_ES:** ¿Está roma la pluma? No, la pluma no está roma; está puntiaguda.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 420 (ES Kurss Lessons)

**Finding:** 420
**Audit ID:** ES-KURSS-LESSONS-L0121
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[9]`
**Field type:** `example`
**DE (read-only):** Was legt das Mädchen hin? Es legt die Feder hin.
**CURRENT_ES:** Was legt das Mädchen hin? Es legt die Feder hin.
**PROPOSED_ES:** ¿Qué coloca la niña? Coloca la pluma.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 421 (ES Kurss Lessons)

**Finding:** 421
**Audit ID:** ES-KURSS-LESSONS-L0122
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[10]`
**Field type:** `example`
**DE (read-only):** Was nimmst du? Ich nehme ein Messer.
**CURRENT_ES:** Was nimmst du? Ich nehme ein Messer.
**PROPOSED_ES:** ¿Qué tomas? Tomo un cuchillo.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 422 (ES Kurss Lessons)

**Finding:** 422
**Audit ID:** ES-KURSS-LESSONS-L0123
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[11]`
**Field type:** `example`
**DE (read-only):** Wie ist das Messer? Das Messer ist scharf.
**CURRENT_ES:** Wie ist das Messer? Das Messer ist scharf.
**PROPOSED_ES:** ¿Cómo es el cuchillo? El cuchillo está afilado.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 423 (ES Kurss Lessons)

**Finding:** 423
**Audit ID:** ES-KURSS-LESSONS-L0124
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[12]`
**Field type:** `example`
**DE (read-only):** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
**CURRENT_ES:** Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.
**PROPOSED_ES:** ¿Está romo el cuchillo? No, no está romo; está afilado.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 424 (ES Kurss Lessons)

**Finding:** 424
**Audit ID:** ES-KURSS-LESSONS-L0125
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[13]`
**Field type:** `example`
**DE (read-only):** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
**CURRENT_ES:** Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.
**PROPOSED_ES:** ¿Qué colocas? Coloco el cuchillo, la pluma y el portaplumas.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 425 (ES Kurss Lessons)

**Finding:** 425
**Audit ID:** ES-KURSS-LESSONS-L0126
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[14]`
**Field type:** `example`
**DE (read-only):** Dann gehe ich hinaus und arbeite.
**CURRENT_ES:** Dann gehe ich hinaus und arbeite.
**PROPOSED_ES:** Después salgo y trabajo.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 426 (ES Kurss Lessons)

**Finding:** 426
**Audit ID:** ES-KURSS-LESSONS-L0128
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** er nimmt (nimt)
**CURRENT_ES:** er nimmt (nimt) — emplumado
**PROPOSED_ES:** er nimmt (nimt) — toma
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 427 (ES Kurss Lessons)

**Finding:** 427
**Audit ID:** ES-KURSS-LESSONS-L0130
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
**Field type:** `example`
**DE (read-only):** einen Federhalter
**CURRENT_ES:** einen Federhalter — negro
**PROPOSED_ES:** einen Federhalter — un portaplumas
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 428 (ES Kurss Lessons)

**Finding:** 428
**Audit ID:** ES-KURSS-LESSONS-L0131
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
**Field type:** `example`
**DE (read-only):** zeigen
**CURRENT_ES:** zeigen — blanco
**PROPOSED_ES:** zeigen — mostrar
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 429 (ES Kurss Lessons)

**Finding:** 429
**Audit ID:** ES-KURSS-LESSONS-L0132
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
**Field type:** `example`
**DE (read-only):** schwarz (švarc)
**CURRENT_ES:** schwarz (švarc) — pluma
**PROPOSED_ES:** schwarz (švarc) — negro
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 430 (ES Kurss Lessons)

**Finding:** 430
**Audit ID:** ES-KURSS-LESSONS-L0133
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
**Field type:** `example`
**DE (read-only):** weiß (veis)
**CURRENT_ES:** weiß (veis) — pluma
**PROPOSED_ES:** weiß (veis) — blanco
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 431 (ES Kurss Lessons)

**Finding:** 431
**Audit ID:** ES-KURSS-LESSONS-L0135
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
**Field type:** `example`
**DE (read-only):** eine Feder
**CURRENT_ES:** eine Feder — dejar
**PROPOSED_ES:** eine Feder — una pluma
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 432 (ES Kurss Lessons)

**Finding:** 432
**Audit ID:** ES-KURSS-LESSONS-L0136
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
**Field type:** `example`
**DE (read-only):** spitz (špic)
**CURRENT_ES:** spitz (špic) — dejar
**PROPOSED_ES:** spitz (špic) — puntiagudo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 433 (ES Kurss Lessons)

**Finding:** 433
**Audit ID:** ES-KURSS-LESSONS-L0137
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
**Field type:** `example`
**DE (read-only):** hinlegen
**CURRENT_ES:** hinlegen — niña
**PROPOSED_ES:** hinlegen — colocar
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 434 (ES Kurss Lessons)

**Finding:** 434
**Audit ID:** ES-KURSS-LESSONS-L0138
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
**Field type:** `example`
**DE (read-only):** legt hin
**CURRENT_ES:** legt hin — cuchillo
**PROPOSED_ES:** legt hin — coloca
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 435 (ES Kurss Lessons)

**Finding:** 435
**Audit ID:** ES-KURSS-LESSONS-L0140
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[13]`
**Field type:** `example`
**DE (read-only):** das Messer
**CURRENT_ES:** das Messer — agudo
**PROPOSED_ES:** das Messer — el cuchillo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 436 (ES Kurss Lessons)

**Finding:** 436
**Audit ID:** ES-KURSS-LESSONS-L0141
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
**Field type:** `example`
**DE (read-only):** ein Messer
**CURRENT_ES:** ein Messer — contundente
**PROPOSED_ES:** ein Messer — un cuchillo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 437 (ES Kurss Lessons)

**Finding:** 437
**Audit ID:** ES-KURSS-LESSONS-L0142
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
**Field type:** `example`
**DE (read-only):** scharf
**CURRENT_ES:** scharf — luego
**PROPOSED_ES:** scharf — afilado
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 438 (ES Kurss Lessons)

**Finding:** 438
**Audit ID:** ES-KURSS-LESSONS-L0143
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
**Field type:** `example`
**DE (read-only):** stumpf (štumpf)
**CURRENT_ES:** stumpf (štumpf) — afuera
**PROPOSED_ES:** stumpf (štumpf) — romo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 439 (ES Kurss Lessons)

**Finding:** 439
**Audit ID:** ES-KURSS-LESSONS-L0144
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
**Field type:** `example`
**DE (read-only):** dann
**CURRENT_ES:** dann — sal, ve out
**PROPOSED_ES:** dann — después
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 440 (ES Kurss Lessons)

**Finding:** 440
**Audit ID:** ES-KURSS-LESSONS-L0145
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
**Field type:** `example`
**DE (read-only):** hinaus
**CURRENT_ES:** hinaus — en, -er, -el no están acentuadas, por lo que la e en estos extremos es apenas audible: kommen, nehmen, der Federhalter.
**PROPOSED_ES:** hinaus — Las terminaciones -en, -er y -el no llevan acento, por lo que la e en ellas apenas se oye: kommen, nehmen, der Federhalter.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 441 (ES Kurss Lessons)

**Finding:** 441
**Audit ID:** ES-KURSS-LESSONS-L0146
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
**Field type:** `example`
**DE (read-only):** hinausgehen
**CURRENT_ES:** hinausgehen — h en alemán puede ser tanto un sonido como un marcador de longitud para la vocal anterior.
**PROPOSED_ES:** hinausgehen — En alemán, la h puede representar un sonido o indicar que la vocal anterior es larga.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 442 (ES Kurss Lessons)

**Finding:** 442
**Audit ID:** ES-KURSS-LESSONS-L0151
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
**Field type:** `example`
**DE (read-only):** Nominativ: der Federhalter, die Feder, das Messer.
**CURRENT_ES:** Nominativ: der Federhalter, die Feder, das Messer.
**PROPOSED_ES:** Nominativo: der Federhalter, die Feder, das Messer.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 443 (ES Kurss Lessons)

**Finding:** 443
**Audit ID:** ES-KURSS-LESSONS-L0152
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
**Field type:** `example`
**DE (read-only):** Akkusativ: den Federhalter, die Feder, das Messer.
**CURRENT_ES:** Akkusativ: den Federhalter, die Feder, das Messer.
**PROPOSED_ES:** Acusativo: den Federhalter, die Feder, das Messer.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 444 (ES Kurss Lessons)

**Finding:** 444
**Audit ID:** ES-KURSS-LESSONS-L0153
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[4]`
**Field type:** `example`
**DE (read-only):** Nominativ: ein Federhalter, eine Feder, ein Messer.
**CURRENT_ES:** Nominativ: ein Federhalter, eine Feder, ein Messer.
**PROPOSED_ES:** Nominativo: ein Federhalter, eine Feder, ein Messer.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 445 (ES Kurss Lessons)

**Finding:** 445
**Audit ID:** ES-KURSS-LESSONS-L0154
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[5]`
**Field type:** `example`
**DE (read-only):** Akkusativ: einen Federhalter, eine Feder, ein Messer.
**CURRENT_ES:** Akkusativ: einen Federhalter, eine Feder, ein Messer.
**PROPOSED_ES:** Acusativo: einen Federhalter, eine Feder, ein Messer.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 446 (ES Kurss Lessons)

**Finding:** 446
**Audit ID:** ES-KURSS-LESSONS-L0156
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda.
**PROPOSED_ES:** En femenino y neutro, el acusativo es igual al nominativo. Solo cambia el artículo masculino.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 447 (ES Kurss Lessons)

**Finding:** 447
**Audit ID:** ES-KURSS-LESSONS-L0157
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[1]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número.
**PROPOSED_ES:** Si un adjetivo funciona como atributo predicativo en una oración, no cambia según el género ni el número.
**Severity:** HIGH
**Category:** ES_GRAMMAR
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 448 (ES Kurss Lessons)

**Finding:** 448
**Audit ID:** ES-KURSS-LESSONS-L0158
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[2]`
**Field type:** `grammarNote`
**DE (read-only):** —
**CURRENT_ES:** Si nicht niega un adjetivo, se coloca delante de la palabra negativa.
**PROPOSED_ES:** Si nicht niega un adjetivo, se coloca delante del adjetivo.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 449 (ES Kurss Lessons)

**Finding:** 449
**Audit ID:** ES-KURSS-LESSONS-L0159
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 1Acusativo
**PROPOSED_ES:** 1. Acusativo
**Severity:** LOW
**Category:** STRUCTURE
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---

## Finding 450 (ES Kurss Lessons)

**Finding:** 450
**Audit ID:** ES-KURSS-LESSONS-L0160
**Lesson:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 2nehmen
**PROPOSED_ES:** 2. nehmen
**Severity:** LOW
**Category:** STRUCTURE
**Problem:** 
**Reason:** 
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna + deterministic audit (`reports/es-kurss-lessons-full-audit.md`) · luna

---
