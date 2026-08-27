# ES–DE Kurss Lessons — OWNER VIEW (group 17: findings 801–850)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 801 (ES Kurss Lessons)

**Finding:** 801
**Audit ID:** ES-KURSS-LESSONS-LV2-0584
**Lesson:** `lesson14`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Escribe la conjugación correcta y pon la frase en plural!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción didáctica; conviene especificar que la frase debe ponerse en plural.
**Reason:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción didáctica; conviene especificar que la frase debe ponerse en plural.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 802 (ES Kurss Lessons)

**Finding:** 802
**Audit ID:** ES-KURSS-LESSONS-LV2-0586
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.intro`
**Field type:** `intro`
**DE (read-only):** —
**CURRENT_ES:** Decimoquinta conferencia: sollen, dürfen, essen y palabras frutales.
**PROPOSED_ES:** Decimoquinta lección: sollen, dürfen, essen y palabras sobre frutas.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Conferencia» no corresponde al tipo de contenido y «palabras frutales» no es una expresión natural para referirse a vocabulario sobre frutas.
**Reason:** «Conferencia» no corresponde al tipo de contenido y «palabras frutales» no es una expresión natural para referirse a vocabulario sobre frutas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 803 (ES Kurss Lessons)

**Finding:** 803
**Audit ID:** ES-KURSS-LESSONS-LV2-0587
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** sollen
**CURRENT_ES:** sollen — debería
**PROPOSED_ES:** sollen — deber
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La forma de diccionario sollen se traduce aquí como «deber» o «tener que»; «debería» es una forma condicional y no corresponde a la entrada del verbo.
**Reason:** La forma de diccionario sollen se traduce aquí como «deber» o «tener que»; «debería» es una forma condicional y no corresponde a la entrada del verbo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 804 (ES Kurss Lessons)

**Finding:** 804
**Audit ID:** ES-KURSS-LESSONS-LV2-0594
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** du darfst
**CURRENT_ES:** du darfst — usted puede
**PROPOSED_ES:** du darfst — tú puedes
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** du corresponde a «tú», no a «usted». La traducción actual cambia la persona y el registro del pronombre.
**Reason:** du corresponde a «tú», no a «usted». La traducción actual cambia la persona y el registro del pronombre.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 805 (ES Kurss Lessons)

**Finding:** 805
**Audit ID:** ES-KURSS-LESSONS-LV2-0595
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** ihr dürft
**CURRENT_ES:** ihr dürft — usted puede
**PROPOSED_ES:** ihr dürft — vosotros podéis
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** ihr es la segunda persona plural informal y no corresponde a «usted», que es singular y formal.
**Reason:** ihr es la segunda persona plural informal y no corresponde a «usted», que es singular y formal.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 806 (ES Kurss Lessons)

**Finding:** 806
**Audit ID:** ES-KURSS-LESSONS-LV2-0597
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[19]`
**Field type:** `sectionItem`
**DE (read-only):** entzweischneiden
**CURRENT_ES:** entzweischneiden — cortado por la mitad
**PROPOSED_ES:** entzweischneiden — cortar por la mitad
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La entrada alemana es un infinitivo; la traducción española debe mantener el infinitivo. «Cortado» es un participio.
**Reason:** La entrada alemana es un infinitivo; la traducción española debe mantener el infinitivo. «Cortado» es un participio.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 807 (ES Kurss Lessons)

**Finding:** 807
**Audit ID:** ES-KURSS-LESSONS-LV2-0599
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[35]`
**Field type:** `sectionItem`
**DE (read-only):** du isst
**CURRENT_ES:** du isst — usted come
**PROPOSED_ES:** du isst — tú comes
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «du» es el pronombre informal de segunda persona singular y corresponde a «tú», no a «usted».
**Reason:** «du» es el pronombre informal de segunda persona singular y corresponde a «tú», no a «usted».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 808 (ES Kurss Lessons)

**Finding:** 808
**Audit ID:** ES-KURSS-LESSONS-LV2-0600
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[38]`
**Field type:** `sectionItem`
**DE (read-only):** ihr esst
**CURRENT_ES:** ihr esst — tú comes
**PROPOSED_ES:** ihr esst — vosotros coméis
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «ihr» es la segunda persona plural informal y corresponde a «vosotros», no a «tú».
**Reason:** «ihr» es la segunda persona plural informal y corresponde a «vosotros», no a «tú».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 809 (ES Kurss Lessons)

**Finding:** 809
**Audit ID:** ES-KURSS-LESSONS-LV2-0601
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Sollen significa necesitar en el sentido del deber.
**PROPOSED_ES:** Sollen expresa deber u obligación, normalmente por indicación de otra persona.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Sollen» no significa principalmente «necesitar»; esa traducción confunde el verbo modal con «müssen» y la redacción española resulta poco natural.
**Reason:** «Sollen» no significa principalmente «necesitar»; esa traducción confunde el verbo modal con «müssen» y la redacción española resulta poco natural.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 810 (ES Kurss Lessons)

**Finding:** 810
**Audit ID:** ES-KURSS-LESSONS-LV2-0603
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[1]`
**Field type:** `grammarExample`
**DE (read-only):** sollen
**CURRENT_ES:** sollen — debería
**PROPOSED_ES:** sollen — deber
**Severity:** MEDIUM
**Category:** ES_GRAMMAR
**Problem:** «Sollen» está en infinitivo, mientras que «debería» es una forma condicional de tercera persona singular. La traducción debe mantener la forma léxica del infinitivo.
**Reason:** «Sollen» está en infinitivo, mientras que «debería» es una forma condicional de tercera persona singular. La traducción debe mantener la forma léxica del infinitivo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 811 (ES Kurss Lessons)

**Finding:** 811
**Audit ID:** ES-KURSS-LESSONS-LV2-0604
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Dürfen significa estar permitido. En Dürfen, la vocal raíz es a en singular y ü en plural.
**PROPOSED_ES:** Dürfen significa «tener permiso». En el verbo dürfen, la vocal del radical es a en singular y ü en plural.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** «Vocal raíz» no es la formulación más precisa en terminología gramatical española; «vocal del radical» resulta más clara. Además, «tener permiso» es una explicación más natural de dürfen en este contexto.
**Reason:** «Vocal raíz» no es la formulación más precisa en terminología gramatical española; «vocal del radical» resulta más clara. Además, «tener permiso» es una explicación más natural de dürfen en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 812 (ES Kurss Lessons)

**Finding:** 812
**Audit ID:** ES-KURSS-LESSONS-LV2-0605
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[4].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Essen es el siguiente.
**PROPOSED_ES:** El verbo essen se conjuga así:
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** La frase actual es poco natural y no expresa claramente que a continuación se presenta la conjugación del verbo.
**Reason:** La frase actual es poco natural y no expresa claramente que a continuación se presenta la conjugación del verbo.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 813 (ES Kurss Lessons)

**Finding:** 813
**Audit ID:** ES-KURSS-LESSONS-LV2-0606
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Si el proyecto utiliza escritura moderna, puede escribir: du isst, er/sie/es isst, ihr esst.
**PROPOSED_ES:** Con la ortografía moderna, se escriben las formas: du isst, er/sie/es isst, ihr esst.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Si el proyecto utiliza escritura moderna» introduce innecesariamente un proyecto y suena poco natural. La redacción debe referirse directamente a la ortografía y presentar las formas como ejemplos.
**Reason:** «Si el proyecto utiliza escritura moderna» introduce innecesariamente un proyecto y suena poco natural. La redacción debe referirse directamente a la ortografía y presentar las formas como ejemplos.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 814 (ES Kurss Lessons)

**Finding:** 814
**Audit ID:** ES-KURSS-LESSONS-LV2-0607
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** En el verbo compuesto entzweischneiden, el énfasis está en el prefijo entzweí-, por lo que en tiempo presente el prefijo se separa y se coloca al final de la oración.
**PROPOSED_ES:** En el verbo entzweischneiden, el énfasis recae en el prefijo separable entzwei-, por lo que, en presente, este se separa y se coloca al final de la oración.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** «Entzweí-» altera incorrectamente la ortografía del elemento alemán «entzwei-». Además, «prefijo separable» es más preciso que «verbo compuesto» en este contexto.
**Reason:** «Entzweí-» altera incorrectamente la ortografía del elemento alemán «entzwei-». Además, «prefijo separable» es más preciso que «verbo compuesto» en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 815 (ES Kurss Lessons)

**Finding:** 815
**Audit ID:** ES-KURSS-LESSONS-LV2-0608
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[5].lv`
**Field type:** `translateCard`
**DE (read-only):** Nein, die Pflaumen sollst du nicht essen, sie sind unreif.
**CURRENT_ES:** No, no hace falta que te comas las ciruelas, no han llegado.
**PROPOSED_ES:** No, no debes comerte las ciruelas; están verdes.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Sollst du nicht essen» expresa prohibición u obligación negativa («no debes comer»), no falta de necesidad. «Sie sind unreif» significa que están verdes o inmaduras, no que «no han llegado».
**Reason:** «Sollst du nicht essen» expresa prohibición u obligación negativa («no debes comer»), no falta de necesidad. «Sie sind unreif» significa que están verdes o inmaduras, no que «no han llegado».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 816 (ES Kurss Lessons)

**Finding:** 816
**Audit ID:** ES-KURSS-LESSONS-LV2-0609
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[6].lv`
**Field type:** `translateCard`
**DE (read-only):** Isst du einen Apfel oder eine Birne?
**CURRENT_ES:** ¿Comiste una manzana o una pera?
**PROPOSED_ES:** ¿Comes una manzana o una pera?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Isst du» está en presente, mientras que «comiste» está en pretérito.
**Reason:** «Isst du» está en presente, mientras que «comiste» está en pretérito.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 817 (ES Kurss Lessons)

**Finding:** 817
**Audit ID:** ES-KURSS-LESSONS-LV2-0610
**Lesson:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[10].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer muss lernen?
**CURRENT_ES:** ¿Quién necesita estudiar?
**PROPOSED_ES:** ¿Quién tiene que estudiar?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Muss» expresa obligación («tener que»), mientras que «necesita» expresa necesidad y no reproduce con precisión el valor modal del alemán.
**Reason:** «Muss» expresa obligación («tener que»), mientras que «necesita» expresa necesidad y no reproduce con precisión el valor modal del alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 818 (ES Kurss Lessons)

**Finding:** 818
**Audit ID:** ES-KURSS-LESSONS-LV2-0611
**Lesson:** `lesson15`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Escribe la forma verbal correcta y úsala en plural!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción de ejercicio. La propuesta indica con claridad qué debe hacer el alumno.
**Reason:** «Pon la conjugación» y «hazlo» resultan poco naturales y ambiguos en una instrucción de ejercicio. La propuesta indica con claridad qué debe hacer el alumno.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 819 (ES Kurss Lessons)

**Finding:** 819
**Audit ID:** ES-KURSS-LESSONS-LV2-0613
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.intro`
**Field type:** `intro`
**DE (read-only):** —
**CURRENT_ES:** Decimosexta conferencia: dativo, geben, sich nähern y ejercicios dativos.
**PROPOSED_ES:** Decimosexta lección: el dativo, geben, sich nähern y ejercicios sobre el dativo.
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** «Conferencia» no corresponde a una unidad de curso y debe ser «lección». «Ejercicios dativos» es poco natural; «ejercicios sobre el dativo» expresa claramente el contenido.
**Reason:** «Conferencia» no corresponde a una unidad de curso y debe ser «lección». «Ejercicios dativos» es poco natural; «ejercicios sobre el dativo» expresa claramente el contenido.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 820 (ES Kurss Lessons)

**Finding:** 820
**Audit ID:** ES-KURSS-LESSONS-LV2-0614
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** Wem schenkt der Vater ein Buch?
**CURRENT_ES:** Wem schenkt der Vater ein Buch?
**PROPOSED_ES:** ¿A quién le regala el padre un libro?
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 821 (ES Kurss Lessons)

**Finding:** 821
**Audit ID:** ES-KURSS-LESSONS-LV2-0615
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** Der Vater schenkt dem Sohne ein Buch.
**CURRENT_ES:** Der Vater schenkt dem Sohne ein Buch.
**PROPOSED_ES:** El padre le regala un libro al hijo.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 822 (ES Kurss Lessons)

**Finding:** 822
**Audit ID:** ES-KURSS-LESSONS-LV2-0616
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** Der Vater schenkt den Söhnen Bücher.
**CURRENT_ES:** Der Vater schenkt den Söhnen Bücher.
**PROPOSED_ES:** El padre les regala libros a los hijos.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 823 (ES Kurss Lessons)

**Finding:** 823
**Audit ID:** ES-KURSS-LESSONS-LV2-0617
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** Wem nähert sich die Mutter?
**CURRENT_ES:** Wem nähert sich die Mutter?
**PROPOSED_ES:** ¿A quién se acerca la madre?
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 824 (ES Kurss Lessons)

**Finding:** 824
**Audit ID:** ES-KURSS-LESSONS-LV2-0618
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** Die Mutter nähert sich der Tochter.
**CURRENT_ES:** Die Mutter nähert sich der Tochter.
**PROPOSED_ES:** La madre se acerca a la hija.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 825 (ES Kurss Lessons)

**Finding:** 825
**Audit ID:** ES-KURSS-LESSONS-LV2-0619
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** Die Mutter nähert sich den Töchtern.
**CURRENT_ES:** Die Mutter nähert sich den Töchtern.
**PROPOSED_ES:** La madre se acerca a las hijas.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 826 (ES Kurss Lessons)

**Finding:** 826
**Audit ID:** ES-KURSS-LESSONS-LV2-0620
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** Wem gibt die Magd Brot und Milch?
**CURRENT_ES:** Wem gibt die Magd Brot und Milch?
**PROPOSED_ES:** ¿A quién le da la criada pan y leche?
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 827 (ES Kurss Lessons)

**Finding:** 827
**Audit ID:** ES-KURSS-LESSONS-LV2-0621
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** Die Magd gibt dem Kinde Brot und Milch.
**CURRENT_ES:** Die Magd gibt dem Kinde Brot und Milch.
**PROPOSED_ES:** La criada le da pan y leche al niño.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 828 (ES Kurss Lessons)

**Finding:** 828
**Audit ID:** ES-KURSS-LESSONS-LV2-0622
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** Die Magd gibt den Kindern Brot und Milch.
**CURRENT_ES:** Die Magd gibt den Kindern Brot und Milch.
**PROPOSED_ES:** La criada les da pan y leche a los niños.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 829 (ES Kurss Lessons)

**Finding:** 829
**Audit ID:** ES-KURSS-LESSONS-LV2-0623
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** Wem gehorchen die Kinder?
**CURRENT_ES:** Wem gehorchen die Kinder?
**PROPOSED_ES:** ¿A quién obedecen los niños?
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 830 (ES Kurss Lessons)

**Finding:** 830
**Audit ID:** ES-KURSS-LESSONS-LV2-0624
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** Sie gehorchen den Eltern.
**CURRENT_ES:** Sie gehorchen den Eltern.
**PROPOSED_ES:** Obedecen a sus padres.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 831 (ES Kurss Lessons)

**Finding:** 831
**Audit ID:** ES-KURSS-LESSONS-LV2-0625
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** Wem gehorcht der Hund?
**CURRENT_ES:** Wem gehorcht der Hund?
**PROPOSED_ES:** ¿A quién obedece el perro?
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 832 (ES Kurss Lessons)

**Finding:** 832
**Audit ID:** ES-KURSS-LESSONS-LV2-0626
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** Der Hund gehorcht dem Knechte.
**CURRENT_ES:** Der Hund gehorcht dem Knechte.
**PROPOSED_ES:** El perro obedece al criado.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 833 (ES Kurss Lessons)

**Finding:** 833
**Audit ID:** ES-KURSS-LESSONS-LV2-0627
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** Wem gehören die Felder, die Wiesen und die Wälder?
**CURRENT_ES:** Wem gehören die Felder, die Wiesen und die Wälder?
**PROPOSED_ES:** ¿A quién pertenecen los campos, los prados y los bosques?
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 834 (ES Kurss Lessons)

**Finding:** 834
**Audit ID:** ES-KURSS-LESSONS-LV2-0628
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** Die Felder, die Wiesen und die Wälder gehören den Bauern und den Bäuerinnen.
**CURRENT_ES:** Die Felder, die Wiesen und die Wälder gehören den Bauern und den Bäuerinnen.
**PROPOSED_ES:** Los campos, los prados y los bosques pertenecen a los agricultores y las agricultoras.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 835 (ES Kurss Lessons)

**Finding:** 835
**Audit ID:** ES-KURSS-LESSONS-LV2-0629
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[15]`
**Field type:** `sectionItem`
**DE (read-only):** Wem folgt der Hund?
**CURRENT_ES:** Wem folgt der Hund?
**PROPOSED_ES:** ¿A quién sigue el perro?
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 836 (ES Kurss Lessons)

**Finding:** 836
**Audit ID:** ES-KURSS-LESSONS-LV2-0630
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** Der Hund folgt dem Jäger.
**CURRENT_ES:** Der Hund folgt dem Jäger.
**PROPOSED_ES:** El perro sigue al cazador.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 837 (ES Kurss Lessons)

**Finding:** 837
**Audit ID:** ES-KURSS-LESSONS-LV2-0631
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[0].items[17]`
**Field type:** `sectionItem`
**DE (read-only):** Der Hund ist dem Jäger treu.
**CURRENT_ES:** Der Hund ist dem Jäger treu.
**PROPOSED_ES:** El perro es fiel al cazador.
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Reason:** El campo visible está en alemán en lugar de estar traducido al español; el ejemplo alemán debe conservarse en deContext.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 838 (ES Kurss Lessons)

**Finding:** 838
**Audit ID:** ES-KURSS-LESSONS-LV2-0632
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** wem
**CURRENT_ES:** wem — kam?
**PROPOSED_ES:** wem — ¿a quién?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La traducción visible contiene «kam?», que no es español y no traduce «wem»; parece un residuo extranjero o un error de traducción.
**Reason:** La traducción visible contiene «kam?», que no es español y no traduce «wem»; parece un residuo extranjero o un error de traducción.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 839 (ES Kurss Lessons)

**Finding:** 839
**Audit ID:** ES-KURSS-LESSONS-LV2-0633
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** die Felder
**CURRENT_ES:** die Felder — campos / campos
**PROPOSED_ES:** die Felder — campos
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS
**Problem:** La barra combina dos traducciones idénticas y redundantes en un campo dirigido al alumno.
**Reason:** La barra combina dos traducciones idénticas y redundantes en un campo dirigido al alumno.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 840 (ES Kurss Lessons)

**Finding:** 840
**Audit ID:** ES-KURSS-LESSONS-LV2-0634
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[0].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** Dativs
**PROPOSED_ES:** Dativo
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** El encabezado usa el término alemán «Dativs» en lugar del término gramatical español «dativo».
**Reason:** El encabezado usa el término alemán «Dativs» en lugar del término gramatical español «dativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 841 (ES Kurss Lessons)

**Finding:** 841
**Audit ID:** ES-KURSS-LESSONS-LV2-0635
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** El dativo responde a la pregunta: ¿wem? - ¿A quien?
**PROPOSED_ES:** El dativo responde a la pregunta: ¿wem? — ¿A quién?
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta la tilde en «quién». Se conserva «wem?» porque es el ejemplo alemán que se está explicando.
**Reason:** Falta la tilde en «quién». Se conserva «wem?» porque es el ejemplo alemán que se está explicando.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 842 (ES Kurss Lessons)

**Finding:** 842
**Audit ID:** ES-KURSS-LESSONS-LV2-0636
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[1][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** Nominativ
**CURRENT_ES:** Nominativ
**PROPOSED_ES:** Nominativo
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** Es el término alemán; en una tabla gramatical en español debe usarse «nominativo».
**Reason:** Es el término alemán; en una tabla gramatical en español debe usarse «nominativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 843 (ES Kurss Lessons)

**Finding:** 843
**Audit ID:** ES-KURSS-LESSONS-LV2-0637
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[2][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** Dativ
**CURRENT_ES:** Dativ
**PROPOSED_ES:** Dativo
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** Es el término alemán; en una tabla gramatical en español debe usarse «dativo».
**Reason:** Es el término alemán; en una tabla gramatical en español debe usarse «dativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 844 (ES Kurss Lessons)

**Finding:** 844
**Audit ID:** ES-KURSS-LESSONS-LV2-0638
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[1].table[3][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** Akkusativ
**CURRENT_ES:** Akkusativ
**PROPOSED_ES:** Acusativo
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** Es el término alemán; en una tabla gramatical en español debe usarse «acusativo».
**Reason:** Es el término alemán; en una tabla gramatical en español debe usarse «acusativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 845 (ES Kurss Lessons)

**Finding:** 845
**Audit ID:** ES-KURSS-LESSONS-LV2-0639
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[1][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** Nominativ
**CURRENT_ES:** Nominativ
**PROPOSED_ES:** Nominativo
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** Es el término alemán; en una tabla gramatical en español debe usarse «nominativo».
**Reason:** Es el término alemán; en una tabla gramatical en español debe usarse «nominativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 846 (ES Kurss Lessons)

**Finding:** 846
**Audit ID:** ES-KURSS-LESSONS-LV2-0640
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[2][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** Dativ
**CURRENT_ES:** Dativ
**PROPOSED_ES:** Dativo
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** Es el término alemán; en una tabla gramatical en español debe usarse «dativo».
**Reason:** Es el término alemán; en una tabla gramatical en español debe usarse «dativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 847 (ES Kurss Lessons)

**Finding:** 847
**Audit ID:** ES-KURSS-LESSONS-LV2-0641
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[2].table[3][0]`
**Field type:** `grammarTableCell`
**DE (read-only):** Akkusativ
**CURRENT_ES:** Akkusativ
**PROPOSED_ES:** Acusativo
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** Es el término alemán; en una tabla gramatical en español debe usarse «acusativo».
**Reason:** Es el término alemán; en una tabla gramatical en español debe usarse «acusativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 848 (ES Kurss Lessons)

**Finding:** 848
**Audit ID:** ES-KURSS-LESSONS-LV2-0642
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Los sustantivos masculinos y neutros en dativo singular pueden llevar la terminación -e. Hoy en día, este final suele descartarse.
**PROPOSED_ES:** Los sustantivos masculinos y neutros en dativo singular pueden llevar la terminación -e. Hoy en día, esta terminación suele omitirse.
**Severity:** LOW
**Category:** ES_NATURALNESS
**Problem:** «Este final» resulta poco natural y menos preciso en este contexto; «esta terminación» y «omitirse» son formulaciones más idiomáticas para describir una terminación gramatical.
**Reason:** «Este final» resulta poco natural y menos preciso en este contexto; «esta terminación» y «omitirse» son formulaciones más idiomáticas para describir una terminación gramatical.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 849 (ES Kurss Lessons)

**Finding:** 849
**Audit ID:** ES-KURSS-LESSONS-LV2-0644
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** Bez artikula
**PROPOSED_ES:** Sin artículo
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El encabezado contiene texto en lituano en lugar de español. Además, el término español correcto es «artículo».
**Reason:** El encabezado contiene texto en lituano en lugar de español. Además, el término español correcto es «artículo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 850 (ES Kurss Lessons)

**Finding:** 850
**Audit ID:** ES-KURSS-LESSONS-LV2-0646
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[0].lv`
**Field type:** `translateCard`
**DE (read-only):** Wen ruft der Vater?
**CURRENT_ES:** ¿Cómo se llama el padre?
**PROPOSED_ES:** ¿A quién llama el padre?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La traducción actual pregunta por el nombre del padre, pero la frase alemana pregunta a quién llama el padre.
**Reason:** La traducción actual pregunta por el nombre del padre, pero la frase alemana pregunta a quién llama el padre.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
