# ES Kurss — Lekcija 1 — OWNER gala lēmumi

**Main:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Atradumi:** 45 · **LABOT:** 15 · **NELABOT:** 22 · **FALSE_POSITIVE:** 7 · **TECHNICAL_DEFER:** 1 · **Rebased:** 25

## 1. Oriģinālais

| Audit ID | Path | Audita CURRENT | Audita statuss | Audita NEW |
|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L01 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson1 | inline:8944 | TECHNICAL_DEFER |  |
| ES-KURSS-LESSONS-DET-0001 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[11] | ellos / tú vienes | FALSE_POSITIVE | ellos / tú vienes |
| ES-KURSS-LESSONS-DET-0002 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].title | ♟gehen — go | LABOT | ♟gehen — ir |
| ES-KURSS-LESSONS-DET-0003 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[11] | ellos / tú vas | FALSE_POSITIVE | ellos / tú vas |
| ES-KURSS-LESSONS-DET-0004 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[11] | ellos / Tú estás | FALSE_POSITIVE | ellos / Tú estás |
| ES-KURSS-LESSONS-DET-0005 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[11] | ellos / tú cantas | FALSE_POSITIVE | ellos / tú cantas |
| ES-KURSS-LESSONS-DET-0006 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[0] | wir (vīr) — we | LABOT | wir (vir) — nosotros |
| ES-KURSS-LESSONS-DET-0007 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[1] | Vārdā “wir” burts i tiek izrunāts gari. | LABOT | En la palabra “wir”, la letra i se pronuncia larga. |
| ES-KURSS-LESSONS-DET-0008 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[3] | gehen (gē-en) - ir | NELABOT | gehen (gē-en) - ir |
| ES-KURSS-LESSONS-DET-0009 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[4] | stehen (štē-en) - stand | LABOT | stehen (ste-en) — estar de pie |
| ES-KURSS-LESSONS-DET-0010 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[6] | du (dū) kommst — tú vienes | NELABOT | du (dū) kommst — tú vienes |
| ES-KURSS-LESSONS-DET-0011 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[7] | er (ēr) kommt — él viene | NELABOT | er (ēr) kommt — él viene |
| ES-KURSS-LESSONS-DET-0012 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[8] | sie (zī) kommt — ella viene | NELABOT | sie (zī) kommt — ella viene |
| ES-KURSS-LESSONS-DET-0013 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[9] | wer (vēr) — ¿qué? | NELABOT | wer (vēr) — ¿qué? |
| ES-KURSS-LESSONS-DET-0014 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[10] | ja (jā) — sí | NELABOT | ja (jā) — sí |
| ES-KURSS-LESSONS-DET-0015 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[0] | Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās. | LABOT | En las lecciones se proporciona la pronunciación correcta de las palabras, representada con letras letonas. |
| ES-KURSS-LESSONS-DET-0016 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[1] | Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga. | NELABOT | Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga. |
| ES-KURSS-LESSONS-DET-0017 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[14] | Latviešu valodā:<br>Tu nāc.<br>Vai tu nāc? | LABOT | Du kommst. — Vienes.<br>Kommst du? — ¿Vienes? |
| ES-KURSS-LESSONS-DET-0018 | lesson1TrainingCardsEs[10].front | Albert y Martha van y vienen. | LABOT | Albert y Marta van y vienen. |
| ES-KURSS-LESSONS-DET-0019 | kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | FALSE_POSITIVE | Lección {lesson} · Traducir: {current} / {total} |
| ES-KURSS-LESSONS-LV2-0001 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[7] | nosotros ven | LABOT | nosotros venimos |
| ES-KURSS-LESSONS-LV2-0002 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[9] | tú vienes | LABOT | vosotros venís |
| ES-KURSS-LESSONS-LV2-0005 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[5] | he / ella va | LABOT | él / ella va |
| ES-KURSS-LESSONS-LV2-0006 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[9] | tú ejat | LABOT | vosotros vais |
| ES-KURSS-LESSONS-LV2-0008 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].title | ♟stehen — pararse | LABOT | ♟stehen — estar de pie |
| ES-KURSS-LESSONS-LV2-0009 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[1] | I stand | FALSE_POSITIVE | I stand |
| ES-KURSS-LESSONS-LV2-0010 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[9] | tú estás de pie | LABOT | vosotros estáis de pie |
| ES-KURSS-LESSONS-LV2-0012 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].title | ♟singen — to canta | FALSE_POSITIVE | ♟singen — to canta |
| ES-KURSS-LESSONS-LV2-0013 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[9] | tú cantas | LABOT | vosotros cantáis |
| ES-KURSS-LESSONS-LV2-0015 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → lesson1-info[0] | iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.<br>Esto también debería seguirse en futuras conferencias. | LABOT | La pronunciación aproximada de las palabras se indica entre paréntesis con letras letonas.<br>Esto también debería seguirse en futuras lecciones. |
| ES-KURSS-LESSONS-LV2-0019 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[5] | singen (zingen) — canta | LABOT | singen (zingen) — cantar |
| ES-KURSS-LESSONS-LV2-0023 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[4] | ich → -ich komme | LABOT | ich → ich komme |
| ES-KURSS-LESSONS-LV2-0024 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[5] | du → -du kommst | LABOT | du → du kommst |
| ES-KURSS-LESSONS-LV2-0025 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[6] | er / sie → -er kommt | LABOT | er / sie → er kommt |
| ES-KURSS-LESSONS-LV2-0026 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[7] | wir → -wir kommen | LABOT | wir → wir kommen |
| ES-KURSS-LESSONS-LV2-0027 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[8] | ihr → -En letón: | LABOT | ihr → ihr kommt |
| ES-KURSS-LESSONS-LV2-0028 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[9] | sie → -Alemán en: | LABOT | sie → sie kommen |
| ES-KURSS-LESSONS-LV2-0030 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[1] | ♟Presente terminaciones | LABOT | ♟ Terminaciones del presente |
| ES-KURSS-LESSONS-LV2-0031 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[3] | ?Oraciones de preguntas | LABOT | ?Oraciones interrogativas |
| ES-KURSS-LESSONS-LV2-0032 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[4] | ♣Diferencia de persona | LABOT | ♣Diferencias según la persona |
| ES-KURSS-LESSONS-LV2-0033 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → ending-info[0] | Eliminar -en de las formas base del verbo y agrega la terminación.<br>Ejemplo: kommen → komm + terminación<br>kommenforma base | LABOT | Eliminar -en de la forma básica del verbo y añadir la terminación.<br>Ejemplo: kommen → komm + terminación<br>kommen: forma básica |
| ES-KURSS-LESSONS-LV2-0034 | COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → p[0] | Eliminar -en de las formas base del verbo y agrega la terminación. | LABOT | Eliminar -en de la forma básica del verbo y añadir la terminación. |
| ES-KURSS-LESSONS-LV2-0035 | lesson1TrainingCardsEs[0].front | ¿vienes? | LABOT | ¿Vienes? |
| ES-KURSS-LESSONS-LV2-0036 | lesson1TrainingCardsEs[5].front | Sí, van. | LABOT | Sí, se van. |
| ES-KURSS-LESSONS-LV2-0037 | lesson1TrainingCardsEs[9].front | Vas a ir | LABOT | ¿Vais? |

## 2. izmaiņas

| Audit ID | Faktiskais main CURRENT | Rebased | OWNER izvērtējums |
|---|---|---|---|
| ES-KURSS-LESSONS-STR-L01 | inline:8944 | NĒ | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0001 | ellos / ellas vienen | JĀ | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0002 | ♟gehen — ir | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ♟gehen — go |
| ES-KURSS-LESSONS-DET-0003 | ellos / ellas van | JĀ | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0004 | ellos / ellas están de pie | JĀ | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0005 | ellos / ellas cantan | JĀ | Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows. |
| ES-KURSS-LESSONS-DET-0006 | wir (vīr) — nosotros | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wir (vīr) — we |
| ES-KURSS-LESSONS-DET-0007 | En la palabra «wir», la vocal i se pronuncia larga. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vārdā “wir” burts i tiek izrunāts gari. |
| ES-KURSS-LESSONS-DET-0008 | gehen (gē-en) — ir | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0009 | stehen (štē-en) — estar de pie | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: stehen (štē-en) - stand |
| ES-KURSS-LESSONS-DET-0010 | du (dū) kommst — tú vienes | NĒ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0011 | er (ēr) kommt — él viene | NĒ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0012 | sie (zī) kommt — ella viene | NĒ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0013 | wer (vēr) — ¿quién? | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0014 | ja (jā) — Sí | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0015 | En las lecciones se indica la pronunciación aproximada de las palabras entre paréntesis. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās. |
| ES-KURSS-LESSONS-DET-0016 | wir (vīr) — nosotros | JĀ | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0017 | En español:<br>Tú vienes.<br>¿Vienes? | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Latviešu valodā:<br>Tu nāc.<br>Vai tu nāc? |
| ES-KURSS-LESSONS-DET-0018 | Albert y Martha van y vienen. | NĒ | DE source uses Marta; ES should match canonical name. |
| ES-KURSS-LESSONS-DET-0019 | Lección {lesson} · Traducir: {current} / {total} | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0001 | nosotros venimos | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: nosotros ven |
| ES-KURSS-LESSONS-LV2-0002 | vosotros venís | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú vienes |
| ES-KURSS-LESSONS-LV2-0005 | he / ella va | NĒ | «he» es un error ortográfico/ de texto; el pronombre masculino correcto es «él». |
| ES-KURSS-LESSONS-LV2-0006 | vosotros vais | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú ejat |
| ES-KURSS-LESSONS-LV2-0008 | ♟stehen — estar de pie | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ♟stehen — pararse |
| ES-KURSS-LESSONS-LV2-0009 | yo estoy de pie | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0010 | vosotros estáis de pie | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú estás de pie |
| ES-KURSS-LESSONS-LV2-0012 | ♟singen — cantar | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0013 | vosotros cantáis | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: tú cantas |
| ES-KURSS-LESSONS-LV2-0015 | iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.<br>Esto también debería seguirse en futuras conferencias. | NĒ | Contiene el error tipográfico «iEl La» y «conferencias» no es natural en el contexto de un curso; debe decir «lecciones». |
| ES-KURSS-LESSONS-LV2-0019 | singen (zingen) — cantar | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: singen (zingen) — canta |
| ES-KURSS-LESSONS-LV2-0023 | ich → -ich komme | NĒ | Hay un guion espurio pegado al ejemplo alemán, que altera la presentación de la correspondencia. |
| ES-KURSS-LESSONS-LV2-0024 | du → -du kommst | NĒ | Hay un guion espurio pegado al ejemplo alemán. |
| ES-KURSS-LESSONS-LV2-0025 | er / sie → -er kommt | NĒ | Hay un guion espurio pegado al ejemplo alemán. |
| ES-KURSS-LESSONS-LV2-0026 | wir → -wir kommen | NĒ | Hay un guion espurio pegado al ejemplo alemán. |
| ES-KURSS-LESSONS-LV2-0027 | ihr → -En letón: | NĒ | LV text confirmed in ES learner-facing field; DE context checked. |
| ES-KURSS-LESSONS-LV2-0028 | sie → -Alemán en: | NĒ | LV text confirmed in ES learner-facing field; DE context checked. |
| ES-KURSS-LESSONS-LV2-0030 | ♟Presente terminaciones | NĒ | El orden de las palabras no es natural en español; debe decir «Terminaciones del presente». |
| ES-KURSS-LESSONS-LV2-0031 | ?Oraciones de preguntas | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0032 | ♣Diferencia de persona | NĒ | «Diferencia de persona» suena poco natural y ambiguo como encabezado gramatical. |
| ES-KURSS-LESSONS-LV2-0033 | Elimina -en del infinitivo y añade la terminación personal.<br>Ejemplo: kommen → komm- + terminación.<br>kommen = infinitivo. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Eliminar -en de las formas base del verbo y agrega la terminación.<br>Ejemplo: kommen → komm + terminación<br>kommenforma base |
| ES-KURSS-LESSONS-LV2-0034 | Elimina -en del infinitivo y añade la terminación personal. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Eliminar -en de las formas base del verbo y agrega la terminación. |
| ES-KURSS-LESSONS-LV2-0035 | ¿vienes? | NĒ | Como oración independiente, debe escribirse con mayúscula inicial. |
| ES-KURSS-LESSONS-LV2-0036 | Sí, van. | NĒ | La respuesta no conserva el valor pronominal de «Se van?»; «Sí, van» sugiere que van a algún lugar, no necesariamente que se marchan. |
| ES-KURSS-LESSONS-LV2-0037 | Vas a ir | NĒ | El texto actual es una afirmación en segunda persona singular y expresa una perífrasis de futuro, mientras que el contexto alemán es una pregunta dirigida a varias personas. |

## 3. Gala rezultāts

| Audit ID | File | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L01 |  | COURSE_LESSON_DATA.kurssLesson1.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson1 | inline:8944 |  | **TECHNICAL_DEFER** |
| ES-KURSS-LESSONS-DET-0001 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas vienen | ellos / tú vienes | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0002 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟gehen — ir |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0003 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas van | ellos / tú vas | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0004 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas están de pie | ellos / Tú estás | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0005 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ellos / ellas cantan | ellos / tú cantas | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0006 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wir (vīr) — nosotros |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0007 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | En la palabra «wir», la vocal i se pronuncia larga. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0008 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | gehen (gē-en) — ir | gehen (gē-en) - ir | **NELABOT** |
| ES-KURSS-LESSONS-DET-0009 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | stehen (štē-en) — estar de pie |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0010 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | du (dū) kommst — tú vienes | du (dū) kommst — tú vienes | **NELABOT** |
| ES-KURSS-LESSONS-DET-0011 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | er (ēr) kommt — él viene | er (ēr) kommt — él viene | **NELABOT** |
| ES-KURSS-LESSONS-DET-0012 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | sie (zī) kommt — ella viene | sie (zī) kommt — ella viene | **NELABOT** |
| ES-KURSS-LESSONS-DET-0013 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wer (vēr) — ¿quién? | wer (vēr) — ¿qué? | **NELABOT** |
| ES-KURSS-LESSONS-DET-0014 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ja (jā) — Sí | ja (jā) — sí | **NELABOT** |
| ES-KURSS-LESSONS-DET-0015 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | En las lecciones se indica la pronunciación aproximada de las palabras entre paréntesis. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0016 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wir (vīr) — nosotros | Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga. | **NELABOT** |
| ES-KURSS-LESSONS-DET-0017 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | En español:<br>Tú vienes.<br>¿Vienes? |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0018 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[10].front | Albert y Martha van y vienen. | Albert y Marta van y vienen. | **LABOT** |
| ES-KURSS-LESSONS-DET-0019 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | Lección {lesson} · Traducir: {current} / {total} | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0001 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | nosotros venimos |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0002 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros venís |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0005 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | he / ella va | él / ella va | **LABOT** |
| ES-KURSS-LESSONS-LV2-0006 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros vais |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0008 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟stehen — estar de pie |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0009 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | yo estoy de pie | I stand | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0010 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros estáis de pie |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0012 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟singen — cantar | ♟singen — to canta | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0013 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | vosotros cantáis |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0015 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.<br>Esto también debería seguirse en futuras conferencias. | La pronunciación aproximada de las palabras se indica entre paréntesis mediante una transcripción adaptada al español.\nEste criterio debe mantenerse también en las lecciones posteriores. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0019 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | singen (zingen) — cantar |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0023 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ich → -ich komme | ich → ich komme | **LABOT** |
| ES-KURSS-LESSONS-LV2-0024 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | du → -du kommst | du → du kommst | **LABOT** |
| ES-KURSS-LESSONS-LV2-0025 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | er / sie → -er kommt | er / sie → er kommt | **LABOT** |
| ES-KURSS-LESSONS-LV2-0026 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | wir → -wir kommen | wir → wir kommen | **LABOT** |
| ES-KURSS-LESSONS-LV2-0027 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ihr → -En letón: | ihr → ihr kommt | **LABOT** |
| ES-KURSS-LESSONS-LV2-0028 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | sie → -Alemán en: | sie → sie kommen | **LABOT** |
| ES-KURSS-LESSONS-LV2-0030 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♟Presente terminaciones | ♟ Terminaciones del presente | **LABOT** |
| ES-KURSS-LESSONS-LV2-0031 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ?Oraciones de preguntas | ?Oraciones interrogativas | **LABOT** |
| ES-KURSS-LESSONS-LV2-0032 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | ♣Diferencia de persona | ♣Diferencias según la persona | **LABOT** |
| ES-KURSS-LESSONS-LV2-0033 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | Elimina -en del infinitivo y añade la terminación personal.<br>Ejemplo: kommen → komm- + terminación.<br>kommen = infinitivo. |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0034 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson1.legacyHtml | Elimina -en del infinitivo y añade la terminación personal. |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0035 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[0].front | ¿vienes? | ¿Vienes? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0036 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[5].front | Sí, van. | Sí, se van. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0037 | data/es/courseTrainingCards.js | lesson1TrainingCardsEs[9].front | Vas a ir | ¿Vais? | **LABOT** |

## Cursor COPY/PASTE targets

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-DET-0018",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[10].front",
    "path": "lesson1TrainingCardsEs[10].front",
    "current": "Albert y Martha van y vienen.",
    "new": "Albert y Marta van y vienen.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0005",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[5]",
    "current": "he / ella va",
    "new": "él / ella va",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0015",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → lesson1-info[0]",
    "current": "iEl La pronunciación aproximada de las palabras se da entre paréntesis con letras letonas.\nEsto también debería seguirse en futuras conferencias.",
    "new": "La pronunciación aproximada de las palabras se indica entre paréntesis mediante una transcripción adaptada al español.\\nEste criterio debe mantenerse también en las lecciones posteriores.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0023",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[4]",
    "current": "ich → -ich komme",
    "new": "ich → ich komme",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0024",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[5]",
    "current": "du → -du kommst",
    "new": "du → du kommst",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0025",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[6]",
    "current": "er / sie → -er kommt",
    "new": "er / sie → er kommt",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0026",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[7]",
    "current": "wir → -wir kommen",
    "new": "wir → wir kommen",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0027",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[8]",
    "current": "ihr → -En letón:",
    "new": "ihr → ihr kommt",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0028",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[9]",
    "current": "sie → -Alemán en:",
    "new": "sie → sie kommen",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0030",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[1]",
    "current": "♟Presente terminaciones",
    "new": "♟ Terminaciones del presente",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0031",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[3]",
    "current": "?Oraciones de preguntas",
    "new": "?Oraciones interrogativas",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0032",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → grammar-header[4]",
    "current": "♣Diferencia de persona",
    "new": "♣Diferencias según la persona",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0035",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[0].front",
    "path": "lesson1TrainingCardsEs[0].front",
    "current": "¿vienes?",
    "new": "¿Vienes?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0036",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[5].front",
    "path": "lesson1TrainingCardsEs[5].front",
    "current": "Sí, van.",
    "new": "Sí, se van.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0037",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson1TrainingCardsEs[9].front",
    "path": "lesson1TrainingCardsEs[9].front",
    "current": "Vas a ir",
    "new": "¿Vais?",
    "status": "LABOT"
  }
]
```

COPY-ONLY: main faktiskajai vērtībai precīzi jāsakrīt ar `CURRENT`; neatbilstība = SKIP. DE laukus nemainīt.
