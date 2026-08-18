# DA–DE Kurss — OWNER review — Lekcijas 1–7 (legacyHtml + saturs)

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`
Findings: **1–29** (29 ieraksti)
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
**CURRENT_DA:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less…
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
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Foredrag 1</h3> ...
**PROPOSED_DA:** <h3>Lektion 1</h3>
**Problēma:** Overskriften bruger «Foredrag», mens lektionstitlen og resten af kurset bruger «Lektion».
**Audita pamatojums:** Overskriften bruger «Foredrag», mens lektionstitlen og resten af kurset bruger «Lektion».
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-009
**Source audit ID:** `DA-KURSS-L0002`
**Lesson/ID:** `lesson1`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**DE (read-only):** —
**Severity:** LOW
**Category:** GRAMMAR
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Den omtrentlige udtale af ord er angivet i parentes med lettiske bogstaver.
**PROPOSED_DA:** Den omtrentlige udtale af ordene er angivet i parentes med lettiske bogstaver.
**Problēma:** «af ord» er grammatisk muligt, men «af ordene» er den naturlige formulering i denne instruktion.
**Audita pamatojums:** «af ord» er grammatisk muligt, men «af ordene» er den naturlige formulering i denne instruktion.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-010
**Source audit ID:** `DA-KURSS-L0003`
**Lesson/ID:** `lesson1`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
**PROPOSED_DA:** Ordenes korrekte udtale, angivet med lettiske bogstaver, er vist i lektionerne.
**Problēma:** Hele sætningen er lettisk og er en tydelig kildesprogsrest i det danske kursus.
**Audita pamatojums:** Hele sætningen er lettisk og er en tydelig kildesprogsrest i det danske kursus.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-011
**Source audit ID:** `DA-KURSS-L0004`
**Lesson/ID:** `lesson1`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <strong>remove <span class="lesson1-ending-accent">-da</span></strong>
**PROPOSED_DA:** <strong>fjern <span class="lesson1-ending-accent">-en</span></strong>
**Problēma:** Engelsk tekst og fejlagtigt «-da» erstatter den tyske infinitivendelse «-en».
**Audita pamatojums:** Engelsk tekst og fejlagtigt «-da» erstatter den tyske infinitivendelse «-en».
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-012
**Source audit ID:** `DA-KURSS-L0007`
**Lesson/ID:** `lesson2`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** fragen — hvad gør de/de?
**PROPOSED_DA:** fragen — at spørge
**Problēma:** «fragen» betyder «at spørge», ikke «hvad gør de/de?».
**Audita pamatojums:** «fragen» betyder «at spørge», ikke «hvad gør de/de?».
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-013
**Source audit ID:** `DA-KURSS-L0008`
**Lesson/ID:** `lesson2`
**ID / path:** `COURSE_LESSEN_DATA.kurssLesson2.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** was tut er? — svar
**PROPOSED_DA:** was tut er? — hvad laver han?
**Problēma:** Opslagsordet er oversat forkert; «was tut er?» betyder «hvad laver han?».
**Audita pamatojums:** Opslagsordet er oversat forkert; «was tut er?» betyder «hvad laver han?».
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-014
**Source audit ID:** `DA-KURSS-L0009`
**Lesson/ID:** `lesson2`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.
**PROPOSED_DA:** I ordene arbeiten og zeichnen udtales diftongen ei omtrent som dansk åbent e efterfulgt af i.
**Problēma:** Sætningen er lettisk og står desuden under et dansk afsnit.
**Audita pamatojums:** Sætningen er lettisk og står desuden under et dansk afsnit.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-015
**Source audit ID:** `DA-KURSS-L0010`
**Lesson/ID:** `lesson2`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TECHNICAL
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** [Hvem spørger?]{.lesson1-training-text}
**PROPOSED_DA:** <span class="lesson1-training-text">Hvem spørger?</span>
**Problēma:** Markdown-attributsyntaks er indlejret i HTML-teksten og kan blive vist råt i brugerfladen.
**Audita pamatojums:** Markdown-attributsyntaks er indlejret i HTML-teksten og kan blive vist råt i brugerfladen.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-016
**Source audit ID:** `DA-KURSS-L0012`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `subtitle`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Artikler, stedsord og oversættelse
**PROPOSED_DA:** Dialoger, ord, udtale, grammatik og oversættelse
**Problēma:** Indholdet og introduktionen omfatter også dialoger, ord, udtale og grammatik; den aktuelle undertitel er misvisende.
**Audita pamatojums:** Indholdet og introduktionen omfatter også dialoger, ord, udtale og grammatik; den aktuelle undertitel er misvisende.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-017
**Source audit ID:** `DA-KURSS-L0013`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** wer — her
**PROPOSED_DA:** wer — hvem
**Problēma:** «wer» betyder «hvem», mens «her» er den danske oversættelse af «hier».
**Audita pamatojums:** «wer» betyder «hvem», mens «her» er den danske oversættelse af «hier».
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-018
**Source audit ID:** `DA-KURSS-L0014`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** die Bank — ligge ned
**PROPOSED_DA:** die Bank — bænk
**Problēma:** «die Bank» er «bænken/en bænk»; «ligge ned» er en fejloversættelse.
**Audita pamatojums:** «die Bank» er «bænken/en bænk»; «ligge ned» er en fejloversættelse.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-019
**Source audit ID:** `DA-KURSS-L0015`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Ja galotne -Er hvad? spørger om emner.
**PROPOSED_DA:** Med was? spørger man om genstande.
**Problēma:** Sætningen indeholder lettiske rester og er semantisk ødelagt.
**Audita pamatojums:** Sætningen indeholder lettiske rester og er semantisk ødelagt.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-020
**Source audit ID:** `DA-KURSS-L0016`
**Lesson/ID:** `lesson3`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Hier hängt en karte.
**PROPOSED_DA:** Hier hängt eine Karte.
**Problēma:** Den danske artikel «en» er indsat i den tyske eksempel­sætning.
**Audita pamatojums:** Den danske artikel «en» er indsat i den tyske eksempel­sætning.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-021
**Source audit ID:** `DA-KURSS-L0019`
**Lesson/ID:** `lesson4`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** er nimmt (nimt) — fjerklædt
**PROPOSED_DA:** er nimmt (nimt) — han tager
**Problēma:** «er nimmt» betyder «han tager», ikke «fjerklædt».
**Audita pamatojums:** «er nimmt» betyder «han tager», ikke «fjerklædt».
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-022
**Source audit ID:** `DA-KURSS-L0020`
**Lesson/ID:** `lesson4`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** der Federhalter (dēr fēderhalter) — show
**PROPOSED_DA:** der Federhalter (dēr fēderhalter) — penneholder
**Problēma:** «show» er en fejlagtig rest; «Federhalter» betyder «penneholder».
**Audita pamatojums:** «show» er en fejlagtig rest; «Federhalter» betyder «penneholder».
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-023
**Source audit ID:** `DA-KURSS-L0021`
**Lesson/ID:** `lesson4`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
**PROPOSED_DA:** Hvis h er en længdemarkør, udtales det ikke som en lyd: nehmen (nēmen).
**Problēma:** Lettisk tekst forekommer i det danske grammatikafsnit.
**Audita pamatojums:** Lettisk tekst forekommer i det danske grammatikafsnit.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-024
**Source audit ID:** `DA-KURSS-L0025`
**Lesson/ID:** `lesson5`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Daudz sieviešu kārtas vārdu atvasina med gal.”-Dø Lehrerin
**PROPOSED_DA:** Mange feminine personbetegnelser dannes med endelsen -in: die Lehrerin.
**Problēma:** Sætningen er blandet lettisk og dansk og indeholder en ødelagt tekstrest.
**Audita pamatojums:** Sætningen er blandet lettisk og dansk og indeholder en ødelagt tekstrest.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-025
**Source audit ID:** `DA-KURSS-L0028`
**Lesson/ID:** `lesson6`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** liegt — er, er, ligger
**PROPOSED_DA:** liegt — ligger
**Problēma:** Opslagsordet har en ødelagt og gentaget dansk oversættelse.
**Audita pamatojums:** Opslagsordet har en ødelagt og gentaget dansk oversættelse.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-026
**Source audit ID:** `DA-KURSS-L0029`
**Lesson/ID:** `lesson6`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** En fordoblet eu udtales som oi: neun (noin).
**PROPOSED_DA:** Diftongen eu udtales som «oj»: neun (nojn).
**Problēma:** «fordoblet eu» er forkert terminologi; eu er en diftong.
**Audita pamatojums:** «fordoblet eu» er forkert terminologi; eu er en diftong.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-027
**Source audit ID:** `DA-KURSS-L0030`
**Lesson/ID:** `lesson6`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Piemēri: fünf, der Schlüssel (šlūsel).
**PROPOSED_DA:** Eksempler: fünf, der Schlüssel (šlūsel).
**Problēma:** Lettisk tekst står i det danske grammatikafsnit.
**Audita pamatojums:** Lettisk tekst står i det danske grammatikafsnit.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-028
**Source audit ID:** `DA-KURSS-L0031`
**Lesson/ID:** `lesson6`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (mødre) • Die Tochter (datter) — die Töchter (døtre).
**PROPOSED_DA:** Maskuline og neutrale substantiver med endelsen -er, -el eller -en får ofte ingen endelse i flertal.
**Problēma:** Sætningen er alvorligt beskadiget af lettiske rester og forkert indsat eksempeltekst.
**Audita pamatojums:** Sætningen er alvorligt beskadiget af lettiske rester og forkert indsat eksempeltekst.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-KURSS-LUNA-03LESSONS0107-029
**Source audit ID:** `DA-KURSS-L0062`
**Lesson/ID:** `lesson5`
**ID / path:** `lesson5TrainingCardsDa[9].front`
**DE (read-only):** Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut.
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `trainingFront`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** Nej, eleven svarer ikke dårligt, hun svarer godt.
**PROPOSED_DA:** Nej, elevinden svarer ikke dårligt, hun svarer godt.
**Problēma:** Substantivet skifter fra den feminine elevinde til det maskuline/neutrale eleven, selv om pronomenet er hun og DE har Schülerin.
**Audita pamatojums:** Substantivet skifter fra den feminine elevinde til det maskuline/neutrale eleven, selv om pronomenet er hun og DE har Schülerin.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---
