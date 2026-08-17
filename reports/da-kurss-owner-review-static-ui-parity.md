# DA–DE Kurss — OWNER review — statisko nodarbību UI paritāte (LV etalons)

Mērķis: salīdzināt **LV-DE etalonu** un **DA-DE** Kurss izvēlnes tekstus + statisko HTML panelu struktūru.

> **DE = STRICT READ-ONLY.**
> **LV = etalons (paraugs).**
> Ekrānšāviņos redzamā izvēlnes kartīte (“Patskaņi — garš un īss” / “Vokaler — lange og korte”) ir **kopīga HTML/CSS struktūra** — atšķiras tikai tulkojums.

Findings: **18**

---

## Finding 1

**Audit ID:** `DA-KURSS-UI-0001`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.pronunciation + pronunciationDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Izruna
**Apraksts / struktūra:** Vācu valodas skaņas un izrunas pamati.

### DA-DE (pašreizējais)

**Virsraksts:** Udtale
**Apraksts / struktūra:** Grundlæggende tyske lyde og udtale.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** `DA-KURSS-UI-0002`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.articles + articlesDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Artikuli
**Apraksts / struktūra:** Der, die, das un lietojuma pamati.

### DA-DE (pašreizējais)

**Virsraksts:** Artikler
**Apraksts / struktūra:** Der, die, das og grundlæggende brug.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** `DA-KURSS-UI-0003`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.pronouns + pronounsDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Vietniekvārdi
**Apraksts / struktūra:** Nominativ, Akkusativ un Dativ formas.

### DA-DE (pašreizējais)

**Virsraksts:** Pronominer
**Apraksts / struktūra:** Former i nominativ, akkusativ og dativ.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** `DA-KURSS-UI-0004`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessons + lessonsDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Lekcijas
**Apraksts / struktūra:** Mācību lekcijas secīgā kārtībā no 1 līdz 21.

### DA-DE (pašreizējais)

**Virsraksts:** Lektioner
**Apraksts / struktūra:** Undervisningslektioner i rækkefølge fra 1 til 21.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** `DA-KURSS-UI-0005`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.verbBasics + verbBasicsDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Darbības vārdu pamati
**Apraksts / struktūra:** Personas, formas un biežākie darbības vārdi.

### DA-DE (pašreizējais)

**Virsraksts:** Grundlæggende verber
**Apraksts / struktūra:** Personer, former og almindelige verber.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** `DA-KURSS-UI-0006`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.sentenceStructure + sentenceStructureDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Teikumu uzbūve
**Apraksts / struktūra:** Vienkārša vārdu secība vācu teikumos.

### DA-DE (pašreizējais)

**Virsraksts:** Sætningsstruktur
**Apraksts / struktūra:** Enkel ordstilling i tyske sætninger.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** `DA-KURSS-UI-0007`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.vowelsTitle + vowelsDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Patskaņi — garš un īss
**Apraksts / struktūra:** Garie un īsie patskaņi ar piemēriem.

### DA-DE (pašreizējais)

**Virsraksts:** Vokaler — lange og korte
**Apraksts / struktūra:** Lange og korte vokaler med eksempler.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** `DA-KURSS-UI-0008`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.consonantsTitle + consonantsDesc`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Līdzskaņi un burtu savienojumi
**Apraksts / struktūra:** Svarīgākās līdzskaņu skaņas iesācējam.

### DA-DE (pašreizējais)

**Virsraksts:** Konsonanter og bogstavkombinationer
**Apraksts / struktūra:** De vigtigste konsonantlyde for begyndere.

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** `DA-KURSS-UI-0009`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.title + subtitle`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Kurss
**Apraksts / struktūra:** Vācu valodas pamati soli pa solim

### DA-DE (pašreizējais)

**Virsraksts:** Kursus
**Apraksts / struktūra:** Grundlæggende tysk trin for trin

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** `DA-KURSS-UI-0010`
**Apgabals:** UI menu
**Path:** `LANGUAGE_UI_STRINGS.kurss.tipTitle + tipBody`
**Severity:** INFO
**Category:** UI_PARITY

### LV-DE (etalons / paraugs)

**Virsraksts:** Padoms
**Apraksts / struktūra:** Klausies, atkārto un salīdzini. Tava auss ir labākais skolotājs!

### DA-DE (pašreizējais)

**Virsraksts:** Råd
**Apraksts / struktūra:** Lyt, gentag og sammenlign. Dit øre er den bedste lærer!

**Problēma / piezīme:** Menu kartītes struktūra kopīga (index.html + style.css). Salīdzina tikai tekstu.

**Statuss:**

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** `DA-KURSS-UI-0011`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**Severity:** INFO
**Category:** STRUCTURE_OK

### LV-DE (etalons / paraugs)

**Virsraksts:** kurssArticlesLesson (6959 chars)
**Apraksts / struktūra:** Klases: artikuli-block, artikuli-bottom-info, artikuli-explain, artikuli-grid, artikuli-header, artikuli-info, artikuli-info-icon, artikuli-intro-info
**Fragments:** <h3>Artikuli</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Vācu artikuls ne vienmēr sakrīt ar latviešu dzimti. Tāpēc lietvārdus vislabāk mācīties kopā ar artikulu.</d

### DA-DE (pašreizējais)

**Virsraksts:** kurssArticlesLesson (6339 chars)
**Apraksts / struktūra:** Klases: artikuli-block, artikuli-bottom-info, artikuli-explain, artikuli-grid, artikuli-header, artikuli-info, artikuli-info-icon, artikuli-intro-info
**Fragments:** <h3>Artikler</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Den tyske artikel falder ikke altid sammen med det engelske kønssystem. Derfor læres navneord bedst sammen 

**Problēma / piezīme:** Struktūra atbilst LV etalonam (artikuli-block / kurss-lesson-section).

**Statuss:**

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** `DA-KURSS-UI-0012`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**Severity:** INFO
**Category:** STRUCTURE_OK

### LV-DE (etalons / paraugs)

**Virsraksts:** kurssPronounsLesson (3371 chars)
**Apraksts / struktūra:** Klases: artikuli-block, artikuli-bottom-info, artikuli-grid, artikuli-header, artikuli-info, artikuli-info-icon, artikuli-intro-info, kurss-example
**Fragments:** <h3>Vietniekvārdi</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ un Dativ — vietniekvārdu formas.</div> </div> <section class="artikuli-block"> <h

### DA-DE (pašreizējais)

**Virsraksts:** kurssPronounsLesson (3320 chars)
**Apraksts / struktūra:** Klases: artikuli-block, artikuli-bottom-info, artikuli-grid, artikuli-header, artikuli-info, artikuli-info-icon, artikuli-intro-info, kurss-example
**Fragments:** <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div> </div> <section class="artikuli-block"> <h4 

**Problēma / piezīme:** Struktūra atbilst LV etalonam (artikuli-block / kurss-lesson-section).

**Statuss:**

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** `DA-KURSS-UI-0013`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**Severity:** INFO
**Category:** STRUCTURE_OK

### LV-DE (etalons / paraugs)

**Virsraksts:** kurssPronunciationLesson (8888 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section, kurss-summary-list
**Fragments:** <h3>Patskaņi — garš un īss</h3> <p class="kurss-lesson-intro">Vācu valodā patskaņi var būt gari vai īsi. Tas ietekmē vārda izrunu.</p> <section class="kurss-lesson-section"> <h4>Garš patskanis</h4> <div class="kurss-exam

### DA-DE (pašreizējais)

**Virsraksts:** kurssPronunciationLesson (7913 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section, kurss-summary-list
**Fragments:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="ku

**Problēma / piezīme:** Struktūra atbilst LV etalonam (artikuli-block / kurss-lesson-section).

**Statuss:**

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** `DA-KURSS-UI-0014`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**Severity:** INFO
**Category:** STRUCTURE_OK

### LV-DE (etalons / paraugs)

**Virsraksts:** kurssConsonantsLesson (5105 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section, kurss-summary-list
**Fragments:** <h3>Līdzskaņi un burtu savienojumi</h3> <p class="kurss-lesson-intro">Vācu valodā daži līdzskaņi un burtu savienojumi tiek izrunāti citādi nekā tos raksta. Šajā lekcijā ir svarīgākie piemēri iesācējam.</p> <section class

### DA-DE (pašreizējais)

**Virsraksts:** kurssConsonantsLesson (4476 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section, kurss-summary-list
**Fragments:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for beg

**Problēma / piezīme:** Struktūra atbilst LV etalonam (artikuli-block / kurss-lesson-section).

**Statuss:**

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** `DA-KURSS-UI-0015`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssVerbBasicsLesson`
**Severity:** INFO
**Category:** STRUCTURE_OK

### LV-DE (etalons / paraugs)

**Virsraksts:** kurssVerbBasicsLesson (7050 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section
**Fragments:** <h3>Darbības vārdu pamati</h3> <p class="kurss-lesson-intro">1. lekcijas darbības vārdi un locījumi.</p> <section class="kurss-lesson-section"> <h4>Darbības vārdi</h4> <div class="kurss-examples"><div class="kurss-exampl

### DA-DE (pašreizējais)

**Virsraksts:** kurssVerbBasicsLesson (6241 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section
**Fragments:** <h3>Grundlæggende verber</h3> <p class="kurss-lesson-intro">Verber og bøjninger fra lektion 1.</p> <section class="kurss-lesson-section"> <h4>Verber</h4> <div class="kurss-examples"><div class="kurss-example">kommen — at

**Problēma / piezīme:** Struktūra atbilst LV etalonam (artikuli-block / kurss-lesson-section).

**Statuss:**

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** `DA-KURSS-UI-0016`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
**Severity:** INFO
**Category:** STRUCTURE_OK

### LV-DE (etalons / paraugs)

**Virsraksts:** kurssSentenceStructureLesson (3573 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section
**Fragments:** <h3>Teikumu uzbūve</h3> <p class="kurss-lesson-intro">Jautājuma teikumā darbības vārds vācu valodā parasti stāv pirmajā vietā.</p> <section class="kurss-lesson-section"> <h4>Piemēri</h4> <div class="kurss-examples"><div 

### DA-DE (pašreizējais)

**Virsraksts:** kurssSentenceStructureLesson (3238 chars)
**Apraksts / struktūra:** Klases: kurss-example, kurss-examples, kurss-lesson-intro, kurss-lesson-section
**Fragments:** <h3>Sætningsstruktur</h3> <p class="kurss-lesson-intro">I en spørgsmålssætning kommer verbet normalt først på tysk.</p> <section class="kurss-lesson-section"> <h4>Eksempler</h4> <div class="kurss-examples"><div class="ku

**Problēma / piezīme:** Struktūra atbilst LV etalonam (artikuli-block / kurss-lesson-section).

**Statuss:**

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** `DA-KURSS-UI-0017`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**Severity:** MEDIUM
**Category:** TRANSLATION

### LV-DE (etalons / paraugs)

**Virsraksts:** <h3>Vietniekvārdi</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ un Dativ — vietniekvārdu formas.</div> </div> <section class="artikuli-block"> <h
**Apraksts / struktūra:** LV etalons

### DA-DE (pašreizējais)

**Virsraksts:** er — Øh
**Apraksts / struktūra:** Øh nav pareizs tulkojums er

**PROPOSED_DA:** <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div> </div> <section class="artikuli-block"> <h4 class="artikuli-header"><span>N</span>Nominativ - hvad?</h4> <div class="artikuli-grid"><div class="kurss-example">Ich - jeg</div><div class="kurss-example">Du - dig</div><div clas

**Problēma / piezīme:** Øh nav pareizs tulkojums er

**Statuss:**

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** `DA-KURSS-UI-0018`
**Apgabals:** Static HTML
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**Severity:** MEDIUM
**Category:** TRANSLATION

### LV-DE (etalons / paraugs)

**Virsraksts:** <h3>Vietniekvārdi</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ un Dativ — vietniekvārdu formas.</div> </div> <section class="artikuli-block"> <h
**Apraksts / struktūra:** LV etalons

### DA-DE (pašreizējais)

**Virsraksts:** Slips
**Apraksts / struktūra:** Sie (høflighed) nav “Slips”

**PROPOSED_DA:** <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div> </div> <section class="artikuli-block"> <h4 class="artikuli-header"><span>N</span>Nominativ - hvad?</h4> <div class="artikuli-grid"><div class="kurss-example">Ich - jeg</div><div class="kurss-example">Du - dig</div><div clas

**Problēma / piezīme:** Sie (høflighed) nav “Slips”

**Statuss:**

**OWNER_DECISION:**

---
