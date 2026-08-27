# ES Kurss — Lekcija 3 — OWNER gala lēmumi

**Main:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Atradumi:** 70 · **LABOT:** 17 · **NELABOT:** 40 · **FALSE_POSITIVE:** 12 · **TECHNICAL_DEFER:** 1 · **Rebased:** 46

## 1. Oriģinālais

| Audit ID | Path | Audita CURRENT | Audita statuss | Audita NEW |
|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L03 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson3 | inline:7121 | TECHNICAL_DEFER |  |
| ES-KURSS-LESSONS-DET-0026 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[0]:Diálogos/oraciones (summary title) | Diálogos/oraciones | FALSE_POSITIVE | Diálogos/oraciones |
| ES-KURSS-LESSONS-DET-0027 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[7] | eine Bank — ¿hay/hay un libro aquí? | NELABOT | eine Bank — ¿hay/hay un libro aquí? |
| ES-KURSS-LESSONS-DET-0028 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[0] | niedrig — El sonido ī largo en alemán está representado por ie: liegen (līgen), hier (hīr), wie (vī). | LABOT | niedrig — En alemán, el sonido largo ī se representa mediante ie: liegen (līgen), hier (hīr), wie (vī). |
| ES-KURSS-LESSONS-DET-0029 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[2] | Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī). | LABOT | En alemán, el sonido largo ī se representa mediante ie: liegen (līgen), hier (hīr), wie (vī). |
| ES-KURSS-LESSONS-DET-0030 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[3] | ck ir divkāršs k: dick (dikk). | LABOT | ck representa una k doble: dick (dikk). |
| ES-KURSS-LESSONS-DET-0031 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[0] | Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas. | LABOT | En los adjetivos y adverbios, la terminación es -e. |
| ES-KURSS-LESSONS-DET-0032 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[2] | Ar wer? jautā pēc personām. | LABOT | Con wer? se pregunta por personas. |
| ES-KURSS-LESSONS-DET-0033 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[3] | Ar was? jautā pēc priekšmetiem. | LABOT | Con was? se pregunta por objetos. |
| ES-KURSS-LESSONS-DET-0034 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[6] | vīriešu kārta — das | LABOT | masculino — das |
| ES-KURSS-LESSONS-DET-0035 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[7] | sieviešu kārta — Plural definido el article para las tres rondas es morir. | LABOT | femenino — die |
| ES-KURSS-LESSONS-DET-0037 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[8] | vidējā kārta — die Tische | LABOT | neutro — die Tische |
| ES-KURSS-LESSONS-DET-0038 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[9] | Daudzskaitlī noteiktais artikuls visām trim kārtām ir die. | LABOT | En plural, el artículo definido para los tres géneros es die. |
| ES-KURSS-LESSONS-DET-0039 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[13] | vīriešu kārta — ein | LABOT | masculino — ein |
| ES-KURSS-LESSONS-DET-0040 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[14] | sieviešu kārta — El indefinido el article no tiene plural. | LABOT | femenino — El artículo indefinido no tiene plural. |
| ES-KURSS-LESSONS-DET-0042 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[15] | vidējā kārta — Tische | LABOT | neutro — Tische |
| ES-KURSS-LESSONS-DET-0043 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[16] | Nenoteiktajam artikulam daudzskaitļa nav. | LABOT | El artículo indefinido no tiene plural. |
| ES-KURSS-LESSONS-DET-0044 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[21] | Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:<br>der Tisch steht<br>die Bank steht | LABOT | En alemán, cuando se habla de objetos que están en posición vertical, se dice que el objeto está de pie:<br>der Tisch steht<br>die Bank steht |
| ES-KURSS-LESSONS-DET-0045 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[0] | El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente. | NELABOT | El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente. |
| ES-KURSS-LESSONS-DET-0046 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[4] | 5stehen / liegen / hängen | NELABOT | 5stehen / liegen / hängen |
| ES-KURSS-LESSONS-DET-0047 | kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | FALSE_POSITIVE | Lección {lesson} · Traducir: {current} / {total} |
| ES-KURSS-LESSONS-LV2-0064 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[0] | wer — aquí | LABOT | wer — quién |
| ES-KURSS-LESSONS-LV2-0065 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[1] | was — allí | LABOT | was — qué |
| ES-KURSS-LESSONS-LV2-0066 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[2] | hier — der Tisch table | LABOT | hier — aquí |
| ES-KURSS-LESSONS-LV2-0067 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[3] | dort — mesa | LABOT | dort — allí |
| ES-KURSS-LESSONS-LV2-0068 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[4] | der Tisch — banco | LABOT | der Tisch — la mesa |
| ES-KURSS-LESSONS-LV2-0069 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[5] | ein Tisch — banco | LABOT | ein Tisch — una mesa |
| ES-KURSS-LESSONS-LV2-0070 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[6] | die Bank — tumbado | LABOT | die Bank — el banco |
| ES-KURSS-LESSONS-LV2-0072 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[8] | liegen — un libro | LABOT | liegen — estar tumbado |
| ES-KURSS-LESSONS-LV2-0073 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[9] | liegt hier ein Buch? — un libro | LABOT | liegt hier ein Buch? — ¿Hay un libro aquí? |
| ES-KURSS-LESSONS-LV2-0074 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[10] | das Buch — hang | FALSE_POSITIVE | das Buch — hang |
| ES-KURSS-LESSONS-LV2-0075 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[11] | ein Buch — imagen | LABOT | ein Buch — un libro |
| ES-KURSS-LESSONS-LV2-0076 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[12] | hängen — imagen | LABOT | hängen — estar colgado |
| ES-KURSS-LESSONS-LV2-0077 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[13] | das Bild — pizarra | LABOT | das Bild — la imagen |
| ES-KURSS-LESSONS-LV2-0078 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[14] | ein Bild — pizarra | LABOT | ein Bild — una imagen |
| ES-KURSS-LESSONS-LV2-0079 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[15] | die Tafel — alguien, qué | LABOT | die Tafel — la pizarra |
| ES-KURSS-LESSONS-LV2-0080 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[16] | eine Tafel — es | LABOT | eine Tafel — una pizarra |
| ES-KURSS-LESSONS-LV2-0081 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[17] | wie — grueso, gordo | LABOT | wie — cómo |
| ES-KURSS-LESSONS-LV2-0082 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[18] | ist — cuaderno | LABOT | ist — es |
| ES-KURSS-LESSONS-LV2-0083 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[19] | dick — cuaderno | LABOT | dick — grueso |
| ES-KURSS-LESSONS-LV2-0084 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[20] | das Heft — delgado, delgado | LABOT | das Heft — el cuaderno |
| ES-KURSS-LESSONS-LV2-0085 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[21] | ein Heft — bajo | LABOT | ein Heft — un cuaderno |
| ES-KURSS-LESSONS-LV2-0086 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[22] | dünn — alto | LABOT | dünn — delgado |
| ES-KURSS-LESSONS-LV2-0087 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → course-example[0] | wer - qué | LABOT | wer — quién |
| ES-KURSS-LESSONS-LV2-0091 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[1] | Ja galotne -¿Ar qué? pregunta por temas. | LABOT | Si la terminación es -… |
| ES-KURSS-LESSONS-LV2-0098 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[10] | der Tisch — die Hefte | FALSE_POSITIVE | der Tisch — die Hefte |
| ES-KURSS-LESSONS-LV2-0099 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[11] | die Bank — ein | FALSE_POSITIVE | die Bank — ein |
| ES-KURSS-LESSONS-LV2-0100 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[12] | das Heft — eine | FALSE_POSITIVE | das Heft — eine |
| ES-KURSS-LESSONS-LV2-0105 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[17] | ein Tisch — Hans spielt, aber Marie singt. | FALSE_POSITIVE | ein Tisch — Hans spielt, aber Marie singt. |
| ES-KURSS-LESSONS-LV2-0106 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[18] | ein Heft — Hier hängt eine Karte. | FALSE_POSITIVE | ein Heft — Hier hängt eine Karte. |
| ES-KURSS-LESSONS-LV2-0107 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[19] | Hans spielt, aber Marie singt. | FALSE_POSITIVE | Hans spielt, aber Marie singt. |
| ES-KURSS-LESSONS-LV2-0108 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[20] | Hier hängt eine Karte. | FALSE_POSITIVE | Hier hängt eine Karte. |
| ES-KURSS-LESSONS-LV2-0111 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[1] | En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida. | LABOT | En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce. |
| ES-KURSS-LESSONS-LV2-0112 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[2] | Sin artículos delante de nombres propios. | LABOT | No se usan artículos delante de los nombres propios. |
| ES-KURSS-LESSONS-LV2-0113 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[3] | En una oración narrativa, el verbo ocupa el segundo lugar. | LABOT | En una oración enunciativa, el verbo ocupa la segunda posición. |
| ES-KURSS-LESSONS-LV2-0114 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[0] | 1Sujeto de la oración | LABOT | 1. Sujeto de la oración |
| ES-KURSS-LESSONS-LV2-0115 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[1] | 2Artículos | LABOT | 2. Artículos |
| ES-KURSS-LESSONS-LV2-0116 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[2] | 3Sustantivos propios | LABOT | 3. Sustantivos propios |
| ES-KURSS-LESSONS-LV2-0117 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[3] | 4Lugar del verbo | LABOT | 4. Lugar del verbo |
| ES-KURSS-LESSONS-LV2-0118 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[0] | Noteiktais artikuls | FALSE_POSITIVE | Noteiktais artikuls |
| ES-KURSS-LESSONS-LV2-0119 | COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → subtitle[1] | Nenoteiktais artikuls | FALSE_POSITIVE | Nenoteiktais artikuls |
| ES-KURSS-LESSONS-LV2-0120 | lesson3TrainingCardsEs[0].front | ¿cuentas? | LABOT | ¿Cuentas? |
| ES-KURSS-LESSONS-LV2-0121 | lesson3TrainingCardsEs[2].front | ¿Quién está parado ahí? | LABOT | ¿Qué hay ahí? |
| ES-KURSS-LESSONS-LV2-0122 | lesson3TrainingCardsEs[3].front | Hay una mesa. | LABOT | Allí hay una mesa. |
| ES-KURSS-LESSONS-LV2-0123 | lesson3TrainingCardsEs[4].front | ¿Quién está aquí? | LABOT | ¿Qué hay aquí? |
| ES-KURSS-LESSONS-LV2-0124 | lesson3TrainingCardsEs[5].front | Aquí está el libro. | LABOT | Aquí hay un libro. |
| ES-KURSS-LESSONS-LV2-0125 | lesson3TrainingCardsEs[8].front | ¿Cuál es el plan? | LABOT | ¿Qué es delgado? |
| ES-KURSS-LESSONS-LV2-0126 | lesson3TrainingCardsEs[9].front | El buzón es delgado. | LABOT | El cuaderno es delgado. |
| ES-KURSS-LESSONS-LV2-0127 | lesson3TrainingCardsEs[14].front | ¿Hay/hay un cuaderno? | LABOT | ¿Hay allí un cuaderno? |
| ES-KURSS-LESSONS-LV2-0128 | lesson3TrainingCardsEs[15].front | Sí, hay un cuaderno. | LABOT | Sí, allí hay un cuaderno. |

## 2. izmaiņas

| Audit ID | Faktiskais main CURRENT | Rebased | OWNER izvērtējums |
|---|---|---|---|
| ES-KURSS-LESSONS-STR-L03 | inline:7121 | NĒ | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0026 | Diálogos/oraciones | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0027 | eine Bank — banco | JĀ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0028 | niedrig — bajo | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: niedrig — El sonido ī largo en alemán está representado por ie: liegen (līgen), hier (hīr), wie (vī). |
| ES-KURSS-LESSONS-DET-0029 | En alemán, el sonido i largo suele escribirse ie: liegen (līgen), hier (hīr), wie (vī). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī). |
| ES-KURSS-LESSONS-DET-0030 | ck representa un sonido k breve tras una vocal corta: dick (dik). | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ck ir divkāršs k: dick (dikk). |
| ES-KURSS-LESSONS-DET-0031 | Con wer? se pregunta por personas. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas. |
| ES-KURSS-LESSONS-DET-0032 | Con wer? se pregunta por personas. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ar wer? jautā pēc personām. |
| ES-KURSS-LESSONS-DET-0033 | Con was? se pregunta por cosas. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ar was? jautā pēc priekšmetiem. |
| ES-KURSS-LESSONS-DET-0034 | género masculino — der | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vīriešu kārta — das |
| ES-KURSS-LESSONS-DET-0035 | género femenino — die | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: sieviešu kārta — Plural definido el article para las tres rondas es morir. |
| ES-KURSS-LESSONS-DET-0037 | género neutro — das | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vidējā kārta — die Tische |
| ES-KURSS-LESSONS-DET-0038 | En plural, el artículo definido de los tres géneros es die. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Daudzskaitlī noteiktais artikuls visām trim kārtām ir die. |
| ES-KURSS-LESSONS-DET-0039 | género masculino — ein | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vīriešu kārta — ein |
| ES-KURSS-LESSONS-DET-0040 | género femenino — eine | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: sieviešu kārta — El indefinido el article no tiene plural. |
| ES-KURSS-LESSONS-DET-0042 | género neutro — ein | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vidējā kārta — Tische |
| ES-KURSS-LESSONS-DET-0043 | El artículo indefinido no tiene plural. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Nenoteiktajam artikulam daudzskaitļa nav. |
| ES-KURSS-LESSONS-DET-0044 | En alemán se usa stehen para objetos que están en posición vertical:<br>der Tisch steht<br>die Bank steht | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:<br>der Tisch steht<br>die Bank steht |
| ES-KURSS-LESSONS-DET-0045 | El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente. | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0046 | 5stehen / liegen / hängen | NĒ | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0047 | Lección {lesson} · Traducir: {current} / {total} | NĒ | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0064 | wer — quién | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wer — aquí |
| ES-KURSS-LESSONS-LV2-0065 | was — qué | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: was — allí |
| ES-KURSS-LESSONS-LV2-0066 | hier — aquí | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: hier — der Tisch table |
| ES-KURSS-LESSONS-LV2-0067 | dort — allá | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: dort — mesa |
| ES-KURSS-LESSONS-LV2-0068 | der Tisch — mesa | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Tisch — banco |
| ES-KURSS-LESSONS-LV2-0069 | ein Tisch — mesa | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Tisch — banco |
| ES-KURSS-LESSONS-LV2-0070 | die Bank — banco | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Bank — tumbado |
| ES-KURSS-LESSONS-LV2-0072 | liegen — estar tumbado | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: liegen — un libro |
| ES-KURSS-LESSONS-LV2-0073 | ¿Hay un libro aquí? | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: liegt hier ein Buch? — un libro |
| ES-KURSS-LESSONS-LV2-0074 | das Buch — libro | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0075 | ein Buch — libro | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Buch — imagen |
| ES-KURSS-LESSONS-LV2-0076 | hängen — colgar | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: hängen — imagen |
| ES-KURSS-LESSONS-LV2-0077 | das Bild — imagen | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Bild — pizarra |
| ES-KURSS-LESSONS-LV2-0078 | ein Bild — imagen | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Bild — pizarra |
| ES-KURSS-LESSONS-LV2-0079 | die Tafel — pizarra | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Tafel — alguien, qué |
| ES-KURSS-LESSONS-LV2-0080 | eine Tafel — una pizarra | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: eine Tafel — es |
| ES-KURSS-LESSONS-LV2-0081 | wie — cómo | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wie — grueso, gordo |
| ES-KURSS-LESSONS-LV2-0082 | ist — cuaderno | NĒ | «ist» es la forma de tercera persona singular de «sein» y significa «es» o «está», no «cuaderno». |
| ES-KURSS-LESSONS-LV2-0083 | dick — grueso | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: dick — cuaderno |
| ES-KURSS-LESSONS-LV2-0084 | das Heft — cuaderno | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Heft — delgado, delgado |
| ES-KURSS-LESSONS-LV2-0085 | ein Heft — cuaderno | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Heft — bajo |
| ES-KURSS-LESSONS-LV2-0086 | dünn — delgado | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: dünn — alto |
| ES-KURSS-LESSONS-LV2-0087 | wer — quién | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wer - qué |
| ES-KURSS-LESSONS-LV2-0091 | Con was? se pregunta por cosas. | JĀ | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ja galotne -¿Ar qué? pregunta por temas. |
| ES-KURSS-LESSONS-LV2-0098 | der Tisch — mesa | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0099 | die Bank — banco | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0100 | das Heft — cuaderno | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0105 | ein Tisch — mesa | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0106 | ein Heft — cuaderno | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0107 | Hans spielt, aber Marie singt. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0108 | Hier hängt eine Karte. | NĒ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0111 | En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida. | NĒ | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0112 | Sin artículos delante de nombres propios. | NĒ | La versión actual es un fragmento telegráfico; la propuesta es más natural como nota gramatical. |
| ES-KURSS-LESSONS-LV2-0113 | En una oración narrativa, el verbo ocupa el segundo lugar. | NĒ | «Narrativa» no corresponde al sentido gramatical de una oración declarativa/enunciativa. |
| ES-KURSS-LESSONS-LV2-0114 | 1Sujeto de la oración | NĒ | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0115 | 2Artículos | NĒ | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0116 | 3Sustantivos propios | NĒ | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0117 | 4Lugar del verbo | NĒ | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0118 | Artículo definido | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0119 | Artículo indefinido | JĀ | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0120 | ¿cuentas? | NĒ | La primera palabra de una pregunta independiente debe comenzar con mayúscula. |
| ES-KURSS-LESSONS-LV2-0121 | ¿Quién está parado ahí? | NĒ | Was steht dort? pregunta por una cosa, no por una persona; «quién» es incorrecto. |
| ES-KURSS-LESSONS-LV2-0122 | Hay una mesa. | NĒ | La traducción omite el adverbio de lugar «dort». |
| ES-KURSS-LESSONS-LV2-0123 | ¿Quién está aquí? | NĒ | Was liegt hier? pregunta por una cosa, no por una persona; «quién» es incorrecto. |
| ES-KURSS-LESSONS-LV2-0124 | Aquí está el libro. | NĒ | El original usa un artículo indefinido, pero la versión actual usa «el», que cambia el significado. |
| ES-KURSS-LESSONS-LV2-0125 | ¿Cuál es el plan? | NĒ | La traducción no corresponde a Was ist dünn? y cambia completamente el significado. |
| ES-KURSS-LESSONS-LV2-0126 | El buzón es delgado. | NĒ | Heft significa «cuaderno», no «buzón». |
| ES-KURSS-LESSONS-LV2-0127 | ¿Hay/hay un cuaderno? | NĒ | La expresión «Hay/hay» es un duplicado y resulta antinatural; además, conviene reflejar el lugar indicado por dort. |
| ES-KURSS-LESSONS-LV2-0128 | Sí, hay un cuaderno. | NĒ | La traducción omite el adverbio de lugar «dort». |

## 3. Gala rezultāts

| Audit ID | File | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L03 |  | COURSE_LESSON_DATA.kurssLesson3.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson3 | inline:7121 |  | **TECHNICAL_DEFER** |
| ES-KURSS-LESSONS-DET-0026 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Diálogos/oraciones | Diálogos/oraciones | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-DET-0027 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | eine Bank — banco | eine Bank — ¿hay/hay un libro aquí? | **NELABOT** |
| ES-KURSS-LESSONS-DET-0028 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | niedrig — bajo |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0029 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En alemán, el sonido i largo suele escribirse ie: liegen (līgen), hier (hīr), wie (vī). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0030 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ck representa un sonido k breve tras una vocal corta: dick (dik). |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0031 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con wer? se pregunta por personas. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0032 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con wer? se pregunta por personas. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0033 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con was? se pregunta por cosas. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0034 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género masculino — der |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0035 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género femenino — die |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0037 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género neutro — das |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0038 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En plural, el artículo definido de los tres géneros es die. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0039 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género masculino — ein |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0040 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género femenino — eine |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0042 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género neutro — ein |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0043 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | El artículo indefinido no tiene plural. |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0044 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En alemán se usa stehen para objetos que están en posición vertical:<br>der Tisch steht<br>die Bank steht |  | **NELABOT** |
| ES-KURSS-LESSONS-DET-0045 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente. | El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente. | **NELABOT** |
| ES-KURSS-LESSONS-DET-0046 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 5stehen / liegen / hängen | 5stehen / liegen / hängen | **NELABOT** |
| ES-KURSS-LESSONS-DET-0047 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} | Lección {lesson} · Traducir: {current} / {total} | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0064 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | wer — quién |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0065 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | was — qué |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0066 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | hier — aquí |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0067 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | dort — allá |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0068 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | der Tisch — mesa |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0069 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Tisch — mesa |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0070 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | die Bank — banco |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0072 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | liegen — estar tumbado |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0073 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ¿Hay un libro aquí? |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0074 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Buch — libro | das Buch — hang | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0075 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Buch — libro |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0076 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | hängen — colgar |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0077 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Bild — imagen |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0078 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Bild — imagen |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0079 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | die Tafel — pizarra |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0080 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | eine Tafel — una pizarra |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0081 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | wie — cómo |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0082 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ist — cuaderno | ist — es | **LABOT** |
| ES-KURSS-LESSONS-LV2-0083 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | dick — grueso |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0084 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Heft — cuaderno |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0085 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Heft — cuaderno |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0086 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | dünn — delgado |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0087 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | wer — quién |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0091 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con was? se pregunta por cosas. |  | **NELABOT** |
| ES-KURSS-LESSONS-LV2-0098 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | der Tisch — mesa | der Tisch — die Hefte | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0099 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | die Bank — banco | die Bank — ein | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0100 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Heft — cuaderno | das Heft — eine | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0105 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Tisch — mesa | ein Tisch — Hans spielt, aber Marie singt. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0106 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Heft — cuaderno | ein Heft — Hier hängt eine Karte. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0107 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Hans spielt, aber Marie singt. | Hans spielt, aber Marie singt. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0108 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Hier hängt eine Karte. | Hier hängt eine Karte. | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0111 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida. | En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0112 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Sin artículos delante de nombres propios. | No se usan artículos delante de los nombres propios. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0113 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En una oración narrativa, el verbo ocupa el segundo lugar. | En una oración enunciativa, el verbo ocupa la segunda posición. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0114 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 1Sujeto de la oración | 1. Sujeto de la oración | **LABOT** |
| ES-KURSS-LESSONS-LV2-0115 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 2Artículos | 2. Artículos | **LABOT** |
| ES-KURSS-LESSONS-LV2-0116 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 3Sustantivos propios | 3. Sustantivos propios | **LABOT** |
| ES-KURSS-LESSONS-LV2-0117 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 4Lugar del verbo | 4. Lugar del verbo | **LABOT** |
| ES-KURSS-LESSONS-LV2-0118 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Artículo definido | Noteiktais artikuls | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0119 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Artículo indefinido | Nenoteiktais artikuls | **FALSE_POSITIVE** |
| ES-KURSS-LESSONS-LV2-0120 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[0].front | ¿cuentas? | ¿Cuentas? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0121 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[2].front | ¿Quién está parado ahí? | ¿Qué hay ahí? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0122 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[3].front | Hay una mesa. | Allí hay una mesa. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0123 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[4].front | ¿Quién está aquí? | ¿Qué hay aquí? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0124 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[5].front | Aquí está el libro. | Aquí hay un libro. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0125 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[8].front | ¿Cuál es el plan? | ¿Qué es delgado? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0126 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[9].front | El buzón es delgado. | El cuaderno es delgado. | **LABOT** |
| ES-KURSS-LESSONS-LV2-0127 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[14].front | ¿Hay/hay un cuaderno? | ¿Hay allí un cuaderno? | **LABOT** |
| ES-KURSS-LESSONS-LV2-0128 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[15].front | Sí, hay un cuaderno. | Sí, allí hay un cuaderno. | **LABOT** |

## Cursor COPY/PASTE targets

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0082",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[18]",
    "current": "ist — cuaderno",
    "new": "ist — es",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0111",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[1]",
    "current": "En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida.",
    "new": "En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0112",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[2]",
    "current": "Sin artículos delante de nombres propios.",
    "new": "No se usan artículos delante de los nombres propios.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0113",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[3]",
    "current": "En una oración narrativa, el verbo ocupa el segundo lugar.",
    "new": "En una oración enunciativa, el verbo ocupa la segunda posición.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0114",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[0]",
    "current": "1Sujeto de la oración",
    "new": "1. Sujeto de la oración",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0115",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[1]",
    "current": "2Artículos",
    "new": "2. Artículos",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0116",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[2]",
    "current": "3Sustantivos propios",
    "new": "3. Sustantivos propios",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0117",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[3]",
    "current": "4Lugar del verbo",
    "new": "4. Lugar del verbo",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0120",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[0].front",
    "path": "lesson3TrainingCardsEs[0].front",
    "current": "¿cuentas?",
    "new": "¿Cuentas?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0121",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[2].front",
    "path": "lesson3TrainingCardsEs[2].front",
    "current": "¿Quién está parado ahí?",
    "new": "¿Qué hay ahí?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0122",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[3].front",
    "path": "lesson3TrainingCardsEs[3].front",
    "current": "Hay una mesa.",
    "new": "Allí hay una mesa.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0123",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[4].front",
    "path": "lesson3TrainingCardsEs[4].front",
    "current": "¿Quién está aquí?",
    "new": "¿Qué hay aquí?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0124",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[5].front",
    "path": "lesson3TrainingCardsEs[5].front",
    "current": "Aquí está el libro.",
    "new": "Aquí hay un libro.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0125",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[8].front",
    "path": "lesson3TrainingCardsEs[8].front",
    "current": "¿Cuál es el plan?",
    "new": "¿Qué es delgado?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0126",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[9].front",
    "path": "lesson3TrainingCardsEs[9].front",
    "current": "El buzón es delgado.",
    "new": "El cuaderno es delgado.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0127",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[14].front",
    "path": "lesson3TrainingCardsEs[14].front",
    "current": "¿Hay/hay un cuaderno?",
    "new": "¿Hay allí un cuaderno?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0128",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson3TrainingCardsEs[15].front",
    "path": "lesson3TrainingCardsEs[15].front",
    "current": "Sí, hay un cuaderno.",
    "new": "Sí, allí hay un cuaderno.",
    "status": "LABOT"
  }
]
```

COPY-ONLY: main faktiskajai vērtībai precīzi jāsakrīt ar `CURRENT`; neatbilstība = SKIP. DE laukus nemainīt.
