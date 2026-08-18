# DA–DE Kurss — pilns lingvistiskais audits (READ-ONLY)

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.1**
**STAGE:** POST-REPAIR FULL RE-AUDIT (Kurss dataset)
**WORK_BRANCH:** `cursor/da-kurss-master-v11-audit-fffe`
**DE:** STRICT READ-ONLY · **LV Kurss:** MASTER (structure only)

Audita datums: 2026-08-18
Auditors: deterministiskā pārbaude (§7.7) + Luna heuristika (§7.8, API key unavailable)
Production changes: **0** (audit run only)

> **Salīdzinājums:** pirms OWNER LABOT apply **95** findings → pēc apply **26** findings.

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| DA lauki (coverage) | **1264** |
| Lekcijas | **21** |
| Extra HTML topics | **6** |
| UI kurss atslēgas | **96** |
| CRITICAL | **0** |
| HIGH | **25** |
| MEDIUM | **1** |
| LOW | **0** |
| Kopā findings | **26** |
| Luna batches | **26** (1264 fields) |
| Luna loaded | **26/26** |
| Production changes | **0** |

> **PROPOSED_DA** nav automātiski OWNER apstiprināts labojums.

## COVERAGE

| Avots | Lauki |
|---|---|
| lesson | 1061 |
| html | 6 |
| training | 101 |
| ui | 96 |

## TECHNICAL GATES

| Gate | Result |
|---|---|
| Syntax (courseLessons) | **PASS** |
| validate-kurss.js | **PASS** |
| Structure vs LV MASTER | **FAIL** (16 issues) |
| Mirror data↔www | **PASS** |
| DE baseline changes | **2** (note) |
| Luna coverage | **PASS** |

## Verdict

**NEEDS OWNER REVIEW** — atlikuši validated findings.

## Findings

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

### DA-KURSS-0001 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0002 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0003 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0004 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0005 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler st
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0006 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0007 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- **DA_CURRENT:** <h3>Lektion 7</h3><p class="kurss-lesson-intro">Syvende lektion: imperativ, tiltaleform og flertal.</p><details class="lesson1-accordion" open><summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Was tust du?
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0008 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** <h3>Artikler</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Det grammatiske køn på tysk svarer ikke altid til det grammatiske køn på dansk. Derfor er det bedst at lære substantiver sammen med deres artikel.</div> </div> <section class="artikuli-block"> <h4 class="artikuli-header"><span>•</span>Eksempler på artikler</h4> <div class="artikuli-grid"> <div class="kurss-example">Der Tisch - bord</div> <div class="kurss-example">Die Tür - døren</div
- **Problem:** Foreign/script: ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0009 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">Gut (gūt) - god</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><div
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0010 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Bad (bāt) - bad</div><div class="kurss-exa
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic
