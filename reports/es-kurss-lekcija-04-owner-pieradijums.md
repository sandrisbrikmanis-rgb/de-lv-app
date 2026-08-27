# ES Kurss — Lekcija 4 — OWNER gala lēmumi

**Main:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Atradumi:** 64 · **LABOT:** 27 · **NELABOT:** 22 · **FALSE_POSITIVE:** 14 · **TECHNICAL_DEFER:** 1 · **Rebased:** 22

## 1. Oriģinālais

| Audit ID | Path | Audita CURRENT | Audita statuss | Audita NEW |
|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L04 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson4 | inline:7423 | TECHNICAL_DEFER |  |
| ES-KURSS-LESSONS-DET-0048 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones (summary title) | Diálogos/oraciones | FALSE_POSITIVE | Diálogos/oraciones |
| ES-KURSS-LESSONS-DET-0049 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[0] | nehmen (nēmen) — emplumado | NELABOT | nehmen (nēmen) — emplumado |
| ES-KURSS-LESSONS-DET-0050 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[2] | der Federhalter (dēr fēderhalter) — show | LABOT | der Federhalter (dēr fēderhalter) — portaplumas |
| ES-KURSS-LESSONS-DET-0051 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[7] | die Feder (dī fēder) — puntiagudo | LABOT | die Feder (dī fēder) — pluma |
| ES-KURSS-LESSONS-DET-0052 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[12] | das Mädchen (mētchen) — cuchillo | NELABOT | das Mädchen (mētchen) — cuchillo |
| ES-KURSS-LESSONS-DET-0053 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → course-example[0] | nehmen (nēmen) - tomar | NELABOT | nehmen (nēmen) - tomar |
| ES-KURSS-LESSONS-DET-0054 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[2] | Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen). | NELABOT | Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen). |
| ES-KURSS-LESSONS-DET-0055 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[3] | h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim. | LABOT | En alemán, h puede representar tanto un sonido como una marca de longitud de la vocal precedente. |
| ES-KURSS-LESSONS-DET-0056 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[0] | Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen). | LABOT | Si h es una marca de longitud, no se pronuncia como sonido: nehmen (nēmen). |
| ES-KURSS-LESSONS-DET-0057 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[1] | Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn). | LABOT | Si a una vocal le sigue una sola consonante, la vocal se pronuncia larga: die (dī) Feder (fēder), den (dēn). |
| ES-KURSS-LESSONS-DET-0058 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[15] | daudzskaitlī — das Messer ist nicht scharf | LABOT | en plural — das Messer ist nicht scharf |
| ES-KURSS-LESSONS-DET-0059 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[6] | 7-chen / -lein | NELABOT | 7-chen / -lein |
| ES-KURSS-LESSONS-DET-0060 | kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | FALSE_POSITIVE | Lección {lesson} · Traducir: {current} / {total} |
| ES-KURSS-LESSONS-LV2-0129 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[0] | Paul kommt und nimmt einen Federhalter. | FALSE_POSITIVE | Paul kommt und nimmt einen Federhalter. |
| ES-KURSS-LESSONS-LV2-0130 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[1] | Er zeigt den Federhalter. | FALSE_POSITIVE | Er zeigt den Federhalter. |
| ES-KURSS-LESSONS-LV2-0131 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[2] | Er fragt: „Wie ist der Federhalter?“ | LABOT | Él pregunta: «¿Cómo es el portaplumas?» |
| ES-KURSS-LESSONS-LV2-0132 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[3] | Olga antwortet: „Der Federhalter ist schwarz.“ | LABOT | Olga responde: «El portaplumas es negro.» |
| ES-KURSS-LESSONS-LV2-0133 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[4] | Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz. | FALSE_POSITIVE | Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz. |
| ES-KURSS-LESSONS-LV2-0134 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[5] | Marie kommt und nimmt eine Feder. | FALSE_POSITIVE | Marie kommt und nimmt eine Feder. |
| ES-KURSS-LESSONS-LV2-0135 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[6] | Sie fragt: „Wie ist die Feder?“ | LABOT | Ella pregunta: «¿Cómo es la pluma?» |
| ES-KURSS-LESSONS-LV2-0136 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[7] | Olga antwortet: „Die Feder ist spitz.“ | LABOT | Olga responde: «La pluma es puntiaguda.» |
| ES-KURSS-LESSONS-LV2-0137 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[8] | Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz. | FALSE_POSITIVE | Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz. |
| ES-KURSS-LESSONS-LV2-0138 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[9] | Was legt das Mädchen hin? Es legt die Feder hin. | FALSE_POSITIVE | Was legt das Mädchen hin? Es legt die Feder hin. |
| ES-KURSS-LESSONS-LV2-0139 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[10] | Was nimmst du? Ich nehme ein Messer. | FALSE_POSITIVE | Was nimmst du? Ich nehme ein Messer. |
| ES-KURSS-LESSONS-LV2-0140 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[11] | Wie ist das Messer? Das Messer ist scharf. | FALSE_POSITIVE | Wie ist das Messer? Das Messer ist scharf. |
| ES-KURSS-LESSONS-LV2-0141 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[12] | Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf. | FALSE_POSITIVE | Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf. |
| ES-KURSS-LESSONS-LV2-0142 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[13] | Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin. | FALSE_POSITIVE | Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin. |
| ES-KURSS-LESSONS-LV2-0143 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones → kurss-example[14] | Dann gehe ich hinaus und arbeite. | FALSE_POSITIVE | Dann gehe ich hinaus und arbeite. |
| ES-KURSS-LESSONS-LV2-0145 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[1] | er nimmt (nimt) — emplumado | LABOT | er nimmt (nimt) — él toma |
| ES-KURSS-LESSONS-LV2-0147 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[3] | einen Federhalter — negro | LABOT | einen Federhalter — un portaplumas |
| ES-KURSS-LESSONS-LV2-0148 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[4] | zeigen — blanco | LABOT | zeigen — mostrar |
| ES-KURSS-LESSONS-LV2-0149 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[5] | schwarz (švarc) — pluma | LABOT | schwarz (švarc) — negro |
| ES-KURSS-LESSONS-LV2-0150 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[6] | weiß (veis) — pluma | LABOT | weiß (veis) — blanco |
| ES-KURSS-LESSONS-LV2-0152 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[8] | eine Feder — dejar | LABOT | eine Feder — una pluma |
| ES-KURSS-LESSONS-LV2-0153 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[9] | spitz (špic) — dejar | LABOT | spitz (špic) — puntiagudo |
| ES-KURSS-LESSONS-LV2-0154 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[10] | hinlegen — niña | LABOT | hinlegen — colocar |
| ES-KURSS-LESSONS-LV2-0155 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[11] | legt hin — cuchillo | LABOT | legt hin — coloca |
| ES-KURSS-LESSONS-LV2-0157 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[13] | das Messer — agudo | LABOT | das Messer — cuchillo |
| ES-KURSS-LESSONS-LV2-0158 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[14] | ein Messer — contundente | LABOT | ein Messer — un cuchillo |
| ES-KURSS-LESSONS-LV2-0159 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[15] | scharf — luego | LABOT | scharf — agudo |
| ES-KURSS-LESSONS-LV2-0160 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[16] | stumpf (štumpf) — afuera | LABOT | stumpf (štumpf) — contundente |
| ES-KURSS-LESSONS-LV2-0161 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[17] | dann — sal, ve out | FALSE_POSITIVE | dann — sal, ve out |
| ES-KURSS-LESSONS-LV2-0162 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[0] | hinaus — en, -er, -el no están acentuadas, por lo que la e en estos extremos es apenas audible: kommen, nehmen, der Federhalter. | LABOT | hinaus — Las terminaciones -en, -er y -el no llevan acento, por lo que la e en estas terminaciones apenas se oye: kommen, nehmen, der Federhalter. |
| ES-KURSS-LESSONS-LV2-0167 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[2] | Nominativ: der Federhalter, die Feder, das Messer. | LABOT | Nominativo: der Federhalter, die Feder, das Messer. |
| ES-KURSS-LESSONS-LV2-0168 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[3] | Akkusativ: den Federhalter, die Feder, das Messer. | LABOT | Acusativo: den Federhalter, die Feder, das Messer. |
| ES-KURSS-LESSONS-LV2-0169 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[4] | Nominativ: ein Federhalter, eine Feder, ein Messer. | LABOT | Nominativo: ein Federhalter, eine Feder, ein Messer. |
| ES-KURSS-LESSONS-LV2-0170 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[5] | Akkusativ: einen Federhalter, eine Feder, ein Messer. | LABOT | Acusativo: einen Federhalter, eine Feder, ein Messer. |
| ES-KURSS-LESSONS-LV2-0172 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[0] | En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda. | LABOT | En los géneros femenino y neutro, el acusativo es igual que el nominativo. Solo cambia el masculino. |
| ES-KURSS-LESSONS-LV2-0173 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[1] | Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número. | LABOT | Si un adjetivo forma parte del predicado de una oración, no cambia según el caso ni el número. |
| ES-KURSS-LESSONS-LV2-0174 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-note[2] | Si nicht niega un adjetivo, se coloca delante de la palabra negativa. | LABOT | Si nicht niega un adjetivo, se coloca delante del adjetivo. |
| ES-KURSS-LESSONS-LV2-0175 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[0] | 1Acusativo | LABOT | 1. Acusativo |
| ES-KURSS-LESSONS-LV2-0176 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[1] | 2nehmen | LABOT | 2. nehmen |
| ES-KURSS-LESSONS-LV2-0177 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[2] | 3Pronombres | LABOT | 3. Pronombres |
| ES-KURSS-LESSONS-LV2-0178 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[3] | 4Verbos separables | LABOT | 4. Verbos separables |
| ES-KURSS-LESSONS-LV2-0179 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[4] | 5Adjetivos | LABOT | 5. Adjetivos |
| ES-KURSS-LESSONS-LV2-0180 | COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[5] | 6Negación con nicht | LABOT | 6. Negación con nicht |
| ES-KURSS-LESSONS-LV2-0182 | lesson4TrainingCardsEs[0].front | La niña toma un eje de plumas. | LABOT | La niña toma un portaplumas. |
| ES-KURSS-LESSONS-LV2-0183 | lesson4TrainingCardsEs[1].front | La pluma no es blanca, es negra. | LABOT | El portaplumas no es blanco, es negro. |
| ES-KURSS-LESSONS-LV2-0184 | lesson4TrainingCardsEs[3].front | ¿Qué es una pluma? | LABOT | ¿Cómo es la pluma? |
| ES-KURSS-LESSONS-LV2-0185 | lesson4TrainingCardsEs[5].front | ¿Lleva un cuchillo? | LABOT | ¿Toma un cuchillo? |
| ES-KURSS-LESSONS-LV2-0186 | lesson4TrainingCardsEs[9].front | No, es agudo. | LABOT | No, está afilado. |
| ES-KURSS-LESSONS-LV2-0187 | lesson4TrainingCardsEs[13].front | Olga muestra el libro. | LABOT | Olga muestra un libro. |
| ES-KURSS-LESSONS-LV2-0188 | lesson4TrainingCardsEs[14].front | cual es el libro | LABOT | ¿Cómo es el libro? |

## 2. izmaiņas

| Audit ID | Faktiskais main CURRENT | Rebased | OWNER izvērtējums |
|---|---|---|---|
| ES-KURSS-LESSONS-STR-L04 | inline:7423 | NĒ | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0048 | Diálogos/oraciones | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0049 | nehmen (nēmen) — tomar | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0050 | der Federhalter (dēr fēderhalter) — portalápices | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Federhalter (dēr fēderhalter) — show |
| ES-KURSS-LESSONS-DET-0051 | die Feder (dī fēder) — pluma | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Feder (dī fēder) — puntiagudo |
| ES-KURSS-LESSONS-DET-0052 | das Mädchen (mētchen) — chica | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0053 | nehmen (nēmen) — tomar | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0054 | Las terminaciones -en, -er y -el suelen ser átonas y su e apenas se oye. | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0055 | En alemán, la h puede representar un sonido o indicar que la vocal anterior es larga. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim. |
| ES-KURSS-LESSONS-DET-0056 | Cuando la h indica longitud vocálica, no se pronuncia: nehmen (nēmen). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen). |
| ES-KURSS-LESSONS-DET-0057 | Si a una vocal le sigue una sola consonante, normalmente se pronuncia larga: die (dī), Feder (fēder), den (dēn). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn). |
| ES-KURSS-LESSONS-DET-0058 | plural — die Messer sind nicht scharf | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: daudzskaitlī — das Messer ist nicht scharf |
| ES-KURSS-LESSONS-DET-0059 | 7-chen / -lein | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0060 | Lección {lesson} · Traducir: {current} / {total} | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0129 | Paul kommt und nimmt einen Federhalter. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0130 | Er zeigt den Federhalter. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0131 | Er fragt: „Wie ist der Federhalter?“ | NĒ | El campo visible contiene alemán sin traducir. La pregunta alemana debe permanecer como contexto alemán, no como texto español. |
| ES-KURSS-LESSONS-LV2-0132 | Olga antwortet: „Der Federhalter ist schwarz.“ | NĒ | El campo visible contiene alemán sin traducir en lugar de una traducción española. |
| ES-KURSS-LESSONS-LV2-0133 | Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0134 | Marie kommt und nimmt eine Feder. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0135 | Sie fragt: „Wie ist die Feder?“ | NĒ | El campo visible contiene alemán sin traducir en lugar de una traducción española. |
| ES-KURSS-LESSONS-LV2-0136 | Olga antwortet: „Die Feder ist spitz.“ | NĒ | El campo visible contiene alemán sin traducir en lugar de una traducción española. |
| ES-KURSS-LESSONS-LV2-0137 | Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0138 | Was legt das Mädchen hin? Es legt die Feder hin. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0139 | Was nimmst du? Ich nehme ein Messer. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0140 | Wie ist das Messer? Das Messer ist scharf. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0141 | Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0142 | Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0143 | Dann gehe ich hinaus und arbeite. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0145 | er nimmt (nimt) — él toma | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: er nimmt (nimt) — emplumado |
| ES-KURSS-LESSONS-LV2-0147 | einen Federhalter — negro | NĒ | La glosa «negro» no corresponde a einen Federhalter, que significa «un portaplumas». |
| ES-KURSS-LESSONS-LV2-0148 | zeigen — blanco | NĒ | La glosa «blanco» no corresponde al verbo zeigen, que significa «mostrar». |
| ES-KURSS-LESSONS-LV2-0149 | schwarz (švarc) — negro | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: schwarz (švarc) — pluma |
| ES-KURSS-LESSONS-LV2-0150 | weiß (veis) — blanco | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: weiß (veis) — pluma |
| ES-KURSS-LESSONS-LV2-0152 | eine Feder — pluma | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: eine Feder — dejar |
| ES-KURSS-LESSONS-LV2-0153 | spitz (špic) — puntiagudo | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: spitz (špic) — dejar |
| ES-KURSS-LESSONS-LV2-0154 | hinlegen — niña | NĒ | La glosa «niña» no corresponde al verbo hinlegen, que significa «colocar» o «poner». |
| ES-KURSS-LESSONS-LV2-0155 | legt hin — coloca | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: legt hin — cuchillo |
| ES-KURSS-LESSONS-LV2-0157 | das Messer — cuchillo | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Messer — agudo |
| ES-KURSS-LESSONS-LV2-0158 | ein Messer — un cuchillo | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Messer — contundente |
| ES-KURSS-LESSONS-LV2-0159 | scharf — afilado | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: scharf — luego |
| ES-KURSS-LESSONS-LV2-0160 | stumpf (štumpf) — desafilado | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: stumpf (štumpf) — afuera |
| ES-KURSS-LESSONS-LV2-0161 | dann — entonces | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0162 | hinaus — afuera | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: hinaus — en, -er, -el no están acentuadas, por lo que la e en estos extremos es apenas audible: kommen, nehmen, der Federhalter. |
| ES-KURSS-LESSONS-LV2-0167 | Nominativ: der Federhalter, die Feder, das Messer. | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0168 | Akkusativ: den Federhalter, die Feder, das Messer. | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0169 | Nominativ: ein Federhalter, eine Feder, ein Messer. | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0170 | Akkusativ: einen Federhalter, eine Feder, ein Messer. | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0172 | En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda. | NĒ | «Los hombres» y «cambian de ronda» son traducciones erróneas y alteran el sentido gramatical; debe hablarse del género masculino y del cambio de forma. |
| ES-KURSS-LESSONS-LV2-0173 | Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número. | NĒ | La formulación actual es tautológica y «en orden» no expresa el concepto gramatical previsto. La redacción propuesta es clara y natural. |
| ES-KURSS-LESSONS-LV2-0174 | Si nicht niega un adjetivo, se coloca delante de la palabra negativa. | NĒ | «La palabra negativa» es impreciso y parece indicar que nicht va delante de una palabra que ya es negativa; debe mencionarse directamente el adjetivo negado. |
| ES-KURSS-LESSONS-LV2-0175 | 1Acusativo | NĒ | Falta separación entre el número y el título; la presentación resulta difícil de leer. |
| ES-KURSS-LESSONS-LV2-0176 | 2nehmen | NĒ | Falta separación entre el número y el término alemán. |
| ES-KURSS-LESSONS-LV2-0177 | 3Pronombres | NĒ | Falta separación entre el número y el título. |
| ES-KURSS-LESSONS-LV2-0178 | 4Verbos separables | NĒ | Falta separación entre el número y el título. |
| ES-KURSS-LESSONS-LV2-0179 | 5Adjetivos | NĒ | Falta separación entre el número y el título. |
| ES-KURSS-LESSONS-LV2-0180 | 6Negación con nicht | NĒ | Falta separación entre el número y el título; «nicht» puede conservarse como término gramatical alemán. |
| ES-KURSS-LESSONS-LV2-0182 | La niña toma un eje de plumas. | NĒ | «Eje de plumas» no corresponde a «Federhalter», que significa «portaplumas» o «portalápices» según el contexto. |
| ES-KURSS-LESSONS-LV2-0183 | La pluma no es blanca, es negra. | NĒ | El alemán se refiere a un «Federhalter», no a una pluma; también deben concordar el género y el adjetivo. |
| ES-KURSS-LESSONS-LV2-0184 | ¿Qué es una pluma? | NĒ | «Wie ist die Feder?» pregunta por las características de la pluma («cómo es»), no por su identidad o definición. |
| ES-KURSS-LESSONS-LV2-0185 | ¿Lleva un cuchillo? | NĒ | «Nimmt» significa «toma», no «lleva» en este contexto. |
| ES-KURSS-LESSONS-LV2-0186 | No, es agudo. | NĒ | Para un cuchillo, «afilado» es la expresión natural en español; «agudo» no es la opción idiomática habitual en este contexto. |
| ES-KURSS-LESSONS-LV2-0187 | Olga muestra el libro. | NĒ | El alemán usa el artículo indefinido («ein Buch»), mientras que la traducción usa el definido («el libro»). |
| ES-KURSS-LESSONS-LV2-0188 | cual es el libro | NĒ | Faltan los signos de interrogación y la tilde de «cuál», pero además «cuál» no traduce «Wie ist»; la pregunta debe ser «¿Cómo es el libro?». |

## 3. Gala rezultāts

| Audit ID | File | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L04 |  | COURSE_LESSON_DATA.kurssLesson4.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson4 | inline:7423 |  | **TECHNICAL_DEFER** |
| ES-KURSS-LESSONS-DET-0048 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Diálogos/oraciones | Diálogos/oraciones | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0049 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | nehmen (nēmen) — tomar | nehmen (nēmen) — emplumado | **NELABOT** |
| ES-KURSS-LESSONS-DET-0050 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | der Federhalter (dēr fēderhalter) — portalápices |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0051 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | die Feder (dī fēder) — pluma |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0052 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | das Mädchen (mētchen) — chica | das Mädchen (mētchen) — cuchillo | **NELABOT** |
| ES-KURSS-LESSONS-DET-0053 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | nehmen (nēmen) — tomar | nehmen (nēmen) - tomar | **NELABOT** |
| ES-KURSS-LESSONS-DET-0054 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Las terminaciones -en, -er y -el suelen ser átonas y su e apenas se oye. | Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen). | **NELABOT** |
| ES-KURSS-LESSONS-DET-0055 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | En alemán, la h puede representar un sonido o indicar que la vocal anterior es larga. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0056 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Cuando la h indica longitud vocálica, no se pronuncia: nehmen (nēmen). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0057 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Si a una vocal le sigue una sola consonante, normalmente se pronuncia larga: die (dī), Feder (fēder), den (dēn). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0058 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | plural — die Messer sind nicht scharf |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0059 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 7-chen / -lein | 7-chen / -lein | **NELABOT** |
| ES-KURSS-LESSONS-DET-0060 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | Lección {lesson} · Traducir: {current} / {total} | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0129 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Paul kommt und nimmt einen Federhalter. | Paul kommt und nimmt einen Federhalter. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0130 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Er zeigt den Federhalter. | Er zeigt den Federhalter. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0131 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Er fragt: „Wie ist der Federhalter?“ | Él pregunta: «¿Cómo es el portaplumas?» | **LABOT** |
| ES-KURSS-LESSONS-LV2-0132 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Olga antwortet: „Der Federhalter ist schwarz.“ | Olga responde: «El portaplumas es negro.» | **LABOT** |
| ES-KURSS-LESSONS-LV2-0133 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz. | Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0134 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Marie kommt und nimmt eine Feder. | Marie kommt und nimmt eine Feder. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0135 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Sie fragt: „Wie ist die Feder?“ | Ella pregunta: «¿Cómo es la pluma?» | **LABOT** |
| ES-KURSS-LESSONS-LV2-0136 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Olga antwortet: „Die Feder ist spitz.“ | Olga responde: «La pluma es puntiaguda.» | **LABOT** |
| ES-KURSS-LESSONS-LV2-0137 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz. | Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0138 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Was legt das Mädchen hin? Es legt die Feder hin. | Was legt das Mädchen hin? Es legt die Feder hin. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0139 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Was nimmst du? Ich nehme ein Messer. | Was nimmst du? Ich nehme ein Messer. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0140 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Wie ist das Messer? Das Messer ist scharf. | Wie ist das Messer? Das Messer ist scharf. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0141 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf. | Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0142 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin. | Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0143 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Dann gehe ich hinaus und arbeite. | Dann gehe ich hinaus und arbeite. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0145 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | er nimmt (nimt) — él toma |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0147 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | einen Federhalter — negro | einen Federhalter — un portaplumas | **LABOT** |
| ES-KURSS-LESSONS-LV2-0148 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | zeigen — blanco | zeigen — mostrar | **LABOT** |
| ES-KURSS-LESSONS-LV2-0149 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | schwarz (švarc) — negro |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0150 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | weiß (veis) — blanco |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0152 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | eine Feder — pluma |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0153 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | spitz (špic) — puntiagudo |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0154 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | hinlegen — niña | hinlegen — colocar | **LABOT** |
| ES-KURSS-LESSONS-LV2-0155 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | legt hin — coloca |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0157 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | das Messer — cuchillo |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0158 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | ein Messer — un cuchillo |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0159 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | scharf — afilado |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0160 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | stumpf (štumpf) — desafilado |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0161 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | dann — entonces | dann — sal, ve out | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0162 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | hinaus — afuera |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0167 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Nominativ: der Federhalter, die Feder, das Messer. | Nominativo: der Federhalter, die Feder, das Messer. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0168 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Akkusativ: den Federhalter, die Feder, das Messer. | Acusativo: den Federhalter, die Feder, das Messer. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0169 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Nominativ: ein Federhalter, eine Feder, ein Messer. | Nominativo: ein Federhalter, eine Feder, ein Messer. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0170 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Akkusativ: einen Federhalter, eine Feder, ein Messer. | Acusativo: einen Federhalter, eine Feder, ein Messer. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0172 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | En femenino y neutro, el acusativo es igual al nominativo. Sólo los hombres cambian de ronda. | En los géneros femenino y neutro, el acusativo es igual que el nominativo. Solo cambia el masculino. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0173 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Si un adjetivo es un adjetivo en una oración, no cambia en orden ni número. | Si un adjetivo forma parte del predicado de una oración, no cambia según el caso ni el número. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0174 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | Si nicht niega un adjetivo, se coloca delante de la palabra negativa. | Si nicht niega un adjetivo, se coloca delante del adjetivo. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0175 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 1Acusativo | 1. Acusativo | **LABOT** |
| ES-KURSS-LESSONS-LV2-0176 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 2nehmen | 2. nehmen | **LABOT** |
| ES-KURSS-LESSONS-LV2-0177 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 3Pronombres | 3. Pronombres | **LABOT** |
| ES-KURSS-LESSONS-LV2-0178 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 4Verbos separables | 4. Verbos separables | **LABOT** |
| ES-KURSS-LESSONS-LV2-0179 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 5Adjetivos | 5. Adjetivos | **LABOT** |
| ES-KURSS-LESSONS-LV2-0180 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson4.legacyHtml | 6Negación con nicht | 6. Negación con nicht | **LABOT** |
| ES-KURSS-LESSONS-LV2-0182 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[0].front | La niña toma un eje de plumas. | La niña toma un portaplumas. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0183 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[1].front | La pluma no es blanca, es negra. | El portaplumas no es blanco, es negro. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0184 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[3].front | ¿Qué es una pluma? | ¿Cómo es la pluma? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0185 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[5].front | ¿Lleva un cuchillo? | ¿Toma un cuchillo? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0186 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[9].front | No, es agudo. | No, está afilado. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0187 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[13].front | Olga muestra el libro. | Olga muestra un libro. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0188 | data/es/courseTrainingCards.js | lesson4TrainingCardsEs[14].front | cual es el libro | ¿Cómo es el libro? | **LABOT** |

## Cursor COPY/PASTE targets

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

COPY-ONLY: main faktiskajai vērtībai precīzi jāsakrīt ar `CURRENT`; neatbilstība = SKIP. DE laukus nemainīt.
