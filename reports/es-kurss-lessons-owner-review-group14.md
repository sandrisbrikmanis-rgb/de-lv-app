# ES–DE Kurss Lessons — OWNER VIEW (group 14: findings 651–700)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 651 (ES Kurss Lessons)

**Finding:** 651
**Audit ID:** ES-KURSS-LESSONS-LV2-0412
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[0]`
**Field type:** `grammarExample`
**DE (read-only):** habe Geduld!
**CURRENT_ES:** habe Geduld! — ¡ten paciencia!
**PROPOSED_ES:** habe Geduld! — ¡Ten paciencia!
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** La traducción española es correcta, pero, al iniciar una oración independiente después del guion, corresponde escribir «Ten» con mayúscula.
**Reason:** La traducción española es correcta, pero, al iniciar una oración independiente después del guion, corresponde escribir «Ten» con mayúscula.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 652 (ES Kurss Lessons)

**Finding:** 652
**Audit ID:** ES-KURSS-LESSONS-LV2-0413
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[1]`
**Field type:** `grammarExample`
**DE (read-only):** habt Geduld!
**CURRENT_ES:** habt Geduld! — ¡tened paciencia!
**PROPOSED_ES:** habt Geduld! — ¡Tened paciencia!
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** La traducción española es correcta, pero, al iniciar una oración independiente después del guion, corresponde escribir «Tened» con mayúscula.
**Reason:** La traducción española es correcta, pero, al iniciar una oración independiente después del guion, corresponde escribir «Tened» con mayúscula.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 653 (ES Kurss Lessons)

**Finding:** 653
**Audit ID:** ES-KURSS-LESSONS-LV2-0414
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[7].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** La doble negación de la lengua española no se expresa en alemán con la palabra negativa kein. La palabra negativa kein sólo se sitúa delante del sustantivo.
**PROPOSED_ES:** La negación española con «no» y «ningún/ninguna» suele expresarse en alemán con kein. Kein es un determinante negativo que se coloca delante del sustantivo y se declina según el género, el número y el caso.
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Problem:** La formulación presenta como «doble negación» una construcción de concordancia negativa y afirma de forma demasiado restrictiva que kein solo aparece delante de un sustantivo.
**Reason:** La formulación presenta como «doble negación» una construcción de concordancia negativa y afirma de forma demasiado restrictiva que kein solo aparece delante de un sustantivo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 654 (ES Kurss Lessons)

**Finding:** 654
**Audit ID:** ES-KURSS-LESSONS-LV2-0415
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[8].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** Kein — vienskaitlis
**PROPOSED_ES:** Kein — singular
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «vienskaitlis» es letón. El encabezado debe estar en español.
**Reason:** «vienskaitlis» es letón. El encabezado debe estar en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 655 (ES Kurss Lessons)

**Finding:** 655
**Audit ID:** ES-KURSS-LESSONS-LV2-0416
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[9].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** Kein — daugiskaitlis
**PROPOSED_ES:** Kein — plural
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «daugiskaitlis» es letón. El encabezado debe estar en español.
**Reason:** «daugiskaitlis» es letón. El encabezado debe estar en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 656 (ES Kurss Lessons)

**Finding:** 656
**Audit ID:** ES-KURSS-LESSONS-LV2-0417
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Si la oración narrativa contiene la conjunción denn, el verbo permanece en 2ª posición. La conjunción denn no cuenta como miembro de la oración.
**PROPOSED_ES:** Si la oración contiene la conjunción denn, el verbo permanece en segunda posición. La conjunción denn no cuenta como elemento de la oración.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Oración narrativa» y «miembro de la oración» son expresiones poco naturales en este contexto. «Segunda posición» y «elemento de la oración» resultan más claros y adecuados.
**Reason:** «Oración narrativa» y «miembro de la oración» son expresiones poco naturales en este contexto. «Segunda posición» y «elemento de la oración» resultan más claros y adecuados.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 657 (ES Kurss Lessons)

**Finding:** 657
**Audit ID:** ES-KURSS-LESSONS-LV2-0418
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[12].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Los sustantivos compuestos van precedidos del article del último sustantivo. El énfasis está en la primera palabra del caso.
**PROPOSED_ES:** Los sustantivos compuestos llevan el artículo del último sustantivo. El acento recae en la primera parte.
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** «article» es un término inglés y debe ser «artículo». Además, «del caso» no tiene sentido en este contexto; la idea es que el acento recae en el primer componente del sustantivo compuesto.
**Reason:** «article» es un término inglés y debe ser «artículo». Además, «del caso» no tiene sentido en este contexto; la idea es que el acento recae en el primer componente del sustantivo compuesto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 658 (ES Kurss Lessons)

**Finding:** 658
**Audit ID:** ES-KURSS-LESSONS-LV2-0419
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[0].lv`
**Field type:** `translateCard`
**DE (read-only):** Was hast du?
**CURRENT_ES:** ¿Kas tev ir?
**PROPOSED_ES:** ¿Qué tienes?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español.
**Reason:** El texto está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 659 (ES Kurss Lessons)

**Finding:** 659
**Audit ID:** ES-KURSS-LESSONS-LV2-0420
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[2].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie sind die Bücher?
**CURRENT_ES:** ¿Cuáles son los libros?
**PROPOSED_ES:** ¿Cómo son los libros?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Wie sind die Bücher?» pregunta por las características de los libros, no por cuáles son.
**Reason:** «Wie sind die Bücher?» pregunta por las características de los libros, no por cuáles son.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 660 (ES Kurss Lessons)

**Finding:** 660
**Audit ID:** ES-KURSS-LESSONS-LV2-0421
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
**Field type:** `translateCard`
**DE (read-only):** Franz hat keine Feder und keinen Bleistift.
**CURRENT_ES:** Franc no tiene bolígrafo ni lápiz.
**PROPOSED_ES:** Franz no tiene pluma ni lápiz.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El nombre «Franc» no corresponde al nombre alemán «Franz» del contexto. Además, «Feder» se refiere aquí a una pluma, no a un bolígrafo.
**Reason:** El nombre «Franc» no corresponde al nombre alemán «Franz» del contexto. Además, «Feder» se refiere aquí a una pluma, no a un bolígrafo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 661 (ES Kurss Lessons)

**Finding:** 661
**Audit ID:** ES-KURSS-LESSONS-LV2-0422
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[12].lv`
**Field type:** `translateCard`
**DE (read-only):** Der Lehrer hat viele Bücher und ein Bücherbrett.
**CURRENT_ES:** La maestra tiene muchos libros y una estantería.
**PROPOSED_ES:** El maestro tiene muchos libros y una estantería.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El contexto alemán usa «der Lehrer», que corresponde a un maestro, no a una maestra.
**Reason:** El contexto alemán usa «der Lehrer», que corresponde a un maestro, no a una maestra.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 662 (ES Kurss Lessons)

**Finding:** 662
**Audit ID:** ES-KURSS-LESSONS-LV2-0423
**Lesson:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[15].lv`
**Field type:** `translateCard`
**DE (read-only):** Was tut Anna?
**CURRENT_ES:** Ko dara Anna?
**PROPOSED_ES:** ¿Qué hace Anna?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español.
**Reason:** El texto está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 663 (ES Kurss Lessons)

**Finding:** 663
**Audit ID:** ES-KURSS-LESSONS-LV2-0424
**Lesson:** `lesson11`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Escribe la forma conjugada correcta y ponla en plural!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Pon la conjugación» resulta poco natural en español y «hazlo» tiene un referente ambiguo. La recomendación hace explícita la acción solicitada.
**Reason:** «Pon la conjugación» resulta poco natural en español y «hazlo» tiene un referente ambiguo. La recomendación hace explícita la acción solicitada.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 664 (ES Kurss Lessons)

**Finding:** 664
**Audit ID:** ES-KURSS-LESSONS-LV2-0426
**Lesson:** `lesson12`
**Path:** `kurss.lessonItems.12.menuDesc (lesson header subtitle / menu)`
**Field type:** `uiMenuDesc`
**DE (read-only):** —
**CURRENT_ES:** Calidades comparables, también, edad y colores.
**PROPOSED_ES:** Grados comparativos, als/wie, edad y colores.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Calidades comparables» no traduce correctamente el tema de los grados comparativos, y «también» sustituye indebidamente los términos alemanes als/wie.
**Reason:** «Calidades comparables» no traduce correctamente el tema de los grados comparativos, y «también» sustituye indebidamente los términos alemanes als/wie.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 665 (ES Kurss Lessons)

**Finding:** 665
**Audit ID:** ES-KURSS-LESSONS-LV2-0429
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** wieviel
**CURRENT_ES:** wieviel — cik
**PROPOSED_ES:** wieviel — cuánto/cuántos
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «cik» no es español y constituye un resto de otra lengua.
**Reason:** «cik» no es español y constituye un resto de otra lengua.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 666 (ES Kurss Lessons)

**Finding:** 666
**Audit ID:** ES-KURSS-LESSONS-LV2-0430
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** Max (maks)
**CURRENT_ES:** Max (maks) — Maksis
**PROPOSED_ES:** Max (maks) — Max
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «Maksis» es un resto extranjero y no corresponde al nombre propio Max en español.
**Reason:** «Maksis» es un resto extranjero y no corresponde al nombre propio Max en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 667 (ES Kurss Lessons)

**Finding:** 667
**Audit ID:** ES-KURSS-LESSONS-LV2-0431
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** alt
**CURRENT_ES:** alt — viejo
**PROPOSED_ES:** alt — mayor (al hablar de la edad)
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Problem:** «Viejo» es posible en otros contextos, pero en esta lección sobre la edad puede inducir a traducir de forma poco natural las expresiones personales de edad.
**Reason:** «Viejo» es posible en otros contextos, pero en esta lección sobre la edad puede inducir a traducir de forma poco natural las expresiones personales de edad.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 668 (ES Kurss Lessons)

**Finding:** 668
**Audit ID:** ES-KURSS-LESSONS-LV2-0432
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** so alt wie
**CURRENT_ES:** so alt wie — tan viejo como
**PROPOSED_ES:** so alt wie — de la misma edad que
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Tan viejo como» suena despectivo o se refiere a objetos envejecidos; para personas y edades, «de la misma edad que» es más natural y preciso.
**Reason:** «Tan viejo como» suena despectivo o se refiere a objetos envejecidos; para personas y edades, «de la misma edad que» es más natural y preciso.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 669 (ES Kurss Lessons)

**Finding:** 669
**Audit ID:** ES-KURSS-LESSONS-LV2-0433
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** wie
**CURRENT_ES:** wie — cómo
**PROPOSED_ES:** wie — como
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** En este contexto de comparación, wie significa «como», no «cómo».
**Reason:** En este contexto de comparación, wie significa «como», no «cómo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 670 (ES Kurss Lessons)

**Finding:** 670
**Audit ID:** ES-KURSS-LESSONS-LV2-0434
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[17]`
**Field type:** `sectionItem`
**DE (read-only):** am jüngsten
**CURRENT_ES:** am jüngsten — el más reciente
**PROPOSED_ES:** am jüngsten — el más joven
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** am jüngsten es el superlativo de jung y significa «el más joven»; «el más reciente» corresponde a otra acepción.
**Reason:** am jüngsten es el superlativo de jung y significa «el más joven»; «el más reciente» corresponde a otra acepción.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 671 (ES Kurss Lessons)

**Finding:** 671
**Audit ID:** ES-KURSS-LESSONS-LV2-0435
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[0].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** Komparativ
**PROPOSED_ES:** Comparativo
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** El encabezado está completamente en alemán, aunque el contenido visible para el usuario debe estar en español.
**Reason:** El encabezado está completamente en alemán, aunque el contenido visible para el usuario debe estar en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 672 (ES Kurss Lessons)

**Finding:** 672
**Audit ID:** ES-KURSS-LESSONS-LV2-0436
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** La mayoría de los adjetivos monosilábicos con la vocal raíz a, o, u tienen una diéresis en el grado superlativo.
**PROPOSED_ES:** La mayoría de los adjetivos monosilábicos cuya vocal raíz es a, o, u tienen una diéresis en el comparativo.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La regla descrita corresponde al comparativo, no al superlativo. Además, «cuya vocal raíz es» resulta más natural y preciso que «con la vocal raíz».
**Reason:** La regla descrita corresponde al comparativo, no al superlativo. Además, «cuya vocal raíz es» resulta más natural y preciso que «con la vocal raíz».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 673 (ES Kurss Lessons)

**Finding:** 673
**Audit ID:** ES-KURSS-LESSONS-LV2-0437
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[3].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** Superlativ
**PROPOSED_ES:** Superlativo
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Problem:** El encabezado está completamente en alemán, aunque el contenido visible para el usuario debe estar en español.
**Reason:** El encabezado está completamente en alemán, aunque el contenido visible para el usuario debe estar en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 674 (ES Kurss Lessons)

**Finding:** 674
**Audit ID:** ES-KURSS-LESSONS-LV2-0438
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[1][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** nah (tuvs)
**CURRENT_ES:** nah (tuvs)
**PROPOSED_ES:** nah (cerca)
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La aclaración entre paréntesis está en letón («tuvs»), no en español.
**Reason:** La aclaración entre paréntesis está en letón («tuvs»), no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 675 (ES Kurss Lessons)

**Finding:** 675
**Audit ID:** ES-KURSS-LESSONS-LV2-0439
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[2][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** hoch (augsts)
**CURRENT_ES:** hoch (augsts)
**PROPOSED_ES:** hoch (alto)
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La aclaración entre paréntesis está en letón («augsts»), no en español.
**Reason:** La aclaración entre paréntesis está en letón («augsts»), no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 676 (ES Kurss Lessons)

**Finding:** 676
**Audit ID:** ES-KURSS-LESSONS-LV2-0440
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[3][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** gut (labs)
**CURRENT_ES:** gut (labs)
**PROPOSED_ES:** gut (bueno)
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La aclaración entre paréntesis está en letón («labs»), no en español.
**Reason:** La aclaración entre paréntesis está en letón («labs»), no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 677 (ES Kurss Lessons)

**Finding:** 677
**Audit ID:** ES-KURSS-LESSONS-LV2-0441
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].table[4][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** viel (daudz)
**CURRENT_ES:** viel (daudz)
**PROPOSED_ES:** viel (mucho)
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La aclaración entre paréntesis está en letón («daudz»), no en español.
**Reason:** La aclaración entre paréntesis está en letón («daudz»), no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 678 (ES Kurss Lessons)

**Finding:** 678
**Audit ID:** ES-KURSS-LESSONS-LV2-0442
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie heißen Sie?
**CURRENT_ES:** ¿Cómo te llamas?
**PROPOSED_ES:** ¿Cómo se llama usted?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El español usa el trato informal («te»), mientras que el contexto alemán usa la forma formal «Sie».
**Reason:** El español usa el trato informal («te»), mientras que el contexto alemán usa la forma formal «Sie».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 679 (ES Kurss Lessons)

**Finding:** 679
**Audit ID:** ES-KURSS-LESSONS-LV2-0443
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[10].lv`
**Field type:** `translateCard`
**DE (read-only):** Ich bin zwanzig Jahre alt.
**CURRENT_ES:** Es esmu 20 gadus vecs.
**PROPOSED_ES:** Tengo 20 años.
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo está completamente en letón, no en español; además, no es comprensible para un usuario hispanohablante.
**Reason:** El campo está completamente en letón, no en español; además, no es comprensible para un usuario hispanohablante.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 680 (ES Kurss Lessons)

**Finding:** 680
**Audit ID:** ES-KURSS-LESSONS-LV2-0444
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[11].lv`
**Field type:** `translateCard`
**DE (read-only):** Ist Max groß?
**CURRENT_ES:** ¿Vai Maksis son mentiras?
**PROPOSED_ES:** ¿Es Max alto?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** La frase contiene texto letón («Vai Maksis») y una traducción española sin sentido («son mentiras»). El contexto alemán pregunta si Max es alto.
**Reason:** La frase contiene texto letón («Vai Maksis») y una traducción española sin sentido («son mentiras»). El contexto alemán pregunta si Max es alto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 681 (ES Kurss Lessons)

**Finding:** 681
**Audit ID:** ES-KURSS-LESSONS-LV2-0445
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer ist am größten?
**CURRENT_ES:** ¿Cuál es el mayor?
**PROPOSED_ES:** ¿Cuál es el más grande?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** En este contexto, «größten» significa «más grande», no «mayor», que normalmente se interpreta como de más edad.
**Reason:** En este contexto, «größten» significa «más grande», no «mayor», que normalmente se interpreta como de más edad.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 682 (ES Kurss Lessons)

**Finding:** 682
**Audit ID:** ES-KURSS-LESSONS-LV2-0446
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv`
**Field type:** `translateCard`
**DE (read-only):** Wieviel Brüder haben Sie?
**CURRENT_ES:** ¿Cuantos hermanos tienes?
**PROPOSED_ES:** ¿Cuántos hermanos tiene?
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta la tilde en «Cuántos». Además, el alemán usa el tratamiento formal «Sie», por lo que «tiene» refleja mejor el contexto.
**Reason:** Falta la tilde en «Cuántos». Además, el alemán usa el tratamiento formal «Sie», por lo que «tiene» refleja mejor el contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 683 (ES Kurss Lessons)

**Finding:** 683
**Audit ID:** ES-KURSS-LESSONS-LV2-0447
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[23].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie ist die Tinte?
**CURRENT_ES:** ¿Qué es la tinta?
**PROPOSED_ES:** ¿Cómo es la tinta?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Wie ist die Tinte?» pregunta por cómo es la tinta, no por qué es o qué es.
**Reason:** «Wie ist die Tinte?» pregunta por cómo es la tinta, no por qué es o qué es.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 684 (ES Kurss Lessons)

**Finding:** 684
**Audit ID:** ES-KURSS-LESSONS-LV2-0448
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[24].lv`
**Field type:** `translateCard`
**DE (read-only):** Sie ist schwarz.
**CURRENT_ES:** Es negro.
**PROPOSED_ES:** Es negra.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Sie» se refiere a «die Tinte», que es un sustantivo femenino en español: «la tinta».
**Reason:** «Sie» se refiere a «die Tinte», que es un sustantivo femenino en español: «la tinta».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 685 (ES Kurss Lessons)

**Finding:** 685
**Audit ID:** ES-KURSS-LESSONS-LV2-0449
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[25].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie ist die Kreide?
**CURRENT_ES:** ¿Qué es la tiza?
**PROPOSED_ES:** ¿Cómo es la tiza?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Wie ist die Kreide?» pregunta por una característica de la tiza, no por su identidad o definición.
**Reason:** «Wie ist die Kreide?» pregunta por una característica de la tiza, no por su identidad o definición.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 686 (ES Kurss Lessons)

**Finding:** 686
**Audit ID:** ES-KURSS-LESSONS-LV2-0450
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[26].lv`
**Field type:** `translateCard`
**DE (read-only):** Sie ist weiß.
**CURRENT_ES:** Tas ir balts.
**PROPOSED_ES:** Es blanca.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español. Además, la tiza («die Kreide» / «la tiza») es femenina en español.
**Reason:** El texto está en letón, no en español. Además, la tiza («die Kreide» / «la tiza») es femenina en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 687 (ES Kurss Lessons)

**Finding:** 687
**Audit ID:** ES-KURSS-LESSONS-LV2-0451
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[27].lv`
**Field type:** `translateCard`
**DE (read-only):** Wie sind die Blumen?
**CURRENT_ES:** ¿Qué son las flores?
**PROPOSED_ES:** ¿Cómo son las flores?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Wie sind die Blumen?» pregunta por las características de las flores, no por qué son o qué son.
**Reason:** «Wie sind die Blumen?» pregunta por las características de las flores, no por qué son o qué son.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 688 (ES Kurss Lessons)

**Finding:** 688
**Audit ID:** ES-KURSS-LESSONS-LV2-0452
**Lesson:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv`
**Field type:** `translateCard`
**DE (read-only):** Sind Sie glücklich?
**CURRENT_ES:** ¿Estás feliz?
**PROPOSED_ES:** ¿Está feliz?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán usa «Sie», tratamiento formal singular en este contexto; «estás» corresponde al tratamiento informal «du».
**Reason:** El alemán usa «Sie», tratamiento formal singular en este contexto; «estás» corresponde al tratamiento informal «du».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 689 (ES Kurss Lessons)

**Finding:** 689
**Audit ID:** ES-KURSS-LESSONS-LV2-0453
**Lesson:** `lesson12`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Usa la conjugación correcta y ponlo en plural!
**Severity:** LOW
**Category:** ES_NATURALNESS
**Problem:** «Pon la conjugación» resulta poco natural en español; normalmente se «usa» o se «escribe» una conjugación, mientras que lo que se pone en plural es la respuesta o la forma.
**Reason:** «Pon la conjugación» resulta poco natural en español; normalmente se «usa» o se «escribe» una conjugación, mientras que lo que se pone en plural es la respuesta o la forma.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 690 (ES Kurss Lessons)

**Finding:** 690
**Audit ID:** ES-KURSS-LESSONS-LV2-0455
**Lesson:** `lesson13`
**Path:** `kurss.lessonItems.13.menuDesc (lesson header subtitle / menu)`
**Field type:** `uiMenuDesc`
**DE (read-only):** —
**CURRENT_ES:** Der Körper, partes del cuerpo, turnen y jeder.
**PROPOSED_ES:** El cuerpo («Der Körper»), partes del cuerpo, gimnasia («turnen») y «jeder».
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** El texto mezcla alemán y español sin marcar claramente qué términos son vocabulario alemán y presenta una enumeración poco natural. La propuesta conserva los términos alemanes como contenido pedagógico, pero aclara su función.
**Reason:** El texto mezcla alemán y español sin marcar claramente qué términos son vocabulario alemán y presenta una enumeración poco natural. La propuesta conserva los términos alemanes como contenido pedagógico, pero aclara su función.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 691 (ES Kurss Lessons)

**Finding:** 691
**Audit ID:** ES-KURSS-LESSONS-LV2-0456
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.intro`
**Field type:** `intro`
**DE (read-only):** —
**CURRENT_ES:** Conferencia Trece: Der Körper, partes del cuerpo, ejercicio, verbos reflexivos y plural.
**PROPOSED_ES:** Lección 13: «Der Körper», partes del cuerpo, gimnasia, verbos reflexivos y plural.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** «Conferencia Trece» no es una denominación natural para el encabezado de una lección y «Trece» debería seguir el formato numérico del resto del curso. «Der Körper» puede conservarse como término alemán de la lección, pero debe distinguirse del texto español.
**Reason:** «Conferencia Trece» no es una denominación natural para el encabezado de una lección y «Trece» debería seguir el formato numérico del resto del curso. «Der Körper» puede conservarse como término alemán de la lección, pero debe distinguirse del texto español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 692 (ES Kurss Lessons)

**Finding:** 692
**Audit ID:** ES-KURSS-LESSONS-LV2-0457
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.
**CURRENT_ES:** Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.
**PROPOSED_ES:** El ser humano tiene una cabeza, un cuello, un tronco, dos brazos, dos manos, dos piernas y dos pies.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible para español contiene íntegramente el ejemplo alemán en lugar de su traducción al español.
**Reason:** El campo visible para español contiene íntegramente el ejemplo alemán en lugar de su traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 693 (ES Kurss Lessons)

**Finding:** 693
**Audit ID:** ES-KURSS-LESSONS-LV2-0458
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** Wie ist der Kopf? Der Kopf ist rund.
**CURRENT_ES:** Wie ist der Kopf? Der Kopf ist rund.
**PROPOSED_ES:** ¿Cómo es la cabeza? La cabeza es redonda.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible para español contiene íntegramente el diálogo alemán en lugar de su traducción al español.
**Reason:** El campo visible para español contiene íntegramente el diálogo alemán en lugar de su traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 694 (ES Kurss Lessons)

**Finding:** 694
**Audit ID:** ES-KURSS-LESSONS-LV2-0459
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** Der Hals ist kurz.
**CURRENT_ES:** Der Hals ist kurz.
**PROPOSED_ES:** El cuello es corto.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible para español contiene íntegramente la oración alemana en lugar de su traducción al español.
**Reason:** El campo visible para español contiene íntegramente la oración alemana en lugar de su traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 695 (ES Kurss Lessons)

**Finding:** 695
**Audit ID:** ES-KURSS-LESSONS-LV2-0460
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** Der Rumpf ist lang.
**CURRENT_ES:** Der Rumpf ist lang.
**PROPOSED_ES:** El tronco es largo.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible para español contiene íntegramente la oración alemana en lugar de su traducción al español.
**Reason:** El campo visible para español contiene íntegramente la oración alemana en lugar de su traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 696 (ES Kurss Lessons)

**Finding:** 696
**Audit ID:** ES-KURSS-LESSONS-LV2-0461
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** Der Arm ist auch lang.
**CURRENT_ES:** Der Arm ist auch lang.
**PROPOSED_ES:** El brazo también es largo.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible para español contiene íntegramente la oración alemana en lugar de su traducción al español.
**Reason:** El campo visible para español contiene íntegramente la oración alemana en lugar de su traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 697 (ES Kurss Lessons)

**Finding:** 697
**Audit ID:** ES-KURSS-LESSONS-LV2-0462
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** Die Hand ist klein.
**CURRENT_ES:** Die Hand ist klein.
**PROPOSED_ES:** La mano es pequeña.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Reason:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 698 (ES Kurss Lessons)

**Finding:** 698
**Audit ID:** ES-KURSS-LESSONS-LV2-0463
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** Das Bein ist dick.
**CURRENT_ES:** Das Bein ist dick.
**PROPOSED_ES:** La pierna es gruesa.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Reason:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 699 (ES Kurss Lessons)

**Finding:** 699
**Audit ID:** ES-KURSS-LESSONS-LV2-0464
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** Der Fuß ist dünn.
**CURRENT_ES:** Der Fuß ist dünn.
**PROPOSED_ES:** El pie es delgado.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Reason:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 700 (ES Kurss Lessons)

**Finding:** 700
**Audit ID:** ES-KURSS-LESSONS-LV2-0465
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[0].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** Die Brust ist vorn, aber der Rücken ist hinten.
**CURRENT_ES:** Die Brust ist vorn, aber der Rücken ist hinten.
**PROPOSED_ES:** El pecho está delante, pero la espalda está detrás.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Reason:** El campo visible está en alemán y debe traducirse al español; el ejemplo alemán de deContext debe conservarse.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
