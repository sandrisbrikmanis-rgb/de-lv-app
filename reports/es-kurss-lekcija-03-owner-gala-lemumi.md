# ES Kurss — Lekcija 3 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 70 · **LABOT:** 17 · **NELABOT:** 40 · **FALSE_POSITIVE:** 12 · **TECHNICAL_DEFER:** 1

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L03 |  | COURSE_LESSON_DATA.kurssLesson3.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson3 | inline:7121 |  | **TECHNICAL_DEFER** | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0026 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Diálogos/oraciones |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0027 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | eine Bank — banco |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0028 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | niedrig — bajo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: niedrig — El sonido ī largo en alemán está representado por ie: liegen (līgen), hier (hīr), wie (vī). |
| ES-KURSS-LESSONS-DET-0029 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En alemán, el sonido i largo suele escribirse ie: liegen (līgen), hier (hīr), wie (vī). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī). |
| ES-KURSS-LESSONS-DET-0030 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ck representa un sonido k breve tras una vocal corta: dick (dik). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ck ir divkāršs k: dick (dikk). |
| ES-KURSS-LESSONS-DET-0031 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con wer? se pregunta por personas. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas. |
| ES-KURSS-LESSONS-DET-0032 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con wer? se pregunta por personas. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ar wer? jautā pēc personām. |
| ES-KURSS-LESSONS-DET-0033 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con was? se pregunta por cosas. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ar was? jautā pēc priekšmetiem. |
| ES-KURSS-LESSONS-DET-0034 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género masculino — der |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vīriešu kārta — das |
| ES-KURSS-LESSONS-DET-0035 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género femenino — die |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: sieviešu kārta — Plural definido el article para las tres rondas es morir. |
| ES-KURSS-LESSONS-DET-0037 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género neutro — das |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vidējā kārta — die Tische |
| ES-KURSS-LESSONS-DET-0038 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En plural, el artículo definido de los tres géneros es die. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Daudzskaitlī noteiktais artikuls visām trim kārtām ir die. |
| ES-KURSS-LESSONS-DET-0039 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género masculino — ein |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vīriešu kārta — ein |
| ES-KURSS-LESSONS-DET-0040 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género femenino — eine |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: sieviešu kārta — El indefinido el article no tiene plural. |
| ES-KURSS-LESSONS-DET-0042 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | género neutro — ein |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: vidējā kārta — Tische |
| ES-KURSS-LESSONS-DET-0043 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | El artículo indefinido no tiene plural. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Nenoteiktajam artikulam daudzskaitļa nav. |
| ES-KURSS-LESSONS-DET-0044 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En alemán se usa stehen para objetos que están en posición vertical:<br>der Tisch steht<br>die Bank steht |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:<br>der Tisch steht<br>die Bank steht |
| ES-KURSS-LESSONS-DET-0045 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente. |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0046 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 5stehen / liegen / hängen |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0047 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0064 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | wer — quién |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wer — aquí |
| ES-KURSS-LESSONS-LV2-0065 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | was — qué |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: was — allí |
| ES-KURSS-LESSONS-LV2-0066 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | hier — aquí |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: hier — der Tisch table |
| ES-KURSS-LESSONS-LV2-0067 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | dort — allá |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: dort — mesa |
| ES-KURSS-LESSONS-LV2-0068 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | der Tisch — mesa |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Tisch — banco |
| ES-KURSS-LESSONS-LV2-0069 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Tisch — mesa |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Tisch — banco |
| ES-KURSS-LESSONS-LV2-0070 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | die Bank — banco |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Bank — tumbado |
| ES-KURSS-LESSONS-LV2-0072 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | liegen — estar tumbado |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: liegen — un libro |
| ES-KURSS-LESSONS-LV2-0073 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ¿Hay un libro aquí? |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: liegt hier ein Buch? — un libro |
| ES-KURSS-LESSONS-LV2-0074 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Buch — libro |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0075 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Buch — libro |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Buch — imagen |
| ES-KURSS-LESSONS-LV2-0076 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | hängen — colgar |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: hängen — imagen |
| ES-KURSS-LESSONS-LV2-0077 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Bild — imagen |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Bild — pizarra |
| ES-KURSS-LESSONS-LV2-0078 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Bild — imagen |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Bild — pizarra |
| ES-KURSS-LESSONS-LV2-0079 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | die Tafel — pizarra |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Tafel — alguien, qué |
| ES-KURSS-LESSONS-LV2-0080 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | eine Tafel — una pizarra |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: eine Tafel — es |
| ES-KURSS-LESSONS-LV2-0081 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | wie — cómo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wie — grueso, gordo |
| ES-KURSS-LESSONS-LV2-0082 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ist — cuaderno | ist — es | **LABOT** | «ist» es la forma de tercera persona singular de «sein» y significa «es» o «está», no «cuaderno». |
| ES-KURSS-LESSONS-LV2-0083 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | dick — grueso |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: dick — cuaderno |
| ES-KURSS-LESSONS-LV2-0084 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Heft — cuaderno |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Heft — delgado, delgado |
| ES-KURSS-LESSONS-LV2-0085 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Heft — cuaderno |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ein Heft — bajo |
| ES-KURSS-LESSONS-LV2-0086 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | dünn — delgado |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: dünn — alto |
| ES-KURSS-LESSONS-LV2-0087 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | wer — quién |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wer - qué |
| ES-KURSS-LESSONS-LV2-0091 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Con was? se pregunta por cosas. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ja galotne -¿Ar qué? pregunta por temas. |
| ES-KURSS-LESSONS-LV2-0098 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | der Tisch — mesa |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0099 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | die Bank — banco |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0100 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | das Heft — cuaderno |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0105 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Tisch — mesa |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0106 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | ein Heft — cuaderno |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0107 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Hans spielt, aber Marie singt. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0108 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Hier hängt eine Karte. |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0111 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En el idioma alemán, el sustantivo tiene 3 casos: masculino, femenino y neutro. Los sustantivos suelen ir precedidos de una palabra llamada article. Esta palabra no está traducida. | En alemán, los sustantivos tienen tres géneros: masculino, femenino y neutro. Suelen ir precedidos de una palabra llamada artículo. Esta palabra no se traduce. | **LABOT** | ES grammar terminology must use artículo, not English article. |
| ES-KURSS-LESSONS-LV2-0112 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Sin artículos delante de nombres propios. | No se usan artículos delante de los nombres propios. | **LABOT** | La versión actual es un fragmento telegráfico; la propuesta es más natural como nota gramatical. |
| ES-KURSS-LESSONS-LV2-0113 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | En una oración narrativa, el verbo ocupa el segundo lugar. | En una oración enunciativa, el verbo ocupa la segunda posición. | **LABOT** | «Narrativa» no corresponde al sentido gramatical de una oración declarativa/enunciativa. |
| ES-KURSS-LESSONS-LV2-0114 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 1Sujeto de la oración | 1. Sujeto de la oración | **LABOT** | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0115 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 2Artículos | 2. Artículos | **LABOT** | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0116 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 3Sustantivos propios | 3. Sustantivos propios | **LABOT** | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0117 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | 4Lugar del verbo | 4. Lugar del verbo | **LABOT** | Falta un espacio o separador después del número. |
| ES-KURSS-LESSONS-LV2-0118 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Artículo definido |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0119 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson3.legacyHtml | Artículo indefinido |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0120 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[0].front | ¿cuentas? | ¿Cuentas? | **LABOT** | La primera palabra de una pregunta independiente debe comenzar con mayúscula. |
| ES-KURSS-LESSONS-LV2-0121 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[2].front | ¿Quién está parado ahí? | ¿Qué hay ahí? | **LABOT** | Was steht dort? pregunta por una cosa, no por una persona; «quién» es incorrecto. |
| ES-KURSS-LESSONS-LV2-0122 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[3].front | Hay una mesa. | Allí hay una mesa. | **LABOT** | La traducción omite el adverbio de lugar «dort». |
| ES-KURSS-LESSONS-LV2-0123 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[4].front | ¿Quién está aquí? | ¿Qué hay aquí? | **LABOT** | Was liegt hier? pregunta por una cosa, no por una persona; «quién» es incorrecto. |
| ES-KURSS-LESSONS-LV2-0124 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[5].front | Aquí está el libro. | Aquí hay un libro. | **LABOT** | El original usa un artículo indefinido, pero la versión actual usa «el», que cambia el significado. |
| ES-KURSS-LESSONS-LV2-0125 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[8].front | ¿Cuál es el plan? | ¿Qué es delgado? | **LABOT** | La traducción no corresponde a Was ist dünn? y cambia completamente el significado. |
| ES-KURSS-LESSONS-LV2-0126 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[9].front | El buzón es delgado. | El cuaderno es delgado. | **LABOT** | Heft significa «cuaderno», no «buzón». |
| ES-KURSS-LESSONS-LV2-0127 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[14].front | ¿Hay/hay un cuaderno? | ¿Hay allí un cuaderno? | **LABOT** | La expresión «Hay/hay» es un duplicado y resulta antinatural; además, conviene reflejar el lugar indicado por dort. |
| ES-KURSS-LESSONS-LV2-0128 | data/es/courseTrainingCards.js | lesson3TrainingCardsEs[15].front | Sí, hay un cuaderno. | Sí, allí hay un cuaderno. | **LABOT** | La traducción omite el adverbio de lugar «dort». |

## Cursor COPY/PASTE — tikai LABOT

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

## Obligātie apply vārti

- `CURRENT` jāsakrīt precīzi ar faktisko production vērtību.
- `CURRENT` neatbilstība = `SKIP`; aizliegts automātiski pārrakstīt vai atsvaidzināt `CURRENT`.
- Ierakstīt `NEW` precīzi, bez tulkošanas, pārfrāzēšanas vai cleanup.
- `NELABOT`, `FALSE_POSITIVE` un `TECHNICAL_DEFER` nedrīkst piemērot.
- DE puse ir STRICT READ-ONLY.
- Pēc apply: NEW exact-match, unexpected changes 0, syntax/mirror/parity PASS.
