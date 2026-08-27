# ES Kurss — Lekcija 7 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 46 · **LABOT:** 11 · **NELABOT:** 32 · **FALSE_POSITIVE:** 2 · **TECHNICAL_DEFER:** 1

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L07 |  | COURSE_LESSON_DATA.kurssLesson7.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson7 | inline:6157 |  | **TECHNICAL_DEFER** | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0108 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | Diálogos/oraciones |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0109 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | das Lied (das līt) — canción |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Lied (das līt) — jovencita |
| ES-KURSS-LESSONS-DET-0110 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | der Spiegel (špīgel) — espejo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Spiegel (špīgel) — escoba |
| ES-KURSS-LESSONS-DET-0111 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | die Schüssel — cuenco |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Schüssel — sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (para špīgel). |
| ES-KURSS-LESSONS-DET-0112 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | das Zimmer — habitación |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Zimmer — sch se pronuncia como letón š: die Schaufel (dī šaufel), die Schüssel (dī šūsel). |
| ES-KURSS-LESSONS-DET-0113 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | das Ufer (ūfer) — orilla |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Ufer (ūfer) — El diptongo äu se pronuncia como letón oi: das Fräulein (das froilein). |
| ES-KURSS-LESSONS-DET-0114 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | Al inicio de una palabra o sílaba, sp se pronuncia «shp»: der Spiegel (dēr špīgel). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel). |
| ES-KURSS-LESSONS-DET-0115 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | sch se pronuncia como «sh»: die Schaufel (dī šaufel), die Schüssel (dī šūsel). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel). |
| ES-KURSS-LESSONS-DET-0116 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | El diptongo äu se pronuncia «oi»: das Fräulein (das froilein). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein). |
| ES-KURSS-LESSONS-DET-0117 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | El imperativo de segunda persona singular se forma normalmente con la raíz verbal, sin el pronombre du. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes -La forma del comando en la segunda persona del plural es similar a la segunda persona del presente plural, pero se usa sin pronombre. |
| ES-KURSS-LESSONS-DET-0118 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | Ejemplos: antworte!, arbeite!, öffne!, zeichne! |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: antworte!, arbeite!, öffne!, zeichne! |
| ES-KURSS-LESSONS-DET-0119 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | Con frecuencia se añade -e al imperativo cuando la raíz termina en -t, -d o en un grupo consonántico. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Ļoti bieži galotne -La forma de tratamiento con "Usted" se parece a la tercera persona del plural. El pronombre Sie es escrito con mayúscula y después del verbo. |
| ES-KURSS-LESSONS-DET-0120 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | El imperativo de segunda persona plural coincide con la forma de ihr, pero se usa sin el pronombre. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda. |
| ES-KURSS-LESSONS-DET-0121 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | Ejemplos: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut! |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut! |
| ES-KURSS-LESSONS-DET-0122 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[0].du | frag! / frage! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0123 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[2].du | lob! / lobe! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0124 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[3].du | lieb! / liebe! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0125 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[4].du | zähl! / zähle! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0126 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[5].du | zeig! / zeige! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0127 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[9].du | komm! / komme! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0128 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[10].du | geh! / gehe! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0129 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[11].du | steh! / stehe! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0130 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[13].du | sing! / singe! |  | **NELABOT** | Verified in lesson context; acceptable as-is. |
| ES-KURSS-LESSONS-DET-0131 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0254 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied. | Hans, singe ein Lied! Was tust du? Ich singe ein Lied. | **LABOT** | El ejemplo alemán contiene una frase en español. Los ejemplos de esta sección deben permanecer íntegramente en alemán. |
| ES-KURSS-LESSONS-LV2-0255 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | singe — canción | singe — canta | **LABOT** | «singe» es la forma imperativa de «singen» para la segunda persona singular: «canta», no «canción». |
| ES-KURSS-LESSONS-LV2-0256 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | singt — Tú | singt — cantad (vosotros) | **LABOT** | En este contexto, «singt» es el imperativo plural informal y corresponde a «cantad», no a «Tú». |
| ES-KURSS-LESSONS-LV2-0257 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | singen Sie — cante usted / canten ustedes |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: singen Sie — conde |
| ES-KURSS-LESSONS-LV2-0259 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | Sie — usted / ustedes / ellos / ellas |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Sie — molinero |
| ES-KURSS-LESSONS-LV2-0260 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | zählen — abierto | zählen — contar | **LABOT** | «zählen» significa «contar», mientras que «abierto» corresponde a otro significado. |
| ES-KURSS-LESSONS-LV2-0261 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | das Fräulein (froilein) — ventana | das Fräulein (froilein) — la señorita | **LABOT** | «das Fräulein» significa «la señorita», no «ventana». |
| ES-KURSS-LESSONS-LV2-0262 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | der Müller — el molinero |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Müller — todos |
| ES-KURSS-LESSONS-LV2-0263 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | öffnen — abrir |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: öffnen — espejo |
| ES-KURSS-LESSONS-LV2-0264 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | das Fenster (fenster) — ventana |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: das Fenster (fenster) — trapo, fregona |
| ES-KURSS-LESSONS-LV2-0265 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | alle — todos |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: alle — pala |
| ES-KURSS-LESSONS-LV2-0267 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | der Lappen — trapo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Lappen — pala |
| ES-KURSS-LESSONS-LV2-0268 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | der Spaten — pala |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Spaten — cuenco |
| ES-KURSS-LESSONS-LV2-0269 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | der Besen — escoba |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Besen — habitación |
| ES-KURSS-LESSONS-LV2-0270 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | die Schaufel — pala |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: die Schaufel — orilla |
| ES-KURSS-LESSONS-LV2-0279 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | 1Expresión de comandos | 1. Imperativo | **LABOT** | Falta un separador entre el número y el título; además, «imperativo» es el término gramatical más preciso. |
| ES-KURSS-LESSONS-LV2-0280 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | 2Comando plural | 2. Imperativo plural | **LABOT** | Falta un separador entre el número y el título, y «imperativo plural» es una denominación gramatical más natural que «comando plural». |
| ES-KURSS-LESSONS-LV2-0281 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson7.legacyHtml | 4öffnen | 4. öffnen | **LABOT** | Falta un separador entre el número y el ejemplo alemán. El término alemán debe conservarse. |
| ES-KURSS-LESSONS-LV2-0282 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[2].lv | elogio | elogiar | **LABOT** | El alemán «loben» es un infinitivo que significa «elogiar»; «elogio» es un sustantivo. |
| ES-KURSS-LESSONS-LV2-0283 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[5].lv | espectáculo | mostrar | **LABOT** | «Espectáculo» es un sustantivo y no corresponde al verbo alemán «zeigen», que significa «mostrar». |
| ES-KURSS-LESSONS-LV2-0284 | data/es/courseTrainingCards.js | lesson7ExerciseCardsEs[7].lv | contar | calcular | **LABOT** | «Contar» corresponde normalmente a «zählen», mientras que el verbo alemán «rechnen» significa «calcular» o «hacer cuentas». |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0254",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[0]:Diálogos/oraciones → course-example[0]",
    "current": "Hans, singe ein Lied! ¿Qué estás haciendo? Ich singe ein Lied.",
    "new": "Hans, singe ein Lied! Was tust du? Ich singe ein Lied.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0255",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[2]",
    "current": "singe — canción",
    "new": "singe — canta",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0256",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[3]",
    "current": "singt — Tú",
    "new": "singt — cantad (vosotros)",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0260",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[7]",
    "current": "zählen — abierto",
    "new": "zählen — contar",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0261",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[1]:Palabras → kurss-example[8]",
    "current": "das Fräulein (froilein) — ventana",
    "new": "das Fräulein (froilein) — la señorita",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0279",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[0]",
    "current": "1Expresión de comandos",
    "new": "1. Imperativo",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0280",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[1]",
    "current": "2Comando plural",
    "new": "2. Imperativo plural",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0281",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson7.legacyHtml → accordion[3]:Gramática → grammar-header[3]",
    "current": "4öffnen",
    "new": "4. öffnen",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0282",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson7ExerciseCardsEs[2].lv",
    "path": "lesson7ExerciseCardsEs[2].lv",
    "current": "elogio",
    "new": "elogiar",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0283",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson7ExerciseCardsEs[5].lv",
    "path": "lesson7ExerciseCardsEs[5].lv",
    "current": "espectáculo",
    "new": "mostrar",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0284",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson7ExerciseCardsEs[7].lv",
    "path": "lesson7ExerciseCardsEs[7].lv",
    "current": "contar",
    "new": "calcular",
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
