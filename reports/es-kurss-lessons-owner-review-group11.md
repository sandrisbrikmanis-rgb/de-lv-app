# ES–DE Kurss Lessons — OWNER VIEW (group 11: findings 501–550)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 501 (ES Kurss Lessons)

**Finding:** 501
**Audit ID:** ES-KURSS-LESSONS-LV2-0219
**Lesson:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[25]`
**Field type:** `example`
**DE (read-only):** der Schlitten
**CURRENT_ES:** der Schlitten — trineo, trineo
**PROPOSED_ES:** der Schlitten — trineo
**Severity:** LOW
**Category:** ES_NATURALNESS
**Problem:** La traducción «trineo» aparece duplicada.
**Reason:** La traducción «trineo» aparece duplicada.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 502 (ES Kurss Lessons)

**Finding:** 502
**Audit ID:** ES-KURSS-LESSONS-LV2-0220
**Lesson:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[28]`
**Field type:** `example`
**DE (read-only):** wie sind die Dinge?
**CURRENT_ES:** wie sind die Dinge? — ¿Cuáles son las cosas?
**PROPOSED_ES:** wie sind die Dinge? — ¿Cómo están las cosas?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La pregunta alemana se refiere al estado o situación de las cosas («¿Cómo están las cosas?»), no a identificar cuáles son.
**Reason:** La pregunta alemana se refiere al estado o situación de las cosas («¿Cómo están las cosas?»), no a identificar cuáles son.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 503 (ES Kurss Lessons)

**Finding:** 503
**Audit ID:** ES-KURSS-LESSONS-LV2-0221
**Lesson:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[29]`
**Field type:** `example`
**DE (read-only):** voll (fōl)
**CURRENT_ES:** voll (fōl) — full
**PROPOSED_ES:** voll (fōl) — lleno
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «full» es un resto de inglés; el texto visible debe estar en español.
**Reason:** «full» es un resto de inglés; el texto visible debe estar en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 504 (ES Kurss Lessons)

**Finding:** 504
**Audit ID:** ES-KURSS-LESSONS-LV2-0223
**Lesson:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[35]`
**Field type:** `example`
**DE (read-only):** wieviel Nadeln
**CURRENT_ES:** wieviel Nadeln — cuántos agujas
**PROPOSED_ES:** wieviel Nadeln — cuántas agujas
**Severity:** HIGH
**Category:** ES_GRAMMAR
**Problem:** Agujas es un sustantivo femenino plural, por lo que el interrogativo debe concordar como «cuántas».
**Reason:** Agujas es un sustantivo femenino plural, por lo que el interrogativo debe concordar como «cuántas».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 505 (ES Kurss Lessons)

**Finding:** 505
**Audit ID:** ES-KURSS-LESSONS-LV2-0227
**Lesson:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → curso-ejemplo[0]`
**Field type:** `example`
**DE (read-only):** A doubled eu se pronuncia como oi: neun (noin).
**CURRENT_ES:** A doubled eu se pronuncia como oi: neun (noin).
**PROPOSED_ES:** El diptongo eu se pronuncia como «oi»: neun (noin).
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** La frase contiene el término inglés «doubled» y la construcción no es natural en español; «eu» es un diptongo, no una vocal doble.
**Reason:** La frase contiene el término inglés «doubled» y la construcción no es natural en español; «eu» es un diptongo, no una vocal doble.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 506 (ES Kurss Lessons)

**Finding:** 506
**Audit ID:** ES-KURSS-LESSONS-LV2-0240
**Lesson:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[12]`
**Field type:** `example`
**DE (read-only):** Der Wagen
**CURRENT_ES:** Der Wagen — die Nadeln; morir Feder - morir Federn.
**PROPOSED_ES:** Der Wagen; die Nadeln; die Feder — die Federn.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «morir» es una sustitución incorrecta de otra lengua y no corresponde al español «la»; además, los ejemplos alemanes deben mantenerse sin traducir dentro de la serie.
**Reason:** «morir» es una sustitución incorrecta de otra lengua y no corresponde al español «la»; además, los ejemplos alemanes deben mantenerse sin traducir dentro de la serie.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 507 (ES Kurss Lessons)

**Finding:** 507
**Audit ID:** ES-KURSS-LESSONS-LV2-0244
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[2].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Er zeichnet einen Eimer.
**CURRENT_ES:** Saca un balde.
**PROPOSED_ES:** Dibuja un balde.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán indica que el personaje dibuja un cubo, no que lo saque.
**Reason:** El alemán indica que el personaje dibuja un cubo, no que lo saque.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 508 (ES Kurss Lessons)

**Finding:** 508
**Audit ID:** ES-KURSS-LESSONS-LV2-0245
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[3].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Wer zeichnet einen Wagen?
**CURRENT_ES:** ¿Quién tira el carro?
**PROPOSED_ES:** ¿Quién dibuja un carro?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «zeichnet» significa «dibuja», mientras que «tira» cambia el significado a «arrastra» o «lanza».
**Reason:** «zeichnet» significa «dibuja», mientras que «tira» cambia el significado a «arrastra» o «lanza».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 509 (ES Kurss Lessons)

**Finding:** 509
**Audit ID:** ES-KURSS-LESSONS-LV2-0246
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[7].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Wieviel Teller?
**CURRENT_ES:** ¿Cuantos platos?
**PROPOSED_ES:** ¿Cuántos platos?
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** «Cuántos» lleva tilde en esta pregunta.
**Reason:** «Cuántos» lleva tilde en esta pregunta.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 510 (ES Kurss Lessons)

**Finding:** 510
**Audit ID:** ES-KURSS-LESSONS-LV2-0247
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[9].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Ich lege zwei Nadeln hin.
**CURRENT_ES:** Dejé dos agujas.
**PROPOSED_ES:** Coloco dos agujas.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán está en presente y expresa colocar algo, no dejarlo en pasado.
**Reason:** El alemán está en presente y expresa colocar algo, no dejarlo en pasado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 511 (ES Kurss Lessons)

**Finding:** 511
**Audit ID:** ES-KURSS-LESSONS-LV2-0248
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[11].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Das ist ein Deckel.
**CURRENT_ES:** Es una funda.
**PROPOSED_ES:** Es una tapa.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Deckel» significa «tapa», no «funda».
**Reason:** «Deckel» significa «tapa», no «funda».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 512 (ES Kurss Lessons)

**Finding:** 512
**Audit ID:** ES-KURSS-LESSONS-LV2-0249
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[12].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Das sind Deckel.
**CURRENT_ES:** Estas son las portadas.
**PROPOSED_ES:** Estas son las tapas.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El plural alemán «Deckel» corresponde a «tapas», no a «portadas».
**Reason:** El plural alemán «Deckel» corresponde a «tapas», no a «portadas».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 513 (ES Kurss Lessons)

**Finding:** 513
**Audit ID:** ES-KURSS-LESSONS-LV2-0250
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[16].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Der Lehrer nimmt ein Messer und spitzt den Bleistift an.
**CURRENT_ES:** La maestra toma un cuchillo y afila un lápiz.
**PROPOSED_ES:** El maestro toma un cuchillo y afila un lápiz.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán usa «der Lehrer», masculino; «la maestra» no coincide con el contexto alemán.
**Reason:** El alemán usa «der Lehrer», masculino; «la maestra» no coincide con el contexto alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 514 (ES Kurss Lessons)

**Finding:** 514
**Audit ID:** ES-KURSS-LESSONS-LV2-0251
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[18].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Das ist ein Federhalter.
**CURRENT_ES:** Está emplumado.
**PROPOSED_ES:** Es un portaplumas.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Federhalter» es un portaplumas, no algo que esté emplumado.
**Reason:** «Federhalter» es un portaplumas, no algo que esté emplumado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 515 (ES Kurss Lessons)

**Finding:** 515
**Audit ID:** ES-KURSS-LESSONS-LV2-0252
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[19].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Wie ist der Federhalter?
**CURRENT_ES:** ¿Qué es emplumado?
**PROPOSED_ES:** ¿Cómo es el portaplumas?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La frase española no corresponde al significado de «Wie ist der Federhalter?». «Emplumado» significa con plumas, mientras que «Federhalter» es «portaplumas».
**Reason:** La frase española no corresponde al significado de «Wie ist der Federhalter?». «Emplumado» significa con plumas, mientras que «Federhalter» es «portaplumas».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 516 (ES Kurss Lessons)

**Finding:** 516
**Audit ID:** ES-KURSS-LESSONS-LV2-0253
**Lesson:** `lesson6`
**Path:** `lesson6TrainingCardsEs[20].front`
**Field type:** `trainingTranslateFront`
**DE (read-only):** Der Federhalter ist schwarz.
**CURRENT_ES:** La pluma es negra.
**PROPOSED_ES:** El portaplumas es negro.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Federhalter» significa «portaplumas», no «pluma».
**Reason:** «Federhalter» significa «portaplumas», no «pluma».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 517 (ES Kurss Lessons)

**Finding:** 517
**Audit ID:** ES-KURSS-LESSONS-LV2-0254
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[0]:Diálogos/oraciones → course-example[0]`
**Field type:** `example`
**DE (read-only):** Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.
**CURRENT_ES:** Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.
**PROPOSED_ES:** Hans, singe ein Lied! Was tust du? Ich singe ein Lied.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El ejemplo alemán contiene una frase en español. Los ejemplos de esta sección deben permanecer íntegramente en alemán.
**Reason:** El ejemplo alemán contiene una frase en español. Los ejemplos de esta sección deben permanecer íntegramente en alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 518 (ES Kurss Lessons)

**Finding:** 518
**Audit ID:** ES-KURSS-LESSONS-LV2-0255
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
**Field type:** `example`
**DE (read-only):** singe
**CURRENT_ES:** singe — canción
**PROPOSED_ES:** singe — canta
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «singe» es la forma imperativa de «singen» para la segunda persona singular: «canta», no «canción».
**Reason:** «singe» es la forma imperativa de «singen» para la segunda persona singular: «canta», no «canción».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 519 (ES Kurss Lessons)

**Finding:** 519
**Audit ID:** ES-KURSS-LESSONS-LV2-0256
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
**Field type:** `example`
**DE (read-only):** singt
**CURRENT_ES:** singt — Tú
**PROPOSED_ES:** singt — cantad (vosotros)
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** En este contexto, «singt» es el imperativo plural informal y corresponde a «cantad», no a «Tú».
**Reason:** En este contexto, «singt» es el imperativo plural informal y corresponde a «cantad», no a «Tú».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 520 (ES Kurss Lessons)

**Finding:** 520
**Audit ID:** ES-KURSS-LESSONS-LV2-0257
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
**Field type:** `example`
**DE (read-only):** singen Sie
**CURRENT_ES:** singen Sie — conde
**PROPOSED_ES:** singen Sie — cante usted
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «singen Sie» es el imperativo formal de «singen»: «cante usted»; «conde» no tiene relación semántica.
**Reason:** «singen Sie» es el imperativo formal de «singen»: «cante usted»; «conde» no tiene relación semántica.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 521 (ES Kurss Lessons)

**Finding:** 521
**Audit ID:** ES-KURSS-LESSONS-LV2-0259
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
**Field type:** `example`
**DE (read-only):** Sie
**CURRENT_ES:** Sie — molinero
**PROPOSED_ES:** Sie — usted (forma formal)
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Sie» es el pronombre formal «usted» o «ustedes», según el contexto; «molinero» es una traducción incorrecta.
**Reason:** «Sie» es el pronombre formal «usted» o «ustedes», según el contexto; «molinero» es una traducción incorrecta.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 522 (ES Kurss Lessons)

**Finding:** 522
**Audit ID:** ES-KURSS-LESSONS-LV2-0260
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
**Field type:** `example`
**DE (read-only):** zählen
**CURRENT_ES:** zählen — abierto
**PROPOSED_ES:** zählen — contar
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «zählen» significa «contar», mientras que «abierto» corresponde a otro significado.
**Reason:** «zählen» significa «contar», mientras que «abierto» corresponde a otro significado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 523 (ES Kurss Lessons)

**Finding:** 523
**Audit ID:** ES-KURSS-LESSONS-LV2-0261
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
**Field type:** `example`
**DE (read-only):** das Fräulein (froilein)
**CURRENT_ES:** das Fräulein (froilein) — ventana
**PROPOSED_ES:** das Fräulein (froilein) — la señorita
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «das Fräulein» significa «la señorita», no «ventana».
**Reason:** «das Fräulein» significa «la señorita», no «ventana».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 524 (ES Kurss Lessons)

**Finding:** 524
**Audit ID:** ES-KURSS-LESSONS-LV2-0262
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
**Field type:** `example`
**DE (read-only):** der Müller
**CURRENT_ES:** der Müller — todos
**PROPOSED_ES:** der Müller — Müller (apellido)
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** En los ejemplos, «Müller» es un apellido. «Todos» no corresponde a este término.
**Reason:** En los ejemplos, «Müller» es un apellido. «Todos» no corresponde a este término.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 525 (ES Kurss Lessons)

**Finding:** 525
**Audit ID:** ES-KURSS-LESSONS-LV2-0263
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
**Field type:** `example`
**DE (read-only):** öffnen
**CURRENT_ES:** öffnen — espejo
**PROPOSED_ES:** öffnen — abrir
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «öffnen» es el verbo «abrir», no «espejo».
**Reason:** «öffnen» es el verbo «abrir», no «espejo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 526 (ES Kurss Lessons)

**Finding:** 526
**Audit ID:** ES-KURSS-LESSONS-LV2-0264
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[11]`
**Field type:** `example`
**DE (read-only):** das Fenster (fenster)
**CURRENT_ES:** das Fenster (fenster) — trapo, fregona
**PROPOSED_ES:** das Fenster (fenster) — la ventana
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «das Fenster» significa «la ventana»; «trapo, fregona» son traducciones incorrectas.
**Reason:** «das Fenster» significa «la ventana»; «trapo, fregona» son traducciones incorrectas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 527 (ES Kurss Lessons)

**Finding:** 527
**Audit ID:** ES-KURSS-LESSONS-LV2-0265
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
**Field type:** `example`
**DE (read-only):** alle
**CURRENT_ES:** alle — pala
**PROPOSED_ES:** alle — todos/todas
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «alle» significa «todos» o «todas» según el sustantivo, no «pala».
**Reason:** «alle» significa «todos» o «todas» según el sustantivo, no «pala».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 528 (ES Kurss Lessons)

**Finding:** 528
**Audit ID:** ES-KURSS-LESSONS-LV2-0267
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
**Field type:** `example`
**DE (read-only):** der Lappen
**CURRENT_ES:** der Lappen — pala
**PROPOSED_ES:** der Lappen — trapo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Der Lappen» significa «el trapo», no «la pala».
**Reason:** «Der Lappen» significa «el trapo», no «la pala».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 529 (ES Kurss Lessons)

**Finding:** 529
**Audit ID:** ES-KURSS-LESSONS-LV2-0268
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
**Field type:** `example`
**DE (read-only):** der Spaten
**CURRENT_ES:** der Spaten — cuenco
**PROPOSED_ES:** der Spaten — pala
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Der Spaten» significa «la pala», no «el cuenco».
**Reason:** «Der Spaten» significa «la pala», no «el cuenco».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 530 (ES Kurss Lessons)

**Finding:** 530
**Audit ID:** ES-KURSS-LESSONS-LV2-0269
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[16]`
**Field type:** `example`
**DE (read-only):** der Besen
**CURRENT_ES:** der Besen — habitación
**PROPOSED_ES:** der Besen — escoba
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Der Besen» significa «la escoba», no «la habitación».
**Reason:** «Der Besen» significa «la escoba», no «la habitación».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 531 (ES Kurss Lessons)

**Finding:** 531
**Audit ID:** ES-KURSS-LESSONS-LV2-0270
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
**Field type:** `example`
**DE (read-only):** die Schaufel
**CURRENT_ES:** die Schaufel — orilla
**PROPOSED_ES:** die Schaufel — pala
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Die Schaufel» significa «la pala», no «la orilla».
**Reason:** «Die Schaufel» significa «la pala», no «la orilla».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 532 (ES Kurss Lessons)

**Finding:** 532
**Audit ID:** ES-KURSS-LESSONS-LV2-0279
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[0]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 1Expresión de comandos
**PROPOSED_ES:** 1. Imperativo
**Severity:** MEDIUM
**Category:** STRUCTURE
**Problem:** Falta un separador entre el número y el título; además, «imperativo» es el término gramatical más preciso.
**Reason:** Falta un separador entre el número y el título; además, «imperativo» es el término gramatical más preciso.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 533 (ES Kurss Lessons)

**Finding:** 533
**Audit ID:** ES-KURSS-LESSONS-LV2-0280
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[1]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 2Comando plural
**PROPOSED_ES:** 2. Imperativo plural
**Severity:** MEDIUM
**Category:** STRUCTURE
**Problem:** Falta un separador entre el número y el título, y «imperativo plural» es una denominación gramatical más natural que «comando plural».
**Reason:** Falta un separador entre el número y el título, y «imperativo plural» es una denominación gramatical más natural que «comando plural».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 534 (ES Kurss Lessons)

**Finding:** 534
**Audit ID:** ES-KURSS-LESSONS-LV2-0281
**Lesson:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[3]`
**Field type:** `grammarHeader`
**DE (read-only):** —
**CURRENT_ES:** 4öffnen
**PROPOSED_ES:** 4. öffnen
**Severity:** MEDIUM
**Category:** STRUCTURE
**Problem:** Falta un separador entre el número y el ejemplo alemán. El término alemán debe conservarse.
**Reason:** Falta un separador entre el número y el ejemplo alemán. El término alemán debe conservarse.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 535 (ES Kurss Lessons)

**Finding:** 535
**Audit ID:** ES-KURSS-LESSONS-LV2-0282
**Lesson:** `lesson7`
**Path:** `lesson7ExerciseCardsEs[2].lv`
**Field type:** `trainingExercisePrompt`
**DE (read-only):** loben
**CURRENT_ES:** elogio
**PROPOSED_ES:** elogiar
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «loben» es un infinitivo que significa «elogiar»; «elogio» es un sustantivo.
**Reason:** El alemán «loben» es un infinitivo que significa «elogiar»; «elogio» es un sustantivo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 536 (ES Kurss Lessons)

**Finding:** 536
**Audit ID:** ES-KURSS-LESSONS-LV2-0283
**Lesson:** `lesson7`
**Path:** `lesson7ExerciseCardsEs[5].lv`
**Field type:** `trainingExercisePrompt`
**DE (read-only):** zeigen
**CURRENT_ES:** espectáculo
**PROPOSED_ES:** mostrar
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Espectáculo» es un sustantivo y no corresponde al verbo alemán «zeigen», que significa «mostrar».
**Reason:** «Espectáculo» es un sustantivo y no corresponde al verbo alemán «zeigen», que significa «mostrar».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 537 (ES Kurss Lessons)

**Finding:** 537
**Audit ID:** ES-KURSS-LESSONS-LV2-0284
**Lesson:** `lesson7`
**Path:** `lesson7ExerciseCardsEs[7].lv`
**Field type:** `trainingExercisePrompt`
**DE (read-only):** rechnen
**CURRENT_ES:** contar
**PROPOSED_ES:** calcular
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Contar» corresponde normalmente a «zählen», mientras que el verbo alemán «rechnen» significa «calcular» o «hacer cuentas».
**Reason:** «Contar» corresponde normalmente a «zählen», mientras que el verbo alemán «rechnen» significa «calcular» o «hacer cuentas».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 538 (ES Kurss Lessons)

**Finding:** 538
**Audit ID:** ES-KURSS-LESSONS-LV2-0286
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** setzt euch (zect oich)
**CURRENT_ES:** setzt euch (zect oich) — ¡siéntate!
**PROPOSED_ES:** setzt euch (zect oich) — ¡sentaos!
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán es un imperativo plural informal dirigido a varias personas, mientras que «¡siéntate!» es singular.
**Reason:** El alemán es un imperativo plural informal dirigido a varias personas, mientras que «¡siéntate!» es singular.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 539 (ES Kurss Lessons)

**Finding:** 539
**Audit ID:** ES-KURSS-LESSONS-LV2-0287
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** En el imperativo singular de estos verbos, la e también cambia a i o ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
**CURRENT_ES:** En el imperativo singular de estos verbos, la e también cambia a i o ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
**PROPOSED_ES:** En el imperativo singular de estos verbos, la e cambia a i o ie: Paul, sprich! Lies! En plural: Paul und Hans, lest und sprecht!
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Problem:** La explicación se refiere al imperativo singular, pero después mezcla ejemplos del imperativo plural. Esto puede confundir al estudiante sobre qué formas presentan el cambio vocálico.
**Reason:** La explicación se refiere al imperativo singular, pero después mezcla ejemplos del imperativo plural. Esto puede confundir al estudiante sobre qué formas presentan el cambio vocálico.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 540 (ES Kurss Lessons)

**Finding:** 540
**Audit ID:** ES-KURSS-LESSONS-LV2-0288
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].description`
**Field type:** `sectionDescription`
**DE (read-only):** —
**CURRENT_ES:** Übung I - Usa la conjugación correcta. Übung II - cards de traducción.
**PROPOSED_ES:** Ejercicio I: usa la conjugación correcta. Ejercicio II: tarjetas de traducción.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto contiene el término alemán «Übung» y el término inglés «cards» en una instrucción que debe estar íntegramente en español.
**Reason:** El texto contiene el término alemán «Übung» y el término inglés «cards» en una instrucción que debe estar íntegramente en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 541 (ES Kurss Lessons)

**Finding:** 541
**Audit ID:** ES-KURSS-LESSONS-LV2-0289
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[18].lv`
**Field type:** `translateCard`
**DE (read-only):** Wen grüßt du?
**CURRENT_ES:** ¿Ko tu sveicini?
**PROPOSED_ES:** ¿A quién saludas?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. Además, no presenta la traducción española de la pregunta alemana.
**Reason:** El texto está en letón, no en español. Además, no presenta la traducción española de la pregunta alemana.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 542 (ES Kurss Lessons)

**Finding:** 542
**Audit ID:** ES-KURSS-LESSONS-LV2-0290
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[19].lv`
**Field type:** `translateCard`
**DE (read-only):** Ich grüße das Fräulein.
**CURRENT_ES:** Es sveicinu jaunkundzi.
**PROPOSED_ES:** Saludo a la señorita.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español, y debe sustituirse por la traducción española correspondiente.
**Reason:** El texto está en letón, no en español, y debe sustituirse por la traducción española correspondiente.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 543 (ES Kurss Lessons)

**Finding:** 543
**Audit ID:** ES-KURSS-LESSONS-LV2-0291
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[20].lv`
**Field type:** `translateCard`
**DE (read-only):** Öffnet alle Fenster!
**CURRENT_ES:** Atveriet visus logus!
**PROPOSED_ES:** ¡Abrid todas las ventanas!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. La traducción alemana corresponde a una orden dirigida a varias personas.
**Reason:** El texto está en letón, no en español. La traducción alemana corresponde a una orden dirigida a varias personas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 544 (ES Kurss Lessons)

**Finding:** 544
**Audit ID:** ES-KURSS-LESSONS-LV2-0292
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[22].lv`
**Field type:** `translateCard`
**DE (read-only):** Öffnest du das Fenster?
**CURRENT_ES:** Vai tu atver logu?
**PROPOSED_ES:** ¿Abres la ventana?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español, y debe sustituirse por la traducción española de la pregunta alemana.
**Reason:** El texto está en letón, no en español, y debe sustituirse por la traducción española de la pregunta alemana.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 545 (ES Kurss Lessons)

**Finding:** 545
**Audit ID:** ES-KURSS-LESSONS-LV2-0293
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[28].lv`
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

## Finding 546 (ES Kurss Lessons)

**Finding:** 546
**Audit ID:** ES-KURSS-LESSONS-LV2-0294
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[31].lv`
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

## Finding 547 (ES Kurss Lessons)

**Finding:** 547
**Audit ID:** ES-KURSS-LESSONS-LV2-0295
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[32].lv`
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

## Finding 548 (ES Kurss Lessons)

**Finding:** 548
**Audit ID:** ES-KURSS-LESSONS-LV2-0296
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[34].lv`
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

## Finding 549 (ES Kurss Lessons)

**Finding:** 549
**Audit ID:** ES-KURSS-LESSONS-LV2-0298
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[37].lv`
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

## Finding 550 (ES Kurss Lessons)

**Finding:** 550
**Audit ID:** ES-KURSS-LESSONS-LV2-0299
**Lesson:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[0].lv`
**Field type:** `translateCard`
**DE (read-only):** Grüße den Lehrer und die Lehrerin!
**CURRENT_ES:** Saludar al maestro y a la maestra.
**PROPOSED_ES:** ¡Saluda al profesor y a la profesora!
**Severity:** MEDIUM
**Category:** TRANSLATION
**Problem:** El alemán es una orden en imperativo («Grüße»), mientras que el infinitivo actual no conserva esa función. «Profesor/profesora» es más natural en este contexto educativo.
**Reason:** El alemán es una orden en imperativo («Grüße»), mientras que el infinitivo actual no conserva esa función. «Profesor/profesora» es más natural en este contexto educativo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
