# DA–DE Kurss — OWNER review — statiskā UI paritāte (LV etalons)

Avots: LV etalons `data/courseLessons.js` + `languages/lv/ui.js` salīdzināts ar DA `data/da/courseLessons.js` + `languages/da/ui.js`
Findings: **1–23** (23 ieraksti)

> **PROPOSED_DA** ir ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-owner-decisions-static-ui-parity.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA UI un Kurss HTML tulkojumus.
> Izvēlnes kartītes (piem. **Patskaņi — garš un īss** / **Vokaler — lange og korte**) ir **kopīga HTML/CSS** — atšķiras tikai teksts.

## Finding 1

**Audit ID:** DA-KURSS-UI-0001
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.pronunciation + pronunciationDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.pronunciation + pronunciationDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Izruna / Vācu valodas skaņas un izrunas pamati.
**CURRENT_DA:** Udtale / Grundlæggende tyske lyde og udtale.
**PROPOSED_DA:** Udtale / Grundlæggende tyske lyde og udtale.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-UI-0002
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.articles + articlesDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.articles + articlesDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Artikuli / Der, die, das un lietojuma pamati.
**CURRENT_DA:** Artikler / Der, die, das og grundlæggende brug.
**PROPOSED_DA:** Artikler / Der, die, das og grundlæggende brug.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-UI-0003
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.pronouns + pronounsDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.pronouns + pronounsDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Vietniekvārdi / Nominativ, Akkusativ un Dativ formas.
**CURRENT_DA:** Pronominer / Former i nominativ, akkusativ og dativ.
**PROPOSED_DA:** Pronominer / Former i nominativ, akkusativ og dativ.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-UI-0004
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.lessons + lessonsDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.lessons + lessonsDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Lekcijas / Mācību lekcijas secīgā kārtībā no 1 līdz 21.
**CURRENT_DA:** Lektioner / Undervisningslektioner i rækkefølge fra 1 til 21.
**PROPOSED_DA:** Lektioner / Undervisningslektioner i rækkefølge fra 1 til 21.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-UI-0005
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.verbBasics + verbBasicsDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.verbBasics + verbBasicsDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Darbības vārdu pamati / Personas, formas un biežākie darbības vārdi.
**CURRENT_DA:** Grundlæggende verber / Personer, former og almindelige verber.
**PROPOSED_DA:** Grundlæggende verber / Personer, former og almindelige verber.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-UI-0006
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.sentenceStructure + sentenceStructureDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.sentenceStructure + sentenceStructureDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Teikumu uzbūve / Vienkārša vārdu secība vācu teikumos.
**CURRENT_DA:** Sætningsstruktur / Enkel ordstilling i tyske sætninger.
**PROPOSED_DA:** Sætningsstruktur / Enkel ordstilling i tyske sætninger.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-UI-0007
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.vowelsTitle + vowelsDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.vowelsTitle + vowelsDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Patskaņi — garš un īss / Garie un īsie patskaņi ar piemēriem.
**CURRENT_DA:** Vokaler — lange og korte / Lange og korte vokaler med eksempler.
**PROPOSED_DA:** Vokaler — lange og korte / Lange og korte vokaler med eksempler.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-UI-0008
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.consonantsTitle + consonantsDesc`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.consonantsTitle + consonantsDesc`
**Production file:** `languages/da/ui.js`
**LV reference:** Līdzskaņi un burtu savienojumi / Svarīgākās līdzskaņu skaņas iesācējam.
**CURRENT_DA:** Konsonanter og bogstavkombinationer / De vigtigste konsonantlyde for begyndere.
**PROPOSED_DA:** Konsonanter og bogstavkombinationer / De vigtigste konsonantlyde for begyndere.
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-UI-0009
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.title + subtitle`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.title + subtitle`
**Production file:** `languages/da/ui.js`
**LV reference:** Kurss / Vācu valodas pamati soli pa solim
**CURRENT_DA:** Kursus / Grundlæggende tysk trin for trin
**PROPOSED_DA:** Kursus / Grundlæggende tysk trin for trin
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-UI-0010
**Lesson/ID:** `ui-menu`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.tipTitle + tipBody`
**DE (read-only):** —
**Severity:** INFO
**Field:** `kurss.tipTitle + tipBody`
**Production file:** `languages/da/ui.js`
**LV reference:** Padoms / Klausies, atkārto un salīdzini. Tava auss ir labākais skolotājs!
**CURRENT_DA:** Råd / Lyt, gentag og sammenlign. Dit øre er den bedste lærer!
**PROPOSED_DA:** Råd / Lyt, gentag og sammenlign. Dit øre er den bedste lærer!
**Problēma:** Kopīga Kurss izvēlnes kartītes struktūra (index.html + style.css). Salīdzina tikai UI tulkojumu pret LV etalonu.
**Audita pamatojums:** Ja DA teksts ir dabīgs dāņu tulkojums, atstāt (NELABOT).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-UI-0011
**Lesson/ID:** `kurssArticlesLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**DE (read-only):** —
**Severity:** INFO
**Field:** `legacyHtml block`
**Production file:** `data/da/courseLessons.js`
**LV reference:** (LV etalons data/courseLessons.js, 6959 chars)
**CURRENT_DA:** (6339 chars) <h3>Artikler</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Den tyske artikel falder ikke altid sammen med det engelske kønssys…
**PROPOSED_DA:** (struktūra OK — labot tikai konkrētus tulkojumus, skat. findings 0017+)
**Problēma:** HTML struktūra (artikuli-block / kurss-lesson-section) atbilst LV etalonam.
**Audita pamatojums:** Ja saturs pilns, NELABOT struktūrai.
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-UI-0012
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**DE (read-only):** —
**Severity:** INFO
**Field:** `legacyHtml block`
**Production file:** `data/da/courseLessons.js`
**LV reference:** (LV etalons data/courseLessons.js, 3371 chars)
**CURRENT_DA:** (3320 chars) <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div> </di…
**PROPOSED_DA:** (struktūra OK — labot tikai konkrētus tulkojumus, skat. findings 0017+)
**Problēma:** HTML struktūra (artikuli-block / kurss-lesson-section) atbilst LV etalonam.
**Audita pamatojums:** Ja saturs pilns, NELABOT struktūrai.
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-UI-0013
**Lesson/ID:** `kurssPronunciationLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**DE (read-only):** —
**Severity:** INFO
**Field:** `legacyHtml block`
**Production file:** `data/da/courseLessons.js`
**LV reference:** (LV etalons data/courseLessons.js, 8888 chars)
**CURRENT_DA:** (7913 chars) <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-sect…
**PROPOSED_DA:** (struktūra OK — labot tikai konkrētus tulkojumus, skat. findings 0017+)
**Problēma:** HTML struktūra (artikuli-block / kurss-lesson-section) atbilst LV etalonam.
**Audita pamatojums:** Ja saturs pilns, NELABOT struktūrai.
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-UI-0014
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** INFO
**Field:** `legacyHtml block`
**Production file:** `data/da/courseLessons.js`
**LV reference:** (LV etalons data/courseLessons.js, 5105 chars)
**CURRENT_DA:** (4476 chars) <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag i…
**PROPOSED_DA:** (struktūra OK — labot tikai konkrētus tulkojumus, skat. findings 0017+)
**Problēma:** HTML struktūra (artikuli-block / kurss-lesson-section) atbilst LV etalonam.
**Audita pamatojums:** Ja saturs pilns, NELABOT struktūrai.
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-UI-0015
**Lesson/ID:** `kurssVerbBasicsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssVerbBasicsLesson`
**DE (read-only):** —
**Severity:** INFO
**Field:** `legacyHtml block`
**Production file:** `data/da/courseLessons.js`
**LV reference:** (LV etalons data/courseLessons.js, 7050 chars)
**CURRENT_DA:** (6241 chars) <h3>Grundlæggende verber</h3> <p class="kurss-lesson-intro">Verber og bøjninger fra lektion 1.</p> <section class="kurss-lesson-section"> <h4>Verber</h4> <div class="kurss-examples…
**PROPOSED_DA:** (struktūra OK — labot tikai konkrētus tulkojumus, skat. findings 0017+)
**Problēma:** HTML struktūra (artikuli-block / kurss-lesson-section) atbilst LV etalonam.
**Audita pamatojums:** Ja saturs pilns, NELABOT struktūrai.
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-UI-0016
**Lesson/ID:** `kurssSentenceStructureLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
**DE (read-only):** —
**Severity:** INFO
**Field:** `legacyHtml block`
**Production file:** `data/da/courseLessons.js`
**LV reference:** (LV etalons data/courseLessons.js, 3573 chars)
**CURRENT_DA:** (3238 chars) <h3>Sætningsstruktur</h3> <p class="kurss-lesson-intro">I en spørgsmålssætning kommer verbet normalt først på tysk.</p> <section class="kurss-lesson-section"> <h4>Eksempler</h4> <d…
**PROPOSED_DA:** (struktūra OK — labot tikai konkrētus tulkojumus, skat. findings 0017+)
**Problēma:** HTML struktūra (artikuli-block / kurss-lesson-section) atbilst LV etalonam.
**Audita pamatojums:** Ja saturs pilns, NELABOT struktūrai.
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-UI-0017
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example pill`
**Production file:** `data/da/courseLessons.js`
**LV reference:** er — viņš
**CURRENT_DA:** Øh — han
**PROPOSED_DA:** er — han
**Problēma:** Vācu forma er aizstāta ar “Øh”
**Audita pamatojums:** Pronomenu tabulā jābūt vācu formai + dāņu tulkojumam (kā LV etalonā).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-UI-0018
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example pill`
**Production file:** `data/da/courseLessons.js`
**LV reference:** du — tu
**CURRENT_DA:** Du — dig
**PROPOSED_DA:** du — du
**Problēma:** Akkusativ “dig” nevis Nominativ “du”
**Audita pamatojums:** Pronomenu tabulā jābūt vācu formai + dāņu tulkojumam (kā LV etalonā).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-KURSS-UI-0019
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example pill`
**Production file:** `data/da/courseLessons.js`
**LV reference:** sie — viņa
**CURRENT_DA:** Sie — hun
**PROPOSED_DA:** sie — hun
**Problēma:** Lielais S = pieklājības Sie, nevis sie (viņa)
**Audita pamatojums:** Pronomenu tabulā jābūt vācu formai + dāņu tulkojumam (kā LV etalonā).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-KURSS-UI-0020
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ`
**DE (read-only):** —
**Severity:** HIGH
**Field:** `kurss-example pill`
**Production file:** `data/da/courseLessons.js`
**LV reference:** es — tas
**CURRENT_DA:** Jeg — det
**PROPOSED_DA:** es — det
**Problēma:** “Jeg” ir dāņu, nevis vācu es
**Audita pamatojums:** Pronomenu tabulā jābūt vācu formai + dāņu tulkojumam (kā LV etalonā).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-KURSS-UI-0021
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example pill`
**Production file:** `data/da/courseLessons.js`
**LV reference:** ihr — jūs
**CURRENT_DA:** Ihr — dig
**PROPOSED_DA:** ihr — I
**Problēma:** Akkusativ “dig” nevis Nominativ ihr
**Audita pamatojums:** Pronomenu tabulā jābūt vācu formai + dāņu tulkojumam (kā LV etalonā).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-KURSS-UI-0022
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ`
**DE (read-only):** —
**Severity:** HIGH
**Field:** `kurss-example pill`
**Production file:** `data/da/courseLessons.js`
**LV reference:** sie — viņi / viņas
**CURRENT_DA:** Slips — de/hende
**PROPOSED_DA:** sie — de/hende
**Problēma:** “Slips” nav vācu pronomens sie
**Audita pamatojums:** Pronomenu tabulā jābūt vācu formai + dāņu tulkojumam (kā LV etalonā).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-KURSS-UI-0023
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ`
**DE (read-only):** —
**Severity:** HIGH
**Field:** `kurss-example pill`
**Production file:** `data/da/courseLessons.js`
**LV reference:** Sie — Jūs (pieklājības)
**CURRENT_DA:** Slips — dig (høflighed)
**PROPOSED_DA:** Sie — De (høflighed)
**Problēma:** “Slips” nav vācu Sie
**Audita pamatojums:** Pronomenu tabulā jābūt vācu formai + dāņu tulkojumam (kā LV etalonā).
**Avots:** Kurss static UI parity review (LV etalons vs DA-DE)

**OWNER_DECISION:**

---
