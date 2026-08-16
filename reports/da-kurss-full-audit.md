# DA–DE Kurss — pilns lingvistiskais audits (READ-ONLY)

Audita datums: 2026-08-16
Auditors: deterministiskā pārbaude + GPT-5.6 Luna

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| DA lauki (coverage) | **1287** |
| Lekcijas | **21** |
| Extra HTML topics | **6** |
| UI kurss atslēgas | **96** |
| CRITICAL | **31** |
| HIGH | **332** |
| MEDIUM | **97** |
| LOW | **6** |
| Kopā findings | **466** |
| Luna batches | **26** (1287 fields) |
| Luna loaded | **26/26** |
| Production changes | **0** |

> **PROPOSED_DA** nav automātiski OWNER apstiprināts labojums.

## COVERAGE

| Avots | Lauki |
|---|---|
| lesson | 1084 |
| html | 6 |
| training | 101 |
| ui | 96 |

## TECHNICAL GATES

| Gate | Result |
|---|---|
| Syntax (courseLessons) | **FAIL** |
| validate-kurss.js | **FAIL** |
| Structure vs LV MASTER | **FAIL** (16 issues) |
| Mirror data↔www | **PASS** |
| DE baseline changes | **0** (PASS) |
| Luna coverage | **PASS** |

## Verdict

**NEEDS OWNER REVIEW** — atlikuši validated findings.

## Findings

### DA-KURSS-SYN-datadacourseLessonsj [CRITICAL] TECHNICAL

- **Lesson/ID:** `syntax`
- **Path:** `data/da/courseLessons.js`
- **DA_CURRENT:** (syntax failure)
- **Problem:** JavaScript syntax error (kurssVerbBasicsLesson string corruption)
- **PROPOSED_DA:** (OWNER repair required)
- **Avots:** syntax

### DA-KURSS-SYN-wwwdatadacourseLesso [CRITICAL] TECHNICAL

- **Lesson/ID:** `syntax`
- **Path:** `www/data/da/courseLessons.js`
- **DA_CURRENT:** (syntax failure)
- **Problem:** JavaScript syntax error (kurssVerbBasicsLesson string corruption)
- **PROPOSED_DA:** (OWNER repair required)
- **Avots:** syntax

### DA-KURSS-STR-lesson7ExerciseCardsDa[0].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[0].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[1].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[1].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[2].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[2].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[3].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[3].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[4].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[4].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[5].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[5].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[6].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[6].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[7].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[7].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[8].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[8].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[9].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[9].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[10].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[10].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[11].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[11].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[12].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[12].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[13].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[13].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[14].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[14].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[15].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[15].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-0001 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.title`
- **DA_CURRENT:** Lekcija 1
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0003 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0004 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.title`
- **DA_CURRENT:** Lekcija 2
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0006 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0007 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.title`
- **DA_CURRENT:** Lekcija 3
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0009 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0010 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.title`
- **DA_CURRENT:** Lekcija 4
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0012 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0013 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.title`
- **DA_CURRENT:** Lekcija 5
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0015 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler st
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0016 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.title`
- **DA_CURRENT:** Lekcija 6
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0018 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0019 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.title`
- **DA_CURRENT:** Lekcija 7
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0021 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 7</h3> <p class="kurss-lesson-intro">Syvende lektion: kommandoudtryk, tiltaleform og flertal.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Wa
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0022 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.title`
- **DA_CURRENT:** Lekcija 8
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0024 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[12]`
- **DE_CURRENT:** fragen (ar akuzatīvu)
- **DA_CURRENT:** fragen (ar akuzatīvu) — to ask
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0025 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[16]`
- **DE_CURRENT:** sehr (zēr)
- **DA_CURRENT:** sehr (zēr) — very much
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0026 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[19]`
- **DE_CURRENT:** jetzt (ject)
- **DA_CURRENT:** jetzt (ject) — tagad
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0027 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[27]`
- **DE_CURRENT:** erzählen (ercēlen)
- **DA_CURRENT:** erzählen (ercēlen) — to tell
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0028 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[34]`
- **DE_CURRENT:** der Bäcker (dēr beker)
- **DA_CURRENT:** der Bäcker (dēr beker) — baker
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0029 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]`
- **DE_CURRENT:** der Schneider (dēr šneider)
- **DA_CURRENT:** der Schneider (dēr šneider) — a tailor
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0030 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]`
- **DE_CURRENT:** der Gärtner (dēr gertner)
- **DA_CURRENT:** der Gärtner (dēr gertner) — gardener
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0031 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]`
- **DA_CURRENT:** ä, kā jau minēts, izrunā gan kā šauro īso vai garo e skaņu. Piemēri: der Bäcker (bēker), das Mädchen (mētchen).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0032 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[1]`
- **DA_CURRENT:** ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0033 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[2]`
- **DE_CURRENT:** Vārdos Schüler, Bücher
- **DA_CURRENT:** Vārdos Schüler, Bücher — ü is long (ü) and Müller - short ü.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0034 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[3]`
- **DA_CURRENT:** ie izrunā kā garo ī: liest (līst).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0035 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[4]`
- **DA_CURRENT:** ß izrunā kā s: grüßen (grüsen).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0036 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[5]`
- **DA_CURRENT:** eu izrunā kā oi: deutlich (doitlich).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0037 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[0]`
- **DA_CURRENT:** Daudziem darbības vārdiem ar patskani e celmā vienskaitļa 2. un 3. personā tagadnē e vietā ir i vai ie.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0038 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[7]`
- **DA_CURRENT:** Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0039 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[8]`
- **DA_CURRENT:** Latviešu valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu sich.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0040 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[10]`
- **DA_CURRENT:** Pavēles izteiksme: setz(e) dich!, setzt euch!, setzen Sie sich!
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0041 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[35].lv`
- **DE_CURRENT:** Hans schreibt gut, aber Anna schreibt schlecht.
- **DA_CURRENT:** Ansis raksta labi, bet Anna raksta slikti.
- **Problem:** Foreign/script: LV_NAME
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0042 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[16].lv`
- **DE_CURRENT:** Hans schreibt gut, aber Anna schreibt schlecht.
- **DA_CURRENT:** Ansis raksta labi, bet Anna raksta slikti.
- **Problem:** Foreign/script: LV_NAME
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0043 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.title`
- **DA_CURRENT:** Lekcija 9
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0045 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[0]`
- **DE_CURRENT:** mehrere (mērere)
- **DA_CURRENT:** mehrere (mērere) — several, several
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0046 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[1]`
- **DE_CURRENT:** hier (hīr)
- **DA_CURRENT:** hier (hīr) — here, here
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0047 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[4]`
- **DE_CURRENT:** langsam (lankzām)
- **DA_CURRENT:** langsam (lankzām) — slowly
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0048 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[6]`
- **DE_CURRENT:** mehr (mēr)
- **DA_CURRENT:** mehr (mēr) — more
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0049 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[10]`
- **DE_CURRENT:** ruhig (rū
- **DA_CURRENT:** ruhig (rū-ich) - calm
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0050 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[11]`
- **DE_CURRENT:** dieser (dīzer)
- **DA_CURRENT:** dieser (dīzer) — this
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0051 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[12]`
- **DE_CURRENT:** jener (jēner)
- **DA_CURRENT:** jener (jēner) — that
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0052 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[13]`
- **DE_CURRENT:** der Brief (dēr brīf)
- **DA_CURRENT:** der Brief (dēr brīf) — a letter
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0053 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[0].heading`
- **DA_CURRENT:** Norādāmie vietniekvārdi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0054 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.title`
- **DA_CURRENT:** Lekcija 10
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0056 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]`
- **DE_CURRENT:** ihr seid (īr zeit)
- **DA_CURRENT:** ihr seid (īr zeit) — you are
- **Problem:** Foreign/script: LV_DIAC, EN
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0057 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]`
- **DE_CURRENT:** der Knabe (dēr knābe)
- **DA_CURRENT:** der Knabe (dēr knābe) — a boy
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0058 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]`
- **DE_CURRENT:** der Großvater (dēr grōsfāter)
- **DA_CURRENT:** der Großvater (dēr grōsfāter) — grandfather
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0059 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]`
- **DE_CURRENT:** das Jahr (jār)
- **DA_CURRENT:** das Jahr (jār) — year
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0060 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[0]`
- **DA_CURRENT:** Pareizi jāizrunā patskaņu pārkaņojumi.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0061 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[1]`
- **DA_CURRENT:** ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0062 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[2]`
- **DA_CURRENT:** ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0063 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[3]`
- **DA_CURRENT:** Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0064 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]`
- **DA_CURRENT:** Ja patskanim seko viens līdzskanis, patskani izrunā gari: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0065 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[5]`
- **DA_CURRENT:** Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0066 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[6]`
- **DA_CURRENT:** Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0067 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
- **DA_CURRENT:** Pareizi izrunā: der Großvater (dēr grōsfāter).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0068 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[8]`
- **DA_CURRENT:** Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0069 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
- **DA_CURRENT:** Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0070 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.title`
- **DA_CURRENT:** Lekcija 11
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0072 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]`
- **DE_CURRENT:** der Bruder (dēr brūder)
- **DA_CURRENT:** der Bruder (dēr brūder) — brother
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0073 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]`
- **DE_CURRENT:** der Schreibtisch (dēr šreibtīš)
- **DA_CURRENT:** der Schreibtisch (dēr šreibtīš) — a desk
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0074 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]`
- **DE_CURRENT:** zusammen (cuzāmen)
- **DA_CURRENT:** zusammen (cuzāmen) — together
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0075 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]`
- **DE_CURRENT:** der Freund (dēr froint)
- **DA_CURRENT:** der Freund (dēr froint) — friend
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0076 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]`
- **DE_CURRENT:** der Stuhl (dēr štūl)
- **DA_CURRENT:** der Stuhl (dēr štūl) — a chair
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0077 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]`
- **DE_CURRENT:** die Landkarte (dī lantkarte)
- **DA_CURRENT:** die Landkarte (dī lantkarte) — a map of geography
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0078 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]`
- **DE_CURRENT:** die Schwester (dī švester)
- **DA_CURRENT:** die Schwester (dī švester) — sister
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0079 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]`
- **DA_CURRENT:** eu izrunā kā oi: der Freund (dēr froint), neun (noin).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0080 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]`
- **DA_CURRENT:** h pa lielākai daļai ir garumzīme iepriekšējam patskanim: der Stuhl (dēr štūl), zehn (cēn).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0081 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[2]`
- **DA_CURRENT:** z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0082 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].heading`
- **DA_CURRENT:** Latviešu datīvs un vācu nominatīvs/akuzatīvs
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0083 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[3].heading`
- **DA_CURRENT:** Piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0084 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[4].heading`
- **DA_CURRENT:** Salīdzinājums ar citām valodām
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0085 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[4].examples[1]`
- **DA_CURRENT:** angļu: I have a book; the father has a pencil.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0086 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].heading`
- **DA_CURRENT:** Imperativ — piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0087 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[0]`
- **DE_CURRENT:** habe Geduld!
- **DA_CURRENT:** habe Geduld! — pacietību! / lai tev ir pacietība!
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0088 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[1]`
- **DE_CURRENT:** habt Geduld!
- **DA_CURRENT:** habt Geduld! — lai jums ir pacietība!
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0089 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].heading`
- **DA_CURRENT:** Vārdu kārtība ar denn
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0090 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[11].heading`
- **DA_CURRENT:** Denn — piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0091 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[12].heading`
- **DA_CURRENT:** Saliktie lietvārdi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0092 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[13].heading`
- **DA_CURRENT:** Saliktie lietvārdi — piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0093 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.title`
- **DA_CURRENT:** Lekcija 12
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0095 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]`
- **DE_CURRENT:** der Vetter (dēr feter)
- **DA_CURRENT:** der Vetter (dēr feter) — cousin
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0096 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
- **DE_CURRENT:** das Gummi (das gumī)
- **DA_CURRENT:** das Gummi (das gumī) — rubber
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0097 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[0]`
- **DA_CURRENT:** x izrunā kā ks: Max (maks), Felix (feliks).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0098 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[1]`
- **DA_CURRENT:** Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0099 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[2]`
- **DE_CURRENT:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn
- **DA_CURRENT:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — The h in the word der Federhalter is the sound that is pronounced, and in the word der Sohn the longing.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0100 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].heading`
- **DA_CURRENT:** Umlaut pārākajā pakāpē
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0101 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[2].heading`
- **DA_CURRENT:** Salīdzināšana ar wie un als
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0102 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].heading`
- **DA_CURRENT:** Neregulārās salīdzināmās pakāpes
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0103 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.title`
- **DA_CURRENT:** Lekcija 13
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0105 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].heading`
- **DA_CURRENT:** Umlaut tagadnē
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0106 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].heading`
- **DA_CURRENT:** Atgriezeniskais darbības vārds
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0107 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[2].heading`
- **DA_CURRENT:** Pavēles forma ar sich umkehren
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0108 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[3].heading`
- **DA_CURRENT:** Darbības vārds atmen
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0109 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[4].heading`
- **DA_CURRENT:** Pavēles forma ar atmen
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0110 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading`
- **DA_CURRENT:** Saliktie darbības vārdi
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0111 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text`
- **DA_CURRENT:** Hvis præpositionsdelen er understreget, adskilles den i nutid og går i slutningen af ​​sætningen.
- **Problem:** Foreign/script: ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0112 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].heading`
- **DA_CURRENT:** Neatdalāmie priedēkļi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0113 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].heading`
- **DA_CURRENT:** Vietniekvārds jeder
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0114 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[12].heading`
- **DA_CURRENT:** Sieviešu kārtas lietvārdi ar -in
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0115 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[0]`
- **DA_CURRENT:** h vārdā halten ir dzirdama skaņa.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0116 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[1]`
- **DA_CURRENT:** h vārdā fahren rāda patskaņa garumu.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0117 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[2]`
- **DA_CURRENT:** a vārdā halten izrunā īsi: halten.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0118 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[3]`
- **DA_CURRENT:** a vārdā tragen izrunā gari: tragen.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0119 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[4]`
- **DA_CURRENT:** äu izrunā kā oi: du läufst, er läuft.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0120 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[5]`
- **DA_CURRENT:** pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0121 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.title`
- **DA_CURRENT:** Lekcija 14
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0123 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[0].heading`
- **DA_CURRENT:** Modālie darbības vārdi
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0124 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[1].heading`
- **DA_CURRENT:** 1. un 3. persona vienskaitlī
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0125 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[5].heading`
- **DA_CURRENT:** Celma patskaņu maiņa
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0126 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[9].heading`
- **DA_CURRENT:** Svarīgi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0127 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[0]`
- **DA_CURRENT:** ß izrunā kā latviešu s.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0128 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]`
- **DA_CURRENT:** ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0129 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]`
- **DA_CURRENT:** Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0130 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[3]`
- **DA_CURRENT:** ö vārdā mögen izrunā kā skaidru ö skaņu.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0131 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[4]`
- **DA_CURRENT:** Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0132 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
- **DA_CURRENT:** Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0133 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.title`
- **DA_CURRENT:** Lekcija 15
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0135 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].heading`
- **DA_CURRENT:** Salīdzinājums
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0136 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[0]`
- **DE_CURRENT:** müssen
- **DA_CURRENT:** müssen — vajadzēt aiz nepieciešamības vai pārliecības
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0137 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[1]`
- **DE_CURRENT:** sollen
- **DA_CURRENT:** sollen — vajadzēt pienākuma nozīmē
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0138 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].heading`
- **DA_CURRENT:** Mūsdienu rakstība
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0139 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[6].text`
- **DA_CURRENT:** I det sammensatte verbum entzweischneiden lægges vægten på præfikset entzweí-, så i nutid er præfikset adskilt og placeret i slutningen af ​​sætningen.
- **Problem:** Foreign/script: ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0140 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[0]`
- **DA_CURRENT:** ä vārdos Äpfel un schälen izrunā kā šauro e.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0141 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[1]`
- **DA_CURRENT:** Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0142 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[2]`
- **DA_CURRENT:** Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0143 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[3]`
- **DA_CURRENT:** Vārdā gern e ir īss un plats.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0144 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[4]`
- **DA_CURRENT:** Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0145 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.title`
- **DA_CURRENT:** Lekcija 16
- **Problem:** Foreign/script: LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0147 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].heading`
- **DA_CURRENT:** Datīva -e
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0148 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[4].heading`
- **DA_CURRENT:** Sieviešu kārta datīvā
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

_… and 316 more in JSON._
