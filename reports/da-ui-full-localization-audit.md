# DA–DE App UI — pilns lokalizācijas audits

**Datums:** 2026-08-16  
**Režīms:** READ-ONLY audits — production labojumi **nav** veikti  
**Autoritatīvais UI atslēgu komplekts:** `languages/en/ui.js` (305 atslēgas)  
**DA avots:** `languages/da/ui.js` + `www/languages/da/ui.js` (identiski)  
**i18n mehānisms:** `www/languages/i18n.js` (`AppI18n.t()`, fallback uz `lv` ja atslēga trūkst)  
**Rendereri:** `www/ui.js`, `www/index.html`, `www/languages/launch.js`

---

## Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Pārbaudīto UI atslēgu skaits | **305** |
| DA atslēgu paritāte (pret EN) | **305/305 (100%)** |
| Trūkstošo DA atslēgu skaits | **0** |
| Tukšu DA atslēgu skaits | **0** |
| Lieku/novecojušu DA atslēgu skaits | **0** |
| `languages/da` ↔ `www/languages/da` sinhronizācija | **PASS** (0 atšķirību) |
| Fallback gadījumi (trūkstoša atslēga → LV) | **0** (DA komplekts pilns) |
| Fallback / apieti i18n (hardcoded HTML, renderer reģistri) | **14** aktīvi avoti |
| Hardcoded neatbilstošu UI tekstu skaits | **22** (index.html + ui.js reģistri) |
| Svešvalodu atlikumu skaits (UI kontekstā) | **28** apstiprināti (grupēti + atsevišķi) |
| Lingvistisko DA kļūdu skaits (`da/ui.js`) | **21** |
| CRITICAL | **4** |
| HIGH | **10** |
| MEDIUM | **12** |
| LOW | **10** |
| FALSE_POSITIVE | **18** |
| Production changes | **0** |

### Gala rezultāts

## **DA UI LOCALIZATION: NEEDS REPAIR**

DA `ui.js` atslēgu komplekts ir pilns un lielākā daļa galvenās navigācijas ir lokalizēta caur `t()`. Tomēr **kursa renderer reģistri ne atpazīst dāņu sekciju nosaukumus** (L8–21 tulkojuma/vingrinājumu kartītes nevar renderēties), **vairāki aria-label un palaišanas ekrāni paliek latviski/vācu**, un **`da/ui.js` satur kritisku funkcionālu kļūdu** (`buttons.restore`). Pilna 100% DA UI nav sasniegta.

---

## 1. DA atslēgu paritāte

Automātiska salīdzināšana (`languages/en/ui.js` ↔ `languages/da/ui.js`):

| Pārbaude | Rezultāts |
|----------|-----------|
| Trūkstošas DA atslēgas | 0 |
| Lietas DA atslēgas (nav EN) | 0 |
| Tukšas vērtības | 0 |
| Primārais ↔ www kopija | Identiski |

**Secinājums:** Atslēgu paritāte ir **PASS**. Fallback uz LV caur trūkstošām atslēgām **n notiek**, ja ielādēts `languages/da/ui.js`.

---

## 2. Pārbaudītie App skati un funkcijas

| Apgabals | Pārbaudes veids | Rezultāts |
|----------|-----------------|-----------|
| Palaišanas ekrāns (splash) | HTML + launch.js | **DEFEKTS** — vācu/latviski |
| Valodas izvēle (first-run) | HTML + launch.js | **DEFEKTS** — latviski/vācu, nav `applyLanguageScreenI18n()` |
| Sākuma/līmeņu izvēlne (A1–C2, Kursus, Sætninger, Verber) | da/ui.js + ui.js | **PASS** (pēc `bootAppUi`) |
| A1 / A2 / B1 / B2 / C1 / C2 kartīšu skati | da/ui.js + renderCard | **PASS** (pogas, režīmi, hinti) |
| Sætninger | `menu.sentences`, groups | **PASS** |
| Verber | `verb.*`, shuffle, spelling | **PASS** |
| Kartītes priekš/aizmugure, Study skati | `study.*`, STUDY_MAIN_IDEA | **DEFEKTS** — trūkst `Hovedidé` prefiksa |
| Iestatījumi / papildu opcijas | `extra.*`, `settings.*` | **PASS** |
| Palīdzības logs | `info.*` | **PASS** (ar lingvistiskām piezīmēm) |
| Progresa teksti, pārskati, listes | `review.*`, `lists.*`, `notices.*` | **PASS** (ar terminoloģijas nesakritībām) |
| Modālie logi (info, restore, vārdu listes) | ui.js `t()` | **PASS** |
| Rakstīšanas režīms | `spelling.*` | **PASS** |
| Kursa galvenā izvēlne | `kurss.*` + `updateKurssStaticLabels()` | **PASS** |
| Kursa 21 lekciju izvēlne | `kurss.lessonItems.*` | **PASS** (virsraksti no i18n) |
| Kursa lekciju saturs L1–7 (legacy HTML) | courseLessons.js HTML | **DEFEKTS** — LV/EN atlikumi UI tekstā |
| Kursa lekcijas L8–21 (strukturēts saturs) | courseLessons.js + renderer | **CRITICAL** — exercise/translate kartītes salūzt |
| Sekciju virsraksti L8–21 | `getCourseSectionDisplayTitle()` | **DEFEKTS** — fallback rāda jauktus nosaukumus |
| Mobilā/responsive UI | index.html aria + CSS | **DEFEKTS** — daļa aria-label paliek LV |

---

## 3. CRITICAL atradumi

### REG-001

**ID:** REG-001  
**Atrašanās vieta:** Kursa tulkojumu sekciju atpazīšana L8–21  
**Fails:** `www/ui.js` (543–547, 1741–1742)  
**Atslēga / koda vieta:** `COURSE_TRANSLATE_SECTION_TITLES`, `isCourseTranslateSection()`  
**Pašreiz:** Set satur tikai `Pārtulko`, `Išversk`, `Prevedi`, `Translate`, `Přeložit`, `Přelož` — **nav** `Oversætte` / `Oversæt`  
**Problēma:** DA `courseLessons.js` sekcijām L8–21 lieto `"title": "Oversætte"`. `isCourseTranslateSection()` atgriež `false` → `getCourseTranslateCards()` atgriež `[]` → tulkojumu kartītes **nerenderējas**.  
**Pareizais DA variants:** Pievienot `"Oversætte"` un `"Oversæt"` reģistram; kartēt `COURSE_SECTION_I18N_KEYS` → `kurss.sections.translate`  
**Pamatojums:** Funkcionāls UI lokalizācijas/course integrācijas defekts — lietotājs neredz tulkojumu vingrinājumus.  
**Smagums:** CRITICAL

---

### REG-002

**ID:** REG-002  
**Atrašanās vieta:** Kursa vingrinājumu sekciju atpazīšana L8–21, L13+  
**Fails:** `www/ui.js` (544–551, 830–834)  
**Atslēga / koda vieta:** `COURSE_EXERCISE_SECTION_TITLES`, `isCourseExerciseSection()`  
**Pašreiz:** Set **nav** `Øvelse`, `Übung / Øvelse`  
**Problēma:** DA datos ir `"Øvelse"` (L13+) un `"Übung / Øvelse"` (L8–12). `getCourseExerciseCards()` / `findCourseLessonCardSection()` atgriež tukšu → vingrinājumu kartītes **nesaistās ar rendereri**.  
**Pareizais DA variants:** Pievienot `"Øvelse"`, `"Übung / Øvelse"`; kartēt ar `kurss.sections.exercise` / `kurss.sections.exerciseCombined`  
**Pamatojums:** Kritiska course UI funkcionalitāte DA režīmā.  
**Smagums:** CRITICAL

---

### DA-001

**ID:** DA-001  
**Atrašanās vieta:** Atjaunošanas poga modālos/logos  
**Fails:** `languages/da/ui.js`  
**Atslēga / koda vieta:** `buttons.restore`  
**Pašreiz:** `Tilbage`  
**Problēma:** «Tilbage» nozīmē «atpakaļ/navigēt», nevis «atjaunot». Izmanto `#restoreBtn`, vārdu listes atjaunošanai.  
**Pareizais DA variants:** `Gendan`  
**Pamatojums:** Funkcionāla nozīmes kļūda; `buttons.restoreAll` jau ir «Gendan alle».  
**Smagums:** CRITICAL

---

### REG-003

**ID:** REG-003  
**Atrašanās vieta:** Study kartīšu «Hovedidé» sadalīšana  
**Fails:** `www/ui.js` (168–175, 193–207)  
**Atslēga / koda vieta:** `STUDY_MAIN_IDEA_PREFIXES`, `splitStudyMainIdea()`  
**Pašreiz:** Prefiksu masīvs satur `Galvenā doma`, `Põhiidee`, u.c. — **nav** `Hovedidé`  
**Problēma:** DA A1–C2 study datos (`www/data/da/*.js`) izmanto `Hovedidé:` skaidrojumos. Prefikss netiek atpazīts → nepareiza study kartītes struktūra.  
**Pareizais DA variants:** Pievienot `"Hovedidé"` (vai derivēt no `t("study.sections.mainIdea")`)  
**Pamatojums:** DA study UI layout defekts visos līmeņos ar study kartītēm.  
**Smagums:** CRITICAL

---

## 4. HIGH atradumi

### REG-004

**ID:** REG-004  
**Atrašanās vieta:** Kursa sekciju virsrakstu lokalizācija  
**Fails:** `www/ui.js` (527–541, 572–575)  
**Atslēga / koda vieta:** `COURSE_SECTION_I18N_KEYS`, `getCourseSectionDisplayTitle()`  
**Pašreiz:** Nav ierakstu: `Oversætte`, `Øvelse`, `Übung / Øvelse`, `Dialogi / teikumi`, `Izruna`, `Ord`, `Navne`, `Tekst/læsning`, `Gramatika`  
**Problēma:** Neatpazīti nosaukumi tiek rādīti **raw** no datiem, nevis no `kurss.sections.*` — lietotājs redz jauktus/nesakritīgus virsrakstus.  
**Pareizais DA variants:** Paplašināt kartējumu, piem.: `Dialogi / teikumi` → `Dialoger / sætninger`, `Izruna` → `Udtale`, `Ord` → `Ord`, `Navne` → `Navne`, `Tekst/læsning` → jauna atslēga vai esošs labels  
**Pamatojums:** UI virsraksti L8–21 nav pilnībā dāņu, pat ja `da/ui.js` satur pareizos tulkojumus.  
**Smagums:** HIGH

---

### REG-005

**ID:** REG-005  
**Atrašanās vieta:** Kursa vingrinājumu hinti  
**Fails:** `www/ui.js` (626–633)  
**Atslēga / koda vieta:** `getCourseExerciseHint()`  
**Pašreiz:** Pārbauda `Vingrinājums`, `Exercise`, u.c. — **nav** `Øvelse`, `Übung / Øvelse`  
**Problēma:** DA vingrinājumu akordeoni saņem nepareizu/noklusējuma hintu.  
**Pareizais DA variants:** `Øvelse` → `kurss.hints.tapToContinue`; `Übung / Øvelse` (L9) → `kurss.hints.tapNextStep`  
**Pamatojums:** Instrukciju teksts course UI DA režīmā.  
**Smagums:** HIGH

---

### REG-006

**ID:** REG-006  
**Atrašanās vieta:** L9 vingrinājumu kartītes atribūts  
**Fails:** `www/ui.js` (1919–1920)  
**Atslēga / koda vieta:** `renderCourseLessonFromData()` lesson9 zars  
**Pašreiz:** Pārbauda tikai `Übung / Vingrinājums` … `Übung / Exercise`  
**Problēma:** DA L7 legacy un L8+ datos ir `Übung / Øvelse` — neaktivizē `data-lesson9-exercise-card`.  
**Pareizais DA variants:** Pievienot `section.title === "Übung / Øvelse"`  
**Pamatojums:** L9 vingrinājumu handlera saite.  
**Smagums:** HIGH

---

### HTML-001

**ID:** HTML-001  
**Atrašanās vieta:** Palaišanas ekrāns (~4 s katrā cold start)  
**Fails:** `www/index.html` (20–23)  
**Atslēga / koda vieta:** `#appSplashScreen`, `.app-splash-title`, `.app-splash-subtitle`, `aria-label="Palaišana"`  
**Pašreiz:** `Deutsche Sprache`, `Deutsch lernen`, latvisks aria-label  
**Problēma:** Nav caur `t()` / `splash.*`; DA lietotājs redz vācu/latvisku, nevis `Tysk` / `Lær tysk`.  
**Pareizais DA variants:** `splash.title` → **Tysk**; `splash.subtitle` → **Lær tysk**; jauna atslēga aria-label, piem. **Indlæser**  
**Pamatojums:** Obligāts lietotāja ceļa ekrāns.  
**Smagums:** HIGH

---

### HTML-002

**ID:** HTML-002  
**Atrašanās vieta:** Pirmās palaišanas valodas izvēle  
**Fails:** `www/index.html` (26–34), `www/languages/launch.js` (161–172 vs 184–205)  
**Atslēga / koda vieta:** `#appLanguageScreen`, `runLaunchFlow()`  
**Pašreiz:** `Sprache wählen`, `Deutsch lernen`, `aria-label="Valodas izvēle"`; `applyLanguageScreenI18n()` tiek izsaukts tikai no iestatījumiem  
**Problēma:** Pirmajā palaišanē ekrāns **nav** lokalizēts pirms valodas izvēles.  
**Pareizais DA variants:** `languageSelect.title` → **Vælg sprog**; footer → **Lær tysk**; izsaukt `applyLanguageScreenI18n()` pirms `waitForLanguageSelection()`  
**Pamatojums:** First-run UX visiem DA lietotājiem ar jaunu instalāciju.  
**Smagums:** HIGH

---

### HTML-003

**ID:** HTML-003  
**Atrašanās vieta:** Galvenā čaula (accessibility)  
**Fails:** `www/index.html` (41), `www/ui.js` `applyLocalizedStaticUi()` (8217+)  
**Atslēga / koda vieta:** `.home-app-shell` `aria-label="Vācu–latviešu kartītes"`  
**Pašreiz:** Latvisks aria-label netiek atjaunināts (h1/subtitle tiek, aria — nē)  
**Problēma:** Ekrānl lasītāji dzird latviešu, lai gan `app.shellLabel` = **Tysk–dansk kort**.  
**Pareizais DA variants:** `t("app.shellLabel")` → **Tysk–dansk kort**  
**Pamatojums:** A11y UI teksts DA režīmā.  
**Smagums:** HIGH

---

### HTML-004

**ID:** HTML-004  
**Atrašanās vieta:** Galvenā izvēlne (accessibility)  
**Fails:** `www/index.html` (42, 63)  
**Atslēga / koda vieta:** `#homeMenuScreen` `aria-label="Galvenā izvēlne"`, `#mainMenuButtons` `aria-label="Izvēlies grupu"`  
**Pašreiz:** Latviski; `applyLocalizedStaticUi()` neaiztiek  
**Problēma:** Nav DA (`menu.mainNav`, `menu.chooseGroup`).  
**Pareizais DA variants:** **Hovedmenu**, **Vælg en gruppe**  
**Pamatojums:** Navigācijas UI ekrānl lasītājiem.  
**Smagums:** HIGH

---

### DATA-UI-001

**ID:** DATA-UI-001  
**Atrašanās vieta:** Kursa L8–21 sekciju virsraksts  
**Fails:** `www/data/da/courseLessons.js` (sekcija `"Dialogi / teikumi"`)  
**Atslēga / koda vieta:** `sections[].title` + renderer fallback  
**Pašreiz:** `Dialogi / teikumi` («teikumi» = latviski «teikumi»)  
**Problēma:** Lietotājam redzams UI virsraksts satur latvisku komponentu.  
**Pareizais DA variants:** `Dialoger / sætninger` (vai tikai `Dialoger`)  
**Pamatojums:** Svešvalodas UI atlikums kursa navigācijā. *Piezīme: datu fails nav labots šajā auditā.*  
**Smagums:** HIGH

---

### DATA-UI-002

**ID:** DATA-UI-002  
**Atrašanās vieta:** Kursa metadati — lekciju nosaukumi datos  
**Fails:** `www/data/da/courseLessons.js` (`title`: `Lekcija 1` … `Lekcija 21`)  
**Atslēga / koda vieta:** `COURSE_LESSON_DATA.*.title`  
**Pašreiz:** `Lekcija N` (slāvu/latviešu tips, nevis dāņu «Lektion»)  
**Problēma:** Izvēlnes virsraksti no i18n ir «Lektion N», bet datu fallback / iekšējie virsraksti var rādīt «Lekcija».  
**Pareizais DA variants:** `Lektion N` (saskaņā ar `kurss.lessonItems.N.title`)  
**Pamatojums:** Terminoloģijas nesakritība kursa UI.  
**Smagums:** HIGH

---

## 5. MEDIUM atradumi

### DA-002 — DA-004 (terminoloģija «uønsket»)

**ID:** DA-002  
**Fails:** `languages/da/ui.js` — `notices.noCardForUnwanted`  
**Pašreiz:** «…markere som **unødvendigt**»  
**Pareizais DA variants:** «…markere som **uønsket**»  
**Smagums:** MEDIUM  

**ID:** DA-003  
**Fails:** `notices.markedUnwanted`  
**Pašreiz:** «Ord markeret som unødvendigt»  
**Pareizais DA variants:** «Ord markeret som uønsket»  
**Smagums:** MEDIUM  

**ID:** DA-004  
**Fails:** `lists.noUnwanted`  
**Pašreiz:** «Ingen unødvendige ord»  
**Pareizais DA variants:** «Ingen uønskede ord»  
**Pamatojums:** `buttons.unwantedWords` / `info.unwantedTitle` lieto **uønsket**; paziņojumos — **unødvendig**.

---

### DA-005 — DA-007 (info/review gramatika)

**ID:** DA-005  
**Fails:** `info.unwantedBody`  
**Pašreiz:** «Tryk på det **overstregede** øje»  
**Pareizais DA variants:** «Tryk på det **overstreget** øje»  
**Smagums:** MEDIUM  

**ID:** DA-006  
**Fails:** `info.extraBody`  
**Pašreiz:** «…gendanne skjulte» (nepilnigs)  
**Pareizais DA variants:** «…gendan skjulte ord»  
**Smagums:** MEDIUM  

**ID:** DA-007  
**Fails:** `review.monthDone`  
**Pašreiz:** «Månedlig **rapport** fuldført»  
**Pareizais DA variants:** «Månedlig **gennemgang** fuldført»  
**Pamatojums:** Nesakritība ar `review.monthLabel` / `buttons.monthlyReview`.

---

### HTML-005 — HTML-007 (aria-label)

**ID:** HTML-005  
**Fails:** `www/index.html` (94)  
**Pašreiz:** `aria-label="Ātrie rīki"`  
**Pareizais DA variants:** `t("nav.quickTools")` → **Hurtige værktøjer**  
**Smagums:** MEDIUM  

**ID:** HTML-006  
**Fails:** `www/index.html` (101)  
**Pašreiz:** `aria-label="Mācīšanās režīmi"`  
**Pareizais DA variants:** Jauna atslēga, piem. `menu.learningModes` → **Læringstilstande**  
**Smagums:** MEDIUM  

**ID:** HTML-007  
**Fails:** `www/index.html` (134), `applyLocalizedStaticUi()`  
**Pašreiz:** `#pluralAudioBtn` `aria-label="Klausīties daudzskaitli"` netiek atjaunināts  
**Pareizais DA variants:** `t("buttons.listenPlural")` → **Lyt til flertal**  
**Smagums:** MEDIUM  

---

### DATA-UI-003

**ID:** DATA-UI-003  
**Atrašanās vieta:** Kursa legacy HTML L1–7 (`COURSE_LESSON_HTML`)  
**Fails:** `www/data/da/courseLessons.js`  
**Pašreiz:** Ievērojami latviešu/angļu UI fragmenti skaidrojumos, piem.: `Vārdos ich, nicht…`, `Latviešu valodā:`, `Remove -da from base forms`, `The Nominative is always…`, `Lesson N translation card`  
**Problēma:** Kursa **paskaidrojošais** UI (ne vācu mācību piemēri) nav dāņu.  
**Pareizais DA variants:** Pilns UI tulkojums/atjaunošana atsevišķā posmā  
**Pamatojums:** Lietotājam redzams kursa satura UI; nav attiecināms uz vācu dialogiem/vārdnīcu.  
**Smagums:** MEDIUM (apjomīgs; grupēts)

---

### DA-008 — DA-009 (anglicismi)

**ID:** DA-008 — `info.problemBody`: «flow» → **forløb**  
**ID:** DA-009 — `info.unwantedBody`: «feedet» → **listen** / **træningen**  
**Smagums:** MEDIUM / LOW

---

## 6. LOW atradumi (lingvistiskā kvalitāte `da/ui.js`)

| ID | Atslēga | Pašreiz | Pareizais DA variants |
|----|---------|---------|----------------------|
| DA-010 | `hints.tapToReveal`, `verb.hintTap*`, `study.hints.*` | **Klik** | Vienot **Tryk** (kā `kurss.hints.*`) |
| DA-011 | `verb.noShuffleForms`, `notices.verbShuffle*` | **verbum** | **verber** / **udsagnsord** |
| DA-012 | `study.minimal.tipLabel` | **Tip:** | **Råd:** |
| DA-013 | `study.minimal.pluralLabel` vs `card.pluralLabel` | **FL.** vs **Fl.** | Vienot **Fl.** |
| DA-014 | `kurss.lessonsDesc`, `lessonsSubtitle` | Undervisningslektioner… | **Lektioner i rækkefølge fra 1 til 21** |
| DA-015 | `kurss.exerciseMeta.translate` | oversæt | **Oversæt** |
| DA-016 | `kurss.exerciseMeta.chooseCasePlural` | Sæt… lav flertal | **Vælg/brug… bøj i flertal** |
| DA-017 | `kurss.lessonItems.11.menuDesc` | possessiv | **ejerpronominer** |
| DA-018 | `kurss.lessonItems.20.menuDesc` | etage | **Stockwerk** (curriculum term) |
| DA-019 | `lessonItems.6/17.menuDesc` | umlaut / Umlaut | Vienot **Umlaut** |
| DA-020 | `notices.errorLevelReduced` vs `info.problemBody` | fejlprocent / fejlgrad | Vienot terminu |
| DA-021 | `buttons.autoplayOn/Off` | …til / …fra | **slået til / slået fra** |

---

## 7. Svešvalodu atlikumi — kopsavilkums

| Avots | Valoda | Piemēri | UI defekts? |
|-------|--------|---------|-------------|
| `index.html` noklusējums | Latviešu | `Galvenā izvēlne`, `Klausīties`, `Problemātiskie vārdi` | **Jā** (līdz JS boot) |
| Splash / language screen | Vācu + latviešu | `Deutsche Sprache`, `Palaišana` | **Jā** |
| `courseLessons.js` sekcijas | Jauktas | `Dialogi / teikumi` | **Jā** |
| `courseLessons.js` legacy HTML | Latviešu/angļu | Sk. DATA-UI-003 | **Jā** (UI skaidrojumi) |
| `da/ui.js` | — | Nav LV/EN/BS/CS atlikumu | **Nē** |
| Vācu mācību saturs | Vācu | `der Tisch`, `Übung I`, dialogi | **FALSE_POSITIVE** |
| CEFR līmeņi A1–C2 | Starptautiski | A1, B2 | **FALSE_POSITIVE** |
| `kurss.*` gramatikas termini | Vācu pedagoģija | Nominativ, Akkusativ, modalverber | **FALSE_POSITIVE** |

---

## 8. Lingvistiskā kvalitāte — kopējais vērtējums

| Aspekts | Vērtējums |
|---------|-----------|
| Pareizrakstība (æ/ø/å) | **Labi** — sistemātisku kļūdu nav |
| Gramatika | **Vidēji** — DA-005, DA-006, DA-016 |
| Dabiska dāņu valoda | **Vidēji–labi** — DA-001, anglicismi, «Lekcija»/«Lektion» |
| Terminoloģijas konsekvence | **Vidēji** — uønsket/unødvendig, verbum/verber, Klik/Tryk |
| Pogu/virsrakstu formulējumi | **Labi** — izņemot `buttons.restore` |
| Vienots uzrunas stils | **Labi** — du-forma instrukcijās |

---

## 9. FALSE_POSITIVE (nav jālabo kā UI defekts)

| ID | Konteksts | Pamatojums |
|----|-----------|------------|
| FP-01 | `kurss.sections.exerciseCombined`: `Übung / Øvelse` | Apzināts divvalodigs sekcijas galvenes paraugs |
| FP-02 | `kurss.exerciseMeta.fillCase/translate`: `Übung I/II` | Vācu vingrinājumu zīmols |
| FP-03 | Lekciju `menuDesc` vācu verb/formu saraksti | Mācāmā valoda (DE) |
| FP-04 | `app.title`: `Tysk • DA-DE` | Locale-pair konvencija (≠ «DA DE» ar atstarpi) |
| FP-05 | `direction.deToNative` / `{code}` placeholders | Dizaina princips |
| FP-06 | `tools.problemShort`: `Prob.`, `Stav.` | Saīsinājumu paraugs |
| FP-07 | `Session` loanword | Akceptējams dāņu IT kontekstā |
| FP-08 | `plural.*`: visi `ord` | Korekti dāņu skaitīšanai |
| FP-09 | `menu.course` / `kurss.title`: `Kursus` | Pareizs dāņu |
| FP-10 | `verb.pastParticiple`: `Perfektum participium` | Gramatikas terminoloģija |
| FP-11 | `modes.intense`: `Intensiv` | Režīma etiķete |
| FP-12 | `buttons.markMastered`: `Jeg kan 100%` | Dabisks |
| FP-13 | Vācu substantīvi/verbi kursa saturā | DE mācību saturs |
| FP-14 | `study.table.german`: `DE`, `native`: `DA` | Valodu kodi |
| FP-15 | CEFR A1–C2 pogas | Starptautisks standarts |
| FP-16 | `verb.infinitiv` dublikāts | Strukturāla EN paritāte |
| FP-17 | `kurss.pronouns`: `Pronominer` | DE gramatikas konteksts |
| FP-18 | `index.html` h1 pārraksta pēc boot | Īslaicīgs FOUC, ne pastāvīgs stāvoklis |

---

## 10. Pilns labojamo vietu saraksts (CURRENT → NEW)

### Kritiskie renderer / i18n integrācijas labojumi

| # | CURRENT | NEW |
|---|---------|-----|
| 1 | `COURSE_TRANSLATE_SECTION_TITLES` bez `Oversætte`/`Oversæt` | Pievienot abus + i18n kartējumu |
| 2 | `COURSE_EXERCISE_SECTION_TITLES` bez `Øvelse`/`Übung / Øvelse` | Pievienot abus + i18n kartējumu |
| 3 | `STUDY_MAIN_IDEA_PREFIXES` bez `Hovedidé` | Pievienot `Hovedidé` |
| 4 | `buttons.restore`: Tilbage | Gendan |
| 5 | `getCourseExerciseHint()` bez DA nosaukumiem | Atbalstīt `Øvelse`, `Übung / Øvelse` |
| 6 | L9 zars bez `Übung / Øvelse` | Pievienot nosacījumu |

### HTML / launch (DA redzams teksts)

| # | CURRENT | NEW |
|---|---------|-----|
| 7 | Splash: Deutsche Sprache / Deutsch lernen | Tysk / Lær tysk |
| 8 | Splash aria: Palaišana | Indlæser (vai jauna atslēga) |
| 9 | Language screen: Sprache wählen | Vælg sprog |
| 10 | shell aria: Vācu–latviešu kartītes | Tysk–dansk kort |
| 11 | mainNav aria: Galvenā izvēlne | Hovedmenu |
| 12 | quickTools aria: Ātrie rīki | Hurtige værktøjer |
| 13 | modeButtons aria: Mācīšanās režīmi | Læringstilstande |
| 14 | pluralAudio aria: Klausīties daudzskaitli | Lyt til flertal |

### `languages/da/ui.js` lingvistika

| # | CURRENT | NEW |
|---|---------|-----|
| 15 | unødvendig (4 atslēgas) | uønsket |
| 16 | overstregede | overstreget |
| 17 | gendanne skjulte | gendan skjulte ord |
| 18 | Månedlig rapport fuldført | Månedlig gennemgang fuldført |
| 19 | flow / feedet | forløb / listen |
| 20 | Klik (vairākās atslēgās) | Tryk |
| 21 | Tip: | Råd: |
| 22 | oversæt (exerciseMeta) | Oversæt |

### Kursa datu UI virsraksti (atsevišķs posms — **nav mainīts auditā**)

| # | CURRENT | NEW |
|---|---------|-----|
| 23 | Dialogi / teikumi | Dialoger / sætninger |
| 24 | Lekcija N ( datos ) | Lektion N |
| 25 | Legacy HTML LV/EN fragmenti | Pilns dāņu UI tulkojums |

---

## 11. Pārbaudes metodoloģija

1. Automātiska DA/EN/LV atslēgu paritātes analīze (Node.js flatten).
2. Pilna `languages/da/ui.js` lingvistiskā pārskatīšana pret EN avotu.
3. `www/ui.js` renderer reģistru un `applyLocalizedStaticUi()` caurskanēšana.
4. `www/index.html` hardcoded tekstu inventārs.
5. `www/data/da/courseLessons.js` sekciju nosaukumu un legacy HTML analīze.
6. `STUDY_MAIN_IDEA_PREFIXES` vs `www/data/da/*.js` `Hovedidé` lietojums.
7. Meklēšana pēc svešvalodu paraugiem (LV, EN, BS, CS) ar konteksta vērtējumu.

---

## 12. Slēdzenes un ierobežojumi

- **Nav mainīts:** `languages/da/data/*`, `www/data/da/*` (izņemot šo atskaiti), citu valodu faili, rendereru loģika.
- **DE mācību saturs** (vācu vārdi, teikumi, dialogi) **nav** klasificēts kā UI defekts.
- Daļa `index.html` tekstu tiek pārrakstīti pēc `bootAppUi()` — defekts attiecas uz **palaišanu, aria-label un course renderer**, nevis uz galveno pogas tekstu pēc init.
- Kursa legacy HTML LV/EN apjoms ir **liels**; šajā auditā tas grupēts kā DATA-UI-003; detalizēts kartīšu-pa-kartītei audits var tikt pieprasīts atsevišķi.

---

**Production changes = 0**

**DA UI LOCALIZATION: NEEDS REPAIR**
