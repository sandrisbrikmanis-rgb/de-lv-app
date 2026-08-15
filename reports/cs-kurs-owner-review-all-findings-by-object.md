# CS–DE KURS — OWNER REVIEW (ALL FINDINGS BY OBJECT)

READ-ONLY OWNER source. No production repairs. No OWNER `NEW` values assigned.

## CS–DE KURS OWNER SOURCE PREPARATION — SUMMARY

| Metrika | Vērtība |
|---|---|
| Raw audit findings | 629 |
| Accounted findings | 629/629 |
| Deduplicated OWNER targets | 629 |
| Unique affected objects | 623 |
| Unique affected fields | 628 |
| OWNER batches | 16 |
| CURRENT_MATCH | 628 |
| CURRENT_MISMATCH | 1 |
| DE_PARITY_ISSUE | 1 |
| SOURCE_DE_ISSUE | 0 |
| FALSE_POSITIVE_CANDIDATE | 13 |
| OWNER PENDING | 623 |
| Production changes | **0** |
| DE changes | **0** |
| LV MASTER changes | **0** |

### Severity (deduplicated targets)
CRITICAL: 1, HIGH: 624, MEDIUM: 4, LOW: 0

### OWNER batches

| Batch | Objects | Findings | Lesson range | CRIT/HIGH/MED |
| ----- | ------- | -------- | ------------ | ------------- |
| 1 | 40 | 42 | kurssLesson1 … kurssLesson8 | 0/42/0 |
| 2 | 40 | 40 | kurssLesson8 … kurssLesson9 | 0/40/0 |
| 3 | 40 | 40 | kurssLesson9 … kurssLesson9 | 0/40/0 |
| 4 | 40 | 40 | kurssLesson9 … kurssLesson11 | 1/39/0 |
| 5 | 40 | 40 | kurssLesson11 … kurssLesson12 | 0/40/0 |
| 6 | 40 | 40 | kurssLesson12 … kurssLesson13 | 0/40/0 |
| 7 | 40 | 40 | kurssLesson13 … kurssLesson14 | 0/40/0 |
| 8 | 40 | 40 | kurssLesson14 … kurssLesson15 | 0/36/4 |
| 9 | 40 | 40 | kurssLesson15 … kurssLesson16 | 0/40/0 |
| 10 | 40 | 40 | kurssLesson16 … kurssLesson16 | 0/40/0 |
| 11 | 40 | 40 | kurssLesson16 … kurssLesson18 | 0/40/0 |
| 12 | 40 | 40 | kurssLesson18 … kurssLesson19 | 0/40/0 |
| 13 | 40 | 40 | kurssLesson19 … kurssLesson20 | 0/40/0 |
| 14 | 40 | 41 | kurssLesson20 … kurssLesson21 | 0/41/0 |
| 15 | 40 | 40 | kurssLesson21 … kurssLesson21 | 0/40/0 |
| 16 | 23 | 26 | kurssLesson21 … kurssSentenceStructureLesson | 0/26/0 |

---

## CURRENT MISMATCHES

Total mismatches: **1**

| Object | Field | Audit CURRENT | Actual CURRENT | Finding # |
| ------ | ----- | ------------- | -------------- | --------- |
| OBJECT 540 kurssLesson20 | sections[4].cards[15].task | Izvēlies správný pád: wo/wann → Dativ, wohin → Akkusativ. | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | #588 |

---

## OBJECT 001

Lesson: kurssLesson1
Section: kurssLesson1/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson1/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Přítomná časová slovesa, podstatná jména, gramatika a překlad
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přítomná časová slovesa“ is unnatural Czech.
Audit finding IDs: 377

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 002

Lesson: kurssLesson1
Section: kurssLesson1/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson1/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 1
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 376

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 003

Lesson: kurssLesson2
Section: kurssLesson2/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson2/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 2
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 378

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 004

Lesson: kurssLesson3
Section: kurssLesson3/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson3/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 3
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 379

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 005

Lesson: kurssLesson4
Section: kurssLesson4/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson4/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Přednáška 4 Akuzativ, nehmen, hinlegen, hinausgehen a přídavná jména. 1. Dialogy / věty ⌃ Paul kommt und nimmt einen Federhalter. Er zeigt den Federhalter. Er fragt: "Wie ist der Federhalter?" Olga odpovídá: "Der Federhalter ist schwarz." Je Federhalter weiß? Ne, der Federhalter ist nicht weiß, er ist schwarz. Marie kommt und nimmt eine Feder. Sie fragt: "Wie ist die Feder?" Olga odpovídá: "Die Fe…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 13

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 006

Lesson: kurssLesson4
Section: kurssLesson4/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson4/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 4
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 380

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 007

Lesson: kurssLesson5
Section: kurssLesson5/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson5/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Přednáška 5 Wen?, akuzativ, sitzen, fragen a -in koncovka. 1. Dialogy / věty ⌄ Wer sitzt und fragt? Der Lehrer sitzt und fragt. Kdo stojí a odpovídá? Der Schüler stojí a odpovídá. Co antwortet der Schüler? Der Schüler antwortet gut. Wen lobt der Lehrer? Der Lehrer lobt den Schüler. Wie ist der Schüler? Der Schüler ist klein. Je Schüler klein nebo groß? Er ist klein. Wen fragt die Lehrerin? Die Leh…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 12

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 008

Lesson: kurssLesson5
Section: kurssLesson5/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson5/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Wen?, akuzativ, sitzen, fragen a -in koncovka.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] The word order „-in koncovka“ is ungrammatical or highly unnatural.
Audit finding IDs: 382

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 009

Lesson: kurssLesson5
Section: kurssLesson5/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson5/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 5
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 381

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 010

Lesson: kurssLesson6
Section: kurssLesson6/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson6/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: COURSE_LESSON_HTML
CURRENT (CURRENT_MATCH): 
    <h3>Přednáška 6</h3>
    <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogy / věty</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid"><div class…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 10

### Finding 2
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Přednáška 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogy / věty ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei Messer. Er legt die Messer wieder hin. Alle Messer sind scharf. Dann je wieder ein Messer. Er macht das Messer auf. Er nimmt den Bleistift. Er spitzt den Bleistift an. Er legt das Messer hin. Er sett sich un…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 11

### Finding 3
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml
CURRENT (CURRENT_MATCH): 
    <h3>Přednáška 6</h3>
    <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogy / věty</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid"><div class…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 14

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 011

Lesson: kurssLesson6
Section: kurssLesson6/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson6/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Slovesa, podmínky místa a překlad
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Podmínky místa“ is a literal and unnatural rendering of the grammatical topic.
Audit finding IDs: 384

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 012

Lesson: kurssLesson6
Section: kurssLesson6/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson6/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 6
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 383

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 013

Lesson: kurssLesson7
Section: kurssLesson7/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson7/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Imperativ, forma adresy a množné číslo.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Forma adresy“ is not idiomatic Czech for a form of address.
Audit finding IDs: 386

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 014

Lesson: kurssLesson7
Section: kurssLesson7/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson7/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 7
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 385

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 015

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Alle — visi
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „visi“ is Latvian, not Czech.
Audit finding IDs: 389

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 016

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Aufstehen — vstát
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] The Czech text „vstát“ is correct, but the DE reference gloss „vst“ appears truncated.
Audit finding IDs: 390

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 017

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Setzt euch (zect oich) — sēstieties!
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 19

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 018

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Sie setzen sich — viņi apsēžas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 20

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 019

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Fragen (ar akuzatīvu) — jautāt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 21

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 020

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Sprechen — runāt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 22

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 021

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Aber — bet
Audit recommendation: Aber — ale
Luna recommendation: Aber — ale
Reason: [Luna TRANSLATION] 
Audit finding IDs: 394

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 022

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Sehr (zēr) — ļoti
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 23

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 023

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Leise — klusi
Audit recommendation: Leise — tiše
Luna recommendation: Leise — tiše
Reason: [Luna TRANSLATION] 
Audit finding IDs: 395

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 024

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Laut — skaļi
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 24

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 025

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Jetzt (ject) — tagad
Audit recommendation: Jetzt (ject) — teď
Luna recommendation: Jetzt (ject) — teď
Reason: [Luna TRANSLATION] 
Audit finding IDs: 396

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 026

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Stehen auf — pieceļas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 15

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 027

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Lies! — lasi!
Audit recommendation: Lies! — čti!
Luna recommendation: Lies! — čti!
Reason: [Luna TRANSLATION] 
Audit finding IDs: 397

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 028

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Gut — labi
Audit recommendation: Gut — dobře
Luna recommendation: Gut — dobře
Reason: [Luna TRANSLATION] 
Audit finding IDs: 398

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 029

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[23]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[23]
CURRENT (CURRENT_MATCH): Schlecht — slikti
Audit recommendation: Schlecht — špatně
Luna recommendation: Schlecht — špatně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 399

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 030

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Deutlich (doitlich) — skaidri, saprotami
Audit recommendation: Deutlich (doitlich) — zřetelně, srozumitelně
Luna recommendation: Deutlich (doitlich) — zřetelně, srozumitelně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 400

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 031

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Schreiben — rakstīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 25

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 032

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[26]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[26]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[26]
CURRENT (CURRENT_MATCH): Endlich (entlich) — beidzot
Audit recommendation: Endlich (entlich) — konečně
Luna recommendation: Endlich (entlich) — konečně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 401

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 033

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[27]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[27]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[27]
CURRENT (CURRENT_MATCH): Erzählen (ercēlen) — stāstīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 26

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 034

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[28]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[28]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[28]
CURRENT (CURRENT_MATCH): Zuhören — klausīties
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 27

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 035

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[29]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[29]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[29]
CURRENT (CURRENT_MATCH): Sie hören zu — viņi klausās
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 28

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 036

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Grüßen (grüsen) — sveicināt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 16

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 037

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[31]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[31]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[31]
CURRENT (CURRENT_MATCH): Der Arbeiter — strādnieks
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 29

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 038

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[32]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[32]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[32]
CURRENT (CURRENT_MATCH): Der Müller — dzirnavnieks
Audit recommendation: Der Müller — mlynář
Luna recommendation: Der Müller — mlynář
Reason: [Luna TRANSLATION] 
Audit finding IDs: 402

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 039

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[33]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[33]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[33]
CURRENT (CURRENT_MATCH): Der Tischler — galdnieks
Audit recommendation: Der Tischler — truhlář
Luna recommendation: Der Tischler — truhlář
Reason: [Luna TRANSLATION] 
Audit finding IDs: 403

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 040

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[34]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[34]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[34]
CURRENT (CURRENT_MATCH): Der Bäcker (dēr beker) — maiznieks
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 30

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 2

## OBJECT 041

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[35]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[35]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[35]
CURRENT (CURRENT_MATCH): Der Schneider (dēr šneider) — drēbnieks
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 31

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 042

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[36]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[36]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[36]
CURRENT (CURRENT_MATCH): Der Gärtner (dēr gertner) — dārznieks
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 32

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 043

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[37]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[37]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[37]
CURRENT (CURRENT_MATCH): Der Schuster — kurpnieks
Audit recommendation: Der Schuster — švec
Luna recommendation: Der Schuster — švec
Reason: [Luna TRANSLATION] 
Audit finding IDs: 404

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 044

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Guten Morgen — dobré ráno
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] The Czech text „dobré ráno“ is correct, but the DE reference gloss „dobr | no“ is fragmented and malformed.
Audit finding IDs: 391

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 045

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Gut — labs
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „labs“ is Latvian, not Czech.
Audit finding IDs: 392

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 046

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Der Morgen — rīts
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 17

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 047

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Der Herr — kungs
Audit recommendation: Der Herr — pán
Luna recommendation: Der Herr — pán
Reason: [Luna TRANSLATION] 
Audit finding IDs: 393

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 048

Lesson: kurssLesson8
Section: kurssLesson8/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Die Kinder — bērni
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 18

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 049

Lesson: kurssLesson8
Section: kurssLesson8/section[2]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[2]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[0]
CURRENT (CURRENT_MATCH): Ä, kā jau minēts, izrunā gan kā šauro īso vai garo e skaņu. Piemēri: der Bäcker (bēker), das Mädchen (mētchen).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 33

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 050

Lesson: kurssLesson8
Section: kurssLesson8/section[2]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[2]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[1]
CURRENT (CURRENT_MATCH): Ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 34

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 051

Lesson: kurssLesson8
Section: kurssLesson8/section[2]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[2]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[2].items[3]
CURRENT (CURRENT_MATCH): Ie izrunā kā garo ī: liest (līst).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 35

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 052

Lesson: kurssLesson8
Section: kurssLesson8/section[2]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[2]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[4]
CURRENT (CURRENT_MATCH): SS izrunā kā s: grüßen (grüsen).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 36

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 053

Lesson: kurssLesson8
Section: kurssLesson8/section[2]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[2]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[5]
CURRENT (CURRENT_MATCH): Eu izrunā kā oi: deutlich (doitlich).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 37

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 054

Lesson: kurssLesson8
Section: kurssLesson8/section[3]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[3]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[7]
CURRENT (CURRENT_MATCH): Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 38

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 055

Lesson: kurssLesson8
Section: kurssLesson8/section[3]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/section[3]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[8]
CURRENT (CURRENT_MATCH): Český valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu sich.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 39

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 056

Lesson: kurssLesson8
Section: kurssLesson8/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Zvratná slovesa, e → i/ie záměna a akuzativ.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „E → i/ie záměna“ is awkward Czech terminology.
Audit finding IDs: 388

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 057

Lesson: kurssLesson8
Section: kurssLesson8/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson8/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 8
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
Audit finding IDs: 387

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 058

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Mehrere (mērere) — vairāki, vairākas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 40

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 059

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Hier (hīr) — šeit, te
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 41

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 060

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Ruhig (rū-ich) — mierīgi
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 48

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 061

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Dieser (dīzer) — šis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 49

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 062

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Jener (jēner) — tas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 50

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 063

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Der Brief (dēr brīf) — vēstule
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 51

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 064

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Die Briefe — vēstules
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 52

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 065

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Kurz (kurc) — īss
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 53

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 066

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Rein — tīrs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 54

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 067

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Schmutzig (šmucich) — netīrs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 55

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 068

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Auch — arī
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 42

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 069

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Langsam (lankzām) — lēni
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 43

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 070

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Schnell (šnel) — ātri
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 44

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 071

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Mehr (mēr) — vairāk
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 45

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 072

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Zumachen — aiztaisīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 46

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 073

Lesson: kurssLesson9
Section: kurssLesson9/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Sitzen (zicen) — sēdēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 47

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 074

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[0]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[0]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[0].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 56

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 075

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[0]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[0]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[0].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 57

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 076

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[0]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[0]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[0].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 58

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 077

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[0]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[0]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[0].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 59

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 078

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[1]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[1]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[1].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 60

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 079

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[1]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[1]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[1].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 61

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 080

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[1]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[1]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[1].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 62

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 3

## OBJECT 081

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[1]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[1]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[1].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 63

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 082

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[2]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[2]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[2].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 64

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 083

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[2]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[2]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[2].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 65

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 084

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[2]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[2]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[2].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 66

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 085

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[2]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[2]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[2].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 67

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 086

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[3]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[3]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[3].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 68

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 087

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[3]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[3]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[3].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 69

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 088

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[3]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[3]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[3].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 70

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 089

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[3]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[3]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[3].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 71

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 090

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[4]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[4]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[4].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 72

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 091

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[4]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[4]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[4].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 73

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 092

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[4]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[4]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[4].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 74

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 093

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[4]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[4]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[4].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 75

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 094

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[5]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[5]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[5].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 76

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 095

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[5]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[5]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[5].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 77

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 096

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[5]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[5]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[5].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 78

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 097

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[5]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[5]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[5].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 79

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 098

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[6]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[6]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[6].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 80

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 099

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[6]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[6]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[6].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 81

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 100

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[6]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[6]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[6].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 82

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 101

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[6]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[6]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[6].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 83

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 102

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[7]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[7]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[7].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 84

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 103

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[7]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[7]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[7].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 85

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 104

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[7]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[7]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[7].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 86

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 105

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[7]/forms[2]/text
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[7]/forms[2]/text

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].cards[7].forms[2].text
CURRENT (CURRENT_MATCH): Wir legen den Bleistift hin.
Audit recommendation: Pokládám tužku.
Luna recommendation: Pokládám tužku.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 405

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 106

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[7]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[7]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[7].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 87

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 107

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[7]/forms[3]/text
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[7]/forms[3]/text

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].cards[7].forms[3].text
CURRENT (CURRENT_MATCH): Ich lege die Bleistifte hin.
Audit recommendation: Pokládám tužky.
Luna recommendation: Pokládám tužky.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 406

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 108

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/base
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/base

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].cards[8].base
CURRENT (CURRENT_MATCH): Ich sitze ruhig.
Audit recommendation: Sedím klidně.
Luna recommendation: Sedím klidně.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 407

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 109

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[0].task
CURRENT (CURRENT_MATCH): Pārveido šo teikumu 3. personā vienskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 88

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 110

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[0]/text
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[0]/text

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[0].text
CURRENT (CURRENT_MATCH): Sedím si ruhig.
Audit recommendation: Sedím klidně.
Luna recommendation: Sedím klidně.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 408

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 111

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[1].task
CURRENT (CURRENT_MATCH): Pārveido sākuma teikumu 1. personā daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 89

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 112

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[1]/text
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[1]/text

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[1].text
CURRENT (CURRENT_MATCH): Er sitzt ruhig.
Audit recommendation: Sedím klidně.
Luna recommendation: Sedím klidně.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 409

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 113

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[2].task
CURRENT (CURRENT_MATCH): Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 90

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 114

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[2]/text
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[2]/text

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[2].text
CURRENT (CURRENT_MATCH): Wir sitzen ruhig.
Audit recommendation: Sedím klidně.
Luna recommendation: Sedím klidně.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 410

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 115

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[3].task
CURRENT (CURRENT_MATCH): Gatavs. Nākamais klikšķis rāda nākamo kartīti.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 91

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 116

Lesson: kurssLesson9
Section: kurssLesson9/section[3]/multi[8]/forms[3]/text
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[3]/multi[8]/forms[3]/text

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].cards[8].forms[3].text
CURRENT (CURRENT_MATCH): Sedím si ruhig.
Audit recommendation: Sedím klidně.
Luna recommendation: Sedím klidně.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 411

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 117

Lesson: kurssLesson9
Section: kurssLesson9/section[4]/card[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[4]/card[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[10]
CURRENT (CURRENT_MATCH): Co je to za desku?
Audit recommendation: Co je to za talíř?
Luna recommendation: Co je to za talíř?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 413

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 118

Lesson: kurssLesson9
Section: kurssLesson9/section[4]/card[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[4]/card[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[11]
CURRENT (CURRENT_MATCH): Tato deska není čistá, je špinavá.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 414

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 119

Lesson: kurssLesson9
Section: kurssLesson9/section[4]/card[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[4]/card[12]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[12]
CURRENT (CURRENT_MATCH): Jsou písmena dlouhá nebo krátká?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 415

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 120

Lesson: kurssLesson9
Section: kurssLesson9/section[4]/card[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[4]/card[16]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[16]
CURRENT (CURRENT_MATCH): Zavřete okno!
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 416

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 4

## OBJECT 121

Lesson: kurssLesson9
Section: kurssLesson9/section[4]/card[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson9/section[4]/card[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[3]
CURRENT (CURRENT_MATCH): Co to děláš
Audit recommendation: Co děláte?
Luna recommendation: Co děláte?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 412

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 122

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Gesund (gezunt) — vesels
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 419

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 123

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Ich bin gesund — es esmu vesels
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 420

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 124

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Sie können — viņi var
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 97

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 125

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Sei gesund — esi vesels!
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 424

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 126

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Seid gesund — esiet veseli!
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 425

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 127

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Seien Sie gesund — esiet Jūs veseli!
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 98

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 128

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Der Knabe (dēr knābe) — zēns
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 99

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 129

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Der Mann — vīrs, vīrietis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 100

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 130

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Der Großvater (dēr grōsfāter) — vectēvs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 101

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 131

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Du bist — tu esi
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 421

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 132

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Lernen — mācīties
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 102

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 133

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Das Jahr (jār) — gads
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 103

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 134

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Wie — kā, kāds, cik
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 104

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 135

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Wir sind — mēs esam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 92

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 136

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Ihr seid (īr zeit) — jūs esat
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 93

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 137

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Ich kann — es varu
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 422

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 138

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Du kannst — tu vari
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 423

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 139

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Er kann — viņš var
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 94

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 140

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Wir können — mēs varam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 95

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 141

Lesson: kurssLesson10
Section: kurssLesson10/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Ihr könnt — jūs varat
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 96

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 142

Lesson: kurssLesson10
Section: kurssLesson10/section[2]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[2]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[1]
CURRENT (CURRENT_MATCH): Ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 105

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 143

Lesson: kurssLesson10
Section: kurssLesson10/section[2]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[2]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[2]
CURRENT (CURRENT_MATCH): Ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 106

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 144

Lesson: kurssLesson10
Section: kurssLesson10/section[2]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[2]/item[6]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[6]
CURRENT (CURRENT_MATCH): Český valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 107

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 145

Lesson: kurssLesson10
Section: kurssLesson10/section[4]/card[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/section[4]/card[11]

### Finding 1
Severity: CRITICAL
Source: DETERMINISTIC
Status: DE_PARITY_ISSUE
Field: back
CURRENT (CURRENT_MATCH): Was bist du?
MASTER (DE): Wer bist du?
PROPOSED_ACTION: RESTORE_MASTER_PARITY
Audit recommendation: Wer bist du?
Reason: CS DE pole neodpovídá LV MASTER DE obsahu
Audit finding IDs: 1

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 146

Lesson: kurssLesson10
Section: kurssLesson10/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Sein, können, zdraví, věk a profese
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 418

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 147

Lesson: kurssLesson10
Section: kurssLesson10/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson10/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 10
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 417

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 148

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Der Schreibtisch (dēr šreibtīš) — rakstāmgalds
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 113

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 149

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Zusammen (cuzāmen) — kopā
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 114

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 150

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Der Freund (dēr froint) — draugs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 115

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 151

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Er hat — viņam ir
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 108

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 152

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Der Stuhl (dēr štūl) — krēsls
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 116

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 153

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Die Stühle — krēsli
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 117

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 154

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Das Bücherbrett — grāmatu plaukts
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 118

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 155

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Die Landkarte (dī lantkarte) — ģeogrāfijas karte
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 119

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 156

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[26]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[26]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[26]
CURRENT (CURRENT_MATCH): Glücklich — laimīgs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 120

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 157

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[28]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[28]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[28]
CURRENT (CURRENT_MATCH): Die Schwester (dī švester) — māsa
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 121

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 158

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[29]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[29]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[29]
CURRENT (CURRENT_MATCH): Die Schwestern — māsas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 122

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 159

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Ihr habt — jums ir
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_WORD
Audit finding IDs: 109

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 160

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Sie haben — viņiem ir
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 110

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 5

## OBJECT 161

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Der Bruder (dēr brūder) — brālis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 111

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 162

Lesson: kurssLesson11
Section: kurssLesson11/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Die Brüder — brāļi
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 112

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 163

Lesson: kurssLesson11
Section: kurssLesson11/section[2]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[2]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[0]
CURRENT (CURRENT_MATCH): Eu izrunā kā oi: der Freund (dēr froint), neun (noin).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 123

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 164

Lesson: kurssLesson11
Section: kurssLesson11/section[2]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[2]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[1]
CURRENT (CURRENT_MATCH): H pa lielākai daļai ir garumzīme iepriekšējam patskanim: der Stuhl (dēr štūl), zehn (cēn).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 124

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 165

Lesson: kurssLesson11
Section: kurssLesson11/section[2]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[2]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[2]
CURRENT (CURRENT_MATCH): Z izrunā kā český c: Franz (franc), das Zimmer (cimer).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 125

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 166

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[0]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 426

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 167

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[1]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 427

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 168

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[10]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 436

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 169

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[11]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 437

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 170

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[12]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[12]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 438

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 171

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[13]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[13]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 439

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 172

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[2]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 428

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 173

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[3]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 429

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 174

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[4]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 430

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 175

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[5]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 431

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 176

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[6]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 432

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 177

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[7]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 433

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 178

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[8]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[8]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 434

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 179

Lesson: kurssLesson11
Section: kurssLesson11/section[3]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[3]/item[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[3].items[9]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 435

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 180

Lesson: kurssLesson11
Section: kurssLesson11/section[4]/card[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[4]/card[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[0]
CURRENT (CURRENT_MATCH): Co máš
Audit recommendation: Co máš?
Luna recommendation: Co máš?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 440

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 181

Lesson: kurssLesson11
Section: kurssLesson11/section[4]/card[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson11/section[4]/card[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[2]
CURRENT (CURRENT_MATCH): Co jsou to knihy?
Audit recommendation: Jaké jsou ty knihy?
Luna recommendation: Jaké jsou ty knihy?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 441

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 182

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Wie heißt du — kā tevi sauc
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 126

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 183

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Jung — jauns
Audit recommendation: Mladý
Luna recommendation: Mladý
Reason: [Luna TRANSLATION] 
Audit finding IDs: 447

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 184

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Jünger als ich — jaunāks par mani
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 128

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 185

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): So alt wie — tik vecs kā
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 129

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 186

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Der Vetter (dēr feter) — brālēns
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 130

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 187

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Am ältesten (am eltesten) — visvecākais
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 131

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 188

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Ebenso — tāpat
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 132

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 189

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Wie — kā
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 133

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 190

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Am jüngsten — visjaunākais
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 134

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 191

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Faul — slinks
Audit recommendation: Líný
Luna recommendation: Líný
Reason: [Luna TRANSLATION] 
Audit finding IDs: 448

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 192

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Fleißig — čakls
Audit recommendation: Pilný
Luna recommendation: Pilný
Reason: [Luna TRANSLATION] 
Audit finding IDs: 449

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 193

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Blau — zils
Audit recommendation: Modrý
Luna recommendation: Modrý
Reason: [Luna TRANSLATION] 
Audit finding IDs: 450

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 194

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Braun — brūns
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 135

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 195

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Gelb — dzeltens
Audit recommendation: Žlutý
Luna recommendation: Žlutý
Reason: [Luna TRANSLATION] 
Audit finding IDs: 451

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 196

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[23]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[23]
CURRENT (CURRENT_MATCH): Das Gummi (das gumī) — gumija
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 136

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 197

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Grau — pelēks
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 137

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 198

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Der Baum — koks
Audit recommendation: Strom
Luna recommendation: Strom
Reason: [Luna TRANSLATION] 
Audit finding IDs: 452

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 199

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[26]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[26]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[26]
CURRENT (CURRENT_MATCH): Grün — zaļš
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 138

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 200

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[27]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[27]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[27]
CURRENT (CURRENT_MATCH): Die Blume — puķe
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 139

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 6

## OBJECT 201

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[28]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[28]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[28]
CURRENT (CURRENT_MATCH): Rot — sarkans
Audit recommendation: Červený
Luna recommendation: Červený
Reason: [Luna TRANSLATION] 
Audit finding IDs: 453

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 202

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Die Grube — bedre
Audit recommendation: Jáma
Luna recommendation: Jáma
Reason: [Luna TRANSLATION] 
Audit finding IDs: 442

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 203

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[30]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[30]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[30]
CURRENT (CURRENT_MATCH): Die Kreide — krīts
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 140

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 204

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Wieviel — cik
Audit recommendation: Kolik
Luna recommendation: Kolik
Reason: [Luna TRANSLATION] 
Audit finding IDs: 443

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 205

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Groß — liels
Audit recommendation: Velký
Luna recommendation: Velký
Reason: [Luna TRANSLATION] 
Audit finding IDs: 444

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 206

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Klein — mazs
Audit recommendation: Malý
Luna recommendation: Malý
Reason: [Luna TRANSLATION] 
Audit finding IDs: 445

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 207

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Kleiner als ich — mazāks par mani
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 127

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 208

Lesson: kurssLesson12
Section: kurssLesson12/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Alt — vecs
Audit recommendation: Starý
Luna recommendation: Starý
Reason: [Luna TRANSLATION] 
Audit finding IDs: 446

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 209

Lesson: kurssLesson12
Section: kurssLesson12/section[2]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[2]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[0]
CURRENT (CURRENT_MATCH): X izrunā kā ks: Max (maks), Felix (feliks).
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 141

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 210

Lesson: kurssLesson12
Section: kurssLesson12/section[2]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson12/section[2]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[2].items[2]
CURRENT (CURRENT_MATCH): H vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 142

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 211

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Der Körper — ķermenis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 143

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 212

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Der Mensch — cilvēks
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 144

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 213

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Der Fuß — kājas pēda
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 147

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 214

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Die Füße — kāju pēdas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 148

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 215

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Rund — apaļš
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 149

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 216

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Kurz — īss
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 150

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 217

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Dünn — tievs / plāns
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 151

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 218

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Die Brust — krūtis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 152

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 219

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Vorn — priekšā
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 153

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 220

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Hinten — aizmugurē
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 154

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 221

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[27]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[27]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[27]
CURRENT (CURRENT_MATCH): Die Zehe — kājas pirksts
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 155

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 222

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[32]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[32]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[32]
CURRENT (CURRENT_MATCH): Reinigen — tīrīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 156

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 223

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[35]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[35]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[35]
CURRENT (CURRENT_MATCH): Machen — darīt / taisīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 157

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 224

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[38]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[38]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[38]
CURRENT (CURRENT_MATCH): Stehen — stāvēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 158

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 225

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[45]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[45]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[45]
CURRENT (CURRENT_MATCH): Halten — turēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 159

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 226

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[48]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[48]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[48]
CURRENT (CURRENT_MATCH): Tief — dziļi
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 160

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 227

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Das Bein — kāja
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 145

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 228

Lesson: kurssLesson13
Section: kurssLesson13/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Die Beine — kājas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 146

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 229

Lesson: kurssLesson13
Section: kurssLesson13/section[3]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[3]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[0]
CURRENT (CURRENT_MATCH): H vārdā halten ir dzirdama skaņa.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 161

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 230

Lesson: kurssLesson13
Section: kurssLesson13/section[3]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[3]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[1]
CURRENT (CURRENT_MATCH): H vārdā fahren rāda patskaņa garumu.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 162

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 231

Lesson: kurssLesson13
Section: kurssLesson13/section[3]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[3]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[2]
CURRENT (CURRENT_MATCH): A vārdā halten izrunā īsi: halten.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 163

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 232

Lesson: kurssLesson13
Section: kurssLesson13/section[3]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[3]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[3]
CURRENT (CURRENT_MATCH): A vārdā tragen izrunā gari: tragen.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 164

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 233

Lesson: kurssLesson13
Section: kurssLesson13/section[3]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[3]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[4]
CURRENT (CURRENT_MATCH): Äu izrunā kā oi: du läufst, er läuft.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 165

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 234

Lesson: kurssLesson13
Section: kurssLesson13/section[3]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[3]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[5]
CURRENT (CURRENT_MATCH): Pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 166

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 235

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[11]
CURRENT (CURRENT_MATCH): Dlaň má pět prstů.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 458

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 236

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[14]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[14]
CURRENT (CURRENT_MATCH): Co je to prst?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 459

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 237

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[15]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[15]
CURRENT (CURRENT_MATCH): Prst má dráp.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 460

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 238

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[16]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[16]
CURRENT (CURRENT_MATCH): Co to děláš
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 461

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 239

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[21]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[21]
CURRENT (CURRENT_MATCH): Zvednou nohy a ruce.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 462

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 240

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[23]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[23]
CURRENT (CURRENT_MATCH): Spustí obě ruce.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 463

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 7

## OBJECT 241

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[24]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[24]
CURRENT (CURRENT_MATCH): Otáčejí hlavy doprava.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 464

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 242

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[4]
CURRENT (CURRENT_MATCH): Co je to ruka?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 454

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 243

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[5]
CURRENT (CURRENT_MATCH): Co je to noha?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 455

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 244

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[7]
CURRENT (CURRENT_MATCH): Kde je hrudník
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 456

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 245

Lesson: kurssLesson13
Section: kurssLesson13/section[5]/card[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson13/section[5]/card[8]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[8]
CURRENT (CURRENT_MATCH): Kde je záda?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 457

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 246

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Müssen — vajadzēt / būt jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 167

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 247

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Ich muss — man vajag / man jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 168

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 248

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Wollen — gribēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 177

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 249

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Er will — viņš grib
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 178

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 250

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Sie will — viņa grib
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 179

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 251

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Es will — tas grib
Audit recommendation: Es will — ono chce
Luna recommendation: Es will — ono chce
Reason: [Luna TRANSLATION] 
Audit finding IDs: 465

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 252

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Wir wollen — mēs gribam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 180

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 253

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Ihr wollt — jūs gribat
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 181

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 254

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Du musst — tev vajag / tev jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 169

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 255

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Sie wollen — viņi / viņas grib
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 182

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 256

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Mögen — gribēt / vēlēties / patikt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 183

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 257

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Ich mag — es gribu / man patīk
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 184

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 258

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[23]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[23]
CURRENT (CURRENT_MATCH): Du magst — tu gribi / tev patīk
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 185

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 259

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Er mag — viņš grib / viņam patīk
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 186

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 260

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Sie mag — viņa grib / viņai patīk
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 187

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 261

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[26]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[26]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[26]
CURRENT (CURRENT_MATCH): Es mag — tas grib / tam patīk
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 188

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 262

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[27]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[27]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[27]
CURRENT (CURRENT_MATCH): Wir mögen — mēs gribam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 189

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 263

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[28]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[28]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[28]
CURRENT (CURRENT_MATCH): Ihr mögt — jūs gribat
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 190

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 264

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[29]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[29]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[29]
CURRENT (CURRENT_MATCH): Sie mögen — viņi / viņas grib
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 191

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 265

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Er muss — viņam vajag / viņam jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 170

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 266

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[30]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[30]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[30]
CURRENT (CURRENT_MATCH): Die Suppe — zupa
Audit recommendation: Die Suppe — polévka
Luna recommendation: Die Suppe — polévka
Reason: [Luna TRANSLATION] 
Audit finding IDs: 466

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 267

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[31]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[31]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[31]
CURRENT (CURRENT_MATCH): Munden — labi garšot
Audit recommendation: Munden — chutnat / dobře chutnat
Luna recommendation: Munden — chutnat / dobře chutnat
Reason: [Luna TRANSLATION] 
Audit finding IDs: 467

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 268

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[32]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[32]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[32]
CURRENT (CURRENT_MATCH): Mir — man
Audit recommendation: Mir — mně
Luna recommendation: Mir — mně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 468

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 269

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[33]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[33]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[33]
CURRENT (CURRENT_MATCH): Dir — tev
Audit recommendation: Dir — tobě
Luna recommendation: Dir — tobě
Reason: [Luna TRANSLATION] 
Audit finding IDs: 469

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 270

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[34]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[34]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[34]
CURRENT (CURRENT_MATCH): Ihm — viņam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 192

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 271

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[35]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[35]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[35]
CURRENT (CURRENT_MATCH): Ihr — viņai
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 193

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 272

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[36]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[36]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[36]
CURRENT (CURRENT_MATCH): Uns — mums
Audit recommendation: Uns — nám
Luna recommendation: Uns — nám
Reason: [Luna TRANSLATION] 
Audit finding IDs: 470

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 273

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[37]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[37]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[37]
CURRENT (CURRENT_MATCH): Euch — jums
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_WORD
Audit finding IDs: 194

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 274

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[38]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[38]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[38]
CURRENT (CURRENT_MATCH): Ihnen — viņiem / viņām
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 195

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 275

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[39]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[39]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[39]
CURRENT (CURRENT_MATCH): Denn — jo
Audit recommendation: Denn — protože / neboť
Luna recommendation: Denn — protože / neboť
Reason: [Luna TRANSLATION] 
Audit finding IDs: 471

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 276

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Sie muss — viņai vajag / viņai jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 171

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 277

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Es muss — tam vajag / tam jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 172

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 278

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Wir müssen — mums vajag / mums jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 173

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 279

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Ihr müsst — jums vajag / jums jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 174

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 280

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Sie müssen — viņiem / viņām vajag
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 175

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 8

## OBJECT 281

Lesson: kurssLesson14
Section: kurssLesson14/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Lernen — mācīties
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 176

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 282

Lesson: kurssLesson14
Section: kurssLesson14/section[2]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[2]/item[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[0]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 472

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 283

Lesson: kurssLesson14
Section: kurssLesson14/section[2]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[2]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[1]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 473

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 284

Lesson: kurssLesson14
Section: kurssLesson14/section[2]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[2]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[5]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 474

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 285

Lesson: kurssLesson14
Section: kurssLesson14/section[2]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[2]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[6]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 475

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 286

Lesson: kurssLesson14
Section: kurssLesson14/section[2]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[2]/item[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[7]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 476

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 287

Lesson: kurssLesson14
Section: kurssLesson14/section[2]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[2]/item[8]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[8]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 477

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 288

Lesson: kurssLesson14
Section: kurssLesson14/section[3]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[3]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[0]
CURRENT (CURRENT_MATCH): SS izrunā kā český s.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 196

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 289

Lesson: kurssLesson14
Section: kurssLesson14/section[3]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[3]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[1]
CURRENT (CURRENT_MATCH): SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 197

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 290

Lesson: kurssLesson14
Section: kurssLesson14/section[3]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[3]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[3]
CURRENT (CURRENT_MATCH): Ö vārdā mögen izrunā kā skaidru ö skaņu.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 198

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 291

Lesson: kurssLesson14
Section: kurssLesson14/section[3]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[3]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[5]
CURRENT (CURRENT_MATCH): Līdzīgi arī český valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 199

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 292

Lesson: kurssLesson14
Section: kurssLesson14/section[4]/card[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[4]/card[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[0]
CURRENT (CURRENT_MATCH): Kdo chce tvrdě studovat?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 478

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 293

Lesson: kurssLesson14
Section: kurssLesson14/section[4]/card[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[4]/card[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[1]
CURRENT (CURRENT_MATCH): Všichni studenti chtějí tvrdě studovat.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 479

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 294

Lesson: kurssLesson14
Section: kurssLesson14/section[4]/card[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[4]/card[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[10]
CURRENT (CURRENT_MATCH): Kdo by si měl knihu přečíst?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 484

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 295

Lesson: kurssLesson14
Section: kurssLesson14/section[4]/card[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[4]/card[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[2]
CURRENT (CURRENT_MATCH): Kdo by měl dnes přijít?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 480

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 296

Lesson: kurssLesson14
Section: kurssLesson14/section[4]/card[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[4]/card[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[4]
CURRENT (CURRENT_MATCH): Musíte napsat dopis.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 481

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 297

Lesson: kurssLesson14
Section: kurssLesson14/section[4]/card[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[4]/card[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[5]
CURRENT (CURRENT_MATCH): Kdo se musí tvrdě učit?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 482

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 298

Lesson: kurssLesson14
Section: kurssLesson14/section[4]/card[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson14/section[4]/card[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[6]
CURRENT (CURRENT_MATCH): Studenti musí tvrdě studovat.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 483

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 299

Lesson: kurssLesson15
Section: kurssLesson15/section[0]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[0]/item[24]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[0].items[24]
CURRENT (CURRENT_MATCH): Nein, Kinder, diese Birnen sollt ihr nicht essen • Sie sind nicht reif, sie sind unreif.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 486

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 300

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Sollen — vajadzēt / būt pienākumam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 200

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 301

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Ich soll — man vajag / man jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 201

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 302

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Er darf — viņš drīkst
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 210

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 303

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Wir dürfen — mēs drīkstam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 211

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 304

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Ihr dürft — jūs drīkstat
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 212

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 305

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Sie dürfen — viņi / viņas drīkst
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 213

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 306

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[15]

### Finding 1
Severity: MEDIUM
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Das Messer — nazis
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna FINDING] 
Audit finding IDs: 488

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 307

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Der Apfel — ābols
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 214

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 308

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Die Äpfel — āboli
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 215

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 309

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[18]

### Finding 1
Severity: MEDIUM
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Schälen — mizot
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna FINDING] 
Audit finding IDs: 489

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 310

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Entzweischneiden — pārgriezt uz pusēm
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 216

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 311

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Du sollst — tev vajag / tev jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 202

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 312

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[20]

### Finding 1
Severity: MEDIUM
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Die Birne — bumbieris
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna FINDING] 
Audit finding IDs: 490

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 313

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[21]

### Finding 1
Severity: MEDIUM
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Die Birnen — bumbieri
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna FINDING] 
Audit finding IDs: 491

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 314

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Die Pflaume — plūme
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 217

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 315

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[23]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[23]
CURRENT (CURRENT_MATCH): Die Pflaumen — plūmes
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 218

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 316

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Die Kirsche — ķirsis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 219

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 317

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Die Kirschen — ķirši
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 220

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 318

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[26]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[26]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[26]
CURRENT (CURRENT_MATCH): Gern — labprāt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 221

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 319

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[27]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[27]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[27]
CURRENT (CURRENT_MATCH): Reif — ienācies / nogatavojies
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 222

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 320

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[28]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[28]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[28]
CURRENT (CURRENT_MATCH): Unreif — neienācies / nenogatavojies
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 223

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 9

## OBJECT 321

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[29]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[29]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[29]
CURRENT (CURRENT_MATCH): Nehmen — ņemt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 224

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 322

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Er soll — viņam vajag / viņam jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 203

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 323

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[30]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[30]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[30]
CURRENT (CURRENT_MATCH): Ich nehme — es ņemu
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 225

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 324

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[31]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[31]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[31]
CURRENT (CURRENT_MATCH): Du nimmst — tu ņem
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 226

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 325

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[32]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[32]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[32]
CURRENT (CURRENT_MATCH): Er nimmt — viņš ņem
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 227

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 326

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[33]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[33]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[33]
CURRENT (CURRENT_MATCH): Essen — ēst
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 228

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 327

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[34]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[34]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[34]
CURRENT (CURRENT_MATCH): Ich esse — es ēdu
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 229

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 328

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[35]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[35]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[35]
CURRENT (CURRENT_MATCH): Du isst — tu ēd
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 230

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 329

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[36]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[36]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[36]
CURRENT (CURRENT_MATCH): Er isst — viņš ēd
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 231

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 330

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[37]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[37]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[37]
CURRENT (CURRENT_MATCH): Wir essen — mēs ēdam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 232

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 331

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[38]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[38]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[38]
CURRENT (CURRENT_MATCH): Ihr esst — jūs ēdat
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 233

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 332

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[39]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[39]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[39]
CURRENT (CURRENT_MATCH): Sie essen — viņi / viņas ēd
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 234

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 333

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Wir sollen — mums vajag / mums jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 204

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 334

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Ihr sollt — jums vajag / jums jādara
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 205

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 335

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Sie sollen — viņiem / viņām vajag
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 206

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 336

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Dürfen — drīkstēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 207

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 337

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Ich darf — es drīkstu
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 208

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 338

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Du darfst — tu drīksti
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 209

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 339

Lesson: kurssLesson15
Section: kurssLesson15/section[1]/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[1]/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[].title
CURRENT (CURRENT_MATCH): Jména
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 487

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 340

Lesson: kurssLesson15
Section: kurssLesson15/section[3]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/section[3]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[0]
CURRENT (CURRENT_MATCH): Ä vārdos Äpfel un schälen izrunā kā šauro e.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 235

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 341

Lesson: kurssLesson15
Section: kurssLesson15/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson15/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 15
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 485

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 342

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Wem — kam?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 493

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 343

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Schenken — dāvināt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 236

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 344

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Er gibt — viņš dod
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 239

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 345

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Die Magd — kalpone
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 500

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 346

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Gehorchen — paklausīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 240

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 347

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Der Knecht — kalps
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 501

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 348

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Gehören — piederēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 241

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 349

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Das Feld — lauks / tīrums
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 242

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 350

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Die Felder — lauki / tīrumi
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 243

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 351

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Die Wiese — pļava
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 244

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 352

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Dem Sohne — dēlam
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 237

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 353

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Die Wiesen — pļavas
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 245

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 354

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Der Wald — mežs
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 502

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 355

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Die Wälder — meži
Audit recommendation: Die Wälder — lesy
Luna recommendation: Die Wälder — lesy
Reason: [Luna TRANSLATION] 
Audit finding IDs: 503

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 356

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[23]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[23]
CURRENT (CURRENT_MATCH): Der Bauer — zemnieks
Audit recommendation: Der Bauer — zemědělec
Luna recommendation: Der Bauer — zemědělec
Reason: [Luna TRANSLATION] 
Audit finding IDs: 504

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 357

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Die Bäuerin — zemniece
Audit recommendation: Die Bäuerin — zemědělkyně
Luna recommendation: Die Bäuerin — zemědělkyně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 505

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 358

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Folgen — sekot
Audit recommendation: Folgen — následovat
Luna recommendation: Folgen — následovat
Reason: [Luna TRANSLATION] 
Audit finding IDs: 506

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 359

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[26]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[26]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[26]
CURRENT (CURRENT_MATCH): Der Jäger — mednieks
Audit recommendation: Der Jäger — lovec
Luna recommendation: Der Jäger — lovec
Reason: [Luna TRANSLATION] 
Audit finding IDs: 507

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 360

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[27]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[27]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[27]
CURRENT (CURRENT_MATCH): Treu — uzticīgs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 246

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 10

## OBJECT 361

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Den Söhnen — dēliem
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 238

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 362

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Sich nähern — tuvoties
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 494

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 363

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Ich nähere mich — es tuvojos
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 495

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 364

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Du näherst dich — tu tuvojies
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 496

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 365

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Geben — dot
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 497

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 366

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Ich gebe — es dodu
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 498

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 367

Lesson: kurssLesson16
Section: kurssLesson16/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Du gibst — tu dod
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 499

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 368

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[0]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 508

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 369

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[1]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 509

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 370

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[10]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 516

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 371

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[11]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 517

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 372

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[2]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 510

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 373

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[3]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 511

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 374

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[4]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 512

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 375

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[5]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 513

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 376

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[6]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 514

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 377

Lesson: kurssLesson16
Section: kurssLesson16/section[2]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[2]/item[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[7]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: [object Object]
Luna recommendation: [object Object]
Reason: [Luna TRANSLATION] 
Audit finding IDs: 515

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 378

Lesson: kurssLesson16
Section: kurssLesson16/section[3]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[3]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[2]
CURRENT (CURRENT_MATCH): Die Wälder: ä izrunā kā šaurais īsais e.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 247

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 379

Lesson: kurssLesson16
Section: kurssLesson16/section[3]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[3]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[3]
CURRENT (CURRENT_MATCH): Die Bäuerinnen: äu izrunā kā oi.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 248

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 380

Lesson: kurssLesson16
Section: kurssLesson16/section[3]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[3]/item[4]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[4]
CURRENT (CURRENT_MATCH): -ie ir garā ī apzīmējums: die Wiese.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 249

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 381

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[0].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 250

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 382

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[1].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 251

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 383

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[10]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[10]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[10].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 260

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 384

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[11]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[11]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[11].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 261

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 385

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[12]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[12]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[12].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 262

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 386

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[13]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[13]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[13].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 263

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 387

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[14]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[14]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[14].prompt
CURRENT (CURRENT_MATCH): Der Vater ruft den Mann, die Frau, das Kind, den Sohn, das Fräulein, die Tante.
Audit recommendation: Otec volá muže, ženu, dítě, syna, slečnu a tetu.
Luna recommendation: Otec volá muže, ženu, dítě, syna, slečnu a tetu.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 518

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 388

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[14]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[14]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[14].task
CURRENT (CURRENT_MATCH): Pārveido daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 264

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 389

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[15]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[15]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[15].prompt
CURRENT (CURRENT_MATCH): Der Vater nähert sich dem Knechte, der Tochter, der Magd, dem Lehrer, dem Tischler, der Lehrerin, dem Mädchen, dem Jäger.
Audit recommendation: Otec se přibližuje ke sluhovi, dceři, služce, učiteli, truhláři, učitelce, dívce a myslivci.
Luna recommendation: Otec se přibližuje ke sluhovi, dceři, služce, učiteli, truhláři, učitelce, dívce a myslivci.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 519

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 390

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[15]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[15]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[15].task
CURRENT (CURRENT_MATCH): Pārveido daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 265

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 391

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[2].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 252

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 392

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[3].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 253

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 393

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[4]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[4]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[4].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 254

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 394

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[5]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[5]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[5].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 255

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 395

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[6]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[6]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[6].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 256

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 396

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[7]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[7]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[7].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 257

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 397

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[8]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[8]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[8].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 258

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 398

Lesson: kurssLesson16
Section: kurssLesson16/section[4]/promptTask[9]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[4]/promptTask[9]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[9].task
CURRENT (CURRENT_MATCH): Ieliec pareizo artikulu datīvā.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 259

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 399

Lesson: kurssLesson16
Section: kurssLesson16/section[5]/card[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[5]/card[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[0]
CURRENT (CURRENT_MATCH): Jak se jmenuje otec?
Audit recommendation: Koho otec volá?
Luna recommendation: Koho otec volá?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 520

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 400

Lesson: kurssLesson16
Section: kurssLesson16/section[5]/card[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[5]/card[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[11]
CURRENT (CURRENT_MATCH): Psi jsou loajální.
Audit recommendation: Psi jsou věrní.
Luna recommendation: Psi jsou věrní.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 522

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 11

## OBJECT 401

Lesson: kurssLesson16
Section: kurssLesson16/section[5]/card[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[5]/card[12]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[12]
CURRENT (CURRENT_MATCH): Co se blíží školákům a dívkám?
Audit recommendation: Kdo se blíží žákům a žákyním?
Luna recommendation: Kdo se blíží žákům a žákyním?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 523

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 402

Lesson: kurssLesson16
Section: kurssLesson16/section[5]/card[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[5]/card[13]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[13]
CURRENT (CURRENT_MATCH): Učitel přistoupí ke studentům.
Audit recommendation: Učitel se přibližuje k žákům a žákyním.
Luna recommendation: Učitel se přibližuje k žákům a žákyním.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 524

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 403

Lesson: kurssLesson16
Section: kurssLesson16/section[5]/card[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/section[5]/card[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[5]
CURRENT (CURRENT_MATCH): Pes poslouchá služebnictvo a služebné.
Audit recommendation: Pes poslouchá sluhy a služky.
Luna recommendation: Pes poslouchá sluhy a služky.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 521

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 404

Lesson: kurssLesson16
Section: kurssLesson16/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson16/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 16
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 492

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 405

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Der Spaten — lāpsta
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 266

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 406

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Die Grube — bedre
Audit recommendation: Die Grube — jáma
Luna recommendation: Die Grube — jáma
Reason: [Luna TRANSLATION] 
Audit finding IDs: 525

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 407

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Der Besen — slota
Audit recommendation: Der Besen — koště
Luna recommendation: Der Besen — koště
Reason: [Luna TRANSLATION] 
Audit finding IDs: 531

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 408

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Fegen — slaucīt ar slotu
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 270

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 409

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Die Diele — grīda
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 271

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 410

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Der Lappen — lupata / drāna
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 272

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 411

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Wischen — slaucīt / tīrīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 273

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 412

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Abwischen — noslaucīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 274

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 413

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Helfen — palīdzēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 275

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 414

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Danken — pateikties
Audit recommendation: Danken — děkovat
Luna recommendation: Danken — děkovat
Reason: [Luna TRANSLATION] 
Audit finding IDs: 532

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 415

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Der Freund — draugs
Audit recommendation: Der Freund — přítel
Luna recommendation: Der Freund — přítel
Reason: [Luna TRANSLATION] 
Audit finding IDs: 533

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 416

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Die Freundin — draudzene
Audit recommendation: Die Freundin — přítelkyně
Luna recommendation: Die Freundin — přítelkyně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 534

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 417

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Graben — rakt
Audit recommendation: Graben — kopat
Luna recommendation: Graben — kopat
Reason: [Luna TRANSLATION] 
Audit finding IDs: 526

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 418

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Die Freundinnen — draudzenes
Audit recommendation: Die Freundinnen — přítelkyně
Luna recommendation: Die Freundinnen — přítelkyně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 535

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 419

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Mit — ar
Audit recommendation: Mit — s
Luna recommendation: Mit — s
Reason: [Luna TRANSLATION] 
Audit finding IDs: 536

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 420

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Mit wem — ar ko? / ar kuru?
Audit recommendation: Mit wem — s kým?
Luna recommendation: Mit wem — s kým?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 537

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 421

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[23]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[23]
CURRENT (CURRENT_MATCH): Der Staub — putekļi
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 276

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 422

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Der Bruder — brālis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 277

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 423

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Die Schwester — māsa
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 278

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 424

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Womit — ar ko?
Audit recommendation: Womit — čím?
Luna recommendation: Womit — čím?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 527

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 425

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Der Ball — bumba
Audit recommendation: Der Ball — míč
Luna recommendation: Der Ball — míč
Reason: [Luna TRANSLATION] 
Audit finding IDs: 528

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 426

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Werfen — mest
Audit recommendation: Werfen — házet
Luna recommendation: Werfen — házet
Reason: [Luna TRANSLATION] 
Audit finding IDs: 529

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 427

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Fangen — ķert
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 267

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 428

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Auffangen — uzķert / noķert
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 268

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 429

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Wieder — atkal
Audit recommendation: Wieder — znovu
Luna recommendation: Wieder — znovu
Reason: [Luna TRANSLATION] 
Audit finding IDs: 530

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 430

Lesson: kurssLesson17
Section: kurssLesson17/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Der Schuldiener — skolas apkalpotājs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 269

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 431

Lesson: kurssLesson17
Section: kurssLesson17/section[4]/promptTask[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[4]/promptTask[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[0].task
CURRENT (CURRENT_MATCH): Atbildi vienskaitlī, pēc tam daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 279

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 432

Lesson: kurssLesson17
Section: kurssLesson17/section[4]/promptTask[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[4]/promptTask[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[1].task
CURRENT (CURRENT_MATCH): Atbildi vienskaitlī, pēc tam daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 280

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 433

Lesson: kurssLesson17
Section: kurssLesson17/section[4]/promptTask[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[4]/promptTask[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[2].task
CURRENT (CURRENT_MATCH): Atbildi vienskaitlī, pēc tam daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 281

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 434

Lesson: kurssLesson17
Section: kurssLesson17/section[4]/promptTask[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[4]/promptTask[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[3].task
CURRENT (CURRENT_MATCH): Atbildi vienskaitlī, pēc tam daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 282

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 435

Lesson: kurssLesson17
Section: kurssLesson17/section[4]/promptTask[4]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson17/section[4]/promptTask[4]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[4].task
CURRENT (CURRENT_MATCH): Atbildi vienskaitlī, pēc tam daudzskaitlī.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 283

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 436

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Wohin — kurp?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 538

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 437

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Wo — kur?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 539

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 438

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Legen — likt / nolikt guļus
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 287

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 439

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Das Wasser — ūdens
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 288

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 440

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Gießen — liet
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 545

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 12

## OBJECT 441

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Der Krug — krūze
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 289

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 442

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Die Krüge — krūzes
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 290

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 443

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Jetzt — tagad
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 546

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 444

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): An — pie
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 547

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 445

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Auf — uz
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 548

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 446

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): In — iekšā / uz iekšpusi
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 291

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 447

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Der Tisch — galds
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 549

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 448

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Tragen — nest
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 540

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 449

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Die Bank — sols
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 550

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 450

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Die Diele — grīda
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 292

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 451

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Der Eimer — spainis
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 551

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 452

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Ich trage — es nesu
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 541

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 453

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Du trägst — tu nes
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 542

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 454

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Er/sie/es trägt — viņš/viņa/tas nes
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 284

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 455

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Der Korb — grozs / kurvis
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 543

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 456

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Die Körbe — grozi / kurvji
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 544

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 457

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Das Körbchen — groziņš / kurvītis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 285

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 458

Lesson: kurssLesson18
Section: kurssLesson18/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Stellen — novietot / nolikt stāvus
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 286

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 459

Lesson: kurssLesson18
Section: kurssLesson18/section[2]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[2]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[1]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 552

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 460

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[0].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 293

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 461

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[1].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 294

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 462

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[2].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 295

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 463

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[3].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 296

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 464

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[4]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[4]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[4].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 297

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 465

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[5]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[5]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[5].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 298

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 466

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[6]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[6]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[6].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 299

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 467

Lesson: kurssLesson18
Section: kurssLesson18/section[4]/promptTask[7]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[4]/promptTask[7]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[7].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: Dativ vai Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 300

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 468

Lesson: kurssLesson18
Section: kurssLesson18/section[5]/card[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[5]/card[0]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[0]
CURRENT (CURRENT_MATCH): Odkud server pochází?
Audit recommendation: Kam přichází sluha?
Luna recommendation: Kam přichází sluha?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 553

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 469

Lesson: kurssLesson18
Section: kurssLesson18/section[5]/card[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[5]/card[13]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[13]
CURRENT (CURRENT_MATCH): Dopisy jsou nyní v tašce.
Audit recommendation: Sešity jsou nyní v tašce.
Luna recommendation: Sešity jsou nyní v tašce.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 556

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 470

Lesson: kurssLesson18
Section: kurssLesson18/section[5]/card[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[5]/card[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[2]
CURRENT (CURRENT_MATCH): Kde pracuje
Audit recommendation: Kde pracuje?
Luna recommendation: Kde pracuje?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 554

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 471

Lesson: kurssLesson18
Section: kurssLesson18/section[5]/card[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson18/section[5]/card[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[7]
CURRENT (CURRENT_MATCH): Sbírají bobule v lese.
Audit recommendation: Hledají bobule v lese.
Luna recommendation: Hledají bobule v lese.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 555

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 472

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Vor — priekšā / pirms
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 301

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 473

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Hinter — aiz
Audit recommendation: Hinter — za
Luna recommendation: Hinter — za
Reason: [Luna TRANSLATION] 
Audit finding IDs: 560

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 474

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Der Eimer — spainis
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 567

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 475

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Die Bank — sols
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 568

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 476

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Das Bild — attēls / bilde
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 304

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 477

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[13]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[13]
CURRENT (CURRENT_MATCH): Das Klavier — klavieres
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 569

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 478

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Der Großvater — vectēvs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 305

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 479

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Die Großmutter — vecmāmiņa
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 306

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 480

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Der Stuhl — krēsls
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 307

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 13

## OBJECT 481

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[17]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[17]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[17]
CURRENT (CURRENT_MATCH): Der Zaun — žogs
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 570

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 482

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Die Brücke — tilts
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 571

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 483

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Pflanzen — stādīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 308

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 484

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Unter — zem
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 561

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 485

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Der Strauch — krūms
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 309

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 486

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Wachsen — augt
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 572

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 487

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Die Mühle — dzirnavas
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 573

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 488

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[23]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[23]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[23]
CURRENT (CURRENT_MATCH): Die Scheune — šķūnis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 310

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 489

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[24]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[24]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[24]
CURRENT (CURRENT_MATCH): Der Teich — dīķis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 311

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 490

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[25]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[25]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[25]
CURRENT (CURRENT_MATCH): Der Garten — dārzs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 312

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 491

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[26]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[26]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[26]
CURRENT (CURRENT_MATCH): Das Feld — lauks
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 574

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 492

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Über — virs / pāri
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 302

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 493

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[31]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[31]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[31]
CURRENT (CURRENT_MATCH): Die Stadt — pilsēta
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 313

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 494

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[35]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[35]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[35]
CURRENT (CURRENT_MATCH): Zeigen — rādīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 314

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 495

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[37]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[37]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[37]
CURRENT (CURRENT_MATCH): So — tā
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 315

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 496

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Neben — blakus
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 562

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 497

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Zwischen — starp
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 563

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 498

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Werfen — mest
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 564

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 499

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Stellen — novietot / nostādīt / nolikt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 303

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 500

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Der Spiegel — spogulis
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 565

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 501

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Der Schrank — skapis
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 566

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 502

Lesson: kurssLesson19
Section: kurssLesson19/section[1]/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[1]/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[].title
CURRENT (CURRENT_MATCH): Jména
Audit recommendation: Slovíčka
Luna recommendation: Slovíčka
Reason: [Luna TRANSLATION] 
Audit finding IDs: 559

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 503

Lesson: kurssLesson19
Section: kurssLesson19/section[3]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[3]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[2]
CURRENT (CURRENT_MATCH): Vārdā der Stuhl: st izrunā kā št • H ir garuma zīme un netiek izrunāts.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 316

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 504

Lesson: kurssLesson19
Section: kurssLesson19/section[4]/promptTask[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[4]/promptTask[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[0].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 317

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 505

Lesson: kurssLesson19
Section: kurssLesson19/section[4]/promptTask[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[4]/promptTask[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[1].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 318

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 506

Lesson: kurssLesson19
Section: kurssLesson19/section[5]/card[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/section[5]/card[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[4]
CURRENT (CURRENT_MATCH): Poté učitel zavolá žáka.
Audit recommendation: Poté učitel vyvolá žáka.
Luna recommendation: Poté učitel vyvolá žáka.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 575

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 507

Lesson: kurssLesson19
Section: kurssLesson19/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen
Audit recommendation: Předložky se dvěma pády: před, za, pod, nad, vedle, mezi
Luna recommendation: Předložky se dvěma pády: před, za, pod, nad, vedle, mezi
Reason: [Luna TRANSLATION] 
Audit finding IDs: 558

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 508

Lesson: kurssLesson19
Section: kurssLesson19/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson19/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 19
Audit recommendation: Lekce 19
Luna recommendation: Lekce 19
Reason: [Luna TRANSLATION] 
Audit finding IDs: 557

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 509

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Das Stockwerk — stāvs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 319

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 510

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Das Dach — jumts
Audit recommendation: Das Dach — střecha
Luna recommendation: Das Dach — střecha
Reason: [Luna TRANSLATION] 
Audit finding IDs: 583

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 511

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[11]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[11]
CURRENT (CURRENT_MATCH): Der Boden — bēniņi / grīda / zeme
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 322

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 512

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Der Schornsteinfeger — skursteņslaucītājs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 323

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 513

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[15]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[15]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[15]
CURRENT (CURRENT_MATCH): Die Stadt — pilsēta
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 324

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 514

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[19]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[19]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[19]
CURRENT (CURRENT_MATCH): Stecken — bāzt / ielikt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 325

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 515

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Die Mauer — mūris
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 320

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 516

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Der Ofen — krāsns
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 326

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 517

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[21]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[21]
CURRENT (CURRENT_MATCH): Anzünden — aizdedzināt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 327

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 518

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[22]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[22]
CURRENT (CURRENT_MATCH): Bald — drīz
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 328

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 519

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[28]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[28]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[28]
CURRENT (CURRENT_MATCH): Der Mensch — cilvēks
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 329

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 520

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Der Stein — akmens
Audit recommendation: Der Stein — kámen
Luna recommendation: Der Stein — kámen
Reason: [Luna TRANSLATION] 
Audit finding IDs: 577

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 14

## OBJECT 521

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Das Holz — koks / malka
Audit recommendation: Das Holz — dřevo / dříví
Luna recommendation: Das Holz — dřevo / dříví
Reason: [Luna TRANSLATION] 
Audit finding IDs: 578

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 522

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Das Glas — stikls
Audit recommendation: Das Glas — sklo
Luna recommendation: Das Glas — sklo
Reason: [Luna TRANSLATION] 
Audit finding IDs: 579

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 523

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Aus Glas — no stikla
Audit recommendation: Aus Glas — ze skla
Luna recommendation: Aus Glas — ze skla
Reason: [Luna TRANSLATION] 
Audit finding IDs: 580

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 524

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Die Wohnung — dzīvoklis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 321

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 525

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Das Vorhaus — priekšnams / gaitenis
Audit recommendation: Das Vorhaus — předsíň / chodba
Luna recommendation: Das Vorhaus — předsíň / chodba
Reason: [Luna TRANSLATION] 
Audit finding IDs: 581

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 526

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/item[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/item[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[9]
CURRENT (CURRENT_MATCH): Die Küche — virtuve
Audit recommendation: Die Küche — kuchyně
Luna recommendation: Die Küche — kuchyně
Reason: [Luna TRANSLATION] 
Audit finding IDs: 582

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 527

Lesson: kurssLesson20
Section: kurssLesson20/section[1]/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[1]/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[].title
CURRENT (CURRENT_MATCH): Jména
Audit recommendation: Slovíčka
Luna recommendation: Slovíčka
Reason: [Luna TRANSLATION] 
Audit finding IDs: 576

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 528

Lesson: kurssLesson20
Section: kurssLesson20/section[3]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[3]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[3].items[2]
CURRENT (CURRENT_MATCH): Sch izrunā kā š: der Schornstein, der Mensch.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 330

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 529

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[0].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 331

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 530

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[1].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 332

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 531

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[10]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[10]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[10].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 341

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 532

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[11]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[11]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[11].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 342

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 533

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[12]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[12]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[12].prompt
CURRENT (CURRENT_MATCH): Ein Spiegel hängt an (die Wand).
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 584

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 534

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[12]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[12]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[12].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 343

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 535

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[13]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[13]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[13].prompt
CURRENT (CURRENT_MATCH): Der Bruder stellt die Vase vor (der Spiegel).
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 585

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 536

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[13]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[13]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[13].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 344

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 537

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[14]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[14]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[14].prompt
CURRENT (CURRENT_MATCH): Das Kind geht gern auf (die Straße).
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 586

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 538

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[14]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[14]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[14].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 345

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 539

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[15]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[15]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[15].prompt
CURRENT (CURRENT_MATCH): Das Kind spielt gern auf (die Straße).
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 587

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 540

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[15]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[15]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[15].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 346

### Finding 2
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[15].task
CURRENT (CURRENT_MISMATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit CURRENT: Izvēlies správný pád: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 588

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 541

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[16]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[16]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[16].prompt
CURRENT (CURRENT_MATCH): Das Kind spielt gern in (der Garten).
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 589

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 542

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[16]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[16]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[16].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 347

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 543

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[2].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 333

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 544

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[3].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 334

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 545

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[4]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[4]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[4].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 335

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 546

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[5]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[5]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[5].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 336

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 547

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[6]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[6]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[6].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 337

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 548

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[7]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[7]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[7].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 338

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 549

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[8]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[8]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[8].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 339

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 550

Lesson: kurssLesson20
Section: kurssLesson20/section[4]/promptTask[9]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[4]/promptTask[9]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[9].task
CURRENT (CURRENT_MATCH): Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 340

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 551

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[11]
CURRENT (CURRENT_MATCH): Kam jde kominík?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 592

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 552

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[14]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[14]
CURRENT (CURRENT_MATCH): Co je to město?
Audit recommendation: Co má město?
Luna recommendation: Co má město?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 593

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 553

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[18]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[18]
CURRENT (CURRENT_MATCH): Kdo potřebuje pracovat?
Audit recommendation: Kdo musí pracovat?
Luna recommendation: Kdo musí pracovat?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 594

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 554

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[20]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[20]
CURRENT (CURRENT_MATCH): Kam potřebujete nosit dříví?
Audit recommendation: Kam musíš nosit dříví?
Luna recommendation: Kam musíš nosit dříví?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 595

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 555

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[21]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[21]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[21]
CURRENT (CURRENT_MATCH): Kam dáváte dříví?
Audit recommendation: Kam strkáš dříví?
Luna recommendation: Kam strkáš dříví?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 596

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 556

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[22]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[22]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[22]
CURRENT (CURRENT_MATCH): Co jsi zapálil?
Audit recommendation: Co zapaluješ?
Luna recommendation: Co zapaluješ?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 597

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 557

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[6]
CURRENT (CURRENT_MATCH): Kde je těch deset bytů?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 590

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 558

Lesson: kurssLesson20
Section: kurssLesson20/section[5]/card[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson20/section[5]/card[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[7]
CURRENT (CURRENT_MATCH): Co je v každém bytě?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 591

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 559

Lesson: kurssLesson21
Section: kurssLesson21/section[0]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[0]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[0].items[3]
CURRENT (CURRENT_MATCH): Zwei Männer sägen mit einer Säge • Ein Mann spaltet mit einem Beil.
Audit recommendation: Dva muži řežou pilou • Jeden muž štípe sekerou.
Luna recommendation: Dva muži řežou pilou • Jeden muž štípe sekerou.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 600

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 560

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[0]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[0]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[0]
CURRENT (CURRENT_MATCH): Der Holzhauer — malkas cirtējs
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 348

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 15

## OBJECT 561

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[1]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[1]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[1]
CURRENT (CURRENT_MATCH): Sägen — zāģēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 349

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 562

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[10]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[10]
CURRENT (CURRENT_MATCH): Er tritt — viņš iet / sper soli
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 353

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 563

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[12]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[12]
CURRENT (CURRENT_MATCH): Holen — atnest / atgādāt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 354

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 564

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[14]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[14]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[14]
CURRENT (CURRENT_MATCH): Zurück — atpakaļ
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 355

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 565

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[16]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[16]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[16]
CURRENT (CURRENT_MATCH): Sehen — redzēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 356

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 566

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[18]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[18]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[18]
CURRENT (CURRENT_MATCH): Er sieht — viņš redz
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 357

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 567

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[2]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[2]
CURRENT (CURRENT_MATCH): Spalten — skaldīt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 350

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 568

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[20]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[20]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[20]
CURRENT (CURRENT_MATCH): Die Scheune — šķūnis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 358

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 569

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[29]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[29]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[29]
CURRENT (CURRENT_MATCH): Die Säge — zāģis
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 359

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 570

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[3]
CURRENT (CURRENT_MATCH): Die Axt — cirvis
Audit recommendation: Sekera
Luna recommendation: Sekera
Reason: [Luna TRANSLATION] 
Audit finding IDs: 602

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 571

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[4]
CURRENT (CURRENT_MATCH): Von — no
Audit recommendation: Od
Luna recommendation: Od
Reason: [Luna TRANSLATION] 
Audit finding IDs: 603

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 572

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[5]
CURRENT (CURRENT_MATCH): Aus — no / iz
Audit recommendation: Z / ze
Luna recommendation: Z / ze
Reason: [Luna TRANSLATION] 
Audit finding IDs: 604

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 573

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[6]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[6]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[1].items[6]
CURRENT (CURRENT_MATCH): Mit — ar
Audit recommendation: S
Luna recommendation: S
Reason: [Luna TRANSLATION] 
Audit finding IDs: 605

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 574

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[7]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[7]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[7]
CURRENT (CURRENT_MATCH): Helfen — palīdzēt
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 351

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 575

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/item[8]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/item[8]

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[1].items[8]
CURRENT (CURRENT_MATCH): Treten — iet / nākt / spert soli
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 352

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 576

Lesson: kurssLesson21
Section: kurssLesson21/section[1]/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[1]/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[].title
CURRENT (CURRENT_MATCH): Jména
Audit recommendation: Slovíčka
Luna recommendation: Slovíčka
Reason: [Luna TRANSLATION] 
Audit finding IDs: 601

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 577

Lesson: kurssLesson21
Section: kurssLesson21/section[2]/item[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[2]/item[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[2].items[4]
CURRENT (CURRENT_MATCH): [object Object]
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 606

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 578

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[0]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[0]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[0].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 360

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 579

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[1]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[1]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[1].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 361

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 580

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[10]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[10]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[10].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 370

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 581

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[11]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[11]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[11].prompt
CURRENT (CURRENT_MATCH): Wo steht ein Eimer mit Milch?
Audit recommendation: Kde stojí kbelík s mlékem?
Luna recommendation: Kde stojí kbelík s mlékem?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 607

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 582

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[11]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[11]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[11].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 371

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 583

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[12]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[12]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[12].prompt
CURRENT (CURRENT_MATCH): Woher steigt sie?
Audit recommendation: Odkud vychází?
Luna recommendation: Odkud vychází?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 608

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 584

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[12]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[12]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[12].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 372

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 585

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[13]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[13]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[13].prompt
CURRENT (CURRENT_MATCH): Wohin geht sie zurück?
Audit recommendation: Kam se vrací?
Luna recommendation: Kam se vrací?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 609

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 586

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[13]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[13]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[13].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 373

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 587

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[14]/prompt
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[14]/prompt

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[4].cards[14].prompt
CURRENT (CURRENT_MATCH): Wo arbeitet sie fleißig?
Audit recommendation: Kde pilně pracuje?
Luna recommendation: Kde pilně pracuje?
Reason: [Luna TRANSLATION] 
Audit finding IDs: 610

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 588

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[14]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[14]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[14].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 374

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 589

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[2]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[2]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[2].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 362

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 590

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[3]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[3]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[3].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 363

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 591

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[4]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[4]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[4].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 364

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 592

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[5]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[5]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[5].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 365

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 593

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[6]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[6]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[6].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 366

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 594

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[7]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[7]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[7].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 367

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 595

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[8]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[8]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[8].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 368

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 596

Lesson: kurssLesson21
Section: kurssLesson21/section[4]/promptTask[9]/task
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[4]/promptTask[9]/task

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: sections[4].cards[9].task
CURRENT (CURRENT_MATCH): Atbildi pēc lasīšanas teksta.
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 369

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 597

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[10]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[10]
CURRENT (CURRENT_MATCH): Pocházíme od přítele.
Audit recommendation: Přicházíme od přítele.
Luna recommendation: Přicházíme od přítele.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 616

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 598

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[11]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[11]
CURRENT (CURRENT_MATCH): Pocházíme od přítelkyně.
Audit recommendation: Přicházíme od přítelkyně.
Luna recommendation: Přicházíme od přítelkyně.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 617

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 599

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[12]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[12]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[12]
CURRENT (CURRENT_MATCH): Pocházíme od učitele.
Audit recommendation: Přicházíme od učitele.
Luna recommendation: Přicházíme od učitele.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 618

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 600

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[13]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[13]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[13]
CURRENT (CURRENT_MATCH): Všechny pocházejí od přítele, od přítelkyně, od učitele.
Audit recommendation: Všichni přicházejí od přítele, od přítelkyně, od učitele.
Luna recommendation: Všichni přicházejí od přítele, od přítelkyně, od učitele.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 619

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OWNER BATCH 16

## OBJECT 601

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[2]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[2]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[2]
CURRENT (CURRENT_MATCH): Z kapsy nosím hodinky.
Audit recommendation: Vytahuji hodinky z kapsy.
Luna recommendation: Vytahuji hodinky z kapsy.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 611

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 602

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[3]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[3]
CURRENT (CURRENT_MATCH): Ve sklepě je kbelík mléka.
Audit recommendation: Ve sklepě stojí kbelík s mlékem.
Luna recommendation: Ve sklepě stojí kbelík s mlékem.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 612

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 603

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[4]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[4]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[4]
CURRENT (CURRENT_MATCH): Přináším kbelík ze sklepa.
Audit recommendation: Nesu kbelík ze sklepa.
Luna recommendation: Nesu kbelík ze sklepa.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 613

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 604

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[5]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[5]
CURRENT (CURRENT_MATCH): Sundávám klobouk z hlavy.
Audit recommendation: Sundávám čepici z hlavy.
Luna recommendation: Sundávám čepici z hlavy.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 614

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 605

Lesson: kurssLesson21
Section: kurssLesson21/section[5]/card[9]
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/section[5]/card[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: sections[5].cards[9]
CURRENT (CURRENT_MATCH): Odstraňuji noty z klavíru.
Audit recommendation: Sundávám noty z klavíru.
Luna recommendation: Sundávám noty z klavíru.
Reason: [Luna TRANSLATION] 
Audit finding IDs: 615

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 606

Lesson: kurssLesson21
Section: kurssLesson21/subtitle
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/subtitle

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: subtitle
CURRENT (CURRENT_MATCH): Woher / wohin / wo, von / aus / mit + Dativ
Audit recommendation: Odkud / kam / kde, od / z / s + dativ
Luna recommendation: Odkud / kam / kde, od / z / s + dativ
Reason: [Luna TRANSLATION] 
Audit finding IDs: 599

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 607

Lesson: kurssLesson21
Section: kurssLesson21/title
File: data/cs/courseLessons.js
Object ID / Location: kurssLesson21/title

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: title
CURRENT (CURRENT_MATCH): Přednáška 21
Audit recommendation: Lekce 21
Luna recommendation: Lekce 21
Reason: [Luna TRANSLATION] 
Audit finding IDs: 598

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 608

Lesson: kurssArticlesLesson
Section: kurssArticlesLesson/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssArticlesLesson/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Články i Německý článek se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem. • Příklady článků Der Tisch - stol Die Tür - dveře Das Messer - nůž Das Mädchen - dívka ♂ Často DER DER jsou často mužské osoby, dny, měsíce, roční období a některá slova s ​​určitými konci. Pravidla -er → bieži DER, piemēram: der Computer, der Lehrer Ale ne vždy -ling → často DER, n…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 2

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 609

Lesson: kurssPronounsLesson
Section: kurssPronounsLesson/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssPronounsLesson/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Zájmena Nominativ, Akkusativ a Dativ - tvary zájmen. Nominativ - co? Ich - já Du - ty E - on Sie - ona Já - to Wir - my Ihr — ty Sie - oni / její Sie - Vy (s laskavým svolením) Akkusativ - co? Mich - já Dich — ty Ihn - jejich (v.) Sie - jeho (s.) Já - to My - my Euch — ty Sie - oni / její Sie - Vy (s laskavým svolením) Dativ - pro koho? Umírá - mně Dir — tobě Ihm - pro něj / pro to Ihr — pro ni Ná…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 3

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 610

Lesson: kurssPronunciationLesson
Section: kurssPronunciationLesson/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssPronunciationLesson/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: COURSE_LESSON_HTML
CURRENT (CURRENT_MATCH): 
            <h3>Samohlásky - dlouhé a krátké</h3>
            <p class="kurss-lesson-intro">V němčině mohou být samohlásky dlouhé nebo krátké. To má vliv na výslovnost slova.</p>

            <section class="kurss-lesson-section">
              <h4>Dlouhá samohláska</h4>
              <div class="kurss-examples"><div class="kurss-example">Teplý (varm) — teplý</div><div class="kurss-example">Střev…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 4

### Finding 2
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Samohlásky - dlouhé a krátké V němčině mohou být samohlásky dlouhé nebo krátké. To má vliv na výslovnost slova. Dlouhá samohláska Teplý (varm) — teplý Střevo (dostat) — dobrý Tat (tat) - práce / akce Flur (flūr) - chodba Weg (weg) - silnice Hut (hūt) - klobouk Hof (hōf) - dvůr Schlaf - spánek Pokud za samohláskou následuje jedna souhláska, samohláska se často vyslovuje dlouze. Krátká samohláska Pi…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: RU_CYRILLIC
Audit finding IDs: 5

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 611

Lesson: kurssConsonantsLesson
Section: kurssConsonantsLesson/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssConsonantsLesson/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: COURSE_LESSON_HTML
CURRENT (CURRENT_MATCH): 
            <h3>Souhlásky a kombinace písmen</h3>
            <p class="kurss-lesson-intro">V němčině se některé souhlásky a kombinace písmen vyslovují jinak, než se píší. Tato přednáška obsahuje nejdůležitější příklady pro začátečníky.</p>

            <section class="kurss-lesson-section">
              <h4>Souhlásky</h4>
              <div class="kurss-examples"><div class="kurss-example">Das …
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 6

### Finding 2
Severity: HIGH
Source: DETERMINISTIC
Status: FALSE_POSITIVE_CANDIDATE
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Souhlásky a kombinace písmen V němčině se některé souhlásky a kombinace písmen vyslovují jinak, než se píší. Tato přednáška obsahuje nejdůležitější příklady pro začátečníky. Souhlásky Das Rad (rāt) — kolo Die Räder (räder) - kola Bad (bāt) – koupel Bäder (bäder) - koupele Souhlásky na konci slova se často nevyslovují tak, jak jsou napsány. Ch "ch" může být vyslovováno měkké nebo tvrdé. V některých…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Foreign/script issue: LV_DIACRITIC
Audit finding IDs: 7

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 612

Lesson: lesson1
Section: training/lesson1/card[1]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson1/card[1]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson1TrainingCardsCs[1].front
CURRENT (CURRENT_MATCH): Ano, jdu.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 620

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 613

Lesson: lesson1
Section: training/lesson1/card[10]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson1/card[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson1TrainingCardsCs[10].front
CURRENT (CURRENT_MATCH): Albert a Martha přicházejí a odcházejí.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 623

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 614

Lesson: lesson1
Section: training/lesson1/card[3]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson1/card[3]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson1TrainingCardsCs[3].front
CURRENT (CURRENT_MATCH): Martha zpívá.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 621

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 615

Lesson: lesson1
Section: training/lesson1/card[9]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson1/card[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson1TrainingCardsCs[9].front
CURRENT (CURRENT_MATCH): Jdeš?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 622

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 616

Lesson: lesson2
Section: training/lesson2/card[10]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson2/card[10]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson2TrainingCardsCs[10].front
CURRENT (CURRENT_MATCH): Ano, kreslíme, ale Maria hraje.
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 627

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 617

Lesson: lesson2
Section: training/lesson2/card[11]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson2/card[11]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson2TrainingCardsCs[11].front
CURRENT (CURRENT_MATCH): Co to děláš
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 628

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 618

Lesson: lesson2
Section: training/lesson2/card[13]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson2/card[13]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson2TrainingCardsCs[13].front
CURRENT (CURRENT_MATCH): Co se děje?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 629

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 619

Lesson: lesson2
Section: training/lesson2/card[5]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson2/card[5]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson2TrainingCardsCs[5].front
CURRENT (CURRENT_MATCH): Zpívají Paul a Mary?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 624

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 620

Lesson: lesson2
Section: training/lesson2/card[7]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson2/card[7]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson2TrainingCardsCs[7].front
CURRENT (CURRENT_MATCH): Co to děláš
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 625

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 621

Lesson: lesson2
Section: training/lesson2/card[9]
File: data/cs/courseTrainingCards.js
Object ID / Location: training/lesson2/card[9]

### Finding 1
Severity: HIGH
Source: LUNA
Status: OWNER_REVIEW
Field: lesson2TrainingCardsCs[9].front
CURRENT (CURRENT_MATCH): Kreslíš?
Audit recommendation: (OWNER review)
Luna recommendation: (OWNER review)
Reason: [Luna TRANSLATION] 
Audit finding IDs: 626

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 622

Lesson: (embedded UI hints)
Section: legacyHtml/training hints
File: data/cs/courseLessons.js
Object ID / Location: legacyHtml/training hints

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: aria-label / lesson1-training-hint
CURRENT (CURRENT_MATCH): Lekcija 2; pārtulkošanas; Lekcija 2; Klikšķini; kartītes
Audit recommendation: Czech UI hints (e.g. Klepněte na kartu…)
Reason: Latvian UI leftover strings in Czech course HTML
Audit finding IDs: 375

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## OBJECT 623

Lesson: kurssSentenceStructureLesson
Section: kurssSentenceStructureLesson/legacyHtml
File: data/cs/courseLessons.js
Object ID / Location: kurssSentenceStructureLesson/legacyHtml

### Finding 1
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: COURSE_LESSON_HTML
CURRENT (CURRENT_MATCH): 
            <h3>Struktura vět</h3>
            <p class="kurss-lesson-intro">V tázací větě je sloveso v němčině obvykle na prvním místě.</p>

            <section class="kurss-lesson-section">
              <h4>Příklady</h4>
              <div class="kurss-examples"><div class="kurss-example">Du commst. - Pojďte.</div><div class="kurss-example">Odkud pocházíš? "Jdeš?"</div><div class="kurss-examp…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Chybný tvar „commst“ místo „kommst“ v české vrstvě
Audit finding IDs: 8

### Finding 2
Severity: HIGH
Source: DETERMINISTIC
Status: OWNER_REVIEW
Field: legacyHtml(stripped)
CURRENT (CURRENT_MATCH): Struktura vět V tázací větě je sloveso v němčině obvykle na prvním místě. Příklady Du commst. - Pojďte. Odkud pocházíš? "Jdeš?" Er singt. — Zpívá. Zpívej, že? — On zpívá? Spěcháš? "Stojíš?" Ano, jsem tu. — Ano, stojím. Get a? "Jdeš?" Jasně. - Ano, jdeme. Otázky s "byl" Pokud otázka začíná tázacím slovem, sloveso v němčině obvykle následuje bezprostředně za tázacím slovem. Co to děláš? "Co to děláš…
Audit recommendation: (OWNER: Czech replacement per LV MASTER meaning)
Reason: Chybný tvar „commst“ místo „kommst“ v české vrstvě
Audit finding IDs: 9

### OWNER DECISION
Status: PENDING
NEW:
OWNER note:

---

## FINAL VERDICT: **CS–DE KURS — OWNER SOURCE READY**