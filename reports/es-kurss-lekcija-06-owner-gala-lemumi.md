# ES Kurss — Lekcija 6 — OWNER GALA LĒMUMI

**OWNER authority:** FINAL
**Main bāze:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Kopā:** 55 · **LABOT:** 14 · **NELABOT:** 35 · **FALSE_POSITIVE:** 5 · **TECHNICAL_DEFER:** 1

> Šis fails ir vienīgais OWNER gala lēmumu avots šai lekcijai. Cursor drīkst COPY/PASTE piemērot tikai `LABOT` ierakstus no zemāk esošā bloka.

## Visi OWNER gala lēmumi

| Audit ID | File | Field/path | CURRENT | NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| ES-KURSS-LESSONS-STR-L06 |  | COURSE_LESSON_DATA.kurssLesson6.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson6 | inline:9069 |  | **TECHNICAL_DEFER** | Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply. |
| ES-KURSS-LESSONS-DET-0079 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Diálogos/oraciones |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-DET-0080 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | wieder (vīder) — de nuevo |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0081 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | der Schlüssel (šlūsel) — llave |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0082 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | die Tafel (dī tāfel) — pizarra |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0083 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | zählen (cēlen) — contar |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0084 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | der Deckel (dēr dekel) — tapa |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0085 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | leer (lēr) — vacío |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0086 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | schwer (švēr) — pesado |  | **NELABOT** | Pedagogical transcription per kurssPronunciationLesson; no ES text change needed. |
| ES-KURSS-LESSONS-DET-0087 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | wieviel (vīfīl) — cuántos |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0088 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | hier (hīr) — aquí |  | **NELABOT** | DE context and ES correctness checked; finding not actionable. |
| ES-KURSS-LESSONS-DET-0089 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | La ä es la vocal modificada de a y se pronuncia como una e abierta, corta o larga. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e. |
| ES-KURSS-LESSONS-DET-0090 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Ejemplos: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter). |
| ES-KURSS-LESSONS-DET-0091 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | La ü es la vocal modificada de u. Para pronunciarla, redondea los labios e intenta decir i. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i. |
| ES-KURSS-LESSONS-DET-0092 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Ejemplos: fünf, der Schlüssel (šlūsel). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: fünf, der Schlüssel (šlūsel). |
| ES-KURSS-LESSONS-DET-0093 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Para pronunciar ö, redondea los labios e intenta decir e: der Löffel. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel. |
| ES-KURSS-LESSONS-DET-0094 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Una vocal doble indica una vocal larga: leer (lēr). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Divkāršots patskanis apzīmē garu patskani: leer (lēr). |
| ES-KURSS-LESSONS-DET-0095 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | El diptongo eu se pronuncia «oi»: neun (noin). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Divskani eu izrunā kā oi: neun (noin). |
| ES-KURSS-LESSONS-DET-0096 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | En presente, el prefijo separable acentuado se separa del verbo y va al final de la oración. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās. |
| ES-KURSS-LESSONS-DET-0097 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Ejemplo: hinlegen → er legt den Schlüssel hin. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: hinlegen — Satiana en alemán tiene una forma singular y plural: der Schüler ist pequeño; die Schüler sind klein. |
| ES-KURSS-LESSONS-DET-0098 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | El numeral uno concuerda con el género del sustantivo: masculino ein, femenino eine y neutro ein. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein. |
| ES-KURSS-LESSONS-DET-0099 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Ejemplos: Das ist ein Schüler. Das ist ein Hammer. Das ist eine Nadel. Das sind Hämmer. Das sind Nadeln. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: ein Schüler — das ist ein Hammer; es una aguja: das ist eine Nadel; son martillos—das sind Hämmer; son agujas - das sind Nadeln. |
| ES-KURSS-LESSONS-DET-0100 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Números: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn). |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn). |
| ES-KURSS-LESSONS-DET-0101 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | El verbo copulativo concuerda en número: der Schüler ist klein; die Schüler sind klein. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein. |
| ES-KURSS-LESSONS-DET-0102 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Para identificar algo, en alemán se usa la forma invariable das: Das ist ein Hammer. Das sind Hämmer. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das. |
| ES-KURSS-LESSONS-DET-0103 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Ejemplos: Das ist ein Hammer. Das sind Hämmer. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: tas ir veseris — el, -er plural toma -n. |
| ES-KURSS-LESSONS-DET-0104 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Algunos sustantivos masculinos y neutros forman el plural con umlaut o con -er. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (madres); die Tochter (hija) — die Töchter (hijas). |
| ES-KURSS-LESSONS-DET-0105 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Ejemplos: der Hammer → die Hämmer; der Wagen → die Wagen; die Nadel → die Nadeln. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Piemēri: der Hammer — das sind Wagen; das ist eine Nadel — das sind Nadeln. |
| ES-KURSS-LESSONS-DET-0106 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Muchos sustantivos femeninos forman el plural con -n o -en. |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: Sieviešu kārtas lietvārdi ar galotni -En una oración narrativa, el verbo predicado ocupa el segundo lugar: er legt den Schlüssel hin; dann legt er den Schlüssel hin. |
| ES-KURSS-LESSONS-DET-0107 | languages/es/ui.js | LANGUAGE_UI_STRINGS.kurss.lessonProgress | Lección {lesson} · Traducir: {current} / {total} |  | **FALSE_POSITIVE** | Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator. |
| ES-KURSS-LESSONS-LV2-0210 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | liegt — es, es, mentiras | liegt — está / se encuentra | **LABOT** | La glosa española está corrompida: mezcla repeticiones de «es» con «mentiras» y no traduce correctamente el verbo alemán «liegt» en este contexto. |
| ES-KURSS-LESSONS-LV2-0211 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | einige (einige) — algunos |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0212 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | hinlegen — poner abajo | hinlegen — poner algo tumbado / dejar algo tumbado | **LABOT** | «Poner abajo» es una traducción literal poco natural y no expresa bien el sentido de «hinlegen», que consiste en colocar o dejar algo en posición horizontal. |
| ES-KURSS-LESSONS-LV2-0213 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | aufmachen — abrir |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: aufmachen — desatar |
| ES-KURSS-LESSONS-LV2-0214 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | er macht auf — él abre |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: er macht auf — desata |
| ES-KURSS-LESSONS-LV2-0215 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | anspitzen (anšpicen) — sacar punta |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: anspitzen (anšpicen) — escupir |
| ES-KURSS-LESSONS-LV2-0216 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | er spitzt an — él saca punta |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: er spitzt an — escupe |
| ES-KURSS-LESSONS-LV2-0217 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | der Hammer — martillo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Hammer — mazo |
| ES-KURSS-LESSONS-LV2-0218 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | die Hämmer — mazo | die Hämmer — martillos | **LABOT** | El plural alemán requiere la traducción «martillos»; además, «mazo» no es la traducción general de Hammer. |
| ES-KURSS-LESSONS-LV2-0219 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | der Schlitten — trineo |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: der Schlitten — trineo, trineo |
| ES-KURSS-LESSONS-LV2-0220 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | wie sind die Dinge? — ¿cómo son las cosas? |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: wie sind die Dinge? — ¿Cuáles son las cosas? |
| ES-KURSS-LESSONS-LV2-0221 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | voll (fōl) — lleno |  | **NELABOT** | NELABOT: audita CURRENT nesakrīt ar faktisko OWNER-accepted main pēc PR #675. Faktiskā vērtība tiek saglabāta; audita NEW nedrīkst piemērot pret citu CURRENT. Audita CURRENT bija: voll (fōl) — full |
| ES-KURSS-LESSONS-LV2-0223 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | wieviel Nadeln — cuántos agujas | wieviel Nadeln — cuántas agujas | **LABOT** | Agujas es un sustantivo femenino plural, por lo que el interrogativo debe concordar como «cuántas». |
| ES-KURSS-LESSONS-LV2-0227 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | A doubled eu se pronuncia como oi: neun (noin). |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0240 | data/es/courseLessons.js | COURSE_LESSON_DATA.kurssLesson6.legacyHtml | Der Wagen — coche |  | **FALSE_POSITIVE** | Field contains German pedagogical notation acceptable in ES Kurss context. |
| ES-KURSS-LESSONS-LV2-0244 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[2].front | Saca un balde. | Dibuja un balde. | **LABOT** | El alemán indica que el personaje dibuja un cubo, no que lo saque. |
| ES-KURSS-LESSONS-LV2-0245 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[3].front | ¿Quién tira el carro? | ¿Quién dibuja un carro? | **LABOT** | «zeichnet» significa «dibuja», mientras que «tira» cambia el significado a «arrastra» o «lanza». |
| ES-KURSS-LESSONS-LV2-0246 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[7].front | ¿Cuantos platos? | ¿Cuántos platos? | **LABOT** | «Cuántos» lleva tilde en esta pregunta. |
| ES-KURSS-LESSONS-LV2-0247 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[9].front | Dejé dos agujas. | Coloco dos agujas. | **LABOT** | El alemán está en presente y expresa colocar algo, no dejarlo en pasado. |
| ES-KURSS-LESSONS-LV2-0248 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[11].front | Es una funda. | Es una tapa. | **LABOT** | «Deckel» significa «tapa», no «funda». |
| ES-KURSS-LESSONS-LV2-0249 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[12].front | Estas son las portadas. | Estas son las tapas. | **LABOT** | El plural alemán «Deckel» corresponde a «tapas», no a «portadas». |
| ES-KURSS-LESSONS-LV2-0250 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[16].front | La maestra toma un cuchillo y afila un lápiz. | El maestro toma un cuchillo y afila un lápiz. | **LABOT** | El alemán usa «der Lehrer», masculino; «la maestra» no coincide con el contexto alemán. |
| ES-KURSS-LESSONS-LV2-0251 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[18].front | Está emplumado. | Es un portaplumas. | **LABOT** | «Federhalter» es un portaplumas, no algo que esté emplumado. |
| ES-KURSS-LESSONS-LV2-0252 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[19].front | ¿Qué es emplumado? | ¿Cómo es el portaplumas? | **LABOT** | La frase española no corresponde al significado de «Wie ist der Federhalter?». «Emplumado» significa con plumas, mientras que «Federhalter» es «portaplumas». |
| ES-KURSS-LESSONS-LV2-0253 | data/es/courseTrainingCards.js | lesson6TrainingCardsEs[20].front | La pluma es negra. | El portaplumas es negro. | **LABOT** | «Federhalter» significa «portaplumas», no «pluma». |

## Cursor COPY/PASTE — tikai LABOT

```json
[
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0210",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[0]",
    "current": "liegt — es, es, mentiras",
    "new": "liegt — está / se encuentra",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0212",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[3]",
    "current": "hinlegen — poner abajo",
    "new": "hinlegen — poner algo tumbado / dejar algo tumbado",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0218",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[21]",
    "current": "die Hämmer — mazo",
    "new": "die Hämmer — martillos",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0223",
    "file": "data/es/courseLessons.js",
    "field": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml",
    "path": "COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[35]",
    "current": "wieviel Nadeln — cuántos agujas",
    "new": "wieviel Nadeln — cuántas agujas",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0244",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[2].front",
    "path": "lesson6TrainingCardsEs[2].front",
    "current": "Saca un balde.",
    "new": "Dibuja un balde.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0245",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[3].front",
    "path": "lesson6TrainingCardsEs[3].front",
    "current": "¿Quién tira el carro?",
    "new": "¿Quién dibuja un carro?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0246",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[7].front",
    "path": "lesson6TrainingCardsEs[7].front",
    "current": "¿Cuantos platos?",
    "new": "¿Cuántos platos?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0247",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[9].front",
    "path": "lesson6TrainingCardsEs[9].front",
    "current": "Dejé dos agujas.",
    "new": "Coloco dos agujas.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0248",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[11].front",
    "path": "lesson6TrainingCardsEs[11].front",
    "current": "Es una funda.",
    "new": "Es una tapa.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0249",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[12].front",
    "path": "lesson6TrainingCardsEs[12].front",
    "current": "Estas son las portadas.",
    "new": "Estas son las tapas.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0250",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[16].front",
    "path": "lesson6TrainingCardsEs[16].front",
    "current": "La maestra toma un cuchillo y afila un lápiz.",
    "new": "El maestro toma un cuchillo y afila un lápiz.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0251",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[18].front",
    "path": "lesson6TrainingCardsEs[18].front",
    "current": "Está emplumado.",
    "new": "Es un portaplumas.",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0252",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[19].front",
    "path": "lesson6TrainingCardsEs[19].front",
    "current": "¿Qué es emplumado?",
    "new": "¿Cómo es el portaplumas?",
    "status": "LABOT"
  },
  {
    "auditId": "ES-KURSS-LESSONS-LV2-0253",
    "file": "data/es/courseTrainingCards.js",
    "field": "lesson6TrainingCardsEs[20].front",
    "path": "lesson6TrainingCardsEs[20].front",
    "current": "La pluma es negra.",
    "new": "El portaplumas es negro.",
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
