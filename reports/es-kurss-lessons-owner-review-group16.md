# ES–DE Kurss Lessons — OWNER VIEW (group 16: findings 751–800)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 751 (ES Kurss Lessons)

**Finding:** 751
**Audit ID:** ES-KURSS-LESSONS-LV2-0516
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[11].lv`
**Field type:** `translateCard`
**DE (read-only):** Die Hand hat fünf Finger.
**CURRENT_ES:** Plaukstai ir pieci pirksti.
**PROPOSED_ES:** La mano tiene cinco dedos.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto visible está en letón, no en español.
**Reason:** El texto visible está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 752 (ES Kurss Lessons)

**Finding:** 752
**Audit ID:** ES-KURSS-LESSONS-LV2-0517
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[14].lv`
**Field type:** `translateCard`
**DE (read-only):** Was hat der Finger?
**CURRENT_ES:** ¿Kas ir pirkstam?
**PROPOSED_ES:** ¿Qué le pasa al dedo?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español.
**Reason:** El texto está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 753 (ES Kurss Lessons)

**Finding:** 753
**Audit ID:** ES-KURSS-LESSONS-LV2-0518
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[15].lv`
**Field type:** `translateCard`
**DE (read-only):** Der Finger hat einen Nagel.
**CURRENT_ES:** Pirkstam ir regaña.
**PROPOSED_ES:** El dedo tiene una uña.
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** Contiene texto letón («Pirkstam ir») y «regaña» no corresponde al significado del ejemplo alemán.
**Reason:** Contiene texto letón («Pirkstam ir») y «regaña» no corresponde al significado del ejemplo alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 754 (ES Kurss Lessons)

**Finding:** 754
**Audit ID:** ES-KURSS-LESSONS-LV2-0519
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[16].lv`
**Field type:** `translateCard`
**DE (read-only):** Was tust du?
**CURRENT_ES:** ¿Ko tu dari?
**PROPOSED_ES:** ¿Qué haces?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español.
**Reason:** El texto está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 755 (ES Kurss Lessons)

**Finding:** 755
**Audit ID:** ES-KURSS-LESSONS-LV2-0520
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[17].lv`
**Field type:** `translateCard`
**DE (read-only):** Ich beschneide und reinige die Nägel.
**CURRENT_ES:** Me corto y limpio las uñas.
**PROPOSED_ES:** Me corto las uñas y las limpio.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Me corto» sin objeto significa que me corto a mí mismo; además, falta especificar que se cortan las uñas.
**Reason:** «Me corto» sin objeto significa que me corto a mí mismo; además, falta especificar que se cortan las uñas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 756 (ES Kurss Lessons)

**Finding:** 756
**Audit ID:** ES-KURSS-LESSONS-LV2-0521
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[18].lv`
**Field type:** `translateCard`
**DE (read-only):** Was tut Paul?
**CURRENT_ES:** Ko Paul dara?
**PROPOSED_ES:** ¿Qué hace Paul?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La pregunta está en letón, no en español.
**Reason:** La pregunta está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 757 (ES Kurss Lessons)

**Finding:** 757
**Audit ID:** ES-KURSS-LESSONS-LV2-0522
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv`
**Field type:** `translateCard`
**DE (read-only):** Sie strecken beide Arme aus.
**CURRENT_ES:** Extienden ambas manos.
**PROPOSED_ES:** Extienden ambos brazos.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El ejemplo alemán se refiere a los brazos, no a las manos.
**Reason:** El ejemplo alemán se refiere a los brazos, no a las manos.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 758 (ES Kurss Lessons)

**Finding:** 758
**Audit ID:** ES-KURSS-LESSONS-LV2-0523
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[23].lv`
**Field type:** `translateCard`
**DE (read-only):** Sie senken beide Arme.
**CURRENT_ES:** Dejan caer ambas manos.
**PROPOSED_ES:** Bajan ambos brazos.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El ejemplo alemán se refiere a bajar los brazos; «dejar caer las manos» cambia el significado.
**Reason:** El ejemplo alemán se refiere a bajar los brazos; «dejar caer las manos» cambia el significado.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 759 (ES Kurss Lessons)

**Finding:** 759
**Audit ID:** ES-KURSS-LESSONS-LV2-0524
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[29].lv`
**Field type:** `translateCard`
**DE (read-only):** Robert, turne!
**CURRENT_ES:** Roberto, vingro!
**PROPOSED_ES:** ¡Roberto, haz gimnasia!
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «vingro» es letón y no debe aparecer en el texto español.
**Reason:** «vingro» es letón y no debe aparecer en el texto español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 760 (ES Kurss Lessons)

**Finding:** 760
**Audit ID:** ES-KURSS-LESSONS-LV2-0525
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[31].lv`
**Field type:** `translateCard`
**DE (read-only):** Fräulein Müller, turnen Sie!
**CURRENT_ES:** ¡Müller jaunkundze, vingrojiet!
**PROPOSED_ES:** ¡Señorita Müller, haga gimnasia!
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** La frase está en letón, salvo el apellido, y no está traducida al español.
**Reason:** La frase está en letón, salvo el apellido, y no está traducida al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 761 (ES Kurss Lessons)

**Finding:** 761
**Audit ID:** ES-KURSS-LESSONS-LV2-0526
**Lesson:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[32].lv`
**Field type:** `translateCard`
**DE (read-only):** Machen Sie zwei Schritte, und dann bleiben Sie stehen!
**CURRENT_ES:** ¡Da dos pasos y luego quédate de pie!
**PROPOSED_ES:** ¡Dé dos pasos y luego quédese de pie!
**Severity:** MEDIUM
**Category:** ES_GRAMMAR
**Problem:** El ejemplo usa tratamiento formal («Sie»), pero el español mezcla el imperativo de tú con el contexto formal.
**Reason:** El ejemplo usa tratamiento formal («Sie»), pero el español mezcla el imperativo de tú con el contexto formal.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 762 (ES Kurss Lessons)

**Finding:** 762
**Audit ID:** ES-KURSS-LESSONS-LV2-0527
**Lesson:** `lesson13`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Escribe la forma correcta y ponla en plural!
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Poner la conjugación» y «hazlo» resultan poco naturales y vagos en una instrucción de ejercicio.
**Reason:** «Poner la conjugación» y «hazlo» resultan poco naturales y vagos en una instrucción de ejercicio.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 763 (ES Kurss Lessons)

**Finding:** 763
**Audit ID:** ES-KURSS-LESSONS-LV2-0529
**Lesson:** `lesson14`
**Path:** `kurss.lessonItems.14.menuDesc (lesson header subtitle / menu)`
**Field type:** `uiMenuDesc`
**DE (read-only):** —
**CURRENT_ES:** Verbos müssen, wollen, mögen y modales.
**PROPOSED_ES:** Verbos modales müssen, wollen y mögen.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** La formulación actual es redundante y poco natural: presenta los verbos como «modales» y vuelve a añadir «modales» al final.
**Reason:** La formulación actual es redundante y poco natural: presenta los verbos como «modales» y vuelve a añadir «modales» al final.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 764 (ES Kurss Lessons)

**Finding:** 764
**Audit ID:** ES-KURSS-LESSONS-LV2-0530
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** Er muss lernen, denn er will vorwärts kommen.
**CURRENT_ES:** Er muss lernen, denn er will vorwärts kommen.
**PROPOSED_ES:** Él tiene que estudiar porque quiere salir adelante.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 765 (ES Kurss Lessons)

**Finding:** 765
**Audit ID:** ES-KURSS-LESSONS-LV2-0531
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** Sie muss lernen, denn sie will vorwärts kommen.
**CURRENT_ES:** Sie muss lernen, denn sie will vorwärts kommen.
**PROPOSED_ES:** Ella tiene que estudiar porque quiere salir adelante.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 766 (ES Kurss Lessons)

**Finding:** 766
**Audit ID:** ES-KURSS-LESSONS-LV2-0532
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** Es muss lernen, denn es will vorwärts kommen.
**CURRENT_ES:** Es muss lernen, denn es will vorwärts kommen.
**PROPOSED_ES:** Tiene que estudiar porque quiere salir adelante.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 767 (ES Kurss Lessons)

**Finding:** 767
**Audit ID:** ES-KURSS-LESSONS-LV2-0533
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** Wir müssen lernen, denn wir wollen vorwärts kommen.
**CURRENT_ES:** Wir müssen lernen, denn wir wollen vorwärts kommen.
**PROPOSED_ES:** Tenemos que estudiar porque queremos salir adelante.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 768 (ES Kurss Lessons)

**Finding:** 768
**Audit ID:** ES-KURSS-LESSONS-LV2-0534
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** Ihr müsst lernen, denn ihr wollt vorwärts kommen.
**CURRENT_ES:** Ihr müsst lernen, denn ihr wollt vorwärts kommen.
**PROPOSED_ES:** Tenéis que estudiar porque queréis salir adelante.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 769 (ES Kurss Lessons)

**Finding:** 769
**Audit ID:** ES-KURSS-LESSONS-LV2-0535
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** Sie müssen lernen, denn sie wollen vorwärts kommen.
**CURRENT_ES:** Sie müssen lernen, denn sie wollen vorwärts kommen.
**PROPOSED_ES:** Tienen que estudiar porque quieren salir adelante.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 770 (ES Kurss Lessons)

**Finding:** 770
**Audit ID:** ES-KURSS-LESSONS-LV2-0536
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** Ich mag die Suppe nicht essen, denn sie mundet mir nicht.
**CURRENT_ES:** Ich mag die Suppe nicht essen, denn sie mundet mir nicht.
**PROPOSED_ES:** No me gusta comer la sopa porque no me sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 771 (ES Kurss Lessons)

**Finding:** 771
**Audit ID:** ES-KURSS-LESSONS-LV2-0537
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** Du magst die Suppe nicht essen, denn sie mundet dir nicht.
**CURRENT_ES:** Du magst die Suppe nicht essen, denn sie mundet dir nicht.
**PROPOSED_ES:** No te gusta comer la sopa porque no te sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 772 (ES Kurss Lessons)

**Finding:** 772
**Audit ID:** ES-KURSS-LESSONS-LV2-0538
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** Er mag die Suppe nicht essen, denn sie mundet ihm nicht.
**CURRENT_ES:** Er mag die Suppe nicht essen, denn sie mundet ihm nicht.
**PROPOSED_ES:** No le gusta comer la sopa porque no le sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 773 (ES Kurss Lessons)

**Finding:** 773
**Audit ID:** ES-KURSS-LESSONS-LV2-0539
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** Sie mag die Suppe nicht essen, denn sie mundet ihr nicht.
**CURRENT_ES:** Sie mag die Suppe nicht essen, denn sie mundet ihr nicht.
**PROPOSED_ES:** No le gusta comer la sopa porque no le sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 774 (ES Kurss Lessons)

**Finding:** 774
**Audit ID:** ES-KURSS-LESSONS-LV2-0540
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** Es mag die Suppe nicht essen, denn sie mundet ihm nicht.
**CURRENT_ES:** Es mag die Suppe nicht essen, denn sie mundet ihm nicht.
**PROPOSED_ES:** No le gusta comer la sopa porque no le sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español. Además, el referente de ihm en el ejemplo alemán no concuerda claramente con es; se conserva una traducción neutral sin proponer cambios al alemán.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español. Además, el referente de ihm en el ejemplo alemán no concuerda claramente con es; se conserva una traducción neutral sin proponer cambios al alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 775 (ES Kurss Lessons)

**Finding:** 775
**Audit ID:** ES-KURSS-LESSONS-LV2-0541
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** Wir mögen die Suppe nicht essen, denn sie mundet uns nicht.
**CURRENT_ES:** Wir mögen die Suppe nicht essen, denn sie mundet uns nicht.
**PROPOSED_ES:** No nos gusta comer la sopa porque no nos sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 776 (ES Kurss Lessons)

**Finding:** 776
**Audit ID:** ES-KURSS-LESSONS-LV2-0542
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** Ihr mögt die Suppe nicht essen, denn sie mundet euch nicht.
**CURRENT_ES:** Ihr mögt die Suppe nicht essen, denn sie mundet euch nicht.
**PROPOSED_ES:** No os gusta comer la sopa porque no os sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 777 (ES Kurss Lessons)

**Finding:** 777
**Audit ID:** ES-KURSS-LESSONS-LV2-0543
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[0].items[15]`
**Field type:** `sectionItem`
**DE (read-only):** Sie mögen die Suppe nicht essen, denn sie mundet ihnen nicht.
**CURRENT_ES:** Sie mögen die Suppe nicht essen, denn sie mundet ihnen nicht.
**PROPOSED_ES:** No les gusta comer la sopa porque no les sabe bien.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Reason:** El campo contiene íntegramente el texto alemán en lugar de una traducción al español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 778 (ES Kurss Lessons)

**Finding:** 778
**Audit ID:** ES-KURSS-LESSONS-LV2-0552
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[17]`
**Field type:** `sectionItem`
**DE (read-only):** es will
**CURRENT_ES:** es will — ello quiere
**PROPOSED_ES:** es will — quiere
**Severity:** LOW
**Category:** ES_NATURALNESS
**Problem:** Ello resulta poco natural e innecesario como sujeto en español en esta entrada verbal.
**Reason:** Ello resulta poco natural e innecesario como sujeto en español en esta entrada verbal.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 779 (ES Kurss Lessons)

**Finding:** 779
**Audit ID:** ES-KURSS-LESSONS-LV2-0559
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[27]`
**Field type:** `sectionItem`
**DE (read-only):** wir mögen
**CURRENT_ES:** wir mögen — queremos
**PROPOSED_ES:** wir mögen — nos gusta
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Wir mögen» significa «nos gusta» o «nos gustan», no «queremos».
**Reason:** «Wir mögen» significa «nos gusta» o «nos gustan», no «queremos».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 780 (ES Kurss Lessons)

**Finding:** 780
**Audit ID:** ES-KURSS-LESSONS-LV2-0560
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[28]`
**Field type:** `sectionItem`
**DE (read-only):** ihr mögt
**CURRENT_ES:** ihr mögt — quieres
**PROPOSED_ES:** ihr mögt — os gusta
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Ihr mögt» corresponde a la segunda persona plural y significa «os gusta» o «os gustan», no «quieres».
**Reason:** «Ihr mögt» corresponde a la segunda persona plural y significa «os gusta» o «os gustan», no «quieres».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 781 (ES Kurss Lessons)

**Finding:** 781
**Audit ID:** ES-KURSS-LESSONS-LV2-0562
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[31]`
**Field type:** `sectionItem`
**DE (read-only):** munden
**CURRENT_ES:** munden — para saber bien
**PROPOSED_ES:** munden — saber bien
**Severity:** HIGH
**Category:** TRANSLATION
**Problem:** «Para saber bien» expresa finalidad («in order to taste good»), no el significado léxico de «munden», que es «saber bien».
**Reason:** «Para saber bien» expresa finalidad («in order to taste good»), no el significado léxico de «munden», que es «saber bien».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 782 (ES Kurss Lessons)

**Finding:** 782
**Audit ID:** ES-KURSS-LESSONS-LV2-0563
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[32]`
**Field type:** `sectionItem`
**DE (read-only):** mir
**CURRENT_ES:** mir — hombre
**PROPOSED_ES:** mir — a mí
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El pronombre dativo alemán «mir» significa «a mí», no «hombre».
**Reason:** El pronombre dativo alemán «mir» significa «a mí», no «hombre».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 783 (ES Kurss Lessons)

**Finding:** 783
**Audit ID:** ES-KURSS-LESSONS-LV2-0564
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[33]`
**Field type:** `sectionItem`
**DE (read-only):** dir
**CURRENT_ES:** dir — tev
**PROPOSED_ES:** dir — a ti
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «tev» es un fragmento extranjero que no pertenece al español; «dir» significa «a ti».
**Reason:** «tev» es un fragmento extranjero que no pertenece al español; «dir» significa «a ti».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 784 (ES Kurss Lessons)

**Finding:** 784
**Audit ID:** ES-KURSS-LESSONS-LV2-0565
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[35]`
**Field type:** `sectionItem`
**DE (read-only):** ihr
**CURRENT_ES:** ihr — ustedes
**PROPOSED_ES:** ihr — a ella
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** En esta serie de pronombres dativos, «ihr» significa «a ella», no «ustedes».
**Reason:** En esta serie de pronombres dativos, «ihr» significa «a ella», no «ustedes».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 785 (ES Kurss Lessons)

**Finding:** 785
**Audit ID:** ES-KURSS-LESSONS-LV2-0566
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[36]`
**Field type:** `sectionItem`
**DE (read-only):** uns
**CURRENT_ES:** uns — mamás
**PROPOSED_ES:** uns — a nosotros
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El pronombre dativo «uns» significa «a nosotros», no «mamás».
**Reason:** El pronombre dativo «uns» significa «a nosotros», no «mamás».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 786 (ES Kurss Lessons)

**Finding:** 786
**Audit ID:** ES-KURSS-LESSONS-LV2-0568
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** En presente singular, la 1ª y 3ª personas son iguales.
**PROPOSED_ES:** En presente, las formas de la 1.ª y 3.ª persona del singular son iguales.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «En presente singular» resulta poco natural y la frase debe especificar que se trata de las formas del singular. También se recomienda la abreviatura normativa «1.ª» y «3.ª».
**Reason:** «En presente singular» resulta poco natural y la frase debe especificar que se trata de las formas del singular. También se recomienda la abreviatura normativa «1.ª» y «3.ª».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 787 (ES Kurss Lessons)

**Finding:** 787
**Audit ID:** ES-KURSS-LESSONS-LV2-0570
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[7].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Wollen significa querer hacer algo deliberadamente.
**PROPOSED_ES:** Wollen expresa la voluntad o la intención de hacer algo.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Hacer algo deliberadamente» introduce un matiz de acción intencionada que no corresponde necesariamente a wollen y hace que la explicación suene poco natural.
**Reason:** «Hacer algo deliberadamente» introduce un matiz de acción intencionada que no corresponde necesariamente a wollen y hace que la explicación suene poco natural.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 788 (ES Kurss Lessons)

**Finding:** 788
**Audit ID:** ES-KURSS-LESSONS-LV2-0571
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[8].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Mögen expresa un deseo o agrado.
**PROPOSED_ES:** Mögen expresa agrado o preferencia.
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Problem:** Mögen se usa principalmente para expresar que algo gusta o resulta agradable. Presentarlo como expresión de «deseo» puede confundirlo con wollen o con möchte.
**Reason:** Mögen se usa principalmente para expresar que algo gusta o resulta agradable. Presentarlo como expresión de «deseo» puede confundirlo con wollen o con möchte.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 789 (ES Kurss Lessons)

**Finding:** 789
**Audit ID:** ES-KURSS-LESSONS-LV2-0572
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[8].examples[0]`
**Field type:** `grammarExample`
**DE (read-only):** Ich mag die Suppe nicht essen.
**CURRENT_ES:** Ich mag die Suppe nicht essen. — No quiero comer la sopa.
**PROPOSED_ES:** Ich mag die Suppe nicht essen. — No me gusta comer la sopa.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La traducción «no quiero» presenta mögen como equivalente directo de wollen. En este ejemplo, mögen expresa que no gusta comer la sopa, aunque la frase alemana puede implicar reticencia.
**Reason:** La traducción «no quiero» presenta mögen como equivalente directo de wollen. En este ejemplo, mögen expresa que no gusta comer la sopa, aunque la frase alemana puede implicar reticencia.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 790 (ES Kurss Lessons)

**Finding:** 790
**Audit ID:** ES-KURSS-LESSONS-LV2-0573
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.
**CURRENT_ES:** Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.
**PROPOSED_ES:** Del mismo modo, en español, la g de «signos» puede sonar más cercana a una k.
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Problem:** En «signos», la g no está ante s, sino ante n. La formulación actual describe incorrectamente la posición de la letra y puede inducir a una regla fonética equivocada.
**Reason:** En «signos», la g no está ante s, sino ante n. La formulación actual describe incorrectamente la posición de la letra y puede inducir a una regla fonética equivocada.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 791 (ES Kurss Lessons)

**Finding:** 791
**Audit ID:** ES-KURSS-LESSONS-LV2-0574
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[0].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer will fleißig lernen?
**CURRENT_ES:** ¿Quién quiere estudiar mucho?
**PROPOSED_ES:** ¿Quién quiere estudiar con mucho empeño?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** Fleißig significa «con diligencia», «con empeño» o «aplicadamente», no simplemente «mucho», que expresa cantidad.
**Reason:** Fleißig significa «con diligencia», «con empeño» o «aplicadamente», no simplemente «mucho», que expresa cantidad.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 792 (ES Kurss Lessons)

**Finding:** 792
**Audit ID:** ES-KURSS-LESSONS-LV2-0575
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[1].lv`
**Field type:** `translateCard`
**DE (read-only):** Alle Schüler wollen fleißig lernen.
**CURRENT_ES:** Todos los estudiantes quieren estudiar mucho.
**PROPOSED_ES:** Todos los estudiantes quieren estudiar con mucho empeño.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La traducción de fleißig como «mucho» pierde el sentido de estudiar diligentemente o con empeño.
**Reason:** La traducción de fleißig como «mucho» pierde el sentido de estudiar diligentemente o con empeño.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 793 (ES Kurss Lessons)

**Finding:** 793
**Audit ID:** ES-KURSS-LESSONS-LV2-0576
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[2].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer muss heute kommen?
**CURRENT_ES:** ¿Quién debería venir hoy?
**PROPOSED_ES:** ¿Quién tiene que venir hoy?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** Muss expresa obligación («tener que»), mientras que «debería» suele expresar recomendación, posibilidad o una obligación atenuada.
**Reason:** Muss expresa obligación («tener que»), mientras que «debería» suele expresar recomendación, posibilidad o una obligación atenuada.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 794 (ES Kurss Lessons)

**Finding:** 794
**Audit ID:** ES-KURSS-LESSONS-LV2-0577
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[4].lv`
**Field type:** `translateCard`
**DE (read-only):** Du musst den Brief schreiben.
**CURRENT_ES:** Tienes que escribir una carta.
**PROPOSED_ES:** Tienes que escribir la carta.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán usa el artículo definido den. «Una carta» cambia la referencia de una carta concreta a cualquier carta.
**Reason:** El alemán usa el artículo definido den. «Una carta» cambia la referencia de una carta concreta a cualquier carta.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 795 (ES Kurss Lessons)

**Finding:** 795
**Audit ID:** ES-KURSS-LESSONS-LV2-0578
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[5].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer muss fleißig lernen?
**CURRENT_ES:** ¿Quién necesita estudiar mucho?
**PROPOSED_ES:** ¿Quién tiene que estudiar con mucho empeño?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** Muss expresa obligación («tener que»), no únicamente necesidad. Además, fleißig indica diligencia o empeño, no cantidad de estudio.
**Reason:** Muss expresa obligación («tener que»), no únicamente necesidad. Además, fleißig indica diligencia o empeño, no cantidad de estudio.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 796 (ES Kurss Lessons)

**Finding:** 796
**Audit ID:** ES-KURSS-LESSONS-LV2-0579
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[6].lv`
**Field type:** `translateCard`
**DE (read-only):** Die Schüler müssen fleißig lernen.
**CURRENT_ES:** Los estudiantes deben estudiar mucho.
**PROPOSED_ES:** Los estudiantes tienen que estudiar con mucho empeño.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Deben» puede ser una traducción válida de müssen, pero «mucho» no reproduce fleißig, que significa «con diligencia» o «con empeño».
**Reason:** «Deben» puede ser una traducción válida de müssen, pero «mucho» no reproduce fleißig, que significa «con diligencia» o «con empeño».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 797 (ES Kurss Lessons)

**Finding:** 797
**Audit ID:** ES-KURSS-LESSONS-LV2-0580
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[10].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer muss das Buch lesen?
**CURRENT_ES:** ¿Quién debería leer el libro?
**PROPOSED_ES:** ¿Quién tiene que leer el libro?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «muss» expresa obligación («tener que»), no una obligación hipotética o recomendación («debería»).
**Reason:** El alemán «muss» expresa obligación («tener que»), no una obligación hipotética o recomendación («debería»).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 798 (ES Kurss Lessons)

**Finding:** 798
**Audit ID:** ES-KURSS-LESSONS-LV2-0581
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[11].lv`
**Field type:** `translateCard`
**DE (read-only):** Der Bruder muss das Buch lesen.
**CURRENT_ES:** El hermano debe leer un libro.
**PROPOSED_ES:** El hermano tiene que leer el libro.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán usa «das Buch» («el libro»), mientras que «un libro» cambia el sentido; además, «muss» se traduce más precisamente como «tiene que» en este contexto.
**Reason:** El alemán usa «das Buch» («el libro»), mientras que «un libro» cambia el sentido; además, «muss» se traduce más precisamente como «tiene que» en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 799 (ES Kurss Lessons)

**Finding:** 799
**Audit ID:** ES-KURSS-LESSONS-LV2-0582
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[12].lv`
**Field type:** `translateCard`
**DE (read-only):** Ich mag nicht singen.
**CURRENT_ES:** No quiero cantar.
**PROPOSED_ES:** No me gusta cantar.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Ich mag nicht singen» significa que no gusta cantar, no que no se quiera cantar.
**Reason:** «Ich mag nicht singen» significa que no gusta cantar, no que no se quiera cantar.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 800 (ES Kurss Lessons)

**Finding:** 800
**Audit ID:** ES-KURSS-LESSONS-LV2-0583
**Lesson:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[13].lv`
**Field type:** `translateCard`
**DE (read-only):** Der Vater muss einen Tisch kaufen.
**CURRENT_ES:** Papá tiene que comprar una mesa.
**PROPOSED_ES:** El padre tiene que comprar una mesa.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «Der Vater» corresponde a «el padre»; «papá» añade un registro familiar que no está expresado en el original.
**Reason:** El alemán «Der Vater» corresponde a «el padre»; «papá» añade un registro familiar que no está expresado en el original.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
