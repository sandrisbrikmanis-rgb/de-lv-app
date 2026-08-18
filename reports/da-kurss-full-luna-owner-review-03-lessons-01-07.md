# DA–DE Kurss — OWNER review — Lekcijas 1–7 (legacyHtml + saturs)

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`
Findings: **1–20** (20 ieraksti)
Auditors: **GPT-5.6 Luna** (READ-ONLY)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-full-luna-owner-decisions-03-lessons-01-07.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## Finding 1

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-001
**Source audit ID:** `DA-KURSS-0001`
**Lesson/ID:** `lesson1`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Lektion 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="lesso…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, LV_WORD, EN, ZERO_WIDTH
**Audita pamatojums:** Detected: LV_DIAC, LV_WORD, EN, ZERO_WIDTH
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-002
**Source audit ID:** `DA-KURSS-0002`
**Lesson/ID:** `lesson2`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, LV_WORD, EN
**Audita pamatojums:** Detected: LV_DIAC, LV_WORD, EN
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-003
**Source audit ID:** `DA-KURSS-0003`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, LV_WORD
**Audita pamatojums:** Detected: LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-004
**Source audit ID:** `DA-KURSS-0004`
**Lesson/ID:** `lesson4`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC
**Audita pamatojums:** Detected: LV_DIAC
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-005
**Source audit ID:** `DA-KURSS-0005`
**Lesson/ID:** `lesson5`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler st…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, LV_WORD
**Audita pamatojums:** Detected: LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-006
**Source audit ID:** `DA-KURSS-0006`
**Lesson/ID:** `lesson6`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, LV_WORD
**Audita pamatojums:** Detected: LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-007
**Source audit ID:** `DA-KURSS-0007`
**Lesson/ID:** `lesson7`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Lektion 7</h3><p class="kurss-lesson-intro">Syvende lektion: imperativ, tiltaleform og flertal.</p><details class="lesson1-accordion" open><summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Was tust du?…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC
**Audita pamatojums:** Detected: LV_DIAC
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-008
**Source audit ID:** `DA-KURSS-L0001`
**Lesson/ID:** `lesson1`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Lektion 1</h3> ...
**PROPOSED_DA:** Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
**Problēma:** Feltet indeholder lettisk tekst samt flere upræcise eller fejlagtige danske grammatik- og oversættelsesfragmenter.
**Audita pamatojums:** Feltet indeholder lettisk tekst samt flere upræcise eller fejlagtige danske grammatik- og oversættelsesfragmenter.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-009
**Source audit ID:** `DA-KURSS-L0002`
**Lesson/ID:** `lesson2`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 2</h3> ...
**PROPOSED_DA:** Līdzskaņu kopojumu sp udtales som šp: spielen (špīlen).
**Problēma:** Feltet indeholder lettiske sætninger og en ordliste med alvorligt forkerte danske betydninger, fx »was tun sie? — beregne« og »antworten — Marie«.
**Audita pamatojums:** Feltet indeholder lettiske sætninger og en ordliste med alvorligt forkerte danske betydninger, fx »was tun sie? — beregne« og »antworten — Marie«.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-010
**Source audit ID:** `DA-KURSS-L0003`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.subtitle`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `subtitle`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Dialoger, ord, udtale, grammatik og oversættelse
**PROPOSED_DA:** Artikler, stedord og oversættelse
**Problēma:** Indholdet svarer ikke til strukturreferencen: lektionen handler om artikler, stedord og oversættelse, ikke dialoger, udtale og grammatik.
**Audita pamatojums:** Indholdet svarer ikke til strukturreferencen: lektionen handler om artikler, stedord og oversættelse, ikke dialoger, udtale og grammatik.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-011
**Source audit ID:** `DA-KURSS-L0004`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 3</h3> ...
**PROPOSED_DA:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
**Problēma:** Feltet indeholder omfattende lettiske rester, forkerte ordlistebetydninger og en ødelagt Markdown-/HTML-lignende placeholder i træningskortet.
**Audita pamatojums:** Feltet indeholder omfattende lettiske rester, forkerte ordlistebetydninger og en ødelagt Markdown-/HTML-lignende placeholder i træningskortet.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-012
**Source audit ID:** `DA-KURSS-L0005`
**Lesson/ID:** `lesson4`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 4</h3> ...
**PROPOSED_DA:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
**Problēma:** Feltet indeholder lettiske rester og flere alvorlige ordlistefejl, fx »einen Federhalter — sort« og »antworten — Marie«-lignende fejloversættelser.
**Audita pamatojums:** Feltet indeholder lettiske rester og flere alvorlige ordlistefejl, fx »einen Federhalter — sort« og »antworten — Marie«-lignende fejloversættelser.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-013
**Source audit ID:** `DA-KURSS-L0006`
**Lesson/ID:** `lesson5`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 5</h3> ...
**PROPOSED_DA:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
**Problēma:** Feltet indeholder lettisk tekst i grammatikafsnittene og en forkert dansk gloss »wen — hvem«, hvor akkusativbetydningen bør fremgå som »hvem/den hvem«.
**Audita pamatojums:** Feltet indeholder lettisk tekst i grammatikafsnittene og en forkert dansk gloss »wen — hvem«, hvor akkusativbetydningen bør fremgå som »hvem/den hvem«.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-014
**Source audit ID:** `DA-KURSS-L0007`
**Lesson/ID:** `lesson6`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson6.subtitle`
**DE (read-only):** —
**Severity:** NEEDS_SOURCE_REVIEW
**Category:** SEMANTICS
**Field:** `subtitle`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Tal, flertal, omlyd og flertalsformer af substantiver
**PROPOSED_DA:** Tal, flertal, omlyd og substantivernes flertalsformer
**Problēma:** Dansk tekst er sprogligt plausibel, men strukturreferencen beskriver et andet emne: verber, stedets adverbier og oversættelse.
**Audita pamatojums:** Dansk tekst er sprogligt plausibel, men strukturreferencen beskriver et andet emne: verber, stedets adverbier og oversættelse.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-015
**Source audit ID:** `DA-KURSS-L0008`
**Lesson/ID:** `lesson6`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 6</h3> ...
**PROPOSED_DA:** Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
**Problēma:** Feltet er stærkt forurenet med lettisk tekst samt blandede, uoversatte og semantisk forkerte danske fragmenter.
**Audita pamatojums:** Feltet er stærkt forurenet med lettisk tekst samt blandede, uoversatte og semantisk forkerte danske fragmenter.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-016
**Source audit ID:** `DA-KURSS-L0009`
**Lesson/ID:** `lesson7`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Lektion 7</h3> ...
**PROPOSED_DA:** singen — synge
**Problēma:** Dansk indhold er overordnet korrekt. Ordlisteformen »singen — synge« bør dog helst have infinitivmarkør for konsekvent præsentation: »at synge«.
**Audita pamatojums:** Dansk indhold er overordnet korrekt. Ordlisteformen »singen — synge« bør dog helst have infinitivmarkør for konsekvent præsentation: »at synge«.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-017
**Source audit ID:** `DA-KURSS-L0054`
**Lesson/ID:** `lesson4`
**ID / path:** `lesson4TrainingCardsDa[11].front`
**DE (read-only):** Es geht hinaus und arbeitet.
**Severity:** NEEDS_SOURCE_REVIEW
**Category:** SEMANTICS
**Field:** `trainingFront`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** Hun går ud og arbejder.
**PROPOSED_DA:** Hun går ud og arbejder.
**Problēma:** Det tyske subjekt „Es“ stemmer ikke med pigen/hun; den danske tekst er korrekt.
**Audita pamatojums:** Det tyske subjekt „Es“ stemmer ikke med pigen/hun; den danske tekst er korrekt.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-018
**Source audit ID:** `DA-KURSS-L0055`
**Lesson/ID:** `lesson5`
**ID / path:** `lesson5TrainingCardsDa[9].front`
**DE (read-only):** Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut.
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `trainingFront`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** Nej, eleven svarer ikke dårligt, hun svarer godt.
**PROPOSED_DA:** Nej, elevinden svarer ikke dårligt, hun svarer godt.
**Problēma:** „Eleven“ er generisk, men den foregående sætning identificerer personen som „elevinden“; brug samme feminine betegnelse.
**Audita pamatojums:** „Eleven“ er generisk, men den foregående sætning identificerer personen som „elevinden“; brug samme feminine betegnelse.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-019
**Source audit ID:** `DA-KURSS-L0056`
**Lesson/ID:** `lesson6`
**ID / path:** `lesson6TrainingCardsDa[19].front`
**DE (read-only):** Wie ist der Federhalter?
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `trainingFront`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** Hvordan er fyldepenholderen?
**PROPOSED_DA:** Hvordan er penneholderen?
**Problēma:** Terminologien bør følge den tidligere oversættelse »penneholder«; »fyldepenholder« betegner specifikt en holder til en fyldepen.
**Audita pamatojums:** Terminologien bør følge den tidligere oversættelse »penneholder«; »fyldepenholder« betegner specifikt en holder til en fyldepen.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-020
**Source audit ID:** `DA-KURSS-L0057`
**Lesson/ID:** `lesson6`
**ID / path:** `lesson6TrainingCardsDa[20].front`
**DE (read-only):** Der Federhalter ist schwarz.
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `trainingFront`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** Fyldepenholderen er sort.
**PROPOSED_DA:** Penneholderen er sort.
**Problēma:** Substantivet bør være »penneholderen« for at stemme overens med kort 18 og den foreslåede formulering på kort 19.
**Audita pamatojums:** Substantivet bør være »penneholderen« for at stemme overens med kort 18 og den foreslåede formulering på kort 19.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---
