# ES–DE Kurss Lessons — OWNER VIEW (group 18: findings 851–900)

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/es-kurss-lessons-full-audit-v2.md` / `reports/temp/es-kurss-lessons-full-audit-v2.json`
Findings: **50** ieraksti

> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.

## Finding 851 (ES Kurss Lessons)

**Finding:** 851
**Audit ID:** ES-KURSS-LESSONS-LV2-0647
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[4].lv`
**Field type:** `translateCard`
**DE (read-only):** Wem gehorcht der Hund?
**CURRENT_ES:** Kam paklausa soles?
**PROPOSED_ES:** ¿A quién obedece el perro?
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en lituano y no corresponde al español solicitado. La propuesta traduce el significado de la frase alemana.
**Reason:** El texto está en lituano y no corresponde al español solicitado. La propuesta traduce el significado de la frase alemana.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 852 (ES Kurss Lessons)

**Finding:** 852
**Audit ID:** ES-KURSS-LESSONS-LV2-0648
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[6].lv`
**Field type:** `translateCard`
**DE (read-only):** Wieviel Hunde hat der Jäger?
**CURRENT_ES:** ¿Cuantos perros tiene el cazador?
**PROPOSED_ES:** ¿Cuántos perros tiene el cazador?
**Severity:** MEDIUM
**Category:** ES_ORTHOGRAPHY
**Problem:** Falta la tilde en el interrogativo «cuántos».
**Reason:** Falta la tilde en el interrogativo «cuántos».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 853 (ES Kurss Lessons)

**Finding:** 853
**Audit ID:** ES-KURSS-LESSONS-LV2-0649
**Lesson:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[12].lv`
**Field type:** `translateCard`
**DE (read-only):** Wer nähert sich den Schülern und Schülerinnen?
**CURRENT_ES:** ¿Qué se acerca a los escolares y las niñas?
**PROPOSED_ES:** ¿Quién se acerca a los alumnos y las alumnas?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán usa «Wer» («quién»), no «qué», porque pregunta por personas. «Escolares» también resulta menos preciso aquí que «alumnos y alumnas».
**Reason:** El alemán usa «Wer» («quién»), no «qué», porque pregunta por personas. «Escolares» también resulta menos preciso aquí que «alumnos y alumnas».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 854 (ES Kurss Lessons)

**Finding:** 854
**Audit ID:** ES-KURSS-LESSONS-LV2-0650
**Lesson:** `lesson16`
**Path:** `kurss.hints.tapToRevealGerman`
**Field type:** `uiHint`
**DE (read-only):** —
**CURRENT_ES:** Toque la tarjeta para ver la traducción al alemán.
**PROPOSED_ES:** Toca la tarjeta para ver la traducción al alemán.
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** El tratamiento formal «Toque» es inconsistente con el tono informal de la indicación relacionada «Toca la tarjeta».
**Reason:** El tratamiento formal «Toque» es inconsistente con el tono informal de la indicación relacionada «Toca la tarjeta».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 855 (ES Kurss Lessons)

**Finding:** 855
**Audit ID:** ES-KURSS-LESSONS-LV2-0651
**Lesson:** `lesson16`
**Path:** `kurss.exerciseMeta.fillCase`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** Ejercicio I — Usa la conjugación correcta
**PROPOSED_ES:** Ejercicio I — Usa el caso correcto
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** «Conjugación» se refiere a formas verbales; el contexto de la lección trata de casos gramaticales.
**Reason:** «Conjugación» se refiere a formas verbales; el contexto de la lección trata de casos gramaticales.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 856 (ES Kurss Lessons)

**Finding:** 856
**Audit ID:** ES-KURSS-LESSONS-LV2-0652
**Lesson:** `lesson16`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Usa el caso correcto y ponlo en plural!
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** «Conjugación» es un término incorrecto para el caso gramatical y «hazlo» resulta impreciso en esta instrucción.
**Reason:** «Conjugación» es un término incorrecto para el caso gramatical y «hazlo» resulta impreciso en esta instrucción.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 857 (ES Kurss Lessons)

**Finding:** 857
**Audit ID:** ES-KURSS-LESSONS-LV2-0656
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** womit
**CURRENT_ES:** womit — ar ko?
**PROPOSED_ES:** womit — ¿con qué?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La traducción contiene texto letón («ar ko?») en lugar de español.
**Reason:** La traducción contiene texto letón («ar ko?») en lugar de español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 858 (ES Kurss Lessons)

**Finding:** 858
**Audit ID:** ES-KURSS-LESSONS-LV2-0658
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** der Schuldiener
**CURRENT_ES:** der Schuldiener — asistente de escuela
**PROPOSED_ES:** der Schuldiener — conserje de la escuela
**Severity:** MEDIUM
**Category:** ES_NATURALNESS
**Problem:** «Asistente de escuela» resulta poco natural y no refleja bien el sentido habitual de Schuldiener en este contexto.
**Reason:** «Asistente de escuela» resulta poco natural y no refleja bien el sentido habitual de Schuldiener en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 859 (ES Kurss Lessons)

**Finding:** 859
**Audit ID:** ES-KURSS-LESSONS-LV2-0659
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** die Diele
**CURRENT_ES:** die Diele — piso
**PROPOSED_ES:** die Diele — vestíbulo
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Die Diele se refiere normalmente a un vestíbulo, recibidor o pasillo de entrada; «piso» no corresponde a ese significado en este contexto.
**Reason:** Die Diele se refiere normalmente a un vestíbulo, recibidor o pasillo de entrada; «piso» no corresponde a ese significado en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 860 (ES Kurss Lessons)

**Finding:** 860
**Audit ID:** ES-KURSS-LESSONS-LV2-0662
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Los verbos graben, fangen, auffangen tienen diéresis en la 2ª y 3ª persona del singular.
**PROPOSED_ES:** En graben, fangen y auffangen, la vocal de la raíz cambia a ä en la 2.ª y 3.ª persona del singular.
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** «Diéresis» no describe correctamente el cambio vocálico alemán en ä; además, no son los verbos en sí los que llevan el cambio, sino determinadas formas conjugadas.
**Reason:** «Diéresis» no describe correctamente el cambio vocálico alemán en ä; además, no son los verbos en sí los que llevan el cambio, sino determinadas formas conjugadas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 861 (ES Kurss Lessons)

**Finding:** 861
**Audit ID:** ES-KURSS-LESSONS-LV2-0663
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Los verbos compuestos auffangen y abwischen llevan tilde en el prefijo. Por tanto, el prefijo presente se separa y se coloca al final de la frase.
**PROPOSED_ES:** Los verbos compuestos auffangen y abwischen tienen un prefijo separable. Por tanto, el prefijo verbal se separa y se coloca al final de la oración.
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** Los prefijos auf y ab no llevan tilde; «tilde» es un término ortográfico español y describe incorrectamente el fenómeno alemán. «Prefijo presente» tampoco es una formulación adecuada en este contexto.
**Reason:** Los prefijos auf y ab no llevan tilde; «tilde» es un término ortográfico español y describe incorrectamente el fenómeno alemán. «Prefijo presente» tampoco es una formulación adecuada en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 862 (ES Kurss Lessons)

**Finding:** 862
**Audit ID:** ES-KURSS-LESSONS-LV2-0664
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Fegen y wischen significan barrer, pero el uso es diferente.
**PROPOSED_ES:** Fegen significa «barrer», mientras que wischen significa «limpiar o pasar un paño»; su uso es diferente.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** wischen no significa «barrer»; se refiere a limpiar pasando un paño, una mopa u otra superficie de limpieza.
**Reason:** wischen no significa «barrer»; se refiere a limpiar pasando un paño, una mopa u otra superficie de limpieza.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 863 (ES Kurss Lessons)

**Finding:** 863
**Audit ID:** ES-KURSS-LESSONS-LV2-0666
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** En wieder, la e final es abierta.
**CURRENT_ES:** En wieder, la e final es abierta.
**PROPOSED_ES:** En wieder, la e final se pronuncia como una vocal neutra o reducida [ə].
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** La e final de wieder no es una e abierta [ɛ], sino una vocal átona reducida, normalmente transcrita [ə].
**Reason:** La e final de wieder no es una e abierta [ɛ], sino una vocal átona reducida, normalmente transcrita [ə].
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 864 (ES Kurss Lessons)

**Finding:** 864
**Audit ID:** ES-KURSS-LESSONS-LV2-0667
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[4].prompt`
**Field type:** `exerciseFillPrompt`
**DE (read-only):** Der Knecht hilft diesem Tischler, jener Frau, dem Fräulein.
**CURRENT_ES:** Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein)
**PROPOSED_ES:** ¿A quién ayuda el criado? (este carpintero, esa mujer, la señorita)
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El campo visible contiene alemán en lugar de español.
**Reason:** El campo visible contiene alemán en lugar de español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 865 (ES Kurss Lessons)

**Finding:** 865
**Audit ID:** ES-KURSS-LESSONS-LV2-0668
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[2].lv`
**Field type:** `translateCard`
**DE (read-only):** Was wischt das Mädchen ab?
**CURRENT_ES:** ¿Ko meitene noslauka?
**PROPOSED_ES:** ¿Qué limpia la niña?
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** El texto está en letón, no en español.
**Reason:** El texto está en letón, no en español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 866 (ES Kurss Lessons)

**Finding:** 866
**Audit ID:** ES-KURSS-LESSONS-LV2-0669
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[7].lv`
**Field type:** `translateCard`
**DE (read-only):** Spricht sie mit dem Freunde?
**CURRENT_ES:** ¿Está hablando con una amiga?
**PROPOSED_ES:** ¿Está hablando con un amigo?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán usa «dem Freunde», que se refiere a un amigo masculino; el español actual indica una amiga. El ejemplo alemán se conserva tal como está para esta auditoría.
**Reason:** El alemán usa «dem Freunde», que se refiere a un amigo masculino; el español actual indica una amiga. El ejemplo alemán se conserva tal como está para esta auditoría.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 867 (ES Kurss Lessons)

**Finding:** 867
**Audit ID:** ES-KURSS-LESSONS-LV2-0670
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv`
**Field type:** `translateCard`
**DE (read-only):** Ich halte den Spaten mit der Hand.
**CURRENT_ES:** Estoy sosteniendo una pala con la mano.
**PROPOSED_ES:** Sostengo la pala con la mano.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán expresa una acción habitual o presente («Ich halte») y se refiere a la pala determinada («den Spaten»), mientras que el español usa una perífrasis progresiva y un artículo indefinido.
**Reason:** El alemán expresa una acción habitual o presente («Ich halte») y se refiere a la pala determinada («den Spaten»), mientras que el español usa una perífrasis progresiva y un artículo indefinido.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 868 (ES Kurss Lessons)

**Finding:** 868
**Audit ID:** ES-KURSS-LESSONS-LV2-0671
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv`
**Field type:** `translateCard`
**DE (read-only):** Womit arbeiten wir?
**CURRENT_ES:** ¿Con quién trabajamos?
**PROPOSED_ES:** ¿Con qué trabajamos?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Womit» significa «con qué», no «con quién».
**Reason:** «Womit» significa «con qué», no «con quién».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 869 (ES Kurss Lessons)

**Finding:** 869
**Audit ID:** ES-KURSS-LESSONS-LV2-0672
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv`
**Field type:** `translateCard`
**DE (read-only):** Mit wem geht der Bruder?
**CURRENT_ES:** ¿Con qué va el hermano?
**PROPOSED_ES:** ¿Con quién va el hermano?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** «Mit wem» significa «con quién», no «con qué».
**Reason:** «Mit wem» significa «con quién», no «con qué».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 870 (ES Kurss Lessons)

**Finding:** 870
**Audit ID:** ES-KURSS-LESSONS-LV2-0673
**Lesson:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv`
**Field type:** `translateCard`
**DE (read-only):** Der Bruder geht mit dem Vater, mit der Mutter, mit dem Lehrer, mit dem Onkel, mit der Tante, mit dem Vetter, mit der Base.
**CURRENT_ES:** Un hermano va con su padre, con su madre, con su maestra, con su tío, con su prima, con su prima.
**PROPOSED_ES:** El hermano va con su padre, con su madre, con su maestro, con su tío, con su primo y con su prima.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Hay varios desajustes: «Der Bruder» es «el hermano», «der Lehrer» es masculino («el maestro»), y «der Vetter» y «die Base» corresponden a «el primo» y «la prima». Además, la traducción repite «prima» y pierde la distinción del alemán.
**Reason:** Hay varios desajustes: «Der Bruder» es «el hermano», «der Lehrer» es masculino («el maestro»), y «der Vetter» y «die Base» corresponden a «el primo» y «la prima». Además, la traducción repite «prima» y pierde la distinción del alemán.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 871 (ES Kurss Lessons)

**Finding:** 871
**Audit ID:** ES-KURSS-LESSONS-LV2-0674
**Lesson:** `lesson17`
**Path:** `kurss.exerciseMeta.fillCase`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** Ejercicio I — Usa la conjugación correcta
**PROPOSED_ES:** Ejercicio I — Usa el caso correcto
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** «Conjugación» se refiere a verbos; el identificador del ejercicio indica que aquí se trabaja el caso gramatical.
**Reason:** «Conjugación» se refiere a verbos; el identificador del ejercicio indica que aquí se trabaja el caso gramatical.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 872 (ES Kurss Lessons)

**Finding:** 872
**Audit ID:** ES-KURSS-LESSONS-LV2-0675
**Lesson:** `lesson17`
**Path:** `kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** ¡Pon la conjugación correcta y hazlo en plural!
**PROPOSED_ES:** ¡Usa el caso correcto y ponlo en plural!
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** «Conjugación» es terminología incorrecta para un ejercicio de casos, y la redacción propuesta hace explícito el contenido gramatical.
**Reason:** «Conjugación» es terminología incorrecta para un ejercicio de casos, y la redacción propuesta hace explícito el contenido gramatical.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 873 (ES Kurss Lessons)

**Finding:** 873
**Audit ID:** ES-KURSS-LESSONS-LV2-0679
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** wohin
**CURRENT_ES:** wohin — kurp?
**PROPOSED_ES:** wohin — adónde
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «kurp» es un resto extranjero que no pertenece al español. La traducción española de «wohin» es «adónde».
**Reason:** «kurp» es un resto extranjero que no pertenece al español. La traducción española de «wohin» es «adónde».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 874 (ES Kurss Lessons)

**Finding:** 874
**Audit ID:** ES-KURSS-LESSONS-LV2-0680
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** wo
**CURRENT_ES:** wo — kur?
**PROPOSED_ES:** wo — dónde
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «kur» es un resto extranjero que no pertenece al español. La traducción española de «wo» es «dónde».
**Reason:** «kur» es un resto extranjero que no pertenece al español. La traducción española de «wo» es «dónde».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 875 (ES Kurss Lessons)

**Finding:** 875
**Audit ID:** ES-KURSS-LESSONS-LV2-0681
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** das Körbchen
**CURRENT_ES:** das Körbchen — una cesta
**PROPOSED_ES:** das Körbchen — cestita
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Körbchen» es un diminutivo; «una cesta» omite ese matiz y además introduce un artículo innecesario en una entrada de vocabulario.
**Reason:** «Körbchen» es un diminutivo; «una cesta» omite ese matiz y además introduce un artículo innecesario en una entrada de vocabulario.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 876 (ES Kurss Lessons)

**Finding:** 876
**Audit ID:** ES-KURSS-LESSONS-LV2-0683
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21]`
**Field type:** `sectionItem`
**DE (read-only):** die Diele
**CURRENT_ES:** die Diele — piso
**PROPOSED_ES:** die Diele — recibidor
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** Diele significa «recibidor» o «vestíbulo», no «piso» en este contexto.
**Reason:** Diele significa «recibidor» o «vestíbulo», no «piso» en este contexto.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 877 (ES Kurss Lessons)

**Finding:** 877
**Audit ID:** ES-KURSS-LESSONS-LV2-0684
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Las preposiciones an, in, auf pueden acompañar tanto a Akkusativ como a Dativo.
**PROPOSED_ES:** Las preposiciones an, in y auf pueden acompañar tanto al acusativo como al dativo.
**Severity:** MEDIUM
**Category:** ES_TERMINOLOGY
**Problem:** En el texto explicativo en español deben emplearse los nombres españoles de los casos: «acusativo» y «dativo».
**Reason:** En el texto explicativo en español deben emplearse los nombres españoles de los casos: «acusativo» y «dativo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 878 (ES Kurss Lessons)

**Finding:** 878
**Audit ID:** ES-KURSS-LESSONS-LV2-0685
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Si la acción indica un cambio de dirección o de lugar, se utiliza Akkusativ. Pregunta: ¿quién? - ¿dónde?
**PROPOSED_ES:** Si la acción indica un cambio de dirección o de lugar, se utiliza el acusativo. Pregunta: ¿adónde?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** ¿Quién? significa «who» y ¿dónde? significa «where»; la pregunta correspondiente a wohin? es «¿adónde?».
**Reason:** ¿Quién? significa «who» y ¿dónde? significa «where»; la pregunta correspondiente a wohin? es «¿adónde?».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 879 (ES Kurss Lessons)

**Finding:** 879
**Audit ID:** ES-KURSS-LESSONS-LV2-0686
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[0]`
**Field type:** `grammarExample`
**DE (read-only):** Ich gehe an den Tisch.
**CURRENT_ES:** Ich gehe an den Tisch. — Es eju pie galda.
**PROPOSED_ES:** Ich gehe an den Tisch. — Voy a la mesa.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La traducción después del guion está en letón, no en español. El ejemplo alemán debe conservarse tal como está.
**Reason:** La traducción después del guion está en letón, no en español. El ejemplo alemán debe conservarse tal como está.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 880 (ES Kurss Lessons)

**Finding:** 880
**Audit ID:** ES-KURSS-LESSONS-LV2-0687
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].examples[1]`
**Field type:** `grammarExample`
**DE (read-only):** Ich stelle den Korb auf die Bank.
**CURRENT_ES:** Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.
**PROPOSED_ES:** Ich stelle den Korb auf die Bank. — Coloco la cesta sobre el banco.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La traducción después del guion está en letón, no en español. El ejemplo alemán debe conservarse tal como está.
**Reason:** La traducción después del guion está en letón, no en español. El ejemplo alemán debe conservarse tal como está.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 881 (ES Kurss Lessons)

**Finding:** 881
**Audit ID:** ES-KURSS-LESSONS-LV2-0688
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Estos verbos suelen indicar dirección y por tanto responden a la pregunta ¿wohin?.
**PROPOSED_ES:** Estos verbos suelen indicar dirección y, por tanto, responden a la pregunta ¿wohin?
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas.
**Reason:** No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 882 (ES Kurss Lessons)

**Finding:** 882
**Audit ID:** ES-KURSS-LESSONS-LV2-0689
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[0]`
**Field type:** `grammarExample`
**DE (read-only):** gehen
**CURRENT_ES:** gehen — iet
**PROPOSED_ES:** gehen — ir
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** Iet es letón y constituye un resto de otra lengua en el campo español.
**Reason:** Iet es letón y constituye un resto de otra lengua en el campo español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 883 (ES Kurss Lessons)

**Finding:** 883
**Audit ID:** ES-KURSS-LESSONS-LV2-0690
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[2]`
**Field type:** `grammarExample`
**DE (read-only):** fahren
**CURRENT_ES:** fahren — braukt
**PROPOSED_ES:** fahren — desplazarse en vehículo
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** Braukt es letón y constituye un resto de otra lengua en el campo español.
**Reason:** Braukt es letón y constituye un resto de otra lengua en el campo español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 884 (ES Kurss Lessons)

**Finding:** 884
**Audit ID:** ES-KURSS-LESSONS-LV2-0691
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[3]`
**Field type:** `grammarExample`
**DE (read-only):** laufen
**CURRENT_ES:** laufen — skriet
**PROPOSED_ES:** laufen — correr
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** Skriet es letón y constituye un resto de otra lengua en el campo español.
**Reason:** Skriet es letón y constituye un resto de otra lengua en el campo español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 885 (ES Kurss Lessons)

**Finding:** 885
**Audit ID:** ES-KURSS-LESSONS-LV2-0692
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[4]`
**Field type:** `grammarExample`
**DE (read-only):** fliegen
**CURRENT_ES:** fliegen — lidot
**PROPOSED_ES:** fliegen — volar
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** Lidot es letón y constituye un resto de otra lengua en el campo español.
**Reason:** Lidot es letón y constituye un resto de otra lengua en el campo español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 886 (ES Kurss Lessons)

**Finding:** 886
**Audit ID:** ES-KURSS-LESSONS-LV2-0694
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Estos verbos suelen indicar ubicación o estado y por tanto responden a la pregunta ¿wo?.
**PROPOSED_ES:** Estos verbos suelen indicar ubicación o estado y, por tanto, responden a la pregunta ¿wo?
**Severity:** LOW
**Category:** ES_ORTHOGRAPHY
**Problem:** No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas.
**Reason:** No debe añadirse un punto después del signo de cierre de interrogación; también se recomienda delimitar «por tanto» con comas.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 887 (ES Kurss Lessons)

**Finding:** 887
**Audit ID:** ES-KURSS-LESSONS-LV2-0695
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[1]`
**Field type:** `grammarExample`
**DE (read-only):** sich befinden
**CURRENT_ES:** sich befinden — atrasties
**PROPOSED_ES:** sich befinden — encontrarse
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «atrasties» es letón, no español. La traducción española adecuada es «encontrarse» o «estar situado».
**Reason:** «atrasties» es letón, no español. La traducción española adecuada es «encontrarse» o «estar situado».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 888 (ES Kurss Lessons)

**Finding:** 888
**Audit ID:** ES-KURSS-LESSONS-LV2-0697
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[4]`
**Field type:** `grammarExample`
**DE (read-only):** sitzen
**CURRENT_ES:** sitzen — sentarse
**PROPOSED_ES:** sitzen — estar sentado
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Sitzen» describe estar sentado; «sentarse» expresa la acción de adoptar esa posición.
**Reason:** «Sitzen» describe estar sentado; «sentarse» expresa la acción de adoptar esa posición.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 889 (ES Kurss Lessons)

**Finding:** 889
**Audit ID:** ES-KURSS-LESSONS-LV2-0698
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[6]`
**Field type:** `grammarExample`
**DE (read-only):** finden
**CURRENT_ES:** finden — atrast
**PROPOSED_ES:** finden — encontrar
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «atrast» es letón, no español.
**Reason:** «atrast» es letón, no español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 890 (ES Kurss Lessons)

**Finding:** 890
**Audit ID:** ES-KURSS-LESSONS-LV2-0699
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Los sustantivos suelen aparecer sin article.
**PROPOSED_ES:** Los sustantivos suelen aparecer sin artículo.
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** «Article» es un resto del inglés. El término gramatical en español es «artículo».
**Reason:** «Article» es un resto del inglés. El término gramatical en español es «artículo».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 891 (ES Kurss Lessons)

**Finding:** 891
**Audit ID:** ES-KURSS-LESSONS-LV2-0700
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].examples[0]`
**Field type:** `grammarExample`
**DE (read-only):** Ich trinke Milch.
**CURRENT_ES:** Ich trinke Milch. — Es dzeru pienu.
**PROPOSED_ES:** Ich trinke Milch. — Bebo leche.
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** La traducción visible está en letón («Es dzeru pienu»), no en español. El ejemplo alemán debe conservarse sin cambios.
**Reason:** La traducción visible está en letón («Es dzeru pienu»), no en español. El ejemplo alemán debe conservarse sin cambios.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 892 (ES Kurss Lessons)

**Finding:** 892
**Audit ID:** ES-KURSS-LESSONS-LV2-0702
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**CURRENT_ES:** in + vieta
**PROPOSED_ES:** in + ubicación
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Problem:** «vieta» es letón, no español.
**Reason:** «vieta» es letón, no español.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 893 (ES Kurss Lessons)

**Finding:** 893
**Audit ID:** ES-KURSS-LESSONS-LV2-0703
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text`
**Field type:** `grammarText`
**DE (read-only):** —
**CURRENT_ES:** Si la preposición in no se traduce como "en", pero expresa una ubicación, se puede traducir con el locativo.
**PROPOSED_ES:** Si la preposición in no se traduce como «en», sino que expresa una ubicación, se utiliza el dativo.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** En alemán, la ubicación estática con «in» se construye con dativo; «locativo» no es el caso gramatical pertinente en esta explicación.
**Reason:** En alemán, la ubicación estática con «in» se construye con dativo; «locativo» no es el caso gramatical pertinente en esta explicación.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 894 (ES Kurss Lessons)

**Finding:** 894
**Audit ID:** ES-KURSS-LESSONS-LV2-0704
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[0].lv`
**Field type:** `translateCard`
**DE (read-only):** Wohin kommt der Diener?
**CURRENT_ES:** ¿De dónde viene el servidor?
**PROPOSED_ES:** ¿Adónde va el criado?
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** La pregunta alemana «Wohin kommt der Diener?» pregunta por el destino, no por el origen. Además, «Diener» corresponde aquí a «criado» o «sirviente», no necesariamente a «servidor».
**Reason:** La pregunta alemana «Wohin kommt der Diener?» pregunta por el destino, no por el origen. Además, «Diener» corresponde aquí a «criado» o «sirviente», no necesariamente a «servidor».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 895 (ES Kurss Lessons)

**Finding:** 895
**Audit ID:** ES-KURSS-LESSONS-LV2-0705
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[2].lv`
**Field type:** `translateCard`
**DE (read-only):** Wo arbeitet er?
**CURRENT_ES:** donde trabaja
**PROPOSED_ES:** ¿Dónde trabaja?
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán «Wo arbeitet er?» es una pregunta directa. La versión actual es una subordinada relativa y omite los signos de interrogación.
**Reason:** El alemán «Wo arbeitet er?» es una pregunta directa. La versión actual es una subordinada relativa y omite los signos de interrogación.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 896 (ES Kurss Lessons)

**Finding:** 896
**Audit ID:** ES-KURSS-LESSONS-LV2-0706
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv`
**Field type:** `translateCard`
**DE (read-only):** Sie suchen Beeren in dem Walde.
**CURRENT_ES:** Recogen bayas en el bosque.
**PROPOSED_ES:** Buscan bayas en el bosque.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** «Suchen» significa «buscar», no «recoger». La traducción actual cambia la acción descrita.
**Reason:** «Suchen» significa «buscar», no «recoger». La traducción actual cambia la acción descrita.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 897 (ES Kurss Lessons)

**Finding:** 897
**Audit ID:** ES-KURSS-LESSONS-LV2-0707
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[9].lv`
**Field type:** `translateCard`
**DE (read-only):** Die Mutter stellt den Korb auf den Schrank.
**CURRENT_ES:** La madre pone la cesta en el armario.
**PROPOSED_ES:** La madre pone la cesta sobre el armario.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** El alemán indica que la cesta se coloca encima del armario (auf den Schrank), no dentro del armario.
**Reason:** El alemán indica que la cesta se coloca encima del armario (auf den Schrank), no dentro del armario.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 898 (ES Kurss Lessons)

**Finding:** 898
**Audit ID:** ES-KURSS-LESSONS-LV2-0708
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].lv`
**Field type:** `translateCard`
**DE (read-only):** Der Schüler legt die Hefte in die Mappe.
**CURRENT_ES:** El estudiante pone los cuadernos en la bolsa.
**PROPOSED_ES:** El estudiante pone los cuadernos en la carpeta.
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Problem:** Mappe significa «carpeta» o «portafolios» en este contexto, no «bolsa».
**Reason:** Mappe significa «carpeta» o «portafolios» en este contexto, no «bolsa».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 899 (ES Kurss Lessons)

**Finding:** 899
**Audit ID:** ES-KURSS-LESSONS-LV2-0709
**Lesson:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv`
**Field type:** `translateCard`
**DE (read-only):** Die Hefte sind jetzt in der Mappe.
**CURRENT_ES:** Las cartas ya están en la bolsa.
**PROPOSED_ES:** Los cuadernos ya están en la carpeta.
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Problem:** El ejemplo alemán habla de cuadernos (Hefte) que están en una carpeta (Mappe); «cartas» y «bolsa» cambian ambos significados.
**Reason:** El ejemplo alemán habla de cuadernos (Hefte) que están en una carpeta (Mappe); «cartas» y «bolsa» cambian ambos significados.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---

## Finding 900 (ES Kurss Lessons)

**Finding:** 900
**Audit ID:** ES-KURSS-LESSONS-LV2-0710
**Lesson:** `lesson18`
**Path:** `kurss.exerciseMeta.fillCase`
**Field type:** `uiExerciseMeta`
**DE (read-only):** —
**CURRENT_ES:** Ejercicio I — Usa la conjugación correcta
**PROPOSED_ES:** Ejercicio I — Usa el caso correcto
**Severity:** HIGH
**Category:** ES_TERMINOLOGY
**Problem:** El ejercicio trata de casos gramaticales alemanes, no de conjugación verbal. En español, el término adecuado es «caso».
**Reason:** El ejercicio trata de casos gramaticales alemanes, no de conjugación verbal. En español, el término adecuado es «caso».
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna v2 + deterministic audit (`reports/es-kurss-lessons-full-audit-v2.md`) · luna-v2

---
