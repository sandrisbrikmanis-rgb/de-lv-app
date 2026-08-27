# ES Kurss — Lekcija 4 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 64 · **LABOT:** 27 · **NELABOT:** 22 · **FALSE_POSITIVE:** 14 · **TECHNICAL_DEFER:** 1

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L04 |  | COURSE_LESSON_DATA.kurssLesson4.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson4 | inline:7423 |  | **TECHNICAL_DEFER** | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0048 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Diálogos/oraciones |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0049 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | nehmen (nēmen) — tomar |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0050 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | der Federhalter (dēr fēderhalter) — portalápices |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Federhalter (dēr fēderhalter) — show |
| ES-KURSS-LESSONS-DET-0051 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | die Feder (dī fēder) — pluma |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Feder (dī fēder) — puntiagudo |
| ES-KURSS-LESSONS-DET-0052 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | das Mädchen (mētchen) — chica |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0053 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | nehmen (nēmen) — tomar |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0054 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Las terminaciones -en, -er y -el suelen ser átonas y su e apenas se oye. |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0055 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | En alemán, la h puede representar un sonido o indicar que la vocal anterior es larga. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim. |
| ES-KURSS-LESSONS-DET-0056 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Cuando la h indica longitud vocálica, no se pronuncia: nehmen (nēmen). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen). |
| ES-KURSS-LESSONS-DET-0057 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Si a una vocal le sigue una sola consonante, normalmente se pronuncia larga: die (dī), Feder (fēder), den (dēn). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn). |
| ES-KURSS-LESSONS-DET-0058 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | plural — die Messer sind nicht scharf |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: daudzskaitlī — das Messer ist nicht scharf |
| ES-KURSS-LESSONS-DET-0059 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 7-chen / -lein |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0060 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0129 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Paul kommt und nimmt einen Federhalter. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0130 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Er zeigt den Federhalter. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0131 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Er fragt: „Wie ist der Federhalter?“ | Él pregunta: «¿Cómo es el portaplumas?» | **LABOT** | El campo visible contiene alemán sin traducir. La pregunta alemana debe permanecer como contexto alemán, no como texto español. |
| ES-KURSS-LESSONS-LV2-0132 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Olga antwortet: „Der Federhalter ist schwarz.“ | Olga responde: «El portaplumas es negro.» | **LABOT** | El campo visible contiene alemán sin traducir en lugar de una traducción española. |
| ES-KURSS-LESSONS-LV2-0133 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0134 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Marie kommt und nimmt eine Feder. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0135 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Sie fragt: „Wie ist die Feder?“ | Ella pregunta: «¿Cómo es la pluma?» | **LABOT** | El campo visible contiene alemán sin traducir en lugar de una traducción española. |
| ES-KURSS-LESSONS-LV2-0136 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Olga antwortet: „Die Feder ist spitz.“ | Olga responde: «La pluma es puntiaguda.» | **LABOT** | El campo visible contiene alemán sin traducir en lugar de una traducción española. |
| ES-KURSS-LESSONS-LV2-0137 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0138 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Was legt das Mädchen hin? Es legt die Feder hin. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0139 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Was nimmst du? Ich nehme ein Messer. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0140 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Wie ist das Messer? Das Messer ist scharf. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0141 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0142 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0143 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Dann gehe ich hinaus und arbeite. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0145 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | er nimmt (nimt) — él toma |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: er nimmt (nimt) — emplumado |
| ES-KURSS-LESSONS-LV2-0147 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | einen Federhalter — negro | einen Federhalter — un portaplumas | **LABOT** | La glosa «negro» no corresponde a einen Federhalter, que significa «un portaplumas». |
| ES-KURSS-LESSONS-LV2-0148 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | zeigen — blanco | zeigen — mostrar | **LABOT** | La glosa «blanco» no corresponde al verbo zeigen, que significa «mostrar». |
| ES-KURSS-LESSONS-LV2-0149 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | schwarz (švarc) — negro |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: schwarz (švarc) — pluma |
| ES-KURSS-LESSONS-LV2-0150 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | weiß (veis) — blanco |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: weiß (veis) — pluma |
| ES-KURSS-LESSONS-LV2-0152 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | eine Feder — pluma |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: eine Feder — dejar |
| ES-KURSS-LESSONS-LV2-0153 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | spitz (špic) — puntiagudo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: spitz (špic) — dejar |
| ES-KURSS-LESSONS-LV2-0154 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | hinlegen — niña | hinlegen — colocar | **LABOT** | La glosa «niña» no corresponde al verbo hinlegen, que significa «colocar» o «poner». |
| ES-KURSS-LESSONS-LV2-0155 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | legt hin — coloca |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: legt hin — cuchillo |
| ES-KURSS-LESSONS-LV2-0157 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | das Messer — cuchillo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Messer — agudo |
| ES-KURSS-LESSONS-LV2-0158 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | ein Messer — un cuchillo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Messer — contundente |
| ES-KURSS-LESSONS-LV2-0159 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | scharf — afilado |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: scharf — luego |
| ES-KURSS-LESSONS-LV2-0160 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | stumpf (štumpf) — desafilado |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: stumpf (štumpf) — afuera |
| ES-KURSS-LESSONS-LV2-0161 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | dann — entonces |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0162 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | hinaus — afuera |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: hinaus — en, -er, -el no están acentuadas, por lo que la e en estos extremos es apenas audible: kommen, nehmen, der Federhalter. |
| ES-KURSS-LESSONS-LV2-0167 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Nominativ: der Federhalter, die Feder, das Messer. | Nominativo: der Federhalter, die Feder, das Messer. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0168 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Akkusativ: den Federhalter, die Feder, das Messer. | Acusativo: den Federhalter, die Feder, das Messer. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0169 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Nominativ: ein Federhalter, eine Feder, ein Messer. | Nominativo: ein Federhalter, eine Feder, ein Messer. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0170 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Akkusativ: einen Federhalter, eine Feder, ein Messer. | Acusativo: einen Federhalter, eine Feder, ein Messer. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0172 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda. | En los géneros femenino y neutro, el acusativo es igual que el nominativo. Solo cambia el masculino. | **LABOT** | «Los hombres» y «cambian de ronda» son traducciones erróneas y alteran el sentido gramatical; debe hablarse del género masculino y del cambio de forma. |
| ES-KURSS-LESSONS-LV2-0173 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número. | Si un adjetivo forma parte del predicado de una oración, no cambia según el caso ni el número. | **LABOT** | La formulación actual es tautológica y «en orden» no expresa el concepto gramatical previsto. La redacción propuesta es clara y natural. |
| ES-KURSS-LESSONS-LV2-0174 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Si nicht niega un adjetivo, se coloca delante de la palabra negativa. | Si nicht niega un adjetivo, se coloca delante del adjetivo. | **LABOT** | «La palabra negativa» es impreciso y parece indicar que nicht va delante de una palabra que ya es negativa; debe mencionarse directamente el adjetivo negado. |
| ES-KURSS-LESSONS-LV2-0175 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 1Acusativo | 1. Acusativo | **LABOT** | Falta separación entre el número y el título; la presentación resulta difícil de leer. |
| ES-KURSS-LESSONS-LV2-0176 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 2nehmen | 2. nehmen | **LABOT** | Falta separación entre el número y el término alemán. |
| ES-KURSS-LESSONS-LV2-0177 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 3Pronombres | 3. Pronombres | **LABOT** | Falta separación entre el número y el título. |
| ES-KURSS-LESSONS-LV2-0178 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 4Verbos separables | 4. Verbos separables | **LABOT** | Falta separación entre el número y el título. |
| ES-KURSS-LESSONS-LV2-0179 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 5Adjetivos | 5. Adjetivos | **LABOT** | Falta separación entre el número y el título. |
| ES-KURSS-LESSONS-LV2-0180 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 6Negación con nicht | 6. Negación con nicht | **LABOT** | Falta separación entre el número y el título; «nicht» puede conservarse como término gramatical alemán. |
| ES-KURSS-LESSONS-LV2-0182 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[0].front | La niña toma un eje de plumas. | La niña toma un portaplumas. | **LABOT** | «Eje de plumas» no corresponde a «Federhalter», que significa «portaplumas» o «portalápices» según el contexto. |
| ES-KURSS-LESSONS-LV2-0183 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[1].front | La pluma no es blanca, es negra. | El portaplumas no es blanco, es negro. | **LABOT** | El alemán se refiere a un «Federhalter», no a una pluma; también deben concordar el género y el adjetivo. |
| ES-KURSS-LESSONS-LV2-0184 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[3].front | ¿Qué es una pluma? | ¿Cómo es la pluma? | **LABOT** | «Wie ist die Feder?» pregunta por las características de la pluma («cómo es»), no por su identidad o definición. |
| ES-KURSS-LESSONS-LV2-0185 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[5].front | ¿Lleva un cuchillo? | ¿Toma un cuchillo? | **LABOT** | «Nimmt» significa «toma», no «lleva» en este contexto. |
| ES-KURSS-LESSONS-LV2-0186 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[9].front | No, es agudo. | No, está afilado. | **LABOT** | Para un cuchillo, «afilado» es la expresión natural en español; «agudo» no es la opción idiomática habitual en este contexto. |
| ES-KURSS-LESSONS-LV2-0187 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[13].front | Olga muestra el libro. | Olga muestra un libro. | **LABOT** | El alemán usa el artículo indefinido («ein Buch»), mientras que la traducción usa el definido («el libro»). |
| ES-KURSS-LESSONS-LV2-0188 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[14].front | cual es el libro | ¿Cómo es el libro? | **LABOT** | Faltan los signos de interrogación y la tilde de «cuál», pero además «cuál» no traduce «Wie ist»; la pregunta debe ser «¿Cómo es el libro?». |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0131",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[2]",
    "current": "Er fragt: „Wie ist der Federhalter?“",
    "new": "Él pregunta: «¿Cómo es el portaplumas?»",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0132",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[3]",
    "current": "Olga antwortet: „Der Federhalter ist schwarz.“",
    "new": "Olga responde: «El portaplumas es negro.»",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0135",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[6]",
    "current": "Sie fragt: „Wie ist die Feder?“",
    "new": "Ella pregunta: «¿Cómo es la pluma?»",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0136",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[7]",
    "current": "Olga antwortet: „Die Feder ist spitz.“",
    "new": "Olga responde: «La pluma es puntiaguda.»",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0147",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[3]",
    "current": "einen Federhalter — negro",
    "new": "einen Federhalter — un portaplumas",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0148",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[4]",
    "current": "zeigen — blanco",
    "new": "zeigen — mostrar",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0154",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[10]",
    "current": "hinlegen — niña",
    "new": "hinlegen — colocar",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0167",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[2]",
    "current": "Nominativ: der Federhalter, die Feder, das Messer.",
    "new": "Nominativo: der Federhalter, die Feder, das Messer.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0168",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[3]",
    "current": "Akkusativ: den Federhalter, die Feder, das Messer.",
    "new": "Acusativo: den Federhalter, die Feder, das Messer.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0169",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[4]",
    "current": "Nominativ: ein Federhalter, eine Feder, ein Messer.",
    "new": "Nominativo: ein Federhalter, eine Feder, ein Messer.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0170",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[5]",
    "current": "Akkusativ: einen Federhalter, eine Feder, ein Messer.",
    "new": "Acusativo: einen Federhalter, eine Feder, ein Messer.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0172",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[0]",
    "current": "En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda.",
    "new": "En los géneros femenino y neutro, el acusativo es igual que el nominativo. Solo cambia el masculino.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0173",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[1]",
    "current": "Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número.",
    "new": "Si un adjetivo forma parte del predicado de una oración, no cambia según el caso ni el número.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0174",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[2]",
    "current": "Si nicht niega un adjetivo, se coloca delante de la palabra negativa.",
    "new": "Si nicht niega un adjetivo, se coloca delante del adjetivo.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0175",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[0]",
    "current": "1Acusativo",
    "new": "1. Acusativo",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0176",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[1]",
    "current": "2nehmen",
    "new": "2. nehmen",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0177",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[2]",
    "current": "3Pronombres",
    "new": "3. Pronombres",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0178",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[3]",
    "current": "4Verbos separables",
    "new": "4. Verbos separables",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0179",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[4]",
    "current": "5Adjetivos",
    "new": "5. Adjetivos",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0180",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[5]",
    "current": "6Negación con nicht",
    "new": "6. Negación con nicht",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0182",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson4TrainingCardsEs[0].front",
    "path": "lesson4TrainingCardsEs[0].front",
    "current": "La niña toma un eje de plumas.",
    "new": "La niña toma un portaplumas.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0183",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson4TrainingCardsEs[1].front",
    "path": "lesson4TrainingCardsEs[1].front",
    "current": "La pluma no es blanca, es negra.",
    "new": "El portaplumas no es blanco, es negro.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0184",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson4TrainingCardsEs[3].front",
    "path": "lesson4TrainingCardsEs[3].front",
    "current": "¿Qué es una pluma?",
    "new": "¿Cómo es la pluma?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0185",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson4TrainingCardsEs[5].front",
    "path": "lesson4TrainingCardsEs[5].front",
    "current": "¿Lleva un cuchillo?",
    "new": "¿Toma un cuchillo?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0186",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson4TrainingCardsEs[9].front",
    "path": "lesson4TrainingCardsEs[9].front",
    "current": "No, es agudo.",
    "new": "No, está afilado.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0187",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson4TrainingCardsEs[13].front",
    "path": "lesson4TrainingCardsEs[13].front",
    "current": "Olga muestra el libro.",
    "new": "Olga muestra un libro.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0188",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson4TrainingCardsEs[14].front",
    "path": "lesson4TrainingCardsEs[14].front",
    "current": "cual es el libro",
    "new": "¿Cómo es el libro?",
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
